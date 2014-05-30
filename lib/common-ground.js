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

var getFile = function() {
  if (arguments.length === 0) {return null;}
  return 'awesome';
};

exports.getFile = getFile;
