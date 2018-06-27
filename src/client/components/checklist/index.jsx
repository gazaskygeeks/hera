import React, { Component } from 'react';
import Task from './checklist';

import './index.less';

class Dashboard extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="checklist">
        <img className="background" src="/assets/wedding.png" />
        <div className="checklist-body">
          <div className="tasks">
            <div className="tasks-div">
              <h5>25 Task Remaining</h5>
            </div>
            <div className="tasks-div">
              <h5>16 Task Done</h5>
            </div>
            <div className="tasks-div">
              <h5>266 Day</h5>
            </div>
          </div>
          <Task/>
        </div>
        <div>

        </div>
      </div>
    );
  }
}

export default Dashboard;
