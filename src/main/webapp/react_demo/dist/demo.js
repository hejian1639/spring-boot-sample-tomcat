(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react"), require("react-dom")) : factory(root["react"], root["react-dom"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_5__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 109);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),

/***/ 109:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_RESULT__;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

$(function () {
  ReactDOM.render(_react2.default.createElement(
    'h1',
    null,
    'Hello, world!'
  ), $('#example')[0]);
});

$(function () {
  var names = ['Alice', 'Emily', 'Kate'];

  ReactDOM.render(_react2.default.createElement(
    'div',
    null,
    _react2.default.Children.map(names, function (name) {
      return _react2.default.createElement(
        'div',
        null,
        'Hello, ',
        name,
        '!'
      );
    })
  ), $('#example1')[0]);
});

$(function () {
  ReactDOM.render(_react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h1',
      null,
      'Hello world!'
    ),
    _react2.default.createElement(
      'h2',
      null,
      'React is awesome'
    )
  ), document.getElementById('example2'));
});

$(function () {
  var HelloMessage = _react2.default.createClass({
    displayName: 'HelloMessage',

    render: function render() {
      return _react2.default.createElement(
        'h1',
        null,
        'Hello ',
        this.props.name
      );
    }
  });

  ReactDOM.render(_react2.default.createElement(HelloMessage, { name: 'John' }), document.getElementById('example3'));
  ReactDOM.render(_react2.default.createElement(HelloMessage, { name: 'Jason' }), document.getElementById('example4'));
});

$(function () {
  var HelloMessage = function (_Component) {
    _inherits(HelloMessage, _Component);

    function HelloMessage() {
      _classCallCheck(this, HelloMessage);

      return _possibleConstructorReturn(this, (HelloMessage.__proto__ || Object.getPrototypeOf(HelloMessage)).apply(this, arguments));
    }

    _createClass(HelloMessage, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          null,
          'Hello ',
          this.props.name
        );
      }
    }]);

    return HelloMessage;
  }(_react.Component);
  // 加载组件到 DOM 元素 mountNode


  (0, _reactDom.render)(_react2.default.createElement(HelloMessage, { name: 'John' }), document.getElementById('example4'));
});

!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {

  var React = __webpack_require__(0);

  function App() {
    this.AppView = React.createClass({
      displayName: 'AppView',

      render: function render() {
        return React.createElement(
          'div',
          null,
          React.createElement(
            'p',
            null,
            'Hello, React!'
          )
        );
      }
    });
  }

  App.prototype.init = function () {
    React.render(React.createElement(this.AppView, null), document.body);
  };

  return App;
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ })

/******/ });
});
//# sourceMappingURL=demo.js.map