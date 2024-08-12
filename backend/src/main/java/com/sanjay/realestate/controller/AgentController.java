package com.sanjay.realestate.controller;

import com.sanjay.realestate.model.Agent;
import com.sanjay.realestate.service.AgentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/agents")
public class AgentController {

    @Autowired
    private AgentService agentService;

    @GetMapping
    public List<Agent> getAllAgents() {
        return agentService.getAllAgents();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Agent> getAgentById(@PathVariable Long id) {
        Optional<Agent> agent = agentService.getAgentById(id);
        return agent.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Agent> addAgent(@RequestBody Agent agent) {
        Agent newAgent = agentService.createAgent(agent);
        return ResponseEntity.ok(newAgent);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteAgent(@PathVariable Long id) {
        agentService.deleteAgent(id);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<Agent> updateAgent(@PathVariable Long id, @RequestBody Agent agentDetails) {
        try {
            Agent updatedAgent = agentService.updateAgent(id, agentDetails);
            return ResponseEntity.ok(updatedAgent);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }
}
