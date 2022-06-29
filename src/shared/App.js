import "./App.css";
import React from "react";
import { Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configStore";
import Main from "../pages/Main";
import NotFound from "../pages/NotFound";

function App() {
  return (
    <>
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </ConnectedRouter>
    </>
  );
}
export default App;
