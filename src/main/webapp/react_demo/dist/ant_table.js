(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("css!bootstrap"), require("css!bootstrap-theme"), require("antd"), require("css!antd"), require("moment"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "css!bootstrap", "css!bootstrap-theme", "antd", "css!antd", "moment"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react"), require("css!bootstrap"), require("css!bootstrap-theme"), require("antd"), require("css!antd"), require("moment")) : factory(root["react"], root["css!bootstrap"], root["css!bootstrap-theme"], root["antd"], root["css!antd"], root["moment"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_16__, __WEBPACK_EXTERNAL_MODULE_17__, __WEBPACK_EXTERNAL_MODULE_89__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 104);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),

/***/ 104:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(3);

__webpack_require__(4);

__webpack_require__(17);

var _antd = __webpack_require__(16);

var _moment = __webpack_require__(89);

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MonthPicker = _antd.DatePicker.MonthPicker,
    RangePicker = _antd.DatePicker.RangePicker;

var dateFormat = 'YYYY/MM/DD';
var monthFormat = 'YYYY/MM';

exports.default = _react2.default.createClass({
    displayName: 'ant_table',
    componentWillMount: function componentWillMount() {
        $('#pageLoading').hide();
    },
    onChange: function onChange(value, dateString) {
        console.log('Selected Time: ', value);
        console.log('Formatted Selected Time: ', dateString);
        console.log(new Date(value));
    },
    onOk: function onOk(value) {
        console.log('onOk: ', value);
    },
    render: function render() {

        var columns = [{
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
            render: function render(text) {
                return _react2.default.createElement(
                    'a',
                    { href: '#' },
                    text
                );
            }
        }, {
            title: '年龄',
            dataIndex: 'age',
            key: 'age'
        }, {
            title: '住址',
            dataIndex: 'address',
            key: 'address'
        }, {
            title: '操作',
            key: 'operation',
            render: function render(text, record) {
                return _react2.default.createElement(
                    'span',
                    null,
                    _react2.default.createElement(
                        'a',
                        { href: '#' },
                        '\u64CD\u4F5C\u4E00',
                        record.name
                    ),
                    _react2.default.createElement('span', { className: 'ant-divider' }),
                    _react2.default.createElement(
                        'a',
                        { href: '#' },
                        '\u64CD\u4F5C\u4E8C'
                    ),
                    _react2.default.createElement('span', { className: 'ant-divider' }),
                    _react2.default.createElement(
                        'a',
                        { href: '#', className: 'ant-dropdown-link' },
                        '\u66F4\u591A ',
                        _react2.default.createElement(_antd.Icon, { type: 'down' })
                    )
                );
            }
        }];

        var data = [{
            key: '1',
            name: '胡彦斌',
            age: 32,
            address: '西湖区湖底公园1号'
        }, {
            key: '2',
            name: '胡彦祖',
            age: 42,
            address: '西湖区湖底公园1号'
        }, {
            key: '3',
            name: '李大嘴',
            age: 32,
            address: '西湖区湖底公园1号'
        }];

        return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_antd.Table, { columns: columns, dataSource: data, onRowClick: function onRowClick() {
                    console.log("onRowClick");
                }, onRowHover: function onRowHover() {
                    console.log("onMyRowHover");
                } }),
            _react2.default.createElement(_antd.DatePicker, { defaultValue: (0, _moment2.default)(), format: dateFormat, onChange: this.onChange, onOk: this.onOk }),
            _react2.default.createElement('br', null),
            _react2.default.createElement(MonthPicker, { defaultValue: (0, _moment2.default)('2015/01', monthFormat), format: monthFormat }),
            _react2.default.createElement('br', null),
            _react2.default.createElement(RangePicker, {
                defaultValue: [(0, _moment2.default)('2015/01/01', dateFormat), (0, _moment2.default)('2015/01/01', dateFormat)],
                format: dateFormat
            })
        );
    }
});

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

/***/ 89:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_89__;

/***/ })

/******/ });
});
//# sourceMappingURL=ant_table.js.map