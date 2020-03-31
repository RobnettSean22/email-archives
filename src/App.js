import React, { Component } from "react";
import "./App.scss";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: ""
    };
  }

  render() {
    return (
      <div id='archive-container'>
        <div id='search'>
          <input onChange={e => this.setState({ search: e.target.value })} />
        </div>
        <div id='title-count'>
          <h3>Results: 0 mail(s)</h3>
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
          <div id='mail-content'>map data goes here</div>
        </div>
      </div>
    );
  }
}

export default App;
