package project.sort.controller.chat;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import project.sort.dto.chat.ChatRoomDetailDto;
import project.sort.dto.chat.ChatRoomDto;
import project.sort.dto.chat.ChatRoomForm;
import project.sort.entity.chat.ChatMessage;
import project.sort.entity.chat.ChatRoom;
import project.sort.entity.chat.ChatRoomJoin;
import project.sort.entity.user.Users;
import project.sort.service.chat.ChatRoomJoinService;
import project.sort.service.chat.ChatRoomService;
import project.sort.service.user.UserService;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Api(tags = {"6. chatMake"})
@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "*",allowedHeaders = "*")
public class ChatRoomController {
    private final UserService userService;
    private final ChatRoomJoinService chatRoomJoinService;
    private final ChatRoomService chatRoomService;


    //홈의 채팅버튼을 눌렀을때
    @ApiOperation(value = "채팅홈", notes = "전체 채팅목록을 확인합니다.")
    @GetMapping("/api/chat")
    @ResponseBody
    public Object chatHome(@RequestParam("email") String email) {
        ChatRoomDto chatRoomDto = new ChatRoomDto();

        chatRoomDto.setSenderEmail(email);

        Users users = userService.findUserByEmailMethod(email);
        List<ChatRoomJoin> chatRoomJoins = chatRoomJoinService.findByUsers(users);
        List<ChatRoomForm> chatRooms = chatRoomService.setting(chatRoomJoins, users);

        chatRoomDto.setChatRooms(chatRooms);

        if (users == null) {
            chatRoomDto.setSenderName("");
            chatRoomDto.setSenderId(0L);
        } else {
            chatRoomDto.setSenderName(users.getUsername());
            chatRoomDto.setSenderId(users.getUserId());
        }
        return chatRoomDto;
    }


    //바로 채팅버튼 눌렀을 때 -> roomdetail.html
    @ApiOperation(value = "채팅홈 채팅생성", notes = "새로운 채팅을 생성합니다.")
    @PostMapping("/api/chat/newChat")
    public String newChat(@RequestParam("receiver") String receiverEmail, @RequestParam("sender") String senderEmail) {//, RedirectAttributes redirectAttributes
        Long chatRoomId = chatRoomJoinService.newRoom(receiverEmail, senderEmail);
//        redirectAttributes.addAttribute("email",user2);
        return "redirect:/personalChat/?chatRoomId=" + chatRoomId + "&email=" + senderEmail;
//        return "redirect:/personalChat/" + chatRoomId;
    }

    //개인의 채팅 생성과 관련
    @ApiOperation(value = "개인채팅", notes = "생성,수정,삭제.")
    @RequestMapping(value = {"/personalChat"})
    @ResponseBody
    public Object goChat(@RequestParam("chatRoomId") Long chatRoomId, @RequestParam("email") String senderEmail) {
//        String email = (String) request.getAttribute("userEmail");
        Users userByEmailMethod = userService.findUserByEmailMethod(senderEmail);
        Optional<ChatRoom> opt = chatRoomService.findById(chatRoomId);
        ChatRoom chatRoom = opt.get();
        List<ChatMessage> messages = chatRoom.getMessages();
        Collections.sort(messages, (t1, t2) -> {
            if (t1.getId() > t2.getId()) return -1;
            else return 1;
        });

        ChatRoomDetailDto chatRoomDetailDto = new ChatRoomDetailDto();

        if (userByEmailMethod == null) {
            chatRoomDetailDto.setSenderName("");
            chatRoomDetailDto.setSenderId(0L);
        } else {
            chatRoomDetailDto.setSenderName(userByEmailMethod.getUsername());
            chatRoomDetailDto.setSenderId(userByEmailMethod.getUserId());
        }
        List<ChatRoomJoin> list = chatRoomJoinService.findByChatRoom(chatRoom);
        chatRoomDetailDto.setMessages(messages);
        chatRoomDetailDto.setSenderEmail(userByEmailMethod.getEmail());
        chatRoomDetailDto.setChatRoomId(chatRoomId);
        int cnt = 0;
        for (ChatRoomJoin join : list) {
            if (!join.getUsers().getUsername().equals(userByEmailMethod.getUsername())) {
                chatRoomDetailDto.setReceiverName(join.getUsers().getUsername());
                ++cnt;
            }
        }
        if (cnt >= 2) {
            return "redirect:/api/chat";
        }
        if (cnt == 0) {
            chatRoomDetailDto.setReceiverName("");
        }
        return chatRoomDetailDto;
    }


}