import React from 'react';
import { Button } from '../../global';
import './index.less';

export default props => (
  <div className="landing-starter">
    <video autoPlay loop>
      <source src="/assets/video.mp4" type="video/mp4" />
    </video>
    <div>
      <h2>
Plan your
        <br />
Wedding
      </h2>
      <h3>
We&#39;ve got the right tools to make your life a bit easier
        <br />
try our
        <strong>
online shop
        </strong>
, our free-to use
        <strong>
checklist
        </strong>
        {' '}
and explore what you can do more with
        <strong>
          <span className="red-pink">
HERA
          </span>
        </strong>
      </h3>
      <Button size="large">
Get started
      </Button>
    </div>
  </div>
);
