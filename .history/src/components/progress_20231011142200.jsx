import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { progress } from './skillDesc';
import { useSkillContext } from '../context/context';
const Progress = () => {
    
  const photos = progress // Replace with your array of image sources
 

  return (
    <div className='progress-container'>
            {photos.map(photo)}
    </div>
  );
};

export default Progress;
