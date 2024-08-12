package com.sanjay.realestate.controller;


import com.sanjay.realestate.model.Property;
import com.sanjay.realestate.service.PropertyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

// @CrossOrigin(origins="http://localhost:5173")
@RestController
@RequestMapping("/api/properties")
public class PropertyController {

    @Autowired
    private PropertyService propertyService;

    @GetMapping("/get")
    public List<Property> getAllProperties() {
        return propertyService.getAllProperties();
    }

    @GetMapping("/{id}")
    public Optional<Property> getPropertyById(@PathVariable Long id) {
        return propertyService.getPropertyById(id);
    }
    // @GetMapping("/{email}")
    // public Optional<Property> getPropertyByEmail(@PathVariable String email) {
    //     return propertyService.getPropertyByEmail(email);
    // }

    @PostMapping("/post")
    public Property addProperty(@RequestBody Property property) {
        return propertyService.addProperty(property);
    }

    @PutMapping("/{id}")
    public Property updateProperty(@PathVariable Long id, @RequestBody Property propertyDetails) {
        return propertyService.updateProperty(id, propertyDetails);
    }

    @DeleteMapping("/{id}")
    public void deleteProperty(@PathVariable Long id) {
        propertyService.deleteProperty(id);
    }

    @GetMapping("/sort")
    public List<Property> sortPropertiesByPrice() {
        return propertyService.sortPropertiesByPrice();
    }

    @GetMapping("/filter")
    public List<Property> filterPropertiesByLocation(@RequestParam String location) {
        return propertyService.filterPropertiesByLocation(location);
    }
}

