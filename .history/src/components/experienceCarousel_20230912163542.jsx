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


let distance = 0;

  const handleNext = () => {
   let counter = 0;
    setRightClicked(true)
   // shiftElementsToCenter('experience-0') // Increase shift amount by a fixed value (e.g., 150)
   shiftLeft(elementIds,distance)
 distance ++
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
    const dimensions = [];
  
    for (let i = 0; i < elementIds.length; i++) {
      const elementId = elementIds[i];
      const element = document.getElementById(elementId);
      const rect = element.getBoundingClientRect();
  
      if (element) {
         console.log(i + " is good")
       
         dimensions.push(rect);
      }
    }
  
    return dimensions;
  }
  
  // Call the function to get the widths of the elements
   // An array containing the offsetWidth of each element

  
  
  
  
  


 
  
  function shiftLeft(elementIds,counter) {

    const elements = elementIds.map((elementId) => document.getElementById(elementId));

  
    const dimensions = getElementDimensions(elementIds);

    const firstElementLeft = parseInt(elements[0].style.left);

    const secondElementLeft = parseInt(elements[1].style.left);

    const shift = (secondElementLeft - firstElementLeft - 50 * distance) + (secondElementLeft - firstElementLeft - 50);

    


  
    for(let i=0; i <dimensions.length; i++){

    //  elements[i].style.transform = `translateX(-${shift}px)`

     if(i === 0){

      const lastElementLeft = parseInt(elements[elements.length - 1].style.left );
  
      const distance = lastElementLeft - firstElementLeft - 50;

      elements[0].style.transform = `translateX(${distance}px)`

     }

   

     else{
      const prevElement = parseInt(elements[i - 1].style.left );
      const currentElement = parseInt(elements[i].style.left );

      const distance = (currentElement - prevElement - 50 * counter);

      elements[i].style.transform = `translateX(-${distance}px)`

      
     }

   
    }


// Shift each element by -1
const shiftedElements = elements.map((element, index) => {
  const newIndex = (index + 1) % elements.length; // Calculate the new index
  return elements[newIndex]; // Assign the element to the new index
});

// Replace the original elements array with the shiftedElements array
elements.splice(0, elements.length, ...shiftedElements);
        

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