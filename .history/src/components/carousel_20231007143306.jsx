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
    <div className="exp-carousel">
      <button className="prev-button" onClick={goToPrevSlide}>
        &lt;
      </button>
      {experiences.map((experience, index) => (
        <div
          key={index}
        >
          {index === currentIndex && <Experience {...experience} />}
        </div>
      ))}
      <button className="next-button" onClick={goToNextSlide}>
        &gt;
      </button>
    </div>
  );
  
};

export default Carousel;
