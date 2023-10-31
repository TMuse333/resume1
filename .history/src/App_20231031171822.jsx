import { useState } from 'react'
import './App.css'
import {
  BrowserRouter as Router,

  Route, Routes

} from "react-router-dom";




import MainLayout from './components/MainLayout';

import { SkillProvider } from './context/context'
import ResumePDF from './components/resume';


function App() {
  return (
    <>

    <SkillProvider>
   <Routes>
      
      <Route path='/' element={<MainLayout/>}/>
    
      </Routes>
      </SkillProvider>

   
   </>
  );
}

export default App;
