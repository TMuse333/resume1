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
   <>
   <Navbar/>
   <About/>
   <Skills/>
    <Experience/>
    </>
 
 
  );
}

export default MainLayout;
