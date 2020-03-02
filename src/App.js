import React from 'react';
import './App.css';
import { HomePage, NotFound } from './pages';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const App = () =>
<BrowserRouter>
  <Switch>
    <Route exact path="/" component={HomePage}/>
    <Route component={NotFound}/>
  </Switch>
</BrowserRouter>
;

export default App;