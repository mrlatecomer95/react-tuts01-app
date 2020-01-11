import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h2>Home Page</h2>
      <NavLink to="/admin" activeClassName="active">Admin</NavLink>
    </div>
  );
};

export default Home;
