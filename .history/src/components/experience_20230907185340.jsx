import React,{ useState } from 'react';
import vegeta from '../images/vegeta-battle.png';

const Experience = (props) => {
    const [hovered, setHovered] = useState(false)
  const { title, company, date, description, technologies } = props;

const style={
    height:'200px',
    width:'300px'
}

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
        <div className='experience-description'>

            <img src={vegeta}
            style={style}/>

        <p >
            {description}</p>
            </div>
      </div>
     
    </div>
  );
};

export default Experience;
