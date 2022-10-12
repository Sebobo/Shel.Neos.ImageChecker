/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../node_modules/@neos-project/neos-ui-extensibility/dist/createConsumerApi.js":
/*!***********************************************************************************************************************************************************!*\
  !*** /Users/sebastianhelzle/Workspace/helzle.it/Source/Shel.Neos.ImageChecker/node_modules/@neos-project/neos-ui-extensibility/dist/createConsumerApi.js ***!
  \***********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var tslib_1 = __webpack_require__(/*! tslib */ "../../../node_modules/tslib/tslib.es6.js");
var manifest_1 = tslib_1.__importDefault(__webpack_require__(/*! ./manifest */ "../../../node_modules/@neos-project/neos-ui-extensibility/dist/manifest.js"));
var createReadOnlyValue = function createReadOnlyValue(value) {
    return {
        value: value,
        writable: false,
        enumerable: false,
        configurable: true
    };
};
function createConsumerApi(manifests, exposureMap) {
    var api = {};
    Object.keys(exposureMap).forEach(function (key) {
        Object.defineProperty(api, key, createReadOnlyValue(exposureMap[key]));
    });
    Object.defineProperty(api, '@manifest', createReadOnlyValue(manifest_1["default"](manifests)));
    Object.defineProperty(window, '@Neos:HostPluginAPI', createReadOnlyValue(api));
}
exports["default"] = createConsumerApi;
//# sourceMappingURL=createConsumerApi.js.map

/***/ }),

/***/ "../../../node_modules/@neos-project/neos-ui-extensibility/dist/index.js":
/*!***********************************************************************************************************************************************!*\
  !*** /Users/sebastianhelzle/Workspace/helzle.it/Source/Shel.Neos.ImageChecker/node_modules/@neos-project/neos-ui-extensibility/dist/index.js ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var tslib_1 = __webpack_require__(/*! tslib */ "../../../node_modules/tslib/tslib.es6.js");
var createConsumerApi_1 = tslib_1.__importDefault(__webpack_require__(/*! ./createConsumerApi */ "../../../node_modules/@neos-project/neos-ui-extensibility/dist/createConsumerApi.js"));
exports.createConsumerApi = createConsumerApi_1["default"];
var readFromConsumerApi_1 = tslib_1.__importDefault(__webpack_require__(/*! ./readFromConsumerApi */ "../../../node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js"));
exports.readFromConsumerApi = readFromConsumerApi_1["default"];
var index_1 = __webpack_require__(/*! ./registry/index */ "../../../node_modules/@neos-project/neos-ui-extensibility/dist/registry/index.js");
exports.SynchronousRegistry = index_1.SynchronousRegistry;
exports.SynchronousMetaRegistry = index_1.SynchronousMetaRegistry;
exports["default"] = readFromConsumerApi_1["default"]('manifest');
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../node_modules/@neos-project/neos-ui-extensibility/dist/manifest.js":
/*!**************************************************************************************************************************************************!*\
  !*** /Users/sebastianhelzle/Workspace/helzle.it/Source/Shel.Neos.ImageChecker/node_modules/@neos-project/neos-ui-extensibility/dist/manifest.js ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = function (manifests) {
    return function (identifier, options, bootstrap) {
        var _a;
        manifests.push((_a = {}, _a[identifier] = {
            options: options,
            bootstrap: bootstrap
        }, _a));
    };
};
//# sourceMappingURL=manifest.js.map

/***/ }),

/***/ "../../../node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js":
/*!*************************************************************************************************************************************************************!*\
  !*** /Users/sebastianhelzle/Workspace/helzle.it/Source/Shel.Neos.ImageChecker/node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js ***!
  \*************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var tslib_1 = __webpack_require__(/*! tslib */ "../../../node_modules/tslib/tslib.es6.js");
function readFromConsumerApi(key) {
    return function () {
        var _a;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (window['@Neos:HostPluginAPI'] && window['@Neos:HostPluginAPI']["@" + key]) {
            return (_a = window['@Neos:HostPluginAPI'])["@" + key].apply(_a, tslib_1.__spread(args));
        }
        throw new Error("You are trying to read from a consumer api that hasn't been initialized yet!");
    };
}
exports["default"] = readFromConsumerApi;
//# sourceMappingURL=readFromConsumerApi.js.map

/***/ }),

/***/ "../../../node_modules/@neos-project/neos-ui-extensibility/dist/registry/AbstractRegistry.js":
/*!*******************************************************************************************************************************************************************!*\
  !*** /Users/sebastianhelzle/Workspace/helzle.it/Source/Shel.Neos.ImageChecker/node_modules/@neos-project/neos-ui-extensibility/dist/registry/AbstractRegistry.js ***!
  \*******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var AbstractRegistry = function () {
    function AbstractRegistry(description) {
        this.SERIAL_VERSION_UID = 'd8a5aa78-978e-11e6-ae22-56b6b6499611';
        this.description = description;
    }
    return AbstractRegistry;
}();
exports["default"] = AbstractRegistry;
//# sourceMappingURL=AbstractRegistry.js.map

/***/ }),

