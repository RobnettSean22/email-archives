import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Emails from "./Component/Emails/Emails";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Emails} />
        </Switch>
      </div>
    );
  }
}

export default App;
