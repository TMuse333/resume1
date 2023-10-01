import React from 'react';
import { motion } from 'framer-motion';

import TMuse from '../images/be-about-it.png'

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
        <motion.h2>alesman</motion.h2>
      </motion.div>
      <div className='profile-picture-container'
      id="about">
      <motion.img
      className='profile-picture'
     
        src={TMuse}
        alt="Profile"
    
      />
      </div>
      <motion.div className="about"
      
       >
        <motion.h1 >Career objective</motion.h1>
        <motion.p>
       Thank you for showing further interest in me by clicking on my link.
       I am interested in expanding my overall skillset while getting real world experience
       and I have determined that sales in a fantastic opportunity to do so.
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default About;
