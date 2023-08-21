import mongoose, { Types } from "mongoose";

export const Produto = mongoose.model('Produto', {
    nome: String,
    genero: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Genero',
        required: true
    },
    preco: Number,
    desconto: Number,
    tipo: String,
})