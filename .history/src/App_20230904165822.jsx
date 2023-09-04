import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import MainLayout from './MainLayout';
import Skills from './components/skills';
import OtherPage from './components/otherPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<MainLayout />}>
          <Route index element={<Skills />} />
          <Route path="otherPage" element={<OtherPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
