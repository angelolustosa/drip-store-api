import mongoose, { Types } from "mongoose";

export const Produto = mongoose.model('Produto', {
    nome: String,
    genero: String,
    preco: Number,
    desconto: Number,
    tipo: String,
})