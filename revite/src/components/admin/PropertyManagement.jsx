import React, { useState } from 'react';
import PropertyCard from '../user/PropertyCard';
import { FaEdit, FaTrash, FaPlus,FaDollarSign,FaBed,FaMapMarkerAlt } from 'react-icons/fa';

const PropertyManagement = () => {
  const [properties, setProperties] = useState([
    { id: 1, name: 'Luxury Villa', price: 500000, city: 'Los Angeles', state: 'CA', bhk: '4', category: 'house', type: 'for sale', image: 'https://via.placeholder.com/300' },
    { id: 2, name: 'Modern Apartment', price: 300000, city: 'New York', state: 'NY', bhk: '3', category: 'apartment', type: 'for rent', image: 'https://via.placeholder.com/300' },
    { id: 3, name: 'Spacious Land', price: 200000, city: 'Austin', state: 'TX', bhk: '0', category: 'land', type: 'for sale', image: 'https://via.placeholder.com/300' },
    { id: 4, name: 'Beach House', price: 700000, city: 'Miami', state: 'FL', bhk: '5', category: 'house', type: 'for rent', image: 'https://via.placeholder.com/300' },
    { id: 5, name: 'City Apartment', price: 350000, city: 'San Francisco', state: 'CA', bhk: '2', category: 'apartment', type: 'for sale', image: 'https://via.placeholder.com/300' },
    { id: 6, name: 'Country House', price: 450000, city: 'Nashville', state: 'TN', bhk: '4', category: 'house', type: 'for sale', image: 'https://via.placeholder.com/300' },
    { id: 7, name: 'Penthouse', price: 800000, city: 'Chicago', state: 'IL', bhk: '3', category: 'apartment', type: 'for rent', image: 'https://via.placeholder.com/300' },
    { id: 8, name: 'Downtown Land', price: 250000, city: 'Seattle', state: 'WA', bhk: '0', category: 'land', type: 'for sale', image: 'https://via.placeholder.com/300' },
    { id: 9, name: 'Suburban House', price: 550000, city: 'Dallas', state: 'TX', bhk: '5', category: 'house', type: 'for sale', image: 'https://via.placeholder.com/300' },
  ]);

  const handleEdit = (id) => {
    // Logic for editing a property
    console.log('Edit property with id:', id);
  };

  const handleDelete = (id) => {
    // Logic for deleting a property
    setProperties(properties.filter(property => property.id !== id));
  };

  const handleAdd = () => {
    // Logic for adding a new property
    console.log('Add new property');
  };

  return (
    <div className="relative p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-y-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Manage Properties</h1>
        <button onClick={handleAdd} className="flex items-center text-white bg-blue-500 p-2 rounded-lg hover:bg-blue-600">
          <FaPlus className="mr-2" /> Add Property
        </button>
      </div>
      <div className="grid grid-cols-1 gap-6">
        {properties.map((property) => (
          <div key={property.id} className="relative group bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden">
            <img src={property.image} alt={property.name} className="w-full h-64 object-cover group-hover:opacity-75 transition-opacity duration-300" />
            <div className="p-4">
              <h3 className="text-xl font-bold">{property.name}</h3>
              <p><FaDollarSign className="inline-block mr-1" />{property.price}</p>
              <p><FaMapMarkerAlt className="inline-block mr-1" />{property.city}, {property.state}</p>
              <p><FaBed className="inline-block mr-1" />{property.bhk} BHK</p>
            </div>
            <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button onClick={() => handleEdit(property.id)} className="text-yellow-500 bg-white p-2 rounded-lg hover:bg-yellow-500 hover:text-white transition-colors">
                <FaEdit />
              </button>
              <button onClick={() => handleDelete(property.id)} className="text-red-500 bg-white p-2 rounded-lg hover:bg-red-500 hover:text-white transition-colors">
                <FaTrash />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyManagement;
