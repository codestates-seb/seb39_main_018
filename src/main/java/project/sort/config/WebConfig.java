package project.sort.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("http://localhost:8081", "http://3.34.181.86:8081","http://3.34.181.86:8081/v1/signup"
                        ,"http://localhost:3000",
                        "https://localhost:3000",
                        "https://127.0.0.1:3000",
                        "http://127.0.0.1:3000",
                        "http://localhost:3003",
                        "https://localhost:3003",
                        "https://127.0.0.1:3003",
                        "http://127.0.0.1:3003",
                        "*"
                )
                .allowedMethods("GET", "POST", "PUT", "PATCH", "DELETE")
        ;

    }
}