/***/ "../../../node_modules/@neos-project/neos-ui-extensibility/dist/registry/SynchronousMetaRegistry.js":
/*!**************************************************************************************************************************************************************************!*\
  !*** /Users/sebastianhelzle/Workspace/helzle.it/Source/Shel.Neos.ImageChecker/node_modules/@neos-project/neos-ui-extensibility/dist/registry/SynchronousMetaRegistry.js ***!
  \**************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var tslib_1 = __webpack_require__(/*! tslib */ "../../../node_modules/tslib/tslib.es6.js");
var SynchronousRegistry_1 = tslib_1.__importDefault(__webpack_require__(/*! ./SynchronousRegistry */ "../../../node_modules/@neos-project/neos-ui-extensibility/dist/registry/SynchronousRegistry.js"));
var SynchronousMetaRegistry = function (_super) {
    tslib_1.__extends(SynchronousMetaRegistry, _super);
    function SynchronousMetaRegistry() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SynchronousMetaRegistry.prototype.set = function (key, value) {
        if (value.SERIAL_VERSION_UID !== 'd8a5aa78-978e-11e6-ae22-56b6b6499611') {
            throw new Error('You can only add registries to a meta registry');
        }
        return _super.prototype.set.call(this, key, value);
    };
    return SynchronousMetaRegistry;
}(SynchronousRegistry_1["default"]);
exports["default"] = SynchronousMetaRegistry;
//# sourceMappingURL=SynchronousMetaRegistry.js.map

/***/ }),

/***/ "../../../node_modules/@neos-project/neos-ui-extensibility/dist/registry/SynchronousRegistry.js":
/*!**********************************************************************************************************************************************************************!*\
  !*** /Users/sebastianhelzle/Workspace/helzle.it/Source/Shel.Neos.ImageChecker/node_modules/@neos-project/neos-ui-extensibility/dist/registry/SynchronousRegistry.js ***!
  \**********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var tslib_1 = __webpack_require__(/*! tslib */ "../../../node_modules/tslib/tslib.es6.js");
var AbstractRegistry_1 = tslib_1.__importDefault(__webpack_require__(/*! ./AbstractRegistry */ "../../../node_modules/@neos-project/neos-ui-extensibility/dist/registry/AbstractRegistry.js"));
var positional_array_sorter_1 = tslib_1.__importDefault(__webpack_require__(/*! @neos-project/positional-array-sorter */ "../../../node_modules/@neos-project/positional-array-sorter/dist/positionalArraySorter.js"));
var SynchronousRegistry = function (_super) {
    tslib_1.__extends(SynchronousRegistry, _super);
    function SynchronousRegistry(description) {
        var _this = _super.call(this, description) || this;
        _this._registry = [];
        return _this;
    }
    SynchronousRegistry.prototype.set = function (key, value, position) {
        if (position === void 0) {
            position = 0;
        }
        if (typeof key !== 'string') {
            throw new Error('Key must be a string');
        }
        if (typeof position !== 'string' && typeof position !== 'number') {
            throw new Error('Position must be a string or a number');
        }
        var entry = { key: key, value: value };
        if (position) {
            entry.position = position;
        }
        var indexOfItemWithTheSameKey = this._registry.findIndex(function (item) {
            return item.key === key;
        });
        if (indexOfItemWithTheSameKey === -1) {
            this._registry.push(entry);
        } else {
            this._registry[indexOfItemWithTheSameKey] = entry;
        }
        return value;
    };
    SynchronousRegistry.prototype.get = function (key) {
        if (typeof key !== 'string') {
            console.error('Key must be a string');
            return null;
        }
        var result = this._registry.find(function (item) {
            return item.key === key;
        });
        return result ? result.value : null;
    };
    SynchronousRegistry.prototype._getChildrenWrapped = function (searchKey) {
        var unsortedChildren = this._registry.filter(function (item) {
            return item.key.indexOf(searchKey + '/') === 0;
        });
        return positional_array_sorter_1["default"](unsortedChildren);
    };
    SynchronousRegistry.prototype.getChildrenAsObject = function (searchKey) {
        var result = {};
        this._getChildrenWrapped(searchKey).forEach(function (item) {
            result[item.key] = item.value;
        });
        return result;
    };
    SynchronousRegistry.prototype.getChildren = function (searchKey) {
        return this._getChildrenWrapped(searchKey).map(function (item) {
            return item.value;
        });
    };
    SynchronousRegistry.prototype.has = function (key) {
        if (typeof key !== 'string') {
            console.error('Key must be a string');
            return false;
        }
        return Boolean(this._registry.find(function (item) {
            return item.key === key;
        }));
    };
    SynchronousRegistry.prototype._getAllWrapped = function () {
        return positional_array_sorter_1["default"](this._registry);
    };
    SynchronousRegistry.prototype.getAllAsObject = function () {
        var result = {};
        this._getAllWrapped().forEach(function (item) {
            result[item.key] = item.value;
        });
        return result;
    };
    SynchronousRegistry.prototype.getAllAsList = function () {
        return this._getAllWrapped().map(function (item) {
            return Object.assign({ id: item.key }, item.value);
        });
    };
    return SynchronousRegistry;
}(AbstractRegistry_1["default"]);
exports["default"] = SynchronousRegistry;
//# sourceMappingURL=SynchronousRegistry.js.map

