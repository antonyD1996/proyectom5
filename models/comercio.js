import Mongoose from "mongoose";

const comercioSchema = Mongoose.Schema(
  {
    latitud: { type: Number, required: true },
    longitud: { type: Number, required: true },
    nombre: { type: String, required: true },
    nombrePropietario: { type: String, required: true },
    telefono: { type: String, required: true },
    categoria: { type: String, required: true },
    descripcion: { type: String, required: true },
    direccion: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export default Mongoose.model("Comercio", comercioSchema);
