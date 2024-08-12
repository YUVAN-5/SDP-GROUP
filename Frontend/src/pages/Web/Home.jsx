import React, { useEffect } from 'react';
import { Search, Home, User, Key } from 'lucide-react';
import Footer from '@/components/Web/Footer';
import Carousel from '@/components/Carousel';

const HomePage = () => {
  useEffect(() => {
    // Any data fetching or initialization logic can go here
    // For example, you might fetch featured properties data here if it comes from an API
  }, []);

  return (
    <div className="w-full min-h-screen relative">
      <Carousel />
      <div className="absolute top-1/2 left-1/2 p-4 sm:p-8 md:p-12 lg:p-16 max-w-lg text-white transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3">
          Find Your Dream Place
        </h1>
        <p className="text-sm sm:text-base mb-4 sm:mb-6">
          We are glad to have you around. Feel free to browse our website.
        </p>
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Find a location"
            className="w-full p-3 sm:p-4 rounded-full text-gray-900 pr-12 text-sm sm:text-base border-none"
          />
          <button
            className="absolute right-2 top-2 bottom-2 px-3 bg-gray-800 text-white rounded-full hover:bg-orange-400 transition-colors"
          >
            <Search className="w-5 h-5" />
          </button>
        </div>
      </div>
      <div className="p-8">
        <div className="flex flex-col items-center mb-6">
          <h2 className="text-2xl font-bold mb-8">Find Properties in These Cities</h2>
          <p className="text-gray-700 mb-6">Explore a variety of properties available for sale and rent in these vibrant cities. We have options to suit every need and budget.</p>
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <div className="flex items-center p-2 rounded-lg text-left" style={{ width: '180px', height: '100px', overflow: 'hidden' }}>
              <img src="https://ik.imagekit.io/rqds6dyata/lycs-architecture-kUdbEEMcRwE-unsplash.jpg?updatedAt=1722084882490" alt="New York" style={{ width: '40%', height: '100%', objectFit: 'cover' }} />
              <div className="p-2 flex-1 text-sm" style={{ color: 'inherit' }}>
                <h3 className="font-bold">New York</h3>
                <p>9 Properties</p>
              </div>
            </div>
            <div className="flex items-center p-2 rounded-lg text-left" style={{ width: '180px', height: '100px', overflow: 'hidden' }}>
              <img src="https://ik.imagekit.io/rqds6dyata/san-diego-wallpaper-preview.jpg?updatedAt=1722086243556" alt="San Diego" style={{ width: '40%', height: '100%', objectFit: 'cover' }} />
              <div className="p-2 flex-1 text-sm" style={{ color: 'inherit' }}>
                <h3 className="font-bold">San Diego</h3>
                <p>0 Properties</p>
              </div>
            </div>
            <div className="flex items-center p-2 rounded-lg text-left" style={{ width: '180px', height: '100px', overflow: 'hidden' }}>
              <img src="https://ik.imagekit.io/rqds6dyata/image%20(8).png?updatedAt=1722086431353" alt="Miami" style={{ width: '40%', height: '100%', objectFit: 'cover' }} />
              <div className="p-2 flex-1 text-sm" style={{ color: 'inherit' }}>
                <h3 className="font-bold">Miami</h3>
                <p>2 Properties</p>
              </div>
            </div>
            <div className="flex items-center p-2 rounded-lg text-left" style={{ width: '180px', height: '100px', overflow: 'hidden' }}>
              <img src="https://ik.imagekit.io/rqds6dyata/image%20(7).png?updatedAt=1722086451704" alt="Los Angeles" style={{ width: '40%', height: '100%', objectFit: 'cover' }} />
              <div className="p-2 flex-1 text-sm" style={{ color: 'inherit' }}>
                <h3 className="font-bold">Los Angeles</h3>
                <p>1 Property</p>
              </div>
            </div>
            <div className="flex items-center p-2 rounded-lg text-left" style={{ width: '180px', height: '100px', overflow: 'hidden' }}>
              <img src="https://ik.imagekit.io/rqds6dyata/image%20(9).png?updatedAt=1722086536199" alt="Chicago" style={{ width: '40%', height: '100%', objectFit: 'cover' }} />
              <div className="p-2 flex-1 text-sm" style={{ color: 'inherit' }}>
                <h3 className="font-bold">Chicago</h3>
                <p>2 Properties</p>
              </div>
            </div>
            <div className="flex items-center p-2 rounded-lg text-left" style={{ width: '180px', height: '100px', overflow: 'hidden' }}>
              <div className="p-2 flex-1 text-center" style={{ color: 'inherit' }}>
                <span className="cursor-pointer font-bold">View All Cities</span>
              </div>
            </div>
          </div>
        </div>

        <hr className="border border-gray-300 mb-8" style={{ opacity: 0.3 }} />

        <div className="flex flex-col items-center mb-8">
          <h2 className="text-2xl font-bold mb-6">Featured Properties</h2>
          <p className="text-gray-500 mb-6">Visit our handpicked selection of featured properties available for sale and rent.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="border p-4 rounded-lg shadow-lg">
              <img src="https://ik.imagekit.io/rqds6dyata/house-1836070.jpg?updatedAt=1721971607755" alt="Luxury Family Home" className="mb-4 w-full h-48 object-cover" />
              <h3 className="text-xl font-bold">Luxury Family Home</h3>
              <p className="text-gray-500">1800-1818 79th St</p>
              <p className="text-gray-700">4 Beds • 1 Baths • 400 sqft</p>
              <p className="text-red-500 font-bold">₹1,50,000/month</p>
            </div>
            <div className="border p-4 rounded-lg shadow-lg">
              <img src="https://ik.imagekit.io/rqds6dyata/nick-fewings-_AXfP_W4fpU-unsplash.jpg?updatedAt=1722085004832" alt="Skyper Pool Apartment" className="mb-4 w-full h-48 object-cover" />
              <h3 className="text-xl font-bold">Skyper Pool Apartment</h3>
              <p className="text-gray-500">1020 Bloomingdale Ave</p>
              <p className="text-gray-500">4 Beds • 2 Baths • 450 sqft</p>
              <p className="text-red-500 font-bold">₹2,00,000/month</p>
            </div>
            <div className="border p-4 rounded-lg shadow-lg">
              <img src="https://ik.imagekit.io/rqds6dyata/origin.jpg?updatedAt=1722085128281" alt="North Dillard Street" className="mb-4 w-full h-48 object-cover" />
              <h3 className="text-xl font-bold">North Dillard Street</h3>
              <p className="text-gray-500">4330 Bell Shoals Rd</p>
              <p className="text-gray-500">4 Beds • 2 Baths • 400 sqft</p>
              <p className="text-red-500 font-bold">₹1,20,000/month</p>
            </div>
            <div className="border p-4 rounded-lg shadow-lg">
              <img src="https://ik.imagekit.io/rqds6dyata/image%20(4).png?updatedAt=1722085492146" alt="Eaton Carth Penthouse" className="mb-4 w-full h-48 object-cover" />
              <h3 className="text-xl font-bold">Eaton Carth Penthouse</h3>
              <p className="text-gray-500">7728 60th St N</p>
              <p className="text-gray-500">3 Beds • 2 Baths • 300 sqft</p>
              <p className="text-red-500 font-bold">₹1,00,000/month</p>
            </div>
            <div className="border p-4 rounded-lg shadow-lg">
              <img src="https://ik.imagekit.io/rqds6dyata/image%20(6).png?updatedAt=1722086076156" alt="The Rustic Hamlet" className="mb-4 w-full h-48 object-cover" />
              <h3 className="text-xl font-bold">The Rustic Hamlet</h3>
              <p className="text-gray-500">4514 Elm St</p>
              <p className="text-gray-500">2 Beds • 2 Baths • 150 sqft</p>
              <p className="text-red-500 font-bold">₹80,000/month</p>
            </div>
            <div className="border p-4 rounded-lg shadow-lg">
              <img src="https://ik.imagekit.io/rqds6dyata/image%20(5).png?updatedAt=1722086002218" alt="Lone Tree Avenue" className="mb-4 w-full h-48 object-cover" />
              <h3 className="text-xl font-bold">Lone Tree Avenue</h3>
              <p className="text-gray-500">5512 62nd Ave</p>
              <p className="text-gray-500">1 Bed • 1 Bath • 120 sqft</p>
              <p className="text-red-500 font-bold">₹60,000/month</p>
            </div>
          </div>
        </div>
        <hr className="border border-gray-300 mb-8" style={{ opacity: 0.3 }} />
        <div className="flex flex-col items-center mb-8">
          <h2 className="text-2xl font-bold mb-2">Our Services</h2>
          <p className="text-gray-500 mb-4">Explore the range of services we offer to make your property experience seamless and enjoyable.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="border p-4 rounded-lg shadow-lg text-center">
              <Home className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold">Buy a Home</h3>
              <p className="text-gray-500">Browse through our extensive listings to find your perfect home.</p>
            </div>
            <div className="border p-4 rounded-lg shadow-lg text-center">
              <User className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold">Sell a Home</h3>
              <p className="text-gray-500">Get expert advice and assistance to sell your home at the best price.</p>
            </div>
            <div className="border p-4 rounded-lg shadow-lg text-center">
              <Key className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold">Rent a Home</h3>
              <p className="text-gray-500">Find rental properties that meet your needs and budget.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
