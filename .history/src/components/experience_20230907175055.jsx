import React,{ useState } from 'react';


const Experience = (props) => {
  const { title, company, date, description, technologies } = props;

  const {hovered, setHovered} = useState(false)

const hadnle
    
  return (
    <div className="experience">
      <div className="experience-content">
        <h3 >{title}</h3>
        <div className='details'>
        <p >{company}</p>
        <p >{date}</p>
        </div>
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
