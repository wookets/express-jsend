
var express = require('express');
var res = express.response;


res.jsend = function(data) {
  this.send({status: 'success', data: data});
}


res.jfail = function(code, message) {
  if (code instanceof Error) {
    this.send({status: 'fail', code: code.name, message: code.message});
    return;
  }
  if ((code instanceof String || code instanceof Number) && message) {
    this.send({status: 'fail', code: code, message: message});
    return;
  }
  if (code instanceof String || code instanceof Number) {
    this.send({status: 'fail', message: code});
    return;
  }
  this.send({status: 'fail', data: code});
}


res.jerror = function(code, message) {
  if (code instanceof Error) {// allow us to pass in Error objects to simplify code elsewhere
    this.send({status: 'error', code: code.name, message: code.message});
    return;
  }
  if ((code instanceof String || code instanceof Number) && message) {
    this.send({status: 'error', code: code, message: message});
    return;
  }
  if (code instanceof String || code instanceof Number) {
    this.send({status: 'error', message: code});
    return;
  }
  this.send({status: 'error', data: code});
}
