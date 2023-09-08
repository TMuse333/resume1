import React, { useState } from 'react';

const Experience = (props) => {
  const { title, image, description } = props;

  const [translateX, setTranslateX] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  const handleScroll = (e) => {
    const deltaX = e.deltaX; // Get horizontal scroll amount
    const maxTranslateX = window.innerWidth - 350; // Adjust this value if needed
    const minTranslateX = -(window.innerWidth - 215); // 215 is the width of the image
    let newTranslateX = translateX - deltaX;

    // Ensure translateX stays within the bounds
    if (newTranslateX > maxTranslateX) {
      newTranslateX = maxTranslateX;
    } else if (newTranslateX < minTranslateX) {
      newTranslateX = minTranslateX;
    }

    setTranslateX(newTranslateX); // Update translateX
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
      //  onMouseUp={handleScrollEnd} // Detect scroll end when the mouse button is released
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
        <p
         style={{
          transform: `translateX(${translateX}px)`,
        }}>{description}</p>
      </div>
    </>
  );
};

export default Experience;
