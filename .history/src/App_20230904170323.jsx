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
import MainLayout from './components/MainLayout';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<MainLayout />}>
       
          <Route path="otherPage" omponent={<OtherPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
