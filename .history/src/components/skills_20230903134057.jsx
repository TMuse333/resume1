import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    { name: 'Web Development', level: 'Advanced' },
    { name: 'JavaScript', level: 'Expert' },
    { name: 'React.js', level: 'Advanced' },
    { name: 'HTML/CSS', level: 'Advanced' },
    { name: 'UI/UX Design', level: 'Intermediate' },
    { name: 'Responsive Design', level: 'Advanced' },
  ];

  const slideInVariants = {
    // hidden: { opacity: 0, x: -100 },
    // visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="skill-item"
            variants={slideInVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="skill-name">{skill.name}</div>
            <div className="skill-level">{skill.level}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
