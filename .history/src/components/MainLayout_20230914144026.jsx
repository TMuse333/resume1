import React from 'react';
import Navbar from './Navbar';
import About from './about';
import Skills from './skills';
import Screensaver from './ScreenSaver';

import ExperienceCarousel from './experienceCarousel';

 // Replace with the actual path to your Navbar component

function MainLayout({ children }) {
  return (
   <>
   <Navbar/>
   <About/>
   <Skills/>
    <ExperienceCarousel/>
    </>
 
 background: linear-gradient(to right, #F4A460, #FF8C00);
  );
}

export default MainLayout;
