import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import LandingPage from '../containers/landingPageContainer';

const App = () => (
  <BrowserRouter>
    <div className="app">
      <Switch>
        <Route exact path="/" component={LandingPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
