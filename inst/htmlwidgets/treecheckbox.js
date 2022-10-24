/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./srcjs/modules/tree.css":
/*!**************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./srcjs/modules/tree.css ***!
  \**************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Style the caret/arrow */\n.UNwkxeu8JaLUR7zsLOLc {\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; /* Prevent text selection */\n  display: inline-block;\n  margin-right: 6px;\n}\n\n.dpG9VJCbE1T3hvNqWAXQ {\n  list-style: none;\n}\n\n.fRDpmJJ9MRXanERdlguP {\n  background-color: white;\n  border-radius: 8px;\n  border: 1px solid #cccccc;\n  max-height: 25vh;\n}/*# sourceMappingURL=tree.css.map */", "",{"version":3,"sources":["webpack://./srcjs/modules/tree.scss","webpack://./srcjs/modules/tree.css"],"names":[],"mappings":"AACA,0BAAA;AACA;EACE,eAAA;EACA,yBAAA;KAAA,sBAAA;MAAA,qBAAA;UAAA,iBAAA,EAAA,2BAAA;EACA,qBAAA;EACA,iBAAA;ACAF;;ADGA;EACE,gBAAA;ACAF;;ADGA;EACE,uBAAA;EACA,kBAAA;EACA,yBAAA;EACA,gBAAA;ACAF,CAAA,mCAAA","sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"groupedCheckboxCaret": "UNwkxeu8JaLUR7zsLOLc",
	"groupedCheckboxList": "dpG9VJCbE1T3hvNqWAXQ",
	"groupedCheckboxNodeHolder": "fRDpmJJ9MRXanERdlguP"
};
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./srcjs/modules/tree.css":
/*!********************************!*\
  !*** ./srcjs/modules/tree.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_tree_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./tree.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./srcjs/modules/tree.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_tree_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_tree_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_tree_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_tree_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./srcjs/modules/constructTree.js":
/*!****************************************!*\
  !*** ./srcjs/modules/constructTree.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConstructTree": () => (/* binding */ ConstructTree)
/* harmony export */ });


class ConstructTree {
    root
    constructor(data, levels) {
        this.buildTree(data, levels)
    }


    buildTree(data, levels){
        let root = new Node("root")
        let newData
        console.log(data, levels)

        data.forEach(record => {
            newData = []
            levels.forEach(level => {
                newData.push(record[level])
            })
            this.#findOrAppend(root, newData)
        })
        this.root = root
    }

    findMaxDepth(){
        let queue = []
        let depth = 0

        queue.push(this.root)

        while(queue.length > 0){
            let size = queue.length

            let current

            for (let i = 0; i < size ; i++){
                current = queue.shift()

                for (let child of current.children){
                    queue.push(child)
                }
            }
            depth ++
        }
        return depth - 1
    }

    #findOrAppend(tree, values){
        for (let i = 0; i < values.length ; i++){
            let keyQueue = values.slice(0, i + 1)
            let value = values[i]
            let [nodeIn, _] = this.#recursiveSearch(tree, keyQueue)
            if (nodeIn.value !== value){
                let newNode = new Node(value)
                nodeIn.add_child(newNode)
            }
        }
        return(tree)
    }

    #recursiveSearch(node, find){
        let children = node.children
        for (const child of children) {
            let finding = find[0]
            if (finding === child.value){
                find.shift()
                if (find.length > 0){
                    return this.#recursiveSearch(child, find)
                } else {
                    return([child, find])
                }
            }
        }

        return [node, find]
    }


}
class Node{
    constructor(value, children, parent) {
        if (!children){
            children = []
        }
        this.value = value
        this.children = children
        this.parent = parent
        this.depth = 0
    }

    /*
     * Add children to node, and register parent in child.
     */
    add_child(child){
        this.children.push(child)
        this.children.forEach(child => {
            child.addParent(this)
        })
    }

    addParent(parent){
        this.parent = parent
        this.depth = parent.depth + 1
    }

    get has_children(){
        return((this.children.length > 0))
    }

    get siblings(){
        return this.parent.children
    }

    findObjectByName(name){
        if (this.value === name){
            return this
        } else {
            for (const child of this.children){
                let match = child.findObjectByName(name)
                if (match){
                    return match
                }
            }
        }
    }
}




/***/ }),

/***/ "./srcjs/modules/renderTree.js":
/*!*************************************!*\
  !*** ./srcjs/modules/renderTree.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTree": () => (/* binding */ createTree)
/* harmony export */ });
/* harmony import */ var shiny__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shiny */ "shiny");
/* harmony import */ var shiny__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(shiny__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constructTree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constructTree */ "./srcjs/modules/constructTree.js");
/* harmony import */ var _tree_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tree.css */ "./srcjs/modules/tree.css");





let generateID = (function(n) {
    return function() {
        n += 1
        return n;
    }
}(-1))

function hideListElement(element, animation){
    if (!animation){
        animation = "toggle"
    }
    let caret
    switch (animation) {
        case "slide":
            caret = $(element)
            if (caret.text() === "▼" ){
                caret.text("▶")
                caret.siblings("." + _tree_css__WEBPACK_IMPORTED_MODULE_2__["default"].groupedCheckboxList).slideUp()

            } else {
                caret.text("▼")
                caret.siblings("." + _tree_css__WEBPACK_IMPORTED_MODULE_2__["default"].groupedCheckboxList).slideDown()

            }
            break

        case "toggle":
            caret = $(element)
            if (caret.text() === "▼" ){
                caret.text("▶")
                caret.siblings("." + _tree_css__WEBPACK_IMPORTED_MODULE_2__["default"].groupedCheckboxList).hide()

            } else {
                caret.text("▼")
                caret.siblings("." + _tree_css__WEBPACK_IMPORTED_MODULE_2__["default"].groupedCheckboxList).show()

            }
            break

        default:
            throw("Hide animations only accepts 'toggle' and 'slide'" )
    }

}



