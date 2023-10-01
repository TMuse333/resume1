import React from 'react';
import { motion } from 'framer-motion';

import TMuse from '../images/be-about-it.png'

const About = () => {
  const style = {
    height: '405px',
  };






  



  return (
    <motion.div
    id="about"
      className="about-container"
  
    >
      <motion.div className="title"
     
     >
        <motion.h1>Thomas Musial</motion.h1>
        <motion.h2>Car salesman</motion.h2>
      </motion.div>
      <div className='profile-picture-container'>
      <motion.img
      className='profile-picture'
     
        src={TMuse}
        alt="Profile"
    
      />
      </div>
      <motion.div className="about"
      
       >
        <motion.h1>Career objective</motion.h1>
        <motion.p>
       Thank you for showing further interest in me by clicking on my link.
       I am interested in expanding my overall skillset while getting real world experience
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default About;
