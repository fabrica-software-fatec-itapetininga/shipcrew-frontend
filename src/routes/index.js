import React from 'react';
import { Switch, BrowserRouter } from 'react-router-dom';

import Route from './route';

import SignIn from '../pages/SignIn';

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={SignIn} />
      </Switch>
    </BrowserRouter>
  );
}
