(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("css!bootstrap"), require("css!bootstrap-theme"), require("jquery"), require("react-bootstrap"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "css!bootstrap", "css!bootstrap-theme", "jquery", "react-bootstrap"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react"), require("css!bootstrap"), require("css!bootstrap-theme"), require("jquery"), require("react-bootstrap")) : factory(root["react"], root["css!bootstrap"], root["css!bootstrap-theme"], root["jquery"], root["react-bootstrap"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_12__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 106);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),

/***/ 106:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = __webpack_require__(12);

__webpack_require__(3);

__webpack_require__(4);

var _jquery = __webpack_require__(7);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createClass({
    displayName: 'bootstrap_react',

    contextTypes: {
        router: _react2.default.PropTypes.object.isRequired
    },
    getInitialState: function getInitialState() {
        console.log('getInitialState');
        return { activeKey: 1 };
    },
    componentWillMount: function componentWillMount() {
        (0, _jquery2.default)('#pageLoading').hide();
    },

    handleClick: function handleClick(path) {
        this.context.router.push({
            pathname: path
        });
    },

    handleSelect: function handleSelect(selectedKey) {
        console.log('selected ' + selectedKey);
        this.setState({ activeKey: selectedKey });
    },

    render: function render() {
        var gridInstance = _react2.default.createElement(
            _reactBootstrap.Grid,
            null,
            _react2.default.createElement(
                _reactBootstrap.Row,
                { className: 'show-grid' },
                _react2.default.createElement(
                    _reactBootstrap.Col,
                    { xs: 12, md: 8 },
                    _react2.default.createElement(
                        'code',
                        null,
                        '<',
                        'Col xs={12} md={8}',
                        ' />'
                    )
                ),
                _react2.default.createElement(
                    _reactBootstrap.Col,
                    { xs: 6, md: 4 },
                    _react2.default.createElement(
                        'code',
                        null,
                        '<',
                        'Col xs={6} md={4}',
                        ' />'
                    )
                )
            ),
            _react2.default.createElement(
                _reactBootstrap.Row,
                { className: 'show-grid' },
                _react2.default.createElement(
                    _reactBootstrap.Col,
                    { xs: 6, md: 4 },
                    _react2.default.createElement(
                        'code',
                        null,
                        '<',
                        'Col xs={6} md={4}',
                        ' />'
                    )
                ),
                _react2.default.createElement(
                    _reactBootstrap.Col,
                    { xs: 6, md: 4 },
                    _react2.default.createElement(
                        'code',
                        null,
                        '<',
                        'Col xs={6} md={4}',
                        ' />'
                    )
                ),
                _react2.default.createElement(
                    _reactBootstrap.Col,
                    { xsHidden: true, md: 4 },
                    _react2.default.createElement(
                        'code',
                        null,
                        '<',
                        'Col xsHidden md={4}',
                        ' />'
                    )
                )
            ),
            _react2.default.createElement(
                _reactBootstrap.Row,
                { className: 'show-grid' },
                _react2.default.createElement(
                    _reactBootstrap.Col,
                    { xs: 6, xsOffset: 6 },
                    _react2.default.createElement(
                        'code',
                        null,
                        '<',
                        'Col xs={6} xsOffset={6}',
                        ' />'
                    )
                )
            ),
            _react2.default.createElement(
                _reactBootstrap.Row,
                { className: 'show-grid' },
                _react2.default.createElement(
                    _reactBootstrap.Col,
                    { md: 6, mdPush: 6 },
                    _react2.default.createElement(
                        'code',
                        null,
                        '<',
                        'Col md={6} mdPush={6}',
                        ' />'
                    )
                ),
                _react2.default.createElement(
                    _reactBootstrap.Col,
                    { md: 6, mdPull: 6 },
                    _react2.default.createElement(
                        'code',
                        null,
                        '<',
                        'Col md={6} mdPull={6}',
                        ' />'
                    )
                )
            )
        );

        return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                _reactBootstrap.Navbar,
                { collapseOnSelect: true },
                _react2.default.createElement(
                    _reactBootstrap.Navbar.Header,
                    null,
                    _react2.default.createElement(
                        _reactBootstrap.Navbar.Brand,
                        null,
                        _react2.default.createElement(
                            'a',
                            { href: 'javascript:void(0)', onClick: this.handleClick.bind(this, '/') },
                            'React-Bootstrap'
                        )
                    )
                ),
                _react2.default.createElement(
                    _reactBootstrap.Nav,
                    { bsStyle: 'pills', activeKey: this.state.activeKey, onSelect: this.handleSelect },
                    _react2.default.createElement(
                        _reactBootstrap.NavItem,
                        { eventKey: 1 },
                        '\u6700\u5927'
                    ),
                    _react2.default.createElement(
                        _reactBootstrap.NavItem,
                        { eventKey: 2 },
                        '\u6700\u5C0F'
                    ),
                    _react2.default.createElement(
                        _reactBootstrap.NavItem,
                        { eventKey: 3 },
                        '\u5E73\u5747\u503C'
                    )
                ),
                _react2.default.createElement(
                    _reactBootstrap.Navbar.Collapse,
                    null,
                    _react2.default.createElement(
                        _reactBootstrap.Nav,
                        null,
                        _react2.default.createElement(
                            _reactBootstrap.NavItem,
                            { eventKey: 1, href: '#' },
                            'Link'
                        ),
                        _react2.default.createElement(_reactBootstrap.NavItem, null),
                        _react2.default.createElement(
                            _reactBootstrap.NavDropdown,
                            { eventKey: 3, title: 'Dropdown', id: 'basic-nav-dropdown' },
                            _react2.default.createElement(
                                _reactBootstrap.MenuItem,
                                { eventKey: 3.1 },
                                'Action'
                            ),
                            _react2.default.createElement(
                                _reactBootstrap.MenuItem,
                                { eventKey: 3.2 },
                                'Another action'
                            ),
                            _react2.default.createElement(
                                _reactBootstrap.MenuItem,
                                { eventKey: 3.3 },
                                'Something else here'
                            ),
                            _react2.default.createElement(_reactBootstrap.MenuItem, { divider: true }),
                            _react2.default.createElement(
                                _reactBootstrap.MenuItem,
                                { eventKey: 3.3 },
                                'Separated link'
                            )
                        )
                    ),
                    _react2.default.createElement(
                        _reactBootstrap.Nav,
                        { pullRight: true },
                        _react2.default.createElement(
                            _reactBootstrap.NavItem,
                            { eventKey: 1, href: '#' },
                            'Link Right'
                        ),
                        _react2.default.createElement(
                            _reactBootstrap.NavItem,
                            { eventKey: 2, href: '#' },
                            'Link Right'
                        )
                    )
                )
            ),
            _react2.default.createElement(
                'div',
                { className: 'container' },
                gridInstance
            )
        );
    }
});

/***/ }),

/***/ 12:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_12__;

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ })

/******/ });
});
//# sourceMappingURL=bootstrap_react.js.map