import React from "react";
import "./App.css";
import ConfigLoaderService from "./config/ConfigLoaderService";
import { Switch, Route, Redirect } from "react-router-dom";
import LeadListPageUi from "./lead/LeadListPageUI";
import DashboardChooserContainer from "./dashboard/DashboardChooserContainer";

function App() {
  ConfigLoaderService();

  const reload = () => {
    window.location.reload();
  };

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={DashboardChooserContainer} />
        <Route exact path="/landing/list" component={LeadListPageUi} />
        <Route exact path="/landing.html" render={reload} id="landing-route" />
        <Route
          path="/landing"
          render={() => (
            <Redirect
              to={{
                pathname: "/landing.html",
              }}
            />
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
