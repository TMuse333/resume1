import React from 'react';
import Navbar from './Navbar'; // Replace with the actual path to your Navbar component

function MainLayout({ children }) {
  return (
    <div>
      <Navbar /> {/* Display the navbar on every page */}
      <div className="content">
   
    </div>
  );
}

export default MainLayout;
