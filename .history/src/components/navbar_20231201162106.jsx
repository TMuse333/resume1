import React, { useState,useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';



const Navbar = () => {
  const [subMenuVisible, setSubMenuVisible] = useState(false);
  const [isHovered,setIsHovered] = useState(false)

  const toggleSubMenu = () => {
    setSubMenuVisible(!subMenuVisible);
  };

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
      setIsHovered(false)
  }

  

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

    opacity: subMenuVisible ? 1 : 0,
    transition:'opacity 0.3s ease-in-out'
    
   
  };

  const liStyle = {
    transform: isHovered ? 'scale(1.3)' : 'scale(1)',
    transition:'all 0.3s ease-in-out',
    border: isHovered ? '0.3px solid grey' : '0.3px solid red',
    paddingLeft: '5px',
    paddingRight: '5px'
  }

  return (
    <div className='header-container'>
    
      <div className='list-container'>
        <button onClick={toggleSubMenu} className='nav-button'>
          nav
        </button>
        <ul style={style} className='nav-list'>

          
          
          <li onClick={()=>scrollToSection('about')}
          style={{
           
          }}>About me</li>
      

        
          <li 
              onClick={()=>scrollToSection('campaign')}
              style={liStyle}
              onMouseEnter={()=>handleMouseEnter()}
              onMouseLeave={()=>handleMouseLeave()}>
              experience</li>
    

          <li onClick={()=>scrollToSection('skills')}>skills</li>
          
          <li >
            <Link to="/resume"
            style={{color:'white'}}>
            resume </Link></li>

            <li onClick={()=>scrollToSection('programming-container')}> Coding</li>
          
          <li onClick={()=>scrollToSection('contact')}> Contact</li>
       
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
