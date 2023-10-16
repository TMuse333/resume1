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



const elementsArray = progress[0].images.map((image, index) => {
    return document.getElementById(`progress-image-${index}`);
  });
  
  const positionsArray = elementsArray.map((element) => {
    const rect = element.getBoundingClientRect();
    return {
      top: rect.top,
      left: rect.left,
      width: rect.width,
      height: rect.height,
    };
  });

  const handleScroll = () => {
    const screenMiddle = window.innerHeight / 2; // Calculate the middle of the screen vertically
  
    elementsArray.forEach((element, index) => {
      const rect = element.getBoundingClientRect();
      const elementMiddle = rect.top + rect.height / 2;
  
      // Check if the element is in the middle of the screen
      if (Math.abs(elementMiddle - screenMiddle) < rect.height / 2) {
        console.log(`Element ${index} is in the middle of the screen.`);
      }
    });
  };
  
  // Add a scroll event listener
  window.addEventListener('scroll', handleScroll);
  
  // Clean up the event listener when the component unmounts
  useEffect(() => {
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  



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
