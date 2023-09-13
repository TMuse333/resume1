import React, { useState } from 'react';
import Experience from './Experience';
import { experiences } from './skillDesc';
import { motion } from 'framer-motion';

const ExperienceCarousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleNext = () => {
    if (!isTransitioning && currentImageIndex < experiences.length - 1) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImageIndex(currentImageIndex + 1);
        setIsTransitioning(false);
      }, 1000); // Adjust the delay time (in milliseconds) as needed
    }
  };

  const handlePrev = () => {
    if (!isTransitioning && currentImageIndex > 0) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImageIndex(currentImageIndex - 1);
        setIsTransitioning(false);
      }, 1000); // Adjust the delay time (in milliseconds) as needed
    }
  };

  return (
    <div className="carousel-container">
      <button onClick={handlePrev} disabled={currentImageIndex === 0 || isTransitioning}>
        Previous
      </button>
      <Experience
        title={experiences[currentImageIndex].title}
        image={experiences[currentImageIndex].image}
        description={experiences[currentImageIndex].description}
      />
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
