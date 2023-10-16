import React, { useState, useEffect, useRef } from 'react';
import { progress } from './skillDesc';
import { useSkillContext } from '../context/context';


const Progress = () => {
    const [elementPositions, setElementPositions] = useState([]);
const { handleSelectSkill } = useSkillContext(); 
const photos = progress.images // Replace with your array of image sources
const [centeredImageIndex, setCenteredImageIndex] = useState(null);
const containerRef = useRef(null);
const [isElementInMiddle, setIsElementInMiddle] = useState(false);

useEffect(() => {
    const handleScroll = () => {
      photos.forEach((skill, index) => {
        const skillsSection = document.getElementById(`progress-${index}`);
        if (skillsSection) {
          const { top} = skillsSection.getBoundingClientRect();
  
       
          const threshold = 100
  
          // Check if the skills section is in the viewport with the calculated threshold
          const isInView = top < window.innerHeight - threshold  ;
      //    console.log(`Skill ${index} - top: ${top}, window.innerHeight - threshold: ${window.innerHeight - threshold}, isInView: ${isInView}`);
          // Update the skillsInView array with the new in-view state
          setSkillsInView((prevSkillsInView) => {
            const newSkillsInView = [...prevSkillsInView];
            newSkillsInView[index] = isInView || prevSkillsInView[index]; // Update the state to true if already in view
            return newSkillsInView;
          });
        }
      });
    };
  
    // Add an event listener for scroll
    window.addEventListener('scroll', handleScroll);
  
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // No dependencies here



return (
    <div className='progress-container'>
      
      <div className='progress-images'>

      {progress[0].images.map((image, index) => (
        <img 
          key={index}
          src={image}
          id={`progress-image-${index}`}
          style={{ height: '300px',
        width:'180px',
        marginRight:'6rem',
        transform: index === centeredImageIndex ? 'scale(1.2)' : 'scale(1)'
              
    }}
        />
        
      ))}
      </div>
      </div>
   
  );

      }
  

export default Progress;
