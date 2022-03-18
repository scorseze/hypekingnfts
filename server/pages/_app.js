"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 5137:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8768);
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shared_Button_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9625);
/* harmony import */ var _hooks_contexts_useToggleWalletPanel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2143);






const propTypes = {
    navOptions: prop_types__WEBPACK_IMPORTED_MODULE_2___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default().shape({
        route: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired),
        label: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired)
    })).isRequired,
    currentRoute: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired),
    isNavOpen: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool.isRequired),
    onSetIsNavOpen: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func.isRequired)
};
const Header = ({ navOptions , currentRoute , isNavOpen , onSetIsNavOpen  })=>{
    const { setIsWalletPanelOpen  } = (0,_hooks_contexts_useToggleWalletPanel__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
        className: "fixed inset-x-0 top-0 p-6 pb-4 z-40 bg-background h-20",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex items-center",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    className: "text-3xl font-bold text-white mr-4",
                    children: "Hype King"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-1 items-center ",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "hidden lg:block",
                            children: navOptions.map((option)=>{
                                const { route , label  } = option;
                                const isSelected = route === currentRoute;
                                return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                    href: route,
                                    passHref: true,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        className: `p-2 font-bold ${isSelected ? "bg-red-600 rounded-md text-white" : "text-white"}`,
                                        children: label
                                    })
                                }, route));
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "ml-auto flex items-center",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "lg:hidden flex",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                        type: "button",
                                        onClick: ()=>onSetIsNavOpen((prev)=>!prev
                                            )
                                        ,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "sr-only",
                                                children: "Open main menu"
                                            }),
                                            isNavOpen ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__.XIcon, {
                                                className: "block h-7 w-7",
                                                "aria-hidden": "true"
                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__.MenuIcon, {
                                                className: "block h-7 w-7",
                                                "aria-hidden": "true"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_shared_Button_Button__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                    icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__.CubeTransparentIcon, {
                                        className: "h-6 w-6",
                                        "aria-hidden": "true"
                                    }),
                                    onHandleClick: ()=>setIsWalletPanelOpen((prev)=>!prev
                                        )
                                    ,
                                    className: "hidden lg:block"
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    }));
};
Header.propTypes = propTypes;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);


/***/ }),

/***/ 4448:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8768);
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8054);
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_web3_react_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shared_SlideOverPanel_SlideOverPanel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9714);
/* harmony import */ var _shared_Button_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9625);
/* harmony import */ var _hooks_contexts_useToggleWalletPanel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2143);
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6076);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_shared_SlideOverPanel_SlideOverPanel__WEBPACK_IMPORTED_MODULE_5__]);
_shared_SlideOverPanel_SlideOverPanel__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









