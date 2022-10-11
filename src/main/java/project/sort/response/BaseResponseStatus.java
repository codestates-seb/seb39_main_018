package project.sort.response;

import lombok.Getter;

/**
 * 에러 코드 관리
 */
@Getter
public enum BaseResponseStatus {
    /**
     * 1000 : 요청 성공
     */
    SUCCESS(true, 1000, "요청에 성공하였습니다."),


    /**
     * 2000 : Request 오류
     */
    // Common
    REQUEST_ERROR(false, 2000, "입력값을 확인해주세요."),
    EMPTY_JWT(false, 2001, "JWT를 입력해주세요."),
    INVALID_JWT(false, 2002, "유효하지 않은 JWT입니다."),
    INVALID_USER_JWT(false,2003,"권한이 없는 유저의 접근입니다."),

    // [POST]users
    USERS_EMPTY_USER_ID(false, 2010, "유저 아이디 값을 확인해주세요."),
    POST_USERS_EMPTY_ADDRESS(false, 2011, "주소를 입력해주세요."),
    POST_USERS_EMPTY_PHONENUMBER(false, 2012, "전화번호를 입력해주세요."),
    POST_USERS_EMPTY_NICKNAME(false, 2013, "별명을 입력해주세요."),
    POST_USERS_DUPLICATE_PHONENUMBER(false, 2014, "중복된 전화번호 입니다."),


    // [POST] /users
    POST_USERS_EMPTY_EMAIL(false, 2015, "이메일을 입력해주세요."),
    POST_USERS_INVALID_EMAIL(false, 2016, "이메일 형식을 확인해주세요."),
    POST_USERS_EXISTS_EMAIL(false,2017,"중복된 이메일입니다."),


    // [POST] /users/logIn
    POST_USERS_EMPTY_PHONE(false, 2018, "휴대폰번호를 입력해주세요."),
    POST_USERS_INVALID_PHONE(false, 2019, "휴대폰번호 형식을 확인해주세요."),
    POST_USERS_INVALID_USER(false, 2020, "회원가입이 필요한 유저입니다."),
    POST_USERS_EMPTY_CERTIFICATIONNUM(false, 2021, "인증번호가 입력되지 않았습니다."),
    POST_USERS_INVALID_CERTIFICATIONNUM(false, 2022, "인증번호가 일치하지 않습니다."),

    //[POST] /post/:userId
    POST_POST_INVALID_USER(false, 2023, "조회할 수 없는 유저입니다."),

    //[POST] /post/title-image
    POST_POST_INVALID_POST(false, 2024, "조회할 수 없는 게시물 입니다."),


    //[POST] /wish-list/status/
    PATCH_WISHLIST_INVALID_STATUS(false, 2025, "Status가 제대로 입력되지 않았습니다."),
    MODIFY_FAIL_WISHLIST_STATUS(false, 2026, "Status 수정에 실패하였습니다."),
    MODIFY_FAIL_INVALID_STATUS(false, 2027, "이미 삭제된 관심 목록입니다."),
    MODIFY_FAIL_INVALID_USER_WISHLIST(false, 2028, "접근 중인 유저의 정보가 아닙니다."),
    GET_EXSIT_KEYWORD(false, 2029, "키워드 갑과 카테고리 값이 동시에 입력되었습니다. 하나만 입력해주세요."),

    //[GET] /address/location
    GET_TOWN_EXIST_ERROR(false, 2030, "존재하지 않는 동네입니다."),

    //[POST]  /address/:townId
    //[POST]  /address/:townId
    CREATE_ADDRESS_ERROR(false, 2040, "동네를 3개 이상 추가할 수 없습니다."),


    //[PATCH]  /address/:townId
    PATCH_ADDRESS_EXIST_ERROR(false, 2041, "삭제할 동네가 존재하지 않습니다."),

    // [POST] /address/change/:townId
    POST_ADDRESS_CHANGE_ERROR(false, 2042, "동네를 변경할 수 없습니다"),
    POST_ADDRESS_EXIST_ERROR(false, 2043, "변경할 동네가 선택되지 않았습니다."),
    // [Patch] /address/:townId/:range
    PATCH_RANGE_RANGE_ERROR(false, 2044, "선택한 범위로 변경할 수 없습니다."),

    //[Patch] /address/certification/:townId
    PATCH_SELECTED_ADDRESS_ERROR(false, 2045, "현재 내 동네와 현재 내 위치가 일치하지 않습니다."),
    //[Patch] users/profile/{userId}
    NICKNAME_LENGTH_ERROR(false, 2046, "닉네임은 2자 이상 12자 이하로 입력해주세요"),
    NICKNAME_UPDATED_ERROR(false, 2047, "최근 30일 내 닉네임을 수정한 적이 있어요."),

    MODIFY_FAIL_INVALID_POST(false, 2070, "이미 삭제된 게시글입니다."),
    MODIFY_FAIL_INVALID_POSTIMAGE(false, 2071, "이미 삭제된 게시글 이미지입니다."),

    /**
     * 3000 : Response 오류
     */
    // Common
    RESPONSE_ERROR(false, 3000, "값을 불러오는데 실패하였습니다."),

    // [POST] /users
    DUPLICATED_EMAIL(false, 3013, "중복된 이메일입니다."),
    FAILED_TO_LOGIN(false,3014,"없는 아이디거나 비밀번호가 틀렸습니다."),



    /**
     * 4000 : Database, Server 오류
     */
    DATABASE_ERROR(false, 4000, "데이터베이스 연결에 실패하였습니다."),
    SERVER_ERROR(false, 4001, "서버와의 연결에 실패하였습니다."),

    //[PATCH] /users/{userIdx}
    MODIFY_FAIL_USERNAME(false,4014,"유저네임 수정 실패"),

    PASSWORD_ENCRYPTION_ERROR(false, 4011, "비밀번호 암호화에 실패하였습니다."),
    PASSWORD_DECRYPTION_ERROR(false, 4012, "비밀번호 복호화에 실패하였습니다.");


    // 5000 : 필요시 만들어서 쓰세요
    // 6000 : 필요시 만들어서 쓰세요


    private final boolean isSuccess;
    private final int code;
    private final String message;

    private BaseResponseStatus(boolean isSuccess, int code, String message) {
        this.isSuccess = isSuccess;
        this.code = code;
        this.message = message;
    }
}
