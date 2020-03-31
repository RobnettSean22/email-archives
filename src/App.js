import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div id='archive-container'>
        <div id='search'>
          <input />
        </div>
        <div id='title-count'>
          <h3></h3>
        </div>
        <div id='email'>
          <div id='mail-order'>
            <ul>
              <li>From</li>
              <li>To</li>
              <li>Subject</li>
              <li>Date</li>
            </ul>
          </div>
          <div id='mail-content'>
            <ul>
              <li>From</li>
              <li>To</li>
              <li>Subject</li>
              <li>Date</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
