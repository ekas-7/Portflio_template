// src/components/Home/Home.jsx
import React from 'react';
import profilePic from '../../assets/profile-pic.jpg'; // Adjust the path to your profile picture
import { useTheme } from '../../ThemeContext';

export default function Home() {
  const { isSun } = useTheme();

  return (
    <div className={`min-h-screen flex flex-1 justify-evenly items-center px-8 ${isSun ? 'bg-white' : 'bg-gray-800'} transition-colors duration-300 overflow-hidden`}>
      <div className="text-4xl font-bold text-left" style={{ color: isSun ? 'black' : 'white' }}>
        Yuvvir Chahl
      </div>
      <div>
        <img
          src={profilePic}
          alt="Profile"
          className="w-80 h-80 rounded-full object-cover"
        />
      </div>
    </div>
  );
}