/***/ }),

/***/ "../../../node_modules/@neos-project/neos-ui-extensibility/dist/registry/index.js":
/*!********************************************************************************************************************************************************!*\
  !*** /Users/sebastianhelzle/Workspace/helzle.it/Source/Shel.Neos.ImageChecker/node_modules/@neos-project/neos-ui-extensibility/dist/registry/index.js ***!
  \********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var tslib_1 = __webpack_require__(/*! tslib */ "../../../node_modules/tslib/tslib.es6.js");
var SynchronousRegistry_1 = tslib_1.__importDefault(__webpack_require__(/*! ./SynchronousRegistry */ "../../../node_modules/@neos-project/neos-ui-extensibility/dist/registry/SynchronousRegistry.js"));
exports.SynchronousRegistry = SynchronousRegistry_1["default"];
var SynchronousMetaRegistry_1 = tslib_1.__importDefault(__webpack_require__(/*! ./SynchronousMetaRegistry */ "../../../node_modules/@neos-project/neos-ui-extensibility/dist/registry/SynchronousMetaRegistry.js"));
exports.SynchronousMetaRegistry = SynchronousMetaRegistry_1["default"];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../node_modules/@neos-project/neos-ui-extensibility/src/shims/neosProjectPackages/neos-ui-backend-connector/index.js":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** /Users/sebastianhelzle/Workspace/helzle.it/Source/Shel.Neos.ImageChecker/node_modules/@neos-project/neos-ui-extensibility/src/shims/neosProjectPackages/neos-ui-backend-connector/index.js ***!
  \**************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchWithErrorHandling = undefined;

var _readFromConsumerApi = __webpack_require__(/*! ../../../../dist/readFromConsumerApi */ "../../../node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js");

var _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _readFromConsumerApi2.default)('NeosProjectPackages')().NeosUiBackendConnectorDefault;
var fetchWithErrorHandling = (0, _readFromConsumerApi2.default)('NeosProjectPackages')().NeosUiBackendConnector.fetchWithErrorHandling;
exports.fetchWithErrorHandling = fetchWithErrorHandling;

/***/ }),

/***/ "../../../node_modules/@neos-project/neos-ui-extensibility/src/shims/neosProjectPackages/react-ui-components/index.js":
/*!********************************************************************************************************************************************************************************************!*\
  !*** /Users/sebastianhelzle/Workspace/helzle.it/Source/Shel.Neos.ImageChecker/node_modules/@neos-project/neos-ui-extensibility/src/shims/neosProjectPackages/react-ui-components/index.js ***!
  \********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _readFromConsumerApi = __webpack_require__(/*! ../../../../dist/readFromConsumerApi */ "../../../node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js");

var _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = (0, _readFromConsumerApi2.default)('NeosProjectPackages')().ReactUiComponents;

/***/ }),

/***/ "../../../node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/prop-types/index.js":
/*!**********************************************************************************************************************************************************************!*\
  !*** /Users/sebastianhelzle/Workspace/helzle.it/Source/Shel.Neos.ImageChecker/node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/prop-types/index.js ***!
  \**********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _readFromConsumerApi = __webpack_require__(/*! ../../../../dist/readFromConsumerApi */ "../../../node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js");

var _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = (0, _readFromConsumerApi2.default)('vendor')().PropTypes;

/***/ }),

/***/ "../../../node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/react/index.js":
/*!*****************************************************************************************************************************************************************!*\
  !*** /Users/sebastianhelzle/Workspace/helzle.it/Source/Shel.Neos.ImageChecker/node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/react/index.js ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _readFromConsumerApi = __webpack_require__(/*! ../../../../dist/readFromConsumerApi */ "../../../node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js");

var _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = (0, _readFromConsumerApi2.default)('vendor')().React;

/***/ }),

/***/ "../../../node_modules/@neos-project/positional-array-sorter/dist/positionalArraySorter.js":
/*!*****************************************************************************************************************************************************************!*\
  !*** /Users/sebastianhelzle/Workspace/helzle.it/Source/Shel.Neos.ImageChecker/node_modules/@neos-project/positional-array-sorter/dist/positionalArraySorter.js ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var tslib_1 = __webpack_require__(/*! tslib */ "../../../node_modules/tslib/tslib.es6.js");
