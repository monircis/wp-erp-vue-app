/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/main.js","vendors~app"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/App.vue":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/App.vue ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_header_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/header.vue */ "./src/components/header.vue");
/* harmony import */ var _components_banner_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/banner.vue */ "./src/components/banner.vue");
/* harmony import */ var _components_trust_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/trust.vue */ "./src/components/trust.vue");
/* harmony import */ var _components_features_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/features.vue */ "./src/components/features.vue");
/* harmony import */ var _components_feature_info_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/feature-info.vue */ "./src/components/feature-info.vue");
/* harmony import */ var _components_clients_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/clients.vue */ "./src/components/clients.vue");
/* harmony import */ var _components_information_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/information.vue */ "./src/components/information.vue");
/* harmony import */ var _components_footer_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/footer.vue */ "./src/components/footer.vue");
//
//
//
//
//
//
//
//
//
//
//
//

//import your components here









/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'app',
  components: {
    'App-header': _components_header_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    'App-banner': _components_banner_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    'App-trust': _components_trust_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    'App-feature': _components_features_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    'App-feature-info': _components_feature_info_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    'App-clients': _components_clients_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    'App-information': _components_information_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    'App-footer': _components_footer_vue__WEBPACK_IMPORTED_MODULE_7__["default"]

  }
});

/***/ }),

/***/ "./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?{\"sourceMap\":true}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":false}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/header.vue":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/extract-text-webpack-plugin/dist/loader.js?{"omit":1,"remove":true}!./node_modules/vue-style-loader!./node_modules/css-loader?{"sourceMap":true}!./node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"scoped":false,"sourceMap":false}!./node_modules/sass-loader/lib/loader.js?{"sourceMap":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/header.vue ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-1db4e738\",\"hasScoped\":false,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/banner.vue":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-1db4e738","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/banner.vue ***!
  \****************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"banner-area"},[_c('div',{staticClass:"right-musk"},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-md-6   col-xs-12"},[_c('div',{staticClass:"banner-text"},[_c('div',{staticClass:"b-content"},[_c('h1',[_vm._v("Supercharge"),_c('br'),_vm._v("\n                Your Small Business")]),_vm._v(" "),_c('h3',[_vm._v("from your "),_c('span',[_vm._v("wordpress")]),_vm._v(" dashboard")]),_vm._v(" "),_c('p',[_vm._v("WP ERP optimises your local small to large enterprise"),_c('br'),_vm._v("\n                with powerful HRM, CRM & Accounting - Unlocak more with"),_c('br'),_vm._v("\n                20+ extensions & Project Management module")]),_vm._v(" "),_c('div',{staticClass:"dis-flex"},[_c('button',{staticClass:"btn btn-white btn-size-custom download-btn",attrs:{"type":"button"}},[_c('i',{staticClass:"fa fa-arrow-circle-o-down",attrs:{"aria-hidden":"true"}}),_vm._v(" Download Free")]),_vm._v(" "),_c('button',{staticClass:"btn btn-white btn-size-custom demo-btn",attrs:{"type":"button"}},[_c('i',{staticClass:"fa fa-play-circle-o",attrs:{"aria-hidden":"true"}}),_vm._v("Demo")]),_vm._v(" "),_c('button',{staticClass:"btn btn-link btn-size-custom btn-document",attrs:{"type":"button"}},[_c('i',{staticClass:"fa fa-file-text-o",attrs:{"aria-hidden":"true"}}),_vm._v(" "),_c('span',[_vm._v("Documentasions")])])])])])]),_vm._v(" "),_c('div',{staticClass:"col-md-6 col-xs-12 bg"},[_c('div',{staticClass:"bn-img"},[_c('img',{staticClass:"img-responsive ",attrs:{"src":__webpack_require__(/*! ../assets/bnr.png */ "./src/assets/bnr.png"),"alt":""}})])])])])])])}]


/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-2fde5d9d\",\"hasScoped\":false,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/header.vue":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-2fde5d9d","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/header.vue ***!
  \****************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('nav',{staticClass:"navbar fixed-top navbar-expand-md navbar-light main-nav-bar "},[_c('div',{staticClass:"container max-header"},[_c('a',{staticClass:"navbar-brand pt-0 waves-effect",attrs:{"href":""}},[_c('img',{attrs:{"src":__webpack_require__(/*! ../assets/logo.png */ "./src/assets/logo.png"),"alt":"MDB logo"}})]),_vm._v(" "),_c('button',{staticClass:"navbar-toggler",attrs:{"type":"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[_c('span',{staticClass:"navbar-toggler-icon"})]),_vm._v(" "),_c('div',{staticClass:"collapse navbar-collapse",attrs:{"id":"navbarSupportedContent"}},[_c('ul',{staticClass:"navbar-nav mr-auto"}),_vm._v(" "),_c('ul',{staticClass:"navbar-nav "},[_c('li',{staticClass:"nav-item dropdown"},[_c('a',{staticClass:"nav-link",attrs:{"href":"#","id":"navbarDropdown","role":"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[_vm._v("\n            Modules "),_c('i',{staticClass:"fa fa-angle-down"})]),_vm._v(" "),_c('div',{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"navbarDropdown"}},[_c('a',{staticClass:"dropdown-item",attrs:{"href":"#"}},[_vm._v("ERP Facility")]),_vm._v(" "),_c('a',{staticClass:"dropdown-item",attrs:{"href":"#"}},[_vm._v("Business Solution")]),_vm._v(" "),_c('a',{staticClass:"dropdown-item",attrs:{"href":"#"}},[_vm._v("Easy Calculation")])])]),_vm._v(" "),_c('li',{staticClass:"nav-item dropdown"},[_c('a',{staticClass:"nav-link",attrs:{"href":"#","id":"navbarDropdown","role":"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[_vm._v("\n            Extensions "),_c('i',{staticClass:"fa fa-angle-down"})]),_vm._v(" "),_c('div',{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"navbarDropdown"}},[_c('a',{staticClass:"dropdown-item",attrs:{"href":"#"}},[_vm._v("ERP Facility")]),_vm._v(" "),_c('a',{staticClass:"dropdown-item",attrs:{"href":"#"}},[_vm._v("Business Solution")]),_vm._v(" "),_c('a',{staticClass:"dropdown-item",attrs:{"href":"#"}},[_vm._v("Easy Calculation")])])]),_vm._v(" "),_c('li',{staticClass:"nav-item"},[_c('a',{staticClass:"nav-link waves-effect",attrs:{"href":""}},[_vm._v("Blog")])]),_vm._v(" "),_c('li',{staticClass:"nav-item"},[_c('a',{staticClass:"nav-link waves-effect",attrs:{"href":""}},[_vm._v("Docs")])]),_vm._v(" "),_c('li',{staticClass:"nav-item"},[_c('a',{staticClass:"nav-link waves-effect",attrs:{"href":""}},[_vm._v("Contact")])]),_vm._v(" "),_c('li',{staticClass:"nav-item"},[_c('a',{staticClass:"nav-link waves-effect",attrs:{"href":""}},[_vm._v("Forum")])]),_vm._v(" "),_c('li',{staticClass:"nav-item"},[_c('a',{staticClass:"nav-link waves-effect",attrs:{"href":""}},[_vm._v("Join free")])]),_vm._v(" "),_c('li',{staticClass:"nav-item"},[_c('button',{staticClass:"btn btn-white",attrs:{"type":"button"}},[_vm._v("SignIn")])])])])])])}]


/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-4c92e3e2\",\"hasScoped\":false,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/features.vue":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-4c92e3e2","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/features.vue ***!
  \******************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"feature-sec text-center"},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-lg-4"},[_c('div',{staticClass:"card"},[_c('div',{staticClass:"card-body"},[_c('img',{attrs:{"src":__webpack_require__(/*! ../assets/f1.png */ "./src/assets/f1.png"),"alt":""}}),_vm._v(" "),_c('h5',{staticClass:"mb-4"},[_vm._v("Open Source")]),_vm._v(" "),_c('p',[_vm._v("The Core plugin and HR, CR modules are absolutely free to use, free to customize and you can add\n              enhancements depending on your ideas and needs.")])])])]),_vm._v(" "),_c('div',{staticClass:"col-lg-4"},[_c('div',{staticClass:"card blue-gradient"},[_c('div',{staticClass:"card-body white-text"},[_c('img',{attrs:{"src":__webpack_require__(/*! ../assets/f3.png */ "./src/assets/f3.png"),"alt":""}}),_vm._v(" "),_c('h5',{staticClass:"mb-4"},[_vm._v("Feature Filled Modules")]),_vm._v(" "),_c('p',[_vm._v("Modules are designed to take your business to the next level. If you have a small business, this is\n              ideal for keeping your budget tight but yet get professional results.")])])])]),_vm._v(" "),_c('div',{staticClass:"col-lg-4"},[_c('div',{staticClass:"card"},[_c('div',{staticClass:"card-body"},[_c('img',{attrs:{"src":__webpack_require__(/*! ../assets/f2.png */ "./src/assets/f2.png"),"alt":""}}),_vm._v(" "),_c('h5',{staticClass:"mb-4"},[_vm._v("Support and Docs")]),_vm._v(" "),_c('p',[_vm._v("We have made a detailed documentation of our features and operation. We provide 5 days support,\n              webinars and training to your staff if necessary.")])])])])])])])}]


/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-5dbe0566\",\"hasScoped\":false,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/information.vue":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-5dbe0566","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/information.vue ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"search-information"},[_c('div',{staticClass:"rectangle_first_bg"},[_c('div',{staticClass:"musk_Shape text-center"},[_c('div',{staticClass:"action-new-box"},[_c('a',{attrs:{"href":""}},[_c('img',{attrs:{"src":__webpack_require__(/*! ../assets/plane.png */ "./src/assets/plane.png")}})])]),_vm._v(" "),_c('div',{staticClass:"summary"},[_c('h2',[_vm._v("Supercharge Your Small Business")]),_vm._v(" "),_c('p',[_vm._v("from your "),_c('span',[_vm._v(" WordPress ")]),_vm._v(" dashboard")]),_vm._v(" "),_c('a',{staticClass:"start-btn"},[_vm._v("Get Started Free")])])])])])}]


/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-6664004d\",\"hasScoped\":false,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/footer.vue":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-6664004d","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/footer.vue ***!
  \****************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('section',{attrs:{"id":"footer"}},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-md-3"},[_c('div',{staticClass:"footer-menus"},[_c('h3',[_vm._v("\n              WP ERP\n            ")]),_vm._v(" "),_c('ul',[_c('li',[_c('a',{attrs:{"href":""}},[_vm._v("About")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":""}},[_vm._v("Refund Policy")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":""}},[_vm._v("Terms of Service")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":""}},[_vm._v("Support Policy")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":""}},[_vm._v("FAQ")])])])])]),_vm._v(" "),_c('div',{staticClass:"col-md-3"},[_c('div',{staticClass:"footer-menus"},[_c('h3',[_vm._v("\n              Products\n            ")]),_vm._v(" "),_c('ul',[_c('li',[_c('a',{attrs:{"href":""}},[_vm._v("HRM")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":""}},[_vm._v("CRM")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":""}},[_vm._v("Accounting")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":""}},[_vm._v("Request A Demo")])])])])]),_vm._v(" "),_c('div',{staticClass:"col-md-3"},[_c('div',{staticClass:"footer-menus"},[_c('h3',[_vm._v("\n              Resources\n            ")]),_vm._v(" "),_c('ul',[_c('li',[_c('a',{attrs:{"href":""}},[_vm._v("Documentation")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":""}},[_vm._v("Discussion Forum")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":""}},[_vm._v("Submit Ideas")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":""}},[_vm._v("Translate Extensions")])])])])]),_vm._v(" "),_c('div',{staticClass:"col-md-3"},[_c('div',{staticClass:"footer-menus"},[_c('h3',[_vm._v("\n              Newsletter\n            ")]),_vm._v(" "),_c('input',{staticClass:"form-control",attrs:{"type":"text"}}),_vm._v(" "),_c('button',{staticClass:"subscribe-btn"},[_vm._v("Subscribe!")])])])])])]),_vm._v(" "),_c('div',{staticClass:"copyright"},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-md-6"},[_c('div',{staticClass:"socials"},[_c('a',{attrs:{"href":""}},[_c('i',{staticClass:"fa fa-facebook-square"})]),_vm._v(" "),_c('a',{attrs:{"href":""}},[_c('i',{staticClass:"fa fa-twitter"})]),_vm._v(" "),_c('a',{attrs:{"href":""}},[_c('i',{staticClass:"fa fa-youtube-play"})]),_vm._v(" "),_c('a',{attrs:{"href":""}},[_c('i',{staticClass:"fa fa-google"})])])]),_vm._v(" "),_c('div',{staticClass:"col-md-6"},[_c('p',[_vm._v("© 2016 WP ERP . Build by the folks at weDevs.")])])])])])])}]


