import React from 'react';
import Navbar from './Navbar';
import About from './about';
import Skills from './skills';
import Screensaver from './ScreenSaver';
 // Replace with the actual path to your Navbar component

function MainLayout({ children }) {
  return (
    <div className='quantum-background'>
   <Navbar/>
   <About/>
   <Skills/>
   <Screensaver
    </div>
  );
}

export default MainLayout;