var positionalArraySorter = function positionalArraySorter(subject, position, idKey) {
    var e_1, _a, e_2, _b, e_3, _c, e_4, _d, e_5, _e, e_6, _f, e_7, _g;
    if (position === void 0) {
        position = 'position';
    }
    if (idKey === void 0) {
        idKey = 'key';
    }
    var positionAccessor = typeof position === 'string' ? function (value) {
        return value[position];
    } : position;
    var indexMapping = {};
    var middleKeys = {};
    var startKeys = {};
    var endKeys = {};
    var beforeKeys = {};
    var afterKeys = {};
    subject.forEach(function (item, index) {
        var key = item[idKey] ? item[idKey] : String(index);
        indexMapping[key] = index;
        var positionValue = positionAccessor(item);
        var position = String(positionValue ? positionValue : index);
        var invalid = false;
        if (position.startsWith('start')) {
            var weightMatch = position.match(/start\s+(\d+)/);
            var weight = weightMatch && weightMatch[1] ? Number(weightMatch[1]) : 0;
            if (!startKeys[weight]) {
                startKeys[weight] = [];
            }
            startKeys[weight].push(key);
        } else if (position.startsWith('end')) {
            var weightMatch = position.match(/end\s+(\d+)/);
            var weight = weightMatch && weightMatch[1] ? Number(weightMatch[1]) : 0;
            if (!endKeys[weight]) {
                endKeys[weight] = [];
            }
            endKeys[weight].push(key);
        } else if (position.startsWith('before')) {
            var match = position.match(/before\s+(\S+)(\s+(\d+))?/);
            if (!match) {
                invalid = true;
            } else {
                var reference = match[1];
                var weight = match[3] ? Number(match[3]) : 0;
                if (!beforeKeys[reference]) {
                    beforeKeys[reference] = {};
                }
                if (!beforeKeys[reference][weight]) {
                    beforeKeys[reference][weight] = [];
                }
                beforeKeys[reference][weight].push(key);
            }
        } else if (position.startsWith('after')) {
            var match = position.match(/after\s+(\S+)(\s+(\d+))?/);
            if (!match) {
                invalid = true;
            } else {
                var reference = match[1];
                var weight = match[3] ? Number(match[3]) : 0;
                if (!afterKeys[reference]) {
                    afterKeys[reference] = {};
                }
                if (!afterKeys[reference][weight]) {
                    afterKeys[reference][weight] = [];
                }
                afterKeys[reference][weight].push(key);
            }
        } else {
            invalid = true;
        }
        if (invalid) {
            var numberPosition = parseFloat(position);
            if (isNaN(numberPosition) || !isFinite(numberPosition)) {
                numberPosition = index;
            }
            if (!middleKeys[numberPosition]) {
                middleKeys[numberPosition] = [];
            }
            middleKeys[numberPosition].push(key);
        }
    });
    var resultStart = [];
    var resultMiddle = [];
    var resultEnd = [];
    var processedKeys = [];
    var sortedWeights = function sortedWeights(dict, asc) {
        var weights = Object.keys(dict).map(function (x) {
            return Number(x);
        }).sort(function (a, b) {
            return a - b;
        });
        return asc ? weights : weights.reverse();
    };
    var addToResults = function addToResults(keys, result) {
        keys.forEach(function (key) {
            var e_8, _a, e_9, _b;
            if (processedKeys.indexOf(key) >= 0) {
                return;
            }
            processedKeys.push(key);
            if (beforeKeys[key]) {
                var beforeWeights = sortedWeights(beforeKeys[key], true);
                try {
                    for (var beforeWeights_1 = tslib_1.__values(beforeWeights), beforeWeights_1_1 = beforeWeights_1.next(); !beforeWeights_1_1.done; beforeWeights_1_1 = beforeWeights_1.next()) {
                        var i = beforeWeights_1_1.value;
                        addToResults(beforeKeys[key][i], result);
                    }
                } catch (e_8_1) {
                    e_8 = { error: e_8_1 };
                } finally {
                    try {
                        if (beforeWeights_1_1 && !beforeWeights_1_1.done && (_a = beforeWeights_1["return"])) _a.call(beforeWeights_1);
                    } finally {
                        if (e_8) throw e_8.error;
                    }
                }
            }
            result.push(key);
            if (afterKeys[key]) {
                var afterWeights = sortedWeights(afterKeys[key], false);
                try {
                    for (var afterWeights_1 = tslib_1.__values(afterWeights), afterWeights_1_1 = afterWeights_1.next(); !afterWeights_1_1.done; afterWeights_1_1 = afterWeights_1.next()) {
                        var i = afterWeights_1_1.value;
                        addToResults(afterKeys[key][i], result);
                    }
                } catch (e_9_1) {
                    e_9 = { error: e_9_1 };
                } finally {
                    try {
                        if (afterWeights_1_1 && !afterWeights_1_1.done && (_b = afterWeights_1["return"])) _b.call(afterWeights_1);
                    } finally {
                        if (e_9) throw e_9.error;
                    }
                }
            }
        });
    };
    try {
        for (var _h = tslib_1.__values(sortedWeights(startKeys, false)), _j = _h.next(); !_j.done; _j = _h.next()) {
            var i = _j.value;
            addToResults(startKeys[i], resultStart);
        }
    } catch (e_1_1) {
        e_1 = { error: e_1_1 };
    } finally {
        try {
            if (_j && !_j.done && (_a = _h["return"])) _a.call(_h);
        } finally {
            if (e_1) throw e_1.error;
        }
    }
    try {
        for (var _k = tslib_1.__values(sortedWeights(middleKeys, true)), _l = _k.next(); !_l.done; _l = _k.next()) {
            var i = _l.value;
            addToResults(middleKeys[i], resultMiddle);
        }
    } catch (e_2_1) {
        e_2 = { error: e_2_1 };
    } finally {
        try {
            if (_l && !_l.done && (_b = _k["return"])) _b.call(_k);
        } finally {
            if (e_2) throw e_2.error;
        }
    }
    try {
        for (var _m = tslib_1.__values(sortedWeights(endKeys, true)), _o = _m.next(); !_o.done; _o = _m.next()) {
            var i = _o.value;
            addToResults(endKeys[i], resultEnd);
        }
    } catch (e_3_1) {
        e_3 = { error: e_3_1 };
    } finally {
        try {
            if (_o && !_o.done && (_c = _m["return"])) _c.call(_m);
        } finally {
            if (e_3) throw e_3.error;
        }
    }
    try {
        for (var _p = tslib_1.__values(Object.keys(beforeKeys)), _q = _p.next(); !_q.done; _q = _p.next()) {
            var key = _q.value;
            if (processedKeys.indexOf(key) >= 0) {
                continue;
            }
            try {
                for (var _r = (e_5 = void 0, tslib_1.__values(sortedWeights(beforeKeys[key], false))), _s = _r.next(); !_s.done; _s = _r.next()) {
                    var i = _s.value;
                    addToResults(beforeKeys[key][i], resultStart);
                }
            } catch (e_5_1) {
                e_5 = { error: e_5_1 };
            } finally {
                try {
                    if (_s && !_s.done && (_e = _r["return"])) _e.call(_r);
                } finally {
                    if (e_5) throw e_5.error;
                }
            }
        }
    } catch (e_4_1) {
        e_4 = { error: e_4_1 };
    } finally {
        try {
            if (_q && !_q.done && (_d = _p["return"])) _d.call(_p);
        } finally {
            if (e_4) throw e_4.error;
        }
    }
    try {
        for (var _t = tslib_1.__values(Object.keys(afterKeys)), _u = _t.next(); !_u.done; _u = _t.next()) {
            var key = _u.value;
            if (processedKeys.indexOf(key) >= 0) {
                continue;
            }
            try {
                for (var _v = (e_7 = void 0, tslib_1.__values(sortedWeights(afterKeys[key], false))), _w = _v.next(); !_w.done; _w = _v.next()) {
                    var i = _w.value;
                    addToResults(afterKeys[key][i], resultMiddle);
                }
            } catch (e_7_1) {
                e_7 = { error: e_7_1 };
            } finally {
                try {
                    if (_w && !_w.done && (_g = _v["return"])) _g.call(_v);
                } finally {
                    if (e_7) throw e_7.error;
                }
            }
        }
    } catch (e_6_1) {
        e_6 = { error: e_6_1 };
    } finally {
        try {
            if (_u && !_u.done && (_f = _t["return"])) _f.call(_t);
        } finally {
            if (e_6) throw e_6.error;
        }
    }
    var sortedKeys = tslib_1.__spread(resultStart, resultMiddle, resultEnd);
    return sortedKeys.map(function (key) {
        return indexMapping[key];
    }).map(function (i) {
        return subject[i];
    });
};
exports["default"] = positionalArraySorter;
//# sourceMappingURL=positionalArraySorter.js.map