/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-67449a2a\",\"hasScoped\":false,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/feature-info.vue":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-67449a2a","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/feature-info.vue ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('section',{staticClass:"single-feature-sec"},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-md-6"},[_c('div',{staticClass:"img-sample"},[_c('img',{attrs:{"src":__webpack_require__(/*! ../assets/hrm_Illustration.png */ "./src/assets/hrm_Illustration.png")}})])]),_vm._v(" "),_c('div',{staticClass:"col-md-6 "},[_c('div',{staticClass:"short-info"},[_c('h1',[_vm._v("Empower your workforce with HRM")]),_vm._v(" "),_c('p',[_vm._v("Individual profiles and work logs for each employee allow you to manage their payrolls, emphasis\n              workload, promotion and leave – everything can be monitored and managed online with absolute\n              clarity.")]),_vm._v(" "),_c('div',{staticClass:"custom-collapse",attrs:{"id":"accordion"}},[_c('div',{staticClass:"card"},[_c('div',{staticClass:"card-header",attrs:{"id":"headingOne"}},[_c('div',{staticClass:"box purple-box"},[_c('img',{attrs:{"src":__webpack_require__(/*! ../assets/db.png */ "./src/assets/db.png")}})]),_vm._v(" "),_c('a',{attrs:{"href":"#","data-toggle":"collapse","data-target":"#collapseOne","aria-controls":"collapseOne"}},[_vm._v("\n                    Evolving Database\n                  ")])]),_vm._v(" "),_c('div',{staticClass:"collapse",attrs:{"id":"collapseOne","aria-labelledby":"headingOne","data-parent":"#accordion"}},[_c('div',{staticClass:"card-body"},[_vm._v("\n                    Track / Import employee attendances and manage their leaves. Make important announcements when you\n                    need everyone to is heard.\n                  ")])])]),_vm._v(" "),_c('div',{staticClass:"card"},[_c('div',{staticClass:"card-header",attrs:{"id":"headingTwo"}},[_c('div',{staticClass:"box green-box"},[_c('div',[_c('img',{attrs:{"src":__webpack_require__(/*! ../assets/eye.png */ "./src/assets/eye.png")}})])]),_vm._v(" "),_c('a',{attrs:{"href":"#","data-toggle":"collapse","data-target":"#collapseTwo","aria-expanded":"true","aria-controls":"collapseTwo"}},[_vm._v("\n                    Keep a Keen Eye\n                  ")])]),_vm._v(" "),_c('div',{staticClass:"collapse show",attrs:{"id":"collapseTwo","aria-labelledby":"headingTwo","data-parent":"#accordion"}},[_c('div',{staticClass:"card-body"},[_vm._v("\n                    Track / Import employee attendances and manage their leaves. Make important announcements when you\n                    need everyone to is heard.\n                  ")])])]),_vm._v(" "),_c('div',{staticClass:"card"},[_c('div',{staticClass:"card-header",attrs:{"id":"headingThree"}},[_c('div',{staticClass:"box orange-box "},[_c('img',{attrs:{"src":__webpack_require__(/*! ../assets/tr.png */ "./src/assets/tr.png")}})]),_vm._v(" "),_c('a',{attrs:{"href":"#","data-toggle":"collapse","data-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree"}},[_vm._v("\n                    Get Organized in a Flip\n                  ")])]),_vm._v(" "),_c('div',{staticClass:"collapse",attrs:{"id":"collapseThree","aria-labelledby":"headingThree","data-parent":"#accordion"}},[_c('div',{staticClass:"card-body"},[_vm._v("\n                    Track / Import employee attendances and manage their leaves. Make important announcements when you\n                    need everyone to is heard.\n                  ")])])]),_vm._v(" "),_c('span',{staticClass:"clearfix"}),_vm._v(" "),_c('a',{staticClass:"View_Details",attrs:{"href":"#"}},[_vm._v("View Details")])])])])])])]),_vm._v(" "),_c('section',{staticClass:"single-feature-sec white-area"},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-md-6 "},[_c('div',{staticClass:"short-info"},[_c('h1',[_vm._v("Every Customer "),_c('br'),_vm._v(" is Important in CRM")]),_vm._v(" "),_c('p',[_vm._v("We make it the simplest! Not only you get happy customers, create loyal and a potential fan base with\n              your hospitality.")]),_vm._v(" "),_c('div',{staticClass:"custom-collapse",attrs:{"id":"accordion1"}},[_c('div',{staticClass:"card"},[_c('div',{staticClass:"card-header",attrs:{"id":"headingOne1"}},[_c('div',{staticClass:"box purple-box"},[_c('img',{attrs:{"src":__webpack_require__(/*! ../assets/db.png */ "./src/assets/db.png")}})]),_vm._v(" "),_c('a',{attrs:{"href":"#","data-toggle":"collapse","data-target":"#collapse1","aria-controls":"collapse1"}},[_vm._v("\n                    Take it Step by Step\n                  ")])]),_vm._v(" "),_c('div',{staticClass:"collapse",attrs:{"id":"collapse1","aria-labelledby":"heading1","data-parent":"#accordion"}},[_c('div',{staticClass:"card-body"},[_vm._v("\n                    Track / Import employee attendances and manage their leaves. Make important announcements when you\n                    need everyone to is heard.\n                  ")])])]),_vm._v(" "),_c('div',{staticClass:"card"},[_c('div',{staticClass:"card-header",attrs:{"id":"headingTwo2"}},[_c('div',{staticClass:"box green-box"},[_c('div',[_c('img',{attrs:{"src":__webpack_require__(/*! ../assets/eye.png */ "./src/assets/eye.png")}})])]),_vm._v(" "),_c('a',{attrs:{"href":"#","data-toggle":"collapse","data-target":"#collapseTwo2","aria-expanded":"true","aria-controls":"collapseTwo"}},[_vm._v("\n                    Prepare for Follow Ups\n                  ")])]),_vm._v(" "),_c('div',{staticClass:"collapse show",attrs:{"id":"collapseTwo2","aria-labelledby":"headingTwo2","data-parent":"#accordion"}},[_c('div',{staticClass:"card-body"},[_vm._v("\n                    Schedule your meetings and keep notes, hints on all communications for a better service with email\n                    alerts. With the individual logging, check your progress and assess how your...\n                  ")])])]),_vm._v(" "),_c('div',{staticClass:"card"},[_c('div',{staticClass:"card-header",attrs:{"id":"headingThree3"}},[_c('div',{staticClass:"box orange-box "},[_c('img',{attrs:{"src":__webpack_require__(/*! ../assets/tr.png */ "./src/assets/tr.png")}})]),_vm._v(" "),_c('a',{attrs:{"href":"#","data-toggle":"collapse","data-target":"#collapse4","aria-expanded":"false","aria-controls":"collapseThree"}},[_vm._v("\n                    Build Relationships with Companies\n                  ")])]),_vm._v(" "),_c('div',{staticClass:"collapse",attrs:{"id":"collapse4","aria-labelledby":"headingThree","data-parent":"#accordion"}},[_c('div',{staticClass:"card-body"},[_vm._v("\n                    Track / Import employee attendances and manage their leaves. Make important announcements when you\n                    need everyone to is heard.\n                  ")])])]),_vm._v(" "),_c('span',{staticClass:"clearfix"}),_vm._v(" "),_c('a',{staticClass:"View_Details",attrs:{"href":"#"}},[_vm._v("View Details")])])])]),_vm._v(" "),_c('div',{staticClass:"col-md-6"},[_c('div',{staticClass:"img-sample"},[_c('img',{attrs:{"src":__webpack_require__(/*! ../assets/CRM_illustration.png */ "./src/assets/CRM_illustration.png")}})])])])])]),_vm._v(" "),_c('section',{staticClass:"single-feature-sec radish-area"},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-md-6"},[_c('div',{staticClass:"img-sample"},[_c('img',{attrs:{"src":__webpack_require__(/*! ../assets/accounting.png */ "./src/assets/accounting.png")}})])]),_vm._v(" "),_c('div',{staticClass:"col-md-6 "},[_c('div',{staticClass:"short-info"},[_c('h1',[_vm._v("Get Balanced "),_c('br'),_vm._v("with Accounting")]),_vm._v(" "),_c('p',[_vm._v("Take total control of your company’s finances in real time with the Accounting module. You can generate\n              live and detailed reports and make transactions, generate invoices and pay employees.")]),_vm._v(" "),_c('div',{staticClass:"custom-collapse",attrs:{"id":"accordion"}},[_c('div',{staticClass:"card"},[_c('div',{staticClass:"card-header",attrs:{"id":"headingOne"}},[_c('div',{staticClass:"box purple-box"},[_c('img',{attrs:{"src":__webpack_require__(/*! ../assets/db.png */ "./src/assets/db.png")}})]),_vm._v(" "),_c('a',{attrs:{"href":"#","data-toggle":"collapse","data-target":"#collapse4","aria-controls":"collapse4"}},[_vm._v("\n                    Speedy Stats\n                  ")])]),_vm._v(" "),_c('div',{staticClass:"collapse",attrs:{"id":"collapse4","aria-labelledby":"heading4","data-parent":"#accordion"}},[_c('div',{staticClass:"card-body"},[_vm._v("\n                    Track / Import employee attendances and manage their leaves. Make important announcements when you\n                    need everyone to is heard.\n                  ")])])]),_vm._v(" "),_c('div',{staticClass:"card"},[_c('div',{staticClass:"card-header",attrs:{"id":"heading5"}},[_c('div',{staticClass:"box green-box"},[_c('div',[_c('img',{attrs:{"src":__webpack_require__(/*! ../assets/eye.png */ "./src/assets/eye.png")}})])]),_vm._v(" "),_c('a',{attrs:{"href":"#","data-toggle":"collapse","data-target":"#collapse5","aria-expanded":"true","aria-controls":"collapse5"}},[_vm._v("\n                    Make Payments Easy\n                  ")])]),_vm._v(" "),_c('div',{staticClass:"collapse show",attrs:{"id":"collapse5","aria-labelledby":"heading5","data-parent":"#accordion"}},[_c('div',{staticClass:"card-body"},[_vm._v("\n                    Customers, vendors or suppliers – create invoices, make and take payments from your every client\n                    and see the data react with your finances instantly. All your transactions are\n                  ")])])]),_vm._v(" "),_c('div',{staticClass:"card"},[_c('div',{staticClass:"card-header",attrs:{"id":"heading6"}},[_c('div',{staticClass:"box orange-box "},[_c('img',{attrs:{"src":__webpack_require__(/*! ../assets/tr.png */ "./src/assets/tr.png")}})]),_vm._v(" "),_c('a',{attrs:{"href":"#","data-toggle":"collapse","data-target":"#collapse6","aria-expanded":"false","aria-controls":"collapse6"}},[_vm._v("\n                    Many Reports\n                  ")])]),_vm._v(" "),_c('div',{staticClass:"collapse",attrs:{"id":"collapse6","aria-labelledby":"heading6","data-parent":"#accordion"}},[_c('div',{staticClass:"card-body"},[_vm._v("\n                    Track / Import employee attendances and manage their leaves. Make important announcements when you\n                    need everyone to is heard.\n                  ")])])]),_vm._v(" "),_c('span',{staticClass:"clearfix"}),_vm._v(" "),_c('a',{staticClass:"View_Details",attrs:{"href":"#"}},[_vm._v("View Details")])])])])])])]),_vm._v(" "),_c('section',{staticClass:"single-feature-sec white-area"},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-md-6 "},[_c('div',{staticClass:"short-info"},[_c('h1',[_vm._v("Integrated Project"),_c('br'),_vm._v(" Management System")]),_vm._v(" "),_c('p',[_vm._v("No need to use expensive solutions like Basecamp or any other task and project management system. We\n              got you covered with everything that you might need.")]),_vm._v(" "),_c('div',{staticClass:"custom-collapse",attrs:{"id":"accordion7"}},[_c('div',{staticClass:"card"},[_c('div',{staticClass:"card-header",attrs:{"id":"headingOne7"}},[_c('div',{staticClass:"box purple-box"},[_c('img',{attrs:{"src":__webpack_require__(/*! ../assets/db.png */ "./src/assets/db.png")}})]),_vm._v(" "),_c('a',{attrs:{"href":"#","data-toggle":"collapse","data-target":"#collapse7","aria-controls":"collapse1"}},[_vm._v("\n                    Take it Step by Step\n                  ")])]),_vm._v(" "),_c('div',{staticClass:"collapse",attrs:{"id":"collapse7","aria-labelledby":"heading7","data-parent":"#accordion"}},[_c('div',{staticClass:"card-body"},[_vm._v("\n                    Track / Import employee attendances and manage their leaves. Make important announcements when you\n                    need everyone to is heard.\n                  ")])])]),_vm._v(" "),_c('div',{staticClass:"card"},[_c('div',{staticClass:"card-header",attrs:{"id":"heading8"}},[_c('div',{staticClass:"box green-box"},[_c('div',[_c('img',{attrs:{"src":__webpack_require__(/*! ../assets/eye.png */ "./src/assets/eye.png")}})])]),_vm._v(" "),_c('a',{attrs:{"href":"#","data-toggle":"collapse","data-target":"#collapse8","aria-expanded":"true","aria-controls":"collapse8"}},[_vm._v("\n                    Prepare for Follow Ups\n                  ")])]),_vm._v(" "),_c('div',{staticClass:"collapse show",attrs:{"id":"collapse8","aria-labelledby":"heading8","data-parent":"#accordion"}},[_c('div',{staticClass:"card-body"},[_vm._v("\n                    Schedule your meetings and keep notes, hints on all communications for a better service with email\n                    alerts. With the individual logging, check your progress and assess how your...\n                  ")])])]),_vm._v(" "),_c('div',{staticClass:"card"},[_c('div',{staticClass:"card-header",attrs:{"id":"heading10"}},[_c('div',{staticClass:"box orange-box "},[_c('img',{attrs:{"src":__webpack_require__(/*! ../assets/tr.png */ "./src/assets/tr.png")}})]),_vm._v(" "),_c('a',{attrs:{"href":"#","data-toggle":"collapse","data-target":"#collapse10","aria-expanded":"false","aria-controls":"collapse10"}},[_vm._v("\n                    Build Relationships with Companies\n                  ")])]),_vm._v(" "),_c('div',{staticClass:"collapse",attrs:{"id":"collapse10","aria-labelledby":"heading10","data-parent":"#accordion"}},[_c('div',{staticClass:"card-body"},[_vm._v("\n                    Track / Import employee attendances and manage their leaves. Make important announcements when you\n                    need everyone to is heard.\n                  ")])])]),_vm._v(" "),_c('span',{staticClass:"clearfix"}),_vm._v(" "),_c('a',{staticClass:"View_Details",attrs:{"href":"#"}},[_vm._v("View Details")])])])]),_vm._v(" "),_c('div',{staticClass:"col-md-6"},[_c('div',{staticClass:"img-sample"},[_c('img',{attrs:{"src":__webpack_require__(/*! ../assets/management.png */ "./src/assets/management.png")}})])])])])])])}]


/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-7400d02f\",\"hasScoped\":false,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/clients.vue":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-7400d02f","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/clients.vue ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"client-reviews"},[_c('div',{staticClass:"container"},[_c('h1',[_vm._v("Reviews by our clients")]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-md-4"},[_c('div',{staticClass:"single-box"},[_c('div',{staticClass:"client-face"},[_c('img',{attrs:{"src":__webpack_require__(/*! ../assets/face2.png */ "./src/assets/face2.png"),"alt":""}})]),_vm._v(" "),_c('p',{staticClass:"overview"},[_vm._v("\n            Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply\n          ")]),_vm._v(" "),_c('div',{staticClass:"client-info"},[_c('span',{staticClass:"name"},[_vm._v("Toma Fong")]),_vm._v(" "),_c('span',{staticClass:"designation"},[_vm._v("CEO")])])])]),_vm._v(" "),_c('div',{staticClass:"col-md-4"},[_c('div',{staticClass:"single-box"},[_c('div',{staticClass:"client-face"},[_c('img',{attrs:{"src":__webpack_require__(/*! ../assets/face2.png */ "./src/assets/face2.png"),"alt":""}})]),_vm._v(" "),_c('p',{staticClass:"overview"},[_vm._v("\n            Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply\n          ")]),_vm._v(" "),_c('div',{staticClass:"client-info"},[_c('span',{staticClass:"name"},[_vm._v("Toma Fong")]),_vm._v(" "),_c('span',{staticClass:"designation"},[_vm._v("CEO")])])])]),_vm._v(" "),_c('div',{staticClass:"col-md-4"},[_c('div',{staticClass:"single-box"},[_c('div',{staticClass:"client-face"},[_c('img',{attrs:{"src":__webpack_require__(/*! ../assets/face3.png */ "./src/assets/face3.png"),"alt":""}})]),_vm._v(" "),_c('p',{staticClass:"overview"},[_vm._v("\n            Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply\n          ")]),_vm._v(" "),_c('div',{staticClass:"client-info"},[_c('span',{staticClass:"name"},[_vm._v("Toma Fong")]),_vm._v(" "),_c('span',{staticClass:"designation"},[_vm._v("CEO")])])])]),_vm._v(" "),_c('div',{staticClass:"col-md-12 text-center"},[_c('a',{staticClass:"all-testimonial-btn",attrs:{"href":""}},[_vm._v("Read All The Testimonials")])])])])])}]


/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-ea0f2c18\",\"hasScoped\":false,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/App.vue":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-ea0f2c18","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/App.vue ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_c('App-header'),_vm._v(" "),_c('App-banner'),_vm._v(" "),_c('App-trust'),_vm._v(" "),_c('App-feature'),_vm._v(" "),_c('App-feature-info'),_vm._v(" "),_c('App-clients'),_vm._v(" "),_c('App-information'),_vm._v(" "),_c('App-footer')],1)}
var staticRenderFns = []


/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-ed2509b0\",\"hasScoped\":false,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/trust.vue":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-ed2509b0","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/trust.vue ***!
  \***************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"trusted-panel"},[_c('div',{staticClass:"card card-cascade wider"},[_c('div',{staticClass:"card-body card-body-cascade text-center"},[_c('p',{staticClass:"card-text"},[_c('img',{attrs:{"src":__webpack_require__(/*! ../assets/badge.png */ "./src/assets/badge.png")}}),_vm._v(" Trusted By "),_c('span',[_vm._v("3000+ Businesses")]),_vm._v(" over 100\n        Countries")])])])])}]


