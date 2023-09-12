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
      {experiences.map((experience, index) => (
        <motion.div
          key={`experience-${index}`}
          initial={{
            x: direction === 1 ? '100%' : '-100%', // Slide in from the right or left
          }}
          animate={{
            x: activeIndex === index ? '0%' : direction === 1 ? '-100%' : '100%',
          }}
          transition={{ duration: 0.5 }}
        >
          <Experience
            title={experience.title}
            image={experience.image}
            description={experience.description}
          />
        </motion.div>
      ))}
      <div className="buttons">
        <button onClick={handlePrev}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default ExperienceCarousel;