/***/ }),

/***/ "../../../node_modules/tslib/tslib.es6.js":
/*!****************************************************************************************************************!*\
  !*** /Users/sebastianhelzle/Workspace/helzle.it/Source/Shel.Neos.ImageChecker/node_modules/tslib/tslib.es6.js ***!
  \****************************************************************************************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/Checks/filedimensions.ts":
/*!**************************************!*\
  !*** ./src/Checks/filedimensions.ts ***!
  \**************************************/
/*! exports provided: checkFileDimensions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkFileDimensions", function() { return checkFileDimensions; });
const MAX_HEIGHT = 10000;
const MAX_WIDTH = 10000;
const MIN_HEIGHT = 0;
const MIN_WIDTH = 0;
function checkFileDimensions(dimensions, options) {
    const maxWidth = (options === null || options === void 0 ? void 0 : options.maxWidth) || MAX_HEIGHT;
    const maxHeight = (options === null || options === void 0 ? void 0 : options.maxHeight) || MAX_WIDTH;
    const minWidth = (options === null || options === void 0 ? void 0 : options.minWidth) || MIN_HEIGHT;
    const minHeight = (options === null || options === void 0 ? void 0 : options.minHeight) || MIN_WIDTH;
    const smallEnough = (dimensions.width === 0 || dimensions.width <= maxWidth) &&
        (dimensions.height === 0 || dimensions.height <= maxHeight);
    const bigEnough = dimensions.width >= minWidth && dimensions.height >= minHeight;
    const errorMessage = `Image dimensions must be between ${minWidth}x${minHeight} and ${maxWidth}x${maxHeight}`;
    return Promise.resolve({
        isValid: smallEnough && bigEnough,
        value: `${dimensions.width} x ${dimensions.height}px`,
        errorMessage: smallEnough && bigEnough ? '' : errorMessage,
    });
}


/***/ }),

