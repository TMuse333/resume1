

const experiences = [
  {
    id: 1,
    title: 'Front-end Developer',
    company: 'ABC Company',
    date: 'June 2020 - Present',
    description:
      'Developed and maintained user interfaces like a real one',
    technologies: ['React.js', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 2,
    title: 'real one',
    company: 'reality',
    date: 'my whole life',
    description: 'i have always given it my best and i will continue to do so to reach my max potential!',
    technologies: ['c','react.js','blender','css','javascript']
  }
  // Add more experience objects here...
];

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Experience from './Experience'; // Assuming you have your Experience component defined in a separate file

const experiences = [
  { id: 1, description: 'Experience 1' },
  { id: 2, description: 'Experience 2' },
  { id: 3, description: 'Experience 3' },
  // Add more experiences as needed
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % experiences.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? experiences.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel">
      <button onClick={handlePrev}>Previous</button>
      <AnimatePresence initial={false} custom={currentIndex}>
        <motion.div
          key={currentIndex}
          custom={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
        >
          <Experience description={experiences[currentIndex].description} />
        </motion.div>
      </AnimatePresence>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Carousel;
