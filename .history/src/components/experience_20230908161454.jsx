import React, { useState } from 'react';

const Experience = (props) => {
  const { title, image, description } = props;

  const [isHovered, setIsHovered] = useState(false);
  const [translateX, setTranslateX] = useState(0);
  const [startX, setStartX] = useState(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTranslateX(0); // Reset the translation when mouse leaves
  };

  const handleMouseMove = (e) => {
    if (isHovered) {
      if (startX === null) {
        setStartX(e.clientX);
      } else {
        const deltaX = e.clientX - startX;
        setTranslateX(deltaX);
      }
    }
  };

  const handleMouseUp = () => {
    setStartX(null);
  };

  const handleScroll = (e) => {
    console.log('Scroll action detected'); // Log when scroll occurs
  };

  return (
    <>
      <div
        className='card-container'
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        
        style={{
          transition: 'transform 0.3s ease', // Add smooth transition
        }}
      >
        <h2>{title}</h2>
        <div
          className='image-container'
          style={{
            transform: `translateX(${translateX}px)`,
          }}
        >
          <img
            src={image}
            style={{
              height: '300px',
              width: '215px',
            }}
            alt={title}
          />
        </div>
        <p>{description}</p>
      </div>
    </>
  );
};

export default Experience;
