import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Experience from './Experience'; // Your Experience card component
import { experiences } from './skillDesc'; // Import your experiences array

const ExperienceCarousel = () => {

  const handleRightButtonClick = () => {
    setRightButtonClicked(true);
  };
  

  const customVariant = (index) => ({
    hidden: {
      x: `${50 + index * 10}%`, // Calculate initial x position
    },
    visible: {
      x: `${50 + index * 10 + (rightButtonClicked ? 30 : 20)}%`, // Shift by 30% if right button clicked, else shift by 20%
      transition: {
        duration: 0.5,
      },
    },
  });
  
  

  return (
    <div className='container'>
    
    <div className="carousel-container">
     

      {experiences.map((experience, index)=>{
        return(
        <motion.div
        key={experience.title}
        initial="hidden"
        animate="visible"
        variants={customVariant(index)}>
          <Experience
            title={experience.title}
            image={experience.image}
            description={experience.description}
           />
        </motion.div>
        )
      })}

     
    </div>

    <div className='buttons'>

      <button onClick={""}>Previous</button>
      <button onClick={handleRightButtonClick}>Next</button>
    </div>
    </div>
  );
};

export default ExperienceCarousel;
