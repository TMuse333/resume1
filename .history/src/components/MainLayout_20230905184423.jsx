import React from 'react';
import Navbar from './Navbar';
import About from './about';
import Skills from './skills';
 // Replace with the actual path to your Navbar component

function MainLayout({ children }) {
  return (
    <div className='quantum'>
   <Navbar/>
   <About/>
   <Skills/>
    </div>
  );
}

export default MainLayout;
