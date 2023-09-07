import React, { useState } from 'react';
import Experience from './Experience'; // Import your Experience component



const ExperienceCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextExperience = () => {
    // Function to go to the next experience in the carousel
    setCurrentIndex((prevIndex) => (prevIndex + 1) % experiencesData.length);
  };

  const prevExperience = () => {
    // Function to go to the previous experience in the carousel
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
