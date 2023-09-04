import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom';


import Navbar from './components/navbar'
import About from './components/about'
import Gallery from './components/gallery'
import Skills from './components/skills'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
    <div>
    <Navbar/>
    <About/>
    <Gallery/>
    <Skills/>

    </div>
    </>
    </Router>
  )
}

export default App
