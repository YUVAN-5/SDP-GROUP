package com.example.realestate.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.realestate.model.Agent;

public interface AgentRepo extends JpaRepository<Agent, String> {

    List<Agent> findByLocation(String location);

    List<Agent> findByLanguagesContaining(String language);
}