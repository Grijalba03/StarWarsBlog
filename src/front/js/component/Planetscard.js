import React from "react";
import { Link } from "react-router-dom";

export const PlanetsCard = ({ uid, name }) => {
  return (
    <div className="col mx-1 px-1">
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={`https://starwars-visualguide.com/assets/img/planets/${uid}.jpg`}
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
            href={`/planets/${uid}`}
            className="card-link btn btn-outline-primary"
            role="button"
          >
            Learn more
          </a>
          <a href="#" className="card-link btn btn-outline-warning">
            {" "}
            <i className="fa regular fa-heart" role="button" />
          </a>
        </div>
      </div>
    </div>
  );
};
