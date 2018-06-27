import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from '../containers/navbarContainer';
import LandingPage from '../containers/landingPageContainer';
import generalStore from '../containers/generalStoreContainer';
import Dashboard from '../containers/dashboardContainer';
import Tools from '../containers/tools';
import Checklist from '../containers/checklistContainer';
import NotFoundPage from '../components/notFoundPage';
import { Footer } from './global';

import './App.less';

const App = () => (
  <BrowserRouter>
    <div className="app">
      <Navbar />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/home" component={LandingPage} />
        <Route exact path="/generalStore" component={generalStore} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/tools" component={Tools} />
        <Route exact path="/checklist" component={Checklist} />
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
);

export default App;
