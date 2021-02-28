"use strict";

var _OptionsLaunchDarkly = _interopRequireDefault(require("./OptionsLaunchDarkly"));

var _async = require("./async");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

describe('OptionsLaunchDarkly', function () {
  test('allFlags', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _async.wait)(500);

          case 2:
            if (_OptionsLaunchDarkly["default"].allFlags) {
              _context.next = 5;
              break;
            }

            _context.next = 5;
            return (0, _async.wait)(1000);

          case 5:
            expect(_OptionsLaunchDarkly["default"].allFlags).toBeDefined();
            expect(_OptionsLaunchDarkly["default"].allFlags).not.toEqual({});

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
});