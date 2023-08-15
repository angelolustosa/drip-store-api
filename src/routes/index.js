import express from "express";
import { routerProduto } from "./produtos.route.js";

export const routes = (app) => {
  app.get("/", (req, res) => {
    res.send("Servidor no Ar!");
  });

  app.use(express.json(), routerProduto);
};
