package project.sort.entity.chat;

import lombok.Getter;
import lombok.NoArgsConstructor;
import project.sort.entity.user.Users;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter
@NoArgsConstructor
public class Notice {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String content;
    private Type type;
    private String link;

    //Message인 경우 채팅방번호, 댓글인 경우 게시글 번호, 팔로우인경우 마이페이지 번호
    @ManyToOne
    private Users users;

    private LocalDateTime time;

    public Notice(Type type, Users users, String content, String link, LocalDateTime time){
        this.type = type;
        this.users = users;
        this.content = content;
        this.link = link;
        this.time = time;
    }
}