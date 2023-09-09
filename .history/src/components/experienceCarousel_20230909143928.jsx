import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Experience from './Experience'; // Your Experience card component
import { experiences } from './skillDesc'; // Import your experiences array

const ExperienceCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animationDirection, setAnimationDirection] = useState(null);

  const handleNext = () => {
    // setActiveIndex((prevIndex) => (prevIndex + 1) % experiences.length);
    setAnimationDirection("rightClick");
  };

  const handlePrev = () => {
    // setActiveIndex((prevIndex) =>
    //   prevIndex === 0 ? experiences.length - 1 : prevIndex - 1
    // );
    setAnimationDirection("leftClick");
  };

  const leftClick = {
    hidden: {
      x: 0,
    },
    visible: {
      x: -100,
      transition: {
        duration: 0.5,
      },
    },
  };

  const rightClick = {
    hidden: {
      x: 0,
    },
    visible: {
      x: 100,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="carousel-container">
      <button onClick={handlePrev}>Previous</button>

      <motion.div
        key={activeIndex}
        initial="hidden"
        animate="visible"
        variants={animationDirection === "leftClick" ? leftClick :  rightClick}
      >
        <Experience
          title={experiences[activeIndex].title}
          image={experiences[activeIndex].image}
          description={experiences[activeIndex].description}
        />
      </motion.div>

      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default ExperienceCarousel;
