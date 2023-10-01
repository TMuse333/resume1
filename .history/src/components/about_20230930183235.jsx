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
        <motion.h2>Web developer, graphic designer.</motion.h2>
      </motion.div>
      <div className='profile-picture-container'>
      <motion.img
      className='profile-picture'
     //  style={style}
        src={TMuse}
        alt="Profile"
      //  variants={imageVariants}
      />
      </div>
      <motion.div className="about"
      // variants={aboutTextVariants}
       >
        <motion.h1>What I do</motion.h1>
        <motion.p>
        Welcome to a world where websites come alive with captivating visuals and seamless interactivity. Our expertise in Blender and C++ allows us to craft immersive web environments, dynamic graphics, and interactive experiences that set your brand apart. Explore the fusion of artistry and technology, and transform your online presence today.
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default About;
