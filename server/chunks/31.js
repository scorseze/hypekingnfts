"use strict";
exports.id = 31;
exports.ids = [31];
exports.modules = {

/***/ 31:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ NFTList_NFTList)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
// EXTERNAL MODULE: ./components/shared/Spinner/Spinner.js
var Spinner = __webpack_require__(1149);
// EXTERNAL MODULE: external "@web3-react/core"
var core_ = __webpack_require__(8054);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./assets/images/bnb.svg
var bnb = __webpack_require__(7704);
;// CONCATENATED MODULE: ./utils/propTypes.js

const nftPropType = external_prop_types_default().shape({
    description: (external_prop_types_default()).string.isRequired,
    image: (external_prop_types_default()).string.isRequired,
    name: (external_prop_types_default()).string.isRequired,
    tokenId: (external_prop_types_default()).number.isRequired
});


// EXTERNAL MODULE: ./utils/constants.js
var constants = __webpack_require__(6076);
// EXTERNAL MODULE: ./components/shared/Button/Button.js
var Button = __webpack_require__(9625);
;// CONCATENATED MODULE: ./components/NFTList/NFTListItem.js

/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */ /* eslint-disable jsx-a11y/click-events-have-key-events */ // TODO: Consider accessibility







const { LIST_ITEM , REMOVE_ITEM , BUY  } = constants/* ACTION_TYPES */.aI;
const actions = {
    [LIST_ITEM]: {
        label: "List item",
        action: LIST_ITEM
    },
    [REMOVE_ITEM]: {
        label: "Remove item",
        action: REMOVE_ITEM
    },
    [BUY]: {
        label: "Buy",
        action: BUY
    }
};
const propTypes = {
    nft: nftPropType.isRequired,
    onHandleAction: external_prop_types_default().oneOfType([
        (external_prop_types_default()).func,
        (external_prop_types_default()).bool
    ]),
    isActionLoading: (external_prop_types_default()).bool,
    selectedTokenId: (external_prop_types_default()).number
};
const NFTListItem = ({ nft , onHandleAction , isActionLoading , selectedTokenId ,  })=>{
    const { account  } = (0,core_.useWeb3React)();
    const router = (0,router_.useRouter)();
    const { name , image , description , price , seller , tokenId  } = nft;
    const hasAction = !!onHandleAction;
    const getAction = ()=>{
        if (!seller) {
            return actions[LIST_ITEM];
        }
        if (seller === account) {
            return actions[REMOVE_ITEM];
        }
        return actions[BUY];
    };
    const handleClick = ()=>{
        router.push({
            pathname: "/nft/[nft]",
            query: {
                nft: tokenId
            }
        });
    };
    const handleAction = (event)=>{
        event.stopPropagation();
        onHandleAction(nft, getAction().action);
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
        className: "relative text-gray-200 border-2 border-rose-600 shadow-homogen bg-background rounded-2xl",
        onClick: handleClick,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                className: "absolute z-10 inline-flex items-center px-3 text-sm font-semibold text-white rounded-full bg-rose-600 right-2 top-2",
                children: [
                    "# ",
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "pl-1 text-xl",
                        children: nft.itemId
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "p-4 cursor-pointer",
                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: image,
                    className: "object-cover aspect-square rounded-2xl"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "p-2",
                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: "text-2xl font-semibold",
                    children: name
                })
            }),
            price && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex p-4",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: "https://app.airnfts.com/coins/bnb.svg",
                        alt: "Metamask logo",
                        height: 28,
                        width: 28
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "text-2xl font-bold text-white ml-2",
                        children: price
                    })
                ]
            })
        ]
    }));
};
NFTListItem.defaultProps = {
    onHandleAction: null,
    isActionLoading: false,
    selectedTokenId: null
};
NFTListItem.propTypes = propTypes;
/* harmony default export */ const NFTList_NFTListItem = (NFTListItem);

;// CONCATENATED MODULE: ./components/NFTList/NFTList.js





const NFTList_propTypes = {
    nfts: external_prop_types_default().arrayOf(nftPropType).isRequired,
    onHandleAction: external_prop_types_default().oneOfType([
        (external_prop_types_default()).func,
        (external_prop_types_default()).bool
    ]),
    isActionLoading: (external_prop_types_default()).bool,
    isLoading: (external_prop_types_default()).bool.isRequired,
    emptyListMessage: (external_prop_types_default()).string.isRequired,
    selectedTokenId: (external_prop_types_default()).number
};
const getContent = (content)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "flex justify-center items-center flex-1",
        children: content
    })
;
const NFTList = ({ nfts , onHandleAction , isActionLoading , isLoading , emptyListMessage , selectedTokenId ,  })=>{
    if (isLoading) {
        return getContent(/*#__PURE__*/ jsx_runtime_.jsx(Spinner/* default */.Z, {
            size: "1"
        }));
    }
    if (!isLoading && !nfts.length) {
        return getContent(/*#__PURE__*/ jsx_runtime_.jsx("h1", {
            className: "text-2xl",
            children: emptyListMessage
        }));
    }
    return(/*#__PURE__*/ jsx_runtime_.jsx("ul", {
        className: "grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4 xl:grid-cols-4 2xl:grid-cols-5 pt-5",
        children: nfts.map((nft)=>/*#__PURE__*/ jsx_runtime_.jsx(NFTList_NFTListItem, {
                nft: nft,
                onHandleAction: onHandleAction,
                isActionLoading: isActionLoading,
                selectedTokenId: selectedTokenId
            }, nft.tokenId)
        )
    }));
};
NFTList.defaultProps = {
    onHandleAction: null,
    isActionLoading: false,
    selectedTokenId: null
};
NFTList.propTypes = NFTList_propTypes;
/* harmony default export */ const NFTList_NFTList = (NFTList);


/***/ })

};
;