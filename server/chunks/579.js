"use strict";
exports.id = 579;
exports.ids = [579];
exports.modules = {

/***/ 7579:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2296);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6076);




const propTypes = {
    name: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
    label: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    type: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    placeholder: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    errorMessage: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    onHandleChange: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
    maxLength: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number)
};
const Input = ({ name , type , onHandleChange , placeholder , errorMessage , label , maxLength ,  })=>{
    const [field, meta] = (0,formik__WEBPACK_IMPORTED_MODULE_2__.useField)(name);
    const hasError = meta.touched && !!meta.error;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-col",
        children: [
            label && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                className: "font-medium pb-2",
                htmlFor: name,
                children: label
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                id: name,
                name: name,
                placeholder: placeholder,
                className: `border rounded p-4 text-black  ${hasError ? "border-4 border-red-500" : ""}`,
                onChange: onHandleChange,
                type: type,
                maxLength: maxLength,
                ...field
            }),
            hasError && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "mt-1 text-red-500 text-sm",
                children: errorMessage
            })
        ]
    }));
};
Input.propTypes = propTypes;
Input.defaultProps = {
    type: "text",
    placeholder: "",
    errorMessage: "This is a required field",
    label: "",
    maxLength: _utils_constants__WEBPACK_IMPORTED_MODULE_3__/* .INPUT_MAX_LENGTH */ .ze,
    onHandleChange: null
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Input);


/***/ })

};
;