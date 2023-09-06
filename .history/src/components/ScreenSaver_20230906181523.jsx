import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Screensaver = () => {
  const elementSize = 50; // Size of the screensaver element
  const speed = 2; // Speed of the motion
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  const [position, setPosition] = useState({
    x: Math.random() * (screenWidth - elementSize),
    y: Math.random() * (screenHeight - elementSize),
  });

  const [velocity, setVelocity] = useState({
    x: Math.random() * speed - speed / 2,
    y: Math.random() * speed - speed / 2,
  });

  useEffect(() => {
    const updatePosition = () => {
      const newPosition = {
        x: position.x + velocity.x,
        y: position.y + velocity.y,
      };

      // Check for collisions with screen edges
      if (
        newPosition.x < 0 ||
        newPosition.x + elementSize > screenWidth ||
        newPosition.y < 0 ||
        newPosition.y + elementSize > screenHeight
      ) {
        // Reverse the velocity when hitting an edge
        setVelocity({
          x: -velocity.x,
          y: -velocity.y,
        });
      } else {
        // Update the position if no collision
        setPosition(newPosition);
      }
    };

    const animationInterval = setInterval(updatePosition, 16); // Update position approximately every frame

    return () => {
      clearInterval(animationInterval); // Clean up the interval when the component unmounts
    };
  }, [position, velocity, screenWidth, screenHeight, elementSize]);

  return (
    <motion.div
      className="screensaver"
      style={{
      
        backgroundColor: '#007BFF',
        position: 'absolute',
        top: `${position.y}px`,
        left: `${position.x}px`,
      }}
    >Quantum physics to count the rizzix</motion.div>
  );
};

export default Screensaver;