/***/ }),

/***/ "./src/App.vue":
/*!*********************!*\
  !*** ./src/App.vue ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !babel-loader!../node_modules/vue-loader/lib/selector?type=script&index=0!./App.vue */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/App.vue");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_template_compiler_index_id_data_v_ea0f2c18_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-ea0f2c18","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!../node_modules/vue-loader/lib/selector?type=template&index=0!./App.vue */ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-ea0f2c18\",\"hasScoped\":false,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/App.vue");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/component-normalizer */ "./node_modules/vue-loader/lib/runtime/component-normalizer.js");
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(_node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_ea0f2c18_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__WEBPACK_IMPORTED_MODULE_1__["render"],
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_ea0f2c18_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__WEBPACK_IMPORTED_MODULE_1__["staticRenderFns"],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "./src/assets/CRM_illustration.png":
/*!*****************************************!*\
  !*** ./src/assets/CRM_illustration.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/CRM_illustration.04664bb.png";

/***/ }),

/***/ "./src/assets/accounting.png":
/*!***********************************!*\
  !*** ./src/assets/accounting.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/accounting.8628bc3.png";

/***/ }),

/***/ "./src/assets/badge.png":
/*!******************************!*\
  !*** ./src/assets/badge.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADsAAABGCAYAAABymeysAAAT8UlEQVR4nM2beZDlV1XHP+fe3/K23mfNLD2TyQwhJJHJCkGNURRJCERLC5KSEheWErFKJaVUUUBVEDBupVUUWC6FGlEjJBCCpIiCwJAFsDAhJplkZjJ7z0z39PTy1t/vd+/xj9/rnu437/V0Z3rQM3Wr5737fvd3vvece+45554rY+OT/BCoAGwCrgauAAaBKvA88DRwGKhdbCaCizRuEdgCXAv8EnDrMp7ZA3wGeBI4SD4Zq0qySpItAVvJwf0y8NOrMOaTwF8D3wEOsArgXy7YMjAKXAO8A/ipC2VkGfRfwKeB7wIvATMrHWC5YPvIJXcDObgfX+mLLgI9DXwKeIKz4HWpB3qBrQCXATcC7wZ2ryqbF4deBD4JPA68AEx1/qAT7BrgI8B7V5MLi1AheCRS84jF7AE5AroG9KamuDfOkv28W1ooL4e+APwu+XoHFoN9DfmsvGxSQIAQoV/DL4eEXwF9PBO3dz/V2rSkHJMGM2RUsKzTAms1ZgflONRgJ8gNnuxnpiR9a4K/EFYW0juAv4OzYLcCh14OOIASlgENvw/2r0CfqEn6/D6pNn4g0xyjzpg0eUZmqJJRlYwEj0UoqWWIiCu0nw0U2KgFXqn9vEr7oz6NdoLcAO4ds5L9eI3sQgDfCnxFxsYnBZgk3+jPC07a4Po1fADso8DjJ6V+YK/Mzh6VBgeosk9q7JdZjksTjxJjGNCQEEOAIAgADqWFY1pSckkKIxrxSu1jlDI7tMI2LbFTK+VNWh4FuQ7cG6qS3VUjaz+xbCrK2PjkjeQWrSdAizBM+LlAw0dAvzMm9RdflGrzmDQ4SI3vmTMcoMaspChQxNCvIUXsilaiAAmeKVJqkiEIZQ3YTplX6wBbtcxlWmG7lsKtWt4B5jpP9oZJSe5K8MYsDf2dMjY++UHgns4ej1Yt8pvrtfRdxO/7b5lKnpUZXmqDe4kaVcnwKAMa0k+IXcY8qwralq3I+delQ6mScUZSBOjXkI0U2K2D7NQ+Xql9XKODQajhtgmpX9vC/5lFNnYZ6gEZG598GLits0fg2RHiV31NTvF5c5SnZZpT0kJRBjWij2BF4ACMeIy4khE/rGqmndpZVdNeHorI+fUgQ6m3wXuUEY25Uvu5VTdyu99IjewfM/SuLo8+E5A76IsZBDZoMXzCTPDrwfcA2KJFtmnpvGqpyLzlElGscUUj/hIRf6UV/0Yj7t2CooBX+09e7Re9mqe8miNeTU3V5BxIPgGdFCD0E9Kv4bza7zETPMRx+vVGftZvKh+XGuZc1oIAaHZ+G2FoiuMvzUsEGHZoGddmsCu4NgnalpxuEvFXGfFvMuJ/JWdaUQSvBlXJgYjeaSW900oufVX5gld7v8c8pSqHvZpq5/iL3w0hhm1aJhDDZ8whXqMjpoSlietkNQmAVue3MYaTNIMT0pBhjbRzw59jQFCs+DL4TQa9WsS/2Yi+faHX5tWc/SgdYyiL+gS9w4i7w+BAQNV8yan5F5D/VsxhrzI7B3khcI+yRiP2SZW9MsN1OtwNrA+g5+5tAgyd7qagZSN+M+iPGNG3CHrXwt847aJAZxGuqE/Q243429sjY8T8m6r8syLfV5VDilTnnszwDBExoJHp4ZC4AM7drYXcCmYoHeY8NuKrc5ypgmJW39HrQjkXeivorbkxE7yaYUXO5P1ChicR700PhgI4V94OKGCDCgEnFy/pwOsPB9z5SABFooWfUzwJvlNA89RVjS3QxJk62dz2ko8N4pdS0x8iKSzcqsSBlrFU1JpejmUApN0GCsjN/GIbLOLVeOhm2X/4ZPB2DrAFWjhq4nywMjVWYqwpEUiGKuSi9WD+v0hWEBBvpL2lafs76bo759Qz4eZR78/uopKbIxGvZl6n/29JsMgcM+JRjTAU1ZhesXFXyeZDiZHFX4BHVI33YM7vKF44LdzPu/Xpgp07QGiQMSuZD3UFBip/AdKhEgKCx7Qd+YsnW1VBVbDGPaMqV3iM6fSbtR1KzAWentwZijDdpQcmoIexUdBuDqJXYy4WWAG8CqqGQlh/Txy07vdqRhpJ+Z+dt9cuBJwHGGe3idyoGkJMr23Wd7XGcy9erAw5dFWT5fvb6oN1avAqVKLqHYWw8RWvpj80ycHMhh9LksrnrTkrM/UCC9TVAnUyZsl8D0NkgnMwMT9TggoLLFTOkF99yYrkPrRXQ188fVsxbDyaeTsABIjg1G53asAvlOxi58YDBQxFjO2hxnRV49wWqXOi58yEkkctLCP2XB4pzlu8GgYKU28ohfX/yHzQr4iEJp1oucLltaTy0XyLOcuqx8CCSc9QCgSU1AZZd0F0DwQUMIix58hP8Gr8fIh2gSQozod4hKHi5E+UwtqezAcVRQhMesapLUw1hr7qvC1Y4/JJnudD0Dk7NW+Wc7+qxxIzARB2fmsRMvQcPzMPuI3pBKsKTgNUBSNKb4dtMdBMQ7waRkrjN5ej6p7UhWUFteJqgujp+tp/SVy8MTApC52ZduwL2qlegizhOxi6dLYXe1Yl02BedRT07Nqab97gNaAcVf9wpDRxWxw0H0iyGOct2vnbdlMVUh+R+YDh4sQc0BKgBk0D45LJxsj760n5Viuu6xht8N1E2NPF6zoLGUoRS4VAxmkp89mmjkwDkPmAvnj2L9aUTn0IkHJU/cakWfPEVGP43sCkGHHnZDMyH+LUsr5y4ua+eGZP4qJSzrhoaJPGdHPwtVONoU+ENpdoJ6J5yYKuYDm1AvKD4kXUhpItXCXtxIKo2iD3lvOXOB9gxR0QUd9MixuscbU1pVN/bsUdHK+tu9+IJzApcztirrqW9ZXjN/fF03sSFxUBrwiRbdUbWXF4vLb+MSN+UbKuG1hFVuLI1Qxd1yy08EkT15FBzH1jr3ZelYx4ZloD721lxZHQpqedt0HqwtJQaeLBDX3Hb/JqSVwBBVIf4XzI+srYawcKU99qA1VFNDRp0/nAnpjd9A2vuWnspb5zPCyegFx/DZL1kHXYFWz7QTWLzRCAuI6XCkojLe08Vd3wp8a4ljWu7jEkWVweKEw9uXng0HZgqpb0kfmQ9ZXjNw0UJp9sZXGJfCfwVlxqjfMnqpv+tJGWr7Qmwy2Y0G7N5cvJzmmYRWjhaYhzQffgPTZAf/eJIFn4QUBV8+DdLXqpJTAp082hu8arG94a2rQuaAa4VhaXy2H10NbBl3bFQfLVNaXxXxosnn48yeLCHFBBfWST7GR14y9ONYZ+KzDJ/L67ZPMWRYI5RTbkadUmvt4jn90XAFG3HoWWdli7fK2Yeb90IRlxjM1u/mwxbDzeH08dbGTFsqCu6QrFyDZPbxt68c2AT1wcKeLzV4jEQTM50xjZeXL2kvsDk6LLiJdzPiyqi/dURfFor3KE2JAfap1DArHQsWBFszzEM3Q2kTzoOjo9+u+Ji8PIJnVFvKBZ5sOgLW1tmzyvCHHQbNXTcuHI9LbnRfITgW5jn9PU4BFEdJFf34bda7ZahvzEehG1E24biliZC4QVwYprIXrSeZvvrwua8xZrMmpJeceR6dE/seLVisvaPHivRjR3ApwiGpk09d5yaOrSh1MfGiOObuN2bxZQrLiqah5a576xpaJ2TQ93cbIr2AxPmWBNvwZB2j588mpMaNNmYLJvZz5Eu8y4U0tkW0zU1r9vbPaSWwpB03E2AvNzk2/F+cCmenh6++/NNAd+KjRJbpCWI1VM7uqIPxLYdB5shqeElTL2FT0yFccMefFFB1ilXwNGiCpzmXVVITSJL4XV+zMXtuPOLg0hsClHpke/Nt0cHCgEjSxfW2epEDT8idlNN5yobvxEZFvzjspyW+oiCkHjH2Lbavr22E3xDGkUDhCN9kiSv9AVbB5fWLZpeUv7wFfb0qUvnn1SjF9yazA4vAYcmNz5aOZDoiDJFDGqYophw51pjIy8dGbHk4Fkc1qz4tZfmP5cnm3Kjz9rZGyhODSgIWl3sE8b4LlzwUImjtfoyLvWaEwrDyQ181FQiWeOlcPa11tpqT3T5pzm2+o82xq4fv/krnsikxCa1BfDetbKYvvi6Sue8mqwxuHVdh2jV0tcgThoTPQXpp5LXWQBPGiM5QY/fEv3jBUAzxny+qHnO3tmSLlMK7+xlZKZOwj2aiQ0qVtXGfvtTC2e3uvMqSEOmpyqbvzg/sldvxgGiU9cbJ8bv/rBRlbcFNmVrdM892VoZTHrKid/tRjUm85bA+gMqY5qid06eG9VuiZeAPbOmem/6exp4RnUmFv82qvaxRsK6ltZHK4tn/zBUPH0l2pJpZ2s6ra28sRcaBOOTI/e//TYdZ99+sQ1+2eaA7fHtrnidYpCPSlTiWdf3NB37JHERQFtL29CEq7xQyNbtLyl2r3Q5LNANgf2wc5eARqScpvfeN9WLTFFqgLq2j7pjuEX3h6aNGu01bnX2hIgtClnGsN3NrPS6JxBWklTFVqugCLsGN77+tCkWeZCI6A1Mj9EyC/opnsdvpcKfwbObsD76VIadIaUUa1c+XN+064T0pzLt/tmVoj64umZXWuevS71EYmLl1i/+d/QpOSx6crWqKqQaUg9LXPp8At3jJTGDzfSYiSiXhA9Lk1u8xsHr/XDvzourR5HWnx9IViAu7tJtyYt3uFHv7VbBxmTprc5YFdLKvHGvmNP71zz7M/V0jL53punS1atITi1zLb6GR088IHRof0PNdJSBHiD6AQtv0WLvMdd+oWWZL0Omj9K+1h2IdgH6MhHCXCGjCGN1/2eu/yDDRyzZN60nfh6Woq2D+374s6R53+5mvSRuIh2scEqNMH5gNnWAJv7D33s8rU/+KM0iwLnrQhoivcTkvBev+P2LVq5eYKkl5/4h3P/WdjvyAuhF5FFOCkNfsyvved97rJXHpWGZnnW1ju1NLNitGvNs/ddvvZ/3tZISzSzIsAKVXVxQyFxMbVWhW1DB+6+asP3P5T5wCQusiLqBPH7paZv9ZuH73SjD52WBtJdgf+YBXXKnYWaXavdHEoFy4BGvDf4fv9D5vjsK7TPeNSoig1MRjGsp0emt9/4gxO7H3NqKUfVhXmOZZOIUk9LoMLl6555y47hvQ+3sjhIXWRENLOI7pea+xEdsPdlN0xapH+ChB4xbMSCQ4BOySt5wfQiMgizZDTF8cfu6qM36Ui4V2a9QbyIukwDakkl3jp44InXbP3WaCWefazWqMzn5vN4aOkG4NRSa1aIbWv/9Zsfu2LXyHNfaqTFKPU50ADRg1JzW7TIJ7Pd3yxp0D9Bq1c91k/ScdrRTc1fAn5/0WwDFsM4LWI1/Z/Krnn6eh2y+6TqDaIGdYr4mdZAaah4+thNW//zZ7aOvPQ7SRZTb5UX771drK2qUE/KtJICGweOffym0W9cv75yfO9Mq7/k1apwVqLrtcDfZtc9eAmlm45JHdu9qOBfaVvgRTiWqCR/ivy2xjwpeXSxSYtUJXv214P/2v2YnE52acUIGAWjKkEctLI4aGXHZza/at/pyz8yVRv6eQzEYZOznjYgSpLFaCaUS7OPXTbywvu3Dhz4bupDaebbSyrgBdF9UnU7tWL+Krv2gW1aectRqfUCmgExXZL/S4EN6UjNLAR8iRZp4U79TvDUZQ+ZsdntWpYS1jpUFLGC2nJUbWY+DA9Pbb/l4Jkd99Tr5WsJIAwSUhdBClGcHNs6dODuS4defCgOmo1aWil4NSqoM+BT1O+Xmn+djkSfTHfvWUN8/VGpY5FeRmmEXgmJ89wRGAEmegFeR0yohnvt3ss+bQ/s7ydkg8ZBlh+v5cbLZloKq61a0lc+Mr399Uent36gXi9fHxdahzb1H/7wlsGDDw8UJs800lKU5tY2A7xF9AxJNiZN3ua3rv2oe9W+WE3/MWksKuPtoCvoEtgsFyzANrqGgTngAUL6tcCD5vAdn7DPf3FMmlyqZRNgjM9BW1WxkU1cMawn063BvlOzG68aKY/vHS5OnG5mhaDlCqGgDvCSn9XpIam7PgLe5y676dfc9m/XxXGaFkHPwh9eyxKlxMsFC7AL2NsNsEcJENZrmRdl6p/utS+881FzsjZAyDqNrWtLGRBFTGhSFwfNLHGRTVwcSF6gkqdUEaZIs5PS5GZdG92dveIPrtbh95+WOg1crzUK8KPAt88HYiX3ei4BjnUDDHk13EYKBGr4B3vo5k+bA988LHW2alFKBKYNuhuvahBN8XpQ6n5QQ97jt1/1Tnfp9wJMdEzqyPy/rnQl8D/LAbDSS0wD7YG7lu16PBGWtVrioMx86S/tgXd92Zw4MUvKZi1JjJF2XCJtkDiUo1L3ILzerxt4l7/0nt1+5H1npEGtXXTWA6YnvwJ3fLnMv5wbWwHw98Cd3QC3c7esIaagAY/LxIfvs4f//Ovm1HQDx2YtShFLgueYNNQDr9WRwtv8lrve5Db+jUc5Lg3M0tL8BvBGoLESxi/kLt6vAH/brWNuLRtggxYQhK+ZU7/xeXPsvm+ZidlTNBkk5Ga/tvBG3XDrz7oNny8QcFIa88WhSziad5P7vCumC714uAX4KnB5t87FBiw/LHzEnvitR+XkF2/U4Rt+wW3+V4NlQhq02gffS4CcAn4MeOblMrsatyyF/Arbp5b6kUexCGs1xmABz7i0SPPc/lIgAT4MfJwelT3LZnQVLwuvJ1evc8LEc15KZwFoT/om8E7yu3UXTKtZdXkSeDvwauCxpX64DKBHgFuAm1kloHBxSmmfAl5HvtF/d4XPjgG3k3tt/7mqXHFx64a/TX7f9nrylM9StAd4PbAZeJje9xYuiFZzzZ6PtpHvjTcCa8kjk+8Aj9IlSX8x6H8BjwCusWMRlmEAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/assets/bnr.png":
/*!****************************!*\
  !*** ./src/assets/bnr.png ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/bnr.0405f19.png";

/***/ }),

