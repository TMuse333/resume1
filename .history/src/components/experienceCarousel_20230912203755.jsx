import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Experience from './Experience';
import { experiences } from './skillDesc';

const ExperienceCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const itemAnimation = {
    initial: { opacity: 1, x: 10 },
    animate: (index) => ({
      opacity: index === activeIndex ? 1 : 1,
      x: index === activeIndex ? window.innerWidth/4 : 205,
    }),
    exit: { opacity: 1, x: 0 },
    transition: { duration: 0.5 },
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % experiences.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? experiences.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel-container">

<button onClick={handlePrev}>Previous</button>
        <button onClick={handleNext}>Next</button>
 
      <AnimatePresence initial={false}>
        {experiences.map((experience, index) => (
          <motion.div
            key={`experience-${index}`}
            {...itemAnimation}
            animate={itemAnimation.animate(index)}
          >
            <Experience
              title={experience.title}
              image={experience.image}
              description={experience.description}
            />
          </motion.div>
        ))}
      </AnimatePresence>

      
      
    
      
    </div>
  );
};

export default ExperienceCarousel;
