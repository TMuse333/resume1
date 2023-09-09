import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Experience from './Experience'; // Your Experience card component
import { experiences } from './skillDesc'; // Import your experiences array

const ExperienceCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [shiftAmount, setShiftAmount] = useState(0);
  const [rightClicked, setRightClicked] = useState(false)

  const handleNext = () => {
    const nextIndex = (activeIndex + 1) % experiences.length;
    setActiveIndex(nextIndex);
    setShiftAmount(shiftAmount + 150);
    setRightClicked(true) // Increase shift amount by 30% with each click
  };

  const handlePrev = () => {
    const prevIndex = (activeIndex - 1 + experiences.length) % experiences.length;
    setActiveIndex(prevIndex);
    setShiftAmount(shiftAmount - 130); // Decrease shift amount by 30% with each click
  };

  const customVariant = (index) => ({
    hidden: {
      x: `${60 + index * 10 + shiftAmount}%`, // Calculate initial x position with shift
    },
    visible: {
      x: `${80 + index * 10 + shiftAmount + 20}%`, // Shift by 20%
      transition: {
        duration: 0.5,
      },
    },
  });

  const neutral = {
    hidden: {
      x: '100%'
    },
    visible: {
      x: '100%'
    }
  }

  return (
    <div className='container'>
      <div className="carousel-container">
        {experiences.map((experience, index) => (
          <motion.div
            key={experience.title}
            initial="hidden"
            animate="visible"
            variants={rightClicked ? customVariant(index) : neutral}
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
