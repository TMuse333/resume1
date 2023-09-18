import React, { useState } from 'react';

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

  return (
    <div className="carousel-container">
      <img className={`carousel-image ${slideIndex === 0 ? 'active' : ''}`} src="image1.jpg" alt="Image 1" />
      <img className={`carousel-image ${slideIndex === 1 ? 'active' : ''}`} src="image2.jpg" alt="Image 2" />
      <img className={`carousel-image ${slideIndex === 2 ? 'active' : ''}`} src="image3.jpg" alt="Image 3" />
      {/* Add more image elements as needed */}

      <span className="prev" onClick={prevSlide}>&#10094;</span>
      <span className="next" onClick={nextSlide}>&#10095;</span>
    </div>
  );
};

export default SimpleImageCarousel;