import React, { useState } from 'react';

const Experience = (props) => {
  const { title, image, description } = props;

  const [isHovered, setIsHovered] = useState(false);
  const [translateX, setTranslateX] = useState(0);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleMouseMove = (e) => {
    if (isHovered) {
      const deltaX = e.movementX;
      setTranslateX((prevTranslateX) => prevTranslateX + deltaX);
    }
  };

  return (
    <>
      <div
        className='card-container'
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        style={{
          transform: `translateX(${translateX}px)`,
          transition: 'transform 0.3s ease', // Add smooth transition
        }}
      >
        <h2>{title}</h2>
        <div className='image-container'>
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
