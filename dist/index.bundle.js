"use strict";
(self["webpackChunkto_do"] = self["webpackChunkto_do"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\r\n*::after,\r\n*::before {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nbody {\r\n  background-color: rgb(246, 246, 246);\r\n  font-family: 'Lato', sans-serif;\r\n}\r\n\r\n/* todolist list base */\r\n#toDoList {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 50%;\r\n  height: auto;\r\n  margin: 300px auto auto auto;\r\n  background-color: white;\r\n  box-shadow: 0 4px 20px 30px rgba(0, 0, 0, 0.137);\r\n}\r\n\r\n::placeholder {\r\n  font-family: 'inter', sans-serif;\r\n  font-style: italic;\r\n  font-size: 14px;\r\n}\r\n\r\n/* title base */\r\n.title {\r\n  background: #fff;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding-right: 23px;\r\n  padding-left: 10px;\r\n  height: 50px;\r\n}\r\n\r\n/* h1 text */\r\n.title1 {\r\n  font-family: 'inter', sans-serif;\r\n  font-size: 15px;\r\n  font-weight: 100;\r\n  font-style: normal;\r\n  padding-top: 8px;\r\n}\r\n\r\n/* icon */\r\ni {\r\n  border: none;\r\n  background: none;\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  cursor: pointer;\r\n}\r\n\r\n/* task list base */\r\n#inputList {\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  background-color: #fff;\r\n  height: 50px;\r\n  padding-right: 10px;\r\n  padding-left: 10px;\r\n}\r\n\r\n.inputTask {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  background-color: #fff;\r\n  border-left: none;\r\n  border-bottom: none;\r\n  border-right: none;\r\n  border-top: 1px solid gray;\r\n  height: 50px;\r\n  padding: 0 10px;\r\n}\r\n\r\n/* refresh icon */\r\n.inputTask i {\r\n  rotate: 90deg;\r\n  cursor: pointer;\r\n}\r\n\r\n/* input text  */\r\n#addList {\r\n  width: 100%;\r\n  height: 45px;\r\n  border: none;\r\n}\r\n\r\n.submiticon {\r\n  padding: 2px;\r\n}\r\n\r\n.remove-edit {\r\n  display: flex;\r\n  justify-items: flex-end;\r\n  margin-left: auto;\r\n  padding-right: 23px;\r\n  text-decoration: none;\r\n}\r\n\r\n/* Clear task button */\r\n#btnClear {\r\n  height: 50px;\r\n  color: rgb(147, 147, 147);\r\n  border-left: none;\r\n  border-bottom: none;\r\n  border-right: none;\r\n  border-top: 1px solid gray;\r\n  font-size: 18px;\r\n  font-family: 'inter', sans-serif;\r\n  cursor: pointer;\r\n}\r\n\r\n/* task list base */\r\n.list {\r\n  background: #fff;\r\n  display: flex;\r\n  gap: 10px;\r\n  align-items: center;\r\n  height: 50px;\r\n  border-top: 1px solid gray;\r\n  padding-left: 10px;\r\n  list-style: none;\r\n}\r\n\r\n/* text */\r\n.tasks label {\r\n  font-family: 'inter', sans-serif;\r\n  padding-left: 10px;\r\n  width: 100%;\r\n}\r\n\r\n/* text */\r\n.lists li:nth-child(3) {\r\n  display: flex;\r\n  justify-items: flex-end;\r\n  margin-left: auto;\r\n  padding-right: 15px;\r\n  text-decoration: none;\r\n}\r\n\r\n/* text checkbox */\r\ninput[type=checkbox]:checked + label {\r\n  text-decoration: line-through;\r\n}\r\n\r\n/* text */\r\ninput {\r\n  font-family: 'inter', sans-serif;\r\n  font-size: 15px;\r\n  font-style: italic;\r\n  font-weight: 100;\r\n}\r\n\r\n/* text */\r\ninput:focus {\r\n  outline: none;\r\n}\r\n\r\n/* text */\r\n.text {\r\n  height: 45px;\r\n  width: 95%;\r\n  padding-left: 5px;\r\n  border: none;\r\n  font-family: 'inter', sans-serif;\r\n  font-size: 15px;\r\n}\r\n\r\n.textcompleted {\r\n  text-decoration: line-through;\r\n  border: none;\r\n  font-size: 17px;\r\n  height: 45px;\r\n  width: 95%;\r\n  padding-left: 5px;\r\n  color: #9b9b9b;\r\n}\r\n\r\n/* edit button */\r\n.edit_list_btn {\r\n  cursor: pointer;\r\n  border: none;\r\n  background: none;\r\n}\r\n\r\n/* remove button */\r\n.remove_btn {\r\n  cursor: pointer;\r\n  display: none;\r\n  border: none;\r\n  background: none;\r\n}\r\n\r\n.checkbox {\r\n  cursor: pointer;\r\n}\r\n\r\n.to-do {\r\n  background: #fff;\r\n  display: flex;\r\n  gap: 10px;\r\n  align-items: center;\r\n  padding-left: 10px;\r\n  list-style: none;\r\n  border-bottom: 0.01px solid #d3d3d3;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;;EAGE,sBAAsB;EACtB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,oCAAoC;EACpC,+BAA+B;AACjC;;AAEA,uBAAuB;AACvB;EACE,aAAa;EACb,sBAAsB;EACtB,UAAU;EACV,YAAY;EACZ,4BAA4B;EAC5B,uBAAuB;EACvB,gDAAgD;AAClD;;AAEA;EACE,gCAAgC;EAChC,kBAAkB;EAClB,eAAe;AACjB;;AAEA,eAAe;AACf;EACE,gBAAgB;EAChB,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,mBAAmB;EACnB,kBAAkB;EAClB,YAAY;AACd;;AAEA,YAAY;AACZ;EACE,gCAAgC;EAChC,eAAe;EACf,gBAAgB;EAChB,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA,SAAS;AACT;EACE,YAAY;EACZ,gBAAgB;EAChB,aAAa;EACb,yBAAyB;EACzB,eAAe;AACjB;;AAEA,mBAAmB;AACnB;EACE,8BAA8B;EAC9B,mBAAmB;EACnB,sBAAsB;EACtB,YAAY;EACZ,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,mBAAmB;EACnB,sBAAsB;EACtB,iBAAiB;EACjB,mBAAmB;EACnB,kBAAkB;EAClB,0BAA0B;EAC1B,YAAY;EACZ,eAAe;AACjB;;AAEA,iBAAiB;AACjB;EACE,aAAa;EACb,eAAe;AACjB;;AAEA,gBAAgB;AAChB;EACE,WAAW;EACX,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,iBAAiB;EACjB,mBAAmB;EACnB,qBAAqB;AACvB;;AAEA,sBAAsB;AACtB;EACE,YAAY;EACZ,yBAAyB;EACzB,iBAAiB;EACjB,mBAAmB;EACnB,kBAAkB;EAClB,0BAA0B;EAC1B,eAAe;EACf,gCAAgC;EAChC,eAAe;AACjB;;AAEA,mBAAmB;AACnB;EACE,gBAAgB;EAChB,aAAa;EACb,SAAS;EACT,mBAAmB;EACnB,YAAY;EACZ,0BAA0B;EAC1B,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA,SAAS;AACT;EACE,gCAAgC;EAChC,kBAAkB;EAClB,WAAW;AACb;;AAEA,SAAS;AACT;EACE,aAAa;EACb,uBAAuB;EACvB,iBAAiB;EACjB,mBAAmB;EACnB,qBAAqB;AACvB;;AAEA,kBAAkB;AAClB;EACE,6BAA6B;AAC/B;;AAEA,SAAS;AACT;EACE,gCAAgC;EAChC,eAAe;EACf,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA,SAAS;AACT;EACE,aAAa;AACf;;AAEA,SAAS;AACT;EACE,YAAY;EACZ,UAAU;EACV,iBAAiB;EACjB,YAAY;EACZ,gCAAgC;EAChC,eAAe;AACjB;;AAEA;EACE,6BAA6B;EAC7B,YAAY;EACZ,eAAe;EACf,YAAY;EACZ,UAAU;EACV,iBAAiB;EACjB,cAAc;AAChB;;AAEA,gBAAgB;AAChB;EACE,eAAe;EACf,YAAY;EACZ,gBAAgB;AAClB;;AAEA,kBAAkB;AAClB;EACE,eAAe;EACf,aAAa;EACb,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,SAAS;EACT,mBAAmB;EACnB,kBAAkB;EAClB,gBAAgB;EAChB,mCAAmC;AACrC","sourcesContent":["*,\r\n*::after,\r\n*::before {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nbody {\r\n  background-color: rgb(246, 246, 246);\r\n  font-family: 'Lato', sans-serif;\r\n}\r\n\r\n/* todolist list base */\r\n#toDoList {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 50%;\r\n  height: auto;\r\n  margin: 300px auto auto auto;\r\n  background-color: white;\r\n  box-shadow: 0 4px 20px 30px rgba(0, 0, 0, 0.137);\r\n}\r\n\r\n::placeholder {\r\n  font-family: 'inter', sans-serif;\r\n  font-style: italic;\r\n  font-size: 14px;\r\n}\r\n\r\n/* title base */\r\n.title {\r\n  background: #fff;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding-right: 23px;\r\n  padding-left: 10px;\r\n  height: 50px;\r\n}\r\n\r\n/* h1 text */\r\n.title1 {\r\n  font-family: 'inter', sans-serif;\r\n  font-size: 15px;\r\n  font-weight: 100;\r\n  font-style: normal;\r\n  padding-top: 8px;\r\n}\r\n\r\n/* icon */\r\ni {\r\n  border: none;\r\n  background: none;\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  cursor: pointer;\r\n}\r\n\r\n/* task list base */\r\n#inputList {\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  background-color: #fff;\r\n  height: 50px;\r\n  padding-right: 10px;\r\n  padding-left: 10px;\r\n}\r\n\r\n.inputTask {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  background-color: #fff;\r\n  border-left: none;\r\n  border-bottom: none;\r\n  border-right: none;\r\n  border-top: 1px solid gray;\r\n  height: 50px;\r\n  padding: 0 10px;\r\n}\r\n\r\n/* refresh icon */\r\n.inputTask i {\r\n  rotate: 90deg;\r\n  cursor: pointer;\r\n}\r\n\r\n/* input text  */\r\n#addList {\r\n  width: 100%;\r\n  height: 45px;\r\n  border: none;\r\n}\r\n\r\n.submiticon {\r\n  padding: 2px;\r\n}\r\n\r\n.remove-edit {\r\n  display: flex;\r\n  justify-items: flex-end;\r\n  margin-left: auto;\r\n  padding-right: 23px;\r\n  text-decoration: none;\r\n}\r\n\r\n/* Clear task button */\r\n#btnClear {\r\n  height: 50px;\r\n  color: rgb(147, 147, 147);\r\n  border-left: none;\r\n  border-bottom: none;\r\n  border-right: none;\r\n  border-top: 1px solid gray;\r\n  font-size: 18px;\r\n  font-family: 'inter', sans-serif;\r\n  cursor: pointer;\r\n}\r\n\r\n/* task list base */\r\n.list {\r\n  background: #fff;\r\n  display: flex;\r\n  gap: 10px;\r\n  align-items: center;\r\n  height: 50px;\r\n  border-top: 1px solid gray;\r\n  padding-left: 10px;\r\n  list-style: none;\r\n}\r\n\r\n/* text */\r\n.tasks label {\r\n  font-family: 'inter', sans-serif;\r\n  padding-left: 10px;\r\n  width: 100%;\r\n}\r\n\r\n/* text */\r\n.lists li:nth-child(3) {\r\n  display: flex;\r\n  justify-items: flex-end;\r\n  margin-left: auto;\r\n  padding-right: 15px;\r\n  text-decoration: none;\r\n}\r\n\r\n/* text checkbox */\r\ninput[type=checkbox]:checked + label {\r\n  text-decoration: line-through;\r\n}\r\n\r\n/* text */\r\ninput {\r\n  font-family: 'inter', sans-serif;\r\n  font-size: 15px;\r\n  font-style: italic;\r\n  font-weight: 100;\r\n}\r\n\r\n/* text */\r\ninput:focus {\r\n  outline: none;\r\n}\r\n\r\n/* text */\r\n.text {\r\n  height: 45px;\r\n  width: 95%;\r\n  padding-left: 5px;\r\n  border: none;\r\n  font-family: 'inter', sans-serif;\r\n  font-size: 15px;\r\n}\r\n\r\n.textcompleted {\r\n  text-decoration: line-through;\r\n  border: none;\r\n  font-size: 17px;\r\n  height: 45px;\r\n  width: 95%;\r\n  padding-left: 5px;\r\n  color: #9b9b9b;\r\n}\r\n\r\n/* edit button */\r\n.edit_list_btn {\r\n  cursor: pointer;\r\n  border: none;\r\n  background: none;\r\n}\r\n\r\n/* remove button */\r\n.remove_btn {\r\n  cursor: pointer;\r\n  display: none;\r\n  border: none;\r\n  background: none;\r\n}\r\n\r\n.checkbox {\r\n  cursor: pointer;\r\n}\r\n\r\n.to-do {\r\n  background: #fff;\r\n  display: flex;\r\n  gap: 10px;\r\n  align-items: center;\r\n  padding-left: 10px;\r\n  list-style: none;\r\n  border-bottom: 0.01px solid #d3d3d3;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/activities.js":
/*!***************************!*\
  !*** ./src/activities.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Activites)
/* harmony export */ });
/* harmony import */ var _process_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./process.js */ "./src/process.js");


