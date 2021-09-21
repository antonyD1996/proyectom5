import Express from "express";
import Jwt from "jsonwebtoken";
import llave from "./llaveSecreta.js";

const verificacion = Express.Router();

verificacion.use((req, res, next) => {
  let token = req.headers.token || req.headers["authorization"];

  if (!token) {
    res.status(401).send({ mensaje: "No autorizado" });
    return;
  }
  if (token.startsWith("Bearer ")) {
    token = token.slice(7, token.length);
  }
  if (token) {
    Jwt.verify(token, llave.llave, (error, decoded) => {
      if (error) {
        res.send({ mensaje: "Token invalido" });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  }
});

export default verificacion;
