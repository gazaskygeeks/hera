import React from 'react';

import './index.less';

export default (props) => (
  <div className="contact-us">
    <div></div>
    <div className="contact-form">
      <h2>Contact Us</h2>
      <h3>If you&#39;ve got any questions, don&#39;t hesitate to contact us.</h3>
      <input type="text" placeholder="Name *"/>
      <input type="text" placeholder="Email *"/>
      <textarea placeholder="Enter Your Message"/>
      <button>Send</button>
    </div>
  </div>
);
