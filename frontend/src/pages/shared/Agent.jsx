import React from 'react';

 const agents = [
  { 
    name: 'John Doe', 
    rating: 4.5, 
    location: 'New York', 
    contact: 'contact@johndoe.com', 
    image: 'https://ik.imagekit.io/1in7nqs7x/th.jpg?updatedAt=1722228264565',
    bio: 'Experienced real estate agent with a focus on residential properties in the New York area.'
  },
  { 
    name: 'Jane Smith', 
    rating: 4.8, 
    location: 'Los Angeles', 
    contact: 'contact@janesmith.com', 
    image: 'https://ik.imagekit.io/1in7nqs7x/cb.jpeg?updatedAt=1722228264404',
    bio: 'Top agent specializing in luxury homes in the Los Angeles region.'
  },
  { 
    name: 'Sam Wilson', 
    rating: 4.3, 
    location: 'Chicago', 
    contact: 'contact@samwilson.com', 
    image: 'https://ik.imagekit.io/1in7nqs7x/cp.jpeg?updatedAt=1722228264325',
    bio: 'Dedicated to finding the perfect property for every client in Chicago.'
  },
  { 
    name: 'Alice Johnson', 
    rating: 4.7, 
    location: 'Miami', 
    contact: 'contact@alicejohnson.com', 
    image: 'https://ik.imagekit.io/1in7nqs7x/ag1.jpeg?updatedAt=1722228019834',
    bio: 'Specialist in beachfront properties and luxury condos in Miami.'
  },
  { 
    name: 'Robert Brown', 
    rating: 4.6, 
    location: 'Dallas', 
    contact: 'contact@robertbrown.com', 
    image: 'https://ik.imagekit.io/1in7nqs7x/ag2.jpg?updatedAt=1722228019976',
    bio: 'Expert in commercial real estate and investment properties in Dallas.'
  },
  { 
    name: 'Chris Evans', 
    rating: 4.9, 
    location: 'Seattle', 
    contact: 'contact@lindawhite.com', 
    image: 'https://ik.imagekit.io/1in7nqs7x/che.jpeg?updatedAt=1722228019799',
    bio: 'Trusted agent for family homes and suburban properties in Seattle.'
  },
  { 
    name: 'Robert Downy Jr', 
    rating: 4.9, 
    location: 'Seattle', 
    contact: 'contact@lindawhite.com', 
    image: 'https://ik.imagekit.io/1in7nqs7x/rdj.jpeg?updatedAt=1722228019811',
    bio: 'Trusted agent for family homes and suburban properties in Seattle.'
  },
  { 
    name: 'Chris Hemsworth', 
    rating: 4.9, 
    location: 'Seattle', 
    contact: 'contact@lindawhite.com', 
    image: 'https://ik.imagekit.io/1in7nqs7x/ce.jpeg?updatedAt=1722228019987',
    bio: 'Trusted agent for family homes and suburban properties in Seattle.'
  },
];

export const Agent = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Find an Agent</h1>
      <div className="grid grid-cols-4 gap-6">
        {agents.map((agent, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
            <img src={agent.image} alt={agent.name} className="w-full h-40 object-cover rounded-t-lg mb-4" />
            <h2 className="text-2xl font-semibold mb-2">{agent.name}</h2>
            <p className="text-gray-600 mb-2">Rating: {agent.rating}</p>
            <p className="text-gray-600 mb-2">Location: {agent.location}</p>
            <p className="text-gray-700 mb-4">{agent.bio}</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Contact</button>
          </div>
        ))}
      </div>
    </div>
  );
};

