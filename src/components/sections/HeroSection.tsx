import React from "react";

const Hero = ({ darkMode }) => {
  return (
    <section className={`${darkMode ? "bg-[#14092e] text-white" : "bg-white text-gray-800"} min-h-screen flex flex-col items-center justify-center py-16 px-4`}>
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Explore the Possibilities of{" "}
          <span className="text-purple-500">AI Book Writing</span> with 
          <br />BookAI
        </h1>

        <p className="text-xl mb-12 max-w-3xl mx-auto">
          Unleash the power of AI to create captivating books in minutes.
          <br />Download, Distribute wherever you want. Generate unlimited free
          <br />books
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-16"> 
  <a
    href="#"
    className="bg-gradient-to-r from-blue-500 to-blue-300 hover:from-blue-600 hover:to-blue-400 text-white py-3 px-8 rounded-full text-lg transition-colors"
  >
    Get Started
  </a>
  <a
    href="#"
    className="bg-gradient-to-r from-blue-500 to-blue-300 hover:from-blue-600 hover:to-blue-400 text-white py-3 px-8 rounded-full text-lg transition-colors"
  >
    Get Api Access
  </a>
</div>


        <div className="mt-8 py-2 px-4 bg-transparent text-yellow-400 inline-block">
          <p>
            Attention:TryBookAI has been acquired by Indicus AI. Indicus LLM will be used for text and image generation
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;