import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { skills } from './skillDesc';
import { services } from './skillDesc';
import { useSkillContext } from '../context/context';

const Skills = () => {
  const [skillsInView, setSkillsInView] = useState(Array(skills.length).fill(false));
  const { selectedSkillIndex, setSelectedSkillIndex } = useSkillContext();
  const [isHovered, setIsHovered] = useState(-1)
  const [isSkillDescriptionVisible, setIsSkillDescriptionVisible] = useState(Array(skills.length).fill(false));

  const handleSkillClick = (index) => {
    setSelectedSkillIndex(index);
    setIsSkillDescriptionVisible((prev) => {
      const newIsSkillDescriptionVisible = [...prev];
      newIsSkillDescriptionVisible[index] = !prev[index];
      return newIsSkillDescriptionVisible;
    });
  };

  

  const handleHover = () => {
        setIsHovered(index)
  }




  const staggerVariants = {
    visible: (index) => ({
      opacity: 1,
      x: 0, // Always start from the center
      transition: {
        duration:  + 0.5,
      },
    }),
    hidden: (index) => ({ 
      opacity: 0,
      x: index % 2 === 0 ? -100 : 100, // Alternate between left and right
    }),
  };

  const skillStyles = (index) => ({
    boxShadow: isHovered === index ? '0 0 100px rgba(10, 128, 0, 1)' : null,
    backgroundColor: isHovered === index ? 'rgba(144, 238, 144, 1)' : 'transparent',
  
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
  }, []); // No dependencies here
 

  //displaying the boxes where they can disappear
  /*useEffect(() => {
    const handleScroll = () => {
      skills.forEach((skill, index) => {
        const skillsSection = document.getElementById(`skill-${index}`);
        if (skillsSection) {
          const { top, bottom } = skillsSection.getBoundingClientRect();

          const baseThreshold = 100;
          const threshold = baseThreshold + (index * 50);

          // Check if the skills section is in the viewport with the calculated threshold
          const isInView = top < window.innerHeight - threshold && bottom >= threshold;

          // Update the skillsInView array with the new in-view state
          setSkillsInView((prevSkillsInView) => {
            const newSkillsInView = [...prevSkillsInView];
            newSkillsInView[index] = isInView;
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
    }
},[])*/




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
            
           
          >
            <div className="skill-name">
              {skill.name}
              
              <p>

               <button
                onClick={() => handleSkillClick(index)}
                style={skillStyles(index)}
                onMouseEnter={()=>setIsHovered(index)}
                onMouseLeave={()=>setIsHovered(-1)}>
                   {selectedSkillIndex }
               </button>
               
              </p>
            </div>
            {isSkillDescriptionVisible[index] && (
              <div className="skill-description">{skill.description}</div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
