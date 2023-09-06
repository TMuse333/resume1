import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Screensaver = () => {
  const elementSize = 50; // Size of the screensaver element
  const speed = 10; // Desired speed of the motion
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  const [position, setPosition] = useState({
    x: Math.random() * (screenWidth - elementSize),
    y: Math.random() * (screenHeight - elementSize),
  });

  const randomAngle = Math.random() * 2 * Math.PI; // Random initial angle
  const initialVelocity = {
    x: Math.cos(randomAngle),
    y: Math.sin(randomAngle),
  };

  const [velocity, setVelocity] = useState(initialVelocity);

  useEffect(() => {
    const updatePosition = () => {
      // Normalize the velocity vector to have a magnitude of 'speed'
      const magnitude = Math.sqrt(velocity.x ** 2 + velocity.y ** 2);
      const normalizedVelocity = {
        x: (velocity.x / magnitude) * speed,
        y: (velocity.y / magnitude) * speed,
      };

      const newPosition = {
        x: position.x + normalizedVelocity.x,
        y: position.y + normalizedVelocity.y,
      };

      // Check for collisions with screen edges
      if (
        newPosition.x < 0 ||
        newPosition.x + elementSize > screenWidth ||
        newPosition.y < 0 ||
        newPosition.y + elementSize > screenHeight
      ) {
        // Generate a random initial angle for a new direction
        const randomAngle = Math.random() * 2 * Math.PI;
        const newVelocity = {
          x: Math.cos(randomAngle),
          y: Math.sin(randomAngle),
        };

        setVelocity(newVelocity);
      } else {
        // Update the position if no collision
        setPosition(newPosition);
      }
    };

    const animationInterval = setInterval(updatePosition, 16); // Update position approximately every frame

    return () => {
      clearInterval(animationInterval); // Clean up the interval when the component unmounts
    };
  }, [position, velocity, screenWidth, screenHeight, elementSize, speed]);

  // Calculate gradient colors based on position
  const gradientColors = {
    start: `rgb(${Math.floor((position.x / screenWidth) * 255)}, ${Math.floor((position.y / screenHeight) * 255)}, 255)`,
    end: 'transparent',
  };

  return (
    <motion.div
      className="screensaver"
      style={{
        width: `${elementSize}px`,
        height: `${elementSize}px`,
        backgroundColor: `linear-gradient(to right, black, ${gradientColors.end})`,

        position: 'absolute',
        top: `${position.y}px`,
        left: `${position.x}px`,
      }}
    ></motion.div>
  );
};

export default Screensaver;
