import React,{ useState } from 'react';


const Experience = (props) => {
    const [hovered, setHovered] = useState(false)
  const { title, company, date, description, technologies } = props;



const handleMouseEnter = () => {
    setHovered(true)
    console.log("we have hovering")
}

const handleMouseLeave = () => {
    setHovered(false)
}
    
  return (
    <div className="experience">
      <div className="experience-content">
        <h3 >{title}</h3>
        <div className='details'>
        <p >{company}</p>
        <p >{date}</p>
        </div>
        <p className="experience-description">
            {description}</p>
      </div>
      <div className="experience-technologies"
      >
       
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
