package com.example.realestate.controller;

import com.example.realestate.model.Payment;
import com.example.realestate.service.PaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/payments")
public class PaymentController {

    @Autowired
    private PaymentService paymentService;

    @GetMapping("/all")
    public List<Payment> getAllPayments() {
        return paymentService.getAllPayments();
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<String> getPaymentById(@PathVariable String id) {
        Optional<Payment> payment = paymentService.getPaymentById(id);
        return payment.map(value -> ResponseEntity.ok("Payment found: " + value))
                .orElseGet(() -> ResponseEntity.status(404).body("Payment not found with id: " + id));
    }

    @PostMapping("/add")
    public ResponseEntity<String> createPayment(@RequestBody Payment payment) {
        Payment savedPayment = paymentService.savePayment(payment);
        return ResponseEntity.ok("Payment created successfully with id: " + savedPayment.getId());
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<String> updatePayment(@PathVariable String id, @RequestBody Payment payment) {
        Optional<Payment> existingPayment = paymentService.getPaymentById(id);
        if (existingPayment.isPresent()) {
            payment.setId(id); // Ensure the ID is set correctly
            paymentService.savePayment(payment);
            return ResponseEntity.ok("Payment updated successfully with id: " + id);
        } else {
            return ResponseEntity.status(404).body("Payment not found with id: " + id);
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deletePayment(@PathVariable String id) {
        Optional<Payment> payment = paymentService.getPaymentById(id);
        if (payment.isPresent()) {
            paymentService.deletePayment(id);
            return ResponseEntity.ok("Payment deleted successfully with id: " + id);
        } else {
            return ResponseEntity.status(404).body("Payment not found with id: " + id);
        }
    }
}
