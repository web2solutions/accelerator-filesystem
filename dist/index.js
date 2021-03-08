"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Server = _interopRequireDefault(require("./Server.js"));

function cov_2an1wcgbxe() {
  var path = "/Users/admin/apps/accelerator-filesystem/src/index.js";
  var hash = "febf52712681a3a97ba99545e3e092bf0f3db44f";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/admin/apps/accelerator-filesystem/src/index.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 0
        },
        end: {
          line: 5,
          column: 4
        }
      },
      "1": {
        start: {
          line: 4,
          column: 26
        },
        end: {
          line: 4,
          column: 46
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 3,
            column: 1
          },
          end: {
            line: 3,
            column: 2
          }
        },
        loc: {
          start: {
            line: 3,
            column: 13
          },
          end: {
            line: 5,
            column: 1
          }
        },
        line: 3
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "febf52712681a3a97ba99545e3e092bf0f3db44f"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    cov_2an1wcgbxe = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_2an1wcgbxe();
cov_2an1wcgbxe().s[0]++;
(0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee() {
  var _ref2, error, server;

  return _regenerator["default"].wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          cov_2an1wcgbxe().f[0]++;
          cov_2an1wcgbxe().s[1]++;
          _context.next = 4;
          return _Server["default"].start();

        case 4:
          _ref2 = _context.sent;
          error = _ref2.error;
          server = _ref2.server;

        case 7:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}))();