/***/ "./src/assets/db.png":
/*!***************************!*\
  !*** ./src/assets/db.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAPCAYAAAA/I0V3AAABHUlEQVQokZXSTyvlcRgF8M8vN3MVyqQJaTQWSNLYzYLkRZh3MXkDNrOwsjKztrWwlyYLKXulSWalNKHILaPMTHQsfG8sf87mWTx/Ouc8p0qioA8zmMYHdOABJzjEAVogSTPJduphO0lTkrWaC22sSDKQZL3mwnqSd1WSVfzAz6KtH91o4i9ucVV6U/jYwAh2POMIp/iDHrzH5Iv+N0nmkrRq0msl+dRAJ8bwBhMYx1CheIsz/MIx/mG0SrKJRVxjswyc4385OFgOfcbbNr3lV1q+VCUZxj0WMF/qAHpxgwvsYq/Uhza9BXzHPn4X5+7RKA4OYxZfsNHAZfnNV/VwJ0lXkq2aeraSdFV5TnlveeJMsbzPU6rPPCX8qGj0CORobX5sHBLhAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/assets/eye.png":
/*!****************************!*\
  !*** ./src/assets/eye.png ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAMCAYAAABvEu28AAAA20lEQVQokYXSQUoDQRCF4cFVjIsQQQwu1JMYweDWjUvRM4h6okAQJOQQISDiVSSL4DJ8LlIDY820/vCgqXpd3VXdFaoOneMFn/gOfeAZZ117cuAEK7/5CjVZYVQqdJ3MUwwa+QFmyTPJhS6TYR7xAzzgHv2ILZJ3XBc61OYI+3azqdmgh+Pk3WJYxemZCrcd8ZvIZd72qjLbP3JtMIzr5dZ60U7N+r/Wuoa9iHgfd6HSsC+k558kw0z7+V+T50rhQ46wTOZ1qMkyWiz+7FqneMK73Zw2sX6MXGvPD2yOtKVGmikjAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/assets/f1.png":
/*!***************************!*\
  !*** ./src/assets/f1.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/f1.14244f1.png";

/***/ }),

