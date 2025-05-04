import React from "react";
import { Sun, Moon, BookOpen } from "lucide-react";

const Navbar = ({ darkMode, toggleDarkMode, toggleMobileMenu }) => {
  return (
    <header className="container mx-auto p-4 flex justify-between items-center">
      <div className="flex items-center">
        <img
          src="./logo.png"
          alt="logo"
          className="w-12 h-12 rounded-full lg:w-16 lg:h-16"
        />
        <h1 className="text-2xl font-bold">BookAI</h1>
      </div>

      <nav className="hidden md:flex space-x-6">
        <a href="#features" className="hover:text-purple-400">
          Features
        </a>
        <a href="#how-it-works" className="hover:text-purple-400">
          How it Works
        </a>
        <a href="#roadmap" className="hover:text-purple-400">
          Roadmap
        </a>
        <a href="#" className="hover:text-purple-400">
          Api
        </a>
        <a href="#" className="hover:text-purple-400">
          Price
        </a>
        <a href="#" className="hover:text-purple-400">
          Models
        </a>
      </nav>

      <div className="flex items-center space-x-4">
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full hover:bg-gray-700"
          aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        <a
          href="#"
          className="hidden md:block bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition-colors"
        >
          Login/Sign Up
        </a>
        <button
          className="md:hidden text-white"
          onClick={toggleMobileMenu}
          aria-label="Open mobile menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
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