const { HOME , CREATE_ITEM  } = _utils_constants__WEBPACK_IMPORTED_MODULE_8__/* .HEADER_ROUTES */ .IT;
const propTypes = {
    isNavOpen: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool.isRequired),
    onSetIsNavOpen: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func.isRequired),
    navOptions: prop_types__WEBPACK_IMPORTED_MODULE_2___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default().shape({
        route: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired),
        label: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired)
    })).isRequired
};
const navIcons = {
    [HOME]: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__.HomeIcon, {
        className: "h-8 w-8 mr-3 text-pink-400",
        "aria-hidden": "true"
    }),
    [CREATE_ITEM]: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__.CurrencyDollarIcon, {
        className: "h-8 w-8 mr-3 text-pink-400",
        "aria-hidden": "true"
    })
};
const HeaderNavPanel = ({ isNavOpen , onSetIsNavOpen , navOptions  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const { active  } = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_4__.useWeb3React)();
    const { isWalletPanelOpen , setIsWalletPanelOpen  } = (0,_hooks_contexts_useToggleWalletPanel__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)();
    const handleClick = (href)=>{
        onSetIsNavOpen(false);
        router.push(href);
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_shared_SlideOverPanel_SlideOverPanel__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        isOpen: isNavOpen,
        onSetIsOpen: onSetIsNavOpen,
        shouldStayOpen: isWalletPanelOpen,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex flex-col h-full py-2 px-6",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    children: [
                        navOptions.map((option)=>{
                            const { route , label  } = option;
                            return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                type: "button",
                                className: "flex items-center hover:text-pink-400 py-4 w-full",
                                onClick: ()=>handleClick(route)
                                ,
                                children: [
                                    navIcons[route],
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "font-bold",
                                        children: label
                                    })
                                ]
                            }, route));
                        }),
                        active && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "py-4",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                type: "button",
                                className: "flex items-center hover:text-pink-400",
                                onClick: ()=>setIsWalletPanelOpen(true)
                                ,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__.CubeTransparentIcon, {
                                        className: "h-8 w-8 mr-3 text-pink-400",
                                        "aria-hidden": "true"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "font-bold",
                                        children: "My wallet"
                                    })
                                ]
                            })
                        })
                    ]
                }),
                !active && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_shared_Button_Button__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                    label: "Connect wallet",
                    icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__.CubeTransparentIcon, {
                        className: "h-6 w-6 mr-2",
                        "aria-hidden": "true"
                    }),
                    onHandleClick: ()=>setIsWalletPanelOpen(true)
                    ,
                    className: "mt-auto mb-2 p-3"
                })
            ]
        })
    }));
};
HeaderNavPanel.propTypes = propTypes;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeaderNavPanel);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2905:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1187);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8054);
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_web3_react_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1143);
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Header_Header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5137);
/* harmony import */ var _Header_HeaderNavPanel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4448);
/* harmony import */ var _Meta_Meta__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1392);
/* harmony import */ var _hooks_contexts_useToggleWalletPanel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2143);
/* harmony import */ var _WalletPanel_WalletPanel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6236);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8819);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6076);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Header_HeaderNavPanel__WEBPACK_IMPORTED_MODULE_7__, _WalletPanel_WalletPanel__WEBPACK_IMPORTED_MODULE_10__]);
([_Header_HeaderNavPanel__WEBPACK_IMPORTED_MODULE_7__, _WalletPanel_WalletPanel__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













const { HOME , CREATE_ITEM  } = _utils_constants__WEBPACK_IMPORTED_MODULE_12__/* .HEADER_ROUTES */ .IT;
const navOptions = [
    {
        route: HOME,
        label: "Home"
    },
    {
        route: CREATE_ITEM,
        label: "Mint NFT"
    }, 
];
const defaultMetaTitle = "Metaverse";
const contextClass = {
    success: "bg-green-200 text-green-600",
    error: "bg-red-600",
    default: "bg-gray-300",
    warning: "bg-yellow-200 text-yellow-600"
};
/**
 * Renders default app layout style
 */ const Layout = ({ children  })=>{
    var ref;
    const { 0: isNavOpen , 1: setIsNavOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { isWalletPanelOpen , setIsWalletPanelOpen  } = (0,_hooks_contexts_useToggleWalletPanel__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)();
    const { route , query  } = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const { chainId , active  } = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_4__.useWeb3React)();
    const routeTitle = ((ref = navOptions.find((option)=>option.route === route
    )) === null || ref === void 0 ? void 0 : ref.label) || `#${query.nft || "0000"}`;
    return(/** pt-20 to match navbar height */ /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "min-h-screen flex flex-col overflow-x-hidden pt-20",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_toastify__WEBPACK_IMPORTED_MODULE_3__.ToastContainer, {
                toastClassName: ({ type  })=>`${contextClass[type || "default"]} relative flex p-1 min-h-10 rounded-md justify-between overflow-hidden cursor-pointer mb-2`
                ,
                bodyClassName: ()=>"flex text-sm font-white font-med block p-3"
                ,
                position: "bottom-right",
                pauseOnFocusLoss: false,
                autoClose: 3000,
                closeOnClick: true
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Meta_Meta__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                title: `${defaultMetaTitle} ${routeTitle || query.nft}`
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                id: "modal"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Header_Header__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                currentRoute: route,
                navOptions: navOptions,
                isNavOpen: isNavOpen,
                onSetIsNavOpen: setIsNavOpen
            }),
            chainId !== 97 && active && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "bg-yellow-200 text-yellow-600 h-12 flex items-center justify-center",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_5__.ExclamationIcon, {
                        className: "h-6 w-6 mr-2"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: "Please switch to"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "underline ml-1",
                        children: "Bsc test net"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Header_HeaderNavPanel__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        isNavOpen: isNavOpen,
                        onSetIsNavOpen: setIsNavOpen,
                        onSetIsWalletPanelOpen: setIsWalletPanelOpen,
                        isWalletPanelOpen: isWalletPanelOpen,
                        navOptions: navOptions
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_WalletPanel_WalletPanel__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                        isNavOpen: isNavOpen
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "p-4 lg:px-8 flex flex-col flex-1",
                id: "layout-body",
                children: children
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1392:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Meta_Meta)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
;// CONCATENATED MODULE: ./components/Meta/Meta.js



const propTypes = {
    title: (external_prop_types_default()).string,
    keywords: (external_prop_types_default()).string,
    description: (external_prop_types_default()).string
};
const Meta = ({ title , keywords , description  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "viewport",
                content: "width=device-width, initial-scale=1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "keywords",
                content: keywords
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "description",
                content: description
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                charSet: "utf-8"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "msapplication-TileColor",
                content: "#da532c"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "theme-color",
                content: "#ffffff"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "apple-touch-icon",
                sizes: "152x152",
                href: "/apple-touch-icon.png"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "icon",
                type: "image/png",
                sizes: "32x32",
                href: "/favicon-32x32.png"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "icon",
                type: "image/png",
                sizes: "16x16",
                href: "/favicon-16x16.png"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "manifest",
                href: "/site.webmanifest"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "mask-icon",
                href: "/safari-pinned-tab.svg",
                color: "#5bbad5"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("title", {
                children: title
            })
        ]
    })
;
Meta.defaultProps = {
    title: "Metaverse Marketplace",
    keywords: "NFT, crypto, blockchain",
    description: "Get the latest news NFTs"
};
Meta.propTypes = propTypes;
/* harmony default export */ const Meta_Meta = (Meta);


/***/ }),

