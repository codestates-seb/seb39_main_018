package project.sort.service.chat;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import project.sort.entity.chat.ChatRoom;
import project.sort.entity.chat.ChatRoomJoin;
import project.sort.entity.chat.ChatRoomJoinRepository;
import project.sort.entity.chat.ChatRoomRepository;
import project.sort.entity.user.Users;
import project.sort.service.user.UserService;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
@RequiredArgsConstructor
public class ChatRoomJoinService {
    private final ChatRoomJoinRepository chatRoomJoinRepository;
    private final ChatRoomRepository chatRoomRepository;
    private final UserService userService;

    public List<ChatRoomJoin> findByUsers(Users users) {
        return chatRoomJoinRepository.findByUsers(users);
    }

    @Transactional(readOnly = true)
    public Long check(String user1,String user2){
        Users userFirst = userService.findUserByEmailMethod(user1);
        List<ChatRoomJoin> listFirst = chatRoomJoinRepository.findByUsers(userFirst);
        Set<ChatRoom> setFirst = new HashSet<>();
        for(ChatRoomJoin chatRoomJoin : listFirst){
            setFirst.add(chatRoomJoin.getChatRoom());
        }
        Users userSecond = userService.findUserByEmailMethod(user2);
        List<ChatRoomJoin> listSecond = chatRoomJoinRepository.findByUsers(userSecond);
        for(ChatRoomJoin chatRoomJoin : listSecond){
            if(setFirst.contains(chatRoomJoin.getChatRoom())){
                return chatRoomJoin.getChatRoom().getId();
            }
        }
        return 0L;
    }

    @Transactional
    public Long newRoom(String user1, String user2) {
        Long ret = check(user1,user2);
        if(ret != 0){
            //이미 존재하는 방이면 해당 방 번호 리턴
            return ret;
        }
        ChatRoom chatRoom = new ChatRoom();
        ChatRoom newChatRoom = chatRoomRepository.save(chatRoom);
        if(user1.equals(user2)){
            //나 자신과의 채팅은 한명만 존재
            createRoom(user1,newChatRoom);
        }
        else{
            //두명 다 입장
            createRoom(user1,newChatRoom);
            createRoom(user2,newChatRoom);
        }
        return newChatRoom.getId();
    }

    @Transactional
    public void createRoom(String users, ChatRoom chatRoom){
        ChatRoomJoin chatRoomJoin = new ChatRoomJoin(userService.findUserByEmailMethod(users),chatRoom);
        chatRoomJoinRepository.save(chatRoomJoin);
    }

    @Transactional(readOnly = true)
    public List<ChatRoomJoin> findByChatRoom(ChatRoom chatRoom) {
        return chatRoomJoinRepository.findByChatRoom(chatRoom);
    }

    @Transactional
    public void delete(ChatRoomJoin chatRoomJoin) {
        chatRoomJoinRepository.delete(chatRoomJoin);
    }

    public String findAnotherUser(ChatRoom chatRoom, String name) {
        List<ChatRoomJoin> chatRoomJoins = findByChatRoom(chatRoom);
        for(ChatRoomJoin chatRoomJoin : chatRoomJoins){
            if(!name.equals(chatRoomJoin.getUsers().getUsername())){
                return chatRoomJoin.getUsers().getUsername();
            }
        }
        return name;
    }
}