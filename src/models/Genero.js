import mongoose, { Types } from "mongoose";

const Genero = mongoose.model('Genero', {
    nome: String,
    codigo: Number
})

export default Genero