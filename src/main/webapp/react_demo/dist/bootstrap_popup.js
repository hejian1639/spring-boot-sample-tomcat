(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("css!bootstrap"), require("css!bootstrap-theme"), require("react-router"), require("jquery"), require("bootstrap"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "css!bootstrap", "css!bootstrap-theme", "react-router", "jquery", "bootstrap"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react"), require("css!bootstrap"), require("css!bootstrap-theme"), require("react-router"), require("jquery"), require("bootstrap")) : factory(root["react"], root["css!bootstrap"], root["css!bootstrap-theme"], root["react-router"], root["jquery"], root["bootstrap"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_25__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 105);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),

/***/ 105:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(3);

__webpack_require__(4);

var _button = __webpack_require__(27);

var _button2 = _interopRequireDefault(_button);

var _modal = __webpack_require__(32);

var _modal2 = _interopRequireDefault(_modal);

var _reactRouter = __webpack_require__(6);

var _jquery = __webpack_require__(7);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var unlisten;

exports.default = _react2.default.createClass({
    displayName: 'bootstrap_popup',
    componentWillMount: function componentWillMount() {
        var _this = this;

        console.log('componentWillMount');

        (0, _jquery2.default)('#pageLoading').hide();

        unlisten = _reactRouter.browserHistory.listen(function (location, action) {
            // location is an object like window.location 
            console.log(action, location.pathname, location.state);
            if (!location.pathname.match(/dialog$/) && _this.refs.modal) {
                _this.refs.modal.close();
            }
        });
    },
    componentWillUnmount: function componentWillUnmount() {
        console.log('componentWillUnmount');
        unlisten();
    },


    openModal: function openModal() {
        this.refs.modal.open();
        // location.href += '/dialog';
        _reactRouter.browserHistory.push(_reactRouter.browserHistory.getCurrentLocation().pathname + '/dialog');
    },
    closeModal: function closeModal() {
        _reactRouter.browserHistory.goBack();
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
    render: function render() {
        var modal = _react2.default.createElement(
            _modal2.default,
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
        return _react2.default.createElement(
            'div',
            null,
            modal,
            _react2.default.createElement(
                _button2.default,
                { onClick: this.openModal, className: 'btn-default', style: { margin: '10px' } },
                'Open modal'
            )
        );
    }
});

/***/ }),

/***/ 25:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_25__;

/***/ }),

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(3);

__webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BootstrapButton = _react2.default.createClass({
  displayName: 'BootstrapButton',

  render: function render() {
    return _react2.default.createElement('a', _extends({}, this.props, {
      href: 'javascript:;',
      role: 'button',
      className: (this.props.className || '') + ' btn' }));
  }
});

exports.default = BootstrapButton;

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(3);

__webpack_require__(4);

__webpack_require__(25);

var _button = __webpack_require__(27);

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BootstrapModal = _react2.default.createClass({
    displayName: 'BootstrapModal',

    // The following two methods are the only places we need to
    // integrate Bootstrap or jQuery with the components lifecycle methods.
    componentDidMount: function componentDidMount() {
        // When the component is added, turn it into a modal
        $(this.refs.root).modal({ backdrop: 'static', keyboard: false, show: false });

        // Bootstrap's modal class exposes a few events for hooking into modal
        // functionality. Lets hook into one of them:
        $(this.refs.root).on('hidden.bs.modal', this.handleHidden);
    },
    componentWillUnmount: function componentWillUnmount() {
        $(this.refs.root).off('hidden.bs.modal', this.handleHidden);
    },
    close: function close() {
        $(this.refs.root).modal('hide');
    },
    open: function open() {
        $(this.refs.root).modal('show');
    },
    render: function render() {
        var confirmButton = null;
        var cancelButton = null;

        if (this.props.confirm) {
            confirmButton = _react2.default.createElement(
                _button2.default,
                {
                    onClick: this.handleConfirm,
                    className: 'btn-primary' },
                this.props.confirm
            );
        }
        if (this.props.cancel) {
            cancelButton = _react2.default.createElement(
                _button2.default,
                { onClick: this.handleCancel, className: 'btn-default' },
                this.props.cancel
            );
        }

        return _react2.default.createElement(
            'div',
            { className: 'modal fade', ref: 'root' },
            _react2.default.createElement(
                'div',
                { className: 'modal-dialog' },
                _react2.default.createElement(
                    'div',
                    { className: 'modal-content' },
                    _react2.default.createElement(
                        'div',
                        { className: 'modal-header' },
                        _react2.default.createElement(
                            'button',
                            {
                                type: 'button',
                                className: 'close',
                                onClick: this.handleCancel },
                            '\xD7'
                        ),
                        _react2.default.createElement(
                            'h3',
                            null,
                            this.props.title
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'modal-body' },
                        this.props.children
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'modal-footer' },
                        cancelButton,
                        confirmButton
                    )
                )
            )
        );
    },
    handleCancel: function handleCancel() {
        if (this.props.onCancel) {
            this.props.onCancel();
        }
    },
    handleConfirm: function handleConfirm() {
        if (this.props.onConfirm) {
            this.props.onConfirm();
        }
    },
    handleHidden: function handleHidden() {
        if (this.props.onHidden) {
            this.props.onHidden();
        }
    }
});

exports.default = BootstrapModal;

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ })

/******/ });
});
//# sourceMappingURL=bootstrap_popup.js.map