package com.example.realestate.controller;

import com.example.realestate.model.Transaction;
import com.example.realestate.service.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/transactions")
public class TransactionController {

    @Autowired
    private TransactionService transactionService;

    @GetMapping("/all")
    public List<Transaction> getAllTransactions() {
        return transactionService.getAllTransactions();
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<String> getTransactionById(@PathVariable String id) {
        Optional<Transaction> transaction = transactionService.getTransactionById(id);
        return transaction.map(value -> ResponseEntity.ok("Transaction found: " + value))
                .orElseGet(() -> ResponseEntity.status(404).body("Transaction not found with id: " + id));
    }

    @PostMapping("/register")
    public ResponseEntity<String> createTransaction(@RequestBody Transaction transaction) {
        Transaction savedTransaction = transactionService.saveTransaction(transaction);
        return ResponseEntity.ok("Transaction created successfully with id: " + savedTransaction.getId());
    }

    @PutMapping("update/{id}")
    public ResponseEntity<String> updateTransaction(@PathVariable String id, @RequestBody Transaction transaction) {
        Optional<Transaction> existingTransaction = transactionService.getTransactionById(id);
        if (existingTransaction.isPresent()) {
            transaction.setId(id); // Ensure the ID is set correctly
            transactionService.saveTransaction(transaction);
            return ResponseEntity.ok("Transaction updated successfully with id: " + id);
        } else {
            return ResponseEntity.status(404).body("Transaction not found with id: " + id);
        }
    }

    @DeleteMapping("delete/{id}")
    public ResponseEntity<String> deleteTransaction(@PathVariable String id) {
        Optional<Transaction> transaction = transactionService.getTransactionById(id);
        if (transaction.isPresent()) {
            transactionService.deleteTransaction(id);
            return ResponseEntity.ok("Transaction deleted successfully with id: " + id);
        } else {
            return ResponseEntity.status(404).body("Transaction not found with id: " + id);
        }
    }
}
