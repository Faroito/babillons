import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";

import { HomePage, CallPage, NoMatchPage } from "./pages/index";
import css from "./app.module.css";

const App = () => {
  const [roomId, setRoomID] = useState();

  return (
    <div className={css.app}>
      <Switch>
        <Route
          exact
          path={"/"}
          component={() => <HomePage setRoomID={setRoomID} />}
        />
        <Route exact path={"/call"} component={() => <CallPage />} />
        <Route component={NoMatchPage} />
      </Switch>
    </div>
  );
};

export default App;
