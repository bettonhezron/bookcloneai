import React from "react";
import { Code, BookOpen, Download, Languages } from "lucide-react";

const Features = ({ darkMode }) => {
  const features = [
    {
      icon: <Code size={28} />,
      title: "AI-Powered Writing",
      description: "Generate high-quality content with advanced AI technology",
    },
    {
      icon: <BookOpen size={28} />,
      title: "Custom Genre",
      description: "Create stories in any genre or blend multiple styles",
    },
    {
      icon: <Download size={28} />,
      title: "Instant Download",
      description: "Get your completed book in various formats instantly",
    },
    {
      icon: <Languages size={28} />,
      title: "Multilingual",
      description: "Generate content in multiple languages effortlessly",
    },
  ];

  return (
    <section id="features" className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="text-center">
            <div className="bg-purple-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
