package project.sort.dto.chat;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
public class ChatRoomDto {
    private Long senderId;
    private String senderName;
    private String senderEmail;
    private List<ChatRoomForm> chatRooms;
}