class Activites {
    static changeCompletedListCheck = (statusCheck, id) => {
      const toDoLists = _process_js__WEBPACK_IMPORTED_MODULE_0__["default"].getToDoListFromStorage();
      toDoLists[id].completed = statusCheck;
      _process_js__WEBPACK_IMPORTED_MODULE_0__["default"].addListToStorage(toDoLists);
      _process_js__WEBPACK_IMPORTED_MODULE_0__["default"].showLists();
    }

    // checkbox status
    static checkStatusEvent = () => (
      document.querySelectorAll('.checkbox').forEach((checkbox) => checkbox.addEventListener('change', () => {
        let statusCheck;
        let id;
        if (checkbox.id > 0) {
          id = checkbox.id - 1;
        } else {
          id = 0;
        }

        if (checkbox.checked === true) {
          statusCheck = true;
        } else if (checkbox.checked !== true) {
          statusCheck = false;
        }

        this.changeCompletedListCheck(statusCheck, id);
      }))
    )

    static clearCompletedToDoLists = () => {
      let toDoLists = _process_js__WEBPACK_IMPORTED_MODULE_0__["default"].getToDoListFromStorage();

      toDoLists = toDoLists.filter((item) => item.completed !== true);
      _process_js__WEBPACK_IMPORTED_MODULE_0__["default"].newIndexNum(toDoLists);
      _process_js__WEBPACK_IMPORTED_MODULE_0__["default"].addListToStorage(toDoLists);
      _process_js__WEBPACK_IMPORTED_MODULE_0__["default"].showLists();
    }
}


