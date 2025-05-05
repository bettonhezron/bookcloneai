import React from "react";

const Testimonials = ({ darkMode }) => {
  const testimonials = [
    {
      quote:
        "BookAI revolutionized my writing process. I completed my debut novel in just two weeks!",
      author: "Sarah J., Author",
    },
    {
      quote:
        "The AI-generated ideas helped me overcome writer's block. It's like having a co-author at your fingertips",
      author: "Mark The., Aspiring Writer",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">What users say</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg text-center ${
              darkMode ? "bg-gray-800" : "bg-gray-200"
            }`}
          >
            <p className="text-lg mb-4 italic">"{testimonial.quote}"</p>
            <p className="font-semibold">-{testimonial.author}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
