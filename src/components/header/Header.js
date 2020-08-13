import React from "react";
import { useHistory, useLocation } from "react-router";
import "./Header.css";

const Header = ({ routes, logout }) => {
  const location = useLocation();
  const history = useHistory();
  const getRoutesLinks = () => {
    return routes.map((it, index) => {
      return (
        <button
          key={`header-button-item-${index}`}
          onClick={() => history.push(it.path)}
          className={`header__button ${
            location.pathname === it.path ? "header__button--active" : ""
          }`}
        >
          {it.name}
        </button>
      );
    });
  };

  return (
    <div className="header header__row">
      <div className="header__logo">My App</div>
      {getRoutesLinks()}
      <div className="header__exit-button">
        <button onClick={logout}>Выйти</button>
      </div>
    </div>
  );
};

export default Header;
