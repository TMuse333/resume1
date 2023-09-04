
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Skills from './Skills';
import SkillDetail from './SkillDetail'; 
import OtherPage from './otherPage';

const AppRouter = () => {
  return (
    <Router>
 
     
        <Route path="/otherPage" element={OtherPage} />
    
    </Router>
  );
};

export default AppRouter;
