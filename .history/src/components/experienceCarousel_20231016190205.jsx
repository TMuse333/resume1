import React, { useState } from 'react';
import Experience from './experience';
import { experiences } from './skillDesc';
import { motion, useAnimation } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import {DefaultPlayer as video} from 'react-html5video'
import { Link } from 'react-router-dom';
import { useSkillContext } from '../context/context';

const ExperienceCarousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const { selectedSkillIndex, setSelectedSkillIndex } = useSkillContext();

  // Create a motion control to manage animations
  const experienceControl = useAnimation();

  const handleNext = async () => {

    if (!isTransitioning && currentImageIndex < experiences.length - 1) {
      setIsTransitioning(true);
    
      // Slide out to the left with opacity 0 (adjust the duration as needed)
      await experienceControl.start({ x: '90%',  transition: { duration: 0.2 } });
      setCurrentImageIndex(currentImageIndex + 1);
      await experienceControl.start({opacity: 0})
     
  
      // Slide to the left with opacity 0 (adjust the duration as needed)
      await experienceControl.start({ x: '-100%', opacity: 0, transition: { duration: 0.2 } });
  
      // Slide back to the original position with opacity 1 (adjust the duration as needed)
      await experienceControl.start({ x: '0%', opacity: 1, transition: { duration: 0.2 } });
     
  
      setIsTransitioning(false);
    }
  };
  
  

  const handlePrev = async () => {
    if (!isTransitioning && currentImageIndex > 0) {
      setIsTransitioning(true);
  
      // Slide out to the left with opacity 0 (adjust the duration as needed)
      await experienceControl.start({ x: '-95%',  transition: { duration: 0.2 } });
      setCurrentImageIndex(currentImageIndex - 1);
      await experienceControl.start({opacity: 0})
     
  
      // Slide to the left with opacity 0 (adjust the duration as needed)
      await experienceControl.start({ x: '100%', opacity: 0, transition: { duration: 0.2 } });
  
      // Slide back to the original position with opacity 1 (adjust the duration as needed)
      await experienceControl.start({ x: '0%', opacity: 1, transition: { duration: 0.2 } });
     
  
      setIsTransitioning(false);
    }
  };


  const handleCarouselClick = (index) =>{
        setSelectedSkillIndex(index)
        console.log(selectedSkillIndex)
  }


  return (

    <div className='carousel2'
    id="projects">
           <h1>Examples of progress</h1>  
    <div className="carousel-container">
  
           <button onClick={handlePrev} disabled={currentImageIndex === 0 || isTransitioning}
    >
 <FiChevronLeft/>
      </button>
     
      
    
      <motion.div animate={experienceControl} className="experience-container">
        <Experience
          title={experiences[currentImageIndex].title}
          image={experiences[currentImageIndex].image}
          description={experiences[currentImageIndex].description}
          height={experiences[currentImageIndex].height}
          width={experiences[currentImageIndex].width}
          maxWidth={experiences[currentImageIndex].maxWidth}
        
        />
        //{console.log(experiences[currentImageIndex].index)}
        <Link 
        to="/progress"
        onClick={()=>handleCarouselClick(experiences[currentImageIndex].index)}>
          View all progress</Link>
      </motion.div>

      <button 
        onClick={handleNext}
        disabled={currentImageIndex === experiences.length - 1 || isTransitioning}
      >
         <FiChevronRight />
      </button>
     
    
     
      </div>
      </div>
 
  );
};

export default ExperienceCarousel;
