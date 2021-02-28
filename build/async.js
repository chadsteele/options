"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.wait = wait;

function wait(milliseconds) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, milliseconds);
  });
}