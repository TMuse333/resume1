
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Skills from './Skills';
import SkillDetail from './SkillDetail'; 
import OtherPage from './otherPage';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        {/* <Route exact path="/" component={Skills} />
        <Route path="/skills/:skillId" component={SkillDetail} /> */}
        <Route path="/other-page" component={OtherPage} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
