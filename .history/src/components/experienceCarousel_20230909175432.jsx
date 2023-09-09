import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Experience from './Experience'; // Your Experience card component
import { experiences } from './skillDesc'; // Import your experiences array

const ExperienceCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animationDirection, setAnimationDirection] = useState(null);
  const [rightClicked, setRightClicked] = useState(false)

  const handleNext = () => {
    // setActiveIndex((prevIndex) => (prevIndex + 1) % experiences.length);
    setAnimationDirection("rightClick");
    setLeftClicked(true)
  };

  const handlePrev = () => {
    // setActiveIndex((prevIndex) =>
    //   prevIndex === 0 ? experiences.length - 1 : prevIndex - 1
    // );
    setAnimationDirection("leftClick");
   
  };

  const leftClick = {
    hidden: {
      x: window.innerWidth / 4,
    },
    visible: {
      x: -window.innerWidth * 1.2,
      transition: {
        duration: 0.5,
      },
    },
  };

  const rightClick = {
    hidden: {
      x: window.innerWidth / 4,
    },
    visible: {
      x: "100%",
      transition: {
        duration: 0.5,
      },
    },
  };

  const leftTemp = {
    hidden: {
      x: -10000,
      transition: {
        duration: 1,
      },
    },
    visible: {
      x: rightClicked ? "48%" : '-1000px' ,
      transition: {
        duration: 0.8,
      },
      // width:'1vw'
    },
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
        <motion.div>
          <Experience
            title={experience}
        </motion.div>
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
