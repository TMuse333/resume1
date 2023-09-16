// ImageCarousel.js
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles

const ImageCarousel = ({ images }) => {
  return (
    <Carousel>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`Image ${index}`} />
        </div>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
