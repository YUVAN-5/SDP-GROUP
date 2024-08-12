package com.example.realestate.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.realestate.model.Agent;
import com.example.realestate.repo.AgentRepo;

@Service
public class AgentService {

    @Autowired
    private AgentRepo agentRepo;

    public List<Agent> getAllAgents() {
        return agentRepo.findAll();
    }

    public Optional<Agent> getAgentById(String id) {
        return agentRepo.findById(id);
    }

    public Agent addAgent(Agent agent) {
        return agentRepo.save(agent);
    }

    public Agent updateAgent(String id, Agent agentDetails) {
        return agentRepo.findById(id).map(agent -> {
            agent.setName(agentDetails.getName());
            agent.setExperience(agentDetails.getExperience());
            agent.setLanguages(agentDetails.getLanguages());
            agent.setLocation(agentDetails.getLocation());
            agent.setPhoneNumber(agentDetails.getPhoneNumber());
            return agentRepo.save(agent);
        }).orElseGet(() -> {
            agentDetails.setId(id);
            return agentRepo.save(agentDetails);
        });
    }

    public String deleteAgent(String id) {
        if (agentRepo.existsById(id)) {
            agentRepo.deleteById(id);
            return "Agent deleted successfully";
        } else {
            return "Agent not found";
        }
    }

    public List<Agent> getAgentsByLocation(String location) {
        return agentRepo.findByLocation(location);
    }

    public List<Agent> getAgentsByLanguage(String language) {
        return agentRepo.findByLanguagesContaining(language);
    }
}