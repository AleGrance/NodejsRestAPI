"use strict";

var _express = _interopRequireDefault(require("express"));

var _consign = _interopRequireDefault(require("consign"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//para estructurar mejor el proyecto
var app = (0, _express["default"])();
(0, _consign["default"])({
  cwd: __dirname
}).include('libs/config.js').then('db.js').then('libs/middlewares.js') //se configura el puerto
.then('routes') //se importan las rutas
.then('libs/boot.js') // inicia el servidor
.into(app); // se le pasa a todos ellos express por parametro