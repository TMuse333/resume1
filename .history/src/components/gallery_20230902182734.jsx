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
      <img src={images[currentIndex]}
      style={style}
       alt="Gallery" />
       <div className='buttons'>
        <button onClick={prevImage}>Previous</button>
      <button onClick={nextImage}>Next</button>
      </div>
    </div>
  );
};

export default Gallery;
