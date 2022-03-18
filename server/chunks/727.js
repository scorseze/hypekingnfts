"use strict";
exports.id = 727;
exports.ids = [727];
exports.modules = {

/***/ 9625:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Spinner_Spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1149);



const buttonSize = {
    sm: "p-2",
    lg: "p-4"
};
const propTypes = {
    onHandleClick: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
    label: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    isDisabled: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
    isLoading: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
    className: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    isTypeSubmit: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
    size: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(Object.keys(buttonSize)),
    icon: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node)
};
const Button = ({ onHandleClick , label , isDisabled , isLoading , className , isTypeSubmit , size , icon ,  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
        type: isTypeSubmit ? "submit" : "button",
        className: ` text-white font-bold rounded flex justify-center items-center ${buttonSize[size]} ${className} ${isDisabled ? "bg-gray-300 cursor-not-allowed" : "bg-red-500 hover:bg-red-600"}`,
        onClick: onHandleClick,
        disabled: isDisabled,
        children: [
            icon,
            label,
            isLoading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "ml-4",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    color: isDisabled && "text-gray-400" || ""
                })
            })
        ]
    })
;
Button.defaultProps = {
    label: "",
    isDisabled: false,
    isLoading: false,
    className: "",
    isTypeSubmit: false,
    onHandleClick: ()=>{},
    size: "sm",
    icon: null
};
Button.propTypes = propTypes;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);


/***/ }),

/***/ 1149:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Spinner)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_spinners_GridLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2094);
/* harmony import */ var react_spinners_GridLoader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_spinners_GridLoader__WEBPACK_IMPORTED_MODULE_2__);



function Spinner() {
    const color = "#ff2d2d";
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "fixed top-0 left-0 z-50 block w-full h-full bg-background opacity-90 ",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "flex items-center justify-center h-full",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_spinners_GridLoader__WEBPACK_IMPORTED_MODULE_2___default()), {
                color: color,
                loading: true,
                size: 35
            })
        })
    }));
};


/***/ }),

/***/ 1838:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ nftmarketaddress),
/* harmony export */   "k": () => (/* binding */ nftaddress)
/* harmony export */ });
const nftmarketaddress = "0xfd28C70196fF19BCB27a2BC8a5a2194a7A1764e4";
const nftaddress = "0xF642E2936Db02998127b6cF77DC3b01E3A064A44";


/***/ }),

/***/ 3630:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "X": () => (/* binding */ EthersProvider),
  "Z": () => (/* binding */ contexts_useEthers)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@web3-react/core"
var core_ = __webpack_require__(8054);
// EXTERNAL MODULE: external "ethers"
var external_ethers_ = __webpack_require__(1982);
;// CONCATENATED MODULE: ./artifacts/contracts/NFT.sol/NFT.json
const NFT_namespaceObject = JSON.parse('{"Mt":[{"inputs":[{"internalType":"address","name":"marketplaceAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"IPFStokenURI","type":"string"}],"name":"createToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"getTokenIds","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"}]}');
;// CONCATENATED MODULE: ./artifacts/contracts/NFTMarket.sol/NFTMarket.json
const NFTMarket_namespaceObject = JSON.parse('{"Mt":[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"itemId","type":"uint256"},{"indexed":true,"internalType":"address","name":"nftContract","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"address","name":"seller","type":"address"},{"indexed":false,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"uint256","name":"price","type":"uint256"},{"indexed":false,"internalType":"bool","name":"sold","type":"bool"},{"indexed":false,"internalType":"bool","name":"listed","type":"bool"}],"name":"MarketItemCreated","type":"event"},{"inputs":[{"internalType":"address","name":"nftContract","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"price","type":"uint256"}],"name":"createMarketItem","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"nftContract","type":"address"},{"internalType":"uint256","name":"itemId","type":"uint256"}],"name":"createMarketSale","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"fetchItemsCreated","outputs":[{"components":[{"internalType":"uint256","name":"itemId","type":"uint256"},{"internalType":"address","name":"nftContract","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"address payable","name":"seller","type":"address"},{"internalType":"address payable","name":"owner","type":"address"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"bool","name":"sold","type":"bool"},{"internalType":"bool","name":"listed","type":"bool"}],"internalType":"struct NFTMarket.MarketItem[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"fetchMarketItemHistory","outputs":[{"components":[{"internalType":"uint256","name":"itemId","type":"uint256"},{"internalType":"address","name":"nftContract","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"address payable","name":"seller","type":"address"},{"internalType":"address payable","name":"owner","type":"address"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"bool","name":"sold","type":"bool"},{"internalType":"bool","name":"listed","type":"bool"}],"internalType":"struct NFTMarket.MarketItem[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"fetchMarketItems","outputs":[{"components":[{"internalType":"uint256","name":"itemId","type":"uint256"},{"internalType":"address","name":"nftContract","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"address payable","name":"seller","type":"address"},{"internalType":"address payable","name":"owner","type":"address"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"bool","name":"sold","type":"bool"},{"internalType":"bool","name":"listed","type":"bool"}],"internalType":"struct NFTMarket.MarketItem[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getListingPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"nftContract","type":"address"},{"internalType":"uint256","name":"itemId","type":"uint256"}],"name":"removeMarketSale","outputs":[],"stateMutability":"payable","type":"function"}]}');
// EXTERNAL MODULE: ./config.js
var config = __webpack_require__(1838);
;// CONCATENATED MODULE: ./hooks/contexts/useEthers.js







