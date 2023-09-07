import React from 'react';

const Experience = () => {
  return (
    <div className="experience">
      <div className="experience-header">
        <h3>Front-end Developer</h3>
        <p className="company">ABC Company</p>
        <p className="date">June 2020 - Present</p>
      </div>
      <div className="experience-description">
        <p>
          Developed and maintained user interfaces for web applications using React.js.
          Collaborated with the design team to ensure a seamless user experience.
        </p>
      </div>
      <div className="experience-technologies">
        <p>Technologies Used:</p>
        <ul>
          <li>React.js</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;
