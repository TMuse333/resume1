import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'Web Development', level: 'Advanced' },
    { name: 'JavaScript', level: 'Expert' },
    { name: 'React.js', level: 'Advanced' },
    { name: 'HTML/CSS', level: 'Advanced' },
    { name: 'UI/UX Design', level: 'Intermediate' },
    { name: 'Responsive Design', level: 'Advanced' },
  ];

  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <div className="skill-name">{skill.name}</div>
            <div className="skill-level">{skill.level}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
