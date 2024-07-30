// Certifications.js
import React, { useState } from 'react';
import { useTheme } from '../../ThemeContext';

export default function Certifications() {
  const { isSun } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);

  const certifications = [
    { title: 'Certification 1', description: 'Description 1' },
    { title: 'Certification 2', description: 'Description 2' },
    { title: 'Certification 3', description: 'Description 3' },
    // Add more certifications as needed
  ];

  const nextCertification = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === certifications.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevCertification = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? certifications.length - 1 : prevIndex - 1
    );
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-8 transition-colors duration-300"
      style={{ backgroundColor: isSun ? '#FFD700' : '#FFD700' }}
    >
      <h1 className={`text-5xl font-bold mb-8 ${isSun ? 'text-black' : 'text-black' }`}>
        Certifications
      </h1>
      <div className="w-full max-w-lg">
        <div 
          className="p-6 rounded-lg shadow-lg transition-colors duration-300" 
          style={{ backgroundColor: isSun ? '#FFFACD' : '#34495E' }}
        >
          <h2 className={`text-3xl font-semibold ${isSun ? 'text-black' : 'text-white'}`}>
            {certifications[currentIndex].title}
          </h2>
          <p className={`mt-2 text-lg ${isSun ? 'text-black' : 'text-white'}`}>
            {certifications[currentIndex].description}
          </p>
        </div>
        <div className="flex justify-between mt-4">
          <button 
            onClick={prevCertification}
            className={`px-4 py-2 rounded ${isSun ? 'bg-yellow-500 text-black' : 'bg-blue-500 text-white'}`}
          >
            Previous
          </button>
          <button 
            onClick={nextCertification}
            className={`px-4 py-2 rounded ${isSun ? 'bg-yellow-500 text-black' : 'bg-blue-500 text-white'}`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}