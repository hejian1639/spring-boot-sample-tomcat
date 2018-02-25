(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("jquery"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "jquery"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react"), require("jquery")) : factory(root["react"], root["jquery"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_7__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 125);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function () {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for (var i = 0; i < this.length; i++) {
			var item = this[i];
			if (item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function (modules, mediaQuery) {
		if (typeof modules === "string") modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for (var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if (typeof id === "number") alreadyImportedModules[id] = true;
		}
		for (i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if (mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if (mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

/***/ }),

/***/ 11:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0;

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function createStyleElement() {
	var styleElement = document.createElement("style");
	var head = getHeadElement();
	styleElement.type = "text/css";
	head.appendChild(styleElement);
	return styleElement;
}

function createLinkElement() {
	var linkElement = document.createElement("link");
	var head = getHeadElement();
	linkElement.rel = "stylesheet";
	head.appendChild(linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement());
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement();
		update = updateLink.bind(null, styleElement);
		remove = function() {
			styleElement.parentNode.removeChild(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement();
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			styleElement.parentNode.removeChild(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;
	var sourceMap = obj.sourceMap;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var media = obj.media;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 125:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(72);

var _jquery = __webpack_require__(7);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Music = function (_React$Component) {
    _inherits(Music, _React$Component);

    function Music() {
        _classCallCheck(this, Music);

        return _possibleConstructorReturn(this, (Music.__proto__ || Object.getPrototypeOf(Music)).apply(this, arguments));
    }

    _createClass(Music, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            (0, _jquery2.default)('#pageLoading').hide();

            (0, _jquery2.default)("#jquery_jplayer").jPlayer("setMedia", {
                title: "Bubble",
                mp3: __webpack_require__(68)
            });
            (0, _jquery2.default)("#jquery_jplayer").jPlayer("option", "cssSelectorAncestor", "#jp_container_1");
            // $("#jquery_jplayer").jPlayer("play");
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { id: 'jp_container_1', className: 'jp-audio', role: 'application', 'aria-label': 'media player' },
                _react2.default.createElement(
                    'div',
                    { className: 'jp-type-single' },
                    _react2.default.createElement(
                        'div',
                        { className: 'jp-gui jp-interface' },
                        _react2.default.createElement(
                            'div',
                            { className: 'jp-controls' },
                            _react2.default.createElement(
                                'button',
                                { className: 'jp-play', role: 'button', tabIndex: '0' },
                                'play'
                            ),
                            _react2.default.createElement(
                                'button',
                                { className: 'jp-stop', role: 'button', tabIndex: '0' },
                                'stop'
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'jp-progress' },
                            _react2.default.createElement(
                                'div',
                                { className: 'jp-seek-bar' },
                                _react2.default.createElement('div', { className: 'jp-play-bar' })
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'jp-volume-controls' },
                            _react2.default.createElement(
                                'button',
                                { className: 'jp-mute', role: 'button', tabIndex: '0' },
                                'mute'
                            ),
                            _react2.default.createElement(
                                'button',
                                { className: 'jp-volume-max', role: 'button', tabIndex: '0' },
                                'max volume'
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'jp-volume-bar' },
                                _react2.default.createElement('div', { className: 'jp-volume-bar-value' })
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'jp-time-holder' },
                            _react2.default.createElement(
                                'div',
                                { className: 'jp-current-time', role: 'timer', 'aria-label': 'time' },
                                '\xA0'
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'jp-duration', role: 'timer', 'aria-label': 'duration' },
                                '\xA0'
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'jp-toggles' },
                                _react2.default.createElement(
                                    'button',
                                    { className: 'jp-repeat', role: 'button', tabIndex: '0' },
                                    'repeat'
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'jp-details' },
                        _react2.default.createElement(
                            'div',
                            { className: 'jp-title', 'aria-label': 'title' },
                            '\xA0'
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'jp-no-solution' },
                        _react2.default.createElement(
                            'span',
                            null,
                            'Update Required'
                        ),
                        'To play the media you will need to either update your browser to a recent version or update your ',
                        _react2.default.createElement(
                            'a',
                            { href: 'http://get.adobe.com/flashplayer/', target: '_blank' },
                            'Flash plugin'
                        ),
                        '.'
                    )
                )
            );
        }
    }]);

    return Music;
}(_react2.default.Component);

exports.default = Music;

/***/ }),

/***/ 137:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, "/*! Blue Monday Skin for jPlayer 2.9.2 ~ (c) 2009-2014 Happyworm Ltd ~ MIT License */\r\n\r\n/*\r\n * Skin for jPlayer Plugin (jQuery JavaScript Library)\r\n * http://www.jplayer.org\r\n *\r\n * Skin Name: Blue Monday\r\n *\r\n * Copyright (c) 2010 - 2014 Happyworm Ltd\r\n * Licensed under the MIT license.\r\n *  - http://www.opensource.org/licenses/mit-license.php\r\n *\r\n * Author: Silvia Benvenuti\r\n * Skin Version: 5.1 (jPlayer 2.8.0)\r\n * Date: 13th November 2014\r\n */\r\n\r\n .jp-audio *:focus, .jp-audio-stream *:focus, .jp-video *:focus {/* Disable the browser focus highlighting. */\r\n\r\n    outline: none;\n}\r\n\r\n .jp-audio button::-moz-focus-inner, .jp-audio-stream button::-moz-focus-inner, .jp-video button::-moz-focus-inner {/* Disable the browser CSS3 focus highlighting. */\r\n\r\n    border: 0;\n}\r\n\r\n .jp-audio, .jp-audio-stream, .jp-video {\r\n\r\n    font-size: 16px;\r\n\r\n    font-family: Verdana, Arial, sans-serif;\r\n\r\n    line-height: 1.6;\r\n\r\n    color: #666;\r\n\r\n    border: 1px solid #009be3;\r\n\r\n    background-color: #eee;\n}\r\n\r\n .jp-audio {\r\n\r\n    width: 420px;\n}\r\n\r\n .jp-audio-stream {\r\n\r\n    width: 182px;\n}\r\n\r\n .jp-video-270p {\r\n\r\n    width: 480px;\n}\r\n\r\n .jp-video-360p {\r\n\r\n    width: 640px;\n}\r\n\r\n .jp-video-full {/* Rules for IE6 (full-screen) */\r\n\r\n    width: 480px;\r\n\r\n    height: 270px;/* Rules for IE7 (full-screen) - Otherwise the relative container causes other page items that are not position:static (default) to appear over the video/gui. */\r\n\r\n    position: static !important;\r\n\r\n    position: relative;\n}\r\n\r\n /* The z-index rule is defined in this manner to enable Popcorn plugins that add overlays to video area. EG. Subtitles. */\r\n\r\n .jp-video-full div div {\r\n\r\n    z-index: 1000;\n}\r\n\r\n .jp-video-full .jp-jplayer {\r\n\r\n    top: 0;\r\n\r\n    left: 0;\r\n\r\n    position: fixed !important;\r\n\r\n    position: relative;/* Rules for IE6 (full-screen) */\r\n\r\n    overflow: hidden;\n}\r\n\r\n .jp-video-full .jp-gui {\r\n\r\n    position: fixed !important;\r\n\r\n    position: static;/* Rules for IE6 (full-screen) */\r\n\r\n    top: 0;\r\n\r\n    left: 0;\r\n\r\n    width: 100%;\r\n\r\n    height: 100%;\r\n\r\n    z-index: 1001;/* 1 layer above the others. */\n}\r\n\r\n .jp-video-full .jp-interface {\r\n\r\n    position: absolute !important;\r\n\r\n    position: relative;/* Rules for IE6 (full-screen) */\r\n\r\n    bottom: 0;\r\n\r\n    left: 0;\n}\r\n\r\n .jp-interface {\r\n\r\n    position: relative;\r\n\r\n    background-color: #eee;\r\n\r\n    width: 100%;\n}\r\n\r\n .jp-audio .jp-interface {\r\n\r\n    height: 80px;\n}\r\n\r\n .jp-audio-stream .jp-interface {\r\n\r\n    height: 80px;\n}\r\n\r\n .jp-video .jp-interface {\r\n\r\n    border-top: 1px solid #009be3;\n}\r\n\r\n /* @group CONTROLS */\r\n\r\n .jp-controls-holder {\r\n\r\n    clear: both;\r\n\r\n    width: 440px;\r\n\r\n    margin: 0 auto;\r\n\r\n    position: relative;\r\n\r\n    overflow: hidden;\r\n\r\n    top: -8px;/* This negative value depends on the size of the text in jp-currentTime and jp-duration */\n}\r\n\r\n .jp-interface .jp-controls {\r\n\r\n    margin: 0;\r\n\r\n    padding: 0;\r\n\r\n    overflow: hidden;\n}\r\n\r\n .jp-audio .jp-controls {\r\n\r\n    width: 380px;\r\n\r\n    padding: 20px 20px 0 20px;\n}\r\n\r\n .jp-audio-stream .jp-controls {\r\n\r\n    position: absolute;\r\n\r\n    top: 20px;\r\n\r\n    left: 20px;\r\n\r\n    width: 142px;\n}\r\n\r\n .jp-video .jp-type-single .jp-controls {\r\n\r\n    width: 78px;\r\n\r\n    margin-left: 200px;\n}\r\n\r\n .jp-video .jp-type-playlist .jp-controls {\r\n\r\n    width: 134px;\r\n\r\n    margin-left: 172px;\n}\r\n\r\n .jp-video .jp-controls {\r\n\r\n    float: left;\n}\r\n\r\n .jp-controls button {\r\n\r\n    display: block;\r\n\r\n    float: left;\r\n\r\n    overflow: hidden;\r\n\r\n    text-indent: -9999px;\r\n\r\n    border: none;\r\n\r\n    cursor: pointer;\n}\r\n\r\n .jp-play {\r\n\r\n    width: 40px;\r\n\r\n    height: 40px;\n}\r\n\r\n .jp-play {\r\n\r\n    background: url(" + __webpack_require__(2) + ") 0 0 no-repeat;\n}\r\n\r\n .jp-play:focus {\r\n\r\n    background: url(" + __webpack_require__(2) + ") -41px 0 no-repeat;\n}\r\n\r\n .jp-state-playing .jp-play {\r\n\r\n    background: url(" + __webpack_require__(2) + ") 0 -42px no-repeat;\n}\r\n\r\n .jp-state-playing .jp-play:focus {\r\n\r\n    background: url(" + __webpack_require__(2) + ") -41px -42px no-repeat;\n}\r\n\r\n .jp-stop, .jp-previous, .jp-next {\r\n\r\n    width: 28px;\r\n\r\n    height: 28px;\r\n\r\n    margin-top: 6px;\n}\r\n\r\n .jp-stop {\r\n\r\n    background: url(" + __webpack_require__(2) + ") 0 -83px no-repeat;\r\n\r\n    margin-left: 10px;\n}\r\n\r\n .jp-stop:focus {\r\n\r\n    background: url(" + __webpack_require__(2) + ") -29px -83px no-repeat;\n}\r\n\r\n .jp-previous {\r\n\r\n    background: url(" + __webpack_require__(2) + ") 0 -112px no-repeat;\n}\r\n\r\n .jp-previous:focus {\r\n\r\n    background: url(" + __webpack_require__(2) + ") -29px -112px no-repeat;\n}\r\n\r\n .jp-next {\r\n\r\n    background: url(" + __webpack_require__(2) + ") 0 -141px no-repeat;\n}\r\n\r\n .jp-next:focus {\r\n\r\n    background: url(" + __webpack_require__(2) + ") -29px -141px no-repeat;\n}\r\n\r\n /* @group progress bar */\r\n\r\n .jp-progress {\r\n\r\n    overflow: hidden;\r\n\r\n    background-color: #ddd;\n}\r\n\r\n /* @end */\r\n\r\n .jp-audio .jp-progress {\r\n\r\n    position: absolute;\r\n\r\n    top: 32px;\r\n\r\n    height: 15px;\n}\r\n\r\n .jp-audio .jp-type-single .jp-progress {\r\n\r\n    left: 110px;\r\n\r\n    width: 186px;\n}\r\n\r\n .jp-audio .jp-type-playlist .jp-progress {\r\n\r\n    left: 166px;\r\n\r\n    width: 130px;\n}\r\n\r\n .jp-video .jp-progress {\r\n\r\n    top: 0px;\r\n\r\n    left: 0px;\r\n\r\n    width: 100%;\r\n\r\n    height: 10px;\n}\r\n\r\n .jp-seek-bar {\r\n\r\n    background: url(" + __webpack_require__(2) + ") 0 -202px repeat-x;\r\n\r\n    width: 0px;\r\n\r\n    height: 100%;\r\n\r\n    cursor: pointer;\n}\r\n\r\n .jp-play-bar {\r\n\r\n    background: url(" + __webpack_require__(2) + ") 0 -218px repeat-x;\r\n\r\n    width: 0px;\r\n\r\n    height: 100%;\n}\r\n\r\n /* The seeking class is added/removed inside jPlayer */\r\n\r\n .jp-seeking-bg {\r\n\r\n    background: url(" + __webpack_require__(152) + ");\n}\r\n\r\n /* @group volume controls */\r\n\r\n .jp-state-no-volume .jp-volume-controls {\r\n\r\n    display: none;\n}\r\n\r\n /* @end */\r\n\r\n .jp-volume-controls {\r\n\r\n    position: absolute;\r\n\r\n    top: 32px;\r\n\r\n    left: 308px;\r\n\r\n    width: 200px;\n}\r\n\r\n .jp-audio-stream .jp-volume-controls {\r\n\r\n    left: 70px;\n}\r\n\r\n .jp-video .jp-volume-controls {\r\n\r\n    top: 12px;\r\n\r\n    left: 50px;\n}\r\n\r\n .jp-volume-controls button {\r\n\r\n    display: block;\r\n\r\n    position: absolute;\r\n\r\n    overflow: hidden;\r\n\r\n    text-indent: -9999px;\r\n\r\n    border: none;\r\n\r\n    cursor: pointer;\n}\r\n\r\n .jp-mute, .jp-volume-max {\r\n\r\n    width: 18px;\r\n\r\n    height: 15px;\n}\r\n\r\n .jp-volume-max {\r\n\r\n    left: 74px;\n}\r\n\r\n .jp-mute {\r\n\r\n    background: url(" + __webpack_require__(2) + ") 0 -170px no-repeat;\n}\r\n\r\n .jp-mute:focus {\r\n\r\n    background: url(" + __webpack_require__(2) + ") -19px -170px no-repeat;\n}\r\n\r\n .jp-state-muted .jp-mute {\r\n\r\n    background: url(" + __webpack_require__(2) + ") -60px -170px no-repeat;\n}\r\n\r\n .jp-state-muted .jp-mute:focus {\r\n\r\n    background: url(" + __webpack_require__(2) + ") -79px -170px no-repeat;\n}\r\n\r\n .jp-volume-max {\r\n\r\n    background: url(" + __webpack_require__(2) + ") 0 -186px no-repeat;\n}\r\n\r\n .jp-volume-max:focus {\r\n\r\n    background: url(" + __webpack_require__(2) + ") -19px -186px no-repeat;\n}\r\n\r\n .jp-volume-bar {\r\n\r\n    position: absolute;\r\n\r\n    overflow: hidden;\r\n\r\n    background: url(" + __webpack_require__(2) + ") 0 -250px repeat-x;\r\n\r\n    top: 5px;\r\n\r\n    left: 22px;\r\n\r\n    width: 46px;\r\n\r\n    height: 5px;\r\n\r\n    cursor: pointer;\n}\r\n\r\n .jp-volume-bar-value {\r\n\r\n    background: url(" + __webpack_require__(2) + ") 0 -256px repeat-x;\r\n\r\n    width: 0px;\r\n\r\n    height: 5px;\n}\r\n\r\n /* @group current time and duration */\r\n\r\n .jp-audio .jp-time-holder {\r\n\r\n    position: absolute;\r\n\r\n    top: 50px;\n}\r\n\r\n /* @end */\r\n\r\n .jp-audio .jp-type-single .jp-time-holder {\r\n\r\n    left: 110px;\r\n\r\n    width: 186px;\n}\r\n\r\n .jp-audio .jp-type-playlist .jp-time-holder {\r\n\r\n    left: 166px;\r\n\r\n    width: 130px;\n}\r\n\r\n .jp-current-time, .jp-duration {\r\n\r\n    width: 60px;\r\n\r\n    font-size: .64em;\r\n\r\n    font-style: oblique;\n}\r\n\r\n .jp-current-time {\r\n\r\n    float: left;\r\n\r\n    display: inline;\r\n\r\n    cursor: default;\n}\r\n\r\n .jp-duration {\r\n\r\n    float: right;\r\n\r\n    display: inline;\r\n\r\n    text-align: right;\r\n\r\n    cursor: pointer;\n}\r\n\r\n .jp-video .jp-current-time {\r\n\r\n    margin-left: 20px;\n}\r\n\r\n .jp-video .jp-duration {\r\n\r\n    margin-right: 20px;\n}\r\n\r\n /* @group playlist */\r\n\r\n .jp-details {\r\n\r\n    font-weight: bold;\r\n\r\n    text-align: center;\r\n\r\n    cursor: default;\n}\r\n\r\n /* @end */\r\n\r\n .jp-details, .jp-playlist {\r\n\r\n    width: 100%;\r\n\r\n    background-color: #ccc;\r\n\r\n    border-top: 1px solid #009be3;\n}\r\n\r\n .jp-type-single .jp-details, .jp-type-playlist .jp-details {\r\n\r\n    border-top: none;\n}\r\n\r\n .jp-details .jp-title {\r\n\r\n    margin: 0;\r\n\r\n    padding: 5px 20px;\r\n\r\n    font-size: .72em;\r\n\r\n    font-weight: bold;\n}\r\n\r\n .jp-playlist ul {\r\n\r\n    list-style-type: none;\r\n\r\n    margin: 0;\r\n\r\n    padding: 0 20px;\r\n\r\n    font-size: .72em;\n}\r\n\r\n .jp-playlist li {\r\n\r\n    padding: 5px 0 4px 20px;\r\n\r\n    border-bottom: 1px solid #eee;\n}\r\n\r\n .jp-playlist li div {\r\n\r\n    display: inline;\n}\r\n\r\n /* Note that the first-child (IE6) and last-child (IE6/7/8) selectors do not work on IE */\r\n\r\n div.jp-type-playlist div.jp-playlist li:last-child {\r\n\r\n    padding: 5px 0 5px 20px;\r\n\r\n    border-bottom: none;\n}\r\n\r\n div.jp-type-playlist div.jp-playlist li.jp-playlist-current {\r\n\r\n    list-style-type: square;\r\n\r\n    list-style-position: inside;\r\n\r\n    padding-left: 7px;\n}\r\n\r\n div.jp-type-playlist div.jp-playlist a {\r\n\r\n    color: #333;\r\n\r\n    text-decoration: none;\n}\r\n\r\n div.jp-type-playlist div.jp-playlist a:hover {\r\n\r\n    color: #0d88c1;\n}\r\n\r\n div.jp-type-playlist div.jp-playlist a.jp-playlist-current {\r\n\r\n    color: #0d88c1;\n}\r\n\r\n div.jp-type-playlist div.jp-playlist a.jp-playlist-item-remove {\r\n\r\n    float: right;\r\n\r\n    display: inline;\r\n\r\n    text-align: right;\r\n\r\n    margin-right: 10px;\r\n\r\n    font-weight: bold;\r\n\r\n    color: #666;\n}\r\n\r\n div.jp-type-playlist div.jp-playlist a.jp-playlist-item-remove:hover {\r\n\r\n    color: #0d88c1;\n}\r\n\r\n div.jp-type-playlist div.jp-playlist span.jp-free-media {\r\n\r\n    float: right;\r\n\r\n    display: inline;\r\n\r\n    text-align: right;\r\n\r\n    margin-right: 10px;\n}\r\n\r\n div.jp-type-playlist div.jp-playlist span.jp-free-media a {\r\n\r\n    color: #666;\n}\r\n\r\n div.jp-type-playlist div.jp-playlist span.jp-free-media a:hover {\r\n\r\n    color: #0d88c1;\n}\r\n\r\n span.jp-artist {\r\n\r\n    font-size: .8em;\r\n\r\n    color: #666;\n}\r\n\r\n /* @end */\r\n\r\n .jp-video-play {\r\n\r\n    width: 100%;\r\n\r\n    overflow: hidden;/* Important for nested negative margins to work in modern browsers */\r\n\r\n    cursor: pointer;\r\n\r\n    background-color: transparent;/* Makes IE9 work with the active area over the whole video area. IE6/7/8 only have the button as active area. */\n}\r\n\r\n .jp-video-270p .jp-video-play {\r\n\r\n    margin-top: -270px;\r\n\r\n    height: 270px;\n}\r\n\r\n .jp-video-360p .jp-video-play {\r\n\r\n    margin-top: -360px;\r\n\r\n    height: 360px;\n}\r\n\r\n .jp-video-full .jp-video-play {\r\n\r\n    height: 100%;\n}\r\n\r\n .jp-video-play-icon {\r\n\r\n    position: relative;\r\n\r\n    display: block;\r\n\r\n    width: 112px;\r\n\r\n    height: 100px;\r\n\r\n    margin-left: -56px;\r\n\r\n    margin-top: -50px;\r\n\r\n    left: 50%;\r\n\r\n    top: 50%;\r\n\r\n    background: url(" + __webpack_require__(29) + ") 0 0 no-repeat;\r\n\r\n    text-indent: -9999px;\r\n\r\n    border: none;\r\n\r\n    cursor: pointer;\n}\r\n\r\n .jp-video-play-icon:focus {\r\n\r\n    background: url(" + __webpack_require__(29) + ") 0 -100px no-repeat;\n}\r\n\r\n .jp-jplayer audio, .jp-jplayer {\r\n\r\n    width: 0px;\r\n\r\n    height: 0px;\n}\r\n\r\n .jp-jplayer {\r\n\r\n    background-color: #000000;\n}\r\n\r\n /* The audio toggles are nested inside jp-time-holder */\r\n\r\n .jp-toggles {\r\n\r\n    padding: 0;\r\n\r\n    margin: 0 auto;\r\n\r\n    overflow: hidden;\n}\r\n\r\n /* @group TOGGLES */\r\n\r\n .jp-audio .jp-type-single .jp-toggles {\r\n\r\n    width: 25px;\n}\r\n\r\n .jp-audio .jp-type-playlist .jp-toggles {\r\n\r\n    width: 55px;\r\n\r\n    margin: 0;\r\n\r\n    position: absolute;\r\n\r\n    left: 325px;\r\n\r\n    top: 50px;\n}\r\n\r\n .jp-video .jp-toggles {\r\n\r\n    position: absolute;\r\n\r\n    right: 16px;\r\n\r\n    margin: 0;\r\n\r\n    margin-top: 10px;\r\n\r\n    width: 100px;\n}\r\n\r\n .jp-toggles button {\r\n\r\n    display: block;\r\n\r\n    float: left;\r\n\r\n    width: 25px;\r\n\r\n    height: 18px;\r\n\r\n    text-indent: -9999px;\r\n\r\n    line-height: 100%;/* need this for IE6 */\r\n\r\n    border: none;\r\n\r\n    cursor: pointer;\n}\r\n\r\n .jp-full-screen {\r\n\r\n    background: url(" + __webpack_require__(2) + ") 0 -310px no-repeat;\r\n\r\n    margin-left: 20px;\n}\r\n\r\n .jp-full-screen:focus {\r\n\r\n    background: url(" + __webpack_require__(2) + ") -30px -310px no-repeat;\n}\r\n\r\n .jp-state-full-screen .jp-full-screen {\r\n\r\n    background: url(" + __webpack_require__(2) + ") -60px -310px no-repeat;\n}\r\n\r\n .jp-state-full-screen .jp-full-screen:focus {\r\n\r\n    background: url(" + __webpack_require__(2) + ") -90px -310px no-repeat;\n}\r\n\r\n .jp-repeat {\r\n\r\n    background: url(" + __webpack_require__(2) + ") 0 -290px no-repeat;\n}\r\n\r\n .jp-repeat:focus {\r\n\r\n    background: url(" + __webpack_require__(2) + ") -30px -290px no-repeat;\n}\r\n\r\n .jp-state-looped .jp-repeat {\r\n\r\n    background: url(" + __webpack_require__(2) + ") -60px -290px no-repeat;\n}\r\n\r\n .jp-state-looped .jp-repeat:focus {\r\n\r\n    background: url(" + __webpack_require__(2) + ") -90px -290px no-repeat;\n}\r\n\r\n .jp-shuffle {\r\n\r\n    background: url(" + __webpack_require__(2) + ") 0 -270px no-repeat;\r\n\r\n    margin-left: 5px;\n}\r\n\r\n .jp-shuffle:focus {\r\n\r\n    background: url(" + __webpack_require__(2) + ") -30px -270px no-repeat;\n}\r\n\r\n .jp-state-shuffled .jp-shuffle {\r\n\r\n    background: url(" + __webpack_require__(2) + ") -60px -270px no-repeat;\n}\r\n\r\n .jp-state-shuffled .jp-shuffle:focus {\r\n\r\n    background: url(" + __webpack_require__(2) + ") -90px -270px no-repeat;\n}\r\n\r\n /* @group NO SOLUTION error feedback */\r\n\r\n .jp-no-solution {\r\n\r\n    padding: 5px;\r\n\r\n    font-size: .8em;\r\n\r\n    background-color: #eee;\r\n\r\n    border: 2px solid #009be3;\r\n\r\n    color: #000;\r\n\r\n    display: none;\n}\r\n\r\n /* @end */\r\n\r\n .jp-no-solution a {\r\n\r\n    color: #000;\n}\r\n\r\n .jp-no-solution span {\r\n\r\n    font-size: 1em;\r\n\r\n    display: block;\r\n\r\n    text-align: center;\r\n\r\n    font-weight: bold;\n}\r\n/* @end */\r\n", ""]);

// exports


/***/ }),

/***/ 152:
/***/ (function(module, exports) {

module.exports = "data:image/gif;base64,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"

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "jplayer.blue.monday.jpg";

/***/ }),

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "jplayer.blue.monday.video.play.png";

/***/ }),

/***/ 68:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "王菲-匆匆那年-(电影《匆匆那年》同名主题曲).mp3";

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ }),

/***/ 72:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(137);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(11)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--2-1!../../../node_modules/postcss-loader/index.js??ref--2-2!./jplayer.blue.monday.css", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js??ref--2-1!../../../node_modules/postcss-loader/index.js??ref--2-2!./jplayer.blue.monday.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ })

/******/ });
});
//# sourceMappingURL=music.js.map