function setInput(id){
    let selected = []
    let found = false
    $("#" + id).find("input:checkbox:checked").each(function(){
        selected.push($(this).val())
        found = true
    })
    if (found){
        Shiny.setInputValue(id, selected);
    } else {
        Shiny.setInputValue(id, null);

    }
}

function registerEvents(id){

    let base = $("#" + id)

    // Hide if caret is clicked
    base.find("." + _tree_css__WEBPACK_IMPORTED_MODULE_2__["default"].groupedCheckboxCaret).on("click", function (){
        hideListElement(this, "toggle")
    })

    // if parent group checkbox get changed, so will children
    base.find(".grouped-checkbox-input").change(function(){
        let element = $(this)
        element.siblings("ul").children().find(".grouped-checkbox-input").prop("checked", element.is(":checked")).change()
    })


    // Select all button
    base.find(".grouped-checkbox-select-all").on("click", function(){
        base.find(".grouped-checkbox-input").prop("checked", true).change()
    })

    // Deselect all
    base.find(".grouped-checkbox-deselect-all").on("click", function(){
        base.find(".grouped-checkbox-input").prop("checked", false).change()
    })

    // On click update input shiny
    base.find(".grouped-checkbox-input").change(function(event) {
        setInput(id)
    });
}
function parseTree(choices, levels){
    return new _constructTree__WEBPACK_IMPORTED_MODULE_1__.ConstructTree(choices, levels)
}

function appendNodes(parent, tree) {
    let base = $(parent)
    base.append($("<ul>", {"class": _tree_css__WEBPACK_IMPORTED_MODULE_2__["default"].groupedCheckboxList, "id": "grouped-checkbox-list-base"}))


    let queue = []

    queue.push(tree.root)

    while (queue.length > 0) {
        let size = queue.length
        let current

        for (let i = 0; i < size; i++) {
            current = queue.shift()

            for (let child of current.children) {
                queue.push(child)
                if (child.parent.value === "root") {
                    child.htmlID = constructNode(child.value, null, child.has_children)

                }
                else {
                    child.htmlID = constructNode(child.value, child.parent, child.has_children)
                }

            }
        }
    }
}


function constructNode(nodeName, nodeParent, hasChildren){
    // this function uses plain JS which increases the speed it takes to render the nodes by four times in comparison
    // with the more readable jquery
    let parent
    if (!nodeParent){
        parent = document.getElementById("grouped-checkbox-list-base")
    } else {
        parent = document.getElementById("checkbox-list-" + nodeParent.htmlID)

    }

    let nNodes = generateID()

    let newNodeID = "node-" + nNodes

    let nodeListElement = document.createElement("li")



    let node = document.createElement("span")
    node.classList.add("GroupedCheckBox-node", "text-fg")
    node.id = newNodeID



    if (hasChildren){_tree_css__WEBPACK_IMPORTED_MODULE_2__["default"].groupedCheckboxCaret
        let caret = document.createElement("span")
        caret.classList.add(_tree_css__WEBPACK_IMPORTED_MODULE_2__["default"].groupedCheckboxCaret)
        caret.innerText = "▼"
        node.appendChild(caret)
    }

    let inputCheckbox = document.createElement("input")
    inputCheckbox.classList.add("grouped-checkbox-input", "form-check-input")
    inputCheckbox.type = "checkbox"
    inputCheckbox.value = nodeName
    inputCheckbox.id = "node-input-check" + nNodes
    node.appendChild(inputCheckbox)

    let labelCheckbox = document.createElement("label")
    labelCheckbox.classList.add("form-check-label")
    labelCheckbox.for = "node-input-check" + nNodes
    labelCheckbox.innerHTML = nodeName
    node.appendChild(labelCheckbox)

    if (hasChildren){
        let newList = document.createElement("ul")
        newList.classList.add(_tree_css__WEBPACK_IMPORTED_MODULE_2__["default"].groupedCheckboxList)
        newList.id = "checkbox-list-" + newNodeID
        node.appendChild(newList)
    }

    nodeListElement.appendChild(node)
    parent.appendChild(nodeListElement)

    return newNodeID
}

function createTree(id, label, choices, levels, collapsed) {
    let base = document.getElementById(id)

    // Create label
    let new_label = document.createElement("h4");
    new_label.innerText = label;
    base.appendChild(new_label)


    // create select buttons

    let container = $("<div>", {"class": "flex-parent"})
    container.append($("<button>", {"class": "flex-child grouped-checkbox-select-all btn btn-outline-fg",
        "id": "grouped-checkbox-select-all-" + generateID()}).text("Select All"))
    container.append($("<button>", {"class": "flex-child grouped-checkbox-deselect-all btn btn-outline-fg",
        "id": "grouped-checkbox-deselect-all-" + generateID()}).text("Deselect All"))

    $("#" + id).append(container)


    let tree = parseTree(choices, levels)


    // Create container that will hold all the nodes
    let nodeContainer = document.createElement("div")
    nodeContainer.classList.add(_tree_css__WEBPACK_IMPORTED_MODULE_2__["default"].groupedCheckboxNodeHolder)
    nodeContainer.classList.add("overflow-auto")

    base.appendChild(nodeContainer)

    // Render and append the nodes
    appendNodes(nodeContainer, tree)


    // Check if nodes should be collapsed
    if (collapsed){
        $("#" + id).find("." + _tree_css__WEBPACK_IMPORTED_MODULE_2__["default"].groupedCheckboxCaret).each(function (){
            hideListElement(this, "toggle")
        })
    }


    $(document).on("shiny:connected", function() {
        registerEvents(id)
    });

}




/***/ }),

/***/ "widgets":
/*!******************************!*\
  !*** external "HTMLWidgets" ***!
  \******************************/
/***/ ((module) => {

module.exports = HTMLWidgets;

/***/ }),

/***/ "shiny":
/*!************************!*\
  !*** external "Shiny" ***!
  \************************/
