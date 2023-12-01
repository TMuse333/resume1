import React from 'react';
import Navbar from './navbar';
import About from './about';
import Skills from './skills';

import ContactForm from './contact';
import Footer from './footer';





import Campaign from './campaign';
import Dal from './dal';
import Programming from './programmer';


 // Replace with the actual path to your Navbar component

function MainLayout({ children }) {
  return (
   <>
   <Navbar/>
   <About/>
   <Campaign/>
   <Dal/>
   <Skills/>
   <Programming/>
    <ContactForm/>
    <Footer/>
    </>
 
 
  );
}

export default MainLayout;
