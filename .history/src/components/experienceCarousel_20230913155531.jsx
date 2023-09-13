import React, { useState,useEffect,useLayoutEffect,useRef } from 'react';
import { motion } from 'framer-motion';
import Experience from './Experience'; // Your Experience card component
import { experiences } from './skillDesc'; // Import your experiences array

const ExperienceCarousel = () => {
  
  const [counter, setCounter] = useState(0)
  const elementIds = ['experience-0', 'experience-1', 'experience-2','experience-3','experience-4',]; 
  const [elementPositions,setElementPositions] = useState([])

  const handleNext = () => {
   

  
   shift(elementIds,counter,'right')

   setCounter(counter+1)
  };

  const handlePrev = () => {

    shift(elementIds,counter,'left')

    setCounter(counter+1)
  
   
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


  useLayoutEffect(() => {
    const positions = [];
    experiences.forEach((_, index) => {
      const element = document.getElementById(`experience-${index}`);
      if (element) {
        const rect = element.getBoundingClientRect();
    
        const positionRelativeToWindow = rect.left + window.scrollX;
        positions.push(positionRelativeToWindow);
      }
    });
    setElementPositions(positions);
  
    
  }, []);



  function shift(elementIds,counter,direction){
    const elements = elementIds.map((elementId) => document.getElementById(elementId));

    console.log(elements)

    const distance = (350 * counter) + 350
    console.log(distance)


    



    for(let i=0; i <elementIds.length; i++){

      if(direction === "right"){
        elements[i].style.transform = `translateX(-${distance}px)`
      }

      else{
        elements[i].style.transform = `translateX(${350}px)`
      }

     
    }
  }

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
    </div>
  );
};

export default ExperienceCarousel;