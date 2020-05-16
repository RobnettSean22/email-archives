import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Emails from "./Component/Emails/Emails";
import EmailWindow from "./Component/EmailWindow";
class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Emails} />
          <Route
            excat
            path={
              (this.externalWindow = window.open(
                `/selecter/id`,
                "",
                "width=600,height=400,left=200,top=200"
              ))
            }
            component={EmailWindow}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
