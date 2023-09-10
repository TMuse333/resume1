import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Experience from './Experience'; // Your Experience card component
import { experiences } from './skillDesc'; // Import your experiences array

const ExperienceCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [shiftAmount, setShiftAmount] = useState(0);
  const [rightClicked, setRightClicked] = useState(false)
 

  const handleNext = () => {
   
    setRightClicked(true) // Increase shift amount by a fixed value (e.g., 150)
  };

  const handlePrev = () => {
  
    setLeftClicked(true) // Decrease shift amount by a fixed value (e.g., 150)
  };

  const position = (index) => ({
    position: 'absolute',
    left: `calc(50% + ${index * 80}%)`, // Add 10% for each index
    transform: 'translateX(-50%)'
  });


  const customVariant = (index) => {
    if (rightClicked) {
      // Animation to move the element on the right to the first element's position
      return {
        visible: {
          left: `calc(50% + ${index * 80}%)`,
          // transform: 'translateX(-205%)',
          transition: { duration: 0.5 },
        },  
      };
    } else {
      // Default variant when not animating
      return {
        hidden: { opacity: 1 },
        visible: {
          opacity: 1,
          ...position(index),
          transition: { duration: 0.5 },
        },
      };
    }
  };
  


  

  return (
    <div className='container'>
      <div className="carousel-container">
        {experiences.map((experience, index) => (
          <motion.div
            key={experience.title}
            initial="hidden"
            animate={rightClicked ? 'visible' : 'hidden'}
            variants={customVariant(index)}
            style={position(index)}
            custom={index}
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
