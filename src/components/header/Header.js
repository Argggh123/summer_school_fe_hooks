import React, { Component } from 'react';
import { withRouter } from 'react-router';
import './Header.css';

export class Header extends Component {

  getRoutesLinks() {
    const { routes, handler, location } = this.props;
    return routes.map((it, index) => {
      return <button
        key={`header-button-item-${index}`}
        onClick={() => handler(it.path)}
        className={`header__button ${location.pathname === it.path
          ? 'header__button--active'
          : ''}`}
      >
        {it.name}
      </button>;
    });
  }

  render() {
    return (
      <div className="header header__row">
        <div className="header__logo">My App</div>
        {this.getRoutesLinks()}
      </div>
    );
  }
}

export default withRouter(Header);
