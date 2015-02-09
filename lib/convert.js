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

function convert(string, prepend) {
  if (!prepend) {
    prepend = '';
  }
  var ast = esprima.parse(string, {
      tolerant: true
  });

  var body = ast.body[0];

  if(!body.expression || !body.expression.callee || body.expression.callee.name !== 'define') {
    return prepend + escodegen.generate(ast);
  }

  var args = body.expression.arguments[0];
  ast.body = args.body.body;

  return prepend + escodegen.generate(ast);
}

module.exports = convert;
