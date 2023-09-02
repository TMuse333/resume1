import React, { useState } from 'react';

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Define the array of images within the component
  const images = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    // Add more image URLs as needed
  ];

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
