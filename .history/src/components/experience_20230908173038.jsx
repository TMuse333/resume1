import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Experience from './Experience'; // Your Experience card component
import { experiences } from './skillDesc'; // Import your experiences array

const ExperienceCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % experiences.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? experiences.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel-container">
 
    {experiences.map((experience) => {
      <Experience
      title={experience.title}
      image={experiences.image}
      description={experiences.description}
      />
    })}
  
</div>

  );
};

export default ExperienceCarousel;