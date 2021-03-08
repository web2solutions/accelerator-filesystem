'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _classPrivateFieldGet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldGet"));

var _classPrivateFieldSet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldSet"));

var _express = _interopRequireDefault(require("express"));

var _expressGraphql = require("express-graphql");

var _graphql = require("graphql");

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

function cov_2y8hmsase() {
  var path = "/Users/admin/apps/accelerator-filesystem/src/Server.js";
  var hash = "55b7cecb4263342ffa8d4073f926593faccc90a9";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/admin/apps/accelerator-filesystem/src/Server.js",
    statementMap: {
      "0": {
        start: {
          line: 9,
          column: 13
        },
        end: {
          line: 9,
          column: 42
        }
      },
      "1": {
        start: {
          line: 10,
          column: 13
        },
        end: {
          line: 10,
          column: 37
        }
      },
      "2": {
        start: {
          line: 26,
          column: 17
        },
        end: {
          line: 26,
          column: 21
        }
      },
      "3": {
        start: {
          line: 27,
          column: 4
        },
        end: {
          line: 27,
          column: 26
        }
      },
      "4": {
        start: {
          line: 28,
          column: 4
        },
        end: {
          line: 28,
          column: 25
        }
      },
      "5": {
        start: {
          line: 29,
          column: 4
        },
        end: {
          line: 33,
          column: 5
        }
      },
      "6": {
        start: {
          line: 31,
          column: 8
        },
        end: {
          line: 31,
          column: 56
        }
      },
      "7": {
        start: {
          line: 34,
          column: 4
        },
        end: {
          line: 34,
          column: 25
        }
      },
      "8": {
        start: {
          line: 42,
          column: 4
        },
        end: {
          line: 42,
          column: 39
        }
      },
      "9": {
        start: {
          line: 54,
          column: 4
        },
        end: {
          line: 54,
          column: 22
        }
      },
      "10": {
        start: {
          line: 55,
          column: 4
        },
        end: {
          line: 55,
          column: 19
        }
      },
      "11": {
        start: {
          line: 65,
          column: 4
        },
        end: {
          line: 79,
          column: 6
        }
      },
      "12": {
        start: {
          line: 66,
          column: 6
        },
        end: {
          line: 68,
          column: 7
        }
      },
      "13": {
        start: {
          line: 67,
          column: 8
        },
        end: {
          line: 67,
          column: 24
        }
      },
      "14": {
        start: {
          line: 69,
          column: 6
        },
        end: {
          line: 69,
          column: 30
        }
      },
      "15": {
        start: {
          line: 70,
          column: 6
        },
        end: {
          line: 70,
          column: 24
        }
      },
      "16": {
        start: {
          line: 71,
          column: 6
        },
        end: {
          line: 78,
          column: 8
        }
      },
      "17": {
        start: {
          line: 72,
          column: 8
        },
        end: {
          line: 72,
          column: 28
        }
      },
      "18": {
        start: {
          line: 73,
          column: 8
        },
        end: {
          line: 73,
          column: 17
        }
      },
      "19": {
        start: {
          line: 74,
          column: 8
        },
        end: {
          line: 74,
          column: 61
        }
      },
      "20": {
        start: {
          line: 76,
          column: 8
        },
        end: {
          line: 76,
          column: 19
        }
      },
      "21": {
        start: {
          line: 77,
          column: 8
        },
        end: {
          line: 77,
          column: 23
        }
      },
      "22": {
        start: {
          line: 83,
          column: 4
        },
        end: {
          line: 83,
          column: 21
        }
      },
      "23": {
        start: {
          line: 98,
          column: 16
        },
        end: {
          line: 98,
          column: 20
        }
      },
      "24": {
        start: {
          line: 99,
          column: 17
        },
        end: {
          line: 99,
          column: 29
        }
      },
      "25": {
        start: {
          line: 100,
          column: 4
        },
        end: {
          line: 107,
          column: 5
        }
      },
      "26": {
        start: {
          line: 101,
          column: 6
        },
        end: {
          line: 101,
          column: 25
        }
      },
      "27": {
        start: {
          line: 103,
          column: 6
        },
        end: {
          line: 103,
          column: 19
        }
      },
      "28": {
        start: {
          line: 104,
          column: 6
        },
        end: {
          line: 104,
          column: 15
        }
      },
      "29": {
        start: {
          line: 105,
          column: 6
        },
        end: {
          line: 105,
          column: 22
        }
      },
      "30": {
        start: {
          line: 106,
          column: 6
        },
        end: {
          line: 106,
          column: 40
        }
      },
      "31": {
        start: {
          line: 108,
          column: 4
        },
        end: {
          line: 108,
          column: 28
        }
      },
      "32": {
        start: {
          line: 118,
          column: 4
        },
        end: {
          line: 127,
          column: 6
        }
      },
      "33": {
        start: {
          line: 140,
          column: 15
        },
        end: {
          line: 140,
          column: 41
        }
      },
      "34": {
        start: {
          line: 141,
          column: 16
        },
        end: {
          line: 141,
          column: 18
        }
      },
      "35": {
        start: {
          line: 142,
          column: 4
        },
        end: {
          line: 144,
          column: 5
        }
      },
      "36": {
        start: {
          line: 143,
          column: 6
        },
        end: {
          line: 143,
          column: 42
        }
      },
      "37": {
        start: {
          line: 145,
          column: 27
        },
        end: {
          line: 145,
          column: 53
        }
      },
      "38": {
        start: {
          line: 146,
          column: 4
        },
        end: {
          line: 155,
          column: 5
        }
      },
      "39": {
        start: {
          line: 146,
          column: 17
        },
        end: {
          line: 146,
          column: 18
        }
      },
      "40": {
        start: {
          line: 147,
          column: 17
        },
        end: {
          line: 147,
          column: 25
        }
      },
      "41": {
        start: {
          line: 148,
          column: 21
        },
        end: {
          line: 148,
          column: 38
        }
      },
      "42": {
        start: {
          line: 149,
          column: 23
        },
        end: {
          line: 149,
          column: 44
        }
      },
      "43": {
        start: {
          line: 150,
          column: 6
        },
        end: {
          line: 154,
          column: 8
        }
      },
      "44": {
        start: {
          line: 157,
          column: 4
        },
        end: {
          line: 157,
          column: 14
        }
      },
      "45": {
        start: {
          line: 169,
          column: 4
        },
        end: {
          line: 176,
          column: 6
        }
      },
      "46": {
        start: {
          line: 170,
          column: 6
        },
        end: {
          line: 175,
          column: 8
        }
      },
      "47": {
        start: {
          line: 171,
          column: 8
        },
        end: {
          line: 173,
          column: 9
        }
      },
      "48": {
        start: {
          line: 172,
          column: 10
        },
        end: {
          line: 172,
          column: 48
        }
      },
      "49": {
        start: {
          line: 174,
          column: 8
        },
        end: {
          line: 174,
          column: 39
        }
      },
      "50": {
        start: {
          line: 186,
          column: 4
        },
        end: {
          line: 189,
          column: 7
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 25,
            column: 2
          },
          end: {
            line: 25,
            column: 3
          }
        },
        loc: {
          start: {
            line: 25,
            column: 16
          },
          end: {
            line: 35,
            column: 3
          }
        },
        line: 25
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 30,
            column: 13
          },
          end: {
            line: 30,
            column: 14
          }
        },
        loc: {
          start: {
            line: 30,
            column: 27
          },
          end: {
            line: 32,
            column: 7
          }
        },
        line: 30
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 64,
            column: 2
          },
          end: {
            line: 64,
            column: 3
          }
        },
        loc: {
          start: {
            line: 64,
            column: 9
          },
          end: {
            line: 80,
            column: 3
          }
        },
        line: 64
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 65,
            column: 23
          },
          end: {
            line: 65,
            column: 24
          }
        },
        loc: {
          start: {
            line: 65,
            column: 44
          },
          end: {
            line: 79,
            column: 5
          }
        },
        line: 65
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 71,
            column: 36
          },
          end: {
            line: 71,
            column: 37
          }
        },
        loc: {
          start: {
            line: 71,
            column: 42
          },
          end: {
            line: 75,
            column: 7
          }
        },
        line: 71
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 75,
            column: 21
          },
          end: {
            line: 75,
            column: 22
          }
        },
        loc: {
          start: {
            line: 75,
            column: 36
          },
          end: {
            line: 78,
            column: 7
          }
        },
        line: 75
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 82,
            column: 2
          },
          end: {
            line: 82,
            column: 3
          }
        },
        loc: {
          start: {
            line: 82,
            column: 12
          },
          end: {
            line: 84,
            column: 3
          }
        },
        line: 82
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 97,
            column: 2
          },
          end: {
            line: 97,
            column: 3
          }
        },
        loc: {
          start: {
            line: 97,
            column: 23
          },
          end: {
            line: 109,
            column: 3
          }
        },
        line: 97
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 169,
            column: 23
          },
          end: {
            line: 169,
            column: 24
          }
        },
        loc: {
          start: {
            line: 169,
            column: 44
          },
          end: {
            line: 176,
            column: 5
          }
        },
        line: 169
      },
      "9": {
        name: "(anonymous_9)",
        decl: {
          start: {
            line: 170,
            column: 22
          },
          end: {
            line: 170,
            column: 23
          }
        },
        loc: {
          start: {
            line: 170,
            column: 40
          },
          end: {
            line: 175,
            column: 7
          }
        },
        line: 170
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 9,
            column: 13
          },
          end: {
            line: 9,
            column: 42
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 9,
            column: 13
          },
          end: {
            line: 9,
            column: 29
          }
        }, {
          start: {
            line: 9,
            column: 33
          },
          end: {
            line: 9,
            column: 42
          }
        }],
        line: 9
      },
      "1": {
        loc: {
          start: {
            line: 10,
            column: 13
          },
          end: {
            line: 10,
            column: 37
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 10,
            column: 13
          },
          end: {
            line: 10,
            column: 29
          }
        }, {
          start: {
            line: 10,
            column: 33
          },
          end: {
            line: 10,
            column: 37
          }
        }],
        line: 10
      },
      "2": {
        loc: {
          start: {
            line: 30,
            column: 14
          },
          end: {
            line: 30,
            column: 22
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 30,
            column: 20
          },
          end: {
            line: 30,
            column: 22
          }
        }],
        line: 30
      },
      "3": {
        loc: {
          start: {
            line: 66,
            column: 6
          },
          end: {
            line: 68,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 66,
            column: 6
          },
          end: {
            line: 68,
            column: 7
          }
        }, {
          start: {
            line: 66,
            column: 6
          },
          end: {
            line: 68,
            column: 7
          }
        }],
        line: 66
      },
      "4": {
        loc: {
          start: {
            line: 139,
            column: 23
          },
          end: {
            line: 139,
            column: 32
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 139,
            column: 30
          },
          end: {
            line: 139,
            column: 32
          }
        }],
        line: 139
      },
      "5": {
        loc: {
          start: {
            line: 142,
            column: 4
          },
          end: {
            line: 144,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 142,
            column: 4
          },
          end: {
            line: 144,
            column: 5
          }
        }, {
          start: {
            line: 142,
            column: 4
          },
          end: {
            line: 144,
            column: 5
          }
        }],
        line: 142
      },
      "6": {
        loc: {
          start: {
            line: 171,
            column: 8
          },
          end: {
            line: 173,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 171,
            column: 8
          },
          end: {
            line: 173,
            column: 9
          }
        }, {
          start: {
            line: 171,
            column: 8
          },
          end: {
            line: 173,
            column: 9
          }
        }],
        line: 171
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0,
      "22": 0,
      "23": 0,
      "24": 0,
      "25": 0,
      "26": 0,
      "27": 0,
      "28": 0,
      "29": 0,
      "30": 0,
      "31": 0,
      "32": 0,
      "33": 0,
      "34": 0,
      "35": 0,
      "36": 0,
      "37": 0,
      "38": 0,
      "39": 0,
      "40": 0,
      "41": 0,
      "42": 0,
      "43": 0,
      "44": 0,
      "45": 0,
      "46": 0,
      "47": 0,
      "48": 0,
      "49": 0,
      "50": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0],
      "3": [0, 0],
      "4": [0],
      "5": [0, 0],
      "6": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "55b7cecb4263342ffa8d4073f926593faccc90a9"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    cov_2y8hmsase = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_2y8hmsase();

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

