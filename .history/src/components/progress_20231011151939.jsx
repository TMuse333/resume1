import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { progress } from './skillDesc';
import { useSkillContext } from '../context/context';


const Progress = () => {
const { handleSelectSkill } = useSkillContext(); 
const photos = progress.images // Replace with your array of image sources
 

return (
    <div className='progress-container'>
      
      <div className='progress-images'>
        <div>slat</div>
      {progress[0].images.map((image, index) => (
        <img 
          key={index}
          src={image}
          style={{ height: '300px',
        width:'180px',
              
    }}
        />
      ))}
      </div>
      </div>
   
  );

      }
  

export default Progress;
