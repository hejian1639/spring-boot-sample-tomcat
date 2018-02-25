(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"), require("react-router"), require("jquery"), require("redux"), require("react-redux"), require("history"), require("jplayer/jquery.jplayer"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom", "react-router", "jquery", "redux", "react-redux", "history", "jplayer/jquery.jplayer"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react"), require("react-dom"), require("react-router"), require("jquery"), require("redux"), require("react-redux"), require("history"), require("jplayer/jquery.jplayer")) : factory(root["react"], root["react-dom"], root["react-router"], root["jquery"], root["redux"], root["react-redux"], root["history"], root["jplayer/jquery.jplayer"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_14__, __WEBPACK_EXTERNAL_MODULE_15__, __WEBPACK_EXTERNAL_MODULE_85__, __WEBPACK_EXTERNAL_MODULE_87__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 117);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),

/***/ 117:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(5);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _history = __webpack_require__(85);

var _reactRouter = __webpack_require__(6);

var _jquery = __webpack_require__(7);

var _jquery2 = _interopRequireDefault(_jquery);

__webpack_require__(87);

var _redux = __webpack_require__(14);

var _reactRedux = __webpack_require__(15);

var _reducers = __webpack_require__(24);

var _reducers2 = _interopRequireDefault(_reducers);

var _actions = __webpack_require__(9);

var Actions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function withExampleBasename(history, dirname) {
    return (0, _history.useBasename)(function () {
        return history;
    })({ basename: dirname });
}

var store = (0, _redux.createStore)(_reducers2.default);

// import Home from 'home'


_reactDom2.default.render(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(
        _reactRouter.Router,
        { history: withExampleBasename(_reactRouter.browserHistory, '/') },
        _react2.default.createElement(_reactRouter.Route, { path: '/', getComponent: function getComponent(nextState, cb) {
                window.require(['dist/home'], function (Home) {
                    cb(null, function (props) {
                        return _react2.default.createElement(Home.default, _extends({}, props, { subtitle: 'Rect Router' }));
                    });
                });
            } }),
        _react2.default.createElement(_reactRouter.Route, { path: '/react_page', getComponent: function getComponent(nextState, cb) {
                window.require(['dist/react_page'], function (ReactPage) {
                    cb(null, ReactPage.default);
                });
            } }),
        _react2.default.createElement(_reactRouter.Route, { path: '/form', getComponent: function getComponent(nextState, cb) {
                window.require(['dist/form'], function (Form) {
                    cb(null, Form.default);
                });
            } }),
        _react2.default.createElement(_reactRouter.Route, { path: '/jmui', getComponent: function getComponent(nextState, cb) {
                window.require(['dist/jmui-test'], function (JMUI) {
                    cb(null, JMUI.default);
                });
            } }),
        _react2.default.createElement(_reactRouter.Route, { path: '/animation', getComponent: function getComponent(nextState, cb) {
                window.require(['dist/animation'], function (Animation) {
                    cb(null, Animation.default);
                });
            } }),
        _react2.default.createElement(_reactRouter.Route, { path: '/music', getComponent: function getComponent(nextState, cb) {
                window.require(['dist/music'], function (Music) {
                    cb(null, Music.default);
                });
            } }),
        _react2.default.createElement(_reactRouter.Route, { path: '/starter_template', getComponent: function getComponent(nextState, cb) {
                window.require(['dist/starter_template'], function (StarterTemplate) {
                    cb(null, StarterTemplate.default);
                });
            } }),
        _react2.default.createElement(_reactRouter.Route, { path: '/bootstrap_react', getComponent: function getComponent(nextState, cb) {
                window.require(['dist/bootstrap_react'], function (BootstrapReact) {
                    cb(null, BootstrapReact.default);
                });
            } }),
        _react2.default.createElement(_reactRouter.Route, { path: '/bootstrap_popup*', getComponent: function getComponent(nextState, cb) {
                window.require(['dist/bootstrap_popup'], function (BootstrapPopup) {
                    cb(null, BootstrapPopup.default);
                });
            } }),
        _react2.default.createElement(_reactRouter.Route, { path: '/todos*', getComponent: function getComponent(nextState, cb) {
                window.require(['dist/todos'], function (Todos) {
                    cb(null, function (props) {
                        return _react2.default.createElement(Todos.default, _extends({}, props, { store: store }));
                    });
                });
            } }),
        _react2.default.createElement(_reactRouter.Route, { path: '/mobx_todos*', getComponent: function getComponent(nextState, cb) {
                window.require(['dist/mobx-todos'], function (MobXTodo) {
                    cb(null, MobXTodo.default);
                });
            } }),
        _react2.default.createElement(_reactRouter.Route, { path: '/typescript*', getComponent: function getComponent(nextState, cb) {
                window.require(['dist/react-flux-babel-karma'], function (Greeter) {
                    cb(null, Greeter.default);
                });
            } }),
        _react2.default.createElement(_reactRouter.Route, { path: '/2d-scroll*', getComponent: function getComponent(nextState, cb) {
                window.require(['dist/2d-scroll'], function (IScroll2D) {
                    cb(null, IScroll2D.default);
                });
            } }),
        _react2.default.createElement(_reactRouter.Route, { path: '/responsive*', getComponent: function getComponent(nextState, cb) {
                window.require(['dist/responsive'], function (Responsive) {
                    cb(null, Responsive.default);
                });
            } }),
        _react2.default.createElement(_reactRouter.Route, { path: '/echart*', getComponent: function getComponent(nextState, cb) {
                window.require(['dist/echart_test'], function (EChartTest) {
                    cb(null, EChartTest.default);
                });
            } }),
        _react2.default.createElement(_reactRouter.Route, { path: '/video*', getComponent: function getComponent(nextState, cb) {
                window.require(['dist/video_test'], function (VideoTest) {
                    cb(null, VideoTest.default);
                });
            } }),
        _react2.default.createElement(_reactRouter.Route, { path: '/react_ui*', getComponent: function getComponent(nextState, cb) {
                window.require(['dist/react_ui_test'], function (ReactUITest) {
                    cb(null, ReactUITest.default);
                });
            } }),
        _react2.default.createElement(_reactRouter.Route, { path: '/ant*', getComponent: function getComponent(nextState, cb) {
                window.require(['dist/ant_table'], function (AntTable) {
                    cb(null, AntTable.default);
                });
            } }),
        _react2.default.createElement(_reactRouter.Route, { path: '/kitchensink', getComponent: function getComponent(nextState, cb) {
                window.require(['dist/kitchensink'], function (Kitchensink) {
                    cb(null, Kitchensink.Framework);
                });
            }, getIndexRoute: function getIndexRoute(nextState, cb) {
                window.require(['dist/kitchensink'], function (Kitchensink) {
                    cb(null, {
                        getComponent: function getComponent(location, callback) {
                            callback(null, Kitchensink.Index);
                        }
                    });
                });
            }, getChildRoutes: function getChildRoutes(nextState, cb) {
                window.require(['dist/kitchensink'], function (Kitchensink) {
                    cb(null, Kitchensink.childRoutes);
                });
            } })
    )
), document.getElementById('root'), function () {});

