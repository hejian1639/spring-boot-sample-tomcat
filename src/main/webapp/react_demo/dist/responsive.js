(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react")) : factory(root["react"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 99);
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

/***/ 139:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, "\r\n._3syO_xQaKo_NbajN5pPMXM {\r\n\ttext-align: center;\r\n\tborder-bottom: 8px double #f9f9f9;\r\n\tmargin-bottom: 2rem;\r\n\tpadding-bottom: 1rem;\r\n}\r\n\r\n._1HPQ03Duye1mkrQoeD7T5H {\r\n\tfont-size: 1rem;\r\n}\r\n\r\n\r\n.WELEbRm4J2GpA9rQHWzX_ {\r\n\tposition: relative;\r\n}\r\n\r\n._232HRIAWpVK3W92G9vHNVj {\r\n\tborder: 6px solid #e8cfa9;\r\n\tborder-radius: 4px;\r\n}\r\n\r\n.H-GO7b6B9XsV632tYU3Iy {\r\n\tdisplay: block;\r\n}\r\n\r\n._1_f00otMe50jtcLkEMSGTM {\r\n\tfont-size: .75rem;\r\n\tposition: absolute;\r\n\tbottom: .5rem;\r\n\tright: 1rem;\r\n}\r\n\r\n._2UsCCxUl_njqNeFayT2NG1 {\r\n\tfont-size: 1.8rem;\r\n\tfont-style: italic;\r\n}\r\n\r\n._1FkvdjFF1YmfdLkQP6rd0R li {\r\n\tpadding: .4rem 0;\r\n}\r\n\r\n._1FkvdjFF1YmfdLkQP6rd0R li:after {\r\n\tcontent: \"\\273C\";\r\n\tdisplay: block;\r\n\ttext-align: center;\r\n\tmargin: 1rem 0 .5rem 0;\r\n\tcolor: #eee;\r\n}\r\n\r\n@media screen and (min-width: 50rem) {\r\n\r\n\t._3LjsIskHSiJfNmG4hSGDtO {\r\n\t\tdisplay: table;\r\n\t\ttable-layout: fixed;\r\n\t\twidth: 100%;\r\n\t}\r\n\r\n\t.WELEbRm4J2GpA9rQHWzX_, ._2UsCCxUl_njqNeFayT2NG1 {\r\n\t\tdisplay: table-cell;\r\n\t\twidth: 50%;\r\n\t\tvertical-align: middle;\r\n\t\ttext-align: center;\r\n\t}\r\n\r\n\t._2UsCCxUl_njqNeFayT2NG1 {\r\n\t\tpadding: .5rem;\r\n\t\tfont-size: 2.5rem;\r\n\t\ttext-align: left;\r\n\t\tposition: relative;\r\n\t}\r\n\r\n\t._2KrM5Fg9ksqjAl7Hmzkx2 {\r\n\t\tfont-size: .9rem;\r\n\t\tfloat: right;\r\n\t\tpadding: 1rem;\r\n\t\tmargin: 0 0 .5rem 1rem;\r\n\t\tborder-radius: 3px;\r\n\t\tbackground-color: #ffffdf;\r\n\t\tborder: 2px solid #e8cfa9;\r\n\t}\r\n\r\n\t._2KrM5Fg9ksqjAl7Hmzkx2 h3 {\r\n\t\tmargin: 0;\r\n\t}\r\n}\r\n", ""]);

// exports
exports.locals = {
	"Header": "_3syO_xQaKo_NbajN5pPMXM",
	"Strap": "_1HPQ03Duye1mkrQoeD7T5H",
	"MoneyShot": "WELEbRm4J2GpA9rQHWzX_",
	"MoneyShotImg": "_232HRIAWpVK3W92G9vHNVj",
	"LogoWrapper": "H-GO7b6B9XsV632tYU3Iy",
	"ImageCaption": "_1_f00otMe50jtcLkEMSGTM",
	"IntroText": "_2UsCCxUl_njqNeFayT2NG1",
	"MethodWrapper": "_1FkvdjFF1YmfdLkQP6rd0R",
	"IntroWrapper": "_3LjsIskHSiJfNmG4hSGDtO",
	"Ingredients": "_2KrM5Fg9ksqjAl7Hmzkx2"
};

/***/ }),

/***/ 74:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(139);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(11)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js??ref--2-1!../../node_modules/postcss-loader/index.js??ref--2-2!./styles.css", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js??ref--2-1!../../node_modules/postcss-loader/index.js??ref--2-2!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "SOC-Logo.png";

/***/ }),

/***/ 77:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "scones.jpg";

