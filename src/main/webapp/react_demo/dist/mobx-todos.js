(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"), require("jquery"), require("mobx-react"), require("mobx"), require("css!todomvc-app-css/index.css"), require("css!todomvc-common/base.css"), require("mobx-react-devtools/index"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom", "jquery", "mobx-react", "mobx", "css!todomvc-app-css/index.css", "css!todomvc-common/base.css", "mobx-react-devtools/index"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react"), require("react-dom"), require("jquery"), require("mobx-react"), require("mobx"), require("css!todomvc-app-css/index.css"), require("css!todomvc-common/base.css"), require("mobx-react-devtools/index")) : factory(root["react"], root["react-dom"], root["jquery"], root["mobx-react"], root["mobx"], root["css!todomvc-app-css/index.css"], root["css!todomvc-common/base.css"], root["mobx-react-devtools/index"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_13__, __WEBPACK_EXTERNAL_MODULE_20__, __WEBPACK_EXTERNAL_MODULE_80__, __WEBPACK_EXTERNAL_MODULE_81__, __WEBPACK_EXTERNAL_MODULE_153__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 123);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

//
// Generated on Tue Dec 16 2014 12:13:47 GMT+0100 (CET) by Charlie Robbins, Paolo Fragomeni & the Contributors (Using Codesurgeon).
// Version 1.2.6
//

(function (exports) {

  /*
   * browser.js: Browser specific functionality for director.
   *
   * (C) 2011, Charlie Robbins, Paolo Fragomeni, & the Contributors.
   * MIT LICENSE
   *
   */

  var dloc = document.location;

  function dlocHashEmpty() {
    // Non-IE browsers return '' when the address bar shows '#'; Director's logic
    // assumes both mean empty.
    return dloc.hash === '' || dloc.hash === '#';
  }

  var listener = {
    mode: 'modern',
    hash: dloc.hash,
    history: false,

    check: function check() {
      var h = dloc.hash;
      if (h != this.hash) {
        this.hash = h;
        this.onHashChanged();
      }
    },

    fire: function fire() {
      if (this.mode === 'modern') {
        this.history === true ? window.onpopstate() : window.onhashchange();
      } else {
        this.onHashChanged();
      }
    },

    init: function init(fn, history) {
      var self = this;
      this.history = history;

      if (!Router.listeners) {
        Router.listeners = [];
      }

      function onchange(onChangeEvent) {
        for (var i = 0, l = Router.listeners.length; i < l; i++) {
          Router.listeners[i](onChangeEvent);
        }
      }

      //note IE8 is being counted as 'modern' because it has the hashchange event
      if ('onhashchange' in window && (document.documentMode === undefined || document.documentMode > 7)) {
        // At least for now HTML5 history is available for 'modern' browsers only
        if (this.history === true) {
          // There is an old bug in Chrome that causes onpopstate to fire even
          // upon initial page load. Since the handler is run manually in init(),
          // this would cause Chrome to run it twise. Currently the only
          // workaround seems to be to set the handler after the initial page load
          // http://code.google.com/p/chromium/issues/detail?id=63040
          setTimeout(function () {
            window.onpopstate = onchange;
          }, 500);
        } else {
          window.onhashchange = onchange;
        }
        this.mode = 'modern';
      } else {
        //
        // IE support, based on a concept by Erik Arvidson ...
        //
        var frame = document.createElement('iframe');
        frame.id = 'state-frame';
        frame.style.display = 'none';
        document.body.appendChild(frame);
        this.writeFrame('');

        if ('onpropertychange' in document && 'attachEvent' in document) {
          document.attachEvent('onpropertychange', function () {
            if (event.propertyName === 'location') {
              self.check();
            }
          });
        }

        window.setInterval(function () {
          self.check();
        }, 50);

        this.onHashChanged = onchange;
        this.mode = 'legacy';
      }

      Router.listeners.push(fn);

      return this.mode;
    },

    destroy: function destroy(fn) {
      if (!Router || !Router.listeners) {
        return;
      }

      var listeners = Router.listeners;

      for (var i = listeners.length - 1; i >= 0; i--) {
        if (listeners[i] === fn) {
          listeners.splice(i, 1);
        }
      }
    },

    setHash: function setHash(s) {
      // Mozilla always adds an entry to the history
      if (this.mode === 'legacy') {
        this.writeFrame(s);
      }

      if (this.history === true) {
        window.history.pushState({}, document.title, s);
        // Fire an onpopstate event manually since pushing does not obviously
        // trigger the pop event.
        this.fire();
      } else {
        dloc.hash = s[0] === '/' ? s : '/' + s;
      }
      return this;
    },

    writeFrame: function writeFrame(s) {
      // IE support...
      var f = document.getElementById('state-frame');
      var d = f.contentDocument || f.contentWindow.document;
      d.open();
      d.write("<script>_hash = '" + s + "'; onload = parent.listener.syncHash;<script>");
      d.close();
    },

    syncHash: function syncHash() {
      // IE support...
      var s = this._hash;
      if (s != dloc.hash) {
        dloc.hash = s;
      }
      return this;
    },

    onHashChanged: function onHashChanged() {}
  };

  var Router = exports.Router = function (routes) {
    if (!(this instanceof Router)) return new Router(routes);

    this.params = {};
    this.routes = {};
    this.methods = ['on', 'once', 'after', 'before'];
    this.scope = [];
    this._methods = {};

    this._insert = this.insert;
    this.insert = this.insertEx;

    this.historySupport = (window.history != null ? window.history.pushState : null) != null;

    this.configure();
    this.mount(routes || {});
  };

  Router.prototype.init = function (r) {
    var self = this,
        routeTo;
    this.handler = function (onChangeEvent) {
      var newURL = onChangeEvent && onChangeEvent.newURL || window.location.hash;
      var url = self.history === true ? self.getPath() : newURL.replace(/.*#/, '');
      self.dispatch('on', url.charAt(0) === '/' ? url : '/' + url);
    };

    listener.init(this.handler, this.history);

    if (this.history === false) {
      if (dlocHashEmpty() && r) {
        dloc.hash = r;
      } else if (!dlocHashEmpty()) {
        self.dispatch('on', '/' + dloc.hash.replace(/^(#\/|#|\/)/, ''));
      }
    } else {
      if (this.convert_hash_in_init) {
        // Use hash as route
        routeTo = dlocHashEmpty() && r ? r : !dlocHashEmpty() ? dloc.hash.replace(/^#/, '') : null;
        if (routeTo) {
          window.history.replaceState({}, document.title, routeTo);
        }
      } else {
        // Use canonical url
        routeTo = this.getPath();
      }

      // Router has been initialized, but due to the chrome bug it will not
      // yet actually route HTML5 history state changes. Thus, decide if should route.
      if (routeTo || this.run_in_init === true) {
        this.handler();
      }
    }

    return this;
  };

  Router.prototype.explode = function () {
    var v = this.history === true ? this.getPath() : dloc.hash;
    if (v.charAt(1) === '/') {
      v = v.slice(1);
    }
    return v.slice(1, v.length).split("/");
  };

  Router.prototype.setRoute = function (i, v, val) {
    var url = this.explode();

    if (typeof i === 'number' && typeof v === 'string') {
      url[i] = v;
    } else if (typeof val === 'string') {
      url.splice(i, v, s);
    } else {
      url = [i];
    }

    listener.setHash(url.join('/'));
    return url;
  };

  //
  // ### function insertEx(method, path, route, parent)
  // #### @method {string} Method to insert the specific `route`.
  // #### @path {Array} Parsed path to insert the `route` at.
  // #### @route {Array|function} Route handlers to insert.
  // #### @parent {Object} **Optional** Parent "routes" to insert into.
  // insert a callback that will only occur once per the matched route.
  //
  Router.prototype.insertEx = function (method, path, route, parent) {
    if (method === "once") {
      method = "on";
      route = function (route) {
        var once = false;
        return function () {
          if (once) return;
          once = true;
          return route.apply(this, arguments);
        };
      }(route);
    }
    return this._insert(method, path, route, parent);
  };

  Router.prototype.getRoute = function (v) {
    var ret = v;

    if (typeof v === "number") {
      ret = this.explode()[v];
    } else if (typeof v === "string") {
      var h = this.explode();
      ret = h.indexOf(v);
    } else {
      ret = this.explode();
    }

    return ret;
  };

  Router.prototype.destroy = function () {
    listener.destroy(this.handler);
    return this;
  };

  Router.prototype.getPath = function () {
    var path = window.location.pathname;
    if (path.substr(0, 1) !== '/') {
      path = '/' + path;
    }
    return path;
  };
  function _every(arr, iterator) {
    for (var i = 0; i < arr.length; i += 1) {
      if (iterator(arr[i], i, arr) === false) {
        return;
      }
    }
  }

  function _flatten(arr) {
    var flat = [];
    for (var i = 0, n = arr.length; i < n; i++) {
      flat = flat.concat(arr[i]);
    }
    return flat;
  }

  function _asyncEverySeries(arr, iterator, callback) {
    if (!arr.length) {
      return callback();
    }
    var completed = 0;
    (function iterate() {
      iterator(arr[completed], function (err) {
        if (err || err === false) {
          callback(err);
          callback = function callback() {};
        } else {
          completed += 1;
          if (completed === arr.length) {
            callback();
          } else {
            iterate();
          }
        }
      });
    })();
  }

  function paramifyString(str, params, mod) {
    mod = str;
    for (var param in params) {
      if (params.hasOwnProperty(param)) {
        mod = params[param](str);
        if (mod !== str) {
          break;
        }
      }
    }
    return mod === str ? "([._a-zA-Z0-9-%()]+)" : mod;
  }

  function regifyString(str, params) {
    var matches,
        last = 0,
        out = "";
    while (matches = str.substr(last).match(/[^\w\d\- %@&]*\*[^\w\d\- %@&]*/)) {
      last = matches.index + matches[0].length;
      matches[0] = matches[0].replace(/^\*/, "([_.()!\\ %@&a-zA-Z0-9-]+)");
      out += str.substr(0, matches.index) + matches[0];
    }
    str = out += str.substr(last);
    var captures = str.match(/:([^\/]+)/ig),
        capture,
        length;
    if (captures) {
      length = captures.length;
      for (var i = 0; i < length; i++) {
        capture = captures[i];
        if (capture.slice(0, 2) === "::") {
          str = capture.slice(1);
        } else {
          str = str.replace(capture, paramifyString(capture, params));
        }
      }
    }
    return str;
  }

  function terminator(routes, delimiter, start, stop) {
    var last = 0,
        left = 0,
        right = 0,
        start = (start || "(").toString(),
        stop = (stop || ")").toString(),
        i;
    for (i = 0; i < routes.length; i++) {
      var chunk = routes[i];
      if (chunk.indexOf(start, last) > chunk.indexOf(stop, last) || ~chunk.indexOf(start, last) && !~chunk.indexOf(stop, last) || !~chunk.indexOf(start, last) && ~chunk.indexOf(stop, last)) {
        left = chunk.indexOf(start, last);
        right = chunk.indexOf(stop, last);
        if (~left && !~right || !~left && ~right) {
          var tmp = routes.slice(0, (i || 1) + 1).join(delimiter);
          routes = [tmp].concat(routes.slice((i || 1) + 1));
        }
        last = (right > left ? right : left) + 1;
        i = 0;
      } else {
        last = 0;
      }
    }
    return routes;
  }

  var QUERY_SEPARATOR = /\?.*/;

  Router.prototype.configure = function (options) {
    options = options || {};
    for (var i = 0; i < this.methods.length; i++) {
      this._methods[this.methods[i]] = true;
    }
    this.recurse = options.recurse || this.recurse || false;
    this.async = options.async || false;
    this.delimiter = options.delimiter || "/";
    this.strict = typeof options.strict === "undefined" ? true : options.strict;
    this.notfound = options.notfound;
    this.resource = options.resource;
    this.history = options.html5history && this.historySupport || false;
    this.run_in_init = this.history === true && options.run_handler_in_init !== false;
    this.convert_hash_in_init = this.history === true && options.convert_hash_in_init !== false;
    this.every = {
      after: options.after || null,
      before: options.before || null,
      on: options.on || null
    };
    return this;
  };

  Router.prototype.param = function (token, matcher) {
    if (token[0] !== ":") {
      token = ":" + token;
    }
    var compiled = new RegExp(token, "g");
    this.params[token] = function (str) {
      return str.replace(compiled, matcher.source || matcher);
    };
    return this;
  };

  Router.prototype.on = Router.prototype.route = function (method, path, route) {
    var self = this;
    if (!route && typeof path == "function") {
      route = path;
      path = method;
      method = "on";
    }
    if (Array.isArray(path)) {
      return path.forEach(function (p) {
        self.on(method, p, route);
      });
    }
    if (path.source) {
      path = path.source.replace(/\\\//ig, "/");
    }
    if (Array.isArray(method)) {
      return method.forEach(function (m) {
        self.on(m.toLowerCase(), path, route);
      });
    }
    path = path.split(new RegExp(this.delimiter));
    path = terminator(path, this.delimiter);
    this.insert(method, this.scope.concat(path), route);
  };

  Router.prototype.path = function (path, routesFn) {
    var self = this,
        length = this.scope.length;
    if (path.source) {
      path = path.source.replace(/\\\//ig, "/");
    }
    path = path.split(new RegExp(this.delimiter));
    path = terminator(path, this.delimiter);
    this.scope = this.scope.concat(path);
    routesFn.call(this, this);
    this.scope.splice(length, path.length);
  };

  Router.prototype.dispatch = function (method, path, callback) {
    var self = this,
        fns = this.traverse(method, path.replace(QUERY_SEPARATOR, ""), this.routes, ""),
        invoked = this._invoked,
        after;
    this._invoked = true;
    if (!fns || fns.length === 0) {
      this.last = [];
      if (typeof this.notfound === "function") {
        this.invoke([this.notfound], {
          method: method,
          path: path
        }, callback);
      }
      return false;
    }
    if (this.recurse === "forward") {
      fns = fns.reverse();
    }
    function updateAndInvoke() {
      self.last = fns.after;
      self.invoke(self.runlist(fns), self, callback);
    }
    after = this.every && this.every.after ? [this.every.after].concat(this.last) : [this.last];
    if (after && after.length > 0 && invoked) {
      if (this.async) {
        this.invoke(after, this, updateAndInvoke);
      } else {
        this.invoke(after, this);
        updateAndInvoke();
      }
      return true;
    }
    updateAndInvoke();
    return true;
  };

  Router.prototype.invoke = function (fns, thisArg, callback) {
    var self = this;
    var _apply2;
    if (this.async) {
      _apply2 = function apply(fn, next) {
        if (Array.isArray(fn)) {
          return _asyncEverySeries(fn, _apply2, next);
        } else if (typeof fn == "function") {
          fn.apply(thisArg, (fns.captures || []).concat(next));
        }
      };
      _asyncEverySeries(fns, _apply2, function () {
        if (callback) {
          callback.apply(thisArg, arguments);
        }
      });
    } else {
      _apply2 = function _apply(fn) {
        if (Array.isArray(fn)) {
          return _every(fn, _apply2);
        } else if (typeof fn === "function") {
          return fn.apply(thisArg, fns.captures || []);
        } else if (typeof fn === "string" && self.resource) {
          self.resource[fn].apply(thisArg, fns.captures || []);
        }
      };
      _every(fns, _apply2);
    }
  };

  Router.prototype.traverse = function (method, path, routes, regexp, filter) {
    var fns = [],
        current,
        exact,
        match,
        next,
        that;
    function filterRoutes(routes) {
      if (!filter) {
        return routes;
      }
      function deepCopy(source) {
        var result = [];
        for (var i = 0; i < source.length; i++) {
          result[i] = Array.isArray(source[i]) ? deepCopy(source[i]) : source[i];
        }
        return result;
      }
      function applyFilter(fns) {
        for (var i = fns.length - 1; i >= 0; i--) {
          if (Array.isArray(fns[i])) {
            applyFilter(fns[i]);
            if (fns[i].length === 0) {
              fns.splice(i, 1);
            }
          } else {
            if (!filter(fns[i])) {
              fns.splice(i, 1);
            }
          }
        }
      }
      var newRoutes = deepCopy(routes);
      newRoutes.matched = routes.matched;
      newRoutes.captures = routes.captures;
      newRoutes.after = routes.after.filter(filter);
      applyFilter(newRoutes);
      return newRoutes;
    }
    if (path === this.delimiter && routes[method]) {
      next = [[routes.before, routes[method]].filter(Boolean)];
      next.after = [routes.after].filter(Boolean);
      next.matched = true;
      next.captures = [];
      return filterRoutes(next);
    }
    for (var r in routes) {
      if (routes.hasOwnProperty(r) && (!this._methods[r] || this._methods[r] && _typeof(routes[r]) === "object" && !Array.isArray(routes[r]))) {
        current = exact = regexp + this.delimiter + r;
        if (!this.strict) {
          exact += "[" + this.delimiter + "]?";
        }
        match = path.match(new RegExp("^" + exact));
        if (!match) {
          continue;
        }
        if (match[0] && match[0] == path && routes[r][method]) {
          next = [[routes[r].before, routes[r][method]].filter(Boolean)];
          next.after = [routes[r].after].filter(Boolean);
          next.matched = true;
          next.captures = match.slice(1);
          if (this.recurse && routes === this.routes) {
            next.push([routes.before, routes.on].filter(Boolean));
            next.after = next.after.concat([routes.after].filter(Boolean));
          }
          return filterRoutes(next);
        }
        next = this.traverse(method, path, routes[r], current);
        if (next.matched) {
          if (next.length > 0) {
            fns = fns.concat(next);
          }
          if (this.recurse) {
            fns.push([routes[r].before, routes[r].on].filter(Boolean));
            next.after = next.after.concat([routes[r].after].filter(Boolean));
            if (routes === this.routes) {
              fns.push([routes["before"], routes["on"]].filter(Boolean));
              next.after = next.after.concat([routes["after"]].filter(Boolean));
            }
          }
          fns.matched = true;
          fns.captures = next.captures;
          fns.after = next.after;
          return filterRoutes(fns);
        }
      }
    }
    return false;
  };

  Router.prototype.insert = function (method, path, route, parent) {
    var methodType, parentType, isArray, nested, part;
    path = path.filter(function (p) {
      return p && p.length > 0;
    });
    parent = parent || this.routes;
    part = path.shift();
    if (/\:|\*/.test(part) && !/\\d|\\w/.test(part)) {
      part = regifyString(part, this.params);
    }
    if (path.length > 0) {
      parent[part] = parent[part] || {};
      return this.insert(method, path, route, parent[part]);
    }
    if (!part && !path.length && parent === this.routes) {
      methodType = _typeof(parent[method]);
      switch (methodType) {
        case "function":
          parent[method] = [parent[method], route];
          return;
        case "object":
          parent[method].push(route);
          return;
        case "undefined":
          parent[method] = route;
          return;
      }
      return;
    }
    parentType = _typeof(parent[part]);
    isArray = Array.isArray(parent[part]);
    if (parent[part] && !isArray && parentType == "object") {
      methodType = _typeof(parent[part][method]);
      switch (methodType) {
        case "function":
          parent[part][method] = [parent[part][method], route];
          return;
        case "object":
          parent[part][method].push(route);
          return;
        case "undefined":
          parent[part][method] = route;
          return;
      }
    } else if (parentType == "undefined") {
      nested = {};
      nested[method] = route;
      parent[part] = nested;
      return;
    }
    throw new Error("Invalid route context: " + parentType);
  };

  Router.prototype.extend = function (methods) {
    var self = this,
        len = methods.length,
        i;
    function extend(method) {
      self._methods[method] = true;
      self[method] = function () {
        var extra = arguments.length === 1 ? [method, ""] : [method];
        self.on.apply(self, extra.concat(Array.prototype.slice.call(arguments)));
      };
    }
    for (i = 0; i < len; i++) {
      extend(methods[i]);
    }
  };

  Router.prototype.runlist = function (fns) {
    var runlist = this.every && this.every.before ? [this.every.before].concat(_flatten(fns)) : _flatten(fns);
    if (this.every && this.every.on) {
      runlist.push(this.every.on);
    }
    runlist.captures = fns.captures;
    runlist.source = fns.source;
    return runlist;
  };

  Router.prototype.mount = function (routes, path) {
    if (!routes || (typeof routes === 'undefined' ? 'undefined' : _typeof(routes)) !== "object" || Array.isArray(routes)) {
      return;
    }
    var self = this;
    path = path || [];
    if (!Array.isArray(path)) {
      path = path.split(self.delimiter);
    }
    function insertOrMount(route, local) {
      var rename = route,
          parts = route.split(self.delimiter),
          routeType = _typeof(routes[route]),
          isRoute = parts[0] === "" || !self._methods[parts[0]],
          event = isRoute ? "on" : rename;
      if (isRoute) {
        rename = rename.slice((rename.match(new RegExp("^" + self.delimiter)) || [""])[0].length);
        parts.shift();
      }
      if (isRoute && routeType === "object" && !Array.isArray(routes[route])) {
        local = local.concat(parts);
        self.mount(routes[route], local);
        return;
      }
      if (isRoute) {
        local = local.concat(rename.split(self.delimiter));
        local = terminator(local, self.delimiter);
      }
      self.insert(event, local, routes[route]);
    }
    for (var route in routes) {
      if (routes.hasOwnProperty(route)) {
        insertOrMount(route, path.slice(0));
      }
    }
  };
})(( false ? 'undefined' : _typeof(exports)) === "object" ? exports : window);

/***/ }),

/***/ 119:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(5);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _mobxReact = __webpack_require__(13);

var _jquery = __webpack_require__(7);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ENTER_KEY = 13;

var TodoEntry = (0, _mobxReact.observer)(_class = function (_React$Component) {
	_inherits(TodoEntry, _React$Component);

	function TodoEntry() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, TodoEntry);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TodoEntry.__proto__ || Object.getPrototypeOf(TodoEntry)).call.apply(_ref, [this].concat(args))), _this), _this.handleNewTodoKeyDown = function (event) {
			if (event.keyCode !== ENTER_KEY) {
				return;
			}

			event.preventDefault();

			var val = (0, _jquery2.default)(_this.refs.newField).val().trim();

			if (val) {
				_this.props.todoStore.addTodo(val);
				(0, _jquery2.default)(_this.refs.newField).val('');
			}
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(TodoEntry, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement('input', {
				ref: 'newField',
				className: 'new-todo',
				placeholder: 'What needs to be done?',
				onKeyDown: this.handleNewTodoKeyDown,
				autoFocus: true
			});
		}
	}]);

	return TodoEntry;
}(_react2.default.Component)) || _class;

