import React from "react";
import "./App.css";
import { Route, Switch, withRouter } from "react-router";
import Header from "./components/header/Header";
import AuthPage from "./pages/AuthPage";
import CounterPage from "./pages/CounterPage";
import TodoListPage from "./pages/TodoListPage";
import InputPage from "./pages/InputPage";
import { useAuth } from "./hooks/useAuth";

const routes = [
  {
    path: "/",
    name: "Counter",
  },
  {
    path: "/todos",
    name: "TodoList",
  },
  {
    path: "/input",
    name: "Input",
  },
];

const App = () => {
  const { isAuth, login, logout } = useAuth();
  return (
    <div className="App">
      {!isAuth ? (
        <Switch>
          <Route>
            <AuthPage authHandler={() => login()} />
          </Route>
        </Switch>
      ) : (
        <>
          <Header routes={routes} logout={() => logout()} />
          <Switch>
            <Route exact path="/" component={CounterPage} />
            <Route path="/todos" component={TodoListPage} />
            <Route path="/input" component={InputPage} />
          </Switch>
        </>
      )}
    </div>
  );
};

export default withRouter(App);
