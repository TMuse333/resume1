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
        console.log('Scroll action detected')
      } else {
        const deltaX = e.clientX - startX;
        setTranslateX(deltaX);
        console.log('Scroll action detected')
      }
    }
  };

  const handleMouseUp = () => {
    setStartX(null);
  };

  const handleScroll = (e) => {
    console.log('Scroll action detected'); 
    const deltaX = e.deltaX; // Get horizontal scroll amount
    console.log(`Horizontal scroll amount: ${deltaX}`);
  };

  return (
    <>
      <div
        className='card-container'
    
       
        onWheel={handleScroll}
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
