/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\n\r\n\r\nconst num_pics = [];\r\n\r\nfor (let i = 1; i < 15+1; i++) {\r\n  num_pics.push(i)\r\n}\r\n\r\nconst pictures = document.querySelector(\".pictures\");\r\n\r\nconst filter = document.querySelector(\".filter\");\r\nfilter.addEventListener(\"click\", function () {\r\n  document.getElementById(\"myDropdown\").classList.toggle(\"hidden\");\r\n  window.onclick = function(event) {\r\n    if (!event.target.matches('.filter')) {\r\n      var dropdowns = document.getElementsByClassName(\"dropdown-content\");\r\n      var i;\r\n      for (i = 0; i < dropdowns.length; i++) {\r\n        var openDropdown = dropdowns[i];\r\n        if (!openDropdown.classList.contains('hidden')) {\r\n          openDropdown.classList.add('hidden');\r\n        }\r\n      }\r\n    }\r\n  }\r\n  \r\n});\r\nconst concert = document.querySelector(\"#concert\")\r\nconcert.addEventListener('click', function (){\r\n  show([1,8,10])\r\n})\r\nconst all = document.querySelector(\"#all\")\r\nall.addEventListener('click', function (){\r\n  show(num_pics)\r\n})\r\n\r\nfunction large(i,pics) {\r\n  pictures.innerHTML = \"\";\r\n  pictures.style.marginTop = \"0px\";\r\n  filter.classList.add('hidden')\r\n  var grid = pictures.style.gridTemplateColumns;\r\n  pictures.style.gridTemplateColumns = \"1fr\";\r\n  var p_img = document.createElement(\"img\");\r\n  p_img.src = \"../src/full/\" + i + \".jpg\";\r\n  p_img.classList.add(\"p\");\r\n  p_img.addEventListener(\"click\", function () {\r\n    pictures.style.gridTemplateColumns = grid;\r\n    show(pics);\r\n    document.getElementById(i).scrollIntoView();\r\n  });\r\n  pictures.append(p_img);\r\n  p_img.onload = function () {\r\n    p_img.scrollIntoView();\r\n  };\r\n}\r\n\r\nfunction show(pics) {\r\n  pictures.innerHTML = \"\";\r\n  filter.classList.remove('hidden')\r\n  document.querySelector(\".name\").style.marginBottom = \"250px\";\r\n  pics.forEach(pic => {\r\n    const div = document.createElement(\"div\");\r\n    div.classList.add(\"i\");\r\n    div.id = pic;\r\n    const img = document.createElement(\"img\");\r\n    img.src = \"../src/thumb/\" + pic + \".jpg\";\r\n\r\n    div.addEventListener(\"click\", function () {\r\n      large(pic,pics);\r\n    });\r\n    div.append(img);\r\n    pictures.append(div);\r\n\r\n  });\r\n}\r\nshow(num_pics);\r\n\n\n//# sourceURL=webpack://portfolio/./src/index.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: Unexpected character '@' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> @import url(\\\"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,300;0,600;1,600&display=swap\\\");\\n| html {\\n|   scroll-behavior: smooth;\");\n\n//# sourceURL=webpack://portfolio/./src/style.css?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;