/***/ "./src/assets/f2.png":
/*!***************************!*\
  !*** ./src/assets/f2.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/f2.9500f5b.png";

/***/ }),

/***/ "./src/assets/f3.png":
/*!***************************!*\
  !*** ./src/assets/f3.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/f3.dc327c2.png";

/***/ }),

/***/ "./src/assets/face2.png":
/*!******************************!*\
  !*** ./src/assets/face2.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/assets/face3.png":
/*!******************************!*\
  !*** ./src/assets/face3.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/assets/hrm_Illustration.png":
/*!*****************************************!*\
  !*** ./src/assets/hrm_Illustration.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/hrm_Illustration.0dd8496.png";

/***/ }),

/***/ "./src/assets/logo.png":
/*!*****************************!*\
  !*** ./src/assets/logo.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAAAiCAYAAACwRFDGAAAHiUlEQVR4nO2ca4xdVRXHf3cyAzqURyeCRSZCoWmCCIgorQKhBgRBgqAZMVJI+ICBYCgFAyIEIq/YGh/4iMgHI5nSSBqoRHwRJDMQLEMCJEBQHrY8JorB0sjLQil/P6x7Mvvuu84++9y50zKT+0tOZs7ea++z7rnrrL322vvchiRqsBvwKeBkYBlwKDAIbAWeB+4B/gI8AGyp03GP2Ukj04A+BnwfOKVG348DXwP+1oFePWYJ/RX184Hbgc9n9vc48ANgHPgnsK1z1XrMBlIe6ETgzxl9/AP4NvBH4M1mWR+wK7AL8BY9Q5qzlHmglcAPK9r+AbgYeBZoAAcCpwPnAIdFsmcDa2rqNgRsDs43Na9R1aZgK2a8ZQwDL0VljeD/lcCC5v9LgOOcPsaBCWA98Ah5D8ogUw9aXWZCvwHg+uB8BFjoyK0BHgU2NPs0zyMpPlYozaOSDmzK7ibpQklbKtpI0pnOtVLHoNPHQEL+YEc+1f/SSHY0qu+EpRmfa6jDvjVD+nWiz0ZJw5Loi6zsWODHiSfgK8AngdeAnwBvAD8D9iqRfw24CPgQFkuBDW/xdT087/HhhPyRTtmQU1bwmeg8Z7iuYgPm2d6vdEu/hcD9wEA4hM0D7itp8AzwWcxgfoQNXSn+ClwKPAy8h7neQ4BzgRXY0PEJzMBSrAYuC86HgckS2ZOcssXAQyXyX4rOn6vQZQ02MSj4CLDckRvB7lEdVteU9+imfrE+3hC5EDgydGW3lbir9bKh43hJ/6twbTdL2jfoc75siPuvIzspaRel3f3yqM3KErlGiT5l8t4QMFSzHtl9GXVk6w5hdYb2buuXq8+QbOgKWVVUDjudSNJvZHHOHSX1BVdK2kNTX+bhku6taCOZ0U4nTqnSf2OJvHfTGpFMjPcFlfU1mPhMO9KAcvSro0/8fWwsKm5xOnlR0jxJTzt1BTcEyvRLOk3mWepwQELh3A8Xf7AQ78uMA+4xRyam7AuqK7ujDahKto4+bbJ92DTuPGccPA84GosjYn6HJRmvBLYD52NT07uA/SrG15gLE3XecogXGJ+R6GN/p+yA6Hwi0b5Hgj7g4yV1k8DTUdmr2OzlNCyg/gY2W/oFljTshJFEnbBcRog3EwsD7Tjf5M3OlkXn6xM69EjQD5xQUnciFq0vAL4K/Au70dsxz3Q35dP3HN4FbgFurZCboHUGsGdUPxid/7z5t5iBnES7UcVGWzazy8GbFr9es49VGTJX0VlG39Ov04XuJdH5OJLudsbAgoOcMfD3Cfkq3pbFTYvVHrTmBm6rKuqH1D57C6814OjlxUkxXowxrO7MwnLoZJbo6RdPLHJioIYsbmybhfU7VhXyHPBLbJvGcVhSsBPuB67AvMn2mm1j7zACXB6cxwnBV7G0fch+QT+7O9dILXkUbK4WAWzZZmeQq9/VGTK5e3x+7VlyN7lR0t6RNc+XdIZs5rOnY+3x4S1phB5lLCgfLWkTpvCrPFrZE57DRqWXW6bjgWIv2S39OtVnVGpfyugG7wDfBD4IfAd4BYuVzgVexDzEnZhHeyejP887zG/+HaA1PlobtNkUlIeztEVRX09k6FDFOLZX6iA6i1MaGUeOl5wp/ULWYF7fPK2kVzq0QI+LJe2qqXHzKEnjCfk+5cVBq6J2hUeJE4gHJ9oU5XFMULYAGrNU9rTGR24s10neJXWU6eclVVOLvJ4+3ud080woHUTnsk7S7s1O+2RD1OaKNmd5CpUccVC8vFl+clQeumcvuM4NPuvI1T12RCIxvi9S+dA6LX36aM+z1OFdbAgZwaauJ2DB3J2Ur4Q/huVybqtxnXih89Dm368HZZtodc/PRG0W0z7lBxtS5xp/ov17vd4TnDaSjnAsMIc3JS1oWuJeku6rkH9b0ulqdfmLlLdPyHtKYg8TL5zGC6yjTZmQscQ1Y2aTB0L5Q9m09OkHnuzQ9o4BXsb2B02Q3l99HXAjtksQpnbBXUb7soKHl/jaUHEuLOArEorLad/ecFfGtXcEOYlEaE1fVDEJXELrztK1WCBd61WcJE1L8hZTU2yTPeGLKuTWqfXJaEj6oqTXm/WTNazdS9iFeMlALxYISQWXMTPpgXKpq19D7cm/2FNPywOl3F2Kzc12l5bUP6zWLHZD0jGSno/kTq2hbGrFfaykjZdDCknlbGJmowGV3bdOV+PdIaxwd2tpDUpTDGE7GG8GzgQ+je08/BX2/lgRwH4AW3j9KbBP1MdL2Mb8XCaw3MO1tG76Xg18t6TNW1jO4nu05ovGgQtI50QuYWrTOtRf3ypja7VIFrn6PYTlgJYFZUuwt2iKduEOxJfrKBG+1jMPizWq3hUrWIvFFMJe4dmGGVEflqz7Fv42kYLD6E4Sr8dOJH4v7Fhs3SqXZ7Gn+9/AR4FTgS9QvWn+GsyT9JjleC8WriD9ZsZ0+S3wZbo5E+ix0/A8xU3Y+DoTrMNeDeoZzxyhG68253IFlu/oGc8courXOer+uILHC9iuwHh7bI85QFWwuwXzRIdQb8oN8BTwOWzK3TOeOUru7wMVlP3AFMDfgTFsIe9B4D/dUrLH+5f/A4NfirKeeCm1AAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/assets/management.png":
/*!***********************************!*\
  !*** ./src/assets/management.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/management.1df54b6.png";

/***/ }),

