import React from 'react';
import Navbar from './navbar';
import About from './about';
import Skills from './skills';

import ContactForm from './contact';
import Footer from './footer';
import Carousel from './carousel';



import ExperienceCarousel from './experienceCarousel';
import BulletPointList from './bulletPointList';

 // Replace with the actual path to your Navbar component

function MainLayout({ children }) {
  return (
   <>
   {/* <Navbar/> */}
   {/* <About/> */}
   <Skills/>
   {/* <BulletPointList/> */}
  {/* <Carousel/> */}
    {/* <ExperienceCarousel/> */}
    {/* <ContactForm/> */}
    {/* <Footer/> */}
    </>
 
 
  );
}

export default MainLayout;
