package com.example.realestate.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.realestate.model.Agent;
import com.example.realestate.service.AgentService;

@RestController
@RequestMapping("/api/agents")
public class AgentController {

    @Autowired
    private AgentService agentService;

    @GetMapping("/login")
    public ResponseEntity<?> getAllAgents() {
        List<Agent> agents = agentService.getAllAgents();
        if (agents.isEmpty()) {
            return ResponseEntity.status(404).body("No agents found.");
        }
        return ResponseEntity.ok(agents);
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<?> getAgentById(@PathVariable String id) {
        Optional<Agent> agent = agentService.getAgentById(id);
        if (agent.isPresent()) {
            return ResponseEntity.ok("Agent found: " + agent.get());
        } else {
            return ResponseEntity.status(404).body("Agent not found with id: " + id);
        }
    }

    @PostMapping("/register")
    public ResponseEntity<?> addAgent(@RequestBody Agent agent) {
        Agent newAgent = agentService.addAgent(agent);
        return ResponseEntity.ok("Agent registered successfully: " + newAgent);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<?> updateAgent(@PathVariable String id, @RequestBody Agent agentDetails) {
        Optional<Agent> agent = agentService.getAgentById(id);
        if (agent.isPresent()) {
            Agent updatedAgent = agentService.updateAgent(id, agentDetails);
            return ResponseEntity.ok("Agent updated successfully: " + updatedAgent);
        } else {
            return ResponseEntity.status(404).body("Agent not found with id: " + id);
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteAgent(@PathVariable String id) {
        Optional<Agent> agent = agentService.getAgentById(id);
        if (agent.isPresent()) {
            agentService.deleteAgent(id);
            return ResponseEntity.ok("Agent deleted successfully.");
        } else {
            return ResponseEntity.status(404).body("Agent not found with id: " + id);
        }
    }

    @GetMapping("/location/{location}")
    public ResponseEntity<?> getAgentsByLocation(@PathVariable String location) {
        List<Agent> agents = agentService.getAgentsByLocation(location);
        if (agents.isEmpty()) {
            return ResponseEntity.status(404).body("No agents found in location: " + location);
        }
        return ResponseEntity.ok(agents);
    }

    @GetMapping("/language/{language}")
    public ResponseEntity<?> getAgentsByLanguage(@PathVariable String language) {
        List<Agent> agents = agentService.getAgentsByLanguage(language);
        if (agents.isEmpty()) {
            return ResponseEntity.status(404).body("No agents found speaking language: " + language);
        }
        return ResponseEntity.ok(agents);
    }
}
