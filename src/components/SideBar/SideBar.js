import React from "react";


import ListItemText from "@material-ui/core/ListItemText";
import { NavLink } from "react-router-dom";
import { ListItem,List } from "@material-ui/core";

const SideBar = props => {
  const { routes } = props;
  var links = (
    <List>
      {routes.map((prop, key) => {
        return (
          <NavLink key={key} activeClassName="active" to={prop.layout + prop.path}>
              <ListItem>
                  <ListItemText primary={prop.name}/>
              </ListItem>
          </NavLink>
        );
      })}
    </List>
  );
  return <div>{links}</div>;
};


export default SideBar;
