import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Experience from './Experience'; // Your Experience card component
import { experiences } from './skillDesc'; // Import your experiences array

const ExperienceCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animationDirection, setAnimationDirection] = useState(null);
  const [leftClicked, setLeftClicked] = useState(false)

  const handleNext = () => {
    // setActiveIndex((prevIndex) => (prevIndex + 1) % experiences.length);
    setAnimationDirection("rightClick");
  };

  const handlePrev = () => {
    // setActiveIndex((prevIndex) =>
    //   prevIndex === 0 ? experiences.length - 1 : prevIndex - 1
    // );
    setAnimationDirection("leftClick");
    set
  };

  const leftClick = {
    hidden: {
      x: window.innerWidth / 4,
    },
    visible: {
      x: -window.innerWidth * 0.75,
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
      x: window.innerWidth * 0.75,
      transition: {
        duration: 0.5,
      },
    },
  };

  const leftTemp = {
    hidden: {
      x: -window.innerWidth * 0.45,
      transition: {
        duration: 0.5,
      },
    },
    visible: {
      x: window.innerWidth / 4,
      transition: {
        duration: 0.5,
      },
    },
  };
  

  return (
    <div className='container'>
    
    <div className="carousel-container">
     
{leftClicked && (
   <motion.div
   key={activeIndex}
   initial="hidden"
   // animate="visible"
   variants={leftTemp}
 >
   <Experience
     title={experiences[1].title}
     image={experiences[1].image}
     description={experiences[1].description}
   />
 </motion.div> 

)}

   
       

      <motion.div
        key={activeIndex}
        initial="hidden"
        animate="visible"
        variants={animationDirection === "leftClick" ? leftClick : 
        animationDirection === "rightClick" ? rightClick : null}
      >
        <Experience
          title={experiences[activeIndex].title}
          image={experiences[activeIndex].image}
          description={experiences[activeIndex].description}
        />
      </motion.div>

     
    </div>

    <div className='buttons'>

      <button onClick={handlePrev}>Previous</button>
      <button onClick={handleNext}>Next</button>
    </div>
    </div>
  );
};

export default ExperienceCarousel;
