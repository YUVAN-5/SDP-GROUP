// components/Property.js
import { useState, useEffect } from 'react';
import axios from 'axios';

const Properties = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get('/api/properties');
        setProperties(response.data);
      } catch (error) {
        console.error('Error fetching properties:', error);
      }
    };

    fetchProperties();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Properties</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {properties.map((property) => (
          <div key={property.id} className="bg-white shadow-md rounded-lg p-4">
            <img src={property.imageUrl} alt={property.name} className="w-full h-32 object-cover mb-4" />
            <h2 className="text-xl font-semibold">{property.name}</h2>
            <p className="text-lg font-bold">{property.price}</p>
            <p>{property.city}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Properties;
