package com.example.shiftschedulerbackend.controller;

import com.example.shiftschedulerbackend.dto.LoginRequest;
import com.example.shiftschedulerbackend.dto.LoginResponse;
import com.example.shiftschedulerbackend.model.User;
import com.example.shiftschedulerbackend.repository.UserRepository;
import com.example.shiftschedulerbackend.service.JwtUtil;
import lombok.RequiredArgsConstructor;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:8080")
@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtUtil jwtUtil;

    @PostMapping("/login")
    public LoginResponse login(@RequestBody LoginRequest request) {
        User user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new RuntimeException("Invalid credentials"));

        if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
            throw new RuntimeException("Invalid credentials");
        }

        String token = jwtUtil.generateToken(user.getEmail());
        return new LoginResponse(token, user.getRole().name());
    }
}
