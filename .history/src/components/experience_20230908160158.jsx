import React,{ useState,useRef } from 'react';
import vegeta from '../images/vegeta-battle.png';
import majinVegeta from '../images/majin-vegeta.png'
import kakashi from '../images/kakashi-susanoo.jpg'

const Experience = (props) => {

  const { title, image, description  } = props;

    
  return (
    <>
    <div className='card-container'>
          <h2>{title}</h2>
          <img src={image} 
          style={{height:'300px',
          width:'215px'}} />
          <p>{description}</p>
    </div>
    </>
  );
};

export default Experience;
