import { useState } from 'react'
import './App.css'
import Gallery from './components/gallery'
import Carousel from './components/carousel'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Gallery/>
    </>
  )
}

export default App
