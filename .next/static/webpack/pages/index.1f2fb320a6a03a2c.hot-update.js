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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _home_user_Documents_whiteListing_dapp_whitelistdapp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_user_Documents_whiteListing_dapp_whitelistdapp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_user_Documents_whiteListing_dapp_whitelistdapp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! web3modal */ \"./node_modules/web3modal/dist/index.js\");\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(web3modal__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Home() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false), walletConnected = ref[0], setWalletConnected = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0), numOfWhitelisted = ref1[0], setNumOfWhitelisted = ref1[1];\n    var web3ModalRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)();\n    var getProviderOrSigner = function() {\n        var _ref = _asyncToGenerator(_home_user_Documents_whiteListing_dapp_whitelistdapp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var needSigner, provider, web3Provider, chainId, signer, _args = arguments;\n            return _home_user_Documents_whiteListing_dapp_whitelistdapp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        needSigner = _args.length > 0 && _args[0] !== void 0 ? _args[0] : false;\n                        _ctx.prev = 1;\n                        _ctx.next = 4;\n                        return web3ModalRef.current.connect();\n                    case 4:\n                        provider = _ctx.sent;\n                        web3Provider = new ethers__WEBPACK_IMPORTED_MODULE_6__.providers.Web3Provider(provider);\n                        _ctx.next = 8;\n                        return web3Provider.getNetwork();\n                    case 8:\n                        chainId = _ctx.sent.chainId;\n                        if (!(chainId !== 5)) {\n                            _ctx.next = 12;\n                            break;\n                        }\n                        alert(\"change the network to goerli\");\n                        throw new Error(\"change the network to goerli\");\n                    case 12:\n                        if (!needSigner) {\n                            _ctx.next = 15;\n                            break;\n                        }\n                        signer = web3Provider.getSigner();\n                        return _ctx.abrupt(\"return\", signer);\n                    case 15:\n                        return _ctx.abrupt(\"return\", web3Provider);\n                    case 18:\n                        _ctx.prev = 18;\n                        _ctx.t0 = _ctx[\"catch\"](1);\n                        console.log(_ctx.t0);\n                    case 21:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    1,\n                    18\n                ]\n            ]);\n        }));\n        return function getProviderOrSigner() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var checkIfAddressIWHitelisted = function() {\n        try {} catch (error) {\n            console.log(error);\n        }\n    };\n    var getNumberOfWhitelisted = function() {};\n    var connectWallet = function() {\n        var _ref = _asyncToGenerator(_home_user_Documents_whiteListing_dapp_whitelistdapp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return _home_user_Documents_whiteListing_dapp_whitelistdapp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        _ctx.next = 3;\n                        return getProviderOrSigner();\n                    case 3:\n                        setWalletConnected(true);\n                        checkIfAddressIWHitelisted();\n                        getNumberOfWhitelisted();\n                        _ctx.next = 11;\n                        break;\n                    case 8:\n                        _ctx.prev = 8;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.log(_ctx.t0);\n                    case 11:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    8\n                ]\n            ]);\n        }));\n        return function connectWallet() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        if (!walletConnected) {\n            web3ModalRef.current = new (web3modal__WEBPACK_IMPORTED_MODULE_5___default())({\n                network: \"goerli\",\n                providerOptions: {},\n                disabledInjectedProvider: false\n            });\n            connectWallet();\n        }\n    }, [\n        walletConnected\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"title\", {\n                        children: \"Whitelist Dapp\"\n                    }, void 0, false, {\n                        fileName: \"/home/user/Documents/whiteListing-dapp/whitelistdapp/pages/index.js\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Whitelist Dapp\"\n                    }, void 0, false, {\n                        fileName: \"/home/user/Documents/whiteListing-dapp/whitelistdapp/pages/index.js\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/user/Documents/whiteListing-dapp/whitelistdapp/pages/index.js\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().title),\n                        children: \"welcome to crypto dev\"\n                    }, void 0, false, {\n                        fileName: \"/home/user/Documents/whiteListing-dapp/whitelistdapp/pages/index.js\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().description),\n                        children: [\n                            numOfWhitelisted,\n                            \" have already joind\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/user/Documents/whiteListing-dapp/whitelistdapp/pages/index.js\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                            src: \"./crypto-devs.svg\",\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().image),\n                            alt: \"\"\n                        }, void 0, false, {\n                            fileName: \"/home/user/Documents/whiteListing-dapp/whitelistdapp/pages/index.js\",\n                            lineNumber: 76,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/user/Documents/whiteListing-dapp/whitelistdapp/pages/index.js\",\n                        lineNumber: 75,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/user/Documents/whiteListing-dapp/whitelistdapp/pages/index.js\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"footer\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().footer),\n                children: \"Made with \\u2764\\uFE0F by crypto dev !\"\n            }, void 0, false, {\n                fileName: \"/home/user/Documents/whiteListing-dapp/whitelistdapp/pages/index.js\",\n                lineNumber: 79,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/user/Documents/whiteListing-dapp/whitelistdapp/pages/index.js\",\n        lineNumber: 65,\n        columnNumber: 5\n    }, this);\n};\n_s(Home, \"D+lfoffsiuCBlucAXgveFSTml3U=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFNBQVMsRUFBRXBDLHFFQUFXOztrQ0FDekIsOERBQUNzQyxJQUFFO3dCQUFDRixTQUFTLEVBQUVwQyxzRUFBWTtrQ0FBRSx1QkFBcUI7Ozs7OzRCQUFLO2tDQUN2RCw4REFBQytCLEtBQUc7d0JBQUNLLFNBQVMsRUFBRXBDLDRFQUFrQjs7NEJBQy9CTSxnQkFBZ0I7NEJBQUMscUJBQ3BCOzs7Ozs7NEJBQU07a0NBQ04sOERBQUN5QixLQUFHO2tDQUNGLDRFQUFDUyxLQUFHOzRCQUFDQyxHQUFHLEVBQUMsbUJBQW1COzRCQUFDTCxTQUFTLEVBQUVwQyxzRUFBWTs0QkFBRTJDLEdBQUcsRUFBQyxFQUFFOzs7OztnQ0FBRzs7Ozs7NEJBQzNEOzs7Ozs7b0JBQ0Y7MEJBQ04sOERBQUNDLFFBQU07Z0JBQUNSLFNBQVMsRUFBRXBDLHVFQUFhOzBCQUFFLHdDQUE0Qjs7Ozs7b0JBQVM7Ozs7OztZQUNuRSxDQUNOO0NBQ0g7R0ExRXVCRyxJQUFJO0FBQUpBLEtBQUFBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xuaW1wb3J0IFdlYjNNb2RhbCBmcm9tIFwid2ViM21vZGFsXCI7XG5pbXBvcnQgeyBwcm92aWRlcnMgfSBmcm9tIFwiZXRoZXJzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFt3YWxsZXRDb25uZWN0ZWQsIHNldFdhbGxldENvbm5lY3RlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtudW1PZldoaXRlbGlzdGVkLCBzZXROdW1PZldoaXRlbGlzdGVkXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCB3ZWIzTW9kYWxSZWYgPSB1c2VSZWYoKTtcblxuICBjb25zdCBnZXRQcm92aWRlck9yU2lnbmVyID0gYXN5bmMgKG5lZWRTaWduZXIgPSBmYWxzZSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBwcm92aWRlciA9IGF3YWl0IHdlYjNNb2RhbFJlZi5jdXJyZW50LmNvbm5lY3QoKTtcbiAgICAgIGNvbnN0IHdlYjNQcm92aWRlciA9IG5ldyBwcm92aWRlcnMuV2ViM1Byb3ZpZGVyKHByb3ZpZGVyKTtcbiAgICAgIGNvbnN0IHsgY2hhaW5JZCB9ID0gYXdhaXQgd2ViM1Byb3ZpZGVyLmdldE5ldHdvcmsoKTtcbiAgICAgIGlmIChjaGFpbklkICE9PSA1KSB7XG4gICAgICAgIGFsZXJ0KFwiY2hhbmdlIHRoZSBuZXR3b3JrIHRvIGdvZXJsaVwiKTtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiY2hhbmdlIHRoZSBuZXR3b3JrIHRvIGdvZXJsaVwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkU2lnbmVyKSB7XG4gICAgICAgIGNvbnN0IHNpZ25lciA9IHdlYjNQcm92aWRlci5nZXRTaWduZXIoKTtcbiAgICAgICAgcmV0dXJuIHNpZ25lcjtcbiAgICAgIH1cbiAgICAgIHJldHVybiB3ZWIzUHJvdmlkZXI7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgY2hlY2tJZkFkZHJlc3NJV0hpdGVsaXN0ZWQgPSAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBnZXROdW1iZXJPZldoaXRlbGlzdGVkID0gKCkgPT4ge307XG5cbiAgY29uc3QgY29ubmVjdFdhbGxldCA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgZ2V0UHJvdmlkZXJPclNpZ25lcigpO1xuICAgICAgc2V0V2FsbGV0Q29ubmVjdGVkKHRydWUpO1xuICAgICAgY2hlY2tJZkFkZHJlc3NJV0hpdGVsaXN0ZWQoKTtcbiAgICAgIGdldE51bWJlck9mV2hpdGVsaXN0ZWQoKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghd2FsbGV0Q29ubmVjdGVkKSB7XG4gICAgICB3ZWIzTW9kYWxSZWYuY3VycmVudCA9IG5ldyBXZWIzTW9kYWwoe1xuICAgICAgICBuZXR3b3JrOiBcImdvZXJsaVwiLFxuICAgICAgICBwcm92aWRlck9wdGlvbnM6IHt9LFxuICAgICAgICBkaXNhYmxlZEluamVjdGVkUHJvdmlkZXI6IGZhbHNlLFxuICAgICAgfSk7XG5cbiAgICAgIGNvbm5lY3RXYWxsZXQoKTtcbiAgICB9XG4gIH0sIFt3YWxsZXRDb25uZWN0ZWRdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPldoaXRlbGlzdCBEYXBwPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIldoaXRlbGlzdCBEYXBwXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+d2VsY29tZSB0byBjcnlwdG8gZGV2PC9oMT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+XG4gICAgICAgICAge251bU9mV2hpdGVsaXN0ZWR9IGhhdmUgYWxyZWFkeSBqb2luZFxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aW1nIHNyYz1cIi4vY3J5cHRvLWRldnMuc3ZnXCIgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2V9IGFsdD1cIlwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8Zm9vdGVyIGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcn0+TWFkZSB3aXRoIOKdpO+4jyBieSBjcnlwdG8gZGV2ICE8L2Zvb3Rlcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJIZWFkIiwiSW1hZ2UiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInN0eWxlcyIsIldlYjNNb2RhbCIsInByb3ZpZGVycyIsIkhvbWUiLCJ3YWxsZXRDb25uZWN0ZWQiLCJzZXRXYWxsZXRDb25uZWN0ZWQiLCJudW1PZldoaXRlbGlzdGVkIiwic2V0TnVtT2ZXaGl0ZWxpc3RlZCIsIndlYjNNb2RhbFJlZiIsImdldFByb3ZpZGVyT3JTaWduZXIiLCJuZWVkU2lnbmVyIiwicHJvdmlkZXIiLCJ3ZWIzUHJvdmlkZXIiLCJjaGFpbklkIiwic2lnbmVyIiwiY3VycmVudCIsImNvbm5lY3QiLCJXZWIzUHJvdmlkZXIiLCJnZXROZXR3b3JrIiwiYWxlcnQiLCJFcnJvciIsImdldFNpZ25lciIsImNvbnNvbGUiLCJsb2ciLCJjaGVja0lmQWRkcmVzc0lXSGl0ZWxpc3RlZCIsImVycm9yIiwiZ2V0TnVtYmVyT2ZXaGl0ZWxpc3RlZCIsImNvbm5lY3RXYWxsZXQiLCJuZXR3b3JrIiwicHJvdmlkZXJPcHRpb25zIiwiZGlzYWJsZWRJbmplY3RlZFByb3ZpZGVyIiwiZGl2IiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJjbGFzc05hbWUiLCJtYWluIiwiaDEiLCJkZXNjcmlwdGlvbiIsImltZyIsInNyYyIsImltYWdlIiwiYWx0IiwiZm9vdGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});