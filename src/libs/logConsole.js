import log4js from 'log4js';
import { Constantes } from './config.js';

log4js.configure({
      appenders:{
        multi: 
        {
            type: Constantes.LOG_TYPE, base: Constantes.LOG_BASE, property: "categoryName", 
            extension: Constantes.LOG_EXTENSION, maxLogSize: Constantes.LOG_MAXSIZE, backup: Constantes.LOG_BACKUP, 
            compress: Constantes.LOG_COMPRESS
        }
      },
      categories:{
        default:{
          appenders: ["multi"],
          level: 'debug'
        }
      }
    });

export class LogConsole {
    static print(usuario, titulo, msj) {
        let tiempo = new Date();
        let ano = tiempo.getFullYear();
        let mes = ("0" + (tiempo.getMonth() + 1)).slice(-2);
        let dia = ("0" + tiempo.getDate()).slice(-2);
        
        let logger = log4js.getLogger("Log-"+ ano + "-" + mes + "-" + dia);
        if(usuario != undefined && usuario.length > 0){
            logger.info("Usuario: "+ usuario);
        }
        logger.info(titulo);
        logger.info(msj);
        logger.info("==========");
    } 
}