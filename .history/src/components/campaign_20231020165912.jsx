import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

import 'bootstrap/dist/css/bootstrap.css'; // Import Bootstrap CSS
import campaign from '../images/campaign-2021.jpg';
import signs from '../images/campaign-2.jpg';

const Campaign = () => {
  const controls = useAnimation();
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;

    if (element) {
      const handleScroll = () => {
        const { top, bottom } = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (top < windowHeight * 0.75 && bottom > 0) {
          controls.start({ opacity: 1, x: 0, transition: { duration: 0.5 } });
        }
      };

      window.addEventListener('scroll', handleScroll);
      handleScroll();

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [controls]);

  return (
    <div className="container"> {/* Apply Bootstrap container class */}
      <div className="jumbotron">
        <motion.h1>
          Experience
        </motion.h1>
        <h2>Led door-knocking team, securing the largest margin win for Nova Scotia's premier.</h2>
      </div>

      <motion.p
        ref={elementRef} initial={{ opacity: 0 }} animate={controls}
        className='campaign-description'>
        In August of 2021, I was one of the lead campaign managers for Iain Rankin, the premier of Nova Scotia for the 2021 general election. My team and I knocked on every door in the Timberlea Prospect area, and we won our riding by the largest margin of any riding in Nova Scotia!
      </motion.p>

      {/* Example of Bootstrap padding and margin classes */}
      <div className="my-4">
        <img src={campaign} className="img-fluid" alt="Campaign" />
      </div>

      <div className="my-4">
        <div className="alert alert-info">
          Some additional content or components can go here.
        </div>
      </div>
    </div>
  );
}

export default Campaign;
