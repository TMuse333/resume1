import React, { useState } from 'react';
import vegeta from '../images/vegeta-battle.png'
import majinVegeta from '../images/majin-vegeta.png'

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Define the array of images within the component
  const images = [
    vegeta,
    majinVegeta
    // Add more image URLs as needed
  ];

  const style={
    height:'300px'
  }

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="image-gallery">
      <button onClick={prevImage}>Previous</button>
      <img src={images[currentIndex]} alt="Gallery" />
      <button onClick={nextImage}>Next</button>
    </div>
  );
};

export default Gallery;
