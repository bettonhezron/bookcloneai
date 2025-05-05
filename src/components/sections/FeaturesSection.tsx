import React from "react";
import { Bot, FileText, Download } from "lucide-react";

const Features = ({ darkMode = false }) => {
  const features = [
    {
      icon: <Bot size={28} color="white" />,
      title: "AI-Powered Writing",
      description: "Generate high-quality content with advanced AI technology",
    },
    {
      icon: <FileText size={28} color="white" />,
      title: "Custom Genre",
      description: "Create stories in any genre or blend multiple styles",
    },
    {
      icon: <Download size={28} color="white" />,
      title: "Instant Download",
      description: "Get your completed book in various formats instantly",
    },
    {
      icon: <span className="text-white text-lg font-bold">A-Z</span>,
      title: "Multilingual",
      description: "Generate content in multiple languages effortlessly",
    },
  ];

  const iconBgColor = "bg-purple-700"; 
  const cardBgColor = darkMode ? "bg-[rgba(32,12,62,0.5)]" : "bg-pink-50";
  const textColor = darkMode ? "text-white" : "text-black";

  return (
    <section id="features" className={`mx-auto flex-flex-wrap justify-center max-w-7xl`}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`${cardBgColor} rounded-lg shadow-lg my-4 text-center transition transform hover:scale-105 hover:shadow-2xl duration-300`}
          >
            <div className={`${iconBgColor} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 mt-8`}>
              {feature.icon}
            </div>
            <h3 className={`${textColor} text-xl font-bold mb-2`}>{feature.title}</h3>
            <p className={`${textColor} text-lg p-6`}>
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
