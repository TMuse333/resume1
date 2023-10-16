import React, { useState, useEffect, useRef } from 'react';

const Progress = () => {
  const [elementPositions, setElementPositions] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const imageElements = container.querySelectorAll('img');
      const positions = [];

      imageElements.forEach((image, index) => {
        const imageRect = image.getBoundingClientRect();
        positions[index] = {
          index,
          top: imageRect.top,
          left: imageRect.left,
        };
      });

      setElementPositions(positions);
    };

    window.addEventListener('scroll', handleScroll);

    // Initial check when the component mounts
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={containerRef} className='progress-container'>
      <div className='progress-images'>
        {progress[0].images.map((image, index) => (
          <img
            key={index}
            src={image}
            style={{
              height: '300px',
              width: '180px',
              marginRight: '6rem',
              transform: 'scale(1)', // Do not scale here
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Progress;
