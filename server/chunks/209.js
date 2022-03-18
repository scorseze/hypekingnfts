"use strict";
exports.id = 209;
exports.ids = [209];
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

/***/ 1152:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1982);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1187);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6076);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1838);
/* harmony import */ var _utils_toastUpdate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(594);
/* harmony import */ var _contexts_useEthers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3630);







/**
 * hook to buy nft
 * @returns {{buyNftMutation: function}, {isLoading: bool}}
 */ const useBuyNft = ()=>{
    const { 0: isLoading , 1: setIsLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const toastRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const { signedMarketContract  } = (0,_contexts_useEthers__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
    /** function to buy nft
   * @param {object} nft to be bought
   * @returns {Promise< object {transaction receipt data} >} self-descriptive
   */ const buyNftMutation = async (nft)=>{
        const price = ethers__WEBPACK_IMPORTED_MODULE_1__.ethers.utils.parseUnits(nft.price.toString(), _utils_constants__WEBPACK_IMPORTED_MODULE_3__/* .CRYPTO_CURRENCY */ .z6);
        setIsLoading(true);
        toastRef.current = (0,react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast)("Waiting for transaction approval", {
            isLoading: true
        });
        const transaction = await signedMarketContract.createMarketSale(_config__WEBPACK_IMPORTED_MODULE_6__/* .nftaddress */ .k, nft.itemId, {
            value: price
        }).then(async (res)=>{
            (0,_utils_toastUpdate__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(toastRef.current, react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.TYPE.DEFAULT, "Processing transaction", true);
            return res.wait().then((transactionReceipt)=>{
                (0,_utils_toastUpdate__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(toastRef.current, react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.TYPE.SUCCESS, "Purchase successful!");
                return transactionReceipt;
            }).catch((err)=>{
                (0,_utils_toastUpdate__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(toastRef.current, react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.TYPE.ERROR, err.message);
                return err;
            });
        }).catch((err)=>{
            let errorMessage = err.message;
            if (err.data.code === -32000) {
                errorMessage = "Insufficient funds";
            }
            (0,_utils_toastUpdate__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(toastRef.current, react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.TYPE.ERROR, errorMessage);
            return err;
        });
        setIsLoading(false);
        return transaction;
    };
    return {
        buyNftMutation,
        isLoading
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useBuyNft);


/***/ })

};
;