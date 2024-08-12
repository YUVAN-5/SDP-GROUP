package com.example.realestate.controller;

import static org.springframework.http.HttpStatus.OK;

import java.util.List;
import java.util.Optional;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.realestate.auth.LoginRequest;
import com.example.realestate.auth.RegisterRequest;
import com.example.realestate.model.User;
import com.example.realestate.service.AuthService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
@Tag(name = "Authentication", description = "Endpoints for user authentication")
public class AuthController {

    private final AuthService authService;

    @PostMapping("/register")
    @Operation(summary = "Register a new user", description = "Allows users to register by providing necessary registration details.")
    public ResponseEntity<?> register(
            @Parameter(description = "Registration details of the user") @RequestBody RegisterRequest registerRequest) {
        return new ResponseEntity<>(authService.register(registerRequest), OK);
    }

    @PostMapping("/login")
    @Operation(summary = "Authenticate user", description = "Allows users to authenticate by providing valid login credentials.")
    public ResponseEntity<?> login(
            @Parameter(description = "Login credentials of the user") @RequestBody LoginRequest loginRequest) {
        return new ResponseEntity<>(authService.login(loginRequest), OK);
    }

    @GetMapping("/get")
    @Operation(summary = "Get all users", description = "Fetches a list of all registered users.")
    public ResponseEntity<List<User>> getAllUsers() {
        List<User> users = authService.getAllUsers();
        return new ResponseEntity<>(users, OK);
    }

    @GetMapping("/get/{email}")
    @Operation(summary = "Get user by email", description = "Fetches user details by email.")
    public ResponseEntity<User> getUserByEmail(@PathVariable("email") String email) {
        return authService.getUserByEmail(email)
                .map(user -> new ResponseEntity<>(user, OK))
                .orElseGet(() -> ResponseEntity.status(404).body(null));
    }

    @PutMapping("/update/{email}")
    @Operation(summary = "Update user by email", description = "Update user details by email.")
    public ResponseEntity<?> updateUserByEmail(@PathVariable("email") String email,
            @RequestBody User updatedUser) {
        Optional<User> updated = authService.updateUserByEmail(email, updatedUser);
        if (updated.isPresent()) {
            return new ResponseEntity<>("User updated successfully", OK);
        } else {
            return ResponseEntity.status(404).body("User not found");
        }
    }

    @DeleteMapping("/delete/{email}")
    @Operation(summary = "Delete user by email", description = "Deletes a user by their email address.")
    public ResponseEntity<?> deleteUserByEmail(@PathVariable("email") String email) {
        Optional<User> user = authService.getUserByEmail(email);
        if (user.isPresent()) {
            authService.deleteUserByEmail(email);
            return new ResponseEntity<>("User deleted successfully", OK);
        } else {
            return ResponseEntity.status(404).body("User not found");
        }
    }
}