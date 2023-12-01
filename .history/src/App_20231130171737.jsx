import { useState } from 'react'
import './App.css'
import {
  BrowserRouter as Router,

  Route, Routes

} from "react-router-dom";




import MainLayout from './components/MainLayout';
import Programmer from './components/programmer';
import { SkillProvider } from './context/context'
import ResumePDF from './components/resume';


function App() {
  return (
    <>

    <SkillProvider>
   <Routes>
      
      <Route path='/' element={<MainLayout/>}/>
    <Route path='resume' element={<ResumePDF/>}/>
      </Routes>
      </SkillProvider>

   
   </>
  );
}

export default App;
