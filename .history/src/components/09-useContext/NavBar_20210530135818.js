import React from "react";
import { Link, NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    {/* <nav>
      <ul>
        <li>
          <Link to="./">Home</Link>
        </li>
        <li>
          <Link to="./about">About</Link>
        </li>
        <li>
          <Link to="./login">Login</Link>
        </li>
      </ul>
    </nav> */}

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
   
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Pricing</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

  );
};