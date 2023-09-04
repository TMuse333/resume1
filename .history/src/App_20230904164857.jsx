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
    <AppRouter>

   
    <Router>
    <Routes>
        <Route exact path="/otherPage" Component={OtherPage}/>
        </Routes>
     
    <div>
    <Navbar/>
    <About/>
    <Gallery/>

    <Skills/>

    </div>
    </Router>
    </AppRouter>
    </>
    
  )
}

export default App
