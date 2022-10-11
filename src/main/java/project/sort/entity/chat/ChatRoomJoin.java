package project.sort.entity.chat;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import project.sort.entity.user.Users;

import javax.persistence.*;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ChatRoomJoin {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "join_id")
    private Long id;

    public ChatRoomJoin(Users users , ChatRoom chatRoom){
        this.users = users;
        this.chatRoom = chatRoom;
    }

    @ManyToOne
    @JoinColumn(name =  "user_id")
    private Users users;

    @ManyToOne
    @JoinColumn(name = "room_id")
    private ChatRoom chatRoom;

}