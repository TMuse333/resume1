import React, { useState,useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';



const Navbar = () => {
  const [subMenuVisible, setSubMenuVisible] = useState(false);

  const toggleSubMenu = () => {
    setSubMenuVisible(!subMenuVisible);
  };

  useEffect(() => {
    // Function to update sub-menu visibility when the screen width changes
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setSubMenuVisible(screenWidth >= 415); // Set subMenuVisible to true if screen width is at least 415 pixels
    };

    // Add a resize event listener to update the sub-menu visibility
    window.addEventListener('resize', handleResize);

    // Initial call to set sub-menu visibility based on current screen width
    handleResize();

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const style = {

    opacity: subMenuVisible ? 1 : 0
    ,
   
  };

  return (
    <div className='header-container'>
      <div className='logo'>TMuse</div>
      <div className='list-container'>
        <button onClick={toggleSubMenu} className='nav-button'>
          press me
        </button>
        <ul style={style} className='nav-list'>
          <li>what i do</li>
          <li>projects</li>
         
          <li>skills</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
