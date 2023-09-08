import React, { useState } from 'react';

const Experience = (props) => {
  const { title, image, description } = props;

  const [translateX, setTranslateX] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  const handleScroll = (e) => {
    const deltaX = e.deltaX; // Get horizontal scroll amount
    setTranslateX((prevTranslateX) => prevTranslateX - deltaX); // Update translateX
    setIsScrolling(true); // Indicate that scrolling is active
  };

  const handleScrollEnd = () => {
    setIsScrolling(false); // Indicate that scrolling has ended
  };

  return (
    <>
      <div
        className='card-container'
        onWheel={handleScroll}
        onMouseUp={handleScrollEnd} // Detect scroll end when the mouse button is released
        style={{
          transform: `translateX(${translateX}px)`,
          transition: isScrolling ? 'transform 0.3s ease' : 'none', // Apply transition only during scrolling
        }}
      >
        <h2
         style={{
          transform: `translateX(${translateX}px)`,
        }}>{title}</h2>
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
