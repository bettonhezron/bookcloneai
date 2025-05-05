import React, { useEffect } from "react";
import { Sun, Moon } from "lucide-react";

const MobileMenu = ({ darkMode, toggleDarkMode, closeMobileMenu }) => {
    useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 md:hidden flex flex-col"
      style={{ backgroundColor: "#200c3e" }}  
    >
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
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div className="flex flex-col p-4 flex-grow overflow-y-auto">
        <nav className="flex flex-col mb-6">
          {["Features", "How it Works", "Roadmap", "Api", "Price", "Models"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-white py-4 border-b border-white/20 last:border-b-0"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="flex justify-between items-center py-4 border-b border-white/20">
          <span className="text-white">Change Theme</span>
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-white/10"
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? <Sun size={20} color="white" /> : <Moon size={20} color="white" />}
          </button>
        </div>
        <a
          href="#"
          className="mt-6 bg-gradient-to-r from-blue-500 to-blue-300 w-full py-4 text-xl rounded-lg hover:bg-blue-600 text-center text-white transition-colors"
        >
          Login/Sign Up
        </a>
      </div>
    </div>
  );
};

export default MobileMenu;
