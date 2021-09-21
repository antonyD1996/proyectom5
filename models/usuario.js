import Mongoose from "mongoose";

const usuarioSchema = Mongoose.Schema(
  {
    nombre: { type: String, required: true },
    email: { type: String, required: true },
    username: { type: String, require: true },
    password: { type: String, require: true },
  },
  {
    timestamps: true,
  }
);

export default Mongoose.model("Usuario", usuarioSchema);
