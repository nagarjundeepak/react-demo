import React, { Component } from "react";
import Counters from "./counters";
import Counter from "./counter";

class Addnew extends Component {
  state = {};

  render() {
    return (
      <div>
        <button
          onClick={() => this.props.newOne()}
          className="btn btn-info btn-sm m-2"
        >
          Add Item
        </button>
      </div>
    );
  }
}

export default Addnew;
