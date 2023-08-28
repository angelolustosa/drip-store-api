import mongoose, { Schema } from "mongoose";

const produtoSchema = new mongoose.Schema(
    {
        nome: String,
        genero: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'genero',
            required: true
        },
        preco: Number,
        desconto: Number,
        tipo: String,
    }
    /* , { timestamps: true } */
)

export const Produto = mongoose.model('produtos', produtoSchema)