package com.sanjay.realestate.service;

import com.sanjay.realestate.model.Agent;
import com.sanjay.realestate.repo.AgentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AgentService {

    @Autowired
    private AgentRepository agentRepository;

    public List<Agent> getAllAgents() {
        return agentRepository.findAll();
    }

    public Optional<Agent> getAgentById(Long id) {
        return agentRepository.findById(id);
    }

    public Agent createAgent(Agent agent) {
        return agentRepository.save(agent);
    }

    public void deleteAgent(Long id) {
        agentRepository.deleteById(id);
    }

    public Agent updateAgent(Long id, Agent agentDetails) {
        Optional<Agent> optionalAgent = agentRepository.findById(id);

        if (optionalAgent.isPresent()) {
            Agent existingAgent = optionalAgent.get();
            existingAgent.setName(agentDetails.getName());
            existingAgent.setLocation(agentDetails.getLocation());
            existingAgent.setPhone(agentDetails.getPhone());
            existingAgent.setExperience(agentDetails.getExperience());
            existingAgent.setRating(agentDetails.getRating());
            return agentRepository.save(existingAgent);
        } else {
            throw new RuntimeException("Agent not found with id " + id);
        }
    }
}