/***/ ((module) => {

module.exports = Shiny;

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***************************************!*\
  !*** ./srcjs/widgets/treecheckbox.js ***!
  \***************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var widgets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! widgets */ "widgets");
/* harmony import */ var widgets__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(widgets__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var shiny__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shiny */ "shiny");
/* harmony import */ var shiny__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(shiny__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_renderTree_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/renderTree.js */ "./srcjs/modules/renderTree.js");





HTMLWidgets.widget({

  name: 'treecheckbox',

  type: 'output',

  factory: function(el, width, height) {

    // TODO: define shared variables for this instance

    return {

      renderValue: function(x) {

        (0,_modules_renderTree_js__WEBPACK_IMPORTED_MODULE_2__.createTree)(el.id, x.label, x.choices, x.levels, x.collapsed)

        // HTMLWidgets.widget sets a default size. Remove this default size and make auto.
        $("#" + el.id).css("height", "auto").css("width", "auto")
      },

      resize: function(width, height) {

        // TODO: code to re-render the widget with a new size

      }

    };
  }
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZWNoZWNrYm94LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQSw4RkFBOEYsb0JBQW9CLDhCQUE4Qiw4QkFBOEIsOEJBQThCLCtCQUErQixzREFBc0Qsc0JBQXNCLEdBQUcsMkJBQTJCLHFCQUFxQixHQUFHLDJCQUEyQiw0QkFBNEIsdUJBQXVCLDhCQUE4QixxQkFBcUIsR0FBRywyQ0FBMkMscUlBQXFJLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxzQkFBc0IsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLGlDQUFpQztBQUMzMkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDWjFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscURBQXFEO0FBQ3JEOztBQUVBO0FBQ0EsZ0RBQWdEO0FBQ2hEOztBQUVBO0FBQ0EscUZBQXFGO0FBQ3JGOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EsS0FBSztBQUNMLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixxQkFBcUI7QUFDMUM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDckdhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkEsTUFBa0c7QUFDbEcsTUFBd0Y7QUFDeEYsTUFBK0Y7QUFDL0YsTUFBa0g7QUFDbEgsTUFBMkc7QUFDM0csTUFBMkc7QUFDM0csTUFBaUk7QUFDakk7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyw2R0FBTzs7OztBQUkyRTtBQUNuRyxPQUFPLGlFQUFlLDZHQUFPLElBQUksb0hBQWMsR0FBRyxvSEFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDdkdhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7O0FBRUE7QUFDQSxpRkFBaUY7QUFDakY7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLDRCQUE0QixXQUFXO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0Isb0JBQW9CO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdIZTtBQUMrQjtBQUNmOzs7QUFHL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMscUVBQTBCOztBQUUvRCxjQUFjO0FBQ2Q7QUFDQSxxQ0FBcUMscUVBQTBCOztBQUUvRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLHFFQUEwQjs7QUFFL0QsY0FBYztBQUNkO0FBQ0EscUNBQXFDLHFFQUEwQjs7QUFFL0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQU07QUFDTjs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0Esb0JBQW9CLHNFQUEyQjtBQUMvQztBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxlQUFlLHlEQUFhO0FBQzVCOztBQUVBO0FBQ0E7QUFDQSwyQkFBMkIsU0FBUyxxRUFBMEIscUNBQXFDOzs7QUFHbkc7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHdCQUF3QixVQUFVO0FBQ2xDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7Ozs7QUFJQSxxQkFBcUIsc0VBQTJCO0FBQ2hEO0FBQ0EsNEJBQTRCLHNFQUEyQjtBQUN2RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDhCQUE4QixxRUFBMEI7QUFDeEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQSxnQ0FBZ0MsdUJBQXVCO0FBQ3ZELG9DQUFvQztBQUNwQyw0REFBNEQ7QUFDNUQsb0NBQW9DO0FBQ3BDLDhEQUE4RDs7QUFFOUQ7OztBQUdBOzs7QUFHQTtBQUNBO0FBQ0EsZ0NBQWdDLDJFQUFnQztBQUNoRTs7QUFFQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsK0JBQStCLHNFQUEyQjtBQUMxRDtBQUNBLFNBQVM7QUFDVDs7O0FBR0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7Ozs7Ozs7Ozs7Ozs7QUM5T0E7Ozs7Ozs7Ozs7QUNBQTs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBaUI7QUFDRjs7QUFFcUM7O0FBRXBEOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLFFBQVEsa0VBQVU7O0FBRWxCO0FBQ0E7QUFDQSxPQUFPOztBQUVQOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2hpbnl0cmVlY2hlY2tib3gvLi9zcmNqcy9tb2R1bGVzL3RyZWUuY3NzIiwid2VicGFjazovL3NoaW55dHJlZWNoZWNrYm94Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9zaGlueXRyZWVjaGVja2JveC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3NoaW55dHJlZWNoZWNrYm94Ly4vc3JjanMvbW9kdWxlcy90cmVlLmNzcz85Y2IzIiwid2VicGFjazovL3NoaW55dHJlZWNoZWNrYm94Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3NoaW55dHJlZWNoZWNrYm94Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9zaGlueXRyZWVjaGVja2JveC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9zaGlueXRyZWVjaGVja2JveC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9zaGlueXRyZWVjaGVja2JveC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3NoaW55dHJlZWNoZWNrYm94Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vc2hpbnl0cmVlY2hlY2tib3gvLi9zcmNqcy9tb2R1bGVzL2NvbnN0cnVjdFRyZWUuanMiLCJ3ZWJwYWNrOi8vc2hpbnl0cmVlY2hlY2tib3gvLi9zcmNqcy9tb2R1bGVzL3JlbmRlclRyZWUuanMiLCJ3ZWJwYWNrOi8vc2hpbnl0cmVlY2hlY2tib3gvZXh0ZXJuYWwgdmFyIFwiSFRNTFdpZGdldHNcIiIsIndlYnBhY2s6Ly9zaGlueXRyZWVjaGVja2JveC9leHRlcm5hbCB2YXIgXCJTaGlueVwiIiwid2VicGFjazovL3NoaW55dHJlZWNoZWNrYm94L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3NoaW55dHJlZWNoZWNrYm94L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3NoaW55dHJlZWNoZWNrYm94L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9zaGlueXRyZWVjaGVja2JveC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3NoaW55dHJlZWNoZWNrYm94L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vc2hpbnl0cmVlY2hlY2tib3gvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3NoaW55dHJlZWNoZWNrYm94Ly4vc3JjanMvd2lkZ2V0cy90cmVlY2hlY2tib3guanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBTdHlsZSB0aGUgY2FyZXQvYXJyb3cgKi9cXG4uVU53a3hldThKYUxVUjd6c0xPTGMge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTsgLyogUHJldmVudCB0ZXh0IHNlbGVjdGlvbiAqL1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbWFyZ2luLXJpZ2h0OiA2cHg7XFxufVxcblxcbi5kcEc5VkpDYkUxVDNodk5xV0FYUSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4uZlJEcG1KSjlNUlhhbkVSZGxndVAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjY2NjO1xcbiAgbWF4LWhlaWdodDogMjV2aDtcXG59LyojIHNvdXJjZU1hcHBpbmdVUkw9dHJlZS5jc3MubWFwICovXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjanMvbW9kdWxlcy90cmVlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyY2pzL21vZHVsZXMvdHJlZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQ0EsMEJBQUE7QUFDQTtFQUNFLGVBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQSxFQUFBLDJCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtBQ0FGOztBREdBO0VBQ0UsZ0JBQUE7QUNBRjs7QURHQTtFQUNFLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FDQUYsQ0FBQSxtQ0FBQVwiLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiZ3JvdXBlZENoZWNrYm94Q2FyZXRcIjogXCJVTndreGV1OEphTFVSN3pzTE9MY1wiLFxuXHRcImdyb3VwZWRDaGVja2JveExpc3RcIjogXCJkcEc5VkpDYkUxVDNodk5xV0FYUVwiLFxuXHRcImdyb3VwZWRDaGVja2JveE5vZGVIb2xkZXJcIjogXCJmUkRwbUpKOU1SWGFuRVJkbGd1UFwiXG59O1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzBdLnVzZVsxXSEuL3RyZWUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMF0udXNlWzFdIS4vdHJlZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiXG5cbmNsYXNzIENvbnN0cnVjdFRyZWUge1xuICAgIHJvb3RcbiAgICBjb25zdHJ1Y3RvcihkYXRhLCBsZXZlbHMpIHtcbiAgICAgICAgdGhpcy5idWlsZFRyZWUoZGF0YSwgbGV2ZWxzKVxuICAgIH1cblxuXG4gICAgYnVpbGRUcmVlKGRhdGEsIGxldmVscyl7XG4gICAgICAgIGxldCByb290ID0gbmV3IE5vZGUoXCJyb290XCIpXG4gICAgICAgIGxldCBuZXdEYXRhXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEsIGxldmVscylcblxuICAgICAgICBkYXRhLmZvckVhY2gocmVjb3JkID0+IHtcbiAgICAgICAgICAgIG5ld0RhdGEgPSBbXVxuICAgICAgICAgICAgbGV2ZWxzLmZvckVhY2gobGV2ZWwgPT4ge1xuICAgICAgICAgICAgICAgIG5ld0RhdGEucHVzaChyZWNvcmRbbGV2ZWxdKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHRoaXMuI2ZpbmRPckFwcGVuZChyb290LCBuZXdEYXRhKVxuICAgICAgICB9KVxuICAgICAgICB0aGlzLnJvb3QgPSByb290XG4gICAgfVxuXG4gICAgZmluZE1heERlcHRoKCl7XG4gICAgICAgIGxldCBxdWV1ZSA9IFtdXG4gICAgICAgIGxldCBkZXB0aCA9IDBcblxuICAgICAgICBxdWV1ZS5wdXNoKHRoaXMucm9vdClcblxuICAgICAgICB3aGlsZShxdWV1ZS5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgIGxldCBzaXplID0gcXVldWUubGVuZ3RoXG5cbiAgICAgICAgICAgIGxldCBjdXJyZW50XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZSA7IGkrKyl7XG4gICAgICAgICAgICAgICAgY3VycmVudCA9IHF1ZXVlLnNoaWZ0KClcblxuICAgICAgICAgICAgICAgIGZvciAobGV0IGNoaWxkIG9mIGN1cnJlbnQuY2hpbGRyZW4pe1xuICAgICAgICAgICAgICAgICAgICBxdWV1ZS5wdXNoKGNoaWxkKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlcHRoICsrXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRlcHRoIC0gMVxuICAgIH1cblxuICAgICNmaW5kT3JBcHBlbmQodHJlZSwgdmFsdWVzKXtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZXMubGVuZ3RoIDsgaSsrKXtcbiAgICAgICAgICAgIGxldCBrZXlRdWV1ZSA9IHZhbHVlcy5zbGljZSgwLCBpICsgMSlcbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IHZhbHVlc1tpXVxuICAgICAgICAgICAgbGV0IFtub2RlSW4sIF9dID0gdGhpcy4jcmVjdXJzaXZlU2VhcmNoKHRyZWUsIGtleVF1ZXVlKVxuICAgICAgICAgICAgaWYgKG5vZGVJbi52YWx1ZSAhPT0gdmFsdWUpe1xuICAgICAgICAgICAgICAgIGxldCBuZXdOb2RlID0gbmV3IE5vZGUodmFsdWUpXG4gICAgICAgICAgICAgICAgbm9kZUluLmFkZF9jaGlsZChuZXdOb2RlKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybih0cmVlKVxuICAgIH1cblxuICAgICNyZWN1cnNpdmVTZWFyY2gobm9kZSwgZmluZCl7XG4gICAgICAgIGxldCBjaGlsZHJlbiA9IG5vZGUuY2hpbGRyZW5cbiAgICAgICAgZm9yIChjb25zdCBjaGlsZCBvZiBjaGlsZHJlbikge1xuICAgICAgICAgICAgbGV0IGZpbmRpbmcgPSBmaW5kWzBdXG4gICAgICAgICAgICBpZiAoZmluZGluZyA9PT0gY2hpbGQudmFsdWUpe1xuICAgICAgICAgICAgICAgIGZpbmQuc2hpZnQoKVxuICAgICAgICAgICAgICAgIGlmIChmaW5kLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy4jcmVjdXJzaXZlU2VhcmNoKGNoaWxkLCBmaW5kKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybihbY2hpbGQsIGZpbmRdKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBbbm9kZSwgZmluZF1cbiAgICB9XG5cblxufVxuY2xhc3MgTm9kZXtcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSwgY2hpbGRyZW4sIHBhcmVudCkge1xuICAgICAgICBpZiAoIWNoaWxkcmVuKXtcbiAgICAgICAgICAgIGNoaWxkcmVuID0gW11cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWVcbiAgICAgICAgdGhpcy5jaGlsZHJlbiA9IGNoaWxkcmVuXG4gICAgICAgIHRoaXMucGFyZW50ID0gcGFyZW50XG4gICAgICAgIHRoaXMuZGVwdGggPSAwXG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBBZGQgY2hpbGRyZW4gdG8gbm9kZSwgYW5kIHJlZ2lzdGVyIHBhcmVudCBpbiBjaGlsZC5cbiAgICAgKi9cbiAgICBhZGRfY2hpbGQoY2hpbGQpe1xuICAgICAgICB0aGlzLmNoaWxkcmVuLnB1c2goY2hpbGQpXG4gICAgICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICAgICAgICBjaGlsZC5hZGRQYXJlbnQodGhpcylcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBhZGRQYXJlbnQocGFyZW50KXtcbiAgICAgICAgdGhpcy5wYXJlbnQgPSBwYXJlbnRcbiAgICAgICAgdGhpcy5kZXB0aCA9IHBhcmVudC5kZXB0aCArIDFcbiAgICB9XG5cbiAgICBnZXQgaGFzX2NoaWxkcmVuKCl7XG4gICAgICAgIHJldHVybigodGhpcy5jaGlsZHJlbi5sZW5ndGggPiAwKSlcbiAgICB9XG5cbiAgICBnZXQgc2libGluZ3MoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50LmNoaWxkcmVuXG4gICAgfVxuXG4gICAgZmluZE9iamVjdEJ5TmFtZShuYW1lKXtcbiAgICAgICAgaWYgKHRoaXMudmFsdWUgPT09IG5hbWUpe1xuICAgICAgICAgICAgcmV0dXJuIHRoaXNcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgY2hpbGQgb2YgdGhpcy5jaGlsZHJlbil7XG4gICAgICAgICAgICAgICAgbGV0IG1hdGNoID0gY2hpbGQuZmluZE9iamVjdEJ5TmFtZShuYW1lKVxuICAgICAgICAgICAgICAgIGlmIChtYXRjaCl7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtYXRjaFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5leHBvcnQge0NvbnN0cnVjdFRyZWV9IiwiaW1wb3J0ICdzaGlueSc7XG5pbXBvcnQge0NvbnN0cnVjdFRyZWV9IGZyb20gXCIuL2NvbnN0cnVjdFRyZWVcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi90cmVlLmNzcydcblxuXG5sZXQgZ2VuZXJhdGVJRCA9IChmdW5jdGlvbihuKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICBuICs9IDFcbiAgICAgICAgcmV0dXJuIG47XG4gICAgfVxufSgtMSkpXG5cbmZ1bmN0aW9uIGhpZGVMaXN0RWxlbWVudChlbGVtZW50LCBhbmltYXRpb24pe1xuICAgIGlmICghYW5pbWF0aW9uKXtcbiAgICAgICAgYW5pbWF0aW9uID0gXCJ0b2dnbGVcIlxuICAgIH1cbiAgICBsZXQgY2FyZXRcbiAgICBzd2l0Y2ggKGFuaW1hdGlvbikge1xuICAgICAgICBjYXNlIFwic2xpZGVcIjpcbiAgICAgICAgICAgIGNhcmV0ID0gJChlbGVtZW50KVxuICAgICAgICAgICAgaWYgKGNhcmV0LnRleHQoKSA9PT0gXCLilrxcIiApe1xuICAgICAgICAgICAgICAgIGNhcmV0LnRleHQoXCLilrZcIilcbiAgICAgICAgICAgICAgICBjYXJldC5zaWJsaW5ncyhcIi5cIiArIHN0eWxlcy5ncm91cGVkQ2hlY2tib3hMaXN0KS5zbGlkZVVwKClcblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjYXJldC50ZXh0KFwi4pa8XCIpXG4gICAgICAgICAgICAgICAgY2FyZXQuc2libGluZ3MoXCIuXCIgKyBzdHlsZXMuZ3JvdXBlZENoZWNrYm94TGlzdCkuc2xpZGVEb3duKClcblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWtcblxuICAgICAgICBjYXNlIFwidG9nZ2xlXCI6XG4gICAgICAgICAgICBjYXJldCA9ICQoZWxlbWVudClcbiAgICAgICAgICAgIGlmIChjYXJldC50ZXh0KCkgPT09IFwi4pa8XCIgKXtcbiAgICAgICAgICAgICAgICBjYXJldC50ZXh0KFwi4pa2XCIpXG4gICAgICAgICAgICAgICAgY2FyZXQuc2libGluZ3MoXCIuXCIgKyBzdHlsZXMuZ3JvdXBlZENoZWNrYm94TGlzdCkuaGlkZSgpXG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY2FyZXQudGV4dChcIuKWvFwiKVxuICAgICAgICAgICAgICAgIGNhcmV0LnNpYmxpbmdzKFwiLlwiICsgc3R5bGVzLmdyb3VwZWRDaGVja2JveExpc3QpLnNob3coKVxuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVha1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB0aHJvdyhcIkhpZGUgYW5pbWF0aW9ucyBvbmx5IGFjY2VwdHMgJ3RvZ2dsZScgYW5kICdzbGlkZSdcIiApXG4gICAgfVxuXG59XG5cblxuXG5mdW5jdGlvbiBzZXRJbnB1dChpZCl7XG4gICAgbGV0IHNlbGVjdGVkID0gW11cbiAgICBsZXQgZm91bmQgPSBmYWxzZVxuICAgICQoXCIjXCIgKyBpZCkuZmluZChcImlucHV0OmNoZWNrYm94OmNoZWNrZWRcIikuZWFjaChmdW5jdGlvbigpe1xuICAgICAgICBzZWxlY3RlZC5wdXNoKCQodGhpcykudmFsKCkpXG4gICAgICAgIGZvdW5kID0gdHJ1ZVxuICAgIH0pXG4gICAgaWYgKGZvdW5kKXtcbiAgICAgICAgU2hpbnkuc2V0SW5wdXRWYWx1ZShpZCwgc2VsZWN0ZWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIFNoaW55LnNldElucHV0VmFsdWUoaWQsIG51bGwpO1xuXG4gICAgfVxufVxuXG5mdW5jdGlvbiByZWdpc3RlckV2ZW50cyhpZCl7XG5cbiAgICBsZXQgYmFzZSA9ICQoXCIjXCIgKyBpZClcblxuICAgIC8vIEhpZGUgaWYgY2FyZXQgaXMgY2xpY2tlZFxuICAgIGJhc2UuZmluZChcIi5cIiArIHN0eWxlcy5ncm91cGVkQ2hlY2tib3hDYXJldCkub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKXtcbiAgICAgICAgaGlkZUxpc3RFbGVtZW50KHRoaXMsIFwidG9nZ2xlXCIpXG4gICAgfSlcblxuICAgIC8vIGlmIHBhcmVudCBncm91cCBjaGVja2JveCBnZXQgY2hhbmdlZCwgc28gd2lsbCBjaGlsZHJlblxuICAgIGJhc2UuZmluZChcIi5ncm91cGVkLWNoZWNrYm94LWlucHV0XCIpLmNoYW5nZShmdW5jdGlvbigpe1xuICAgICAgICBsZXQgZWxlbWVudCA9ICQodGhpcylcbiAgICAgICAgZWxlbWVudC5zaWJsaW5ncyhcInVsXCIpLmNoaWxkcmVuKCkuZmluZChcIi5ncm91cGVkLWNoZWNrYm94LWlucHV0XCIpLnByb3AoXCJjaGVja2VkXCIsIGVsZW1lbnQuaXMoXCI6Y2hlY2tlZFwiKSkuY2hhbmdlKClcbiAgICB9KVxuXG5cbiAgICAvLyBTZWxlY3QgYWxsIGJ1dHRvblxuICAgIGJhc2UuZmluZChcIi5ncm91cGVkLWNoZWNrYm94LXNlbGVjdC1hbGxcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuICAgICAgICBiYXNlLmZpbmQoXCIuZ3JvdXBlZC1jaGVja2JveC1pbnB1dFwiKS5wcm9wKFwiY2hlY2tlZFwiLCB0cnVlKS5jaGFuZ2UoKVxuICAgIH0pXG5cbiAgICAvLyBEZXNlbGVjdCBhbGxcbiAgICBiYXNlLmZpbmQoXCIuZ3JvdXBlZC1jaGVja2JveC1kZXNlbGVjdC1hbGxcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuICAgICAgICBiYXNlLmZpbmQoXCIuZ3JvdXBlZC1jaGVja2JveC1pbnB1dFwiKS5wcm9wKFwiY2hlY2tlZFwiLCBmYWxzZSkuY2hhbmdlKClcbiAgICB9KVxuXG4gICAgLy8gT24gY2xpY2sgdXBkYXRlIGlucHV0IHNoaW55XG4gICAgYmFzZS5maW5kKFwiLmdyb3VwZWQtY2hlY2tib3gtaW5wdXRcIikuY2hhbmdlKGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIHNldElucHV0KGlkKVxuICAgIH0pO1xufVxuZnVuY3Rpb24gcGFyc2VUcmVlKGNob2ljZXMsIGxldmVscyl7XG4gICAgcmV0dXJuIG5ldyBDb25zdHJ1Y3RUcmVlKGNob2ljZXMsIGxldmVscylcbn1cblxuZnVuY3Rpb24gYXBwZW5kTm9kZXMocGFyZW50LCB0cmVlKSB7XG4gICAgbGV0IGJhc2UgPSAkKHBhcmVudClcbiAgICBiYXNlLmFwcGVuZCgkKFwiPHVsPlwiLCB7XCJjbGFzc1wiOiBzdHlsZXMuZ3JvdXBlZENoZWNrYm94TGlzdCwgXCJpZFwiOiBcImdyb3VwZWQtY2hlY2tib3gtbGlzdC1iYXNlXCJ9KSlcblxuXG4gICAgbGV0IHF1ZXVlID0gW11cblxuICAgIHF1ZXVlLnB1c2godHJlZS5yb290KVxuXG4gICAgd2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgbGV0IHNpemUgPSBxdWV1ZS5sZW5ndGhcbiAgICAgICAgbGV0IGN1cnJlbnRcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemU7IGkrKykge1xuICAgICAgICAgICAgY3VycmVudCA9IHF1ZXVlLnNoaWZ0KClcblxuICAgICAgICAgICAgZm9yIChsZXQgY2hpbGQgb2YgY3VycmVudC5jaGlsZHJlbikge1xuICAgICAgICAgICAgICAgIHF1ZXVlLnB1c2goY2hpbGQpXG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkLnBhcmVudC52YWx1ZSA9PT0gXCJyb290XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQuaHRtbElEID0gY29uc3RydWN0Tm9kZShjaGlsZC52YWx1ZSwgbnVsbCwgY2hpbGQuaGFzX2NoaWxkcmVuKVxuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZC5odG1sSUQgPSBjb25zdHJ1Y3ROb2RlKGNoaWxkLnZhbHVlLCBjaGlsZC5wYXJlbnQsIGNoaWxkLmhhc19jaGlsZHJlbilcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5mdW5jdGlvbiBjb25zdHJ1Y3ROb2RlKG5vZGVOYW1lLCBub2RlUGFyZW50LCBoYXNDaGlsZHJlbil7XG4gICAgLy8gdGhpcyBmdW5jdGlvbiB1c2VzIHBsYWluIEpTIHdoaWNoIGluY3JlYXNlcyB0aGUgc3BlZWQgaXQgdGFrZXMgdG8gcmVuZGVyIHRoZSBub2RlcyBieSBmb3VyIHRpbWVzIGluIGNvbXBhcmlzb25cbiAgICAvLyB3aXRoIHRoZSBtb3JlIHJlYWRhYmxlIGpxdWVyeVxuICAgIGxldCBwYXJlbnRcbiAgICBpZiAoIW5vZGVQYXJlbnQpe1xuICAgICAgICBwYXJlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdyb3VwZWQtY2hlY2tib3gtbGlzdC1iYXNlXCIpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgcGFyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaGVja2JveC1saXN0LVwiICsgbm9kZVBhcmVudC5odG1sSUQpXG5cbiAgICB9XG5cbiAgICBsZXQgbk5vZGVzID0gZ2VuZXJhdGVJRCgpXG5cbiAgICBsZXQgbmV3Tm9kZUlEID0gXCJub2RlLVwiICsgbk5vZGVzXG5cbiAgICBsZXQgbm9kZUxpc3RFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpXG5cblxuXG4gICAgbGV0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKVxuICAgIG5vZGUuY2xhc3NMaXN0LmFkZChcIkdyb3VwZWRDaGVja0JveC1ub2RlXCIsIFwidGV4dC1mZ1wiKVxuICAgIG5vZGUuaWQgPSBuZXdOb2RlSURcblxuXG5cbiAgICBpZiAoaGFzQ2hpbGRyZW4pe3N0eWxlcy5ncm91cGVkQ2hlY2tib3hDYXJldFxuICAgICAgICBsZXQgY2FyZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKVxuICAgICAgICBjYXJldC5jbGFzc0xpc3QuYWRkKHN0eWxlcy5ncm91cGVkQ2hlY2tib3hDYXJldClcbiAgICAgICAgY2FyZXQuaW5uZXJUZXh0ID0gXCLilrxcIlxuICAgICAgICBub2RlLmFwcGVuZENoaWxkKGNhcmV0KVxuICAgIH1cblxuICAgIGxldCBpbnB1dENoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXG4gICAgaW5wdXRDaGVja2JveC5jbGFzc0xpc3QuYWRkKFwiZ3JvdXBlZC1jaGVja2JveC1pbnB1dFwiLCBcImZvcm0tY2hlY2staW5wdXRcIilcbiAgICBpbnB1dENoZWNrYm94LnR5cGUgPSBcImNoZWNrYm94XCJcbiAgICBpbnB1dENoZWNrYm94LnZhbHVlID0gbm9kZU5hbWVcbiAgICBpbnB1dENoZWNrYm94LmlkID0gXCJub2RlLWlucHV0LWNoZWNrXCIgKyBuTm9kZXNcbiAgICBub2RlLmFwcGVuZENoaWxkKGlucHV0Q2hlY2tib3gpXG5cbiAgICBsZXQgbGFiZWxDaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKVxuICAgIGxhYmVsQ2hlY2tib3guY2xhc3NMaXN0LmFkZChcImZvcm0tY2hlY2stbGFiZWxcIilcbiAgICBsYWJlbENoZWNrYm94LmZvciA9IFwibm9kZS1pbnB1dC1jaGVja1wiICsgbk5vZGVzXG4gICAgbGFiZWxDaGVja2JveC5pbm5lckhUTUwgPSBub2RlTmFtZVxuICAgIG5vZGUuYXBwZW5kQ2hpbGQobGFiZWxDaGVja2JveClcblxuICAgIGlmIChoYXNDaGlsZHJlbil7XG4gICAgICAgIGxldCBuZXdMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpXG4gICAgICAgIG5ld0xpc3QuY2xhc3NMaXN0LmFkZChzdHlsZXMuZ3JvdXBlZENoZWNrYm94TGlzdClcbiAgICAgICAgbmV3TGlzdC5pZCA9IFwiY2hlY2tib3gtbGlzdC1cIiArIG5ld05vZGVJRFxuICAgICAgICBub2RlLmFwcGVuZENoaWxkKG5ld0xpc3QpXG4gICAgfVxuXG4gICAgbm9kZUxpc3RFbGVtZW50LmFwcGVuZENoaWxkKG5vZGUpXG4gICAgcGFyZW50LmFwcGVuZENoaWxkKG5vZGVMaXN0RWxlbWVudClcblxuICAgIHJldHVybiBuZXdOb2RlSURcbn1cblxuZnVuY3Rpb24gY3JlYXRlVHJlZShpZCwgbGFiZWwsIGNob2ljZXMsIGxldmVscywgY29sbGFwc2VkKSB7XG4gICAgbGV0IGJhc2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZClcblxuICAgIC8vIENyZWF0ZSBsYWJlbFxuICAgIGxldCBuZXdfbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XG4gICAgbmV3X2xhYmVsLmlubmVyVGV4dCA9IGxhYmVsO1xuICAgIGJhc2UuYXBwZW5kQ2hpbGQobmV3X2xhYmVsKVxuXG5cbiAgICAvLyBjcmVhdGUgc2VsZWN0IGJ1dHRvbnNcblxuICAgIGxldCBjb250YWluZXIgPSAkKFwiPGRpdj5cIiwge1wiY2xhc3NcIjogXCJmbGV4LXBhcmVudFwifSlcbiAgICBjb250YWluZXIuYXBwZW5kKCQoXCI8YnV0dG9uPlwiLCB7XCJjbGFzc1wiOiBcImZsZXgtY2hpbGQgZ3JvdXBlZC1jaGVja2JveC1zZWxlY3QtYWxsIGJ0biBidG4tb3V0bGluZS1mZ1wiLFxuICAgICAgICBcImlkXCI6IFwiZ3JvdXBlZC1jaGVja2JveC1zZWxlY3QtYWxsLVwiICsgZ2VuZXJhdGVJRCgpfSkudGV4dChcIlNlbGVjdCBBbGxcIikpXG4gICAgY29udGFpbmVyLmFwcGVuZCgkKFwiPGJ1dHRvbj5cIiwge1wiY2xhc3NcIjogXCJmbGV4LWNoaWxkIGdyb3VwZWQtY2hlY2tib3gtZGVzZWxlY3QtYWxsIGJ0biBidG4tb3V0bGluZS1mZ1wiLFxuICAgICAgICBcImlkXCI6IFwiZ3JvdXBlZC1jaGVja2JveC1kZXNlbGVjdC1hbGwtXCIgKyBnZW5lcmF0ZUlEKCl9KS50ZXh0KFwiRGVzZWxlY3QgQWxsXCIpKVxuXG4gICAgJChcIiNcIiArIGlkKS5hcHBlbmQoY29udGFpbmVyKVxuXG5cbiAgICBsZXQgdHJlZSA9IHBhcnNlVHJlZShjaG9pY2VzLCBsZXZlbHMpXG5cblxuICAgIC8vIENyZWF0ZSBjb250YWluZXIgdGhhdCB3aWxsIGhvbGQgYWxsIHRoZSBub2Rlc1xuICAgIGxldCBub2RlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIG5vZGVDb250YWluZXIuY2xhc3NMaXN0LmFkZChzdHlsZXMuZ3JvdXBlZENoZWNrYm94Tm9kZUhvbGRlcilcbiAgICBub2RlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJvdmVyZmxvdy1hdXRvXCIpXG5cbiAgICBiYXNlLmFwcGVuZENoaWxkKG5vZGVDb250YWluZXIpXG5cbiAgICAvLyBSZW5kZXIgYW5kIGFwcGVuZCB0aGUgbm9kZXNcbiAgICBhcHBlbmROb2Rlcyhub2RlQ29udGFpbmVyLCB0cmVlKVxuXG5cbiAgICAvLyBDaGVjayBpZiBub2RlcyBzaG91bGQgYmUgY29sbGFwc2VkXG4gICAgaWYgKGNvbGxhcHNlZCl7XG4gICAgICAgICQoXCIjXCIgKyBpZCkuZmluZChcIi5cIiArIHN0eWxlcy5ncm91cGVkQ2hlY2tib3hDYXJldCkuZWFjaChmdW5jdGlvbiAoKXtcbiAgICAgICAgICAgIGhpZGVMaXN0RWxlbWVudCh0aGlzLCBcInRvZ2dsZVwiKVxuICAgICAgICB9KVxuICAgIH1cblxuXG4gICAgJChkb2N1bWVudCkub24oXCJzaGlueTpjb25uZWN0ZWRcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlZ2lzdGVyRXZlbnRzKGlkKVxuICAgIH0pO1xuXG59XG5cblxuZXhwb3J0IHtjcmVhdGVUcmVlfSIsIm1vZHVsZS5leHBvcnRzID0gSFRNTFdpZGdldHM7IiwibW9kdWxlLmV4cG9ydHMgPSBTaGlueTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJ3dpZGdldHMnO1xuaW1wb3J0ICdzaGlueSc7XG5cbmltcG9ydCB7Y3JlYXRlVHJlZX0gZnJvbSBcIi4uL21vZHVsZXMvcmVuZGVyVHJlZS5qc1wiO1xuXG5IVE1MV2lkZ2V0cy53aWRnZXQoe1xuXG4gIG5hbWU6ICd0cmVlY2hlY2tib3gnLFxuXG4gIHR5cGU6ICdvdXRwdXQnLFxuXG4gIGZhY3Rvcnk6IGZ1bmN0aW9uKGVsLCB3aWR0aCwgaGVpZ2h0KSB7XG5cbiAgICAvLyBUT0RPOiBkZWZpbmUgc2hhcmVkIHZhcmlhYmxlcyBmb3IgdGhpcyBpbnN0YW5jZVxuXG4gICAgcmV0dXJuIHtcblxuICAgICAgcmVuZGVyVmFsdWU6IGZ1bmN0aW9uKHgpIHtcblxuICAgICAgICBjcmVhdGVUcmVlKGVsLmlkLCB4LmxhYmVsLCB4LmNob2ljZXMsIHgubGV2ZWxzLCB4LmNvbGxhcHNlZClcblxuICAgICAgICAvLyBIVE1MV2lkZ2V0cy53aWRnZXQgc2V0cyBhIGRlZmF1bHQgc2l6ZS4gUmVtb3ZlIHRoaXMgZGVmYXVsdCBzaXplIGFuZCBtYWtlIGF1dG8uXG4gICAgICAgICQoXCIjXCIgKyBlbC5pZCkuY3NzKFwiaGVpZ2h0XCIsIFwiYXV0b1wiKS5jc3MoXCJ3aWR0aFwiLCBcImF1dG9cIilcbiAgICAgIH0sXG5cbiAgICAgIHJlc2l6ZTogZnVuY3Rpb24od2lkdGgsIGhlaWdodCkge1xuXG4gICAgICAgIC8vIFRPRE86IGNvZGUgdG8gcmUtcmVuZGVyIHRoZSB3aWRnZXQgd2l0aCBhIG5ldyBzaXplXG5cbiAgICAgIH1cblxuICAgIH07XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9