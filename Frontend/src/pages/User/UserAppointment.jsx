import React from 'react';
import countryList from 'react-select-country-list';

const UserAppointment = () => {
  const options = countryList().getData();

  const agents = [
    { id: 1, name: "Lena Mariana", imageUrl: "agent1-url" },
    { id: 2, name: "Elyssa Perry", imageUrl: "agent2-url" },
    { id: 3, name: "Hilary Mr", imageUrl: "agent3-url" },
    { id: 4, name: "Misra Guptill", imageUrl: "agent4-url" },
    { id: 5, name: "James Parker", imageUrl: "agent5-url" },
    { id: 6, name: "Sophia Williams", imageUrl: "agent6-url" }
  ];

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-semibold">Search Agent, Make an Appointment</h1>
        <p className="text-gray-600">Discover the best real estate agents and properties near you.</p>
      </div>

      {/* Search Fields */}
      <div className="mb-8">
        <div className="flex gap-4 justify-center">
          <div>
            <label className="block text-gray-700 mb-1">Name</label>
            <input type="text" className="border-gray-300 rounded p-2 w-full" placeholder="Name" />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Phone or Email</label>
            <input type="text" className="border-gray-300 rounded p-2 w-full" placeholder="Phone or Email" />
          </div>
          <div className="flex items-end">
            <button className="bg-orange-500 text-white rounded p-2">Submit</button>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-start gap-8">
        {/* Search Filters Section */}
        <div className="w-1/4 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Search</h2>

          <div className="mb-4">
            <input
              type="text"
              className="w-full border-gray-300 rounded p-2"
              placeholder="Search"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Country</label>
            <select className="w-full border-gray-300 rounded mt-1 p-2">
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-1">District/State</label>
            <select className="w-full border-gray-300 rounded mt-1 p-2">
              <option value="State1">State 1</option>
              <option value="State2">State 2</option>
              {/* Add more states */}
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Specialty</label>
            <select className="w-full border-gray-300 rounded mt-1 p-2">
              <option value="Residential">Residential</option>
              <option value="Commercial">Commercial</option>
              {/* Add more specialties */}
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Qualification</label>
            <select className="w-full border-gray-300 rounded mt-1 p-2">
              <option value="BBA">BBA</option>
              <option value="MBA">MBA</option>
              {/* Add more qualifications */}
            </select>
          </div>

          <button className="w-full bg-blue-500 text-white rounded p-2">Search</button>
        </div>

        {/* Agents Display Section */}
        <div className="w-3/4">
          <div className="grid grid-cols-3 gap-6">
            {agents.map(agent => (
              <div key={agent.id} className="bg-white p-6 rounded-lg shadow-md">
                <img src={agent.imageUrl} alt={agent.name} className="w-20 h-20 rounded-full mb-4 mx-auto" />
                <h3 className="text-xl font-semibold text-center">{agent.name}</h3>
                <button className="w-full bg-green-500 text-white rounded mt-4 p-2">View Profile</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserAppointment;
