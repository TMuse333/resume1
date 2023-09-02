import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Navbar = () => {
  const [subMenuVisible, setSubMenuVisible] = useState(false);

  const toggleSubMenu = () => {
    setSubMenuVisible(!subMenuVisible);
  };

  const style = {
    display:subMenuVisible ? 'block' : 'none'
  }

  return (
  <div className='header-container'>
    <div className='logo'>TMuse</div>
    <div className='list-container'>
    <button onClick={toggleSubMenu}>
        press me
    </button>
    <ul style={style}
    className="">
        <li>art</li>
        <li>style</li>
        <li>Aboubacar</li>
        <li>projects</li>
        <li>Contact</li>

    </ul>

    </div>

  </div>
  );
};

export default Navbar;
