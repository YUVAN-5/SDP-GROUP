package com.example.realestate.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.realestate.auth.UserCreateRequest;
import com.example.realestate.auth.UserResponse;
import com.example.realestate.auth.UserUpdateRequest;
import com.example.realestate.model.User;

@Service
public interface UserService {

    User createUser(UserCreateRequest registerRequest);


    User updateUser(Long userId, UserUpdateRequest userUpdateRequest);

    public void deleteUser(Long userId);

    public User getUserById(Long userId);

    public List<User> getAllUsers();

    UserResponse getUserByEmail(String email);


}
