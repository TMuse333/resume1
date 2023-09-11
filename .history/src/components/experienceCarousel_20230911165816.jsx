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
   
    setRightClicked(true)
    shiftElementsToCenter('experience-0') // Increase shift amount by a fixed value (e.g., 150)
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
      const left = (window.innerWidth - width) / 2+ offset;
      const top = (window.innerHeight - height) / 2 ; // Apply the offset to the top position
  
      return {
        position: 'absolute',
        left: left + 'px',
        top: top + 'px',
      };
    }
    return {}; // Return an empty style object if the element is not found
  };

  const shiftLeft = (elementId, offset) => {
    const element = document.getElementById(elementId);
    if (element) {
      const left = parseInt(element.style.left || 0, 10) - offset;
    
      return {
        ...element.style, // Preserve existing styles
        left: left + 'px', // Apply the left shift
      };
    }
    return {}; // Return an empty style object if the element is not found
  };
  
  
  
  
  const customVariant2 = (index) => {
    if (rightClicked) {
      return {
        visible: {
          opacity: 1,
          x: (index + 1)* -350, // Apply the desired horizontal shift (negative value to the left)
          transition: { duration: 0.5 },
        },
      };
    } else {
      return {}; // No animation when rightClicked is false
    }
  };
  
  function shiftElementsToCenter(elementId) {
    const firstElement = document.getElementById(elementId);
    const secondElement = document.getElementById("experience-1"); // Replace with the actual ID of your second element
    
    if (firstElement && secondElement) {
      // Get the dimensions of the first element
      const firstElementWidth = firstElement.offsetWidth;
      const firstElementHeight = firstElement.offsetHeight;
      
      // Get the dimensions of the second element
      const secondElementWidth = secondElement.offsetWidth;
      const secondElementHeight = secondElement.offsetHeight;
      
      // Calculate the new left position for both elements to center the second element
      const centerLeft = (window.innerWidth - secondElementWidth) / 2;
      
      // Calculate the new top position for both elements
      const top = (window.innerHeight - firstElementHeight) / 2;
  
      // Set the new position for the first element
      firstElement.style.position = 'absolute';
      firstElement.style.left = -centerLeft - 150 + 'px';
      firstElement.style.top = top + 'px';
  
      // Set the new position for the second element
      secondElement.style.position = 'absolute';
      secondElement.style.left = centerLeft + 'px';
      secondElement.style.top = top + 'px';
    }
  }
  
  // Call the function with the ID of your first element
  shiftElementsToCenter('firstElementId'); // Replace with the actual ID of your first element
  
  


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


  
  


 
  

  return (
    <div className='container'>
      <div className="carousel-container">
        {experiences.map((experience, index) => (
          <motion.div
            key={experience.title}
            initial="hidden"
         //   animate={rightClicked ? 'visible' : 'hidden'}
          
            custom={index}
            id={`experience-${index}`}
            style={  centerElement(`experience-${index}`, index * 350) }
         //   variants={customVariant2(index)}
           
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