exports.default = TodoEntry;


TodoEntry.propTypes = {
	todoStore: _react2.default.PropTypes.object.isRequired
};

/***/ }),

/***/ 120:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _mobxReact = __webpack_require__(13);

var _utils = __webpack_require__(28);

var _constants = __webpack_require__(22);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TodoFooter = (0, _mobxReact.observer)(_class = function (_React$Component) {
	_inherits(TodoFooter, _React$Component);

	function TodoFooter() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, TodoFooter);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TodoFooter.__proto__ || Object.getPrototypeOf(TodoFooter)).call.apply(_ref, [this].concat(args))), _this), _this.clearCompleted = function () {
			_this.props.todoStore.clearCompleted();
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(TodoFooter, [{
		key: 'render',
		value: function render() {
			var todoStore = this.props.todoStore;
			if (!todoStore.activeTodoCount && !todoStore.completedCount) return null;

			var activeTodoWord = (0, _utils.pluralize)(todoStore.activeTodoCount, 'item');

			return _react2.default.createElement(
				'footer',
				{ className: 'footer' },
				_react2.default.createElement(
					'span',
					{ className: 'todo-count' },
					_react2.default.createElement(
						'strong',
						null,
						todoStore.activeTodoCount
					),
					' ',
					activeTodoWord,
					' left'
				),
				_react2.default.createElement(
					'ul',
					{ className: 'filters' },
					this.renderFilterLink(_constants.ALL_TODOS, "", "All"),
					this.renderFilterLink(_constants.ACTIVE_TODOS, "active", "Active"),
					this.renderFilterLink(_constants.COMPLETED_TODOS, "completed", "Completed")
				),
				todoStore.completedCount === 0 ? null : _react2.default.createElement(
					'button',
					{
						className: 'clear-completed',
						onClick: this.clearCompleted },
					'Clear completed'
				)
			);
		}
	}, {
		key: 'renderFilterLink',
		value: function renderFilterLink(filterName, url, caption) {
			return _react2.default.createElement(
				'li',
				null,
				_react2.default.createElement(
					'a',
					{ href: "#/" + url,
						className: filterName === this.props.viewStore.todoFilter ? "selected" : "" },
					caption
				),
				' '
			);
		}
	}]);

	return TodoFooter;
}(_react2.default.Component)) || _class;

