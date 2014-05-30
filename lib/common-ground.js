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

var convert = function (filename, path, cb) {
  // Async read file and parse it with esprima
  var parseFile = function (done) {
    fs.readFile(filename, 'utf8', function (err, data) {
      done(err, esprima.parse(data));
    });
  };
  
  // Remove define and re generate code
  var removeDefine = function (parsed, done) {
    var body = parsed.body[0];
    var args = body.expression.arguments[0];
    parsed.body = args.body.body;
    done(null, parsed);
  };
  
  // 
  var writeFile = function(commonParsed, done) {
    fs.writeFile(path, escodegen.generate(commonParsed), done);
  };
  
  async.waterfall([
    parseFile,
    removeDefine,
    writeFile
  ], cb);
};

exports.convert = convert;
