import React from 'react';
import { MessageCircle, Phone, Star } from 'lucide-react';

const agents = [
  {
    name: "Arun Kumar",
    photo: "https://ik.imagekit.io/rqds6dyata/image%20(21).png?updatedAt=1722153470228",
    // details: "Expert in residential properties.",
    phone: "+91-9876543210",
    experience: "10 years",
    languages: "Tamil, English",
    location: "Chennai, Tamil Nadu",
    rating: 4.5
  },
  {
    name: "Lakshmi Natarajan",
    photo: "https://ik.imagekit.io/rqds6dyata/image%20(18).png?updatedAt=1722153211543",
    // details: "Specializes in commercial properties.",
    phone: "+91-9123456780",
    experience: "8 years",
    languages: "Kannada, English",
    location: "Bangalore, Karnataka",
    rating: 4.2
  },
  {
    name: "Priya Subramanian",
    photo: "https://ik.imagekit.io/rqds6dyata/image%20(26).png?updatedAt=1722153931532",
    // details: "Luxury homes specialist.",
    phone: "+91-9988776655",
    experience: "12 years",
    languages: "Malayalam, English",
    location: "Kochi, Kerala",
    rating: 4.8
  },
  {
    name: "Vijay Anand",
    photo: "https://ik.imagekit.io/rqds6dyata/image%20(24).png?updatedAt=1722153980342",
    // details: "Commercial real estate expert.",
    phone: "+91-9098765432",
    experience: "15 years",
    languages: "Tamil, English",
    location: "Coimbatore, Tamil Nadu",
    rating: 4.6
  },
  {
    name: "Ravi Shankar",
    photo: "https://ik.imagekit.io/rqds6dyata/image%20(22).png?updatedAt=1722153446717",
    // details: "Investment property advisor.",
    phone: "+91-9876543120",
    experience: "9 years",
    languages: "Kannada, English",
    location: "Mysore, Karnataka",
    rating: 4.3
  },
  {
    name: "Kavya Ramesh",
    photo: "https://ik.imagekit.io/rqds6dyata/image%20(16).png?updatedAt=1722153084242",
    // details: "New construction specialist.",
    phone: "+91-9123456708",
    experience: "7 years",
    languages: "Malayalam, English",
    location: "Trivandrum, Kerala",
    rating: 4.7
  },
  {
    name: "Manoj Krishna",
    photo: "https://ik.imagekit.io/rqds6dyata/image%20(20).png?updatedAt=1722153427107",
    // details: "Property management professional.",
    phone: "+91-9988776543",
    experience: "11 years",
    languages: "Tamil, English",
    location: "Madurai, Tamil Nadu",
    rating: 4.4
  },
  {
    name: "Suresh Babu",
    photo: "https://ik.imagekit.io/rqds6dyata/image%20(25).png?updatedAt=1722153953187",
    // details: "Rental properties expert.",
    phone: "+91-9876512345",
    experience: "6 years",
    languages: "Kannada, English",
    location: "Mangalore, Karnataka",
    rating: 4.1
  }
];

const Agents = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Our Agents</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {agents.map((agent, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={agent.photo} alt={`${agent.name}`} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-bold text-gray-800 mb-1">{agent.name}</h2>
              {/* <p className="text-sm text-gray-500">{agent.details}</p> */}
              <div className="mt-4">
                <p className="text-sm text-gray-600"><strong>Experience:</strong> {agent.experience}</p>
                <p className="text-sm text-gray-600"><strong>Languages:</strong> {agent.languages}</p>
                <p className="text-sm text-gray-600"><strong>Location:</strong> {agent.location}</p>
              </div>
              <div className="flex items-center mt-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-500 mr-1" fill={i < Math.round(agent.rating) ? 'currentColor' : 'none'} />
                ))}
                <span className="text-sm text-gray-600 ml-2">{agent.rating}</span>
              </div>
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center text-gray-600">
                  <Phone className="w-4 h-4 mr-1" />
                  <span className="text-sm">{agent.phone}</span>
                </div>
                <button className="bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600 flex items-center text-sm">
                  <MessageCircle className="w-4 h-4 mr-1" />
                  Chat
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Agents;
