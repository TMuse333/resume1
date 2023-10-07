import React, { useState } from 'react';
import { experiences } from './skillDesc';
import Experience from './experience';


const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % experiences.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? experiences.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="ex-carousel">
  
      {experiences.map((experience, index) => (
        <div
          key={index}
          className={
            index === currentIndex ? 'slide active' : 'slide inactive'
          }
        >
          <Experience {...experience} />
        </div>
      ))}
     
    </div>
  );
};

export default Carousel;
