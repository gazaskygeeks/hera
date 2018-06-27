import React from 'react';

import './index.less';

export default ({ services }) => (
  <div className="our-process">
    <h2>Our Vendors</h2>
    <h3>We make things easier for you by providing you links with the following service providers</h3>
    <ul className="our-process__services">
      {
        services.map(({title, logo}, index) =>
          (<a href='/generalStore'><li key={index}><span>{logo}</span><h2>{title}</h2></li></a>)
      )}
    </ul>
  </div>
);
