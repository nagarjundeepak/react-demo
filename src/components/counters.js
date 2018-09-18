import React, { Component } from "react";
import Counter from "./counter";
import Addnew from "./counteradd";
import App from "../app";

class Counters extends Component {
  render() {
    const {
      counters,
      onReset,
      onDelete,
      onIncrement,
      onDecrement,
      onNew
    } = this.props;

    if (counters) {
      return (
        <div>
          <button onClick={onReset} className="btn btn-primary btn-sm m-2">
            Reset
          </button>

          {counters.map(counter => (
            <Counter
              key={counter.id}
              counter={counter}
              onIncrement={onIncrement}
              onDelete={onDelete}
              onDecrement={onDecrement}
            >
              <h4>{counter.id}</h4>
            </Counter>
          ))}

          <Addnew newOne={onNew} />
        </div>
      );
    } else {
      return (
        <div>
          <h3>Not working</h3>
        </div>
      );
    }
  }
}

export default Counters;
