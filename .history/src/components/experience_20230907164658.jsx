import React from 'react';

const Experience = (props) => {
  const { title, company, date, description, technologies } = props;

  const glowStyle = {
    animation: isHovered ? 
  }

  return (
    <div className="experience">
      <div className="experience-content">
        <h3>{title}</h3>
        <p className="company">{company}</p>
        <p className="date">{date}</p>
        <p className="description">{description}</p>
      </div>
      <div className="experience-technologies">
        <p>Technologies Used:</p>
        <ul>
          {technologies.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Experience;