import React, { useState } from 'react';

const Experience = (props) => {
  const { title, image, description } = props;

  const [translateX, setTranslateX] = useState(0);

  const handleScroll = (e) => {
    const deltaX = e.deltaX; // Get horizontal scroll amount
    setTranslateX((prevTranslateX) => prevTranslateX - deltaX); // Update translateX
  };

  return (
    <>
      <div
       
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
