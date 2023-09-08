import React, { useState } from 'react';

const Experience = (props) => {
  const { title, image, description } = props;


  const [translateX, setTranslateX] = useState(0);
  const [startX, setStartX] = useState(null);

 

 

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
