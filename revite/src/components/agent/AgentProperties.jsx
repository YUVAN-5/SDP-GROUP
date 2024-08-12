import React, { useEffect, useState } from 'react';
import { FaBuilding } from 'react-icons/fa';

const AgentProperties = () => {
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        // Fetch properties data from the backend
        // Example: axios.get('/api/agent/properties').then(response => setProperties(response.data));
    }, []);

    return (
        <div className="p-6 ml-64 mt-16">
            <div className="bg-lightBg p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-4">My Properties</h2>
                {properties.length > 0 ? (
                    properties.map((property) => (
                        <div key={property.id} className="p-4 border-b border-gray-200">
                            <div className="flex items-center space-x-4">
                                <FaBuilding className="text-primary text-3xl" />
                                <div>
                                    <h3 className="text-lg font-semibold">{property.name}</h3>
                                    <p className="text-darkText">{property.address}</p>
                                    <div className="text-sm text-gray-500">
                                        {property.city}, {property.state}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No properties available</p>
                )}
            </div>
        </div>
    );
};

export default AgentProperties;
