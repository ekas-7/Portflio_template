import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../ThemeContext";

export default function Header() {
  const [isHovered, setIsHovered] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isLinking, setIsLinking] = useState(false); // New state for animation
  const { isSun, toggleTheme } = useTheme();

  // Function to handle scroll events
  const handleScroll = () => {
    const sections = document.querySelectorAll("section");
    let currentSection = "home";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const scrollPosition = window.scrollY;

      if (scrollPosition >= sectionTop - 50 && scrollPosition < sectionTop + sectionHeight) {
        currentSection = section.getAttribute("id");
      }
    });

    setActiveSection(currentSection);
  };

  useEffect(() => {
    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup scroll event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  const handleLinkClick = () => {
    setIsLinking(true);
    setTimeout(() => {
      // Open the Google Drive link
      window.open('https://docs.google.com/spreadsheets/d/1mq4nuK59mWZ559RGpc0Mf8-15lHJnKAv/edit?gid=2139932755#gid=2139932755', '_blank'); // Replace with your actual Google Drive link
      setIsLinking(false);
    }, 500); // Duration of the animation
  };

  return (
    <header className="shadow fixed top-0 z-50 w-full">
      <div className={`border-b-2 ${isSun ? "border-black" : "border-white"}`}>
        <nav className={`${isSun ? "bg-white text-black" : "bg-gray-800 text-white"} transition-colors duration-300 px-2 lg:px-4 py-1.5 lg:py-2 z-10`}>
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <Link
              to="/"
              className="flex items-center space-x-1"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <span
                style={{
                  display: "inline-block",
                  padding: "4px",
                  border: `2px solid ${isHovered ? "transparent" : isSun ? "black" : "white"}`,
                  borderRadius: "4px",
                  fontSize: "1.25rem",
                  fontWeight: "bold",
                  letterSpacing: "0.03em",
                  backgroundColor: isHovered ? "#FFD700" : "transparent",
                  color: isSun || isHovered ? "black" : "white",
                  transition: "background-color 0.4s ease, color 0.4s ease, border-color 0.4s ease",
                }}
              >
                YC
              </span>
            </Link>

            <div className="flex items-center lg:order-2">
              <button
                onClick={toggleTheme}
                className={`border-2 font-medium rounded-full text-xs p-2 lg:p-3 mr-2 lg:mr-4 flex items-center justify-center transition-colors duration-300 ${
                  isSun
                    ? "bg-yellow-400 border-yellow-600 text-yellow-900 hover:bg-yellow-500 hover:border-yellow-700"
                    : "bg-gray-700 border-gray-600 text-gray-100 hover:bg-gray-600 hover:border-gray-700"
                }`}
                style={{ width: "30px", height: "30px" }}
              >
                {isSun ? (
                  <i className="fas fa-sun" aria-label="Switch to dark mode"></i>
                ) : (
                  <i className="fas fa-moon" aria-label="Switch to light mode"></i>
                )}
              </button>

              <button
                onClick={handleLinkClick}
                className={`bg-transparent text-${isSun || isHovered ? "black" : "white"} font-semibold py-1 px-2 border border-gray-600 rounded transition-all duration-300 ${
                  isLinking ? "animate-pulse" : ""
                }`}
                style={{
                  transition: "transform 0.5s ease-in-out",
                  transform: isLinking ? "scale(1.05)" : "scale(1)"
                }}
              >
                {isLinking ? "Opening..." : "Get Resume"}
              </button>
            </div>

            <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
              <ul className="flex flex-col mt-2 font-medium lg:flex-row lg:space-x-6 lg:mt-0">
                {["Home", "About me","Projects", "Skills and Experience", "Education", "Contact"].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase().replace(/ /g, "-")}`}
                      className={`block py-1 pr-2 pl-3 duration-200 ${
                        isSun ? "text-black" : "text-white"
                      } border-b border-gray-100 lg:border-0 lg:p-0 hover:border-b-2 hover:border-[var(--primary-color)] hover:font-semibold transition-all ${
                        activeSection === item.toLowerCase().replace(/ /g, "-") ? "border-b-2 border-[var(--primary-color)]" : ""
                      }`}
                      onClick={() => handleSectionClick(item.toLowerCase().replace(/ /g, "-"))}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
