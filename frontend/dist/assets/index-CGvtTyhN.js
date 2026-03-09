(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))l(u);new MutationObserver(u=>{for(const f of u)if(f.type==="childList")for(const d of f.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&l(d)}).observe(document,{childList:!0,subtree:!0});function o(u){const f={};return u.integrity&&(f.integrity=u.integrity),u.referrerPolicy&&(f.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?f.credentials="include":u.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function l(u){if(u.ep)return;u.ep=!0;const f=o(u);fetch(u.href,f)}})();function F0(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var oa={exports:{}},xs={},ia={exports:{}},ue={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bf;function U0(){if(bf)return ue;bf=1;var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),f=Symbol.for("react.provider"),d=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),y=Symbol.iterator;function x(k){return k===null||typeof k!="object"?null:(k=y&&k[y]||k["@@iterator"],typeof k=="function"?k:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,R={};function L(k,N,le){this.props=k,this.context=N,this.refs=R,this.updater=le||b}L.prototype.isReactComponent={},L.prototype.setState=function(k,N){if(typeof k!="object"&&typeof k!="function"&&k!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,k,N,"setState")},L.prototype.forceUpdate=function(k){this.updater.enqueueForceUpdate(this,k,"forceUpdate")};function j(){}j.prototype=L.prototype;function I(k,N,le){this.props=k,this.context=N,this.refs=R,this.updater=le||b}var A=I.prototype=new j;A.constructor=I,T(A,L.prototype),A.isPureReactComponent=!0;var B=Array.isArray,U=Object.prototype.hasOwnProperty,K={current:null},ee={key:!0,ref:!0,__self:!0,__source:!0};function W(k,N,le){var ae,de={},pe=null,we=null;if(N!=null)for(ae in N.ref!==void 0&&(we=N.ref),N.key!==void 0&&(pe=""+N.key),N)U.call(N,ae)&&!ee.hasOwnProperty(ae)&&(de[ae]=N[ae]);var me=arguments.length-2;if(me===1)de.children=le;else if(1<me){for(var ve=Array(me),Je=0;Je<me;Je++)ve[Je]=arguments[Je+2];de.children=ve}if(k&&k.defaultProps)for(ae in me=k.defaultProps,me)de[ae]===void 0&&(de[ae]=me[ae]);return{$$typeof:n,type:k,key:pe,ref:we,props:de,_owner:K.current}}function $(k,N){return{$$typeof:n,type:k.type,key:N,ref:k.ref,props:k.props,_owner:k._owner}}function oe(k){return typeof k=="object"&&k!==null&&k.$$typeof===n}function ce(k){var N={"=":"=0",":":"=2"};return"$"+k.replace(/[=:]/g,function(le){return N[le]})}var fe=/\/+/g;function ie(k,N){return typeof k=="object"&&k!==null&&k.key!=null?ce(""+k.key):N.toString(36)}function Se(k,N,le,ae,de){var pe=typeof k;(pe==="undefined"||pe==="boolean")&&(k=null);var we=!1;if(k===null)we=!0;else switch(pe){case"string":case"number":we=!0;break;case"object":switch(k.$$typeof){case n:case r:we=!0}}if(we)return we=k,de=de(we),k=ae===""?"."+ie(we,0):ae,B(de)?(le="",k!=null&&(le=k.replace(fe,"$&/")+"/"),Se(de,N,le,"",function(Je){return Je})):de!=null&&(oe(de)&&(de=$(de,le+(!de.key||we&&we.key===de.key?"":(""+de.key).replace(fe,"$&/")+"/")+k)),N.push(de)),1;if(we=0,ae=ae===""?".":ae+":",B(k))for(var me=0;me<k.length;me++){pe=k[me];var ve=ae+ie(pe,me);we+=Se(pe,N,le,ve,de)}else if(ve=x(k),typeof ve=="function")for(k=ve.call(k),me=0;!(pe=k.next()).done;)pe=pe.value,ve=ae+ie(pe,me++),we+=Se(pe,N,le,ve,de);else if(pe==="object")throw N=String(k),Error("Objects are not valid as a React child (found: "+(N==="[object Object]"?"object with keys {"+Object.keys(k).join(", ")+"}":N)+"). If you meant to render a collection of children, use an array instead.");return we}function Ce(k,N,le){if(k==null)return k;var ae=[],de=0;return Se(k,ae,"","",function(pe){return N.call(le,pe,de++)}),ae}function Pe(k){if(k._status===-1){var N=k._result;N=N(),N.then(function(le){(k._status===0||k._status===-1)&&(k._status=1,k._result=le)},function(le){(k._status===0||k._status===-1)&&(k._status=2,k._result=le)}),k._status===-1&&(k._status=0,k._result=N)}if(k._status===1)return k._result.default;throw k._result}var _e={current:null},z={transition:null},H={ReactCurrentDispatcher:_e,ReactCurrentBatchConfig:z,ReactCurrentOwner:K};function Q(){throw Error("act(...) is not supported in production builds of React.")}return ue.Children={map:Ce,forEach:function(k,N,le){Ce(k,function(){N.apply(this,arguments)},le)},count:function(k){var N=0;return Ce(k,function(){N++}),N},toArray:function(k){return Ce(k,function(N){return N})||[]},only:function(k){if(!oe(k))throw Error("React.Children.only expected to receive a single React element child.");return k}},ue.Component=L,ue.Fragment=o,ue.Profiler=u,ue.PureComponent=I,ue.StrictMode=l,ue.Suspense=h,ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=H,ue.act=Q,ue.cloneElement=function(k,N,le){if(k==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+k+".");var ae=T({},k.props),de=k.key,pe=k.ref,we=k._owner;if(N!=null){if(N.ref!==void 0&&(pe=N.ref,we=K.current),N.key!==void 0&&(de=""+N.key),k.type&&k.type.defaultProps)var me=k.type.defaultProps;for(ve in N)U.call(N,ve)&&!ee.hasOwnProperty(ve)&&(ae[ve]=N[ve]===void 0&&me!==void 0?me[ve]:N[ve])}var ve=arguments.length-2;if(ve===1)ae.children=le;else if(1<ve){me=Array(ve);for(var Je=0;Je<ve;Je++)me[Je]=arguments[Je+2];ae.children=me}return{$$typeof:n,type:k.type,key:de,ref:pe,props:ae,_owner:we}},ue.createContext=function(k){return k={$$typeof:d,_currentValue:k,_currentValue2:k,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},k.Provider={$$typeof:f,_context:k},k.Consumer=k},ue.createElement=W,ue.createFactory=function(k){var N=W.bind(null,k);return N.type=k,N},ue.createRef=function(){return{current:null}},ue.forwardRef=function(k){return{$$typeof:p,render:k}},ue.isValidElement=oe,ue.lazy=function(k){return{$$typeof:g,_payload:{_status:-1,_result:k},_init:Pe}},ue.memo=function(k,N){return{$$typeof:_,type:k,compare:N===void 0?null:N}},ue.startTransition=function(k){var N=z.transition;z.transition={};try{k()}finally{z.transition=N}},ue.unstable_act=Q,ue.useCallback=function(k,N){return _e.current.useCallback(k,N)},ue.useContext=function(k){return _e.current.useContext(k)},ue.useDebugValue=function(){},ue.useDeferredValue=function(k){return _e.current.useDeferredValue(k)},ue.useEffect=function(k,N){return _e.current.useEffect(k,N)},ue.useId=function(){return _e.current.useId()},ue.useImperativeHandle=function(k,N,le){return _e.current.useImperativeHandle(k,N,le)},ue.useInsertionEffect=function(k,N){return _e.current.useInsertionEffect(k,N)},ue.useLayoutEffect=function(k,N){return _e.current.useLayoutEffect(k,N)},ue.useMemo=function(k,N){return _e.current.useMemo(k,N)},ue.useReducer=function(k,N,le){return _e.current.useReducer(k,N,le)},ue.useRef=function(k){return _e.current.useRef(k)},ue.useState=function(k){return _e.current.useState(k)},ue.useSyncExternalStore=function(k,N,le){return _e.current.useSyncExternalStore(k,N,le)},ue.useTransition=function(){return _e.current.useTransition()},ue.version="18.3.1",ue}var Cf;function tu(){return Cf||(Cf=1,ia.exports=U0()),ia.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tf;function Y0(){if(Tf)return xs;Tf=1;var n=tu(),r=Symbol.for("react.element"),o=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,u=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,f={key:!0,ref:!0,__self:!0,__source:!0};function d(p,h,_){var g,y={},x=null,b=null;_!==void 0&&(x=""+_),h.key!==void 0&&(x=""+h.key),h.ref!==void 0&&(b=h.ref);for(g in h)l.call(h,g)&&!f.hasOwnProperty(g)&&(y[g]=h[g]);if(p&&p.defaultProps)for(g in h=p.defaultProps,h)y[g]===void 0&&(y[g]=h[g]);return{$$typeof:r,type:p,key:x,ref:b,props:y,_owner:u.current}}return xs.Fragment=o,xs.jsx=d,xs.jsxs=d,xs}var Pf;function W0(){return Pf||(Pf=1,oa.exports=Y0()),oa.exports}var D=W0(),Qo={},la={exports:{}},ht={},aa={exports:{}},ua={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ef;function H0(){return Ef||(Ef=1,(function(n){function r(z,H){var Q=z.length;z.push(H);e:for(;0<Q;){var k=Q-1>>>1,N=z[k];if(0<u(N,H))z[k]=H,z[Q]=N,Q=k;else break e}}function o(z){return z.length===0?null:z[0]}function l(z){if(z.length===0)return null;var H=z[0],Q=z.pop();if(Q!==H){z[0]=Q;e:for(var k=0,N=z.length,le=N>>>1;k<le;){var ae=2*(k+1)-1,de=z[ae],pe=ae+1,we=z[pe];if(0>u(de,Q))pe<N&&0>u(we,de)?(z[k]=we,z[pe]=Q,k=pe):(z[k]=de,z[ae]=Q,k=ae);else if(pe<N&&0>u(we,Q))z[k]=we,z[pe]=Q,k=pe;else break e}}return H}function u(z,H){var Q=z.sortIndex-H.sortIndex;return Q!==0?Q:z.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var f=performance;n.unstable_now=function(){return f.now()}}else{var d=Date,p=d.now();n.unstable_now=function(){return d.now()-p}}var h=[],_=[],g=1,y=null,x=3,b=!1,T=!1,R=!1,L=typeof setTimeout=="function"?setTimeout:null,j=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function A(z){for(var H=o(_);H!==null;){if(H.callback===null)l(_);else if(H.startTime<=z)l(_),H.sortIndex=H.expirationTime,r(h,H);else break;H=o(_)}}function B(z){if(R=!1,A(z),!T)if(o(h)!==null)T=!0,Pe(U);else{var H=o(_);H!==null&&_e(B,H.startTime-z)}}function U(z,H){T=!1,R&&(R=!1,j(W),W=-1),b=!0;var Q=x;try{for(A(H),y=o(h);y!==null&&(!(y.expirationTime>H)||z&&!ce());){var k=y.callback;if(typeof k=="function"){y.callback=null,x=y.priorityLevel;var N=k(y.expirationTime<=H);H=n.unstable_now(),typeof N=="function"?y.callback=N:y===o(h)&&l(h),A(H)}else l(h);y=o(h)}if(y!==null)var le=!0;else{var ae=o(_);ae!==null&&_e(B,ae.startTime-H),le=!1}return le}finally{y=null,x=Q,b=!1}}var K=!1,ee=null,W=-1,$=5,oe=-1;function ce(){return!(n.unstable_now()-oe<$)}function fe(){if(ee!==null){var z=n.unstable_now();oe=z;var H=!0;try{H=ee(!0,z)}finally{H?ie():(K=!1,ee=null)}}else K=!1}var ie;if(typeof I=="function")ie=function(){I(fe)};else if(typeof MessageChannel<"u"){var Se=new MessageChannel,Ce=Se.port2;Se.port1.onmessage=fe,ie=function(){Ce.postMessage(null)}}else ie=function(){L(fe,0)};function Pe(z){ee=z,K||(K=!0,ie())}function _e(z,H){W=L(function(){z(n.unstable_now())},H)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(z){z.callback=null},n.unstable_continueExecution=function(){T||b||(T=!0,Pe(U))},n.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<z?Math.floor(1e3/z):5},n.unstable_getCurrentPriorityLevel=function(){return x},n.unstable_getFirstCallbackNode=function(){return o(h)},n.unstable_next=function(z){switch(x){case 1:case 2:case 3:var H=3;break;default:H=x}var Q=x;x=H;try{return z()}finally{x=Q}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(z,H){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var Q=x;x=z;try{return H()}finally{x=Q}},n.unstable_scheduleCallback=function(z,H,Q){var k=n.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?k+Q:k):Q=k,z){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=Q+N,z={id:g++,callback:H,priorityLevel:z,startTime:Q,expirationTime:N,sortIndex:-1},Q>k?(z.sortIndex=Q,r(_,z),o(h)===null&&z===o(_)&&(R?(j(W),W=-1):R=!0,_e(B,Q-k))):(z.sortIndex=N,r(h,z),T||b||(T=!0,Pe(U))),z},n.unstable_shouldYield=ce,n.unstable_wrapCallback=function(z){var H=x;return function(){var Q=x;x=H;try{return z.apply(this,arguments)}finally{x=Q}}}})(ua)),ua}var Mf;function Q0(){return Mf||(Mf=1,aa.exports=H0()),aa.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Df;function X0(){if(Df)return ht;Df=1;var n=tu(),r=Q0();function o(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,s=1;s<arguments.length;s++)t+="&args[]="+encodeURIComponent(arguments[s]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var l=new Set,u={};function f(e,t){d(e,t),d(e+"Capture",t)}function d(e,t){for(u[e]=t,e=0;e<t.length;e++)l.add(t[e])}var p=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},y={};function x(e){return h.call(y,e)?!0:h.call(g,e)?!1:_.test(e)?y[e]=!0:(g[e]=!0,!1)}function b(e,t,s,i){if(s!==null&&s.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return i?!1:s!==null?!s.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function T(e,t,s,i){if(t===null||typeof t>"u"||b(e,t,s,i))return!0;if(i)return!1;if(s!==null)switch(s.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function R(e,t,s,i,a,c,m){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=i,this.attributeNamespace=a,this.mustUseProperty=s,this.propertyName=e,this.type=t,this.sanitizeURL=c,this.removeEmptyString=m}var L={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){L[e]=new R(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];L[t]=new R(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){L[e]=new R(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){L[e]=new R(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){L[e]=new R(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){L[e]=new R(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){L[e]=new R(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){L[e]=new R(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){L[e]=new R(e,5,!1,e.toLowerCase(),null,!1,!1)});var j=/[\-:]([a-z])/g;function I(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(j,I);L[t]=new R(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(j,I);L[t]=new R(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(j,I);L[t]=new R(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){L[e]=new R(e,1,!1,e.toLowerCase(),null,!1,!1)}),L.xlinkHref=new R("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){L[e]=new R(e,1,!1,e.toLowerCase(),null,!0,!0)});function A(e,t,s,i){var a=L.hasOwnProperty(t)?L[t]:null;(a!==null?a.type!==0:i||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(T(t,s,a,i)&&(s=null),i||a===null?x(t)&&(s===null?e.removeAttribute(t):e.setAttribute(t,""+s)):a.mustUseProperty?e[a.propertyName]=s===null?a.type===3?!1:"":s:(t=a.attributeName,i=a.attributeNamespace,s===null?e.removeAttribute(t):(a=a.type,s=a===3||a===4&&s===!0?"":""+s,i?e.setAttributeNS(i,t,s):e.setAttribute(t,s))))}var B=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,U=Symbol.for("react.element"),K=Symbol.for("react.portal"),ee=Symbol.for("react.fragment"),W=Symbol.for("react.strict_mode"),$=Symbol.for("react.profiler"),oe=Symbol.for("react.provider"),ce=Symbol.for("react.context"),fe=Symbol.for("react.forward_ref"),ie=Symbol.for("react.suspense"),Se=Symbol.for("react.suspense_list"),Ce=Symbol.for("react.memo"),Pe=Symbol.for("react.lazy"),_e=Symbol.for("react.offscreen"),z=Symbol.iterator;function H(e){return e===null||typeof e!="object"?null:(e=z&&e[z]||e["@@iterator"],typeof e=="function"?e:null)}var Q=Object.assign,k;function N(e){if(k===void 0)try{throw Error()}catch(s){var t=s.stack.trim().match(/\n( *(at )?)/);k=t&&t[1]||""}return`
`+k+e}var le=!1;function ae(e,t){if(!e||le)return"";le=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(E){var i=E}Reflect.construct(e,[],t)}else{try{t.call()}catch(E){i=E}e.call(t.prototype)}else{try{throw Error()}catch(E){i=E}e()}}catch(E){if(E&&i&&typeof E.stack=="string"){for(var a=E.stack.split(`
`),c=i.stack.split(`
`),m=a.length-1,v=c.length-1;1<=m&&0<=v&&a[m]!==c[v];)v--;for(;1<=m&&0<=v;m--,v--)if(a[m]!==c[v]){if(m!==1||v!==1)do if(m--,v--,0>v||a[m]!==c[v]){var w=`
`+a[m].replace(" at new "," at ");return e.displayName&&w.includes("<anonymous>")&&(w=w.replace("<anonymous>",e.displayName)),w}while(1<=m&&0<=v);break}}}finally{le=!1,Error.prepareStackTrace=s}return(e=e?e.displayName||e.name:"")?N(e):""}function de(e){switch(e.tag){case 5:return N(e.type);case 16:return N("Lazy");case 13:return N("Suspense");case 19:return N("SuspenseList");case 0:case 2:case 15:return e=ae(e.type,!1),e;case 11:return e=ae(e.type.render,!1),e;case 1:return e=ae(e.type,!0),e;default:return""}}function pe(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ee:return"Fragment";case K:return"Portal";case $:return"Profiler";case W:return"StrictMode";case ie:return"Suspense";case Se:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ce:return(e.displayName||"Context")+".Consumer";case oe:return(e._context.displayName||"Context")+".Provider";case fe:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ce:return t=e.displayName||null,t!==null?t:pe(e.type)||"Memo";case Pe:t=e._payload,e=e._init;try{return pe(e(t))}catch{}}return null}function we(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return pe(t);case 8:return t===W?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function me(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ve(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Je(e){var t=ve(e)?"checked":"value",s=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),i=""+e[t];if(!e.hasOwnProperty(t)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var a=s.get,c=s.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(m){i=""+m,c.call(this,m)}}),Object.defineProperty(e,t,{enumerable:s.enumerable}),{getValue:function(){return i},setValue:function(m){i=""+m},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Zn(e){e._valueTracker||(e._valueTracker=Je(e))}function Ee(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var s=t.getValue(),i="";return e&&(i=ve(e)?e.checked?"true":"false":e.value),e=i,e!==s?(t.setValue(e),!0):!1}function Le(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function qe(e,t){var s=t.checked;return Q({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:s??e._wrapperState.initialChecked})}function _t(e,t){var s=t.defaultValue==null?"":t.defaultValue,i=t.checked!=null?t.checked:t.defaultChecked;s=me(t.value!=null?t.value:s),e._wrapperState={initialChecked:i,initialValue:s,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ut(e,t){t=t.checked,t!=null&&A(e,"checked",t,!1)}function gt(e,t){ut(e,t);var s=me(t.value),i=t.type;if(s!=null)i==="number"?(s===0&&e.value===""||e.value!=s)&&(e.value=""+s):e.value!==""+s&&(e.value=""+s);else if(i==="submit"||i==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Gt(e,t.type,s):t.hasOwnProperty("defaultValue")&&Gt(e,t.type,me(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Dt(e,t,s){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var i=t.type;if(!(i!=="submit"&&i!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,s||t===e.value||(e.value=t),e.defaultValue=t}s=e.name,s!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,s!==""&&(e.name=s)}function Gt(e,t,s){(t!=="number"||Le(e.ownerDocument)!==e)&&(s==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+s&&(e.defaultValue=""+s))}var jr=Array.isArray;function Jn(e,t,s,i){if(e=e.options,t){t={};for(var a=0;a<s.length;a++)t["$"+s[a]]=!0;for(s=0;s<e.length;s++)a=t.hasOwnProperty("$"+e[s].value),e[s].selected!==a&&(e[s].selected=a),a&&i&&(e[s].defaultSelected=!0)}else{for(s=""+me(s),t=null,a=0;a<e.length;a++){if(e[a].value===s){e[a].selected=!0,i&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function hi(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(o(91));return Q({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Au(e,t){var s=t.value;if(s==null){if(s=t.children,t=t.defaultValue,s!=null){if(t!=null)throw Error(o(92));if(jr(s)){if(1<s.length)throw Error(o(93));s=s[0]}t=s}t==null&&(t=""),s=t}e._wrapperState={initialValue:me(s)}}function Iu(e,t){var s=me(t.value),i=me(t.defaultValue);s!=null&&(s=""+s,s!==e.value&&(e.value=s),t.defaultValue==null&&e.defaultValue!==s&&(e.defaultValue=s)),i!=null&&(e.defaultValue=""+i)}function ju(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Nu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function _i(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Nu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Vs,Vu=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,s,i,a){MSApp.execUnsafeLocalFunction(function(){return e(t,s,i,a)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Vs=Vs||document.createElement("div"),Vs.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Vs.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Nr(e,t){if(t){var s=e.firstChild;if(s&&s===e.lastChild&&s.nodeType===3){s.nodeValue=t;return}}e.textContent=t}var Vr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Hh=["Webkit","ms","Moz","O"];Object.keys(Vr).forEach(function(e){Hh.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Vr[t]=Vr[e]})});function zu(e,t,s){return t==null||typeof t=="boolean"||t===""?"":s||typeof t!="number"||t===0||Vr.hasOwnProperty(e)&&Vr[e]?(""+t).trim():t+"px"}function Ou(e,t){e=e.style;for(var s in t)if(t.hasOwnProperty(s)){var i=s.indexOf("--")===0,a=zu(s,t[s],i);s==="float"&&(s="cssFloat"),i?e.setProperty(s,a):e[s]=a}}var Qh=Q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function gi(e,t){if(t){if(Qh[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(o(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(o(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(o(61))}if(t.style!=null&&typeof t.style!="object")throw Error(o(62))}}function yi(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var vi=null;function xi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var wi=null,qn=null,er=null;function Bu(e){if(e=os(e)){if(typeof wi!="function")throw Error(o(280));var t=e.stateNode;t&&(t=io(t),wi(e.stateNode,e.type,t))}}function Fu(e){qn?er?er.push(e):er=[e]:qn=e}function Uu(){if(qn){var e=qn,t=er;if(er=qn=null,Bu(e),t)for(e=0;e<t.length;e++)Bu(t[e])}}function Yu(e,t){return e(t)}function Wu(){}var Si=!1;function Hu(e,t,s){if(Si)return e(t,s);Si=!0;try{return Yu(e,t,s)}finally{Si=!1,(qn!==null||er!==null)&&(Wu(),Uu())}}function zr(e,t){var s=e.stateNode;if(s===null)return null;var i=io(s);if(i===null)return null;s=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(s&&typeof s!="function")throw Error(o(231,t,typeof s));return s}var ki=!1;if(p)try{var Or={};Object.defineProperty(Or,"passive",{get:function(){ki=!0}}),window.addEventListener("test",Or,Or),window.removeEventListener("test",Or,Or)}catch{ki=!1}function Xh(e,t,s,i,a,c,m,v,w){var E=Array.prototype.slice.call(arguments,3);try{t.apply(s,E)}catch(O){this.onError(O)}}var Br=!1,zs=null,Os=!1,bi=null,$h={onError:function(e){Br=!0,zs=e}};function Kh(e,t,s,i,a,c,m,v,w){Br=!1,zs=null,Xh.apply($h,arguments)}function Gh(e,t,s,i,a,c,m,v,w){if(Kh.apply(this,arguments),Br){if(Br){var E=zs;Br=!1,zs=null}else throw Error(o(198));Os||(Os=!0,bi=E)}}function Rn(e){var t=e,s=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(s=t.return),e=t.return;while(e)}return t.tag===3?s:null}function Qu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Xu(e){if(Rn(e)!==e)throw Error(o(188))}function Zh(e){var t=e.alternate;if(!t){if(t=Rn(e),t===null)throw Error(o(188));return t!==e?null:e}for(var s=e,i=t;;){var a=s.return;if(a===null)break;var c=a.alternate;if(c===null){if(i=a.return,i!==null){s=i;continue}break}if(a.child===c.child){for(c=a.child;c;){if(c===s)return Xu(a),e;if(c===i)return Xu(a),t;c=c.sibling}throw Error(o(188))}if(s.return!==i.return)s=a,i=c;else{for(var m=!1,v=a.child;v;){if(v===s){m=!0,s=a,i=c;break}if(v===i){m=!0,i=a,s=c;break}v=v.sibling}if(!m){for(v=c.child;v;){if(v===s){m=!0,s=c,i=a;break}if(v===i){m=!0,i=c,s=a;break}v=v.sibling}if(!m)throw Error(o(189))}}if(s.alternate!==i)throw Error(o(190))}if(s.tag!==3)throw Error(o(188));return s.stateNode.current===s?e:t}function $u(e){return e=Zh(e),e!==null?Ku(e):null}function Ku(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ku(e);if(t!==null)return t;e=e.sibling}return null}var Gu=r.unstable_scheduleCallback,Zu=r.unstable_cancelCallback,Jh=r.unstable_shouldYield,qh=r.unstable_requestPaint,ze=r.unstable_now,e_=r.unstable_getCurrentPriorityLevel,Ci=r.unstable_ImmediatePriority,Ju=r.unstable_UserBlockingPriority,Bs=r.unstable_NormalPriority,t_=r.unstable_LowPriority,qu=r.unstable_IdlePriority,Fs=null,Ut=null;function n_(e){if(Ut&&typeof Ut.onCommitFiberRoot=="function")try{Ut.onCommitFiberRoot(Fs,e,void 0,(e.current.flags&128)===128)}catch{}}var Lt=Math.clz32?Math.clz32:o_,r_=Math.log,s_=Math.LN2;function o_(e){return e>>>=0,e===0?32:31-(r_(e)/s_|0)|0}var Us=64,Ys=4194304;function Fr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ws(e,t){var s=e.pendingLanes;if(s===0)return 0;var i=0,a=e.suspendedLanes,c=e.pingedLanes,m=s&268435455;if(m!==0){var v=m&~a;v!==0?i=Fr(v):(c&=m,c!==0&&(i=Fr(c)))}else m=s&~a,m!==0?i=Fr(m):c!==0&&(i=Fr(c));if(i===0)return 0;if(t!==0&&t!==i&&(t&a)===0&&(a=i&-i,c=t&-t,a>=c||a===16&&(c&4194240)!==0))return t;if((i&4)!==0&&(i|=s&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=i;0<t;)s=31-Lt(t),a=1<<s,i|=e[s],t&=~a;return i}function i_(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function l_(e,t){for(var s=e.suspendedLanes,i=e.pingedLanes,a=e.expirationTimes,c=e.pendingLanes;0<c;){var m=31-Lt(c),v=1<<m,w=a[m];w===-1?((v&s)===0||(v&i)!==0)&&(a[m]=i_(v,t)):w<=t&&(e.expiredLanes|=v),c&=~v}}function Ti(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ec(){var e=Us;return Us<<=1,(Us&4194240)===0&&(Us=64),e}function Pi(e){for(var t=[],s=0;31>s;s++)t.push(e);return t}function Ur(e,t,s){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Lt(t),e[t]=s}function a_(e,t){var s=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var i=e.eventTimes;for(e=e.expirationTimes;0<s;){var a=31-Lt(s),c=1<<a;t[a]=0,i[a]=-1,e[a]=-1,s&=~c}}function Ei(e,t){var s=e.entangledLanes|=t;for(e=e.entanglements;s;){var i=31-Lt(s),a=1<<i;a&t|e[i]&t&&(e[i]|=t),s&=~a}}var xe=0;function tc(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var nc,Mi,rc,sc,oc,Di=!1,Hs=[],ln=null,an=null,un=null,Yr=new Map,Wr=new Map,cn=[],u_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ic(e,t){switch(e){case"focusin":case"focusout":ln=null;break;case"dragenter":case"dragleave":an=null;break;case"mouseover":case"mouseout":un=null;break;case"pointerover":case"pointerout":Yr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wr.delete(t.pointerId)}}function Hr(e,t,s,i,a,c){return e===null||e.nativeEvent!==c?(e={blockedOn:t,domEventName:s,eventSystemFlags:i,nativeEvent:c,targetContainers:[a]},t!==null&&(t=os(t),t!==null&&Mi(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function c_(e,t,s,i,a){switch(t){case"focusin":return ln=Hr(ln,e,t,s,i,a),!0;case"dragenter":return an=Hr(an,e,t,s,i,a),!0;case"mouseover":return un=Hr(un,e,t,s,i,a),!0;case"pointerover":var c=a.pointerId;return Yr.set(c,Hr(Yr.get(c)||null,e,t,s,i,a)),!0;case"gotpointercapture":return c=a.pointerId,Wr.set(c,Hr(Wr.get(c)||null,e,t,s,i,a)),!0}return!1}function lc(e){var t=An(e.target);if(t!==null){var s=Rn(t);if(s!==null){if(t=s.tag,t===13){if(t=Qu(s),t!==null){e.blockedOn=t,oc(e.priority,function(){rc(s)});return}}else if(t===3&&s.stateNode.current.memoizedState.isDehydrated){e.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Qs(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var s=Ri(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(s===null){s=e.nativeEvent;var i=new s.constructor(s.type,s);vi=i,s.target.dispatchEvent(i),vi=null}else return t=os(s),t!==null&&Mi(t),e.blockedOn=s,!1;t.shift()}return!0}function ac(e,t,s){Qs(e)&&s.delete(t)}function d_(){Di=!1,ln!==null&&Qs(ln)&&(ln=null),an!==null&&Qs(an)&&(an=null),un!==null&&Qs(un)&&(un=null),Yr.forEach(ac),Wr.forEach(ac)}function Qr(e,t){e.blockedOn===t&&(e.blockedOn=null,Di||(Di=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,d_)))}function Xr(e){function t(a){return Qr(a,e)}if(0<Hs.length){Qr(Hs[0],e);for(var s=1;s<Hs.length;s++){var i=Hs[s];i.blockedOn===e&&(i.blockedOn=null)}}for(ln!==null&&Qr(ln,e),an!==null&&Qr(an,e),un!==null&&Qr(un,e),Yr.forEach(t),Wr.forEach(t),s=0;s<cn.length;s++)i=cn[s],i.blockedOn===e&&(i.blockedOn=null);for(;0<cn.length&&(s=cn[0],s.blockedOn===null);)lc(s),s.blockedOn===null&&cn.shift()}var tr=B.ReactCurrentBatchConfig,Xs=!0;function f_(e,t,s,i){var a=xe,c=tr.transition;tr.transition=null;try{xe=1,Li(e,t,s,i)}finally{xe=a,tr.transition=c}}function p_(e,t,s,i){var a=xe,c=tr.transition;tr.transition=null;try{xe=4,Li(e,t,s,i)}finally{xe=a,tr.transition=c}}function Li(e,t,s,i){if(Xs){var a=Ri(e,t,s,i);if(a===null)Ki(e,t,i,$s,s),ic(e,i);else if(c_(a,e,t,s,i))i.stopPropagation();else if(ic(e,i),t&4&&-1<u_.indexOf(e)){for(;a!==null;){var c=os(a);if(c!==null&&nc(c),c=Ri(e,t,s,i),c===null&&Ki(e,t,i,$s,s),c===a)break;a=c}a!==null&&i.stopPropagation()}else Ki(e,t,i,null,s)}}var $s=null;function Ri(e,t,s,i){if($s=null,e=xi(i),e=An(e),e!==null)if(t=Rn(e),t===null)e=null;else if(s=t.tag,s===13){if(e=Qu(t),e!==null)return e;e=null}else if(s===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return $s=e,null}function uc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(e_()){case Ci:return 1;case Ju:return 4;case Bs:case t_:return 16;case qu:return 536870912;default:return 16}default:return 16}}var dn=null,Ai=null,Ks=null;function cc(){if(Ks)return Ks;var e,t=Ai,s=t.length,i,a="value"in dn?dn.value:dn.textContent,c=a.length;for(e=0;e<s&&t[e]===a[e];e++);var m=s-e;for(i=1;i<=m&&t[s-i]===a[c-i];i++);return Ks=a.slice(e,1<i?1-i:void 0)}function Gs(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Zs(){return!0}function dc(){return!1}function yt(e){function t(s,i,a,c,m){this._reactName=s,this._targetInst=a,this.type=i,this.nativeEvent=c,this.target=m,this.currentTarget=null;for(var v in e)e.hasOwnProperty(v)&&(s=e[v],this[v]=s?s(c):c[v]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?Zs:dc,this.isPropagationStopped=dc,this}return Q(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Zs)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Zs)},persist:function(){},isPersistent:Zs}),t}var nr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ii=yt(nr),$r=Q({},nr,{view:0,detail:0}),m_=yt($r),ji,Ni,Kr,Js=Q({},$r,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Kr&&(Kr&&e.type==="mousemove"?(ji=e.screenX-Kr.screenX,Ni=e.screenY-Kr.screenY):Ni=ji=0,Kr=e),ji)},movementY:function(e){return"movementY"in e?e.movementY:Ni}}),fc=yt(Js),h_=Q({},Js,{dataTransfer:0}),__=yt(h_),g_=Q({},$r,{relatedTarget:0}),Vi=yt(g_),y_=Q({},nr,{animationName:0,elapsedTime:0,pseudoElement:0}),v_=yt(y_),x_=Q({},nr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),w_=yt(x_),S_=Q({},nr,{data:0}),pc=yt(S_),k_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},b_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},C_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function T_(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=C_[e])?!!t[e]:!1}function zi(){return T_}var P_=Q({},$r,{key:function(e){if(e.key){var t=k_[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Gs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?b_[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zi,charCode:function(e){return e.type==="keypress"?Gs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Gs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),E_=yt(P_),M_=Q({},Js,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),mc=yt(M_),D_=Q({},$r,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zi}),L_=yt(D_),R_=Q({},nr,{propertyName:0,elapsedTime:0,pseudoElement:0}),A_=yt(R_),I_=Q({},Js,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),j_=yt(I_),N_=[9,13,27,32],Oi=p&&"CompositionEvent"in window,Gr=null;p&&"documentMode"in document&&(Gr=document.documentMode);var V_=p&&"TextEvent"in window&&!Gr,hc=p&&(!Oi||Gr&&8<Gr&&11>=Gr),_c=" ",gc=!1;function yc(e,t){switch(e){case"keyup":return N_.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function vc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var rr=!1;function z_(e,t){switch(e){case"compositionend":return vc(t);case"keypress":return t.which!==32?null:(gc=!0,_c);case"textInput":return e=t.data,e===_c&&gc?null:e;default:return null}}function O_(e,t){if(rr)return e==="compositionend"||!Oi&&yc(e,t)?(e=cc(),Ks=Ai=dn=null,rr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return hc&&t.locale!=="ko"?null:t.data;default:return null}}var B_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!B_[e.type]:t==="textarea"}function wc(e,t,s,i){Fu(i),t=ro(t,"onChange"),0<t.length&&(s=new Ii("onChange","change",null,s,i),e.push({event:s,listeners:t}))}var Zr=null,Jr=null;function F_(e){Oc(e,0)}function qs(e){var t=ar(e);if(Ee(t))return e}function U_(e,t){if(e==="change")return t}var Sc=!1;if(p){var Bi;if(p){var Fi="oninput"in document;if(!Fi){var kc=document.createElement("div");kc.setAttribute("oninput","return;"),Fi=typeof kc.oninput=="function"}Bi=Fi}else Bi=!1;Sc=Bi&&(!document.documentMode||9<document.documentMode)}function bc(){Zr&&(Zr.detachEvent("onpropertychange",Cc),Jr=Zr=null)}function Cc(e){if(e.propertyName==="value"&&qs(Jr)){var t=[];wc(t,Jr,e,xi(e)),Hu(F_,t)}}function Y_(e,t,s){e==="focusin"?(bc(),Zr=t,Jr=s,Zr.attachEvent("onpropertychange",Cc)):e==="focusout"&&bc()}function W_(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return qs(Jr)}function H_(e,t){if(e==="click")return qs(t)}function Q_(e,t){if(e==="input"||e==="change")return qs(t)}function X_(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Rt=typeof Object.is=="function"?Object.is:X_;function qr(e,t){if(Rt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var s=Object.keys(e),i=Object.keys(t);if(s.length!==i.length)return!1;for(i=0;i<s.length;i++){var a=s[i];if(!h.call(t,a)||!Rt(e[a],t[a]))return!1}return!0}function Tc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Pc(e,t){var s=Tc(e);e=0;for(var i;s;){if(s.nodeType===3){if(i=e+s.textContent.length,e<=t&&i>=t)return{node:s,offset:t-e};e=i}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=Tc(s)}}function Ec(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ec(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Mc(){for(var e=window,t=Le();t instanceof e.HTMLIFrameElement;){try{var s=typeof t.contentWindow.location.href=="string"}catch{s=!1}if(s)e=t.contentWindow;else break;t=Le(e.document)}return t}function Ui(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function $_(e){var t=Mc(),s=e.focusedElem,i=e.selectionRange;if(t!==s&&s&&s.ownerDocument&&Ec(s.ownerDocument.documentElement,s)){if(i!==null&&Ui(s)){if(t=i.start,e=i.end,e===void 0&&(e=t),"selectionStart"in s)s.selectionStart=t,s.selectionEnd=Math.min(e,s.value.length);else if(e=(t=s.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=s.textContent.length,c=Math.min(i.start,a);i=i.end===void 0?c:Math.min(i.end,a),!e.extend&&c>i&&(a=i,i=c,c=a),a=Pc(s,c);var m=Pc(s,i);a&&m&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==m.node||e.focusOffset!==m.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),c>i?(e.addRange(t),e.extend(m.node,m.offset)):(t.setEnd(m.node,m.offset),e.addRange(t)))}}for(t=[],e=s;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<t.length;s++)e=t[s],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var K_=p&&"documentMode"in document&&11>=document.documentMode,sr=null,Yi=null,es=null,Wi=!1;function Dc(e,t,s){var i=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Wi||sr==null||sr!==Le(i)||(i=sr,"selectionStart"in i&&Ui(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),es&&qr(es,i)||(es=i,i=ro(Yi,"onSelect"),0<i.length&&(t=new Ii("onSelect","select",null,t,s),e.push({event:t,listeners:i}),t.target=sr)))}function eo(e,t){var s={};return s[e.toLowerCase()]=t.toLowerCase(),s["Webkit"+e]="webkit"+t,s["Moz"+e]="moz"+t,s}var or={animationend:eo("Animation","AnimationEnd"),animationiteration:eo("Animation","AnimationIteration"),animationstart:eo("Animation","AnimationStart"),transitionend:eo("Transition","TransitionEnd")},Hi={},Lc={};p&&(Lc=document.createElement("div").style,"AnimationEvent"in window||(delete or.animationend.animation,delete or.animationiteration.animation,delete or.animationstart.animation),"TransitionEvent"in window||delete or.transitionend.transition);function to(e){if(Hi[e])return Hi[e];if(!or[e])return e;var t=or[e],s;for(s in t)if(t.hasOwnProperty(s)&&s in Lc)return Hi[e]=t[s];return e}var Rc=to("animationend"),Ac=to("animationiteration"),Ic=to("animationstart"),jc=to("transitionend"),Nc=new Map,Vc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function fn(e,t){Nc.set(e,t),f(t,[e])}for(var Qi=0;Qi<Vc.length;Qi++){var Xi=Vc[Qi],G_=Xi.toLowerCase(),Z_=Xi[0].toUpperCase()+Xi.slice(1);fn(G_,"on"+Z_)}fn(Rc,"onAnimationEnd"),fn(Ac,"onAnimationIteration"),fn(Ic,"onAnimationStart"),fn("dblclick","onDoubleClick"),fn("focusin","onFocus"),fn("focusout","onBlur"),fn(jc,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),f("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),f("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),f("onBeforeInput",["compositionend","keypress","textInput","paste"]),f("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),f("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),f("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ts="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),J_=new Set("cancel close invalid load scroll toggle".split(" ").concat(ts));function zc(e,t,s){var i=e.type||"unknown-event";e.currentTarget=s,Gh(i,t,void 0,e),e.currentTarget=null}function Oc(e,t){t=(t&4)!==0;for(var s=0;s<e.length;s++){var i=e[s],a=i.event;i=i.listeners;e:{var c=void 0;if(t)for(var m=i.length-1;0<=m;m--){var v=i[m],w=v.instance,E=v.currentTarget;if(v=v.listener,w!==c&&a.isPropagationStopped())break e;zc(a,v,E),c=w}else for(m=0;m<i.length;m++){if(v=i[m],w=v.instance,E=v.currentTarget,v=v.listener,w!==c&&a.isPropagationStopped())break e;zc(a,v,E),c=w}}}if(Os)throw e=bi,Os=!1,bi=null,e}function Me(e,t){var s=t[tl];s===void 0&&(s=t[tl]=new Set);var i=e+"__bubble";s.has(i)||(Bc(t,e,2,!1),s.add(i))}function $i(e,t,s){var i=0;t&&(i|=4),Bc(s,e,i,t)}var no="_reactListening"+Math.random().toString(36).slice(2);function ns(e){if(!e[no]){e[no]=!0,l.forEach(function(s){s!=="selectionchange"&&(J_.has(s)||$i(s,!1,e),$i(s,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[no]||(t[no]=!0,$i("selectionchange",!1,t))}}function Bc(e,t,s,i){switch(uc(t)){case 1:var a=f_;break;case 4:a=p_;break;default:a=Li}s=a.bind(null,t,s,e),a=void 0,!ki||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),i?a!==void 0?e.addEventListener(t,s,{capture:!0,passive:a}):e.addEventListener(t,s,!0):a!==void 0?e.addEventListener(t,s,{passive:a}):e.addEventListener(t,s,!1)}function Ki(e,t,s,i,a){var c=i;if((t&1)===0&&(t&2)===0&&i!==null)e:for(;;){if(i===null)return;var m=i.tag;if(m===3||m===4){var v=i.stateNode.containerInfo;if(v===a||v.nodeType===8&&v.parentNode===a)break;if(m===4)for(m=i.return;m!==null;){var w=m.tag;if((w===3||w===4)&&(w=m.stateNode.containerInfo,w===a||w.nodeType===8&&w.parentNode===a))return;m=m.return}for(;v!==null;){if(m=An(v),m===null)return;if(w=m.tag,w===5||w===6){i=c=m;continue e}v=v.parentNode}}i=i.return}Hu(function(){var E=c,O=xi(s),F=[];e:{var V=Nc.get(e);if(V!==void 0){var X=Ii,Z=e;switch(e){case"keypress":if(Gs(s)===0)break e;case"keydown":case"keyup":X=E_;break;case"focusin":Z="focus",X=Vi;break;case"focusout":Z="blur",X=Vi;break;case"beforeblur":case"afterblur":X=Vi;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":X=fc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":X=__;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":X=L_;break;case Rc:case Ac:case Ic:X=v_;break;case jc:X=A_;break;case"scroll":X=m_;break;case"wheel":X=j_;break;case"copy":case"cut":case"paste":X=w_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":X=mc}var q=(t&4)!==0,Oe=!q&&e==="scroll",C=q?V!==null?V+"Capture":null:V;q=[];for(var S=E,P;S!==null;){P=S;var Y=P.stateNode;if(P.tag===5&&Y!==null&&(P=Y,C!==null&&(Y=zr(S,C),Y!=null&&q.push(rs(S,Y,P)))),Oe)break;S=S.return}0<q.length&&(V=new X(V,Z,null,s,O),F.push({event:V,listeners:q}))}}if((t&7)===0){e:{if(V=e==="mouseover"||e==="pointerover",X=e==="mouseout"||e==="pointerout",V&&s!==vi&&(Z=s.relatedTarget||s.fromElement)&&(An(Z)||Z[Zt]))break e;if((X||V)&&(V=O.window===O?O:(V=O.ownerDocument)?V.defaultView||V.parentWindow:window,X?(Z=s.relatedTarget||s.toElement,X=E,Z=Z?An(Z):null,Z!==null&&(Oe=Rn(Z),Z!==Oe||Z.tag!==5&&Z.tag!==6)&&(Z=null)):(X=null,Z=E),X!==Z)){if(q=fc,Y="onMouseLeave",C="onMouseEnter",S="mouse",(e==="pointerout"||e==="pointerover")&&(q=mc,Y="onPointerLeave",C="onPointerEnter",S="pointer"),Oe=X==null?V:ar(X),P=Z==null?V:ar(Z),V=new q(Y,S+"leave",X,s,O),V.target=Oe,V.relatedTarget=P,Y=null,An(O)===E&&(q=new q(C,S+"enter",Z,s,O),q.target=P,q.relatedTarget=Oe,Y=q),Oe=Y,X&&Z)t:{for(q=X,C=Z,S=0,P=q;P;P=ir(P))S++;for(P=0,Y=C;Y;Y=ir(Y))P++;for(;0<S-P;)q=ir(q),S--;for(;0<P-S;)C=ir(C),P--;for(;S--;){if(q===C||C!==null&&q===C.alternate)break t;q=ir(q),C=ir(C)}q=null}else q=null;X!==null&&Fc(F,V,X,q,!1),Z!==null&&Oe!==null&&Fc(F,Oe,Z,q,!0)}}e:{if(V=E?ar(E):window,X=V.nodeName&&V.nodeName.toLowerCase(),X==="select"||X==="input"&&V.type==="file")var te=U_;else if(xc(V))if(Sc)te=Q_;else{te=W_;var ne=Y_}else(X=V.nodeName)&&X.toLowerCase()==="input"&&(V.type==="checkbox"||V.type==="radio")&&(te=H_);if(te&&(te=te(e,E))){wc(F,te,s,O);break e}ne&&ne(e,V,E),e==="focusout"&&(ne=V._wrapperState)&&ne.controlled&&V.type==="number"&&Gt(V,"number",V.value)}switch(ne=E?ar(E):window,e){case"focusin":(xc(ne)||ne.contentEditable==="true")&&(sr=ne,Yi=E,es=null);break;case"focusout":es=Yi=sr=null;break;case"mousedown":Wi=!0;break;case"contextmenu":case"mouseup":case"dragend":Wi=!1,Dc(F,s,O);break;case"selectionchange":if(K_)break;case"keydown":case"keyup":Dc(F,s,O)}var re;if(Oi)e:{switch(e){case"compositionstart":var se="onCompositionStart";break e;case"compositionend":se="onCompositionEnd";break e;case"compositionupdate":se="onCompositionUpdate";break e}se=void 0}else rr?yc(e,s)&&(se="onCompositionEnd"):e==="keydown"&&s.keyCode===229&&(se="onCompositionStart");se&&(hc&&s.locale!=="ko"&&(rr||se!=="onCompositionStart"?se==="onCompositionEnd"&&rr&&(re=cc()):(dn=O,Ai="value"in dn?dn.value:dn.textContent,rr=!0)),ne=ro(E,se),0<ne.length&&(se=new pc(se,e,null,s,O),F.push({event:se,listeners:ne}),re?se.data=re:(re=vc(s),re!==null&&(se.data=re)))),(re=V_?z_(e,s):O_(e,s))&&(E=ro(E,"onBeforeInput"),0<E.length&&(O=new pc("onBeforeInput","beforeinput",null,s,O),F.push({event:O,listeners:E}),O.data=re))}Oc(F,t)})}function rs(e,t,s){return{instance:e,listener:t,currentTarget:s}}function ro(e,t){for(var s=t+"Capture",i=[];e!==null;){var a=e,c=a.stateNode;a.tag===5&&c!==null&&(a=c,c=zr(e,s),c!=null&&i.unshift(rs(e,c,a)),c=zr(e,t),c!=null&&i.push(rs(e,c,a))),e=e.return}return i}function ir(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Fc(e,t,s,i,a){for(var c=t._reactName,m=[];s!==null&&s!==i;){var v=s,w=v.alternate,E=v.stateNode;if(w!==null&&w===i)break;v.tag===5&&E!==null&&(v=E,a?(w=zr(s,c),w!=null&&m.unshift(rs(s,w,v))):a||(w=zr(s,c),w!=null&&m.push(rs(s,w,v)))),s=s.return}m.length!==0&&e.push({event:t,listeners:m})}var q_=/\r\n?/g,e0=/\u0000|\uFFFD/g;function Uc(e){return(typeof e=="string"?e:""+e).replace(q_,`
`).replace(e0,"")}function so(e,t,s){if(t=Uc(t),Uc(e)!==t&&s)throw Error(o(425))}function oo(){}var Gi=null,Zi=null;function Ji(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var qi=typeof setTimeout=="function"?setTimeout:void 0,t0=typeof clearTimeout=="function"?clearTimeout:void 0,Yc=typeof Promise=="function"?Promise:void 0,n0=typeof queueMicrotask=="function"?queueMicrotask:typeof Yc<"u"?function(e){return Yc.resolve(null).then(e).catch(r0)}:qi;function r0(e){setTimeout(function(){throw e})}function el(e,t){var s=t,i=0;do{var a=s.nextSibling;if(e.removeChild(s),a&&a.nodeType===8)if(s=a.data,s==="/$"){if(i===0){e.removeChild(a),Xr(t);return}i--}else s!=="$"&&s!=="$?"&&s!=="$!"||i++;s=a}while(s);Xr(t)}function pn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Wc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var s=e.data;if(s==="$"||s==="$!"||s==="$?"){if(t===0)return e;t--}else s==="/$"&&t++}e=e.previousSibling}return null}var lr=Math.random().toString(36).slice(2),Yt="__reactFiber$"+lr,ss="__reactProps$"+lr,Zt="__reactContainer$"+lr,tl="__reactEvents$"+lr,s0="__reactListeners$"+lr,o0="__reactHandles$"+lr;function An(e){var t=e[Yt];if(t)return t;for(var s=e.parentNode;s;){if(t=s[Zt]||s[Yt]){if(s=t.alternate,t.child!==null||s!==null&&s.child!==null)for(e=Wc(e);e!==null;){if(s=e[Yt])return s;e=Wc(e)}return t}e=s,s=e.parentNode}return null}function os(e){return e=e[Yt]||e[Zt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ar(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(o(33))}function io(e){return e[ss]||null}var nl=[],ur=-1;function mn(e){return{current:e}}function De(e){0>ur||(e.current=nl[ur],nl[ur]=null,ur--)}function Te(e,t){ur++,nl[ur]=e.current,e.current=t}var hn={},et=mn(hn),ct=mn(!1),In=hn;function cr(e,t){var s=e.type.contextTypes;if(!s)return hn;var i=e.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===t)return i.__reactInternalMemoizedMaskedChildContext;var a={},c;for(c in s)a[c]=t[c];return i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function dt(e){return e=e.childContextTypes,e!=null}function lo(){De(ct),De(et)}function Hc(e,t,s){if(et.current!==hn)throw Error(o(168));Te(et,t),Te(ct,s)}function Qc(e,t,s){var i=e.stateNode;if(t=t.childContextTypes,typeof i.getChildContext!="function")return s;i=i.getChildContext();for(var a in i)if(!(a in t))throw Error(o(108,we(e)||"Unknown",a));return Q({},s,i)}function ao(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||hn,In=et.current,Te(et,e),Te(ct,ct.current),!0}function Xc(e,t,s){var i=e.stateNode;if(!i)throw Error(o(169));s?(e=Qc(e,t,In),i.__reactInternalMemoizedMergedChildContext=e,De(ct),De(et),Te(et,e)):De(ct),Te(ct,s)}var Jt=null,uo=!1,rl=!1;function $c(e){Jt===null?Jt=[e]:Jt.push(e)}function i0(e){uo=!0,$c(e)}function _n(){if(!rl&&Jt!==null){rl=!0;var e=0,t=xe;try{var s=Jt;for(xe=1;e<s.length;e++){var i=s[e];do i=i(!0);while(i!==null)}Jt=null,uo=!1}catch(a){throw Jt!==null&&(Jt=Jt.slice(e+1)),Gu(Ci,_n),a}finally{xe=t,rl=!1}}return null}var dr=[],fr=0,co=null,fo=0,St=[],kt=0,jn=null,qt=1,en="";function Nn(e,t){dr[fr++]=fo,dr[fr++]=co,co=e,fo=t}function Kc(e,t,s){St[kt++]=qt,St[kt++]=en,St[kt++]=jn,jn=e;var i=qt;e=en;var a=32-Lt(i)-1;i&=~(1<<a),s+=1;var c=32-Lt(t)+a;if(30<c){var m=a-a%5;c=(i&(1<<m)-1).toString(32),i>>=m,a-=m,qt=1<<32-Lt(t)+a|s<<a|i,en=c+e}else qt=1<<c|s<<a|i,en=e}function sl(e){e.return!==null&&(Nn(e,1),Kc(e,1,0))}function ol(e){for(;e===co;)co=dr[--fr],dr[fr]=null,fo=dr[--fr],dr[fr]=null;for(;e===jn;)jn=St[--kt],St[kt]=null,en=St[--kt],St[kt]=null,qt=St[--kt],St[kt]=null}var vt=null,xt=null,Re=!1,At=null;function Gc(e,t){var s=Pt(5,null,null,0);s.elementType="DELETED",s.stateNode=t,s.return=e,t=e.deletions,t===null?(e.deletions=[s],e.flags|=16):t.push(s)}function Zc(e,t){switch(e.tag){case 5:var s=e.type;return t=t.nodeType!==1||s.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,vt=e,xt=pn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,vt=e,xt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(s=jn!==null?{id:qt,overflow:en}:null,e.memoizedState={dehydrated:t,treeContext:s,retryLane:1073741824},s=Pt(18,null,null,0),s.stateNode=t,s.return=e,e.child=s,vt=e,xt=null,!0):!1;default:return!1}}function il(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ll(e){if(Re){var t=xt;if(t){var s=t;if(!Zc(e,t)){if(il(e))throw Error(o(418));t=pn(s.nextSibling);var i=vt;t&&Zc(e,t)?Gc(i,s):(e.flags=e.flags&-4097|2,Re=!1,vt=e)}}else{if(il(e))throw Error(o(418));e.flags=e.flags&-4097|2,Re=!1,vt=e}}}function Jc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;vt=e}function po(e){if(e!==vt)return!1;if(!Re)return Jc(e),Re=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ji(e.type,e.memoizedProps)),t&&(t=xt)){if(il(e))throw qc(),Error(o(418));for(;t;)Gc(e,t),t=pn(t.nextSibling)}if(Jc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var s=e.data;if(s==="/$"){if(t===0){xt=pn(e.nextSibling);break e}t--}else s!=="$"&&s!=="$!"&&s!=="$?"||t++}e=e.nextSibling}xt=null}}else xt=vt?pn(e.stateNode.nextSibling):null;return!0}function qc(){for(var e=xt;e;)e=pn(e.nextSibling)}function pr(){xt=vt=null,Re=!1}function al(e){At===null?At=[e]:At.push(e)}var l0=B.ReactCurrentBatchConfig;function is(e,t,s){if(e=s.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(s._owner){if(s=s._owner,s){if(s.tag!==1)throw Error(o(309));var i=s.stateNode}if(!i)throw Error(o(147,e));var a=i,c=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===c?t.ref:(t=function(m){var v=a.refs;m===null?delete v[c]:v[c]=m},t._stringRef=c,t)}if(typeof e!="string")throw Error(o(284));if(!s._owner)throw Error(o(290,e))}return e}function mo(e,t){throw e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ed(e){var t=e._init;return t(e._payload)}function td(e){function t(C,S){if(e){var P=C.deletions;P===null?(C.deletions=[S],C.flags|=16):P.push(S)}}function s(C,S){if(!e)return null;for(;S!==null;)t(C,S),S=S.sibling;return null}function i(C,S){for(C=new Map;S!==null;)S.key!==null?C.set(S.key,S):C.set(S.index,S),S=S.sibling;return C}function a(C,S){return C=bn(C,S),C.index=0,C.sibling=null,C}function c(C,S,P){return C.index=P,e?(P=C.alternate,P!==null?(P=P.index,P<S?(C.flags|=2,S):P):(C.flags|=2,S)):(C.flags|=1048576,S)}function m(C){return e&&C.alternate===null&&(C.flags|=2),C}function v(C,S,P,Y){return S===null||S.tag!==6?(S=ql(P,C.mode,Y),S.return=C,S):(S=a(S,P),S.return=C,S)}function w(C,S,P,Y){var te=P.type;return te===ee?O(C,S,P.props.children,Y,P.key):S!==null&&(S.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===Pe&&ed(te)===S.type)?(Y=a(S,P.props),Y.ref=is(C,S,P),Y.return=C,Y):(Y=zo(P.type,P.key,P.props,null,C.mode,Y),Y.ref=is(C,S,P),Y.return=C,Y)}function E(C,S,P,Y){return S===null||S.tag!==4||S.stateNode.containerInfo!==P.containerInfo||S.stateNode.implementation!==P.implementation?(S=ea(P,C.mode,Y),S.return=C,S):(S=a(S,P.children||[]),S.return=C,S)}function O(C,S,P,Y,te){return S===null||S.tag!==7?(S=Wn(P,C.mode,Y,te),S.return=C,S):(S=a(S,P),S.return=C,S)}function F(C,S,P){if(typeof S=="string"&&S!==""||typeof S=="number")return S=ql(""+S,C.mode,P),S.return=C,S;if(typeof S=="object"&&S!==null){switch(S.$$typeof){case U:return P=zo(S.type,S.key,S.props,null,C.mode,P),P.ref=is(C,null,S),P.return=C,P;case K:return S=ea(S,C.mode,P),S.return=C,S;case Pe:var Y=S._init;return F(C,Y(S._payload),P)}if(jr(S)||H(S))return S=Wn(S,C.mode,P,null),S.return=C,S;mo(C,S)}return null}function V(C,S,P,Y){var te=S!==null?S.key:null;if(typeof P=="string"&&P!==""||typeof P=="number")return te!==null?null:v(C,S,""+P,Y);if(typeof P=="object"&&P!==null){switch(P.$$typeof){case U:return P.key===te?w(C,S,P,Y):null;case K:return P.key===te?E(C,S,P,Y):null;case Pe:return te=P._init,V(C,S,te(P._payload),Y)}if(jr(P)||H(P))return te!==null?null:O(C,S,P,Y,null);mo(C,P)}return null}function X(C,S,P,Y,te){if(typeof Y=="string"&&Y!==""||typeof Y=="number")return C=C.get(P)||null,v(S,C,""+Y,te);if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case U:return C=C.get(Y.key===null?P:Y.key)||null,w(S,C,Y,te);case K:return C=C.get(Y.key===null?P:Y.key)||null,E(S,C,Y,te);case Pe:var ne=Y._init;return X(C,S,P,ne(Y._payload),te)}if(jr(Y)||H(Y))return C=C.get(P)||null,O(S,C,Y,te,null);mo(S,Y)}return null}function Z(C,S,P,Y){for(var te=null,ne=null,re=S,se=S=0,Xe=null;re!==null&&se<P.length;se++){re.index>se?(Xe=re,re=null):Xe=re.sibling;var ge=V(C,re,P[se],Y);if(ge===null){re===null&&(re=Xe);break}e&&re&&ge.alternate===null&&t(C,re),S=c(ge,S,se),ne===null?te=ge:ne.sibling=ge,ne=ge,re=Xe}if(se===P.length)return s(C,re),Re&&Nn(C,se),te;if(re===null){for(;se<P.length;se++)re=F(C,P[se],Y),re!==null&&(S=c(re,S,se),ne===null?te=re:ne.sibling=re,ne=re);return Re&&Nn(C,se),te}for(re=i(C,re);se<P.length;se++)Xe=X(re,C,se,P[se],Y),Xe!==null&&(e&&Xe.alternate!==null&&re.delete(Xe.key===null?se:Xe.key),S=c(Xe,S,se),ne===null?te=Xe:ne.sibling=Xe,ne=Xe);return e&&re.forEach(function(Cn){return t(C,Cn)}),Re&&Nn(C,se),te}function q(C,S,P,Y){var te=H(P);if(typeof te!="function")throw Error(o(150));if(P=te.call(P),P==null)throw Error(o(151));for(var ne=te=null,re=S,se=S=0,Xe=null,ge=P.next();re!==null&&!ge.done;se++,ge=P.next()){re.index>se?(Xe=re,re=null):Xe=re.sibling;var Cn=V(C,re,ge.value,Y);if(Cn===null){re===null&&(re=Xe);break}e&&re&&Cn.alternate===null&&t(C,re),S=c(Cn,S,se),ne===null?te=Cn:ne.sibling=Cn,ne=Cn,re=Xe}if(ge.done)return s(C,re),Re&&Nn(C,se),te;if(re===null){for(;!ge.done;se++,ge=P.next())ge=F(C,ge.value,Y),ge!==null&&(S=c(ge,S,se),ne===null?te=ge:ne.sibling=ge,ne=ge);return Re&&Nn(C,se),te}for(re=i(C,re);!ge.done;se++,ge=P.next())ge=X(re,C,se,ge.value,Y),ge!==null&&(e&&ge.alternate!==null&&re.delete(ge.key===null?se:ge.key),S=c(ge,S,se),ne===null?te=ge:ne.sibling=ge,ne=ge);return e&&re.forEach(function(B0){return t(C,B0)}),Re&&Nn(C,se),te}function Oe(C,S,P,Y){if(typeof P=="object"&&P!==null&&P.type===ee&&P.key===null&&(P=P.props.children),typeof P=="object"&&P!==null){switch(P.$$typeof){case U:e:{for(var te=P.key,ne=S;ne!==null;){if(ne.key===te){if(te=P.type,te===ee){if(ne.tag===7){s(C,ne.sibling),S=a(ne,P.props.children),S.return=C,C=S;break e}}else if(ne.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===Pe&&ed(te)===ne.type){s(C,ne.sibling),S=a(ne,P.props),S.ref=is(C,ne,P),S.return=C,C=S;break e}s(C,ne);break}else t(C,ne);ne=ne.sibling}P.type===ee?(S=Wn(P.props.children,C.mode,Y,P.key),S.return=C,C=S):(Y=zo(P.type,P.key,P.props,null,C.mode,Y),Y.ref=is(C,S,P),Y.return=C,C=Y)}return m(C);case K:e:{for(ne=P.key;S!==null;){if(S.key===ne)if(S.tag===4&&S.stateNode.containerInfo===P.containerInfo&&S.stateNode.implementation===P.implementation){s(C,S.sibling),S=a(S,P.children||[]),S.return=C,C=S;break e}else{s(C,S);break}else t(C,S);S=S.sibling}S=ea(P,C.mode,Y),S.return=C,C=S}return m(C);case Pe:return ne=P._init,Oe(C,S,ne(P._payload),Y)}if(jr(P))return Z(C,S,P,Y);if(H(P))return q(C,S,P,Y);mo(C,P)}return typeof P=="string"&&P!==""||typeof P=="number"?(P=""+P,S!==null&&S.tag===6?(s(C,S.sibling),S=a(S,P),S.return=C,C=S):(s(C,S),S=ql(P,C.mode,Y),S.return=C,C=S),m(C)):s(C,S)}return Oe}var mr=td(!0),nd=td(!1),ho=mn(null),_o=null,hr=null,ul=null;function cl(){ul=hr=_o=null}function dl(e){var t=ho.current;De(ho),e._currentValue=t}function fl(e,t,s){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===s)break;e=e.return}}function _r(e,t){_o=e,ul=hr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(ft=!0),e.firstContext=null)}function bt(e){var t=e._currentValue;if(ul!==e)if(e={context:e,memoizedValue:t,next:null},hr===null){if(_o===null)throw Error(o(308));hr=e,_o.dependencies={lanes:0,firstContext:e}}else hr=hr.next=e;return t}var Vn=null;function pl(e){Vn===null?Vn=[e]:Vn.push(e)}function rd(e,t,s,i){var a=t.interleaved;return a===null?(s.next=s,pl(t)):(s.next=a.next,a.next=s),t.interleaved=s,tn(e,i)}function tn(e,t){e.lanes|=t;var s=e.alternate;for(s!==null&&(s.lanes|=t),s=e,e=e.return;e!==null;)e.childLanes|=t,s=e.alternate,s!==null&&(s.childLanes|=t),s=e,e=e.return;return s.tag===3?s.stateNode:null}var gn=!1;function ml(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function sd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function nn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function yn(e,t,s){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(he&2)!==0){var a=i.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),i.pending=t,tn(e,s)}return a=i.interleaved,a===null?(t.next=t,pl(i)):(t.next=a.next,a.next=t),i.interleaved=t,tn(e,s)}function go(e,t,s){if(t=t.updateQueue,t!==null&&(t=t.shared,(s&4194240)!==0)){var i=t.lanes;i&=e.pendingLanes,s|=i,t.lanes=s,Ei(e,s)}}function od(e,t){var s=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,s===i)){var a=null,c=null;if(s=s.firstBaseUpdate,s!==null){do{var m={eventTime:s.eventTime,lane:s.lane,tag:s.tag,payload:s.payload,callback:s.callback,next:null};c===null?a=c=m:c=c.next=m,s=s.next}while(s!==null);c===null?a=c=t:c=c.next=t}else a=c=t;s={baseState:i.baseState,firstBaseUpdate:a,lastBaseUpdate:c,shared:i.shared,effects:i.effects},e.updateQueue=s;return}e=s.lastBaseUpdate,e===null?s.firstBaseUpdate=t:e.next=t,s.lastBaseUpdate=t}function yo(e,t,s,i){var a=e.updateQueue;gn=!1;var c=a.firstBaseUpdate,m=a.lastBaseUpdate,v=a.shared.pending;if(v!==null){a.shared.pending=null;var w=v,E=w.next;w.next=null,m===null?c=E:m.next=E,m=w;var O=e.alternate;O!==null&&(O=O.updateQueue,v=O.lastBaseUpdate,v!==m&&(v===null?O.firstBaseUpdate=E:v.next=E,O.lastBaseUpdate=w))}if(c!==null){var F=a.baseState;m=0,O=E=w=null,v=c;do{var V=v.lane,X=v.eventTime;if((i&V)===V){O!==null&&(O=O.next={eventTime:X,lane:0,tag:v.tag,payload:v.payload,callback:v.callback,next:null});e:{var Z=e,q=v;switch(V=t,X=s,q.tag){case 1:if(Z=q.payload,typeof Z=="function"){F=Z.call(X,F,V);break e}F=Z;break e;case 3:Z.flags=Z.flags&-65537|128;case 0:if(Z=q.payload,V=typeof Z=="function"?Z.call(X,F,V):Z,V==null)break e;F=Q({},F,V);break e;case 2:gn=!0}}v.callback!==null&&v.lane!==0&&(e.flags|=64,V=a.effects,V===null?a.effects=[v]:V.push(v))}else X={eventTime:X,lane:V,tag:v.tag,payload:v.payload,callback:v.callback,next:null},O===null?(E=O=X,w=F):O=O.next=X,m|=V;if(v=v.next,v===null){if(v=a.shared.pending,v===null)break;V=v,v=V.next,V.next=null,a.lastBaseUpdate=V,a.shared.pending=null}}while(!0);if(O===null&&(w=F),a.baseState=w,a.firstBaseUpdate=E,a.lastBaseUpdate=O,t=a.shared.interleaved,t!==null){a=t;do m|=a.lane,a=a.next;while(a!==t)}else c===null&&(a.shared.lanes=0);Bn|=m,e.lanes=m,e.memoizedState=F}}function id(e,t,s){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var i=e[t],a=i.callback;if(a!==null){if(i.callback=null,i=s,typeof a!="function")throw Error(o(191,a));a.call(i)}}}var ls={},Wt=mn(ls),as=mn(ls),us=mn(ls);function zn(e){if(e===ls)throw Error(o(174));return e}function hl(e,t){switch(Te(us,t),Te(as,e),Te(Wt,ls),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:_i(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=_i(t,e)}De(Wt),Te(Wt,t)}function gr(){De(Wt),De(as),De(us)}function ld(e){zn(us.current);var t=zn(Wt.current),s=_i(t,e.type);t!==s&&(Te(as,e),Te(Wt,s))}function _l(e){as.current===e&&(De(Wt),De(as))}var Ae=mn(0);function vo(e){for(var t=e;t!==null;){if(t.tag===13){var s=t.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||s.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var gl=[];function yl(){for(var e=0;e<gl.length;e++)gl[e]._workInProgressVersionPrimary=null;gl.length=0}var xo=B.ReactCurrentDispatcher,vl=B.ReactCurrentBatchConfig,On=0,Ie=null,Ue=null,He=null,wo=!1,cs=!1,ds=0,a0=0;function tt(){throw Error(o(321))}function xl(e,t){if(t===null)return!1;for(var s=0;s<t.length&&s<e.length;s++)if(!Rt(e[s],t[s]))return!1;return!0}function wl(e,t,s,i,a,c){if(On=c,Ie=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,xo.current=e===null||e.memoizedState===null?f0:p0,e=s(i,a),cs){c=0;do{if(cs=!1,ds=0,25<=c)throw Error(o(301));c+=1,He=Ue=null,t.updateQueue=null,xo.current=m0,e=s(i,a)}while(cs)}if(xo.current=bo,t=Ue!==null&&Ue.next!==null,On=0,He=Ue=Ie=null,wo=!1,t)throw Error(o(300));return e}function Sl(){var e=ds!==0;return ds=0,e}function Ht(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return He===null?Ie.memoizedState=He=e:He=He.next=e,He}function Ct(){if(Ue===null){var e=Ie.alternate;e=e!==null?e.memoizedState:null}else e=Ue.next;var t=He===null?Ie.memoizedState:He.next;if(t!==null)He=t,Ue=e;else{if(e===null)throw Error(o(310));Ue=e,e={memoizedState:Ue.memoizedState,baseState:Ue.baseState,baseQueue:Ue.baseQueue,queue:Ue.queue,next:null},He===null?Ie.memoizedState=He=e:He=He.next=e}return He}function fs(e,t){return typeof t=="function"?t(e):t}function kl(e){var t=Ct(),s=t.queue;if(s===null)throw Error(o(311));s.lastRenderedReducer=e;var i=Ue,a=i.baseQueue,c=s.pending;if(c!==null){if(a!==null){var m=a.next;a.next=c.next,c.next=m}i.baseQueue=a=c,s.pending=null}if(a!==null){c=a.next,i=i.baseState;var v=m=null,w=null,E=c;do{var O=E.lane;if((On&O)===O)w!==null&&(w=w.next={lane:0,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null}),i=E.hasEagerState?E.eagerState:e(i,E.action);else{var F={lane:O,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null};w===null?(v=w=F,m=i):w=w.next=F,Ie.lanes|=O,Bn|=O}E=E.next}while(E!==null&&E!==c);w===null?m=i:w.next=v,Rt(i,t.memoizedState)||(ft=!0),t.memoizedState=i,t.baseState=m,t.baseQueue=w,s.lastRenderedState=i}if(e=s.interleaved,e!==null){a=e;do c=a.lane,Ie.lanes|=c,Bn|=c,a=a.next;while(a!==e)}else a===null&&(s.lanes=0);return[t.memoizedState,s.dispatch]}function bl(e){var t=Ct(),s=t.queue;if(s===null)throw Error(o(311));s.lastRenderedReducer=e;var i=s.dispatch,a=s.pending,c=t.memoizedState;if(a!==null){s.pending=null;var m=a=a.next;do c=e(c,m.action),m=m.next;while(m!==a);Rt(c,t.memoizedState)||(ft=!0),t.memoizedState=c,t.baseQueue===null&&(t.baseState=c),s.lastRenderedState=c}return[c,i]}function ad(){}function ud(e,t){var s=Ie,i=Ct(),a=t(),c=!Rt(i.memoizedState,a);if(c&&(i.memoizedState=a,ft=!0),i=i.queue,Cl(fd.bind(null,s,i,e),[e]),i.getSnapshot!==t||c||He!==null&&He.memoizedState.tag&1){if(s.flags|=2048,ps(9,dd.bind(null,s,i,a,t),void 0,null),Qe===null)throw Error(o(349));(On&30)!==0||cd(s,t,a)}return a}function cd(e,t,s){e.flags|=16384,e={getSnapshot:t,value:s},t=Ie.updateQueue,t===null?(t={lastEffect:null,stores:null},Ie.updateQueue=t,t.stores=[e]):(s=t.stores,s===null?t.stores=[e]:s.push(e))}function dd(e,t,s,i){t.value=s,t.getSnapshot=i,pd(t)&&md(e)}function fd(e,t,s){return s(function(){pd(t)&&md(e)})}function pd(e){var t=e.getSnapshot;e=e.value;try{var s=t();return!Rt(e,s)}catch{return!0}}function md(e){var t=tn(e,1);t!==null&&Vt(t,e,1,-1)}function hd(e){var t=Ht();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:fs,lastRenderedState:e},t.queue=e,e=e.dispatch=d0.bind(null,Ie,e),[t.memoizedState,e]}function ps(e,t,s,i){return e={tag:e,create:t,destroy:s,deps:i,next:null},t=Ie.updateQueue,t===null?(t={lastEffect:null,stores:null},Ie.updateQueue=t,t.lastEffect=e.next=e):(s=t.lastEffect,s===null?t.lastEffect=e.next=e:(i=s.next,s.next=e,e.next=i,t.lastEffect=e)),e}function _d(){return Ct().memoizedState}function So(e,t,s,i){var a=Ht();Ie.flags|=e,a.memoizedState=ps(1|t,s,void 0,i===void 0?null:i)}function ko(e,t,s,i){var a=Ct();i=i===void 0?null:i;var c=void 0;if(Ue!==null){var m=Ue.memoizedState;if(c=m.destroy,i!==null&&xl(i,m.deps)){a.memoizedState=ps(t,s,c,i);return}}Ie.flags|=e,a.memoizedState=ps(1|t,s,c,i)}function gd(e,t){return So(8390656,8,e,t)}function Cl(e,t){return ko(2048,8,e,t)}function yd(e,t){return ko(4,2,e,t)}function vd(e,t){return ko(4,4,e,t)}function xd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function wd(e,t,s){return s=s!=null?s.concat([e]):null,ko(4,4,xd.bind(null,t,e),s)}function Tl(){}function Sd(e,t){var s=Ct();t=t===void 0?null:t;var i=s.memoizedState;return i!==null&&t!==null&&xl(t,i[1])?i[0]:(s.memoizedState=[e,t],e)}function kd(e,t){var s=Ct();t=t===void 0?null:t;var i=s.memoizedState;return i!==null&&t!==null&&xl(t,i[1])?i[0]:(e=e(),s.memoizedState=[e,t],e)}function bd(e,t,s){return(On&21)===0?(e.baseState&&(e.baseState=!1,ft=!0),e.memoizedState=s):(Rt(s,t)||(s=ec(),Ie.lanes|=s,Bn|=s,e.baseState=!0),t)}function u0(e,t){var s=xe;xe=s!==0&&4>s?s:4,e(!0);var i=vl.transition;vl.transition={};try{e(!1),t()}finally{xe=s,vl.transition=i}}function Cd(){return Ct().memoizedState}function c0(e,t,s){var i=Sn(e);if(s={lane:i,action:s,hasEagerState:!1,eagerState:null,next:null},Td(e))Pd(t,s);else if(s=rd(e,t,s,i),s!==null){var a=it();Vt(s,e,i,a),Ed(s,t,i)}}function d0(e,t,s){var i=Sn(e),a={lane:i,action:s,hasEagerState:!1,eagerState:null,next:null};if(Td(e))Pd(t,a);else{var c=e.alternate;if(e.lanes===0&&(c===null||c.lanes===0)&&(c=t.lastRenderedReducer,c!==null))try{var m=t.lastRenderedState,v=c(m,s);if(a.hasEagerState=!0,a.eagerState=v,Rt(v,m)){var w=t.interleaved;w===null?(a.next=a,pl(t)):(a.next=w.next,w.next=a),t.interleaved=a;return}}catch{}finally{}s=rd(e,t,a,i),s!==null&&(a=it(),Vt(s,e,i,a),Ed(s,t,i))}}function Td(e){var t=e.alternate;return e===Ie||t!==null&&t===Ie}function Pd(e,t){cs=wo=!0;var s=e.pending;s===null?t.next=t:(t.next=s.next,s.next=t),e.pending=t}function Ed(e,t,s){if((s&4194240)!==0){var i=t.lanes;i&=e.pendingLanes,s|=i,t.lanes=s,Ei(e,s)}}var bo={readContext:bt,useCallback:tt,useContext:tt,useEffect:tt,useImperativeHandle:tt,useInsertionEffect:tt,useLayoutEffect:tt,useMemo:tt,useReducer:tt,useRef:tt,useState:tt,useDebugValue:tt,useDeferredValue:tt,useTransition:tt,useMutableSource:tt,useSyncExternalStore:tt,useId:tt,unstable_isNewReconciler:!1},f0={readContext:bt,useCallback:function(e,t){return Ht().memoizedState=[e,t===void 0?null:t],e},useContext:bt,useEffect:gd,useImperativeHandle:function(e,t,s){return s=s!=null?s.concat([e]):null,So(4194308,4,xd.bind(null,t,e),s)},useLayoutEffect:function(e,t){return So(4194308,4,e,t)},useInsertionEffect:function(e,t){return So(4,2,e,t)},useMemo:function(e,t){var s=Ht();return t=t===void 0?null:t,e=e(),s.memoizedState=[e,t],e},useReducer:function(e,t,s){var i=Ht();return t=s!==void 0?s(t):t,i.memoizedState=i.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},i.queue=e,e=e.dispatch=c0.bind(null,Ie,e),[i.memoizedState,e]},useRef:function(e){var t=Ht();return e={current:e},t.memoizedState=e},useState:hd,useDebugValue:Tl,useDeferredValue:function(e){return Ht().memoizedState=e},useTransition:function(){var e=hd(!1),t=e[0];return e=u0.bind(null,e[1]),Ht().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,s){var i=Ie,a=Ht();if(Re){if(s===void 0)throw Error(o(407));s=s()}else{if(s=t(),Qe===null)throw Error(o(349));(On&30)!==0||cd(i,t,s)}a.memoizedState=s;var c={value:s,getSnapshot:t};return a.queue=c,gd(fd.bind(null,i,c,e),[e]),i.flags|=2048,ps(9,dd.bind(null,i,c,s,t),void 0,null),s},useId:function(){var e=Ht(),t=Qe.identifierPrefix;if(Re){var s=en,i=qt;s=(i&~(1<<32-Lt(i)-1)).toString(32)+s,t=":"+t+"R"+s,s=ds++,0<s&&(t+="H"+s.toString(32)),t+=":"}else s=a0++,t=":"+t+"r"+s.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},p0={readContext:bt,useCallback:Sd,useContext:bt,useEffect:Cl,useImperativeHandle:wd,useInsertionEffect:yd,useLayoutEffect:vd,useMemo:kd,useReducer:kl,useRef:_d,useState:function(){return kl(fs)},useDebugValue:Tl,useDeferredValue:function(e){var t=Ct();return bd(t,Ue.memoizedState,e)},useTransition:function(){var e=kl(fs)[0],t=Ct().memoizedState;return[e,t]},useMutableSource:ad,useSyncExternalStore:ud,useId:Cd,unstable_isNewReconciler:!1},m0={readContext:bt,useCallback:Sd,useContext:bt,useEffect:Cl,useImperativeHandle:wd,useInsertionEffect:yd,useLayoutEffect:vd,useMemo:kd,useReducer:bl,useRef:_d,useState:function(){return bl(fs)},useDebugValue:Tl,useDeferredValue:function(e){var t=Ct();return Ue===null?t.memoizedState=e:bd(t,Ue.memoizedState,e)},useTransition:function(){var e=bl(fs)[0],t=Ct().memoizedState;return[e,t]},useMutableSource:ad,useSyncExternalStore:ud,useId:Cd,unstable_isNewReconciler:!1};function It(e,t){if(e&&e.defaultProps){t=Q({},t),e=e.defaultProps;for(var s in e)t[s]===void 0&&(t[s]=e[s]);return t}return t}function Pl(e,t,s,i){t=e.memoizedState,s=s(i,t),s=s==null?t:Q({},t,s),e.memoizedState=s,e.lanes===0&&(e.updateQueue.baseState=s)}var Co={isMounted:function(e){return(e=e._reactInternals)?Rn(e)===e:!1},enqueueSetState:function(e,t,s){e=e._reactInternals;var i=it(),a=Sn(e),c=nn(i,a);c.payload=t,s!=null&&(c.callback=s),t=yn(e,c,a),t!==null&&(Vt(t,e,a,i),go(t,e,a))},enqueueReplaceState:function(e,t,s){e=e._reactInternals;var i=it(),a=Sn(e),c=nn(i,a);c.tag=1,c.payload=t,s!=null&&(c.callback=s),t=yn(e,c,a),t!==null&&(Vt(t,e,a,i),go(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var s=it(),i=Sn(e),a=nn(s,i);a.tag=2,t!=null&&(a.callback=t),t=yn(e,a,i),t!==null&&(Vt(t,e,i,s),go(t,e,i))}};function Md(e,t,s,i,a,c,m){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,c,m):t.prototype&&t.prototype.isPureReactComponent?!qr(s,i)||!qr(a,c):!0}function Dd(e,t,s){var i=!1,a=hn,c=t.contextType;return typeof c=="object"&&c!==null?c=bt(c):(a=dt(t)?In:et.current,i=t.contextTypes,c=(i=i!=null)?cr(e,a):hn),t=new t(s,c),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Co,e.stateNode=t,t._reactInternals=e,i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=c),t}function Ld(e,t,s,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(s,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(s,i),t.state!==e&&Co.enqueueReplaceState(t,t.state,null)}function El(e,t,s,i){var a=e.stateNode;a.props=s,a.state=e.memoizedState,a.refs={},ml(e);var c=t.contextType;typeof c=="object"&&c!==null?a.context=bt(c):(c=dt(t)?In:et.current,a.context=cr(e,c)),a.state=e.memoizedState,c=t.getDerivedStateFromProps,typeof c=="function"&&(Pl(e,t,c,s),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&Co.enqueueReplaceState(a,a.state,null),yo(e,s,a,i),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function yr(e,t){try{var s="",i=t;do s+=de(i),i=i.return;while(i);var a=s}catch(c){a=`
Error generating stack: `+c.message+`
`+c.stack}return{value:e,source:t,stack:a,digest:null}}function Ml(e,t,s){return{value:e,source:null,stack:s??null,digest:t??null}}function Dl(e,t){try{console.error(t.value)}catch(s){setTimeout(function(){throw s})}}var h0=typeof WeakMap=="function"?WeakMap:Map;function Rd(e,t,s){s=nn(-1,s),s.tag=3,s.payload={element:null};var i=t.value;return s.callback=function(){Ro||(Ro=!0,Hl=i),Dl(e,t)},s}function Ad(e,t,s){s=nn(-1,s),s.tag=3;var i=e.type.getDerivedStateFromError;if(typeof i=="function"){var a=t.value;s.payload=function(){return i(a)},s.callback=function(){Dl(e,t)}}var c=e.stateNode;return c!==null&&typeof c.componentDidCatch=="function"&&(s.callback=function(){Dl(e,t),typeof i!="function"&&(xn===null?xn=new Set([this]):xn.add(this));var m=t.stack;this.componentDidCatch(t.value,{componentStack:m!==null?m:""})}),s}function Id(e,t,s){var i=e.pingCache;if(i===null){i=e.pingCache=new h0;var a=new Set;i.set(t,a)}else a=i.get(t),a===void 0&&(a=new Set,i.set(t,a));a.has(s)||(a.add(s),e=M0.bind(null,e,t,s),t.then(e,e))}function jd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Nd(e,t,s,i,a){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,s.flags|=131072,s.flags&=-52805,s.tag===1&&(s.alternate===null?s.tag=17:(t=nn(-1,1),t.tag=2,yn(s,t,1))),s.lanes|=1),e):(e.flags|=65536,e.lanes=a,e)}var _0=B.ReactCurrentOwner,ft=!1;function ot(e,t,s,i){t.child=e===null?nd(t,null,s,i):mr(t,e.child,s,i)}function Vd(e,t,s,i,a){s=s.render;var c=t.ref;return _r(t,a),i=wl(e,t,s,i,c,a),s=Sl(),e!==null&&!ft?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,rn(e,t,a)):(Re&&s&&sl(t),t.flags|=1,ot(e,t,i,a),t.child)}function zd(e,t,s,i,a){if(e===null){var c=s.type;return typeof c=="function"&&!Jl(c)&&c.defaultProps===void 0&&s.compare===null&&s.defaultProps===void 0?(t.tag=15,t.type=c,Od(e,t,c,i,a)):(e=zo(s.type,null,i,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(c=e.child,(e.lanes&a)===0){var m=c.memoizedProps;if(s=s.compare,s=s!==null?s:qr,s(m,i)&&e.ref===t.ref)return rn(e,t,a)}return t.flags|=1,e=bn(c,i),e.ref=t.ref,e.return=t,t.child=e}function Od(e,t,s,i,a){if(e!==null){var c=e.memoizedProps;if(qr(c,i)&&e.ref===t.ref)if(ft=!1,t.pendingProps=i=c,(e.lanes&a)!==0)(e.flags&131072)!==0&&(ft=!0);else return t.lanes=e.lanes,rn(e,t,a)}return Ll(e,t,s,i,a)}function Bd(e,t,s){var i=t.pendingProps,a=i.children,c=e!==null?e.memoizedState:null;if(i.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Te(xr,wt),wt|=s;else{if((s&1073741824)===0)return e=c!==null?c.baseLanes|s:s,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Te(xr,wt),wt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=c!==null?c.baseLanes:s,Te(xr,wt),wt|=i}else c!==null?(i=c.baseLanes|s,t.memoizedState=null):i=s,Te(xr,wt),wt|=i;return ot(e,t,a,s),t.child}function Fd(e,t){var s=t.ref;(e===null&&s!==null||e!==null&&e.ref!==s)&&(t.flags|=512,t.flags|=2097152)}function Ll(e,t,s,i,a){var c=dt(s)?In:et.current;return c=cr(t,c),_r(t,a),s=wl(e,t,s,i,c,a),i=Sl(),e!==null&&!ft?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,rn(e,t,a)):(Re&&i&&sl(t),t.flags|=1,ot(e,t,s,a),t.child)}function Ud(e,t,s,i,a){if(dt(s)){var c=!0;ao(t)}else c=!1;if(_r(t,a),t.stateNode===null)Po(e,t),Dd(t,s,i),El(t,s,i,a),i=!0;else if(e===null){var m=t.stateNode,v=t.memoizedProps;m.props=v;var w=m.context,E=s.contextType;typeof E=="object"&&E!==null?E=bt(E):(E=dt(s)?In:et.current,E=cr(t,E));var O=s.getDerivedStateFromProps,F=typeof O=="function"||typeof m.getSnapshotBeforeUpdate=="function";F||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(v!==i||w!==E)&&Ld(t,m,i,E),gn=!1;var V=t.memoizedState;m.state=V,yo(t,i,m,a),w=t.memoizedState,v!==i||V!==w||ct.current||gn?(typeof O=="function"&&(Pl(t,s,O,i),w=t.memoizedState),(v=gn||Md(t,s,v,i,V,w,E))?(F||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(t.flags|=4194308)):(typeof m.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=w),m.props=i,m.state=w,m.context=E,i=v):(typeof m.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{m=t.stateNode,sd(e,t),v=t.memoizedProps,E=t.type===t.elementType?v:It(t.type,v),m.props=E,F=t.pendingProps,V=m.context,w=s.contextType,typeof w=="object"&&w!==null?w=bt(w):(w=dt(s)?In:et.current,w=cr(t,w));var X=s.getDerivedStateFromProps;(O=typeof X=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(v!==F||V!==w)&&Ld(t,m,i,w),gn=!1,V=t.memoizedState,m.state=V,yo(t,i,m,a);var Z=t.memoizedState;v!==F||V!==Z||ct.current||gn?(typeof X=="function"&&(Pl(t,s,X,i),Z=t.memoizedState),(E=gn||Md(t,s,E,i,V,Z,w)||!1)?(O||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(i,Z,w),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(i,Z,w)),typeof m.componentDidUpdate=="function"&&(t.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof m.componentDidUpdate!="function"||v===e.memoizedProps&&V===e.memoizedState||(t.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&V===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=Z),m.props=i,m.state=Z,m.context=w,i=E):(typeof m.componentDidUpdate!="function"||v===e.memoizedProps&&V===e.memoizedState||(t.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&V===e.memoizedState||(t.flags|=1024),i=!1)}return Rl(e,t,s,i,c,a)}function Rl(e,t,s,i,a,c){Fd(e,t);var m=(t.flags&128)!==0;if(!i&&!m)return a&&Xc(t,s,!1),rn(e,t,c);i=t.stateNode,_0.current=t;var v=m&&typeof s.getDerivedStateFromError!="function"?null:i.render();return t.flags|=1,e!==null&&m?(t.child=mr(t,e.child,null,c),t.child=mr(t,null,v,c)):ot(e,t,v,c),t.memoizedState=i.state,a&&Xc(t,s,!0),t.child}function Yd(e){var t=e.stateNode;t.pendingContext?Hc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Hc(e,t.context,!1),hl(e,t.containerInfo)}function Wd(e,t,s,i,a){return pr(),al(a),t.flags|=256,ot(e,t,s,i),t.child}var Al={dehydrated:null,treeContext:null,retryLane:0};function Il(e){return{baseLanes:e,cachePool:null,transitions:null}}function Hd(e,t,s){var i=t.pendingProps,a=Ae.current,c=!1,m=(t.flags&128)!==0,v;if((v=m)||(v=e!==null&&e.memoizedState===null?!1:(a&2)!==0),v?(c=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),Te(Ae,a&1),e===null)return ll(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(m=i.children,e=i.fallback,c?(i=t.mode,c=t.child,m={mode:"hidden",children:m},(i&1)===0&&c!==null?(c.childLanes=0,c.pendingProps=m):c=Oo(m,i,0,null),e=Wn(e,i,s,null),c.return=t,e.return=t,c.sibling=e,t.child=c,t.child.memoizedState=Il(s),t.memoizedState=Al,e):jl(t,m));if(a=e.memoizedState,a!==null&&(v=a.dehydrated,v!==null))return g0(e,t,m,i,v,a,s);if(c){c=i.fallback,m=t.mode,a=e.child,v=a.sibling;var w={mode:"hidden",children:i.children};return(m&1)===0&&t.child!==a?(i=t.child,i.childLanes=0,i.pendingProps=w,t.deletions=null):(i=bn(a,w),i.subtreeFlags=a.subtreeFlags&14680064),v!==null?c=bn(v,c):(c=Wn(c,m,s,null),c.flags|=2),c.return=t,i.return=t,i.sibling=c,t.child=i,i=c,c=t.child,m=e.child.memoizedState,m=m===null?Il(s):{baseLanes:m.baseLanes|s,cachePool:null,transitions:m.transitions},c.memoizedState=m,c.childLanes=e.childLanes&~s,t.memoizedState=Al,i}return c=e.child,e=c.sibling,i=bn(c,{mode:"visible",children:i.children}),(t.mode&1)===0&&(i.lanes=s),i.return=t,i.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=i,t.memoizedState=null,i}function jl(e,t){return t=Oo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function To(e,t,s,i){return i!==null&&al(i),mr(t,e.child,null,s),e=jl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function g0(e,t,s,i,a,c,m){if(s)return t.flags&256?(t.flags&=-257,i=Ml(Error(o(422))),To(e,t,m,i)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(c=i.fallback,a=t.mode,i=Oo({mode:"visible",children:i.children},a,0,null),c=Wn(c,a,m,null),c.flags|=2,i.return=t,c.return=t,i.sibling=c,t.child=i,(t.mode&1)!==0&&mr(t,e.child,null,m),t.child.memoizedState=Il(m),t.memoizedState=Al,c);if((t.mode&1)===0)return To(e,t,m,null);if(a.data==="$!"){if(i=a.nextSibling&&a.nextSibling.dataset,i)var v=i.dgst;return i=v,c=Error(o(419)),i=Ml(c,i,void 0),To(e,t,m,i)}if(v=(m&e.childLanes)!==0,ft||v){if(i=Qe,i!==null){switch(m&-m){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=(a&(i.suspendedLanes|m))!==0?0:a,a!==0&&a!==c.retryLane&&(c.retryLane=a,tn(e,a),Vt(i,e,a,-1))}return Zl(),i=Ml(Error(o(421))),To(e,t,m,i)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=D0.bind(null,e),a._reactRetry=t,null):(e=c.treeContext,xt=pn(a.nextSibling),vt=t,Re=!0,At=null,e!==null&&(St[kt++]=qt,St[kt++]=en,St[kt++]=jn,qt=e.id,en=e.overflow,jn=t),t=jl(t,i.children),t.flags|=4096,t)}function Qd(e,t,s){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),fl(e.return,t,s)}function Nl(e,t,s,i,a){var c=e.memoizedState;c===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:s,tailMode:a}:(c.isBackwards=t,c.rendering=null,c.renderingStartTime=0,c.last=i,c.tail=s,c.tailMode=a)}function Xd(e,t,s){var i=t.pendingProps,a=i.revealOrder,c=i.tail;if(ot(e,t,i.children,s),i=Ae.current,(i&2)!==0)i=i&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Qd(e,s,t);else if(e.tag===19)Qd(e,s,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}if(Te(Ae,i),(t.mode&1)===0)t.memoizedState=null;else switch(a){case"forwards":for(s=t.child,a=null;s!==null;)e=s.alternate,e!==null&&vo(e)===null&&(a=s),s=s.sibling;s=a,s===null?(a=t.child,t.child=null):(a=s.sibling,s.sibling=null),Nl(t,!1,a,s,c);break;case"backwards":for(s=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&vo(e)===null){t.child=a;break}e=a.sibling,a.sibling=s,s=a,a=e}Nl(t,!0,s,null,c);break;case"together":Nl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Po(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function rn(e,t,s){if(e!==null&&(t.dependencies=e.dependencies),Bn|=t.lanes,(s&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,s=bn(e,e.pendingProps),t.child=s,s.return=t;e.sibling!==null;)e=e.sibling,s=s.sibling=bn(e,e.pendingProps),s.return=t;s.sibling=null}return t.child}function y0(e,t,s){switch(t.tag){case 3:Yd(t),pr();break;case 5:ld(t);break;case 1:dt(t.type)&&ao(t);break;case 4:hl(t,t.stateNode.containerInfo);break;case 10:var i=t.type._context,a=t.memoizedProps.value;Te(ho,i._currentValue),i._currentValue=a;break;case 13:if(i=t.memoizedState,i!==null)return i.dehydrated!==null?(Te(Ae,Ae.current&1),t.flags|=128,null):(s&t.child.childLanes)!==0?Hd(e,t,s):(Te(Ae,Ae.current&1),e=rn(e,t,s),e!==null?e.sibling:null);Te(Ae,Ae.current&1);break;case 19:if(i=(s&t.childLanes)!==0,(e.flags&128)!==0){if(i)return Xd(e,t,s);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),Te(Ae,Ae.current),i)break;return null;case 22:case 23:return t.lanes=0,Bd(e,t,s)}return rn(e,t,s)}var $d,Vl,Kd,Gd;$d=function(e,t){for(var s=t.child;s!==null;){if(s.tag===5||s.tag===6)e.appendChild(s.stateNode);else if(s.tag!==4&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break;for(;s.sibling===null;){if(s.return===null||s.return===t)return;s=s.return}s.sibling.return=s.return,s=s.sibling}},Vl=function(){},Kd=function(e,t,s,i){var a=e.memoizedProps;if(a!==i){e=t.stateNode,zn(Wt.current);var c=null;switch(s){case"input":a=qe(e,a),i=qe(e,i),c=[];break;case"select":a=Q({},a,{value:void 0}),i=Q({},i,{value:void 0}),c=[];break;case"textarea":a=hi(e,a),i=hi(e,i),c=[];break;default:typeof a.onClick!="function"&&typeof i.onClick=="function"&&(e.onclick=oo)}gi(s,i);var m;s=null;for(E in a)if(!i.hasOwnProperty(E)&&a.hasOwnProperty(E)&&a[E]!=null)if(E==="style"){var v=a[E];for(m in v)v.hasOwnProperty(m)&&(s||(s={}),s[m]="")}else E!=="dangerouslySetInnerHTML"&&E!=="children"&&E!=="suppressContentEditableWarning"&&E!=="suppressHydrationWarning"&&E!=="autoFocus"&&(u.hasOwnProperty(E)?c||(c=[]):(c=c||[]).push(E,null));for(E in i){var w=i[E];if(v=a!=null?a[E]:void 0,i.hasOwnProperty(E)&&w!==v&&(w!=null||v!=null))if(E==="style")if(v){for(m in v)!v.hasOwnProperty(m)||w&&w.hasOwnProperty(m)||(s||(s={}),s[m]="");for(m in w)w.hasOwnProperty(m)&&v[m]!==w[m]&&(s||(s={}),s[m]=w[m])}else s||(c||(c=[]),c.push(E,s)),s=w;else E==="dangerouslySetInnerHTML"?(w=w?w.__html:void 0,v=v?v.__html:void 0,w!=null&&v!==w&&(c=c||[]).push(E,w)):E==="children"?typeof w!="string"&&typeof w!="number"||(c=c||[]).push(E,""+w):E!=="suppressContentEditableWarning"&&E!=="suppressHydrationWarning"&&(u.hasOwnProperty(E)?(w!=null&&E==="onScroll"&&Me("scroll",e),c||v===w||(c=[])):(c=c||[]).push(E,w))}s&&(c=c||[]).push("style",s);var E=c;(t.updateQueue=E)&&(t.flags|=4)}},Gd=function(e,t,s,i){s!==i&&(t.flags|=4)};function ms(e,t){if(!Re)switch(e.tailMode){case"hidden":t=e.tail;for(var s=null;t!==null;)t.alternate!==null&&(s=t),t=t.sibling;s===null?e.tail=null:s.sibling=null;break;case"collapsed":s=e.tail;for(var i=null;s!==null;)s.alternate!==null&&(i=s),s=s.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function nt(e){var t=e.alternate!==null&&e.alternate.child===e.child,s=0,i=0;if(t)for(var a=e.child;a!==null;)s|=a.lanes|a.childLanes,i|=a.subtreeFlags&14680064,i|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)s|=a.lanes|a.childLanes,i|=a.subtreeFlags,i|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=i,e.childLanes=s,t}function v0(e,t,s){var i=t.pendingProps;switch(ol(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return nt(t),null;case 1:return dt(t.type)&&lo(),nt(t),null;case 3:return i=t.stateNode,gr(),De(ct),De(et),yl(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(po(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,At!==null&&($l(At),At=null))),Vl(e,t),nt(t),null;case 5:_l(t);var a=zn(us.current);if(s=t.type,e!==null&&t.stateNode!=null)Kd(e,t,s,i,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!i){if(t.stateNode===null)throw Error(o(166));return nt(t),null}if(e=zn(Wt.current),po(t)){i=t.stateNode,s=t.type;var c=t.memoizedProps;switch(i[Yt]=t,i[ss]=c,e=(t.mode&1)!==0,s){case"dialog":Me("cancel",i),Me("close",i);break;case"iframe":case"object":case"embed":Me("load",i);break;case"video":case"audio":for(a=0;a<ts.length;a++)Me(ts[a],i);break;case"source":Me("error",i);break;case"img":case"image":case"link":Me("error",i),Me("load",i);break;case"details":Me("toggle",i);break;case"input":_t(i,c),Me("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!c.multiple},Me("invalid",i);break;case"textarea":Au(i,c),Me("invalid",i)}gi(s,c),a=null;for(var m in c)if(c.hasOwnProperty(m)){var v=c[m];m==="children"?typeof v=="string"?i.textContent!==v&&(c.suppressHydrationWarning!==!0&&so(i.textContent,v,e),a=["children",v]):typeof v=="number"&&i.textContent!==""+v&&(c.suppressHydrationWarning!==!0&&so(i.textContent,v,e),a=["children",""+v]):u.hasOwnProperty(m)&&v!=null&&m==="onScroll"&&Me("scroll",i)}switch(s){case"input":Zn(i),Dt(i,c,!0);break;case"textarea":Zn(i),ju(i);break;case"select":case"option":break;default:typeof c.onClick=="function"&&(i.onclick=oo)}i=a,t.updateQueue=i,i!==null&&(t.flags|=4)}else{m=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Nu(s)),e==="http://www.w3.org/1999/xhtml"?s==="script"?(e=m.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof i.is=="string"?e=m.createElement(s,{is:i.is}):(e=m.createElement(s),s==="select"&&(m=e,i.multiple?m.multiple=!0:i.size&&(m.size=i.size))):e=m.createElementNS(e,s),e[Yt]=t,e[ss]=i,$d(e,t,!1,!1),t.stateNode=e;e:{switch(m=yi(s,i),s){case"dialog":Me("cancel",e),Me("close",e),a=i;break;case"iframe":case"object":case"embed":Me("load",e),a=i;break;case"video":case"audio":for(a=0;a<ts.length;a++)Me(ts[a],e);a=i;break;case"source":Me("error",e),a=i;break;case"img":case"image":case"link":Me("error",e),Me("load",e),a=i;break;case"details":Me("toggle",e),a=i;break;case"input":_t(e,i),a=qe(e,i),Me("invalid",e);break;case"option":a=i;break;case"select":e._wrapperState={wasMultiple:!!i.multiple},a=Q({},i,{value:void 0}),Me("invalid",e);break;case"textarea":Au(e,i),a=hi(e,i),Me("invalid",e);break;default:a=i}gi(s,a),v=a;for(c in v)if(v.hasOwnProperty(c)){var w=v[c];c==="style"?Ou(e,w):c==="dangerouslySetInnerHTML"?(w=w?w.__html:void 0,w!=null&&Vu(e,w)):c==="children"?typeof w=="string"?(s!=="textarea"||w!=="")&&Nr(e,w):typeof w=="number"&&Nr(e,""+w):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(u.hasOwnProperty(c)?w!=null&&c==="onScroll"&&Me("scroll",e):w!=null&&A(e,c,w,m))}switch(s){case"input":Zn(e),Dt(e,i,!1);break;case"textarea":Zn(e),ju(e);break;case"option":i.value!=null&&e.setAttribute("value",""+me(i.value));break;case"select":e.multiple=!!i.multiple,c=i.value,c!=null?Jn(e,!!i.multiple,c,!1):i.defaultValue!=null&&Jn(e,!!i.multiple,i.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=oo)}switch(s){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return nt(t),null;case 6:if(e&&t.stateNode!=null)Gd(e,t,e.memoizedProps,i);else{if(typeof i!="string"&&t.stateNode===null)throw Error(o(166));if(s=zn(us.current),zn(Wt.current),po(t)){if(i=t.stateNode,s=t.memoizedProps,i[Yt]=t,(c=i.nodeValue!==s)&&(e=vt,e!==null))switch(e.tag){case 3:so(i.nodeValue,s,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&so(i.nodeValue,s,(e.mode&1)!==0)}c&&(t.flags|=4)}else i=(s.nodeType===9?s:s.ownerDocument).createTextNode(i),i[Yt]=t,t.stateNode=i}return nt(t),null;case 13:if(De(Ae),i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Re&&xt!==null&&(t.mode&1)!==0&&(t.flags&128)===0)qc(),pr(),t.flags|=98560,c=!1;else if(c=po(t),i!==null&&i.dehydrated!==null){if(e===null){if(!c)throw Error(o(318));if(c=t.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(o(317));c[Yt]=t}else pr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;nt(t),c=!1}else At!==null&&($l(At),At=null),c=!0;if(!c)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=s,t):(i=i!==null,i!==(e!==null&&e.memoizedState!==null)&&i&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Ae.current&1)!==0?Ye===0&&(Ye=3):Zl())),t.updateQueue!==null&&(t.flags|=4),nt(t),null);case 4:return gr(),Vl(e,t),e===null&&ns(t.stateNode.containerInfo),nt(t),null;case 10:return dl(t.type._context),nt(t),null;case 17:return dt(t.type)&&lo(),nt(t),null;case 19:if(De(Ae),c=t.memoizedState,c===null)return nt(t),null;if(i=(t.flags&128)!==0,m=c.rendering,m===null)if(i)ms(c,!1);else{if(Ye!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(m=vo(e),m!==null){for(t.flags|=128,ms(c,!1),i=m.updateQueue,i!==null&&(t.updateQueue=i,t.flags|=4),t.subtreeFlags=0,i=s,s=t.child;s!==null;)c=s,e=i,c.flags&=14680066,m=c.alternate,m===null?(c.childLanes=0,c.lanes=e,c.child=null,c.subtreeFlags=0,c.memoizedProps=null,c.memoizedState=null,c.updateQueue=null,c.dependencies=null,c.stateNode=null):(c.childLanes=m.childLanes,c.lanes=m.lanes,c.child=m.child,c.subtreeFlags=0,c.deletions=null,c.memoizedProps=m.memoizedProps,c.memoizedState=m.memoizedState,c.updateQueue=m.updateQueue,c.type=m.type,e=m.dependencies,c.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),s=s.sibling;return Te(Ae,Ae.current&1|2),t.child}e=e.sibling}c.tail!==null&&ze()>wr&&(t.flags|=128,i=!0,ms(c,!1),t.lanes=4194304)}else{if(!i)if(e=vo(m),e!==null){if(t.flags|=128,i=!0,s=e.updateQueue,s!==null&&(t.updateQueue=s,t.flags|=4),ms(c,!0),c.tail===null&&c.tailMode==="hidden"&&!m.alternate&&!Re)return nt(t),null}else 2*ze()-c.renderingStartTime>wr&&s!==1073741824&&(t.flags|=128,i=!0,ms(c,!1),t.lanes=4194304);c.isBackwards?(m.sibling=t.child,t.child=m):(s=c.last,s!==null?s.sibling=m:t.child=m,c.last=m)}return c.tail!==null?(t=c.tail,c.rendering=t,c.tail=t.sibling,c.renderingStartTime=ze(),t.sibling=null,s=Ae.current,Te(Ae,i?s&1|2:s&1),t):(nt(t),null);case 22:case 23:return Gl(),i=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==i&&(t.flags|=8192),i&&(t.mode&1)!==0?(wt&1073741824)!==0&&(nt(t),t.subtreeFlags&6&&(t.flags|=8192)):nt(t),null;case 24:return null;case 25:return null}throw Error(o(156,t.tag))}function x0(e,t){switch(ol(t),t.tag){case 1:return dt(t.type)&&lo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return gr(),De(ct),De(et),yl(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return _l(t),null;case 13:if(De(Ae),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));pr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return De(Ae),null;case 4:return gr(),null;case 10:return dl(t.type._context),null;case 22:case 23:return Gl(),null;case 24:return null;default:return null}}var Eo=!1,rt=!1,w0=typeof WeakSet=="function"?WeakSet:Set,G=null;function vr(e,t){var s=e.ref;if(s!==null)if(typeof s=="function")try{s(null)}catch(i){Ne(e,t,i)}else s.current=null}function zl(e,t,s){try{s()}catch(i){Ne(e,t,i)}}var Zd=!1;function S0(e,t){if(Gi=Xs,e=Mc(),Ui(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else e:{s=(s=e.ownerDocument)&&s.defaultView||window;var i=s.getSelection&&s.getSelection();if(i&&i.rangeCount!==0){s=i.anchorNode;var a=i.anchorOffset,c=i.focusNode;i=i.focusOffset;try{s.nodeType,c.nodeType}catch{s=null;break e}var m=0,v=-1,w=-1,E=0,O=0,F=e,V=null;t:for(;;){for(var X;F!==s||a!==0&&F.nodeType!==3||(v=m+a),F!==c||i!==0&&F.nodeType!==3||(w=m+i),F.nodeType===3&&(m+=F.nodeValue.length),(X=F.firstChild)!==null;)V=F,F=X;for(;;){if(F===e)break t;if(V===s&&++E===a&&(v=m),V===c&&++O===i&&(w=m),(X=F.nextSibling)!==null)break;F=V,V=F.parentNode}F=X}s=v===-1||w===-1?null:{start:v,end:w}}else s=null}s=s||{start:0,end:0}}else s=null;for(Zi={focusedElem:e,selectionRange:s},Xs=!1,G=t;G!==null;)if(t=G,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,G=e;else for(;G!==null;){t=G;try{var Z=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(Z!==null){var q=Z.memoizedProps,Oe=Z.memoizedState,C=t.stateNode,S=C.getSnapshotBeforeUpdate(t.elementType===t.type?q:It(t.type,q),Oe);C.__reactInternalSnapshotBeforeUpdate=S}break;case 3:var P=t.stateNode.containerInfo;P.nodeType===1?P.textContent="":P.nodeType===9&&P.documentElement&&P.removeChild(P.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(o(163))}}catch(Y){Ne(t,t.return,Y)}if(e=t.sibling,e!==null){e.return=t.return,G=e;break}G=t.return}return Z=Zd,Zd=!1,Z}function hs(e,t,s){var i=t.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&e)===e){var c=a.destroy;a.destroy=void 0,c!==void 0&&zl(t,s,c)}a=a.next}while(a!==i)}}function Mo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var s=t=t.next;do{if((s.tag&e)===e){var i=s.create;s.destroy=i()}s=s.next}while(s!==t)}}function Ol(e){var t=e.ref;if(t!==null){var s=e.stateNode;switch(e.tag){case 5:e=s;break;default:e=s}typeof t=="function"?t(e):t.current=e}}function Jd(e){var t=e.alternate;t!==null&&(e.alternate=null,Jd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Yt],delete t[ss],delete t[tl],delete t[s0],delete t[o0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function qd(e){return e.tag===5||e.tag===3||e.tag===4}function ef(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||qd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Bl(e,t,s){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?s.nodeType===8?s.parentNode.insertBefore(e,t):s.insertBefore(e,t):(s.nodeType===8?(t=s.parentNode,t.insertBefore(e,s)):(t=s,t.appendChild(e)),s=s._reactRootContainer,s!=null||t.onclick!==null||(t.onclick=oo));else if(i!==4&&(e=e.child,e!==null))for(Bl(e,t,s),e=e.sibling;e!==null;)Bl(e,t,s),e=e.sibling}function Fl(e,t,s){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?s.insertBefore(e,t):s.appendChild(e);else if(i!==4&&(e=e.child,e!==null))for(Fl(e,t,s),e=e.sibling;e!==null;)Fl(e,t,s),e=e.sibling}var $e=null,jt=!1;function vn(e,t,s){for(s=s.child;s!==null;)tf(e,t,s),s=s.sibling}function tf(e,t,s){if(Ut&&typeof Ut.onCommitFiberUnmount=="function")try{Ut.onCommitFiberUnmount(Fs,s)}catch{}switch(s.tag){case 5:rt||vr(s,t);case 6:var i=$e,a=jt;$e=null,vn(e,t,s),$e=i,jt=a,$e!==null&&(jt?(e=$e,s=s.stateNode,e.nodeType===8?e.parentNode.removeChild(s):e.removeChild(s)):$e.removeChild(s.stateNode));break;case 18:$e!==null&&(jt?(e=$e,s=s.stateNode,e.nodeType===8?el(e.parentNode,s):e.nodeType===1&&el(e,s),Xr(e)):el($e,s.stateNode));break;case 4:i=$e,a=jt,$e=s.stateNode.containerInfo,jt=!0,vn(e,t,s),$e=i,jt=a;break;case 0:case 11:case 14:case 15:if(!rt&&(i=s.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){a=i=i.next;do{var c=a,m=c.destroy;c=c.tag,m!==void 0&&((c&2)!==0||(c&4)!==0)&&zl(s,t,m),a=a.next}while(a!==i)}vn(e,t,s);break;case 1:if(!rt&&(vr(s,t),i=s.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=s.memoizedProps,i.state=s.memoizedState,i.componentWillUnmount()}catch(v){Ne(s,t,v)}vn(e,t,s);break;case 21:vn(e,t,s);break;case 22:s.mode&1?(rt=(i=rt)||s.memoizedState!==null,vn(e,t,s),rt=i):vn(e,t,s);break;default:vn(e,t,s)}}function nf(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var s=e.stateNode;s===null&&(s=e.stateNode=new w0),t.forEach(function(i){var a=L0.bind(null,e,i);s.has(i)||(s.add(i),i.then(a,a))})}}function Nt(e,t){var s=t.deletions;if(s!==null)for(var i=0;i<s.length;i++){var a=s[i];try{var c=e,m=t,v=m;e:for(;v!==null;){switch(v.tag){case 5:$e=v.stateNode,jt=!1;break e;case 3:$e=v.stateNode.containerInfo,jt=!0;break e;case 4:$e=v.stateNode.containerInfo,jt=!0;break e}v=v.return}if($e===null)throw Error(o(160));tf(c,m,a),$e=null,jt=!1;var w=a.alternate;w!==null&&(w.return=null),a.return=null}catch(E){Ne(a,t,E)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)rf(t,e),t=t.sibling}function rf(e,t){var s=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Nt(t,e),Qt(e),i&4){try{hs(3,e,e.return),Mo(3,e)}catch(q){Ne(e,e.return,q)}try{hs(5,e,e.return)}catch(q){Ne(e,e.return,q)}}break;case 1:Nt(t,e),Qt(e),i&512&&s!==null&&vr(s,s.return);break;case 5:if(Nt(t,e),Qt(e),i&512&&s!==null&&vr(s,s.return),e.flags&32){var a=e.stateNode;try{Nr(a,"")}catch(q){Ne(e,e.return,q)}}if(i&4&&(a=e.stateNode,a!=null)){var c=e.memoizedProps,m=s!==null?s.memoizedProps:c,v=e.type,w=e.updateQueue;if(e.updateQueue=null,w!==null)try{v==="input"&&c.type==="radio"&&c.name!=null&&ut(a,c),yi(v,m);var E=yi(v,c);for(m=0;m<w.length;m+=2){var O=w[m],F=w[m+1];O==="style"?Ou(a,F):O==="dangerouslySetInnerHTML"?Vu(a,F):O==="children"?Nr(a,F):A(a,O,F,E)}switch(v){case"input":gt(a,c);break;case"textarea":Iu(a,c);break;case"select":var V=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!c.multiple;var X=c.value;X!=null?Jn(a,!!c.multiple,X,!1):V!==!!c.multiple&&(c.defaultValue!=null?Jn(a,!!c.multiple,c.defaultValue,!0):Jn(a,!!c.multiple,c.multiple?[]:"",!1))}a[ss]=c}catch(q){Ne(e,e.return,q)}}break;case 6:if(Nt(t,e),Qt(e),i&4){if(e.stateNode===null)throw Error(o(162));a=e.stateNode,c=e.memoizedProps;try{a.nodeValue=c}catch(q){Ne(e,e.return,q)}}break;case 3:if(Nt(t,e),Qt(e),i&4&&s!==null&&s.memoizedState.isDehydrated)try{Xr(t.containerInfo)}catch(q){Ne(e,e.return,q)}break;case 4:Nt(t,e),Qt(e);break;case 13:Nt(t,e),Qt(e),a=e.child,a.flags&8192&&(c=a.memoizedState!==null,a.stateNode.isHidden=c,!c||a.alternate!==null&&a.alternate.memoizedState!==null||(Wl=ze())),i&4&&nf(e);break;case 22:if(O=s!==null&&s.memoizedState!==null,e.mode&1?(rt=(E=rt)||O,Nt(t,e),rt=E):Nt(t,e),Qt(e),i&8192){if(E=e.memoizedState!==null,(e.stateNode.isHidden=E)&&!O&&(e.mode&1)!==0)for(G=e,O=e.child;O!==null;){for(F=G=O;G!==null;){switch(V=G,X=V.child,V.tag){case 0:case 11:case 14:case 15:hs(4,V,V.return);break;case 1:vr(V,V.return);var Z=V.stateNode;if(typeof Z.componentWillUnmount=="function"){i=V,s=V.return;try{t=i,Z.props=t.memoizedProps,Z.state=t.memoizedState,Z.componentWillUnmount()}catch(q){Ne(i,s,q)}}break;case 5:vr(V,V.return);break;case 22:if(V.memoizedState!==null){lf(F);continue}}X!==null?(X.return=V,G=X):lf(F)}O=O.sibling}e:for(O=null,F=e;;){if(F.tag===5){if(O===null){O=F;try{a=F.stateNode,E?(c=a.style,typeof c.setProperty=="function"?c.setProperty("display","none","important"):c.display="none"):(v=F.stateNode,w=F.memoizedProps.style,m=w!=null&&w.hasOwnProperty("display")?w.display:null,v.style.display=zu("display",m))}catch(q){Ne(e,e.return,q)}}}else if(F.tag===6){if(O===null)try{F.stateNode.nodeValue=E?"":F.memoizedProps}catch(q){Ne(e,e.return,q)}}else if((F.tag!==22&&F.tag!==23||F.memoizedState===null||F===e)&&F.child!==null){F.child.return=F,F=F.child;continue}if(F===e)break e;for(;F.sibling===null;){if(F.return===null||F.return===e)break e;O===F&&(O=null),F=F.return}O===F&&(O=null),F.sibling.return=F.return,F=F.sibling}}break;case 19:Nt(t,e),Qt(e),i&4&&nf(e);break;case 21:break;default:Nt(t,e),Qt(e)}}function Qt(e){var t=e.flags;if(t&2){try{e:{for(var s=e.return;s!==null;){if(qd(s)){var i=s;break e}s=s.return}throw Error(o(160))}switch(i.tag){case 5:var a=i.stateNode;i.flags&32&&(Nr(a,""),i.flags&=-33);var c=ef(e);Fl(e,c,a);break;case 3:case 4:var m=i.stateNode.containerInfo,v=ef(e);Bl(e,v,m);break;default:throw Error(o(161))}}catch(w){Ne(e,e.return,w)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function k0(e,t,s){G=e,sf(e)}function sf(e,t,s){for(var i=(e.mode&1)!==0;G!==null;){var a=G,c=a.child;if(a.tag===22&&i){var m=a.memoizedState!==null||Eo;if(!m){var v=a.alternate,w=v!==null&&v.memoizedState!==null||rt;v=Eo;var E=rt;if(Eo=m,(rt=w)&&!E)for(G=a;G!==null;)m=G,w=m.child,m.tag===22&&m.memoizedState!==null?af(a):w!==null?(w.return=m,G=w):af(a);for(;c!==null;)G=c,sf(c),c=c.sibling;G=a,Eo=v,rt=E}of(e)}else(a.subtreeFlags&8772)!==0&&c!==null?(c.return=a,G=c):of(e)}}function of(e){for(;G!==null;){var t=G;if((t.flags&8772)!==0){var s=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:rt||Mo(5,t);break;case 1:var i=t.stateNode;if(t.flags&4&&!rt)if(s===null)i.componentDidMount();else{var a=t.elementType===t.type?s.memoizedProps:It(t.type,s.memoizedProps);i.componentDidUpdate(a,s.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var c=t.updateQueue;c!==null&&id(t,c,i);break;case 3:var m=t.updateQueue;if(m!==null){if(s=null,t.child!==null)switch(t.child.tag){case 5:s=t.child.stateNode;break;case 1:s=t.child.stateNode}id(t,m,s)}break;case 5:var v=t.stateNode;if(s===null&&t.flags&4){s=v;var w=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":w.autoFocus&&s.focus();break;case"img":w.src&&(s.src=w.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var E=t.alternate;if(E!==null){var O=E.memoizedState;if(O!==null){var F=O.dehydrated;F!==null&&Xr(F)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(o(163))}rt||t.flags&512&&Ol(t)}catch(V){Ne(t,t.return,V)}}if(t===e){G=null;break}if(s=t.sibling,s!==null){s.return=t.return,G=s;break}G=t.return}}function lf(e){for(;G!==null;){var t=G;if(t===e){G=null;break}var s=t.sibling;if(s!==null){s.return=t.return,G=s;break}G=t.return}}function af(e){for(;G!==null;){var t=G;try{switch(t.tag){case 0:case 11:case 15:var s=t.return;try{Mo(4,t)}catch(w){Ne(t,s,w)}break;case 1:var i=t.stateNode;if(typeof i.componentDidMount=="function"){var a=t.return;try{i.componentDidMount()}catch(w){Ne(t,a,w)}}var c=t.return;try{Ol(t)}catch(w){Ne(t,c,w)}break;case 5:var m=t.return;try{Ol(t)}catch(w){Ne(t,m,w)}}}catch(w){Ne(t,t.return,w)}if(t===e){G=null;break}var v=t.sibling;if(v!==null){v.return=t.return,G=v;break}G=t.return}}var b0=Math.ceil,Do=B.ReactCurrentDispatcher,Ul=B.ReactCurrentOwner,Tt=B.ReactCurrentBatchConfig,he=0,Qe=null,Be=null,Ke=0,wt=0,xr=mn(0),Ye=0,_s=null,Bn=0,Lo=0,Yl=0,gs=null,pt=null,Wl=0,wr=1/0,sn=null,Ro=!1,Hl=null,xn=null,Ao=!1,wn=null,Io=0,ys=0,Ql=null,jo=-1,No=0;function it(){return(he&6)!==0?ze():jo!==-1?jo:jo=ze()}function Sn(e){return(e.mode&1)===0?1:(he&2)!==0&&Ke!==0?Ke&-Ke:l0.transition!==null?(No===0&&(No=ec()),No):(e=xe,e!==0||(e=window.event,e=e===void 0?16:uc(e.type)),e)}function Vt(e,t,s,i){if(50<ys)throw ys=0,Ql=null,Error(o(185));Ur(e,s,i),((he&2)===0||e!==Qe)&&(e===Qe&&((he&2)===0&&(Lo|=s),Ye===4&&kn(e,Ke)),mt(e,i),s===1&&he===0&&(t.mode&1)===0&&(wr=ze()+500,uo&&_n()))}function mt(e,t){var s=e.callbackNode;l_(e,t);var i=Ws(e,e===Qe?Ke:0);if(i===0)s!==null&&Zu(s),e.callbackNode=null,e.callbackPriority=0;else if(t=i&-i,e.callbackPriority!==t){if(s!=null&&Zu(s),t===1)e.tag===0?i0(cf.bind(null,e)):$c(cf.bind(null,e)),n0(function(){(he&6)===0&&_n()}),s=null;else{switch(tc(i)){case 1:s=Ci;break;case 4:s=Ju;break;case 16:s=Bs;break;case 536870912:s=qu;break;default:s=Bs}s=yf(s,uf.bind(null,e))}e.callbackPriority=t,e.callbackNode=s}}function uf(e,t){if(jo=-1,No=0,(he&6)!==0)throw Error(o(327));var s=e.callbackNode;if(Sr()&&e.callbackNode!==s)return null;var i=Ws(e,e===Qe?Ke:0);if(i===0)return null;if((i&30)!==0||(i&e.expiredLanes)!==0||t)t=Vo(e,i);else{t=i;var a=he;he|=2;var c=ff();(Qe!==e||Ke!==t)&&(sn=null,wr=ze()+500,Un(e,t));do try{P0();break}catch(v){df(e,v)}while(!0);cl(),Do.current=c,he=a,Be!==null?t=0:(Qe=null,Ke=0,t=Ye)}if(t!==0){if(t===2&&(a=Ti(e),a!==0&&(i=a,t=Xl(e,a))),t===1)throw s=_s,Un(e,0),kn(e,i),mt(e,ze()),s;if(t===6)kn(e,i);else{if(a=e.current.alternate,(i&30)===0&&!C0(a)&&(t=Vo(e,i),t===2&&(c=Ti(e),c!==0&&(i=c,t=Xl(e,c))),t===1))throw s=_s,Un(e,0),kn(e,i),mt(e,ze()),s;switch(e.finishedWork=a,e.finishedLanes=i,t){case 0:case 1:throw Error(o(345));case 2:Yn(e,pt,sn);break;case 3:if(kn(e,i),(i&130023424)===i&&(t=Wl+500-ze(),10<t)){if(Ws(e,0)!==0)break;if(a=e.suspendedLanes,(a&i)!==i){it(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=qi(Yn.bind(null,e,pt,sn),t);break}Yn(e,pt,sn);break;case 4:if(kn(e,i),(i&4194240)===i)break;for(t=e.eventTimes,a=-1;0<i;){var m=31-Lt(i);c=1<<m,m=t[m],m>a&&(a=m),i&=~c}if(i=a,i=ze()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*b0(i/1960))-i,10<i){e.timeoutHandle=qi(Yn.bind(null,e,pt,sn),i);break}Yn(e,pt,sn);break;case 5:Yn(e,pt,sn);break;default:throw Error(o(329))}}}return mt(e,ze()),e.callbackNode===s?uf.bind(null,e):null}function Xl(e,t){var s=gs;return e.current.memoizedState.isDehydrated&&(Un(e,t).flags|=256),e=Vo(e,t),e!==2&&(t=pt,pt=s,t!==null&&$l(t)),e}function $l(e){pt===null?pt=e:pt.push.apply(pt,e)}function C0(e){for(var t=e;;){if(t.flags&16384){var s=t.updateQueue;if(s!==null&&(s=s.stores,s!==null))for(var i=0;i<s.length;i++){var a=s[i],c=a.getSnapshot;a=a.value;try{if(!Rt(c(),a))return!1}catch{return!1}}}if(s=t.child,t.subtreeFlags&16384&&s!==null)s.return=t,t=s;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function kn(e,t){for(t&=~Yl,t&=~Lo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var s=31-Lt(t),i=1<<s;e[s]=-1,t&=~i}}function cf(e){if((he&6)!==0)throw Error(o(327));Sr();var t=Ws(e,0);if((t&1)===0)return mt(e,ze()),null;var s=Vo(e,t);if(e.tag!==0&&s===2){var i=Ti(e);i!==0&&(t=i,s=Xl(e,i))}if(s===1)throw s=_s,Un(e,0),kn(e,t),mt(e,ze()),s;if(s===6)throw Error(o(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Yn(e,pt,sn),mt(e,ze()),null}function Kl(e,t){var s=he;he|=1;try{return e(t)}finally{he=s,he===0&&(wr=ze()+500,uo&&_n())}}function Fn(e){wn!==null&&wn.tag===0&&(he&6)===0&&Sr();var t=he;he|=1;var s=Tt.transition,i=xe;try{if(Tt.transition=null,xe=1,e)return e()}finally{xe=i,Tt.transition=s,he=t,(he&6)===0&&_n()}}function Gl(){wt=xr.current,De(xr)}function Un(e,t){e.finishedWork=null,e.finishedLanes=0;var s=e.timeoutHandle;if(s!==-1&&(e.timeoutHandle=-1,t0(s)),Be!==null)for(s=Be.return;s!==null;){var i=s;switch(ol(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&lo();break;case 3:gr(),De(ct),De(et),yl();break;case 5:_l(i);break;case 4:gr();break;case 13:De(Ae);break;case 19:De(Ae);break;case 10:dl(i.type._context);break;case 22:case 23:Gl()}s=s.return}if(Qe=e,Be=e=bn(e.current,null),Ke=wt=t,Ye=0,_s=null,Yl=Lo=Bn=0,pt=gs=null,Vn!==null){for(t=0;t<Vn.length;t++)if(s=Vn[t],i=s.interleaved,i!==null){s.interleaved=null;var a=i.next,c=s.pending;if(c!==null){var m=c.next;c.next=a,i.next=m}s.pending=i}Vn=null}return e}function df(e,t){do{var s=Be;try{if(cl(),xo.current=bo,wo){for(var i=Ie.memoizedState;i!==null;){var a=i.queue;a!==null&&(a.pending=null),i=i.next}wo=!1}if(On=0,He=Ue=Ie=null,cs=!1,ds=0,Ul.current=null,s===null||s.return===null){Ye=1,_s=t,Be=null;break}e:{var c=e,m=s.return,v=s,w=t;if(t=Ke,v.flags|=32768,w!==null&&typeof w=="object"&&typeof w.then=="function"){var E=w,O=v,F=O.tag;if((O.mode&1)===0&&(F===0||F===11||F===15)){var V=O.alternate;V?(O.updateQueue=V.updateQueue,O.memoizedState=V.memoizedState,O.lanes=V.lanes):(O.updateQueue=null,O.memoizedState=null)}var X=jd(m);if(X!==null){X.flags&=-257,Nd(X,m,v,c,t),X.mode&1&&Id(c,E,t),t=X,w=E;var Z=t.updateQueue;if(Z===null){var q=new Set;q.add(w),t.updateQueue=q}else Z.add(w);break e}else{if((t&1)===0){Id(c,E,t),Zl();break e}w=Error(o(426))}}else if(Re&&v.mode&1){var Oe=jd(m);if(Oe!==null){(Oe.flags&65536)===0&&(Oe.flags|=256),Nd(Oe,m,v,c,t),al(yr(w,v));break e}}c=w=yr(w,v),Ye!==4&&(Ye=2),gs===null?gs=[c]:gs.push(c),c=m;do{switch(c.tag){case 3:c.flags|=65536,t&=-t,c.lanes|=t;var C=Rd(c,w,t);od(c,C);break e;case 1:v=w;var S=c.type,P=c.stateNode;if((c.flags&128)===0&&(typeof S.getDerivedStateFromError=="function"||P!==null&&typeof P.componentDidCatch=="function"&&(xn===null||!xn.has(P)))){c.flags|=65536,t&=-t,c.lanes|=t;var Y=Ad(c,v,t);od(c,Y);break e}}c=c.return}while(c!==null)}mf(s)}catch(te){t=te,Be===s&&s!==null&&(Be=s=s.return);continue}break}while(!0)}function ff(){var e=Do.current;return Do.current=bo,e===null?bo:e}function Zl(){(Ye===0||Ye===3||Ye===2)&&(Ye=4),Qe===null||(Bn&268435455)===0&&(Lo&268435455)===0||kn(Qe,Ke)}function Vo(e,t){var s=he;he|=2;var i=ff();(Qe!==e||Ke!==t)&&(sn=null,Un(e,t));do try{T0();break}catch(a){df(e,a)}while(!0);if(cl(),he=s,Do.current=i,Be!==null)throw Error(o(261));return Qe=null,Ke=0,Ye}function T0(){for(;Be!==null;)pf(Be)}function P0(){for(;Be!==null&&!Jh();)pf(Be)}function pf(e){var t=gf(e.alternate,e,wt);e.memoizedProps=e.pendingProps,t===null?mf(e):Be=t,Ul.current=null}function mf(e){var t=e;do{var s=t.alternate;if(e=t.return,(t.flags&32768)===0){if(s=v0(s,t,wt),s!==null){Be=s;return}}else{if(s=x0(s,t),s!==null){s.flags&=32767,Be=s;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ye=6,Be=null;return}}if(t=t.sibling,t!==null){Be=t;return}Be=t=e}while(t!==null);Ye===0&&(Ye=5)}function Yn(e,t,s){var i=xe,a=Tt.transition;try{Tt.transition=null,xe=1,E0(e,t,s,i)}finally{Tt.transition=a,xe=i}return null}function E0(e,t,s,i){do Sr();while(wn!==null);if((he&6)!==0)throw Error(o(327));s=e.finishedWork;var a=e.finishedLanes;if(s===null)return null;if(e.finishedWork=null,e.finishedLanes=0,s===e.current)throw Error(o(177));e.callbackNode=null,e.callbackPriority=0;var c=s.lanes|s.childLanes;if(a_(e,c),e===Qe&&(Be=Qe=null,Ke=0),(s.subtreeFlags&2064)===0&&(s.flags&2064)===0||Ao||(Ao=!0,yf(Bs,function(){return Sr(),null})),c=(s.flags&15990)!==0,(s.subtreeFlags&15990)!==0||c){c=Tt.transition,Tt.transition=null;var m=xe;xe=1;var v=he;he|=4,Ul.current=null,S0(e,s),rf(s,e),$_(Zi),Xs=!!Gi,Zi=Gi=null,e.current=s,k0(s),qh(),he=v,xe=m,Tt.transition=c}else e.current=s;if(Ao&&(Ao=!1,wn=e,Io=a),c=e.pendingLanes,c===0&&(xn=null),n_(s.stateNode),mt(e,ze()),t!==null)for(i=e.onRecoverableError,s=0;s<t.length;s++)a=t[s],i(a.value,{componentStack:a.stack,digest:a.digest});if(Ro)throw Ro=!1,e=Hl,Hl=null,e;return(Io&1)!==0&&e.tag!==0&&Sr(),c=e.pendingLanes,(c&1)!==0?e===Ql?ys++:(ys=0,Ql=e):ys=0,_n(),null}function Sr(){if(wn!==null){var e=tc(Io),t=Tt.transition,s=xe;try{if(Tt.transition=null,xe=16>e?16:e,wn===null)var i=!1;else{if(e=wn,wn=null,Io=0,(he&6)!==0)throw Error(o(331));var a=he;for(he|=4,G=e.current;G!==null;){var c=G,m=c.child;if((G.flags&16)!==0){var v=c.deletions;if(v!==null){for(var w=0;w<v.length;w++){var E=v[w];for(G=E;G!==null;){var O=G;switch(O.tag){case 0:case 11:case 15:hs(8,O,c)}var F=O.child;if(F!==null)F.return=O,G=F;else for(;G!==null;){O=G;var V=O.sibling,X=O.return;if(Jd(O),O===E){G=null;break}if(V!==null){V.return=X,G=V;break}G=X}}}var Z=c.alternate;if(Z!==null){var q=Z.child;if(q!==null){Z.child=null;do{var Oe=q.sibling;q.sibling=null,q=Oe}while(q!==null)}}G=c}}if((c.subtreeFlags&2064)!==0&&m!==null)m.return=c,G=m;else e:for(;G!==null;){if(c=G,(c.flags&2048)!==0)switch(c.tag){case 0:case 11:case 15:hs(9,c,c.return)}var C=c.sibling;if(C!==null){C.return=c.return,G=C;break e}G=c.return}}var S=e.current;for(G=S;G!==null;){m=G;var P=m.child;if((m.subtreeFlags&2064)!==0&&P!==null)P.return=m,G=P;else e:for(m=S;G!==null;){if(v=G,(v.flags&2048)!==0)try{switch(v.tag){case 0:case 11:case 15:Mo(9,v)}}catch(te){Ne(v,v.return,te)}if(v===m){G=null;break e}var Y=v.sibling;if(Y!==null){Y.return=v.return,G=Y;break e}G=v.return}}if(he=a,_n(),Ut&&typeof Ut.onPostCommitFiberRoot=="function")try{Ut.onPostCommitFiberRoot(Fs,e)}catch{}i=!0}return i}finally{xe=s,Tt.transition=t}}return!1}function hf(e,t,s){t=yr(s,t),t=Rd(e,t,1),e=yn(e,t,1),t=it(),e!==null&&(Ur(e,1,t),mt(e,t))}function Ne(e,t,s){if(e.tag===3)hf(e,e,s);else for(;t!==null;){if(t.tag===3){hf(t,e,s);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(xn===null||!xn.has(i))){e=yr(s,e),e=Ad(t,e,1),t=yn(t,e,1),e=it(),t!==null&&(Ur(t,1,e),mt(t,e));break}}t=t.return}}function M0(e,t,s){var i=e.pingCache;i!==null&&i.delete(t),t=it(),e.pingedLanes|=e.suspendedLanes&s,Qe===e&&(Ke&s)===s&&(Ye===4||Ye===3&&(Ke&130023424)===Ke&&500>ze()-Wl?Un(e,0):Yl|=s),mt(e,t)}function _f(e,t){t===0&&((e.mode&1)===0?t=1:(t=Ys,Ys<<=1,(Ys&130023424)===0&&(Ys=4194304)));var s=it();e=tn(e,t),e!==null&&(Ur(e,t,s),mt(e,s))}function D0(e){var t=e.memoizedState,s=0;t!==null&&(s=t.retryLane),_f(e,s)}function L0(e,t){var s=0;switch(e.tag){case 13:var i=e.stateNode,a=e.memoizedState;a!==null&&(s=a.retryLane);break;case 19:i=e.stateNode;break;default:throw Error(o(314))}i!==null&&i.delete(t),_f(e,s)}var gf;gf=function(e,t,s){if(e!==null)if(e.memoizedProps!==t.pendingProps||ct.current)ft=!0;else{if((e.lanes&s)===0&&(t.flags&128)===0)return ft=!1,y0(e,t,s);ft=(e.flags&131072)!==0}else ft=!1,Re&&(t.flags&1048576)!==0&&Kc(t,fo,t.index);switch(t.lanes=0,t.tag){case 2:var i=t.type;Po(e,t),e=t.pendingProps;var a=cr(t,et.current);_r(t,s),a=wl(null,t,i,e,a,s);var c=Sl();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,dt(i)?(c=!0,ao(t)):c=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,ml(t),a.updater=Co,t.stateNode=a,a._reactInternals=t,El(t,i,e,s),t=Rl(null,t,i,!0,c,s)):(t.tag=0,Re&&c&&sl(t),ot(null,t,a,s),t=t.child),t;case 16:i=t.elementType;e:{switch(Po(e,t),e=t.pendingProps,a=i._init,i=a(i._payload),t.type=i,a=t.tag=A0(i),e=It(i,e),a){case 0:t=Ll(null,t,i,e,s);break e;case 1:t=Ud(null,t,i,e,s);break e;case 11:t=Vd(null,t,i,e,s);break e;case 14:t=zd(null,t,i,It(i.type,e),s);break e}throw Error(o(306,i,""))}return t;case 0:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:It(i,a),Ll(e,t,i,a,s);case 1:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:It(i,a),Ud(e,t,i,a,s);case 3:e:{if(Yd(t),e===null)throw Error(o(387));i=t.pendingProps,c=t.memoizedState,a=c.element,sd(e,t),yo(t,i,null,s);var m=t.memoizedState;if(i=m.element,c.isDehydrated)if(c={element:i,isDehydrated:!1,cache:m.cache,pendingSuspenseBoundaries:m.pendingSuspenseBoundaries,transitions:m.transitions},t.updateQueue.baseState=c,t.memoizedState=c,t.flags&256){a=yr(Error(o(423)),t),t=Wd(e,t,i,s,a);break e}else if(i!==a){a=yr(Error(o(424)),t),t=Wd(e,t,i,s,a);break e}else for(xt=pn(t.stateNode.containerInfo.firstChild),vt=t,Re=!0,At=null,s=nd(t,null,i,s),t.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(pr(),i===a){t=rn(e,t,s);break e}ot(e,t,i,s)}t=t.child}return t;case 5:return ld(t),e===null&&ll(t),i=t.type,a=t.pendingProps,c=e!==null?e.memoizedProps:null,m=a.children,Ji(i,a)?m=null:c!==null&&Ji(i,c)&&(t.flags|=32),Fd(e,t),ot(e,t,m,s),t.child;case 6:return e===null&&ll(t),null;case 13:return Hd(e,t,s);case 4:return hl(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=mr(t,null,i,s):ot(e,t,i,s),t.child;case 11:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:It(i,a),Vd(e,t,i,a,s);case 7:return ot(e,t,t.pendingProps,s),t.child;case 8:return ot(e,t,t.pendingProps.children,s),t.child;case 12:return ot(e,t,t.pendingProps.children,s),t.child;case 10:e:{if(i=t.type._context,a=t.pendingProps,c=t.memoizedProps,m=a.value,Te(ho,i._currentValue),i._currentValue=m,c!==null)if(Rt(c.value,m)){if(c.children===a.children&&!ct.current){t=rn(e,t,s);break e}}else for(c=t.child,c!==null&&(c.return=t);c!==null;){var v=c.dependencies;if(v!==null){m=c.child;for(var w=v.firstContext;w!==null;){if(w.context===i){if(c.tag===1){w=nn(-1,s&-s),w.tag=2;var E=c.updateQueue;if(E!==null){E=E.shared;var O=E.pending;O===null?w.next=w:(w.next=O.next,O.next=w),E.pending=w}}c.lanes|=s,w=c.alternate,w!==null&&(w.lanes|=s),fl(c.return,s,t),v.lanes|=s;break}w=w.next}}else if(c.tag===10)m=c.type===t.type?null:c.child;else if(c.tag===18){if(m=c.return,m===null)throw Error(o(341));m.lanes|=s,v=m.alternate,v!==null&&(v.lanes|=s),fl(m,s,t),m=c.sibling}else m=c.child;if(m!==null)m.return=c;else for(m=c;m!==null;){if(m===t){m=null;break}if(c=m.sibling,c!==null){c.return=m.return,m=c;break}m=m.return}c=m}ot(e,t,a.children,s),t=t.child}return t;case 9:return a=t.type,i=t.pendingProps.children,_r(t,s),a=bt(a),i=i(a),t.flags|=1,ot(e,t,i,s),t.child;case 14:return i=t.type,a=It(i,t.pendingProps),a=It(i.type,a),zd(e,t,i,a,s);case 15:return Od(e,t,t.type,t.pendingProps,s);case 17:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:It(i,a),Po(e,t),t.tag=1,dt(i)?(e=!0,ao(t)):e=!1,_r(t,s),Dd(t,i,a),El(t,i,a,s),Rl(null,t,i,!0,e,s);case 19:return Xd(e,t,s);case 22:return Bd(e,t,s)}throw Error(o(156,t.tag))};function yf(e,t){return Gu(e,t)}function R0(e,t,s,i){this.tag=e,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pt(e,t,s,i){return new R0(e,t,s,i)}function Jl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function A0(e){if(typeof e=="function")return Jl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===fe)return 11;if(e===Ce)return 14}return 2}function bn(e,t){var s=e.alternate;return s===null?(s=Pt(e.tag,t,e.key,e.mode),s.elementType=e.elementType,s.type=e.type,s.stateNode=e.stateNode,s.alternate=e,e.alternate=s):(s.pendingProps=t,s.type=e.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=e.flags&14680064,s.childLanes=e.childLanes,s.lanes=e.lanes,s.child=e.child,s.memoizedProps=e.memoizedProps,s.memoizedState=e.memoizedState,s.updateQueue=e.updateQueue,t=e.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},s.sibling=e.sibling,s.index=e.index,s.ref=e.ref,s}function zo(e,t,s,i,a,c){var m=2;if(i=e,typeof e=="function")Jl(e)&&(m=1);else if(typeof e=="string")m=5;else e:switch(e){case ee:return Wn(s.children,a,c,t);case W:m=8,a|=8;break;case $:return e=Pt(12,s,t,a|2),e.elementType=$,e.lanes=c,e;case ie:return e=Pt(13,s,t,a),e.elementType=ie,e.lanes=c,e;case Se:return e=Pt(19,s,t,a),e.elementType=Se,e.lanes=c,e;case _e:return Oo(s,a,c,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case oe:m=10;break e;case ce:m=9;break e;case fe:m=11;break e;case Ce:m=14;break e;case Pe:m=16,i=null;break e}throw Error(o(130,e==null?e:typeof e,""))}return t=Pt(m,s,t,a),t.elementType=e,t.type=i,t.lanes=c,t}function Wn(e,t,s,i){return e=Pt(7,e,i,t),e.lanes=s,e}function Oo(e,t,s,i){return e=Pt(22,e,i,t),e.elementType=_e,e.lanes=s,e.stateNode={isHidden:!1},e}function ql(e,t,s){return e=Pt(6,e,null,t),e.lanes=s,e}function ea(e,t,s){return t=Pt(4,e.children!==null?e.children:[],e.key,t),t.lanes=s,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function I0(e,t,s,i,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Pi(0),this.expirationTimes=Pi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Pi(0),this.identifierPrefix=i,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function ta(e,t,s,i,a,c,m,v,w){return e=new I0(e,t,s,v,w),t===1?(t=1,c===!0&&(t|=8)):t=0,c=Pt(3,null,null,t),e.current=c,c.stateNode=e,c.memoizedState={element:i,isDehydrated:s,cache:null,transitions:null,pendingSuspenseBoundaries:null},ml(c),e}function j0(e,t,s){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:K,key:i==null?null:""+i,children:e,containerInfo:t,implementation:s}}function vf(e){if(!e)return hn;e=e._reactInternals;e:{if(Rn(e)!==e||e.tag!==1)throw Error(o(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(dt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(o(171))}if(e.tag===1){var s=e.type;if(dt(s))return Qc(e,s,t)}return t}function xf(e,t,s,i,a,c,m,v,w){return e=ta(s,i,!0,e,a,c,m,v,w),e.context=vf(null),s=e.current,i=it(),a=Sn(s),c=nn(i,a),c.callback=t??null,yn(s,c,a),e.current.lanes=a,Ur(e,a,i),mt(e,i),e}function Bo(e,t,s,i){var a=t.current,c=it(),m=Sn(a);return s=vf(s),t.context===null?t.context=s:t.pendingContext=s,t=nn(c,m),t.payload={element:e},i=i===void 0?null:i,i!==null&&(t.callback=i),e=yn(a,t,m),e!==null&&(Vt(e,a,m,c),go(e,a,m)),m}function Fo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function wf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var s=e.retryLane;e.retryLane=s!==0&&s<t?s:t}}function na(e,t){wf(e,t),(e=e.alternate)&&wf(e,t)}function N0(){return null}var Sf=typeof reportError=="function"?reportError:function(e){console.error(e)};function ra(e){this._internalRoot=e}Uo.prototype.render=ra.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));Bo(e,t,null,null)},Uo.prototype.unmount=ra.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Fn(function(){Bo(null,e,null,null)}),t[Zt]=null}};function Uo(e){this._internalRoot=e}Uo.prototype.unstable_scheduleHydration=function(e){if(e){var t=sc();e={blockedOn:null,target:e,priority:t};for(var s=0;s<cn.length&&t!==0&&t<cn[s].priority;s++);cn.splice(s,0,e),s===0&&lc(e)}};function sa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Yo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function kf(){}function V0(e,t,s,i,a){if(a){if(typeof i=="function"){var c=i;i=function(){var E=Fo(m);c.call(E)}}var m=xf(t,i,e,0,null,!1,!1,"",kf);return e._reactRootContainer=m,e[Zt]=m.current,ns(e.nodeType===8?e.parentNode:e),Fn(),m}for(;a=e.lastChild;)e.removeChild(a);if(typeof i=="function"){var v=i;i=function(){var E=Fo(w);v.call(E)}}var w=ta(e,0,!1,null,null,!1,!1,"",kf);return e._reactRootContainer=w,e[Zt]=w.current,ns(e.nodeType===8?e.parentNode:e),Fn(function(){Bo(t,w,s,i)}),w}function Wo(e,t,s,i,a){var c=s._reactRootContainer;if(c){var m=c;if(typeof a=="function"){var v=a;a=function(){var w=Fo(m);v.call(w)}}Bo(t,m,e,a)}else m=V0(s,t,e,a,i);return Fo(m)}nc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var s=Fr(t.pendingLanes);s!==0&&(Ei(t,s|1),mt(t,ze()),(he&6)===0&&(wr=ze()+500,_n()))}break;case 13:Fn(function(){var i=tn(e,1);if(i!==null){var a=it();Vt(i,e,1,a)}}),na(e,1)}},Mi=function(e){if(e.tag===13){var t=tn(e,134217728);if(t!==null){var s=it();Vt(t,e,134217728,s)}na(e,134217728)}},rc=function(e){if(e.tag===13){var t=Sn(e),s=tn(e,t);if(s!==null){var i=it();Vt(s,e,t,i)}na(e,t)}},sc=function(){return xe},oc=function(e,t){var s=xe;try{return xe=e,t()}finally{xe=s}},wi=function(e,t,s){switch(t){case"input":if(gt(e,s),t=s.name,s.type==="radio"&&t!=null){for(s=e;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<s.length;t++){var i=s[t];if(i!==e&&i.form===e.form){var a=io(i);if(!a)throw Error(o(90));Ee(i),gt(i,a)}}}break;case"textarea":Iu(e,s);break;case"select":t=s.value,t!=null&&Jn(e,!!s.multiple,t,!1)}},Yu=Kl,Wu=Fn;var z0={usingClientEntryPoint:!1,Events:[os,ar,io,Fu,Uu,Kl]},vs={findFiberByHostInstance:An,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},O0={bundleType:vs.bundleType,version:vs.version,rendererPackageName:vs.rendererPackageName,rendererConfig:vs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:B.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=$u(e),e===null?null:e.stateNode},findFiberByHostInstance:vs.findFiberByHostInstance||N0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ho=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ho.isDisabled&&Ho.supportsFiber)try{Fs=Ho.inject(O0),Ut=Ho}catch{}}return ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=z0,ht.createPortal=function(e,t){var s=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!sa(t))throw Error(o(200));return j0(e,t,null,s)},ht.createRoot=function(e,t){if(!sa(e))throw Error(o(299));var s=!1,i="",a=Sf;return t!=null&&(t.unstable_strictMode===!0&&(s=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=ta(e,1,!1,null,null,s,!1,i,a),e[Zt]=t.current,ns(e.nodeType===8?e.parentNode:e),new ra(t)},ht.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=$u(t),e=e===null?null:e.stateNode,e},ht.flushSync=function(e){return Fn(e)},ht.hydrate=function(e,t,s){if(!Yo(t))throw Error(o(200));return Wo(null,e,t,!0,s)},ht.hydrateRoot=function(e,t,s){if(!sa(e))throw Error(o(405));var i=s!=null&&s.hydratedSources||null,a=!1,c="",m=Sf;if(s!=null&&(s.unstable_strictMode===!0&&(a=!0),s.identifierPrefix!==void 0&&(c=s.identifierPrefix),s.onRecoverableError!==void 0&&(m=s.onRecoverableError)),t=xf(t,null,e,1,s??null,a,!1,c,m),e[Zt]=t.current,ns(e),i)for(e=0;e<i.length;e++)s=i[e],a=s._getVersion,a=a(s._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[s,a]:t.mutableSourceEagerHydrationData.push(s,a);return new Uo(t)},ht.render=function(e,t,s){if(!Yo(t))throw Error(o(200));return Wo(null,e,t,!1,s)},ht.unmountComponentAtNode=function(e){if(!Yo(e))throw Error(o(40));return e._reactRootContainer?(Fn(function(){Wo(null,null,e,!1,function(){e._reactRootContainer=null,e[Zt]=null})}),!0):!1},ht.unstable_batchedUpdates=Kl,ht.unstable_renderSubtreeIntoContainer=function(e,t,s,i){if(!Yo(s))throw Error(o(200));if(e==null||e._reactInternals===void 0)throw Error(o(38));return Wo(e,t,s,!1,i)},ht.version="18.3.1-next-f1338f8080-20240426",ht}var Lf;function rm(){if(Lf)return la.exports;Lf=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(r){console.error(r)}}return n(),la.exports=X0(),la.exports}var Rf;function $0(){if(Rf)return Qo;Rf=1;var n=rm();return Qo.createRoot=n.createRoot,Qo.hydrateRoot=n.hydrateRoot,Qo}var K0=$0(),M=tu();const G0=F0(M),Ps=M.createContext({});function nu(n){const r=M.useRef(null);return r.current===null&&(r.current=n()),r.current}const Z0=typeof window<"u",ru=Z0?M.useLayoutEffect:M.useEffect,di=M.createContext(null);function su(n,r){n.indexOf(r)===-1&&n.push(r)}function ri(n,r){const o=n.indexOf(r);o>-1&&n.splice(o,1)}const Kt=(n,r,o)=>o>r?r:o<n?n:o;let ou=()=>{};const on={},sm=n=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n);function om(n){return typeof n=="object"&&n!==null}const im=n=>/^0[^.\s]+$/u.test(n);function lm(n){let r;return()=>(r===void 0&&(r=n()),r)}const Mt=n=>n,J0=(n,r)=>o=>r(n(o)),As=(...n)=>n.reduce(J0),Es=(n,r,o)=>{const l=r-n;return l===0?1:(o-n)/l};class iu{constructor(){this.subscriptions=[]}add(r){return su(this.subscriptions,r),()=>ri(this.subscriptions,r)}notify(r,o,l){const u=this.subscriptions.length;if(u)if(u===1)this.subscriptions[0](r,o,l);else for(let f=0;f<u;f++){const d=this.subscriptions[f];d&&d(r,o,l)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Bt=n=>n*1e3,Et=n=>n/1e3;function am(n,r){return r?n*(1e3/r):0}const um=(n,r,o)=>(((1-3*o+3*r)*n+(3*o-6*r))*n+3*r)*n,q0=1e-7,eg=12;function tg(n,r,o,l,u){let f,d,p=0;do d=r+(o-r)/2,f=um(d,l,u)-n,f>0?o=d:r=d;while(Math.abs(f)>q0&&++p<eg);return d}function Is(n,r,o,l){if(n===r&&o===l)return Mt;const u=f=>tg(f,0,1,n,o);return f=>f===0||f===1?f:um(u(f),r,l)}const cm=n=>r=>r<=.5?n(2*r)/2:(2-n(2*(1-r)))/2,dm=n=>r=>1-n(1-r),fm=Is(.33,1.53,.69,.99),lu=dm(fm),pm=cm(lu),mm=n=>(n*=2)<1?.5*lu(n):.5*(2-Math.pow(2,-10*(n-1))),au=n=>1-Math.sin(Math.acos(n)),hm=dm(au),_m=cm(au),ng=Is(.42,0,1,1),rg=Is(0,0,.58,1),gm=Is(.42,0,.58,1),sg=n=>Array.isArray(n)&&typeof n[0]!="number",ym=n=>Array.isArray(n)&&typeof n[0]=="number",og={linear:Mt,easeIn:ng,easeInOut:gm,easeOut:rg,circIn:au,circInOut:_m,circOut:hm,backIn:lu,backInOut:pm,backOut:fm,anticipate:mm},ig=n=>typeof n=="string",Af=n=>{if(ym(n)){ou(n.length===4);const[r,o,l,u]=n;return Is(r,o,l,u)}else if(ig(n))return og[n];return n},Xo=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function lg(n,r){let o=new Set,l=new Set,u=!1,f=!1;const d=new WeakSet;let p={delta:0,timestamp:0,isProcessing:!1};function h(g){d.has(g)&&(_.schedule(g),n()),g(p)}const _={schedule:(g,y=!1,x=!1)=>{const T=x&&u?o:l;return y&&d.add(g),T.has(g)||T.add(g),g},cancel:g=>{l.delete(g),d.delete(g)},process:g=>{if(p=g,u){f=!0;return}u=!0,[o,l]=[l,o],o.forEach(h),o.clear(),u=!1,f&&(f=!1,_.process(g))}};return _}const ag=40;function vm(n,r){let o=!1,l=!0;const u={delta:0,timestamp:0,isProcessing:!1},f=()=>o=!0,d=Xo.reduce((A,B)=>(A[B]=lg(f),A),{}),{setup:p,read:h,resolveKeyframes:_,preUpdate:g,update:y,preRender:x,render:b,postRender:T}=d,R=()=>{const A=on.useManualTiming?u.timestamp:performance.now();o=!1,on.useManualTiming||(u.delta=l?1e3/60:Math.max(Math.min(A-u.timestamp,ag),1)),u.timestamp=A,u.isProcessing=!0,p.process(u),h.process(u),_.process(u),g.process(u),y.process(u),x.process(u),b.process(u),T.process(u),u.isProcessing=!1,o&&r&&(l=!1,n(R))},L=()=>{o=!0,l=!0,u.isProcessing||n(R)};return{schedule:Xo.reduce((A,B)=>{const U=d[B];return A[B]=(K,ee=!1,W=!1)=>(o||L(),U.schedule(K,ee,W)),A},{}),cancel:A=>{for(let B=0;B<Xo.length;B++)d[Xo[B]].cancel(A)},state:u,steps:d}}const{schedule:be,cancel:Dn,state:Ze,steps:ca}=vm(typeof requestAnimationFrame<"u"?requestAnimationFrame:Mt,!0);let Zo;function ug(){Zo=void 0}const lt={now:()=>(Zo===void 0&&lt.set(Ze.isProcessing||on.useManualTiming?Ze.timestamp:performance.now()),Zo),set:n=>{Zo=n,queueMicrotask(ug)}},xm=n=>r=>typeof r=="string"&&r.startsWith(n),wm=xm("--"),cg=xm("var(--"),uu=n=>cg(n)?dg.test(n.split("/*")[0].trim()):!1,dg=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function If(n){return typeof n!="string"?!1:n.split("/*")[0].includes("var(--")}const Rr={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},Ms={...Rr,transform:n=>Kt(0,1,n)},$o={...Rr,default:1},ks=n=>Math.round(n*1e5)/1e5,cu=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function fg(n){return n==null}const pg=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,du=(n,r)=>o=>!!(typeof o=="string"&&pg.test(o)&&o.startsWith(n)||r&&!fg(o)&&Object.prototype.hasOwnProperty.call(o,r)),Sm=(n,r,o)=>l=>{if(typeof l!="string")return l;const[u,f,d,p]=l.match(cu);return{[n]:parseFloat(u),[r]:parseFloat(f),[o]:parseFloat(d),alpha:p!==void 0?parseFloat(p):1}},mg=n=>Kt(0,255,n),da={...Rr,transform:n=>Math.round(mg(n))},$n={test:du("rgb","red"),parse:Sm("red","green","blue"),transform:({red:n,green:r,blue:o,alpha:l=1})=>"rgba("+da.transform(n)+", "+da.transform(r)+", "+da.transform(o)+", "+ks(Ms.transform(l))+")"};function hg(n){let r="",o="",l="",u="";return n.length>5?(r=n.substring(1,3),o=n.substring(3,5),l=n.substring(5,7),u=n.substring(7,9)):(r=n.substring(1,2),o=n.substring(2,3),l=n.substring(3,4),u=n.substring(4,5),r+=r,o+=o,l+=l,u+=u),{red:parseInt(r,16),green:parseInt(o,16),blue:parseInt(l,16),alpha:u?parseInt(u,16)/255:1}}const Da={test:du("#"),parse:hg,transform:$n.transform},js=n=>({test:r=>typeof r=="string"&&r.endsWith(n)&&r.split(" ").length===1,parse:parseFloat,transform:r=>`${r}${n}`}),Tn=js("deg"),$t=js("%"),J=js("px"),_g=js("vh"),gg=js("vw"),jf={...$t,parse:n=>$t.parse(n)/100,transform:n=>$t.transform(n*100)},Cr={test:du("hsl","hue"),parse:Sm("hue","saturation","lightness"),transform:({hue:n,saturation:r,lightness:o,alpha:l=1})=>"hsla("+Math.round(n)+", "+$t.transform(ks(r))+", "+$t.transform(ks(o))+", "+ks(Ms.transform(l))+")"},Fe={test:n=>$n.test(n)||Da.test(n)||Cr.test(n),parse:n=>$n.test(n)?$n.parse(n):Cr.test(n)?Cr.parse(n):Da.parse(n),transform:n=>typeof n=="string"?n:n.hasOwnProperty("red")?$n.transform(n):Cr.transform(n),getAnimatableNone:n=>{const r=Fe.parse(n);return r.alpha=0,Fe.transform(r)}},yg=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function vg(n){var r,o;return isNaN(n)&&typeof n=="string"&&(((r=n.match(cu))==null?void 0:r.length)||0)+(((o=n.match(yg))==null?void 0:o.length)||0)>0}const km="number",bm="color",xg="var",wg="var(",Nf="${}",Sg=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Ds(n){const r=n.toString(),o=[],l={color:[],number:[],var:[]},u=[];let f=0;const p=r.replace(Sg,h=>(Fe.test(h)?(l.color.push(f),u.push(bm),o.push(Fe.parse(h))):h.startsWith(wg)?(l.var.push(f),u.push(xg),o.push(h)):(l.number.push(f),u.push(km),o.push(parseFloat(h))),++f,Nf)).split(Nf);return{values:o,split:p,indexes:l,types:u}}function Cm(n){return Ds(n).values}function Tm(n){const{split:r,types:o}=Ds(n),l=r.length;return u=>{let f="";for(let d=0;d<l;d++)if(f+=r[d],u[d]!==void 0){const p=o[d];p===km?f+=ks(u[d]):p===bm?f+=Fe.transform(u[d]):f+=u[d]}return f}}const kg=n=>typeof n=="number"?0:Fe.test(n)?Fe.getAnimatableNone(n):n;function bg(n){const r=Cm(n);return Tm(n)(r.map(kg))}const Ft={test:vg,parse:Cm,createTransformer:Tm,getAnimatableNone:bg};function fa(n,r,o){return o<0&&(o+=1),o>1&&(o-=1),o<1/6?n+(r-n)*6*o:o<1/2?r:o<2/3?n+(r-n)*(2/3-o)*6:n}function Cg({hue:n,saturation:r,lightness:o,alpha:l}){n/=360,r/=100,o/=100;let u=0,f=0,d=0;if(!r)u=f=d=o;else{const p=o<.5?o*(1+r):o+r-o*r,h=2*o-p;u=fa(h,p,n+1/3),f=fa(h,p,n),d=fa(h,p,n-1/3)}return{red:Math.round(u*255),green:Math.round(f*255),blue:Math.round(d*255),alpha:l}}function si(n,r){return o=>o>0?r:n}const je=(n,r,o)=>n+(r-n)*o,pa=(n,r,o)=>{const l=n*n,u=o*(r*r-l)+l;return u<0?0:Math.sqrt(u)},Tg=[Da,$n,Cr],Pg=n=>Tg.find(r=>r.test(n));function Vf(n){const r=Pg(n);if(!r)return!1;let o=r.parse(n);return r===Cr&&(o=Cg(o)),o}const zf=(n,r)=>{const o=Vf(n),l=Vf(r);if(!o||!l)return si(n,r);const u={...o};return f=>(u.red=pa(o.red,l.red,f),u.green=pa(o.green,l.green,f),u.blue=pa(o.blue,l.blue,f),u.alpha=je(o.alpha,l.alpha,f),$n.transform(u))},La=new Set(["none","hidden"]);function Eg(n,r){return La.has(n)?o=>o<=0?n:r:o=>o>=1?r:n}function Mg(n,r){return o=>je(n,r,o)}function fu(n){return typeof n=="number"?Mg:typeof n=="string"?uu(n)?si:Fe.test(n)?zf:Rg:Array.isArray(n)?Pm:typeof n=="object"?Fe.test(n)?zf:Dg:si}function Pm(n,r){const o=[...n],l=o.length,u=n.map((f,d)=>fu(f)(f,r[d]));return f=>{for(let d=0;d<l;d++)o[d]=u[d](f);return o}}function Dg(n,r){const o={...n,...r},l={};for(const u in o)n[u]!==void 0&&r[u]!==void 0&&(l[u]=fu(n[u])(n[u],r[u]));return u=>{for(const f in l)o[f]=l[f](u);return o}}function Lg(n,r){const o=[],l={color:0,var:0,number:0};for(let u=0;u<r.values.length;u++){const f=r.types[u],d=n.indexes[f][l[f]],p=n.values[d]??0;o[u]=p,l[f]++}return o}const Rg=(n,r)=>{const o=Ft.createTransformer(r),l=Ds(n),u=Ds(r);return l.indexes.var.length===u.indexes.var.length&&l.indexes.color.length===u.indexes.color.length&&l.indexes.number.length>=u.indexes.number.length?La.has(n)&&!u.values.length||La.has(r)&&!l.values.length?Eg(n,r):As(Pm(Lg(l,u),u.values),o):si(n,r)};function Em(n,r,o){return typeof n=="number"&&typeof r=="number"&&typeof o=="number"?je(n,r,o):fu(n)(n,r)}const Ag=n=>{const r=({timestamp:o})=>n(o);return{start:(o=!0)=>be.update(r,o),stop:()=>Dn(r),now:()=>Ze.isProcessing?Ze.timestamp:lt.now()}},Mm=(n,r,o=10)=>{let l="";const u=Math.max(Math.round(r/o),2);for(let f=0;f<u;f++)l+=Math.round(n(f/(u-1))*1e4)/1e4+", ";return`linear(${l.substring(0,l.length-2)})`},oi=2e4;function pu(n){let r=0;const o=50;let l=n.next(r);for(;!l.done&&r<oi;)r+=o,l=n.next(r);return r>=oi?1/0:r}function Ig(n,r=100,o){const l=o({...n,keyframes:[0,r]}),u=Math.min(pu(l),oi);return{type:"keyframes",ease:f=>l.next(u*f).value/r,duration:Et(u)}}const jg=5;function Dm(n,r,o){const l=Math.max(r-jg,0);return am(o-n(l),r-l)}const Ve={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},ma=.001;function Ng({duration:n=Ve.duration,bounce:r=Ve.bounce,velocity:o=Ve.velocity,mass:l=Ve.mass}){let u,f,d=1-r;d=Kt(Ve.minDamping,Ve.maxDamping,d),n=Kt(Ve.minDuration,Ve.maxDuration,Et(n)),d<1?(u=_=>{const g=_*d,y=g*n,x=g-o,b=Ra(_,d),T=Math.exp(-y);return ma-x/b*T},f=_=>{const y=_*d*n,x=y*o+o,b=Math.pow(d,2)*Math.pow(_,2)*n,T=Math.exp(-y),R=Ra(Math.pow(_,2),d);return(-u(_)+ma>0?-1:1)*((x-b)*T)/R}):(u=_=>{const g=Math.exp(-_*n),y=(_-o)*n+1;return-ma+g*y},f=_=>{const g=Math.exp(-_*n),y=(o-_)*(n*n);return g*y});const p=5/n,h=zg(u,f,p);if(n=Bt(n),isNaN(h))return{stiffness:Ve.stiffness,damping:Ve.damping,duration:n};{const _=Math.pow(h,2)*l;return{stiffness:_,damping:d*2*Math.sqrt(l*_),duration:n}}}const Vg=12;function zg(n,r,o){let l=o;for(let u=1;u<Vg;u++)l=l-n(l)/r(l);return l}function Ra(n,r){return n*Math.sqrt(1-r*r)}const Og=["duration","bounce"],Bg=["stiffness","damping","mass"];function Of(n,r){return r.some(o=>n[o]!==void 0)}function Fg(n){let r={velocity:Ve.velocity,stiffness:Ve.stiffness,damping:Ve.damping,mass:Ve.mass,isResolvedFromDuration:!1,...n};if(!Of(n,Bg)&&Of(n,Og))if(r.velocity=0,n.visualDuration){const o=n.visualDuration,l=2*Math.PI/(o*1.2),u=l*l,f=2*Kt(.05,1,1-(n.bounce||0))*Math.sqrt(u);r={...r,mass:Ve.mass,stiffness:u,damping:f}}else{const o=Ng({...n,velocity:0});r={...r,...o,mass:Ve.mass},r.isResolvedFromDuration=!0}return r}function ii(n=Ve.visualDuration,r=Ve.bounce){const o=typeof n!="object"?{visualDuration:n,keyframes:[0,1],bounce:r}:n;let{restSpeed:l,restDelta:u}=o;const f=o.keyframes[0],d=o.keyframes[o.keyframes.length-1],p={done:!1,value:f},{stiffness:h,damping:_,mass:g,duration:y,velocity:x,isResolvedFromDuration:b}=Fg({...o,velocity:-Et(o.velocity||0)}),T=x||0,R=_/(2*Math.sqrt(h*g)),L=d-f,j=Et(Math.sqrt(h/g)),I=Math.abs(L)<5;l||(l=I?Ve.restSpeed.granular:Ve.restSpeed.default),u||(u=I?Ve.restDelta.granular:Ve.restDelta.default);let A;if(R<1){const U=Ra(j,R);A=K=>{const ee=Math.exp(-R*j*K);return d-ee*((T+R*j*L)/U*Math.sin(U*K)+L*Math.cos(U*K))}}else if(R===1)A=U=>d-Math.exp(-j*U)*(L+(T+j*L)*U);else{const U=j*Math.sqrt(R*R-1);A=K=>{const ee=Math.exp(-R*j*K),W=Math.min(U*K,300);return d-ee*((T+R*j*L)*Math.sinh(W)+U*L*Math.cosh(W))/U}}const B={calculatedDuration:b&&y||null,next:U=>{const K=A(U);if(b)p.done=U>=y;else{let ee=U===0?T:0;R<1&&(ee=U===0?Bt(T):Dm(A,U,K));const W=Math.abs(ee)<=l,$=Math.abs(d-K)<=u;p.done=W&&$}return p.value=p.done?d:K,p},toString:()=>{const U=Math.min(pu(B),oi),K=Mm(ee=>B.next(U*ee).value,U,30);return U+"ms "+K},toTransition:()=>{}};return B}ii.applyToOptions=n=>{const r=Ig(n,100,ii);return n.ease=r.ease,n.duration=Bt(r.duration),n.type="keyframes",n};function Aa({keyframes:n,velocity:r=0,power:o=.8,timeConstant:l=325,bounceDamping:u=10,bounceStiffness:f=500,modifyTarget:d,min:p,max:h,restDelta:_=.5,restSpeed:g}){const y=n[0],x={done:!1,value:y},b=W=>p!==void 0&&W<p||h!==void 0&&W>h,T=W=>p===void 0?h:h===void 0||Math.abs(p-W)<Math.abs(h-W)?p:h;let R=o*r;const L=y+R,j=d===void 0?L:d(L);j!==L&&(R=j-y);const I=W=>-R*Math.exp(-W/l),A=W=>j+I(W),B=W=>{const $=I(W),oe=A(W);x.done=Math.abs($)<=_,x.value=x.done?j:oe};let U,K;const ee=W=>{b(x.value)&&(U=W,K=ii({keyframes:[x.value,T(x.value)],velocity:Dm(A,W,x.value),damping:u,stiffness:f,restDelta:_,restSpeed:g}))};return ee(0),{calculatedDuration:null,next:W=>{let $=!1;return!K&&U===void 0&&($=!0,B(W),ee(W)),U!==void 0&&W>=U?K.next(W-U):(!$&&B(W),x)}}}function Ug(n,r,o){const l=[],u=o||on.mix||Em,f=n.length-1;for(let d=0;d<f;d++){let p=u(n[d],n[d+1]);if(r){const h=Array.isArray(r)?r[d]||Mt:r;p=As(h,p)}l.push(p)}return l}function Yg(n,r,{clamp:o=!0,ease:l,mixer:u}={}){const f=n.length;if(ou(f===r.length),f===1)return()=>r[0];if(f===2&&r[0]===r[1])return()=>r[1];const d=n[0]===n[1];n[0]>n[f-1]&&(n=[...n].reverse(),r=[...r].reverse());const p=Ug(r,l,u),h=p.length,_=g=>{if(d&&g<n[0])return r[0];let y=0;if(h>1)for(;y<n.length-2&&!(g<n[y+1]);y++);const x=Es(n[y],n[y+1],g);return p[y](x)};return o?g=>_(Kt(n[0],n[f-1],g)):_}function Wg(n,r){const o=n[n.length-1];for(let l=1;l<=r;l++){const u=Es(0,r,l);n.push(je(o,1,u))}}function Hg(n){const r=[0];return Wg(r,n.length-1),r}function Qg(n,r){return n.map(o=>o*r)}function Xg(n,r){return n.map(()=>r||gm).splice(0,n.length-1)}function bs({duration:n=300,keyframes:r,times:o,ease:l="easeInOut"}){const u=sg(l)?l.map(Af):Af(l),f={done:!1,value:r[0]},d=Qg(o&&o.length===r.length?o:Hg(r),n),p=Yg(d,r,{ease:Array.isArray(u)?u:Xg(r,u)});return{calculatedDuration:n,next:h=>(f.value=p(h),f.done=h>=n,f)}}const $g=n=>n!==null;function mu(n,{repeat:r,repeatType:o="loop"},l,u=1){const f=n.filter($g),p=u<0||r&&o!=="loop"&&r%2===1?0:f.length-1;return!p||l===void 0?f[p]:l}const Kg={decay:Aa,inertia:Aa,tween:bs,keyframes:bs,spring:ii};function Lm(n){typeof n.type=="string"&&(n.type=Kg[n.type])}class hu{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(r=>{this.resolve=r})}notifyFinished(){this.resolve()}then(r,o){return this.finished.then(r,o)}}const Gg=n=>n/100;class _u extends hu{constructor(r){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{var l,u;const{motionValue:o}=this.options;o&&o.updatedAt!==lt.now()&&this.tick(lt.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(u=(l=this.options).onStop)==null||u.call(l))},this.options=r,this.initAnimation(),this.play(),r.autoplay===!1&&this.pause()}initAnimation(){const{options:r}=this;Lm(r);const{type:o=bs,repeat:l=0,repeatDelay:u=0,repeatType:f,velocity:d=0}=r;let{keyframes:p}=r;const h=o||bs;h!==bs&&typeof p[0]!="number"&&(this.mixKeyframes=As(Gg,Em(p[0],p[1])),p=[0,100]);const _=h({...r,keyframes:p});f==="mirror"&&(this.mirroredGenerator=h({...r,keyframes:[...p].reverse(),velocity:-d})),_.calculatedDuration===null&&(_.calculatedDuration=pu(_));const{calculatedDuration:g}=_;this.calculatedDuration=g,this.resolvedDuration=g+u,this.totalDuration=this.resolvedDuration*(l+1)-u,this.generator=_}updateTime(r){const o=Math.round(r-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=o}tick(r,o=!1){const{generator:l,totalDuration:u,mixKeyframes:f,mirroredGenerator:d,resolvedDuration:p,calculatedDuration:h}=this;if(this.startTime===null)return l.next(0);const{delay:_=0,keyframes:g,repeat:y,repeatType:x,repeatDelay:b,type:T,onUpdate:R,finalKeyframe:L}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,r):this.speed<0&&(this.startTime=Math.min(r-u/this.speed,this.startTime)),o?this.currentTime=r:this.updateTime(r);const j=this.currentTime-_*(this.playbackSpeed>=0?1:-1),I=this.playbackSpeed>=0?j<0:j>u;this.currentTime=Math.max(j,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=u);let A=this.currentTime,B=l;if(y){const W=Math.min(this.currentTime,u)/p;let $=Math.floor(W),oe=W%1;!oe&&W>=1&&(oe=1),oe===1&&$--,$=Math.min($,y+1),!!($%2)&&(x==="reverse"?(oe=1-oe,b&&(oe-=b/p)):x==="mirror"&&(B=d)),A=Kt(0,1,oe)*p}const U=I?{done:!1,value:g[0]}:B.next(A);f&&(U.value=f(U.value));let{done:K}=U;!I&&h!==null&&(K=this.playbackSpeed>=0?this.currentTime>=u:this.currentTime<=0);const ee=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&K);return ee&&T!==Aa&&(U.value=mu(g,this.options,L,this.speed)),R&&R(U.value),ee&&this.finish(),U}then(r,o){return this.finished.then(r,o)}get duration(){return Et(this.calculatedDuration)}get iterationDuration(){const{delay:r=0}=this.options||{};return this.duration+Et(r)}get time(){return Et(this.currentTime)}set time(r){var o;r=Bt(r),this.currentTime=r,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=r:this.driver&&(this.startTime=this.driver.now()-r/this.playbackSpeed),(o=this.driver)==null||o.start(!1)}get speed(){return this.playbackSpeed}set speed(r){this.updateTime(lt.now());const o=this.playbackSpeed!==r;this.playbackSpeed=r,o&&(this.time=Et(this.currentTime))}play(){var u,f;if(this.isStopped)return;const{driver:r=Ag,startTime:o}=this.options;this.driver||(this.driver=r(d=>this.tick(d))),(f=(u=this.options).onPlay)==null||f.call(u);const l=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=l):this.holdTime!==null?this.startTime=l-this.holdTime:this.startTime||(this.startTime=o??l),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(lt.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var r,o;this.notifyFinished(),this.teardown(),this.state="finished",(o=(r=this.options).onComplete)==null||o.call(r)}cancel(){var r,o;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(o=(r=this.options).onCancel)==null||o.call(r)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(r){return this.startTime=0,this.tick(r,!0)}attachTimeline(r){var o;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(o=this.driver)==null||o.stop(),r.observe(this)}}function Zg(n){for(let r=1;r<n.length;r++)n[r]??(n[r]=n[r-1])}const Kn=n=>n*180/Math.PI,Ia=n=>{const r=Kn(Math.atan2(n[1],n[0]));return ja(r)},Jg={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:n=>(Math.abs(n[0])+Math.abs(n[3]))/2,rotate:Ia,rotateZ:Ia,skewX:n=>Kn(Math.atan(n[1])),skewY:n=>Kn(Math.atan(n[2])),skew:n=>(Math.abs(n[1])+Math.abs(n[2]))/2},ja=n=>(n=n%360,n<0&&(n+=360),n),Bf=Ia,Ff=n=>Math.sqrt(n[0]*n[0]+n[1]*n[1]),Uf=n=>Math.sqrt(n[4]*n[4]+n[5]*n[5]),qg={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Ff,scaleY:Uf,scale:n=>(Ff(n)+Uf(n))/2,rotateX:n=>ja(Kn(Math.atan2(n[6],n[5]))),rotateY:n=>ja(Kn(Math.atan2(-n[2],n[0]))),rotateZ:Bf,rotate:Bf,skewX:n=>Kn(Math.atan(n[4])),skewY:n=>Kn(Math.atan(n[1])),skew:n=>(Math.abs(n[1])+Math.abs(n[4]))/2};function Na(n){return n.includes("scale")?1:0}function Va(n,r){if(!n||n==="none")return Na(r);const o=n.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let l,u;if(o)l=qg,u=o;else{const p=n.match(/^matrix\(([-\d.e\s,]+)\)$/u);l=Jg,u=p}if(!u)return Na(r);const f=l[r],d=u[1].split(",").map(ty);return typeof f=="function"?f(d):d[f]}const ey=(n,r)=>{const{transform:o="none"}=getComputedStyle(n);return Va(o,r)};function ty(n){return parseFloat(n.trim())}const Ar=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Ir=new Set(Ar),Yf=n=>n===Rr||n===J,ny=new Set(["x","y","z"]),ry=Ar.filter(n=>!ny.has(n));function sy(n){const r=[];return ry.forEach(o=>{const l=n.getValue(o);l!==void 0&&(r.push([o,l.get()]),l.set(o.startsWith("scale")?1:0))}),r}const Mn={width:({x:n},{paddingLeft:r="0",paddingRight:o="0"})=>n.max-n.min-parseFloat(r)-parseFloat(o),height:({y:n},{paddingTop:r="0",paddingBottom:o="0"})=>n.max-n.min-parseFloat(r)-parseFloat(o),top:(n,{top:r})=>parseFloat(r),left:(n,{left:r})=>parseFloat(r),bottom:({y:n},{top:r})=>parseFloat(r)+(n.max-n.min),right:({x:n},{left:r})=>parseFloat(r)+(n.max-n.min),x:(n,{transform:r})=>Va(r,"x"),y:(n,{transform:r})=>Va(r,"y")};Mn.translateX=Mn.x;Mn.translateY=Mn.y;const Gn=new Set;let za=!1,Oa=!1,Ba=!1;function Rm(){if(Oa){const n=Array.from(Gn).filter(l=>l.needsMeasurement),r=new Set(n.map(l=>l.element)),o=new Map;r.forEach(l=>{const u=sy(l);u.length&&(o.set(l,u),l.render())}),n.forEach(l=>l.measureInitialState()),r.forEach(l=>{l.render();const u=o.get(l);u&&u.forEach(([f,d])=>{var p;(p=l.getValue(f))==null||p.set(d)})}),n.forEach(l=>l.measureEndState()),n.forEach(l=>{l.suspendedScrollY!==void 0&&window.scrollTo(0,l.suspendedScrollY)})}Oa=!1,za=!1,Gn.forEach(n=>n.complete(Ba)),Gn.clear()}function Am(){Gn.forEach(n=>{n.readKeyframes(),n.needsMeasurement&&(Oa=!0)})}function oy(){Ba=!0,Am(),Rm(),Ba=!1}class gu{constructor(r,o,l,u,f,d=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...r],this.onComplete=o,this.name=l,this.motionValue=u,this.element=f,this.isAsync=d}scheduleResolve(){this.state="scheduled",this.isAsync?(Gn.add(this),za||(za=!0,be.read(Am),be.resolveKeyframes(Rm))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:r,name:o,element:l,motionValue:u}=this;if(r[0]===null){const f=u==null?void 0:u.get(),d=r[r.length-1];if(f!==void 0)r[0]=f;else if(l&&o){const p=l.readValue(o,d);p!=null&&(r[0]=p)}r[0]===void 0&&(r[0]=d),u&&f===void 0&&u.set(r[0])}Zg(r)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(r=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,r),Gn.delete(this)}cancel(){this.state==="scheduled"&&(Gn.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const iy=n=>n.startsWith("--");function ly(n,r,o){iy(r)?n.style.setProperty(r,o):n.style[r]=o}const ay={};function Im(n,r){const o=lm(n);return()=>ay[r]??o()}const uy=Im(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),jm=Im(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Ss=([n,r,o,l])=>`cubic-bezier(${n}, ${r}, ${o}, ${l})`,Wf={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Ss([0,.65,.55,1]),circOut:Ss([.55,0,1,.45]),backIn:Ss([.31,.01,.66,-.59]),backOut:Ss([.33,1.53,.69,.99])};function Nm(n,r){if(n)return typeof n=="function"?jm()?Mm(n,r):"ease-out":ym(n)?Ss(n):Array.isArray(n)?n.map(o=>Nm(o,r)||Wf.easeOut):Wf[n]}function cy(n,r,o,{delay:l=0,duration:u=300,repeat:f=0,repeatType:d="loop",ease:p="easeOut",times:h}={},_=void 0){const g={[r]:o};h&&(g.offset=h);const y=Nm(p,u);Array.isArray(y)&&(g.easing=y);const x={delay:l,duration:u,easing:Array.isArray(y)?"linear":y,fill:"both",iterations:f+1,direction:d==="reverse"?"alternate":"normal"};return _&&(x.pseudoElement=_),n.animate(g,x)}function Vm(n){return typeof n=="function"&&"applyToOptions"in n}function dy({type:n,...r}){return Vm(n)&&jm()?n.applyToOptions(r):(r.duration??(r.duration=300),r.ease??(r.ease="easeOut"),r)}class zm extends hu{constructor(r){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!r)return;const{element:o,name:l,keyframes:u,pseudoElement:f,allowFlatten:d=!1,finalKeyframe:p,onComplete:h}=r;this.isPseudoElement=!!f,this.allowFlatten=d,this.options=r,ou(typeof r.type!="string");const _=dy(r);this.animation=cy(o,l,u,_,f),_.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!f){const g=mu(u,this.options,p,this.speed);this.updateMotionValue&&this.updateMotionValue(g),ly(o,l,g),this.animation.cancel()}h==null||h(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var r,o;(o=(r=this.animation).finish)==null||o.call(r)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:r}=this;r==="idle"||r==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var o,l,u;const r=(o=this.options)==null?void 0:o.element;!this.isPseudoElement&&(r!=null&&r.isConnected)&&((u=(l=this.animation).commitStyles)==null||u.call(l))}get duration(){var o,l;const r=((l=(o=this.animation.effect)==null?void 0:o.getComputedTiming)==null?void 0:l.call(o).duration)||0;return Et(Number(r))}get iterationDuration(){const{delay:r=0}=this.options||{};return this.duration+Et(r)}get time(){return Et(Number(this.animation.currentTime)||0)}set time(r){this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=Bt(r)}get speed(){return this.animation.playbackRate}set speed(r){r<0&&(this.finishedTime=null),this.animation.playbackRate=r}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(r){this.manualStartTime=this.animation.startTime=r}attachTimeline({timeline:r,rangeStart:o,rangeEnd:l,observe:u}){var f;return this.allowFlatten&&((f=this.animation.effect)==null||f.updateTiming({easing:"linear"})),this.animation.onfinish=null,r&&uy()?(this.animation.timeline=r,o&&(this.animation.rangeStart=o),l&&(this.animation.rangeEnd=l),Mt):u(this)}}const Om={anticipate:mm,backInOut:pm,circInOut:_m};function fy(n){return n in Om}function py(n){typeof n.ease=="string"&&fy(n.ease)&&(n.ease=Om[n.ease])}const ha=10;class my extends zm{constructor(r){py(r),Lm(r),super(r),r.startTime!==void 0&&(this.startTime=r.startTime),this.options=r}updateMotionValue(r){const{motionValue:o,onUpdate:l,onComplete:u,element:f,...d}=this.options;if(!o)return;if(r!==void 0){o.set(r);return}const p=new _u({...d,autoplay:!1}),h=Math.max(ha,lt.now()-this.startTime),_=Kt(0,ha,h-ha);o.setWithVelocity(p.sample(Math.max(0,h-_)).value,p.sample(h).value,_),p.stop()}}const Hf=(n,r)=>r==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&(Ft.test(n)||n==="0")&&!n.startsWith("url("));function hy(n){const r=n[0];if(n.length===1)return!0;for(let o=0;o<n.length;o++)if(n[o]!==r)return!0}function _y(n,r,o,l){const u=n[0];if(u===null)return!1;if(r==="display"||r==="visibility")return!0;const f=n[n.length-1],d=Hf(u,r),p=Hf(f,r);return!d||!p?!1:hy(n)||(o==="spring"||Vm(o))&&l}function Fa(n){n.duration=0,n.type="keyframes"}const gy=new Set(["opacity","clipPath","filter","transform"]),yy=lm(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function vy(n){var g;const{motionValue:r,name:o,repeatDelay:l,repeatType:u,damping:f,type:d}=n;if(!(((g=r==null?void 0:r.owner)==null?void 0:g.current)instanceof HTMLElement))return!1;const{onUpdate:h,transformTemplate:_}=r.owner.getProps();return yy()&&o&&gy.has(o)&&(o!=="transform"||!_)&&!h&&!l&&u!=="mirror"&&f!==0&&d!=="inertia"}const xy=40;class wy extends hu{constructor({autoplay:r=!0,delay:o=0,type:l="keyframes",repeat:u=0,repeatDelay:f=0,repeatType:d="loop",keyframes:p,name:h,motionValue:_,element:g,...y}){var T;super(),this.stop=()=>{var R,L;this._animation&&(this._animation.stop(),(R=this.stopTimeline)==null||R.call(this)),(L=this.keyframeResolver)==null||L.cancel()},this.createdAt=lt.now();const x={autoplay:r,delay:o,type:l,repeat:u,repeatDelay:f,repeatType:d,name:h,motionValue:_,element:g,...y},b=(g==null?void 0:g.KeyframeResolver)||gu;this.keyframeResolver=new b(p,(R,L,j)=>this.onKeyframesResolved(R,L,x,!j),h,_,g),(T=this.keyframeResolver)==null||T.scheduleResolve()}onKeyframesResolved(r,o,l,u){var L,j;this.keyframeResolver=void 0;const{name:f,type:d,velocity:p,delay:h,isHandoff:_,onUpdate:g}=l;this.resolvedAt=lt.now(),_y(r,f,d,p)||((on.instantAnimations||!h)&&(g==null||g(mu(r,l,o))),r[0]=r[r.length-1],Fa(l),l.repeat=0);const x={startTime:u?this.resolvedAt?this.resolvedAt-this.createdAt>xy?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:o,...l,keyframes:r},b=!_&&vy(x),T=(j=(L=x.motionValue)==null?void 0:L.owner)==null?void 0:j.current,R=b?new my({...x,element:T}):new _u(x);R.finished.then(()=>{this.notifyFinished()}).catch(Mt),this.pendingTimeline&&(this.stopTimeline=R.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=R}get finished(){return this._animation?this.animation.finished:this._finished}then(r,o){return this.finished.finally(r).then(()=>{})}get animation(){var r;return this._animation||((r=this.keyframeResolver)==null||r.resume(),oy()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(r){this.animation.time=r}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(r){this.animation.speed=r}get startTime(){return this.animation.startTime}attachTimeline(r){return this._animation?this.stopTimeline=this.animation.attachTimeline(r):this.pendingTimeline=r,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var r;this._animation&&this.animation.cancel(),(r=this.keyframeResolver)==null||r.cancel()}}function Bm(n,r,o,l=0,u=1){const f=Array.from(n).sort((_,g)=>_.sortNodePosition(g)).indexOf(r),d=n.size,p=(d-1)*l;return typeof o=="function"?o(f,d):u===1?f*l:p-f*l}const Sy=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function ky(n){const r=Sy.exec(n);if(!r)return[,];const[,o,l,u]=r;return[`--${o??l}`,u]}function Fm(n,r,o=1){const[l,u]=ky(n);if(!l)return;const f=window.getComputedStyle(r).getPropertyValue(l);if(f){const d=f.trim();return sm(d)?parseFloat(d):d}return uu(u)?Fm(u,r,o+1):u}const by={type:"spring",stiffness:500,damping:25,restSpeed:10},Cy=n=>({type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restSpeed:10}),Ty={type:"keyframes",duration:.8},Py={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},Ey=(n,{keyframes:r})=>r.length>2?Ty:Ir.has(n)?n.startsWith("scale")?Cy(r[1]):by:Py,My=n=>n!==null;function Dy(n,{repeat:r,repeatType:o="loop"},l){const u=n.filter(My),f=r&&o!=="loop"&&r%2===1?0:u.length-1;return u[f]}function Um(n,r){if(n!=null&&n.inherit&&r){const{inherit:o,...l}=n;return{...r,...l}}return n}function yu(n,r){const o=(n==null?void 0:n[r])??(n==null?void 0:n.default)??n;return o!==n?Um(o,n):o}function Ly({when:n,delay:r,delayChildren:o,staggerChildren:l,staggerDirection:u,repeat:f,repeatType:d,repeatDelay:p,from:h,elapsed:_,...g}){return!!Object.keys(g).length}const vu=(n,r,o,l={},u,f)=>d=>{const p=yu(l,n)||{},h=p.delay||l.delay||0;let{elapsed:_=0}=l;_=_-Bt(h);const g={keyframes:Array.isArray(o)?o:[null,o],ease:"easeOut",velocity:r.getVelocity(),...p,delay:-_,onUpdate:x=>{r.set(x),p.onUpdate&&p.onUpdate(x)},onComplete:()=>{d(),p.onComplete&&p.onComplete()},name:n,motionValue:r,element:f?void 0:u};Ly(p)||Object.assign(g,Ey(n,g)),g.duration&&(g.duration=Bt(g.duration)),g.repeatDelay&&(g.repeatDelay=Bt(g.repeatDelay)),g.from!==void 0&&(g.keyframes[0]=g.from);let y=!1;if((g.type===!1||g.duration===0&&!g.repeatDelay)&&(Fa(g),g.delay===0&&(y=!0)),(on.instantAnimations||on.skipAnimations||u!=null&&u.shouldSkipAnimations)&&(y=!0,Fa(g),g.delay=0),g.allowFlatten=!p.type&&!p.ease,y&&!f&&r.get()!==void 0){const x=Dy(g.keyframes,p);if(x!==void 0){be.update(()=>{g.onUpdate(x),g.onComplete()});return}}return p.isSync?new _u(g):new wy(g)};function Qf(n){const r=[{},{}];return n==null||n.values.forEach((o,l)=>{r[0][l]=o.get(),r[1][l]=o.getVelocity()}),r}function xu(n,r,o,l){if(typeof r=="function"){const[u,f]=Qf(l);r=r(o!==void 0?o:n.custom,u,f)}if(typeof r=="string"&&(r=n.variants&&n.variants[r]),typeof r=="function"){const[u,f]=Qf(l);r=r(o!==void 0?o:n.custom,u,f)}return r}function Dr(n,r,o){const l=n.getProps();return xu(l,r,o!==void 0?o:l.custom,n)}const Ym=new Set(["width","height","top","left","right","bottom",...Ar]),Xf=30,Ry=n=>!isNaN(parseFloat(n));class Ay{constructor(r,o={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=l=>{var f;const u=lt.now();if(this.updatedAt!==u&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(l),this.current!==this.prev&&((f=this.events.change)==null||f.notify(this.current),this.dependents))for(const d of this.dependents)d.dirty()},this.hasAnimated=!1,this.setCurrent(r),this.owner=o.owner}setCurrent(r){this.current=r,this.updatedAt=lt.now(),this.canTrackVelocity===null&&r!==void 0&&(this.canTrackVelocity=Ry(this.current))}setPrevFrameValue(r=this.current){this.prevFrameValue=r,this.prevUpdatedAt=this.updatedAt}onChange(r){return this.on("change",r)}on(r,o){this.events[r]||(this.events[r]=new iu);const l=this.events[r].add(o);return r==="change"?()=>{l(),be.read(()=>{this.events.change.getSize()||this.stop()})}:l}clearListeners(){for(const r in this.events)this.events[r].clear()}attach(r,o){this.passiveEffect=r,this.stopPassiveEffect=o}set(r){this.passiveEffect?this.passiveEffect(r,this.updateAndNotify):this.updateAndNotify(r)}setWithVelocity(r,o,l){this.set(o),this.prev=void 0,this.prevFrameValue=r,this.prevUpdatedAt=this.updatedAt-l}jump(r,o=!0){this.updateAndNotify(r),this.prev=r,this.prevUpdatedAt=this.prevFrameValue=void 0,o&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var r;(r=this.events.change)==null||r.notify(this.current)}addDependent(r){this.dependents||(this.dependents=new Set),this.dependents.add(r)}removeDependent(r){this.dependents&&this.dependents.delete(r)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const r=lt.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||r-this.updatedAt>Xf)return 0;const o=Math.min(this.updatedAt-this.prevUpdatedAt,Xf);return am(parseFloat(this.current)-parseFloat(this.prevFrameValue),o)}start(r){return this.stop(),new Promise(o=>{this.hasAnimated=!0,this.animation=r(o),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var r,o;(r=this.dependents)==null||r.clear(),(o=this.events.destroy)==null||o.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Lr(n,r){return new Ay(n,r)}const Ua=n=>Array.isArray(n);function Iy(n,r,o){n.hasValue(r)?n.getValue(r).set(o):n.addValue(r,Lr(o))}function jy(n){return Ua(n)?n[n.length-1]||0:n}function Ny(n,r){const o=Dr(n,r);let{transitionEnd:l={},transition:u={},...f}=o||{};f={...f,...l};for(const d in f){const p=jy(f[d]);Iy(n,d,p)}}const st=n=>!!(n&&n.getVelocity);function Vy(n){return!!(st(n)&&n.add)}function Ya(n,r){const o=n.getValue("willChange");if(Vy(o))return o.add(r);if(!o&&on.WillChange){const l=new on.WillChange("auto");n.addValue("willChange",l),l.add(r)}}function wu(n){return n.replace(/([A-Z])/g,r=>`-${r.toLowerCase()}`)}const zy="framerAppearId",Wm="data-"+wu(zy);function Hm(n){return n.props[Wm]}function Oy({protectedKeys:n,needsAnimating:r},o){const l=n.hasOwnProperty(o)&&r[o]!==!0;return r[o]=!1,l}function Qm(n,r,{delay:o=0,transitionOverride:l,type:u}={}){let{transition:f,transitionEnd:d,...p}=r;const h=n.getDefaultTransition();f=f?Um(f,h):h;const _=f==null?void 0:f.reduceMotion;l&&(f=l);const g=[],y=u&&n.animationState&&n.animationState.getState()[u];for(const x in p){const b=n.getValue(x,n.latestValues[x]??null),T=p[x];if(T===void 0||y&&Oy(y,x))continue;const R={delay:o,...yu(f||{},x)},L=b.get();if(L!==void 0&&!b.isAnimating&&!Array.isArray(T)&&T===L&&!R.velocity)continue;let j=!1;if(window.MotionHandoffAnimation){const B=Hm(n);if(B){const U=window.MotionHandoffAnimation(B,x,be);U!==null&&(R.startTime=U,j=!0)}}Ya(n,x);const I=_??n.shouldReduceMotion;b.start(vu(x,b,T,I&&Ym.has(x)?{type:!1}:R,n,j));const A=b.animation;A&&g.push(A)}if(d){const x=()=>be.update(()=>{d&&Ny(n,d)});g.length?Promise.all(g).then(x):x()}return g}function Wa(n,r,o={}){var h;const l=Dr(n,r,o.type==="exit"?(h=n.presenceContext)==null?void 0:h.custom:void 0);let{transition:u=n.getDefaultTransition()||{}}=l||{};o.transitionOverride&&(u=o.transitionOverride);const f=l?()=>Promise.all(Qm(n,l,o)):()=>Promise.resolve(),d=n.variantChildren&&n.variantChildren.size?(_=0)=>{const{delayChildren:g=0,staggerChildren:y,staggerDirection:x}=u;return By(n,r,_,g,y,x,o)}:()=>Promise.resolve(),{when:p}=u;if(p){const[_,g]=p==="beforeChildren"?[f,d]:[d,f];return _().then(()=>g())}else return Promise.all([f(),d(o.delay)])}function By(n,r,o=0,l=0,u=0,f=1,d){const p=[];for(const h of n.variantChildren)h.notify("AnimationStart",r),p.push(Wa(h,r,{...d,delay:o+(typeof l=="function"?0:l)+Bm(n.variantChildren,h,l,u,f)}).then(()=>h.notify("AnimationComplete",r)));return Promise.all(p)}function Fy(n,r,o={}){n.notify("AnimationStart",r);let l;if(Array.isArray(r)){const u=r.map(f=>Wa(n,f,o));l=Promise.all(u)}else if(typeof r=="string")l=Wa(n,r,o);else{const u=typeof r=="function"?Dr(n,r,o.custom):r;l=Promise.all(Qm(n,u,o))}return l.then(()=>{n.notify("AnimationComplete",r)})}const Uy={test:n=>n==="auto",parse:n=>n},Xm=n=>r=>r.test(n),$m=[Rr,J,$t,Tn,gg,_g,Uy],$f=n=>$m.find(Xm(n));function Yy(n){return typeof n=="number"?n===0:n!==null?n==="none"||n==="0"||im(n):!0}const Wy=new Set(["brightness","contrast","saturate","opacity"]);function Hy(n){const[r,o]=n.slice(0,-1).split("(");if(r==="drop-shadow")return n;const[l]=o.match(cu)||[];if(!l)return n;const u=o.replace(l,"");let f=Wy.has(r)?1:0;return l!==o&&(f*=100),r+"("+f+u+")"}const Qy=/\b([a-z-]*)\(.*?\)/gu,Ha={...Ft,getAnimatableNone:n=>{const r=n.match(Qy);return r?r.map(Hy).join(" "):n}},Qa={...Ft,getAnimatableNone:n=>{const r=Ft.parse(n);return Ft.createTransformer(n)(r.map(l=>typeof l=="number"?0:typeof l=="object"?{...l,alpha:1}:l))}},Kf={...Rr,transform:Math.round},Xy={rotate:Tn,rotateX:Tn,rotateY:Tn,rotateZ:Tn,scale:$o,scaleX:$o,scaleY:$o,scaleZ:$o,skew:Tn,skewX:Tn,skewY:Tn,distance:J,translateX:J,translateY:J,translateZ:J,x:J,y:J,z:J,perspective:J,transformPerspective:J,opacity:Ms,originX:jf,originY:jf,originZ:J},Su={borderWidth:J,borderTopWidth:J,borderRightWidth:J,borderBottomWidth:J,borderLeftWidth:J,borderRadius:J,borderTopLeftRadius:J,borderTopRightRadius:J,borderBottomRightRadius:J,borderBottomLeftRadius:J,width:J,maxWidth:J,height:J,maxHeight:J,top:J,right:J,bottom:J,left:J,inset:J,insetBlock:J,insetBlockStart:J,insetBlockEnd:J,insetInline:J,insetInlineStart:J,insetInlineEnd:J,padding:J,paddingTop:J,paddingRight:J,paddingBottom:J,paddingLeft:J,paddingBlock:J,paddingBlockStart:J,paddingBlockEnd:J,paddingInline:J,paddingInlineStart:J,paddingInlineEnd:J,margin:J,marginTop:J,marginRight:J,marginBottom:J,marginLeft:J,marginBlock:J,marginBlockStart:J,marginBlockEnd:J,marginInline:J,marginInlineStart:J,marginInlineEnd:J,fontSize:J,backgroundPositionX:J,backgroundPositionY:J,...Xy,zIndex:Kf,fillOpacity:Ms,strokeOpacity:Ms,numOctaves:Kf},$y={...Su,color:Fe,backgroundColor:Fe,outlineColor:Fe,fill:Fe,stroke:Fe,borderColor:Fe,borderTopColor:Fe,borderRightColor:Fe,borderBottomColor:Fe,borderLeftColor:Fe,filter:Ha,WebkitFilter:Ha,mask:Qa,WebkitMask:Qa},Km=n=>$y[n],Ky=new Set([Ha,Qa]);function Gm(n,r){let o=Km(n);return Ky.has(o)||(o=Ft),o.getAnimatableNone?o.getAnimatableNone(r):void 0}const Gy=new Set(["auto","none","0"]);function Zy(n,r,o){let l=0,u;for(;l<n.length&&!u;){const f=n[l];typeof f=="string"&&!Gy.has(f)&&Ds(f).values.length&&(u=n[l]),l++}if(u&&o)for(const f of r)n[f]=Gm(o,u)}class Jy extends gu{constructor(r,o,l,u,f){super(r,o,l,u,f,!0)}readKeyframes(){const{unresolvedKeyframes:r,element:o,name:l}=this;if(!o||!o.current)return;super.readKeyframes();for(let g=0;g<r.length;g++){let y=r[g];if(typeof y=="string"&&(y=y.trim(),uu(y))){const x=Fm(y,o.current);x!==void 0&&(r[g]=x),g===r.length-1&&(this.finalKeyframe=y)}}if(this.resolveNoneKeyframes(),!Ym.has(l)||r.length!==2)return;const[u,f]=r,d=$f(u),p=$f(f),h=If(u),_=If(f);if(h!==_&&Mn[l]){this.needsMeasurement=!0;return}if(d!==p)if(Yf(d)&&Yf(p))for(let g=0;g<r.length;g++){const y=r[g];typeof y=="string"&&(r[g]=parseFloat(y))}else Mn[l]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:r,name:o}=this,l=[];for(let u=0;u<r.length;u++)(r[u]===null||Yy(r[u]))&&l.push(u);l.length&&Zy(r,l,o)}measureInitialState(){const{element:r,unresolvedKeyframes:o,name:l}=this;if(!r||!r.current)return;l==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Mn[l](r.measureViewportBox(),window.getComputedStyle(r.current)),o[0]=this.measuredOrigin;const u=o[o.length-1];u!==void 0&&r.getValue(l,u).jump(u,!1)}measureEndState(){var p;const{element:r,name:o,unresolvedKeyframes:l}=this;if(!r||!r.current)return;const u=r.getValue(o);u&&u.jump(this.measuredOrigin,!1);const f=l.length-1,d=l[f];l[f]=Mn[o](r.measureViewportBox(),window.getComputedStyle(r.current)),d!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=d),(p=this.removedTransforms)!=null&&p.length&&this.removedTransforms.forEach(([h,_])=>{r.getValue(h).set(_)}),this.resolveNoneKeyframes()}}const qy=new Set(["opacity","clipPath","filter","transform"]);function Zm(n,r,o){if(n==null)return[];if(n instanceof EventTarget)return[n];if(typeof n=="string"){let l=document;const u=(o==null?void 0:o[n])??l.querySelectorAll(n);return u?Array.from(u):[]}return Array.from(n).filter(l=>l!=null)}const Jm=(n,r)=>r&&typeof n=="number"?r.transform(n):n;function Xa(n){return om(n)&&"offsetHeight"in n}const{schedule:ku}=vm(queueMicrotask,!1),Ot={x:!1,y:!1};function qm(){return Ot.x||Ot.y}function e1(n){return n==="x"||n==="y"?Ot[n]?null:(Ot[n]=!0,()=>{Ot[n]=!1}):Ot.x||Ot.y?null:(Ot.x=Ot.y=!0,()=>{Ot.x=Ot.y=!1})}function eh(n,r){const o=Zm(n),l=new AbortController,u={passive:!0,...r,signal:l.signal};return[o,u,()=>l.abort()]}function t1(n){return!(n.pointerType==="touch"||qm())}function n1(n,r,o={}){const[l,u,f]=eh(n,o);return l.forEach(d=>{let p=!1,h=!1,_;const g=()=>{d.removeEventListener("pointerleave",T)},y=L=>{_&&(_(L),_=void 0),g()},x=L=>{p=!1,window.removeEventListener("pointerup",x),window.removeEventListener("pointercancel",x),h&&(h=!1,y(L))},b=()=>{p=!0,window.addEventListener("pointerup",x,u),window.addEventListener("pointercancel",x,u)},T=L=>{if(L.pointerType!=="touch"){if(p){h=!0;return}y(L)}},R=L=>{if(!t1(L))return;h=!1;const j=r(d,L);typeof j=="function"&&(_=j,d.addEventListener("pointerleave",T,u))};d.addEventListener("pointerenter",R,u),d.addEventListener("pointerdown",b,u)}),f}const th=(n,r)=>r?n===r?!0:th(n,r.parentElement):!1,bu=n=>n.pointerType==="mouse"?typeof n.button!="number"||n.button<=0:n.isPrimary!==!1,r1=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function s1(n){return r1.has(n.tagName)||n.isContentEditable===!0}const o1=new Set(["INPUT","SELECT","TEXTAREA"]);function i1(n){return o1.has(n.tagName)||n.isContentEditable===!0}const Jo=new WeakSet;function Gf(n){return r=>{r.key==="Enter"&&n(r)}}function _a(n,r){n.dispatchEvent(new PointerEvent("pointer"+r,{isPrimary:!0,bubbles:!0}))}const l1=(n,r)=>{const o=n.currentTarget;if(!o)return;const l=Gf(()=>{if(Jo.has(o))return;_a(o,"down");const u=Gf(()=>{_a(o,"up")}),f=()=>_a(o,"cancel");o.addEventListener("keyup",u,r),o.addEventListener("blur",f,r)});o.addEventListener("keydown",l,r),o.addEventListener("blur",()=>o.removeEventListener("keydown",l),r)};function Zf(n){return bu(n)&&!qm()}const Jf=new WeakSet;function a1(n,r,o={}){const[l,u,f]=eh(n,o),d=p=>{const h=p.currentTarget;if(!Zf(p)||Jf.has(p))return;Jo.add(h),o.stopPropagation&&Jf.add(p);const _=r(h,p),g=(b,T)=>{window.removeEventListener("pointerup",y),window.removeEventListener("pointercancel",x),Jo.has(h)&&Jo.delete(h),Zf(b)&&typeof _=="function"&&_(b,{success:T})},y=b=>{g(b,h===window||h===document||o.useGlobalTarget||th(h,b.target))},x=b=>{g(b,!1)};window.addEventListener("pointerup",y,u),window.addEventListener("pointercancel",x,u)};return l.forEach(p=>{(o.useGlobalTarget?window:p).addEventListener("pointerdown",d,u),Xa(p)&&(p.addEventListener("focus",_=>l1(_,u)),!s1(p)&&!p.hasAttribute("tabindex")&&(p.tabIndex=0))}),f}function Cu(n){return om(n)&&"ownerSVGElement"in n}const qo=new WeakMap;let Pn;const nh=(n,r,o)=>(l,u)=>u&&u[0]?u[0][n+"Size"]:Cu(l)&&"getBBox"in l?l.getBBox()[r]:l[o],u1=nh("inline","width","offsetWidth"),c1=nh("block","height","offsetHeight");function d1({target:n,borderBoxSize:r}){var o;(o=qo.get(n))==null||o.forEach(l=>{l(n,{get width(){return u1(n,r)},get height(){return c1(n,r)}})})}function f1(n){n.forEach(d1)}function p1(){typeof ResizeObserver>"u"||(Pn=new ResizeObserver(f1))}function m1(n,r){Pn||p1();const o=Zm(n);return o.forEach(l=>{let u=qo.get(l);u||(u=new Set,qo.set(l,u)),u.add(r),Pn==null||Pn.observe(l)}),()=>{o.forEach(l=>{const u=qo.get(l);u==null||u.delete(r),u!=null&&u.size||Pn==null||Pn.unobserve(l)})}}const ei=new Set;let Tr;function h1(){Tr=()=>{const n={get width(){return window.innerWidth},get height(){return window.innerHeight}};ei.forEach(r=>r(n))},window.addEventListener("resize",Tr)}function _1(n){return ei.add(n),Tr||h1(),()=>{ei.delete(n),!ei.size&&typeof Tr=="function"&&(window.removeEventListener("resize",Tr),Tr=void 0)}}function qf(n,r){return typeof n=="function"?_1(n):m1(n,r)}function g1(n){return Cu(n)&&n.tagName==="svg"}const y1=[...$m,Fe,Ft],v1=n=>y1.find(Xm(n)),ep=()=>({translate:0,scale:1,origin:0,originPoint:0}),Pr=()=>({x:ep(),y:ep()}),tp=()=>({min:0,max:0}),We=()=>({x:tp(),y:tp()}),x1=new WeakMap;function fi(n){return n!==null&&typeof n=="object"&&typeof n.start=="function"}function Ls(n){return typeof n=="string"||Array.isArray(n)}const Tu=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Pu=["initial",...Tu];function pi(n){return fi(n.animate)||Pu.some(r=>Ls(n[r]))}function rh(n){return!!(pi(n)||n.variants)}function w1(n,r,o){for(const l in r){const u=r[l],f=o[l];if(st(u))n.addValue(l,u);else if(st(f))n.addValue(l,Lr(u,{owner:n}));else if(f!==u)if(n.hasValue(l)){const d=n.getValue(l);d.liveStyle===!0?d.jump(u):d.hasAnimated||d.set(u)}else{const d=n.getStaticValue(l);n.addValue(l,Lr(d!==void 0?d:u,{owner:n}))}}for(const l in o)r[l]===void 0&&n.removeValue(l);return r}const $a={current:null},sh={current:!1},S1=typeof window<"u";function k1(){if(sh.current=!0,!!S1)if(window.matchMedia){const n=window.matchMedia("(prefers-reduced-motion)"),r=()=>$a.current=n.matches;n.addEventListener("change",r),r()}else $a.current=!1}const np=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let li={};function oh(n){li=n}function b1(){return li}class C1{scrapeMotionValuesFromProps(r,o,l){return{}}constructor({parent:r,props:o,presenceContext:l,reducedMotionConfig:u,skipAnimations:f,blockInitialAnimation:d,visualState:p},h={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=gu,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const b=lt.now();this.renderScheduledAt<b&&(this.renderScheduledAt=b,be.render(this.render,!1,!0))};const{latestValues:_,renderState:g}=p;this.latestValues=_,this.baseTarget={..._},this.initialValues=o.initial?{..._}:{},this.renderState=g,this.parent=r,this.props=o,this.presenceContext=l,this.depth=r?r.depth+1:0,this.reducedMotionConfig=u,this.skipAnimationsConfig=f,this.options=h,this.blockInitialAnimation=!!d,this.isControllingVariants=pi(o),this.isVariantNode=rh(o),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(r&&r.current);const{willChange:y,...x}=this.scrapeMotionValuesFromProps(o,{},this);for(const b in x){const T=x[b];_[b]!==void 0&&st(T)&&T.set(_[b])}}mount(r){var o,l;if(this.hasBeenMounted)for(const u in this.initialValues)(o=this.values.get(u))==null||o.jump(this.initialValues[u]),this.latestValues[u]=this.initialValues[u];this.current=r,x1.set(r,this),this.projection&&!this.projection.instance&&this.projection.mount(r),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((u,f)=>this.bindToMotionValue(f,u)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(sh.current||k1(),this.shouldReduceMotion=$a.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,(l=this.parent)==null||l.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){var r;this.projection&&this.projection.unmount(),Dn(this.notifyUpdate),Dn(this.render),this.valueSubscriptions.forEach(o=>o()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(r=this.parent)==null||r.removeChild(this);for(const o in this.events)this.events[o].clear();for(const o in this.features){const l=this.features[o];l&&(l.unmount(),l.isMounted=!1)}this.current=null}addChild(r){this.children.add(r),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(r)}removeChild(r){this.children.delete(r),this.enteringChildren&&this.enteringChildren.delete(r)}bindToMotionValue(r,o){if(this.valueSubscriptions.has(r)&&this.valueSubscriptions.get(r)(),o.accelerate&&qy.has(r)&&this.current instanceof HTMLElement){const{factory:d,keyframes:p,times:h,ease:_,duration:g}=o.accelerate,y=new zm({element:this.current,name:r,keyframes:p,times:h,ease:_,duration:Bt(g)}),x=d(y);this.valueSubscriptions.set(r,()=>{x(),y.cancel()});return}const l=Ir.has(r);l&&this.onBindTransform&&this.onBindTransform();const u=o.on("change",d=>{this.latestValues[r]=d,this.props.onUpdate&&be.preRender(this.notifyUpdate),l&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let f;typeof window<"u"&&window.MotionCheckAppearSync&&(f=window.MotionCheckAppearSync(this,r,o)),this.valueSubscriptions.set(r,()=>{u(),f&&f(),o.owner&&o.stop()})}sortNodePosition(r){return!this.current||!this.sortInstanceNodePosition||this.type!==r.type?0:this.sortInstanceNodePosition(this.current,r.current)}updateFeatures(){let r="animation";for(r in li){const o=li[r];if(!o)continue;const{isEnabled:l,Feature:u}=o;if(!this.features[r]&&u&&l(this.props)&&(this.features[r]=new u(this)),this.features[r]){const f=this.features[r];f.isMounted?f.update():(f.mount(),f.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):We()}getStaticValue(r){return this.latestValues[r]}setStaticValue(r,o){this.latestValues[r]=o}update(r,o){(r.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=r,this.prevPresenceContext=this.presenceContext,this.presenceContext=o;for(let l=0;l<np.length;l++){const u=np[l];this.propEventSubscriptions[u]&&(this.propEventSubscriptions[u](),delete this.propEventSubscriptions[u]);const f="on"+u,d=r[f];d&&(this.propEventSubscriptions[u]=this.on(u,d))}this.prevMotionValues=w1(this,this.scrapeMotionValuesFromProps(r,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(r){return this.props.variants?this.props.variants[r]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(r){const o=this.getClosestVariantNode();if(o)return o.variantChildren&&o.variantChildren.add(r),()=>o.variantChildren.delete(r)}addValue(r,o){const l=this.values.get(r);o!==l&&(l&&this.removeValue(r),this.bindToMotionValue(r,o),this.values.set(r,o),this.latestValues[r]=o.get())}removeValue(r){this.values.delete(r);const o=this.valueSubscriptions.get(r);o&&(o(),this.valueSubscriptions.delete(r)),delete this.latestValues[r],this.removeValueFromRenderState(r,this.renderState)}hasValue(r){return this.values.has(r)}getValue(r,o){if(this.props.values&&this.props.values[r])return this.props.values[r];let l=this.values.get(r);return l===void 0&&o!==void 0&&(l=Lr(o===null?void 0:o,{owner:this}),this.addValue(r,l)),l}readValue(r,o){let l=this.latestValues[r]!==void 0||!this.current?this.latestValues[r]:this.getBaseTargetFromProps(this.props,r)??this.readValueFromInstance(this.current,r,this.options);return l!=null&&(typeof l=="string"&&(sm(l)||im(l))?l=parseFloat(l):!v1(l)&&Ft.test(o)&&(l=Gm(r,o)),this.setBaseTarget(r,st(l)?l.get():l)),st(l)?l.get():l}setBaseTarget(r,o){this.baseTarget[r]=o}getBaseTarget(r){var f;const{initial:o}=this.props;let l;if(typeof o=="string"||typeof o=="object"){const d=xu(this.props,o,(f=this.presenceContext)==null?void 0:f.custom);d&&(l=d[r])}if(o&&l!==void 0)return l;const u=this.getBaseTargetFromProps(this.props,r);return u!==void 0&&!st(u)?u:this.initialValues[r]!==void 0&&l===void 0?void 0:this.baseTarget[r]}on(r,o){return this.events[r]||(this.events[r]=new iu),this.events[r].add(o)}notify(r,...o){this.events[r]&&this.events[r].notify(...o)}scheduleRenderMicrotask(){ku.render(this.render)}}class ih extends C1{constructor(){super(...arguments),this.KeyframeResolver=Jy}sortInstanceNodePosition(r,o){return r.compareDocumentPosition(o)&2?1:-1}getBaseTargetFromProps(r,o){const l=r.style;return l?l[o]:void 0}removeValueFromRenderState(r,{vars:o,style:l}){delete o[r],delete l[r]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:r}=this.props;st(r)&&(this.childSubscription=r.on("change",o=>{this.current&&(this.current.textContent=`${o}`)}))}}class Ln{constructor(r){this.isMounted=!1,this.node=r}update(){}}function lh({top:n,left:r,right:o,bottom:l}){return{x:{min:r,max:o},y:{min:n,max:l}}}function T1({x:n,y:r}){return{top:r.min,right:n.max,bottom:r.max,left:n.min}}function P1(n,r){if(!r)return n;const o=r({x:n.left,y:n.top}),l=r({x:n.right,y:n.bottom});return{top:o.y,left:o.x,bottom:l.y,right:l.x}}function ga(n){return n===void 0||n===1}function Ka({scale:n,scaleX:r,scaleY:o}){return!ga(n)||!ga(r)||!ga(o)}function Xn(n){return Ka(n)||ah(n)||n.z||n.rotate||n.rotateX||n.rotateY||n.skewX||n.skewY}function ah(n){return rp(n.x)||rp(n.y)}function rp(n){return n&&n!=="0%"}function ai(n,r,o){const l=n-o,u=r*l;return o+u}function sp(n,r,o,l,u){return u!==void 0&&(n=ai(n,u,l)),ai(n,o,l)+r}function Ga(n,r=0,o=1,l,u){n.min=sp(n.min,r,o,l,u),n.max=sp(n.max,r,o,l,u)}function uh(n,{x:r,y:o}){Ga(n.x,r.translate,r.scale,r.originPoint),Ga(n.y,o.translate,o.scale,o.originPoint)}const op=.999999999999,ip=1.0000000000001;function E1(n,r,o,l=!1){const u=o.length;if(!u)return;r.x=r.y=1;let f,d;for(let p=0;p<u;p++){f=o[p],d=f.projectionDelta;const{visualElement:h}=f.options;h&&h.props.style&&h.props.style.display==="contents"||(l&&f.options.layoutScroll&&f.scroll&&f!==f.root&&Mr(n,{x:-f.scroll.offset.x,y:-f.scroll.offset.y}),d&&(r.x*=d.x.scale,r.y*=d.y.scale,uh(n,d)),l&&Xn(f.latestValues)&&Mr(n,f.latestValues))}r.x<ip&&r.x>op&&(r.x=1),r.y<ip&&r.y>op&&(r.y=1)}function Er(n,r){n.min=n.min+r,n.max=n.max+r}function lp(n,r,o,l,u=.5){const f=je(n.min,n.max,u);Ga(n,r,o,f,l)}function ap(n,r){return typeof n=="string"?parseFloat(n)/100*(r.max-r.min):n}function Mr(n,r){lp(n.x,ap(r.x,n.x),r.scaleX,r.scale,r.originX),lp(n.y,ap(r.y,n.y),r.scaleY,r.scale,r.originY)}function ch(n,r){return lh(P1(n.getBoundingClientRect(),r))}function M1(n,r,o){const l=ch(n,o),{scroll:u}=r;return u&&(Er(l.x,u.offset.x),Er(l.y,u.offset.y)),l}const D1={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},L1=Ar.length;function R1(n,r,o){let l="",u=!0;for(let f=0;f<L1;f++){const d=Ar[f],p=n[d];if(p===void 0)continue;let h=!0;if(typeof p=="number")h=p===(d.startsWith("scale")?1:0);else{const _=parseFloat(p);h=d.startsWith("scale")?_===1:_===0}if(!h||o){const _=Jm(p,Su[d]);if(!h){u=!1;const g=D1[d]||d;l+=`${g}(${_}) `}o&&(r[d]=_)}}return l=l.trim(),o?l=o(r,u?"":l):u&&(l="none"),l}function Eu(n,r,o){const{style:l,vars:u,transformOrigin:f}=n;let d=!1,p=!1;for(const h in r){const _=r[h];if(Ir.has(h)){d=!0;continue}else if(wm(h)){u[h]=_;continue}else{const g=Jm(_,Su[h]);h.startsWith("origin")?(p=!0,f[h]=g):l[h]=g}}if(r.transform||(d||o?l.transform=R1(r,n.transform,o):l.transform&&(l.transform="none")),p){const{originX:h="50%",originY:_="50%",originZ:g=0}=f;l.transformOrigin=`${h} ${_} ${g}`}}function dh(n,{style:r,vars:o},l,u){const f=n.style;let d;for(d in r)f[d]=r[d];u==null||u.applyProjectionStyles(f,l);for(d in o)f.setProperty(d,o[d])}function up(n,r){return r.max===r.min?0:n/(r.max-r.min)*100}const ws={correct:(n,r)=>{if(!r.target)return n;if(typeof n=="string")if(J.test(n))n=parseFloat(n);else return n;const o=up(n,r.target.x),l=up(n,r.target.y);return`${o}% ${l}%`}},A1={correct:(n,{treeScale:r,projectionDelta:o})=>{const l=n,u=Ft.parse(n);if(u.length>5)return l;const f=Ft.createTransformer(n),d=typeof u[0]!="number"?1:0,p=o.x.scale*r.x,h=o.y.scale*r.y;u[0+d]/=p,u[1+d]/=h;const _=je(p,h,.5);return typeof u[2+d]=="number"&&(u[2+d]/=_),typeof u[3+d]=="number"&&(u[3+d]/=_),f(u)}},Za={borderRadius:{...ws,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:ws,borderTopRightRadius:ws,borderBottomLeftRadius:ws,borderBottomRightRadius:ws,boxShadow:A1};function fh(n,{layout:r,layoutId:o}){return Ir.has(n)||n.startsWith("origin")||(r||o!==void 0)&&(!!Za[n]||n==="opacity")}function Mu(n,r,o){var d;const l=n.style,u=r==null?void 0:r.style,f={};if(!l)return f;for(const p in l)(st(l[p])||u&&st(u[p])||fh(p,n)||((d=o==null?void 0:o.getValue(p))==null?void 0:d.liveStyle)!==void 0)&&(f[p]=l[p]);return f}function I1(n){return window.getComputedStyle(n)}class j1 extends ih{constructor(){super(...arguments),this.type="html",this.renderInstance=dh}readValueFromInstance(r,o){var l;if(Ir.has(o))return(l=this.projection)!=null&&l.isProjecting?Na(o):ey(r,o);{const u=I1(r),f=(wm(o)?u.getPropertyValue(o):u[o])||0;return typeof f=="string"?f.trim():f}}measureInstanceViewportBox(r,{transformPagePoint:o}){return ch(r,o)}build(r,o,l){Eu(r,o,l.transformTemplate)}scrapeMotionValuesFromProps(r,o,l){return Mu(r,o,l)}}const N1={offset:"stroke-dashoffset",array:"stroke-dasharray"},V1={offset:"strokeDashoffset",array:"strokeDasharray"};function z1(n,r,o=1,l=0,u=!0){n.pathLength=1;const f=u?N1:V1;n[f.offset]=`${-l}`,n[f.array]=`${r} ${o}`}const O1=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function ph(n,{attrX:r,attrY:o,attrScale:l,pathLength:u,pathSpacing:f=1,pathOffset:d=0,...p},h,_,g){if(Eu(n,p,_),h){n.style.viewBox&&(n.attrs.viewBox=n.style.viewBox);return}n.attrs=n.style,n.style={};const{attrs:y,style:x}=n;y.transform&&(x.transform=y.transform,delete y.transform),(x.transform||y.transformOrigin)&&(x.transformOrigin=y.transformOrigin??"50% 50%",delete y.transformOrigin),x.transform&&(x.transformBox=(g==null?void 0:g.transformBox)??"fill-box",delete y.transformBox);for(const b of O1)y[b]!==void 0&&(x[b]=y[b],delete y[b]);r!==void 0&&(y.x=r),o!==void 0&&(y.y=o),l!==void 0&&(y.scale=l),u!==void 0&&z1(y,u,f,d,!1)}const mh=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),hh=n=>typeof n=="string"&&n.toLowerCase()==="svg";function B1(n,r,o,l){dh(n,r,void 0,l);for(const u in r.attrs)n.setAttribute(mh.has(u)?u:wu(u),r.attrs[u])}function _h(n,r,o){const l=Mu(n,r,o);for(const u in n)if(st(n[u])||st(r[u])){const f=Ar.indexOf(u)!==-1?"attr"+u.charAt(0).toUpperCase()+u.substring(1):u;l[f]=n[u]}return l}class F1 extends ih{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=We}getBaseTargetFromProps(r,o){return r[o]}readValueFromInstance(r,o){if(Ir.has(o)){const l=Km(o);return l&&l.default||0}return o=mh.has(o)?o:wu(o),r.getAttribute(o)}scrapeMotionValuesFromProps(r,o,l){return _h(r,o,l)}build(r,o,l){ph(r,o,this.isSVGTag,l.transformTemplate,l.style)}renderInstance(r,o,l,u){B1(r,o,l,u)}mount(r){this.isSVGTag=hh(r.tagName),super.mount(r)}}const U1=Pu.length;function gh(n){if(!n)return;if(!n.isControllingVariants){const o=n.parent?gh(n.parent)||{}:{};return n.props.initial!==void 0&&(o.initial=n.props.initial),o}const r={};for(let o=0;o<U1;o++){const l=Pu[o],u=n.props[l];(Ls(u)||u===!1)&&(r[l]=u)}return r}function yh(n,r){if(!Array.isArray(r))return!1;const o=r.length;if(o!==n.length)return!1;for(let l=0;l<o;l++)if(r[l]!==n[l])return!1;return!0}const Y1=[...Tu].reverse(),W1=Tu.length;function H1(n){return r=>Promise.all(r.map(({animation:o,options:l})=>Fy(n,o,l)))}function Q1(n){let r=H1(n),o=cp(),l=!0,u=!1;const f=_=>(g,y)=>{var b;const x=Dr(n,y,_==="exit"?(b=n.presenceContext)==null?void 0:b.custom:void 0);if(x){const{transition:T,transitionEnd:R,...L}=x;g={...g,...L,...R}}return g};function d(_){r=_(n)}function p(_){const{props:g}=n,y=gh(n.parent)||{},x=[],b=new Set;let T={},R=1/0;for(let j=0;j<W1;j++){const I=Y1[j],A=o[I],B=g[I]!==void 0?g[I]:y[I],U=Ls(B),K=I===_?A.isActive:null;K===!1&&(R=j);let ee=B===y[I]&&B!==g[I]&&U;if(ee&&(l||u)&&n.manuallyAnimateOnMount&&(ee=!1),A.protectedKeys={...T},!A.isActive&&K===null||!B&&!A.prevProp||fi(B)||typeof B=="boolean")continue;if(I==="exit"&&A.isActive&&K!==!0){A.prevResolvedValues&&(T={...T,...A.prevResolvedValues});continue}const W=X1(A.prevProp,B);let $=W||I===_&&A.isActive&&!ee&&U||j>R&&U,oe=!1;const ce=Array.isArray(B)?B:[B];let fe=ce.reduce(f(I),{});K===!1&&(fe={});const{prevResolvedValues:ie={}}=A,Se={...ie,...fe},Ce=z=>{$=!0,b.has(z)&&(oe=!0,b.delete(z)),A.needsAnimating[z]=!0;const H=n.getValue(z);H&&(H.liveStyle=!1)};for(const z in Se){const H=fe[z],Q=ie[z];if(T.hasOwnProperty(z))continue;let k=!1;Ua(H)&&Ua(Q)?k=!yh(H,Q):k=H!==Q,k?H!=null?Ce(z):b.add(z):H!==void 0&&b.has(z)?Ce(z):A.protectedKeys[z]=!0}A.prevProp=B,A.prevResolvedValues=fe,A.isActive&&(T={...T,...fe}),(l||u)&&n.blockInitialAnimation&&($=!1);const Pe=ee&&W;$&&(!Pe||oe)&&x.push(...ce.map(z=>{const H={type:I};if(typeof z=="string"&&(l||u)&&!Pe&&n.manuallyAnimateOnMount&&n.parent){const{parent:Q}=n,k=Dr(Q,z);if(Q.enteringChildren&&k){const{delayChildren:N}=k.transition||{};H.delay=Bm(Q.enteringChildren,n,N)}}return{animation:z,options:H}}))}if(b.size){const j={};if(typeof g.initial!="boolean"){const I=Dr(n,Array.isArray(g.initial)?g.initial[0]:g.initial);I&&I.transition&&(j.transition=I.transition)}b.forEach(I=>{const A=n.getBaseTarget(I),B=n.getValue(I);B&&(B.liveStyle=!0),j[I]=A??null}),x.push({animation:j})}let L=!!x.length;return l&&(g.initial===!1||g.initial===g.animate)&&!n.manuallyAnimateOnMount&&(L=!1),l=!1,u=!1,L?r(x):Promise.resolve()}function h(_,g){var x;if(o[_].isActive===g)return Promise.resolve();(x=n.variantChildren)==null||x.forEach(b=>{var T;return(T=b.animationState)==null?void 0:T.setActive(_,g)}),o[_].isActive=g;const y=p(_);for(const b in o)o[b].protectedKeys={};return y}return{animateChanges:p,setActive:h,setAnimateFunction:d,getState:()=>o,reset:()=>{o=cp(),u=!0}}}function X1(n,r){return typeof r=="string"?r!==n:Array.isArray(r)?!yh(r,n):!1}function Hn(n=!1){return{isActive:n,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function cp(){return{animate:Hn(!0),whileInView:Hn(),whileHover:Hn(),whileTap:Hn(),whileDrag:Hn(),whileFocus:Hn(),exit:Hn()}}function dp(n,r){n.min=r.min,n.max=r.max}function zt(n,r){dp(n.x,r.x),dp(n.y,r.y)}function fp(n,r){n.translate=r.translate,n.scale=r.scale,n.originPoint=r.originPoint,n.origin=r.origin}const vh=1e-4,$1=1-vh,K1=1+vh,xh=.01,G1=0-xh,Z1=0+xh;function at(n){return n.max-n.min}function J1(n,r,o){return Math.abs(n-r)<=o}function pp(n,r,o,l=.5){n.origin=l,n.originPoint=je(r.min,r.max,n.origin),n.scale=at(o)/at(r),n.translate=je(o.min,o.max,n.origin)-n.originPoint,(n.scale>=$1&&n.scale<=K1||isNaN(n.scale))&&(n.scale=1),(n.translate>=G1&&n.translate<=Z1||isNaN(n.translate))&&(n.translate=0)}function Cs(n,r,o,l){pp(n.x,r.x,o.x,l?l.originX:void 0),pp(n.y,r.y,o.y,l?l.originY:void 0)}function mp(n,r,o){n.min=o.min+r.min,n.max=n.min+at(r)}function q1(n,r,o){mp(n.x,r.x,o.x),mp(n.y,r.y,o.y)}function hp(n,r,o){n.min=r.min-o.min,n.max=n.min+at(r)}function ui(n,r,o){hp(n.x,r.x,o.x),hp(n.y,r.y,o.y)}function _p(n,r,o,l,u){return n-=r,n=ai(n,1/o,l),u!==void 0&&(n=ai(n,1/u,l)),n}function ev(n,r=0,o=1,l=.5,u,f=n,d=n){if($t.test(r)&&(r=parseFloat(r),r=je(d.min,d.max,r/100)-d.min),typeof r!="number")return;let p=je(f.min,f.max,l);n===f&&(p-=r),n.min=_p(n.min,r,o,p,u),n.max=_p(n.max,r,o,p,u)}function gp(n,r,[o,l,u],f,d){ev(n,r[o],r[l],r[u],r.scale,f,d)}const tv=["x","scaleX","originX"],nv=["y","scaleY","originY"];function yp(n,r,o,l){gp(n.x,r,tv,o?o.x:void 0,l?l.x:void 0),gp(n.y,r,nv,o?o.y:void 0,l?l.y:void 0)}function vp(n){return n.translate===0&&n.scale===1}function wh(n){return vp(n.x)&&vp(n.y)}function xp(n,r){return n.min===r.min&&n.max===r.max}function rv(n,r){return xp(n.x,r.x)&&xp(n.y,r.y)}function wp(n,r){return Math.round(n.min)===Math.round(r.min)&&Math.round(n.max)===Math.round(r.max)}function Sh(n,r){return wp(n.x,r.x)&&wp(n.y,r.y)}function Sp(n){return at(n.x)/at(n.y)}function kp(n,r){return n.translate===r.translate&&n.scale===r.scale&&n.originPoint===r.originPoint}function Xt(n){return[n("x"),n("y")]}function sv(n,r,o){let l="";const u=n.x.translate/r.x,f=n.y.translate/r.y,d=(o==null?void 0:o.z)||0;if((u||f||d)&&(l=`translate3d(${u}px, ${f}px, ${d}px) `),(r.x!==1||r.y!==1)&&(l+=`scale(${1/r.x}, ${1/r.y}) `),o){const{transformPerspective:_,rotate:g,rotateX:y,rotateY:x,skewX:b,skewY:T}=o;_&&(l=`perspective(${_}px) ${l}`),g&&(l+=`rotate(${g}deg) `),y&&(l+=`rotateX(${y}deg) `),x&&(l+=`rotateY(${x}deg) `),b&&(l+=`skewX(${b}deg) `),T&&(l+=`skewY(${T}deg) `)}const p=n.x.scale*r.x,h=n.y.scale*r.y;return(p!==1||h!==1)&&(l+=`scale(${p}, ${h})`),l||"none"}const kh=["TopLeft","TopRight","BottomLeft","BottomRight"],ov=kh.length,bp=n=>typeof n=="string"?parseFloat(n):n,Cp=n=>typeof n=="number"||J.test(n);function iv(n,r,o,l,u,f){u?(n.opacity=je(0,o.opacity??1,lv(l)),n.opacityExit=je(r.opacity??1,0,av(l))):f&&(n.opacity=je(r.opacity??1,o.opacity??1,l));for(let d=0;d<ov;d++){const p=`border${kh[d]}Radius`;let h=Tp(r,p),_=Tp(o,p);if(h===void 0&&_===void 0)continue;h||(h=0),_||(_=0),h===0||_===0||Cp(h)===Cp(_)?(n[p]=Math.max(je(bp(h),bp(_),l),0),($t.test(_)||$t.test(h))&&(n[p]+="%")):n[p]=_}(r.rotate||o.rotate)&&(n.rotate=je(r.rotate||0,o.rotate||0,l))}function Tp(n,r){return n[r]!==void 0?n[r]:n.borderRadius}const lv=bh(0,.5,hm),av=bh(.5,.95,Mt);function bh(n,r,o){return l=>l<n?0:l>r?1:o(Es(n,r,l))}function uv(n,r,o){const l=st(n)?n:Lr(n);return l.start(vu("",l,r,o)),l.animation}function Rs(n,r,o,l={passive:!0}){return n.addEventListener(r,o,l),()=>n.removeEventListener(r,o)}const cv=(n,r)=>n.depth-r.depth;class dv{constructor(){this.children=[],this.isDirty=!1}add(r){su(this.children,r),this.isDirty=!0}remove(r){ri(this.children,r),this.isDirty=!0}forEach(r){this.isDirty&&this.children.sort(cv),this.isDirty=!1,this.children.forEach(r)}}function fv(n,r){const o=lt.now(),l=({timestamp:u})=>{const f=u-o;f>=r&&(Dn(l),n(f-r))};return be.setup(l,!0),()=>Dn(l)}function ti(n){return st(n)?n.get():n}class pv{constructor(){this.members=[]}add(r){su(this.members,r);for(let o=this.members.length-1;o>=0;o--){const l=this.members[o];if(l===r||l===this.lead||l===this.prevLead)continue;const u=l.instance;(!u||u.isConnected===!1)&&!l.snapshot&&(ri(this.members,l),l.unmount())}r.scheduleRender()}remove(r){if(ri(this.members,r),r===this.prevLead&&(this.prevLead=void 0),r===this.lead){const o=this.members[this.members.length-1];o&&this.promote(o)}}relegate(r){var o;for(let l=this.members.indexOf(r)-1;l>=0;l--){const u=this.members[l];if(u.isPresent!==!1&&((o=u.instance)==null?void 0:o.isConnected)!==!1)return this.promote(u),!0}return!1}promote(r,o){var u;const l=this.lead;if(r!==l&&(this.prevLead=l,this.lead=r,r.show(),l)){l.updateSnapshot(),r.scheduleRender();const{layoutDependency:f}=l.options,{layoutDependency:d}=r.options;(f===void 0||f!==d)&&(r.resumeFrom=l,o&&(l.preserveOpacity=!0),l.snapshot&&(r.snapshot=l.snapshot,r.snapshot.latestValues=l.animationValues||l.latestValues),(u=r.root)!=null&&u.isUpdating&&(r.isLayoutDirty=!0)),r.options.crossfade===!1&&l.hide()}}exitAnimationComplete(){this.members.forEach(r=>{var o,l,u,f,d;(l=(o=r.options).onExitComplete)==null||l.call(o),(d=(u=r.resumingFrom)==null?void 0:(f=u.options).onExitComplete)==null||d.call(f)})}scheduleRender(){this.members.forEach(r=>r.instance&&r.scheduleRender(!1))}removeLeadSnapshot(){var r;(r=this.lead)!=null&&r.snapshot&&(this.lead.snapshot=void 0)}}const ni={hasAnimatedSinceResize:!0,hasEverUpdated:!1},ya=["","X","Y","Z"],mv=1e3;let hv=0;function va(n,r,o,l){const{latestValues:u}=r;u[n]&&(o[n]=u[n],r.setStaticValue(n,0),l&&(l[n]=0))}function Ch(n){if(n.hasCheckedOptimisedAppear=!0,n.root===n)return;const{visualElement:r}=n.options;if(!r)return;const o=Hm(r);if(window.MotionHasOptimisedAnimation(o,"transform")){const{layout:u,layoutId:f}=n.options;window.MotionCancelOptimisedAnimation(o,"transform",be,!(u||f))}const{parent:l}=n;l&&!l.hasCheckedOptimisedAppear&&Ch(l)}function Th({attachResizeListener:n,defaultParent:r,measureScroll:o,checkIsScrollRoot:l,resetTransform:u}){return class{constructor(d={},p=r==null?void 0:r()){this.id=hv++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(yv),this.nodes.forEach(Sv),this.nodes.forEach(kv),this.nodes.forEach(vv)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=d,this.root=p?p.root||p:this,this.path=p?[...p.path,p]:[],this.parent=p,this.depth=p?p.depth+1:0;for(let h=0;h<this.path.length;h++)this.path[h].shouldResetTransform=!0;this.root===this&&(this.nodes=new dv)}addEventListener(d,p){return this.eventHandlers.has(d)||this.eventHandlers.set(d,new iu),this.eventHandlers.get(d).add(p)}notifyListeners(d,...p){const h=this.eventHandlers.get(d);h&&h.notify(...p)}hasListeners(d){return this.eventHandlers.has(d)}mount(d){if(this.instance)return;this.isSVG=Cu(d)&&!g1(d),this.instance=d;const{layoutId:p,layout:h,visualElement:_}=this.options;if(_&&!_.current&&_.mount(d),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(h||p)&&(this.isLayoutDirty=!0),n){let g,y=0;const x=()=>this.root.updateBlockedByResize=!1;be.read(()=>{y=window.innerWidth}),n(d,()=>{const b=window.innerWidth;b!==y&&(y=b,this.root.updateBlockedByResize=!0,g&&g(),g=fv(x,250),ni.hasAnimatedSinceResize&&(ni.hasAnimatedSinceResize=!1,this.nodes.forEach(Mp)))})}p&&this.root.registerSharedNode(p,this),this.options.animate!==!1&&_&&(p||h)&&this.addEventListener("didUpdate",({delta:g,hasLayoutChanged:y,hasRelativeLayoutChanged:x,layout:b})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const T=this.options.transition||_.getDefaultTransition()||Ev,{onLayoutAnimationStart:R,onLayoutAnimationComplete:L}=_.getProps(),j=!this.targetLayout||!Sh(this.targetLayout,b),I=!y&&x;if(this.options.layoutRoot||this.resumeFrom||I||y&&(j||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const A={...yu(T,"layout"),onPlay:R,onComplete:L};(_.shouldReduceMotion||this.options.layoutRoot)&&(A.delay=0,A.type=!1),this.startAnimation(A),this.setAnimationOrigin(g,I)}else y||Mp(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=b})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const d=this.getStack();d&&d.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Dn(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(bv),this.animationId++)}getTransformTemplate(){const{visualElement:d}=this.options;return d&&d.getProps().transformTemplate}willUpdate(d=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Ch(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let g=0;g<this.path.length;g++){const y=this.path[g];y.shouldResetTransform=!0,y.updateScroll("snapshot"),y.options.layoutRoot&&y.willUpdate(!1)}const{layoutId:p,layout:h}=this.options;if(p===void 0&&!h)return;const _=this.getTransformTemplate();this.prevTransformTemplateValue=_?_(this.latestValues,""):void 0,this.updateSnapshot(),d&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Pp);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(Ep);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(wv),this.nodes.forEach(_v),this.nodes.forEach(gv)):this.nodes.forEach(Ep),this.clearAllSnapshots();const p=lt.now();Ze.delta=Kt(0,1e3/60,p-Ze.timestamp),Ze.timestamp=p,Ze.isProcessing=!0,ca.update.process(Ze),ca.preRender.process(Ze),ca.render.process(Ze),Ze.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,ku.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(xv),this.sharedNodes.forEach(Cv)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,be.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){be.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!at(this.snapshot.measuredBox.x)&&!at(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let h=0;h<this.path.length;h++)this.path[h].updateScroll();const d=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected=We(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:p}=this.options;p&&p.notify("LayoutMeasure",this.layout.layoutBox,d?d.layoutBox:void 0)}updateScroll(d="measure"){let p=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===d&&(p=!1),p&&this.instance){const h=l(this.instance);this.scroll={animationId:this.root.animationId,phase:d,isRoot:h,offset:o(this.instance),wasRoot:this.scroll?this.scroll.isRoot:h}}}resetTransform(){if(!u)return;const d=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,p=this.projectionDelta&&!wh(this.projectionDelta),h=this.getTransformTemplate(),_=h?h(this.latestValues,""):void 0,g=_!==this.prevTransformTemplateValue;d&&this.instance&&(p||Xn(this.latestValues)||g)&&(u(this.instance,_),this.shouldResetTransform=!1,this.scheduleRender())}measure(d=!0){const p=this.measurePageBox();let h=this.removeElementScroll(p);return d&&(h=this.removeTransform(h)),Mv(h),{animationId:this.root.animationId,measuredBox:p,layoutBox:h,latestValues:{},source:this.id}}measurePageBox(){var _;const{visualElement:d}=this.options;if(!d)return We();const p=d.measureViewportBox();if(!(((_=this.scroll)==null?void 0:_.wasRoot)||this.path.some(Dv))){const{scroll:g}=this.root;g&&(Er(p.x,g.offset.x),Er(p.y,g.offset.y))}return p}removeElementScroll(d){var h;const p=We();if(zt(p,d),(h=this.scroll)!=null&&h.wasRoot)return p;for(let _=0;_<this.path.length;_++){const g=this.path[_],{scroll:y,options:x}=g;g!==this.root&&y&&x.layoutScroll&&(y.wasRoot&&zt(p,d),Er(p.x,y.offset.x),Er(p.y,y.offset.y))}return p}applyTransform(d,p=!1){const h=We();zt(h,d);for(let _=0;_<this.path.length;_++){const g=this.path[_];!p&&g.options.layoutScroll&&g.scroll&&g!==g.root&&Mr(h,{x:-g.scroll.offset.x,y:-g.scroll.offset.y}),Xn(g.latestValues)&&Mr(h,g.latestValues)}return Xn(this.latestValues)&&Mr(h,this.latestValues),h}removeTransform(d){const p=We();zt(p,d);for(let h=0;h<this.path.length;h++){const _=this.path[h];if(!_.instance||!Xn(_.latestValues))continue;Ka(_.latestValues)&&_.updateSnapshot();const g=We(),y=_.measurePageBox();zt(g,y),yp(p,_.latestValues,_.snapshot?_.snapshot.layoutBox:void 0,g)}return Xn(this.latestValues)&&yp(p,this.latestValues),p}setTargetDelta(d){this.targetDelta=d,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(d){this.options={...this.options,...d,crossfade:d.crossfade!==void 0?d.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Ze.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(d=!1){var b;const p=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=p.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=p.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=p.isSharedProjectionDirty);const h=!!this.resumingFrom||this!==p;if(!(d||h&&this.isSharedProjectionDirty||this.isProjectionDirty||(b=this.parent)!=null&&b.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:g,layoutId:y}=this.options;if(!this.layout||!(g||y))return;this.resolvedRelativeTargetAt=Ze.timestamp;const x=this.getClosestProjectingParent();x&&this.linkedParentVersion!==x.layoutVersion&&!x.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(x&&x.layout?this.createRelativeTarget(x,this.layout.layoutBox,x.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=We(),this.targetWithTransforms=We()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),q1(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):zt(this.target,this.layout.layoutBox),uh(this.target,this.targetDelta)):zt(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,x&&!!x.resumingFrom==!!this.resumingFrom&&!x.options.layoutScroll&&x.target&&this.animationProgress!==1?this.createRelativeTarget(x,this.target,x.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||Ka(this.parent.latestValues)||ah(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(d,p,h){this.relativeParent=d,this.linkedParentVersion=d.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=We(),this.relativeTargetOrigin=We(),ui(this.relativeTargetOrigin,p,h),zt(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var T;const d=this.getLead(),p=!!this.resumingFrom||this!==d;let h=!0;if((this.isProjectionDirty||(T=this.parent)!=null&&T.isProjectionDirty)&&(h=!1),p&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(h=!1),this.resolvedRelativeTargetAt===Ze.timestamp&&(h=!1),h)return;const{layout:_,layoutId:g}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(_||g))return;zt(this.layoutCorrected,this.layout.layoutBox);const y=this.treeScale.x,x=this.treeScale.y;E1(this.layoutCorrected,this.treeScale,this.path,p),d.layout&&!d.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(d.target=d.layout.layoutBox,d.targetWithTransforms=We());const{target:b}=d;if(!b){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(fp(this.prevProjectionDelta.x,this.projectionDelta.x),fp(this.prevProjectionDelta.y,this.projectionDelta.y)),Cs(this.projectionDelta,this.layoutCorrected,b,this.latestValues),(this.treeScale.x!==y||this.treeScale.y!==x||!kp(this.projectionDelta.x,this.prevProjectionDelta.x)||!kp(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",b))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(d=!0){var p;if((p=this.options.visualElement)==null||p.scheduleRender(),d){const h=this.getStack();h&&h.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Pr(),this.projectionDelta=Pr(),this.projectionDeltaWithTransform=Pr()}setAnimationOrigin(d,p=!1){const h=this.snapshot,_=h?h.latestValues:{},g={...this.latestValues},y=Pr();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!p;const x=We(),b=h?h.source:void 0,T=this.layout?this.layout.source:void 0,R=b!==T,L=this.getStack(),j=!L||L.members.length<=1,I=!!(R&&!j&&this.options.crossfade===!0&&!this.path.some(Pv));this.animationProgress=0;let A;this.mixTargetDelta=B=>{const U=B/1e3;Dp(y.x,d.x,U),Dp(y.y,d.y,U),this.setTargetDelta(y),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(ui(x,this.layout.layoutBox,this.relativeParent.layout.layoutBox),Tv(this.relativeTarget,this.relativeTargetOrigin,x,U),A&&rv(this.relativeTarget,A)&&(this.isProjectionDirty=!1),A||(A=We()),zt(A,this.relativeTarget)),R&&(this.animationValues=g,iv(g,_,this.latestValues,U,I,j)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=U},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(d){var p,h,_;this.notifyListeners("animationStart"),(p=this.currentAnimation)==null||p.stop(),(_=(h=this.resumingFrom)==null?void 0:h.currentAnimation)==null||_.stop(),this.pendingAnimation&&(Dn(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=be.update(()=>{ni.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=Lr(0)),this.motionValue.jump(0,!1),this.currentAnimation=uv(this.motionValue,[0,1e3],{...d,velocity:0,isSync:!0,onUpdate:g=>{this.mixTargetDelta(g),d.onUpdate&&d.onUpdate(g)},onStop:()=>{},onComplete:()=>{d.onComplete&&d.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const d=this.getStack();d&&d.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(mv),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const d=this.getLead();let{targetWithTransforms:p,target:h,layout:_,latestValues:g}=d;if(!(!p||!h||!_)){if(this!==d&&this.layout&&_&&Ph(this.options.animationType,this.layout.layoutBox,_.layoutBox)){h=this.target||We();const y=at(this.layout.layoutBox.x);h.x.min=d.target.x.min,h.x.max=h.x.min+y;const x=at(this.layout.layoutBox.y);h.y.min=d.target.y.min,h.y.max=h.y.min+x}zt(p,h),Mr(p,g),Cs(this.projectionDeltaWithTransform,this.layoutCorrected,p,g)}}registerSharedNode(d,p){this.sharedNodes.has(d)||this.sharedNodes.set(d,new pv),this.sharedNodes.get(d).add(p);const _=p.options.initialPromotionConfig;p.promote({transition:_?_.transition:void 0,preserveFollowOpacity:_&&_.shouldPreserveFollowOpacity?_.shouldPreserveFollowOpacity(p):void 0})}isLead(){const d=this.getStack();return d?d.lead===this:!0}getLead(){var p;const{layoutId:d}=this.options;return d?((p=this.getStack())==null?void 0:p.lead)||this:this}getPrevLead(){var p;const{layoutId:d}=this.options;return d?(p=this.getStack())==null?void 0:p.prevLead:void 0}getStack(){const{layoutId:d}=this.options;if(d)return this.root.sharedNodes.get(d)}promote({needsReset:d,transition:p,preserveFollowOpacity:h}={}){const _=this.getStack();_&&_.promote(this,h),d&&(this.projectionDelta=void 0,this.needsReset=!0),p&&this.setOptions({transition:p})}relegate(){const d=this.getStack();return d?d.relegate(this):!1}resetSkewAndRotation(){const{visualElement:d}=this.options;if(!d)return;let p=!1;const{latestValues:h}=d;if((h.z||h.rotate||h.rotateX||h.rotateY||h.rotateZ||h.skewX||h.skewY)&&(p=!0),!p)return;const _={};h.z&&va("z",d,_,this.animationValues);for(let g=0;g<ya.length;g++)va(`rotate${ya[g]}`,d,_,this.animationValues),va(`skew${ya[g]}`,d,_,this.animationValues);d.render();for(const g in _)d.setStaticValue(g,_[g]),this.animationValues&&(this.animationValues[g]=_[g]);d.scheduleRender()}applyProjectionStyles(d,p){if(!this.instance||this.isSVG)return;if(!this.isVisible){d.visibility="hidden";return}const h=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,d.visibility="",d.opacity="",d.pointerEvents=ti(p==null?void 0:p.pointerEvents)||"",d.transform=h?h(this.latestValues,""):"none";return}const _=this.getLead();if(!this.projectionDelta||!this.layout||!_.target){this.options.layoutId&&(d.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,d.pointerEvents=ti(p==null?void 0:p.pointerEvents)||""),this.hasProjected&&!Xn(this.latestValues)&&(d.transform=h?h({},""):"none",this.hasProjected=!1);return}d.visibility="";const g=_.animationValues||_.latestValues;this.applyTransformsToTarget();let y=sv(this.projectionDeltaWithTransform,this.treeScale,g);h&&(y=h(g,y)),d.transform=y;const{x,y:b}=this.projectionDelta;d.transformOrigin=`${x.origin*100}% ${b.origin*100}% 0`,_.animationValues?d.opacity=_===this?g.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:g.opacityExit:d.opacity=_===this?g.opacity!==void 0?g.opacity:"":g.opacityExit!==void 0?g.opacityExit:0;for(const T in Za){if(g[T]===void 0)continue;const{correct:R,applyTo:L,isCSSVariable:j}=Za[T],I=y==="none"?g[T]:R(g[T],_);if(L){const A=L.length;for(let B=0;B<A;B++)d[L[B]]=I}else j?this.options.visualElement.renderState.vars[T]=I:d[T]=I}this.options.layoutId&&(d.pointerEvents=_===this?ti(p==null?void 0:p.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(d=>{var p;return(p=d.currentAnimation)==null?void 0:p.stop()}),this.root.nodes.forEach(Pp),this.root.sharedNodes.clear()}}}function _v(n){n.updateLayout()}function gv(n){var o;const r=((o=n.resumeFrom)==null?void 0:o.snapshot)||n.snapshot;if(n.isLead()&&n.layout&&r&&n.hasListeners("didUpdate")){const{layoutBox:l,measuredBox:u}=n.layout,{animationType:f}=n.options,d=r.source!==n.layout.source;f==="size"?Xt(y=>{const x=d?r.measuredBox[y]:r.layoutBox[y],b=at(x);x.min=l[y].min,x.max=x.min+b}):Ph(f,r.layoutBox,l)&&Xt(y=>{const x=d?r.measuredBox[y]:r.layoutBox[y],b=at(l[y]);x.max=x.min+b,n.relativeTarget&&!n.currentAnimation&&(n.isProjectionDirty=!0,n.relativeTarget[y].max=n.relativeTarget[y].min+b)});const p=Pr();Cs(p,l,r.layoutBox);const h=Pr();d?Cs(h,n.applyTransform(u,!0),r.measuredBox):Cs(h,l,r.layoutBox);const _=!wh(p);let g=!1;if(!n.resumeFrom){const y=n.getClosestProjectingParent();if(y&&!y.resumeFrom){const{snapshot:x,layout:b}=y;if(x&&b){const T=We();ui(T,r.layoutBox,x.layoutBox);const R=We();ui(R,l,b.layoutBox),Sh(T,R)||(g=!0),y.options.layoutRoot&&(n.relativeTarget=R,n.relativeTargetOrigin=T,n.relativeParent=y)}}}n.notifyListeners("didUpdate",{layout:l,snapshot:r,delta:h,layoutDelta:p,hasLayoutChanged:_,hasRelativeLayoutChanged:g})}else if(n.isLead()){const{onExitComplete:l}=n.options;l&&l()}n.options.transition=void 0}function yv(n){n.parent&&(n.isProjecting()||(n.isProjectionDirty=n.parent.isProjectionDirty),n.isSharedProjectionDirty||(n.isSharedProjectionDirty=!!(n.isProjectionDirty||n.parent.isProjectionDirty||n.parent.isSharedProjectionDirty)),n.isTransformDirty||(n.isTransformDirty=n.parent.isTransformDirty))}function vv(n){n.isProjectionDirty=n.isSharedProjectionDirty=n.isTransformDirty=!1}function xv(n){n.clearSnapshot()}function Pp(n){n.clearMeasurements()}function Ep(n){n.isLayoutDirty=!1}function wv(n){const{visualElement:r}=n.options;r&&r.getProps().onBeforeLayoutMeasure&&r.notify("BeforeLayoutMeasure"),n.resetTransform()}function Mp(n){n.finishAnimation(),n.targetDelta=n.relativeTarget=n.target=void 0,n.isProjectionDirty=!0}function Sv(n){n.resolveTargetDelta()}function kv(n){n.calcProjection()}function bv(n){n.resetSkewAndRotation()}function Cv(n){n.removeLeadSnapshot()}function Dp(n,r,o){n.translate=je(r.translate,0,o),n.scale=je(r.scale,1,o),n.origin=r.origin,n.originPoint=r.originPoint}function Lp(n,r,o,l){n.min=je(r.min,o.min,l),n.max=je(r.max,o.max,l)}function Tv(n,r,o,l){Lp(n.x,r.x,o.x,l),Lp(n.y,r.y,o.y,l)}function Pv(n){return n.animationValues&&n.animationValues.opacityExit!==void 0}const Ev={duration:.45,ease:[.4,0,.1,1]},Rp=n=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(n),Ap=Rp("applewebkit/")&&!Rp("chrome/")?Math.round:Mt;function Ip(n){n.min=Ap(n.min),n.max=Ap(n.max)}function Mv(n){Ip(n.x),Ip(n.y)}function Ph(n,r,o){return n==="position"||n==="preserve-aspect"&&!J1(Sp(r),Sp(o),.2)}function Dv(n){var r;return n!==n.root&&((r=n.scroll)==null?void 0:r.wasRoot)}const Lv=Th({attachResizeListener:(n,r)=>Rs(n,"resize",r),measureScroll:()=>{var n,r;return{x:document.documentElement.scrollLeft||((n=document.body)==null?void 0:n.scrollLeft)||0,y:document.documentElement.scrollTop||((r=document.body)==null?void 0:r.scrollTop)||0}},checkIsScrollRoot:()=>!0}),Rv=n=>!n.isLayoutDirty&&n.willUpdate(!1);function jp(){const n=new Set,r=new WeakMap,o=()=>n.forEach(Rv);return{add:l=>{n.add(l),r.set(l,l.addEventListener("willUpdate",o))},remove:l=>{n.delete(l);const u=r.get(l);u&&(u(),r.delete(l)),o()},dirty:o}}const xa={current:void 0},Eh=Th({measureScroll:n=>({x:n.scrollLeft,y:n.scrollTop}),defaultParent:()=>{if(!xa.current){const n=new Lv({});n.mount(window),n.setOptions({layoutScroll:!0}),xa.current=n}return xa.current},resetTransform:(n,r)=>{n.style.transform=r!==void 0?r:"none"},checkIsScrollRoot:n=>window.getComputedStyle(n).position==="fixed"}),Du=M.createContext({transformPagePoint:n=>n,isStatic:!1,reducedMotion:"never"});function Np(n,r){if(typeof n=="function")return n(r);n!=null&&(n.current=r)}function Av(...n){return r=>{let o=!1;const l=n.map(u=>{const f=Np(u,r);return!o&&typeof f=="function"&&(o=!0),f});if(o)return()=>{for(let u=0;u<l.length;u++){const f=l[u];typeof f=="function"?f():Np(n[u],null)}}}}function Iv(...n){return M.useCallback(Av(...n),n)}class jv extends M.Component{getSnapshotBeforeUpdate(r){const o=this.props.childRef.current;if(o&&r.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const l=o.offsetParent,u=Xa(l)&&l.offsetWidth||0,f=Xa(l)&&l.offsetHeight||0,d=this.props.sizeRef.current;d.height=o.offsetHeight||0,d.width=o.offsetWidth||0,d.top=o.offsetTop,d.left=o.offsetLeft,d.right=u-d.width-d.left,d.bottom=f-d.height-d.top}return null}componentDidUpdate(){}render(){return this.props.children}}function Nv({children:n,isPresent:r,anchorX:o,anchorY:l,root:u,pop:f}){var x;const d=M.useId(),p=M.useRef(null),h=M.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0}),{nonce:_}=M.useContext(Du),g=((x=n.props)==null?void 0:x.ref)??(n==null?void 0:n.ref),y=Iv(p,g);return M.useInsertionEffect(()=>{const{width:b,height:T,top:R,left:L,right:j,bottom:I}=h.current;if(r||f===!1||!p.current||!b||!T)return;const A=o==="left"?`left: ${L}`:`right: ${j}`,B=l==="bottom"?`bottom: ${I}`:`top: ${R}`;p.current.dataset.motionPopId=d;const U=document.createElement("style");_&&(U.nonce=_);const K=u??document.head;return K.appendChild(U),U.sheet&&U.sheet.insertRule(`
          [data-motion-pop-id="${d}"] {
            position: absolute !important;
            width: ${b}px !important;
            height: ${T}px !important;
            ${A}px !important;
            ${B}px !important;
          }
        `),()=>{K.contains(U)&&K.removeChild(U)}},[r]),D.jsx(jv,{isPresent:r,childRef:p,sizeRef:h,pop:f,children:f===!1?n:M.cloneElement(n,{ref:y})})}const Vv=({children:n,initial:r,isPresent:o,onExitComplete:l,custom:u,presenceAffectsLayout:f,mode:d,anchorX:p,anchorY:h,root:_})=>{const g=nu(zv),y=M.useId();let x=!0,b=M.useMemo(()=>(x=!1,{id:y,initial:r,isPresent:o,custom:u,onExitComplete:T=>{g.set(T,!0);for(const R of g.values())if(!R)return;l&&l()},register:T=>(g.set(T,!1),()=>g.delete(T))}),[o,g,l]);return f&&x&&(b={...b}),M.useMemo(()=>{g.forEach((T,R)=>g.set(R,!1))},[o]),M.useEffect(()=>{!o&&!g.size&&l&&l()},[o]),n=D.jsx(Nv,{pop:d==="popLayout",isPresent:o,anchorX:p,anchorY:h,root:_,children:n}),D.jsx(di.Provider,{value:b,children:n})};function zv(){return new Map}function Mh(n=!0){const r=M.useContext(di);if(r===null)return[!0,null];const{isPresent:o,onExitComplete:l,register:u}=r,f=M.useId();M.useEffect(()=>{if(n)return u(f)},[n]);const d=M.useCallback(()=>n&&l&&l(f),[f,l,n]);return!o&&l?[!1,d]:[!0]}const Ko=n=>n.key||"";function Vp(n){const r=[];return M.Children.forEach(n,o=>{M.isValidElement(o)&&r.push(o)}),r}const Ja=({children:n,custom:r,initial:o=!0,onExitComplete:l,presenceAffectsLayout:u=!0,mode:f="sync",propagate:d=!1,anchorX:p="left",anchorY:h="top",root:_})=>{const[g,y]=Mh(d),x=M.useMemo(()=>Vp(n),[n]),b=d&&!g?[]:x.map(Ko),T=M.useRef(!0),R=M.useRef(x),L=nu(()=>new Map),j=M.useRef(new Set),[I,A]=M.useState(x),[B,U]=M.useState(x);ru(()=>{T.current=!1,R.current=x;for(let W=0;W<B.length;W++){const $=Ko(B[W]);b.includes($)?(L.delete($),j.current.delete($)):L.get($)!==!0&&L.set($,!1)}},[B,b.length,b.join("-")]);const K=[];if(x!==I){let W=[...x];for(let $=0;$<B.length;$++){const oe=B[$],ce=Ko(oe);b.includes(ce)||(W.splice($,0,oe),K.push(oe))}return f==="wait"&&K.length&&(W=K),U(Vp(W)),A(x),null}const{forceRender:ee}=M.useContext(Ps);return D.jsx(D.Fragment,{children:B.map(W=>{const $=Ko(W),oe=d&&!g?!1:x===B||b.includes($),ce=()=>{if(j.current.has($))return;if(j.current.add($),L.has($))L.set($,!0);else return;let fe=!0;L.forEach(ie=>{ie||(fe=!1)}),fe&&(ee==null||ee(),U(R.current),d&&(y==null||y()),l&&l())};return D.jsx(Vv,{isPresent:oe,initial:!T.current||o?void 0:!1,custom:r,presenceAffectsLayout:u,mode:f,root:_,onExitComplete:oe?void 0:ce,anchorX:p,anchorY:h,children:W},$)})})},Ov=M.createContext(null);function Bv(){const n=M.useRef(!1);return ru(()=>(n.current=!0,()=>{n.current=!1}),[]),n}function Fv(){const n=Bv(),[r,o]=M.useState(0),l=M.useCallback(()=>{n.current&&o(r+1)},[r]);return[M.useCallback(()=>be.postRender(l),[l]),r]}const Dh=n=>n===!0,Uv=n=>Dh(n===!0)||n==="id",Yv=({children:n,id:r,inherit:o=!0})=>{const l=M.useContext(Ps),u=M.useContext(Ov),[f,d]=Fv(),p=M.useRef(null),h=l.id||u;p.current===null&&(Uv(o)&&h&&(r=r?h+"-"+r:h),p.current={id:r,group:Dh(o)&&l.group||jp()});const _=M.useMemo(()=>({...p.current,forceRender:f}),[d]);return D.jsx(Ps.Provider,{value:_,children:n})},Lh=M.createContext({strict:!1}),zp={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let Op=!1;function Wv(){if(Op)return;const n={};for(const r in zp)n[r]={isEnabled:o=>zp[r].some(l=>!!o[l])};oh(n),Op=!0}function Rh(){return Wv(),b1()}function Hv(n){const r=Rh();for(const o in n)r[o]={...r[o],...n[o]};oh(r)}const Qv=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function ci(n){return n.startsWith("while")||n.startsWith("drag")&&n!=="draggable"||n.startsWith("layout")||n.startsWith("onTap")||n.startsWith("onPan")||n.startsWith("onLayout")||Qv.has(n)}let Ah=n=>!ci(n);function Xv(n){typeof n=="function"&&(Ah=r=>r.startsWith("on")?!ci(r):n(r))}try{Xv(require("@emotion/is-prop-valid").default)}catch{}function $v(n,r,o){const l={};for(const u in n)u==="values"&&typeof n.values=="object"||(Ah(u)||o===!0&&ci(u)||!r&&!ci(u)||n.draggable&&u.startsWith("onDrag"))&&(l[u]=n[u]);return l}const mi=M.createContext({});function Kv(n,r){if(pi(n)){const{initial:o,animate:l}=n;return{initial:o===!1||Ls(o)?o:void 0,animate:Ls(l)?l:void 0}}return n.inherit!==!1?r:{}}function Gv(n){const{initial:r,animate:o}=Kv(n,M.useContext(mi));return M.useMemo(()=>({initial:r,animate:o}),[Bp(r),Bp(o)])}function Bp(n){return Array.isArray(n)?n.join(" "):n}const Lu=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Ih(n,r,o){for(const l in r)!st(r[l])&&!fh(l,o)&&(n[l]=r[l])}function Zv({transformTemplate:n},r){return M.useMemo(()=>{const o=Lu();return Eu(o,r,n),Object.assign({},o.vars,o.style)},[r])}function Jv(n,r){const o=n.style||{},l={};return Ih(l,o,n),Object.assign(l,Zv(n,r)),l}function qv(n,r){const o={},l=Jv(n,r);return n.drag&&n.dragListener!==!1&&(o.draggable=!1,l.userSelect=l.WebkitUserSelect=l.WebkitTouchCallout="none",l.touchAction=n.drag===!0?"none":`pan-${n.drag==="x"?"y":"x"}`),n.tabIndex===void 0&&(n.onTap||n.onTapStart||n.whileTap)&&(o.tabIndex=0),o.style=l,o}const jh=()=>({...Lu(),attrs:{}});function ex(n,r,o,l){const u=M.useMemo(()=>{const f=jh();return ph(f,r,hh(l),n.transformTemplate,n.style),{...f.attrs,style:{...f.style}}},[r]);if(n.style){const f={};Ih(f,n.style,n),u.style={...f,...u.style}}return u}const tx=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Ru(n){return typeof n!="string"||n.includes("-")?!1:!!(tx.indexOf(n)>-1||/[A-Z]/u.test(n))}function nx(n,r,o,{latestValues:l},u,f=!1,d){const h=(d??Ru(n)?ex:qv)(r,l,u,n),_=$v(r,typeof n=="string",f),g=n!==M.Fragment?{..._,...h,ref:o}:{},{children:y}=r,x=M.useMemo(()=>st(y)?y.get():y,[y]);return M.createElement(n,{...g,children:x})}function rx({scrapeMotionValuesFromProps:n,createRenderState:r},o,l,u){return{latestValues:sx(o,l,u,n),renderState:r()}}function sx(n,r,o,l){const u={},f=l(n,{});for(const x in f)u[x]=ti(f[x]);let{initial:d,animate:p}=n;const h=pi(n),_=rh(n);r&&_&&!h&&n.inherit!==!1&&(d===void 0&&(d=r.initial),p===void 0&&(p=r.animate));let g=o?o.initial===!1:!1;g=g||d===!1;const y=g?p:d;if(y&&typeof y!="boolean"&&!fi(y)){const x=Array.isArray(y)?y:[y];for(let b=0;b<x.length;b++){const T=xu(n,x[b]);if(T){const{transitionEnd:R,transition:L,...j}=T;for(const I in j){let A=j[I];if(Array.isArray(A)){const B=g?A.length-1:0;A=A[B]}A!==null&&(u[I]=A)}for(const I in R)u[I]=R[I]}}}return u}const Nh=n=>(r,o)=>{const l=M.useContext(mi),u=M.useContext(di),f=()=>rx(n,r,l,u);return o?f():nu(f)},ox=Nh({scrapeMotionValuesFromProps:Mu,createRenderState:Lu}),ix=Nh({scrapeMotionValuesFromProps:_h,createRenderState:jh}),lx=Symbol.for("motionComponentSymbol");function ax(n,r,o){const l=M.useRef(o);M.useInsertionEffect(()=>{l.current=o});const u=M.useRef(null);return M.useCallback(f=>{var p;f&&((p=n.onMount)==null||p.call(n,f));const d=l.current;if(typeof d=="function")if(f){const h=d(f);typeof h=="function"&&(u.current=h)}else u.current?(u.current(),u.current=null):d(f);else d&&(d.current=f);r&&(f?r.mount(f):r.unmount())},[r])}const Vh=M.createContext({});function br(n){return n&&typeof n=="object"&&Object.prototype.hasOwnProperty.call(n,"current")}function ux(n,r,o,l,u,f){var A,B;const{visualElement:d}=M.useContext(mi),p=M.useContext(Lh),h=M.useContext(di),_=M.useContext(Du),g=_.reducedMotion,y=_.skipAnimations,x=M.useRef(null),b=M.useRef(!1);l=l||p.renderer,!x.current&&l&&(x.current=l(n,{visualState:r,parent:d,props:o,presenceContext:h,blockInitialAnimation:h?h.initial===!1:!1,reducedMotionConfig:g,skipAnimations:y,isSVG:f}),b.current&&x.current&&(x.current.manuallyAnimateOnMount=!0));const T=x.current,R=M.useContext(Vh);T&&!T.projection&&u&&(T.type==="html"||T.type==="svg")&&cx(x.current,o,u,R);const L=M.useRef(!1);M.useInsertionEffect(()=>{T&&L.current&&T.update(o,h)});const j=o[Wm],I=M.useRef(!!j&&typeof window<"u"&&!((A=window.MotionHandoffIsComplete)!=null&&A.call(window,j))&&((B=window.MotionHasOptimisedAnimation)==null?void 0:B.call(window,j)));return ru(()=>{b.current=!0,T&&(L.current=!0,window.MotionIsMounted=!0,T.updateFeatures(),T.scheduleRenderMicrotask(),I.current&&T.animationState&&T.animationState.animateChanges())}),M.useEffect(()=>{T&&(!I.current&&T.animationState&&T.animationState.animateChanges(),I.current&&(queueMicrotask(()=>{var U;(U=window.MotionHandoffMarkAsComplete)==null||U.call(window,j)}),I.current=!1),T.enteringChildren=void 0)}),T}function cx(n,r,o,l){const{layoutId:u,layout:f,drag:d,dragConstraints:p,layoutScroll:h,layoutRoot:_,layoutCrossfade:g}=r;n.projection=new o(n.latestValues,r["data-framer-portal-id"]?void 0:zh(n.parent)),n.projection.setOptions({layoutId:u,layout:f,alwaysMeasureLayout:!!d||p&&br(p),visualElement:n,animationType:typeof f=="string"?f:"both",initialPromotionConfig:l,crossfade:g,layoutScroll:h,layoutRoot:_})}function zh(n){if(n)return n.options.allowProjection!==!1?n.projection:zh(n.parent)}function wa(n,{forwardMotionProps:r=!1,type:o}={},l,u){l&&Hv(l);const f=o?o==="svg":Ru(n),d=f?ix:ox;function p(_,g){let y;const x={...M.useContext(Du),..._,layoutId:dx(_)},{isStatic:b}=x,T=Gv(_),R=d(_,b);if(!b&&typeof window<"u"){fx();const L=px(x);y=L.MeasureLayout,T.visualElement=ux(n,R,x,u,L.ProjectionNode,f)}return D.jsxs(mi.Provider,{value:T,children:[y&&T.visualElement?D.jsx(y,{visualElement:T.visualElement,...x}):null,nx(n,_,ax(R,T.visualElement,g),R,b,r,f)]})}p.displayName=`motion.${typeof n=="string"?n:`create(${n.displayName??n.name??""})`}`;const h=M.forwardRef(p);return h[lx]=n,h}function dx({layoutId:n}){const r=M.useContext(Ps).id;return r&&n!==void 0?r+"-"+n:n}function fx(n,r){M.useContext(Lh).strict}function px(n){const r=Rh(),{drag:o,layout:l}=r;if(!o&&!l)return{};const u={...o,...l};return{MeasureLayout:o!=null&&o.isEnabled(n)||l!=null&&l.isEnabled(n)?u.MeasureLayout:void 0,ProjectionNode:u.ProjectionNode}}function mx(n,r){if(typeof Proxy>"u")return wa;const o=new Map,l=(f,d)=>wa(f,d,n,r),u=(f,d)=>l(f,d);return new Proxy(u,{get:(f,d)=>d==="create"?l:(o.has(d)||o.set(d,wa(d,void 0,n,r)),o.get(d))})}const hx=(n,r)=>r.isSVG??Ru(n)?new F1(r):new j1(r,{allowProjection:n!==M.Fragment});class _x extends Ln{constructor(r){super(r),r.animationState||(r.animationState=Q1(r))}updateAnimationControlsSubscription(){const{animate:r}=this.node.getProps();fi(r)&&(this.unmountControls=r.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:r}=this.node.getProps(),{animate:o}=this.node.prevProps||{};r!==o&&this.updateAnimationControlsSubscription()}unmount(){var r;this.node.animationState.reset(),(r=this.unmountControls)==null||r.call(this)}}let gx=0;class yx extends Ln{constructor(){super(...arguments),this.id=gx++}update(){if(!this.node.presenceContext)return;const{isPresent:r,onExitComplete:o}=this.node.presenceContext,{isPresent:l}=this.node.prevPresenceContext||{};if(!this.node.animationState||r===l)return;const u=this.node.animationState.setActive("exit",!r);o&&!r&&u.then(()=>{o(this.id)})}mount(){const{register:r,onExitComplete:o}=this.node.presenceContext||{};o&&o(this.id),r&&(this.unmount=r(this.id))}unmount(){}}const vx={animation:{Feature:_x},exit:{Feature:yx}};function Ns(n){return{point:{x:n.pageX,y:n.pageY}}}const xx=n=>r=>bu(r)&&n(r,Ns(r));function Ts(n,r,o,l){return Rs(n,r,xx(o),l)}const Oh=({current:n})=>n?n.ownerDocument.defaultView:null,Fp=(n,r)=>Math.abs(n-r);function wx(n,r){const o=Fp(n.x,r.x),l=Fp(n.y,r.y);return Math.sqrt(o**2+l**2)}const Up=new Set(["auto","scroll"]);class Bh{constructor(r,o,{transformPagePoint:l,contextWindow:u=window,dragSnapToOrigin:f=!1,distanceThreshold:d=3,element:p}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=b=>{this.handleScroll(b.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const b=ka(this.lastMoveEventInfo,this.history),T=this.startEvent!==null,R=wx(b.offset,{x:0,y:0})>=this.distanceThreshold;if(!T&&!R)return;const{point:L}=b,{timestamp:j}=Ze;this.history.push({...L,timestamp:j});const{onStart:I,onMove:A}=this.handlers;T||(I&&I(this.lastMoveEvent,b),this.startEvent=this.lastMoveEvent),A&&A(this.lastMoveEvent,b)},this.handlePointerMove=(b,T)=>{this.lastMoveEvent=b,this.lastMoveEventInfo=Sa(T,this.transformPagePoint),be.update(this.updatePoint,!0)},this.handlePointerUp=(b,T)=>{this.end();const{onEnd:R,onSessionEnd:L,resumeAnimation:j}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&j&&j(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const I=ka(b.type==="pointercancel"?this.lastMoveEventInfo:Sa(T,this.transformPagePoint),this.history);this.startEvent&&R&&R(b,I),L&&L(b,I)},!bu(r))return;this.dragSnapToOrigin=f,this.handlers=o,this.transformPagePoint=l,this.distanceThreshold=d,this.contextWindow=u||window;const h=Ns(r),_=Sa(h,this.transformPagePoint),{point:g}=_,{timestamp:y}=Ze;this.history=[{...g,timestamp:y}];const{onSessionStart:x}=o;x&&x(r,ka(_,this.history)),this.removeListeners=As(Ts(this.contextWindow,"pointermove",this.handlePointerMove),Ts(this.contextWindow,"pointerup",this.handlePointerUp),Ts(this.contextWindow,"pointercancel",this.handlePointerUp)),p&&this.startScrollTracking(p)}startScrollTracking(r){let o=r.parentElement;for(;o;){const l=getComputedStyle(o);(Up.has(l.overflowX)||Up.has(l.overflowY))&&this.scrollPositions.set(o,{x:o.scrollLeft,y:o.scrollTop}),o=o.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(r){const o=this.scrollPositions.get(r);if(!o)return;const l=r===window,u=l?{x:window.scrollX,y:window.scrollY}:{x:r.scrollLeft,y:r.scrollTop},f={x:u.x-o.x,y:u.y-o.y};f.x===0&&f.y===0||(l?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=f.x,this.lastMoveEventInfo.point.y+=f.y):this.history.length>0&&(this.history[0].x-=f.x,this.history[0].y-=f.y),this.scrollPositions.set(r,u),be.update(this.updatePoint,!0))}updateHandlers(r){this.handlers=r}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),Dn(this.updatePoint)}}function Sa(n,r){return r?{point:r(n.point)}:n}function Yp(n,r){return{x:n.x-r.x,y:n.y-r.y}}function ka({point:n},r){return{point:n,delta:Yp(n,Fh(r)),offset:Yp(n,Sx(r)),velocity:kx(r,.1)}}function Sx(n){return n[0]}function Fh(n){return n[n.length-1]}function kx(n,r){if(n.length<2)return{x:0,y:0};let o=n.length-1,l=null;const u=Fh(n);for(;o>=0&&(l=n[o],!(u.timestamp-l.timestamp>Bt(r)));)o--;if(!l)return{x:0,y:0};l===n[0]&&n.length>2&&u.timestamp-l.timestamp>Bt(r)*2&&(l=n[1]);const f=Et(u.timestamp-l.timestamp);if(f===0)return{x:0,y:0};const d={x:(u.x-l.x)/f,y:(u.y-l.y)/f};return d.x===1/0&&(d.x=0),d.y===1/0&&(d.y=0),d}function bx(n,{min:r,max:o},l){return r!==void 0&&n<r?n=l?je(r,n,l.min):Math.max(n,r):o!==void 0&&n>o&&(n=l?je(o,n,l.max):Math.min(n,o)),n}function Wp(n,r,o){return{min:r!==void 0?n.min+r:void 0,max:o!==void 0?n.max+o-(n.max-n.min):void 0}}function Cx(n,{top:r,left:o,bottom:l,right:u}){return{x:Wp(n.x,o,u),y:Wp(n.y,r,l)}}function Hp(n,r){let o=r.min-n.min,l=r.max-n.max;return r.max-r.min<n.max-n.min&&([o,l]=[l,o]),{min:o,max:l}}function Tx(n,r){return{x:Hp(n.x,r.x),y:Hp(n.y,r.y)}}function Px(n,r){let o=.5;const l=at(n),u=at(r);return u>l?o=Es(r.min,r.max-l,n.min):l>u&&(o=Es(n.min,n.max-u,r.min)),Kt(0,1,o)}function Ex(n,r){const o={};return r.min!==void 0&&(o.min=r.min-n.min),r.max!==void 0&&(o.max=r.max-n.min),o}const qa=.35;function Mx(n=qa){return n===!1?n=0:n===!0&&(n=qa),{x:Qp(n,"left","right"),y:Qp(n,"top","bottom")}}function Qp(n,r,o){return{min:Xp(n,r),max:Xp(n,o)}}function Xp(n,r){return typeof n=="number"?n:n[r]||0}const Dx=new WeakMap;class Lx{constructor(r){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=We(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=r}start(r,{snapToCursor:o=!1,distanceThreshold:l}={}){const{presenceContext:u}=this.visualElement;if(u&&u.isPresent===!1)return;const f=y=>{o&&this.snapToCursor(Ns(y).point),this.stopAnimation()},d=(y,x)=>{const{drag:b,dragPropagation:T,onDragStart:R}=this.getProps();if(b&&!T&&(this.openDragLock&&this.openDragLock(),this.openDragLock=e1(b),!this.openDragLock))return;this.latestPointerEvent=y,this.latestPanInfo=x,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Xt(j=>{let I=this.getAxisMotionValue(j).get()||0;if($t.test(I)){const{projection:A}=this.visualElement;if(A&&A.layout){const B=A.layout.layoutBox[j];B&&(I=at(B)*(parseFloat(I)/100))}}this.originPoint[j]=I}),R&&be.update(()=>R(y,x),!1,!0),Ya(this.visualElement,"transform");const{animationState:L}=this.visualElement;L&&L.setActive("whileDrag",!0)},p=(y,x)=>{this.latestPointerEvent=y,this.latestPanInfo=x;const{dragPropagation:b,dragDirectionLock:T,onDirectionLock:R,onDrag:L}=this.getProps();if(!b&&!this.openDragLock)return;const{offset:j}=x;if(T&&this.currentDirection===null){this.currentDirection=Ax(j),this.currentDirection!==null&&R&&R(this.currentDirection);return}this.updateAxis("x",x.point,j),this.updateAxis("y",x.point,j),this.visualElement.render(),L&&be.update(()=>L(y,x),!1,!0)},h=(y,x)=>{this.latestPointerEvent=y,this.latestPanInfo=x,this.stop(y,x),this.latestPointerEvent=null,this.latestPanInfo=null},_=()=>{const{dragSnapToOrigin:y}=this.getProps();(y||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:g}=this.getProps();this.panSession=new Bh(r,{onSessionStart:f,onStart:d,onMove:p,onSessionEnd:h,resumeAnimation:_},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:g,distanceThreshold:l,contextWindow:Oh(this.visualElement),element:this.visualElement.current})}stop(r,o){const l=r||this.latestPointerEvent,u=o||this.latestPanInfo,f=this.isDragging;if(this.cancel(),!f||!u||!l)return;const{velocity:d}=u;this.startAnimation(d);const{onDragEnd:p}=this.getProps();p&&be.postRender(()=>p(l,u))}cancel(){this.isDragging=!1;const{projection:r,animationState:o}=this.visualElement;r&&(r.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:l}=this.getProps();!l&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),o&&o.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(r,o,l){const{drag:u}=this.getProps();if(!l||!Go(r,u,this.currentDirection))return;const f=this.getAxisMotionValue(r);let d=this.originPoint[r]+l[r];this.constraints&&this.constraints[r]&&(d=bx(d,this.constraints[r],this.elastic[r])),f.set(d)}resolveConstraints(){var f;const{dragConstraints:r,dragElastic:o}=this.getProps(),l=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(f=this.visualElement.projection)==null?void 0:f.layout,u=this.constraints;r&&br(r)?this.constraints||(this.constraints=this.resolveRefConstraints()):r&&l?this.constraints=Cx(l.layoutBox,r):this.constraints=!1,this.elastic=Mx(o),u!==this.constraints&&!br(r)&&l&&this.constraints&&!this.hasMutatedConstraints&&Xt(d=>{this.constraints!==!1&&this.getAxisMotionValue(d)&&(this.constraints[d]=Ex(l.layoutBox[d],this.constraints[d]))})}resolveRefConstraints(){const{dragConstraints:r,onMeasureDragConstraints:o}=this.getProps();if(!r||!br(r))return!1;const l=r.current,{projection:u}=this.visualElement;if(!u||!u.layout)return!1;const f=M1(l,u.root,this.visualElement.getTransformPagePoint());let d=Tx(u.layout.layoutBox,f);if(o){const p=o(T1(d));this.hasMutatedConstraints=!!p,p&&(d=lh(p))}return d}startAnimation(r){const{drag:o,dragMomentum:l,dragElastic:u,dragTransition:f,dragSnapToOrigin:d,onDragTransitionEnd:p}=this.getProps(),h=this.constraints||{},_=Xt(g=>{if(!Go(g,o,this.currentDirection))return;let y=h&&h[g]||{};d&&(y={min:0,max:0});const x=u?200:1e6,b=u?40:1e7,T={type:"inertia",velocity:l?r[g]:0,bounceStiffness:x,bounceDamping:b,timeConstant:750,restDelta:1,restSpeed:10,...f,...y};return this.startAxisValueAnimation(g,T)});return Promise.all(_).then(p)}startAxisValueAnimation(r,o){const l=this.getAxisMotionValue(r);return Ya(this.visualElement,r),l.start(vu(r,l,0,o,this.visualElement,!1))}stopAnimation(){Xt(r=>this.getAxisMotionValue(r).stop())}getAxisMotionValue(r){const o=`_drag${r.toUpperCase()}`,l=this.visualElement.getProps(),u=l[o];return u||this.visualElement.getValue(r,(l.initial?l.initial[r]:void 0)||0)}snapToCursor(r){Xt(o=>{const{drag:l}=this.getProps();if(!Go(o,l,this.currentDirection))return;const{projection:u}=this.visualElement,f=this.getAxisMotionValue(o);if(u&&u.layout){const{min:d,max:p}=u.layout.layoutBox[o],h=f.get()||0;f.set(r[o]-je(d,p,.5)+h)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:r,dragConstraints:o}=this.getProps(),{projection:l}=this.visualElement;if(!br(o)||!l||!this.constraints)return;this.stopAnimation();const u={x:0,y:0};Xt(d=>{const p=this.getAxisMotionValue(d);if(p&&this.constraints!==!1){const h=p.get();u[d]=Px({min:h,max:h},this.constraints[d])}});const{transformTemplate:f}=this.visualElement.getProps();this.visualElement.current.style.transform=f?f({},""):"none",l.root&&l.root.updateScroll(),l.updateLayout(),this.constraints=!1,this.resolveConstraints(),Xt(d=>{if(!Go(d,r,null))return;const p=this.getAxisMotionValue(d),{min:h,max:_}=this.constraints[d];p.set(je(h,_,u[d]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;Dx.set(this.visualElement,this);const r=this.visualElement.current,o=Ts(r,"pointerdown",_=>{const{drag:g,dragListener:y=!0}=this.getProps(),x=_.target,b=x!==r&&i1(x);g&&y&&!b&&this.start(_)});let l;const u=()=>{const{dragConstraints:_}=this.getProps();br(_)&&_.current&&(this.constraints=this.resolveRefConstraints(),l||(l=Rx(r,_.current,()=>this.scalePositionWithinConstraints())))},{projection:f}=this.visualElement,d=f.addEventListener("measure",u);f&&!f.layout&&(f.root&&f.root.updateScroll(),f.updateLayout()),be.read(u);const p=Rs(window,"resize",()=>this.scalePositionWithinConstraints()),h=f.addEventListener("didUpdate",(({delta:_,hasLayoutChanged:g})=>{this.isDragging&&g&&(Xt(y=>{const x=this.getAxisMotionValue(y);x&&(this.originPoint[y]+=_[y].translate,x.set(x.get()+_[y].translate))}),this.visualElement.render())}));return()=>{p(),o(),d(),h&&h(),l&&l()}}getProps(){const r=this.visualElement.getProps(),{drag:o=!1,dragDirectionLock:l=!1,dragPropagation:u=!1,dragConstraints:f=!1,dragElastic:d=qa,dragMomentum:p=!0}=r;return{...r,drag:o,dragDirectionLock:l,dragPropagation:u,dragConstraints:f,dragElastic:d,dragMomentum:p}}}function $p(n){let r=!0;return()=>{if(r){r=!1;return}n()}}function Rx(n,r,o){const l=qf(n,$p(o)),u=qf(r,$p(o));return()=>{l(),u()}}function Go(n,r,o){return(r===!0||r===n)&&(o===null||o===n)}function Ax(n,r=10){let o=null;return Math.abs(n.y)>r?o="y":Math.abs(n.x)>r&&(o="x"),o}class Ix extends Ln{constructor(r){super(r),this.removeGroupControls=Mt,this.removeListeners=Mt,this.controls=new Lx(r)}mount(){const{dragControls:r}=this.node.getProps();r&&(this.removeGroupControls=r.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Mt}update(){const{dragControls:r}=this.node.getProps(),{dragControls:o}=this.node.prevProps||{};r!==o&&(this.removeGroupControls(),r&&(this.removeGroupControls=r.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const ba=n=>(r,o)=>{n&&be.update(()=>n(r,o),!1,!0)};class jx extends Ln{constructor(){super(...arguments),this.removePointerDownListener=Mt}onPointerDown(r){this.session=new Bh(r,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Oh(this.node)})}createPanHandlers(){const{onPanSessionStart:r,onPanStart:o,onPan:l,onPanEnd:u}=this.node.getProps();return{onSessionStart:ba(r),onStart:ba(o),onMove:ba(l),onEnd:(f,d)=>{delete this.session,u&&be.postRender(()=>u(f,d))}}}mount(){this.removePointerDownListener=Ts(this.node.current,"pointerdown",r=>this.onPointerDown(r))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let Ca=!1;class Nx extends M.Component{componentDidMount(){const{visualElement:r,layoutGroup:o,switchLayoutGroup:l,layoutId:u}=this.props,{projection:f}=r;f&&(o.group&&o.group.add(f),l&&l.register&&u&&l.register(f),Ca&&f.root.didUpdate(),f.addEventListener("animationComplete",()=>{this.safeToRemove()}),f.setOptions({...f.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),ni.hasEverUpdated=!0}getSnapshotBeforeUpdate(r){const{layoutDependency:o,visualElement:l,drag:u,isPresent:f}=this.props,{projection:d}=l;return d&&(d.isPresent=f,r.layoutDependency!==o&&d.setOptions({...d.options,layoutDependency:o}),Ca=!0,u||r.layoutDependency!==o||o===void 0||r.isPresent!==f?d.willUpdate():this.safeToRemove(),r.isPresent!==f&&(f?d.promote():d.relegate()||be.postRender(()=>{const p=d.getStack();(!p||!p.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:r}=this.props.visualElement;r&&(r.root.didUpdate(),ku.postRender(()=>{!r.currentAnimation&&r.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:r,layoutGroup:o,switchLayoutGroup:l}=this.props,{projection:u}=r;Ca=!0,u&&(u.scheduleCheckAfterUnmount(),o&&o.group&&o.group.remove(u),l&&l.deregister&&l.deregister(u))}safeToRemove(){const{safeToRemove:r}=this.props;r&&r()}render(){return null}}function Uh(n){const[r,o]=Mh(),l=M.useContext(Ps);return D.jsx(Nx,{...n,layoutGroup:l,switchLayoutGroup:M.useContext(Vh),isPresent:r,safeToRemove:o})}const Vx={pan:{Feature:jx},drag:{Feature:Ix,ProjectionNode:Eh,MeasureLayout:Uh}};function Kp(n,r,o){const{props:l}=n;n.animationState&&l.whileHover&&n.animationState.setActive("whileHover",o==="Start");const u="onHover"+o,f=l[u];f&&be.postRender(()=>f(r,Ns(r)))}class zx extends Ln{mount(){const{current:r}=this.node;r&&(this.unmount=n1(r,(o,l)=>(Kp(this.node,l,"Start"),u=>Kp(this.node,u,"End"))))}unmount(){}}class Ox extends Ln{constructor(){super(...arguments),this.isActive=!1}onFocus(){let r=!1;try{r=this.node.current.matches(":focus-visible")}catch{r=!0}!r||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=As(Rs(this.node.current,"focus",()=>this.onFocus()),Rs(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function Gp(n,r,o){const{props:l}=n;if(n.current instanceof HTMLButtonElement&&n.current.disabled)return;n.animationState&&l.whileTap&&n.animationState.setActive("whileTap",o==="Start");const u="onTap"+(o==="End"?"":o),f=l[u];f&&be.postRender(()=>f(r,Ns(r)))}class Bx extends Ln{mount(){const{current:r}=this.node;if(!r)return;const{globalTapTarget:o,propagate:l}=this.node.props;this.unmount=a1(r,(u,f)=>(Gp(this.node,f,"Start"),(d,{success:p})=>Gp(this.node,d,p?"End":"Cancel")),{useGlobalTarget:o,stopPropagation:(l==null?void 0:l.tap)===!1})}unmount(){}}const eu=new WeakMap,Ta=new WeakMap,Fx=n=>{const r=eu.get(n.target);r&&r(n)},Ux=n=>{n.forEach(Fx)};function Yx({root:n,...r}){const o=n||document;Ta.has(o)||Ta.set(o,{});const l=Ta.get(o),u=JSON.stringify(r);return l[u]||(l[u]=new IntersectionObserver(Ux,{root:n,...r})),l[u]}function Wx(n,r,o){const l=Yx(r);return eu.set(n,o),l.observe(n),()=>{eu.delete(n),l.unobserve(n)}}const Hx={some:0,all:1};class Qx extends Ln{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:r={}}=this.node.getProps(),{root:o,margin:l,amount:u="some",once:f}=r,d={root:o?o.current:void 0,rootMargin:l,threshold:typeof u=="number"?u:Hx[u]},p=h=>{const{isIntersecting:_}=h;if(this.isInView===_||(this.isInView=_,f&&!_&&this.hasEnteredView))return;_&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",_);const{onViewportEnter:g,onViewportLeave:y}=this.node.getProps(),x=_?g:y;x&&x(h)};return Wx(this.node.current,d,p)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:r,prevProps:o}=this.node;["amount","margin","root"].some(Xx(r,o))&&this.startObserver()}unmount(){}}function Xx({viewport:n={}},{viewport:r={}}={}){return o=>n[o]!==r[o]}const $x={inView:{Feature:Qx},tap:{Feature:Bx},focus:{Feature:Ox},hover:{Feature:zx}},Kx={layout:{ProjectionNode:Eh,MeasureLayout:Uh}},Gx={...vx,...$x,...Vx,...Kx},ye=mx(Gx,hx);function Zx(n,r,o,l,u){const f=(_,g,y,x)=>{const b=(x-90)*Math.PI/180;return{x:_+y*Math.cos(b),y:g+y*Math.sin(b)}},d=f(n,r,o,u),p=f(n,r,o,l),h=u-l<=180?"0":"1";return`M ${d.x} ${d.y} A ${o} ${o} 0 ${h} 0 ${p.x} ${p.y}`}const Zp={party:{from:"#2BD94D",to:"#ffffff"},"feel-good":{from:"#D4A017",to:"#ffffff"},soft:{from:"#C06090",to:"#ffffff"},indie:{from:"#1A8A7A",to:"#ffffff"},nostalgic:{from:"#9A6030",to:"#ffffff"},sad:{from:"#2A3580",to:"#ffffff"},love:{from:"#C02040",to:"#ffffff"},hiphop:{from:"#351850",to:"#ffffff"}},Qn=[{name:"party",paths:{lEye:"M 60 75 Q 75 55 90 75",rEye:"M 110 75 Q 125 55 140 75",mouth:"M 65 110 Q 100 160 135 110"}},{name:"feel-good",paths:{lEye:"M 60 85 Q 75 70 90 85",rEye:"M 110 85 Q 125 70 140 85",mouth:"M 70 115 Q 100 145 130 115"}},{name:"soft",paths:{lEye:"M 60 85 Q 75 90 90 85",rEye:"M 110 85 Q 125 90 140 85",mouth:"M 85 125 Q 100 130 115 125"}},{name:"indie",paths:{lEye:"M 60 82 Q 75 78 90 86",rEye:"M 110 86 Q 125 78 140 82",mouth:"M 75 128 Q 100 133 125 126"}},{name:"nostalgic",paths:{lEye:"M 60 82 Q 75 70 90 78",rEye:"M 110 78 Q 125 70 140 82",mouth:"M 78 128 Q 100 136 122 130"}},{name:"sad",paths:{lEye:"M 60 90 Q 75 75 90 90",rEye:"M 110 90 Q 125 75 140 90",mouth:"M 70 135 Q 100 115 130 135"}},{name:"love",paths:{lEye:"M 60 80 Q 75 55 90 80",rEye:"M 110 80 Q 125 55 140 80",mouth:"M 85 125 Q 100 140 115 125"}},{name:"hiphop",paths:{lEye:"M 60 75 Q 75 85 90 90",rEye:"M 110 90 Q 125 85 140 75",mouth:"M 70 130 Q 100 140 130 125"}}];function Jx({onMoodConfirmed:n,accentColor:r="#4A30F0",selectedMood:o=null,nudge:l=!1}){const u={dragMaxOffset:24,dragScale:.88,pullScale:.95,nudgeScale:1.1,hoverScale:1.02,pullOffsetX:20,pullOffsetY:20,pullTweenDuration:.6,pullEase:{x1:.7,y1:1,x2:.7,y2:1},_snapStiffness:220,_snapDamping:14,_snapMass:1,_pullStiffness:230,_pullDamping:14,_pullMass:1,_innerShadowStiffness:210,_innerShadowDamping:12,dragEase:{x1:.5,y1:.6,x2:.6,y2:.8},tabStrokeDuration:.5,shadowTransitionDuration:.3,scaleTransitionDuration:.4,shadowBlurIntensity:12,shadowDirectionalStrength:.4,glowInitialScale:.85,glowPeakScale:1.15,glowFinalScale:1.1,glowDuration:1.2,glowFadeDuration:1.5,tabPathStrokeWidth:4,tabPathStrokeWidthActive:6,tabPathStrokeWidthRubberBand:5.5,tabGlowStrokeWidth:5},[f,d]=M.useState(3),[p,h]=M.useState(!1),[_,g]=M.useState(!1),[y,x]=M.useState(!1),[b,T]=M.useState({x:0,y:0}),[R,L]=M.useState(!0),[j,I]=M.useState([]),[A,B]=M.useState(!0),[U,K]=M.useState(!1),[ee,W]=M.useState(null),$=M.useRef([]),oe=M.useRef(null),ce=M.useRef(!1),fe=M.useRef({x:0,y:0}),ie=M.useRef(!1),Se=Qn[f],Ce=ee!==null,Pe=p||!y||U,_e=M.useMemo(()=>[{x:-20,y:0,moodIndex:0},{x:0,y:-20,moodIndex:2},{x:u.pullOffsetX,y:0,moodIndex:4},{x:0,y:u.pullOffsetY,moodIndex:6}],[u.pullOffsetX,u.pullOffsetY]);M.useEffect(()=>{if(!o){x(!1);return}const Ee=Qn.findIndex(Le=>Le.name===o);Ee>=0&&(d(Ee),x(!0))},[o]),M.useEffect(()=>{const Ee=[];return Qn.forEach((Le,qe)=>{Ee.push(setTimeout(()=>{I(_t=>[..._t,qe])},qe*120))}),Ee.push(setTimeout(()=>B(!1),Qn.length*120+600)),Ee.push(setTimeout(()=>L(!1),2200)),Ee.push(setTimeout(()=>K(!0),Qn.length*120+1e3)),()=>Ee.forEach(clearTimeout)},[]);const z=M.useCallback(()=>{$.current.forEach(clearTimeout),$.current=[];const Ee=_t=>{for(let ut=0;ut<_e.length;ut++){const gt=_e[ut],Dt=_t+ut*2800;$.current.push(setTimeout(()=>{W(gt),d(gt.moodIndex)},Dt)),$.current.push(setTimeout(()=>{W(null),d(3)},Dt+900))}return _e.length*2800},Le=Ee(0),qe=setInterval(()=>{$.current.forEach(clearTimeout),$.current=[],Ee(0)},Le);$.current.push(qe)},[_e]);M.useEffect(()=>{if(!U||y||p){$.current.forEach(clearTimeout),$.current=[],W(null);return}return z(),()=>{$.current.forEach(clearTimeout),$.current=[]}},[U,y,p,z]);const H=Ee=>{if(Ee.currentTarget.setPointerCapture(Ee.pointerId),ce.current=!0,ie.current=!1,h(!0),K(!1),oe.current){const Le=oe.current.getBoundingClientRect();fe.current={x:Le.left+Le.width/2,y:Le.top+Le.height/2}}},Q=Ee=>{if(!ce.current)return;const Le=Ee.clientX-fe.current.x,qe=Ee.clientY-fe.current.y,_t=Math.sqrt(Le*Le+qe*qe);if(_t>5){ie.current=!0;const ut=u.dragMaxOffset,gt=Math.min(_t,100)/100;T({x:Le/_t*ut*gt,y:qe/_t*ut*gt});const Dt=(Math.atan2(qe,Le)*(180/Math.PI)+180+360)%360,Gt=Math.round(Dt/45)%8;d(Gt),x(!0)}},k=Ee=>{Ee.currentTarget.releasePointerCapture(Ee.pointerId),ce.current=!1,h(!1),T({x:0,y:0}),ie.current&&y&&(n==null||n(Qn[f].name))},N=Ce?ee.x:b.x,le=Ce?ee.y:b.y,ae="0px 10px 30px rgba(0,0,0,0.15)",de=u.shadowDirectionalStrength,pe=u.shadowBlurIntensity,we=p||Ce?`inset ${-N*de}px ${-le*de}px ${pe}px rgba(255,255,255,0.4), inset ${N*de*.5}px ${le*de*.5}px ${pe*.8}px rgba(0,0,0,0.08)`:"inset 0 8px 16px rgba(0,0,0,0.06)",me={type:"spring",stiffness:u._pullStiffness,damping:u._pullDamping,mass:u._pullMass},ve={type:"spring",stiffness:u._snapStiffness,damping:u._snapDamping,mass:u._snapMass},Je=Ce?{x:{type:"tween",duration:u.pullTweenDuration,ease:[u.pullEase.x1,u.pullEase.y1,u.pullEase.x2,u.pullEase.y2]},y:{type:"tween",duration:u.pullTweenDuration,ease:[u.pullEase.x1,u.pullEase.y1,u.pullEase.x2,u.pullEase.y2]},scale:me,boxShadow:{...me,duration:u.shadowTransitionDuration}}:p?{x:{type:"tween",duration:.12,ease:[u.dragEase.x1,u.dragEase.y1,u.dragEase.x2,u.dragEase.y2]},y:{type:"tween",duration:.12,ease:[u.dragEase.x1,u.dragEase.y1,u.dragEase.x2,u.dragEase.y2]},scale:ve,boxShadow:ve}:{x:ve,y:ve,scale:{...me,duration:u.scaleTransitionDuration},boxShadow:{...me,duration:u.shadowTransitionDuration}},Zn={"--dial-size":"clamp(200px, min(64vw, 36svh), 280px)","--face-size":"clamp(136px, min(44vw, 24svh), 190px)","--glow-size":"clamp(160px, min(52vw, 28svh), 220px)"};return D.jsxs("div",{className:"flex flex-col items-center relative w-full mt-2",style:{...Zn,gap:"clamp(8px, 1.6svh, 24px)"},children:[D.jsx("p",{className:"font-['Spectral',serif] text-center text-white w-72 leading-[1.2]",style:{fontSize:"clamp(20px, 3.4svh, 26px)"},children:"What would you want to listen twin?"}),D.jsxs("div",{ref:oe,className:"relative flex items-center justify-center mt-0 touch-none cursor-pointer",style:{width:"var(--dial-size)",height:"var(--dial-size)"},onPointerDown:H,onPointerMove:Q,onPointerUp:k,onPointerCancel:k,onPointerEnter:()=>g(!0),onPointerLeave:()=>g(!1),children:[D.jsx("svg",{className:"absolute",width:"0",height:"0",children:D.jsxs("defs",{children:[D.jsxs("filter",{id:"tab-glow",x:"-50%",y:"-50%",width:"200%",height:"200%",children:[D.jsx("feGaussianBlur",{stdDeviation:"3",result:"blur"}),D.jsxs("feMerge",{children:[D.jsx("feMergeNode",{in:"blur"}),D.jsx("feMergeNode",{in:"SourceGraphic"})]})]}),D.jsxs("filter",{id:"tab-glow-active",x:"-50%",y:"-50%",width:"200%",height:"200%",children:[D.jsx("feGaussianBlur",{stdDeviation:"4",result:"blur"}),D.jsxs("feMerge",{children:[D.jsx("feMergeNode",{in:"blur"}),D.jsx("feMergeNode",{in:"blur"}),D.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]})}),D.jsx(ye.svg,{className:"absolute inset-0 w-full h-full pointer-events-none",viewBox:"0 0 280 280",animate:{opacity:Pe?1:0},transition:{duration:u.tabStrokeDuration,ease:"easeInOut"},children:Qn.map((Ee,Le)=>{const qe=Le*45-90,_t=Zx(140,140,130,qe-20,qe+20),ut=y&&Le===f,gt=j.includes(Le),Dt=A&&gt,Gt=Ce&&Le===ee.moodIndex;return D.jsx(ye.path,{d:_t,fill:"none",strokeLinecap:"round",initial:{pathLength:0,opacity:0,strokeWidth:u.tabPathStrokeWidth,stroke:"rgba(255,255,255,0.3)"},animate:{pathLength:gt?1:0,opacity:gt?1:0,stroke:ut?"rgba(255,255,255,1)":Gt?"rgba(255,255,255,0.9)":Dt?"rgba(255,255,255,0.7)":"rgba(255,255,255,0.3)",strokeWidth:ut?u.tabPathStrokeWidthActive:Gt?u.tabPathStrokeWidthRubberBand:Dt?u.tabGlowStrokeWidth:u.tabPathStrokeWidth},transition:{pathLength:{duration:.4,ease:"easeOut"},opacity:{duration:.2},stroke:{duration:u.tabStrokeDuration,ease:"easeInOut"},strokeWidth:{duration:u.tabStrokeDuration,ease:"easeInOut"}},style:{filter:ut?"url(#tab-glow-active)":Dt||Gt?"url(#tab-glow)":"none"}},Ee.name)})}),D.jsx(ye.div,{className:"absolute rounded-full pointer-events-none",style:{width:"var(--glow-size)",height:"var(--glow-size)",background:"radial-gradient(circle, rgba(255,255,255,0.6) 0%, rgba(200,180,255,0.4) 40%, transparent 70%)"},initial:{opacity:0,scale:u.glowInitialScale},animate:{opacity:R?[0,1,.8]:0,scale:R?[u.glowInitialScale,u.glowPeakScale,u.glowFinalScale]:1.3,filter:R?"blur(0px)":"blur(20px)"},transition:{duration:R?u.glowDuration:u.glowFadeDuration,ease:"easeOut"}}),D.jsxs(ye.div,{animate:{x:N,y:le,scale:p?u.dragScale:Ce?u.pullScale:l?u.nudgeScale:_?u.hoverScale:1,boxShadow:l?"0px 0px 40px 8px rgba(255,255,255,0.5), 0px 10px 30px rgba(0,0,0,0.15)":ae},transition:{...Je,scale:{...Je.scale,duration:u.scaleTransitionDuration}},className:"relative rounded-full flex items-center justify-center border-[5px] border-white overflow-hidden pointer-events-none",style:{width:"var(--face-size)",height:"var(--face-size)",backgroundColor:p?"#DFDCFF":"#EBE9FF",transition:"background-color 0.2s ease"},children:[D.jsx(ye.div,{className:"absolute inset-0 rounded-full pointer-events-none",animate:{boxShadow:we},transition:{type:"spring",stiffness:u._innerShadowStiffness,damping:u._innerShadowDamping}}),D.jsxs("svg",{className:"w-full h-full",viewBox:"0 0 200 200",children:[D.jsx(ye.path,{d:Se.paths.lEye,stroke:"#2A2A2A",strokeWidth:"9",strokeLinecap:"round",fill:"none",initial:!1,animate:{d:Se.paths.lEye},transition:{type:"spring",stiffness:300,damping:25}}),D.jsx(ye.path,{d:Se.paths.rEye,stroke:"#2A2A2A",strokeWidth:"9",strokeLinecap:"round",fill:"none",initial:!1,animate:{d:Se.paths.rEye},transition:{type:"spring",stiffness:300,damping:25}}),D.jsx(ye.path,{d:Se.paths.mouth,stroke:"#2A2A2A",strokeWidth:"9",strokeLinecap:"round",fill:"none",initial:!1,animate:{d:Se.paths.mouth},transition:{type:"spring",stiffness:300,damping:25}})]})]})]}),D.jsx(ye.div,{className:"border border-white/50 backdrop-blur-sm py-[4px] rounded-[130px] relative overflow-hidden flex items-center justify-center",style:{height:"clamp(32px, 5.2svh, 40px)",width:y?160:"auto",paddingLeft:y?0:40,paddingRight:y?0:40},animate:{backgroundColor:`${r}1A`,boxShadow:`inset 4px 4px 4px ${r}59, 2px 2px 3px ${r}CC`},transition:{duration:.8,ease:"easeInOut"},children:D.jsx(Ja,{mode:"wait",children:y?D.jsx(ye.span,{className:"font-['Spectral',serif] text-white tracking-[0.24px]",style:{fontSize:"clamp(18px, 3.2svh, 24px)"},initial:{opacity:0,filter:"blur(6px)"},animate:{opacity:1,filter:"blur(0px)"},exit:{opacity:0,filter:"blur(6px)"},transition:{duration:.12,ease:"easeOut"},children:Se.name},Se.name):D.jsx(ye.span,{className:"font-['Spectral',serif] text-white/40 tracking-[0.24px]",style:{fontSize:"clamp(14px, 2.4svh, 18px)"},initial:{opacity:0,filter:"blur(6px)"},animate:{opacity:1,filter:"blur(0px)"},exit:{opacity:0,filter:"blur(6px)"},transition:{duration:.12,ease:"easeOut"},children:"Hold & drag to pick a mood"},"__initial__")})})]})}const Pa=7;function qx({accentColor:n="#4A30F0",onValueChange:r}){const o={thumbSize:20,thumbPressedSize:26,springVisualDuration:.3,springBounce:.2,shadowIdleBlur:12,shadowPressedBlur:12,shadowPressedGlow:4,shadowIdleOpacity:.25,shadowPressedOpacity:.3,trackHeight:36,trackBorderRadius:30,trackBackdropBlur:2.2,dotSize:4.1,colorTransitionDuration:.4,gradientStartOpacity:.66,gradientMidOpacity:.6,gradientEndOpacity:.44},[l,u]=M.useState(0),[f,d]=M.useState(!1),p=M.useRef(null),h=I=>{u(I),r==null||r(I)},_=I=>{I.currentTarget.setPointerCapture(I.pointerId),d(!0),y(I)},g=I=>{I.currentTarget.hasPointerCapture(I.pointerId)&&y(I)},y=I=>{if(!p.current)return;const A=p.current.getBoundingClientRect(),U=Math.max(0,Math.min(I.clientX-A.left,A.width))/A.width,K=Pa/100,ee=(U-K)/(1-2*K),W=Math.max(0,Math.min(1,ee)),$=Math.round(W*3);h($)},x=I=>{I.currentTarget.releasePointerCapture(I.pointerId),d(!1)},b=I=>Pa+I/3*(100-2*Pa),T=I=>Math.round(I*255).toString(16).padStart(2,"0"),R=n+T(o.gradientStartOpacity),L=n+T(o.gradientMidOpacity),j=n+T(o.gradientEndOpacity);return D.jsxs("div",{className:"flex flex-col gap-1.5 w-full max-w-[360px] px-1",style:{marginBottom:"clamp(4px, 0.6svh, 8px)",marginTop:"clamp(8px, 1.2svh, 16px)"},children:[D.jsxs("div",{ref:p,className:"relative h-12 w-full flex items-center cursor-pointer select-none touch-none",onPointerDown:_,onPointerMove:g,onPointerUp:x,onPointerCancel:()=>d(!1),children:[D.jsx(ye.div,{className:"absolute inset-x-0 top-1/2 -translate-y-1/2",animate:{background:`linear-gradient(135deg, ${R}, ${L}, ${j})`},transition:{duration:o.colorTransitionDuration,ease:[.4,0,.2,1]},style:{height:`${o.trackHeight}px`,borderRadius:`${o.trackBorderRadius}px`,padding:1},children:D.jsx("div",{className:"w-full h-full bg-white/20",style:{borderRadius:`${o.trackBorderRadius}px`,backdropFilter:`blur(${o.trackBackdropBlur}px)`}})}),[0,1,2,3].map(I=>D.jsx(ye.div,{className:"absolute top-1/2 rounded-full z-10",animate:{backgroundColor:n,x:"-50%",y:"-50%"},transition:{backgroundColor:{duration:o.colorTransitionDuration,ease:[.4,0,.2,1]}},style:{width:`${o.dotSize}px`,height:`${o.dotSize}px`,left:`${b(I)}%`}},I)),D.jsx(ye.div,{className:"absolute top-1/2 z-20 flex items-center justify-center rounded-full",initial:!1,animate:{left:`${b(l)}%`,x:"-50%",y:"-50%",backgroundColor:n,width:f?o.thumbPressedSize:o.thumbSize,height:f?o.thumbPressedSize:o.thumbSize,boxShadow:f?`0 0 ${o.shadowPressedBlur}px ${o.shadowPressedGlow}px ${n}${T(o.shadowPressedOpacity)}, 0 2px 8px rgba(0,0,0,0.3)`:`0 2px ${o.shadowIdleBlur}px rgba(0,0,0,${o.shadowIdleOpacity})`},transition:{left:{type:"spring",visualDuration:o.springVisualDuration,bounce:o.springBounce},x:{type:"spring",visualDuration:o.springVisualDuration,bounce:o.springBounce},width:{type:"spring",visualDuration:o.springVisualDuration,bounce:o.springBounce},height:{type:"spring",visualDuration:o.springVisualDuration,bounce:o.springBounce},backgroundColor:{duration:o.colorTransitionDuration,ease:[.4,0,.2,1]},boxShadow:{duration:o.colorTransitionDuration,ease:[.4,0,.2,1]}}})]}),D.jsxs("div",{className:"flex justify-between items-center text-white font-medium px-4 tracking-[0.14px]",style:{fontSize:"clamp(12px, 2svh, 14px)"},children:[D.jsx("span",{children:"Underrated"}),D.jsx("span",{children:"Popular"})]})]})}const Yh="",e5=["party","feel-good","soft","indie","nostalgic","sad","love","hiphop"],Jp={party:{song_name:"Levitating",artist:["Dua Lipa"],album_image:"https://i.scdn.co/image/ab67616d0000b273d4daf28d55fe4197ede848be",spotify_url:"https://open.spotify.com/track/39LLxExYz6ewLAo9BPVTTA",popularity:85,release_year:2020,duration_ms:203064,album_name:"Future Nostalgia",album_id:"5lKlFlReHOLShQKyRv6AL9",release_date:"2020-03-27",release_date_precision:"day"},"feel-good":{song_name:"Here Comes the Sun",artist:["The Beatles"],album_image:"https://i.scdn.co/image/ab67616d0000b273dc30583ba717007b00cceb25",spotify_url:"https://open.spotify.com/track/6dGnYIeXmHdcikdzNNDMm2",popularity:82,release_year:1969,duration_ms:185733,album_name:"Abbey Road",album_id:"0ETFjACtuP2ADo6LFhL6HN",release_date:"1969-09-26",release_date_precision:"day"},soft:{song_name:"Skinny Love",artist:["Bon Iver"],album_image:"https://i.scdn.co/image/ab67616d0000b273a7d1a03d31c1a6f665cf6288",spotify_url:"https://open.spotify.com/track/2SrSdSvpminqmStGELCSNd",popularity:76,release_year:2008,duration_ms:218427,album_name:"For Emma, Forever Ago",album_id:"4bJCKmpKEbOmig1lCBMz9r",release_date:"2008-02-19",release_date_precision:"day"},indie:{song_name:"Do I Wanna Know?",artist:["Arctic Monkeys"],album_image:"https://i.scdn.co/image/ab67616d0000b2730c64e752dec4c08362cc4f3b",spotify_url:"https://open.spotify.com/track/5FVd6KXrgO9B3JPmGaZMoD",popularity:87,release_year:2013,duration_ms:272394,album_name:"AM",album_id:"78bpIziExqiI9qztvNFlQu",release_date:"2013-09-09",release_date_precision:"day"},nostalgic:{song_name:"Dreams",artist:["Fleetwood Mac"],album_image:"https://i.scdn.co/image/ab67616d0000b273e52a59a28efa4773163d9a2b",spotify_url:"https://open.spotify.com/track/0ofHAoxe9vBkTCp2UQIavz",popularity:83,release_year:1977,duration_ms:254573,album_name:"Rumours",album_id:"1bt6q2SruMsBtcerNVtpZB",release_date:"1977-02-04",release_date_precision:"day"},sad:{song_name:"Motion Sickness",artist:["Phoebe Bridgers"],album_image:"https://i.scdn.co/image/ab67616d0000b2733e79e3388e41175bf16e20ab",spotify_url:"https://open.spotify.com/track/2bAZSDDKBLkdi3KlnPnEgb",popularity:73,release_year:2017,duration_ms:256200,album_name:"Stranger in the Alps",album_id:"7JHDsNJOiIuhBbKBbGJulq",release_date:"2017-09-22",release_date_precision:"day"},love:{song_name:"At Last",artist:["Etta James"],album_image:"https://i.scdn.co/image/ab67616d0000b27345c7f4be63e5361c4e8f4e78",spotify_url:"https://open.spotify.com/track/0m71tlxPsjVMPR9g3sJVud",popularity:78,release_year:1960,duration_ms:181333,album_name:"At Last!",album_id:"3lLzlv2v3OPElEO63YVEHX",release_date:"1960-11-15",release_date_precision:"day"},hiphop:{song_name:"m.A.A.d city",artist:["Kendrick Lamar","MC Eiht"],album_image:"https://i.scdn.co/image/ab67616d0000b273d28d2ebdedb220e479743797",spotify_url:"https://open.spotify.com/track/4MV4cRGSFWoYmmhdKkGaOH",popularity:74,release_year:2012,duration_ms:34e4,album_name:"good kid, m.A.A.d city",album_id:"3DGQ1iZ9XKUQxAUWjfC34w",release_date:"2012-10-22",release_date_precision:"day"}};function Wh(n){return n.includes("ab67616d0000b273")?n.replace("ab67616d0000b273","ab67616d00004851"):n}function qp(n){return Jp[n]??Jp.indie}async function t5(n,r){const o=`${Yh}/api/get-song?mood=${encodeURIComponent(n)}&sliderValue=${encodeURIComponent(String(r))}`;let l;try{l=await fetch(o,{headers:{Accept:"application/json"},cache:"no-store"})}catch{return qp(n)}const u=l.headers.get("content-type")??"";let f=null;return u.includes("application/json")?f=await l.json().catch(()=>null):f=await l.text().catch(()=>null),l.ok?f:qp(n)}async function n5(n,r=80){const o=`${Yh}/api/get-album-images?mood=${encodeURIComponent(n)}&limit=${encodeURIComponent(String(r))}`;let l;try{l=await fetch(o,{headers:{Accept:"application/json"}})}catch{return[]}const f=(l.headers.get("content-type")??"").includes("application/json")?await l.json().catch(()=>({})):{};return l.ok?(Array.isArray(f==null?void 0:f.images)?f.images:[]).filter(p=>typeof p=="string").map(p=>Wh(p)):[]}async function r5(n=80){const r=await Promise.allSettled(e5.map(async l=>{const u=await n5(l,n);return{mood:l,images:u}})),o=new Map;for(const l of r)l.status==="fulfilled"&&o.set(l.value.mood,l.value.images);return o}function em(n,r=20){const o=n.slice(0,r);return n.slice(r).forEach(u=>{const f=new Image;f.src=u}),Promise.all(o.map(u=>new Promise(f=>{const d=new Image;d.onload=()=>f(),d.onerror=()=>f(),d.src=u}))).then(()=>{})}const En="/assets/256b80c8e3feddbc7d9121f96f8a5007c5f523ae-FvoqZGWd.png",s5={cols:7,rows:9,tileSize:56,tileGap:14,rowGap:10,titleDelay:.15,titleDuration:.5,gridIntroDuration:.6,gridIntroBlur:8,enableCycling:!0,cycleMs:2200,cycleBuckets:4,heroSize:58},o5={cols:5,rows:7,tileSize:46,tileGap:10,rowGap:8,titleDelay:.08,titleDuration:.35,gridIntroDuration:.4,gridIntroBlur:4,enableCycling:!1,cycleMs:0,cycleBuckets:1,heroSize:50};function i5(n){let r=0;for(let o=0;o<n.length;o+=1)r=r*31+n.charCodeAt(o)|0;return Math.abs(r)}const tm=G0.memo(function({src:r,alt:o,className:l,loading:u="eager",style:f}){const[d,p]=M.useState(!1),[h,_]=M.useState(r),g=M.useRef(null);return M.useEffect(()=>{var y;(y=g.current)!=null&&y.complete&&g.current.naturalWidth>0&&p(!0)},[r]),M.useEffect(()=>{p(!1),_(r)},[r]),D.jsxs(D.Fragment,{children:[!d&&D.jsx("div",{className:"absolute inset-0 rounded-full",style:{background:"rgba(255,255,255,0.08)",animation:"pulse 1.6s ease-in-out infinite"}}),D.jsx("img",{ref:g,alt:o,className:l,src:h,loading:u,decoding:"async",onLoad:()=>p(!0),onError:()=>{h!==En&&_(En)},style:{...f,opacity:d?1:0,transition:"opacity 0.22s ease"}})]})});function l5({mood:n,popularity:r,images:o=[],highlightImageUrl:l,morph:u}){const[f,d]=M.useState(!1),[p,h]=M.useState(0);M.useEffect(()=>{var U;const L=navigator,j=window.matchMedia("(prefers-reduced-motion: reduce)").matches,I=((U=L.connection)==null?void 0:U.saveData)===!0,A=typeof L.deviceMemory=="number"&&L.deviceMemory<=2,B=typeof L.hardwareConcurrency=="number"&&L.hardwareConcurrency<=2;d(j||I||A&&B)},[]);const _=f?o5:s5,g=_.cols*_.rows,{rows:y,hero:x,imagePool:b}=M.useMemo(()=>{const L=o.filter(Boolean),j=Array.from(new Set(L)),I=l??null,A=I?Wh(I):null,B=j.filter(ce=>ce!==A),K=[...B.length>0?B:[En]].sort(()=>Math.random()-.5),ee=[];for(let ce=0;ce<g;ce+=1)ee.push(K[ce%K.length]);const W=[];for(let ce=0;ce<ee.length;ce+=_.cols){const fe=ee.slice(ce,ce+_.cols);if(fe.length===0||(W.push(fe),W.length>=_.rows))break}W.length===0&&W.push([En]);let $=0,oe=0;if(A){const ce=i5(A);$=ce%W.length,oe=Math.min(Math.floor(ce/Math.max(1,W.length))%_.cols,Math.max(0,_.cols-1));const fe=W[$]??[];fe[oe]=A,W[$]=fe}return{rows:W,hero:A?{rowIndex:$,colIndex:oe}:null,imagePool:K}},[o,l,g,_.cols,_.rows]);M.useEffect(()=>{h(0)},[b]),M.useEffect(()=>{if(!_.enableCycling||b.length<2)return;const L=window.setInterval(()=>{h(j=>j+1)},_.cycleMs);return()=>window.clearInterval(L)},[b.length,_.cycleMs,_.enableCycling]);const T=L=>{if(b.length===0)return En;if(!_.enableCycling||b.length<2)return b[L%b.length];const j=L%_.cycleBuckets,I=Math.floor((p+j)/_.cycleBuckets),A=(L+I)%b.length;return b[A]??En},R=_.enableCycling?p%_.cycleBuckets:-1;return D.jsxs("div",{className:"w-screen flex flex-col items-center flex-1 pt-[16px] sm:pt-[24px]",children:[D.jsx("style",{children:`
        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
      `}),D.jsx(ye.p,{className:"font-['Spectral',serif] text-center text-white w-full px-6",style:{fontSize:"clamp(20px, 3.4svh, 24px)",lineHeight:"clamp(24px, 4svh, 28px)"},initial:{opacity:0,y:8},animate:{opacity:1,y:0},transition:{duration:_.titleDuration,delay:_.titleDelay},children:"Recommending the perfect one from our hand picked collection"}),D.jsx(ye.div,{className:"flex-1 w-screen flex flex-col justify-center pointer-events-none",style:{marginTop:24,paddingBottom:"clamp(8px, 1.5svh, 24px)",marginLeft:"calc(50% - 50vw)",marginRight:"calc(50% - 50vw)",gap:_.rowGap,willChange:"filter, opacity"},initial:{opacity:0,filter:`blur(${_.gridIntroBlur}px)`},animate:{opacity:1,filter:"blur(0px)"},transition:{duration:_.gridIntroDuration,ease:"easeOut"},children:y.map((L,j)=>D.jsx("div",{className:"relative w-screen flex justify-center items-center",children:D.jsx("div",{className:"flex justify-center",style:{gap:_.tileGap},children:L.map((I,A)=>{const B=j*_.cols+A;if(x&&j===x.rowIndex&&A===x.colIndex)return D.jsx("div",{className:"relative rounded-full shrink-0 overflow-visible",style:{width:_.heroSize,height:_.heroSize},children:D.jsx(ye.div,{className:"absolute inset-0 overflow-hidden",layoutId:"song-album",initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},style:{borderRadius:u.startRadius},transition:{layout:{...u.spring},opacity:{duration:.28,delay:.08},scale:{duration:.28,delay:.08}},children:D.jsx(tm,{src:I??En,alt:"Featured album cover",className:"absolute inset-0 max-w-none object-cover size-full",loading:"eager"})})},`hero-${j}-${A}`);const K=T(B),ee=B%_.cycleBuckets,W=_.enableCycling&&ee===R;return D.jsx(ye.div,{className:"relative rounded-full shrink-0 overflow-hidden",style:{width:_.tileSize,height:_.tileSize,willChange:"transform, opacity"},animate:W?{opacity:[.78,1],scale:[.985,1]}:{opacity:1,scale:1},transition:{duration:.22,ease:"easeOut"},children:D.jsx(tm,{src:K,alt:"Album cover art",className:"absolute inset-0 max-w-none object-cover size-full",loading:"lazy"})},`tile-${j}-${A}`)})})},`row-${j}`))})]})}const nm={p2d573100:"M15.6754 10.9669C12.5006 12.8523 7.26372 13.0257 4.23295 12.1058C3.74624 11.9581 3.23154 12.233 3.08411 12.7196C2.93659 13.2066 3.21105 13.7209 3.69813 13.8689C7.17725 14.9249 12.9608 14.721 16.6157 12.5514C17.0535 12.2914 17.1971 11.7261 16.9376 11.2891C16.6779 10.8513 16.1121 10.707 15.6754 10.9669ZM15.5714 8.1743C15.3487 7.81286 14.8761 7.69949 14.5151 7.92143C11.8683 9.54844 7.83221 10.0198 4.70078 9.06921C4.2947 8.94649 3.86578 9.17547 3.74243 9.58078C3.62007 9.98686 3.84915 10.415 4.2545 10.5385C7.8317 11.624 12.2787 11.0982 15.3188 9.23001C15.6797 9.00769 15.7934 8.5349 15.5714 8.1743ZM14.3662 5.49237C14.1892 5.2021 13.8113 5.11118 13.5221 5.2881C11.2093 6.70166 8.29811 7.02087 4.86971 6.23782C4.53933 6.16207 4.21006 6.36909 4.13472 6.69945C4.05905 7.02969 4.26529 7.35901 4.5964 7.4344C8.34819 8.29209 11.5665 7.92295 14.1625 6.3366C14.452 6.15982 14.5431 5.78171 14.3662 5.49237ZM9.84926 19.6984C4.40974 19.6984 0 15.2888 0 9.84936C0 4.40928 4.40974 0 9.84926 0C15.2889 0 19.6984 4.40928 19.6984 9.84936C19.6984 15.2888 15.2889 19.6984 9.84926 19.6984Z",p3810fe00:"M7.23729 17.3588C6.37826 16.987 5.62931 16.4817 4.99042 15.8428C4.35153 15.2039 3.84618 14.455 3.47438 13.5959C3.10257 12.737 2.91667 11.8161 2.91667 10.8332H4.16667C4.16667 12.4582 4.73264 13.8367 5.86458 14.9686C6.99653 16.1006 8.375 16.6666 10 16.6666C11.625 16.6666 13.0035 16.1006 14.1354 14.9686C15.2674 13.8367 15.8333 12.4582 15.8333 10.8332C15.8333 9.20822 15.2674 7.82975 14.1354 6.69781C13.0035 5.56586 11.625 4.99989 10 4.99989H9.77875L11.1025 6.32364L10.2244 7.22739L7.37188 4.36697L10.2404 1.50635L11.1185 2.4101L9.77875 3.74989H10C10.9829 3.74989 11.9038 3.93579 12.7627 4.3076C13.6217 4.6794 14.3707 5.18475 15.0096 5.82364C15.6485 6.46253 16.1538 7.21149 16.5256 8.07052C16.8974 8.9294 17.0833 9.85031 17.0833 10.8332C17.0833 11.8161 16.8974 12.737 16.5256 13.5959C16.1538 14.455 15.6485 15.2039 15.0096 15.8428C14.3707 16.4817 13.6217 16.987 12.7627 17.3588C11.9038 17.7307 10.9829 17.9166 10 17.9166C9.01708 17.9166 8.09618 17.7307 7.23729 17.3588Z"},a5=["underrated","moderate","well-known","popular"];function u5({mood:n,popularity:r,accentColor:o,onStartOver:l,song:u,morph:f}){var L;const d=a5[r]||"popular",p=(u==null?void 0:u.song_name)??"No song found",h=(L=u==null?void 0:u.artist)!=null&&L.length?u.artist.join(", "):"Unknown Artist",_=(u==null?void 0:u.album_name)??"Unknown album",g=(u==null?void 0:u.album_image)??En,y=(u==null?void 0:u.spotify_url)??null,x=M.useRef(null),b=M.useRef(null),[T,R]=M.useState(0);return M.useEffect(()=>{const j=x.current,I=b.current;if(j&&I){const A=j.scrollWidth-I.clientWidth;R(A>0?A:0)}},[h]),D.jsxs("div",{className:"w-full flex flex-col items-center justify-between flex-1",children:[D.jsxs("div",{className:"flex flex-col items-center w-full mt-auto",style:{gap:"clamp(16px, 3svh, 32px)"},children:[D.jsx(ye.div,{className:"flex flex-col items-center w-full",initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{duration:.5,delay:.15},children:D.jsxs("p",{className:"font-['Spectral',serif] text-center text-white w-full",style:{fontSize:"clamp(20px, 3.4svh, 24px)",lineHeight:"clamp(24px, 4svh, 28px)"},children:[`Here's a perfect ${d} `,D.jsx("br",{}),`${n} song for you`]})}),D.jsx("div",{className:"w-full",children:D.jsx("div",{className:"relative w-full aspect-square mx-auto",style:{maxWidth:"min(100%, 76vw)",maxHeight:"min(320px, 36vh)"},children:D.jsx(ye.div,{className:"absolute inset-0 overflow-hidden",layoutId:"song-album",style:{borderRadius:f.endRadius},initial:{boxShadow:"0px 0px 0px 0px rgba(19,15,41,0)"},animate:{boxShadow:"0px 9px 14px 0px rgba(19,15,41,0.5)"},transition:{layout:{...f.spring},boxShadow:{duration:.6,delay:.3,ease:"easeOut"}},children:D.jsx("img",{alt:_,className:"absolute inset-0 max-w-none object-cover size-full",src:g})})})}),D.jsxs(ye.div,{className:"flex flex-col items-center w-full px-[24px]",style:{gap:"clamp(2px, 0.6svh, 4px)"},initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{duration:.5,delay:.4},children:[D.jsx("p",{className:"font-['Spectral',serif] text-white tracking-[-0.96px] text-center overflow-hidden text-ellipsis whitespace-nowrap w-full",style:{fontSize:"clamp(20px, 3.4svh, 24px)",lineHeight:"clamp(24px, 4svh, 28px)"},children:p}),D.jsxs("div",{className:"flex flex-col items-center text-white/80 tracking-[-0.48px] w-full",style:{fontSize:"clamp(14px, 2.3svh, 16px)"},children:[D.jsx("div",{ref:b,className:"overflow-hidden whitespace-nowrap w-full relative",style:{maskImage:T>0?"linear-gradient(to right, transparent, black 8%, black 92%, transparent)":void 0,WebkitMaskImage:T>0?"linear-gradient(to right, transparent, black 8%, black 92%, transparent)":void 0},children:D.jsxs(ye.span,{ref:x,className:"inline-block text-center w-full",style:{width:T>0?"auto":"100%"},animate:T>0?{x:[0,-T,0]}:{x:0},transition:T>0?{duration:Math.max(10,T/12),repeat:1/0,ease:"easeInOut",repeatDelay:2.5}:void 0,children:["by ",h]})}),D.jsxs("p",{className:"overflow-hidden text-center w-full whitespace-nowrap text-ellipsis",children:["From ",_]})]})]})]}),D.jsxs(ye.div,{className:"flex flex-col items-center w-full mt-auto",style:{gap:"clamp(6px, 1.2svh, 8px)"},initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{duration:.5,delay:.55},children:[D.jsxs(ye.a,{className:"w-full flex gap-[8px] items-center justify-center rounded-[1000px] text-white cursor-pointer",style:{padding:"clamp(10px, 1.8svh, 16px) 0",opacity:y?1:.6,pointerEvents:y?"auto":"none"},animate:{backgroundColor:o},transition:{duration:.8,ease:"easeInOut"},whileTap:{scale:.98},href:y??void 0,target:y?"_blank":void 0,rel:y?"noopener noreferrer":void 0,"aria-disabled":!y,"aria-label":`Open ${p} on Spotify`,children:[D.jsx("div",{className:"overflow-clip relative shrink-0 size-[20px]","aria-hidden":"true",children:D.jsx("svg",{className:"absolute block size-full",fill:"none",preserveAspectRatio:"none",viewBox:"0 0 19.6984 19.6984",role:"img","aria-label":"Spotify logo",style:{transform:"scaleY(-1)"},children:D.jsx("path",{d:nm.p2d573100,fill:"white"})})}),D.jsx("span",{className:"font-['Switzer',sans-serif] tracking-[-0.16px] whitespace-nowrap font-medium",style:{fontSize:"clamp(14px, 2.3svh, 16px)"},children:"Add to Spotify"})]}),D.jsxs("button",{className:"w-full flex gap-[8px] items-center justify-center rounded-[1000px] relative cursor-pointer bg-transparent",style:{padding:"clamp(10px, 1.8svh, 16px) 0"},onClick:l,children:[D.jsx("div",{"aria-hidden":"true",className:"absolute border border-white/80 border-solid inset-0 pointer-events-none rounded-[1000px]"}),D.jsx("div",{className:"relative shrink-0 size-[20px]","aria-hidden":"true",children:D.jsxs("svg",{className:"absolute block size-full",fill:"none",preserveAspectRatio:"none",viewBox:"0 0 20 20",role:"img","aria-label":"Replay icon",children:[D.jsx("mask",{height:"20",id:"mask_replay",maskUnits:"userSpaceOnUse",style:{maskType:"alpha"},width:"20",x:"0",y:"0",children:D.jsx("rect",{fill:"#D9D9D9",height:"20",width:"20"})}),D.jsx("g",{mask:"url(#mask_replay)",children:D.jsx("path",{d:nm.p3810fe00,fill:"white",fillOpacity:"0.8"})})]})}),D.jsx("span",{className:"font-['Switzer',sans-serif] text-white/80 tracking-[-0.16px] whitespace-nowrap font-medium",style:{fontSize:"clamp(14px, 2.3svh, 16px)"},children:"Start over"})]})]})]})}rm();var c5=`svg[fill=none] {
  fill: none !important;
}

@keyframes styles-module__popupEnter___AuQDN {
  from {
    opacity: 0;
    transform: translateX(-50%) scale(0.95) translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) scale(1) translateY(0);
  }
}
@keyframes styles-module__popupExit___JJKQX {
  from {
    opacity: 1;
    transform: translateX(-50%) scale(1) translateY(0);
  }
  to {
    opacity: 0;
    transform: translateX(-50%) scale(0.95) translateY(4px);
  }
}
@keyframes styles-module__shake___jdbWe {
  0%, 100% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(0);
  }
  20% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(-3px);
  }
  40% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(3px);
  }
  60% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(-2px);
  }
  80% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(2px);
  }
}
.styles-module__popup___IhzrD {
  position: fixed;
  transform: translateX(-50%);
  width: 280px;
  padding: 0.75rem 1rem 14px;
  background: #1a1a1a;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
  cursor: default;
  z-index: 100001;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  will-change: transform, opacity;
  opacity: 0;
}
.styles-module__popup___IhzrD.styles-module__enter___L7U7N {
  animation: styles-module__popupEnter___AuQDN 0.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}
.styles-module__popup___IhzrD.styles-module__entered___COX-w {
  opacity: 1;
  transform: translateX(-50%) scale(1) translateY(0);
}
.styles-module__popup___IhzrD.styles-module__exit___5eGjE {
  animation: styles-module__popupExit___JJKQX 0.15s ease-in forwards;
}
.styles-module__popup___IhzrD.styles-module__entered___COX-w.styles-module__shake___jdbWe {
  animation: styles-module__shake___jdbWe 0.25s ease-out;
}

.styles-module__header___wWsSi {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5625rem;
}

.styles-module__element___fTV2z {
  font-size: 0.75rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
}

.styles-module__headerToggle___WpW0b {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  flex: 1;
  min-width: 0;
  text-align: left;
}
.styles-module__headerToggle___WpW0b .styles-module__element___fTV2z {
  flex: 1;
}

.styles-module__chevron___ZZJlR {
  color: rgba(255, 255, 255, 0.5);
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  flex-shrink: 0;
}
.styles-module__chevron___ZZJlR.styles-module__expanded___2Hxgv {
  transform: rotate(90deg);
}

.styles-module__stylesWrapper___pnHgy {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.styles-module__stylesWrapper___pnHgy.styles-module__expanded___2Hxgv {
  grid-template-rows: 1fr;
}

.styles-module__stylesInner___YYZe2 {
  overflow: hidden;
}

.styles-module__stylesBlock___VfQKn {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 0.375rem;
  padding: 0.5rem 0.625rem;
  margin-bottom: 0.5rem;
  font-family: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace;
  font-size: 0.6875rem;
  line-height: 1.5;
}

.styles-module__styleLine___1YQiD {
  color: rgba(255, 255, 255, 0.85);
  word-break: break-word;
}

.styles-module__styleProperty___84L1i {
  color: #c792ea;
}

.styles-module__styleValue___q51-h {
  color: rgba(255, 255, 255, 0.85);
}

.styles-module__timestamp___Dtpsv {
  font-size: 0.625rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.35);
  font-variant-numeric: tabular-nums;
  margin-left: 0.5rem;
  flex-shrink: 0;
}

.styles-module__quote___mcMmQ {
  font-size: 12px;
  font-style: italic;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.5rem;
  padding: 0.4rem 0.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 0.25rem;
  line-height: 1.45;
}

.styles-module__textarea___jrSae {
  width: 100%;
  padding: 0.5rem 0.625rem;
  font-size: 0.8125rem;
  font-family: inherit;
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 8px;
  resize: none;
  outline: none;
  transition: border-color 0.15s ease;
}
.styles-module__textarea___jrSae:focus {
  border-color: #3c82f7;
}
.styles-module__textarea___jrSae.styles-module__green___99l3h:focus {
  border-color: #34c759;
}
.styles-module__textarea___jrSae::placeholder {
  color: rgba(255, 255, 255, 0.35);
}
.styles-module__textarea___jrSae::-webkit-scrollbar {
  width: 6px;
}
.styles-module__textarea___jrSae::-webkit-scrollbar-track {
  background: transparent;
}
.styles-module__textarea___jrSae::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 3px;
}

.styles-module__actions___D6x3f {
  display: flex;
  justify-content: flex-end;
  gap: 0.375rem;
  margin-top: 0.5rem;
}

.styles-module__cancel___hRjnL,
.styles-module__submit___K-mIR {
  padding: 0.4rem 0.875rem;
  font-size: 0.75rem;
  font-weight: 500;
  border-radius: 1rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease, opacity 0.15s ease;
}

.styles-module__cancel___hRjnL {
  background: transparent;
  color: rgba(255, 255, 255, 0.5);
}
.styles-module__cancel___hRjnL:hover {
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.8);
}

.styles-module__submit___K-mIR {
  color: white;
}
.styles-module__submit___K-mIR:hover:not(:disabled) {
  filter: brightness(0.9);
}
.styles-module__submit___K-mIR:disabled {
  cursor: not-allowed;
}

.styles-module__deleteWrapper___oSjdo {
  margin-right: auto;
}

.styles-module__deleteButton___4VuAE {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: none;
  background: transparent;
  color: rgba(255, 255, 255, 0.4);
  transition: background-color 0.15s ease, color 0.15s ease, transform 0.1s ease;
}
.styles-module__deleteButton___4VuAE:hover {
  background: rgba(255, 59, 48, 0.25);
  color: #ff3b30;
}
.styles-module__deleteButton___4VuAE:active {
  transform: scale(0.92);
}

.styles-module__light___6AaSQ.styles-module__popup___IhzrD {
  background: #fff;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.06);
}
.styles-module__light___6AaSQ .styles-module__element___fTV2z {
  color: rgba(0, 0, 0, 0.6);
}
.styles-module__light___6AaSQ .styles-module__timestamp___Dtpsv {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__chevron___ZZJlR {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__stylesBlock___VfQKn {
  background: rgba(0, 0, 0, 0.03);
}
.styles-module__light___6AaSQ .styles-module__styleLine___1YQiD {
  color: rgba(0, 0, 0, 0.75);
}
.styles-module__light___6AaSQ .styles-module__styleProperty___84L1i {
  color: #7c3aed;
}
.styles-module__light___6AaSQ .styles-module__styleValue___q51-h {
  color: rgba(0, 0, 0, 0.75);
}
.styles-module__light___6AaSQ .styles-module__quote___mcMmQ {
  color: rgba(0, 0, 0, 0.55);
  background: rgba(0, 0, 0, 0.04);
}
.styles-module__light___6AaSQ .styles-module__textarea___jrSae {
  background: rgba(0, 0, 0, 0.03);
  color: #1a1a1a;
  border-color: rgba(0, 0, 0, 0.12);
}
.styles-module__light___6AaSQ .styles-module__textarea___jrSae::placeholder {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__textarea___jrSae::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.15);
}
.styles-module__light___6AaSQ .styles-module__cancel___hRjnL {
  color: rgba(0, 0, 0, 0.5);
}
.styles-module__light___6AaSQ .styles-module__cancel___hRjnL:hover {
  background: rgba(0, 0, 0, 0.06);
  color: rgba(0, 0, 0, 0.75);
}
.styles-module__light___6AaSQ .styles-module__deleteButton___4VuAE {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__deleteButton___4VuAE:hover {
  background: rgba(255, 59, 48, 0.15);
  color: #ff3b30;
}`,d5={popup:"styles-module__popup___IhzrD",enter:"styles-module__enter___L7U7N",entered:"styles-module__entered___COX-w",exit:"styles-module__exit___5eGjE",shake:"styles-module__shake___jdbWe",header:"styles-module__header___wWsSi",element:"styles-module__element___fTV2z",headerToggle:"styles-module__headerToggle___WpW0b",chevron:"styles-module__chevron___ZZJlR",expanded:"styles-module__expanded___2Hxgv",stylesWrapper:"styles-module__stylesWrapper___pnHgy",stylesInner:"styles-module__stylesInner___YYZe2",stylesBlock:"styles-module__stylesBlock___VfQKn",styleLine:"styles-module__styleLine___1YQiD",styleProperty:"styles-module__styleProperty___84L1i",styleValue:"styles-module__styleValue___q51-h",timestamp:"styles-module__timestamp___Dtpsv",quote:"styles-module__quote___mcMmQ",textarea:"styles-module__textarea___jrSae",actions:"styles-module__actions___D6x3f",cancel:"styles-module__cancel___hRjnL",submit:"styles-module__submit___K-mIR",deleteWrapper:"styles-module__deleteWrapper___oSjdo",deleteButton:"styles-module__deleteButton___4VuAE",light:"styles-module__light___6AaSQ"};if(typeof document<"u"){let n=document.getElementById("feedback-tool-styles-annotation-popup-css-styles");n||(n=document.createElement("style"),n.id="feedback-tool-styles-annotation-popup-css-styles",n.textContent=c5,document.head.appendChild(n))}var ke=d5,f5=({size:n=24})=>D.jsx("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:D.jsx("path",{d:"M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4383 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z",fill:"currentColor"})}),Ea="__agentation_freeze";function p5(){if(typeof window>"u")return{frozen:!1,installed:!0,origSetTimeout:setTimeout,origSetInterval:setInterval,origRAF:r=>0,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]};const n=window;return n[Ea]||(n[Ea]={frozen:!1,installed:!1,origSetTimeout:null,origSetInterval:null,origRAF:null,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]}),n[Ea]}var Ge=p5();typeof window<"u"&&!Ge.installed&&(Ge.origSetTimeout=window.setTimeout.bind(window),Ge.origSetInterval=window.setInterval.bind(window),Ge.origRAF=window.requestAnimationFrame.bind(window),window.setTimeout=(n,r,...o)=>typeof n=="string"?Ge.origSetTimeout(n,r):Ge.origSetTimeout((...l)=>{Ge.frozen?Ge.frozenTimeoutQueue.push(()=>n(...l)):n(...l)},r,...o),window.setInterval=(n,r,...o)=>typeof n=="string"?Ge.origSetInterval(n,r):Ge.origSetInterval((...l)=>{Ge.frozen||n(...l)},r,...o),window.requestAnimationFrame=n=>Ge.origRAF(r=>{Ge.frozen?Ge.frozenRAFQueue.push(n):n(r)}),Ge.installed=!0);var kr=Ge.origSetTimeout;Ge.origSetInterval;M.forwardRef(function({element:r,timestamp:o,selectedText:l,placeholder:u="What should change?",initialValue:f="",submitLabel:d="Add",onSubmit:p,onCancel:h,onDelete:_,style:g,accentColor:y="#3c82f7",isExiting:x=!1,lightMode:b=!1,computedStyles:T},R){const[L,j]=M.useState(f),[I,A]=M.useState(!1),[B,U]=M.useState("initial"),[K,ee]=M.useState(!1),[W,$]=M.useState(!1),oe=M.useRef(null),ce=M.useRef(null),fe=M.useRef(null),ie=M.useRef(null);M.useEffect(()=>{x&&B!=="exit"&&U("exit")},[x,B]),M.useEffect(()=>{kr(()=>{U("enter")},0);const H=kr(()=>{U("entered")},200),Q=kr(()=>{const k=oe.current;k&&(k.focus(),k.selectionStart=k.selectionEnd=k.value.length,k.scrollTop=k.scrollHeight)},50);return()=>{clearTimeout(H),clearTimeout(Q),fe.current&&clearTimeout(fe.current),ie.current&&clearTimeout(ie.current)}},[]);const Se=M.useCallback(()=>{ie.current&&clearTimeout(ie.current),A(!0),ie.current=kr(()=>{var H;A(!1),(H=oe.current)==null||H.focus()},250)},[]);M.useImperativeHandle(R,()=>({shake:Se}),[Se]);const Ce=M.useCallback(()=>{U("exit"),fe.current=kr(()=>{h()},150)},[h]),Pe=M.useCallback(()=>{L.trim()&&p(L.trim())},[L,p]),_e=M.useCallback(H=>{H.nativeEvent.isComposing||(H.key==="Enter"&&!H.shiftKey&&(H.preventDefault(),Pe()),H.key==="Escape"&&Ce())},[Pe,Ce]),z=[ke.popup,b?ke.light:"",B==="enter"?ke.enter:"",B==="entered"?ke.entered:"",B==="exit"?ke.exit:"",I?ke.shake:""].filter(Boolean).join(" ");return D.jsxs("div",{ref:ce,className:z,"data-annotation-popup":!0,style:g,onClick:H=>H.stopPropagation(),children:[D.jsxs("div",{className:ke.header,children:[T&&Object.keys(T).length>0?D.jsxs("button",{className:ke.headerToggle,onClick:()=>{const H=W;$(!W),H&&kr(()=>{var Q;return(Q=oe.current)==null?void 0:Q.focus()},0)},type:"button",children:[D.jsx("svg",{className:`${ke.chevron} ${W?ke.expanded:""}`,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:D.jsx("path",{d:"M5.5 10.25L9 7.25L5.75 4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),D.jsx("span",{className:ke.element,children:r})]}):D.jsx("span",{className:ke.element,children:r}),o&&D.jsx("span",{className:ke.timestamp,children:o})]}),T&&Object.keys(T).length>0&&D.jsx("div",{className:`${ke.stylesWrapper} ${W?ke.expanded:""}`,children:D.jsx("div",{className:ke.stylesInner,children:D.jsx("div",{className:ke.stylesBlock,children:Object.entries(T).map(([H,Q])=>D.jsxs("div",{className:ke.styleLine,children:[D.jsx("span",{className:ke.styleProperty,children:H.replace(/([A-Z])/g,"-$1").toLowerCase()}),": ",D.jsx("span",{className:ke.styleValue,children:Q}),";"]},H))})})}),l&&D.jsxs("div",{className:ke.quote,children:["“",l.slice(0,80),l.length>80?"...":"","”"]}),D.jsx("textarea",{ref:oe,className:ke.textarea,style:{borderColor:K?y:void 0},placeholder:u,value:L,onChange:H=>j(H.target.value),onFocus:()=>ee(!0),onBlur:()=>ee(!1),rows:2,onKeyDown:_e}),D.jsxs("div",{className:ke.actions,children:[_&&D.jsx("div",{className:ke.deleteWrapper,children:D.jsx("button",{className:ke.deleteButton,onClick:_,type:"button",children:D.jsx(f5,{size:22})})}),D.jsx("button",{className:ke.cancel,onClick:Ce,children:"Cancel"}),D.jsx("button",{className:ke.submit,style:{backgroundColor:y,opacity:L.trim()?1:.4},onClick:Pe,disabled:!L.trim(),children:d})]})]})});var m5=`svg[fill=none] {
  fill: none !important;
}

@keyframes styles-module__toolbarEnter___u8RRu {
  from {
    opacity: 0;
    transform: scale(0.5) rotate(90deg);
  }
  to {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
}
@keyframes styles-module__badgeEnter___mVQLj {
  from {
    opacity: 0;
    transform: scale(0);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__scaleIn___c-r1K {
  from {
    opacity: 0;
    transform: scale(0.85);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__scaleOut___Wctwz {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.85);
  }
}
@keyframes styles-module__slideUp___kgD36 {
  from {
    opacity: 0;
    transform: scale(0.85) translateY(8px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
@keyframes styles-module__slideDown___zcdje {
  from {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
  to {
    opacity: 0;
    transform: scale(0.85) translateY(8px);
  }
}
@keyframes styles-module__markerIn___5FaAP {
  0% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.3);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
}
@keyframes styles-module__markerOut___GU5jX {
  0% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.3);
  }
}
@keyframes styles-module__fadeIn___b9qmf {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes styles-module__fadeOut___6Ut6- {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes styles-module__tooltipIn___0N31w {
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(2px) scale(0.891);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0) scale(0.909);
  }
}
@keyframes styles-module__hoverHighlightIn___6WYHY {
  from {
    opacity: 0;
    transform: scale(0.98);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__hoverTooltipIn___FYGQx {
  from {
    opacity: 0;
    transform: scale(0.95) translateY(4px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
@keyframes styles-module__settingsPanelIn___MGfO8 {
  from {
    opacity: 0;
    transform: translateY(10px) scale(0.95);
    filter: blur(5px);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
    filter: blur(0px);
  }
}
@keyframes styles-module__settingsPanelOut___Zfymi {
  from {
    opacity: 1;
    transform: translateY(0) scale(1);
    filter: blur(0px);
  }
  to {
    opacity: 0;
    transform: translateY(20px) scale(0.95);
    filter: blur(5px);
  }
}
.styles-module__toolbar___wNsdK {
  position: fixed;
  bottom: 1.25rem;
  right: 1.25rem;
  width: 297px;
  z-index: 100000;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  pointer-events: none;
  transition: left 0s, top 0s, right 0s, bottom 0s;
}

.styles-module__toolbarContainer___dIhma {
  user-select: none;
  margin-left: auto;
  align-self: flex-end;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1a1a1a;
  color: #fff;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2), 0 4px 16px rgba(0, 0, 0, 0.1);
  pointer-events: auto;
  cursor: grab;
  transition: width 0.4s cubic-bezier(0.19, 1, 0.22, 1), transform 0.4s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__toolbarContainer___dIhma.styles-module__dragging___xrolZ {
  transition: width 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  cursor: grabbing;
}
.styles-module__toolbarContainer___dIhma.styles-module__entrance___sgHd8 {
  animation: styles-module__toolbarEnter___u8RRu 0.5s cubic-bezier(0.34, 1.2, 0.64, 1) forwards;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn {
  width: 44px;
  height: 44px;
  border-radius: 22px;
  padding: 0;
  cursor: pointer;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn svg {
  margin-top: -1px;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn:hover {
  background: #2a2a2a;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn:active {
  transform: scale(0.95);
}
.styles-module__toolbarContainer___dIhma.styles-module__expanded___ofKPx {
  height: 44px;
  border-radius: 1.5rem;
  padding: 0.375rem;
  width: 257px;
}
.styles-module__toolbarContainer___dIhma.styles-module__expanded___ofKPx.styles-module__serverConnected___Gfbou {
  width: 297px;
}

.styles-module__toggleContent___0yfyP {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.1s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__toggleContent___0yfyP.styles-module__visible___KHwEW {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}
.styles-module__toggleContent___0yfyP.styles-module__hidden___Ae8H4 {
  opacity: 0;
  pointer-events: none;
}

.styles-module__controlsContent___9GJWU {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  transition: filter 0.8s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.8s cubic-bezier(0.19, 1, 0.22, 1), transform 0.6s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__controlsContent___9GJWU.styles-module__visible___KHwEW {
  opacity: 1;
  filter: blur(0px);
  transform: scale(1);
  visibility: visible;
  pointer-events: auto;
}
.styles-module__controlsContent___9GJWU.styles-module__hidden___Ae8H4 {
  pointer-events: none;
  opacity: 0;
  filter: blur(10px);
  transform: scale(0.4);
}

.styles-module__badge___2XsgF {
  position: absolute;
  top: -13px;
  right: -13px;
  user-select: none;
  min-width: 18px;
  height: 18px;
  padding: 0 5px;
  border-radius: 9px;
  background: #3c82f7;
  color: white;
  font-size: 0.625rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15), inset 0 0 0 1px rgba(255, 255, 255, 0.04);
  opacity: 1;
  transition: transform 0.3s ease, opacity 0.2s ease;
  transform: scale(1);
}
.styles-module__badge___2XsgF.styles-module__fadeOut___6Ut6- {
  opacity: 0;
  transform: scale(0);
  pointer-events: none;
}
.styles-module__badge___2XsgF.styles-module__entrance___sgHd8 {
  animation: styles-module__badgeEnter___mVQLj 0.3s cubic-bezier(0.34, 1.2, 0.64, 1) 0.4s both;
}

.styles-module__controlButton___8Q0jc {
  position: relative;
  cursor: pointer !important;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: none;
  background: transparent;
  color: rgba(255, 255, 255, 0.85);
  transition: background-color 0.15s ease, color 0.15s ease, transform 0.1s ease, opacity 0.2s ease;
}
.styles-module__controlButton___8Q0jc:hover:not(:disabled):not([data-active=true]):not([data-failed=true]):not([data-auto-sync=true]):not([data-error=true]):not([data-no-hover=true]) {
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
}
.styles-module__controlButton___8Q0jc:active:not(:disabled) {
  transform: scale(0.92);
}
.styles-module__controlButton___8Q0jc:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}
.styles-module__controlButton___8Q0jc[data-active=true] {
  color: #3c82f7;
  background: rgba(60, 130, 247, 0.25);
}
.styles-module__controlButton___8Q0jc[data-error=true] {
  color: #ff3b30;
  background: rgba(255, 59, 48, 0.25);
}
.styles-module__controlButton___8Q0jc[data-danger]:hover:not(:disabled):not([data-active=true]):not([data-failed=true]) {
  background: rgba(255, 59, 48, 0.25);
  color: #ff3b30;
}
.styles-module__controlButton___8Q0jc[data-no-hover=true], .styles-module__controlButton___8Q0jc.styles-module__statusShowing___te6iu {
  cursor: default !important;
  pointer-events: none;
  background: transparent !important;
}
.styles-module__controlButton___8Q0jc[data-auto-sync=true] {
  color: #34c759;
  background: transparent;
  cursor: default;
}
.styles-module__controlButton___8Q0jc[data-failed=true] {
  color: #ff3b30;
  background: rgba(255, 59, 48, 0.25);
}

.styles-module__buttonBadge___NeFWb {
  position: absolute;
  top: 0px;
  right: 0px;
  min-width: 16px;
  height: 16px;
  padding: 0 4px;
  border-radius: 8px;
  background: #3c82f7;
  color: white;
  font-size: 0.625rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 0 2px #1a1a1a, 0 1px 3px rgba(0, 0, 0, 0.2);
  pointer-events: none;
}
.styles-module__buttonBadge___NeFWb.styles-module__light___r6n4Y {
  box-shadow: 0 0 0 2px #fff, 0 1px 3px rgba(0, 0, 0, 0.2);
}

@keyframes styles-module__mcpIndicatorPulseConnected___EDodZ {
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(52, 199, 89, 0.5);
  }
  50% {
    box-shadow: 0 0 0 5px rgba(52, 199, 89, 0);
  }
}
@keyframes styles-module__mcpIndicatorPulseConnecting___cCYte {
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(245, 166, 35, 0.5);
  }
  50% {
    box-shadow: 0 0 0 5px rgba(245, 166, 35, 0);
  }
}
.styles-module__mcpIndicator___zGJeL {
  position: absolute;
  top: 3px;
  right: 3px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  pointer-events: none;
  transition: background 0.3s ease, opacity 0.15s ease, transform 0.15s ease;
  opacity: 1;
  transform: scale(1);
}
.styles-module__mcpIndicator___zGJeL.styles-module__connected___7c28g {
  background: #34c759;
  animation: styles-module__mcpIndicatorPulseConnected___EDodZ 2.5s ease-in-out infinite;
}
.styles-module__mcpIndicator___zGJeL.styles-module__connecting___uo-CW {
  background: #f5a623;
  animation: styles-module__mcpIndicatorPulseConnecting___cCYte 1.5s ease-in-out infinite;
}
.styles-module__mcpIndicator___zGJeL.styles-module__hidden___Ae8H4 {
  opacity: 0;
  transform: scale(0);
  animation: none;
}

@keyframes styles-module__connectionPulse___-Zycw {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.6;
    transform: scale(0.9);
  }
}
.styles-module__connectionIndicatorWrapper___L-e-3 {
  width: 8px;
  height: 34px;
  margin-left: 6px;
  margin-right: 6px;
}

.styles-module__connectionIndicator___afk9p {
  position: relative;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  opacity: 0;
  transition: opacity 0.3s ease, background 0.3s ease;
  cursor: default;
}

.styles-module__connectionIndicatorVisible___C-i5B {
  opacity: 1;
}

.styles-module__connectionIndicatorConnected___IY8pR {
  background: #34c759;
  animation: styles-module__connectionPulse___-Zycw 2.5s ease-in-out infinite;
}

.styles-module__connectionIndicatorDisconnected___kmpaZ {
  background: #ff3b30;
  animation: none;
}

.styles-module__connectionIndicatorConnecting___QmSLH {
  background: #f59e0b;
  animation: styles-module__connectionPulse___-Zycw 1s ease-in-out infinite;
}

.styles-module__buttonWrapper___rBcdv {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.styles-module__buttonWrapper___rBcdv:hover .styles-module__buttonTooltip___Burd9 {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) scale(1);
  transition-delay: 0.85s;
}
.styles-module__buttonWrapper___rBcdv:has(.styles-module__controlButton___8Q0jc:disabled):hover .styles-module__buttonTooltip___Burd9 {
  opacity: 0;
  visibility: hidden;
}

.styles-module__sendButtonWrapper___UUxG6 {
  width: 0;
  opacity: 0;
  overflow: hidden;
  pointer-events: none;
  margin-left: -0.375rem;
  transition: width 0.4s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.3s cubic-bezier(0.19, 1, 0.22, 1), margin 0.4s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__sendButtonWrapper___UUxG6 .styles-module__controlButton___8Q0jc {
  transform: scale(0.8);
  transition: transform 0.4s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__sendButtonWrapper___UUxG6.styles-module__sendButtonVisible___WPSQU {
  width: 34px;
  opacity: 1;
  overflow: visible;
  pointer-events: auto;
  margin-left: 0;
}
.styles-module__sendButtonWrapper___UUxG6.styles-module__sendButtonVisible___WPSQU .styles-module__controlButton___8Q0jc {
  transform: scale(1);
}

.styles-module__buttonTooltip___Burd9 {
  position: absolute;
  bottom: calc(100% + 14px);
  left: 50%;
  transform: translateX(-50%) scale(0.95);
  padding: 6px 10px;
  background: #1a1a1a;
  color: rgba(255, 255, 255, 0.9);
  font-size: 12px;
  font-weight: 500;
  border-radius: 8px;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  z-index: 100001;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  transition: opacity 0.135s ease, transform 0.135s ease, visibility 0.135s ease;
}
.styles-module__buttonTooltip___Burd9::after {
  content: "";
  position: absolute;
  top: calc(100% - 4px);
  left: 50%;
  transform: translateX(-50%) rotate(45deg);
  width: 8px;
  height: 8px;
  background: #1a1a1a;
  border-radius: 0 0 2px 0;
}

.styles-module__shortcut___lEAQk {
  margin-left: 4px;
  opacity: 0.5;
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonTooltip___Burd9 {
  bottom: auto;
  top: calc(100% + 14px);
  transform: translateX(-50%) scale(0.95);
}
.styles-module__tooltipBelow___m6ats .styles-module__buttonTooltip___Burd9::after {
  top: -4px;
  bottom: auto;
  border-radius: 2px 0 0 0;
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapper___rBcdv:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-50%) scale(1);
}

.styles-module__tooltipsHidden___VtLJG .styles-module__buttonTooltip___Burd9 {
  opacity: 0 !important;
  visibility: hidden !important;
  transition: none !important;
}

.styles-module__tooltipVisible___0jcCv,
.styles-module__tooltipsHidden___VtLJG .styles-module__tooltipVisible___0jcCv {
  opacity: 1 !important;
  visibility: visible !important;
  transform: translateX(-50%) scale(1) !important;
  transition-delay: 0s !important;
}

.styles-module__buttonWrapperAlignLeft___myzIp .styles-module__buttonTooltip___Burd9 {
  left: 50%;
  transform: translateX(-12px) scale(0.95);
}
.styles-module__buttonWrapperAlignLeft___myzIp .styles-module__buttonTooltip___Burd9::after {
  left: 16px;
}
.styles-module__buttonWrapperAlignLeft___myzIp:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-12px) scale(1);
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignLeft___myzIp .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-12px) scale(0.95);
}
.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignLeft___myzIp:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-12px) scale(1);
}

.styles-module__buttonWrapperAlignRight___HCQFR .styles-module__buttonTooltip___Burd9 {
  left: 50%;
  transform: translateX(calc(-100% + 12px)) scale(0.95);
}
.styles-module__buttonWrapperAlignRight___HCQFR .styles-module__buttonTooltip___Burd9::after {
  left: auto;
  right: 8px;
}
.styles-module__buttonWrapperAlignRight___HCQFR:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(calc(-100% + 12px)) scale(1);
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignRight___HCQFR .styles-module__buttonTooltip___Burd9 {
  transform: translateX(calc(-100% + 12px)) scale(0.95);
}
.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignRight___HCQFR:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(calc(-100% + 12px)) scale(1);
}

.styles-module__divider___c--s1 {
  width: 1px;
  height: 12px;
  background: rgba(255, 255, 255, 0.15);
  margin: 0 0.125rem;
}

.styles-module__overlay___Q1O9y {
  position: fixed;
  inset: 0;
  z-index: 99997;
  pointer-events: none;
}
.styles-module__overlay___Q1O9y > * {
  pointer-events: auto;
}

.styles-module__hoverHighlight___ogakW {
  position: fixed;
  border: 2px solid rgba(60, 130, 247, 0.5);
  border-radius: 4px;
  pointer-events: none !important;
  background: rgba(60, 130, 247, 0.04);
  box-sizing: border-box;
  will-change: opacity;
  contain: layout style;
}
.styles-module__hoverHighlight___ogakW.styles-module__enter___WFIki {
  animation: styles-module__hoverHighlightIn___6WYHY 0.12s ease-out forwards;
}

.styles-module__multiSelectOutline___cSJ-m {
  position: fixed;
  border: 2px dashed rgba(52, 199, 89, 0.6);
  border-radius: 4px;
  pointer-events: none !important;
  background: rgba(52, 199, 89, 0.05);
  box-sizing: border-box;
  will-change: opacity;
}
.styles-module__multiSelectOutline___cSJ-m.styles-module__enter___WFIki {
  animation: styles-module__fadeIn___b9qmf 0.15s ease-out forwards;
}
.styles-module__multiSelectOutline___cSJ-m.styles-module__exit___fyOJ0 {
  animation: styles-module__fadeOut___6Ut6- 0.15s ease-out forwards;
}

.styles-module__singleSelectOutline___QhX-O {
  position: fixed;
  border: 2px solid rgba(60, 130, 247, 0.6);
  border-radius: 4px;
  pointer-events: none !important;
  background: rgba(60, 130, 247, 0.05);
  box-sizing: border-box;
  will-change: opacity;
}
.styles-module__singleSelectOutline___QhX-O.styles-module__enter___WFIki {
  animation: styles-module__fadeIn___b9qmf 0.15s ease-out forwards;
}
.styles-module__singleSelectOutline___QhX-O.styles-module__exit___fyOJ0 {
  animation: styles-module__fadeOut___6Ut6- 0.15s ease-out forwards;
}

.styles-module__hoverTooltip___bvLk7 {
  position: fixed;
  font-size: 0.6875rem;
  font-weight: 500;
  color: #fff;
  background: rgba(0, 0, 0, 0.85);
  padding: 0.35rem 0.6rem;
  border-radius: 0.375rem;
  pointer-events: none !important;
  white-space: nowrap;
  max-width: 280px;
  overflow: hidden;
  text-overflow: ellipsis;
}
.styles-module__hoverTooltip___bvLk7.styles-module__enter___WFIki {
  animation: styles-module__hoverTooltipIn___FYGQx 0.1s ease-out forwards;
}

.styles-module__hoverReactPath___gx1IJ {
  font-size: 0.625rem;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.15rem;
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__hoverElementName___QMLMl {
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__markersLayer___-25j1 {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 0;
  z-index: 99998;
  pointer-events: none;
}
.styles-module__markersLayer___-25j1 > * {
  pointer-events: auto;
}

.styles-module__fixedMarkersLayer___ffyX6 {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99998;
  pointer-events: none;
}
.styles-module__fixedMarkersLayer___ffyX6 > * {
  pointer-events: auto;
}

.styles-module__marker___6sQrs {
  position: absolute;
  width: 22px;
  height: 22px;
  background: #3c82f7;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.6875rem;
  font-weight: 600;
  transform: translate(-50%, -50%) scale(1);
  opacity: 1;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2), inset 0 0 0 1px rgba(0, 0, 0, 0.04);
  user-select: none;
  will-change: transform, opacity;
  contain: layout style;
  z-index: 1;
}
.styles-module__marker___6sQrs:hover {
  z-index: 2;
}
.styles-module__marker___6sQrs:not(.styles-module__enter___WFIki):not(.styles-module__exit___fyOJ0):not(.styles-module__clearing___FQ--7) {
  transition: background-color 0.15s ease, transform 0.1s ease;
}
.styles-module__marker___6sQrs.styles-module__enter___WFIki {
  animation: styles-module__markerIn___5FaAP 0.25s cubic-bezier(0.22, 1, 0.36, 1) both;
}
.styles-module__marker___6sQrs.styles-module__exit___fyOJ0 {
  animation: styles-module__markerOut___GU5jX 0.2s ease-out both;
  pointer-events: none;
}
.styles-module__marker___6sQrs.styles-module__clearing___FQ--7 {
  animation: styles-module__markerOut___GU5jX 0.15s ease-out both;
  pointer-events: none;
}
.styles-module__marker___6sQrs:not(.styles-module__enter___WFIki):not(.styles-module__exit___fyOJ0):not(.styles-module__clearing___FQ--7):hover {
  transform: translate(-50%, -50%) scale(1.1);
}
.styles-module__marker___6sQrs.styles-module__pending___2IHLC {
  position: fixed;
  background: #3c82f7;
}
.styles-module__marker___6sQrs.styles-module__fixed___dBMHC {
  position: fixed;
}
.styles-module__marker___6sQrs.styles-module__multiSelect___YWiuz {
  background: #34c759;
  width: 26px;
  height: 26px;
  border-radius: 6px;
  font-size: 0.75rem;
}
.styles-module__marker___6sQrs.styles-module__multiSelect___YWiuz.styles-module__pending___2IHLC {
  background: #34c759;
}
.styles-module__marker___6sQrs.styles-module__hovered___ZgXIy {
  background: #ff3b30;
}

.styles-module__renumber___nCTxD {
  display: block;
  animation: styles-module__renumberRoll___Wgbq3 0.2s ease-out;
}

@keyframes styles-module__renumberRoll___Wgbq3 {
  0% {
    transform: translateX(-40%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
.styles-module__markerTooltip___aLJID {
  position: absolute;
  top: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%) scale(0.909);
  z-index: 100002;
  background: #1a1a1a;
  padding: 8px 0.75rem;
  border-radius: 0.75rem;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-weight: 400;
  color: #fff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
  min-width: 120px;
  max-width: 200px;
  pointer-events: none;
  cursor: default;
}
.styles-module__markerTooltip___aLJID.styles-module__enter___WFIki {
  animation: styles-module__tooltipIn___0N31w 0.1s ease-out forwards;
}

.styles-module__markerQuote___FHmrz {
  display: block;
  font-size: 12px;
  font-style: italic;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.3125rem;
  line-height: 1.4;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__markerNote___QkrrS {
  display: block;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.4;
  color: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-bottom: 2px;
}

.styles-module__markerHint___2iF-6 {
  display: block;
  font-size: 0.625rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.6);
  margin-top: 0.375rem;
  white-space: nowrap;
}

.styles-module__settingsPanel___OxX3Y {
  position: absolute;
  right: 5px;
  bottom: calc(100% + 0.5rem);
  z-index: 1;
  overflow: hidden;
  background: #1c1c1c;
  border-radius: 1rem;
  padding: 13px 0 16px;
  min-width: 205px;
  cursor: default;
  opacity: 1;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.04);
  transition: background 0.25s ease, box-shadow 0.25s ease;
}
.styles-module__settingsPanel___OxX3Y::before, .styles-module__settingsPanel___OxX3Y::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  width: 16px;
  z-index: 2;
  pointer-events: none;
}
.styles-module__settingsPanel___OxX3Y::before {
  left: 0;
  background: linear-gradient(to right, #1c1c1c 0%, transparent 100%);
}
.styles-module__settingsPanel___OxX3Y::after {
  right: 0;
  background: linear-gradient(to left, #1c1c1c 0%, transparent 100%);
}
.styles-module__settingsPanel___OxX3Y .styles-module__settingsHeader___pwDY9,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsBrand___0gJeM,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsBrandSlash___uTG18,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsVersion___TUcFq,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsSection___m-YM2,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsLabel___8UjfX,
.styles-module__settingsPanel___OxX3Y .styles-module__cycleButton___FMKfw,
.styles-module__settingsPanel___OxX3Y .styles-module__cycleDot___nPgLY,
.styles-module__settingsPanel___OxX3Y .styles-module__dropdownButton___16NPz,
.styles-module__settingsPanel___OxX3Y .styles-module__toggleLabel___Xm8Aa,
.styles-module__settingsPanel___OxX3Y .styles-module__customCheckbox___U39ax,
.styles-module__settingsPanel___OxX3Y .styles-module__sliderLabel___U8sPr,
.styles-module__settingsPanel___OxX3Y .styles-module__slider___GLdxp,
.styles-module__settingsPanel___OxX3Y .styles-module__helpIcon___xQg56,
.styles-module__settingsPanel___OxX3Y .styles-module__themeToggle___2rUjA {
  transition: background 0.25s ease, color 0.25s ease, border-color 0.25s ease;
}
.styles-module__settingsPanel___OxX3Y.styles-module__enter___WFIki {
  opacity: 1;
  transform: translateY(0) scale(1);
  filter: blur(0px);
  transition: opacity 0.2s ease, transform 0.2s ease, filter 0.2s ease;
}
.styles-module__settingsPanel___OxX3Y.styles-module__exit___fyOJ0 {
  opacity: 0;
  transform: translateY(8px) scale(0.95);
  filter: blur(5px);
  pointer-events: none;
  transition: opacity 0.1s ease, transform 0.1s ease, filter 0.1s ease;
}
.styles-module__settingsPanel___OxX3Y.styles-module__dark___ILIQf {
  background: #1a1a1a;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
}
.styles-module__settingsPanel___OxX3Y.styles-module__dark___ILIQf .styles-module__settingsLabel___8UjfX {
  color: rgba(255, 255, 255, 0.6);
}
.styles-module__settingsPanel___OxX3Y.styles-module__dark___ILIQf .styles-module__settingsOption___UNa12 {
  color: rgba(255, 255, 255, 0.85);
}
.styles-module__settingsPanel___OxX3Y.styles-module__dark___ILIQf .styles-module__settingsOption___UNa12:hover {
  background: rgba(255, 255, 255, 0.1);
}
.styles-module__settingsPanel___OxX3Y.styles-module__dark___ILIQf .styles-module__settingsOption___UNa12.styles-module__selected___OwRqP {
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
}
.styles-module__settingsPanel___OxX3Y.styles-module__dark___ILIQf .styles-module__toggleLabel___Xm8Aa {
  color: rgba(255, 255, 255, 0.85);
}

.styles-module__settingsPanelContainer___Xksv8 {
  overflow: visible;
  position: relative;
  display: flex;
  padding: 0 1rem;
}
.styles-module__settingsPanelContainer___Xksv8.styles-module__transitioning___qxzCk {
  overflow-x: clip;
  overflow-y: visible;
}

.styles-module__settingsPage___6YfHH {
  min-width: 100%;
  flex-shrink: 0;
  transition: transform 0.35s cubic-bezier(0.32, 0.72, 0, 1), opacity 0.2s ease-out;
  opacity: 1;
}

.styles-module__settingsPage___6YfHH.styles-module__slideLeft___Ps01J {
  transform: translateX(-100%);
  opacity: 0;
}

.styles-module__automationsPage___uvCq6 {
  position: absolute;
  top: 0;
  left: 100%;
  width: 100%;
  height: 100%;
  padding: 3px 1rem 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  transition: transform 0.35s cubic-bezier(0.32, 0.72, 0, 1), opacity 0.25s ease-out 0.1s;
  opacity: 0;
}

.styles-module__automationsPage___uvCq6.styles-module__slideIn___4-qXe {
  transform: translateX(-100%);
  opacity: 1;
}

.styles-module__settingsNavLink___wCzJt {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0;
  border: none;
  background: transparent;
  font-family: inherit;
  font-size: 0.8125rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: color 0.15s ease;
}
.styles-module__settingsNavLink___wCzJt:hover {
  color: rgba(255, 255, 255, 0.9);
}
.styles-module__settingsNavLink___wCzJt.styles-module__light___r6n4Y {
  color: rgba(0, 0, 0, 0.5);
}
.styles-module__settingsNavLink___wCzJt.styles-module__light___r6n4Y:hover {
  color: rgba(0, 0, 0, 0.8);
}
.styles-module__settingsNavLink___wCzJt svg {
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.15s ease;
}
.styles-module__settingsNavLink___wCzJt:hover svg {
  color: #fff;
}
.styles-module__settingsNavLink___wCzJt.styles-module__light___r6n4Y svg {
  color: rgba(0, 0, 0, 0.25);
}
.styles-module__settingsNavLink___wCzJt.styles-module__light___r6n4Y:hover svg {
  color: rgba(0, 0, 0, 0.8);
}

.styles-module__settingsNavLinkRight___ZWwhj {
  display: flex;
  align-items: center;
  gap: 6px;
}

.styles-module__mcpNavIndicator___cl9pO {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.styles-module__mcpNavIndicator___cl9pO.styles-module__connected___7c28g {
  background: #34c759;
  animation: styles-module__mcpPulse___uNggr 2.5s ease-in-out infinite;
}
.styles-module__mcpNavIndicator___cl9pO.styles-module__connecting___uo-CW {
  background: #f5a623;
  animation: styles-module__mcpPulse___uNggr 1.5s ease-in-out infinite;
}

.styles-module__settingsBackButton___bIe2j {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 6px 0 12px 0;
  margin: -6px 0 0.5rem 0;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 0;
  background: transparent;
  font-family: inherit;
  font-size: 0.8125rem;
  font-weight: 500;
  letter-spacing: -0.15px;
  color: #fff;
  cursor: pointer;
  transition: transform 0.12s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__settingsBackButton___bIe2j svg {
  opacity: 0.4;
  flex-shrink: 0;
  transition: opacity 0.15s ease, transform 0.18s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__settingsBackButton___bIe2j:hover svg {
  opacity: 1;
}
.styles-module__settingsBackButton___bIe2j.styles-module__light___r6n4Y {
  color: rgba(0, 0, 0, 0.85);
  border-bottom-color: rgba(0, 0, 0, 0.08);
}

.styles-module__automationHeader___InP0r {
  display: flex;
  align-items: center;
  gap: 0.125rem;
  font-size: 0.8125rem;
  font-weight: 400;
  color: #fff;
}
.styles-module__automationHeader___InP0r .styles-module__helpIcon___xQg56 svg {
  transform: none;
}
.styles-module__automationHeader___InP0r.styles-module__light___r6n4Y {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__automationDescription___NKlmo {
  font-size: 0.6875rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 2px;
  line-height: 14px;
}
.styles-module__automationDescription___NKlmo.styles-module__light___r6n4Y {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__learnMoreLink___8xv-x {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: underline dotted;
  text-decoration-color: rgba(255, 255, 255, 0.2);
  text-underline-offset: 2px;
  transition: color 0.15s ease;
}
.styles-module__learnMoreLink___8xv-x:hover {
  color: #fff;
}
.styles-module__learnMoreLink___8xv-x.styles-module__light___r6n4Y {
  color: rgba(0, 0, 0, 0.6);
  text-decoration-color: rgba(0, 0, 0, 0.2);
}
.styles-module__learnMoreLink___8xv-x.styles-module__light___r6n4Y:hover {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__autoSendRow___UblX5 {
  display: flex;
  align-items: center;
  gap: 8px;
}

.styles-module__autoSendLabel___icDc2 {
  font-size: 0.6875rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.15s ease;
}
.styles-module__autoSendLabel___icDc2.styles-module__active___-zoN6 {
  color: #66b8ff;
}
.styles-module__autoSendLabel___icDc2.styles-module__light___r6n4Y {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__autoSendLabel___icDc2.styles-module__light___r6n4Y.styles-module__active___-zoN6 {
  color: #3c82f7;
}

.styles-module__webhookUrlInput___2375C {
  display: block;
  width: 100%;
  flex: 1;
  min-height: 60px;
  box-sizing: border-box;
  margin-top: 11px;
  padding: 8px 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.03);
  font-family: inherit;
  font-size: 0.75rem;
  font-weight: 400;
  color: #fff;
  outline: none;
  resize: none;
  cursor: text !important;
  user-select: text;
  transition: border-color 0.15s ease, background 0.15s ease, box-shadow 0.15s ease;
}
.styles-module__webhookUrlInput___2375C::placeholder {
  color: rgba(255, 255, 255, 0.3);
}
.styles-module__webhookUrlInput___2375C:focus {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.08);
}
.styles-module__webhookUrlInput___2375C.styles-module__light___r6n4Y {
  border-color: rgba(0, 0, 0, 0.1);
  background: rgba(0, 0, 0, 0.03);
  color: rgba(0, 0, 0, 0.85);
}
.styles-module__webhookUrlInput___2375C.styles-module__light___r6n4Y::placeholder {
  color: rgba(0, 0, 0, 0.3);
}
.styles-module__webhookUrlInput___2375C.styles-module__light___r6n4Y:focus {
  border-color: rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.05);
}

.styles-module__settingsHeader___pwDY9 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 24px;
  margin-bottom: 0.5rem;
  padding-bottom: 9px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
}

.styles-module__settingsBrand___0gJeM {
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: -0.0094em;
  color: #fff;
}

.styles-module__settingsBrandSlash___uTG18 {
  color: rgba(255, 255, 255, 0.5);
}

.styles-module__settingsVersion___TUcFq {
  font-size: 11px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.4);
  margin-left: auto;
  letter-spacing: -0.0094em;
}

.styles-module__settingsSection___m-YM2 + .styles-module__settingsSection___m-YM2 {
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
}
.styles-module__settingsSection___m-YM2.styles-module__settingsSectionExtraPadding___jdhFV {
  padding-top: calc(0.5rem + 4px);
}

.styles-module__settingsSectionGrow___h-5HZ {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.styles-module__settingsRow___3sdhc {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 24px;
}
.styles-module__settingsRow___3sdhc.styles-module__settingsRowMarginTop___zA0Sp {
  margin-top: 8px;
}

.styles-module__dropdownContainer___BVnxe {
  position: relative;
}

.styles-module__dropdownButton___16NPz {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.25rem 0.5rem;
  border: none;
  border-radius: 0.375rem;
  background: transparent;
  font-size: 0.8125rem;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease;
  letter-spacing: -0.0094em;
}
.styles-module__dropdownButton___16NPz:hover {
  background: rgba(255, 255, 255, 0.08);
}
.styles-module__dropdownButton___16NPz svg {
  opacity: 0.6;
}

.styles-module__cycleButton___FMKfw {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0;
  border: none;
  background: transparent;
  font-size: 0.8125rem;
  font-weight: 500;
  color: #fff;
  cursor: pointer;
  letter-spacing: -0.0094em;
}
.styles-module__cycleButton___FMKfw.styles-module__light___r6n4Y {
  color: rgba(0, 0, 0, 0.85);
}
.styles-module__cycleButton___FMKfw:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}

.styles-module__settingsRowDisabled___EgS0V .styles-module__settingsLabel___8UjfX {
  color: rgba(255, 255, 255, 0.2);
}
.styles-module__settingsRowDisabled___EgS0V .styles-module__settingsLabel___8UjfX.styles-module__light___r6n4Y {
  color: rgba(0, 0, 0, 0.2);
}
.styles-module__settingsRowDisabled___EgS0V .styles-module__toggleSwitch___l4Ygm {
  opacity: 0.4;
  cursor: not-allowed;
}

@keyframes styles-module__cycleTextIn___Q6zJf {
  0% {
    opacity: 0;
    transform: translateY(-6px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.styles-module__cycleButtonText___fD1LR {
  display: inline-block;
  animation: styles-module__cycleTextIn___Q6zJf 0.2s ease-out;
}

.styles-module__cycleDots___LWuoQ {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.styles-module__cycleDot___nPgLY {
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: scale(0.667);
  transition: background-color 0.25s ease-out, transform 0.25s ease-out;
}
.styles-module__cycleDot___nPgLY.styles-module__active___-zoN6 {
  background: #fff;
  transform: scale(1);
}
.styles-module__cycleDot___nPgLY.styles-module__light___r6n4Y {
  background: rgba(0, 0, 0, 0.2);
}
.styles-module__cycleDot___nPgLY.styles-module__light___r6n4Y.styles-module__active___-zoN6 {
  background: rgba(0, 0, 0, 0.7);
}

.styles-module__dropdownMenu___k73ER {
  position: absolute;
  right: 0;
  top: calc(100% + 0.25rem);
  background: #1a1a1a;
  border-radius: 0.5rem;
  padding: 0.25rem;
  min-width: 120px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1);
  z-index: 10;
  animation: styles-module__scaleIn___c-r1K 0.15s ease-out;
}

.styles-module__dropdownItem___ylsLj {
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0.5rem 0.625rem;
  border: none;
  border-radius: 0.375rem;
  background: transparent;
  font-size: 0.8125rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.85);
  cursor: pointer;
  text-align: left;
  transition: background-color 0.15s ease, color 0.15s ease;
  letter-spacing: -0.0094em;
}
.styles-module__dropdownItem___ylsLj:hover {
  background: rgba(255, 255, 255, 0.08);
}
.styles-module__dropdownItem___ylsLj.styles-module__selected___OwRqP {
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
  font-weight: 600;
}

.styles-module__settingsLabel___8UjfX {
  font-size: 0.8125rem;
  font-weight: 400;
  letter-spacing: -0.0094em;
  color: rgba(255, 255, 255, 0.5);
  display: flex;
  align-items: center;
  gap: 0.125rem;
}
.styles-module__settingsLabel___8UjfX.styles-module__light___r6n4Y {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__settingsLabelMarker___ewdtV {
  padding-top: 3px;
  margin-bottom: 10px;
}

.styles-module__settingsOptions___LyrBA {
  display: flex;
  gap: 0.25rem;
}

.styles-module__settingsOption___UNa12 {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  padding: 0.375rem 0.5rem;
  border: none;
  border-radius: 0.375rem;
  background: transparent;
  font-size: 0.6875rem;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.7);
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease;
}
.styles-module__settingsOption___UNa12:hover {
  background: rgba(0, 0, 0, 0.05);
}
.styles-module__settingsOption___UNa12.styles-module__selected___OwRqP {
  background: rgba(60, 130, 247, 0.15);
  color: #3c82f7;
}

.styles-module__sliderContainer___ducXj {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.styles-module__slider___GLdxp {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 4px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 2px;
  outline: none;
  cursor: pointer;
}
.styles-module__slider___GLdxp::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 14px;
  height: 14px;
  background: white;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}
.styles-module__slider___GLdxp::-moz-range-thumb {
  width: 14px;
  height: 14px;
  background: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}
.styles-module__slider___GLdxp:hover::-webkit-slider-thumb {
  transform: scale(1.15);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
}
.styles-module__slider___GLdxp:hover::-moz-range-thumb {
  transform: scale(1.15);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
}

.styles-module__sliderLabels___FhLDB {
  display: flex;
  justify-content: space-between;
}

.styles-module__sliderLabel___U8sPr {
  font-size: 0.625rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.4);
  cursor: pointer;
  transition: color 0.15s ease;
}
.styles-module__sliderLabel___U8sPr:hover {
  color: rgba(255, 255, 255, 0.7);
}
.styles-module__sliderLabel___U8sPr.styles-module__active___-zoN6 {
  color: rgba(255, 255, 255, 0.9);
}

.styles-module__colorOptions___iHCNX {
  display: flex;
  gap: 0.5rem;
  margin-top: 0.375rem;
  margin-bottom: 1px;
}

.styles-module__colorOption___IodiY {
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid transparent;
  cursor: pointer;
  transition: transform 0.2s cubic-bezier(0.25, 1, 0.5, 1);
}
.styles-module__colorOption___IodiY:hover {
  transform: scale(1.15);
}
.styles-module__colorOption___IodiY.styles-module__selected___OwRqP {
  transform: scale(0.83);
}

.styles-module__colorOptionRing___U2xpo {
  display: flex;
  width: 24px;
  height: 24px;
  border: 2px solid transparent;
  border-radius: 50%;
  transition: border-color 0.3s ease;
}
.styles-module__settingsToggle___fBrFn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
}
.styles-module__settingsToggle___fBrFn + .styles-module__settingsToggle___fBrFn {
  margin-top: calc(0.5rem + 6px);
}
.styles-module__settingsToggle___fBrFn input[type=checkbox] {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}
.styles-module__settingsToggle___fBrFn.styles-module__settingsToggleMarginBottom___MZUyF {
  margin-bottom: calc(0.5rem + 6px);
}

.styles-module__customCheckbox___U39ax {
  position: relative;
  width: 14px;
  height: 14px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: background 0.25s ease, border-color 0.25s ease;
}
.styles-module__customCheckbox___U39ax svg {
  color: #1a1a1a;
  opacity: 1;
  transition: opacity 0.15s ease;
}
input[type=checkbox]:checked + .styles-module__customCheckbox___U39ax {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgb(255, 255, 255);
}
.styles-module__customCheckbox___U39ax.styles-module__light___r6n4Y {
  border: 1px solid rgba(0, 0, 0, 0.15);
  background: #fff;
}
.styles-module__customCheckbox___U39ax.styles-module__light___r6n4Y.styles-module__checked___mnZLo {
  border-color: #1a1a1a;
  background: #1a1a1a;
}
.styles-module__customCheckbox___U39ax.styles-module__light___r6n4Y.styles-module__checked___mnZLo svg {
  color: #fff;
}

.styles-module__toggleLabel___Xm8Aa {
  font-size: 0.8125rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: -0.0094em;
  display: flex;
  align-items: center;
  gap: 0.25rem;
}
.styles-module__toggleLabel___Xm8Aa.styles-module__light___r6n4Y {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__toggleSwitch___l4Ygm {
  position: relative;
  display: inline-block;
  width: 24px;
  height: 16px;
  flex-shrink: 0;
  cursor: pointer;
  transition: opacity 0.15s ease;
}
.styles-module__toggleSwitch___l4Ygm input {
  opacity: 0;
  width: 0;
  height: 0;
}
.styles-module__toggleSwitch___l4Ygm input:checked + .styles-module__toggleSlider___wprIn {
  background: #3c82f7;
}
.styles-module__toggleSwitch___l4Ygm input:checked + .styles-module__toggleSlider___wprIn::before {
  transform: translateX(8px);
}
.styles-module__toggleSwitch___l4Ygm.styles-module__disabled___332Jw {
  opacity: 0.4;
  pointer-events: none;
}
.styles-module__toggleSwitch___l4Ygm.styles-module__disabled___332Jw .styles-module__toggleSlider___wprIn {
  cursor: not-allowed;
}

.styles-module__toggleSlider___wprIn {
  position: absolute;
  cursor: pointer;
  inset: 0;
  border-radius: 16px;
  background: #484848;
}
.styles-module__light___r6n4Y .styles-module__toggleSlider___wprIn {
  background: #dddddd;
}
.styles-module__toggleSlider___wprIn::before {
  content: "";
  position: absolute;
  height: 12px;
  width: 12px;
  left: 2px;
  bottom: 2px;
  background: white;
  border-radius: 50%;
  transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
}

@keyframes styles-module__mcpPulse___uNggr {
  0% {
    box-shadow: 0 0 0 0 rgba(52, 199, 89, 0.5);
  }
  70% {
    box-shadow: 0 0 0 6px rgba(52, 199, 89, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(52, 199, 89, 0);
  }
}
@keyframes styles-module__mcpPulseError___fov9B {
  0% {
    box-shadow: 0 0 0 0 rgba(255, 59, 48, 0.5);
  }
  70% {
    box-shadow: 0 0 0 6px rgba(255, 59, 48, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(255, 59, 48, 0);
  }
}
.styles-module__mcpStatusDot___ibgkc {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.styles-module__mcpStatusDot___ibgkc.styles-module__connecting___uo-CW {
  background: #f5a623;
  animation: styles-module__mcpPulse___uNggr 1.5s infinite;
}
.styles-module__mcpStatusDot___ibgkc.styles-module__connected___7c28g {
  background: #34c759;
  animation: styles-module__mcpPulse___uNggr 2.5s ease-in-out infinite;
}
.styles-module__mcpStatusDot___ibgkc.styles-module__disconnected___cHPxR {
  background: #ff3b30;
  animation: styles-module__mcpPulseError___fov9B 2s infinite;
}

.styles-module__helpIcon___xQg56 {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: help;
  margin-left: 0;
}
.styles-module__helpIcon___xQg56 svg {
  display: block;
  transform: translateY(1px);
  color: rgba(255, 255, 255, 0.2);
  transition: color 0.15s ease;
}
.styles-module__helpIcon___xQg56:hover svg {
  color: rgba(255, 255, 255, 0.5);
}
.styles-module__helpIcon___xQg56.styles-module__helpIconNudgeDown___0cqpM svg {
  transform: translateY(1px);
}
.styles-module__helpIcon___xQg56.styles-module__helpIconNoNudge___abogC svg {
  transform: translateY(0.5px);
}
.styles-module__helpIcon___xQg56.styles-module__helpIconNudge1-5___DM2TQ svg {
  transform: translateY(1.5px);
}
.styles-module__helpIcon___xQg56.styles-module__helpIconNudge2___TfWgC svg {
  transform: translateY(2px);
}

.styles-module__dragSelection___kZLq2 {
  position: fixed;
  top: 0;
  left: 0;
  border: 2px solid rgba(52, 199, 89, 0.6);
  border-radius: 4px;
  background: rgba(52, 199, 89, 0.08);
  pointer-events: none;
  z-index: 99997;
  will-change: transform, width, height;
  contain: layout style;
}

.styles-module__dragCount___KM90j {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #34c759;
  color: white;
  font-size: 0.875rem;
  font-weight: 600;
  padding: 0.25rem 0.5rem;
  border-radius: 1rem;
  min-width: 1.5rem;
  text-align: center;
}

.styles-module__highlightsContainer___-0xzG {
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 99996;
}

.styles-module__selectedElementHighlight___fyVlI {
  position: fixed;
  top: 0;
  left: 0;
  border: 2px solid rgba(52, 199, 89, 0.5);
  border-radius: 4px;
  background: rgba(52, 199, 89, 0.06);
  pointer-events: none;
  will-change: transform, width, height;
  contain: layout style;
}

.styles-module__light___r6n4Y.styles-module__toolbarContainer___dIhma {
  background: #fff;
  color: rgba(0, 0, 0, 0.85);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);
}
.styles-module__light___r6n4Y.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn:hover {
  background: #f5f5f5;
}
.styles-module__light___r6n4Y.styles-module__controlButton___8Q0jc {
  color: rgba(0, 0, 0, 0.5);
}
.styles-module__light___r6n4Y.styles-module__controlButton___8Q0jc:hover:not(:disabled):not([data-active=true]):not([data-failed=true]):not([data-auto-sync=true]):not([data-error=true]):not([data-no-hover=true]) {
  background: rgba(0, 0, 0, 0.06);
  color: rgba(0, 0, 0, 0.85);
}
.styles-module__light___r6n4Y.styles-module__controlButton___8Q0jc[data-active=true] {
  color: #3c82f7;
  background: rgba(60, 130, 247, 0.15);
}
.styles-module__light___r6n4Y.styles-module__controlButton___8Q0jc[data-error=true] {
  color: #ff3b30;
  background: rgba(255, 59, 48, 0.15);
}
.styles-module__light___r6n4Y.styles-module__controlButton___8Q0jc[data-danger]:hover:not(:disabled):not([data-active=true]):not([data-failed=true]) {
  background: rgba(255, 59, 48, 0.15);
  color: #ff3b30;
}
.styles-module__light___r6n4Y.styles-module__controlButton___8Q0jc[data-auto-sync=true] {
  color: #34c759;
  background: transparent;
}
.styles-module__light___r6n4Y.styles-module__controlButton___8Q0jc[data-failed=true] {
  color: #ff3b30;
  background: rgba(255, 59, 48, 0.15);
}
.styles-module__light___r6n4Y.styles-module__buttonTooltip___Burd9 {
  background: #fff;
  color: rgba(0, 0, 0, 0.85);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);
}
.styles-module__light___r6n4Y.styles-module__buttonTooltip___Burd9::after {
  background: #fff;
}
.styles-module__light___r6n4Y.styles-module__divider___c--s1 {
  background: rgba(0, 0, 0, 0.1);
}
.styles-module__light___r6n4Y.styles-module__markerTooltip___aLJID {
  background: #fff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.06);
}
.styles-module__light___r6n4Y.styles-module__markerTooltip___aLJID .styles-module__markerQuote___FHmrz {
  color: rgba(0, 0, 0, 0.5);
}
.styles-module__light___r6n4Y.styles-module__markerTooltip___aLJID .styles-module__markerNote___QkrrS {
  color: rgba(0, 0, 0, 0.85);
}
.styles-module__light___r6n4Y.styles-module__markerTooltip___aLJID .styles-module__markerHint___2iF-6 {
  color: rgba(0, 0, 0, 0.35);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y {
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y::before {
  background: linear-gradient(to right, #fff 0%, transparent 100%);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y::after {
  background: linear-gradient(to left, #fff 0%, transparent 100%);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__settingsHeader___pwDY9 {
  border-bottom-color: rgba(0, 0, 0, 0.08);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__settingsBrand___0gJeM {
  color: rgba(0, 0, 0, 0.85);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__settingsBrandSlash___uTG18 {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__settingsVersion___TUcFq {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__settingsSection___m-YM2 {
  border-top-color: rgba(0, 0, 0, 0.08);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__settingsLabel___8UjfX {
  color: rgba(0, 0, 0, 0.5);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__cycleButton___FMKfw {
  color: rgba(0, 0, 0, 0.85);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__cycleDot___nPgLY {
  background: rgba(0, 0, 0, 0.2);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__cycleDot___nPgLY.styles-module__active___-zoN6 {
  background: rgba(0, 0, 0, 0.7);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__dropdownButton___16NPz {
  color: rgba(0, 0, 0, 0.85);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__dropdownButton___16NPz:hover {
  background: rgba(0, 0, 0, 0.05);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__toggleLabel___Xm8Aa {
  color: rgba(0, 0, 0, 0.5);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__customCheckbox___U39ax {
  border: 1px solid rgba(0, 0, 0, 0.15);
  background: #fff;
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__customCheckbox___U39ax.styles-module__checked___mnZLo {
  border-color: #1a1a1a;
  background: #1a1a1a;
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__customCheckbox___U39ax.styles-module__checked___mnZLo svg {
  color: #fff;
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__sliderLabel___U8sPr {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__sliderLabel___U8sPr:hover {
  color: rgba(0, 0, 0, 0.7);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__sliderLabel___U8sPr.styles-module__active___-zoN6 {
  color: rgba(0, 0, 0, 0.9);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__slider___GLdxp {
  background: rgba(0, 0, 0, 0.1);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__slider___GLdxp::-webkit-slider-thumb {
  background: #1a1a1a;
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__slider___GLdxp::-moz-range-thumb {
  background: #1a1a1a;
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__helpIcon___xQg56 svg {
  color: rgba(0, 0, 0, 0.2);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__helpIcon___xQg56:hover svg {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__themeToggle___2rUjA {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  margin-left: 0.5rem;
  border: none;
  border-radius: 6px;
  background: transparent;
  color: rgba(255, 255, 255, 0.4);
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease;
}
.styles-module__themeToggle___2rUjA:hover {
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.8);
}
.styles-module__light___r6n4Y .styles-module__themeToggle___2rUjA {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___r6n4Y .styles-module__themeToggle___2rUjA:hover {
  background: rgba(0, 0, 0, 0.06);
  color: rgba(0, 0, 0, 0.7);
}

.styles-module__themeIconWrapper___LsJIM {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 20px;
  height: 20px;
}

.styles-module__themeIcon___lCCmo {
  display: flex;
  align-items: center;
  justify-content: center;
  animation: styles-module__themeIconIn___TU6ML 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

@keyframes styles-module__themeIconIn___TU6ML {
  0% {
    opacity: 0;
    transform: scale(0.8) rotate(-30deg);
  }
  100% {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
}`;if(typeof document<"u"){let n=document.getElementById("feedback-tool-styles-page-toolbar-css-styles");n||(n=document.createElement("style"),n.id="feedback-tool-styles-page-toolbar-css-styles",n.textContent=m5,document.head.appendChild(n))}const h5="#5A54F2";function Ma(n,r){const o=parseInt(n.slice(1,3),16),l=parseInt(n.slice(3,5),16),u=parseInt(n.slice(5,7),16),f=h=>r>1?Math.round(h+(255-h)*(r-1)):Math.round(h*r),d=h=>Math.max(0,Math.min(255,h)),p=h=>d(h).toString(16).padStart(2,"0");return`#${p(f(o))}${p(f(l))}${p(f(u))}`}function _5(){const[n,r]=M.useState(null),[o,l]=M.useState(0),[u,f]=M.useState("mood"),[d,p]=M.useState(null),[h,_]=M.useState(null),[g,y]=M.useState(!1),[x,b]=M.useState(!1),T={bgTransitionDuration:.5,bgBrightnessOffset:.22,screenFadeDuration:.6},R={startRadius:999,endRadius:32,spring:{type:"spring",stiffness:120,damping:24,mass:1}},L=M.useCallback(ie=>{r(ie)},[]),j=n&&Zp[n]?Zp[n]:{from:h5},I=1.2-o/3*.2,A=Ma(j.from,I),B=Ma(j.from,I),U=Ma(j.from,I+T.bgBrightnessOffset),K=n??"__default__",ee=M.useRef(new Map),[W,$]=M.useState([]),oe=M.useRef(null);M.useEffect(()=>{r5(80).then(ie=>{ee.current=ie,n&&ie.has(n)&&($(ie.get(n)),_(n))}).catch(()=>{})},[]),M.useEffect(()=>{if(!n||oe.current===n)return;const ie=ee.current.get(n);ie&&ie.length>0&&($(ie),_(n),em(ie,20),oe.current=n)},[n]);const ce=M.useCallback(async()=>{if(!n)return;const ie=n,Se=Math.round(o/3*100);p(null),f("loading");const Ce=3500,Pe=new Promise(z=>setTimeout(z,Ce));if(h!==ie||W.length===0){const z=ee.current.get(ie);z&&z.length>0&&($(z),_(ie),em(z,20))}const _e=await t5(ie,Se);p(_e),await Pe,f("result")},[n,o,h,W.length]),fe=()=>{f("mood"),p(null)};return D.jsxs("div",{className:"relative overflow-hidden flex flex-col items-center justify-between font-['Inter',sans-serif]",style:{minHeight:"100dvh",height:"100dvh"},children:[null,D.jsx(Ja,{children:D.jsx(ye.div,{className:"absolute inset-0",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:T.bgTransitionDuration,ease:"easeInOut"}},K)}),D.jsx(ye.div,{className:"absolute inset-0",animate:{background:`linear-gradient(to bottom, ${B}, ${U})`},transition:{duration:T.bgTransitionDuration,ease:"easeInOut"}}),D.jsxs("main",{className:"relative z-10 w-full flex flex-col items-center justify-between px-[24px] pt-[calc(16px+env(safe-area-inset-top))] pb-[calc(16px+env(safe-area-inset-bottom))] overflow-hidden",style:{height:"100dvh",gap:"clamp(8px, 1.5svh, 24px)"},children:[D.jsxs("header",{className:"w-full flex justify-between items-center text-white font-['Spectral',serif] tracking-wide shrink-0",style:{fontSize:"clamp(15px, 2.4svh, 18px)"},children:[D.jsx("span",{children:"songrec"}),D.jsx("span",{children:"curated by tanuj"})]}),D.jsx(Yv,{children:D.jsx("div",{className:"relative flex-1 w-full",children:D.jsxs(Ja,{mode:"sync",children:[u==="mood"&&D.jsx(ye.div,{className:"absolute inset-0 flex flex-col items-center justify-between w-full",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:T.screenFadeDuration,ease:"easeInOut"},children:D.jsxs("div",{className:"w-full max-w-[400px] mx-auto flex flex-col items-center justify-between flex-1",children:[D.jsx("div",{className:"flex-1 flex flex-col items-center justify-center w-full mx-[0px] mt-[16px] mb-[0px]",children:D.jsx(Jx,{onMoodConfirmed:L,accentColor:A,selectedMood:n,nudge:g})}),D.jsxs("div",{className:"w-full flex flex-col items-center",style:{gap:"clamp(12px, 2svh, 16px)",marginTop:"clamp(12px, 2svh, 16px)",marginBottom:"clamp(4px, 0.8svh, 8px)"},children:[D.jsx(qx,{accentColor:A,onValueChange:l}),D.jsx(ye.button,{className:"w-full text-white font-medium rounded-full transition-shadow duration-300 active:scale-[0.98] cursor-pointer",style:{fontSize:"clamp(15px, 2.6svh, 18px)",padding:"clamp(10px, 1.8svh, 14px) 0",opacity:n?1:.55,cursor:n?"pointer":"not-allowed"},animate:{backgroundColor:A,boxShadow:`0 4px 12px ${A}4D`,x:x?[0,-8,8,-6,6,-3,3,0]:0},transition:{duration:.8,ease:"easeInOut",x:{duration:.5,ease:"easeInOut"}},onClick:()=>{if(!n){b(!0),y(!0),setTimeout(()=>{b(!1),y(!1)},800);return}ce()},"aria-disabled":!n,children:"Recommend"})]})]})},"mood-screen"),u==="loading"&&D.jsx(ye.div,{className:"absolute inset-0 flex flex-col items-center w-full",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0,transition:{duration:.3,ease:"easeOut"}},transition:{duration:T.screenFadeDuration,ease:"easeIn"},children:D.jsx(l5,{mood:n||"indie",popularity:String(o),images:W,highlightImageUrl:(d==null?void 0:d.album_image)??null,morph:R})},"loading-screen"),u==="result"&&D.jsx(ye.div,{className:"absolute inset-0 flex flex-col items-center w-full",initial:{opacity:1},animate:{opacity:1},exit:{opacity:0},transition:{duration:T.screenFadeDuration,ease:"easeOut"},children:D.jsx("div",{className:"w-full max-w-[400px] mx-auto flex flex-col items-center flex-1",children:D.jsx(u5,{mood:n||"indie",popularity:o,accentColor:A,onStartOver:fe,song:d,morph:R})})},"result-screen")]})})})]})]})}K0.createRoot(document.getElementById("root")).render(D.jsx(_5,{}));
