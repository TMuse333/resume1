import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import game from '../images/quantum-card-game.png';
import video from '../images/quantum-example.mp4';
import git from '../images/quantum-git.png';
import '../styles/programmer.css';

const Programming = () => {
  const [animateList, setAnimateList] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const learningListOffset = document.getElementById('learning-list')?.offsetTop;
      const scrollPosition = window.scrollY + window.innerHeight;

      if (learningListOffset && scrollPosition > learningListOffset + 100) {
        setAnimateList(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="dal-container"
    id='programming-container'>
      <h1 className="section-title">Coding experience</h1>

      <p>
        I have been coding since September 2021, and in that time, I have learned multiple languages. My best language is JavaScript, particularly the React.js framework, where I have built a card game and this website.
      </p>

      <p>
        The objective of my card game is to memorize what's on the back of each card and match it with the card that is displayed at the top of the screen; the card to match switches every turn.
      </p>

      <div className="card-video-container">
        <video className="card-video" controls>
          <source src={video} />
        </video>
      </div>

 <a className='card-link'
 href='https://chic-tulumba-8df43a.netlify.app/'>Click here to play the 
 quantum card game</a>

      <div className="card-game-learning">
        <h2 className='section-title'>What I learned from it</h2>
        <motion.p>
          Creating this card game taught me how to set up image displays using a grid, managing the score and different events throughout the game, as well as managing the many states of the card element which includes:
        </motion.p>

        <motion.ul
          id="learning-list"
          className={`learning-list ${animateList ? 'visible' : 'hidden'}`}
        >
          <motion.li
            initial={{ opacity: 0, x: -20 }}
            animate={animateList ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
          >
            Enlarging the card that is hovered over
          </motion.li>
          <motion.li
            initial={{ opacity: 0, x: -20 }}
            animate={animateList ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
          >
            Making a positive animation for the correct card selection and vice versa
          </motion.li>
          <motion.li
            initial={{ opacity: 0, x: -20 }}
            animate={animateList ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
          >
            Shuffling the cards after every turn
          </motion.li>
          <motion.li
            initial={{ opacity: 0, x: -20 }}
            animate={animateList ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
          >
            Hiding the cards on the result screen
          </motion.li>
        </motion.ul>

        <div className="card-git-container">
          <img src={git} className='card-game-git' alt="Git Logo" />
        </div>

        <a href='https://github.com/TMuse333/card-game'
        className='card-link'>
          You can view the git page to see the process of the project
        </a>
      </div>

      <p>
      "I'm adept in programming, with a focus on Java where I developed a project-tracking tool for art durations. My C coding expertise includes work with binary trees and heaps, emphasizing my skill in data structures. In Python, I've delved into cybersecurity, showcasing versatility in various domains."
      </p>
    </div>
  );
};

export default Programming;
