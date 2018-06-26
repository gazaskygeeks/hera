import React from 'react';

import './index.less';

export default (props) => (
  <div className="site-qoute">
    <div className="credit">
      <img className="image-placement" src='assets/mark.jpg' />
    </div>
    <div className="qoute">
      <i className="fas fa-quote-left purple-pink"/>
      Time is the most valuable resource a human could possess, <wbr/>we thrive to save time, the most priceless one
      <i className="fas fa-quote-right purple-pink"/>
    </div>
    <div className="qoute-name">
      <h4>
        Mark zuckerberg
      </h4>
      <h6>
        Facebook CEO
      </h6>
    </div>
  </div>
);
