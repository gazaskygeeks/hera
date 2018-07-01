import React, { Component } from 'react';
import { Popover, Button } from 'antd';

import './index.less';

class ChecklistItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this._deleteChecklistItems = this._deleteChecklistItems.bind(this);
  }

  _deleteChecklistItems() {
    const { id, deleteChecklistItems } = this.props;
    deleteChecklistItems({ id });
  }

  render() {
    const { value, id } = this.props;
    const reminderPop = (
      <div>
        <Button>
          Remind me tomorrow
        </Button>
      </div>
    );
    return (
      <div className="tasks task-container">
        <div className="task">
          <label className="container">
            <a className="task-desc" href="/generalStore">
              <h5 className="task-text">
                {value}
              </h5>
            </a>
            <input type="checkbox" />
            <span className="checkmark" />
          </label>
        </div>
        <div className="task-icons">
          <a />
          <Popover
            placement="top"
            title="Set reminders"
            content={reminderPop}
            trigger="click"
          >
            <Button className="btn-task btn-remind">
              <i className="fa fa-clock-o" />
            </Button>
          </Popover>
          <Popover
            placement="top"
            title="Confirm delete"
            content={(
              <div>
                <Button type="danger" onClick={this._deleteChecklistItems}>
                  DELETE
                </Button>
                <Button type="primary">
                  Cancel
                </Button>
              </div>
            )}
            trigger="click"
          >
            <Button className="btn-task btn-delete">
              <i className="fa fa-trash" />
            </Button>
          </Popover>
        </div>

      </div>
    );
  }
}

export default ChecklistItem;
