import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Experience from './Experience'; // Your Experience card component
import { experiences } from './skillDesc'; // Import your experiences array

const ExperienceCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animationDirection, setAnimationDirection] = useState(null);
  const [rightClicked, setRightClicked] = useState(false)



  


  
  

  return (
    <div className='container'>
    
    <div className="carousel-container">
     

      {experiences.map((experience)=>{
        return(
        <motion.div>
          <Experience
            title={experience.title}
            image={experience.image}
            description={experience.description}
           />
        </motion.div>
        )
      })}

     
    </div>

    <div className='buttons'>

      <button onClick={""}>Previous</button>
      <button onClick={""}>Next</button>
    </div>
    </div>
  );
};

export default ExperienceCarousel;
