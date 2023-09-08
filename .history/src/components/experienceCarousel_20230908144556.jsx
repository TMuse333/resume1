

const experiences = [
  {
    id: 1,
    title: 'Front-end Developer',
    company: 'ABC Company',
    date: 'June 2020 - Present',
    description:
      'Developed and maintained user interfaces like a real one',
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

import React, { useState, useEffect,useRef } from 'react';
import Experience from './Experience';



const ExperienceCarousel = () => {
 const [currentIndex,setCurrentIndex] = useState(0)
 const [isHovered, setIsHovered] = useState(false)
 const sliderRef = useRef(null)
  const nextExperience = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % experiencesData.length);
  };

  const prevExperience = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? experiencesData.length - 1 : prevIndex - 1
    );
  };

  const handleMouseEnter = () => {
    setIsHovered(true)
    console.log("hover")
  }

  return (
    <div
      className="experience-carousel"
     
    >
      
      <div className='experience-card'>
      {/* <Experience
        title={experiencesData[currentIndex].title}
        company={experiencesData[currentIndex].company}
        date={experiencesData[currentIndex].date}
        description={experiencesData[currentIndex].description}
        technologies={experiencesData[currentIndex].technologies}
        
      /> */}
      </div>
      <div className='experience-buttons'>
       
      </div>
    </div>
  );
};

export default ExperienceCarousel;
