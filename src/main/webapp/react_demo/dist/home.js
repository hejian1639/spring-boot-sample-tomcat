(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-router"), require("jquery"), require("react-bootstrap"), require("css-require"), require("react-intl"), require("react-loading"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-router", "jquery", "react-bootstrap", "css-require", "react-intl", "react-loading"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react"), require("react-router"), require("jquery"), require("react-bootstrap"), require("css-require"), require("react-intl"), require("react-loading")) : factory(root["react"], root["react-router"], root["jquery"], root["react-bootstrap"], root["css-require"], root["react-intl"], root["react-loading"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_12__, __WEBPACK_EXTERNAL_MODULE_19__, __WEBPACK_EXTERNAL_MODULE_91__, __WEBPACK_EXTERNAL_MODULE_92__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 114);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),

/***/ 114:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(6);

var _reactBootstrap = __webpack_require__(12);

var _reactIntl = __webpack_require__(91);

var _cssRequire = __webpack_require__(19);

var _cssRequire2 = _interopRequireDefault(_cssRequire);

var _reactLoading = __webpack_require__(92);

var _reactLoading2 = _interopRequireDefault(_reactLoading);

var _jquery = __webpack_require__(7);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var zh_CN = {
    home: "家",
    chinese: "中文",
    english: "英文",
    language: "语言",
    refresh: "刷新"
};

var en_US = {
    home: "Home",
    chinese: "Chinese",
    english: "English",
    language: "Language",
    refresh: "Refresh"
};

function Wrapper(_ref) {
    var children = _ref.children;

    return children;
}

// const NAV_LINKS = {
//     react_page: {
//         link: '/react_page',
//         title: 'Go to React Page'
//     },
//     'form': {
//         link: '/form',
//         title: 'Go to Form Page'
//     },
//     jmui: {
//         link: '/jmui',
//         title: 'Go to JMUI'
//     },
//     kitchensink: {
//         link: '/kitchensink',
//         title: 'Go to kitchensink'
//     },
//     animation: {
//         link: '/animation',
//         title: 'Go to Animation Page'
//     },
//     music: {
//         link: '/music',
//         title: 'Go to Music Page'
//     },
//     starter_template: {
//         link: '/starter_template',
//         title: 'Go to Starter Template Page'
//     },

//     bootstrap_react: {
//         link: '/bootstrap_react',
//         title: 'Go to React Bootstrap Page'
//     },

//     todos: {
//         link: '/todos',
//         title: 'Go to Todo list'
//     },
//     typescript: {
//         link: '/typescript',
//         title: 'Go to Typescript'
//     },
//     '2d-scroll': {
//         link: '/2d-scroll',
//         title: 'Go to 2D Scroll'
//     },
//     echart_test: {
//         link: '/echart_test',
//         title: 'Go to eChart Test'
//     },
//     video_test: {
//         link: '/video_test',
//         title: 'Go to Video Test'
//     },

// };

// const NAV_LINKS1 = {
//     bootstrap_popup: {
//         link: '/bootstrap_popup',
//         title: 'Go to Bootstrap Popup Page'
//     },

//     react_page: {
//         link: '/react_page',
//         title: 'Go to React Page'
//     },
//     'form': {
//         link: '/form',
//         title: 'Go to Form Page'
//     },
//     jmui: {
//         link: '/jmui',
//         title: 'Go to JMUI'
//     },
//     kitchensink: {
//         link: '/kitchensink',
//         title: 'Go to kitchensink'
//     },
//     animation: {
//         link: '/animation',
//         title: 'Go to Animation Page'
//     },
//     music: {
//         link: '/music',
//         title: 'Go to Music Page'
//     },
//     starter_template: {
//         link: '/starter_template',
//         title: 'Go to Starter Template Page'
//     },

//     bootstrap_react: {
//         link: '/bootstrap_react',
//         title: 'Go to React Bootstrap Page'
//     },

//     todos: {
//         link: '/todos',
//         title: 'Go to Todo list'
//     },
//     mobx_todos: {
//         link: '/mobx_todos',
//         title: 'Go to MobX Todo list'
//     },
//     responsive: {
//         link: '/responsive',
//         title: 'Go to Responsive Page'
//     },
// };

exports.default = _react2.default.createClass({
    displayName: 'home',


    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps: ', nextProps);
    },

    componentWillMount: function componentWillMount() {
        var _this = this;

        console.log('componentWillMount');
        (0, _jquery2.default)('#pageLoading').show();

        var p1 = new Promise(function (resolve, reject) {
            _this.bootstrap = _cssRequire2.default.load('lib/bootstrap', resolve);
        });

        var p2 = new Promise(function (resolve, reject) {
            _this.bootstrapTheme = _cssRequire2.default.load('lib/bootstrap-theme', resolve);
        });

        var p3 = _jquery2.default.ajax('/service/home_list1', { dataType: "json" }).then(function (list) {
            return _this.setState({ nav_links: list });
        });

        Promise.all([p1, p2, p3]).then(function () {
            _this.setState({ loading: false });
            (0, _jquery2.default)('#pageLoading').hide();
            // console.log(this.state.nav_links);
        }).catch(function (e) {
            return console.log(e);
        });
    },

    getInitialState: function getInitialState() {
        console.log('getInitialState');
        return { nav_links: null, lang: en_US, loading: true };
    },

    timerId: null,

    componentDidMount: function componentDidMount() {
        console.log('componentDidMount');
    },

    componentWillUnmount: function componentWillUnmount() {
        _cssRequire2.default.unload(this.bootstrap);
        _cssRequire2.default.unload(this.bootstrapTheme);
        console.log('componentWillUnmount');
    },

    refresh: function refresh() {
        var _this2 = this;

        _jquery2.default.ajax('/service/home_list2', { dataType: "json" }).then(function (list) {
            return _this2.setState({ nav_links: list });
        });
    },

    render: function render() {
        var _this3 = this;

        console.log('render');

        if (this.state.loading) {
            return _react2.default.createElement(
                'div',
                { style: { width: '64px', height: '64px', position: 'absolute', margin: '-32px 0 0 -32px', left: '50%', top: '50%' } },
                _react2.default.createElement(_reactLoading2.default, { type: 'spin', color: 'blue' })
            );
        }

        return _react2.default.createElement(
            _reactIntl.IntlProvider,
            { locale: 'en', messages: this.state.lang },
            _react2.default.createElement(
                'div',
                { style: { padding: '10px' } },
                _react2.default.createElement(
                    'h1',
                    null,
                    _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'home' })
                ),
                _react2.default.createElement(
                    'h2',
                    null,
                    this.props.subtitle
                ),
                _react2.default.createElement(
                    _reactBootstrap.DropdownButton,
                    { bsStyle: 'primary', title: this.state.lang.language, id: 'dropdown-basic' },
                    _react2.default.createElement(
                        _reactBootstrap.MenuItem,
                        { onClick: function onClick() {
                                _this3.setState({ lang: zh_CN });
                            } },
                        _react2.default.createElement(_reactIntl.FormattedMessage, {
                            id: 'chinese',
                            defaultMessage: 'Chinese' })
                    ),
                    _react2.default.createElement(
                        _reactBootstrap.MenuItem,
                        { onClick: function onClick() {
                                _this3.setState({ lang: en_US });
                            } },
                        _react2.default.createElement(_reactIntl.FormattedMessage, {
                            id: 'english',
                            defaultMessage: 'English' })
                    )
                ),
                _react2.default.createElement('br', null),
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                    'ul',
                    { role: 'nav', style: { paddingLeft: '20px' } },
                    Object.entries(this.state.nav_links).map(function (_ref2) {
                        var _ref3 = _slicedToArray(_ref2, 2),
                            linkName = _ref3[0],
                            _ref3$ = _ref3[1],
                            link = _ref3$.link,
                            title = _ref3$.title;

                        return _react2.default.createElement(
                            'li',
                            { key: linkName, style: { paddingBottom: '5px' } },
                            _react2.default.createElement(
                                _reactRouter.Link,
                                { to: link },
                                title
                            )
                        );
                    })
                ),
                _react2.default.createElement(
                    _reactBootstrap.Button,
                    { ref: 'refresh', bsStyle: 'primary',
                        onClick: this.refresh },
                    _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'refresh' })
                )
            )
        );
    }
});

/***/ }),

/***/ 12:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_12__;

/***/ }),

/***/ 19:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_19__;

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ }),

/***/ 91:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_91__;

/***/ }),

/***/ 92:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_92__;

/***/ })

/******/ });
});
//# sourceMappingURL=home.js.map