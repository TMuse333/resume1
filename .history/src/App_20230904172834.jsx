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
   <Routes>
      <Navbar />
      <Route path='/' element={MainLayout}
      <MainLayout/>
      </Routes>

   
   </>
  );
}

export default App;
