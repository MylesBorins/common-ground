'use strict';
var fs = require('fs');
var path = require('path');

var test = require('tape');

var convert = require('../lib/convert');

var examplePath = path.join(__dirname, 'fixtures', 'A.js');
var example = fs.readFileSync(examplePath, 'utf8');

var expectedPath = path.join(__dirname, 'fixtures', 'expected.js');
var expected = fs.readFileSync(expectedPath, 'utf8');

test('convert:', function (t) {
  t.plan(1);
  var common = convert(example);
  t.equal(common, expected, 'it should have stripped require wrapper');
});
