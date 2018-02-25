(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("css!bootstrap"), require("css!bootstrap-theme"), require("react-dom"), require("antd"), require("css!antd"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "css!bootstrap", "css!bootstrap-theme", "react-dom", "antd", "css!antd"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react"), require("css!bootstrap"), require("css!bootstrap-theme"), require("react-dom"), require("antd"), require("css!antd")) : factory(root["react"], root["css!bootstrap"], root["css!bootstrap-theme"], root["react-dom"], root["antd"], root["css!antd"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_16__, __WEBPACK_EXTERNAL_MODULE_17__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 103);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),

/***/ 103:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_RESULT__;

!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {

  var React = __webpack_require__(0);
  var ReactDOM = __webpack_require__(5);

  __webpack_require__(3);
  __webpack_require__(4);

  __webpack_require__(17);
  var antd = __webpack_require__(16);

  var Menu = antd.Menu;
  var Icon = antd.Icon;
  var SubMenu = Menu.SubMenu;
  var Row = antd.Row;
  var Col = antd.Col;
  var Dropdown = antd.Dropdown;

  function App() {

    this.AppView = React.createClass({
      displayName: 'AppView',
      render: function render() {
        var menu = React.createElement(
          Menu,
          null,
          React.createElement(
            Menu.Item,
            null,
            React.createElement(
              'a',
              { target: '_blank', href: 'http://www.alipay.com/' },
              '\u7B2C\u4E00\u4E2A\u83DC\u5355\u9879'
            )
          ),
          React.createElement(
            Menu.Item,
            null,
            React.createElement(
              'a',
              { target: '_blank', href: 'http://www.taobao.com/' },
              '\u7B2C\u4E8C\u4E2A\u83DC\u5355\u9879'
            )
          ),
          React.createElement(
            Menu.Item,
            null,
            React.createElement(
              'a',
              { target: '_blank', href: 'http://www.tmall.com/' },
              '\u7B2C\u4E09\u4E2A\u83DC\u5355\u9879'
            )
          )
        );
        return React.createElement(
          'div',
          null,
          React.createElement(
            Row,
            { type: 'flex', align: 'middle' },
            React.createElement(
              Col,
              { span: 2, style: { textAlign: 'center', backgroundColor: '#2d547f' } },
              React.createElement('img', { alt: 'logo', src: 'pic_logo.png' })
            ),
            React.createElement(
              Col,
              { span: 8 },
              React.createElement(
                Menu,
                { mode: 'horizontal' },
                React.createElement(
                  Menu.Item,
                  null,
                  '\u603B\u89C8'
                ),
                React.createElement(
                  SubMenu,
                  { title: React.createElement(
                      'span',
                      null,
                      '\u89C6\u9891\u7BA1\u7406'
                    ) },
                  React.createElement(
                    Menu.Item,
                    null,
                    '\u89C6\u9891\u6982\u89C8'
                  ),
                  React.createElement(
                    Menu.Item,
                    null,
                    '\u89C6\u9891\u5217\u8868'
                  )
                ),
                React.createElement(
                  SubMenu,
                  { title: React.createElement(
                      'span',
                      null,
                      '\u671F\u520A\u7BA1\u7406'
                    ) },
                  React.createElement(
                    Menu.Item,
                    null,
                    '\u671F\u520A\u6982\u89C8'
                  ),
                  React.createElement(
                    Menu.Item,
                    null,
                    '\u671F\u520A\u5217\u8868'
                  )
                ),
                React.createElement(
                  SubMenu,
                  { title: React.createElement(
                      'span',
                      null,
                      'web\u5E94\u7528\u7BA1\u7406'
                    ) },
                  React.createElement(
                    Menu.Item,
                    null,
                    'web\u5E94\u7528\u6982\u89C8'
                  ),
                  React.createElement(
                    Menu.Item,
                    null,
                    'web\u5E94\u7528\u5217\u8868'
                  )
                )
              )
            ),
            React.createElement(
              Col,
              { span: 2, style: { textAlign: 'center', borderBottom: '1px solid #e9e9e9' } },
              React.createElement(
                Dropdown,
                { overlay: menu },
                React.createElement(
                  'span',
                  { className: 'ant-dropdown-link' },
                  '\u5E10\u6237\u4FE1\u606F ',
                  React.createElement(Icon, { type: 'down' })
                )
              )
            )
          )
        );
      }
    });

    this.init = function () {
      ReactDOM.render(React.createElement(this.AppView, null), document.getElementById('example'));
    };
  }

  return App;
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ 16:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_16__;

/***/ }),

/***/ 17:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_17__;

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
//# sourceMappingURL=ant.js.map