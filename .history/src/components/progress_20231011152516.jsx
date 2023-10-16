import React, { useState, useEffect } from 'react';
import { progress } from './skillDesc'; // Import your progress data
import { useSkillContext } from '../context/context'; // Import your context

const Progress = () => {
  const { handleSelectSkill } = useSkillContext();
  const photos = progress.images; // Replace with your array of image sources
  const [centeredImageIndex, setCenteredImageIndex] = useState(null);

  useEffect(() => {
    // Calculate the center of the screen
    const screenCenter = window.innerWidth / 2;

    // Listen for scroll events
    const handleScroll = () => {
      const imageElements = document.querySelectorAll('.progress-images img');

      // Loop through image elements to find the one in the center
      imageElements.forEach((image, index) => {
        const imageCenter = image.offsetLeft + image.width / 2;

        // Check if the image is in the center of the screen
        if (imageCenter >= screenCenter) {
          setCenteredImageIndex(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='progress-container'>
      <div className='progress-images'>
        {photos.map((image, index) => (
          <img
            key={index}
            src={image}
            style={{
              height: '300px',
              width: '180px',
              marginRight: '3rem',
              transform: index === centeredImageIndex ? 'scale(1.2)' : 'scale(1)',
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Progress;
