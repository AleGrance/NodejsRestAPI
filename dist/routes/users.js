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
      return res.json(error.errors);
    });
  });
  app.route('/users/:id').get(function (req, res) {
    Users.findOne({
      where: req.params
    }).then(function (result) {
      return res.json(result);
    })["catch"](function (error) {
      res.status(402).json({
        msg: error.message
      });
    });
  }).put(function (req, res) {
    Users.update(req.body, {
      where: req.params
    }).then(function (result) {
      return res.sendStatus(204);
    })["catch"](function (error) {
      res.status(412).json({
        msg: error.message
      });
    });
  })["delete"](function (req, res) {
    Users.destroy({
      where: req.params
    }).then(function (result) {
      return res.json(result);
    })["catch"](function (error) {
      res.status(412).json({
        msg: error.message
      });
    });
  });
};