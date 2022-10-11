package project.sort.entity.chat;

import org.springframework.data.jpa.repository.JpaRepository;
import project.sort.entity.user.Users;

import java.util.List;

public interface ChatRoomJoinRepository extends JpaRepository<ChatRoomJoin,Long> {
    List<ChatRoomJoin> findByUsers(Users users);
    List<ChatRoomJoin> findByChatRoom(ChatRoom chatRoom);
}