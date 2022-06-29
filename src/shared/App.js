import "./App.css";
import React from "react";
import { Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configStore";
import GlobalStyle from "./GlobalStyle";
// import Main from "../pages/Main";
import ToDo from "../pages/ToDo";
import NotFound from "../pages/NotFound";

function App() {
  return (
    <>
      <GlobalStyle />
      <ConnectedRouter history={history}>
        <Switch>
          {/* <Route path="/" exact component={Main} /> */}
          <Route path="/" exact component={ToDo} />
          {/* <Route path="/" exact component={Main} /> */}
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </ConnectedRouter>
    </>
  );
}
export default App;
