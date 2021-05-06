import express from 'express';
import consign from 'consign'; //para estructurar mejor el proyecto

const app = express();

consign({
    cwd: __dirname
})
    .include('libs/config.js')
    .then('db.js')
    .then('libs/middlewares.js') //se configura el puerto
    .then('routes') //se importan las rutas
    .then('libs/boot.js') // inicia el servidor
    .into(app) // se le pasa a todos ellos express por parametro