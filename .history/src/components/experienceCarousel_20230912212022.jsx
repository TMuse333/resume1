import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Experience from './Experience';
import { experiences } from './skillDesc';

const ExperienceCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for next, -1 for prev

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prevIndex) => (prevIndex + 1) % experiences.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? experiences.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel-container">
     
        <motion.div
          key={`experience-${index}`}
         
        >
          <Experience
            title={experience.title}
            image={experience.image}
            description={experience.description}
          />
        </motion.div>
 
      <div className="buttons">
        <button onClick={handlePrev}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default ExperienceCarousel;
