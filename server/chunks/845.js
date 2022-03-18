"use strict";
exports.id = 845;
exports.ids = [845];
exports.modules = {

/***/ 8845:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8054);
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_web3_react_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1187);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_formatItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7153);
/* harmony import */ var _contexts_useEthers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3630);






/**
 * hook to get nfts the connected wallet currently owns
 * @returns { data: [] | array of objects, isLoading: boolean }
 */ const useGetOwnedNfts = ()=>{
    const { 0: nfts , 1: setNfts  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    const { 0: isLoading , 1: setIsLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const { active , account  } = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_1__.useWeb3React)();
    const { tokenContract  } = (0,_contexts_useEthers__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
    const loadNFTs = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async ()=>{
        setIsLoading(true);
        if (!active || !tokenContract) {
            // Clears soldNfts when wallet is disconnected
            setNfts([]);
            setIsLoading(false);
            return;
        }
        const data1 = await tokenContract.getTokenIds(account).catch((error)=>{
            react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.error(`${error}`);
            return null;
        });
        if (data1) {
            const formattedItems = await Promise.all(data1.map(async (item)=>{
                const tokenUri = await tokenContract.tokenURI(item.toNumber());
                const meta = await axios__WEBPACK_IMPORTED_MODULE_3___default().get(tokenUri);
                return (0,_utils_formatItem__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)({
                    tokenId: item
                }, meta);
            }));
            setNfts(formattedItems);
        }
        setIsLoading(false);
    }, [
        tokenContract,
        active,
        account
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        loadNFTs();
    }, [
        loadNFTs
    ]);
    return {
        data1: nfts,
        isLoading,
        refetch: loadNFTs
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useGetOwnedNfts);


/***/ })

};
;