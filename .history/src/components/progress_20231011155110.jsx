import React, { useState, useEffect, useRef } from 'react';
import { progress } from './skillDesc';
import { useSkillContext } from '../context/context';


const Progress = () => {
    const [elementPositions, setElementPositions] = useState([]);
const { handleSelectSkill } = useSkillContext(); 
const photos = progress.images // Replace with your array of image sources
const [centeredImageIndex, setCenteredImageIndex] = useState(null);
const containerRef = useRef(null);
const [isElementInMiddle, setIsElementInMiddle] = useState(false);

const img1 = progress.[0].getBoundingClientRect();

console.log(img1.top)


return (
    <div className='progress-container'>
      
      <div className='progress-images'>

      {progress[0].images.map((image, index) => (
        <img 
          key={index}
          src={image}
          style={{ height: '300px',
        width:'180px',
        marginRight:'6rem',
        transform: index === centeredImageIndex ? 'scale(1.2)' : 'scale(1)'
              
    }}
        />
      ))}
      </div>
      </div>
   
  );

      }
  

export default Progress;
