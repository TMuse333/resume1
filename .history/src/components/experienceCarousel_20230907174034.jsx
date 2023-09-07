

const experiencesData = [
  {
    id: 1,
    title: 'Front-end Developer',
    company: 'ABC Company',
    date: 'June 2020 - Present',
    description:
      'Developed and maintained user interfaces for web applications using React.js. Collaborated with the design team to ensure a seamless user experience.',
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

import React, { useState, useEffect } from 'react';
import Experience from './Experience';

const experiencesData = [
  // Your experience data here...
];

const ExperienceCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startX, setStartX] = useState(0);
  const [endX, setEndX] = useState(0);

  const handleTouchStart = (event) => {
    setStartX(event.touches[0].clientX);
  };

  const handleTouchMove = (event) => {
    setEndX(event.touches[0].clientX);
  };

  const handleMouseDown = (event) => {
    setStartX(event.clientX);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseMove = (event) => {
    setEndX(event.clientX);
  };

  const handleMouseUp = () => {
    window.removeEventListener('mousemove', handleMouseMove);
    window.removeEventListener('mouseup', handleMouseUp);
    handleSwipe();
  };

  const handleSwipe = () => {
    const deltaX = endX - startX;
    const minSwipeDistance = 100; // Minimum distance to trigger a swipe

    if (deltaX > minSwipeDistance) {
      // Swipe right (previous experience)
      prevExperience();
    } else if (deltaX < -minSwipeDistance) {
      // Swipe left (next experience)
      nextExperience();
    }
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft') {
        // Go to the previous experience on left arrow key press
        prevExperience();
      } else if (event.key === 'ArrowRight') {
        // Go to the next experience on right arrow key press
        nextExperience();
      }
    };

    // Add event listener for keyboard input
    window.addEventListener('keydown', handleKeyDown);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const nextExperience = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % experiencesData.length);
  };

  const prevExperience = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? experiencesData.length - 1 : prevIndex - 1
    );
  };

  return (
    <div
      className="experience-carousel"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onMouseDown={handleMouseDown}
    >
      <Experience
       



