import React, { useState, useEffect, useRef } from 'react';
import { progress } from './skillDesc';
import { useSkillContext } from '../context/context';


const Progress = () => {
const { handleSelectSkill } = useSkillContext(); 
const photos = progress.images // Replace with your array of image sources
const [centeredImageIndex, setCenteredImageIndex] = useState(null);

const [isElementInMiddle, setIsElementInMiddle] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const container = containerRef.current;
      if (!container) return;

      const containerRect = container.getBoundingClientRect();
      const containerMiddle = containerRect.left + containerRect.width / 2;
      const screenMiddle = window.innerWidth / 2;

      // Check if the container is in the middle of the screen
      const isMiddle = Math.abs(containerMiddle - screenMiddle) < containerRect.width / 2;
      setIsElementInMiddle(isMiddle);

      if (isMiddle) {
        console.log('Something is in the middle of the screen.');
      }
    };

    window.addEventListener('resize', handleResize);

    // Initial check when the component mounts
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
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
