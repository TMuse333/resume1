import React from 'react';
import { motion } from 'framer-motion';

const Screensaver = () => {
  const radius = 50; // Radius of the circular path
  const speed = 2; // Speed of the circular motion

  const calculatePosition = (angle) => {
    const x = radius * Math.cos(angle);
    const y = radius * Math.sin(angle);
    return { x, y };
  };

  const keyframes = Array.from({ length: 360 / speed }, (_, index) => {
    const angle = (index * speed * Math.PI) / 180; // Convert degrees to radians
    const { x, y } = calculatePosition(angle);
    return { x, y };
  });

  return (
    <motion.div
      className="screensaver"
      initial={{ x: 0, y: 0, backgroundColor: '#007BFF' }}
      animate={keyframes}
      transition={{ repeat: Infinity, duration: 5 }}
    >quantum physics to count the rizzix</motion.div>
  );
};

export default Screensaver;
