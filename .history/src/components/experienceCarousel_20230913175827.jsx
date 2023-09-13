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
      await experienceControl.start({ x: '130%' }); // Slide out to the left
      setCurrentImageIndex(currentImageIndex + 1);

      experienceControl.set({ opacity: 0 });

      setTimeout(() => {
        experienceControl.set({ transition: { duration: 0.3 }, opacity: 1 });
      }, 1000);


  
      // Re-enable normal transition
      //experienceControl.set({ transition: { duration: 0.3 } });

      await experienceControl.start({ x: '-100%' }); // Slide in from the right
     setIsTransitioning(false);
    }
  };

  const handlePrev = async () => {
    if (!isTransitioning && currentImageIndex > 0) {
      setIsTransitioning(true);
      await experienceControl.start({ x: '-100%' }); // Slide out to the right
      setCurrentImageIndex(currentImageIndex - 1);
      await experienceControl.start({ x: '0%' }); // Slide in from the left
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
