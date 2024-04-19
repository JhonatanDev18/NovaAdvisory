import app from "./app.js"
import {Constantes} from "./libs/config.js"
import { LogConsole } from './libs/logConsole.js';

app.listen(Constantes.PORT);
LogConsole.print("","Server en el puerto "+ Constantes.PORT,"");
console.log("Server en el puerto "+ Constantes.PORT)