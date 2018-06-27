import React, { Component } from 'react';
import Task from '../../containers/deleteChecklist';
import { Popover, Button, Input } from 'antd';

import './index.less';
import './style.less';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTaskValue: undefined
    };
    this._getChecklistItems = this._getChecklistItems.bind(this);
    this._addChecklistItem = this._addChecklistItem.bind(this);
    this.handleNewTaskChange = this.handleNewTaskChange.bind(this);
  }

  _getChecklistItems() {
    const { getChecklistItems } = this.props;
    getChecklistItems();
  }

  _addChecklistItem() {
    const { addChecklistItem } = this.props;
    const { newTaskValue: value } = this.state;
    addChecklistItem({ value });
  }

  handleNewTaskChange({ target }) {
    const { value } = target;
    this.setState({ ...this.state, newTaskValue: value });
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
        <Popover
          title="Todo title"
          trigger="click"
          content={(
            <div>
              <Input placeholder="Enter task name" onChange={this.handleNewTaskChange} />
              <Button onClick={this._addChecklistItem}>
                Add
              </Button>
            </div>
              )
            }
        >
          <Button>
            Add new task
          </Button>
        </Popover>
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
