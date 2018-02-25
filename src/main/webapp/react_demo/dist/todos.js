(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("css!bootstrap"), require("css!bootstrap-theme"), require("react-bootstrap"), require("redux"), require("react-redux"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "css!bootstrap", "css!bootstrap-theme", "react-bootstrap", "redux", "react-redux"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react"), require("css!bootstrap"), require("css!bootstrap-theme"), require("react-bootstrap"), require("redux"), require("react-redux")) : factory(root["react"], root["css!bootstrap"], root["css!bootstrap-theme"], root["react-bootstrap"], root["redux"], root["react-redux"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_12__, __WEBPACK_EXTERNAL_MODULE_14__, __WEBPACK_EXTERNAL_MODULE_15__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 131);
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

/***/ 130:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reactRedux = __webpack_require__(15);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _actions = __webpack_require__(9);

var Actions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Link = function Link(_ref) {
    var visibilityFilter = _ref.visibilityFilter,
        children = _ref.children,
        dispatch = _ref.dispatch,
        id = _ref.id,
        filter = _ref.filter;

    if (filter === visibilityFilter[id]) {
        return _react2.default.createElement(
            'span',
            null,
            children
        );
    }

    return _react2.default.createElement(
        'a',
        { href: '#',
            onClick: function onClick(e) {
                e.preventDefault();
                dispatch(Actions.setVisibilityFilter(id, filter));
            } },
        children
    );
};

Link.propTypes = {
    children: _react.PropTypes.node.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
    return {
        visibilityFilter: state.visibilityFilter
    };
};

var FilterLink = (0, _reactRedux.connect)(mapStateToProps)(Link);

exports.default = FilterLink;

/***/ }),

/***/ 131:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Footer = __webpack_require__(65);

var _Footer2 = _interopRequireDefault(_Footer);

var _AddTodo = __webpack_require__(66);

var _AddTodo2 = _interopRequireDefault(_AddTodo);

var _VisibleTodoList = __webpack_require__(67);

var _VisibleTodoList2 = _interopRequireDefault(_VisibleTodoList);

var _reactBootstrap = __webpack_require__(12);

__webpack_require__(3);

__webpack_require__(4);

var _reactRedux = __webpack_require__(15);

var _actions = __webpack_require__(9);

var Actions = _interopRequireWildcard(_actions);

var _redux = __webpack_require__(14);

var _ActionTypes = __webpack_require__(8);

var types = _interopRequireWildcard(_ActionTypes);

var _TodoFilters = __webpack_require__(23);

var FilterTypes = _interopRequireWildcard(_TodoFilters);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = function App(_ref) {
    var dispatch = _ref.dispatch,
        text = _ref.text,
        visibilityFilter = _ref.visibilityFilter;


    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_AddTodo2.default, null),
        _react2.default.createElement(
            'ul',
            null,
            Object.keys(visibilityFilter).map(function (key) {
                return _react2.default.createElement(
                    'li',
                    { key: key },
                    _react2.default.createElement(_VisibleTodoList2.default, { id: key }),
                    _react2.default.createElement(_Footer2.default, { id: key })
                );
            })
        ),
        text,
        _react2.default.createElement('br', null),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
            _reactBootstrap.Button,
            { bsStyle: 'primary',
                onClick: function onClick(e) {
                    e.preventDefault();
                    dispatch(Actions.setText('hello'));
                } },
            'refresh'
        )
    );
};

var mapStateToProps = function mapStateToProps(state) {
    return {
        text: state.text,
        visibilityFilter: state.visibilityFilter
    };
};

App = (0, _reactRedux.connect)(mapStateToProps)(App);

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

var todosProxy = function todosProxy(store, state, action) {
    store.dispatch(action);
    return store.getState().todos;
};

function proxyFactory(store, id) {
    var proxy = function proxy(state, action) {
        store.dispatch(action);
        return store.getState()[id];
    };

    return proxy;
}

var visibilityFilter = function visibilityFilter() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { '1': FilterTypes.SHOW_ACTIVE, '2': FilterTypes.SHOW_COMPLETED, '3': FilterTypes.SHOW_ALL };
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

var Todos = function (_React$Component) {
    _inherits(Todos, _React$Component);

    function Todos() {
        _classCallCheck(this, Todos);

        return _possibleConstructorReturn(this, (Todos.__proto__ || Object.getPrototypeOf(Todos)).apply(this, arguments));
    }

    _createClass(Todos, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            var todos = proxyFactory(this.props.store, 'todos');
            var reducer = (0, _redux.combineReducers)({
                todos: todos,
                visibilityFilter: visibilityFilter,
                text: text
            });
            this.store = (0, _redux.createStore)(reducer);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _reactRedux.Provider,
                { store: this.store },
                _react2.default.createElement(App, null)
            );
        }
    }]);

    return Todos;
}(_react2.default.Component);

