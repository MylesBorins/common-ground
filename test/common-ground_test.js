'use strict';

var commonGround = require('../lib/common-ground.js');
var rimraf = require('rimraf');
var fs = require('fs');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolana/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.commonGround = {
  setUp: function(done) {
    // setup here
    commonGround.convert('test/fixtures/A.js', 'test/temp/A.js', function () {
      done();
    });
  },
  'convert': function(test) {
    test.expect(2);
    var A = require('./temp/A');
    
    var expected = {
      X: 0,
      Y: 1,
      Z: 2
    };
    //test here
    test.deepEqual(A.Direction, expected, 'We should be able to get data out of the object A.Direction');
    test.equal(A.hello(), 'hello', 'The Function A.hello should give us output of hello');
    test.done();
  }
};
