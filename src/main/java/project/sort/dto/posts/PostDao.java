package project.sort.dto.posts;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import project.sort.entity.posts.AllPostSelectRes;

import javax.sql.DataSource;
import java.util.List;

@Repository
public class PostDao {

    private JdbcTemplate jdbcTemplate;

    @Autowired
    public void setDataSource(DataSource dataSource) {
        this.jdbcTemplate = new JdbcTemplate(dataSource);
    }

    //특정유저 전체 판매중, 판매완료 게시물 조회
    public List<AllPostSelectRes> allPostSelect(Long userId) {
        String getAllPostSelectResQuery = "select P.id, P.title, P.price, P.status, P.photo\n" +
                "from Posts P\n" +
                "left join DealComplete DC on P.userId = DC.sellerUserId && P.id = DC.id\n" +
                "where P.userId = ? && (P.status = 'Valid' || (P.status = 'Invalid' && DC.status = 'Valid'))\n" +
                "ORDER BY P.created DESC;";    //디비에 이 쿼리를 날린다.
        return this.jdbcTemplate.query(getAllPostSelectResQuery,
                (rs, rowNum) -> new AllPostSelectRes(
                        rs.getLong("id"),
                        rs.getString("title"),
                        rs.getString("price"),
                        rs.getString("status"),
                        rs.getString("photo")),
                userId
        );
    }

    //유저아이디로 유저가 존재하는지
    public int checkUserId(Long userId) {
        String checkUserIdQuery = "select exists(select email from Users where userId = ? && status='Valid')";
        Long checkUserIdParams = userId;
        return this.jdbcTemplate.queryForObject(checkUserIdQuery,
                int.class,
                checkUserIdParams);

    }
//
//
//    //게시물 아이디로 게시물 존재하는지
//    public int checkPostId(int postId){
//        String checkPostIdQuery = "select exists(select * from Post where postId = ? && status != 'Delete')";
//        int checkPostIdParams = postId;
//        return this.jdbcTemplate.queryForObject(checkPostIdQuery,
//                int.class,
//                checkPostIdParams);
//
//    }

    //특정 유저 판매중 게시물 조회
    public List<AllPostSelectRes> salePostSelect(Long userId) {
        String getsalePostSelectQuery = "select P.id, P.title, P.price, P.status, P.photo\n" +
                "from Posts\n" +
                "where userId = ? && status = 'Valid'\n" +
                "ORDER BY created DESC;";    //디비에 이 쿼리를 날린다.
        return this.jdbcTemplate.query(getsalePostSelectQuery,
                (rs, rowNum) -> new AllPostSelectRes(
                        rs.getLong("id"),
                        rs.getString("title"),
                        rs.getString("price"),
                        rs.getString("status"),
                        rs.getString("photo")),
                userId
        );
    }

    //특정 유저 판매완료 게시물 조회
    public List<AllPostSelectRes> dealCompletePostSelect(Long sellerUserId) {
        String getdealCompletePostSelectQuery = "select P.id, P.title, P.price, P.status, P.photo\n" +
                "from Posts P\n" +
                "left join DealComplete DC on P.userId = DC.sellerUserId && P.id = DC.id\n" +
                "where P.userId = ? && (P.status = 'Invalid' && DC.status = 'Valid')\n" +
                "ORDER BY P.created DESC;";    //디비에 이 쿼리를 날린다.
        return this.jdbcTemplate.query(getdealCompletePostSelectQuery,
                (rs, rowNum) -> new AllPostSelectRes(
                        rs.getLong("id"),
                        rs.getString("title"),
                        rs.getString("price"),
                        rs.getString("status"),
                        rs.getString("photo")),
                sellerUserId
        );
    }

    //특정 유저 판매중 게시물 조회
    public List<AllPostSelectRes> hidePostSelect(Long userId) {
        String gethidePostSelectQuery = "select id, title, price, status, photo\n" +
                "from Posts\n" +
                "where userId = ? && status = 'Hide'\n" +
                "ORDER BY created DESC;";    //디비에 이 쿼리를 날린다.
        return this.jdbcTemplate.query(gethidePostSelectQuery,
                (rs, rowNum) -> new AllPostSelectRes(
                        rs.getLong("id"),
                        rs.getString("title"),
                        rs.getString("price"),
                        rs.getString("status"),
                        rs.getString("photo")),
                userId
        );
    }

