"use strict";

module.exports = function (app) {
  var Users = app.db.models.Users;
  app.route('/users').get(function (req, res) {
    Users.findAll().then(function (result) {
      return res.json(result);
    })["catch"](function (error) {
      res.status(402).json({
        msg: error.menssage
      });
    });
  }).post(function (req, res) {
    Users.create(req.body).then(function (result) {
      return res.json(result);
    })["catch"](function (error) {
      res.status(402).json({
        msg: error.menssage
      });
    });
  });
  app.route('/users/:id').get(function (req, res) {
    Users.findOne({
      where: req.params
    }).then(function (result) {
      return res.json(result);
    })["catch"](function (error) {
      res.status(402).json({
        msg: error.menssage
      });
    });
  });
};