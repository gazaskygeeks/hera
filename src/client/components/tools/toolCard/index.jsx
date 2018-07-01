import React from 'react';
import { Card } from 'antd';

import './index.less';

const { Meta } = Card;

export default ({ icon, title, link }) => (
  <Card
    onClick={() => window.location = link}
    hoverable
    cover={icon}
  >
    <Meta
      title={title}
    />
  </Card>
);
