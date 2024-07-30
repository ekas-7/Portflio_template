import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useTheme } from "../../ThemeContext";

export default function Header() {
  const [isHovered, setIsHovered] = useState(false);
  const { isSun, toggleTheme } = useTheme();

  return (
    <header className="shadow fixed top-0 z-50 w-full">
      <nav
        className={`${
          isSun ? "bg-white text-black" : "bg-gray-800 text-white"
        } transition-colors duration-300 border-gray-200 px-4 lg:px-6 py-2.5 z-10`}
      >
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link
            to="/"
            className="flex items-center space-x-2"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <span
              style={{
                display: "inline-block",
                padding: "8px",
                border: `2px solid ${
                  isHovered ? "transparent" : isSun ? "black" : "white"
                }`,
                borderRadius: "5px",
                fontSize: "1.5rem",
                fontWeight: "bold",
                letterSpacing: "0.05em",
                backgroundColor: isHovered ? "#FFD700" : "transparent",
                color: isSun ? "black" : "white",
                transition:
                  "background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease",
              }}
            >
              YC
            </span>
          </Link>

          <div className="flex items-center lg:order-2">
            <button
              onClick={toggleTheme}
              className={`border-2 font-medium rounded-full text-sm p-3 lg:p-4 mr-4 flex items-center justify-center transition-colors duration-300 ${
                isSun
                  ? "bg-yellow-400 border-yellow-600 text-yellow-900 hover:bg-yellow-500"
                  : "bg-gray-700 border-gray-600 text-gray-100 hover:bg-gray-600"
              }`}
              style={{ width: "40px", height: "40px" }}
            >
              {isSun ? <i className="fas fa-sun"></i> : <i className="fas fa-moon"></i>}
            </button>

            <Link
              to="#"
              className={`bg-transparent hover:bg-[#FFD700] ${
                isSun ? "text-black" : "text-white"
              } font-semibold py-2 px-4 border border-gray-600 bottom-3 hover:border-transparent rounded `}
            >
              Get Resume
            </Link>
          </div>

          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              {[
                "Home",
                "About me",
                "Projects",
                "Skills and Experience",
                "Education",
                "Contact",
              ].map((item) => (
                <li key={item}>
                  <NavLink
                    to={`/${item.toLowerCase().replace(/ /g, "-")}`}
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 ${
                        isActive
                          ? isSun
                            ? "text-black"
                            : "text-white"
                          : isSun
                          ? "text-black"
                          : "text-white"
                      } border-b border-gray-100 lg:border-0 lg:p-0 hover:border-2 hover:border-[var(--primary-color)] hover:px-2 hover:py-1`
                    }
                  >
                    {item}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
