import { useState } from 'react'
import './App.css'

import Navbar from './components/navbar'
import About from './components/about'
import Gallery from './components/gallery'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
    {/* <Navbar/>
    <About/> */}
    <Gallery/>

    </div>
    </>
  )
}

export default App
