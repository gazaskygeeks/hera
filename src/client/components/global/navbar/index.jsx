import React from 'react';
import './index.less';

class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      language: 'EN'
    }
  }

  render() {
    const { isCollapsed } = this.props;
    return (
      <div className="navbar">
        <ul className="navbar__list">
          <li className="navbar__list__logo"><img src="/assets/hera-logo.svg" alt="hera-logo"/></li>
          <li className="navbar__list__item">Home</li>
          <li className="navbar__list__item">Blog</li>
          <li className="navbar__list__item">About</li>
          <li className="navbar__list__item">Contact</li>
          <li className="navbar__list__item navbar__list__search">
            <i className="fas fa-search" />
            <input type="text" placeholder="Search..." />
          </li>
          <li className="navbar__list__item">
            <span>{this.state.language}<i className="fas fa-caret-down" /></span>
          </li>
          <li className="navbar__list__item"><i className="fab fa-facebook-f"/></li>
          <li className="navbar__list__item"><i className="fab fa-twitter"/></li>
        </ul>
      </div>
    );
  }
}


export default Navbar;
