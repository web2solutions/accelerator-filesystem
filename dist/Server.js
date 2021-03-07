'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _classPrivateFieldGet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldGet"));

var _classPrivateFieldSet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldSet"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _express = _interopRequireDefault(require("express"));

var _expressGraphql = require("express-graphql");

var _graphql = require("graphql");

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

function cov_2y8hmsase() {
  var path = "/Users/admin/apps/accelerator-filesystem/src/Server.js";
  var hash = "ac32796e22e29d08bac0a77352bae1d1c6d03021";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/admin/apps/accelerator-filesystem/src/Server.js",
    statementMap: {
      "0": {
        start: {
          line: 13,
          column: 24
        },
        end: {
          line: 20,
          column: 4
        }
      },
      "1": {
        start: {
          line: 14,
          column: 14
        },
        end: {
          line: 18,
          column: 3
        }
      },
      "2": {
        start: {
          line: 16,
          column: 6
        },
        end: {
          line: 16,
          column: 26
        }
      },
      "3": {
        start: {
          line: 19,
          column: 2
        },
        end: {
          line: 19,
          column: 12
        }
      },
      "4": {
        start: {
          line: 23,
          column: 6
        },
        end: {
          line: 23,
          column: 13
        }
      },
      "5": {
        start: {
          line: 24,
          column: 6
        },
        end: {
          line: 24,
          column: 41
        }
      },
      "6": {
        start: {
          line: 42,
          column: 17
        },
        end: {
          line: 42,
          column: 21
        }
      },
      "7": {
        start: {
          line: 43,
          column: 4
        },
        end: {
          line: 43,
          column: 26
        }
      },
      "8": {
        start: {
          line: 44,
          column: 4
        },
        end: {
          line: 44,
          column: 25
        }
      },
      "9": {
        start: {
          line: 45,
          column: 4
        },
        end: {
          line: 51,
          column: 5
        }
      },
      "10": {
        start: {
          line: 47,
          column: 8
        },
        end: {
          line: 47,
          column: 41
        }
      },
      "11": {
        start: {
          line: 48,
          column: 8
        },
        end: {
          line: 48,
          column: 55
        }
      },
      "12": {
        start: {
          line: 52,
          column: 4
        },
        end: {
          line: 52,
          column: 25
        }
      },
      "13": {
        start: {
          line: 60,
          column: 4
        },
        end: {
          line: 60,
          column: 39
        }
      },
      "14": {
        start: {
          line: 72,
          column: 4
        },
        end: {
          line: 72,
          column: 22
        }
      },
      "15": {
        start: {
          line: 73,
          column: 4
        },
        end: {
          line: 73,
          column: 19
        }
      },
      "16": {
        start: {
          line: 83,
          column: 4
        },
        end: {
          line: 97,
          column: 6
        }
      },
      "17": {
        start: {
          line: 84,
          column: 6
        },
        end: {
          line: 86,
          column: 7
        }
      },
      "18": {
        start: {
          line: 85,
          column: 8
        },
        end: {
          line: 85,
          column: 24
        }
      },
      "19": {
        start: {
          line: 87,
          column: 6
        },
        end: {
          line: 87,
          column: 30
        }
      },
      "20": {
        start: {
          line: 88,
          column: 6
        },
        end: {
          line: 88,
          column: 24
        }
      },
      "21": {
        start: {
          line: 89,
          column: 6
        },
        end: {
          line: 96,
          column: 8
        }
      },
      "22": {
        start: {
          line: 90,
          column: 8
        },
        end: {
          line: 90,
          column: 28
        }
      },
      "23": {
        start: {
          line: 91,
          column: 8
        },
        end: {
          line: 91,
          column: 17
        }
      },
      "24": {
        start: {
          line: 92,
          column: 8
        },
        end: {
          line: 92,
          column: 75
        }
      },
      "25": {
        start: {
          line: 94,
          column: 8
        },
        end: {
          line: 94,
          column: 19
        }
      },
      "26": {
        start: {
          line: 95,
          column: 8
        },
        end: {
          line: 95,
          column: 23
        }
      },
      "27": {
        start: {
          line: 112,
          column: 16
        },
        end: {
          line: 112,
          column: 20
        }
      },
      "28": {
        start: {
          line: 113,
          column: 17
        },
        end: {
          line: 113,
          column: 29
        }
      },
      "29": {
        start: {
          line: 114,
          column: 4
        },
        end: {
          line: 121,
          column: 5
        }
      },
      "30": {
        start: {
          line: 115,
          column: 6
        },
        end: {
          line: 115,
          column: 25
        }
      },
      "31": {
        start: {
          line: 117,
          column: 6
        },
        end: {
          line: 117,
          column: 19
        }
      },
      "32": {
        start: {
          line: 118,
          column: 6
        },
        end: {
          line: 118,
          column: 15
        }
      },
      "33": {
        start: {
          line: 119,
          column: 6
        },
        end: {
          line: 119,
          column: 22
        }
      },
      "34": {
        start: {
          line: 120,
          column: 6
        },
        end: {
          line: 120,
          column: 40
        }
      },
      "35": {
        start: {
          line: 122,
          column: 4
        },
        end: {
          line: 122,
          column: 28
        }
      },
      "36": {
        start: {
          line: 132,
          column: 4
        },
        end: {
          line: 141,
          column: 6
        }
      },
      "37": {
        start: {
          line: 152,
          column: 15
        },
        end: {
          line: 152,
          column: 24
        }
      },
      "38": {
        start: {
          line: 153,
          column: 16
        },
        end: {
          line: 153,
          column: 18
        }
      },
      "39": {
        start: {
          line: 154,
          column: 4
        },
        end: {
          line: 156,
          column: 5
        }
      },
      "40": {
        start: {
          line: 155,
          column: 6
        },
        end: {
          line: 155,
          column: 42
        }
      },
      "41": {
        start: {
          line: 157,
          column: 27
        },
        end: {
          line: 157,
          column: 53
        }
      },
      "42": {
        start: {
          line: 158,
          column: 4
        },
        end: {
          line: 167,
          column: 5
        }
      },
      "43": {
        start: {
          line: 158,
          column: 17
        },
        end: {
          line: 158,
          column: 18
        }
      },
      "44": {
        start: {
          line: 159,
          column: 17
        },
        end: {
          line: 159,
          column: 25
        }
      },
      "45": {
        start: {
          line: 160,
          column: 21
        },
        end: {
          line: 160,
          column: 38
        }
      },
      "46": {
        start: {
          line: 161,
          column: 23
        },
        end: {
          line: 161,
          column: 44
        }
      },
      "47": {
        start: {
          line: 162,
          column: 6
        },
        end: {
          line: 166,
          column: 8
        }
      },
      "48": {
        start: {
          line: 169,
          column: 4
        },
        end: {
          line: 169,
          column: 14
        }
      },
      "49": {
        start: {
          line: 173,
          column: 4
        },
        end: {
          line: 180,
          column: 6
        }
      },
      "50": {
        start: {
          line: 174,
          column: 6
        },
        end: {
          line: 179,
          column: 8
        }
      },
      "51": {
        start: {
          line: 175,
          column: 8
        },
        end: {
          line: 177,
          column: 9
        }
      },
      "52": {
        start: {
          line: 176,
          column: 10
        },
        end: {
          line: 176,
          column: 48
        }
      },
      "53": {
        start: {
          line: 178,
          column: 8
        },
        end: {
          line: 178,
          column: 39
        }
      },
      "54": {
        start: {
          line: 185,
          column: 4
        },
        end: {
          line: 188,
          column: 7
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 13,
            column: 25
          },
          end: {
            line: 13,
            column: 26
          }
        },
        loc: {
          start: {
            line: 13,
            column: 31
          },
          end: {
            line: 20,
            column: 1
          }
        },
        line: 13
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 15,
            column: 10
          },
          end: {
            line: 15,
            column: 11
          }
        },
        loc: {
          start: {
            line: 15,
            column: 24
          },
          end: {
            line: 17,
            column: 5
          }
        },
        line: 15
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 22,
            column: 2
          },
          end: {
            line: 22,
            column: 3
          }
        },
        loc: {
          start: {
            line: 22,
            column: 19
          },
          end: {
            line: 25,
            column: 3
          }
        },
        line: 22
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 41,
            column: 2
          },
          end: {
            line: 41,
            column: 3
          }
        },
        loc: {
          start: {
            line: 41,
            column: 16
          },
          end: {
            line: 53,
            column: 3
          }
        },
        line: 41
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 46,
            column: 13
          },
          end: {
            line: 46,
            column: 14
          }
        },
        loc: {
          start: {
            line: 46,
            column: 27
          },
          end: {
            line: 49,
            column: 7
          }
        },
        line: 46
      },
      "5": {
        name: "(anonymous_5)",
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
            column: 9
          },
          end: {
            line: 98,
            column: 3
          }
        },
        line: 82
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 83,
            column: 23
          },
          end: {
            line: 83,
            column: 24
          }
        },
        loc: {
          start: {
            line: 83,
            column: 44
          },
          end: {
            line: 97,
            column: 5
          }
        },
        line: 83
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 89,
            column: 42
          },
          end: {
            line: 89,
            column: 43
          }
        },
        loc: {
          start: {
            line: 89,
            column: 48
          },
          end: {
            line: 93,
            column: 7
          }
        },
        line: 89
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 93,
            column: 21
          },
          end: {
            line: 93,
            column: 22
          }
        },
        loc: {
          start: {
            line: 93,
            column: 36
          },
          end: {
            line: 96,
            column: 7
          }
        },
        line: 93
      },
      "9": {
        name: "(anonymous_9)",
        decl: {
          start: {
            line: 111,
            column: 2
          },
          end: {
            line: 111,
            column: 3
          }
        },
        loc: {
          start: {
            line: 111,
            column: 23
          },
          end: {
            line: 123,
            column: 3
          }
        },
        line: 111
      },
      "10": {
        name: "(anonymous_10)",
        decl: {
          start: {
            line: 173,
            column: 23
          },
          end: {
            line: 173,
            column: 24
          }
        },
        loc: {
          start: {
            line: 173,
            column: 44
          },
          end: {
            line: 180,
            column: 5
          }
        },
        line: 173
      },
      "11": {
        name: "(anonymous_11)",
        decl: {
          start: {
            line: 174,
            column: 22
          },
          end: {
            line: 174,
            column: 23
          }
        },
        loc: {
          start: {
            line: 174,
            column: 40
          },
          end: {
            line: 179,
            column: 7
          }
        },
        line: 174
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 46,
            column: 14
          },
          end: {
            line: 46,
            column: 22
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 46,
            column: 20
          },
          end: {
            line: 46,
            column: 22
          }
        }],
        line: 46
      },
      "1": {
        loc: {
          start: {
            line: 84,
            column: 6
          },
          end: {
            line: 86,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 84,
            column: 6
          },
          end: {
            line: 86,
            column: 7
          }
        }, {
          start: {
            line: 84,
            column: 6
          },
          end: {
            line: 86,
            column: 7
          }
        }],
        line: 84
      },
      "2": {
        loc: {
          start: {
            line: 151,
            column: 22
          },
          end: {
            line: 151,
            column: 31
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 151,
            column: 29
          },
          end: {
            line: 151,
            column: 31
          }
        }],
        line: 151
      },
      "3": {
        loc: {
          start: {
            line: 154,
            column: 4
          },
          end: {
            line: 156,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 154,
            column: 4
          },
          end: {
            line: 156,
            column: 5
          }
        }, {
          start: {
            line: 154,
            column: 4
          },
          end: {
            line: 156,
            column: 5
          }
        }],
        line: 154
      },
      "4": {
        loc: {
          start: {
            line: 175,
            column: 8
          },
          end: {
            line: 177,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 175,
            column: 8
          },
          end: {
            line: 177,
            column: 9
          }
        }, {
          start: {
            line: 175,
            column: 8
          },
          end: {
            line: 177,
            column: 9
          }
        }],
        line: 175
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
      "50": 0,
      "51": 0,
      "52": 0,
      "53": 0,
      "54": 0
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
      "9": 0,
      "10": 0,
      "11": 0
    },
    b: {
      "0": [0],
      "1": [0, 0],
      "2": [0],
      "3": [0, 0],
      "4": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "ac32796e22e29d08bac0a77352bae1d1c6d03021"
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

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var FilesController = (cov_2y8hmsase().s[0]++, function () {
  cov_2y8hmsase().f[0]++;
  var api = (cov_2y8hmsase().s[1]++, {
    list: function list(req, res) {
      cov_2y8hmsase().f[1]++;
      cov_2y8hmsase().s[2]++;
      res.json({
        ok: true
      });
    }
  });
  cov_2y8hmsase().s[3]++;
  return api;
}());

var FilesRouter = function (_express$Router) {
  (0, _inherits2["default"])(FilesRouter, _express$Router);

  var _super = _createSuper(FilesRouter);

  function FilesRouter(app) {
    var _this;

    (0, _classCallCheck2["default"])(this, FilesRouter);
    cov_2y8hmsase().f[2]++;
    cov_2y8hmsase().s[4]++;
    _this = _super.call(this);
    cov_2y8hmsase().s[5]++;

    _this.get('/', FilesController.list);

    return _this;
  }

  return FilesRouter;
}((_express["default"].Router));

var _app = new WeakMap();

var _schema = new WeakMap();

var _root = new WeakMap();

var _inited = new WeakMap();

var _setErrorHandler = new WeakSet();

var _errorHandler = new WeakSet();

var _setAPISchema = new WeakSet();

var _getDirectry = new WeakSet();

var _readDir = new WeakSet();

var _addRouter = new WeakSet();

var Server = function () {
  function Server() {
    (0, _classCallCheck2["default"])(this, Server);

    _addRouter.add(this);

    _readDir.add(this);

    _getDirectry.add(this);

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

    cov_2y8hmsase().f[3]++;
    var self = (cov_2y8hmsase().s[6]++, this);
    cov_2y8hmsase().s[7]++;
    (0, _classPrivateFieldSet2["default"])(this, _app, (0, _express["default"])());
    cov_2y8hmsase().s[8]++;

    _classPrivateMethodGet(this, _setAPISchema, _setAPISchema2).call(this);

    cov_2y8hmsase().s[9]++;
    (0, _classPrivateFieldSet2["default"])(this, _root, {
      files: function files() {
        var arg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (cov_2y8hmsase().b[0][0]++, {});
        cov_2y8hmsase().f[4]++;
        cov_2y8hmsase().s[10]++;
        console.log('xxxxxxxxxxxxx', arg);
        cov_2y8hmsase().s[11]++;
        return Promise.resolve(_classPrivateMethodGet(self, _getDirectry, _getDirectry2).call(self, arg));
      }
    });
    cov_2y8hmsase().s[12]++;
    (0, _classPrivateFieldSet2["default"])(this, _inited, false);
  }

  (0, _createClass2["default"])(Server, [{
    key: "init",
    value: function init() {
      var _this2 = this;

      cov_2y8hmsase().f[5]++;
      cov_2y8hmsase().s[16]++;
      return new Promise(function (resolve, reject) {
        cov_2y8hmsase().f[6]++;
        cov_2y8hmsase().s[17]++;

        if ((0, _classPrivateFieldGet2["default"])(_this2, _inited)) {
          cov_2y8hmsase().b[1][0]++;
          cov_2y8hmsase().s[18]++;
          return resolve();
        } else {
          cov_2y8hmsase().b[1][1]++;
        }

        cov_2y8hmsase().s[19]++;

        _classPrivateMethodGet(_this2, _setErrorHandler, _setErrorHandler2).call(_this2);

        cov_2y8hmsase().s[20]++;

        _classPrivateMethodGet(_this2, _addRouter, _addRouter2).call(_this2);

        cov_2y8hmsase().s[21]++;
        (0, _classPrivateFieldGet2["default"])(_this2, _app).listen(process.env.PORT, function () {
          cov_2y8hmsase().f[7]++;
          cov_2y8hmsase().s[22]++;
          (0, _classPrivateFieldSet2["default"])(_this2, _inited, true);
          cov_2y8hmsase().s[23]++;
          resolve();
          cov_2y8hmsase().s[24]++;
          console.log("app running on localhost:".concat(process.env.PORT, "/graphql"));
        }).on('error', function (err) {
          cov_2y8hmsase().f[8]++;
          cov_2y8hmsase().s[25]++;
          reject(err);
          cov_2y8hmsase().s[26]++;
          process.exit(0);
        });
      });
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
                cov_2y8hmsase().f[9]++;
                error = (cov_2y8hmsase().s[27]++, null);
                server = (cov_2y8hmsase().s[28]++, new Server());
                cov_2y8hmsase().s[29]++;
                _context.prev = 4;
                cov_2y8hmsase().s[30]++;
                _context.next = 8;
                return server.init();

              case 8:
                _context.next = 20;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](4);
                cov_2y8hmsase().s[31]++;
                server = null;
                cov_2y8hmsase().s[32]++;
                error = _context.t0;
                cov_2y8hmsase().s[33]++;
                console.error(_context.t0);
                cov_2y8hmsase().s[34]++;
                throw new Error({
                  error: error,
                  server: server
                });

              case 20:
                cov_2y8hmsase().s[35]++;
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
  cov_2y8hmsase().s[13]++;
  (0, _classPrivateFieldGet2["default"])(this, _app).use(_classPrivateMethodGet(this, _errorHandler, _errorHandler2));
};

var _errorHandler2 = function _errorHandler2(error, req, res, next) {
  cov_2y8hmsase().s[14]++;
  console.log(error);
  cov_2y8hmsase().s[15]++;
  process.exit(0);
};

var _setAPISchema2 = function _setAPISchema2() {
  cov_2y8hmsase().s[36]++;
  (0, _classPrivateFieldSet2["default"])(this, _schema, (0, _graphql.buildSchema)("\n      type Query {\n          files(dir: String): [File]\n      },\n      type File {\n          name: String\n          size: Float!\n          fullPath: String\n      }\n    "));
};

var _getDirectry2 = function () {
  var _getDirectry3 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee2() {
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
            args = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : (cov_2y8hmsase().b[2][0]++, {});
            _dir = (cov_2y8hmsase().s[37]++, __dirname);
            all = (cov_2y8hmsase().s[38]++, []);
            cov_2y8hmsase().s[39]++;

            if (args.dir) {
              cov_2y8hmsase().b[3][0]++;
              cov_2y8hmsase().s[40]++;
              _dir = _path["default"].resolve("./".concat(args.dir));
            } else {
              cov_2y8hmsase().b[3][1]++;
            }

            cov_2y8hmsase().s[41]++;
            _context2.next = 8;
            return _classPrivateMethodGet(this, _readDir, _readDir2).call(this, _dir);

          case 8:
            _ref = _context2.sent;
            error = _ref.error;
            files = _ref.files;
            cov_2y8hmsase().s[42]++;

            for (x = (cov_2y8hmsase().s[43]++, 0); x < files.length; x++) {
              name = (cov_2y8hmsase().s[44]++, files[x]);
              fullPath = (cov_2y8hmsase().s[45]++, "".concat(_dir, "/").concat(name));
              _ref2 = (cov_2y8hmsase().s[46]++, _fs["default"].statSync(fullPath)), size = _ref2.size;
              cov_2y8hmsase().s[47]++;
              all.push({
                name: name,
                size: size.toFixed(4),
                fullPath: fullPath
              });
            }

            cov_2y8hmsase().s[48]++;
            return _context2.abrupt("return", all);

          case 15:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  function _getDirectry2() {
    return _getDirectry3.apply(this, arguments);
  }

  return _getDirectry2;
}();

var _readDir2 = function _readDir2(dir) {
  cov_2y8hmsase().s[49]++;
  return new Promise(function (resolve, reject) {
    cov_2y8hmsase().f[10]++;
    cov_2y8hmsase().s[50]++;

    _fs["default"].readdir(dir, function (error, files) {
      cov_2y8hmsase().f[11]++;
      cov_2y8hmsase().s[51]++;

      if (error) {
        cov_2y8hmsase().b[4][0]++;
        cov_2y8hmsase().s[52]++;
        return resolve({
          error: error,
          files: null
        });
      } else {
        cov_2y8hmsase().b[4][1]++;
      }

      cov_2y8hmsase().s[53]++;
      resolve({
        error: null,
        files: files
      });
    });
  });
};

var _addRouter2 = function _addRouter2() {
  cov_2y8hmsase().s[54]++;
  (0, _classPrivateFieldGet2["default"])(this, _app).use('/graphql', (0, _expressGraphql.graphqlHTTP)({
    schema: (0, _classPrivateFieldGet2["default"])(this, _schema),
    rootValue: (0, _classPrivateFieldGet2["default"])(this, _root)
  }));
};