"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _home_user_Documents_whiteListing_dapp_whitelistdapp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_user_Documents_whiteListing_dapp_whitelistdapp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_user_Documents_whiteListing_dapp_whitelistdapp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! web3modal */ \"./node_modules/web3modal/dist/index.js\");\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(web3modal__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../constants */ \"./constants/index.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Home() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false), walletConnected = ref[0], setWalletConnected = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0), numOfWhitelisted = ref1[0], setNumOfWhitelisted = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false), joinedWhitelist = ref2[0], setJoinedWhitelist = ref2[1];\n    var web3ModalRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)();\n    var getProviderOrSigner = function() {\n        var _ref = _asyncToGenerator(_home_user_Documents_whiteListing_dapp_whitelistdapp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var needSigner, provider, web3Provider, chainId, signer, _args = arguments;\n            return _home_user_Documents_whiteListing_dapp_whitelistdapp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        needSigner = _args.length > 0 && _args[0] !== void 0 ? _args[0] : false;\n                        _ctx.prev = 1;\n                        _ctx.next = 4;\n                        return web3ModalRef.current.connect();\n                    case 4:\n                        provider = _ctx.sent;\n                        web3Provider = new ethers__WEBPACK_IMPORTED_MODULE_7__.providers.Web3Provider(provider);\n                        _ctx.next = 8;\n                        return web3Provider.getNetwork();\n                    case 8:\n                        chainId = _ctx.sent.chainId;\n                        if (!(chainId !== 5)) {\n                            _ctx.next = 12;\n                            break;\n                        }\n                        alert(\"change the network to goerli\");\n                        throw new Error(\"change the network to goerli\");\n                    case 12:\n                        if (!needSigner) {\n                            _ctx.next = 15;\n                            break;\n                        }\n                        signer = web3Provider.getSigner();\n                        return _ctx.abrupt(\"return\", signer);\n                    case 15:\n                        return _ctx.abrupt(\"return\", web3Provider);\n                    case 18:\n                        _ctx.prev = 18;\n                        _ctx.t0 = _ctx[\"catch\"](1);\n                        console.log(_ctx.t0);\n                    case 21:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    1,\n                    18\n                ]\n            ]);\n        }));\n        return function getProviderOrSigner() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var checkIfAddressIWHitelisted = function() {\n        var _ref = _asyncToGenerator(_home_user_Documents_whiteListing_dapp_whitelistdapp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var signer, whiteListcontract, address, _joinedWhitelist;\n            return _home_user_Documents_whiteListing_dapp_whitelistdapp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        signer = getProviderOrSigner(true);\n                        whiteListcontract = new ethers__WEBPACK_IMPORTED_MODULE_7__.Contract(_constants__WEBPACK_IMPORTED_MODULE_6__.WHITE_LIST_CONTRACT, _constants__WEBPACK_IMPORTED_MODULE_6__.abi, signer);\n                        _ctx.next = 5;\n                        return signer.getAddress();\n                    case 5:\n                        address = _ctx.sent;\n                        _ctx.next = 8;\n                        return whiteListcontract.whitelistedAddresses(address);\n                    case 8:\n                        _joinedWhitelist = _ctx.sent;\n                        setJoinedWhitelist(_joinedWhitelist);\n                        _ctx.next = 15;\n                        break;\n                    case 12:\n                        _ctx.prev = 12;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.log(_ctx.t0);\n                    case 15:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    12\n                ]\n            ]);\n        }));\n        return function checkIfAddressIWHitelisted() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var getNumberOfWhitelisted = function() {\n        var _ref = _asyncToGenerator(_home_user_Documents_whiteListing_dapp_whitelistdapp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var provider, whiteListcontract, _noOfWhiteListed;\n            return _home_user_Documents_whiteListing_dapp_whitelistdapp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        _ctx.next = 3;\n                        return getProviderOrSigner();\n                    case 3:\n                        provider = _ctx.sent;\n                        whiteListcontract = new ethers__WEBPACK_IMPORTED_MODULE_7__.Contract(_constants__WEBPACK_IMPORTED_MODULE_6__.WHITE_LIST_CONTRACT, _constants__WEBPACK_IMPORTED_MODULE_6__.abi, provider);\n                        _ctx.next = 7;\n                        return whiteListcontract.numAddressWhitelisted();\n                    case 7:\n                        _noOfWhiteListed = _ctx.sent;\n                        setNumOfWhitelisted(_noOfWhiteListed);\n                        _ctx.next = 14;\n                        break;\n                    case 11:\n                        _ctx.prev = 11;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.log(_ctx.t0);\n                    case 14:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    11\n                ]\n            ]);\n        }));\n        return function getNumberOfWhitelisted() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var connectWallet = function() {\n        var _ref = _asyncToGenerator(_home_user_Documents_whiteListing_dapp_whitelistdapp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return _home_user_Documents_whiteListing_dapp_whitelistdapp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        _ctx.next = 3;\n                        return getProviderOrSigner();\n                    case 3:\n                        setWalletConnected(true);\n                        checkIfAddressIWHitelisted();\n                        getNumberOfWhitelisted();\n                        _ctx.next = 11;\n                        break;\n                    case 8:\n                        _ctx.prev = 8;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.log(_ctx.t0);\n                    case 11:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    8\n                ]\n            ]);\n        }));\n        return function connectWallet() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        if (!walletConnected) {\n            web3ModalRef.current = new (web3modal__WEBPACK_IMPORTED_MODULE_5___default())({\n                network: \"goerli\",\n                providerOptions: {},\n                disabledInjectedProvider: false\n            });\n            connectWallet();\n        }\n    }, [\n        walletConnected\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"title\", {\n                        children: \"Whitelist Dapp\"\n                    }, void 0, false, {\n                        fileName: \"/home/user/Documents/whiteListing-dapp/whitelistdapp/pages/index.js\",\n                        lineNumber: 89,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Whitelist Dapp\"\n                    }, void 0, false, {\n                        fileName: \"/home/user/Documents/whiteListing-dapp/whitelistdapp/pages/index.js\",\n                        lineNumber: 90,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/user/Documents/whiteListing-dapp/whitelistdapp/pages/index.js\",\n                lineNumber: 88,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().title),\n                        children: \"welcome to crypto dev\"\n                    }, void 0, false, {\n                        fileName: \"/home/user/Documents/whiteListing-dapp/whitelistdapp/pages/index.js\",\n                        lineNumber: 93,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().description),\n                        children: [\n                            numOfWhitelisted,\n                            \" have already joind\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/user/Documents/whiteListing-dapp/whitelistdapp/pages/index.js\",\n                        lineNumber: 94,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                            src: \"./crypto-devs.svg\",\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().image),\n                            alt: \"\"\n                        }, void 0, false, {\n                            fileName: \"/home/user/Documents/whiteListing-dapp/whitelistdapp/pages/index.js\",\n                            lineNumber: 98,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/user/Documents/whiteListing-dapp/whitelistdapp/pages/index.js\",\n                        lineNumber: 97,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/user/Documents/whiteListing-dapp/whitelistdapp/pages/index.js\",\n                lineNumber: 92,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"footer\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().footer),\n                children: \"Made with \\u2764\\uFE0F by crypto dev !\"\n            }, void 0, false, {\n                fileName: \"/home/user/Documents/whiteListing-dapp/whitelistdapp/pages/index.js\",\n                lineNumber: 101,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/user/Documents/whiteListing-dapp/whitelistdapp/pages/index.js\",\n        lineNumber: 87,\n        columnNumber: 5\n    }, this);\n};\n_s(Home, \"nf/Ip8px8/GN2wkdyTGha1cCq78=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTZCO0FBQ0U7QUFDcUI7QUFDTDtBQUNiO0FBQ1c7QUFDVzs7QUFFekMsU0FBU1csSUFBSSxHQUFHOztJQUM3QixJQUE4Q1AsR0FBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssQ0FBQyxFQVQvRCxlQVN3QixHQUF3QkEsR0FBZSxHQUF2QyxFQVR4QixrQkFTNEMsR0FBSUEsR0FBZSxHQUFuQjtJQUMxQyxJQUFnREEsSUFBVyxHQUFYQSwrQ0FBUSxDQUFDLENBQUMsQ0FBQyxFQVY3RCxnQkFVeUIsR0FBeUJBLElBQVcsR0FBcEMsRUFWekIsbUJBVThDLEdBQUlBLElBQVcsR0FBZjtJQUM1QyxJQUE4Q0EsSUFBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssQ0FBQyxFQVgvRCxlQVd3QixHQUF3QkEsSUFBZSxHQUF2QyxFQVh4QixrQkFXNEMsR0FBSUEsSUFBZSxHQUFuQjtJQUMxQyxJQUFNYyxZQUFZLEdBQUdmLDZDQUFNLEVBQUU7SUFFN0IsSUFBTWdCLG1CQUFtQjttQkFBRyxxTUFBOEI7Z0JBQXZCQyxVQUFVLEVBRW5DQyxRQUFRLEVBQ1JDLFlBQVksRUFDVkMsT0FBTyxFQU1QQyxNQUFNOzs7O3dCQVZpQkosVUFBVSx3REFBRyxLQUFLOzs7K0JBRTFCRixZQUFZLENBQUNPLE9BQU8sQ0FBQ0MsT0FBTyxFQUFFOzt3QkFBL0NMLFFBQVEsWUFBdUM7d0JBQy9DQyxZQUFZLEdBQUcsSUFBSWQsMERBQXNCLENBQUNhLFFBQVEsQ0FBQyxDQUFDOzsrQkFDaENDLFlBQVksQ0FBQ00sVUFBVSxFQUFFOzt3QkFBN0MsT0FBUyxhQUFQTCxPQUFPLENBQW9DOzRCQUMvQ0EsQ0FBQUEsQ0FBQUEsT0FBTyxLQUFLLENBQUM7Ozs7d0JBQ2ZNLEtBQUssQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO3dCQUN0QyxNQUFNLElBQUlDLEtBQUssQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDOzs0QkFFOUNWLENBQUFBLFVBQVU7Ozs7d0JBQ05JLE1BQU0sR0FBR0YsWUFBWSxDQUFDUyxTQUFTLEVBQUUsQ0FBQztxREFDakNQLE1BQU07O3FEQUVSRixZQUFZOzs7O3dCQUVuQlUsT0FBTyxDQUFDQyxHQUFHLFNBQU8sQ0FBQzs7Ozs7Ozs7Ozs7U0FFdEI7d0JBakJLZCxtQkFBbUI7OztPQWlCeEI7SUFFRCxJQUFNZSwwQkFBMEI7bUJBQUcscU1BQVk7Z0JBRXJDVixNQUFNLEVBQ05XLGlCQUFpQixFQUNqQkMsT0FBTyxFQUNQQyxnQkFBZ0I7Ozs7O3dCQUhoQmIsTUFBTSxHQUFHTCxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDbkNnQixpQkFBaUIsR0FBRyxJQUFJNUIsNENBQVEsQ0FBQ0csMkRBQW1CLEVBQUVELDJDQUFHLEVBQUVlLE1BQU0sQ0FBQyxDQUFDOzsrQkFDbkRBLE1BQU0sQ0FBQ2MsVUFBVSxFQUFFOzt3QkFBbkNGLE9BQU8sWUFBNEI7OytCQUNWRCxpQkFBaUIsQ0FBQ0ksb0JBQW9CLENBQ25FSCxPQUFPLENBQ1I7O3dCQUZLQyxnQkFBZ0IsWUFFckI7d0JBQ0RwQixrQkFBa0IsQ0FBQ29CLGdCQUFnQixDQUFDLENBQUM7Ozs7Ozt3QkFFckNMLE9BQU8sQ0FBQ0MsR0FBRyxTQUFPLENBQUM7Ozs7Ozs7Ozs7O1NBRXRCO3dCQVpLQywwQkFBMEI7OztPQVkvQjtJQUVELElBQU1NLHNCQUFzQjttQkFBRyxxTUFBWTtnQkFFakNuQixRQUFRLEVBQ1JjLGlCQUFpQixFQUtqQk0sZ0JBQWdCOzs7Ozs7K0JBTkN0QixtQkFBbUIsRUFBRTs7d0JBQXRDRSxRQUFRLFlBQThCO3dCQUN0Q2MsaUJBQWlCLEdBQUcsSUFBSTVCLDRDQUFRLENBQ3BDRywyREFBbUIsRUFDbkJELDJDQUFHLEVBQ0hZLFFBQVEsQ0FDVCxDQUFDOzsrQkFDNkJjLGlCQUFpQixDQUFDTyxxQkFBcUIsRUFBRTs7d0JBQWxFRCxnQkFBZ0IsWUFBa0Q7d0JBQ3hFMUIsbUJBQW1CLENBQUMwQixnQkFBZ0IsQ0FBQyxDQUFDOzs7Ozs7d0JBRXRDVCxPQUFPLENBQUNDLEdBQUcsU0FBTyxDQUFDOzs7Ozs7Ozs7OztTQUV0Qjt3QkFiS08sc0JBQXNCOzs7T0FhM0I7SUFFRCxJQUFNRyxhQUFhO21CQUFHLHFNQUFZOzs7Ozs7K0JBRXhCeEIsbUJBQW1CLEVBQUU7O3dCQUMzQk4sa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ3pCcUIsMEJBQTBCLEVBQUUsQ0FBQzt3QkFDN0JNLHNCQUFzQixFQUFFLENBQUM7Ozs7Ozt3QkFFekJSLE9BQU8sQ0FBQ0MsR0FBRyxTQUFPLENBQUM7Ozs7Ozs7Ozs7O1NBRXRCO3dCQVRLVSxhQUFhOzs7T0FTbEI7SUFFRHpDLGdEQUFTLENBQUMsV0FBTTtRQUNkLElBQUksQ0FBQ1UsZUFBZSxFQUFFO1lBQ3BCTSxZQUFZLENBQUNPLE9BQU8sR0FBRyxJQUFJbkIsa0RBQVMsQ0FBQztnQkFDbkNzQyxPQUFPLEVBQUUsUUFBUTtnQkFDakJDLGVBQWUsRUFBRSxFQUFFO2dCQUNuQkMsd0JBQXdCLEVBQUUsS0FBSzthQUNoQyxDQUFDLENBQUM7WUFFSEgsYUFBYSxFQUFFLENBQUM7U0FDakI7S0FDRixFQUFFO1FBQUMvQixlQUFlO0tBQUMsQ0FBQyxDQUFDO0lBRXRCLHFCQUNFLDhEQUFDbUMsS0FBRzs7MEJBQ0YsOERBQUMvQyxrREFBSTs7a0NBQ0gsOERBQUNnRCxPQUFLO2tDQUFDLGdCQUFjOzs7Ozs0QkFBUTtrQ0FDN0IsOERBQUNDLE1BQUk7d0JBQUNDLElBQUksRUFBQyxhQUFhO3dCQUFDQyxPQUFPLEVBQUMsZ0JBQWdCOzs7Ozs0QkFBRzs7Ozs7O29CQUMvQzswQkFDUCw4REFBQ0osS0FBRztnQkFBQ0ssU0FBUyxFQUFFL0MscUVBQVc7O2tDQUN6Qiw4REFBQ2lELElBQUU7d0JBQUNGLFNBQVMsRUFBRS9DLHNFQUFZO2tDQUFFLHVCQUFxQjs7Ozs7NEJBQUs7a0NBQ3ZELDhEQUFDMEMsS0FBRzt3QkFBQ0ssU0FBUyxFQUFFL0MsNEVBQWtCOzs0QkFDL0JTLGdCQUFnQjs0QkFBQyxxQkFDcEI7Ozs7Ozs0QkFBTTtrQ0FDTiw4REFBQ2lDLEtBQUc7a0NBQ0YsNEVBQUNTLEtBQUc7NEJBQUNDLEdBQUcsRUFBQyxtQkFBbUI7NEJBQUNMLFNBQVMsRUFBRS9DLHNFQUFZOzRCQUFFc0QsR0FBRyxFQUFDLEVBQUU7Ozs7O2dDQUFHOzs7Ozs0QkFDM0Q7Ozs7OztvQkFDRjswQkFDTiw4REFBQ0MsUUFBTTtnQkFBQ1IsU0FBUyxFQUFFL0MsdUVBQWE7MEJBQUUsd0NBQTRCOzs7OztvQkFBUzs7Ozs7O1lBQ25FLENBQ047Q0FDSDtHQS9GdUJNLElBQUk7QUFBSkEsS0FBQUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgV2ViM01vZGFsIGZyb20gXCJ3ZWIzbW9kYWxcIjtcbmltcG9ydCB7IENvbnRyYWN0LCBwcm92aWRlcnMgfSBmcm9tIFwiZXRoZXJzXCI7XG5pbXBvcnQgeyBhYmksIFdISVRFX0xJU1RfQ09OVFJBQ1QgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFt3YWxsZXRDb25uZWN0ZWQsIHNldFdhbGxldENvbm5lY3RlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtudW1PZldoaXRlbGlzdGVkLCBzZXROdW1PZldoaXRlbGlzdGVkXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbam9pbmVkV2hpdGVsaXN0LCBzZXRKb2luZWRXaGl0ZWxpc3RdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCB3ZWIzTW9kYWxSZWYgPSB1c2VSZWYoKTtcblxuICBjb25zdCBnZXRQcm92aWRlck9yU2lnbmVyID0gYXN5bmMgKG5lZWRTaWduZXIgPSBmYWxzZSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBwcm92aWRlciA9IGF3YWl0IHdlYjNNb2RhbFJlZi5jdXJyZW50LmNvbm5lY3QoKTtcbiAgICAgIGNvbnN0IHdlYjNQcm92aWRlciA9IG5ldyBwcm92aWRlcnMuV2ViM1Byb3ZpZGVyKHByb3ZpZGVyKTtcbiAgICAgIGNvbnN0IHsgY2hhaW5JZCB9ID0gYXdhaXQgd2ViM1Byb3ZpZGVyLmdldE5ldHdvcmsoKTtcbiAgICAgIGlmIChjaGFpbklkICE9PSA1KSB7XG4gICAgICAgIGFsZXJ0KFwiY2hhbmdlIHRoZSBuZXR3b3JrIHRvIGdvZXJsaVwiKTtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiY2hhbmdlIHRoZSBuZXR3b3JrIHRvIGdvZXJsaVwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkU2lnbmVyKSB7XG4gICAgICAgIGNvbnN0IHNpZ25lciA9IHdlYjNQcm92aWRlci5nZXRTaWduZXIoKTtcbiAgICAgICAgcmV0dXJuIHNpZ25lcjtcbiAgICAgIH1cbiAgICAgIHJldHVybiB3ZWIzUHJvdmlkZXI7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgY2hlY2tJZkFkZHJlc3NJV0hpdGVsaXN0ZWQgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHNpZ25lciA9IGdldFByb3ZpZGVyT3JTaWduZXIodHJ1ZSk7XG4gICAgICBjb25zdCB3aGl0ZUxpc3Rjb250cmFjdCA9IG5ldyBDb250cmFjdChXSElURV9MSVNUX0NPTlRSQUNULCBhYmksIHNpZ25lcik7XG4gICAgICBjb25zdCBhZGRyZXNzID0gYXdhaXQgc2lnbmVyLmdldEFkZHJlc3MoKTtcbiAgICAgIGNvbnN0IF9qb2luZWRXaGl0ZWxpc3QgPSBhd2FpdCB3aGl0ZUxpc3Rjb250cmFjdC53aGl0ZWxpc3RlZEFkZHJlc3NlcyhcbiAgICAgICAgYWRkcmVzc1xuICAgICAgKTtcbiAgICAgIHNldEpvaW5lZFdoaXRlbGlzdChfam9pbmVkV2hpdGVsaXN0KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBnZXROdW1iZXJPZldoaXRlbGlzdGVkID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBwcm92aWRlciA9IGF3YWl0IGdldFByb3ZpZGVyT3JTaWduZXIoKTtcbiAgICAgIGNvbnN0IHdoaXRlTGlzdGNvbnRyYWN0ID0gbmV3IENvbnRyYWN0KFxuICAgICAgICBXSElURV9MSVNUX0NPTlRSQUNULFxuICAgICAgICBhYmksXG4gICAgICAgIHByb3ZpZGVyXG4gICAgICApO1xuICAgICAgY29uc3QgX25vT2ZXaGl0ZUxpc3RlZCA9IGF3YWl0IHdoaXRlTGlzdGNvbnRyYWN0Lm51bUFkZHJlc3NXaGl0ZWxpc3RlZCgpO1xuICAgICAgc2V0TnVtT2ZXaGl0ZWxpc3RlZChfbm9PZldoaXRlTGlzdGVkKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBjb25uZWN0V2FsbGV0ID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCBnZXRQcm92aWRlck9yU2lnbmVyKCk7XG4gICAgICBzZXRXYWxsZXRDb25uZWN0ZWQodHJ1ZSk7XG4gICAgICBjaGVja0lmQWRkcmVzc0lXSGl0ZWxpc3RlZCgpO1xuICAgICAgZ2V0TnVtYmVyT2ZXaGl0ZWxpc3RlZCgpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfVxuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCF3YWxsZXRDb25uZWN0ZWQpIHtcbiAgICAgIHdlYjNNb2RhbFJlZi5jdXJyZW50ID0gbmV3IFdlYjNNb2RhbCh7XG4gICAgICAgIG5ldHdvcms6IFwiZ29lcmxpXCIsXG4gICAgICAgIHByb3ZpZGVyT3B0aW9uczoge30sXG4gICAgICAgIGRpc2FibGVkSW5qZWN0ZWRQcm92aWRlcjogZmFsc2UsXG4gICAgICB9KTtcblxuICAgICAgY29ubmVjdFdhbGxldCgpO1xuICAgIH1cbiAgfSwgW3dhbGxldENvbm5lY3RlZF0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+V2hpdGVsaXN0IERhcHA8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiV2hpdGVsaXN0IERhcHBcIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT53ZWxjb21lIHRvIGNyeXB0byBkZXY8L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT5cbiAgICAgICAgICB7bnVtT2ZXaGl0ZWxpc3RlZH0gaGF2ZSBhbHJlYWR5IGpvaW5kXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxpbWcgc3JjPVwiLi9jcnlwdG8tZGV2cy5zdmdcIiBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZX0gYWx0PVwiXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxmb290ZXIgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyfT5NYWRlIHdpdGgg4p2k77iPIGJ5IGNyeXB0byBkZXYgITwvZm9vdGVyPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkhlYWQiLCJJbWFnZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwic3R5bGVzIiwiV2ViM01vZGFsIiwiQ29udHJhY3QiLCJwcm92aWRlcnMiLCJhYmkiLCJXSElURV9MSVNUX0NPTlRSQUNUIiwiSG9tZSIsIndhbGxldENvbm5lY3RlZCIsInNldFdhbGxldENvbm5lY3RlZCIsIm51bU9mV2hpdGVsaXN0ZWQiLCJzZXROdW1PZldoaXRlbGlzdGVkIiwiam9pbmVkV2hpdGVsaXN0Iiwic2V0Sm9pbmVkV2hpdGVsaXN0Iiwid2ViM01vZGFsUmVmIiwiZ2V0UHJvdmlkZXJPclNpZ25lciIsIm5lZWRTaWduZXIiLCJwcm92aWRlciIsIndlYjNQcm92aWRlciIsImNoYWluSWQiLCJzaWduZXIiLCJjdXJyZW50IiwiY29ubmVjdCIsIldlYjNQcm92aWRlciIsImdldE5ldHdvcmsiLCJhbGVydCIsIkVycm9yIiwiZ2V0U2lnbmVyIiwiY29uc29sZSIsImxvZyIsImNoZWNrSWZBZGRyZXNzSVdIaXRlbGlzdGVkIiwid2hpdGVMaXN0Y29udHJhY3QiLCJhZGRyZXNzIiwiX2pvaW5lZFdoaXRlbGlzdCIsImdldEFkZHJlc3MiLCJ3aGl0ZWxpc3RlZEFkZHJlc3NlcyIsImdldE51bWJlck9mV2hpdGVsaXN0ZWQiLCJfbm9PZldoaXRlTGlzdGVkIiwibnVtQWRkcmVzc1doaXRlbGlzdGVkIiwiY29ubmVjdFdhbGxldCIsIm5ldHdvcmsiLCJwcm92aWRlck9wdGlvbnMiLCJkaXNhYmxlZEluamVjdGVkUHJvdmlkZXIiLCJkaXYiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImNsYXNzTmFtZSIsIm1haW4iLCJoMSIsImRlc2NyaXB0aW9uIiwiaW1nIiwic3JjIiwiaW1hZ2UiLCJhbHQiLCJmb290ZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});