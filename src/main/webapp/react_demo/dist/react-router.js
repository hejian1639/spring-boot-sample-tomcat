(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("css!bootstrap"), require("css!bootstrap-theme"), require("react-dom"), require("antd"), require("css!antd"), require("css!jquery-ui"), require("jquery-ui"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "css!bootstrap", "css!bootstrap-theme", "react-dom", "antd", "css!antd", "css!jquery-ui", "jquery-ui"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react"), require("css!bootstrap"), require("css!bootstrap-theme"), require("react-dom"), require("antd"), require("css!antd"), require("css!jquery-ui"), require("jquery-ui")) : factory(root["react"], root["css!bootstrap"], root["css!bootstrap-theme"], root["react-dom"], root["antd"], root["css!antd"], root["css!jquery-ui"], root["jquery-ui"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_16__, __WEBPACK_EXTERNAL_MODULE_17__, __WEBPACK_EXTERNAL_MODULE_79__, __WEBPACK_EXTERNAL_MODULE_88__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 126);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),

/***/ 126:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var React = __webpack_require__(0);
var ReactDOM = __webpack_require__(5);

__webpack_require__(3);
__webpack_require__(4);

__webpack_require__(79);
__webpack_require__(88);

// var BootstrapButton = require('app/button');
// var BootstrapModal = require('app/modal');

__webpack_require__(17);
var antd = __webpack_require__(16);
var Select = antd.Select;
var Option = antd.Select.Option;

exports.default = React.createClass({
    displayName: 'react-router',

    getInitialState: function getInitialState() {
        return { degree: 0, hovered: false };
    },

    timerId: null,

    componentDidMount: function componentDidMount() {
        var availableTags = ["ActionScript", "AppleScript", "Asp", "BASIC", "C", "C++", "Clojure", "COBOL", "ColdFusion", "Erlang", "Fortran", "Groovy", "Haskell", "Java", "JavaScript", "Lisp", "Perl", "PHP", "Python", "Ruby", "Scala", "Scheme"];
        $(this.refs.autocomplete).autocomplete({
            source: availableTags
        });

        var self = this;

        this.timerId = setInterval(function () {
            self.setState({ degree: self.state.degree + 1 });
        }, 50);
    },

    componentWillUnmount: function componentWillUnmount() {
        clearInterval(this.timerId);
    },
    handleClick: function handleClick(module) {
        // require([module], function (App) {
        //     var app = new App();
        //     app.init();
        // });
    },
    openModal: function openModal() {
        this.refs.modal.open();
    },
    closeModal: function closeModal() {
        this.refs.modal.close();
    },
    handleModalDidClose: function handleModalDidClose() {
        console.log("The modal has been dismissed!");
    },
    handleCancel: function handleCancel() {
        if (confirm('Are you sure you want to cancel?')) {
            this.refs.modal.close();
        }
    },
    rotate: function rotate() {
        console.log(this.state.degree);

        this.setState({ degree: this.state.degree + 5 });

        console.log(this.state.degree);
        //        this.forceUpdate();
    },

    appendOption: function appendOption() {
        var $option = $("<option value='longOption'>longOption</option>"); //  创建第一个<li>元素
        $(this.refs.selector).append($option);
        //$("#selector").append($option);      
    },

    style: function style() {
        if (this.state.hovered) {
            return { background: 'red', width: '300px', height: '200px', transition: 'background 2s, width 2s, height 2s' };
        } else {
            return { background: 'yellow', width: '100px', height: '100px', transition: 'background 2s, width 2s, height 2s' };
        }
    },
    onMouseEnter: function onMouseEnter() {
        this.setState({ hovered: true });
    },

    onMouseLeave: function onMouseLeave() {
        this.setState({ hovered: false });
    },

    render: function render() {
        var _rotateStyle;

        var modal = React.createElement(
            BootstrapModal,
            {
                ref: 'modal',
                confirm: 'OK',
                cancel: 'Cancel',
                onCancel: this.handleCancel,
                onConfirm: this.closeModal,
                onHidden: this.handleModalDidClose,
                title: 'Hello, Bootstrap!' },
            'This is a React component powered by jQuery and Bootstrap!'
        );

        var rotateStyle = (_rotateStyle = {
            margin: '30',
            width: '100px',
            height: '75px',
            backgroundColor: 'yellow',
            border: '1px solid black'
        }, _defineProperty(_rotateStyle, 'border', '2px solid'), _defineProperty(_rotateStyle, 'borderRadius', '5px'), _defineProperty(_rotateStyle, 'textShadow', '1px 1px 1px #FF0000'), _defineProperty(_rotateStyle, 'transform', 'rotate(' + this.state.degree + 'deg)'), _rotateStyle);

        return React.createElement(
            'div',
            { style: { backgroundImage: "url('eg_bg_06.gif')", padding: '10' } },
            React.createElement(
                'h1',
                null,
                'Hello, ',
                React.createElement(
                    'strong',
                    null,
                    'React Page 1!'
                )
            ),
            React.createElement(
                'a',
                { href: 'javascript:void(0)', onClick: this.handleClick.bind(this, 'app/screen2') },
                'Go to React Page 2'
            ),
            React.createElement('br', null),
            React.createElement(
                'a',
                { href: 'javascript:void(0)', onClick: this.handleClick.bind(this, 'app/form') },
                'Go to Form Page'
            ),
            React.createElement('br', null),
            React.createElement(
                'a',
                { href: 'javascript:void(0)', onClick: this.handleClick.bind(this, 'app/table') },
                'Go to Table Page'
            ),
            React.createElement('br', null),
            React.createElement(
                'a',
                { href: 'javascript:void(0)', onClick: this.handleClick.bind(this, 'app/starter-template') },
                'Go to Starter Template Page'
            ),
            React.createElement('br', null),
            React.createElement(
                'a',
                { href: 'javascript:void(0)', onClick: this.handleClick.bind(this, 'app/console') },
                'Go to Console Page'
            ),
            React.createElement('br', null),
            React.createElement(
                'a',
                { href: 'javascript:void(0)', onClick: this.handleClick.bind(this, 'app/ant') },
                'Go to Ant Page'
            ),
            React.createElement('br', null),
            React.createElement(
                'a',
                { href: 'javascript:void(0)', onClick: this.handleClick.bind(this, 'app/ant_table') },
                'Go to Ant Table Page'
            ),
            React.createElement('br', null),
            React.createElement(
                'a',
                { href: 'javascript:void(0)', onClick: this.handleClick.bind(this, 'app/jmui-test') },
                'Go to JMUI Page'
            ),
            React.createElement('br', null),
            modal,
            React.createElement(
                BootstrapButton,
                { onClick: this.openModal, className: 'btn-default', style: { margin: '10' } },
                'Open modal'
            ),
            React.createElement(
                BootstrapButton,
                { onClick: this.rotate, className: 'btn-default', style: { margin: '10' } },
                'rotate'
            ),
            React.createElement(
                'div',
                { style: rotateStyle },
                '\u4F60\u597D\u3002\u8FD9\u662F\u4E00\u4E2A div \u5143\u7D20\u3002'
            ),
            React.createElement('br', null),
            React.createElement(
                'div',
                null,
                React.createElement('input', { ref: 'autocomplete', title: 'type "a"' })
            ),
            React.createElement('br', null),
            React.createElement(
                'div',
                { style: { fontFamily: 'myFirstFont' } },
                'With CSS3, websites can finally use fonts other than the pre-selected "web-safe" fonts.'
            ),
            React.createElement('br', null),
            React.createElement('div', { onMouseEnter: this.onMouseEnter, onMouseLeave: this.onMouseLeave, style: this.style() }),
            React.createElement('br', null),
            React.createElement('div', { style: { background: 'red', width: '100px', height: '100px', animation: 'myfirst 5s' } }),
            React.createElement('br', null),
            React.createElement(antd.DatePicker, null),
            React.createElement('br', null),
            React.createElement(antd.Input, { maxLength: '9' }),
            React.createElement('br', null),
            React.createElement(
                Select,
                { defaultValue: 'lucy', style: { width: 120 } },
                React.createElement(
                    Option,
                    { value: 'jack' },
                    'Jack'
                ),
                React.createElement(
                    Option,
                    { value: 'lucy' },
                    'Lucy'
                ),
                React.createElement(
                    Option,
                    { value: 'disabled', disabled: true },
                    'Disabled'
                ),
                React.createElement(
                    Option,
                    { value: 'yiminghe', title: 'yiminghe' },
                    'yiminghe'
                )
            ),
            React.createElement('br', null),
            React.createElement(
                'select',
                { id: 'selector', ref: 'selector' },
                React.createElement(
                    'option',
                    { value: 'volvo' },
                    'Volvo'
                ),
                React.createElement(
                    'option',
                    { value: 'saab' },
                    'Saab'
                ),
                React.createElement(
                    'option',
                    { value: 'opel' },
                    'Opel'
                ),
                React.createElement(
                    'option',
                    { value: 'audi' },
                    'Audi'
                )
            ),
            React.createElement('br', null),
            React.createElement(
                BootstrapButton,
                { onClick: this.appendOption, className: 'btn-default', style: { margin: '10' } },
                'Append option'
            )
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

/***/ 5:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),

/***/ 79:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_79__;

/***/ }),

/***/ 88:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_88__;

/***/ })

/******/ });
});
//# sourceMappingURL=react-router.js.map