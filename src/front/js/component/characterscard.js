import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const CharactersCard = ({ uid, name }) => {
  const { store, actions } = useContext(Context);
  return (
      <div className="col mx-1 px-1">
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={`https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
          <div className="card-body">
            <a
              href={`/characters/${uid}`}
              className="card-link btn btn-outline-primary"
              role="button"
            >
              Learn more
            </a>
            <button className="card-link btn btn-outline-warning" onClick={() => actions.addFav({label:name,uid:uid})}> 
              {" "}
              <i className="fa light fa-heart" role="button" />
            </button>
          </div>
        </div>
      </div>
  );
};
