package com.main.posts;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;


import javax.persistence.*;


@Table(name = "post")
@Getter
@Entity
@NoArgsConstructor /// 애러 난부분
public class Posts {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(length = 40, nullable = false)
    private String title;

    @Builder
    public Posts(String title) {
        this.title = title;
    }
}