    //특정 유저 구매완료 게시물 조회
    public List<AllPostSelectRes> purchaseCompletePostSelect(Long buyerUserId) {
        String getpurchaseCompletePostSelectQuery = "select P.id, P.title, P.price, P.status, P.photo\n" +
                "from Posts P\n" +
                "left join DealComplete DC on P.postId = DC.postId\n" +
                "where DC.buyerUserId = ? && (P.status = 'Invalid' && DC.status = 'Valid')\n" +
                "ORDER BY P.created DESC;";    //디비에 이 쿼리를 날린다.
        return this.jdbcTemplate.query(getpurchaseCompletePostSelectQuery,
                (rs, rowNum) -> new AllPostSelectRes(
                        rs.getLong("id"),
                        rs.getString("title"),
                        rs.getString("price"),
                        rs.getString("status"),
                        rs.getString("photo")),
                buyerUserId
        );
    }

    //
//
//    //상태 수정
//    public int modifyPostStatus(Posts posts){
//        String modifyPostStatusQuery = "update Post set status = ? where postId = ? ";
//        Object[] modifyPostStatusParams = new Object[]{patchPostStatus.getStatus(), patchPostStatus.getPostId()};
//
//        return this.jdbcTemplate.update(modifyPostStatusQuery,modifyPostStatusParams);
//    }
    //상태조회
    public int checkPostStatus(Long postId) {
        String checkPostQuery = "select exists(select * from Post where postId = ? && status!='Delete')";
        Long checkPostParams = postId;
        return this.jdbcTemplate.queryForObject(checkPostQuery,
                int.class,
                checkPostParams);

//    }
//
//        public int checkPostDeleted (Long postId){
//            String checkPostDeletedQuery = "select exists(select * from Post where postId = ? && status='Delete')";
//            Long checkPostDeletedParams = postId;
//            return this.jdbcTemplate.queryForObject(checkPostDeletedQuery,
//                    int.class,
//                    checkPostDeletedParams);
//        }
//        public int getUserIdByPostId (Long postId){
//            String getUserIdByPostIdQuery = "select userId from Post where postId = ?";
//            Long getUserIdByPostIdParams = postId;
//            return this.jdbcTemplate.queryForObject(getUserIdByPostIdQuery,
//                    int.class,
//                    getUserIdByPostIdParams);
//        }
//
//        public int checkDealcomplete (Long postId){
//            String checkDealcompleteQuery = "select exists(select * from DealComplete where postId = ?)";
//            Long checkDealcompleteParams = postId;
//            return this.jdbcTemplate.queryForObject(checkDealcompleteQuery,
//                    int.class,
//                    checkDealcompleteParams);
//        }
//
//        public void patchDealcomplete ( int postId, int userId, int buyerUserId){
//            String patchDealcompleteQuery = "update DealComplete set status = 'Valid', sellerUserId = ?, buyerUserId = ? where postId = ? ";
//            Object[] patchDealcompleteParams = new Object[]{userId, buyerUserId, postId};
//
//            this.jdbcTemplate.update(patchDealcompleteQuery, patchDealcompleteParams);
//        }
//
//        public void postDealComplete ( int postId, int userId, int buyerUserId){
//            String postDealCompleteQuery = "insert into DealComplete (postId, sellerUserId, buyerUserId, status) VALUES (?,?,?, 'Valid')";
//            Object[] postDealCompleteParams = new Object[]{postId, userId, buyerUserId};
//            this.jdbcTemplate.update(postDealCompleteQuery, postDealCompleteParams);
//
//        }
//
//        public void patchPostStatusInvalid ( int postId, String status){
//            String patchPostStatusInvalidQuery = "update Post set status = ? where postId = ?";
//            Object[] patchPostStatusInvalidParams = new Object[]{status, postId};
//
//            this.jdbcTemplate.update(patchPostStatusInvalidQuery, patchPostStatusInvalidParams);
//        }
//
//        public void patchDealcompleteSale ( int postId){
//            String patchDealcompleteSaleQuery = "update DealComplete set status = 'Invalid' where postId = ? ";
//            Object[] patchDealcompleteSaleParams = new Object[]{postId};
//
//            this.jdbcTemplate.update(patchDealcompleteSaleQuery, patchDealcompleteSaleParams);
//
//        }
//
//
//        public void patchDealcompleteReserved ( int postId, int userId, int bookerUserId){
//            String patchDealcompleteReservedQuery = "update DealComplete set status = 'Reserved', sellerUserId = ?, bookerUserId = ? where postId = ? ";
//            Object[] patchDealcompleteReservedParams = new Object[]{userId, bookerUserId, postId};
//
//            this.jdbcTemplate.update(patchDealcompleteReservedQuery, patchDealcompleteReservedParams);
//        }
//
//
//        public void postDealcompleteReserved ( int postId, int userId, int bookerUserId){
//            String postDealCompleteQuery = "insert into DealComplete (postId, sellerUserId, bookerUserId, status) VALUES (?,?,?, 'Reserved')";
//            Object[] postDealCompleteParams = new Object[]{postId, userId, bookerUserId};
//            this.jdbcTemplate.update(postDealCompleteQuery, postDealCompleteParams);
//        }
    }
}