import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  console.log(store.favorites);
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

          <button
            className="btn btn-primary border-warning dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Favorites
          </button>

          <ul className="dropdown-menu text-center">
            {store.favorites.map((element, i) => {
              /* dentro del li tengo que poner un button llmando a la action remove fav del flux pasandole por parametrs el uid que sale de element.uid */
              return <li> {element.label}</li>;
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};
