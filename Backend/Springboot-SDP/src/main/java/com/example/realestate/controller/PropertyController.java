package com.example.realestate.controller;

import com.example.realestate.model.Property;
import com.example.realestate.service.PropertyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/properties")
@CrossOrigin(origins = "http://localhost:8080")
public class PropertyController {

    @Autowired
    private PropertyService propertyService;

    @GetMapping("/all")
    public List<Property> getAllProperties() {
        return propertyService.getAllProperties();
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<?> getPropertyById(@PathVariable Long id) {
        Optional<Property> property = propertyService.getPropertyById(id);
        if (property.isPresent()) {
            return ResponseEntity.ok(property.get());
        } else {
            return ResponseEntity.status(404).body("Property not found with id: " + id);
        }
    }

    @PostMapping("/add")
    public ResponseEntity<Property> createProperty(
            @RequestParam("location") String location,
            @RequestParam("ownerName") String ownerName,
            @RequestParam("contact") String contact,
            @RequestParam("price") String price,
            @RequestParam("squareFt") Long squareFt) {

        Property newProperty = new Property();
        newProperty.setLocation(location);
        newProperty.setOwnerName(ownerName);
        newProperty.setContact(contact);
        newProperty.setPrice(price);
        newProperty.setSquareFt(squareFt);

        Property savedProperty = propertyService.saveProperty(newProperty);
        return ResponseEntity.ok(savedProperty);
    }


    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteProperty(@PathVariable Long id) {
        Optional<Property> property = propertyService.getPropertyById(id);
        if (property.isPresent()) {
            propertyService.deleteProperty(id);
            return ResponseEntity.ok("Property deleted successfully.");
        } else {
            return ResponseEntity.status(404).body("Property not found with id: " + id);
        }
    }

    @GetMapping("/search/{location}")
    public ResponseEntity<?> getPropertiesByLocation(@PathVariable String location) {
        List<Property> properties = propertyService.getPropertiesByLocation(location);
        if (properties.isEmpty()) {
            return ResponseEntity.status(404).body("No properties found in location: " + location);
        }
        return ResponseEntity.ok(properties);
    }

}
