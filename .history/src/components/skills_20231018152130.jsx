import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { attributes } from './skillDesc';

import { services } from './skillDesc';
import { useSkillContext } from '../context/context';

const Skills = () => {
  const [skillsInView, setSkillsInView] = useState(Array(attributes.length).fill(false));
  const { selectedSkillIndex, setSelectedSkillIndex } = useSkillContext();
  const [isHovered, setIsHovered] = useState(-1)
  const [isSkillDescriptionVisible, setIsSkillDescriptionVisible] = useState(Array(attributes.length).fill(false));


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
      x: 0,
       // Always start from the center
      transition: {
        duration:  + 0.5,
      },
    }),
    hidden: (index) => ({ 
      opacity: 0,
      x: -100, // Alternate between left and right
    }),
  };







  return (
    <section className="skills-section">
      <h2 className="section-title">Skills and attributes</h2>
      <div className="skills-container ">
        {attributes.map((skill, index) => (
         <motion.div
         key={index}
         id={`skill-${index}`} 
       
         >
          <p>{skill.name}</p>
          <p>{skill.description}</p>
         </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;