/***/ 6016:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8054);
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_web3_react_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1982);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8768);
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1187);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6076);
/* harmony import */ var _shared_Button_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9625);
/* harmony import */ var _shared_Modal_Modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2077);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_shared_Modal_Modal__WEBPACK_IMPORTED_MODULE_9__]);
_shared_Modal_Modal__WEBPACK_IMPORTED_MODULE_9__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];











const propTypes = {
    walletAddress: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired)
};
const WalletInfo = ({ walletAddress  })=>{
    const { 0: balance , 1: setBalance  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const { 0: isModalOpen , 1: setIsModalOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { account , library , chainId  } = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_3__.useWeb3React)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_10__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!!account && !!library) {
            let stale = false;
            library.getBalance(account).then((bal)=>{
                if (!stale) {
                    setBalance(ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.utils.formatUnits(bal === null || bal === void 0 ? void 0 : bal.toString(), _utils_constants__WEBPACK_IMPORTED_MODULE_7__/* .CRYPTO_CURRENCY */ .z6));
                }
            }).catch(()=>{
                if (!stale) {
                    setBalance(null);
                }
            });
            return ()=>{
                stale = true;
                setBalance(0);
            };
        }
        return null;
    }, [
        account,
        library,
        chainId
    ]);
    const modalBody = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-col",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_5__.CubeTransparentIcon, {
                className: "h-16 w-16 self-center text-red-600 my-2 transform rotate-12",
                "aria-hidden": "true"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "py-2",
                children: "Transfer funds to your wallet address below:"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col truncate lg:flex-row",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "bg-gray-100 p-2 rounded border-2 text-sm truncate lg:overflow-visible",
                        children: walletAddress
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_shared_Button_Button__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        label: "Copy",
                        className: "mt-2 px-6 lg:ml-2 lg:my-0",
                        onHandleClick: ()=>{
                            navigator.clipboard.writeText(walletAddress);
                            react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.success("Copied wallet address!");
                        }
                    })
                ]
            })
        ]
    });
    const handleClick = (e)=>{
        e.preventDefault();
        router.push('/perfil');
    };
    const handleModalClose = (event)=>{
        event.stopPropagation();
        setIsModalOpen(false);
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-col",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "border-2 m-6 mb-0 flex flex-col items-center rounded-b-none",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: "font-bold text-gray-400 p-2",
                        children: "Total balance"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex font-bold p-4",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "text-red-600 mr-2",
                                children: "BNB"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: balance
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_shared_Button_Button__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                label: "Add funds",
                className: "p-4 mx-6 rounded-t-none",
                onHandleClick: ()=>setIsModalOpen(true)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_shared_Modal_Modal__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                isOpen: isModalOpen,
                title: "Add funds",
                onHandleModalClose: handleModalClose,
                children: modalBody
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                type: "button",
                className: "p-4 mx-6 rounded-t-none dashbutton",
                onClick: handleClick,
                children: "Dashboard"
            })
        ]
    }));
};
WalletInfo.propTypes = propTypes;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WalletInfo);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6236:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8768);
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8054);
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_web3_react_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1187);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _shared_SlideOverPanel_SlideOverPanel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9714);
/* harmony import */ var _hooks_contexts_useToggleWalletPanel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2143);
/* harmony import */ var _WalletProvidersList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6175);
/* harmony import */ var _WalletInfo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6016);
/* harmony import */ var _shared_Dropdown_Dropdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7412);
/* harmony import */ var _utils_shortenWalletAddress__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(598);
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6076);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_shared_SlideOverPanel_SlideOverPanel__WEBPACK_IMPORTED_MODULE_6__, _WalletInfo__WEBPACK_IMPORTED_MODULE_9__, _shared_Dropdown_Dropdown__WEBPACK_IMPORTED_MODULE_10__]);
([_shared_SlideOverPanel_SlideOverPanel__WEBPACK_IMPORTED_MODULE_6__, _WalletInfo__WEBPACK_IMPORTED_MODULE_9__, _shared_Dropdown_Dropdown__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













const { CREATOR_DASHBOARD  } = _utils_constants__WEBPACK_IMPORTED_MODULE_11__/* .HEADER_ROUTES */ .IT;
const propTypes = {
    isNavOpen: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool.isRequired)
};
const WalletPanel = ({ isNavOpen  })=>{
    const { isWalletPanelOpen , setIsWalletPanelOpen  } = (0,_hooks_contexts_useToggleWalletPanel__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)();
    const { 0: walletAddress , 1: setWalletAddress  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { account , deactivate  } = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_4__.useWeb3React)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (account) {
            return setWalletAddress(account);
        }
        return setWalletAddress("");
    }, [
        account
    ]);
    const handleWalletDisconnect = (event)=>{
        event.stopPropagation();
        deactivate();
        react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.warn("Wallet disconnected successfully");
    };
    const dropdownOptions = [
        {
            label: "Logout",
            value: "logout",
            action: handleWalletDisconnect,
            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__.LogoutIcon, {
                className: "h-6 w-6 mr-2 text-red-600",
                "aria-hidden": "true"
            })
        }, 
    ];
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_shared_SlideOverPanel_SlideOverPanel__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        isOpen: isWalletPanelOpen,
        onSetIsOpen: setIsWalletPanelOpen,
        isNavOpen: isNavOpen,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex items-center border-b py-4 px-6 justify-between",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex items-center",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                    type: "button",
                                    className: "rounded-md text-gray-300 hover:text-black focus:outline-none focus:ring-2 focus:ring-white",
                                    onClick: ()=>setIsWalletPanelOpen(false)
                                    ,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "sr-only",
                                            children: "Close panel"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__.ChevronLeftIcon, {
                                            className: "h-6 w-6 mr-2 lg:hidden",
                                            "aria-hidden": "true"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_shared_Dropdown_Dropdown__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                    label: "My wallet",
                                    options: account ? dropdownOptions : [],
                                    icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__.UserCircleIcon, {
                                        className: "h-12 w-12 text-red-600 mr-2",
                                        "aria-hidden": "true"
                                    })
                                })
                            ]
                        }),
                        account && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            type: "button",
                            onClick: ()=>{
                                navigator.clipboard.writeText(account);
                                react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.success("Copied wallet dddress!");
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "text-sm text-gray-500",
                                children: (0,_utils_shortenWalletAddress__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)(account)
                            })
                        })
                    ]
                }),
                account ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_WalletInfo__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                    walletAddress: walletAddress
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_WalletProvidersList__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {})
            ]
        })
    }));
};
WalletPanel.propTypes = propTypes;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WalletPanel);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6175:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ WalletPanel_WalletProvidersList)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@web3-react/core"
var core_ = __webpack_require__(8054);
// EXTERNAL MODULE: external "react-toastify"
var external_react_toastify_ = __webpack_require__(1187);
;// CONCATENATED MODULE: external "@web3-react/injected-connector"
const injected_connector_namespaceObject = require("@web3-react/injected-connector");
;// CONCATENATED MODULE: external "@binance-chain/bsc-connector"
const bsc_connector_namespaceObject = require("@binance-chain/bsc-connector");
;// CONCATENATED MODULE: ./utils/connectors.js


