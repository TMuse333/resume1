import React, { useState,useEffect,useLayoutEffect,useRef } from 'react';
import { motion } from 'framer-motion';
import Experience from './Experience'; // Your Experience card component
import { experiences } from './skillDesc'; // Import your experiences array

const ExperienceCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [shiftAmount, setShiftAmount] = useState(0);
  const [rightClicked, setRightClicked] = useState(false)
  const [elementPositions, setElementPositions] = useState([]);
 
  const elementIds = ['experience-0', 'experience-1', 'experience-2']; 


  const handleNext = () => {
   
    setRightClicked(true)
   // shiftElementsToCenter('experience-0') // Increase shift amount by a fixed value (e.g., 150)
   shiftLeft(elementIds)
  };

  const handlePrev = () => {
  
    setLeftClicked(true) // Decrease shift amount by a fixed value (e.g., 150)
  };

  const position = (index) => ({
   
  });
  



  
 



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




  function getElementDimensions(elementIds) {
    const elementWidths = [];
  
    for (let i = 0; i < elementIds.length; i++) {
      const elementId = elementIds[i];
      const element = document.getElementById(elementId);
      const xPosition = element.getBoundingClientRect();
  
      if (element) {
         console.log(i + " is good")
        const elementWidth = element.offsetWidth;
        elementWidths.push(elementWidth);
      }
    }
  
    return elementWidths;
  }
  
  // Call the function to get the widths of the elements
   // An array containing the offsetWidth of each element

  
  
  
  
  


 
  
  function shiftLeft(elementIds) {
   // console.log("lets get it?")
    const elements = elementIds.map((elementId) => document.getElementById(elementId));

    console.log(elements)
    
    const widths = getElementWidths(elementIds);
    console.log("the width "+widths);

   

    for(let i=0; i <widths.length; i++){

      elements[i].style.position = 'absolute'

      if(i === 0) {
        elements[i].style.left = elements[elements.length -1].offsetWidth + 'px'
      }
      else {
        elements[i].style.left = elements[i-1].offsetWidth + 'px'
      }
    }


  }
  
  

  
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
  
 
;
  


  useLayoutEffect(() => {
    const positions = [];
    experiences.forEach((_, index) => {
      const element = document.getElementById(`experience-${index}`);
      if (element) {
        const rect = element.getBoundingClientRect();
     //   console.log(rect);
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
            custom={index}
            id={`experience-${index}`}
            style={  centerElement(`experience-${index}`, index * 350) }
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
