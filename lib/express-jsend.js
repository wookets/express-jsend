/*!
 * express-jsend
 * Copyright(c) 2013 Sean Wesenberg <wookets@gmail.com>
 * MIT Licensed
 */

/**
 * Module dependencies.
 */
var express = require('express')
  , res = express.response;


/**
 * Send a formatted jsend error response.
 *
 * @param {String|Error} obj
 * @param {String} message
 * @api public
 */
res.jerror = function(code, message) {
  if (code instanceof Error) {// allow us to pass in Error objects to simplify code elsewhere
    message = code.message;
    code = code.name;
  }
  this.send({status: 'error', code: code, message: message});
}

/**
 * Send a formatted jsend success response.
 *
 * @param {Object} data
 * @api public
 */
res.jsend = function(data) {
  this.send({status: 'success', data: data});
}
