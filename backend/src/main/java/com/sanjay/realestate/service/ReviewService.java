package com.sanjay.realestate.service;


import com.sanjay.realestate.model.Review;
import com.sanjay.realestate.repo.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ReviewService {

    @Autowired
    private ReviewRepository reviewRepository;

    public List<Review> getAllReviews() {
        return reviewRepository.findAll();
    }

    public Optional<Review> getReviewById(Long id) {
        return reviewRepository.findById(id);
    }

    public Review createReview(Review review) {
        return reviewRepository.save(review);
    }

    public Review updateReview(Long id, Review reviewDetails) {
        Review review = reviewRepository.findById(id).orElseThrow(() -> new RuntimeException("Review not found"));

        review.setName(reviewDetails.getName());
        review.setType(reviewDetails.getType());
        review.setContent(reviewDetails.getContent());
        review.setDate(reviewDetails.getDate());
        review.setRating(reviewDetails.getRating());

        return reviewRepository.save(review);
    }

    public void deleteReview(Long id) {
        reviewRepository.deleteById(id);
    }
}


