import { useState } from 'react'
import './App.css'
import Gallery from './components/gallery'
import Carousel from './components/carousel'
import 


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Carousel/>
    </>
  )
}

export default App
