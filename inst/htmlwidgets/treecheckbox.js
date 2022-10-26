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


/* The ConstructTree class takes in a list of records and a list of levels, and builds a tree of nodes
where each node represents a level and each node's children represent the next level */
class ConstructTree {
    root
    constructor(data, levels) {
        this.buildTree(data, levels)
    }


/**
 * > The function takes in a data set and a list of levels, and builds a tree with the data set
 * @param data - the data you want to build the tree from
 * @param levels - an array of strings that represent the levels of the tree.
 */
    buildTree(data, levels){
        let root = new Node("root")
        let newData

        data.forEach(record => {
            newData = []
            levels.forEach(level => {
                newData.push(record[level])
            })
            this.#findOrAppend(root, newData)
        })
        this.root = root
    }

/**
 * Returns the max depth of the tree
 * @returns The depth of the tree
 */
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

/**
 * > Given a tree and a list of values, find the node in the tree that matches the last value in the
 * list, and if it doesn't exist, create it
 * @param tree - the tree to search
 * @param values - an array of values to be added to the tree
 * @returns The tree with the new values added.
 */
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
    
/**
 * > The function takes a node and a list of values to find. It returns the node that matches the last
 * value in the list, and the list of values that were not found
 * @param node - the node that we are currently searching
 * @param find - an array of strings that represent the path to the node you want to find
 * @returns The node that is the last in the path, and the path that is left to be searched.
 */
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


/* A node is a value, a list of children, and a parent */
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







/* A function that generates a unique ID. */
let generateID = (function(n) {
    return function() {
        n += 1
        return n;
    }
}(-1))



/**
 * It creates a span element, adds the class `groupedCheckboxCaret` to it, and sets its inner text to
 * "▼".
 * @returns A span element with the class "groupedCheckboxCaret" and the inner text "▼"
 */
function createCaret(){
    let caret = document.createElement("span")
    caret.classList.add(_tree_css__WEBPACK_IMPORTED_MODULE_2__["default"].groupedCheckboxCaret)
    caret.innerText = "▼"
    return(caret)
}

/**
 * It creates a checkbox input element
 * @param nodeName - The name of the node
 * @param nodeID - The ID of the node.
 * @returns The inputCheckbox element
 */
function createInputCheckbox(nodeName, nodeID) {
    let inputCheckbox = document.createElement("input")
    inputCheckbox.classList.add("grouped-checkbox-input", "form-check-input")
    inputCheckbox.type = "checkbox"
    inputCheckbox.value = nodeName
    inputCheckbox.id = "node-input-check" + nodeID
    return(inputCheckbox)
}

/**
 * It creates a label for a checkbox
 * @param nodeName - the name of the node
 * @param id - the id of the node
 * @returns A label element
 */
function createCheckboxLabel(nodeName, id){
    let labelCheckbox = document.createElement("label")
    labelCheckbox.classList.add("form-check-label")
    labelCheckbox.for = "node-input-check" + id
    labelCheckbox.innerHTML = nodeName
    return(labelCheckbox)
}

/**
 * It generates a container with two buttons, one to select all checkboxes and one to deselect all
 * checkboxes
 * @returns A div with two buttons.
 */
function generateSelectButtons(){
    let container = $("<div>", {"class": "d-flex justify-content-evenly"})
    container.append($("<button>", {"class": "flex-child grouped-checkbox-select-all btn btn-outline-fg",
        "id": "grouped-checkbox-select-all-" + generateID(), "css": {"font-size": "x-small"}}).text("Select All"))
    container.append($("<button>", {"class": "flex-child grouped-checkbox-deselect-all btn btn-outline-fg",
        "id": "grouped-checkbox-deselect-all-" + generateID(), "css": {"font-size": "x-small"}}).text("Deselect All"))

    container.append($("<button>", {"class": "flex-child grouped-checkbox-expand-all btn btn-outline-fg", 
    "id": "grouped-checkbox-expand-all-" + generateID(), "css": {"font-size": "x-small"}}).text("Expand All"))

    container.append($("<button>", {"class": "flex-child grouped-checkbox-collapse-all btn btn-outline-fg", 
    "id": "grouped-checkbox-collapse-all-" + generateID(), "css": {"font-size": "x-small"}}).text("Collapse All"))
   
    return(container)
}



/**
 * It takes an element and an animation type, and toggles the visibility of the element's siblings
 * @param element - the element that is clicked to hide/show
 * @param animation - "toggle" or "slide"
 */
function hideListElement(element, animation="toggle"){
    const animations = {"toggle": {"show": "show", "hide": "hide"}, "slide": {"show": "slideDown", "hide": "slideUp"}}

    let caret = $(element)
    if (!(animation in animations)){
        throw new Error("The animation type is not supported.")

    }

    let collapsedStatus
    if (caret.text() == "▼") {
        caret.text("▶")
        caret.siblings("." + _tree_css__WEBPACK_IMPORTED_MODULE_2__["default"].groupedCheckboxList)[animations[animation]["hide"]]()
        collapsedStatus = "collapsed"
    } else {
        caret.text("▼")
        caret.siblings("." + _tree_css__WEBPACK_IMPORTED_MODULE_2__["default"].groupedCheckboxList)[animations[animation]["show"]]()
        collapsedStatus = "expanded"
    }
}



/**
 * It takes the id of a checkboxGroupInput, finds all the checkboxes that are checked, and then sets
 * the Shiny input to the values of the checked checkboxes
 * @param id - The id of the checkboxGroupInput
 */
function setInput(id){
    let selected = []
    $("#" + id).find("input:checkbox:checked").each(function(){
        selected.push($(this).val())
    })

    // Set output
    Shiny.setInputValue(id, selected, {priority: "event"});

}

/* Registering events for the checkboxes. */
function registerEvents(id){

    let base = $("#" + id)

    // Hide if caret is clicked
    base.find("." + _tree_css__WEBPACK_IMPORTED_MODULE_2__["default"].groupedCheckboxCaret).on("click", function (){
        hideListElement(this, "toggle")
    })

    // if parent group checkbox get changed, so will children
    base.find(".grouped-checkbox-input").on("click",function(){
        // Select all children and change prop checked
        let element = $(this)
        element.siblings("ul").children().find(".grouped-checkbox-input").prop("checked", element.is(":checked"))

        // If not all children have the same check value, set parent to indeterminate.
        let checkStatus = [element.is(":checked")]
        element.parent().parent().siblings().children().children("input[type='checkbox']").each(function(){
            checkStatus.push($(this).is(":checked"))
        })

        
        let uniqueValues = [... new Set(checkStatus)]

        // Get parent checkbox which inderterminate needs too change.
        let parentCheckbox = element.parent().parent().parent().siblings(".grouped-checkbox-input")
        if (uniqueValues.length > 1){
            // Intermediate should be set as true
            parentCheckbox.prop({indeterminate: true, checked: false})
        } else {
            // Intermediate should be set to false. Value checked can be grabbed by getting the value from the element
            parentCheckbox.prop({indeterminate: false, checked: element.is(":checked")})
        }        
        setInput(id)
    })


    // Select all button
    base.find(".grouped-checkbox-select-all").on("click", function(){
        base.find(".grouped-checkbox-input").prop({indeterminate: false, checked: true})
        setInput(id)

    })

    // Deselect all
    base.find(".grouped-checkbox-deselect-all").on("click", function(){
        base.find(".grouped-checkbox-input").prop({indeterminate: false, checked: false})
        setInput(id)
    })

    // Expand all button
    base.find(".grouped-checkbox-expand-all").on("click", function(){
        console.log("Clicked expand all")
        base.find("." + _tree_css__WEBPACK_IMPORTED_MODULE_2__["default"].groupedCheckboxCaret).each(function(){
            let caret = $(this)
            if (caret.text() == "▶") {
                caret.text("▼")
                caret.siblings("." + _tree_css__WEBPACK_IMPORTED_MODULE_2__["default"].groupedCheckboxList).show()
                caret.siblings("." + _tree_css__WEBPACK_IMPORTED_MODULE_2__["default"].groupedCheckboxList).show()
            }
        })
    })
    

    // Collapse all button
    base.find(".grouped-checkbox-collapse-all").on("click", function(){
        base.find("." + _tree_css__WEBPACK_IMPORTED_MODULE_2__["default"].groupedCheckboxCaret).each(function(){
            let caret = $(this)
            if (caret.text() == "▼") {
                caret.text("▶")
                caret.siblings("." + _tree_css__WEBPACK_IMPORTED_MODULE_2__["default"].groupedCheckboxList).hide()
                caret.siblings("." + _tree_css__WEBPACK_IMPORTED_MODULE_2__["default"].groupedCheckboxList).hide()
            }
        })
    })

}



function updateCollapseButtonStatus(collapseButton, event=null){
    
    // Set text of collapse button to "Expand All" if event is "collapsed"
    let buttonText = collapseButton.text()
    
    if (event == "collapsed"){
        if (buttonText == "Expand All"){
            collapseButton.text("Collapse All")
        } else {
            collapseButton.text("Expand All")
        }
    } else if (event == "expanded"){
        if (buttonText == "Expand All"){
            collapseButton.text("Collapse All")
        } else {
            collapseButton.text("Expand All")
        }
    }


    
}
/**
 * > The function `parseTree` takes two arguments, `choices` and `levels`, and returns a new instance
 * of the `ConstructTree` class
 * @param choices - an Object with the data that will be used.
 * @param levels - the number of levels in the tree
 * @returns A ConstructTree object
 */
function parseTree(choices, levels){
    return new _constructTree__WEBPACK_IMPORTED_MODULE_1__.ConstructTree(choices, levels)
}

/**
 * > This function takes a tree Object and appends the nodes to the DOM
 * @param parent - the parent element to append the nodes to
 * @param tree - the tree object
 */
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


/**
 * It creates a new node, assigns it an ID, and appends it to the parent node
 * @param nodeName - The name of the node
 * @param nodeParent - The parent node of the node you're creating.
 * @param hasChildren - boolean
 * @returns The ID of the node that was just created.
 */
function constructNode(nodeName, nodeParent, hasChildren){
    // this function uses plain JS which increases the speed it takes to render the nodes by four times in comparison
    // with the more readable jquery
    let parent
    if (!nodeParent){
        parent = document.getElementById("grouped-checkbox-list-base")
    } else {
        parent = document.getElementById("checkbox-list-" + nodeParent.htmlID)

    }

    // Create ID for the nodes
    let nNodes = generateID()
    let newNodeID = "node-" + nNodes

    let nodeListElement = document.createElement("li")


    // Create node and assign classes
    let node = document.createElement("span")
    node.classList.add("GroupedCheckBox-node", "text-fg")
    node.id = newNodeID


    if (hasChildren){
        node.appendChild(createCaret())
    }


    // Add the checkbox and label component
    node.appendChild(createInputCheckbox(nodeName, nNodes))
    node.appendChild(createCheckboxLabel(nodeName, nNodes))

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

/**
 * It takes a bunch of inputs, creates a tree, and then renders it
 * @param id - The id of the element that will hold the tree
 * @param label - The label for the tree
 * @param choices - A list of choices. Each choice is a list of length 2, where the first element is
 * the value of the choice, and the second element is the label.
 * @param levels - A vector of strings that indicate the levels of the tree.
 * @param collapsed - a boolean that determines whether the tree should be collapsed by default
 * @param selected - A vector of values that should be selected, If provided true.
 */
function createTree(id, label, choices, levels, collapsed, selected) {

    let base = document.getElementById(id)


    // Create label
    if (label){
        let new_label = document.createElement("h4");
        new_label.innerText = label;
        base.appendChild(new_label)
    }

    // create select buttons
    $("#" + id).append(generateSelectButtons)


    let tree = parseTree(choices, levels)

    // Create a container that holds the nodes
    let nodeContainer = document.createElement("div")
    nodeContainer.classList.add(_tree_css__WEBPACK_IMPORTED_MODULE_2__["default"].groupedCheckboxNodeHolder)
    nodeContainer.classList.add("overflow-auto")
    base.appendChild(nodeContainer)


    // Render and append the nodes
    appendNodes(nodeContainer, tree)



    // Hide the nodes
    if (typeof(collapsed) === "boolean" && collapsed){
        $("#" + id).find("." + _tree_css__WEBPACK_IMPORTED_MODULE_2__["default"].groupedCheckboxCaret).each(function(){
            hideListElement(this, "toggle")
        })
    } else {
        if (typeof(collapsed) === "string"){
            collapsed = [collapsed]
        }
        for (let value of collapsed){
            let caret = $("#" + id).find("input[value='" + value + "']").siblings("." + _tree_css__WEBPACK_IMPORTED_MODULE_2__["default"].groupedCheckboxCaret);
            hideListElement(caret, "toggle")
        }
    }

    // Check which nodes should be selected
    if (typeof(selected) === "boolean" & selected === true){
        $("#" + id).find(".grouped-checkbox-input").prop({indeterminate: false, checked: true})}
    else{

        // If selected is a string put it into an array
        if (typeof(selected) === "string"){
            selected = [selected]
        }

        for (let value of selected){
            $("#" + id).find(".grouped-checkbox-input[value='" + value + "']").prop({indeterminate: false, checked: true})
        }
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

        (0,_modules_renderTree_js__WEBPACK_IMPORTED_MODULE_2__.createTree)(el.id, x.label, x.choices, x.levels, x.collapsed, x.selected)

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZWNoZWNrYm94LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQSw4RkFBOEYsb0JBQW9CLDhCQUE4Qiw4QkFBOEIsOEJBQThCLCtCQUErQixzREFBc0Qsc0JBQXNCLEdBQUcsMkJBQTJCLHFCQUFxQixHQUFHLDJCQUEyQiw0QkFBNEIsdUJBQXVCLDhCQUE4QixxQkFBcUIsR0FBRywyQ0FBMkMscUlBQXFJLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxzQkFBc0IsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLGlDQUFpQztBQUMzMkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDWjFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscURBQXFEO0FBQ3JEOztBQUVBO0FBQ0EsZ0RBQWdEO0FBQ2hEOztBQUVBO0FBQ0EscUZBQXFGO0FBQ3JGOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EsS0FBSztBQUNMLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixxQkFBcUI7QUFDMUM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDckdhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkEsTUFBa0c7QUFDbEcsTUFBd0Y7QUFDeEYsTUFBK0Y7QUFDL0YsTUFBa0g7QUFDbEgsTUFBMkc7QUFDM0csTUFBMkc7QUFDM0csTUFBaUk7QUFDakk7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyw2R0FBTzs7OztBQUkyRTtBQUNuRyxPQUFPLGlFQUFlLDZHQUFPLElBQUksb0hBQWMsR0FBRyxvSEFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDdkdhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7O0FBRUE7QUFDQSxpRkFBaUY7QUFDakY7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLFdBQVc7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLG9CQUFvQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2SmU7QUFDK0I7QUFDZjs7Ozs7QUFLL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7OztBQUlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHNFQUEyQjtBQUNuRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MseUNBQXlDO0FBQ3pFLG9DQUFvQztBQUNwQyxxRUFBcUUsd0JBQXdCO0FBQzdGLG9DQUFvQztBQUNwQyx1RUFBdUUsd0JBQXdCOztBQUUvRixvQ0FBb0M7QUFDcEMsaUVBQWlFLHdCQUF3Qjs7QUFFekYsb0NBQW9DO0FBQ3BDLG1FQUFtRSx3QkFBd0I7QUFDM0Y7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLFdBQVcsK0JBQStCLFlBQVk7O0FBRTlFO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIscUVBQTBCO0FBQ3ZEO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsNkJBQTZCLHFFQUEwQjtBQUN2RDtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsdUNBQXVDLGtCQUFrQjs7QUFFekQ7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLG9CQUFvQixzRUFBMkI7QUFDL0M7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsb0NBQW9DO0FBQ3JFLFVBQVU7QUFDVjtBQUNBLGlDQUFpQyxzREFBc0Q7QUFDdkY7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQSxtREFBbUQsb0NBQW9DO0FBQ3ZGOztBQUVBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLG1EQUFtRCxxQ0FBcUM7QUFDeEY7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixzRUFBMkI7QUFDbkQ7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLHFFQUEwQjtBQUMvRCxxQ0FBcUMscUVBQTBCO0FBQy9EO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0Esd0JBQXdCLHNFQUEyQjtBQUNuRDtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMscUVBQTBCO0FBQy9ELHFDQUFxQyxxRUFBMEI7QUFDL0Q7QUFDQSxTQUFTO0FBQ1QsS0FBSzs7QUFFTDs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHlEQUFhO0FBQzVCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLFNBQVMscUVBQTBCLHFDQUFxQzs7O0FBR25HOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx3QkFBd0IsVUFBVTtBQUNsQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDhCQUE4QixxRUFBMEI7QUFDeEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBLGdDQUFnQywyRUFBZ0M7QUFDaEU7QUFDQTs7O0FBR0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQSwrQkFBK0Isc0VBQTJCO0FBQzFEO0FBQ0EsU0FBUztBQUNULE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdGQUF3RixzRUFBMkI7QUFDbkg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwwREFBMEQsb0NBQW9DO0FBQzlGOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUZBQXFGLG9DQUFvQztBQUN6SDtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7O0FDblpBOzs7Ozs7Ozs7O0FDQUE7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7O0FDQWlCO0FBQ0Y7O0FBRXFDOztBQUVwRDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxRQUFRLGtFQUFVOztBQUVsQjtBQUNBO0FBQ0EsT0FBTzs7QUFFUDs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3NoaW55dHJlZWNoZWNrYm94Ly4vc3JjanMvbW9kdWxlcy90cmVlLmNzcyIsIndlYnBhY2s6Ly9zaGlueXRyZWVjaGVja2JveC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vc2hpbnl0cmVlY2hlY2tib3gvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9zaGlueXRyZWVjaGVja2JveC8uL3NyY2pzL21vZHVsZXMvdHJlZS5jc3M/OWNiMyIsIndlYnBhY2s6Ly9zaGlueXRyZWVjaGVja2JveC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9zaGlueXRyZWVjaGVja2JveC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vc2hpbnl0cmVlY2hlY2tib3gvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vc2hpbnl0cmVlY2hlY2tib3gvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vc2hpbnl0cmVlY2hlY2tib3gvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9zaGlueXRyZWVjaGVja2JveC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3NoaW55dHJlZWNoZWNrYm94Ly4vc3JjanMvbW9kdWxlcy9jb25zdHJ1Y3RUcmVlLmpzIiwid2VicGFjazovL3NoaW55dHJlZWNoZWNrYm94Ly4vc3JjanMvbW9kdWxlcy9yZW5kZXJUcmVlLmpzIiwid2VicGFjazovL3NoaW55dHJlZWNoZWNrYm94L2V4dGVybmFsIHZhciBcIkhUTUxXaWRnZXRzXCIiLCJ3ZWJwYWNrOi8vc2hpbnl0cmVlY2hlY2tib3gvZXh0ZXJuYWwgdmFyIFwiU2hpbnlcIiIsIndlYnBhY2s6Ly9zaGlueXRyZWVjaGVja2JveC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zaGlueXRyZWVjaGVja2JveC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9zaGlueXRyZWVjaGVja2JveC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vc2hpbnl0cmVlY2hlY2tib3gvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9zaGlueXRyZWVjaGVja2JveC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3NoaW55dHJlZWNoZWNrYm94L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9zaGlueXRyZWVjaGVja2JveC8uL3NyY2pzL3dpZGdldHMvdHJlZWNoZWNrYm94LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogU3R5bGUgdGhlIGNhcmV0L2Fycm93ICovXFxuLlVOd2t4ZXU4SmFMVVI3enNMT0xjIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7IC8qIFByZXZlbnQgdGV4dCBzZWxlY3Rpb24gKi9cXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIG1hcmdpbi1yaWdodDogNnB4O1xcbn1cXG5cXG4uZHBHOVZKQ2JFMVQzaHZOcVdBWFEge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuLmZSRHBtSko5TVJYYW5FUmRsZ3VQIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjY2NjYztcXG4gIG1heC1oZWlnaHQ6IDI1dmg7XFxufS8qIyBzb3VyY2VNYXBwaW5nVVJMPXRyZWUuY3NzLm1hcCAqL1wiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyY2pzL21vZHVsZXMvdHJlZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmNqcy9tb2R1bGVzL3RyZWUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUNBLDBCQUFBO0FBQ0E7RUFDRSxlQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUEsRUFBQSwyQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUNBRjs7QURHQTtFQUNFLGdCQUFBO0FDQUY7O0FER0E7RUFDRSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQ0FGLENBQUEsbUNBQUFcIixcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImdyb3VwZWRDaGVja2JveENhcmV0XCI6IFwiVU53a3hldThKYUxVUjd6c0xPTGNcIixcblx0XCJncm91cGVkQ2hlY2tib3hMaXN0XCI6IFwiZHBHOVZKQ2JFMVQzaHZOcVdBWFFcIixcblx0XCJncm91cGVkQ2hlY2tib3hOb2RlSG9sZGVyXCI6IFwiZlJEcG1KSjlNUlhhbkVSZGxndVBcIlxufTtcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1swXS51c2VbMV0hLi90cmVlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzBdLnVzZVsxXSEuL3RyZWUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIlxuXG4vKiBUaGUgQ29uc3RydWN0VHJlZSBjbGFzcyB0YWtlcyBpbiBhIGxpc3Qgb2YgcmVjb3JkcyBhbmQgYSBsaXN0IG9mIGxldmVscywgYW5kIGJ1aWxkcyBhIHRyZWUgb2Ygbm9kZXNcbndoZXJlIGVhY2ggbm9kZSByZXByZXNlbnRzIGEgbGV2ZWwgYW5kIGVhY2ggbm9kZSdzIGNoaWxkcmVuIHJlcHJlc2VudCB0aGUgbmV4dCBsZXZlbCAqL1xuY2xhc3MgQ29uc3RydWN0VHJlZSB7XG4gICAgcm9vdFxuICAgIGNvbnN0cnVjdG9yKGRhdGEsIGxldmVscykge1xuICAgICAgICB0aGlzLmJ1aWxkVHJlZShkYXRhLCBsZXZlbHMpXG4gICAgfVxuXG5cbi8qKlxuICogPiBUaGUgZnVuY3Rpb24gdGFrZXMgaW4gYSBkYXRhIHNldCBhbmQgYSBsaXN0IG9mIGxldmVscywgYW5kIGJ1aWxkcyBhIHRyZWUgd2l0aCB0aGUgZGF0YSBzZXRcbiAqIEBwYXJhbSBkYXRhIC0gdGhlIGRhdGEgeW91IHdhbnQgdG8gYnVpbGQgdGhlIHRyZWUgZnJvbVxuICogQHBhcmFtIGxldmVscyAtIGFuIGFycmF5IG9mIHN0cmluZ3MgdGhhdCByZXByZXNlbnQgdGhlIGxldmVscyBvZiB0aGUgdHJlZS5cbiAqL1xuICAgIGJ1aWxkVHJlZShkYXRhLCBsZXZlbHMpe1xuICAgICAgICBsZXQgcm9vdCA9IG5ldyBOb2RlKFwicm9vdFwiKVxuICAgICAgICBsZXQgbmV3RGF0YVxuXG4gICAgICAgIGRhdGEuZm9yRWFjaChyZWNvcmQgPT4ge1xuICAgICAgICAgICAgbmV3RGF0YSA9IFtdXG4gICAgICAgICAgICBsZXZlbHMuZm9yRWFjaChsZXZlbCA9PiB7XG4gICAgICAgICAgICAgICAgbmV3RGF0YS5wdXNoKHJlY29yZFtsZXZlbF0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgdGhpcy4jZmluZE9yQXBwZW5kKHJvb3QsIG5ld0RhdGEpXG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMucm9vdCA9IHJvb3RcbiAgICB9XG5cbi8qKlxuICogUmV0dXJucyB0aGUgbWF4IGRlcHRoIG9mIHRoZSB0cmVlXG4gKiBAcmV0dXJucyBUaGUgZGVwdGggb2YgdGhlIHRyZWVcbiAqL1xuICAgIGZpbmRNYXhEZXB0aCgpe1xuICAgICAgICBsZXQgcXVldWUgPSBbXVxuICAgICAgICBsZXQgZGVwdGggPSAwXG5cbiAgICAgICAgcXVldWUucHVzaCh0aGlzLnJvb3QpXG5cbiAgICAgICAgd2hpbGUocXVldWUubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICBsZXQgc2l6ZSA9IHF1ZXVlLmxlbmd0aFxuXG4gICAgICAgICAgICBsZXQgY3VycmVudFxuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemUgOyBpKyspe1xuICAgICAgICAgICAgICAgIGN1cnJlbnQgPSBxdWV1ZS5zaGlmdCgpXG5cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBjaGlsZCBvZiBjdXJyZW50LmNoaWxkcmVuKXtcbiAgICAgICAgICAgICAgICAgICAgcXVldWUucHVzaChjaGlsZClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkZXB0aCArK1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkZXB0aCAtIDFcbiAgICB9XG5cbi8qKlxuICogPiBHaXZlbiBhIHRyZWUgYW5kIGEgbGlzdCBvZiB2YWx1ZXMsIGZpbmQgdGhlIG5vZGUgaW4gdGhlIHRyZWUgdGhhdCBtYXRjaGVzIHRoZSBsYXN0IHZhbHVlIGluIHRoZVxuICogbGlzdCwgYW5kIGlmIGl0IGRvZXNuJ3QgZXhpc3QsIGNyZWF0ZSBpdFxuICogQHBhcmFtIHRyZWUgLSB0aGUgdHJlZSB0byBzZWFyY2hcbiAqIEBwYXJhbSB2YWx1ZXMgLSBhbiBhcnJheSBvZiB2YWx1ZXMgdG8gYmUgYWRkZWQgdG8gdGhlIHRyZWVcbiAqIEByZXR1cm5zIFRoZSB0cmVlIHdpdGggdGhlIG5ldyB2YWx1ZXMgYWRkZWQuXG4gKi9cbiAgICAjZmluZE9yQXBwZW5kKHRyZWUsIHZhbHVlcyl7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWVzLmxlbmd0aCA7IGkrKyl7XG4gICAgICAgICAgICBsZXQga2V5UXVldWUgPSB2YWx1ZXMuc2xpY2UoMCwgaSArIDEpXG4gICAgICAgICAgICBsZXQgdmFsdWUgPSB2YWx1ZXNbaV1cbiAgICAgICAgICAgIGxldCBbbm9kZUluLCBfXSA9IHRoaXMuI3JlY3Vyc2l2ZVNlYXJjaCh0cmVlLCBrZXlRdWV1ZSlcbiAgICAgICAgICAgIGlmIChub2RlSW4udmFsdWUgIT09IHZhbHVlKXtcbiAgICAgICAgICAgICAgICBsZXQgbmV3Tm9kZSA9IG5ldyBOb2RlKHZhbHVlKVxuICAgICAgICAgICAgICAgIG5vZGVJbi5hZGRfY2hpbGQobmV3Tm9kZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4odHJlZSlcbiAgICB9XG4gICAgXG4vKipcbiAqID4gVGhlIGZ1bmN0aW9uIHRha2VzIGEgbm9kZSBhbmQgYSBsaXN0IG9mIHZhbHVlcyB0byBmaW5kLiBJdCByZXR1cm5zIHRoZSBub2RlIHRoYXQgbWF0Y2hlcyB0aGUgbGFzdFxuICogdmFsdWUgaW4gdGhlIGxpc3QsIGFuZCB0aGUgbGlzdCBvZiB2YWx1ZXMgdGhhdCB3ZXJlIG5vdCBmb3VuZFxuICogQHBhcmFtIG5vZGUgLSB0aGUgbm9kZSB0aGF0IHdlIGFyZSBjdXJyZW50bHkgc2VhcmNoaW5nXG4gKiBAcGFyYW0gZmluZCAtIGFuIGFycmF5IG9mIHN0cmluZ3MgdGhhdCByZXByZXNlbnQgdGhlIHBhdGggdG8gdGhlIG5vZGUgeW91IHdhbnQgdG8gZmluZFxuICogQHJldHVybnMgVGhlIG5vZGUgdGhhdCBpcyB0aGUgbGFzdCBpbiB0aGUgcGF0aCwgYW5kIHRoZSBwYXRoIHRoYXQgaXMgbGVmdCB0byBiZSBzZWFyY2hlZC5cbiAqL1xuICAgICNyZWN1cnNpdmVTZWFyY2gobm9kZSwgZmluZCl7XG4gICAgICAgIGxldCBjaGlsZHJlbiA9IG5vZGUuY2hpbGRyZW5cbiAgICAgICAgZm9yIChjb25zdCBjaGlsZCBvZiBjaGlsZHJlbikge1xuICAgICAgICAgICAgbGV0IGZpbmRpbmcgPSBmaW5kWzBdXG4gICAgICAgICAgICBpZiAoZmluZGluZyA9PT0gY2hpbGQudmFsdWUpe1xuICAgICAgICAgICAgICAgIGZpbmQuc2hpZnQoKVxuICAgICAgICAgICAgICAgIGlmIChmaW5kLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy4jcmVjdXJzaXZlU2VhcmNoKGNoaWxkLCBmaW5kKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybihbY2hpbGQsIGZpbmRdKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW25vZGUsIGZpbmRdXG4gICAgfVxuXG5cbn1cblxuXG4vKiBBIG5vZGUgaXMgYSB2YWx1ZSwgYSBsaXN0IG9mIGNoaWxkcmVuLCBhbmQgYSBwYXJlbnQgKi9cbmNsYXNzIE5vZGV7XG4gICAgY29uc3RydWN0b3IodmFsdWUsIGNoaWxkcmVuLCBwYXJlbnQpIHtcbiAgICAgICAgaWYgKCFjaGlsZHJlbil7XG4gICAgICAgICAgICBjaGlsZHJlbiA9IFtdXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlXG4gICAgICAgIHRoaXMuY2hpbGRyZW4gPSBjaGlsZHJlblxuICAgICAgICB0aGlzLnBhcmVudCA9IHBhcmVudFxuICAgICAgICB0aGlzLmRlcHRoID0gMFxuICAgIH1cblxuICAgIC8qXG4gICAgICogQWRkIGNoaWxkcmVuIHRvIG5vZGUsIGFuZCByZWdpc3RlciBwYXJlbnQgaW4gY2hpbGQuXG4gICAgICovXG4gICAgYWRkX2NoaWxkKGNoaWxkKXtcbiAgICAgICAgdGhpcy5jaGlsZHJlbi5wdXNoKGNoaWxkKVxuICAgICAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgICAgICAgY2hpbGQuYWRkUGFyZW50KHRoaXMpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgYWRkUGFyZW50KHBhcmVudCl7XG4gICAgICAgIHRoaXMucGFyZW50ID0gcGFyZW50XG4gICAgICAgIHRoaXMuZGVwdGggPSBwYXJlbnQuZGVwdGggKyAxXG4gICAgfVxuXG4gICAgZ2V0IGhhc19jaGlsZHJlbigpe1xuICAgICAgICByZXR1cm4oKHRoaXMuY2hpbGRyZW4ubGVuZ3RoID4gMCkpXG4gICAgfVxuXG4gICAgZ2V0IHNpYmxpbmdzKCl7XG4gICAgICAgIHJldHVybiB0aGlzLnBhcmVudC5jaGlsZHJlblxuICAgIH1cblxuICAgIGZpbmRPYmplY3RCeU5hbWUobmFtZSl7XG4gICAgICAgIGlmICh0aGlzLnZhbHVlID09PSBuYW1lKXtcbiAgICAgICAgICAgIHJldHVybiB0aGlzXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIHRoaXMuY2hpbGRyZW4pe1xuICAgICAgICAgICAgICAgIGxldCBtYXRjaCA9IGNoaWxkLmZpbmRPYmplY3RCeU5hbWUobmFtZSlcbiAgICAgICAgICAgICAgICBpZiAobWF0Y2gpe1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWF0Y2hcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuZXhwb3J0IHtDb25zdHJ1Y3RUcmVlfSIsImltcG9ydCAnc2hpbnknO1xuaW1wb3J0IHtDb25zdHJ1Y3RUcmVlfSBmcm9tIFwiLi9jb25zdHJ1Y3RUcmVlXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vdHJlZS5jc3MnXG5cblxuXG5cbi8qIEEgZnVuY3Rpb24gdGhhdCBnZW5lcmF0ZXMgYSB1bmlxdWUgSUQuICovXG5sZXQgZ2VuZXJhdGVJRCA9IChmdW5jdGlvbihuKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICBuICs9IDFcbiAgICAgICAgcmV0dXJuIG47XG4gICAgfVxufSgtMSkpXG5cblxuXG4vKipcbiAqIEl0IGNyZWF0ZXMgYSBzcGFuIGVsZW1lbnQsIGFkZHMgdGhlIGNsYXNzIGBncm91cGVkQ2hlY2tib3hDYXJldGAgdG8gaXQsIGFuZCBzZXRzIGl0cyBpbm5lciB0ZXh0IHRvXG4gKiBcIuKWvFwiLlxuICogQHJldHVybnMgQSBzcGFuIGVsZW1lbnQgd2l0aCB0aGUgY2xhc3MgXCJncm91cGVkQ2hlY2tib3hDYXJldFwiIGFuZCB0aGUgaW5uZXIgdGV4dCBcIuKWvFwiXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUNhcmV0KCl7XG4gICAgbGV0IGNhcmV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIilcbiAgICBjYXJldC5jbGFzc0xpc3QuYWRkKHN0eWxlcy5ncm91cGVkQ2hlY2tib3hDYXJldClcbiAgICBjYXJldC5pbm5lclRleHQgPSBcIuKWvFwiXG4gICAgcmV0dXJuKGNhcmV0KVxufVxuXG4vKipcbiAqIEl0IGNyZWF0ZXMgYSBjaGVja2JveCBpbnB1dCBlbGVtZW50XG4gKiBAcGFyYW0gbm9kZU5hbWUgLSBUaGUgbmFtZSBvZiB0aGUgbm9kZVxuICogQHBhcmFtIG5vZGVJRCAtIFRoZSBJRCBvZiB0aGUgbm9kZS5cbiAqIEByZXR1cm5zIFRoZSBpbnB1dENoZWNrYm94IGVsZW1lbnRcbiAqL1xuZnVuY3Rpb24gY3JlYXRlSW5wdXRDaGVja2JveChub2RlTmFtZSwgbm9kZUlEKSB7XG4gICAgbGV0IGlucHV0Q2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcbiAgICBpbnB1dENoZWNrYm94LmNsYXNzTGlzdC5hZGQoXCJncm91cGVkLWNoZWNrYm94LWlucHV0XCIsIFwiZm9ybS1jaGVjay1pbnB1dFwiKVxuICAgIGlucHV0Q2hlY2tib3gudHlwZSA9IFwiY2hlY2tib3hcIlxuICAgIGlucHV0Q2hlY2tib3gudmFsdWUgPSBub2RlTmFtZVxuICAgIGlucHV0Q2hlY2tib3guaWQgPSBcIm5vZGUtaW5wdXQtY2hlY2tcIiArIG5vZGVJRFxuICAgIHJldHVybihpbnB1dENoZWNrYm94KVxufVxuXG4vKipcbiAqIEl0IGNyZWF0ZXMgYSBsYWJlbCBmb3IgYSBjaGVja2JveFxuICogQHBhcmFtIG5vZGVOYW1lIC0gdGhlIG5hbWUgb2YgdGhlIG5vZGVcbiAqIEBwYXJhbSBpZCAtIHRoZSBpZCBvZiB0aGUgbm9kZVxuICogQHJldHVybnMgQSBsYWJlbCBlbGVtZW50XG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUNoZWNrYm94TGFiZWwobm9kZU5hbWUsIGlkKXtcbiAgICBsZXQgbGFiZWxDaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKVxuICAgIGxhYmVsQ2hlY2tib3guY2xhc3NMaXN0LmFkZChcImZvcm0tY2hlY2stbGFiZWxcIilcbiAgICBsYWJlbENoZWNrYm94LmZvciA9IFwibm9kZS1pbnB1dC1jaGVja1wiICsgaWRcbiAgICBsYWJlbENoZWNrYm94LmlubmVySFRNTCA9IG5vZGVOYW1lXG4gICAgcmV0dXJuKGxhYmVsQ2hlY2tib3gpXG59XG5cbi8qKlxuICogSXQgZ2VuZXJhdGVzIGEgY29udGFpbmVyIHdpdGggdHdvIGJ1dHRvbnMsIG9uZSB0byBzZWxlY3QgYWxsIGNoZWNrYm94ZXMgYW5kIG9uZSB0byBkZXNlbGVjdCBhbGxcbiAqIGNoZWNrYm94ZXNcbiAqIEByZXR1cm5zIEEgZGl2IHdpdGggdHdvIGJ1dHRvbnMuXG4gKi9cbmZ1bmN0aW9uIGdlbmVyYXRlU2VsZWN0QnV0dG9ucygpe1xuICAgIGxldCBjb250YWluZXIgPSAkKFwiPGRpdj5cIiwge1wiY2xhc3NcIjogXCJkLWZsZXgganVzdGlmeS1jb250ZW50LWV2ZW5seVwifSlcbiAgICBjb250YWluZXIuYXBwZW5kKCQoXCI8YnV0dG9uPlwiLCB7XCJjbGFzc1wiOiBcImZsZXgtY2hpbGQgZ3JvdXBlZC1jaGVja2JveC1zZWxlY3QtYWxsIGJ0biBidG4tb3V0bGluZS1mZ1wiLFxuICAgICAgICBcImlkXCI6IFwiZ3JvdXBlZC1jaGVja2JveC1zZWxlY3QtYWxsLVwiICsgZ2VuZXJhdGVJRCgpLCBcImNzc1wiOiB7XCJmb250LXNpemVcIjogXCJ4LXNtYWxsXCJ9fSkudGV4dChcIlNlbGVjdCBBbGxcIikpXG4gICAgY29udGFpbmVyLmFwcGVuZCgkKFwiPGJ1dHRvbj5cIiwge1wiY2xhc3NcIjogXCJmbGV4LWNoaWxkIGdyb3VwZWQtY2hlY2tib3gtZGVzZWxlY3QtYWxsIGJ0biBidG4tb3V0bGluZS1mZ1wiLFxuICAgICAgICBcImlkXCI6IFwiZ3JvdXBlZC1jaGVja2JveC1kZXNlbGVjdC1hbGwtXCIgKyBnZW5lcmF0ZUlEKCksIFwiY3NzXCI6IHtcImZvbnQtc2l6ZVwiOiBcIngtc21hbGxcIn19KS50ZXh0KFwiRGVzZWxlY3QgQWxsXCIpKVxuXG4gICAgY29udGFpbmVyLmFwcGVuZCgkKFwiPGJ1dHRvbj5cIiwge1wiY2xhc3NcIjogXCJmbGV4LWNoaWxkIGdyb3VwZWQtY2hlY2tib3gtZXhwYW5kLWFsbCBidG4gYnRuLW91dGxpbmUtZmdcIiwgXG4gICAgXCJpZFwiOiBcImdyb3VwZWQtY2hlY2tib3gtZXhwYW5kLWFsbC1cIiArIGdlbmVyYXRlSUQoKSwgXCJjc3NcIjoge1wiZm9udC1zaXplXCI6IFwieC1zbWFsbFwifX0pLnRleHQoXCJFeHBhbmQgQWxsXCIpKVxuXG4gICAgY29udGFpbmVyLmFwcGVuZCgkKFwiPGJ1dHRvbj5cIiwge1wiY2xhc3NcIjogXCJmbGV4LWNoaWxkIGdyb3VwZWQtY2hlY2tib3gtY29sbGFwc2UtYWxsIGJ0biBidG4tb3V0bGluZS1mZ1wiLCBcbiAgICBcImlkXCI6IFwiZ3JvdXBlZC1jaGVja2JveC1jb2xsYXBzZS1hbGwtXCIgKyBnZW5lcmF0ZUlEKCksIFwiY3NzXCI6IHtcImZvbnQtc2l6ZVwiOiBcIngtc21hbGxcIn19KS50ZXh0KFwiQ29sbGFwc2UgQWxsXCIpKVxuICAgXG4gICAgcmV0dXJuKGNvbnRhaW5lcilcbn1cblxuXG5cbi8qKlxuICogSXQgdGFrZXMgYW4gZWxlbWVudCBhbmQgYW4gYW5pbWF0aW9uIHR5cGUsIGFuZCB0b2dnbGVzIHRoZSB2aXNpYmlsaXR5IG9mIHRoZSBlbGVtZW50J3Mgc2libGluZ3NcbiAqIEBwYXJhbSBlbGVtZW50IC0gdGhlIGVsZW1lbnQgdGhhdCBpcyBjbGlja2VkIHRvIGhpZGUvc2hvd1xuICogQHBhcmFtIGFuaW1hdGlvbiAtIFwidG9nZ2xlXCIgb3IgXCJzbGlkZVwiXG4gKi9cbmZ1bmN0aW9uIGhpZGVMaXN0RWxlbWVudChlbGVtZW50LCBhbmltYXRpb249XCJ0b2dnbGVcIil7XG4gICAgY29uc3QgYW5pbWF0aW9ucyA9IHtcInRvZ2dsZVwiOiB7XCJzaG93XCI6IFwic2hvd1wiLCBcImhpZGVcIjogXCJoaWRlXCJ9LCBcInNsaWRlXCI6IHtcInNob3dcIjogXCJzbGlkZURvd25cIiwgXCJoaWRlXCI6IFwic2xpZGVVcFwifX1cblxuICAgIGxldCBjYXJldCA9ICQoZWxlbWVudClcbiAgICBpZiAoIShhbmltYXRpb24gaW4gYW5pbWF0aW9ucykpe1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgYW5pbWF0aW9uIHR5cGUgaXMgbm90IHN1cHBvcnRlZC5cIilcblxuICAgIH1cblxuICAgIGxldCBjb2xsYXBzZWRTdGF0dXNcbiAgICBpZiAoY2FyZXQudGV4dCgpID09IFwi4pa8XCIpIHtcbiAgICAgICAgY2FyZXQudGV4dChcIuKWtlwiKVxuICAgICAgICBjYXJldC5zaWJsaW5ncyhcIi5cIiArIHN0eWxlcy5ncm91cGVkQ2hlY2tib3hMaXN0KVthbmltYXRpb25zW2FuaW1hdGlvbl1bXCJoaWRlXCJdXSgpXG4gICAgICAgIGNvbGxhcHNlZFN0YXR1cyA9IFwiY29sbGFwc2VkXCJcbiAgICB9IGVsc2Uge1xuICAgICAgICBjYXJldC50ZXh0KFwi4pa8XCIpXG4gICAgICAgIGNhcmV0LnNpYmxpbmdzKFwiLlwiICsgc3R5bGVzLmdyb3VwZWRDaGVja2JveExpc3QpW2FuaW1hdGlvbnNbYW5pbWF0aW9uXVtcInNob3dcIl1dKClcbiAgICAgICAgY29sbGFwc2VkU3RhdHVzID0gXCJleHBhbmRlZFwiXG4gICAgfVxufVxuXG5cblxuLyoqXG4gKiBJdCB0YWtlcyB0aGUgaWQgb2YgYSBjaGVja2JveEdyb3VwSW5wdXQsIGZpbmRzIGFsbCB0aGUgY2hlY2tib3hlcyB0aGF0IGFyZSBjaGVja2VkLCBhbmQgdGhlbiBzZXRzXG4gKiB0aGUgU2hpbnkgaW5wdXQgdG8gdGhlIHZhbHVlcyBvZiB0aGUgY2hlY2tlZCBjaGVja2JveGVzXG4gKiBAcGFyYW0gaWQgLSBUaGUgaWQgb2YgdGhlIGNoZWNrYm94R3JvdXBJbnB1dFxuICovXG5mdW5jdGlvbiBzZXRJbnB1dChpZCl7XG4gICAgbGV0IHNlbGVjdGVkID0gW11cbiAgICAkKFwiI1wiICsgaWQpLmZpbmQoXCJpbnB1dDpjaGVja2JveDpjaGVja2VkXCIpLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgc2VsZWN0ZWQucHVzaCgkKHRoaXMpLnZhbCgpKVxuICAgIH0pXG5cbiAgICAvLyBTZXQgb3V0cHV0XG4gICAgU2hpbnkuc2V0SW5wdXRWYWx1ZShpZCwgc2VsZWN0ZWQsIHtwcmlvcml0eTogXCJldmVudFwifSk7XG5cbn1cblxuLyogUmVnaXN0ZXJpbmcgZXZlbnRzIGZvciB0aGUgY2hlY2tib3hlcy4gKi9cbmZ1bmN0aW9uIHJlZ2lzdGVyRXZlbnRzKGlkKXtcblxuICAgIGxldCBiYXNlID0gJChcIiNcIiArIGlkKVxuXG4gICAgLy8gSGlkZSBpZiBjYXJldCBpcyBjbGlja2VkXG4gICAgYmFzZS5maW5kKFwiLlwiICsgc3R5bGVzLmdyb3VwZWRDaGVja2JveENhcmV0KS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpe1xuICAgICAgICBoaWRlTGlzdEVsZW1lbnQodGhpcywgXCJ0b2dnbGVcIilcbiAgICB9KVxuXG4gICAgLy8gaWYgcGFyZW50IGdyb3VwIGNoZWNrYm94IGdldCBjaGFuZ2VkLCBzbyB3aWxsIGNoaWxkcmVuXG4gICAgYmFzZS5maW5kKFwiLmdyb3VwZWQtY2hlY2tib3gtaW5wdXRcIikub24oXCJjbGlja1wiLGZ1bmN0aW9uKCl7XG4gICAgICAgIC8vIFNlbGVjdCBhbGwgY2hpbGRyZW4gYW5kIGNoYW5nZSBwcm9wIGNoZWNrZWRcbiAgICAgICAgbGV0IGVsZW1lbnQgPSAkKHRoaXMpXG4gICAgICAgIGVsZW1lbnQuc2libGluZ3MoXCJ1bFwiKS5jaGlsZHJlbigpLmZpbmQoXCIuZ3JvdXBlZC1jaGVja2JveC1pbnB1dFwiKS5wcm9wKFwiY2hlY2tlZFwiLCBlbGVtZW50LmlzKFwiOmNoZWNrZWRcIikpXG5cbiAgICAgICAgLy8gSWYgbm90IGFsbCBjaGlsZHJlbiBoYXZlIHRoZSBzYW1lIGNoZWNrIHZhbHVlLCBzZXQgcGFyZW50IHRvIGluZGV0ZXJtaW5hdGUuXG4gICAgICAgIGxldCBjaGVja1N0YXR1cyA9IFtlbGVtZW50LmlzKFwiOmNoZWNrZWRcIildXG4gICAgICAgIGVsZW1lbnQucGFyZW50KCkucGFyZW50KCkuc2libGluZ3MoKS5jaGlsZHJlbigpLmNoaWxkcmVuKFwiaW5wdXRbdHlwZT0nY2hlY2tib3gnXVwiKS5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBjaGVja1N0YXR1cy5wdXNoKCQodGhpcykuaXMoXCI6Y2hlY2tlZFwiKSlcbiAgICAgICAgfSlcblxuICAgICAgICBcbiAgICAgICAgbGV0IHVuaXF1ZVZhbHVlcyA9IFsuLi4gbmV3IFNldChjaGVja1N0YXR1cyldXG5cbiAgICAgICAgLy8gR2V0IHBhcmVudCBjaGVja2JveCB3aGljaCBpbmRlcnRlcm1pbmF0ZSBuZWVkcyB0b28gY2hhbmdlLlxuICAgICAgICBsZXQgcGFyZW50Q2hlY2tib3ggPSBlbGVtZW50LnBhcmVudCgpLnBhcmVudCgpLnBhcmVudCgpLnNpYmxpbmdzKFwiLmdyb3VwZWQtY2hlY2tib3gtaW5wdXRcIilcbiAgICAgICAgaWYgKHVuaXF1ZVZhbHVlcy5sZW5ndGggPiAxKXtcbiAgICAgICAgICAgIC8vIEludGVybWVkaWF0ZSBzaG91bGQgYmUgc2V0IGFzIHRydWVcbiAgICAgICAgICAgIHBhcmVudENoZWNrYm94LnByb3Aoe2luZGV0ZXJtaW5hdGU6IHRydWUsIGNoZWNrZWQ6IGZhbHNlfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIEludGVybWVkaWF0ZSBzaG91bGQgYmUgc2V0IHRvIGZhbHNlLiBWYWx1ZSBjaGVja2VkIGNhbiBiZSBncmFiYmVkIGJ5IGdldHRpbmcgdGhlIHZhbHVlIGZyb20gdGhlIGVsZW1lbnRcbiAgICAgICAgICAgIHBhcmVudENoZWNrYm94LnByb3Aoe2luZGV0ZXJtaW5hdGU6IGZhbHNlLCBjaGVja2VkOiBlbGVtZW50LmlzKFwiOmNoZWNrZWRcIil9KVxuICAgICAgICB9ICAgICAgICBcbiAgICAgICAgc2V0SW5wdXQoaWQpXG4gICAgfSlcblxuXG4gICAgLy8gU2VsZWN0IGFsbCBidXR0b25cbiAgICBiYXNlLmZpbmQoXCIuZ3JvdXBlZC1jaGVja2JveC1zZWxlY3QtYWxsXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcbiAgICAgICAgYmFzZS5maW5kKFwiLmdyb3VwZWQtY2hlY2tib3gtaW5wdXRcIikucHJvcCh7aW5kZXRlcm1pbmF0ZTogZmFsc2UsIGNoZWNrZWQ6IHRydWV9KVxuICAgICAgICBzZXRJbnB1dChpZClcblxuICAgIH0pXG5cbiAgICAvLyBEZXNlbGVjdCBhbGxcbiAgICBiYXNlLmZpbmQoXCIuZ3JvdXBlZC1jaGVja2JveC1kZXNlbGVjdC1hbGxcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuICAgICAgICBiYXNlLmZpbmQoXCIuZ3JvdXBlZC1jaGVja2JveC1pbnB1dFwiKS5wcm9wKHtpbmRldGVybWluYXRlOiBmYWxzZSwgY2hlY2tlZDogZmFsc2V9KVxuICAgICAgICBzZXRJbnB1dChpZClcbiAgICB9KVxuXG4gICAgLy8gRXhwYW5kIGFsbCBidXR0b25cbiAgICBiYXNlLmZpbmQoXCIuZ3JvdXBlZC1jaGVja2JveC1leHBhbmQtYWxsXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJDbGlja2VkIGV4cGFuZCBhbGxcIilcbiAgICAgICAgYmFzZS5maW5kKFwiLlwiICsgc3R5bGVzLmdyb3VwZWRDaGVja2JveENhcmV0KS5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBsZXQgY2FyZXQgPSAkKHRoaXMpXG4gICAgICAgICAgICBpZiAoY2FyZXQudGV4dCgpID09IFwi4pa2XCIpIHtcbiAgICAgICAgICAgICAgICBjYXJldC50ZXh0KFwi4pa8XCIpXG4gICAgICAgICAgICAgICAgY2FyZXQuc2libGluZ3MoXCIuXCIgKyBzdHlsZXMuZ3JvdXBlZENoZWNrYm94TGlzdCkuc2hvdygpXG4gICAgICAgICAgICAgICAgY2FyZXQuc2libGluZ3MoXCIuXCIgKyBzdHlsZXMuZ3JvdXBlZENoZWNrYm94TGlzdCkuc2hvdygpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSlcbiAgICBcblxuICAgIC8vIENvbGxhcHNlIGFsbCBidXR0b25cbiAgICBiYXNlLmZpbmQoXCIuZ3JvdXBlZC1jaGVja2JveC1jb2xsYXBzZS1hbGxcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuICAgICAgICBiYXNlLmZpbmQoXCIuXCIgKyBzdHlsZXMuZ3JvdXBlZENoZWNrYm94Q2FyZXQpLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGxldCBjYXJldCA9ICQodGhpcylcbiAgICAgICAgICAgIGlmIChjYXJldC50ZXh0KCkgPT0gXCLilrxcIikge1xuICAgICAgICAgICAgICAgIGNhcmV0LnRleHQoXCLilrZcIilcbiAgICAgICAgICAgICAgICBjYXJldC5zaWJsaW5ncyhcIi5cIiArIHN0eWxlcy5ncm91cGVkQ2hlY2tib3hMaXN0KS5oaWRlKClcbiAgICAgICAgICAgICAgICBjYXJldC5zaWJsaW5ncyhcIi5cIiArIHN0eWxlcy5ncm91cGVkQ2hlY2tib3hMaXN0KS5oaWRlKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9KVxuXG59XG5cblxuXG5mdW5jdGlvbiB1cGRhdGVDb2xsYXBzZUJ1dHRvblN0YXR1cyhjb2xsYXBzZUJ1dHRvbiwgZXZlbnQ9bnVsbCl7XG4gICAgXG4gICAgLy8gU2V0IHRleHQgb2YgY29sbGFwc2UgYnV0dG9uIHRvIFwiRXhwYW5kIEFsbFwiIGlmIGV2ZW50IGlzIFwiY29sbGFwc2VkXCJcbiAgICBsZXQgYnV0dG9uVGV4dCA9IGNvbGxhcHNlQnV0dG9uLnRleHQoKVxuICAgIFxuICAgIGlmIChldmVudCA9PSBcImNvbGxhcHNlZFwiKXtcbiAgICAgICAgaWYgKGJ1dHRvblRleHQgPT0gXCJFeHBhbmQgQWxsXCIpe1xuICAgICAgICAgICAgY29sbGFwc2VCdXR0b24udGV4dChcIkNvbGxhcHNlIEFsbFwiKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29sbGFwc2VCdXR0b24udGV4dChcIkV4cGFuZCBBbGxcIilcbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZXZlbnQgPT0gXCJleHBhbmRlZFwiKXtcbiAgICAgICAgaWYgKGJ1dHRvblRleHQgPT0gXCJFeHBhbmQgQWxsXCIpe1xuICAgICAgICAgICAgY29sbGFwc2VCdXR0b24udGV4dChcIkNvbGxhcHNlIEFsbFwiKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29sbGFwc2VCdXR0b24udGV4dChcIkV4cGFuZCBBbGxcIilcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgXG59XG4vKipcbiAqID4gVGhlIGZ1bmN0aW9uIGBwYXJzZVRyZWVgIHRha2VzIHR3byBhcmd1bWVudHMsIGBjaG9pY2VzYCBhbmQgYGxldmVsc2AsIGFuZCByZXR1cm5zIGEgbmV3IGluc3RhbmNlXG4gKiBvZiB0aGUgYENvbnN0cnVjdFRyZWVgIGNsYXNzXG4gKiBAcGFyYW0gY2hvaWNlcyAtIGFuIE9iamVjdCB3aXRoIHRoZSBkYXRhIHRoYXQgd2lsbCBiZSB1c2VkLlxuICogQHBhcmFtIGxldmVscyAtIHRoZSBudW1iZXIgb2YgbGV2ZWxzIGluIHRoZSB0cmVlXG4gKiBAcmV0dXJucyBBIENvbnN0cnVjdFRyZWUgb2JqZWN0XG4gKi9cbmZ1bmN0aW9uIHBhcnNlVHJlZShjaG9pY2VzLCBsZXZlbHMpe1xuICAgIHJldHVybiBuZXcgQ29uc3RydWN0VHJlZShjaG9pY2VzLCBsZXZlbHMpXG59XG5cbi8qKlxuICogPiBUaGlzIGZ1bmN0aW9uIHRha2VzIGEgdHJlZSBPYmplY3QgYW5kIGFwcGVuZHMgdGhlIG5vZGVzIHRvIHRoZSBET01cbiAqIEBwYXJhbSBwYXJlbnQgLSB0aGUgcGFyZW50IGVsZW1lbnQgdG8gYXBwZW5kIHRoZSBub2RlcyB0b1xuICogQHBhcmFtIHRyZWUgLSB0aGUgdHJlZSBvYmplY3RcbiAqL1xuZnVuY3Rpb24gYXBwZW5kTm9kZXMocGFyZW50LCB0cmVlKSB7XG4gICAgbGV0IGJhc2UgPSAkKHBhcmVudClcbiAgICBiYXNlLmFwcGVuZCgkKFwiPHVsPlwiLCB7XCJjbGFzc1wiOiBzdHlsZXMuZ3JvdXBlZENoZWNrYm94TGlzdCwgXCJpZFwiOiBcImdyb3VwZWQtY2hlY2tib3gtbGlzdC1iYXNlXCJ9KSlcblxuXG4gICAgbGV0IHF1ZXVlID0gW11cblxuICAgIHF1ZXVlLnB1c2godHJlZS5yb290KVxuXG4gICAgd2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgbGV0IHNpemUgPSBxdWV1ZS5sZW5ndGhcbiAgICAgICAgbGV0IGN1cnJlbnRcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemU7IGkrKykge1xuICAgICAgICAgICAgY3VycmVudCA9IHF1ZXVlLnNoaWZ0KClcblxuICAgICAgICAgICAgZm9yIChsZXQgY2hpbGQgb2YgY3VycmVudC5jaGlsZHJlbikge1xuICAgICAgICAgICAgICAgIHF1ZXVlLnB1c2goY2hpbGQpXG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkLnBhcmVudC52YWx1ZSA9PT0gXCJyb290XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQuaHRtbElEID0gY29uc3RydWN0Tm9kZShjaGlsZC52YWx1ZSwgbnVsbCwgY2hpbGQuaGFzX2NoaWxkcmVuKVxuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZC5odG1sSUQgPSBjb25zdHJ1Y3ROb2RlKGNoaWxkLnZhbHVlLCBjaGlsZC5wYXJlbnQsIGNoaWxkLmhhc19jaGlsZHJlbilcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4vKipcbiAqIEl0IGNyZWF0ZXMgYSBuZXcgbm9kZSwgYXNzaWducyBpdCBhbiBJRCwgYW5kIGFwcGVuZHMgaXQgdG8gdGhlIHBhcmVudCBub2RlXG4gKiBAcGFyYW0gbm9kZU5hbWUgLSBUaGUgbmFtZSBvZiB0aGUgbm9kZVxuICogQHBhcmFtIG5vZGVQYXJlbnQgLSBUaGUgcGFyZW50IG5vZGUgb2YgdGhlIG5vZGUgeW91J3JlIGNyZWF0aW5nLlxuICogQHBhcmFtIGhhc0NoaWxkcmVuIC0gYm9vbGVhblxuICogQHJldHVybnMgVGhlIElEIG9mIHRoZSBub2RlIHRoYXQgd2FzIGp1c3QgY3JlYXRlZC5cbiAqL1xuZnVuY3Rpb24gY29uc3RydWN0Tm9kZShub2RlTmFtZSwgbm9kZVBhcmVudCwgaGFzQ2hpbGRyZW4pe1xuICAgIC8vIHRoaXMgZnVuY3Rpb24gdXNlcyBwbGFpbiBKUyB3aGljaCBpbmNyZWFzZXMgdGhlIHNwZWVkIGl0IHRha2VzIHRvIHJlbmRlciB0aGUgbm9kZXMgYnkgZm91ciB0aW1lcyBpbiBjb21wYXJpc29uXG4gICAgLy8gd2l0aCB0aGUgbW9yZSByZWFkYWJsZSBqcXVlcnlcbiAgICBsZXQgcGFyZW50XG4gICAgaWYgKCFub2RlUGFyZW50KXtcbiAgICAgICAgcGFyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJncm91cGVkLWNoZWNrYm94LWxpc3QtYmFzZVwiKVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcmVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2hlY2tib3gtbGlzdC1cIiArIG5vZGVQYXJlbnQuaHRtbElEKVxuXG4gICAgfVxuXG4gICAgLy8gQ3JlYXRlIElEIGZvciB0aGUgbm9kZXNcbiAgICBsZXQgbk5vZGVzID0gZ2VuZXJhdGVJRCgpXG4gICAgbGV0IG5ld05vZGVJRCA9IFwibm9kZS1cIiArIG5Ob2Rlc1xuXG4gICAgbGV0IG5vZGVMaXN0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKVxuXG5cbiAgICAvLyBDcmVhdGUgbm9kZSBhbmQgYXNzaWduIGNsYXNzZXNcbiAgICBsZXQgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpXG4gICAgbm9kZS5jbGFzc0xpc3QuYWRkKFwiR3JvdXBlZENoZWNrQm94LW5vZGVcIiwgXCJ0ZXh0LWZnXCIpXG4gICAgbm9kZS5pZCA9IG5ld05vZGVJRFxuXG5cbiAgICBpZiAoaGFzQ2hpbGRyZW4pe1xuICAgICAgICBub2RlLmFwcGVuZENoaWxkKGNyZWF0ZUNhcmV0KCkpXG4gICAgfVxuXG5cbiAgICAvLyBBZGQgdGhlIGNoZWNrYm94IGFuZCBsYWJlbCBjb21wb25lbnRcbiAgICBub2RlLmFwcGVuZENoaWxkKGNyZWF0ZUlucHV0Q2hlY2tib3gobm9kZU5hbWUsIG5Ob2RlcykpXG4gICAgbm9kZS5hcHBlbmRDaGlsZChjcmVhdGVDaGVja2JveExhYmVsKG5vZGVOYW1lLCBuTm9kZXMpKVxuXG4gICAgaWYgKGhhc0NoaWxkcmVuKXtcbiAgICAgICAgbGV0IG5ld0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIilcbiAgICAgICAgbmV3TGlzdC5jbGFzc0xpc3QuYWRkKHN0eWxlcy5ncm91cGVkQ2hlY2tib3hMaXN0KVxuICAgICAgICBuZXdMaXN0LmlkID0gXCJjaGVja2JveC1saXN0LVwiICsgbmV3Tm9kZUlEXG4gICAgICAgIG5vZGUuYXBwZW5kQ2hpbGQobmV3TGlzdClcbiAgICB9XG5cbiAgICBub2RlTGlzdEVsZW1lbnQuYXBwZW5kQ2hpbGQobm9kZSlcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQobm9kZUxpc3RFbGVtZW50KVxuXG4gICAgcmV0dXJuIG5ld05vZGVJRFxufVxuXG4vKipcbiAqIEl0IHRha2VzIGEgYnVuY2ggb2YgaW5wdXRzLCBjcmVhdGVzIGEgdHJlZSwgYW5kIHRoZW4gcmVuZGVycyBpdFxuICogQHBhcmFtIGlkIC0gVGhlIGlkIG9mIHRoZSBlbGVtZW50IHRoYXQgd2lsbCBob2xkIHRoZSB0cmVlXG4gKiBAcGFyYW0gbGFiZWwgLSBUaGUgbGFiZWwgZm9yIHRoZSB0cmVlXG4gKiBAcGFyYW0gY2hvaWNlcyAtIEEgbGlzdCBvZiBjaG9pY2VzLiBFYWNoIGNob2ljZSBpcyBhIGxpc3Qgb2YgbGVuZ3RoIDIsIHdoZXJlIHRoZSBmaXJzdCBlbGVtZW50IGlzXG4gKiB0aGUgdmFsdWUgb2YgdGhlIGNob2ljZSwgYW5kIHRoZSBzZWNvbmQgZWxlbWVudCBpcyB0aGUgbGFiZWwuXG4gKiBAcGFyYW0gbGV2ZWxzIC0gQSB2ZWN0b3Igb2Ygc3RyaW5ncyB0aGF0IGluZGljYXRlIHRoZSBsZXZlbHMgb2YgdGhlIHRyZWUuXG4gKiBAcGFyYW0gY29sbGFwc2VkIC0gYSBib29sZWFuIHRoYXQgZGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSB0cmVlIHNob3VsZCBiZSBjb2xsYXBzZWQgYnkgZGVmYXVsdFxuICogQHBhcmFtIHNlbGVjdGVkIC0gQSB2ZWN0b3Igb2YgdmFsdWVzIHRoYXQgc2hvdWxkIGJlIHNlbGVjdGVkLCBJZiBwcm92aWRlZCB0cnVlLlxuICovXG5mdW5jdGlvbiBjcmVhdGVUcmVlKGlkLCBsYWJlbCwgY2hvaWNlcywgbGV2ZWxzLCBjb2xsYXBzZWQsIHNlbGVjdGVkKSB7XG5cbiAgICBsZXQgYmFzZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKVxuXG5cbiAgICAvLyBDcmVhdGUgbGFiZWxcbiAgICBpZiAobGFiZWwpe1xuICAgICAgICBsZXQgbmV3X2xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xuICAgICAgICBuZXdfbGFiZWwuaW5uZXJUZXh0ID0gbGFiZWw7XG4gICAgICAgIGJhc2UuYXBwZW5kQ2hpbGQobmV3X2xhYmVsKVxuICAgIH1cblxuICAgIC8vIGNyZWF0ZSBzZWxlY3QgYnV0dG9uc1xuICAgICQoXCIjXCIgKyBpZCkuYXBwZW5kKGdlbmVyYXRlU2VsZWN0QnV0dG9ucylcblxuXG4gICAgbGV0IHRyZWUgPSBwYXJzZVRyZWUoY2hvaWNlcywgbGV2ZWxzKVxuXG4gICAgLy8gQ3JlYXRlIGEgY29udGFpbmVyIHRoYXQgaG9sZHMgdGhlIG5vZGVzXG4gICAgbGV0IG5vZGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgbm9kZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKHN0eWxlcy5ncm91cGVkQ2hlY2tib3hOb2RlSG9sZGVyKVxuICAgIG5vZGVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm92ZXJmbG93LWF1dG9cIilcbiAgICBiYXNlLmFwcGVuZENoaWxkKG5vZGVDb250YWluZXIpXG5cblxuICAgIC8vIFJlbmRlciBhbmQgYXBwZW5kIHRoZSBub2Rlc1xuICAgIGFwcGVuZE5vZGVzKG5vZGVDb250YWluZXIsIHRyZWUpXG5cblxuXG4gICAgLy8gSGlkZSB0aGUgbm9kZXNcbiAgICBpZiAodHlwZW9mKGNvbGxhcHNlZCkgPT09IFwiYm9vbGVhblwiICYmIGNvbGxhcHNlZCl7XG4gICAgICAgICQoXCIjXCIgKyBpZCkuZmluZChcIi5cIiArIHN0eWxlcy5ncm91cGVkQ2hlY2tib3hDYXJldCkuZWFjaChmdW5jdGlvbigpe1xuICAgICAgICAgICAgaGlkZUxpc3RFbGVtZW50KHRoaXMsIFwidG9nZ2xlXCIpXG4gICAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHR5cGVvZihjb2xsYXBzZWQpID09PSBcInN0cmluZ1wiKXtcbiAgICAgICAgICAgIGNvbGxhcHNlZCA9IFtjb2xsYXBzZWRdXG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgdmFsdWUgb2YgY29sbGFwc2VkKXtcbiAgICAgICAgICAgIGxldCBjYXJldCA9ICQoXCIjXCIgKyBpZCkuZmluZChcImlucHV0W3ZhbHVlPSdcIiArIHZhbHVlICsgXCInXVwiKS5zaWJsaW5ncyhcIi5cIiArIHN0eWxlcy5ncm91cGVkQ2hlY2tib3hDYXJldCk7XG4gICAgICAgICAgICBoaWRlTGlzdEVsZW1lbnQoY2FyZXQsIFwidG9nZ2xlXCIpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDaGVjayB3aGljaCBub2RlcyBzaG91bGQgYmUgc2VsZWN0ZWRcbiAgICBpZiAodHlwZW9mKHNlbGVjdGVkKSA9PT0gXCJib29sZWFuXCIgJiBzZWxlY3RlZCA9PT0gdHJ1ZSl7XG4gICAgICAgICQoXCIjXCIgKyBpZCkuZmluZChcIi5ncm91cGVkLWNoZWNrYm94LWlucHV0XCIpLnByb3Aoe2luZGV0ZXJtaW5hdGU6IGZhbHNlLCBjaGVja2VkOiB0cnVlfSl9XG4gICAgZWxzZXtcblxuICAgICAgICAvLyBJZiBzZWxlY3RlZCBpcyBhIHN0cmluZyBwdXQgaXQgaW50byBhbiBhcnJheVxuICAgICAgICBpZiAodHlwZW9mKHNlbGVjdGVkKSA9PT0gXCJzdHJpbmdcIil7XG4gICAgICAgICAgICBzZWxlY3RlZCA9IFtzZWxlY3RlZF1cbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IHZhbHVlIG9mIHNlbGVjdGVkKXtcbiAgICAgICAgICAgICQoXCIjXCIgKyBpZCkuZmluZChcIi5ncm91cGVkLWNoZWNrYm94LWlucHV0W3ZhbHVlPSdcIiArIHZhbHVlICsgXCInXVwiKS5wcm9wKHtpbmRldGVybWluYXRlOiBmYWxzZSwgY2hlY2tlZDogdHJ1ZX0pXG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgICQoZG9jdW1lbnQpLm9uKFwic2hpbnk6Y29ubmVjdGVkXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICByZWdpc3RlckV2ZW50cyhpZClcbiAgICB9KTtcbn1cblxuXG5leHBvcnQge2NyZWF0ZVRyZWV9IiwibW9kdWxlLmV4cG9ydHMgPSBIVE1MV2lkZ2V0czsiLCJtb2R1bGUuZXhwb3J0cyA9IFNoaW55OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnd2lkZ2V0cyc7XG5pbXBvcnQgJ3NoaW55JztcblxuaW1wb3J0IHtjcmVhdGVUcmVlfSBmcm9tIFwiLi4vbW9kdWxlcy9yZW5kZXJUcmVlLmpzXCI7XG5cbkhUTUxXaWRnZXRzLndpZGdldCh7XG5cbiAgbmFtZTogJ3RyZWVjaGVja2JveCcsXG5cbiAgdHlwZTogJ291dHB1dCcsXG5cbiAgZmFjdG9yeTogZnVuY3Rpb24oZWwsIHdpZHRoLCBoZWlnaHQpIHtcblxuICAgIC8vIFRPRE86IGRlZmluZSBzaGFyZWQgdmFyaWFibGVzIGZvciB0aGlzIGluc3RhbmNlXG5cbiAgICByZXR1cm4ge1xuXG4gICAgICByZW5kZXJWYWx1ZTogZnVuY3Rpb24oeCkge1xuXG4gICAgICAgIGNyZWF0ZVRyZWUoZWwuaWQsIHgubGFiZWwsIHguY2hvaWNlcywgeC5sZXZlbHMsIHguY29sbGFwc2VkLCB4LnNlbGVjdGVkKVxuXG4gICAgICAgIC8vIEhUTUxXaWRnZXRzLndpZGdldCBzZXRzIGEgZGVmYXVsdCBzaXplLiBSZW1vdmUgdGhpcyBkZWZhdWx0IHNpemUgYW5kIG1ha2UgYXV0by5cbiAgICAgICAgJChcIiNcIiArIGVsLmlkKS5jc3MoXCJoZWlnaHRcIiwgXCJhdXRvXCIpLmNzcyhcIndpZHRoXCIsIFwiYXV0b1wiKVxuICAgICAgfSxcblxuICAgICAgcmVzaXplOiBmdW5jdGlvbih3aWR0aCwgaGVpZ2h0KSB7XG5cbiAgICAgICAgLy8gVE9ETzogY29kZSB0byByZS1yZW5kZXIgdGhlIHdpZGdldCB3aXRoIGEgbmV3IHNpemVcblxuICAgICAgfVxuXG4gICAgfTtcbiAgfVxufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=