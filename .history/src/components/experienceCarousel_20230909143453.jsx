import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Experience from './Experience'; // Your Experience card component
import { experiences } from './skillDesc'; // Import your experiences array

const ExperienceCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % experiences.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? experiences.length - 1 : prevIndex - 1
    );
  };

  const leftClick = {
      hidden:{
        x:0,
      },
      visible: {
        x: -100,
        transition: {
          duration: 0.5
        }
      }
  }

  return (
    <div className="carousel-container">
      <button onClick={""}>Previous</button>
     
        <motion.div
          key={activeIndex}
          
         
         
        >
          <Experience 
          title={experiences[0].title}
          image={experiences[0].image}
          description={experiences[0].description} />
        </motion.div>
 
      <button onClick={""}>Next</button>
    </div>
  );
  
};

export default ExperienceCarousel;
