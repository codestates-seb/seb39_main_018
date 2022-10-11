package project.sort.entity.posts;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class AllPostSelectRes {
    private Long id;
//    private String region;
    private String title;
//    private int categoryId;
    private String price;
//    private String body;
    private String status;
    private String photo;

}