exports.default = TodoFooter;


TodoFooter.propTypes = {
	viewStore: _react2.default.PropTypes.object.isRequired,
	todoStore: _react2.default.PropTypes.object.isRequired
};

/***/ }),

/***/ 121:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _desc, _value, _class2, _descriptor;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _mobxReact = __webpack_require__(13);

var _mobx = __webpack_require__(20);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _initDefineProp(target, property, descriptor, context) {
	if (!descriptor) return;
	Object.defineProperty(target, property, {
		enumerable: descriptor.enumerable,
		configurable: descriptor.configurable,
		writable: descriptor.writable,
		value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
	});
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
	var desc = {};
	Object['ke' + 'ys'](descriptor).forEach(function (key) {
		desc[key] = descriptor[key];
	});
	desc.enumerable = !!desc.enumerable;
	desc.configurable = !!desc.configurable;

	if ('value' in desc || desc.initializer) {
		desc.writable = true;
	}

	desc = decorators.slice().reverse().reduce(function (desc, decorator) {
		return decorator(target, property, desc) || desc;
	}, desc);

	if (context && desc.initializer !== void 0) {
		desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
		desc.initializer = undefined;
	}

	if (desc.initializer === void 0) {
		Object['define' + 'Property'](target, property, desc);
		desc = null;
	}

	return desc;
}

