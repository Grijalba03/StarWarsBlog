import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <Link to="/">
          <img
            width={100}
            src="https://1.bp.blogspot.com/-tcIehETEdwo/VepHPyglOSI/AAAAAAAANBk/-8XH76kAqpY/s1600/Star-Wars-Logo.png"
            className="mx-2"
          />
        </Link>
        <div className="dropdown ml-auto">
          {/* Aqui va el dropdown */}

          <button className="dropdown-toggle btn btn-primary">Favorites</button>
        </div>
      </div>
    </nav>
  );
};
