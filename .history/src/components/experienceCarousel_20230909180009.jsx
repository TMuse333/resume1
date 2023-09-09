import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Experience from './Experience'; // Your Experience card component
import { experiences } from './skillDesc'; // Import your experiences array

const ExperienceCarousel = () => {


  const customVariant = (index) => ({
    hidden: {
      x: `${50 + index * 10}%`, // Calculate initial x position
    },
    visible: {
      x: `${50 + index * 10 + 20}%`, // Shift by 20% when visible
      transition: {
        duration: 0.5,
      },
    },
  });
  

  return (
    <div className='container'>
    
    <div className="carousel-container">
     

      {experiences.map((experience)=>{
        return(
        <motion.div>
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
      <button onClick={""}>Next</button>
    </div>
    </div>
  );
};

export default ExperienceCarousel;
