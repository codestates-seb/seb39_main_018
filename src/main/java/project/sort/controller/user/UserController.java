package project.sort.controller.user;

import io.swagger.annotations.*;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import project.sort.dto.user.UserRequestDto;
import project.sort.dto.user.UserResponseDto;
import project.sort.response.CommonResult;
import project.sort.response.ListResult;
import project.sort.response.SingleResult;
import project.sort.service.user.ResponseService;
import project.sort.service.user.UserService;

//@PreAuthorize("hasRole('ROLE_USER') and hasAnyRole('ROLE_IORN', 'ROLE_SILVER', 'ROLE_GOLD', 'ROLE_BRONZE')")
@Api(tags = {"2. User"})
@RequiredArgsConstructor
@RestController
@RequestMapping("/v1")
@CrossOrigin(origins = "*")
public class UserController {

    private final UserService userService;
    private final ResponseService responseService;

    //@PreAuthorize("hasRole('ROLE_PLATINUM') and hasRole('ROLE_GOLD')")
    @ApiImplicitParams({
            @ApiImplicitParam(
                    name = "X-AUTH-TOKEN",
                    value = "로그인 성공 후 AccessToken",
                    required = true, dataType = "String", paramType = "header")
    })
    @ApiOperation(value = "회원 단건 검색", notes = "userId로 회원을 조회합니다.")
    @CrossOrigin(origins = "http://localhost:8080")
    @GetMapping("/user/id/{userId}")
    public SingleResult<UserResponseDto> findUserById
    (@ApiParam(value = "회원 ID", required = true) @PathVariable Long userId,
     @ApiParam(value = "언어", defaultValue = "ko") @RequestParam String lang) {
        return responseService.getSingleResult(userService.findById(userId));
    }

    @ApiImplicitParams({
            @ApiImplicitParam(
                    name = "X-AUTH-TOKEN",
                    value = "로그인 성공 후 AccessToken",
                    required = true, dataType = "String", paramType = "header")
    })
    @ApiOperation(value = "회원 단건 검색 (이메일)", notes = "이메일로 회원을 조회합니다.")
    @GetMapping("/user/email/{email}")
    @CrossOrigin(origins = "http://localhost:8080")
    public SingleResult<UserResponseDto> findUserByEmail
            (@ApiParam(value = "회원 이메일", required = true) @PathVariable String email,
             @ApiParam(value = "언어", defaultValue = "ko") @RequestParam String lang) {
        return responseService.getSingleResult(userService.findByEmail(email));
    }

    @ApiImplicitParams({
            @ApiImplicitParam(
                    name = "X-AUTH-TOKEN",
                    value = "로그인 성공 후 AccessToken",
                    required = true, dataType = "String", paramType = "header")
    })
    @ApiOperation(value = "회원 목록 조회", notes = "모든 회원을 조회합니다.")
    @GetMapping("/users")
    @CrossOrigin(origins = "http://localhost:8080")
    public ListResult<UserResponseDto> findAllUser() {
        return responseService.getListResult(userService.findAllUser());
    }

    @ApiImplicitParams({
            @ApiImplicitParam(
                    name = "X-AUTH-TOKEN",
                    value = "로그인 성공 후 AccessToken",
                    required = true, dataType = "String", paramType = "header")
    })
    @ApiOperation(value = "회원 수정", notes = "회원 정보를 수정합니다.")
    @PutMapping("/user")
    @CrossOrigin(origins = "http://localhost:8080")
    public SingleResult<Long> update (
            @ApiParam(value = "회원 ID", required = true) @RequestParam Long userId
           ,@ApiParam(value = "회원 이름", required = true) @RequestParam String name
            ,@ApiParam(value = "회원 이메일", required = true) @RequestParam String email
            ) {
        UserRequestDto userRequestDto = UserRequestDto.builder()
                .name(name)
                .email(email)
                .build();
        return responseService.getSingleResult(userService.update(userId, userRequestDto));
    }

    @ApiImplicitParams({
            @ApiImplicitParam(
                    name = "X-AUTH-TOKEN",
                    value = "로그인 성공 후 AccessToken",
                    required = true, dataType = "String", paramType = "header")
    })
    @ApiOperation(value = "회원 삭제", notes = "회원을 삭제합니다.")
    @DeleteMapping("/user/{userId}")
    @CrossOrigin(origins = "http://localhost:8080")
    public CommonResult delete(
            @ApiParam(value = "회원 아이디", required = true) @PathVariable Long userId) {
        userService.delete(userId);
        return responseService.getSuccessResult();
    }
}
