import React from "react";
import { useState } from "react";
import Navbar from "../components/layout/Navbar";
import MobileMenu from "../components/layout/MobileMenu";
import Hero from "../components/sections/HeroSection";
import BookGenerator from "../components/sections/BooksSection";
import Features from "../components/sections/FeaturesSection";
import HowItWorks from "../components/sections/HowItWorks";
import SampleBooks from "../components/sections/SampleBooks";
import Roadmap from "../components/sections/RoadMap";
import Testimonials from "../components/sections/TestimonialsSection";
import Newsletter from "../components/sections/NewLetter";
import Footer from "../components/layout/Footer";

const BookAIClone = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div
      className={
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"
      }
    >
      <Navbar
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        toggleMobileMenu={toggleMobileMenu}
      />

      {mobileMenuOpen && (
        <MobileMenu
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
          closeMobileMenu={() => setMobileMenuOpen(false)}
        />
      )}

      <Hero />
      <BookGenerator darkMode={darkMode} />
      <Features darkMode={darkMode} />
      <HowItWorks darkMode={darkMode} />
      <SampleBooks darkMode={darkMode} />
      <Roadmap darkMode={darkMode} />
      <Testimonials darkMode={darkMode} />
      <Newsletter darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </div>
  );
};

export default BookAIClone;
