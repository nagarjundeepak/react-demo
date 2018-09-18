import React, { Component } from "react";
import Counters from "./counters";
import Addnew from "./counteradd";

class Counter extends Component {
  componentDidUpdate(prevProps) {
    if (prevProps.counter.value !== this.props.counter.value) {
      // make AJAX call and get new data from server
    }
  }

  componentWillUnmount() {
    console.log("Number " + this.props.counter.id + " is Deleted");
  }

  render() {
    return (
      <div>
        <span className={this.getBadgeColor()}> {this.formatCount()} </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          +
        </button>{" "}
        <button
          onClick={() => this.props.onDecrement(this.props.counter)}
          className="btn btn-sm"
        >
          -
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeColor() {
    let badgeColor = "badge m-2 badge-"; // since we are modifing the content
    badgeColor += this.props.counter.value === 0 ? "warning" : "primary";
    return badgeColor;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
