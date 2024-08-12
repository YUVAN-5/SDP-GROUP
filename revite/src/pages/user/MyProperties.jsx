import React, { useState, useEffect } from 'react';
import { FaHome } from 'react-icons/fa';

const MyProperties = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    // Fetch the properties from the backend
    const fetchProperties = async () => {
      const response = await fetch('/api/user/my-properties');
      const data = await response.json();
      setProperties(data);
    };

    fetchProperties();
  }, []);

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold">My Properties</h2>
      <div className="grid grid-cols-3 gap-4 mt-4">
        {properties.map((property) => (
          <div key={property.id} className="p-4 bg-primary-lightBg dark:bg-primary-darkBg rounded-md shadow-md">
            <FaHome className="text-2xl mb-2" />
            <p><strong>Name:</strong> {property.name}</p>
            <p><strong>Location:</strong> {property.location}</p>
            <p><strong>Price:</strong> ${property.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyProperties;
