import React, { useEffect, useState } from 'react';
import { FaBuilding, FaCalendarCheck, FaEnvelope } from 'react-icons/fa';

const AgentDashboard = () => {
    const [dashboardData, setDashboardData] = useState({});

    useEffect(() => {
        // Fetch data from the backend
        // Example: axios.get('/api/agent/dashboard').then(response => setDashboardData(response.data));
    }, []);

    return (
        <div className="p-6 ml-64 mt-16">
            <div className="grid grid-cols-3 gap-6">
                <div className="bg-lightBg p-4 rounded-lg shadow-lg flex items-center">
                    <FaBuilding className="text-primary text-3xl" />
                    <div className="ml-4">
                        <h3 className="text-lg font-semibold">Properties</h3>
                        <p className="text-darkText">{dashboardData.properties || 0}</p>
                    </div>
                </div>
                <div className="bg-lightBg p-4 rounded-lg shadow-lg flex items-center">
                    <FaCalendarCheck className="text-primary text-3xl" />
                    <div className="ml-4">
                        <h3 className="text-lg font-semibold">Appointments</h3>
                        <p className="text-darkText">{dashboardData.appointments || 0}</p>
                    </div>
                </div>
                <div className="bg-lightBg p-4 rounded-lg shadow-lg flex items-center">
                    <FaEnvelope className="text-primary text-3xl" />
                    <div className="ml-4">
                        <h3 className="text-lg font-semibold">Mails</h3>
                        <p className="text-darkText">{dashboardData.mails || 0}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AgentDashboard;
