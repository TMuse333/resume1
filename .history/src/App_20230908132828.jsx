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
import { SkillProvider } from './context/context'

function App() {
  return (
    <>
    <
    {/* <SkillProvider>
   <Routes>
      
      <Route path='/' element={<MainLayout/>}/>
     <Route path="/other-page" element={<OtherPage/>}/>
      </Routes>
      </SkillProvider> */}

   
   </>
  );
}

export default App;
