import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Experience from './Experience';
import { experiences } from './skillDesc';

const ExperienceCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for next, -1 for prev

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prevIndex) => (prevIndex + 1) % experiences.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? experiences.length - 1 : prevIndex - 1
    );
  };



  const centerElement = () => {
    const containerStyle = {
      position: 'absolute',
      top: '50%',
      left:'50%'
      transform: 'translateY(-50%)',
    };
  
    return containerStyle;
  };

  return (
    <div className="carousel-container"  
    >
     
        <motion.div
          key={`experience-${0}`}
          style={centerElement()}
        >
          <Experience
            title={experiences[0].title}
            image={experiences[0].image}
            description={experiences[0].description}
            
          />
        </motion.div>

        {/* <motion.div
          key={`experience-${1}`}
         
        >
          <Experience
            title={experiences[1].title}
            image={experiences[1].image}
            description={experiences[1].description}
            
          />
        </motion.div> */}
 
      <div className="buttons">
        <button onClick={handlePrev}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default ExperienceCarousel;