const injected = new injected_connector_namespaceObject.InjectedConnector({
    supportedChainIds: [
        1,
        3,
        4,
        5,
        97,
        1337,
        80001
    ]
});
const bsc = new bsc_connector_namespaceObject.BscConnector({
    chainId: 97
});


;// CONCATENATED MODULE: ./assets/images/metamask-logo.webp
/* harmony default export */ const metamask_logo = ({"src":"/_next/static/media/metamask-logo.1dea1497.webp","height":345,"width":377,"blurDataURL":"data:image/webp;base64,UklGRsAAAABXRUJQVlA4WAoAAAAQAAAABwAABgAAQUxQSDkAAAAAuqsxDw4snrrr//zn5vr/8Mv////////Oj//5/Pz4/5TA/93l7dj/wvP////////yq76R8PeWtaUAVlA4IGAAAABQAgCdASoIAAcAAkA4JbACdLoB+AAC0hNVF3gA/DUrMmRM7SpoG3bzouwzExQv2wvg5eC89Qxi1GAY//zBYhsH/D8FhZJBVy8RPz8vg1/+SpddwtBBsafI6cbv139LAAA="});
;// CONCATENATED MODULE: ./assets/images/fortmatic-logo.webp
/* harmony default export */ const fortmatic_logo = ({"src":"/_next/static/media/fortmatic-logo.a0776c84.webp","height":300,"width":301,"blurDataURL":"data:image/webp;base64,UklGRogAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSDgAAAABYBtJkprzOQMpOiXOfLKYKYeImIDz//DOvW9PD1mY6WwREIlOZ46Hrjo7ong+z7M1wGAYXqBZBFZQOCAqAAAAkAEAnQEqCAAIAAJAOCWgAnS6AAOYAJv/1Bn/ibP+Js+e3+K31AzSAAAA"});
;// CONCATENATED MODULE: ./components/WalletPanel/WalletProvidersList.js






