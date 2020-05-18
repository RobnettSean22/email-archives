import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Emails from "./Component/Emails/Emails";
import EmailWindow from "./Component/EmailWindow";
import NewWindow from "react-new-window";
class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Emails} />
          <NewWindow>
            <Route excat path={"/selected/"} component={EmailWindow} />
          </NewWindow>
        </Switch>
      </div>
    );
  }
}

export default App;
