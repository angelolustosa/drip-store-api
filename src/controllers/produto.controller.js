import moment from "moment";
import { Produto } from "../models/Produto.js";

export const produtoController = {
  criar: async (req, res) => {
    console.log("body", req.body);

    //Transformar o body em um objeto produto para ser salvo no banco
    const { nome, genero, preco, desconto, tipo } = req.body;
    const produto = { nome, genero, preco, desconto, tipo };

    if (!produto.nome) {
      res.status(422).json("A propriedade nome é obrigatória!");
      return;
    }

    const produtoBD = await Produto.create(produto);
    //console.log("produtoBD", produtoBD);
    res.status(201).json({
      data: produtoBD,
      msg: "Produto inserido com sucesso!",
    });
  },
  atualizar: async (req, res) => {
    const id = req.params.id;
    //Transformar o body em um objeto produto para ser salvo no banco
    const { nome, genero, preco, desconto, tipo } = req.body;
    const produto = { nome, genero, preco, desconto, tipo };

    /* 
     - Produto.updateOne({ _id: id }, produto); -> sem o await não efetiva a atualização. Assim, sendo necessário usar com o await

     - await Produto.updateOne({ _id: id }, produto); -> com o await ele retorna o objeto que confirma se o que foi enviado foi atualizado, no caso, a propriedade matchedCount. Obje completo abaixo:

       {
        acknowledged: true,
        modifiedCount: 0,
        upsertedId: null,
        upsertedCount: 0,
        matchedCount: 1
       }

        Usando o await o objeto atualizado não é retornado no response.

    */
    const updatedProduto = await Produto.updateOne({ _id: id }, produto);
    console.log('updatedProduto', updatedProduto);
    
    
    res.status(200).json({
        msg: `O produto ${produto.nome} foi atualizado com Sucesso!`
    })
  },
  buscarTodos: async (req, res) => {
    const produtos = await Produto.find();
    res.status(200).json(produtos);
  },
  buscarPorId: async (req, res) => {
    const id = req.params.id;

    if (!id) {
      res.status(422).json("Id não informado!");
    } else {
      const produto = await Produto.findById(id);
      res.status(200).json(produto);
    }
  },

  excluir: async (req, res) => {
    const id = req.params.id;

    const deletedProduto = await Produto.findByIdAndDelete(id)
    console.log('deletedProduto', deletedProduto)

    let dateDeleted = moment(new Date()).format('DD/MM/YYYY hh:mm:ss')
    
    res.status(200).json({
        data: dateDeleted,
        msg: `O produto foi excluido com Sucesso!`
    })
  },
};
