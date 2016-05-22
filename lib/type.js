"use strict";

var class2type = require("./config/class2type.js");

//@see https://github.com/jquery/jquery/blob/master/src/core.js:262
var type = function( obj ) {
    if ( obj == null ) {
        return obj + "";
    }

    // Support: Android <=2.3 only (functionish RegExp)
    return typeof obj === "object" || typeof obj === "function" ?
        class2type[ toString.call( obj ) ] || "object" :
        typeof obj;
};

module.exports = type;
