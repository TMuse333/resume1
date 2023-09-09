import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Experience from './Experience'; // Your Experience card component
import { experiences } from './skillDesc'; // Import your experiences array

const ExperienceCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animationDirection, setAnimationDirection] = useState(null);
  const [rightClicked, setRightClicked] = useState(false)

  const handleNext = () => {
    
  };

  const handlePrev = () => {
   
    setAnimationDirection("leftClick");
   
  };

  

  const neutral = {
    hidden: {
      x:"-50%"
    },
    visible:{
      x:"-50%"
    }
  }
  
  
 // 
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

      <button onClick={handlePrev}>Previous</button>
      <button onClick={handleNext}>Next</button>
    </div>
    </div>
  );
};

export default ExperienceCarousel;
