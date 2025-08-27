package com.example.server.service;

import com.example.server.dto.AuthResponse;
import com.example.server.dto.LoginRequest;
import com.example.server.model.User;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Optional;

@Service
public class AuthService {
    private static final Logger logger = LoggerFactory.getLogger(AuthService.class);

    @Autowired
    private UserService userService;
    @Autowired
    private JwtService jwtService;

    public AuthResponse login(LoginRequest request) {
        logger.debug("Xử lý đăng nhập cho: {}", request.getUsernameOrEmail());
        Optional<User> userOpt = userService.findByUsernameOrEmail(request.getUsernameOrEmail());
        if (userOpt.isEmpty()) {
            logger.warn("Không tìm thấy người dùng với username hoặc email: {}", request.getUsernameOrEmail());
            throw new RuntimeException("Tên người dùng hoặc email không đúng");
        }
        User user = userOpt.get();
        if (!userService.matchesPassword(request.getPassword(), user.getPassword())) {
            logger.warn("Mật khẩu không khớp cho người dùng: {}", request.getUsernameOrEmail());
            throw new RuntimeException("Mật khẩu không đúng");
        }
        logger.info("Đăng nhập thành công cho: {}", request.getUsernameOrEmail());
        String jwt = jwtService.generateToken(user);
        AuthResponse response = new AuthResponse();
        response.setToken(jwt);
        response.setRole(user.getRole());
        return response;
    }
}