const connectors = {
    Injected: {
        name: "Metamask",
        logo: /*#__PURE__*/ jsx_runtime_.jsx("img", {
            src: "https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg",
            alt: "Metamask logo"
        }),
        method: injected
    }
};
const isMobileDevice = ()=>"ontouchstart" in window || "onmsgesturechange" in window
;
const dappUrl = "localhost";
const metamaskAppDeepLink = `https://metamask.app.link/dapp/${dappUrl}`;
const WalletProvidersList = ()=>{
    const { active , activate , deactivate  } = (0,core_.useWeb3React)();
    //   TODO: Throw error/success modals
    const handleToggleConnect = async (connector, methodName)=>{
        if (methodName === "Metamask" && !window.ethereum) {
            external_react_toastify_.toast.warn("Please install Metamask");
            return;
        }
        if (active) {
            deactivate();
        } else {
            await activate(connector).then(()=>{
                console.log("Connected wallet successfully");
            }).catch((err)=>{
                console.log(err);
            });
        }
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "px-6",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "py-4",
                children: "Connect with one wallet provider or create a new one."
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "w-full bg-white rounded shadow",
                children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                    className: "divide-y-2 divide-gray-100",
                    children: Object.values(connectors).map((connector)=>{
                        const { name , logo , method  } = connector;
                        if (isMobileDevice() && name === "Metamask" && !window.ethereum) {
                            return(/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "shadow-around cursor-pointer",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: metamaskAppDeepLink,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                        className: "p-3 w-full flex items-center font-bold",
                                        type: "button",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "h-full w-6 mr-4 relative flex",
                                                children: logo
                                            }),
                                            name
                                        ]
                                    })
                                })
                            }, name));
                        }
                        return(/*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: "shadow-around cursor-pointer",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                className: "p-3 w-full flex items-center font-bold",
                                type: "button",
                                onClick: ()=>handleToggleConnect(method, name)
                                ,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "h-full w-6 mr-4 relative flex",
                                        children: logo
                                    }),
                                    name
                                ]
                            })
                        }, name));
                    })
                })
            })
        ]
    }));
};
/* harmony default export */ const WalletPanel_WalletProvidersList = (WalletProvidersList);


/***/ }),

