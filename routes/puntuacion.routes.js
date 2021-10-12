import Router from "express";
import comercioController from "../controllers/comercioController.js";

const router = Router();

router.get("/", comercioController.puntuacion);

export default router;