function _initializerWarningHelper(descriptor, context) {
	throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var ESCAPE_KEY = 27;
var ENTER_KEY = 13;

var TodoItem = (0, _mobxReact.observer)(_class = (_class2 = function (_React$Component) {
	_inherits(TodoItem, _React$Component);

	function TodoItem() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, TodoItem);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TodoItem.__proto__ || Object.getPrototypeOf(TodoItem)).call.apply(_ref, [this].concat(args))), _this), _initDefineProp(_this, 'editText', _descriptor, _this), _this.handleSubmit = function (event) {
			var val = _this.editText.trim();
			if (val) {
				_this.props.todo.setTitle(val);
				_this.editText = val;
			} else {
				_this.handleDestroy();
			}
			_this.props.viewStore.todoBeingEdited = null;
		}, _this.handleDestroy = function () {
			_this.props.todo.destroy();
			_this.props.viewStore.todoBeingEdited = null;
		}, _this.handleEdit = function () {
			var todo = _this.props.todo;
			_this.props.viewStore.todoBeingEdited = todo;
			_this.editText = todo.title;
		}, _this.handleKeyDown = function (event) {
			if (event.which === ESCAPE_KEY) {
				_this.editText = _this.props.todo.title;
				_this.props.viewStore.todoBeingEdited = null;
			} else if (event.which === ENTER_KEY) {
				_this.handleSubmit(event);
			}
		}, _this.handleChange = function (event) {
			_this.editText = event.target.value;
		}, _this.handleToggle = function () {
			_this.props.todo.toggle();
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(TodoItem, [{
		key: 'render',
		value: function render() {
			var _props = this.props,
			    viewStore = _props.viewStore,
			    todo = _props.todo;

			return _react2.default.createElement(
				'li',
				{ className: [todo.completed ? "completed" : "", (0, _mobx.expr)(function () {
						return todo === viewStore.todoBeingEdited ? "editing" : "";
					})].join(" ") },
				_react2.default.createElement(
					'div',
					{ className: 'view' },
					_react2.default.createElement('input', {
						className: 'toggle',
						type: 'checkbox',
						checked: todo.completed,
						onChange: this.handleToggle
					}),
					_react2.default.createElement(
						'label',
						{ onDoubleClick: this.handleEdit },
						todo.title
					),
					_react2.default.createElement('button', { className: 'destroy', onClick: this.handleDestroy })
				),
				_react2.default.createElement('input', {
					ref: 'editField',
					className: 'edit',
					value: this.editText,
					onBlur: this.handleSubmit,
					onChange: this.handleChange,
					onKeyDown: this.handleKeyDown
				})
			);
		}
	}]);

	return TodoItem;
}(_react2.default.Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'editText', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return "";
	}
})), _class2)) || _class;

