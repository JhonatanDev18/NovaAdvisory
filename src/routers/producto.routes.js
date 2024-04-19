import { Router } from "express";
import { Articulo } from "../controllers/producto.controller.js";
import { validateSchema } from "../middlewares/validator.middleware.js"
import { productoSchema } from "../schemas/producto.schema.js"

const router = Router();

router.post('/articulo', validateSchema(productoSchema), Articulo);

export default router;