(0, _jquery2.default)("#jquery_jplayer").jPlayer({
    ready: function ready(event) {},
    swfPath: "jplayer",
    cssSelectorAncestor: null,
    supplied: "mp3",
    wmode: "window",
    useStateClassSkin: true,
    autoBlur: false,
    smoothPlayBar: true,
    keyEnabled: true,
    remainingDuration: true,
    toggleDuration: true
});

//browserHistory.push(browserHistory.getCurrentLocation().pathname);

/***/ }),

/***/ 14:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_14__;

/***/ }),

/***/ 15:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_15__;

/***/ }),

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _redux = __webpack_require__(14);

var _ActionTypes = __webpack_require__(8);

var types = _interopRequireWildcard(_ActionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var nextTodoId = 0;

var todo = function todo(state, action) {
    switch (action.type) {
        case types.ADD_TODO:
            return {
                id: nextTodoId++,
                text: action.text,
                completed: false
            };
        case types.TOGGLE_TODO:
            if (state.id !== action.id) {
                return state;
            }

            return _extends({}, state, {
                completed: !state.completed
            });
        default:
            return state;
    }
};

var Todo = function () {
    function Todo(text) {
        _classCallCheck(this, Todo);

        this.id = Todo.nextTodoId++;
        this.text = text;
        this.completed = false;
    }

    _createClass(Todo, [{
        key: 'toggle',
        value: function toggle() {
            this.completed = !this.completed;
        }
    }]);

    return Todo;
}();

Todo.nextTodoId = 0;

var todos = function todos() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var action = arguments[1];

    switch (action.type) {
        case types.ADD_TODO:
            return [].concat(_toConsumableArray(state), [new Todo(action.text)]);
        case types.TOGGLE_TODO:
            return state.map(function (t) {
                if (action.id == t.id) {
                    t.toggle();
                }
                return t;
            });
        default:
            return state;
    }
};

