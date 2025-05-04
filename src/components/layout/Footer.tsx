import React from "react";

const Footer = ({ darkMode }) => {
  return (
    <footer
      className={`py-8 ${
        darkMode ? "border-t border-gray-800" : "border-t border-gray-200"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="mb-4">
            ©{new Date().getFullYear()} BookAI. All rights reserved
          </p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="hover:text-purple-400">
              Terms of Service
            </a>
            <a href="#" className="hover:text-purple-400">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-purple-400">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
