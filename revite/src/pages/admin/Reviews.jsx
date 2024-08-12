// components/Reviews.js
import { useState, useEffect } from 'react';
import axios from 'axios';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get('/api/reviews');
        setReviews(response.data);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchReviews();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Reviews</h1>
      <div className="bg-white shadow-md rounded-lg p-4">
        {reviews.length === 0 ? (
          <p>No reviews found.</p>
        ) : (
          <ul>
            {reviews.map((review) => (
              <li key={review.id} className="border-b py-2">
                <p className="font-semibold">{review.author}</p>
                <p>{review.content}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Reviews;
