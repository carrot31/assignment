import "./App.css";
import React from "react";
import { Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configStore";
import GlobalStyle from "./GlobalStyle";
import Main from "../pages/Main";
import ToDo from "../pages/ToDo";
import Color from "../pages/Color";
import NotFound from "../pages/NotFound";

function App() {
  return (
    <>
      {/* 전역 css 적용 */}
      <GlobalStyle />
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/todo" exact component={ToDo} />
          <Route path="/color" exact component={Color} />
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </ConnectedRouter>
    </>
  );
}
export default App;
