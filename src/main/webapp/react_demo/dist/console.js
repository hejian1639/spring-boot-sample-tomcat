(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("css!bootstrap"), require("css!bootstrap-theme"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "css!bootstrap", "css!bootstrap-theme", "react-dom"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react"), require("css!bootstrap"), require("css!bootstrap-theme"), require("react-dom")) : factory(root["react"], root["css!bootstrap"], root["css!bootstrap-theme"], root["react-dom"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 107);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),

/***/ 107:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var React = __webpack_require__(0);
var ReactDOM = __webpack_require__(5);

__webpack_require__(3);
__webpack_require__(4);

exports.default = React.createClass({
    displayName: 'console',


    showGerneral: function showGerneral() {
        var general = React.createElement(
            'div',
            { style: { textAlign: 'center', padding: '60px 15px' } },
            React.createElement(
                'h1',
                null,
                'Bootstrap starter template'
            ),
            React.createElement(
                'p',
                { className: 'lead' },
                'Use this document as a way to quickly start any new project.',
                React.createElement('br', null),
                ' All you get is this text and a mostly barebones HTML document.'
            )
        );
        ReactDOM.render(general, document.getElementById('container'));
    },

    showVideo: function showVideo(tab) {
        // require(['app/video'], function (App) {
        //     var app = new App();
        //     app.init('container', tab);
        // });
    },

    render: function render() {

        return React.createElement(
            'div',
            null,
            React.createElement(
                'nav',
                { className: 'navbar navbar-default navbar-fixed-top' },
                React.createElement(
                    'div',
                    { className: 'container' },
                    React.createElement(
                        'div',
                        { className: 'navbar-header' },
                        React.createElement(
                            'button',
                            { type: 'button', className: 'navbar-toggle collapsed', 'data-toggle': 'collapse', 'data-target': '.navbar-collapse' },
                            React.createElement(
                                'span',
                                { className: 'sr-only' },
                                'Toggle navigation'
                            ),
                            React.createElement('span', { className: 'icon-bar' }),
                            React.createElement('span', { className: 'icon-bar' }),
                            React.createElement('span', { className: 'icon-bar' })
                        ),
                        React.createElement(
                            'span',
                            { className: 'navbar-brand' },
                            'Fairlink'
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'navbar-collapse collapse' },
                        React.createElement(
                            'ul',
                            { className: 'nav navbar-nav' },
                            React.createElement(
                                'li',
                                null,
                                React.createElement(
                                    'a',
                                    { href: 'javascript:void(0)', onClick: this.showGerneral },
                                    '\u603B\u89C8'
                                )
                            ),
                            React.createElement(
                                'li',
                                { className: 'dropdown' },
                                React.createElement(
                                    'a',
                                    { href: 'javascript:void(0)', className: 'dropdown-toggle', 'data-toggle': 'dropdown', role: 'button', 'aria-haspopup': 'true', 'aria-expanded': 'false' },
                                    '\u89C6\u9891\u7BA1\u7406',
                                    React.createElement('span', { className: 'caret' })
                                ),
                                React.createElement(
                                    'ul',
                                    { className: 'dropdown-menu' },
                                    React.createElement(
                                        'li',
                                        null,
                                        React.createElement(
                                            'a',
                                            { href: 'javascript:void(0)', onClick: this.showVideo.bind(this, 'general') },
                                            '\u89C6\u9891\u6982\u89C8'
                                        )
                                    ),
                                    React.createElement(
                                        'li',
                                        null,
                                        React.createElement(
                                            'a',
                                            { href: 'javascript:void(0)', onClick: this.showVideo.bind(this, 'list') },
                                            '\u89C6\u9891\u5217\u8868'
                                        )
                                    )
                                )
                            ),
                            React.createElement(
                                'li',
                                { className: 'dropdown' },
                                React.createElement(
                                    'a',
                                    { href: 'javascript:void(0)', className: 'dropdown-toggle', 'data-toggle': 'dropdown', role: 'button', 'aria-haspopup': 'true', 'aria-expanded': 'false' },
                                    '\u671F\u520A\u7BA1\u7406',
                                    React.createElement('span', { className: 'caret' })
                                ),
                                React.createElement(
                                    'ul',
                                    { className: 'dropdown-menu' },
                                    React.createElement(
                                        'li',
                                        null,
                                        React.createElement(
                                            'a',
                                            { href: 'javascript:void(0)' },
                                            '\u671F\u520A\u6982\u89C8'
                                        )
                                    ),
                                    React.createElement(
                                        'li',
                                        null,
                                        React.createElement(
                                            'a',
                                            { href: 'javascript:void(0)' },
                                            '\u671F\u520A\u5217\u8868'
                                        )
                                    )
                                )
                            ),
                            React.createElement(
                                'li',
                                { className: 'dropdown' },
                                React.createElement(
                                    'a',
                                    { href: 'javascript:void(0)', className: 'dropdown-toggle', 'data-toggle': 'dropdown', role: 'button', 'aria-haspopup': 'true', 'aria-expanded': 'false' },
                                    'web\u5E94\u7528\u7BA1\u7406',
                                    React.createElement('span', { className: 'caret' })
                                ),
                                React.createElement(
                                    'ul',
                                    { className: 'dropdown-menu' },
                                    React.createElement(
                                        'li',
                                        null,
                                        React.createElement(
                                            'a',
                                            { href: 'javascript:void(0)' },
                                            'web\u5E94\u7528\u6982\u89C8'
                                        )
                                    ),
                                    React.createElement(
                                        'li',
                                        null,
                                        React.createElement(
                                            'a',
                                            { href: 'javascript:void(0)' },
                                            'web\u5E94\u7528\u5217\u8868'
                                        )
                                    )
                                )
                            )
                        )
                    )
                )
            ),
            React.createElement('div', { id: 'container', className: 'container' })
        );
    }
});

// this.init = function () {
//   var console = ReactDOM.render(<this.AppView />, document.getElementById('example'));
//   console.showGerneral();
// };

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ })

/******/ });
});
//# sourceMappingURL=console.js.map