import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Emails from "./Component/Emails/Emails";
import SingleEmail from "./Component/SingleEmail/SingleEmail";
class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Emails} />
          <Route excat path={"/emails/:index"} component={SingleEmail} />
        </Switch>
      </div>
    );
  }
}

export default App;
