import React, { Component } from 'react';
import './App.css';
import { Route, Switch, withRouter } from 'react-router';
import Header from './components/header/Header';
import AuthPage from './pages/AuthPage';
import CounterPage from './pages/CounterPage';
import TodoListPage from './pages/TodoListPage';
import InputPage from './pages/InputPage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      routes: [
        {
          path: '/',
          name: 'Counter',
        },
        {
          path: '/todos',
          name: 'TodoList',
        },
        {
          path: '/input',
          name: 'Input'
        }
      ],
      isAuth: false,
    };
  }

  goToTodoList(path) {
    const { push } = this.props.history;
    push(path);
  }

  setIsAuthHandler() {
    this.setState({
      isAuth: true,
    });
  }

  render() {
    return (
      <div className="App">
        {!this.state.isAuth
          ? (
            <Switch>
              <Route>
                <AuthPage authHandler={this.setIsAuthHandler.bind(this)} />
              </Route>
            </Switch>
          )
          : (
            <>
            <Header routes={this.state.routes} handler={this.goToTodoList.bind(this)} />
            <Switch>
            <Route exact path="/" component={CounterPage} />
            <Route path="/todos" component={TodoListPage} />
            <Route path="/input" component={InputPage} />
            </Switch>
            </>
          )
        }
      </div>
    );
  }
}

export default withRouter(App);
