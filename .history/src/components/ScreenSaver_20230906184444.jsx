import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Screensaver = () => {
  const elementSize = 50; // Size of the screensaver element
  const speed = 1; // Desired speed of the motion
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  const randomAngle = Math.random() * 2 * Math.PI; // Random initial angle
  const initialVelocity = {
    x: Math.cos(randomAngle),
    y: Math.sin(randomAngle),
  };

 

  // useEffect(() => {
  //   const updateGradientPosition = () => {
  //     // Update the gradient position based on time or any other logic
  //     const time = Date.now() * 0.001; // Convert milliseconds to seconds
  //     const positionX = (Math.sin(time * speed) + 1) * 0.5 * screenWidth;
  //     const positionY = (Math.cos(time * speed) + 1) * 0.5 * screenHeight;
  //     setGradientPosition({ x: positionX, y: positionY });
  //   };

  //   const gradientInterval = setInterval(updateGradientPosition, 16); // Update gradient position approximately every frame

  //   return () => {
  //     clearInterval(gradientInterval); // Clean up the interval when the component unmounts
  //   };
  // }, [screenWidth, screenHeight, speed]);

  // Calculate gradient colors based on position
  const gradientColors = {
    start: `rgb(${Math.floor((gradientPosition.x / screenWidth) * 255)}, ${Math.floor((gradientPosition.y / screenHeight) * 255)}, 255)`,
    end: 'transparent',
  };

  return (
    <motion.div
      className="screensaver"
      style={{
        width: '100vw',
        height: '100vh',
        position: 'fixed', // Fixed position to stop the motion of the div
        top: '0',
        left: '0',
        zIndex: '1', // Ensure the div appears above the gradient
      }}
    >
      <div
        style={{
          width: `${elementSize}px`,
          height: `${elementSize}px`,
          backgroundImage: `linear-gradient(to right, ${gradientColors.start}, ${gradientColors.end})`,
          position: 'absolute',
          top: `${gradientPosition.y}px`,
          left: `${gradientPosition.x}px`,
          color: 'white',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        slat
      </div>
    </motion.div>
  );
};

export default Screensaver;
