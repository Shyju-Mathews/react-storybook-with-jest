"use strict";(self.webpackChunkcons_app=self.webpackChunkcons_app||[]).push([[294],{"./src/stories/Counter.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,counterApp:()=>counterApp,default:()=>__WEBPACK_DEFAULT_EXPORT__}),__webpack_require__("./node_modules/react/index.js");var _components_Counter__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Counter.js");__webpack_require__("./src/index.css");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");let __WEBPACK_DEFAULT_EXPORT__={title:"Example/Counter",component:_components_Counter__WEBPACK_IMPORTED_MODULE_1__.Z,argTypes:{backgroundColor:{control:"color"}}},counterApp=(()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_Counter__WEBPACK_IMPORTED_MODULE_1__.Z,{})).bind({});counterApp.args={},counterApp.parameters={...counterApp.parameters,docs:{...counterApp.parameters?.docs,source:{originalSource:"() => <Counter />",...counterApp.parameters?.docs?.source}}};let __namedExportsOrder=["counterApp"]},"./src/components/Counter.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");let Counter=()=>{let[count,setCount]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),handleClick=cmd=>{"dec"===cmd?0!==count&&setCount(prev=>prev-1):"inc"===cmd&&setCount(prev=>prev+1)};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"inline-flex items-center w-full justify-center gap-3",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button",{className:"bg-blue-500 text-white px-4 py-2 rounded",onClick:()=>handleClick("dec"),children:"-"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"bg-gray-200 px-2 py-1 rounded text-lg",children:count}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button",{className:"bg-blue-500 text-white px-4 py-2 rounded",onClick:()=>handleClick("inc"),children:"+"})]})},__WEBPACK_DEFAULT_EXPORT__=Counter;Counter.__docgenInfo={description:"",methods:[],displayName:"Counter"}},"./src/index.css":()=>{},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);
//# sourceMappingURL=stories-Counter-stories.36a4699e.iframe.bundle.js.map