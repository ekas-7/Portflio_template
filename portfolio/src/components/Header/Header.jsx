// src/components/Header/Header.jsx
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useTheme } from '../../ThemeContext';

export default function Header() {
  const [isHovered, setIsHovered] = useState(false);
  const { isSun, toggleTheme } = useTheme();

  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
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
                border: `2px solid ${isHovered ? "transparent" : "black"}`,
                borderRadius: "5px",
                fontSize: "1.5rem",
                fontWeight: "bold",
                letterSpacing: "0.05em",
                backgroundColor: isHovered ? "#FFD700" : "transparent",
                color: "black",
                transition: "background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease",
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
                  : "bg-gray-800 border-gray-600 text-gray-100 hover:bg-gray-700"
              }`}
              style={{ width: "40px", height: "40px" }}
            >
              {isSun ? (
                <i className="fas fa-sun"></i>
              ) : (
                <i className="fas fa-moon"></i>
              )}
            </button>

            <Link
              to="#"
              className="bg-transparent hover:bg-[#FFD700] text-black font-semibold py-2 px-4 border hover:border-transparent rounded"
            >
              Get Resume
            </Link>
          </div>

          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-black" : "text-[#FFD700]"
                    } border-b border-gray-100 hover:text-[#FFD700] lg:border-0 lg:p-0`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-black" : "text-[#FFD700]"
                    } border-b border-gray-100 hover:text-[#FFD700] lg:border-0 lg:p-0`
                  }
                >
                  About me
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-black" : "text-[#FFD700]"
                    } border-b border-gray-100 hover:text-[#FFD700] lg:border-0 lg:p-0`
                  }
                >
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-black" : "text-[#FFD700]"
                    } border-b border-gray-100 hover:text-[#FFD700] lg:border-0 lg:p-0`
                  }
                >
                  Skills and Experience
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-black" : "text-[#FFD700]"
                    } border-b border-gray-100 hover:text-[#FFD700] lg:border-0 lg:p-0`
                  }
                >
                  Education
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-black" : "text-[#FFD700]"
                    } border-b border-gray-100 hover:text-[#FFD700] lg:border-0 lg:p-0`
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
