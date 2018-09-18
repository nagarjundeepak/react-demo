import React, { Component } from "react";
import { render } from "react-dom";
import NavBar from "./components/navbar";
import Counter from "./components/counter";
import Counters from "./components/counters";
import Addnew from "./components/counteradd";
import uuid from "uuid";

class App extends Component {
  state = {
    counters: [
      { id: uuid.v4(), value: 0 },
      { id: uuid.v4(), value: 3 },
      { id: uuid.v4(), value: 0 }
    ],
    message: ""
  };

  componentDidMount() {
    // AJAX calls
  }

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters: counters });
  };

  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters: counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });

    this.setState({ counters: counters });
  };

  handleDecrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    if (counters[index].value <= 0) {
      alert("Warning! Cart value cannot be below Zero");
      const message = "Warning! Cart value cannot be below Zero";
      this.setState({ message: message });
    } else {
      counters[index].value--;
      this.setState({ counters: counters });
    }
  };

  handleNew = () => {
    const serachArr = this.state.counters;
    const newValue = 0;
    const newArray = this.state.counters.slice();
    newArray.push({ id: uuid.v4(), value: newValue });
    this.setState({ counters: newArray });
  };

  render() {
    return (
      <div>
        <NavBar
          showMsg={this.state.message}
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
            onNew={this.handleNew}
          />
        </main>
      </div>
    );
  }
}

export default App;
