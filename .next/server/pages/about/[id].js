module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/about/[id].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/about/[id].js":
/*!*****************************!*\
  !*** ./pages/about/[id].js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _jsxFileName = \"/home/rishabh/Desktop/Rishu/nextJS/nextjscourse/pages/about/[id].js\";\n\n\nconst DeveloperPage = () => {\n  const details = [{\n    id: 1,\n    name: 'Yash',\n    role: 'Senior Developer'\n  }, {\n    id: 2,\n    name: 'Vaibhav',\n    role: 'Backend Developer'\n  }, {\n    id: 3,\n    name: 'Suresh',\n    role: 'Frontend Developer'\n  }];\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n  const id = router.query.id;\n  const userDetails = details.find(person => {\n    return person.id.toString() === id;\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n      children: userDetails.name\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 9\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n      children: userDetails.role\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 9\n    }, undefined)]\n  }, void 0, true);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (DeveloperPage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hYm91dC8uanM/MDUyYSJdLCJuYW1lcyI6WyJEZXZlbG9wZXJQYWdlIiwiZGV0YWlscyIsImlkIiwibmFtZSIsInJvbGUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJxdWVyeSIsInVzZXJEZXRhaWxzIiwiZmluZCIsInBlcnNvbiIsInRvU3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUVBLE1BQU1BLGFBQWEsR0FBRyxNQUFNO0FBQ3hCLFFBQU1DLE9BQU8sR0FBRyxDQUVaO0FBQUVDLE1BQUUsRUFBRSxDQUFOO0FBQVNDLFFBQUksRUFBRSxNQUFmO0FBQXVCQyxRQUFJLEVBQUU7QUFBN0IsR0FGWSxFQUlaO0FBQUVGLE1BQUUsRUFBRSxDQUFOO0FBQVNDLFFBQUksRUFBRSxTQUFmO0FBQTBCQyxRQUFJLEVBQUU7QUFBaEMsR0FKWSxFQU1aO0FBQUVGLE1BQUUsRUFBRSxDQUFOO0FBQVNDLFFBQUksRUFBRSxRQUFmO0FBQXlCQyxRQUFJLEVBQUU7QUFBL0IsR0FOWSxDQUFoQjtBQVNBLFFBQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQSxRQUFNSixFQUFFLEdBQUdHLE1BQU0sQ0FBQ0UsS0FBUCxDQUFhTCxFQUF4QjtBQUNBLFFBQU1NLFdBQVcsR0FBR1AsT0FBTyxDQUFDUSxJQUFSLENBQWNDLE1BQUQsSUFBWTtBQUN6QyxXQUFPQSxNQUFNLENBQUNSLEVBQVAsQ0FBVVMsUUFBVixPQUF5QlQsRUFBaEM7QUFDSCxHQUZtQixDQUFwQjtBQUtBLHNCQUFPO0FBQUEsNEJBQ0g7QUFBQSxnQkFBS00sV0FBVyxDQUFDTDtBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURHLGVBRUg7QUFBQSxnQkFBS0ssV0FBVyxDQUFDSjtBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZHO0FBQUEsa0JBQVA7QUFJSCxDQXJCRDs7QUF1QmVKLDRFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvYWJvdXQvW2lkXS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcblxuY29uc3QgRGV2ZWxvcGVyUGFnZSA9ICgpID0+IHtcbiAgICBjb25zdCBkZXRhaWxzID0gW1xuXG4gICAgICAgIHsgaWQ6IDEsIG5hbWU6ICdZYXNoJywgcm9sZTogJ1NlbmlvciBEZXZlbG9wZXInIH0sXG5cbiAgICAgICAgeyBpZDogMiwgbmFtZTogJ1ZhaWJoYXYnLCByb2xlOiAnQmFja2VuZCBEZXZlbG9wZXInIH0sXG5cbiAgICAgICAgeyBpZDogMywgbmFtZTogJ1N1cmVzaCcsIHJvbGU6ICdGcm9udGVuZCBEZXZlbG9wZXInIH1cblxuICAgIF1cbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgICBjb25zdCBpZCA9IHJvdXRlci5xdWVyeS5pZDtcbiAgICBjb25zdCB1c2VyRGV0YWlscyA9IGRldGFpbHMuZmluZCgocGVyc29uKSA9PiB7XG4gICAgICAgIHJldHVybiBwZXJzb24uaWQudG9TdHJpbmcoKSA9PT0gaWRcbiAgICB9KTtcblxuXG4gICAgcmV0dXJuIDw+XG4gICAgICAgIDxoMz57dXNlckRldGFpbHMubmFtZX08L2gzPlxuICAgICAgICA8aDM+e3VzZXJEZXRhaWxzLnJvbGV9PC9oMz5cbiAgICA8Lz5cbn1cblxuZXhwb3J0IGRlZmF1bHQgRGV2ZWxvcGVyUGFnZTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/about/[id].js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });