(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-bootstrap"), require("css-require"), require("css!video-js"), require("video"), require("videojs-contrib-hls"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-bootstrap", "css-require", "css!video-js", "video", "videojs-contrib-hls"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react"), require("react-bootstrap"), require("css-require"), require("css!video-js"), require("video"), require("videojs-contrib-hls")) : factory(root["react"], root["react-bootstrap"], root["css-require"], root["css!video-js"], root["video"], root["videojs-contrib-hls"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_12__, __WEBPACK_EXTERNAL_MODULE_19__, __WEBPACK_EXTERNAL_MODULE_82__, __WEBPACK_EXTERNAL_MODULE_93__, __WEBPACK_EXTERNAL_MODULE_94__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 133);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),

/***/ 12:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_12__;

/***/ }),

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _video = __webpack_require__(93);

var _video2 = _interopRequireDefault(_video);

__webpack_require__(82);

__webpack_require__(94);

var _reactBootstrap = __webpack_require__(12);

var _cssRequire = __webpack_require__(19);

var _cssRequire2 = _interopRequireDefault(_cssRequire);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VideoTest = function (_React$Component) {
    _inherits(VideoTest, _React$Component);

    function VideoTest() {
        _classCallCheck(this, VideoTest);

        return _possibleConstructorReturn(this, (VideoTest.__proto__ || Object.getPrototypeOf(VideoTest)).apply(this, arguments));
    }

    _createClass(VideoTest, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.bootstrap = _cssRequire2.default.load('lib/bootstrap');
            this.bootstrapTheme = _cssRequire2.default.load('lib/bootstrap-theme');
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            $('#pageLoading').hide();
            this.mp4Player = (0, _video2.default)('mp4_video');
            this.m3u8Player = (0, _video2.default)('m3u8_video');
            // player.play();

            $('#mp4_video_html5_api').attr('webkit-playsinline', 'true').attr('playsinline', 'true');

            $('#m3u8_video_html5_api').attr('webkit-playsinline', 'true').attr('playsinline', 'true');
        }

        // destroy player on unmount

    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            _cssRequire2.default.unload(this.bootstrap);
            _cssRequire2.default.unload(this.bootstrapTheme);

            if (this.mp4Player) {
                this.mp4Player.dispose();
            }

            if (this.m3u8Player) {
                this.m3u8Player.dispose();
            }
        }
    }, {
        key: 'dispose',
        value: function dispose() {
            if (this.mp4Player) {
                this.mp4Player.dispose();
                this.mp4Player = null;
            }

            if (this.m3u8Player) {
                this.m3u8Player.dispose();
                this.m3u8Player = null;
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _reactBootstrap.Button,
                    { ref: 'refresh', bsStyle: 'primary',
                        onClick: this.dispose.bind(this) },
                    'dispose'
                ),
                _react2.default.createElement('br', null),
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                    'video',
                    { id: 'mp4_video', className: 'video-js vjs-default-skin vjs-16-9', controls: true, preload: 'none' },
                    _react2.default.createElement('source', { src: 'http://localhost/oceans.mp4', type: 'video/mp4' })
                ),
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                    'video',
                    { id: 'm3u8_video', className: 'video-js vjs-default-skin vjs-16-9', controls: true },
                    _react2.default.createElement('source', { src: 'http://localhost/m3u8/t.m3u8', type: 'application/x-mpegURL' })
                ),
                _react2.default.createElement('br', null)
            );
        }
    }]);

    return VideoTest;
}(_react2.default.Component);

exports.default = VideoTest;

/***/ }),

/***/ 19:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_19__;

/***/ }),

/***/ 82:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_82__;

/***/ }),

/***/ 93:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_93__;

/***/ }),

/***/ 94:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_94__;

/***/ })

/******/ });
});
//# sourceMappingURL=video_test.js.map