"use strict";
exports.id = 748;
exports.ids = [748];
exports.modules = {

/***/ 2143:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ ToggleWalletPanelProvider),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const ToggleWalletPanelContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
/**
 * Context provider to toggle wallet panel
 * @returns {isWalletPanelOpen: bool, setIsWalletPanelOpen: func}
 *  */ const ToggleWalletPanelProvider = ({ children  })=>{
    const { 0: isWalletPanelOpen , 1: setIsWalletPanelOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const values = {
        isWalletPanelOpen,
        setIsWalletPanelOpen
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ToggleWalletPanelContext.Provider, {
        value: values,
        children: children
    }));
};
/**  Export context to be able to use them in child components */ /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ToggleWalletPanelContext));


/***/ }),

/***/ 4539:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * funtion to remove falsies or empty strings from className
 * @param {classess: []}
 * @returns {classes: str}
 */ const classNames = (...classes)=>classes.filter(Boolean).join(" ")
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (classNames);


/***/ })

};
;