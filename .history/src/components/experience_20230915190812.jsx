import React, { useState } from 'react';

const Experience = (props) => {
  const { title, image, description } = props;

  return (
    <>
      <div
        className='card-container'
       
       
      >
        <h2
         >{title}</h2>
        <div
          className='image-container'
         
        >
          
          <img className='e'
            src={image}
            style={{
              height: '8rem',
              width: '9rem',
            }}
            alt={title}
          />
         
        </div>
        <p
     >{description}</p>
      </div>
    </>
  );
};

export default Experience;