import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaCalendarCheck, FaTrash, FaEdit } from 'react-icons/fa';

const AgentAppointments = () => {
    const [appointments, setAppointments] = useState([]);
    const [editAppointment, setEditAppointment] = useState(null);

    useEffect(() => {
        fetchAppointments();
    }, []);

    const fetchAppointments = async () => {
        try {
            const response = await axios.get('/api/agent/appointments');
            setAppointments(response.data);
        } catch (error) {
            console.error('Error fetching appointments:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`/api/agent/appointments/${id}`);
            setAppointments(appointments.filter(appointment => appointment.id !== id));
        } catch (error) {
            console.error('Error deleting appointment:', error);
        }
    };

    const handleEdit = (appointment) => {
        setEditAppointment(appointment);
    };

    const handleSave = async () => {
        try {
            await axios.put(`/api/agent/appointments/${editAppointment.id}`, editAppointment);
            fetchAppointments();
            setEditAppointment(null);
        } catch (error) {
            console.error('Error updating appointment:', error);
        }
    };

    return (
        <div className="p-6 ml-64 mt-16">
            <div className="bg-lightBg p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-4">Appointments</h2>
                {appointments.length > 0 ? (
                    appointments.map((appointment) => (
                        <div key={appointment.id} className="p-4 border-b border-gray-200 flex justify-between items-center">
                            <div>
                                {editAppointment && editAppointment.id === appointment.id ? (
                                    <div>
                                        <input
                                            type="text"
                                            value={editAppointment.description}
                                            onChange={(e) => setEditAppointment({ ...editAppointment, description: e.target.value })}
                                            className="mb-2 p-2 border rounded"
                                        />
                                        <input
                                            type="date"
                                            value={editAppointment.date}
                                            onChange={(e) => setEditAppointment({ ...editAppointment, date: e.target.value })}
                                            className="mb-2 p-2 border rounded"
                                        />
                                        <input
                                            type="time"
                                            value={editAppointment.time}
                                            onChange={(e) => setEditAppointment({ ...editAppointment, time: e.target.value })}
                                            className="p-2 border rounded"
                                        />
                                    </div>
                                ) : (
                                    <>
                                        <p className="text-darkText">{appointment.description}</p>
                                        <div className="flex items-center space-x-2 mt-2">
                                            <FaCalendarCheck />
                                            <span>{appointment.date}</span>
                                        </div>
                                        <div className="text-sm text-gray-500">{appointment.time}</div>
                                    </>
                                )}
                            </div>
                            <div className="flex space-x-2">
                                {editAppointment && editAppointment.id === appointment.id ? (
                                    <button
                                        onClick={handleSave}
                                        className="bg-primary text-white p-2 rounded hover:bg-secondary transition-colors"
                                    >
                                        Save
                                    </button>
                                ) : (
                                    <button
                                        onClick={() => handleEdit(appointment)}
                                        className="bg-secondary text-white p-2 rounded hover:bg-primary transition-colors"
                                    >
                                        <FaEdit />
                                    </button>
                                )}
                                <button
                                    onClick={() => handleDelete(appointment.id)}
                                    className="bg-red-500 text-white p-2 rounded hover:bg-red-700 transition-colors"
                                >
                                    <FaTrash />
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No appointments available</p>
                )}
            </div>
        </div>
    );
};

export default AgentAppointments;