/***/ }),

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Data)
/* harmony export */ });
// data

class Data {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _process_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./process.js */ "./src/process.js");
/* harmony import */ var _activities_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./activities.js */ "./src/activities.js");





const inputList = document.getElementById('inputList');
const addList = document.getElementById('addList');

inputList.addEventListener('submit', (e) => {
  e.preventDefault();
  _process_js__WEBPACK_IMPORTED_MODULE_1__["default"].addLists(addList.value);
  addList.value = '';
});

document.querySelector('#btnClear').addEventListener('click', _activities_js__WEBPACK_IMPORTED_MODULE_2__["default"].clearCompletedToDoLists);

window.addEventListener('load', () => {
  document.addEventListener('listUpdated', () => {
    _activities_js__WEBPACK_IMPORTED_MODULE_2__["default"].checkStatusEvent();
  }, false);
  _activities_js__WEBPACK_IMPORTED_MODULE_2__["default"].checkStatusEvent();
});

_process_js__WEBPACK_IMPORTED_MODULE_1__["default"].showLists();

/***/ }),

/***/ "./src/process.js":
/*!************************!*\
  !*** ./src/process.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ display)
/* harmony export */ });
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.js */ "./src/data.js");


// get inputs from local storage

class display {
  static getToDoListFromStorage = () => {
    let toDoLists;

    if (JSON.parse(localStorage.getItem('LocalData')) === null) {
      toDoLists = [];
    } else {
      toDoLists = JSON.parse(localStorage.getItem('LocalData'));
    }
    return toDoLists;
  };

  // add inputs to the local storage
  static addListToStorage = (toDoLists) => {
    const item = JSON.stringify(toDoLists);
    localStorage.setItem('LocalData', item);
  };

  // inputs by number with index
  static newIndexNum = (toDoLists) => {
    toDoLists.forEach((item, i) => {
      item.index = i + 1;
    });
  }

  // delete from local storage
    static deleteListData = (id) => {
      let toDoLists = this.getToDoListFromStorage();
      const ListItemToDelete = toDoLists[id];

      toDoLists = toDoLists.filter((item) => item !== ListItemToDelete);

      this.newIndexNum(toDoLists);
      this.addListToStorage(toDoLists);
    };

    static ListInputUpdate = (newDescription, id) => {
      const toDoLists = this.getToDoListFromStorage();
      const updateList = toDoLists[id];

      toDoLists.forEach((item) => {
        if (item === updateList) {
          item.description = newDescription;
        }
      });

      this.addListToStorage(toDoLists);
      this.showLists();
    };

    static removeToDoListBtn = () => {
      document.querySelectorAll('.remove_btn').forEach((button) => button.addEventListener('click', (event) => {
        event.preventDefault();
        let id;
        if (button.id > 0) {
          id = button.id - 1;
        } else {
          id = 0;
        }
        this.deleteListData(id);
        this.showLists();
      }));
    };

    // section created dynamiclly
    static toDoListsHtml = ({ description, index }, statusCheck, statusCompleted) => {
      const ul = document.createElement('ul');
      ul.className = 'to-do';
      ul.innerHTML = `
        <li><input class="checkbox" id="${index}" type="checkbox" ${statusCheck}></li> 
        <li><input id="LIST${index}" type="text" class="text${statusCompleted}" value="${description}" readonly></li>
        <li class="remove-edit">
        <button class="edit_list_btn" id="${index}"><i class="fa fa-ellipsis-v icon"></i></button>
        <button class="remove_btn" id="${index}"><i class="fa fa-trash-can icon"></i></button>
        </li>
      `;
      return ul;
    }

    // show listed tasks
    static showLists = () => {
      const toDoLists = this.getToDoListFromStorage();
      document.querySelector('.toDoListContainer').innerHTML = '';
      toDoLists.forEach((item) => {
        let statusCheck;
        let statusCompleted;
        if (item.completed === true) {
          statusCheck = 'checked';
          statusCompleted = 'completed';
        } else {
          statusCheck = '';
          statusCompleted = '';
        }
        document.querySelector('.toDoListContainer').appendChild(this.toDoListsHtml(item, statusCheck, statusCompleted));
      });

      this.removeToDoListBtn();
      this.editListBtnEvent();
      this.updateListBtnEvent();

      const event = new Event('listUpdated');
      document.dispatchEvent(event);
    };

