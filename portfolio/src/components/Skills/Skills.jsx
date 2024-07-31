import React from "react";
import { useTheme } from "../../ThemeContext";

const skillsData = [
  { name: "React", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "HTML/CSS", level: 95 },
  { name: "Node.js", level: 80 },
  { name: "Python", level: 75 },
  { name: "Git", level: 85 },
];

const experienceData = [
  {
    title: "Frontend Developer",
    company: "Tech Solutions Inc.",
    period: "2021 - Present",
    description: "Developed and maintained responsive web applications using React and modern JavaScript.",
  },
  {
    title: "Web Developer Intern",
    company: "StartUp Co.",
    period: "2020 - 2021",
    description: "Assisted in building and testing various web projects, focusing on frontend technologies.",
  },
];

export default function Skills() {
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
        Skills & Experience
      </h1>

      <div className="w-full max-w-4xl mb-16">
        <h2 className={`text-4xl font-semibold mb-8 ${isSun ? "text-black" : "text-white"}`}>
          Skills
        </h2>
        <div className="grid grid-cols-2 gap-6 mb-16">
          {skillsData.map((skill, index) => (
            <div 
              key={index} 
              className={`border rounded-lg overflow-hidden p-4 ${
                isSun ? "border-gray-300 bg-white" : "border-gray-700 bg-gray-900"
              } hover:bg-opacity-80 hover:shadow-lg transition-shadow duration-300`}
            >
              <h3 className={`text-lg font-semibold ${isSun ? "text-black" : "text-white"}`}>{skill.name}</h3>
              <div className={`w-full bg-gray-200 rounded-full h-2.5 mt-2 ${isSun ? "" : "dark:bg-gray-700"}`}>
                <div
                  className="bg-blue-600 h-2.5 rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <span className={`text-sm ${isSun ? "text-gray-700" : "text-gray-300"} mt-1`}>{skill.level}%</span>
            </div>
          ))}
        </div>

        <h2 className={`text-4xl font-semibold mb-8 ${isSun ? "text-black" : "text-white"}`}>
          Experience
        </h2>
        <div className="grid grid-cols-1 gap-6">
          {experienceData.map((exp, index) => (
            <div 
              key={index} 
              className={`border rounded-lg overflow-hidden p-4 ${
                isSun ? "border-gray-300 bg-white" : "border-gray-700 bg-gray-900"
              } hover:bg-opacity-80 hover:shadow-lg transition-shadow duration-300`}
            >
              <h3 className={`text-xl font-semibold ${isSun ? "text-black" : "text-white"}`}>{exp.title}</h3>
              <p className={`text-lg ${isSun ? "text-gray-600" : "text-gray-400"}`}>{exp.company}</p>
              <p className={`text-sm ${isSun ? "text-gray-500" : "text-gray-500"}`}>{exp.period}</p>
              <p className={`mt-2 ${isSun ? "text-gray-700" : "text-gray-300"}`}>{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}