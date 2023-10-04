import React, { useState } from 'react';
import { experiences } from './skillDesc';

const Experience = (props) => {
  const { title, image, description, height, width } = props;

  return (
    <div className="experience">
      <h2>{title}</h2>
      <div className="image-container">
        <img className="experience-image" src={image} alt={title} />
      </div>
      <p>{description}</p>
    </div>
  );
};

const Carousel = ({ experiences }) => {
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
    <div className="carousel">
      <button className="prev-button" onClick={goToPrevSlide}>
        &lt;
      </button>
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
      <button className="next-button" onClick={goToNextSlide}>
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
