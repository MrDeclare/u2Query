"use strict";

let submodule = require("lib/submodule.js");

let printMsg = function() {
  console.log("This is a message from the demo package");
};

module.exports = {printMsg, submodule};
