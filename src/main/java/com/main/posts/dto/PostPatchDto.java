package com.main.posts.dto;


import com.main.posts.repository.BaseTimeEntity;
import com.main.posts.repository.Posts;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PostPatchDto {

    private String title;

    private String text;

    private String price;

    private String end_date;

    private String seat_number;

    private String region;


}