/***/ "./src/assets/plane.png":
/*!******************************!*\
  !*** ./src/assets/plane.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAmCAYAAACyAQkgAAAFKklEQVRYhcXYa4hdVxUH8N86c/OYNNM8SNKatOkrFBMqWiupqGAhvlD0Q0F8EARTKVZateIHUajUgqCggq9+KFWk0AfYUmsbJbaKHyKlHyypiaSWWtuxSjKtyYwzziQz9yw/nDt37ty5d+6dyUT/sLn7nL33Ov+19l6PfWPTE+NaEVAQMftQ/Yb5yJZOFI05LWs6ro+cExDNnzXCTrwZb8O7cRnG8Vvcl+lw/J+IrhXeg0/jRr3xwVofk1YSu3ELbpO9ps7DHf8LooG9yd3KuHaZMjafb6Jvx/3SFeco56/ni+ilyd3Sh1ZI3pMrTzR9Bvcs8Qz2wsGVJLom05N4V/vAQMn4oG9NDHpQKAcnfWRo0l0Z+tXn+LkTrULQkPQPrG8fLtLYiQ12XXzayL5nKZI/7vLc8BY/3DLqqLCjxxe+hOwnjtaEvfgo3odBHMbjOIjJRlugdJGcWm/DZSPGDvwmXfKazRkG/jVk5N73hmOXunDrmNGyPUjPx2pMFz20+TAmpcPSF6U90hXSfulBaUwalWqS9jaxyjc3jhk7cChtHbX/5W1ef2Wbk+um3LH/d+miU8bGV/tBp7WN9m1pWtKNaJHcn+mxTLVMFmnruo39Z41f7Rlm25jaiU3uK5Ki5OQmd140autbX2RyrUcWkf212f7CMxpCeka6roe1e6Nu7VSNLJRFScacFYTJMzXMKJQdV38SM03LtY9mOpjpuh5W7KsNTbj5yE6O7lBe/ppdA6XhSKcvH7H3+HbjT1/FBRM+1WHtq5keaH0XG38550wRbsd3m6RbOlVRsTSDRsnYOrsvmHL8Y8+ktwyLouToDvnA9eHUejs3TXi5bDFX45tb8Po8WRsfaxANV0vPd/jeQ8L3cUz6sWpL+sZAcnrQ7nrh+Jv+Tq3OczspwzWbJ/yp3q58OICfLlB6wy/Gqc7qdNvYX4L3C3+DTIFhesa9BSiSmQFP/XutR4VYP+njq+re0SEs/SF4ZycZtYatH217/wk8pJAaZwQ/Xw5JKFHU7dswYV/ru7a0dBY3dMtUtSxdRbN4+E6Eu4RRQZZVw8X6K3CXjeASsWBX54jKOIxHhFvIk7MDWUZDbYGnzydJXJmMLJb4a5mujfDP5ptAkjNmvfxC1R3mfOGaCC/1mlTQQhLVlke15VUaG830vZWIq+1NuhrH+tFmfsBvWLOsV48tAr+ySD5eWitR+r20AS/0Q5L2FBrUp8n6HOkG1vQrsAdewK0RDpmtzlpvq/0QjYL62VBON66/8w/2nStE9DgOobLsEojG0MMTioL6WeozHVPldry6QkRLrJLKpabjGsxMUc60FMtz1gwcWSGSVD6xGlNdKqauqNXPaG53zh74OdygKhBacQKn8MaOEitFn0W3O3x9aRQrFOV0w5KdvfQLLf3bpe14A3ZLV7bN/ZF0vVJN+mwXeSdmK/althrNXN4JN+FzwsloKWIbeCnTtgbx5yOcaZF1Wxd5P+lpui6ItT+b6GNWi3/NdrJFwdYdYY/uQXwjRpdDdHnX5WjxuUS9SXpIdCV5k2WSZKlEG1EhyyopzDpfJhEGhVcWFBbV8z1i+du+NKKNLS+nq4IlzTsOtUwn5cI/IPD1CN84F5L0STSislp5pmm9uUgB6YiF/5IM4wPCn8+VZEW0jwxRTodyRtOMbfH2XpUDzeIEbhb5eLOiXRGiixSrmeR0NKupmJ+14Ms40Oi/iM8Lv7aCBJtEZ6YWMemco1SP80luwa34qvBwVJXRImqfG/4LBGCU5/xaGssAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/assets/tr.png":
/*!***************************!*\
  !*** ./src/assets/tr.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAMCAYAAAC9QufkAAAAZ0lEQVQokaXSMQrCUBAE0PfDFwTxBGLtATy2naVlwBwljb2FGMbGC2QzMOVjYZmW5Imz9bm3JClAmDouOBTwq9UP07H/d23eLcmCoYDHAd8ChKUl6dgV8Gfzw644Fuy8eSQ3nAr48QM+HyOpOSLv9wAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/components/banner.vue":
/*!***********************************!*\
  !*** ./src/components/banner.vue ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_template_compiler_index_id_data_v_1db4e738_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_banner_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-1db4e738","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!../../node_modules/vue-loader/lib/selector?type=template&index=0!./banner.vue */ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-1db4e738\",\"hasScoped\":false,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/banner.vue");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/component-normalizer */ "./node_modules/vue-loader/lib/runtime/component-normalizer.js");
