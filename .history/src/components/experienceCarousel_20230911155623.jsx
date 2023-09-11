import React, { useState,useEffect,useLayoutEffect,useRef } from 'react';
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
   
  });
  


  const customVariant = (index) => {
    if (rightClicked) {
      const targetPositions = calculateTargetPositions();
      const left = `calc(50% - ${targetPositions[index]}px)`;

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
  
 



  const centerElement = (elementId, offset) => {
    const element = document.getElementById(elementId);
    if (element) {
      const width = element.offsetWidth;
      const height = element.offsetHeight;
      const left = (window.innerWidth - width) / 2;
      const top = (window.innerHeight - height) / 2 + offset; // Apply the offset to the top position
  
      return {
        position: 'absolute',
        left: left + 'px',
        top: top + 'px',
      };
    }
    return {}; // Return an empty style object if the element is not found
  };
  
  
  
  // Usage:
  // Call centerElement with the ID of the element you want to center
  // For example:
  // centerElement("your-element-id");
  


  useLayoutEffect(() => {
    const positions = [];
    experiences.forEach((_, index) => {
      const element = document.getElementById(`experience-${index}`);
      if (element) {
        const rect = element.getBoundingClientRect();
        console.log(rect);
        const positionRelativeToWindow = rect.left + window.scrollX;
        positions.push(positionRelativeToWindow);
      }
    });
    setElementPositions(positions);
  
    // Delay the logging of positions
  // Add a 100ms delay (adjust as needed)
  }, []);

  const calculateTargetPositions = () => {
    const targetPositions = [];
    const numElements = experiences.length;
  
    for (let i = 0; i < numElements; i++) {
      const currentIndex = i;
      const previousIndex = (i - 1 + numElements) % numElements; // Wrap around to the last element if needed
      const currentPosition = elementPositions[currentIndex];
      const previousPosition = elementPositions[previousIndex];
  
      // Calculate the target position by finding the difference between the current and previous positions
      const targetPosition = previousPosition - currentPosition;
      targetPositions.push(targetPosition);
    }
  
    return targetPositions;
  };
  
  


  //   variants={customVariant(index)}
          //  style={position(index)}
  

  return (
    <div className='container'>
      <div className="carousel-container">
        {experiences.map((experience, index) => (
          <motion.div
            key={experience.title}
            initial="hidden"
            animate={rightClicked ? 'visible' : 'hidden'}
          
            custom={index}
            id={`experience-${index}`}
            style={centerElement(`experience-${index}`)}
           
          >
            {console.log("window:" +window.innerWidth)}
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
