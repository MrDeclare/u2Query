"use strict";

var _type = require("./type.js");
var isWindow = require("./isWindow.js");

//@see https://github.com/jquery/jquery/blob/master/src/core.js:461
var isArrayLike = function( obj ) {

    // Support: real iOS 8.2 only (not reproducible in simulator)
    // `in` check used to prevent JIT error (gh-2145)
    // hasOwn isn't used here due to false negatives
    // regarding Nodelist length in IE
    var length = !!obj && "length" in obj && obj.length,
        type = _type( obj );

    if ( type === "function" || isWindow( obj ) ) {
        return false;
    }

    return type === "array" || length === 0 ||
        typeof length === "number" && length > 0 && ( length - 1 ) in obj;
};

module.exports = isArrayLike;
