import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-default" role="navigation">
      <div className="container-fluid">
        <div className="navbar-header">
          <span className="navbar-brand">
            <span className="glyphicon glyphicon glyphicon-tree-deciduous"></span>
            React Is Fun
          </span>

          <ul className="nav navbar-nav">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
