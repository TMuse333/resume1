import React, { useState,useEffect,useLayoutEffect,useRef } from 'react';
import { motion } from 'framer-motion';
import Experience from './Experience'; // Your Experience card component
import { experiences } from './skillDesc'; // Import your experiences array

const ExperienceCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [shiftAmount, setShiftAmount] = useState(0);
  const [rightClicked, setRightClicked] = useState(false)
  const [elementPositions, setElementPositions] = useState([]);
 
  
  const [counter, setCounter] = useState(0)

const initialElementIds = ['experience-0', 'experience-1', 'experience-2','experience-3','experience-4']
const [elementIds, setElementIds] = useState(initialElementIds);


const shiftArray = (elements) => {



let firstElement = elements[0];
for (let i = 0; i < elements.length - 1; i++) {
  elements[i] = elements[i + 1];
}
elements[elements.length - 1] = firstElement;



return elements

}

  const handleNext = () => {

    setRightClicked(true)

    const shiftedArray = shiftArray(elementIds)

    setElementIds(shiftedArray)

    shiftLeft(elementIds,counter)

    // if(counter == 0){
    //   shiftLeft(elementIds,counter)
    // }
    // else{
    //   const shiftedElementIds = shiftArray(elementIds);
    //   setElementIds(shiftedElementIds);
    //   shiftLeft(elementIds,counter)
    // }

  

    
   setCounter(counter + 1);
  };

  const handlePrev = () => {
  
    setLeftClicked(true) // Decrease shift amount by a fixed value (e.g., 150)
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




  function getElementDimensions(elementIds) {
    const dimensions = [];
  
    for (let i = 0; i < elementIds.length; i++) {
      const elementId = elementIds[i];
      const element = document.getElementById(elementId);
      const rect = element.getBoundingClientRect();
  
      if (element) {
       
       
         dimensions.push(rect);
      }
    }
  
    return dimensions;
  }
  
  // Call the function to get the widths of the elements
   // An array containing the offsetWidth of each element

  
  
  
  
  


 
  
   function shiftLeft(elementIds, counter) {
    const elements = elementIds.map((elementId) => document.getElementById(elementId));
  
    const elementPositions = elements.map((element) => {
      const rect = element.getBoundingClientRect();
      // Calculate the element's position relative to the viewport
      const elementXRelativeToViewport = rect.left;
      // Add window.scrollX to get the position relative to the entire page
      const elementXRelativeToPage = elementXRelativeToViewport + window.scrollX;
      return elementXRelativeToPage;
    });

    const distance = ((elementPositions[1] - elementPositions[0] ) * counter) + elementPositions[1] - elementPositions[0]

  
    // Check if there are at least two elements in the array
    if (elementPositions.length >= 2) {
      // Swap the zero index element with the last element
      const firstPosition = elementPositions[0];
      elementPositions[0] = elementPositions[elementPositions.length - 1];
      elementPositions[elementPositions.length - 1] = firstPosition;
  
      // Apply the new positions to your React components using translateX
      elements.forEach((element, index) => {

        const translateValue = elementPositions[index] - element.getBoundingClientRect().left;
          console.log(translateValue)

        // if(index === 0){
          
        //   element.style.transform = `translateX(${translateValue-50}px)`;
        // }
        // else {
          element.style.transform = `translateX(-${distance-50}px)`;
       // }

       
      });
    }
  
    console.log(elementPositions);
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
          key={`experience-${index}`}
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