var visibilityFilter = function visibilityFilter() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];

    switch (action.type) {
        case types.SET_VISIBILITY_FILTER:
            state[action.id] = action.filter;
            return _extends({}, state);
        default:
            return state;
    }
};

var text = function text() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'no data';
    var action = arguments[1];

    switch (action.type) {
        case types.SET_TEXT:
            return action.text;
        default:
            return state;
    }
};

var todoApp = (0, _redux.combineReducers)({
    todos: todos,
    visibilityFilter: visibilityFilter,
    text: text
});

exports.default = todoApp;

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var ADD_TODO = exports.ADD_TODO = 'ADD_TODO';
var DELETE_TODO = exports.DELETE_TODO = 'DELETE_TODO';
var EDIT_TODO = exports.EDIT_TODO = 'EDIT_TODO';
var COMPLETE_TODO = exports.COMPLETE_TODO = 'COMPLETE_TODO';
var COMPLETE_ALL = exports.COMPLETE_ALL = 'COMPLETE_ALL';
var CLEAR_COMPLETED = exports.CLEAR_COMPLETED = 'CLEAR_COMPLETED';
var SET_TEXT = exports.SET_TEXT = 'SET_TEXT';
var SET_VISIBILITY_FILTER = exports.SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
var TOGGLE_TODO = exports.TOGGLE_TODO = 'TOGGLE_TODO';

/***/ }),

/***/ 85:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_85__;

/***/ }),

/***/ 87:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_87__;

/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toggleTodo = exports.setVisibilityFilter = exports.setText = exports.clearCompleted = exports.completeAll = exports.completeTodo = exports.editTodo = exports.deleteTodo = exports.addTodo = undefined;

var _ActionTypes = __webpack_require__(8);

var types = _interopRequireWildcard(_ActionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var addTodo = exports.addTodo = function addTodo(text) {
  return { type: types.ADD_TODO, text: text };
};
var deleteTodo = exports.deleteTodo = function deleteTodo(id) {
  return { type: types.DELETE_TODO, id: id };
};
var editTodo = exports.editTodo = function editTodo(id, text) {
  return { type: types.EDIT_TODO, id: id, text: text };
};
var completeTodo = exports.completeTodo = function completeTodo(id) {
  return { type: types.COMPLETE_TODO, id: id };
};
var completeAll = exports.completeAll = function completeAll() {
  return { type: types.COMPLETE_ALL };
};
var clearCompleted = exports.clearCompleted = function clearCompleted() {
  return { type: types.CLEAR_COMPLETED };
};

var setText = exports.setText = function setText(text) {
  return { type: types.SET_TEXT, text: text };
};

var setVisibilityFilter = exports.setVisibilityFilter = function setVisibilityFilter(id, filter) {
  return { type: types.SET_VISIBILITY_FILTER, id: id, filter: filter };
};
var toggleTodo = exports.toggleTodo = function toggleTodo(id) {
  return { type: types.TOGGLE_TODO, id: id };
};

/***/ })

/******/ });
});
//# sourceMappingURL=main.js.map