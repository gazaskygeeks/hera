import React from 'react';
import './index.less';

class Navbar extends React.Component {
  constructor() {
    super();
    this.handleNavbar = this.handleNavbar.bind(this);
  }

  handleNavbar() {
    console.log(this.props)
    const { isCollapsed, navbarCollapse, navbarReveal } = this.props;
    if (isCollapsed) navbarReveal();
    else navbarCollapse();
  }

  render() {
    console.log('sdfsa', this.props);
    const { isCollapsed } = this.props;
    return (
      <div className={"navbar" + (isCollapsed ? ' hidden' : '')}>
        <i className={"fas fa-circle-notch navbar__swapper" + (isCollapsed ? ' active' : '')} onClick={this.handleNavbar} />
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
