import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Screensaver = () => {
  const radius = 50; // Radius of the circular path
  const speed = 1; // Speed of the circular motion
  const center = { x: 100, y: 100 }; // Center point of the motion

  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = () => {
      const angle = (speed * Date.now()) / 1000; // Calculate the current angle based on time
      const x = center.x + radius * Math.cos(angle);
      const y = center.y + radius * Math.sin(angle);
      setPosition({ x, y });
    };

    const animationInterval = setInterval(updatePosition, 16); // Update position approximately every frame

    return () => {
      clearInterval(animationInterval); // Clean up the interval when the component unmounts
    };
  }, [radius, speed, center]);

  return (
    <motion.div
      className="screensaver"
      style={{
        width: '50px',
        height: '50px',
        backgroundColor: '#007BFF',
        position: 'absolute',
        top: position.y + 'px',
        left: position.x + 'px',
      }}
    ></motion.div>
  );
};

export default Screensaver;
