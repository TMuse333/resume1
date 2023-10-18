import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';


import { services } from './skillDesc';
import { useSkillContext } from '../context/context';

const Skills = () => {
  const [skillsInView, setSkillsInView] = useState(Array(services.length).fill(false));
  const { selectedSkillIndex, setSelectedSkillIndex } = useSkillContext();
  const [isHovered, setIsHovered] = useState(-1)
  const [isSkillDescriptionVisible, setIsSkillDescriptionVisible] = useState(Array(services.length).fill(false));


  const handleSkillClick = (index) => {
    setSelectedSkillIndex(index);
    console.log(selectedSkillIndex)

    setIsSkillDescriptionVisible((prev) => {
      const newIsSkillDescriptionVisible = [...prev];
      newIsSkillDescriptionVisible[index] = !prev[index];
      
      return newIsSkillDescriptionVisible;
    });
  };

  

  const handleHover = () => {
        setIsHovered(index)
  }


  const style = (index) =>( {
    
    height: selectedSkillIndex === index  && isSkillDescriptionVisible[index]? '375px' : '200px',
    transition: 'height 0.3s ease-in-out',
  })

  



  const staggerVariants = {
    visible: (index) => ({
      opacity: 1,
      x: -90, // Always start from the center
      transition: {
        duration:  + 0.5,
      },
    }),
    hidden: (index) => ({ 
      opacity: 0,
      x: -100, // Alternate between left and right
    }),
  };

  const skillStyles = (index) => ({
    // boxShadow: isHovered === index ? '0 0 100px rgba(10, 128, 0, 1)' : null,
    backgroundColor: isHovered === index ? 'rgba(305, 100, 100, 1)' : 'transparent',
  
    transform: isHovered === index ? 'scale(1.2)' : 'scale(1)',
    padding: '10px',
    borderRadius: '30px'
    
});

  useEffect(() => {
    const handleScroll = () => {
      services.forEach((skill, index) => {
        const skillsSection = document.getElementById(`skill-${index}`);
        if (skillsSection) {
          const { top} = skillsSection.getBoundingClientRect();
  
       
          const threshold = 100
  
          // Check if the skills section is in the viewport with the calculated threshold
          const isInView = top < window.innerHeight - threshold  ;
      //    console.log(`Skill ${index} - top: ${top}, window.innerHeight - threshold: ${window.innerHeight - threshold}, isInView: ${isInView}`);
          // Update the skillsInView array with the new in-view state
          setSkillsInView((prevSkillsInView) => {
            const newSkillsInView = [...prevSkillsInView];
            newSkillsInView[index] = isInView || prevSkillsInView[index]; // Update the state to true if already in view
            return newSkillsInView;
          });
        }
      });
    };
  
    // Add an event listener for scroll
    window.addEventListener('scroll', handleScroll);
  
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 




  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">Skills and attributes</h2>
      <div className="skills-container ">
        {services.map((skill, index) => (
          <motion.div
            key={index}
            id={`skill-${index}`} // Unique ID for each skill
            className={`skill-item ${skillsInView[index] ? 'in-view gradient-border': ''}`}
            variants={staggerVariants}
            initial="hidden"
            animate={skillsInView[index] ? 'visible' : 'hidden'}
            custom={index}
            style={style(index)}
            
           
          >
            <div className="skill-name"
        
            >

              {skill.name}
              </div>
              <p>

                {/* <div className='skill-description'>
                {skill.description}

                </div> */}


               
              {/* {isSkillDescriptionVisible[index] && selectedSkillIndex === index? skill.description : null} */}
              </p>
             
               <button
                onClick={() => handleSkillClick(index)}
                style={skillStyles(index)}
                onMouseEnter={()=>setIsHovered(index)}
                onMouseLeave={()=>setIsHovered(-1)}>
                   {isSkillDescriptionVisible[index] && selectedSkillIndex ===index ? 'close' : 'learn more'}
               </button>
               
         
           
            
            
            
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;