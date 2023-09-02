import vegeta from '../images/vegeta-battle.png'
import majinVegeta from '../images/majin-vegeta.png'
import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { motion,useAnimation } from 'framer-motion'

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Define the array of images within the component
  const images = [vegeta, majinVegeta];

  const imgAnimation = useAnimation();

  const imgAnimationProps = {
    x: 150, 
    scale: [1, 0], 
    transition: { duration: 0.45 },
    rotateY: 180,
    y: -50
   
  };

  const reverseAnimationProps = {
    x: 0,
    scale: [0, 1], // Revert back to the original scale
    transition: { duration: 0.5 },
    rotateY: 0,
    y:0 // Revert back to the original rotation
  };
  

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    imgAnimation.start(reverseAnimationProps);
  };



  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));

    imgAnimation.start(imgAnimationProps)

  };

  const style = {
    height: '300px',
    width: '100%', // Set the width to 100% to display one image at a time
    objectFit: 'contain', 
    backfaceVisibility: 'visible'// Ensure the image fits within the container
  };

  return (
    <div className='gallery-container'>
      <div className="image-gallery-container">
        <motion.img
          animate={imgAnimation}
          src={vegeta}
          alt="Gallery"
          className="gallery-image"
          style={style}
         
        />
      </div>

      <button onClick={prevImage} className="gallery-button">
        <FaArrowLeft />
      </button>
      <button onClick={nextImage} className="gallery-button">
        <FaArrowRight />
      </button>

      <div className='image-description'>
        <p>Being a real one</p>
      </div>
    </div>
  );
};

export default Gallery;
