import React from 'react';
import './AuthPage.css'

const AuthPage = (props) => {
  return (
    <div className="auth-page">
      <button className="auth-page__auth-button" onClick={props.authHandler}>
        <span className={'auth-page__button-bg'}/>
        <span className="auth-page__button-text">Авторизоваться</span>
      </button>
    </div>
  );
};

export default AuthPage;
