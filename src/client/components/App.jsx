import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from '../containers/navbarContainer';
import LandingPage from '../containers/landingPageContainer';
import generalStore from '../containers/generalStoreContainer';
import NotFoundPage from '../components/notFoundPage';
import { Footer } from './global';

import './App.less';

const App = () => (
  <BrowserRouter>
    <div className="app">
      <Navbar />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/generalStore" component={generalStore} />
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
);

export default App;
