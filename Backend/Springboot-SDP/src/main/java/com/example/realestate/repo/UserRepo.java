package com.example.realestate.repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.realestate.model.User;

public interface UserRepo extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
    Optional<User> deleteByEmail(String email);
}