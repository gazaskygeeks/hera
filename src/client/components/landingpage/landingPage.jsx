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
        <img src="/assets/roses&rings.jpg" alt="background"/>
        <div className="landing-page__logo-holder">
          <img src="/assets/hera-logo.svg" alt="hera-logo"/>
        </div>
        <div className="landing-page__landing-header">
       Your wedding is near <wbr/>
        <span className="landing-page__landing-header__pink-bold">Hera</span> will make your happy Wedding Easier<br/><br/>
          <span className="landing-page__landing-header__smalldesc">find wedding vendores you need and making a plan for your happy day</span>
        </div>
        <button className="landing-page__calltoaction">Let's Start</button>
      </div>
    );
  }
}

export default LandingPage;
