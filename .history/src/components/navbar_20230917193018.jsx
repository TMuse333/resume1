import React, { useState,useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [subMenuVisible, setSubMenuVisible] = useState(false);

  const toggleSubMenu = () => {
    setSubMenuVisible(!subMenuVisible);
  };

  const scrollToSection = (sectionId) => {

    const element = document.getElementById(sectionId);
    if (element) {
    
      element.scrollIntoView({
        behavior: 'smooth', // Smooth scrolling
        block: 'start',    // Scroll to the top of the element
      });
    }
  }

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
          
          <li onClick={()=>scrollToSection('about')}>what i do</li>
      

        
          <li onClick={()=>scrollToSection('projects')}>projects</li>
    

          <Link to="/">
          <li onClick={()=>scrollToSection('skills')}>skills</li>
          </Link>

          <Link to="/">
          <li onClick={()=>scrollToSection('contact')}> Contact</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;