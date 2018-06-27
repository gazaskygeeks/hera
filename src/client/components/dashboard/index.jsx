import React, { Component } from 'react';
import {
  Progress, Checkbox, Icon, Popover, Button
} from 'antd';
import 'antd/dist/antd.less';

import './index.less';

class Dashboard extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    const { getDashboardCart } = this.props;
    getDashboardCart();
  }

  render() {
    const { data } = this.props;
    return (
      <div className="dashboard">
        <img className="background" src="/assets/wedding.png" />
        <div className="dashboard-body">
          <div className="progress">
            <Progress percent={75} status="active" />
          </div>
          <div className="dashboard-cart">
            {
              data && data.map(({
                image_url, price_value, price_currency, description
              }, index) => (
                <div className="cart-item" key={index}>
                  <Checkbox />
                  <div className="item-image">
                    <img src={image_url} />
                  </div>
                  <div className="item-price">
                    <span>
                      {price_value}
                      {' '}
                      ·
                      {' '}
                      {price_currency}
                    </span>
                  </div>
                  <div className="item-description">
                    <p>
                      {description}
                    </p>
                  </div>
                  <div className="item-icons">
                    <Icon type="tool" />
                    <Popover
                      placement="top"
                      trigger="click"
                      title={(
                        <span>
                          Are you sure you want to delete this item?
                        </span>
                          )}
                      content={(
                        <Button type="danger">
                          Delete
                        </Button>
                      )}
                    >
                      <Icon type="delete" />
                    </Popover>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        <div />
      </div>
    );
  }
}

export default Dashboard;
