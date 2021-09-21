import Mongoose from "mongoose";

Mongoose.connect(
  "mongodb+srv://antony:andaduper2096@cluster0.0hgy6.mongodb.net/emprendeapp?retryWrites=true&w=majority"
)
  .then((db) => console.log("Ya en linea XD"))
  .catch((err) => console.log("No se conecta :("));

export default Mongoose;
