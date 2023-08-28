import mongoose, { Schema } from "mongoose";

const generoSchema = new Schema(
    {
        nome: { type: String, required: true },
        codigo: {
            type: Number,
            unique: true,
            required: true
        }
    }
)

const Genero = mongoose.model('genero', generoSchema)

export { Genero, generoSchema } 