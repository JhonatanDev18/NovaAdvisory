import dotenv from "dotenv";
dotenv.config();

export class Constantes {
    //CONFIGURACIÓN SERVER
    static PORT = process.env.PORT;
    static URL_NO_NATIVE = process.env.URL_NO_NATIVE;

    //CONFIGURACIÓN MODULO log4js
    static LOG_TYPE = process.env.LOG_TYPE
    static LOG_EXTENSION = process.env.LOG_EXTENSION
    static LOG_BACKUP = process.env.LOG_BACKUP
    static LOG_COMPRESS = process.env.LOG_COMPRESS
    static LOG_MAXSIZE = process.env.LOG_MAXSIZE
    static LOG_BASE = process.env.LOG_BASE
}
