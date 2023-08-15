import express from 'express'
import { produtoController } from '../controllers/produto.controller.js'

export const routerProduto = express.Router()

routerProduto
    .post('/produto', produtoController.criar)
    .put('/produto/:id', produtoController.atualizar)
    .get('/produtos', produtoController.buscarTodos)
    .delete('/produto/:id', produtoController.excluir)