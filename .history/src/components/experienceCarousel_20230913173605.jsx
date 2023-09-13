import React, { useState } from 'react';
import Experience from './Experience';
import { experiences } from './skillDesc';

const ExperienceCarousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNext = () => {
    if (currentImageIndex < experiences.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  return (
    <div className="carousel-container">
      <button onClick={handlePrev} disabled={currentImageIndex === 0}>
        Previous
      </button>
      <Experience
        title={experiences[currentImageIndex].title}
        image={experiences[currentImageIndex].image}
        description={experiences[currentImageIndex].description}
      />
      <button
        onClick={handleNext}
        disabled={currentImageIndex === experiences.length - 1}
      >
        Next
      </button>
    </div>
  );
};

export default ExperienceCarousel;
