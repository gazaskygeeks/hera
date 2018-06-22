import React from 'react';

import './index.less';

export default (props) => {
  const { size = 'default', children } = props;
  return <button className={`btn ${size}`}>{children}</button>;
};
