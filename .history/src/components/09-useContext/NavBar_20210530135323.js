import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="./">Home</Link>
        </li>
        <li>About</li>
        <li>Login</li>
      </ul>
    </nav>
  );
};
