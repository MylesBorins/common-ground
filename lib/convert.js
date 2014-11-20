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

function convert(string) {
  var ast = esprima.parse(string);
  var body = ast.body[0];
  var args = body.expression.arguments[0];
  ast.body = args.body.body;

  return escodegen.generate(ast);
}

module.exports = convert;
