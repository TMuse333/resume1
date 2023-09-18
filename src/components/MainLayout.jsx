import React from 'react';
import Navbar from './navbar';
import About from './about';
import Skills from './skills';

import ContactForm from './contact';
import Footer from './footer';



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
    <Footer/>
    </>
 
 
  );
}

export default MainLayout;
