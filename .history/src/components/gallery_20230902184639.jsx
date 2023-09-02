import React, { useState } from 'react';
import vegeta from '../images/vegeta-battle.png'
import majinVegeta from '../images/majin-vegeta.png'
import { motion, AnimatePresence } from 'framer-motion';

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Define the array of images within the component
  const images = [
    vegeta,
    majinVegeta
    // Add more image URLs as needed
  ];

  const style={
    height:'330px',
    width: '200px'
  }

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="image-gallery">
     <div className='image-container'>
     <AnimatePresence mode='wait'>
          <motion.img
            key={currentIndex} // Add a unique key to trigger image change
            src={images[currentIndex]}
            style={style}
            alt="Gallery"
            initial={{ opacity: 0, x: -100 }} // Initial state
            animate={{ opacity: 1, x: 0 }} // Animation state
            exit={{ opacity: 0, x: 100 }} // Exit state
            transition={{ duration: 0.5 }} // Transition duration
          />
        </AnimatePresence>
       <p>Being a real one</p>
       </div>
      
       
      <button onClick={nextImage}>Next</button>
  
    </div>
  );
};

export default Gallery;
