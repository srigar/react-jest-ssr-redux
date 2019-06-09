import React, { Component } from "React";
import { Route, Switch } from "react-router-dom";

import "./app.css";
import routes from "./routes";
import Header from "./components/header/header.component";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="body-container">
          <Switch>
            {routes.map(route => <Route key={route.path} {...route} />)}
          </Switch>
        </div>
      </>
    );
  }
}

export default App;
