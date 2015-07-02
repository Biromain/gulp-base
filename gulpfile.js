// Configuration
global.config = require('./gulp/config.js');

// Require
// Load all the tasks !
//require('coffee-script/register'); //Only for coffee gulp
var requireDir = require('require-dir');
var dir = requireDir('./gulp/tasks');
