import React from 'react';
import Experience from './Experience';
import { experiences } from './skillDesc';

const ExperienceCarousel = () => {
  return (
    <div className="carousel-container">
      {experiences.map((experience, index) => (
        <Experience
          key={index} // It's good practice to use a unique key when mapping through an array
          title={experience.title}
          image={experience.image}
          description={experience.description}
        />
      ))}
    </div>
  );
};

export default ExperienceCarousel;
