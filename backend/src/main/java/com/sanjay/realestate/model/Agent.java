package com.sanjay.realestate.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Agent {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long aid;
    private String name;
    private String location;
    private String phone;
    private String experience;
    private Double rating;

    public Agent(){

    }

    
    public Agent(long aid, String name, String location, String phone, String experience, Double rating) {
        this.aid = aid;
        this.name = name;
        this.location = location;
        this.phone = phone;
        this.experience = experience;
        this.rating = rating;
    }


    public long getAid() {
        return aid;
    }
    public void setAid(long aid) {
        this.aid = aid;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getLocation() {
        return location;
    }
    public void setLocation(String location) {
        this.location = location;
    }
    public String getPhone() {
        return phone;
    }
    public void setPhone(String phone) {
        this.phone = phone;
    }
    public String getExperience() {
        return experience;
    }
    public void setExperience(String experience) {
        this.experience = experience;
    }
    public Double getRating() {
        return rating;
    }
    public void setRating(Double rating) {
        this.rating = rating;
    }


}

