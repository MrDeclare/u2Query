"use strict";

//@see https://github.com/jquery/jquery/blob/master/src/var/class2type.js
var class2type = {};

//@see https://github.com/jquery/jquery/blob/master/src/core.js:456
var classTypesString = "Boolean Number String Function Array Date RegExp Object Error Symbol";
var classTypesArray = classTypesString.split( " " );
var name;

//possible solution, but we want to be es5 free here
//classTypesArray.forEach(classTypesArray, function( i, name ) {
//	class2type[ "[object " + name + "]" ] = name.toLowerCase();
//});

for (var i = 0; i < classTypesArray.length; i++) {
    name = classTypesArray[i];
    class2type[ "[object " + name + "]" ] = name.toLowerCase();
}

module.exports = class2type;
