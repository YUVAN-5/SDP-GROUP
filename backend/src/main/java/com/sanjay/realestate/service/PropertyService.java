package com.sanjay.realestate.service;


import com.sanjay.realestate.model.Property;
import com.sanjay.realestate.repo.PropertyRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PropertyService {

    @Autowired
    private PropertyRepo propertyRepository;

    public List<Property> getAllProperties() {
        return propertyRepository.findAll();
    }

    public Optional<Property> getPropertyById(Long id) {
        return propertyRepository.findById(id);
    }
    // public Optional<Property> getPropertyByEmail(String email) {
    //     return propertyRepository.findByEmail(email);
    // }

    public Property addProperty(Property property) {
        return propertyRepository.save(property);
    }

    public Property updateProperty(Long id, Property propertyDetails) {
        return propertyRepository.findById(id).map(property -> {
            property.setTitle(propertyDetails.getTitle());
            property.setPrice(propertyDetails.getPrice());
            property.setLocation(propertyDetails.getLocation());
            property.setType(propertyDetails.getType());
            property.setDescription(propertyDetails.getDescription());
            return propertyRepository.save(property);
        }).orElseThrow(() -> new RuntimeException("Property not found"));
    }

    public void deleteProperty(Long id) {
        propertyRepository.deleteById(id);
    }

    public List<Property> sortPropertiesByPrice() {
        return propertyRepository.findAll(Sort.by(Sort.Direction.ASC, "price"));
    }

    public List<Property> filterPropertiesByLocation(String location) {
        return propertyRepository.findByLocation(location);
    }
}
