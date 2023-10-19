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
      {/* <div className='profile-picture-container'
      id="about"> */}
      <motion.img
      className='profile-picture'
     
        src={suit}
        alt="Profile"
    
      />
      {/* </div> */}
      <motion.div className="about"
      
       >
        <motion.h1 >Need a great salesman to train? Look no further.</motion.h1>
        <motion.p>
        Hello, I'm Thomas Musial, a 20-year-old aspiring salesman with a strong foundation for success. A decade of competitive basketball, rigorous strength training, and two years of computer science at Dalhousie along with a relentless work ethic have prepared me to be an exceptional salesman ready to make you money
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default About;
