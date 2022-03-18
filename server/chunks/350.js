"use strict";
exports.id = 350;
exports.ids = [350];
exports.modules = {

/***/ 1350:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ LoginContext),
/* harmony export */   "J": () => (/* binding */ LoginContextProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _firebase_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3158);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1492);
/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2840);
/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(web3modal__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ipfs_http_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4025);
/* harmony import */ var ipfs_http_client__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ipfs_http_client__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1982);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebase_config__WEBPACK_IMPORTED_MODULE_2__, firebase_firestore__WEBPACK_IMPORTED_MODULE_3__]);
([_firebase_config__WEBPACK_IMPORTED_MODULE_2__, firebase_firestore__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const client = (0,ipfs_http_client__WEBPACK_IMPORTED_MODULE_5__.create)("https://ipfs.infura.io:5001/api/v0");
const LoginContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const LoginContextProvider = ({ children  })=>{
    const inputFileRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef();
    const { 0: users , 1: setUsers  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: userInfo , 1: setUserInfo  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: newName , 1: setNewName  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: newDescription , 1: setNewDescription  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: newFavorites , 1: setNewFavorites  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([
        1,
        2
    ]);
    const { 0: balance , 1: setBalance  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const { 0: update , 1: setUpdate  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: hover , 1: setHover  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: walletId1 , 1: setWalletId  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: fileUrl , 1: setFileUrl  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: edit , 1: setEdit  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: colorInput , 1: setColorInput  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: page , 1: setPage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("owned");
    const { 0: favoritedList , 1: setFavoritedList  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const usersCollectionRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(_firebase_config__WEBPACK_IMPORTED_MODULE_2__.db, "users");
    const { 0: signer1 , 1: setSigner  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (users) {
            getFavorites();
        }
    }, [
        users,
        walletId1
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const initTeste = async ()=>{
            const web3Modal1 = new (web3modal__WEBPACK_IMPORTED_MODULE_4___default())({
                network: "mainnet",
                cacheProvider: true
            });
            const connection1 = await web3Modal1.connect();
            const provider1 = new ethers__WEBPACK_IMPORTED_MODULE_7__.ethers.providers.Web3Provider(connection1);
            connection1.on("accountsChanged", (accounts)=>{
                const changeAccount = async ()=>{
                    const web3Modal = new (web3modal__WEBPACK_IMPORTED_MODULE_4___default())({
                        network: "mainnet"
                    });
                    const connection = await web3Modal.connect();
                    const provider = new ethers__WEBPACK_IMPORTED_MODULE_7__.ethers.providers.Web3Provider(connection);
                    const signerLogin = provider.getSigner();
                    setSigner(signerLogin);
                    console.log("trocou", signerLogin);
                };
                changeAccount();
            });
            const signerLogin1 = provider1.getSigner();
            setSigner(signerLogin1);
        };
        initTeste();
    }, []);
    const getFavorites = async ()=>{
        let favorites2 = users.filter((e)=>e.walletId === walletId1
        );
        console.log(favorites2, "aqui");
        if (favorites2[0]) {
            let itemsIds = favorites2[0].favorites.map((e)=>{
                return e.tokenId;
            });
            console.log(itemsIds);
            setFavoritedList(itemsIds);
        }
    };
    const addFavorite = async (i, type)=>{
        let teste2 = users.filter((e)=>e.walletId === walletId1
        );
        if (type === "cardProfile") {
            i['itemId'] = i['tokenId'];
        }
        if (teste2[0].favorites) {
            teste2[0].favorites.push(i);
            const userDoc = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)(_firebase_config__WEBPACK_IMPORTED_MODULE_2__.db, "users", teste2[0].id);
            await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.updateDoc)(userDoc, {
                favorites: teste2[0].favorites
            });
        } else {
            const userDoc = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)(_firebase_config__WEBPACK_IMPORTED_MODULE_2__.db, "users", teste2[0].id);
            await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.updateDoc)(userDoc, {
                favorites: [
                    i
                ]
            });
        }
        getUsers();
    };
    const removeFavorite = async (i, type = "")=>{
        let teste2 = users.filter((e)=>e.walletId === walletId1
        );
        if (type === "cardProfile") {
            i['itemId'] = i['tokenId'];
        }
        if (teste2[0].favorites) {
            // teste2[0].favorites.pop(i);
            const filteredPeople = teste2[0].favorites.filter((item)=>item.itemId !== i.itemId
            );
            const userDoc = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)(_firebase_config__WEBPACK_IMPORTED_MODULE_2__.db, "users", teste2[0].id);
            await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.updateDoc)(userDoc, {
                favorites: filteredPeople
            });
        }
        getUsers();
    };
    const createUser = async ()=>{
        const web3Modal = new (web3modal__WEBPACK_IMPORTED_MODULE_4___default())();
        //connecta com metamask
        const connection = await web3Modal.connect();
        const provider = new ethers__WEBPACK_IMPORTED_MODULE_7__.ethers.providers.Web3Provider(connection);
        //coleta a assinatura para validar a transação
        const signer = provider.getSigner();
        const walletId = await signer.getAddress();
        setWalletId(walletId);
        if (users.length > 0) {
            if (users.filter((e)=>e.walletId === walletId
            ).length > 0) {} else {
                console.log("criado");
                await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.addDoc)(usersCollectionRef, {
                    walletId: walletId,
                    username: newName,
                    description: newDescription,
                    favorites: [],
                    imgUrl: ""
                });
            }
        }
    };
    const getUsers = async ()=>{
        console.log(users, "att");
        const data = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getDocs)(usersCollectionRef);
        let dataUsers = await data.docs.map((doc1)=>({
                ...doc1.data(),
                id: doc1.id
            })
        );
        setUsers(dataUsers);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (users.length) {
            createUser();
        }
    }, [
        users
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        getUsers();
    }, [
        signer1
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        let teste = users.filter((e)=>e.walletId === walletId1
        );
        if (teste.length > 0) {
            setUserInfo(teste[0]);
        }
    }, [
        walletId1,
        users,
        signer1
    ]);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LoginContext.Provider, {
        value: {
            signer: signer1,
            users,
            getUsers,
            userInfo,
            walletId: walletId1,
            getFavorites,
            addFavorite,
            removeFavorite,
            favoritedList
        },
        children: children
    }));
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3158:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "db": () => (/* binding */ db)
/* harmony export */ });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3745);
/* harmony import */ var _firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1401);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, _firebase_firestore__WEBPACK_IMPORTED_MODULE_1__]);
([firebase_app__WEBPACK_IMPORTED_MODULE_0__, _firebase_firestore__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const firebaseConfig = {
    apiKey: "AIzaSyBlJJeo6XY5BQMsgVZ14JwISNGcsil1D4U",
    authDomain: "data-55314.firebaseapp.com",
    projectId: "data-55314",
    storageBucket: "data-55314.appspot.com",
    messagingSenderId: "44248939660",
    appId: "1:44248939660:web:3cb1be6dad6a869c640fa9",
    measurementId: "G-N3NLFWM6ZZ"
};
const app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);
const db = (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)(app);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;