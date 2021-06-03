import React from "react";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          useContext
        </a>

        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav">
            <NavLink
              exact
              activeClassName="active"
              className="nav-item nav-link"
              aria-current="page"
              to="/"
            >
              Home
            </NavLink>

            <NavLink
              exact
              activeClassName="active"
              className="nav-item nav-link"
              to="/about"
            >
              About
            </NavLink>

            <NavLink
              exact
              activeClassName="active"
              className="nav-item nav-link"
              to="/login"
            >
              Login
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};
