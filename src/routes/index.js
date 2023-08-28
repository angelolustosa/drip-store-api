import express from "express";
import { router as produto } from "./produto.routes.js";
import { router as genero } from "./genero.routes.js";

const routes = (app) => {
  // endpoint inicial
  app.get("/", (req, res) =>  res.send({ msg: "Servidor rodando!", codigo: 200 }) );

  app.use(express.json(), produto, genero);
};

export default routes;