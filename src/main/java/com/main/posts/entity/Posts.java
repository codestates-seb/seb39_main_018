package com.main.posts.entity;

import com.main.posts.repository.BaseTimeEntity;
import lombok.*;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;


import javax.persistence.*;
import java.time.LocalDateTime;


@Table(name = "post")
@Getter
@Setter
@Entity
@Builder
@NoArgsConstructor/// 애러 난부분
@AllArgsConstructor
public class Posts extends BaseTimeEntity {

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

    @Column
    private String photo;

    @Column
    private String status;


    @Column(nullable = false)
    @LastModifiedDate
    private LocalDateTime createdDate;

    @Column(columnDefinition = "integer default 0", nullable = false)
    private int view;



    public void changePosts(String title, String body, String price,
                 String end_date, String seat_number, String region,  String photo, String status
                            ) {
        if(title != null) this.title = title;
        if(body != null) this.body = body;
        if(price != null) this.price = price;
        if(end_date != null) this.end_date = end_date;
        if(seat_number !=null) this.seat_number = seat_number;
        if(region != null) this.region = region;
        if(photo != null) this.photo = photo;
        if(status != null) this.status = status;
    }


}
