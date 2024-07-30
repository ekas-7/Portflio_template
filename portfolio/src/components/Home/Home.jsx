import React from "react";
import profilePic from "../../assets/profile-pic.jpeg"; // Adjust the path to your profile picture
import { useTheme } from "../../ThemeContext";
import Typewriter from "../Typewriter"; // Ensure this path is correct

const greetings = [
  "Hello I'm",       // English
  "Bonjour je suis ", // French
  "ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ ਮੈਂ ਹਾਂ", // Punjabi
  "Hola soy",        // Spanish
];

export default function Home() {
  const { isSun } = useTheme();

  return (
    <div
      className={`min-h-screen flex flex-1 justify-evenly items-center px-8 ${
        isSun ? "bg-white" : "bg-gray-800"
      } transition-colors duration-300 overflow-hidden`}
    >
      <div className="flex flex-col items-center justify-center">
        <div
          className="text-4xl font-bold text-center italic mb-2"
          style={{ color: isSun ? "black" : "white" }}
        >
          <Typewriter texts={greetings} delay={5000} className="italic" />
        </div>
        <div
          className="text-7xl font-bold text-center mt-4 mb-8 italic"
          style={{ color: isSun ? "black" : "white" }}
        >
          YUVVIR .S. CHAHAL 
        </div>
        <button
          className={`text-2xl py-2 px-4 bg-transparent hover:bg-[#FFD700] ${
            isSun ? "text-black" : "text-white"
          } font-semibold border border-gray-600 rounded transition-all duration-300 ease-in-out`}
        >
          Get Resume
        </button>
      </div>

      <div
        style={{
          boxShadow: `0px 0px 16px 4px ${isSun ? "#FFD700" : "#FFFACD"}`,
          borderRadius: "400px",
        }}
      >
        <img
          src={profilePic}
          alt="Profile"
          className="w-96 h-96 rounded-full object-cover" // Increase the size of the image
        />
      </div>
    </div>
  );
}
