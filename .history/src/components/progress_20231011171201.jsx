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
    const elementsArray = progress[0].images.map((image, index) => {
      return document.getElementById(`progress-image-${index}`);
    });
  
    // Function to update element positions
    const updateElementPositions = () => {
      const positions = elementsArray.map((element) => {
        const rect = element.getBoundingClientRect();
        return {
          top: rect.top,
          left: rect.left,
          width: rect.width,
          height: rect.height,
        };
      });
      setElementPositions(positions);
      const leftAttributes = positions.map((position) => position.left);
      console.log(leftAttributes);
      const screenCenter = window.innerWidth / 2;
      leftAttributes.forEach((position,index)=>{
        if(pos)
      })
    };
  
    // Initial positions
    updateElementPositions();
  
    // Add a scroll event listener to update element positions
    window.addEventListener('scroll', updateElementPositions);
  
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', updateElementPositions);
    };
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
