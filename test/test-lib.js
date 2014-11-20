'use strict';

var test = require('tape');
var commonGround = require('../lib');

test('common-ground: loads', function (t) {
  t.plan(1);
  t.ok(commonGround, 'it should require without an error');
});

test('common-ground: exports', function (t) {
  t.plan(2);
  t.ok(commonGround.convert, 'it should export the convert method');
  t.ok(commonGround.write, 'it should export the write method');
});
