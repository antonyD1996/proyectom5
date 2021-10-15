import Mongoose from "mongoose";
import rol from "./rol.js";

const usuarioSchema = Mongoose.Schema(
  {
    nombre: { type: String, required: true },
    email: { type: String, required: true },
    username: { type: String, require: true },
    password: { type: String, require: true },
    rol: { ref: "Rol", type: Mongoose.Schema.Types.ObjectId, require: true },
  },
  {
    timestamps: true,
  }
);

export default Mongoose.model("Usuario", usuarioSchema);