/***/ 7412:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1185);
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1143);
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_classNames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4539);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_3__]);
_headlessui_react__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const propTypes = {
    icon: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node),
    label: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
    options: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
        label: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
        action: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),
        value: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired)
    })).isRequired
};
const Dropdown = ({ icon , label , options  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Menu, {
        as: "div",
        className: "relative inline-block text-left",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex items-center",
                children: [
                    icon,
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Menu.Button, {
                        className: (0,_utils_classNames__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(options.length ? "hover:bg-black hover:text-white" : "", "inline-flex justify-center w-full rounded-md py-2 bg-white font-medium font-bold focus:outline-none"),
                        children: [
                            label,
                            options.length ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_4__.ChevronDownIcon, {
                                className: "-mr-1 ml-2 h-5 w-5",
                                "aria-hidden": "true"
                            }) : null
                        ]
                    })
                ]
            }),
            !!options.length && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Transition, {
                as: react__WEBPACK_IMPORTED_MODULE_2__.Fragment,
                enter: "transition ease-out duration-100",
                enterFrom: "transform opacity-0 scale-95",
                enterTo: "transform opacity-100 scale-100",
                leave: "transition ease-in duration-75",
                leaveFrom: "transform opacity-100 scale-100",
                leaveTo: "transform opacity-0 scale-95",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Menu.Items, {
                    className: "origin-top-right absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "py-1",
                        children: options.map((option)=>{
                            const { value , action , label: optionLabel , icon: optionIcon ,  } = option;
                            return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Menu.Item, {
                                children: ({ active  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                        type: "button",
                                        onClick: action,
                                        className: (0,_utils_classNames__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(active ? "bg-gray-100 text-gray-900" : "text-gray-700", "block px-4 py-2 text-sm w-full flex items-center font-bold"),
                                        children: [
                                            optionIcon,
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: optionLabel
                                            })
                                        ]
                                    })
                            }, value));
                        })
                    })
                })
            })
        ]
    })