exports.default = TodoItem;


TodoItem.propTypes = {
	todo: _react2.default.PropTypes.object.isRequired,
	viewStore: _react2.default.PropTypes.object.isRequired
};

/***/ }),

/***/ 122:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _mobxReact = __webpack_require__(13);

var _constants = __webpack_require__(22);

var _todoItem = __webpack_require__(121);

var _todoItem2 = _interopRequireDefault(_todoItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TodoOverview = (0, _mobxReact.observer)(_class = function (_React$Component) {
	_inherits(TodoOverview, _React$Component);

	function TodoOverview() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, TodoOverview);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TodoOverview.__proto__ || Object.getPrototypeOf(TodoOverview)).call.apply(_ref, [this].concat(args))), _this), _this.toggleAll = function (event) {
			var checked = event.target.checked;
			_this.props.todoStore.toggleAll(checked);
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(TodoOverview, [{
		key: 'render',
		value: function render() {
			var _props = this.props,
			    todoStore = _props.todoStore,
			    viewStore = _props.viewStore;

			if (todoStore.todos.length === 0) return null;
			return _react2.default.createElement(
				'section',
				{ className: 'main' },
				_react2.default.createElement('input', {
					className: 'toggle-all',
					type: 'checkbox',
					onChange: this.toggleAll,
					checked: todoStore.activeTodoCount === 0
				}),
				_react2.default.createElement(
					'ul',
					{ className: 'todo-list' },
					this.getVisibleTodos().map(function (todo) {
						return _react2.default.createElement(_todoItem2.default, {
							key: todo.id,
							todo: todo,
							viewStore: viewStore
						});
					})
				)
			);
		}
	}, {
		key: 'getVisibleTodos',
		value: function getVisibleTodos() {
			var _this2 = this;

			return this.props.todoStore.todos.filter(function (todo) {
				switch (_this2.props.viewStore.todoFilter) {
					case _constants.ACTIVE_TODOS:
						return !todo.completed;
					case _constants.COMPLETED_TODOS:
						return todo.completed;
					default:
						return true;
				}
			});
		}
	}]);

	return TodoOverview;
}(_react2.default.Component)) || _class;