const EthersContext = /*#__PURE__*/ (0,external_react_.createContext)();
/**
 * Context function that handles dynamic contract related values
 * @returns {
 * {signedMarketContract: signed market contract | null}
 *  signedTokenContract: signed market contract | null}
 */ const useEthers = ()=>{
    const { active , account , library  } = (0,core_.useWeb3React)();
    const { 0: signer , 1: setSigner  } = (0,external_react_.useState)(null);
    const { 0: signedMarketContract , 1: setSignedMarketContract  } = (0,external_react_.useState)(null);
    const { 0: signedTokenContract , 1: setSignedTokenContract  } = (0,external_react_.useState)(null);
    /** Clears signer and signed contracts */ const handleClear = ()=>{
        setSigner(null);
        setSignedMarketContract(null);
        setSignedTokenContract(null);
    };
    (0,external_react_.useEffect)(()=>{
        if (active) {
            return setSigner(library.getSigner(account));
        }
        return handleClear();
    }, [
        active,
        account,
        library
    ]);
    (0,external_react_.useEffect)(()=>{
        if (signer) {
            const marketContract1 = new external_ethers_.ethers.Contract(config/* nftmarketaddress */.A, NFTMarket_namespaceObject.Mt, signer);
            const tokenContract1 = new external_ethers_.ethers.Contract(config/* nftaddress */.k, NFT_namespaceObject.Mt, signer);
            setSignedMarketContract(marketContract1);
            setSignedTokenContract(tokenContract1);
        }
    }, [
        signer
    ]);
    return {
        signedMarketContract,
        signedTokenContract
    };
};
/** Static contract values */ const provider = new external_ethers_.ethers.providers.JsonRpcProvider("https://data-seed-prebsc-1-s1.binance.org:8545");
// const provider = new ethers.providers.JsonRpcProvider();
const tokenContract = new external_ethers_.ethers.Contract(config/* nftaddress */.k, NFT_namespaceObject.Mt, provider);
const marketContract = new external_ethers_.ethers.Contract(config/* nftmarketaddress */.A, NFTMarket_namespaceObject.Mt, provider);
/** Context provider */ const EthersProvider = ({ children  })=>{
    const values = {
        ...useEthers(),
        tokenContract,
        marketContract
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx(EthersContext.Provider, {
        value: values,
        children: children
    }));
};
/** Export context to be able to use them in child component */ /* harmony default export */ const contexts_useEthers = (()=>(0,external_react_.useContext)(EthersContext));


/***/ }),

/***/ 6076:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IT": () => (/* binding */ HEADER_ROUTES),
/* harmony export */   "ze": () => (/* binding */ INPUT_MAX_LENGTH),
/* harmony export */   "kX": () => (/* binding */ TEXTAREA_MAX_LENGTH),
/* harmony export */   "z6": () => (/* binding */ CRYPTO_CURRENCY),
/* harmony export */   "aI": () => (/* binding */ ACTION_TYPES)
/* harmony export */ });
const HEADER_ROUTES = {
    HOME: "/",
    CREATE_ITEM: "/create-item",
    MY_ASSETS: "/my-assets",
    CREATOR_DASHBOARD: "/creator-dashboard"
};
const INPUT_MAX_LENGTH = 64;
const TEXTAREA_MAX_LENGTH = 255;
const CRYPTO_CURRENCY = "ether";
const ACTION_TYPES = {
    LIST_ITEM: "list_item",
    REMOVE_ITEM: "remove_item",
    BUY: "buy"
};



/***/ })

};
;