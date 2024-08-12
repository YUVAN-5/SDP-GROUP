import React, { useState } from 'react';
import Select from 'react-select';
import countryList from 'react-select-country-list';

const AdminAppointment = () => {
  const countries = countryList().getData();
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [states] = useState([
    { value: '1', label: 'State 1' },
    { value: '2', label: 'State 2' },
    { value: '3', label: 'State 3' }
  ]);
  const [selectedState, setSelectedState] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [appointments, setAppointments] = useState([]);
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  // Example appointments data
  const exampleAppointments = [
    { id: 1, agentName: "Lena Mariana", clientName: "John Doe", date: "2024-08-10", time: "10:00 AM", clientDetails: { phone: "123-456-7890", email: "john.doe@example.com" } },
    { id: 2, agentName: "Elyssa Perry", clientName: "Jane Smith", date: "2024-08-12", time: "2:00 PM", clientDetails: { phone: "987-654-3210", email: "jane.smith@example.com" } },
    // Add more appointments as needed
  ];

  // Set appointments data (in practice, fetch this data from an API)
  useState(() => {
    setAppointments(exampleAppointments);
  }, []);

  const filteredAppointments = appointments.filter(appointment =>
    appointment.agentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    appointment.clientName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAppointmentAction = (appointmentId, action) => {
    // Implement the logic for approving, rejecting, or other actions
    console.log(`Appointment ${appointmentId} ${action}`);
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-semibold">Admin Appointment Management</h1>
        <p className="text-gray-600">Manage and view appointments and user details.</p>
      </div>

      {/* Search Filters Section */}
      <div className="flex justify-between items-start gap-8">
        <div className="w-1/4 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Search</h2>

          <div className="mb-4">
            <input
              type="text"
              className="w-full border-gray-300 rounded p-2"
              placeholder="Search by Agent or Client"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Country</label>
            <Select
              options={countries}
              value={selectedCountry}
              onChange={setSelectedCountry}
              placeholder="Select Country"
              className="w-full"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-1">District/State</label>
            <Select
              options={states}
              value={selectedState}
              onChange={setSelectedState}
              placeholder="Select State"
              className="w-full"
              isDisabled={!selectedCountry}
            />
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

        {/* Appointments Display Section */}
        <div className="w-3/4">
          <h2 className="text-2xl font-semibold mb-4">Appointments</h2>
          <div className="grid grid-cols-1 gap-6">
            {filteredAppointments.length > 0 ? (
              filteredAppointments.map(appointment => (
                <div key={appointment.id} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold">{appointment.agentName}</h3>
                  <p className="text-gray-700">Client: {appointment.clientName}</p>
                  <p className="text-gray-700">Date: {appointment.date}</p>
                  <p className="text-gray-700">Time: {appointment.time}</p>
                  <div className="mt-4">
                    <button 
                      onClick={() => setSelectedAppointment(appointment)} 
                      className="bg-green-500 text-white rounded p-2 mr-4"
                    >
                      View Details
                    </button>
                    <button 
                      onClick={() => handleAppointmentAction(appointment.id, 'approve')} 
                      className="bg-blue-500 text-white rounded p-2 mr-4"
                    >
                      Approve
                    </button>
                    <button 
                      onClick={() => handleAppointmentAction(appointment.id, 'reject')} 
                      className="bg-red-500 text-white rounded p-2"
                    >
                      Reject
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-700">No appointments found.</p>
            )}
          </div>
        </div>
      </div>

      {/* Appointment Details Modal */}
      {selectedAppointment && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/2">
            <h2 className="text-2xl font-semibold mb-4">Appointment Details</h2>
            <p><strong>Agent:</strong> {selectedAppointment.agentName}</p>
            <p><strong>Client:</strong> {selectedAppointment.clientName}</p>
            <p><strong>Date:</strong> {selectedAppointment.date}</p>
            <p><strong>Time:</strong> {selectedAppointment.time}</p>
            <p><strong>Phone:</strong> {selectedAppointment.clientDetails.phone}</p>
            <p><strong>Email:</strong> {selectedAppointment.clientDetails.email}</p>
            <div className="mt-4 flex justify-end">
              <button 
                onClick={() => setSelectedAppointment(null)} 
                className="bg-gray-500 text-white rounded p-2"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminAppointment;
