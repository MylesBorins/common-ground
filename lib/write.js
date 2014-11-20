'use strict';

var fs = require('fs');

var async = require('async');

var convert = require('./convert');

function write(inFile, outFile, cb) {
  function readFile(done) {
    fs.readFile(inFile, 'utf8', function (err, file) {
      if (err) { return done(err); }
      return done(null, convert(file));
    });
  }

  function writeFile(string, done) {
    fs.writeFile(outFile, string, done);
  }

  async.waterfall([
    readFile,
    writeFile
  ], cb);
}

module.exports = write;
