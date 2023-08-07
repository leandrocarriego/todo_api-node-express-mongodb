import dotenv from 'dotenv';
dotenv.config();
import { connect } from "mongoose";

const dbURI = process.env.MONGODB_URI;

(async () => {
  try {
    const db = await connect(dbURI);

    console.log("Conexion exitosa a: ", db.connection.name);
    return db.connection.db;

  } catch (error) {
    console.error("Error al conectar con la base de datos:", error);
    throw error;
  }
})();