/***/ "./src/Checks/filename.ts":
/*!********************************!*\
  !*** ./src/Checks/filename.ts ***!
  \********************************/
/*! exports provided: checkFilename */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkFilename", function() { return checkFilename; });
function checkFilename(pathAndFilename, options) {
    const filename = pathAndFilename.split('/').pop();
    // TODO: Do we also need to check the extension?
    // const extension = filename.split('.').pop();
    const re = new RegExp(options.allowedPattern);
    const isValid = re.test(filename);
    return Promise.resolve({
        isValid: isValid,
        errorMessage: isValid ? '' : `The filename has to match the pattern "${options.allowedPattern}"`,
        value: filename,
    });
}


/***/ }),

/***/ "./src/Checks/filesize.ts":
/*!********************************!*\
  !*** ./src/Checks/filesize.ts ***!
  \********************************/
/*! exports provided: checkFileSize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkFileSize", function() { return checkFileSize; });
const MAX_FILE_SIZE = 2048; // in KB
function checkFileSize(url, options) {
    return fetch(url, { method: 'HEAD' }).then((response) => {
        if (response.ok) {
            // maxSize is given in KB, so we convert the actual filesize to KB too
            const fileSize = parseInt(response.headers.get('Content-Length')) || 0;
            const fileType = response.headers.get('Content-Type');
            let maxSize = options.default || MAX_FILE_SIZE;
            switch (fileType) {
                case 'image/png':
                    maxSize = options.png || maxSize;
                    break;
                case 'image/jpeg':
                    maxSize = options.jpg || maxSize;
                    break;
                case 'image/svg+xml':
                    maxSize = options.svg || maxSize;
                    break;
            }
            // filSize is in bytes, maxSize is in KB
            const isValid = fileSize <= maxSize * 1024;
            let displayFileSize = fileSize;
            let unit = 'B';
            if (displayFileSize > 1024) {
                displayFileSize /= 1024;
                unit = 'KB';
            }
            if (displayFileSize > 1024) {
                displayFileSize /= 1024;
                unit = 'MB';
            }
            return {
                isValid,
                value: `${Math.round(displayFileSize)} ${unit}`,
                errorMessage: isValid ? '' : `File size must be less or equal than ${maxSize} KB`,
            };
        }
        return {
            isValid: false,
            value: 'n/a',
            errorMessage: 'Error while fetching file size',
        };
    });
}


/***/ }),

/***/ "./src/Checks/index.ts":
/*!*****************************!*\
  !*** ./src/Checks/index.ts ***!
  \*****************************/
/*! exports provided: checkFileDimensions, checkFilename, checkFileSize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _filedimensions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filedimensions */ "./src/Checks/filedimensions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "checkFileDimensions", function() { return _filedimensions__WEBPACK_IMPORTED_MODULE_0__["checkFileDimensions"]; });

/* harmony import */ var _filename__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filename */ "./src/Checks/filename.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "checkFilename", function() { return _filename__WEBPACK_IMPORTED_MODULE_1__["checkFilename"]; });

/* harmony import */ var _filesize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filesize */ "./src/Checks/filesize.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "checkFileSize", function() { return _filesize__WEBPACK_IMPORTED_MODULE_2__["checkFileSize"]; });







/***/ }),

/***/ "./src/Components/CheckResultItem.tsx":
/*!********************************************!*\
  !*** ./src/Components/CheckResultItem.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _neos_project_react_ui_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @neos-project/react-ui-components */ "../../../node_modules/@neos-project/neos-ui-extensibility/src/shims/neosProjectPackages/react-ui-components/index.js");
/* harmony import */ var _neos_project_react_ui_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_neos_project_react_ui_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CheckResultItem_vanilla_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CheckResultItem.vanilla-css */ "./src/Components/CheckResultItem.vanilla-css");
/* harmony import */ var _CheckResultItem_vanilla_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_CheckResultItem_vanilla_css__WEBPACK_IMPORTED_MODULE_2__);



