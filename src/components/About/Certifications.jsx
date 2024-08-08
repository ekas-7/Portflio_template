import React, { useState, useEffect } from 'react';
import { useTheme } from '../../ThemeContext';

export default function Certifications() {
  const { isSun } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);

  const certifications = [
    { title: 'Certification 1', description: 'Description 1', imageUrl: 'https://via.placeholder.com/300x200?text=Cert1' },
    { title: 'Certification 2', description: 'Description 2', imageUrl: 'https://via.placeholder.com/300x200?text=Cert2' },
    { title: 'Certification 3', description: 'Description 3', imageUrl: 'https://via.placeholder.com/300x200?text=Cert3' },
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

  useEffect(() => {
    const intervalId = setInterval(nextCertification, 1500); // Change certification every 1.5 seconds

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-8 transition-colors duration-300 "
      style={{ backgroundColor: isSun ? '#FFD700' : '#FFFACD' }}
    >
      <h1 className={`text-6xl font-bold  ${isSun ? 'text-black' : 'text-black'} mb-24 `}>
        Certifications
      </h1>
      <div className="w-full max-w-7xl flex items-center justify-center relative">
        <div 
          className="w-full max-w-7xl p-12 rounded-lg shadow-lg flex flex-row items-center transition-colors duration-300" 
          style={{ backgroundColor: isSun ? '#FFFFFF' : '#2C3E50' }}
        >
          <img
            src={certifications[currentIndex].imageUrl}
            alt="Certification"
            className="w-1/3 h-auto object-cover rounded-lg mr-6"
          />
          <div className="flex-1">
            <h2 className={`text-4xl font-bold ${isSun ? 'text-black' : 'text-gray-200'}`}>
              {certifications[currentIndex].title}
            </h2>
            <p className={`mt-4 text-lg ${isSun ? 'text-gray-800' : 'text-gray-400'}`}>
              {certifications[currentIndex].description}
            </p>
          </div>
        </div>
        <div className="absolute top-1/2 left-4 transform -translate-y-1/2 cursor-pointer" onClick={prevCertification}>
          <svg xmlns="http://www.w3.org/2000/svg" className={`w-8 h-8 ${isSun ? 'text-black' : 'text-gray-300'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </div>
        <div className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer" onClick={nextCertification}>
          <svg xmlns="http://www.w3.org/2000/svg" className={`w-8 h-8 ${isSun ? 'text-black' : 'text-gray-300'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </div>
      </div>
      <div className="flex mt-4">
        {certifications.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full mx-1 cursor-pointer ${index === currentIndex ? 'bg-blue-500' : 'bg-gray-400'}`}
            onClick={() => setCurrentIndex(index)}
          ></div>
        ))}
      </div>
    </div>
  );
}
