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



useEffect(() => {
    // Access elements by their IDs in the useEffect hook
    const elementsArray = progress[0].images.map((image, index) => {
      return document.getElementById(`progress-image-${index}`);
    });

    console.log(elementsArray);

    // Add the elementsArray to state if needed
    setElementPositions(elementsArray);
  }, []); // Empty dependency array to run this effect once on component mount

  



return (
    <div className='progress-container'>
      
      <div className='progress-images'>

      {progress[0].images.map((image, index) => (
        <img 
          key={index}
          src={image}
          id={`progress-image-${index}`}
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
