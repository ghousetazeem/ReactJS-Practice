import React from 'react';
import './state.css';

class Counter extends React.Component {
  state = { count: 0 }

  increment = () => this.setState((prevState) => ({ count: prevState.count + 1 }));

  decrement = () => this.setState((prevState) => ({ count: prevState.count - 1 }));

  render() {
    const { count } = this.state;

    return (

      <div className="counter">
        <h3>counting</h3>

        <p className="count">{count}</p>
        <button className="button1" type="button" onClick={this.increment}>+</button>
        <button className="button2" type="button" onClick={this.decrement}>-</button>
      </div>
    );
  }
}

function State() {
  return (
    <div className="state_contain">

      <Counter />

    </div>
  );
}

export default State;
