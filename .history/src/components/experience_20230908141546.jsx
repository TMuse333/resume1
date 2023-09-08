import React,{ useState,useRef } from 'react';
import vegeta from '../images/vegeta-battle.png';

const Experience = (props) => {
    const [isHovered, setIsHovered] = useState(false)
  const { title, company, date, description, technologies,  } = props;
const scrollAmount = 100
const


const handleMouseEnter = () => {
    setIsHovered(true)
    console.log("we have hovering")
}

const handleMouseLeave = () => {
    setHovered(false)
}
    
  return (
    <div className="experience">
      <div className="experience-content">
        <div className='details'>
      
        </div>
        <div className='experience-description'
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
          <div className='content-container'>

            <h2>Websites</h2>

            <img src={vegeta}
            />

        <p >
            {description}</p>
            </div>
      </div>
      </div>
     
    </div>
  );
};

export default Experience;
