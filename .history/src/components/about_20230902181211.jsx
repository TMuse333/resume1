import React from 'react';
import vegeta from '../images/vegeta-battle.png'

const About = () => {

  const style={
    height: '300px'
  }
  return (
    <div className='about-container'>
      <div className='title'></div>
      <h2>Thomas Musial</h2>
      <p>Web developer, graphic designer.</p>
     <img style={style}
     src={vegeta}
     />
      <div className='about'>
        <h2>About me</h2>
        <p>
          I am a very disciplined individual who is very focused on trying to be as competent and capable as can be across any human endeavor along with being the best creator I can be. Below are some examples of such endeavor.
        </p>
      </div>
      {/* You can add an image here */}
    </div>
  );
};

export default About;
