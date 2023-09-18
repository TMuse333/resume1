import React, { useState } from 'react';
import Experience from './Experience';
import { experiences } from './skillDesc';
import { motion, useAnimation } from 'framer-motion';

const ExperienceCarousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Create a motion control to manage animations
  const experienceControl = useAnimation();

  const handleNext = async () => {
    if (!isTransitioning && currentImageIndex < experiences.length - 1) {
      setIsTransitioning(true);
  
      // Slide out to the left with opacity 0 (adjust the duration as needed)
      await experienceControl.start({ x: '130%',  transition: { duration: 0.2 } });
  
      await experienceControl.start({opacity: 0})
      setCurrentImageIndex(currentImageIndex + 1);
  
      // Slide to the left with opacity 0 (adjust the duration as needed)
      await experienceControl.start({ x: '-100%', opacity: 0, transition: { duration: 0.2 } });
  
      // Slide back to the original position with opacity 1 (adjust the duration as needed)
      await experienceControl.start({ x: '0%', opacity: 1, transition: { duration: 0.2 } });
     
  
      setIsTransitioning(false);
    }
  };
  
  


//  // experienceControl.set({ opacity: 0 });

      // setTimeout(() => {
      //   experienceControl.set({ transition: { duration: 0.3 }, opacity: 1 });
      // }, 1000);

      const handleTransition = async (direction) => {
        if (!isTransitioning) {
          setIsTransitioning(true);
      
          let startX, endX;
          let opacity = 0;
      
          if (direction === 'next' && currentImageIndex < experiences.length - 1) {
            startX = '130%';
            endX = '0%';
            opacity = 0;
            setCurrentImageIndex(currentImageIndex + 1);
          } else if (direction === 'prev' && currentImageIndex > 0) {
            startX = '-130%';
            endX = '0%';
            opacity = 0;
            setCurrentImageIndex(currentImageIndex - 1);
          }
      
          // Slide out to the specified direction with opacity 0
          await experienceControl.start({ x: startX, opacity, transition: { duration: 0.2 } });
      
          // Slide back to the original position with opacity 1
          await experienceControl.start({ x: endX, opacity: 1, transition: { duration: 0.2 } });
      
          setIsTransitioning(false);
        }
      };
      
  
      

  return (
    <div className="carousel-container">
      <button onClick={handlePrev} disabled={currentImageIndex === 0 || isTransitioning}>
        Previous
      </button>
      <motion.div animate={experienceControl} className="experience-container">
        <Experience
          title={experiences[currentImageIndex].title}
          image={experiences[currentImageIndex].image}
          description={experiences[currentImageIndex].description}
        />
      </motion.div>
      <button
        onClick={handleNext}
        disabled={currentImageIndex === experiences.length - 1 || isTransitioning}
      >
        Next
      </button>
    </div>
  );
};

export default ExperienceCarousel;