import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link  } from 'react-router-dom';
import { skills } from './skillDesc';
import { useSkillContext } from '../context/context';


const Skills = () => {
  const [inView, setInView] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState(null);
  const { selectedSkillIndex, setSelectedSkillIndex } = useSkillContext();





  const slideInVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const handleSkillClick = (index) => {
    setSelectedSkill(index);
    setSelectedSkillIndex(index);
    
    // Filter out the skills that were clicked
    const notClickedSkills = skills.filter((skill, skillIndex) => skillIndex !== index);
    
    // Log the skills that were not clicked
    notClickedSkills.forEach((notClickedSkill) => {
      console.log(notClickedSkill.name + " was not clicked");
    });
  };

  const handleCloseDescription = () => {
    setSelectedSkill(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      const skillsSection = document.getElementById('skills');
      if (skillsSection) {
        const { top, bottom } = skillsSection.getBoundingClientRect();
        // Check if the skills section is in the viewport
        if (top < window.innerHeight && bottom >= 0) {
          setInView(true);
        } else {
          setInView(false);
        }
      }
    };

   

    // Add an event listener for scroll
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const blurStyle = {
    filter: selectedSkill !== null ?'blur(5px)' : null
  }

  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">Skills and attributes</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <motion.div
          
            key={index}
            className={`skill-item ${inView ? 'in-view' : ''}`}
            variants={slideInVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
             <div className="skill-name" onClick={() => handleSkillClick(index)}>
              {selectedSkill === index ? (
                <div className="description-content">
                  <p>{skill.description}</p>
                  <Link to="/other-page">view more</Link>
                  <button onClick={handleCloseDescription}>Close</button>
                </div>
              ) : (
                skill.name
              )}
            </div>
            
           
          </motion.div>
        ))}
      </div>
     
    </section>
  );
};

export default Skills;
