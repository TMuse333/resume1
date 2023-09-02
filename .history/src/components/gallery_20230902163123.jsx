import vegeta from '../images/vegeta-battle.png'
import majinVegeta from '../images/majin-vegeta.png'
import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { motion,useAnimation } from 'framer-motion'
;

const Gallery = () => {
  const images = [
    vegeta,
   ,
    'image3.jpg',
    // Add more image URLs as needed
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const style = {
    height: '300px',
    width: '100%',
    objectFit: 'contain',
  };

  return (
    <div className="gallery-container">
      <div className="image-gallery-container">
        {images.map((image, index) => {
          const distance = Math.abs(index - currentIndex); // Calculate distance from the current image
          const scale = 1 - distance * 0.1; // Scale factor to make images smaller as they move away
          const rotation = (index - currentIndex) * 10; // Rotation angle based on distance

          return (
            <motion.img
              key={index}
              src={image}
              alt="Gallery"
              className="gallery-image"
              style={{
                ...style,
                transform: `scale(${scale}) rotateY(${rotation}deg) translateZ(${distance * 50}px)`,
              }}
            />
          );
        })}
      </div>

      <button onClick={prevImage} className="gallery-button">
        <FaArrowLeft />
      </button>
      <button onClick={nextImage} className="gallery-button">
        <FaArrowRight />
      </button>

      <div className="image-description">
        <p>Being a real one</p>
      </div>
    </div>
  );
};

export default Gallery;
