import React from 'react';

const Experience = (props) => {
  const { title, image, description,height } = props;

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
              height: '430px',
              width: '200px',
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