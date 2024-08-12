import React from 'react';
import { Button } from "@/components/ui/button";

const Modal = ({ property, onClose }) => {
  if (!property) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[50%]">
        <h2 className="text-2xl font-bold mb-4">{property.title}</h2>
        <img src={property.image} alt={property.title} className="w-full h-64 object-cover rounded-lg mb-4" />
        <p className="text-lg text-gray-700"><strong>Location:</strong> {property.location}</p>
        <p className="text-lg text-gray-900"><strong>Price:</strong> {property.price}</p>
        <p className="text-lg text-gray-700 mt-4">{property.description}</p>
        <div className="flex justify-end mt-6">
          <Button className="bg-red-500 text-white hover:bg-red-700" onClick={onClose}>Close</Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
