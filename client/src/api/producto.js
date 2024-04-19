import axios from "axios";
import { Constantes } from "../config/config.js";

export const Producto = async function(request) {
    const respuesta = await axios.post(Constantes.URL_NO_NATIVE + 'Articulo', request);
    return respuesta.data;
};
