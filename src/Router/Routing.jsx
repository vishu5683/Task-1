import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginUi from '../components/LoginUi';
import ForgotPassword1 from "../components/Fp"


const Routing = () => {
  return (
    <Router>
    <Switch>
      <Route path="/" component={ForgotPassword1} />
      <Route path="/" component={LoginUi} />
    </Switch>
  </Router>
  )
}

export default Routing
