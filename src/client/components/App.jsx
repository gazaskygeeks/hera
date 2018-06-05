import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from '../components/global/navbar';
import LandingPage from '../containers/landingPageContainer';

const App = () => (
  <BrowserRouter>
    <div className="app">
      <Navbar />
      <Switch>
        <Route exact path="/" component={LandingPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
