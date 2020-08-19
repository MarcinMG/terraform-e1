'use strict'

exports.handler = function (event, context, callback) {
  var today = new Date();
  var h = today.getHours() + 2;
  var m = today.getMinutes();
  var s = today.getSeconds()
  if (h < 10) {h = "0" + h};
  if (m < 10) {m = "0" + m};
  if (s < 10) {s = "0" + s};
  var time = h + ":" + m + ":" + s;
  
  var response ={
    statusCode: 200,
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
    },
    body: time,
  }
  
  callback(null, response);
}