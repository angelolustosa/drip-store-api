import express from "express";
import { ProdutoController } from "../controllers/produtoController.js";

export const router = express.Router();

router
    .get("/produtos", ProdutoController.buscarTodos)
    .get("/produto/:id", ProdutoController.buscarPorId)
    .get('/produto/busca', ProdutoController.buscarPorGenero)
    .post("/produto", ProdutoController.criar)
    .put("/produto/:id", ProdutoController.atualizar)
    .delete("/produto/:id", ProdutoController.excluir)