/* script */
var __vue_script__ = null
/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(_node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_1__["default"])(
  __vue_script__,
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_1db4e738_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_banner_vue__WEBPACK_IMPORTED_MODULE_0__["render"],
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_1db4e738_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_banner_vue__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "./src/components/clients.vue":
/*!************************************!*\
  !*** ./src/components/clients.vue ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_template_compiler_index_id_data_v_7400d02f_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_clients_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-7400d02f","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!../../node_modules/vue-loader/lib/selector?type=template&index=0!./clients.vue */ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-7400d02f\",\"hasScoped\":false,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/clients.vue");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/component-normalizer */ "./node_modules/vue-loader/lib/runtime/component-normalizer.js");
/* script */
var __vue_script__ = null
/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(_node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_1__["default"])(
  __vue_script__,
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_7400d02f_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_clients_vue__WEBPACK_IMPORTED_MODULE_0__["render"],
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_7400d02f_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_clients_vue__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "./src/components/feature-info.vue":
/*!*****************************************!*\
  !*** ./src/components/feature-info.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_template_compiler_index_id_data_v_67449a2a_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_feature_info_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-67449a2a","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!../../node_modules/vue-loader/lib/selector?type=template&index=0!./feature-info.vue */ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-67449a2a\",\"hasScoped\":false,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/feature-info.vue");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/component-normalizer */ "./node_modules/vue-loader/lib/runtime/component-normalizer.js");
