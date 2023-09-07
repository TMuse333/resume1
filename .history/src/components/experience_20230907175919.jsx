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
        <div className='details'>
        <h3 >{title}</h3>
        <p >{company}</p>
        <p >{date}</p>
        </div>
        
        <p className="experience-description">
            {description}</p>
      </div>
      <div className="experience-technologies"
      >
       
      
      </div>
    </div>
  );
};

export default Experience;
