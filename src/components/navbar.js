import React, { Component } from "react";
import App from "../app";

class NavBar extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Navbar{" "}
          <span className="badge badge-pill badge-secondary m-2">
            {this.props.totalCounters}
          </span>
        </a>{" "}
        <h4> {this.props.message}</h4>
      </nav>
    );
  }
}

export default NavBar;
