import React from "react";

const BookGenerator = () => {
  return (
    <div className="relative my-8">
      <div
        className="book2 py-8 px-6 relative rounded-md lg:w-3/5 w-full h-fit mx-auto"
        style={{ backgroundColor: "rgba(45, 16, 88, 0.5)" }}
      >
        <div className="w-full">
          <img
            src="./book2.png"
            alt="book2"
            className="w-full rounded-lg transition-transform transform hover:scale-105"
          />
        </div>

        <div className="absolute top-6 left-6">
          <img
            src="./paradox.png"
            alt="paradox"
            className="w-24 h-32 rounded-lg shadow-md transition-transform transform hover:scale-105"
          />
        </div>

        <div className="absolute bottom-6 right-6 flex items-center bg-sky-600 px-4 py-2 rounded-lg shadow-lg hover:bg-sky-700 transition">
        <div className="w-8 h-8 bg-[#0EA5E9] rounded-full mr-3"></div>
        <h1 className="text-white font-semibold text-lg">Chapter Complete</h1>
        </div>
      </div>
    </div>
  );
};

export default BookGenerator;
