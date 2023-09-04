import { useState } from 'react'
import './App.css'
import {
  BrowserRouter as Router,

  Route,

} from "react-router-dom";


import Navbar from './components/navbar'
import About from './components/about'
import Gallery from './components/gallery'
import Skills from './components/skills'
import OtherPage from './components/otherPage';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
     <Ro
        <Route exact path="/otherPage" component={OtherPage}/>
     
    <div>
    <Navbar/>
    <About/>
    <Gallery/>
    <Skills/>

    </div>
    </Router>
    </>
    
  )
}

export default App
