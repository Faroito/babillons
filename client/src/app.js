import React from "react";
import { Switch, Route } from "react-router-dom";

import { HomePage, CallPage, NoMatchPage } from "./pages/index";
import css from "./app.module.css";

const App = () => {
  return (
    <div className={css.app}>
      <Switch>
        <Route exact path={"/"} component={() => <HomePage />} />
        <Route exact path={"/call"} component={() => <CallPage />} />
        <Route component={NoMatchPage} />
      </Switch>
    </div>
  );
};

export default App;
