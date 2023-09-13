import React, { useState,useEffect,useLayoutEffect,useRef } from 'react';
import { motion } from 'framer-motion';
import Experience from './Experience'; // Your Experience card component
import { experiences } from './skillDesc'; // Import your experiences array

const ExperienceCarousel = () => {
  
  const [counter, setCounter] = useState(0)
  const elementIds = ['experience-0', 'experience-1', 'experience-2','experience-3','experience-4',]; 
  const [elementPositions,setElementPositions] = useState([])

  const handleNext = () => {
   
console.log("counter before right shift",counter)
  
 shift(elementIds,counter,'right')

 if(counter < elementIds.length-1){
  setCounter(counter+1)
 }

  
   console.log("counter after right shift",counter+1)
  };

  const handlePrev = () => {

    console.log("counter before left shift",counter)

     shift(elementIds,counter,'left')
    console.log("counter after left shift",counter-1)
  
   
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






  function shift(elementIds,counter,direction){
    const elements = elementIds.map((elementId) => document.getElementById(elementId));

   

    let distance =  (350 * counter) + 350

    if(distance > 1400){
      distance = 1400
    }


  
   
   // console.log("the whole distance is",distance)


    if (direction === "left"){
     
     
     
      if(counter === 1){
        distance= 0
      }

      if(counter === 2){
        distance= 350
      }

      if(counter === 3){
        distance= 700
      }

      if(counter === 4){
        distance= 1050
      }

      if(counter === 5){
        distance= 1400
      }

      if(counter !== 1){
        setCounter(counter-1)
      }

     

     
    
    }



    for(let i=0; i <elementIds.length; i++){

      elements[i].style.transform = `translateX(-${distance}px)`;
      console.log("total shift is",distance)
     
    }

  }

  return (
    <div className='container'>
      <div className="carousel-container">
        {experiences.map((experience, index) => (
          <motion.div
            key={`experience-${index}`}
           
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
    </div>
  );
};

export default ExperienceCarousel;