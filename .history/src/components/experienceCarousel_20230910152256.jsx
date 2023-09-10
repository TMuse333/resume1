import React, { useState,useEffect } from 'react';
import { motion } from 'framer-motion';
import Experience from './Experience'; // Your Experience card component
import { experiences } from './skillDesc'; // Import your experiences array

const ExperienceCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [shiftAmount, setShiftAmount] = useState(0);
  const [rightClicked, setRightClicked] = useState(false)
  const [elementPositions, setElementPositions] = useState([]);
 

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
      const targetPositions = calculateTargetPositions();
      const left = `calc(50% + ${targetPositions[index]}px)`;

      return {
        visible: {
          left,
          transform: 'translateX(-50%)',
          transition: { duration: 0.5 },
        },
      };
    } else {
      // Default variant when not animating
      return {};
    }
  };
  


  useEffect(() => {
    const positions = [];
    experiences.forEach((_, index) => {
      const element = document.getElementById(`experience-${index}`);
      if (element) {
        const rect = element.getBoundingClientRect();
        positions.push(rect.x);
      }
    });
    setElementPositions(positions);
    console.log("Element positions:", positions);
  }, []);

  const calculateTargetPositions = () => {
    const targetPositions = [];
    const numElements = experiences.length;

    // Calculate target positions based on the desired animation
    for (let i = 0; i < numElements; i++) {
      if (i === 0) {
        // First element moves to the right by the amount of the second element
        targetPositions.push(elementPositions[1] - elementPositions[0]);
      } else if (i === 1) {
        // Second element moves to the right by the amount of the third element
        targetPositions.push(elementPositions[2] - elementPositions[1]);
      } else {
        // Third element moves to the left by the amount of the first element
        targetPositions.push(elementPositions[0] - elementPositions[2]);
      }
    }

    return targetPositions;
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
            id={`experience-${index}`}
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
      {/* <div className="positions">
        {elementPositions.map((x, index) => (
          <div key={`position-${index}`}>Element {index} X: {x}</div>
        ))}
      </div> */}
    </div>
  );
};

export default ExperienceCarousel;
