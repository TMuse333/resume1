import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { progress } from './skillDesc';

const Progress = () => {
  const photos = progress[0].images; // Replace with your array of image sources
 

  return (
    <div className='progress-container'>
            {initialArtwork}
    </div>
  );
};

export default Progress;
