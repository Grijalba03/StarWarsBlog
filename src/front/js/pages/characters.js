import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";

import { Context } from "../store/appContext";

export const Characters = () => {
  const { store, actions } = useContext(Context);
  const router = useParams();
  console.log(store.character);

  useEffect(() => {
    if (router.theid) {
      actions.getCharacter(router.theid);
    }
  }, [router.theid]);

  return (
    <div className="container">
      <div className="col-3">
        <img
          src={`https://starwars-visualguide.com/assets/img/characters/${router?.theid}.jpg`}
          className="card-img-top w-75"
          alt="..."
        />
      </div>
      <p>name: {store.character?.name} </p>
      <p>gender: {store.character?.gender} </p>
      <p>height: {store.character?.height} </p>
      <p>eye_color: {store.character?.eye_color} </p>
      <p>hair_color: {store.character?.hair_color} </p>
      <p>skin_color: {store.character?.skin_color} </p>
      <p>mass: {store.character?.mass} </p>
      <p>birth_year: {store.character?.birth_year} </p>
      <p>homeworld: {store.character?.homeworld} </p>
      <p>description: {store.character?.descripcion} </p>
      <p>created: {store.character?.created} </p>
      <p>edited: {store.character?.edited} </p>
    </div>
  );
};
