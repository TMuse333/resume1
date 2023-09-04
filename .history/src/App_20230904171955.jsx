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
      <Routes>
        {/* Route for the main page */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<About />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="skills" element={<Skills />} />
        </Route>

        {/* Route for the OtherPage */}
        <Route path="/other-page" element={<OtherPage />} />
      </Routes>
    </Router>
   </>
  );
}

export default App;
