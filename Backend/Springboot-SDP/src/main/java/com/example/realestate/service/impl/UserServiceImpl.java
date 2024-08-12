// package com.example.realestate.service.impl;

// import org.springframework.security.crypto.password.PasswordEncoder;
// import org.springframework.stereotype.Service;

// import com.example.realestate.auth.UserCreateRequest;
// import com.example.realestate.auth.UserUpdateRequest;
// import com.example.realestate.auth.UserResponse;
// import com.example.realestate.model.User;
// import com.example.realestate.repo.UserRepo;
// import com.example.realestate.service.UserService;

// import lombok.RequiredArgsConstructor;

// @Service
// @RequiredArgsConstructor
// @SuppressWarnings("null")
// public class UserServiceImpl implements UserService {
//     private final UserRepo userRepository;
//     private final PasswordEncoder passwordEncoder;

//     @Override
//     public User createUser(UserCreateRequest registerRequest) {
//         User user = User.builder()
//                 .name(registerRequest.getName())
//                 .email(registerRequest.getEmail())
//                 .password(passwordEncoder.encode(registerRequest.getPassword()))
//                 .phone(registerRequest.getPhone())
//                 .address(registerRequest.getAddress())
//                 .role(registerRequest.getRole())
//                 .build();
//         return userRepository.save(user);
//     }

//     @Override
//     public User updateUser(Long userId, UserUpdateRequest userUpdateRequest) {
//         User user = userRepository.findById(userId).orElseThrow();
//         user.setName(userUpdateRequest.getName());
//         // user.setEmail(userUpdateRequest.getEmail());
//         // user.setPassword(passwordEncoder.encode(userUpdateRequest.getPassword()));
//         user.setPhone(userUpdateRequest.getPhone());
//         user.setAddress(userUpdateRequest.getAddress());
//         // user.setRole(userUpdateRequest.getRole());
//         return userRepository.save(user);
//     }

//     @Override
//     public void deleteUser(Long userId) {
//         userRepository.deleteById(userId);
//     }

//     @Override
//     public User getUserById(Long userId) {
//         return userRepository.findById(userId).orElseThrow();
//     }

//     @Override
//     public java.util.List<User> getAllUsers() {
//         return userRepository.findAll();
//     }

//     @Override
//     public UserResponse getUserByEmail(String email) {
//         User user = userRepository.findByEmail(email)
//                 .orElseThrow(() -> new RuntimeException("User not found with email: " + email));
//         return mapUserToUserResponse(user);
//     }

//     private UserResponse mapUserToUserResponse(User user) {
//         return UserResponse.builder()
//                 .id(user.getUid())
//                 .name(user.getName())
//                 .email(user.getEmail())
//                 .phone(user.getPhone())
//                 .address(user.getAddress())
//                 .role(user.getRole())
//                 .build();
//     }

// }
