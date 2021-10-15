import Mongoose from "mongoose";

export const roles = ["admin", "standar"];

const rolSchema = Mongoose.Schema({
  nombre: { type: String, required: true },
});

export default Mongoose.model("Rol", rolSchema);
