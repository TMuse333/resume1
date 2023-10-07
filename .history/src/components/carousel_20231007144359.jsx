import React, { useState } from 'react';
import { experiences } from './skillDesc';
import { motion, AnimatePresence } from 'framer-motion'; // Import motion and AnimatePresence
import Experience from './experience';


const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % experiences.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? experiences.length - 1 : prevIndex - 1
    );
  };

  // Define animation styles as a constant
  const slideAnimation = {
    initial: { opacity: 0, x: -100 }, // Start off-screen to the left
    animate: { opacity: 1, x: 0 }, // Slide in from the left
    exit: { opacity: 0, x: 100 }, // Slide out to the right
    transition: { duration: 0.5, delay: 1.0 }, // Add a 1-second delay
  };
  

  return (
    <div className="exp-carousel">
      <button className="prev-button" onClick={goToPrevSlide}>
        &lt;
      </button>
      <AnimatePresence wait>
        {experiences.map((experience, index) => (
          index === currentIndex && (
            <motion.div
              key={index}
              {...slideAnimation} // Apply animation styles
            >
              <Experience {...experience} />
            </motion.div>
          )
        ))}
      </AnimatePresence>
      <button className="next-button" onClick={goToNextSlide}>
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
