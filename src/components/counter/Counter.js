import React, { Component } from 'react';
import './Counter.css';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  countNumbHandler(type, value) {
    switch (type) {
      case 'rise':
        this.setState({ counter: this.state.counter + value });
        break;
      case 'sub':
        this.setState({ counter: this.state.counter - value });
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <div className="counter">
       <h1>Counter component</h1>
       <p>Counter value: {this.state.counter}</p>
        <div className="counter__buttons--row-around">
          <button onClick={this.countNumbHandler.bind(this, 'sub', 1)}>
            отнять 1
          </button>
          <button onClick={this.countNumbHandler.bind(this, 'rise', 1)}>
            прибавить 1
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
