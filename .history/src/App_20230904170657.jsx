import { useState } from 'react'
import './App.css'
import {
  BrowserRouter as Router,

  Route, Routes,switch (key) {
    case value:
      
      break;
  
    default:
      break;
  }

} from "react-router-dom";


import Navbar from './components/navbar'
import About from './components/about'
import Gallery from './components/gallery'
import Skills from './components/skills'
import OtherPage from './components/otherPage';
import MainLayout from './components/MainLayout';

function App() {
  return (
    <>
    <Navbar />
    <About />

    <Gallery />
   <Skills/>
   </>
  );
}

export default App;
