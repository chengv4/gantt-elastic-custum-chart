(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define(["vue"], factory);
	else if(typeof exports === 'object')
		exports["GanttElastic"] = factory(require("vue"));
	else
		root["GanttElastic"] = factory(root["vue"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_vue__) {
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/GanttElastic.vue");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/GanttElastic.vue?vue&type=style&index=0&id=02c6304c&lang=css":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/GanttElastic.vue?vue&type=style&index=0&id=02c6304c&lang=css ***!
  \***************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n[class^='gantt-elastic'],\r\n[class*=' gantt-elastic'] {\r\n  box-sizing: border-box;\n}\n.gantt-elastic__main-view svg {\r\n  display: block;\n}\n.gantt-elastic__grid-horizontal-line,\r\n.gantt-elastic__grid-vertical-line {\r\n  stroke: #a0a0a0;\r\n  stroke-width: 1;\n}\nforeignObject > * {\r\n  margin: 0px;\n}\n.gantt-elastic .p-2 {\r\n  padding: 10rem;\n}\n.gantt-elastic__main-view-main-container,\r\n.gantt-elastic__main-view-container {\r\n  overflow: hidden;\r\n  max-width: 100%;\n}\n.gantt-elastic__task-list-header-column:last-of-type {\r\n  border-right: 1px solid #00000050;\n}\n.gantt-elastic__task-list-item:last-of-type {\r\n  border-bottom: 1px solid #00000050;\n}\n.gantt-elastic__task-list-item-value-wrapper:hover {\r\n  overflow: visible !important;\n}\n.gantt-elastic__task-list-item-value-wrapper:hover > .gantt-elastic__task-list-item-value-container {\r\n  position: relative;\r\n  overflow: visible !important;\n}\n.gantt-elastic__task-list-item-value-wrapper:hover > .gantt-elastic__task-list-item-value {\r\n  position: absolute;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/dayjs/dayjs.min.js":
/*!*****************************************!*\
  !*** ./node_modules/dayjs/dayjs.min.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}(this,(function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",u="hour",a="day",o="week",c="month",f="quarter",h="year",d="date",l="Invalid Date",$=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},m=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},v={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+m(r,2,"0")+":"+m(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,c),s=n-i<0,u=e.clone().add(r+(s?-1:1),c);return+(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:h,w:o,d:a,D:d,h:u,m:s,s:i,ms:r,Q:f}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},g="en",D={};D[g]=M;var p="$isDayjsObject",S=function(t){return t instanceof _||!(!t||!t[p])},w=function t(e,n,r){var i;if(!e)return g;if("string"==typeof e){var s=e.toLowerCase();D[s]&&(i=s),n&&(D[s]=n,i=s);var u=e.split("-");if(!i&&u.length>1)return t(u[0])}else{var a=e.name;D[a]=e,i=a}return!r&&i&&(g=i),i||!r&&g},O=function(t,e){if(S(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n)},b=v;b.l=w,b.i=S,b.w=function(t,e){return O(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function M(t){this.$L=w(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[p]=!0}var m=M.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(b.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match($);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return b},m.isValid=function(){return!(this.$d.toString()===l)},m.isSame=function(t,e){var n=O(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return O(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<O(t)},m.$g=function(t,e,n){return b.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!b.u(e)||e,f=b.p(t),l=function(t,e){var i=b.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},$=function(t,e){return b.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},y=this.$W,M=this.$M,m=this.$D,v="set"+(this.$u?"UTC":"");switch(f){case h:return r?l(1,0):l(31,11);case c:return r?l(1,M):l(0,M+1);case o:var g=this.$locale().weekStart||0,D=(y<g?y+7:y)-g;return l(r?m-D:m+(6-D),M);case a:case d:return $(v+"Hours",0);case u:return $(v+"Minutes",1);case s:return $(v+"Seconds",2);case i:return $(v+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var n,o=b.p(t),f="set"+(this.$u?"UTC":""),l=(n={},n[a]=f+"Date",n[d]=f+"Date",n[c]=f+"Month",n[h]=f+"FullYear",n[u]=f+"Hours",n[s]=f+"Minutes",n[i]=f+"Seconds",n[r]=f+"Milliseconds",n)[o],$=o===a?this.$D+(e-this.$W):e;if(o===c||o===h){var y=this.clone().set(d,1);y.$d[l]($),y.init(),this.$d=y.set(d,Math.min(this.$D,y.daysInMonth())).$d}else l&&this.$d[l]($);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[b.p(t)]()},m.add=function(r,f){var d,l=this;r=Number(r);var $=b.p(f),y=function(t){var e=O(l);return b.w(e.date(e.date()+Math.round(t*r)),l)};if($===c)return this.set(c,this.$M+r);if($===h)return this.set(h,this.$y+r);if($===a)return y(1);if($===o)return y(7);var M=(d={},d[s]=e,d[u]=n,d[i]=t,d)[$]||1,m=this.$d.getTime()+r*M;return b.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||l;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=b.z(this),s=this.$H,u=this.$m,a=this.$M,o=n.weekdays,c=n.months,f=n.meridiem,h=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].slice(0,s)},d=function(t){return b.s(s%12||12,t,"0")},$=f||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(y,(function(t,r){return r||function(t){switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return b.s(e.$y,4,"0");case"M":return a+1;case"MM":return b.s(a+1,2,"0");case"MMM":return h(n.monthsShort,a,c,3);case"MMMM":return h(c,a);case"D":return e.$D;case"DD":return b.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return h(n.weekdaysMin,e.$W,o,2);case"ddd":return h(n.weekdaysShort,e.$W,o,3);case"dddd":return o[e.$W];case"H":return String(s);case"HH":return b.s(s,2,"0");case"h":return d(1);case"hh":return d(2);case"a":return $(s,u,!0);case"A":return $(s,u,!1);case"m":return String(u);case"mm":return b.s(u,2,"0");case"s":return String(e.$s);case"ss":return b.s(e.$s,2,"0");case"SSS":return b.s(e.$ms,3,"0");case"Z":return i}return null}(t)||i.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,d,l){var $,y=this,M=b.p(d),m=O(r),v=(m.utcOffset()-this.utcOffset())*e,g=this-m,D=function(){return b.m(y,m)};switch(M){case h:$=D()/12;break;case c:$=D();break;case f:$=D()/3;break;case o:$=(g-v)/6048e5;break;case a:$=(g-v)/864e5;break;case u:$=g/n;break;case s:$=g/e;break;case i:$=g/t;break;default:$=g}return l?$:b.a($)},m.daysInMonth=function(){return this.endOf(c).$D},m.$locale=function(){return D[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=w(t,e,!0);return r&&(n.$L=r),n},m.clone=function(){return b.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},M}(),k=_.prototype;return O.prototype=k,[["$ms",r],["$s",i],["$m",s],["$H",u],["$W",a],["$M",c],["$y",h],["$D",d]].forEach((function(t){k[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),O.extend=function(t,e){return t.$i||(t(e,_,O),t.$i=!0),O},O.locale=w,O.isDayjs=S,O.unix=function(t){return O(1e3*t)},O.en=D[g],O.Ls=D,O.p={},O}));

/***/ }),

/***/ "./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js":
/*!*************************************************************************!*\
  !*** ./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/**
 * A collection of shims that provide minimal functionality of the ES6 collections.
 *
 * These implementations are not meant to be used outside of the ResizeObserver
 * modules as they cover only a limited range of use cases.
 */
/* eslint-disable require-jsdoc, valid-jsdoc */
var MapShim = (function () {
    if (typeof Map !== 'undefined') {
        return Map;
    }
    /**
     * Returns index in provided array that matches the specified key.
     *
     * @param {Array<Array>} arr
     * @param {*} key
     * @returns {number}
     */
    function getIndex(arr, key) {
        var result = -1;
        arr.some(function (entry, index) {
            if (entry[0] === key) {
                result = index;
                return true;
            }
            return false;
        });
        return result;
    }
    return /** @class */ (function () {
        function class_1() {
            this.__entries__ = [];
        }
        Object.defineProperty(class_1.prototype, "size", {
            /**
             * @returns {boolean}
             */
            get: function () {
                return this.__entries__.length;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {*} key
         * @returns {*}
         */
        class_1.prototype.get = function (key) {
            var index = getIndex(this.__entries__, key);
            var entry = this.__entries__[index];
            return entry && entry[1];
        };
        /**
         * @param {*} key
         * @param {*} value
         * @returns {void}
         */
        class_1.prototype.set = function (key, value) {
            var index = getIndex(this.__entries__, key);
            if (~index) {
                this.__entries__[index][1] = value;
            }
            else {
                this.__entries__.push([key, value]);
            }
        };
        /**
         * @param {*} key
         * @returns {void}
         */
        class_1.prototype.delete = function (key) {
            var entries = this.__entries__;
            var index = getIndex(entries, key);
            if (~index) {
                entries.splice(index, 1);
            }
        };
        /**
         * @param {*} key
         * @returns {void}
         */
        class_1.prototype.has = function (key) {
            return !!~getIndex(this.__entries__, key);
        };
        /**
         * @returns {void}
         */
        class_1.prototype.clear = function () {
            this.__entries__.splice(0);
        };
        /**
         * @param {Function} callback
         * @param {*} [ctx=null]
         * @returns {void}
         */
        class_1.prototype.forEach = function (callback, ctx) {
            if (ctx === void 0) { ctx = null; }
            for (var _i = 0, _a = this.__entries__; _i < _a.length; _i++) {
                var entry = _a[_i];
                callback.call(ctx, entry[1], entry[0]);
            }
        };
        return class_1;
    }());
})();

/**
 * Detects whether window and document objects are available in current environment.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && window.document === document;

// Returns global object of a current environment.
var global$1 = (function () {
    if (typeof global !== 'undefined' && global.Math === Math) {
        return global;
    }
    if (typeof self !== 'undefined' && self.Math === Math) {
        return self;
    }
    if (typeof window !== 'undefined' && window.Math === Math) {
        return window;
    }
    // eslint-disable-next-line no-new-func
    return Function('return this')();
})();

/**
 * A shim for the requestAnimationFrame which falls back to the setTimeout if
 * first one is not supported.
 *
 * @returns {number} Requests' identifier.
 */
var requestAnimationFrame$1 = (function () {
    if (typeof requestAnimationFrame === 'function') {
        // It's required to use a bounded function because IE sometimes throws
        // an "Invalid calling object" error if rAF is invoked without the global
        // object on the left hand side.
        return requestAnimationFrame.bind(global$1);
    }
    return function (callback) { return setTimeout(function () { return callback(Date.now()); }, 1000 / 60); };
})();

// Defines minimum timeout before adding a trailing call.
var trailingTimeout = 2;
/**
 * Creates a wrapper function which ensures that provided callback will be
 * invoked only once during the specified delay period.
 *
 * @param {Function} callback - Function to be invoked after the delay period.
 * @param {number} delay - Delay after which to invoke callback.
 * @returns {Function}
 */
function throttle (callback, delay) {
    var leadingCall = false, trailingCall = false, lastCallTime = 0;
    /**
     * Invokes the original callback function and schedules new invocation if
     * the "proxy" was called during current request.
     *
     * @returns {void}
     */
    function resolvePending() {
        if (leadingCall) {
            leadingCall = false;
            callback();
        }
        if (trailingCall) {
            proxy();
        }
    }
    /**
     * Callback invoked after the specified delay. It will further postpone
     * invocation of the original function delegating it to the
     * requestAnimationFrame.
     *
     * @returns {void}
     */
    function timeoutCallback() {
        requestAnimationFrame$1(resolvePending);
    }
    /**
     * Schedules invocation of the original function.
     *
     * @returns {void}
     */
    function proxy() {
        var timeStamp = Date.now();
        if (leadingCall) {
            // Reject immediately following calls.
            if (timeStamp - lastCallTime < trailingTimeout) {
                return;
            }
            // Schedule new call to be in invoked when the pending one is resolved.
            // This is important for "transitions" which never actually start
            // immediately so there is a chance that we might miss one if change
            // happens amids the pending invocation.
            trailingCall = true;
        }
        else {
            leadingCall = true;
            trailingCall = false;
            setTimeout(timeoutCallback, delay);
        }
        lastCallTime = timeStamp;
    }
    return proxy;
}

// Minimum delay before invoking the update of observers.
var REFRESH_DELAY = 20;
// A list of substrings of CSS properties used to find transition events that
// might affect dimensions of observed elements.
var transitionKeys = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight'];
// Check if MutationObserver is available.
var mutationObserverSupported = typeof MutationObserver !== 'undefined';
/**
 * Singleton controller class which handles updates of ResizeObserver instances.
 */
var ResizeObserverController = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserverController.
     *
     * @private
     */
    function ResizeObserverController() {
        /**
         * Indicates whether DOM listeners have been added.
         *
         * @private {boolean}
         */
        this.connected_ = false;
        /**
         * Tells that controller has subscribed for Mutation Events.
         *
         * @private {boolean}
         */
        this.mutationEventsAdded_ = false;
        /**
         * Keeps reference to the instance of MutationObserver.
         *
         * @private {MutationObserver}
         */
        this.mutationsObserver_ = null;
        /**
         * A list of connected observers.
         *
         * @private {Array<ResizeObserverSPI>}
         */
        this.observers_ = [];
        this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
        this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
    }
    /**
     * Adds observer to observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be added.
     * @returns {void}
     */
    ResizeObserverController.prototype.addObserver = function (observer) {
        if (!~this.observers_.indexOf(observer)) {
            this.observers_.push(observer);
        }
        // Add listeners if they haven't been added yet.
        if (!this.connected_) {
            this.connect_();
        }
    };
    /**
     * Removes observer from observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be removed.
     * @returns {void}
     */
    ResizeObserverController.prototype.removeObserver = function (observer) {
        var observers = this.observers_;
        var index = observers.indexOf(observer);
        // Remove observer if it's present in registry.
        if (~index) {
            observers.splice(index, 1);
        }
        // Remove listeners if controller has no connected observers.
        if (!observers.length && this.connected_) {
            this.disconnect_();
        }
    };
    /**
     * Invokes the update of observers. It will continue running updates insofar
     * it detects changes.
     *
     * @returns {void}
     */
    ResizeObserverController.prototype.refresh = function () {
        var changesDetected = this.updateObservers_();
        // Continue running updates if changes have been detected as there might
        // be future ones caused by CSS transitions.
        if (changesDetected) {
            this.refresh();
        }
    };
    /**
     * Updates every observer from observers list and notifies them of queued
     * entries.
     *
     * @private
     * @returns {boolean} Returns "true" if any observer has detected changes in
     *      dimensions of it's elements.
     */
    ResizeObserverController.prototype.updateObservers_ = function () {
        // Collect observers that have active observations.
        var activeObservers = this.observers_.filter(function (observer) {
            return observer.gatherActive(), observer.hasActive();
        });
        // Deliver notifications in a separate cycle in order to avoid any
        // collisions between observers, e.g. when multiple instances of
        // ResizeObserver are tracking the same element and the callback of one
        // of them changes content dimensions of the observed target. Sometimes
        // this may result in notifications being blocked for the rest of observers.
        activeObservers.forEach(function (observer) { return observer.broadcastActive(); });
        return activeObservers.length > 0;
    };
    /**
     * Initializes DOM listeners.
     *
     * @private
     * @returns {void}
     */
    ResizeObserverController.prototype.connect_ = function () {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already added.
        if (!isBrowser || this.connected_) {
            return;
        }
        // Subscription to the "Transitionend" event is used as a workaround for
        // delayed transitions. This way it's possible to capture at least the
        // final state of an element.
        document.addEventListener('transitionend', this.onTransitionEnd_);
        window.addEventListener('resize', this.refresh);
        if (mutationObserverSupported) {
            this.mutationsObserver_ = new MutationObserver(this.refresh);
            this.mutationsObserver_.observe(document, {
                attributes: true,
                childList: true,
                characterData: true,
                subtree: true
            });
        }
        else {
            document.addEventListener('DOMSubtreeModified', this.refresh);
            this.mutationEventsAdded_ = true;
        }
        this.connected_ = true;
    };
    /**
     * Removes DOM listeners.
     *
     * @private
     * @returns {void}
     */
    ResizeObserverController.prototype.disconnect_ = function () {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already removed.
        if (!isBrowser || !this.connected_) {
            return;
        }
        document.removeEventListener('transitionend', this.onTransitionEnd_);
        window.removeEventListener('resize', this.refresh);
        if (this.mutationsObserver_) {
            this.mutationsObserver_.disconnect();
        }
        if (this.mutationEventsAdded_) {
            document.removeEventListener('DOMSubtreeModified', this.refresh);
        }
        this.mutationsObserver_ = null;
        this.mutationEventsAdded_ = false;
        this.connected_ = false;
    };
    /**
     * "Transitionend" event handler.
     *
     * @private
     * @param {TransitionEvent} event
     * @returns {void}
     */
    ResizeObserverController.prototype.onTransitionEnd_ = function (_a) {
        var _b = _a.propertyName, propertyName = _b === void 0 ? '' : _b;
        // Detect whether transition may affect dimensions of an element.
        var isReflowProperty = transitionKeys.some(function (key) {
            return !!~propertyName.indexOf(key);
        });
        if (isReflowProperty) {
            this.refresh();
        }
    };
    /**
     * Returns instance of the ResizeObserverController.
     *
     * @returns {ResizeObserverController}
     */
    ResizeObserverController.getInstance = function () {
        if (!this.instance_) {
            this.instance_ = new ResizeObserverController();
        }
        return this.instance_;
    };
    /**
     * Holds reference to the controller's instance.
     *
     * @private {ResizeObserverController}
     */
    ResizeObserverController.instance_ = null;
    return ResizeObserverController;
}());

/**
 * Defines non-writable/enumerable properties of the provided target object.
 *
 * @param {Object} target - Object for which to define properties.
 * @param {Object} props - Properties to be defined.
 * @returns {Object} Target object.
 */
var defineConfigurable = (function (target, props) {
    for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
        var key = _a[_i];
        Object.defineProperty(target, key, {
            value: props[key],
            enumerable: false,
            writable: false,
            configurable: true
        });
    }
    return target;
});

/**
 * Returns the global object associated with provided element.
 *
 * @param {Object} target
 * @returns {Object}
 */
var getWindowOf = (function (target) {
    // Assume that the element is an instance of Node, which means that it
    // has the "ownerDocument" property from which we can retrieve a
    // corresponding global object.
    var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView;
    // Return the local global object if it's not possible extract one from
    // provided element.
    return ownerGlobal || global$1;
});

// Placeholder of an empty content rectangle.
var emptyRect = createRectInit(0, 0, 0, 0);
/**
 * Converts provided string to a number.
 *
 * @param {number|string} value
 * @returns {number}
 */
function toFloat(value) {
    return parseFloat(value) || 0;
}
/**
 * Extracts borders size from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @param {...string} positions - Borders positions (top, right, ...)
 * @returns {number}
 */
function getBordersSize(styles) {
    var positions = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        positions[_i - 1] = arguments[_i];
    }
    return positions.reduce(function (size, position) {
        var value = styles['border-' + position + '-width'];
        return size + toFloat(value);
    }, 0);
}
/**
 * Extracts paddings sizes from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @returns {Object} Paddings box.
 */
function getPaddings(styles) {
    var positions = ['top', 'right', 'bottom', 'left'];
    var paddings = {};
    for (var _i = 0, positions_1 = positions; _i < positions_1.length; _i++) {
        var position = positions_1[_i];
        var value = styles['padding-' + position];
        paddings[position] = toFloat(value);
    }
    return paddings;
}
/**
 * Calculates content rectangle of provided SVG element.
 *
 * @param {SVGGraphicsElement} target - Element content rectangle of which needs
 *      to be calculated.
 * @returns {DOMRectInit}
 */
function getSVGContentRect(target) {
    var bbox = target.getBBox();
    return createRectInit(0, 0, bbox.width, bbox.height);
}
/**
 * Calculates content rectangle of provided HTMLElement.
 *
 * @param {HTMLElement} target - Element for which to calculate the content rectangle.
 * @returns {DOMRectInit}
 */
function getHTMLElementContentRect(target) {
    // Client width & height properties can't be
    // used exclusively as they provide rounded values.
    var clientWidth = target.clientWidth, clientHeight = target.clientHeight;
    // By this condition we can catch all non-replaced inline, hidden and
    // detached elements. Though elements with width & height properties less
    // than 0.5 will be discarded as well.
    //
    // Without it we would need to implement separate methods for each of
    // those cases and it's not possible to perform a precise and performance
    // effective test for hidden elements. E.g. even jQuery's ':visible' filter
    // gives wrong results for elements with width & height less than 0.5.
    if (!clientWidth && !clientHeight) {
        return emptyRect;
    }
    var styles = getWindowOf(target).getComputedStyle(target);
    var paddings = getPaddings(styles);
    var horizPad = paddings.left + paddings.right;
    var vertPad = paddings.top + paddings.bottom;
    // Computed styles of width & height are being used because they are the
    // only dimensions available to JS that contain non-rounded values. It could
    // be possible to utilize the getBoundingClientRect if only it's data wasn't
    // affected by CSS transformations let alone paddings, borders and scroll bars.
    var width = toFloat(styles.width), height = toFloat(styles.height);
    // Width & height include paddings and borders when the 'border-box' box
    // model is applied (except for IE).
    if (styles.boxSizing === 'border-box') {
        // Following conditions are required to handle Internet Explorer which
        // doesn't include paddings and borders to computed CSS dimensions.
        //
        // We can say that if CSS dimensions + paddings are equal to the "client"
        // properties then it's either IE, and thus we don't need to subtract
        // anything, or an element merely doesn't have paddings/borders styles.
        if (Math.round(width + horizPad) !== clientWidth) {
            width -= getBordersSize(styles, 'left', 'right') + horizPad;
        }
        if (Math.round(height + vertPad) !== clientHeight) {
            height -= getBordersSize(styles, 'top', 'bottom') + vertPad;
        }
    }
    // Following steps can't be applied to the document's root element as its
    // client[Width/Height] properties represent viewport area of the window.
    // Besides, it's as well not necessary as the <html> itself neither has
    // rendered scroll bars nor it can be clipped.
    if (!isDocumentElement(target)) {
        // In some browsers (only in Firefox, actually) CSS width & height
        // include scroll bars size which can be removed at this step as scroll
        // bars are the only difference between rounded dimensions + paddings
        // and "client" properties, though that is not always true in Chrome.
        var vertScrollbar = Math.round(width + horizPad) - clientWidth;
        var horizScrollbar = Math.round(height + vertPad) - clientHeight;
        // Chrome has a rather weird rounding of "client" properties.
        // E.g. for an element with content width of 314.2px it sometimes gives
        // the client width of 315px and for the width of 314.7px it may give
        // 314px. And it doesn't happen all the time. So just ignore this delta
        // as a non-relevant.
        if (Math.abs(vertScrollbar) !== 1) {
            width -= vertScrollbar;
        }
        if (Math.abs(horizScrollbar) !== 1) {
            height -= horizScrollbar;
        }
    }
    return createRectInit(paddings.left, paddings.top, width, height);
}
/**
 * Checks whether provided element is an instance of the SVGGraphicsElement.
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
var isSVGGraphicsElement = (function () {
    // Some browsers, namely IE and Edge, don't have the SVGGraphicsElement
    // interface.
    if (typeof SVGGraphicsElement !== 'undefined') {
        return function (target) { return target instanceof getWindowOf(target).SVGGraphicsElement; };
    }
    // If it's so, then check that element is at least an instance of the
    // SVGElement and that it has the "getBBox" method.
    // eslint-disable-next-line no-extra-parens
    return function (target) { return (target instanceof getWindowOf(target).SVGElement &&
        typeof target.getBBox === 'function'); };
})();
/**
 * Checks whether provided element is a document element (<html>).
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
function isDocumentElement(target) {
    return target === getWindowOf(target).document.documentElement;
}
/**
 * Calculates an appropriate content rectangle for provided html or svg element.
 *
 * @param {Element} target - Element content rectangle of which needs to be calculated.
 * @returns {DOMRectInit}
 */
function getContentRect(target) {
    if (!isBrowser) {
        return emptyRect;
    }
    if (isSVGGraphicsElement(target)) {
        return getSVGContentRect(target);
    }
    return getHTMLElementContentRect(target);
}
/**
 * Creates rectangle with an interface of the DOMRectReadOnly.
 * Spec: https://drafts.fxtf.org/geometry/#domrectreadonly
 *
 * @param {DOMRectInit} rectInit - Object with rectangle's x/y coordinates and dimensions.
 * @returns {DOMRectReadOnly}
 */
function createReadOnlyRect(_a) {
    var x = _a.x, y = _a.y, width = _a.width, height = _a.height;
    // If DOMRectReadOnly is available use it as a prototype for the rectangle.
    var Constr = typeof DOMRectReadOnly !== 'undefined' ? DOMRectReadOnly : Object;
    var rect = Object.create(Constr.prototype);
    // Rectangle's properties are not writable and non-enumerable.
    defineConfigurable(rect, {
        x: x, y: y, width: width, height: height,
        top: y,
        right: x + width,
        bottom: height + y,
        left: x
    });
    return rect;
}
/**
 * Creates DOMRectInit object based on the provided dimensions and the x/y coordinates.
 * Spec: https://drafts.fxtf.org/geometry/#dictdef-domrectinit
 *
 * @param {number} x - X coordinate.
 * @param {number} y - Y coordinate.
 * @param {number} width - Rectangle's width.
 * @param {number} height - Rectangle's height.
 * @returns {DOMRectInit}
 */
function createRectInit(x, y, width, height) {
    return { x: x, y: y, width: width, height: height };
}

/**
 * Class that is responsible for computations of the content rectangle of
 * provided DOM element and for keeping track of it's changes.
 */
var ResizeObservation = /** @class */ (function () {
    /**
     * Creates an instance of ResizeObservation.
     *
     * @param {Element} target - Element to be observed.
     */
    function ResizeObservation(target) {
        /**
         * Broadcasted width of content rectangle.
         *
         * @type {number}
         */
        this.broadcastWidth = 0;
        /**
         * Broadcasted height of content rectangle.
         *
         * @type {number}
         */
        this.broadcastHeight = 0;
        /**
         * Reference to the last observed content rectangle.
         *
         * @private {DOMRectInit}
         */
        this.contentRect_ = createRectInit(0, 0, 0, 0);
        this.target = target;
    }
    /**
     * Updates content rectangle and tells whether it's width or height properties
     * have changed since the last broadcast.
     *
     * @returns {boolean}
     */
    ResizeObservation.prototype.isActive = function () {
        var rect = getContentRect(this.target);
        this.contentRect_ = rect;
        return (rect.width !== this.broadcastWidth ||
            rect.height !== this.broadcastHeight);
    };
    /**
     * Updates 'broadcastWidth' and 'broadcastHeight' properties with a data
     * from the corresponding properties of the last observed content rectangle.
     *
     * @returns {DOMRectInit} Last observed content rectangle.
     */
    ResizeObservation.prototype.broadcastRect = function () {
        var rect = this.contentRect_;
        this.broadcastWidth = rect.width;
        this.broadcastHeight = rect.height;
        return rect;
    };
    return ResizeObservation;
}());

var ResizeObserverEntry = /** @class */ (function () {
    /**
     * Creates an instance of ResizeObserverEntry.
     *
     * @param {Element} target - Element that is being observed.
     * @param {DOMRectInit} rectInit - Data of the element's content rectangle.
     */
    function ResizeObserverEntry(target, rectInit) {
        var contentRect = createReadOnlyRect(rectInit);
        // According to the specification following properties are not writable
        // and are also not enumerable in the native implementation.
        //
        // Property accessors are not being used as they'd require to define a
        // private WeakMap storage which may cause memory leaks in browsers that
        // don't support this type of collections.
        defineConfigurable(this, { target: target, contentRect: contentRect });
    }
    return ResizeObserverEntry;
}());

var ResizeObserverSPI = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback function that is invoked
     *      when one of the observed elements changes it's content dimensions.
     * @param {ResizeObserverController} controller - Controller instance which
     *      is responsible for the updates of observer.
     * @param {ResizeObserver} callbackCtx - Reference to the public
     *      ResizeObserver instance which will be passed to callback function.
     */
    function ResizeObserverSPI(callback, controller, callbackCtx) {
        /**
         * Collection of resize observations that have detected changes in dimensions
         * of elements.
         *
         * @private {Array<ResizeObservation>}
         */
        this.activeObservations_ = [];
        /**
         * Registry of the ResizeObservation instances.
         *
         * @private {Map<Element, ResizeObservation>}
         */
        this.observations_ = new MapShim();
        if (typeof callback !== 'function') {
            throw new TypeError('The callback provided as parameter 1 is not a function.');
        }
        this.callback_ = callback;
        this.controller_ = controller;
        this.callbackCtx_ = callbackCtx;
    }
    /**
     * Starts observing provided element.
     *
     * @param {Element} target - Element to be observed.
     * @returns {void}
     */
    ResizeObserverSPI.prototype.observe = function (target) {
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        // Do nothing if current environment doesn't have the Element interface.
        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        // Do nothing if element is already being observed.
        if (observations.has(target)) {
            return;
        }
        observations.set(target, new ResizeObservation(target));
        this.controller_.addObserver(this);
        // Force the update of observations.
        this.controller_.refresh();
    };
    /**
     * Stops observing provided element.
     *
     * @param {Element} target - Element to stop observing.
     * @returns {void}
     */
    ResizeObserverSPI.prototype.unobserve = function (target) {
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        // Do nothing if current environment doesn't have the Element interface.
        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        // Do nothing if element is not being observed.
        if (!observations.has(target)) {
            return;
        }
        observations.delete(target);
        if (!observations.size) {
            this.controller_.removeObserver(this);
        }
    };
    /**
     * Stops observing all elements.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.disconnect = function () {
        this.clearActive();
        this.observations_.clear();
        this.controller_.removeObserver(this);
    };
    /**
     * Collects observation instances the associated element of which has changed
     * it's content rectangle.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.gatherActive = function () {
        var _this = this;
        this.clearActive();
        this.observations_.forEach(function (observation) {
            if (observation.isActive()) {
                _this.activeObservations_.push(observation);
            }
        });
    };
    /**
     * Invokes initial callback function with a list of ResizeObserverEntry
     * instances collected from active resize observations.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.broadcastActive = function () {
        // Do nothing if observer doesn't have active observations.
        if (!this.hasActive()) {
            return;
        }
        var ctx = this.callbackCtx_;
        // Create ResizeObserverEntry instance for every active observation.
        var entries = this.activeObservations_.map(function (observation) {
            return new ResizeObserverEntry(observation.target, observation.broadcastRect());
        });
        this.callback_.call(ctx, entries, ctx);
        this.clearActive();
    };
    /**
     * Clears the collection of active observations.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.clearActive = function () {
        this.activeObservations_.splice(0);
    };
    /**
     * Tells whether observer has active observations.
     *
     * @returns {boolean}
     */
    ResizeObserverSPI.prototype.hasActive = function () {
        return this.activeObservations_.length > 0;
    };
    return ResizeObserverSPI;
}());

// Registry of internal observers. If WeakMap is not available use current shim
// for the Map collection as it has all required methods and because WeakMap
// can't be fully polyfilled anyway.
var observers = typeof WeakMap !== 'undefined' ? new WeakMap() : new MapShim();
/**
 * ResizeObserver API. Encapsulates the ResizeObserver SPI implementation
 * exposing only those methods and properties that are defined in the spec.
 */
var ResizeObserver = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback that is invoked when
     *      dimensions of the observed elements change.
     */
    function ResizeObserver(callback) {
        if (!(this instanceof ResizeObserver)) {
            throw new TypeError('Cannot call a class as a function.');
        }
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        var controller = ResizeObserverController.getInstance();
        var observer = new ResizeObserverSPI(callback, controller, this);
        observers.set(this, observer);
    }
    return ResizeObserver;
}());
// Expose public methods of ResizeObserver.
[
    'observe',
    'unobserve',
    'disconnect'
].forEach(function (method) {
    ResizeObserver.prototype[method] = function () {
        var _a;
        return (_a = observers.get(this))[method].apply(_a, arguments);
    };
});

var index = (function () {
    // Export existing implementation if available.
    if (typeof global$1.ResizeObserver !== 'undefined') {
        return global$1.ResizeObserver;
    }
    return ResizeObserver;
})();

/* harmony default export */ __webpack_exports__["default"] = (index);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/GanttElastic.vue?vue&type=script&lang=js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/GanttElastic.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************/
/*! exports provided: mergeDeep, mergeDeepReactive, notEqualDeep, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeDeep", function() { return mergeDeep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeDeepReactive", function() { return mergeDeepReactive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notEqualDeep", function() { return notEqualDeep; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_MainView_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/MainView.vue */ "./src/components/MainView.vue");
/* harmony import */ var _style_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.js */ "./src/style.js");
/* harmony import */ var resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! resize-observer-polyfill */ "./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js");







const ctx = document.createElement('canvas').getContext('2d');
let VueInst = vue__WEBPACK_IMPORTED_MODULE_0___default.a;
function initVue() {
  if (typeof Vue !== 'undefined' && typeof VueInst === 'undefined') {
    VueInst = Vue;
  }
}
initVue();

let hourWidthCache = null;

/**
 * Helper function to fill out empty options in user settings
 *
 * @param {object} userOptions - initial user options that will merge with those below
 * @returns {object} merged options
 */
function getOptions(userOptions) {
  let localeName = 'en';
  if (typeof userOptions.locale !== 'undefined' && typeof userOptions.locale.name !== 'undefined') {
    localeName = userOptions.locale.name;
  }
  return {
    slots: {
      header: {}
    },
    taskMapping: {
      //*
      id: 'id',
      start: 'start',
      label: 'label',
      duration: 'duration',
      progress: 'progress',
      type: 'type',
      style: 'style',
      collapsed: 'collapsed',
      showTaskList: 'showTaskList'
    },
    width: 0,
    height: 0,
    clientWidth: 0,
    outerHeight: 0,
    rowsHeight: 0,
    allVisibleTasksHeight: 0,
    scroll: {
      scrolling: false,
      dragXMoveMultiplier: 3, //*
      dragYMoveMultiplier: 2, //*
      top: 0,
      taskList: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      },
      chart: {
        left: 0,
        right: 0,
        percent: 0,
        timePercent: 0,
        top: 0,
        bottom: 0,
        time: 0,
        timeCenter: 0,
        dateTime: {
          left: '',
          right: ''
        }
      }
    },
    scope: {
      //*
      before: 1,
      after: 1
    },
    times: {
      timeScale: 60 * 1000,
      timeZoom: 17, //*
      timePerPixel: 0,
      firstTime: null,
      lastTime: null,
      firstTaskTime: 0,
      lastTaskTime: 0,
      totalViewDurationMs: 0,
      totalViewDurationPx: 0,
      stepDuration: 'day',
      steps: []
    },
    row: {
      height: 24 //*
    },
    maxRows: 20, //*
    maxHeight: 0, //*
    chart: {
      grid: {
        horizontal: {
          gap: 6 //*
        }
      },
      progress: {
        width: 20, //*
        height: 6, //*
        pattern: true,
        bar: false
      },
      text: {
        offset: 4, //*
        xPadding: 10, //*
        display: true //*
      },
      expander: {
        type: 'chart',
        display: false, //*
        displayIfTaskListHidden: true, //*
        offset: 4, //*
        size: 18
      }
    },
    taskList: {
      display: true, //*
      resizeAfterThreshold: true, //*
      widthThreshold: 75, //*
      columns: [
        //*
        {
          id: 0,
          label: 'ID',
          value: 'id',
          width: 40
        }
      ],
      percent: 100, //*
      width: 0,
      finalWidth: 0,
      widthFromPercentage: 0,
      minWidth: 18,
      expander: {
        type: 'task-list',
        size: 16,
        columnWidth: 24,
        padding: 16,
        margin: 10,
        straight: false
      }
    },
    calendar: {
      workingDays: [1, 2, 3, 4, 5], //*
      gap: 6, //*
      height: 0,
      strokeWidth: 1,
      hour: {
        height: 20, //*
        display: true, //*
        widths: [],
        maxWidths: { short: 0, medium: 0, long: 0 },
        formatted: {
          long: [],
          medium: [],
          short: []
        },
        format: {
          //*
          long(date) {
            return date.format('HH:mm');
          },
          medium(date) {
            return date.format('HH:mm');
          },
          short(date) {
            return date.format('HH');
          }
        }
      },
      day: {
        height: 20, //*
        display: true, //*
        widths: [],
        maxWidths: { short: 0, medium: 0, long: 0 },
        format: {
          long(date) {
            return date.format('DD dddd');
          },
          medium(date) {
            return date.format('DD ddd');
          },
          short(date) {
            return date.format('DD');
          }
        }
      },
      month: {
        height: 20, //*
        display: true, //*
        widths: [],
        maxWidths: { short: 0, medium: 0, long: 0 },
        format: {
          //*
          short(date) {
            return date.format('MM');
          },
          medium(date) {
            return date.format("MMM 'YY");
          },
          long(date) {
            return date.format('MMMM YYYY');
          }
        }
      }
    },
    locale: {
      //*
      name: 'en',
      weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
      weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
      weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
      months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
      monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
      weekStart: 1,
      relativeTime: {
        future: 'in %s',
        past: '%s ago',
        s: 'a few seconds',
        m: 'a minute',
        mm: '%d minutes',
        h: 'an hour',
        hh: '%d hours',
        d: 'a day',
        dd: '%d days',
        M: 'a month',
        MM: '%d months',
        y: 'a year',
        yy: '%d years'
      },
      formats: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY HH:mm',
        LLLL: 'dddd, D MMMM YYYY HH:mm'
      },
      ordinal: n => {
        const s = ['th', 'st', 'nd', 'rd'];
        const v = n % 100;
        return `[${n}${s[(v - 20) % 10] || s[v] || s[0]}]`;
      }
    }
  };
}

/**
 * Prepare style
 *
 * @returns {object}
 */
function prepareStyle(userStyle) {
  let fontSize = '12px';
  let fontFamily = window
    .getComputedStyle(document.body)
    .getPropertyValue('font-family')
    .toString();
  if (typeof userStyle !== 'undefined') {
    if (typeof userStyle.fontSize !== 'undefined') {
      fontSize = userStyle.fontSize;
    }
    if (typeof userStyle.fontFamily !== 'undefined') {
      fontFamily = userStyle.fontFamily;
    }
  }
  return Object(_style_js__WEBPACK_IMPORTED_MODULE_3__["default"])(fontSize, fontFamily);
}

/**
 * Helper function to determine if specified variable is an object
 *
 * @param {any} item
 *
 * @returns {boolean}
 */
function isObject(item) {
  return (
    item &&
    typeof item === 'object' &&
    !Array.isArray(item) &&
    !(item instanceof HTMLElement) &&
    !(item instanceof CanvasRenderingContext2D) &&
    typeof item !== 'function'
  );
}

/**
 * Helper function which will merge objects recursively - creating brand new one - like clone
 *
 * @param {object} target
 * @params {object} sources
 *
 * @returns {object}
 */
function mergeDeep(target, ...sources) {
  if (!sources.length) {
    return target;
  }
  const source = sources.shift();
  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (typeof target[key] === 'undefined') {
          target[key] = {};
        }
        target[key] = mergeDeep(target[key], source[key]);
      } else if (Array.isArray(source[key])) {
        target[key] = [];
        for (let item of source[key]) {
          if (isObject(item)) {
            target[key].push(mergeDeep({}, item));
            continue;
          }
          target[key].push(item);
        }
      } else {
        target[key] = source[key];
      }
    }
  }
  return mergeDeep(target, ...sources);
}

/**
 * Detect if object or array is observable
 *
 * @param {object|array} obj
 *
 * @returns {boolean}
 */
function isObservable(obj) {
  return typeof obj === 'object' && obj.hasOwnProperty('__ob__');
}

/**
 * Same as above but with reactivity in mind
 *
 * @param {object} target
 * @params {object} sources
 *
 * @returns {object}
 */
function mergeDeepReactive(component, target, ...sources) {
  if (!sources.length) {
    return target;
  }
  const source = sources.shift();
  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (typeof target[key] === 'undefined') {
          component.$set(target, key, {});
        }
        mergeDeepReactive(component, target[key], source[key]);
      } else if (Array.isArray(source[key])) {
        component.$set(target, key, source[key]);
      } else if (typeof source[key] === 'function') {
        if (source[key].toString().indexOf('[native code]') === -1) {
          target[key] = source[key];
        }
      } else {
        component.$set(target, key, source[key]);
      }
    }
  }
  return mergeDeepReactive(component, target, ...sources);
}
/**
 * Check if objects or arrays are equal by comparing nested values
 *
 * @param {object|array} left
 * @param {object|array} right
 *
 * @returns {boolean}
 */
function notEqualDeep(left, right, cache = [], path = '') {
  if (typeof right !== typeof left) {
    return { left, right, what: path + '.typeof' };
  } else if (Array.isArray(left) && !Array.isArray(right)) {
    return { left, right, what: path + '.isArray' };
  } else if (Array.isArray(right) && !Array.isArray(left)) {
    return { left, right, what: path + '.isArray' };
  } else if (Array.isArray(left) && Array.isArray(right)) {
    if (left.length !== right.length) {
      return { left, right, what: path + '.length' };
    }
    let what;
    for (let index = 0, len = left.length; index < len; index++) {
      if ((what = notEqualDeep(left[index], right[index], cache, path + '.' + index))) {
        return what;
      }
    }
  } else if (isObject(left) && !isObject(right)) {
    return { left, right, what: path + '.isObject' };
  } else if (isObject(right) && !isObject(left)) {
    return { left, right, what: path + '.isObject' };
  } else if (isObject(left) && isObject(right)) {
    for (let key in left) {
      if (!left.hasOwnProperty(key) || !left.propertyIsEnumerable(key)) {
        continue;
      }
      if (!right.hasOwnProperty(key)) {
        return { left, right, what: path + '.' + key };
      }
      let what;
      if ((what = notEqualDeep(left[key], right[key], cache, path + '.' + key))) {
        return what;
      }
    }
  } else if (left !== right) {
    return { left, right, what: path + '. !==' };
  }
  return false;
}

/**
 * GanttElastic
 * Main vue component
 */
const GanttElastic = {
  name: 'GanttElastic',
  components: {
    MainView: _components_MainView_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  props: ['tasks', 'options', 'dynamicStyle'],
  provide() {
    const provider = {};
    const self = this;
    Object.defineProperty(provider, 'root', {
      enumerable: true,
      get: () => self
    });
    return provider;
  },
  data() {
    return {
      state: {
        tasks: [],
        options: {
          scrollBarHeight: 0,
          allVisibleTasksHeight: 0,
          outerHeight: 0,
          scroll: {
            left: 0,
            top: 0
          }
        },
        dynamicStyle: {},
        refs: {},
        tasksById: {},
        taskTree: {},
        ctx,
        emitTasksChanges: true, // some operations may pause emitting changes to parent component
        emitOptionsChanges: true, // some operations may pause emitting changes to parent component
        resizeObserver: null,
        unwatchTasks: null,
        unwatchOptions: null,
        unwatchStyle: null,
        unwatchOutputTasks: null,
        unwatchOutputOptions: null,
        unwatchOutputStyle: null
      }
    };
  },
  methods: {
    mergeDeep,
    mergeDeepReactive,

    /**
     * Calculate height of scrollbar in current browser
     *
     * @returns {number}
     */
    getScrollBarHeight() {
      const outer = document.createElement('div');
      outer.style.visibility = 'hidden';
      outer.style.height = '100px';
      outer.style.msOverflowStyle = 'scrollbar';
      document.body.appendChild(outer);
      var noScroll = outer.offsetHeight;
      outer.style.overflow = 'scroll';
      var inner = document.createElement('div');
      inner.style.height = '100%';
      outer.appendChild(inner);
      var withScroll = inner.offsetHeight;
      outer.parentNode.removeChild(outer);
      const height = noScroll - withScroll;
      this.style['chart-scroll-container--vertical']['margin-left'] = `-${height}px`;
      return (this.state.options.scrollBarHeight = height);
    },

    /**
     * Fill out empty task properties and make it reactive
     *
     * @param {array} tasks
     */
    fillTasks(tasks) {
      for (let task of tasks) {
        if (typeof task.x === 'undefined') {
          task.x = 0;
        }
        if (typeof task.y === 'undefined') {
          task.y = 0;
        }
        if (typeof task.width === 'undefined') {
          task.width = 0;
        }
        if (typeof task.height === 'undefined') {
          task.height = 0;
        }
        if (typeof task.mouseOver === 'undefined') {
          task.mouseOver = false;
        }
        if (typeof task.collapsed === 'undefined') {
          task.collapsed = false;
        }
        if (typeof task.dependentOn === 'undefined') {
          task.dependentOn = [];
        }
        if (typeof task.parentId === 'undefined') {
          task.parentId = null;
        }
        if (typeof task.style === 'undefined') {
          task.style = {};
        }
        if (typeof task.children === 'undefined') {
          task.children = [];
        }
        if (typeof task.allChildren === 'undefined') {
          task.allChildren = [];
        }
        if (typeof task.parents === 'undefined') {
          task.parents = [];
        }
        if (typeof task.parent === 'undefined') {
          task.parent = null;
        }
        if (typeof task.startTime === 'undefined') {
          task.startTime = dayjs__WEBPACK_IMPORTED_MODULE_1___default()(task.start).valueOf();
        }
        if (typeof task.endTime === 'undefined' && task.hasOwnProperty('end')) {
          task.endTime = dayjs__WEBPACK_IMPORTED_MODULE_1___default()(task.end).valueOf();
        } else if (typeof task.endTime === 'undefined' && task.hasOwnProperty('duration')) {
          task.endTime = task.startTime + task.duration;
        }
        if (typeof task.duration === 'undefined' && task.hasOwnProperty('endTime')) {
          task.duration = task.endTime - task.startTime;
        }
      }
      return tasks;
    },

    /**
     * Map tasks
     *
     * @param {Array} tasks
     * @param {Object} options
     */
    mapTasks(tasks, options) {
      for (let [index, task] of tasks.entries()) {
        tasks[index] = {
          ...task,
          id: task[options.taskMapping.id],
          start: task[options.taskMapping.start],
          label: task[options.taskMapping.label],
          duration: task[options.taskMapping.duration],
          progress: task[options.taskMapping.progress],
          type: task[options.taskMapping.type],
          style: task[options.taskMapping.style],
          collapsed: task[options.taskMapping.collapsed],
          showTaskList: task[options.taskMapping.showTaskList]
        };
      }
      return tasks;
    },

    /**
     * Initialize component
     */
    initialize(itsUpdate = '') {
      let options = mergeDeep({}, this.state.options, getOptions(this.options), this.options);
      let tasks = this.mapTasks(this.tasks, options);
      if (Object.keys(this.state.dynamicStyle).length === 0) {
        this.initializeStyle();
      }
      dayjs__WEBPACK_IMPORTED_MODULE_1___default.a.locale(options.locale, null, true);
      dayjs__WEBPACK_IMPORTED_MODULE_1___default.a.locale(options.locale.name);
      if (typeof options.taskList === 'undefined') {
        options.taskList = {};
      }
      options.taskList.columns = options.taskList.columns.map((column, index) => {
        column.thresholdPercent = 100;
        column.widthFromPercentage = 0;
        column.finalWidth = 0;
        if (typeof column.height === 'undefined') {
          column.height = 0;
        }
        if (typeof column.style === 'undefined') {
          column.style = {};
        }
        column._id = `${index}-${column.label}`;
        return column;
      });
      this.state.options = options;
      tasks = this.fillTasks(tasks);
      this.state.tasksById = this.resetTaskTree(tasks);
      this.state.taskTree = this.makeTaskTree(this.state.rootTask, tasks);
      this.state.tasks = this.state.taskTree.allChildren.map(childId => this.getTask(childId));
      this.calculateTaskListColumnsDimensions();
      this.state.options.scrollBarHeight = this.getScrollBarHeight();
      this.state.options.outerHeight = this.state.options.height + this.state.options.scrollBarHeight;
      this.globalOnResize();
    },

    /**
     * Initialize style
     */
    initializeStyle() {
      this.state.dynamicStyle = mergeDeep({}, prepareStyle(this.dynamicStyle), this.dynamicStyle);
    },

    /**
     * Get calendar rows outer height
     *
     * @returns {int}
     */
    getCalendarHeight() {
      return this.state.options.calendar.height + this.state.options.calendar.strokeWidth;
    },

    /**
     * Get maximal level of nested task children
     *
     * @returns {int}
     */
    getMaximalLevel() {
      let maximalLevel = 0;
      this.state.tasks.forEach(task => {
        if (task.parents.length > maximalLevel) {
          maximalLevel = task.parents.length;
        }
      });
      return maximalLevel - 1;
    },

    /**
     * Get maximal expander width - to calculate straight task list text
     *
     * @returns {int}
     */
    getMaximalExpanderWidth() {
      return (
        this.getMaximalLevel() * this.state.options.taskList.expander.padding +
        this.state.options.taskList.expander.margin
      );
    },

    /**
     * Synchronize scrollTop property when row height is changed
     */
    syncScrollTop() {
      if (
        this.state.refs.taskListItems &&
        this.state.refs.chartGraph.scrollTop !== this.state.refs.taskListItems.scrollTop
      ) {
        this.state.options.scroll.top = this.state.refs.taskListItems.scrollTop = this.state.refs.chartScrollContainerVertical.scrollTop = this.state.refs.chartGraph.scrollTop;
      }
    },

    /**
     * Calculate task list columns dimensions
     */
    calculateTaskListColumnsDimensions() {
      let final = 0;
      let percentage = 0;
      for (let column of this.state.options.taskList.columns) {
        if (column.expander) {
          column.widthFromPercentage =
            ((this.getMaximalExpanderWidth() + column.width) / 100) * this.state.options.taskList.percent;
        } else {
          column.widthFromPercentage = (column.width / 100) * this.state.options.taskList.percent;
        }
        percentage += column.widthFromPercentage;
        column.finalWidth = (column.thresholdPercent * column.widthFromPercentage) / 100;
        final += column.finalWidth;
        column.height = this.getTaskHeight() - this.style['grid-line-horizontal']['stroke-width'];
      }
      this.state.options.taskList.widthFromPercentage = percentage;
      this.state.options.taskList.finalWidth = final;
    },

    /**
     * Reset task tree - which is used to create tree like structure inside task list
     */
    resetTaskTree(tasks) {
      this.$set(this.state, 'rootTask', {
        id: null,
        label: 'root',
        children: [],
        allChildren: [],
        parents: [],
        parent: null,
        __root: true
      });
      const tasksById = {};
      for (let i = 0, len = tasks.length; i < len; i++) {
        let current = tasks[i];
        current.children = [];
        current.allChildren = [];
        current.parent = null;
        current.parents = [];
        tasksById[current.id] = current;
      }
      return tasksById;
    },

    /**
     * Make task tree, after reset - look above
     *
     * @param {object} task
     * @returns {object} tasks with children and parents
     */
    makeTaskTree(task, tasks) {
      for (let i = 0, len = tasks.length; i < len; i++) {
        let current = tasks[i];
        if (current.parentId === task.id) {
          if (task.parents.length) {
            task.parents.forEach(parent => current.parents.push(parent));
          }
          if (!task.propertyIsEnumerable('__root')) {
            current.parents.push(task.id);
            current.parent = task.id;
          } else {
            current.parents = [];
            current.parent = null;
          }
          current = this.makeTaskTree(current, tasks);
          task.allChildren.push(current.id);
          task.children.push(current.id);
          current.allChildren.forEach(childId => task.allChildren.push(childId));
        }
      }
      return task;
    },

    /**
     * Get task by id
     *
     * @param {any} taskId
     * @returns {object|null} task
     */
    getTask(taskId) {
      if (typeof this.state.tasksById[taskId] !== 'undefined') {
        return this.state.tasksById[taskId];
      }
      return null;
    },

    /**
     * Get children tasks for specified taskId
     *
     * @param {any} taskId
     * @returns {array} children
     */
    getChildren(taskId) {
      return this.state.tasks.filter(task => task.parent === taskId);
    },

    /**
     * Is task visible
     *
     * @param {Number|String|Task} task
     */
    isTaskVisible(task) {
      if (typeof task === 'number' || typeof task === 'string') {
        task = this.getTask(task);
      }
      for (let i = 0, len = task.parents.length; i < len; i++) {
        if (this.getTask(task.parents[i]).collapsed) {
          return false;
        }
      }
      return true;
    },

    /**
     * Get svg
     *
     * @returns {string} html svg image of gantt
     */
    getSVG() {
      return this.state.options.mainView.outerHTML;
    },

    /**
     * Get image
     *
     * @param {string} type image format
     * @returns {Promise} when resolved returns base64 image string of gantt
     */
    getImage(type = 'image/png') {
      return new Promise(resolve => {
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement('canvas');
          canvas.width = this.state.options.mainView.clientWidth;
          canvas.height = this.state.options.rowsHeight;
          canvas.getContext('2d').drawImage(img, 0, 0);
          resolve(canvas.toDataURL(type));
        };
        img.src = 'data:image/svg+xml,' + encodeURIComponent(this.getSVG());
      });
    },

    /**
     * Get gantt total height
     *
     * @returns {number}
     */
    getHeight(visibleTasks, outer = false) {
      let height =
        visibleTasks.length * (this.state.options.row.height + this.state.options.chart.grid.horizontal.gap * 2) +
        this.state.options.calendar.height +
        this.state.options.calendar.strokeWidth +
        this.state.options.calendar.gap;
      if (outer) {
        height += this.state.options.scrollBarHeight;
      }
      return height;
    },

    /**
     * Get one task height
     *
     * @returns {number}
     */
    getTaskHeight(withStroke = false) {
      if (withStroke) {
        return (
          this.state.options.row.height +
          this.state.options.chart.grid.horizontal.gap * 2 +
          this.style['grid-line-horizontal']['stroke-width']
        );
      }
      return this.state.options.row.height + this.state.options.chart.grid.horizontal.gap * 2;
    },

    /**
     * Get specified tasks height
     *
     * @returns {number}
     */
    getTasksHeight(visibleTasks) {
      return visibleTasks.length * this.getTaskHeight();
    },

    /**
     * Convert time (in milliseconds) to pixel offset inside chart
     *
     * @param {int} ms
     * @returns {number}
     */
    timeToPixelOffsetX(ms) {
      let x = ms - this.state.options.times.firstTime;
      if (x) {
        x = x / this.state.options.times.timePerPixel;
      }
      return x;
    },

    /**
     * Convert pixel offset inside chart to corresponding time offset in milliseconds
     *
     * @param {number} pixelOffsetX
     * @returns {int} milliseconds
     */
    pixelOffsetXToTime(pixelOffsetX) {
      let offset = pixelOffsetX + this.style['grid-line-vertical']['stroke-width'] / 2;
      return offset * this.state.options.times.timePerPixel + this.state.options.times.firstTime;
    },

    /**
     * Determine if element is inside current view port
     *
     * @param {number} x - element placement
     * @param {number} width - element width
     * @param {int} buffer - or threshold, if element is outside viewport but offset from view port is below this value return true
     * @returns {boolean}
     */
    isInsideViewPort(x, width, buffer = 5000) {
      return (
        (x + width + buffer >= this.state.options.scroll.chart.left &&
          x - buffer <= this.state.options.scroll.chart.right) ||
        (x - buffer <= this.state.options.scroll.chart.left &&
          x + width + buffer >= this.state.options.scroll.chart.right)
      );
    },

    /**
     * Chart scroll event handler
     *
     * @param {event} ev
     */
    onScrollChart(ev) {
      this._onScrollChart(
        this.state.refs.chartScrollContainerHorizontal.scrollLeft,
        this.state.refs.chartScrollContainerVertical.scrollTop
      );
    },

    /**
     * After same as above but with different arguments - normalized
     *
     * @param {number} left
     * @param {number} top
     */
    _onScrollChart(left, top) {
      if (this.state.options.scroll.chart.left === left && this.state.options.scroll.chart.top === top) {
        return;
      }
      const chartContainerWidth = this.state.refs.chartContainer.clientWidth;
      this.state.options.scroll.chart.left = left;
      this.state.options.scroll.chart.right = left + chartContainerWidth;
      this.state.options.scroll.chart.percent = (left / this.state.options.times.totalViewDurationPx) * 100;
      this.state.options.scroll.chart.top = top;
      this.state.options.scroll.chart.time = this.pixelOffsetXToTime(left);
      this.state.options.scroll.chart.timeCenter = this.pixelOffsetXToTime(left + chartContainerWidth / 2);
      this.state.options.scroll.chart.dateTime.left = dayjs__WEBPACK_IMPORTED_MODULE_1___default()(this.state.options.scroll.chart.time).valueOf();
      this.state.options.scroll.chart.dateTime.right = dayjs__WEBPACK_IMPORTED_MODULE_1___default()(
        this.pixelOffsetXToTime(left + this.state.refs.chart.clientWidth)
      ).valueOf();
      this.scrollTo(left, top);
    },

    /**
     * Scroll current chart to specified time (in milliseconds)
     *
     * @param {int} time
     */
    scrollToTime(time) {
      let pos = this.timeToPixelOffsetX(time);
      const chartContainerWidth = this.state.refs.chartContainer.clientWidth;
      pos = pos - chartContainerWidth / 2;
      if (pos > this.state.options.width) {
        pos = this.state.options.width - chartContainerWidth;
      }
      this.scrollTo(pos);
    },

    /**
     * Scroll chart or task list to specified pixel values
     *
     * @param {number|null} left
     * @param {number|null} top
     */
    scrollTo(left = null, top = null) {
      if (left !== null) {
        this.state.refs.chartCalendarContainer.scrollLeft = left;
        this.state.refs.chartGraphContainer.scrollLeft = left;
        this.state.refs.chartScrollContainerHorizontal.scrollLeft = left;
        this.state.options.scroll.left = left;
      }
      if (top !== null) {
        this.state.refs.chartScrollContainerVertical.scrollTop = top;
        this.state.refs.chartGraph.scrollTop = top;
        this.state.refs.taskListItems.scrollTop = top;
        this.state.options.scroll.top = top;
        this.syncScrollTop();
      }
    },

    /**
     * After some actions like time zoom change we need to recompensate scroll position
     * so as a result everything will be in same place
     */
    fixScrollPos() {
      this.scrollToTime(this.state.options.scroll.chart.timeCenter);
    },

    /**
     * Mouse wheel event handler
     */
    onWheelChart(ev) {
      if (!ev.shiftKey && ev.deltaX === 0) {
        let top = this.state.options.scroll.top + ev.deltaY;
        const chartClientHeight = this.state.options.rowsHeight;
        const scrollHeight = this.state.refs.chartGraph.scrollHeight - chartClientHeight;
        if (top < 0) {
          top = 0;
        } else if (top > scrollHeight) {
          top = scrollHeight;
        }
        this.scrollTo(null, top);
      } else if (ev.shiftKey && ev.deltaX === 0) {
        let left = this.state.options.scroll.left + ev.deltaY;
        const chartClientWidth = this.state.refs.chartScrollContainerHorizontal.clientWidth;
        const scrollWidth = this.state.refs.chartScrollContainerHorizontal.scrollWidth - chartClientWidth;
        if (left < 0) {
          left = 0;
        } else if (left > scrollWidth) {
          left = scrollWidth;
        }
        this.scrollTo(left);
      } else {
        let left = this.state.options.scroll.left + ev.deltaX;
        const chartClientWidth = this.state.refs.chartScrollContainerHorizontal.clientWidth;
        const scrollWidth = this.state.refs.chartScrollContainerHorizontal.scrollWidth - chartClientWidth;
        if (left < 0) {
          left = 0;
        } else if (left > scrollWidth) {
          left = scrollWidth;
        }
        this.scrollTo(left);
      }
    },

    /**
     * Time zoom change event handler
     */
    onTimeZoomChange(timeZoom) {
      this.state.options.times.timeZoom = timeZoom;
      this.recalculateTimes();
      this.calculateSteps();
      this.fixScrollPos();
    },

    /**
     * Row height change event handler
     */
    onRowHeightChange(height) {
      this.state.options.row.height = height;
      this.calculateTaskListColumnsDimensions();
      this.syncScrollTop();
    },

    /**
     * Scope change event handler
     */
    onScopeChange(value) {
      this.state.options.scope.before = value;
      this.state.options.scope.after = value;
      this.initTimes();
      this.calculateSteps();
      this.computeCalendarWidths();
      this.fixScrollPos();
    },

    /**
     * Task list width change event handler
     */
    onTaskListWidthChange(value) {
      this.state.options.taskList.percent = value;
      this.calculateTaskListColumnsDimensions();
      this.fixScrollPos();
    },

    /**
     * Task list column width change event handler
     */
    onTaskListColumnWidthChange() {
      this.calculateTaskListColumnsDimensions();
      this.fixScrollPos();
    },

    /**
     * Listen to specified event names
     */
    initializeEvents() {
      this.$on('chart-scroll-horizontal', this.onScrollChart);
      this.$on('chart-scroll-vertical', this.onScrollChart);
      this.$on('chart-wheel', this.onWheelChart);
      this.$on('times-timeZoom-change', this.onTimeZoomChange);
      this.$on('row-height-change', this.onRowHeightChange);
      this.$on('scope-change', this.onScopeChange);
      this.$on('taskList-width-change', this.onTaskListWidthChange);
      this.$on('taskList-column-width-change', this.onTaskListColumnWidthChange);
    },

    /**
     * When some action was performed (scale change for example) - recalculate time variables
     */
    recalculateTimes() {
      let max = this.state.options.times.timeScale * 60;
      let min = this.state.options.times.timeScale;
      let steps = max / min;
      let percent = this.state.options.times.timeZoom / 100;
      this.state.options.times.timePerPixel =
        this.state.options.times.timeScale * steps * percent + Math.pow(2, this.state.options.times.timeZoom);
      this.state.options.times.totalViewDurationMs = dayjs__WEBPACK_IMPORTED_MODULE_1___default()(this.state.options.times.lastTime).diff(
        this.state.options.times.firstTime,
        'milliseconds'
      );
      this.state.options.times.totalViewDurationPx =
        this.state.options.times.totalViewDurationMs / this.state.options.times.timePerPixel;
      this.state.options.width =
        this.state.options.times.totalViewDurationPx + this.style['grid-line-vertical']['stroke-width'];
    },

    /**
     * Initialize time variables
     */
    initTimes() {
      this.state.options.times.firstTime = dayjs__WEBPACK_IMPORTED_MODULE_1___default()(this.state.options.times.firstTaskTime)
        .locale(this.state.options.locale.name)
        .startOf('day')
        .subtract(this.state.options.scope.before, 'days')
        .startOf('day')
        .valueOf();
      this.state.options.times.lastTime = dayjs__WEBPACK_IMPORTED_MODULE_1___default()(this.state.options.times.lastTaskTime)
        .locale(this.state.options.locale.name)
        .endOf('day')
        .add(this.state.options.scope.after, 'days')
        .endOf('day')
        .valueOf();
      this.recalculateTimes();
    },

    /**
     * Calculate steps
     * Steps are days by default
     * Each step contain information about time offset and pixel offset of this time inside gantt chart
     */
    calculateSteps() {
      const steps = [];
      const lastMs = dayjs__WEBPACK_IMPORTED_MODULE_1___default()(this.state.options.times.lastTime).valueOf();
      const currentDate = dayjs__WEBPACK_IMPORTED_MODULE_1___default()(this.state.options.times.firstTime);
      steps.push({
        time: currentDate.valueOf(),
        offset: {
          ms: 0,
          px: 0
        }
      });
      for (
        let currentDate = dayjs__WEBPACK_IMPORTED_MODULE_1___default()(this.state.options.times.firstTime)
          .add(1, this.state.options.times.stepDuration)
          .startOf('day');
        currentDate.valueOf() <= lastMs;
        currentDate = currentDate.add(1, this.state.options.times.stepDuration).startOf('day')
      ) {
        const offsetMs = currentDate.diff(this.state.options.times.firstTime, 'milliseconds');
        const offsetPx = offsetMs / this.state.options.times.timePerPixel;
        const step = {
          time: currentDate.valueOf(),
          offset: {
            ms: offsetMs,
            px: offsetPx
          }
        };
        const previousStep = steps[steps.length - 1];
        previousStep.width = {
          ms: offsetMs - previousStep.offset.ms,
          px: offsetPx - previousStep.offset.px
        };
        steps.push(step);
      }
      const lastStep = steps[steps.length - 1];
      lastStep.width = {
        ms: this.state.options.times.totalViewDurationMs - lastStep.offset.ms,
        px: this.state.options.times.totalViewDurationPx - lastStep.offset.px
      };
      this.state.options.times.steps = steps;
    },

    /**
     * Calculate calendar widths - when scale was changed for example
     */
    computeCalendarWidths() {
      this.computeDayWidths();
      this.computeHourWidths();
      this.computeMonthWidths();
    },

    /**
     * Compute width of calendar hours column widths basing on text widths
     */
    computeHourWidths() {
      const style = { ...this.style['calendar-row-text'], ...this.style['calendar-row-text--hour'] };
      this.state.ctx.font = style['font-size'] + ' ' + style['font-family'];
      const localeName = this.state.options.locale.name;
      let currentDate = dayjs__WEBPACK_IMPORTED_MODULE_1___default()('2018-01-01T00:00:00').locale(localeName); // any date will be good for hours
      let maxWidths = this.state.options.calendar.hour.maxWidths;
      if (maxWidths.length) {
        return;
      }
      for (let formatName in this.state.options.calendar.hour.format) {
        maxWidths[formatName] = 0;
      }
      for (let hour = 0; hour < 24; hour++) {
        let widths = { hour };
        for (let formatName in this.state.options.calendar.hour.format) {
          const hourFormatted = this.state.options.calendar.hour.format[formatName](currentDate);
          this.state.options.calendar.hour.formatted[formatName].push(hourFormatted);
          widths[formatName] = this.state.ctx.measureText(hourFormatted).width;
        }
        this.state.options.calendar.hour.widths.push(widths);
        for (let formatName in this.state.options.calendar.hour.format) {
          if (widths[formatName] > maxWidths[formatName]) {
            maxWidths[formatName] = widths[formatName];
          }
        }
        currentDate = currentDate.add(1, 'hour');
      }
    },

    /**
     * Compute calendar days column widths basing on text widths
     */
    computeDayWidths() {
      const style = { ...this.style['calendar-row-text'], ...this.style['calendar-row-text--day'] };
      this.state.ctx.font = style['font-size'] + ' ' + style['font-family'];
      const localeName = this.state.options.locale.name;
      let currentDate = dayjs__WEBPACK_IMPORTED_MODULE_1___default()(this.state.options.times.steps[0].time).locale(localeName);
      let maxWidths = this.state.options.calendar.day.maxWidths;
      this.state.options.calendar.day.widths = [];
      Object.keys(this.state.options.calendar.day.format).forEach(formatName => {
        maxWidths[formatName] = 0;
      });
      for (let day = 0, daysLen = this.state.options.times.steps.length; day < daysLen; day++) {
        const widths = {
          day
        };
        Object.keys(this.state.options.calendar.day.format).forEach(formatName => {
          widths[formatName] = this.state.ctx.measureText(
            this.state.options.calendar.day.format[formatName](currentDate)
          ).width;
        });
        this.state.options.calendar.day.widths.push(widths);
        Object.keys(this.state.options.calendar.day.format).forEach(formatName => {
          if (widths[formatName] > maxWidths[formatName]) {
            maxWidths[formatName] = widths[formatName];
          }
        });
        currentDate = currentDate.add(1, 'day');
      }
    },

    /**
     * Months count
     *
     * @description Returns number of different months in specified time range
     *
     * @param {number} fromTime - date in ms
     * @param {number} toTime - date in ms
     *
     * @returns {number} different months count
     */
    monthsCount(fromTime, toTime) {
      if (fromTime > toTime) {
        return 0;
      }
      let currentMonth = dayjs__WEBPACK_IMPORTED_MODULE_1___default()(fromTime);
      let previousMonth = currentMonth.clone();
      let monthsCount = 1;
      while (currentMonth.valueOf() <= toTime) {
        currentMonth = currentMonth.add(1, 'day');
        if (previousMonth.month() !== currentMonth.month()) {
          monthsCount++;
        }
        previousMonth = currentMonth.clone();
      }
      return monthsCount;
    },

    /**
     * Compute month calendar columns widths basing on text widths
     */
    computeMonthWidths() {
      const style = { ...this.style['calendar-row-text'], ...this.style['calendar-row-text--month'] };
      this.state.ctx.font = style['font-size'] + ' ' + style['font-family'];
      let maxWidths = this.state.options.calendar.month.maxWidths;
      this.state.options.calendar.month.widths = [];
      Object.keys(this.state.options.calendar.month.format).forEach(formatName => {
        maxWidths[formatName] = 0;
      });
      const localeName = this.state.options.locale.name;
      let currentDate = dayjs__WEBPACK_IMPORTED_MODULE_1___default()(this.state.options.times.firstTime).locale(localeName);
      const monthsCount = this.monthsCount(this.state.options.times.firstTime, this.state.options.times.lastTime);
      for (let month = 0; month < monthsCount; month++) {
        const widths = {
          month
        };
        Object.keys(this.state.options.calendar.month.format).forEach(formatName => {
          widths[formatName] = this.state.ctx.measureText(
            this.state.options.calendar.month.format[formatName](currentDate)
          ).width;
        });
        this.state.options.calendar.month.widths.push(widths);
        Object.keys(this.state.options.calendar.month.format).forEach(formatName => {
          if (widths[formatName] > maxWidths[formatName]) {
            maxWidths[formatName] = widths[formatName];
          }
        });
        currentDate = currentDate.add(1, 'month');
      }
    },

    /**
     * Prepare time and date variables for gantt
     */
    prepareDates() {
      let firstTaskTime = Number.MAX_SAFE_INTEGER;
      let lastTaskTime = 0;
      for (let index = 0, len = this.state.tasks.length; index < len; index++) {
        let task = this.state.tasks[index];
        if (task.startTime < firstTaskTime) {
          firstTaskTime = task.startTime;
        }
        if (task.startTime + task.duration > lastTaskTime) {
          lastTaskTime = task.startTime + task.duration;
        }
      }
      this.state.options.times.firstTaskTime = firstTaskTime;
      this.state.options.times.lastTaskTime = lastTaskTime;
      this.state.options.times.firstTime = dayjs__WEBPACK_IMPORTED_MODULE_1___default()(firstTaskTime)
        .locale(this.state.options.locale.name)
        .startOf('day')
        .subtract(this.state.options.scope.before, 'days')
        .startOf('day')
        .valueOf();
      this.state.options.times.lastTime = dayjs__WEBPACK_IMPORTED_MODULE_1___default()(lastTaskTime)
        .locale(this.state.options.locale.name)
        .endOf('day')
        .add(this.state.options.scope.after, 'days')
        .endOf('day')
        .valueOf();
    },

    /**
     * Setup and calculate everything
     */
    setup(itsUpdate = '') {
      this.initialize(itsUpdate);
      this.prepareDates();
      this.initTimes();
      this.calculateSteps();
      this.computeCalendarWidths();
      this.state.options.taskList.width = this.state.options.taskList.columns.reduce(
        (prev, current) => {
          return { width: prev.width + current.width };
        },
        { width: 0 }
      ).width;
    },

    /**
     * Global resize event (from window.addEventListener)
     */
    globalOnResize() {
      if (typeof this.$el === 'undefined' || !this.$el) {
        return;
      }
      this.state.options.clientWidth = this.$el.clientWidth;
      if (
        this.state.options.taskList.widthFromPercentage >
        (this.state.options.clientWidth / 100) * this.state.options.taskList.widthThreshold
      ) {
        const diff =
          this.state.options.taskList.widthFromPercentage -
          (this.state.options.clientWidth / 100) * this.state.options.taskList.widthThreshold;
        let diffPercent = 100 - (diff / this.state.options.taskList.widthFromPercentage) * 100;
        if (diffPercent < 0) {
          diffPercent = 0;
        }
        this.state.options.taskList.columns.forEach(column => {
          column.thresholdPercent = diffPercent;
        });
      } else {
        this.state.options.taskList.columns.forEach(column => {
          column.thresholdPercent = 100;
        });
      }
      this.calculateTaskListColumnsDimensions();
      this.$emit('calendar-recalculate');
      this.syncScrollTop();
    }
  },

  computed: {
    /**
     * Get visible tasks
     * Very important method which will bring us only those tasks that are visible inside gantt chart
     * For example when task is collapsed - children of this task are not visible - we should not render them
     */
    visibleTasks() {
      const visibleTasks = this.state.tasks.filter(task => this.isTaskVisible(task));
      const maxRows = visibleTasks.slice(0, this.state.options.maxRows);
      this.state.options.rowsHeight = this.getTasksHeight(maxRows);
      let heightCompensation = 0;
      if (this.state.options.maxHeight && this.state.options.rowsHeight > this.state.options.maxHeight) {
        heightCompensation = this.state.options.rowsHeight - this.state.options.maxHeight;
        this.state.options.rowsHeight = this.state.options.maxHeight;
      }
      this.state.options.height = this.getHeight(maxRows) - heightCompensation;
      this.state.options.allVisibleTasksHeight = this.getTasksHeight(visibleTasks);
      this.state.options.outerHeight = this.getHeight(maxRows, true) - heightCompensation;
      let len = visibleTasks.length;
      for (let index = 0; index < len; index++) {
        let task = visibleTasks[index];
        task.width =
          task.duration / this.state.options.times.timePerPixel - this.style['grid-line-vertical']['stroke-width'];
        if (task.width < 0) {
          task.width = 0;
        }
        task.height = this.state.options.row.height;
        task.x = this.timeToPixelOffsetX(task.startTime);
        /* Add multiple displays in one row  */
        // let realIndex = index;
        // if (task.showTaskList === false) {
        //   const indx = visibleTasks
        //     .filter(v => v.showTaskList !== false)
        //     .map(v => v.id)
        //     .indexOf(task.parentId);

        //   realIndex = indx;
        // } else {
        //   const indx = visibleTasks.slice(0, index).filter(v => v.showTaskList === false).length;

        //   realIndex = index - indx;
        // }
        task.y =
          (this.state.options.row.height + this.state.options.chart.grid.horizontal.gap * 2) * index +
          this.state.options.chart.grid.horizontal.gap;
      }
      return visibleTasks;
    },

    /**
     * Style shortcut
     */
    style() {
      return this.state.dynamicStyle;
    },

    /**
     * Get columns and compute dimensions on the fly
     */
    getTaskListColumns() {
      this.calculateTaskListColumnsDimensions();
      return this.state.options.taskList.columns.filter(v => !v.fixed);
    },

    /**
     * Tasks used for communicate with parent component
     */
    outputTasks() {
      return this.state.tasks;
    },

    /**
     * Options used to communicate with parent component
     */
    outputOptions() {
      return this.state.options;
    }
  },

  /**
   * Watch tasks after gantt instance is created and react when we have new kids on the block
   */
  created() {
    this.initializeEvents();
    this.setup();
    this.state.unwatchTasks = this.$watch(
      'tasks',
      tasks => {
        const notEqual = notEqualDeep(tasks, this.outputTasks);
        if (notEqual) {
          this.setup('tasks');
        }
      },
      { deep: true }
    );
    this.state.unwatchOptions = this.$watch(
      'options',
      opts => {
        const notEqual = notEqualDeep(opts, this.outputOptions);
        if (notEqual) {
          this.setup('options');
        }
      },
      { deep: true }
    );
    this.state.unwatchStyle = this.$watch(
      'dynamicStyle',
      style => {
        const notEqual = notEqualDeep(style, this.dynamicStyle);
        if (notEqual) {
          this.initializeStyle();
        }
      },
      { deep: true, immediate: true }
    );

    this.state.unwatchOutputTasks = this.$watch(
      'outputTasks',
      tasks => {
        this.$emit(
          'tasks-changed',
          tasks.map(task => task)
        );
      },
      { deep: true }
    );
    this.state.unwatchOutputOptions = this.$watch(
      'outputOptions',
      options => {
        this.$emit('options-changed', mergeDeep({}, options));
      },
      { deep: true }
    );
    this.state.unwatchOutputStyle = this.$watch(
      'style',
      style => {
        this.$emit('dynamic-style-changed', mergeDeep({}, style));
      },
      { deep: true }
    );

    this.$root.$emit('gantt-elastic-created', this);
    this.$emit('created', this);
  },

  /**
   * Emit before-mount event
   */
  beforeMount() {
    this.$emit('before-mount', this);
  },

  /**
   * Emit ready/mounted events and deliver this gantt instance to outside world when needed
   */
  mounted() {
    this.state.options.clientWidth = this.$el.clientWidth;
    this.state.resizeObserver = new resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_4__["default"]((entries, observer) => {
      this.globalOnResize();
    });
    this.state.resizeObserver.observe(this.$el.parentNode);
    this.globalOnResize();
    this.$emit('ready', this);
    this.$root.$emit('gantt-elastic-mounted', this);
    this.$emit('mounted', this);
    this.$root.$emit('gantt-elastic-ready', this);
  },

  /**
   * Emit event when data was changed and before update (you can cleanup dom events here for example)
   */
  beforeUpdate() {
    this.$emit('before-update');
  },

  /**
   * Emit event when gantt-elastic view was updated
   */
  updated() {
    this.$nextTick(() => {
      this.$emit('updated');
    });
  },

  /**
   * Before destroy event - clean up
   */
  beforeDestroy() {
    this.state.resizeObserver.unobserve(this.$el.parentNode);
    this.state.unwatchTasks();
    this.state.unwatchOptions();
    this.state.unwatchStyle();
    this.state.unwatchOutputTasks();
    this.state.unwatchOutputOptions();
    this.state.unwatchOutputStyle();
    this.$emit('before-destroy');
  },

  /**
   * Emit event after gantt-elastic was destroyed
   */
  destroyed() {
    this.$emit('destroyed');
  }
};
/* harmony default export */ __webpack_exports__["default"] = (GanttElastic);


/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/components/Calendar/Calendar.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/components/Calendar/Calendar.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CalendarRow_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CalendarRow.vue */ "./src/components/Calendar/CalendarRow.vue");




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Calendar',
  components: {
    CalendarRow: _CalendarRow_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  inject: ['root'],
  data() {
    return {};
  },

  methods: {
    /**
     * How many hours will fit?
     *
     * @returns {object}
     */
    howManyHoursFit(dayIndex) {
      const stroke = 1;
      const additionalSpace = stroke + 2;
      let fullCellWidth = this.root.state.options.times.steps[dayIndex].width.px;
      let formatNames = Object.keys(this.root.state.options.calendar.hour.format);
      for (let hours = 24; hours > 1; hours = Math.ceil(hours / 2)) {
        for (let formatName of formatNames) {
          if (
            (this.root.state.options.calendar.hour.maxWidths[formatName] + additionalSpace) * hours <= fullCellWidth &&
            hours > 1
          ) {
            return {
              count: hours,
              type: formatName
            };
          }
        }
      }
      return {
        count: 0,
        type: ''
      };
    },

    /**
     * How many days will fit?
     *
     * @returns {object}
     */
    howManyDaysFit() {
      const stroke = 1;
      const additionalSpace = stroke + 2;
      let fullWidth = this.root.state.options.width;
      let formatNames = Object.keys(this.root.state.options.calendar.day.format);
      for (let days = this.root.state.options.times.steps.length; days > 1; days = Math.ceil(days / 2)) {
        for (let formatName of formatNames) {
          if (
            (this.root.state.options.calendar.day.maxWidths[formatName] + additionalSpace) * days <= fullWidth &&
            days > 1
          ) {
            return {
              count: days,
              type: formatName
            };
          }
        }
      }
      return {
        count: 0,
        type: ''
      };
    },

    /**
     * How many months will fit?
     *
     * @returns {object}
     */
    howManyMonthsFit() {
      const stroke = 1;
      const additionalSpace = stroke + 2;
      let fullWidth = this.root.state.options.width;
      let formatNames = Object.keys(this.root.state.options.calendar.month.format);
      let currentMonth = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(this.root.state.options.times.firstTime);
      let previousMonth = currentMonth.clone();
      const lastTime = this.root.state.options.times.lastTime;
      let monthsCount = this.root.monthsCount(
        this.root.state.options.times.firstTime,
        this.root.state.options.times.lastTime
      );
      if (monthsCount === 1) {
        for (let formatName of formatNames) {
          if (this.root.state.options.calendar.month.maxWidths[formatName] + additionalSpace <= fullWidth) {
            return {
              count: 1,
              type: formatName
            };
          }
        }
      }
      for (let months = monthsCount; months > 1; months = Math.ceil(months / 2)) {
        for (let formatName of formatNames) {
          if (
            (this.root.state.options.calendar.month.maxWidths[formatName] + additionalSpace) * months <= fullWidth &&
            months > 1
          ) {
            return {
              count: months,
              type: formatName
            };
          }
        }
      }
      return {
        count: 0,
        type: formatNames[0]
      };
    },

    /**
     * Generate hours
     *
     * @returns {array}
     */
    generateHours() {
      let allHours = [];
      if (!this.root.state.options.calendar.hour.display) {
        return allHours;
      }
      const steps = this.root.state.options.times.steps;
      const localeName = this.root.state.options.locale.name;
      for (let hourIndex = 0, len = steps.length; hourIndex < len; hourIndex++) {
        const hoursCount = this.howManyHoursFit(hourIndex);
        if (hoursCount.count === 0) {
          continue;
        }
        const hours = { key: hourIndex + 'step', children: [] };
        const hourStep = 24 / hoursCount.count;
        const hourWidthPx = steps[hourIndex].width.px / hoursCount.count;
        for (let i = 0, len = hoursCount.count; i < len; i++) {
          const hour = i * hourStep;
          let index = hourIndex;
          if (hourIndex > 0) {
            index = hourIndex - Math.floor(hourIndex / 24) * 24;
          }
          let textWidth = 0;
          if (typeof this.root.state.options.calendar.hour.widths[index] !== 'undefined') {
            textWidth = this.root.state.options.calendar.hour.widths[index][hoursCount.type];
          }
          let x = steps[hourIndex].offset.px + hourWidthPx * i;
          hours.children.push({
            index: hourIndex,
            key: 'h' + i,
            x,
            y: this.root.state.options.calendar.day.height + this.root.state.options.calendar.month.height,
            width: hourWidthPx,
            textWidth,
            height: this.root.state.options.calendar.hour.height,
            label: this.root.state.options.calendar.hour.formatted[hoursCount.type][hour]
          });
        }
        allHours.push(hours);
      }
      return allHours;
    },

    /**
     * Generate days
     *
     * @returns {array}
     */
    generateDays() {
      let days = [];
      if (!this.root.state.options.calendar.day.display) {
        return days;
      }
      const daysCount = this.howManyDaysFit();
      if (daysCount.count === 0) {
        return days;
      }
      const steps = this.root.state.options.times.steps;
      const localeName = this.root.state.options.locale.name;
      const dayStep = Math.ceil(steps.length / daysCount.count);
      for (let dayIndex = 0, len = steps.length; dayIndex < len; dayIndex += dayStep) {
        let dayWidthPx = 0;
        // day could be shorter (daylight saving time) so join widths and divide
        for (let currentStep = 0; currentStep < dayStep; currentStep++) {
          if (typeof steps[dayIndex + currentStep] !== 'undefined') {
            dayWidthPx += steps[dayIndex + currentStep].width.px;
          }
        }
        const date = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(steps[dayIndex].time);
        let textWidth = 0;
        if (typeof this.root.state.options.calendar.day.widths[dayIndex] !== 'undefined') {
          textWidth = this.root.state.options.calendar.day.widths[dayIndex][daysCount.type];
        }
        let x = steps[dayIndex].offset.px;
        days.push({
          index: dayIndex,
          key: steps[dayIndex].time + 'd',
          x,
          y: this.root.state.options.calendar.month.height,
          width: dayWidthPx,
          textWidth,
          height: this.root.state.options.calendar.day.height,
          label: this.root.state.options.calendar.day.format[daysCount.type](date.locale(localeName))
        });
      }
      return days.map(item => ({
        key: item.key,
        children: [item]
      }));
    },

    /**
     * Generate months
     *
     * @returns {array}
     */
    generateMonths() {
      let months = [];
      if (!this.root.state.options.calendar.month.display) {
        return months;
      }
      const monthsCount = this.howManyMonthsFit();
      if (monthsCount.count === 0) {
        return months;
      }
      const steps = this.root.state.options.times.steps;
      const localeName = this.root.state.options.locale.name;
      let formatNames = Object.keys(this.root.state.options.calendar.month.format);
      let currentDate = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(this.root.state.options.times.firstTime);
      for (let monthIndex = 0; monthIndex < monthsCount.count; monthIndex++) {
        let monthWidth = 0;
        let monthOffset = Number.MAX_SAFE_INTEGER;
        let finalDate = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(currentDate)
          .add(1, 'month')
          .startOf('month');
        if (finalDate.valueOf() > this.root.state.options.times.lastTime) {
          finalDate = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(this.root.state.options.times.lastTime);
        }
        // we must find first and last step to get the offsets / widths
        for (let step = 0, len = this.root.state.options.times.steps.length; step < len; step++) {
          let currentStep = this.root.state.options.times.steps[step];
          if (currentStep.time >= currentDate.valueOf() && currentStep.time < finalDate.valueOf()) {
            monthWidth += currentStep.width.px;
            if (currentStep.offset.px < monthOffset) {
              monthOffset = currentStep.offset.px;
            }
          }
        }
        let label = '';
        let choosenFormatName;
        for (let formatName of formatNames) {
          if (this.root.state.options.calendar.month.maxWidths[formatName] + 2 <= monthWidth) {
            label = this.root.state.options.calendar.month.format[formatName](currentDate.locale(localeName));
            choosenFormatName = formatName;
          }
        }
        let textWidth = 0;
        if (typeof this.root.state.options.calendar.month.widths[monthIndex] !== 'undefined') {
          textWidth = this.root.state.options.calendar.month.widths[monthIndex][choosenFormatName];
        }
        let x = monthOffset;
        months.push({
          index: monthIndex,
          key: monthIndex + 'm',
          x,
          y: 0,
          width: monthWidth,
          textWidth,
          choosenFormatName,
          height: this.root.state.options.calendar.month.height,
          label
        });
        currentDate = currentDate.add(1, 'month').startOf('month');
        if (currentDate.valueOf() > this.root.state.options.times.lastTime) {
          currentDate = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(this.root.state.options.times.lastTime);
        }
      }
      return months.map(item => ({
        key: item.key,
        children: [item]
      }));
    },

    /**
     * Sum all calendar rows height and return result
     *
     * @returns {int}
     */
    calculateCalendarDimensions({ hours, days, months }) {
      let height = 0;
      if (this.root.state.options.calendar.hour.display && hours.length > 0) {
        height += this.root.state.options.calendar.hour.height;
      }
      if (this.root.state.options.calendar.day.display && days.length > 0) {
        height += this.root.state.options.calendar.day.height;
      }
      if (this.root.state.options.calendar.month.display && months.length > 0) {
        height += this.root.state.options.calendar.month.height;
      }
      this.root.state.options.calendar.height = height;
    }
  },

  computed: {
    dates() {
      const hours = this.generateHours();
      const days = this.generateDays();
      const months = this.generateMonths();
      const allDates = { hours, days, months };
      this.calculateCalendarDimensions(allDates);
      return allDates;
    }
  }
});


/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/components/Calendar/CalendarRow.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/components/Calendar/CalendarRow.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'CalendarRow',
  inject: ['root'],
  props: ['items', 'which'],
  data() {
    return {};
  },
  methods: {
    /**
     * Get x position
     *
     * @returns {number}
     */
    getTextX(item) {
      let x = item.x + item.width / 2 - item.textWidth / 2;
      if (this.which === 'month' && this.root.isInsideViewPort(item.x, item.width, 0)) {
        let scrollWidth = this.root.state.options.scroll.chart.right - this.root.state.options.scroll.chart.left;
        x = this.root.state.options.scroll.chart.left + scrollWidth / 2 - item.textWidth / 2 + 2;
        if (x + item.textWidth + 2 > item.x + item.width) {
          x = item.x + item.width - item.textWidth - 2;
        } else if (x < item.x) {
          x = item.x + 2;
        }
      }
      return x - item.x;
    }
  },
  computed: {
    rowStyle() {
      return { ...this.root.style['calendar-row'], ...this.root.style['calendar-row--' + this.which] };
    },
    rectStyle() {
      return { ...this.root.style['calendar-row-rect'], ...this.root.style['calendar-row-rect--' + this.which] };
    },
    rectChildStyle() {
      const basicStyle = {
        ...this.root.style['calendar-row-rect-child'],
        ...this.root.style['calendar-row-rect-child--' + this.which]
      };
      const style = [];
      for (let item of this.items) {
        const childrenStyle = [];
        for (let child of item.children) {
          childrenStyle.push({
            ...basicStyle,
            width: child.width + 'px',
            height: child.height + 'px'
          });
        }
        style.push(childrenStyle);
      }
      return style;
    },
    textStyle() {
      const basicStyle = {
        ...this.root.style['calendar-row-text'],
        ...this.root.style['calendar-row-text--' + this.which]
      };
      return child => {
        const style = { ...basicStyle };
        if (this.which === 'month') {
          style.left = this.getTextX(child) + 'px';
        }
        return style;
      };
    }
  }
});


/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/components/Chart/Chart.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chart/Chart.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Grid_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Grid.vue */ "./src/components/Chart/Grid.vue");
/* harmony import */ var _DaysHighlight_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DaysHighlight.vue */ "./src/components/Chart/DaysHighlight.vue");
/* harmony import */ var _Calendar_Calendar_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Calendar/Calendar.vue */ "./src/components/Calendar/Calendar.vue");
/* harmony import */ var _DependencyLines_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DependencyLines.vue */ "./src/components/Chart/DependencyLines.vue");
/* harmony import */ var _Row_Task_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Row/Task.vue */ "./src/components/Chart/Row/Task.vue");
/* harmony import */ var _Row_Milestone_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Row/Milestone.vue */ "./src/components/Chart/Row/Milestone.vue");
/* harmony import */ var _Row_Project_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Row/Project.vue */ "./src/components/Chart/Row/Project.vue");








/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Chart',
  components: {
    Grid: _Grid_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    DependencyLines: _DependencyLines_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    Calendar: _Calendar_Calendar_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    Task: _Row_Task_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    Milestone: _Row_Milestone_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    Project: _Row_Project_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    DaysHighlight: _DaysHighlight_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  inject: ['root'],
  data() {
    return {
      moving: false
    };
  },
  /**
   * Mounted
   */
  mounted() {
    this.root.state.refs.chart = this.$refs.chart;
    this.root.state.refs.chartCalendarContainer = this.$refs.chartCalendarContainer;
    this.root.state.refs.chartGraphContainer = this.$refs.chartGraphContainer;
    this.root.state.refs.chartGraph = this.$refs.chartGraph;
    this.root.state.refs.chartGraphSvg = this.$refs.chartGraphSvg;
  },

  computed: {
    /**
     * Get hidden rows height
     *
     * @returns {number}
     */
    hiddenRowsHeight() {
      let h = 0;
      this.root.visibleTasks.forEach(v => {
        if (v.showTaskList === false) {
          h += v.height + 14 || 0;
        }
      });
      return h;
    },
    /**
     * Get view box
     *
     * @returns {string}
     */
    getViewBox() {
      return `0 0 ${this.root.state.options.width} ${this.root.state.options.allVisibleTasksHeight -
        this.hiddenRowsHeight}`;
    }
  }
});


/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/components/Chart/DaysHighlight.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chart/DaysHighlight.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'DaysHighlight',
  inject: ['root'],
  data() {
    return {};
  },
  methods: {
    /**
     * Get key
     *
     * @param {object} day
     * @returns {string} key ideintifier for loop
     */
    getKey(day) {
      return dayjs__WEBPACK_IMPORTED_MODULE_0___default()(day.time).format('YYYY-MM-DD');
    }
  },
  computed: {
    /**
     * Get working days
     *
     * @returns {array}
     */
    workingDays() {
      return this.root.state.options.times.steps.filter(step => {
        return this.root.state.options.calendar.workingDays.indexOf(dayjs__WEBPACK_IMPORTED_MODULE_0___default()(step.time).day()) === -1;
      });
    },

    /**
     * Show working days?
     *
     * @returns {bool}
     */
    showWorkingDays() {
      const calendar = this.root.state.options.calendar;
      if (
        typeof calendar.workingDays !== 'undefined' &&
        Array.isArray(calendar.workingDays) &&
        calendar.workingDays.length
      ) {
        return true;
      }
      return false;
    }
  }
});


/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/components/Chart/DependencyLines.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chart/DependencyLines.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'DependencyLines',
  inject: ['root'],
  props: ['tasks'],
  data() {
    return {};
  },
  methods: {
    /**
     * Get path points
     *
     * @param {any} fromTaskId
     * @param {any} toTaskId
     * @returns {string}
     */
    getPoints(fromTaskId, toTaskId) {
      const fromTask = this.root.getTask(fromTaskId);
      const toTask = this.root.getTask(toTaskId);
      if (
        fromTask === null ||
        toTask === null ||
        !this.root.isTaskVisible(toTask) ||
        !this.root.isTaskVisible(fromTask)
      ) {
        return null;
      }
      const startX = fromTask.x + fromTask.width;
      const startY = fromTask.y + fromTask.height / 2;
      const stopX = toTask.x;
      const stopY = toTask.y + toTask.height / 2;
      const distanceX = stopX - startX;
      let distanceY;
      let yMultiplier = 1;
      if (stopY >= startY) {
        distanceY = stopY - startY;
      } else {
        distanceY = startY - stopY;
        yMultiplier = -1;
      }
      const offset = 10;
      const roundness = 4;
      const isBefore = distanceX <= offset + roundness;
      let points = `M ${startX} ${startY}
          L ${startX + offset},${startY} `;
      if (isBefore) {
        points += `Q ${startX + offset + roundness},${startY} ${startX + offset + roundness},${startY +
          roundness * yMultiplier}
            L ${startX + offset + roundness},${startY + (distanceY * yMultiplier) / 2 - roundness * yMultiplier}
            Q ${startX + offset + roundness},${startY + (distanceY * yMultiplier) / 2} ${startX + offset},${startY +
          (distanceY * yMultiplier) / 2}
            L ${startX - offset + distanceX},${startY + (distanceY * yMultiplier) / 2}
            Q ${startX - offset + distanceX - roundness},${startY + (distanceY * yMultiplier) / 2} ${startX -
          offset +
          distanceX -
          roundness},${startY + (distanceY * yMultiplier) / 2 + roundness * yMultiplier}
            L ${startX - offset + distanceX - roundness},${stopY - roundness * yMultiplier}
            Q ${startX - offset + distanceX - roundness},${stopY} ${startX - offset + distanceX},${stopY}
            L ${stopX},${stopY}`;
      } else {
        points += `L ${startX + distanceX / 2 - roundness},${startY}
            Q ${startX + distanceX / 2},${startY} ${startX + distanceX / 2},${startY + roundness * yMultiplier}
            L ${startX + distanceX / 2},${stopY - roundness * yMultiplier}
            Q ${startX + distanceX / 2},${stopY} ${startX + distanceX / 2 + roundness},${stopY}
            L ${stopX},${stopY}`;
      }
      return points;
    }
  },
  computed: {
    /**
     * Get tasks which are dependent on other tasks
     *
     * @returns {array}
     */
    dependencyTasks() {
      return this.tasks
        .filter(task => typeof task.dependentOn !== 'undefined')
        .map(task => {
          task.dependencyLines = task.dependentOn.map(id => {
            return { points: this.getPoints(id, task.id), task_id: id };
          });
          return task;
        })
        .filter(task => task.dependencyLines.points !== null);
    }
  }
});


/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/components/Chart/Grid.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chart/Grid.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Grid',
  inject: ['root'],
  data() {
    return {};
  },
  /**
   * Created
   */
  created() {
    this.root.$on('recenterPosition', this.recenterPosition);
  },

  /**
   * Mounted
   */
  mounted() {
    this.$nextTick(() => {
      this.$nextTick(() => {
        // because of stupid slider :/
        this.root.scrollToTime(this.timeLinePosition.time);
      });
    });
  },

  methods: {
    /**
     * Recenter position - go to current time line
     */
    recenterPosition() {
      this.root.scrollToTime(this.timeLinePosition.time);
    }
  },

  computed: {
    /**
     * Generate vertical lines of the grid
     *
     * @returns {array}
     */
    verticalLines() {
      let lines = [];
      const state = this.root.state;
      state.options.times.steps.forEach(step => {
        if (this.root.isInsideViewPort(step.offset.px, 1)) {
          lines.push({
            key: step.time,
            x1: step.offset.px,
            y1: 0,
            x2: step.offset.px,
            y2:
              state.tasks.length * (state.options.row.height + state.options.chart.grid.horizontal.gap * 2) +
              this.root.style['grid-line-vertical']['stroke-width']
          });
        }
      });
      return lines;
    },

    /**
     * Generate horizontal lines of the grid
     *
     * @returns {array}
     */
    horizontalLines() {
      let lines = [];
      const state = this.root.state.options;
      let tasks = this.root.visibleTasks;
      for (let index = 0, len = tasks.length; index <= len; index++) {
        const y =
          index * (state.row.height + state.chart.grid.horizontal.gap * 2) +
          this.root.style['grid-line-vertical']['stroke-width'] / 2;
        lines.push({
          key: 'hl' + index,
          x1: 0,
          y1: y,
          x2: '100%',
          y2: y
        });
      }
      return lines;
    },

    /**
     * Check if specified line is inside viewport (visible)
     *
     * @returns {function}
     */
    inViewPort() {
      return line => {
        const state = this.root.state.options;
        return line.x1 >= state.scroll.chart.left && line.x1 <= state.scroll.chart.right;
      };
    },

    /**
     * Get current time line position
     *
     * @returns {object}
     */
    timeLinePosition() {
      const d = new Date();
      const current = d.getTime();
      const currentOffset = this.root.timeToPixelOffsetX(current);
      const timeLine = {
        x: 0,
        y1: 0,
        y2: '100%',
        dateTime: '',
        time: current
      };
      timeLine.x = currentOffset;
      timeLine.dateTime = d.toLocaleDateString();
      return timeLine;
    }
  }
});


/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/components/Chart/ProgressBar.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chart/ProgressBar.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ProgressBar',
  inject: ['root'],
  props: ['task'],
  data() {
    return {};
  },

  computed: {
    /**
     * Get progress width
     *
     * @returns {string}
     */
    getProgressWidth() {
      return this.task.progress + '%';
    },

    /**
     * Get line points
     *
     * @returns {string}
     */
    getLinePoints() {
      const start = (this.task.width / 100) * this.task.progress;
      return `M ${start} 0 L ${start} ${this.task.height}`;
    },

    /**
     * Get solid style
     *
     * @returns {object}
     */
    getSolidStyle() {
      return Object.assign({}, this.root.state.options.chart.progress.styles.bar.solid, this.task.progressBarStyle.bar);
    },

    /**
     * Get line style
     *
     * @returns {object}
     */
    getLineStyle() {
      return Object.assign(
        {},
        {
          stroke: this.root.state.options.row.styles.bar.stroke + 'a0',
          'stroke-width': this.root.state.options.row.styles.bar['stroke-width'] / 2
        },
        this.task.style
      );
    }
  }
});


/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/components/Chart/Row/Milestone.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chart/Row/Milestone.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Text_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Text.vue */ "./src/components/Chart/Text.vue");
/* harmony import */ var _ProgressBar_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ProgressBar.vue */ "./src/components/Chart/ProgressBar.vue");
/* harmony import */ var _Expander_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Expander.vue */ "./src/components/Expander.vue");
/* harmony import */ var _Task_mixin_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Task.mixin.js */ "./src/components/Chart/Row/Task.mixin.js");





/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Milestone',
  components: {
    ChartText: _Text_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    ProgressBar: _ProgressBar_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    Expander: _Expander_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  inject: ['root'],
  props: ['task'],
  mixins: [_Task_mixin_js__WEBPACK_IMPORTED_MODULE_3__["default"]],
  data() {
    return {};
  },
  computed: {
    /**
     * Get clip path id
     *
     * @returns {string}
     */
    clipPathId() {
      return 'gantt-elastic__milestone-clip-path-' + this.task.id;
    },

    /**
     * Get points
     *
     * @returns {string}
     */
    getPoints() {
      const task = this.task;
      const fifty = task.height / 2;
      let offset = fifty;
      if (task.width / 2 - offset < 0) {
        offset = task.width / 2;
      }
      return `0,${fifty}
        ${offset},0
        ${task.width - offset},0
        ${task.width},${fifty}
        ${task.width - offset},${task.height}
        ${offset},${task.height}`;
    }
  }
});


/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/components/Chart/Row/Project.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chart/Row/Project.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Text_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Text.vue */ "./src/components/Chart/Text.vue");
/* harmony import */ var _ProgressBar_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ProgressBar.vue */ "./src/components/Chart/ProgressBar.vue");
/* harmony import */ var _Expander_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Expander.vue */ "./src/components/Expander.vue");
/* harmony import */ var _Task_mixin_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Task.mixin.js */ "./src/components/Chart/Row/Task.mixin.js");





/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Project',
  components: {
    ChartText: _Text_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    ProgressBar: _ProgressBar_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    Expander: _Expander_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  inject: ['root'],
  props: ['task'],
  mixins: [_Task_mixin_js__WEBPACK_IMPORTED_MODULE_3__["default"]],
  data() {
    return {};
  },
  computed: {
    /**
     * Get clip path id
     *
     * @returns {string}
     */
    clipPathId() {
      return 'gantt-elastic__project-clip-path-' + this.task.id;
    },

    /**
     * Get points
     *
     * @returns {string}
     */
    getPoints() {
      const task = this.task;
      const bottom = task.height - task.height / 4;
      const corner = task.height / 6;
      const smallCorner = task.height / 8;
      return `M ${smallCorner},0
                L ${task.width - smallCorner} 0
                L ${task.width} ${smallCorner}
                L ${task.width} ${bottom}
                L ${task.width - corner} ${task.height}
                L ${task.width - corner * 2} ${bottom}
                L ${corner * 2} ${bottom}
                L ${corner} ${task.height}
                L 0 ${bottom}
                L 0 ${smallCorner}
                Z
        `;
    },

    /**
     * Should we display expander?
     *
     * @returns {boolean}
     */
    displayExpander() {
      const expander = this.root.state.options.chart.expander;
      return expander.display || (expander.displayIfTaskListHidden && !this.root.state.options.taskList.display);
    }
  }
});


/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/components/Chart/Row/Task.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chart/Row/Task.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Text_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Text.vue */ "./src/components/Chart/Text.vue");
/* harmony import */ var _ProgressBar_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ProgressBar.vue */ "./src/components/Chart/ProgressBar.vue");
/* harmony import */ var _Expander_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Expander.vue */ "./src/components/Expander.vue");
/* harmony import */ var _Task_mixin_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Task.mixin.js */ "./src/components/Chart/Row/Task.mixin.js");





/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Task',
  components: {
    ChartText: _Text_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    ProgressBar: _ProgressBar_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    Expander: _Expander_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  inject: ['root'],
  props: ['task'],
  mixins: [_Task_mixin_js__WEBPACK_IMPORTED_MODULE_3__["default"]],
  data() {
    return {};
  },
  computed: {
    /**
     * Get clip path id
     *
     * @returns {string}
     */
    clipPathId() {
      return 'gantt-elastic__task-clip-path-' + this.task.id;
    },

    /**
     * Get points
     *
     * @returns {string}
     */
    getPoints() {
      const task = this.task;
      return `0,0 ${task.width},0 ${task.width},${task.height} 0,${task.height}`;
    }
  }
});


/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/components/Chart/Text.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chart/Text.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Render_index_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Render/index.vue */ "./src/components/Render/index.vue");


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ChartText',
  inject: ['root'],
  props: ['task'],
  components: {
    Render: _Render_index_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data() {
    return {};
  },
  computed: {
    /**
     * Get width
     *
     * @returns {number}
     */
    getWidth() {
      if (this.textConfig.ellipsis) {
        return this.task.width;
      }
      const textStyle = this.root.style['chart-row-text'];
      this.root.state.ctx.font = `${textStyle['font-weight']} ${textStyle['font-size']} ${textStyle['font-family']}`;
      const textWidth = this.root.state.ctx.measureText(this.task.label).width;
      return textWidth + this.root.state.options.chart.text.xPadding * 2;
    },

    /**
     * Get height
     *
     * @returns {number}
     */
    getHeight() {
      return this.task.height + this.root.state.options.chart.grid.horizontal.gap * 2;
    },

    /**
     * Get content style
     *
     * @returns {object}
     */
    contentStyle() {
      return { height: '100%', 'line-height': this.getHeight + 'px' };
    },

    /**
     * Should we render text as html?
     *
     * @returns {boolean}
     */
    html() {
      return Boolean(this.textConfig.html);
    },
    textConfig() {
      return (
        this.root.state.options.chart.text || {
          style: {},
          html: false,
          ellipsis: false
        }
      );
    },

    showLabel() {
      if (this.textConfig.ellipsis) {
        const labelLength = this.task.label.length || 0;
        const textWidth = this.root.state.ctx.measureText(this.task.label).width;
        let showLength = Math.floor((this.task.width / textWidth) * labelLength);

        if (showLength < labelLength) {
          return this.task.label.substring(0, showLength - 2) + '...';
        }
      }
      return this.task.label;
    }
  },
  methods: {}
});


/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/components/Expander.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/components/Expander.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Expander',
  inject: ['root'],
  props: ['tasks', 'options', 'type'],
  data() {
    const border = 0.5;
    return {
      border,
      borderStyle: {
        'stroke-width': border
      },
      lineOffset: 5
    };
  },
  computed: {
    style() {
      if (this.type !== 'taskList') {
        return {};
      }
      const margin = this.root.state.options.taskList.expander.margin;
      const padding = this.tasks[0].parents.length * this.root.state.options.taskList.expander.padding;
      return {
        'padding-left': padding + margin + 'px',
        margin: 'auto 0'
      };
    },
    /**
     * Get all tasks
     *
     * @returns {array}
     */
    allChildren() {
      const children = [];
      this.tasks.forEach(task => {
        task.allChildren.forEach(childId => {
          children.push(childId);
        });
      });
      return children;
    },
    /**
     * Is current expander collapsed?
     *
     * @returns {boolean}
     */
    collapsed() {
      if (this.tasks.length === 0) {
        return false;
      }
      let collapsed = 0;
      for (let i = 0, len = this.tasks.length; i < len; i++) {
        if (this.tasks[i].collapsed) {
          collapsed++;
        }
      }
      return collapsed === this.tasks.length;
    }
  },
  methods: {
    /**
     * Get specific class prefix
     *
     * @returns {string}
     */
    getClassPrefix(full = true) {
      return `${full ? 'gantt-elastic__' : ''}${this.options.type}-expander`;
    },
    /**
     * Toggle expander
     */
    toggle() {
      if (this.tasks.length === 0) {
        return;
      }
      const collapsed = !this.collapsed;
      this.tasks.forEach(task => {
        task.collapsed = collapsed;
      });
    }
  }
});


/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/components/MainView.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/components/MainView.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TaskList_TaskList_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TaskList/TaskList.vue */ "./src/components/TaskList/TaskList.vue");
/* harmony import */ var _TaskListFixed_TaskList_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TaskListFixed/TaskList.vue */ "./src/components/TaskListFixed/TaskList.vue");
/* harmony import */ var _Chart_Chart_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Chart/Chart.vue */ "./src/components/Chart/Chart.vue");





let ignoreScrollEvents = false;

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'MainView',
  components: {
    TaskList: _TaskList_TaskList_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    Chart: _Chart_Chart_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    TaskListFixed: _TaskListFixed_TaskList_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  inject: ['root'],
  data() {
    return {
      defs: '',
      mousePos: {
        x: 0,
        y: 0,
        movementX: 0,
        movementY: 0,
        lastX: 0,
        lastY: 0,
        positiveX: 0,
        positiveY: 0,
        currentX: 0,
        currentY: 0
      }
    };
  },
  /**
   * Mounted
   */
  mounted() {
    this.viewBoxWidth = this.$el.clientWidth;
    this.root.state.refs.mainView = this.$refs.mainView;
    this.root.state.refs.chartContainer = this.$refs.chartContainer;
    this.root.state.refs.taskList = this.$refs.taskList;
    this.root.state.refs.chartScrollContainerHorizontal = this.$refs.chartScrollContainerHorizontal;
    this.root.state.refs.chartScrollContainerVertical = this.$refs.chartScrollContainerVertical;
    document.addEventListener('mouseup', this.chartMouseUp.bind(this));
    document.addEventListener('mousemove', this.chartMouseMove.bind(this));
    document.addEventListener('touchmove', this.chartMouseMove.bind(this));
    document.addEventListener('touchend', this.chartMouseUp.bind(this));
  },
  computed: {
    /**
     * Get hidden rows height
     *
     * @returns {number}
     */
    hiddenRowsHeight() {
      let h = 0;
      this.root.visibleTasks.forEach(v => {
        if (v.showTaskList === false) {
          h += v.height + 14 || 0;
        }
      });
      return h;
    },
    /**
     * Get margin left
     *
     * @returns {string}
     */
    getMarginLeft() {
      if (!this.root.state.options.taskList.display) {
        return '0px';
      }
      let sumFixed = 0;

      if (this.fixedCols.length) {
        sumFixed = this.fixedCols
          .map(v => v.finalWidth)
          .filter(v => v && !Number.isNaN(v))
          .reduce((a, b) => a + b);
      }
      return this.root.state.options.taskList.finalWidth - sumFixed + 'px';
    },
    fixedCols() {
      return this.root.state.options.taskList.columns.filter(v => v.fixed === 'right');
    },
    /**
     * Get margin right
     *
     * @returns {string}
     */
    getMarginRight() {
      if (!this.root.state.options.taskList.display) {
        return '0px';
      }
      if (this.fixedCols.length) {
        const sum = this.fixedCols
          .map(v => v.finalWidth)
          .filter(v => v && !Number.isNaN(v))
          .reduce((a, b) => a + b);
        return sum + 'px';
      }
      return '0px';
    },
    getFixedWidth() {
      let sumFixed = 0;
      if (this.fixedCols.length) {
        sumFixed = this.fixedCols
          .map(v => v.finalWidth)
          .filter(v => v && !Number.isNaN(v))
          .reduce((a, b) => a + b);
      }
      // this.root.state.options.taskList.finalWidth
      return sumFixed + 'px';
    },
    /**
     * Get vertical style
     *
     * @returns {object}
     */
    verticalStyle() {
      return {
        width: this.root.state.options.scrollBarHeight + 'px',
        height: this.root.state.options.rowsHeight - this.hiddenRowsHeight + 'px',
        'margin-top': this.root.state.options.calendar.height + this.root.state.options.calendar.gap + 'px',
        overflowY: 'hidden'
      };
    },

    /**
     * Get view box
     *
     * @returns {string}
     */
    getViewBox() {
      if (this.root.state.options.clientWidth) {
        return `0 0 ${this.root.state.options.clientWidth - this.root.state.options.scrollBarHeight} ${this.root.state
          .options.height - this.hiddenRowsHeight}`;
      }
      return `0 0 0 ${this.root.state.options.height - this.hiddenRowsHeight}`;
    }
  },
  methods: {
    /**
     * Emit event when mouse is moving inside main view
     */
    mouseMove(event) {
      this.root.$emit('main-view-mousemove', event);
    },

    /**
     * Emit mouseup event inside main view
     */
    mouseUp(event) {
      this.root.$emit('main-view-mouseup', event);
    },

    /**
     * Horizontal scroll event handler
     */
    onHorizontalScroll(ev) {
      this.root.$emit('chart-scroll-horizontal', ev);
    },

    /**
     * Vertical scroll event handler
     */
    onVerticalScroll(ev) {
      this.root.$emit('chart-scroll-vertical', ev);
    },

    /**
     * Mouse wheel event handler
     */
    chartWheel(ev) {
      this.root.$emit('chart-wheel', ev);
    },

    /**
     * Chart mousedown event handler
     * Initiates drag scrolling mode
     */
    chartMouseDown(ev) {
      if (typeof ev.touches !== 'undefined') {
        this.mousePos.x = this.mousePos.lastX = ev.touches[0].screenX;
        this.mousePos.y = this.mousePos.lastY = ev.touches[0].screenY;
        this.mousePos.movementX = 0;
        this.mousePos.movementY = 0;
        this.mousePos.currentX = this.$refs.chartScrollContainerHorizontal.scrollLeft;
        this.mousePos.currentY = this.$refs.chartScrollContainerVertical.scrollTop;
      }
      this.root.state.options.scroll.scrolling = true;
    },

    /**
     * Chart mouseup event handler
     * Deactivates drag scrolling mode
     */
    chartMouseUp(ev) {
      this.root.state.options.scroll.scrolling = false;
    },

    /**
     * Chart mousemove event handler
     * When in drag scrolling mode this method calculate scroll movement
     */
    chartMouseMove(ev) {
      if (this.root.state.options.scroll.scrolling) {
        ev.preventDefault();
        ev.stopImmediatePropagation();
        ev.stopPropagation();
        const touch = typeof ev.touches !== 'undefined';
        let movementX, movementY;
        if (touch) {
          const screenX = ev.touches[0].screenX;
          const screenY = ev.touches[0].screenY;
          movementX = this.mousePos.x - screenX;
          movementY = this.mousePos.y - screenY;
          this.mousePos.lastX = screenX;
          this.mousePos.lastY = screenY;
        } else {
          movementX = ev.movementX;
          movementY = ev.movementY;
        }
        const horizontal = this.$refs.chartScrollContainerHorizontal;
        const vertical = this.$refs.chartScrollContainerVertical;
        let x = 0,
          y = 0;
        if (touch) {
          x = this.mousePos.currentX + movementX * this.root.state.options.scroll.dragXMoveMultiplier;
        } else {
          x = horizontal.scrollLeft - movementX * this.root.state.options.scroll.dragXMoveMultiplier;
        }
        horizontal.scrollLeft = x;
        if (touch) {
          y = this.mousePos.currentY + movementY * this.root.state.options.scroll.dragYMoveMultiplier;
        } else {
          y = vertical.scrollTop - movementY * this.root.state.options.scroll.dragYMoveMultiplier;
        }
        vertical.scrollTop = y;
      }
    }
  },

  /**
   * Before destroy event - clean up
   */
  beforeDestroy() {
    document.removeEventListener('mouseup', this.chartMouseUp);
    document.removeEventListener('mousemove', this.chartMouseMove);
    document.removeEventListener('touchmove', this.chartMouseMove);
    document.removeEventListener('touchend', this.chartMouseUp);
  }
});


/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/components/Render/index.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/components/Render/index.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Render',
  functional: true,
  props: {
    render: Function
  },
  render(createElement, context) {
    return context.props.render(createElement);
  }
});


/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/components/TaskList/ItemColumn.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/components/TaskList/ItemColumn.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Render_index_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Render/index.vue */ "./src/components/Render/index.vue");


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ItemColumn',
  inject: ['root'],
  props: ['column', 'task'],
  components: {
    Render: _Render_index_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data() {
    return {};
  },
  methods: {
    /**
     * Emit event
     *
     * @param {String} eventName
     * @param {Event} event
     */
    emitEvent(eventName, event) {
      if (typeof this.column.events !== 'undefined' && typeof this.column.events[eventName] === 'function') {
        this.column.events[eventName]({ event, data: this.task, column: this.column });
      }
      this.root.$emit(`taskList-${this.task.type}-${eventName}`, { event, data: this.task, column: this.column });
    }
  },
  computed: {
    /**
     * Should we display html or just text?
     *
     * @returns {boolean}
     */
    html() {
      if (typeof this.column.html !== 'undefined' && this.column.html === true) {
        return true;
      }
      return false;
    },

    /**
     * Get column value
     *
     * @returns {any|string}
     */
    value() {
      if (typeof this.column.value === 'function') {
        return this.column.value(this.task);
      }
      return this.task[this.column.value];
    },

    itemColumnStyle() {
      return {
        ...this.root.style['task-list-item-column'],
        ...this.column.style['task-list-item-column'],
        width: this.column.finalWidth + 'px',
        height: this.column.height + 'px'
      };
    },

    wrapperStyle() {
      return {
        ...this.root.style['task-list-item-value-wrapper'],
        ...this.column.style['task-list-item-value-wrapper']
      };
    },

    containerStyle() {
      return {
        ...this.root.style['task-list-item-value-container'],
        ...this.column.style['task-list-item-value-container']
      };
    },

    valueStyle() {
      return { ...this.root.style['task-list-item-value'], ...this.column.style['task-list-item-value'] };
    }
  }
});


/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/components/TaskList/TaskList.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/components/TaskList/TaskList.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TaskListHeader_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TaskListHeader.vue */ "./src/components/TaskList/TaskListHeader.vue");
/* harmony import */ var _TaskListItem_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TaskListItem.vue */ "./src/components/TaskList/TaskListItem.vue");



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'TaskList',
  components: {
    TaskListHeader: _TaskListHeader_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    TaskListItem: _TaskListItem_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  inject: ['root'],
  computed: {
    showTasks() {
      return this.root.visibleTasks.filter(v => v.showTaskList !== false);
    }
  },
  data() {
    return {};
  },

  /**
   * Mounted
   */
  mounted() {
    this.root.state.refs.taskListWrapper = this.$refs.taskListWrapper;
    this.root.state.refs.taskList = this.$refs.taskList;
    this.root.state.refs.taskListItems = this.$refs.taskListItems;
  }
});


/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/components/TaskList/TaskListHeader.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/components/TaskList/TaskListHeader.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Expander_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Expander.vue */ "./src/components/Expander.vue");


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'TaskListHeader',
  components: {
    TaskListExpander: _Expander_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },

  inject: ['root'],

  data() {
    return {
      resizer: {
        moving: false,
        x: 0
      }
    };
  },

  computed: {
    /**
     * Is this row collapsible?
     *
     * @returns {bool}
     */
    collapsible() {
      return this.root.state.tasks.filter(task => task.allChildren.length > 0);
    }
  },

  methods: {
    /**
     * Get style
     *
     * @returns {object}
     */
    getStyle(column) {
      return {
        width: column.finalWidth + 'px'
      };
    },
    /**
     * Resizer mouse down event handler
     */
    resizerMouseDown(event, column) {
      if (!this.resizer.moving) {
        this.resizer.moving = column;
        this.resizer.x = event.clientX;
        this.resizer.initialWidth = column.width;
        this.root.$emit('taskList-column-width-change-start', this.resizer.moving);
      }
    },

    /**
     * Resizer mouse move event handler
     */
    resizerMouseMove(event) {
      if (this.resizer.moving) {
        const lastWidth = this.resizer.moving.width;
        this.resizer.moving.width = this.resizer.initialWidth + event.clientX - this.resizer.x;
        if (this.resizer.moving.width < this.root.state.options.taskList.minWidth) {
          this.resizer.moving.width = this.root.state.options.taskList.minWidth;
        }
        if (lastWidth !== this.resizer.moving.width) {
          this.root.$emit('taskList-column-width-change', this.resizer.moving);
        }
      }
    },

    /**
     * Resizer mouse up event handler
     */
    resizerMouseUp(event) {
      if (this.resizer.moving) {
        this.root.$emit('taskList-column-width-change-stop', this.resizer.moving);
        this.resizer.moving = false;
      }
    }
  },

  /**
   * Created
   */
  created() {
    this.mouseUpListener = document.addEventListener('mouseup', this.resizerMouseUp.bind(this));
    this.mouseMoveListener = document.addEventListener('mousemove', this.resizerMouseMove.bind(this));
    this.root.$on('main-view-mousemove', this.resizerMouseMove);
    this.root.$on('main-view-mouseup', this.resizerMouseUp);
  },

  /**
   * Before destroy event - clear all event listeners
   */
  beforeDestroy() {
    document.removeEventListener('mouseup', this.resizerMouseUp);
    document.removeEventListener('mousemove', this.resizerMouseMove);
  }
});


/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/components/TaskList/TaskListItem.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/components/TaskList/TaskListItem.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Expander_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Expander.vue */ "./src/components/Expander.vue");
/* harmony import */ var _ItemColumn_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ItemColumn.vue */ "./src/components/TaskList/ItemColumn.vue");




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'TaskListItem',
  components: {
    TaskListExpander: _Expander_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    ItemColumn: _ItemColumn_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  inject: ['root'],
  props: ['task'],
  data() {
    return {};
  },
  computed: {
    columns() {
      return this.root.state.options.taskList.columns.filter(v => v.fixed !== 'right');
    }
  },
  methods: {
    handleRow(event) {
      if (this.root.$listeners.taskRowClick) {
        this.root.$listeners.taskRowClick(event, this.task);
      }
    }
  }
});


/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/components/TaskListFixed/ItemColumn.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/components/TaskListFixed/ItemColumn.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Render_index_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Render/index.vue */ "./src/components/Render/index.vue");


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ItemColumn',
  inject: ['root'],
  props: ['column', 'task'],
  components: {
    Render: _Render_index_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data() {
    return {};
  },
  methods: {
    /**
     * Emit event
     *
     * @param {String} eventName
     * @param {Event} event
     */
    emitEvent(eventName, event) {
      if (typeof this.column.events !== 'undefined' && typeof this.column.events[eventName] === 'function') {
        this.column.events[eventName]({ event, data: this.task, column: this.column });
      }
      this.root.$emit(`taskList-${this.task.type}-${eventName}`, { event, data: this.task, column: this.column });
    }
  },
  computed: {
    /**
     * Should we display html or just text?
     *
     * @returns {boolean}
     */
    html() {
      if (typeof this.column.html !== 'undefined' && this.column.html === true) {
        return true;
      }
      return false;
    },
    /**
     * Get column value
     *
     * @returns {any|string}
     */
    value() {
      if (typeof this.column.value === 'function') {
        return this.column.value(this.task);
      }
      return this.task[this.column.value];
    },

    itemColumnStyle() {
      return {
        ...this.root.style['task-list-item-column'],
        ...this.column.style['task-list-item-column'],
        width: this.column.finalWidth + 'px',
        height: this.column.height + 'px'
      };
    },

    wrapperStyle() {
      return {
        ...this.root.style['task-list-item-value-wrapper'],
        ...this.column.style['task-list-item-value-wrapper']
      };
    },

    containerStyle() {
      return {
        ...this.root.style['task-list-item-value-container'],
        ...this.column.style['task-list-item-value-container']
      };
    },

    valueStyle() {
      return { ...this.root.style['task-list-item-value'], ...this.column.style['task-list-item-value'] };
    }
  }
});


/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/components/TaskListFixed/TaskList.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/components/TaskListFixed/TaskList.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TaskListHeader_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TaskListHeader.vue */ "./src/components/TaskListFixed/TaskListHeader.vue");
/* harmony import */ var _TaskListItem_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TaskListItem.vue */ "./src/components/TaskListFixed/TaskListItem.vue");



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'TaskList',
  components: {
    TaskListHeader: _TaskListHeader_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    TaskListItem: _TaskListItem_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  inject: ['root'],
  computed: {
    showTasks() {
      return this.root.visibleTasks.filter(v => v.showTaskList !== false);
    }
  },
  data() {
    return {};
  },

  /**
   * Mounted
   */
  mounted() {
    this.root.state.refs.taskListWrapper = this.$refs.taskListWrapper;
    this.root.state.refs.taskList = this.$refs.taskList;
    this.root.state.refs.taskListItems = this.$refs.taskListItems;
  }
});


/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/components/TaskListFixed/TaskListHeader.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/components/TaskListFixed/TaskListHeader.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Expander_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Expander.vue */ "./src/components/Expander.vue");


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'TaskListHeader',
  components: {
    TaskListExpander: _Expander_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },

  inject: ['root'],

  data() {
    return {
      resizer: {
        moving: false,
        x: 0
      }
    };
  },

  computed: {
    /**
     * Is this row collapsible?
     *
     * @returns {bool}
     */
    collapsible() {
      return this.root.state.tasks.filter(task => task.allChildren.length > 0);
    },

    /**
     * Get columns
     *
     * @returns {array}
     */
    columns() {
      return this.root.state.options.taskList.columns.filter(v => v.fixed === 'right');
    }
  },

  methods: {
    /**
     * Get style
     *
     * @returns {object}
     */
    getStyle(column) {
      return {
        width: column.finalWidth + 'px'
      };
    }
  },

  /**
   * Created
   */
  created() {},

  /**
   * Before destroy event - clear all event listeners
   */
  beforeDestroy() {}
});


/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/components/TaskListFixed/TaskListItem.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/components/TaskListFixed/TaskListItem.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Expander_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Expander.vue */ "./src/components/Expander.vue");
/* harmony import */ var _ItemColumn_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ItemColumn.vue */ "./src/components/TaskListFixed/ItemColumn.vue");




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'TaskListItem',
  components: {
    TaskListExpander: _Expander_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    ItemColumn: _ItemColumn_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  inject: ['root'],
  props: ['task'],
  data() {
    return {};
  },
  computed: {
    columns() {
      return this.root.state.options.taskList.columns.filter(v => v.fixed === 'right');
    }
  }
});


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/GanttElastic.vue?vue&type=template&id=02c6304c":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--5!./node_modules/vue-loader/lib??vue-loader-options!./src/GanttElastic.vue?vue&type=template&id=02c6304c ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy
  return _c(
    "div",
    { staticClass: "gantt-elastic", staticStyle: { width: "100%" } },
    [
      _vm._t("header"),
      _vm._v(" "),
      _c("main-view", { ref: "mainView" }),
      _vm._v(" "),
      _vm._t("footer"),
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Calendar/Calendar.vue?vue&type=template&id=dee108e2":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--5!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Calendar/Calendar.vue?vue&type=template&id=dee108e2 ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c
  return _c(
    "div",
    {
      staticClass: "gantt-elastic__calendar-wrapper",
      style: {
        ..._vm.root.style["calendar-wrapper"],
        width: _vm.root.state.options.width + "px",
      },
    },
    [
      _c(
        "div",
        {
          staticClass: "gantt-elastic__calendar",
          style: {
            ..._vm.root.style["calendar"],
            width: _vm.root.state.options.width + "px",
          },
        },
        [
          _vm.root.state.options.calendar.month.display
            ? _c("calendar-row", {
                attrs: { items: _vm.dates.months, which: "month" },
              })
            : _vm._e(),
          _vm._v(" "),
          _vm.root.state.options.calendar.day.display
            ? _c("calendar-row", {
                attrs: { items: _vm.dates.days, which: "day" },
              })
            : _vm._e(),
          _vm._v(" "),
          _vm.root.state.options.calendar.hour.display
            ? _c("calendar-row", {
                attrs: { items: _vm.dates.hours, which: "hour" },
              })
            : _vm._e(),
        ],
        1
      ),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Calendar/CalendarRow.vue?vue&type=template&id=0daf06fb":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--5!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Calendar/CalendarRow.vue?vue&type=template&id=0daf06fb ***!
  \*************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c
  return _c(
    "div",
    {
      class:
        "gantt-elastic__calendar-row gantt-elastic__calendar-row--" + _vm.which,
      style: _vm.rowStyle,
    },
    _vm._l(_vm.items, function (item, itemIndex) {
      return _c(
        "div",
        {
          key: item.key,
          class:
            "gantt-elastic__calendar-row-rect gantt-elastic__calendar-row-rect--" +
            _vm.which,
          style: _vm.rectStyle,
        },
        _vm._l(item.children, function (child, childIndex) {
          return _c(
            "div",
            {
              key: child.key,
              class:
                "gantt-elastic__calendar-row-rect-child gantt-elastic__calendar-row-rect-child--" +
                _vm.which,
              style: _vm.rectChildStyle[itemIndex][childIndex],
            },
            [
              _c(
                "div",
                {
                  class:
                    "gantt-elastic__calendar-row-text gantt-elastic__calendar-row-text--" +
                    _vm.which,
                  style: _vm.textStyle(child),
                },
                [_vm._v("\n        " + _vm._s(child.label) + "\n      ")]
              ),
            ]
          )
        }),
        0
      )
    }),
    0
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Chart/Chart.vue?vue&type=template&id=67c3f5cd":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--5!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chart/Chart.vue?vue&type=template&id=67c3f5cd ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c
  return _c(
    "div",
    {
      ref: "chart",
      staticClass: "gantt-elastic__chart",
      style: { ..._vm.root.style["chart"] },
    },
    [
      _c(
        "div",
        {
          ref: "chartCalendarContainer",
          staticClass: "gantt-elastic__chart-calendar-container",
          style: {
            ..._vm.root.style["chart-calendar-container"],
            height: _vm.root.state.options.calendar.height + "px",
            "margin-bottom": _vm.root.state.options.calendar.gap + "px",
          },
        },
        [_c("calendar")],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          ref: "chartGraphContainer",
          staticClass: "gantt-elastic__chart-graph-container",
          style: {
            ..._vm.root.style["chart-graph-container"],
            height:
              _vm.root.state.options.height -
              _vm.root.state.options.calendar.height -
              _vm.hiddenRowsHeight +
              "px",
          },
        },
        [
          _c(
            "div",
            {
              style: {
                ..._vm.root.style["chart-area"],
                width: _vm.root.state.options.width + "px",
                height:
                  _vm.root.state.options.rowsHeight -
                  _vm.hiddenRowsHeight +
                  "px",
              },
            },
            [
              _c(
                "div",
                {
                  ref: "chartGraph",
                  staticClass: "gantt-elastic__chart-graph",
                  style: { ..._vm.root.style["chart-graph"], height: "100%" },
                },
                [
                  _c(
                    "svg",
                    {
                      ref: "chartGraphSvg",
                      staticClass: "gantt-elastic__chart-graph-svg",
                      style: { ..._vm.root.style["chart-graph-svg"] },
                      attrs: {
                        x: "0",
                        y: "0",
                        width: _vm.root.state.options.width + "px",
                        height:
                          _vm.root.state.options.allVisibleTasksHeight -
                          _vm.hiddenRowsHeight +
                          "px",
                        xmlns: "http://www.w3.org/2000/svg",
                      },
                    },
                    [
                      _c("days-highlight"),
                      _vm._v(" "),
                      _c("grid"),
                      _vm._v(" "),
                      _c("dependency-lines", {
                        attrs: { tasks: _vm.root.visibleTasks },
                      }),
                      _vm._v(" "),
                      _vm._l(_vm.root.visibleTasks, function (task) {
                        return _c(
                          "g",
                          {
                            key: task.id,
                            staticClass: "gantt-elastic__chart-row-wrapper",
                            style: { ..._vm.root.style["chart-row-wrapper"] },
                            attrs: { task: task },
                          },
                          [
                            _c(task.type, {
                              tag: "component",
                              attrs: { task: task },
                            }),
                          ],
                          1
                        )
                      }),
                    ],
                    2
                  ),
                ]
              ),
            ]
          ),
        ]
      ),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Chart/DaysHighlight.vue?vue&type=template&id=1bfe64e8":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--5!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chart/DaysHighlight.vue?vue&type=template&id=1bfe64e8 ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c
  return _vm.showWorkingDays
    ? _c(
        "g",
        {
          staticClass: "gantt-elastic__chart-days-highlight-container",
          style: { ..._vm.root.style["chart-days-highlight-container"] },
        },
        _vm._l(_vm.workingDays, function (day) {
          return _c("rect", {
            key: _vm.getKey(day),
            staticClass: "gantt-elastic__chart-days-highlight-rect",
            style: { ..._vm.root.style["chart-days-highlight-rect"] },
            attrs: {
              x: day.offset.px,
              y: "0",
              width: day.width.px,
              height: "100%",
            },
          })
        }),
        0
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Chart/DependencyLines.vue?vue&type=template&id=f1cbf6ba":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--5!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chart/DependencyLines.vue?vue&type=template&id=f1cbf6ba ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c
  return _c(
    "svg",
    {
      staticClass: "gantt-elastic__chart-dependency-lines-container",
      style: { ..._vm.root.style["chart-dependency-lines-container"] },
      attrs: { x: "0", y: "0", width: "100%", height: "100%" },
    },
    _vm._l(_vm.dependencyTasks, function (task) {
      return _c(
        "g",
        { key: task.id, attrs: { task: task } },
        _vm._l(task.dependencyLines, function (dependencyLine) {
          return _c("path", {
            key: dependencyLine.id,
            staticClass: "gantt-elastic__chart-dependency-lines-path",
            style: {
              ..._vm.root.style["chart-dependency-lines-path"],
              ...task.style["chart-dependency-lines-path"],
              ...task.style[
                "chart-dependency-lines-path-" + dependencyLine.task_id
              ],
            },
            attrs: { task: task, d: dependencyLine.points },
          })
        }),
        0
      )
    }),
    0
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Chart/Grid.vue?vue&type=template&id=2bf979a7":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--5!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chart/Grid.vue?vue&type=template&id=2bf979a7 ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c
  return _c(
    "svg",
    {
      ref: "chart",
      staticClass: "gantt-elastic__grid-lines-wrapper",
      style: { ..._vm.root.style["grid-lines-wrapper"] },
      attrs: {
        x: "0",
        y: "0",
        width: _vm.root.state.options.width,
        height: _vm.root.state.options.allVisibleTasksHeight,
        xmlns: "http://www.w3.org/2000/svg",
      },
    },
    [
      _c(
        "g",
        {
          staticClass: "gantt-elastic__grid-lines",
          style: { ..._vm.root.style["grid-lines"] },
        },
        [
          _vm._l(_vm.horizontalLines, function (line) {
            return _c("line", {
              key: line.key,
              staticClass: "gantt-elastic__grid-line-horizontal",
              style: { ..._vm.root.style["grid-line-horizontal"] },
              attrs: { x1: line.x1, y1: line.y1, x2: line.x2, y2: line.y2 },
            })
          }),
          _vm._v(" "),
          _vm._l(_vm.verticalLines, function (line) {
            return _c("line", {
              key: line.key,
              staticClass: "gantt-elastic__grid-line-vertical",
              style: { ..._vm.root.style["grid-line-vertical"] },
              attrs: { x1: line.x1, y1: line.y1, x2: line.x2, y2: line.y2 },
            })
          }),
          _vm._v(" "),
          _c("line", {
            staticClass: "gantt-elastic__grid-line-time",
            style: { ..._vm.root.style["grid-line-time"] },
            attrs: {
              x1: _vm.timeLinePosition.x,
              y1: _vm.timeLinePosition.y1,
              x2: _vm.timeLinePosition.x,
              y2: _vm.timeLinePosition.y2,
            },
          }),
        ],
        2
      ),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Chart/ProgressBar.vue?vue&type=template&id=4bc39355":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--5!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chart/ProgressBar.vue?vue&type=template&id=4bc39355 ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c
  return _c(
    "g",
    {
      staticClass: "gantt-elastic__chart-row-progress-bar-wrapper",
      style: {
        ..._vm.root.style["chart-row-progress-bar-wrapper"],
        ..._vm.task.style["chart-row-progress-bar-wrapper"],
      },
    },
    [
      _c("defs", [
        _c(
          "pattern",
          {
            attrs: {
              id: "diagonalHatch",
              width: _vm.root.state.options.chart.progress.width,
              height: _vm.root.state.options.chart.progress.width,
              patternTransform: "rotate(45 0 0)",
              patternUnits: "userSpaceOnUse",
            },
          },
          [
            _c("line", {
              staticClass: "chart-row-progress-bar-line",
              style: {
                ..._vm.root.style["chart-row-progress-bar-line"],
                ..._vm.task.style["chart-row-progress-bar-line"],
              },
              attrs: {
                x1: "0",
                y1: "0",
                x2: "0",
                y2: _vm.root.state.options.chart.progress.width,
              },
            }),
          ]
        ),
      ]),
      _vm._v(" "),
      _vm.root.state.options.chart.progress.bar
        ? _c("rect", {
            staticClass: "gantt-elastic__chart-row-progress-bar-solid",
            style: {
              ..._vm.root.style["chart-row-progress-bar-solid"],
              ..._vm.task.style["chart-row-progress-bar-solid"],
            },
            attrs: { x: "0", y: "0", width: _vm.getProgressWidth },
          })
        : _vm._e(),
      _vm._v(" "),
      _vm.root.state.options.chart.progress.pattern
        ? _c("g", [
            _c("rect", {
              staticClass: "gantt-elastic__chart-row-progress-bar-pattern",
              style: {
                ..._vm.root.style["chart-row-progress-bar-pattern"],
                ..._vm.task.style["chart-row-progress-bar-pattern"],
              },
              attrs: {
                x: _vm.getProgressWidth,
                y: "0",
                width: 100 - _vm.task.progress + "%",
                height: "100%",
              },
            }),
            _vm._v(" "),
            _c("path", {
              staticClass: "gantt-elastic__chart-row-progress-bar-outline",
              style: {
                ..._vm.root.style["chart-row-progress-bar-outline"],
                ..._vm.task.style["base"],
                ..._vm.task.style["chart-row-progress-bar-outline"],
              },
              attrs: { d: _vm.getLinePoints },
            }),
          ])
        : _vm._e(),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Chart/Row/Milestone.vue?vue&type=template&id=3013006c":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--5!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chart/Row/Milestone.vue?vue&type=template&id=3013006c ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c
  return _c(
    "g",
    {
      staticClass:
        "gantt-elastic__chart-row-bar-wrapper gantt-elastic__chart-row-milestone-wrapper",
      style: {
        ..._vm.root.style["chart-row-bar-wrapper"],
        ..._vm.root.style["chart-row-milestone-wrapper"],
        ..._vm.task.style["chart-row-bar-wrapper"],
      },
    },
    [
      _vm.displayExpander
        ? _c(
            "foreignObject",
            {
              staticClass:
                "gantt-elastic__chart-expander gantt-elastic__chart-expander--milestone",
              style: {
                ..._vm.root.style["chart-expander"],
                ..._vm.root.style["chart-expander--milestone"],
                ..._vm.task.style["chart-expander"],
              },
              attrs: {
                x:
                  _vm.task.x -
                  _vm.root.state.options.chart.expander.offset -
                  _vm.root.state.options.chart.expander.size,
                y:
                  _vm.task.y +
                  (_vm.root.state.options.row.height -
                    _vm.root.state.options.chart.expander.size) /
                    2,
                width: _vm.root.state.options.chart.expander.size,
                height: _vm.root.state.options.chart.expander.size,
              },
            },
            [
              _c("expander", {
                attrs: {
                  tasks: [_vm.task],
                  options: _vm.root.state.options.chart.expander,
                  type: "chart",
                },
              }),
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "svg",
        {
          staticClass:
            "gantt-elastic__chart-row-bar gantt-elastic__chart-row-milestone",
          style: {
            ..._vm.root.style["chart-row-bar"],
            ..._vm.root.style["chart-row-milestone"],
            ..._vm.task.style["chart-row-bar"],
          },
          attrs: {
            x: _vm.task.x,
            y: _vm.task.y,
            width: _vm.task.width,
            height: _vm.task.height,
            viewBox: `0 0 ${_vm.task.width} ${_vm.task.height}`,
            xmlns: "http://www.w3.org/2000/svg",
          },
          on: {
            click: function ($event) {
              return _vm.emitEvent("click", $event)
            },
            mouseenter: function ($event) {
              return _vm.emitEvent("mouseenter", $event)
            },
            mouseover: function ($event) {
              return _vm.emitEvent("mouseover", $event)
            },
            mouseout: function ($event) {
              return _vm.emitEvent("mouseout", $event)
            },
            mousemove: function ($event) {
              return _vm.emitEvent("mousemove", $event)
            },
            mousedown: function ($event) {
              return _vm.emitEvent("mousedown", $event)
            },
            mouseup: function ($event) {
              return _vm.emitEvent("mouseup", $event)
            },
            mousewheel: function ($event) {
              return _vm.emitEvent("mousewheel", $event)
            },
            touchstart: function ($event) {
              return _vm.emitEvent("touchstart", $event)
            },
            touchmove: function ($event) {
              return _vm.emitEvent("touchmove", $event)
            },
            touchend: function ($event) {
              return _vm.emitEvent("touchend", $event)
            },
          },
        },
        [
          _c("defs", [
            _c("clipPath", { attrs: { id: _vm.clipPathId } }, [
              _c("polygon", { attrs: { points: _vm.getPoints } }),
            ]),
          ]),
          _vm._v(" "),
          _c("polygon", {
            staticClass:
              "gantt-elastic__chart-row-bar-polygon gantt-elastic__chart-row-milestone-polygon",
            style: {
              ..._vm.root.style["chart-row-bar-polygon"],
              ..._vm.root.style["chart-row-milestone-polygon"],
              ..._vm.task.style["base"],
              ..._vm.task.style["chart-row-bar-polygon"],
            },
            attrs: { points: _vm.getPoints },
          }),
          _vm._v(" "),
          _c("progress-bar", {
            attrs: {
              task: _vm.task,
              "clip-path": "url(#" + _vm.clipPathId + ")",
            },
          }),
        ],
        1
      ),
      _vm._v(" "),
      _vm.root.state.options.chart.text.display
        ? _c("chart-text", { attrs: { task: _vm.task } })
        : _vm._e(),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Chart/Row/Project.vue?vue&type=template&id=077bbd73":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--5!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chart/Row/Project.vue?vue&type=template&id=077bbd73 ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c
  return _c(
    "g",
    {
      staticClass:
        "gantt-elastic__chart-row-bar-wrapper gantt-elastic__chart-row-project-wrapper",
      style: {
        ..._vm.root.style["chart-row-bar-wrapper"],
        ..._vm.root.style["chart-row-project-wrapper"],
        ..._vm.task.style["chart-row-bar-wrapper"],
      },
    },
    [
      _vm.displayExpander
        ? _c(
            "foreignObject",
            {
              staticClass:
                "gantt-elastic__chart-expander gantt-elastic__chart-expander--project",
              style: {
                ..._vm.root.style["chart-expander"],
                ..._vm.root.style["chart-expander--project"],
                ..._vm.task.style["chart-expander"],
              },
              attrs: {
                x:
                  _vm.task.x -
                  _vm.root.state.options.chart.expander.offset -
                  _vm.root.state.options.chart.expander.size,
                y:
                  _vm.task.y +
                  (_vm.root.state.options.row.height -
                    _vm.root.state.options.chart.expander.size) /
                    2,
                width: _vm.root.state.options.chart.expander.size,
                height: _vm.root.state.options.chart.expander.size,
              },
            },
            [
              _c("expander", {
                attrs: {
                  tasks: [_vm.task],
                  options: _vm.root.state.options.chart.expander,
                  type: "chart",
                },
              }),
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "svg",
        {
          staticClass:
            "gantt-elastic__chart-row-bar gantt-elastic__chart-row-project",
          style: {
            ..._vm.root.style["chart-row-bar"],
            ..._vm.root.style["chart-row-project"],
            ..._vm.task.style["chart-row-bar"],
          },
          attrs: {
            x: _vm.task.x,
            y: _vm.task.y,
            width: _vm.task.width,
            height: _vm.task.height,
            viewBox: `0 0 ${_vm.task.width} ${_vm.task.height}`,
            xmlns: "http://www.w3.org/2000/svg",
          },
          on: {
            click: function ($event) {
              return _vm.emitEvent("click", $event)
            },
            mouseenter: function ($event) {
              return _vm.emitEvent("mouseenter", $event)
            },
            mouseover: function ($event) {
              return _vm.emitEvent("mouseover", $event)
            },
            mouseout: function ($event) {
              return _vm.emitEvent("mouseout", $event)
            },
            mousemove: function ($event) {
              return _vm.emitEvent("mousemove", $event)
            },
            mousedown: function ($event) {
              return _vm.emitEvent("mousedown", $event)
            },
            mouseup: function ($event) {
              return _vm.emitEvent("mouseup", $event)
            },
            mousewheel: function ($event) {
              return _vm.emitEvent("mousewheel", $event)
            },
            touchstart: function ($event) {
              return _vm.emitEvent("touchstart", $event)
            },
            touchmove: function ($event) {
              return _vm.emitEvent("touchmove", $event)
            },
            touchend: function ($event) {
              return _vm.emitEvent("touchend", $event)
            },
          },
        },
        [
          _c("defs", [
            _c("clipPath", { attrs: { id: _vm.clipPathId } }, [
              _c("path", { attrs: { d: _vm.getPoints } }),
            ]),
          ]),
          _vm._v(" "),
          _c("path", {
            staticClass:
              "gantt-elastic__chart-row-bar-polygon gantt-elastic__chart-row-project-polygon",
            style: {
              ..._vm.root.style["chart-row-bar-polygon"],
              ..._vm.root.style["chart-row-project-polygon"],
              ..._vm.task.style["base"],
              ..._vm.task.style["chart-row-bar-polygon"],
            },
            attrs: { d: _vm.getPoints },
          }),
          _vm._v(" "),
          _c("progress-bar", {
            attrs: {
              task: _vm.task,
              "clip-path": "url(#" + _vm.clipPathId + ")",
            },
          }),
        ],
        1
      ),
      _vm._v(" "),
      _vm.root.state.options.chart.text.display
        ? _c("chart-text", { attrs: { task: _vm.task } })
        : _vm._e(),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Chart/Row/Task.vue?vue&type=template&id=e9c23eca":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--5!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chart/Row/Task.vue?vue&type=template&id=e9c23eca ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c
  return _c(
    "g",
    {
      staticClass:
        "gantt-elastic__chart-row-bar-wrapper gantt-elastic__chart-row-task-wrapper",
      style: {
        ..._vm.root.style["chart-row-bar-wrapper"],
        ..._vm.root.style["chart-row-task-wrapper"],
        ..._vm.task.style["chart-row-bar-wrapper"],
      },
    },
    [
      _vm.displayExpander
        ? _c(
            "foreignObject",
            {
              staticClass:
                "gantt-elastic__chart-expander gantt-elastic__chart-expander--task",
              style: {
                ..._vm.root.style["chart-expander"],
                ..._vm.root.style["chart-expander--task"],
                ..._vm.task.style["chart-expander"],
              },
              attrs: {
                x:
                  _vm.task.x -
                  _vm.root.state.options.chart.expander.offset -
                  _vm.root.state.options.chart.expander.size,
                y:
                  _vm.task.y +
                  (_vm.root.state.options.row.height -
                    _vm.root.state.options.chart.expander.size) /
                    2,
                width: _vm.root.state.options.chart.expander.size,
                height: _vm.root.state.options.chart.expander.size,
              },
            },
            [
              _c("expander", {
                attrs: {
                  tasks: [_vm.task],
                  options: _vm.root.state.options.chart.expander,
                  type: "chart",
                },
              }),
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "svg",
        {
          staticClass:
            "gantt-elastic__chart-row-bar gantt-elastic__chart-row-task",
          style: {
            ..._vm.root.style["chart-row-bar"],
            ..._vm.root.style["chart-row-task"],
            ..._vm.task.style["chart-row-bar"],
          },
          attrs: {
            x: _vm.task.x,
            y: _vm.task.y,
            width: _vm.task.width,
            height: _vm.task.height,
            viewBox: `0 0 ${_vm.task.width} ${_vm.task.height}`,
            xmlns: "http://www.w3.org/2000/svg",
          },
          on: {
            click: function ($event) {
              return _vm.emitEvent("click", $event)
            },
            mouseenter: function ($event) {
              return _vm.emitEvent("mouseenter", $event)
            },
            mouseover: function ($event) {
              return _vm.emitEvent("mouseover", $event)
            },
            mouseout: function ($event) {
              return _vm.emitEvent("mouseout", $event)
            },
            mousemove: function ($event) {
              return _vm.emitEvent("mousemove", $event)
            },
            mousedown: function ($event) {
              return _vm.emitEvent("mousedown", $event)
            },
            mouseup: function ($event) {
              return _vm.emitEvent("mouseup", $event)
            },
            mousewheel: function ($event) {
              return _vm.emitEvent("mousewheel", $event)
            },
            touchstart: function ($event) {
              return _vm.emitEvent("touchstart", $event)
            },
            touchmove: function ($event) {
              return _vm.emitEvent("touchmove", $event)
            },
            touchend: function ($event) {
              return _vm.emitEvent("touchend", $event)
            },
          },
        },
        [
          _c("defs", [
            _c("clipPath", { attrs: { id: _vm.clipPathId } }, [
              _c("polygon", { attrs: { points: _vm.getPoints } }),
            ]),
          ]),
          _vm._v(" "),
          _c("polygon", {
            staticClass:
              "gantt-elastic__chart-row-bar-polygon gantt-elastic__chart-row-task-polygon",
            style: {
              ..._vm.root.style["chart-row-bar-polygon"],
              ..._vm.root.style["chart-row-task-polygon"],
              ..._vm.task.style["base"],
              ..._vm.task.style["chart-row-bar-polygon"],
            },
            attrs: { points: _vm.getPoints },
          }),
          _vm._v(" "),
          _c("progress-bar", {
            attrs: {
              task: _vm.task,
              "clip-path": "url(#" + _vm.clipPathId + ")",
            },
          }),
        ],
        1
      ),
      _vm._v(" "),
      _vm.root.state.options.chart.text.display
        ? _c("chart-text", { attrs: { task: _vm.task } })
        : _vm._e(),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Chart/Text.vue?vue&type=template&id=459c2fe4":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--5!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chart/Text.vue?vue&type=template&id=459c2fe4 ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c
  return _c(
    "svg",
    {
      staticClass: "gantt-elastic__chart-row-text-wrapper",
      style: { ..._vm.root.style["chart-row-text-wrapper"] },
      attrs: {
        x: _vm.textConfig.ellipsis
          ? _vm.task.x
          : _vm.task.x +
            _vm.task.width +
            _vm.root.state.options.chart.text.offset,
        y: _vm.task.y - _vm.root.state.options.chart.grid.horizontal.gap,
        width: _vm.getWidth,
        height: _vm.getHeight,
      },
    },
    [
      _c(
        "foreignObject",
        { attrs: { x: "0", y: "0", width: "100%", height: _vm.getHeight } },
        [
          _c(
            "div",
            {
              staticClass: "gantt-elastic__chart-row-text",
              style: {
                ..._vm.root.style["chart-row-text"],
                backgroundColor: _vm.textConfig.ellipsis
                  ? "transparent"
                  : _vm.task.color,
              },
              attrs: { xmlns: "http://www.w3.org/1999/xhtml" },
            },
            [
              _vm.textConfig.render
                ? _c(
                    "div",
                    {
                      staticClass:
                        "gantt-elastic__chart-row-text-content gantt-elastic__chart-row-text-content--text",
                      style: {
                        ..._vm.root.style["chart-row-text-content"],
                        ..._vm.root.style["chart-row-text-content--text"],
                        ..._vm.contentStyle,
                        ..._vm.textConfig.style,
                      },
                    },
                    [
                      _c("Render", {
                        attrs: {
                          render: () =>
                            _vm.textConfig.render(_vm.task.label, _vm.task),
                        },
                      }),
                    ],
                    1
                  )
                : !_vm.html
                ? _c(
                    "div",
                    {
                      staticClass:
                        "gantt-elastic__chart-row-text-content gantt-elastic__chart-row-text-content--text",
                      style: {
                        ..._vm.root.style["chart-row-text-content"],
                        ..._vm.root.style["chart-row-text-content--text"],
                        ..._vm.contentStyle,
                        ..._vm.textConfig.style,
                      },
                    },
                    [_c("div", [_vm._v(_vm._s(_vm.showLabel))])]
                  )
                : _vm.html
                ? _c("div", {
                    staticClass:
                      "gantt-elastic__chart-row-text-content gantt-elastic__chart-row-text-content--html",
                    style: {
                      ..._vm.root.style["chart-row-text-content"],
                      ..._vm.root.style["chart-row-text-content--html"],
                      ..._vm.contentStyle,
                      ..._vm.textConfig.style,
                    },
                    domProps: { innerHTML: _vm._s(_vm.showLabel) },
                  })
                : _vm._e(),
            ]
          ),
        ]
      ),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Expander.vue?vue&type=template&id=09a21177":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--5!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Expander.vue?vue&type=template&id=09a21177 ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c
  return _c(
    "div",
    {
      class: _vm.getClassPrefix() + "-wrapper",
      style: {
        ..._vm.root.style[_vm.getClassPrefix(false) + "-wrapper"],
        ..._vm.style,
      },
    },
    [
      _vm.allChildren.length
        ? _c(
            "svg",
            {
              class: _vm.getClassPrefix() + "-content",
              style: {
                ..._vm.root.style[_vm.getClassPrefix(false) + "-content"],
              },
              attrs: { width: _vm.options.size, height: _vm.options.size },
              on: { click: _vm.toggle },
            },
            [
              _c("rect", {
                class: _vm.getClassPrefix() + "-border",
                style: {
                  ..._vm.root.style[_vm.getClassPrefix(false) + "-border"],
                  ..._vm.borderStyle,
                },
                attrs: {
                  x: _vm.border,
                  y: _vm.border,
                  width: _vm.options.size - _vm.border * 2,
                  height: _vm.options.size - _vm.border * 2,
                  rx: "2",
                  ry: "2",
                },
              }),
              _vm._v(" "),
              _vm.allChildren.length
                ? _c("line", {
                    class: _vm.getClassPrefix() + "-line",
                    style: {
                      ..._vm.root.style[_vm.getClassPrefix(false) + "-line"],
                    },
                    attrs: {
                      x1: _vm.lineOffset,
                      y1: _vm.options.size / 2,
                      x2: _vm.options.size - _vm.lineOffset,
                      y2: _vm.options.size / 2,
                    },
                  })
                : _vm._e(),
              _vm._v(" "),
              _vm.collapsed
                ? _c("line", {
                    class: _vm.getClassPrefix() + "-line",
                    style: {
                      ..._vm.root.style[_vm.getClassPrefix(false) + "-line"],
                    },
                    attrs: {
                      x1: _vm.options.size / 2,
                      y1: _vm.lineOffset,
                      x2: _vm.options.size / 2,
                      y2: _vm.options.size - _vm.lineOffset,
                    },
                  })
                : _vm._e(),
            ]
          )
        : _vm._e(),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/MainView.vue?vue&type=template&id=0bc4212e":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--5!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MainView.vue?vue&type=template&id=0bc4212e ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c
  return _c(
    "div",
    {
      staticClass: "gantt-elastic__main-view",
      style: { ..._vm.root.style["main-view"] },
    },
    [
      _c(
        "div",
        {
          staticClass: "gantt-elastic__main-container-wrapper",
          style: {
            ..._vm.root.style["main-container-wrapper"],
            height: _vm.root.state.options.height - _vm.hiddenRowsHeight + "px",
          },
        },
        [
          _c(
            "div",
            {
              ref: "mainView",
              staticClass: "gantt-elastic__main-container",
              style: {
                ..._vm.root.style["main-container"],
                width: _vm.root.state.options.clientWidth + "px",
                height:
                  _vm.root.state.options.height - _vm.hiddenRowsHeight + "px",
              },
            },
            [
              _c(
                "div",
                {
                  staticClass: "gantt-elastic__container",
                  style: { ..._vm.root.style["container"] },
                  on: { mousemove: _vm.mouseMove, mouseup: _vm.mouseUp },
                },
                [
                  _c(
                    "div",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.root.state.options.taskList.display,
                          expression: "root.state.options.taskList.display",
                        },
                      ],
                      ref: "taskList",
                      staticClass: "gantt-elastic__task-list-container",
                      style: {
                        ..._vm.root.style["task-list-container"],
                        /* 这个宽度会导致图形空白（x轴缩放时） */
                        // width: root.state.options.taskList.finalWidth + 'px',
                        height:
                          _vm.root.state.options.height -
                          _vm.hiddenRowsHeight +
                          "px",
                      },
                    },
                    [_c("task-list")],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      ref: "chartContainer",
                      staticClass: "gantt-elastic__main-view-container",
                      style: { ..._vm.root.style["main-view-container"] },
                      on: {
                        mousedown: _vm.chartMouseDown,
                        touchstart: _vm.chartMouseDown,
                        mouseup: _vm.chartMouseUp,
                        touchend: _vm.chartMouseUp,
                        mousemove: function ($event) {
                          $event.preventDefault()
                          return _vm.chartMouseMove.apply(null, arguments)
                        },
                        touchmove: function ($event) {
                          $event.preventDefault()
                          return _vm.chartMouseMove.apply(null, arguments)
                        },
                        wheel: function ($event) {
                          $event.preventDefault()
                          return _vm.chartWheel.apply(null, arguments)
                        },
                      },
                    },
                    [_c("chart")],
                    1
                  ),
                  _vm._v(" "),
                  _vm.fixedCols.length
                    ? _c(
                        "div",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.root.state.options.taskList.display,
                              expression: "root.state.options.taskList.display",
                            },
                          ],
                          ref: "taskList",
                          staticClass: "gantt-elastic__task-list-container",
                          style: {
                            ..._vm.root.style["task-list-container"],
                            width: _vm.getFixedWidth,
                            height:
                              _vm.root.state.options.height -
                              _vm.hiddenRowsHeight +
                              "px",
                          },
                        },
                        [_c("task-list-fixed")],
                        1
                      )
                    : _vm._e(),
                ]
              ),
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              ref: "chartScrollContainerVertical",
              staticClass:
                "gantt-elastic__chart-scroll-container gantt-elastic__chart-scroll-container--vertical",
              style: {
                ..._vm.root.style["chart-scroll-container"],
                ..._vm.root.style["chart-scroll-container--vertical"],
                ..._vm.verticalStyle,
              },
              on: { scroll: _vm.onVerticalScroll },
            },
            [
              _c("div", {
                staticClass: "gantt-elastic__chart-scroll--vertical",
                style: {
                  width: "1px",
                  height: _vm.root.state.options.allVisibleTasksHeight + "px",
                },
              }),
            ]
          ),
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          ref: "chartScrollContainerHorizontal",
          staticClass:
            "gantt-elastic__chart-scroll-container gantt-elastic__chart-scroll-container--horizontal",
          style: {
            ..._vm.root.style["chart-scroll-container"],
            ..._vm.root.style["chart-scroll-container--horizontal"],
            marginLeft: _vm.getMarginLeft,
            marginRight: _vm.getMarginRight,
          },
          on: { scroll: _vm.onHorizontalScroll },
        },
        [
          _c("div", {
            staticClass: "gantt-elastic__chart-scroll--horizontal",
            style: {
              height: "1px",
              width: _vm.root.state.options.width + "px",
            },
          }),
        ]
      ),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/TaskList/ItemColumn.vue?vue&type=template&id=cb5a6c96":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--5!./node_modules/vue-loader/lib??vue-loader-options!./src/components/TaskList/ItemColumn.vue?vue&type=template&id=cb5a6c96 ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c
  return _c(
    "div",
    {
      staticClass: "gantt-elastic__task-list-item-column",
      style: _vm.itemColumnStyle,
    },
    [
      _c(
        "div",
        {
          staticClass: "gantt-elastic__task-list-item-value-wrapper",
          style: _vm.wrapperStyle,
        },
        [
          _vm._t("default"),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "gantt-elastic__task-list-item-value-container",
              style: _vm.containerStyle,
            },
            [
              !_vm.html && !_vm.column.render
                ? _c(
                    "div",
                    {
                      staticClass: "gantt-elastic__task-list-item-value",
                      style: _vm.valueStyle,
                      on: {
                        click: function ($event) {
                          return _vm.emitEvent("click", $event)
                        },
                        mouseenter: function ($event) {
                          return _vm.emitEvent("mouseenter", $event)
                        },
                        mouseover: function ($event) {
                          return _vm.emitEvent("mouseover", $event)
                        },
                        mouseout: function ($event) {
                          return _vm.emitEvent("mouseout", $event)
                        },
                        mousemove: function ($event) {
                          return _vm.emitEvent("mousemove", $event)
                        },
                        mousedown: function ($event) {
                          return _vm.emitEvent("mousedown", $event)
                        },
                        mouseup: function ($event) {
                          return _vm.emitEvent("mouseup", $event)
                        },
                        mousewheel: function ($event) {
                          return _vm.emitEvent("mousewheel", $event)
                        },
                        touchstart: function ($event) {
                          return _vm.emitEvent("touchstart", $event)
                        },
                        touchmove: function ($event) {
                          return _vm.emitEvent("touchmove", $event)
                        },
                        touchend: function ($event) {
                          return _vm.emitEvent("touchend", $event)
                        },
                      },
                    },
                    [_vm._v("\n        " + _vm._s(_vm.value) + "\n      ")]
                  )
                : _vm.column.render
                ? _c("Render", {
                    attrs: {
                      render: () => _vm.column.render(_vm.value, _vm.task),
                    },
                  })
                : _c("div", {
                    staticClass: "gantt-elastic__task-list-item-value",
                    style: _vm.valueStyle,
                    domProps: { innerHTML: _vm._s(_vm.value) },
                    on: {
                      click: function ($event) {
                        return _vm.emitEvent("click", $event)
                      },
                      mouseenter: function ($event) {
                        return _vm.emitEvent("mouseenter", $event)
                      },
                      mouseover: function ($event) {
                        return _vm.emitEvent("mouseover", $event)
                      },
                      mouseout: function ($event) {
                        return _vm.emitEvent("mouseout", $event)
                      },
                      mousemove: function ($event) {
                        return _vm.emitEvent("mousemove", $event)
                      },
                      mousedown: function ($event) {
                        return _vm.emitEvent("mousedown", $event)
                      },
                      mouseup: function ($event) {
                        return _vm.emitEvent("mouseup", $event)
                      },
                      mousewheel: function ($event) {
                        return _vm.emitEvent("mousewheel", $event)
                      },
                      touchstart: function ($event) {
                        return _vm.emitEvent("touchstart", $event)
                      },
                      touchmove: function ($event) {
                        return _vm.emitEvent("touchmove", $event)
                      },
                      touchend: function ($event) {
                        return _vm.emitEvent("touchend", $event)
                      },
                    },
                  }),
            ],
            1
          ),
        ],
        2
      ),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/TaskList/TaskList.vue?vue&type=template&id=6e11f12f":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--5!./node_modules/vue-loader/lib??vue-loader-options!./src/components/TaskList/TaskList.vue?vue&type=template&id=6e11f12f ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c
  return _c(
    "div",
    {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.root.state.options.taskList.display,
          expression: "root.state.options.taskList.display",
        },
      ],
      ref: "taskListWrapper",
      staticClass: "gantt-elastic__task-list-wrapper",
      style: {
        ..._vm.root.style["task-list-wrapper"],
        width: "100%",
        height: "100%",
      },
    },
    [
      _c(
        "div",
        {
          ref: "taskList",
          staticClass: "gantt-elastic__task-list",
          style: { ..._vm.root.style["task-list"] },
        },
        [
          _c("task-list-header"),
          _vm._v(" "),
          _c(
            "div",
            {
              ref: "taskListItems",
              staticClass: "gantt-elastic__task-list-items",
              style: {
                ..._vm.root.style["task-list-items"],
                height: _vm.root.state.options.rowsHeight + "px",
              },
            },
            _vm._l(_vm.showTasks, function (task) {
              return _c("task-list-item", {
                key: task.id,
                attrs: { task: task },
              })
            }),
            1
          ),
        ],
        1
      ),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/TaskList/TaskListHeader.vue?vue&type=template&id=aefdd7c8":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--5!./node_modules/vue-loader/lib??vue-loader-options!./src/components/TaskList/TaskListHeader.vue?vue&type=template&id=aefdd7c8 ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c
  return _c(
    "div",
    {
      staticClass: "gantt-elastic__task-list-header",
      style: {
        ..._vm.root.style["task-list-header"],
        height: `${_vm.root.state.options.calendar.height}px`,
        "margin-bottom": `${_vm.root.state.options.calendar.gap}px`,
      },
    },
    _vm._l(_vm.root.getTaskListColumns, function (column) {
      return _c(
        "div",
        {
          key: column._id,
          staticClass: "gantt-elastic__task-list-header-column",
          style: {
            ..._vm.root.style["task-list-header-column"],
            ...column.style["task-list-header-column"],
            ..._vm.getStyle(column),
          },
        },
        [
          column.expander
            ? _c("task-list-expander", {
                attrs: {
                  tasks: _vm.collapsible,
                  options: _vm.root.state.options.taskList.expander,
                },
              })
            : _vm._e(),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "gantt-elastic__task-list-header-label",
              style: {
                ..._vm.root.style["task-list-header-label"],
                ...column.style["task-list-header-label"],
              },
              attrs: { column: column },
              on: { mouseup: _vm.resizerMouseUp },
            },
            [_vm._v("\n      " + _vm._s(column.label) + "\n    ")]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "gantt-elastic__task-list-header-resizer-wrapper",
              style: {
                ..._vm.root.style["task-list-header-resizer-wrapper"],
                ...column.style["task-list-header-resizer-wrapper"],
              },
              attrs: { column: column },
              on: {
                mousedown: function ($event) {
                  return _vm.resizerMouseDown($event, column)
                },
              },
            },
            [
              _c(
                "div",
                {
                  staticClass: "gantt-elastic__task-list-header-resizer",
                  style: {
                    ..._vm.root.style["task-list-header-resizer"],
                    ...column.style["task-list-header-resizer"],
                  },
                },
                [
                  _c("div", {
                    staticClass: "gantt-elastic__task-list-header-resizer-dot",
                    style: {
                      ..._vm.root.style["task-list-header-resizer-dot"],
                      ...column.style["task-list-header-resizer-dot"],
                    },
                  }),
                  _vm._v(" "),
                  _c("div", {
                    staticClass: "gantt-elastic__task-list-header-resizer-dot",
                    style: {
                      ..._vm.root.style["task-list-header-resizer-dot"],
                      ...column.style["task-list-header-resizer-dot"],
                    },
                  }),
                  _vm._v(" "),
                  _c("div", {
                    staticClass: "gantt-elastic__task-list-header-resizer-dot",
                    style: {
                      ..._vm.root.style["task-list-header-resizer-dot"],
                      ...column.style["task-list-header-resizer-dot"],
                    },
                  }),
                ]
              ),
            ]
          ),
        ],
        1
      )
    }),
    0
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/TaskList/TaskListItem.vue?vue&type=template&id=9716293c":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--5!./node_modules/vue-loader/lib??vue-loader-options!./src/components/TaskList/TaskListItem.vue?vue&type=template&id=9716293c ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c
  return _c(
    "div",
    {
      staticClass: "gantt-elastic__task-list-item",
      style: { ..._vm.root.style["task-list-item"] },
      on: { click: _vm.handleRow },
    },
    _vm._l(_vm.columns, function (column) {
      return _c(
        "item-column",
        { key: column._id, attrs: { column: column, task: _vm.task } },
        [
          column.expander
            ? _c("task-list-expander", {
                attrs: {
                  tasks: [_vm.task],
                  options: _vm.root.state.options.taskList.expander,
                  type: "taskList",
                },
              })
            : _vm._e(),
        ],
        1
      )
    }),
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/TaskListFixed/ItemColumn.vue?vue&type=template&id=18564f12":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--5!./node_modules/vue-loader/lib??vue-loader-options!./src/components/TaskListFixed/ItemColumn.vue?vue&type=template&id=18564f12 ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c
  return _c(
    "div",
    {
      staticClass: "gantt-elastic__task-list-item-column",
      style: _vm.itemColumnStyle,
    },
    [
      _c(
        "div",
        {
          staticClass: "gantt-elastic__task-list-item-value-wrapper",
          style: _vm.wrapperStyle,
        },
        [
          _vm._t("default"),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "gantt-elastic__task-list-item-value-container",
              style: _vm.containerStyle,
            },
            [
              !_vm.html && !_vm.column.render
                ? _c(
                    "div",
                    {
                      staticClass: "gantt-elastic__task-list-item-value",
                      style: _vm.valueStyle,
                      on: {
                        click: function ($event) {
                          return _vm.emitEvent("click", $event)
                        },
                        mouseenter: function ($event) {
                          return _vm.emitEvent("mouseenter", $event)
                        },
                        mouseover: function ($event) {
                          return _vm.emitEvent("mouseover", $event)
                        },
                        mouseout: function ($event) {
                          return _vm.emitEvent("mouseout", $event)
                        },
                        mousemove: function ($event) {
                          return _vm.emitEvent("mousemove", $event)
                        },
                        mousedown: function ($event) {
                          return _vm.emitEvent("mousedown", $event)
                        },
                        mouseup: function ($event) {
                          return _vm.emitEvent("mouseup", $event)
                        },
                        mousewheel: function ($event) {
                          return _vm.emitEvent("mousewheel", $event)
                        },
                        touchstart: function ($event) {
                          return _vm.emitEvent("touchstart", $event)
                        },
                        touchmove: function ($event) {
                          return _vm.emitEvent("touchmove", $event)
                        },
                        touchend: function ($event) {
                          return _vm.emitEvent("touchend", $event)
                        },
                      },
                    },
                    [_vm._v("\n        " + _vm._s(_vm.value) + "\n      ")]
                  )
                : _vm.column.render
                ? _c("Render", {
                    attrs: {
                      render: () => _vm.column.render(_vm.value, _vm.task),
                    },
                  })
                : _c("div", {
                    staticClass: "gantt-elastic__task-list-item-value",
                    style: _vm.valueStyle,
                    domProps: { innerHTML: _vm._s(_vm.value) },
                    on: {
                      click: function ($event) {
                        return _vm.emitEvent("click", $event)
                      },
                      mouseenter: function ($event) {
                        return _vm.emitEvent("mouseenter", $event)
                      },
                      mouseover: function ($event) {
                        return _vm.emitEvent("mouseover", $event)
                      },
                      mouseout: function ($event) {
                        return _vm.emitEvent("mouseout", $event)
                      },
                      mousemove: function ($event) {
                        return _vm.emitEvent("mousemove", $event)
                      },
                      mousedown: function ($event) {
                        return _vm.emitEvent("mousedown", $event)
                      },
                      mouseup: function ($event) {
                        return _vm.emitEvent("mouseup", $event)
                      },
                      mousewheel: function ($event) {
                        return _vm.emitEvent("mousewheel", $event)
                      },
                      touchstart: function ($event) {
                        return _vm.emitEvent("touchstart", $event)
                      },
                      touchmove: function ($event) {
                        return _vm.emitEvent("touchmove", $event)
                      },
                      touchend: function ($event) {
                        return _vm.emitEvent("touchend", $event)
                      },
                    },
                  }),
            ],
            1
          ),
        ],
        2
      ),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/TaskListFixed/TaskList.vue?vue&type=template&id=da266f1e":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--5!./node_modules/vue-loader/lib??vue-loader-options!./src/components/TaskListFixed/TaskList.vue?vue&type=template&id=da266f1e ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c
  return _c(
    "div",
    {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.root.state.options.taskList.display,
          expression: "root.state.options.taskList.display",
        },
      ],
      ref: "taskListWrapper",
      staticClass: "gantt-elastic__task-list-wrapper",
      style: {
        ..._vm.root.style["task-list-wrapper"],
        width: "100%",
        height: "100%",
      },
    },
    [
      _c(
        "div",
        {
          ref: "taskList",
          staticClass: "gantt-elastic__task-list",
          style: { ..._vm.root.style["task-list"] },
        },
        [
          _c("task-list-header"),
          _vm._v(" "),
          _c(
            "div",
            {
              ref: "taskListItems",
              staticClass: "gantt-elastic__task-list-items",
              style: {
                ..._vm.root.style["task-list-items"],
                height: _vm.root.state.options.rowsHeight + "px",
              },
            },
            _vm._l(_vm.showTasks, function (task) {
              return _c("task-list-item", {
                key: task.id,
                attrs: { task: task },
              })
            }),
            1
          ),
        ],
        1
      ),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/TaskListFixed/TaskListHeader.vue?vue&type=template&id=40f9f1de":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--5!./node_modules/vue-loader/lib??vue-loader-options!./src/components/TaskListFixed/TaskListHeader.vue?vue&type=template&id=40f9f1de ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c
  return _c(
    "div",
    {
      staticClass: "gantt-elastic__task-list-header",
      style: {
        ..._vm.root.style["task-list-header"],
        height: `${_vm.root.state.options.calendar.height}px`,
        "margin-bottom": `${_vm.root.state.options.calendar.gap}px`,
      },
    },
    _vm._l(_vm.columns, function (column) {
      return _c(
        "div",
        {
          key: column._id,
          staticClass: "gantt-elastic__task-list-header-column",
          style: {
            ..._vm.root.style["task-list-header-column"],
            ...column.style["task-list-header-column"],
            ..._vm.getStyle(column),
          },
        },
        [
          column.expander
            ? _c("task-list-expander", {
                attrs: {
                  tasks: _vm.collapsible,
                  options: _vm.root.state.options.taskList.expander,
                },
              })
            : _vm._e(),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "gantt-elastic__task-list-header-label",
              style: {
                ..._vm.root.style["task-list-header-label"],
                ...column.style["task-list-header-label"],
              },
              attrs: { column: column },
            },
            [_vm._v("\n      " + _vm._s(column.label) + "\n    ")]
          ),
        ],
        1
      )
    }),
    0
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/TaskListFixed/TaskListItem.vue?vue&type=template&id=94a35cb8":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--5!./node_modules/vue-loader/lib??vue-loader-options!./src/components/TaskListFixed/TaskListItem.vue?vue&type=template&id=94a35cb8 ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c
  return _c(
    "div",
    {
      staticClass: "gantt-elastic__task-list-item",
      style: { ..._vm.root.style["task-list-item"] },
    },
    _vm._l(_vm.columns, function (column) {
      return _c(
        "item-column",
        { key: column._id, attrs: { column: column, task: _vm.task } },
        [
          column.expander
            ? _c("task-list-expander", {
                attrs: {
                  tasks: [_vm.task],
                  options: _vm.root.state.options.taskList.expander,
                  type: "taskList",
                },
              })
            : _vm._e(),
        ],
        1
      )
    }),
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/GanttElastic.vue?vue&type=style&index=0&id=02c6304c&lang=css":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/GanttElastic.vue?vue&type=style&index=0&id=02c6304c&lang=css ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../node_modules/css-loader!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib??vue-loader-options!./GanttElastic.vue?vue&type=style&index=0&id=02c6304c&lang=css */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/GanttElastic.vue?vue&type=style&index=0&id=02c6304c&lang=css");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("c463bd1e", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/lib/addStylesClient.js":
/*!**************************************************************!*\
  !*** ./node_modules/vue-style-loader/lib/addStylesClient.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addStylesClient; });
/* harmony import */ var _listToStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listToStyles */ "./node_modules/vue-style-loader/lib/listToStyles.js");
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = Object(_listToStyles__WEBPACK_IMPORTED_MODULE_0__["default"])(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = Object(_listToStyles__WEBPACK_IMPORTED_MODULE_0__["default"])(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "./node_modules/vue-style-loader/lib/listToStyles.js":
/*!***********************************************************!*\
  !*** ./node_modules/vue-style-loader/lib/listToStyles.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return listToStyles; });
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/GanttElastic.vue":
/*!******************************!*\
  !*** ./src/GanttElastic.vue ***!
  \******************************/
/*! exports provided: mergeDeep, mergeDeepReactive, notEqualDeep, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GanttElastic_vue_vue_type_template_id_02c6304c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GanttElastic.vue?vue&type=template&id=02c6304c */ "./src/GanttElastic.vue?vue&type=template&id=02c6304c");
/* harmony import */ var _GanttElastic_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GanttElastic.vue?vue&type=script&lang=js */ "./src/GanttElastic.vue?vue&type=script&lang=js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeDeep", function() { return _GanttElastic_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["mergeDeep"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeDeepReactive", function() { return _GanttElastic_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["mergeDeepReactive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "notEqualDeep", function() { return _GanttElastic_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["notEqualDeep"]; });

/* harmony import */ var _GanttElastic_vue_vue_type_style_index_0_id_02c6304c_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GanttElastic.vue?vue&type=style&index=0&id=02c6304c&lang=css */ "./src/GanttElastic.vue?vue&type=style&index=0&id=02c6304c&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _GanttElastic_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _GanttElastic_vue_vue_type_template_id_02c6304c__WEBPACK_IMPORTED_MODULE_0__["render"],
  _GanttElastic_vue_vue_type_template_id_02c6304c__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/GanttElastic.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/GanttElastic.vue?vue&type=script&lang=js":
/*!******************************************************!*\
  !*** ./src/GanttElastic.vue?vue&type=script&lang=js ***!
  \******************************************************/
/*! exports provided: default, mergeDeep, mergeDeepReactive, notEqualDeep */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_GanttElastic_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib??vue-loader-options!./GanttElastic.vue?vue&type=script&lang=js */ "./node_modules/vue-loader/lib/index.js?!./src/GanttElastic.vue?vue&type=script&lang=js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeDeep", function() { return _node_modules_vue_loader_lib_index_js_vue_loader_options_GanttElastic_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["mergeDeep"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeDeepReactive", function() { return _node_modules_vue_loader_lib_index_js_vue_loader_options_GanttElastic_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["mergeDeepReactive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "notEqualDeep", function() { return _node_modules_vue_loader_lib_index_js_vue_loader_options_GanttElastic_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["notEqualDeep"]; });

 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_GanttElastic_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/GanttElastic.vue?vue&type=style&index=0&id=02c6304c&lang=css":
/*!**************************************************************************!*\
  !*** ./src/GanttElastic.vue?vue&type=style&index=0&id=02c6304c&lang=css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_GanttElastic_vue_vue_type_style_index_0_id_02c6304c_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-style-loader!../node_modules/css-loader!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib??vue-loader-options!./GanttElastic.vue?vue&type=style&index=0&id=02c6304c&lang=css */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/GanttElastic.vue?vue&type=style&index=0&id=02c6304c&lang=css");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_GanttElastic_vue_vue_type_style_index_0_id_02c6304c_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_GanttElastic_vue_vue_type_style_index_0_id_02c6304c_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_GanttElastic_vue_vue_type_style_index_0_id_02c6304c_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_GanttElastic_vue_vue_type_style_index_0_id_02c6304c_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/GanttElastic.vue?vue&type=template&id=02c6304c":
/*!************************************************************!*\
  !*** ./src/GanttElastic.vue?vue&type=template&id=02c6304c ***!
  \************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_ref_5_node_modules_vue_loader_lib_index_js_vue_loader_options_GanttElastic_vue_vue_type_template_id_02c6304c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--5!../node_modules/vue-loader/lib??vue-loader-options!./GanttElastic.vue?vue&type=template&id=02c6304c */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/GanttElastic.vue?vue&type=template&id=02c6304c");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_ref_5_node_modules_vue_loader_lib_index_js_vue_loader_options_GanttElastic_vue_vue_type_template_id_02c6304c__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_ref_5_node_modules_vue_loader_lib_index_js_vue_loader_options_GanttElastic_vue_vue_type_template_id_02c6304c__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/Calendar/Calendar.vue":
/*!**********************************************!*\
  !*** ./src/components/Calendar/Calendar.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Calendar_vue_vue_type_template_id_dee108e2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Calendar.vue?vue&type=template&id=dee108e2 */ "./src/components/Calendar/Calendar.vue?vue&type=template&id=dee108e2");
/* harmony import */ var _Calendar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Calendar.vue?vue&type=script&lang=js */ "./src/components/Calendar/Calendar.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Calendar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Calendar_vue_vue_type_template_id_dee108e2__WEBPACK_IMPORTED_MODULE_0__["render"],
  _Calendar_vue_vue_type_template_id_dee108e2__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/Calendar/Calendar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/Calendar/Calendar.vue?vue&type=script&lang=js":
/*!**********************************************************************!*\
  !*** ./src/components/Calendar/Calendar.vue?vue&type=script&lang=js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_Calendar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./Calendar.vue?vue&type=script&lang=js */ "./node_modules/vue-loader/lib/index.js?!./src/components/Calendar/Calendar.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_Calendar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/Calendar/Calendar.vue?vue&type=template&id=dee108e2":
/*!****************************************************************************!*\
  !*** ./src/components/Calendar/Calendar.vue?vue&type=template&id=dee108e2 ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_ref_5_node_modules_vue_loader_lib_index_js_vue_loader_options_Calendar_vue_vue_type_template_id_dee108e2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--5!../../../node_modules/vue-loader/lib??vue-loader-options!./Calendar.vue?vue&type=template&id=dee108e2 */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Calendar/Calendar.vue?vue&type=template&id=dee108e2");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_ref_5_node_modules_vue_loader_lib_index_js_vue_loader_options_Calendar_vue_vue_type_template_id_dee108e2__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_ref_5_node_modules_vue_loader_lib_index_js_vue_loader_options_Calendar_vue_vue_type_template_id_dee108e2__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/Calendar/CalendarRow.vue":
/*!*************************************************!*\
  !*** ./src/components/Calendar/CalendarRow.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CalendarRow_vue_vue_type_template_id_0daf06fb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CalendarRow.vue?vue&type=template&id=0daf06fb */ "./src/components/Calendar/CalendarRow.vue?vue&type=template&id=0daf06fb");
/* harmony import */ var _CalendarRow_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CalendarRow.vue?vue&type=script&lang=js */ "./src/components/Calendar/CalendarRow.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CalendarRow_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _CalendarRow_vue_vue_type_template_id_0daf06fb__WEBPACK_IMPORTED_MODULE_0__["render"],
  _CalendarRow_vue_vue_type_template_id_0daf06fb__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/Calendar/CalendarRow.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/Calendar/CalendarRow.vue?vue&type=script&lang=js":
/*!*************************************************************************!*\
  !*** ./src/components/Calendar/CalendarRow.vue?vue&type=script&lang=js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_CalendarRow_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./CalendarRow.vue?vue&type=script&lang=js */ "./node_modules/vue-loader/lib/index.js?!./src/components/Calendar/CalendarRow.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_CalendarRow_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/Calendar/CalendarRow.vue?vue&type=template&id=0daf06fb":
/*!*******************************************************************************!*\
  !*** ./src/components/Calendar/CalendarRow.vue?vue&type=template&id=0daf06fb ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_ref_5_node_modules_vue_loader_lib_index_js_vue_loader_options_CalendarRow_vue_vue_type_template_id_0daf06fb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--5!../../../node_modules/vue-loader/lib??vue-loader-options!./CalendarRow.vue?vue&type=template&id=0daf06fb */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Calendar/CalendarRow.vue?vue&type=template&id=0daf06fb");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_ref_5_node_modules_vue_loader_lib_index_js_vue_loader_options_CalendarRow_vue_vue_type_template_id_0daf06fb__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_ref_5_node_modules_vue_loader_lib_index_js_vue_loader_options_CalendarRow_vue_vue_type_template_id_0daf06fb__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/Chart/Chart.vue":
/*!****************************************!*\
  !*** ./src/components/Chart/Chart.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Chart_vue_vue_type_template_id_67c3f5cd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Chart.vue?vue&type=template&id=67c3f5cd */ "./src/components/Chart/Chart.vue?vue&type=template&id=67c3f5cd");
/* harmony import */ var _Chart_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Chart.vue?vue&type=script&lang=js */ "./src/components/Chart/Chart.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Chart_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Chart_vue_vue_type_template_id_67c3f5cd__WEBPACK_IMPORTED_MODULE_0__["render"],
  _Chart_vue_vue_type_template_id_67c3f5cd__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/Chart/Chart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/Chart/Chart.vue?vue&type=script&lang=js":
/*!****************************************************************!*\
  !*** ./src/components/Chart/Chart.vue?vue&type=script&lang=js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_Chart_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./Chart.vue?vue&type=script&lang=js */ "./node_modules/vue-loader/lib/index.js?!./src/components/Chart/Chart.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_Chart_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/Chart/Chart.vue?vue&type=template&id=67c3f5cd":
/*!**********************************************************************!*\
  !*** ./src/components/Chart/Chart.vue?vue&type=template&id=67c3f5cd ***!
  \**********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_ref_5_node_modules_vue_loader_lib_index_js_vue_loader_options_Chart_vue_vue_type_template_id_67c3f5cd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--5!../../../node_modules/vue-loader/lib??vue-loader-options!./Chart.vue?vue&type=template&id=67c3f5cd */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Chart/Chart.vue?vue&type=template&id=67c3f5cd");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_ref_5_node_modules_vue_loader_lib_index_js_vue_loader_options_Chart_vue_vue_type_template_id_67c3f5cd__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_ref_5_node_modules_vue_loader_lib_index_js_vue_loader_options_Chart_vue_vue_type_template_id_67c3f5cd__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/Chart/DaysHighlight.vue":
/*!************************************************!*\
  !*** ./src/components/Chart/DaysHighlight.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DaysHighlight_vue_vue_type_template_id_1bfe64e8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DaysHighlight.vue?vue&type=template&id=1bfe64e8 */ "./src/components/Chart/DaysHighlight.vue?vue&type=template&id=1bfe64e8");
/* harmony import */ var _DaysHighlight_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DaysHighlight.vue?vue&type=script&lang=js */ "./src/components/Chart/DaysHighlight.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DaysHighlight_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _DaysHighlight_vue_vue_type_template_id_1bfe64e8__WEBPACK_IMPORTED_MODULE_0__["render"],
  _DaysHighlight_vue_vue_type_template_id_1bfe64e8__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/Chart/DaysHighlight.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/Chart/DaysHighlight.vue?vue&type=script&lang=js":
/*!************************************************************************!*\
  !*** ./src/components/Chart/DaysHighlight.vue?vue&type=script&lang=js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_DaysHighlight_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./DaysHighlight.vue?vue&type=script&lang=js */ "./node_modules/vue-loader/lib/index.js?!./src/components/Chart/DaysHighlight.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_DaysHighlight_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/Chart/DaysHighlight.vue?vue&type=template&id=1bfe64e8":
/*!******************************************************************************!*\
  !*** ./src/components/Chart/DaysHighlight.vue?vue&type=template&id=1bfe64e8 ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_ref_5_node_modules_vue_loader_lib_index_js_vue_loader_options_DaysHighlight_vue_vue_type_template_id_1bfe64e8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--5!../../../node_modules/vue-loader/lib??vue-loader-options!./DaysHighlight.vue?vue&type=template&id=1bfe64e8 */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Chart/DaysHighlight.vue?vue&type=template&id=1bfe64e8");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_ref_5_node_modules_vue_loader_lib_index_js_vue_loader_options_DaysHighlight_vue_vue_type_template_id_1bfe64e8__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_ref_5_node_modules_vue_loader_lib_index_js_vue_loader_options_DaysHighlight_vue_vue_type_template_id_1bfe64e8__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/Chart/DependencyLines.vue":
/*!**************************************************!*\
  !*** ./src/components/Chart/DependencyLines.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DependencyLines_vue_vue_type_template_id_f1cbf6ba__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DependencyLines.vue?vue&type=template&id=f1cbf6ba */ "./src/components/Chart/DependencyLines.vue?vue&type=template&id=f1cbf6ba");
/* harmony import */ var _DependencyLines_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DependencyLines.vue?vue&type=script&lang=js */ "./src/components/Chart/DependencyLines.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DependencyLines_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _DependencyLines_vue_vue_type_template_id_f1cbf6ba__WEBPACK_IMPORTED_MODULE_0__["render"],
  _DependencyLines_vue_vue_type_template_id_f1cbf6ba__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/Chart/DependencyLines.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/Chart/DependencyLines.vue?vue&type=script&lang=js":
/*!**************************************************************************!*\
  !*** ./src/components/Chart/DependencyLines.vue?vue&type=script&lang=js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_DependencyLines_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./DependencyLines.vue?vue&type=script&lang=js */ "./node_modules/vue-loader/lib/index.js?!./src/components/Chart/DependencyLines.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_DependencyLines_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/Chart/DependencyLines.vue?vue&type=template&id=f1cbf6ba":
/*!********************************************************************************!*\
  !*** ./src/components/Chart/DependencyLines.vue?vue&type=template&id=f1cbf6ba ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_ref_5_node_modules_vue_loader_lib_index_js_vue_loader_options_DependencyLines_vue_vue_type_template_id_f1cbf6ba__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--5!../../../node_modules/vue-loader/lib??vue-loader-options!./DependencyLines.vue?vue&type=template&id=f1cbf6ba */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Chart/DependencyLines.vue?vue&type=template&id=f1cbf6ba");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_ref_5_node_modules_vue_loader_lib_index_js_vue_loader_options_DependencyLines_vue_vue_type_template_id_f1cbf6ba__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_ref_5_node_modules_vue_loader_lib_index_js_vue_loader_options_DependencyLines_vue_vue_type_template_id_f1cbf6ba__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/Chart/Grid.vue":
/*!***************************************!*\
  !*** ./src/components/Chart/Grid.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Grid_vue_vue_type_template_id_2bf979a7__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Grid.vue?vue&type=template&id=2bf979a7 */ "./src/components/Chart/Grid.vue?vue&type=template&id=2bf979a7");
/* harmony import */ var _Grid_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Grid.vue?vue&type=script&lang=js */ "./src/components/Chart/Grid.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Grid_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Grid_vue_vue_type_template_id_2bf979a7__WEBPACK_IMPORTED_MODULE_0__["render"],
  _Grid_vue_vue_type_template_id_2bf979a7__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/Chart/Grid.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/Chart/Grid.vue?vue&type=script&lang=js":
/*!***************************************************************!*\
  !*** ./src/components/Chart/Grid.vue?vue&type=script&lang=js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_Grid_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./Grid.vue?vue&type=script&lang=js */ "./node_modules/vue-loader/lib/index.js?!./src/components/Chart/Grid.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_Grid_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/Chart/Grid.vue?vue&type=template&id=2bf979a7":
/*!*********************************************************************!*\
  !*** ./src/components/Chart/Grid.vue?vue&type=template&id=2bf979a7 ***!
  \*********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_ref_5_node_modules_vue_loader_lib_index_js_vue_loader_options_Grid_vue_vue_type_template_id_2bf979a7__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--5!../../../node_modules/vue-loader/lib??vue-loader-options!./Grid.vue?vue&type=template&id=2bf979a7 */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Chart/Grid.vue?vue&type=template&id=2bf979a7");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_ref_5_node_modules_vue_loader_lib_index_js_vue_loader_options_Grid_vue_vue_type_template_id_2bf979a7__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_ref_5_node_modules_vue_loader_lib_index_js_vue_loader_options_Grid_vue_vue_type_template_id_2bf979a7__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/Chart/ProgressBar.vue":
/*!**********************************************!*\
  !*** ./src/components/Chart/ProgressBar.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProgressBar_vue_vue_type_template_id_4bc39355__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProgressBar.vue?vue&type=template&id=4bc39355 */ "./src/components/Chart/ProgressBar.vue?vue&type=template&id=4bc39355");
/* harmony import */ var _ProgressBar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProgressBar.vue?vue&type=script&lang=js */ "./src/components/Chart/ProgressBar.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProgressBar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProgressBar_vue_vue_type_template_id_4bc39355__WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProgressBar_vue_vue_type_template_id_4bc39355__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/Chart/ProgressBar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/Chart/ProgressBar.vue?vue&type=script&lang=js":
/*!**********************************************************************!*\
  !*** ./src/components/Chart/ProgressBar.vue?vue&type=script&lang=js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_ProgressBar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./ProgressBar.vue?vue&type=script&lang=js */ "./node_modules/vue-loader/lib/index.js?!./src/components/Chart/ProgressBar.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_ProgressBar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/Chart/ProgressBar.vue?vue&type=template&id=4bc39355":
/*!****************************************************************************!*\
  !*** ./src/components/Chart/ProgressBar.vue?vue&type=template&id=4bc39355 ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_ref_5_node_modules_vue_loader_lib_index_js_vue_loader_options_ProgressBar_vue_vue_type_template_id_4bc39355__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--5!../../../node_modules/vue-loader/lib??vue-loader-options!./ProgressBar.vue?vue&type=template&id=4bc39355 */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Chart/ProgressBar.vue?vue&type=template&id=4bc39355");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_ref_5_node_modules_vue_loader_lib_index_js_vue_loader_options_ProgressBar_vue_vue_type_template_id_4bc39355__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_ref_5_node_modules_vue_loader_lib_index_js_vue_loader_options_ProgressBar_vue_vue_type_template_id_4bc39355__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/Chart/Row/Milestone.vue":
/*!************************************************!*\
  !*** ./src/components/Chart/Row/Milestone.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Milestone_vue_vue_type_template_id_3013006c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Milestone.vue?vue&type=template&id=3013006c */ "./src/components/Chart/Row/Milestone.vue?vue&type=template&id=3013006c");
/* harmony import */ var _Milestone_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Milestone.vue?vue&type=script&lang=js */ "./src/components/Chart/Row/Milestone.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Milestone_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Milestone_vue_vue_type_template_id_3013006c__WEBPACK_IMPORTED_MODULE_0__["render"],
  _Milestone_vue_vue_type_template_id_3013006c__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/Chart/Row/Milestone.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/Chart/Row/Milestone.vue?vue&type=script&lang=js":
/*!************************************************************************!*\
  !*** ./src/components/Chart/Row/Milestone.vue?vue&type=script&lang=js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_Milestone_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib??vue-loader-options!./Milestone.vue?vue&type=script&lang=js */ "./node_modules/vue-loader/lib/index.js?!./src/components/Chart/Row/Milestone.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_Milestone_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/Chart/Row/Milestone.vue?vue&type=template&id=3013006c":
/*!******************************************************************************!*\
  !*** ./src/components/Chart/Row/Milestone.vue?vue&type=template&id=3013006c ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_ref_5_node_modules_vue_loader_lib_index_js_vue_loader_options_Milestone_vue_vue_type_template_id_3013006c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--5!../../../../node_modules/vue-loader/lib??vue-loader-options!./Milestone.vue?vue&type=template&id=3013006c */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Chart/Row/Milestone.vue?vue&type=template&id=3013006c");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_ref_5_node_modules_vue_loader_lib_index_js_vue_loader_options_Milestone_vue_vue_type_template_id_3013006c__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_ref_5_node_modules_vue_loader_lib_index_js_vue_loader_options_Milestone_vue_vue_type_template_id_3013006c__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/Chart/Row/Project.vue":
/*!**********************************************!*\
  !*** ./src/components/Chart/Row/Project.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Project_vue_vue_type_template_id_077bbd73__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project.vue?vue&type=template&id=077bbd73 */ "./src/components/Chart/Row/Project.vue?vue&type=template&id=077bbd73");
/* harmony import */ var _Project_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Project.vue?vue&type=script&lang=js */ "./src/components/Chart/Row/Project.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Project_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Project_vue_vue_type_template_id_077bbd73__WEBPACK_IMPORTED_MODULE_0__["render"],
  _Project_vue_vue_type_template_id_077bbd73__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/Chart/Row/Project.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/Chart/Row/Project.vue?vue&type=script&lang=js":
/*!**********************************************************************!*\
  !*** ./src/components/Chart/Row/Project.vue?vue&type=script&lang=js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_Project_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib??vue-loader-options!./Project.vue?vue&type=script&lang=js */ "./node_modules/vue-loader/lib/index.js?!./src/components/Chart/Row/Project.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_Project_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/Chart/Row/Project.vue?vue&type=template&id=077bbd73":
/*!****************************************************************************!*\
  !*** ./src/components/Chart/Row/Project.vue?vue&type=template&id=077bbd73 ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_ref_5_node_modules_vue_loader_lib_index_js_vue_loader_options_Project_vue_vue_type_template_id_077bbd73__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--5!../../../../node_modules/vue-loader/lib??vue-loader-options!./Project.vue?vue&type=template&id=077bbd73 */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Chart/Row/Project.vue?vue&type=template&id=077bbd73");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_ref_5_node_modules_vue_loader_lib_index_js_vue_loader_options_Project_vue_vue_type_template_id_077bbd73__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_ref_5_node_modules_vue_loader_lib_index_js_vue_loader_options_Project_vue_vue_type_template_id_077bbd73__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/Chart/Row/Task.mixin.js":
/*!************************************************!*\
  !*** ./src/components/Chart/Row/Task.mixin.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * @fileoverview Task mixin
 * @license MIT
 * @author Rafal Pospiech <neuronet.io@gmail.com>
 * @package GanttElastic
 */

/* harmony default export */ __webpack_exports__["default"] = ({
  computed: {
    /**
     * Get view box
     *
     * @returns {string}
     */
    getViewBox() {
      const task = this.task;
      return `0 0 ${task.width} ${task.height}`;
    },

    /**
     * Get group transform
     *
     * @returns {string}
     */
    getGroupTransform() {
      return `translate(${this.task.x} ${this.task.y})`;
    },

    /**
     * Should we display expander?
     *
     * @returns {boolean}
     */
    displayExpander() {
      const expander = this.root.state.options.chart.expander;
      return expander.display || (expander.displayIfTaskListHidden && !this.root.state.options.taskList.display);
    }
  },
  methods: {
    /**
     * Emit event
     *
     * @param {string} eventName
     * @param {Event} event
     */
    emitEvent(eventName, event) {
      if (!this.root.state.options.scroll.scrolling) {
        this.root.$emit(`chart-${this.task.type}-${eventName}`, { event, data: this.task });
      }
    }
  }
});


/***/ }),

/***/ "./src/components/Chart/Row/Task.vue":
/*!*******************************************!*\
  !*** ./src/components/Chart/Row/Task.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Task_vue_vue_type_template_id_e9c23eca__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Task.vue?vue&type=template&id=e9c23eca */ "./src/components/Chart/Row/Task.vue?vue&type=template&id=e9c23eca");
/* harmony import */ var _Task_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Task.vue?vue&type=script&lang=js */ "./src/components/Chart/Row/Task.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Task_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Task_vue_vue_type_template_id_e9c23eca__WEBPACK_IMPORTED_MODULE_0__["render"],
  _Task_vue_vue_type_template_id_e9c23eca__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/Chart/Row/Task.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/Chart/Row/Task.vue?vue&type=script&lang=js":
/*!*******************************************************************!*\
  !*** ./src/components/Chart/Row/Task.vue?vue&type=script&lang=js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_Task_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib??vue-loader-options!./Task.vue?vue&type=script&lang=js */ "./node_modules/vue-loader/lib/index.js?!./src/components/Chart/Row/Task.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_Task_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/Chart/Row/Task.vue?vue&type=template&id=e9c23eca":
/*!*************************************************************************!*\
  !*** ./src/components/Chart/Row/Task.vue?vue&type=template&id=e9c23eca ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_ref_5_node_modules_vue_loader_lib_index_js_vue_loader_options_Task_vue_vue_type_template_id_e9c23eca__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--5!../../../../node_modules/vue-loader/lib??vue-loader-options!./Task.vue?vue&type=template&id=e9c23eca */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Chart/Row/Task.vue?vue&type=template&id=e9c23eca");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_ref_5_node_modules_vue_loader_lib_index_js_vue_loader_options_Task_vue_vue_type_template_id_e9c23eca__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_ref_5_node_modules_vue_loader_lib_index_js_vue_loader_options_Task_vue_vue_type_template_id_e9c23eca__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/Chart/Text.vue":
/*!***************************************!*\
  !*** ./src/components/Chart/Text.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Text_vue_vue_type_template_id_459c2fe4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Text.vue?vue&type=template&id=459c2fe4 */ "./src/components/Chart/Text.vue?vue&type=template&id=459c2fe4");
/* harmony import */ var _Text_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Text.vue?vue&type=script&lang=js */ "./src/components/Chart/Text.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Text_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Text_vue_vue_type_template_id_459c2fe4__WEBPACK_IMPORTED_MODULE_0__["render"],
  _Text_vue_vue_type_template_id_459c2fe4__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/Chart/Text.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/Chart/Text.vue?vue&type=script&lang=js":
/*!***************************************************************!*\
  !*** ./src/components/Chart/Text.vue?vue&type=script&lang=js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_Text_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./Text.vue?vue&type=script&lang=js */ "./node_modules/vue-loader/lib/index.js?!./src/components/Chart/Text.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_Text_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/Chart/Text.vue?vue&type=template&id=459c2fe4":
/*!*********************************************************************!*\
  !*** ./src/components/Chart/Text.vue?vue&type=template&id=459c2fe4 ***!
  \*********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_ref_5_node_modules_vue_loader_lib_index_js_vue_loader_options_Text_vue_vue_type_template_id_459c2fe4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--5!../../../node_modules/vue-loader/lib??vue-loader-options!./Text.vue?vue&type=template&id=459c2fe4 */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Chart/Text.vue?vue&type=template&id=459c2fe4");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_ref_5_node_modules_vue_loader_lib_index_js_vue_loader_options_Text_vue_vue_type_template_id_459c2fe4__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_ref_5_node_modules_vue_loader_lib_index_js_vue_loader_options_Text_vue_vue_type_template_id_459c2fe4__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/Expander.vue":
/*!*************************************!*\
  !*** ./src/components/Expander.vue ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Expander_vue_vue_type_template_id_09a21177__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Expander.vue?vue&type=template&id=09a21177 */ "./src/components/Expander.vue?vue&type=template&id=09a21177");
/* harmony import */ var _Expander_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Expander.vue?vue&type=script&lang=js */ "./src/components/Expander.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Expander_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Expander_vue_vue_type_template_id_09a21177__WEBPACK_IMPORTED_MODULE_0__["render"],
  _Expander_vue_vue_type_template_id_09a21177__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/Expander.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/Expander.vue?vue&type=script&lang=js":
/*!*************************************************************!*\
  !*** ./src/components/Expander.vue?vue&type=script&lang=js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_Expander_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib??vue-loader-options!./Expander.vue?vue&type=script&lang=js */ "./node_modules/vue-loader/lib/index.js?!./src/components/Expander.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_Expander_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/Expander.vue?vue&type=template&id=09a21177":
/*!*******************************************************************!*\
  !*** ./src/components/Expander.vue?vue&type=template&id=09a21177 ***!
  \*******************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_ref_5_node_modules_vue_loader_lib_index_js_vue_loader_options_Expander_vue_vue_type_template_id_09a21177__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--5!../../node_modules/vue-loader/lib??vue-loader-options!./Expander.vue?vue&type=template&id=09a21177 */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Expander.vue?vue&type=template&id=09a21177");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_ref_5_node_modules_vue_loader_lib_index_js_vue_loader_options_Expander_vue_vue_type_template_id_09a21177__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_ref_5_node_modules_vue_loader_lib_index_js_vue_loader_options_Expander_vue_vue_type_template_id_09a21177__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/MainView.vue":
/*!*************************************!*\
  !*** ./src/components/MainView.vue ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MainView_vue_vue_type_template_id_0bc4212e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MainView.vue?vue&type=template&id=0bc4212e */ "./src/components/MainView.vue?vue&type=template&id=0bc4212e");
/* harmony import */ var _MainView_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MainView.vue?vue&type=script&lang=js */ "./src/components/MainView.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MainView_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _MainView_vue_vue_type_template_id_0bc4212e__WEBPACK_IMPORTED_MODULE_0__["render"],
  _MainView_vue_vue_type_template_id_0bc4212e__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/MainView.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/MainView.vue?vue&type=script&lang=js":
/*!*************************************************************!*\
  !*** ./src/components/MainView.vue?vue&type=script&lang=js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_MainView_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib??vue-loader-options!./MainView.vue?vue&type=script&lang=js */ "./node_modules/vue-loader/lib/index.js?!./src/components/MainView.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_MainView_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/MainView.vue?vue&type=template&id=0bc4212e":
/*!*******************************************************************!*\
  !*** ./src/components/MainView.vue?vue&type=template&id=0bc4212e ***!
  \*******************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_ref_5_node_modules_vue_loader_lib_index_js_vue_loader_options_MainView_vue_vue_type_template_id_0bc4212e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--5!../../node_modules/vue-loader/lib??vue-loader-options!./MainView.vue?vue&type=template&id=0bc4212e */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/MainView.vue?vue&type=template&id=0bc4212e");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_ref_5_node_modules_vue_loader_lib_index_js_vue_loader_options_MainView_vue_vue_type_template_id_0bc4212e__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_ref_5_node_modules_vue_loader_lib_index_js_vue_loader_options_MainView_vue_vue_type_template_id_0bc4212e__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/Render/index.vue":
/*!*****************************************!*\
  !*** ./src/components/Render/index.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js */ "./src/components/Render/index.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns




/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/Render/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/Render/index.vue?vue&type=script&lang=js":
/*!*****************************************************************!*\
  !*** ./src/components/Render/index.vue?vue&type=script&lang=js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js */ "./node_modules/vue-loader/lib/index.js?!./src/components/Render/index.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/TaskList/ItemColumn.vue":
/*!************************************************!*\
  !*** ./src/components/TaskList/ItemColumn.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ItemColumn_vue_vue_type_template_id_cb5a6c96__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ItemColumn.vue?vue&type=template&id=cb5a6c96 */ "./src/components/TaskList/ItemColumn.vue?vue&type=template&id=cb5a6c96");
/* harmony import */ var _ItemColumn_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ItemColumn.vue?vue&type=script&lang=js */ "./src/components/TaskList/ItemColumn.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ItemColumn_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _ItemColumn_vue_vue_type_template_id_cb5a6c96__WEBPACK_IMPORTED_MODULE_0__["render"],
  _ItemColumn_vue_vue_type_template_id_cb5a6c96__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/TaskList/ItemColumn.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/TaskList/ItemColumn.vue?vue&type=script&lang=js":
/*!************************************************************************!*\
  !*** ./src/components/TaskList/ItemColumn.vue?vue&type=script&lang=js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_ItemColumn_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./ItemColumn.vue?vue&type=script&lang=js */ "./node_modules/vue-loader/lib/index.js?!./src/components/TaskList/ItemColumn.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemColumn_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/TaskList/ItemColumn.vue?vue&type=template&id=cb5a6c96":
/*!******************************************************************************!*\
  !*** ./src/components/TaskList/ItemColumn.vue?vue&type=template&id=cb5a6c96 ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_ref_5_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemColumn_vue_vue_type_template_id_cb5a6c96__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--5!../../../node_modules/vue-loader/lib??vue-loader-options!./ItemColumn.vue?vue&type=template&id=cb5a6c96 */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/TaskList/ItemColumn.vue?vue&type=template&id=cb5a6c96");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_ref_5_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemColumn_vue_vue_type_template_id_cb5a6c96__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_ref_5_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemColumn_vue_vue_type_template_id_cb5a6c96__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/TaskList/TaskList.vue":
/*!**********************************************!*\
  !*** ./src/components/TaskList/TaskList.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TaskList_vue_vue_type_template_id_6e11f12f__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TaskList.vue?vue&type=template&id=6e11f12f */ "./src/components/TaskList/TaskList.vue?vue&type=template&id=6e11f12f");
/* harmony import */ var _TaskList_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TaskList.vue?vue&type=script&lang=js */ "./src/components/TaskList/TaskList.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TaskList_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _TaskList_vue_vue_type_template_id_6e11f12f__WEBPACK_IMPORTED_MODULE_0__["render"],
  _TaskList_vue_vue_type_template_id_6e11f12f__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/TaskList/TaskList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/TaskList/TaskList.vue?vue&type=script&lang=js":
/*!**********************************************************************!*\
  !*** ./src/components/TaskList/TaskList.vue?vue&type=script&lang=js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_TaskList_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./TaskList.vue?vue&type=script&lang=js */ "./node_modules/vue-loader/lib/index.js?!./src/components/TaskList/TaskList.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskList_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/TaskList/TaskList.vue?vue&type=template&id=6e11f12f":
/*!****************************************************************************!*\
  !*** ./src/components/TaskList/TaskList.vue?vue&type=template&id=6e11f12f ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_ref_5_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskList_vue_vue_type_template_id_6e11f12f__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--5!../../../node_modules/vue-loader/lib??vue-loader-options!./TaskList.vue?vue&type=template&id=6e11f12f */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/TaskList/TaskList.vue?vue&type=template&id=6e11f12f");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_ref_5_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskList_vue_vue_type_template_id_6e11f12f__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_ref_5_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskList_vue_vue_type_template_id_6e11f12f__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/TaskList/TaskListHeader.vue":
/*!****************************************************!*\
  !*** ./src/components/TaskList/TaskListHeader.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TaskListHeader_vue_vue_type_template_id_aefdd7c8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TaskListHeader.vue?vue&type=template&id=aefdd7c8 */ "./src/components/TaskList/TaskListHeader.vue?vue&type=template&id=aefdd7c8");
/* harmony import */ var _TaskListHeader_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TaskListHeader.vue?vue&type=script&lang=js */ "./src/components/TaskList/TaskListHeader.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TaskListHeader_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _TaskListHeader_vue_vue_type_template_id_aefdd7c8__WEBPACK_IMPORTED_MODULE_0__["render"],
  _TaskListHeader_vue_vue_type_template_id_aefdd7c8__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/TaskList/TaskListHeader.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/TaskList/TaskListHeader.vue?vue&type=script&lang=js":
/*!****************************************************************************!*\
  !*** ./src/components/TaskList/TaskListHeader.vue?vue&type=script&lang=js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_TaskListHeader_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./TaskListHeader.vue?vue&type=script&lang=js */ "./node_modules/vue-loader/lib/index.js?!./src/components/TaskList/TaskListHeader.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskListHeader_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/TaskList/TaskListHeader.vue?vue&type=template&id=aefdd7c8":
/*!**********************************************************************************!*\
  !*** ./src/components/TaskList/TaskListHeader.vue?vue&type=template&id=aefdd7c8 ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_ref_5_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskListHeader_vue_vue_type_template_id_aefdd7c8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--5!../../../node_modules/vue-loader/lib??vue-loader-options!./TaskListHeader.vue?vue&type=template&id=aefdd7c8 */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/TaskList/TaskListHeader.vue?vue&type=template&id=aefdd7c8");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_ref_5_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskListHeader_vue_vue_type_template_id_aefdd7c8__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_ref_5_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskListHeader_vue_vue_type_template_id_aefdd7c8__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/TaskList/TaskListItem.vue":
/*!**************************************************!*\
  !*** ./src/components/TaskList/TaskListItem.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TaskListItem_vue_vue_type_template_id_9716293c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TaskListItem.vue?vue&type=template&id=9716293c */ "./src/components/TaskList/TaskListItem.vue?vue&type=template&id=9716293c");
/* harmony import */ var _TaskListItem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TaskListItem.vue?vue&type=script&lang=js */ "./src/components/TaskList/TaskListItem.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TaskListItem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _TaskListItem_vue_vue_type_template_id_9716293c__WEBPACK_IMPORTED_MODULE_0__["render"],
  _TaskListItem_vue_vue_type_template_id_9716293c__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/TaskList/TaskListItem.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/TaskList/TaskListItem.vue?vue&type=script&lang=js":
/*!**************************************************************************!*\
  !*** ./src/components/TaskList/TaskListItem.vue?vue&type=script&lang=js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_TaskListItem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./TaskListItem.vue?vue&type=script&lang=js */ "./node_modules/vue-loader/lib/index.js?!./src/components/TaskList/TaskListItem.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskListItem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/TaskList/TaskListItem.vue?vue&type=template&id=9716293c":
/*!********************************************************************************!*\
  !*** ./src/components/TaskList/TaskListItem.vue?vue&type=template&id=9716293c ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_ref_5_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskListItem_vue_vue_type_template_id_9716293c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--5!../../../node_modules/vue-loader/lib??vue-loader-options!./TaskListItem.vue?vue&type=template&id=9716293c */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/TaskList/TaskListItem.vue?vue&type=template&id=9716293c");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_ref_5_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskListItem_vue_vue_type_template_id_9716293c__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_ref_5_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskListItem_vue_vue_type_template_id_9716293c__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/TaskListFixed/ItemColumn.vue":
/*!*****************************************************!*\
  !*** ./src/components/TaskListFixed/ItemColumn.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ItemColumn_vue_vue_type_template_id_18564f12__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ItemColumn.vue?vue&type=template&id=18564f12 */ "./src/components/TaskListFixed/ItemColumn.vue?vue&type=template&id=18564f12");
/* harmony import */ var _ItemColumn_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ItemColumn.vue?vue&type=script&lang=js */ "./src/components/TaskListFixed/ItemColumn.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ItemColumn_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _ItemColumn_vue_vue_type_template_id_18564f12__WEBPACK_IMPORTED_MODULE_0__["render"],
  _ItemColumn_vue_vue_type_template_id_18564f12__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/TaskListFixed/ItemColumn.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/TaskListFixed/ItemColumn.vue?vue&type=script&lang=js":
/*!*****************************************************************************!*\
  !*** ./src/components/TaskListFixed/ItemColumn.vue?vue&type=script&lang=js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_ItemColumn_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./ItemColumn.vue?vue&type=script&lang=js */ "./node_modules/vue-loader/lib/index.js?!./src/components/TaskListFixed/ItemColumn.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemColumn_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/TaskListFixed/ItemColumn.vue?vue&type=template&id=18564f12":
/*!***********************************************************************************!*\
  !*** ./src/components/TaskListFixed/ItemColumn.vue?vue&type=template&id=18564f12 ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_ref_5_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemColumn_vue_vue_type_template_id_18564f12__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--5!../../../node_modules/vue-loader/lib??vue-loader-options!./ItemColumn.vue?vue&type=template&id=18564f12 */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/TaskListFixed/ItemColumn.vue?vue&type=template&id=18564f12");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_ref_5_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemColumn_vue_vue_type_template_id_18564f12__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_ref_5_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemColumn_vue_vue_type_template_id_18564f12__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/TaskListFixed/TaskList.vue":
/*!***************************************************!*\
  !*** ./src/components/TaskListFixed/TaskList.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TaskList_vue_vue_type_template_id_da266f1e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TaskList.vue?vue&type=template&id=da266f1e */ "./src/components/TaskListFixed/TaskList.vue?vue&type=template&id=da266f1e");
/* harmony import */ var _TaskList_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TaskList.vue?vue&type=script&lang=js */ "./src/components/TaskListFixed/TaskList.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TaskList_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _TaskList_vue_vue_type_template_id_da266f1e__WEBPACK_IMPORTED_MODULE_0__["render"],
  _TaskList_vue_vue_type_template_id_da266f1e__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/TaskListFixed/TaskList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/TaskListFixed/TaskList.vue?vue&type=script&lang=js":
/*!***************************************************************************!*\
  !*** ./src/components/TaskListFixed/TaskList.vue?vue&type=script&lang=js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_TaskList_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./TaskList.vue?vue&type=script&lang=js */ "./node_modules/vue-loader/lib/index.js?!./src/components/TaskListFixed/TaskList.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskList_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/TaskListFixed/TaskList.vue?vue&type=template&id=da266f1e":
/*!*********************************************************************************!*\
  !*** ./src/components/TaskListFixed/TaskList.vue?vue&type=template&id=da266f1e ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_ref_5_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskList_vue_vue_type_template_id_da266f1e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--5!../../../node_modules/vue-loader/lib??vue-loader-options!./TaskList.vue?vue&type=template&id=da266f1e */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/TaskListFixed/TaskList.vue?vue&type=template&id=da266f1e");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_ref_5_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskList_vue_vue_type_template_id_da266f1e__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_ref_5_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskList_vue_vue_type_template_id_da266f1e__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/TaskListFixed/TaskListHeader.vue":
/*!*********************************************************!*\
  !*** ./src/components/TaskListFixed/TaskListHeader.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TaskListHeader_vue_vue_type_template_id_40f9f1de__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TaskListHeader.vue?vue&type=template&id=40f9f1de */ "./src/components/TaskListFixed/TaskListHeader.vue?vue&type=template&id=40f9f1de");
/* harmony import */ var _TaskListHeader_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TaskListHeader.vue?vue&type=script&lang=js */ "./src/components/TaskListFixed/TaskListHeader.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TaskListHeader_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _TaskListHeader_vue_vue_type_template_id_40f9f1de__WEBPACK_IMPORTED_MODULE_0__["render"],
  _TaskListHeader_vue_vue_type_template_id_40f9f1de__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/TaskListFixed/TaskListHeader.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/TaskListFixed/TaskListHeader.vue?vue&type=script&lang=js":
/*!*********************************************************************************!*\
  !*** ./src/components/TaskListFixed/TaskListHeader.vue?vue&type=script&lang=js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_TaskListHeader_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./TaskListHeader.vue?vue&type=script&lang=js */ "./node_modules/vue-loader/lib/index.js?!./src/components/TaskListFixed/TaskListHeader.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskListHeader_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/TaskListFixed/TaskListHeader.vue?vue&type=template&id=40f9f1de":
/*!***************************************************************************************!*\
  !*** ./src/components/TaskListFixed/TaskListHeader.vue?vue&type=template&id=40f9f1de ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_ref_5_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskListHeader_vue_vue_type_template_id_40f9f1de__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--5!../../../node_modules/vue-loader/lib??vue-loader-options!./TaskListHeader.vue?vue&type=template&id=40f9f1de */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/TaskListFixed/TaskListHeader.vue?vue&type=template&id=40f9f1de");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_ref_5_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskListHeader_vue_vue_type_template_id_40f9f1de__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_ref_5_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskListHeader_vue_vue_type_template_id_40f9f1de__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/TaskListFixed/TaskListItem.vue":
/*!*******************************************************!*\
  !*** ./src/components/TaskListFixed/TaskListItem.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TaskListItem_vue_vue_type_template_id_94a35cb8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TaskListItem.vue?vue&type=template&id=94a35cb8 */ "./src/components/TaskListFixed/TaskListItem.vue?vue&type=template&id=94a35cb8");
/* harmony import */ var _TaskListItem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TaskListItem.vue?vue&type=script&lang=js */ "./src/components/TaskListFixed/TaskListItem.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TaskListItem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _TaskListItem_vue_vue_type_template_id_94a35cb8__WEBPACK_IMPORTED_MODULE_0__["render"],
  _TaskListItem_vue_vue_type_template_id_94a35cb8__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/TaskListFixed/TaskListItem.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/TaskListFixed/TaskListItem.vue?vue&type=script&lang=js":
/*!*******************************************************************************!*\
  !*** ./src/components/TaskListFixed/TaskListItem.vue?vue&type=script&lang=js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_TaskListItem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./TaskListItem.vue?vue&type=script&lang=js */ "./node_modules/vue-loader/lib/index.js?!./src/components/TaskListFixed/TaskListItem.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskListItem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/TaskListFixed/TaskListItem.vue?vue&type=template&id=94a35cb8":
/*!*************************************************************************************!*\
  !*** ./src/components/TaskListFixed/TaskListItem.vue?vue&type=template&id=94a35cb8 ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_ref_5_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskListItem_vue_vue_type_template_id_94a35cb8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--5!../../../node_modules/vue-loader/lib??vue-loader-options!./TaskListItem.vue?vue&type=template&id=94a35cb8 */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/TaskListFixed/TaskListItem.vue?vue&type=template&id=94a35cb8");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_ref_5_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskListItem_vue_vue_type_template_id_94a35cb8__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_ref_5_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskListItem_vue_vue_type_template_id_94a35cb8__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/style.js":
/*!**********************!*\
  !*** ./src/style.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getStyle; });
/**
 * @fileoverview Styles for gantt-elastic
 * @license MIT
 * @author Rafal Pospiech <neuronet.io@gmail.com>
 * @package GanttElastic
 */

function getStyle(fontSize = '12px', fontFamily = 'Arial, sans-serif') {
  return {
    fontSize,
    fontFamily,
    'main-view': {
      background: '#FFFFFF'
    },
    'main-container-wrapper': {
      overflow: 'hidden',
      'border-top': '1px solid #eee',
      'border-bottom': '1px solid #eee'
    },
    'main-container': {
      float: 'left',
      'max-width': '100%'
    },
    'main-view-container': {},
    container: {
      display: 'flex',
      'max-width': '100%',
      height: '100%'
    },
    'calendar-wrapper': {
      'user-select': 'none'
    },
    calendar: {
      width: '100%',
      background: '#f3f5f7',
      display: 'block'
    },
    'calendar-row': {
      display: 'flex',
      'justify-content': 'space-evenly'
    },
    'calendar-row--month': {},
    'calendar-row--day': {},
    'calendar-row--hour': {
      'border-bottom': '1px solid #eee'
    },
    'calendar-row-rect': {
      background: 'transparent',
      display: 'flex'
    },
    'calendar-row-rect--month': {},
    'calendar-row-rect--day': {},
    'calendar-row-rect--hour': {},
    'calendar-row-rect-child': {
      display: 'block',
      'border-right-width': '1px', // Calendar
      'border-right-color': '#dadada',
      'border-right-style': 'solid',
      position: 'relative'
    },
    'calendar-row-rect-child--month': {},
    'calendar-row-rect-child--day': { 'text-align': 'center' },
    'calendar-row-rect-child--hour': { 'text-align': 'center' },
    'calendar-row-text': {
      'font-family': fontFamily, // GanttElastic
      'font-size': fontSize, //GanttElastic
      color: '#606060',
      display: 'inline-block',
      position: 'relative'
    },
    'calendar-row-text--month': {},
    'calendar-row-text--day': {},
    'calendar-row-text--hour': {},
    'task-list-wrapper': {},
    'task-list': { background: 'transparent', 'border-color': '#eee' },
    'task-list-header': {
      display: 'flex',
      'user-select': 'none',
      'vertical-align': 'middle',
      'border-bottom': '1px solid #eee',
      'border-left': '1px solid #eee'
    },
    'task-list-header-column': {
      'border-left': '1px solid #00000050',
      'box-sizing': 'border-box',
      display: 'flex',
      background: '#f3f5f7',
      'border-color': 'transparent'
    },
    'task-list-expander-wrapper': {
      display: 'inline-flex',
      'flex-shrink': '0',
      'box-sizing': 'border-box',
      margin: '0 0 0 10px'
    },
    'task-list-expander-content': {
      display: 'inline-flex',
      cursor: 'pointer',
      margin: 'auto 0px',
      'box-sizing': 'border-box',
      'user-select': 'none'
    },
    'task-list-expander-line': {
      fill: 'transparent',
      stroke: '#000000',
      'stroke-width': '1',
      'stroke-linecap': 'round'
    },
    'task-list-expander-border': {
      fill: '#ffffffa0',
      stroke: '#000000A0'
    },
    'chart-expander-wrapper': {
      display: 'block',
      'line-height': '1',
      'box-sizing': 'border-box',
      margin: '0'
    },
    'chart-expander-content': {
      display: 'inline-flex',
      cursor: 'pointer',
      margin: 'auto 0px',
      'box-sizing': 'border-box',
      'user-select': 'none'
    },
    'chart-expander-line': {
      fill: 'transparent',
      stroke: '#000000',
      'stroke-width': '1',
      'stroke-linecap': 'round'
    },
    'chart-expander-border': {
      fill: '#ffffffa0',
      stroke: '#000000A0'
    },
    'task-list-container': {},
    'task-list-header-label': {
      overflow: 'hidden',
      'text-overflow': 'ellipsis',
      'font-family': fontFamily,
      'font-size': fontSize,
      'box-sizing': 'border-box',
      margin: 'auto 6px',
      'flex-grow': '1',
      'vertical-align': 'middle'
    },
    'task-list-header-resizer-wrapper': {
      background: 'transparent',
      height: '100%',
      width: '6px',
      cursor: 'col-resize',
      display: 'inline-flex',
      'vertical-align': 'center'
    },
    'task-list-header-resizer': { margin: 'auto 0px' },
    'task-list-header-resizer-dot': {
      width: '3px',
      height: '3px',
      background: '#ddd',
      'border-radius': '100%',
      margin: '4px 0px'
    },
    'task-list-items': {
      overflow: 'hidden'
    },
    'task-list-item': {
      'border-top': '1px solid #eee',
      'border-right': '1px solid #eee',
      'box-sizing': 'border-box',
      display: 'flex',
      background: 'transparent'
    },
    'task-list-item-column': {
      display: 'inline-flex',
      'flex-shrink': '0',
      'border-left': '1px solid #00000050',
      'box-sizing': 'border-box',
      'border-color': '#eee'
    },
    'task-list-item-value-wrapper': {
      overflow: 'hidden',
      display: 'flex',
      width: '100%'
    },
    'task-list-item-value-container': {
      margin: 'auto 0px',
      overflow: 'hidden'
    },
    'task-list-item-value': {
      display: 'block',
      'flex-shrink': '100',
      'font-family': fontFamily,
      'font-size': fontSize,
      'margin-top': 'auto',
      'margin-bottom': 'auto',
      'margin-left': '6px', // TaskList
      'margin-right': '6px',
      overflow: 'hidden',
      'text-overflow': 'ellipsis',
      'line-height': '1.5em',
      'word-break': 'keep-all',
      'white-space': 'nowrap',
      color: '#606060',
      background: '#FFFFFF'
    },
    'grid-lines': {},
    'grid-line-horizontal': {
      stroke: '#00000010',
      'stroke-width': 1
    },
    'grid-line-vertical': {
      stroke: '#00000010',
      'stroke-width': 1
    },
    'grid-line-time': {
      stroke: '#FF000080',
      'stroke-width': 1
    },
    chart: {
      'user-select': 'none',
      overflow: 'hidden'
    },
    'chart-calendar-container': {
      'user-select': 'none',
      overflow: 'hidden',
      'max-width': '100%',
      'border-right': '1px solid #eee'
    },
    'chart-graph-container': {
      'user-select': 'none',
      overflow: 'hidden',
      'max-width': '100%',
      'border-right': '1px solid #eee'
    },
    'chart-area': {},
    'chart-graph': {
      overflow: 'hidden'
    },
    'chart-row-text-wrapper': {},
    'chart-row-text': {
      background: '#ffffffa0',
      'border-radius': '10px',
      'font-family': fontFamily,
      'font-size': fontSize,
      'font-weight': 'normal',
      color: '#000000a0',
      height: '100%',
      display: 'inline-block'
    },
    'chart-row-text-content': {
      padding: '0px 6px'
    },
    'chart-row-text-content--text': {},
    'chart-row-text-content--html': {},
    'chart-row-wrapper': {},
    'chart-row-bar-wrapper': {},
    'chart-row-bar': {},
    'chart-row-bar-polygon': {
      stroke: '#E74C3C',
      'stroke-width': 1,
      fill: '#F75C4C'
    },
    'chart-row-project-wrapper': {},
    'chart-row-project': {},
    'chart-row-project-polygon': {},
    'chart-row-milestone-wrapper': {},
    'chart-row-milestone': {},
    'chart-row-milestone-polygon': {},
    'chart-row-task-wrapper': {},
    'chart-row-task': {},
    'chart-row-task-polygon': {},
    'chart-row-progress-bar-wrapper': {},
    'chart-row-progress-bar': {},
    'chart-row-progress-bar-line': {
      stroke: '#ffffff25',
      'stroke-width': 20
    },
    'chart-row-progress-bar-solid': {
      fill: '#0EAC51',
      height: '20%'
    },
    'chart-row-progress-bar-pattern': {
      fill: 'url(#diagonalHatch)',
      transform: 'translateY(0.1) scaleY(0.8)'
    },
    'chart-row-progress-bar-outline': {
      stroke: '#E74C3C',
      'stroke-width': 1
    },
    'chart-dependency-lines-wrapper': {},
    'chart-dependency-lines-path': {
      fill: 'transparent',
      stroke: '#FFa00090',
      'stroke-width': 2
    },
    'chart-scroll-container': {},
    'chart-scroll-container--horizontal': {
      overflow: 'auto',
      'max-width': '100%'
    },
    'chart-scroll-container--vertical': {
      'overflow-y': 'auto',
      'overflow-x': 'hidden',
      'max-height': '100%',
      float: 'right'
    },
    'chart-days-highlight-rect': {
      fill: '#f3f5f780'
    },
    'slot-header-beforeOptions': {
      display: 'inline-block'
    }
  };
}


/***/ }),

/***/ "vue":
/*!**********************!*\
  !*** external "vue" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_vue__;

/***/ })

/******/ })["default"];
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9zcmMvR2FudHRFbGFzdGljLnZ1ZT9iNmZiIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9ub2RlX21vZHVsZXMvZGF5anMvZGF5anMubWluLmpzIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy8uL25vZGVfbW9kdWxlcy9yZXNpemUtb2JzZXJ2ZXItcG9seWZpbGwvZGlzdC9SZXNpemVPYnNlcnZlci5lcy5qcyIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvc3JjL0dhbnR0RWxhc3RpYy52dWUiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljL3NyYy9jb21wb25lbnRzL0NhbGVuZGFyL0NhbGVuZGFyLnZ1ZSIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvc3JjL2NvbXBvbmVudHMvQ2FsZW5kYXIvQ2FsZW5kYXJSb3cudnVlIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy9zcmMvY29tcG9uZW50cy9DaGFydC9DaGFydC52dWUiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljL3NyYy9jb21wb25lbnRzL0NoYXJ0L0RheXNIaWdobGlnaHQudnVlIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy9zcmMvY29tcG9uZW50cy9DaGFydC9EZXBlbmRlbmN5TGluZXMudnVlIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy9zcmMvY29tcG9uZW50cy9DaGFydC9HcmlkLnZ1ZSIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvc3JjL2NvbXBvbmVudHMvQ2hhcnQvUHJvZ3Jlc3NCYXIudnVlIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy9zcmMvY29tcG9uZW50cy9DaGFydC9Sb3cvTWlsZXN0b25lLnZ1ZSIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvc3JjL2NvbXBvbmVudHMvQ2hhcnQvUm93L1Byb2plY3QudnVlIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy9zcmMvY29tcG9uZW50cy9DaGFydC9Sb3cvVGFzay52dWUiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljL3NyYy9jb21wb25lbnRzL0NoYXJ0L1RleHQudnVlIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy9zcmMvY29tcG9uZW50cy9FeHBhbmRlci52dWUiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljL3NyYy9jb21wb25lbnRzL01haW5WaWV3LnZ1ZSIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvc3JjL2NvbXBvbmVudHMvUmVuZGVyL2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvc3JjL2NvbXBvbmVudHMvVGFza0xpc3QvSXRlbUNvbHVtbi52dWUiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljL3NyYy9jb21wb25lbnRzL1Rhc2tMaXN0L1Rhc2tMaXN0LnZ1ZSIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvc3JjL2NvbXBvbmVudHMvVGFza0xpc3QvVGFza0xpc3RIZWFkZXIudnVlIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy9zcmMvY29tcG9uZW50cy9UYXNrTGlzdC9UYXNrTGlzdEl0ZW0udnVlIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy9zcmMvY29tcG9uZW50cy9UYXNrTGlzdEZpeGVkL0l0ZW1Db2x1bW4udnVlIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy9zcmMvY29tcG9uZW50cy9UYXNrTGlzdEZpeGVkL1Rhc2tMaXN0SGVhZGVyLnZ1ZSIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvc3JjL2NvbXBvbmVudHMvVGFza0xpc3RGaXhlZC9UYXNrTGlzdEl0ZW0udnVlIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy8uL3NyYy9HYW50dEVsYXN0aWMudnVlPzcxNDMiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljLy4vc3JjL2NvbXBvbmVudHMvQ2FsZW5kYXIvQ2FsZW5kYXIudnVlP2I0MTMiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljLy4vc3JjL2NvbXBvbmVudHMvQ2FsZW5kYXIvQ2FsZW5kYXJSb3cudnVlPzA3YmEiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljLy4vc3JjL2NvbXBvbmVudHMvQ2hhcnQvQ2hhcnQudnVlP2NlOGMiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljLy4vc3JjL2NvbXBvbmVudHMvQ2hhcnQvRGF5c0hpZ2hsaWdodC52dWU/NmM4ZCIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9zcmMvY29tcG9uZW50cy9DaGFydC9EZXBlbmRlbmN5TGluZXMudnVlPzJmYTUiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljLy4vc3JjL2NvbXBvbmVudHMvQ2hhcnQvR3JpZC52dWU/MzVkMyIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9zcmMvY29tcG9uZW50cy9DaGFydC9Qcm9ncmVzc0Jhci52dWU/ZDM4MyIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9zcmMvY29tcG9uZW50cy9DaGFydC9Sb3cvTWlsZXN0b25lLnZ1ZT9lNGEwIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy8uL3NyYy9jb21wb25lbnRzL0NoYXJ0L1Jvdy9Qcm9qZWN0LnZ1ZT9jMDZkIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy8uL3NyYy9jb21wb25lbnRzL0NoYXJ0L1Jvdy9UYXNrLnZ1ZT8wMzhiIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy8uL3NyYy9jb21wb25lbnRzL0NoYXJ0L1RleHQudnVlPzE0NjkiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljLy4vc3JjL2NvbXBvbmVudHMvRXhwYW5kZXIudnVlPzU4ZGIiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljLy4vc3JjL2NvbXBvbmVudHMvTWFpblZpZXcudnVlPzY0NDEiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljLy4vc3JjL2NvbXBvbmVudHMvVGFza0xpc3QvSXRlbUNvbHVtbi52dWU/OTZkOCIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9zcmMvY29tcG9uZW50cy9UYXNrTGlzdC9UYXNrTGlzdC52dWU/OWE3OCIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9zcmMvY29tcG9uZW50cy9UYXNrTGlzdC9UYXNrTGlzdEhlYWRlci52dWU/NDlmOSIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9zcmMvY29tcG9uZW50cy9UYXNrTGlzdC9UYXNrTGlzdEl0ZW0udnVlPzgxODUiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljLy4vc3JjL2NvbXBvbmVudHMvVGFza0xpc3RGaXhlZC9JdGVtQ29sdW1uLnZ1ZT9kOGYxIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy8uL3NyYy9jb21wb25lbnRzL1Rhc2tMaXN0Rml4ZWQvVGFza0xpc3QudnVlPzc1OTkiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljLy4vc3JjL2NvbXBvbmVudHMvVGFza0xpc3RGaXhlZC9UYXNrTGlzdEhlYWRlci52dWU/MzBiNSIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9zcmMvY29tcG9uZW50cy9UYXNrTGlzdEZpeGVkL1Rhc2tMaXN0SXRlbS52dWU/MDYyMyIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy8uL3NyYy9HYW50dEVsYXN0aWMudnVlPzVkYTEiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljLy4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qcyIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvbGlzdFRvU3R5bGVzLmpzIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljLy4vc3JjL0dhbnR0RWxhc3RpYy52dWUiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljLy4vc3JjL0dhbnR0RWxhc3RpYy52dWU/NDAwNCIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9zcmMvR2FudHRFbGFzdGljLnZ1ZT85M2I5Iiwid2VicGFjazovL0dhbnR0RWxhc3RpYy8uL3NyYy9HYW50dEVsYXN0aWMudnVlPzAyNTkiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljLy4vc3JjL2NvbXBvbmVudHMvQ2FsZW5kYXIvQ2FsZW5kYXIudnVlIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy8uL3NyYy9jb21wb25lbnRzL0NhbGVuZGFyL0NhbGVuZGFyLnZ1ZT85MTdmIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy8uL3NyYy9jb21wb25lbnRzL0NhbGVuZGFyL0NhbGVuZGFyLnZ1ZT9lMDhmIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy8uL3NyYy9jb21wb25lbnRzL0NhbGVuZGFyL0NhbGVuZGFyUm93LnZ1ZSIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9zcmMvY29tcG9uZW50cy9DYWxlbmRhci9DYWxlbmRhclJvdy52dWU/NTM1YSIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9zcmMvY29tcG9uZW50cy9DYWxlbmRhci9DYWxlbmRhclJvdy52dWU/YmIxZiIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9zcmMvY29tcG9uZW50cy9DaGFydC9DaGFydC52dWUiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljLy4vc3JjL2NvbXBvbmVudHMvQ2hhcnQvQ2hhcnQudnVlPzYxZjMiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljLy4vc3JjL2NvbXBvbmVudHMvQ2hhcnQvQ2hhcnQudnVlP2MwNTMiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljLy4vc3JjL2NvbXBvbmVudHMvQ2hhcnQvRGF5c0hpZ2hsaWdodC52dWUiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljLy4vc3JjL2NvbXBvbmVudHMvQ2hhcnQvRGF5c0hpZ2hsaWdodC52dWU/MTk5OSIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9zcmMvY29tcG9uZW50cy9DaGFydC9EYXlzSGlnaGxpZ2h0LnZ1ZT9iNmIwIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy8uL3NyYy9jb21wb25lbnRzL0NoYXJ0L0RlcGVuZGVuY3lMaW5lcy52dWUiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljLy4vc3JjL2NvbXBvbmVudHMvQ2hhcnQvRGVwZW5kZW5jeUxpbmVzLnZ1ZT81YWNiIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy8uL3NyYy9jb21wb25lbnRzL0NoYXJ0L0RlcGVuZGVuY3lMaW5lcy52dWU/ODZjZSIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9zcmMvY29tcG9uZW50cy9DaGFydC9HcmlkLnZ1ZSIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9zcmMvY29tcG9uZW50cy9DaGFydC9HcmlkLnZ1ZT8zYTAyIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy8uL3NyYy9jb21wb25lbnRzL0NoYXJ0L0dyaWQudnVlPzczN2EiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljLy4vc3JjL2NvbXBvbmVudHMvQ2hhcnQvUHJvZ3Jlc3NCYXIudnVlIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy8uL3NyYy9jb21wb25lbnRzL0NoYXJ0L1Byb2dyZXNzQmFyLnZ1ZT9iYjk0Iiwid2VicGFjazovL0dhbnR0RWxhc3RpYy8uL3NyYy9jb21wb25lbnRzL0NoYXJ0L1Byb2dyZXNzQmFyLnZ1ZT9kZDFlIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy8uL3NyYy9jb21wb25lbnRzL0NoYXJ0L1Jvdy9NaWxlc3RvbmUudnVlIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy8uL3NyYy9jb21wb25lbnRzL0NoYXJ0L1Jvdy9NaWxlc3RvbmUudnVlPzFlMWYiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljLy4vc3JjL2NvbXBvbmVudHMvQ2hhcnQvUm93L01pbGVzdG9uZS52dWU/ZWNmNSIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9zcmMvY29tcG9uZW50cy9DaGFydC9Sb3cvUHJvamVjdC52dWUiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljLy4vc3JjL2NvbXBvbmVudHMvQ2hhcnQvUm93L1Byb2plY3QudnVlPzUyZWQiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljLy4vc3JjL2NvbXBvbmVudHMvQ2hhcnQvUm93L1Byb2plY3QudnVlPzgzM2EiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljLy4vc3JjL2NvbXBvbmVudHMvQ2hhcnQvUm93L1Rhc2subWl4aW4uanMiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljLy4vc3JjL2NvbXBvbmVudHMvQ2hhcnQvUm93L1Rhc2sudnVlIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy8uL3NyYy9jb21wb25lbnRzL0NoYXJ0L1Jvdy9UYXNrLnZ1ZT81ODY2Iiwid2VicGFjazovL0dhbnR0RWxhc3RpYy8uL3NyYy9jb21wb25lbnRzL0NoYXJ0L1Jvdy9UYXNrLnZ1ZT9jODU4Iiwid2VicGFjazovL0dhbnR0RWxhc3RpYy8uL3NyYy9jb21wb25lbnRzL0NoYXJ0L1RleHQudnVlIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy8uL3NyYy9jb21wb25lbnRzL0NoYXJ0L1RleHQudnVlPzQ5NTAiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljLy4vc3JjL2NvbXBvbmVudHMvQ2hhcnQvVGV4dC52dWU/NDI1NyIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9zcmMvY29tcG9uZW50cy9FeHBhbmRlci52dWUiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljLy4vc3JjL2NvbXBvbmVudHMvRXhwYW5kZXIudnVlPzgxNGUiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljLy4vc3JjL2NvbXBvbmVudHMvRXhwYW5kZXIudnVlPzE3N2EiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljLy4vc3JjL2NvbXBvbmVudHMvTWFpblZpZXcudnVlIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy8uL3NyYy9jb21wb25lbnRzL01haW5WaWV3LnZ1ZT82MWY1Iiwid2VicGFjazovL0dhbnR0RWxhc3RpYy8uL3NyYy9jb21wb25lbnRzL01haW5WaWV3LnZ1ZT9jZjFjIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy8uL3NyYy9jb21wb25lbnRzL1JlbmRlci9pbmRleC52dWUiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljLy4vc3JjL2NvbXBvbmVudHMvUmVuZGVyL2luZGV4LnZ1ZT9lM2U3Iiwid2VicGFjazovL0dhbnR0RWxhc3RpYy8uL3NyYy9jb21wb25lbnRzL1Rhc2tMaXN0L0l0ZW1Db2x1bW4udnVlIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy8uL3NyYy9jb21wb25lbnRzL1Rhc2tMaXN0L0l0ZW1Db2x1bW4udnVlPzhmNzciLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljLy4vc3JjL2NvbXBvbmVudHMvVGFza0xpc3QvSXRlbUNvbHVtbi52dWU/YjA1NCIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9zcmMvY29tcG9uZW50cy9UYXNrTGlzdC9UYXNrTGlzdC52dWUiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljLy4vc3JjL2NvbXBvbmVudHMvVGFza0xpc3QvVGFza0xpc3QudnVlPzNkNzUiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljLy4vc3JjL2NvbXBvbmVudHMvVGFza0xpc3QvVGFza0xpc3QudnVlPzc2ZWYiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljLy4vc3JjL2NvbXBvbmVudHMvVGFza0xpc3QvVGFza0xpc3RIZWFkZXIudnVlIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy8uL3NyYy9jb21wb25lbnRzL1Rhc2tMaXN0L1Rhc2tMaXN0SGVhZGVyLnZ1ZT8yYWJhIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy8uL3NyYy9jb21wb25lbnRzL1Rhc2tMaXN0L1Rhc2tMaXN0SGVhZGVyLnZ1ZT8wNzUyIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy8uL3NyYy9jb21wb25lbnRzL1Rhc2tMaXN0L1Rhc2tMaXN0SXRlbS52dWUiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljLy4vc3JjL2NvbXBvbmVudHMvVGFza0xpc3QvVGFza0xpc3RJdGVtLnZ1ZT9kZGU0Iiwid2VicGFjazovL0dhbnR0RWxhc3RpYy8uL3NyYy9jb21wb25lbnRzL1Rhc2tMaXN0L1Rhc2tMaXN0SXRlbS52dWU/M2YzMyIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9zcmMvY29tcG9uZW50cy9UYXNrTGlzdEZpeGVkL0l0ZW1Db2x1bW4udnVlIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy8uL3NyYy9jb21wb25lbnRzL1Rhc2tMaXN0Rml4ZWQvSXRlbUNvbHVtbi52dWU/YTk5YSIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9zcmMvY29tcG9uZW50cy9UYXNrTGlzdEZpeGVkL0l0ZW1Db2x1bW4udnVlP2MwOGUiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljLy4vc3JjL2NvbXBvbmVudHMvVGFza0xpc3RGaXhlZC9UYXNrTGlzdC52dWUiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljLy4vc3JjL2NvbXBvbmVudHMvVGFza0xpc3RGaXhlZC9UYXNrTGlzdC52dWU/ZDE5NCIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9zcmMvY29tcG9uZW50cy9UYXNrTGlzdEZpeGVkL1Rhc2tMaXN0LnZ1ZT8yODYzIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy8uL3NyYy9jb21wb25lbnRzL1Rhc2tMaXN0Rml4ZWQvVGFza0xpc3RIZWFkZXIudnVlIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy8uL3NyYy9jb21wb25lbnRzL1Rhc2tMaXN0Rml4ZWQvVGFza0xpc3RIZWFkZXIudnVlPzUzNDQiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljLy4vc3JjL2NvbXBvbmVudHMvVGFza0xpc3RGaXhlZC9UYXNrTGlzdEhlYWRlci52dWU/YzU4ZSIsIndlYnBhY2s6Ly9HYW50dEVsYXN0aWMvLi9zcmMvY29tcG9uZW50cy9UYXNrTGlzdEZpeGVkL1Rhc2tMaXN0SXRlbS52dWUiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljLy4vc3JjL2NvbXBvbmVudHMvVGFza0xpc3RGaXhlZC9UYXNrTGlzdEl0ZW0udnVlPzhkNDAiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljLy4vc3JjL2NvbXBvbmVudHMvVGFza0xpc3RGaXhlZC9UYXNrTGlzdEl0ZW0udnVlPzMwYjIiLCJ3ZWJwYWNrOi8vR2FudHRFbGFzdGljLy4vc3JjL3N0eWxlLmpzIiwid2VicGFjazovL0dhbnR0RWxhc3RpYy9leHRlcm5hbCBcInZ1ZVwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkEsMkJBQTJCLG1CQUFPLENBQUMsNkZBQTRDO0FBQy9FOzs7QUFHQTtBQUNBLGNB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsdUJBQXVCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRWMsb0VBQUssRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5NEJTO0FBQ0o7QUFDdUI7QUFDZjtBQUNvQjs7QUFFdEQ7QUFDQSxjQUFjLDBDQUFXO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMseURBQVE7QUFDakI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksMEVBQVE7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsNENBQUs7QUFDaEM7QUFDQTtBQUNBLHlCQUF5Qiw0Q0FBSztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLDRDQUFLO0FBQ1gsTUFBTSw0Q0FBSztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNELDRDQUFLO0FBQzNELHVEQUF1RCw0Q0FBSztBQUM1RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFELDRDQUFLO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsNENBQUs7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyw0Q0FBSztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw0Q0FBSztBQUMxQiwwQkFBMEIsNENBQUs7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiw0Q0FBSztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDRDQUFLO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsNENBQUs7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDRDQUFLO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDRDQUFLO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsNENBQUs7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyw0Q0FBSztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsZ0VBQWM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2UsMkVBQVksRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcGpERjtBQUNrQjs7QUFFN0I7QUFDZjtBQUNBO0FBQ0EsSUFBSSxxRUFBVztBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qiw0Q0FBSztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw0Q0FBSztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qiw0Q0FBSztBQUM3QjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsNENBQUs7QUFDN0I7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDRDQUFLO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDRDQUFLO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUMvU2E7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QjRCO0FBQ2tCO0FBQ0E7QUFDSTtBQUNsQjtBQUNVO0FBQ0o7QUFDekI7QUFDZjtBQUNBO0FBQ0EsSUFBSSx1REFBSTtBQUNSLElBQUksNkVBQWU7QUFDbkIsSUFBSSx3RUFBUTtBQUNaLElBQUksMkRBQUk7QUFDUixJQUFJLHFFQUFTO0FBQ2IsSUFBSSxpRUFBTztBQUNYLElBQUkseUVBQWE7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0R3dCO0FBQ1g7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsNENBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvRUFBb0UsNENBQUs7QUFDekU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUM3Q2E7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDaEVhO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7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LENBQUMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDMUZhO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCNkM7QUFDVTtBQUNuQjs7QUFFdEM7O0FBRWU7QUFDZjtBQUNBO0FBQ0EsSUFBSSx3RUFBUTtBQUNaLElBQUksK0RBQUs7QUFDVCxJQUFJLGtGQUFhO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ3JXYTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUM2Q3VDO0FBQzFCO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGlFQUFNO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZHZ0Q7QUFDSjtBQUMvQjtBQUNmO0FBQ0E7QUFDQSxJQUFJLDJFQUFjO0FBQ2xCLElBQUksdUVBQVk7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ2lCNkM7QUFDaEM7QUFDZjtBQUNBO0FBQ0EsSUFBSSx1RUFBZ0I7QUFDcEI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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SztBQUNMLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0EsS0FBSztBQUNMLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxzQ0FBc0M7QUFDdEMsc0NBQXNDO0FBQ3RDLDJCQUEyQjtBQUMzQiwrQkFBK0I7QUFDL0IsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLG1DQUFtQztBQUNuQywyQkFBMkI7QUFDM0IsbUNBQW1DO0FBQ25DLHFDQUFxQztBQUNyQyw2QkFBNkI7QUFDN0IscUNBQXFDO0FBQ3JDLGdDQUFnQztBQUNoQyx3QkFBd0I7QUFDeEIsZ0NBQWdDO0FBQ2hDLHdDQUF3QztBQUN4QyxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLHdDQUF3QztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN6VEEsaUQiLCJmaWxlIjoiR2FudHRFbGFzdGljLnVtZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcInZ1ZVwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJ2dWVcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiR2FudHRFbGFzdGljXCJdID0gZmFjdG9yeShyZXF1aXJlKFwidnVlXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJHYW50dEVsYXN0aWNcIl0gPSBmYWN0b3J5KHJvb3RbXCJ2dWVcIl0pO1xufSkod2luZG93LCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3Z1ZV9fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvR2FudHRFbGFzdGljLnZ1ZVwiKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuW2NsYXNzXj0nZ2FudHQtZWxhc3RpYyddLFxcclxcbltjbGFzcyo9JyBnYW50dC1lbGFzdGljJ10ge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuLmdhbnR0LWVsYXN0aWNfX21haW4tdmlldyBzdmcge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbi5nYW50dC1lbGFzdGljX19ncmlkLWhvcml6b250YWwtbGluZSxcXHJcXG4uZ2FudHQtZWxhc3RpY19fZ3JpZC12ZXJ0aWNhbC1saW5lIHtcXHJcXG4gIHN0cm9rZTogI2EwYTBhMDtcXHJcXG4gIHN0cm9rZS13aWR0aDogMTtcXG59XFxuZm9yZWlnbk9iamVjdCA+ICoge1xcclxcbiAgbWFyZ2luOiAwcHg7XFxufVxcbi5nYW50dC1lbGFzdGljIC5wLTIge1xcclxcbiAgcGFkZGluZzogMTByZW07XFxufVxcbi5nYW50dC1lbGFzdGljX19tYWluLXZpZXctbWFpbi1jb250YWluZXIsXFxyXFxuLmdhbnR0LWVsYXN0aWNfX21haW4tdmlldy1jb250YWluZXIge1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIG1heC13aWR0aDogMTAwJTtcXG59XFxuLmdhbnR0LWVsYXN0aWNfX3Rhc2stbGlzdC1oZWFkZXItY29sdW1uOmxhc3Qtb2YtdHlwZSB7XFxyXFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMDAwMDAwNTA7XFxufVxcbi5nYW50dC1lbGFzdGljX190YXNrLWxpc3QtaXRlbTpsYXN0LW9mLXR5cGUge1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDAwMDA1MDtcXG59XFxuLmdhbnR0LWVsYXN0aWNfX3Rhc2stbGlzdC1pdGVtLXZhbHVlLXdyYXBwZXI6aG92ZXIge1xcclxcbiAgb3ZlcmZsb3c6IHZpc2libGUgIWltcG9ydGFudDtcXG59XFxuLmdhbnR0LWVsYXN0aWNfX3Rhc2stbGlzdC1pdGVtLXZhbHVlLXdyYXBwZXI6aG92ZXIgPiAuZ2FudHQtZWxhc3RpY19fdGFzay1saXN0LWl0ZW0tdmFsdWUtY29udGFpbmVyIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIG92ZXJmbG93OiB2aXNpYmxlICFpbXBvcnRhbnQ7XFxufVxcbi5nYW50dC1lbGFzdGljX190YXNrLWxpc3QtaXRlbS12YWx1ZS13cmFwcGVyOmhvdmVyID4gLmdhbnR0LWVsYXN0aWNfX3Rhc2stbGlzdC1pdGVtLXZhbHVlIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxyXFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgbGlzdCA9IFtdO1xuXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuXHRcdHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuXHRcdFx0dmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cdFx0XHRpZihpdGVtWzJdKSB7XG5cdFx0XHRcdHJldHVybiBcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGNvbnRlbnQgKyBcIn1cIjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBjb250ZW50O1xuXHRcdFx0fVxuXHRcdH0pLmpvaW4oXCJcIik7XG5cdH07XG5cblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3Rcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcblx0XHR9XG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcblx0XHRcdFx0fVxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRyZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG5cdHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJztcblx0dmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXHRpZiAoIWNzc01hcHBpbmcpIHtcblx0XHRyZXR1cm4gY29udGVudDtcblx0fVxuXG5cdGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcblx0XHR2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcblx0XHR2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuXHRcdFx0cmV0dXJuICcvKiMgc291cmNlVVJMPScgKyBjc3NNYXBwaW5nLnNvdXJjZVJvb3QgKyBzb3VyY2UgKyAnICovJ1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG5cdH1cblxuXHRyZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufVxuXG4vLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuXHR2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcblx0dmFyIGRhdGEgPSAnc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsJyArIGJhc2U2NDtcblxuXHRyZXR1cm4gJy8qIyAnICsgZGF0YSArICcgKi8nO1xufVxuIiwiIWZ1bmN0aW9uKHQsZSl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9ZSgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoZSk6KHQ9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGdsb2JhbFRoaXM/Z2xvYmFsVGhpczp0fHxzZWxmKS5kYXlqcz1lKCl9KHRoaXMsKGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIHQ9MWUzLGU9NmU0LG49MzZlNSxyPVwibWlsbGlzZWNvbmRcIixpPVwic2Vjb25kXCIscz1cIm1pbnV0ZVwiLHU9XCJob3VyXCIsYT1cImRheVwiLG89XCJ3ZWVrXCIsYz1cIm1vbnRoXCIsZj1cInF1YXJ0ZXJcIixoPVwieWVhclwiLGQ9XCJkYXRlXCIsbD1cIkludmFsaWQgRGF0ZVwiLCQ9L14oXFxkezR9KVstL10/KFxcZHsxLDJ9KT9bLS9dPyhcXGR7MCwyfSlbVHRcXHNdKihcXGR7MSwyfSk/Oj8oXFxkezEsMn0pPzo/KFxcZHsxLDJ9KT9bLjpdPyhcXGQrKT8kLyx5PS9cXFsoW15cXF1dKyldfFl7MSw0fXxNezEsNH18RHsxLDJ9fGR7MSw0fXxIezEsMn18aHsxLDJ9fGF8QXxtezEsMn18c3sxLDJ9fFp7MSwyfXxTU1MvZyxNPXtuYW1lOlwiZW5cIix3ZWVrZGF5czpcIlN1bmRheV9Nb25kYXlfVHVlc2RheV9XZWRuZXNkYXlfVGh1cnNkYXlfRnJpZGF5X1NhdHVyZGF5XCIuc3BsaXQoXCJfXCIpLG1vbnRoczpcIkphbnVhcnlfRmVicnVhcnlfTWFyY2hfQXByaWxfTWF5X0p1bmVfSnVseV9BdWd1c3RfU2VwdGVtYmVyX09jdG9iZXJfTm92ZW1iZXJfRGVjZW1iZXJcIi5zcGxpdChcIl9cIiksb3JkaW5hbDpmdW5jdGlvbih0KXt2YXIgZT1bXCJ0aFwiLFwic3RcIixcIm5kXCIsXCJyZFwiXSxuPXQlMTAwO3JldHVyblwiW1wiK3QrKGVbKG4tMjApJTEwXXx8ZVtuXXx8ZVswXSkrXCJdXCJ9fSxtPWZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1TdHJpbmcodCk7cmV0dXJuIXJ8fHIubGVuZ3RoPj1lP3Q6XCJcIitBcnJheShlKzEtci5sZW5ndGgpLmpvaW4obikrdH0sdj17czptLHo6ZnVuY3Rpb24odCl7dmFyIGU9LXQudXRjT2Zmc2V0KCksbj1NYXRoLmFicyhlKSxyPU1hdGguZmxvb3Iobi82MCksaT1uJTYwO3JldHVybihlPD0wP1wiK1wiOlwiLVwiKSttKHIsMixcIjBcIikrXCI6XCIrbShpLDIsXCIwXCIpfSxtOmZ1bmN0aW9uIHQoZSxuKXtpZihlLmRhdGUoKTxuLmRhdGUoKSlyZXR1cm4tdChuLGUpO3ZhciByPTEyKihuLnllYXIoKS1lLnllYXIoKSkrKG4ubW9udGgoKS1lLm1vbnRoKCkpLGk9ZS5jbG9uZSgpLmFkZChyLGMpLHM9bi1pPDAsdT1lLmNsb25lKCkuYWRkKHIrKHM/LTE6MSksYyk7cmV0dXJuKygtKHIrKG4taSkvKHM/aS11OnUtaSkpfHwwKX0sYTpmdW5jdGlvbih0KXtyZXR1cm4gdDwwP01hdGguY2VpbCh0KXx8MDpNYXRoLmZsb29yKHQpfSxwOmZ1bmN0aW9uKHQpe3JldHVybntNOmMseTpoLHc6byxkOmEsRDpkLGg6dSxtOnMsczppLG1zOnIsUTpmfVt0XXx8U3RyaW5nKHR8fFwiXCIpLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvcyQvLFwiXCIpfSx1OmZ1bmN0aW9uKHQpe3JldHVybiB2b2lkIDA9PT10fX0sZz1cImVuXCIsRD17fTtEW2ddPU07dmFyIHA9XCIkaXNEYXlqc09iamVjdFwiLFM9ZnVuY3Rpb24odCl7cmV0dXJuIHQgaW5zdGFuY2VvZiBffHwhKCF0fHwhdFtwXSl9LHc9ZnVuY3Rpb24gdChlLG4scil7dmFyIGk7aWYoIWUpcmV0dXJuIGc7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGUpe3ZhciBzPWUudG9Mb3dlckNhc2UoKTtEW3NdJiYoaT1zKSxuJiYoRFtzXT1uLGk9cyk7dmFyIHU9ZS5zcGxpdChcIi1cIik7aWYoIWkmJnUubGVuZ3RoPjEpcmV0dXJuIHQodVswXSl9ZWxzZXt2YXIgYT1lLm5hbWU7RFthXT1lLGk9YX1yZXR1cm4hciYmaSYmKGc9aSksaXx8IXImJmd9LE89ZnVuY3Rpb24odCxlKXtpZihTKHQpKXJldHVybiB0LmNsb25lKCk7dmFyIG49XCJvYmplY3RcIj09dHlwZW9mIGU/ZTp7fTtyZXR1cm4gbi5kYXRlPXQsbi5hcmdzPWFyZ3VtZW50cyxuZXcgXyhuKX0sYj12O2IubD13LGIuaT1TLGIudz1mdW5jdGlvbih0LGUpe3JldHVybiBPKHQse2xvY2FsZTplLiRMLHV0YzplLiR1LHg6ZS4keCwkb2Zmc2V0OmUuJG9mZnNldH0pfTt2YXIgXz1mdW5jdGlvbigpe2Z1bmN0aW9uIE0odCl7dGhpcy4kTD13KHQubG9jYWxlLG51bGwsITApLHRoaXMucGFyc2UodCksdGhpcy4keD10aGlzLiR4fHx0Lnh8fHt9LHRoaXNbcF09ITB9dmFyIG09TS5wcm90b3R5cGU7cmV0dXJuIG0ucGFyc2U9ZnVuY3Rpb24odCl7dGhpcy4kZD1mdW5jdGlvbih0KXt2YXIgZT10LmRhdGUsbj10LnV0YztpZihudWxsPT09ZSlyZXR1cm4gbmV3IERhdGUoTmFOKTtpZihiLnUoZSkpcmV0dXJuIG5ldyBEYXRlO2lmKGUgaW5zdGFuY2VvZiBEYXRlKXJldHVybiBuZXcgRGF0ZShlKTtpZihcInN0cmluZ1wiPT10eXBlb2YgZSYmIS9aJC9pLnRlc3QoZSkpe3ZhciByPWUubWF0Y2goJCk7aWYocil7dmFyIGk9clsyXS0xfHwwLHM9KHJbN118fFwiMFwiKS5zdWJzdHJpbmcoMCwzKTtyZXR1cm4gbj9uZXcgRGF0ZShEYXRlLlVUQyhyWzFdLGksclszXXx8MSxyWzRdfHwwLHJbNV18fDAscls2XXx8MCxzKSk6bmV3IERhdGUoclsxXSxpLHJbM118fDEscls0XXx8MCxyWzVdfHwwLHJbNl18fDAscyl9fXJldHVybiBuZXcgRGF0ZShlKX0odCksdGhpcy5pbml0KCl9LG0uaW5pdD1mdW5jdGlvbigpe3ZhciB0PXRoaXMuJGQ7dGhpcy4keT10LmdldEZ1bGxZZWFyKCksdGhpcy4kTT10LmdldE1vbnRoKCksdGhpcy4kRD10LmdldERhdGUoKSx0aGlzLiRXPXQuZ2V0RGF5KCksdGhpcy4kSD10LmdldEhvdXJzKCksdGhpcy4kbT10LmdldE1pbnV0ZXMoKSx0aGlzLiRzPXQuZ2V0U2Vjb25kcygpLHRoaXMuJG1zPXQuZ2V0TWlsbGlzZWNvbmRzKCl9LG0uJHV0aWxzPWZ1bmN0aW9uKCl7cmV0dXJuIGJ9LG0uaXNWYWxpZD1mdW5jdGlvbigpe3JldHVybiEodGhpcy4kZC50b1N0cmluZygpPT09bCl9LG0uaXNTYW1lPWZ1bmN0aW9uKHQsZSl7dmFyIG49Tyh0KTtyZXR1cm4gdGhpcy5zdGFydE9mKGUpPD1uJiZuPD10aGlzLmVuZE9mKGUpfSxtLmlzQWZ0ZXI9ZnVuY3Rpb24odCxlKXtyZXR1cm4gTyh0KTx0aGlzLnN0YXJ0T2YoZSl9LG0uaXNCZWZvcmU9ZnVuY3Rpb24odCxlKXtyZXR1cm4gdGhpcy5lbmRPZihlKTxPKHQpfSxtLiRnPWZ1bmN0aW9uKHQsZSxuKXtyZXR1cm4gYi51KHQpP3RoaXNbZV06dGhpcy5zZXQobix0KX0sbS51bml4PWZ1bmN0aW9uKCl7cmV0dXJuIE1hdGguZmxvb3IodGhpcy52YWx1ZU9mKCkvMWUzKX0sbS52YWx1ZU9mPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuJGQuZ2V0VGltZSgpfSxtLnN0YXJ0T2Y9ZnVuY3Rpb24odCxlKXt2YXIgbj10aGlzLHI9ISFiLnUoZSl8fGUsZj1iLnAodCksbD1mdW5jdGlvbih0LGUpe3ZhciBpPWIudyhuLiR1P0RhdGUuVVRDKG4uJHksZSx0KTpuZXcgRGF0ZShuLiR5LGUsdCksbik7cmV0dXJuIHI/aTppLmVuZE9mKGEpfSwkPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIGIudyhuLnRvRGF0ZSgpW3RdLmFwcGx5KG4udG9EYXRlKFwic1wiKSwocj9bMCwwLDAsMF06WzIzLDU5LDU5LDk5OV0pLnNsaWNlKGUpKSxuKX0seT10aGlzLiRXLE09dGhpcy4kTSxtPXRoaXMuJEQsdj1cInNldFwiKyh0aGlzLiR1P1wiVVRDXCI6XCJcIik7c3dpdGNoKGYpe2Nhc2UgaDpyZXR1cm4gcj9sKDEsMCk6bCgzMSwxMSk7Y2FzZSBjOnJldHVybiByP2woMSxNKTpsKDAsTSsxKTtjYXNlIG86dmFyIGc9dGhpcy4kbG9jYWxlKCkud2Vla1N0YXJ0fHwwLEQ9KHk8Zz95Kzc6eSktZztyZXR1cm4gbChyP20tRDptKyg2LUQpLE0pO2Nhc2UgYTpjYXNlIGQ6cmV0dXJuICQoditcIkhvdXJzXCIsMCk7Y2FzZSB1OnJldHVybiAkKHYrXCJNaW51dGVzXCIsMSk7Y2FzZSBzOnJldHVybiAkKHYrXCJTZWNvbmRzXCIsMik7Y2FzZSBpOnJldHVybiAkKHYrXCJNaWxsaXNlY29uZHNcIiwzKTtkZWZhdWx0OnJldHVybiB0aGlzLmNsb25lKCl9fSxtLmVuZE9mPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLnN0YXJ0T2YodCwhMSl9LG0uJHNldD1mdW5jdGlvbih0LGUpe3ZhciBuLG89Yi5wKHQpLGY9XCJzZXRcIisodGhpcy4kdT9cIlVUQ1wiOlwiXCIpLGw9KG49e30sblthXT1mK1wiRGF0ZVwiLG5bZF09ZitcIkRhdGVcIixuW2NdPWYrXCJNb250aFwiLG5baF09ZitcIkZ1bGxZZWFyXCIsblt1XT1mK1wiSG91cnNcIixuW3NdPWYrXCJNaW51dGVzXCIsbltpXT1mK1wiU2Vjb25kc1wiLG5bcl09ZitcIk1pbGxpc2Vjb25kc1wiLG4pW29dLCQ9bz09PWE/dGhpcy4kRCsoZS10aGlzLiRXKTplO2lmKG89PT1jfHxvPT09aCl7dmFyIHk9dGhpcy5jbG9uZSgpLnNldChkLDEpO3kuJGRbbF0oJCkseS5pbml0KCksdGhpcy4kZD15LnNldChkLE1hdGgubWluKHRoaXMuJEQseS5kYXlzSW5Nb250aCgpKSkuJGR9ZWxzZSBsJiZ0aGlzLiRkW2xdKCQpO3JldHVybiB0aGlzLmluaXQoKSx0aGlzfSxtLnNldD1mdW5jdGlvbih0LGUpe3JldHVybiB0aGlzLmNsb25lKCkuJHNldCh0LGUpfSxtLmdldD1mdW5jdGlvbih0KXtyZXR1cm4gdGhpc1tiLnAodCldKCl9LG0uYWRkPWZ1bmN0aW9uKHIsZil7dmFyIGQsbD10aGlzO3I9TnVtYmVyKHIpO3ZhciAkPWIucChmKSx5PWZ1bmN0aW9uKHQpe3ZhciBlPU8obCk7cmV0dXJuIGIudyhlLmRhdGUoZS5kYXRlKCkrTWF0aC5yb3VuZCh0KnIpKSxsKX07aWYoJD09PWMpcmV0dXJuIHRoaXMuc2V0KGMsdGhpcy4kTStyKTtpZigkPT09aClyZXR1cm4gdGhpcy5zZXQoaCx0aGlzLiR5K3IpO2lmKCQ9PT1hKXJldHVybiB5KDEpO2lmKCQ9PT1vKXJldHVybiB5KDcpO3ZhciBNPShkPXt9LGRbc109ZSxkW3VdPW4sZFtpXT10LGQpWyRdfHwxLG09dGhpcy4kZC5nZXRUaW1lKCkrcipNO3JldHVybiBiLncobSx0aGlzKX0sbS5zdWJ0cmFjdD1mdW5jdGlvbih0LGUpe3JldHVybiB0aGlzLmFkZCgtMSp0LGUpfSxtLmZvcm1hdD1mdW5jdGlvbih0KXt2YXIgZT10aGlzLG49dGhpcy4kbG9jYWxlKCk7aWYoIXRoaXMuaXNWYWxpZCgpKXJldHVybiBuLmludmFsaWREYXRlfHxsO3ZhciByPXR8fFwiWVlZWS1NTS1ERFRISDptbTpzc1pcIixpPWIueih0aGlzKSxzPXRoaXMuJEgsdT10aGlzLiRtLGE9dGhpcy4kTSxvPW4ud2Vla2RheXMsYz1uLm1vbnRocyxmPW4ubWVyaWRpZW0saD1mdW5jdGlvbih0LG4saSxzKXtyZXR1cm4gdCYmKHRbbl18fHQoZSxyKSl8fGlbbl0uc2xpY2UoMCxzKX0sZD1mdW5jdGlvbih0KXtyZXR1cm4gYi5zKHMlMTJ8fDEyLHQsXCIwXCIpfSwkPWZ8fGZ1bmN0aW9uKHQsZSxuKXt2YXIgcj10PDEyP1wiQU1cIjpcIlBNXCI7cmV0dXJuIG4/ci50b0xvd2VyQ2FzZSgpOnJ9O3JldHVybiByLnJlcGxhY2UoeSwoZnVuY3Rpb24odCxyKXtyZXR1cm4gcnx8ZnVuY3Rpb24odCl7c3dpdGNoKHQpe2Nhc2VcIllZXCI6cmV0dXJuIFN0cmluZyhlLiR5KS5zbGljZSgtMik7Y2FzZVwiWVlZWVwiOnJldHVybiBiLnMoZS4keSw0LFwiMFwiKTtjYXNlXCJNXCI6cmV0dXJuIGErMTtjYXNlXCJNTVwiOnJldHVybiBiLnMoYSsxLDIsXCIwXCIpO2Nhc2VcIk1NTVwiOnJldHVybiBoKG4ubW9udGhzU2hvcnQsYSxjLDMpO2Nhc2VcIk1NTU1cIjpyZXR1cm4gaChjLGEpO2Nhc2VcIkRcIjpyZXR1cm4gZS4kRDtjYXNlXCJERFwiOnJldHVybiBiLnMoZS4kRCwyLFwiMFwiKTtjYXNlXCJkXCI6cmV0dXJuIFN0cmluZyhlLiRXKTtjYXNlXCJkZFwiOnJldHVybiBoKG4ud2Vla2RheXNNaW4sZS4kVyxvLDIpO2Nhc2VcImRkZFwiOnJldHVybiBoKG4ud2Vla2RheXNTaG9ydCxlLiRXLG8sMyk7Y2FzZVwiZGRkZFwiOnJldHVybiBvW2UuJFddO2Nhc2VcIkhcIjpyZXR1cm4gU3RyaW5nKHMpO2Nhc2VcIkhIXCI6cmV0dXJuIGIucyhzLDIsXCIwXCIpO2Nhc2VcImhcIjpyZXR1cm4gZCgxKTtjYXNlXCJoaFwiOnJldHVybiBkKDIpO2Nhc2VcImFcIjpyZXR1cm4gJChzLHUsITApO2Nhc2VcIkFcIjpyZXR1cm4gJChzLHUsITEpO2Nhc2VcIm1cIjpyZXR1cm4gU3RyaW5nKHUpO2Nhc2VcIm1tXCI6cmV0dXJuIGIucyh1LDIsXCIwXCIpO2Nhc2VcInNcIjpyZXR1cm4gU3RyaW5nKGUuJHMpO2Nhc2VcInNzXCI6cmV0dXJuIGIucyhlLiRzLDIsXCIwXCIpO2Nhc2VcIlNTU1wiOnJldHVybiBiLnMoZS4kbXMsMyxcIjBcIik7Y2FzZVwiWlwiOnJldHVybiBpfXJldHVybiBudWxsfSh0KXx8aS5yZXBsYWNlKFwiOlwiLFwiXCIpfSkpfSxtLnV0Y09mZnNldD1mdW5jdGlvbigpe3JldHVybiAxNSotTWF0aC5yb3VuZCh0aGlzLiRkLmdldFRpbWV6b25lT2Zmc2V0KCkvMTUpfSxtLmRpZmY9ZnVuY3Rpb24ocixkLGwpe3ZhciAkLHk9dGhpcyxNPWIucChkKSxtPU8ociksdj0obS51dGNPZmZzZXQoKS10aGlzLnV0Y09mZnNldCgpKSplLGc9dGhpcy1tLEQ9ZnVuY3Rpb24oKXtyZXR1cm4gYi5tKHksbSl9O3N3aXRjaChNKXtjYXNlIGg6JD1EKCkvMTI7YnJlYWs7Y2FzZSBjOiQ9RCgpO2JyZWFrO2Nhc2UgZjokPUQoKS8zO2JyZWFrO2Nhc2UgbzokPShnLXYpLzYwNDhlNTticmVhaztjYXNlIGE6JD0oZy12KS84NjRlNTticmVhaztjYXNlIHU6JD1nL247YnJlYWs7Y2FzZSBzOiQ9Zy9lO2JyZWFrO2Nhc2UgaTokPWcvdDticmVhaztkZWZhdWx0OiQ9Z31yZXR1cm4gbD8kOmIuYSgkKX0sbS5kYXlzSW5Nb250aD1mdW5jdGlvbigpe3JldHVybiB0aGlzLmVuZE9mKGMpLiREfSxtLiRsb2NhbGU9ZnVuY3Rpb24oKXtyZXR1cm4gRFt0aGlzLiRMXX0sbS5sb2NhbGU9ZnVuY3Rpb24odCxlKXtpZighdClyZXR1cm4gdGhpcy4kTDt2YXIgbj10aGlzLmNsb25lKCkscj13KHQsZSwhMCk7cmV0dXJuIHImJihuLiRMPXIpLG59LG0uY2xvbmU9ZnVuY3Rpb24oKXtyZXR1cm4gYi53KHRoaXMuJGQsdGhpcyl9LG0udG9EYXRlPWZ1bmN0aW9uKCl7cmV0dXJuIG5ldyBEYXRlKHRoaXMudmFsdWVPZigpKX0sbS50b0pTT049ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5pc1ZhbGlkKCk/dGhpcy50b0lTT1N0cmluZygpOm51bGx9LG0udG9JU09TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy4kZC50b0lTT1N0cmluZygpfSxtLnRvU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuJGQudG9VVENTdHJpbmcoKX0sTX0oKSxrPV8ucHJvdG90eXBlO3JldHVybiBPLnByb3RvdHlwZT1rLFtbXCIkbXNcIixyXSxbXCIkc1wiLGldLFtcIiRtXCIsc10sW1wiJEhcIix1XSxbXCIkV1wiLGFdLFtcIiRNXCIsY10sW1wiJHlcIixoXSxbXCIkRFwiLGRdXS5mb3JFYWNoKChmdW5jdGlvbih0KXtrW3RbMV1dPWZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLiRnKGUsdFswXSx0WzFdKX19KSksTy5leHRlbmQ9ZnVuY3Rpb24odCxlKXtyZXR1cm4gdC4kaXx8KHQoZSxfLE8pLHQuJGk9ITApLE99LE8ubG9jYWxlPXcsTy5pc0RheWpzPVMsTy51bml4PWZ1bmN0aW9uKHQpe3JldHVybiBPKDFlMyp0KX0sTy5lbj1EW2ddLE8uTHM9RCxPLnA9e30sT30pKTsiLCIvKipcclxuICogQSBjb2xsZWN0aW9uIG9mIHNoaW1zIHRoYXQgcHJvdmlkZSBtaW5pbWFsIGZ1bmN0aW9uYWxpdHkgb2YgdGhlIEVTNiBjb2xsZWN0aW9ucy5cclxuICpcclxuICogVGhlc2UgaW1wbGVtZW50YXRpb25zIGFyZSBub3QgbWVhbnQgdG8gYmUgdXNlZCBvdXRzaWRlIG9mIHRoZSBSZXNpemVPYnNlcnZlclxyXG4gKiBtb2R1bGVzIGFzIHRoZXkgY292ZXIgb25seSBhIGxpbWl0ZWQgcmFuZ2Ugb2YgdXNlIGNhc2VzLlxyXG4gKi9cclxuLyogZXNsaW50LWRpc2FibGUgcmVxdWlyZS1qc2RvYywgdmFsaWQtanNkb2MgKi9cclxudmFyIE1hcFNoaW0gPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKHR5cGVvZiBNYXAgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgcmV0dXJuIE1hcDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyBpbmRleCBpbiBwcm92aWRlZCBhcnJheSB0aGF0IG1hdGNoZXMgdGhlIHNwZWNpZmllZCBrZXkuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtBcnJheTxBcnJheT59IGFyclxyXG4gICAgICogQHBhcmFtIHsqfSBrZXlcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGdldEluZGV4KGFyciwga2V5KSB7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IC0xO1xyXG4gICAgICAgIGFyci5zb21lKGZ1bmN0aW9uIChlbnRyeSwgaW5kZXgpIHtcclxuICAgICAgICAgICAgaWYgKGVudHJ5WzBdID09PSBrZXkpIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGluZGV4O1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGNsYXNzXzEoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX19lbnRyaWVzX18gPSBbXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNsYXNzXzEucHJvdG90eXBlLCBcInNpemVcIiwge1xyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9fZW50cmllc19fLmxlbmd0aDtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQHBhcmFtIHsqfSBrZXlcclxuICAgICAgICAgKiBAcmV0dXJucyB7Kn1cclxuICAgICAgICAgKi9cclxuICAgICAgICBjbGFzc18xLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAoa2V5KSB7XHJcbiAgICAgICAgICAgIHZhciBpbmRleCA9IGdldEluZGV4KHRoaXMuX19lbnRyaWVzX18sIGtleSk7XHJcbiAgICAgICAgICAgIHZhciBlbnRyeSA9IHRoaXMuX19lbnRyaWVzX19baW5kZXhdO1xyXG4gICAgICAgICAgICByZXR1cm4gZW50cnkgJiYgZW50cnlbMV07XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAcGFyYW0geyp9IGtleVxyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gdmFsdWVcclxuICAgICAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICAgICAgKi9cclxuICAgICAgICBjbGFzc18xLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgICAgICB2YXIgaW5kZXggPSBnZXRJbmRleCh0aGlzLl9fZW50cmllc19fLCBrZXkpO1xyXG4gICAgICAgICAgICBpZiAofmluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9fZW50cmllc19fW2luZGV4XVsxXSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fX2VudHJpZXNfXy5wdXNoKFtrZXksIHZhbHVlXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0ga2V5XHJcbiAgICAgICAgICogQHJldHVybnMge3ZvaWR9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY2xhc3NfMS5wcm90b3R5cGUuZGVsZXRlID0gZnVuY3Rpb24gKGtleSkge1xyXG4gICAgICAgICAgICB2YXIgZW50cmllcyA9IHRoaXMuX19lbnRyaWVzX187XHJcbiAgICAgICAgICAgIHZhciBpbmRleCA9IGdldEluZGV4KGVudHJpZXMsIGtleSk7XHJcbiAgICAgICAgICAgIGlmICh+aW5kZXgpIHtcclxuICAgICAgICAgICAgICAgIGVudHJpZXMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQHBhcmFtIHsqfSBrZXlcclxuICAgICAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICAgICAgKi9cclxuICAgICAgICBjbGFzc18xLnByb3RvdHlwZS5oYXMgPSBmdW5jdGlvbiAoa2V5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiAhIX5nZXRJbmRleCh0aGlzLl9fZW50cmllc19fLCBrZXkpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQHJldHVybnMge3ZvaWR9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY2xhc3NfMS5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX19lbnRyaWVzX18uc3BsaWNlKDApO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtjdHg9bnVsbF1cclxuICAgICAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICAgICAgKi9cclxuICAgICAgICBjbGFzc18xLnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24gKGNhbGxiYWNrLCBjdHgpIHtcclxuICAgICAgICAgICAgaWYgKGN0eCA9PT0gdm9pZCAwKSB7IGN0eCA9IG51bGw7IH1cclxuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IHRoaXMuX19lbnRyaWVzX187IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZW50cnkgPSBfYVtfaV07XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKGN0eCwgZW50cnlbMV0sIGVudHJ5WzBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIGNsYXNzXzE7XHJcbiAgICB9KCkpO1xyXG59KSgpO1xuXG4vKipcclxuICogRGV0ZWN0cyB3aGV0aGVyIHdpbmRvdyBhbmQgZG9jdW1lbnQgb2JqZWN0cyBhcmUgYXZhaWxhYmxlIGluIGN1cnJlbnQgZW52aXJvbm1lbnQuXHJcbiAqL1xyXG52YXIgaXNCcm93c2VyID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQgPT09IGRvY3VtZW50O1xuXG4vLyBSZXR1cm5zIGdsb2JhbCBvYmplY3Qgb2YgYSBjdXJyZW50IGVudmlyb25tZW50LlxyXG52YXIgZ2xvYmFsJDEgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnICYmIGdsb2JhbC5NYXRoID09PSBNYXRoKSB7XHJcbiAgICAgICAgcmV0dXJuIGdsb2JhbDtcclxuICAgIH1cclxuICAgIGlmICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5NYXRoID09PSBNYXRoKSB7XHJcbiAgICAgICAgcmV0dXJuIHNlbGY7XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT09IE1hdGgpIHtcclxuICAgICAgICByZXR1cm4gd2luZG93O1xyXG4gICAgfVxyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jXHJcbiAgICByZXR1cm4gRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcclxufSkoKTtcblxuLyoqXHJcbiAqIEEgc2hpbSBmb3IgdGhlIHJlcXVlc3RBbmltYXRpb25GcmFtZSB3aGljaCBmYWxscyBiYWNrIHRvIHRoZSBzZXRUaW1lb3V0IGlmXHJcbiAqIGZpcnN0IG9uZSBpcyBub3Qgc3VwcG9ydGVkLlxyXG4gKlxyXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXF1ZXN0cycgaWRlbnRpZmllci5cclxuICovXHJcbnZhciByZXF1ZXN0QW5pbWF0aW9uRnJhbWUkMSA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAodHlwZW9mIHJlcXVlc3RBbmltYXRpb25GcmFtZSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgIC8vIEl0J3MgcmVxdWlyZWQgdG8gdXNlIGEgYm91bmRlZCBmdW5jdGlvbiBiZWNhdXNlIElFIHNvbWV0aW1lcyB0aHJvd3NcclxuICAgICAgICAvLyBhbiBcIkludmFsaWQgY2FsbGluZyBvYmplY3RcIiBlcnJvciBpZiByQUYgaXMgaW52b2tlZCB3aXRob3V0IHRoZSBnbG9iYWxcclxuICAgICAgICAvLyBvYmplY3Qgb24gdGhlIGxlZnQgaGFuZCBzaWRlLlxyXG4gICAgICAgIHJldHVybiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUuYmluZChnbG9iYWwkMSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGNhbGxiYWNrKSB7IHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNhbGxiYWNrKERhdGUubm93KCkpOyB9LCAxMDAwIC8gNjApOyB9O1xyXG59KSgpO1xuXG4vLyBEZWZpbmVzIG1pbmltdW0gdGltZW91dCBiZWZvcmUgYWRkaW5nIGEgdHJhaWxpbmcgY2FsbC5cclxudmFyIHRyYWlsaW5nVGltZW91dCA9IDI7XHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgd3JhcHBlciBmdW5jdGlvbiB3aGljaCBlbnN1cmVzIHRoYXQgcHJvdmlkZWQgY2FsbGJhY2sgd2lsbCBiZVxyXG4gKiBpbnZva2VkIG9ubHkgb25jZSBkdXJpbmcgdGhlIHNwZWNpZmllZCBkZWxheSBwZXJpb2QuXHJcbiAqXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIC0gRnVuY3Rpb24gdG8gYmUgaW52b2tlZCBhZnRlciB0aGUgZGVsYXkgcGVyaW9kLlxyXG4gKiBAcGFyYW0ge251bWJlcn0gZGVsYXkgLSBEZWxheSBhZnRlciB3aGljaCB0byBpbnZva2UgY2FsbGJhY2suXHJcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn1cclxuICovXHJcbmZ1bmN0aW9uIHRocm90dGxlIChjYWxsYmFjaywgZGVsYXkpIHtcclxuICAgIHZhciBsZWFkaW5nQ2FsbCA9IGZhbHNlLCB0cmFpbGluZ0NhbGwgPSBmYWxzZSwgbGFzdENhbGxUaW1lID0gMDtcclxuICAgIC8qKlxyXG4gICAgICogSW52b2tlcyB0aGUgb3JpZ2luYWwgY2FsbGJhY2sgZnVuY3Rpb24gYW5kIHNjaGVkdWxlcyBuZXcgaW52b2NhdGlvbiBpZlxyXG4gICAgICogdGhlIFwicHJveHlcIiB3YXMgY2FsbGVkIGR1cmluZyBjdXJyZW50IHJlcXVlc3QuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge3ZvaWR9XHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIHJlc29sdmVQZW5kaW5nKCkge1xyXG4gICAgICAgIGlmIChsZWFkaW5nQ2FsbCkge1xyXG4gICAgICAgICAgICBsZWFkaW5nQ2FsbCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHJhaWxpbmdDYWxsKSB7XHJcbiAgICAgICAgICAgIHByb3h5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsYmFjayBpbnZva2VkIGFmdGVyIHRoZSBzcGVjaWZpZWQgZGVsYXkuIEl0IHdpbGwgZnVydGhlciBwb3N0cG9uZVxyXG4gICAgICogaW52b2NhdGlvbiBvZiB0aGUgb3JpZ2luYWwgZnVuY3Rpb24gZGVsZWdhdGluZyBpdCB0byB0aGVcclxuICAgICAqIHJlcXVlc3RBbmltYXRpb25GcmFtZS5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gdGltZW91dENhbGxiYWNrKCkge1xyXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSQxKHJlc29sdmVQZW5kaW5nKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogU2NoZWR1bGVzIGludm9jYXRpb24gb2YgdGhlIG9yaWdpbmFsIGZ1bmN0aW9uLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBwcm94eSgpIHtcclxuICAgICAgICB2YXIgdGltZVN0YW1wID0gRGF0ZS5ub3coKTtcclxuICAgICAgICBpZiAobGVhZGluZ0NhbGwpIHtcclxuICAgICAgICAgICAgLy8gUmVqZWN0IGltbWVkaWF0ZWx5IGZvbGxvd2luZyBjYWxscy5cclxuICAgICAgICAgICAgaWYgKHRpbWVTdGFtcCAtIGxhc3RDYWxsVGltZSA8IHRyYWlsaW5nVGltZW91dCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIFNjaGVkdWxlIG5ldyBjYWxsIHRvIGJlIGluIGludm9rZWQgd2hlbiB0aGUgcGVuZGluZyBvbmUgaXMgcmVzb2x2ZWQuXHJcbiAgICAgICAgICAgIC8vIFRoaXMgaXMgaW1wb3J0YW50IGZvciBcInRyYW5zaXRpb25zXCIgd2hpY2ggbmV2ZXIgYWN0dWFsbHkgc3RhcnRcclxuICAgICAgICAgICAgLy8gaW1tZWRpYXRlbHkgc28gdGhlcmUgaXMgYSBjaGFuY2UgdGhhdCB3ZSBtaWdodCBtaXNzIG9uZSBpZiBjaGFuZ2VcclxuICAgICAgICAgICAgLy8gaGFwcGVucyBhbWlkcyB0aGUgcGVuZGluZyBpbnZvY2F0aW9uLlxyXG4gICAgICAgICAgICB0cmFpbGluZ0NhbGwgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbGVhZGluZ0NhbGwgPSB0cnVlO1xyXG4gICAgICAgICAgICB0cmFpbGluZ0NhbGwgPSBmYWxzZTtcclxuICAgICAgICAgICAgc2V0VGltZW91dCh0aW1lb3V0Q2FsbGJhY2ssIGRlbGF5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGFzdENhbGxUaW1lID0gdGltZVN0YW1wO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHByb3h5O1xyXG59XG5cbi8vIE1pbmltdW0gZGVsYXkgYmVmb3JlIGludm9raW5nIHRoZSB1cGRhdGUgb2Ygb2JzZXJ2ZXJzLlxyXG52YXIgUkVGUkVTSF9ERUxBWSA9IDIwO1xyXG4vLyBBIGxpc3Qgb2Ygc3Vic3RyaW5ncyBvZiBDU1MgcHJvcGVydGllcyB1c2VkIHRvIGZpbmQgdHJhbnNpdGlvbiBldmVudHMgdGhhdFxyXG4vLyBtaWdodCBhZmZlY3QgZGltZW5zaW9ucyBvZiBvYnNlcnZlZCBlbGVtZW50cy5cclxudmFyIHRyYW5zaXRpb25LZXlzID0gWyd0b3AnLCAncmlnaHQnLCAnYm90dG9tJywgJ2xlZnQnLCAnd2lkdGgnLCAnaGVpZ2h0JywgJ3NpemUnLCAnd2VpZ2h0J107XHJcbi8vIENoZWNrIGlmIE11dGF0aW9uT2JzZXJ2ZXIgaXMgYXZhaWxhYmxlLlxyXG52YXIgbXV0YXRpb25PYnNlcnZlclN1cHBvcnRlZCA9IHR5cGVvZiBNdXRhdGlvbk9ic2VydmVyICE9PSAndW5kZWZpbmVkJztcclxuLyoqXHJcbiAqIFNpbmdsZXRvbiBjb250cm9sbGVyIGNsYXNzIHdoaWNoIGhhbmRsZXMgdXBkYXRlcyBvZiBSZXNpemVPYnNlcnZlciBpbnN0YW5jZXMuXHJcbiAqL1xyXG52YXIgUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlci5cclxuICAgICAqXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIoKSB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogSW5kaWNhdGVzIHdoZXRoZXIgRE9NIGxpc3RlbmVycyBoYXZlIGJlZW4gYWRkZWQuXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAcHJpdmF0ZSB7Ym9vbGVhbn1cclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLmNvbm5lY3RlZF8gPSBmYWxzZTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUZWxscyB0aGF0IGNvbnRyb2xsZXIgaGFzIHN1YnNjcmliZWQgZm9yIE11dGF0aW9uIEV2ZW50cy5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEBwcml2YXRlIHtib29sZWFufVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMubXV0YXRpb25FdmVudHNBZGRlZF8gPSBmYWxzZTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBLZWVwcyByZWZlcmVuY2UgdG8gdGhlIGluc3RhbmNlIG9mIE11dGF0aW9uT2JzZXJ2ZXIuXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAcHJpdmF0ZSB7TXV0YXRpb25PYnNlcnZlcn1cclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLm11dGF0aW9uc09ic2VydmVyXyA9IG51bGw7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQSBsaXN0IG9mIGNvbm5lY3RlZCBvYnNlcnZlcnMuXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAcHJpdmF0ZSB7QXJyYXk8UmVzaXplT2JzZXJ2ZXJTUEk+fVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMub2JzZXJ2ZXJzXyA9IFtdO1xyXG4gICAgICAgIHRoaXMub25UcmFuc2l0aW9uRW5kXyA9IHRoaXMub25UcmFuc2l0aW9uRW5kXy5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMucmVmcmVzaCA9IHRocm90dGxlKHRoaXMucmVmcmVzaC5iaW5kKHRoaXMpLCBSRUZSRVNIX0RFTEFZKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQWRkcyBvYnNlcnZlciB0byBvYnNlcnZlcnMgbGlzdC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge1Jlc2l6ZU9ic2VydmVyU1BJfSBvYnNlcnZlciAtIE9ic2VydmVyIHRvIGJlIGFkZGVkLlxyXG4gICAgICogQHJldHVybnMge3ZvaWR9XHJcbiAgICAgKi9cclxuICAgIFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlci5wcm90b3R5cGUuYWRkT2JzZXJ2ZXIgPSBmdW5jdGlvbiAob2JzZXJ2ZXIpIHtcclxuICAgICAgICBpZiAoIX50aGlzLm9ic2VydmVyc18uaW5kZXhPZihvYnNlcnZlcikpIHtcclxuICAgICAgICAgICAgdGhpcy5vYnNlcnZlcnNfLnB1c2gob2JzZXJ2ZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBBZGQgbGlzdGVuZXJzIGlmIHRoZXkgaGF2ZW4ndCBiZWVuIGFkZGVkIHlldC5cclxuICAgICAgICBpZiAoIXRoaXMuY29ubmVjdGVkXykge1xyXG4gICAgICAgICAgICB0aGlzLmNvbm5lY3RfKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogUmVtb3ZlcyBvYnNlcnZlciBmcm9tIG9ic2VydmVycyBsaXN0LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7UmVzaXplT2JzZXJ2ZXJTUEl9IG9ic2VydmVyIC0gT2JzZXJ2ZXIgdG8gYmUgcmVtb3ZlZC5cclxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxyXG4gICAgICovXHJcbiAgICBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIucHJvdG90eXBlLnJlbW92ZU9ic2VydmVyID0gZnVuY3Rpb24gKG9ic2VydmVyKSB7XHJcbiAgICAgICAgdmFyIG9ic2VydmVycyA9IHRoaXMub2JzZXJ2ZXJzXztcclxuICAgICAgICB2YXIgaW5kZXggPSBvYnNlcnZlcnMuaW5kZXhPZihvYnNlcnZlcik7XHJcbiAgICAgICAgLy8gUmVtb3ZlIG9ic2VydmVyIGlmIGl0J3MgcHJlc2VudCBpbiByZWdpc3RyeS5cclxuICAgICAgICBpZiAofmluZGV4KSB7XHJcbiAgICAgICAgICAgIG9ic2VydmVycy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBSZW1vdmUgbGlzdGVuZXJzIGlmIGNvbnRyb2xsZXIgaGFzIG5vIGNvbm5lY3RlZCBvYnNlcnZlcnMuXHJcbiAgICAgICAgaWYgKCFvYnNlcnZlcnMubGVuZ3RoICYmIHRoaXMuY29ubmVjdGVkXykge1xyXG4gICAgICAgICAgICB0aGlzLmRpc2Nvbm5lY3RfKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogSW52b2tlcyB0aGUgdXBkYXRlIG9mIG9ic2VydmVycy4gSXQgd2lsbCBjb250aW51ZSBydW5uaW5nIHVwZGF0ZXMgaW5zb2ZhclxyXG4gICAgICogaXQgZGV0ZWN0cyBjaGFuZ2VzLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxyXG4gICAgICovXHJcbiAgICBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIucHJvdG90eXBlLnJlZnJlc2ggPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGNoYW5nZXNEZXRlY3RlZCA9IHRoaXMudXBkYXRlT2JzZXJ2ZXJzXygpO1xyXG4gICAgICAgIC8vIENvbnRpbnVlIHJ1bm5pbmcgdXBkYXRlcyBpZiBjaGFuZ2VzIGhhdmUgYmVlbiBkZXRlY3RlZCBhcyB0aGVyZSBtaWdodFxyXG4gICAgICAgIC8vIGJlIGZ1dHVyZSBvbmVzIGNhdXNlZCBieSBDU1MgdHJhbnNpdGlvbnMuXHJcbiAgICAgICAgaWYgKGNoYW5nZXNEZXRlY3RlZCkge1xyXG4gICAgICAgICAgICB0aGlzLnJlZnJlc2goKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBVcGRhdGVzIGV2ZXJ5IG9ic2VydmVyIGZyb20gb2JzZXJ2ZXJzIGxpc3QgYW5kIG5vdGlmaWVzIHRoZW0gb2YgcXVldWVkXHJcbiAgICAgKiBlbnRyaWVzLlxyXG4gICAgICpcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBcInRydWVcIiBpZiBhbnkgb2JzZXJ2ZXIgaGFzIGRldGVjdGVkIGNoYW5nZXMgaW5cclxuICAgICAqICAgICAgZGltZW5zaW9ucyBvZiBpdCdzIGVsZW1lbnRzLlxyXG4gICAgICovXHJcbiAgICBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIucHJvdG90eXBlLnVwZGF0ZU9ic2VydmVyc18gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gQ29sbGVjdCBvYnNlcnZlcnMgdGhhdCBoYXZlIGFjdGl2ZSBvYnNlcnZhdGlvbnMuXHJcbiAgICAgICAgdmFyIGFjdGl2ZU9ic2VydmVycyA9IHRoaXMub2JzZXJ2ZXJzXy5maWx0ZXIoZnVuY3Rpb24gKG9ic2VydmVyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBvYnNlcnZlci5nYXRoZXJBY3RpdmUoKSwgb2JzZXJ2ZXIuaGFzQWN0aXZlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gRGVsaXZlciBub3RpZmljYXRpb25zIGluIGEgc2VwYXJhdGUgY3ljbGUgaW4gb3JkZXIgdG8gYXZvaWQgYW55XHJcbiAgICAgICAgLy8gY29sbGlzaW9ucyBiZXR3ZWVuIG9ic2VydmVycywgZS5nLiB3aGVuIG11bHRpcGxlIGluc3RhbmNlcyBvZlxyXG4gICAgICAgIC8vIFJlc2l6ZU9ic2VydmVyIGFyZSB0cmFja2luZyB0aGUgc2FtZSBlbGVtZW50IGFuZCB0aGUgY2FsbGJhY2sgb2Ygb25lXHJcbiAgICAgICAgLy8gb2YgdGhlbSBjaGFuZ2VzIGNvbnRlbnQgZGltZW5zaW9ucyBvZiB0aGUgb2JzZXJ2ZWQgdGFyZ2V0LiBTb21ldGltZXNcclxuICAgICAgICAvLyB0aGlzIG1heSByZXN1bHQgaW4gbm90aWZpY2F0aW9ucyBiZWluZyBibG9ja2VkIGZvciB0aGUgcmVzdCBvZiBvYnNlcnZlcnMuXHJcbiAgICAgICAgYWN0aXZlT2JzZXJ2ZXJzLmZvckVhY2goZnVuY3Rpb24gKG9ic2VydmVyKSB7IHJldHVybiBvYnNlcnZlci5icm9hZGNhc3RBY3RpdmUoKTsgfSk7XHJcbiAgICAgICAgcmV0dXJuIGFjdGl2ZU9ic2VydmVycy5sZW5ndGggPiAwO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogSW5pdGlhbGl6ZXMgRE9NIGxpc3RlbmVycy5cclxuICAgICAqXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICogQHJldHVybnMge3ZvaWR9XHJcbiAgICAgKi9cclxuICAgIFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlci5wcm90b3R5cGUuY29ubmVjdF8gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gRG8gbm90aGluZyBpZiBydW5uaW5nIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnQgb3IgaWYgbGlzdGVuZXJzXHJcbiAgICAgICAgLy8gaGF2ZSBiZWVuIGFscmVhZHkgYWRkZWQuXHJcbiAgICAgICAgaWYgKCFpc0Jyb3dzZXIgfHwgdGhpcy5jb25uZWN0ZWRfKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gU3Vic2NyaXB0aW9uIHRvIHRoZSBcIlRyYW5zaXRpb25lbmRcIiBldmVudCBpcyB1c2VkIGFzIGEgd29ya2Fyb3VuZCBmb3JcclxuICAgICAgICAvLyBkZWxheWVkIHRyYW5zaXRpb25zLiBUaGlzIHdheSBpdCdzIHBvc3NpYmxlIHRvIGNhcHR1cmUgYXQgbGVhc3QgdGhlXHJcbiAgICAgICAgLy8gZmluYWwgc3RhdGUgb2YgYW4gZWxlbWVudC5cclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgdGhpcy5vblRyYW5zaXRpb25FbmRfKTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5yZWZyZXNoKTtcclxuICAgICAgICBpZiAobXV0YXRpb25PYnNlcnZlclN1cHBvcnRlZCkge1xyXG4gICAgICAgICAgICB0aGlzLm11dGF0aW9uc09ic2VydmVyXyA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKHRoaXMucmVmcmVzaCk7XHJcbiAgICAgICAgICAgIHRoaXMubXV0YXRpb25zT2JzZXJ2ZXJfLm9ic2VydmUoZG9jdW1lbnQsIHtcclxuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBjaGlsZExpc3Q6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBjaGFyYWN0ZXJEYXRhOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgc3VidHJlZTogdHJ1ZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTVN1YnRyZWVNb2RpZmllZCcsIHRoaXMucmVmcmVzaCk7XHJcbiAgICAgICAgICAgIHRoaXMubXV0YXRpb25FdmVudHNBZGRlZF8gPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvbm5lY3RlZF8gPSB0cnVlO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogUmVtb3ZlcyBET00gbGlzdGVuZXJzLlxyXG4gICAgICpcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICAqL1xyXG4gICAgUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyLnByb3RvdHlwZS5kaXNjb25uZWN0XyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBEbyBub3RoaW5nIGlmIHJ1bm5pbmcgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudCBvciBpZiBsaXN0ZW5lcnNcclxuICAgICAgICAvLyBoYXZlIGJlZW4gYWxyZWFkeSByZW1vdmVkLlxyXG4gICAgICAgIGlmICghaXNCcm93c2VyIHx8ICF0aGlzLmNvbm5lY3RlZF8pIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgdGhpcy5vblRyYW5zaXRpb25FbmRfKTtcclxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5yZWZyZXNoKTtcclxuICAgICAgICBpZiAodGhpcy5tdXRhdGlvbnNPYnNlcnZlcl8pIHtcclxuICAgICAgICAgICAgdGhpcy5tdXRhdGlvbnNPYnNlcnZlcl8uZGlzY29ubmVjdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5tdXRhdGlvbkV2ZW50c0FkZGVkXykge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdET01TdWJ0cmVlTW9kaWZpZWQnLCB0aGlzLnJlZnJlc2gpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm11dGF0aW9uc09ic2VydmVyXyA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5tdXRhdGlvbkV2ZW50c0FkZGVkXyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuY29ubmVjdGVkXyA9IGZhbHNlO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogXCJUcmFuc2l0aW9uZW5kXCIgZXZlbnQgaGFuZGxlci5cclxuICAgICAqXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICogQHBhcmFtIHtUcmFuc2l0aW9uRXZlbnR9IGV2ZW50XHJcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICAqL1xyXG4gICAgUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyLnByb3RvdHlwZS5vblRyYW5zaXRpb25FbmRfID0gZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgdmFyIF9iID0gX2EucHJvcGVydHlOYW1lLCBwcm9wZXJ0eU5hbWUgPSBfYiA9PT0gdm9pZCAwID8gJycgOiBfYjtcclxuICAgICAgICAvLyBEZXRlY3Qgd2hldGhlciB0cmFuc2l0aW9uIG1heSBhZmZlY3QgZGltZW5zaW9ucyBvZiBhbiBlbGVtZW50LlxyXG4gICAgICAgIHZhciBpc1JlZmxvd1Byb3BlcnR5ID0gdHJhbnNpdGlvbktleXMuc29tZShmdW5jdGlvbiAoa2V5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiAhIX5wcm9wZXJ0eU5hbWUuaW5kZXhPZihrZXkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChpc1JlZmxvd1Byb3BlcnR5KSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVmcmVzaCgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgaW5zdGFuY2Ugb2YgdGhlIFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlci5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7UmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyfVxyXG4gICAgICovXHJcbiAgICBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIuZ2V0SW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmluc3RhbmNlXykge1xyXG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlXyA9IG5ldyBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2VfO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogSG9sZHMgcmVmZXJlbmNlIHRvIHRoZSBjb250cm9sbGVyJ3MgaW5zdGFuY2UuXHJcbiAgICAgKlxyXG4gICAgICogQHByaXZhdGUge1Jlc2l6ZU9ic2VydmVyQ29udHJvbGxlcn1cclxuICAgICAqL1xyXG4gICAgUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyLmluc3RhbmNlXyA9IG51bGw7XHJcbiAgICByZXR1cm4gUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyO1xyXG59KCkpO1xuXG4vKipcclxuICogRGVmaW5lcyBub24td3JpdGFibGUvZW51bWVyYWJsZSBwcm9wZXJ0aWVzIG9mIHRoZSBwcm92aWRlZCB0YXJnZXQgb2JqZWN0LlxyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gdGFyZ2V0IC0gT2JqZWN0IGZvciB3aGljaCB0byBkZWZpbmUgcHJvcGVydGllcy5cclxuICogQHBhcmFtIHtPYmplY3R9IHByb3BzIC0gUHJvcGVydGllcyB0byBiZSBkZWZpbmVkLlxyXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBUYXJnZXQgb2JqZWN0LlxyXG4gKi9cclxudmFyIGRlZmluZUNvbmZpZ3VyYWJsZSA9IChmdW5jdGlvbiAodGFyZ2V0LCBwcm9wcykge1xyXG4gICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IE9iamVjdC5rZXlzKHByb3BzKTsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICB2YXIga2V5ID0gX2FbX2ldO1xyXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwge1xyXG4gICAgICAgICAgICB2YWx1ZTogcHJvcHNba2V5XSxcclxuICAgICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHdyaXRhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGFyZ2V0O1xyXG59KTtcblxuLyoqXHJcbiAqIFJldHVybnMgdGhlIGdsb2JhbCBvYmplY3QgYXNzb2NpYXRlZCB3aXRoIHByb3ZpZGVkIGVsZW1lbnQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSB0YXJnZXRcclxuICogQHJldHVybnMge09iamVjdH1cclxuICovXHJcbnZhciBnZXRXaW5kb3dPZiA9IChmdW5jdGlvbiAodGFyZ2V0KSB7XHJcbiAgICAvLyBBc3N1bWUgdGhhdCB0aGUgZWxlbWVudCBpcyBhbiBpbnN0YW5jZSBvZiBOb2RlLCB3aGljaCBtZWFucyB0aGF0IGl0XHJcbiAgICAvLyBoYXMgdGhlIFwib3duZXJEb2N1bWVudFwiIHByb3BlcnR5IGZyb20gd2hpY2ggd2UgY2FuIHJldHJpZXZlIGFcclxuICAgIC8vIGNvcnJlc3BvbmRpbmcgZ2xvYmFsIG9iamVjdC5cclxuICAgIHZhciBvd25lckdsb2JhbCA9IHRhcmdldCAmJiB0YXJnZXQub3duZXJEb2N1bWVudCAmJiB0YXJnZXQub3duZXJEb2N1bWVudC5kZWZhdWx0VmlldztcclxuICAgIC8vIFJldHVybiB0aGUgbG9jYWwgZ2xvYmFsIG9iamVjdCBpZiBpdCdzIG5vdCBwb3NzaWJsZSBleHRyYWN0IG9uZSBmcm9tXHJcbiAgICAvLyBwcm92aWRlZCBlbGVtZW50LlxyXG4gICAgcmV0dXJuIG93bmVyR2xvYmFsIHx8IGdsb2JhbCQxO1xyXG59KTtcblxuLy8gUGxhY2Vob2xkZXIgb2YgYW4gZW1wdHkgY29udGVudCByZWN0YW5nbGUuXHJcbnZhciBlbXB0eVJlY3QgPSBjcmVhdGVSZWN0SW5pdCgwLCAwLCAwLCAwKTtcclxuLyoqXHJcbiAqIENvbnZlcnRzIHByb3ZpZGVkIHN0cmluZyB0byBhIG51bWJlci5cclxuICpcclxuICogQHBhcmFtIHtudW1iZXJ8c3RyaW5nfSB2YWx1ZVxyXG4gKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gKi9cclxuZnVuY3Rpb24gdG9GbG9hdCh2YWx1ZSkge1xyXG4gICAgcmV0dXJuIHBhcnNlRmxvYXQodmFsdWUpIHx8IDA7XHJcbn1cclxuLyoqXHJcbiAqIEV4dHJhY3RzIGJvcmRlcnMgc2l6ZSBmcm9tIHByb3ZpZGVkIHN0eWxlcy5cclxuICpcclxuICogQHBhcmFtIHtDU1NTdHlsZURlY2xhcmF0aW9ufSBzdHlsZXNcclxuICogQHBhcmFtIHsuLi5zdHJpbmd9IHBvc2l0aW9ucyAtIEJvcmRlcnMgcG9zaXRpb25zICh0b3AsIHJpZ2h0LCAuLi4pXHJcbiAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRCb3JkZXJzU2l6ZShzdHlsZXMpIHtcclxuICAgIHZhciBwb3NpdGlvbnMgPSBbXTtcclxuICAgIGZvciAodmFyIF9pID0gMTsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgcG9zaXRpb25zW19pIC0gMV0gPSBhcmd1bWVudHNbX2ldO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHBvc2l0aW9ucy5yZWR1Y2UoZnVuY3Rpb24gKHNpemUsIHBvc2l0aW9uKSB7XHJcbiAgICAgICAgdmFyIHZhbHVlID0gc3R5bGVzWydib3JkZXItJyArIHBvc2l0aW9uICsgJy13aWR0aCddO1xyXG4gICAgICAgIHJldHVybiBzaXplICsgdG9GbG9hdCh2YWx1ZSk7XHJcbiAgICB9LCAwKTtcclxufVxyXG4vKipcclxuICogRXh0cmFjdHMgcGFkZGluZ3Mgc2l6ZXMgZnJvbSBwcm92aWRlZCBzdHlsZXMuXHJcbiAqXHJcbiAqIEBwYXJhbSB7Q1NTU3R5bGVEZWNsYXJhdGlvbn0gc3R5bGVzXHJcbiAqIEByZXR1cm5zIHtPYmplY3R9IFBhZGRpbmdzIGJveC5cclxuICovXHJcbmZ1bmN0aW9uIGdldFBhZGRpbmdzKHN0eWxlcykge1xyXG4gICAgdmFyIHBvc2l0aW9ucyA9IFsndG9wJywgJ3JpZ2h0JywgJ2JvdHRvbScsICdsZWZ0J107XHJcbiAgICB2YXIgcGFkZGluZ3MgPSB7fTtcclxuICAgIGZvciAodmFyIF9pID0gMCwgcG9zaXRpb25zXzEgPSBwb3NpdGlvbnM7IF9pIDwgcG9zaXRpb25zXzEubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgdmFyIHBvc2l0aW9uID0gcG9zaXRpb25zXzFbX2ldO1xyXG4gICAgICAgIHZhciB2YWx1ZSA9IHN0eWxlc1sncGFkZGluZy0nICsgcG9zaXRpb25dO1xyXG4gICAgICAgIHBhZGRpbmdzW3Bvc2l0aW9uXSA9IHRvRmxvYXQodmFsdWUpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHBhZGRpbmdzO1xyXG59XHJcbi8qKlxyXG4gKiBDYWxjdWxhdGVzIGNvbnRlbnQgcmVjdGFuZ2xlIG9mIHByb3ZpZGVkIFNWRyBlbGVtZW50LlxyXG4gKlxyXG4gKiBAcGFyYW0ge1NWR0dyYXBoaWNzRWxlbWVudH0gdGFyZ2V0IC0gRWxlbWVudCBjb250ZW50IHJlY3RhbmdsZSBvZiB3aGljaCBuZWVkc1xyXG4gKiAgICAgIHRvIGJlIGNhbGN1bGF0ZWQuXHJcbiAqIEByZXR1cm5zIHtET01SZWN0SW5pdH1cclxuICovXHJcbmZ1bmN0aW9uIGdldFNWR0NvbnRlbnRSZWN0KHRhcmdldCkge1xyXG4gICAgdmFyIGJib3ggPSB0YXJnZXQuZ2V0QkJveCgpO1xyXG4gICAgcmV0dXJuIGNyZWF0ZVJlY3RJbml0KDAsIDAsIGJib3gud2lkdGgsIGJib3guaGVpZ2h0KTtcclxufVxyXG4vKipcclxuICogQ2FsY3VsYXRlcyBjb250ZW50IHJlY3RhbmdsZSBvZiBwcm92aWRlZCBIVE1MRWxlbWVudC5cclxuICpcclxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gdGFyZ2V0IC0gRWxlbWVudCBmb3Igd2hpY2ggdG8gY2FsY3VsYXRlIHRoZSBjb250ZW50IHJlY3RhbmdsZS5cclxuICogQHJldHVybnMge0RPTVJlY3RJbml0fVxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0SFRNTEVsZW1lbnRDb250ZW50UmVjdCh0YXJnZXQpIHtcclxuICAgIC8vIENsaWVudCB3aWR0aCAmIGhlaWdodCBwcm9wZXJ0aWVzIGNhbid0IGJlXHJcbiAgICAvLyB1c2VkIGV4Y2x1c2l2ZWx5IGFzIHRoZXkgcHJvdmlkZSByb3VuZGVkIHZhbHVlcy5cclxuICAgIHZhciBjbGllbnRXaWR0aCA9IHRhcmdldC5jbGllbnRXaWR0aCwgY2xpZW50SGVpZ2h0ID0gdGFyZ2V0LmNsaWVudEhlaWdodDtcclxuICAgIC8vIEJ5IHRoaXMgY29uZGl0aW9uIHdlIGNhbiBjYXRjaCBhbGwgbm9uLXJlcGxhY2VkIGlubGluZSwgaGlkZGVuIGFuZFxyXG4gICAgLy8gZGV0YWNoZWQgZWxlbWVudHMuIFRob3VnaCBlbGVtZW50cyB3aXRoIHdpZHRoICYgaGVpZ2h0IHByb3BlcnRpZXMgbGVzc1xyXG4gICAgLy8gdGhhbiAwLjUgd2lsbCBiZSBkaXNjYXJkZWQgYXMgd2VsbC5cclxuICAgIC8vXHJcbiAgICAvLyBXaXRob3V0IGl0IHdlIHdvdWxkIG5lZWQgdG8gaW1wbGVtZW50IHNlcGFyYXRlIG1ldGhvZHMgZm9yIGVhY2ggb2ZcclxuICAgIC8vIHRob3NlIGNhc2VzIGFuZCBpdCdzIG5vdCBwb3NzaWJsZSB0byBwZXJmb3JtIGEgcHJlY2lzZSBhbmQgcGVyZm9ybWFuY2VcclxuICAgIC8vIGVmZmVjdGl2ZSB0ZXN0IGZvciBoaWRkZW4gZWxlbWVudHMuIEUuZy4gZXZlbiBqUXVlcnkncyAnOnZpc2libGUnIGZpbHRlclxyXG4gICAgLy8gZ2l2ZXMgd3JvbmcgcmVzdWx0cyBmb3IgZWxlbWVudHMgd2l0aCB3aWR0aCAmIGhlaWdodCBsZXNzIHRoYW4gMC41LlxyXG4gICAgaWYgKCFjbGllbnRXaWR0aCAmJiAhY2xpZW50SGVpZ2h0KSB7XHJcbiAgICAgICAgcmV0dXJuIGVtcHR5UmVjdDtcclxuICAgIH1cclxuICAgIHZhciBzdHlsZXMgPSBnZXRXaW5kb3dPZih0YXJnZXQpLmdldENvbXB1dGVkU3R5bGUodGFyZ2V0KTtcclxuICAgIHZhciBwYWRkaW5ncyA9IGdldFBhZGRpbmdzKHN0eWxlcyk7XHJcbiAgICB2YXIgaG9yaXpQYWQgPSBwYWRkaW5ncy5sZWZ0ICsgcGFkZGluZ3MucmlnaHQ7XHJcbiAgICB2YXIgdmVydFBhZCA9IHBhZGRpbmdzLnRvcCArIHBhZGRpbmdzLmJvdHRvbTtcclxuICAgIC8vIENvbXB1dGVkIHN0eWxlcyBvZiB3aWR0aCAmIGhlaWdodCBhcmUgYmVpbmcgdXNlZCBiZWNhdXNlIHRoZXkgYXJlIHRoZVxyXG4gICAgLy8gb25seSBkaW1lbnNpb25zIGF2YWlsYWJsZSB0byBKUyB0aGF0IGNvbnRhaW4gbm9uLXJvdW5kZWQgdmFsdWVzLiBJdCBjb3VsZFxyXG4gICAgLy8gYmUgcG9zc2libGUgdG8gdXRpbGl6ZSB0aGUgZ2V0Qm91bmRpbmdDbGllbnRSZWN0IGlmIG9ubHkgaXQncyBkYXRhIHdhc24ndFxyXG4gICAgLy8gYWZmZWN0ZWQgYnkgQ1NTIHRyYW5zZm9ybWF0aW9ucyBsZXQgYWxvbmUgcGFkZGluZ3MsIGJvcmRlcnMgYW5kIHNjcm9sbCBiYXJzLlxyXG4gICAgdmFyIHdpZHRoID0gdG9GbG9hdChzdHlsZXMud2lkdGgpLCBoZWlnaHQgPSB0b0Zsb2F0KHN0eWxlcy5oZWlnaHQpO1xyXG4gICAgLy8gV2lkdGggJiBoZWlnaHQgaW5jbHVkZSBwYWRkaW5ncyBhbmQgYm9yZGVycyB3aGVuIHRoZSAnYm9yZGVyLWJveCcgYm94XHJcbiAgICAvLyBtb2RlbCBpcyBhcHBsaWVkIChleGNlcHQgZm9yIElFKS5cclxuICAgIGlmIChzdHlsZXMuYm94U2l6aW5nID09PSAnYm9yZGVyLWJveCcpIHtcclxuICAgICAgICAvLyBGb2xsb3dpbmcgY29uZGl0aW9ucyBhcmUgcmVxdWlyZWQgdG8gaGFuZGxlIEludGVybmV0IEV4cGxvcmVyIHdoaWNoXHJcbiAgICAgICAgLy8gZG9lc24ndCBpbmNsdWRlIHBhZGRpbmdzIGFuZCBib3JkZXJzIHRvIGNvbXB1dGVkIENTUyBkaW1lbnNpb25zLlxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gV2UgY2FuIHNheSB0aGF0IGlmIENTUyBkaW1lbnNpb25zICsgcGFkZGluZ3MgYXJlIGVxdWFsIHRvIHRoZSBcImNsaWVudFwiXHJcbiAgICAgICAgLy8gcHJvcGVydGllcyB0aGVuIGl0J3MgZWl0aGVyIElFLCBhbmQgdGh1cyB3ZSBkb24ndCBuZWVkIHRvIHN1YnRyYWN0XHJcbiAgICAgICAgLy8gYW55dGhpbmcsIG9yIGFuIGVsZW1lbnQgbWVyZWx5IGRvZXNuJ3QgaGF2ZSBwYWRkaW5ncy9ib3JkZXJzIHN0eWxlcy5cclxuICAgICAgICBpZiAoTWF0aC5yb3VuZCh3aWR0aCArIGhvcml6UGFkKSAhPT0gY2xpZW50V2lkdGgpIHtcclxuICAgICAgICAgICAgd2lkdGggLT0gZ2V0Qm9yZGVyc1NpemUoc3R5bGVzLCAnbGVmdCcsICdyaWdodCcpICsgaG9yaXpQYWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChNYXRoLnJvdW5kKGhlaWdodCArIHZlcnRQYWQpICE9PSBjbGllbnRIZWlnaHQpIHtcclxuICAgICAgICAgICAgaGVpZ2h0IC09IGdldEJvcmRlcnNTaXplKHN0eWxlcywgJ3RvcCcsICdib3R0b20nKSArIHZlcnRQYWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gRm9sbG93aW5nIHN0ZXBzIGNhbid0IGJlIGFwcGxpZWQgdG8gdGhlIGRvY3VtZW50J3Mgcm9vdCBlbGVtZW50IGFzIGl0c1xyXG4gICAgLy8gY2xpZW50W1dpZHRoL0hlaWdodF0gcHJvcGVydGllcyByZXByZXNlbnQgdmlld3BvcnQgYXJlYSBvZiB0aGUgd2luZG93LlxyXG4gICAgLy8gQmVzaWRlcywgaXQncyBhcyB3ZWxsIG5vdCBuZWNlc3NhcnkgYXMgdGhlIDxodG1sPiBpdHNlbGYgbmVpdGhlciBoYXNcclxuICAgIC8vIHJlbmRlcmVkIHNjcm9sbCBiYXJzIG5vciBpdCBjYW4gYmUgY2xpcHBlZC5cclxuICAgIGlmICghaXNEb2N1bWVudEVsZW1lbnQodGFyZ2V0KSkge1xyXG4gICAgICAgIC8vIEluIHNvbWUgYnJvd3NlcnMgKG9ubHkgaW4gRmlyZWZveCwgYWN0dWFsbHkpIENTUyB3aWR0aCAmIGhlaWdodFxyXG4gICAgICAgIC8vIGluY2x1ZGUgc2Nyb2xsIGJhcnMgc2l6ZSB3aGljaCBjYW4gYmUgcmVtb3ZlZCBhdCB0aGlzIHN0ZXAgYXMgc2Nyb2xsXHJcbiAgICAgICAgLy8gYmFycyBhcmUgdGhlIG9ubHkgZGlmZmVyZW5jZSBiZXR3ZWVuIHJvdW5kZWQgZGltZW5zaW9ucyArIHBhZGRpbmdzXHJcbiAgICAgICAgLy8gYW5kIFwiY2xpZW50XCIgcHJvcGVydGllcywgdGhvdWdoIHRoYXQgaXMgbm90IGFsd2F5cyB0cnVlIGluIENocm9tZS5cclxuICAgICAgICB2YXIgdmVydFNjcm9sbGJhciA9IE1hdGgucm91bmQod2lkdGggKyBob3JpelBhZCkgLSBjbGllbnRXaWR0aDtcclxuICAgICAgICB2YXIgaG9yaXpTY3JvbGxiYXIgPSBNYXRoLnJvdW5kKGhlaWdodCArIHZlcnRQYWQpIC0gY2xpZW50SGVpZ2h0O1xyXG4gICAgICAgIC8vIENocm9tZSBoYXMgYSByYXRoZXIgd2VpcmQgcm91bmRpbmcgb2YgXCJjbGllbnRcIiBwcm9wZXJ0aWVzLlxyXG4gICAgICAgIC8vIEUuZy4gZm9yIGFuIGVsZW1lbnQgd2l0aCBjb250ZW50IHdpZHRoIG9mIDMxNC4ycHggaXQgc29tZXRpbWVzIGdpdmVzXHJcbiAgICAgICAgLy8gdGhlIGNsaWVudCB3aWR0aCBvZiAzMTVweCBhbmQgZm9yIHRoZSB3aWR0aCBvZiAzMTQuN3B4IGl0IG1heSBnaXZlXHJcbiAgICAgICAgLy8gMzE0cHguIEFuZCBpdCBkb2Vzbid0IGhhcHBlbiBhbGwgdGhlIHRpbWUuIFNvIGp1c3QgaWdub3JlIHRoaXMgZGVsdGFcclxuICAgICAgICAvLyBhcyBhIG5vbi1yZWxldmFudC5cclxuICAgICAgICBpZiAoTWF0aC5hYnModmVydFNjcm9sbGJhcikgIT09IDEpIHtcclxuICAgICAgICAgICAgd2lkdGggLT0gdmVydFNjcm9sbGJhcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKE1hdGguYWJzKGhvcml6U2Nyb2xsYmFyKSAhPT0gMSkge1xyXG4gICAgICAgICAgICBoZWlnaHQgLT0gaG9yaXpTY3JvbGxiYXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNyZWF0ZVJlY3RJbml0KHBhZGRpbmdzLmxlZnQsIHBhZGRpbmdzLnRvcCwgd2lkdGgsIGhlaWdodCk7XHJcbn1cclxuLyoqXHJcbiAqIENoZWNrcyB3aGV0aGVyIHByb3ZpZGVkIGVsZW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgdGhlIFNWR0dyYXBoaWNzRWxlbWVudC5cclxuICpcclxuICogQHBhcmFtIHtFbGVtZW50fSB0YXJnZXQgLSBFbGVtZW50IHRvIGJlIGNoZWNrZWQuXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxudmFyIGlzU1ZHR3JhcGhpY3NFbGVtZW50ID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIC8vIFNvbWUgYnJvd3NlcnMsIG5hbWVseSBJRSBhbmQgRWRnZSwgZG9uJ3QgaGF2ZSB0aGUgU1ZHR3JhcGhpY3NFbGVtZW50XHJcbiAgICAvLyBpbnRlcmZhY2UuXHJcbiAgICBpZiAodHlwZW9mIFNWR0dyYXBoaWNzRWxlbWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCkgeyByZXR1cm4gdGFyZ2V0IGluc3RhbmNlb2YgZ2V0V2luZG93T2YodGFyZ2V0KS5TVkdHcmFwaGljc0VsZW1lbnQ7IH07XHJcbiAgICB9XHJcbiAgICAvLyBJZiBpdCdzIHNvLCB0aGVuIGNoZWNrIHRoYXQgZWxlbWVudCBpcyBhdCBsZWFzdCBhbiBpbnN0YW5jZSBvZiB0aGVcclxuICAgIC8vIFNWR0VsZW1lbnQgYW5kIHRoYXQgaXQgaGFzIHRoZSBcImdldEJCb3hcIiBtZXRob2QuXHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZXh0cmEtcGFyZW5zXHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCkgeyByZXR1cm4gKHRhcmdldCBpbnN0YW5jZW9mIGdldFdpbmRvd09mKHRhcmdldCkuU1ZHRWxlbWVudCAmJlxyXG4gICAgICAgIHR5cGVvZiB0YXJnZXQuZ2V0QkJveCA9PT0gJ2Z1bmN0aW9uJyk7IH07XHJcbn0pKCk7XHJcbi8qKlxyXG4gKiBDaGVja3Mgd2hldGhlciBwcm92aWRlZCBlbGVtZW50IGlzIGEgZG9jdW1lbnQgZWxlbWVudCAoPGh0bWw+KS5cclxuICpcclxuICogQHBhcmFtIHtFbGVtZW50fSB0YXJnZXQgLSBFbGVtZW50IHRvIGJlIGNoZWNrZWQuXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxuZnVuY3Rpb24gaXNEb2N1bWVudEVsZW1lbnQodGFyZ2V0KSB7XHJcbiAgICByZXR1cm4gdGFyZ2V0ID09PSBnZXRXaW5kb3dPZih0YXJnZXQpLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcclxufVxyXG4vKipcclxuICogQ2FsY3VsYXRlcyBhbiBhcHByb3ByaWF0ZSBjb250ZW50IHJlY3RhbmdsZSBmb3IgcHJvdmlkZWQgaHRtbCBvciBzdmcgZWxlbWVudC5cclxuICpcclxuICogQHBhcmFtIHtFbGVtZW50fSB0YXJnZXQgLSBFbGVtZW50IGNvbnRlbnQgcmVjdGFuZ2xlIG9mIHdoaWNoIG5lZWRzIHRvIGJlIGNhbGN1bGF0ZWQuXHJcbiAqIEByZXR1cm5zIHtET01SZWN0SW5pdH1cclxuICovXHJcbmZ1bmN0aW9uIGdldENvbnRlbnRSZWN0KHRhcmdldCkge1xyXG4gICAgaWYgKCFpc0Jyb3dzZXIpIHtcclxuICAgICAgICByZXR1cm4gZW1wdHlSZWN0O1xyXG4gICAgfVxyXG4gICAgaWYgKGlzU1ZHR3JhcGhpY3NFbGVtZW50KHRhcmdldCkpIHtcclxuICAgICAgICByZXR1cm4gZ2V0U1ZHQ29udGVudFJlY3QodGFyZ2V0KTtcclxuICAgIH1cclxuICAgIHJldHVybiBnZXRIVE1MRWxlbWVudENvbnRlbnRSZWN0KHRhcmdldCk7XHJcbn1cclxuLyoqXHJcbiAqIENyZWF0ZXMgcmVjdGFuZ2xlIHdpdGggYW4gaW50ZXJmYWNlIG9mIHRoZSBET01SZWN0UmVhZE9ubHkuXHJcbiAqIFNwZWM6IGh0dHBzOi8vZHJhZnRzLmZ4dGYub3JnL2dlb21ldHJ5LyNkb21yZWN0cmVhZG9ubHlcclxuICpcclxuICogQHBhcmFtIHtET01SZWN0SW5pdH0gcmVjdEluaXQgLSBPYmplY3Qgd2l0aCByZWN0YW5nbGUncyB4L3kgY29vcmRpbmF0ZXMgYW5kIGRpbWVuc2lvbnMuXHJcbiAqIEByZXR1cm5zIHtET01SZWN0UmVhZE9ubHl9XHJcbiAqL1xyXG5mdW5jdGlvbiBjcmVhdGVSZWFkT25seVJlY3QoX2EpIHtcclxuICAgIHZhciB4ID0gX2EueCwgeSA9IF9hLnksIHdpZHRoID0gX2Eud2lkdGgsIGhlaWdodCA9IF9hLmhlaWdodDtcclxuICAgIC8vIElmIERPTVJlY3RSZWFkT25seSBpcyBhdmFpbGFibGUgdXNlIGl0IGFzIGEgcHJvdG90eXBlIGZvciB0aGUgcmVjdGFuZ2xlLlxyXG4gICAgdmFyIENvbnN0ciA9IHR5cGVvZiBET01SZWN0UmVhZE9ubHkgIT09ICd1bmRlZmluZWQnID8gRE9NUmVjdFJlYWRPbmx5IDogT2JqZWN0O1xyXG4gICAgdmFyIHJlY3QgPSBPYmplY3QuY3JlYXRlKENvbnN0ci5wcm90b3R5cGUpO1xyXG4gICAgLy8gUmVjdGFuZ2xlJ3MgcHJvcGVydGllcyBhcmUgbm90IHdyaXRhYmxlIGFuZCBub24tZW51bWVyYWJsZS5cclxuICAgIGRlZmluZUNvbmZpZ3VyYWJsZShyZWN0LCB7XHJcbiAgICAgICAgeDogeCwgeTogeSwgd2lkdGg6IHdpZHRoLCBoZWlnaHQ6IGhlaWdodCxcclxuICAgICAgICB0b3A6IHksXHJcbiAgICAgICAgcmlnaHQ6IHggKyB3aWR0aCxcclxuICAgICAgICBib3R0b206IGhlaWdodCArIHksXHJcbiAgICAgICAgbGVmdDogeFxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gcmVjdDtcclxufVxyXG4vKipcclxuICogQ3JlYXRlcyBET01SZWN0SW5pdCBvYmplY3QgYmFzZWQgb24gdGhlIHByb3ZpZGVkIGRpbWVuc2lvbnMgYW5kIHRoZSB4L3kgY29vcmRpbmF0ZXMuXHJcbiAqIFNwZWM6IGh0dHBzOi8vZHJhZnRzLmZ4dGYub3JnL2dlb21ldHJ5LyNkaWN0ZGVmLWRvbXJlY3Rpbml0XHJcbiAqXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSB4IC0gWCBjb29yZGluYXRlLlxyXG4gKiBAcGFyYW0ge251bWJlcn0geSAtIFkgY29vcmRpbmF0ZS5cclxuICogQHBhcmFtIHtudW1iZXJ9IHdpZHRoIC0gUmVjdGFuZ2xlJ3Mgd2lkdGguXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHQgLSBSZWN0YW5nbGUncyBoZWlnaHQuXHJcbiAqIEByZXR1cm5zIHtET01SZWN0SW5pdH1cclxuICovXHJcbmZ1bmN0aW9uIGNyZWF0ZVJlY3RJbml0KHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcclxuICAgIHJldHVybiB7IHg6IHgsIHk6IHksIHdpZHRoOiB3aWR0aCwgaGVpZ2h0OiBoZWlnaHQgfTtcclxufVxuXG4vKipcclxuICogQ2xhc3MgdGhhdCBpcyByZXNwb25zaWJsZSBmb3IgY29tcHV0YXRpb25zIG9mIHRoZSBjb250ZW50IHJlY3RhbmdsZSBvZlxyXG4gKiBwcm92aWRlZCBET00gZWxlbWVudCBhbmQgZm9yIGtlZXBpbmcgdHJhY2sgb2YgaXQncyBjaGFuZ2VzLlxyXG4gKi9cclxudmFyIFJlc2l6ZU9ic2VydmF0aW9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIFJlc2l6ZU9ic2VydmF0aW9uLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gdGFyZ2V0IC0gRWxlbWVudCB0byBiZSBvYnNlcnZlZC5cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gUmVzaXplT2JzZXJ2YXRpb24odGFyZ2V0KSB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQnJvYWRjYXN0ZWQgd2lkdGggb2YgY29udGVudCByZWN0YW5nbGUuXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuYnJvYWRjYXN0V2lkdGggPSAwO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEJyb2FkY2FzdGVkIGhlaWdodCBvZiBjb250ZW50IHJlY3RhbmdsZS5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5icm9hZGNhc3RIZWlnaHQgPSAwO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFJlZmVyZW5jZSB0byB0aGUgbGFzdCBvYnNlcnZlZCBjb250ZW50IHJlY3RhbmdsZS5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEBwcml2YXRlIHtET01SZWN0SW5pdH1cclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLmNvbnRlbnRSZWN0XyA9IGNyZWF0ZVJlY3RJbml0KDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBVcGRhdGVzIGNvbnRlbnQgcmVjdGFuZ2xlIGFuZCB0ZWxscyB3aGV0aGVyIGl0J3Mgd2lkdGggb3IgaGVpZ2h0IHByb3BlcnRpZXNcclxuICAgICAqIGhhdmUgY2hhbmdlZCBzaW5jZSB0aGUgbGFzdCBicm9hZGNhc3QuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAgICAgKi9cclxuICAgIFJlc2l6ZU9ic2VydmF0aW9uLnByb3RvdHlwZS5pc0FjdGl2ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgcmVjdCA9IGdldENvbnRlbnRSZWN0KHRoaXMudGFyZ2V0KTtcclxuICAgICAgICB0aGlzLmNvbnRlbnRSZWN0XyA9IHJlY3Q7XHJcbiAgICAgICAgcmV0dXJuIChyZWN0LndpZHRoICE9PSB0aGlzLmJyb2FkY2FzdFdpZHRoIHx8XHJcbiAgICAgICAgICAgIHJlY3QuaGVpZ2h0ICE9PSB0aGlzLmJyb2FkY2FzdEhlaWdodCk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBVcGRhdGVzICdicm9hZGNhc3RXaWR0aCcgYW5kICdicm9hZGNhc3RIZWlnaHQnIHByb3BlcnRpZXMgd2l0aCBhIGRhdGFcclxuICAgICAqIGZyb20gdGhlIGNvcnJlc3BvbmRpbmcgcHJvcGVydGllcyBvZiB0aGUgbGFzdCBvYnNlcnZlZCBjb250ZW50IHJlY3RhbmdsZS5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7RE9NUmVjdEluaXR9IExhc3Qgb2JzZXJ2ZWQgY29udGVudCByZWN0YW5nbGUuXHJcbiAgICAgKi9cclxuICAgIFJlc2l6ZU9ic2VydmF0aW9uLnByb3RvdHlwZS5icm9hZGNhc3RSZWN0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciByZWN0ID0gdGhpcy5jb250ZW50UmVjdF87XHJcbiAgICAgICAgdGhpcy5icm9hZGNhc3RXaWR0aCA9IHJlY3Qud2lkdGg7XHJcbiAgICAgICAgdGhpcy5icm9hZGNhc3RIZWlnaHQgPSByZWN0LmhlaWdodDtcclxuICAgICAgICByZXR1cm4gcmVjdDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gUmVzaXplT2JzZXJ2YXRpb247XHJcbn0oKSk7XG5cbnZhciBSZXNpemVPYnNlcnZlckVudHJ5ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIFJlc2l6ZU9ic2VydmVyRW50cnkuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtFbGVtZW50fSB0YXJnZXQgLSBFbGVtZW50IHRoYXQgaXMgYmVpbmcgb2JzZXJ2ZWQuXHJcbiAgICAgKiBAcGFyYW0ge0RPTVJlY3RJbml0fSByZWN0SW5pdCAtIERhdGEgb2YgdGhlIGVsZW1lbnQncyBjb250ZW50IHJlY3RhbmdsZS5cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gUmVzaXplT2JzZXJ2ZXJFbnRyeSh0YXJnZXQsIHJlY3RJbml0KSB7XHJcbiAgICAgICAgdmFyIGNvbnRlbnRSZWN0ID0gY3JlYXRlUmVhZE9ubHlSZWN0KHJlY3RJbml0KTtcclxuICAgICAgICAvLyBBY2NvcmRpbmcgdG8gdGhlIHNwZWNpZmljYXRpb24gZm9sbG93aW5nIHByb3BlcnRpZXMgYXJlIG5vdCB3cml0YWJsZVxyXG4gICAgICAgIC8vIGFuZCBhcmUgYWxzbyBub3QgZW51bWVyYWJsZSBpbiB0aGUgbmF0aXZlIGltcGxlbWVudGF0aW9uLlxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gUHJvcGVydHkgYWNjZXNzb3JzIGFyZSBub3QgYmVpbmcgdXNlZCBhcyB0aGV5J2QgcmVxdWlyZSB0byBkZWZpbmUgYVxyXG4gICAgICAgIC8vIHByaXZhdGUgV2Vha01hcCBzdG9yYWdlIHdoaWNoIG1heSBjYXVzZSBtZW1vcnkgbGVha3MgaW4gYnJvd3NlcnMgdGhhdFxyXG4gICAgICAgIC8vIGRvbid0IHN1cHBvcnQgdGhpcyB0eXBlIG9mIGNvbGxlY3Rpb25zLlxyXG4gICAgICAgIGRlZmluZUNvbmZpZ3VyYWJsZSh0aGlzLCB7IHRhcmdldDogdGFyZ2V0LCBjb250ZW50UmVjdDogY29udGVudFJlY3QgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gUmVzaXplT2JzZXJ2ZXJFbnRyeTtcclxufSgpKTtcblxudmFyIFJlc2l6ZU9ic2VydmVyU1BJID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIFJlc2l6ZU9ic2VydmVyLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7UmVzaXplT2JzZXJ2ZXJDYWxsYmFja30gY2FsbGJhY2sgLSBDYWxsYmFjayBmdW5jdGlvbiB0aGF0IGlzIGludm9rZWRcclxuICAgICAqICAgICAgd2hlbiBvbmUgb2YgdGhlIG9ic2VydmVkIGVsZW1lbnRzIGNoYW5nZXMgaXQncyBjb250ZW50IGRpbWVuc2lvbnMuXHJcbiAgICAgKiBAcGFyYW0ge1Jlc2l6ZU9ic2VydmVyQ29udHJvbGxlcn0gY29udHJvbGxlciAtIENvbnRyb2xsZXIgaW5zdGFuY2Ugd2hpY2hcclxuICAgICAqICAgICAgaXMgcmVzcG9uc2libGUgZm9yIHRoZSB1cGRhdGVzIG9mIG9ic2VydmVyLlxyXG4gICAgICogQHBhcmFtIHtSZXNpemVPYnNlcnZlcn0gY2FsbGJhY2tDdHggLSBSZWZlcmVuY2UgdG8gdGhlIHB1YmxpY1xyXG4gICAgICogICAgICBSZXNpemVPYnNlcnZlciBpbnN0YW5jZSB3aGljaCB3aWxsIGJlIHBhc3NlZCB0byBjYWxsYmFjayBmdW5jdGlvbi5cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gUmVzaXplT2JzZXJ2ZXJTUEkoY2FsbGJhY2ssIGNvbnRyb2xsZXIsIGNhbGxiYWNrQ3R4KSB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQ29sbGVjdGlvbiBvZiByZXNpemUgb2JzZXJ2YXRpb25zIHRoYXQgaGF2ZSBkZXRlY3RlZCBjaGFuZ2VzIGluIGRpbWVuc2lvbnNcclxuICAgICAgICAgKiBvZiBlbGVtZW50cy5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEBwcml2YXRlIHtBcnJheTxSZXNpemVPYnNlcnZhdGlvbj59XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5hY3RpdmVPYnNlcnZhdGlvbnNfID0gW107XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogUmVnaXN0cnkgb2YgdGhlIFJlc2l6ZU9ic2VydmF0aW9uIGluc3RhbmNlcy5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEBwcml2YXRlIHtNYXA8RWxlbWVudCwgUmVzaXplT2JzZXJ2YXRpb24+fVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMub2JzZXJ2YXRpb25zXyA9IG5ldyBNYXBTaGltKCk7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgY2FsbGJhY2sgcHJvdmlkZWQgYXMgcGFyYW1ldGVyIDEgaXMgbm90IGEgZnVuY3Rpb24uJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY2FsbGJhY2tfID0gY2FsbGJhY2s7XHJcbiAgICAgICAgdGhpcy5jb250cm9sbGVyXyA9IGNvbnRyb2xsZXI7XHJcbiAgICAgICAgdGhpcy5jYWxsYmFja0N0eF8gPSBjYWxsYmFja0N0eDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogU3RhcnRzIG9ic2VydmluZyBwcm92aWRlZCBlbGVtZW50LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gdGFyZ2V0IC0gRWxlbWVudCB0byBiZSBvYnNlcnZlZC5cclxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxyXG4gICAgICovXHJcbiAgICBSZXNpemVPYnNlcnZlclNQSS5wcm90b3R5cGUub2JzZXJ2ZSA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcclxuICAgICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignMSBhcmd1bWVudCByZXF1aXJlZCwgYnV0IG9ubHkgMCBwcmVzZW50LicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBEbyBub3RoaW5nIGlmIGN1cnJlbnQgZW52aXJvbm1lbnQgZG9lc24ndCBoYXZlIHRoZSBFbGVtZW50IGludGVyZmFjZS5cclxuICAgICAgICBpZiAodHlwZW9mIEVsZW1lbnQgPT09ICd1bmRlZmluZWQnIHx8ICEoRWxlbWVudCBpbnN0YW5jZW9mIE9iamVjdCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoISh0YXJnZXQgaW5zdGFuY2VvZiBnZXRXaW5kb3dPZih0YXJnZXQpLkVsZW1lbnQpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3BhcmFtZXRlciAxIGlzIG5vdCBvZiB0eXBlIFwiRWxlbWVudFwiLicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgb2JzZXJ2YXRpb25zID0gdGhpcy5vYnNlcnZhdGlvbnNfO1xyXG4gICAgICAgIC8vIERvIG5vdGhpbmcgaWYgZWxlbWVudCBpcyBhbHJlYWR5IGJlaW5nIG9ic2VydmVkLlxyXG4gICAgICAgIGlmIChvYnNlcnZhdGlvbnMuaGFzKHRhcmdldCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBvYnNlcnZhdGlvbnMuc2V0KHRhcmdldCwgbmV3IFJlc2l6ZU9ic2VydmF0aW9uKHRhcmdldCkpO1xyXG4gICAgICAgIHRoaXMuY29udHJvbGxlcl8uYWRkT2JzZXJ2ZXIodGhpcyk7XHJcbiAgICAgICAgLy8gRm9yY2UgdGhlIHVwZGF0ZSBvZiBvYnNlcnZhdGlvbnMuXHJcbiAgICAgICAgdGhpcy5jb250cm9sbGVyXy5yZWZyZXNoKCk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBTdG9wcyBvYnNlcnZpbmcgcHJvdmlkZWQgZWxlbWVudC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IHRhcmdldCAtIEVsZW1lbnQgdG8gc3RvcCBvYnNlcnZpbmcuXHJcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICAqL1xyXG4gICAgUmVzaXplT2JzZXJ2ZXJTUEkucHJvdG90eXBlLnVub2JzZXJ2ZSA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcclxuICAgICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignMSBhcmd1bWVudCByZXF1aXJlZCwgYnV0IG9ubHkgMCBwcmVzZW50LicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBEbyBub3RoaW5nIGlmIGN1cnJlbnQgZW52aXJvbm1lbnQgZG9lc24ndCBoYXZlIHRoZSBFbGVtZW50IGludGVyZmFjZS5cclxuICAgICAgICBpZiAodHlwZW9mIEVsZW1lbnQgPT09ICd1bmRlZmluZWQnIHx8ICEoRWxlbWVudCBpbnN0YW5jZW9mIE9iamVjdCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoISh0YXJnZXQgaW5zdGFuY2VvZiBnZXRXaW5kb3dPZih0YXJnZXQpLkVsZW1lbnQpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3BhcmFtZXRlciAxIGlzIG5vdCBvZiB0eXBlIFwiRWxlbWVudFwiLicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgb2JzZXJ2YXRpb25zID0gdGhpcy5vYnNlcnZhdGlvbnNfO1xyXG4gICAgICAgIC8vIERvIG5vdGhpbmcgaWYgZWxlbWVudCBpcyBub3QgYmVpbmcgb2JzZXJ2ZWQuXHJcbiAgICAgICAgaWYgKCFvYnNlcnZhdGlvbnMuaGFzKHRhcmdldCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBvYnNlcnZhdGlvbnMuZGVsZXRlKHRhcmdldCk7XHJcbiAgICAgICAgaWYgKCFvYnNlcnZhdGlvbnMuc2l6ZSkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRyb2xsZXJfLnJlbW92ZU9ic2VydmVyKHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFN0b3BzIG9ic2VydmluZyBhbGwgZWxlbWVudHMuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge3ZvaWR9XHJcbiAgICAgKi9cclxuICAgIFJlc2l6ZU9ic2VydmVyU1BJLnByb3RvdHlwZS5kaXNjb25uZWN0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuY2xlYXJBY3RpdmUoKTtcclxuICAgICAgICB0aGlzLm9ic2VydmF0aW9uc18uY2xlYXIoKTtcclxuICAgICAgICB0aGlzLmNvbnRyb2xsZXJfLnJlbW92ZU9ic2VydmVyKHRoaXMpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogQ29sbGVjdHMgb2JzZXJ2YXRpb24gaW5zdGFuY2VzIHRoZSBhc3NvY2lhdGVkIGVsZW1lbnQgb2Ygd2hpY2ggaGFzIGNoYW5nZWRcclxuICAgICAqIGl0J3MgY29udGVudCByZWN0YW5nbGUuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge3ZvaWR9XHJcbiAgICAgKi9cclxuICAgIFJlc2l6ZU9ic2VydmVyU1BJLnByb3RvdHlwZS5nYXRoZXJBY3RpdmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLmNsZWFyQWN0aXZlKCk7XHJcbiAgICAgICAgdGhpcy5vYnNlcnZhdGlvbnNfLmZvckVhY2goZnVuY3Rpb24gKG9ic2VydmF0aW9uKSB7XHJcbiAgICAgICAgICAgIGlmIChvYnNlcnZhdGlvbi5pc0FjdGl2ZSgpKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5hY3RpdmVPYnNlcnZhdGlvbnNfLnB1c2gob2JzZXJ2YXRpb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBJbnZva2VzIGluaXRpYWwgY2FsbGJhY2sgZnVuY3Rpb24gd2l0aCBhIGxpc3Qgb2YgUmVzaXplT2JzZXJ2ZXJFbnRyeVxyXG4gICAgICogaW5zdGFuY2VzIGNvbGxlY3RlZCBmcm9tIGFjdGl2ZSByZXNpemUgb2JzZXJ2YXRpb25zLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxyXG4gICAgICovXHJcbiAgICBSZXNpemVPYnNlcnZlclNQSS5wcm90b3R5cGUuYnJvYWRjYXN0QWN0aXZlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIERvIG5vdGhpbmcgaWYgb2JzZXJ2ZXIgZG9lc24ndCBoYXZlIGFjdGl2ZSBvYnNlcnZhdGlvbnMuXHJcbiAgICAgICAgaWYgKCF0aGlzLmhhc0FjdGl2ZSgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGN0eCA9IHRoaXMuY2FsbGJhY2tDdHhfO1xyXG4gICAgICAgIC8vIENyZWF0ZSBSZXNpemVPYnNlcnZlckVudHJ5IGluc3RhbmNlIGZvciBldmVyeSBhY3RpdmUgb2JzZXJ2YXRpb24uXHJcbiAgICAgICAgdmFyIGVudHJpZXMgPSB0aGlzLmFjdGl2ZU9ic2VydmF0aW9uc18ubWFwKGZ1bmN0aW9uIChvYnNlcnZhdGlvbikge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFJlc2l6ZU9ic2VydmVyRW50cnkob2JzZXJ2YXRpb24udGFyZ2V0LCBvYnNlcnZhdGlvbi5icm9hZGNhc3RSZWN0KCkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuY2FsbGJhY2tfLmNhbGwoY3R4LCBlbnRyaWVzLCBjdHgpO1xyXG4gICAgICAgIHRoaXMuY2xlYXJBY3RpdmUoKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIENsZWFycyB0aGUgY29sbGVjdGlvbiBvZiBhY3RpdmUgb2JzZXJ2YXRpb25zLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxyXG4gICAgICovXHJcbiAgICBSZXNpemVPYnNlcnZlclNQSS5wcm90b3R5cGUuY2xlYXJBY3RpdmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5hY3RpdmVPYnNlcnZhdGlvbnNfLnNwbGljZSgwKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFRlbGxzIHdoZXRoZXIgb2JzZXJ2ZXIgaGFzIGFjdGl2ZSBvYnNlcnZhdGlvbnMuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAgICAgKi9cclxuICAgIFJlc2l6ZU9ic2VydmVyU1BJLnByb3RvdHlwZS5oYXNBY3RpdmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYWN0aXZlT2JzZXJ2YXRpb25zXy5sZW5ndGggPiAwO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBSZXNpemVPYnNlcnZlclNQSTtcclxufSgpKTtcblxuLy8gUmVnaXN0cnkgb2YgaW50ZXJuYWwgb2JzZXJ2ZXJzLiBJZiBXZWFrTWFwIGlzIG5vdCBhdmFpbGFibGUgdXNlIGN1cnJlbnQgc2hpbVxyXG4vLyBmb3IgdGhlIE1hcCBjb2xsZWN0aW9uIGFzIGl0IGhhcyBhbGwgcmVxdWlyZWQgbWV0aG9kcyBhbmQgYmVjYXVzZSBXZWFrTWFwXHJcbi8vIGNhbid0IGJlIGZ1bGx5IHBvbHlmaWxsZWQgYW55d2F5LlxyXG52YXIgb2JzZXJ2ZXJzID0gdHlwZW9mIFdlYWtNYXAgIT09ICd1bmRlZmluZWQnID8gbmV3IFdlYWtNYXAoKSA6IG5ldyBNYXBTaGltKCk7XHJcbi8qKlxyXG4gKiBSZXNpemVPYnNlcnZlciBBUEkuIEVuY2Fwc3VsYXRlcyB0aGUgUmVzaXplT2JzZXJ2ZXIgU1BJIGltcGxlbWVudGF0aW9uXHJcbiAqIGV4cG9zaW5nIG9ubHkgdGhvc2UgbWV0aG9kcyBhbmQgcHJvcGVydGllcyB0aGF0IGFyZSBkZWZpbmVkIGluIHRoZSBzcGVjLlxyXG4gKi9cclxudmFyIFJlc2l6ZU9ic2VydmVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIFJlc2l6ZU9ic2VydmVyLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7UmVzaXplT2JzZXJ2ZXJDYWxsYmFja30gY2FsbGJhY2sgLSBDYWxsYmFjayB0aGF0IGlzIGludm9rZWQgd2hlblxyXG4gICAgICogICAgICBkaW1lbnNpb25zIG9mIHRoZSBvYnNlcnZlZCBlbGVtZW50cyBjaGFuZ2UuXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIFJlc2l6ZU9ic2VydmVyKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFJlc2l6ZU9ic2VydmVyKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24uJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCcxIGFyZ3VtZW50IHJlcXVpcmVkLCBidXQgb25seSAwIHByZXNlbnQuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBjb250cm9sbGVyID0gUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyLmdldEluc3RhbmNlKCk7XHJcbiAgICAgICAgdmFyIG9ic2VydmVyID0gbmV3IFJlc2l6ZU9ic2VydmVyU1BJKGNhbGxiYWNrLCBjb250cm9sbGVyLCB0aGlzKTtcclxuICAgICAgICBvYnNlcnZlcnMuc2V0KHRoaXMsIG9ic2VydmVyKTtcclxuICAgIH1cclxuICAgIHJldHVybiBSZXNpemVPYnNlcnZlcjtcclxufSgpKTtcclxuLy8gRXhwb3NlIHB1YmxpYyBtZXRob2RzIG9mIFJlc2l6ZU9ic2VydmVyLlxyXG5bXHJcbiAgICAnb2JzZXJ2ZScsXHJcbiAgICAndW5vYnNlcnZlJyxcclxuICAgICdkaXNjb25uZWN0J1xyXG5dLmZvckVhY2goZnVuY3Rpb24gKG1ldGhvZCkge1xyXG4gICAgUmVzaXplT2JzZXJ2ZXIucHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgIHJldHVybiAoX2EgPSBvYnNlcnZlcnMuZ2V0KHRoaXMpKVttZXRob2RdLmFwcGx5KF9hLCBhcmd1bWVudHMpO1xyXG4gICAgfTtcclxufSk7XG5cbnZhciBpbmRleCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyBFeHBvcnQgZXhpc3RpbmcgaW1wbGVtZW50YXRpb24gaWYgYXZhaWxhYmxlLlxyXG4gICAgaWYgKHR5cGVvZiBnbG9iYWwkMS5SZXNpemVPYnNlcnZlciAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICByZXR1cm4gZ2xvYmFsJDEuUmVzaXplT2JzZXJ2ZXI7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gUmVzaXplT2JzZXJ2ZXI7XHJcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGluZGV4O1xuIiwiPCEtLVxyXG4vKipcclxuICogQGZpbGVvdmVydmlldyBHYW50dEVsYXN0aWMgY29tcG9uZW50XHJcbiAqIEBsaWNlbnNlIE1JVFxyXG4gKiBAYXV0aG9yIFJhZmFsIFBvc3BpZWNoIDxuZXVyb25ldC5pb0BnbWFpbC5jb20+XHJcbiAqIEBwYWNrYWdlIEdhbnR0RWxhc3RpY1xyXG4gKi9cclxuLS0+XHJcbjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwiZ2FudHQtZWxhc3RpY1wiIHN0eWxlPVwid2lkdGg6MTAwJVwiPlxyXG4gICAgPHNsb3QgbmFtZT1cImhlYWRlclwiPjwvc2xvdD5cclxuICAgIDxtYWluLXZpZXcgcmVmPVwibWFpblZpZXdcIj48L21haW4tdmlldz5cclxuICAgIDxzbG90IG5hbWU9XCJmb290ZXJcIj48L3Nsb3Q+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgVnVlSW5zdGFuY2UgZnJvbSAndnVlJztcclxuaW1wb3J0IGRheWpzIGZyb20gJ2RheWpzJztcclxuaW1wb3J0IE1haW5WaWV3IGZyb20gJy4vY29tcG9uZW50cy9NYWluVmlldy52dWUnO1xyXG5pbXBvcnQgZ2V0U3R5bGUgZnJvbSAnLi9zdHlsZS5qcyc7XHJcbmltcG9ydCBSZXNpemVPYnNlcnZlciBmcm9tICdyZXNpemUtb2JzZXJ2ZXItcG9seWZpbGwnO1xyXG5cclxuY29uc3QgY3R4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJykuZ2V0Q29udGV4dCgnMmQnKTtcclxubGV0IFZ1ZUluc3QgPSBWdWVJbnN0YW5jZTtcclxuZnVuY3Rpb24gaW5pdFZ1ZSgpIHtcclxuICBpZiAodHlwZW9mIFZ1ZSAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIFZ1ZUluc3QgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICBWdWVJbnN0ID0gVnVlO1xyXG4gIH1cclxufVxyXG5pbml0VnVlKCk7XHJcblxyXG5sZXQgaG91cldpZHRoQ2FjaGUgPSBudWxsO1xyXG5cclxuLyoqXHJcbiAqIEhlbHBlciBmdW5jdGlvbiB0byBmaWxsIG91dCBlbXB0eSBvcHRpb25zIGluIHVzZXIgc2V0dGluZ3NcclxuICpcclxuICogQHBhcmFtIHtvYmplY3R9IHVzZXJPcHRpb25zIC0gaW5pdGlhbCB1c2VyIG9wdGlvbnMgdGhhdCB3aWxsIG1lcmdlIHdpdGggdGhvc2UgYmVsb3dcclxuICogQHJldHVybnMge29iamVjdH0gbWVyZ2VkIG9wdGlvbnNcclxuICovXHJcbmZ1bmN0aW9uIGdldE9wdGlvbnModXNlck9wdGlvbnMpIHtcclxuICBsZXQgbG9jYWxlTmFtZSA9ICdlbic7XHJcbiAgaWYgKHR5cGVvZiB1c2VyT3B0aW9ucy5sb2NhbGUgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB1c2VyT3B0aW9ucy5sb2NhbGUubmFtZSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgIGxvY2FsZU5hbWUgPSB1c2VyT3B0aW9ucy5sb2NhbGUubmFtZTtcclxuICB9XHJcbiAgcmV0dXJuIHtcclxuICAgIHNsb3RzOiB7XHJcbiAgICAgIGhlYWRlcjoge31cclxuICAgIH0sXHJcbiAgICB0YXNrTWFwcGluZzoge1xyXG4gICAgICAvLypcclxuICAgICAgaWQ6ICdpZCcsXHJcbiAgICAgIHN0YXJ0OiAnc3RhcnQnLFxyXG4gICAgICBsYWJlbDogJ2xhYmVsJyxcclxuICAgICAgZHVyYXRpb246ICdkdXJhdGlvbicsXHJcbiAgICAgIHByb2dyZXNzOiAncHJvZ3Jlc3MnLFxyXG4gICAgICB0eXBlOiAndHlwZScsXHJcbiAgICAgIHN0eWxlOiAnc3R5bGUnLFxyXG4gICAgICBjb2xsYXBzZWQ6ICdjb2xsYXBzZWQnLFxyXG4gICAgICBzaG93VGFza0xpc3Q6ICdzaG93VGFza0xpc3QnXHJcbiAgICB9LFxyXG4gICAgd2lkdGg6IDAsXHJcbiAgICBoZWlnaHQ6IDAsXHJcbiAgICBjbGllbnRXaWR0aDogMCxcclxuICAgIG91dGVySGVpZ2h0OiAwLFxyXG4gICAgcm93c0hlaWdodDogMCxcclxuICAgIGFsbFZpc2libGVUYXNrc0hlaWdodDogMCxcclxuICAgIHNjcm9sbDoge1xyXG4gICAgICBzY3JvbGxpbmc6IGZhbHNlLFxyXG4gICAgICBkcmFnWE1vdmVNdWx0aXBsaWVyOiAzLCAvLypcclxuICAgICAgZHJhZ1lNb3ZlTXVsdGlwbGllcjogMiwgLy8qXHJcbiAgICAgIHRvcDogMCxcclxuICAgICAgdGFza0xpc3Q6IHtcclxuICAgICAgICBsZWZ0OiAwLFxyXG4gICAgICAgIHJpZ2h0OiAwLFxyXG4gICAgICAgIHRvcDogMCxcclxuICAgICAgICBib3R0b206IDBcclxuICAgICAgfSxcclxuICAgICAgY2hhcnQ6IHtcclxuICAgICAgICBsZWZ0OiAwLFxyXG4gICAgICAgIHJpZ2h0OiAwLFxyXG4gICAgICAgIHBlcmNlbnQ6IDAsXHJcbiAgICAgICAgdGltZVBlcmNlbnQ6IDAsXHJcbiAgICAgICAgdG9wOiAwLFxyXG4gICAgICAgIGJvdHRvbTogMCxcclxuICAgICAgICB0aW1lOiAwLFxyXG4gICAgICAgIHRpbWVDZW50ZXI6IDAsXHJcbiAgICAgICAgZGF0ZVRpbWU6IHtcclxuICAgICAgICAgIGxlZnQ6ICcnLFxyXG4gICAgICAgICAgcmlnaHQ6ICcnXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgc2NvcGU6IHtcclxuICAgICAgLy8qXHJcbiAgICAgIGJlZm9yZTogMSxcclxuICAgICAgYWZ0ZXI6IDFcclxuICAgIH0sXHJcbiAgICB0aW1lczoge1xyXG4gICAgICB0aW1lU2NhbGU6IDYwICogMTAwMCxcclxuICAgICAgdGltZVpvb206IDE3LCAvLypcclxuICAgICAgdGltZVBlclBpeGVsOiAwLFxyXG4gICAgICBmaXJzdFRpbWU6IG51bGwsXHJcbiAgICAgIGxhc3RUaW1lOiBudWxsLFxyXG4gICAgICBmaXJzdFRhc2tUaW1lOiAwLFxyXG4gICAgICBsYXN0VGFza1RpbWU6IDAsXHJcbiAgICAgIHRvdGFsVmlld0R1cmF0aW9uTXM6IDAsXHJcbiAgICAgIHRvdGFsVmlld0R1cmF0aW9uUHg6IDAsXHJcbiAgICAgIHN0ZXBEdXJhdGlvbjogJ2RheScsXHJcbiAgICAgIHN0ZXBzOiBbXVxyXG4gICAgfSxcclxuICAgIHJvdzoge1xyXG4gICAgICBoZWlnaHQ6IDI0IC8vKlxyXG4gICAgfSxcclxuICAgIG1heFJvd3M6IDIwLCAvLypcclxuICAgIG1heEhlaWdodDogMCwgLy8qXHJcbiAgICBjaGFydDoge1xyXG4gICAgICBncmlkOiB7XHJcbiAgICAgICAgaG9yaXpvbnRhbDoge1xyXG4gICAgICAgICAgZ2FwOiA2IC8vKlxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgcHJvZ3Jlc3M6IHtcclxuICAgICAgICB3aWR0aDogMjAsIC8vKlxyXG4gICAgICAgIGhlaWdodDogNiwgLy8qXHJcbiAgICAgICAgcGF0dGVybjogdHJ1ZSxcclxuICAgICAgICBiYXI6IGZhbHNlXHJcbiAgICAgIH0sXHJcbiAgICAgIHRleHQ6IHtcclxuICAgICAgICBvZmZzZXQ6IDQsIC8vKlxyXG4gICAgICAgIHhQYWRkaW5nOiAxMCwgLy8qXHJcbiAgICAgICAgZGlzcGxheTogdHJ1ZSAvLypcclxuICAgICAgfSxcclxuICAgICAgZXhwYW5kZXI6IHtcclxuICAgICAgICB0eXBlOiAnY2hhcnQnLFxyXG4gICAgICAgIGRpc3BsYXk6IGZhbHNlLCAvLypcclxuICAgICAgICBkaXNwbGF5SWZUYXNrTGlzdEhpZGRlbjogdHJ1ZSwgLy8qXHJcbiAgICAgICAgb2Zmc2V0OiA0LCAvLypcclxuICAgICAgICBzaXplOiAxOFxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgdGFza0xpc3Q6IHtcclxuICAgICAgZGlzcGxheTogdHJ1ZSwgLy8qXHJcbiAgICAgIHJlc2l6ZUFmdGVyVGhyZXNob2xkOiB0cnVlLCAvLypcclxuICAgICAgd2lkdGhUaHJlc2hvbGQ6IDc1LCAvLypcclxuICAgICAgY29sdW1uczogW1xyXG4gICAgICAgIC8vKlxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlkOiAwLFxyXG4gICAgICAgICAgbGFiZWw6ICdJRCcsXHJcbiAgICAgICAgICB2YWx1ZTogJ2lkJyxcclxuICAgICAgICAgIHdpZHRoOiA0MFxyXG4gICAgICAgIH1cclxuICAgICAgXSxcclxuICAgICAgcGVyY2VudDogMTAwLCAvLypcclxuICAgICAgd2lkdGg6IDAsXHJcbiAgICAgIGZpbmFsV2lkdGg6IDAsXHJcbiAgICAgIHdpZHRoRnJvbVBlcmNlbnRhZ2U6IDAsXHJcbiAgICAgIG1pbldpZHRoOiAxOCxcclxuICAgICAgZXhwYW5kZXI6IHtcclxuICAgICAgICB0eXBlOiAndGFzay1saXN0JyxcclxuICAgICAgICBzaXplOiAxNixcclxuICAgICAgICBjb2x1bW5XaWR0aDogMjQsXHJcbiAgICAgICAgcGFkZGluZzogMTYsXHJcbiAgICAgICAgbWFyZ2luOiAxMCxcclxuICAgICAgICBzdHJhaWdodDogZmFsc2VcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNhbGVuZGFyOiB7XHJcbiAgICAgIHdvcmtpbmdEYXlzOiBbMSwgMiwgMywgNCwgNV0sIC8vKlxyXG4gICAgICBnYXA6IDYsIC8vKlxyXG4gICAgICBoZWlnaHQ6IDAsXHJcbiAgICAgIHN0cm9rZVdpZHRoOiAxLFxyXG4gICAgICBob3VyOiB7XHJcbiAgICAgICAgaGVpZ2h0OiAyMCwgLy8qXHJcbiAgICAgICAgZGlzcGxheTogdHJ1ZSwgLy8qXHJcbiAgICAgICAgd2lkdGhzOiBbXSxcclxuICAgICAgICBtYXhXaWR0aHM6IHsgc2hvcnQ6IDAsIG1lZGl1bTogMCwgbG9uZzogMCB9LFxyXG4gICAgICAgIGZvcm1hdHRlZDoge1xyXG4gICAgICAgICAgbG9uZzogW10sXHJcbiAgICAgICAgICBtZWRpdW06IFtdLFxyXG4gICAgICAgICAgc2hvcnQ6IFtdXHJcbiAgICAgICAgfSxcclxuICAgICAgICBmb3JtYXQ6IHtcclxuICAgICAgICAgIC8vKlxyXG4gICAgICAgICAgbG9uZyhkYXRlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBkYXRlLmZvcm1hdCgnSEg6bW0nKTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBtZWRpdW0oZGF0ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZGF0ZS5mb3JtYXQoJ0hIOm1tJyk7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgc2hvcnQoZGF0ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZGF0ZS5mb3JtYXQoJ0hIJyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBkYXk6IHtcclxuICAgICAgICBoZWlnaHQ6IDIwLCAvLypcclxuICAgICAgICBkaXNwbGF5OiB0cnVlLCAvLypcclxuICAgICAgICB3aWR0aHM6IFtdLFxyXG4gICAgICAgIG1heFdpZHRoczogeyBzaG9ydDogMCwgbWVkaXVtOiAwLCBsb25nOiAwIH0sXHJcbiAgICAgICAgZm9ybWF0OiB7XHJcbiAgICAgICAgICBsb25nKGRhdGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGRhdGUuZm9ybWF0KCdERCBkZGRkJyk7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgbWVkaXVtKGRhdGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGRhdGUuZm9ybWF0KCdERCBkZGQnKTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBzaG9ydChkYXRlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBkYXRlLmZvcm1hdCgnREQnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIG1vbnRoOiB7XHJcbiAgICAgICAgaGVpZ2h0OiAyMCwgLy8qXHJcbiAgICAgICAgZGlzcGxheTogdHJ1ZSwgLy8qXHJcbiAgICAgICAgd2lkdGhzOiBbXSxcclxuICAgICAgICBtYXhXaWR0aHM6IHsgc2hvcnQ6IDAsIG1lZGl1bTogMCwgbG9uZzogMCB9LFxyXG4gICAgICAgIGZvcm1hdDoge1xyXG4gICAgICAgICAgLy8qXHJcbiAgICAgICAgICBzaG9ydChkYXRlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBkYXRlLmZvcm1hdCgnTU0nKTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBtZWRpdW0oZGF0ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZGF0ZS5mb3JtYXQoXCJNTU0gJ1lZXCIpO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGxvbmcoZGF0ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZGF0ZS5mb3JtYXQoJ01NTU0gWVlZWScpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGxvY2FsZToge1xyXG4gICAgICAvLypcclxuICAgICAgbmFtZTogJ2VuJyxcclxuICAgICAgd2Vla2RheXM6ICdTdW5kYXlfTW9uZGF5X1R1ZXNkYXlfV2VkbmVzZGF5X1RodXJzZGF5X0ZyaWRheV9TYXR1cmRheScuc3BsaXQoJ18nKSxcclxuICAgICAgd2Vla2RheXNTaG9ydDogJ1N1bl9Nb25fVHVlX1dlZF9UaHVfRnJpX1NhdCcuc3BsaXQoJ18nKSxcclxuICAgICAgd2Vla2RheXNNaW46ICdTdV9Nb19UdV9XZV9UaF9Gcl9TYScuc3BsaXQoJ18nKSxcclxuICAgICAgbW9udGhzOiAnSmFudWFyeV9GZWJydWFyeV9NYXJjaF9BcHJpbF9NYXlfSnVuZV9KdWx5X0F1Z3VzdF9TZXB0ZW1iZXJfT2N0b2Jlcl9Ob3ZlbWJlcl9EZWNlbWJlcicuc3BsaXQoJ18nKSxcclxuICAgICAgbW9udGhzU2hvcnQ6ICdKYW5fRmViX01hcl9BcHJfTWF5X0p1bl9KdWxfQXVnX1NlcF9PY3RfTm92X0RlYycuc3BsaXQoJ18nKSxcclxuICAgICAgd2Vla1N0YXJ0OiAxLFxyXG4gICAgICByZWxhdGl2ZVRpbWU6IHtcclxuICAgICAgICBmdXR1cmU6ICdpbiAlcycsXHJcbiAgICAgICAgcGFzdDogJyVzIGFnbycsXHJcbiAgICAgICAgczogJ2EgZmV3IHNlY29uZHMnLFxyXG4gICAgICAgIG06ICdhIG1pbnV0ZScsXHJcbiAgICAgICAgbW06ICclZCBtaW51dGVzJyxcclxuICAgICAgICBoOiAnYW4gaG91cicsXHJcbiAgICAgICAgaGg6ICclZCBob3VycycsXHJcbiAgICAgICAgZDogJ2EgZGF5JyxcclxuICAgICAgICBkZDogJyVkIGRheXMnLFxyXG4gICAgICAgIE06ICdhIG1vbnRoJyxcclxuICAgICAgICBNTTogJyVkIG1vbnRocycsXHJcbiAgICAgICAgeTogJ2EgeWVhcicsXHJcbiAgICAgICAgeXk6ICclZCB5ZWFycydcclxuICAgICAgfSxcclxuICAgICAgZm9ybWF0czoge1xyXG4gICAgICAgIExUOiAnSEg6bW0nLFxyXG4gICAgICAgIExUUzogJ0hIOm1tOnNzJyxcclxuICAgICAgICBMOiAnREQvTU0vWVlZWScsXHJcbiAgICAgICAgTEw6ICdEIE1NTU0gWVlZWScsXHJcbiAgICAgICAgTExMOiAnRCBNTU1NIFlZWVkgSEg6bW0nLFxyXG4gICAgICAgIExMTEw6ICdkZGRkLCBEIE1NTU0gWVlZWSBISDptbSdcclxuICAgICAgfSxcclxuICAgICAgb3JkaW5hbDogbiA9PiB7XHJcbiAgICAgICAgY29uc3QgcyA9IFsndGgnLCAnc3QnLCAnbmQnLCAncmQnXTtcclxuICAgICAgICBjb25zdCB2ID0gbiAlIDEwMDtcclxuICAgICAgICByZXR1cm4gYFske259JHtzWyh2IC0gMjApICUgMTBdIHx8IHNbdl0gfHwgc1swXX1dYDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBQcmVwYXJlIHN0eWxlXHJcbiAqXHJcbiAqIEByZXR1cm5zIHtvYmplY3R9XHJcbiAqL1xyXG5mdW5jdGlvbiBwcmVwYXJlU3R5bGUodXNlclN0eWxlKSB7XHJcbiAgbGV0IGZvbnRTaXplID0gJzEycHgnO1xyXG4gIGxldCBmb250RmFtaWx5ID0gd2luZG93XHJcbiAgICAuZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5ib2R5KVxyXG4gICAgLmdldFByb3BlcnR5VmFsdWUoJ2ZvbnQtZmFtaWx5JylcclxuICAgIC50b1N0cmluZygpO1xyXG4gIGlmICh0eXBlb2YgdXNlclN0eWxlICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgaWYgKHR5cGVvZiB1c2VyU3R5bGUuZm9udFNpemUgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIGZvbnRTaXplID0gdXNlclN0eWxlLmZvbnRTaXplO1xyXG4gICAgfVxyXG4gICAgaWYgKHR5cGVvZiB1c2VyU3R5bGUuZm9udEZhbWlseSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgZm9udEZhbWlseSA9IHVzZXJTdHlsZS5mb250RmFtaWx5O1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gZ2V0U3R5bGUoZm9udFNpemUsIGZvbnRGYW1pbHkpO1xyXG59XHJcblxyXG4vKipcclxuICogSGVscGVyIGZ1bmN0aW9uIHRvIGRldGVybWluZSBpZiBzcGVjaWZpZWQgdmFyaWFibGUgaXMgYW4gb2JqZWN0XHJcbiAqXHJcbiAqIEBwYXJhbSB7YW55fSBpdGVtXHJcbiAqXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxuZnVuY3Rpb24gaXNPYmplY3QoaXRlbSkge1xyXG4gIHJldHVybiAoXHJcbiAgICBpdGVtICYmXHJcbiAgICB0eXBlb2YgaXRlbSA9PT0gJ29iamVjdCcgJiZcclxuICAgICFBcnJheS5pc0FycmF5KGl0ZW0pICYmXHJcbiAgICAhKGl0ZW0gaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkgJiZcclxuICAgICEoaXRlbSBpbnN0YW5jZW9mIENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkgJiZcclxuICAgIHR5cGVvZiBpdGVtICE9PSAnZnVuY3Rpb24nXHJcbiAgKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEhlbHBlciBmdW5jdGlvbiB3aGljaCB3aWxsIG1lcmdlIG9iamVjdHMgcmVjdXJzaXZlbHkgLSBjcmVhdGluZyBicmFuZCBuZXcgb25lIC0gbGlrZSBjbG9uZVxyXG4gKlxyXG4gKiBAcGFyYW0ge29iamVjdH0gdGFyZ2V0XHJcbiAqIEBwYXJhbXMge29iamVjdH0gc291cmNlc1xyXG4gKlxyXG4gKiBAcmV0dXJucyB7b2JqZWN0fVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlRGVlcCh0YXJnZXQsIC4uLnNvdXJjZXMpIHtcclxuICBpZiAoIXNvdXJjZXMubGVuZ3RoKSB7XHJcbiAgICByZXR1cm4gdGFyZ2V0O1xyXG4gIH1cclxuICBjb25zdCBzb3VyY2UgPSBzb3VyY2VzLnNoaWZ0KCk7XHJcbiAgaWYgKGlzT2JqZWN0KHRhcmdldCkgJiYgaXNPYmplY3Qoc291cmNlKSkge1xyXG4gICAgZm9yIChjb25zdCBrZXkgaW4gc291cmNlKSB7XHJcbiAgICAgIGlmIChpc09iamVjdChzb3VyY2Vba2V5XSkpIHtcclxuICAgICAgICBpZiAodHlwZW9mIHRhcmdldFtrZXldID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSB7fTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGFyZ2V0W2tleV0gPSBtZXJnZURlZXAodGFyZ2V0W2tleV0sIHNvdXJjZVtrZXldKTtcclxuICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHNvdXJjZVtrZXldKSkge1xyXG4gICAgICAgIHRhcmdldFtrZXldID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaXRlbSBvZiBzb3VyY2Vba2V5XSkge1xyXG4gICAgICAgICAgaWYgKGlzT2JqZWN0KGl0ZW0pKSB7XHJcbiAgICAgICAgICAgIHRhcmdldFtrZXldLnB1c2gobWVyZ2VEZWVwKHt9LCBpdGVtKSk7XHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGFyZ2V0W2tleV0ucHVzaChpdGVtKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gbWVyZ2VEZWVwKHRhcmdldCwgLi4uc291cmNlcyk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBEZXRlY3QgaWYgb2JqZWN0IG9yIGFycmF5IGlzIG9ic2VydmFibGVcclxuICpcclxuICogQHBhcmFtIHtvYmplY3R8YXJyYXl9IG9ialxyXG4gKlxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcbmZ1bmN0aW9uIGlzT2JzZXJ2YWJsZShvYmopIHtcclxuICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gJ29iamVjdCcgJiYgb2JqLmhhc093blByb3BlcnR5KCdfX29iX18nKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFNhbWUgYXMgYWJvdmUgYnV0IHdpdGggcmVhY3Rpdml0eSBpbiBtaW5kXHJcbiAqXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSB0YXJnZXRcclxuICogQHBhcmFtcyB7b2JqZWN0fSBzb3VyY2VzXHJcbiAqXHJcbiAqIEByZXR1cm5zIHtvYmplY3R9XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VEZWVwUmVhY3RpdmUoY29tcG9uZW50LCB0YXJnZXQsIC4uLnNvdXJjZXMpIHtcclxuICBpZiAoIXNvdXJjZXMubGVuZ3RoKSB7XHJcbiAgICByZXR1cm4gdGFyZ2V0O1xyXG4gIH1cclxuICBjb25zdCBzb3VyY2UgPSBzb3VyY2VzLnNoaWZ0KCk7XHJcbiAgaWYgKGlzT2JqZWN0KHRhcmdldCkgJiYgaXNPYmplY3Qoc291cmNlKSkge1xyXG4gICAgZm9yIChjb25zdCBrZXkgaW4gc291cmNlKSB7XHJcbiAgICAgIGlmIChpc09iamVjdChzb3VyY2Vba2V5XSkpIHtcclxuICAgICAgICBpZiAodHlwZW9mIHRhcmdldFtrZXldID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgY29tcG9uZW50LiRzZXQodGFyZ2V0LCBrZXksIHt9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbWVyZ2VEZWVwUmVhY3RpdmUoY29tcG9uZW50LCB0YXJnZXRba2V5XSwgc291cmNlW2tleV0pO1xyXG4gICAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoc291cmNlW2tleV0pKSB7XHJcbiAgICAgICAgY29tcG9uZW50LiRzZXQodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTtcclxuICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygc291cmNlW2tleV0gPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICBpZiAoc291cmNlW2tleV0udG9TdHJpbmcoKS5pbmRleE9mKCdbbmF0aXZlIGNvZGVdJykgPT09IC0xKSB7XHJcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb21wb25lbnQuJHNldCh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBtZXJnZURlZXBSZWFjdGl2ZShjb21wb25lbnQsIHRhcmdldCwgLi4uc291cmNlcyk7XHJcbn1cclxuLyoqXHJcbiAqIENoZWNrIGlmIG9iamVjdHMgb3IgYXJyYXlzIGFyZSBlcXVhbCBieSBjb21wYXJpbmcgbmVzdGVkIHZhbHVlc1xyXG4gKlxyXG4gKiBAcGFyYW0ge29iamVjdHxhcnJheX0gbGVmdFxyXG4gKiBAcGFyYW0ge29iamVjdHxhcnJheX0gcmlnaHRcclxuICpcclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbm90RXF1YWxEZWVwKGxlZnQsIHJpZ2h0LCBjYWNoZSA9IFtdLCBwYXRoID0gJycpIHtcclxuICBpZiAodHlwZW9mIHJpZ2h0ICE9PSB0eXBlb2YgbGVmdCkge1xyXG4gICAgcmV0dXJuIHsgbGVmdCwgcmlnaHQsIHdoYXQ6IHBhdGggKyAnLnR5cGVvZicgfTtcclxuICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkobGVmdCkgJiYgIUFycmF5LmlzQXJyYXkocmlnaHQpKSB7XHJcbiAgICByZXR1cm4geyBsZWZ0LCByaWdodCwgd2hhdDogcGF0aCArICcuaXNBcnJheScgfTtcclxuICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocmlnaHQpICYmICFBcnJheS5pc0FycmF5KGxlZnQpKSB7XHJcbiAgICByZXR1cm4geyBsZWZ0LCByaWdodCwgd2hhdDogcGF0aCArICcuaXNBcnJheScgfTtcclxuICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkobGVmdCkgJiYgQXJyYXkuaXNBcnJheShyaWdodCkpIHtcclxuICAgIGlmIChsZWZ0Lmxlbmd0aCAhPT0gcmlnaHQubGVuZ3RoKSB7XHJcbiAgICAgIHJldHVybiB7IGxlZnQsIHJpZ2h0LCB3aGF0OiBwYXRoICsgJy5sZW5ndGgnIH07XHJcbiAgICB9XHJcbiAgICBsZXQgd2hhdDtcclxuICAgIGZvciAobGV0IGluZGV4ID0gMCwgbGVuID0gbGVmdC5sZW5ndGg7IGluZGV4IDwgbGVuOyBpbmRleCsrKSB7XHJcbiAgICAgIGlmICgod2hhdCA9IG5vdEVxdWFsRGVlcChsZWZ0W2luZGV4XSwgcmlnaHRbaW5kZXhdLCBjYWNoZSwgcGF0aCArICcuJyArIGluZGV4KSkpIHtcclxuICAgICAgICByZXR1cm4gd2hhdDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0gZWxzZSBpZiAoaXNPYmplY3QobGVmdCkgJiYgIWlzT2JqZWN0KHJpZ2h0KSkge1xyXG4gICAgcmV0dXJuIHsgbGVmdCwgcmlnaHQsIHdoYXQ6IHBhdGggKyAnLmlzT2JqZWN0JyB9O1xyXG4gIH0gZWxzZSBpZiAoaXNPYmplY3QocmlnaHQpICYmICFpc09iamVjdChsZWZ0KSkge1xyXG4gICAgcmV0dXJuIHsgbGVmdCwgcmlnaHQsIHdoYXQ6IHBhdGggKyAnLmlzT2JqZWN0JyB9O1xyXG4gIH0gZWxzZSBpZiAoaXNPYmplY3QobGVmdCkgJiYgaXNPYmplY3QocmlnaHQpKSB7XHJcbiAgICBmb3IgKGxldCBrZXkgaW4gbGVmdCkge1xyXG4gICAgICBpZiAoIWxlZnQuaGFzT3duUHJvcGVydHkoa2V5KSB8fCAhbGVmdC5wcm9wZXJ0eUlzRW51bWVyYWJsZShrZXkpKSB7XHJcbiAgICAgICAgY29udGludWU7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKCFyaWdodC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgcmV0dXJuIHsgbGVmdCwgcmlnaHQsIHdoYXQ6IHBhdGggKyAnLicgKyBrZXkgfTtcclxuICAgICAgfVxyXG4gICAgICBsZXQgd2hhdDtcclxuICAgICAgaWYgKCh3aGF0ID0gbm90RXF1YWxEZWVwKGxlZnRba2V5XSwgcmlnaHRba2V5XSwgY2FjaGUsIHBhdGggKyAnLicgKyBrZXkpKSkge1xyXG4gICAgICAgIHJldHVybiB3aGF0O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSBlbHNlIGlmIChsZWZ0ICE9PSByaWdodCkge1xyXG4gICAgcmV0dXJuIHsgbGVmdCwgcmlnaHQsIHdoYXQ6IHBhdGggKyAnLiAhPT0nIH07XHJcbiAgfVxyXG4gIHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEdhbnR0RWxhc3RpY1xyXG4gKiBNYWluIHZ1ZSBjb21wb25lbnRcclxuICovXHJcbmNvbnN0IEdhbnR0RWxhc3RpYyA9IHtcclxuICBuYW1lOiAnR2FudHRFbGFzdGljJyxcclxuICBjb21wb25lbnRzOiB7XHJcbiAgICBNYWluVmlld1xyXG4gIH0sXHJcbiAgcHJvcHM6IFsndGFza3MnLCAnb3B0aW9ucycsICdkeW5hbWljU3R5bGUnXSxcclxuICBwcm92aWRlKCkge1xyXG4gICAgY29uc3QgcHJvdmlkZXIgPSB7fTtcclxuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3ZpZGVyLCAncm9vdCcsIHtcclxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgZ2V0OiAoKSA9PiBzZWxmXHJcbiAgICB9KTtcclxuICAgIHJldHVybiBwcm92aWRlcjtcclxuICB9LFxyXG4gIGRhdGEoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdGF0ZToge1xyXG4gICAgICAgIHRhc2tzOiBbXSxcclxuICAgICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgICBzY3JvbGxCYXJIZWlnaHQ6IDAsXHJcbiAgICAgICAgICBhbGxWaXNpYmxlVGFza3NIZWlnaHQ6IDAsXHJcbiAgICAgICAgICBvdXRlckhlaWdodDogMCxcclxuICAgICAgICAgIHNjcm9sbDoge1xyXG4gICAgICAgICAgICBsZWZ0OiAwLFxyXG4gICAgICAgICAgICB0b3A6IDBcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGR5bmFtaWNTdHlsZToge30sXHJcbiAgICAgICAgcmVmczoge30sXHJcbiAgICAgICAgdGFza3NCeUlkOiB7fSxcclxuICAgICAgICB0YXNrVHJlZToge30sXHJcbiAgICAgICAgY3R4LFxyXG4gICAgICAgIGVtaXRUYXNrc0NoYW5nZXM6IHRydWUsIC8vIHNvbWUgb3BlcmF0aW9ucyBtYXkgcGF1c2UgZW1pdHRpbmcgY2hhbmdlcyB0byBwYXJlbnQgY29tcG9uZW50XHJcbiAgICAgICAgZW1pdE9wdGlvbnNDaGFuZ2VzOiB0cnVlLCAvLyBzb21lIG9wZXJhdGlvbnMgbWF5IHBhdXNlIGVtaXR0aW5nIGNoYW5nZXMgdG8gcGFyZW50IGNvbXBvbmVudFxyXG4gICAgICAgIHJlc2l6ZU9ic2VydmVyOiBudWxsLFxyXG4gICAgICAgIHVud2F0Y2hUYXNrczogbnVsbCxcclxuICAgICAgICB1bndhdGNoT3B0aW9uczogbnVsbCxcclxuICAgICAgICB1bndhdGNoU3R5bGU6IG51bGwsXHJcbiAgICAgICAgdW53YXRjaE91dHB1dFRhc2tzOiBudWxsLFxyXG4gICAgICAgIHVud2F0Y2hPdXRwdXRPcHRpb25zOiBudWxsLFxyXG4gICAgICAgIHVud2F0Y2hPdXRwdXRTdHlsZTogbnVsbFxyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgbWVyZ2VEZWVwLFxyXG4gICAgbWVyZ2VEZWVwUmVhY3RpdmUsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxjdWxhdGUgaGVpZ2h0IG9mIHNjcm9sbGJhciBpbiBjdXJyZW50IGJyb3dzZXJcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAgICovXHJcbiAgICBnZXRTY3JvbGxCYXJIZWlnaHQoKSB7XHJcbiAgICAgIGNvbnN0IG91dGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIG91dGVyLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcclxuICAgICAgb3V0ZXIuc3R5bGUuaGVpZ2h0ID0gJzEwMHB4JztcclxuICAgICAgb3V0ZXIuc3R5bGUubXNPdmVyZmxvd1N0eWxlID0gJ3Njcm9sbGJhcic7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQob3V0ZXIpO1xyXG4gICAgICB2YXIgbm9TY3JvbGwgPSBvdXRlci5vZmZzZXRIZWlnaHQ7XHJcbiAgICAgIG91dGVyLnN0eWxlLm92ZXJmbG93ID0gJ3Njcm9sbCc7XHJcbiAgICAgIHZhciBpbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICBpbm5lci5zdHlsZS5oZWlnaHQgPSAnMTAwJSc7XHJcbiAgICAgIG91dGVyLmFwcGVuZENoaWxkKGlubmVyKTtcclxuICAgICAgdmFyIHdpdGhTY3JvbGwgPSBpbm5lci5vZmZzZXRIZWlnaHQ7XHJcbiAgICAgIG91dGVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQob3V0ZXIpO1xyXG4gICAgICBjb25zdCBoZWlnaHQgPSBub1Njcm9sbCAtIHdpdGhTY3JvbGw7XHJcbiAgICAgIHRoaXMuc3R5bGVbJ2NoYXJ0LXNjcm9sbC1jb250YWluZXItLXZlcnRpY2FsJ11bJ21hcmdpbi1sZWZ0J10gPSBgLSR7aGVpZ2h0fXB4YDtcclxuICAgICAgcmV0dXJuICh0aGlzLnN0YXRlLm9wdGlvbnMuc2Nyb2xsQmFySGVpZ2h0ID0gaGVpZ2h0KTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBGaWxsIG91dCBlbXB0eSB0YXNrIHByb3BlcnRpZXMgYW5kIG1ha2UgaXQgcmVhY3RpdmVcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge2FycmF5fSB0YXNrc1xyXG4gICAgICovXHJcbiAgICBmaWxsVGFza3ModGFza3MpIHtcclxuICAgICAgZm9yIChsZXQgdGFzayBvZiB0YXNrcykge1xyXG4gICAgICAgIGlmICh0eXBlb2YgdGFzay54ID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgdGFzay54ID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiB0YXNrLnkgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICB0YXNrLnkgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIHRhc2sud2lkdGggPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICB0YXNrLndpZHRoID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiB0YXNrLmhlaWdodCA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgIHRhc2suaGVpZ2h0ID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiB0YXNrLm1vdXNlT3ZlciA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgIHRhc2subW91c2VPdmVyID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgdGFzay5jb2xsYXBzZWQgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICB0YXNrLmNvbGxhcHNlZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIHRhc2suZGVwZW5kZW50T24gPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICB0YXNrLmRlcGVuZGVudE9uID0gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgdGFzay5wYXJlbnRJZCA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgIHRhc2sucGFyZW50SWQgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIHRhc2suc3R5bGUgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICB0YXNrLnN0eWxlID0ge307XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgdGFzay5jaGlsZHJlbiA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgIHRhc2suY2hpbGRyZW4gPSBbXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiB0YXNrLmFsbENoaWxkcmVuID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgdGFzay5hbGxDaGlsZHJlbiA9IFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIHRhc2sucGFyZW50cyA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgIHRhc2sucGFyZW50cyA9IFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIHRhc2sucGFyZW50ID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgdGFzay5wYXJlbnQgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIHRhc2suc3RhcnRUaW1lID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgdGFzay5zdGFydFRpbWUgPSBkYXlqcyh0YXNrLnN0YXJ0KS52YWx1ZU9mKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgdGFzay5lbmRUaW1lID09PSAndW5kZWZpbmVkJyAmJiB0YXNrLmhhc093blByb3BlcnR5KCdlbmQnKSkge1xyXG4gICAgICAgICAgdGFzay5lbmRUaW1lID0gZGF5anModGFzay5lbmQpLnZhbHVlT2YoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB0YXNrLmVuZFRpbWUgPT09ICd1bmRlZmluZWQnICYmIHRhc2suaGFzT3duUHJvcGVydHkoJ2R1cmF0aW9uJykpIHtcclxuICAgICAgICAgIHRhc2suZW5kVGltZSA9IHRhc2suc3RhcnRUaW1lICsgdGFzay5kdXJhdGlvbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiB0YXNrLmR1cmF0aW9uID09PSAndW5kZWZpbmVkJyAmJiB0YXNrLmhhc093blByb3BlcnR5KCdlbmRUaW1lJykpIHtcclxuICAgICAgICAgIHRhc2suZHVyYXRpb24gPSB0YXNrLmVuZFRpbWUgLSB0YXNrLnN0YXJ0VGltZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHRhc2tzO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIE1hcCB0YXNrc1xyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7QXJyYXl9IHRhc2tzXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xyXG4gICAgICovXHJcbiAgICBtYXBUYXNrcyh0YXNrcywgb3B0aW9ucykge1xyXG4gICAgICBmb3IgKGxldCBbaW5kZXgsIHRhc2tdIG9mIHRhc2tzLmVudHJpZXMoKSkge1xyXG4gICAgICAgIHRhc2tzW2luZGV4XSA9IHtcclxuICAgICAgICAgIC4uLnRhc2ssXHJcbiAgICAgICAgICBpZDogdGFza1tvcHRpb25zLnRhc2tNYXBwaW5nLmlkXSxcclxuICAgICAgICAgIHN0YXJ0OiB0YXNrW29wdGlvbnMudGFza01hcHBpbmcuc3RhcnRdLFxyXG4gICAgICAgICAgbGFiZWw6IHRhc2tbb3B0aW9ucy50YXNrTWFwcGluZy5sYWJlbF0sXHJcbiAgICAgICAgICBkdXJhdGlvbjogdGFza1tvcHRpb25zLnRhc2tNYXBwaW5nLmR1cmF0aW9uXSxcclxuICAgICAgICAgIHByb2dyZXNzOiB0YXNrW29wdGlvbnMudGFza01hcHBpbmcucHJvZ3Jlc3NdLFxyXG4gICAgICAgICAgdHlwZTogdGFza1tvcHRpb25zLnRhc2tNYXBwaW5nLnR5cGVdLFxyXG4gICAgICAgICAgc3R5bGU6IHRhc2tbb3B0aW9ucy50YXNrTWFwcGluZy5zdHlsZV0sXHJcbiAgICAgICAgICBjb2xsYXBzZWQ6IHRhc2tbb3B0aW9ucy50YXNrTWFwcGluZy5jb2xsYXBzZWRdLFxyXG4gICAgICAgICAgc2hvd1Rhc2tMaXN0OiB0YXNrW29wdGlvbnMudGFza01hcHBpbmcuc2hvd1Rhc2tMaXN0XVxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHRhc2tzO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEluaXRpYWxpemUgY29tcG9uZW50XHJcbiAgICAgKi9cclxuICAgIGluaXRpYWxpemUoaXRzVXBkYXRlID0gJycpIHtcclxuICAgICAgbGV0IG9wdGlvbnMgPSBtZXJnZURlZXAoe30sIHRoaXMuc3RhdGUub3B0aW9ucywgZ2V0T3B0aW9ucyh0aGlzLm9wdGlvbnMpLCB0aGlzLm9wdGlvbnMpO1xyXG4gICAgICBsZXQgdGFza3MgPSB0aGlzLm1hcFRhc2tzKHRoaXMudGFza3MsIG9wdGlvbnMpO1xyXG4gICAgICBpZiAoT2JqZWN0LmtleXModGhpcy5zdGF0ZS5keW5hbWljU3R5bGUpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZVN0eWxlKCk7XHJcbiAgICAgIH1cclxuICAgICAgZGF5anMubG9jYWxlKG9wdGlvbnMubG9jYWxlLCBudWxsLCB0cnVlKTtcclxuICAgICAgZGF5anMubG9jYWxlKG9wdGlvbnMubG9jYWxlLm5hbWUpO1xyXG4gICAgICBpZiAodHlwZW9mIG9wdGlvbnMudGFza0xpc3QgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgb3B0aW9ucy50YXNrTGlzdCA9IHt9O1xyXG4gICAgICB9XHJcbiAgICAgIG9wdGlvbnMudGFza0xpc3QuY29sdW1ucyA9IG9wdGlvbnMudGFza0xpc3QuY29sdW1ucy5tYXAoKGNvbHVtbiwgaW5kZXgpID0+IHtcclxuICAgICAgICBjb2x1bW4udGhyZXNob2xkUGVyY2VudCA9IDEwMDtcclxuICAgICAgICBjb2x1bW4ud2lkdGhGcm9tUGVyY2VudGFnZSA9IDA7XHJcbiAgICAgICAgY29sdW1uLmZpbmFsV2lkdGggPSAwO1xyXG4gICAgICAgIGlmICh0eXBlb2YgY29sdW1uLmhlaWdodCA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgIGNvbHVtbi5oZWlnaHQgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIGNvbHVtbi5zdHlsZSA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgIGNvbHVtbi5zdHlsZSA9IHt9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb2x1bW4uX2lkID0gYCR7aW5kZXh9LSR7Y29sdW1uLmxhYmVsfWA7XHJcbiAgICAgICAgcmV0dXJuIGNvbHVtbjtcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMuc3RhdGUub3B0aW9ucyA9IG9wdGlvbnM7XHJcbiAgICAgIHRhc2tzID0gdGhpcy5maWxsVGFza3ModGFza3MpO1xyXG4gICAgICB0aGlzLnN0YXRlLnRhc2tzQnlJZCA9IHRoaXMucmVzZXRUYXNrVHJlZSh0YXNrcyk7XHJcbiAgICAgIHRoaXMuc3RhdGUudGFza1RyZWUgPSB0aGlzLm1ha2VUYXNrVHJlZSh0aGlzLnN0YXRlLnJvb3RUYXNrLCB0YXNrcyk7XHJcbiAgICAgIHRoaXMuc3RhdGUudGFza3MgPSB0aGlzLnN0YXRlLnRhc2tUcmVlLmFsbENoaWxkcmVuLm1hcChjaGlsZElkID0+IHRoaXMuZ2V0VGFzayhjaGlsZElkKSk7XHJcbiAgICAgIHRoaXMuY2FsY3VsYXRlVGFza0xpc3RDb2x1bW5zRGltZW5zaW9ucygpO1xyXG4gICAgICB0aGlzLnN0YXRlLm9wdGlvbnMuc2Nyb2xsQmFySGVpZ2h0ID0gdGhpcy5nZXRTY3JvbGxCYXJIZWlnaHQoKTtcclxuICAgICAgdGhpcy5zdGF0ZS5vcHRpb25zLm91dGVySGVpZ2h0ID0gdGhpcy5zdGF0ZS5vcHRpb25zLmhlaWdodCArIHRoaXMuc3RhdGUub3B0aW9ucy5zY3JvbGxCYXJIZWlnaHQ7XHJcbiAgICAgIHRoaXMuZ2xvYmFsT25SZXNpemUoKTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbml0aWFsaXplIHN0eWxlXHJcbiAgICAgKi9cclxuICAgIGluaXRpYWxpemVTdHlsZSgpIHtcclxuICAgICAgdGhpcy5zdGF0ZS5keW5hbWljU3R5bGUgPSBtZXJnZURlZXAoe30sIHByZXBhcmVTdHlsZSh0aGlzLmR5bmFtaWNTdHlsZSksIHRoaXMuZHluYW1pY1N0eWxlKTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgY2FsZW5kYXIgcm93cyBvdXRlciBoZWlnaHRcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7aW50fVxyXG4gICAgICovXHJcbiAgICBnZXRDYWxlbmRhckhlaWdodCgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuc3RhdGUub3B0aW9ucy5jYWxlbmRhci5oZWlnaHQgKyB0aGlzLnN0YXRlLm9wdGlvbnMuY2FsZW5kYXIuc3Ryb2tlV2lkdGg7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0IG1heGltYWwgbGV2ZWwgb2YgbmVzdGVkIHRhc2sgY2hpbGRyZW5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7aW50fVxyXG4gICAgICovXHJcbiAgICBnZXRNYXhpbWFsTGV2ZWwoKSB7XHJcbiAgICAgIGxldCBtYXhpbWFsTGV2ZWwgPSAwO1xyXG4gICAgICB0aGlzLnN0YXRlLnRhc2tzLmZvckVhY2godGFzayA9PiB7XHJcbiAgICAgICAgaWYgKHRhc2sucGFyZW50cy5sZW5ndGggPiBtYXhpbWFsTGV2ZWwpIHtcclxuICAgICAgICAgIG1heGltYWxMZXZlbCA9IHRhc2sucGFyZW50cy5sZW5ndGg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIG1heGltYWxMZXZlbCAtIDE7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0IG1heGltYWwgZXhwYW5kZXIgd2lkdGggLSB0byBjYWxjdWxhdGUgc3RyYWlnaHQgdGFzayBsaXN0IHRleHRcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7aW50fVxyXG4gICAgICovXHJcbiAgICBnZXRNYXhpbWFsRXhwYW5kZXJXaWR0aCgpIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICB0aGlzLmdldE1heGltYWxMZXZlbCgpICogdGhpcy5zdGF0ZS5vcHRpb25zLnRhc2tMaXN0LmV4cGFuZGVyLnBhZGRpbmcgK1xyXG4gICAgICAgIHRoaXMuc3RhdGUub3B0aW9ucy50YXNrTGlzdC5leHBhbmRlci5tYXJnaW5cclxuICAgICAgKTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTeW5jaHJvbml6ZSBzY3JvbGxUb3AgcHJvcGVydHkgd2hlbiByb3cgaGVpZ2h0IGlzIGNoYW5nZWRcclxuICAgICAqL1xyXG4gICAgc3luY1Njcm9sbFRvcCgpIHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIHRoaXMuc3RhdGUucmVmcy50YXNrTGlzdEl0ZW1zICYmXHJcbiAgICAgICAgdGhpcy5zdGF0ZS5yZWZzLmNoYXJ0R3JhcGguc2Nyb2xsVG9wICE9PSB0aGlzLnN0YXRlLnJlZnMudGFza0xpc3RJdGVtcy5zY3JvbGxUb3BcclxuICAgICAgKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5vcHRpb25zLnNjcm9sbC50b3AgPSB0aGlzLnN0YXRlLnJlZnMudGFza0xpc3RJdGVtcy5zY3JvbGxUb3AgPSB0aGlzLnN0YXRlLnJlZnMuY2hhcnRTY3JvbGxDb250YWluZXJWZXJ0aWNhbC5zY3JvbGxUb3AgPSB0aGlzLnN0YXRlLnJlZnMuY2hhcnRHcmFwaC5zY3JvbGxUb3A7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxjdWxhdGUgdGFzayBsaXN0IGNvbHVtbnMgZGltZW5zaW9uc1xyXG4gICAgICovXHJcbiAgICBjYWxjdWxhdGVUYXNrTGlzdENvbHVtbnNEaW1lbnNpb25zKCkge1xyXG4gICAgICBsZXQgZmluYWwgPSAwO1xyXG4gICAgICBsZXQgcGVyY2VudGFnZSA9IDA7XHJcbiAgICAgIGZvciAobGV0IGNvbHVtbiBvZiB0aGlzLnN0YXRlLm9wdGlvbnMudGFza0xpc3QuY29sdW1ucykge1xyXG4gICAgICAgIGlmIChjb2x1bW4uZXhwYW5kZXIpIHtcclxuICAgICAgICAgIGNvbHVtbi53aWR0aEZyb21QZXJjZW50YWdlID1cclxuICAgICAgICAgICAgKCh0aGlzLmdldE1heGltYWxFeHBhbmRlcldpZHRoKCkgKyBjb2x1bW4ud2lkdGgpIC8gMTAwKSAqIHRoaXMuc3RhdGUub3B0aW9ucy50YXNrTGlzdC5wZXJjZW50O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb2x1bW4ud2lkdGhGcm9tUGVyY2VudGFnZSA9IChjb2x1bW4ud2lkdGggLyAxMDApICogdGhpcy5zdGF0ZS5vcHRpb25zLnRhc2tMaXN0LnBlcmNlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHBlcmNlbnRhZ2UgKz0gY29sdW1uLndpZHRoRnJvbVBlcmNlbnRhZ2U7XHJcbiAgICAgICAgY29sdW1uLmZpbmFsV2lkdGggPSAoY29sdW1uLnRocmVzaG9sZFBlcmNlbnQgKiBjb2x1bW4ud2lkdGhGcm9tUGVyY2VudGFnZSkgLyAxMDA7XHJcbiAgICAgICAgZmluYWwgKz0gY29sdW1uLmZpbmFsV2lkdGg7XHJcbiAgICAgICAgY29sdW1uLmhlaWdodCA9IHRoaXMuZ2V0VGFza0hlaWdodCgpIC0gdGhpcy5zdHlsZVsnZ3JpZC1saW5lLWhvcml6b250YWwnXVsnc3Ryb2tlLXdpZHRoJ107XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zdGF0ZS5vcHRpb25zLnRhc2tMaXN0LndpZHRoRnJvbVBlcmNlbnRhZ2UgPSBwZXJjZW50YWdlO1xyXG4gICAgICB0aGlzLnN0YXRlLm9wdGlvbnMudGFza0xpc3QuZmluYWxXaWR0aCA9IGZpbmFsO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlc2V0IHRhc2sgdHJlZSAtIHdoaWNoIGlzIHVzZWQgdG8gY3JlYXRlIHRyZWUgbGlrZSBzdHJ1Y3R1cmUgaW5zaWRlIHRhc2sgbGlzdFxyXG4gICAgICovXHJcbiAgICByZXNldFRhc2tUcmVlKHRhc2tzKSB7XHJcbiAgICAgIHRoaXMuJHNldCh0aGlzLnN0YXRlLCAncm9vdFRhc2snLCB7XHJcbiAgICAgICAgaWQ6IG51bGwsXHJcbiAgICAgICAgbGFiZWw6ICdyb290JyxcclxuICAgICAgICBjaGlsZHJlbjogW10sXHJcbiAgICAgICAgYWxsQ2hpbGRyZW46IFtdLFxyXG4gICAgICAgIHBhcmVudHM6IFtdLFxyXG4gICAgICAgIHBhcmVudDogbnVsbCxcclxuICAgICAgICBfX3Jvb3Q6IHRydWVcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IHRhc2tzQnlJZCA9IHt9O1xyXG4gICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gdGFza3MubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICBsZXQgY3VycmVudCA9IHRhc2tzW2ldO1xyXG4gICAgICAgIGN1cnJlbnQuY2hpbGRyZW4gPSBbXTtcclxuICAgICAgICBjdXJyZW50LmFsbENoaWxkcmVuID0gW107XHJcbiAgICAgICAgY3VycmVudC5wYXJlbnQgPSBudWxsO1xyXG4gICAgICAgIGN1cnJlbnQucGFyZW50cyA9IFtdO1xyXG4gICAgICAgIHRhc2tzQnlJZFtjdXJyZW50LmlkXSA9IGN1cnJlbnQ7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHRhc2tzQnlJZDtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBNYWtlIHRhc2sgdHJlZSwgYWZ0ZXIgcmVzZXQgLSBsb29rIGFib3ZlXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHRhc2tcclxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9IHRhc2tzIHdpdGggY2hpbGRyZW4gYW5kIHBhcmVudHNcclxuICAgICAqL1xyXG4gICAgbWFrZVRhc2tUcmVlKHRhc2ssIHRhc2tzKSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSB0YXNrcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgIGxldCBjdXJyZW50ID0gdGFza3NbaV07XHJcbiAgICAgICAgaWYgKGN1cnJlbnQucGFyZW50SWQgPT09IHRhc2suaWQpIHtcclxuICAgICAgICAgIGlmICh0YXNrLnBhcmVudHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRhc2sucGFyZW50cy5mb3JFYWNoKHBhcmVudCA9PiBjdXJyZW50LnBhcmVudHMucHVzaChwYXJlbnQpKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmICghdGFzay5wcm9wZXJ0eUlzRW51bWVyYWJsZSgnX19yb290JykpIHtcclxuICAgICAgICAgICAgY3VycmVudC5wYXJlbnRzLnB1c2godGFzay5pZCk7XHJcbiAgICAgICAgICAgIGN1cnJlbnQucGFyZW50ID0gdGFzay5pZDtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnQucGFyZW50cyA9IFtdO1xyXG4gICAgICAgICAgICBjdXJyZW50LnBhcmVudCA9IG51bGw7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBjdXJyZW50ID0gdGhpcy5tYWtlVGFza1RyZWUoY3VycmVudCwgdGFza3MpO1xyXG4gICAgICAgICAgdGFzay5hbGxDaGlsZHJlbi5wdXNoKGN1cnJlbnQuaWQpO1xyXG4gICAgICAgICAgdGFzay5jaGlsZHJlbi5wdXNoKGN1cnJlbnQuaWQpO1xyXG4gICAgICAgICAgY3VycmVudC5hbGxDaGlsZHJlbi5mb3JFYWNoKGNoaWxkSWQgPT4gdGFzay5hbGxDaGlsZHJlbi5wdXNoKGNoaWxkSWQpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHRhc2s7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRhc2sgYnkgaWRcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge2FueX0gdGFza0lkXHJcbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fG51bGx9IHRhc2tcclxuICAgICAqL1xyXG4gICAgZ2V0VGFzayh0YXNrSWQpIHtcclxuICAgICAgaWYgKHR5cGVvZiB0aGlzLnN0YXRlLnRhc2tzQnlJZFt0YXNrSWRdICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLnRhc2tzQnlJZFt0YXNrSWRdO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldCBjaGlsZHJlbiB0YXNrcyBmb3Igc3BlY2lmaWVkIHRhc2tJZFxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7YW55fSB0YXNrSWRcclxuICAgICAqIEByZXR1cm5zIHthcnJheX0gY2hpbGRyZW5cclxuICAgICAqL1xyXG4gICAgZ2V0Q2hpbGRyZW4odGFza0lkKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnN0YXRlLnRhc2tzLmZpbHRlcih0YXNrID0+IHRhc2sucGFyZW50ID09PSB0YXNrSWQpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIElzIHRhc2sgdmlzaWJsZVxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7TnVtYmVyfFN0cmluZ3xUYXNrfSB0YXNrXHJcbiAgICAgKi9cclxuICAgIGlzVGFza1Zpc2libGUodGFzaykge1xyXG4gICAgICBpZiAodHlwZW9mIHRhc2sgPT09ICdudW1iZXInIHx8IHR5cGVvZiB0YXNrID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgIHRhc2sgPSB0aGlzLmdldFRhc2sodGFzayk7XHJcbiAgICAgIH1cclxuICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHRhc2sucGFyZW50cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgIGlmICh0aGlzLmdldFRhc2sodGFzay5wYXJlbnRzW2ldKS5jb2xsYXBzZWQpIHtcclxuICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHN2Z1xyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9IGh0bWwgc3ZnIGltYWdlIG9mIGdhbnR0XHJcbiAgICAgKi9cclxuICAgIGdldFNWRygpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuc3RhdGUub3B0aW9ucy5tYWluVmlldy5vdXRlckhUTUw7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0IGltYWdlXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgaW1hZ2UgZm9ybWF0XHJcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZX0gd2hlbiByZXNvbHZlZCByZXR1cm5zIGJhc2U2NCBpbWFnZSBzdHJpbmcgb2YgZ2FudHRcclxuICAgICAqL1xyXG4gICAgZ2V0SW1hZ2UodHlwZSA9ICdpbWFnZS9wbmcnKSB7XHJcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcclxuICAgICAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICBpbWcub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICAgICAgICBjYW52YXMud2lkdGggPSB0aGlzLnN0YXRlLm9wdGlvbnMubWFpblZpZXcuY2xpZW50V2lkdGg7XHJcbiAgICAgICAgICBjYW52YXMuaGVpZ2h0ID0gdGhpcy5zdGF0ZS5vcHRpb25zLnJvd3NIZWlnaHQ7XHJcbiAgICAgICAgICBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKS5kcmF3SW1hZ2UoaW1nLCAwLCAwKTtcclxuICAgICAgICAgIHJlc29sdmUoY2FudmFzLnRvRGF0YVVSTCh0eXBlKSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBpbWcuc3JjID0gJ2RhdGE6aW1hZ2Uvc3ZnK3htbCwnICsgZW5jb2RlVVJJQ29tcG9uZW50KHRoaXMuZ2V0U1ZHKCkpO1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgZ2FudHQgdG90YWwgaGVpZ2h0XHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge251bWJlcn1cclxuICAgICAqL1xyXG4gICAgZ2V0SGVpZ2h0KHZpc2libGVUYXNrcywgb3V0ZXIgPSBmYWxzZSkge1xyXG4gICAgICBsZXQgaGVpZ2h0ID1cclxuICAgICAgICB2aXNpYmxlVGFza3MubGVuZ3RoICogKHRoaXMuc3RhdGUub3B0aW9ucy5yb3cuaGVpZ2h0ICsgdGhpcy5zdGF0ZS5vcHRpb25zLmNoYXJ0LmdyaWQuaG9yaXpvbnRhbC5nYXAgKiAyKSArXHJcbiAgICAgICAgdGhpcy5zdGF0ZS5vcHRpb25zLmNhbGVuZGFyLmhlaWdodCArXHJcbiAgICAgICAgdGhpcy5zdGF0ZS5vcHRpb25zLmNhbGVuZGFyLnN0cm9rZVdpZHRoICtcclxuICAgICAgICB0aGlzLnN0YXRlLm9wdGlvbnMuY2FsZW5kYXIuZ2FwO1xyXG4gICAgICBpZiAob3V0ZXIpIHtcclxuICAgICAgICBoZWlnaHQgKz0gdGhpcy5zdGF0ZS5vcHRpb25zLnNjcm9sbEJhckhlaWdodDtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gaGVpZ2h0O1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldCBvbmUgdGFzayBoZWlnaHRcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAgICovXHJcbiAgICBnZXRUYXNrSGVpZ2h0KHdpdGhTdHJva2UgPSBmYWxzZSkge1xyXG4gICAgICBpZiAod2l0aFN0cm9rZSkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICB0aGlzLnN0YXRlLm9wdGlvbnMucm93LmhlaWdodCArXHJcbiAgICAgICAgICB0aGlzLnN0YXRlLm9wdGlvbnMuY2hhcnQuZ3JpZC5ob3Jpem9udGFsLmdhcCAqIDIgK1xyXG4gICAgICAgICAgdGhpcy5zdHlsZVsnZ3JpZC1saW5lLWhvcml6b250YWwnXVsnc3Ryb2tlLXdpZHRoJ11cclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0aGlzLnN0YXRlLm9wdGlvbnMucm93LmhlaWdodCArIHRoaXMuc3RhdGUub3B0aW9ucy5jaGFydC5ncmlkLmhvcml6b250YWwuZ2FwICogMjtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgc3BlY2lmaWVkIHRhc2tzIGhlaWdodFxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKi9cclxuICAgIGdldFRhc2tzSGVpZ2h0KHZpc2libGVUYXNrcykge1xyXG4gICAgICByZXR1cm4gdmlzaWJsZVRhc2tzLmxlbmd0aCAqIHRoaXMuZ2V0VGFza0hlaWdodCgpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbnZlcnQgdGltZSAoaW4gbWlsbGlzZWNvbmRzKSB0byBwaXhlbCBvZmZzZXQgaW5zaWRlIGNoYXJ0XHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtpbnR9IG1zXHJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAgICovXHJcbiAgICB0aW1lVG9QaXhlbE9mZnNldFgobXMpIHtcclxuICAgICAgbGV0IHggPSBtcyAtIHRoaXMuc3RhdGUub3B0aW9ucy50aW1lcy5maXJzdFRpbWU7XHJcbiAgICAgIGlmICh4KSB7XHJcbiAgICAgICAgeCA9IHggLyB0aGlzLnN0YXRlLm9wdGlvbnMudGltZXMudGltZVBlclBpeGVsO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB4O1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbnZlcnQgcGl4ZWwgb2Zmc2V0IGluc2lkZSBjaGFydCB0byBjb3JyZXNwb25kaW5nIHRpbWUgb2Zmc2V0IGluIG1pbGxpc2Vjb25kc1xyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBwaXhlbE9mZnNldFhcclxuICAgICAqIEByZXR1cm5zIHtpbnR9IG1pbGxpc2Vjb25kc1xyXG4gICAgICovXHJcbiAgICBwaXhlbE9mZnNldFhUb1RpbWUocGl4ZWxPZmZzZXRYKSB7XHJcbiAgICAgIGxldCBvZmZzZXQgPSBwaXhlbE9mZnNldFggKyB0aGlzLnN0eWxlWydncmlkLWxpbmUtdmVydGljYWwnXVsnc3Ryb2tlLXdpZHRoJ10gLyAyO1xyXG4gICAgICByZXR1cm4gb2Zmc2V0ICogdGhpcy5zdGF0ZS5vcHRpb25zLnRpbWVzLnRpbWVQZXJQaXhlbCArIHRoaXMuc3RhdGUub3B0aW9ucy50aW1lcy5maXJzdFRpbWU7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGV0ZXJtaW5lIGlmIGVsZW1lbnQgaXMgaW5zaWRlIGN1cnJlbnQgdmlldyBwb3J0XHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHggLSBlbGVtZW50IHBsYWNlbWVudFxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHdpZHRoIC0gZWxlbWVudCB3aWR0aFxyXG4gICAgICogQHBhcmFtIHtpbnR9IGJ1ZmZlciAtIG9yIHRocmVzaG9sZCwgaWYgZWxlbWVudCBpcyBvdXRzaWRlIHZpZXdwb3J0IGJ1dCBvZmZzZXQgZnJvbSB2aWV3IHBvcnQgaXMgYmVsb3cgdGhpcyB2YWx1ZSByZXR1cm4gdHJ1ZVxyXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAgICAgKi9cclxuICAgIGlzSW5zaWRlVmlld1BvcnQoeCwgd2lkdGgsIGJ1ZmZlciA9IDUwMDApIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICAoeCArIHdpZHRoICsgYnVmZmVyID49IHRoaXMuc3RhdGUub3B0aW9ucy5zY3JvbGwuY2hhcnQubGVmdCAmJlxyXG4gICAgICAgICAgeCAtIGJ1ZmZlciA8PSB0aGlzLnN0YXRlLm9wdGlvbnMuc2Nyb2xsLmNoYXJ0LnJpZ2h0KSB8fFxyXG4gICAgICAgICh4IC0gYnVmZmVyIDw9IHRoaXMuc3RhdGUub3B0aW9ucy5zY3JvbGwuY2hhcnQubGVmdCAmJlxyXG4gICAgICAgICAgeCArIHdpZHRoICsgYnVmZmVyID49IHRoaXMuc3RhdGUub3B0aW9ucy5zY3JvbGwuY2hhcnQucmlnaHQpXHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2hhcnQgc2Nyb2xsIGV2ZW50IGhhbmRsZXJcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge2V2ZW50fSBldlxyXG4gICAgICovXHJcbiAgICBvblNjcm9sbENoYXJ0KGV2KSB7XHJcbiAgICAgIHRoaXMuX29uU2Nyb2xsQ2hhcnQoXHJcbiAgICAgICAgdGhpcy5zdGF0ZS5yZWZzLmNoYXJ0U2Nyb2xsQ29udGFpbmVySG9yaXpvbnRhbC5zY3JvbGxMZWZ0LFxyXG4gICAgICAgIHRoaXMuc3RhdGUucmVmcy5jaGFydFNjcm9sbENvbnRhaW5lclZlcnRpY2FsLnNjcm9sbFRvcFxyXG4gICAgICApO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEFmdGVyIHNhbWUgYXMgYWJvdmUgYnV0IHdpdGggZGlmZmVyZW50IGFyZ3VtZW50cyAtIG5vcm1hbGl6ZWRcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbGVmdFxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHRvcFxyXG4gICAgICovXHJcbiAgICBfb25TY3JvbGxDaGFydChsZWZ0LCB0b3ApIHtcclxuICAgICAgaWYgKHRoaXMuc3RhdGUub3B0aW9ucy5zY3JvbGwuY2hhcnQubGVmdCA9PT0gbGVmdCAmJiB0aGlzLnN0YXRlLm9wdGlvbnMuc2Nyb2xsLmNoYXJ0LnRvcCA9PT0gdG9wKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IGNoYXJ0Q29udGFpbmVyV2lkdGggPSB0aGlzLnN0YXRlLnJlZnMuY2hhcnRDb250YWluZXIuY2xpZW50V2lkdGg7XHJcbiAgICAgIHRoaXMuc3RhdGUub3B0aW9ucy5zY3JvbGwuY2hhcnQubGVmdCA9IGxlZnQ7XHJcbiAgICAgIHRoaXMuc3RhdGUub3B0aW9ucy5zY3JvbGwuY2hhcnQucmlnaHQgPSBsZWZ0ICsgY2hhcnRDb250YWluZXJXaWR0aDtcclxuICAgICAgdGhpcy5zdGF0ZS5vcHRpb25zLnNjcm9sbC5jaGFydC5wZXJjZW50ID0gKGxlZnQgLyB0aGlzLnN0YXRlLm9wdGlvbnMudGltZXMudG90YWxWaWV3RHVyYXRpb25QeCkgKiAxMDA7XHJcbiAgICAgIHRoaXMuc3RhdGUub3B0aW9ucy5zY3JvbGwuY2hhcnQudG9wID0gdG9wO1xyXG4gICAgICB0aGlzLnN0YXRlLm9wdGlvbnMuc2Nyb2xsLmNoYXJ0LnRpbWUgPSB0aGlzLnBpeGVsT2Zmc2V0WFRvVGltZShsZWZ0KTtcclxuICAgICAgdGhpcy5zdGF0ZS5vcHRpb25zLnNjcm9sbC5jaGFydC50aW1lQ2VudGVyID0gdGhpcy5waXhlbE9mZnNldFhUb1RpbWUobGVmdCArIGNoYXJ0Q29udGFpbmVyV2lkdGggLyAyKTtcclxuICAgICAgdGhpcy5zdGF0ZS5vcHRpb25zLnNjcm9sbC5jaGFydC5kYXRlVGltZS5sZWZ0ID0gZGF5anModGhpcy5zdGF0ZS5vcHRpb25zLnNjcm9sbC5jaGFydC50aW1lKS52YWx1ZU9mKCk7XHJcbiAgICAgIHRoaXMuc3RhdGUub3B0aW9ucy5zY3JvbGwuY2hhcnQuZGF0ZVRpbWUucmlnaHQgPSBkYXlqcyhcclxuICAgICAgICB0aGlzLnBpeGVsT2Zmc2V0WFRvVGltZShsZWZ0ICsgdGhpcy5zdGF0ZS5yZWZzLmNoYXJ0LmNsaWVudFdpZHRoKVxyXG4gICAgICApLnZhbHVlT2YoKTtcclxuICAgICAgdGhpcy5zY3JvbGxUbyhsZWZ0LCB0b3ApO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFNjcm9sbCBjdXJyZW50IGNoYXJ0IHRvIHNwZWNpZmllZCB0aW1lIChpbiBtaWxsaXNlY29uZHMpXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtpbnR9IHRpbWVcclxuICAgICAqL1xyXG4gICAgc2Nyb2xsVG9UaW1lKHRpbWUpIHtcclxuICAgICAgbGV0IHBvcyA9IHRoaXMudGltZVRvUGl4ZWxPZmZzZXRYKHRpbWUpO1xyXG4gICAgICBjb25zdCBjaGFydENvbnRhaW5lcldpZHRoID0gdGhpcy5zdGF0ZS5yZWZzLmNoYXJ0Q29udGFpbmVyLmNsaWVudFdpZHRoO1xyXG4gICAgICBwb3MgPSBwb3MgLSBjaGFydENvbnRhaW5lcldpZHRoIC8gMjtcclxuICAgICAgaWYgKHBvcyA+IHRoaXMuc3RhdGUub3B0aW9ucy53aWR0aCkge1xyXG4gICAgICAgIHBvcyA9IHRoaXMuc3RhdGUub3B0aW9ucy53aWR0aCAtIGNoYXJ0Q29udGFpbmVyV2lkdGg7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zY3JvbGxUbyhwb3MpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFNjcm9sbCBjaGFydCBvciB0YXNrIGxpc3QgdG8gc3BlY2lmaWVkIHBpeGVsIHZhbHVlc1xyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfG51bGx9IGxlZnRcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfG51bGx9IHRvcFxyXG4gICAgICovXHJcbiAgICBzY3JvbGxUbyhsZWZ0ID0gbnVsbCwgdG9wID0gbnVsbCkge1xyXG4gICAgICBpZiAobGVmdCAhPT0gbnVsbCkge1xyXG4gICAgICAgIHRoaXMuc3RhdGUucmVmcy5jaGFydENhbGVuZGFyQ29udGFpbmVyLnNjcm9sbExlZnQgPSBsZWZ0O1xyXG4gICAgICAgIHRoaXMuc3RhdGUucmVmcy5jaGFydEdyYXBoQ29udGFpbmVyLnNjcm9sbExlZnQgPSBsZWZ0O1xyXG4gICAgICAgIHRoaXMuc3RhdGUucmVmcy5jaGFydFNjcm9sbENvbnRhaW5lckhvcml6b250YWwuc2Nyb2xsTGVmdCA9IGxlZnQ7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5vcHRpb25zLnNjcm9sbC5sZWZ0ID0gbGVmdDtcclxuICAgICAgfVxyXG4gICAgICBpZiAodG9wICE9PSBudWxsKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5yZWZzLmNoYXJ0U2Nyb2xsQ29udGFpbmVyVmVydGljYWwuc2Nyb2xsVG9wID0gdG9wO1xyXG4gICAgICAgIHRoaXMuc3RhdGUucmVmcy5jaGFydEdyYXBoLnNjcm9sbFRvcCA9IHRvcDtcclxuICAgICAgICB0aGlzLnN0YXRlLnJlZnMudGFza0xpc3RJdGVtcy5zY3JvbGxUb3AgPSB0b3A7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5vcHRpb25zLnNjcm9sbC50b3AgPSB0b3A7XHJcbiAgICAgICAgdGhpcy5zeW5jU2Nyb2xsVG9wKCk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBZnRlciBzb21lIGFjdGlvbnMgbGlrZSB0aW1lIHpvb20gY2hhbmdlIHdlIG5lZWQgdG8gcmVjb21wZW5zYXRlIHNjcm9sbCBwb3NpdGlvblxyXG4gICAgICogc28gYXMgYSByZXN1bHQgZXZlcnl0aGluZyB3aWxsIGJlIGluIHNhbWUgcGxhY2VcclxuICAgICAqL1xyXG4gICAgZml4U2Nyb2xsUG9zKCkge1xyXG4gICAgICB0aGlzLnNjcm9sbFRvVGltZSh0aGlzLnN0YXRlLm9wdGlvbnMuc2Nyb2xsLmNoYXJ0LnRpbWVDZW50ZXIpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIE1vdXNlIHdoZWVsIGV2ZW50IGhhbmRsZXJcclxuICAgICAqL1xyXG4gICAgb25XaGVlbENoYXJ0KGV2KSB7XHJcbiAgICAgIGlmICghZXYuc2hpZnRLZXkgJiYgZXYuZGVsdGFYID09PSAwKSB7XHJcbiAgICAgICAgbGV0IHRvcCA9IHRoaXMuc3RhdGUub3B0aW9ucy5zY3JvbGwudG9wICsgZXYuZGVsdGFZO1xyXG4gICAgICAgIGNvbnN0IGNoYXJ0Q2xpZW50SGVpZ2h0ID0gdGhpcy5zdGF0ZS5vcHRpb25zLnJvd3NIZWlnaHQ7XHJcbiAgICAgICAgY29uc3Qgc2Nyb2xsSGVpZ2h0ID0gdGhpcy5zdGF0ZS5yZWZzLmNoYXJ0R3JhcGguc2Nyb2xsSGVpZ2h0IC0gY2hhcnRDbGllbnRIZWlnaHQ7XHJcbiAgICAgICAgaWYgKHRvcCA8IDApIHtcclxuICAgICAgICAgIHRvcCA9IDA7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0b3AgPiBzY3JvbGxIZWlnaHQpIHtcclxuICAgICAgICAgIHRvcCA9IHNjcm9sbEhlaWdodDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zY3JvbGxUbyhudWxsLCB0b3ApO1xyXG4gICAgICB9IGVsc2UgaWYgKGV2LnNoaWZ0S2V5ICYmIGV2LmRlbHRhWCA9PT0gMCkge1xyXG4gICAgICAgIGxldCBsZWZ0ID0gdGhpcy5zdGF0ZS5vcHRpb25zLnNjcm9sbC5sZWZ0ICsgZXYuZGVsdGFZO1xyXG4gICAgICAgIGNvbnN0IGNoYXJ0Q2xpZW50V2lkdGggPSB0aGlzLnN0YXRlLnJlZnMuY2hhcnRTY3JvbGxDb250YWluZXJIb3Jpem9udGFsLmNsaWVudFdpZHRoO1xyXG4gICAgICAgIGNvbnN0IHNjcm9sbFdpZHRoID0gdGhpcy5zdGF0ZS5yZWZzLmNoYXJ0U2Nyb2xsQ29udGFpbmVySG9yaXpvbnRhbC5zY3JvbGxXaWR0aCAtIGNoYXJ0Q2xpZW50V2lkdGg7XHJcbiAgICAgICAgaWYgKGxlZnQgPCAwKSB7XHJcbiAgICAgICAgICBsZWZ0ID0gMDtcclxuICAgICAgICB9IGVsc2UgaWYgKGxlZnQgPiBzY3JvbGxXaWR0aCkge1xyXG4gICAgICAgICAgbGVmdCA9IHNjcm9sbFdpZHRoO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNjcm9sbFRvKGxlZnQpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxldCBsZWZ0ID0gdGhpcy5zdGF0ZS5vcHRpb25zLnNjcm9sbC5sZWZ0ICsgZXYuZGVsdGFYO1xyXG4gICAgICAgIGNvbnN0IGNoYXJ0Q2xpZW50V2lkdGggPSB0aGlzLnN0YXRlLnJlZnMuY2hhcnRTY3JvbGxDb250YWluZXJIb3Jpem9udGFsLmNsaWVudFdpZHRoO1xyXG4gICAgICAgIGNvbnN0IHNjcm9sbFdpZHRoID0gdGhpcy5zdGF0ZS5yZWZzLmNoYXJ0U2Nyb2xsQ29udGFpbmVySG9yaXpvbnRhbC5zY3JvbGxXaWR0aCAtIGNoYXJ0Q2xpZW50V2lkdGg7XHJcbiAgICAgICAgaWYgKGxlZnQgPCAwKSB7XHJcbiAgICAgICAgICBsZWZ0ID0gMDtcclxuICAgICAgICB9IGVsc2UgaWYgKGxlZnQgPiBzY3JvbGxXaWR0aCkge1xyXG4gICAgICAgICAgbGVmdCA9IHNjcm9sbFdpZHRoO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNjcm9sbFRvKGxlZnQpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGltZSB6b29tIGNoYW5nZSBldmVudCBoYW5kbGVyXHJcbiAgICAgKi9cclxuICAgIG9uVGltZVpvb21DaGFuZ2UodGltZVpvb20pIHtcclxuICAgICAgdGhpcy5zdGF0ZS5vcHRpb25zLnRpbWVzLnRpbWVab29tID0gdGltZVpvb207XHJcbiAgICAgIHRoaXMucmVjYWxjdWxhdGVUaW1lcygpO1xyXG4gICAgICB0aGlzLmNhbGN1bGF0ZVN0ZXBzKCk7XHJcbiAgICAgIHRoaXMuZml4U2Nyb2xsUG9zKCk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUm93IGhlaWdodCBjaGFuZ2UgZXZlbnQgaGFuZGxlclxyXG4gICAgICovXHJcbiAgICBvblJvd0hlaWdodENoYW5nZShoZWlnaHQpIHtcclxuICAgICAgdGhpcy5zdGF0ZS5vcHRpb25zLnJvdy5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICAgIHRoaXMuY2FsY3VsYXRlVGFza0xpc3RDb2x1bW5zRGltZW5zaW9ucygpO1xyXG4gICAgICB0aGlzLnN5bmNTY3JvbGxUb3AoKTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTY29wZSBjaGFuZ2UgZXZlbnQgaGFuZGxlclxyXG4gICAgICovXHJcbiAgICBvblNjb3BlQ2hhbmdlKHZhbHVlKSB7XHJcbiAgICAgIHRoaXMuc3RhdGUub3B0aW9ucy5zY29wZS5iZWZvcmUgPSB2YWx1ZTtcclxuICAgICAgdGhpcy5zdGF0ZS5vcHRpb25zLnNjb3BlLmFmdGVyID0gdmFsdWU7XHJcbiAgICAgIHRoaXMuaW5pdFRpbWVzKCk7XHJcbiAgICAgIHRoaXMuY2FsY3VsYXRlU3RlcHMoKTtcclxuICAgICAgdGhpcy5jb21wdXRlQ2FsZW5kYXJXaWR0aHMoKTtcclxuICAgICAgdGhpcy5maXhTY3JvbGxQb3MoKTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUYXNrIGxpc3Qgd2lkdGggY2hhbmdlIGV2ZW50IGhhbmRsZXJcclxuICAgICAqL1xyXG4gICAgb25UYXNrTGlzdFdpZHRoQ2hhbmdlKHZhbHVlKSB7XHJcbiAgICAgIHRoaXMuc3RhdGUub3B0aW9ucy50YXNrTGlzdC5wZXJjZW50ID0gdmFsdWU7XHJcbiAgICAgIHRoaXMuY2FsY3VsYXRlVGFza0xpc3RDb2x1bW5zRGltZW5zaW9ucygpO1xyXG4gICAgICB0aGlzLmZpeFNjcm9sbFBvcygpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRhc2sgbGlzdCBjb2x1bW4gd2lkdGggY2hhbmdlIGV2ZW50IGhhbmRsZXJcclxuICAgICAqL1xyXG4gICAgb25UYXNrTGlzdENvbHVtbldpZHRoQ2hhbmdlKCkge1xyXG4gICAgICB0aGlzLmNhbGN1bGF0ZVRhc2tMaXN0Q29sdW1uc0RpbWVuc2lvbnMoKTtcclxuICAgICAgdGhpcy5maXhTY3JvbGxQb3MoKTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBMaXN0ZW4gdG8gc3BlY2lmaWVkIGV2ZW50IG5hbWVzXHJcbiAgICAgKi9cclxuICAgIGluaXRpYWxpemVFdmVudHMoKSB7XHJcbiAgICAgIHRoaXMuJG9uKCdjaGFydC1zY3JvbGwtaG9yaXpvbnRhbCcsIHRoaXMub25TY3JvbGxDaGFydCk7XHJcbiAgICAgIHRoaXMuJG9uKCdjaGFydC1zY3JvbGwtdmVydGljYWwnLCB0aGlzLm9uU2Nyb2xsQ2hhcnQpO1xyXG4gICAgICB0aGlzLiRvbignY2hhcnQtd2hlZWwnLCB0aGlzLm9uV2hlZWxDaGFydCk7XHJcbiAgICAgIHRoaXMuJG9uKCd0aW1lcy10aW1lWm9vbS1jaGFuZ2UnLCB0aGlzLm9uVGltZVpvb21DaGFuZ2UpO1xyXG4gICAgICB0aGlzLiRvbigncm93LWhlaWdodC1jaGFuZ2UnLCB0aGlzLm9uUm93SGVpZ2h0Q2hhbmdlKTtcclxuICAgICAgdGhpcy4kb24oJ3Njb3BlLWNoYW5nZScsIHRoaXMub25TY29wZUNoYW5nZSk7XHJcbiAgICAgIHRoaXMuJG9uKCd0YXNrTGlzdC13aWR0aC1jaGFuZ2UnLCB0aGlzLm9uVGFza0xpc3RXaWR0aENoYW5nZSk7XHJcbiAgICAgIHRoaXMuJG9uKCd0YXNrTGlzdC1jb2x1bW4td2lkdGgtY2hhbmdlJywgdGhpcy5vblRhc2tMaXN0Q29sdW1uV2lkdGhDaGFuZ2UpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFdoZW4gc29tZSBhY3Rpb24gd2FzIHBlcmZvcm1lZCAoc2NhbGUgY2hhbmdlIGZvciBleGFtcGxlKSAtIHJlY2FsY3VsYXRlIHRpbWUgdmFyaWFibGVzXHJcbiAgICAgKi9cclxuICAgIHJlY2FsY3VsYXRlVGltZXMoKSB7XHJcbiAgICAgIGxldCBtYXggPSB0aGlzLnN0YXRlLm9wdGlvbnMudGltZXMudGltZVNjYWxlICogNjA7XHJcbiAgICAgIGxldCBtaW4gPSB0aGlzLnN0YXRlLm9wdGlvbnMudGltZXMudGltZVNjYWxlO1xyXG4gICAgICBsZXQgc3RlcHMgPSBtYXggLyBtaW47XHJcbiAgICAgIGxldCBwZXJjZW50ID0gdGhpcy5zdGF0ZS5vcHRpb25zLnRpbWVzLnRpbWVab29tIC8gMTAwO1xyXG4gICAgICB0aGlzLnN0YXRlLm9wdGlvbnMudGltZXMudGltZVBlclBpeGVsID1cclxuICAgICAgICB0aGlzLnN0YXRlLm9wdGlvbnMudGltZXMudGltZVNjYWxlICogc3RlcHMgKiBwZXJjZW50ICsgTWF0aC5wb3coMiwgdGhpcy5zdGF0ZS5vcHRpb25zLnRpbWVzLnRpbWVab29tKTtcclxuICAgICAgdGhpcy5zdGF0ZS5vcHRpb25zLnRpbWVzLnRvdGFsVmlld0R1cmF0aW9uTXMgPSBkYXlqcyh0aGlzLnN0YXRlLm9wdGlvbnMudGltZXMubGFzdFRpbWUpLmRpZmYoXHJcbiAgICAgICAgdGhpcy5zdGF0ZS5vcHRpb25zLnRpbWVzLmZpcnN0VGltZSxcclxuICAgICAgICAnbWlsbGlzZWNvbmRzJ1xyXG4gICAgICApO1xyXG4gICAgICB0aGlzLnN0YXRlLm9wdGlvbnMudGltZXMudG90YWxWaWV3RHVyYXRpb25QeCA9XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5vcHRpb25zLnRpbWVzLnRvdGFsVmlld0R1cmF0aW9uTXMgLyB0aGlzLnN0YXRlLm9wdGlvbnMudGltZXMudGltZVBlclBpeGVsO1xyXG4gICAgICB0aGlzLnN0YXRlLm9wdGlvbnMud2lkdGggPVxyXG4gICAgICAgIHRoaXMuc3RhdGUub3B0aW9ucy50aW1lcy50b3RhbFZpZXdEdXJhdGlvblB4ICsgdGhpcy5zdHlsZVsnZ3JpZC1saW5lLXZlcnRpY2FsJ11bJ3N0cm9rZS13aWR0aCddO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEluaXRpYWxpemUgdGltZSB2YXJpYWJsZXNcclxuICAgICAqL1xyXG4gICAgaW5pdFRpbWVzKCkge1xyXG4gICAgICB0aGlzLnN0YXRlLm9wdGlvbnMudGltZXMuZmlyc3RUaW1lID0gZGF5anModGhpcy5zdGF0ZS5vcHRpb25zLnRpbWVzLmZpcnN0VGFza1RpbWUpXHJcbiAgICAgICAgLmxvY2FsZSh0aGlzLnN0YXRlLm9wdGlvbnMubG9jYWxlLm5hbWUpXHJcbiAgICAgICAgLnN0YXJ0T2YoJ2RheScpXHJcbiAgICAgICAgLnN1YnRyYWN0KHRoaXMuc3RhdGUub3B0aW9ucy5zY29wZS5iZWZvcmUsICdkYXlzJylcclxuICAgICAgICAuc3RhcnRPZignZGF5JylcclxuICAgICAgICAudmFsdWVPZigpO1xyXG4gICAgICB0aGlzLnN0YXRlLm9wdGlvbnMudGltZXMubGFzdFRpbWUgPSBkYXlqcyh0aGlzLnN0YXRlLm9wdGlvbnMudGltZXMubGFzdFRhc2tUaW1lKVxyXG4gICAgICAgIC5sb2NhbGUodGhpcy5zdGF0ZS5vcHRpb25zLmxvY2FsZS5uYW1lKVxyXG4gICAgICAgIC5lbmRPZignZGF5JylcclxuICAgICAgICAuYWRkKHRoaXMuc3RhdGUub3B0aW9ucy5zY29wZS5hZnRlciwgJ2RheXMnKVxyXG4gICAgICAgIC5lbmRPZignZGF5JylcclxuICAgICAgICAudmFsdWVPZigpO1xyXG4gICAgICB0aGlzLnJlY2FsY3VsYXRlVGltZXMoKTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxjdWxhdGUgc3RlcHNcclxuICAgICAqIFN0ZXBzIGFyZSBkYXlzIGJ5IGRlZmF1bHRcclxuICAgICAqIEVhY2ggc3RlcCBjb250YWluIGluZm9ybWF0aW9uIGFib3V0IHRpbWUgb2Zmc2V0IGFuZCBwaXhlbCBvZmZzZXQgb2YgdGhpcyB0aW1lIGluc2lkZSBnYW50dCBjaGFydFxyXG4gICAgICovXHJcbiAgICBjYWxjdWxhdGVTdGVwcygpIHtcclxuICAgICAgY29uc3Qgc3RlcHMgPSBbXTtcclxuICAgICAgY29uc3QgbGFzdE1zID0gZGF5anModGhpcy5zdGF0ZS5vcHRpb25zLnRpbWVzLmxhc3RUaW1lKS52YWx1ZU9mKCk7XHJcbiAgICAgIGNvbnN0IGN1cnJlbnREYXRlID0gZGF5anModGhpcy5zdGF0ZS5vcHRpb25zLnRpbWVzLmZpcnN0VGltZSk7XHJcbiAgICAgIHN0ZXBzLnB1c2goe1xyXG4gICAgICAgIHRpbWU6IGN1cnJlbnREYXRlLnZhbHVlT2YoKSxcclxuICAgICAgICBvZmZzZXQ6IHtcclxuICAgICAgICAgIG1zOiAwLFxyXG4gICAgICAgICAgcHg6IDBcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICBmb3IgKFxyXG4gICAgICAgIGxldCBjdXJyZW50RGF0ZSA9IGRheWpzKHRoaXMuc3RhdGUub3B0aW9ucy50aW1lcy5maXJzdFRpbWUpXHJcbiAgICAgICAgICAuYWRkKDEsIHRoaXMuc3RhdGUub3B0aW9ucy50aW1lcy5zdGVwRHVyYXRpb24pXHJcbiAgICAgICAgICAuc3RhcnRPZignZGF5Jyk7XHJcbiAgICAgICAgY3VycmVudERhdGUudmFsdWVPZigpIDw9IGxhc3RNcztcclxuICAgICAgICBjdXJyZW50RGF0ZSA9IGN1cnJlbnREYXRlLmFkZCgxLCB0aGlzLnN0YXRlLm9wdGlvbnMudGltZXMuc3RlcER1cmF0aW9uKS5zdGFydE9mKCdkYXknKVxyXG4gICAgICApIHtcclxuICAgICAgICBjb25zdCBvZmZzZXRNcyA9IGN1cnJlbnREYXRlLmRpZmYodGhpcy5zdGF0ZS5vcHRpb25zLnRpbWVzLmZpcnN0VGltZSwgJ21pbGxpc2Vjb25kcycpO1xyXG4gICAgICAgIGNvbnN0IG9mZnNldFB4ID0gb2Zmc2V0TXMgLyB0aGlzLnN0YXRlLm9wdGlvbnMudGltZXMudGltZVBlclBpeGVsO1xyXG4gICAgICAgIGNvbnN0IHN0ZXAgPSB7XHJcbiAgICAgICAgICB0aW1lOiBjdXJyZW50RGF0ZS52YWx1ZU9mKCksXHJcbiAgICAgICAgICBvZmZzZXQ6IHtcclxuICAgICAgICAgICAgbXM6IG9mZnNldE1zLFxyXG4gICAgICAgICAgICBweDogb2Zmc2V0UHhcclxuICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IHByZXZpb3VzU3RlcCA9IHN0ZXBzW3N0ZXBzLmxlbmd0aCAtIDFdO1xyXG4gICAgICAgIHByZXZpb3VzU3RlcC53aWR0aCA9IHtcclxuICAgICAgICAgIG1zOiBvZmZzZXRNcyAtIHByZXZpb3VzU3RlcC5vZmZzZXQubXMsXHJcbiAgICAgICAgICBweDogb2Zmc2V0UHggLSBwcmV2aW91c1N0ZXAub2Zmc2V0LnB4XHJcbiAgICAgICAgfTtcclxuICAgICAgICBzdGVwcy5wdXNoKHN0ZXApO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IGxhc3RTdGVwID0gc3RlcHNbc3RlcHMubGVuZ3RoIC0gMV07XHJcbiAgICAgIGxhc3RTdGVwLndpZHRoID0ge1xyXG4gICAgICAgIG1zOiB0aGlzLnN0YXRlLm9wdGlvbnMudGltZXMudG90YWxWaWV3RHVyYXRpb25NcyAtIGxhc3RTdGVwLm9mZnNldC5tcyxcclxuICAgICAgICBweDogdGhpcy5zdGF0ZS5vcHRpb25zLnRpbWVzLnRvdGFsVmlld0R1cmF0aW9uUHggLSBsYXN0U3RlcC5vZmZzZXQucHhcclxuICAgICAgfTtcclxuICAgICAgdGhpcy5zdGF0ZS5vcHRpb25zLnRpbWVzLnN0ZXBzID0gc3RlcHM7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2FsY3VsYXRlIGNhbGVuZGFyIHdpZHRocyAtIHdoZW4gc2NhbGUgd2FzIGNoYW5nZWQgZm9yIGV4YW1wbGVcclxuICAgICAqL1xyXG4gICAgY29tcHV0ZUNhbGVuZGFyV2lkdGhzKCkge1xyXG4gICAgICB0aGlzLmNvbXB1dGVEYXlXaWR0aHMoKTtcclxuICAgICAgdGhpcy5jb21wdXRlSG91cldpZHRocygpO1xyXG4gICAgICB0aGlzLmNvbXB1dGVNb250aFdpZHRocygpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbXB1dGUgd2lkdGggb2YgY2FsZW5kYXIgaG91cnMgY29sdW1uIHdpZHRocyBiYXNpbmcgb24gdGV4dCB3aWR0aHNcclxuICAgICAqL1xyXG4gICAgY29tcHV0ZUhvdXJXaWR0aHMoKSB7XHJcbiAgICAgIGNvbnN0IHN0eWxlID0geyAuLi50aGlzLnN0eWxlWydjYWxlbmRhci1yb3ctdGV4dCddLCAuLi50aGlzLnN0eWxlWydjYWxlbmRhci1yb3ctdGV4dC0taG91ciddIH07XHJcbiAgICAgIHRoaXMuc3RhdGUuY3R4LmZvbnQgPSBzdHlsZVsnZm9udC1zaXplJ10gKyAnICcgKyBzdHlsZVsnZm9udC1mYW1pbHknXTtcclxuICAgICAgY29uc3QgbG9jYWxlTmFtZSA9IHRoaXMuc3RhdGUub3B0aW9ucy5sb2NhbGUubmFtZTtcclxuICAgICAgbGV0IGN1cnJlbnREYXRlID0gZGF5anMoJzIwMTgtMDEtMDFUMDA6MDA6MDAnKS5sb2NhbGUobG9jYWxlTmFtZSk7IC8vIGFueSBkYXRlIHdpbGwgYmUgZ29vZCBmb3IgaG91cnNcclxuICAgICAgbGV0IG1heFdpZHRocyA9IHRoaXMuc3RhdGUub3B0aW9ucy5jYWxlbmRhci5ob3VyLm1heFdpZHRocztcclxuICAgICAgaWYgKG1heFdpZHRocy5sZW5ndGgpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgZm9yIChsZXQgZm9ybWF0TmFtZSBpbiB0aGlzLnN0YXRlLm9wdGlvbnMuY2FsZW5kYXIuaG91ci5mb3JtYXQpIHtcclxuICAgICAgICBtYXhXaWR0aHNbZm9ybWF0TmFtZV0gPSAwO1xyXG4gICAgICB9XHJcbiAgICAgIGZvciAobGV0IGhvdXIgPSAwOyBob3VyIDwgMjQ7IGhvdXIrKykge1xyXG4gICAgICAgIGxldCB3aWR0aHMgPSB7IGhvdXIgfTtcclxuICAgICAgICBmb3IgKGxldCBmb3JtYXROYW1lIGluIHRoaXMuc3RhdGUub3B0aW9ucy5jYWxlbmRhci5ob3VyLmZvcm1hdCkge1xyXG4gICAgICAgICAgY29uc3QgaG91ckZvcm1hdHRlZCA9IHRoaXMuc3RhdGUub3B0aW9ucy5jYWxlbmRhci5ob3VyLmZvcm1hdFtmb3JtYXROYW1lXShjdXJyZW50RGF0ZSk7XHJcbiAgICAgICAgICB0aGlzLnN0YXRlLm9wdGlvbnMuY2FsZW5kYXIuaG91ci5mb3JtYXR0ZWRbZm9ybWF0TmFtZV0ucHVzaChob3VyRm9ybWF0dGVkKTtcclxuICAgICAgICAgIHdpZHRoc1tmb3JtYXROYW1lXSA9IHRoaXMuc3RhdGUuY3R4Lm1lYXN1cmVUZXh0KGhvdXJGb3JtYXR0ZWQpLndpZHRoO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnN0YXRlLm9wdGlvbnMuY2FsZW5kYXIuaG91ci53aWR0aHMucHVzaCh3aWR0aHMpO1xyXG4gICAgICAgIGZvciAobGV0IGZvcm1hdE5hbWUgaW4gdGhpcy5zdGF0ZS5vcHRpb25zLmNhbGVuZGFyLmhvdXIuZm9ybWF0KSB7XHJcbiAgICAgICAgICBpZiAod2lkdGhzW2Zvcm1hdE5hbWVdID4gbWF4V2lkdGhzW2Zvcm1hdE5hbWVdKSB7XHJcbiAgICAgICAgICAgIG1heFdpZHRoc1tmb3JtYXROYW1lXSA9IHdpZHRoc1tmb3JtYXROYW1lXTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY3VycmVudERhdGUgPSBjdXJyZW50RGF0ZS5hZGQoMSwgJ2hvdXInKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbXB1dGUgY2FsZW5kYXIgZGF5cyBjb2x1bW4gd2lkdGhzIGJhc2luZyBvbiB0ZXh0IHdpZHRoc1xyXG4gICAgICovXHJcbiAgICBjb21wdXRlRGF5V2lkdGhzKCkge1xyXG4gICAgICBjb25zdCBzdHlsZSA9IHsgLi4udGhpcy5zdHlsZVsnY2FsZW5kYXItcm93LXRleHQnXSwgLi4udGhpcy5zdHlsZVsnY2FsZW5kYXItcm93LXRleHQtLWRheSddIH07XHJcbiAgICAgIHRoaXMuc3RhdGUuY3R4LmZvbnQgPSBzdHlsZVsnZm9udC1zaXplJ10gKyAnICcgKyBzdHlsZVsnZm9udC1mYW1pbHknXTtcclxuICAgICAgY29uc3QgbG9jYWxlTmFtZSA9IHRoaXMuc3RhdGUub3B0aW9ucy5sb2NhbGUubmFtZTtcclxuICAgICAgbGV0IGN1cnJlbnREYXRlID0gZGF5anModGhpcy5zdGF0ZS5vcHRpb25zLnRpbWVzLnN0ZXBzWzBdLnRpbWUpLmxvY2FsZShsb2NhbGVOYW1lKTtcclxuICAgICAgbGV0IG1heFdpZHRocyA9IHRoaXMuc3RhdGUub3B0aW9ucy5jYWxlbmRhci5kYXkubWF4V2lkdGhzO1xyXG4gICAgICB0aGlzLnN0YXRlLm9wdGlvbnMuY2FsZW5kYXIuZGF5LndpZHRocyA9IFtdO1xyXG4gICAgICBPYmplY3Qua2V5cyh0aGlzLnN0YXRlLm9wdGlvbnMuY2FsZW5kYXIuZGF5LmZvcm1hdCkuZm9yRWFjaChmb3JtYXROYW1lID0+IHtcclxuICAgICAgICBtYXhXaWR0aHNbZm9ybWF0TmFtZV0gPSAwO1xyXG4gICAgICB9KTtcclxuICAgICAgZm9yIChsZXQgZGF5ID0gMCwgZGF5c0xlbiA9IHRoaXMuc3RhdGUub3B0aW9ucy50aW1lcy5zdGVwcy5sZW5ndGg7IGRheSA8IGRheXNMZW47IGRheSsrKSB7XHJcbiAgICAgICAgY29uc3Qgd2lkdGhzID0ge1xyXG4gICAgICAgICAgZGF5XHJcbiAgICAgICAgfTtcclxuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLnN0YXRlLm9wdGlvbnMuY2FsZW5kYXIuZGF5LmZvcm1hdCkuZm9yRWFjaChmb3JtYXROYW1lID0+IHtcclxuICAgICAgICAgIHdpZHRoc1tmb3JtYXROYW1lXSA9IHRoaXMuc3RhdGUuY3R4Lm1lYXN1cmVUZXh0KFxyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLm9wdGlvbnMuY2FsZW5kYXIuZGF5LmZvcm1hdFtmb3JtYXROYW1lXShjdXJyZW50RGF0ZSlcclxuICAgICAgICAgICkud2lkdGg7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5vcHRpb25zLmNhbGVuZGFyLmRheS53aWR0aHMucHVzaCh3aWR0aHMpO1xyXG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMuc3RhdGUub3B0aW9ucy5jYWxlbmRhci5kYXkuZm9ybWF0KS5mb3JFYWNoKGZvcm1hdE5hbWUgPT4ge1xyXG4gICAgICAgICAgaWYgKHdpZHRoc1tmb3JtYXROYW1lXSA+IG1heFdpZHRoc1tmb3JtYXROYW1lXSkge1xyXG4gICAgICAgICAgICBtYXhXaWR0aHNbZm9ybWF0TmFtZV0gPSB3aWR0aHNbZm9ybWF0TmFtZV07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY3VycmVudERhdGUgPSBjdXJyZW50RGF0ZS5hZGQoMSwgJ2RheScpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTW9udGhzIGNvdW50XHJcbiAgICAgKlxyXG4gICAgICogQGRlc2NyaXB0aW9uIFJldHVybnMgbnVtYmVyIG9mIGRpZmZlcmVudCBtb250aHMgaW4gc3BlY2lmaWVkIHRpbWUgcmFuZ2VcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gZnJvbVRpbWUgLSBkYXRlIGluIG1zXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdG9UaW1lIC0gZGF0ZSBpbiBtc1xyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9IGRpZmZlcmVudCBtb250aHMgY291bnRcclxuICAgICAqL1xyXG4gICAgbW9udGhzQ291bnQoZnJvbVRpbWUsIHRvVGltZSkge1xyXG4gICAgICBpZiAoZnJvbVRpbWUgPiB0b1RpbWUpIHtcclxuICAgICAgICByZXR1cm4gMDtcclxuICAgICAgfVxyXG4gICAgICBsZXQgY3VycmVudE1vbnRoID0gZGF5anMoZnJvbVRpbWUpO1xyXG4gICAgICBsZXQgcHJldmlvdXNNb250aCA9IGN1cnJlbnRNb250aC5jbG9uZSgpO1xyXG4gICAgICBsZXQgbW9udGhzQ291bnQgPSAxO1xyXG4gICAgICB3aGlsZSAoY3VycmVudE1vbnRoLnZhbHVlT2YoKSA8PSB0b1RpbWUpIHtcclxuICAgICAgICBjdXJyZW50TW9udGggPSBjdXJyZW50TW9udGguYWRkKDEsICdkYXknKTtcclxuICAgICAgICBpZiAocHJldmlvdXNNb250aC5tb250aCgpICE9PSBjdXJyZW50TW9udGgubW9udGgoKSkge1xyXG4gICAgICAgICAgbW9udGhzQ291bnQrKztcclxuICAgICAgICB9XHJcbiAgICAgICAgcHJldmlvdXNNb250aCA9IGN1cnJlbnRNb250aC5jbG9uZSgpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBtb250aHNDb3VudDtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb21wdXRlIG1vbnRoIGNhbGVuZGFyIGNvbHVtbnMgd2lkdGhzIGJhc2luZyBvbiB0ZXh0IHdpZHRoc1xyXG4gICAgICovXHJcbiAgICBjb21wdXRlTW9udGhXaWR0aHMoKSB7XHJcbiAgICAgIGNvbnN0IHN0eWxlID0geyAuLi50aGlzLnN0eWxlWydjYWxlbmRhci1yb3ctdGV4dCddLCAuLi50aGlzLnN0eWxlWydjYWxlbmRhci1yb3ctdGV4dC0tbW9udGgnXSB9O1xyXG4gICAgICB0aGlzLnN0YXRlLmN0eC5mb250ID0gc3R5bGVbJ2ZvbnQtc2l6ZSddICsgJyAnICsgc3R5bGVbJ2ZvbnQtZmFtaWx5J107XHJcbiAgICAgIGxldCBtYXhXaWR0aHMgPSB0aGlzLnN0YXRlLm9wdGlvbnMuY2FsZW5kYXIubW9udGgubWF4V2lkdGhzO1xyXG4gICAgICB0aGlzLnN0YXRlLm9wdGlvbnMuY2FsZW5kYXIubW9udGgud2lkdGhzID0gW107XHJcbiAgICAgIE9iamVjdC5rZXlzKHRoaXMuc3RhdGUub3B0aW9ucy5jYWxlbmRhci5tb250aC5mb3JtYXQpLmZvckVhY2goZm9ybWF0TmFtZSA9PiB7XHJcbiAgICAgICAgbWF4V2lkdGhzW2Zvcm1hdE5hbWVdID0gMDtcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IGxvY2FsZU5hbWUgPSB0aGlzLnN0YXRlLm9wdGlvbnMubG9jYWxlLm5hbWU7XHJcbiAgICAgIGxldCBjdXJyZW50RGF0ZSA9IGRheWpzKHRoaXMuc3RhdGUub3B0aW9ucy50aW1lcy5maXJzdFRpbWUpLmxvY2FsZShsb2NhbGVOYW1lKTtcclxuICAgICAgY29uc3QgbW9udGhzQ291bnQgPSB0aGlzLm1vbnRoc0NvdW50KHRoaXMuc3RhdGUub3B0aW9ucy50aW1lcy5maXJzdFRpbWUsIHRoaXMuc3RhdGUub3B0aW9ucy50aW1lcy5sYXN0VGltZSk7XHJcbiAgICAgIGZvciAobGV0IG1vbnRoID0gMDsgbW9udGggPCBtb250aHNDb3VudDsgbW9udGgrKykge1xyXG4gICAgICAgIGNvbnN0IHdpZHRocyA9IHtcclxuICAgICAgICAgIG1vbnRoXHJcbiAgICAgICAgfTtcclxuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLnN0YXRlLm9wdGlvbnMuY2FsZW5kYXIubW9udGguZm9ybWF0KS5mb3JFYWNoKGZvcm1hdE5hbWUgPT4ge1xyXG4gICAgICAgICAgd2lkdGhzW2Zvcm1hdE5hbWVdID0gdGhpcy5zdGF0ZS5jdHgubWVhc3VyZVRleHQoXHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUub3B0aW9ucy5jYWxlbmRhci5tb250aC5mb3JtYXRbZm9ybWF0TmFtZV0oY3VycmVudERhdGUpXHJcbiAgICAgICAgICApLndpZHRoO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuc3RhdGUub3B0aW9ucy5jYWxlbmRhci5tb250aC53aWR0aHMucHVzaCh3aWR0aHMpO1xyXG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMuc3RhdGUub3B0aW9ucy5jYWxlbmRhci5tb250aC5mb3JtYXQpLmZvckVhY2goZm9ybWF0TmFtZSA9PiB7XHJcbiAgICAgICAgICBpZiAod2lkdGhzW2Zvcm1hdE5hbWVdID4gbWF4V2lkdGhzW2Zvcm1hdE5hbWVdKSB7XHJcbiAgICAgICAgICAgIG1heFdpZHRoc1tmb3JtYXROYW1lXSA9IHdpZHRoc1tmb3JtYXROYW1lXTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBjdXJyZW50RGF0ZSA9IGN1cnJlbnREYXRlLmFkZCgxLCAnbW9udGgnKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFByZXBhcmUgdGltZSBhbmQgZGF0ZSB2YXJpYWJsZXMgZm9yIGdhbnR0XHJcbiAgICAgKi9cclxuICAgIHByZXBhcmVEYXRlcygpIHtcclxuICAgICAgbGV0IGZpcnN0VGFza1RpbWUgPSBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUjtcclxuICAgICAgbGV0IGxhc3RUYXNrVGltZSA9IDA7XHJcbiAgICAgIGZvciAobGV0IGluZGV4ID0gMCwgbGVuID0gdGhpcy5zdGF0ZS50YXNrcy5sZW5ndGg7IGluZGV4IDwgbGVuOyBpbmRleCsrKSB7XHJcbiAgICAgICAgbGV0IHRhc2sgPSB0aGlzLnN0YXRlLnRhc2tzW2luZGV4XTtcclxuICAgICAgICBpZiAodGFzay5zdGFydFRpbWUgPCBmaXJzdFRhc2tUaW1lKSB7XHJcbiAgICAgICAgICBmaXJzdFRhc2tUaW1lID0gdGFzay5zdGFydFRpbWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0YXNrLnN0YXJ0VGltZSArIHRhc2suZHVyYXRpb24gPiBsYXN0VGFza1RpbWUpIHtcclxuICAgICAgICAgIGxhc3RUYXNrVGltZSA9IHRhc2suc3RhcnRUaW1lICsgdGFzay5kdXJhdGlvbjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zdGF0ZS5vcHRpb25zLnRpbWVzLmZpcnN0VGFza1RpbWUgPSBmaXJzdFRhc2tUaW1lO1xyXG4gICAgICB0aGlzLnN0YXRlLm9wdGlvbnMudGltZXMubGFzdFRhc2tUaW1lID0gbGFzdFRhc2tUaW1lO1xyXG4gICAgICB0aGlzLnN0YXRlLm9wdGlvbnMudGltZXMuZmlyc3RUaW1lID0gZGF5anMoZmlyc3RUYXNrVGltZSlcclxuICAgICAgICAubG9jYWxlKHRoaXMuc3RhdGUub3B0aW9ucy5sb2NhbGUubmFtZSlcclxuICAgICAgICAuc3RhcnRPZignZGF5JylcclxuICAgICAgICAuc3VidHJhY3QodGhpcy5zdGF0ZS5vcHRpb25zLnNjb3BlLmJlZm9yZSwgJ2RheXMnKVxyXG4gICAgICAgIC5zdGFydE9mKCdkYXknKVxyXG4gICAgICAgIC52YWx1ZU9mKCk7XHJcbiAgICAgIHRoaXMuc3RhdGUub3B0aW9ucy50aW1lcy5sYXN0VGltZSA9IGRheWpzKGxhc3RUYXNrVGltZSlcclxuICAgICAgICAubG9jYWxlKHRoaXMuc3RhdGUub3B0aW9ucy5sb2NhbGUubmFtZSlcclxuICAgICAgICAuZW5kT2YoJ2RheScpXHJcbiAgICAgICAgLmFkZCh0aGlzLnN0YXRlLm9wdGlvbnMuc2NvcGUuYWZ0ZXIsICdkYXlzJylcclxuICAgICAgICAuZW5kT2YoJ2RheScpXHJcbiAgICAgICAgLnZhbHVlT2YoKTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXR1cCBhbmQgY2FsY3VsYXRlIGV2ZXJ5dGhpbmdcclxuICAgICAqL1xyXG4gICAgc2V0dXAoaXRzVXBkYXRlID0gJycpIHtcclxuICAgICAgdGhpcy5pbml0aWFsaXplKGl0c1VwZGF0ZSk7XHJcbiAgICAgIHRoaXMucHJlcGFyZURhdGVzKCk7XHJcbiAgICAgIHRoaXMuaW5pdFRpbWVzKCk7XHJcbiAgICAgIHRoaXMuY2FsY3VsYXRlU3RlcHMoKTtcclxuICAgICAgdGhpcy5jb21wdXRlQ2FsZW5kYXJXaWR0aHMoKTtcclxuICAgICAgdGhpcy5zdGF0ZS5vcHRpb25zLnRhc2tMaXN0LndpZHRoID0gdGhpcy5zdGF0ZS5vcHRpb25zLnRhc2tMaXN0LmNvbHVtbnMucmVkdWNlKFxyXG4gICAgICAgIChwcmV2LCBjdXJyZW50KSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4geyB3aWR0aDogcHJldi53aWR0aCArIGN1cnJlbnQud2lkdGggfTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHsgd2lkdGg6IDAgfVxyXG4gICAgICApLndpZHRoO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEdsb2JhbCByZXNpemUgZXZlbnQgKGZyb20gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIpXHJcbiAgICAgKi9cclxuICAgIGdsb2JhbE9uUmVzaXplKCkge1xyXG4gICAgICBpZiAodHlwZW9mIHRoaXMuJGVsID09PSAndW5kZWZpbmVkJyB8fCAhdGhpcy4kZWwpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zdGF0ZS5vcHRpb25zLmNsaWVudFdpZHRoID0gdGhpcy4kZWwuY2xpZW50V2lkdGg7XHJcbiAgICAgIGlmIChcclxuICAgICAgICB0aGlzLnN0YXRlLm9wdGlvbnMudGFza0xpc3Qud2lkdGhGcm9tUGVyY2VudGFnZSA+XHJcbiAgICAgICAgKHRoaXMuc3RhdGUub3B0aW9ucy5jbGllbnRXaWR0aCAvIDEwMCkgKiB0aGlzLnN0YXRlLm9wdGlvbnMudGFza0xpc3Qud2lkdGhUaHJlc2hvbGRcclxuICAgICAgKSB7XHJcbiAgICAgICAgY29uc3QgZGlmZiA9XHJcbiAgICAgICAgICB0aGlzLnN0YXRlLm9wdGlvbnMudGFza0xpc3Qud2lkdGhGcm9tUGVyY2VudGFnZSAtXHJcbiAgICAgICAgICAodGhpcy5zdGF0ZS5vcHRpb25zLmNsaWVudFdpZHRoIC8gMTAwKSAqIHRoaXMuc3RhdGUub3B0aW9ucy50YXNrTGlzdC53aWR0aFRocmVzaG9sZDtcclxuICAgICAgICBsZXQgZGlmZlBlcmNlbnQgPSAxMDAgLSAoZGlmZiAvIHRoaXMuc3RhdGUub3B0aW9ucy50YXNrTGlzdC53aWR0aEZyb21QZXJjZW50YWdlKSAqIDEwMDtcclxuICAgICAgICBpZiAoZGlmZlBlcmNlbnQgPCAwKSB7XHJcbiAgICAgICAgICBkaWZmUGVyY2VudCA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc3RhdGUub3B0aW9ucy50YXNrTGlzdC5jb2x1bW5zLmZvckVhY2goY29sdW1uID0+IHtcclxuICAgICAgICAgIGNvbHVtbi50aHJlc2hvbGRQZXJjZW50ID0gZGlmZlBlcmNlbnQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5vcHRpb25zLnRhc2tMaXN0LmNvbHVtbnMuZm9yRWFjaChjb2x1bW4gPT4ge1xyXG4gICAgICAgICAgY29sdW1uLnRocmVzaG9sZFBlcmNlbnQgPSAxMDA7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5jYWxjdWxhdGVUYXNrTGlzdENvbHVtbnNEaW1lbnNpb25zKCk7XHJcbiAgICAgIHRoaXMuJGVtaXQoJ2NhbGVuZGFyLXJlY2FsY3VsYXRlJyk7XHJcbiAgICAgIHRoaXMuc3luY1Njcm9sbFRvcCgpO1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIGNvbXB1dGVkOiB7XHJcbiAgICAvKipcclxuICAgICAqIEdldCB2aXNpYmxlIHRhc2tzXHJcbiAgICAgKiBWZXJ5IGltcG9ydGFudCBtZXRob2Qgd2hpY2ggd2lsbCBicmluZyB1cyBvbmx5IHRob3NlIHRhc2tzIHRoYXQgYXJlIHZpc2libGUgaW5zaWRlIGdhbnR0IGNoYXJ0XHJcbiAgICAgKiBGb3IgZXhhbXBsZSB3aGVuIHRhc2sgaXMgY29sbGFwc2VkIC0gY2hpbGRyZW4gb2YgdGhpcyB0YXNrIGFyZSBub3QgdmlzaWJsZSAtIHdlIHNob3VsZCBub3QgcmVuZGVyIHRoZW1cclxuICAgICAqL1xyXG4gICAgdmlzaWJsZVRhc2tzKCkge1xyXG4gICAgICBjb25zdCB2aXNpYmxlVGFza3MgPSB0aGlzLnN0YXRlLnRhc2tzLmZpbHRlcih0YXNrID0+IHRoaXMuaXNUYXNrVmlzaWJsZSh0YXNrKSk7XHJcbiAgICAgIGNvbnN0IG1heFJvd3MgPSB2aXNpYmxlVGFza3Muc2xpY2UoMCwgdGhpcy5zdGF0ZS5vcHRpb25zLm1heFJvd3MpO1xyXG4gICAgICB0aGlzLnN0YXRlLm9wdGlvbnMucm93c0hlaWdodCA9IHRoaXMuZ2V0VGFza3NIZWlnaHQobWF4Um93cyk7XHJcbiAgICAgIGxldCBoZWlnaHRDb21wZW5zYXRpb24gPSAwO1xyXG4gICAgICBpZiAodGhpcy5zdGF0ZS5vcHRpb25zLm1heEhlaWdodCAmJiB0aGlzLnN0YXRlLm9wdGlvbnMucm93c0hlaWdodCA+IHRoaXMuc3RhdGUub3B0aW9ucy5tYXhIZWlnaHQpIHtcclxuICAgICAgICBoZWlnaHRDb21wZW5zYXRpb24gPSB0aGlzLnN0YXRlLm9wdGlvbnMucm93c0hlaWdodCAtIHRoaXMuc3RhdGUub3B0aW9ucy5tYXhIZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5vcHRpb25zLnJvd3NIZWlnaHQgPSB0aGlzLnN0YXRlLm9wdGlvbnMubWF4SGVpZ2h0O1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuc3RhdGUub3B0aW9ucy5oZWlnaHQgPSB0aGlzLmdldEhlaWdodChtYXhSb3dzKSAtIGhlaWdodENvbXBlbnNhdGlvbjtcclxuICAgICAgdGhpcy5zdGF0ZS5vcHRpb25zLmFsbFZpc2libGVUYXNrc0hlaWdodCA9IHRoaXMuZ2V0VGFza3NIZWlnaHQodmlzaWJsZVRhc2tzKTtcclxuICAgICAgdGhpcy5zdGF0ZS5vcHRpb25zLm91dGVySGVpZ2h0ID0gdGhpcy5nZXRIZWlnaHQobWF4Um93cywgdHJ1ZSkgLSBoZWlnaHRDb21wZW5zYXRpb247XHJcbiAgICAgIGxldCBsZW4gPSB2aXNpYmxlVGFza3MubGVuZ3RoO1xyXG4gICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbGVuOyBpbmRleCsrKSB7XHJcbiAgICAgICAgbGV0IHRhc2sgPSB2aXNpYmxlVGFza3NbaW5kZXhdO1xyXG4gICAgICAgIHRhc2sud2lkdGggPVxyXG4gICAgICAgICAgdGFzay5kdXJhdGlvbiAvIHRoaXMuc3RhdGUub3B0aW9ucy50aW1lcy50aW1lUGVyUGl4ZWwgLSB0aGlzLnN0eWxlWydncmlkLWxpbmUtdmVydGljYWwnXVsnc3Ryb2tlLXdpZHRoJ107XHJcbiAgICAgICAgaWYgKHRhc2sud2lkdGggPCAwKSB7XHJcbiAgICAgICAgICB0YXNrLndpZHRoID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGFzay5oZWlnaHQgPSB0aGlzLnN0YXRlLm9wdGlvbnMucm93LmhlaWdodDtcclxuICAgICAgICB0YXNrLnggPSB0aGlzLnRpbWVUb1BpeGVsT2Zmc2V0WCh0YXNrLnN0YXJ0VGltZSk7XHJcbiAgICAgICAgLyogQWRkIG11bHRpcGxlIGRpc3BsYXlzIGluIG9uZSByb3cgICovXHJcbiAgICAgICAgLy8gbGV0IHJlYWxJbmRleCA9IGluZGV4O1xyXG4gICAgICAgIC8vIGlmICh0YXNrLnNob3dUYXNrTGlzdCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAvLyAgIGNvbnN0IGluZHggPSB2aXNpYmxlVGFza3NcclxuICAgICAgICAvLyAgICAgLmZpbHRlcih2ID0+IHYuc2hvd1Rhc2tMaXN0ICE9PSBmYWxzZSlcclxuICAgICAgICAvLyAgICAgLm1hcCh2ID0+IHYuaWQpXHJcbiAgICAgICAgLy8gICAgIC5pbmRleE9mKHRhc2sucGFyZW50SWQpO1xyXG5cclxuICAgICAgICAvLyAgIHJlYWxJbmRleCA9IGluZHg7XHJcbiAgICAgICAgLy8gfSBlbHNlIHtcclxuICAgICAgICAvLyAgIGNvbnN0IGluZHggPSB2aXNpYmxlVGFza3Muc2xpY2UoMCwgaW5kZXgpLmZpbHRlcih2ID0+IHYuc2hvd1Rhc2tMaXN0ID09PSBmYWxzZSkubGVuZ3RoO1xyXG5cclxuICAgICAgICAvLyAgIHJlYWxJbmRleCA9IGluZGV4IC0gaW5keDtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgdGFzay55ID1cclxuICAgICAgICAgICh0aGlzLnN0YXRlLm9wdGlvbnMucm93LmhlaWdodCArIHRoaXMuc3RhdGUub3B0aW9ucy5jaGFydC5ncmlkLmhvcml6b250YWwuZ2FwICogMikgKiBpbmRleCArXHJcbiAgICAgICAgICB0aGlzLnN0YXRlLm9wdGlvbnMuY2hhcnQuZ3JpZC5ob3Jpem9udGFsLmdhcDtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdmlzaWJsZVRhc2tzO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFN0eWxlIHNob3J0Y3V0XHJcbiAgICAgKi9cclxuICAgIHN0eWxlKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5zdGF0ZS5keW5hbWljU3R5bGU7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0IGNvbHVtbnMgYW5kIGNvbXB1dGUgZGltZW5zaW9ucyBvbiB0aGUgZmx5XHJcbiAgICAgKi9cclxuICAgIGdldFRhc2tMaXN0Q29sdW1ucygpIHtcclxuICAgICAgdGhpcy5jYWxjdWxhdGVUYXNrTGlzdENvbHVtbnNEaW1lbnNpb25zKCk7XHJcbiAgICAgIHJldHVybiB0aGlzLnN0YXRlLm9wdGlvbnMudGFza0xpc3QuY29sdW1ucy5maWx0ZXIodiA9PiAhdi5maXhlZCk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGFza3MgdXNlZCBmb3IgY29tbXVuaWNhdGUgd2l0aCBwYXJlbnQgY29tcG9uZW50XHJcbiAgICAgKi9cclxuICAgIG91dHB1dFRhc2tzKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5zdGF0ZS50YXNrcztcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPcHRpb25zIHVzZWQgdG8gY29tbXVuaWNhdGUgd2l0aCBwYXJlbnQgY29tcG9uZW50XHJcbiAgICAgKi9cclxuICAgIG91dHB1dE9wdGlvbnMoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnN0YXRlLm9wdGlvbnM7XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICogV2F0Y2ggdGFza3MgYWZ0ZXIgZ2FudHQgaW5zdGFuY2UgaXMgY3JlYXRlZCBhbmQgcmVhY3Qgd2hlbiB3ZSBoYXZlIG5ldyBraWRzIG9uIHRoZSBibG9ja1xyXG4gICAqL1xyXG4gIGNyZWF0ZWQoKSB7XHJcbiAgICB0aGlzLmluaXRpYWxpemVFdmVudHMoKTtcclxuICAgIHRoaXMuc2V0dXAoKTtcclxuICAgIHRoaXMuc3RhdGUudW53YXRjaFRhc2tzID0gdGhpcy4kd2F0Y2goXHJcbiAgICAgICd0YXNrcycsXHJcbiAgICAgIHRhc2tzID0+IHtcclxuICAgICAgICBjb25zdCBub3RFcXVhbCA9IG5vdEVxdWFsRGVlcCh0YXNrcywgdGhpcy5vdXRwdXRUYXNrcyk7XHJcbiAgICAgICAgaWYgKG5vdEVxdWFsKSB7XHJcbiAgICAgICAgICB0aGlzLnNldHVwKCd0YXNrcycpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgeyBkZWVwOiB0cnVlIH1cclxuICAgICk7XHJcbiAgICB0aGlzLnN0YXRlLnVud2F0Y2hPcHRpb25zID0gdGhpcy4kd2F0Y2goXHJcbiAgICAgICdvcHRpb25zJyxcclxuICAgICAgb3B0cyA9PiB7XHJcbiAgICAgICAgY29uc3Qgbm90RXF1YWwgPSBub3RFcXVhbERlZXAob3B0cywgdGhpcy5vdXRwdXRPcHRpb25zKTtcclxuICAgICAgICBpZiAobm90RXF1YWwpIHtcclxuICAgICAgICAgIHRoaXMuc2V0dXAoJ29wdGlvbnMnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHsgZGVlcDogdHJ1ZSB9XHJcbiAgICApO1xyXG4gICAgdGhpcy5zdGF0ZS51bndhdGNoU3R5bGUgPSB0aGlzLiR3YXRjaChcclxuICAgICAgJ2R5bmFtaWNTdHlsZScsXHJcbiAgICAgIHN0eWxlID0+IHtcclxuICAgICAgICBjb25zdCBub3RFcXVhbCA9IG5vdEVxdWFsRGVlcChzdHlsZSwgdGhpcy5keW5hbWljU3R5bGUpO1xyXG4gICAgICAgIGlmIChub3RFcXVhbCkge1xyXG4gICAgICAgICAgdGhpcy5pbml0aWFsaXplU3R5bGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHsgZGVlcDogdHJ1ZSwgaW1tZWRpYXRlOiB0cnVlIH1cclxuICAgICk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZS51bndhdGNoT3V0cHV0VGFza3MgPSB0aGlzLiR3YXRjaChcclxuICAgICAgJ291dHB1dFRhc2tzJyxcclxuICAgICAgdGFza3MgPT4ge1xyXG4gICAgICAgIHRoaXMuJGVtaXQoXHJcbiAgICAgICAgICAndGFza3MtY2hhbmdlZCcsXHJcbiAgICAgICAgICB0YXNrcy5tYXAodGFzayA9PiB0YXNrKVxyXG4gICAgICAgICk7XHJcbiAgICAgIH0sXHJcbiAgICAgIHsgZGVlcDogdHJ1ZSB9XHJcbiAgICApO1xyXG4gICAgdGhpcy5zdGF0ZS51bndhdGNoT3V0cHV0T3B0aW9ucyA9IHRoaXMuJHdhdGNoKFxyXG4gICAgICAnb3V0cHV0T3B0aW9ucycsXHJcbiAgICAgIG9wdGlvbnMgPT4ge1xyXG4gICAgICAgIHRoaXMuJGVtaXQoJ29wdGlvbnMtY2hhbmdlZCcsIG1lcmdlRGVlcCh7fSwgb3B0aW9ucykpO1xyXG4gICAgICB9LFxyXG4gICAgICB7IGRlZXA6IHRydWUgfVxyXG4gICAgKTtcclxuICAgIHRoaXMuc3RhdGUudW53YXRjaE91dHB1dFN0eWxlID0gdGhpcy4kd2F0Y2goXHJcbiAgICAgICdzdHlsZScsXHJcbiAgICAgIHN0eWxlID0+IHtcclxuICAgICAgICB0aGlzLiRlbWl0KCdkeW5hbWljLXN0eWxlLWNoYW5nZWQnLCBtZXJnZURlZXAoe30sIHN0eWxlKSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIHsgZGVlcDogdHJ1ZSB9XHJcbiAgICApO1xyXG5cclxuICAgIHRoaXMuJHJvb3QuJGVtaXQoJ2dhbnR0LWVsYXN0aWMtY3JlYXRlZCcsIHRoaXMpO1xyXG4gICAgdGhpcy4kZW1pdCgnY3JlYXRlZCcsIHRoaXMpO1xyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIEVtaXQgYmVmb3JlLW1vdW50IGV2ZW50XHJcbiAgICovXHJcbiAgYmVmb3JlTW91bnQoKSB7XHJcbiAgICB0aGlzLiRlbWl0KCdiZWZvcmUtbW91bnQnLCB0aGlzKTtcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiBFbWl0IHJlYWR5L21vdW50ZWQgZXZlbnRzIGFuZCBkZWxpdmVyIHRoaXMgZ2FudHQgaW5zdGFuY2UgdG8gb3V0c2lkZSB3b3JsZCB3aGVuIG5lZWRlZFxyXG4gICAqL1xyXG4gIG1vdW50ZWQoKSB7XHJcbiAgICB0aGlzLnN0YXRlLm9wdGlvbnMuY2xpZW50V2lkdGggPSB0aGlzLiRlbC5jbGllbnRXaWR0aDtcclxuICAgIHRoaXMuc3RhdGUucmVzaXplT2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXIoKGVudHJpZXMsIG9ic2VydmVyKSA9PiB7XHJcbiAgICAgIHRoaXMuZ2xvYmFsT25SZXNpemUoKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5zdGF0ZS5yZXNpemVPYnNlcnZlci5vYnNlcnZlKHRoaXMuJGVsLnBhcmVudE5vZGUpO1xyXG4gICAgdGhpcy5nbG9iYWxPblJlc2l6ZSgpO1xyXG4gICAgdGhpcy4kZW1pdCgncmVhZHknLCB0aGlzKTtcclxuICAgIHRoaXMuJHJvb3QuJGVtaXQoJ2dhbnR0LWVsYXN0aWMtbW91bnRlZCcsIHRoaXMpO1xyXG4gICAgdGhpcy4kZW1pdCgnbW91bnRlZCcsIHRoaXMpO1xyXG4gICAgdGhpcy4kcm9vdC4kZW1pdCgnZ2FudHQtZWxhc3RpYy1yZWFkeScsIHRoaXMpO1xyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIEVtaXQgZXZlbnQgd2hlbiBkYXRhIHdhcyBjaGFuZ2VkIGFuZCBiZWZvcmUgdXBkYXRlICh5b3UgY2FuIGNsZWFudXAgZG9tIGV2ZW50cyBoZXJlIGZvciBleGFtcGxlKVxyXG4gICAqL1xyXG4gIGJlZm9yZVVwZGF0ZSgpIHtcclxuICAgIHRoaXMuJGVtaXQoJ2JlZm9yZS11cGRhdGUnKTtcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiBFbWl0IGV2ZW50IHdoZW4gZ2FudHQtZWxhc3RpYyB2aWV3IHdhcyB1cGRhdGVkXHJcbiAgICovXHJcbiAgdXBkYXRlZCgpIHtcclxuICAgIHRoaXMuJG5leHRUaWNrKCgpID0+IHtcclxuICAgICAgdGhpcy4kZW1pdCgndXBkYXRlZCcpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICogQmVmb3JlIGRlc3Ryb3kgZXZlbnQgLSBjbGVhbiB1cFxyXG4gICAqL1xyXG4gIGJlZm9yZURlc3Ryb3koKSB7XHJcbiAgICB0aGlzLnN0YXRlLnJlc2l6ZU9ic2VydmVyLnVub2JzZXJ2ZSh0aGlzLiRlbC5wYXJlbnROb2RlKTtcclxuICAgIHRoaXMuc3RhdGUudW53YXRjaFRhc2tzKCk7XHJcbiAgICB0aGlzLnN0YXRlLnVud2F0Y2hPcHRpb25zKCk7XHJcbiAgICB0aGlzLnN0YXRlLnVud2F0Y2hTdHlsZSgpO1xyXG4gICAgdGhpcy5zdGF0ZS51bndhdGNoT3V0cHV0VGFza3MoKTtcclxuICAgIHRoaXMuc3RhdGUudW53YXRjaE91dHB1dE9wdGlvbnMoKTtcclxuICAgIHRoaXMuc3RhdGUudW53YXRjaE91dHB1dFN0eWxlKCk7XHJcbiAgICB0aGlzLiRlbWl0KCdiZWZvcmUtZGVzdHJveScpO1xyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIEVtaXQgZXZlbnQgYWZ0ZXIgZ2FudHQtZWxhc3RpYyB3YXMgZGVzdHJveWVkXHJcbiAgICovXHJcbiAgZGVzdHJveWVkKCkge1xyXG4gICAgdGhpcy4kZW1pdCgnZGVzdHJveWVkJyk7XHJcbiAgfVxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBHYW50dEVsYXN0aWM7XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG5bY2xhc3NePSdnYW50dC1lbGFzdGljJ10sXHJcbltjbGFzcyo9JyBnYW50dC1lbGFzdGljJ10ge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuLmdhbnR0LWVsYXN0aWNfX21haW4tdmlldyBzdmcge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi5nYW50dC1lbGFzdGljX19ncmlkLWhvcml6b250YWwtbGluZSxcclxuLmdhbnR0LWVsYXN0aWNfX2dyaWQtdmVydGljYWwtbGluZSB7XHJcbiAgc3Ryb2tlOiAjYTBhMGEwO1xyXG4gIHN0cm9rZS13aWR0aDogMTtcclxufVxyXG5mb3JlaWduT2JqZWN0ID4gKiB7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbn1cclxuLmdhbnR0LWVsYXN0aWMgLnAtMiB7XHJcbiAgcGFkZGluZzogMTByZW07XHJcbn1cclxuLmdhbnR0LWVsYXN0aWNfX21haW4tdmlldy1tYWluLWNvbnRhaW5lcixcclxuLmdhbnR0LWVsYXN0aWNfX21haW4tdmlldy1jb250YWluZXIge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG59XHJcbi5nYW50dC1lbGFzdGljX190YXNrLWxpc3QtaGVhZGVyLWNvbHVtbjpsYXN0LW9mLXR5cGUge1xyXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMwMDAwMDA1MDtcclxufVxyXG4uZ2FudHQtZWxhc3RpY19fdGFzay1saXN0LWl0ZW06bGFzdC1vZi10eXBlIHtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwMDAwMDUwO1xyXG59XHJcbi5nYW50dC1lbGFzdGljX190YXNrLWxpc3QtaXRlbS12YWx1ZS13cmFwcGVyOmhvdmVyIHtcclxuICBvdmVyZmxvdzogdmlzaWJsZSAhaW1wb3J0YW50O1xyXG59XHJcbi5nYW50dC1lbGFzdGljX190YXNrLWxpc3QtaXRlbS12YWx1ZS13cmFwcGVyOmhvdmVyID4gLmdhbnR0LWVsYXN0aWNfX3Rhc2stbGlzdC1pdGVtLXZhbHVlLWNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG92ZXJmbG93OiB2aXNpYmxlICFpbXBvcnRhbnQ7XHJcbn1cclxuLmdhbnR0LWVsYXN0aWNfX3Rhc2stbGlzdC1pdGVtLXZhbHVlLXdyYXBwZXI6aG92ZXIgPiAuZ2FudHQtZWxhc3RpY19fdGFzay1saXN0LWl0ZW0tdmFsdWUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG48L3N0eWxlPlxyXG4iLCI8IS0tXHJcbi8qKlxyXG4gKiBAZmlsZW92ZXJ2aWV3IENhbGVuZGFyIGNvbXBvbmVudFxyXG4gKiBAbGljZW5zZSBNSVRcclxuICogQGF1dGhvciBSYWZhbCBQb3NwaWVjaCA8bmV1cm9uZXQuaW9AZ21haWwuY29tPlxyXG4gKiBAcGFja2FnZSBHYW50dEVsYXN0aWNcclxuICovXHJcbi0tPlxyXG48dGVtcGxhdGU+XHJcbiAgPGRpdlxyXG4gICAgY2xhc3M9XCJnYW50dC1lbGFzdGljX19jYWxlbmRhci13cmFwcGVyXCJcclxuICAgIDpzdHlsZT1cInsgLi4ucm9vdC5zdHlsZVsnY2FsZW5kYXItd3JhcHBlciddLCB3aWR0aDogcm9vdC5zdGF0ZS5vcHRpb25zLndpZHRoICsgJ3B4JyB9XCJcclxuICA+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZ2FudHQtZWxhc3RpY19fY2FsZW5kYXJcIiA6c3R5bGU9XCJ7IC4uLnJvb3Quc3R5bGVbJ2NhbGVuZGFyJ10sIHdpZHRoOiByb290LnN0YXRlLm9wdGlvbnMud2lkdGggKyAncHgnIH1cIj5cclxuICAgICAgPGNhbGVuZGFyLXJvdyA6aXRlbXM9XCJkYXRlcy5tb250aHNcIiB3aGljaD1cIm1vbnRoXCIgdi1pZj1cInJvb3Quc3RhdGUub3B0aW9ucy5jYWxlbmRhci5tb250aC5kaXNwbGF5XCI+PC9jYWxlbmRhci1yb3c+XHJcbiAgICAgIDxjYWxlbmRhci1yb3cgOml0ZW1zPVwiZGF0ZXMuZGF5c1wiIHdoaWNoPVwiZGF5XCIgdi1pZj1cInJvb3Quc3RhdGUub3B0aW9ucy5jYWxlbmRhci5kYXkuZGlzcGxheVwiPjwvY2FsZW5kYXItcm93PlxyXG4gICAgICA8Y2FsZW5kYXItcm93IDppdGVtcz1cImRhdGVzLmhvdXJzXCIgd2hpY2g9XCJob3VyXCIgdi1pZj1cInJvb3Quc3RhdGUub3B0aW9ucy5jYWxlbmRhci5ob3VyLmRpc3BsYXlcIj48L2NhbGVuZGFyLXJvdz5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IGRheWpzIGZyb20gJ2RheWpzJztcclxuaW1wb3J0IENhbGVuZGFyUm93IGZyb20gJy4vQ2FsZW5kYXJSb3cudnVlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBuYW1lOiAnQ2FsZW5kYXInLFxyXG4gIGNvbXBvbmVudHM6IHtcclxuICAgIENhbGVuZGFyUm93XHJcbiAgfSxcclxuICBpbmplY3Q6IFsncm9vdCddLFxyXG4gIGRhdGEoKSB7XHJcbiAgICByZXR1cm4ge307XHJcbiAgfSxcclxuXHJcbiAgbWV0aG9kczoge1xyXG4gICAgLyoqXHJcbiAgICAgKiBIb3cgbWFueSBob3VycyB3aWxsIGZpdD9cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fVxyXG4gICAgICovXHJcbiAgICBob3dNYW55SG91cnNGaXQoZGF5SW5kZXgpIHtcclxuICAgICAgY29uc3Qgc3Ryb2tlID0gMTtcclxuICAgICAgY29uc3QgYWRkaXRpb25hbFNwYWNlID0gc3Ryb2tlICsgMjtcclxuICAgICAgbGV0IGZ1bGxDZWxsV2lkdGggPSB0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy50aW1lcy5zdGVwc1tkYXlJbmRleF0ud2lkdGgucHg7XHJcbiAgICAgIGxldCBmb3JtYXROYW1lcyA9IE9iamVjdC5rZXlzKHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLmNhbGVuZGFyLmhvdXIuZm9ybWF0KTtcclxuICAgICAgZm9yIChsZXQgaG91cnMgPSAyNDsgaG91cnMgPiAxOyBob3VycyA9IE1hdGguY2VpbChob3VycyAvIDIpKSB7XHJcbiAgICAgICAgZm9yIChsZXQgZm9ybWF0TmFtZSBvZiBmb3JtYXROYW1lcykge1xyXG4gICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAodGhpcy5yb290LnN0YXRlLm9wdGlvbnMuY2FsZW5kYXIuaG91ci5tYXhXaWR0aHNbZm9ybWF0TmFtZV0gKyBhZGRpdGlvbmFsU3BhY2UpICogaG91cnMgPD0gZnVsbENlbGxXaWR0aCAmJlxyXG4gICAgICAgICAgICBob3VycyA+IDFcclxuICAgICAgICAgICkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgIGNvdW50OiBob3VycyxcclxuICAgICAgICAgICAgICB0eXBlOiBmb3JtYXROYW1lXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgY291bnQ6IDAsXHJcbiAgICAgICAgdHlwZTogJydcclxuICAgICAgfTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBIb3cgbWFueSBkYXlzIHdpbGwgZml0P1xyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9XHJcbiAgICAgKi9cclxuICAgIGhvd01hbnlEYXlzRml0KCkge1xyXG4gICAgICBjb25zdCBzdHJva2UgPSAxO1xyXG4gICAgICBjb25zdCBhZGRpdGlvbmFsU3BhY2UgPSBzdHJva2UgKyAyO1xyXG4gICAgICBsZXQgZnVsbFdpZHRoID0gdGhpcy5yb290LnN0YXRlLm9wdGlvbnMud2lkdGg7XHJcbiAgICAgIGxldCBmb3JtYXROYW1lcyA9IE9iamVjdC5rZXlzKHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLmNhbGVuZGFyLmRheS5mb3JtYXQpO1xyXG4gICAgICBmb3IgKGxldCBkYXlzID0gdGhpcy5yb290LnN0YXRlLm9wdGlvbnMudGltZXMuc3RlcHMubGVuZ3RoOyBkYXlzID4gMTsgZGF5cyA9IE1hdGguY2VpbChkYXlzIC8gMikpIHtcclxuICAgICAgICBmb3IgKGxldCBmb3JtYXROYW1lIG9mIGZvcm1hdE5hbWVzKSB7XHJcbiAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICh0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy5jYWxlbmRhci5kYXkubWF4V2lkdGhzW2Zvcm1hdE5hbWVdICsgYWRkaXRpb25hbFNwYWNlKSAqIGRheXMgPD0gZnVsbFdpZHRoICYmXHJcbiAgICAgICAgICAgIGRheXMgPiAxXHJcbiAgICAgICAgICApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICBjb3VudDogZGF5cyxcclxuICAgICAgICAgICAgICB0eXBlOiBmb3JtYXROYW1lXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgY291bnQ6IDAsXHJcbiAgICAgICAgdHlwZTogJydcclxuICAgICAgfTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBIb3cgbWFueSBtb250aHMgd2lsbCBmaXQ/XHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge29iamVjdH1cclxuICAgICAqL1xyXG4gICAgaG93TWFueU1vbnRoc0ZpdCgpIHtcclxuICAgICAgY29uc3Qgc3Ryb2tlID0gMTtcclxuICAgICAgY29uc3QgYWRkaXRpb25hbFNwYWNlID0gc3Ryb2tlICsgMjtcclxuICAgICAgbGV0IGZ1bGxXaWR0aCA9IHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLndpZHRoO1xyXG4gICAgICBsZXQgZm9ybWF0TmFtZXMgPSBPYmplY3Qua2V5cyh0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy5jYWxlbmRhci5tb250aC5mb3JtYXQpO1xyXG4gICAgICBsZXQgY3VycmVudE1vbnRoID0gZGF5anModGhpcy5yb290LnN0YXRlLm9wdGlvbnMudGltZXMuZmlyc3RUaW1lKTtcclxuICAgICAgbGV0IHByZXZpb3VzTW9udGggPSBjdXJyZW50TW9udGguY2xvbmUoKTtcclxuICAgICAgY29uc3QgbGFzdFRpbWUgPSB0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy50aW1lcy5sYXN0VGltZTtcclxuICAgICAgbGV0IG1vbnRoc0NvdW50ID0gdGhpcy5yb290Lm1vbnRoc0NvdW50KFxyXG4gICAgICAgIHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLnRpbWVzLmZpcnN0VGltZSxcclxuICAgICAgICB0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy50aW1lcy5sYXN0VGltZVxyXG4gICAgICApO1xyXG4gICAgICBpZiAobW9udGhzQ291bnQgPT09IDEpIHtcclxuICAgICAgICBmb3IgKGxldCBmb3JtYXROYW1lIG9mIGZvcm1hdE5hbWVzKSB7XHJcbiAgICAgICAgICBpZiAodGhpcy5yb290LnN0YXRlLm9wdGlvbnMuY2FsZW5kYXIubW9udGgubWF4V2lkdGhzW2Zvcm1hdE5hbWVdICsgYWRkaXRpb25hbFNwYWNlIDw9IGZ1bGxXaWR0aCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgIGNvdW50OiAxLFxyXG4gICAgICAgICAgICAgIHR5cGU6IGZvcm1hdE5hbWVcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgZm9yIChsZXQgbW9udGhzID0gbW9udGhzQ291bnQ7IG1vbnRocyA+IDE7IG1vbnRocyA9IE1hdGguY2VpbChtb250aHMgLyAyKSkge1xyXG4gICAgICAgIGZvciAobGV0IGZvcm1hdE5hbWUgb2YgZm9ybWF0TmFtZXMpIHtcclxuICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgKHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLmNhbGVuZGFyLm1vbnRoLm1heFdpZHRoc1tmb3JtYXROYW1lXSArIGFkZGl0aW9uYWxTcGFjZSkgKiBtb250aHMgPD0gZnVsbFdpZHRoICYmXHJcbiAgICAgICAgICAgIG1vbnRocyA+IDFcclxuICAgICAgICAgICkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgIGNvdW50OiBtb250aHMsXHJcbiAgICAgICAgICAgICAgdHlwZTogZm9ybWF0TmFtZVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGNvdW50OiAwLFxyXG4gICAgICAgIHR5cGU6IGZvcm1hdE5hbWVzWzBdXHJcbiAgICAgIH07XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2VuZXJhdGUgaG91cnNcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7YXJyYXl9XHJcbiAgICAgKi9cclxuICAgIGdlbmVyYXRlSG91cnMoKSB7XHJcbiAgICAgIGxldCBhbGxIb3VycyA9IFtdO1xyXG4gICAgICBpZiAoIXRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLmNhbGVuZGFyLmhvdXIuZGlzcGxheSkge1xyXG4gICAgICAgIHJldHVybiBhbGxIb3VycztcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBzdGVwcyA9IHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLnRpbWVzLnN0ZXBzO1xyXG4gICAgICBjb25zdCBsb2NhbGVOYW1lID0gdGhpcy5yb290LnN0YXRlLm9wdGlvbnMubG9jYWxlLm5hbWU7XHJcbiAgICAgIGZvciAobGV0IGhvdXJJbmRleCA9IDAsIGxlbiA9IHN0ZXBzLmxlbmd0aDsgaG91ckluZGV4IDwgbGVuOyBob3VySW5kZXgrKykge1xyXG4gICAgICAgIGNvbnN0IGhvdXJzQ291bnQgPSB0aGlzLmhvd01hbnlIb3Vyc0ZpdChob3VySW5kZXgpO1xyXG4gICAgICAgIGlmIChob3Vyc0NvdW50LmNvdW50ID09PSAwKSB7XHJcbiAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgaG91cnMgPSB7IGtleTogaG91ckluZGV4ICsgJ3N0ZXAnLCBjaGlsZHJlbjogW10gfTtcclxuICAgICAgICBjb25zdCBob3VyU3RlcCA9IDI0IC8gaG91cnNDb3VudC5jb3VudDtcclxuICAgICAgICBjb25zdCBob3VyV2lkdGhQeCA9IHN0ZXBzW2hvdXJJbmRleF0ud2lkdGgucHggLyBob3Vyc0NvdW50LmNvdW50O1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBob3Vyc0NvdW50LmNvdW50OyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICAgIGNvbnN0IGhvdXIgPSBpICogaG91clN0ZXA7XHJcbiAgICAgICAgICBsZXQgaW5kZXggPSBob3VySW5kZXg7XHJcbiAgICAgICAgICBpZiAoaG91ckluZGV4ID4gMCkge1xyXG4gICAgICAgICAgICBpbmRleCA9IGhvdXJJbmRleCAtIE1hdGguZmxvb3IoaG91ckluZGV4IC8gMjQpICogMjQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBsZXQgdGV4dFdpZHRoID0gMDtcclxuICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5yb290LnN0YXRlLm9wdGlvbnMuY2FsZW5kYXIuaG91ci53aWR0aHNbaW5kZXhdICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICB0ZXh0V2lkdGggPSB0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy5jYWxlbmRhci5ob3VyLndpZHRoc1tpbmRleF1baG91cnNDb3VudC50eXBlXTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGxldCB4ID0gc3RlcHNbaG91ckluZGV4XS5vZmZzZXQucHggKyBob3VyV2lkdGhQeCAqIGk7XHJcbiAgICAgICAgICBob3Vycy5jaGlsZHJlbi5wdXNoKHtcclxuICAgICAgICAgICAgaW5kZXg6IGhvdXJJbmRleCxcclxuICAgICAgICAgICAga2V5OiAnaCcgKyBpLFxyXG4gICAgICAgICAgICB4LFxyXG4gICAgICAgICAgICB5OiB0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy5jYWxlbmRhci5kYXkuaGVpZ2h0ICsgdGhpcy5yb290LnN0YXRlLm9wdGlvbnMuY2FsZW5kYXIubW9udGguaGVpZ2h0LFxyXG4gICAgICAgICAgICB3aWR0aDogaG91cldpZHRoUHgsXHJcbiAgICAgICAgICAgIHRleHRXaWR0aCxcclxuICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy5jYWxlbmRhci5ob3VyLmhlaWdodCxcclxuICAgICAgICAgICAgbGFiZWw6IHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLmNhbGVuZGFyLmhvdXIuZm9ybWF0dGVkW2hvdXJzQ291bnQudHlwZV1baG91cl1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhbGxIb3Vycy5wdXNoKGhvdXJzKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gYWxsSG91cnM7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2VuZXJhdGUgZGF5c1xyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHthcnJheX1cclxuICAgICAqL1xyXG4gICAgZ2VuZXJhdGVEYXlzKCkge1xyXG4gICAgICBsZXQgZGF5cyA9IFtdO1xyXG4gICAgICBpZiAoIXRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLmNhbGVuZGFyLmRheS5kaXNwbGF5KSB7XHJcbiAgICAgICAgcmV0dXJuIGRheXM7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgZGF5c0NvdW50ID0gdGhpcy5ob3dNYW55RGF5c0ZpdCgpO1xyXG4gICAgICBpZiAoZGF5c0NvdW50LmNvdW50ID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIGRheXM7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3Qgc3RlcHMgPSB0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy50aW1lcy5zdGVwcztcclxuICAgICAgY29uc3QgbG9jYWxlTmFtZSA9IHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLmxvY2FsZS5uYW1lO1xyXG4gICAgICBjb25zdCBkYXlTdGVwID0gTWF0aC5jZWlsKHN0ZXBzLmxlbmd0aCAvIGRheXNDb3VudC5jb3VudCk7XHJcbiAgICAgIGZvciAobGV0IGRheUluZGV4ID0gMCwgbGVuID0gc3RlcHMubGVuZ3RoOyBkYXlJbmRleCA8IGxlbjsgZGF5SW5kZXggKz0gZGF5U3RlcCkge1xyXG4gICAgICAgIGxldCBkYXlXaWR0aFB4ID0gMDtcclxuICAgICAgICAvLyBkYXkgY291bGQgYmUgc2hvcnRlciAoZGF5bGlnaHQgc2F2aW5nIHRpbWUpIHNvIGpvaW4gd2lkdGhzIGFuZCBkaXZpZGVcclxuICAgICAgICBmb3IgKGxldCBjdXJyZW50U3RlcCA9IDA7IGN1cnJlbnRTdGVwIDwgZGF5U3RlcDsgY3VycmVudFN0ZXArKykge1xyXG4gICAgICAgICAgaWYgKHR5cGVvZiBzdGVwc1tkYXlJbmRleCArIGN1cnJlbnRTdGVwXSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgZGF5V2lkdGhQeCArPSBzdGVwc1tkYXlJbmRleCArIGN1cnJlbnRTdGVwXS53aWR0aC5weDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgZGF0ZSA9IGRheWpzKHN0ZXBzW2RheUluZGV4XS50aW1lKTtcclxuICAgICAgICBsZXQgdGV4dFdpZHRoID0gMDtcclxuICAgICAgICBpZiAodHlwZW9mIHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLmNhbGVuZGFyLmRheS53aWR0aHNbZGF5SW5kZXhdICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgdGV4dFdpZHRoID0gdGhpcy5yb290LnN0YXRlLm9wdGlvbnMuY2FsZW5kYXIuZGF5LndpZHRoc1tkYXlJbmRleF1bZGF5c0NvdW50LnR5cGVdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgeCA9IHN0ZXBzW2RheUluZGV4XS5vZmZzZXQucHg7XHJcbiAgICAgICAgZGF5cy5wdXNoKHtcclxuICAgICAgICAgIGluZGV4OiBkYXlJbmRleCxcclxuICAgICAgICAgIGtleTogc3RlcHNbZGF5SW5kZXhdLnRpbWUgKyAnZCcsXHJcbiAgICAgICAgICB4LFxyXG4gICAgICAgICAgeTogdGhpcy5yb290LnN0YXRlLm9wdGlvbnMuY2FsZW5kYXIubW9udGguaGVpZ2h0LFxyXG4gICAgICAgICAgd2lkdGg6IGRheVdpZHRoUHgsXHJcbiAgICAgICAgICB0ZXh0V2lkdGgsXHJcbiAgICAgICAgICBoZWlnaHQ6IHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLmNhbGVuZGFyLmRheS5oZWlnaHQsXHJcbiAgICAgICAgICBsYWJlbDogdGhpcy5yb290LnN0YXRlLm9wdGlvbnMuY2FsZW5kYXIuZGF5LmZvcm1hdFtkYXlzQ291bnQudHlwZV0oZGF0ZS5sb2NhbGUobG9jYWxlTmFtZSkpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGRheXMubWFwKGl0ZW0gPT4gKHtcclxuICAgICAgICBrZXk6IGl0ZW0ua2V5LFxyXG4gICAgICAgIGNoaWxkcmVuOiBbaXRlbV1cclxuICAgICAgfSkpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEdlbmVyYXRlIG1vbnRoc1xyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHthcnJheX1cclxuICAgICAqL1xyXG4gICAgZ2VuZXJhdGVNb250aHMoKSB7XHJcbiAgICAgIGxldCBtb250aHMgPSBbXTtcclxuICAgICAgaWYgKCF0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy5jYWxlbmRhci5tb250aC5kaXNwbGF5KSB7XHJcbiAgICAgICAgcmV0dXJuIG1vbnRocztcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBtb250aHNDb3VudCA9IHRoaXMuaG93TWFueU1vbnRoc0ZpdCgpO1xyXG4gICAgICBpZiAobW9udGhzQ291bnQuY291bnQgPT09IDApIHtcclxuICAgICAgICByZXR1cm4gbW9udGhzO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHN0ZXBzID0gdGhpcy5yb290LnN0YXRlLm9wdGlvbnMudGltZXMuc3RlcHM7XHJcbiAgICAgIGNvbnN0IGxvY2FsZU5hbWUgPSB0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy5sb2NhbGUubmFtZTtcclxuICAgICAgbGV0IGZvcm1hdE5hbWVzID0gT2JqZWN0LmtleXModGhpcy5yb290LnN0YXRlLm9wdGlvbnMuY2FsZW5kYXIubW9udGguZm9ybWF0KTtcclxuICAgICAgbGV0IGN1cnJlbnREYXRlID0gZGF5anModGhpcy5yb290LnN0YXRlLm9wdGlvbnMudGltZXMuZmlyc3RUaW1lKTtcclxuICAgICAgZm9yIChsZXQgbW9udGhJbmRleCA9IDA7IG1vbnRoSW5kZXggPCBtb250aHNDb3VudC5jb3VudDsgbW9udGhJbmRleCsrKSB7XHJcbiAgICAgICAgbGV0IG1vbnRoV2lkdGggPSAwO1xyXG4gICAgICAgIGxldCBtb250aE9mZnNldCA9IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSO1xyXG4gICAgICAgIGxldCBmaW5hbERhdGUgPSBkYXlqcyhjdXJyZW50RGF0ZSlcclxuICAgICAgICAgIC5hZGQoMSwgJ21vbnRoJylcclxuICAgICAgICAgIC5zdGFydE9mKCdtb250aCcpO1xyXG4gICAgICAgIGlmIChmaW5hbERhdGUudmFsdWVPZigpID4gdGhpcy5yb290LnN0YXRlLm9wdGlvbnMudGltZXMubGFzdFRpbWUpIHtcclxuICAgICAgICAgIGZpbmFsRGF0ZSA9IGRheWpzKHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLnRpbWVzLmxhc3RUaW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gd2UgbXVzdCBmaW5kIGZpcnN0IGFuZCBsYXN0IHN0ZXAgdG8gZ2V0IHRoZSBvZmZzZXRzIC8gd2lkdGhzXHJcbiAgICAgICAgZm9yIChsZXQgc3RlcCA9IDAsIGxlbiA9IHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLnRpbWVzLnN0ZXBzLmxlbmd0aDsgc3RlcCA8IGxlbjsgc3RlcCsrKSB7XHJcbiAgICAgICAgICBsZXQgY3VycmVudFN0ZXAgPSB0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy50aW1lcy5zdGVwc1tzdGVwXTtcclxuICAgICAgICAgIGlmIChjdXJyZW50U3RlcC50aW1lID49IGN1cnJlbnREYXRlLnZhbHVlT2YoKSAmJiBjdXJyZW50U3RlcC50aW1lIDwgZmluYWxEYXRlLnZhbHVlT2YoKSkge1xyXG4gICAgICAgICAgICBtb250aFdpZHRoICs9IGN1cnJlbnRTdGVwLndpZHRoLnB4O1xyXG4gICAgICAgICAgICBpZiAoY3VycmVudFN0ZXAub2Zmc2V0LnB4IDwgbW9udGhPZmZzZXQpIHtcclxuICAgICAgICAgICAgICBtb250aE9mZnNldCA9IGN1cnJlbnRTdGVwLm9mZnNldC5weDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgbGFiZWwgPSAnJztcclxuICAgICAgICBsZXQgY2hvb3NlbkZvcm1hdE5hbWU7XHJcbiAgICAgICAgZm9yIChsZXQgZm9ybWF0TmFtZSBvZiBmb3JtYXROYW1lcykge1xyXG4gICAgICAgICAgaWYgKHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLmNhbGVuZGFyLm1vbnRoLm1heFdpZHRoc1tmb3JtYXROYW1lXSArIDIgPD0gbW9udGhXaWR0aCkge1xyXG4gICAgICAgICAgICBsYWJlbCA9IHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLmNhbGVuZGFyLm1vbnRoLmZvcm1hdFtmb3JtYXROYW1lXShjdXJyZW50RGF0ZS5sb2NhbGUobG9jYWxlTmFtZSkpO1xyXG4gICAgICAgICAgICBjaG9vc2VuRm9ybWF0TmFtZSA9IGZvcm1hdE5hbWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCB0ZXh0V2lkdGggPSAwO1xyXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5yb290LnN0YXRlLm9wdGlvbnMuY2FsZW5kYXIubW9udGgud2lkdGhzW21vbnRoSW5kZXhdICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgdGV4dFdpZHRoID0gdGhpcy5yb290LnN0YXRlLm9wdGlvbnMuY2FsZW5kYXIubW9udGgud2lkdGhzW21vbnRoSW5kZXhdW2Nob29zZW5Gb3JtYXROYW1lXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHggPSBtb250aE9mZnNldDtcclxuICAgICAgICBtb250aHMucHVzaCh7XHJcbiAgICAgICAgICBpbmRleDogbW9udGhJbmRleCxcclxuICAgICAgICAgIGtleTogbW9udGhJbmRleCArICdtJyxcclxuICAgICAgICAgIHgsXHJcbiAgICAgICAgICB5OiAwLFxyXG4gICAgICAgICAgd2lkdGg6IG1vbnRoV2lkdGgsXHJcbiAgICAgICAgICB0ZXh0V2lkdGgsXHJcbiAgICAgICAgICBjaG9vc2VuRm9ybWF0TmFtZSxcclxuICAgICAgICAgIGhlaWdodDogdGhpcy5yb290LnN0YXRlLm9wdGlvbnMuY2FsZW5kYXIubW9udGguaGVpZ2h0LFxyXG4gICAgICAgICAgbGFiZWxcclxuICAgICAgICB9KTtcclxuICAgICAgICBjdXJyZW50RGF0ZSA9IGN1cnJlbnREYXRlLmFkZCgxLCAnbW9udGgnKS5zdGFydE9mKCdtb250aCcpO1xyXG4gICAgICAgIGlmIChjdXJyZW50RGF0ZS52YWx1ZU9mKCkgPiB0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy50aW1lcy5sYXN0VGltZSkge1xyXG4gICAgICAgICAgY3VycmVudERhdGUgPSBkYXlqcyh0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy50aW1lcy5sYXN0VGltZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBtb250aHMubWFwKGl0ZW0gPT4gKHtcclxuICAgICAgICBrZXk6IGl0ZW0ua2V5LFxyXG4gICAgICAgIGNoaWxkcmVuOiBbaXRlbV1cclxuICAgICAgfSkpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFN1bSBhbGwgY2FsZW5kYXIgcm93cyBoZWlnaHQgYW5kIHJldHVybiByZXN1bHRcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7aW50fVxyXG4gICAgICovXHJcbiAgICBjYWxjdWxhdGVDYWxlbmRhckRpbWVuc2lvbnMoeyBob3VycywgZGF5cywgbW9udGhzIH0pIHtcclxuICAgICAgbGV0IGhlaWdodCA9IDA7XHJcbiAgICAgIGlmICh0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy5jYWxlbmRhci5ob3VyLmRpc3BsYXkgJiYgaG91cnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGhlaWdodCArPSB0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy5jYWxlbmRhci5ob3VyLmhlaWdodDtcclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5yb290LnN0YXRlLm9wdGlvbnMuY2FsZW5kYXIuZGF5LmRpc3BsYXkgJiYgZGF5cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgaGVpZ2h0ICs9IHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLmNhbGVuZGFyLmRheS5oZWlnaHQ7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLmNhbGVuZGFyLm1vbnRoLmRpc3BsYXkgJiYgbW9udGhzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBoZWlnaHQgKz0gdGhpcy5yb290LnN0YXRlLm9wdGlvbnMuY2FsZW5kYXIubW9udGguaGVpZ2h0O1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLmNhbGVuZGFyLmhlaWdodCA9IGhlaWdodDtcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBjb21wdXRlZDoge1xyXG4gICAgZGF0ZXMoKSB7XHJcbiAgICAgIGNvbnN0IGhvdXJzID0gdGhpcy5nZW5lcmF0ZUhvdXJzKCk7XHJcbiAgICAgIGNvbnN0IGRheXMgPSB0aGlzLmdlbmVyYXRlRGF5cygpO1xyXG4gICAgICBjb25zdCBtb250aHMgPSB0aGlzLmdlbmVyYXRlTW9udGhzKCk7XHJcbiAgICAgIGNvbnN0IGFsbERhdGVzID0geyBob3VycywgZGF5cywgbW9udGhzIH07XHJcbiAgICAgIHRoaXMuY2FsY3VsYXRlQ2FsZW5kYXJEaW1lbnNpb25zKGFsbERhdGVzKTtcclxuICAgICAgcmV0dXJuIGFsbERhdGVzO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuPC9zY3JpcHQ+XHJcbiIsIjwhLS1cclxuLyoqXHJcbiAqIEBmaWxlb3ZlcnZpZXcgQ2FsZW5kYXJSb3cgY29tcG9uZW50XHJcbiAqIEBsaWNlbnNlIE1JVFxyXG4gKiBAYXV0aG9yIFJhZmFsIFBvc3BpZWNoIDxuZXVyb25ldC5pb0BnbWFpbC5jb20+XHJcbiAqIEBwYWNrYWdlIEdhbnR0RWxhc3RpY1xyXG4gKi9cclxuLS0+XHJcbjx0ZW1wbGF0ZT5cclxuICA8ZGl2IDpjbGFzcz1cIidnYW50dC1lbGFzdGljX19jYWxlbmRhci1yb3cgZ2FudHQtZWxhc3RpY19fY2FsZW5kYXItcm93LS0nICsgd2hpY2hcIiA6c3R5bGU9XCJyb3dTdHlsZVwiPlxyXG4gICAgPGRpdlxyXG4gICAgICB2LWZvcj1cIihpdGVtLCBpdGVtSW5kZXgpIGluIGl0ZW1zXCJcclxuICAgICAgOmtleT1cIml0ZW0ua2V5XCJcclxuICAgICAgOmNsYXNzPVwiJ2dhbnR0LWVsYXN0aWNfX2NhbGVuZGFyLXJvdy1yZWN0IGdhbnR0LWVsYXN0aWNfX2NhbGVuZGFyLXJvdy1yZWN0LS0nICsgd2hpY2hcIlxyXG4gICAgICA6c3R5bGU9XCJyZWN0U3R5bGVcIlxyXG4gICAgPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgOmNsYXNzPVwiJ2dhbnR0LWVsYXN0aWNfX2NhbGVuZGFyLXJvdy1yZWN0LWNoaWxkIGdhbnR0LWVsYXN0aWNfX2NhbGVuZGFyLXJvdy1yZWN0LWNoaWxkLS0nICsgd2hpY2hcIlxyXG4gICAgICAgIHYtZm9yPVwiKGNoaWxkLCBjaGlsZEluZGV4KSBpbiBpdGVtLmNoaWxkcmVuXCJcclxuICAgICAgICA6a2V5PVwiY2hpbGQua2V5XCJcclxuICAgICAgICA6c3R5bGU9XCJyZWN0Q2hpbGRTdHlsZVtpdGVtSW5kZXhdW2NoaWxkSW5kZXhdXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIDpjbGFzcz1cIidnYW50dC1lbGFzdGljX19jYWxlbmRhci1yb3ctdGV4dCBnYW50dC1lbGFzdGljX19jYWxlbmRhci1yb3ctdGV4dC0tJyArIHdoaWNoXCJcclxuICAgICAgICAgIDpzdHlsZT1cInRleHRTdHlsZShjaGlsZClcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIHt7IGNoaWxkLmxhYmVsIH19XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgbmFtZTogJ0NhbGVuZGFyUm93JyxcclxuICBpbmplY3Q6IFsncm9vdCddLFxyXG4gIHByb3BzOiBbJ2l0ZW1zJywgJ3doaWNoJ10sXHJcbiAgZGF0YSgpIHtcclxuICAgIHJldHVybiB7fTtcclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIC8qKlxyXG4gICAgICogR2V0IHggcG9zaXRpb25cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAgICovXHJcbiAgICBnZXRUZXh0WChpdGVtKSB7XHJcbiAgICAgIGxldCB4ID0gaXRlbS54ICsgaXRlbS53aWR0aCAvIDIgLSBpdGVtLnRleHRXaWR0aCAvIDI7XHJcbiAgICAgIGlmICh0aGlzLndoaWNoID09PSAnbW9udGgnICYmIHRoaXMucm9vdC5pc0luc2lkZVZpZXdQb3J0KGl0ZW0ueCwgaXRlbS53aWR0aCwgMCkpIHtcclxuICAgICAgICBsZXQgc2Nyb2xsV2lkdGggPSB0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy5zY3JvbGwuY2hhcnQucmlnaHQgLSB0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy5zY3JvbGwuY2hhcnQubGVmdDtcclxuICAgICAgICB4ID0gdGhpcy5yb290LnN0YXRlLm9wdGlvbnMuc2Nyb2xsLmNoYXJ0LmxlZnQgKyBzY3JvbGxXaWR0aCAvIDIgLSBpdGVtLnRleHRXaWR0aCAvIDIgKyAyO1xyXG4gICAgICAgIGlmICh4ICsgaXRlbS50ZXh0V2lkdGggKyAyID4gaXRlbS54ICsgaXRlbS53aWR0aCkge1xyXG4gICAgICAgICAgeCA9IGl0ZW0ueCArIGl0ZW0ud2lkdGggLSBpdGVtLnRleHRXaWR0aCAtIDI7XHJcbiAgICAgICAgfSBlbHNlIGlmICh4IDwgaXRlbS54KSB7XHJcbiAgICAgICAgICB4ID0gaXRlbS54ICsgMjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHggLSBpdGVtLng7XHJcbiAgICB9XHJcbiAgfSxcclxuICBjb21wdXRlZDoge1xyXG4gICAgcm93U3R5bGUoKSB7XHJcbiAgICAgIHJldHVybiB7IC4uLnRoaXMucm9vdC5zdHlsZVsnY2FsZW5kYXItcm93J10sIC4uLnRoaXMucm9vdC5zdHlsZVsnY2FsZW5kYXItcm93LS0nICsgdGhpcy53aGljaF0gfTtcclxuICAgIH0sXHJcbiAgICByZWN0U3R5bGUoKSB7XHJcbiAgICAgIHJldHVybiB7IC4uLnRoaXMucm9vdC5zdHlsZVsnY2FsZW5kYXItcm93LXJlY3QnXSwgLi4udGhpcy5yb290LnN0eWxlWydjYWxlbmRhci1yb3ctcmVjdC0tJyArIHRoaXMud2hpY2hdIH07XHJcbiAgICB9LFxyXG4gICAgcmVjdENoaWxkU3R5bGUoKSB7XHJcbiAgICAgIGNvbnN0IGJhc2ljU3R5bGUgPSB7XHJcbiAgICAgICAgLi4udGhpcy5yb290LnN0eWxlWydjYWxlbmRhci1yb3ctcmVjdC1jaGlsZCddLFxyXG4gICAgICAgIC4uLnRoaXMucm9vdC5zdHlsZVsnY2FsZW5kYXItcm93LXJlY3QtY2hpbGQtLScgKyB0aGlzLndoaWNoXVxyXG4gICAgICB9O1xyXG4gICAgICBjb25zdCBzdHlsZSA9IFtdO1xyXG4gICAgICBmb3IgKGxldCBpdGVtIG9mIHRoaXMuaXRlbXMpIHtcclxuICAgICAgICBjb25zdCBjaGlsZHJlblN0eWxlID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgY2hpbGQgb2YgaXRlbS5jaGlsZHJlbikge1xyXG4gICAgICAgICAgY2hpbGRyZW5TdHlsZS5wdXNoKHtcclxuICAgICAgICAgICAgLi4uYmFzaWNTdHlsZSxcclxuICAgICAgICAgICAgd2lkdGg6IGNoaWxkLndpZHRoICsgJ3B4JyxcclxuICAgICAgICAgICAgaGVpZ2h0OiBjaGlsZC5oZWlnaHQgKyAncHgnXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3R5bGUucHVzaChjaGlsZHJlblN0eWxlKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gc3R5bGU7XHJcbiAgICB9LFxyXG4gICAgdGV4dFN0eWxlKCkge1xyXG4gICAgICBjb25zdCBiYXNpY1N0eWxlID0ge1xyXG4gICAgICAgIC4uLnRoaXMucm9vdC5zdHlsZVsnY2FsZW5kYXItcm93LXRleHQnXSxcclxuICAgICAgICAuLi50aGlzLnJvb3Quc3R5bGVbJ2NhbGVuZGFyLXJvdy10ZXh0LS0nICsgdGhpcy53aGljaF1cclxuICAgICAgfTtcclxuICAgICAgcmV0dXJuIGNoaWxkID0+IHtcclxuICAgICAgICBjb25zdCBzdHlsZSA9IHsgLi4uYmFzaWNTdHlsZSB9O1xyXG4gICAgICAgIGlmICh0aGlzLndoaWNoID09PSAnbW9udGgnKSB7XHJcbiAgICAgICAgICBzdHlsZS5sZWZ0ID0gdGhpcy5nZXRUZXh0WChjaGlsZCkgKyAncHgnO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc3R5bGU7XHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG48L3NjcmlwdD5cclxuIiwiPCEtLVxyXG4vKipcclxuICogQGZpbGVvdmVydmlldyBDaGFydCBjb21wb25lbnRcclxuICogQGxpY2Vuc2UgTUlUXHJcbiAqIEBhdXRob3IgUmFmYWwgUG9zcGllY2ggPG5ldXJvbmV0LmlvQGdtYWlsLmNvbT5cclxuICogQHBhY2thZ2UgR2FudHRFbGFzdGljXHJcbiAqL1xyXG4tLT5cclxuPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJnYW50dC1lbGFzdGljX19jaGFydFwiIDpzdHlsZT1cInsgLi4ucm9vdC5zdHlsZVsnY2hhcnQnXSB9XCIgcmVmPVwiY2hhcnRcIj5cclxuICAgIDxkaXZcclxuICAgICAgY2xhc3M9XCJnYW50dC1lbGFzdGljX19jaGFydC1jYWxlbmRhci1jb250YWluZXJcIlxyXG4gICAgICByZWY9XCJjaGFydENhbGVuZGFyQ29udGFpbmVyXCJcclxuICAgICAgOnN0eWxlPVwie1xyXG4gICAgICAgIC4uLnJvb3Quc3R5bGVbJ2NoYXJ0LWNhbGVuZGFyLWNvbnRhaW5lciddLFxyXG4gICAgICAgIGhlaWdodDogcm9vdC5zdGF0ZS5vcHRpb25zLmNhbGVuZGFyLmhlaWdodCArICdweCcsXHJcbiAgICAgICAgJ21hcmdpbi1ib3R0b20nOiByb290LnN0YXRlLm9wdGlvbnMuY2FsZW5kYXIuZ2FwICsgJ3B4J1xyXG4gICAgICB9XCJcclxuICAgID5cclxuICAgICAgPGNhbGVuZGFyPjwvY2FsZW5kYXI+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXZcclxuICAgICAgY2xhc3M9XCJnYW50dC1lbGFzdGljX19jaGFydC1ncmFwaC1jb250YWluZXJcIlxyXG4gICAgICByZWY9XCJjaGFydEdyYXBoQ29udGFpbmVyXCJcclxuICAgICAgOnN0eWxlPVwie1xyXG4gICAgICAgIC4uLnJvb3Quc3R5bGVbJ2NoYXJ0LWdyYXBoLWNvbnRhaW5lciddLFxyXG4gICAgICAgIGhlaWdodDogcm9vdC5zdGF0ZS5vcHRpb25zLmhlaWdodCAtIHJvb3Quc3RhdGUub3B0aW9ucy5jYWxlbmRhci5oZWlnaHQgLSBoaWRkZW5Sb3dzSGVpZ2h0ICsgJ3B4J1xyXG4gICAgICB9XCJcclxuICAgID5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIDpzdHlsZT1cIntcclxuICAgICAgICAgIC4uLnJvb3Quc3R5bGVbJ2NoYXJ0LWFyZWEnXSxcclxuICAgICAgICAgIHdpZHRoOiByb290LnN0YXRlLm9wdGlvbnMud2lkdGggKyAncHgnLFxyXG4gICAgICAgICAgaGVpZ2h0OiByb290LnN0YXRlLm9wdGlvbnMucm93c0hlaWdodCAtIGhpZGRlblJvd3NIZWlnaHQgKyAncHgnXHJcbiAgICAgICAgfVwiXHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzcz1cImdhbnR0LWVsYXN0aWNfX2NoYXJ0LWdyYXBoXCJcclxuICAgICAgICAgIHJlZj1cImNoYXJ0R3JhcGhcIlxyXG4gICAgICAgICAgOnN0eWxlPVwieyAuLi5yb290LnN0eWxlWydjaGFydC1ncmFwaCddLCBoZWlnaHQ6ICcxMDAlJyB9XCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgIGNsYXNzPVwiZ2FudHQtZWxhc3RpY19fY2hhcnQtZ3JhcGgtc3ZnXCJcclxuICAgICAgICAgICAgOnN0eWxlPVwieyAuLi5yb290LnN0eWxlWydjaGFydC1ncmFwaC1zdmcnXSB9XCJcclxuICAgICAgICAgICAgcmVmPVwiY2hhcnRHcmFwaFN2Z1wiXHJcbiAgICAgICAgICAgIHg9XCIwXCJcclxuICAgICAgICAgICAgeT1cIjBcIlxyXG4gICAgICAgICAgICA6d2lkdGg9XCJyb290LnN0YXRlLm9wdGlvbnMud2lkdGggKyAncHgnXCJcclxuICAgICAgICAgICAgOmhlaWdodD1cInJvb3Quc3RhdGUub3B0aW9ucy5hbGxWaXNpYmxlVGFza3NIZWlnaHQgLSBoaWRkZW5Sb3dzSGVpZ2h0ICsgJ3B4J1wiXHJcbiAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGF5cy1oaWdobGlnaHQ+PC9kYXlzLWhpZ2hsaWdodD5cclxuICAgICAgICAgICAgPGdyaWQ+PC9ncmlkPlxyXG4gICAgICAgICAgICA8ZGVwZW5kZW5jeS1saW5lcyA6dGFza3M9XCJyb290LnZpc2libGVUYXNrc1wiPjwvZGVwZW5kZW5jeS1saW5lcz5cclxuICAgICAgICAgICAgPGdcclxuICAgICAgICAgICAgICBjbGFzcz1cImdhbnR0LWVsYXN0aWNfX2NoYXJ0LXJvdy13cmFwcGVyXCJcclxuICAgICAgICAgICAgICA6c3R5bGU9XCJ7IC4uLnJvb3Quc3R5bGVbJ2NoYXJ0LXJvdy13cmFwcGVyJ10gfVwiXHJcbiAgICAgICAgICAgICAgdi1mb3I9XCJ0YXNrIGluIHJvb3QudmlzaWJsZVRhc2tzXCJcclxuICAgICAgICAgICAgICA6dGFzaz1cInRhc2tcIlxyXG4gICAgICAgICAgICAgIDprZXk9XCJ0YXNrLmlkXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxjb21wb25lbnQgOnRhc2s9XCJ0YXNrXCIgOmlzPVwidGFzay50eXBlXCI+PC9jb21wb25lbnQ+XHJcbiAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IEdyaWQgZnJvbSAnLi9HcmlkLnZ1ZSc7XHJcbmltcG9ydCBEYXlzSGlnaGxpZ2h0IGZyb20gJy4vRGF5c0hpZ2hsaWdodC52dWUnO1xyXG5pbXBvcnQgQ2FsZW5kYXIgZnJvbSAnLi4vQ2FsZW5kYXIvQ2FsZW5kYXIudnVlJztcclxuaW1wb3J0IERlcGVuZGVuY3lMaW5lcyBmcm9tICcuL0RlcGVuZGVuY3lMaW5lcy52dWUnO1xyXG5pbXBvcnQgVGFzayBmcm9tICcuL1Jvdy9UYXNrLnZ1ZSc7XHJcbmltcG9ydCBNaWxlc3RvbmUgZnJvbSAnLi9Sb3cvTWlsZXN0b25lLnZ1ZSc7XHJcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vUm93L1Byb2plY3QudnVlJztcclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5hbWU6ICdDaGFydCcsXHJcbiAgY29tcG9uZW50czoge1xyXG4gICAgR3JpZCxcclxuICAgIERlcGVuZGVuY3lMaW5lcyxcclxuICAgIENhbGVuZGFyLFxyXG4gICAgVGFzayxcclxuICAgIE1pbGVzdG9uZSxcclxuICAgIFByb2plY3QsXHJcbiAgICBEYXlzSGlnaGxpZ2h0XHJcbiAgfSxcclxuICBpbmplY3Q6IFsncm9vdCddLFxyXG4gIGRhdGEoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBtb3Zpbmc6IGZhbHNlXHJcbiAgICB9O1xyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogTW91bnRlZFxyXG4gICAqL1xyXG4gIG1vdW50ZWQoKSB7XHJcbiAgICB0aGlzLnJvb3Quc3RhdGUucmVmcy5jaGFydCA9IHRoaXMuJHJlZnMuY2hhcnQ7XHJcbiAgICB0aGlzLnJvb3Quc3RhdGUucmVmcy5jaGFydENhbGVuZGFyQ29udGFpbmVyID0gdGhpcy4kcmVmcy5jaGFydENhbGVuZGFyQ29udGFpbmVyO1xyXG4gICAgdGhpcy5yb290LnN0YXRlLnJlZnMuY2hhcnRHcmFwaENvbnRhaW5lciA9IHRoaXMuJHJlZnMuY2hhcnRHcmFwaENvbnRhaW5lcjtcclxuICAgIHRoaXMucm9vdC5zdGF0ZS5yZWZzLmNoYXJ0R3JhcGggPSB0aGlzLiRyZWZzLmNoYXJ0R3JhcGg7XHJcbiAgICB0aGlzLnJvb3Quc3RhdGUucmVmcy5jaGFydEdyYXBoU3ZnID0gdGhpcy4kcmVmcy5jaGFydEdyYXBoU3ZnO1xyXG4gIH0sXHJcblxyXG4gIGNvbXB1dGVkOiB7XHJcbiAgICAvKipcclxuICAgICAqIEdldCBoaWRkZW4gcm93cyBoZWlnaHRcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAgICovXHJcbiAgICBoaWRkZW5Sb3dzSGVpZ2h0KCkge1xyXG4gICAgICBsZXQgaCA9IDA7XHJcbiAgICAgIHRoaXMucm9vdC52aXNpYmxlVGFza3MuZm9yRWFjaCh2ID0+IHtcclxuICAgICAgICBpZiAodi5zaG93VGFza0xpc3QgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICBoICs9IHYuaGVpZ2h0ICsgMTQgfHwgMDtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gaDtcclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICAqIEdldCB2aWV3IGJveFxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XHJcbiAgICAgKi9cclxuICAgIGdldFZpZXdCb3goKSB7XHJcbiAgICAgIHJldHVybiBgMCAwICR7dGhpcy5yb290LnN0YXRlLm9wdGlvbnMud2lkdGh9ICR7dGhpcy5yb290LnN0YXRlLm9wdGlvbnMuYWxsVmlzaWJsZVRhc2tzSGVpZ2h0IC1cclxuICAgICAgICB0aGlzLmhpZGRlblJvd3NIZWlnaHR9YDtcclxuICAgIH1cclxuICB9XHJcbn07XHJcbjwvc2NyaXB0PlxyXG4iLCI8IS0tXHJcbi8qKlxyXG4gKiBAZmlsZW92ZXJ2aWV3IERheXMgaGlnaGxpZ2h0IGNvbXBvbmVudFxyXG4gKiBAbGljZW5zZSBNSVRcclxuICogQGF1dGhvciBSYWZhbCBQb3NwaWVjaCA8bmV1cm9uZXQuaW9AZ21haWwuY29tPlxyXG4gKiBAcGFja2FnZSBHYW50dEVsYXN0aWNcclxuICovXHJcbi0tPlxyXG5cclxuPHRlbXBsYXRlPlxyXG4gIDxnXHJcbiAgICBjbGFzcz1cImdhbnR0LWVsYXN0aWNfX2NoYXJ0LWRheXMtaGlnaGxpZ2h0LWNvbnRhaW5lclwiXHJcbiAgICA6c3R5bGU9XCJ7IC4uLnJvb3Quc3R5bGVbJ2NoYXJ0LWRheXMtaGlnaGxpZ2h0LWNvbnRhaW5lciddIH1cIlxyXG4gICAgdi1pZj1cInNob3dXb3JraW5nRGF5c1wiXHJcbiAgPlxyXG4gICAgPHJlY3RcclxuICAgICAgY2xhc3M9XCJnYW50dC1lbGFzdGljX19jaGFydC1kYXlzLWhpZ2hsaWdodC1yZWN0XCJcclxuICAgICAgdi1mb3I9XCJkYXkgaW4gd29ya2luZ0RheXNcIlxyXG4gICAgICA6a2V5PVwiZ2V0S2V5KGRheSlcIlxyXG4gICAgICA6eD1cImRheS5vZmZzZXQucHhcIlxyXG4gICAgICB5PVwiMFwiXHJcbiAgICAgIDp3aWR0aD1cImRheS53aWR0aC5weFwiXHJcbiAgICAgIGhlaWdodD1cIjEwMCVcIlxyXG4gICAgICA6c3R5bGU9XCJ7IC4uLnJvb3Quc3R5bGVbJ2NoYXJ0LWRheXMtaGlnaGxpZ2h0LXJlY3QnXSB9XCJcclxuICAgID48L3JlY3Q+XHJcbiAgPC9nPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IGRheWpzIGZyb20gJ2RheWpzJztcclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5hbWU6ICdEYXlzSGlnaGxpZ2h0JyxcclxuICBpbmplY3Q6IFsncm9vdCddLFxyXG4gIGRhdGEoKSB7XHJcbiAgICByZXR1cm4ge307XHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICAvKipcclxuICAgICAqIEdldCBrZXlcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZGF5XHJcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfSBrZXkgaWRlaW50aWZpZXIgZm9yIGxvb3BcclxuICAgICAqL1xyXG4gICAgZ2V0S2V5KGRheSkge1xyXG4gICAgICByZXR1cm4gZGF5anMoZGF5LnRpbWUpLmZvcm1hdCgnWVlZWS1NTS1ERCcpO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgY29tcHV0ZWQ6IHtcclxuICAgIC8qKlxyXG4gICAgICogR2V0IHdvcmtpbmcgZGF5c1xyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHthcnJheX1cclxuICAgICAqL1xyXG4gICAgd29ya2luZ0RheXMoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy50aW1lcy5zdGVwcy5maWx0ZXIoc3RlcCA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLmNhbGVuZGFyLndvcmtpbmdEYXlzLmluZGV4T2YoZGF5anMoc3RlcC50aW1lKS5kYXkoKSkgPT09IC0xO1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTaG93IHdvcmtpbmcgZGF5cz9cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7Ym9vbH1cclxuICAgICAqL1xyXG4gICAgc2hvd1dvcmtpbmdEYXlzKCkge1xyXG4gICAgICBjb25zdCBjYWxlbmRhciA9IHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLmNhbGVuZGFyO1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgdHlwZW9mIGNhbGVuZGFyLndvcmtpbmdEYXlzICE9PSAndW5kZWZpbmVkJyAmJlxyXG4gICAgICAgIEFycmF5LmlzQXJyYXkoY2FsZW5kYXIud29ya2luZ0RheXMpICYmXHJcbiAgICAgICAgY2FsZW5kYXIud29ya2luZ0RheXMubGVuZ3RoXHJcbiAgICAgICkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcbjwvc2NyaXB0PlxyXG4iLCI8IS0tXHJcbi8qKlxyXG4gKiBAZmlsZW92ZXJ2aWV3IERlcGVuZGVuY3lMaW5lcyBjb21wb25lbnRcclxuICogQGxpY2Vuc2UgTUlUXHJcbiAqIEBhdXRob3IgUmFmYWwgUG9zcGllY2ggPG5ldXJvbmV0LmlvQGdtYWlsLmNvbT5cclxuICogQHBhY2thZ2UgR2FudHRFbGFzdGljXHJcbiAqL1xyXG4tLT5cclxuPHRlbXBsYXRlPlxyXG4gIDxzdmdcclxuICAgIHg9XCIwXCJcclxuICAgIHk9XCIwXCJcclxuICAgIHdpZHRoPVwiMTAwJVwiXHJcbiAgICBoZWlnaHQ9XCIxMDAlXCJcclxuICAgIGNsYXNzPVwiZ2FudHQtZWxhc3RpY19fY2hhcnQtZGVwZW5kZW5jeS1saW5lcy1jb250YWluZXJcIlxyXG4gICAgOnN0eWxlPVwieyAuLi5yb290LnN0eWxlWydjaGFydC1kZXBlbmRlbmN5LWxpbmVzLWNvbnRhaW5lciddIH1cIlxyXG4gID5cclxuICAgIDxnIHYtZm9yPVwidGFzayBpbiBkZXBlbmRlbmN5VGFza3NcIiA6a2V5PVwidGFzay5pZFwiIDp0YXNrPVwidGFza1wiPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGNsYXNzPVwiZ2FudHQtZWxhc3RpY19fY2hhcnQtZGVwZW5kZW5jeS1saW5lcy1wYXRoXCJcclxuICAgICAgICA6c3R5bGU9XCJ7IC4uLnJvb3Quc3R5bGVbJ2NoYXJ0LWRlcGVuZGVuY3ktbGluZXMtcGF0aCddLCAuLi50YXNrLnN0eWxlWydjaGFydC1kZXBlbmRlbmN5LWxpbmVzLXBhdGgnXSwgLi4udGFzay5zdHlsZVsnY2hhcnQtZGVwZW5kZW5jeS1saW5lcy1wYXRoLScgKyBkZXBlbmRlbmN5TGluZS50YXNrX2lkXSB9XCJcclxuICAgICAgICB2LWZvcj1cImRlcGVuZGVuY3lMaW5lIGluIHRhc2suZGVwZW5kZW5jeUxpbmVzXCJcclxuICAgICAgICA6a2V5PVwiZGVwZW5kZW5jeUxpbmUuaWRcIlxyXG4gICAgICAgIDp0YXNrPVwidGFza1wiXHJcbiAgICAgICAgOmQ9XCJkZXBlbmRlbmN5TGluZS5wb2ludHNcIlxyXG4gICAgICA+PC9wYXRoPlxyXG4gICAgPC9nPlxyXG4gIDwvc3ZnPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5hbWU6ICdEZXBlbmRlbmN5TGluZXMnLFxyXG4gIGluamVjdDogWydyb290J10sXHJcbiAgcHJvcHM6IFsndGFza3MnXSxcclxuICBkYXRhKCkge1xyXG4gICAgcmV0dXJuIHt9O1xyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgcGF0aCBwb2ludHNcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge2FueX0gZnJvbVRhc2tJZFxyXG4gICAgICogQHBhcmFtIHthbnl9IHRvVGFza0lkXHJcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxyXG4gICAgICovXHJcbiAgICBnZXRQb2ludHMoZnJvbVRhc2tJZCwgdG9UYXNrSWQpIHtcclxuICAgICAgY29uc3QgZnJvbVRhc2sgPSB0aGlzLnJvb3QuZ2V0VGFzayhmcm9tVGFza0lkKTtcclxuICAgICAgY29uc3QgdG9UYXNrID0gdGhpcy5yb290LmdldFRhc2sodG9UYXNrSWQpO1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgZnJvbVRhc2sgPT09IG51bGwgfHxcclxuICAgICAgICB0b1Rhc2sgPT09IG51bGwgfHxcclxuICAgICAgICAhdGhpcy5yb290LmlzVGFza1Zpc2libGUodG9UYXNrKSB8fFxyXG4gICAgICAgICF0aGlzLnJvb3QuaXNUYXNrVmlzaWJsZShmcm9tVGFzaylcclxuICAgICAgKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3Qgc3RhcnRYID0gZnJvbVRhc2sueCArIGZyb21UYXNrLndpZHRoO1xyXG4gICAgICBjb25zdCBzdGFydFkgPSBmcm9tVGFzay55ICsgZnJvbVRhc2suaGVpZ2h0IC8gMjtcclxuICAgICAgY29uc3Qgc3RvcFggPSB0b1Rhc2sueDtcclxuICAgICAgY29uc3Qgc3RvcFkgPSB0b1Rhc2sueSArIHRvVGFzay5oZWlnaHQgLyAyO1xyXG4gICAgICBjb25zdCBkaXN0YW5jZVggPSBzdG9wWCAtIHN0YXJ0WDtcclxuICAgICAgbGV0IGRpc3RhbmNlWTtcclxuICAgICAgbGV0IHlNdWx0aXBsaWVyID0gMTtcclxuICAgICAgaWYgKHN0b3BZID49IHN0YXJ0WSkge1xyXG4gICAgICAgIGRpc3RhbmNlWSA9IHN0b3BZIC0gc3RhcnRZO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRpc3RhbmNlWSA9IHN0YXJ0WSAtIHN0b3BZO1xyXG4gICAgICAgIHlNdWx0aXBsaWVyID0gLTE7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3Qgb2Zmc2V0ID0gMTA7XHJcbiAgICAgIGNvbnN0IHJvdW5kbmVzcyA9IDQ7XHJcbiAgICAgIGNvbnN0IGlzQmVmb3JlID0gZGlzdGFuY2VYIDw9IG9mZnNldCArIHJvdW5kbmVzcztcclxuICAgICAgbGV0IHBvaW50cyA9IGBNICR7c3RhcnRYfSAke3N0YXJ0WX1cclxuICAgICAgICAgIEwgJHtzdGFydFggKyBvZmZzZXR9LCR7c3RhcnRZfSBgO1xyXG4gICAgICBpZiAoaXNCZWZvcmUpIHtcclxuICAgICAgICBwb2ludHMgKz0gYFEgJHtzdGFydFggKyBvZmZzZXQgKyByb3VuZG5lc3N9LCR7c3RhcnRZfSAke3N0YXJ0WCArIG9mZnNldCArIHJvdW5kbmVzc30sJHtzdGFydFkgK1xyXG4gICAgICAgICAgcm91bmRuZXNzICogeU11bHRpcGxpZXJ9XHJcbiAgICAgICAgICAgIEwgJHtzdGFydFggKyBvZmZzZXQgKyByb3VuZG5lc3N9LCR7c3RhcnRZICsgKGRpc3RhbmNlWSAqIHlNdWx0aXBsaWVyKSAvIDIgLSByb3VuZG5lc3MgKiB5TXVsdGlwbGllcn1cclxuICAgICAgICAgICAgUSAke3N0YXJ0WCArIG9mZnNldCArIHJvdW5kbmVzc30sJHtzdGFydFkgKyAoZGlzdGFuY2VZICogeU11bHRpcGxpZXIpIC8gMn0gJHtzdGFydFggKyBvZmZzZXR9LCR7c3RhcnRZICtcclxuICAgICAgICAgIChkaXN0YW5jZVkgKiB5TXVsdGlwbGllcikgLyAyfVxyXG4gICAgICAgICAgICBMICR7c3RhcnRYIC0gb2Zmc2V0ICsgZGlzdGFuY2VYfSwke3N0YXJ0WSArIChkaXN0YW5jZVkgKiB5TXVsdGlwbGllcikgLyAyfVxyXG4gICAgICAgICAgICBRICR7c3RhcnRYIC0gb2Zmc2V0ICsgZGlzdGFuY2VYIC0gcm91bmRuZXNzfSwke3N0YXJ0WSArIChkaXN0YW5jZVkgKiB5TXVsdGlwbGllcikgLyAyfSAke3N0YXJ0WCAtXHJcbiAgICAgICAgICBvZmZzZXQgK1xyXG4gICAgICAgICAgZGlzdGFuY2VYIC1cclxuICAgICAgICAgIHJvdW5kbmVzc30sJHtzdGFydFkgKyAoZGlzdGFuY2VZICogeU11bHRpcGxpZXIpIC8gMiArIHJvdW5kbmVzcyAqIHlNdWx0aXBsaWVyfVxyXG4gICAgICAgICAgICBMICR7c3RhcnRYIC0gb2Zmc2V0ICsgZGlzdGFuY2VYIC0gcm91bmRuZXNzfSwke3N0b3BZIC0gcm91bmRuZXNzICogeU11bHRpcGxpZXJ9XHJcbiAgICAgICAgICAgIFEgJHtzdGFydFggLSBvZmZzZXQgKyBkaXN0YW5jZVggLSByb3VuZG5lc3N9LCR7c3RvcFl9ICR7c3RhcnRYIC0gb2Zmc2V0ICsgZGlzdGFuY2VYfSwke3N0b3BZfVxyXG4gICAgICAgICAgICBMICR7c3RvcFh9LCR7c3RvcFl9YDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBwb2ludHMgKz0gYEwgJHtzdGFydFggKyBkaXN0YW5jZVggLyAyIC0gcm91bmRuZXNzfSwke3N0YXJ0WX1cclxuICAgICAgICAgICAgUSAke3N0YXJ0WCArIGRpc3RhbmNlWCAvIDJ9LCR7c3RhcnRZfSAke3N0YXJ0WCArIGRpc3RhbmNlWCAvIDJ9LCR7c3RhcnRZICsgcm91bmRuZXNzICogeU11bHRpcGxpZXJ9XHJcbiAgICAgICAgICAgIEwgJHtzdGFydFggKyBkaXN0YW5jZVggLyAyfSwke3N0b3BZIC0gcm91bmRuZXNzICogeU11bHRpcGxpZXJ9XHJcbiAgICAgICAgICAgIFEgJHtzdGFydFggKyBkaXN0YW5jZVggLyAyfSwke3N0b3BZfSAke3N0YXJ0WCArIGRpc3RhbmNlWCAvIDIgKyByb3VuZG5lc3N9LCR7c3RvcFl9XHJcbiAgICAgICAgICAgIEwgJHtzdG9wWH0sJHtzdG9wWX1gO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBwb2ludHM7XHJcbiAgICB9XHJcbiAgfSxcclxuICBjb21wdXRlZDoge1xyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGFza3Mgd2hpY2ggYXJlIGRlcGVuZGVudCBvbiBvdGhlciB0YXNrc1xyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHthcnJheX1cclxuICAgICAqL1xyXG4gICAgZGVwZW5kZW5jeVRhc2tzKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy50YXNrc1xyXG4gICAgICAgIC5maWx0ZXIodGFzayA9PiB0eXBlb2YgdGFzay5kZXBlbmRlbnRPbiAhPT0gJ3VuZGVmaW5lZCcpXHJcbiAgICAgICAgLm1hcCh0YXNrID0+IHtcclxuICAgICAgICAgIHRhc2suZGVwZW5kZW5jeUxpbmVzID0gdGFzay5kZXBlbmRlbnRPbi5tYXAoaWQgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4geyBwb2ludHM6IHRoaXMuZ2V0UG9pbnRzKGlkLCB0YXNrLmlkKSwgdGFza19pZDogaWQgfTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgcmV0dXJuIHRhc2s7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuZmlsdGVyKHRhc2sgPT4gdGFzay5kZXBlbmRlbmN5TGluZXMucG9pbnRzICE9PSBudWxsKTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcbjwvc2NyaXB0PlxyXG4iLCI8IS0tXHJcbi8qKlxyXG4gKiBAZmlsZW92ZXJ2aWV3IEdyaWQgY29tcG9uZW50XHJcbiAqIEBsaWNlbnNlIE1JVFxyXG4gKiBAYXV0aG9yIFJhZmFsIFBvc3BpZWNoIDxuZXVyb25ldC5pb0BnbWFpbC5jb20+XHJcbiAqIEBwYWNrYWdlIEdhbnR0RWxhc3RpY1xyXG4gKi9cclxuLS0+XHJcbjx0ZW1wbGF0ZT5cclxuICA8c3ZnXHJcbiAgICBjbGFzcz1cImdhbnR0LWVsYXN0aWNfX2dyaWQtbGluZXMtd3JhcHBlclwiXHJcbiAgICA6c3R5bGU9XCJ7IC4uLnJvb3Quc3R5bGVbJ2dyaWQtbGluZXMtd3JhcHBlciddIH1cIlxyXG4gICAgcmVmPVwiY2hhcnRcIlxyXG4gICAgeD1cIjBcIlxyXG4gICAgeT1cIjBcIlxyXG4gICAgOndpZHRoPVwicm9vdC5zdGF0ZS5vcHRpb25zLndpZHRoXCJcclxuICAgIDpoZWlnaHQ9XCJyb290LnN0YXRlLm9wdGlvbnMuYWxsVmlzaWJsZVRhc2tzSGVpZ2h0XCJcclxuICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gID5cclxuICAgIDxnIGNsYXNzPVwiZ2FudHQtZWxhc3RpY19fZ3JpZC1saW5lc1wiIDpzdHlsZT1cInsgLi4ucm9vdC5zdHlsZVsnZ3JpZC1saW5lcyddIH1cIj5cclxuICAgICAgPGxpbmVcclxuICAgICAgICBjbGFzcz1cImdhbnR0LWVsYXN0aWNfX2dyaWQtbGluZS1ob3Jpem9udGFsXCJcclxuICAgICAgICA6c3R5bGU9XCJ7IC4uLnJvb3Quc3R5bGVbJ2dyaWQtbGluZS1ob3Jpem9udGFsJ10gfVwiXHJcbiAgICAgICAgdi1mb3I9XCJsaW5lIGluIGhvcml6b250YWxMaW5lc1wiXHJcbiAgICAgICAgOmtleT1cImxpbmUua2V5XCJcclxuICAgICAgICA6eDE9XCJsaW5lLngxXCJcclxuICAgICAgICA6eTE9XCJsaW5lLnkxXCJcclxuICAgICAgICA6eDI9XCJsaW5lLngyXCJcclxuICAgICAgICA6eTI9XCJsaW5lLnkyXCJcclxuICAgICAgPjwvbGluZT5cclxuICAgICAgPGxpbmVcclxuICAgICAgICBjbGFzcz1cImdhbnR0LWVsYXN0aWNfX2dyaWQtbGluZS12ZXJ0aWNhbFwiXHJcbiAgICAgICAgOnN0eWxlPVwieyAuLi5yb290LnN0eWxlWydncmlkLWxpbmUtdmVydGljYWwnXSB9XCJcclxuICAgICAgICB2LWZvcj1cImxpbmUgaW4gdmVydGljYWxMaW5lc1wiXHJcbiAgICAgICAgOmtleT1cImxpbmUua2V5XCJcclxuICAgICAgICA6eDE9XCJsaW5lLngxXCJcclxuICAgICAgICA6eTE9XCJsaW5lLnkxXCJcclxuICAgICAgICA6eDI9XCJsaW5lLngyXCJcclxuICAgICAgICA6eTI9XCJsaW5lLnkyXCJcclxuICAgICAgPjwvbGluZT5cclxuICAgICAgPGxpbmVcclxuICAgICAgICBjbGFzcz1cImdhbnR0LWVsYXN0aWNfX2dyaWQtbGluZS10aW1lXCJcclxuICAgICAgICA6c3R5bGU9XCJ7IC4uLnJvb3Quc3R5bGVbJ2dyaWQtbGluZS10aW1lJ10gfVwiXHJcbiAgICAgICAgOngxPVwidGltZUxpbmVQb3NpdGlvbi54XCJcclxuICAgICAgICA6eTE9XCJ0aW1lTGluZVBvc2l0aW9uLnkxXCJcclxuICAgICAgICA6eDI9XCJ0aW1lTGluZVBvc2l0aW9uLnhcIlxyXG4gICAgICAgIDp5Mj1cInRpbWVMaW5lUG9zaXRpb24ueTJcIlxyXG4gICAgICA+PC9saW5lPlxyXG4gICAgPC9nPlxyXG4gIDwvc3ZnPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5hbWU6ICdHcmlkJyxcclxuICBpbmplY3Q6IFsncm9vdCddLFxyXG4gIGRhdGEoKSB7XHJcbiAgICByZXR1cm4ge307XHJcbiAgfSxcclxuICAvKipcclxuICAgKiBDcmVhdGVkXHJcbiAgICovXHJcbiAgY3JlYXRlZCgpIHtcclxuICAgIHRoaXMucm9vdC4kb24oJ3JlY2VudGVyUG9zaXRpb24nLCB0aGlzLnJlY2VudGVyUG9zaXRpb24pO1xyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIE1vdW50ZWRcclxuICAgKi9cclxuICBtb3VudGVkKCkge1xyXG4gICAgdGhpcy4kbmV4dFRpY2soKCkgPT4ge1xyXG4gICAgICB0aGlzLiRuZXh0VGljaygoKSA9PiB7XHJcbiAgICAgICAgLy8gYmVjYXVzZSBvZiBzdHVwaWQgc2xpZGVyIDovXHJcbiAgICAgICAgdGhpcy5yb290LnNjcm9sbFRvVGltZSh0aGlzLnRpbWVMaW5lUG9zaXRpb24udGltZSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgbWV0aG9kczoge1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZWNlbnRlciBwb3NpdGlvbiAtIGdvIHRvIGN1cnJlbnQgdGltZSBsaW5lXHJcbiAgICAgKi9cclxuICAgIHJlY2VudGVyUG9zaXRpb24oKSB7XHJcbiAgICAgIHRoaXMucm9vdC5zY3JvbGxUb1RpbWUodGhpcy50aW1lTGluZVBvc2l0aW9uLnRpbWUpO1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIGNvbXB1dGVkOiB7XHJcbiAgICAvKipcclxuICAgICAqIEdlbmVyYXRlIHZlcnRpY2FsIGxpbmVzIG9mIHRoZSBncmlkXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge2FycmF5fVxyXG4gICAgICovXHJcbiAgICB2ZXJ0aWNhbExpbmVzKCkge1xyXG4gICAgICBsZXQgbGluZXMgPSBbXTtcclxuICAgICAgY29uc3Qgc3RhdGUgPSB0aGlzLnJvb3Quc3RhdGU7XHJcbiAgICAgIHN0YXRlLm9wdGlvbnMudGltZXMuc3RlcHMuZm9yRWFjaChzdGVwID0+IHtcclxuICAgICAgICBpZiAodGhpcy5yb290LmlzSW5zaWRlVmlld1BvcnQoc3RlcC5vZmZzZXQucHgsIDEpKSB7XHJcbiAgICAgICAgICBsaW5lcy5wdXNoKHtcclxuICAgICAgICAgICAga2V5OiBzdGVwLnRpbWUsXHJcbiAgICAgICAgICAgIHgxOiBzdGVwLm9mZnNldC5weCxcclxuICAgICAgICAgICAgeTE6IDAsXHJcbiAgICAgICAgICAgIHgyOiBzdGVwLm9mZnNldC5weCxcclxuICAgICAgICAgICAgeTI6XHJcbiAgICAgICAgICAgICAgc3RhdGUudGFza3MubGVuZ3RoICogKHN0YXRlLm9wdGlvbnMucm93LmhlaWdodCArIHN0YXRlLm9wdGlvbnMuY2hhcnQuZ3JpZC5ob3Jpem9udGFsLmdhcCAqIDIpICtcclxuICAgICAgICAgICAgICB0aGlzLnJvb3Quc3R5bGVbJ2dyaWQtbGluZS12ZXJ0aWNhbCddWydzdHJva2Utd2lkdGgnXVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIGxpbmVzO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEdlbmVyYXRlIGhvcml6b250YWwgbGluZXMgb2YgdGhlIGdyaWRcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7YXJyYXl9XHJcbiAgICAgKi9cclxuICAgIGhvcml6b250YWxMaW5lcygpIHtcclxuICAgICAgbGV0IGxpbmVzID0gW107XHJcbiAgICAgIGNvbnN0IHN0YXRlID0gdGhpcy5yb290LnN0YXRlLm9wdGlvbnM7XHJcbiAgICAgIGxldCB0YXNrcyA9IHRoaXMucm9vdC52aXNpYmxlVGFza3M7XHJcbiAgICAgIGZvciAobGV0IGluZGV4ID0gMCwgbGVuID0gdGFza3MubGVuZ3RoOyBpbmRleCA8PSBsZW47IGluZGV4KyspIHtcclxuICAgICAgICBjb25zdCB5ID1cclxuICAgICAgICAgIGluZGV4ICogKHN0YXRlLnJvdy5oZWlnaHQgKyBzdGF0ZS5jaGFydC5ncmlkLmhvcml6b250YWwuZ2FwICogMikgK1xyXG4gICAgICAgICAgdGhpcy5yb290LnN0eWxlWydncmlkLWxpbmUtdmVydGljYWwnXVsnc3Ryb2tlLXdpZHRoJ10gLyAyO1xyXG4gICAgICAgIGxpbmVzLnB1c2goe1xyXG4gICAgICAgICAga2V5OiAnaGwnICsgaW5kZXgsXHJcbiAgICAgICAgICB4MTogMCxcclxuICAgICAgICAgIHkxOiB5LFxyXG4gICAgICAgICAgeDI6ICcxMDAlJyxcclxuICAgICAgICAgIHkyOiB5XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGxpbmVzO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIENoZWNrIGlmIHNwZWNpZmllZCBsaW5lIGlzIGluc2lkZSB2aWV3cG9ydCAodmlzaWJsZSlcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7ZnVuY3Rpb259XHJcbiAgICAgKi9cclxuICAgIGluVmlld1BvcnQoKSB7XHJcbiAgICAgIHJldHVybiBsaW5lID0+IHtcclxuICAgICAgICBjb25zdCBzdGF0ZSA9IHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zO1xyXG4gICAgICAgIHJldHVybiBsaW5lLngxID49IHN0YXRlLnNjcm9sbC5jaGFydC5sZWZ0ICYmIGxpbmUueDEgPD0gc3RhdGUuc2Nyb2xsLmNoYXJ0LnJpZ2h0O1xyXG4gICAgICB9O1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldCBjdXJyZW50IHRpbWUgbGluZSBwb3NpdGlvblxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9XHJcbiAgICAgKi9cclxuICAgIHRpbWVMaW5lUG9zaXRpb24oKSB7XHJcbiAgICAgIGNvbnN0IGQgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICBjb25zdCBjdXJyZW50ID0gZC5nZXRUaW1lKCk7XHJcbiAgICAgIGNvbnN0IGN1cnJlbnRPZmZzZXQgPSB0aGlzLnJvb3QudGltZVRvUGl4ZWxPZmZzZXRYKGN1cnJlbnQpO1xyXG4gICAgICBjb25zdCB0aW1lTGluZSA9IHtcclxuICAgICAgICB4OiAwLFxyXG4gICAgICAgIHkxOiAwLFxyXG4gICAgICAgIHkyOiAnMTAwJScsXHJcbiAgICAgICAgZGF0ZVRpbWU6ICcnLFxyXG4gICAgICAgIHRpbWU6IGN1cnJlbnRcclxuICAgICAgfTtcclxuICAgICAgdGltZUxpbmUueCA9IGN1cnJlbnRPZmZzZXQ7XHJcbiAgICAgIHRpbWVMaW5lLmRhdGVUaW1lID0gZC50b0xvY2FsZURhdGVTdHJpbmcoKTtcclxuICAgICAgcmV0dXJuIHRpbWVMaW5lO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuPC9zY3JpcHQ+XHJcbiIsIjwhLS1cclxuLyoqXHJcbiAqIEBmaWxlb3ZlcnZpZXcgUHJvZ3Jlc3NCYXIgY29tcG9uZW50XHJcbiAqIEBsaWNlbnNlIE1JVFxyXG4gKiBAYXV0aG9yIFJhZmFsIFBvc3BpZWNoIDxuZXVyb25ldC5pb0BnbWFpbC5jb20+XHJcbiAqIEBwYWNrYWdlIEdhbnR0RWxhc3RpY1xyXG4gKi9cclxuLS0+XHJcbjx0ZW1wbGF0ZT5cclxuICA8Z1xyXG4gICAgY2xhc3M9XCJnYW50dC1lbGFzdGljX19jaGFydC1yb3ctcHJvZ3Jlc3MtYmFyLXdyYXBwZXJcIlxyXG4gICAgOnN0eWxlPVwieyAuLi5yb290LnN0eWxlWydjaGFydC1yb3ctcHJvZ3Jlc3MtYmFyLXdyYXBwZXInXSwgLi4udGFzay5zdHlsZVsnY2hhcnQtcm93LXByb2dyZXNzLWJhci13cmFwcGVyJ10gfVwiXHJcbiAgPlxyXG4gICAgPGRlZnM+XHJcbiAgICAgIDxwYXR0ZXJuXHJcbiAgICAgICAgaWQ9XCJkaWFnb25hbEhhdGNoXCJcclxuICAgICAgICA6d2lkdGg9XCJyb290LnN0YXRlLm9wdGlvbnMuY2hhcnQucHJvZ3Jlc3Mud2lkdGhcIlxyXG4gICAgICAgIDpoZWlnaHQ9XCJyb290LnN0YXRlLm9wdGlvbnMuY2hhcnQucHJvZ3Jlc3Mud2lkdGhcIlxyXG4gICAgICAgIHBhdHRlcm5UcmFuc2Zvcm09XCJyb3RhdGUoNDUgMCAwKVwiXHJcbiAgICAgICAgcGF0dGVyblVuaXRzPVwidXNlclNwYWNlT25Vc2VcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGxpbmVcclxuICAgICAgICAgIGNsYXNzPVwiY2hhcnQtcm93LXByb2dyZXNzLWJhci1saW5lXCJcclxuICAgICAgICAgIDpzdHlsZT1cInsgLi4ucm9vdC5zdHlsZVsnY2hhcnQtcm93LXByb2dyZXNzLWJhci1saW5lJ10sIC4uLnRhc2suc3R5bGVbJ2NoYXJ0LXJvdy1wcm9ncmVzcy1iYXItbGluZSddIH1cIlxyXG4gICAgICAgICAgeDE9XCIwXCJcclxuICAgICAgICAgIHkxPVwiMFwiXHJcbiAgICAgICAgICB4Mj1cIjBcIlxyXG4gICAgICAgICAgOnkyPVwicm9vdC5zdGF0ZS5vcHRpb25zLmNoYXJ0LnByb2dyZXNzLndpZHRoXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L3BhdHRlcm4+XHJcbiAgICA8L2RlZnM+XHJcbiAgICA8cmVjdFxyXG4gICAgICB2LWlmPVwicm9vdC5zdGF0ZS5vcHRpb25zLmNoYXJ0LnByb2dyZXNzLmJhclwiXHJcbiAgICAgIGNsYXNzPVwiZ2FudHQtZWxhc3RpY19fY2hhcnQtcm93LXByb2dyZXNzLWJhci1zb2xpZFwiXHJcbiAgICAgIDpzdHlsZT1cInsgLi4ucm9vdC5zdHlsZVsnY2hhcnQtcm93LXByb2dyZXNzLWJhci1zb2xpZCddLCAuLi50YXNrLnN0eWxlWydjaGFydC1yb3ctcHJvZ3Jlc3MtYmFyLXNvbGlkJ10gfVwiXHJcbiAgICAgIHg9XCIwXCJcclxuICAgICAgeT1cIjBcIlxyXG4gICAgICA6d2lkdGg9XCJnZXRQcm9ncmVzc1dpZHRoXCJcclxuICAgID48L3JlY3Q+XHJcbiAgICA8ZyB2LWlmPVwicm9vdC5zdGF0ZS5vcHRpb25zLmNoYXJ0LnByb2dyZXNzLnBhdHRlcm5cIj5cclxuICAgICAgPHJlY3RcclxuICAgICAgICBjbGFzcz1cImdhbnR0LWVsYXN0aWNfX2NoYXJ0LXJvdy1wcm9ncmVzcy1iYXItcGF0dGVyblwiXHJcbiAgICAgICAgOnN0eWxlPVwieyAuLi5yb290LnN0eWxlWydjaGFydC1yb3ctcHJvZ3Jlc3MtYmFyLXBhdHRlcm4nXSwgLi4udGFzay5zdHlsZVsnY2hhcnQtcm93LXByb2dyZXNzLWJhci1wYXR0ZXJuJ10gfVwiXHJcbiAgICAgICAgOng9XCJnZXRQcm9ncmVzc1dpZHRoXCJcclxuICAgICAgICB5PVwiMFwiXHJcbiAgICAgICAgOndpZHRoPVwiMTAwIC0gdGFzay5wcm9ncmVzcyArICclJ1wiXHJcbiAgICAgICAgaGVpZ2h0PVwiMTAwJVwiXHJcbiAgICAgID48L3JlY3Q+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgY2xhc3M9XCJnYW50dC1lbGFzdGljX19jaGFydC1yb3ctcHJvZ3Jlc3MtYmFyLW91dGxpbmVcIlxyXG4gICAgICAgIDpzdHlsZT1cIntcclxuICAgICAgICAgIC4uLnJvb3Quc3R5bGVbJ2NoYXJ0LXJvdy1wcm9ncmVzcy1iYXItb3V0bGluZSddLFxyXG4gICAgICAgICAgLi4udGFzay5zdHlsZVsnYmFzZSddLFxyXG4gICAgICAgICAgLi4udGFzay5zdHlsZVsnY2hhcnQtcm93LXByb2dyZXNzLWJhci1vdXRsaW5lJ11cclxuICAgICAgICB9XCJcclxuICAgICAgICA6ZD1cImdldExpbmVQb2ludHNcIlxyXG4gICAgICA+PC9wYXRoPlxyXG4gICAgPC9nPlxyXG4gIDwvZz5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBuYW1lOiAnUHJvZ3Jlc3NCYXInLFxyXG4gIGluamVjdDogWydyb290J10sXHJcbiAgcHJvcHM6IFsndGFzayddLFxyXG4gIGRhdGEoKSB7XHJcbiAgICByZXR1cm4ge307XHJcbiAgfSxcclxuXHJcbiAgY29tcHV0ZWQ6IHtcclxuICAgIC8qKlxyXG4gICAgICogR2V0IHByb2dyZXNzIHdpZHRoXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge3N0cmluZ31cclxuICAgICAqL1xyXG4gICAgZ2V0UHJvZ3Jlc3NXaWR0aCgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMudGFzay5wcm9ncmVzcyArICclJztcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgbGluZSBwb2ludHNcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxyXG4gICAgICovXHJcbiAgICBnZXRMaW5lUG9pbnRzKCkge1xyXG4gICAgICBjb25zdCBzdGFydCA9ICh0aGlzLnRhc2sud2lkdGggLyAxMDApICogdGhpcy50YXNrLnByb2dyZXNzO1xyXG4gICAgICByZXR1cm4gYE0gJHtzdGFydH0gMCBMICR7c3RhcnR9ICR7dGhpcy50YXNrLmhlaWdodH1gO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldCBzb2xpZCBzdHlsZVxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9XHJcbiAgICAgKi9cclxuICAgIGdldFNvbGlkU3R5bGUoKSB7XHJcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy5jaGFydC5wcm9ncmVzcy5zdHlsZXMuYmFyLnNvbGlkLCB0aGlzLnRhc2sucHJvZ3Jlc3NCYXJTdHlsZS5iYXIpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldCBsaW5lIHN0eWxlXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge29iamVjdH1cclxuICAgICAqL1xyXG4gICAgZ2V0TGluZVN0eWxlKCkge1xyXG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihcclxuICAgICAgICB7fSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBzdHJva2U6IHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLnJvdy5zdHlsZXMuYmFyLnN0cm9rZSArICdhMCcsXHJcbiAgICAgICAgICAnc3Ryb2tlLXdpZHRoJzogdGhpcy5yb290LnN0YXRlLm9wdGlvbnMucm93LnN0eWxlcy5iYXJbJ3N0cm9rZS13aWR0aCddIC8gMlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdGhpcy50YXNrLnN0eWxlXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG48L3NjcmlwdD5cclxuIiwiPCEtLVxyXG4vKipcclxuICogQGZpbGVvdmVydmlldyBNaWxlc3RvbmUgY29tcG9uZW50XHJcbiAqIEBsaWNlbnNlIE1JVFxyXG4gKiBAYXV0aG9yIFJhZmFsIFBvc3BpZWNoIDxuZXVyb25ldC5pb0BnbWFpbC5jb20+XHJcbiAqIEBwYWNrYWdlIEdhbnR0RWxhc3RpY1xyXG4gKi9cclxuLS0+XHJcbjx0ZW1wbGF0ZT5cclxuICA8Z1xyXG4gICAgY2xhc3M9XCJnYW50dC1lbGFzdGljX19jaGFydC1yb3ctYmFyLXdyYXBwZXIgZ2FudHQtZWxhc3RpY19fY2hhcnQtcm93LW1pbGVzdG9uZS13cmFwcGVyXCJcclxuICAgIDpzdHlsZT1cIntcclxuICAgICAgLi4ucm9vdC5zdHlsZVsnY2hhcnQtcm93LWJhci13cmFwcGVyJ10sXHJcbiAgICAgIC4uLnJvb3Quc3R5bGVbJ2NoYXJ0LXJvdy1taWxlc3RvbmUtd3JhcHBlciddLFxyXG4gICAgICAuLi50YXNrLnN0eWxlWydjaGFydC1yb3ctYmFyLXdyYXBwZXInXVxyXG4gICAgfVwiXHJcbiAgPlxyXG4gICAgPGZvcmVpZ25PYmplY3RcclxuICAgICAgY2xhc3M9XCJnYW50dC1lbGFzdGljX19jaGFydC1leHBhbmRlciBnYW50dC1lbGFzdGljX19jaGFydC1leHBhbmRlci0tbWlsZXN0b25lXCJcclxuICAgICAgOnN0eWxlPVwie1xyXG4gICAgICAgIC4uLnJvb3Quc3R5bGVbJ2NoYXJ0LWV4cGFuZGVyJ10sXHJcbiAgICAgICAgLi4ucm9vdC5zdHlsZVsnY2hhcnQtZXhwYW5kZXItLW1pbGVzdG9uZSddLFxyXG4gICAgICAgIC4uLnRhc2suc3R5bGVbJ2NoYXJ0LWV4cGFuZGVyJ11cclxuICAgICAgfVwiXHJcbiAgICAgIDp4PVwidGFzay54IC0gcm9vdC5zdGF0ZS5vcHRpb25zLmNoYXJ0LmV4cGFuZGVyLm9mZnNldCAtIHJvb3Quc3RhdGUub3B0aW9ucy5jaGFydC5leHBhbmRlci5zaXplXCJcclxuICAgICAgOnk9XCJ0YXNrLnkgKyAocm9vdC5zdGF0ZS5vcHRpb25zLnJvdy5oZWlnaHQgLSByb290LnN0YXRlLm9wdGlvbnMuY2hhcnQuZXhwYW5kZXIuc2l6ZSkgLyAyXCJcclxuICAgICAgOndpZHRoPVwicm9vdC5zdGF0ZS5vcHRpb25zLmNoYXJ0LmV4cGFuZGVyLnNpemVcIlxyXG4gICAgICA6aGVpZ2h0PVwicm9vdC5zdGF0ZS5vcHRpb25zLmNoYXJ0LmV4cGFuZGVyLnNpemVcIlxyXG4gICAgICB2LWlmPVwiZGlzcGxheUV4cGFuZGVyXCJcclxuICAgID5cclxuICAgICAgPGV4cGFuZGVyIDp0YXNrcz1cIlt0YXNrXVwiIDpvcHRpb25zPVwicm9vdC5zdGF0ZS5vcHRpb25zLmNoYXJ0LmV4cGFuZGVyXCIgdHlwZT1cImNoYXJ0XCI+PC9leHBhbmRlcj5cclxuICAgIDwvZm9yZWlnbk9iamVjdD5cclxuICAgIDxzdmdcclxuICAgICAgY2xhc3M9XCJnYW50dC1lbGFzdGljX19jaGFydC1yb3ctYmFyIGdhbnR0LWVsYXN0aWNfX2NoYXJ0LXJvdy1taWxlc3RvbmVcIlxyXG4gICAgICA6c3R5bGU9XCJ7IC4uLnJvb3Quc3R5bGVbJ2NoYXJ0LXJvdy1iYXInXSwgLi4ucm9vdC5zdHlsZVsnY2hhcnQtcm93LW1pbGVzdG9uZSddLCAuLi50YXNrLnN0eWxlWydjaGFydC1yb3ctYmFyJ10gfVwiXHJcbiAgICAgIDp4PVwidGFzay54XCJcclxuICAgICAgOnk9XCJ0YXNrLnlcIlxyXG4gICAgICA6d2lkdGg9XCJ0YXNrLndpZHRoXCJcclxuICAgICAgOmhlaWdodD1cInRhc2suaGVpZ2h0XCJcclxuICAgICAgOnZpZXdCb3g9XCJgMCAwICR7dGFzay53aWR0aH0gJHt0YXNrLmhlaWdodH1gXCJcclxuICAgICAgQGNsaWNrPVwiZW1pdEV2ZW50KCdjbGljaycsICRldmVudClcIlxyXG4gICAgICBAbW91c2VlbnRlcj1cImVtaXRFdmVudCgnbW91c2VlbnRlcicsICRldmVudClcIlxyXG4gICAgICBAbW91c2VvdmVyPVwiZW1pdEV2ZW50KCdtb3VzZW92ZXInLCAkZXZlbnQpXCJcclxuICAgICAgQG1vdXNlb3V0PVwiZW1pdEV2ZW50KCdtb3VzZW91dCcsICRldmVudClcIlxyXG4gICAgICBAbW91c2Vtb3ZlPVwiZW1pdEV2ZW50KCdtb3VzZW1vdmUnLCAkZXZlbnQpXCJcclxuICAgICAgQG1vdXNlZG93bj1cImVtaXRFdmVudCgnbW91c2Vkb3duJywgJGV2ZW50KVwiXHJcbiAgICAgIEBtb3VzZXVwPVwiZW1pdEV2ZW50KCdtb3VzZXVwJywgJGV2ZW50KVwiXHJcbiAgICAgIEBtb3VzZXdoZWVsPVwiZW1pdEV2ZW50KCdtb3VzZXdoZWVsJywgJGV2ZW50KVwiXHJcbiAgICAgIEB0b3VjaHN0YXJ0PVwiZW1pdEV2ZW50KCd0b3VjaHN0YXJ0JywgJGV2ZW50KVwiXHJcbiAgICAgIEB0b3VjaG1vdmU9XCJlbWl0RXZlbnQoJ3RvdWNobW92ZScsICRldmVudClcIlxyXG4gICAgICBAdG91Y2hlbmQ9XCJlbWl0RXZlbnQoJ3RvdWNoZW5kJywgJGV2ZW50KVwiXHJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgPlxyXG4gICAgICA8ZGVmcz5cclxuICAgICAgICA8Y2xpcFBhdGggOmlkPVwiY2xpcFBhdGhJZFwiPlxyXG4gICAgICAgICAgPHBvbHlnb24gOnBvaW50cz1cImdldFBvaW50c1wiPjwvcG9seWdvbj5cclxuICAgICAgICA8L2NsaXBQYXRoPlxyXG4gICAgICA8L2RlZnM+XHJcbiAgICAgIDxwb2x5Z29uXHJcbiAgICAgICAgY2xhc3M9XCJnYW50dC1lbGFzdGljX19jaGFydC1yb3ctYmFyLXBvbHlnb24gZ2FudHQtZWxhc3RpY19fY2hhcnQtcm93LW1pbGVzdG9uZS1wb2x5Z29uXCJcclxuICAgICAgICA6c3R5bGU9XCJ7XHJcbiAgICAgICAgICAuLi5yb290LnN0eWxlWydjaGFydC1yb3ctYmFyLXBvbHlnb24nXSxcclxuICAgICAgICAgIC4uLnJvb3Quc3R5bGVbJ2NoYXJ0LXJvdy1taWxlc3RvbmUtcG9seWdvbiddLFxyXG4gICAgICAgICAgLi4udGFzay5zdHlsZVsnYmFzZSddLFxyXG4gICAgICAgICAgLi4udGFzay5zdHlsZVsnY2hhcnQtcm93LWJhci1wb2x5Z29uJ11cclxuICAgICAgICB9XCJcclxuICAgICAgICA6cG9pbnRzPVwiZ2V0UG9pbnRzXCJcclxuICAgICAgPjwvcG9seWdvbj5cclxuICAgICAgPHByb2dyZXNzLWJhciA6dGFzaz1cInRhc2tcIiA6Y2xpcC1wYXRoPVwiJ3VybCgjJyArIGNsaXBQYXRoSWQgKyAnKSdcIj48L3Byb2dyZXNzLWJhcj5cclxuICAgIDwvc3ZnPlxyXG4gICAgPGNoYXJ0LXRleHQgOnRhc2s9XCJ0YXNrXCIgdi1pZj1cInJvb3Quc3RhdGUub3B0aW9ucy5jaGFydC50ZXh0LmRpc3BsYXlcIj48L2NoYXJ0LXRleHQ+XHJcbiAgPC9nPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IENoYXJ0VGV4dCBmcm9tICcuLi9UZXh0LnZ1ZSc7XHJcbmltcG9ydCBQcm9ncmVzc0JhciBmcm9tICcuLi9Qcm9ncmVzc0Jhci52dWUnO1xyXG5pbXBvcnQgRXhwYW5kZXIgZnJvbSAnLi4vLi4vRXhwYW5kZXIudnVlJztcclxuaW1wb3J0IHRhc2tNaXhpbiBmcm9tICcuL1Rhc2subWl4aW4uanMnO1xyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgbmFtZTogJ01pbGVzdG9uZScsXHJcbiAgY29tcG9uZW50czoge1xyXG4gICAgQ2hhcnRUZXh0LFxyXG4gICAgUHJvZ3Jlc3NCYXIsXHJcbiAgICBFeHBhbmRlclxyXG4gIH0sXHJcbiAgaW5qZWN0OiBbJ3Jvb3QnXSxcclxuICBwcm9wczogWyd0YXNrJ10sXHJcbiAgbWl4aW5zOiBbdGFza01peGluXSxcclxuICBkYXRhKCkge1xyXG4gICAgcmV0dXJuIHt9O1xyXG4gIH0sXHJcbiAgY29tcHV0ZWQ6IHtcclxuICAgIC8qKlxyXG4gICAgICogR2V0IGNsaXAgcGF0aCBpZFxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XHJcbiAgICAgKi9cclxuICAgIGNsaXBQYXRoSWQoKSB7XHJcbiAgICAgIHJldHVybiAnZ2FudHQtZWxhc3RpY19fbWlsZXN0b25lLWNsaXAtcGF0aC0nICsgdGhpcy50YXNrLmlkO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldCBwb2ludHNcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxyXG4gICAgICovXHJcbiAgICBnZXRQb2ludHMoKSB7XHJcbiAgICAgIGNvbnN0IHRhc2sgPSB0aGlzLnRhc2s7XHJcbiAgICAgIGNvbnN0IGZpZnR5ID0gdGFzay5oZWlnaHQgLyAyO1xyXG4gICAgICBsZXQgb2Zmc2V0ID0gZmlmdHk7XHJcbiAgICAgIGlmICh0YXNrLndpZHRoIC8gMiAtIG9mZnNldCA8IDApIHtcclxuICAgICAgICBvZmZzZXQgPSB0YXNrLndpZHRoIC8gMjtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gYDAsJHtmaWZ0eX1cclxuICAgICAgICAke29mZnNldH0sMFxyXG4gICAgICAgICR7dGFzay53aWR0aCAtIG9mZnNldH0sMFxyXG4gICAgICAgICR7dGFzay53aWR0aH0sJHtmaWZ0eX1cclxuICAgICAgICAke3Rhc2sud2lkdGggLSBvZmZzZXR9LCR7dGFzay5oZWlnaHR9XHJcbiAgICAgICAgJHtvZmZzZXR9LCR7dGFzay5oZWlnaHR9YDtcclxuICAgIH1cclxuICB9XHJcbn07XHJcbjwvc2NyaXB0PlxyXG4iLCI8IS0tXHJcbi8qKlxyXG4gKiBAZmlsZW92ZXJ2aWV3IFByb2plY3QgY29tcG9uZW50XHJcbiAqIEBsaWNlbnNlIE1JVFxyXG4gKiBAYXV0aG9yIFJhZmFsIFBvc3BpZWNoIDxuZXVyb25ldC5pb0BnbWFpbC5jb20+XHJcbiAqIEBwYWNrYWdlIEdhbnR0RWxhc3RpY1xyXG4gKi9cclxuLS0+XHJcbjx0ZW1wbGF0ZT5cclxuICA8Z1xyXG4gICAgY2xhc3M9XCJnYW50dC1lbGFzdGljX19jaGFydC1yb3ctYmFyLXdyYXBwZXIgZ2FudHQtZWxhc3RpY19fY2hhcnQtcm93LXByb2plY3Qtd3JhcHBlclwiXHJcbiAgICA6c3R5bGU9XCJ7XHJcbiAgICAgIC4uLnJvb3Quc3R5bGVbJ2NoYXJ0LXJvdy1iYXItd3JhcHBlciddLFxyXG4gICAgICAuLi5yb290LnN0eWxlWydjaGFydC1yb3ctcHJvamVjdC13cmFwcGVyJ10sXHJcbiAgICAgIC4uLnRhc2suc3R5bGVbJ2NoYXJ0LXJvdy1iYXItd3JhcHBlciddXHJcbiAgICB9XCJcclxuICA+XHJcbiAgICA8Zm9yZWlnbk9iamVjdFxyXG4gICAgICBjbGFzcz1cImdhbnR0LWVsYXN0aWNfX2NoYXJ0LWV4cGFuZGVyIGdhbnR0LWVsYXN0aWNfX2NoYXJ0LWV4cGFuZGVyLS1wcm9qZWN0XCJcclxuICAgICAgOnN0eWxlPVwie1xyXG4gICAgICAgIC4uLnJvb3Quc3R5bGVbJ2NoYXJ0LWV4cGFuZGVyJ10sXHJcbiAgICAgICAgLi4ucm9vdC5zdHlsZVsnY2hhcnQtZXhwYW5kZXItLXByb2plY3QnXSxcclxuICAgICAgICAuLi50YXNrLnN0eWxlWydjaGFydC1leHBhbmRlciddXHJcbiAgICAgIH1cIlxyXG4gICAgICA6eD1cInRhc2sueCAtIHJvb3Quc3RhdGUub3B0aW9ucy5jaGFydC5leHBhbmRlci5vZmZzZXQgLSByb290LnN0YXRlLm9wdGlvbnMuY2hhcnQuZXhwYW5kZXIuc2l6ZVwiXHJcbiAgICAgIDp5PVwidGFzay55ICsgKHJvb3Quc3RhdGUub3B0aW9ucy5yb3cuaGVpZ2h0IC0gcm9vdC5zdGF0ZS5vcHRpb25zLmNoYXJ0LmV4cGFuZGVyLnNpemUpIC8gMlwiXHJcbiAgICAgIDp3aWR0aD1cInJvb3Quc3RhdGUub3B0aW9ucy5jaGFydC5leHBhbmRlci5zaXplXCJcclxuICAgICAgOmhlaWdodD1cInJvb3Quc3RhdGUub3B0aW9ucy5jaGFydC5leHBhbmRlci5zaXplXCJcclxuICAgICAgdi1pZj1cImRpc3BsYXlFeHBhbmRlclwiXHJcbiAgICA+XHJcbiAgICAgIDxleHBhbmRlciA6dGFza3M9XCJbdGFza11cIiA6b3B0aW9ucz1cInJvb3Quc3RhdGUub3B0aW9ucy5jaGFydC5leHBhbmRlclwiIHR5cGU9XCJjaGFydFwiPjwvZXhwYW5kZXI+XHJcbiAgICA8L2ZvcmVpZ25PYmplY3Q+XHJcbiAgICA8c3ZnXHJcbiAgICAgIGNsYXNzPVwiZ2FudHQtZWxhc3RpY19fY2hhcnQtcm93LWJhciBnYW50dC1lbGFzdGljX19jaGFydC1yb3ctcHJvamVjdFwiXHJcbiAgICAgIDpzdHlsZT1cInsgLi4ucm9vdC5zdHlsZVsnY2hhcnQtcm93LWJhciddLCAuLi5yb290LnN0eWxlWydjaGFydC1yb3ctcHJvamVjdCddLCAuLi50YXNrLnN0eWxlWydjaGFydC1yb3ctYmFyJ10gfVwiXHJcbiAgICAgIDp4PVwidGFzay54XCJcclxuICAgICAgOnk9XCJ0YXNrLnlcIlxyXG4gICAgICA6d2lkdGg9XCJ0YXNrLndpZHRoXCJcclxuICAgICAgOmhlaWdodD1cInRhc2suaGVpZ2h0XCJcclxuICAgICAgOnZpZXdCb3g9XCJgMCAwICR7dGFzay53aWR0aH0gJHt0YXNrLmhlaWdodH1gXCJcclxuICAgICAgQGNsaWNrPVwiZW1pdEV2ZW50KCdjbGljaycsICRldmVudClcIlxyXG4gICAgICBAbW91c2VlbnRlcj1cImVtaXRFdmVudCgnbW91c2VlbnRlcicsICRldmVudClcIlxyXG4gICAgICBAbW91c2VvdmVyPVwiZW1pdEV2ZW50KCdtb3VzZW92ZXInLCAkZXZlbnQpXCJcclxuICAgICAgQG1vdXNlb3V0PVwiZW1pdEV2ZW50KCdtb3VzZW91dCcsICRldmVudClcIlxyXG4gICAgICBAbW91c2Vtb3ZlPVwiZW1pdEV2ZW50KCdtb3VzZW1vdmUnLCAkZXZlbnQpXCJcclxuICAgICAgQG1vdXNlZG93bj1cImVtaXRFdmVudCgnbW91c2Vkb3duJywgJGV2ZW50KVwiXHJcbiAgICAgIEBtb3VzZXVwPVwiZW1pdEV2ZW50KCdtb3VzZXVwJywgJGV2ZW50KVwiXHJcbiAgICAgIEBtb3VzZXdoZWVsPVwiZW1pdEV2ZW50KCdtb3VzZXdoZWVsJywgJGV2ZW50KVwiXHJcbiAgICAgIEB0b3VjaHN0YXJ0PVwiZW1pdEV2ZW50KCd0b3VjaHN0YXJ0JywgJGV2ZW50KVwiXHJcbiAgICAgIEB0b3VjaG1vdmU9XCJlbWl0RXZlbnQoJ3RvdWNobW92ZScsICRldmVudClcIlxyXG4gICAgICBAdG91Y2hlbmQ9XCJlbWl0RXZlbnQoJ3RvdWNoZW5kJywgJGV2ZW50KVwiXHJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgPlxyXG4gICAgICA8ZGVmcz5cclxuICAgICAgICA8Y2xpcFBhdGggOmlkPVwiY2xpcFBhdGhJZFwiPlxyXG4gICAgICAgICAgPHBhdGggOmQ9XCJnZXRQb2ludHNcIj48L3BhdGg+XHJcbiAgICAgICAgPC9jbGlwUGF0aD5cclxuICAgICAgPC9kZWZzPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGNsYXNzPVwiZ2FudHQtZWxhc3RpY19fY2hhcnQtcm93LWJhci1wb2x5Z29uIGdhbnR0LWVsYXN0aWNfX2NoYXJ0LXJvdy1wcm9qZWN0LXBvbHlnb25cIlxyXG4gICAgICAgIDpzdHlsZT1cIntcclxuICAgICAgICAgIC4uLnJvb3Quc3R5bGVbJ2NoYXJ0LXJvdy1iYXItcG9seWdvbiddLFxyXG4gICAgICAgICAgLi4ucm9vdC5zdHlsZVsnY2hhcnQtcm93LXByb2plY3QtcG9seWdvbiddLFxyXG4gICAgICAgICAgLi4udGFzay5zdHlsZVsnYmFzZSddLFxyXG4gICAgICAgICAgLi4udGFzay5zdHlsZVsnY2hhcnQtcm93LWJhci1wb2x5Z29uJ11cclxuICAgICAgICB9XCJcclxuICAgICAgICA6ZD1cImdldFBvaW50c1wiXHJcbiAgICAgID48L3BhdGg+XHJcbiAgICAgIDxwcm9ncmVzcy1iYXIgOnRhc2s9XCJ0YXNrXCIgOmNsaXAtcGF0aD1cIid1cmwoIycgKyBjbGlwUGF0aElkICsgJyknXCI+PC9wcm9ncmVzcy1iYXI+XHJcbiAgICA8L3N2Zz5cclxuICAgIDxjaGFydC10ZXh0IDp0YXNrPVwidGFza1wiIHYtaWY9XCJyb290LnN0YXRlLm9wdGlvbnMuY2hhcnQudGV4dC5kaXNwbGF5XCI+PC9jaGFydC10ZXh0PlxyXG4gIDwvZz5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCBDaGFydFRleHQgZnJvbSAnLi4vVGV4dC52dWUnO1xyXG5pbXBvcnQgUHJvZ3Jlc3NCYXIgZnJvbSAnLi4vUHJvZ3Jlc3NCYXIudnVlJztcclxuaW1wb3J0IEV4cGFuZGVyIGZyb20gJy4uLy4uL0V4cGFuZGVyLnZ1ZSc7XHJcbmltcG9ydCB0YXNrTWl4aW4gZnJvbSAnLi9UYXNrLm1peGluLmpzJztcclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5hbWU6ICdQcm9qZWN0JyxcclxuICBjb21wb25lbnRzOiB7XHJcbiAgICBDaGFydFRleHQsXHJcbiAgICBQcm9ncmVzc0JhcixcclxuICAgIEV4cGFuZGVyXHJcbiAgfSxcclxuICBpbmplY3Q6IFsncm9vdCddLFxyXG4gIHByb3BzOiBbJ3Rhc2snXSxcclxuICBtaXhpbnM6IFt0YXNrTWl4aW5dLFxyXG4gIGRhdGEoKSB7XHJcbiAgICByZXR1cm4ge307XHJcbiAgfSxcclxuICBjb21wdXRlZDoge1xyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgY2xpcCBwYXRoIGlkXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge3N0cmluZ31cclxuICAgICAqL1xyXG4gICAgY2xpcFBhdGhJZCgpIHtcclxuICAgICAgcmV0dXJuICdnYW50dC1lbGFzdGljX19wcm9qZWN0LWNsaXAtcGF0aC0nICsgdGhpcy50YXNrLmlkO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldCBwb2ludHNcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxyXG4gICAgICovXHJcbiAgICBnZXRQb2ludHMoKSB7XHJcbiAgICAgIGNvbnN0IHRhc2sgPSB0aGlzLnRhc2s7XHJcbiAgICAgIGNvbnN0IGJvdHRvbSA9IHRhc2suaGVpZ2h0IC0gdGFzay5oZWlnaHQgLyA0O1xyXG4gICAgICBjb25zdCBjb3JuZXIgPSB0YXNrLmhlaWdodCAvIDY7XHJcbiAgICAgIGNvbnN0IHNtYWxsQ29ybmVyID0gdGFzay5oZWlnaHQgLyA4O1xyXG4gICAgICByZXR1cm4gYE0gJHtzbWFsbENvcm5lcn0sMFxyXG4gICAgICAgICAgICAgICAgTCAke3Rhc2sud2lkdGggLSBzbWFsbENvcm5lcn0gMFxyXG4gICAgICAgICAgICAgICAgTCAke3Rhc2sud2lkdGh9ICR7c21hbGxDb3JuZXJ9XHJcbiAgICAgICAgICAgICAgICBMICR7dGFzay53aWR0aH0gJHtib3R0b219XHJcbiAgICAgICAgICAgICAgICBMICR7dGFzay53aWR0aCAtIGNvcm5lcn0gJHt0YXNrLmhlaWdodH1cclxuICAgICAgICAgICAgICAgIEwgJHt0YXNrLndpZHRoIC0gY29ybmVyICogMn0gJHtib3R0b219XHJcbiAgICAgICAgICAgICAgICBMICR7Y29ybmVyICogMn0gJHtib3R0b219XHJcbiAgICAgICAgICAgICAgICBMICR7Y29ybmVyfSAke3Rhc2suaGVpZ2h0fVxyXG4gICAgICAgICAgICAgICAgTCAwICR7Ym90dG9tfVxyXG4gICAgICAgICAgICAgICAgTCAwICR7c21hbGxDb3JuZXJ9XHJcbiAgICAgICAgICAgICAgICBaXHJcbiAgICAgICAgYDtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTaG91bGQgd2UgZGlzcGxheSBleHBhbmRlcj9cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICAgICAqL1xyXG4gICAgZGlzcGxheUV4cGFuZGVyKCkge1xyXG4gICAgICBjb25zdCBleHBhbmRlciA9IHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLmNoYXJ0LmV4cGFuZGVyO1xyXG4gICAgICByZXR1cm4gZXhwYW5kZXIuZGlzcGxheSB8fCAoZXhwYW5kZXIuZGlzcGxheUlmVGFza0xpc3RIaWRkZW4gJiYgIXRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLnRhc2tMaXN0LmRpc3BsYXkpO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuPC9zY3JpcHQ+XHJcbiIsIjwhLS1cclxuLyoqXHJcbiAqIEBmaWxlb3ZlcnZpZXcgVGFzayBjb21wb25lbnRcclxuICogQGxpY2Vuc2UgTUlUXHJcbiAqIEBhdXRob3IgUmFmYWwgUG9zcGllY2ggPG5ldXJvbmV0LmlvQGdtYWlsLmNvbT5cclxuICogQHBhY2thZ2UgR2FudHRFbGFzdGljXHJcbiAqL1xyXG4tLT5cclxuPHRlbXBsYXRlPlxyXG4gIDxnXHJcbiAgICBjbGFzcz1cImdhbnR0LWVsYXN0aWNfX2NoYXJ0LXJvdy1iYXItd3JhcHBlciBnYW50dC1lbGFzdGljX19jaGFydC1yb3ctdGFzay13cmFwcGVyXCJcclxuICAgIDpzdHlsZT1cIntcclxuICAgICAgLi4ucm9vdC5zdHlsZVsnY2hhcnQtcm93LWJhci13cmFwcGVyJ10sXHJcbiAgICAgIC4uLnJvb3Quc3R5bGVbJ2NoYXJ0LXJvdy10YXNrLXdyYXBwZXInXSxcclxuICAgICAgLi4udGFzay5zdHlsZVsnY2hhcnQtcm93LWJhci13cmFwcGVyJ11cclxuICAgIH1cIlxyXG4gID5cclxuICAgIDxmb3JlaWduT2JqZWN0XHJcbiAgICAgIGNsYXNzPVwiZ2FudHQtZWxhc3RpY19fY2hhcnQtZXhwYW5kZXIgZ2FudHQtZWxhc3RpY19fY2hhcnQtZXhwYW5kZXItLXRhc2tcIlxyXG4gICAgICA6c3R5bGU9XCJ7XHJcbiAgICAgICAgLi4ucm9vdC5zdHlsZVsnY2hhcnQtZXhwYW5kZXInXSxcclxuICAgICAgICAuLi5yb290LnN0eWxlWydjaGFydC1leHBhbmRlci0tdGFzayddLFxyXG4gICAgICAgIC4uLnRhc2suc3R5bGVbJ2NoYXJ0LWV4cGFuZGVyJ11cclxuICAgICAgfVwiXHJcbiAgICAgIDp4PVwidGFzay54IC0gcm9vdC5zdGF0ZS5vcHRpb25zLmNoYXJ0LmV4cGFuZGVyLm9mZnNldCAtIHJvb3Quc3RhdGUub3B0aW9ucy5jaGFydC5leHBhbmRlci5zaXplXCJcclxuICAgICAgOnk9XCJ0YXNrLnkgKyAocm9vdC5zdGF0ZS5vcHRpb25zLnJvdy5oZWlnaHQgLSByb290LnN0YXRlLm9wdGlvbnMuY2hhcnQuZXhwYW5kZXIuc2l6ZSkgLyAyXCJcclxuICAgICAgOndpZHRoPVwicm9vdC5zdGF0ZS5vcHRpb25zLmNoYXJ0LmV4cGFuZGVyLnNpemVcIlxyXG4gICAgICA6aGVpZ2h0PVwicm9vdC5zdGF0ZS5vcHRpb25zLmNoYXJ0LmV4cGFuZGVyLnNpemVcIlxyXG4gICAgICB2LWlmPVwiZGlzcGxheUV4cGFuZGVyXCJcclxuICAgID5cclxuICAgICAgPGV4cGFuZGVyIDp0YXNrcz1cIlt0YXNrXVwiIDpvcHRpb25zPVwicm9vdC5zdGF0ZS5vcHRpb25zLmNoYXJ0LmV4cGFuZGVyXCIgdHlwZT1cImNoYXJ0XCI+PC9leHBhbmRlcj5cclxuICAgIDwvZm9yZWlnbk9iamVjdD5cclxuICAgIDxzdmdcclxuICAgICAgY2xhc3M9XCJnYW50dC1lbGFzdGljX19jaGFydC1yb3ctYmFyIGdhbnR0LWVsYXN0aWNfX2NoYXJ0LXJvdy10YXNrXCJcclxuICAgICAgOnN0eWxlPVwieyAuLi5yb290LnN0eWxlWydjaGFydC1yb3ctYmFyJ10sIC4uLnJvb3Quc3R5bGVbJ2NoYXJ0LXJvdy10YXNrJ10sIC4uLnRhc2suc3R5bGVbJ2NoYXJ0LXJvdy1iYXInXSB9XCJcclxuICAgICAgOng9XCJ0YXNrLnhcIlxyXG4gICAgICA6eT1cInRhc2sueVwiXHJcbiAgICAgIDp3aWR0aD1cInRhc2sud2lkdGhcIlxyXG4gICAgICA6aGVpZ2h0PVwidGFzay5oZWlnaHRcIlxyXG4gICAgICA6dmlld0JveD1cImAwIDAgJHt0YXNrLndpZHRofSAke3Rhc2suaGVpZ2h0fWBcIlxyXG4gICAgICBAY2xpY2s9XCJlbWl0RXZlbnQoJ2NsaWNrJywgJGV2ZW50KVwiXHJcbiAgICAgIEBtb3VzZWVudGVyPVwiZW1pdEV2ZW50KCdtb3VzZWVudGVyJywgJGV2ZW50KVwiXHJcbiAgICAgIEBtb3VzZW92ZXI9XCJlbWl0RXZlbnQoJ21vdXNlb3ZlcicsICRldmVudClcIlxyXG4gICAgICBAbW91c2VvdXQ9XCJlbWl0RXZlbnQoJ21vdXNlb3V0JywgJGV2ZW50KVwiXHJcbiAgICAgIEBtb3VzZW1vdmU9XCJlbWl0RXZlbnQoJ21vdXNlbW92ZScsICRldmVudClcIlxyXG4gICAgICBAbW91c2Vkb3duPVwiZW1pdEV2ZW50KCdtb3VzZWRvd24nLCAkZXZlbnQpXCJcclxuICAgICAgQG1vdXNldXA9XCJlbWl0RXZlbnQoJ21vdXNldXAnLCAkZXZlbnQpXCJcclxuICAgICAgQG1vdXNld2hlZWw9XCJlbWl0RXZlbnQoJ21vdXNld2hlZWwnLCAkZXZlbnQpXCJcclxuICAgICAgQHRvdWNoc3RhcnQ9XCJlbWl0RXZlbnQoJ3RvdWNoc3RhcnQnLCAkZXZlbnQpXCJcclxuICAgICAgQHRvdWNobW92ZT1cImVtaXRFdmVudCgndG91Y2htb3ZlJywgJGV2ZW50KVwiXHJcbiAgICAgIEB0b3VjaGVuZD1cImVtaXRFdmVudCgndG91Y2hlbmQnLCAkZXZlbnQpXCJcclxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICA+XHJcbiAgICAgIDxkZWZzPlxyXG4gICAgICAgIDxjbGlwUGF0aCA6aWQ9XCJjbGlwUGF0aElkXCI+XHJcbiAgICAgICAgICA8cG9seWdvbiA6cG9pbnRzPVwiZ2V0UG9pbnRzXCI+PC9wb2x5Z29uPlxyXG4gICAgICAgIDwvY2xpcFBhdGg+XHJcbiAgICAgIDwvZGVmcz5cclxuICAgICAgPHBvbHlnb25cclxuICAgICAgICBjbGFzcz1cImdhbnR0LWVsYXN0aWNfX2NoYXJ0LXJvdy1iYXItcG9seWdvbiBnYW50dC1lbGFzdGljX19jaGFydC1yb3ctdGFzay1wb2x5Z29uXCJcclxuICAgICAgICA6c3R5bGU9XCJ7XHJcbiAgICAgICAgICAuLi5yb290LnN0eWxlWydjaGFydC1yb3ctYmFyLXBvbHlnb24nXSxcclxuICAgICAgICAgIC4uLnJvb3Quc3R5bGVbJ2NoYXJ0LXJvdy10YXNrLXBvbHlnb24nXSxcclxuICAgICAgICAgIC4uLnRhc2suc3R5bGVbJ2Jhc2UnXSxcclxuICAgICAgICAgIC4uLnRhc2suc3R5bGVbJ2NoYXJ0LXJvdy1iYXItcG9seWdvbiddXHJcbiAgICAgICAgfVwiXHJcbiAgICAgICAgOnBvaW50cz1cImdldFBvaW50c1wiXHJcbiAgICAgID48L3BvbHlnb24+XHJcbiAgICAgIDxwcm9ncmVzcy1iYXIgOnRhc2s9XCJ0YXNrXCIgOmNsaXAtcGF0aD1cIid1cmwoIycgKyBjbGlwUGF0aElkICsgJyknXCI+PC9wcm9ncmVzcy1iYXI+XHJcbiAgICA8L3N2Zz5cclxuICAgIDxjaGFydC10ZXh0IDp0YXNrPVwidGFza1wiIHYtaWY9XCJyb290LnN0YXRlLm9wdGlvbnMuY2hhcnQudGV4dC5kaXNwbGF5XCI+PC9jaGFydC10ZXh0PlxyXG4gIDwvZz5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCBDaGFydFRleHQgZnJvbSAnLi4vVGV4dC52dWUnO1xyXG5pbXBvcnQgUHJvZ3Jlc3NCYXIgZnJvbSAnLi4vUHJvZ3Jlc3NCYXIudnVlJztcclxuaW1wb3J0IEV4cGFuZGVyIGZyb20gJy4uLy4uL0V4cGFuZGVyLnZ1ZSc7XHJcbmltcG9ydCB0YXNrTWl4aW4gZnJvbSAnLi9UYXNrLm1peGluLmpzJztcclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5hbWU6ICdUYXNrJyxcclxuICBjb21wb25lbnRzOiB7XHJcbiAgICBDaGFydFRleHQsXHJcbiAgICBQcm9ncmVzc0JhcixcclxuICAgIEV4cGFuZGVyXHJcbiAgfSxcclxuICBpbmplY3Q6IFsncm9vdCddLFxyXG4gIHByb3BzOiBbJ3Rhc2snXSxcclxuICBtaXhpbnM6IFt0YXNrTWl4aW5dLFxyXG4gIGRhdGEoKSB7XHJcbiAgICByZXR1cm4ge307XHJcbiAgfSxcclxuICBjb21wdXRlZDoge1xyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgY2xpcCBwYXRoIGlkXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge3N0cmluZ31cclxuICAgICAqL1xyXG4gICAgY2xpcFBhdGhJZCgpIHtcclxuICAgICAgcmV0dXJuICdnYW50dC1lbGFzdGljX190YXNrLWNsaXAtcGF0aC0nICsgdGhpcy50YXNrLmlkO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldCBwb2ludHNcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxyXG4gICAgICovXHJcbiAgICBnZXRQb2ludHMoKSB7XHJcbiAgICAgIGNvbnN0IHRhc2sgPSB0aGlzLnRhc2s7XHJcbiAgICAgIHJldHVybiBgMCwwICR7dGFzay53aWR0aH0sMCAke3Rhc2sud2lkdGh9LCR7dGFzay5oZWlnaHR9IDAsJHt0YXNrLmhlaWdodH1gO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuPC9zY3JpcHQ+XHJcbiIsIjwhLS1cclxuLyoqXHJcbiAqIEBmaWxlb3ZlcnZpZXcgVGV4dCBjb21wb25lbnRcclxuICogQGxpY2Vuc2UgTUlUXHJcbiAqIEBhdXRob3IgUmFmYWwgUG9zcGllY2ggPG5ldXJvbmV0LmlvQGdtYWlsLmNvbT5cclxuICogQHBhY2thZ2UgR2FudHRFbGFzdGljXHJcbiAqL1xyXG4tLT5cclxuPHRlbXBsYXRlPlxyXG4gIDxzdmdcclxuICAgIGNsYXNzPVwiZ2FudHQtZWxhc3RpY19fY2hhcnQtcm93LXRleHQtd3JhcHBlclwiXHJcbiAgICA6c3R5bGU9XCJ7IC4uLnJvb3Quc3R5bGVbJ2NoYXJ0LXJvdy10ZXh0LXdyYXBwZXInXSB9XCJcclxuICAgIDp4PVwidGV4dENvbmZpZy5lbGxpcHNpcyA/IHRhc2sueCA6IHRhc2sueCArIHRhc2sud2lkdGggKyByb290LnN0YXRlLm9wdGlvbnMuY2hhcnQudGV4dC5vZmZzZXRcIlxyXG4gICAgOnk9XCJ0YXNrLnkgLSByb290LnN0YXRlLm9wdGlvbnMuY2hhcnQuZ3JpZC5ob3Jpem9udGFsLmdhcFwiXHJcbiAgICA6d2lkdGg9XCJnZXRXaWR0aFwiXHJcbiAgICA6aGVpZ2h0PVwiZ2V0SGVpZ2h0XCJcclxuICA+XHJcbiAgICA8Zm9yZWlnbk9iamVjdCB4PVwiMFwiIHk9XCIwXCIgd2lkdGg9XCIxMDAlXCIgOmhlaWdodD1cImdldEhlaWdodFwiPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXCJcclxuICAgICAgICBjbGFzcz1cImdhbnR0LWVsYXN0aWNfX2NoYXJ0LXJvdy10ZXh0XCJcclxuICAgICAgICA6c3R5bGU9XCJ7IC4uLnJvb3Quc3R5bGVbJ2NoYXJ0LXJvdy10ZXh0J10sIGJhY2tncm91bmRDb2xvcjogdGV4dENvbmZpZy5lbGxpcHNpcyA/ICd0cmFuc3BhcmVudCcgOiB0YXNrLmNvbG9yIH1cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgdi1pZj1cInRleHRDb25maWcucmVuZGVyXCJcclxuICAgICAgICAgIGNsYXNzPVwiZ2FudHQtZWxhc3RpY19fY2hhcnQtcm93LXRleHQtY29udGVudCBnYW50dC1lbGFzdGljX19jaGFydC1yb3ctdGV4dC1jb250ZW50LS10ZXh0XCJcclxuICAgICAgICAgIDpzdHlsZT1cIntcclxuICAgICAgICAgICAgLi4ucm9vdC5zdHlsZVsnY2hhcnQtcm93LXRleHQtY29udGVudCddLFxyXG4gICAgICAgICAgICAuLi5yb290LnN0eWxlWydjaGFydC1yb3ctdGV4dC1jb250ZW50LS10ZXh0J10sXHJcbiAgICAgICAgICAgIC4uLmNvbnRlbnRTdHlsZSxcclxuICAgICAgICAgICAgLi4udGV4dENvbmZpZy5zdHlsZVxyXG4gICAgICAgICAgfVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFJlbmRlciA6cmVuZGVyPVwiKCkgPT4gdGV4dENvbmZpZy5yZW5kZXIodGFzay5sYWJlbCwgdGFzaylcIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzPVwiZ2FudHQtZWxhc3RpY19fY2hhcnQtcm93LXRleHQtY29udGVudCBnYW50dC1lbGFzdGljX19jaGFydC1yb3ctdGV4dC1jb250ZW50LS10ZXh0XCJcclxuICAgICAgICAgIDpzdHlsZT1cIntcclxuICAgICAgICAgICAgLi4ucm9vdC5zdHlsZVsnY2hhcnQtcm93LXRleHQtY29udGVudCddLFxyXG4gICAgICAgICAgICAuLi5yb290LnN0eWxlWydjaGFydC1yb3ctdGV4dC1jb250ZW50LS10ZXh0J10sXHJcbiAgICAgICAgICAgIC4uLmNvbnRlbnRTdHlsZSxcclxuICAgICAgICAgICAgLi4udGV4dENvbmZpZy5zdHlsZVxyXG4gICAgICAgICAgfVwiXHJcbiAgICAgICAgICB2LWVsc2UtaWY9XCIhaHRtbFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdj57eyBzaG93TGFiZWwgfX08L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzcz1cImdhbnR0LWVsYXN0aWNfX2NoYXJ0LXJvdy10ZXh0LWNvbnRlbnQgZ2FudHQtZWxhc3RpY19fY2hhcnQtcm93LXRleHQtY29udGVudC0taHRtbFwiXHJcbiAgICAgICAgICA6c3R5bGU9XCJ7XHJcbiAgICAgICAgICAgIC4uLnJvb3Quc3R5bGVbJ2NoYXJ0LXJvdy10ZXh0LWNvbnRlbnQnXSxcclxuICAgICAgICAgICAgLi4ucm9vdC5zdHlsZVsnY2hhcnQtcm93LXRleHQtY29udGVudC0taHRtbCddLFxyXG4gICAgICAgICAgICAuLi5jb250ZW50U3R5bGUsXHJcbiAgICAgICAgICAgIC4uLnRleHRDb25maWcuc3R5bGVcclxuICAgICAgICAgIH1cIlxyXG4gICAgICAgICAgdi1lbHNlLWlmPVwiaHRtbFwiXHJcbiAgICAgICAgICB2LWh0bWw9XCJzaG93TGFiZWxcIlxyXG4gICAgICAgID48L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2ZvcmVpZ25PYmplY3Q+XHJcbiAgPC9zdmc+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgUmVuZGVyIGZyb20gJy4uL1JlbmRlci9pbmRleC52dWUnO1xyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgbmFtZTogJ0NoYXJ0VGV4dCcsXHJcbiAgaW5qZWN0OiBbJ3Jvb3QnXSxcclxuICBwcm9wczogWyd0YXNrJ10sXHJcbiAgY29tcG9uZW50czoge1xyXG4gICAgUmVuZGVyXHJcbiAgfSxcclxuICBkYXRhKCkge1xyXG4gICAgcmV0dXJuIHt9O1xyXG4gIH0sXHJcbiAgY29tcHV0ZWQ6IHtcclxuICAgIC8qKlxyXG4gICAgICogR2V0IHdpZHRoXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge251bWJlcn1cclxuICAgICAqL1xyXG4gICAgZ2V0V2lkdGgoKSB7XHJcbiAgICAgIGlmICh0aGlzLnRleHRDb25maWcuZWxsaXBzaXMpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50YXNrLndpZHRoO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHRleHRTdHlsZSA9IHRoaXMucm9vdC5zdHlsZVsnY2hhcnQtcm93LXRleHQnXTtcclxuICAgICAgdGhpcy5yb290LnN0YXRlLmN0eC5mb250ID0gYCR7dGV4dFN0eWxlWydmb250LXdlaWdodCddfSAke3RleHRTdHlsZVsnZm9udC1zaXplJ119ICR7dGV4dFN0eWxlWydmb250LWZhbWlseSddfWA7XHJcbiAgICAgIGNvbnN0IHRleHRXaWR0aCA9IHRoaXMucm9vdC5zdGF0ZS5jdHgubWVhc3VyZVRleHQodGhpcy50YXNrLmxhYmVsKS53aWR0aDtcclxuICAgICAgcmV0dXJuIHRleHRXaWR0aCArIHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLmNoYXJ0LnRleHQueFBhZGRpbmcgKiAyO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldCBoZWlnaHRcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAgICovXHJcbiAgICBnZXRIZWlnaHQoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnRhc2suaGVpZ2h0ICsgdGhpcy5yb290LnN0YXRlLm9wdGlvbnMuY2hhcnQuZ3JpZC5ob3Jpem9udGFsLmdhcCAqIDI7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0IGNvbnRlbnQgc3R5bGVcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fVxyXG4gICAgICovXHJcbiAgICBjb250ZW50U3R5bGUoKSB7XHJcbiAgICAgIHJldHVybiB7IGhlaWdodDogJzEwMCUnLCAnbGluZS1oZWlnaHQnOiB0aGlzLmdldEhlaWdodCArICdweCcgfTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTaG91bGQgd2UgcmVuZGVyIHRleHQgYXMgaHRtbD9cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICAgICAqL1xyXG4gICAgaHRtbCgpIHtcclxuICAgICAgcmV0dXJuIEJvb2xlYW4odGhpcy50ZXh0Q29uZmlnLmh0bWwpO1xyXG4gICAgfSxcclxuICAgIHRleHRDb25maWcoKSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgdGhpcy5yb290LnN0YXRlLm9wdGlvbnMuY2hhcnQudGV4dCB8fCB7XHJcbiAgICAgICAgICBzdHlsZToge30sXHJcbiAgICAgICAgICBodG1sOiBmYWxzZSxcclxuICAgICAgICAgIGVsbGlwc2lzOiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICAgIH0sXHJcblxyXG4gICAgc2hvd0xhYmVsKCkge1xyXG4gICAgICBpZiAodGhpcy50ZXh0Q29uZmlnLmVsbGlwc2lzKSB7XHJcbiAgICAgICAgY29uc3QgbGFiZWxMZW5ndGggPSB0aGlzLnRhc2subGFiZWwubGVuZ3RoIHx8IDA7XHJcbiAgICAgICAgY29uc3QgdGV4dFdpZHRoID0gdGhpcy5yb290LnN0YXRlLmN0eC5tZWFzdXJlVGV4dCh0aGlzLnRhc2subGFiZWwpLndpZHRoO1xyXG4gICAgICAgIGxldCBzaG93TGVuZ3RoID0gTWF0aC5mbG9vcigodGhpcy50YXNrLndpZHRoIC8gdGV4dFdpZHRoKSAqIGxhYmVsTGVuZ3RoKTtcclxuXHJcbiAgICAgICAgaWYgKHNob3dMZW5ndGggPCBsYWJlbExlbmd0aCkge1xyXG4gICAgICAgICAgcmV0dXJuIHRoaXMudGFzay5sYWJlbC5zdWJzdHJpbmcoMCwgc2hvd0xlbmd0aCAtIDIpICsgJy4uLic7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0aGlzLnRhc2subGFiZWw7XHJcbiAgICB9XHJcbiAgfSxcclxuICBtZXRob2RzOiB7fVxyXG59O1xyXG48L3NjcmlwdD5cclxuIiwiPCEtLVxyXG4vKipcclxuICogQGZpbGVvdmVydmlldyBFeHBhbmRlciBjb21wb25lbnRcclxuICogQGxpY2Vuc2UgTUlUXHJcbiAqIEBhdXRob3IgUmFmYWwgUG9zcGllY2ggPG5ldXJvbmV0LmlvQGdtYWlsLmNvbT5cclxuICogQHBhY2thZ2UgR2FudHRFbGFzdGljXHJcbiAqL1xyXG4tLT5cclxuPHRlbXBsYXRlPlxyXG4gIDxkaXYgOmNsYXNzPVwiZ2V0Q2xhc3NQcmVmaXgoKSArICctd3JhcHBlcidcIiA6c3R5bGU9XCJ7IC4uLnJvb3Quc3R5bGVbZ2V0Q2xhc3NQcmVmaXgoZmFsc2UpICsgJy13cmFwcGVyJ10sIC4uLnN0eWxlIH1cIj5cclxuICAgIDxzdmdcclxuICAgICAgOmNsYXNzPVwiZ2V0Q2xhc3NQcmVmaXgoKSArICctY29udGVudCdcIlxyXG4gICAgICA6c3R5bGU9XCJ7IC4uLnJvb3Quc3R5bGVbZ2V0Q2xhc3NQcmVmaXgoZmFsc2UpICsgJy1jb250ZW50J10gfVwiXHJcbiAgICAgIDp3aWR0aD1cIm9wdGlvbnMuc2l6ZVwiXHJcbiAgICAgIDpoZWlnaHQ9XCJvcHRpb25zLnNpemVcIlxyXG4gICAgICB2LWlmPVwiYWxsQ2hpbGRyZW4ubGVuZ3RoXCJcclxuICAgICAgQGNsaWNrPVwidG9nZ2xlXCJcclxuICAgID5cclxuICAgICAgPHJlY3RcclxuICAgICAgICA6Y2xhc3M9XCJnZXRDbGFzc1ByZWZpeCgpICsgJy1ib3JkZXInXCJcclxuICAgICAgICA6c3R5bGU9XCJ7IC4uLnJvb3Quc3R5bGVbZ2V0Q2xhc3NQcmVmaXgoZmFsc2UpICsgJy1ib3JkZXInXSwgLi4uYm9yZGVyU3R5bGUgfVwiXHJcbiAgICAgICAgOng9XCJib3JkZXJcIlxyXG4gICAgICAgIDp5PVwiYm9yZGVyXCJcclxuICAgICAgICA6d2lkdGg9XCJvcHRpb25zLnNpemUgLSBib3JkZXIgKiAyXCJcclxuICAgICAgICA6aGVpZ2h0PVwib3B0aW9ucy5zaXplIC0gYm9yZGVyICogMlwiXHJcbiAgICAgICAgcng9XCIyXCJcclxuICAgICAgICByeT1cIjJcIlxyXG4gICAgICA+PC9yZWN0PlxyXG4gICAgICA8bGluZVxyXG4gICAgICAgIDpjbGFzcz1cImdldENsYXNzUHJlZml4KCkgKyAnLWxpbmUnXCJcclxuICAgICAgICA6c3R5bGU9XCJ7IC4uLnJvb3Quc3R5bGVbZ2V0Q2xhc3NQcmVmaXgoZmFsc2UpICsgJy1saW5lJ10gfVwiXHJcbiAgICAgICAgdi1pZj1cImFsbENoaWxkcmVuLmxlbmd0aFwiXHJcbiAgICAgICAgOngxPVwibGluZU9mZnNldFwiXHJcbiAgICAgICAgOnkxPVwib3B0aW9ucy5zaXplIC8gMlwiXHJcbiAgICAgICAgOngyPVwib3B0aW9ucy5zaXplIC0gbGluZU9mZnNldFwiXHJcbiAgICAgICAgOnkyPVwib3B0aW9ucy5zaXplIC8gMlwiXHJcbiAgICAgID48L2xpbmU+XHJcbiAgICAgIDxsaW5lXHJcbiAgICAgICAgOmNsYXNzPVwiZ2V0Q2xhc3NQcmVmaXgoKSArICctbGluZSdcIlxyXG4gICAgICAgIDpzdHlsZT1cInsgLi4ucm9vdC5zdHlsZVtnZXRDbGFzc1ByZWZpeChmYWxzZSkgKyAnLWxpbmUnXSB9XCJcclxuICAgICAgICB2LWlmPVwiY29sbGFwc2VkXCJcclxuICAgICAgICA6eDE9XCJvcHRpb25zLnNpemUgLyAyXCJcclxuICAgICAgICA6eTE9XCJsaW5lT2Zmc2V0XCJcclxuICAgICAgICA6eDI9XCJvcHRpb25zLnNpemUgLyAyXCJcclxuICAgICAgICA6eTI9XCJvcHRpb25zLnNpemUgLSBsaW5lT2Zmc2V0XCJcclxuICAgICAgPjwvbGluZT5cclxuICAgIDwvc3ZnPlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5hbWU6ICdFeHBhbmRlcicsXHJcbiAgaW5qZWN0OiBbJ3Jvb3QnXSxcclxuICBwcm9wczogWyd0YXNrcycsICdvcHRpb25zJywgJ3R5cGUnXSxcclxuICBkYXRhKCkge1xyXG4gICAgY29uc3QgYm9yZGVyID0gMC41O1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgYm9yZGVyLFxyXG4gICAgICBib3JkZXJTdHlsZToge1xyXG4gICAgICAgICdzdHJva2Utd2lkdGgnOiBib3JkZXJcclxuICAgICAgfSxcclxuICAgICAgbGluZU9mZnNldDogNVxyXG4gICAgfTtcclxuICB9LFxyXG4gIGNvbXB1dGVkOiB7XHJcbiAgICBzdHlsZSgpIHtcclxuICAgICAgaWYgKHRoaXMudHlwZSAhPT0gJ3Rhc2tMaXN0Jykge1xyXG4gICAgICAgIHJldHVybiB7fTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBtYXJnaW4gPSB0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy50YXNrTGlzdC5leHBhbmRlci5tYXJnaW47XHJcbiAgICAgIGNvbnN0IHBhZGRpbmcgPSB0aGlzLnRhc2tzWzBdLnBhcmVudHMubGVuZ3RoICogdGhpcy5yb290LnN0YXRlLm9wdGlvbnMudGFza0xpc3QuZXhwYW5kZXIucGFkZGluZztcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAncGFkZGluZy1sZWZ0JzogcGFkZGluZyArIG1hcmdpbiArICdweCcsXHJcbiAgICAgICAgbWFyZ2luOiAnYXV0byAwJ1xyXG4gICAgICB9O1xyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICogR2V0IGFsbCB0YXNrc1xyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHthcnJheX1cclxuICAgICAqL1xyXG4gICAgYWxsQ2hpbGRyZW4oKSB7XHJcbiAgICAgIGNvbnN0IGNoaWxkcmVuID0gW107XHJcbiAgICAgIHRoaXMudGFza3MuZm9yRWFjaCh0YXNrID0+IHtcclxuICAgICAgICB0YXNrLmFsbENoaWxkcmVuLmZvckVhY2goY2hpbGRJZCA9PiB7XHJcbiAgICAgICAgICBjaGlsZHJlbi5wdXNoKGNoaWxkSWQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIGNoaWxkcmVuO1xyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICogSXMgY3VycmVudCBleHBhbmRlciBjb2xsYXBzZWQ/XHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAgICAgKi9cclxuICAgIGNvbGxhcHNlZCgpIHtcclxuICAgICAgaWYgKHRoaXMudGFza3MubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIGxldCBjb2xsYXBzZWQgPSAwO1xyXG4gICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gdGhpcy50YXNrcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgIGlmICh0aGlzLnRhc2tzW2ldLmNvbGxhcHNlZCkge1xyXG4gICAgICAgICAgY29sbGFwc2VkKys7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBjb2xsYXBzZWQgPT09IHRoaXMudGFza3MubGVuZ3RoO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgc3BlY2lmaWMgY2xhc3MgcHJlZml4XHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge3N0cmluZ31cclxuICAgICAqL1xyXG4gICAgZ2V0Q2xhc3NQcmVmaXgoZnVsbCA9IHRydWUpIHtcclxuICAgICAgcmV0dXJuIGAke2Z1bGwgPyAnZ2FudHQtZWxhc3RpY19fJyA6ICcnfSR7dGhpcy5vcHRpb25zLnR5cGV9LWV4cGFuZGVyYDtcclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICAqIFRvZ2dsZSBleHBhbmRlclxyXG4gICAgICovXHJcbiAgICB0b2dnbGUoKSB7XHJcbiAgICAgIGlmICh0aGlzLnRhc2tzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBjb2xsYXBzZWQgPSAhdGhpcy5jb2xsYXBzZWQ7XHJcbiAgICAgIHRoaXMudGFza3MuZm9yRWFjaCh0YXNrID0+IHtcclxuICAgICAgICB0YXNrLmNvbGxhcHNlZCA9IGNvbGxhcHNlZDtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG48L3NjcmlwdD5cclxuIiwiPCEtLVxyXG4vKipcclxuICogQGZpbGVvdmVydmlldyBNYWluVmlldyBjb21wb25lbnRcclxuICogQGxpY2Vuc2UgTUlUXHJcbiAqIEBhdXRob3IgUmFmYWwgUG9zcGllY2ggPG5ldXJvbmV0LmlvQGdtYWlsLmNvbT5cclxuICogQHBhY2thZ2UgR2FudHRFbGFzdGljXHJcbiAqL1xyXG4tLT5cclxuPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJnYW50dC1lbGFzdGljX19tYWluLXZpZXdcIiA6c3R5bGU9XCJ7IC4uLnJvb3Quc3R5bGVbJ21haW4tdmlldyddIH1cIj5cclxuICAgIDxkaXZcclxuICAgICAgY2xhc3M9XCJnYW50dC1lbGFzdGljX19tYWluLWNvbnRhaW5lci13cmFwcGVyXCJcclxuICAgICAgOnN0eWxlPVwieyAuLi5yb290LnN0eWxlWydtYWluLWNvbnRhaW5lci13cmFwcGVyJ10sIGhlaWdodDogcm9vdC5zdGF0ZS5vcHRpb25zLmhlaWdodCAtIGhpZGRlblJvd3NIZWlnaHQgKyAncHgnIH1cIlxyXG4gICAgPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3M9XCJnYW50dC1lbGFzdGljX19tYWluLWNvbnRhaW5lclwiXHJcbiAgICAgICAgOnN0eWxlPVwie1xyXG4gICAgICAgICAgLi4ucm9vdC5zdHlsZVsnbWFpbi1jb250YWluZXInXSxcclxuICAgICAgICAgIHdpZHRoOiByb290LnN0YXRlLm9wdGlvbnMuY2xpZW50V2lkdGggKyAncHgnLFxyXG4gICAgICAgICAgaGVpZ2h0OiByb290LnN0YXRlLm9wdGlvbnMuaGVpZ2h0IC0gaGlkZGVuUm93c0hlaWdodCArICdweCdcclxuICAgICAgICB9XCJcclxuICAgICAgICByZWY9XCJtYWluVmlld1wiXHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzcz1cImdhbnR0LWVsYXN0aWNfX2NvbnRhaW5lclwiXHJcbiAgICAgICAgICA6c3R5bGU9XCJ7IC4uLnJvb3Quc3R5bGVbJ2NvbnRhaW5lciddIH1cIlxyXG4gICAgICAgICAgQG1vdXNlbW92ZT1cIm1vdXNlTW92ZVwiXHJcbiAgICAgICAgICBAbW91c2V1cD1cIm1vdXNlVXBcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgcmVmPVwidGFza0xpc3RcIlxyXG4gICAgICAgICAgICBjbGFzcz1cImdhbnR0LWVsYXN0aWNfX3Rhc2stbGlzdC1jb250YWluZXJcIlxyXG4gICAgICAgICAgICA6c3R5bGU9XCJ7XHJcbiAgICAgICAgICAgICAgLi4ucm9vdC5zdHlsZVsndGFzay1saXN0LWNvbnRhaW5lciddLFxyXG4gICAgICAgICAgICAgIC8qIOi/meS4quWuveW6puS8muWvvOiHtOWbvuW9ouepuueZve+8iHjovbTnvKnmlL7ml7bvvIkgKi9cclxuICAgICAgICAgICAgICAvLyB3aWR0aDogcm9vdC5zdGF0ZS5vcHRpb25zLnRhc2tMaXN0LmZpbmFsV2lkdGggKyAncHgnLFxyXG4gICAgICAgICAgICAgIGhlaWdodDogcm9vdC5zdGF0ZS5vcHRpb25zLmhlaWdodCAtIGhpZGRlblJvd3NIZWlnaHQgKyAncHgnXHJcbiAgICAgICAgICAgIH1cIlxyXG4gICAgICAgICAgICB2LXNob3c9XCJyb290LnN0YXRlLm9wdGlvbnMudGFza0xpc3QuZGlzcGxheVwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDx0YXNrLWxpc3Q+PC90YXNrLWxpc3Q+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzPVwiZ2FudHQtZWxhc3RpY19fbWFpbi12aWV3LWNvbnRhaW5lclwiXHJcbiAgICAgICAgICAgIDpzdHlsZT1cInsgLi4ucm9vdC5zdHlsZVsnbWFpbi12aWV3LWNvbnRhaW5lciddIH1cIlxyXG4gICAgICAgICAgICByZWY9XCJjaGFydENvbnRhaW5lclwiXHJcbiAgICAgICAgICAgIEBtb3VzZWRvd249XCJjaGFydE1vdXNlRG93blwiXHJcbiAgICAgICAgICAgIEB0b3VjaHN0YXJ0PVwiY2hhcnRNb3VzZURvd25cIlxyXG4gICAgICAgICAgICBAbW91c2V1cD1cImNoYXJ0TW91c2VVcFwiXHJcbiAgICAgICAgICAgIEB0b3VjaGVuZD1cImNoYXJ0TW91c2VVcFwiXHJcbiAgICAgICAgICAgIEBtb3VzZW1vdmUucHJldmVudD1cImNoYXJ0TW91c2VNb3ZlXCJcclxuICAgICAgICAgICAgQHRvdWNobW92ZS5wcmV2ZW50PVwiY2hhcnRNb3VzZU1vdmVcIlxyXG4gICAgICAgICAgICBAd2hlZWwucHJldmVudD1cImNoYXJ0V2hlZWxcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8Y2hhcnQ+PC9jaGFydD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICB2LWlmPVwiZml4ZWRDb2xzLmxlbmd0aFwiXHJcbiAgICAgICAgICAgIHJlZj1cInRhc2tMaXN0XCJcclxuICAgICAgICAgICAgY2xhc3M9XCJnYW50dC1lbGFzdGljX190YXNrLWxpc3QtY29udGFpbmVyXCJcclxuICAgICAgICAgICAgOnN0eWxlPVwie1xyXG4gICAgICAgICAgICAgIC4uLnJvb3Quc3R5bGVbJ3Rhc2stbGlzdC1jb250YWluZXInXSxcclxuICAgICAgICAgICAgICB3aWR0aDogZ2V0Rml4ZWRXaWR0aCxcclxuICAgICAgICAgICAgICBoZWlnaHQ6IHJvb3Quc3RhdGUub3B0aW9ucy5oZWlnaHQgLSBoaWRkZW5Sb3dzSGVpZ2h0ICsgJ3B4J1xyXG4gICAgICAgICAgICB9XCJcclxuICAgICAgICAgICAgdi1zaG93PVwicm9vdC5zdGF0ZS5vcHRpb25zLnRhc2tMaXN0LmRpc3BsYXlcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8dGFzay1saXN0LWZpeGVkPjwvdGFzay1saXN0LWZpeGVkPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3M9XCJnYW50dC1lbGFzdGljX19jaGFydC1zY3JvbGwtY29udGFpbmVyIGdhbnR0LWVsYXN0aWNfX2NoYXJ0LXNjcm9sbC1jb250YWluZXItLXZlcnRpY2FsXCJcclxuICAgICAgICA6c3R5bGU9XCJ7XHJcbiAgICAgICAgICAuLi5yb290LnN0eWxlWydjaGFydC1zY3JvbGwtY29udGFpbmVyJ10sXHJcbiAgICAgICAgICAuLi5yb290LnN0eWxlWydjaGFydC1zY3JvbGwtY29udGFpbmVyLS12ZXJ0aWNhbCddLFxyXG4gICAgICAgICAgLi4udmVydGljYWxTdHlsZVxyXG4gICAgICAgIH1cIlxyXG4gICAgICAgIHJlZj1cImNoYXJ0U2Nyb2xsQ29udGFpbmVyVmVydGljYWxcIlxyXG4gICAgICAgIEBzY3JvbGw9XCJvblZlcnRpY2FsU2Nyb2xsXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzPVwiZ2FudHQtZWxhc3RpY19fY2hhcnQtc2Nyb2xsLS12ZXJ0aWNhbFwiXHJcbiAgICAgICAgICA6c3R5bGU9XCJ7IHdpZHRoOiAnMXB4JywgaGVpZ2h0OiByb290LnN0YXRlLm9wdGlvbnMuYWxsVmlzaWJsZVRhc2tzSGVpZ2h0ICsgJ3B4JyB9XCJcclxuICAgICAgICA+PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzPVwiZ2FudHQtZWxhc3RpY19fY2hhcnQtc2Nyb2xsLWNvbnRhaW5lciBnYW50dC1lbGFzdGljX19jaGFydC1zY3JvbGwtY29udGFpbmVyLS1ob3Jpem9udGFsXCJcclxuICAgICAgOnN0eWxlPVwie1xyXG4gICAgICAgIC4uLnJvb3Quc3R5bGVbJ2NoYXJ0LXNjcm9sbC1jb250YWluZXInXSxcclxuICAgICAgICAuLi5yb290LnN0eWxlWydjaGFydC1zY3JvbGwtY29udGFpbmVyLS1ob3Jpem9udGFsJ10sXHJcbiAgICAgICAgbWFyZ2luTGVmdDogZ2V0TWFyZ2luTGVmdCxcclxuICAgICAgICBtYXJnaW5SaWdodDogZ2V0TWFyZ2luUmlnaHRcclxuICAgICAgfVwiXHJcbiAgICAgIEBzY3JvbGw9XCJvbkhvcml6b250YWxTY3JvbGxcIlxyXG4gICAgICByZWY9XCJjaGFydFNjcm9sbENvbnRhaW5lckhvcml6b250YWxcIlxyXG4gICAgPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3M9XCJnYW50dC1lbGFzdGljX19jaGFydC1zY3JvbGwtLWhvcml6b250YWxcIlxyXG4gICAgICAgIDpzdHlsZT1cInsgaGVpZ2h0OiAnMXB4Jywgd2lkdGg6IHJvb3Quc3RhdGUub3B0aW9ucy53aWR0aCArICdweCcgfVwiXHJcbiAgICAgID48L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IFRhc2tMaXN0IGZyb20gJy4vVGFza0xpc3QvVGFza0xpc3QudnVlJztcclxuaW1wb3J0IFRhc2tMaXN0Rml4ZWQgZnJvbSAnLi9UYXNrTGlzdEZpeGVkL1Rhc2tMaXN0LnZ1ZSc7XHJcbmltcG9ydCBDaGFydCBmcm9tICcuL0NoYXJ0L0NoYXJ0LnZ1ZSc7XHJcblxyXG5sZXQgaWdub3JlU2Nyb2xsRXZlbnRzID0gZmFsc2U7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgbmFtZTogJ01haW5WaWV3JyxcclxuICBjb21wb25lbnRzOiB7XHJcbiAgICBUYXNrTGlzdCxcclxuICAgIENoYXJ0LFxyXG4gICAgVGFza0xpc3RGaXhlZFxyXG4gIH0sXHJcbiAgaW5qZWN0OiBbJ3Jvb3QnXSxcclxuICBkYXRhKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZGVmczogJycsXHJcbiAgICAgIG1vdXNlUG9zOiB7XHJcbiAgICAgICAgeDogMCxcclxuICAgICAgICB5OiAwLFxyXG4gICAgICAgIG1vdmVtZW50WDogMCxcclxuICAgICAgICBtb3ZlbWVudFk6IDAsXHJcbiAgICAgICAgbGFzdFg6IDAsXHJcbiAgICAgICAgbGFzdFk6IDAsXHJcbiAgICAgICAgcG9zaXRpdmVYOiAwLFxyXG4gICAgICAgIHBvc2l0aXZlWTogMCxcclxuICAgICAgICBjdXJyZW50WDogMCxcclxuICAgICAgICBjdXJyZW50WTogMFxyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogTW91bnRlZFxyXG4gICAqL1xyXG4gIG1vdW50ZWQoKSB7XHJcbiAgICB0aGlzLnZpZXdCb3hXaWR0aCA9IHRoaXMuJGVsLmNsaWVudFdpZHRoO1xyXG4gICAgdGhpcy5yb290LnN0YXRlLnJlZnMubWFpblZpZXcgPSB0aGlzLiRyZWZzLm1haW5WaWV3O1xyXG4gICAgdGhpcy5yb290LnN0YXRlLnJlZnMuY2hhcnRDb250YWluZXIgPSB0aGlzLiRyZWZzLmNoYXJ0Q29udGFpbmVyO1xyXG4gICAgdGhpcy5yb290LnN0YXRlLnJlZnMudGFza0xpc3QgPSB0aGlzLiRyZWZzLnRhc2tMaXN0O1xyXG4gICAgdGhpcy5yb290LnN0YXRlLnJlZnMuY2hhcnRTY3JvbGxDb250YWluZXJIb3Jpem9udGFsID0gdGhpcy4kcmVmcy5jaGFydFNjcm9sbENvbnRhaW5lckhvcml6b250YWw7XHJcbiAgICB0aGlzLnJvb3Quc3RhdGUucmVmcy5jaGFydFNjcm9sbENvbnRhaW5lclZlcnRpY2FsID0gdGhpcy4kcmVmcy5jaGFydFNjcm9sbENvbnRhaW5lclZlcnRpY2FsO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuY2hhcnRNb3VzZVVwLmJpbmQodGhpcykpO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5jaGFydE1vdXNlTW92ZS5iaW5kKHRoaXMpKTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMuY2hhcnRNb3VzZU1vdmUuYmluZCh0aGlzKSk7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXMuY2hhcnRNb3VzZVVwLmJpbmQodGhpcykpO1xyXG4gIH0sXHJcbiAgY29tcHV0ZWQ6IHtcclxuICAgIC8qKlxyXG4gICAgICogR2V0IGhpZGRlbiByb3dzIGhlaWdodFxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKi9cclxuICAgIGhpZGRlblJvd3NIZWlnaHQoKSB7XHJcbiAgICAgIGxldCBoID0gMDtcclxuICAgICAgdGhpcy5yb290LnZpc2libGVUYXNrcy5mb3JFYWNoKHYgPT4ge1xyXG4gICAgICAgIGlmICh2LnNob3dUYXNrTGlzdCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgIGggKz0gdi5oZWlnaHQgKyAxNCB8fCAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBoO1xyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICogR2V0IG1hcmdpbiBsZWZ0XHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge3N0cmluZ31cclxuICAgICAqL1xyXG4gICAgZ2V0TWFyZ2luTGVmdCgpIHtcclxuICAgICAgaWYgKCF0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy50YXNrTGlzdC5kaXNwbGF5KSB7XHJcbiAgICAgICAgcmV0dXJuICcwcHgnO1xyXG4gICAgICB9XHJcbiAgICAgIGxldCBzdW1GaXhlZCA9IDA7XHJcblxyXG4gICAgICBpZiAodGhpcy5maXhlZENvbHMubGVuZ3RoKSB7XHJcbiAgICAgICAgc3VtRml4ZWQgPSB0aGlzLmZpeGVkQ29sc1xyXG4gICAgICAgICAgLm1hcCh2ID0+IHYuZmluYWxXaWR0aClcclxuICAgICAgICAgIC5maWx0ZXIodiA9PiB2ICYmICFOdW1iZXIuaXNOYU4odikpXHJcbiAgICAgICAgICAucmVkdWNlKChhLCBiKSA9PiBhICsgYik7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLnRhc2tMaXN0LmZpbmFsV2lkdGggLSBzdW1GaXhlZCArICdweCc7XHJcbiAgICB9LFxyXG4gICAgZml4ZWRDb2xzKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5yb290LnN0YXRlLm9wdGlvbnMudGFza0xpc3QuY29sdW1ucy5maWx0ZXIodiA9PiB2LmZpeGVkID09PSAncmlnaHQnKTtcclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICAqIEdldCBtYXJnaW4gcmlnaHRcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxyXG4gICAgICovXHJcbiAgICBnZXRNYXJnaW5SaWdodCgpIHtcclxuICAgICAgaWYgKCF0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy50YXNrTGlzdC5kaXNwbGF5KSB7XHJcbiAgICAgICAgcmV0dXJuICcwcHgnO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLmZpeGVkQ29scy5sZW5ndGgpIHtcclxuICAgICAgICBjb25zdCBzdW0gPSB0aGlzLmZpeGVkQ29sc1xyXG4gICAgICAgICAgLm1hcCh2ID0+IHYuZmluYWxXaWR0aClcclxuICAgICAgICAgIC5maWx0ZXIodiA9PiB2ICYmICFOdW1iZXIuaXNOYU4odikpXHJcbiAgICAgICAgICAucmVkdWNlKChhLCBiKSA9PiBhICsgYik7XHJcbiAgICAgICAgcmV0dXJuIHN1bSArICdweCc7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuICcwcHgnO1xyXG4gICAgfSxcclxuICAgIGdldEZpeGVkV2lkdGgoKSB7XHJcbiAgICAgIGxldCBzdW1GaXhlZCA9IDA7XHJcbiAgICAgIGlmICh0aGlzLmZpeGVkQ29scy5sZW5ndGgpIHtcclxuICAgICAgICBzdW1GaXhlZCA9IHRoaXMuZml4ZWRDb2xzXHJcbiAgICAgICAgICAubWFwKHYgPT4gdi5maW5hbFdpZHRoKVxyXG4gICAgICAgICAgLmZpbHRlcih2ID0+IHYgJiYgIU51bWJlci5pc05hTih2KSlcclxuICAgICAgICAgIC5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiKTtcclxuICAgICAgfVxyXG4gICAgICAvLyB0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy50YXNrTGlzdC5maW5hbFdpZHRoXHJcbiAgICAgIHJldHVybiBzdW1GaXhlZCArICdweCc7XHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdmVydGljYWwgc3R5bGVcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fVxyXG4gICAgICovXHJcbiAgICB2ZXJ0aWNhbFN0eWxlKCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHdpZHRoOiB0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy5zY3JvbGxCYXJIZWlnaHQgKyAncHgnLFxyXG4gICAgICAgIGhlaWdodDogdGhpcy5yb290LnN0YXRlLm9wdGlvbnMucm93c0hlaWdodCAtIHRoaXMuaGlkZGVuUm93c0hlaWdodCArICdweCcsXHJcbiAgICAgICAgJ21hcmdpbi10b3AnOiB0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy5jYWxlbmRhci5oZWlnaHQgKyB0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy5jYWxlbmRhci5nYXAgKyAncHgnLFxyXG4gICAgICAgIG92ZXJmbG93WTogJ2hpZGRlbidcclxuICAgICAgfTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdmlldyBib3hcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxyXG4gICAgICovXHJcbiAgICBnZXRWaWV3Qm94KCkge1xyXG4gICAgICBpZiAodGhpcy5yb290LnN0YXRlLm9wdGlvbnMuY2xpZW50V2lkdGgpIHtcclxuICAgICAgICByZXR1cm4gYDAgMCAke3RoaXMucm9vdC5zdGF0ZS5vcHRpb25zLmNsaWVudFdpZHRoIC0gdGhpcy5yb290LnN0YXRlLm9wdGlvbnMuc2Nyb2xsQmFySGVpZ2h0fSAke3RoaXMucm9vdC5zdGF0ZVxyXG4gICAgICAgICAgLm9wdGlvbnMuaGVpZ2h0IC0gdGhpcy5oaWRkZW5Sb3dzSGVpZ2h0fWA7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGAwIDAgMCAke3RoaXMucm9vdC5zdGF0ZS5vcHRpb25zLmhlaWdodCAtIHRoaXMuaGlkZGVuUm93c0hlaWdodH1gO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgLyoqXHJcbiAgICAgKiBFbWl0IGV2ZW50IHdoZW4gbW91c2UgaXMgbW92aW5nIGluc2lkZSBtYWluIHZpZXdcclxuICAgICAqL1xyXG4gICAgbW91c2VNb3ZlKGV2ZW50KSB7XHJcbiAgICAgIHRoaXMucm9vdC4kZW1pdCgnbWFpbi12aWV3LW1vdXNlbW92ZScsIGV2ZW50KTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBFbWl0IG1vdXNldXAgZXZlbnQgaW5zaWRlIG1haW4gdmlld1xyXG4gICAgICovXHJcbiAgICBtb3VzZVVwKGV2ZW50KSB7XHJcbiAgICAgIHRoaXMucm9vdC4kZW1pdCgnbWFpbi12aWV3LW1vdXNldXAnLCBldmVudCk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSG9yaXpvbnRhbCBzY3JvbGwgZXZlbnQgaGFuZGxlclxyXG4gICAgICovXHJcbiAgICBvbkhvcml6b250YWxTY3JvbGwoZXYpIHtcclxuICAgICAgdGhpcy5yb290LiRlbWl0KCdjaGFydC1zY3JvbGwtaG9yaXpvbnRhbCcsIGV2KTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBWZXJ0aWNhbCBzY3JvbGwgZXZlbnQgaGFuZGxlclxyXG4gICAgICovXHJcbiAgICBvblZlcnRpY2FsU2Nyb2xsKGV2KSB7XHJcbiAgICAgIHRoaXMucm9vdC4kZW1pdCgnY2hhcnQtc2Nyb2xsLXZlcnRpY2FsJywgZXYpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIE1vdXNlIHdoZWVsIGV2ZW50IGhhbmRsZXJcclxuICAgICAqL1xyXG4gICAgY2hhcnRXaGVlbChldikge1xyXG4gICAgICB0aGlzLnJvb3QuJGVtaXQoJ2NoYXJ0LXdoZWVsJywgZXYpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIENoYXJ0IG1vdXNlZG93biBldmVudCBoYW5kbGVyXHJcbiAgICAgKiBJbml0aWF0ZXMgZHJhZyBzY3JvbGxpbmcgbW9kZVxyXG4gICAgICovXHJcbiAgICBjaGFydE1vdXNlRG93bihldikge1xyXG4gICAgICBpZiAodHlwZW9mIGV2LnRvdWNoZXMgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgdGhpcy5tb3VzZVBvcy54ID0gdGhpcy5tb3VzZVBvcy5sYXN0WCA9IGV2LnRvdWNoZXNbMF0uc2NyZWVuWDtcclxuICAgICAgICB0aGlzLm1vdXNlUG9zLnkgPSB0aGlzLm1vdXNlUG9zLmxhc3RZID0gZXYudG91Y2hlc1swXS5zY3JlZW5ZO1xyXG4gICAgICAgIHRoaXMubW91c2VQb3MubW92ZW1lbnRYID0gMDtcclxuICAgICAgICB0aGlzLm1vdXNlUG9zLm1vdmVtZW50WSA9IDA7XHJcbiAgICAgICAgdGhpcy5tb3VzZVBvcy5jdXJyZW50WCA9IHRoaXMuJHJlZnMuY2hhcnRTY3JvbGxDb250YWluZXJIb3Jpem9udGFsLnNjcm9sbExlZnQ7XHJcbiAgICAgICAgdGhpcy5tb3VzZVBvcy5jdXJyZW50WSA9IHRoaXMuJHJlZnMuY2hhcnRTY3JvbGxDb250YWluZXJWZXJ0aWNhbC5zY3JvbGxUb3A7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5yb290LnN0YXRlLm9wdGlvbnMuc2Nyb2xsLnNjcm9sbGluZyA9IHRydWU7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2hhcnQgbW91c2V1cCBldmVudCBoYW5kbGVyXHJcbiAgICAgKiBEZWFjdGl2YXRlcyBkcmFnIHNjcm9sbGluZyBtb2RlXHJcbiAgICAgKi9cclxuICAgIGNoYXJ0TW91c2VVcChldikge1xyXG4gICAgICB0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy5zY3JvbGwuc2Nyb2xsaW5nID0gZmFsc2U7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2hhcnQgbW91c2Vtb3ZlIGV2ZW50IGhhbmRsZXJcclxuICAgICAqIFdoZW4gaW4gZHJhZyBzY3JvbGxpbmcgbW9kZSB0aGlzIG1ldGhvZCBjYWxjdWxhdGUgc2Nyb2xsIG1vdmVtZW50XHJcbiAgICAgKi9cclxuICAgIGNoYXJ0TW91c2VNb3ZlKGV2KSB7XHJcbiAgICAgIGlmICh0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy5zY3JvbGwuc2Nyb2xsaW5nKSB7XHJcbiAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBldi5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcclxuICAgICAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICBjb25zdCB0b3VjaCA9IHR5cGVvZiBldi50b3VjaGVzICE9PSAndW5kZWZpbmVkJztcclxuICAgICAgICBsZXQgbW92ZW1lbnRYLCBtb3ZlbWVudFk7XHJcbiAgICAgICAgaWYgKHRvdWNoKSB7XHJcbiAgICAgICAgICBjb25zdCBzY3JlZW5YID0gZXYudG91Y2hlc1swXS5zY3JlZW5YO1xyXG4gICAgICAgICAgY29uc3Qgc2NyZWVuWSA9IGV2LnRvdWNoZXNbMF0uc2NyZWVuWTtcclxuICAgICAgICAgIG1vdmVtZW50WCA9IHRoaXMubW91c2VQb3MueCAtIHNjcmVlblg7XHJcbiAgICAgICAgICBtb3ZlbWVudFkgPSB0aGlzLm1vdXNlUG9zLnkgLSBzY3JlZW5ZO1xyXG4gICAgICAgICAgdGhpcy5tb3VzZVBvcy5sYXN0WCA9IHNjcmVlblg7XHJcbiAgICAgICAgICB0aGlzLm1vdXNlUG9zLmxhc3RZID0gc2NyZWVuWTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgbW92ZW1lbnRYID0gZXYubW92ZW1lbnRYO1xyXG4gICAgICAgICAgbW92ZW1lbnRZID0gZXYubW92ZW1lbnRZO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBob3Jpem9udGFsID0gdGhpcy4kcmVmcy5jaGFydFNjcm9sbENvbnRhaW5lckhvcml6b250YWw7XHJcbiAgICAgICAgY29uc3QgdmVydGljYWwgPSB0aGlzLiRyZWZzLmNoYXJ0U2Nyb2xsQ29udGFpbmVyVmVydGljYWw7XHJcbiAgICAgICAgbGV0IHggPSAwLFxyXG4gICAgICAgICAgeSA9IDA7XHJcbiAgICAgICAgaWYgKHRvdWNoKSB7XHJcbiAgICAgICAgICB4ID0gdGhpcy5tb3VzZVBvcy5jdXJyZW50WCArIG1vdmVtZW50WCAqIHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLnNjcm9sbC5kcmFnWE1vdmVNdWx0aXBsaWVyO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB4ID0gaG9yaXpvbnRhbC5zY3JvbGxMZWZ0IC0gbW92ZW1lbnRYICogdGhpcy5yb290LnN0YXRlLm9wdGlvbnMuc2Nyb2xsLmRyYWdYTW92ZU11bHRpcGxpZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGhvcml6b250YWwuc2Nyb2xsTGVmdCA9IHg7XHJcbiAgICAgICAgaWYgKHRvdWNoKSB7XHJcbiAgICAgICAgICB5ID0gdGhpcy5tb3VzZVBvcy5jdXJyZW50WSArIG1vdmVtZW50WSAqIHRoaXMucm9vdC5zdGF0ZS5vcHRpb25zLnNjcm9sbC5kcmFnWU1vdmVNdWx0aXBsaWVyO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB5ID0gdmVydGljYWwuc2Nyb2xsVG9wIC0gbW92ZW1lbnRZICogdGhpcy5yb290LnN0YXRlLm9wdGlvbnMuc2Nyb2xsLmRyYWdZTW92ZU11bHRpcGxpZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZlcnRpY2FsLnNjcm9sbFRvcCA9IHk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiBCZWZvcmUgZGVzdHJveSBldmVudCAtIGNsZWFuIHVwXHJcbiAgICovXHJcbiAgYmVmb3JlRGVzdHJveSgpIHtcclxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLmNoYXJ0TW91c2VVcCk7XHJcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLmNoYXJ0TW91c2VNb3ZlKTtcclxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMuY2hhcnRNb3VzZU1vdmUpO1xyXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLmNoYXJ0TW91c2VVcCk7XHJcbiAgfVxyXG59O1xyXG48L3NjcmlwdD5cclxuIiwiPHNjcmlwdD5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5hbWU6ICdSZW5kZXInLFxyXG4gIGZ1bmN0aW9uYWw6IHRydWUsXHJcbiAgcHJvcHM6IHtcclxuICAgIHJlbmRlcjogRnVuY3Rpb25cclxuICB9LFxyXG4gIHJlbmRlcihjcmVhdGVFbGVtZW50LCBjb250ZXh0KSB7XHJcbiAgICByZXR1cm4gY29udGV4dC5wcm9wcy5yZW5kZXIoY3JlYXRlRWxlbWVudCk7XHJcbiAgfVxyXG59O1xyXG48L3NjcmlwdD5cclxuIiwiPCEtLVxyXG4vKipcclxuICogQGZpbGVvdmVydmlldyBJdGVtQ29sdW1uIGNvbXBvbmVudFxyXG4gKiBAbGljZW5zZSBNSVRcclxuICogQGF1dGhvciBSYWZhbCBQb3NwaWVjaCA8bmV1cm9uZXQuaW9AZ21haWwuY29tPlxyXG4gKiBAcGFja2FnZSBHYW50dEVsYXN0aWNcclxuICovXHJcbi0tPlxyXG48dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cImdhbnR0LWVsYXN0aWNfX3Rhc2stbGlzdC1pdGVtLWNvbHVtblwiIDpzdHlsZT1cIml0ZW1Db2x1bW5TdHlsZVwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImdhbnR0LWVsYXN0aWNfX3Rhc2stbGlzdC1pdGVtLXZhbHVlLXdyYXBwZXJcIiA6c3R5bGU9XCJ3cmFwcGVyU3R5bGVcIj5cclxuICAgICAgPHNsb3Q+PC9zbG90PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZ2FudHQtZWxhc3RpY19fdGFzay1saXN0LWl0ZW0tdmFsdWUtY29udGFpbmVyXCIgOnN0eWxlPVwiY29udGFpbmVyU3R5bGVcIj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICB2LWlmPVwiIWh0bWwgJiYgIWNvbHVtbi5yZW5kZXJcIlxyXG4gICAgICAgICAgY2xhc3M9XCJnYW50dC1lbGFzdGljX190YXNrLWxpc3QtaXRlbS12YWx1ZVwiXHJcbiAgICAgICAgICA6c3R5bGU9XCJ2YWx1ZVN0eWxlXCJcclxuICAgICAgICAgIEBjbGljaz1cImVtaXRFdmVudCgnY2xpY2snLCAkZXZlbnQpXCJcclxuICAgICAgICAgIEBtb3VzZWVudGVyPVwiZW1pdEV2ZW50KCdtb3VzZWVudGVyJywgJGV2ZW50KVwiXHJcbiAgICAgICAgICBAbW91c2VvdmVyPVwiZW1pdEV2ZW50KCdtb3VzZW92ZXInLCAkZXZlbnQpXCJcclxuICAgICAgICAgIEBtb3VzZW91dD1cImVtaXRFdmVudCgnbW91c2VvdXQnLCAkZXZlbnQpXCJcclxuICAgICAgICAgIEBtb3VzZW1vdmU9XCJlbWl0RXZlbnQoJ21vdXNlbW92ZScsICRldmVudClcIlxyXG4gICAgICAgICAgQG1vdXNlZG93bj1cImVtaXRFdmVudCgnbW91c2Vkb3duJywgJGV2ZW50KVwiXHJcbiAgICAgICAgICBAbW91c2V1cD1cImVtaXRFdmVudCgnbW91c2V1cCcsICRldmVudClcIlxyXG4gICAgICAgICAgQG1vdXNld2hlZWw9XCJlbWl0RXZlbnQoJ21vdXNld2hlZWwnLCAkZXZlbnQpXCJcclxuICAgICAgICAgIEB0b3VjaHN0YXJ0PVwiZW1pdEV2ZW50KCd0b3VjaHN0YXJ0JywgJGV2ZW50KVwiXHJcbiAgICAgICAgICBAdG91Y2htb3ZlPVwiZW1pdEV2ZW50KCd0b3VjaG1vdmUnLCAkZXZlbnQpXCJcclxuICAgICAgICAgIEB0b3VjaGVuZD1cImVtaXRFdmVudCgndG91Y2hlbmQnLCAkZXZlbnQpXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICB7eyB2YWx1ZSB9fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxSZW5kZXIgdi1lbHNlLWlmPVwiY29sdW1uLnJlbmRlclwiIDpyZW5kZXI9XCIoKSA9PiBjb2x1bW4ucmVuZGVyKHZhbHVlLCB0YXNrKVwiIC8+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgdi1lbHNlXHJcbiAgICAgICAgICBjbGFzcz1cImdhbnR0LWVsYXN0aWNfX3Rhc2stbGlzdC1pdGVtLXZhbHVlXCJcclxuICAgICAgICAgIDpzdHlsZT1cInZhbHVlU3R5bGVcIlxyXG4gICAgICAgICAgQGNsaWNrPVwiZW1pdEV2ZW50KCdjbGljaycsICRldmVudClcIlxyXG4gICAgICAgICAgQG1vdXNlZW50ZXI9XCJlbWl0RXZlbnQoJ21vdXNlZW50ZXInLCAkZXZlbnQpXCJcclxuICAgICAgICAgIEBtb3VzZW92ZXI9XCJlbWl0RXZlbnQoJ21vdXNlb3ZlcicsICRldmVudClcIlxyXG4gICAgICAgICAgQG1vdXNlb3V0PVwiZW1pdEV2ZW50KCdtb3VzZW91dCcsICRldmVudClcIlxyXG4gICAgICAgICAgQG1vdXNlbW92ZT1cImVtaXRFdmVudCgnbW91c2Vtb3ZlJywgJGV2ZW50KVwiXHJcbiAgICAgICAgICBAbW91c2Vkb3duPVwiZW1pdEV2ZW50KCdtb3VzZWRvd24nLCAkZXZlbnQpXCJcclxuICAgICAgICAgIEBtb3VzZXVwPVwiZW1pdEV2ZW50KCdtb3VzZXVwJywgJGV2ZW50KVwiXHJcbiAgICAgICAgICBAbW91c2V3aGVlbD1cImVtaXRFdmVudCgnbW91c2V3aGVlbCcsICRldmVudClcIlxyXG4gICAgICAgICAgQHRvdWNoc3RhcnQ9XCJlbWl0RXZlbnQoJ3RvdWNoc3RhcnQnLCAkZXZlbnQpXCJcclxuICAgICAgICAgIEB0b3VjaG1vdmU9XCJlbWl0RXZlbnQoJ3RvdWNobW92ZScsICRldmVudClcIlxyXG4gICAgICAgICAgQHRvdWNoZW5kPVwiZW1pdEV2ZW50KCd0b3VjaGVuZCcsICRldmVudClcIlxyXG4gICAgICAgICAgdi1odG1sPVwidmFsdWVcIlxyXG4gICAgICAgID48L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCBSZW5kZXIgZnJvbSAnLi4vUmVuZGVyL2luZGV4LnZ1ZSc7XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBuYW1lOiAnSXRlbUNvbHVtbicsXHJcbiAgaW5qZWN0OiBbJ3Jvb3QnXSxcclxuICBwcm9wczogWydjb2x1bW4nLCAndGFzayddLFxyXG4gIGNvbXBvbmVudHM6IHtcclxuICAgIFJlbmRlclxyXG4gIH0sXHJcbiAgZGF0YSgpIHtcclxuICAgIHJldHVybiB7fTtcclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIC8qKlxyXG4gICAgICogRW1pdCBldmVudFxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBldmVudE5hbWVcclxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XHJcbiAgICAgKi9cclxuICAgIGVtaXRFdmVudChldmVudE5hbWUsIGV2ZW50KSB7XHJcbiAgICAgIGlmICh0eXBlb2YgdGhpcy5jb2x1bW4uZXZlbnRzICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgdGhpcy5jb2x1bW4uZXZlbnRzW2V2ZW50TmFtZV0gPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICB0aGlzLmNvbHVtbi5ldmVudHNbZXZlbnROYW1lXSh7IGV2ZW50LCBkYXRhOiB0aGlzLnRhc2ssIGNvbHVtbjogdGhpcy5jb2x1bW4gfSk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5yb290LiRlbWl0KGB0YXNrTGlzdC0ke3RoaXMudGFzay50eXBlfS0ke2V2ZW50TmFtZX1gLCB7IGV2ZW50LCBkYXRhOiB0aGlzLnRhc2ssIGNvbHVtbjogdGhpcy5jb2x1bW4gfSk7XHJcbiAgICB9XHJcbiAgfSxcclxuICBjb21wdXRlZDoge1xyXG4gICAgLyoqXHJcbiAgICAgKiBTaG91bGQgd2UgZGlzcGxheSBodG1sIG9yIGp1c3QgdGV4dD9cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICAgICAqL1xyXG4gICAgaHRtbCgpIHtcclxuICAgICAgaWYgKHR5cGVvZiB0aGlzLmNvbHVtbi5odG1sICE9PSAndW5kZWZpbmVkJyAmJiB0aGlzLmNvbHVtbi5odG1sID09PSB0cnVlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldCBjb2x1bW4gdmFsdWVcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7YW55fHN0cmluZ31cclxuICAgICAqL1xyXG4gICAgdmFsdWUoKSB7XHJcbiAgICAgIGlmICh0eXBlb2YgdGhpcy5jb2x1bW4udmFsdWUgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb2x1bW4udmFsdWUodGhpcy50YXNrKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdGhpcy50YXNrW3RoaXMuY29sdW1uLnZhbHVlXTtcclxuICAgIH0sXHJcblxyXG4gICAgaXRlbUNvbHVtblN0eWxlKCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnRoaXMucm9vdC5zdHlsZVsndGFzay1saXN0LWl0ZW0tY29sdW1uJ10sXHJcbiAgICAgICAgLi4udGhpcy5jb2x1bW4uc3R5bGVbJ3Rhc2stbGlzdC1pdGVtLWNvbHVtbiddLFxyXG4gICAgICAgIHdpZHRoOiB0aGlzLmNvbHVtbi5maW5hbFdpZHRoICsgJ3B4JyxcclxuICAgICAgICBoZWlnaHQ6IHRoaXMuY29sdW1uLmhlaWdodCArICdweCdcclxuICAgICAgfTtcclxuICAgIH0sXHJcblxyXG4gICAgd3JhcHBlclN0eWxlKCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnRoaXMucm9vdC5zdHlsZVsndGFzay1saXN0LWl0ZW0tdmFsdWUtd3JhcHBlciddLFxyXG4gICAgICAgIC4uLnRoaXMuY29sdW1uLnN0eWxlWyd0YXNrLWxpc3QtaXRlbS12YWx1ZS13cmFwcGVyJ11cclxuICAgICAgfTtcclxuICAgIH0sXHJcblxyXG4gICAgY29udGFpbmVyU3R5bGUoKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4udGhpcy5yb290LnN0eWxlWyd0YXNrLWxpc3QtaXRlbS12YWx1ZS1jb250YWluZXInXSxcclxuICAgICAgICAuLi50aGlzLmNvbHVtbi5zdHlsZVsndGFzay1saXN0LWl0ZW0tdmFsdWUtY29udGFpbmVyJ11cclxuICAgICAgfTtcclxuICAgIH0sXHJcblxyXG4gICAgdmFsdWVTdHlsZSgpIHtcclxuICAgICAgcmV0dXJuIHsgLi4udGhpcy5yb290LnN0eWxlWyd0YXNrLWxpc3QtaXRlbS12YWx1ZSddLCAuLi50aGlzLmNvbHVtbi5zdHlsZVsndGFzay1saXN0LWl0ZW0tdmFsdWUnXSB9O1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuPC9zY3JpcHQ+XHJcbiIsIjwhLS1cclxuLyoqXHJcbiAqIEBmaWxlb3ZlcnZpZXcgVGFza0xpc3QgY29tcG9uZW50XHJcbiAqIEBsaWNlbnNlIE1JVFxyXG4gKiBAYXV0aG9yIFJhZmFsIFBvc3BpZWNoIDxuZXVyb25ldC5pb0BnbWFpbC5jb20+XHJcbiAqIEBwYWNrYWdlIEdhbnR0RWxhc3RpY1xyXG4gKi9cclxuLS0+XHJcbjx0ZW1wbGF0ZT5cclxuICA8ZGl2XHJcbiAgICBjbGFzcz1cImdhbnR0LWVsYXN0aWNfX3Rhc2stbGlzdC13cmFwcGVyXCJcclxuICAgIHJlZj1cInRhc2tMaXN0V3JhcHBlclwiXHJcbiAgICA6c3R5bGU9XCJ7IC4uLnJvb3Quc3R5bGVbJ3Rhc2stbGlzdC13cmFwcGVyJ10sIHdpZHRoOiAnMTAwJScsIGhlaWdodDogJzEwMCUnIH1cIlxyXG4gICAgdi1zaG93PVwicm9vdC5zdGF0ZS5vcHRpb25zLnRhc2tMaXN0LmRpc3BsYXlcIlxyXG4gID5cclxuICAgIDxkaXYgY2xhc3M9XCJnYW50dC1lbGFzdGljX190YXNrLWxpc3RcIiA6c3R5bGU9XCJ7IC4uLnJvb3Quc3R5bGVbJ3Rhc2stbGlzdCddIH1cIiByZWY9XCJ0YXNrTGlzdFwiPlxyXG4gICAgICA8dGFzay1saXN0LWhlYWRlcj48L3Rhc2stbGlzdC1oZWFkZXI+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzcz1cImdhbnR0LWVsYXN0aWNfX3Rhc2stbGlzdC1pdGVtc1wiXHJcbiAgICAgICAgcmVmPVwidGFza0xpc3RJdGVtc1wiXHJcbiAgICAgICAgOnN0eWxlPVwieyAuLi5yb290LnN0eWxlWyd0YXNrLWxpc3QtaXRlbXMnXSwgaGVpZ2h0OiByb290LnN0YXRlLm9wdGlvbnMucm93c0hlaWdodCArICdweCcgfVwiXHJcbiAgICAgID5cclxuICAgICAgICA8dGFzay1saXN0LWl0ZW0gdi1mb3I9XCJ0YXNrIGluIHNob3dUYXNrc1wiIDprZXk9XCJ0YXNrLmlkXCIgOnRhc2s9XCJ0YXNrXCI+PC90YXNrLWxpc3QtaXRlbT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCBUYXNrTGlzdEhlYWRlciBmcm9tICcuL1Rhc2tMaXN0SGVhZGVyLnZ1ZSc7XHJcbmltcG9ydCBUYXNrTGlzdEl0ZW0gZnJvbSAnLi9UYXNrTGlzdEl0ZW0udnVlJztcclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5hbWU6ICdUYXNrTGlzdCcsXHJcbiAgY29tcG9uZW50czoge1xyXG4gICAgVGFza0xpc3RIZWFkZXIsXHJcbiAgICBUYXNrTGlzdEl0ZW1cclxuICB9LFxyXG4gIGluamVjdDogWydyb290J10sXHJcbiAgY29tcHV0ZWQ6IHtcclxuICAgIHNob3dUYXNrcygpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucm9vdC52aXNpYmxlVGFza3MuZmlsdGVyKHYgPT4gdi5zaG93VGFza0xpc3QgIT09IGZhbHNlKTtcclxuICAgIH1cclxuICB9LFxyXG4gIGRhdGEoKSB7XHJcbiAgICByZXR1cm4ge307XHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICogTW91bnRlZFxyXG4gICAqL1xyXG4gIG1vdW50ZWQoKSB7XHJcbiAgICB0aGlzLnJvb3Quc3RhdGUucmVmcy50YXNrTGlzdFdyYXBwZXIgPSB0aGlzLiRyZWZzLnRhc2tMaXN0V3JhcHBlcjtcclxuICAgIHRoaXMucm9vdC5zdGF0ZS5yZWZzLnRhc2tMaXN0ID0gdGhpcy4kcmVmcy50YXNrTGlzdDtcclxuICAgIHRoaXMucm9vdC5zdGF0ZS5yZWZzLnRhc2tMaXN0SXRlbXMgPSB0aGlzLiRyZWZzLnRhc2tMaXN0SXRlbXM7XHJcbiAgfVxyXG59O1xyXG48L3NjcmlwdD5cclxuIiwiPCEtLVxyXG4vKipcclxuICogQGZpbGVvdmVydmlldyBUYXNrTGlzdEhlYWRlciBjb21wb25lbnRcclxuICogQGxpY2Vuc2UgTUlUXHJcbiAqIEBhdXRob3IgUmFmYWwgUG9zcGllY2ggPG5ldXJvbmV0LmlvQGdtYWlsLmNvbT5cclxuICogQHBhY2thZ2UgR2FudHRFbGFzdGljXHJcbiAqL1xyXG4tLT5cclxuPHRlbXBsYXRlPlxyXG4gIDxkaXZcclxuICAgIGNsYXNzPVwiZ2FudHQtZWxhc3RpY19fdGFzay1saXN0LWhlYWRlclwiXHJcbiAgICA6c3R5bGU9XCJ7XHJcbiAgICAgIC4uLnJvb3Quc3R5bGVbJ3Rhc2stbGlzdC1oZWFkZXInXSxcclxuICAgICAgaGVpZ2h0OiBgJHtyb290LnN0YXRlLm9wdGlvbnMuY2FsZW5kYXIuaGVpZ2h0fXB4YCxcclxuICAgICAgJ21hcmdpbi1ib3R0b20nOiBgJHtyb290LnN0YXRlLm9wdGlvbnMuY2FsZW5kYXIuZ2FwfXB4YFxyXG4gICAgfVwiXHJcbiAgPlxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzcz1cImdhbnR0LWVsYXN0aWNfX3Rhc2stbGlzdC1oZWFkZXItY29sdW1uXCJcclxuICAgICAgOnN0eWxlPVwie1xyXG4gICAgICAgIC4uLnJvb3Quc3R5bGVbJ3Rhc2stbGlzdC1oZWFkZXItY29sdW1uJ10sXHJcbiAgICAgICAgLi4uY29sdW1uLnN0eWxlWyd0YXNrLWxpc3QtaGVhZGVyLWNvbHVtbiddLFxyXG4gICAgICAgIC4uLmdldFN0eWxlKGNvbHVtbilcclxuICAgICAgfVwiXHJcbiAgICAgIHYtZm9yPVwiY29sdW1uIGluIHJvb3QuZ2V0VGFza0xpc3RDb2x1bW5zXCJcclxuICAgICAgOmtleT1cImNvbHVtbi5faWRcIlxyXG4gICAgPlxyXG4gICAgICA8dGFzay1saXN0LWV4cGFuZGVyXHJcbiAgICAgICAgdi1pZj1cImNvbHVtbi5leHBhbmRlclwiXHJcbiAgICAgICAgOnRhc2tzPVwiY29sbGFwc2libGVcIlxyXG4gICAgICAgIDpvcHRpb25zPVwicm9vdC5zdGF0ZS5vcHRpb25zLnRhc2tMaXN0LmV4cGFuZGVyXCJcclxuICAgICAgPjwvdGFzay1saXN0LWV4cGFuZGVyPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3M9XCJnYW50dC1lbGFzdGljX190YXNrLWxpc3QtaGVhZGVyLWxhYmVsXCJcclxuICAgICAgICA6c3R5bGU9XCJ7IC4uLnJvb3Quc3R5bGVbJ3Rhc2stbGlzdC1oZWFkZXItbGFiZWwnXSwgLi4uY29sdW1uLnN0eWxlWyd0YXNrLWxpc3QtaGVhZGVyLWxhYmVsJ10gfVwiXHJcbiAgICAgICAgOmNvbHVtbj1cImNvbHVtblwiXHJcbiAgICAgICAgQG1vdXNldXA9XCJyZXNpemVyTW91c2VVcFwiXHJcbiAgICAgID5cclxuICAgICAgICB7eyBjb2x1bW4ubGFiZWwgfX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzcz1cImdhbnR0LWVsYXN0aWNfX3Rhc2stbGlzdC1oZWFkZXItcmVzaXplci13cmFwcGVyXCJcclxuICAgICAgICA6c3R5bGU9XCJ7XHJcbiAgICAgICAgICAuLi5yb290LnN0eWxlWyd0YXNrLWxpc3QtaGVhZGVyLXJlc2l6ZXItd3JhcHBlciddLFxyXG4gICAgICAgICAgLi4uY29sdW1uLnN0eWxlWyd0YXNrLWxpc3QtaGVhZGVyLXJlc2l6ZXItd3JhcHBlciddXHJcbiAgICAgICAgfVwiXHJcbiAgICAgICAgOmNvbHVtbj1cImNvbHVtblwiXHJcbiAgICAgICAgQG1vdXNlZG93bj1cInJlc2l6ZXJNb3VzZURvd24oJGV2ZW50LCBjb2x1bW4pXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzPVwiZ2FudHQtZWxhc3RpY19fdGFzay1saXN0LWhlYWRlci1yZXNpemVyXCJcclxuICAgICAgICAgIDpzdHlsZT1cInsgLi4ucm9vdC5zdHlsZVsndGFzay1saXN0LWhlYWRlci1yZXNpemVyJ10sIC4uLmNvbHVtbi5zdHlsZVsndGFzay1saXN0LWhlYWRlci1yZXNpemVyJ10gfVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzcz1cImdhbnR0LWVsYXN0aWNfX3Rhc2stbGlzdC1oZWFkZXItcmVzaXplci1kb3RcIlxyXG4gICAgICAgICAgICA6c3R5bGU9XCJ7IC4uLnJvb3Quc3R5bGVbJ3Rhc2stbGlzdC1oZWFkZXItcmVzaXplci1kb3QnXSwgLi4uY29sdW1uLnN0eWxlWyd0YXNrLWxpc3QtaGVhZGVyLXJlc2l6ZXItZG90J10gfVwiXHJcbiAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzPVwiZ2FudHQtZWxhc3RpY19fdGFzay1saXN0LWhlYWRlci1yZXNpemVyLWRvdFwiXHJcbiAgICAgICAgICAgIDpzdHlsZT1cInsgLi4ucm9vdC5zdHlsZVsndGFzay1saXN0LWhlYWRlci1yZXNpemVyLWRvdCddLCAuLi5jb2x1bW4uc3R5bGVbJ3Rhc2stbGlzdC1oZWFkZXItcmVzaXplci1kb3QnXSB9XCJcclxuICAgICAgICAgID48L2Rpdj5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3M9XCJnYW50dC1lbGFzdGljX190YXNrLWxpc3QtaGVhZGVyLXJlc2l6ZXItZG90XCJcclxuICAgICAgICAgICAgOnN0eWxlPVwieyAuLi5yb290LnN0eWxlWyd0YXNrLWxpc3QtaGVhZGVyLXJlc2l6ZXItZG90J10sIC4uLmNvbHVtbi5zdHlsZVsndGFzay1saXN0LWhlYWRlci1yZXNpemVyLWRvdCddIH1cIlxyXG4gICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IFRhc2tMaXN0RXhwYW5kZXIgZnJvbSAnLi4vRXhwYW5kZXIudnVlJztcclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5hbWU6ICdUYXNrTGlzdEhlYWRlcicsXHJcbiAgY29tcG9uZW50czoge1xyXG4gICAgVGFza0xpc3RFeHBhbmRlclxyXG4gIH0sXHJcblxyXG4gIGluamVjdDogWydyb290J10sXHJcblxyXG4gIGRhdGEoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICByZXNpemVyOiB7XHJcbiAgICAgICAgbW92aW5nOiBmYWxzZSxcclxuICAgICAgICB4OiAwXHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfSxcclxuXHJcbiAgY29tcHV0ZWQ6IHtcclxuICAgIC8qKlxyXG4gICAgICogSXMgdGhpcyByb3cgY29sbGFwc2libGU/XHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge2Jvb2x9XHJcbiAgICAgKi9cclxuICAgIGNvbGxhcHNpYmxlKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5yb290LnN0YXRlLnRhc2tzLmZpbHRlcih0YXNrID0+IHRhc2suYWxsQ2hpbGRyZW4ubGVuZ3RoID4gMCk7XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgbWV0aG9kczoge1xyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgc3R5bGVcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fVxyXG4gICAgICovXHJcbiAgICBnZXRTdHlsZShjb2x1bW4pIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICB3aWR0aDogY29sdW1uLmZpbmFsV2lkdGggKyAncHgnXHJcbiAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXNpemVyIG1vdXNlIGRvd24gZXZlbnQgaGFuZGxlclxyXG4gICAgICovXHJcbiAgICByZXNpemVyTW91c2VEb3duKGV2ZW50LCBjb2x1bW4pIHtcclxuICAgICAgaWYgKCF0aGlzLnJlc2l6ZXIubW92aW5nKSB7XHJcbiAgICAgICAgdGhpcy5yZXNpemVyLm1vdmluZyA9IGNvbHVtbjtcclxuICAgICAgICB0aGlzLnJlc2l6ZXIueCA9IGV2ZW50LmNsaWVudFg7XHJcbiAgICAgICAgdGhpcy5yZXNpemVyLmluaXRpYWxXaWR0aCA9IGNvbHVtbi53aWR0aDtcclxuICAgICAgICB0aGlzLnJvb3QuJGVtaXQoJ3Rhc2tMaXN0LWNvbHVtbi13aWR0aC1jaGFuZ2Utc3RhcnQnLCB0aGlzLnJlc2l6ZXIubW92aW5nKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlc2l6ZXIgbW91c2UgbW92ZSBldmVudCBoYW5kbGVyXHJcbiAgICAgKi9cclxuICAgIHJlc2l6ZXJNb3VzZU1vdmUoZXZlbnQpIHtcclxuICAgICAgaWYgKHRoaXMucmVzaXplci5tb3ZpbmcpIHtcclxuICAgICAgICBjb25zdCBsYXN0V2lkdGggPSB0aGlzLnJlc2l6ZXIubW92aW5nLndpZHRoO1xyXG4gICAgICAgIHRoaXMucmVzaXplci5tb3Zpbmcud2lkdGggPSB0aGlzLnJlc2l6ZXIuaW5pdGlhbFdpZHRoICsgZXZlbnQuY2xpZW50WCAtIHRoaXMucmVzaXplci54O1xyXG4gICAgICAgIGlmICh0aGlzLnJlc2l6ZXIubW92aW5nLndpZHRoIDwgdGhpcy5yb290LnN0YXRlLm9wdGlvbnMudGFza0xpc3QubWluV2lkdGgpIHtcclxuICAgICAgICAgIHRoaXMucmVzaXplci5tb3Zpbmcud2lkdGggPSB0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy50YXNrTGlzdC5taW5XaWR0aDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGxhc3RXaWR0aCAhPT0gdGhpcy5yZXNpemVyLm1vdmluZy53aWR0aCkge1xyXG4gICAgICAgICAgdGhpcy5yb290LiRlbWl0KCd0YXNrTGlzdC1jb2x1bW4td2lkdGgtY2hhbmdlJywgdGhpcy5yZXNpemVyLm1vdmluZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVzaXplciBtb3VzZSB1cCBldmVudCBoYW5kbGVyXHJcbiAgICAgKi9cclxuICAgIHJlc2l6ZXJNb3VzZVVwKGV2ZW50KSB7XHJcbiAgICAgIGlmICh0aGlzLnJlc2l6ZXIubW92aW5nKSB7XHJcbiAgICAgICAgdGhpcy5yb290LiRlbWl0KCd0YXNrTGlzdC1jb2x1bW4td2lkdGgtY2hhbmdlLXN0b3AnLCB0aGlzLnJlc2l6ZXIubW92aW5nKTtcclxuICAgICAgICB0aGlzLnJlc2l6ZXIubW92aW5nID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGVkXHJcbiAgICovXHJcbiAgY3JlYXRlZCgpIHtcclxuICAgIHRoaXMubW91c2VVcExpc3RlbmVyID0gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMucmVzaXplck1vdXNlVXAuYmluZCh0aGlzKSk7XHJcbiAgICB0aGlzLm1vdXNlTW92ZUxpc3RlbmVyID0gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5yZXNpemVyTW91c2VNb3ZlLmJpbmQodGhpcykpO1xyXG4gICAgdGhpcy5yb290LiRvbignbWFpbi12aWV3LW1vdXNlbW92ZScsIHRoaXMucmVzaXplck1vdXNlTW92ZSk7XHJcbiAgICB0aGlzLnJvb3QuJG9uKCdtYWluLXZpZXctbW91c2V1cCcsIHRoaXMucmVzaXplck1vdXNlVXApO1xyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIEJlZm9yZSBkZXN0cm95IGV2ZW50IC0gY2xlYXIgYWxsIGV2ZW50IGxpc3RlbmVyc1xyXG4gICAqL1xyXG4gIGJlZm9yZURlc3Ryb3koKSB7XHJcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5yZXNpemVyTW91c2VVcCk7XHJcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLnJlc2l6ZXJNb3VzZU1vdmUpO1xyXG4gIH1cclxufTtcclxuPC9zY3JpcHQ+XHJcbiIsIjwhLS1cclxuLyoqXHJcbiAqIEBmaWxlb3ZlcnZpZXcgVGFza0xpc3RJdGVtIGNvbXBvbmVudFxyXG4gKiBAbGljZW5zZSBNSVRcclxuICogQGF1dGhvciBSYWZhbCBQb3NwaWVjaCA8bmV1cm9uZXQuaW9AZ21haWwuY29tPlxyXG4gKiBAcGFja2FnZSBHYW50dEVsYXN0aWNcclxuICovXHJcbi0tPlxyXG48dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cImdhbnR0LWVsYXN0aWNfX3Rhc2stbGlzdC1pdGVtXCIgOnN0eWxlPVwieyAuLi5yb290LnN0eWxlWyd0YXNrLWxpc3QtaXRlbSddIH1cIiBAY2xpY2s9XCJoYW5kbGVSb3dcIj5cclxuICAgIDxpdGVtLWNvbHVtbiB2LWZvcj1cImNvbHVtbiBpbiBjb2x1bW5zXCIgOmtleT1cImNvbHVtbi5faWRcIiA6Y29sdW1uPVwiY29sdW1uXCIgOnRhc2s9XCJ0YXNrXCI+XHJcbiAgICAgIDx0YXNrLWxpc3QtZXhwYW5kZXJcclxuICAgICAgICB2LWlmPVwiY29sdW1uLmV4cGFuZGVyXCJcclxuICAgICAgICA6dGFza3M9XCJbdGFza11cIlxyXG4gICAgICAgIDpvcHRpb25zPVwicm9vdC5zdGF0ZS5vcHRpb25zLnRhc2tMaXN0LmV4cGFuZGVyXCJcclxuICAgICAgICB0eXBlPVwidGFza0xpc3RcIlxyXG4gICAgICA+PC90YXNrLWxpc3QtZXhwYW5kZXI+XHJcbiAgICA8L2l0ZW0tY29sdW1uPlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG48c2NyaXB0PlxyXG5pbXBvcnQgVGFza0xpc3RFeHBhbmRlciBmcm9tICcuLi9FeHBhbmRlci52dWUnO1xyXG5pbXBvcnQgSXRlbUNvbHVtbiBmcm9tICcuL0l0ZW1Db2x1bW4udnVlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBuYW1lOiAnVGFza0xpc3RJdGVtJyxcclxuICBjb21wb25lbnRzOiB7XHJcbiAgICBUYXNrTGlzdEV4cGFuZGVyLFxyXG4gICAgSXRlbUNvbHVtblxyXG4gIH0sXHJcbiAgaW5qZWN0OiBbJ3Jvb3QnXSxcclxuICBwcm9wczogWyd0YXNrJ10sXHJcbiAgZGF0YSgpIHtcclxuICAgIHJldHVybiB7fTtcclxuICB9LFxyXG4gIGNvbXB1dGVkOiB7XHJcbiAgICBjb2x1bW5zKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5yb290LnN0YXRlLm9wdGlvbnMudGFza0xpc3QuY29sdW1ucy5maWx0ZXIodiA9PiB2LmZpeGVkICE9PSAncmlnaHQnKTtcclxuICAgIH1cclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIGhhbmRsZVJvdyhldmVudCkge1xyXG4gICAgICBpZiAodGhpcy5yb290LiRsaXN0ZW5lcnMudGFza1Jvd0NsaWNrKSB7XHJcbiAgICAgICAgdGhpcy5yb290LiRsaXN0ZW5lcnMudGFza1Jvd0NsaWNrKGV2ZW50LCB0aGlzLnRhc2spO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG48L3NjcmlwdD5cclxuIiwiPCEtLVxyXG4vKipcclxuICogQGZpbGVvdmVydmlldyBJdGVtQ29sdW1uIGNvbXBvbmVudFxyXG4gKiBAbGljZW5zZSBNSVRcclxuICogQGF1dGhvciBSYWZhbCBQb3NwaWVjaCA8bmV1cm9uZXQuaW9AZ21haWwuY29tPlxyXG4gKiBAcGFja2FnZSBHYW50dEVsYXN0aWNcclxuICovXHJcbi0tPlxyXG48dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cImdhbnR0LWVsYXN0aWNfX3Rhc2stbGlzdC1pdGVtLWNvbHVtblwiIDpzdHlsZT1cIml0ZW1Db2x1bW5TdHlsZVwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImdhbnR0LWVsYXN0aWNfX3Rhc2stbGlzdC1pdGVtLXZhbHVlLXdyYXBwZXJcIiA6c3R5bGU9XCJ3cmFwcGVyU3R5bGVcIj5cclxuICAgICAgPHNsb3Q+PC9zbG90PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZ2FudHQtZWxhc3RpY19fdGFzay1saXN0LWl0ZW0tdmFsdWUtY29udGFpbmVyXCIgOnN0eWxlPVwiY29udGFpbmVyU3R5bGVcIj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICB2LWlmPVwiIWh0bWwgJiYgIWNvbHVtbi5yZW5kZXJcIlxyXG4gICAgICAgICAgY2xhc3M9XCJnYW50dC1lbGFzdGljX190YXNrLWxpc3QtaXRlbS12YWx1ZVwiXHJcbiAgICAgICAgICA6c3R5bGU9XCJ2YWx1ZVN0eWxlXCJcclxuICAgICAgICAgIEBjbGljaz1cImVtaXRFdmVudCgnY2xpY2snLCAkZXZlbnQpXCJcclxuICAgICAgICAgIEBtb3VzZWVudGVyPVwiZW1pdEV2ZW50KCdtb3VzZWVudGVyJywgJGV2ZW50KVwiXHJcbiAgICAgICAgICBAbW91c2VvdmVyPVwiZW1pdEV2ZW50KCdtb3VzZW92ZXInLCAkZXZlbnQpXCJcclxuICAgICAgICAgIEBtb3VzZW91dD1cImVtaXRFdmVudCgnbW91c2VvdXQnLCAkZXZlbnQpXCJcclxuICAgICAgICAgIEBtb3VzZW1vdmU9XCJlbWl0RXZlbnQoJ21vdXNlbW92ZScsICRldmVudClcIlxyXG4gICAgICAgICAgQG1vdXNlZG93bj1cImVtaXRFdmVudCgnbW91c2Vkb3duJywgJGV2ZW50KVwiXHJcbiAgICAgICAgICBAbW91c2V1cD1cImVtaXRFdmVudCgnbW91c2V1cCcsICRldmVudClcIlxyXG4gICAgICAgICAgQG1vdXNld2hlZWw9XCJlbWl0RXZlbnQoJ21vdXNld2hlZWwnLCAkZXZlbnQpXCJcclxuICAgICAgICAgIEB0b3VjaHN0YXJ0PVwiZW1pdEV2ZW50KCd0b3VjaHN0YXJ0JywgJGV2ZW50KVwiXHJcbiAgICAgICAgICBAdG91Y2htb3ZlPVwiZW1pdEV2ZW50KCd0b3VjaG1vdmUnLCAkZXZlbnQpXCJcclxuICAgICAgICAgIEB0b3VjaGVuZD1cImVtaXRFdmVudCgndG91Y2hlbmQnLCAkZXZlbnQpXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICB7eyB2YWx1ZSB9fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxSZW5kZXIgdi1lbHNlLWlmPVwiY29sdW1uLnJlbmRlclwiIDpyZW5kZXI9XCIoKSA9PiBjb2x1bW4ucmVuZGVyKHZhbHVlLCB0YXNrKVwiIC8+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgdi1lbHNlXHJcbiAgICAgICAgICBjbGFzcz1cImdhbnR0LWVsYXN0aWNfX3Rhc2stbGlzdC1pdGVtLXZhbHVlXCJcclxuICAgICAgICAgIDpzdHlsZT1cInZhbHVlU3R5bGVcIlxyXG4gICAgICAgICAgQGNsaWNrPVwiZW1pdEV2ZW50KCdjbGljaycsICRldmVudClcIlxyXG4gICAgICAgICAgQG1vdXNlZW50ZXI9XCJlbWl0RXZlbnQoJ21vdXNlZW50ZXInLCAkZXZlbnQpXCJcclxuICAgICAgICAgIEBtb3VzZW92ZXI9XCJlbWl0RXZlbnQoJ21vdXNlb3ZlcicsICRldmVudClcIlxyXG4gICAgICAgICAgQG1vdXNlb3V0PVwiZW1pdEV2ZW50KCdtb3VzZW91dCcsICRldmVudClcIlxyXG4gICAgICAgICAgQG1vdXNlbW92ZT1cImVtaXRFdmVudCgnbW91c2Vtb3ZlJywgJGV2ZW50KVwiXHJcbiAgICAgICAgICBAbW91c2Vkb3duPVwiZW1pdEV2ZW50KCdtb3VzZWRvd24nLCAkZXZlbnQpXCJcclxuICAgICAgICAgIEBtb3VzZXVwPVwiZW1pdEV2ZW50KCdtb3VzZXVwJywgJGV2ZW50KVwiXHJcbiAgICAgICAgICBAbW91c2V3aGVlbD1cImVtaXRFdmVudCgnbW91c2V3aGVlbCcsICRldmVudClcIlxyXG4gICAgICAgICAgQHRvdWNoc3RhcnQ9XCJlbWl0RXZlbnQoJ3RvdWNoc3RhcnQnLCAkZXZlbnQpXCJcclxuICAgICAgICAgIEB0b3VjaG1vdmU9XCJlbWl0RXZlbnQoJ3RvdWNobW92ZScsICRldmVudClcIlxyXG4gICAgICAgICAgQHRvdWNoZW5kPVwiZW1pdEV2ZW50KCd0b3VjaGVuZCcsICRldmVudClcIlxyXG4gICAgICAgICAgdi1odG1sPVwidmFsdWVcIlxyXG4gICAgICAgID48L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCBSZW5kZXIgZnJvbSAnLi4vUmVuZGVyL2luZGV4LnZ1ZSc7XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBuYW1lOiAnSXRlbUNvbHVtbicsXHJcbiAgaW5qZWN0OiBbJ3Jvb3QnXSxcclxuICBwcm9wczogWydjb2x1bW4nLCAndGFzayddLFxyXG4gIGNvbXBvbmVudHM6IHtcclxuICAgIFJlbmRlclxyXG4gIH0sXHJcbiAgZGF0YSgpIHtcclxuICAgIHJldHVybiB7fTtcclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIC8qKlxyXG4gICAgICogRW1pdCBldmVudFxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBldmVudE5hbWVcclxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XHJcbiAgICAgKi9cclxuICAgIGVtaXRFdmVudChldmVudE5hbWUsIGV2ZW50KSB7XHJcbiAgICAgIGlmICh0eXBlb2YgdGhpcy5jb2x1bW4uZXZlbnRzICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgdGhpcy5jb2x1bW4uZXZlbnRzW2V2ZW50TmFtZV0gPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICB0aGlzLmNvbHVtbi5ldmVudHNbZXZlbnROYW1lXSh7IGV2ZW50LCBkYXRhOiB0aGlzLnRhc2ssIGNvbHVtbjogdGhpcy5jb2x1bW4gfSk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5yb290LiRlbWl0KGB0YXNrTGlzdC0ke3RoaXMudGFzay50eXBlfS0ke2V2ZW50TmFtZX1gLCB7IGV2ZW50LCBkYXRhOiB0aGlzLnRhc2ssIGNvbHVtbjogdGhpcy5jb2x1bW4gfSk7XHJcbiAgICB9XHJcbiAgfSxcclxuICBjb21wdXRlZDoge1xyXG4gICAgLyoqXHJcbiAgICAgKiBTaG91bGQgd2UgZGlzcGxheSBodG1sIG9yIGp1c3QgdGV4dD9cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICAgICAqL1xyXG4gICAgaHRtbCgpIHtcclxuICAgICAgaWYgKHR5cGVvZiB0aGlzLmNvbHVtbi5odG1sICE9PSAndW5kZWZpbmVkJyAmJiB0aGlzLmNvbHVtbi5odG1sID09PSB0cnVlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICogR2V0IGNvbHVtbiB2YWx1ZVxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHthbnl8c3RyaW5nfVxyXG4gICAgICovXHJcbiAgICB2YWx1ZSgpIHtcclxuICAgICAgaWYgKHR5cGVvZiB0aGlzLmNvbHVtbi52YWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbHVtbi52YWx1ZSh0aGlzLnRhc2spO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0aGlzLnRhc2tbdGhpcy5jb2x1bW4udmFsdWVdO1xyXG4gICAgfSxcclxuXHJcbiAgICBpdGVtQ29sdW1uU3R5bGUoKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4udGhpcy5yb290LnN0eWxlWyd0YXNrLWxpc3QtaXRlbS1jb2x1bW4nXSxcclxuICAgICAgICAuLi50aGlzLmNvbHVtbi5zdHlsZVsndGFzay1saXN0LWl0ZW0tY29sdW1uJ10sXHJcbiAgICAgICAgd2lkdGg6IHRoaXMuY29sdW1uLmZpbmFsV2lkdGggKyAncHgnLFxyXG4gICAgICAgIGhlaWdodDogdGhpcy5jb2x1bW4uaGVpZ2h0ICsgJ3B4J1xyXG4gICAgICB9O1xyXG4gICAgfSxcclxuXHJcbiAgICB3cmFwcGVyU3R5bGUoKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4udGhpcy5yb290LnN0eWxlWyd0YXNrLWxpc3QtaXRlbS12YWx1ZS13cmFwcGVyJ10sXHJcbiAgICAgICAgLi4udGhpcy5jb2x1bW4uc3R5bGVbJ3Rhc2stbGlzdC1pdGVtLXZhbHVlLXdyYXBwZXInXVxyXG4gICAgICB9O1xyXG4gICAgfSxcclxuXHJcbiAgICBjb250YWluZXJTdHlsZSgpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi50aGlzLnJvb3Quc3R5bGVbJ3Rhc2stbGlzdC1pdGVtLXZhbHVlLWNvbnRhaW5lciddLFxyXG4gICAgICAgIC4uLnRoaXMuY29sdW1uLnN0eWxlWyd0YXNrLWxpc3QtaXRlbS12YWx1ZS1jb250YWluZXInXVxyXG4gICAgICB9O1xyXG4gICAgfSxcclxuXHJcbiAgICB2YWx1ZVN0eWxlKCkge1xyXG4gICAgICByZXR1cm4geyAuLi50aGlzLnJvb3Quc3R5bGVbJ3Rhc2stbGlzdC1pdGVtLXZhbHVlJ10sIC4uLnRoaXMuY29sdW1uLnN0eWxlWyd0YXNrLWxpc3QtaXRlbS12YWx1ZSddIH07XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG48L3NjcmlwdD5cclxuIiwiPCEtLVxyXG4vKipcclxuICogQGZpbGVvdmVydmlldyBUYXNrTGlzdEhlYWRlciBjb21wb25lbnRcclxuICogQGxpY2Vuc2UgTUlUXHJcbiAqIEBhdXRob3IgUmFmYWwgUG9zcGllY2ggPG5ldXJvbmV0LmlvQGdtYWlsLmNvbT5cclxuICogQHBhY2thZ2UgR2FudHRFbGFzdGljXHJcbiAqL1xyXG4tLT5cclxuPHRlbXBsYXRlPlxyXG4gIDxkaXZcclxuICAgIGNsYXNzPVwiZ2FudHQtZWxhc3RpY19fdGFzay1saXN0LWhlYWRlclwiXHJcbiAgICA6c3R5bGU9XCJ7XHJcbiAgICAgIC4uLnJvb3Quc3R5bGVbJ3Rhc2stbGlzdC1oZWFkZXInXSxcclxuICAgICAgaGVpZ2h0OiBgJHtyb290LnN0YXRlLm9wdGlvbnMuY2FsZW5kYXIuaGVpZ2h0fXB4YCxcclxuICAgICAgJ21hcmdpbi1ib3R0b20nOiBgJHtyb290LnN0YXRlLm9wdGlvbnMuY2FsZW5kYXIuZ2FwfXB4YFxyXG4gICAgfVwiXHJcbiAgPlxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzcz1cImdhbnR0LWVsYXN0aWNfX3Rhc2stbGlzdC1oZWFkZXItY29sdW1uXCJcclxuICAgICAgOnN0eWxlPVwie1xyXG4gICAgICAgIC4uLnJvb3Quc3R5bGVbJ3Rhc2stbGlzdC1oZWFkZXItY29sdW1uJ10sXHJcbiAgICAgICAgLi4uY29sdW1uLnN0eWxlWyd0YXNrLWxpc3QtaGVhZGVyLWNvbHVtbiddLFxyXG4gICAgICAgIC4uLmdldFN0eWxlKGNvbHVtbilcclxuICAgICAgfVwiXHJcbiAgICAgIHYtZm9yPVwiY29sdW1uIGluIGNvbHVtbnNcIlxyXG4gICAgICA6a2V5PVwiY29sdW1uLl9pZFwiXHJcbiAgICA+XHJcbiAgICAgIDx0YXNrLWxpc3QtZXhwYW5kZXJcclxuICAgICAgICB2LWlmPVwiY29sdW1uLmV4cGFuZGVyXCJcclxuICAgICAgICA6dGFza3M9XCJjb2xsYXBzaWJsZVwiXHJcbiAgICAgICAgOm9wdGlvbnM9XCJyb290LnN0YXRlLm9wdGlvbnMudGFza0xpc3QuZXhwYW5kZXJcIlxyXG4gICAgICA+PC90YXNrLWxpc3QtZXhwYW5kZXI+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzcz1cImdhbnR0LWVsYXN0aWNfX3Rhc2stbGlzdC1oZWFkZXItbGFiZWxcIlxyXG4gICAgICAgIDpzdHlsZT1cInsgLi4ucm9vdC5zdHlsZVsndGFzay1saXN0LWhlYWRlci1sYWJlbCddLCAuLi5jb2x1bW4uc3R5bGVbJ3Rhc2stbGlzdC1oZWFkZXItbGFiZWwnXSB9XCJcclxuICAgICAgICA6Y29sdW1uPVwiY29sdW1uXCJcclxuICAgICAgPlxyXG4gICAgICAgIHt7IGNvbHVtbi5sYWJlbCB9fVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IFRhc2tMaXN0RXhwYW5kZXIgZnJvbSAnLi4vRXhwYW5kZXIudnVlJztcclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5hbWU6ICdUYXNrTGlzdEhlYWRlcicsXHJcbiAgY29tcG9uZW50czoge1xyXG4gICAgVGFza0xpc3RFeHBhbmRlclxyXG4gIH0sXHJcblxyXG4gIGluamVjdDogWydyb290J10sXHJcblxyXG4gIGRhdGEoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICByZXNpemVyOiB7XHJcbiAgICAgICAgbW92aW5nOiBmYWxzZSxcclxuICAgICAgICB4OiAwXHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfSxcclxuXHJcbiAgY29tcHV0ZWQ6IHtcclxuICAgIC8qKlxyXG4gICAgICogSXMgdGhpcyByb3cgY29sbGFwc2libGU/XHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge2Jvb2x9XHJcbiAgICAgKi9cclxuICAgIGNvbGxhcHNpYmxlKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5yb290LnN0YXRlLnRhc2tzLmZpbHRlcih0YXNrID0+IHRhc2suYWxsQ2hpbGRyZW4ubGVuZ3RoID4gMCk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0IGNvbHVtbnNcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7YXJyYXl9XHJcbiAgICAgKi9cclxuICAgIGNvbHVtbnMoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy50YXNrTGlzdC5jb2x1bW5zLmZpbHRlcih2ID0+IHYuZml4ZWQgPT09ICdyaWdodCcpO1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIG1ldGhvZHM6IHtcclxuICAgIC8qKlxyXG4gICAgICogR2V0IHN0eWxlXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge29iamVjdH1cclxuICAgICAqL1xyXG4gICAgZ2V0U3R5bGUoY29sdW1uKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgd2lkdGg6IGNvbHVtbi5maW5hbFdpZHRoICsgJ3B4J1xyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZWRcclxuICAgKi9cclxuICBjcmVhdGVkKCkge30sXHJcblxyXG4gIC8qKlxyXG4gICAqIEJlZm9yZSBkZXN0cm95IGV2ZW50IC0gY2xlYXIgYWxsIGV2ZW50IGxpc3RlbmVyc1xyXG4gICAqL1xyXG4gIGJlZm9yZURlc3Ryb3koKSB7fVxyXG59O1xyXG48L3NjcmlwdD5cclxuIiwiPCEtLVxyXG4vKipcclxuICogQGZpbGVvdmVydmlldyBUYXNrTGlzdEl0ZW0gY29tcG9uZW50XHJcbiAqIEBsaWNlbnNlIE1JVFxyXG4gKiBAYXV0aG9yIFJhZmFsIFBvc3BpZWNoIDxuZXVyb25ldC5pb0BnbWFpbC5jb20+XHJcbiAqIEBwYWNrYWdlIEdhbnR0RWxhc3RpY1xyXG4gKi9cclxuLS0+XHJcbjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwiZ2FudHQtZWxhc3RpY19fdGFzay1saXN0LWl0ZW1cIiA6c3R5bGU9XCJ7IC4uLnJvb3Quc3R5bGVbJ3Rhc2stbGlzdC1pdGVtJ10gfVwiPlxyXG4gICAgPGl0ZW0tY29sdW1uIHYtZm9yPVwiY29sdW1uIGluIGNvbHVtbnNcIiA6a2V5PVwiY29sdW1uLl9pZFwiIDpjb2x1bW49XCJjb2x1bW5cIiA6dGFzaz1cInRhc2tcIj5cclxuICAgICAgPHRhc2stbGlzdC1leHBhbmRlclxyXG4gICAgICAgIHYtaWY9XCJjb2x1bW4uZXhwYW5kZXJcIlxyXG4gICAgICAgIDp0YXNrcz1cIlt0YXNrXVwiXHJcbiAgICAgICAgOm9wdGlvbnM9XCJyb290LnN0YXRlLm9wdGlvbnMudGFza0xpc3QuZXhwYW5kZXJcIlxyXG4gICAgICAgIHR5cGU9XCJ0YXNrTGlzdFwiXHJcbiAgICAgID48L3Rhc2stbGlzdC1leHBhbmRlcj5cclxuICAgIDwvaXRlbS1jb2x1bW4+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcbjxzY3JpcHQ+XHJcbmltcG9ydCBUYXNrTGlzdEV4cGFuZGVyIGZyb20gJy4uL0V4cGFuZGVyLnZ1ZSc7XHJcbmltcG9ydCBJdGVtQ29sdW1uIGZyb20gJy4vSXRlbUNvbHVtbi52dWUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5hbWU6ICdUYXNrTGlzdEl0ZW0nLFxyXG4gIGNvbXBvbmVudHM6IHtcclxuICAgIFRhc2tMaXN0RXhwYW5kZXIsXHJcbiAgICBJdGVtQ29sdW1uXHJcbiAgfSxcclxuICBpbmplY3Q6IFsncm9vdCddLFxyXG4gIHByb3BzOiBbJ3Rhc2snXSxcclxuICBkYXRhKCkge1xyXG4gICAgcmV0dXJuIHt9O1xyXG4gIH0sXHJcbiAgY29tcHV0ZWQ6IHtcclxuICAgIGNvbHVtbnMoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy50YXNrTGlzdC5jb2x1bW5zLmZpbHRlcih2ID0+IHYuZml4ZWQgPT09ICdyaWdodCcpO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuPC9zY3JpcHQ+XHJcbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gIHZhciBfdm0gPSB0aGlzLFxuICAgIF9jID0gX3ZtLl9zZWxmLl9jLFxuICAgIF9zZXR1cCA9IF92bS5fc2VsZi5fc2V0dXBQcm94eVxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcImdhbnR0LWVsYXN0aWNcIiwgc3RhdGljU3R5bGU6IHsgd2lkdGg6IFwiMTAwJVwiIH0gfSxcbiAgICBbXG4gICAgICBfdm0uX3QoXCJoZWFkZXJcIiksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJtYWluLXZpZXdcIiwgeyByZWY6IFwibWFpblZpZXdcIiB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uX3QoXCJmb290ZXJcIiksXG4gICAgXSxcbiAgICAyXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICB2YXIgX3ZtID0gdGhpcyxcbiAgICBfYyA9IF92bS5fc2VsZi5fY1xuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7XG4gICAgICBzdGF0aWNDbGFzczogXCJnYW50dC1lbGFzdGljX19jYWxlbmRhci13cmFwcGVyXCIsXG4gICAgICBzdHlsZToge1xuICAgICAgICAuLi5fdm0ucm9vdC5zdHlsZVtcImNhbGVuZGFyLXdyYXBwZXJcIl0sXG4gICAgICAgIHdpZHRoOiBfdm0ucm9vdC5zdGF0ZS5vcHRpb25zLndpZHRoICsgXCJweFwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZ2FudHQtZWxhc3RpY19fY2FsZW5kYXJcIixcbiAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgLi4uX3ZtLnJvb3Quc3R5bGVbXCJjYWxlbmRhclwiXSxcbiAgICAgICAgICAgIHdpZHRoOiBfdm0ucm9vdC5zdGF0ZS5vcHRpb25zLndpZHRoICsgXCJweFwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfdm0ucm9vdC5zdGF0ZS5vcHRpb25zLmNhbGVuZGFyLm1vbnRoLmRpc3BsYXlcbiAgICAgICAgICAgID8gX2MoXCJjYWxlbmRhci1yb3dcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7IGl0ZW1zOiBfdm0uZGF0ZXMubW9udGhzLCB3aGljaDogXCJtb250aFwiIH0sXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX3ZtLnJvb3Quc3RhdGUub3B0aW9ucy5jYWxlbmRhci5kYXkuZGlzcGxheVxuICAgICAgICAgICAgPyBfYyhcImNhbGVuZGFyLXJvd1wiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgaXRlbXM6IF92bS5kYXRlcy5kYXlzLCB3aGljaDogXCJkYXlcIiB9LFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF92bS5yb290LnN0YXRlLm9wdGlvbnMuY2FsZW5kYXIuaG91ci5kaXNwbGF5XG4gICAgICAgICAgICA/IF9jKFwiY2FsZW5kYXItcm93XCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczogeyBpdGVtczogX3ZtLmRhdGVzLmhvdXJzLCB3aGljaDogXCJob3VyXCIgfSxcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgXVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgdmFyIF92bSA9IHRoaXMsXG4gICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAge1xuICAgICAgY2xhc3M6XG4gICAgICAgIFwiZ2FudHQtZWxhc3RpY19fY2FsZW5kYXItcm93IGdhbnR0LWVsYXN0aWNfX2NhbGVuZGFyLXJvdy0tXCIgKyBfdm0ud2hpY2gsXG4gICAgICBzdHlsZTogX3ZtLnJvd1N0eWxlLFxuICAgIH0sXG4gICAgX3ZtLl9sKF92bS5pdGVtcywgZnVuY3Rpb24gKGl0ZW0sIGl0ZW1JbmRleCkge1xuICAgICAgcmV0dXJuIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7XG4gICAgICAgICAga2V5OiBpdGVtLmtleSxcbiAgICAgICAgICBjbGFzczpcbiAgICAgICAgICAgIFwiZ2FudHQtZWxhc3RpY19fY2FsZW5kYXItcm93LXJlY3QgZ2FudHQtZWxhc3RpY19fY2FsZW5kYXItcm93LXJlY3QtLVwiICtcbiAgICAgICAgICAgIF92bS53aGljaCxcbiAgICAgICAgICBzdHlsZTogX3ZtLnJlY3RTdHlsZSxcbiAgICAgICAgfSxcbiAgICAgICAgX3ZtLl9sKGl0ZW0uY2hpbGRyZW4sIGZ1bmN0aW9uIChjaGlsZCwgY2hpbGRJbmRleCkge1xuICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGtleTogY2hpbGQua2V5LFxuICAgICAgICAgICAgICBjbGFzczpcbiAgICAgICAgICAgICAgICBcImdhbnR0LWVsYXN0aWNfX2NhbGVuZGFyLXJvdy1yZWN0LWNoaWxkIGdhbnR0LWVsYXN0aWNfX2NhbGVuZGFyLXJvdy1yZWN0LWNoaWxkLS1cIiArXG4gICAgICAgICAgICAgICAgX3ZtLndoaWNoLFxuICAgICAgICAgICAgICBzdHlsZTogX3ZtLnJlY3RDaGlsZFN0eWxlW2l0ZW1JbmRleF1bY2hpbGRJbmRleF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGNsYXNzOlxuICAgICAgICAgICAgICAgICAgICBcImdhbnR0LWVsYXN0aWNfX2NhbGVuZGFyLXJvdy10ZXh0IGdhbnR0LWVsYXN0aWNfX2NhbGVuZGFyLXJvdy10ZXh0LS1cIiArXG4gICAgICAgICAgICAgICAgICAgIF92bS53aGljaCxcbiAgICAgICAgICAgICAgICAgIHN0eWxlOiBfdm0udGV4dFN0eWxlKGNoaWxkKSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgIFwiICsgX3ZtLl9zKGNoaWxkLmxhYmVsKSArIFwiXFxuICAgICAgXCIpXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgXVxuICAgICAgICAgIClcbiAgICAgICAgfSksXG4gICAgICAgIDBcbiAgICAgIClcbiAgICB9KSxcbiAgICAwXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICB2YXIgX3ZtID0gdGhpcyxcbiAgICBfYyA9IF92bS5fc2VsZi5fY1xuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7XG4gICAgICByZWY6IFwiY2hhcnRcIixcbiAgICAgIHN0YXRpY0NsYXNzOiBcImdhbnR0LWVsYXN0aWNfX2NoYXJ0XCIsXG4gICAgICBzdHlsZTogeyAuLi5fdm0ucm9vdC5zdHlsZVtcImNoYXJ0XCJdIH0sXG4gICAgfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAge1xuICAgICAgICAgIHJlZjogXCJjaGFydENhbGVuZGFyQ29udGFpbmVyXCIsXG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZ2FudHQtZWxhc3RpY19fY2hhcnQtY2FsZW5kYXItY29udGFpbmVyXCIsXG4gICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgIC4uLl92bS5yb290LnN0eWxlW1wiY2hhcnQtY2FsZW5kYXItY29udGFpbmVyXCJdLFxuICAgICAgICAgICAgaGVpZ2h0OiBfdm0ucm9vdC5zdGF0ZS5vcHRpb25zLmNhbGVuZGFyLmhlaWdodCArIFwicHhcIixcbiAgICAgICAgICAgIFwibWFyZ2luLWJvdHRvbVwiOiBfdm0ucm9vdC5zdGF0ZS5vcHRpb25zLmNhbGVuZGFyLmdhcCArIFwicHhcIixcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBbX2MoXCJjYWxlbmRhclwiKV0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHtcbiAgICAgICAgICByZWY6IFwiY2hhcnRHcmFwaENvbnRhaW5lclwiLFxuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImdhbnR0LWVsYXN0aWNfX2NoYXJ0LWdyYXBoLWNvbnRhaW5lclwiLFxuICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAuLi5fdm0ucm9vdC5zdHlsZVtcImNoYXJ0LWdyYXBoLWNvbnRhaW5lclwiXSxcbiAgICAgICAgICAgIGhlaWdodDpcbiAgICAgICAgICAgICAgX3ZtLnJvb3Quc3RhdGUub3B0aW9ucy5oZWlnaHQgLVxuICAgICAgICAgICAgICBfdm0ucm9vdC5zdGF0ZS5vcHRpb25zLmNhbGVuZGFyLmhlaWdodCAtXG4gICAgICAgICAgICAgIF92bS5oaWRkZW5Sb3dzSGVpZ2h0ICtcbiAgICAgICAgICAgICAgXCJweFwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgLi4uX3ZtLnJvb3Quc3R5bGVbXCJjaGFydC1hcmVhXCJdLFxuICAgICAgICAgICAgICAgIHdpZHRoOiBfdm0ucm9vdC5zdGF0ZS5vcHRpb25zLndpZHRoICsgXCJweFwiLFxuICAgICAgICAgICAgICAgIGhlaWdodDpcbiAgICAgICAgICAgICAgICAgIF92bS5yb290LnN0YXRlLm9wdGlvbnMucm93c0hlaWdodCAtXG4gICAgICAgICAgICAgICAgICBfdm0uaGlkZGVuUm93c0hlaWdodCArXG4gICAgICAgICAgICAgICAgICBcInB4XCIsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHJlZjogXCJjaGFydEdyYXBoXCIsXG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJnYW50dC1lbGFzdGljX19jaGFydC1ncmFwaFwiLFxuICAgICAgICAgICAgICAgICAgc3R5bGU6IHsgLi4uX3ZtLnJvb3Quc3R5bGVbXCJjaGFydC1ncmFwaFwiXSwgaGVpZ2h0OiBcIjEwMCVcIiB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwic3ZnXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICByZWY6IFwiY2hhcnRHcmFwaFN2Z1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImdhbnR0LWVsYXN0aWNfX2NoYXJ0LWdyYXBoLXN2Z1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7IC4uLl92bS5yb290LnN0eWxlW1wiY2hhcnQtZ3JhcGgtc3ZnXCJdIH0sXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeTogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogX3ZtLnJvb3Quc3RhdGUub3B0aW9ucy53aWR0aCArIFwicHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnJvb3Quc3RhdGUub3B0aW9ucy5hbGxWaXNpYmxlVGFza3NIZWlnaHQgLVxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uaGlkZGVuUm93c0hlaWdodCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwicHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGF5cy1oaWdobGlnaHRcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImdyaWRcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRlcGVuZGVuY3ktbGluZXNcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGFza3M6IF92bS5yb290LnZpc2libGVUYXNrcyB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5yb290LnZpc2libGVUYXNrcywgZnVuY3Rpb24gKHRhc2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IHRhc2suaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZ2FudHQtZWxhc3RpY19fY2hhcnQtcm93LXdyYXBwZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogeyAuLi5fdm0ucm9vdC5zdHlsZVtcImNoYXJ0LXJvdy13cmFwcGVyXCJdIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGFzazogdGFzayB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2ModGFzay50eXBlLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWc6IFwiY29tcG9uZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0YXNrOiB0YXNrIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKSxcbiAgICAgICAgXVxuICAgICAgKSxcbiAgICBdXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICB2YXIgX3ZtID0gdGhpcyxcbiAgICBfYyA9IF92bS5fc2VsZi5fY1xuICByZXR1cm4gX3ZtLnNob3dXb3JraW5nRGF5c1xuICAgID8gX2MoXG4gICAgICAgIFwiZ1wiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZ2FudHQtZWxhc3RpY19fY2hhcnQtZGF5cy1oaWdobGlnaHQtY29udGFpbmVyXCIsXG4gICAgICAgICAgc3R5bGU6IHsgLi4uX3ZtLnJvb3Quc3R5bGVbXCJjaGFydC1kYXlzLWhpZ2hsaWdodC1jb250YWluZXJcIl0gfSxcbiAgICAgICAgfSxcbiAgICAgICAgX3ZtLl9sKF92bS53b3JraW5nRGF5cywgZnVuY3Rpb24gKGRheSkge1xuICAgICAgICAgIHJldHVybiBfYyhcInJlY3RcIiwge1xuICAgICAgICAgICAga2V5OiBfdm0uZ2V0S2V5KGRheSksXG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJnYW50dC1lbGFzdGljX19jaGFydC1kYXlzLWhpZ2hsaWdodC1yZWN0XCIsXG4gICAgICAgICAgICBzdHlsZTogeyAuLi5fdm0ucm9vdC5zdHlsZVtcImNoYXJ0LWRheXMtaGlnaGxpZ2h0LXJlY3RcIl0gfSxcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIHg6IGRheS5vZmZzZXQucHgsXG4gICAgICAgICAgICAgIHk6IFwiMFwiLFxuICAgICAgICAgICAgICB3aWR0aDogZGF5LndpZHRoLnB4LFxuICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9KVxuICAgICAgICB9KSxcbiAgICAgICAgMFxuICAgICAgKVxuICAgIDogX3ZtLl9lKClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICB2YXIgX3ZtID0gdGhpcyxcbiAgICBfYyA9IF92bS5fc2VsZi5fY1xuICByZXR1cm4gX2MoXG4gICAgXCJzdmdcIixcbiAgICB7XG4gICAgICBzdGF0aWNDbGFzczogXCJnYW50dC1lbGFzdGljX19jaGFydC1kZXBlbmRlbmN5LWxpbmVzLWNvbnRhaW5lclwiLFxuICAgICAgc3R5bGU6IHsgLi4uX3ZtLnJvb3Quc3R5bGVbXCJjaGFydC1kZXBlbmRlbmN5LWxpbmVzLWNvbnRhaW5lclwiXSB9LFxuICAgICAgYXR0cnM6IHsgeDogXCIwXCIsIHk6IFwiMFwiLCB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIgfSxcbiAgICB9LFxuICAgIF92bS5fbChfdm0uZGVwZW5kZW5jeVRhc2tzLCBmdW5jdGlvbiAodGFzaykge1xuICAgICAgcmV0dXJuIF9jKFxuICAgICAgICBcImdcIixcbiAgICAgICAgeyBrZXk6IHRhc2suaWQsIGF0dHJzOiB7IHRhc2s6IHRhc2sgfSB9LFxuICAgICAgICBfdm0uX2wodGFzay5kZXBlbmRlbmN5TGluZXMsIGZ1bmN0aW9uIChkZXBlbmRlbmN5TGluZSkge1xuICAgICAgICAgIHJldHVybiBfYyhcInBhdGhcIiwge1xuICAgICAgICAgICAga2V5OiBkZXBlbmRlbmN5TGluZS5pZCxcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImdhbnR0LWVsYXN0aWNfX2NoYXJ0LWRlcGVuZGVuY3ktbGluZXMtcGF0aFwiLFxuICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgLi4uX3ZtLnJvb3Quc3R5bGVbXCJjaGFydC1kZXBlbmRlbmN5LWxpbmVzLXBhdGhcIl0sXG4gICAgICAgICAgICAgIC4uLnRhc2suc3R5bGVbXCJjaGFydC1kZXBlbmRlbmN5LWxpbmVzLXBhdGhcIl0sXG4gICAgICAgICAgICAgIC4uLnRhc2suc3R5bGVbXG4gICAgICAgICAgICAgICAgXCJjaGFydC1kZXBlbmRlbmN5LWxpbmVzLXBhdGgtXCIgKyBkZXBlbmRlbmN5TGluZS50YXNrX2lkXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYXR0cnM6IHsgdGFzazogdGFzaywgZDogZGVwZW5kZW5jeUxpbmUucG9pbnRzIH0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfSksXG4gICAgICAgIDBcbiAgICAgIClcbiAgICB9KSxcbiAgICAwXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICB2YXIgX3ZtID0gdGhpcyxcbiAgICBfYyA9IF92bS5fc2VsZi5fY1xuICByZXR1cm4gX2MoXG4gICAgXCJzdmdcIixcbiAgICB7XG4gICAgICByZWY6IFwiY2hhcnRcIixcbiAgICAgIHN0YXRpY0NsYXNzOiBcImdhbnR0LWVsYXN0aWNfX2dyaWQtbGluZXMtd3JhcHBlclwiLFxuICAgICAgc3R5bGU6IHsgLi4uX3ZtLnJvb3Quc3R5bGVbXCJncmlkLWxpbmVzLXdyYXBwZXJcIl0gfSxcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIHg6IFwiMFwiLFxuICAgICAgICB5OiBcIjBcIixcbiAgICAgICAgd2lkdGg6IF92bS5yb290LnN0YXRlLm9wdGlvbnMud2lkdGgsXG4gICAgICAgIGhlaWdodDogX3ZtLnJvb3Quc3RhdGUub3B0aW9ucy5hbGxWaXNpYmxlVGFza3NIZWlnaHQsXG4gICAgICAgIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiZ1wiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZ2FudHQtZWxhc3RpY19fZ3JpZC1saW5lc1wiLFxuICAgICAgICAgIHN0eWxlOiB7IC4uLl92bS5yb290LnN0eWxlW1wiZ3JpZC1saW5lc1wiXSB9LFxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX3ZtLl9sKF92bS5ob3Jpem9udGFsTGluZXMsIGZ1bmN0aW9uIChsaW5lKSB7XG4gICAgICAgICAgICByZXR1cm4gX2MoXCJsaW5lXCIsIHtcbiAgICAgICAgICAgICAga2V5OiBsaW5lLmtleSxcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZ2FudHQtZWxhc3RpY19fZ3JpZC1saW5lLWhvcml6b250YWxcIixcbiAgICAgICAgICAgICAgc3R5bGU6IHsgLi4uX3ZtLnJvb3Quc3R5bGVbXCJncmlkLWxpbmUtaG9yaXpvbnRhbFwiXSB9LFxuICAgICAgICAgICAgICBhdHRyczogeyB4MTogbGluZS54MSwgeTE6IGxpbmUueTEsIHgyOiBsaW5lLngyLCB5MjogbGluZS55MiB9LFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF92bS5fbChfdm0udmVydGljYWxMaW5lcywgZnVuY3Rpb24gKGxpbmUpIHtcbiAgICAgICAgICAgIHJldHVybiBfYyhcImxpbmVcIiwge1xuICAgICAgICAgICAgICBrZXk6IGxpbmUua2V5LFxuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJnYW50dC1lbGFzdGljX19ncmlkLWxpbmUtdmVydGljYWxcIixcbiAgICAgICAgICAgICAgc3R5bGU6IHsgLi4uX3ZtLnJvb3Quc3R5bGVbXCJncmlkLWxpbmUtdmVydGljYWxcIl0gfSxcbiAgICAgICAgICAgICAgYXR0cnM6IHsgeDE6IGxpbmUueDEsIHkxOiBsaW5lLnkxLCB4MjogbGluZS54MiwgeTI6IGxpbmUueTIgfSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImxpbmVcIiwge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZ2FudHQtZWxhc3RpY19fZ3JpZC1saW5lLXRpbWVcIixcbiAgICAgICAgICAgIHN0eWxlOiB7IC4uLl92bS5yb290LnN0eWxlW1wiZ3JpZC1saW5lLXRpbWVcIl0gfSxcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIHgxOiBfdm0udGltZUxpbmVQb3NpdGlvbi54LFxuICAgICAgICAgICAgICB5MTogX3ZtLnRpbWVMaW5lUG9zaXRpb24ueTEsXG4gICAgICAgICAgICAgIHgyOiBfdm0udGltZUxpbmVQb3NpdGlvbi54LFxuICAgICAgICAgICAgICB5MjogX3ZtLnRpbWVMaW5lUG9zaXRpb24ueTIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0pLFxuICAgICAgICBdLFxuICAgICAgICAyXG4gICAgICApLFxuICAgIF1cbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gIHZhciBfdm0gPSB0aGlzLFxuICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gIHJldHVybiBfYyhcbiAgICBcImdcIixcbiAgICB7XG4gICAgICBzdGF0aWNDbGFzczogXCJnYW50dC1lbGFzdGljX19jaGFydC1yb3ctcHJvZ3Jlc3MtYmFyLXdyYXBwZXJcIixcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIC4uLl92bS5yb290LnN0eWxlW1wiY2hhcnQtcm93LXByb2dyZXNzLWJhci13cmFwcGVyXCJdLFxuICAgICAgICAuLi5fdm0udGFzay5zdHlsZVtcImNoYXJ0LXJvdy1wcm9ncmVzcy1iYXItd3JhcHBlclwiXSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBbXG4gICAgICBfYyhcImRlZnNcIiwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcInBhdHRlcm5cIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBpZDogXCJkaWFnb25hbEhhdGNoXCIsXG4gICAgICAgICAgICAgIHdpZHRoOiBfdm0ucm9vdC5zdGF0ZS5vcHRpb25zLmNoYXJ0LnByb2dyZXNzLndpZHRoLFxuICAgICAgICAgICAgICBoZWlnaHQ6IF92bS5yb290LnN0YXRlLm9wdGlvbnMuY2hhcnQucHJvZ3Jlc3Mud2lkdGgsXG4gICAgICAgICAgICAgIHBhdHRlcm5UcmFuc2Zvcm06IFwicm90YXRlKDQ1IDAgMClcIixcbiAgICAgICAgICAgICAgcGF0dGVyblVuaXRzOiBcInVzZXJTcGFjZU9uVXNlXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXCJsaW5lXCIsIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY2hhcnQtcm93LXByb2dyZXNzLWJhci1saW5lXCIsXG4gICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgLi4uX3ZtLnJvb3Quc3R5bGVbXCJjaGFydC1yb3ctcHJvZ3Jlc3MtYmFyLWxpbmVcIl0sXG4gICAgICAgICAgICAgICAgLi4uX3ZtLnRhc2suc3R5bGVbXCJjaGFydC1yb3ctcHJvZ3Jlc3MtYmFyLWxpbmVcIl0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgeDE6IFwiMFwiLFxuICAgICAgICAgICAgICAgIHkxOiBcIjBcIixcbiAgICAgICAgICAgICAgICB4MjogXCIwXCIsXG4gICAgICAgICAgICAgICAgeTI6IF92bS5yb290LnN0YXRlLm9wdGlvbnMuY2hhcnQucHJvZ3Jlc3Mud2lkdGgsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICBdXG4gICAgICAgICksXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0ucm9vdC5zdGF0ZS5vcHRpb25zLmNoYXJ0LnByb2dyZXNzLmJhclxuICAgICAgICA/IF9jKFwicmVjdFwiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJnYW50dC1lbGFzdGljX19jaGFydC1yb3ctcHJvZ3Jlc3MtYmFyLXNvbGlkXCIsXG4gICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAuLi5fdm0ucm9vdC5zdHlsZVtcImNoYXJ0LXJvdy1wcm9ncmVzcy1iYXItc29saWRcIl0sXG4gICAgICAgICAgICAgIC4uLl92bS50YXNrLnN0eWxlW1wiY2hhcnQtcm93LXByb2dyZXNzLWJhci1zb2xpZFwiXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhdHRyczogeyB4OiBcIjBcIiwgeTogXCIwXCIsIHdpZHRoOiBfdm0uZ2V0UHJvZ3Jlc3NXaWR0aCB9LFxuICAgICAgICAgIH0pXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLnJvb3Quc3RhdGUub3B0aW9ucy5jaGFydC5wcm9ncmVzcy5wYXR0ZXJuXG4gICAgICAgID8gX2MoXCJnXCIsIFtcbiAgICAgICAgICAgIF9jKFwicmVjdFwiLCB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImdhbnR0LWVsYXN0aWNfX2NoYXJ0LXJvdy1wcm9ncmVzcy1iYXItcGF0dGVyblwiLFxuICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgIC4uLl92bS5yb290LnN0eWxlW1wiY2hhcnQtcm93LXByb2dyZXNzLWJhci1wYXR0ZXJuXCJdLFxuICAgICAgICAgICAgICAgIC4uLl92bS50YXNrLnN0eWxlW1wiY2hhcnQtcm93LXByb2dyZXNzLWJhci1wYXR0ZXJuXCJdLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIHg6IF92bS5nZXRQcm9ncmVzc1dpZHRoLFxuICAgICAgICAgICAgICAgIHk6IFwiMFwiLFxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAgLSBfdm0udGFzay5wcm9ncmVzcyArIFwiJVwiLFxuICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcInBhdGhcIiwge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJnYW50dC1lbGFzdGljX19jaGFydC1yb3ctcHJvZ3Jlc3MtYmFyLW91dGxpbmVcIixcbiAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAuLi5fdm0ucm9vdC5zdHlsZVtcImNoYXJ0LXJvdy1wcm9ncmVzcy1iYXItb3V0bGluZVwiXSxcbiAgICAgICAgICAgICAgICAuLi5fdm0udGFzay5zdHlsZVtcImJhc2VcIl0sXG4gICAgICAgICAgICAgICAgLi4uX3ZtLnRhc2suc3R5bGVbXCJjaGFydC1yb3ctcHJvZ3Jlc3MtYmFyLW91dGxpbmVcIl0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGF0dHJzOiB7IGQ6IF92bS5nZXRMaW5lUG9pbnRzIH0sXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICBdKVxuICAgICAgICA6IF92bS5fZSgpLFxuICAgIF1cbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gIHZhciBfdm0gPSB0aGlzLFxuICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gIHJldHVybiBfYyhcbiAgICBcImdcIixcbiAgICB7XG4gICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgXCJnYW50dC1lbGFzdGljX19jaGFydC1yb3ctYmFyLXdyYXBwZXIgZ2FudHQtZWxhc3RpY19fY2hhcnQtcm93LW1pbGVzdG9uZS13cmFwcGVyXCIsXG4gICAgICBzdHlsZToge1xuICAgICAgICAuLi5fdm0ucm9vdC5zdHlsZVtcImNoYXJ0LXJvdy1iYXItd3JhcHBlclwiXSxcbiAgICAgICAgLi4uX3ZtLnJvb3Quc3R5bGVbXCJjaGFydC1yb3ctbWlsZXN0b25lLXdyYXBwZXJcIl0sXG4gICAgICAgIC4uLl92bS50YXNrLnN0eWxlW1wiY2hhcnQtcm93LWJhci13cmFwcGVyXCJdLFxuICAgICAgfSxcbiAgICB9LFxuICAgIFtcbiAgICAgIF92bS5kaXNwbGF5RXhwYW5kZXJcbiAgICAgICAgPyBfYyhcbiAgICAgICAgICAgIFwiZm9yZWlnbk9iamVjdFwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICBcImdhbnR0LWVsYXN0aWNfX2NoYXJ0LWV4cGFuZGVyIGdhbnR0LWVsYXN0aWNfX2NoYXJ0LWV4cGFuZGVyLS1taWxlc3RvbmVcIixcbiAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAuLi5fdm0ucm9vdC5zdHlsZVtcImNoYXJ0LWV4cGFuZGVyXCJdLFxuICAgICAgICAgICAgICAgIC4uLl92bS5yb290LnN0eWxlW1wiY2hhcnQtZXhwYW5kZXItLW1pbGVzdG9uZVwiXSxcbiAgICAgICAgICAgICAgICAuLi5fdm0udGFzay5zdHlsZVtcImNoYXJ0LWV4cGFuZGVyXCJdLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIHg6XG4gICAgICAgICAgICAgICAgICBfdm0udGFzay54IC1cbiAgICAgICAgICAgICAgICAgIF92bS5yb290LnN0YXRlLm9wdGlvbnMuY2hhcnQuZXhwYW5kZXIub2Zmc2V0IC1cbiAgICAgICAgICAgICAgICAgIF92bS5yb290LnN0YXRlLm9wdGlvbnMuY2hhcnQuZXhwYW5kZXIuc2l6ZSxcbiAgICAgICAgICAgICAgICB5OlxuICAgICAgICAgICAgICAgICAgX3ZtLnRhc2sueSArXG4gICAgICAgICAgICAgICAgICAoX3ZtLnJvb3Quc3RhdGUub3B0aW9ucy5yb3cuaGVpZ2h0IC1cbiAgICAgICAgICAgICAgICAgICAgX3ZtLnJvb3Quc3RhdGUub3B0aW9ucy5jaGFydC5leHBhbmRlci5zaXplKSAvXG4gICAgICAgICAgICAgICAgICAgIDIsXG4gICAgICAgICAgICAgICAgd2lkdGg6IF92bS5yb290LnN0YXRlLm9wdGlvbnMuY2hhcnQuZXhwYW5kZXIuc2l6ZSxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IF92bS5yb290LnN0YXRlLm9wdGlvbnMuY2hhcnQuZXhwYW5kZXIuc2l6ZSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiZXhwYW5kZXJcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICB0YXNrczogW192bS50YXNrXSxcbiAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IF92bS5yb290LnN0YXRlLm9wdGlvbnMuY2hhcnQuZXhwYW5kZXIsXG4gICAgICAgICAgICAgICAgICB0eXBlOiBcImNoYXJ0XCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJzdmdcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgXCJnYW50dC1lbGFzdGljX19jaGFydC1yb3ctYmFyIGdhbnR0LWVsYXN0aWNfX2NoYXJ0LXJvdy1taWxlc3RvbmVcIixcbiAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgLi4uX3ZtLnJvb3Quc3R5bGVbXCJjaGFydC1yb3ctYmFyXCJdLFxuICAgICAgICAgICAgLi4uX3ZtLnJvb3Quc3R5bGVbXCJjaGFydC1yb3ctbWlsZXN0b25lXCJdLFxuICAgICAgICAgICAgLi4uX3ZtLnRhc2suc3R5bGVbXCJjaGFydC1yb3ctYmFyXCJdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIHg6IF92bS50YXNrLngsXG4gICAgICAgICAgICB5OiBfdm0udGFzay55LFxuICAgICAgICAgICAgd2lkdGg6IF92bS50YXNrLndpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0OiBfdm0udGFzay5oZWlnaHQsXG4gICAgICAgICAgICB2aWV3Qm94OiBgMCAwICR7X3ZtLnRhc2sud2lkdGh9ICR7X3ZtLnRhc2suaGVpZ2h0fWAsXG4gICAgICAgICAgICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdm0uZW1pdEV2ZW50KFwiY2xpY2tcIiwgJGV2ZW50KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1vdXNlZW50ZXI6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF92bS5lbWl0RXZlbnQoXCJtb3VzZWVudGVyXCIsICRldmVudClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb3VzZW92ZXI6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF92bS5lbWl0RXZlbnQoXCJtb3VzZW92ZXJcIiwgJGV2ZW50KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1vdXNlb3V0OiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdm0uZW1pdEV2ZW50KFwibW91c2VvdXRcIiwgJGV2ZW50KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1vdXNlbW92ZTogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICByZXR1cm4gX3ZtLmVtaXRFdmVudChcIm1vdXNlbW92ZVwiLCAkZXZlbnQpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW91c2Vkb3duOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdm0uZW1pdEV2ZW50KFwibW91c2Vkb3duXCIsICRldmVudClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb3VzZXVwOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdm0uZW1pdEV2ZW50KFwibW91c2V1cFwiLCAkZXZlbnQpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW91c2V3aGVlbDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICByZXR1cm4gX3ZtLmVtaXRFdmVudChcIm1vdXNld2hlZWxcIiwgJGV2ZW50KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvdWNoc3RhcnQ6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF92bS5lbWl0RXZlbnQoXCJ0b3VjaHN0YXJ0XCIsICRldmVudClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0b3VjaG1vdmU6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF92bS5lbWl0RXZlbnQoXCJ0b3VjaG1vdmVcIiwgJGV2ZW50KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvdWNoZW5kOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdm0uZW1pdEV2ZW50KFwidG91Y2hlbmRcIiwgJGV2ZW50KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJkZWZzXCIsIFtcbiAgICAgICAgICAgIF9jKFwiY2xpcFBhdGhcIiwgeyBhdHRyczogeyBpZDogX3ZtLmNsaXBQYXRoSWQgfSB9LCBbXG4gICAgICAgICAgICAgIF9jKFwicG9seWdvblwiLCB7IGF0dHJzOiB7IHBvaW50czogX3ZtLmdldFBvaW50cyB9IH0pLFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInBvbHlnb25cIiwge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgIFwiZ2FudHQtZWxhc3RpY19fY2hhcnQtcm93LWJhci1wb2x5Z29uIGdhbnR0LWVsYXN0aWNfX2NoYXJ0LXJvdy1taWxlc3RvbmUtcG9seWdvblwiLFxuICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgLi4uX3ZtLnJvb3Quc3R5bGVbXCJjaGFydC1yb3ctYmFyLXBvbHlnb25cIl0sXG4gICAgICAgICAgICAgIC4uLl92bS5yb290LnN0eWxlW1wiY2hhcnQtcm93LW1pbGVzdG9uZS1wb2x5Z29uXCJdLFxuICAgICAgICAgICAgICAuLi5fdm0udGFzay5zdHlsZVtcImJhc2VcIl0sXG4gICAgICAgICAgICAgIC4uLl92bS50YXNrLnN0eWxlW1wiY2hhcnQtcm93LWJhci1wb2x5Z29uXCJdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGF0dHJzOiB7IHBvaW50czogX3ZtLmdldFBvaW50cyB9LFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJwcm9ncmVzcy1iYXJcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgdGFzazogX3ZtLnRhc2ssXG4gICAgICAgICAgICAgIFwiY2xpcC1wYXRoXCI6IFwidXJsKCNcIiArIF92bS5jbGlwUGF0aElkICsgXCIpXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0pLFxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5yb290LnN0YXRlLm9wdGlvbnMuY2hhcnQudGV4dC5kaXNwbGF5XG4gICAgICAgID8gX2MoXCJjaGFydC10ZXh0XCIsIHsgYXR0cnM6IHsgdGFzazogX3ZtLnRhc2sgfSB9KVxuICAgICAgICA6IF92bS5fZSgpLFxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgdmFyIF92bSA9IHRoaXMsXG4gICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgcmV0dXJuIF9jKFxuICAgIFwiZ1wiLFxuICAgIHtcbiAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICBcImdhbnR0LWVsYXN0aWNfX2NoYXJ0LXJvdy1iYXItd3JhcHBlciBnYW50dC1lbGFzdGljX19jaGFydC1yb3ctcHJvamVjdC13cmFwcGVyXCIsXG4gICAgICBzdHlsZToge1xuICAgICAgICAuLi5fdm0ucm9vdC5zdHlsZVtcImNoYXJ0LXJvdy1iYXItd3JhcHBlclwiXSxcbiAgICAgICAgLi4uX3ZtLnJvb3Quc3R5bGVbXCJjaGFydC1yb3ctcHJvamVjdC13cmFwcGVyXCJdLFxuICAgICAgICAuLi5fdm0udGFzay5zdHlsZVtcImNoYXJ0LXJvdy1iYXItd3JhcHBlclwiXSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBbXG4gICAgICBfdm0uZGlzcGxheUV4cGFuZGVyXG4gICAgICAgID8gX2MoXG4gICAgICAgICAgICBcImZvcmVpZ25PYmplY3RcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgXCJnYW50dC1lbGFzdGljX19jaGFydC1leHBhbmRlciBnYW50dC1lbGFzdGljX19jaGFydC1leHBhbmRlci0tcHJvamVjdFwiLFxuICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgIC4uLl92bS5yb290LnN0eWxlW1wiY2hhcnQtZXhwYW5kZXJcIl0sXG4gICAgICAgICAgICAgICAgLi4uX3ZtLnJvb3Quc3R5bGVbXCJjaGFydC1leHBhbmRlci0tcHJvamVjdFwiXSxcbiAgICAgICAgICAgICAgICAuLi5fdm0udGFzay5zdHlsZVtcImNoYXJ0LWV4cGFuZGVyXCJdLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIHg6XG4gICAgICAgICAgICAgICAgICBfdm0udGFzay54IC1cbiAgICAgICAgICAgICAgICAgIF92bS5yb290LnN0YXRlLm9wdGlvbnMuY2hhcnQuZXhwYW5kZXIub2Zmc2V0IC1cbiAgICAgICAgICAgICAgICAgIF92bS5yb290LnN0YXRlLm9wdGlvbnMuY2hhcnQuZXhwYW5kZXIuc2l6ZSxcbiAgICAgICAgICAgICAgICB5OlxuICAgICAgICAgICAgICAgICAgX3ZtLnRhc2sueSArXG4gICAgICAgICAgICAgICAgICAoX3ZtLnJvb3Quc3RhdGUub3B0aW9ucy5yb3cuaGVpZ2h0IC1cbiAgICAgICAgICAgICAgICAgICAgX3ZtLnJvb3Quc3RhdGUub3B0aW9ucy5jaGFydC5leHBhbmRlci5zaXplKSAvXG4gICAgICAgICAgICAgICAgICAgIDIsXG4gICAgICAgICAgICAgICAgd2lkdGg6IF92bS5yb290LnN0YXRlLm9wdGlvbnMuY2hhcnQuZXhwYW5kZXIuc2l6ZSxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IF92bS5yb290LnN0YXRlLm9wdGlvbnMuY2hhcnQuZXhwYW5kZXIuc2l6ZSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiZXhwYW5kZXJcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICB0YXNrczogW192bS50YXNrXSxcbiAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IF92bS5yb290LnN0YXRlLm9wdGlvbnMuY2hhcnQuZXhwYW5kZXIsXG4gICAgICAgICAgICAgICAgICB0eXBlOiBcImNoYXJ0XCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJzdmdcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgXCJnYW50dC1lbGFzdGljX19jaGFydC1yb3ctYmFyIGdhbnR0LWVsYXN0aWNfX2NoYXJ0LXJvdy1wcm9qZWN0XCIsXG4gICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgIC4uLl92bS5yb290LnN0eWxlW1wiY2hhcnQtcm93LWJhclwiXSxcbiAgICAgICAgICAgIC4uLl92bS5yb290LnN0eWxlW1wiY2hhcnQtcm93LXByb2plY3RcIl0sXG4gICAgICAgICAgICAuLi5fdm0udGFzay5zdHlsZVtcImNoYXJ0LXJvdy1iYXJcIl0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgeDogX3ZtLnRhc2sueCxcbiAgICAgICAgICAgIHk6IF92bS50YXNrLnksXG4gICAgICAgICAgICB3aWR0aDogX3ZtLnRhc2sud2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQ6IF92bS50YXNrLmhlaWdodCxcbiAgICAgICAgICAgIHZpZXdCb3g6IGAwIDAgJHtfdm0udGFzay53aWR0aH0gJHtfdm0udGFzay5oZWlnaHR9YCxcbiAgICAgICAgICAgIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF92bS5lbWl0RXZlbnQoXCJjbGlja1wiLCAkZXZlbnQpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW91c2VlbnRlcjogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICByZXR1cm4gX3ZtLmVtaXRFdmVudChcIm1vdXNlZW50ZXJcIiwgJGV2ZW50KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1vdXNlb3ZlcjogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICByZXR1cm4gX3ZtLmVtaXRFdmVudChcIm1vdXNlb3ZlclwiLCAkZXZlbnQpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW91c2VvdXQ6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF92bS5lbWl0RXZlbnQoXCJtb3VzZW91dFwiLCAkZXZlbnQpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW91c2Vtb3ZlOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdm0uZW1pdEV2ZW50KFwibW91c2Vtb3ZlXCIsICRldmVudClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb3VzZWRvd246IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF92bS5lbWl0RXZlbnQoXCJtb3VzZWRvd25cIiwgJGV2ZW50KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1vdXNldXA6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF92bS5lbWl0RXZlbnQoXCJtb3VzZXVwXCIsICRldmVudClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb3VzZXdoZWVsOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdm0uZW1pdEV2ZW50KFwibW91c2V3aGVlbFwiLCAkZXZlbnQpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdG91Y2hzdGFydDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICByZXR1cm4gX3ZtLmVtaXRFdmVudChcInRvdWNoc3RhcnRcIiwgJGV2ZW50KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvdWNobW92ZTogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICByZXR1cm4gX3ZtLmVtaXRFdmVudChcInRvdWNobW92ZVwiLCAkZXZlbnQpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdG91Y2hlbmQ6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF92bS5lbWl0RXZlbnQoXCJ0b3VjaGVuZFwiLCAkZXZlbnQpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImRlZnNcIiwgW1xuICAgICAgICAgICAgX2MoXCJjbGlwUGF0aFwiLCB7IGF0dHJzOiB7IGlkOiBfdm0uY2xpcFBhdGhJZCB9IH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJwYXRoXCIsIHsgYXR0cnM6IHsgZDogX3ZtLmdldFBvaW50cyB9IH0pLFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInBhdGhcIiwge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgIFwiZ2FudHQtZWxhc3RpY19fY2hhcnQtcm93LWJhci1wb2x5Z29uIGdhbnR0LWVsYXN0aWNfX2NoYXJ0LXJvdy1wcm9qZWN0LXBvbHlnb25cIixcbiAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgIC4uLl92bS5yb290LnN0eWxlW1wiY2hhcnQtcm93LWJhci1wb2x5Z29uXCJdLFxuICAgICAgICAgICAgICAuLi5fdm0ucm9vdC5zdHlsZVtcImNoYXJ0LXJvdy1wcm9qZWN0LXBvbHlnb25cIl0sXG4gICAgICAgICAgICAgIC4uLl92bS50YXNrLnN0eWxlW1wiYmFzZVwiXSxcbiAgICAgICAgICAgICAgLi4uX3ZtLnRhc2suc3R5bGVbXCJjaGFydC1yb3ctYmFyLXBvbHlnb25cIl0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYXR0cnM6IHsgZDogX3ZtLmdldFBvaW50cyB9LFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJwcm9ncmVzcy1iYXJcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgdGFzazogX3ZtLnRhc2ssXG4gICAgICAgICAgICAgIFwiY2xpcC1wYXRoXCI6IFwidXJsKCNcIiArIF92bS5jbGlwUGF0aElkICsgXCIpXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0pLFxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5yb290LnN0YXRlLm9wdGlvbnMuY2hhcnQudGV4dC5kaXNwbGF5XG4gICAgICAgID8gX2MoXCJjaGFydC10ZXh0XCIsIHsgYXR0cnM6IHsgdGFzazogX3ZtLnRhc2sgfSB9KVxuICAgICAgICA6IF92bS5fZSgpLFxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgdmFyIF92bSA9IHRoaXMsXG4gICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgcmV0dXJuIF9jKFxuICAgIFwiZ1wiLFxuICAgIHtcbiAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICBcImdhbnR0LWVsYXN0aWNfX2NoYXJ0LXJvdy1iYXItd3JhcHBlciBnYW50dC1lbGFzdGljX19jaGFydC1yb3ctdGFzay13cmFwcGVyXCIsXG4gICAgICBzdHlsZToge1xuICAgICAgICAuLi5fdm0ucm9vdC5zdHlsZVtcImNoYXJ0LXJvdy1iYXItd3JhcHBlclwiXSxcbiAgICAgICAgLi4uX3ZtLnJvb3Quc3R5bGVbXCJjaGFydC1yb3ctdGFzay13cmFwcGVyXCJdLFxuICAgICAgICAuLi5fdm0udGFzay5zdHlsZVtcImNoYXJ0LXJvdy1iYXItd3JhcHBlclwiXSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBbXG4gICAgICBfdm0uZGlzcGxheUV4cGFuZGVyXG4gICAgICAgID8gX2MoXG4gICAgICAgICAgICBcImZvcmVpZ25PYmplY3RcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgXCJnYW50dC1lbGFzdGljX19jaGFydC1leHBhbmRlciBnYW50dC1lbGFzdGljX19jaGFydC1leHBhbmRlci0tdGFza1wiLFxuICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgIC4uLl92bS5yb290LnN0eWxlW1wiY2hhcnQtZXhwYW5kZXJcIl0sXG4gICAgICAgICAgICAgICAgLi4uX3ZtLnJvb3Quc3R5bGVbXCJjaGFydC1leHBhbmRlci0tdGFza1wiXSxcbiAgICAgICAgICAgICAgICAuLi5fdm0udGFzay5zdHlsZVtcImNoYXJ0LWV4cGFuZGVyXCJdLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIHg6XG4gICAgICAgICAgICAgICAgICBfdm0udGFzay54IC1cbiAgICAgICAgICAgICAgICAgIF92bS5yb290LnN0YXRlLm9wdGlvbnMuY2hhcnQuZXhwYW5kZXIub2Zmc2V0IC1cbiAgICAgICAgICAgICAgICAgIF92bS5yb290LnN0YXRlLm9wdGlvbnMuY2hhcnQuZXhwYW5kZXIuc2l6ZSxcbiAgICAgICAgICAgICAgICB5OlxuICAgICAgICAgICAgICAgICAgX3ZtLnRhc2sueSArXG4gICAgICAgICAgICAgICAgICAoX3ZtLnJvb3Quc3RhdGUub3B0aW9ucy5yb3cuaGVpZ2h0IC1cbiAgICAgICAgICAgICAgICAgICAgX3ZtLnJvb3Quc3RhdGUub3B0aW9ucy5jaGFydC5leHBhbmRlci5zaXplKSAvXG4gICAgICAgICAgICAgICAgICAgIDIsXG4gICAgICAgICAgICAgICAgd2lkdGg6IF92bS5yb290LnN0YXRlLm9wdGlvbnMuY2hhcnQuZXhwYW5kZXIuc2l6ZSxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IF92bS5yb290LnN0YXRlLm9wdGlvbnMuY2hhcnQuZXhwYW5kZXIuc2l6ZSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiZXhwYW5kZXJcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICB0YXNrczogW192bS50YXNrXSxcbiAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IF92bS5yb290LnN0YXRlLm9wdGlvbnMuY2hhcnQuZXhwYW5kZXIsXG4gICAgICAgICAgICAgICAgICB0eXBlOiBcImNoYXJ0XCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJzdmdcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgXCJnYW50dC1lbGFzdGljX19jaGFydC1yb3ctYmFyIGdhbnR0LWVsYXN0aWNfX2NoYXJ0LXJvdy10YXNrXCIsXG4gICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgIC4uLl92bS5yb290LnN0eWxlW1wiY2hhcnQtcm93LWJhclwiXSxcbiAgICAgICAgICAgIC4uLl92bS5yb290LnN0eWxlW1wiY2hhcnQtcm93LXRhc2tcIl0sXG4gICAgICAgICAgICAuLi5fdm0udGFzay5zdHlsZVtcImNoYXJ0LXJvdy1iYXJcIl0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgeDogX3ZtLnRhc2sueCxcbiAgICAgICAgICAgIHk6IF92bS50YXNrLnksXG4gICAgICAgICAgICB3aWR0aDogX3ZtLnRhc2sud2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQ6IF92bS50YXNrLmhlaWdodCxcbiAgICAgICAgICAgIHZpZXdCb3g6IGAwIDAgJHtfdm0udGFzay53aWR0aH0gJHtfdm0udGFzay5oZWlnaHR9YCxcbiAgICAgICAgICAgIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF92bS5lbWl0RXZlbnQoXCJjbGlja1wiLCAkZXZlbnQpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW91c2VlbnRlcjogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICByZXR1cm4gX3ZtLmVtaXRFdmVudChcIm1vdXNlZW50ZXJcIiwgJGV2ZW50KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1vdXNlb3ZlcjogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICByZXR1cm4gX3ZtLmVtaXRFdmVudChcIm1vdXNlb3ZlclwiLCAkZXZlbnQpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW91c2VvdXQ6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF92bS5lbWl0RXZlbnQoXCJtb3VzZW91dFwiLCAkZXZlbnQpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW91c2Vtb3ZlOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdm0uZW1pdEV2ZW50KFwibW91c2Vtb3ZlXCIsICRldmVudClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb3VzZWRvd246IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF92bS5lbWl0RXZlbnQoXCJtb3VzZWRvd25cIiwgJGV2ZW50KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1vdXNldXA6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF92bS5lbWl0RXZlbnQoXCJtb3VzZXVwXCIsICRldmVudClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb3VzZXdoZWVsOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdm0uZW1pdEV2ZW50KFwibW91c2V3aGVlbFwiLCAkZXZlbnQpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdG91Y2hzdGFydDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICByZXR1cm4gX3ZtLmVtaXRFdmVudChcInRvdWNoc3RhcnRcIiwgJGV2ZW50KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvdWNobW92ZTogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICByZXR1cm4gX3ZtLmVtaXRFdmVudChcInRvdWNobW92ZVwiLCAkZXZlbnQpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdG91Y2hlbmQ6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF92bS5lbWl0RXZlbnQoXCJ0b3VjaGVuZFwiLCAkZXZlbnQpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImRlZnNcIiwgW1xuICAgICAgICAgICAgX2MoXCJjbGlwUGF0aFwiLCB7IGF0dHJzOiB7IGlkOiBfdm0uY2xpcFBhdGhJZCB9IH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJwb2x5Z29uXCIsIHsgYXR0cnM6IHsgcG9pbnRzOiBfdm0uZ2V0UG9pbnRzIH0gfSksXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwicG9seWdvblwiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgXCJnYW50dC1lbGFzdGljX19jaGFydC1yb3ctYmFyLXBvbHlnb24gZ2FudHQtZWxhc3RpY19fY2hhcnQtcm93LXRhc2stcG9seWdvblwiLFxuICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgLi4uX3ZtLnJvb3Quc3R5bGVbXCJjaGFydC1yb3ctYmFyLXBvbHlnb25cIl0sXG4gICAgICAgICAgICAgIC4uLl92bS5yb290LnN0eWxlW1wiY2hhcnQtcm93LXRhc2stcG9seWdvblwiXSxcbiAgICAgICAgICAgICAgLi4uX3ZtLnRhc2suc3R5bGVbXCJiYXNlXCJdLFxuICAgICAgICAgICAgICAuLi5fdm0udGFzay5zdHlsZVtcImNoYXJ0LXJvdy1iYXItcG9seWdvblwiXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhdHRyczogeyBwb2ludHM6IF92bS5nZXRQb2ludHMgfSxcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwicHJvZ3Jlc3MtYmFyXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIHRhc2s6IF92bS50YXNrLFxuICAgICAgICAgICAgICBcImNsaXAtcGF0aFwiOiBcInVybCgjXCIgKyBfdm0uY2xpcFBhdGhJZCArIFwiKVwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9KSxcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0ucm9vdC5zdGF0ZS5vcHRpb25zLmNoYXJ0LnRleHQuZGlzcGxheVxuICAgICAgICA/IF9jKFwiY2hhcnQtdGV4dFwiLCB7IGF0dHJzOiB7IHRhc2s6IF92bS50YXNrIH0gfSlcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gIHZhciBfdm0gPSB0aGlzLFxuICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gIHJldHVybiBfYyhcbiAgICBcInN2Z1wiLFxuICAgIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcImdhbnR0LWVsYXN0aWNfX2NoYXJ0LXJvdy10ZXh0LXdyYXBwZXJcIixcbiAgICAgIHN0eWxlOiB7IC4uLl92bS5yb290LnN0eWxlW1wiY2hhcnQtcm93LXRleHQtd3JhcHBlclwiXSB9LFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgeDogX3ZtLnRleHRDb25maWcuZWxsaXBzaXNcbiAgICAgICAgICA/IF92bS50YXNrLnhcbiAgICAgICAgICA6IF92bS50YXNrLnggK1xuICAgICAgICAgICAgX3ZtLnRhc2sud2lkdGggK1xuICAgICAgICAgICAgX3ZtLnJvb3Quc3RhdGUub3B0aW9ucy5jaGFydC50ZXh0Lm9mZnNldCxcbiAgICAgICAgeTogX3ZtLnRhc2sueSAtIF92bS5yb290LnN0YXRlLm9wdGlvbnMuY2hhcnQuZ3JpZC5ob3Jpem9udGFsLmdhcCxcbiAgICAgICAgd2lkdGg6IF92bS5nZXRXaWR0aCxcbiAgICAgICAgaGVpZ2h0OiBfdm0uZ2V0SGVpZ2h0LFxuICAgICAgfSxcbiAgICB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcImZvcmVpZ25PYmplY3RcIixcbiAgICAgICAgeyBhdHRyczogeyB4OiBcIjBcIiwgeTogXCIwXCIsIHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBfdm0uZ2V0SGVpZ2h0IH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZ2FudHQtZWxhc3RpY19fY2hhcnQtcm93LXRleHRcIixcbiAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAuLi5fdm0ucm9vdC5zdHlsZVtcImNoYXJ0LXJvdy10ZXh0XCJdLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogX3ZtLnRleHRDb25maWcuZWxsaXBzaXNcbiAgICAgICAgICAgICAgICAgID8gXCJ0cmFuc3BhcmVudFwiXG4gICAgICAgICAgICAgICAgICA6IF92bS50YXNrLmNvbG9yLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBhdHRyczogeyB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXCIgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF92bS50ZXh0Q29uZmlnLnJlbmRlclxuICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZ2FudHQtZWxhc3RpY19fY2hhcnQtcm93LXRleHQtY29udGVudCBnYW50dC1lbGFzdGljX19jaGFydC1yb3ctdGV4dC1jb250ZW50LS10ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLl92bS5yb290LnN0eWxlW1wiY2hhcnQtcm93LXRleHQtY29udGVudFwiXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLl92bS5yb290LnN0eWxlW1wiY2hhcnQtcm93LXRleHQtY29udGVudC0tdGV4dFwiXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLl92bS5jb250ZW50U3R5bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5fdm0udGV4dENvbmZpZy5zdHlsZSxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJSZW5kZXJcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyOiAoKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS50ZXh0Q29uZmlnLnJlbmRlcihfdm0udGFzay5sYWJlbCwgX3ZtLnRhc2spLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIDogIV92bS5odG1sXG4gICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgXCJnYW50dC1lbGFzdGljX19jaGFydC1yb3ctdGV4dC1jb250ZW50IGdhbnR0LWVsYXN0aWNfX2NoYXJ0LXJvdy10ZXh0LWNvbnRlbnQtLXRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgLi4uX3ZtLnJvb3Quc3R5bGVbXCJjaGFydC1yb3ctdGV4dC1jb250ZW50XCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uX3ZtLnJvb3Quc3R5bGVbXCJjaGFydC1yb3ctdGV4dC1jb250ZW50LS10ZXh0XCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uX3ZtLmNvbnRlbnRTdHlsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLl92bS50ZXh0Q29uZmlnLnN0eWxlLFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfYyhcImRpdlwiLCBbX3ZtLl92KF92bS5fcyhfdm0uc2hvd0xhYmVsKSldKV1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICA6IF92bS5odG1sXG4gICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgIFwiZ2FudHQtZWxhc3RpY19fY2hhcnQtcm93LXRleHQtY29udGVudCBnYW50dC1lbGFzdGljX19jaGFydC1yb3ctdGV4dC1jb250ZW50LS1odG1sXCIsXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgLi4uX3ZtLnJvb3Quc3R5bGVbXCJjaGFydC1yb3ctdGV4dC1jb250ZW50XCJdLFxuICAgICAgICAgICAgICAgICAgICAgIC4uLl92bS5yb290LnN0eWxlW1wiY2hhcnQtcm93LXRleHQtY29udGVudC0taHRtbFwiXSxcbiAgICAgICAgICAgICAgICAgICAgICAuLi5fdm0uY29udGVudFN0eWxlLFxuICAgICAgICAgICAgICAgICAgICAgIC4uLl92bS50ZXh0Q29uZmlnLnN0eWxlLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyBpbm5lckhUTUw6IF92bS5fcyhfdm0uc2hvd0xhYmVsKSB9LFxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgXVxuICAgICAgICAgICksXG4gICAgICAgIF1cbiAgICAgICksXG4gICAgXVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgdmFyIF92bSA9IHRoaXMsXG4gICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAge1xuICAgICAgY2xhc3M6IF92bS5nZXRDbGFzc1ByZWZpeCgpICsgXCItd3JhcHBlclwiLFxuICAgICAgc3R5bGU6IHtcbiAgICAgICAgLi4uX3ZtLnJvb3Quc3R5bGVbX3ZtLmdldENsYXNzUHJlZml4KGZhbHNlKSArIFwiLXdyYXBwZXJcIl0sXG4gICAgICAgIC4uLl92bS5zdHlsZSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBbXG4gICAgICBfdm0uYWxsQ2hpbGRyZW4ubGVuZ3RoXG4gICAgICAgID8gX2MoXG4gICAgICAgICAgICBcInN2Z1wiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBjbGFzczogX3ZtLmdldENsYXNzUHJlZml4KCkgKyBcIi1jb250ZW50XCIsXG4gICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgLi4uX3ZtLnJvb3Quc3R5bGVbX3ZtLmdldENsYXNzUHJlZml4KGZhbHNlKSArIFwiLWNvbnRlbnRcIl0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGF0dHJzOiB7IHdpZHRoOiBfdm0ub3B0aW9ucy5zaXplLCBoZWlnaHQ6IF92bS5vcHRpb25zLnNpemUgfSxcbiAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS50b2dnbGUgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwicmVjdFwiLCB7XG4gICAgICAgICAgICAgICAgY2xhc3M6IF92bS5nZXRDbGFzc1ByZWZpeCgpICsgXCItYm9yZGVyXCIsXG4gICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgIC4uLl92bS5yb290LnN0eWxlW192bS5nZXRDbGFzc1ByZWZpeChmYWxzZSkgKyBcIi1ib3JkZXJcIl0sXG4gICAgICAgICAgICAgICAgICAuLi5fdm0uYm9yZGVyU3R5bGUsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgeDogX3ZtLmJvcmRlcixcbiAgICAgICAgICAgICAgICAgIHk6IF92bS5ib3JkZXIsXG4gICAgICAgICAgICAgICAgICB3aWR0aDogX3ZtLm9wdGlvbnMuc2l6ZSAtIF92bS5ib3JkZXIgKiAyLFxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBfdm0ub3B0aW9ucy5zaXplIC0gX3ZtLmJvcmRlciAqIDIsXG4gICAgICAgICAgICAgICAgICByeDogXCIyXCIsXG4gICAgICAgICAgICAgICAgICByeTogXCIyXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF92bS5hbGxDaGlsZHJlbi5sZW5ndGhcbiAgICAgICAgICAgICAgICA/IF9jKFwibGluZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiBfdm0uZ2V0Q2xhc3NQcmVmaXgoKSArIFwiLWxpbmVcIixcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAuLi5fdm0ucm9vdC5zdHlsZVtfdm0uZ2V0Q2xhc3NQcmVmaXgoZmFsc2UpICsgXCItbGluZVwiXSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICB4MTogX3ZtLmxpbmVPZmZzZXQsXG4gICAgICAgICAgICAgICAgICAgICAgeTE6IF92bS5vcHRpb25zLnNpemUgLyAyLFxuICAgICAgICAgICAgICAgICAgICAgIHgyOiBfdm0ub3B0aW9ucy5zaXplIC0gX3ZtLmxpbmVPZmZzZXQsXG4gICAgICAgICAgICAgICAgICAgICAgeTI6IF92bS5vcHRpb25zLnNpemUgLyAyLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfdm0uY29sbGFwc2VkXG4gICAgICAgICAgICAgICAgPyBfYyhcImxpbmVcIiwge1xuICAgICAgICAgICAgICAgICAgICBjbGFzczogX3ZtLmdldENsYXNzUHJlZml4KCkgKyBcIi1saW5lXCIsXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgLi4uX3ZtLnJvb3Quc3R5bGVbX3ZtLmdldENsYXNzUHJlZml4KGZhbHNlKSArIFwiLWxpbmVcIl0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgeDE6IF92bS5vcHRpb25zLnNpemUgLyAyLFxuICAgICAgICAgICAgICAgICAgICAgIHkxOiBfdm0ubGluZU9mZnNldCxcbiAgICAgICAgICAgICAgICAgICAgICB4MjogX3ZtLm9wdGlvbnMuc2l6ZSAvIDIsXG4gICAgICAgICAgICAgICAgICAgICAgeTI6IF92bS5vcHRpb25zLnNpemUgLSBfdm0ubGluZU9mZnNldCxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgXVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgdmFyIF92bSA9IHRoaXMsXG4gICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiZ2FudHQtZWxhc3RpY19fbWFpbi12aWV3XCIsXG4gICAgICBzdHlsZTogeyAuLi5fdm0ucm9vdC5zdHlsZVtcIm1haW4tdmlld1wiXSB9LFxuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJnYW50dC1lbGFzdGljX19tYWluLWNvbnRhaW5lci13cmFwcGVyXCIsXG4gICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgIC4uLl92bS5yb290LnN0eWxlW1wibWFpbi1jb250YWluZXItd3JhcHBlclwiXSxcbiAgICAgICAgICAgIGhlaWdodDogX3ZtLnJvb3Quc3RhdGUub3B0aW9ucy5oZWlnaHQgLSBfdm0uaGlkZGVuUm93c0hlaWdodCArIFwicHhcIixcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICByZWY6IFwibWFpblZpZXdcIixcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZ2FudHQtZWxhc3RpY19fbWFpbi1jb250YWluZXJcIixcbiAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAuLi5fdm0ucm9vdC5zdHlsZVtcIm1haW4tY29udGFpbmVyXCJdLFxuICAgICAgICAgICAgICAgIHdpZHRoOiBfdm0ucm9vdC5zdGF0ZS5vcHRpb25zLmNsaWVudFdpZHRoICsgXCJweFwiLFxuICAgICAgICAgICAgICAgIGhlaWdodDpcbiAgICAgICAgICAgICAgICAgIF92bS5yb290LnN0YXRlLm9wdGlvbnMuaGVpZ2h0IC0gX3ZtLmhpZGRlblJvd3NIZWlnaHQgKyBcInB4XCIsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImdhbnR0LWVsYXN0aWNfX2NvbnRhaW5lclwiLFxuICAgICAgICAgICAgICAgICAgc3R5bGU6IHsgLi4uX3ZtLnJvb3Quc3R5bGVbXCJjb250YWluZXJcIl0gfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7IG1vdXNlbW92ZTogX3ZtLm1vdXNlTW92ZSwgbW91c2V1cDogX3ZtLm1vdXNlVXAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5yb290LnN0YXRlLm9wdGlvbnMudGFza0xpc3QuZGlzcGxheSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJyb290LnN0YXRlLm9wdGlvbnMudGFza0xpc3QuZGlzcGxheVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIHJlZjogXCJ0YXNrTGlzdFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImdhbnR0LWVsYXN0aWNfX3Rhc2stbGlzdC1jb250YWluZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgLi4uX3ZtLnJvb3Quc3R5bGVbXCJ0YXNrLWxpc3QtY29udGFpbmVyXCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgLyog6L+Z5Liq5a695bqm5Lya5a+86Ie05Zu+5b2i56m655m977yIeOi9tOe8qeaUvuaXtu+8iSAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2lkdGg6IHJvb3Quc3RhdGUub3B0aW9ucy50YXNrTGlzdC5maW5hbFdpZHRoICsgJ3B4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnJvb3Quc3RhdGUub3B0aW9ucy5oZWlnaHQgLVxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uaGlkZGVuUm93c0hlaWdodCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwicHhcIixcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX2MoXCJ0YXNrLWxpc3RcIildLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgcmVmOiBcImNoYXJ0Q29udGFpbmVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZ2FudHQtZWxhc3RpY19fbWFpbi12aWV3LWNvbnRhaW5lclwiLFxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7IC4uLl92bS5yb290LnN0eWxlW1wibWFpbi12aWV3LWNvbnRhaW5lclwiXSB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtb3VzZWRvd246IF92bS5jaGFydE1vdXNlRG93bixcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNoc3RhcnQ6IF92bS5jaGFydE1vdXNlRG93bixcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vdXNldXA6IF92bS5jaGFydE1vdXNlVXAsXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3VjaGVuZDogX3ZtLmNoYXJ0TW91c2VVcCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vdXNlbW92ZTogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmNoYXJ0TW91c2VNb3ZlLmFwcGx5KG51bGwsIGFyZ3VtZW50cylcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3VjaG1vdmU6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5jaGFydE1vdXNlTW92ZS5hcHBseShudWxsLCBhcmd1bWVudHMpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgd2hlZWw6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5jaGFydFdoZWVsLmFwcGx5KG51bGwsIGFyZ3VtZW50cylcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW19jKFwiY2hhcnRcIildLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF92bS5maXhlZENvbHMubGVuZ3RoXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5yb290LnN0YXRlLm9wdGlvbnMudGFza0xpc3QuZGlzcGxheSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicm9vdC5zdGF0ZS5vcHRpb25zLnRhc2tMaXN0LmRpc3BsYXlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByZWY6IFwidGFza0xpc3RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZ2FudHQtZWxhc3RpY19fdGFzay1saXN0LWNvbnRhaW5lclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLl92bS5yb290LnN0eWxlW1widGFzay1saXN0LWNvbnRhaW5lclwiXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogX3ZtLmdldEZpeGVkV2lkdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnJvb3Quc3RhdGUub3B0aW9ucy5oZWlnaHQgLVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmhpZGRlblJvd3NIZWlnaHQgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtfYyhcInRhc2stbGlzdC1maXhlZFwiKV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICByZWY6IFwiY2hhcnRTY3JvbGxDb250YWluZXJWZXJ0aWNhbFwiLFxuICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICBcImdhbnR0LWVsYXN0aWNfX2NoYXJ0LXNjcm9sbC1jb250YWluZXIgZ2FudHQtZWxhc3RpY19fY2hhcnQtc2Nyb2xsLWNvbnRhaW5lci0tdmVydGljYWxcIixcbiAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAuLi5fdm0ucm9vdC5zdHlsZVtcImNoYXJ0LXNjcm9sbC1jb250YWluZXJcIl0sXG4gICAgICAgICAgICAgICAgLi4uX3ZtLnJvb3Quc3R5bGVbXCJjaGFydC1zY3JvbGwtY29udGFpbmVyLS12ZXJ0aWNhbFwiXSxcbiAgICAgICAgICAgICAgICAuLi5fdm0udmVydGljYWxTdHlsZSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgb246IHsgc2Nyb2xsOiBfdm0ub25WZXJ0aWNhbFNjcm9sbCB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImdhbnR0LWVsYXN0aWNfX2NoYXJ0LXNjcm9sbC0tdmVydGljYWxcIixcbiAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMXB4XCIsXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IF92bS5yb290LnN0YXRlLm9wdGlvbnMuYWxsVmlzaWJsZVRhc2tzSGVpZ2h0ICsgXCJweFwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgXVxuICAgICAgICAgICksXG4gICAgICAgIF1cbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHtcbiAgICAgICAgICByZWY6IFwiY2hhcnRTY3JvbGxDb250YWluZXJIb3Jpem9udGFsXCIsXG4gICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICBcImdhbnR0LWVsYXN0aWNfX2NoYXJ0LXNjcm9sbC1jb250YWluZXIgZ2FudHQtZWxhc3RpY19fY2hhcnQtc2Nyb2xsLWNvbnRhaW5lci0taG9yaXpvbnRhbFwiLFxuICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAuLi5fdm0ucm9vdC5zdHlsZVtcImNoYXJ0LXNjcm9sbC1jb250YWluZXJcIl0sXG4gICAgICAgICAgICAuLi5fdm0ucm9vdC5zdHlsZVtcImNoYXJ0LXNjcm9sbC1jb250YWluZXItLWhvcml6b250YWxcIl0sXG4gICAgICAgICAgICBtYXJnaW5MZWZ0OiBfdm0uZ2V0TWFyZ2luTGVmdCxcbiAgICAgICAgICAgIG1hcmdpblJpZ2h0OiBfdm0uZ2V0TWFyZ2luUmlnaHQsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBvbjogeyBzY3JvbGw6IF92bS5vbkhvcml6b250YWxTY3JvbGwgfSxcbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImdhbnR0LWVsYXN0aWNfX2NoYXJ0LXNjcm9sbC0taG9yaXpvbnRhbFwiLFxuICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgaGVpZ2h0OiBcIjFweFwiLFxuICAgICAgICAgICAgICB3aWR0aDogX3ZtLnJvb3Quc3RhdGUub3B0aW9ucy53aWR0aCArIFwicHhcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSksXG4gICAgICAgIF1cbiAgICAgICksXG4gICAgXVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgdmFyIF92bSA9IHRoaXMsXG4gICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiZ2FudHQtZWxhc3RpY19fdGFzay1saXN0LWl0ZW0tY29sdW1uXCIsXG4gICAgICBzdHlsZTogX3ZtLml0ZW1Db2x1bW5TdHlsZSxcbiAgICB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZ2FudHQtZWxhc3RpY19fdGFzay1saXN0LWl0ZW0tdmFsdWUtd3JhcHBlclwiLFxuICAgICAgICAgIHN0eWxlOiBfdm0ud3JhcHBlclN0eWxlLFxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX3ZtLl90KFwiZGVmYXVsdFwiKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZ2FudHQtZWxhc3RpY19fdGFzay1saXN0LWl0ZW0tdmFsdWUtY29udGFpbmVyXCIsXG4gICAgICAgICAgICAgIHN0eWxlOiBfdm0uY29udGFpbmVyU3R5bGUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAhX3ZtLmh0bWwgJiYgIV92bS5jb2x1bW4ucmVuZGVyXG4gICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImdhbnR0LWVsYXN0aWNfX3Rhc2stbGlzdC1pdGVtLXZhbHVlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IF92bS52YWx1ZVN0eWxlLFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmVtaXRFdmVudChcImNsaWNrXCIsICRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBtb3VzZWVudGVyOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZW1pdEV2ZW50KFwibW91c2VlbnRlclwiLCAkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbW91c2VvdmVyOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZW1pdEV2ZW50KFwibW91c2VvdmVyXCIsICRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBtb3VzZW91dDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmVtaXRFdmVudChcIm1vdXNlb3V0XCIsICRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBtb3VzZW1vdmU6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5lbWl0RXZlbnQoXCJtb3VzZW1vdmVcIiwgJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vdXNlZG93bjogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmVtaXRFdmVudChcIm1vdXNlZG93blwiLCAkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbW91c2V1cDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmVtaXRFdmVudChcIm1vdXNldXBcIiwgJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vdXNld2hlZWw6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5lbWl0RXZlbnQoXCJtb3VzZXdoZWVsXCIsICRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3VjaHN0YXJ0OiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZW1pdEV2ZW50KFwidG91Y2hzdGFydFwiLCAkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgdG91Y2htb3ZlOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZW1pdEV2ZW50KFwidG91Y2htb3ZlXCIsICRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3VjaGVuZDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmVtaXRFdmVudChcInRvdWNoZW5kXCIsICRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlxcbiAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLnZhbHVlKSArIFwiXFxuICAgICAgXCIpXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIDogX3ZtLmNvbHVtbi5yZW5kZXJcbiAgICAgICAgICAgICAgICA/IF9jKFwiUmVuZGVyXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICByZW5kZXI6ICgpID0+IF92bS5jb2x1bW4ucmVuZGVyKF92bS52YWx1ZSwgX3ZtLnRhc2spLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICA6IF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZ2FudHQtZWxhc3RpY19fdGFzay1saXN0LWl0ZW0tdmFsdWVcIixcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IF92bS52YWx1ZVN0eWxlLFxuICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyBpbm5lckhUTUw6IF92bS5fcyhfdm0udmFsdWUpIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZW1pdEV2ZW50KFwiY2xpY2tcIiwgJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgbW91c2VlbnRlcjogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5lbWl0RXZlbnQoXCJtb3VzZWVudGVyXCIsICRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIG1vdXNlb3ZlcjogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5lbWl0RXZlbnQoXCJtb3VzZW92ZXJcIiwgJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgbW91c2VvdXQ6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZW1pdEV2ZW50KFwibW91c2VvdXRcIiwgJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgbW91c2Vtb3ZlOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmVtaXRFdmVudChcIm1vdXNlbW92ZVwiLCAkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBtb3VzZWRvd246IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZW1pdEV2ZW50KFwibW91c2Vkb3duXCIsICRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIG1vdXNldXA6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZW1pdEV2ZW50KFwibW91c2V1cFwiLCAkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBtb3VzZXdoZWVsOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmVtaXRFdmVudChcIm1vdXNld2hlZWxcIiwgJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgdG91Y2hzdGFydDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5lbWl0RXZlbnQoXCJ0b3VjaHN0YXJ0XCIsICRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHRvdWNobW92ZTogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5lbWl0RXZlbnQoXCJ0b3VjaG1vdmVcIiwgJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgdG91Y2hlbmQ6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZW1pdEV2ZW50KFwidG91Y2hlbmRcIiwgJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgXSxcbiAgICAgICAgMlxuICAgICAgKSxcbiAgICBdXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICB2YXIgX3ZtID0gdGhpcyxcbiAgICBfYyA9IF92bS5fc2VsZi5fY1xuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7XG4gICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgIHZhbHVlOiBfdm0ucm9vdC5zdGF0ZS5vcHRpb25zLnRhc2tMaXN0LmRpc3BsYXksXG4gICAgICAgICAgZXhwcmVzc2lvbjogXCJyb290LnN0YXRlLm9wdGlvbnMudGFza0xpc3QuZGlzcGxheVwiLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIHJlZjogXCJ0YXNrTGlzdFdyYXBwZXJcIixcbiAgICAgIHN0YXRpY0NsYXNzOiBcImdhbnR0LWVsYXN0aWNfX3Rhc2stbGlzdC13cmFwcGVyXCIsXG4gICAgICBzdHlsZToge1xuICAgICAgICAuLi5fdm0ucm9vdC5zdHlsZVtcInRhc2stbGlzdC13cmFwcGVyXCJdLFxuICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHtcbiAgICAgICAgICByZWY6IFwidGFza0xpc3RcIixcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJnYW50dC1lbGFzdGljX190YXNrLWxpc3RcIixcbiAgICAgICAgICBzdHlsZTogeyAuLi5fdm0ucm9vdC5zdHlsZVtcInRhc2stbGlzdFwiXSB9LFxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJ0YXNrLWxpc3QtaGVhZGVyXCIpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICByZWY6IFwidGFza0xpc3RJdGVtc1wiLFxuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJnYW50dC1lbGFzdGljX190YXNrLWxpc3QtaXRlbXNcIixcbiAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAuLi5fdm0ucm9vdC5zdHlsZVtcInRhc2stbGlzdC1pdGVtc1wiXSxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IF92bS5yb290LnN0YXRlLm9wdGlvbnMucm93c0hlaWdodCArIFwicHhcIixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBfdm0uX2woX3ZtLnNob3dUYXNrcywgZnVuY3Rpb24gKHRhc2spIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF9jKFwidGFzay1saXN0LWl0ZW1cIiwge1xuICAgICAgICAgICAgICAgIGtleTogdGFzay5pZCxcbiAgICAgICAgICAgICAgICBhdHRyczogeyB0YXNrOiB0YXNrIH0sXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgIF1cbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gIHZhciBfdm0gPSB0aGlzLFxuICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcImdhbnR0LWVsYXN0aWNfX3Rhc2stbGlzdC1oZWFkZXJcIixcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIC4uLl92bS5yb290LnN0eWxlW1widGFzay1saXN0LWhlYWRlclwiXSxcbiAgICAgICAgaGVpZ2h0OiBgJHtfdm0ucm9vdC5zdGF0ZS5vcHRpb25zLmNhbGVuZGFyLmhlaWdodH1weGAsXG4gICAgICAgIFwibWFyZ2luLWJvdHRvbVwiOiBgJHtfdm0ucm9vdC5zdGF0ZS5vcHRpb25zLmNhbGVuZGFyLmdhcH1weGAsXG4gICAgICB9LFxuICAgIH0sXG4gICAgX3ZtLl9sKF92bS5yb290LmdldFRhc2tMaXN0Q29sdW1ucywgZnVuY3Rpb24gKGNvbHVtbikge1xuICAgICAgcmV0dXJuIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7XG4gICAgICAgICAga2V5OiBjb2x1bW4uX2lkLFxuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImdhbnR0LWVsYXN0aWNfX3Rhc2stbGlzdC1oZWFkZXItY29sdW1uXCIsXG4gICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgIC4uLl92bS5yb290LnN0eWxlW1widGFzay1saXN0LWhlYWRlci1jb2x1bW5cIl0sXG4gICAgICAgICAgICAuLi5jb2x1bW4uc3R5bGVbXCJ0YXNrLWxpc3QtaGVhZGVyLWNvbHVtblwiXSxcbiAgICAgICAgICAgIC4uLl92bS5nZXRTdHlsZShjb2x1bW4pLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBjb2x1bW4uZXhwYW5kZXJcbiAgICAgICAgICAgID8gX2MoXCJ0YXNrLWxpc3QtZXhwYW5kZXJcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICB0YXNrczogX3ZtLmNvbGxhcHNpYmxlLFxuICAgICAgICAgICAgICAgICAgb3B0aW9uczogX3ZtLnJvb3Quc3RhdGUub3B0aW9ucy50YXNrTGlzdC5leHBhbmRlcixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZ2FudHQtZWxhc3RpY19fdGFzay1saXN0LWhlYWRlci1sYWJlbFwiLFxuICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgIC4uLl92bS5yb290LnN0eWxlW1widGFzay1saXN0LWhlYWRlci1sYWJlbFwiXSxcbiAgICAgICAgICAgICAgICAuLi5jb2x1bW4uc3R5bGVbXCJ0YXNrLWxpc3QtaGVhZGVyLWxhYmVsXCJdLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBhdHRyczogeyBjb2x1bW46IGNvbHVtbiB9LFxuICAgICAgICAgICAgICBvbjogeyBtb3VzZXVwOiBfdm0ucmVzaXplck1vdXNlVXAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgXCIgKyBfdm0uX3MoY29sdW1uLmxhYmVsKSArIFwiXFxuICAgIFwiKV1cbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJnYW50dC1lbGFzdGljX190YXNrLWxpc3QtaGVhZGVyLXJlc2l6ZXItd3JhcHBlclwiLFxuICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgIC4uLl92bS5yb290LnN0eWxlW1widGFzay1saXN0LWhlYWRlci1yZXNpemVyLXdyYXBwZXJcIl0sXG4gICAgICAgICAgICAgICAgLi4uY29sdW1uLnN0eWxlW1widGFzay1saXN0LWhlYWRlci1yZXNpemVyLXdyYXBwZXJcIl0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGF0dHJzOiB7IGNvbHVtbjogY29sdW1uIH0sXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgbW91c2Vkb3duOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnJlc2l6ZXJNb3VzZURvd24oJGV2ZW50LCBjb2x1bW4pXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZ2FudHQtZWxhc3RpY19fdGFzay1saXN0LWhlYWRlci1yZXNpemVyXCIsXG4gICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAuLi5fdm0ucm9vdC5zdHlsZVtcInRhc2stbGlzdC1oZWFkZXItcmVzaXplclwiXSxcbiAgICAgICAgICAgICAgICAgICAgLi4uY29sdW1uLnN0eWxlW1widGFzay1saXN0LWhlYWRlci1yZXNpemVyXCJdLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZ2FudHQtZWxhc3RpY19fdGFzay1saXN0LWhlYWRlci1yZXNpemVyLWRvdFwiLFxuICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgIC4uLl92bS5yb290LnN0eWxlW1widGFzay1saXN0LWhlYWRlci1yZXNpemVyLWRvdFwiXSxcbiAgICAgICAgICAgICAgICAgICAgICAuLi5jb2x1bW4uc3R5bGVbXCJ0YXNrLWxpc3QtaGVhZGVyLXJlc2l6ZXItZG90XCJdLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJnYW50dC1lbGFzdGljX190YXNrLWxpc3QtaGVhZGVyLXJlc2l6ZXItZG90XCIsXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgLi4uX3ZtLnJvb3Quc3R5bGVbXCJ0YXNrLWxpc3QtaGVhZGVyLXJlc2l6ZXItZG90XCJdLFxuICAgICAgICAgICAgICAgICAgICAgIC4uLmNvbHVtbi5zdHlsZVtcInRhc2stbGlzdC1oZWFkZXItcmVzaXplci1kb3RcIl0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImdhbnR0LWVsYXN0aWNfX3Rhc2stbGlzdC1oZWFkZXItcmVzaXplci1kb3RcIixcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAuLi5fdm0ucm9vdC5zdHlsZVtcInRhc2stbGlzdC1oZWFkZXItcmVzaXplci1kb3RcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgLi4uY29sdW1uLnN0eWxlW1widGFzay1saXN0LWhlYWRlci1yZXNpemVyLWRvdFwiXSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApLFxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgfSksXG4gICAgMFxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgdmFyIF92bSA9IHRoaXMsXG4gICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiZ2FudHQtZWxhc3RpY19fdGFzay1saXN0LWl0ZW1cIixcbiAgICAgIHN0eWxlOiB7IC4uLl92bS5yb290LnN0eWxlW1widGFzay1saXN0LWl0ZW1cIl0gfSxcbiAgICAgIG9uOiB7IGNsaWNrOiBfdm0uaGFuZGxlUm93IH0sXG4gICAgfSxcbiAgICBfdm0uX2woX3ZtLmNvbHVtbnMsIGZ1bmN0aW9uIChjb2x1bW4pIHtcbiAgICAgIHJldHVybiBfYyhcbiAgICAgICAgXCJpdGVtLWNvbHVtblwiLFxuICAgICAgICB7IGtleTogY29sdW1uLl9pZCwgYXR0cnM6IHsgY29sdW1uOiBjb2x1bW4sIHRhc2s6IF92bS50YXNrIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIGNvbHVtbi5leHBhbmRlclxuICAgICAgICAgICAgPyBfYyhcInRhc2stbGlzdC1leHBhbmRlclwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHRhc2tzOiBbX3ZtLnRhc2tdLFxuICAgICAgICAgICAgICAgICAgb3B0aW9uczogX3ZtLnJvb3Quc3RhdGUub3B0aW9ucy50YXNrTGlzdC5leHBhbmRlcixcbiAgICAgICAgICAgICAgICAgIHR5cGU6IFwidGFza0xpc3RcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIH0pLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gIHZhciBfdm0gPSB0aGlzLFxuICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcImdhbnR0LWVsYXN0aWNfX3Rhc2stbGlzdC1pdGVtLWNvbHVtblwiLFxuICAgICAgc3R5bGU6IF92bS5pdGVtQ29sdW1uU3R5bGUsXG4gICAgfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImdhbnR0LWVsYXN0aWNfX3Rhc2stbGlzdC1pdGVtLXZhbHVlLXdyYXBwZXJcIixcbiAgICAgICAgICBzdHlsZTogX3ZtLndyYXBwZXJTdHlsZSxcbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF92bS5fdChcImRlZmF1bHRcIiksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImdhbnR0LWVsYXN0aWNfX3Rhc2stbGlzdC1pdGVtLXZhbHVlLWNvbnRhaW5lclwiLFxuICAgICAgICAgICAgICBzdHlsZTogX3ZtLmNvbnRhaW5lclN0eWxlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgIV92bS5odG1sICYmICFfdm0uY29sdW1uLnJlbmRlclxuICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJnYW50dC1lbGFzdGljX190YXNrLWxpc3QtaXRlbS12YWx1ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiBfdm0udmFsdWVTdHlsZSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5lbWl0RXZlbnQoXCJjbGlja1wiLCAkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbW91c2VlbnRlcjogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmVtaXRFdmVudChcIm1vdXNlZW50ZXJcIiwgJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vdXNlb3ZlcjogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmVtaXRFdmVudChcIm1vdXNlb3ZlclwiLCAkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbW91c2VvdXQ6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5lbWl0RXZlbnQoXCJtb3VzZW91dFwiLCAkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbW91c2Vtb3ZlOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZW1pdEV2ZW50KFwibW91c2Vtb3ZlXCIsICRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBtb3VzZWRvd246IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5lbWl0RXZlbnQoXCJtb3VzZWRvd25cIiwgJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vdXNldXA6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5lbWl0RXZlbnQoXCJtb3VzZXVwXCIsICRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBtb3VzZXdoZWVsOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZW1pdEV2ZW50KFwibW91c2V3aGVlbFwiLCAkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgdG91Y2hzdGFydDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmVtaXRFdmVudChcInRvdWNoc3RhcnRcIiwgJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNobW92ZTogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmVtaXRFdmVudChcInRvdWNobW92ZVwiLCAkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgdG91Y2hlbmQ6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5lbWl0RXZlbnQoXCJ0b3VjaGVuZFwiLCAkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgIFwiICsgX3ZtLl9zKF92bS52YWx1ZSkgKyBcIlxcbiAgICAgIFwiKV1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICA6IF92bS5jb2x1bW4ucmVuZGVyXG4gICAgICAgICAgICAgICAgPyBfYyhcIlJlbmRlclwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgcmVuZGVyOiAoKSA9PiBfdm0uY29sdW1uLnJlbmRlcihfdm0udmFsdWUsIF92bS50YXNrKSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgOiBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImdhbnR0LWVsYXN0aWNfX3Rhc2stbGlzdC1pdGVtLXZhbHVlXCIsXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiBfdm0udmFsdWVTdHlsZSxcbiAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgaW5uZXJIVE1MOiBfdm0uX3MoX3ZtLnZhbHVlKSB9LFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmVtaXRFdmVudChcImNsaWNrXCIsICRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIG1vdXNlZW50ZXI6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZW1pdEV2ZW50KFwibW91c2VlbnRlclwiLCAkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBtb3VzZW92ZXI6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZW1pdEV2ZW50KFwibW91c2VvdmVyXCIsICRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIG1vdXNlb3V0OiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmVtaXRFdmVudChcIm1vdXNlb3V0XCIsICRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIG1vdXNlbW92ZTogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5lbWl0RXZlbnQoXCJtb3VzZW1vdmVcIiwgJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgbW91c2Vkb3duOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmVtaXRFdmVudChcIm1vdXNlZG93blwiLCAkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBtb3VzZXVwOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmVtaXRFdmVudChcIm1vdXNldXBcIiwgJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgbW91c2V3aGVlbDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5lbWl0RXZlbnQoXCJtb3VzZXdoZWVsXCIsICRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHRvdWNoc3RhcnQ6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZW1pdEV2ZW50KFwidG91Y2hzdGFydFwiLCAkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB0b3VjaG1vdmU6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZW1pdEV2ZW50KFwidG91Y2htb3ZlXCIsICRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHRvdWNoZW5kOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmVtaXRFdmVudChcInRvdWNoZW5kXCIsICRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgIF0sXG4gICAgICAgIDJcbiAgICAgICksXG4gICAgXVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgdmFyIF92bSA9IHRoaXMsXG4gICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAge1xuICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICB2YWx1ZTogX3ZtLnJvb3Quc3RhdGUub3B0aW9ucy50YXNrTGlzdC5kaXNwbGF5LFxuICAgICAgICAgIGV4cHJlc3Npb246IFwicm9vdC5zdGF0ZS5vcHRpb25zLnRhc2tMaXN0LmRpc3BsYXlcIixcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICByZWY6IFwidGFza0xpc3RXcmFwcGVyXCIsXG4gICAgICBzdGF0aWNDbGFzczogXCJnYW50dC1lbGFzdGljX190YXNrLWxpc3Qtd3JhcHBlclwiLFxuICAgICAgc3R5bGU6IHtcbiAgICAgICAgLi4uX3ZtLnJvb3Quc3R5bGVbXCJ0YXNrLWxpc3Qtd3JhcHBlclwiXSxcbiAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7XG4gICAgICAgICAgcmVmOiBcInRhc2tMaXN0XCIsXG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZ2FudHQtZWxhc3RpY19fdGFzay1saXN0XCIsXG4gICAgICAgICAgc3R5bGU6IHsgLi4uX3ZtLnJvb3Quc3R5bGVbXCJ0YXNrLWxpc3RcIl0gfSxcbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwidGFzay1saXN0LWhlYWRlclwiKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcmVmOiBcInRhc2tMaXN0SXRlbXNcIixcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZ2FudHQtZWxhc3RpY19fdGFzay1saXN0LWl0ZW1zXCIsXG4gICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgLi4uX3ZtLnJvb3Quc3R5bGVbXCJ0YXNrLWxpc3QtaXRlbXNcIl0sXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBfdm0ucm9vdC5zdGF0ZS5vcHRpb25zLnJvd3NIZWlnaHQgKyBcInB4XCIsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgX3ZtLl9sKF92bS5zaG93VGFza3MsIGZ1bmN0aW9uICh0YXNrKSB7XG4gICAgICAgICAgICAgIHJldHVybiBfYyhcInRhc2stbGlzdC1pdGVtXCIsIHtcbiAgICAgICAgICAgICAgICBrZXk6IHRhc2suaWQsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgdGFzazogdGFzayB9LFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICBdXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICB2YXIgX3ZtID0gdGhpcyxcbiAgICBfYyA9IF92bS5fc2VsZi5fY1xuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7XG4gICAgICBzdGF0aWNDbGFzczogXCJnYW50dC1lbGFzdGljX190YXNrLWxpc3QtaGVhZGVyXCIsXG4gICAgICBzdHlsZToge1xuICAgICAgICAuLi5fdm0ucm9vdC5zdHlsZVtcInRhc2stbGlzdC1oZWFkZXJcIl0sXG4gICAgICAgIGhlaWdodDogYCR7X3ZtLnJvb3Quc3RhdGUub3B0aW9ucy5jYWxlbmRhci5oZWlnaHR9cHhgLFxuICAgICAgICBcIm1hcmdpbi1ib3R0b21cIjogYCR7X3ZtLnJvb3Quc3RhdGUub3B0aW9ucy5jYWxlbmRhci5nYXB9cHhgLFxuICAgICAgfSxcbiAgICB9LFxuICAgIF92bS5fbChfdm0uY29sdW1ucywgZnVuY3Rpb24gKGNvbHVtbikge1xuICAgICAgcmV0dXJuIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7XG4gICAgICAgICAga2V5OiBjb2x1bW4uX2lkLFxuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImdhbnR0LWVsYXN0aWNfX3Rhc2stbGlzdC1oZWFkZXItY29sdW1uXCIsXG4gICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgIC4uLl92bS5yb290LnN0eWxlW1widGFzay1saXN0LWhlYWRlci1jb2x1bW5cIl0sXG4gICAgICAgICAgICAuLi5jb2x1bW4uc3R5bGVbXCJ0YXNrLWxpc3QtaGVhZGVyLWNvbHVtblwiXSxcbiAgICAgICAgICAgIC4uLl92bS5nZXRTdHlsZShjb2x1bW4pLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBjb2x1bW4uZXhwYW5kZXJcbiAgICAgICAgICAgID8gX2MoXCJ0YXNrLWxpc3QtZXhwYW5kZXJcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICB0YXNrczogX3ZtLmNvbGxhcHNpYmxlLFxuICAgICAgICAgICAgICAgICAgb3B0aW9uczogX3ZtLnJvb3Quc3RhdGUub3B0aW9ucy50YXNrTGlzdC5leHBhbmRlcixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZ2FudHQtZWxhc3RpY19fdGFzay1saXN0LWhlYWRlci1sYWJlbFwiLFxuICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgIC4uLl92bS5yb290LnN0eWxlW1widGFzay1saXN0LWhlYWRlci1sYWJlbFwiXSxcbiAgICAgICAgICAgICAgICAuLi5jb2x1bW4uc3R5bGVbXCJ0YXNrLWxpc3QtaGVhZGVyLWxhYmVsXCJdLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBhdHRyczogeyBjb2x1bW46IGNvbHVtbiB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICBcIiArIF92bS5fcyhjb2x1bW4ubGFiZWwpICsgXCJcXG4gICAgXCIpXVxuICAgICAgICAgICksXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICB9KSxcbiAgICAwXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICB2YXIgX3ZtID0gdGhpcyxcbiAgICBfYyA9IF92bS5fc2VsZi5fY1xuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7XG4gICAgICBzdGF0aWNDbGFzczogXCJnYW50dC1lbGFzdGljX190YXNrLWxpc3QtaXRlbVwiLFxuICAgICAgc3R5bGU6IHsgLi4uX3ZtLnJvb3Quc3R5bGVbXCJ0YXNrLWxpc3QtaXRlbVwiXSB9LFxuICAgIH0sXG4gICAgX3ZtLl9sKF92bS5jb2x1bW5zLCBmdW5jdGlvbiAoY29sdW1uKSB7XG4gICAgICByZXR1cm4gX2MoXG4gICAgICAgIFwiaXRlbS1jb2x1bW5cIixcbiAgICAgICAgeyBrZXk6IGNvbHVtbi5faWQsIGF0dHJzOiB7IGNvbHVtbjogY29sdW1uLCB0YXNrOiBfdm0udGFzayB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBjb2x1bW4uZXhwYW5kZXJcbiAgICAgICAgICAgID8gX2MoXCJ0YXNrLWxpc3QtZXhwYW5kZXJcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICB0YXNrczogW192bS50YXNrXSxcbiAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IF92bS5yb290LnN0YXRlLm9wdGlvbnMudGFza0xpc3QuZXhwYW5kZXIsXG4gICAgICAgICAgICAgICAgICB0eXBlOiBcInRhc2tMaXN0XCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICB9KSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCIvKiBnbG9iYWxzIF9fVlVFX1NTUl9DT05URVhUX18gKi9cblxuLy8gSU1QT1JUQU5UOiBEbyBOT1QgdXNlIEVTMjAxNSBmZWF0dXJlcyBpbiB0aGlzIGZpbGUgKGV4Y2VwdCBmb3IgbW9kdWxlcykuXG4vLyBUaGlzIG1vZHVsZSBpcyBhIHJ1bnRpbWUgdXRpbGl0eSBmb3IgY2xlYW5lciBjb21wb25lbnQgbW9kdWxlIG91dHB1dCBhbmQgd2lsbFxuLy8gYmUgaW5jbHVkZWQgaW4gdGhlIGZpbmFsIHdlYnBhY2sgdXNlciBidW5kbGUuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgc2NyaXB0RXhwb3J0cyxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZ1bmN0aW9uYWxUZW1wbGF0ZSxcbiAgaW5qZWN0U3R5bGVzLFxuICBzY29wZUlkLFxuICBtb2R1bGVJZGVudGlmaWVyIC8qIHNlcnZlciBvbmx5ICovLFxuICBzaGFkb3dNb2RlIC8qIHZ1ZS1jbGkgb25seSAqL1xuKSB7XG4gIC8vIFZ1ZS5leHRlbmQgY29uc3RydWN0b3IgZXhwb3J0IGludGVyb3BcbiAgdmFyIG9wdGlvbnMgPVxuICAgIHR5cGVvZiBzY3JpcHRFeHBvcnRzID09PSAnZnVuY3Rpb24nID8gc2NyaXB0RXhwb3J0cy5vcHRpb25zIDogc2NyaXB0RXhwb3J0c1xuXG4gIC8vIHJlbmRlciBmdW5jdGlvbnNcbiAgaWYgKHJlbmRlcikge1xuICAgIG9wdGlvbnMucmVuZGVyID0gcmVuZGVyXG4gICAgb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnMgPSBzdGF0aWNSZW5kZXJGbnNcbiAgICBvcHRpb25zLl9jb21waWxlZCA9IHRydWVcbiAgfVxuXG4gIC8vIGZ1bmN0aW9uYWwgdGVtcGxhdGVcbiAgaWYgKGZ1bmN0aW9uYWxUZW1wbGF0ZSkge1xuICAgIG9wdGlvbnMuZnVuY3Rpb25hbCA9IHRydWVcbiAgfVxuXG4gIC8vIHNjb3BlZElkXG4gIGlmIChzY29wZUlkKSB7XG4gICAgb3B0aW9ucy5fc2NvcGVJZCA9ICdkYXRhLXYtJyArIHNjb3BlSWRcbiAgfVxuXG4gIHZhciBob29rXG4gIGlmIChtb2R1bGVJZGVudGlmaWVyKSB7XG4gICAgLy8gc2VydmVyIGJ1aWxkXG4gICAgaG9vayA9IGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgICAvLyAyLjMgaW5qZWN0aW9uXG4gICAgICBjb250ZXh0ID1cbiAgICAgICAgY29udGV4dCB8fCAvLyBjYWNoZWQgY2FsbFxuICAgICAgICAodGhpcy4kdm5vZGUgJiYgdGhpcy4kdm5vZGUuc3NyQ29udGV4dCkgfHwgLy8gc3RhdGVmdWxcbiAgICAgICAgKHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LiR2bm9kZSAmJiB0aGlzLnBhcmVudC4kdm5vZGUuc3NyQ29udGV4dCkgLy8gZnVuY3Rpb25hbFxuICAgICAgLy8gMi4yIHdpdGggcnVuSW5OZXdDb250ZXh0OiB0cnVlXG4gICAgICBpZiAoIWNvbnRleHQgJiYgdHlwZW9mIF9fVlVFX1NTUl9DT05URVhUX18gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnRleHQgPSBfX1ZVRV9TU1JfQ09OVEVYVF9fXG4gICAgICB9XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHN0eWxlc1xuICAgICAgaWYgKGluamVjdFN0eWxlcykge1xuICAgICAgICBpbmplY3RTdHlsZXMuY2FsbCh0aGlzLCBjb250ZXh0KVxuICAgICAgfVxuICAgICAgLy8gcmVnaXN0ZXIgY29tcG9uZW50IG1vZHVsZSBpZGVudGlmaWVyIGZvciBhc3luYyBjaHVuayBpbmZlcnJlbmNlXG4gICAgICBpZiAoY29udGV4dCAmJiBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cykge1xuICAgICAgICBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cy5hZGQobW9kdWxlSWRlbnRpZmllcilcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gdXNlZCBieSBzc3IgaW4gY2FzZSBjb21wb25lbnQgaXMgY2FjaGVkIGFuZCBiZWZvcmVDcmVhdGVcbiAgICAvLyBuZXZlciBnZXRzIGNhbGxlZFxuICAgIG9wdGlvbnMuX3NzclJlZ2lzdGVyID0gaG9va1xuICB9IGVsc2UgaWYgKGluamVjdFN0eWxlcykge1xuICAgIGhvb2sgPSBzaGFkb3dNb2RlXG4gICAgICA/IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpbmplY3RTdHlsZXMuY2FsbChcbiAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAob3B0aW9ucy5mdW5jdGlvbmFsID8gdGhpcy5wYXJlbnQgOiB0aGlzKS4kcm9vdC4kb3B0aW9ucy5zaGFkb3dSb290XG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICA6IGluamVjdFN0eWxlc1xuICB9XG5cbiAgaWYgKGhvb2spIHtcbiAgICBpZiAob3B0aW9ucy5mdW5jdGlvbmFsKSB7XG4gICAgICAvLyBmb3IgdGVtcGxhdGUtb25seSBob3QtcmVsb2FkIGJlY2F1c2UgaW4gdGhhdCBjYXNlIHRoZSByZW5kZXIgZm4gZG9lc24ndFxuICAgICAgLy8gZ28gdGhyb3VnaCB0aGUgbm9ybWFsaXplclxuICAgICAgb3B0aW9ucy5faW5qZWN0U3R5bGVzID0gaG9va1xuICAgICAgLy8gcmVnaXN0ZXIgZm9yIGZ1bmN0aW9uYWwgY29tcG9uZW50IGluIHZ1ZSBmaWxlXG4gICAgICB2YXIgb3JpZ2luYWxSZW5kZXIgPSBvcHRpb25zLnJlbmRlclxuICAgICAgb3B0aW9ucy5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXJXaXRoU3R5bGVJbmplY3Rpb24oaCwgY29udGV4dCkge1xuICAgICAgICBob29rLmNhbGwoY29udGV4dClcbiAgICAgICAgcmV0dXJuIG9yaWdpbmFsUmVuZGVyKGgsIGNvbnRleHQpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgcmVnaXN0cmF0aW9uIGFzIGJlZm9yZUNyZWF0ZSBob29rXG4gICAgICB2YXIgZXhpc3RpbmcgPSBvcHRpb25zLmJlZm9yZUNyZWF0ZVxuICAgICAgb3B0aW9ucy5iZWZvcmVDcmVhdGUgPSBleGlzdGluZyA/IFtdLmNvbmNhdChleGlzdGluZywgaG9vaykgOiBbaG9va11cbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGV4cG9ydHM6IHNjcmlwdEV4cG9ydHMsXG4gICAgb3B0aW9uczogb3B0aW9uc1xuICB9XG59XG4iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vR2FudHRFbGFzdGljLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTAyYzYzMDRjJmxhbmc9Y3NzXCIpO1xuaWYoY29udGVudC5fX2VzTW9kdWxlKSBjb250ZW50ID0gY29udGVudC5kZWZhdWx0O1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcImM0NjNiZDFlXCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9HYW50dEVsYXN0aWMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MDJjNjMwNGMmbGFuZz1jc3NcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vR2FudHRFbGFzdGljLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTAyYzYzMDRjJmxhbmc9Y3NzXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiAgTW9kaWZpZWQgYnkgRXZhbiBZb3UgQHl5eDk5MDgwM1xuKi9cblxuaW1wb3J0IGxpc3RUb1N0eWxlcyBmcm9tICcuL2xpc3RUb1N0eWxlcydcblxudmFyIGhhc0RvY3VtZW50ID0gdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJ1xuXG5pZiAodHlwZW9mIERFQlVHICE9PSAndW5kZWZpbmVkJyAmJiBERUJVRykge1xuICBpZiAoIWhhc0RvY3VtZW50KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICd2dWUtc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnQuICcgK1xuICAgIFwiVXNlIHsgdGFyZ2V0OiAnbm9kZScgfSBpbiB5b3VyIFdlYnBhY2sgY29uZmlnIHRvIGluZGljYXRlIGEgc2VydmVyLXJlbmRlcmluZyBlbnZpcm9ubWVudC5cIlxuICApIH1cbn1cblxuLypcbnR5cGUgU3R5bGVPYmplY3QgPSB7XG4gIGlkOiBudW1iZXI7XG4gIHBhcnRzOiBBcnJheTxTdHlsZU9iamVjdFBhcnQ+XG59XG5cbnR5cGUgU3R5bGVPYmplY3RQYXJ0ID0ge1xuICBjc3M6IHN0cmluZztcbiAgbWVkaWE6IHN0cmluZztcbiAgc291cmNlTWFwOiA/c3RyaW5nXG59XG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7LypcbiAgW2lkOiBudW1iZXJdOiB7XG4gICAgaWQ6IG51bWJlcixcbiAgICByZWZzOiBudW1iZXIsXG4gICAgcGFydHM6IEFycmF5PChvYmo/OiBTdHlsZU9iamVjdFBhcnQpID0+IHZvaWQ+XG4gIH1cbiovfVxuXG52YXIgaGVhZCA9IGhhc0RvY3VtZW50ICYmIChkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0pXG52YXIgc2luZ2xldG9uRWxlbWVudCA9IG51bGxcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMFxudmFyIGlzUHJvZHVjdGlvbiA9IGZhbHNlXG52YXIgbm9vcCA9IGZ1bmN0aW9uICgpIHt9XG52YXIgb3B0aW9ucyA9IG51bGxcbnZhciBzc3JJZEtleSA9ICdkYXRhLXZ1ZS1zc3ItaWQnXG5cbi8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxudmFyIGlzT2xkSUUgPSB0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiAvbXNpZSBbNi05XVxcYi8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkpXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZFN0eWxlc0NsaWVudCAocGFyZW50SWQsIGxpc3QsIF9pc1Byb2R1Y3Rpb24sIF9vcHRpb25zKSB7XG4gIGlzUHJvZHVjdGlvbiA9IF9pc1Byb2R1Y3Rpb25cblxuICBvcHRpb25zID0gX29wdGlvbnMgfHwge31cblxuICB2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKHBhcmVudElkLCBsaXN0KVxuICBhZGRTdHlsZXNUb0RvbShzdHlsZXMpXG5cbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuICAgIHZhciBtYXlSZW1vdmUgPSBbXVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IHN0eWxlc1tpXVxuICAgICAgdmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF1cbiAgICAgIGRvbVN0eWxlLnJlZnMtLVxuICAgICAgbWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpXG4gICAgfVxuICAgIGlmIChuZXdMaXN0KSB7XG4gICAgICBzdHlsZXMgPSBsaXN0VG9TdHlsZXMocGFyZW50SWQsIG5ld0xpc3QpXG4gICAgICBhZGRTdHlsZXNUb0RvbShzdHlsZXMpXG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlcyA9IFtdXG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV1cbiAgICAgIGlmIChkb21TdHlsZS5yZWZzID09PSAwKSB7XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBkb21TdHlsZS5wYXJ0c1tqXSgpXG4gICAgICAgIH1cbiAgICAgICAgZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzIC8qIEFycmF5PFN0eWxlT2JqZWN0PiAqLykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gc3R5bGVzW2ldXG4gICAgdmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF1cbiAgICBpZiAoZG9tU3R5bGUpIHtcbiAgICAgIGRvbVN0eWxlLnJlZnMrK1xuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKVxuICAgICAgfVxuICAgICAgZm9yICg7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSkpXG4gICAgICB9XG4gICAgICBpZiAoZG9tU3R5bGUucGFydHMubGVuZ3RoID4gaXRlbS5wYXJ0cy5sZW5ndGgpIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHMubGVuZ3RoID0gaXRlbS5wYXJ0cy5sZW5ndGhcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHBhcnRzID0gW11cbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0pKVxuICAgICAgfVxuICAgICAgc3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7IGlkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHMgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKCkge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKVxuICBzdHlsZUVsZW1lbnQudHlwZSA9ICd0ZXh0L2NzcydcbiAgaGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpXG4gIHJldHVybiBzdHlsZUVsZW1lbnRcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiAvKiBTdHlsZU9iamVjdFBhcnQgKi8pIHtcbiAgdmFyIHVwZGF0ZSwgcmVtb3ZlXG4gIHZhciBzdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzdHlsZVsnICsgc3NySWRLZXkgKyAnfj1cIicgKyBvYmouaWQgKyAnXCJdJylcblxuICBpZiAoc3R5bGVFbGVtZW50KSB7XG4gICAgaWYgKGlzUHJvZHVjdGlvbikge1xuICAgICAgLy8gaGFzIFNTUiBzdHlsZXMgYW5kIGluIHByb2R1Y3Rpb24gbW9kZS5cbiAgICAgIC8vIHNpbXBseSBkbyBub3RoaW5nLlxuICAgICAgcmV0dXJuIG5vb3BcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaGFzIFNTUiBzdHlsZXMgYnV0IGluIGRldiBtb2RlLlxuICAgICAgLy8gZm9yIHNvbWUgcmVhc29uIENocm9tZSBjYW4ndCBoYW5kbGUgc291cmNlIG1hcCBpbiBzZXJ2ZXItcmVuZGVyZWRcbiAgICAgIC8vIHN0eWxlIHRhZ3MgLSBzb3VyY2UgbWFwcyBpbiA8c3R5bGU+IG9ubHkgd29ya3MgaWYgdGhlIHN0eWxlIHRhZyBpc1xuICAgICAgLy8gY3JlYXRlZCBhbmQgaW5zZXJ0ZWQgZHluYW1pY2FsbHkuIFNvIHdlIHJlbW92ZSB0aGUgc2VydmVyIHJlbmRlcmVkXG4gICAgICAvLyBzdHlsZXMgYW5kIGluamVjdCBuZXcgb25lcy5cbiAgICAgIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudClcbiAgICB9XG4gIH1cblxuICBpZiAoaXNPbGRJRSkge1xuICAgIC8vIHVzZSBzaW5nbGV0b24gbW9kZSBmb3IgSUU5LlxuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrXG4gICAgc3R5bGVFbGVtZW50ID0gc2luZ2xldG9uRWxlbWVudCB8fCAoc2luZ2xldG9uRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudCgpKVxuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIGZhbHNlKVxuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIHRydWUpXG4gIH0gZWxzZSB7XG4gICAgLy8gdXNlIG11bHRpLXN0eWxlLXRhZyBtb2RlIGluIGFsbCBvdGhlciBjYXNlc1xuICAgIHN0eWxlRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudCgpXG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudClcbiAgICByZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpXG4gICAgfVxuICB9XG5cbiAgdXBkYXRlKG9iailcblxuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaiAvKiBTdHlsZU9iamVjdFBhcnQgKi8pIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuICAgICAgICAgIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG4gICAgICAgICAgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpXG4gICAgfVxuICB9XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXVxuXG4gIHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJylcbiAgfVxufSkoKVxuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZUVsZW1lbnQsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmouY3NzXG5cbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpXG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpXG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZUVsZW1lbnQuY2hpbGROb2Rlc1xuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKVxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGVFbGVtZW50Lmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSlcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGNzc05vZGUpXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlRWxlbWVudCwgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzXG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcFxuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpXG4gIH1cbiAgaWYgKG9wdGlvbnMuc3NySWQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKHNzcklkS2V5LCBvYmouaWQpXG4gIH1cblxuICBpZiAoc291cmNlTWFwKSB7XG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIuY2hyb21lLmNvbS9kZXZ0b29scy9kb2NzL2phdmFzY3JpcHQtZGVidWdnaW5nXG4gICAgLy8gdGhpcyBtYWtlcyBzb3VyY2UgbWFwcyBpbnNpZGUgc3R5bGUgdGFncyB3b3JrIHByb3Blcmx5IGluIENocm9tZVxuICAgIGNzcyArPSAnXFxuLyojIHNvdXJjZVVSTD0nICsgc291cmNlTWFwLnNvdXJjZXNbMF0gKyAnICovJ1xuICAgIC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG4gICAgY3NzICs9ICdcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LCcgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgJyAqLydcbiAgfVxuXG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3NcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZClcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpXG4gIH1cbn1cbiIsIi8qKlxuICogVHJhbnNsYXRlcyB0aGUgbGlzdCBmb3JtYXQgcHJvZHVjZWQgYnkgY3NzLWxvYWRlciBpbnRvIHNvbWV0aGluZ1xuICogZWFzaWVyIHRvIG1hbmlwdWxhdGUuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAocGFyZW50SWQsIGxpc3QpIHtcbiAgdmFyIHN0eWxlcyA9IFtdXG4gIHZhciBuZXdTdHlsZXMgPSB7fVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV1cbiAgICB2YXIgaWQgPSBpdGVtWzBdXG4gICAgdmFyIGNzcyA9IGl0ZW1bMV1cbiAgICB2YXIgbWVkaWEgPSBpdGVtWzJdXG4gICAgdmFyIHNvdXJjZU1hcCA9IGl0ZW1bM11cbiAgICB2YXIgcGFydCA9IHtcbiAgICAgIGlkOiBwYXJlbnRJZCArICc6JyArIGksXG4gICAgICBjc3M6IGNzcyxcbiAgICAgIG1lZGlhOiBtZWRpYSxcbiAgICAgIHNvdXJjZU1hcDogc291cmNlTWFwXG4gICAgfVxuICAgIGlmICghbmV3U3R5bGVzW2lkXSkge1xuICAgICAgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHsgaWQ6IGlkLCBwYXJ0czogW3BhcnRdIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KVxuICAgIH1cbiAgfVxuICByZXR1cm4gc3R5bGVzXG59XG4iLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0dhbnR0RWxhc3RpYy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDJjNjMwNGNcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9HYW50dEVsYXN0aWMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL0dhbnR0RWxhc3RpYy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9HYW50dEVsYXN0aWMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MDJjNjMwNGMmbGFuZz1jc3NcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcMTc2NzFcXFxcRGVza3RvcFxcXFxwcm9qZWN0XFxcXGdpdGh1YlxcXFxnYW50dC1lbGFzdGljLWN1c3R1bS1jaGFydFxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcwMmM2MzA0YycpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcwMmM2MzA0YycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcwMmM2MzA0YycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vR2FudHRFbGFzdGljLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wMmM2MzA0Y1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzAyYzYzMDRjJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvR2FudHRFbGFzdGljLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9HYW50dEVsYXN0aWMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9HYW50dEVsYXN0aWMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9HYW50dEVsYXN0aWMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MDJjNjMwNGMmbGFuZz1jc3NcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz9yZWYtLTUhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9HYW50dEVsYXN0aWMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTAyYzYzMDRjXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0NhbGVuZGFyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1kZWUxMDhlMlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0NhbGVuZGFyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9DYWxlbmRhci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcMTc2NzFcXFxcRGVza3RvcFxcXFxwcm9qZWN0XFxcXGdpdGh1YlxcXFxnYW50dC1lbGFzdGljLWN1c3R1bS1jaGFydFxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdkZWUxMDhlMicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdkZWUxMDhlMicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdkZWUxMDhlMicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQ2FsZW5kYXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWRlZTEwOGUyXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignZGVlMTA4ZTInLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy9jb21wb25lbnRzL0NhbGVuZGFyL0NhbGVuZGFyLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9DYWxlbmRhci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NhbGVuZGFyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3JlZi0tNSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NhbGVuZGFyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1kZWUxMDhlMlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9DYWxlbmRhclJvdy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MGRhZjA2ZmJcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9DYWxlbmRhclJvdy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vQ2FsZW5kYXJSb3cudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXDE3NjcxXFxcXERlc2t0b3BcXFxccHJvamVjdFxcXFxnaXRodWJcXFxcZ2FudHQtZWxhc3RpYy1jdXN0dW0tY2hhcnRcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMGRhZjA2ZmInKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMGRhZjA2ZmInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMGRhZjA2ZmInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0NhbGVuZGFyUm93LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wZGFmMDZmYlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzBkYWYwNmZiJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvY29tcG9uZW50cy9DYWxlbmRhci9DYWxlbmRhclJvdy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ2FsZW5kYXJSb3cudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9DYWxlbmRhclJvdy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz9yZWYtLTUhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9DYWxlbmRhclJvdy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MGRhZjA2ZmJcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vQ2hhcnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY3YzNmNWNkXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQ2hhcnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL0NoYXJ0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFwxNzY3MVxcXFxEZXNrdG9wXFxcXHByb2plY3RcXFxcZ2l0aHViXFxcXGdhbnR0LWVsYXN0aWMtY3VzdHVtLWNoYXJ0XFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzY3YzNmNWNkJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzY3YzNmNWNkJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzY3YzNmNWNkJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9DaGFydC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjdjM2Y1Y2RcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc2N2MzZjVjZCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL2NvbXBvbmVudHMvQ2hhcnQvQ2hhcnQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NoYXJ0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ2hhcnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/cmVmLS01IS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ2hhcnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY3YzNmNWNkXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0RheXNIaWdobGlnaHQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTFiZmU2NGU4XCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vRGF5c0hpZ2hsaWdodC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vRGF5c0hpZ2hsaWdodC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcMTc2NzFcXFxcRGVza3RvcFxcXFxwcm9qZWN0XFxcXGdpdGh1YlxcXFxnYW50dC1lbGFzdGljLWN1c3R1bS1jaGFydFxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcxYmZlNjRlOCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcxYmZlNjRlOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcxYmZlNjRlOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vRGF5c0hpZ2hsaWdodC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MWJmZTY0ZThcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcxYmZlNjRlOCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL2NvbXBvbmVudHMvQ2hhcnQvRGF5c0hpZ2hsaWdodC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRGF5c0hpZ2hsaWdodC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0RheXNIaWdobGlnaHQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/cmVmLS01IS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRGF5c0hpZ2hsaWdodC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MWJmZTY0ZThcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vRGVwZW5kZW5jeUxpbmVzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1mMWNiZjZiYVwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0RlcGVuZGVuY3lMaW5lcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vRGVwZW5kZW5jeUxpbmVzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFwxNzY3MVxcXFxEZXNrdG9wXFxcXHByb2plY3RcXFxcZ2l0aHViXFxcXGdhbnR0LWVsYXN0aWMtY3VzdHVtLWNoYXJ0XFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2YxY2JmNmJhJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2YxY2JmNmJhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2YxY2JmNmJhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9EZXBlbmRlbmN5TGluZXMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWYxY2JmNmJhXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignZjFjYmY2YmEnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy9jb21wb25lbnRzL0NoYXJ0L0RlcGVuZGVuY3lMaW5lcy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRGVwZW5kZW5jeUxpbmVzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRGVwZW5kZW5jeUxpbmVzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3JlZi0tNSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0RlcGVuZGVuY3lMaW5lcy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZjFjYmY2YmFcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vR3JpZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MmJmOTc5YTdcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9HcmlkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9HcmlkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFwxNzY3MVxcXFxEZXNrdG9wXFxcXHByb2plY3RcXFxcZ2l0aHViXFxcXGdhbnR0LWVsYXN0aWMtY3VzdHVtLWNoYXJ0XFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzJiZjk3OWE3JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzJiZjk3OWE3JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzJiZjk3OWE3JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9HcmlkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yYmY5NzlhN1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzJiZjk3OWE3Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvY29tcG9uZW50cy9DaGFydC9HcmlkLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9HcmlkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vR3JpZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz9yZWYtLTUhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9HcmlkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yYmY5NzlhN1wiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9Qcm9ncmVzc0Jhci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NGJjMzkzNTVcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Qcm9ncmVzc0Jhci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vUHJvZ3Jlc3NCYXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXDE3NjcxXFxcXERlc2t0b3BcXFxccHJvamVjdFxcXFxnaXRodWJcXFxcZ2FudHQtZWxhc3RpYy1jdXN0dW0tY2hhcnRcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNGJjMzkzNTUnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNGJjMzkzNTUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNGJjMzkzNTUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1Byb2dyZXNzQmFyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00YmMzOTM1NVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzRiYzM5MzU1Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvY29tcG9uZW50cy9DaGFydC9Qcm9ncmVzc0Jhci52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUHJvZ3Jlc3NCYXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Qcm9ncmVzc0Jhci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz9yZWYtLTUhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Qcm9ncmVzc0Jhci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NGJjMzkzNTVcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vTWlsZXN0b25lLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zMDEzMDA2Y1wiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL01pbGVzdG9uZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vTWlsZXN0b25lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFwxNzY3MVxcXFxEZXNrdG9wXFxcXHByb2plY3RcXFxcZ2l0aHViXFxcXGdhbnR0LWVsYXN0aWMtY3VzdHVtLWNoYXJ0XFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzMwMTMwMDZjJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzMwMTMwMDZjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzMwMTMwMDZjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9NaWxlc3RvbmUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTMwMTMwMDZjXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMzAxMzAwNmMnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy9jb21wb25lbnRzL0NoYXJ0L1Jvdy9NaWxlc3RvbmUudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL01pbGVzdG9uZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL01pbGVzdG9uZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz9yZWYtLTUhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NaWxlc3RvbmUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTMwMTMwMDZjXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1Byb2plY3QudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTA3N2JiZDczXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vUHJvamVjdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vUHJvamVjdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcMTc2NzFcXFxcRGVza3RvcFxcXFxwcm9qZWN0XFxcXGdpdGh1YlxcXFxnYW50dC1lbGFzdGljLWN1c3R1bS1jaGFydFxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcwNzdiYmQ3MycpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcwNzdiYmQ3MycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcwNzdiYmQ3MycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vUHJvamVjdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDc3YmJkNzNcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcwNzdiYmQ3MycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL2NvbXBvbmVudHMvQ2hhcnQvUm93L1Byb2plY3QudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Byb2plY3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Qcm9qZWN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3JlZi0tNSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Byb2plY3QudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTA3N2JiZDczXCIiLCIvKipcclxuICogQGZpbGVvdmVydmlldyBUYXNrIG1peGluXHJcbiAqIEBsaWNlbnNlIE1JVFxyXG4gKiBAYXV0aG9yIFJhZmFsIFBvc3BpZWNoIDxuZXVyb25ldC5pb0BnbWFpbC5jb20+XHJcbiAqIEBwYWNrYWdlIEdhbnR0RWxhc3RpY1xyXG4gKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBjb21wdXRlZDoge1xyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdmlldyBib3hcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxyXG4gICAgICovXHJcbiAgICBnZXRWaWV3Qm94KCkge1xyXG4gICAgICBjb25zdCB0YXNrID0gdGhpcy50YXNrO1xyXG4gICAgICByZXR1cm4gYDAgMCAke3Rhc2sud2lkdGh9ICR7dGFzay5oZWlnaHR9YDtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgZ3JvdXAgdHJhbnNmb3JtXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge3N0cmluZ31cclxuICAgICAqL1xyXG4gICAgZ2V0R3JvdXBUcmFuc2Zvcm0oKSB7XHJcbiAgICAgIHJldHVybiBgdHJhbnNsYXRlKCR7dGhpcy50YXNrLnh9ICR7dGhpcy50YXNrLnl9KWA7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2hvdWxkIHdlIGRpc3BsYXkgZXhwYW5kZXI/XHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAgICAgKi9cclxuICAgIGRpc3BsYXlFeHBhbmRlcigpIHtcclxuICAgICAgY29uc3QgZXhwYW5kZXIgPSB0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy5jaGFydC5leHBhbmRlcjtcclxuICAgICAgcmV0dXJuIGV4cGFuZGVyLmRpc3BsYXkgfHwgKGV4cGFuZGVyLmRpc3BsYXlJZlRhc2tMaXN0SGlkZGVuICYmICF0aGlzLnJvb3Quc3RhdGUub3B0aW9ucy50YXNrTGlzdC5kaXNwbGF5KTtcclxuICAgIH1cclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIC8qKlxyXG4gICAgICogRW1pdCBldmVudFxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudE5hbWVcclxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XHJcbiAgICAgKi9cclxuICAgIGVtaXRFdmVudChldmVudE5hbWUsIGV2ZW50KSB7XHJcbiAgICAgIGlmICghdGhpcy5yb290LnN0YXRlLm9wdGlvbnMuc2Nyb2xsLnNjcm9sbGluZykge1xyXG4gICAgICAgIHRoaXMucm9vdC4kZW1pdChgY2hhcnQtJHt0aGlzLnRhc2sudHlwZX0tJHtldmVudE5hbWV9YCwgeyBldmVudCwgZGF0YTogdGhpcy50YXNrIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1Rhc2sudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWU5YzIzZWNhXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vVGFzay52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vVGFzay52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcMTc2NzFcXFxcRGVza3RvcFxcXFxwcm9qZWN0XFxcXGdpdGh1YlxcXFxnYW50dC1lbGFzdGljLWN1c3R1bS1jaGFydFxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdlOWMyM2VjYScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdlOWMyM2VjYScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdlOWMyM2VjYScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vVGFzay52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZTljMjNlY2FcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdlOWMyM2VjYScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL2NvbXBvbmVudHMvQ2hhcnQvUm93L1Rhc2sudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Rhc2sudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9UYXNrLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3JlZi0tNSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Rhc2sudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWU5YzIzZWNhXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1RleHQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ1OWMyZmU0XCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vVGV4dC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vVGV4dC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcMTc2NzFcXFxcRGVza3RvcFxcXFxwcm9qZWN0XFxcXGdpdGh1YlxcXFxnYW50dC1lbGFzdGljLWN1c3R1bS1jaGFydFxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc0NTljMmZlNCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc0NTljMmZlNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc0NTljMmZlNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vVGV4dC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDU5YzJmZTRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc0NTljMmZlNCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL2NvbXBvbmVudHMvQ2hhcnQvVGV4dC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVGV4dC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1RleHQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/cmVmLS01IS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVGV4dC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDU5YzJmZTRcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vRXhwYW5kZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTA5YTIxMTc3XCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vRXhwYW5kZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL0V4cGFuZGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFwxNzY3MVxcXFxEZXNrdG9wXFxcXHByb2plY3RcXFxcZ2l0aHViXFxcXGdhbnR0LWVsYXN0aWMtY3VzdHVtLWNoYXJ0XFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzA5YTIxMTc3JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzA5YTIxMTc3JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzA5YTIxMTc3JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9FeHBhbmRlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDlhMjExNzdcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcwOWEyMTE3NycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL2NvbXBvbmVudHMvRXhwYW5kZXIudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0V4cGFuZGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRXhwYW5kZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/cmVmLS01IS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRXhwYW5kZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTA5YTIxMTc3XCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL01haW5WaWV3LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wYmM0MjEyZVwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL01haW5WaWV3LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9NYWluVmlldy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcMTc2NzFcXFxcRGVza3RvcFxcXFxwcm9qZWN0XFxcXGdpdGh1YlxcXFxnYW50dC1lbGFzdGljLWN1c3R1bS1jaGFydFxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcwYmM0MjEyZScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcwYmM0MjEyZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcwYmM0MjEyZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vTWFpblZpZXcudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTBiYzQyMTJlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMGJjNDIxMmUnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy9jb21wb25lbnRzL01haW5WaWV3LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NYWluVmlldy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL01haW5WaWV3LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3JlZi0tNSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL01haW5WaWV3LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wYmM0MjEyZVwiIiwidmFyIHJlbmRlciwgc3RhdGljUmVuZGVyRm5zXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcMTc2NzFcXFxcRGVza3RvcFxcXFxwcm9qZWN0XFxcXGdpdGh1YlxcXFxnYW50dC1lbGFzdGljLWN1c3R1bS1jaGFydFxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc3NmY4ODZjOScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc3NmY4ODZjOScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc3NmY4ODZjOScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvY29tcG9uZW50cy9SZW5kZXIvaW5kZXgudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0l0ZW1Db2x1bW4udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWNiNWE2Yzk2XCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vSXRlbUNvbHVtbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vSXRlbUNvbHVtbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcMTc2NzFcXFxcRGVza3RvcFxcXFxwcm9qZWN0XFxcXGdpdGh1YlxcXFxnYW50dC1lbGFzdGljLWN1c3R1bS1jaGFydFxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdjYjVhNmM5NicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdjYjVhNmM5NicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdjYjVhNmM5NicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vSXRlbUNvbHVtbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Y2I1YTZjOTZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdjYjVhNmM5NicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL2NvbXBvbmVudHMvVGFza0xpc3QvSXRlbUNvbHVtbi52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSXRlbUNvbHVtbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0l0ZW1Db2x1bW4udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/cmVmLS01IS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSXRlbUNvbHVtbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Y2I1YTZjOTZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vVGFza0xpc3QudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTZlMTFmMTJmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vVGFza0xpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL1Rhc2tMaXN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFwxNzY3MVxcXFxEZXNrdG9wXFxcXHByb2plY3RcXFxcZ2l0aHViXFxcXGdhbnR0LWVsYXN0aWMtY3VzdHVtLWNoYXJ0XFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzZlMTFmMTJmJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzZlMTFmMTJmJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzZlMTFmMTJmJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9UYXNrTGlzdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NmUxMWYxMmZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc2ZTExZjEyZicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL2NvbXBvbmVudHMvVGFza0xpc3QvVGFza0xpc3QudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Rhc2tMaXN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVGFza0xpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/cmVmLS01IS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVGFza0xpc3QudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTZlMTFmMTJmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1Rhc2tMaXN0SGVhZGVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1hZWZkZDdjOFwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1Rhc2tMaXN0SGVhZGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9UYXNrTGlzdEhlYWRlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcMTc2NzFcXFxcRGVza3RvcFxcXFxwcm9qZWN0XFxcXGdpdGh1YlxcXFxnYW50dC1lbGFzdGljLWN1c3R1bS1jaGFydFxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdhZWZkZDdjOCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdhZWZkZDdjOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdhZWZkZDdjOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vVGFza0xpc3RIZWFkZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWFlZmRkN2M4XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignYWVmZGQ3YzgnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy9jb21wb25lbnRzL1Rhc2tMaXN0L1Rhc2tMaXN0SGVhZGVyLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9UYXNrTGlzdEhlYWRlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Rhc2tMaXN0SGVhZGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3JlZi0tNSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Rhc2tMaXN0SGVhZGVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1hZWZkZDdjOFwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9UYXNrTGlzdEl0ZW0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTk3MTYyOTNjXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vVGFza0xpc3RJdGVtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9UYXNrTGlzdEl0ZW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXDE3NjcxXFxcXERlc2t0b3BcXFxccHJvamVjdFxcXFxnaXRodWJcXFxcZ2FudHQtZWxhc3RpYy1jdXN0dW0tY2hhcnRcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnOTcxNjI5M2MnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnOTcxNjI5M2MnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnOTcxNjI5M2MnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1Rhc2tMaXN0SXRlbS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OTcxNjI5M2NcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc5NzE2MjkzYycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL2NvbXBvbmVudHMvVGFza0xpc3QvVGFza0xpc3RJdGVtLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9UYXNrTGlzdEl0ZW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9UYXNrTGlzdEl0ZW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/cmVmLS01IS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVGFza0xpc3RJdGVtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD05NzE2MjkzY1wiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9JdGVtQ29sdW1uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xODU2NGYxMlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0l0ZW1Db2x1bW4udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL0l0ZW1Db2x1bW4udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXDE3NjcxXFxcXERlc2t0b3BcXFxccHJvamVjdFxcXFxnaXRodWJcXFxcZ2FudHQtZWxhc3RpYy1jdXN0dW0tY2hhcnRcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMTg1NjRmMTInKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMTg1NjRmMTInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMTg1NjRmMTInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0l0ZW1Db2x1bW4udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE4NTY0ZjEyXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMTg1NjRmMTInLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy9jb21wb25lbnRzL1Rhc2tMaXN0Rml4ZWQvSXRlbUNvbHVtbi52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSXRlbUNvbHVtbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0l0ZW1Db2x1bW4udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/cmVmLS01IS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSXRlbUNvbHVtbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTg1NjRmMTJcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vVGFza0xpc3QudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWRhMjY2ZjFlXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vVGFza0xpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL1Rhc2tMaXN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFwxNzY3MVxcXFxEZXNrdG9wXFxcXHByb2plY3RcXFxcZ2l0aHViXFxcXGdhbnR0LWVsYXN0aWMtY3VzdHVtLWNoYXJ0XFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2RhMjY2ZjFlJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2RhMjY2ZjFlJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2RhMjY2ZjFlJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9UYXNrTGlzdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZGEyNjZmMWVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdkYTI2NmYxZScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL2NvbXBvbmVudHMvVGFza0xpc3RGaXhlZC9UYXNrTGlzdC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVGFza0xpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9UYXNrTGlzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz9yZWYtLTUhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9UYXNrTGlzdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZGEyNjZmMWVcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vVGFza0xpc3RIZWFkZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQwZjlmMWRlXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vVGFza0xpc3RIZWFkZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL1Rhc2tMaXN0SGVhZGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFwxNzY3MVxcXFxEZXNrdG9wXFxcXHByb2plY3RcXFxcZ2l0aHViXFxcXGdhbnR0LWVsYXN0aWMtY3VzdHVtLWNoYXJ0XFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzQwZjlmMWRlJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzQwZjlmMWRlJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzQwZjlmMWRlJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9UYXNrTGlzdEhlYWRlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDBmOWYxZGVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc0MGY5ZjFkZScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL2NvbXBvbmVudHMvVGFza0xpc3RGaXhlZC9UYXNrTGlzdEhlYWRlci52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVGFza0xpc3RIZWFkZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9UYXNrTGlzdEhlYWRlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz9yZWYtLTUhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9UYXNrTGlzdEhlYWRlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDBmOWYxZGVcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vVGFza0xpc3RJdGVtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD05NGEzNWNiOFwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1Rhc2tMaXN0SXRlbS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vVGFza0xpc3RJdGVtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFwxNzY3MVxcXFxEZXNrdG9wXFxcXHByb2plY3RcXFxcZ2l0aHViXFxcXGdhbnR0LWVsYXN0aWMtY3VzdHVtLWNoYXJ0XFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzk0YTM1Y2I4JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzk0YTM1Y2I4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzk0YTM1Y2I4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9UYXNrTGlzdEl0ZW0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTk0YTM1Y2I4XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignOTRhMzVjYjgnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy9jb21wb25lbnRzL1Rhc2tMaXN0Rml4ZWQvVGFza0xpc3RJdGVtLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9UYXNrTGlzdEl0ZW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9UYXNrTGlzdEl0ZW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/cmVmLS01IS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVGFza0xpc3RJdGVtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD05NGEzNWNiOFwiIiwiLyoqXHJcbiAqIEBmaWxlb3ZlcnZpZXcgU3R5bGVzIGZvciBnYW50dC1lbGFzdGljXHJcbiAqIEBsaWNlbnNlIE1JVFxyXG4gKiBAYXV0aG9yIFJhZmFsIFBvc3BpZWNoIDxuZXVyb25ldC5pb0BnbWFpbC5jb20+XHJcbiAqIEBwYWNrYWdlIEdhbnR0RWxhc3RpY1xyXG4gKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFN0eWxlKGZvbnRTaXplID0gJzEycHgnLCBmb250RmFtaWx5ID0gJ0FyaWFsLCBzYW5zLXNlcmlmJykge1xyXG4gIHJldHVybiB7XHJcbiAgICBmb250U2l6ZSxcclxuICAgIGZvbnRGYW1pbHksXHJcbiAgICAnbWFpbi12aWV3Jzoge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAnI0ZGRkZGRidcclxuICAgIH0sXHJcbiAgICAnbWFpbi1jb250YWluZXItd3JhcHBlcic6IHtcclxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxyXG4gICAgICAnYm9yZGVyLXRvcCc6ICcxcHggc29saWQgI2VlZScsXHJcbiAgICAgICdib3JkZXItYm90dG9tJzogJzFweCBzb2xpZCAjZWVlJ1xyXG4gICAgfSxcclxuICAgICdtYWluLWNvbnRhaW5lcic6IHtcclxuICAgICAgZmxvYXQ6ICdsZWZ0JyxcclxuICAgICAgJ21heC13aWR0aCc6ICcxMDAlJ1xyXG4gICAgfSxcclxuICAgICdtYWluLXZpZXctY29udGFpbmVyJzoge30sXHJcbiAgICBjb250YWluZXI6IHtcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAnbWF4LXdpZHRoJzogJzEwMCUnLFxyXG4gICAgICBoZWlnaHQ6ICcxMDAlJ1xyXG4gICAgfSxcclxuICAgICdjYWxlbmRhci13cmFwcGVyJzoge1xyXG4gICAgICAndXNlci1zZWxlY3QnOiAnbm9uZSdcclxuICAgIH0sXHJcbiAgICBjYWxlbmRhcjoge1xyXG4gICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICBiYWNrZ3JvdW5kOiAnI2YzZjVmNycsXHJcbiAgICAgIGRpc3BsYXk6ICdibG9jaydcclxuICAgIH0sXHJcbiAgICAnY2FsZW5kYXItcm93Jzoge1xyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICdqdXN0aWZ5LWNvbnRlbnQnOiAnc3BhY2UtZXZlbmx5J1xyXG4gICAgfSxcclxuICAgICdjYWxlbmRhci1yb3ctLW1vbnRoJzoge30sXHJcbiAgICAnY2FsZW5kYXItcm93LS1kYXknOiB7fSxcclxuICAgICdjYWxlbmRhci1yb3ctLWhvdXInOiB7XHJcbiAgICAgICdib3JkZXItYm90dG9tJzogJzFweCBzb2xpZCAjZWVlJ1xyXG4gICAgfSxcclxuICAgICdjYWxlbmRhci1yb3ctcmVjdCc6IHtcclxuICAgICAgYmFja2dyb3VuZDogJ3RyYW5zcGFyZW50JyxcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnXHJcbiAgICB9LFxyXG4gICAgJ2NhbGVuZGFyLXJvdy1yZWN0LS1tb250aCc6IHt9LFxyXG4gICAgJ2NhbGVuZGFyLXJvdy1yZWN0LS1kYXknOiB7fSxcclxuICAgICdjYWxlbmRhci1yb3ctcmVjdC0taG91cic6IHt9LFxyXG4gICAgJ2NhbGVuZGFyLXJvdy1yZWN0LWNoaWxkJzoge1xyXG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgICAnYm9yZGVyLXJpZ2h0LXdpZHRoJzogJzFweCcsIC8vIENhbGVuZGFyXHJcbiAgICAgICdib3JkZXItcmlnaHQtY29sb3InOiAnI2RhZGFkYScsXHJcbiAgICAgICdib3JkZXItcmlnaHQtc3R5bGUnOiAnc29saWQnLFxyXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJ1xyXG4gICAgfSxcclxuICAgICdjYWxlbmRhci1yb3ctcmVjdC1jaGlsZC0tbW9udGgnOiB7fSxcclxuICAgICdjYWxlbmRhci1yb3ctcmVjdC1jaGlsZC0tZGF5JzogeyAndGV4dC1hbGlnbic6ICdjZW50ZXInIH0sXHJcbiAgICAnY2FsZW5kYXItcm93LXJlY3QtY2hpbGQtLWhvdXInOiB7ICd0ZXh0LWFsaWduJzogJ2NlbnRlcicgfSxcclxuICAgICdjYWxlbmRhci1yb3ctdGV4dCc6IHtcclxuICAgICAgJ2ZvbnQtZmFtaWx5JzogZm9udEZhbWlseSwgLy8gR2FudHRFbGFzdGljXHJcbiAgICAgICdmb250LXNpemUnOiBmb250U2l6ZSwgLy9HYW50dEVsYXN0aWNcclxuICAgICAgY29sb3I6ICcjNjA2MDYwJyxcclxuICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXHJcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnXHJcbiAgICB9LFxyXG4gICAgJ2NhbGVuZGFyLXJvdy10ZXh0LS1tb250aCc6IHt9LFxyXG4gICAgJ2NhbGVuZGFyLXJvdy10ZXh0LS1kYXknOiB7fSxcclxuICAgICdjYWxlbmRhci1yb3ctdGV4dC0taG91cic6IHt9LFxyXG4gICAgJ3Rhc2stbGlzdC13cmFwcGVyJzoge30sXHJcbiAgICAndGFzay1saXN0JzogeyBiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnLCAnYm9yZGVyLWNvbG9yJzogJyNlZWUnIH0sXHJcbiAgICAndGFzay1saXN0LWhlYWRlcic6IHtcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAndXNlci1zZWxlY3QnOiAnbm9uZScsXHJcbiAgICAgICd2ZXJ0aWNhbC1hbGlnbic6ICdtaWRkbGUnLFxyXG4gICAgICAnYm9yZGVyLWJvdHRvbSc6ICcxcHggc29saWQgI2VlZScsXHJcbiAgICAgICdib3JkZXItbGVmdCc6ICcxcHggc29saWQgI2VlZSdcclxuICAgIH0sXHJcbiAgICAndGFzay1saXN0LWhlYWRlci1jb2x1bW4nOiB7XHJcbiAgICAgICdib3JkZXItbGVmdCc6ICcxcHggc29saWQgIzAwMDAwMDUwJyxcclxuICAgICAgJ2JveC1zaXppbmcnOiAnYm9yZGVyLWJveCcsXHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgYmFja2dyb3VuZDogJyNmM2Y1ZjcnLFxyXG4gICAgICAnYm9yZGVyLWNvbG9yJzogJ3RyYW5zcGFyZW50J1xyXG4gICAgfSxcclxuICAgICd0YXNrLWxpc3QtZXhwYW5kZXItd3JhcHBlcic6IHtcclxuICAgICAgZGlzcGxheTogJ2lubGluZS1mbGV4JyxcclxuICAgICAgJ2ZsZXgtc2hyaW5rJzogJzAnLFxyXG4gICAgICAnYm94LXNpemluZyc6ICdib3JkZXItYm94JyxcclxuICAgICAgbWFyZ2luOiAnMCAwIDAgMTBweCdcclxuICAgIH0sXHJcbiAgICAndGFzay1saXN0LWV4cGFuZGVyLWNvbnRlbnQnOiB7XHJcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtZmxleCcsXHJcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgICBtYXJnaW46ICdhdXRvIDBweCcsXHJcbiAgICAgICdib3gtc2l6aW5nJzogJ2JvcmRlci1ib3gnLFxyXG4gICAgICAndXNlci1zZWxlY3QnOiAnbm9uZSdcclxuICAgIH0sXHJcbiAgICAndGFzay1saXN0LWV4cGFuZGVyLWxpbmUnOiB7XHJcbiAgICAgIGZpbGw6ICd0cmFuc3BhcmVudCcsXHJcbiAgICAgIHN0cm9rZTogJyMwMDAwMDAnLFxyXG4gICAgICAnc3Ryb2tlLXdpZHRoJzogJzEnLFxyXG4gICAgICAnc3Ryb2tlLWxpbmVjYXAnOiAncm91bmQnXHJcbiAgICB9LFxyXG4gICAgJ3Rhc2stbGlzdC1leHBhbmRlci1ib3JkZXInOiB7XHJcbiAgICAgIGZpbGw6ICcjZmZmZmZmYTAnLFxyXG4gICAgICBzdHJva2U6ICcjMDAwMDAwQTAnXHJcbiAgICB9LFxyXG4gICAgJ2NoYXJ0LWV4cGFuZGVyLXdyYXBwZXInOiB7XHJcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgICAgICdsaW5lLWhlaWdodCc6ICcxJyxcclxuICAgICAgJ2JveC1zaXppbmcnOiAnYm9yZGVyLWJveCcsXHJcbiAgICAgIG1hcmdpbjogJzAnXHJcbiAgICB9LFxyXG4gICAgJ2NoYXJ0LWV4cGFuZGVyLWNvbnRlbnQnOiB7XHJcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtZmxleCcsXHJcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgICBtYXJnaW46ICdhdXRvIDBweCcsXHJcbiAgICAgICdib3gtc2l6aW5nJzogJ2JvcmRlci1ib3gnLFxyXG4gICAgICAndXNlci1zZWxlY3QnOiAnbm9uZSdcclxuICAgIH0sXHJcbiAgICAnY2hhcnQtZXhwYW5kZXItbGluZSc6IHtcclxuICAgICAgZmlsbDogJ3RyYW5zcGFyZW50JyxcclxuICAgICAgc3Ryb2tlOiAnIzAwMDAwMCcsXHJcbiAgICAgICdzdHJva2Utd2lkdGgnOiAnMScsXHJcbiAgICAgICdzdHJva2UtbGluZWNhcCc6ICdyb3VuZCdcclxuICAgIH0sXHJcbiAgICAnY2hhcnQtZXhwYW5kZXItYm9yZGVyJzoge1xyXG4gICAgICBmaWxsOiAnI2ZmZmZmZmEwJyxcclxuICAgICAgc3Ryb2tlOiAnIzAwMDAwMEEwJ1xyXG4gICAgfSxcclxuICAgICd0YXNrLWxpc3QtY29udGFpbmVyJzoge30sXHJcbiAgICAndGFzay1saXN0LWhlYWRlci1sYWJlbCc6IHtcclxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxyXG4gICAgICAndGV4dC1vdmVyZmxvdyc6ICdlbGxpcHNpcycsXHJcbiAgICAgICdmb250LWZhbWlseSc6IGZvbnRGYW1pbHksXHJcbiAgICAgICdmb250LXNpemUnOiBmb250U2l6ZSxcclxuICAgICAgJ2JveC1zaXppbmcnOiAnYm9yZGVyLWJveCcsXHJcbiAgICAgIG1hcmdpbjogJ2F1dG8gNnB4JyxcclxuICAgICAgJ2ZsZXgtZ3Jvdyc6ICcxJyxcclxuICAgICAgJ3ZlcnRpY2FsLWFsaWduJzogJ21pZGRsZSdcclxuICAgIH0sXHJcbiAgICAndGFzay1saXN0LWhlYWRlci1yZXNpemVyLXdyYXBwZXInOiB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICd0cmFuc3BhcmVudCcsXHJcbiAgICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgICB3aWR0aDogJzZweCcsXHJcbiAgICAgIGN1cnNvcjogJ2NvbC1yZXNpemUnLFxyXG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWZsZXgnLFxyXG4gICAgICAndmVydGljYWwtYWxpZ24nOiAnY2VudGVyJ1xyXG4gICAgfSxcclxuICAgICd0YXNrLWxpc3QtaGVhZGVyLXJlc2l6ZXInOiB7IG1hcmdpbjogJ2F1dG8gMHB4JyB9LFxyXG4gICAgJ3Rhc2stbGlzdC1oZWFkZXItcmVzaXplci1kb3QnOiB7XHJcbiAgICAgIHdpZHRoOiAnM3B4JyxcclxuICAgICAgaGVpZ2h0OiAnM3B4JyxcclxuICAgICAgYmFja2dyb3VuZDogJyNkZGQnLFxyXG4gICAgICAnYm9yZGVyLXJhZGl1cyc6ICcxMDAlJyxcclxuICAgICAgbWFyZ2luOiAnNHB4IDBweCdcclxuICAgIH0sXHJcbiAgICAndGFzay1saXN0LWl0ZW1zJzoge1xyXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbidcclxuICAgIH0sXHJcbiAgICAndGFzay1saXN0LWl0ZW0nOiB7XHJcbiAgICAgICdib3JkZXItdG9wJzogJzFweCBzb2xpZCAjZWVlJyxcclxuICAgICAgJ2JvcmRlci1yaWdodCc6ICcxcHggc29saWQgI2VlZScsXHJcbiAgICAgICdib3gtc2l6aW5nJzogJ2JvcmRlci1ib3gnLFxyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIGJhY2tncm91bmQ6ICd0cmFuc3BhcmVudCdcclxuICAgIH0sXHJcbiAgICAndGFzay1saXN0LWl0ZW0tY29sdW1uJzoge1xyXG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWZsZXgnLFxyXG4gICAgICAnZmxleC1zaHJpbmsnOiAnMCcsXHJcbiAgICAgICdib3JkZXItbGVmdCc6ICcxcHggc29saWQgIzAwMDAwMDUwJyxcclxuICAgICAgJ2JveC1zaXppbmcnOiAnYm9yZGVyLWJveCcsXHJcbiAgICAgICdib3JkZXItY29sb3InOiAnI2VlZSdcclxuICAgIH0sXHJcbiAgICAndGFzay1saXN0LWl0ZW0tdmFsdWUtd3JhcHBlcic6IHtcclxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIHdpZHRoOiAnMTAwJSdcclxuICAgIH0sXHJcbiAgICAndGFzay1saXN0LWl0ZW0tdmFsdWUtY29udGFpbmVyJzoge1xyXG4gICAgICBtYXJnaW46ICdhdXRvIDBweCcsXHJcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJ1xyXG4gICAgfSxcclxuICAgICd0YXNrLWxpc3QtaXRlbS12YWx1ZSc6IHtcclxuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcclxuICAgICAgJ2ZsZXgtc2hyaW5rJzogJzEwMCcsXHJcbiAgICAgICdmb250LWZhbWlseSc6IGZvbnRGYW1pbHksXHJcbiAgICAgICdmb250LXNpemUnOiBmb250U2l6ZSxcclxuICAgICAgJ21hcmdpbi10b3AnOiAnYXV0bycsXHJcbiAgICAgICdtYXJnaW4tYm90dG9tJzogJ2F1dG8nLFxyXG4gICAgICAnbWFyZ2luLWxlZnQnOiAnNnB4JywgLy8gVGFza0xpc3RcclxuICAgICAgJ21hcmdpbi1yaWdodCc6ICc2cHgnLFxyXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXHJcbiAgICAgICd0ZXh0LW92ZXJmbG93JzogJ2VsbGlwc2lzJyxcclxuICAgICAgJ2xpbmUtaGVpZ2h0JzogJzEuNWVtJyxcclxuICAgICAgJ3dvcmQtYnJlYWsnOiAna2VlcC1hbGwnLFxyXG4gICAgICAnd2hpdGUtc3BhY2UnOiAnbm93cmFwJyxcclxuICAgICAgY29sb3I6ICcjNjA2MDYwJyxcclxuICAgICAgYmFja2dyb3VuZDogJyNGRkZGRkYnXHJcbiAgICB9LFxyXG4gICAgJ2dyaWQtbGluZXMnOiB7fSxcclxuICAgICdncmlkLWxpbmUtaG9yaXpvbnRhbCc6IHtcclxuICAgICAgc3Ryb2tlOiAnIzAwMDAwMDEwJyxcclxuICAgICAgJ3N0cm9rZS13aWR0aCc6IDFcclxuICAgIH0sXHJcbiAgICAnZ3JpZC1saW5lLXZlcnRpY2FsJzoge1xyXG4gICAgICBzdHJva2U6ICcjMDAwMDAwMTAnLFxyXG4gICAgICAnc3Ryb2tlLXdpZHRoJzogMVxyXG4gICAgfSxcclxuICAgICdncmlkLWxpbmUtdGltZSc6IHtcclxuICAgICAgc3Ryb2tlOiAnI0ZGMDAwMDgwJyxcclxuICAgICAgJ3N0cm9rZS13aWR0aCc6IDFcclxuICAgIH0sXHJcbiAgICBjaGFydDoge1xyXG4gICAgICAndXNlci1zZWxlY3QnOiAnbm9uZScsXHJcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJ1xyXG4gICAgfSxcclxuICAgICdjaGFydC1jYWxlbmRhci1jb250YWluZXInOiB7XHJcbiAgICAgICd1c2VyLXNlbGVjdCc6ICdub25lJyxcclxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxyXG4gICAgICAnbWF4LXdpZHRoJzogJzEwMCUnLFxyXG4gICAgICAnYm9yZGVyLXJpZ2h0JzogJzFweCBzb2xpZCAjZWVlJ1xyXG4gICAgfSxcclxuICAgICdjaGFydC1ncmFwaC1jb250YWluZXInOiB7XHJcbiAgICAgICd1c2VyLXNlbGVjdCc6ICdub25lJyxcclxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxyXG4gICAgICAnbWF4LXdpZHRoJzogJzEwMCUnLFxyXG4gICAgICAnYm9yZGVyLXJpZ2h0JzogJzFweCBzb2xpZCAjZWVlJ1xyXG4gICAgfSxcclxuICAgICdjaGFydC1hcmVhJzoge30sXHJcbiAgICAnY2hhcnQtZ3JhcGgnOiB7XHJcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJ1xyXG4gICAgfSxcclxuICAgICdjaGFydC1yb3ctdGV4dC13cmFwcGVyJzoge30sXHJcbiAgICAnY2hhcnQtcm93LXRleHQnOiB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICcjZmZmZmZmYTAnLFxyXG4gICAgICAnYm9yZGVyLXJhZGl1cyc6ICcxMHB4JyxcclxuICAgICAgJ2ZvbnQtZmFtaWx5JzogZm9udEZhbWlseSxcclxuICAgICAgJ2ZvbnQtc2l6ZSc6IGZvbnRTaXplLFxyXG4gICAgICAnZm9udC13ZWlnaHQnOiAnbm9ybWFsJyxcclxuICAgICAgY29sb3I6ICcjMDAwMDAwYTAnLFxyXG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaydcclxuICAgIH0sXHJcbiAgICAnY2hhcnQtcm93LXRleHQtY29udGVudCc6IHtcclxuICAgICAgcGFkZGluZzogJzBweCA2cHgnXHJcbiAgICB9LFxyXG4gICAgJ2NoYXJ0LXJvdy10ZXh0LWNvbnRlbnQtLXRleHQnOiB7fSxcclxuICAgICdjaGFydC1yb3ctdGV4dC1jb250ZW50LS1odG1sJzoge30sXHJcbiAgICAnY2hhcnQtcm93LXdyYXBwZXInOiB7fSxcclxuICAgICdjaGFydC1yb3ctYmFyLXdyYXBwZXInOiB7fSxcclxuICAgICdjaGFydC1yb3ctYmFyJzoge30sXHJcbiAgICAnY2hhcnQtcm93LWJhci1wb2x5Z29uJzoge1xyXG4gICAgICBzdHJva2U6ICcjRTc0QzNDJyxcclxuICAgICAgJ3N0cm9rZS13aWR0aCc6IDEsXHJcbiAgICAgIGZpbGw6ICcjRjc1QzRDJ1xyXG4gICAgfSxcclxuICAgICdjaGFydC1yb3ctcHJvamVjdC13cmFwcGVyJzoge30sXHJcbiAgICAnY2hhcnQtcm93LXByb2plY3QnOiB7fSxcclxuICAgICdjaGFydC1yb3ctcHJvamVjdC1wb2x5Z29uJzoge30sXHJcbiAgICAnY2hhcnQtcm93LW1pbGVzdG9uZS13cmFwcGVyJzoge30sXHJcbiAgICAnY2hhcnQtcm93LW1pbGVzdG9uZSc6IHt9LFxyXG4gICAgJ2NoYXJ0LXJvdy1taWxlc3RvbmUtcG9seWdvbic6IHt9LFxyXG4gICAgJ2NoYXJ0LXJvdy10YXNrLXdyYXBwZXInOiB7fSxcclxuICAgICdjaGFydC1yb3ctdGFzayc6IHt9LFxyXG4gICAgJ2NoYXJ0LXJvdy10YXNrLXBvbHlnb24nOiB7fSxcclxuICAgICdjaGFydC1yb3ctcHJvZ3Jlc3MtYmFyLXdyYXBwZXInOiB7fSxcclxuICAgICdjaGFydC1yb3ctcHJvZ3Jlc3MtYmFyJzoge30sXHJcbiAgICAnY2hhcnQtcm93LXByb2dyZXNzLWJhci1saW5lJzoge1xyXG4gICAgICBzdHJva2U6ICcjZmZmZmZmMjUnLFxyXG4gICAgICAnc3Ryb2tlLXdpZHRoJzogMjBcclxuICAgIH0sXHJcbiAgICAnY2hhcnQtcm93LXByb2dyZXNzLWJhci1zb2xpZCc6IHtcclxuICAgICAgZmlsbDogJyMwRUFDNTEnLFxyXG4gICAgICBoZWlnaHQ6ICcyMCUnXHJcbiAgICB9LFxyXG4gICAgJ2NoYXJ0LXJvdy1wcm9ncmVzcy1iYXItcGF0dGVybic6IHtcclxuICAgICAgZmlsbDogJ3VybCgjZGlhZ29uYWxIYXRjaCknLFxyXG4gICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDAuMSkgc2NhbGVZKDAuOCknXHJcbiAgICB9LFxyXG4gICAgJ2NoYXJ0LXJvdy1wcm9ncmVzcy1iYXItb3V0bGluZSc6IHtcclxuICAgICAgc3Ryb2tlOiAnI0U3NEMzQycsXHJcbiAgICAgICdzdHJva2Utd2lkdGgnOiAxXHJcbiAgICB9LFxyXG4gICAgJ2NoYXJ0LWRlcGVuZGVuY3ktbGluZXMtd3JhcHBlcic6IHt9LFxyXG4gICAgJ2NoYXJ0LWRlcGVuZGVuY3ktbGluZXMtcGF0aCc6IHtcclxuICAgICAgZmlsbDogJ3RyYW5zcGFyZW50JyxcclxuICAgICAgc3Ryb2tlOiAnI0ZGYTAwMDkwJyxcclxuICAgICAgJ3N0cm9rZS13aWR0aCc6IDJcclxuICAgIH0sXHJcbiAgICAnY2hhcnQtc2Nyb2xsLWNvbnRhaW5lcic6IHt9LFxyXG4gICAgJ2NoYXJ0LXNjcm9sbC1jb250YWluZXItLWhvcml6b250YWwnOiB7XHJcbiAgICAgIG92ZXJmbG93OiAnYXV0bycsXHJcbiAgICAgICdtYXgtd2lkdGgnOiAnMTAwJSdcclxuICAgIH0sXHJcbiAgICAnY2hhcnQtc2Nyb2xsLWNvbnRhaW5lci0tdmVydGljYWwnOiB7XHJcbiAgICAgICdvdmVyZmxvdy15JzogJ2F1dG8nLFxyXG4gICAgICAnb3ZlcmZsb3cteCc6ICdoaWRkZW4nLFxyXG4gICAgICAnbWF4LWhlaWdodCc6ICcxMDAlJyxcclxuICAgICAgZmxvYXQ6ICdyaWdodCdcclxuICAgIH0sXHJcbiAgICAnY2hhcnQtZGF5cy1oaWdobGlnaHQtcmVjdCc6IHtcclxuICAgICAgZmlsbDogJyNmM2Y1Zjc4MCdcclxuICAgIH0sXHJcbiAgICAnc2xvdC1oZWFkZXItYmVmb3JlT3B0aW9ucyc6IHtcclxuICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaydcclxuICAgIH1cclxuICB9O1xyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV92dWVfXzsiXSwic291cmNlUm9vdCI6IiJ9