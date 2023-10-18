import React from 'react';
import { motion } from 'framer-motion';

const BulletPoint = ({ text }) => {
  return (
    <motion.li
      initial={{ opacity: 0, x: -20 }} // Initial position and opacity
      animate={{ opacity: 1, x: 0 }}  // Animation when visible
    >
      {text}
    </motion.li>
  );
};

export default BulletPoint;
