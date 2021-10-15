import roles from "../models/rol.js";
import Usuario from "../models/usuario.js";
import Rol from "./../models/rol.js";

const autenticador = {};

autenticador.isAdmin = async (req, res, next) => {
  const user = await Usuario.findById(req.decoded.id).populate("rol").exec();
  console.log(user);
  const roles = await Rol.find({ _id: { $in: user.rol._id } });
  console.log(roles);

  for (let index = 0; index < roles.length; index++) {
    if (roles[index].nombre === "admin") {
      next();
      return;
    }
  }
  return res.status(403).json({ mensaje: "Admin role required" });
};

export default autenticador;
