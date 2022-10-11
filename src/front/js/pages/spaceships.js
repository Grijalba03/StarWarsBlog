import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";

import { Context } from "../store/appContext";

export const Spaceships = () => {
  const { store, actions } = useContext(Context);
  const router = useParams();
  console.log(router);
  return <div className="container">Spaceships</div>;
};
