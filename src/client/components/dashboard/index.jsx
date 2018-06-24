import React, { Component } from 'react';
import { Progress } from 'antd';
import CartItem from './cart-item';

import './index.less';

class Dashboard extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="dashboard">
        <img className="background" src="/assets/wedding.png" />
        <div className="dashboard-body">
          <div className="progress">
            <Progress percent={75} status="active" />
          </div>
          <div className="cartItem" style={{width:'80%'}}>
            <CartItem/>
            <CartItem/>
            <CartItem/>
          </div>
        </div>
        <div>

        </div>
      </div>
    );
  }
}

export default Dashboard;
