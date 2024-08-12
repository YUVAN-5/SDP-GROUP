import React, { useState } from 'react';
import axios from 'axios'; // Import axios
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export const Ureview = () => {
  const [review, setReview] = useState({
    name: '',
    type: 'Property', // Default to 'Property', but can be changed via dropdown
    content: '',
    date: new Date().toISOString().split('T')[0], // Current date
    rating: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReview({ ...review, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Post the review data to the backend
      const response = await axios.post('http://localhost:8080/api/reviews', review);

      console.log('Review submitted:', response.data);

      // Reset form after successful submission
      setReview({
        name: '',
        type: 'Property',
        content: '',
        date: new Date().toISOString().split('T')[0],
        rating: 0,
      });
    } catch (error) {
      console.error('There was an error submitting the review:', error);
    }
  };

  return (
    <div className="container mx-auto p-8 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-900">Write a Review</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md space-y-6">
        <div>
          <label className="block text-blue-900 font-semibold mb-2">Name</label>
          <Input
            type="text"
            name="name"
            value={review.name}
            onChange={handleInputChange}
            className="w-full"
            placeholder="Your Name"
            required
          />
        </div>

        <div>
          <label className="block text-blue-900 font-semibold mb-2">Review Type</label>
          <select
            name="type"
            value={review.type}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-lg"
            required
          >
            <option value="Property">Property</option>
            <option value="Agent">Agent</option>
            <option value="Website">Website</option>
          </select>
        </div>

        <div>
          <label className="block text-blue-900 font-semibold mb-2">Review Content</label>
          <Textarea
            name="content"
            value={review.content}
            onChange={handleInputChange}
            className="w-full"
            placeholder="Write your review here"
            rows="4"
            required
          />
        </div>

        <div>
          <label className="block text-blue-900 font-semibold mb-2">Rating</label>
          <select
            name="rating"
            value={review.rating}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-lg"
            required
          >
            <option value="0">Select Rating</option>
            <option value="5">5 - Excellent</option>
            <option value="4">4 - Good</option>
            <option value="3">3 - Average</option>
            <option value="2">2 - Poor</option>
            <option value="1">1 - Very Poor</option>
          </select>
        </div>

        <Button type="submit" className="w-full bg-blue-500 text-white hover:bg-blue-700">Submit Review</Button>
      </form>
    </div>
  );
};
