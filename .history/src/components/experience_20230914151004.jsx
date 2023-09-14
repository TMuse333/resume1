import React, { useState } from 'react';

const Experience = (props) => {
  const { title, image, description } = props;

  const [translateX, setTranslateX] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);


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
          <img
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