import { useState } from 'react'
import './App.css'
import Gallery from './components/gallery'
import Carousel from './components/carousel'
import Navbar from './components/navbar'
import About from './components/about'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <About/>
    <Gallery/>
    </>
  )
}

export default App
