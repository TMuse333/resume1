import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const [inView, setInView] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState(null);

  const skills = [
    { name: 'Competent in multiple forms of front end development including react, next and angular'},
    { name: 'Can animate models in three.js, along with many being a great artist ' },
    { name: 'Can also work in the backend of projects' },
    { name: 'Very disciplined and productive' },
    { name: 'Always looking to learn more' },
    { name: 'Very coachable and competitive' },
    { name: 'Very structured and calculated approach to learning' }
  ];

  const slideInVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const handleSkillClick = (index) => {
    setSelectedSkill(index);
   
    const notClickedSkills = skills.filter((skill, skillIndex) => skillIndex !== index);
  
    // Log the skills that were not clicked
    notClickedSkills.forEach((notClickedSkill) => {
      console.log(notClickedSkill.name + " was not clicked");

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
            <div
              className="skill-name"
              onClick={() => handleSkillClick(index)}
              
            >
              {skill.name}
            </div>
            {selectedSkill !== null && (
        <motion.div
          className="skill-description"
          variants={slideInVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="description-content">
            <h3>{skills[selectedSkill].name}</h3>
            <p>Description and details about the skill...</p>
            <button onClick={handleCloseDescription}>Close</button>
          </div>
        </motion.div>
      )}
           
          </motion.div>
        ))}
      </div>
     
    </section>
  );
};

export default Skills;
