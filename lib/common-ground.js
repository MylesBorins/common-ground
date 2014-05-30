/*
 * common-ground
 * https://github.com/TheAlphaNerd/common-ground
 *
 * Copyright (c) 2014 Myles Borins
 * Licensed under the MPL 2.0 license.
 */
'use strict';

var esprima = require('esprima');
var escodegen = require('escodegen');
var fs = require('fs');
var async = require('async');

var convert = function(filename, path, cb) {
  async.waterfall([
    function(done) {
      fs.readFile(filename, 'utf8', done);
    },
    function (data, done) {
      var parsed = esprima.parse(data);
      var body = parsed.body[0];
      var args = body.expression.arguments[0];
      parsed.body = args.body.body;
      done(null, escodegen.generate(parsed));
    },
    function (data, done) {
      fs.writeFile(path, data, done);
    }
  ], cb);
};

exports.convert = convert;
