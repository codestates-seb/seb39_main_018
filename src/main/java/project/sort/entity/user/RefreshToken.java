package project.sort.entity.user;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import project.sort.entity.posts.BaseTimeEntity;
import javax.persistence.*;

@Entity
@Table(name = "refreshTokens")
@Getter
@NoArgsConstructor
public class RefreshToken extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long keyIds;

    @Column(name = "keyNum", nullable = false)
    private Long keyNum;

    @Column(name = "tokenNum", nullable = false)
    private String tokenNum;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "usersId", nullable = false)
    private Users users;

    public RefreshToken updateToken(String tokeNum) {
        this.tokenNum = tokenNum;
        return this;
    }

    @Builder
    public RefreshToken(Long keyNum, String tokenNum) {
        this.keyNum = keyNum;
        this.tokenNum = tokenNum;
    }
}