const CheckResultItem = ({ label, checkResult }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", { className: "image-check-result" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", { className: "image-check-result__label" },
                label,
                ":"),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", { className: ['image-check-result__icon', !checkResult.isValid && 'error'].join(' ') },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_neos_project_react_ui_components__WEBPACK_IMPORTED_MODULE_1__["Icon"], { icon: checkResult.isValid ? 'check-circle' : 'exclamation-triangle' })),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", { className: "image-check-result__value", title: checkResult.value }, checkResult.value)),
        checkResult.errorMessage && (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", { colSpan: 3 },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", { className: "image-check-result__error-message" }, checkResult.errorMessage))))));
};
/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(CheckResultItem));


/***/ }),

/***/ "./src/Components/CheckResultItem.vanilla-css":
/*!****************************************************!*\
  !*** ./src/Components/CheckResultItem.vanilla-css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/Components/ImageCheck.tsx":
/*!***************************************!*\
  !*** ./src/Components/ImageCheck.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _neos_project_neos_ui_backend_connector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @neos-project/neos-ui-backend-connector */ "../../../node_modules/@neos-project/neos-ui-extensibility/src/shims/neosProjectPackages/neos-ui-backend-connector/index.js");
/* harmony import */ var _neos_project_neos_ui_backend_connector__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_neos_project_neos_ui_backend_connector__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _neos_project_react_ui_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @neos-project/react-ui-components */ "../../../node_modules/@neos-project/neos-ui-extensibility/src/shims/neosProjectPackages/react-ui-components/index.js");
/* harmony import */ var _neos_project_react_ui_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_neos_project_react_ui_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ImageCheck_vanilla_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ImageCheck.vanilla-css */ "./src/Components/ImageCheck.vanilla-css");
/* harmony import */ var _ImageCheck_vanilla_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ImageCheck_vanilla_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _CheckResultItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CheckResultItem */ "./src/Components/CheckResultItem.tsx");
/* harmony import */ var _Checks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Checks */ "./src/Checks/index.ts");

// @ts-ignore


// import Image from '../Interfaces/Image';



const ImageCheck = ({ value, options, translate }) => {
    const [image, setImage] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
    const [fileNameCheck, setFileNameCheck] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
    const [fileSizeCheck, setFileSizeCheck] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
    const [fileDimensionsCheck, setFileDimensionsCheck] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
    const [imageCheckVisible, setImageCheckVisible] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
    const toggleImageCheck = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
        setImageCheckVisible((prevState) => !prevState);
    }, []);
    const hasWarning = (fileNameCheck === null || fileNameCheck === void 0 ? void 0 : fileNameCheck.isValid) === false || (fileSizeCheck === null || fileSizeCheck === void 0 ? void 0 : fileSizeCheck.isValid) === false || (fileDimensionsCheck === null || fileDimensionsCheck === void 0 ? void 0 : fileDimensionsCheck.isValid) === false;
    // Refetch image data when the image identity changes
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
        if (typeof value !== 'string' && (value === null || value === void 0 ? void 0 : value.__identity)) {
            const { loadImageMetadata } = _neos_project_neos_ui_backend_connector__WEBPACK_IMPORTED_MODULE_1___default.a.get().endpoints;
            loadImageMetadata(value.__identity).then(setImage);
        }
    }, [value]);
    // Rerun checks if image changes
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
        if (image) {
            Object(_Checks__WEBPACK_IMPORTED_MODULE_5__["checkFilename"])(image.originalImageResourceUri, options.fileName).then(setFileNameCheck);
            Object(_Checks__WEBPACK_IMPORTED_MODULE_5__["checkFileSize"])(image.originalImageResourceUri, options.fileSize).then(setFileSizeCheck);
            // The dimensions check does not work for SVGs yet as the dimensions are not stored in the image metadata
            if (image.mediaType !== 'image/svg+xml') {
                Object(_Checks__WEBPACK_IMPORTED_MODULE_5__["checkFileDimensions"])(image.originalDimensions, options.fileDimensions).then(setFileDimensionsCheck);
            }
        }
        else {
            setFileNameCheck(null);
            setFileSizeCheck(null);
            setFileDimensionsCheck(null);
        }
    }, [image]);
    // Show image check if a warning is present
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
        if (hasWarning) {
            setImageCheckVisible(true);
        }
    }, [hasWarning]);
    if (!image)
        return null;
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "image-check" },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_neos_project_react_ui_components__WEBPACK_IMPORTED_MODULE_2__["IconButton"], { icon: hasWarning ? 'exclamation-triangle' : 'info', size: "small", style: hasWarning ? 'warn' : imageCheckVisible ? 'brand' : 'lighter', title: hasWarning
                ? translate('checks.hasWarnings', 'The asset is invalid')
                : translate('checks.valid', 'The asset is valid'), onClick: toggleImageCheck }),
        imageCheckVisible && (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "image-check__results" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", null,
                fileNameCheck && (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CheckResultItem__WEBPACK_IMPORTED_MODULE_4__["default"], { label: translate('checks.filename.label', 'Filename'), checkResult: fileNameCheck })),
                fileSizeCheck && (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CheckResultItem__WEBPACK_IMPORTED_MODULE_4__["default"], { label: translate('checks.filesize.label', 'Filesize'), checkResult: fileSizeCheck })),
                fileDimensionsCheck && (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CheckResultItem__WEBPACK_IMPORTED_MODULE_4__["default"], { label: translate('checks.dimensions.label', 'Dimensions'), checkResult: fileDimensionsCheck })))))));
};
/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(ImageCheck));


