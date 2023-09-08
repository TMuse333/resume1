import React, { useState, useRef } from 'react';
import { experiences } from "./skillDesc"; // Assuming you import your experiences array
import Experience from "./experience";

const ExperienceCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);

  const handleScroll = (e) => {
    e.preventDefault();
    const scrollAmount = e.deltaY;

    if (scrollAmount > 0) {
      // Scrolling down
      setCurrentIndex((prevIndex) =>
        prevIndex === experiences.length - 1 ? 0 : prevIndex + 1
      );
    } else if (scrollAmount < 0) {
      // Scrolling up
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? experiences.length - 1 : prevIndex - 1
      );
    }

    const scrollPosition = currentIndex * 100; // Adjust based on your image width
    containerRef.current.scrollTo({
      left: scrollPosition,
      behavior: 'smooth',
    });
  };

  return (
    <div className="carousel-container" onWheel={handleScroll} ref={containerRef}>
      {experiences.map((experience, index) => (
        <div
          key={index}
          className={`carousel-item ${
            index === currentIndex ? 'active' : ''
          }`}
        >
          <Experience
            title={experience.title}
            image={experience.image}
            description={experience.description}
          />
        </div>
      ))}
    </div>
  );
};

export default ExperienceCarousel;
