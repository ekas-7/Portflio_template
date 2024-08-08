import React from "react";
import { useTheme } from "../../ThemeContext";

const educationData = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "University of Technology",
    period: "2017 - 2021",
    description: "Focused on software engineering, data structures, and web development. Graduated with honors.",
  },
  {
    degree: "High School Diploma",
    institution: "Central High School",
    period: "2013 - 2017",
    description: "Participated in various coding competitions and led the school's computer science club.",
  },
];

const certificationData = [
  {
    name: "React Developer Certification",
    issuer: "React Training Institute",
    date: "2022",
  },
  {
    name: "AWS Certified Developer - Associate",
    issuer: "Amazon Web Services",
    date: "2023",
  },
];

export default function Education() {
  const { isSun } = useTheme();

  return (
    <div
      className={`min-h-screen flex flex-col items-center px-8 ${
        isSun ? "bg-white" : "bg-gray-800"
      } transition-colors duration-300 overflow-hidden`}
    >
      <h1
        className={`text-6xl font-bold text-center mb-16 mt-16 ${
          isSun ? "text-black" : "text-white"
        }`}
      >
        Education 
      </h1>

      <div className="w-full max-w-4xl mb-16">
        <h2 className={`text-4xl font-semibold mb-8 ${isSun ? "text-black" : "text-white"}`}>
          Education
        </h2>
        <div className="grid grid-cols-1 gap-6 mb-16">
          {educationData.map((edu, index) => (
            <div 
              key={index} 
              className={`border rounded-lg overflow-hidden p-4 ${
                isSun ? "border-gray-300 bg-white" : "border-gray-700 bg-gray-900"
              } hover:bg-opacity-80 hover:shadow-lg transition-shadow duration-300`}
            >
              <h3 className={`text-xl font-semibold ${isSun ? "text-black" : "text-white"}`}>{edu.degree}</h3>
              <p className={`text-lg ${isSun ? "text-gray-600" : "text-gray-400"}`}>{edu.institution}</p>
              <p className={`text-sm ${isSun ? "text-gray-500" : "text-gray-500"}`}>{edu.period}</p>
              <p className={`mt-2 ${isSun ? "text-gray-700" : "text-gray-300"}`}>{edu.description}</p>
            </div>
          ))}
        </div>

        
        
      </div>
    </div>
  );
}