exports.default = Todos;

/***/ }),

/***/ 14:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_14__;

/***/ }),

/***/ 15:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_15__;

/***/ }),

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var SHOW_ALL = exports.SHOW_ALL = 'show_all';
var SHOW_COMPLETED = exports.SHOW_COMPLETED = 'show_completed';
var SHOW_ACTIVE = exports.SHOW_ACTIVE = 'show_active';

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }),

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _FilterLink = __webpack_require__(130);

var _FilterLink2 = _interopRequireDefault(_FilterLink);

var _TodoFilters = __webpack_require__(23);

var FilterTypes = _interopRequireWildcard(_TodoFilters);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Footer = function Footer(_ref) {
  var id = _ref.id;
  return _react2.default.createElement(
    'p',
    null,
    'Show:',
    " ",
    _react2.default.createElement(
      _FilterLink2.default,
      { id: id, filter: FilterTypes.SHOW_ALL },
      'All'
    ),
    ", ",
    _react2.default.createElement(
      _FilterLink2.default,
      { id: id, filter: FilterTypes.SHOW_ACTIVE },
      'Active'
    ),
    ", ",
    _react2.default.createElement(
      _FilterLink2.default,
      { id: id, filter: FilterTypes.SHOW_COMPLETED },
      'Completed'
    )
  );
};

exports.default = Footer;

/***/ }),

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(15);

var _actions = __webpack_require__(9);

var Actions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AddTodo = function AddTodo(_ref) {
  var dispatch = _ref.dispatch;

  var input = void 0;

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'form',
      { onSubmit: function onSubmit(e) {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(Actions.addTodo(input.value));
          input.value = '';
        } },
      _react2.default.createElement('input', { ref: function ref(node) {
          input = node;
        } }),
      _react2.default.createElement(
        'button',
        { type: 'submit' },
        'Add Todo'
      )
    )
  );
};
AddTodo = (0, _reactRedux.connect)()(AddTodo);

exports.default = AddTodo;

/***/ }),

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reactRedux = __webpack_require__(15);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _actions = __webpack_require__(9);

var Actions = _interopRequireWildcard(_actions);

var _TodoFilters = __webpack_require__(23);

var FilterTypes = _interopRequireWildcard(_TodoFilters);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Todo = function Todo(_ref) {
  var onClick = _ref.onClick,
      completed = _ref.completed,
      text = _ref.text;
  return _react2.default.createElement(
    'li',
    {
      onClick: onClick,
      style: {
        textDecoration: completed ? 'line-through' : 'none'
      }
    },
    text
  );
};

Todo.propTypes = {
  onClick: _react.PropTypes.func.isRequired,
  completed: _react.PropTypes.bool.isRequired,
  text: _react.PropTypes.string.isRequired
};

var TodoList = function TodoList(_ref2) {
  var todos = _ref2.todos,
      dispatch = _ref2.dispatch;
  return _react2.default.createElement(
    'ul',
    null,
    todos.map(function (todo) {
      return _react2.default.createElement(Todo, _extends({
        key: todo.id
      }, todo, {
        onClick: function onClick() {
          return dispatch(Actions.toggleTodo(todo.id));
        }
      }));
    })
  );
};

TodoList.propTypes = {
  todos: _react.PropTypes.arrayOf(_react.PropTypes.shape({
    id: _react.PropTypes.number.isRequired,
    completed: _react.PropTypes.bool.isRequired,
    text: _react.PropTypes.string.isRequired
  }).isRequired).isRequired
};

var getVisibleTodos = function getVisibleTodos(todos, filter) {
  switch (filter) {
    case FilterTypes.SHOW_ALL:
      return todos;
    case FilterTypes.SHOW_COMPLETED:
      return todos.filter(function (t) {
        return t.completed;
      });
    case FilterTypes.SHOW_ACTIVE:
      return todos.filter(function (t) {
        return !t.completed;
      });
    default:
      throw new Error('Unknown filter: ' + filter);
  }
};

var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter[ownProps.id])
  };
};

var VisibleTodoList = (0, _reactRedux.connect)(mapStateToProps)(TodoList);

exports.default = VisibleTodoList;

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
//# sourceMappingURL=todos.js.map