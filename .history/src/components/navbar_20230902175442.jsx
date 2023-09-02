import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Navbar = () => {
  const [subMenuVisible, setSubMenuVisible] = useState(false);

  const toggleSubMenu = () => {
    setSubMenuVisible(!subMenuVisible);
  };

  return (
  <div className='header-container'>
    <div className='logo'>TMuse</div>
    <div className='list-container'>
    <button onClick={toggleSubMenu}>
        press me
    </button>
    <ul>
        <li>slat</li>
    </ul>

    </div>

  </div>
  );
};

export default Navbar;
