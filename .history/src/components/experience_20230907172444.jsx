import React,{ useState } from 'react';


const Experience = (props) => {
  const { title, company, date, description, technologies } = props;
    const {isHovered, setIsHovered} = useState(true)

    const glowStyle = {
        animation: isHovered ? 'glow 2s linear infinite' : 'none', // Corrected the animation property
      };

    
  return (
    <div className="experience">
      <div className="experience-content">
        <h3 >{title}</h3>
        <div className='details'
        <p className="company">{company}</p>
        <p className="date">{date}</p>
        <p className="experience-description">{description}</p>
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
