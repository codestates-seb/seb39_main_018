package com.main.posts.dto;

import com.main.posts.repository.BaseTimeEntity;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Builder
@Getter
@Setter
public class PostResponseDto extends BaseTimeEntity {

    private String title;

    private String body;

    private String price;

    private String end_date;

    private String seat_number;

    private String region;

    private String photo;

    private String status;

    private LocalDateTime createdDate;
}
