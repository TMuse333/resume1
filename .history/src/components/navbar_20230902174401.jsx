import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Navbar = () => {
  const [subMenuVisible, setSubMenuVisible] = useState(false);

  const toggleSubMenu = () => {
    setSubMenuVisible(!subMenuVisible);
  };

  return (
    <div className='header-container'>
      <ul className='header-list'>
        <div className='logo'>TMuse</div>
       
          <button className='nav-button' onClick={toggleSubMenu}>
            press me
          </button>
          {subMenuVisible && (
            <ul className='nav-list'>
              <li>art</li>
              <li>style</li>
              <li>books to read</li>
              <li>Aboubacar</li>
              <li>Contact</li>
            </ul>
          )}
       
      </ul>
    
    </div>
  );
};

export default Navbar;
