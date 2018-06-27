import React, { Component } from 'react';
import Task from './checklist';

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
  if (!this.props.data){
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
        <div>
        </div>
      </div>
    )};
    const arr = this.props.data.map(item => {
      return (
        <Task value={item.value} id={item.id}/>
      );
    });

    return (
      <div className='studenProfileStyle'>
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
        {arr}

        </div>
      </div>
      </div>
    );
  }
}

export default Dashboard;
