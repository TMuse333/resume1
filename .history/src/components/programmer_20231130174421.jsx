import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

import campaign from '../images/campaign-2021.jpg';
import signs from '../images/campaign-2.jpg';

const Programmer = () => {
  const controls = useAnimation();
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;

    if (element) {
      const handleScroll = () => {
        const { top, bottom } = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (top < windowHeight * 0.75 && bottom > 0) { // Adjust threshold here (0.75 means 75% of the element is in view)
          controls.start({ opacity: 1, x: 0, transition: { duration: 0.5 } }); // Adjust duration here
        }
      };

      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Check initially

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [controls]);

  return (
    <motion.div className="campaign-container" id="campaign">
      <motion.h1 >
        Projects
      </motion.h1>
      <h2>Skillset</h2>

      <motion.p
      ref={elementRef} initial={{ opacity: 0,  }} animate={controls}
      className='campaign-description'>In August of 2021, I was one of the lead campaign managers for Iain Rankin, the premier of Nova Scotia for the 2021 general election. My team and I knocked on every door in the Timberlea Prospect area, and we won our riding by the largest margin of any riding in Nova Scotia!</motion.p>
      <motion.img 
       ref={elementRef} initial={{ opacity: 0,  }} animate={controls}
      src={campaign} className="campaign-picture" />

      <div className='campaign-roles'>
        <h2>My primary roles included</h2>
        <ul>
          <li>Engaging with residents in the Timberlea Prospect area to gain insights into their voting preferences.</li>
          <li>Inquiring about the motivations underlying their opinions and identifying potential areas for improvement within Iain Rankin's campaign and office.</li>
          <li>Tracking voting data on a database and planning our routes to efficiently knock on doors.</li>
          <li>Doing sign waves at popular areas.</li>
        </ul>
      </div>

      <img src={signs} className="campaign-picture" />

      <div className='campaign-learned'>
        <h2>What I learned</h2>
        <ul>
          <li>How to deal with people of all kinds of backgrounds and opinions.</li>
          <li>Dealing with angry residents.</li>
          <li>How to plan effectively in a professional environment.</li>
          <li>How to maintain a genuine and enthusiastic approach when repeatedly asking the same questions to people throughout a full seven-hour workday.</li>
        </ul>
      </div>

      <div className='campaign-ready'>
        <h2>Prepared for Sales</h2>
        Working on this campaign and being on the political scene for the premier of Nova Scotia was a very useful and unique experience. It was a great stepping stone for getting into sales!
      </div>
    </motion.div>
  );
}

export default Programmer;
