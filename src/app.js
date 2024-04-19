import express from "express";
import morgan from "morgan";
import cors from "cors";
import productoRoutes from "./routers/producto.routes.js"

const app = express();

app.use(cors({
    origin: "http://localhost:5173",
}));
app.use(morgan('dev'));
// Middleware para parsear el cuerpo de la solicitud como JSON
app.use(express.json());
app.use("/api", productoRoutes);

export default app;
