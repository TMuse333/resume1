// AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Skills from './Skills';
import SkillDetail from './SkillDetail'; // Import your SkillDetail component

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Skills} />
        <Route path="/skills/:skillId" component={SkillDetail} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
