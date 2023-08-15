import Produto from "../models/Produto.js"

class ProdutoController {

    static criar = async (req, res) => 

    }

    static buscarTodos = async (req, res) => {
        const produtos = await Produto.find()
        res.status(200).json(produtos)
    }

    static buscarPorId = async (req, res) => {
        const id = req.params.id

        if(!id) {
            res.status(422).json('Id não informado!')
        } else {
            const produto = await Produto.findById(id)
            res.status(200).json(produto)
        }
    }

    static atualizar = async (req, res) => {

    }

    static excluir = async (req, res) => {

    }
}
