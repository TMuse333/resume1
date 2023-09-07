import React from 'react';
import Navbar from './Navbar';
import About from './about';
import Skills from './skills';
import Screensaver from './ScreenSaver';

import Experience from './experience';
import ExperienceCarousel from './experienceCarousel';
 // Replace with the actual path to your Navbar component

function MainLayout({ children }) {
  return (
    <div className='quantum-background'>
   <Navbar/>
   <About/>
   <Skills/>
    <Experience/>
    </div>
 
 
  );
}

export default MainLayout;
