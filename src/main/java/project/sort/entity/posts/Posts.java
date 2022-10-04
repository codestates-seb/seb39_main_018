package project.sort.entity.posts;

import lombok.*;
import project.sort.entity.user.Users;

import javax.persistence.*;

@Table(name = "post")
@Getter
@Setter
@Entity
@Builder
@NoArgsConstructor/// 애러 난부분
@AllArgsConstructor
public class Posts extends BaseTimeEntity{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(length = 2000, nullable = false)
    private String title;

    @Column(nullable = false)
    private String body;

    @Column(nullable = false)
    private String price;

    @Column(nullable = false)
    private String end_date;

    @Column(nullable = false)
    private String seat_number;

    @Column(nullable = false)
    private String region;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "usersId", nullable = false)
    private Users users;

    public void changePosts(String title, String body, String price,
                            String end_date, String seat_number, String region) {
        if(title != null) this.title = title;
        if(body != null) this.body = body;
        if(price != null) this.price = price;
        if(end_date != null) this.end_date = end_date;
        if(seat_number !=null) this.seat_number = seat_number;
        if(region != null) this.region = region;
    }
}