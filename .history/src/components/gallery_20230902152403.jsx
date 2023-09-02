import vegeta from '../images/vegeta-battle.png'
import majinVegeta from '../images/majin-vegeta.png'
import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { motion,useAnimation } from 'framer-motion'

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const startCircularMotion = async (animationProps) => {
    setIsAnimating(true);
    await imgAnimation.start(animationProps);
    setIsAnimating(false);
  };

  const numKeyframes = 360; // Number of keyframes for a complete circle
  const radius = 50; // Radius of the circular motion
  
  // Calculate the circular motion keyframes
  const circularMotion = {
    x: Array.from({ length: numKeyframes }, (_, i) => Math.cos((i * 2 * Math.PI) / numKeyframes) * radius),
    y: Array.from({ length: numKeyframes }, (_, i) => Math.sin((i * 2 * Math.PI) / numKeyframes) * radius),
    transition: { duration: 4, repeat: Infinity }, // Adjust duration as needed
  };

  const numKeyframes2 = 360; // Number of keyframes for a complete circle
const xAxisRadius = 100; // Radius of the oval along the x-axis
const yAxisRadius = 50;  // Radius of the oval along the y-axis

// Calculate the oval motion keyframes
const ovalMotion2 = {
    x: Array.from({ length: numKeyframes2 * 1.5 }, (_, i) => {
      const t = (i * 2 * Math.PI) / (numKeyframes2 * 1.5);
      return Math.cos(t) * xAxisRadius;
    }),
    y: Array.from({ length: numKeyframes2 * 1.5 }, (_, i) => {
      const t = (i * 2 * Math.PI) / (numKeyframes2 * 1.5);
      return Math.sin(t) * yAxisRadius;
    }),
    scale: Array.from({ length: numKeyframes2 * 1.5 }, (_, i) => 0.5 + (i / (numKeyframes2 * 1.5)) * 0.5), // Scale up over time
    transition: { duration: 2, repeat: 1 }, // Adjust duration as needed
  };

  const ovalMotion = {
    x: Array.from({ length: numKeyframes2 }, (_, i) => Math.cos((i * 2 * Math.PI) / numKeyframes2) * xAxisRadius),
    y: Array.from({ length: numKeyframes2 }, (_, i) => Math.sin((i * 2 * Math.PI) / numKeyframes2) * yAxisRadius),
    scale: Array.from({ length: numKeyframes2 }, (_, i) => 0.5 + (i / numKeyframes2) * 0.5), // Scale up over time
    transition: { duration: 2, repeat: 1 }, // Adjust duration as needed
  };
  
  
  
  

  const circ2 = {
    x: [40,45,50],
    y: [-5,-10,-15],
    transition: { duration: 1, repeat: Infinity }
  }

  
  const images = [vegeta, majinVegeta];

  const imgAnimation = useAnimation();

  const imgAnimationProps = {
    x: 150, 
    scale: [1, 0.5], 
    transition: { duration: 0.45 },
   
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

  startCircularMotion(ovalMotion)

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