;
Dropdown.defaultProps = {
    icon: ""
};
Dropdown.propTypes = propTypes;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dropdown);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2077:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6405);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1185);
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8768);
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_3__]);
_headlessui_react__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const propTypes = {
    isOpen: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool.isRequired),
    onHandleModalClose: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func.isRequired),
    title: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string.isRequired)
};
const Modal = ({ children , isOpen , onHandleModalClose , title  })=>{
    const { 0: modalRoot , 1: setModalRoot  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const elRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(document.createElement("div"));
    /**
   * Provides a first-class way to render children into a DOM node that exists
   *  outside the DOM hierarchy of the parent component. Eg:
   *  Render modal from SlideOverPanel
   */ (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setModalRoot(document.getElementById("modal"));
    }, [
        setModalRoot
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const divEl = elRef.current;
        if (!modalRoot) {
            return null;
        }
        modalRoot.appendChild(elRef.current);
        return ()=>{
            modalRoot.removeChild(divEl);
        };
    }, [
        modalRoot
    ]);
    return(/*#__PURE__*/ (0,react_dom__WEBPACK_IMPORTED_MODULE_2__.createPortal)(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Transition.Root, {
        show: isOpen,
        as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "modal fixed z-50 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-75",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Transition.Child, {
                as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
                enter: "ease-out duration-300",
                enterFrom: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                enterTo: "opacity-100 translate-y-0 sm:scale-100",
                leave: "ease-in duration-200",
                leaveFrom: "opacity-100 translate-y-0 sm:scale-100",
                leaveTo: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "mt-3 text-center sm:mt-0 sm:text-left lg:my-2",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                    className: "text-lg leading-6 font-bold text-gray-900 text-xl",
                                    children: title
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    type: "button",
                                    className: "absolute right-4 top-4 pointer",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_4__.XIcon, {
                                        className: "block h-6 w-6",
                                        "aria-hidden": "true",
                                        onClick: onHandleModalClose
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "mt-2",
                                    children: children
                                })
                            ]
                        })
                    })
                })
            })
        })
    }), elRef.current));
};
Modal.propTypes = propTypes;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Modal);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9714:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1185);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_3__]);
_headlessui_react__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const propTypes = {
    isOpen: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool.isRequired),
    shouldStayOpen: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool.isRequired),
    onSetIsOpen: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func.isRequired),
    children: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().node.isRequired)
};
const SlideOverPanel = ({ isOpen , onSetIsOpen , children , shouldStayOpen  })=>{
    const { 0: modalRoot , 1: setModalRoot  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const slideOverRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setModalRoot(document.getElementById("modal"));
    }, [
        setModalRoot
    ]);
    /* Closes SlideOverPanel if click event is outside a slideOverRef child or pressing 'esc' key,
  do not close if click event is inside modalRoot or child components */ const handleClose = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((event)=>{
        var ref;
        if (!((ref = slideOverRef.current) === null || ref === void 0 ? void 0 : ref.contains(event.target)) && !modalRoot.contains(event.target) && !event.keyCode || event.keyCode === 27) {
            onSetIsOpen(false);
        }
    }, [
        onSetIsOpen,
        modalRoot
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (isOpen && !shouldStayOpen) {
            /* Prevent scrolling on mount and adds background style 
      if shouldStayOpen is true do not add event listeners again
      */ document.body.style.overflow = "hidden";
            document.getElementById("layout-body").style.filter = "blur(5px) grayscale(50%)";
        }
        /* Scrolls to the top of the page on mount */ window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        /* Re-enable scrolling when component unmounts and removes background style */ return ()=>{
            document.body.style.overflow = "visible";
            document.getElementById("layout-body").style.filter = "";
        };
    }, [
        isOpen,
        shouldStayOpen, 
    ]); /* Only runs when isOpen or shouldStayOpen changes */ 
    /* Adds/removes event listeners for click and key press events,
  if shouldStayOpen is true do not add event listeners
  */ (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (slideOverRef.current && isOpen && !shouldStayOpen) {
            document.addEventListener("click", handleClose);
            document.addEventListener("keydown", handleClose);
        }
        return ()=>{
            document.removeEventListener("click", handleClose);
            document.removeEventListener("keydown", handleClose);
        };
    }, [
        isOpen,
        handleClose,
        shouldStayOpen, 
    ]); /* Only runs when isOpen or shouldStayOpen changes */ 
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        ref: slideOverRef,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Transition.Root, {
            show: isOpen,
            as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "absolute top-0 right-0 h-content z-10",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Transition.Child, {
                    as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
                    enter: "transform transition ease-in-out duration-300 sm:duration-500",
                    enterFrom: "translate-x-full",
                    enterTo: "translate-x-0",
                    leave: "transform transition ease-in-out duration-300 sm:duration-500",
                    leaveFrom: "translate-x-0",
                    leaveTo: "translate-x-full",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "relative w-screen h-full lg:max-w-md bg-white shadow-2xl",
                        children: children
                    })
                })
            })
        })
    }));
};
SlideOverPanel.prototypes = propTypes;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SlideOverPanel);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8510:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8054);
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_web3_react_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1982);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context_LoginContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1350);
/* harmony import */ var _components_Layout_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2905);
/* harmony import */ var _hooks_contexts_useEthers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3630);
/* harmony import */ var _hooks_contexts_useToggleWalletPanel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2143);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_context_LoginContext__WEBPACK_IMPORTED_MODULE_3__, _components_Layout_Layout__WEBPACK_IMPORTED_MODULE_4__]);
([_context_LoginContext__WEBPACK_IMPORTED_MODULE_3__, _components_Layout_Layout__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const getLibrary = (provider)=>new ethers__WEBPACK_IMPORTED_MODULE_2__.ethers.providers.Web3Provider(provider)
;
function NFTMarketPlace({ Component , pageProps  }) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_context_LoginContext__WEBPACK_IMPORTED_MODULE_3__/* .LoginContextProvider */ .J, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_web3_react_core__WEBPACK_IMPORTED_MODULE_1__.Web3ReactProvider, {
            getLibrary: getLibrary,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_hooks_contexts_useEthers__WEBPACK_IMPORTED_MODULE_5__/* .EthersProvider */ .X, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_hooks_contexts_useToggleWalletPanel__WEBPACK_IMPORTED_MODULE_6__/* .ToggleWalletPanelProvider */ .X, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                            ...pageProps
                        })
                    })
                })
            })
        })
    }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NFTMarketPlace);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 598:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const shortenWalletAddress = (account)=>`${account.substring(0, 6)}...${account.substring(account.length - 4)}`
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (shortenWalletAddress);


