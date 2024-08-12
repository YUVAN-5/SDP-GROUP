package com.sanjay.realestate.model;


// import org.springframework.data.annotation.Id;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Property {
 
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long pid;
    private String title;
    private double price;
    private String location;
    private String type;
    private String description;

    
    public Property(long pid, String title, double price, String location, String type, String description) {
        this.pid = pid;
        this.title = title;
        this.price = price;
        this.location = location;
        this.type = type;
        this.description = description;
    }
    public Property(){

    }
    public long getPid() {
        return pid;
    }
    public void setPid(long pid) {
        this.pid = pid;
    }
    public String getTitle() {
        return title;
    }
    public void setTitle(String title) {
        this.title = title;
    }
    public double getPrice() {
        return price;
    }
    public void setPrice(double price) {
        this.price = price;
    }
    public String getLocation() {
        return location;
    }
    public void setLocation(String location) {
        this.location = location;
    }
    public String getType() {
        return type;
    }
    public void setType(String type) {
        this.type = type;
    }
    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }

}