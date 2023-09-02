import { useState } from 'react'
import './App.css'

import Navbar from './components/navbar'
import About from './components/about'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
    <Navbar/>
    <About/>

    </div>
    </>
  )
}

export default App
