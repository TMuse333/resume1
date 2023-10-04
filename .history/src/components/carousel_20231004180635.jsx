import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { experiences } from './skillDesc';
 // Import your Experience component here

const Carousel = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Adjust the autoplay speed as needed
  };

  return (
    <Slider {...settings}>
      {experiences.map((experience, index) => (
        <div key={index}>
          <Experience
            title={experience.title}
            image={experience.image}
            description={experience.description}
          />
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
