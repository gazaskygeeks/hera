import React from 'react';
import './index.less';

class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      language: 'EN'
    };
  }

  render() {
    const { isCollapsed } = this.props;
    return (
      <div className="navbar">
        <ul className="navbar__list">
          <li className="navbar__list__logo" onClick={() => window.location = '/'}>
            <img src="/assets/hera.png" alt="hera-logo" style={{ width: '80px' }} />
          </li>
          <a className="nav_anchor navbar__list__item" href="/">
            <li className="navbar__list__item">
Home
            </li>
          </a>
          <a className="nav_anchor navbar__list__item" href="/tools">
            <li className="navbar__list__item">
Tools
            </li>
          </a>
          <li className="navbar__list__item">
About
          </li>
          <li className="navbar__list__item">
Contact
          </li>
          <li className="navbar__list__item navbar__list__search">
            <i className="fas fa-search" />
            <input type="text" placeholder="Search..." />
          </li>
          <li className="navbar__list__item">
            <span style={{ width: '48px' }}>
              {this.state.language}
              <i className="fas fa-caret-down" style={{ marginLeft: '5px' }} />
            </span>
          </li>
          <a className="navbar__list__item" href="https://www.facebook.com/heraCo2018" target="blank">
            <li className="navbar__list__item">
              <i className="fab fa-facebook-f" />
            </li>
          </a>
          <a className="navbar__list__item" href="https://twitter.com/Hera20182" target="blank">
            <li className="navbar__list__item">
              <i className="fab fa-twitter" />
            </li>
          </a>
        </ul>
      </div>
    );
  }
}


export default Navbar;