/***/ }),

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styles = __webpack_require__(74);

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Responsive = function (_React$Component) {
    _inherits(Responsive, _React$Component);

    function Responsive() {
        _classCallCheck(this, Responsive);

        return _possibleConstructorReturn(this, (Responsive.__proto__ || Object.getPrototypeOf(Responsive)).apply(this, arguments));
    }

    _createClass(Responsive, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement("div", { style: { padding: '1rem .5rem', fontSize: '1.3rem', lineHeight: '1.2', maxWidth: '60rem', margin: '0 auto', color: '#333' } }, _react2.default.createElement("div", { className: _styles2.default.Header }, _react2.default.createElement("img", { src: __webpack_require__(76), alt: "Scone O'Clock logo" }), _react2.default.createElement("p", { className: _styles2.default.Strap }, "Scones: the most resplendent of snacks")), _react2.default.createElement("div", { className: _styles2.default.IntroWrapper }, _react2.default.createElement("p", { className: _styles2.default.IntroText }, "Occasionally maligned and misunderstood; the scone is a quintessentially British classic."), _react2.default.createElement("div", { className: _styles2.default.MoneyShot }, _react2.default.createElement("img", { className: _styles2.default.MoneyShotImg, style: { maxWidth: '100%' }, src: __webpack_require__(77), alt: "Incredible scones" }), _react2.default.createElement("p", { className: _styles2.default.ImageCaption }, "Incredible scones, picture from Wikipedia"))), _react2.default.createElement("p", null, "Recipe and serving suggestions follow."), _react2.default.createElement("div", { className: _styles2.default.Ingredients }, _react2.default.createElement("h3", { className: _styles2.default.SubHeader }, "Ingredients"), _react2.default.createElement("ul", null, _react2.default.createElement("li", null, "350g self-raising flour, and a little spare for dusting"), _react2.default.createElement("li", null, '\xBC tsp salt'), _react2.default.createElement("li", null, "1 tsp baking powder"), _react2.default.createElement("li", null, "85g butter, cut into cubes"), _react2.default.createElement("li", null, "3 tbsp caster sugar"), _react2.default.createElement("li", null, "175ml milk"), _react2.default.createElement("li", null, "1 tsp vanilla extract"), _react2.default.createElement("li", null, "squeeze lemon juice (see Know-how below)"), _react2.default.createElement("li", null, "beaten egg, to glaze"), _react2.default.createElement("li", null, "jam and clotted cream, to serve"))), _react2.default.createElement("div", { className: _styles2.default.HowToMake }, _react2.default.createElement("h3", { className: _styles2.default.SubHeader }, "Method"), _react2.default.createElement("ol", { className: _styles2.default.MethodWrapper }, _react2.default.createElement("li", null, 'Heat the oven to 220\xB0C (or gas mark 7). Tip the flour into a large bowl along with the salt and baking powder, then mix it all up. Add the butter in, then rub the butter in with your fingers until the mix looks like fine crumbs. When that is done, stir in the sugar.'), _react2.default.createElement("li", null, "Put the milk into a jug and heat in the microwave for about 20-30 seconds. It should be warm but not hot. Add the vanilla and lemon juice to the milk and then put that to one side and but a baking tray in the oven to warm."), _react2.default.createElement("li", null, 'Make a well in the dry mix, then add the liquid and combine it quickly with a cutlery knife \u2013 it will seem pretty wet at first. Spread some flour onto the work surface and tip the dough out. Dredge the dough and your hands with a little more flour, then fold the dough over 2-3 times until it\'s smoother. Now pat it into a round shape about 4cm deep.'), _react2.default.createElement("li", null, 'Take a 5cm cutter (Pro-tip \u2013 smooth-edged cutters tend to cut more cleanly, giving a better rise) and dip it into some flour. Plunge into the dough, then repeat until you have four scones. By this point you\u2019ll probably need to press what\'s left of the dough back into a round to cut out another four.'), _react2.default.createElement("li", null, "Brush the tops with beaten egg, then place onto the hot baking tray."), _react2.default.createElement("li", null, "Bake for 10 minutes until risen and golden on the top. Eat just warm or cold on the day of baking, generously (and I do mean generously) topped with jam and clotted cream. "), _react2.default.createElement("li", null, 'If freezing, freeze once cool. Defrost, then put in a low oven (about 160\xB0C) for a few minutes to refresh.'))));
        }
    }]);

    return Responsive;
}(_react2.default.Component);

exports.default = Responsive;

/***/ })

/******/ });
});
//# sourceMappingURL=responsive.js.map