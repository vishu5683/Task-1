import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginUi from '../components/LoginUi';
import ForgotPassword from "../pages/Fp";

const Routing = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginUi} />
        <Route path="/fpp" component={ForgotPassword} />
      </Switch>
    </Router>
  );
}

export default Routing;
