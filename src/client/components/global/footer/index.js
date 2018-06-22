import React from 'react';

import './index.less';

export default props => (
  <div className="footer">
    <ul>
      <li><strong>Pages</strong></li>
      <li className="seperator" />
      <li><a href="#">Home</a></li>
      <li><a href="#">Blog</a></li>
      <li><a href="#">Work</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
    <ul>
      <li><strong>Services</strong></li>
      <li className="seperator" />
      <li><a href="#">Art</a></li>
      <li><a href="#">Photography</a></li>
      <li><a href="#">Business</a></li>
      <li><a href="#">Design</a></li>
      <li><a href="#">Fashion</a></li>
    </ul>
    <ul>
      <li><strong>Contact</strong></li>
      <li className="seperator" />
      <li><a href="#">Get support</a></li>
      <li><a href="#">Contact us</a></li>
    </ul>
    <ul>
      <li><strong>Legal</strong></li>
      <li className="seperator" />
      <li><a href="#">Privacy policy</a></li>
      <li><a href="#">Terms & conditions</a></li>
    </ul>
    <ul>
      <li><strong>Social</strong></li>
      <li className="seperator" />
      <li>
        <span><i className="fab fa-facebook" /></span>
        <span><i className="fab fa-twitter" /></span>
        <span><i className="fab fa-github" /></span>
      </li>
    </ul>
  </div>
);
