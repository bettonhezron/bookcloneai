import React from "react";
import { Sun, Moon } from "lucide-react";

const Navbar = ({ darkMode, toggleDarkMode, toggleMobileMenu }) => {
  return (
    <header className="container mx-auto px-8 py-4 flex justify-between items-center bg-transparent">
      <div className="flex items-center space-x-3">
        <img
          src="./logo.png"
          alt="logo"
          className="w-12 h-12 rounded-full lg:w-16 lg:h-16"
        />
        <h1 className="text-2xl font-bold">BookAI</h1>
      </div>

      <nav className="hidden md:flex space-x-5 lg:space-x-8 ml-auto items-center text-[16px] lg:text-[17px] font-medium">
        <a
          href="#features"
          className={`hover:text-purple-400 ${darkMode ? "text-[#E0E0E0]" : "text-gray-800"}`}
        >
          Features
        </a>
        <a
          href="#how-it-works"
          className={`hover:text-purple-400 ${darkMode ? "text-[#E0E0E0]" : "text-gray-800"}`}
        >
          How it Works
        </a>
        <a
          href="#roadmap"
          className={`hover:text-purple-400 ${darkMode ? "text-[#E0E0E0]" : "text-gray-800"}`}
        >
          Roadmap
        </a>
        <a
          href="#"
          className={`hover:text-purple-400 ${darkMode ? "text-[#E0E0E0]" : "text-gray-800"}`}
        >
          Api
        </a>
        <a
          href="#"
          className={`hover:text-purple-400 ${darkMode ? "text-[#E0E0E0]" : "text-gray-800"}`}
        >
          Price
        </a>
        <a
          href="#"
          className={`hover:text-purple-400 ${darkMode ? "text-[#E0E0E0]" : "text-gray-800"}`}
        >
          Models
        </a>
      </nav>

      <div className="flex items-center space-x-4 ml-4 lg:ml-6">
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full hover:bg-gray-700 hidden md:block"
          aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        <a
          href="#"
          className="hidden md:block bg-gradient-to-r from-blue-500 to-blue-300 py-4 text-xl rounded-lg hover:from-blue-600 hover:to-blue-400 w-[220px] text-center"
        >
          Login/Sign Up
        </a>

        <button
          className="md:hidden ml-0"  
          onClick={toggleMobileMenu}
          aria-label="Open mobile menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke={darkMode ? "white" : "black"}
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
