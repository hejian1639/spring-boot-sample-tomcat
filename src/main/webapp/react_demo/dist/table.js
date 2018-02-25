(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react")) : factory(root["react"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 129);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),

/***/ 129:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var containerStyle = { width: '500px' };

var headerStyle = {
    backgroundColor: '#99bbbb'
};

var menuStyle = {
    backgroundColor: '#ffff99',
    height: '200px',
    width: '150px',
    float: 'left'
};

var contentStyle = {
    backgroundColor: '#EEEEEE',
    height: '200px',
    width: '350px',
    float: 'left'
};

var footerStyle = {
    backgroundColor: '#99bbbb',
    clear: 'both',
    textAlign: 'center'
};

exports.default = _react2.default.createClass({
    displayName: 'table',

    handleClick: function handleClick(module) {
        // require([module], function (App) {
        //     var app = new App();
        //     app.init();
        // });
    },
    render: function render() {
        return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                'table',
                { id: 'customers' },
                _react2.default.createElement(
                    'tbody',
                    null,
                    _react2.default.createElement(
                        'tr',
                        null,
                        _react2.default.createElement(
                            'th',
                            null,
                            'Company'
                        ),
                        _react2.default.createElement(
                            'th',
                            null,
                            'Contact'
                        ),
                        _react2.default.createElement(
                            'th',
                            null,
                            'Country'
                        )
                    ),
                    _react2.default.createElement(
                        'tr',
                        null,
                        _react2.default.createElement(
                            'td',
                            null,
                            'Apple'
                        ),
                        _react2.default.createElement(
                            'td',
                            null,
                            'Steven Jobs'
                        ),
                        _react2.default.createElement(
                            'td',
                            null,
                            'USA'
                        )
                    ),
                    _react2.default.createElement(
                        'tr',
                        { className: 'alt' },
                        _react2.default.createElement(
                            'td',
                            null,
                            'Baidu'
                        ),
                        _react2.default.createElement(
                            'td',
                            null,
                            'Li YanHong'
                        ),
                        _react2.default.createElement(
                            'td',
                            null,
                            'China'
                        )
                    ),
                    _react2.default.createElement(
                        'tr',
                        null,
                        _react2.default.createElement(
                            'td',
                            null,
                            'Google'
                        ),
                        _react2.default.createElement(
                            'td',
                            null,
                            'Larry Page'
                        ),
                        _react2.default.createElement(
                            'td',
                            null,
                            'USA'
                        )
                    ),
                    _react2.default.createElement(
                        'tr',
                        { className: 'alt' },
                        _react2.default.createElement(
                            'td',
                            null,
                            'Lenovo'
                        ),
                        _react2.default.createElement(
                            'td',
                            null,
                            'Liu Chuanzhi'
                        ),
                        _react2.default.createElement(
                            'td',
                            null,
                            'China'
                        )
                    ),
                    _react2.default.createElement(
                        'tr',
                        null,
                        _react2.default.createElement(
                            'td',
                            null,
                            'Microsoft'
                        ),
                        _react2.default.createElement(
                            'td',
                            null,
                            'Bill Gates'
                        ),
                        _react2.default.createElement(
                            'td',
                            null,
                            'USA'
                        )
                    ),
                    _react2.default.createElement(
                        'tr',
                        { className: 'alt' },
                        _react2.default.createElement(
                            'td',
                            null,
                            'Nokia'
                        ),
                        _react2.default.createElement(
                            'td',
                            null,
                            'Stephen Elop'
                        ),
                        _react2.default.createElement(
                            'td',
                            null,
                            'Finland'
                        )
                    )
                )
            ),
            _react2.default.createElement('br', null),
            _react2.default.createElement(
                'a',
                { href: 'javascript:void(0)', onClick: this.handleClick.bind(this, 'app/screen1') },
                'Go to React Page 1'
            )
        );
    }
});

/***/ })

/******/ });
});
//# sourceMappingURL=table.js.map