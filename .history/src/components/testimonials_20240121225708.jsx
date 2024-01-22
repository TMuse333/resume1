import React, { useState,useRef,useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import ReactPlayer from 'react-player';

import '../styles/testimonials.css';
import 'bootstrap/dist/css/bootstrap.css';
import { por } from '../componentData/data';


const Testimonials = () => {
  const videos = homepageVideos.map((src, index) => ({
    id: index + 1,
    src: src
  }));





  const [isMobile, setIsMobile] = useState(true);

  // useEffect to update the state based on screen width
  useEffect(() => {
    const handleResize = () => {
      // Check the screen width and update the state
      setIsMobile(window.innerWidth < 600);
    };

    // Initial check on component mount
    handleResize();

    // Attach the event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup function to remove the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); 

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleSlide = (index) => {
   

    setCurrentIndex(index);
    setIsPlaying(true);


    
  };

  const [isAnimated, setIsAnimated] = useState(false)

  const contentRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const contentElement = contentRef.current;

      // Check if the element is in the viewport
      const elementTop = contentElement.getBoundingClientRect().top;
      const elementBottom = contentElement.getBoundingClientRect().bottom;

      // You can adjust the offset based on your specific needs
      const offset = 300;

      if (elementTop < window.innerHeight - offset && elementBottom > offset) {
        // console.log(`Element with ID ${} is in the viewport!`);
        setIsAnimated(true)
        console.log('in range!!')
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, ['testimonial']);


  
const style = {
  width:'80vw',
  backgroundColor:
  '#100000',
  height: isMobile ?'45%' : '17%',

  position:'absolute',
  left: isAnimated ? '100%': '10%',
  transition:'width 1.7s ease-in, left 2s ease-in',

  
  
}


const carouselStyle = {
  opacity: isAnimated ? 1 : 0,
  transition: 'opacity 0.3s ease-in',
  transitionDelay: isAnimated ? '2.5s' : '0s', // Add a 2.5s delay when isAnimated is true
  // marginLeft:'auto',
  // marginRight:'auto'
};



  return (
    <div className='testimonial-container'
    id='testimonial'
    ref={contentRef}>

     

  <div

   className='testimonial-intro'>
    <h1
     className='testimonial-name'
     
     >
      Testimonials
    </h1>


    <div className='blocker'
    style={style}>

    </div>
    <p className='description-text'>
    Don't just take our word for it. Listen to what our valued clients have to say about their experience with Sainey Media. Their stories are a testament to the impact we've made in helping businesses thrive in the digital world.

    </p>



  
  </div>






  <Carousel 
      style={carouselStyle}
      interval={null} 
      activeIndex={currentIndex}
      onSelect={(index, e) => {
        e.preventDefault();
        handleSlide(index);
      }}
      wrap={true}
    >
      {videos.map((video, index) => (
        <Carousel.Item key={video.id}>
          {currentIndex === index && (
            <ReactPlayer
              url={video.src}
              playing={true}  // You can use state to control playback if needed
              controls={true}
              width="100%"     // Adjust the width as needed
              height={isMobile ? '25rem' : '30rem'}    // Adjust the height as needed
            />
          )}
        </Carousel.Item>
      ))}
    </Carousel>


      </div>
      

  );
};

export default Testimonials;