    // add a task to a list
    static addLists = (description) => {
      const toDoLists = this.getToDoListFromStorage();
      const index = toDoLists.length + 1;
      const newtask = new _data_js__WEBPACK_IMPORTED_MODULE_0__["default"](description, false, index);

      toDoLists.push(newtask);
      this.addListToStorage(toDoLists);
      this.showLists();
    }

    // update to do list
    static updateListBtnEvent = () => {
      document.querySelectorAll('.text').forEach((input) => input.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
          event.preventDefault();
          const inputListId = 'LIST';
          const ListIdSelected = event.currentTarget.id;
          let listID;

          if (!ListIdSelected.includes('LIST')) {
            listID = inputListId.concat(ListIdSelected);
          } else {
            listID = ListIdSelected;
          }

          document.getElementById(listID).setAttribute('readonly', 'readonly');
          this.ListInputUpdate(document.getElementById(listID).value, (Number(listID.replace('LIST', '')) - 1));
        }
      }));
    }

    // edit list
    static editListBtnEvent = () => {
      let previousList = null;
      document.querySelectorAll('.edit_list_btn').forEach((button) => button.addEventListener('click', (event) => {
        event.preventDefault();
        const inputListId = 'LIST';
        const ListIdSelected = event.currentTarget.id;
        let listID;

        if (!ListIdSelected.includes('LIST')) {
          listID = inputListId.concat(ListIdSelected);
        } else {
          listID = ListIdSelected;
        }

        if (previousList !== null) {
          previousList.getElementById(listID).removeAttribute('readonly');
        }

        const listItem = event.target.closest('li');
        previousList = listItem;
        const ulItem = event.target.closest('ul');

        listItem.style.background = 'rgb(230, 230, 184)';
        ulItem.style.background = 'rgb(230, 230, 184)';

        document.getElementById(listID).removeAttribute('readonly');
        document.getElementById(listID).focus();
        document.getElementById(listID).style.background = 'rgb(230, 230, 184)';
        listItem.querySelector('.edit_list_btn').style.display = 'none';
        listItem.querySelector('.remove_btn').style.display = 'block';
      }));
    };
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9hY3Rpdml0aWVzLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2RhdGEuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvcHJvY2Vzcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiosXFxyXFxuKjo6YWZ0ZXIsXFxyXFxuKjo6YmVmb3JlIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDYsIDI0NiwgMjQ2KTtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbi8qIHRvZG9saXN0IGxpc3QgYmFzZSAqL1xcclxcbiN0b0RvTGlzdCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxuICBtYXJnaW46IDMwMHB4IGF1dG8gYXV0byBhdXRvO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBib3gtc2hhZG93OiAwIDRweCAyMHB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjEzNyk7XFxyXFxufVxcclxcblxcclxcbjo6cGxhY2Vob2xkZXIge1xcclxcbiAgZm9udC1mYW1pbHk6ICdpbnRlcicsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICBmb250LXNpemU6IDE0cHg7XFxyXFxufVxcclxcblxcclxcbi8qIHRpdGxlIGJhc2UgKi9cXHJcXG4udGl0bGUge1xcclxcbiAgYmFja2dyb3VuZDogI2ZmZjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZy1yaWdodDogMjNweDtcXHJcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogaDEgdGV4dCAqL1xcclxcbi50aXRsZTEge1xcclxcbiAgZm9udC1mYW1pbHk6ICdpbnRlcicsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXNpemU6IDE1cHg7XFxyXFxuICBmb250LXdlaWdodDogMTAwO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgcGFkZGluZy10b3A6IDhweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogaWNvbiAqL1xcclxcbmkge1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4vKiB0YXNrIGxpc3QgYmFzZSAqL1xcclxcbiNpbnB1dExpc3Qge1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICBoZWlnaHQ6IDUwcHg7XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcclxcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXRUYXNrIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICBib3JkZXItbGVmdDogbm9uZTtcXHJcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XFxyXFxuICBib3JkZXItcmlnaHQ6IG5vbmU7XFxyXFxuICBib3JkZXItdG9wOiAxcHggc29saWQgZ3JheTtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIHBhZGRpbmc6IDAgMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogcmVmcmVzaCBpY29uICovXFxyXFxuLmlucHV0VGFzayBpIHtcXHJcXG4gIHJvdGF0ZTogOTBkZWc7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi8qIGlucHV0IHRleHQgICovXFxyXFxuI2FkZExpc3Qge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDQ1cHg7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5zdWJtaXRpY29uIHtcXHJcXG4gIHBhZGRpbmc6IDJweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlbW92ZS1lZGl0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWl0ZW1zOiBmbGV4LWVuZDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgcGFkZGluZy1yaWdodDogMjNweDtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogQ2xlYXIgdGFzayBidXR0b24gKi9cXHJcXG4jYnRuQ2xlYXIge1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgY29sb3I6IHJnYigxNDcsIDE0NywgMTQ3KTtcXHJcXG4gIGJvcmRlci1sZWZ0OiBub25lO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXHJcXG4gIGJvcmRlci1yaWdodDogbm9uZTtcXHJcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCBncmF5O1xcclxcbiAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgZm9udC1mYW1pbHk6ICdpbnRlcicsIHNhbnMtc2VyaWY7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi8qIHRhc2sgbGlzdCBiYXNlICovXFxyXFxuLmxpc3Qge1xcclxcbiAgYmFja2dyb3VuZDogI2ZmZjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGdyYXk7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKiB0ZXh0ICovXFxyXFxuLnRhc2tzIGxhYmVsIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnaW50ZXInLCBzYW5zLXNlcmlmO1xcclxcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi8qIHRleHQgKi9cXHJcXG4ubGlzdHMgbGk6bnRoLWNoaWxkKDMpIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWl0ZW1zOiBmbGV4LWVuZDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgcGFkZGluZy1yaWdodDogMTVweDtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogdGV4dCBjaGVja2JveCAqL1xcclxcbmlucHV0W3R5cGU9Y2hlY2tib3hdOmNoZWNrZWQgKyBsYWJlbCB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXHJcXG59XFxyXFxuXFxyXFxuLyogdGV4dCAqL1xcclxcbmlucHV0IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnaW50ZXInLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgZm9udC13ZWlnaHQ6IDEwMDtcXHJcXG59XFxyXFxuXFxyXFxuLyogdGV4dCAqL1xcclxcbmlucHV0OmZvY3VzIHtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qIHRleHQgKi9cXHJcXG4udGV4dCB7XFxyXFxuICBoZWlnaHQ6IDQ1cHg7XFxyXFxuICB3aWR0aDogOTUlO1xcclxcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBmb250LWZhbWlseTogJ2ludGVyJywgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtc2l6ZTogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRleHRjb21wbGV0ZWQge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBmb250LXNpemU6IDE3cHg7XFxyXFxuICBoZWlnaHQ6IDQ1cHg7XFxyXFxuICB3aWR0aDogOTUlO1xcclxcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XFxyXFxuICBjb2xvcjogIzliOWI5YjtcXHJcXG59XFxyXFxuXFxyXFxuLyogZWRpdCBidXR0b24gKi9cXHJcXG4uZWRpdF9saXN0X2J0biB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKiByZW1vdmUgYnV0dG9uICovXFxyXFxuLnJlbW92ZV9idG4ge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5jaGVja2JveCB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50by1kbyB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMC4wMXB4IHNvbGlkICNkM2QzZDM7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7OztFQUdFLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLCtCQUErQjtBQUNqQzs7QUFFQSx1QkFBdUI7QUFDdkI7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVixZQUFZO0VBQ1osNEJBQTRCO0VBQzVCLHVCQUF1QjtFQUN2QixnREFBZ0Q7QUFDbEQ7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUEsZUFBZTtBQUNmO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBLFlBQVk7QUFDWjtFQUNFLGdDQUFnQztFQUNoQyxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUEsU0FBUztBQUNUO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLGVBQWU7QUFDakI7O0FBRUEsbUJBQW1CO0FBQ25CO0VBQ0UsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLDBCQUEwQjtFQUMxQixZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQSxpQkFBaUI7QUFDakI7RUFDRSxhQUFhO0VBQ2IsZUFBZTtBQUNqQjs7QUFFQSxnQkFBZ0I7QUFDaEI7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixxQkFBcUI7QUFDdkI7O0FBRUEsc0JBQXNCO0FBQ3RCO0VBQ0UsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQiwwQkFBMEI7RUFDMUIsZUFBZTtFQUNmLGdDQUFnQztFQUNoQyxlQUFlO0FBQ2pCOztBQUVBLG1CQUFtQjtBQUNuQjtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsU0FBUztFQUNULG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osMEJBQTBCO0VBQzFCLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUEsU0FBUztBQUNUO0VBQ0UsZ0NBQWdDO0VBQ2hDLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBRUEsU0FBUztBQUNUO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLHFCQUFxQjtBQUN2Qjs7QUFFQSxrQkFBa0I7QUFDbEI7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUEsU0FBUztBQUNUO0VBQ0UsZ0NBQWdDO0VBQ2hDLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBLFNBQVM7QUFDVDtFQUNFLGFBQWE7QUFDZjs7QUFFQSxTQUFTO0FBQ1Q7RUFDRSxZQUFZO0VBQ1osVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osZ0NBQWdDO0VBQ2hDLGVBQWU7QUFDakI7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsWUFBWTtFQUNaLGVBQWU7RUFDZixZQUFZO0VBQ1osVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCOztBQUVBLGdCQUFnQjtBQUNoQjtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBLGtCQUFrQjtBQUNsQjtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2IsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLFNBQVM7RUFDVCxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixtQ0FBbUM7QUFDckNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKixcXHJcXG4qOjphZnRlcixcXHJcXG4qOjpiZWZvcmUge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NiwgMjQ2LCAyNDYpO1xcclxcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuLyogdG9kb2xpc3QgbGlzdCBiYXNlICovXFxyXFxuI3RvRG9MaXN0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG4gIG1hcmdpbjogMzAwcHggYXV0byBhdXRvIGF1dG87XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDIwcHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMTM3KTtcXHJcXG59XFxyXFxuXFxyXFxuOjpwbGFjZWhvbGRlciB7XFxyXFxuICBmb250LWZhbWlseTogJ2ludGVyJywgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogdGl0bGUgYmFzZSAqL1xcclxcbi50aXRsZSB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiAyM3B4O1xcclxcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBoMSB0ZXh0ICovXFxyXFxuLnRpdGxlMSB7XFxyXFxuICBmb250LWZhbWlseTogJ2ludGVyJywgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBwYWRkaW5nLXRvcDogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBpY29uICovXFxyXFxuaSB7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi8qIHRhc2sgbGlzdCBiYXNlICovXFxyXFxuI2lucHV0TGlzdCB7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5pbnB1dFRhc2sge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIGJvcmRlci1sZWZ0OiBub25lO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXHJcXG4gIGJvcmRlci1yaWdodDogbm9uZTtcXHJcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCBncmF5O1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgcGFkZGluZzogMCAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiByZWZyZXNoIGljb24gKi9cXHJcXG4uaW5wdXRUYXNrIGkge1xcclxcbiAgcm90YXRlOiA5MGRlZztcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLyogaW5wdXQgdGV4dCAgKi9cXHJcXG4jYWRkTGlzdCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogNDVweDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnN1Ym1pdGljb24ge1xcclxcbiAgcGFkZGluZzogMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucmVtb3ZlLWVkaXQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktaXRlbXM6IGZsZXgtZW5kO1xcclxcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiAyM3B4O1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBDbGVhciB0YXNrIGJ1dHRvbiAqL1xcclxcbiNidG5DbGVhciB7XFxyXFxuICBoZWlnaHQ6IDUwcHg7XFxyXFxuICBjb2xvcjogcmdiKDE0NywgMTQ3LCAxNDcpO1xcclxcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxyXFxuICBib3JkZXItYm90dG9tOiBub25lO1xcclxcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xcclxcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGdyYXk7XFxyXFxuICBmb250LXNpemU6IDE4cHg7XFxyXFxuICBmb250LWZhbWlseTogJ2ludGVyJywgc2Fucy1zZXJpZjtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLyogdGFzayBsaXN0IGJhc2UgKi9cXHJcXG4ubGlzdCB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBoZWlnaHQ6IDUwcHg7XFxyXFxuICBib3JkZXItdG9wOiAxcHggc29saWQgZ3JheTtcXHJcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qIHRleHQgKi9cXHJcXG4udGFza3MgbGFiZWwge1xcclxcbiAgZm9udC1mYW1pbHk6ICdpbnRlcicsIHNhbnMtc2VyaWY7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLyogdGV4dCAqL1xcclxcbi5saXN0cyBsaTpudGgtY2hpbGQoMykge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktaXRlbXM6IGZsZXgtZW5kO1xcclxcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKiB0ZXh0IGNoZWNrYm94ICovXFxyXFxuaW5wdXRbdHlwZT1jaGVja2JveF06Y2hlY2tlZCArIGxhYmVsIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcclxcbn1cXHJcXG5cXHJcXG4vKiB0ZXh0ICovXFxyXFxuaW5wdXQge1xcclxcbiAgZm9udC1mYW1pbHk6ICdpbnRlcicsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXNpemU6IDE1cHg7XFxyXFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICBmb250LXdlaWdodDogMTAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKiB0ZXh0ICovXFxyXFxuaW5wdXQ6Zm9jdXMge1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogdGV4dCAqL1xcclxcbi50ZXh0IHtcXHJcXG4gIGhlaWdodDogNDVweDtcXHJcXG4gIHdpZHRoOiA5NSU7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDVweDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnaW50ZXInLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zaXplOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGV4dGNvbXBsZXRlZCB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGZvbnQtc2l6ZTogMTdweDtcXHJcXG4gIGhlaWdodDogNDVweDtcXHJcXG4gIHdpZHRoOiA5NSU7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDVweDtcXHJcXG4gIGNvbG9yOiAjOWI5YjliO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBlZGl0IGJ1dHRvbiAqL1xcclxcbi5lZGl0X2xpc3RfYnRuIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qIHJlbW92ZSBidXR0b24gKi9cXHJcXG4ucmVtb3ZlX2J0biB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNoZWNrYm94IHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRvLWRvIHtcXHJcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBib3JkZXItYm90dG9tOiAwLjAxcHggc29saWQgI2QzZDNkMztcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGRpc3BsYXkgZnJvbSAnLi9wcm9jZXNzLmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFjdGl2aXRlcyB7XHJcbiAgICBzdGF0aWMgY2hhbmdlQ29tcGxldGVkTGlzdENoZWNrID0gKHN0YXR1c0NoZWNrLCBpZCkgPT4ge1xyXG4gICAgICBjb25zdCB0b0RvTGlzdHMgPSBkaXNwbGF5LmdldFRvRG9MaXN0RnJvbVN0b3JhZ2UoKTtcclxuICAgICAgdG9Eb0xpc3RzW2lkXS5jb21wbGV0ZWQgPSBzdGF0dXNDaGVjaztcclxuICAgICAgZGlzcGxheS5hZGRMaXN0VG9TdG9yYWdlKHRvRG9MaXN0cyk7XHJcbiAgICAgIGRpc3BsYXkuc2hvd0xpc3RzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gY2hlY2tib3ggc3RhdHVzXHJcbiAgICBzdGF0aWMgY2hlY2tTdGF0dXNFdmVudCA9ICgpID0+IChcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNoZWNrYm94JykuZm9yRWFjaCgoY2hlY2tib3gpID0+IGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcclxuICAgICAgICBsZXQgc3RhdHVzQ2hlY2s7XHJcbiAgICAgICAgbGV0IGlkO1xyXG4gICAgICAgIGlmIChjaGVja2JveC5pZCA+IDApIHtcclxuICAgICAgICAgIGlkID0gY2hlY2tib3guaWQgLSAxO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpZCA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY2hlY2tib3guY2hlY2tlZCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgc3RhdHVzQ2hlY2sgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoY2hlY2tib3guY2hlY2tlZCAhPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgc3RhdHVzQ2hlY2sgPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY2hhbmdlQ29tcGxldGVkTGlzdENoZWNrKHN0YXR1c0NoZWNrLCBpZCk7XHJcbiAgICAgIH0pKVxyXG4gICAgKVxyXG5cclxuICAgIHN0YXRpYyBjbGVhckNvbXBsZXRlZFRvRG9MaXN0cyA9ICgpID0+IHtcclxuICAgICAgbGV0IHRvRG9MaXN0cyA9IGRpc3BsYXkuZ2V0VG9Eb0xpc3RGcm9tU3RvcmFnZSgpO1xyXG5cclxuICAgICAgdG9Eb0xpc3RzID0gdG9Eb0xpc3RzLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5jb21wbGV0ZWQgIT09IHRydWUpO1xyXG4gICAgICBkaXNwbGF5Lm5ld0luZGV4TnVtKHRvRG9MaXN0cyk7XHJcbiAgICAgIGRpc3BsYXkuYWRkTGlzdFRvU3RvcmFnZSh0b0RvTGlzdHMpO1xyXG4gICAgICBkaXNwbGF5LnNob3dMaXN0cygpO1xyXG4gICAgfVxyXG59XHJcbiIsIi8vIGRhdGFcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhdGEge1xyXG4gIGNvbnN0cnVjdG9yKGRlc2NyaXB0aW9uLCBjb21wbGV0ZWQsIGluZGV4KSB7XHJcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICB0aGlzLmNvbXBsZXRlZCA9IGNvbXBsZXRlZDtcclxuICAgIHRoaXMuaW5kZXggPSBpbmRleDtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcblxyXG5pbXBvcnQgZGlzcGxheSBmcm9tICcuL3Byb2Nlc3MuanMnO1xyXG5pbXBvcnQgQWN0aXZpdGVzIGZyb20gJy4vYWN0aXZpdGllcy5qcyc7XHJcblxyXG5jb25zdCBpbnB1dExpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXRMaXN0Jyk7XHJcbmNvbnN0IGFkZExpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkTGlzdCcpO1xyXG5cclxuaW5wdXRMaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIGRpc3BsYXkuYWRkTGlzdHMoYWRkTGlzdC52YWx1ZSk7XHJcbiAgYWRkTGlzdC52YWx1ZSA9ICcnO1xyXG59KTtcclxuXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidG5DbGVhcicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgQWN0aXZpdGVzLmNsZWFyQ29tcGxldGVkVG9Eb0xpc3RzKTtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xyXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2xpc3RVcGRhdGVkJywgKCkgPT4ge1xyXG4gICAgQWN0aXZpdGVzLmNoZWNrU3RhdHVzRXZlbnQoKTtcclxuICB9LCBmYWxzZSk7XHJcbiAgQWN0aXZpdGVzLmNoZWNrU3RhdHVzRXZlbnQoKTtcclxufSk7XHJcblxyXG5kaXNwbGF5LnNob3dMaXN0cygpOyIsImltcG9ydCBEYXRhIGZyb20gJy4vZGF0YS5qcyc7XHJcblxyXG4vLyBnZXQgaW5wdXRzIGZyb20gbG9jYWwgc3RvcmFnZVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZGlzcGxheSB7XHJcbiAgc3RhdGljIGdldFRvRG9MaXN0RnJvbVN0b3JhZ2UgPSAoKSA9PiB7XHJcbiAgICBsZXQgdG9Eb0xpc3RzO1xyXG5cclxuICAgIGlmIChKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdMb2NhbERhdGEnKSkgPT09IG51bGwpIHtcclxuICAgICAgdG9Eb0xpc3RzID0gW107XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0b0RvTGlzdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdMb2NhbERhdGEnKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdG9Eb0xpc3RzO1xyXG4gIH07XHJcblxyXG4gIC8vIGFkZCBpbnB1dHMgdG8gdGhlIGxvY2FsIHN0b3JhZ2VcclxuICBzdGF0aWMgYWRkTGlzdFRvU3RvcmFnZSA9ICh0b0RvTGlzdHMpID0+IHtcclxuICAgIGNvbnN0IGl0ZW0gPSBKU09OLnN0cmluZ2lmeSh0b0RvTGlzdHMpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ0xvY2FsRGF0YScsIGl0ZW0pO1xyXG4gIH07XHJcblxyXG4gIC8vIGlucHV0cyBieSBudW1iZXIgd2l0aCBpbmRleFxyXG4gIHN0YXRpYyBuZXdJbmRleE51bSA9ICh0b0RvTGlzdHMpID0+IHtcclxuICAgIHRvRG9MaXN0cy5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XHJcbiAgICAgIGl0ZW0uaW5kZXggPSBpICsgMTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8gZGVsZXRlIGZyb20gbG9jYWwgc3RvcmFnZVxyXG4gICAgc3RhdGljIGRlbGV0ZUxpc3REYXRhID0gKGlkKSA9PiB7XHJcbiAgICAgIGxldCB0b0RvTGlzdHMgPSB0aGlzLmdldFRvRG9MaXN0RnJvbVN0b3JhZ2UoKTtcclxuICAgICAgY29uc3QgTGlzdEl0ZW1Ub0RlbGV0ZSA9IHRvRG9MaXN0c1tpZF07XHJcblxyXG4gICAgICB0b0RvTGlzdHMgPSB0b0RvTGlzdHMuZmlsdGVyKChpdGVtKSA9PiBpdGVtICE9PSBMaXN0SXRlbVRvRGVsZXRlKTtcclxuXHJcbiAgICAgIHRoaXMubmV3SW5kZXhOdW0odG9Eb0xpc3RzKTtcclxuICAgICAgdGhpcy5hZGRMaXN0VG9TdG9yYWdlKHRvRG9MaXN0cyk7XHJcbiAgICB9O1xyXG5cclxuICAgIHN0YXRpYyBMaXN0SW5wdXRVcGRhdGUgPSAobmV3RGVzY3JpcHRpb24sIGlkKSA9PiB7XHJcbiAgICAgIGNvbnN0IHRvRG9MaXN0cyA9IHRoaXMuZ2V0VG9Eb0xpc3RGcm9tU3RvcmFnZSgpO1xyXG4gICAgICBjb25zdCB1cGRhdGVMaXN0ID0gdG9Eb0xpc3RzW2lkXTtcclxuXHJcbiAgICAgIHRvRG9MaXN0cy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgaWYgKGl0ZW0gPT09IHVwZGF0ZUxpc3QpIHtcclxuICAgICAgICAgIGl0ZW0uZGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvbjtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdGhpcy5hZGRMaXN0VG9TdG9yYWdlKHRvRG9MaXN0cyk7XHJcbiAgICAgIHRoaXMuc2hvd0xpc3RzKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHN0YXRpYyByZW1vdmVUb0RvTGlzdEJ0biA9ICgpID0+IHtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlbW92ZV9idG4nKS5mb3JFYWNoKChidXR0b24pID0+IGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgbGV0IGlkO1xyXG4gICAgICAgIGlmIChidXR0b24uaWQgPiAwKSB7XHJcbiAgICAgICAgICBpZCA9IGJ1dHRvbi5pZCAtIDE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGlkID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5kZWxldGVMaXN0RGF0YShpZCk7XHJcbiAgICAgICAgdGhpcy5zaG93TGlzdHMoKTtcclxuICAgICAgfSkpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBzZWN0aW9uIGNyZWF0ZWQgZHluYW1pY2xseVxyXG4gICAgc3RhdGljIHRvRG9MaXN0c0h0bWwgPSAoeyBkZXNjcmlwdGlvbiwgaW5kZXggfSwgc3RhdHVzQ2hlY2ssIHN0YXR1c0NvbXBsZXRlZCkgPT4ge1xyXG4gICAgICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgICAgIHVsLmNsYXNzTmFtZSA9ICd0by1kbyc7XHJcbiAgICAgIHVsLmlubmVySFRNTCA9IGBcclxuICAgICAgICA8bGk+PGlucHV0IGNsYXNzPVwiY2hlY2tib3hcIiBpZD1cIiR7aW5kZXh9XCIgdHlwZT1cImNoZWNrYm94XCIgJHtzdGF0dXNDaGVja30+PC9saT4gXHJcbiAgICAgICAgPGxpPjxpbnB1dCBpZD1cIkxJU1Qke2luZGV4fVwiIHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJ0ZXh0JHtzdGF0dXNDb21wbGV0ZWR9XCIgdmFsdWU9XCIke2Rlc2NyaXB0aW9ufVwiIHJlYWRvbmx5PjwvbGk+XHJcbiAgICAgICAgPGxpIGNsYXNzPVwicmVtb3ZlLWVkaXRcIj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZWRpdF9saXN0X2J0blwiIGlkPVwiJHtpbmRleH1cIj48aSBjbGFzcz1cImZhIGZhLWVsbGlwc2lzLXYgaWNvblwiPjwvaT48L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwicmVtb3ZlX2J0blwiIGlkPVwiJHtpbmRleH1cIj48aSBjbGFzcz1cImZhIGZhLXRyYXNoLWNhbiBpY29uXCI+PC9pPjwvYnV0dG9uPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgIGA7XHJcbiAgICAgIHJldHVybiB1bDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBzaG93IGxpc3RlZCB0YXNrc1xyXG4gICAgc3RhdGljIHNob3dMaXN0cyA9ICgpID0+IHtcclxuICAgICAgY29uc3QgdG9Eb0xpc3RzID0gdGhpcy5nZXRUb0RvTGlzdEZyb21TdG9yYWdlKCk7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b0RvTGlzdENvbnRhaW5lcicpLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICB0b0RvTGlzdHMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIGxldCBzdGF0dXNDaGVjaztcclxuICAgICAgICBsZXQgc3RhdHVzQ29tcGxldGVkO1xyXG4gICAgICAgIGlmIChpdGVtLmNvbXBsZXRlZCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgc3RhdHVzQ2hlY2sgPSAnY2hlY2tlZCc7XHJcbiAgICAgICAgICBzdGF0dXNDb21wbGV0ZWQgPSAnY29tcGxldGVkJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgc3RhdHVzQ2hlY2sgPSAnJztcclxuICAgICAgICAgIHN0YXR1c0NvbXBsZXRlZCA9ICcnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9Eb0xpc3RDb250YWluZXInKS5hcHBlbmRDaGlsZCh0aGlzLnRvRG9MaXN0c0h0bWwoaXRlbSwgc3RhdHVzQ2hlY2ssIHN0YXR1c0NvbXBsZXRlZCkpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHRoaXMucmVtb3ZlVG9Eb0xpc3RCdG4oKTtcclxuICAgICAgdGhpcy5lZGl0TGlzdEJ0bkV2ZW50KCk7XHJcbiAgICAgIHRoaXMudXBkYXRlTGlzdEJ0bkV2ZW50KCk7XHJcblxyXG4gICAgICBjb25zdCBldmVudCA9IG5ldyBFdmVudCgnbGlzdFVwZGF0ZWQnKTtcclxuICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChldmVudCk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIGFkZCBhIHRhc2sgdG8gYSBsaXN0XHJcbiAgICBzdGF0aWMgYWRkTGlzdHMgPSAoZGVzY3JpcHRpb24pID0+IHtcclxuICAgICAgY29uc3QgdG9Eb0xpc3RzID0gdGhpcy5nZXRUb0RvTGlzdEZyb21TdG9yYWdlKCk7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gdG9Eb0xpc3RzLmxlbmd0aCArIDE7XHJcbiAgICAgIGNvbnN0IG5ld3Rhc2sgPSBuZXcgRGF0YShkZXNjcmlwdGlvbiwgZmFsc2UsIGluZGV4KTtcclxuXHJcbiAgICAgIHRvRG9MaXN0cy5wdXNoKG5ld3Rhc2spO1xyXG4gICAgICB0aGlzLmFkZExpc3RUb1N0b3JhZ2UodG9Eb0xpc3RzKTtcclxuICAgICAgdGhpcy5zaG93TGlzdHMoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgdG8gZG8gbGlzdFxyXG4gICAgc3RhdGljIHVwZGF0ZUxpc3RCdG5FdmVudCA9ICgpID0+IHtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRleHQnKS5mb3JFYWNoKChpbnB1dCkgPT4gaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCAoZXZlbnQpID0+IHtcclxuICAgICAgICBpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInKSB7XHJcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgY29uc3QgaW5wdXRMaXN0SWQgPSAnTElTVCc7XHJcbiAgICAgICAgICBjb25zdCBMaXN0SWRTZWxlY3RlZCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuaWQ7XHJcbiAgICAgICAgICBsZXQgbGlzdElEO1xyXG5cclxuICAgICAgICAgIGlmICghTGlzdElkU2VsZWN0ZWQuaW5jbHVkZXMoJ0xJU1QnKSkge1xyXG4gICAgICAgICAgICBsaXN0SUQgPSBpbnB1dExpc3RJZC5jb25jYXQoTGlzdElkU2VsZWN0ZWQpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGlzdElEID0gTGlzdElkU2VsZWN0ZWQ7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobGlzdElEKS5zZXRBdHRyaWJ1dGUoJ3JlYWRvbmx5JywgJ3JlYWRvbmx5Jyk7XHJcbiAgICAgICAgICB0aGlzLkxpc3RJbnB1dFVwZGF0ZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZChsaXN0SUQpLnZhbHVlLCAoTnVtYmVyKGxpc3RJRC5yZXBsYWNlKCdMSVNUJywgJycpKSAtIDEpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBlZGl0IGxpc3RcclxuICAgIHN0YXRpYyBlZGl0TGlzdEJ0bkV2ZW50ID0gKCkgPT4ge1xyXG4gICAgICBsZXQgcHJldmlvdXNMaXN0ID0gbnVsbDtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmVkaXRfbGlzdF9idG4nKS5mb3JFYWNoKChidXR0b24pID0+IGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3QgaW5wdXRMaXN0SWQgPSAnTElTVCc7XHJcbiAgICAgICAgY29uc3QgTGlzdElkU2VsZWN0ZWQgPSBldmVudC5jdXJyZW50VGFyZ2V0LmlkO1xyXG4gICAgICAgIGxldCBsaXN0SUQ7XHJcblxyXG4gICAgICAgIGlmICghTGlzdElkU2VsZWN0ZWQuaW5jbHVkZXMoJ0xJU1QnKSkge1xyXG4gICAgICAgICAgbGlzdElEID0gaW5wdXRMaXN0SWQuY29uY2F0KExpc3RJZFNlbGVjdGVkKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgbGlzdElEID0gTGlzdElkU2VsZWN0ZWQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocHJldmlvdXNMaXN0ICE9PSBudWxsKSB7XHJcbiAgICAgICAgICBwcmV2aW91c0xpc3QuZ2V0RWxlbWVudEJ5SWQobGlzdElEKS5yZW1vdmVBdHRyaWJ1dGUoJ3JlYWRvbmx5Jyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBsaXN0SXRlbSA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCdsaScpO1xyXG4gICAgICAgIHByZXZpb3VzTGlzdCA9IGxpc3RJdGVtO1xyXG4gICAgICAgIGNvbnN0IHVsSXRlbSA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCd1bCcpO1xyXG5cclxuICAgICAgICBsaXN0SXRlbS5zdHlsZS5iYWNrZ3JvdW5kID0gJ3JnYigyMzAsIDIzMCwgMTg0KSc7XHJcbiAgICAgICAgdWxJdGVtLnN0eWxlLmJhY2tncm91bmQgPSAncmdiKDIzMCwgMjMwLCAxODQpJztcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobGlzdElEKS5yZW1vdmVBdHRyaWJ1dGUoJ3JlYWRvbmx5Jyk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobGlzdElEKS5mb2N1cygpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGxpc3RJRCkuc3R5bGUuYmFja2dyb3VuZCA9ICdyZ2IoMjMwLCAyMzAsIDE4NCknO1xyXG4gICAgICAgIGxpc3RJdGVtLnF1ZXJ5U2VsZWN0b3IoJy5lZGl0X2xpc3RfYnRuJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICBsaXN0SXRlbS5xdWVyeVNlbGVjdG9yKCcucmVtb3ZlX2J0bicpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICB9KSk7XHJcbiAgICB9O1xyXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9