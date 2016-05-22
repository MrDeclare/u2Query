"use strict";

var isWindow = function( obj ) {
    return obj != null && obj === obj.window;
};

module.exports = isWindow;
