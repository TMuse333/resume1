import React from 'react';

const Experience = (props) => {
  const { title, image, description,height,width,maxWidth } = props;

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
          
          <img className='experience-image'
            src={image}

            alt={title}

            style={{
              height: `%${height}vh`,
              width: `${width}vw`,
            }}
          />
         
        </div>
        <p
     >{description}</p>
      </div>
    </>
  );
};

export default Experience;