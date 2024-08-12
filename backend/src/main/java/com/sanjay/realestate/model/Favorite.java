package com.sanjay.realestate.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
public class Favorite {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long favorid;

    @Column(nullable = false)
    private Long propertyid;

    @Column(nullable = false)
    private String propertyTitle;

    private String userId; // Assuming a user ID for the favorite
    private LocalDateTime addedDate; // Date when the favorite was added

    // Getters and Setters
    public Long getFavorid() {
        return favorid;
    }

    public void setFavorid(Long favorid) {
        this.favorid = favorid;
    }

    public Long getPropertyid() {
        return propertyid;
    }

    public void setPropertyid(Long propertyid) {
        this.propertyid = propertyid;
    }

    public String getPropertyTitle() {
        return propertyTitle;
    }

    public void setPropertyTitle(String propertyTitle) {
        this.propertyTitle = propertyTitle;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public LocalDateTime getAddedDate() {
        return addedDate;
    }

    public void setAddedDate(LocalDateTime addedDate) {
        this.addedDate = addedDate;
    }
}
