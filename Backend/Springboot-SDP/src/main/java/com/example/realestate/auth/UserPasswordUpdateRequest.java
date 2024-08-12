package com.example.realestate.auth;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@AllArgsConstructor
//Yet to Implement
public class UserPasswordUpdateRequest {
    private String password;
}
