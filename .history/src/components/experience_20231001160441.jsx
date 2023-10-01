import React from 'react';

const Experience = (props) => {
  const { title, image, description,height,width } = props;

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
          
          <img className=''
            src={image}
            // style={{
            //   height:'20rem',
            //   width: '200px',
            // }}
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