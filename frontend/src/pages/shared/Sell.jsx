import React, { useState } from 'react';

export const Sell = () => {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    price: '',
    bedrooms: '',
    bathrooms: '',
    size: '',
    description: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to server or display a success message
    console.log('Form submitted', formData);
  };

  const recentlySoldProperties = [
    {
      name: 'Cozy Cottage',
      location: 'San Francisco, CA',
      price: '$850,000',
      image: 'https://ik.imagekit.io/1in7nqs7x/aj-alao-cstkc_42P7M-unsplash.jpg?updatedAt=1722225230967', // Replace with actual image URL
    },
    {
      name: 'Modern Villa',
      location: 'Miami, FL',
      price: '$1,200,000',
      image: 'https://ik.imagekit.io/1in7nqs7x/frames-for-your-heart-2d4lAQAlbDA-unsplash.jpg?updatedAt=1722218671055', // Replace with actual image URL
    },
    {
      name: 'Luxury Apartment',
      location: 'New York, NY',
      price: '$950,000',
      image: 'https://ik.imagekit.io/1in7nqs7x/mohamed-b-SXQ1S5qtXmM-unsplash.jpg?updatedAt=1722226184278', // Replace with actual image URL
    },
    {
      name: 'Beach House',
      location: 'Los Angeles, CA',
      price: '$1,500,000',
      image: 'https://ik.imagekit.io/1in7nqs7x/alina-perekatenkova-fDYUqiGKe7g-unsplash.jpg?updatedAt=1722226305943', // Replace with actual image URL
    },
  ];

  const properties = [
    {
      id: 1,
      title: 'Property 1',
      description: 'Beautiful 3 bedroom house',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      title: 'Property 2',
      description: 'Modern apartment in city center',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      title: 'Property 3',
      description: 'Spacious countryside villa',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 4,
      title: 'Property 4',
      description: 'Cozy townhouse with garden',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 5,
      title: 'Property 5',
      description: 'Luxury penthouse with sea view',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 6,
      title: 'Property 6',
      description: 'Affordable studio apartment',
      imageUrl: 'https://via.placeholder.com/150',
    },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h6 className='text-3xl font-semibold ml-[36rem] mt-[2rem] mb-[3rem]'>Recently sold Properties</h6>
      {/* Recently Sold Properties Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        {recentlySoldProperties.map((property, index) => (
          <div
            key={index}
            className="p-4 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300"
          >
            <img src={property.image} alt={property.name} className="w-full h-32 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-bold mb-2">{property.name}</h3>
            <p className="text-gray-600">{property.location}</p>
            <p className="text-gray-800 font-semibold">{property.price}</p>
          </div>
        ))}
      </div>

      <div className="container mx-auto py-8">
      <h2 className="text-center text-3xl font-bold mb-8">Available Properties</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property) => (
          <div key={property.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-200 hover:scale-105">
            <img className="w-full h-48 object-cover" src={property.imageUrl} alt={property.title} />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">{property.title}</h3>
              <p className="text-gray-600">{property.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

      <h6 className='text-3xl font-semibold ml-[32rem] mt-[4rem] '>Add Your Property details to Sell</h6>

      {/* Post Property Form Section */}
      <div className="bg-white shadow-lg rounded-lg max-w-xl mx-auto p-6 mt-20 mb-20">
        <h2 className="text-3xl font-bold text-blue-600 mb-4 text-center">Post Your Property For Sale</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Property Name"
            className="w-full p-3 border border-gray-300 rounded focus:ring focus:ring-blue-200"
            required
          />
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Location"
            className="w-full p-3 border border-gray-300 rounded focus:ring focus:ring-blue-200"
            required
          />
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Price"
            className="w-full p-3 border border-gray-300 rounded focus:ring focus:ring-blue-200"
            required
          />
          <input
            type="number"
            name="bedrooms"
            value={formData.bedrooms}
            onChange={handleChange}
            placeholder="Bedrooms"
            className="w-full p-3 border border-gray-300 rounded focus:ring focus:ring-blue-200"
          />
          <input
            type="number"
            name="bathrooms"
            value={formData.bathrooms}
            onChange={handleChange}
            placeholder="Bathrooms"
            className="w-full p-3 border border-gray-300 rounded focus:ring focus:ring-blue-200"
          />
          <input
            type="text"
            name="size"
            value={formData.size}
            onChange={handleChange}
            placeholder="Size (sq ft)"
            className="w-full p-3 border border-gray-300 rounded focus:ring focus:ring-blue-200"
          />
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Description"
            className="w-full p-3 border border-gray-300 rounded focus:ring focus:ring-blue-200"
            rows="4"
          />
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      </div>
  );
};

