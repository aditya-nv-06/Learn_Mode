
import React, { useState, useEffect } from 'react';
import { FaUserCircle } from 'react-icons/fa';

// Template function to fetch user data
const fetchUserData = async () => {
  // This is a placeholder. In a real application, you would fetch this data from your backend.
  return {
    username: 'Alex ',
    email: 'alex@example.com',
  };
};

const UserProfile = () => {
  const [userData, setUserData] = useState({ username: '', email: '' });

  useEffect(() => {
    const getUserData = async () => {
      const data = await fetchUserData();
      setUserData(data);
    };
    getUserData();
  }, []);

  return (
    <div className="flex items-center p-2 rounded-lg shadow-md bg-gray-800">
      <FaUserCircle className="w-8 h-8 text-gray-500" />
      <div className="ml-2">
        <p className="text-sm font-semibold text-white">{userData.username}</p>
        <p className="text-xs text-gray-400">{userData.email}</p>
      </div>
    </div>
  );
};

export default UserProfile;
