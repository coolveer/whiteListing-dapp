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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _home_user_Documents_whiteListing_dapp_whitelistdapp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_user_Documents_whiteListing_dapp_whitelistdapp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_user_Documents_whiteListing_dapp_whitelistdapp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! web3modal */ \"./node_modules/web3modal/dist/index.js\");\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(web3modal__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Home() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false), walletConnected = ref[0], setWalletConnected = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0), numOfWhitelisted = ref1[0], setNumOfWhitelisted = ref1[1];\n    var web3ModalRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)();\n    var getProviderOrSigner = function() {\n        var _ref = _asyncToGenerator(_home_user_Documents_whiteListing_dapp_whitelistdapp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var needSigner, provider, web3Provider, chainId, signer, _args = arguments;\n            return _home_user_Documents_whiteListing_dapp_whitelistdapp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        needSigner = _args.length > 0 && _args[0] !== void 0 ? _args[0] : false;\n                        _ctx.prev = 1;\n                        _ctx.next = 4;\n                        return web3ModalRef.current.connect();\n                    case 4:\n                        provider = _ctx.sent;\n                        web3Provider = new ethers__WEBPACK_IMPORTED_MODULE_6__.providers.Web3Provider(provider);\n                        _ctx.next = 8;\n                        return web3Provider.getNetwork();\n                    case 8:\n                        chainId = _ctx.sent.chainId;\n                        if (!(chainId !== 5)) {\n                            _ctx.next = 12;\n                            break;\n                        }\n                        alert(\"change the network to goerli\");\n                        throw new Error(\"change the network to goerli\");\n                    case 12:\n                        if (!needSigner) {\n                            _ctx.next = 15;\n                            break;\n                        }\n                        signer = web3Provider.getSigner();\n                        return _ctx.abrupt(\"return\", signer);\n                    case 15:\n                        return _ctx.abrupt(\"return\", web3Provider);\n                    case 18:\n                        _ctx.prev = 18;\n                        _ctx.t0 = _ctx[\"catch\"](1);\n                        console.log(_ctx.t0);\n                    case 21:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    1,\n                    18\n                ]\n            ]);\n        }));\n        return function getProviderOrSigner() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var checkIfAddressIWHitelisted = function() {\n        try {\n            var signer = getProviderOrSigner(true);\n            var whiteListcontract = new ethers__WEBPACK_IMPORTED_MODULE_6__.Contract({});\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    var getNumberOfWhitelisted = function() {};\n    var connectWallet = function() {\n        var _ref = _asyncToGenerator(_home_user_Documents_whiteListing_dapp_whitelistdapp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return _home_user_Documents_whiteListing_dapp_whitelistdapp_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        _ctx.next = 3;\n                        return getProviderOrSigner();\n                    case 3:\n                        setWalletConnected(true);\n                        checkIfAddressIWHitelisted();\n                        getNumberOfWhitelisted();\n                        _ctx.next = 11;\n                        break;\n                    case 8:\n                        _ctx.prev = 8;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.log(_ctx.t0);\n                    case 11:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    8\n                ]\n            ]);\n        }));\n        return function connectWallet() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        if (!walletConnected) {\n            web3ModalRef.current = new (web3modal__WEBPACK_IMPORTED_MODULE_5___default())({\n                network: \"goerli\",\n                providerOptions: {},\n                disabledInjectedProvider: false\n            });\n            connectWallet();\n        }\n    }, [\n        walletConnected\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"title\", {\n                        children: \"Whitelist Dapp\"\n                    }, void 0, false, {\n                        fileName: \"/home/user/Documents/whiteListing-dapp/whitelistdapp/pages/index.js\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Whitelist Dapp\"\n                    }, void 0, false, {\n                        fileName: \"/home/user/Documents/whiteListing-dapp/whitelistdapp/pages/index.js\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/user/Documents/whiteListing-dapp/whitelistdapp/pages/index.js\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().title),\n                        children: \"welcome to crypto dev\"\n                    }, void 0, false, {\n                        fileName: \"/home/user/Documents/whiteListing-dapp/whitelistdapp/pages/index.js\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().description),\n                        children: [\n                            numOfWhitelisted,\n                            \" have already joind\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/user/Documents/whiteListing-dapp/whitelistdapp/pages/index.js\",\n                        lineNumber: 74,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                            src: \"./crypto-devs.svg\",\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().image),\n                            alt: \"\"\n                        }, void 0, false, {\n                            fileName: \"/home/user/Documents/whiteListing-dapp/whitelistdapp/pages/index.js\",\n                            lineNumber: 78,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/user/Documents/whiteListing-dapp/whitelistdapp/pages/index.js\",\n                        lineNumber: 77,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/user/Documents/whiteListing-dapp/whitelistdapp/pages/index.js\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"footer\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().footer),\n                children: \"Made with \\u2764\\uFE0F by crypto dev !\"\n            }, void 0, false, {\n                fileName: \"/home/user/Documents/whiteListing-dapp/whitelistdapp/pages/index.js\",\n                lineNumber: 81,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/user/Documents/whiteListing-dapp/whitelistdapp/pages/index.js\",\n        lineNumber: 67,\n        columnNumber: 5\n    }, this);\n};\n_s(Home, \"D+lfoffsiuCBlucAXgveFSTml3U=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxNQUFJO3dCQUFDQyxJQUFJLEVBQUMsYUFBYTt3QkFBQ0MsT0FBTyxFQUFDLGdCQUFnQjs7Ozs7NEJBQUc7Ozs7OztvQkFDL0M7MEJBQ1AsOERBQUNKLEtBQUc7Z0JBQUNLLFNBQVMsRUFBRXRDLHFFQUFXOztrQ0FDekIsOERBQUN3QyxJQUFFO3dCQUFDRixTQUFTLEVBQUV0QyxzRUFBWTtrQ0FBRSx1QkFBcUI7Ozs7OzRCQUFLO2tDQUN2RCw4REFBQ2lDLEtBQUc7d0JBQUNLLFNBQVMsRUFBRXRDLDRFQUFrQjs7NEJBQy9CTyxnQkFBZ0I7NEJBQUMscUJBQ3BCOzs7Ozs7NEJBQU07a0NBQ04sOERBQUMwQixLQUFHO2tDQUNGLDRFQUFDUyxLQUFHOzRCQUFDQyxHQUFHLEVBQUMsbUJBQW1COzRCQUFDTCxTQUFTLEVBQUV0QyxzRUFBWTs0QkFBRTZDLEdBQUcsRUFBQyxFQUFFOzs7OztnQ0FBRzs7Ozs7NEJBQzNEOzs7Ozs7b0JBQ0Y7MEJBQ04sOERBQUNDLFFBQU07Z0JBQUNSLFNBQVMsRUFBRXRDLHVFQUFhOzBCQUFFLHdDQUE0Qjs7Ozs7b0JBQVM7Ozs7OztZQUNuRSxDQUNOO0NBQ0g7R0E1RXVCSSxJQUFJO0FBQUpBLEtBQUFBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xuaW1wb3J0IFdlYjNNb2RhbCBmcm9tIFwid2ViM21vZGFsXCI7XG5pbXBvcnQgeyBDb250cmFjdCwgcHJvdmlkZXJzIH0gZnJvbSBcImV0aGVyc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbd2FsbGV0Q29ubmVjdGVkLCBzZXRXYWxsZXRDb25uZWN0ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbbnVtT2ZXaGl0ZWxpc3RlZCwgc2V0TnVtT2ZXaGl0ZWxpc3RlZF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3Qgd2ViM01vZGFsUmVmID0gdXNlUmVmKCk7XG5cbiAgY29uc3QgZ2V0UHJvdmlkZXJPclNpZ25lciA9IGFzeW5jIChuZWVkU2lnbmVyID0gZmFsc2UpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcHJvdmlkZXIgPSBhd2FpdCB3ZWIzTW9kYWxSZWYuY3VycmVudC5jb25uZWN0KCk7XG4gICAgICBjb25zdCB3ZWIzUHJvdmlkZXIgPSBuZXcgcHJvdmlkZXJzLldlYjNQcm92aWRlcihwcm92aWRlcik7XG4gICAgICBjb25zdCB7IGNoYWluSWQgfSA9IGF3YWl0IHdlYjNQcm92aWRlci5nZXROZXR3b3JrKCk7XG4gICAgICBpZiAoY2hhaW5JZCAhPT0gNSkge1xuICAgICAgICBhbGVydChcImNoYW5nZSB0aGUgbmV0d29yayB0byBnb2VybGlcIik7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcImNoYW5nZSB0aGUgbmV0d29yayB0byBnb2VybGlcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZFNpZ25lcikge1xuICAgICAgICBjb25zdCBzaWduZXIgPSB3ZWIzUHJvdmlkZXIuZ2V0U2lnbmVyKCk7XG4gICAgICAgIHJldHVybiBzaWduZXI7XG4gICAgICB9XG4gICAgICByZXR1cm4gd2ViM1Byb3ZpZGVyO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGNoZWNrSWZBZGRyZXNzSVdIaXRlbGlzdGVkID0gKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBzaWduZXIgPSBnZXRQcm92aWRlck9yU2lnbmVyKHRydWUpO1xuICAgICAgY29uc3Qgd2hpdGVMaXN0Y29udHJhY3QgPSBuZXcgQ29udHJhY3Qoe30pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGdldE51bWJlck9mV2hpdGVsaXN0ZWQgPSAoKSA9PiB7fTtcblxuICBjb25zdCBjb25uZWN0V2FsbGV0ID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCBnZXRQcm92aWRlck9yU2lnbmVyKCk7XG4gICAgICBzZXRXYWxsZXRDb25uZWN0ZWQodHJ1ZSk7XG4gICAgICBjaGVja0lmQWRkcmVzc0lXSGl0ZWxpc3RlZCgpO1xuICAgICAgZ2V0TnVtYmVyT2ZXaGl0ZWxpc3RlZCgpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfVxuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCF3YWxsZXRDb25uZWN0ZWQpIHtcbiAgICAgIHdlYjNNb2RhbFJlZi5jdXJyZW50ID0gbmV3IFdlYjNNb2RhbCh7XG4gICAgICAgIG5ldHdvcms6IFwiZ29lcmxpXCIsXG4gICAgICAgIHByb3ZpZGVyT3B0aW9uczoge30sXG4gICAgICAgIGRpc2FibGVkSW5qZWN0ZWRQcm92aWRlcjogZmFsc2UsXG4gICAgICB9KTtcblxuICAgICAgY29ubmVjdFdhbGxldCgpO1xuICAgIH1cbiAgfSwgW3dhbGxldENvbm5lY3RlZF0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+V2hpdGVsaXN0IERhcHA8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiV2hpdGVsaXN0IERhcHBcIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT53ZWxjb21lIHRvIGNyeXB0byBkZXY8L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT5cbiAgICAgICAgICB7bnVtT2ZXaGl0ZWxpc3RlZH0gaGF2ZSBhbHJlYWR5IGpvaW5kXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxpbWcgc3JjPVwiLi9jcnlwdG8tZGV2cy5zdmdcIiBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZX0gYWx0PVwiXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxmb290ZXIgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyfT5NYWRlIHdpdGgg4p2k77iPIGJ5IGNyeXB0byBkZXYgITwvZm9vdGVyPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkhlYWQiLCJJbWFnZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwic3R5bGVzIiwiV2ViM01vZGFsIiwiQ29udHJhY3QiLCJwcm92aWRlcnMiLCJIb21lIiwid2FsbGV0Q29ubmVjdGVkIiwic2V0V2FsbGV0Q29ubmVjdGVkIiwibnVtT2ZXaGl0ZWxpc3RlZCIsInNldE51bU9mV2hpdGVsaXN0ZWQiLCJ3ZWIzTW9kYWxSZWYiLCJnZXRQcm92aWRlck9yU2lnbmVyIiwibmVlZFNpZ25lciIsInByb3ZpZGVyIiwid2ViM1Byb3ZpZGVyIiwiY2hhaW5JZCIsInNpZ25lciIsImN1cnJlbnQiLCJjb25uZWN0IiwiV2ViM1Byb3ZpZGVyIiwiZ2V0TmV0d29yayIsImFsZXJ0IiwiRXJyb3IiLCJnZXRTaWduZXIiLCJjb25zb2xlIiwibG9nIiwiY2hlY2tJZkFkZHJlc3NJV0hpdGVsaXN0ZWQiLCJ3aGl0ZUxpc3Rjb250cmFjdCIsImVycm9yIiwiZ2V0TnVtYmVyT2ZXaGl0ZWxpc3RlZCIsImNvbm5lY3RXYWxsZXQiLCJuZXR3b3JrIiwicHJvdmlkZXJPcHRpb25zIiwiZGlzYWJsZWRJbmplY3RlZFByb3ZpZGVyIiwiZGl2IiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJjbGFzc05hbWUiLCJtYWluIiwiaDEiLCJkZXNjcmlwdGlvbiIsImltZyIsInNyYyIsImltYWdlIiwiYWx0IiwiZm9vdGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});