import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

import TMuse from '../images/be-about-it.png';
import suit from '../images/thomas-full-body-1.jpg';

const About = () => {
  const [animateP, setAnimateP] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) { // Adjust the scroll threshold as needed
        setAnimateP(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.div className="about-container">
      <motion.div className="title">
        <motion.h1>Thomas Musial</motion.h1>
        <motion.h2>Salesman</motion.h2>
      </motion.div>

      <motion.img
        className="profile-picture"
        src={suit}
        alt="Profile"
      />

      <motion.div
        className="about"
        animate={animateP ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0, x: -150, transition: { duration: 0.5 } }, // Increase the duration to slow down the transition
          visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }, // Increase the duration to slow down the transition
        }}
      >
        <motion.h1>Need a great salesman to train? Look no further.</motion.h1>
        <motion.p>
          Hello, I'm Thomas Musial, a 20-year-old aspiring salesman with a strong foundation for success. A decade of competitive basketball, rigorous strength training, and two years of computer science at Dalhousie along with a relentless work ethic have prepared me to be an exceptional salesman ready to make you money.
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default About;
