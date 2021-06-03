import React from "react";
import { Link, NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          useContext
        </a>

        <div className="collapse navbar-collapse" id="navbarNav">
          <NavLink className="active" aria-current="page" to="/">
            Home
          </NavLink>

          <NavLink className="active" to="/about">
            About
          </NavLink>

          <NavLink className="active" to="/login">
            Login
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
