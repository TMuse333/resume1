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

  const leftClick = {

  }

  return (
    <div className="carousel-container">
      <button onClick={handlePrev}>Previous</button>
      <AnimatePresence initial={false}>
        <motion.div
          key={activeIndex}
          
         
         
        >
          <Experience 
          title={experiences[0]} />
        </motion.div>
      </AnimatePresence>
      <button onClick={handleNext}>Next</button>
    </div>
  );
  
};

export default ExperienceCarousel;