var HOST = (cov_2y8hmsase().s[0]++, (cov_2y8hmsase().b[0][0]++, process.env.HOST) || (cov_2y8hmsase().b[0][1]++, '0.0.0.0'));
var PORT = (cov_2y8hmsase().s[1]++, (cov_2y8hmsase().b[1][0]++, process.env.PORT) || (cov_2y8hmsase().b[1][1]++, 4000));

var _app = new WeakMap();

var _schema = new WeakMap();

var _root = new WeakMap();

var _inited = new WeakMap();

var _setErrorHandler = new WeakSet();

var _errorHandler = new WeakSet();

var _setAPISchema = new WeakSet();

var _getDirectory = new WeakSet();

var _readDir = new WeakSet();

var _addRouter = new WeakSet();

var Server = function () {
  function Server() {
    (0, _classCallCheck2["default"])(this, Server);

    _addRouter.add(this);

    _readDir.add(this);

    _getDirectory.add(this);

    _setAPISchema.add(this);

    _errorHandler.add(this);

    _setErrorHandler.add(this);

    _app.set(this, {
      writable: true,
      value: void 0
    });

    _schema.set(this, {
      writable: true,
      value: void 0
    });

    _root.set(this, {
      writable: true,
      value: void 0
    });

    _inited.set(this, {
      writable: true,
      value: void 0
    });

    cov_2y8hmsase().f[0]++;
    var self = (cov_2y8hmsase().s[2]++, this);
    cov_2y8hmsase().s[3]++;
    (0, _classPrivateFieldSet2["default"])(this, _app, (0, _express["default"])());
    cov_2y8hmsase().s[4]++;

    _classPrivateMethodGet(this, _setAPISchema, _setAPISchema2).call(this);

    cov_2y8hmsase().s[5]++;
    (0, _classPrivateFieldSet2["default"])(this, _root, {
      files: function files() {
        var arg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (cov_2y8hmsase().b[2][0]++, {});
        cov_2y8hmsase().f[1]++;
        cov_2y8hmsase().s[6]++;
        return Promise.resolve(_classPrivateMethodGet(self, _getDirectory, _getDirectory2).call(self, arg));
      }
    });
    cov_2y8hmsase().s[7]++;
    (0, _classPrivateFieldSet2["default"])(this, _inited, false);
  }

  (0, _createClass2["default"])(Server, [{
    key: "init",
    value: function init() {
      var _this = this;

      cov_2y8hmsase().f[2]++;
      cov_2y8hmsase().s[11]++;
      return new Promise(function (resolve, reject) {
        cov_2y8hmsase().f[3]++;
        cov_2y8hmsase().s[12]++;

        if ((0, _classPrivateFieldGet2["default"])(_this, _inited)) {
          cov_2y8hmsase().b[3][0]++;
          cov_2y8hmsase().s[13]++;
          return resolve();
        } else {
          cov_2y8hmsase().b[3][1]++;
        }

        cov_2y8hmsase().s[14]++;

        _classPrivateMethodGet(_this, _setErrorHandler, _setErrorHandler2).call(_this);

        cov_2y8hmsase().s[15]++;

        _classPrivateMethodGet(_this, _addRouter, _addRouter2).call(_this);

        cov_2y8hmsase().s[16]++;
        (0, _classPrivateFieldGet2["default"])(_this, _app).listen(PORT, HOST, function () {
          cov_2y8hmsase().f[4]++;
          cov_2y8hmsase().s[17]++;
          (0, _classPrivateFieldSet2["default"])(_this, _inited, true);
          cov_2y8hmsase().s[18]++;
          resolve();
          cov_2y8hmsase().s[19]++;
          console.log("app running on ".concat(HOST, ":").concat(PORT, "/graphql"));
        }).on('error', function (err) {
          cov_2y8hmsase().f[5]++;
          cov_2y8hmsase().s[20]++;
          reject(err);
          cov_2y8hmsase().s[21]++;
          process.exit(0);
        });
      });
    }
  }, {
    key: "app",
    get: function get() {
      cov_2y8hmsase().f[6]++;
      cov_2y8hmsase().s[22]++;
      return (0, _classPrivateFieldGet2["default"])(this, _app);
    }
  }], [{
    key: "start",
    value: function () {
      var _start = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee() {
        var error, server;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                cov_2y8hmsase().f[7]++;
                error = (cov_2y8hmsase().s[23]++, null);
                server = (cov_2y8hmsase().s[24]++, new Server());
                cov_2y8hmsase().s[25]++;
                _context.prev = 4;
                cov_2y8hmsase().s[26]++;
                _context.next = 8;
                return server.init();

              case 8:
                _context.next = 20;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](4);
                cov_2y8hmsase().s[27]++;
                server = null;
                cov_2y8hmsase().s[28]++;
                error = _context.t0;
                cov_2y8hmsase().s[29]++;
                console.error(_context.t0);
                cov_2y8hmsase().s[30]++;
                throw new Error({
                  error: error,
                  server: server
                });

              case 20:
                cov_2y8hmsase().s[31]++;
                return _context.abrupt("return", {
                  error: error,
                  server: server
                });

              case 22:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[4, 10]]);
      }));

      function start() {
        return _start.apply(this, arguments);
      }

      return start;
    }()
  }]);
  return Server;
}();

