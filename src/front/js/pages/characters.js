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
      paginas characters name: {store.character?.name}
      <p>name: {store.character?.name} </p>
      <p>mass: {store.character?.mass} </p>
    </div>
  );
};
