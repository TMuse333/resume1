import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { skills } from './skillDesc';
import { useSkillContext } from '../context/context';

const Skills = () => {
  const [inView, setInView] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState(null);
  const { selectedSkillIndex, setSelectedSkillIndex } = useSkillContext();

  const staggerVariants = {
    visible: (index) => ({
      opacity: 1,
      x: 0, // Always start from the center
      transition: {
        duration: index * 0.2 + 0.5,
      },
    }),
    hidden: (index) => ({ 
      opacity: 0,
      x: index % 2 === 0 ? -100 : 100, // Alternate between left and right
    }),
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
    filter: selectedSkill !== null ? 'blur(5px)' : null,
  };

  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">Skills and attributes</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className={`skill-item ${inView ? 'in-view' : ''}`}
            variants={staggerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={index} // Pass the index as a custom prop
          >
            <div className="skill-name">
              {skill.name}
              <p>
                <Link to="/other-page">view more</Link>
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
