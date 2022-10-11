package project.sort.service.chat;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import project.sort.dto.chat.ChatMessageForm;
import project.sort.entity.chat.ChatMessage;
import project.sort.entity.chat.ChatMessageRepository;
import project.sort.service.user.UserService;

import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
public class ChatMessageService {
    private final ChatMessageRepository chatMessageRepository;
    private final UserService userService;
    private final ChatRoomService chatRoomService;
    @Transactional
    public void save(ChatMessageForm message) {
        ChatMessage chatMessage = new ChatMessage(message.getMessage(), LocalDateTime.now()
                ,chatRoomService.findById(message.getChatRoomId()).get()
                ,userService.findUserByEmailMethod(message.getSender()));
        chatMessageRepository.save(chatMessage);
//        noticeService.addMessageNotice(chatMessage.getChatRoom(),chatMessage.getWriter(), message.getReceiver(),chatMessage.getTime());
    }
}