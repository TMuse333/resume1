import React from 'react';
import Navbar from './navbar';
import About from './about';
import Skills from './skills';

import ContactForm from './contact';
import Footer from './footer';





import Campaign from './campaign';
import Dal from './dal';

 // Replace with the actual path to your Navbar component

function MainLayout({ children }) {
  return (
   <>
   <Navbar/>
   <About/>
   <Campaign/>
   <Dal/>
   <Skills/>
    <ContactForm/>
    <Footer/>
    </>
 
 
  );
}

export default MainLayout;
