import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Experience from './Experience'; // Your Experience card component
import { experiences } from './skillDesc'; // Import your experiences array

const ExperienceCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animationDirection, setAnimationDirection] = useState(null);

  const handleNext = () => {
    const nextIndex = (activeIndex + 1) % experiences.length;
    setAnimationDirection("rightClick");
    setActiveIndex(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = (activeIndex - 1 + experiences.length) % experiences.length;
    setAnimationDirection("leftClick");
    setActiveIndex(prevIndex);
  };

  const leftClick = {
    hidden: {
      x: window.innerWidth / 4,
    },
    visible: {
      x: -window.innerWidth * 0.75,
      transition: {
        duration: 0.5,
      },
    },
  };

  const rightClick = {
    hidden: {
      x: window.innerWidth / 4,
    },
    visible: {
      x: "100%",
      transition: {
        duration: 0.5,
      },
    },
  };

  const leftTemp = {
    hidden: {
      x: -10000,
      transition: {
        duration: 1,
      },
    },
    visible: {
      x: "48%",
      transition: {
        duration: 0.8,
      },
    },
  };

  const neutral = {
    hidden: {
      x: "-50%",
    },
    visible: {
      x: "-50%",
    },
  };

  const currentExperience = experiences[activeIndex];
  const prevExperience = experiences[(activeIndex - 1 + experiences.length) % experiences.length];
  const nextExperience = experiences[(activeIndex + 1) % experiences.length];

  return (
    <div className='container'>
      <div className="carousel-container">
        <motion.div
          key={activeIndex}
          initial="hidden"
          animate="visible"
          variants={leftTemp}
        >
          <Experience
            title={currentExperience.title}
            image={currentExperience.image}
            description={currentExperience.description}
          />
        </motion.div>

        <motion.div
          key={activeIndex}
          initial="hidden"
          animate="visible"
          variants={
            animationDirection === "leftClick"
              ? leftClick
              : animationDirection === "rightClick"
              ? rightClick
              : neutral
          }
        >
          <Experience
            title={prevExperience.title}
            image={prevExperience.image}
            description={prevExperience.description}
          />
        </motion.div>

        <motion.div
          key={activeIndex}
          initial="hidden"
          animate="visible"
          variants={
            animationDirection === "leftClick"
              ? leftClick
              : animationDirection === "rightClick"
              ? rightClick
              : neutral
          }
        >
          <Experience
            title={nextExperience.title}
            image={nextExperience.image}
            description={nextExperience.description}
          />
        </motion.div>
      </div>

      <div className='buttons'>
        <button onClick={handlePrev}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default ExperienceCarousel;
