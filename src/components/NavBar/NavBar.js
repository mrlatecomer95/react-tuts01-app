import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import routes from "../../routes";
// import NavBarItems from "./NavBarItems";

import routes from "../../routes";
const NavBar = prop => {
  return (
    <Router>
      <Switch>
        console.log(routes);
        {routes.map((route,key) => {
          return <Route path={route.path} component={route.component} key={key} />;
        })}
      </Switch>
    </Router>
  );
};

export default NavBar;
