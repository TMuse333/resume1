import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { progress } from './skillDesc';
import { useSkillContext } from '../context/context';


const Progress = () => {
const { handleSelectSkill } = useSkillContext(); 
const photos = progress.images // Replace with your array of image sources
const [centeredImageIndex, setCenteredImageIndex] = useState(null);

useEffect(() => {
    // Calculate the center of the screen
    const screenCenter = window.innerWidth / 2;

    // Listen for scroll events
    const handleScroll = () => {
      const imageElements = document.querySelectorAll('.progress-images img');

      // Loop through image elements to find the one closer to the center
      let closestImageIndex = null;
      let closestDistance = Number.MAX_VALUE;

      imageElements.forEach((image, index) => {
        const imageCenter = image.offsetLeft + image.width / 2;
        const distanceToCenter = Math.abs(imageCenter - screenCenter);

        // Check if the image is closer to the center than the previous closest image
        if (distanceToCenter < closestDistance) {
          closestImageIndex = index;
          closestDistance = distanceToCenter;
        }
      });

      setCenteredImageIndex(closestImageIndex);
    };

    window.addEventListener('scroll', handleScroll);

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
