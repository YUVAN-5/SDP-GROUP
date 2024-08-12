package com.sanjay.realestate.service;


import com.sanjay.realestate.model.Favorite;
import com.sanjay.realestate.repo.FavoriteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.time.LocalDateTime;


@Service
public class FavoriteService {

    @Autowired
    private FavoriteRepository favoriteRepository;

    public Favorite addFavorite(Favorite favorite) {
        favorite.setAddedDate(LocalDateTime.now());
        return favoriteRepository.save(favorite);
    }

    public List<Favorite> getFavoritesByUserId() {
        return favoriteRepository.findAll();
    }


    public void deleteFavorite(Long id) {
        favoriteRepository.deleteById(id);
    }
}
