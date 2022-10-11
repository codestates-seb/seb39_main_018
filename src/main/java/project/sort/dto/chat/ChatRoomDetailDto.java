package project.sort.dto.chat;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import project.sort.entity.chat.ChatMessage;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
public class ChatRoomDetailDto {
    private Long senderId;
    private String senderName;
    private String senderEmail;
    private String receiverName;
    private List<ChatMessage> messages;
    private Long chatRoomId;

}