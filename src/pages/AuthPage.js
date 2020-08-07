import React from 'react';
import validator from 'validator';
import './AuthPage.css';
import FormInput from '../components/formInput/FormInput';

class AuthPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: {
        value: '',
        isTouched: false,
      },
      password: {
        value: '',
        isTouched: false,
      },
    };
  }

  inputHandler(event) {
    event.persist();
    this.setState((prevState) => ({
      ...prevState,
      [event.target.name]: {
        value: event.target.value,
        isTouched: true,
      },
    }));
  }

  authHandler(event) {
    event.persist();
    event.preventDefault();
    this.props.authHandler();
  };

  validateForm() {
    return validator.isEmail(this.state.email.value) && validator.isLength(
      this.state.password.value,
      { min: 6 },
    );
  };

  render() {
    return (
      <div className="auth-page">
        <form onSubmit={this.authHandler.bind(this)} className="auth-page__login-form">
          <h2>Авторизация</h2>
        <FormInput
          name="email"
          value={this.state.email.value}
          label="Email"
          type="email"
          handler={this.inputHandler.bind(this)}
          meta={{
            touched: this.state.email.isTouched,
            error: !validator.isEmail(this.state.email.value)
              ? 'Введите корректный Email'
              : null,
          }}
        />
        <FormInput
          name="password"
          value={this.state.password.value}
          label="Password"
          type="password"
          handler={this.inputHandler.bind(this)}
          meta={{
            touched: this.state.password.isTouched,
            error: !validator.isLength(this.state.password.value, { min: 6 })
              ? 'Пароль должен быть не менее 6 символов'
              : null,
          }}
        />
        <button type="submit" disabled={!this.validateForm()}>Авторизоваться</button>
      </form>
    </div>
    );
  }
}

export default AuthPage;
