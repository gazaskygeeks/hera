import React, { Component } from 'react';


class Task extends Component {
  render() {
    return (
      <div className="tasks">
      <input type="checkbox" name="items"/>
        <div className='task-description'>
          <h3>Get the <a href='/generalStore'>dresses</a> from ABC on TUESDAY at 4:15pm</h3>
        </div>
        <div className='task-icons'>
          <i className="fa fa-clock-o" style={{fontSize:'48px',color:'yellow'}}></i>
          <i className="fa fa-trash" style={{fontSize:'48px',color:'red'}}></i>
        </div>

      </div>
    );
  }
}

export default Task;
