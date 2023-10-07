import { useState } from 'react'
import './App.css'
import {
  BrowserRouter as Router,

  Route, Routes

} from "react-router-dom";




import MainLayout from './components/MainLayout';

import { SkillProvider } from './context/context'
import FAQ from './components/FAQ';
import Progress from './components/progress';


function App() {
  return (
    <>

    <SkillProvider>
   <Routes>
      
      <Route path='/' element={<MainLayout/>}/>
     <Route path="/FAQ" element={<FAQ/>}/>
     <Route path="/progress" element={<Progress/>}/>
      </Routes>
      </SkillProvider>

   
   </>
  );
}

export default App;
