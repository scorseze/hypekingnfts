"use strict";
exports.id = 65;
exports.ids = [65];
exports.modules = {

/***/ 7704:
/***/ (() => {

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/bnb.bd64e29f.svg","height":20,"width":20});

/***/ }),

/***/ 7153:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1982);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6076);
/* eslint-disable no-underscore-dangle */ 

/**
 *  function to format NFT data
 * @param {Object} item data from marketplace contract
 * @param {number | null} item.price
 * @param {BigNumber | number} item.tokenId
 * @param {BigNumber | number} item.itemId
 * @param {string | null} item.seller
 * @param {string | null} item.owner
 * @param {string | null} item.username
 * @param {bool} item.sold
 * @param {Object} meta metadata from TokenURI
 * @param {string} meta.image image url
 * @param {string} meta.name
 * @param {string} meta.description
 * @param {string} meta.author
 * @returns {Object} formatted nft data
 */ const formatItem = (item, meta)=>{
    var ref, ref1, ref2;
    return {
        price: item.price ? ethers__WEBPACK_IMPORTED_MODULE_0__.ethers.utils.formatUnits((ref = item.price) === null || ref === void 0 ? void 0 : ref.toString(), _constants__WEBPACK_IMPORTED_MODULE_1__/* .CRYPTO_CURRENCY */ .z6) : null,
        tokenId: ((ref1 = item.tokenId) === null || ref1 === void 0 ? void 0 : ref1._isBigNumber) ? item.tokenId.toNumber() : item.tokenId,
        itemId: ((ref2 = item.itemId) === null || ref2 === void 0 ? void 0 : ref2._isBigNumber) ? item.itemId.toNumber() : item.itemId || null,
        seller: item.seller || null,
        owner: item.owner,
        username: item.username,
        sold: item.sold,
        image: (meta === null || meta === void 0 ? void 0 : meta.data.image) || null,
        name: (meta === null || meta === void 0 ? void 0 : meta.data.name) || null,
        description: (meta === null || meta === void 0 ? void 0 : meta.data.description) || null,
        author: (meta === null || meta === void 0 ? void 0 : meta.data.author) || null
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatItem);


/***/ })

};
;