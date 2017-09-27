webpackJsonp(["scripts"],{

/***/ "../../../../raw-loader/index.js!../../../../source-map-loader/index.js!../../../../../src/assets/js/domchange.js":
/***/ (function(module, exports) {

module.exports = "(function (window) {\n    var last = +new Date();\n    var delay = 100; // default delay\n\n    // Manage event queue\n    var stack = [];\n\n    function callback() {\n        var now = +new Date();\n        if (now - last > delay) {\n            for (var i = 0; i < stack.length; i++) {\n                stack[i]();\n            }\n            last = now;\n        }\n    }\n\n    // Public interface\n    var onDomChange = function (fn, newdelay) {\n        if (newdelay) delay = newdelay;\n        stack.push(fn);\n    };\n\n    // Naive approach for compatibility\n    function naive() {\n\n        var last = document.getElementsByTagName('*');\n        var lastlen = last.length;\n        var timer = setTimeout(function check() {\n\n            // get current state of the document\n            var current = document.getElementsByTagName('*');\n            var len = current.length;\n\n            // if the length is different\n            // it's fairly obvious\n            if (len != lastlen) {\n                // just make sure the loop finishes early\n                last = [];\n            }\n\n            // go check every element in order\n            for (var i = 0; i < len; i++) {\n                if (current[i] !== last[i]) {\n                    callback();\n                    last = current;\n                    lastlen = len;\n                    break;\n                }\n            }\n\n            // over, and over, and over again\n            setTimeout(check, delay);\n\n        }, delay);\n    }\n\n    //\n    //  Check for mutation events support\n    //\n\n    var support = {};\n\n    var el = document.documentElement;\n    var remain = 3;\n\n    // callback for the tests\n    function decide() {\n        if (support.DOMNodeInserted) {\n            window.addEventListener(\"DOMContentLoaded\", function () {\n                if (support.DOMSubtreeModified) { // for FF 3+, Chrome\n                    el.addEventListener('DOMSubtreeModified', callback, false);\n                } else { // for FF 2, Safari, Opera 9.6+\n                    el.addEventListener('DOMNodeInserted', callback, false);\n                    el.addEventListener('DOMNodeRemoved', callback, false);\n                }\n            }, false);\n        } else if (document.onpropertychange) { // for IE 5.5+\n            document.onpropertychange = callback;\n        } else { // fallback\n            naive();\n        }\n    }\n\n    // checks a particular event\n    function test(event) {\n        el.addEventListener(event, function fn() {\n            support[event] = true;\n            el.removeEventListener(event, fn, false);\n            if (--remain === 0) decide();\n        }, false);\n    }\n\n    // attach test events\n    if (window.addEventListener) {\n        test('DOMSubtreeModified');\n        test('DOMNodeInserted');\n        test('DOMNodeRemoved');\n    } else {\n        decide();\n    }\n\n    // do the dummy test\n    var dummy = document.createElement(\"div\");\n    el.appendChild(dummy);\n    el.removeChild(dummy);\n\n    // expose\n    window.onDomChange = onDomChange;\n})(window);"

/***/ }),

/***/ "../../../../raw-loader/index.js!../../../../source-map-loader/index.js!../../../../../src/assets/js/keyboard.js":
/***/ (function(module, exports) {

module.exports = "function __triggerKeyboardEvent(el, keyCode) {\n  var eventObj = document.createEventObject ?\n    document.createEventObject() : document.createEvent(\"Events\");\n\n  if (eventObj.initEvent) {\n    eventObj.initEvent(\"keydown\", true, true);\n  }\n\n  eventObj.keyCode = keyCode;\n  eventObj.which = keyCode;\n\n  el.dispatchEvent ? el.dispatchEvent(eventObj) : el.fireEvent(\"onkeydown\", eventObj);\n\n};\n\n\nonDomChange(function () {\n  setTimeout(function () {\n    __triggerKeyboardEvent(document.body, parseInt(\"13\"));\n  }, 0);\n}, 0);\n\n\n\n"

/***/ }),

/***/ "../../../../script-loader/addScript.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
module.exports = function(src) {
	try {
		if (typeof eval !== "undefined") {
			eval.call(null, src);
		} else if (typeof execScript !== "undefined") {
			execScript(src);
		} else {
			console.error("[Script Loader] EvalError: No eval function available");
		}
	} catch (error) {
		console.error("[Script Loader] ", error.message);
	}
}


/***/ }),

/***/ "../../../../script-loader/index.js!../../../../../src/assets/js/domchange.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("../../../../script-loader/addScript.js")(__webpack_require__("../../../../raw-loader/index.js!../../../../source-map-loader/index.js!../../../../../src/assets/js/domchange.js"))

/***/ }),

/***/ "../../../../script-loader/index.js!../../../../../src/assets/js/keyboard.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("../../../../script-loader/addScript.js")(__webpack_require__("../../../../raw-loader/index.js!../../../../source-map-loader/index.js!../../../../../src/assets/js/keyboard.js"))

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("../../../../script-loader/index.js!../../../../../src/assets/js/domchange.js");
module.exports = __webpack_require__("../../../../script-loader/index.js!../../../../../src/assets/js/keyboard.js");


/***/ })

},[2]);
//# sourceMappingURL=scripts.bundle.js.map