/***/ }),

/***/ 8768:
/***/ ((module) => {

module.exports = require("@heroicons/react/outline");

/***/ }),

/***/ 1143:
/***/ ((module) => {

module.exports = require("@heroicons/react/solid");

/***/ }),

/***/ 8054:
/***/ ((module) => {

module.exports = require("@web3-react/core");

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 1982:
/***/ ((module) => {

module.exports = require("ethers");

/***/ }),

/***/ 4025:
/***/ ((module) => {

module.exports = require("ipfs-http-client");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 580:
/***/ ((module) => {

module.exports = require("prop-types");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 2094:
/***/ ((module) => {

module.exports = require("react-spinners/GridLoader");

/***/ }),

/***/ 1187:
/***/ ((module) => {

module.exports = require("react-toastify");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 2840:
/***/ ((module) => {

module.exports = require("web3modal");

/***/ }),

/***/ 1401:
/***/ ((module) => {

module.exports = import("@firebase/firestore");;

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = import("@headlessui/react");;

/***/ }),

/***/ 3745:
/***/ ((module) => {

module.exports = import("firebase/app");;

/***/ }),

/***/ 1492:
/***/ ((module) => {

module.exports = import("firebase/firestore");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,848,727,350,748], () => (__webpack_exec__(8510)));
module.exports = __webpack_exports__;

})();