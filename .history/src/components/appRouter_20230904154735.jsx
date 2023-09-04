
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Skills from './Skills';
import SkillDetail from './SkillDetail'; 
import OtherPage from './otherPage';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
    
        <Route path="/otherPage" component={OtherPage} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
