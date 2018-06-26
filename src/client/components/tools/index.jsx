import React, { Component } from 'react';

import './index.less';

class Tools extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="tools">
        <img className="background" src="/assets/wedding.png" />
        <div className="tools-body">
          <a className='tool-anchor' href='/checklist'>
            <div className='tool'>
              <img className="tools-icon" src="/assets/Chicklist.png" />
              <h2 className="tools-desc">Chicklist</h2>
            </div>
          </a>
          <a className='tool-anchor' href='vendors'>
            <div className='tool'>
              <img className="tools-icon" src="/assets/Vendors.png" />
              <h2 className="tools-desc">Vendors</h2>
            </div>
          </a>
          <a className='tool-anchor' href='guestList'>
            <div className='tool'>
              <img className="tools-icon" src="/assets/guestList.png" />
              <h2 className="tools-desc">Guest List</h2>
            </div>
          </a>
        </div>
        <div className="tools-body2">
          <a className='tool-anchor' href='musicList'>
            <div className='tool'>
              <img className="tools-icon" src="/assets/MusicList.png" />
              <h2 className="tools-desc">Music List</h2>
            </div>
          </a>
          <a className='tool-anchor' href='currencyConverter'>
            <div className='tool'>
              <img className="tools-icon" src="/assets/CurrencyConverter.png" />
              <h2 className="tools-desc">Currency Converter</h2>
            </div>
          </a>
          <a className='tool-anchor' href='budgetCalculator'>
            <div className='tool'>
              <img className="tools-icon" src="/assets/BudgetCalculator.png" />
              <h2 className="tools-desc">Budget Calculator</h2>
            </div>
          </a>
        </div>
        <div>

        </div>
      </div>
    );
  }
}

export default Tools;
