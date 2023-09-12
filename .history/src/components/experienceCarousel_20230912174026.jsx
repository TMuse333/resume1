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

let elementIds = ['experience-0', 'experience-1', 'experience-2']

  const handleNext = () => {

    setRightClicked(true)
  elementIds = shiftLeft(elementIds, counter);

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

    console.log("before shifting: ",elements)
    
    const dimensions = getElementDimensions(elementIds);

    const lastElementLeft = parseInt(elements[elements.length - 1].style.left);
    const firstElementLeft = parseInt(elements[0].style.left);
    const distance = lastElementLeft - firstElementLeft - 50;
  
    for(let i=0; i <dimensions.length; i++){


     if(i === 0){
     


      elements[i].style.transform = `translateX(${distance}px)`
      const rect = elements[i].getBoundingClientRect();
    
    // Calculate the X position relative to the screen
    const xPosRelativeToScreen = rect.left + window.scrollX;

    // Log the element, the distance it's moved, and its X position
    console.log(`Moving element ${elements[i].id} by ${distance}px. X position relative to screen: ${xPosRelativeToScreen}px`);
     }

    //  else{
     
    //   const rect = elements[i].getBoundingClientRect();

    //   const prevElement = parseInt(elements[i - 1].style.left);
    //   const currentElement = parseInt(elements[i].style.left);
    //   const distance2 = (distance /2 * counter) + (distance /2);

    //   elements[i].style.transform = `translateX(-${distance}px)`
    
    //   // Calculate the X position relative to the screen
    //   const xPosRelativeToScreen = rect.left + window.scrollX;
  
    //   // Log the element, the distance it's moved, and its X position
    //   console.log(`Moving element ${elements[i].id} by ${distance}px. X position relative to screen: ${xPosRelativeToScreen}px`);

    //  }
   
    }

    const shiftedElements = elements.map((element, index) => {
      const newIndex = (index + 1) % elements.length; // Calculate the new index
      return elements[newIndex]; // Assign the element to the new index
    });
  
    // Replace the original elements array with the shiftedElements array
    elements.splice(0, elements.length, ...shiftedElements);

    console.log("Elements after shifting:", elements);

    const shiftedElementIds = elements.map((element) => element.id);

    return shiftedElementIds
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