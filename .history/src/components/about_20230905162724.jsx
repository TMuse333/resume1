import React from 'react';
import { motion } from 'framer-motion';
import vegeta from '../images/vegeta-battle.png';

const About = () => {
  const style = {
    height: '300px',
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
          delay: 0.5 },
    },
  };

  const textVariants = {
    hidden: { x: -350 },
    visible: {
      x: 0,
      transition: {
        type: 'spring', // Use the spring type for a bounce effect
        duration: 0.8,
        delay: 1,
        bounce: 0.3, // Adjust the bounce value to control the bounce intensity
      },
    },
  };
  

  const aboutTextVariants = {
    hidden: { x: 350 },
    visible: {
      x: 0,
      transition: { duration: 0.8, delay: 1.2,
        type: 'inertia',
        damping: 4, // Adjust the damping and velocity values as needed
        velocity: 2,
        },
    },
  };

  return (
    <motion.div
      className="about-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="title" variants={textVariants}>
        <motion.h2>Thomas Musial</motion.h2>
        <motion.p>Web developer, graphic designer.</motion.p>
      </motion.div>
      <motion.img
        style={style}
        src={vegeta}
        alt="Vegeta"
        variants={imageVariants}
      />
      <motion.div className="about" variants={aboutTextVariants}>
        <motion.h2>About me</motion.h2>
        <motion.p>
          I am a very disciplined individual who is very focused on trying to
          be as competent and capable as can be across any human endeavor along
          with being the best creator I can be. Below are some examples of such
          endeavor.
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default About;
