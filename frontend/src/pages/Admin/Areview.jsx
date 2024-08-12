import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Star } from 'lucide-react';

export const Areview = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/reviews')
      .then(response => {
        setReviews(response.data);
      })
      .catch(error => {
        console.error('Error fetching reviews:', error);
      });
  }, []);

  return (
    <div className="bg-gradient-to-r from-blue-100 to-blue-50 min-h-screen">
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-8 text-center text-blue-900">User Reviews</h1>
        <div className="grid mx-[4rem] grid-cols-1 sm:grid-cols-2 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold text-blue-800">{review.name}</h2>
                <span className="text-gray-500 text-sm">{new Date(review.date).toLocaleDateString()}</span>
              </div>
              <p className="text-gray-700 mb-2"><strong>Type:</strong> {review.type}</p>
              <p className="text-gray-700 mb-4">{review.content}</p>
              
              {/* Static content starts here */}
              <p className="text-gray-700 mb-2"><strong>Property Address:</strong> 123 Main St, Springfield</p>
              <p className="text-gray-700 mb-2"><strong>Agent:</strong> John Realtor</p>
              <div className="flex items-center mb-4">
                <img 
                  src="https://via.placeholder.com/40" 
                  alt="User profile" 
                  className="w-10 h-10 rounded-full mr-3"
                />
                <span className="text-gray-700">Reviewed by {review.name}</span>
              </div>
              {/* Static content ends here */}
              
              <div className="flex items-center">
                <div className="flex text-yellow-500">
                  {Array(review.rating).fill().map((_, i) => (
                    <Star key={i} className="w-5 h-5" />
                  ))}
                </div>
                <span className="ml-2 text-gray-600">{review.rating} out of 5</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
