import React,{ useState,useRef } from 'react';
import vegeta from '../images/vegeta-battle.png';
import majinVegeta from '../images/majin-vegeta.png'
import 

const Experience = (props) => {
    const [isHovered, setIsHovered] = useState(false)
  const { title, company, date, description, technologies,  } = props;




const handleMouseEnter = () => {
    setIsHovered(true)
    console.log("we have hovering")
}

const handleMouseLeave = () => {
    setIsHovered(false)
}
    
  return (
    <>
    </>
  );
};

export default Experience;
