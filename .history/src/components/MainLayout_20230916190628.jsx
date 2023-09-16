import React from 'react';
import Navbar from './Navbar';
import About from './about';
import Skills from './skills';
import Screensaver from './ScreenSaver';
import ContactForm from './contact';


import ExperienceCarousel from './experienceCarousel';

 // Replace with the actual path to your Navbar component

function MainLayout({ children }) {
  return (
   <>
   <Navbar/>
   <About/>
    <ExperienceCarousel/>
    <Skills/>
    <ContactForm/>
    </>
 
 
  );
}

export default MainLayout;
