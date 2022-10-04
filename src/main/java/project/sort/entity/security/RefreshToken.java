package project.sort.entity.security;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import project.sort.entity.posts.BaseTimeEntity;
import project.sort.entity.user.Users;

import javax.persistence.*;

@Entity
@Table(name = "refreshTokens")
@Getter
@NoArgsConstructor
public class RefreshToken extends BaseTimeEntity {

    @Id
    @Column(name = "keyIds")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long keyIds;

    @Column(name = "keyNum", nullable = false)
    private Long keyNum;

    @Column(name = "tokenNum", nullable = false)
    private String tokenNum;

    //리프레쉬토큰과 유저 일대일 매핑
    @OneToOne(mappedBy = "refreshToken", orphanRemoval = true, fetch = FetchType.LAZY, cascade = CascadeType.ALL) //, orphanRemoval = true, fetch = FetchType.LAZY, cascade = CascadeType.ALL 추가설정할 수 있음
    private Users users;
    public RefreshToken updateToken(String tokeNum) {
        this.tokenNum = tokenNum;
        return this;
    }

    @Builder
    public RefreshToken(Long keyNum, String tokenNum, Users users) {
        this.keyNum = keyNum;
        this.tokenNum = tokenNum;
        this.users = users;
    }
}
