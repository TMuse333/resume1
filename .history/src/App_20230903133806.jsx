import { useState } from 'react'
import './App.css'

import Navbar from './components/navbar'
import About from './components/about'
import Gallery from './components/gallery'
import Skills from './components/skills'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
    <Navbar/>
    <About/>
    <Gallery/>
    <Skills/>

    </div>
    </>
  )
}

export default App
