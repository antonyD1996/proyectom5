import Mongoose from "mongoose";

const permisoSchema = Mongoose.Schema({
  nombre: { type: String, required: true },
});

export default Mongoose.model("Permiso", permisoSchema);
