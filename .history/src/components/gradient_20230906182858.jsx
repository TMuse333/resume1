import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const GradientAnimation = () => {
  useEffect(() => {
    const animateGradient = () => {
      // Calculate the gradient position based on time or any other logic
      const gradientPosition = calculateGradientPosition();

      // Update the background property to animate the gradient
      document.documentElement.style.background = `linear-gradient(to right, #F4A460, #FF8C00 ${gradientPosition}%, transparent ${gradientPosition + 10}%)`;
    };

    const interval = setInterval(animateGradient, 1000 / 60); // Update gradient approximately every frame

    return () => {
      clearInterval(interval); // Clean up the interval when the component unmounts
    };
  }, []);

  const calculateGradientPosition = () => {
    // Implement your logic to calculate the gradient position based on time or any other factor
    // For this example, we'll use a simple time-based animation
    const time = Date.now() * 0.001; // Convert milliseconds to seconds
    const position = (time % 10) * 10; // Repeat gradient every 10 seconds, adjust as needed
    return position;
  };

  return (
    <motion.div className="gradient-container">
      {/* Your content here */}
    </motion.div>
  );
};

export default GradientAnimation;
