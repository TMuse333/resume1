import React from 'react';
import Navbar from './navbar';
import About from './about';
import Gallery from './gallery';
import S
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <About />
      <Gallery />
      <Outlet /> {/* This will render the child route's content */}
    </div>
  );
};

export default MainLayout;
