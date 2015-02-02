'use strict';

var os = require('os');
var path = require('path');
var fs = require('fs');

var convertDir = require('../lib/convertDir');
var mkdirp = require('mkdirp');
var rimraf = require('rimraf');
var test = require('tape');

var tempdir = path.join(os.tmpdir(), 'common-ground-' + Date.now());

test('convertDir: setup', function (t) {
  t.plan(1);
  mkdirp(tempdir, function (err) {
    t.error(err, 'folder should be created without an error');
  });
});

test('convertDir: convertDirs', function (t) {
  var inPath = path.join(__dirname, 'fixtures', 'src');
  var outPath = path.join(tempdir);
  var expected = {
    X: 0,
    Y: 1,
    Z: 2
  };

  t.plan(6);

  convertDir(inPath, outPath, function (err) {
    t.error(err);
    var A = require(path.join(outPath, 'A'));
    var B = require(path.join(outPath, 'B'));
    t.deepEqual(A.Direction, expected, 'We should be able to get data out of the object A.Direction');
    t.equal(A.hello(), 'hello', 'The Function A.hello should equal hello');
    t.deepEqual(B.Direction, expected, 'We should be able to get data out of the object A.Direction');
    t.equal(B.hello(), 'hello', 'The Function A.hello should equal hello');
    t.ok(fs.existsSync(path.join(outPath, 'C.css')), 'The css file should have also been copied over');
  });
});

test('convertDir: teardown', function (t) {
  t.plan(1);
  rimraf(tempdir, function (err) {
    t.error(err, 'folder should be removed without an error');
  });
});
