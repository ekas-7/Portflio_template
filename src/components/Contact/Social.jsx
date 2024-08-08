import React from 'react';
import { useTheme } from '../../ThemeContext';

// SVG paths for Icons8
const twitterIcon = "https://img.icons8.com/ios-filled/30/twitter.png";
const linkedinIcon = "https://img.icons8.com/ios-filled/30/linkedin.png";
const githubIcon = "https://img.icons8.com/ios-filled/30/github.png";

export default function Social() {
  const { isSun } = useTheme();

  return (
    <div className={`w-full flex justify-center ${isSun ? 'bg-gray-200' : 'bg-gray-800'}`}>
      <div className="w-full max-w-screen-lg flex justify-evenly py-4">
        <div className={`p-3 rounded-full transition-colors duration-300 ${
          isSun ? 'bg-gray-800' : 'bg-gray-200'
        }`}>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
            <img
              src={twitterIcon}
              alt="Twitter"
              className={`w-6 h-6 ${isSun ? 'filter invert' : 'filter-none'}`}
            />
          </a>
        </div>
        <div className={`p-3 rounded-full transition-colors duration-300 ${
          isSun ? 'bg-gray-800' : 'bg-gray-200'
        }`}>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
            <img
              src={linkedinIcon}
              alt="LinkedIn"
              className={`w-6 h-6 ${isSun ? 'filter invert' : 'filter-none'}`}
            />
          </a>
        </div>
        <div className={`p-3 rounded-full transition-colors duration-300 ${
          isSun ? 'bg-gray-800' : 'bg-gray-200'
        }`}>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
            <img
              src={githubIcon}
              alt="GitHub"
              className={`w-6 h-6 ${isSun ? 'filter invert' : 'filter-none'}`}
            />
          </a>
        </div>
      </div>
    </div>
  );
}
