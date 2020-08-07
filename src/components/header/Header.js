import React, { Component } from 'react';
import { withRouter } from 'react-router';
import './Header.css';

export class Header extends Component {

  getRoutesLinks() {
    const { routes, location, history } = this.props;
    return routes.map((it, index) => {
      return <button
        key={`header-button-item-${index}`}
        onClick={() => history.push(it.path)}
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
        <div className="header__exit-button">
          <button onClick={this.props.logout}>Выйти</button>
        </div>
      </div>
    );
  }
}

export default withRouter(Header);
