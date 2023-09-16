// ImageCarousel.js
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import vegeta from '../images/vegeta-battle.png';
import majinVegeta from '../images/majin-vegeta.png'
import kakashi from '../images/kakashi-susanoo.jpg' // Import carousel styles

const ImageCarousel = () => {
    const images = [vegeta, majinVegeta, kakashi];
  
    const style={
        
    }
    
  return (
    <Carousel showThumbs={false} dynamicHeight={true} selectedItem={0}>
      {images.map((image, index) => (
        <div key={index}>
          <img
                
          src={image} alt={`Image ${index}`} />
        </div>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
