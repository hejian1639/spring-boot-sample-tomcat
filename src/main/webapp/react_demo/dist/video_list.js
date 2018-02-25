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
/******/ 	return __webpack_require__(__webpack_require__.s = 132);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),

/***/ 132:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_RESULT__;

!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {

  var React = __webpack_require__(0);
  var ReactDOM = __webpack_require__(5);

  __webpack_require__(3);
  __webpack_require__(4);

  function App() {

    this.AppView = React.createClass({
      displayName: 'AppView',


      showGeneral: function showGeneral() {
        var storageStyle = { backgroundColor: '#e0e0e0', borderRadius: '12px', padding: '0 10px' };
        var storageStyle1 = { backgroundColor: '#e0e0e0', borderRadius: '12px', padding: '0 10px', marginLeft: '24px' };
        ReactDOM.render(React.createElement(
          'div',
          null,
          React.createElement(
            'h2',
            { className: 'page-header' },
            '\u89C6\u9891\u6982\u89C8'
          ),
          React.createElement(
            'h3',
            null,
            '\u89C6\u9891\u5B58\u50A8\u7A7A\u95F4'
          ),
          React.createElement(
            'div',
            null,
            React.createElement(
              'span',
              { style: storageStyle },
              '\u5B58\u50A8\u7A7A\u95F4\uFF1A',
              React.createElement(
                'span',
                null,
                '\u65E0\u9650\u5236'
              )
            ),
            React.createElement(
              'span',
              { style: storageStyle1 },
              '\u5DF2\u7528\u5B58\u50A8\u7A7A\u95F4\uFF1A',
              React.createElement(
                'span',
                null,
                '150G'
              )
            )
          ),
          React.createElement(
            'div',
            null,
            React.createElement(
              'h3',
              null,
              '\u89C6\u9891\u5B58\u50A8\u7A7A\u95F4'
            ),
            React.createElement(
              'div',
              { className: 'classify' },
              React.createElement(
                'div',
                { style: { backgroundColor: '#f1c86e', width: '20%' } },
                React.createElement('span', { className: 'all_img' }),
                React.createElement(
                  'span',
                  null,
                  '\u5168\u90E8'
                ),
                React.createElement('i', { className: 'hr' }),
                React.createElement(
                  'span',
                  { id: 'total', className: 'nums' },
                  '1'
                )
              ),
              React.createElement(
                'div',
                { className: 'class_div has' },
                React.createElement('span', { className: 'has_img' }),
                React.createElement(
                  'span',
                  null,
                  '\u5DF2\u53D1\u5E03'
                ),
                React.createElement('i', { className: 'hr' }),
                React.createElement(
                  'span',
                  { id: 'release', className: 'nums' },
                  '1'
                )
              ),
              React.createElement(
                'div',
                { className: 'class_div check' },
                React.createElement('span', { className: 'check_img' }),
                React.createElement(
                  'span',
                  null,
                  '\u5BA1\u6838\u4E2D'
                ),
                React.createElement('i', { className: 'hr' }),
                React.createElement(
                  'span',
                  { id: 'approving', className: 'nums' },
                  '0'
                )
              ),
              React.createElement(
                'div',
                { className: 'class_div check_no' },
                React.createElement('span', { className: 'check_no_img' }),
                React.createElement(
                  'span',
                  null,
                  '\u672A\u8FC7\u5BA1'
                ),
                React.createElement('i', { className: 'hr' }),
                React.createElement(
                  'span',
                  { id: 'refuse', className: 'nums' },
                  '0'
                )
              ),
              React.createElement(
                'div',
                { className: 'class_div not' },
                React.createElement('span', { className: 'not_img' }),
                React.createElement(
                  'span',
                  null,
                  '\u672A\u53D1\u5E03'
                ),
                React.createElement('i', { className: 'hr' }),
                React.createElement(
                  'span',
                  { id: 'not-release', className: 'nums' },
                  '0'
                )
              ),
              React.createElement(
                'div',
                { className: 'class_div down' },
                React.createElement('span', { className: 'down_img' }),
                React.createElement(
                  'span',
                  null,
                  '\u5DF2\u4E0B\u67B6'
                ),
                React.createElement('i', { className: 'hr' }),
                React.createElement(
                  'span',
                  { id: 'shelve', className: 'nums' },
                  '0'
                )
              ),
              React.createElement(
                'div',
                { className: 'class_div del' },
                React.createElement('span', { className: 'del_img' }),
                React.createElement(
                  'span',
                  null,
                  '\u5DF2\u5220\u9664'
                ),
                React.createElement('i', { className: 'hr' }),
                React.createElement(
                  'span',
                  { id: 'delete', className: 'nums' },
                  '0'
                )
              )
            )
          )
        ), document.getElementById('content'));
      },

      showList: function showList() {
        ReactDOM.render(React.createElement(
          'h2',
          { className: 'page-header' },
          '\u89C6\u9891\u7BA1\u7406'
        ), document.getElementById('content'));
      },

      render: function render() {
        var imgStyle = { display: 'inline-block', borderRadius: '50%' };

        return React.createElement(
          'div',
          { className: 'row' },
          React.createElement(
            'div',
            { className: 'col-sm-3 col-md-2',
              style: { position: 'fixed', top: '51px', bottom: '0', left: '0', display: 'block', padding: '20px',
                overflowX: 'hidden', overflowY: 'auto', backgroundColor: '#f5f5f5', borderRight: '1px solid #eee' } },
            React.createElement(
              'ul',
              { className: 'nav nav-sidebar' },
              React.createElement(
                'li',
                { className: 'active' },
                React.createElement(
                  'h3',
                  null,
                  '\u89C6\u9891\u7BA1\u7406 ',
                  React.createElement(
                    'span',
                    { className: 'sr-only' },
                    '(current)'
                  )
                )
              ),
              React.createElement(
                'li',
                null,
                React.createElement('hr', null)
              ),
              React.createElement(
                'li',
                null,
                React.createElement(
                  'a',
                  { href: 'javascript:void(0)', onClick: this.showGeneral },
                  '\u89C6\u9891\u6982\u89C8'
                )
              ),
              React.createElement(
                'li',
                null,
                React.createElement(
                  'a',
                  { href: 'javascript:void(0)', onClick: this.showList },
                  '\u89C6\u9891\u5217\u8868'
                )
              )
            )
          ),
          React.createElement('div', { id: 'content', className: 'col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2', style: { padding: '20px' } })
        );
      }
    });

    this.init = function (id, tab) {
      var video = ReactDOM.render(React.createElement(this.AppView, null), document.getElementById(id));
      switch (tab) {
        case 'general':
          video.showGeneral();
          break;
        case 'list':
          video.showList();
          break;
        default:
          break;
      }
    };
  }

  return App;
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

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
//# sourceMappingURL=video_list.js.map