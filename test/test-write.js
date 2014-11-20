'use strict';

var os = require('os');
var path = require('path');

var write = require('../lib/write');
var mkdirp = require('mkdirp');
var rimraf = require('rimraf');
var test = require('tape');

var tempdir = path.join(os.tmpdir(), 'common-ground-' + Date.now());

test('common-ground: write setup', function (t) {
  t.plan(1);
  mkdirp(tempdir, function (err) {
    t.error(err, 'folder should be created without an error');
  });
});

test('common-ground: write', function (t) {
  var inFile = path.join(__dirname, 'fixtures', 'A.js');
  var outFile = path.join(tempdir, 'A.js');
  var expected = {
    X: 0,
    Y: 1,
    Z: 2
  };

  t.plan(3);

  write(inFile, outFile, function (err) {
    t.error(err);
    var A = require(outFile);
    t.deepEqual(A.Direction, expected, 'We should be able to get data out of the object A.Direction');
    t.equal(A.hello(), 'hello', 'The Function A.hello should equal hello');
  });
});

test('common-ground: write teardown', function (t) {
  t.plan(1);
  rimraf(tempdir, function (err) {
    t.error(err, 'folder should be removed without an error');
  });
});
