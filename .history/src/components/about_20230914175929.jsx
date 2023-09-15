import React from 'react';
import { motion } from 'framer-motion';
import vegeta from '../images/vegeta-battle.png';

const About = () => {
  const style = {
    height: '400px',
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        type: 'inertia',
        damping: 4, // Adjust the damping and velocity values as needed
        velocity: 2,
        duration: 1,
      },
    },
  };
  

  const imageVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
       
         duration: 1,
          delay: 1.5 },
    },
  };

  const textVariants = {
    hidden: { y: -350 },
    visible: {
      y: 0,
      transition: {
        type: 'spring', 
        duration: 1.2,
        delay: 1,
        bounce: 0.5, // Adjust the bounce value to control the bounce intensity
      },
    },
  };
  

  const aboutTextVariants = {
    hidden: { x: 350 },
    visible: {
      x: 0,
      transition: { duration: 0.8, delay: 1.2,
        type: 'spring', // Change to 'spring' for a bounce effect
        damping: 4, // Adjust the damping and stiffness values as needed
        stiffness: 100,
      
        },
    },
  };

  return (
    <motion.div
      className="about-container"
   //   variants={containerVariants}
    //  initial="hidden"
     // animate="visible"
    >
      <motion.div className="title"
     //  variants={textVariants}
     >
        <motion.h1>Thomas Musial</motion.h1>
        <motion.h2>Web developer, graphic designer.</motion.h2>
      </motion.div>
      <motion.img
      //  style={style}
        src={vegeta}
        alt="Vegeta"
      //  variants={imageVariants}
      />
      <motion.div className="about"
       variants={aboutTextVariants}
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