exports.default = TodoOverview;


TodoOverview.propTypes = {
	viewStore: _react2.default.PropTypes.object.isRequired,
	todoStore: _react2.default.PropTypes.object.isRequired
};

/***/ }),

/***/ 123:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _TodoStore = __webpack_require__(63);

var _TodoStore2 = _interopRequireDefault(_TodoStore);

var _ViewStore = __webpack_require__(64);

var _ViewStore2 = _interopRequireDefault(_ViewStore);

var _todoApp = __webpack_require__(62);

var _todoApp2 = _interopRequireDefault(_todoApp);

__webpack_require__(80);

__webpack_require__(81);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var initialState = window.initialState && JSON.parse(window.initialState) || {};

var todoStore = _TodoStore2.default.fromJS(initialState.todos || []);
var viewStore = new _ViewStore2.default();

var MobXTodo = function (_React$Component) {
    _inherits(MobXTodo, _React$Component);

    function MobXTodo() {
        _classCallCheck(this, MobXTodo);

        return _possibleConstructorReturn(this, (MobXTodo.__proto__ || Object.getPrototypeOf(MobXTodo)).apply(this, arguments));
    }

    _createClass(MobXTodo, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_todoApp2.default, { todoStore: todoStore, viewStore: viewStore });
        }
    }]);

    return MobXTodo;
}(_react2.default.Component);

