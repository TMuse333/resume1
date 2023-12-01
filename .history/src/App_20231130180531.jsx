import { useState } from 'react'
import './App.css'
import {
  BrowserRouter as Router,

  Route, Routes

} from "react-router-dom";


import Navbar from './components/navbar';
import About from './components/about';

import MainLayout from './components/MainLayout';

import { SkillProvider } from './context/context'
import ResumePDF from './components/resume';
import Programmer from './components/programmer';


function App() {
  return (
    <>

    <SkillProvider>
    <Navbar/>
    <About/>
   <Routes>
 
      <Route path='/' element={
      // <Programmer/>
      <MainLayout/>
      }/>
    <Route path='resume' element={<ResumePDF/>}/>
      </Routes>
      </SkillProvider>

   
   </>
  );
}

export default App;
