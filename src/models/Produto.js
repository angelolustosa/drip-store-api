import mongoose, { Types } from "mongoose";

export default Produto = mongoose.model('Produto', {
    nome: String,
    genero: String,
    preco: Number,
    desconto: Number,
    tipo: String,
})