import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { skills } from './skillDesc';
import { useSkillContext } from '../context/context';

const Skills = () => {
  const [inView, setInView] = useState(Array(skills.length).fill(false));
  const [selectedSkill, setSelectedSkill] = useState(null);
  const { selectedSkillIndex, setSelectedSkillIndex } = useSkillContext();
  const skillRefs = useRef(skills.map(() => React.createRef())); // Create an array of refs for each skill item

  const staggerVariants = {
    visible: (index) => ({
      opacity: 1,
      x: 0, // Always start from the center
      transition: {
        duration:  0.5,
      },
    }),
    hidden: (index) => ({ 
      opacity: 0,
      x: index % 2 === 0 ? -100 : 100, // Alternate between left and right
    }),
  };
  
  const handleScroll = (index) => () => {
    if (skillRefs.current[index].current) {
      const { top, bottom } = skillRefs.current[index].current.getBoundingClientRect();

      // Define a base threshold
      const baseThreshold = 100; // Adjust this value as needed

      // Calculate the threshold based on the index
      const threshold = baseThreshold + (index * 50); // Adjust the multiplier as needed

      // Check if the skill section is in the viewport with the calculated threshold
      const isInView = top < window.innerHeight - threshold && bottom >= threshold;

      // Update the inView state for the specific skill item
      setInView((prevInView) => {
        const updatedInView = [...prevInView];
        updatedInView[index] = isInView;
        return updatedInView;
      });
    }
  };

  useEffect(() => {
    // Add event listeners for each skill item
    skills.forEach((skill, index) => {
      window.addEventListener('scroll', handleScroll(index));
    });

    // Clean up the event listeners when the component unmounts
    return () => {
      skills.forEach((_, index) => {
        window.removeEventListener('scroll', handleScroll(index));
      });
    };
  }, [skills]);

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
            className={`skill-item ${inView[index] ? 'in-view' : ''}`}
            variants={staggerVariants}
            initial="hidden"
            animate={inView[index] ? 'visible' : 'hidden'}
            custom={index} // Pass the index as a custom prop
            ref={skillRefs.current[index]} // Assign the ref to the DOM element
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