/***/ }),

/***/ "./src/Components/ImageCheck.vanilla-css":
/*!***********************************************!*\
  !*** ./src/Components/ImageCheck.vanilla-css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/ImageEditor.tsx":
/*!*****************************!*\
  !*** ./src/ImageEditor.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return makeCustomImageEditor; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../../../node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Components_ImageCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Components/ImageCheck */ "./src/Components/ImageCheck.tsx");
/* harmony import */ var _ImageEditor_vanilla_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ImageEditor.vanilla-css */ "./src/ImageEditor.vanilla-css");
/* harmony import */ var _ImageEditor_vanilla_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ImageEditor_vanilla_css__WEBPACK_IMPORTED_MODULE_3__);




function makeCustomImageEditor(DefaultImageEditor, defaults) {
    var _a;
    return _a = class MyImageEditor extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
            constructor(props) {
                super(props);
                this.state = {
                    options: {},
                };
                this.translate = this.translate.bind(this);
            }
            componentDidMount() {
                this.mergeOptions();
            }
            componentDidUpdate(prevProps) {
                if (this.props.value !== prevProps.value) {
                    this.mergeOptions();
                }
            }
            mergeOptions() {
                const { options: { features: { imageCheck }, }, } = this.props;
                this.setState({
                    options: imageCheck
                        ? {
                            fileSize: Object.assign(Object.assign({}, defaults.fileSize), imageCheck.fileSize),
                            fileDimensions: Object.assign(Object.assign({}, defaults.fileDimensions), imageCheck.fileDimensions),
                            fileName: Object.assign(Object.assign({}, defaults.fileName), imageCheck.fileName),
                        }
                        : defaults,
                });
            }
            translate(id, fallback, params) {
                return this.props.i18nRegistry.translate(id, fallback, params, 'Shel.Neos.ImageChecker', 'Main');
            }
            render() {
                const { value } = this.props;
                const { options } = this.state;
                return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "image-editor-container" },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](DefaultImageEditor, Object.assign({}, this.props)),
                    value && options && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Components_ImageCheck__WEBPACK_IMPORTED_MODULE_2__["default"], { value: value, options: options, translate: this.translate })));
            }
        },
        _a.propTypes = {
            value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({ __identifier: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string }), prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
            commit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
            validationErrors: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
            options: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
            i18nRegistry: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
        },
        _a;
}


/***/ }),

/***/ "./src/ImageEditor.vanilla-css":
/*!*************************************!*\
  !*** ./src/ImageEditor.vanilla-css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./manifest */ "./src/manifest.js");

/***/ }),

/***/ "./src/manifest.js":
/*!*************************!*\
  !*** ./src/manifest.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _neosUiExtensibility = __webpack_require__(/*! @neos-project/neos-ui-extensibility */ "../../../node_modules/@neos-project/neos-ui-extensibility/dist/index.js");

var _neosUiExtensibility2 = _interopRequireDefault(_neosUiExtensibility);

var _ImageEditor = __webpack_require__(/*! ./ImageEditor */ "./src/ImageEditor.tsx");

var _ImageEditor2 = _interopRequireDefault(_ImageEditor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _neosUiExtensibility2.default)('Shel.Neos.ImageChecker:ImageEditor', {}, function (globalRegistry, _ref) {
    var frontendConfiguration = _ref.frontendConfiguration;
    var _frontendConfiguratio = frontendConfiguration['Shel.Neos.ImageChecker:ImageChecker'],
        enabled = _frontendConfiguratio.enabled,
        defaults = _frontendConfiguratio.defaults;


    if (!enabled) {
        return;
    }

    var editorsRegistry = globalRegistry.get('inspector').get('editors');

    var standardImageEditorDefinition = editorsRegistry.get('Neos.Neos/Inspector/Editors/ImageEditor');

    editorsRegistry.set('Neos.Neos/Inspector/Editors/ImageEditor', _extends({}, standardImageEditorDefinition, {
        component: (0, _ImageEditor2.default)(standardImageEditorDefinition.component, defaults)
    }));
});

/***/ })

/******/ });
//# sourceMappingURL=Plugin.js.map