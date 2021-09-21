import Router from "express";
import usuarioController from "../controllers/usuarioController.js";
const router = Router();

/**
 * @swagger
 * components:
 *  parameters:
 *      token:
 *          in: header
 *          name: token
 *          schema:
 *              type: string
 *              format: JWT
 *          required: true
 *          example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNDk1NjU4NmNkNjFiN2IwNGFmYmVlMCIsImlhdCI6MTYzMjI0NzIyOSwiZXhwIjoxNjMyMzMzNjI5fQ.17caPgAzooObo-TawOiO5xFmAfcOmpgTfUadkS-G9S0
 *      idUsuario:
 *          in: path
 *          name: id
 *          schema:
 *              type: string
 *          required: true
 *          example: 614a450d0efad6b3fcbc7911
 *          description: id del Usuario
 *  schemas:
 *      Usuario:
 *          type: object
 *          properties:
 *              _id:
 *                  type: string
 *              nombre:
 *                  type: string
 *              email:
 *                  type: string
 *              username:
 *                  type: string
 *              password:
 *                  type: string
 *          required:
 *              - nombre
 *              - email
 *              - username
 *              - password
 *          example:
 *              _id: 614956586cd61b7b04afbee0
 *              nombre: Antony Duarte
 *              email: antonyduarte@gmail.com
 *              username: antonyD96
 *              password: antonyD96
 */

/**
 * @swagger
 * tags:
 *  name: Usuarios
 *  description: Operaciones de usuarios
 */

/**
 * @swagger
 * /usuarios:
 *  get:
 *      summary: Devuelve el listado de usuarios
 *      tags: [Usuarios]
 *      parameters:
 *        - $ref: '#/components/parameters/token'
 *      responses:
 *          200:
 *              description: Lista de usuarios
 *              content:
 *                 application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Usuario'
 *          500:
 *              description: Ocurrio un error
 */
router.get("/", usuarioController.listado);

/**
 * @swagger
 * /usuarios/{id}:
 *  get:
 *      summary: Obtienen un Usuario mediante su id
 *      tags: [Usuarios]
 *      parameters:
 *        - $ref: '#/components/parameters/idUsuario'
 *        - $ref: '#/components/parameters/token'
 *      responses:
 *          200:
 *              description: La descripcion del usuario
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Usuario'
 *          404:
 *              description: El usuario no fue encontrado
 *          500:
 *              description: Ocurrio un error
 *
 */

router.get("/:id", usuarioController.uno);

/**
 * @swagger
 * /usuarios:
 *  post:
 *      summary: Crear un nuevo usuario
 *      tags: [Usuarios]
 *      parameters:
 *        - $ref: '#/components/parameters/token'
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Usuario'
 *      responses:
 *          201:
 *              description: El usuario se creo exitosamente
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Usuario'
 *          500:
 *              description: Ocurrio un error
 *
 */

router.post("/", usuarioController.registrar);

/**
 * @swagger
 * /usuarios/{id}:
 *  put:
 *      summary: Actualiza el usuario mediante su id
 *      tags: [Usuarios]
 *      parameters:
 *        - $ref: '#/components/parameters/idUsuario'
 *        - $ref: '#/components/parameters/token'
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Usuario'
 *      responses:
 *          200:
 *              description: El usuario se creo exitosamente
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Usuario'
 *          404:
 *              description: El usuario no fue encontrado
 *          500:
 *              description: Ocurrio un error
 */

router.put("/:id", usuarioController.actualizar);

/**
 * @swagger
 * /usuarios/{id}:
 *  delete:
 *      summary: Elimina un usuario mediante su id
 *      tags: [Usuarios]
 *      parameters:
 *        - $ref: '#/components/parameters/idUsuario'
 *        - $ref: '#/components/parameters/token'
 *      responses:
 *          200:
 *              description: El usuario se elimino exitosamente
 *          404:
 *              description: El usuario no fue encontrado
 *          500:
 *              description: Ocurrio un error
 *
 */

router.delete("/:id", usuarioController.eliminar);

export default router;
