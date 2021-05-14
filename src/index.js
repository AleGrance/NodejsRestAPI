import express from 'express';
import consign from 'consign'; //para estructurar mejor el proyecto

const app = express();

//cross access
var allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
}
app.use(allowCrossDomain);

consign({
        cwd: __dirname
    })
    .include('libs/config.js')
    .then('db.js')
    .then('libs/middlewares.js') //se configura el puerto
    .then('routes') //se importan las rutas
    .then('libs/boot.js') // inicia el servidor
    .into(app) // se le pasa a todos ellos express por parametro