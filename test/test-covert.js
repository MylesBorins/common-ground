'use strict';
var fs = require('fs');
var path = require('path');

var test = require('tape');

var convert = require('../lib/convert');

var examplePath = path.join(__dirname, 'fixtures', 'A.js');
var example = fs.readFileSync(examplePath, 'utf8');

var expectedPath = path.join(__dirname, 'fixtures', 'expected.js');
var expected = fs.readFileSync(expectedPath, 'utf8');

var expectedLicensePath = path.join(__dirname, 'fixtures', 'expectedLicense.js');
var expectedLicense = fs.readFileSync(expectedLicensePath, 'utf8');

var licensePath = path.join(__dirname, 'fixtures', 'license.txt');
var license = fs.readFileSync(licensePath, 'utf8');

test('convert:', function (t) {
  t.plan(1);
  var common = convert(example);
  t.equal(common, expected, 'it should have stripped require wrapper');
});

test('convert: passthrough', function (t) {
  t.plan(1);
  var common = convert(expected);
  t.equal(common, expected, 'it should have stripped require wrapper');
});

test('convert: prepended', function (t) {
  t.plan(1);
  var common = convert(example, license);
  t.equal(common, expectedLicense, 'it should have stripped require wrapper and include license');
});
