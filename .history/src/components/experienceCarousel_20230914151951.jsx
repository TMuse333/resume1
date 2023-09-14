import React, { useState } from 'react';
import Experience from './Experience';
import { experiences } from './skillDesc';
import { motion, useAnimation } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';


const ExperienceCarousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Create a motion control to manage animations
  const experienceControl = useAnimation();

  const handleNext = async () => {
    if (!isTransitioning && currentImageIndex < experiences.length - 1) {
      setIsTransitioning(true);
  
      // Slide out to the left with opacity 0 (adjust the duration as needed)
      await experienceControl.start({ x: '150%',  transition: { duration: 0.2 } });
  
      await experienceControl.start({opacity: 0})
      setCurrentImageIndex(currentImageIndex + 1);
  
      // Slide to the left with opacity 0 (adjust the duration as needed)
      await experienceControl.start({ x: '-100%', opacity: 0, transition: { duration: 0.01 } });
  
      // Slide back to the original position with opacity 1 (adjust the duration as needed)
      await experienceControl.start({ x: '0%', opacity: 1, transition: { duration: 0.2 } });
     
  
      setIsTransitioning(false);
    }
  };
  
  

  const handlePrev = async () => {
    if (!isTransitioning && currentImageIndex > 0) {
      setIsTransitioning(true);
  
      // Slide out to the left with opacity 0 (adjust the duration as needed)
      await experienceControl.start({ x: '-170%',  transition: { duration: 0.2 } });
  
      await experienceControl.start({opacity: 0})
      setCurrentImageIndex(currentImageIndex - 1);
  
      // Slide to the left with opacity 0 (adjust the duration as needed)
      await experienceControl.start({ x: '100%', opacity: 0, transition: { duration: 0.01 } });
  
      // Slide back to the original position with opacity 1 (adjust the duration as needed)
      await experienceControl.start({ x: '0%', opacity: 1, transition: { duration: 0.2 } });
     
  
      setIsTransitioning(false);
    }
  };


  return (
    <div>

    <div className="carousel-container">
     
      <button onClick={handlePrev} disabled={currentImageIndex === 0 || isTransitioning}
      className="buttons">
      <FiChevronLeft />
      </button>
      <motion.div animate={experienceControl} className="experience-container">
        <Experience
          title={experiences[currentImageIndex].title}
          image={experiences[currentImageIndex].image}
          description={experiences[currentImageIndex].description}
        />
      </motion.div>
      <button className='buttons'
        onClick={handleNext}
        disabled={currentImageIndex === experiences.length - 1 || isTransitioning}
      >
           <FiChevronRight />
      </button>
    </div>
    </div>
  );
};

export default ExperienceCarousel;
