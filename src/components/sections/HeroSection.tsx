import React from "react";

const Hero = () => {
  return (
    <section className="container mx-auto px-4 py-16 text-center">
      <div className="announcement mb-8 py-2 px-4 bg-yellow-600 text-white inline-block rounded-md">
        <p>
          Attention: TryBookAI has been acquired by Indicus AI. Indicus LLM will
          be used for text and image generation
        </p>
      </div>

      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        Explore the Possibilities of{" "}
        <span className="text-purple-400">AI Book Writing</span> with BookAI
      </h1>

      <p className="text-xl mb-12 max-w-3xl mx-auto">
        Unleash the power of AI to create captivating books in minutes.
        Download, Distribute wherever you want. Generate unlimited free books
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        <a
          href="#"
          className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-8 rounded-full text-lg transition-colors"
        >
          Get Started
        </a>
        <a
          href="#"
          className="bg-transparent border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white py-3 px-8 rounded-full text-lg transition-colors"
        >
          Get API Access
        </a>
      </div>
    </section>
  );
};

export default Hero;
