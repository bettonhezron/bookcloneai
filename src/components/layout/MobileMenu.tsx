import React from "react";
import { Sun, Moon } from "lucide-react";

const MobileMenu = ({ darkMode, toggleDarkMode, closeMobileMenu }) => {
  return (
    <div className="fixed inset-0 bg-purple-900 z-50 md:hidden">
      <div className="flex justify-between items-center p-4">
        <h2 className="text-2xl font-bold text-white">Menu</h2>
        <button
          onClick={closeMobileMenu}
          className="text-white"
          aria-label="Close menu"
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <nav className="flex flex-col p-4">
        <a
          href="#features"
          className="text-white py-4 border-b border-purple-800"
        >
          Features
        </a>
        <a
          href="#how-it-works"
          className="text-white py-4 border-b border-purple-800"
        >
          How it Works
        </a>
        <a
          href="#roadmap"
          className="text-white py-4 border-b border-purple-800"
        >
          Roadmap
        </a>
        <a href="#" className="text-white py-4 border-b border-purple-800">
          Api
        </a>
        <a href="#" className="text-white py-4 border-b border-purple-800">
          Price
        </a>
        <a href="#" className="text-white py-4 border-b border-purple-800">
          Models
        </a>
      </nav>

      <div className="p-4 flex flex-col">
        <div className="flex justify-between items-center py-4 border-b border-purple-800">
          <span className="text-white">Change Theme</span>
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-purple-800"
            aria-label={
              darkMode ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            {darkMode ? (
              <Sun size={20} color="white" />
            ) : (
              <Moon size={20} color="white" />
            )}
          </button>
        </div>

        <a
          href="#"
          className="mt-6 bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-md transition-colors text-center"
        >
          Login/Sign Up
        </a>
      </div>
    </div>
  );
};

export default MobileMenu;
