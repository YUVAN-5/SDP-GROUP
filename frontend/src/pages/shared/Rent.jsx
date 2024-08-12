// src/components/RentalHousePage.jsx
import React from 'react';

export const Rent = () => {
  return (
    <>
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        
        {/* Property Image Gallery */}
        <div className="relative">
          <div className="bg-cover bg-center h-80" style={{ backgroundImage: "url('https://ik.imagekit.io/1in7nqs7x/zzz-ictKkkzt4Bk-unsplash.jpg?updatedAt=1722218668399')" }}>
            <div className="bg-gray-800 bg-opacity-50 h-full flex items-center justify-center">
              <h1 className="text-white text-4xl font-bold">Charming Family Home</h1>
            </div>
          </div>
          <div className="absolute top-4 right-4 bg-white p-2 rounded shadow-md">
            <button className="text-blue-600 hover:underline">View Gallery</button>
          </div>
        </div>

        {/* Property Details */}
        <div className="p-6">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full lg:w-1/2 px-4">
              <h2 className="text-2xl font-bold mb-4">Property Details</h2>
              <ul className="text-gray-700 mb-6 space-y-2">
                <li className="flex justify-between py-2 border-b border-gray-200">
                  <span className="font-semibold">Price:</span>
                  <span>$2,500 / month</span>
                </li>
                <li className="flex justify-between py-2 border-b border-gray-200">
                  <span className="font-semibold">Bedrooms:</span>
                  <span>4</span>
                </li>
                <li className="flex justify-between py-2 border-b border-gray-200">
                  <span className="font-semibold">Bathrooms:</span>
                  <span>3</span>
                </li>
                <li className="flex justify-between py-2 border-b border-gray-200">
                  <span className="font-semibold">Square Footage:</span>
                  <span>2,500 sqft</span>
                </li>
                <li className="flex justify-between py-2 border-b border-gray-200">
                  <span className="font-semibold">Location:</span>
                  <span>1234 Elm Street, Springfield, USA</span>
                </li>
              </ul>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">Schedule a Tour</button>
                <button className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition ml-[2rem]">Contact Owner</button>
                <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition ml-[2rem]">Add Favorites</button>
            </div>

            {/* Description and Features */}
            <div className="w-full lg:w-1/2 px-4">
              <h2 className="text-2xl font-bold mb-4">Description</h2>
              <p className="text-gray-700 mb-6">
                Discover this charming family home with a spacious open floor plan, modern kitchen, and a large backyard perfect for entertaining. Located in a tranquil neighborhood with top-rated schools, shopping, and dining options just around the corner.
              </p>
              <h2 className="text-2xl font-bold mb-4">Features</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Gourmet kitchen with granite countertops</li>
                <li>Hardwood floors throughout</li>
                <li>Central air conditioning and heating</li>
                <li>Two-car garage with electric opener</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Neighborhood Highlights */}
        <div className="bg-gray-100 p-6">
          <h2 className="text-2xl font-bold mb-4">Neighborhood Highlights</h2>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/3 px-4 mb-4">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Parks & Recreation</h3>
                <p className="text-gray-700">Enjoy nearby parks with walking trails, playgrounds, and sports facilities. Great for outdoor activities and family gatherings.</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-4">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Shopping & Dining</h3>
                <p className="text-gray-700">Convenient access to shopping centers, restaurants, and cafes. Everything you need is just a short drive away.</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-4">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Schools & Education</h3>
                <p className="text-gray-700">Top-rated schools are within walking distance. Perfect for families looking for quality education for their children.</p>
              </div>
            </div>
          </div>
        </div>


        

      </div>
    </div>
    <div className='flex justify-center items-center'>
      <button className='mt-[2rem] h-[3rem] w-[8rem] bg-blue-700 text-white mb-[2rem] hover:bg-blue-500'>Read More</button>
    </div>
    </>
  );
};


