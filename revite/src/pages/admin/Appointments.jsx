// components/Appointments.js
import { useState, useEffect } from 'react';
import axios from 'axios';

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axios.get('/api/appointments');
        setAppointments(response.data);
      } catch (error) {
        console.error('Error fetching appointments:', error);
      }
    };

    fetchAppointments();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Appointments</h1>
      <div className="bg-white shadow-md rounded-lg p-4">
        {appointments.length === 0 ? (
          <p>No appointments found.</p>
        ) : (
          <ul>
            {appointments.map((appointment) => (
              <li key={appointment.id} className="border-b py-2">
                <p className="font-semibold">{appointment.subject}</p>
                <p>{appointment.date}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Appointments;
