import axios from "axios";
import { Constantes } from "../libs/config.js"
import { LogConsole } from "../libs/logConsole.js";

export const Articulo = async (req, resP) => {

    let request = {
        "ean": req.body.ean,
        "pais": req.body.pais,
        "tienda": req.body.tienda
    }

    await axios.post(Constantes.URL_NO_NATIVE + '/Articulo', request)
                .then(function (res) {
                    LogConsole.print("","Producto Response:",JSON.stringify(res.data));
                    let response = {
                        'error': true,
                        'mensaje': "",
                        'producto': null
                    }

                    if (res.data.esValida) {
                        if (res.data["listado"].length == 0) {
                            respuesta.mensaje = "Producto no encontrado";
                            return res.send(respuesta)
                        }
                        response.producto = res.data["listado"][0];
                        response.error = false;
                        return resP.send(response)
                    } else {
                        if(typeof res.data.mensaje == 'undefined' || res.data.mensaje === null || res.data.mensaje === ''){
                            response.mensaje = "Producto no encontrado";
                        }else{
                            response.mensaje = res.data.mensaje;
                        }
                        return resP.send(response)
                    }
                }).catch(function (error) {
                    LogConsole.print("","Producto Error:",JSON.stringify(error));
                    return resP.send(error.message)
                });
}