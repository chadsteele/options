"use strict";

var _async = require("./async");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

test('wait', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
  var sattled1, sattled2;
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          jest.useFakeTimers();
          sattled1 = false;
          sattled2 = false;
          (0, _async.wait)(600).then(function () {
            return sattled1 = true;
          });
          (0, _async.wait)(500).then(function () {
            return sattled2 = true;
          });
          jest.runTimersToTime(550);
          return _context.abrupt("return", Promise.resolve().then(function () {
            expect(sattled1).toBe(false);
            expect(sattled2).toBe(true);
          }));

        case 7:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
})), 700);