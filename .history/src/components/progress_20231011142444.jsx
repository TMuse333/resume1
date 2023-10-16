import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { progress } from './skillDesc';
import { useSkillContext } from '../context/context';
const Progress = () => {
const { handleSelectSkill } = useSkillContext(); 
const photos = progress[handleSelectSkill].images // Replace with your array of image sources
 

  return (
    <div className='progress-container'>
            {photos.map((photo)=>(
<div>
            )}
    </div>
  );
};

export default Progress;
