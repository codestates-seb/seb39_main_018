package project.sort.controller.user;

import io.swagger.annotations.Api;
import lombok.RequiredArgsConstructor;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import project.sort.advice.exception.CAccessDeniedException;
import project.sort.advice.exception.CAuthenticationEntryPointException;
import project.sort.response.CommonResult;

@Api(tags = {"3. Exception"})
@RequiredArgsConstructor
@RestController
@RequestMapping("/exception")
public class ExceptionController {

    @GetMapping("/entryPoint")
    public CommonResult entrypointException() {
        throw new CAuthenticationEntryPointException();
    }

    @GetMapping("/accessDenied")
    public CommonResult accessDeniedException() {
        throw new CAccessDeniedException();
    }
}
