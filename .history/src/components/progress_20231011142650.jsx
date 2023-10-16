import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { progress } from './skillDesc';
import { useSkillContext } from '../context/context';


const Progress = () => {
const { handleSelectSkill } = useSkillContext(); 
const photos = progress[handleSelectSkill].images // Replace with your array of image sources
 

return (
    <div className='progress-container'>
      {photos.map((photo, index) => (
        <img 
          key={index}
          src={photo}
          style={{ height: '300px' }}
        />
      ))}
    </div>
  );
  

export default Progress;
