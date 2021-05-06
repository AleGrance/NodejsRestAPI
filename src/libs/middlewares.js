import express from 'express';

module.exports = app => {
  
    //settings
    app.set('port', process.env.PORT || 24000);

    //middlewares

    app.use(express.json())
};