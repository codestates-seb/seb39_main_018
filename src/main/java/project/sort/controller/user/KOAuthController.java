package project.sort.controller.user;

import com.google.gson.Gson;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.env.Environment;
import org.springframework.http.*;
import org.springframework.stereotype.Controller;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.servlet.ModelAndView;
import project.sort.advice.exception.CCommunicationException;
import project.sort.response.CommonResult;
import project.sort.service.user.KakaoService;
import project.sort.service.user.ResponseService;

@Api(tags = "4. OAuth 2.0 Kakao")
@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/oauth/kakao")
@CrossOrigin(origins = "*",allowedHeaders = "*")
public class KOAuthController {

    private final RestTemplate restTemplate;
    private final Environment env;
    private final KakaoService kakaoService;
    private final ResponseService responseService;

    @Value("${spring.url.base}")
    private String baseUrl;

    @Value("${spring.social.kakao.client-id}")
    private String kakaoClientId;

    @Value("${spring.social.kakao.redirect}")
    private String kakaoRedirectUri;

    @ApiOperation(value = "카카오 로그인", notes = "소셜 계정으로 연동")
    @GetMapping("/login")
    @CrossOrigin(origins = "http://localhost:8080")
    public ModelAndView socialLogin(ModelAndView mav) {

        StringBuilder loginUri = new StringBuilder()
                .append(env.getProperty("social.kakao.url.login"))
                .append("?response_type=code")
                .append("&client_id=").append(kakaoClientId)
                .append("&redirect_uri=").append(baseUrl).append(kakaoRedirectUri);
        mav.addObject("loginUrl", loginUri);
        mav.setViewName("social/login");
        return mav;
    }

    @ApiOperation(value = "인가토큰", notes = "인가코드얻어서 카카오에게 토큰 요청")
    @GetMapping(value = "/redirect")
    @CrossOrigin(origins = "http://localhost:8080")
    public ModelAndView redirectKakao(
            ModelAndView mav,
            @ApiParam(value = "Authorization Code", required = true)
            @RequestParam String code) {

        mav.addObject("authInfo", kakaoService.getKakaoTokenInfo(code));
        mav.setViewName("social/redirectKakao");
        return mav;
    }
    @ApiOperation(value = "카카오유저와 연결끊", notes = "회원의 정보제공동의 불충족 및 탈퇴 등의 필로 연결 끊음.")
    @GetMapping(value = "/unlink")
    @CrossOrigin(origins = "http://localhost:8080")
    public CommonResult unlinkKakao(@RequestParam String accessToken) {

        String unlinkUri = env.getProperty("social.kakao.url.unlink");
        if (unlinkUri == null) throw new CCommunicationException();

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);
        headers.set("Authorization", "Bearer " + accessToken);

        HttpEntity<MultiValueMap<String, String>> request = new HttpEntity<>(null, headers);

        ResponseEntity<String> response = restTemplate.postForEntity(unlinkUri, request, String.class);
        if (response.getStatusCode() == HttpStatus.OK) {
            log.info("unlink " + response.getBody());
            return responseService.getSuccessResult();
        }
        throw new CCommunicationException();
    }
}