exports.default = MobXTodo;

/***/ }),

/***/ 124:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _desc, _value, _class, _descriptor, _descriptor2;

var _mobx = __webpack_require__(20);

function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

(0, _mobx.useStrict)(false);

var TodoModel = (_class = function () {
    function TodoModel(store, id, title, completed) {
        _classCallCheck(this, TodoModel);

        _initDefineProp(this, 'title', _descriptor, this);

        _initDefineProp(this, 'completed', _descriptor2, this);

        this.store = store;
        this.id = id;
        this.title = title;
        this.completed = completed;
    }

    _createClass(TodoModel, [{
        key: 'toggle',
        value: function toggle() {
            this.completed = !this.completed;
        }
    }, {
        key: 'destroy',
        value: function destroy() {
            this.store.todos.remove(this);
        }
    }, {
        key: 'setTitle',
        value: function setTitle(title) {
            this.title = title;
        }
    }, {
        key: 'toJS',
        value: function toJS() {
            return {
                id: this.id,
                title: this.title,
                completed: this.completed
            };
        }
    }], [{
        key: 'fromJS',
        value: function fromJS(store, object) {
            return new TodoModel(store, object.id, object.title, object.completed);
        }
    }]);

    return TodoModel;
}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'title', [_mobx.observable], {
    enumerable: true,
    initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'completed', [_mobx.observable], {
    enumerable: true,
    initializer: null
})), _class);
exports.default = TodoModel;

/***/ }),

/***/ 13:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_13__;

/***/ }),

/***/ 153:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_153__;

/***/ }),

/***/ 20:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_20__;

/***/ }),

/***/ 22:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var ALL_TODOS = exports.ALL_TODOS = 'all';
var ACTIVE_TODOS = exports.ACTIVE_TODOS = 'active';
var COMPLETED_TODOS = exports.COMPLETED_TODOS = 'completed';

/***/ }),

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.uuid = uuid;
exports.pluralize = pluralize;
function uuid() {
	/*jshint bitwise:false */
	var i, random;
	var uuid = '';

	for (i = 0; i < 32; i++) {
		random = Math.random() * 16 | 0;
		if (i === 8 || i === 12 || i === 16 || i === 20) {
			uuid += '-';
		}
		uuid += (i === 12 ? 4 : i === 16 ? random & 3 | 8 : random).toString(16);
	}

	return uuid;
}

function pluralize(count, word) {
	return count === 1 ? word : word + 's';
}

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _mobxReact = __webpack_require__(13);

var _todoEntry = __webpack_require__(119);

var _todoEntry2 = _interopRequireDefault(_todoEntry);

var _todoOverview = __webpack_require__(122);

var _todoOverview2 = _interopRequireDefault(_todoOverview);

var _todoFooter = __webpack_require__(120);

var _todoFooter2 = _interopRequireDefault(_todoFooter);

var _constants = __webpack_require__(22);

var _mobxReactDevtools = __webpack_require__(153);

var _mobxReactDevtools2 = _interopRequireDefault(_mobxReactDevtools);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TodoApp = (0, _mobxReact.observer)(_class = function (_React$Component) {
	_inherits(TodoApp, _React$Component);

	function TodoApp() {
		_classCallCheck(this, TodoApp);

		return _possibleConstructorReturn(this, (TodoApp.__proto__ || Object.getPrototypeOf(TodoApp)).apply(this, arguments));
	}

	_createClass(TodoApp, [{
		key: 'render',
		value: function render() {
			var _props = this.props,
			    todoStore = _props.todoStore,
			    viewStore = _props.viewStore;

			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(_mobxReactDevtools2.default, null),
				_react2.default.createElement(
					'header',
					{ className: 'header' },
					_react2.default.createElement(
						'h1',
						null,
						'todos'
					),
					_react2.default.createElement(_todoEntry2.default, { todoStore: todoStore })
				),
				_react2.default.createElement(_todoOverview2.default, { todoStore: todoStore, viewStore: viewStore }),
				_react2.default.createElement(_todoFooter2.default, { todoStore: todoStore, viewStore: viewStore })
			);
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			var Router = __webpack_require__(100).Router;
			var viewStore = this.props.viewStore;
			var router = Router({
				'/': function _() {
					viewStore.todoFilter = _constants.ALL_TODOS;
				},
				'/active': function active() {
					viewStore.todoFilter = _constants.ACTIVE_TODOS;
				},
				'/completed': function completed() {
					viewStore.todoFilter = _constants.COMPLETED_TODOS;
				}
			});
			router.init('/');
		}
	}]);

	return TodoApp;
}(_react2.default.Component)) || _class;

exports.default = TodoApp;


TodoApp.propTypes = {
	viewStore: _react2.default.PropTypes.object.isRequired,
	todoStore: _react2.default.PropTypes.object.isRequired
};

/***/ }),

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _desc, _value, _class, _descriptor;

var _mobx = __webpack_require__(20);

var _TodoModel = __webpack_require__(124);

var _TodoModel2 = _interopRequireDefault(_TodoModel);

var _utils = __webpack_require__(28);

var Utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _initDefineProp(target, property, descriptor, context) {
	if (!descriptor) return;
	Object.defineProperty(target, property, {
		enumerable: descriptor.enumerable,
		configurable: descriptor.configurable,
		writable: descriptor.writable,
		value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
	});
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
	var desc = {};
	Object['ke' + 'ys'](descriptor).forEach(function (key) {
		desc[key] = descriptor[key];
	});
	desc.enumerable = !!desc.enumerable;
	desc.configurable = !!desc.configurable;

	if ('value' in desc || desc.initializer) {
		desc.writable = true;
	}

	desc = decorators.slice().reverse().reduce(function (desc, decorator) {
		return decorator(target, property, desc) || desc;
	}, desc);

	if (context && desc.initializer !== void 0) {
		desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
		desc.initializer = undefined;
	}

	if (desc.initializer === void 0) {
		Object['define' + 'Property'](target, property, desc);
		desc = null;
	}

	return desc;
}

function _initializerWarningHelper(descriptor, context) {
	throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var TodoStore = (_class = function () {
	function TodoStore() {
		_classCallCheck(this, TodoStore);

		_initDefineProp(this, 'todos', _descriptor, this);
	}

	_createClass(TodoStore, [{
		key: 'subscribeServerToStore',
		value: function subscribeServerToStore() {
			var _this = this;

			(0, _mobx.reaction)(function () {
				return _this.toJS();
			}, function (todos) {
				return fetch('/api/todos', {
					method: 'post',
					body: JSON.stringify({ todos: todos }),
					headers: new Headers({ 'Content-Type': 'application/json' })
				});
			});
		}
	}, {
		key: 'subscribeLocalstorageToStore',
		value: function subscribeLocalstorageToStore() {
			var _this2 = this;

			(0, _mobx.reaction)(function () {
				return _this2.toJS();
			}, function (todos) {
				return localStorage.setItem('mobx-react-todomvc-todos', JSON.stringify({ todos: todos }));
			});
		}
	}, {
		key: 'addTodo',
		value: function addTodo(title) {
			this.todos.push(new _TodoModel2.default(this, Utils.uuid(), title, false));
		}
	}, {
		key: 'toggleAll',
		value: function toggleAll(checked) {
			this.todos.forEach(function (todo) {
				return todo.completed = checked;
			});
		}
	}, {
		key: 'clearCompleted',
		value: function clearCompleted() {
			this.todos = this.todos.filter(function (todo) {
				return !todo.completed;
			});
		}
	}, {
		key: 'toJS',
		value: function toJS() {
			return this.todos.map(function (todo) {
				return todo.toJS();
			});
		}
	}, {
		key: 'activeTodoCount',
		get: function get() {
			return this.todos.reduce(function (sum, todo) {
				return sum + (todo.completed ? 0 : 1);
			}, 0);
		}
	}, {
		key: 'completedCount',
		get: function get() {
			return this.todos.length - this.activeTodoCount;
		}
	}], [{
		key: 'fromJS',
		value: function fromJS(array) {
			var todoStore = new TodoStore();
			todoStore.todos = array.map(function (item) {
				return _TodoModel2.default.fromJS(todoStore, item);
			});
			return todoStore;
		}
	}]);

	return TodoStore;
}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'todos', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return [];
	}
}), _applyDecoratedDescriptor(_class.prototype, 'activeTodoCount', [_mobx.computed], Object.getOwnPropertyDescriptor(_class.prototype, 'activeTodoCount'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'completedCount', [_mobx.computed], Object.getOwnPropertyDescriptor(_class.prototype, 'completedCount'), _class.prototype)), _class);
exports.default = TodoStore;

/***/ }),

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _desc, _value, _class, _descriptor, _descriptor2;

var _mobx = __webpack_require__(20);

var _constants = __webpack_require__(22);

function _initDefineProp(target, property, descriptor, context) {
	if (!descriptor) return;
	Object.defineProperty(target, property, {
		enumerable: descriptor.enumerable,
		configurable: descriptor.configurable,
		writable: descriptor.writable,
		value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
	});
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
	var desc = {};
	Object['ke' + 'ys'](descriptor).forEach(function (key) {
		desc[key] = descriptor[key];
	});
	desc.enumerable = !!desc.enumerable;
	desc.configurable = !!desc.configurable;

	if ('value' in desc || desc.initializer) {
		desc.writable = true;
	}

	desc = decorators.slice().reverse().reduce(function (desc, decorator) {
		return decorator(target, property, desc) || desc;
	}, desc);

	if (context && desc.initializer !== void 0) {
		desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
		desc.initializer = undefined;
	}

	if (desc.initializer === void 0) {
		Object['define' + 'Property'](target, property, desc);
		desc = null;
	}

	return desc;
}

function _initializerWarningHelper(descriptor, context) {
	throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var ViewStore = (_class = function ViewStore() {
	_classCallCheck(this, ViewStore);

	_initDefineProp(this, 'todoBeingEdited', _descriptor, this);

	_initDefineProp(this, 'todoFilter', _descriptor2, this);
}, (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'todoBeingEdited', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return null;
	}
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'todoFilter', [_mobx.observable], {
	enumerable: true,
	initializer: function initializer() {
		return _constants.ALL_TODOS;
	}
})), _class);
exports.default = ViewStore;

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ }),

/***/ 80:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_80__;

/***/ }),

/***/ 81:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_81__;

/***/ })

/******/ });
});
//# sourceMappingURL=mobx-todos.js.map