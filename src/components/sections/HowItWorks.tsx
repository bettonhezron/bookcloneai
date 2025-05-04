import React from "react";
import { BookOpen, Code, Settings, Download } from "lucide-react";

const HowItWorks = ({ darkMode }) => {
  const howItWorks = [
    {
      icon: <BookOpen size={24} />,
      title: "Choose Your Genre",
      description:
        "Select from a wide range of genres or create a custom blend",
    },
    {
      icon: <Code size={24} />,
      title: "Provide Key details",
      description:
        "Input main characters, plot points, or themes to guide the AI",
    },
    {
      icon: <Settings size={24} />,
      title: "AI Generation",
      description: "Our advanced AI create your book based on your inputs",
    },
    {
      icon: <Download size={24} />,
      title: "Review and Download",
      description:
        "Review your generated book and download in your preferred format",
    },
  ];

  return (
    <section id="how-it-works" className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">How it Works</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {howItWorks.map((step, index) => (
          <div key={index} className="flex">
            <div className="mr-4">
              <div className="bg-blue-500 w-12 h-12 rounded-full flex items-center justify-center">
                {step.icon}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
