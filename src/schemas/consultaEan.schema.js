import { z } from "zod";

export const consultaEanSchema = z.object({
    ean: z.string({
        required_error: "Ean requerido"
    }).min(13, {
        message: "El ean debe ser superior a 13 caracteres."
    })
});