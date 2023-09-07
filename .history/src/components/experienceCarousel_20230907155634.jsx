import React, { useState } from 'react';
import Experience from './Experience'; // Import your Experience component

const experiencesData = [
  {
    id: 1,
    title: 'Front-end Developer',
    company: 'ABC Company',
    date: 'June 2020 - Present',
    description:
      'Developed and maintained user interfaces for web applications using React.js. Collaborated with the design team to ensure a seamless user experience.',
    technologies: ['React.js', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 2,
    title: 'real one',
    company: 'reality',
    date: 'my whole life',
    description: 'i have always given it my best and i will continue to do so to reach my max potential!',
    technologies: ['c','react.js','blender','css','javascript']
  }
  // Add more experience objects here...
];

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
      <div className='experience-buttons'></div>
      <button onClick={nextExperience}>Next</button>
      <button onClick={prevExperience}>Previous</button>
    </div>
  );
};

export default ExperienceCarousel;
