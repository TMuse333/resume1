import React,{ useState,useRef } from 'react';
import vegeta from '../images/vegeta-battle.png';
import majinVegeta from '../images/majin-vegeta.png'
import kakashi from '../images/kakashi-susanoo.jpg'

const Experience = (props) => {
    const [isHovered, setIsHovered] = useState(false)
  const { title, image, description  } = props;




const handleMouseEnter = () => {
    setIsHovered(true)
    console.log("we have hovering")
}

const handleMouseLeave = () => {
    setIsHovered(false)
}
    
  return (
    <>
    <div className='card-container'>
          <h2>{title}slat</h2>
          <img src={image} 
          style={{height:'300px'}} />
          <p>pls work{description}</p>
    </div>
    </>
  );
};

export default Experience;
