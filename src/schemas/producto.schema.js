import { z } from "zod";

export const productoSchema = z.object({
    ean: z.string({
        required_error: "Ean requerido"
    }).min(13, {
        message: "El ean debe ser superior a 13 caracteres."
    }),
    pais: z.string({
        required_error: "Pais requerido"
    }),
    tienda: z.string({
        required_error: "Tienda requerida"
    })
});