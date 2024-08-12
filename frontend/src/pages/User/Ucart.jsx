import React from 'react';
import { Button } from "@/components/ui/button";

export const Ucart = () => {
  const favoriteProperties = [
    {
      id: 1,
      title: "Luxury Villa in Beverly Hills",
      location: "Beverly Hills, CA",
      price: "$3,500,000",
      image: "https://ik.imagekit.io/1in7nqs7x/zoshua-colah-5ufwwSRjEp0-unsplash.jpg?updatedAt=1722218674116",
      description: "A stunning luxury villa located in the heart of Beverly Hills, offering unparalleled views and amenities.",
      beds: 5,
      baths: 6,
      area: "5000 sqft"
    },
    {
      id: 2,
      title: "Modern Apartment in New York",
      location: "New York, NY",
      price: "$1,200,000",
      image: "https://ik.imagekit.io/1in7nqs7x/frames-for-your-heart-2d4lAQAlbDA-unsplash.jpg?updatedAt=1722218671055",
      description: "A sleek, modern apartment situated in the bustling city of New York. Close to all major attractions.",
      beds: 3,
      baths: 2,
      area: "1500 sqft"
    }
  ];

  return (
    <div className="container mx-auto p-8 ">
      <h1 className="text-4xl font-bold mb-8">My Favorite Properties</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {favoriteProperties.map((property) => (
          <div key={property.id} className="flex flex-col border rounded-lg p-4 shadow-md bg-stone-200">
            <img src={property.image} alt={property.title} className="w-full h-48 object-cover rounded-md mb-4" />
            <div className="flex flex-col justify-between flex-grow">
              <div>
                <h2 className="text-2xl font-semibold">{property.title}</h2>
                <p className="text-gray-700">{property.location}</p>
                <p className="text-gray-700">{property.price}</p>
                <p className="text-gray-600 mt-2">{property.description}</p>
                <div className="mt-4">
                  <p className="text-gray-700">Beds: {property.beds}</p>
                  <p className="text-gray-700">Baths: {property.baths}</p>
                  <p className="text-gray-700">Area: {property.area}</p>
                </div>
              </div>
              <div className="mt-4 flex justify-between">
                <Button className="bg-blue-500 text-white hover:bg-blue-700">View Details</Button>
                <Button variant="outline" className="border border-red-500 text-red-500 hover:bg-red-500 hover:text-white">
                  Remove
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
