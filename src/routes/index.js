import express from "express";
import { router } from "./produto.routes.js";

const routes = (app) => {
  // endpoint inicial
  app.get("/", (req, res) =>  res.send({ msg: "Servidor rodando!", codigo: 200 }) );

  app.use(express.json(), router);
};

export default routes;