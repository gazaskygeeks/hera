import React from 'react';

import { Button } from '../../global';
import './index.less';

export default () => (
  <div className="landing-section-1">
    <img src="/assets/background-1.jpg" alt="bg" />
    <h1>
Plan your happy wedding
      <br />
Easier
    </h1>
    <h4>
Hera planner saves your time, money and lots of effort
    </h4>
    <Button size="large">
Let&#39;s start
    </Button>
    <div className="scroll-icon" onClick={() => window.scrollTo({ top: 1676, behavior: 'smooth' })}>
      <span>
        <i className="fas fa-arrow-down" />
      </span>
        Scroll down
    </div>
  </div>
);
