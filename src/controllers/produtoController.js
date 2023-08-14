import { Produto } from "../models/Produto.js"

export class ProdutoController {

    static criar = async (req, res) => {
        const { nome, genero, preco, desconto, tipo } = req.body;
        const produto = { nome, genero, preco, desconto, tipo };

        const produtoBD = await Produto.create(produto);

        res.status(201).json({
            data: produtoBD,
            msg: "Produto criado com sucesso!",
        });

    }

    static buscarTodos = async (req, res) => {
        const produtos = await Produto.find()
        res.status(200).json(produtos)
    }

    static buscarPorId = async (req, res) => {
        const id = req.params.id

        if (!id) {
            res.status(422).json('Id não informado!')
        } else {
            const produto = await Produto.findById(id)
            res.status(200).json(produto)
        }
    }

    static atualizar = async (req, res) => {
        const id = req.params.id;

        const { nome, genero, preco, desconto, tipo } = req.body;
        const produto = { nome, genero, preco, desconto, tipo };

        const updatedProduto = await Produto.updateOne({ _id: id }, produto);
        console.log(updatedProduto)

        if (updatedProduto.matchedCount === 0) {
            res.status(422).json(`Produto ${produto.nome} não foi atualizado!`);
        }

        res.status(204).json("Produto atualizado com sucesso!");
    };

    static excluir = async (req, res) => {
        const id = req.params.id;

        if (id.length < 24 || id.length > 24) {
            res.status(422).json({ message: "Tamanho inválido do Id!" });
            return;
        }

        //Busca o produto, antes de deletar, com as suas informações
        const produtoBD = await Produto.findOne({ _id: id });

        if (!produtoBD) {
            res.status(422).json({ message: "Produto não encontrado!" });
            return;
        }

        //Deleta o usuário do banco
        await Produto.deleteOne({ _id: produtoBD.id });

        //Pego a data atual, new Date(), e coloco no formato 27/07/2023 20:06:55
        let date = moment(new Date()).format("DD/MM/YYYY hh:mm:ss");

        //Mensagem para exibir
        let msg = `O produto ${produtoBD.nome} foi excluído com sucesso às ${date} !`;
        res.status(200).json({ msg });
    };
}
