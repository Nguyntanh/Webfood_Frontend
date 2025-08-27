package com.example.server.service;

import com.example.server.dto.RegisterRequest;
import com.example.server.model.Customer;
import com.example.server.model.User;
import com.example.server.model.Vendor;
import com.example.server.repository.CustomerRepository;
import com.example.server.repository.UserRepository;
import com.example.server.repository.VendorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Service
public class UserService {
    private static final Logger logger = LoggerFactory.getLogger(UserService.class);

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private VendorRepository vendorRepository;
    @Autowired
    private CustomerRepository customerRepository;
    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    public User register(RegisterRequest request) {
        logger.debug("Đăng ký người dùng: {}", request.getUsername());
        if (userRepository.findByUsername(request.getUsername()).isPresent() ||
            userRepository.findByEmail(request.getEmail()).isPresent()) {
            logger.warn("Username hoặc email đã tồn tại: {}", request.getUsername());
            throw new RuntimeException("Username or email already exists");
        }
        User user = new User();
        user.setUsername(request.getUsername());
        user.setEmail(request.getEmail());
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        user.setRole(request.getRole());
        user.setFullName(request.getFullName());
        user.setPhone(request.getPhone());
        user.setAddress(request.getAddress());
        user.setActive(request.getActive());
        user.setDob(request.getDob());
        logger.debug("Lưu người dùng: {}", user.getUsername());
        User savedUser = userRepository.save(user);
        if ("VENDOR".equals(request.getRole())) {
            Vendor vendor = new Vendor();
            vendor.setUser(savedUser);
            vendor.setName(request.getVendorName());
            vendor.setDescription(request.getVendorDescription());
            vendor.setLocation(request.getVendorLocation());
            vendor.setAverageRating(0f);
            vendor.setTotalRatings(0);
            vendorRepository.save(vendor);
        } else if ("CUSTOMER".equals(request.getRole())) {
            Customer customer = new Customer();
            customer.setUser(savedUser);
            customer.setOrderHistory("");
            customerRepository.save(customer);
        }
        return savedUser;
    }

    public Optional<User> findByUsernameOrEmail(String usernameOrEmail) {
        logger.debug("Tìm người dùng với username hoặc email: {}", usernameOrEmail);
        Optional<User> user = userRepository.findByUsername(usernameOrEmail)
                .or(() -> userRepository.findByEmail(usernameOrEmail));
        logger.debug("Kết quả tìm kiếm: {}", user.isPresent() ? "Tìm thấy" : "Không tìm thấy");
        return user;
    }

    public boolean matchesPassword(String rawPassword, String encodedPassword) {
        logger.debug("So sánh mật khẩu");
        boolean matches = passwordEncoder.matches(rawPassword, encodedPassword);
        logger.debug("Kết quả so sánh mật khẩu: {}", matches);
        return matches;
    }
}