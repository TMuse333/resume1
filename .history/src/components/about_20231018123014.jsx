import React from 'react';
import { motion } from 'framer-motion';

import TMuse from '../images/be-about-it.png'
import suit from '../images/thomas-full-body-1.jpg'


const About = () => {
  const style = {
    height: '405px',
  };






  



  return (
    <motion.div
    
      className="about-container"
  
    >
      <motion.div className="title"
     
     >
        <motion.h1>Thomas Musial</motion.h1>
        <motion.h2>Salesman</motion.h2>
      </motion.div>
      <div className='profile-picture-container'
      id="about">
      <motion.img
      className='profile-picture'
     
        src={suit}
        alt="Profile"
    
      />
      </div>
      <motion.div className="about"
      
       >
        <motion.h1 >Need a great salesman to train? Look no further.</motion.h1>
        <motion.p>
      Hello, I am Thomas Musial. I am 20 years old and looking to make you a lot
      of money by becoming a great salesman. I know I will be an absolutley fantastic salesman
      as I played competitve basketball for 
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default About;
