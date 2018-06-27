import React, { Component } from 'react';
import Task from '../../containers/deleteChecklist';

import './index.less';
import './style.less';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this._getChecklistItems = this._getChecklistItems.bind(this);
  }
  _getChecklistItems() {
    const { getChecklistItems } = this.props;
    getChecklistItems();
  }

  componentDidMount() {
    this._getChecklistItems();
  }
  render() {
  const { data, isFetching } = this.props;
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
      </div>
      <div className='task-component'>
      {
        data && data.length && data.length !== 0 && data.map((item, index) => {
          return <Task value={item.value} key={index} id={item.id} />
        })
      }
      </div>
    </div>
  );
  }
}

export default Dashboard;
