package com.example.server.dto;

import lombok.Data;
import java.util.Date;

@Data
public class RegisterRequest {
    private String username;
    private String email;
    private String password;
    private String role; // "VENDOR" or "CUSTOMER"
    private String fullName;
    private String phone;
    private String address;
    private Boolean active;
    private Date dob;
    // Các trường cho Vendor nếu role=VENDOR
    private String vendorName;
    private String vendorDescription;
    private String vendorLocation;
}