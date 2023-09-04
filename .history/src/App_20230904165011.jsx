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
import OtherPage from './components/otherPage';

import AppRouter from './components/appRouter';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
     
    <div>
    <Navbar/>
    <About/>
    <Gallery/>
    <Routes>
        <Route exact path="/otherPage" Component={OtherPage}/>
        </Routes>
    <Skills/>

    </div>
  

    </>
    
  )
}

export default App
