import React from 'react';
import './index.less';

class Navbar extends React.Component {
  constructor() {
    super();
    this.handleNavbar = this.handleNavbar.bind(this);
  }

  handleNavbar() {
    const { isCollapsed, navbarCollapse, navbarReveal } = this.props;
    if (isCollapsed) navbarReveal();
    else navbarCollapse();
  }

  render() {
    const { isCollapsed } = this.props;
    return (
      <div className={"navbar" + (isCollapsed ? ' hidden' : '')}>
        <button className="navbar__swapper" onClick={this.handleNavbar}>
          <span className={isCollapsed ? '' : 'active'}></span>
          <span className={isCollapsed ? '' : 'active'}></span>
          <span className={isCollapsed ? '' : 'active'}></span>
        </button>
        <ul className="navbar__list">
          <li className="navbar__list__search"><i className="fas fa-search" /><input type="text" placeholder="Search..." /></li>
          <li className="navbar__list__item"><i className="fas fa-truck-loading" />Vendors</li>
          <li className="navbar__list__item"><i className="fas fa-store" />Shop</li>
          <li className="navbar__list__item"><i className="fas fa-tasks" />Dashboard Plan</li>
          <li className="navbar__list__item"><i className="fas fa-headphones" />Contact</li>
          <li className="navbar__list__item"><i className="fas fa-info-circle" />About</li>
          <li className="navbar__list__item"><i className="fas fa-door-open" />Log Out</li>
        </ul>
      </div>
    );
  }
}


export default Navbar;