/* script */
var __vue_script__ = null
/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(_node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_1__["default"])(
  __vue_script__,
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_67449a2a_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_feature_info_vue__WEBPACK_IMPORTED_MODULE_0__["render"],
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_67449a2a_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_feature_info_vue__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "./src/components/features.vue":
/*!*************************************!*\
  !*** ./src/components/features.vue ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_template_compiler_index_id_data_v_4c92e3e2_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_features_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-4c92e3e2","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!../../node_modules/vue-loader/lib/selector?type=template&index=0!./features.vue */ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-4c92e3e2\",\"hasScoped\":false,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/features.vue");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/component-normalizer */ "./node_modules/vue-loader/lib/runtime/component-normalizer.js");
/* script */
var __vue_script__ = null
/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(_node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_1__["default"])(
  __vue_script__,
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_4c92e3e2_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_features_vue__WEBPACK_IMPORTED_MODULE_0__["render"],
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_4c92e3e2_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_features_vue__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "./src/components/footer.vue":
/*!***********************************!*\
  !*** ./src/components/footer.vue ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_template_compiler_index_id_data_v_6664004d_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_footer_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-6664004d","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!../../node_modules/vue-loader/lib/selector?type=template&index=0!./footer.vue */ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-6664004d\",\"hasScoped\":false,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/footer.vue");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/component-normalizer */ "./node_modules/vue-loader/lib/runtime/component-normalizer.js");
/* script */
var __vue_script__ = null
/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(_node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_1__["default"])(
  __vue_script__,
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_6664004d_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_footer_vue__WEBPACK_IMPORTED_MODULE_0__["render"],
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_6664004d_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_footer_vue__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "./src/components/header.vue":
/*!***********************************!*\
  !*** ./src/components/header.vue ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_template_compiler_index_id_data_v_2fde5d9d_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_header_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-2fde5d9d","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!../../node_modules/vue-loader/lib/selector?type=template&index=0!./header.vue */ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-2fde5d9d\",\"hasScoped\":false,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/header.vue");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/component-normalizer */ "./node_modules/vue-loader/lib/runtime/component-normalizer.js");
function injectStyle (context) {
  __webpack_require__(/*! !../../node_modules/extract-text-webpack-plugin/dist/loader.js?{"omit":1,"remove":true}!vue-style-loader!css-loader?{"sourceMap":true}!../../node_modules/vue-loader/lib/style-compiler/index?{"optionsId":"0","vue":true,"scoped":false,"sourceMap":false}!sass-loader?{"sourceMap":true}!../../node_modules/vue-loader/lib/selector?type=styles&index=0!./header.vue */ "./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?{\"sourceMap\":true}!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":false}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/header.vue")
}
/* script */
var __vue_script__ = null
/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(_node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_1__["default"])(
  __vue_script__,
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_2fde5d9d_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_header_vue__WEBPACK_IMPORTED_MODULE_0__["render"],
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_2fde5d9d_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_header_vue__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "./src/components/information.vue":
/*!****************************************!*\
  !*** ./src/components/information.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_template_compiler_index_id_data_v_5dbe0566_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_information_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-5dbe0566","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!../../node_modules/vue-loader/lib/selector?type=template&index=0!./information.vue */ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-5dbe0566\",\"hasScoped\":false,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/information.vue");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/component-normalizer */ "./node_modules/vue-loader/lib/runtime/component-normalizer.js");
/* script */
var __vue_script__ = null
/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(_node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_1__["default"])(
  __vue_script__,
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_5dbe0566_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_information_vue__WEBPACK_IMPORTED_MODULE_0__["render"],
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_5dbe0566_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_information_vue__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "./src/components/trust.vue":
/*!**********************************!*\
  !*** ./src/components/trust.vue ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_template_compiler_index_id_data_v_ed2509b0_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_trust_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-ed2509b0","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!../../node_modules/vue-loader/lib/selector?type=template&index=0!./trust.vue */ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-ed2509b0\",\"hasScoped\":false,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/trust.vue");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/component-normalizer */ "./node_modules/vue-loader/lib/runtime/component-normalizer.js");
/* script */
var __vue_script__ = null
/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(_node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_1__["default"])(
  __vue_script__,
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_ed2509b0_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_trust_vue__WEBPACK_IMPORTED_MODULE_0__["render"],
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_ed2509b0_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_trust_vue__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_css_only_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-css-only/css/bootstrap.min.css */ "./node_modules/bootstrap-css-only/css/bootstrap.min.css");
/* harmony import */ var bootstrap_css_only_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bootstrap_css_only_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mdbvue_build_css_mdb_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mdbvue/build/css/mdb.css */ "./node_modules/mdbvue/build/css/mdb.css");
/* harmony import */ var mdbvue_build_css_mdb_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mdbvue_build_css_mdb_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.vue");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./router */ "./src/router/index.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_router__WEBPACK_IMPORTED_MODULE_4__);
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.





vue__WEBPACK_IMPORTED_MODULE_2__["default"].config.productionTip = false;
/* eslint-disable no-new */
new vue__WEBPACK_IMPORTED_MODULE_2__["default"]({
  el: '#app',
  router: _router__WEBPACK_IMPORTED_MODULE_4___default.a,
  components: { App: _App__WEBPACK_IMPORTED_MODULE_3__["default"] },
  template: '<App/>'
});

/***/ }),

/***/ "./src/router/index.js":
/*!*****************************!*\
  !*** ./src/router/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

//import Vue from 'vue';
//import Router from 'vue-router';
//import Home from '@/components/Home';
//Vue.use(Router);
// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'Home Page',
//       component: Home,
//     },
//
//   ]
// });

/***/ })

/******/ });
//# sourceMappingURL=app.8dcfcbf6a0a3893eff0d.js.map