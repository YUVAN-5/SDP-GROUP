package com.sanjay.realestate.repo;


import com.sanjay.realestate.model.Property;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
// import java.util.Optional;

@Repository
public interface PropertyRepo extends JpaRepository<Property, Long> {
    List<Property> findByLocation(String location);
    // Optional<Property> findByEmail(String email);
}
