"use strict";

var _Options = _interopRequireDefault(require("./Options"));

var _NextTest = require("./NextTest");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

describe('Options', function () {
  test('Options.options', function () {
    expect(Object.keys(_Options["default"].list).length).toBeGreaterThan(0);
  });
  test('addQueryString', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _NextTest.next)(function () {
              _Options["default"].set({});

              expect(_Options["default"].list).toEqual({});

              _Options["default"].addQueryString('options=flag1,-flag2,+flag3&flag4=four');

              expect(_Options["default"].list.flag1).toBeTruthy();
              expect(_Options["default"].list.flag2).toBeFalsy();
              expect(_Options["default"].list.flag3).toBeTruthy();
              expect(_Options["default"].list.flag4).toBe('four');
            });

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
  test('addQueryString with multiple and colliding options', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return (0, _NextTest.next)(function () {
              _Options["default"].set({});

              expect(_Options["default"].list).toEqual({});

              _Options["default"].addQueryString('flag5=true&options=flag1,-flag2,+flag3&flag4=four&options=-flag1,+flag2,-flag3,-flag4&flag5=five');

              expect(_Options["default"].list.flag1).toBeFalsy();
              expect(_Options["default"].list.flag2).toBeTruthy();
              expect(_Options["default"].list.flag3).toBeFalsy();
              expect(_Options["default"].list.flag4).toBeFalsy();
              expect(_Options["default"].list.flag5).toBe('five');
            });

          case 2:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })));
  test('set', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return (0, _NextTest.next)(function () {
              _Options["default"].set({});

              expect(_Options["default"].list).toEqual({});
            });

          case 2:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  })));
  test('read restores original init', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return (0, _NextTest.next)(function () {
              _Options["default"].init();

              var json = JSON.stringify(_Options["default"].list);

              _Options["default"].set({});

              expect(_Options["default"].list).toEqual({});

              _Options["default"].read();

              expect(_Options["default"].list).not.toEqual({});
              expect(JSON.stringify(_Options["default"].list)).toBe(json);
            });

          case 2:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  })));
  test('we can dynamically change options in code', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return (0, _NextTest.next)(function () {
              var json = JSON.stringify(_Options["default"].list);

              _Options["default"].update({
                dynamic: false
              });

              expect(_Options["default"].list.dynamic).toBeFalsy();

              _Options["default"].update({
                dynamic: true
              });

              expect(_Options["default"].list.dynamic).toBeTruthy();

              _Options["default"].read();

              expect(_Options["default"].list.dynamic).toBeTruthy();
              expect(JSON.stringify(_Options["default"].list)).not.toBe(json);
            });

          case 2:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  })));
  test('callbacks', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return (0, _NextTest.next)(function () {
              _Options["default"].onChange(function (options) {
                expect(options.foo).toBe('foo');
              });

              _Options["default"].onChange(function (options) {
                expect(options.bar).toBe('bar');
              });

              _Options["default"].update({
                foo: 'foo',
                bar: 'bar'
              });
            });

          case 2:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  })));
  (0, _NextTest.start)();
});