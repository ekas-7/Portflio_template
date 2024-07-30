import React, { useState, useEffect } from "react";
import { useTheme } from "../../ThemeContext";

const fetchGitHubProjects = async () => {
  const username = "ekas-7";
  
  // Fetch GitHub projects
  const response = await fetch(`https://api.github.com/users/${username}/repos`);
  const data = await response.json();
  
  // Extract relevant data
  return data.map((repo) => ({
    title: repo.name,
    description: repo.description || "No description",
    link: repo.html_url,
  }));
};

export default function Projects() {
  const { isSun } = useTheme();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const loadProjects = async () => {
      const projectsData = await fetchGitHubProjects();
      setProjects(projectsData);
    };

    loadProjects();
  }, []);

  // Determine the number of projects to be rendered
  const totalProjects = projects.length;
  const gridSize = 3;
  let gridProjects = [...projects];

  // Determine how many empty cells are needed to make a full grid
  const emptyCellsNeeded = (gridSize * gridSize) - (totalProjects % (gridSize * gridSize));

  // Add empty cells to fill the grid
  for (let i = 0; i < emptyCellsNeeded; i++) {
    gridProjects.push({});
  }

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
        Projects
      </h1>
      <div className="grid grid-cols-3 gap-4 mb-16">
        {gridProjects.map((project, index) => (
          <a
            key={index}
            href={project.link || "#"}
            className={`border rounded-lg overflow-hidden p-4 ${
              isSun ? "border-gray-300 bg-white" : "border-gray-700 bg-gray-900"
            } hover:bg-opacity-80 hover:shadow-lg transition-shadow duration-300 ${
              project.title ? "" : "bg-gray-300" // Ensure empty cells have a background color
            }`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {project.title ? (
              <div>
                <h2
                  className={`text-lg font-semibold ${
                    isSun ? "text-black" : "text-white"
                  }`}
                >
                  {project.title}
                </h2>
                <p
                  className={`mt-2 ${
                    isSun ? "text-gray-700" : "text-gray-400"
                  }`}
                >
                  {project.description}
                </p>
              </div>
            ) : (
              <div className="w-full h-24"></div> // Ensure empty cells have a specific height
            )}
          </a>
        ))}
      </div>
     
        <button
          className={`text-2xl py-2 px-4 bg-transparent hover:bg-[#FFD700] ${
            isSun ? "text-black" : "text-white"
          } font-semibold border border-gray-600 rounded transition-all duration-300 ease-in-out`}
        >
          Load More !
        </button>
    </div>
  );
}
