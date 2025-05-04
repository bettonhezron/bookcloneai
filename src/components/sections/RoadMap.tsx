import React from "react";
import { Users, BookOpen, Paintbrush } from "lucide-react";

const Roadmap = ({ darkMode }) => {
  // Roadmap section data
  const roadmap = [
    {
      icon: <Users size={24} />,
      title: "Advanced Character Development",
      description: "AI-powered tool for creating deep, complex characters",
    },
    {
      icon: <BookOpen size={24} />,
      title: "E-book Platform Integration",
      description: "Seamless publishing to popular e-book platforms",
    },
    {
      icon: <Users size={24} />,
      title: "Collaborative Writing",
      description: "Co-create stories with other authors or AI assistants",
    },
    {
      icon: <Paintbrush size={24} />,
      title: "AI Cover Art Generation",
      description: "Create stunning book covers with AI-generated art",
    },
  ];

  return (
    <section id="roadmap" className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Roadmap</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {roadmap.map((item, index) => (
          <div key={index} className="flex">
            <div className="mr-4">
              <div className="bg-blue-500 w-12 h-12 rounded-full flex items-center justify-center">
                {item.icon}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Roadmap;
