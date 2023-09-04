import React from 'react';
import Navbar from './components/navbar';
import About from './components/about';
import Gallery from './components/gallery';
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
