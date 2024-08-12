import React from 'react';
import { FaBed, FaMapMarkerAlt, FaDollarSign } from 'react-icons/fa';

const PropertyCard = ({ property }) => {
  return (
    <div className="relative group overflow-hidden rounded-lg shadow-md">
      <img src={property.image} alt={property.name} className="w-full h-64 object-cover group-hover:opacity-75 transition-opacity duration-300" />
      <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white p-4">
        <h3 className="text-xl font-bold">{property.name}</h3>
        <p><FaDollarSign className="inline-block mr-1" />{property.price}</p>
        <p><FaMapMarkerAlt className="inline-block mr-1" />{property.city}, {property.state}</p>
        <p><FaBed className="inline-block mr-1" />{property.bhk} BHK</p>
      </div>
    </div>
  );
};

export default PropertyCard;
