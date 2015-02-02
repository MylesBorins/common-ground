# common-ground [![Build Status](https://secure.travis-ci.org/TheAlphaNerd/common-ground.png?branch=master)](http://travis-ci.org/TheAlphaNerd/common-ground)

Common-ground can convert files using a Simplified CommonJS Wrapper to vanilla CommonJS lickity Split using Esprima and Escodegen

## Getting Started
Do you have AMD code that has a Simplified CommonJS Wrapper?

If you do it will look something like this

```
define(function(require, exports, module) {
    var a = require('a'),
        b = require('b');

    //Return the module value
    return function () {};
});
```

## Documentation
```
var commonGround = require('common-ground');
commonGround.write(pathToInput, pathToOutput, callback(err)); // Convert file from input path and write to output path
commonGround.convert(string); // return a string with anonymous define removed
commonGround.convertDir(pathToInput, pathToOutput, callback(err)); // Convert an entire directory recursively
```

##CLI
If this module is installed with the ```-g``` flag it will install a simple cli
```
Usage: common-ground [path to entry] [path to output(optional)]

Standard Options:

	-h Show this message
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_

## License
Copyright (c) 2014 Myles Borins. Licensed under the MPL 2.0 license.
