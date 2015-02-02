'use strict';
var path = require('path');
var extname = path.extname;

var ncp = require('ncp');
var through2 = require('through2');

var convert = require('./convert');

function convertDir(src, dest, cb) {
  ncp(src, dest, {
    transform: function (read, write, file) {
      read.pipe(through2(function (chunk, enc, callback) {
        if (extname(file.name) === '.js') {
          chunk = convert(chunk.toString());
        }
        this.push(chunk);
        return callback();
      })).pipe(write);
    }
  }, cb);
}

module.exports = convertDir;
