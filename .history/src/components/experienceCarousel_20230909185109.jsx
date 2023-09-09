import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Experience from './Experience'; // Your Experience card component
import { experiences } from './skillDesc'; // Import your experiences array

const ExperienceCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [shiftAmount, setShiftAmount] = useState(0);
  const [rightClicked, setRightClicked] = useState(false)
  const [leftClicked, setLeftClicked] = useState(false)
  const [timesClicked,]

  const handleNext = () => {
    const nextIndex = (activeIndex + 1) % experiences.length;
    setActiveIndex(nextIndex);
    setShiftAmount( 150);
    setRightClicked(true) // Increase shift amount by 30% with each click
  };

  const handlePrev = () => {
    const prevIndex = (activeIndex - 1 + experiences.length) % experiences.length;
    setActiveIndex(prevIndex);
    setShiftAmount(-150);
    setLeftClicked(true) // Decrease shift amount by 30% with each click
  };

  const customVariant = (index) => ({
    hidden: {
      x: `${100 + index * 50 + shiftAmount}%`, // Calculate initial x position to match the gap
    },
    visible: {
      x: `${100 + index * 50 + shiftAmount + 20}%`, // Shift by 20%
      transition: {
        duration: 0.5,
      },
    },
  });
  

  const neutral = (index) => ({
    hidden: {
      x: `${100 + index * 50}%`, // Calculate initial x position based on index
    },
    visible: {
      x: `${100 + index * 50}%`, // Calculate visible x position based on index
    },
  });
  

  return (
    <div className='container'>
      <div className="carousel-container">
        {experiences.map((experience, index) => (
          <motion.div
            key={experience.title}
            initial="hidden"
            animate="visible"
            variants={rightClicked || leftClicked? customVariant(index) : neutral(index)}
          >
            <Experience
              title={experience.title}
              image={experience.image}
              description={experience.description}
            />
          </motion.div>
        ))}
      </div>

      <div className='buttons'>
        <button onClick={handlePrev}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default ExperienceCarousel;
