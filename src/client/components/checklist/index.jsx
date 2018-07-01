import React, { Component } from 'react';
import {
  Popover, Button, Input, Icon
} from 'antd';
import Task from './checklistItem';

import './index.less';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTaskValue: undefined,
      remainingTasks: 25,
      completedTasks: 16,
      remainingDays: 71
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
    const { data, isFetching, deleteChecklistItems } = this.props;
    return (
      <div className="checklist">
        <img className="background" src="/assets/wedding.png" />
        <div className="checklist-body">
          <div className="tasks">
            <div className="tasks-div">
              <span>
                {this.state.remainingTasks}
                {' '}
                Task remaining
              </span>
            </div>
            <div className="tasks-div">
              <span>
                {this.state.completedTasks}
                {' '}
                Tasks done
              </span>
            </div>
            <div className="tasks-div">
              <span>
                {this.state.remainingDays}
                {' '}
                Days remain
              </span>
            </div>
          </div>
          <Popover
            title="Todo title"
            className="btn-add-todo"
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
            <Button shape="circle">
              Add new tasks
              <Icon type="plus" />
            </Button>
          </Popover>
        </div>
        <div className="task-component">
          {
            data && data.length && data.length !== 0 && data.map(
              (item, index) => (
                <Task
                  deleteChecklistItems={deleteChecklistItems}
                  value={item.value}
                  key={index}
                  id={item.id}
                />
              )
            )
          }
        </div>
      </div>
    );
  }
}

export default Dashboard;
