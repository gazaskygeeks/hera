import React from 'react';

import './landingPage.less';

class LandingPage extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="landing-page">
        <div className="landing-page__logo-holder">
          <img src="/assets/hera-logo.svg" alt="hera-logo"/>
        </div>
        <div className="landing-page__landing-header">
       Your wedding is near<wbr/>
        <span>Hera</span> will make your happy Wedding Easier
          <span>find wedding vendores you need and making a plan for your happy day</span>
        </div>
      </div>
    );
  }
}

export default LandingPage;
