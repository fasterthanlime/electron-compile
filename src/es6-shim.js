var path = require('path');
var electronCompile = require('electron-compile-ftl');

var packageJson = require('./package.json');
let initScript = path.resolve(__dirname, packageJson.originalMain);
electronCompile.init(__dirname, initScript);
