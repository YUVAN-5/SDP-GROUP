import React, { useEffect, useState } from 'react';

const AgentProfile = () => {
    const [profileData, setProfileData] = useState({});

    useEffect(() => {
        // Fetch agent profile data from the backend
        // Example: axios.get('/api/agent/profile').then(response => setProfileData(response.data));
    }, []);

    return (
        <div className="p-6 ml-64 mt-16">
            <div className="bg-lightBg p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-4">Profile</h2>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <h3 className="font-semibold">Name</h3>
                        <p>{profileData.name}</p>
                    </div>
                    <div>
                        <h3 className="font-semibold">Email</h3>
                        <p>{profileData.email}</p>
                    </div>
                    <div>
                        <h3 className="font-semibold">Phone</h3>
                        <p>{profileData.phone}</p>
                    </div>
                    <div>
                        <h3 className="font-semibold">Address</h3>
                        <p>{profileData.address}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AgentProfile;
