import React from 'react';
import { Switch, BrowserRouter } from 'react-router-dom';

import Route from './route';

import SignIn from '../pages/SignIn';
import Dashboard from '../pages/Dashboard';

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={SignIn} />
        <Route path="/dashboard" component={Dashboard} isPrivate />
      </Switch>
    </BrowserRouter>
  );
}
