package com.example.api.service.mail;

import com.example.api.entity.user.User;

public interface IEmailService {
    void sendResetPasswordEmail(String email, String otp);
    boolean validateOtp(String otpCode, String email);
    String generateOtp(User user);
}
