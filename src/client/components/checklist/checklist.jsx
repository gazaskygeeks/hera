import React, { Component } from 'react';

class Task extends Component {
  constructor(props) {
    super(props);
    this._deleteChecklistItems = this._deleteChecklistItems.bind(this);
  }
  _deleteChecklistItems() {
    const { id }=this.props;
    const { deleteChecklistItems } = this.props;
    deleteChecklistItems({id});
  }

  render() {
  console.log('props',this.props)
    return (
      <div className="tasks task-container">
      <div className='task'>
        <label className="container">
          <a className='task-desc' href='/generalStore'>
          <h5 className='task-text'>{this.props.value}</h5>
          </a>
          <input type="checkbox"/>
          <span className="checkmark"></span>
        </label>
       </div>
        <div className='task-icons'>
          <i className="fa fa-clock-o" style={{fontSize:'48px',color:'##0500ff'}}></i>
          <a onClick={this._deleteChecklistItems}><i className="fa fa-trash" style={{fontSize:'48px',color:'red'}}></i></a>
        </div>

      </div>
    );
  }
}

export default Task;
