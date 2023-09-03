import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const [inView, setInView] = useState(false);

  const skills = [
    { name: 'Competent in multiple forms of front end development including react, next and angular', level: 'Advanced' },
    { name: 'Can animate models in three.js, along with many being  ', level: 'Expert' },
    { name: 'React.js', level: 'Advanced' },
    { name: 'HTML/CSS', level: 'Advanced' },
    { name: 'UI/UX Design', level: 'Intermediate' },
    { name: 'Responsive Design', level: 'Advanced' },
  ];

  const slideInVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
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
            <div className="skill-name">{skill.name}</div>
           
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
