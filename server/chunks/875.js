"use strict";
exports.id = 875;
exports.ids = [875];
exports.modules = {

/***/ 8875:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1187);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1838);
/* harmony import */ var _utils_toastUpdate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(594);
/* harmony import */ var _contexts_useEthers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3630);





/**
 * hook to list nft for sale
 * @returns {{removeListingNftMutation: function}, {isLoading: bool}}
 */ const useRemoveListedNft = ()=>{
    const { 0: isLoading , 1: setIsLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const toastRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const { signedMarketContract  } = (0,_contexts_useEthers__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    /** function to list nft
   * @param {itemId} itemId id to be removed from listing
   * @returns {Promise< object {transaction receipt data} >} self-descriptive
   */ const removeListingNftMutation = async (itemId)=>{
        setIsLoading(true);
        toastRef.current = (0,react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast)("Waiting for transaction approval", {
            isLoading: true
        });
        const transaction = await signedMarketContract.removeMarketSale(_config__WEBPACK_IMPORTED_MODULE_4__/* .nftaddress */ .k, itemId).then(async (res)=>{
            (0,_utils_toastUpdate__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(toastRef.current, react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.TYPE.DEFAULT, "Processing transaction", true);
            return res.wait().then((transactionReceipt)=>{
                (0,_utils_toastUpdate__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(toastRef.current, react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.TYPE.SUCCESS, "Item removed successfully!");
                return transactionReceipt;
            }).catch((err)=>{
                (0,_utils_toastUpdate__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(toastRef.current, react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.TYPE.ERROR, err.message);
                return err;
            });
        }).catch((err)=>{
            (0,_utils_toastUpdate__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(toastRef.current, react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.TYPE.ERROR, err.message);
            return err;
        });
        setIsLoading(false);
        return transaction;
    };
    return {
        removeListingNftMutation,
        isLoading
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useRemoveListedNft);


/***/ }),

/***/ 594:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1187);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_0__);

/**
 * funtion to update toast
 * @param {toastId} string self-descriptive
 * @param {type} string one of: "info", "success", "warning", "error", "default"
 * @param {message} string self-descriptive
 * @param {isLoading} bool self-descriptive
 * @returns {function} updated toast
 */ const toastUpdate = (toastId, type, message, isLoading)=>react_toastify__WEBPACK_IMPORTED_MODULE_0__.toast.update(toastId, {
        render: ()=>message
        ,
        type,
        autoClose: 3000,
        isLoading
    })
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toastUpdate);


/***/ })

};
;