"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.set('port', process.env.PORT || 48000);
app.listen(app.get('port'), function () {
  console.log('Che rembo on port', app.get('port'));
});