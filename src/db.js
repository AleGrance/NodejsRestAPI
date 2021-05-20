import Sequelize from 'sequelize';
import fs from 'fs';
import path from 'path';

let db = null;

module.exports = app => {

    const config = app.libs.config; //usando consign se puede obtener el archivo config que esta dentro de libs
    console.log(config);

    if (!db) {
        const sequelize = new Sequelize(
            config.database,
            config.username,
            config.password,
            config.params
            
        );

        db = {
            sequelize,
            Sequelize,
            models: {}
        };

        const dir = path.join(__dirname, '/models');
        fs.readdirSync(dir).forEach(filename => {
            const modelDir = path.join(dir, filename);
            //const model = sequelize['import'](modelDir);
            //const model = require(modelDir)(sequelize);
            const model = require(modelDir)(sequelize, Sequelize.DataTypes)
            db.models[model.name] = model;
        });

        //se llama a la funcion asociate de cada model
        Object.keys(db.models).forEach(key => {
            db.models[key].associate(db.models);
        });
    }

    return db;

};