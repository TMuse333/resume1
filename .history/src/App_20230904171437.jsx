import { useState } from 'react'
import './App.css'
import {
  BrowserRouter as Router,

  Route, Routes

} from "react-router-dom";


import Navbar from './components/navbar'
import About from './components/about'
import Gallery from './components/gallery'
import Skills from './components/skills'

import MainLayout from './components/MainLayout';
import OtherPage from './components/otherPage';

function App() {
  return (
    <>
    <Router>
    <Navbar />
    <About />
    <Routes>
    <Route path="/other-page" Component={}={OtherPage}/>
    </Routes>
    <Gallery />
   <Skills/>
   </Router>
   </>
  );
}

export default App;
