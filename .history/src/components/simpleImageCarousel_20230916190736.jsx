import React, { useState } from 'react';
import vegeta from '../images/vegeta-battle.png';
import majinVegeta from '../images/majin-vegeta.png'
import kakashi from '../images/kakashi-susanoo.jpg'

const SimpleImageCarousel = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const showSlide = (index) => {
    const slides = document.querySelectorAll('.carousel-image');
    if (index < 0) {
      setSlideIndex(slides.length - 1);
    } else if (index >= slides.length) {
      setSlideIndex(0);
    }

    slides.forEach((slide) => {
      slide.classList.remove('active');
    });

    slides[slideIndex].classList.add('active');
  };

  const prevSlide = () => {
    setSlideIndex(slideIndex - 1);
    showSlide(slideIndex);
  };

  const nextSlide = () => {
    setSlideIndex(slideIndex + 1);
    showSlide(slideIndex);
  };

  const style=  {
    height:'300px',
    width:"200px"
}
  return (
    <div className="carousel-container">
      <img className={`carousel-image ${slideIndex === 0 ? 'active' : ''}`} src={vegeta} alt="Image 1"
      style={style} />
      <img 
      style={style}className={`carousel-image ${slideIndex === 1 ? 'active' : ''}`} src={majinVegeta} alt="Image 2" />
      <img className={`carousel-image ${slideIndex === 2 ? 'active' : ''}`} src={kakashi} alt="Image 3" />
      {/* Add more image elements as needed */}

      <span className="prev" onClick={prevSlide}>&#10094;</span>
      <span className="next" onClick={nextSlide}>&#10095;</span>
    </div>
  );
};

export default SimpleImageCarousel;
