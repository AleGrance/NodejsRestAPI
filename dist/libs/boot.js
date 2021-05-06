"use strict";

module.exports = function (app) {
  //metodo sync que crea las tablas
  app.db.sequelize.sync().then(function () {
    app.listen(app.get('port'), function () {
      console.log('Server on port', app.get('port'));
    });
  });
};