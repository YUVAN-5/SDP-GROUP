package com.sanjay.realestate.controller;


import com.sanjay.realestate.model.Favorite;
import com.sanjay.realestate.service.FavoriteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
// import java.util.Optional;

@RestController
@RequestMapping("/api/favorites")
public class FavoriteController {

    @Autowired
    private FavoriteService favoriteService;

    @PostMapping
    public ResponseEntity<Favorite> addFavorite(@RequestBody Favorite favorite) {
        Favorite savedFavorite = favoriteService.addFavorite(favorite);
        return ResponseEntity.ok(savedFavorite);
    }

    @GetMapping("/{userId}")
    public ResponseEntity<List<Favorite>> getFavoritesByUserId() {
        List<Favorite> favorites = favoriteService.getFavoritesByUserId();
        return ResponseEntity.ok(favorites);
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteFavorite(@PathVariable Long id) {
        favoriteService.deleteFavorite(id);
        return ResponseEntity.noContent().build();
    }
}

