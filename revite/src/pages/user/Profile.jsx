import React, { useState, useEffect } from 'react';
import { FaUserEdit } from 'react-icons/fa';

const Profile = () => {
  const [profileData, setProfileData] = useState({});

  useEffect(() => {
    // Fetch the profile data from the backend
    const fetchProfile = async () => {
      const response = await fetch('/api/user/profile');
      const data = await response.json();
      setProfileData(data);
    };

    fetchProfile();
  }, []);

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold">Profile</h2>
      <div className="mt-4 p-4 bg-primary-lightBg dark:bg-primary-darkBg rounded-md shadow-md">
        <div className="flex items-center">
          <FaUserEdit className="text-3xl mr-4" />
          <div>
            <p><strong>Name:</strong> {profileData.name}</p>
            <p><strong>Email:</strong> {profileData.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
