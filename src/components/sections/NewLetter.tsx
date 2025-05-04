import React from "react";

const Newsletter = ({ darkMode }) => {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-4">Stay Updated</h2>
      <p className="text-center mb-8">
        Subscribe to our newsletter for the latest AI writing tips and BookAI
        updates
      </p>

      <div className="max-w-md mx-auto">
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className={`flex-grow p-3 rounded-md ${
              darkMode ? "bg-gray-800" : "bg-white border border-gray-300"
            }`}
          />
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-md transition-colors">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
