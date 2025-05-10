package com.example.shiftschedulerbackend.controller;

import com.example.shiftschedulerbackend.dto.LoginRequest;
import com.example.shiftschedulerbackend.dto.RegisterRequest;
import com.example.shiftschedulerbackend.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthController {

    private final AuthService authService;

    @Autowired
    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody RegisterRequest registerRequest) {
        authService.register(registerRequest);
        return ResponseEntity.ok("User registered successfully!");
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody LoginRequest loginRequest) {
        String jwt = authService.login(loginRequest);
        return ResponseEntity.ok(jwt);
    }
}
