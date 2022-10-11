package project.sort.dto.posts;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
@Getter
@Setter
public class PostDto  {

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