exports["default"] = Server;

var _setErrorHandler2 = function _setErrorHandler2() {
  cov_2y8hmsase().s[8]++;
  (0, _classPrivateFieldGet2["default"])(this, _app).use(_classPrivateMethodGet(this, _errorHandler, _errorHandler2));
};

var _errorHandler2 = function _errorHandler2(error, req, res, next) {
  cov_2y8hmsase().s[9]++;
  console.log(error);
  cov_2y8hmsase().s[10]++;
  process.exit(0);
};

var _setAPISchema2 = function _setAPISchema2() {
  cov_2y8hmsase().s[32]++;
  (0, _classPrivateFieldSet2["default"])(this, _schema, (0, _graphql.buildSchema)("\n      type Query {\n          files(dir: String): [File]\n      },\n      type File {\n          name: String\n          size: Float!\n          fullPath: String\n      }\n    "));
};

var _getDirectory2 = function () {
  var _getDirectory3 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee2() {
    var args,
        _dir,
        all,
        _ref,
        error,
        files,
        x,
        name,
        fullPath,
        _ref2,
        size,
        _args2 = arguments;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            args = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : (cov_2y8hmsase().b[4][0]++, {});
            _dir = (cov_2y8hmsase().s[33]++, _path["default"].join(__dirname, '..'));
            all = (cov_2y8hmsase().s[34]++, []);
            cov_2y8hmsase().s[35]++;

            if (args.dir) {
              cov_2y8hmsase().b[5][0]++;
              cov_2y8hmsase().s[36]++;
              _dir = _path["default"].resolve("./".concat(args.dir));
            } else {
              cov_2y8hmsase().b[5][1]++;
            }

            cov_2y8hmsase().s[37]++;
            _context2.next = 8;
            return _classPrivateMethodGet(this, _readDir, _readDir2).call(this, _dir);

          case 8:
            _ref = _context2.sent;
            error = _ref.error;
            files = _ref.files;
            cov_2y8hmsase().s[38]++;

            for (x = (cov_2y8hmsase().s[39]++, 0); x < files.length; x++) {
              name = (cov_2y8hmsase().s[40]++, files[x]);
              fullPath = (cov_2y8hmsase().s[41]++, "".concat(_dir, "/").concat(name));
              _ref2 = (cov_2y8hmsase().s[42]++, _fs["default"].statSync(fullPath)), size = _ref2.size;
              cov_2y8hmsase().s[43]++;
              all.push({
                name: name,
                size: size.toFixed(4),
                fullPath: fullPath
              });
            }

            cov_2y8hmsase().s[44]++;
            return _context2.abrupt("return", all);

          case 15:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  function _getDirectory2() {
    return _getDirectory3.apply(this, arguments);
  }

  return _getDirectory2;
}();

var _readDir2 = function _readDir2(dir) {
  cov_2y8hmsase().s[45]++;
  return new Promise(function (resolve, reject) {
    cov_2y8hmsase().f[8]++;
    cov_2y8hmsase().s[46]++;

    _fs["default"].readdir(dir, function (error, files) {
      cov_2y8hmsase().f[9]++;
      cov_2y8hmsase().s[47]++;

      if (error) {
        cov_2y8hmsase().b[6][0]++;
        cov_2y8hmsase().s[48]++;
        return resolve({
          error: error,
          files: null
        });
      } else {
        cov_2y8hmsase().b[6][1]++;
      }

      cov_2y8hmsase().s[49]++;
      resolve({
        error: null,
        files: files
      });
    });
  });
};

var _addRouter2 = function _addRouter2() {
  cov_2y8hmsase().s[50]++;
  (0, _classPrivateFieldGet2["default"])(this, _app).use('/graphql', (0, _expressGraphql.graphqlHTTP)({
    schema: (0, _classPrivateFieldGet2["default"])(this, _schema),
    rootValue: (0, _classPrivateFieldGet2["default"])(this, _root)
  }));
};