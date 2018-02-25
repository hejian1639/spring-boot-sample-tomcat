(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"), require("react-router"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom", "react-router"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react"), require("react-dom"), require("react-router")) : factory(root["react"], root["react-dom"], root["react-router"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_6__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 101);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),

/***/ 101:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(5);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouter = __webpack_require__(6);

var _reactRouter2 = _interopRequireDefault(_reactRouter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Router = _reactRouter2.default.Router;
var Route = _reactRouter2.default.Route;
var IndexRoute = _reactRouter2.default.IndexRoute;
var Link = _reactRouter2.default.Link;
var IndexLink = _reactRouter2.default.IndexLink;
var browserHistory = _reactRouter2.default.browserHistory;

var ACTIVE = { color: 'red' };

var App = function App(ref) {
  return _react2.default.createElement(
    'div',
    { style: { padding: '10' } },
    _react2.default.createElement(
      'h1',
      null,
      'APP!'
    ),
    _react2.default.createElement(
      'ul',
      null,
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          Link,
          { to: 'react_demo/', activeStyle: ACTIVE },
          '/'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          IndexLink,
          { to: 'react_demo/', activeStyle: ACTIVE },
          '/IndexLink'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          Link,
          { to: 'react_demo/users', activeStyle: ACTIVE },
          '/users'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          IndexLink,
          { to: 'react_demo/users', activeStyle: ACTIVE },
          '/users IndexLink'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          Link,
          { to: 'react_demo/users/ryan', activeStyle: ACTIVE },
          '/users/ryan'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          Link,
          { to: { pathname: 'react_demo/users/ryan', query: { foo: 'bar' } },
            activeStyle: ACTIVE },
          '/users/ryan?foo=bar'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          Link,
          { to: 'react_demo/about', activeStyle: ACTIVE },
          '/about'
        )
      )
    ),
    ref.children
  );
};

var Index = function Index() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h2',
      null,
      'Index!'
    )
  );
};

var Users = function Users(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h2',
      null,
      'Users'
    ),
    children
  );
};

var UsersIndex = function UsersIndex() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h3',
      null,
      'UsersIndex'
    )
  );
};

var User = function User(_ref2) {
  var id = _ref2.params.id;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h3',
      null,
      'User ',
      id
    )
  );
};

var About = function About() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h2',
      null,
      'About'
    )
  );
};
function withExampleBasename(history, dirname) {
  return History.useBasename(function () {
    return history;
  })({ basename: '/' + dirname });
}

function Root() {
  this.AppView = _react2.default.createClass({
    displayName: 'AppView',


    render: function render() {

      return _react2.default.createElement(
        Router,
        { history: withExampleBasename(browserHistory, '') },
        _react2.default.createElement(
          Route,
          { path: 'react_demo/', component: App },
          _react2.default.createElement(IndexRoute, { component: function component() {
              return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                  'h2',
                  null,
                  'Index!'
                )
              );
            } }),
          _react2.default.createElement(Route, { path: 'about', component: About }),
          _react2.default.createElement(
            Route,
            { path: 'users', component: Users },
            _react2.default.createElement(IndexRoute, { component: UsersIndex }),
            _react2.default.createElement(Route, { path: ':id', component: User })
          )
        )
      );
    }
  });
  this.init = function () {
    _reactDom2.default.render(_react2.default.createElement(this.AppView, null), document.getElementById('example'));
  };
}

module.exports = Root;

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ })

/******/ });
});
//# sourceMappingURL=active-links.js.map