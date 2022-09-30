package project.sort.dto.posts;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import project.sort.entity.posts.BaseTimeEntity;

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

    private LocalDateTime created_date;

}