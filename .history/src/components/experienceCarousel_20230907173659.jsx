import React, { useState, useEffect } from 'react';
import Experience from './Experience';

const experiencesData = [
  // Your experience data here...
];

const ExperienceCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft') {
        // Go to the previous experience on left arrow key press
        prevExperience();
      } else if (event.key === 'ArrowRight') {
        // Go to the next experience on right arrow key press
        nextExperience();
      }
    };

    // Add event listener for keyboard input
    window.addEventListener('keydown', handleKeyDown);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const nextExperience = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % experiencesData.length);
  };

  const prevExperience = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? experiencesData.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="experience-carousel">
      <Experience
        title={experiencesData[currentIndex].title}
        company={experiencesData[currentIndex].company}
        date={experiencesData[currentIndex].date}
        description={experiencesData[currentIndex].description}
        technologies={experiencesData[currentIndex].technologies}
      />
      <div className='experience-buttons'>
        <button onClick={prevExperience}>Previous</button>
        <button onClick={nextExperience}>Next</button>
      </div>
    </div>
  );
};

export default ExperienceCarousel;

