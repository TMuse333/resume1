import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [subMenuVisible, setSubMenuVisible] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  const toggleSubMenu = () => {
    setSubMenuVisible(!subMenuVisible);
  };

  const handleMouseEnter = (item) => {
    setHoveredItem(item);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setSubMenuVisible(screenWidth >= 415);
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const style = {
    opacity: subMenuVisible ? 1 : 0,
    transition: 'opacity 0.3s ease-in-out',
  };

  const liStyle = (item) => {
    return {
      transform: hoveredItem === item ? 'scale(1.3)' : 'scale(1)',
      transition: 'all 0.3s ease-in-out',
      backgroundColor: hoveredItem === item ? 'red' : 'black',
      paddingLeft: '5px',
      paddingRight: '5px',
      color: 'white',
      
    };
  };

  return (
    <div className='header-container'>
      <div className='list-container'>
        <button onClick={toggleSubMenu} className='nav-button'>
          nav
        </button>
        <ul style={style} className='nav-list'>
          <li
            onClick={() => scrollToSection('about')}
            style={liStyle('about')}
            onMouseEnter={() => handleMouseEnter('about')}
            onMouseLeave={() => handleMouseLeave()}
          >
            About me
          </li>
          <li
            onClick={() => scrollToSection('campaign')}
            style={liStyle('campaign')}
            onMouseEnter={() => handleMouseEnter('campaign')}
            onMouseLeave={() => handleMouseLeave()}
          >
            Experience
          </li>
          <li
            onClick={() => scrollToSection('skills')}
            style={liStyle('skills')}
            onMouseEnter={() => handleMouseEnter('skills')}
            onMouseLeave={() => handleMouseLeave()}
          >
            Skills
          </li>
          <li>
            <Link
              to='/resume'
              style={liStyle('resume')}
              onMouseEnter={() => handleMouseEnter('resume')}
              onMouseLeave={() => handleMouseLeave()}
            >
              Resume
            </Link>
          </li>
          <li
            onClick={() => scrollToSection('programming-container')}
            style={liStyle('coding')}
            onMouseEnter={() => handleMouseEnter('coding')}
            onMouseLeave={() => handleMouseLeave()}
          >
            Coding
          </li>
          <li
            onClick={() => scrollToSection('contact')}
            style={liStyle('contact')}
            onMouseEnter={() => handleMouseEnter('contact')}
            onMouseLeave={() => handleMouseLeave()}
          >
            Contact
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
