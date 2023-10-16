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
      const container = containerRef.current;
      if (!container) return;

      const imageElements = container.querySelectorAll('img');
      const positions = [];

      imageElements.forEach((image, index) => {
        const imageRect = image.getBoundingClientRect();
        positions[index] = {
          index,
          top: imageRect.top,
          left: imageRect.left,
        };
      });

      

      setElementPositions(positions);

      // Console log the position of the first element
     
        const firstElementPosition = positions[0];
        console.log('Position of the first element:', firstElementPosition);
      
    };

    window.addEventListener('scroll', handleScroll);

    // Initial check when the component mounts
    handleScroll();

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
