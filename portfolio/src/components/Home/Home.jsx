import React from 'react';
import profilePic from '../../assets/profile-pic.jpg'; // Adjust the path to your profile picture
import { useTheme } from '../../ThemeContext';

export default function Home() {
  const { isSun } = useTheme();

  return (
    <div className={`min-h-screen flex flex-1 justify-evenly items-center px-8 ${isSun ? 'bg-white' : 'bg-gray-800'} transition-colors duration-300 overflow-hidden`}>
      <div className='flex flex-col items-center justify-center'>
        <div className="text-4xl font-bold text-center" style={{ color: isSun ? 'black' : 'white' }}>
          Hello I'm
        </div>
        <div className="text-7xl font-bold text-center mt-6 mb-8" style={{ color: isSun ? 'black' : 'white' }}>
          YUVVIR .S. CHAHAL
        </div>
        <button className={`text-2xl p-6 bg-transparent hover:bg-[#FFD700] ${isSun ? 'text-black' : 'text-white'} font-semibold py-2 px-4 border hover:border-transparent rounded `}>
          Get Resume
        </button>
      </div>
      
      <div style={{ boxShadow: "0px 0px 16px 4px #FFD700", borderRadius: "400px" }}>
        <img
          src={profilePic}
          alt="Profile"
          className="w-96 h-96 rounded-full object-cover" // Increase the size of the image
        />
      </div>
    </div>
  );
}
