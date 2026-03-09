(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))l(u);new MutationObserver(u=>{for(const d of u)if(d.type==="childList")for(const f of d.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&l(f)}).observe(document,{childList:!0,subtree:!0});function o(u){const d={};return u.integrity&&(d.integrity=u.integrity),u.referrerPolicy&&(d.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?d.credentials="include":u.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function l(u){if(u.ep)return;u.ep=!0;const d=o(u);fetch(u.href,d)}})();function U0(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var da={exports:{}},Es={},fa={exports:{}},pe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tf;function Y0(){if(Tf)return pe;Tf=1;var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),d=Symbol.for("react.provider"),f=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),y=Symbol.iterator;function x(k){return k===null||typeof k!="object"?null:(k=y&&k[y]||k["@@iterator"],typeof k=="function"?k:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},S=Object.assign,I={};function D(k,A,ae){this.props=k,this.context=A,this.refs=I,this.updater=ae||T}D.prototype.isReactComponent={},D.prototype.setState=function(k,A){if(typeof k!="object"&&typeof k!="function"&&k!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,k,A,"setState")},D.prototype.forceUpdate=function(k){this.updater.enqueueForceUpdate(this,k,"forceUpdate")};function z(){}z.prototype=D.prototype;function j(k,A,ae){this.props=k,this.context=A,this.refs=I,this.updater=ae||T}var N=j.prototype=new z;N.constructor=j,S(N,D.prototype),N.isPureReactComponent=!0;var O=Array.isArray,W=Object.prototype.hasOwnProperty,Z={current:null},X={key:!0,ref:!0,__self:!0,__source:!0};function H(k,A,ae){var de,ve={},ye=null,Te=null;if(A!=null)for(de in A.ref!==void 0&&(Te=A.ref),A.key!==void 0&&(ye=""+A.key),A)W.call(A,de)&&!X.hasOwnProperty(de)&&(ve[de]=A[de]);var Se=arguments.length-2;if(Se===1)ve.children=ae;else if(1<Se){for(var Ee=Array(Se),et=0;et<Se;et++)Ee[et]=arguments[et+2];ve.children=Ee}if(k&&k.defaultProps)for(de in Se=k.defaultProps,Se)ve[de]===void 0&&(ve[de]=Se[de]);return{$$typeof:n,type:k,key:ye,ref:Te,props:ve,_owner:Z.current}}function K(k,A){return{$$typeof:n,type:k.type,key:A,ref:k.ref,props:k.props,_owner:k._owner}}function J(k){return typeof k=="object"&&k!==null&&k.$$typeof===n}function ie(k){var A={"=":"=0",":":"=2"};return"$"+k.replace(/[=:]/g,function(ae){return A[ae]})}var ue=/\/+/g;function ce(k,A){return typeof k=="object"&&k!==null&&k.key!=null?ie(""+k.key):A.toString(36)}function me(k,A,ae,de,ve){var ye=typeof k;(ye==="undefined"||ye==="boolean")&&(k=null);var Te=!1;if(k===null)Te=!0;else switch(ye){case"string":case"number":Te=!0;break;case"object":switch(k.$$typeof){case n:case r:Te=!0}}if(Te)return Te=k,ve=ve(Te),k=de===""?"."+ce(Te,0):de,O(ve)?(ae="",k!=null&&(ae=k.replace(ue,"$&/")+"/"),me(ve,A,ae,"",function(et){return et})):ve!=null&&(J(ve)&&(ve=K(ve,ae+(!ve.key||Te&&Te.key===ve.key?"":(""+ve.key).replace(ue,"$&/")+"/")+k)),A.push(ve)),1;if(Te=0,de=de===""?".":de+":",O(k))for(var Se=0;Se<k.length;Se++){ye=k[Se];var Ee=de+ce(ye,Se);Te+=me(ye,A,ae,Ee,ve)}else if(Ee=x(k),typeof Ee=="function")for(k=Ee.call(k),Se=0;!(ye=k.next()).done;)ye=ye.value,Ee=de+ce(ye,Se++),Te+=me(ye,A,ae,Ee,ve);else if(ye==="object")throw A=String(k),Error("Objects are not valid as a React child (found: "+(A==="[object Object]"?"object with keys {"+Object.keys(k).join(", ")+"}":A)+"). If you meant to render a collection of children, use an array instead.");return Te}function fe(k,A,ae){if(k==null)return k;var de=[],ve=0;return me(k,de,"","",function(ye){return A.call(ae,ye,ve++)}),de}function he(k){if(k._status===-1){var A=k._result;A=A(),A.then(function(ae){(k._status===0||k._status===-1)&&(k._status=1,k._result=ae)},function(ae){(k._status===0||k._status===-1)&&(k._status=2,k._result=ae)}),k._status===-1&&(k._status=0,k._result=A)}if(k._status===1)return k._result.default;throw k._result}var re={current:null},L={transition:null},V={ReactCurrentDispatcher:re,ReactCurrentBatchConfig:L,ReactCurrentOwner:Z};function Y(){throw Error("act(...) is not supported in production builds of React.")}return pe.Children={map:fe,forEach:function(k,A,ae){fe(k,function(){A.apply(this,arguments)},ae)},count:function(k){var A=0;return fe(k,function(){A++}),A},toArray:function(k){return fe(k,function(A){return A})||[]},only:function(k){if(!J(k))throw Error("React.Children.only expected to receive a single React element child.");return k}},pe.Component=D,pe.Fragment=o,pe.Profiler=u,pe.PureComponent=j,pe.StrictMode=l,pe.Suspense=h,pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=V,pe.act=Y,pe.cloneElement=function(k,A,ae){if(k==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+k+".");var de=S({},k.props),ve=k.key,ye=k.ref,Te=k._owner;if(A!=null){if(A.ref!==void 0&&(ye=A.ref,Te=Z.current),A.key!==void 0&&(ve=""+A.key),k.type&&k.type.defaultProps)var Se=k.type.defaultProps;for(Ee in A)W.call(A,Ee)&&!X.hasOwnProperty(Ee)&&(de[Ee]=A[Ee]===void 0&&Se!==void 0?Se[Ee]:A[Ee])}var Ee=arguments.length-2;if(Ee===1)de.children=ae;else if(1<Ee){Se=Array(Ee);for(var et=0;et<Ee;et++)Se[et]=arguments[et+2];de.children=Se}return{$$typeof:n,type:k.type,key:ve,ref:ye,props:de,_owner:Te}},pe.createContext=function(k){return k={$$typeof:f,_currentValue:k,_currentValue2:k,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},k.Provider={$$typeof:d,_context:k},k.Consumer=k},pe.createElement=H,pe.createFactory=function(k){var A=H.bind(null,k);return A.type=k,A},pe.createRef=function(){return{current:null}},pe.forwardRef=function(k){return{$$typeof:p,render:k}},pe.isValidElement=J,pe.lazy=function(k){return{$$typeof:_,_payload:{_status:-1,_result:k},_init:he}},pe.memo=function(k,A){return{$$typeof:g,type:k,compare:A===void 0?null:A}},pe.startTransition=function(k){var A=L.transition;L.transition={};try{k()}finally{L.transition=A}},pe.unstable_act=Y,pe.useCallback=function(k,A){return re.current.useCallback(k,A)},pe.useContext=function(k){return re.current.useContext(k)},pe.useDebugValue=function(){},pe.useDeferredValue=function(k){return re.current.useDeferredValue(k)},pe.useEffect=function(k,A){return re.current.useEffect(k,A)},pe.useId=function(){return re.current.useId()},pe.useImperativeHandle=function(k,A,ae){return re.current.useImperativeHandle(k,A,ae)},pe.useInsertionEffect=function(k,A){return re.current.useInsertionEffect(k,A)},pe.useLayoutEffect=function(k,A){return re.current.useLayoutEffect(k,A)},pe.useMemo=function(k,A){return re.current.useMemo(k,A)},pe.useReducer=function(k,A,ae){return re.current.useReducer(k,A,ae)},pe.useRef=function(k){return re.current.useRef(k)},pe.useState=function(k){return re.current.useState(k)},pe.useSyncExternalStore=function(k,A,ae){return re.current.useSyncExternalStore(k,A,ae)},pe.useTransition=function(){return re.current.useTransition()},pe.version="18.3.1",pe}var Cf;function lu(){return Cf||(Cf=1,fa.exports=Y0()),fa.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pf;function W0(){if(Pf)return Es;Pf=1;var n=lu(),r=Symbol.for("react.element"),o=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,u=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function f(p,h,g){var _,y={},x=null,T=null;g!==void 0&&(x=""+g),h.key!==void 0&&(x=""+h.key),h.ref!==void 0&&(T=h.ref);for(_ in h)l.call(h,_)&&!d.hasOwnProperty(_)&&(y[_]=h[_]);if(p&&p.defaultProps)for(_ in h=p.defaultProps,h)y[_]===void 0&&(y[_]=h[_]);return{$$typeof:r,type:p,key:x,ref:T,props:y,_owner:u.current}}return Es.Fragment=o,Es.jsx=f,Es.jsxs=f,Es}var Ef;function H0(){return Ef||(Ef=1,da.exports=W0()),da.exports}var R=H0(),ei={},pa={exports:{}},gt={},ma={exports:{}},ha={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mf;function Q0(){return Mf||(Mf=1,(function(n){function r(L,V){var Y=L.length;L.push(V);e:for(;0<Y;){var k=Y-1>>>1,A=L[k];if(0<u(A,V))L[k]=V,L[Y]=A,Y=k;else break e}}function o(L){return L.length===0?null:L[0]}function l(L){if(L.length===0)return null;var V=L[0],Y=L.pop();if(Y!==V){L[0]=Y;e:for(var k=0,A=L.length,ae=A>>>1;k<ae;){var de=2*(k+1)-1,ve=L[de],ye=de+1,Te=L[ye];if(0>u(ve,Y))ye<A&&0>u(Te,ve)?(L[k]=Te,L[ye]=Y,k=ye):(L[k]=ve,L[de]=Y,k=de);else if(ye<A&&0>u(Te,Y))L[k]=Te,L[ye]=Y,k=ye;else break e}}return V}function u(L,V){var Y=L.sortIndex-V.sortIndex;return Y!==0?Y:L.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var d=performance;n.unstable_now=function(){return d.now()}}else{var f=Date,p=f.now();n.unstable_now=function(){return f.now()-p}}var h=[],g=[],_=1,y=null,x=3,T=!1,S=!1,I=!1,D=typeof setTimeout=="function"?setTimeout:null,z=typeof clearTimeout=="function"?clearTimeout:null,j=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function N(L){for(var V=o(g);V!==null;){if(V.callback===null)l(g);else if(V.startTime<=L)l(g),V.sortIndex=V.expirationTime,r(h,V);else break;V=o(g)}}function O(L){if(I=!1,N(L),!S)if(o(h)!==null)S=!0,he(W);else{var V=o(g);V!==null&&re(O,V.startTime-L)}}function W(L,V){S=!1,I&&(I=!1,z(H),H=-1),T=!0;var Y=x;try{for(N(V),y=o(h);y!==null&&(!(y.expirationTime>V)||L&&!ie());){var k=y.callback;if(typeof k=="function"){y.callback=null,x=y.priorityLevel;var A=k(y.expirationTime<=V);V=n.unstable_now(),typeof A=="function"?y.callback=A:y===o(h)&&l(h),N(V)}else l(h);y=o(h)}if(y!==null)var ae=!0;else{var de=o(g);de!==null&&re(O,de.startTime-V),ae=!1}return ae}finally{y=null,x=Y,T=!1}}var Z=!1,X=null,H=-1,K=5,J=-1;function ie(){return!(n.unstable_now()-J<K)}function ue(){if(X!==null){var L=n.unstable_now();J=L;var V=!0;try{V=X(!0,L)}finally{V?ce():(Z=!1,X=null)}}else Z=!1}var ce;if(typeof j=="function")ce=function(){j(ue)};else if(typeof MessageChannel<"u"){var me=new MessageChannel,fe=me.port2;me.port1.onmessage=ue,ce=function(){fe.postMessage(null)}}else ce=function(){D(ue,0)};function he(L){X=L,Z||(Z=!0,ce())}function re(L,V){H=D(function(){L(n.unstable_now())},V)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(L){L.callback=null},n.unstable_continueExecution=function(){S||T||(S=!0,he(W))},n.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<L?Math.floor(1e3/L):5},n.unstable_getCurrentPriorityLevel=function(){return x},n.unstable_getFirstCallbackNode=function(){return o(h)},n.unstable_next=function(L){switch(x){case 1:case 2:case 3:var V=3;break;default:V=x}var Y=x;x=V;try{return L()}finally{x=Y}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(L,V){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var Y=x;x=L;try{return V()}finally{x=Y}},n.unstable_scheduleCallback=function(L,V,Y){var k=n.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?k+Y:k):Y=k,L){case 1:var A=-1;break;case 2:A=250;break;case 5:A=1073741823;break;case 4:A=1e4;break;default:A=5e3}return A=Y+A,L={id:_++,callback:V,priorityLevel:L,startTime:Y,expirationTime:A,sortIndex:-1},Y>k?(L.sortIndex=Y,r(g,L),o(h)===null&&L===o(g)&&(I?(z(H),H=-1):I=!0,re(O,Y-k))):(L.sortIndex=A,r(h,L),S||T||(S=!0,he(W))),L},n.unstable_shouldYield=ie,n.unstable_wrapCallback=function(L){var V=x;return function(){var Y=x;x=V;try{return L.apply(this,arguments)}finally{x=Y}}}})(ha)),ha}var Rf;function X0(){return Rf||(Rf=1,ma.exports=Q0()),ma.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Df;function $0(){if(Df)return gt;Df=1;var n=lu(),r=X0();function o(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,s=1;s<arguments.length;s++)t+="&args[]="+encodeURIComponent(arguments[s]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var l=new Set,u={};function d(e,t){f(e,t),f(e+"Capture",t)}function f(e,t){for(u[e]=t,e=0;e<t.length;e++)l.add(t[e])}var p=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,g=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},y={};function x(e){return h.call(y,e)?!0:h.call(_,e)?!1:g.test(e)?y[e]=!0:(_[e]=!0,!1)}function T(e,t,s,i){if(s!==null&&s.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return i?!1:s!==null?!s.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function S(e,t,s,i){if(t===null||typeof t>"u"||T(e,t,s,i))return!0;if(i)return!1;if(s!==null)switch(s.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function I(e,t,s,i,a,c,m){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=i,this.attributeNamespace=a,this.mustUseProperty=s,this.propertyName=e,this.type=t,this.sanitizeURL=c,this.removeEmptyString=m}var D={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){D[e]=new I(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];D[t]=new I(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){D[e]=new I(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){D[e]=new I(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){D[e]=new I(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){D[e]=new I(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){D[e]=new I(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){D[e]=new I(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){D[e]=new I(e,5,!1,e.toLowerCase(),null,!1,!1)});var z=/[\-:]([a-z])/g;function j(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(z,j);D[t]=new I(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(z,j);D[t]=new I(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(z,j);D[t]=new I(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){D[e]=new I(e,1,!1,e.toLowerCase(),null,!1,!1)}),D.xlinkHref=new I("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){D[e]=new I(e,1,!1,e.toLowerCase(),null,!0,!0)});function N(e,t,s,i){var a=D.hasOwnProperty(t)?D[t]:null;(a!==null?a.type!==0:i||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(S(t,s,a,i)&&(s=null),i||a===null?x(t)&&(s===null?e.removeAttribute(t):e.setAttribute(t,""+s)):a.mustUseProperty?e[a.propertyName]=s===null?a.type===3?!1:"":s:(t=a.attributeName,i=a.attributeNamespace,s===null?e.removeAttribute(t):(a=a.type,s=a===3||a===4&&s===!0?"":""+s,i?e.setAttributeNS(i,t,s):e.setAttribute(t,s))))}var O=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,W=Symbol.for("react.element"),Z=Symbol.for("react.portal"),X=Symbol.for("react.fragment"),H=Symbol.for("react.strict_mode"),K=Symbol.for("react.profiler"),J=Symbol.for("react.provider"),ie=Symbol.for("react.context"),ue=Symbol.for("react.forward_ref"),ce=Symbol.for("react.suspense"),me=Symbol.for("react.suspense_list"),fe=Symbol.for("react.memo"),he=Symbol.for("react.lazy"),re=Symbol.for("react.offscreen"),L=Symbol.iterator;function V(e){return e===null||typeof e!="object"?null:(e=L&&e[L]||e["@@iterator"],typeof e=="function"?e:null)}var Y=Object.assign,k;function A(e){if(k===void 0)try{throw Error()}catch(s){var t=s.stack.trim().match(/\n( *(at )?)/);k=t&&t[1]||""}return`
`+k+e}var ae=!1;function de(e,t){if(!e||ae)return"";ae=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(M){var i=M}Reflect.construct(e,[],t)}else{try{t.call()}catch(M){i=M}e.call(t.prototype)}else{try{throw Error()}catch(M){i=M}e()}}catch(M){if(M&&i&&typeof M.stack=="string"){for(var a=M.stack.split(`
`),c=i.stack.split(`
`),m=a.length-1,v=c.length-1;1<=m&&0<=v&&a[m]!==c[v];)v--;for(;1<=m&&0<=v;m--,v--)if(a[m]!==c[v]){if(m!==1||v!==1)do if(m--,v--,0>v||a[m]!==c[v]){var w=`
`+a[m].replace(" at new "," at ");return e.displayName&&w.includes("<anonymous>")&&(w=w.replace("<anonymous>",e.displayName)),w}while(1<=m&&0<=v);break}}}finally{ae=!1,Error.prepareStackTrace=s}return(e=e?e.displayName||e.name:"")?A(e):""}function ve(e){switch(e.tag){case 5:return A(e.type);case 16:return A("Lazy");case 13:return A("Suspense");case 19:return A("SuspenseList");case 0:case 2:case 15:return e=de(e.type,!1),e;case 11:return e=de(e.type.render,!1),e;case 1:return e=de(e.type,!0),e;default:return""}}function ye(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case X:return"Fragment";case Z:return"Portal";case K:return"Profiler";case H:return"StrictMode";case ce:return"Suspense";case me:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ie:return(e.displayName||"Context")+".Consumer";case J:return(e._context.displayName||"Context")+".Provider";case ue:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case fe:return t=e.displayName||null,t!==null?t:ye(e.type)||"Memo";case he:t=e._payload,e=e._init;try{return ye(e(t))}catch{}}return null}function Te(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ye(t);case 8:return t===H?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Se(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ee(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function et(e){var t=Ee(e)?"checked":"value",s=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),i=""+e[t];if(!e.hasOwnProperty(t)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var a=s.get,c=s.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(m){i=""+m,c.call(this,m)}}),Object.defineProperty(e,t,{enumerable:s.enumerable}),{getValue:function(){return i},setValue:function(m){i=""+m},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Gt(e){e._valueTracker||(e._valueTracker=et(e))}function jn(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var s=t.getValue(),i="";return e&&(i=Ee(e)?e.checked?"true":"false":e.value),e=i,e!==s?(t.setValue(e),!0):!1}function Nn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Fr(e,t){var s=t.checked;return Y({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:s??e._wrapperState.initialChecked})}function Vn(e,t){var s=t.defaultValue==null?"":t.defaultValue,i=t.checked!=null?t.checked:t.defaultChecked;s=Se(t.value!=null?t.value:s),e._wrapperState={initialChecked:i,initialValue:s,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ur(e,t){t=t.checked,t!=null&&N(e,"checked",t,!1)}function Yr(e,t){Ur(e,t);var s=Se(t.value),i=t.type;if(s!=null)i==="number"?(s===0&&e.value===""||e.value!=s)&&(e.value=""+s):e.value!==""+s&&(e.value=""+s);else if(i==="submit"||i==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ln(e,t.type,s):t.hasOwnProperty("defaultValue")&&ln(e,t.type,Se(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function On(e,t,s){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var i=t.type;if(!(i!=="submit"&&i!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,s||t===e.value||(e.value=t),e.defaultValue=t}s=e.name,s!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,s!==""&&(e.name=s)}function ln(e,t,s){(t!=="number"||Nn(e.ownerDocument)!==e)&&(s==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+s&&(e.defaultValue=""+s))}var an=Array.isArray;function un(e,t,s,i){if(e=e.options,t){t={};for(var a=0;a<s.length;a++)t["$"+s[a]]=!0;for(s=0;s<e.length;s++)a=t.hasOwnProperty("$"+e[s].value),e[s].selected!==a&&(e[s].selected=a),a&&i&&(e[s].defaultSelected=!0)}else{for(s=""+Se(s),t=null,a=0;a<e.length;a++){if(e[a].value===s){e[a].selected=!0,i&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function _e(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(o(91));return Y({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ke(e,t){var s=t.value;if(s==null){if(s=t.children,t=t.defaultValue,s!=null){if(t!=null)throw Error(o(92));if(an(s)){if(1<s.length)throw Error(o(93));s=s[0]}t=s}t==null&&(t=""),s=t}e._wrapperState={initialValue:Se(s)}}function Be(e,t){var s=Se(t.value),i=Se(t.defaultValue);s!=null&&(s=""+s,s!==e.value&&(e.value=s),t.defaultValue==null&&e.defaultValue!==s&&(e.defaultValue=s)),i!=null&&(e.defaultValue=""+i)}function it(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ke(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function dt(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ke(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var yt,Hs=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,s,i,a){MSApp.execUnsafeLocalFunction(function(){return e(t,s,i,a)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(yt=yt||document.createElement("div"),yt.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=yt.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Wr(e,t){if(t){var s=e.firstChild;if(s&&s===e.lastChild&&s.nodeType===3){s.nodeValue=t;return}}e.textContent=t}var Hr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Qh=["Webkit","ms","Moz","O"];Object.keys(Hr).forEach(function(e){Qh.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Hr[t]=Hr[e]})});function zu(e,t,s){return t==null||typeof t=="boolean"||t===""?"":s||typeof t!="number"||t===0||Hr.hasOwnProperty(e)&&Hr[e]?(""+t).trim():t+"px"}function Bu(e,t){e=e.style;for(var s in t)if(t.hasOwnProperty(s)){var i=s.indexOf("--")===0,a=zu(s,t[s],i);s==="float"&&(s="cssFloat"),i?e.setProperty(s,a):e[s]=a}}var Xh=Y({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ki(e,t){if(t){if(Xh[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(o(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(o(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(o(61))}if(t.style!=null&&typeof t.style!="object")throw Error(o(62))}}function bi(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ti=null;function Ci(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Pi=null,sr=null,or=null;function Fu(e){if(e=ps(e)){if(typeof Pi!="function")throw Error(o(280));var t=e.stateNode;t&&(t=ho(t),Pi(e.stateNode,e.type,t))}}function Uu(e){sr?or?or.push(e):or=[e]:sr=e}function Yu(){if(sr){var e=sr,t=or;if(or=sr=null,Fu(e),t)for(e=0;e<t.length;e++)Fu(t[e])}}function Wu(e,t){return e(t)}function Hu(){}var Ei=!1;function Qu(e,t,s){if(Ei)return e(t,s);Ei=!0;try{return Wu(e,t,s)}finally{Ei=!1,(sr!==null||or!==null)&&(Hu(),Yu())}}function Qr(e,t){var s=e.stateNode;if(s===null)return null;var i=ho(s);if(i===null)return null;s=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(s&&typeof s!="function")throw Error(o(231,t,typeof s));return s}var Mi=!1;if(p)try{var Xr={};Object.defineProperty(Xr,"passive",{get:function(){Mi=!0}}),window.addEventListener("test",Xr,Xr),window.removeEventListener("test",Xr,Xr)}catch{Mi=!1}function $h(e,t,s,i,a,c,m,v,w){var M=Array.prototype.slice.call(arguments,3);try{t.apply(s,M)}catch(F){this.onError(F)}}var $r=!1,Qs=null,Xs=!1,Ri=null,Kh={onError:function(e){$r=!0,Qs=e}};function Gh(e,t,s,i,a,c,m,v,w){$r=!1,Qs=null,$h.apply(Kh,arguments)}function Zh(e,t,s,i,a,c,m,v,w){if(Gh.apply(this,arguments),$r){if($r){var M=Qs;$r=!1,Qs=null}else throw Error(o(198));Xs||(Xs=!0,Ri=M)}}function zn(e){var t=e,s=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(s=t.return),e=t.return;while(e)}return t.tag===3?s:null}function Xu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function $u(e){if(zn(e)!==e)throw Error(o(188))}function Jh(e){var t=e.alternate;if(!t){if(t=zn(e),t===null)throw Error(o(188));return t!==e?null:e}for(var s=e,i=t;;){var a=s.return;if(a===null)break;var c=a.alternate;if(c===null){if(i=a.return,i!==null){s=i;continue}break}if(a.child===c.child){for(c=a.child;c;){if(c===s)return $u(a),e;if(c===i)return $u(a),t;c=c.sibling}throw Error(o(188))}if(s.return!==i.return)s=a,i=c;else{for(var m=!1,v=a.child;v;){if(v===s){m=!0,s=a,i=c;break}if(v===i){m=!0,i=a,s=c;break}v=v.sibling}if(!m){for(v=c.child;v;){if(v===s){m=!0,s=c,i=a;break}if(v===i){m=!0,i=c,s=a;break}v=v.sibling}if(!m)throw Error(o(189))}}if(s.alternate!==i)throw Error(o(190))}if(s.tag!==3)throw Error(o(188));return s.stateNode.current===s?e:t}function Ku(e){return e=Jh(e),e!==null?Gu(e):null}function Gu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Gu(e);if(t!==null)return t;e=e.sibling}return null}var Zu=r.unstable_scheduleCallback,Ju=r.unstable_cancelCallback,qh=r.unstable_shouldYield,e_=r.unstable_requestPaint,Oe=r.unstable_now,t_=r.unstable_getCurrentPriorityLevel,Di=r.unstable_ImmediatePriority,qu=r.unstable_UserBlockingPriority,$s=r.unstable_NormalPriority,n_=r.unstable_LowPriority,ec=r.unstable_IdlePriority,Ks=null,Ut=null;function r_(e){if(Ut&&typeof Ut.onCommitFiberRoot=="function")try{Ut.onCommitFiberRoot(Ks,e,void 0,(e.current.flags&128)===128)}catch{}}var Dt=Math.clz32?Math.clz32:i_,s_=Math.log,o_=Math.LN2;function i_(e){return e>>>=0,e===0?32:31-(s_(e)/o_|0)|0}var Gs=64,Zs=4194304;function Kr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Js(e,t){var s=e.pendingLanes;if(s===0)return 0;var i=0,a=e.suspendedLanes,c=e.pingedLanes,m=s&268435455;if(m!==0){var v=m&~a;v!==0?i=Kr(v):(c&=m,c!==0&&(i=Kr(c)))}else m=s&~a,m!==0?i=Kr(m):c!==0&&(i=Kr(c));if(i===0)return 0;if(t!==0&&t!==i&&(t&a)===0&&(a=i&-i,c=t&-t,a>=c||a===16&&(c&4194240)!==0))return t;if((i&4)!==0&&(i|=s&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=i;0<t;)s=31-Dt(t),a=1<<s,i|=e[s],t&=~a;return i}function l_(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function a_(e,t){for(var s=e.suspendedLanes,i=e.pingedLanes,a=e.expirationTimes,c=e.pendingLanes;0<c;){var m=31-Dt(c),v=1<<m,w=a[m];w===-1?((v&s)===0||(v&i)!==0)&&(a[m]=l_(v,t)):w<=t&&(e.expiredLanes|=v),c&=~v}}function Li(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function tc(){var e=Gs;return Gs<<=1,(Gs&4194240)===0&&(Gs=64),e}function Ii(e){for(var t=[],s=0;31>s;s++)t.push(e);return t}function Gr(e,t,s){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Dt(t),e[t]=s}function u_(e,t){var s=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var i=e.eventTimes;for(e=e.expirationTimes;0<s;){var a=31-Dt(s),c=1<<a;t[a]=0,i[a]=-1,e[a]=-1,s&=~c}}function Ai(e,t){var s=e.entangledLanes|=t;for(e=e.entanglements;s;){var i=31-Dt(s),a=1<<i;a&t|e[i]&t&&(e[i]|=t),s&=~a}}var be=0;function nc(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var rc,ji,sc,oc,ic,Ni=!1,qs=[],cn=null,dn=null,fn=null,Zr=new Map,Jr=new Map,pn=[],c_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function lc(e,t){switch(e){case"focusin":case"focusout":cn=null;break;case"dragenter":case"dragleave":dn=null;break;case"mouseover":case"mouseout":fn=null;break;case"pointerover":case"pointerout":Zr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Jr.delete(t.pointerId)}}function qr(e,t,s,i,a,c){return e===null||e.nativeEvent!==c?(e={blockedOn:t,domEventName:s,eventSystemFlags:i,nativeEvent:c,targetContainers:[a]},t!==null&&(t=ps(t),t!==null&&ji(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function d_(e,t,s,i,a){switch(t){case"focusin":return cn=qr(cn,e,t,s,i,a),!0;case"dragenter":return dn=qr(dn,e,t,s,i,a),!0;case"mouseover":return fn=qr(fn,e,t,s,i,a),!0;case"pointerover":var c=a.pointerId;return Zr.set(c,qr(Zr.get(c)||null,e,t,s,i,a)),!0;case"gotpointercapture":return c=a.pointerId,Jr.set(c,qr(Jr.get(c)||null,e,t,s,i,a)),!0}return!1}function ac(e){var t=Bn(e.target);if(t!==null){var s=zn(t);if(s!==null){if(t=s.tag,t===13){if(t=Xu(s),t!==null){e.blockedOn=t,ic(e.priority,function(){sc(s)});return}}else if(t===3&&s.stateNode.current.memoizedState.isDehydrated){e.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}e.blockedOn=null}function eo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var s=Oi(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(s===null){s=e.nativeEvent;var i=new s.constructor(s.type,s);Ti=i,s.target.dispatchEvent(i),Ti=null}else return t=ps(s),t!==null&&ji(t),e.blockedOn=s,!1;t.shift()}return!0}function uc(e,t,s){eo(e)&&s.delete(t)}function f_(){Ni=!1,cn!==null&&eo(cn)&&(cn=null),dn!==null&&eo(dn)&&(dn=null),fn!==null&&eo(fn)&&(fn=null),Zr.forEach(uc),Jr.forEach(uc)}function es(e,t){e.blockedOn===t&&(e.blockedOn=null,Ni||(Ni=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,f_)))}function ts(e){function t(a){return es(a,e)}if(0<qs.length){es(qs[0],e);for(var s=1;s<qs.length;s++){var i=qs[s];i.blockedOn===e&&(i.blockedOn=null)}}for(cn!==null&&es(cn,e),dn!==null&&es(dn,e),fn!==null&&es(fn,e),Zr.forEach(t),Jr.forEach(t),s=0;s<pn.length;s++)i=pn[s],i.blockedOn===e&&(i.blockedOn=null);for(;0<pn.length&&(s=pn[0],s.blockedOn===null);)ac(s),s.blockedOn===null&&pn.shift()}var ir=O.ReactCurrentBatchConfig,to=!0;function p_(e,t,s,i){var a=be,c=ir.transition;ir.transition=null;try{be=1,Vi(e,t,s,i)}finally{be=a,ir.transition=c}}function m_(e,t,s,i){var a=be,c=ir.transition;ir.transition=null;try{be=4,Vi(e,t,s,i)}finally{be=a,ir.transition=c}}function Vi(e,t,s,i){if(to){var a=Oi(e,t,s,i);if(a===null)tl(e,t,i,no,s),lc(e,i);else if(d_(a,e,t,s,i))i.stopPropagation();else if(lc(e,i),t&4&&-1<c_.indexOf(e)){for(;a!==null;){var c=ps(a);if(c!==null&&rc(c),c=Oi(e,t,s,i),c===null&&tl(e,t,i,no,s),c===a)break;a=c}a!==null&&i.stopPropagation()}else tl(e,t,i,null,s)}}var no=null;function Oi(e,t,s,i){if(no=null,e=Ci(i),e=Bn(e),e!==null)if(t=zn(e),t===null)e=null;else if(s=t.tag,s===13){if(e=Xu(t),e!==null)return e;e=null}else if(s===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return no=e,null}function cc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(t_()){case Di:return 1;case qu:return 4;case $s:case n_:return 16;case ec:return 536870912;default:return 16}default:return 16}}var mn=null,zi=null,ro=null;function dc(){if(ro)return ro;var e,t=zi,s=t.length,i,a="value"in mn?mn.value:mn.textContent,c=a.length;for(e=0;e<s&&t[e]===a[e];e++);var m=s-e;for(i=1;i<=m&&t[s-i]===a[c-i];i++);return ro=a.slice(e,1<i?1-i:void 0)}function so(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function oo(){return!0}function fc(){return!1}function vt(e){function t(s,i,a,c,m){this._reactName=s,this._targetInst=a,this.type=i,this.nativeEvent=c,this.target=m,this.currentTarget=null;for(var v in e)e.hasOwnProperty(v)&&(s=e[v],this[v]=s?s(c):c[v]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?oo:fc,this.isPropagationStopped=fc,this}return Y(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=oo)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=oo)},persist:function(){},isPersistent:oo}),t}var lr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Bi=vt(lr),ns=Y({},lr,{view:0,detail:0}),h_=vt(ns),Fi,Ui,rs,io=Y({},ns,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==rs&&(rs&&e.type==="mousemove"?(Fi=e.screenX-rs.screenX,Ui=e.screenY-rs.screenY):Ui=Fi=0,rs=e),Fi)},movementY:function(e){return"movementY"in e?e.movementY:Ui}}),pc=vt(io),__=Y({},io,{dataTransfer:0}),g_=vt(__),y_=Y({},ns,{relatedTarget:0}),Yi=vt(y_),v_=Y({},lr,{animationName:0,elapsedTime:0,pseudoElement:0}),x_=vt(v_),w_=Y({},lr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),S_=vt(w_),k_=Y({},lr,{data:0}),mc=vt(k_),b_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},T_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},C_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function P_(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=C_[e])?!!t[e]:!1}function Wi(){return P_}var E_=Y({},ns,{key:function(e){if(e.key){var t=b_[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=so(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?T_[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wi,charCode:function(e){return e.type==="keypress"?so(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?so(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),M_=vt(E_),R_=Y({},io,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),hc=vt(R_),D_=Y({},ns,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wi}),L_=vt(D_),I_=Y({},lr,{propertyName:0,elapsedTime:0,pseudoElement:0}),A_=vt(I_),j_=Y({},io,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),N_=vt(j_),V_=[9,13,27,32],Hi=p&&"CompositionEvent"in window,ss=null;p&&"documentMode"in document&&(ss=document.documentMode);var O_=p&&"TextEvent"in window&&!ss,_c=p&&(!Hi||ss&&8<ss&&11>=ss),gc=" ",yc=!1;function vc(e,t){switch(e){case"keyup":return V_.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function xc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ar=!1;function z_(e,t){switch(e){case"compositionend":return xc(t);case"keypress":return t.which!==32?null:(yc=!0,gc);case"textInput":return e=t.data,e===gc&&yc?null:e;default:return null}}function B_(e,t){if(ar)return e==="compositionend"||!Hi&&vc(e,t)?(e=dc(),ro=zi=mn=null,ar=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return _c&&t.locale!=="ko"?null:t.data;default:return null}}var F_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function wc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!F_[e.type]:t==="textarea"}function Sc(e,t,s,i){Uu(i),t=fo(t,"onChange"),0<t.length&&(s=new Bi("onChange","change",null,s,i),e.push({event:s,listeners:t}))}var os=null,is=null;function U_(e){Bc(e,0)}function lo(e){var t=pr(e);if(jn(t))return e}function Y_(e,t){if(e==="change")return t}var kc=!1;if(p){var Qi;if(p){var Xi="oninput"in document;if(!Xi){var bc=document.createElement("div");bc.setAttribute("oninput","return;"),Xi=typeof bc.oninput=="function"}Qi=Xi}else Qi=!1;kc=Qi&&(!document.documentMode||9<document.documentMode)}function Tc(){os&&(os.detachEvent("onpropertychange",Cc),is=os=null)}function Cc(e){if(e.propertyName==="value"&&lo(is)){var t=[];Sc(t,is,e,Ci(e)),Qu(U_,t)}}function W_(e,t,s){e==="focusin"?(Tc(),os=t,is=s,os.attachEvent("onpropertychange",Cc)):e==="focusout"&&Tc()}function H_(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return lo(is)}function Q_(e,t){if(e==="click")return lo(t)}function X_(e,t){if(e==="input"||e==="change")return lo(t)}function $_(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Lt=typeof Object.is=="function"?Object.is:$_;function ls(e,t){if(Lt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var s=Object.keys(e),i=Object.keys(t);if(s.length!==i.length)return!1;for(i=0;i<s.length;i++){var a=s[i];if(!h.call(t,a)||!Lt(e[a],t[a]))return!1}return!0}function Pc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ec(e,t){var s=Pc(e);e=0;for(var i;s;){if(s.nodeType===3){if(i=e+s.textContent.length,e<=t&&i>=t)return{node:s,offset:t-e};e=i}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=Pc(s)}}function Mc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Mc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Rc(){for(var e=window,t=Nn();t instanceof e.HTMLIFrameElement;){try{var s=typeof t.contentWindow.location.href=="string"}catch{s=!1}if(s)e=t.contentWindow;else break;t=Nn(e.document)}return t}function $i(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function K_(e){var t=Rc(),s=e.focusedElem,i=e.selectionRange;if(t!==s&&s&&s.ownerDocument&&Mc(s.ownerDocument.documentElement,s)){if(i!==null&&$i(s)){if(t=i.start,e=i.end,e===void 0&&(e=t),"selectionStart"in s)s.selectionStart=t,s.selectionEnd=Math.min(e,s.value.length);else if(e=(t=s.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=s.textContent.length,c=Math.min(i.start,a);i=i.end===void 0?c:Math.min(i.end,a),!e.extend&&c>i&&(a=i,i=c,c=a),a=Ec(s,c);var m=Ec(s,i);a&&m&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==m.node||e.focusOffset!==m.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),c>i?(e.addRange(t),e.extend(m.node,m.offset)):(t.setEnd(m.node,m.offset),e.addRange(t)))}}for(t=[],e=s;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<t.length;s++)e=t[s],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var G_=p&&"documentMode"in document&&11>=document.documentMode,ur=null,Ki=null,as=null,Gi=!1;function Dc(e,t,s){var i=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Gi||ur==null||ur!==Nn(i)||(i=ur,"selectionStart"in i&&$i(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),as&&ls(as,i)||(as=i,i=fo(Ki,"onSelect"),0<i.length&&(t=new Bi("onSelect","select",null,t,s),e.push({event:t,listeners:i}),t.target=ur)))}function ao(e,t){var s={};return s[e.toLowerCase()]=t.toLowerCase(),s["Webkit"+e]="webkit"+t,s["Moz"+e]="moz"+t,s}var cr={animationend:ao("Animation","AnimationEnd"),animationiteration:ao("Animation","AnimationIteration"),animationstart:ao("Animation","AnimationStart"),transitionend:ao("Transition","TransitionEnd")},Zi={},Lc={};p&&(Lc=document.createElement("div").style,"AnimationEvent"in window||(delete cr.animationend.animation,delete cr.animationiteration.animation,delete cr.animationstart.animation),"TransitionEvent"in window||delete cr.transitionend.transition);function uo(e){if(Zi[e])return Zi[e];if(!cr[e])return e;var t=cr[e],s;for(s in t)if(t.hasOwnProperty(s)&&s in Lc)return Zi[e]=t[s];return e}var Ic=uo("animationend"),Ac=uo("animationiteration"),jc=uo("animationstart"),Nc=uo("transitionend"),Vc=new Map,Oc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function hn(e,t){Vc.set(e,t),d(t,[e])}for(var Ji=0;Ji<Oc.length;Ji++){var qi=Oc[Ji],Z_=qi.toLowerCase(),J_=qi[0].toUpperCase()+qi.slice(1);hn(Z_,"on"+J_)}hn(Ic,"onAnimationEnd"),hn(Ac,"onAnimationIteration"),hn(jc,"onAnimationStart"),hn("dblclick","onDoubleClick"),hn("focusin","onFocus"),hn("focusout","onBlur"),hn(Nc,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),d("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),d("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),d("onBeforeInput",["compositionend","keypress","textInput","paste"]),d("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),d("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),d("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var us="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),q_=new Set("cancel close invalid load scroll toggle".split(" ").concat(us));function zc(e,t,s){var i=e.type||"unknown-event";e.currentTarget=s,Zh(i,t,void 0,e),e.currentTarget=null}function Bc(e,t){t=(t&4)!==0;for(var s=0;s<e.length;s++){var i=e[s],a=i.event;i=i.listeners;e:{var c=void 0;if(t)for(var m=i.length-1;0<=m;m--){var v=i[m],w=v.instance,M=v.currentTarget;if(v=v.listener,w!==c&&a.isPropagationStopped())break e;zc(a,v,M),c=w}else for(m=0;m<i.length;m++){if(v=i[m],w=v.instance,M=v.currentTarget,v=v.listener,w!==c&&a.isPropagationStopped())break e;zc(a,v,M),c=w}}}if(Xs)throw e=Ri,Xs=!1,Ri=null,e}function Re(e,t){var s=t[ll];s===void 0&&(s=t[ll]=new Set);var i=e+"__bubble";s.has(i)||(Fc(t,e,2,!1),s.add(i))}function el(e,t,s){var i=0;t&&(i|=4),Fc(s,e,i,t)}var co="_reactListening"+Math.random().toString(36).slice(2);function cs(e){if(!e[co]){e[co]=!0,l.forEach(function(s){s!=="selectionchange"&&(q_.has(s)||el(s,!1,e),el(s,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[co]||(t[co]=!0,el("selectionchange",!1,t))}}function Fc(e,t,s,i){switch(cc(t)){case 1:var a=p_;break;case 4:a=m_;break;default:a=Vi}s=a.bind(null,t,s,e),a=void 0,!Mi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),i?a!==void 0?e.addEventListener(t,s,{capture:!0,passive:a}):e.addEventListener(t,s,!0):a!==void 0?e.addEventListener(t,s,{passive:a}):e.addEventListener(t,s,!1)}function tl(e,t,s,i,a){var c=i;if((t&1)===0&&(t&2)===0&&i!==null)e:for(;;){if(i===null)return;var m=i.tag;if(m===3||m===4){var v=i.stateNode.containerInfo;if(v===a||v.nodeType===8&&v.parentNode===a)break;if(m===4)for(m=i.return;m!==null;){var w=m.tag;if((w===3||w===4)&&(w=m.stateNode.containerInfo,w===a||w.nodeType===8&&w.parentNode===a))return;m=m.return}for(;v!==null;){if(m=Bn(v),m===null)return;if(w=m.tag,w===5||w===6){i=c=m;continue e}v=v.parentNode}}i=i.return}Qu(function(){var M=c,F=Ci(s),U=[];e:{var B=Vc.get(e);if(B!==void 0){var $=Bi,q=e;switch(e){case"keypress":if(so(s)===0)break e;case"keydown":case"keyup":$=M_;break;case"focusin":q="focus",$=Yi;break;case"focusout":q="blur",$=Yi;break;case"beforeblur":case"afterblur":$=Yi;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":$=pc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":$=g_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":$=L_;break;case Ic:case Ac:case jc:$=x_;break;case Nc:$=A_;break;case"scroll":$=h_;break;case"wheel":$=N_;break;case"copy":case"cut":case"paste":$=S_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":$=hc}var te=(t&4)!==0,ze=!te&&e==="scroll",C=te?B!==null?B+"Capture":null:B;te=[];for(var b=M,P;b!==null;){P=b;var Q=P.stateNode;if(P.tag===5&&Q!==null&&(P=Q,C!==null&&(Q=Qr(b,C),Q!=null&&te.push(ds(b,Q,P)))),ze)break;b=b.return}0<te.length&&(B=new $(B,q,null,s,F),U.push({event:B,listeners:te}))}}if((t&7)===0){e:{if(B=e==="mouseover"||e==="pointerover",$=e==="mouseout"||e==="pointerout",B&&s!==Ti&&(q=s.relatedTarget||s.fromElement)&&(Bn(q)||q[Zt]))break e;if(($||B)&&(B=F.window===F?F:(B=F.ownerDocument)?B.defaultView||B.parentWindow:window,$?(q=s.relatedTarget||s.toElement,$=M,q=q?Bn(q):null,q!==null&&(ze=zn(q),q!==ze||q.tag!==5&&q.tag!==6)&&(q=null)):($=null,q=M),$!==q)){if(te=pc,Q="onMouseLeave",C="onMouseEnter",b="mouse",(e==="pointerout"||e==="pointerover")&&(te=hc,Q="onPointerLeave",C="onPointerEnter",b="pointer"),ze=$==null?B:pr($),P=q==null?B:pr(q),B=new te(Q,b+"leave",$,s,F),B.target=ze,B.relatedTarget=P,Q=null,Bn(F)===M&&(te=new te(C,b+"enter",q,s,F),te.target=P,te.relatedTarget=ze,Q=te),ze=Q,$&&q)t:{for(te=$,C=q,b=0,P=te;P;P=dr(P))b++;for(P=0,Q=C;Q;Q=dr(Q))P++;for(;0<b-P;)te=dr(te),b--;for(;0<P-b;)C=dr(C),P--;for(;b--;){if(te===C||C!==null&&te===C.alternate)break t;te=dr(te),C=dr(C)}te=null}else te=null;$!==null&&Uc(U,B,$,te,!1),q!==null&&ze!==null&&Uc(U,ze,q,te,!0)}}e:{if(B=M?pr(M):window,$=B.nodeName&&B.nodeName.toLowerCase(),$==="select"||$==="input"&&B.type==="file")var ne=Y_;else if(wc(B))if(kc)ne=X_;else{ne=H_;var se=W_}else($=B.nodeName)&&$.toLowerCase()==="input"&&(B.type==="checkbox"||B.type==="radio")&&(ne=Q_);if(ne&&(ne=ne(e,M))){Sc(U,ne,s,F);break e}se&&se(e,B,M),e==="focusout"&&(se=B._wrapperState)&&se.controlled&&B.type==="number"&&ln(B,"number",B.value)}switch(se=M?pr(M):window,e){case"focusin":(wc(se)||se.contentEditable==="true")&&(ur=se,Ki=M,as=null);break;case"focusout":as=Ki=ur=null;break;case"mousedown":Gi=!0;break;case"contextmenu":case"mouseup":case"dragend":Gi=!1,Dc(U,s,F);break;case"selectionchange":if(G_)break;case"keydown":case"keyup":Dc(U,s,F)}var oe;if(Hi)e:{switch(e){case"compositionstart":var le="onCompositionStart";break e;case"compositionend":le="onCompositionEnd";break e;case"compositionupdate":le="onCompositionUpdate";break e}le=void 0}else ar?vc(e,s)&&(le="onCompositionEnd"):e==="keydown"&&s.keyCode===229&&(le="onCompositionStart");le&&(_c&&s.locale!=="ko"&&(ar||le!=="onCompositionStart"?le==="onCompositionEnd"&&ar&&(oe=dc()):(mn=F,zi="value"in mn?mn.value:mn.textContent,ar=!0)),se=fo(M,le),0<se.length&&(le=new mc(le,e,null,s,F),U.push({event:le,listeners:se}),oe?le.data=oe:(oe=xc(s),oe!==null&&(le.data=oe)))),(oe=O_?z_(e,s):B_(e,s))&&(M=fo(M,"onBeforeInput"),0<M.length&&(F=new mc("onBeforeInput","beforeinput",null,s,F),U.push({event:F,listeners:M}),F.data=oe))}Bc(U,t)})}function ds(e,t,s){return{instance:e,listener:t,currentTarget:s}}function fo(e,t){for(var s=t+"Capture",i=[];e!==null;){var a=e,c=a.stateNode;a.tag===5&&c!==null&&(a=c,c=Qr(e,s),c!=null&&i.unshift(ds(e,c,a)),c=Qr(e,t),c!=null&&i.push(ds(e,c,a))),e=e.return}return i}function dr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Uc(e,t,s,i,a){for(var c=t._reactName,m=[];s!==null&&s!==i;){var v=s,w=v.alternate,M=v.stateNode;if(w!==null&&w===i)break;v.tag===5&&M!==null&&(v=M,a?(w=Qr(s,c),w!=null&&m.unshift(ds(s,w,v))):a||(w=Qr(s,c),w!=null&&m.push(ds(s,w,v)))),s=s.return}m.length!==0&&e.push({event:t,listeners:m})}var e0=/\r\n?/g,t0=/\u0000|\uFFFD/g;function Yc(e){return(typeof e=="string"?e:""+e).replace(e0,`
`).replace(t0,"")}function po(e,t,s){if(t=Yc(t),Yc(e)!==t&&s)throw Error(o(425))}function mo(){}var nl=null,rl=null;function sl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ol=typeof setTimeout=="function"?setTimeout:void 0,n0=typeof clearTimeout=="function"?clearTimeout:void 0,Wc=typeof Promise=="function"?Promise:void 0,r0=typeof queueMicrotask=="function"?queueMicrotask:typeof Wc<"u"?function(e){return Wc.resolve(null).then(e).catch(s0)}:ol;function s0(e){setTimeout(function(){throw e})}function il(e,t){var s=t,i=0;do{var a=s.nextSibling;if(e.removeChild(s),a&&a.nodeType===8)if(s=a.data,s==="/$"){if(i===0){e.removeChild(a),ts(t);return}i--}else s!=="$"&&s!=="$?"&&s!=="$!"||i++;s=a}while(s);ts(t)}function _n(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Hc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var s=e.data;if(s==="$"||s==="$!"||s==="$?"){if(t===0)return e;t--}else s==="/$"&&t++}e=e.previousSibling}return null}var fr=Math.random().toString(36).slice(2),Yt="__reactFiber$"+fr,fs="__reactProps$"+fr,Zt="__reactContainer$"+fr,ll="__reactEvents$"+fr,o0="__reactListeners$"+fr,i0="__reactHandles$"+fr;function Bn(e){var t=e[Yt];if(t)return t;for(var s=e.parentNode;s;){if(t=s[Zt]||s[Yt]){if(s=t.alternate,t.child!==null||s!==null&&s.child!==null)for(e=Hc(e);e!==null;){if(s=e[Yt])return s;e=Hc(e)}return t}e=s,s=e.parentNode}return null}function ps(e){return e=e[Yt]||e[Zt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function pr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(o(33))}function ho(e){return e[fs]||null}var al=[],mr=-1;function gn(e){return{current:e}}function De(e){0>mr||(e.current=al[mr],al[mr]=null,mr--)}function Me(e,t){mr++,al[mr]=e.current,e.current=t}var yn={},tt=gn(yn),ft=gn(!1),Fn=yn;function hr(e,t){var s=e.type.contextTypes;if(!s)return yn;var i=e.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===t)return i.__reactInternalMemoizedMaskedChildContext;var a={},c;for(c in s)a[c]=t[c];return i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function pt(e){return e=e.childContextTypes,e!=null}function _o(){De(ft),De(tt)}function Qc(e,t,s){if(tt.current!==yn)throw Error(o(168));Me(tt,t),Me(ft,s)}function Xc(e,t,s){var i=e.stateNode;if(t=t.childContextTypes,typeof i.getChildContext!="function")return s;i=i.getChildContext();for(var a in i)if(!(a in t))throw Error(o(108,Te(e)||"Unknown",a));return Y({},s,i)}function go(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||yn,Fn=tt.current,Me(tt,e),Me(ft,ft.current),!0}function $c(e,t,s){var i=e.stateNode;if(!i)throw Error(o(169));s?(e=Xc(e,t,Fn),i.__reactInternalMemoizedMergedChildContext=e,De(ft),De(tt),Me(tt,e)):De(ft),Me(ft,s)}var Jt=null,yo=!1,ul=!1;function Kc(e){Jt===null?Jt=[e]:Jt.push(e)}function l0(e){yo=!0,Kc(e)}function vn(){if(!ul&&Jt!==null){ul=!0;var e=0,t=be;try{var s=Jt;for(be=1;e<s.length;e++){var i=s[e];do i=i(!0);while(i!==null)}Jt=null,yo=!1}catch(a){throw Jt!==null&&(Jt=Jt.slice(e+1)),Zu(Di,vn),a}finally{be=t,ul=!1}}return null}var _r=[],gr=0,vo=null,xo=0,kt=[],bt=0,Un=null,qt=1,en="";function Yn(e,t){_r[gr++]=xo,_r[gr++]=vo,vo=e,xo=t}function Gc(e,t,s){kt[bt++]=qt,kt[bt++]=en,kt[bt++]=Un,Un=e;var i=qt;e=en;var a=32-Dt(i)-1;i&=~(1<<a),s+=1;var c=32-Dt(t)+a;if(30<c){var m=a-a%5;c=(i&(1<<m)-1).toString(32),i>>=m,a-=m,qt=1<<32-Dt(t)+a|s<<a|i,en=c+e}else qt=1<<c|s<<a|i,en=e}function cl(e){e.return!==null&&(Yn(e,1),Gc(e,1,0))}function dl(e){for(;e===vo;)vo=_r[--gr],_r[gr]=null,xo=_r[--gr],_r[gr]=null;for(;e===Un;)Un=kt[--bt],kt[bt]=null,en=kt[--bt],kt[bt]=null,qt=kt[--bt],kt[bt]=null}var xt=null,wt=null,Le=!1,It=null;function Zc(e,t){var s=Et(5,null,null,0);s.elementType="DELETED",s.stateNode=t,s.return=e,t=e.deletions,t===null?(e.deletions=[s],e.flags|=16):t.push(s)}function Jc(e,t){switch(e.tag){case 5:var s=e.type;return t=t.nodeType!==1||s.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,xt=e,wt=_n(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,xt=e,wt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(s=Un!==null?{id:qt,overflow:en}:null,e.memoizedState={dehydrated:t,treeContext:s,retryLane:1073741824},s=Et(18,null,null,0),s.stateNode=t,s.return=e,e.child=s,xt=e,wt=null,!0):!1;default:return!1}}function fl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function pl(e){if(Le){var t=wt;if(t){var s=t;if(!Jc(e,t)){if(fl(e))throw Error(o(418));t=_n(s.nextSibling);var i=xt;t&&Jc(e,t)?Zc(i,s):(e.flags=e.flags&-4097|2,Le=!1,xt=e)}}else{if(fl(e))throw Error(o(418));e.flags=e.flags&-4097|2,Le=!1,xt=e}}}function qc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;xt=e}function wo(e){if(e!==xt)return!1;if(!Le)return qc(e),Le=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!sl(e.type,e.memoizedProps)),t&&(t=wt)){if(fl(e))throw ed(),Error(o(418));for(;t;)Zc(e,t),t=_n(t.nextSibling)}if(qc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var s=e.data;if(s==="/$"){if(t===0){wt=_n(e.nextSibling);break e}t--}else s!=="$"&&s!=="$!"&&s!=="$?"||t++}e=e.nextSibling}wt=null}}else wt=xt?_n(e.stateNode.nextSibling):null;return!0}function ed(){for(var e=wt;e;)e=_n(e.nextSibling)}function yr(){wt=xt=null,Le=!1}function ml(e){It===null?It=[e]:It.push(e)}var a0=O.ReactCurrentBatchConfig;function ms(e,t,s){if(e=s.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(s._owner){if(s=s._owner,s){if(s.tag!==1)throw Error(o(309));var i=s.stateNode}if(!i)throw Error(o(147,e));var a=i,c=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===c?t.ref:(t=function(m){var v=a.refs;m===null?delete v[c]:v[c]=m},t._stringRef=c,t)}if(typeof e!="string")throw Error(o(284));if(!s._owner)throw Error(o(290,e))}return e}function So(e,t){throw e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function td(e){var t=e._init;return t(e._payload)}function nd(e){function t(C,b){if(e){var P=C.deletions;P===null?(C.deletions=[b],C.flags|=16):P.push(b)}}function s(C,b){if(!e)return null;for(;b!==null;)t(C,b),b=b.sibling;return null}function i(C,b){for(C=new Map;b!==null;)b.key!==null?C.set(b.key,b):C.set(b.index,b),b=b.sibling;return C}function a(C,b){return C=Pn(C,b),C.index=0,C.sibling=null,C}function c(C,b,P){return C.index=P,e?(P=C.alternate,P!==null?(P=P.index,P<b?(C.flags|=2,b):P):(C.flags|=2,b)):(C.flags|=1048576,b)}function m(C){return e&&C.alternate===null&&(C.flags|=2),C}function v(C,b,P,Q){return b===null||b.tag!==6?(b=oa(P,C.mode,Q),b.return=C,b):(b=a(b,P),b.return=C,b)}function w(C,b,P,Q){var ne=P.type;return ne===X?F(C,b,P.props.children,Q,P.key):b!==null&&(b.elementType===ne||typeof ne=="object"&&ne!==null&&ne.$$typeof===he&&td(ne)===b.type)?(Q=a(b,P.props),Q.ref=ms(C,b,P),Q.return=C,Q):(Q=Qo(P.type,P.key,P.props,null,C.mode,Q),Q.ref=ms(C,b,P),Q.return=C,Q)}function M(C,b,P,Q){return b===null||b.tag!==4||b.stateNode.containerInfo!==P.containerInfo||b.stateNode.implementation!==P.implementation?(b=ia(P,C.mode,Q),b.return=C,b):(b=a(b,P.children||[]),b.return=C,b)}function F(C,b,P,Q,ne){return b===null||b.tag!==7?(b=Zn(P,C.mode,Q,ne),b.return=C,b):(b=a(b,P),b.return=C,b)}function U(C,b,P){if(typeof b=="string"&&b!==""||typeof b=="number")return b=oa(""+b,C.mode,P),b.return=C,b;if(typeof b=="object"&&b!==null){switch(b.$$typeof){case W:return P=Qo(b.type,b.key,b.props,null,C.mode,P),P.ref=ms(C,null,b),P.return=C,P;case Z:return b=ia(b,C.mode,P),b.return=C,b;case he:var Q=b._init;return U(C,Q(b._payload),P)}if(an(b)||V(b))return b=Zn(b,C.mode,P,null),b.return=C,b;So(C,b)}return null}function B(C,b,P,Q){var ne=b!==null?b.key:null;if(typeof P=="string"&&P!==""||typeof P=="number")return ne!==null?null:v(C,b,""+P,Q);if(typeof P=="object"&&P!==null){switch(P.$$typeof){case W:return P.key===ne?w(C,b,P,Q):null;case Z:return P.key===ne?M(C,b,P,Q):null;case he:return ne=P._init,B(C,b,ne(P._payload),Q)}if(an(P)||V(P))return ne!==null?null:F(C,b,P,Q,null);So(C,P)}return null}function $(C,b,P,Q,ne){if(typeof Q=="string"&&Q!==""||typeof Q=="number")return C=C.get(P)||null,v(b,C,""+Q,ne);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case W:return C=C.get(Q.key===null?P:Q.key)||null,w(b,C,Q,ne);case Z:return C=C.get(Q.key===null?P:Q.key)||null,M(b,C,Q,ne);case he:var se=Q._init;return $(C,b,P,se(Q._payload),ne)}if(an(Q)||V(Q))return C=C.get(P)||null,F(b,C,Q,ne,null);So(b,Q)}return null}function q(C,b,P,Q){for(var ne=null,se=null,oe=b,le=b=0,$e=null;oe!==null&&le<P.length;le++){oe.index>le?($e=oe,oe=null):$e=oe.sibling;var we=B(C,oe,P[le],Q);if(we===null){oe===null&&(oe=$e);break}e&&oe&&we.alternate===null&&t(C,oe),b=c(we,b,le),se===null?ne=we:se.sibling=we,se=we,oe=$e}if(le===P.length)return s(C,oe),Le&&Yn(C,le),ne;if(oe===null){for(;le<P.length;le++)oe=U(C,P[le],Q),oe!==null&&(b=c(oe,b,le),se===null?ne=oe:se.sibling=oe,se=oe);return Le&&Yn(C,le),ne}for(oe=i(C,oe);le<P.length;le++)$e=$(oe,C,le,P[le],Q),$e!==null&&(e&&$e.alternate!==null&&oe.delete($e.key===null?le:$e.key),b=c($e,b,le),se===null?ne=$e:se.sibling=$e,se=$e);return e&&oe.forEach(function(En){return t(C,En)}),Le&&Yn(C,le),ne}function te(C,b,P,Q){var ne=V(P);if(typeof ne!="function")throw Error(o(150));if(P=ne.call(P),P==null)throw Error(o(151));for(var se=ne=null,oe=b,le=b=0,$e=null,we=P.next();oe!==null&&!we.done;le++,we=P.next()){oe.index>le?($e=oe,oe=null):$e=oe.sibling;var En=B(C,oe,we.value,Q);if(En===null){oe===null&&(oe=$e);break}e&&oe&&En.alternate===null&&t(C,oe),b=c(En,b,le),se===null?ne=En:se.sibling=En,se=En,oe=$e}if(we.done)return s(C,oe),Le&&Yn(C,le),ne;if(oe===null){for(;!we.done;le++,we=P.next())we=U(C,we.value,Q),we!==null&&(b=c(we,b,le),se===null?ne=we:se.sibling=we,se=we);return Le&&Yn(C,le),ne}for(oe=i(C,oe);!we.done;le++,we=P.next())we=$(oe,C,le,we.value,Q),we!==null&&(e&&we.alternate!==null&&oe.delete(we.key===null?le:we.key),b=c(we,b,le),se===null?ne=we:se.sibling=we,se=we);return e&&oe.forEach(function(F0){return t(C,F0)}),Le&&Yn(C,le),ne}function ze(C,b,P,Q){if(typeof P=="object"&&P!==null&&P.type===X&&P.key===null&&(P=P.props.children),typeof P=="object"&&P!==null){switch(P.$$typeof){case W:e:{for(var ne=P.key,se=b;se!==null;){if(se.key===ne){if(ne=P.type,ne===X){if(se.tag===7){s(C,se.sibling),b=a(se,P.props.children),b.return=C,C=b;break e}}else if(se.elementType===ne||typeof ne=="object"&&ne!==null&&ne.$$typeof===he&&td(ne)===se.type){s(C,se.sibling),b=a(se,P.props),b.ref=ms(C,se,P),b.return=C,C=b;break e}s(C,se);break}else t(C,se);se=se.sibling}P.type===X?(b=Zn(P.props.children,C.mode,Q,P.key),b.return=C,C=b):(Q=Qo(P.type,P.key,P.props,null,C.mode,Q),Q.ref=ms(C,b,P),Q.return=C,C=Q)}return m(C);case Z:e:{for(se=P.key;b!==null;){if(b.key===se)if(b.tag===4&&b.stateNode.containerInfo===P.containerInfo&&b.stateNode.implementation===P.implementation){s(C,b.sibling),b=a(b,P.children||[]),b.return=C,C=b;break e}else{s(C,b);break}else t(C,b);b=b.sibling}b=ia(P,C.mode,Q),b.return=C,C=b}return m(C);case he:return se=P._init,ze(C,b,se(P._payload),Q)}if(an(P))return q(C,b,P,Q);if(V(P))return te(C,b,P,Q);So(C,P)}return typeof P=="string"&&P!==""||typeof P=="number"?(P=""+P,b!==null&&b.tag===6?(s(C,b.sibling),b=a(b,P),b.return=C,C=b):(s(C,b),b=oa(P,C.mode,Q),b.return=C,C=b),m(C)):s(C,b)}return ze}var vr=nd(!0),rd=nd(!1),ko=gn(null),bo=null,xr=null,hl=null;function _l(){hl=xr=bo=null}function gl(e){var t=ko.current;De(ko),e._currentValue=t}function yl(e,t,s){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===s)break;e=e.return}}function wr(e,t){bo=e,hl=xr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(mt=!0),e.firstContext=null)}function Tt(e){var t=e._currentValue;if(hl!==e)if(e={context:e,memoizedValue:t,next:null},xr===null){if(bo===null)throw Error(o(308));xr=e,bo.dependencies={lanes:0,firstContext:e}}else xr=xr.next=e;return t}var Wn=null;function vl(e){Wn===null?Wn=[e]:Wn.push(e)}function sd(e,t,s,i){var a=t.interleaved;return a===null?(s.next=s,vl(t)):(s.next=a.next,a.next=s),t.interleaved=s,tn(e,i)}function tn(e,t){e.lanes|=t;var s=e.alternate;for(s!==null&&(s.lanes|=t),s=e,e=e.return;e!==null;)e.childLanes|=t,s=e.alternate,s!==null&&(s.childLanes|=t),s=e,e=e.return;return s.tag===3?s.stateNode:null}var xn=!1;function xl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function od(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function nn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function wn(e,t,s){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(xe&2)!==0){var a=i.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),i.pending=t,tn(e,s)}return a=i.interleaved,a===null?(t.next=t,vl(i)):(t.next=a.next,a.next=t),i.interleaved=t,tn(e,s)}function To(e,t,s){if(t=t.updateQueue,t!==null&&(t=t.shared,(s&4194240)!==0)){var i=t.lanes;i&=e.pendingLanes,s|=i,t.lanes=s,Ai(e,s)}}function id(e,t){var s=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,s===i)){var a=null,c=null;if(s=s.firstBaseUpdate,s!==null){do{var m={eventTime:s.eventTime,lane:s.lane,tag:s.tag,payload:s.payload,callback:s.callback,next:null};c===null?a=c=m:c=c.next=m,s=s.next}while(s!==null);c===null?a=c=t:c=c.next=t}else a=c=t;s={baseState:i.baseState,firstBaseUpdate:a,lastBaseUpdate:c,shared:i.shared,effects:i.effects},e.updateQueue=s;return}e=s.lastBaseUpdate,e===null?s.firstBaseUpdate=t:e.next=t,s.lastBaseUpdate=t}function Co(e,t,s,i){var a=e.updateQueue;xn=!1;var c=a.firstBaseUpdate,m=a.lastBaseUpdate,v=a.shared.pending;if(v!==null){a.shared.pending=null;var w=v,M=w.next;w.next=null,m===null?c=M:m.next=M,m=w;var F=e.alternate;F!==null&&(F=F.updateQueue,v=F.lastBaseUpdate,v!==m&&(v===null?F.firstBaseUpdate=M:v.next=M,F.lastBaseUpdate=w))}if(c!==null){var U=a.baseState;m=0,F=M=w=null,v=c;do{var B=v.lane,$=v.eventTime;if((i&B)===B){F!==null&&(F=F.next={eventTime:$,lane:0,tag:v.tag,payload:v.payload,callback:v.callback,next:null});e:{var q=e,te=v;switch(B=t,$=s,te.tag){case 1:if(q=te.payload,typeof q=="function"){U=q.call($,U,B);break e}U=q;break e;case 3:q.flags=q.flags&-65537|128;case 0:if(q=te.payload,B=typeof q=="function"?q.call($,U,B):q,B==null)break e;U=Y({},U,B);break e;case 2:xn=!0}}v.callback!==null&&v.lane!==0&&(e.flags|=64,B=a.effects,B===null?a.effects=[v]:B.push(v))}else $={eventTime:$,lane:B,tag:v.tag,payload:v.payload,callback:v.callback,next:null},F===null?(M=F=$,w=U):F=F.next=$,m|=B;if(v=v.next,v===null){if(v=a.shared.pending,v===null)break;B=v,v=B.next,B.next=null,a.lastBaseUpdate=B,a.shared.pending=null}}while(!0);if(F===null&&(w=U),a.baseState=w,a.firstBaseUpdate=M,a.lastBaseUpdate=F,t=a.shared.interleaved,t!==null){a=t;do m|=a.lane,a=a.next;while(a!==t)}else c===null&&(a.shared.lanes=0);Xn|=m,e.lanes=m,e.memoizedState=U}}function ld(e,t,s){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var i=e[t],a=i.callback;if(a!==null){if(i.callback=null,i=s,typeof a!="function")throw Error(o(191,a));a.call(i)}}}var hs={},Wt=gn(hs),_s=gn(hs),gs=gn(hs);function Hn(e){if(e===hs)throw Error(o(174));return e}function wl(e,t){switch(Me(gs,t),Me(_s,e),Me(Wt,hs),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:dt(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=dt(t,e)}De(Wt),Me(Wt,t)}function Sr(){De(Wt),De(_s),De(gs)}function ad(e){Hn(gs.current);var t=Hn(Wt.current),s=dt(t,e.type);t!==s&&(Me(_s,e),Me(Wt,s))}function Sl(e){_s.current===e&&(De(Wt),De(_s))}var Ie=gn(0);function Po(e){for(var t=e;t!==null;){if(t.tag===13){var s=t.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||s.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var kl=[];function bl(){for(var e=0;e<kl.length;e++)kl[e]._workInProgressVersionPrimary=null;kl.length=0}var Eo=O.ReactCurrentDispatcher,Tl=O.ReactCurrentBatchConfig,Qn=0,Ae=null,Ye=null,Qe=null,Mo=!1,ys=!1,vs=0,u0=0;function nt(){throw Error(o(321))}function Cl(e,t){if(t===null)return!1;for(var s=0;s<t.length&&s<e.length;s++)if(!Lt(e[s],t[s]))return!1;return!0}function Pl(e,t,s,i,a,c){if(Qn=c,Ae=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Eo.current=e===null||e.memoizedState===null?p0:m0,e=s(i,a),ys){c=0;do{if(ys=!1,vs=0,25<=c)throw Error(o(301));c+=1,Qe=Ye=null,t.updateQueue=null,Eo.current=h0,e=s(i,a)}while(ys)}if(Eo.current=Lo,t=Ye!==null&&Ye.next!==null,Qn=0,Qe=Ye=Ae=null,Mo=!1,t)throw Error(o(300));return e}function El(){var e=vs!==0;return vs=0,e}function Ht(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Qe===null?Ae.memoizedState=Qe=e:Qe=Qe.next=e,Qe}function Ct(){if(Ye===null){var e=Ae.alternate;e=e!==null?e.memoizedState:null}else e=Ye.next;var t=Qe===null?Ae.memoizedState:Qe.next;if(t!==null)Qe=t,Ye=e;else{if(e===null)throw Error(o(310));Ye=e,e={memoizedState:Ye.memoizedState,baseState:Ye.baseState,baseQueue:Ye.baseQueue,queue:Ye.queue,next:null},Qe===null?Ae.memoizedState=Qe=e:Qe=Qe.next=e}return Qe}function xs(e,t){return typeof t=="function"?t(e):t}function Ml(e){var t=Ct(),s=t.queue;if(s===null)throw Error(o(311));s.lastRenderedReducer=e;var i=Ye,a=i.baseQueue,c=s.pending;if(c!==null){if(a!==null){var m=a.next;a.next=c.next,c.next=m}i.baseQueue=a=c,s.pending=null}if(a!==null){c=a.next,i=i.baseState;var v=m=null,w=null,M=c;do{var F=M.lane;if((Qn&F)===F)w!==null&&(w=w.next={lane:0,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null}),i=M.hasEagerState?M.eagerState:e(i,M.action);else{var U={lane:F,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null};w===null?(v=w=U,m=i):w=w.next=U,Ae.lanes|=F,Xn|=F}M=M.next}while(M!==null&&M!==c);w===null?m=i:w.next=v,Lt(i,t.memoizedState)||(mt=!0),t.memoizedState=i,t.baseState=m,t.baseQueue=w,s.lastRenderedState=i}if(e=s.interleaved,e!==null){a=e;do c=a.lane,Ae.lanes|=c,Xn|=c,a=a.next;while(a!==e)}else a===null&&(s.lanes=0);return[t.memoizedState,s.dispatch]}function Rl(e){var t=Ct(),s=t.queue;if(s===null)throw Error(o(311));s.lastRenderedReducer=e;var i=s.dispatch,a=s.pending,c=t.memoizedState;if(a!==null){s.pending=null;var m=a=a.next;do c=e(c,m.action),m=m.next;while(m!==a);Lt(c,t.memoizedState)||(mt=!0),t.memoizedState=c,t.baseQueue===null&&(t.baseState=c),s.lastRenderedState=c}return[c,i]}function ud(){}function cd(e,t){var s=Ae,i=Ct(),a=t(),c=!Lt(i.memoizedState,a);if(c&&(i.memoizedState=a,mt=!0),i=i.queue,Dl(pd.bind(null,s,i,e),[e]),i.getSnapshot!==t||c||Qe!==null&&Qe.memoizedState.tag&1){if(s.flags|=2048,ws(9,fd.bind(null,s,i,a,t),void 0,null),Xe===null)throw Error(o(349));(Qn&30)!==0||dd(s,t,a)}return a}function dd(e,t,s){e.flags|=16384,e={getSnapshot:t,value:s},t=Ae.updateQueue,t===null?(t={lastEffect:null,stores:null},Ae.updateQueue=t,t.stores=[e]):(s=t.stores,s===null?t.stores=[e]:s.push(e))}function fd(e,t,s,i){t.value=s,t.getSnapshot=i,md(t)&&hd(e)}function pd(e,t,s){return s(function(){md(t)&&hd(e)})}function md(e){var t=e.getSnapshot;e=e.value;try{var s=t();return!Lt(e,s)}catch{return!0}}function hd(e){var t=tn(e,1);t!==null&&Vt(t,e,1,-1)}function _d(e){var t=Ht();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:xs,lastRenderedState:e},t.queue=e,e=e.dispatch=f0.bind(null,Ae,e),[t.memoizedState,e]}function ws(e,t,s,i){return e={tag:e,create:t,destroy:s,deps:i,next:null},t=Ae.updateQueue,t===null?(t={lastEffect:null,stores:null},Ae.updateQueue=t,t.lastEffect=e.next=e):(s=t.lastEffect,s===null?t.lastEffect=e.next=e:(i=s.next,s.next=e,e.next=i,t.lastEffect=e)),e}function gd(){return Ct().memoizedState}function Ro(e,t,s,i){var a=Ht();Ae.flags|=e,a.memoizedState=ws(1|t,s,void 0,i===void 0?null:i)}function Do(e,t,s,i){var a=Ct();i=i===void 0?null:i;var c=void 0;if(Ye!==null){var m=Ye.memoizedState;if(c=m.destroy,i!==null&&Cl(i,m.deps)){a.memoizedState=ws(t,s,c,i);return}}Ae.flags|=e,a.memoizedState=ws(1|t,s,c,i)}function yd(e,t){return Ro(8390656,8,e,t)}function Dl(e,t){return Do(2048,8,e,t)}function vd(e,t){return Do(4,2,e,t)}function xd(e,t){return Do(4,4,e,t)}function wd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Sd(e,t,s){return s=s!=null?s.concat([e]):null,Do(4,4,wd.bind(null,t,e),s)}function Ll(){}function kd(e,t){var s=Ct();t=t===void 0?null:t;var i=s.memoizedState;return i!==null&&t!==null&&Cl(t,i[1])?i[0]:(s.memoizedState=[e,t],e)}function bd(e,t){var s=Ct();t=t===void 0?null:t;var i=s.memoizedState;return i!==null&&t!==null&&Cl(t,i[1])?i[0]:(e=e(),s.memoizedState=[e,t],e)}function Td(e,t,s){return(Qn&21)===0?(e.baseState&&(e.baseState=!1,mt=!0),e.memoizedState=s):(Lt(s,t)||(s=tc(),Ae.lanes|=s,Xn|=s,e.baseState=!0),t)}function c0(e,t){var s=be;be=s!==0&&4>s?s:4,e(!0);var i=Tl.transition;Tl.transition={};try{e(!1),t()}finally{be=s,Tl.transition=i}}function Cd(){return Ct().memoizedState}function d0(e,t,s){var i=Tn(e);if(s={lane:i,action:s,hasEagerState:!1,eagerState:null,next:null},Pd(e))Ed(t,s);else if(s=sd(e,t,s,i),s!==null){var a=at();Vt(s,e,i,a),Md(s,t,i)}}function f0(e,t,s){var i=Tn(e),a={lane:i,action:s,hasEagerState:!1,eagerState:null,next:null};if(Pd(e))Ed(t,a);else{var c=e.alternate;if(e.lanes===0&&(c===null||c.lanes===0)&&(c=t.lastRenderedReducer,c!==null))try{var m=t.lastRenderedState,v=c(m,s);if(a.hasEagerState=!0,a.eagerState=v,Lt(v,m)){var w=t.interleaved;w===null?(a.next=a,vl(t)):(a.next=w.next,w.next=a),t.interleaved=a;return}}catch{}finally{}s=sd(e,t,a,i),s!==null&&(a=at(),Vt(s,e,i,a),Md(s,t,i))}}function Pd(e){var t=e.alternate;return e===Ae||t!==null&&t===Ae}function Ed(e,t){ys=Mo=!0;var s=e.pending;s===null?t.next=t:(t.next=s.next,s.next=t),e.pending=t}function Md(e,t,s){if((s&4194240)!==0){var i=t.lanes;i&=e.pendingLanes,s|=i,t.lanes=s,Ai(e,s)}}var Lo={readContext:Tt,useCallback:nt,useContext:nt,useEffect:nt,useImperativeHandle:nt,useInsertionEffect:nt,useLayoutEffect:nt,useMemo:nt,useReducer:nt,useRef:nt,useState:nt,useDebugValue:nt,useDeferredValue:nt,useTransition:nt,useMutableSource:nt,useSyncExternalStore:nt,useId:nt,unstable_isNewReconciler:!1},p0={readContext:Tt,useCallback:function(e,t){return Ht().memoizedState=[e,t===void 0?null:t],e},useContext:Tt,useEffect:yd,useImperativeHandle:function(e,t,s){return s=s!=null?s.concat([e]):null,Ro(4194308,4,wd.bind(null,t,e),s)},useLayoutEffect:function(e,t){return Ro(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ro(4,2,e,t)},useMemo:function(e,t){var s=Ht();return t=t===void 0?null:t,e=e(),s.memoizedState=[e,t],e},useReducer:function(e,t,s){var i=Ht();return t=s!==void 0?s(t):t,i.memoizedState=i.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},i.queue=e,e=e.dispatch=d0.bind(null,Ae,e),[i.memoizedState,e]},useRef:function(e){var t=Ht();return e={current:e},t.memoizedState=e},useState:_d,useDebugValue:Ll,useDeferredValue:function(e){return Ht().memoizedState=e},useTransition:function(){var e=_d(!1),t=e[0];return e=c0.bind(null,e[1]),Ht().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,s){var i=Ae,a=Ht();if(Le){if(s===void 0)throw Error(o(407));s=s()}else{if(s=t(),Xe===null)throw Error(o(349));(Qn&30)!==0||dd(i,t,s)}a.memoizedState=s;var c={value:s,getSnapshot:t};return a.queue=c,yd(pd.bind(null,i,c,e),[e]),i.flags|=2048,ws(9,fd.bind(null,i,c,s,t),void 0,null),s},useId:function(){var e=Ht(),t=Xe.identifierPrefix;if(Le){var s=en,i=qt;s=(i&~(1<<32-Dt(i)-1)).toString(32)+s,t=":"+t+"R"+s,s=vs++,0<s&&(t+="H"+s.toString(32)),t+=":"}else s=u0++,t=":"+t+"r"+s.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},m0={readContext:Tt,useCallback:kd,useContext:Tt,useEffect:Dl,useImperativeHandle:Sd,useInsertionEffect:vd,useLayoutEffect:xd,useMemo:bd,useReducer:Ml,useRef:gd,useState:function(){return Ml(xs)},useDebugValue:Ll,useDeferredValue:function(e){var t=Ct();return Td(t,Ye.memoizedState,e)},useTransition:function(){var e=Ml(xs)[0],t=Ct().memoizedState;return[e,t]},useMutableSource:ud,useSyncExternalStore:cd,useId:Cd,unstable_isNewReconciler:!1},h0={readContext:Tt,useCallback:kd,useContext:Tt,useEffect:Dl,useImperativeHandle:Sd,useInsertionEffect:vd,useLayoutEffect:xd,useMemo:bd,useReducer:Rl,useRef:gd,useState:function(){return Rl(xs)},useDebugValue:Ll,useDeferredValue:function(e){var t=Ct();return Ye===null?t.memoizedState=e:Td(t,Ye.memoizedState,e)},useTransition:function(){var e=Rl(xs)[0],t=Ct().memoizedState;return[e,t]},useMutableSource:ud,useSyncExternalStore:cd,useId:Cd,unstable_isNewReconciler:!1};function At(e,t){if(e&&e.defaultProps){t=Y({},t),e=e.defaultProps;for(var s in e)t[s]===void 0&&(t[s]=e[s]);return t}return t}function Il(e,t,s,i){t=e.memoizedState,s=s(i,t),s=s==null?t:Y({},t,s),e.memoizedState=s,e.lanes===0&&(e.updateQueue.baseState=s)}var Io={isMounted:function(e){return(e=e._reactInternals)?zn(e)===e:!1},enqueueSetState:function(e,t,s){e=e._reactInternals;var i=at(),a=Tn(e),c=nn(i,a);c.payload=t,s!=null&&(c.callback=s),t=wn(e,c,a),t!==null&&(Vt(t,e,a,i),To(t,e,a))},enqueueReplaceState:function(e,t,s){e=e._reactInternals;var i=at(),a=Tn(e),c=nn(i,a);c.tag=1,c.payload=t,s!=null&&(c.callback=s),t=wn(e,c,a),t!==null&&(Vt(t,e,a,i),To(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var s=at(),i=Tn(e),a=nn(s,i);a.tag=2,t!=null&&(a.callback=t),t=wn(e,a,i),t!==null&&(Vt(t,e,i,s),To(t,e,i))}};function Rd(e,t,s,i,a,c,m){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,c,m):t.prototype&&t.prototype.isPureReactComponent?!ls(s,i)||!ls(a,c):!0}function Dd(e,t,s){var i=!1,a=yn,c=t.contextType;return typeof c=="object"&&c!==null?c=Tt(c):(a=pt(t)?Fn:tt.current,i=t.contextTypes,c=(i=i!=null)?hr(e,a):yn),t=new t(s,c),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Io,e.stateNode=t,t._reactInternals=e,i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=c),t}function Ld(e,t,s,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(s,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(s,i),t.state!==e&&Io.enqueueReplaceState(t,t.state,null)}function Al(e,t,s,i){var a=e.stateNode;a.props=s,a.state=e.memoizedState,a.refs={},xl(e);var c=t.contextType;typeof c=="object"&&c!==null?a.context=Tt(c):(c=pt(t)?Fn:tt.current,a.context=hr(e,c)),a.state=e.memoizedState,c=t.getDerivedStateFromProps,typeof c=="function"&&(Il(e,t,c,s),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&Io.enqueueReplaceState(a,a.state,null),Co(e,s,a,i),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function kr(e,t){try{var s="",i=t;do s+=ve(i),i=i.return;while(i);var a=s}catch(c){a=`
Error generating stack: `+c.message+`
`+c.stack}return{value:e,source:t,stack:a,digest:null}}function jl(e,t,s){return{value:e,source:null,stack:s??null,digest:t??null}}function Nl(e,t){try{console.error(t.value)}catch(s){setTimeout(function(){throw s})}}var _0=typeof WeakMap=="function"?WeakMap:Map;function Id(e,t,s){s=nn(-1,s),s.tag=3,s.payload={element:null};var i=t.value;return s.callback=function(){Bo||(Bo=!0,Zl=i),Nl(e,t)},s}function Ad(e,t,s){s=nn(-1,s),s.tag=3;var i=e.type.getDerivedStateFromError;if(typeof i=="function"){var a=t.value;s.payload=function(){return i(a)},s.callback=function(){Nl(e,t)}}var c=e.stateNode;return c!==null&&typeof c.componentDidCatch=="function"&&(s.callback=function(){Nl(e,t),typeof i!="function"&&(kn===null?kn=new Set([this]):kn.add(this));var m=t.stack;this.componentDidCatch(t.value,{componentStack:m!==null?m:""})}),s}function jd(e,t,s){var i=e.pingCache;if(i===null){i=e.pingCache=new _0;var a=new Set;i.set(t,a)}else a=i.get(t),a===void 0&&(a=new Set,i.set(t,a));a.has(s)||(a.add(s),e=R0.bind(null,e,t,s),t.then(e,e))}function Nd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Vd(e,t,s,i,a){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,s.flags|=131072,s.flags&=-52805,s.tag===1&&(s.alternate===null?s.tag=17:(t=nn(-1,1),t.tag=2,wn(s,t,1))),s.lanes|=1),e):(e.flags|=65536,e.lanes=a,e)}var g0=O.ReactCurrentOwner,mt=!1;function lt(e,t,s,i){t.child=e===null?rd(t,null,s,i):vr(t,e.child,s,i)}function Od(e,t,s,i,a){s=s.render;var c=t.ref;return wr(t,a),i=Pl(e,t,s,i,c,a),s=El(),e!==null&&!mt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,rn(e,t,a)):(Le&&s&&cl(t),t.flags|=1,lt(e,t,i,a),t.child)}function zd(e,t,s,i,a){if(e===null){var c=s.type;return typeof c=="function"&&!sa(c)&&c.defaultProps===void 0&&s.compare===null&&s.defaultProps===void 0?(t.tag=15,t.type=c,Bd(e,t,c,i,a)):(e=Qo(s.type,null,i,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(c=e.child,(e.lanes&a)===0){var m=c.memoizedProps;if(s=s.compare,s=s!==null?s:ls,s(m,i)&&e.ref===t.ref)return rn(e,t,a)}return t.flags|=1,e=Pn(c,i),e.ref=t.ref,e.return=t,t.child=e}function Bd(e,t,s,i,a){if(e!==null){var c=e.memoizedProps;if(ls(c,i)&&e.ref===t.ref)if(mt=!1,t.pendingProps=i=c,(e.lanes&a)!==0)(e.flags&131072)!==0&&(mt=!0);else return t.lanes=e.lanes,rn(e,t,a)}return Vl(e,t,s,i,a)}function Fd(e,t,s){var i=t.pendingProps,a=i.children,c=e!==null?e.memoizedState:null;if(i.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Me(Tr,St),St|=s;else{if((s&1073741824)===0)return e=c!==null?c.baseLanes|s:s,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Me(Tr,St),St|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=c!==null?c.baseLanes:s,Me(Tr,St),St|=i}else c!==null?(i=c.baseLanes|s,t.memoizedState=null):i=s,Me(Tr,St),St|=i;return lt(e,t,a,s),t.child}function Ud(e,t){var s=t.ref;(e===null&&s!==null||e!==null&&e.ref!==s)&&(t.flags|=512,t.flags|=2097152)}function Vl(e,t,s,i,a){var c=pt(s)?Fn:tt.current;return c=hr(t,c),wr(t,a),s=Pl(e,t,s,i,c,a),i=El(),e!==null&&!mt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,rn(e,t,a)):(Le&&i&&cl(t),t.flags|=1,lt(e,t,s,a),t.child)}function Yd(e,t,s,i,a){if(pt(s)){var c=!0;go(t)}else c=!1;if(wr(t,a),t.stateNode===null)jo(e,t),Dd(t,s,i),Al(t,s,i,a),i=!0;else if(e===null){var m=t.stateNode,v=t.memoizedProps;m.props=v;var w=m.context,M=s.contextType;typeof M=="object"&&M!==null?M=Tt(M):(M=pt(s)?Fn:tt.current,M=hr(t,M));var F=s.getDerivedStateFromProps,U=typeof F=="function"||typeof m.getSnapshotBeforeUpdate=="function";U||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(v!==i||w!==M)&&Ld(t,m,i,M),xn=!1;var B=t.memoizedState;m.state=B,Co(t,i,m,a),w=t.memoizedState,v!==i||B!==w||ft.current||xn?(typeof F=="function"&&(Il(t,s,F,i),w=t.memoizedState),(v=xn||Rd(t,s,v,i,B,w,M))?(U||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(t.flags|=4194308)):(typeof m.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=w),m.props=i,m.state=w,m.context=M,i=v):(typeof m.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{m=t.stateNode,od(e,t),v=t.memoizedProps,M=t.type===t.elementType?v:At(t.type,v),m.props=M,U=t.pendingProps,B=m.context,w=s.contextType,typeof w=="object"&&w!==null?w=Tt(w):(w=pt(s)?Fn:tt.current,w=hr(t,w));var $=s.getDerivedStateFromProps;(F=typeof $=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(v!==U||B!==w)&&Ld(t,m,i,w),xn=!1,B=t.memoizedState,m.state=B,Co(t,i,m,a);var q=t.memoizedState;v!==U||B!==q||ft.current||xn?(typeof $=="function"&&(Il(t,s,$,i),q=t.memoizedState),(M=xn||Rd(t,s,M,i,B,q,w)||!1)?(F||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(i,q,w),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(i,q,w)),typeof m.componentDidUpdate=="function"&&(t.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof m.componentDidUpdate!="function"||v===e.memoizedProps&&B===e.memoizedState||(t.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&B===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=q),m.props=i,m.state=q,m.context=w,i=M):(typeof m.componentDidUpdate!="function"||v===e.memoizedProps&&B===e.memoizedState||(t.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&B===e.memoizedState||(t.flags|=1024),i=!1)}return Ol(e,t,s,i,c,a)}function Ol(e,t,s,i,a,c){Ud(e,t);var m=(t.flags&128)!==0;if(!i&&!m)return a&&$c(t,s,!1),rn(e,t,c);i=t.stateNode,g0.current=t;var v=m&&typeof s.getDerivedStateFromError!="function"?null:i.render();return t.flags|=1,e!==null&&m?(t.child=vr(t,e.child,null,c),t.child=vr(t,null,v,c)):lt(e,t,v,c),t.memoizedState=i.state,a&&$c(t,s,!0),t.child}function Wd(e){var t=e.stateNode;t.pendingContext?Qc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Qc(e,t.context,!1),wl(e,t.containerInfo)}function Hd(e,t,s,i,a){return yr(),ml(a),t.flags|=256,lt(e,t,s,i),t.child}var zl={dehydrated:null,treeContext:null,retryLane:0};function Bl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Qd(e,t,s){var i=t.pendingProps,a=Ie.current,c=!1,m=(t.flags&128)!==0,v;if((v=m)||(v=e!==null&&e.memoizedState===null?!1:(a&2)!==0),v?(c=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),Me(Ie,a&1),e===null)return pl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(m=i.children,e=i.fallback,c?(i=t.mode,c=t.child,m={mode:"hidden",children:m},(i&1)===0&&c!==null?(c.childLanes=0,c.pendingProps=m):c=Xo(m,i,0,null),e=Zn(e,i,s,null),c.return=t,e.return=t,c.sibling=e,t.child=c,t.child.memoizedState=Bl(s),t.memoizedState=zl,e):Fl(t,m));if(a=e.memoizedState,a!==null&&(v=a.dehydrated,v!==null))return y0(e,t,m,i,v,a,s);if(c){c=i.fallback,m=t.mode,a=e.child,v=a.sibling;var w={mode:"hidden",children:i.children};return(m&1)===0&&t.child!==a?(i=t.child,i.childLanes=0,i.pendingProps=w,t.deletions=null):(i=Pn(a,w),i.subtreeFlags=a.subtreeFlags&14680064),v!==null?c=Pn(v,c):(c=Zn(c,m,s,null),c.flags|=2),c.return=t,i.return=t,i.sibling=c,t.child=i,i=c,c=t.child,m=e.child.memoizedState,m=m===null?Bl(s):{baseLanes:m.baseLanes|s,cachePool:null,transitions:m.transitions},c.memoizedState=m,c.childLanes=e.childLanes&~s,t.memoizedState=zl,i}return c=e.child,e=c.sibling,i=Pn(c,{mode:"visible",children:i.children}),(t.mode&1)===0&&(i.lanes=s),i.return=t,i.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=i,t.memoizedState=null,i}function Fl(e,t){return t=Xo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ao(e,t,s,i){return i!==null&&ml(i),vr(t,e.child,null,s),e=Fl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function y0(e,t,s,i,a,c,m){if(s)return t.flags&256?(t.flags&=-257,i=jl(Error(o(422))),Ao(e,t,m,i)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(c=i.fallback,a=t.mode,i=Xo({mode:"visible",children:i.children},a,0,null),c=Zn(c,a,m,null),c.flags|=2,i.return=t,c.return=t,i.sibling=c,t.child=i,(t.mode&1)!==0&&vr(t,e.child,null,m),t.child.memoizedState=Bl(m),t.memoizedState=zl,c);if((t.mode&1)===0)return Ao(e,t,m,null);if(a.data==="$!"){if(i=a.nextSibling&&a.nextSibling.dataset,i)var v=i.dgst;return i=v,c=Error(o(419)),i=jl(c,i,void 0),Ao(e,t,m,i)}if(v=(m&e.childLanes)!==0,mt||v){if(i=Xe,i!==null){switch(m&-m){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=(a&(i.suspendedLanes|m))!==0?0:a,a!==0&&a!==c.retryLane&&(c.retryLane=a,tn(e,a),Vt(i,e,a,-1))}return ra(),i=jl(Error(o(421))),Ao(e,t,m,i)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=D0.bind(null,e),a._reactRetry=t,null):(e=c.treeContext,wt=_n(a.nextSibling),xt=t,Le=!0,It=null,e!==null&&(kt[bt++]=qt,kt[bt++]=en,kt[bt++]=Un,qt=e.id,en=e.overflow,Un=t),t=Fl(t,i.children),t.flags|=4096,t)}function Xd(e,t,s){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),yl(e.return,t,s)}function Ul(e,t,s,i,a){var c=e.memoizedState;c===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:s,tailMode:a}:(c.isBackwards=t,c.rendering=null,c.renderingStartTime=0,c.last=i,c.tail=s,c.tailMode=a)}function $d(e,t,s){var i=t.pendingProps,a=i.revealOrder,c=i.tail;if(lt(e,t,i.children,s),i=Ie.current,(i&2)!==0)i=i&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Xd(e,s,t);else if(e.tag===19)Xd(e,s,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}if(Me(Ie,i),(t.mode&1)===0)t.memoizedState=null;else switch(a){case"forwards":for(s=t.child,a=null;s!==null;)e=s.alternate,e!==null&&Po(e)===null&&(a=s),s=s.sibling;s=a,s===null?(a=t.child,t.child=null):(a=s.sibling,s.sibling=null),Ul(t,!1,a,s,c);break;case"backwards":for(s=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&Po(e)===null){t.child=a;break}e=a.sibling,a.sibling=s,s=a,a=e}Ul(t,!0,s,null,c);break;case"together":Ul(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function jo(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function rn(e,t,s){if(e!==null&&(t.dependencies=e.dependencies),Xn|=t.lanes,(s&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,s=Pn(e,e.pendingProps),t.child=s,s.return=t;e.sibling!==null;)e=e.sibling,s=s.sibling=Pn(e,e.pendingProps),s.return=t;s.sibling=null}return t.child}function v0(e,t,s){switch(t.tag){case 3:Wd(t),yr();break;case 5:ad(t);break;case 1:pt(t.type)&&go(t);break;case 4:wl(t,t.stateNode.containerInfo);break;case 10:var i=t.type._context,a=t.memoizedProps.value;Me(ko,i._currentValue),i._currentValue=a;break;case 13:if(i=t.memoizedState,i!==null)return i.dehydrated!==null?(Me(Ie,Ie.current&1),t.flags|=128,null):(s&t.child.childLanes)!==0?Qd(e,t,s):(Me(Ie,Ie.current&1),e=rn(e,t,s),e!==null?e.sibling:null);Me(Ie,Ie.current&1);break;case 19:if(i=(s&t.childLanes)!==0,(e.flags&128)!==0){if(i)return $d(e,t,s);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),Me(Ie,Ie.current),i)break;return null;case 22:case 23:return t.lanes=0,Fd(e,t,s)}return rn(e,t,s)}var Kd,Yl,Gd,Zd;Kd=function(e,t){for(var s=t.child;s!==null;){if(s.tag===5||s.tag===6)e.appendChild(s.stateNode);else if(s.tag!==4&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break;for(;s.sibling===null;){if(s.return===null||s.return===t)return;s=s.return}s.sibling.return=s.return,s=s.sibling}},Yl=function(){},Gd=function(e,t,s,i){var a=e.memoizedProps;if(a!==i){e=t.stateNode,Hn(Wt.current);var c=null;switch(s){case"input":a=Fr(e,a),i=Fr(e,i),c=[];break;case"select":a=Y({},a,{value:void 0}),i=Y({},i,{value:void 0}),c=[];break;case"textarea":a=_e(e,a),i=_e(e,i),c=[];break;default:typeof a.onClick!="function"&&typeof i.onClick=="function"&&(e.onclick=mo)}ki(s,i);var m;s=null;for(M in a)if(!i.hasOwnProperty(M)&&a.hasOwnProperty(M)&&a[M]!=null)if(M==="style"){var v=a[M];for(m in v)v.hasOwnProperty(m)&&(s||(s={}),s[m]="")}else M!=="dangerouslySetInnerHTML"&&M!=="children"&&M!=="suppressContentEditableWarning"&&M!=="suppressHydrationWarning"&&M!=="autoFocus"&&(u.hasOwnProperty(M)?c||(c=[]):(c=c||[]).push(M,null));for(M in i){var w=i[M];if(v=a!=null?a[M]:void 0,i.hasOwnProperty(M)&&w!==v&&(w!=null||v!=null))if(M==="style")if(v){for(m in v)!v.hasOwnProperty(m)||w&&w.hasOwnProperty(m)||(s||(s={}),s[m]="");for(m in w)w.hasOwnProperty(m)&&v[m]!==w[m]&&(s||(s={}),s[m]=w[m])}else s||(c||(c=[]),c.push(M,s)),s=w;else M==="dangerouslySetInnerHTML"?(w=w?w.__html:void 0,v=v?v.__html:void 0,w!=null&&v!==w&&(c=c||[]).push(M,w)):M==="children"?typeof w!="string"&&typeof w!="number"||(c=c||[]).push(M,""+w):M!=="suppressContentEditableWarning"&&M!=="suppressHydrationWarning"&&(u.hasOwnProperty(M)?(w!=null&&M==="onScroll"&&Re("scroll",e),c||v===w||(c=[])):(c=c||[]).push(M,w))}s&&(c=c||[]).push("style",s);var M=c;(t.updateQueue=M)&&(t.flags|=4)}},Zd=function(e,t,s,i){s!==i&&(t.flags|=4)};function Ss(e,t){if(!Le)switch(e.tailMode){case"hidden":t=e.tail;for(var s=null;t!==null;)t.alternate!==null&&(s=t),t=t.sibling;s===null?e.tail=null:s.sibling=null;break;case"collapsed":s=e.tail;for(var i=null;s!==null;)s.alternate!==null&&(i=s),s=s.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function rt(e){var t=e.alternate!==null&&e.alternate.child===e.child,s=0,i=0;if(t)for(var a=e.child;a!==null;)s|=a.lanes|a.childLanes,i|=a.subtreeFlags&14680064,i|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)s|=a.lanes|a.childLanes,i|=a.subtreeFlags,i|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=i,e.childLanes=s,t}function x0(e,t,s){var i=t.pendingProps;switch(dl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return rt(t),null;case 1:return pt(t.type)&&_o(),rt(t),null;case 3:return i=t.stateNode,Sr(),De(ft),De(tt),bl(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(wo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,It!==null&&(ea(It),It=null))),Yl(e,t),rt(t),null;case 5:Sl(t);var a=Hn(gs.current);if(s=t.type,e!==null&&t.stateNode!=null)Gd(e,t,s,i,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!i){if(t.stateNode===null)throw Error(o(166));return rt(t),null}if(e=Hn(Wt.current),wo(t)){i=t.stateNode,s=t.type;var c=t.memoizedProps;switch(i[Yt]=t,i[fs]=c,e=(t.mode&1)!==0,s){case"dialog":Re("cancel",i),Re("close",i);break;case"iframe":case"object":case"embed":Re("load",i);break;case"video":case"audio":for(a=0;a<us.length;a++)Re(us[a],i);break;case"source":Re("error",i);break;case"img":case"image":case"link":Re("error",i),Re("load",i);break;case"details":Re("toggle",i);break;case"input":Vn(i,c),Re("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!c.multiple},Re("invalid",i);break;case"textarea":ke(i,c),Re("invalid",i)}ki(s,c),a=null;for(var m in c)if(c.hasOwnProperty(m)){var v=c[m];m==="children"?typeof v=="string"?i.textContent!==v&&(c.suppressHydrationWarning!==!0&&po(i.textContent,v,e),a=["children",v]):typeof v=="number"&&i.textContent!==""+v&&(c.suppressHydrationWarning!==!0&&po(i.textContent,v,e),a=["children",""+v]):u.hasOwnProperty(m)&&v!=null&&m==="onScroll"&&Re("scroll",i)}switch(s){case"input":Gt(i),On(i,c,!0);break;case"textarea":Gt(i),it(i);break;case"select":case"option":break;default:typeof c.onClick=="function"&&(i.onclick=mo)}i=a,t.updateQueue=i,i!==null&&(t.flags|=4)}else{m=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ke(s)),e==="http://www.w3.org/1999/xhtml"?s==="script"?(e=m.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof i.is=="string"?e=m.createElement(s,{is:i.is}):(e=m.createElement(s),s==="select"&&(m=e,i.multiple?m.multiple=!0:i.size&&(m.size=i.size))):e=m.createElementNS(e,s),e[Yt]=t,e[fs]=i,Kd(e,t,!1,!1),t.stateNode=e;e:{switch(m=bi(s,i),s){case"dialog":Re("cancel",e),Re("close",e),a=i;break;case"iframe":case"object":case"embed":Re("load",e),a=i;break;case"video":case"audio":for(a=0;a<us.length;a++)Re(us[a],e);a=i;break;case"source":Re("error",e),a=i;break;case"img":case"image":case"link":Re("error",e),Re("load",e),a=i;break;case"details":Re("toggle",e),a=i;break;case"input":Vn(e,i),a=Fr(e,i),Re("invalid",e);break;case"option":a=i;break;case"select":e._wrapperState={wasMultiple:!!i.multiple},a=Y({},i,{value:void 0}),Re("invalid",e);break;case"textarea":ke(e,i),a=_e(e,i),Re("invalid",e);break;default:a=i}ki(s,a),v=a;for(c in v)if(v.hasOwnProperty(c)){var w=v[c];c==="style"?Bu(e,w):c==="dangerouslySetInnerHTML"?(w=w?w.__html:void 0,w!=null&&Hs(e,w)):c==="children"?typeof w=="string"?(s!=="textarea"||w!=="")&&Wr(e,w):typeof w=="number"&&Wr(e,""+w):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(u.hasOwnProperty(c)?w!=null&&c==="onScroll"&&Re("scroll",e):w!=null&&N(e,c,w,m))}switch(s){case"input":Gt(e),On(e,i,!1);break;case"textarea":Gt(e),it(e);break;case"option":i.value!=null&&e.setAttribute("value",""+Se(i.value));break;case"select":e.multiple=!!i.multiple,c=i.value,c!=null?un(e,!!i.multiple,c,!1):i.defaultValue!=null&&un(e,!!i.multiple,i.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=mo)}switch(s){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return rt(t),null;case 6:if(e&&t.stateNode!=null)Zd(e,t,e.memoizedProps,i);else{if(typeof i!="string"&&t.stateNode===null)throw Error(o(166));if(s=Hn(gs.current),Hn(Wt.current),wo(t)){if(i=t.stateNode,s=t.memoizedProps,i[Yt]=t,(c=i.nodeValue!==s)&&(e=xt,e!==null))switch(e.tag){case 3:po(i.nodeValue,s,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&po(i.nodeValue,s,(e.mode&1)!==0)}c&&(t.flags|=4)}else i=(s.nodeType===9?s:s.ownerDocument).createTextNode(i),i[Yt]=t,t.stateNode=i}return rt(t),null;case 13:if(De(Ie),i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Le&&wt!==null&&(t.mode&1)!==0&&(t.flags&128)===0)ed(),yr(),t.flags|=98560,c=!1;else if(c=wo(t),i!==null&&i.dehydrated!==null){if(e===null){if(!c)throw Error(o(318));if(c=t.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(o(317));c[Yt]=t}else yr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;rt(t),c=!1}else It!==null&&(ea(It),It=null),c=!0;if(!c)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=s,t):(i=i!==null,i!==(e!==null&&e.memoizedState!==null)&&i&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Ie.current&1)!==0?We===0&&(We=3):ra())),t.updateQueue!==null&&(t.flags|=4),rt(t),null);case 4:return Sr(),Yl(e,t),e===null&&cs(t.stateNode.containerInfo),rt(t),null;case 10:return gl(t.type._context),rt(t),null;case 17:return pt(t.type)&&_o(),rt(t),null;case 19:if(De(Ie),c=t.memoizedState,c===null)return rt(t),null;if(i=(t.flags&128)!==0,m=c.rendering,m===null)if(i)Ss(c,!1);else{if(We!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(m=Po(e),m!==null){for(t.flags|=128,Ss(c,!1),i=m.updateQueue,i!==null&&(t.updateQueue=i,t.flags|=4),t.subtreeFlags=0,i=s,s=t.child;s!==null;)c=s,e=i,c.flags&=14680066,m=c.alternate,m===null?(c.childLanes=0,c.lanes=e,c.child=null,c.subtreeFlags=0,c.memoizedProps=null,c.memoizedState=null,c.updateQueue=null,c.dependencies=null,c.stateNode=null):(c.childLanes=m.childLanes,c.lanes=m.lanes,c.child=m.child,c.subtreeFlags=0,c.deletions=null,c.memoizedProps=m.memoizedProps,c.memoizedState=m.memoizedState,c.updateQueue=m.updateQueue,c.type=m.type,e=m.dependencies,c.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),s=s.sibling;return Me(Ie,Ie.current&1|2),t.child}e=e.sibling}c.tail!==null&&Oe()>Cr&&(t.flags|=128,i=!0,Ss(c,!1),t.lanes=4194304)}else{if(!i)if(e=Po(m),e!==null){if(t.flags|=128,i=!0,s=e.updateQueue,s!==null&&(t.updateQueue=s,t.flags|=4),Ss(c,!0),c.tail===null&&c.tailMode==="hidden"&&!m.alternate&&!Le)return rt(t),null}else 2*Oe()-c.renderingStartTime>Cr&&s!==1073741824&&(t.flags|=128,i=!0,Ss(c,!1),t.lanes=4194304);c.isBackwards?(m.sibling=t.child,t.child=m):(s=c.last,s!==null?s.sibling=m:t.child=m,c.last=m)}return c.tail!==null?(t=c.tail,c.rendering=t,c.tail=t.sibling,c.renderingStartTime=Oe(),t.sibling=null,s=Ie.current,Me(Ie,i?s&1|2:s&1),t):(rt(t),null);case 22:case 23:return na(),i=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==i&&(t.flags|=8192),i&&(t.mode&1)!==0?(St&1073741824)!==0&&(rt(t),t.subtreeFlags&6&&(t.flags|=8192)):rt(t),null;case 24:return null;case 25:return null}throw Error(o(156,t.tag))}function w0(e,t){switch(dl(t),t.tag){case 1:return pt(t.type)&&_o(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Sr(),De(ft),De(tt),bl(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Sl(t),null;case 13:if(De(Ie),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));yr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return De(Ie),null;case 4:return Sr(),null;case 10:return gl(t.type._context),null;case 22:case 23:return na(),null;case 24:return null;default:return null}}var No=!1,st=!1,S0=typeof WeakSet=="function"?WeakSet:Set,G=null;function br(e,t){var s=e.ref;if(s!==null)if(typeof s=="function")try{s(null)}catch(i){Ne(e,t,i)}else s.current=null}function Wl(e,t,s){try{s()}catch(i){Ne(e,t,i)}}var Jd=!1;function k0(e,t){if(nl=to,e=Rc(),$i(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else e:{s=(s=e.ownerDocument)&&s.defaultView||window;var i=s.getSelection&&s.getSelection();if(i&&i.rangeCount!==0){s=i.anchorNode;var a=i.anchorOffset,c=i.focusNode;i=i.focusOffset;try{s.nodeType,c.nodeType}catch{s=null;break e}var m=0,v=-1,w=-1,M=0,F=0,U=e,B=null;t:for(;;){for(var $;U!==s||a!==0&&U.nodeType!==3||(v=m+a),U!==c||i!==0&&U.nodeType!==3||(w=m+i),U.nodeType===3&&(m+=U.nodeValue.length),($=U.firstChild)!==null;)B=U,U=$;for(;;){if(U===e)break t;if(B===s&&++M===a&&(v=m),B===c&&++F===i&&(w=m),($=U.nextSibling)!==null)break;U=B,B=U.parentNode}U=$}s=v===-1||w===-1?null:{start:v,end:w}}else s=null}s=s||{start:0,end:0}}else s=null;for(rl={focusedElem:e,selectionRange:s},to=!1,G=t;G!==null;)if(t=G,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,G=e;else for(;G!==null;){t=G;try{var q=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(q!==null){var te=q.memoizedProps,ze=q.memoizedState,C=t.stateNode,b=C.getSnapshotBeforeUpdate(t.elementType===t.type?te:At(t.type,te),ze);C.__reactInternalSnapshotBeforeUpdate=b}break;case 3:var P=t.stateNode.containerInfo;P.nodeType===1?P.textContent="":P.nodeType===9&&P.documentElement&&P.removeChild(P.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(o(163))}}catch(Q){Ne(t,t.return,Q)}if(e=t.sibling,e!==null){e.return=t.return,G=e;break}G=t.return}return q=Jd,Jd=!1,q}function ks(e,t,s){var i=t.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&e)===e){var c=a.destroy;a.destroy=void 0,c!==void 0&&Wl(t,s,c)}a=a.next}while(a!==i)}}function Vo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var s=t=t.next;do{if((s.tag&e)===e){var i=s.create;s.destroy=i()}s=s.next}while(s!==t)}}function Hl(e){var t=e.ref;if(t!==null){var s=e.stateNode;switch(e.tag){case 5:e=s;break;default:e=s}typeof t=="function"?t(e):t.current=e}}function qd(e){var t=e.alternate;t!==null&&(e.alternate=null,qd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Yt],delete t[fs],delete t[ll],delete t[o0],delete t[i0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ef(e){return e.tag===5||e.tag===3||e.tag===4}function tf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ef(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ql(e,t,s){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?s.nodeType===8?s.parentNode.insertBefore(e,t):s.insertBefore(e,t):(s.nodeType===8?(t=s.parentNode,t.insertBefore(e,s)):(t=s,t.appendChild(e)),s=s._reactRootContainer,s!=null||t.onclick!==null||(t.onclick=mo));else if(i!==4&&(e=e.child,e!==null))for(Ql(e,t,s),e=e.sibling;e!==null;)Ql(e,t,s),e=e.sibling}function Xl(e,t,s){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?s.insertBefore(e,t):s.appendChild(e);else if(i!==4&&(e=e.child,e!==null))for(Xl(e,t,s),e=e.sibling;e!==null;)Xl(e,t,s),e=e.sibling}var Ge=null,jt=!1;function Sn(e,t,s){for(s=s.child;s!==null;)nf(e,t,s),s=s.sibling}function nf(e,t,s){if(Ut&&typeof Ut.onCommitFiberUnmount=="function")try{Ut.onCommitFiberUnmount(Ks,s)}catch{}switch(s.tag){case 5:st||br(s,t);case 6:var i=Ge,a=jt;Ge=null,Sn(e,t,s),Ge=i,jt=a,Ge!==null&&(jt?(e=Ge,s=s.stateNode,e.nodeType===8?e.parentNode.removeChild(s):e.removeChild(s)):Ge.removeChild(s.stateNode));break;case 18:Ge!==null&&(jt?(e=Ge,s=s.stateNode,e.nodeType===8?il(e.parentNode,s):e.nodeType===1&&il(e,s),ts(e)):il(Ge,s.stateNode));break;case 4:i=Ge,a=jt,Ge=s.stateNode.containerInfo,jt=!0,Sn(e,t,s),Ge=i,jt=a;break;case 0:case 11:case 14:case 15:if(!st&&(i=s.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){a=i=i.next;do{var c=a,m=c.destroy;c=c.tag,m!==void 0&&((c&2)!==0||(c&4)!==0)&&Wl(s,t,m),a=a.next}while(a!==i)}Sn(e,t,s);break;case 1:if(!st&&(br(s,t),i=s.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=s.memoizedProps,i.state=s.memoizedState,i.componentWillUnmount()}catch(v){Ne(s,t,v)}Sn(e,t,s);break;case 21:Sn(e,t,s);break;case 22:s.mode&1?(st=(i=st)||s.memoizedState!==null,Sn(e,t,s),st=i):Sn(e,t,s);break;default:Sn(e,t,s)}}function rf(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var s=e.stateNode;s===null&&(s=e.stateNode=new S0),t.forEach(function(i){var a=L0.bind(null,e,i);s.has(i)||(s.add(i),i.then(a,a))})}}function Nt(e,t){var s=t.deletions;if(s!==null)for(var i=0;i<s.length;i++){var a=s[i];try{var c=e,m=t,v=m;e:for(;v!==null;){switch(v.tag){case 5:Ge=v.stateNode,jt=!1;break e;case 3:Ge=v.stateNode.containerInfo,jt=!0;break e;case 4:Ge=v.stateNode.containerInfo,jt=!0;break e}v=v.return}if(Ge===null)throw Error(o(160));nf(c,m,a),Ge=null,jt=!1;var w=a.alternate;w!==null&&(w.return=null),a.return=null}catch(M){Ne(a,t,M)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)sf(t,e),t=t.sibling}function sf(e,t){var s=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Nt(t,e),Qt(e),i&4){try{ks(3,e,e.return),Vo(3,e)}catch(te){Ne(e,e.return,te)}try{ks(5,e,e.return)}catch(te){Ne(e,e.return,te)}}break;case 1:Nt(t,e),Qt(e),i&512&&s!==null&&br(s,s.return);break;case 5:if(Nt(t,e),Qt(e),i&512&&s!==null&&br(s,s.return),e.flags&32){var a=e.stateNode;try{Wr(a,"")}catch(te){Ne(e,e.return,te)}}if(i&4&&(a=e.stateNode,a!=null)){var c=e.memoizedProps,m=s!==null?s.memoizedProps:c,v=e.type,w=e.updateQueue;if(e.updateQueue=null,w!==null)try{v==="input"&&c.type==="radio"&&c.name!=null&&Ur(a,c),bi(v,m);var M=bi(v,c);for(m=0;m<w.length;m+=2){var F=w[m],U=w[m+1];F==="style"?Bu(a,U):F==="dangerouslySetInnerHTML"?Hs(a,U):F==="children"?Wr(a,U):N(a,F,U,M)}switch(v){case"input":Yr(a,c);break;case"textarea":Be(a,c);break;case"select":var B=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!c.multiple;var $=c.value;$!=null?un(a,!!c.multiple,$,!1):B!==!!c.multiple&&(c.defaultValue!=null?un(a,!!c.multiple,c.defaultValue,!0):un(a,!!c.multiple,c.multiple?[]:"",!1))}a[fs]=c}catch(te){Ne(e,e.return,te)}}break;case 6:if(Nt(t,e),Qt(e),i&4){if(e.stateNode===null)throw Error(o(162));a=e.stateNode,c=e.memoizedProps;try{a.nodeValue=c}catch(te){Ne(e,e.return,te)}}break;case 3:if(Nt(t,e),Qt(e),i&4&&s!==null&&s.memoizedState.isDehydrated)try{ts(t.containerInfo)}catch(te){Ne(e,e.return,te)}break;case 4:Nt(t,e),Qt(e);break;case 13:Nt(t,e),Qt(e),a=e.child,a.flags&8192&&(c=a.memoizedState!==null,a.stateNode.isHidden=c,!c||a.alternate!==null&&a.alternate.memoizedState!==null||(Gl=Oe())),i&4&&rf(e);break;case 22:if(F=s!==null&&s.memoizedState!==null,e.mode&1?(st=(M=st)||F,Nt(t,e),st=M):Nt(t,e),Qt(e),i&8192){if(M=e.memoizedState!==null,(e.stateNode.isHidden=M)&&!F&&(e.mode&1)!==0)for(G=e,F=e.child;F!==null;){for(U=G=F;G!==null;){switch(B=G,$=B.child,B.tag){case 0:case 11:case 14:case 15:ks(4,B,B.return);break;case 1:br(B,B.return);var q=B.stateNode;if(typeof q.componentWillUnmount=="function"){i=B,s=B.return;try{t=i,q.props=t.memoizedProps,q.state=t.memoizedState,q.componentWillUnmount()}catch(te){Ne(i,s,te)}}break;case 5:br(B,B.return);break;case 22:if(B.memoizedState!==null){af(U);continue}}$!==null?($.return=B,G=$):af(U)}F=F.sibling}e:for(F=null,U=e;;){if(U.tag===5){if(F===null){F=U;try{a=U.stateNode,M?(c=a.style,typeof c.setProperty=="function"?c.setProperty("display","none","important"):c.display="none"):(v=U.stateNode,w=U.memoizedProps.style,m=w!=null&&w.hasOwnProperty("display")?w.display:null,v.style.display=zu("display",m))}catch(te){Ne(e,e.return,te)}}}else if(U.tag===6){if(F===null)try{U.stateNode.nodeValue=M?"":U.memoizedProps}catch(te){Ne(e,e.return,te)}}else if((U.tag!==22&&U.tag!==23||U.memoizedState===null||U===e)&&U.child!==null){U.child.return=U,U=U.child;continue}if(U===e)break e;for(;U.sibling===null;){if(U.return===null||U.return===e)break e;F===U&&(F=null),U=U.return}F===U&&(F=null),U.sibling.return=U.return,U=U.sibling}}break;case 19:Nt(t,e),Qt(e),i&4&&rf(e);break;case 21:break;default:Nt(t,e),Qt(e)}}function Qt(e){var t=e.flags;if(t&2){try{e:{for(var s=e.return;s!==null;){if(ef(s)){var i=s;break e}s=s.return}throw Error(o(160))}switch(i.tag){case 5:var a=i.stateNode;i.flags&32&&(Wr(a,""),i.flags&=-33);var c=tf(e);Xl(e,c,a);break;case 3:case 4:var m=i.stateNode.containerInfo,v=tf(e);Ql(e,v,m);break;default:throw Error(o(161))}}catch(w){Ne(e,e.return,w)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function b0(e,t,s){G=e,of(e)}function of(e,t,s){for(var i=(e.mode&1)!==0;G!==null;){var a=G,c=a.child;if(a.tag===22&&i){var m=a.memoizedState!==null||No;if(!m){var v=a.alternate,w=v!==null&&v.memoizedState!==null||st;v=No;var M=st;if(No=m,(st=w)&&!M)for(G=a;G!==null;)m=G,w=m.child,m.tag===22&&m.memoizedState!==null?uf(a):w!==null?(w.return=m,G=w):uf(a);for(;c!==null;)G=c,of(c),c=c.sibling;G=a,No=v,st=M}lf(e)}else(a.subtreeFlags&8772)!==0&&c!==null?(c.return=a,G=c):lf(e)}}function lf(e){for(;G!==null;){var t=G;if((t.flags&8772)!==0){var s=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:st||Vo(5,t);break;case 1:var i=t.stateNode;if(t.flags&4&&!st)if(s===null)i.componentDidMount();else{var a=t.elementType===t.type?s.memoizedProps:At(t.type,s.memoizedProps);i.componentDidUpdate(a,s.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var c=t.updateQueue;c!==null&&ld(t,c,i);break;case 3:var m=t.updateQueue;if(m!==null){if(s=null,t.child!==null)switch(t.child.tag){case 5:s=t.child.stateNode;break;case 1:s=t.child.stateNode}ld(t,m,s)}break;case 5:var v=t.stateNode;if(s===null&&t.flags&4){s=v;var w=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":w.autoFocus&&s.focus();break;case"img":w.src&&(s.src=w.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var M=t.alternate;if(M!==null){var F=M.memoizedState;if(F!==null){var U=F.dehydrated;U!==null&&ts(U)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(o(163))}st||t.flags&512&&Hl(t)}catch(B){Ne(t,t.return,B)}}if(t===e){G=null;break}if(s=t.sibling,s!==null){s.return=t.return,G=s;break}G=t.return}}function af(e){for(;G!==null;){var t=G;if(t===e){G=null;break}var s=t.sibling;if(s!==null){s.return=t.return,G=s;break}G=t.return}}function uf(e){for(;G!==null;){var t=G;try{switch(t.tag){case 0:case 11:case 15:var s=t.return;try{Vo(4,t)}catch(w){Ne(t,s,w)}break;case 1:var i=t.stateNode;if(typeof i.componentDidMount=="function"){var a=t.return;try{i.componentDidMount()}catch(w){Ne(t,a,w)}}var c=t.return;try{Hl(t)}catch(w){Ne(t,c,w)}break;case 5:var m=t.return;try{Hl(t)}catch(w){Ne(t,m,w)}}}catch(w){Ne(t,t.return,w)}if(t===e){G=null;break}var v=t.sibling;if(v!==null){v.return=t.return,G=v;break}G=t.return}}var T0=Math.ceil,Oo=O.ReactCurrentDispatcher,$l=O.ReactCurrentOwner,Pt=O.ReactCurrentBatchConfig,xe=0,Xe=null,Fe=null,Ze=0,St=0,Tr=gn(0),We=0,bs=null,Xn=0,zo=0,Kl=0,Ts=null,ht=null,Gl=0,Cr=1/0,sn=null,Bo=!1,Zl=null,kn=null,Fo=!1,bn=null,Uo=0,Cs=0,Jl=null,Yo=-1,Wo=0;function at(){return(xe&6)!==0?Oe():Yo!==-1?Yo:Yo=Oe()}function Tn(e){return(e.mode&1)===0?1:(xe&2)!==0&&Ze!==0?Ze&-Ze:a0.transition!==null?(Wo===0&&(Wo=tc()),Wo):(e=be,e!==0||(e=window.event,e=e===void 0?16:cc(e.type)),e)}function Vt(e,t,s,i){if(50<Cs)throw Cs=0,Jl=null,Error(o(185));Gr(e,s,i),((xe&2)===0||e!==Xe)&&(e===Xe&&((xe&2)===0&&(zo|=s),We===4&&Cn(e,Ze)),_t(e,i),s===1&&xe===0&&(t.mode&1)===0&&(Cr=Oe()+500,yo&&vn()))}function _t(e,t){var s=e.callbackNode;a_(e,t);var i=Js(e,e===Xe?Ze:0);if(i===0)s!==null&&Ju(s),e.callbackNode=null,e.callbackPriority=0;else if(t=i&-i,e.callbackPriority!==t){if(s!=null&&Ju(s),t===1)e.tag===0?l0(df.bind(null,e)):Kc(df.bind(null,e)),r0(function(){(xe&6)===0&&vn()}),s=null;else{switch(nc(i)){case 1:s=Di;break;case 4:s=qu;break;case 16:s=$s;break;case 536870912:s=ec;break;default:s=$s}s=vf(s,cf.bind(null,e))}e.callbackPriority=t,e.callbackNode=s}}function cf(e,t){if(Yo=-1,Wo=0,(xe&6)!==0)throw Error(o(327));var s=e.callbackNode;if(Pr()&&e.callbackNode!==s)return null;var i=Js(e,e===Xe?Ze:0);if(i===0)return null;if((i&30)!==0||(i&e.expiredLanes)!==0||t)t=Ho(e,i);else{t=i;var a=xe;xe|=2;var c=pf();(Xe!==e||Ze!==t)&&(sn=null,Cr=Oe()+500,Kn(e,t));do try{E0();break}catch(v){ff(e,v)}while(!0);_l(),Oo.current=c,xe=a,Fe!==null?t=0:(Xe=null,Ze=0,t=We)}if(t!==0){if(t===2&&(a=Li(e),a!==0&&(i=a,t=ql(e,a))),t===1)throw s=bs,Kn(e,0),Cn(e,i),_t(e,Oe()),s;if(t===6)Cn(e,i);else{if(a=e.current.alternate,(i&30)===0&&!C0(a)&&(t=Ho(e,i),t===2&&(c=Li(e),c!==0&&(i=c,t=ql(e,c))),t===1))throw s=bs,Kn(e,0),Cn(e,i),_t(e,Oe()),s;switch(e.finishedWork=a,e.finishedLanes=i,t){case 0:case 1:throw Error(o(345));case 2:Gn(e,ht,sn);break;case 3:if(Cn(e,i),(i&130023424)===i&&(t=Gl+500-Oe(),10<t)){if(Js(e,0)!==0)break;if(a=e.suspendedLanes,(a&i)!==i){at(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=ol(Gn.bind(null,e,ht,sn),t);break}Gn(e,ht,sn);break;case 4:if(Cn(e,i),(i&4194240)===i)break;for(t=e.eventTimes,a=-1;0<i;){var m=31-Dt(i);c=1<<m,m=t[m],m>a&&(a=m),i&=~c}if(i=a,i=Oe()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*T0(i/1960))-i,10<i){e.timeoutHandle=ol(Gn.bind(null,e,ht,sn),i);break}Gn(e,ht,sn);break;case 5:Gn(e,ht,sn);break;default:throw Error(o(329))}}}return _t(e,Oe()),e.callbackNode===s?cf.bind(null,e):null}function ql(e,t){var s=Ts;return e.current.memoizedState.isDehydrated&&(Kn(e,t).flags|=256),e=Ho(e,t),e!==2&&(t=ht,ht=s,t!==null&&ea(t)),e}function ea(e){ht===null?ht=e:ht.push.apply(ht,e)}function C0(e){for(var t=e;;){if(t.flags&16384){var s=t.updateQueue;if(s!==null&&(s=s.stores,s!==null))for(var i=0;i<s.length;i++){var a=s[i],c=a.getSnapshot;a=a.value;try{if(!Lt(c(),a))return!1}catch{return!1}}}if(s=t.child,t.subtreeFlags&16384&&s!==null)s.return=t,t=s;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Cn(e,t){for(t&=~Kl,t&=~zo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var s=31-Dt(t),i=1<<s;e[s]=-1,t&=~i}}function df(e){if((xe&6)!==0)throw Error(o(327));Pr();var t=Js(e,0);if((t&1)===0)return _t(e,Oe()),null;var s=Ho(e,t);if(e.tag!==0&&s===2){var i=Li(e);i!==0&&(t=i,s=ql(e,i))}if(s===1)throw s=bs,Kn(e,0),Cn(e,t),_t(e,Oe()),s;if(s===6)throw Error(o(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Gn(e,ht,sn),_t(e,Oe()),null}function ta(e,t){var s=xe;xe|=1;try{return e(t)}finally{xe=s,xe===0&&(Cr=Oe()+500,yo&&vn())}}function $n(e){bn!==null&&bn.tag===0&&(xe&6)===0&&Pr();var t=xe;xe|=1;var s=Pt.transition,i=be;try{if(Pt.transition=null,be=1,e)return e()}finally{be=i,Pt.transition=s,xe=t,(xe&6)===0&&vn()}}function na(){St=Tr.current,De(Tr)}function Kn(e,t){e.finishedWork=null,e.finishedLanes=0;var s=e.timeoutHandle;if(s!==-1&&(e.timeoutHandle=-1,n0(s)),Fe!==null)for(s=Fe.return;s!==null;){var i=s;switch(dl(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&_o();break;case 3:Sr(),De(ft),De(tt),bl();break;case 5:Sl(i);break;case 4:Sr();break;case 13:De(Ie);break;case 19:De(Ie);break;case 10:gl(i.type._context);break;case 22:case 23:na()}s=s.return}if(Xe=e,Fe=e=Pn(e.current,null),Ze=St=t,We=0,bs=null,Kl=zo=Xn=0,ht=Ts=null,Wn!==null){for(t=0;t<Wn.length;t++)if(s=Wn[t],i=s.interleaved,i!==null){s.interleaved=null;var a=i.next,c=s.pending;if(c!==null){var m=c.next;c.next=a,i.next=m}s.pending=i}Wn=null}return e}function ff(e,t){do{var s=Fe;try{if(_l(),Eo.current=Lo,Mo){for(var i=Ae.memoizedState;i!==null;){var a=i.queue;a!==null&&(a.pending=null),i=i.next}Mo=!1}if(Qn=0,Qe=Ye=Ae=null,ys=!1,vs=0,$l.current=null,s===null||s.return===null){We=1,bs=t,Fe=null;break}e:{var c=e,m=s.return,v=s,w=t;if(t=Ze,v.flags|=32768,w!==null&&typeof w=="object"&&typeof w.then=="function"){var M=w,F=v,U=F.tag;if((F.mode&1)===0&&(U===0||U===11||U===15)){var B=F.alternate;B?(F.updateQueue=B.updateQueue,F.memoizedState=B.memoizedState,F.lanes=B.lanes):(F.updateQueue=null,F.memoizedState=null)}var $=Nd(m);if($!==null){$.flags&=-257,Vd($,m,v,c,t),$.mode&1&&jd(c,M,t),t=$,w=M;var q=t.updateQueue;if(q===null){var te=new Set;te.add(w),t.updateQueue=te}else q.add(w);break e}else{if((t&1)===0){jd(c,M,t),ra();break e}w=Error(o(426))}}else if(Le&&v.mode&1){var ze=Nd(m);if(ze!==null){(ze.flags&65536)===0&&(ze.flags|=256),Vd(ze,m,v,c,t),ml(kr(w,v));break e}}c=w=kr(w,v),We!==4&&(We=2),Ts===null?Ts=[c]:Ts.push(c),c=m;do{switch(c.tag){case 3:c.flags|=65536,t&=-t,c.lanes|=t;var C=Id(c,w,t);id(c,C);break e;case 1:v=w;var b=c.type,P=c.stateNode;if((c.flags&128)===0&&(typeof b.getDerivedStateFromError=="function"||P!==null&&typeof P.componentDidCatch=="function"&&(kn===null||!kn.has(P)))){c.flags|=65536,t&=-t,c.lanes|=t;var Q=Ad(c,v,t);id(c,Q);break e}}c=c.return}while(c!==null)}hf(s)}catch(ne){t=ne,Fe===s&&s!==null&&(Fe=s=s.return);continue}break}while(!0)}function pf(){var e=Oo.current;return Oo.current=Lo,e===null?Lo:e}function ra(){(We===0||We===3||We===2)&&(We=4),Xe===null||(Xn&268435455)===0&&(zo&268435455)===0||Cn(Xe,Ze)}function Ho(e,t){var s=xe;xe|=2;var i=pf();(Xe!==e||Ze!==t)&&(sn=null,Kn(e,t));do try{P0();break}catch(a){ff(e,a)}while(!0);if(_l(),xe=s,Oo.current=i,Fe!==null)throw Error(o(261));return Xe=null,Ze=0,We}function P0(){for(;Fe!==null;)mf(Fe)}function E0(){for(;Fe!==null&&!qh();)mf(Fe)}function mf(e){var t=yf(e.alternate,e,St);e.memoizedProps=e.pendingProps,t===null?hf(e):Fe=t,$l.current=null}function hf(e){var t=e;do{var s=t.alternate;if(e=t.return,(t.flags&32768)===0){if(s=x0(s,t,St),s!==null){Fe=s;return}}else{if(s=w0(s,t),s!==null){s.flags&=32767,Fe=s;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{We=6,Fe=null;return}}if(t=t.sibling,t!==null){Fe=t;return}Fe=t=e}while(t!==null);We===0&&(We=5)}function Gn(e,t,s){var i=be,a=Pt.transition;try{Pt.transition=null,be=1,M0(e,t,s,i)}finally{Pt.transition=a,be=i}return null}function M0(e,t,s,i){do Pr();while(bn!==null);if((xe&6)!==0)throw Error(o(327));s=e.finishedWork;var a=e.finishedLanes;if(s===null)return null;if(e.finishedWork=null,e.finishedLanes=0,s===e.current)throw Error(o(177));e.callbackNode=null,e.callbackPriority=0;var c=s.lanes|s.childLanes;if(u_(e,c),e===Xe&&(Fe=Xe=null,Ze=0),(s.subtreeFlags&2064)===0&&(s.flags&2064)===0||Fo||(Fo=!0,vf($s,function(){return Pr(),null})),c=(s.flags&15990)!==0,(s.subtreeFlags&15990)!==0||c){c=Pt.transition,Pt.transition=null;var m=be;be=1;var v=xe;xe|=4,$l.current=null,k0(e,s),sf(s,e),K_(rl),to=!!nl,rl=nl=null,e.current=s,b0(s),e_(),xe=v,be=m,Pt.transition=c}else e.current=s;if(Fo&&(Fo=!1,bn=e,Uo=a),c=e.pendingLanes,c===0&&(kn=null),r_(s.stateNode),_t(e,Oe()),t!==null)for(i=e.onRecoverableError,s=0;s<t.length;s++)a=t[s],i(a.value,{componentStack:a.stack,digest:a.digest});if(Bo)throw Bo=!1,e=Zl,Zl=null,e;return(Uo&1)!==0&&e.tag!==0&&Pr(),c=e.pendingLanes,(c&1)!==0?e===Jl?Cs++:(Cs=0,Jl=e):Cs=0,vn(),null}function Pr(){if(bn!==null){var e=nc(Uo),t=Pt.transition,s=be;try{if(Pt.transition=null,be=16>e?16:e,bn===null)var i=!1;else{if(e=bn,bn=null,Uo=0,(xe&6)!==0)throw Error(o(331));var a=xe;for(xe|=4,G=e.current;G!==null;){var c=G,m=c.child;if((G.flags&16)!==0){var v=c.deletions;if(v!==null){for(var w=0;w<v.length;w++){var M=v[w];for(G=M;G!==null;){var F=G;switch(F.tag){case 0:case 11:case 15:ks(8,F,c)}var U=F.child;if(U!==null)U.return=F,G=U;else for(;G!==null;){F=G;var B=F.sibling,$=F.return;if(qd(F),F===M){G=null;break}if(B!==null){B.return=$,G=B;break}G=$}}}var q=c.alternate;if(q!==null){var te=q.child;if(te!==null){q.child=null;do{var ze=te.sibling;te.sibling=null,te=ze}while(te!==null)}}G=c}}if((c.subtreeFlags&2064)!==0&&m!==null)m.return=c,G=m;else e:for(;G!==null;){if(c=G,(c.flags&2048)!==0)switch(c.tag){case 0:case 11:case 15:ks(9,c,c.return)}var C=c.sibling;if(C!==null){C.return=c.return,G=C;break e}G=c.return}}var b=e.current;for(G=b;G!==null;){m=G;var P=m.child;if((m.subtreeFlags&2064)!==0&&P!==null)P.return=m,G=P;else e:for(m=b;G!==null;){if(v=G,(v.flags&2048)!==0)try{switch(v.tag){case 0:case 11:case 15:Vo(9,v)}}catch(ne){Ne(v,v.return,ne)}if(v===m){G=null;break e}var Q=v.sibling;if(Q!==null){Q.return=v.return,G=Q;break e}G=v.return}}if(xe=a,vn(),Ut&&typeof Ut.onPostCommitFiberRoot=="function")try{Ut.onPostCommitFiberRoot(Ks,e)}catch{}i=!0}return i}finally{be=s,Pt.transition=t}}return!1}function _f(e,t,s){t=kr(s,t),t=Id(e,t,1),e=wn(e,t,1),t=at(),e!==null&&(Gr(e,1,t),_t(e,t))}function Ne(e,t,s){if(e.tag===3)_f(e,e,s);else for(;t!==null;){if(t.tag===3){_f(t,e,s);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(kn===null||!kn.has(i))){e=kr(s,e),e=Ad(t,e,1),t=wn(t,e,1),e=at(),t!==null&&(Gr(t,1,e),_t(t,e));break}}t=t.return}}function R0(e,t,s){var i=e.pingCache;i!==null&&i.delete(t),t=at(),e.pingedLanes|=e.suspendedLanes&s,Xe===e&&(Ze&s)===s&&(We===4||We===3&&(Ze&130023424)===Ze&&500>Oe()-Gl?Kn(e,0):Kl|=s),_t(e,t)}function gf(e,t){t===0&&((e.mode&1)===0?t=1:(t=Zs,Zs<<=1,(Zs&130023424)===0&&(Zs=4194304)));var s=at();e=tn(e,t),e!==null&&(Gr(e,t,s),_t(e,s))}function D0(e){var t=e.memoizedState,s=0;t!==null&&(s=t.retryLane),gf(e,s)}function L0(e,t){var s=0;switch(e.tag){case 13:var i=e.stateNode,a=e.memoizedState;a!==null&&(s=a.retryLane);break;case 19:i=e.stateNode;break;default:throw Error(o(314))}i!==null&&i.delete(t),gf(e,s)}var yf;yf=function(e,t,s){if(e!==null)if(e.memoizedProps!==t.pendingProps||ft.current)mt=!0;else{if((e.lanes&s)===0&&(t.flags&128)===0)return mt=!1,v0(e,t,s);mt=(e.flags&131072)!==0}else mt=!1,Le&&(t.flags&1048576)!==0&&Gc(t,xo,t.index);switch(t.lanes=0,t.tag){case 2:var i=t.type;jo(e,t),e=t.pendingProps;var a=hr(t,tt.current);wr(t,s),a=Pl(null,t,i,e,a,s);var c=El();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,pt(i)?(c=!0,go(t)):c=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,xl(t),a.updater=Io,t.stateNode=a,a._reactInternals=t,Al(t,i,e,s),t=Ol(null,t,i,!0,c,s)):(t.tag=0,Le&&c&&cl(t),lt(null,t,a,s),t=t.child),t;case 16:i=t.elementType;e:{switch(jo(e,t),e=t.pendingProps,a=i._init,i=a(i._payload),t.type=i,a=t.tag=A0(i),e=At(i,e),a){case 0:t=Vl(null,t,i,e,s);break e;case 1:t=Yd(null,t,i,e,s);break e;case 11:t=Od(null,t,i,e,s);break e;case 14:t=zd(null,t,i,At(i.type,e),s);break e}throw Error(o(306,i,""))}return t;case 0:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:At(i,a),Vl(e,t,i,a,s);case 1:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:At(i,a),Yd(e,t,i,a,s);case 3:e:{if(Wd(t),e===null)throw Error(o(387));i=t.pendingProps,c=t.memoizedState,a=c.element,od(e,t),Co(t,i,null,s);var m=t.memoizedState;if(i=m.element,c.isDehydrated)if(c={element:i,isDehydrated:!1,cache:m.cache,pendingSuspenseBoundaries:m.pendingSuspenseBoundaries,transitions:m.transitions},t.updateQueue.baseState=c,t.memoizedState=c,t.flags&256){a=kr(Error(o(423)),t),t=Hd(e,t,i,s,a);break e}else if(i!==a){a=kr(Error(o(424)),t),t=Hd(e,t,i,s,a);break e}else for(wt=_n(t.stateNode.containerInfo.firstChild),xt=t,Le=!0,It=null,s=rd(t,null,i,s),t.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(yr(),i===a){t=rn(e,t,s);break e}lt(e,t,i,s)}t=t.child}return t;case 5:return ad(t),e===null&&pl(t),i=t.type,a=t.pendingProps,c=e!==null?e.memoizedProps:null,m=a.children,sl(i,a)?m=null:c!==null&&sl(i,c)&&(t.flags|=32),Ud(e,t),lt(e,t,m,s),t.child;case 6:return e===null&&pl(t),null;case 13:return Qd(e,t,s);case 4:return wl(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=vr(t,null,i,s):lt(e,t,i,s),t.child;case 11:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:At(i,a),Od(e,t,i,a,s);case 7:return lt(e,t,t.pendingProps,s),t.child;case 8:return lt(e,t,t.pendingProps.children,s),t.child;case 12:return lt(e,t,t.pendingProps.children,s),t.child;case 10:e:{if(i=t.type._context,a=t.pendingProps,c=t.memoizedProps,m=a.value,Me(ko,i._currentValue),i._currentValue=m,c!==null)if(Lt(c.value,m)){if(c.children===a.children&&!ft.current){t=rn(e,t,s);break e}}else for(c=t.child,c!==null&&(c.return=t);c!==null;){var v=c.dependencies;if(v!==null){m=c.child;for(var w=v.firstContext;w!==null;){if(w.context===i){if(c.tag===1){w=nn(-1,s&-s),w.tag=2;var M=c.updateQueue;if(M!==null){M=M.shared;var F=M.pending;F===null?w.next=w:(w.next=F.next,F.next=w),M.pending=w}}c.lanes|=s,w=c.alternate,w!==null&&(w.lanes|=s),yl(c.return,s,t),v.lanes|=s;break}w=w.next}}else if(c.tag===10)m=c.type===t.type?null:c.child;else if(c.tag===18){if(m=c.return,m===null)throw Error(o(341));m.lanes|=s,v=m.alternate,v!==null&&(v.lanes|=s),yl(m,s,t),m=c.sibling}else m=c.child;if(m!==null)m.return=c;else for(m=c;m!==null;){if(m===t){m=null;break}if(c=m.sibling,c!==null){c.return=m.return,m=c;break}m=m.return}c=m}lt(e,t,a.children,s),t=t.child}return t;case 9:return a=t.type,i=t.pendingProps.children,wr(t,s),a=Tt(a),i=i(a),t.flags|=1,lt(e,t,i,s),t.child;case 14:return i=t.type,a=At(i,t.pendingProps),a=At(i.type,a),zd(e,t,i,a,s);case 15:return Bd(e,t,t.type,t.pendingProps,s);case 17:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:At(i,a),jo(e,t),t.tag=1,pt(i)?(e=!0,go(t)):e=!1,wr(t,s),Dd(t,i,a),Al(t,i,a,s),Ol(null,t,i,!0,e,s);case 19:return $d(e,t,s);case 22:return Fd(e,t,s)}throw Error(o(156,t.tag))};function vf(e,t){return Zu(e,t)}function I0(e,t,s,i){this.tag=e,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Et(e,t,s,i){return new I0(e,t,s,i)}function sa(e){return e=e.prototype,!(!e||!e.isReactComponent)}function A0(e){if(typeof e=="function")return sa(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ue)return 11;if(e===fe)return 14}return 2}function Pn(e,t){var s=e.alternate;return s===null?(s=Et(e.tag,t,e.key,e.mode),s.elementType=e.elementType,s.type=e.type,s.stateNode=e.stateNode,s.alternate=e,e.alternate=s):(s.pendingProps=t,s.type=e.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=e.flags&14680064,s.childLanes=e.childLanes,s.lanes=e.lanes,s.child=e.child,s.memoizedProps=e.memoizedProps,s.memoizedState=e.memoizedState,s.updateQueue=e.updateQueue,t=e.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},s.sibling=e.sibling,s.index=e.index,s.ref=e.ref,s}function Qo(e,t,s,i,a,c){var m=2;if(i=e,typeof e=="function")sa(e)&&(m=1);else if(typeof e=="string")m=5;else e:switch(e){case X:return Zn(s.children,a,c,t);case H:m=8,a|=8;break;case K:return e=Et(12,s,t,a|2),e.elementType=K,e.lanes=c,e;case ce:return e=Et(13,s,t,a),e.elementType=ce,e.lanes=c,e;case me:return e=Et(19,s,t,a),e.elementType=me,e.lanes=c,e;case re:return Xo(s,a,c,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case J:m=10;break e;case ie:m=9;break e;case ue:m=11;break e;case fe:m=14;break e;case he:m=16,i=null;break e}throw Error(o(130,e==null?e:typeof e,""))}return t=Et(m,s,t,a),t.elementType=e,t.type=i,t.lanes=c,t}function Zn(e,t,s,i){return e=Et(7,e,i,t),e.lanes=s,e}function Xo(e,t,s,i){return e=Et(22,e,i,t),e.elementType=re,e.lanes=s,e.stateNode={isHidden:!1},e}function oa(e,t,s){return e=Et(6,e,null,t),e.lanes=s,e}function ia(e,t,s){return t=Et(4,e.children!==null?e.children:[],e.key,t),t.lanes=s,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function j0(e,t,s,i,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ii(0),this.expirationTimes=Ii(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ii(0),this.identifierPrefix=i,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function la(e,t,s,i,a,c,m,v,w){return e=new j0(e,t,s,v,w),t===1?(t=1,c===!0&&(t|=8)):t=0,c=Et(3,null,null,t),e.current=c,c.stateNode=e,c.memoizedState={element:i,isDehydrated:s,cache:null,transitions:null,pendingSuspenseBoundaries:null},xl(c),e}function N0(e,t,s){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Z,key:i==null?null:""+i,children:e,containerInfo:t,implementation:s}}function xf(e){if(!e)return yn;e=e._reactInternals;e:{if(zn(e)!==e||e.tag!==1)throw Error(o(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(pt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(o(171))}if(e.tag===1){var s=e.type;if(pt(s))return Xc(e,s,t)}return t}function wf(e,t,s,i,a,c,m,v,w){return e=la(s,i,!0,e,a,c,m,v,w),e.context=xf(null),s=e.current,i=at(),a=Tn(s),c=nn(i,a),c.callback=t??null,wn(s,c,a),e.current.lanes=a,Gr(e,a,i),_t(e,i),e}function $o(e,t,s,i){var a=t.current,c=at(),m=Tn(a);return s=xf(s),t.context===null?t.context=s:t.pendingContext=s,t=nn(c,m),t.payload={element:e},i=i===void 0?null:i,i!==null&&(t.callback=i),e=wn(a,t,m),e!==null&&(Vt(e,a,m,c),To(e,a,m)),m}function Ko(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Sf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var s=e.retryLane;e.retryLane=s!==0&&s<t?s:t}}function aa(e,t){Sf(e,t),(e=e.alternate)&&Sf(e,t)}function V0(){return null}var kf=typeof reportError=="function"?reportError:function(e){console.error(e)};function ua(e){this._internalRoot=e}Go.prototype.render=ua.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));$o(e,t,null,null)},Go.prototype.unmount=ua.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;$n(function(){$o(null,e,null,null)}),t[Zt]=null}};function Go(e){this._internalRoot=e}Go.prototype.unstable_scheduleHydration=function(e){if(e){var t=oc();e={blockedOn:null,target:e,priority:t};for(var s=0;s<pn.length&&t!==0&&t<pn[s].priority;s++);pn.splice(s,0,e),s===0&&ac(e)}};function ca(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Zo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function bf(){}function O0(e,t,s,i,a){if(a){if(typeof i=="function"){var c=i;i=function(){var M=Ko(m);c.call(M)}}var m=wf(t,i,e,0,null,!1,!1,"",bf);return e._reactRootContainer=m,e[Zt]=m.current,cs(e.nodeType===8?e.parentNode:e),$n(),m}for(;a=e.lastChild;)e.removeChild(a);if(typeof i=="function"){var v=i;i=function(){var M=Ko(w);v.call(M)}}var w=la(e,0,!1,null,null,!1,!1,"",bf);return e._reactRootContainer=w,e[Zt]=w.current,cs(e.nodeType===8?e.parentNode:e),$n(function(){$o(t,w,s,i)}),w}function Jo(e,t,s,i,a){var c=s._reactRootContainer;if(c){var m=c;if(typeof a=="function"){var v=a;a=function(){var w=Ko(m);v.call(w)}}$o(t,m,e,a)}else m=O0(s,t,e,a,i);return Ko(m)}rc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var s=Kr(t.pendingLanes);s!==0&&(Ai(t,s|1),_t(t,Oe()),(xe&6)===0&&(Cr=Oe()+500,vn()))}break;case 13:$n(function(){var i=tn(e,1);if(i!==null){var a=at();Vt(i,e,1,a)}}),aa(e,1)}},ji=function(e){if(e.tag===13){var t=tn(e,134217728);if(t!==null){var s=at();Vt(t,e,134217728,s)}aa(e,134217728)}},sc=function(e){if(e.tag===13){var t=Tn(e),s=tn(e,t);if(s!==null){var i=at();Vt(s,e,t,i)}aa(e,t)}},oc=function(){return be},ic=function(e,t){var s=be;try{return be=e,t()}finally{be=s}},Pi=function(e,t,s){switch(t){case"input":if(Yr(e,s),t=s.name,s.type==="radio"&&t!=null){for(s=e;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<s.length;t++){var i=s[t];if(i!==e&&i.form===e.form){var a=ho(i);if(!a)throw Error(o(90));jn(i),Yr(i,a)}}}break;case"textarea":Be(e,s);break;case"select":t=s.value,t!=null&&un(e,!!s.multiple,t,!1)}},Wu=ta,Hu=$n;var z0={usingClientEntryPoint:!1,Events:[ps,pr,ho,Uu,Yu,ta]},Ps={findFiberByHostInstance:Bn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},B0={bundleType:Ps.bundleType,version:Ps.version,rendererPackageName:Ps.rendererPackageName,rendererConfig:Ps.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:O.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ku(e),e===null?null:e.stateNode},findFiberByHostInstance:Ps.findFiberByHostInstance||V0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var qo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!qo.isDisabled&&qo.supportsFiber)try{Ks=qo.inject(B0),Ut=qo}catch{}}return gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=z0,gt.createPortal=function(e,t){var s=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ca(t))throw Error(o(200));return N0(e,t,null,s)},gt.createRoot=function(e,t){if(!ca(e))throw Error(o(299));var s=!1,i="",a=kf;return t!=null&&(t.unstable_strictMode===!0&&(s=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=la(e,1,!1,null,null,s,!1,i,a),e[Zt]=t.current,cs(e.nodeType===8?e.parentNode:e),new ua(t)},gt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=Ku(t),e=e===null?null:e.stateNode,e},gt.flushSync=function(e){return $n(e)},gt.hydrate=function(e,t,s){if(!Zo(t))throw Error(o(200));return Jo(null,e,t,!0,s)},gt.hydrateRoot=function(e,t,s){if(!ca(e))throw Error(o(405));var i=s!=null&&s.hydratedSources||null,a=!1,c="",m=kf;if(s!=null&&(s.unstable_strictMode===!0&&(a=!0),s.identifierPrefix!==void 0&&(c=s.identifierPrefix),s.onRecoverableError!==void 0&&(m=s.onRecoverableError)),t=wf(t,null,e,1,s??null,a,!1,c,m),e[Zt]=t.current,cs(e),i)for(e=0;e<i.length;e++)s=i[e],a=s._getVersion,a=a(s._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[s,a]:t.mutableSourceEagerHydrationData.push(s,a);return new Go(t)},gt.render=function(e,t,s){if(!Zo(t))throw Error(o(200));return Jo(null,e,t,!1,s)},gt.unmountComponentAtNode=function(e){if(!Zo(e))throw Error(o(40));return e._reactRootContainer?($n(function(){Jo(null,null,e,!1,function(){e._reactRootContainer=null,e[Zt]=null})}),!0):!1},gt.unstable_batchedUpdates=ta,gt.unstable_renderSubtreeIntoContainer=function(e,t,s,i){if(!Zo(s))throw Error(o(200));if(e==null||e._reactInternals===void 0)throw Error(o(38));return Jo(e,t,s,!1,i)},gt.version="18.3.1-next-f1338f8080-20240426",gt}var Lf;function sm(){if(Lf)return pa.exports;Lf=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(r){console.error(r)}}return n(),pa.exports=$0(),pa.exports}var If;function K0(){if(If)return ei;If=1;var n=sm();return ei.createRoot=n.createRoot,ei.hydrateRoot=n.hydrateRoot,ei}var G0=K0(),E=lu();const Z0=U0(E),js=E.createContext({});function au(n){const r=E.useRef(null);return r.current===null&&(r.current=n()),r.current}const J0=typeof window<"u",uu=J0?E.useLayoutEffect:E.useEffect,vi=E.createContext(null);function cu(n,r){n.indexOf(r)===-1&&n.push(r)}function di(n,r){const o=n.indexOf(r);o>-1&&n.splice(o,1)}const Kt=(n,r,o)=>o>r?r:o<n?n:o;let du=()=>{};const on={},om=n=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n);function im(n){return typeof n=="object"&&n!==null}const lm=n=>/^0[^.\s]+$/u.test(n);function am(n){let r;return()=>(r===void 0&&(r=n()),r)}const Rt=n=>n,q0=(n,r)=>o=>r(n(o)),Fs=(...n)=>n.reduce(q0),Ns=(n,r,o)=>{const l=r-n;return l===0?1:(o-n)/l};class fu{constructor(){this.subscriptions=[]}add(r){return cu(this.subscriptions,r),()=>di(this.subscriptions,r)}notify(r,o,l){const u=this.subscriptions.length;if(u)if(u===1)this.subscriptions[0](r,o,l);else for(let d=0;d<u;d++){const f=this.subscriptions[d];f&&f(r,o,l)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Bt=n=>n*1e3,Mt=n=>n/1e3;function um(n,r){return r?n*(1e3/r):0}const cm=(n,r,o)=>(((1-3*o+3*r)*n+(3*o-6*r))*n+3*r)*n,eg=1e-7,tg=12;function ng(n,r,o,l,u){let d,f,p=0;do f=r+(o-r)/2,d=cm(f,l,u)-n,d>0?o=f:r=f;while(Math.abs(d)>eg&&++p<tg);return f}function Us(n,r,o,l){if(n===r&&o===l)return Rt;const u=d=>ng(d,0,1,n,o);return d=>d===0||d===1?d:cm(u(d),r,l)}const dm=n=>r=>r<=.5?n(2*r)/2:(2-n(2*(1-r)))/2,fm=n=>r=>1-n(1-r),pm=Us(.33,1.53,.69,.99),pu=fm(pm),mm=dm(pu),hm=n=>(n*=2)<1?.5*pu(n):.5*(2-Math.pow(2,-10*(n-1))),mu=n=>1-Math.sin(Math.acos(n)),_m=fm(mu),gm=dm(mu),rg=Us(.42,0,1,1),sg=Us(0,0,.58,1),ym=Us(.42,0,.58,1),og=n=>Array.isArray(n)&&typeof n[0]!="number",vm=n=>Array.isArray(n)&&typeof n[0]=="number",ig={linear:Rt,easeIn:rg,easeInOut:ym,easeOut:sg,circIn:mu,circInOut:gm,circOut:_m,backIn:pu,backInOut:mm,backOut:pm,anticipate:hm},lg=n=>typeof n=="string",Af=n=>{if(vm(n)){du(n.length===4);const[r,o,l,u]=n;return Us(r,o,l,u)}else if(lg(n))return ig[n];return n},ti=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function ag(n,r){let o=new Set,l=new Set,u=!1,d=!1;const f=new WeakSet;let p={delta:0,timestamp:0,isProcessing:!1};function h(_){f.has(_)&&(g.schedule(_),n()),_(p)}const g={schedule:(_,y=!1,x=!1)=>{const S=x&&u?o:l;return y&&f.add(_),S.has(_)||S.add(_),_},cancel:_=>{l.delete(_),f.delete(_)},process:_=>{if(p=_,u){d=!0;return}u=!0,[o,l]=[l,o],o.forEach(h),o.clear(),u=!1,d&&(d=!1,g.process(_))}};return g}const ug=40;function xm(n,r){let o=!1,l=!0;const u={delta:0,timestamp:0,isProcessing:!1},d=()=>o=!0,f=ti.reduce((N,O)=>(N[O]=ag(d),N),{}),{setup:p,read:h,resolveKeyframes:g,preUpdate:_,update:y,preRender:x,render:T,postRender:S}=f,I=()=>{const N=on.useManualTiming?u.timestamp:performance.now();o=!1,on.useManualTiming||(u.delta=l?1e3/60:Math.max(Math.min(N-u.timestamp,ug),1)),u.timestamp=N,u.isProcessing=!0,p.process(u),h.process(u),g.process(u),_.process(u),y.process(u),x.process(u),T.process(u),S.process(u),u.isProcessing=!1,o&&r&&(l=!1,n(I))},D=()=>{o=!0,l=!0,u.isProcessing||n(I)};return{schedule:ti.reduce((N,O)=>{const W=f[O];return N[O]=(Z,X=!1,H=!1)=>(o||D(),W.schedule(Z,X,H)),N},{}),cancel:N=>{for(let O=0;O<ti.length;O++)f[ti[O]].cancel(N)},state:u,steps:f}}const{schedule:Pe,cancel:In,state:qe,steps:_a}=xm(typeof requestAnimationFrame<"u"?requestAnimationFrame:Rt,!0);let oi;function cg(){oi=void 0}const ut={now:()=>(oi===void 0&&ut.set(qe.isProcessing||on.useManualTiming?qe.timestamp:performance.now()),oi),set:n=>{oi=n,queueMicrotask(cg)}},wm=n=>r=>typeof r=="string"&&r.startsWith(n),Sm=wm("--"),dg=wm("var(--"),hu=n=>dg(n)?fg.test(n.split("/*")[0].trim()):!1,fg=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function jf(n){return typeof n!="string"?!1:n.split("/*")[0].includes("var(--")}const Or={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},Vs={...Or,transform:n=>Kt(0,1,n)},ni={...Or,default:1},Ds=n=>Math.round(n*1e5)/1e5,_u=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function pg(n){return n==null}const mg=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,gu=(n,r)=>o=>!!(typeof o=="string"&&mg.test(o)&&o.startsWith(n)||r&&!pg(o)&&Object.prototype.hasOwnProperty.call(o,r)),km=(n,r,o)=>l=>{if(typeof l!="string")return l;const[u,d,f,p]=l.match(_u);return{[n]:parseFloat(u),[r]:parseFloat(d),[o]:parseFloat(f),alpha:p!==void 0?parseFloat(p):1}},hg=n=>Kt(0,255,n),ga={...Or,transform:n=>Math.round(hg(n))},er={test:gu("rgb","red"),parse:km("red","green","blue"),transform:({red:n,green:r,blue:o,alpha:l=1})=>"rgba("+ga.transform(n)+", "+ga.transform(r)+", "+ga.transform(o)+", "+Ds(Vs.transform(l))+")"};function _g(n){let r="",o="",l="",u="";return n.length>5?(r=n.substring(1,3),o=n.substring(3,5),l=n.substring(5,7),u=n.substring(7,9)):(r=n.substring(1,2),o=n.substring(2,3),l=n.substring(3,4),u=n.substring(4,5),r+=r,o+=o,l+=l,u+=u),{red:parseInt(r,16),green:parseInt(o,16),blue:parseInt(l,16),alpha:u?parseInt(u,16)/255:1}}const Na={test:gu("#"),parse:_g,transform:er.transform},Ys=n=>({test:r=>typeof r=="string"&&r.endsWith(n)&&r.split(" ").length===1,parse:parseFloat,transform:r=>`${r}${n}`}),Rn=Ys("deg"),$t=Ys("%"),ee=Ys("px"),gg=Ys("vh"),yg=Ys("vw"),Nf={...$t,parse:n=>$t.parse(n)/100,transform:n=>$t.transform(n*100)},Rr={test:gu("hsl","hue"),parse:km("hue","saturation","lightness"),transform:({hue:n,saturation:r,lightness:o,alpha:l=1})=>"hsla("+Math.round(n)+", "+$t.transform(Ds(r))+", "+$t.transform(Ds(o))+", "+Ds(Vs.transform(l))+")"},Ue={test:n=>er.test(n)||Na.test(n)||Rr.test(n),parse:n=>er.test(n)?er.parse(n):Rr.test(n)?Rr.parse(n):Na.parse(n),transform:n=>typeof n=="string"?n:n.hasOwnProperty("red")?er.transform(n):Rr.transform(n),getAnimatableNone:n=>{const r=Ue.parse(n);return r.alpha=0,Ue.transform(r)}},vg=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function xg(n){var r,o;return isNaN(n)&&typeof n=="string"&&(((r=n.match(_u))==null?void 0:r.length)||0)+(((o=n.match(vg))==null?void 0:o.length)||0)>0}const bm="number",Tm="color",wg="var",Sg="var(",Vf="${}",kg=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Os(n){const r=n.toString(),o=[],l={color:[],number:[],var:[]},u=[];let d=0;const p=r.replace(kg,h=>(Ue.test(h)?(l.color.push(d),u.push(Tm),o.push(Ue.parse(h))):h.startsWith(Sg)?(l.var.push(d),u.push(wg),o.push(h)):(l.number.push(d),u.push(bm),o.push(parseFloat(h))),++d,Vf)).split(Vf);return{values:o,split:p,indexes:l,types:u}}function Cm(n){return Os(n).values}function Pm(n){const{split:r,types:o}=Os(n),l=r.length;return u=>{let d="";for(let f=0;f<l;f++)if(d+=r[f],u[f]!==void 0){const p=o[f];p===bm?d+=Ds(u[f]):p===Tm?d+=Ue.transform(u[f]):d+=u[f]}return d}}const bg=n=>typeof n=="number"?0:Ue.test(n)?Ue.getAnimatableNone(n):n;function Tg(n){const r=Cm(n);return Pm(n)(r.map(bg))}const Ft={test:xg,parse:Cm,createTransformer:Pm,getAnimatableNone:Tg};function ya(n,r,o){return o<0&&(o+=1),o>1&&(o-=1),o<1/6?n+(r-n)*6*o:o<1/2?r:o<2/3?n+(r-n)*(2/3-o)*6:n}function Cg({hue:n,saturation:r,lightness:o,alpha:l}){n/=360,r/=100,o/=100;let u=0,d=0,f=0;if(!r)u=d=f=o;else{const p=o<.5?o*(1+r):o+r-o*r,h=2*o-p;u=ya(h,p,n+1/3),d=ya(h,p,n),f=ya(h,p,n-1/3)}return{red:Math.round(u*255),green:Math.round(d*255),blue:Math.round(f*255),alpha:l}}function fi(n,r){return o=>o>0?r:n}const je=(n,r,o)=>n+(r-n)*o,va=(n,r,o)=>{const l=n*n,u=o*(r*r-l)+l;return u<0?0:Math.sqrt(u)},Pg=[Na,er,Rr],Eg=n=>Pg.find(r=>r.test(n));function Of(n){const r=Eg(n);if(!r)return!1;let o=r.parse(n);return r===Rr&&(o=Cg(o)),o}const zf=(n,r)=>{const o=Of(n),l=Of(r);if(!o||!l)return fi(n,r);const u={...o};return d=>(u.red=va(o.red,l.red,d),u.green=va(o.green,l.green,d),u.blue=va(o.blue,l.blue,d),u.alpha=je(o.alpha,l.alpha,d),er.transform(u))},Va=new Set(["none","hidden"]);function Mg(n,r){return Va.has(n)?o=>o<=0?n:r:o=>o>=1?r:n}function Rg(n,r){return o=>je(n,r,o)}function yu(n){return typeof n=="number"?Rg:typeof n=="string"?hu(n)?fi:Ue.test(n)?zf:Ig:Array.isArray(n)?Em:typeof n=="object"?Ue.test(n)?zf:Dg:fi}function Em(n,r){const o=[...n],l=o.length,u=n.map((d,f)=>yu(d)(d,r[f]));return d=>{for(let f=0;f<l;f++)o[f]=u[f](d);return o}}function Dg(n,r){const o={...n,...r},l={};for(const u in o)n[u]!==void 0&&r[u]!==void 0&&(l[u]=yu(n[u])(n[u],r[u]));return u=>{for(const d in l)o[d]=l[d](u);return o}}function Lg(n,r){const o=[],l={color:0,var:0,number:0};for(let u=0;u<r.values.length;u++){const d=r.types[u],f=n.indexes[d][l[d]],p=n.values[f]??0;o[u]=p,l[d]++}return o}const Ig=(n,r)=>{const o=Ft.createTransformer(r),l=Os(n),u=Os(r);return l.indexes.var.length===u.indexes.var.length&&l.indexes.color.length===u.indexes.color.length&&l.indexes.number.length>=u.indexes.number.length?Va.has(n)&&!u.values.length||Va.has(r)&&!l.values.length?Mg(n,r):Fs(Em(Lg(l,u),u.values),o):fi(n,r)};function Mm(n,r,o){return typeof n=="number"&&typeof r=="number"&&typeof o=="number"?je(n,r,o):yu(n)(n,r)}const Ag=n=>{const r=({timestamp:o})=>n(o);return{start:(o=!0)=>Pe.update(r,o),stop:()=>In(r),now:()=>qe.isProcessing?qe.timestamp:ut.now()}},Rm=(n,r,o=10)=>{let l="";const u=Math.max(Math.round(r/o),2);for(let d=0;d<u;d++)l+=Math.round(n(d/(u-1))*1e4)/1e4+", ";return`linear(${l.substring(0,l.length-2)})`},pi=2e4;function vu(n){let r=0;const o=50;let l=n.next(r);for(;!l.done&&r<pi;)r+=o,l=n.next(r);return r>=pi?1/0:r}function jg(n,r=100,o){const l=o({...n,keyframes:[0,r]}),u=Math.min(vu(l),pi);return{type:"keyframes",ease:d=>l.next(u*d).value/r,duration:Mt(u)}}const Ng=5;function Dm(n,r,o){const l=Math.max(r-Ng,0);return um(o-n(l),r-l)}const Ve={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},xa=.001;function Vg({duration:n=Ve.duration,bounce:r=Ve.bounce,velocity:o=Ve.velocity,mass:l=Ve.mass}){let u,d,f=1-r;f=Kt(Ve.minDamping,Ve.maxDamping,f),n=Kt(Ve.minDuration,Ve.maxDuration,Mt(n)),f<1?(u=g=>{const _=g*f,y=_*n,x=_-o,T=Oa(g,f),S=Math.exp(-y);return xa-x/T*S},d=g=>{const y=g*f*n,x=y*o+o,T=Math.pow(f,2)*Math.pow(g,2)*n,S=Math.exp(-y),I=Oa(Math.pow(g,2),f);return(-u(g)+xa>0?-1:1)*((x-T)*S)/I}):(u=g=>{const _=Math.exp(-g*n),y=(g-o)*n+1;return-xa+_*y},d=g=>{const _=Math.exp(-g*n),y=(o-g)*(n*n);return _*y});const p=5/n,h=zg(u,d,p);if(n=Bt(n),isNaN(h))return{stiffness:Ve.stiffness,damping:Ve.damping,duration:n};{const g=Math.pow(h,2)*l;return{stiffness:g,damping:f*2*Math.sqrt(l*g),duration:n}}}const Og=12;function zg(n,r,o){let l=o;for(let u=1;u<Og;u++)l=l-n(l)/r(l);return l}function Oa(n,r){return n*Math.sqrt(1-r*r)}const Bg=["duration","bounce"],Fg=["stiffness","damping","mass"];function Bf(n,r){return r.some(o=>n[o]!==void 0)}function Ug(n){let r={velocity:Ve.velocity,stiffness:Ve.stiffness,damping:Ve.damping,mass:Ve.mass,isResolvedFromDuration:!1,...n};if(!Bf(n,Fg)&&Bf(n,Bg))if(r.velocity=0,n.visualDuration){const o=n.visualDuration,l=2*Math.PI/(o*1.2),u=l*l,d=2*Kt(.05,1,1-(n.bounce||0))*Math.sqrt(u);r={...r,mass:Ve.mass,stiffness:u,damping:d}}else{const o=Vg({...n,velocity:0});r={...r,...o,mass:Ve.mass},r.isResolvedFromDuration=!0}return r}function mi(n=Ve.visualDuration,r=Ve.bounce){const o=typeof n!="object"?{visualDuration:n,keyframes:[0,1],bounce:r}:n;let{restSpeed:l,restDelta:u}=o;const d=o.keyframes[0],f=o.keyframes[o.keyframes.length-1],p={done:!1,value:d},{stiffness:h,damping:g,mass:_,duration:y,velocity:x,isResolvedFromDuration:T}=Ug({...o,velocity:-Mt(o.velocity||0)}),S=x||0,I=g/(2*Math.sqrt(h*_)),D=f-d,z=Mt(Math.sqrt(h/_)),j=Math.abs(D)<5;l||(l=j?Ve.restSpeed.granular:Ve.restSpeed.default),u||(u=j?Ve.restDelta.granular:Ve.restDelta.default);let N;if(I<1){const W=Oa(z,I);N=Z=>{const X=Math.exp(-I*z*Z);return f-X*((S+I*z*D)/W*Math.sin(W*Z)+D*Math.cos(W*Z))}}else if(I===1)N=W=>f-Math.exp(-z*W)*(D+(S+z*D)*W);else{const W=z*Math.sqrt(I*I-1);N=Z=>{const X=Math.exp(-I*z*Z),H=Math.min(W*Z,300);return f-X*((S+I*z*D)*Math.sinh(H)+W*D*Math.cosh(H))/W}}const O={calculatedDuration:T&&y||null,next:W=>{const Z=N(W);if(T)p.done=W>=y;else{let X=W===0?S:0;I<1&&(X=W===0?Bt(S):Dm(N,W,Z));const H=Math.abs(X)<=l,K=Math.abs(f-Z)<=u;p.done=H&&K}return p.value=p.done?f:Z,p},toString:()=>{const W=Math.min(vu(O),pi),Z=Rm(X=>O.next(W*X).value,W,30);return W+"ms "+Z},toTransition:()=>{}};return O}mi.applyToOptions=n=>{const r=jg(n,100,mi);return n.ease=r.ease,n.duration=Bt(r.duration),n.type="keyframes",n};function za({keyframes:n,velocity:r=0,power:o=.8,timeConstant:l=325,bounceDamping:u=10,bounceStiffness:d=500,modifyTarget:f,min:p,max:h,restDelta:g=.5,restSpeed:_}){const y=n[0],x={done:!1,value:y},T=H=>p!==void 0&&H<p||h!==void 0&&H>h,S=H=>p===void 0?h:h===void 0||Math.abs(p-H)<Math.abs(h-H)?p:h;let I=o*r;const D=y+I,z=f===void 0?D:f(D);z!==D&&(I=z-y);const j=H=>-I*Math.exp(-H/l),N=H=>z+j(H),O=H=>{const K=j(H),J=N(H);x.done=Math.abs(K)<=g,x.value=x.done?z:J};let W,Z;const X=H=>{T(x.value)&&(W=H,Z=mi({keyframes:[x.value,S(x.value)],velocity:Dm(N,H,x.value),damping:u,stiffness:d,restDelta:g,restSpeed:_}))};return X(0),{calculatedDuration:null,next:H=>{let K=!1;return!Z&&W===void 0&&(K=!0,O(H),X(H)),W!==void 0&&H>=W?Z.next(H-W):(!K&&O(H),x)}}}function Yg(n,r,o){const l=[],u=o||on.mix||Mm,d=n.length-1;for(let f=0;f<d;f++){let p=u(n[f],n[f+1]);if(r){const h=Array.isArray(r)?r[f]||Rt:r;p=Fs(h,p)}l.push(p)}return l}function Wg(n,r,{clamp:o=!0,ease:l,mixer:u}={}){const d=n.length;if(du(d===r.length),d===1)return()=>r[0];if(d===2&&r[0]===r[1])return()=>r[1];const f=n[0]===n[1];n[0]>n[d-1]&&(n=[...n].reverse(),r=[...r].reverse());const p=Yg(r,l,u),h=p.length,g=_=>{if(f&&_<n[0])return r[0];let y=0;if(h>1)for(;y<n.length-2&&!(_<n[y+1]);y++);const x=Ns(n[y],n[y+1],_);return p[y](x)};return o?_=>g(Kt(n[0],n[d-1],_)):g}function Hg(n,r){const o=n[n.length-1];for(let l=1;l<=r;l++){const u=Ns(0,r,l);n.push(je(o,1,u))}}function Qg(n){const r=[0];return Hg(r,n.length-1),r}function Xg(n,r){return n.map(o=>o*r)}function $g(n,r){return n.map(()=>r||ym).splice(0,n.length-1)}function Ls({duration:n=300,keyframes:r,times:o,ease:l="easeInOut"}){const u=og(l)?l.map(Af):Af(l),d={done:!1,value:r[0]},f=Xg(o&&o.length===r.length?o:Qg(r),n),p=Wg(f,r,{ease:Array.isArray(u)?u:$g(r,u)});return{calculatedDuration:n,next:h=>(d.value=p(h),d.done=h>=n,d)}}const Kg=n=>n!==null;function xu(n,{repeat:r,repeatType:o="loop"},l,u=1){const d=n.filter(Kg),p=u<0||r&&o!=="loop"&&r%2===1?0:d.length-1;return!p||l===void 0?d[p]:l}const Gg={decay:za,inertia:za,tween:Ls,keyframes:Ls,spring:mi};function Lm(n){typeof n.type=="string"&&(n.type=Gg[n.type])}class wu{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(r=>{this.resolve=r})}notifyFinished(){this.resolve()}then(r,o){return this.finished.then(r,o)}}const Zg=n=>n/100;class Su extends wu{constructor(r){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{var l,u;const{motionValue:o}=this.options;o&&o.updatedAt!==ut.now()&&this.tick(ut.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(u=(l=this.options).onStop)==null||u.call(l))},this.options=r,this.initAnimation(),this.play(),r.autoplay===!1&&this.pause()}initAnimation(){const{options:r}=this;Lm(r);const{type:o=Ls,repeat:l=0,repeatDelay:u=0,repeatType:d,velocity:f=0}=r;let{keyframes:p}=r;const h=o||Ls;h!==Ls&&typeof p[0]!="number"&&(this.mixKeyframes=Fs(Zg,Mm(p[0],p[1])),p=[0,100]);const g=h({...r,keyframes:p});d==="mirror"&&(this.mirroredGenerator=h({...r,keyframes:[...p].reverse(),velocity:-f})),g.calculatedDuration===null&&(g.calculatedDuration=vu(g));const{calculatedDuration:_}=g;this.calculatedDuration=_,this.resolvedDuration=_+u,this.totalDuration=this.resolvedDuration*(l+1)-u,this.generator=g}updateTime(r){const o=Math.round(r-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=o}tick(r,o=!1){const{generator:l,totalDuration:u,mixKeyframes:d,mirroredGenerator:f,resolvedDuration:p,calculatedDuration:h}=this;if(this.startTime===null)return l.next(0);const{delay:g=0,keyframes:_,repeat:y,repeatType:x,repeatDelay:T,type:S,onUpdate:I,finalKeyframe:D}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,r):this.speed<0&&(this.startTime=Math.min(r-u/this.speed,this.startTime)),o?this.currentTime=r:this.updateTime(r);const z=this.currentTime-g*(this.playbackSpeed>=0?1:-1),j=this.playbackSpeed>=0?z<0:z>u;this.currentTime=Math.max(z,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=u);let N=this.currentTime,O=l;if(y){const H=Math.min(this.currentTime,u)/p;let K=Math.floor(H),J=H%1;!J&&H>=1&&(J=1),J===1&&K--,K=Math.min(K,y+1),!!(K%2)&&(x==="reverse"?(J=1-J,T&&(J-=T/p)):x==="mirror"&&(O=f)),N=Kt(0,1,J)*p}const W=j?{done:!1,value:_[0]}:O.next(N);d&&(W.value=d(W.value));let{done:Z}=W;!j&&h!==null&&(Z=this.playbackSpeed>=0?this.currentTime>=u:this.currentTime<=0);const X=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&Z);return X&&S!==za&&(W.value=xu(_,this.options,D,this.speed)),I&&I(W.value),X&&this.finish(),W}then(r,o){return this.finished.then(r,o)}get duration(){return Mt(this.calculatedDuration)}get iterationDuration(){const{delay:r=0}=this.options||{};return this.duration+Mt(r)}get time(){return Mt(this.currentTime)}set time(r){var o;r=Bt(r),this.currentTime=r,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=r:this.driver&&(this.startTime=this.driver.now()-r/this.playbackSpeed),(o=this.driver)==null||o.start(!1)}get speed(){return this.playbackSpeed}set speed(r){this.updateTime(ut.now());const o=this.playbackSpeed!==r;this.playbackSpeed=r,o&&(this.time=Mt(this.currentTime))}play(){var u,d;if(this.isStopped)return;const{driver:r=Ag,startTime:o}=this.options;this.driver||(this.driver=r(f=>this.tick(f))),(d=(u=this.options).onPlay)==null||d.call(u);const l=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=l):this.holdTime!==null?this.startTime=l-this.holdTime:this.startTime||(this.startTime=o??l),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(ut.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var r,o;this.notifyFinished(),this.teardown(),this.state="finished",(o=(r=this.options).onComplete)==null||o.call(r)}cancel(){var r,o;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(o=(r=this.options).onCancel)==null||o.call(r)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(r){return this.startTime=0,this.tick(r,!0)}attachTimeline(r){var o;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(o=this.driver)==null||o.stop(),r.observe(this)}}function Jg(n){for(let r=1;r<n.length;r++)n[r]??(n[r]=n[r-1])}const tr=n=>n*180/Math.PI,Ba=n=>{const r=tr(Math.atan2(n[1],n[0]));return Fa(r)},qg={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:n=>(Math.abs(n[0])+Math.abs(n[3]))/2,rotate:Ba,rotateZ:Ba,skewX:n=>tr(Math.atan(n[1])),skewY:n=>tr(Math.atan(n[2])),skew:n=>(Math.abs(n[1])+Math.abs(n[2]))/2},Fa=n=>(n=n%360,n<0&&(n+=360),n),Ff=Ba,Uf=n=>Math.sqrt(n[0]*n[0]+n[1]*n[1]),Yf=n=>Math.sqrt(n[4]*n[4]+n[5]*n[5]),ey={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Uf,scaleY:Yf,scale:n=>(Uf(n)+Yf(n))/2,rotateX:n=>Fa(tr(Math.atan2(n[6],n[5]))),rotateY:n=>Fa(tr(Math.atan2(-n[2],n[0]))),rotateZ:Ff,rotate:Ff,skewX:n=>tr(Math.atan(n[4])),skewY:n=>tr(Math.atan(n[1])),skew:n=>(Math.abs(n[1])+Math.abs(n[4]))/2};function Ua(n){return n.includes("scale")?1:0}function Ya(n,r){if(!n||n==="none")return Ua(r);const o=n.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let l,u;if(o)l=ey,u=o;else{const p=n.match(/^matrix\(([-\d.e\s,]+)\)$/u);l=qg,u=p}if(!u)return Ua(r);const d=l[r],f=u[1].split(",").map(ny);return typeof d=="function"?d(f):f[d]}const ty=(n,r)=>{const{transform:o="none"}=getComputedStyle(n);return Ya(o,r)};function ny(n){return parseFloat(n.trim())}const zr=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Br=new Set(zr),Wf=n=>n===Or||n===ee,ry=new Set(["x","y","z"]),sy=zr.filter(n=>!ry.has(n));function oy(n){const r=[];return sy.forEach(o=>{const l=n.getValue(o);l!==void 0&&(r.push([o,l.get()]),l.set(o.startsWith("scale")?1:0))}),r}const Ln={width:({x:n},{paddingLeft:r="0",paddingRight:o="0"})=>n.max-n.min-parseFloat(r)-parseFloat(o),height:({y:n},{paddingTop:r="0",paddingBottom:o="0"})=>n.max-n.min-parseFloat(r)-parseFloat(o),top:(n,{top:r})=>parseFloat(r),left:(n,{left:r})=>parseFloat(r),bottom:({y:n},{top:r})=>parseFloat(r)+(n.max-n.min),right:({x:n},{left:r})=>parseFloat(r)+(n.max-n.min),x:(n,{transform:r})=>Ya(r,"x"),y:(n,{transform:r})=>Ya(r,"y")};Ln.translateX=Ln.x;Ln.translateY=Ln.y;const rr=new Set;let Wa=!1,Ha=!1,Qa=!1;function Im(){if(Ha){const n=Array.from(rr).filter(l=>l.needsMeasurement),r=new Set(n.map(l=>l.element)),o=new Map;r.forEach(l=>{const u=oy(l);u.length&&(o.set(l,u),l.render())}),n.forEach(l=>l.measureInitialState()),r.forEach(l=>{l.render();const u=o.get(l);u&&u.forEach(([d,f])=>{var p;(p=l.getValue(d))==null||p.set(f)})}),n.forEach(l=>l.measureEndState()),n.forEach(l=>{l.suspendedScrollY!==void 0&&window.scrollTo(0,l.suspendedScrollY)})}Ha=!1,Wa=!1,rr.forEach(n=>n.complete(Qa)),rr.clear()}function Am(){rr.forEach(n=>{n.readKeyframes(),n.needsMeasurement&&(Ha=!0)})}function iy(){Qa=!0,Am(),Im(),Qa=!1}class ku{constructor(r,o,l,u,d,f=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...r],this.onComplete=o,this.name=l,this.motionValue=u,this.element=d,this.isAsync=f}scheduleResolve(){this.state="scheduled",this.isAsync?(rr.add(this),Wa||(Wa=!0,Pe.read(Am),Pe.resolveKeyframes(Im))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:r,name:o,element:l,motionValue:u}=this;if(r[0]===null){const d=u==null?void 0:u.get(),f=r[r.length-1];if(d!==void 0)r[0]=d;else if(l&&o){const p=l.readValue(o,f);p!=null&&(r[0]=p)}r[0]===void 0&&(r[0]=f),u&&d===void 0&&u.set(r[0])}Jg(r)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(r=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,r),rr.delete(this)}cancel(){this.state==="scheduled"&&(rr.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const ly=n=>n.startsWith("--");function ay(n,r,o){ly(r)?n.style.setProperty(r,o):n.style[r]=o}const uy={};function jm(n,r){const o=am(n);return()=>uy[r]??o()}const cy=jm(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),Nm=jm(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Rs=([n,r,o,l])=>`cubic-bezier(${n}, ${r}, ${o}, ${l})`,Hf={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Rs([0,.65,.55,1]),circOut:Rs([.55,0,1,.45]),backIn:Rs([.31,.01,.66,-.59]),backOut:Rs([.33,1.53,.69,.99])};function Vm(n,r){if(n)return typeof n=="function"?Nm()?Rm(n,r):"ease-out":vm(n)?Rs(n):Array.isArray(n)?n.map(o=>Vm(o,r)||Hf.easeOut):Hf[n]}function dy(n,r,o,{delay:l=0,duration:u=300,repeat:d=0,repeatType:f="loop",ease:p="easeOut",times:h}={},g=void 0){const _={[r]:o};h&&(_.offset=h);const y=Vm(p,u);Array.isArray(y)&&(_.easing=y);const x={delay:l,duration:u,easing:Array.isArray(y)?"linear":y,fill:"both",iterations:d+1,direction:f==="reverse"?"alternate":"normal"};return g&&(x.pseudoElement=g),n.animate(_,x)}function Om(n){return typeof n=="function"&&"applyToOptions"in n}function fy({type:n,...r}){return Om(n)&&Nm()?n.applyToOptions(r):(r.duration??(r.duration=300),r.ease??(r.ease="easeOut"),r)}class zm extends wu{constructor(r){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!r)return;const{element:o,name:l,keyframes:u,pseudoElement:d,allowFlatten:f=!1,finalKeyframe:p,onComplete:h}=r;this.isPseudoElement=!!d,this.allowFlatten=f,this.options=r,du(typeof r.type!="string");const g=fy(r);this.animation=dy(o,l,u,g,d),g.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!d){const _=xu(u,this.options,p,this.speed);this.updateMotionValue&&this.updateMotionValue(_),ay(o,l,_),this.animation.cancel()}h==null||h(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var r,o;(o=(r=this.animation).finish)==null||o.call(r)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:r}=this;r==="idle"||r==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var o,l,u;const r=(o=this.options)==null?void 0:o.element;!this.isPseudoElement&&(r!=null&&r.isConnected)&&((u=(l=this.animation).commitStyles)==null||u.call(l))}get duration(){var o,l;const r=((l=(o=this.animation.effect)==null?void 0:o.getComputedTiming)==null?void 0:l.call(o).duration)||0;return Mt(Number(r))}get iterationDuration(){const{delay:r=0}=this.options||{};return this.duration+Mt(r)}get time(){return Mt(Number(this.animation.currentTime)||0)}set time(r){this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=Bt(r)}get speed(){return this.animation.playbackRate}set speed(r){r<0&&(this.finishedTime=null),this.animation.playbackRate=r}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(r){this.manualStartTime=this.animation.startTime=r}attachTimeline({timeline:r,rangeStart:o,rangeEnd:l,observe:u}){var d;return this.allowFlatten&&((d=this.animation.effect)==null||d.updateTiming({easing:"linear"})),this.animation.onfinish=null,r&&cy()?(this.animation.timeline=r,o&&(this.animation.rangeStart=o),l&&(this.animation.rangeEnd=l),Rt):u(this)}}const Bm={anticipate:hm,backInOut:mm,circInOut:gm};function py(n){return n in Bm}function my(n){typeof n.ease=="string"&&py(n.ease)&&(n.ease=Bm[n.ease])}const wa=10;class hy extends zm{constructor(r){my(r),Lm(r),super(r),r.startTime!==void 0&&(this.startTime=r.startTime),this.options=r}updateMotionValue(r){const{motionValue:o,onUpdate:l,onComplete:u,element:d,...f}=this.options;if(!o)return;if(r!==void 0){o.set(r);return}const p=new Su({...f,autoplay:!1}),h=Math.max(wa,ut.now()-this.startTime),g=Kt(0,wa,h-wa);o.setWithVelocity(p.sample(Math.max(0,h-g)).value,p.sample(h).value,g),p.stop()}}const Qf=(n,r)=>r==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&(Ft.test(n)||n==="0")&&!n.startsWith("url("));function _y(n){const r=n[0];if(n.length===1)return!0;for(let o=0;o<n.length;o++)if(n[o]!==r)return!0}function gy(n,r,o,l){const u=n[0];if(u===null)return!1;if(r==="display"||r==="visibility")return!0;const d=n[n.length-1],f=Qf(u,r),p=Qf(d,r);return!f||!p?!1:_y(n)||(o==="spring"||Om(o))&&l}function Xa(n){n.duration=0,n.type="keyframes"}const yy=new Set(["opacity","clipPath","filter","transform"]),vy=am(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function xy(n){var _;const{motionValue:r,name:o,repeatDelay:l,repeatType:u,damping:d,type:f}=n;if(!(((_=r==null?void 0:r.owner)==null?void 0:_.current)instanceof HTMLElement))return!1;const{onUpdate:h,transformTemplate:g}=r.owner.getProps();return vy()&&o&&yy.has(o)&&(o!=="transform"||!g)&&!h&&!l&&u!=="mirror"&&d!==0&&f!=="inertia"}const wy=40;class Sy extends wu{constructor({autoplay:r=!0,delay:o=0,type:l="keyframes",repeat:u=0,repeatDelay:d=0,repeatType:f="loop",keyframes:p,name:h,motionValue:g,element:_,...y}){var S;super(),this.stop=()=>{var I,D;this._animation&&(this._animation.stop(),(I=this.stopTimeline)==null||I.call(this)),(D=this.keyframeResolver)==null||D.cancel()},this.createdAt=ut.now();const x={autoplay:r,delay:o,type:l,repeat:u,repeatDelay:d,repeatType:f,name:h,motionValue:g,element:_,...y},T=(_==null?void 0:_.KeyframeResolver)||ku;this.keyframeResolver=new T(p,(I,D,z)=>this.onKeyframesResolved(I,D,x,!z),h,g,_),(S=this.keyframeResolver)==null||S.scheduleResolve()}onKeyframesResolved(r,o,l,u){var D,z;this.keyframeResolver=void 0;const{name:d,type:f,velocity:p,delay:h,isHandoff:g,onUpdate:_}=l;this.resolvedAt=ut.now(),gy(r,d,f,p)||((on.instantAnimations||!h)&&(_==null||_(xu(r,l,o))),r[0]=r[r.length-1],Xa(l),l.repeat=0);const x={startTime:u?this.resolvedAt?this.resolvedAt-this.createdAt>wy?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:o,...l,keyframes:r},T=!g&&xy(x),S=(z=(D=x.motionValue)==null?void 0:D.owner)==null?void 0:z.current,I=T?new hy({...x,element:S}):new Su(x);I.finished.then(()=>{this.notifyFinished()}).catch(Rt),this.pendingTimeline&&(this.stopTimeline=I.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=I}get finished(){return this._animation?this.animation.finished:this._finished}then(r,o){return this.finished.finally(r).then(()=>{})}get animation(){var r;return this._animation||((r=this.keyframeResolver)==null||r.resume(),iy()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(r){this.animation.time=r}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(r){this.animation.speed=r}get startTime(){return this.animation.startTime}attachTimeline(r){return this._animation?this.stopTimeline=this.animation.attachTimeline(r):this.pendingTimeline=r,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var r;this._animation&&this.animation.cancel(),(r=this.keyframeResolver)==null||r.cancel()}}function Fm(n,r,o,l=0,u=1){const d=Array.from(n).sort((g,_)=>g.sortNodePosition(_)).indexOf(r),f=n.size,p=(f-1)*l;return typeof o=="function"?o(d,f):u===1?d*l:p-d*l}const ky=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function by(n){const r=ky.exec(n);if(!r)return[,];const[,o,l,u]=r;return[`--${o??l}`,u]}function Um(n,r,o=1){const[l,u]=by(n);if(!l)return;const d=window.getComputedStyle(r).getPropertyValue(l);if(d){const f=d.trim();return om(f)?parseFloat(f):f}return hu(u)?Um(u,r,o+1):u}const Ty={type:"spring",stiffness:500,damping:25,restSpeed:10},Cy=n=>({type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restSpeed:10}),Py={type:"keyframes",duration:.8},Ey={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},My=(n,{keyframes:r})=>r.length>2?Py:Br.has(n)?n.startsWith("scale")?Cy(r[1]):Ty:Ey,Ry=n=>n!==null;function Dy(n,{repeat:r,repeatType:o="loop"},l){const u=n.filter(Ry),d=r&&o!=="loop"&&r%2===1?0:u.length-1;return u[d]}function Ym(n,r){if(n!=null&&n.inherit&&r){const{inherit:o,...l}=n;return{...r,...l}}return n}function bu(n,r){const o=(n==null?void 0:n[r])??(n==null?void 0:n.default)??n;return o!==n?Ym(o,n):o}function Ly({when:n,delay:r,delayChildren:o,staggerChildren:l,staggerDirection:u,repeat:d,repeatType:f,repeatDelay:p,from:h,elapsed:g,..._}){return!!Object.keys(_).length}const Tu=(n,r,o,l={},u,d)=>f=>{const p=bu(l,n)||{},h=p.delay||l.delay||0;let{elapsed:g=0}=l;g=g-Bt(h);const _={keyframes:Array.isArray(o)?o:[null,o],ease:"easeOut",velocity:r.getVelocity(),...p,delay:-g,onUpdate:x=>{r.set(x),p.onUpdate&&p.onUpdate(x)},onComplete:()=>{f(),p.onComplete&&p.onComplete()},name:n,motionValue:r,element:d?void 0:u};Ly(p)||Object.assign(_,My(n,_)),_.duration&&(_.duration=Bt(_.duration)),_.repeatDelay&&(_.repeatDelay=Bt(_.repeatDelay)),_.from!==void 0&&(_.keyframes[0]=_.from);let y=!1;if((_.type===!1||_.duration===0&&!_.repeatDelay)&&(Xa(_),_.delay===0&&(y=!0)),(on.instantAnimations||on.skipAnimations||u!=null&&u.shouldSkipAnimations)&&(y=!0,Xa(_),_.delay=0),_.allowFlatten=!p.type&&!p.ease,y&&!d&&r.get()!==void 0){const x=Dy(_.keyframes,p);if(x!==void 0){Pe.update(()=>{_.onUpdate(x),_.onComplete()});return}}return p.isSync?new Su(_):new Sy(_)};function Xf(n){const r=[{},{}];return n==null||n.values.forEach((o,l)=>{r[0][l]=o.get(),r[1][l]=o.getVelocity()}),r}function Cu(n,r,o,l){if(typeof r=="function"){const[u,d]=Xf(l);r=r(o!==void 0?o:n.custom,u,d)}if(typeof r=="string"&&(r=n.variants&&n.variants[r]),typeof r=="function"){const[u,d]=Xf(l);r=r(o!==void 0?o:n.custom,u,d)}return r}function jr(n,r,o){const l=n.getProps();return Cu(l,r,o!==void 0?o:l.custom,n)}const Wm=new Set(["width","height","top","left","right","bottom",...zr]),$f=30,Iy=n=>!isNaN(parseFloat(n));class Ay{constructor(r,o={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=l=>{var d;const u=ut.now();if(this.updatedAt!==u&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(l),this.current!==this.prev&&((d=this.events.change)==null||d.notify(this.current),this.dependents))for(const f of this.dependents)f.dirty()},this.hasAnimated=!1,this.setCurrent(r),this.owner=o.owner}setCurrent(r){this.current=r,this.updatedAt=ut.now(),this.canTrackVelocity===null&&r!==void 0&&(this.canTrackVelocity=Iy(this.current))}setPrevFrameValue(r=this.current){this.prevFrameValue=r,this.prevUpdatedAt=this.updatedAt}onChange(r){return this.on("change",r)}on(r,o){this.events[r]||(this.events[r]=new fu);const l=this.events[r].add(o);return r==="change"?()=>{l(),Pe.read(()=>{this.events.change.getSize()||this.stop()})}:l}clearListeners(){for(const r in this.events)this.events[r].clear()}attach(r,o){this.passiveEffect=r,this.stopPassiveEffect=o}set(r){this.passiveEffect?this.passiveEffect(r,this.updateAndNotify):this.updateAndNotify(r)}setWithVelocity(r,o,l){this.set(o),this.prev=void 0,this.prevFrameValue=r,this.prevUpdatedAt=this.updatedAt-l}jump(r,o=!0){this.updateAndNotify(r),this.prev=r,this.prevUpdatedAt=this.prevFrameValue=void 0,o&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var r;(r=this.events.change)==null||r.notify(this.current)}addDependent(r){this.dependents||(this.dependents=new Set),this.dependents.add(r)}removeDependent(r){this.dependents&&this.dependents.delete(r)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const r=ut.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||r-this.updatedAt>$f)return 0;const o=Math.min(this.updatedAt-this.prevUpdatedAt,$f);return um(parseFloat(this.current)-parseFloat(this.prevFrameValue),o)}start(r){return this.stop(),new Promise(o=>{this.hasAnimated=!0,this.animation=r(o),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var r,o;(r=this.dependents)==null||r.clear(),(o=this.events.destroy)==null||o.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Vr(n,r){return new Ay(n,r)}const $a=n=>Array.isArray(n);function jy(n,r,o){n.hasValue(r)?n.getValue(r).set(o):n.addValue(r,Vr(o))}function Ny(n){return $a(n)?n[n.length-1]||0:n}function Vy(n,r){const o=jr(n,r);let{transitionEnd:l={},transition:u={},...d}=o||{};d={...d,...l};for(const f in d){const p=Ny(d[f]);jy(n,f,p)}}const ot=n=>!!(n&&n.getVelocity);function Oy(n){return!!(ot(n)&&n.add)}function Ka(n,r){const o=n.getValue("willChange");if(Oy(o))return o.add(r);if(!o&&on.WillChange){const l=new on.WillChange("auto");n.addValue("willChange",l),l.add(r)}}function Pu(n){return n.replace(/([A-Z])/g,r=>`-${r.toLowerCase()}`)}const zy="framerAppearId",Hm="data-"+Pu(zy);function Qm(n){return n.props[Hm]}function By({protectedKeys:n,needsAnimating:r},o){const l=n.hasOwnProperty(o)&&r[o]!==!0;return r[o]=!1,l}function Xm(n,r,{delay:o=0,transitionOverride:l,type:u}={}){let{transition:d,transitionEnd:f,...p}=r;const h=n.getDefaultTransition();d=d?Ym(d,h):h;const g=d==null?void 0:d.reduceMotion;l&&(d=l);const _=[],y=u&&n.animationState&&n.animationState.getState()[u];for(const x in p){const T=n.getValue(x,n.latestValues[x]??null),S=p[x];if(S===void 0||y&&By(y,x))continue;const I={delay:o,...bu(d||{},x)},D=T.get();if(D!==void 0&&!T.isAnimating&&!Array.isArray(S)&&S===D&&!I.velocity)continue;let z=!1;if(window.MotionHandoffAnimation){const O=Qm(n);if(O){const W=window.MotionHandoffAnimation(O,x,Pe);W!==null&&(I.startTime=W,z=!0)}}Ka(n,x);const j=g??n.shouldReduceMotion;T.start(Tu(x,T,S,j&&Wm.has(x)?{type:!1}:I,n,z));const N=T.animation;N&&_.push(N)}if(f){const x=()=>Pe.update(()=>{f&&Vy(n,f)});_.length?Promise.all(_).then(x):x()}return _}function Ga(n,r,o={}){var h;const l=jr(n,r,o.type==="exit"?(h=n.presenceContext)==null?void 0:h.custom:void 0);let{transition:u=n.getDefaultTransition()||{}}=l||{};o.transitionOverride&&(u=o.transitionOverride);const d=l?()=>Promise.all(Xm(n,l,o)):()=>Promise.resolve(),f=n.variantChildren&&n.variantChildren.size?(g=0)=>{const{delayChildren:_=0,staggerChildren:y,staggerDirection:x}=u;return Fy(n,r,g,_,y,x,o)}:()=>Promise.resolve(),{when:p}=u;if(p){const[g,_]=p==="beforeChildren"?[d,f]:[f,d];return g().then(()=>_())}else return Promise.all([d(),f(o.delay)])}function Fy(n,r,o=0,l=0,u=0,d=1,f){const p=[];for(const h of n.variantChildren)h.notify("AnimationStart",r),p.push(Ga(h,r,{...f,delay:o+(typeof l=="function"?0:l)+Fm(n.variantChildren,h,l,u,d)}).then(()=>h.notify("AnimationComplete",r)));return Promise.all(p)}function Uy(n,r,o={}){n.notify("AnimationStart",r);let l;if(Array.isArray(r)){const u=r.map(d=>Ga(n,d,o));l=Promise.all(u)}else if(typeof r=="string")l=Ga(n,r,o);else{const u=typeof r=="function"?jr(n,r,o.custom):r;l=Promise.all(Xm(n,u,o))}return l.then(()=>{n.notify("AnimationComplete",r)})}const Yy={test:n=>n==="auto",parse:n=>n},$m=n=>r=>r.test(n),Km=[Or,ee,$t,Rn,yg,gg,Yy],Kf=n=>Km.find($m(n));function Wy(n){return typeof n=="number"?n===0:n!==null?n==="none"||n==="0"||lm(n):!0}const Hy=new Set(["brightness","contrast","saturate","opacity"]);function Qy(n){const[r,o]=n.slice(0,-1).split("(");if(r==="drop-shadow")return n;const[l]=o.match(_u)||[];if(!l)return n;const u=o.replace(l,"");let d=Hy.has(r)?1:0;return l!==o&&(d*=100),r+"("+d+u+")"}const Xy=/\b([a-z-]*)\(.*?\)/gu,Za={...Ft,getAnimatableNone:n=>{const r=n.match(Xy);return r?r.map(Qy).join(" "):n}},Ja={...Ft,getAnimatableNone:n=>{const r=Ft.parse(n);return Ft.createTransformer(n)(r.map(l=>typeof l=="number"?0:typeof l=="object"?{...l,alpha:1}:l))}},Gf={...Or,transform:Math.round},$y={rotate:Rn,rotateX:Rn,rotateY:Rn,rotateZ:Rn,scale:ni,scaleX:ni,scaleY:ni,scaleZ:ni,skew:Rn,skewX:Rn,skewY:Rn,distance:ee,translateX:ee,translateY:ee,translateZ:ee,x:ee,y:ee,z:ee,perspective:ee,transformPerspective:ee,opacity:Vs,originX:Nf,originY:Nf,originZ:ee},Eu={borderWidth:ee,borderTopWidth:ee,borderRightWidth:ee,borderBottomWidth:ee,borderLeftWidth:ee,borderRadius:ee,borderTopLeftRadius:ee,borderTopRightRadius:ee,borderBottomRightRadius:ee,borderBottomLeftRadius:ee,width:ee,maxWidth:ee,height:ee,maxHeight:ee,top:ee,right:ee,bottom:ee,left:ee,inset:ee,insetBlock:ee,insetBlockStart:ee,insetBlockEnd:ee,insetInline:ee,insetInlineStart:ee,insetInlineEnd:ee,padding:ee,paddingTop:ee,paddingRight:ee,paddingBottom:ee,paddingLeft:ee,paddingBlock:ee,paddingBlockStart:ee,paddingBlockEnd:ee,paddingInline:ee,paddingInlineStart:ee,paddingInlineEnd:ee,margin:ee,marginTop:ee,marginRight:ee,marginBottom:ee,marginLeft:ee,marginBlock:ee,marginBlockStart:ee,marginBlockEnd:ee,marginInline:ee,marginInlineStart:ee,marginInlineEnd:ee,fontSize:ee,backgroundPositionX:ee,backgroundPositionY:ee,...$y,zIndex:Gf,fillOpacity:Vs,strokeOpacity:Vs,numOctaves:Gf},Ky={...Eu,color:Ue,backgroundColor:Ue,outlineColor:Ue,fill:Ue,stroke:Ue,borderColor:Ue,borderTopColor:Ue,borderRightColor:Ue,borderBottomColor:Ue,borderLeftColor:Ue,filter:Za,WebkitFilter:Za,mask:Ja,WebkitMask:Ja},Gm=n=>Ky[n],Gy=new Set([Za,Ja]);function Zm(n,r){let o=Gm(n);return Gy.has(o)||(o=Ft),o.getAnimatableNone?o.getAnimatableNone(r):void 0}const Zy=new Set(["auto","none","0"]);function Jy(n,r,o){let l=0,u;for(;l<n.length&&!u;){const d=n[l];typeof d=="string"&&!Zy.has(d)&&Os(d).values.length&&(u=n[l]),l++}if(u&&o)for(const d of r)n[d]=Zm(o,u)}class qy extends ku{constructor(r,o,l,u,d){super(r,o,l,u,d,!0)}readKeyframes(){const{unresolvedKeyframes:r,element:o,name:l}=this;if(!o||!o.current)return;super.readKeyframes();for(let _=0;_<r.length;_++){let y=r[_];if(typeof y=="string"&&(y=y.trim(),hu(y))){const x=Um(y,o.current);x!==void 0&&(r[_]=x),_===r.length-1&&(this.finalKeyframe=y)}}if(this.resolveNoneKeyframes(),!Wm.has(l)||r.length!==2)return;const[u,d]=r,f=Kf(u),p=Kf(d),h=jf(u),g=jf(d);if(h!==g&&Ln[l]){this.needsMeasurement=!0;return}if(f!==p)if(Wf(f)&&Wf(p))for(let _=0;_<r.length;_++){const y=r[_];typeof y=="string"&&(r[_]=parseFloat(y))}else Ln[l]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:r,name:o}=this,l=[];for(let u=0;u<r.length;u++)(r[u]===null||Wy(r[u]))&&l.push(u);l.length&&Jy(r,l,o)}measureInitialState(){const{element:r,unresolvedKeyframes:o,name:l}=this;if(!r||!r.current)return;l==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Ln[l](r.measureViewportBox(),window.getComputedStyle(r.current)),o[0]=this.measuredOrigin;const u=o[o.length-1];u!==void 0&&r.getValue(l,u).jump(u,!1)}measureEndState(){var p;const{element:r,name:o,unresolvedKeyframes:l}=this;if(!r||!r.current)return;const u=r.getValue(o);u&&u.jump(this.measuredOrigin,!1);const d=l.length-1,f=l[d];l[d]=Ln[o](r.measureViewportBox(),window.getComputedStyle(r.current)),f!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=f),(p=this.removedTransforms)!=null&&p.length&&this.removedTransforms.forEach(([h,g])=>{r.getValue(h).set(g)}),this.resolveNoneKeyframes()}}const e1=new Set(["opacity","clipPath","filter","transform"]);function Jm(n,r,o){if(n==null)return[];if(n instanceof EventTarget)return[n];if(typeof n=="string"){let l=document;const u=(o==null?void 0:o[n])??l.querySelectorAll(n);return u?Array.from(u):[]}return Array.from(n).filter(l=>l!=null)}const qm=(n,r)=>r&&typeof n=="number"?r.transform(n):n;function qa(n){return im(n)&&"offsetHeight"in n}const{schedule:Mu}=xm(queueMicrotask,!1),zt={x:!1,y:!1};function eh(){return zt.x||zt.y}function t1(n){return n==="x"||n==="y"?zt[n]?null:(zt[n]=!0,()=>{zt[n]=!1}):zt.x||zt.y?null:(zt.x=zt.y=!0,()=>{zt.x=zt.y=!1})}function th(n,r){const o=Jm(n),l=new AbortController,u={passive:!0,...r,signal:l.signal};return[o,u,()=>l.abort()]}function n1(n){return!(n.pointerType==="touch"||eh())}function r1(n,r,o={}){const[l,u,d]=th(n,o);return l.forEach(f=>{let p=!1,h=!1,g;const _=()=>{f.removeEventListener("pointerleave",S)},y=D=>{g&&(g(D),g=void 0),_()},x=D=>{p=!1,window.removeEventListener("pointerup",x),window.removeEventListener("pointercancel",x),h&&(h=!1,y(D))},T=()=>{p=!0,window.addEventListener("pointerup",x,u),window.addEventListener("pointercancel",x,u)},S=D=>{if(D.pointerType!=="touch"){if(p){h=!0;return}y(D)}},I=D=>{if(!n1(D))return;h=!1;const z=r(f,D);typeof z=="function"&&(g=z,f.addEventListener("pointerleave",S,u))};f.addEventListener("pointerenter",I,u),f.addEventListener("pointerdown",T,u)}),d}const nh=(n,r)=>r?n===r?!0:nh(n,r.parentElement):!1,Ru=n=>n.pointerType==="mouse"?typeof n.button!="number"||n.button<=0:n.isPrimary!==!1,s1=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function o1(n){return s1.has(n.tagName)||n.isContentEditable===!0}const i1=new Set(["INPUT","SELECT","TEXTAREA"]);function l1(n){return i1.has(n.tagName)||n.isContentEditable===!0}const ii=new WeakSet;function Zf(n){return r=>{r.key==="Enter"&&n(r)}}function Sa(n,r){n.dispatchEvent(new PointerEvent("pointer"+r,{isPrimary:!0,bubbles:!0}))}const a1=(n,r)=>{const o=n.currentTarget;if(!o)return;const l=Zf(()=>{if(ii.has(o))return;Sa(o,"down");const u=Zf(()=>{Sa(o,"up")}),d=()=>Sa(o,"cancel");o.addEventListener("keyup",u,r),o.addEventListener("blur",d,r)});o.addEventListener("keydown",l,r),o.addEventListener("blur",()=>o.removeEventListener("keydown",l),r)};function Jf(n){return Ru(n)&&!eh()}const qf=new WeakSet;function u1(n,r,o={}){const[l,u,d]=th(n,o),f=p=>{const h=p.currentTarget;if(!Jf(p)||qf.has(p))return;ii.add(h),o.stopPropagation&&qf.add(p);const g=r(h,p),_=(T,S)=>{window.removeEventListener("pointerup",y),window.removeEventListener("pointercancel",x),ii.has(h)&&ii.delete(h),Jf(T)&&typeof g=="function"&&g(T,{success:S})},y=T=>{_(T,h===window||h===document||o.useGlobalTarget||nh(h,T.target))},x=T=>{_(T,!1)};window.addEventListener("pointerup",y,u),window.addEventListener("pointercancel",x,u)};return l.forEach(p=>{(o.useGlobalTarget?window:p).addEventListener("pointerdown",f,u),qa(p)&&(p.addEventListener("focus",g=>a1(g,u)),!o1(p)&&!p.hasAttribute("tabindex")&&(p.tabIndex=0))}),d}function Du(n){return im(n)&&"ownerSVGElement"in n}const li=new WeakMap;let Dn;const rh=(n,r,o)=>(l,u)=>u&&u[0]?u[0][n+"Size"]:Du(l)&&"getBBox"in l?l.getBBox()[r]:l[o],c1=rh("inline","width","offsetWidth"),d1=rh("block","height","offsetHeight");function f1({target:n,borderBoxSize:r}){var o;(o=li.get(n))==null||o.forEach(l=>{l(n,{get width(){return c1(n,r)},get height(){return d1(n,r)}})})}function p1(n){n.forEach(f1)}function m1(){typeof ResizeObserver>"u"||(Dn=new ResizeObserver(p1))}function h1(n,r){Dn||m1();const o=Jm(n);return o.forEach(l=>{let u=li.get(l);u||(u=new Set,li.set(l,u)),u.add(r),Dn==null||Dn.observe(l)}),()=>{o.forEach(l=>{const u=li.get(l);u==null||u.delete(r),u!=null&&u.size||Dn==null||Dn.unobserve(l)})}}const ai=new Set;let Dr;function _1(){Dr=()=>{const n={get width(){return window.innerWidth},get height(){return window.innerHeight}};ai.forEach(r=>r(n))},window.addEventListener("resize",Dr)}function g1(n){return ai.add(n),Dr||_1(),()=>{ai.delete(n),!ai.size&&typeof Dr=="function"&&(window.removeEventListener("resize",Dr),Dr=void 0)}}function ep(n,r){return typeof n=="function"?g1(n):h1(n,r)}function y1(n){return Du(n)&&n.tagName==="svg"}const v1=[...Km,Ue,Ft],x1=n=>v1.find($m(n)),tp=()=>({translate:0,scale:1,origin:0,originPoint:0}),Lr=()=>({x:tp(),y:tp()}),np=()=>({min:0,max:0}),He=()=>({x:np(),y:np()}),w1=new WeakMap;function xi(n){return n!==null&&typeof n=="object"&&typeof n.start=="function"}function zs(n){return typeof n=="string"||Array.isArray(n)}const Lu=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Iu=["initial",...Lu];function wi(n){return xi(n.animate)||Iu.some(r=>zs(n[r]))}function sh(n){return!!(wi(n)||n.variants)}function S1(n,r,o){for(const l in r){const u=r[l],d=o[l];if(ot(u))n.addValue(l,u);else if(ot(d))n.addValue(l,Vr(u,{owner:n}));else if(d!==u)if(n.hasValue(l)){const f=n.getValue(l);f.liveStyle===!0?f.jump(u):f.hasAnimated||f.set(u)}else{const f=n.getStaticValue(l);n.addValue(l,Vr(f!==void 0?f:u,{owner:n}))}}for(const l in o)r[l]===void 0&&n.removeValue(l);return r}const eu={current:null},oh={current:!1},k1=typeof window<"u";function b1(){if(oh.current=!0,!!k1)if(window.matchMedia){const n=window.matchMedia("(prefers-reduced-motion)"),r=()=>eu.current=n.matches;n.addEventListener("change",r),r()}else eu.current=!1}const rp=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let hi={};function ih(n){hi=n}function T1(){return hi}class C1{scrapeMotionValuesFromProps(r,o,l){return{}}constructor({parent:r,props:o,presenceContext:l,reducedMotionConfig:u,skipAnimations:d,blockInitialAnimation:f,visualState:p},h={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=ku,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const T=ut.now();this.renderScheduledAt<T&&(this.renderScheduledAt=T,Pe.render(this.render,!1,!0))};const{latestValues:g,renderState:_}=p;this.latestValues=g,this.baseTarget={...g},this.initialValues=o.initial?{...g}:{},this.renderState=_,this.parent=r,this.props=o,this.presenceContext=l,this.depth=r?r.depth+1:0,this.reducedMotionConfig=u,this.skipAnimationsConfig=d,this.options=h,this.blockInitialAnimation=!!f,this.isControllingVariants=wi(o),this.isVariantNode=sh(o),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(r&&r.current);const{willChange:y,...x}=this.scrapeMotionValuesFromProps(o,{},this);for(const T in x){const S=x[T];g[T]!==void 0&&ot(S)&&S.set(g[T])}}mount(r){var o,l;if(this.hasBeenMounted)for(const u in this.initialValues)(o=this.values.get(u))==null||o.jump(this.initialValues[u]),this.latestValues[u]=this.initialValues[u];this.current=r,w1.set(r,this),this.projection&&!this.projection.instance&&this.projection.mount(r),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((u,d)=>this.bindToMotionValue(d,u)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(oh.current||b1(),this.shouldReduceMotion=eu.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,(l=this.parent)==null||l.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){var r;this.projection&&this.projection.unmount(),In(this.notifyUpdate),In(this.render),this.valueSubscriptions.forEach(o=>o()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(r=this.parent)==null||r.removeChild(this);for(const o in this.events)this.events[o].clear();for(const o in this.features){const l=this.features[o];l&&(l.unmount(),l.isMounted=!1)}this.current=null}addChild(r){this.children.add(r),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(r)}removeChild(r){this.children.delete(r),this.enteringChildren&&this.enteringChildren.delete(r)}bindToMotionValue(r,o){if(this.valueSubscriptions.has(r)&&this.valueSubscriptions.get(r)(),o.accelerate&&e1.has(r)&&this.current instanceof HTMLElement){const{factory:f,keyframes:p,times:h,ease:g,duration:_}=o.accelerate,y=new zm({element:this.current,name:r,keyframes:p,times:h,ease:g,duration:Bt(_)}),x=f(y);this.valueSubscriptions.set(r,()=>{x(),y.cancel()});return}const l=Br.has(r);l&&this.onBindTransform&&this.onBindTransform();const u=o.on("change",f=>{this.latestValues[r]=f,this.props.onUpdate&&Pe.preRender(this.notifyUpdate),l&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let d;typeof window<"u"&&window.MotionCheckAppearSync&&(d=window.MotionCheckAppearSync(this,r,o)),this.valueSubscriptions.set(r,()=>{u(),d&&d(),o.owner&&o.stop()})}sortNodePosition(r){return!this.current||!this.sortInstanceNodePosition||this.type!==r.type?0:this.sortInstanceNodePosition(this.current,r.current)}updateFeatures(){let r="animation";for(r in hi){const o=hi[r];if(!o)continue;const{isEnabled:l,Feature:u}=o;if(!this.features[r]&&u&&l(this.props)&&(this.features[r]=new u(this)),this.features[r]){const d=this.features[r];d.isMounted?d.update():(d.mount(),d.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):He()}getStaticValue(r){return this.latestValues[r]}setStaticValue(r,o){this.latestValues[r]=o}update(r,o){(r.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=r,this.prevPresenceContext=this.presenceContext,this.presenceContext=o;for(let l=0;l<rp.length;l++){const u=rp[l];this.propEventSubscriptions[u]&&(this.propEventSubscriptions[u](),delete this.propEventSubscriptions[u]);const d="on"+u,f=r[d];f&&(this.propEventSubscriptions[u]=this.on(u,f))}this.prevMotionValues=S1(this,this.scrapeMotionValuesFromProps(r,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(r){return this.props.variants?this.props.variants[r]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(r){const o=this.getClosestVariantNode();if(o)return o.variantChildren&&o.variantChildren.add(r),()=>o.variantChildren.delete(r)}addValue(r,o){const l=this.values.get(r);o!==l&&(l&&this.removeValue(r),this.bindToMotionValue(r,o),this.values.set(r,o),this.latestValues[r]=o.get())}removeValue(r){this.values.delete(r);const o=this.valueSubscriptions.get(r);o&&(o(),this.valueSubscriptions.delete(r)),delete this.latestValues[r],this.removeValueFromRenderState(r,this.renderState)}hasValue(r){return this.values.has(r)}getValue(r,o){if(this.props.values&&this.props.values[r])return this.props.values[r];let l=this.values.get(r);return l===void 0&&o!==void 0&&(l=Vr(o===null?void 0:o,{owner:this}),this.addValue(r,l)),l}readValue(r,o){let l=this.latestValues[r]!==void 0||!this.current?this.latestValues[r]:this.getBaseTargetFromProps(this.props,r)??this.readValueFromInstance(this.current,r,this.options);return l!=null&&(typeof l=="string"&&(om(l)||lm(l))?l=parseFloat(l):!x1(l)&&Ft.test(o)&&(l=Zm(r,o)),this.setBaseTarget(r,ot(l)?l.get():l)),ot(l)?l.get():l}setBaseTarget(r,o){this.baseTarget[r]=o}getBaseTarget(r){var d;const{initial:o}=this.props;let l;if(typeof o=="string"||typeof o=="object"){const f=Cu(this.props,o,(d=this.presenceContext)==null?void 0:d.custom);f&&(l=f[r])}if(o&&l!==void 0)return l;const u=this.getBaseTargetFromProps(this.props,r);return u!==void 0&&!ot(u)?u:this.initialValues[r]!==void 0&&l===void 0?void 0:this.baseTarget[r]}on(r,o){return this.events[r]||(this.events[r]=new fu),this.events[r].add(o)}notify(r,...o){this.events[r]&&this.events[r].notify(...o)}scheduleRenderMicrotask(){Mu.render(this.render)}}class lh extends C1{constructor(){super(...arguments),this.KeyframeResolver=qy}sortInstanceNodePosition(r,o){return r.compareDocumentPosition(o)&2?1:-1}getBaseTargetFromProps(r,o){const l=r.style;return l?l[o]:void 0}removeValueFromRenderState(r,{vars:o,style:l}){delete o[r],delete l[r]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:r}=this.props;ot(r)&&(this.childSubscription=r.on("change",o=>{this.current&&(this.current.textContent=`${o}`)}))}}class An{constructor(r){this.isMounted=!1,this.node=r}update(){}}function ah({top:n,left:r,right:o,bottom:l}){return{x:{min:r,max:o},y:{min:n,max:l}}}function P1({x:n,y:r}){return{top:r.min,right:n.max,bottom:r.max,left:n.min}}function E1(n,r){if(!r)return n;const o=r({x:n.left,y:n.top}),l=r({x:n.right,y:n.bottom});return{top:o.y,left:o.x,bottom:l.y,right:l.x}}function ka(n){return n===void 0||n===1}function tu({scale:n,scaleX:r,scaleY:o}){return!ka(n)||!ka(r)||!ka(o)}function qn(n){return tu(n)||uh(n)||n.z||n.rotate||n.rotateX||n.rotateY||n.skewX||n.skewY}function uh(n){return sp(n.x)||sp(n.y)}function sp(n){return n&&n!=="0%"}function _i(n,r,o){const l=n-o,u=r*l;return o+u}function op(n,r,o,l,u){return u!==void 0&&(n=_i(n,u,l)),_i(n,o,l)+r}function nu(n,r=0,o=1,l,u){n.min=op(n.min,r,o,l,u),n.max=op(n.max,r,o,l,u)}function ch(n,{x:r,y:o}){nu(n.x,r.translate,r.scale,r.originPoint),nu(n.y,o.translate,o.scale,o.originPoint)}const ip=.999999999999,lp=1.0000000000001;function M1(n,r,o,l=!1){const u=o.length;if(!u)return;r.x=r.y=1;let d,f;for(let p=0;p<u;p++){d=o[p],f=d.projectionDelta;const{visualElement:h}=d.options;h&&h.props.style&&h.props.style.display==="contents"||(l&&d.options.layoutScroll&&d.scroll&&d!==d.root&&Ar(n,{x:-d.scroll.offset.x,y:-d.scroll.offset.y}),f&&(r.x*=f.x.scale,r.y*=f.y.scale,ch(n,f)),l&&qn(d.latestValues)&&Ar(n,d.latestValues))}r.x<lp&&r.x>ip&&(r.x=1),r.y<lp&&r.y>ip&&(r.y=1)}function Ir(n,r){n.min=n.min+r,n.max=n.max+r}function ap(n,r,o,l,u=.5){const d=je(n.min,n.max,u);nu(n,r,o,d,l)}function up(n,r){return typeof n=="string"?parseFloat(n)/100*(r.max-r.min):n}function Ar(n,r){ap(n.x,up(r.x,n.x),r.scaleX,r.scale,r.originX),ap(n.y,up(r.y,n.y),r.scaleY,r.scale,r.originY)}function dh(n,r){return ah(E1(n.getBoundingClientRect(),r))}function R1(n,r,o){const l=dh(n,o),{scroll:u}=r;return u&&(Ir(l.x,u.offset.x),Ir(l.y,u.offset.y)),l}const D1={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},L1=zr.length;function I1(n,r,o){let l="",u=!0;for(let d=0;d<L1;d++){const f=zr[d],p=n[f];if(p===void 0)continue;let h=!0;if(typeof p=="number")h=p===(f.startsWith("scale")?1:0);else{const g=parseFloat(p);h=f.startsWith("scale")?g===1:g===0}if(!h||o){const g=qm(p,Eu[f]);if(!h){u=!1;const _=D1[f]||f;l+=`${_}(${g}) `}o&&(r[f]=g)}}return l=l.trim(),o?l=o(r,u?"":l):u&&(l="none"),l}function Au(n,r,o){const{style:l,vars:u,transformOrigin:d}=n;let f=!1,p=!1;for(const h in r){const g=r[h];if(Br.has(h)){f=!0;continue}else if(Sm(h)){u[h]=g;continue}else{const _=qm(g,Eu[h]);h.startsWith("origin")?(p=!0,d[h]=_):l[h]=_}}if(r.transform||(f||o?l.transform=I1(r,n.transform,o):l.transform&&(l.transform="none")),p){const{originX:h="50%",originY:g="50%",originZ:_=0}=d;l.transformOrigin=`${h} ${g} ${_}`}}function fh(n,{style:r,vars:o},l,u){const d=n.style;let f;for(f in r)d[f]=r[f];u==null||u.applyProjectionStyles(d,l);for(f in o)d.setProperty(f,o[f])}function cp(n,r){return r.max===r.min?0:n/(r.max-r.min)*100}const Ms={correct:(n,r)=>{if(!r.target)return n;if(typeof n=="string")if(ee.test(n))n=parseFloat(n);else return n;const o=cp(n,r.target.x),l=cp(n,r.target.y);return`${o}% ${l}%`}},A1={correct:(n,{treeScale:r,projectionDelta:o})=>{const l=n,u=Ft.parse(n);if(u.length>5)return l;const d=Ft.createTransformer(n),f=typeof u[0]!="number"?1:0,p=o.x.scale*r.x,h=o.y.scale*r.y;u[0+f]/=p,u[1+f]/=h;const g=je(p,h,.5);return typeof u[2+f]=="number"&&(u[2+f]/=g),typeof u[3+f]=="number"&&(u[3+f]/=g),d(u)}},ru={borderRadius:{...Ms,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Ms,borderTopRightRadius:Ms,borderBottomLeftRadius:Ms,borderBottomRightRadius:Ms,boxShadow:A1};function ph(n,{layout:r,layoutId:o}){return Br.has(n)||n.startsWith("origin")||(r||o!==void 0)&&(!!ru[n]||n==="opacity")}function ju(n,r,o){var f;const l=n.style,u=r==null?void 0:r.style,d={};if(!l)return d;for(const p in l)(ot(l[p])||u&&ot(u[p])||ph(p,n)||((f=o==null?void 0:o.getValue(p))==null?void 0:f.liveStyle)!==void 0)&&(d[p]=l[p]);return d}function j1(n){return window.getComputedStyle(n)}class N1 extends lh{constructor(){super(...arguments),this.type="html",this.renderInstance=fh}readValueFromInstance(r,o){var l;if(Br.has(o))return(l=this.projection)!=null&&l.isProjecting?Ua(o):ty(r,o);{const u=j1(r),d=(Sm(o)?u.getPropertyValue(o):u[o])||0;return typeof d=="string"?d.trim():d}}measureInstanceViewportBox(r,{transformPagePoint:o}){return dh(r,o)}build(r,o,l){Au(r,o,l.transformTemplate)}scrapeMotionValuesFromProps(r,o,l){return ju(r,o,l)}}const V1={offset:"stroke-dashoffset",array:"stroke-dasharray"},O1={offset:"strokeDashoffset",array:"strokeDasharray"};function z1(n,r,o=1,l=0,u=!0){n.pathLength=1;const d=u?V1:O1;n[d.offset]=`${-l}`,n[d.array]=`${r} ${o}`}const B1=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function mh(n,{attrX:r,attrY:o,attrScale:l,pathLength:u,pathSpacing:d=1,pathOffset:f=0,...p},h,g,_){if(Au(n,p,g),h){n.style.viewBox&&(n.attrs.viewBox=n.style.viewBox);return}n.attrs=n.style,n.style={};const{attrs:y,style:x}=n;y.transform&&(x.transform=y.transform,delete y.transform),(x.transform||y.transformOrigin)&&(x.transformOrigin=y.transformOrigin??"50% 50%",delete y.transformOrigin),x.transform&&(x.transformBox=(_==null?void 0:_.transformBox)??"fill-box",delete y.transformBox);for(const T of B1)y[T]!==void 0&&(x[T]=y[T],delete y[T]);r!==void 0&&(y.x=r),o!==void 0&&(y.y=o),l!==void 0&&(y.scale=l),u!==void 0&&z1(y,u,d,f,!1)}const hh=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),_h=n=>typeof n=="string"&&n.toLowerCase()==="svg";function F1(n,r,o,l){fh(n,r,void 0,l);for(const u in r.attrs)n.setAttribute(hh.has(u)?u:Pu(u),r.attrs[u])}function gh(n,r,o){const l=ju(n,r,o);for(const u in n)if(ot(n[u])||ot(r[u])){const d=zr.indexOf(u)!==-1?"attr"+u.charAt(0).toUpperCase()+u.substring(1):u;l[d]=n[u]}return l}class U1 extends lh{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=He}getBaseTargetFromProps(r,o){return r[o]}readValueFromInstance(r,o){if(Br.has(o)){const l=Gm(o);return l&&l.default||0}return o=hh.has(o)?o:Pu(o),r.getAttribute(o)}scrapeMotionValuesFromProps(r,o,l){return gh(r,o,l)}build(r,o,l){mh(r,o,this.isSVGTag,l.transformTemplate,l.style)}renderInstance(r,o,l,u){F1(r,o,l,u)}mount(r){this.isSVGTag=_h(r.tagName),super.mount(r)}}const Y1=Iu.length;function yh(n){if(!n)return;if(!n.isControllingVariants){const o=n.parent?yh(n.parent)||{}:{};return n.props.initial!==void 0&&(o.initial=n.props.initial),o}const r={};for(let o=0;o<Y1;o++){const l=Iu[o],u=n.props[l];(zs(u)||u===!1)&&(r[l]=u)}return r}function vh(n,r){if(!Array.isArray(r))return!1;const o=r.length;if(o!==n.length)return!1;for(let l=0;l<o;l++)if(r[l]!==n[l])return!1;return!0}const W1=[...Lu].reverse(),H1=Lu.length;function Q1(n){return r=>Promise.all(r.map(({animation:o,options:l})=>Uy(n,o,l)))}function X1(n){let r=Q1(n),o=dp(),l=!0,u=!1;const d=g=>(_,y)=>{var T;const x=jr(n,y,g==="exit"?(T=n.presenceContext)==null?void 0:T.custom:void 0);if(x){const{transition:S,transitionEnd:I,...D}=x;_={..._,...D,...I}}return _};function f(g){r=g(n)}function p(g){const{props:_}=n,y=yh(n.parent)||{},x=[],T=new Set;let S={},I=1/0;for(let z=0;z<H1;z++){const j=W1[z],N=o[j],O=_[j]!==void 0?_[j]:y[j],W=zs(O),Z=j===g?N.isActive:null;Z===!1&&(I=z);let X=O===y[j]&&O!==_[j]&&W;if(X&&(l||u)&&n.manuallyAnimateOnMount&&(X=!1),N.protectedKeys={...S},!N.isActive&&Z===null||!O&&!N.prevProp||xi(O)||typeof O=="boolean")continue;if(j==="exit"&&N.isActive&&Z!==!0){N.prevResolvedValues&&(S={...S,...N.prevResolvedValues});continue}const H=$1(N.prevProp,O);let K=H||j===g&&N.isActive&&!X&&W||z>I&&W,J=!1;const ie=Array.isArray(O)?O:[O];let ue=ie.reduce(d(j),{});Z===!1&&(ue={});const{prevResolvedValues:ce={}}=N,me={...ce,...ue},fe=L=>{K=!0,T.has(L)&&(J=!0,T.delete(L)),N.needsAnimating[L]=!0;const V=n.getValue(L);V&&(V.liveStyle=!1)};for(const L in me){const V=ue[L],Y=ce[L];if(S.hasOwnProperty(L))continue;let k=!1;$a(V)&&$a(Y)?k=!vh(V,Y):k=V!==Y,k?V!=null?fe(L):T.add(L):V!==void 0&&T.has(L)?fe(L):N.protectedKeys[L]=!0}N.prevProp=O,N.prevResolvedValues=ue,N.isActive&&(S={...S,...ue}),(l||u)&&n.blockInitialAnimation&&(K=!1);const he=X&&H;K&&(!he||J)&&x.push(...ie.map(L=>{const V={type:j};if(typeof L=="string"&&(l||u)&&!he&&n.manuallyAnimateOnMount&&n.parent){const{parent:Y}=n,k=jr(Y,L);if(Y.enteringChildren&&k){const{delayChildren:A}=k.transition||{};V.delay=Fm(Y.enteringChildren,n,A)}}return{animation:L,options:V}}))}if(T.size){const z={};if(typeof _.initial!="boolean"){const j=jr(n,Array.isArray(_.initial)?_.initial[0]:_.initial);j&&j.transition&&(z.transition=j.transition)}T.forEach(j=>{const N=n.getBaseTarget(j),O=n.getValue(j);O&&(O.liveStyle=!0),z[j]=N??null}),x.push({animation:z})}let D=!!x.length;return l&&(_.initial===!1||_.initial===_.animate)&&!n.manuallyAnimateOnMount&&(D=!1),l=!1,u=!1,D?r(x):Promise.resolve()}function h(g,_){var x;if(o[g].isActive===_)return Promise.resolve();(x=n.variantChildren)==null||x.forEach(T=>{var S;return(S=T.animationState)==null?void 0:S.setActive(g,_)}),o[g].isActive=_;const y=p(g);for(const T in o)o[T].protectedKeys={};return y}return{animateChanges:p,setActive:h,setAnimateFunction:f,getState:()=>o,reset:()=>{o=dp(),u=!0}}}function $1(n,r){return typeof r=="string"?r!==n:Array.isArray(r)?!vh(r,n):!1}function Jn(n=!1){return{isActive:n,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function dp(){return{animate:Jn(!0),whileInView:Jn(),whileHover:Jn(),whileTap:Jn(),whileDrag:Jn(),whileFocus:Jn(),exit:Jn()}}function fp(n,r){n.min=r.min,n.max=r.max}function Ot(n,r){fp(n.x,r.x),fp(n.y,r.y)}function pp(n,r){n.translate=r.translate,n.scale=r.scale,n.originPoint=r.originPoint,n.origin=r.origin}const xh=1e-4,K1=1-xh,G1=1+xh,wh=.01,Z1=0-wh,J1=0+wh;function ct(n){return n.max-n.min}function q1(n,r,o){return Math.abs(n-r)<=o}function mp(n,r,o,l=.5){n.origin=l,n.originPoint=je(r.min,r.max,n.origin),n.scale=ct(o)/ct(r),n.translate=je(o.min,o.max,n.origin)-n.originPoint,(n.scale>=K1&&n.scale<=G1||isNaN(n.scale))&&(n.scale=1),(n.translate>=Z1&&n.translate<=J1||isNaN(n.translate))&&(n.translate=0)}function Is(n,r,o,l){mp(n.x,r.x,o.x,l?l.originX:void 0),mp(n.y,r.y,o.y,l?l.originY:void 0)}function hp(n,r,o){n.min=o.min+r.min,n.max=n.min+ct(r)}function ev(n,r,o){hp(n.x,r.x,o.x),hp(n.y,r.y,o.y)}function _p(n,r,o){n.min=r.min-o.min,n.max=n.min+ct(r)}function gi(n,r,o){_p(n.x,r.x,o.x),_p(n.y,r.y,o.y)}function gp(n,r,o,l,u){return n-=r,n=_i(n,1/o,l),u!==void 0&&(n=_i(n,1/u,l)),n}function tv(n,r=0,o=1,l=.5,u,d=n,f=n){if($t.test(r)&&(r=parseFloat(r),r=je(f.min,f.max,r/100)-f.min),typeof r!="number")return;let p=je(d.min,d.max,l);n===d&&(p-=r),n.min=gp(n.min,r,o,p,u),n.max=gp(n.max,r,o,p,u)}function yp(n,r,[o,l,u],d,f){tv(n,r[o],r[l],r[u],r.scale,d,f)}const nv=["x","scaleX","originX"],rv=["y","scaleY","originY"];function vp(n,r,o,l){yp(n.x,r,nv,o?o.x:void 0,l?l.x:void 0),yp(n.y,r,rv,o?o.y:void 0,l?l.y:void 0)}function xp(n){return n.translate===0&&n.scale===1}function Sh(n){return xp(n.x)&&xp(n.y)}function wp(n,r){return n.min===r.min&&n.max===r.max}function sv(n,r){return wp(n.x,r.x)&&wp(n.y,r.y)}function Sp(n,r){return Math.round(n.min)===Math.round(r.min)&&Math.round(n.max)===Math.round(r.max)}function kh(n,r){return Sp(n.x,r.x)&&Sp(n.y,r.y)}function kp(n){return ct(n.x)/ct(n.y)}function bp(n,r){return n.translate===r.translate&&n.scale===r.scale&&n.originPoint===r.originPoint}function Xt(n){return[n("x"),n("y")]}function ov(n,r,o){let l="";const u=n.x.translate/r.x,d=n.y.translate/r.y,f=(o==null?void 0:o.z)||0;if((u||d||f)&&(l=`translate3d(${u}px, ${d}px, ${f}px) `),(r.x!==1||r.y!==1)&&(l+=`scale(${1/r.x}, ${1/r.y}) `),o){const{transformPerspective:g,rotate:_,rotateX:y,rotateY:x,skewX:T,skewY:S}=o;g&&(l=`perspective(${g}px) ${l}`),_&&(l+=`rotate(${_}deg) `),y&&(l+=`rotateX(${y}deg) `),x&&(l+=`rotateY(${x}deg) `),T&&(l+=`skewX(${T}deg) `),S&&(l+=`skewY(${S}deg) `)}const p=n.x.scale*r.x,h=n.y.scale*r.y;return(p!==1||h!==1)&&(l+=`scale(${p}, ${h})`),l||"none"}const bh=["TopLeft","TopRight","BottomLeft","BottomRight"],iv=bh.length,Tp=n=>typeof n=="string"?parseFloat(n):n,Cp=n=>typeof n=="number"||ee.test(n);function lv(n,r,o,l,u,d){u?(n.opacity=je(0,o.opacity??1,av(l)),n.opacityExit=je(r.opacity??1,0,uv(l))):d&&(n.opacity=je(r.opacity??1,o.opacity??1,l));for(let f=0;f<iv;f++){const p=`border${bh[f]}Radius`;let h=Pp(r,p),g=Pp(o,p);if(h===void 0&&g===void 0)continue;h||(h=0),g||(g=0),h===0||g===0||Cp(h)===Cp(g)?(n[p]=Math.max(je(Tp(h),Tp(g),l),0),($t.test(g)||$t.test(h))&&(n[p]+="%")):n[p]=g}(r.rotate||o.rotate)&&(n.rotate=je(r.rotate||0,o.rotate||0,l))}function Pp(n,r){return n[r]!==void 0?n[r]:n.borderRadius}const av=Th(0,.5,_m),uv=Th(.5,.95,Rt);function Th(n,r,o){return l=>l<n?0:l>r?1:o(Ns(n,r,l))}function cv(n,r,o){const l=ot(n)?n:Vr(n);return l.start(Tu("",l,r,o)),l.animation}function Bs(n,r,o,l={passive:!0}){return n.addEventListener(r,o,l),()=>n.removeEventListener(r,o)}const dv=(n,r)=>n.depth-r.depth;class fv{constructor(){this.children=[],this.isDirty=!1}add(r){cu(this.children,r),this.isDirty=!0}remove(r){di(this.children,r),this.isDirty=!0}forEach(r){this.isDirty&&this.children.sort(dv),this.isDirty=!1,this.children.forEach(r)}}function pv(n,r){const o=ut.now(),l=({timestamp:u})=>{const d=u-o;d>=r&&(In(l),n(d-r))};return Pe.setup(l,!0),()=>In(l)}function ui(n){return ot(n)?n.get():n}class mv{constructor(){this.members=[]}add(r){cu(this.members,r);for(let o=this.members.length-1;o>=0;o--){const l=this.members[o];if(l===r||l===this.lead||l===this.prevLead)continue;const u=l.instance;(!u||u.isConnected===!1)&&!l.snapshot&&(di(this.members,l),l.unmount())}r.scheduleRender()}remove(r){if(di(this.members,r),r===this.prevLead&&(this.prevLead=void 0),r===this.lead){const o=this.members[this.members.length-1];o&&this.promote(o)}}relegate(r){var o;for(let l=this.members.indexOf(r)-1;l>=0;l--){const u=this.members[l];if(u.isPresent!==!1&&((o=u.instance)==null?void 0:o.isConnected)!==!1)return this.promote(u),!0}return!1}promote(r,o){var u;const l=this.lead;if(r!==l&&(this.prevLead=l,this.lead=r,r.show(),l)){l.updateSnapshot(),r.scheduleRender();const{layoutDependency:d}=l.options,{layoutDependency:f}=r.options;(d===void 0||d!==f)&&(r.resumeFrom=l,o&&(l.preserveOpacity=!0),l.snapshot&&(r.snapshot=l.snapshot,r.snapshot.latestValues=l.animationValues||l.latestValues),(u=r.root)!=null&&u.isUpdating&&(r.isLayoutDirty=!0)),r.options.crossfade===!1&&l.hide()}}exitAnimationComplete(){this.members.forEach(r=>{var o,l,u,d,f;(l=(o=r.options).onExitComplete)==null||l.call(o),(f=(u=r.resumingFrom)==null?void 0:(d=u.options).onExitComplete)==null||f.call(d)})}scheduleRender(){this.members.forEach(r=>r.instance&&r.scheduleRender(!1))}removeLeadSnapshot(){var r;(r=this.lead)!=null&&r.snapshot&&(this.lead.snapshot=void 0)}}const ci={hasAnimatedSinceResize:!0,hasEverUpdated:!1},ba=["","X","Y","Z"],hv=1e3;let _v=0;function Ta(n,r,o,l){const{latestValues:u}=r;u[n]&&(o[n]=u[n],r.setStaticValue(n,0),l&&(l[n]=0))}function Ch(n){if(n.hasCheckedOptimisedAppear=!0,n.root===n)return;const{visualElement:r}=n.options;if(!r)return;const o=Qm(r);if(window.MotionHasOptimisedAnimation(o,"transform")){const{layout:u,layoutId:d}=n.options;window.MotionCancelOptimisedAnimation(o,"transform",Pe,!(u||d))}const{parent:l}=n;l&&!l.hasCheckedOptimisedAppear&&Ch(l)}function Ph({attachResizeListener:n,defaultParent:r,measureScroll:o,checkIsScrollRoot:l,resetTransform:u}){return class{constructor(f={},p=r==null?void 0:r()){this.id=_v++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(vv),this.nodes.forEach(kv),this.nodes.forEach(bv),this.nodes.forEach(xv)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=f,this.root=p?p.root||p:this,this.path=p?[...p.path,p]:[],this.parent=p,this.depth=p?p.depth+1:0;for(let h=0;h<this.path.length;h++)this.path[h].shouldResetTransform=!0;this.root===this&&(this.nodes=new fv)}addEventListener(f,p){return this.eventHandlers.has(f)||this.eventHandlers.set(f,new fu),this.eventHandlers.get(f).add(p)}notifyListeners(f,...p){const h=this.eventHandlers.get(f);h&&h.notify(...p)}hasListeners(f){return this.eventHandlers.has(f)}mount(f){if(this.instance)return;this.isSVG=Du(f)&&!y1(f),this.instance=f;const{layoutId:p,layout:h,visualElement:g}=this.options;if(g&&!g.current&&g.mount(f),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(h||p)&&(this.isLayoutDirty=!0),n){let _,y=0;const x=()=>this.root.updateBlockedByResize=!1;Pe.read(()=>{y=window.innerWidth}),n(f,()=>{const T=window.innerWidth;T!==y&&(y=T,this.root.updateBlockedByResize=!0,_&&_(),_=pv(x,250),ci.hasAnimatedSinceResize&&(ci.hasAnimatedSinceResize=!1,this.nodes.forEach(Rp)))})}p&&this.root.registerSharedNode(p,this),this.options.animate!==!1&&g&&(p||h)&&this.addEventListener("didUpdate",({delta:_,hasLayoutChanged:y,hasRelativeLayoutChanged:x,layout:T})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const S=this.options.transition||g.getDefaultTransition()||Mv,{onLayoutAnimationStart:I,onLayoutAnimationComplete:D}=g.getProps(),z=!this.targetLayout||!kh(this.targetLayout,T),j=!y&&x;if(this.options.layoutRoot||this.resumeFrom||j||y&&(z||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const N={...bu(S,"layout"),onPlay:I,onComplete:D};(g.shouldReduceMotion||this.options.layoutRoot)&&(N.delay=0,N.type=!1),this.startAnimation(N),this.setAnimationOrigin(_,j)}else y||Rp(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=T})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const f=this.getStack();f&&f.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),In(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(Tv),this.animationId++)}getTransformTemplate(){const{visualElement:f}=this.options;return f&&f.getProps().transformTemplate}willUpdate(f=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Ch(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let _=0;_<this.path.length;_++){const y=this.path[_];y.shouldResetTransform=!0,y.updateScroll("snapshot"),y.options.layoutRoot&&y.willUpdate(!1)}const{layoutId:p,layout:h}=this.options;if(p===void 0&&!h)return;const g=this.getTransformTemplate();this.prevTransformTemplateValue=g?g(this.latestValues,""):void 0,this.updateSnapshot(),f&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Ep);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(Mp);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(Sv),this.nodes.forEach(gv),this.nodes.forEach(yv)):this.nodes.forEach(Mp),this.clearAllSnapshots();const p=ut.now();qe.delta=Kt(0,1e3/60,p-qe.timestamp),qe.timestamp=p,qe.isProcessing=!0,_a.update.process(qe),_a.preRender.process(qe),_a.render.process(qe),qe.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Mu.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(wv),this.sharedNodes.forEach(Cv)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Pe.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Pe.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!ct(this.snapshot.measuredBox.x)&&!ct(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let h=0;h<this.path.length;h++)this.path[h].updateScroll();const f=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected=He(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:p}=this.options;p&&p.notify("LayoutMeasure",this.layout.layoutBox,f?f.layoutBox:void 0)}updateScroll(f="measure"){let p=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===f&&(p=!1),p&&this.instance){const h=l(this.instance);this.scroll={animationId:this.root.animationId,phase:f,isRoot:h,offset:o(this.instance),wasRoot:this.scroll?this.scroll.isRoot:h}}}resetTransform(){if(!u)return;const f=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,p=this.projectionDelta&&!Sh(this.projectionDelta),h=this.getTransformTemplate(),g=h?h(this.latestValues,""):void 0,_=g!==this.prevTransformTemplateValue;f&&this.instance&&(p||qn(this.latestValues)||_)&&(u(this.instance,g),this.shouldResetTransform=!1,this.scheduleRender())}measure(f=!0){const p=this.measurePageBox();let h=this.removeElementScroll(p);return f&&(h=this.removeTransform(h)),Rv(h),{animationId:this.root.animationId,measuredBox:p,layoutBox:h,latestValues:{},source:this.id}}measurePageBox(){var g;const{visualElement:f}=this.options;if(!f)return He();const p=f.measureViewportBox();if(!(((g=this.scroll)==null?void 0:g.wasRoot)||this.path.some(Dv))){const{scroll:_}=this.root;_&&(Ir(p.x,_.offset.x),Ir(p.y,_.offset.y))}return p}removeElementScroll(f){var h;const p=He();if(Ot(p,f),(h=this.scroll)!=null&&h.wasRoot)return p;for(let g=0;g<this.path.length;g++){const _=this.path[g],{scroll:y,options:x}=_;_!==this.root&&y&&x.layoutScroll&&(y.wasRoot&&Ot(p,f),Ir(p.x,y.offset.x),Ir(p.y,y.offset.y))}return p}applyTransform(f,p=!1){const h=He();Ot(h,f);for(let g=0;g<this.path.length;g++){const _=this.path[g];!p&&_.options.layoutScroll&&_.scroll&&_!==_.root&&Ar(h,{x:-_.scroll.offset.x,y:-_.scroll.offset.y}),qn(_.latestValues)&&Ar(h,_.latestValues)}return qn(this.latestValues)&&Ar(h,this.latestValues),h}removeTransform(f){const p=He();Ot(p,f);for(let h=0;h<this.path.length;h++){const g=this.path[h];if(!g.instance||!qn(g.latestValues))continue;tu(g.latestValues)&&g.updateSnapshot();const _=He(),y=g.measurePageBox();Ot(_,y),vp(p,g.latestValues,g.snapshot?g.snapshot.layoutBox:void 0,_)}return qn(this.latestValues)&&vp(p,this.latestValues),p}setTargetDelta(f){this.targetDelta=f,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(f){this.options={...this.options,...f,crossfade:f.crossfade!==void 0?f.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==qe.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(f=!1){var T;const p=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=p.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=p.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=p.isSharedProjectionDirty);const h=!!this.resumingFrom||this!==p;if(!(f||h&&this.isSharedProjectionDirty||this.isProjectionDirty||(T=this.parent)!=null&&T.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:_,layoutId:y}=this.options;if(!this.layout||!(_||y))return;this.resolvedRelativeTargetAt=qe.timestamp;const x=this.getClosestProjectingParent();x&&this.linkedParentVersion!==x.layoutVersion&&!x.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(x&&x.layout?this.createRelativeTarget(x,this.layout.layoutBox,x.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=He(),this.targetWithTransforms=He()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),ev(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Ot(this.target,this.layout.layoutBox),ch(this.target,this.targetDelta)):Ot(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,x&&!!x.resumingFrom==!!this.resumingFrom&&!x.options.layoutScroll&&x.target&&this.animationProgress!==1?this.createRelativeTarget(x,this.target,x.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||tu(this.parent.latestValues)||uh(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(f,p,h){this.relativeParent=f,this.linkedParentVersion=f.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=He(),this.relativeTargetOrigin=He(),gi(this.relativeTargetOrigin,p,h),Ot(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var S;const f=this.getLead(),p=!!this.resumingFrom||this!==f;let h=!0;if((this.isProjectionDirty||(S=this.parent)!=null&&S.isProjectionDirty)&&(h=!1),p&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(h=!1),this.resolvedRelativeTargetAt===qe.timestamp&&(h=!1),h)return;const{layout:g,layoutId:_}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(g||_))return;Ot(this.layoutCorrected,this.layout.layoutBox);const y=this.treeScale.x,x=this.treeScale.y;M1(this.layoutCorrected,this.treeScale,this.path,p),f.layout&&!f.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(f.target=f.layout.layoutBox,f.targetWithTransforms=He());const{target:T}=f;if(!T){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(pp(this.prevProjectionDelta.x,this.projectionDelta.x),pp(this.prevProjectionDelta.y,this.projectionDelta.y)),Is(this.projectionDelta,this.layoutCorrected,T,this.latestValues),(this.treeScale.x!==y||this.treeScale.y!==x||!bp(this.projectionDelta.x,this.prevProjectionDelta.x)||!bp(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",T))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(f=!0){var p;if((p=this.options.visualElement)==null||p.scheduleRender(),f){const h=this.getStack();h&&h.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Lr(),this.projectionDelta=Lr(),this.projectionDeltaWithTransform=Lr()}setAnimationOrigin(f,p=!1){const h=this.snapshot,g=h?h.latestValues:{},_={...this.latestValues},y=Lr();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!p;const x=He(),T=h?h.source:void 0,S=this.layout?this.layout.source:void 0,I=T!==S,D=this.getStack(),z=!D||D.members.length<=1,j=!!(I&&!z&&this.options.crossfade===!0&&!this.path.some(Ev));this.animationProgress=0;let N;this.mixTargetDelta=O=>{const W=O/1e3;Dp(y.x,f.x,W),Dp(y.y,f.y,W),this.setTargetDelta(y),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(gi(x,this.layout.layoutBox,this.relativeParent.layout.layoutBox),Pv(this.relativeTarget,this.relativeTargetOrigin,x,W),N&&sv(this.relativeTarget,N)&&(this.isProjectionDirty=!1),N||(N=He()),Ot(N,this.relativeTarget)),I&&(this.animationValues=_,lv(_,g,this.latestValues,W,j,z)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=W},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(f){var p,h,g;this.notifyListeners("animationStart"),(p=this.currentAnimation)==null||p.stop(),(g=(h=this.resumingFrom)==null?void 0:h.currentAnimation)==null||g.stop(),this.pendingAnimation&&(In(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Pe.update(()=>{ci.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=Vr(0)),this.motionValue.jump(0,!1),this.currentAnimation=cv(this.motionValue,[0,1e3],{...f,velocity:0,isSync:!0,onUpdate:_=>{this.mixTargetDelta(_),f.onUpdate&&f.onUpdate(_)},onStop:()=>{},onComplete:()=>{f.onComplete&&f.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const f=this.getStack();f&&f.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(hv),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const f=this.getLead();let{targetWithTransforms:p,target:h,layout:g,latestValues:_}=f;if(!(!p||!h||!g)){if(this!==f&&this.layout&&g&&Eh(this.options.animationType,this.layout.layoutBox,g.layoutBox)){h=this.target||He();const y=ct(this.layout.layoutBox.x);h.x.min=f.target.x.min,h.x.max=h.x.min+y;const x=ct(this.layout.layoutBox.y);h.y.min=f.target.y.min,h.y.max=h.y.min+x}Ot(p,h),Ar(p,_),Is(this.projectionDeltaWithTransform,this.layoutCorrected,p,_)}}registerSharedNode(f,p){this.sharedNodes.has(f)||this.sharedNodes.set(f,new mv),this.sharedNodes.get(f).add(p);const g=p.options.initialPromotionConfig;p.promote({transition:g?g.transition:void 0,preserveFollowOpacity:g&&g.shouldPreserveFollowOpacity?g.shouldPreserveFollowOpacity(p):void 0})}isLead(){const f=this.getStack();return f?f.lead===this:!0}getLead(){var p;const{layoutId:f}=this.options;return f?((p=this.getStack())==null?void 0:p.lead)||this:this}getPrevLead(){var p;const{layoutId:f}=this.options;return f?(p=this.getStack())==null?void 0:p.prevLead:void 0}getStack(){const{layoutId:f}=this.options;if(f)return this.root.sharedNodes.get(f)}promote({needsReset:f,transition:p,preserveFollowOpacity:h}={}){const g=this.getStack();g&&g.promote(this,h),f&&(this.projectionDelta=void 0,this.needsReset=!0),p&&this.setOptions({transition:p})}relegate(){const f=this.getStack();return f?f.relegate(this):!1}resetSkewAndRotation(){const{visualElement:f}=this.options;if(!f)return;let p=!1;const{latestValues:h}=f;if((h.z||h.rotate||h.rotateX||h.rotateY||h.rotateZ||h.skewX||h.skewY)&&(p=!0),!p)return;const g={};h.z&&Ta("z",f,g,this.animationValues);for(let _=0;_<ba.length;_++)Ta(`rotate${ba[_]}`,f,g,this.animationValues),Ta(`skew${ba[_]}`,f,g,this.animationValues);f.render();for(const _ in g)f.setStaticValue(_,g[_]),this.animationValues&&(this.animationValues[_]=g[_]);f.scheduleRender()}applyProjectionStyles(f,p){if(!this.instance||this.isSVG)return;if(!this.isVisible){f.visibility="hidden";return}const h=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,f.visibility="",f.opacity="",f.pointerEvents=ui(p==null?void 0:p.pointerEvents)||"",f.transform=h?h(this.latestValues,""):"none";return}const g=this.getLead();if(!this.projectionDelta||!this.layout||!g.target){this.options.layoutId&&(f.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,f.pointerEvents=ui(p==null?void 0:p.pointerEvents)||""),this.hasProjected&&!qn(this.latestValues)&&(f.transform=h?h({},""):"none",this.hasProjected=!1);return}f.visibility="";const _=g.animationValues||g.latestValues;this.applyTransformsToTarget();let y=ov(this.projectionDeltaWithTransform,this.treeScale,_);h&&(y=h(_,y)),f.transform=y;const{x,y:T}=this.projectionDelta;f.transformOrigin=`${x.origin*100}% ${T.origin*100}% 0`,g.animationValues?f.opacity=g===this?_.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:_.opacityExit:f.opacity=g===this?_.opacity!==void 0?_.opacity:"":_.opacityExit!==void 0?_.opacityExit:0;for(const S in ru){if(_[S]===void 0)continue;const{correct:I,applyTo:D,isCSSVariable:z}=ru[S],j=y==="none"?_[S]:I(_[S],g);if(D){const N=D.length;for(let O=0;O<N;O++)f[D[O]]=j}else z?this.options.visualElement.renderState.vars[S]=j:f[S]=j}this.options.layoutId&&(f.pointerEvents=g===this?ui(p==null?void 0:p.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(f=>{var p;return(p=f.currentAnimation)==null?void 0:p.stop()}),this.root.nodes.forEach(Ep),this.root.sharedNodes.clear()}}}function gv(n){n.updateLayout()}function yv(n){var o;const r=((o=n.resumeFrom)==null?void 0:o.snapshot)||n.snapshot;if(n.isLead()&&n.layout&&r&&n.hasListeners("didUpdate")){const{layoutBox:l,measuredBox:u}=n.layout,{animationType:d}=n.options,f=r.source!==n.layout.source;d==="size"?Xt(y=>{const x=f?r.measuredBox[y]:r.layoutBox[y],T=ct(x);x.min=l[y].min,x.max=x.min+T}):Eh(d,r.layoutBox,l)&&Xt(y=>{const x=f?r.measuredBox[y]:r.layoutBox[y],T=ct(l[y]);x.max=x.min+T,n.relativeTarget&&!n.currentAnimation&&(n.isProjectionDirty=!0,n.relativeTarget[y].max=n.relativeTarget[y].min+T)});const p=Lr();Is(p,l,r.layoutBox);const h=Lr();f?Is(h,n.applyTransform(u,!0),r.measuredBox):Is(h,l,r.layoutBox);const g=!Sh(p);let _=!1;if(!n.resumeFrom){const y=n.getClosestProjectingParent();if(y&&!y.resumeFrom){const{snapshot:x,layout:T}=y;if(x&&T){const S=He();gi(S,r.layoutBox,x.layoutBox);const I=He();gi(I,l,T.layoutBox),kh(S,I)||(_=!0),y.options.layoutRoot&&(n.relativeTarget=I,n.relativeTargetOrigin=S,n.relativeParent=y)}}}n.notifyListeners("didUpdate",{layout:l,snapshot:r,delta:h,layoutDelta:p,hasLayoutChanged:g,hasRelativeLayoutChanged:_})}else if(n.isLead()){const{onExitComplete:l}=n.options;l&&l()}n.options.transition=void 0}function vv(n){n.parent&&(n.isProjecting()||(n.isProjectionDirty=n.parent.isProjectionDirty),n.isSharedProjectionDirty||(n.isSharedProjectionDirty=!!(n.isProjectionDirty||n.parent.isProjectionDirty||n.parent.isSharedProjectionDirty)),n.isTransformDirty||(n.isTransformDirty=n.parent.isTransformDirty))}function xv(n){n.isProjectionDirty=n.isSharedProjectionDirty=n.isTransformDirty=!1}function wv(n){n.clearSnapshot()}function Ep(n){n.clearMeasurements()}function Mp(n){n.isLayoutDirty=!1}function Sv(n){const{visualElement:r}=n.options;r&&r.getProps().onBeforeLayoutMeasure&&r.notify("BeforeLayoutMeasure"),n.resetTransform()}function Rp(n){n.finishAnimation(),n.targetDelta=n.relativeTarget=n.target=void 0,n.isProjectionDirty=!0}function kv(n){n.resolveTargetDelta()}function bv(n){n.calcProjection()}function Tv(n){n.resetSkewAndRotation()}function Cv(n){n.removeLeadSnapshot()}function Dp(n,r,o){n.translate=je(r.translate,0,o),n.scale=je(r.scale,1,o),n.origin=r.origin,n.originPoint=r.originPoint}function Lp(n,r,o,l){n.min=je(r.min,o.min,l),n.max=je(r.max,o.max,l)}function Pv(n,r,o,l){Lp(n.x,r.x,o.x,l),Lp(n.y,r.y,o.y,l)}function Ev(n){return n.animationValues&&n.animationValues.opacityExit!==void 0}const Mv={duration:.45,ease:[.4,0,.1,1]},Ip=n=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(n),Ap=Ip("applewebkit/")&&!Ip("chrome/")?Math.round:Rt;function jp(n){n.min=Ap(n.min),n.max=Ap(n.max)}function Rv(n){jp(n.x),jp(n.y)}function Eh(n,r,o){return n==="position"||n==="preserve-aspect"&&!q1(kp(r),kp(o),.2)}function Dv(n){var r;return n!==n.root&&((r=n.scroll)==null?void 0:r.wasRoot)}const Lv=Ph({attachResizeListener:(n,r)=>Bs(n,"resize",r),measureScroll:()=>{var n,r;return{x:document.documentElement.scrollLeft||((n=document.body)==null?void 0:n.scrollLeft)||0,y:document.documentElement.scrollTop||((r=document.body)==null?void 0:r.scrollTop)||0}},checkIsScrollRoot:()=>!0}),Iv=n=>!n.isLayoutDirty&&n.willUpdate(!1);function Np(){const n=new Set,r=new WeakMap,o=()=>n.forEach(Iv);return{add:l=>{n.add(l),r.set(l,l.addEventListener("willUpdate",o))},remove:l=>{n.delete(l);const u=r.get(l);u&&(u(),r.delete(l)),o()},dirty:o}}const Ca={current:void 0},Mh=Ph({measureScroll:n=>({x:n.scrollLeft,y:n.scrollTop}),defaultParent:()=>{if(!Ca.current){const n=new Lv({});n.mount(window),n.setOptions({layoutScroll:!0}),Ca.current=n}return Ca.current},resetTransform:(n,r)=>{n.style.transform=r!==void 0?r:"none"},checkIsScrollRoot:n=>window.getComputedStyle(n).position==="fixed"}),Nu=E.createContext({transformPagePoint:n=>n,isStatic:!1,reducedMotion:"never"});function Vp(n,r){if(typeof n=="function")return n(r);n!=null&&(n.current=r)}function Av(...n){return r=>{let o=!1;const l=n.map(u=>{const d=Vp(u,r);return!o&&typeof d=="function"&&(o=!0),d});if(o)return()=>{for(let u=0;u<l.length;u++){const d=l[u];typeof d=="function"?d():Vp(n[u],null)}}}}function jv(...n){return E.useCallback(Av(...n),n)}class Nv extends E.Component{getSnapshotBeforeUpdate(r){const o=this.props.childRef.current;if(o&&r.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const l=o.offsetParent,u=qa(l)&&l.offsetWidth||0,d=qa(l)&&l.offsetHeight||0,f=this.props.sizeRef.current;f.height=o.offsetHeight||0,f.width=o.offsetWidth||0,f.top=o.offsetTop,f.left=o.offsetLeft,f.right=u-f.width-f.left,f.bottom=d-f.height-f.top}return null}componentDidUpdate(){}render(){return this.props.children}}function Vv({children:n,isPresent:r,anchorX:o,anchorY:l,root:u,pop:d}){var x;const f=E.useId(),p=E.useRef(null),h=E.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0}),{nonce:g}=E.useContext(Nu),_=((x=n.props)==null?void 0:x.ref)??(n==null?void 0:n.ref),y=jv(p,_);return E.useInsertionEffect(()=>{const{width:T,height:S,top:I,left:D,right:z,bottom:j}=h.current;if(r||d===!1||!p.current||!T||!S)return;const N=o==="left"?`left: ${D}`:`right: ${z}`,O=l==="bottom"?`bottom: ${j}`:`top: ${I}`;p.current.dataset.motionPopId=f;const W=document.createElement("style");g&&(W.nonce=g);const Z=u??document.head;return Z.appendChild(W),W.sheet&&W.sheet.insertRule(`
          [data-motion-pop-id="${f}"] {
            position: absolute !important;
            width: ${T}px !important;
            height: ${S}px !important;
            ${N}px !important;
            ${O}px !important;
          }
        `),()=>{Z.contains(W)&&Z.removeChild(W)}},[r]),R.jsx(Nv,{isPresent:r,childRef:p,sizeRef:h,pop:d,children:d===!1?n:E.cloneElement(n,{ref:y})})}const Ov=({children:n,initial:r,isPresent:o,onExitComplete:l,custom:u,presenceAffectsLayout:d,mode:f,anchorX:p,anchorY:h,root:g})=>{const _=au(zv),y=E.useId();let x=!0,T=E.useMemo(()=>(x=!1,{id:y,initial:r,isPresent:o,custom:u,onExitComplete:S=>{_.set(S,!0);for(const I of _.values())if(!I)return;l&&l()},register:S=>(_.set(S,!1),()=>_.delete(S))}),[o,_,l]);return d&&x&&(T={...T}),E.useMemo(()=>{_.forEach((S,I)=>_.set(I,!1))},[o]),E.useEffect(()=>{!o&&!_.size&&l&&l()},[o]),n=R.jsx(Vv,{pop:f==="popLayout",isPresent:o,anchorX:p,anchorY:h,root:g,children:n}),R.jsx(vi.Provider,{value:T,children:n})};function zv(){return new Map}function Rh(n=!0){const r=E.useContext(vi);if(r===null)return[!0,null];const{isPresent:o,onExitComplete:l,register:u}=r,d=E.useId();E.useEffect(()=>{if(n)return u(d)},[n]);const f=E.useCallback(()=>n&&l&&l(d),[d,l,n]);return!o&&l?[!1,f]:[!0]}const ri=n=>n.key||"";function Op(n){const r=[];return E.Children.forEach(n,o=>{E.isValidElement(o)&&r.push(o)}),r}const su=({children:n,custom:r,initial:o=!0,onExitComplete:l,presenceAffectsLayout:u=!0,mode:d="sync",propagate:f=!1,anchorX:p="left",anchorY:h="top",root:g})=>{const[_,y]=Rh(f),x=E.useMemo(()=>Op(n),[n]),T=f&&!_?[]:x.map(ri),S=E.useRef(!0),I=E.useRef(x),D=au(()=>new Map),z=E.useRef(new Set),[j,N]=E.useState(x),[O,W]=E.useState(x);uu(()=>{S.current=!1,I.current=x;for(let H=0;H<O.length;H++){const K=ri(O[H]);T.includes(K)?(D.delete(K),z.current.delete(K)):D.get(K)!==!0&&D.set(K,!1)}},[O,T.length,T.join("-")]);const Z=[];if(x!==j){let H=[...x];for(let K=0;K<O.length;K++){const J=O[K],ie=ri(J);T.includes(ie)||(H.splice(K,0,J),Z.push(J))}return d==="wait"&&Z.length&&(H=Z),W(Op(H)),N(x),null}const{forceRender:X}=E.useContext(js);return R.jsx(R.Fragment,{children:O.map(H=>{const K=ri(H),J=f&&!_?!1:x===O||T.includes(K),ie=()=>{if(z.current.has(K))return;if(z.current.add(K),D.has(K))D.set(K,!0);else return;let ue=!0;D.forEach(ce=>{ce||(ue=!1)}),ue&&(X==null||X(),W(I.current),f&&(y==null||y()),l&&l())};return R.jsx(Ov,{isPresent:J,initial:!S.current||o?void 0:!1,custom:r,presenceAffectsLayout:u,mode:d,root:g,onExitComplete:J?void 0:ie,anchorX:p,anchorY:h,children:H},K)})})},Bv=E.createContext(null);function Fv(){const n=E.useRef(!1);return uu(()=>(n.current=!0,()=>{n.current=!1}),[]),n}function Uv(){const n=Fv(),[r,o]=E.useState(0),l=E.useCallback(()=>{n.current&&o(r+1)},[r]);return[E.useCallback(()=>Pe.postRender(l),[l]),r]}const Dh=n=>n===!0,Yv=n=>Dh(n===!0)||n==="id",Wv=({children:n,id:r,inherit:o=!0})=>{const l=E.useContext(js),u=E.useContext(Bv),[d,f]=Uv(),p=E.useRef(null),h=l.id||u;p.current===null&&(Yv(o)&&h&&(r=r?h+"-"+r:h),p.current={id:r,group:Dh(o)&&l.group||Np()});const g=E.useMemo(()=>({...p.current,forceRender:d}),[f]);return R.jsx(js.Provider,{value:g,children:n})},Lh=E.createContext({strict:!1}),zp={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let Bp=!1;function Hv(){if(Bp)return;const n={};for(const r in zp)n[r]={isEnabled:o=>zp[r].some(l=>!!o[l])};ih(n),Bp=!0}function Ih(){return Hv(),T1()}function Qv(n){const r=Ih();for(const o in n)r[o]={...r[o],...n[o]};ih(r)}const Xv=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function yi(n){return n.startsWith("while")||n.startsWith("drag")&&n!=="draggable"||n.startsWith("layout")||n.startsWith("onTap")||n.startsWith("onPan")||n.startsWith("onLayout")||Xv.has(n)}let Ah=n=>!yi(n);function $v(n){typeof n=="function"&&(Ah=r=>r.startsWith("on")?!yi(r):n(r))}try{$v(require("@emotion/is-prop-valid").default)}catch{}function Kv(n,r,o){const l={};for(const u in n)u==="values"&&typeof n.values=="object"||(Ah(u)||o===!0&&yi(u)||!r&&!yi(u)||n.draggable&&u.startsWith("onDrag"))&&(l[u]=n[u]);return l}const Si=E.createContext({});function Gv(n,r){if(wi(n)){const{initial:o,animate:l}=n;return{initial:o===!1||zs(o)?o:void 0,animate:zs(l)?l:void 0}}return n.inherit!==!1?r:{}}function Zv(n){const{initial:r,animate:o}=Gv(n,E.useContext(Si));return E.useMemo(()=>({initial:r,animate:o}),[Fp(r),Fp(o)])}function Fp(n){return Array.isArray(n)?n.join(" "):n}const Vu=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function jh(n,r,o){for(const l in r)!ot(r[l])&&!ph(l,o)&&(n[l]=r[l])}function Jv({transformTemplate:n},r){return E.useMemo(()=>{const o=Vu();return Au(o,r,n),Object.assign({},o.vars,o.style)},[r])}function qv(n,r){const o=n.style||{},l={};return jh(l,o,n),Object.assign(l,Jv(n,r)),l}function ex(n,r){const o={},l=qv(n,r);return n.drag&&n.dragListener!==!1&&(o.draggable=!1,l.userSelect=l.WebkitUserSelect=l.WebkitTouchCallout="none",l.touchAction=n.drag===!0?"none":`pan-${n.drag==="x"?"y":"x"}`),n.tabIndex===void 0&&(n.onTap||n.onTapStart||n.whileTap)&&(o.tabIndex=0),o.style=l,o}const Nh=()=>({...Vu(),attrs:{}});function tx(n,r,o,l){const u=E.useMemo(()=>{const d=Nh();return mh(d,r,_h(l),n.transformTemplate,n.style),{...d.attrs,style:{...d.style}}},[r]);if(n.style){const d={};jh(d,n.style,n),u.style={...d,...u.style}}return u}const nx=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Ou(n){return typeof n!="string"||n.includes("-")?!1:!!(nx.indexOf(n)>-1||/[A-Z]/u.test(n))}function rx(n,r,o,{latestValues:l},u,d=!1,f){const h=(f??Ou(n)?tx:ex)(r,l,u,n),g=Kv(r,typeof n=="string",d),_=n!==E.Fragment?{...g,...h,ref:o}:{},{children:y}=r,x=E.useMemo(()=>ot(y)?y.get():y,[y]);return E.createElement(n,{..._,children:x})}function sx({scrapeMotionValuesFromProps:n,createRenderState:r},o,l,u){return{latestValues:ox(o,l,u,n),renderState:r()}}function ox(n,r,o,l){const u={},d=l(n,{});for(const x in d)u[x]=ui(d[x]);let{initial:f,animate:p}=n;const h=wi(n),g=sh(n);r&&g&&!h&&n.inherit!==!1&&(f===void 0&&(f=r.initial),p===void 0&&(p=r.animate));let _=o?o.initial===!1:!1;_=_||f===!1;const y=_?p:f;if(y&&typeof y!="boolean"&&!xi(y)){const x=Array.isArray(y)?y:[y];for(let T=0;T<x.length;T++){const S=Cu(n,x[T]);if(S){const{transitionEnd:I,transition:D,...z}=S;for(const j in z){let N=z[j];if(Array.isArray(N)){const O=_?N.length-1:0;N=N[O]}N!==null&&(u[j]=N)}for(const j in I)u[j]=I[j]}}}return u}const Vh=n=>(r,o)=>{const l=E.useContext(Si),u=E.useContext(vi),d=()=>sx(n,r,l,u);return o?d():au(d)},ix=Vh({scrapeMotionValuesFromProps:ju,createRenderState:Vu}),lx=Vh({scrapeMotionValuesFromProps:gh,createRenderState:Nh}),ax=Symbol.for("motionComponentSymbol");function ux(n,r,o){const l=E.useRef(o);E.useInsertionEffect(()=>{l.current=o});const u=E.useRef(null);return E.useCallback(d=>{var p;d&&((p=n.onMount)==null||p.call(n,d));const f=l.current;if(typeof f=="function")if(d){const h=f(d);typeof h=="function"&&(u.current=h)}else u.current?(u.current(),u.current=null):f(d);else f&&(f.current=d);r&&(d?r.mount(d):r.unmount())},[r])}const Oh=E.createContext({});function Mr(n){return n&&typeof n=="object"&&Object.prototype.hasOwnProperty.call(n,"current")}function cx(n,r,o,l,u,d){var N,O;const{visualElement:f}=E.useContext(Si),p=E.useContext(Lh),h=E.useContext(vi),g=E.useContext(Nu),_=g.reducedMotion,y=g.skipAnimations,x=E.useRef(null),T=E.useRef(!1);l=l||p.renderer,!x.current&&l&&(x.current=l(n,{visualState:r,parent:f,props:o,presenceContext:h,blockInitialAnimation:h?h.initial===!1:!1,reducedMotionConfig:_,skipAnimations:y,isSVG:d}),T.current&&x.current&&(x.current.manuallyAnimateOnMount=!0));const S=x.current,I=E.useContext(Oh);S&&!S.projection&&u&&(S.type==="html"||S.type==="svg")&&dx(x.current,o,u,I);const D=E.useRef(!1);E.useInsertionEffect(()=>{S&&D.current&&S.update(o,h)});const z=o[Hm],j=E.useRef(!!z&&typeof window<"u"&&!((N=window.MotionHandoffIsComplete)!=null&&N.call(window,z))&&((O=window.MotionHasOptimisedAnimation)==null?void 0:O.call(window,z)));return uu(()=>{T.current=!0,S&&(D.current=!0,window.MotionIsMounted=!0,S.updateFeatures(),S.scheduleRenderMicrotask(),j.current&&S.animationState&&S.animationState.animateChanges())}),E.useEffect(()=>{S&&(!j.current&&S.animationState&&S.animationState.animateChanges(),j.current&&(queueMicrotask(()=>{var W;(W=window.MotionHandoffMarkAsComplete)==null||W.call(window,z)}),j.current=!1),S.enteringChildren=void 0)}),S}function dx(n,r,o,l){const{layoutId:u,layout:d,drag:f,dragConstraints:p,layoutScroll:h,layoutRoot:g,layoutCrossfade:_}=r;n.projection=new o(n.latestValues,r["data-framer-portal-id"]?void 0:zh(n.parent)),n.projection.setOptions({layoutId:u,layout:d,alwaysMeasureLayout:!!f||p&&Mr(p),visualElement:n,animationType:typeof d=="string"?d:"both",initialPromotionConfig:l,crossfade:_,layoutScroll:h,layoutRoot:g})}function zh(n){if(n)return n.options.allowProjection!==!1?n.projection:zh(n.parent)}function Pa(n,{forwardMotionProps:r=!1,type:o}={},l,u){l&&Qv(l);const d=o?o==="svg":Ou(n),f=d?lx:ix;function p(g,_){let y;const x={...E.useContext(Nu),...g,layoutId:fx(g)},{isStatic:T}=x,S=Zv(g),I=f(g,T);if(!T&&typeof window<"u"){px();const D=mx(x);y=D.MeasureLayout,S.visualElement=cx(n,I,x,u,D.ProjectionNode,d)}return R.jsxs(Si.Provider,{value:S,children:[y&&S.visualElement?R.jsx(y,{visualElement:S.visualElement,...x}):null,rx(n,g,ux(I,S.visualElement,_),I,T,r,d)]})}p.displayName=`motion.${typeof n=="string"?n:`create(${n.displayName??n.name??""})`}`;const h=E.forwardRef(p);return h[ax]=n,h}function fx({layoutId:n}){const r=E.useContext(js).id;return r&&n!==void 0?r+"-"+n:n}function px(n,r){E.useContext(Lh).strict}function mx(n){const r=Ih(),{drag:o,layout:l}=r;if(!o&&!l)return{};const u={...o,...l};return{MeasureLayout:o!=null&&o.isEnabled(n)||l!=null&&l.isEnabled(n)?u.MeasureLayout:void 0,ProjectionNode:u.ProjectionNode}}function hx(n,r){if(typeof Proxy>"u")return Pa;const o=new Map,l=(d,f)=>Pa(d,f,n,r),u=(d,f)=>l(d,f);return new Proxy(u,{get:(d,f)=>f==="create"?l:(o.has(f)||o.set(f,Pa(f,void 0,n,r)),o.get(f))})}const _x=(n,r)=>r.isSVG??Ou(n)?new U1(r):new N1(r,{allowProjection:n!==E.Fragment});class gx extends An{constructor(r){super(r),r.animationState||(r.animationState=X1(r))}updateAnimationControlsSubscription(){const{animate:r}=this.node.getProps();xi(r)&&(this.unmountControls=r.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:r}=this.node.getProps(),{animate:o}=this.node.prevProps||{};r!==o&&this.updateAnimationControlsSubscription()}unmount(){var r;this.node.animationState.reset(),(r=this.unmountControls)==null||r.call(this)}}let yx=0;class vx extends An{constructor(){super(...arguments),this.id=yx++}update(){if(!this.node.presenceContext)return;const{isPresent:r,onExitComplete:o}=this.node.presenceContext,{isPresent:l}=this.node.prevPresenceContext||{};if(!this.node.animationState||r===l)return;const u=this.node.animationState.setActive("exit",!r);o&&!r&&u.then(()=>{o(this.id)})}mount(){const{register:r,onExitComplete:o}=this.node.presenceContext||{};o&&o(this.id),r&&(this.unmount=r(this.id))}unmount(){}}const xx={animation:{Feature:gx},exit:{Feature:vx}};function Ws(n){return{point:{x:n.pageX,y:n.pageY}}}const wx=n=>r=>Ru(r)&&n(r,Ws(r));function As(n,r,o,l){return Bs(n,r,wx(o),l)}const Bh=({current:n})=>n?n.ownerDocument.defaultView:null,Up=(n,r)=>Math.abs(n-r);function Sx(n,r){const o=Up(n.x,r.x),l=Up(n.y,r.y);return Math.sqrt(o**2+l**2)}const Yp=new Set(["auto","scroll"]);class Fh{constructor(r,o,{transformPagePoint:l,contextWindow:u=window,dragSnapToOrigin:d=!1,distanceThreshold:f=3,element:p}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=T=>{this.handleScroll(T.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const T=Ma(this.lastMoveEventInfo,this.history),S=this.startEvent!==null,I=Sx(T.offset,{x:0,y:0})>=this.distanceThreshold;if(!S&&!I)return;const{point:D}=T,{timestamp:z}=qe;this.history.push({...D,timestamp:z});const{onStart:j,onMove:N}=this.handlers;S||(j&&j(this.lastMoveEvent,T),this.startEvent=this.lastMoveEvent),N&&N(this.lastMoveEvent,T)},this.handlePointerMove=(T,S)=>{this.lastMoveEvent=T,this.lastMoveEventInfo=Ea(S,this.transformPagePoint),Pe.update(this.updatePoint,!0)},this.handlePointerUp=(T,S)=>{this.end();const{onEnd:I,onSessionEnd:D,resumeAnimation:z}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&z&&z(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const j=Ma(T.type==="pointercancel"?this.lastMoveEventInfo:Ea(S,this.transformPagePoint),this.history);this.startEvent&&I&&I(T,j),D&&D(T,j)},!Ru(r))return;this.dragSnapToOrigin=d,this.handlers=o,this.transformPagePoint=l,this.distanceThreshold=f,this.contextWindow=u||window;const h=Ws(r),g=Ea(h,this.transformPagePoint),{point:_}=g,{timestamp:y}=qe;this.history=[{..._,timestamp:y}];const{onSessionStart:x}=o;x&&x(r,Ma(g,this.history)),this.removeListeners=Fs(As(this.contextWindow,"pointermove",this.handlePointerMove),As(this.contextWindow,"pointerup",this.handlePointerUp),As(this.contextWindow,"pointercancel",this.handlePointerUp)),p&&this.startScrollTracking(p)}startScrollTracking(r){let o=r.parentElement;for(;o;){const l=getComputedStyle(o);(Yp.has(l.overflowX)||Yp.has(l.overflowY))&&this.scrollPositions.set(o,{x:o.scrollLeft,y:o.scrollTop}),o=o.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(r){const o=this.scrollPositions.get(r);if(!o)return;const l=r===window,u=l?{x:window.scrollX,y:window.scrollY}:{x:r.scrollLeft,y:r.scrollTop},d={x:u.x-o.x,y:u.y-o.y};d.x===0&&d.y===0||(l?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=d.x,this.lastMoveEventInfo.point.y+=d.y):this.history.length>0&&(this.history[0].x-=d.x,this.history[0].y-=d.y),this.scrollPositions.set(r,u),Pe.update(this.updatePoint,!0))}updateHandlers(r){this.handlers=r}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),In(this.updatePoint)}}function Ea(n,r){return r?{point:r(n.point)}:n}function Wp(n,r){return{x:n.x-r.x,y:n.y-r.y}}function Ma({point:n},r){return{point:n,delta:Wp(n,Uh(r)),offset:Wp(n,kx(r)),velocity:bx(r,.1)}}function kx(n){return n[0]}function Uh(n){return n[n.length-1]}function bx(n,r){if(n.length<2)return{x:0,y:0};let o=n.length-1,l=null;const u=Uh(n);for(;o>=0&&(l=n[o],!(u.timestamp-l.timestamp>Bt(r)));)o--;if(!l)return{x:0,y:0};l===n[0]&&n.length>2&&u.timestamp-l.timestamp>Bt(r)*2&&(l=n[1]);const d=Mt(u.timestamp-l.timestamp);if(d===0)return{x:0,y:0};const f={x:(u.x-l.x)/d,y:(u.y-l.y)/d};return f.x===1/0&&(f.x=0),f.y===1/0&&(f.y=0),f}function Tx(n,{min:r,max:o},l){return r!==void 0&&n<r?n=l?je(r,n,l.min):Math.max(n,r):o!==void 0&&n>o&&(n=l?je(o,n,l.max):Math.min(n,o)),n}function Hp(n,r,o){return{min:r!==void 0?n.min+r:void 0,max:o!==void 0?n.max+o-(n.max-n.min):void 0}}function Cx(n,{top:r,left:o,bottom:l,right:u}){return{x:Hp(n.x,o,u),y:Hp(n.y,r,l)}}function Qp(n,r){let o=r.min-n.min,l=r.max-n.max;return r.max-r.min<n.max-n.min&&([o,l]=[l,o]),{min:o,max:l}}function Px(n,r){return{x:Qp(n.x,r.x),y:Qp(n.y,r.y)}}function Ex(n,r){let o=.5;const l=ct(n),u=ct(r);return u>l?o=Ns(r.min,r.max-l,n.min):l>u&&(o=Ns(n.min,n.max-u,r.min)),Kt(0,1,o)}function Mx(n,r){const o={};return r.min!==void 0&&(o.min=r.min-n.min),r.max!==void 0&&(o.max=r.max-n.min),o}const ou=.35;function Rx(n=ou){return n===!1?n=0:n===!0&&(n=ou),{x:Xp(n,"left","right"),y:Xp(n,"top","bottom")}}function Xp(n,r,o){return{min:$p(n,r),max:$p(n,o)}}function $p(n,r){return typeof n=="number"?n:n[r]||0}const Dx=new WeakMap;class Lx{constructor(r){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=He(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=r}start(r,{snapToCursor:o=!1,distanceThreshold:l}={}){const{presenceContext:u}=this.visualElement;if(u&&u.isPresent===!1)return;const d=y=>{o&&this.snapToCursor(Ws(y).point),this.stopAnimation()},f=(y,x)=>{const{drag:T,dragPropagation:S,onDragStart:I}=this.getProps();if(T&&!S&&(this.openDragLock&&this.openDragLock(),this.openDragLock=t1(T),!this.openDragLock))return;this.latestPointerEvent=y,this.latestPanInfo=x,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Xt(z=>{let j=this.getAxisMotionValue(z).get()||0;if($t.test(j)){const{projection:N}=this.visualElement;if(N&&N.layout){const O=N.layout.layoutBox[z];O&&(j=ct(O)*(parseFloat(j)/100))}}this.originPoint[z]=j}),I&&Pe.update(()=>I(y,x),!1,!0),Ka(this.visualElement,"transform");const{animationState:D}=this.visualElement;D&&D.setActive("whileDrag",!0)},p=(y,x)=>{this.latestPointerEvent=y,this.latestPanInfo=x;const{dragPropagation:T,dragDirectionLock:S,onDirectionLock:I,onDrag:D}=this.getProps();if(!T&&!this.openDragLock)return;const{offset:z}=x;if(S&&this.currentDirection===null){this.currentDirection=Ax(z),this.currentDirection!==null&&I&&I(this.currentDirection);return}this.updateAxis("x",x.point,z),this.updateAxis("y",x.point,z),this.visualElement.render(),D&&Pe.update(()=>D(y,x),!1,!0)},h=(y,x)=>{this.latestPointerEvent=y,this.latestPanInfo=x,this.stop(y,x),this.latestPointerEvent=null,this.latestPanInfo=null},g=()=>{const{dragSnapToOrigin:y}=this.getProps();(y||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:_}=this.getProps();this.panSession=new Fh(r,{onSessionStart:d,onStart:f,onMove:p,onSessionEnd:h,resumeAnimation:g},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:_,distanceThreshold:l,contextWindow:Bh(this.visualElement),element:this.visualElement.current})}stop(r,o){const l=r||this.latestPointerEvent,u=o||this.latestPanInfo,d=this.isDragging;if(this.cancel(),!d||!u||!l)return;const{velocity:f}=u;this.startAnimation(f);const{onDragEnd:p}=this.getProps();p&&Pe.postRender(()=>p(l,u))}cancel(){this.isDragging=!1;const{projection:r,animationState:o}=this.visualElement;r&&(r.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:l}=this.getProps();!l&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),o&&o.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(r,o,l){const{drag:u}=this.getProps();if(!l||!si(r,u,this.currentDirection))return;const d=this.getAxisMotionValue(r);let f=this.originPoint[r]+l[r];this.constraints&&this.constraints[r]&&(f=Tx(f,this.constraints[r],this.elastic[r])),d.set(f)}resolveConstraints(){var d;const{dragConstraints:r,dragElastic:o}=this.getProps(),l=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(d=this.visualElement.projection)==null?void 0:d.layout,u=this.constraints;r&&Mr(r)?this.constraints||(this.constraints=this.resolveRefConstraints()):r&&l?this.constraints=Cx(l.layoutBox,r):this.constraints=!1,this.elastic=Rx(o),u!==this.constraints&&!Mr(r)&&l&&this.constraints&&!this.hasMutatedConstraints&&Xt(f=>{this.constraints!==!1&&this.getAxisMotionValue(f)&&(this.constraints[f]=Mx(l.layoutBox[f],this.constraints[f]))})}resolveRefConstraints(){const{dragConstraints:r,onMeasureDragConstraints:o}=this.getProps();if(!r||!Mr(r))return!1;const l=r.current,{projection:u}=this.visualElement;if(!u||!u.layout)return!1;const d=R1(l,u.root,this.visualElement.getTransformPagePoint());let f=Px(u.layout.layoutBox,d);if(o){const p=o(P1(f));this.hasMutatedConstraints=!!p,p&&(f=ah(p))}return f}startAnimation(r){const{drag:o,dragMomentum:l,dragElastic:u,dragTransition:d,dragSnapToOrigin:f,onDragTransitionEnd:p}=this.getProps(),h=this.constraints||{},g=Xt(_=>{if(!si(_,o,this.currentDirection))return;let y=h&&h[_]||{};f&&(y={min:0,max:0});const x=u?200:1e6,T=u?40:1e7,S={type:"inertia",velocity:l?r[_]:0,bounceStiffness:x,bounceDamping:T,timeConstant:750,restDelta:1,restSpeed:10,...d,...y};return this.startAxisValueAnimation(_,S)});return Promise.all(g).then(p)}startAxisValueAnimation(r,o){const l=this.getAxisMotionValue(r);return Ka(this.visualElement,r),l.start(Tu(r,l,0,o,this.visualElement,!1))}stopAnimation(){Xt(r=>this.getAxisMotionValue(r).stop())}getAxisMotionValue(r){const o=`_drag${r.toUpperCase()}`,l=this.visualElement.getProps(),u=l[o];return u||this.visualElement.getValue(r,(l.initial?l.initial[r]:void 0)||0)}snapToCursor(r){Xt(o=>{const{drag:l}=this.getProps();if(!si(o,l,this.currentDirection))return;const{projection:u}=this.visualElement,d=this.getAxisMotionValue(o);if(u&&u.layout){const{min:f,max:p}=u.layout.layoutBox[o],h=d.get()||0;d.set(r[o]-je(f,p,.5)+h)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:r,dragConstraints:o}=this.getProps(),{projection:l}=this.visualElement;if(!Mr(o)||!l||!this.constraints)return;this.stopAnimation();const u={x:0,y:0};Xt(f=>{const p=this.getAxisMotionValue(f);if(p&&this.constraints!==!1){const h=p.get();u[f]=Ex({min:h,max:h},this.constraints[f])}});const{transformTemplate:d}=this.visualElement.getProps();this.visualElement.current.style.transform=d?d({},""):"none",l.root&&l.root.updateScroll(),l.updateLayout(),this.constraints=!1,this.resolveConstraints(),Xt(f=>{if(!si(f,r,null))return;const p=this.getAxisMotionValue(f),{min:h,max:g}=this.constraints[f];p.set(je(h,g,u[f]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;Dx.set(this.visualElement,this);const r=this.visualElement.current,o=As(r,"pointerdown",g=>{const{drag:_,dragListener:y=!0}=this.getProps(),x=g.target,T=x!==r&&l1(x);_&&y&&!T&&this.start(g)});let l;const u=()=>{const{dragConstraints:g}=this.getProps();Mr(g)&&g.current&&(this.constraints=this.resolveRefConstraints(),l||(l=Ix(r,g.current,()=>this.scalePositionWithinConstraints())))},{projection:d}=this.visualElement,f=d.addEventListener("measure",u);d&&!d.layout&&(d.root&&d.root.updateScroll(),d.updateLayout()),Pe.read(u);const p=Bs(window,"resize",()=>this.scalePositionWithinConstraints()),h=d.addEventListener("didUpdate",(({delta:g,hasLayoutChanged:_})=>{this.isDragging&&_&&(Xt(y=>{const x=this.getAxisMotionValue(y);x&&(this.originPoint[y]+=g[y].translate,x.set(x.get()+g[y].translate))}),this.visualElement.render())}));return()=>{p(),o(),f(),h&&h(),l&&l()}}getProps(){const r=this.visualElement.getProps(),{drag:o=!1,dragDirectionLock:l=!1,dragPropagation:u=!1,dragConstraints:d=!1,dragElastic:f=ou,dragMomentum:p=!0}=r;return{...r,drag:o,dragDirectionLock:l,dragPropagation:u,dragConstraints:d,dragElastic:f,dragMomentum:p}}}function Kp(n){let r=!0;return()=>{if(r){r=!1;return}n()}}function Ix(n,r,o){const l=ep(n,Kp(o)),u=ep(r,Kp(o));return()=>{l(),u()}}function si(n,r,o){return(r===!0||r===n)&&(o===null||o===n)}function Ax(n,r=10){let o=null;return Math.abs(n.y)>r?o="y":Math.abs(n.x)>r&&(o="x"),o}class jx extends An{constructor(r){super(r),this.removeGroupControls=Rt,this.removeListeners=Rt,this.controls=new Lx(r)}mount(){const{dragControls:r}=this.node.getProps();r&&(this.removeGroupControls=r.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Rt}update(){const{dragControls:r}=this.node.getProps(),{dragControls:o}=this.node.prevProps||{};r!==o&&(this.removeGroupControls(),r&&(this.removeGroupControls=r.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const Ra=n=>(r,o)=>{n&&Pe.update(()=>n(r,o),!1,!0)};class Nx extends An{constructor(){super(...arguments),this.removePointerDownListener=Rt}onPointerDown(r){this.session=new Fh(r,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Bh(this.node)})}createPanHandlers(){const{onPanSessionStart:r,onPanStart:o,onPan:l,onPanEnd:u}=this.node.getProps();return{onSessionStart:Ra(r),onStart:Ra(o),onMove:Ra(l),onEnd:(d,f)=>{delete this.session,u&&Pe.postRender(()=>u(d,f))}}}mount(){this.removePointerDownListener=As(this.node.current,"pointerdown",r=>this.onPointerDown(r))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let Da=!1;class Vx extends E.Component{componentDidMount(){const{visualElement:r,layoutGroup:o,switchLayoutGroup:l,layoutId:u}=this.props,{projection:d}=r;d&&(o.group&&o.group.add(d),l&&l.register&&u&&l.register(d),Da&&d.root.didUpdate(),d.addEventListener("animationComplete",()=>{this.safeToRemove()}),d.setOptions({...d.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),ci.hasEverUpdated=!0}getSnapshotBeforeUpdate(r){const{layoutDependency:o,visualElement:l,drag:u,isPresent:d}=this.props,{projection:f}=l;return f&&(f.isPresent=d,r.layoutDependency!==o&&f.setOptions({...f.options,layoutDependency:o}),Da=!0,u||r.layoutDependency!==o||o===void 0||r.isPresent!==d?f.willUpdate():this.safeToRemove(),r.isPresent!==d&&(d?f.promote():f.relegate()||Pe.postRender(()=>{const p=f.getStack();(!p||!p.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:r}=this.props.visualElement;r&&(r.root.didUpdate(),Mu.postRender(()=>{!r.currentAnimation&&r.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:r,layoutGroup:o,switchLayoutGroup:l}=this.props,{projection:u}=r;Da=!0,u&&(u.scheduleCheckAfterUnmount(),o&&o.group&&o.group.remove(u),l&&l.deregister&&l.deregister(u))}safeToRemove(){const{safeToRemove:r}=this.props;r&&r()}render(){return null}}function Yh(n){const[r,o]=Rh(),l=E.useContext(js);return R.jsx(Vx,{...n,layoutGroup:l,switchLayoutGroup:E.useContext(Oh),isPresent:r,safeToRemove:o})}const Ox={pan:{Feature:Nx},drag:{Feature:jx,ProjectionNode:Mh,MeasureLayout:Yh}};function Gp(n,r,o){const{props:l}=n;n.animationState&&l.whileHover&&n.animationState.setActive("whileHover",o==="Start");const u="onHover"+o,d=l[u];d&&Pe.postRender(()=>d(r,Ws(r)))}class zx extends An{mount(){const{current:r}=this.node;r&&(this.unmount=r1(r,(o,l)=>(Gp(this.node,l,"Start"),u=>Gp(this.node,u,"End"))))}unmount(){}}class Bx extends An{constructor(){super(...arguments),this.isActive=!1}onFocus(){let r=!1;try{r=this.node.current.matches(":focus-visible")}catch{r=!0}!r||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Fs(Bs(this.node.current,"focus",()=>this.onFocus()),Bs(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function Zp(n,r,o){const{props:l}=n;if(n.current instanceof HTMLButtonElement&&n.current.disabled)return;n.animationState&&l.whileTap&&n.animationState.setActive("whileTap",o==="Start");const u="onTap"+(o==="End"?"":o),d=l[u];d&&Pe.postRender(()=>d(r,Ws(r)))}class Fx extends An{mount(){const{current:r}=this.node;if(!r)return;const{globalTapTarget:o,propagate:l}=this.node.props;this.unmount=u1(r,(u,d)=>(Zp(this.node,d,"Start"),(f,{success:p})=>Zp(this.node,f,p?"End":"Cancel")),{useGlobalTarget:o,stopPropagation:(l==null?void 0:l.tap)===!1})}unmount(){}}const iu=new WeakMap,La=new WeakMap,Ux=n=>{const r=iu.get(n.target);r&&r(n)},Yx=n=>{n.forEach(Ux)};function Wx({root:n,...r}){const o=n||document;La.has(o)||La.set(o,{});const l=La.get(o),u=JSON.stringify(r);return l[u]||(l[u]=new IntersectionObserver(Yx,{root:n,...r})),l[u]}function Hx(n,r,o){const l=Wx(r);return iu.set(n,o),l.observe(n),()=>{iu.delete(n),l.unobserve(n)}}const Qx={some:0,all:1};class Xx extends An{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:r={}}=this.node.getProps(),{root:o,margin:l,amount:u="some",once:d}=r,f={root:o?o.current:void 0,rootMargin:l,threshold:typeof u=="number"?u:Qx[u]},p=h=>{const{isIntersecting:g}=h;if(this.isInView===g||(this.isInView=g,d&&!g&&this.hasEnteredView))return;g&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",g);const{onViewportEnter:_,onViewportLeave:y}=this.node.getProps(),x=g?_:y;x&&x(h)};return Hx(this.node.current,f,p)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:r,prevProps:o}=this.node;["amount","margin","root"].some($x(r,o))&&this.startObserver()}unmount(){}}function $x({viewport:n={}},{viewport:r={}}={}){return o=>n[o]!==r[o]}const Kx={inView:{Feature:Xx},tap:{Feature:Fx},focus:{Feature:Bx},hover:{Feature:zx}},Gx={layout:{ProjectionNode:Mh,MeasureLayout:Yh}},Zx={...xx,...Kx,...Ox,...Gx},ge=hx(Zx,_x);function Jx(n,r,o,l,u){const d=(g,_,y,x)=>{const T=(x-90)*Math.PI/180;return{x:g+y*Math.cos(T),y:_+y*Math.sin(T)}},f=d(n,r,o,u),p=d(n,r,o,l),h=u-l<=180?"0":"1";return`M ${f.x} ${f.y} A ${o} ${o} 0 ${h} 0 ${p.x} ${p.y}`}const Jp={party:{from:"#14582A",to:"#ffffff"},"feel-good":{from:"#8C6A1C",to:"#ffffff"},soft:{from:"#803060",to:"#ffffff"},indie:{from:"#155C50",to:"#ffffff"},retro:{from:"#704520",to:"#ffffff"},sad:{from:"#2A3580",to:"#ffffff"},love:{from:"#901830",to:"#ffffff"},hiphop:{from:"#351850",to:"#ffffff"}},qx={lEye:"M 60 82 Q 75 74 90 82",rEye:"M 110 82 Q 125 74 140 82",mouth:"M 80 125 Q 100 135 120 125"},Mn=[{name:"party",paths:{lEye:"M 60 75 Q 75 55 90 75",rEye:"M 110 75 Q 125 55 140 75",mouth:"M 65 110 Q 100 160 135 110"}},{name:"feel-good",paths:{lEye:"M 60 85 Q 75 70 90 85",rEye:"M 110 85 Q 125 70 140 85",mouth:"M 70 115 Q 100 145 130 115"}},{name:"soft",paths:{lEye:"M 60 85 Q 75 90 90 85",rEye:"M 110 85 Q 125 90 140 85",mouth:"M 85 125 Q 100 130 115 125"}},{name:"indie",paths:{lEye:"M 60 82 Q 75 78 90 86",rEye:"M 110 86 Q 125 78 140 82",mouth:"M 75 128 Q 100 133 125 126"}},{name:"retro",paths:{lEye:"M 60 82 Q 75 70 90 78",rEye:"M 110 78 Q 125 70 140 82",mouth:"M 78 128 Q 100 136 122 130"}},{name:"sad",paths:{lEye:"M 60 90 Q 75 75 90 90",rEye:"M 110 90 Q 125 75 140 90",mouth:"M 70 135 Q 100 115 130 135"}},{name:"love",paths:{lEye:"M 60 80 Q 75 55 90 80",rEye:"M 110 80 Q 125 55 140 80",mouth:"M 85 125 Q 100 140 115 125"}},{name:"hiphop",paths:{lEye:"M 60 75 Q 75 85 90 90",rEye:"M 110 90 Q 125 85 140 75",mouth:"M 70 130 Q 100 140 130 125"}}],e5=[.25,.46,.45,.94],t5=.55,n5=18,r5=10;function Nr(n){return{initial:{opacity:0,y:n5,filter:`blur(${r5}px)`},animate:{opacity:1,y:0,filter:"blur(0px)"},transition:{duration:t5,delay:n,ease:e5}}}function s5({onMoodConfirmed:n,accentColor:r="#4A30F0",selectedMood:o=null,nudge:l=!1,entranceDelay:u=0}){const d={dragMaxOffset:24,dragScale:.88,pullScale:.95,nudgeScale:1.1,hoverScale:1.02,pullOffsetX:20,pullOffsetY:20,pullTweenDuration:.6,pullEase:{x1:.7,y1:1,x2:.7,y2:1},_snapStiffness:220,_snapDamping:14,_snapMass:1,_pullStiffness:230,_pullDamping:14,_pullMass:1,_innerShadowStiffness:210,_innerShadowDamping:12,dragEase:{x1:.5,y1:.6,x2:.6,y2:.8},tabStrokeDuration:.5,shadowTransitionDuration:.3,scaleTransitionDuration:.4,shadowBlurIntensity:12,shadowDirectionalStrength:.4,glowInitialScale:.85,glowPeakScale:1.15,glowFinalScale:1.1,glowDuration:1.2,glowFadeDuration:1.5,tabPathStrokeWidth:4,tabPathStrokeWidthActive:6,tabPathStrokeWidthRubberBand:5.5},[f,p]=E.useState(3),[h,g]=E.useState(!1),[_,y]=E.useState(!1),[x,T]=E.useState(!1),[S,I]=E.useState({x:0,y:0}),[D,z]=E.useState(!0),[j,N]=E.useState([]),[O,W]=E.useState(!0),[Z,X]=E.useState(!1),[H,K]=E.useState(null),J=E.useRef([]),ie=E.useRef(null),ue=E.useRef(!1),ce=E.useRef({x:0,y:0}),me=E.useRef(!1),fe=E.useRef(!1),he=E.useRef(null),re=E.useRef(0),L=Mn[f],V=H!==null,Y=x||V?L.paths:qx,k=h||!x||Z,A=E.useMemo(()=>[{x:-20,y:0,moodIndex:0},{x:0,y:-20,moodIndex:2},{x:d.pullOffsetX,y:0,moodIndex:4},{x:0,y:d.pullOffsetY,moodIndex:6}],[d.pullOffsetX,d.pullOffsetY]);E.useEffect(()=>{if(!o){T(!1);return}const _e=Mn.findIndex(ke=>ke.name===o);_e>=0&&(p(_e),T(!0))},[o]),E.useEffect(()=>{re.current=f},[f]),E.useEffect(()=>{const _e=[],Be=Mn.length*70;return Mn.forEach((it,Ke)=>{_e.push(setTimeout(()=>{N(dt=>[...dt,Ke])},Ke*70))}),_e.push(setTimeout(()=>W(!1),Be+200)),_e.push(setTimeout(()=>z(!1),Be+600)),_e.push(setTimeout(()=>X(!0),Be+300)),()=>_e.forEach(clearTimeout)},[]);const ae=E.useCallback(()=>{J.current.forEach(clearTimeout),J.current=[];const _e=it=>{for(let Ke=0;Ke<A.length;Ke++){const dt=A[Ke],yt=it+Ke*2800;J.current.push(setTimeout(()=>{K(dt),p(dt.moodIndex)},yt)),J.current.push(setTimeout(()=>{K(null),p(3)},yt+900))}return A.length*2800},ke=_e(0),Be=setInterval(()=>{J.current.forEach(clearTimeout),J.current=[],_e(0)},ke);J.current.push(Be)},[A]);E.useEffect(()=>{if(!Z||x||h){J.current.forEach(clearTimeout),J.current=[],K(null);return}return ae(),()=>{J.current.forEach(clearTimeout),J.current=[]}},[Z,x,h,ae]);const de=_e=>{if(_e.currentTarget.setPointerCapture(_e.pointerId),ue.current=!0,me.current=!1,g(!0),X(!1),ie.current){const ke=ie.current.getBoundingClientRect();ce.current={x:ke.left+ke.width/2,y:ke.top+ke.height/2}}},ve=_e=>{if(!ue.current)return;const ke=_e.clientX-ce.current.x,Be=_e.clientY-ce.current.y,it=Math.sqrt(ke*ke+Be*Be);if(it>5){me.current=!0;const Ke=d.dragMaxOffset,dt=Math.min(it,100)/100;I({x:ke/it*Ke*dt,y:Be/it*Ke*dt});const yt=(Math.atan2(Be,ke)*(180/Math.PI)+180+360)%360,Hs=Math.round(yt/45)%8;p(Hs),T(!0)}},ye=_e=>{_e.currentTarget.releasePointerCapture(_e.pointerId),ue.current=!1,g(!1),I({x:0,y:0}),me.current&&x&&(n==null||n(Mn[f].name))},Te=_e=>{const ke=Mn.length;return(_e%ke+ke)%ke},Se=_e=>{_e.currentTarget.setPointerCapture(_e.pointerId),fe.current=!0,he.current=_e.clientX,X(!1)},Ee=_e=>{if(!fe.current||he.current===null)return;const ke=_e.clientX-he.current;if(Math.abs(ke)<14)return;const Be=Math.trunc(ke/32);if(Be===0)return;const it=Te(re.current+Be);re.current=it,he.current+=Be*32,p(it),T(!0)},et=_e=>{_e.currentTarget.releasePointerCapture(_e.pointerId),fe.current=!1,he.current=null,x&&(n==null||n(Mn[f].name))},Gt=V?H.x:S.x,jn=V?H.y:S.y,Nn="0px 10px 30px rgba(0,0,0,0.15)",Fr=h||V?`${Nn}, ${Gt*.65}px ${jn*.65}px 26px rgba(255,255,255,0.35)`:Nn,Vn=d.shadowDirectionalStrength,Ur=d.shadowBlurIntensity,Yr=h||V?`inset ${-Gt*Vn}px ${-jn*Vn}px ${Ur}px rgba(255,255,255,0.4), inset ${Gt*Vn*.5}px ${jn*Vn*.5}px ${Ur*.8}px rgba(0,0,0,0.08)`:"inset 0 8px 16px rgba(0,0,0,0.06)",On={type:"spring",stiffness:d._pullStiffness,damping:d._pullDamping,mass:d._pullMass},ln={type:"spring",stiffness:d._snapStiffness,damping:d._snapDamping,mass:d._snapMass},an=V?{x:{type:"tween",duration:d.pullTweenDuration,ease:[d.pullEase.x1,d.pullEase.y1,d.pullEase.x2,d.pullEase.y2]},y:{type:"tween",duration:d.pullTweenDuration,ease:[d.pullEase.x1,d.pullEase.y1,d.pullEase.x2,d.pullEase.y2]},scale:On,boxShadow:{...On,duration:d.shadowTransitionDuration}}:h?{x:{type:"tween",duration:.12,ease:[d.dragEase.x1,d.dragEase.y1,d.dragEase.x2,d.dragEase.y2]},y:{type:"tween",duration:.12,ease:[d.dragEase.x1,d.dragEase.y1,d.dragEase.x2,d.dragEase.y2]},scale:ln,boxShadow:ln}:{x:ln,y:ln,scale:{...On,duration:d.scaleTransitionDuration},boxShadow:{...On,duration:d.shadowTransitionDuration}},un={"--dial-size":"clamp(200px, min(64vw, 36svh), 280px)","--face-size":"clamp(136px, min(44vw, 24svh), 190px)","--glow-size":"clamp(160px, min(52vw, 28svh), 220px)"};return R.jsxs("div",{className:"flex flex-col items-center relative w-full mt-2",style:{...un,gap:"clamp(8px, 1.6svh, 24px)"},children:[R.jsx(ge.p,{className:"font-['Spectral',serif] text-center text-white w-72 leading-[1.2]",style:{fontSize:"clamp(20px, 3.4svh, 26px)"},...Nr(u),children:"What would you want to listen twin?"}),R.jsxs(ge.div,{ref:ie,className:"relative flex items-center justify-center mt-0 touch-none cursor-pointer",style:{width:"var(--dial-size)",height:"var(--dial-size)",WebkitTapHighlightColor:"transparent"},onPointerDown:de,onPointerMove:ve,onPointerUp:ye,onPointerCancel:ye,onPointerEnter:()=>y(!0),onPointerLeave:()=>y(!1),...Nr(u+.1),children:[R.jsx("svg",{className:"absolute",width:"0",height:"0",children:R.jsxs("defs",{children:[R.jsxs("filter",{id:"tab-glow",x:"-50%",y:"-50%",width:"200%",height:"200%",children:[R.jsx("feGaussianBlur",{stdDeviation:"3",result:"blur"}),R.jsxs("feMerge",{children:[R.jsx("feMergeNode",{in:"blur"}),R.jsx("feMergeNode",{in:"SourceGraphic"})]})]}),R.jsxs("filter",{id:"tab-glow-active",x:"-50%",y:"-50%",width:"200%",height:"200%",children:[R.jsx("feGaussianBlur",{stdDeviation:"4",result:"blur"}),R.jsxs("feMerge",{children:[R.jsx("feMergeNode",{in:"blur"}),R.jsx("feMergeNode",{in:"blur"}),R.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]})}),R.jsx(ge.svg,{className:"absolute inset-0 w-full h-full pointer-events-none",viewBox:"0 0 280 280",animate:{opacity:k?1:0},transition:{duration:d.tabStrokeDuration,ease:"easeInOut"},children:Mn.map((_e,ke)=>{const Be=ke*45-90,it=Jx(140,140,130,Be-20,Be+20),Ke=x&&ke===f,dt=j.includes(ke),yt=V&&ke===H.moodIndex;return R.jsx(ge.path,{d:it,fill:"none",strokeLinecap:"round",pathLength:1,initial:{opacity:0,strokeWidth:d.tabPathStrokeWidth,stroke:"rgba(255,255,255,0.3)"},animate:{opacity:dt?1:0,stroke:Ke?"rgba(255,255,255,1)":yt?"rgba(255,255,255,0.9)":"rgba(255,255,255,0.3)",strokeWidth:Ke?d.tabPathStrokeWidthActive:yt?d.tabPathStrokeWidthRubberBand:d.tabPathStrokeWidth},transition:{opacity:{duration:.35,ease:"easeOut"},stroke:{duration:d.tabStrokeDuration,ease:"easeInOut"},strokeWidth:{duration:d.tabStrokeDuration,ease:"easeInOut"}},style:{filter:Ke?"url(#tab-glow-active)":yt?"url(#tab-glow)":dt&&!O?"none":"url(#tab-glow)"}},_e.name)})}),R.jsx(ge.div,{className:"absolute rounded-full pointer-events-none",style:{width:"var(--glow-size)",height:"var(--glow-size)",background:"radial-gradient(circle, rgba(255,255,255,0.6) 0%, rgba(200,180,255,0.4) 40%, transparent 70%)"},initial:{opacity:0,scale:d.glowInitialScale},animate:{opacity:D?[0,1,.8]:0,scale:D?[d.glowInitialScale,d.glowPeakScale,d.glowFinalScale]:1.3,filter:D?"blur(0px)":"blur(20px)"},transition:{duration:D?d.glowDuration:d.glowFadeDuration,ease:"easeOut"}}),R.jsxs(ge.div,{animate:{x:Gt,y:jn,scale:h?d.dragScale:V?d.pullScale:l?d.nudgeScale:_?d.hoverScale:1,boxShadow:l?"0px 0px 24px 4px rgba(255,255,255,0.3), 0px 10px 30px rgba(0,0,0,0.15)":Fr},transition:{...an,scale:{...an.scale,duration:d.scaleTransitionDuration}},className:"relative rounded-full flex items-center justify-center border-[5px] border-white overflow-hidden pointer-events-none",style:{width:"var(--face-size)",height:"var(--face-size)",backgroundColor:"#EBE9FF"},children:[R.jsx(ge.div,{className:"absolute inset-0 rounded-full pointer-events-none",animate:{boxShadow:Yr},transition:{type:"spring",stiffness:d._innerShadowStiffness,damping:d._innerShadowDamping}}),R.jsxs("svg",{className:"w-full h-full",viewBox:"0 0 200 200",children:[R.jsx(ge.path,{d:Y.lEye,stroke:"#2A2A2A",strokeWidth:"9",strokeLinecap:"round",fill:"none",initial:!1,animate:{d:Y.lEye},transition:{type:"spring",stiffness:300,damping:25}}),R.jsx(ge.path,{d:Y.rEye,stroke:"#2A2A2A",strokeWidth:"9",strokeLinecap:"round",fill:"none",initial:!1,animate:{d:Y.rEye},transition:{type:"spring",stiffness:300,damping:25}}),R.jsx(ge.path,{d:Y.mouth,stroke:"#2A2A2A",strokeWidth:"9",strokeLinecap:"round",fill:"none",initial:!1,animate:{d:Y.mouth},transition:{type:"spring",stiffness:300,damping:25}})]})]})]}),R.jsx(ge.div,{...Nr(u+.2),children:R.jsx(ge.div,{className:"border border-white/50 backdrop-blur-sm py-[4px] rounded-[130px] relative overflow-hidden flex items-center justify-center touch-none cursor-pointer",style:{height:"clamp(32px, 5.2svh, 40px)",width:x?160:"auto",paddingLeft:x?0:40,paddingRight:x?0:40},animate:{backgroundColor:`${r}1A`,boxShadow:`inset 4px 4px 4px ${r}59, 2px 2px 3px ${r}CC`},transition:{duration:.8,ease:"easeInOut"},onPointerDown:Se,onPointerMove:Ee,onPointerUp:et,onPointerCancel:et,children:R.jsx(su,{mode:"wait",children:x?R.jsx(ge.span,{className:"font-['Spectral',serif] text-white tracking-[0.24px]",style:{fontSize:"clamp(18px, 3.2svh, 24px)"},initial:{opacity:0,filter:"blur(10px)"},animate:{opacity:1,filter:"blur(0px)"},exit:{opacity:0,filter:"blur(10px)"},transition:{duration:.24,ease:"easeOut"},children:L.name},L.name):R.jsx(ge.span,{className:"font-['Spectral',serif] text-white/40 tracking-[0.24px]",style:{fontSize:"clamp(18px, 3.2svh, 24px)"},initial:{opacity:0,filter:"blur(6px)"},animate:{opacity:1,filter:"blur(0px)"},exit:{opacity:0,filter:"blur(6px)"},transition:{duration:.12,ease:"easeOut"},children:"Drag to pick a mood"},"__initial__")})})})]})}const Ia=7;function o5({accentColor:n="#4A30F0",onValueChange:r}){const o={thumbSize:20,thumbPressedSize:26,springVisualDuration:.3,springBounce:.2,shadowIdleBlur:12,shadowPressedBlur:12,shadowPressedGlow:4,shadowIdleOpacity:.25,shadowPressedOpacity:.3,trackHeight:36,trackBorderRadius:30,trackBackdropBlur:2.2,dotSize:4.1,colorTransitionDuration:.4,gradientStartOpacity:.66,gradientMidOpacity:.6,gradientEndOpacity:.44},[l,u]=E.useState(0),[d,f]=E.useState(!1),p=E.useRef(null),h=j=>{u(j),r==null||r(j)},g=j=>{j.currentTarget.setPointerCapture(j.pointerId),f(!0),y(j)},_=j=>{j.currentTarget.hasPointerCapture(j.pointerId)&&y(j)},y=j=>{if(!p.current)return;const N=p.current.getBoundingClientRect(),W=Math.max(0,Math.min(j.clientX-N.left,N.width))/N.width,Z=Ia/100,X=(W-Z)/(1-2*Z),H=Math.max(0,Math.min(1,X)),K=Math.round(H*3);h(K)},x=j=>{j.currentTarget.releasePointerCapture(j.pointerId),f(!1)},T=j=>Ia+j/3*(100-2*Ia),S=j=>Math.round(j*255).toString(16).padStart(2,"0"),I=n+S(o.gradientStartOpacity),D=n+S(o.gradientMidOpacity),z=n+S(o.gradientEndOpacity);return R.jsxs("div",{className:"flex flex-col gap-1.5 w-full",style:{marginBottom:"clamp(4px, 0.6svh, 8px)",marginTop:"clamp(8px, 1.2svh, 16px)"},children:[R.jsxs("div",{ref:p,className:"relative h-12 w-full flex items-center cursor-pointer select-none touch-none",onPointerDown:g,onPointerMove:_,onPointerUp:x,onPointerCancel:()=>f(!1),children:[R.jsx(ge.div,{className:"absolute inset-x-0 top-1/2 -translate-y-1/2",animate:{background:`linear-gradient(135deg, ${I}, ${D}, ${z})`},transition:{duration:o.colorTransitionDuration,ease:[.4,0,.2,1]},style:{height:`${o.trackHeight}px`,borderRadius:`${o.trackBorderRadius}px`,padding:1},children:R.jsx("div",{className:"w-full h-full bg-white/20",style:{borderRadius:`${o.trackBorderRadius}px`,backdropFilter:`blur(${o.trackBackdropBlur}px)`}})}),[0,1,2,3].map(j=>R.jsx(ge.div,{className:"absolute top-1/2 rounded-full z-10",animate:{backgroundColor:n,x:"-50%",y:"-50%"},transition:{backgroundColor:{duration:o.colorTransitionDuration,ease:[.4,0,.2,1]}},style:{width:`${o.dotSize}px`,height:`${o.dotSize}px`,left:`${T(j)}%`}},j)),R.jsx(ge.div,{className:"absolute top-1/2 z-20 flex items-center justify-center rounded-full",initial:!1,animate:{left:`${T(l)}%`,x:"-50%",y:"-50%",backgroundColor:n,width:d?o.thumbPressedSize:o.thumbSize,height:d?o.thumbPressedSize:o.thumbSize,boxShadow:d?`0 0 ${o.shadowPressedBlur}px ${o.shadowPressedGlow}px ${n}${S(o.shadowPressedOpacity)}, 0 2px 8px rgba(0,0,0,0.3)`:`0 2px ${o.shadowIdleBlur}px rgba(0,0,0,${o.shadowIdleOpacity})`},transition:{left:{type:"spring",visualDuration:o.springVisualDuration,bounce:o.springBounce},x:{type:"spring",visualDuration:o.springVisualDuration,bounce:o.springBounce},width:{type:"spring",visualDuration:o.springVisualDuration,bounce:o.springBounce},height:{type:"spring",visualDuration:o.springVisualDuration,bounce:o.springBounce},backgroundColor:{duration:o.colorTransitionDuration,ease:[.4,0,.2,1]},boxShadow:{duration:o.colorTransitionDuration,ease:[.4,0,.2,1]}}})]}),R.jsxs("div",{className:"flex justify-between items-center text-white font-medium px-4 tracking-[0.14px]",style:{fontSize:"clamp(12px, 2svh, 14px)"},children:[R.jsx("span",{children:"Underrated"}),R.jsx("span",{children:"Popular"})]})]})}const Wh="",i5=["party","feel-good","soft","indie","retro","sad","love","hiphop"],qp={party:{song_name:"Levitating",artist:["Dua Lipa"],album_image:"https://i.scdn.co/image/ab67616d0000b273d4daf28d55fe4197ede848be",spotify_url:"https://open.spotify.com/track/39LLxExYz6ewLAo9BPVTTA",popularity:85,release_year:2020,duration_ms:203064,album_name:"Future Nostalgia",album_id:"5lKlFlReHOLShQKyRv6AL9",release_date:"2020-03-27",release_date_precision:"day"},"feel-good":{song_name:"Here Comes the Sun",artist:["The Beatles"],album_image:"https://i.scdn.co/image/ab67616d0000b273dc30583ba717007b00cceb25",spotify_url:"https://open.spotify.com/track/6dGnYIeXmHdcikdzNNDMm2",popularity:82,release_year:1969,duration_ms:185733,album_name:"Abbey Road",album_id:"0ETFjACtuP2ADo6LFhL6HN",release_date:"1969-09-26",release_date_precision:"day"},soft:{song_name:"Skinny Love",artist:["Bon Iver"],album_image:"https://i.scdn.co/image/ab67616d0000b273a7d1a03d31c1a6f665cf6288",spotify_url:"https://open.spotify.com/track/2SrSdSvpminqmStGELCSNd",popularity:76,release_year:2008,duration_ms:218427,album_name:"For Emma, Forever Ago",album_id:"4bJCKmpKEbOmig1lCBMz9r",release_date:"2008-02-19",release_date_precision:"day"},indie:{song_name:"Do I Wanna Know?",artist:["Arctic Monkeys"],album_image:"https://i.scdn.co/image/ab67616d0000b2730c64e752dec4c08362cc4f3b",spotify_url:"https://open.spotify.com/track/5FVd6KXrgO9B3JPmGaZMoD",popularity:87,release_year:2013,duration_ms:272394,album_name:"AM",album_id:"78bpIziExqiI9qztvNFlQu",release_date:"2013-09-09",release_date_precision:"day"},retro:{song_name:"Dreams",artist:["Fleetwood Mac"],album_image:"https://i.scdn.co/image/ab67616d0000b273e52a59a28efa4773163d9a2b",spotify_url:"https://open.spotify.com/track/0ofHAoxe9vBkTCp2UQIavz",popularity:83,release_year:1977,duration_ms:254573,album_name:"Rumours",album_id:"1bt6q2SruMsBtcerNVtpZB",release_date:"1977-02-04",release_date_precision:"day"},sad:{song_name:"Motion Sickness",artist:["Phoebe Bridgers"],album_image:"https://i.scdn.co/image/ab67616d0000b2733e79e3388e41175bf16e20ab",spotify_url:"https://open.spotify.com/track/2bAZSDDKBLkdi3KlnPnEgb",popularity:73,release_year:2017,duration_ms:256200,album_name:"Stranger in the Alps",album_id:"7JHDsNJOiIuhBbKBbGJulq",release_date:"2017-09-22",release_date_precision:"day"},love:{song_name:"At Last",artist:["Etta James"],album_image:"https://i.scdn.co/image/ab67616d0000b27345c7f4be63e5361c4e8f4e78",spotify_url:"https://open.spotify.com/track/0m71tlxPsjVMPR9g3sJVud",popularity:78,release_year:1960,duration_ms:181333,album_name:"At Last!",album_id:"3lLzlv2v3OPElEO63YVEHX",release_date:"1960-11-15",release_date_precision:"day"},hiphop:{song_name:"m.A.A.d city",artist:["Kendrick Lamar","MC Eiht"],album_image:"https://i.scdn.co/image/ab67616d0000b273d28d2ebdedb220e479743797",spotify_url:"https://open.spotify.com/track/4MV4cRGSFWoYmmhdKkGaOH",popularity:74,release_year:2012,duration_ms:34e4,album_name:"good kid, m.A.A.d city",album_id:"3DGQ1iZ9XKUQxAUWjfC34w",release_date:"2012-10-22",release_date_precision:"day"}};function Hh(n){return n.includes("ab67616d0000b273")?n.replace("ab67616d0000b273","ab67616d00004851"):n}function em(n){return qp[n==="nostalgic"?"retro":n]??qp.indie}async function l5(n,r){const o=`${Wh}/api/get-song?mood=${encodeURIComponent(n)}&sliderValue=${encodeURIComponent(String(r))}`;let l;try{l=await fetch(o,{headers:{Accept:"application/json"},cache:"no-store"})}catch{return em(n)}const u=l.headers.get("content-type")??"";let d=null;return u.includes("application/json")?d=await l.json().catch(()=>null):d=await l.text().catch(()=>null),l.ok?d:em(n)}async function a5(n,r=80){const o=`${Wh}/api/get-album-images?mood=${encodeURIComponent(n)}&limit=${encodeURIComponent(String(r))}`;let l;try{l=await fetch(o,{headers:{Accept:"application/json"}})}catch{return[]}const d=(l.headers.get("content-type")??"").includes("application/json")?await l.json().catch(()=>({})):{};return l.ok?(Array.isArray(d==null?void 0:d.images)?d.images:[]).filter(p=>typeof p=="string").map(p=>Hh(p)):[]}async function u5(n=80){const r=await Promise.allSettled(i5.map(async l=>{const u=await a5(l,n);return{mood:l,images:u}})),o=new Map;for(const l of r)l.status==="fulfilled"&&o.set(l.value.mood,l.value.images);return o}function tm(n,r=20){const o=n.slice(0,r);return n.slice(r).forEach(u=>{const d=new Image;d.src=u}),Promise.all(o.map(u=>new Promise(d=>{const f=new Image;f.onload=()=>d(),f.onerror=()=>d(),f.src=u}))).then(()=>{})}const nr="/assets/256b80c8e3feddbc7d9121f96f8a5007c5f523ae-FvoqZGWd.png",c5=(n,r)=>Object.fromEntries(Object.entries(r).map(([o,l])=>[o,Object.fromEntries(Object.entries(l).map(([u,[d]])=>[u,d]))])),d5={cols:7,rows:9,tileSize:56,tileGap:14,rowGap:10,titleDelay:.15,titleDuration:.55,gridIntroDuration:.9,gridIntroBlur:18,enableCycling:!0,swapIntervalMs:380,swapJitterMs:100,swapsPerTick:1,shrinkMs:220,growMs:260,heroSize:58},f5={cols:5,rows:7,tileSize:46,tileGap:10,rowGap:8,titleDelay:.1,titleDuration:.45,gridIntroDuration:.85,gridIntroBlur:16,enableCycling:!0,swapIntervalMs:450,swapJitterMs:120,swapsPerTick:1,shrinkMs:200,growMs:240,heroSize:50};function p5(n){let r=0;for(let o=0;o<n.length;o+=1)r=r*31+n.charCodeAt(o)|0;return Math.abs(r)}const nm=Z0.memo(function({src:r,alt:o,className:l,loading:u="eager",style:d}){const[f,p]=E.useState(!1),[h,g]=E.useState(r),_=E.useRef(null);return E.useEffect(()=>{var y;(y=_.current)!=null&&y.complete&&_.current.naturalWidth>0&&p(!0)},[r]),E.useEffect(()=>{p(!1),g(r)},[r]),R.jsxs(R.Fragment,{children:[!f&&R.jsx("div",{className:"absolute inset-0 rounded-full",style:{background:"rgba(255,255,255,0.08)",animation:"pulse 1.6s ease-in-out infinite"}}),R.jsx("img",{ref:_,alt:o,className:l,src:h,loading:u,decoding:"async",onLoad:()=>p(!0),onError:()=>{h!==nr&&g(nr)},style:{...d,opacity:f?1:0,transition:"opacity 0.22s ease"}})]})});function m5({mood:n,popularity:r,images:o=[],highlightImageUrl:l,morph:u}){const[d,f]=E.useState(!1),[p,h]=E.useState(new Map),g=E.useRef([]),_=E.useRef([]),y=E.useRef(p);y.current=p,E.useEffect(()=>{var ue;const X=navigator,H=window.matchMedia("(prefers-reduced-motion: reduce)").matches,K=((ue=X.connection)==null?void 0:ue.saveData)===!0,J=typeof X.deviceMemory=="number"&&X.deviceMemory<=2,ie=typeof X.hardwareConcurrency=="number"&&X.hardwareConcurrency<=2;f(H||K||J&&ie)},[]);const x=d?f5:d5,T=c5("Loading Grid",{"Grid Intro":{gridIntroDuration:[1.15,.1,3,.05],gridIntroBlur:[16,0,40,1]},"Tile Swap":{swapIntervalMs:[950,200,3e3,50],swapJitterMs:[240,0,600,10],swapsPerTick:[2,1,5,1],shrinkMs:[380,100,600,10],growMs:[340,100,600,10]}}),S={...x,gridIntroDuration:T["Grid Intro"].gridIntroDuration,gridIntroBlur:T["Grid Intro"].gridIntroBlur,swapIntervalMs:T["Tile Swap"].swapIntervalMs,swapJitterMs:T["Tile Swap"].swapJitterMs,swapsPerTick:T["Tile Swap"].swapsPerTick,shrinkMs:T["Tile Swap"].shrinkMs,growMs:T["Tile Swap"].growMs},I=S.cols*S.rows,D=E.useMemo(()=>o.filter(Boolean).join("\0"),[o]),z=E.useRef(null);if(!z.current||z.current.key!==D+(l??"")||z.current.cols!==S.cols||z.current.maxTiles!==I){const X=o.filter(Boolean),H=Array.from(new Set(X)),K=l??null,J=K?Hh(K):null,ie=H.filter(L=>L!==J),ce=[...ie.length>0?ie:[nr]].sort(()=>Math.random()-.5),me=[];for(let L=0;L<I;L+=1)me.push(ce[L%ce.length]);const fe=[];for(let L=0;L<me.length;L+=S.cols){const V=me.slice(L,L+S.cols);if(V.length===0||(fe.push(V),fe.length>=S.rows))break}fe.length===0&&fe.push([nr]);let he=0,re=0;if(J){const L=p5(J);he=L%fe.length,re=Math.min(Math.floor(L/Math.max(1,fe.length))%S.cols,Math.max(0,S.cols-1));const V=fe[he]??[];V[re]=J,fe[he]=V}z.current={rows:fe,hero:J?{rowIndex:he,colIndex:re}:null,imagePool:ce,key:D+(l??""),cols:S.cols,maxTiles:I}}const{rows:j,hero:N,imagePool:O}=z.current,W=E.useCallback(()=>{var K;if(O.length<2)return;const X=j.flat().length,H=N?N.rowIndex*S.cols+N.colIndex:-1;for(let J=0;J<S.swapsPerTick;J++){let ie,ue=0;do ie=Math.floor(Math.random()*X),ue+=1;while(ue<20&&(ie===H||g.current.includes(ie)));g.current=[...g.current,ie].slice(-6),h(L=>{var k;const V=new Map(L),Y=((k=L.get(ie))==null?void 0:k.src)??O[ie%O.length];return V.set(ie,{src:Y,phase:"shrinking"}),V});const ce=((K=y.current.get(ie))==null?void 0:K.src)??O[ie%O.length];let me,fe=0;do me=O[Math.floor(Math.random()*O.length)],fe+=1;while(me===ce&&fe<5);const he=window.setTimeout(()=>{h(L=>{const V=new Map(L);return V.set(ie,{src:me,phase:"growing"}),V})},S.shrinkMs),re=window.setTimeout(()=>{h(L=>{const V=new Map(L);return V.set(ie,{src:me,phase:"idle"}),V})},S.shrinkMs+S.growMs);_.current.push(he,re)}},[O,j,N,S.cols,S.swapsPerTick,S.shrinkMs,S.growMs]);E.useEffect(()=>{if(!S.enableCycling||O.length<2)return;let X,H=!1;const K=()=>{const ie=(Math.random()*2-1)*S.swapJitterMs,ue=Math.max(200,S.swapIntervalMs+ie);X=window.setTimeout(()=>{H||(W(),K())},ue)},J=window.setTimeout(()=>{W(),K()},S.gridIntroDuration*1e3);return()=>{H=!0,window.clearTimeout(J),X&&window.clearTimeout(X),_.current.forEach(ie=>window.clearTimeout(ie)),_.current=[]}},[O.length,S.enableCycling,S.gridIntroDuration,S.swapIntervalMs,S.swapJitterMs,W]);const Z=X=>{const H=p.get(X);return H||{src:O.length>0?O[X%O.length]:nr,phase:"idle"}};return R.jsxs("div",{className:"w-screen flex flex-col items-center flex-1 pt-[16px] sm:pt-[24px]",children:[R.jsx("style",{children:`
        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
      `}),R.jsx(ge.p,{className:"font-['Spectral',serif] text-center text-white w-full px-6",style:{fontSize:"clamp(20px, 3.4svh, 24px)",lineHeight:"clamp(24px, 4svh, 28px)"},initial:{opacity:0,y:8},animate:{opacity:1,y:0},transition:{duration:S.titleDuration,delay:S.titleDelay},children:"Recommending the perfect one from our hand picked collection"}),R.jsx("div",{className:"flex-1 w-screen flex flex-col justify-center pointer-events-none",style:{marginTop:24,paddingBottom:"clamp(8px, 1.5svh, 24px)",marginLeft:"calc(50% - 50vw)",marginRight:"calc(50% - 50vw)",gap:S.rowGap},children:j.map((X,H)=>{const K=j.length,J=.45,ie=K>1?(S.gridIntroDuration-J)/(K-1):0,ue=H*ie;return R.jsx(ge.div,{className:"relative w-screen flex justify-center items-center",initial:{opacity:0,filter:`blur(${S.gridIntroBlur}px)`,y:18},animate:{opacity:1,filter:"blur(0px)",y:0},transition:{duration:J,delay:ue,ease:"easeOut"},style:{willChange:"filter, opacity, transform"},children:R.jsx("div",{className:"flex justify-center",style:{gap:S.tileGap},children:X.map((ce,me)=>{const fe=H*S.cols+me;if(N&&H===N.rowIndex&&me===N.colIndex)return R.jsx("div",{className:"relative rounded-full shrink-0 overflow-visible",style:{width:S.heroSize,height:S.heroSize},children:R.jsx(ge.div,{className:"absolute inset-0 overflow-hidden",layoutId:"song-album",initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},style:{borderRadius:u.startRadius},transition:{layout:{...u.spring},opacity:{duration:.28,delay:.08},scale:{duration:.28,delay:.08}},children:R.jsx(nm,{src:ce??nr,alt:"Featured album cover",className:"absolute inset-0 max-w-none object-cover size-full",loading:"eager"})})},`hero-${H}-${me}`);const re=Z(fe),L=re.phase==="shrinking",V=re.phase==="growing";return R.jsx("div",{className:"relative rounded-full shrink-0 overflow-hidden",style:{width:S.tileSize,height:S.tileSize},children:R.jsx("div",{className:"absolute inset-0",style:{transform:L?"scale(0.72)":"scale(1)",filter:L?"blur(6px)":"blur(0px)",transition:L?`transform ${S.shrinkMs}ms ease-in, filter ${S.shrinkMs}ms ease-in`:V?`transform ${S.growMs}ms ease-out, filter ${S.growMs}ms ease-out`:"none"},children:R.jsx(nm,{src:re.src,alt:"Album cover art",className:"absolute inset-0 max-w-none object-cover size-full",loading:"lazy"})})},`tile-${H}-${me}`)})})},`row-${H}`)})})]})}const rm={p2d573100:"M15.6754 10.9669C12.5006 12.8523 7.26372 13.0257 4.23295 12.1058C3.74624 11.9581 3.23154 12.233 3.08411 12.7196C2.93659 13.2066 3.21105 13.7209 3.69813 13.8689C7.17725 14.9249 12.9608 14.721 16.6157 12.5514C17.0535 12.2914 17.1971 11.7261 16.9376 11.2891C16.6779 10.8513 16.1121 10.707 15.6754 10.9669ZM15.5714 8.1743C15.3487 7.81286 14.8761 7.69949 14.5151 7.92143C11.8683 9.54844 7.83221 10.0198 4.70078 9.06921C4.2947 8.94649 3.86578 9.17547 3.74243 9.58078C3.62007 9.98686 3.84915 10.415 4.2545 10.5385C7.8317 11.624 12.2787 11.0982 15.3188 9.23001C15.6797 9.00769 15.7934 8.5349 15.5714 8.1743ZM14.3662 5.49237C14.1892 5.2021 13.8113 5.11118 13.5221 5.2881C11.2093 6.70166 8.29811 7.02087 4.86971 6.23782C4.53933 6.16207 4.21006 6.36909 4.13472 6.69945C4.05905 7.02969 4.26529 7.35901 4.5964 7.4344C8.34819 8.29209 11.5665 7.92295 14.1625 6.3366C14.452 6.15982 14.5431 5.78171 14.3662 5.49237ZM9.84926 19.6984C4.40974 19.6984 0 15.2888 0 9.84936C0 4.40928 4.40974 0 9.84926 0C15.2889 0 19.6984 4.40928 19.6984 9.84936C19.6984 15.2888 15.2889 19.6984 9.84926 19.6984Z",p3810fe00:"M7.23729 17.3588C6.37826 16.987 5.62931 16.4817 4.99042 15.8428C4.35153 15.2039 3.84618 14.455 3.47438 13.5959C3.10257 12.737 2.91667 11.8161 2.91667 10.8332H4.16667C4.16667 12.4582 4.73264 13.8367 5.86458 14.9686C6.99653 16.1006 8.375 16.6666 10 16.6666C11.625 16.6666 13.0035 16.1006 14.1354 14.9686C15.2674 13.8367 15.8333 12.4582 15.8333 10.8332C15.8333 9.20822 15.2674 7.82975 14.1354 6.69781C13.0035 5.56586 11.625 4.99989 10 4.99989H9.77875L11.1025 6.32364L10.2244 7.22739L7.37188 4.36697L10.2404 1.50635L11.1185 2.4101L9.77875 3.74989H10C10.9829 3.74989 11.9038 3.93579 12.7627 4.3076C13.6217 4.6794 14.3707 5.18475 15.0096 5.82364C15.6485 6.46253 16.1538 7.21149 16.5256 8.07052C16.8974 8.9294 17.0833 9.85031 17.0833 10.8332C17.0833 11.8161 16.8974 12.737 16.5256 13.5959C16.1538 14.455 15.6485 15.2039 15.0096 15.8428C14.3707 16.4817 13.6217 16.987 12.7627 17.3588C11.9038 17.7307 10.9829 17.9166 10 17.9166C9.01708 17.9166 8.09618 17.7307 7.23729 17.3588Z"},h5=["underrated","moderate","well-known","popular"];function _5({mood:n,popularity:r,accentColor:o,onStartOver:l,song:u,morph:d}){var D;const f=h5[r]||"popular",p=(u==null?void 0:u.song_name)??"No song found",h=(D=u==null?void 0:u.artist)!=null&&D.length?u.artist.join(", "):"Unknown Artist",g=(u==null?void 0:u.album_name)??"Unknown album",_=(u==null?void 0:u.album_image)??nr,y=(u==null?void 0:u.spotify_url)??null,x=E.useRef(null),T=E.useRef(null),[S,I]=E.useState(0);return E.useEffect(()=>{const z=x.current,j=T.current;if(z&&j){const N=z.scrollWidth-j.clientWidth;I(N>0?N:0)}},[h]),R.jsxs("div",{className:"w-full flex flex-col items-center justify-between flex-1",children:[R.jsxs("div",{className:"flex flex-col items-center w-full mt-auto",style:{gap:"clamp(16px, 3svh, 32px)"},children:[R.jsx(ge.div,{className:"flex flex-col items-center w-full",initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{duration:.5,delay:.15},children:R.jsxs("p",{className:"font-['Spectral',serif] text-center text-white w-full",style:{fontSize:"clamp(20px, 3.4svh, 24px)",lineHeight:"clamp(24px, 4svh, 28px)"},children:[`Here's a perfect ${f} `,R.jsx("br",{}),`${n} song for you`]})}),R.jsx("div",{className:"w-full",children:R.jsxs("div",{className:"relative w-full aspect-square mx-auto",style:{maxWidth:"min(100%, 76vw)",maxHeight:"min(320px, 36vh)"},children:[R.jsx(ge.div,{className:"absolute inset-0 pointer-events-none",style:{borderRadius:d.endRadius},initial:{opacity:0,boxShadow:"0px 0px 0px rgba(19,15,41,0)"},animate:{opacity:1,boxShadow:"0px 9px 14px rgba(19,15,41,0.5)"},transition:{duration:.8,delay:.5,ease:"easeOut"}}),R.jsx(ge.div,{className:"absolute inset-0 overflow-hidden",layoutId:"song-album",style:{borderRadius:d.endRadius},transition:{layout:{...d.spring}},children:R.jsx("img",{alt:g,className:"absolute inset-0 max-w-none object-cover size-full",src:_})})]})}),R.jsxs(ge.div,{className:"flex flex-col items-center w-full px-[24px]",style:{gap:"clamp(2px, 0.6svh, 4px)"},initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{duration:.5,delay:.4},children:[R.jsx("p",{className:"font-['Spectral',serif] text-white tracking-[-0.96px] text-center overflow-hidden text-ellipsis whitespace-nowrap w-full",style:{fontSize:"clamp(20px, 3.4svh, 24px)",lineHeight:"clamp(24px, 4svh, 28px)"},children:p}),R.jsxs("div",{className:"flex flex-col items-center text-white/80 tracking-[-0.48px] w-full",style:{fontSize:"clamp(14px, 2.3svh, 16px)"},children:[R.jsx("div",{ref:T,className:"overflow-hidden whitespace-nowrap w-full relative",style:{maskImage:S>0?"linear-gradient(to right, transparent, black 8%, black 92%, transparent)":void 0,WebkitMaskImage:S>0?"linear-gradient(to right, transparent, black 8%, black 92%, transparent)":void 0},children:R.jsxs(ge.span,{ref:x,className:"inline-block text-center w-full",style:{width:S>0?"auto":"100%"},animate:S>0?{x:[0,-S,0]}:{x:0},transition:S>0?{duration:Math.max(10,S/12),repeat:1/0,ease:"easeInOut",repeatDelay:2.5}:void 0,children:["by ",h]})}),R.jsxs("p",{className:"overflow-hidden text-center w-full whitespace-nowrap text-ellipsis",children:["From ",g]})]})]})]}),R.jsxs(ge.div,{className:"flex flex-col items-center w-full mt-auto",style:{gap:"clamp(6px, 1.2svh, 8px)"},initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{duration:.5,delay:.55},children:[R.jsxs(ge.a,{className:"w-full flex gap-[8px] items-center justify-center rounded-[1000px] text-white cursor-pointer",style:{padding:"clamp(10px, 1.8svh, 16px) 0",opacity:y?1:.6,pointerEvents:y?"auto":"none"},animate:{backgroundColor:o},transition:{duration:.8,ease:"easeInOut"},whileTap:{scale:.98},href:y??void 0,target:y?"_blank":void 0,rel:y?"noopener noreferrer":void 0,"aria-disabled":!y,"aria-label":`Open ${p} on Spotify`,children:[R.jsx("div",{className:"overflow-clip relative shrink-0 size-[20px]","aria-hidden":"true",children:R.jsx("svg",{className:"absolute block size-full",fill:"none",preserveAspectRatio:"none",viewBox:"0 0 19.6984 19.6984",role:"img","aria-label":"Spotify logo",style:{transform:"scaleY(-1)"},children:R.jsx("path",{d:rm.p2d573100,fill:"white"})})}),R.jsx("span",{className:"font-['Switzer',sans-serif] tracking-[-0.16px] whitespace-nowrap font-medium",style:{fontSize:"clamp(14px, 2.3svh, 16px)"},children:"Add to Spotify"})]}),R.jsxs("button",{className:"w-full flex gap-[8px] items-center justify-center rounded-[1000px] relative cursor-pointer bg-transparent",style:{padding:"clamp(10px, 1.8svh, 16px) 0"},onClick:l,children:[R.jsx("div",{"aria-hidden":"true",className:"absolute border border-white/80 border-solid inset-0 pointer-events-none rounded-[1000px]"}),R.jsx("div",{className:"relative shrink-0 size-[20px]","aria-hidden":"true",children:R.jsxs("svg",{className:"absolute block size-full",fill:"none",preserveAspectRatio:"none",viewBox:"0 0 20 20",role:"img","aria-label":"Replay icon",children:[R.jsx("mask",{height:"20",id:"mask_replay",maskUnits:"userSpaceOnUse",style:{maskType:"alpha"},width:"20",x:"0",y:"0",children:R.jsx("rect",{fill:"#D9D9D9",height:"20",width:"20"})}),R.jsx("g",{mask:"url(#mask_replay)",children:R.jsx("path",{d:rm.p3810fe00,fill:"white",fillOpacity:"0.8"})})]})}),R.jsx("span",{className:"font-['Switzer',sans-serif] text-white/80 tracking-[-0.16px] whitespace-nowrap font-medium",style:{fontSize:"clamp(14px, 2.3svh, 16px)"},children:"Start over"})]})]})]})}sm();var g5=`svg[fill=none] {
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
}`,y5={popup:"styles-module__popup___IhzrD",enter:"styles-module__enter___L7U7N",entered:"styles-module__entered___COX-w",exit:"styles-module__exit___5eGjE",shake:"styles-module__shake___jdbWe",header:"styles-module__header___wWsSi",element:"styles-module__element___fTV2z",headerToggle:"styles-module__headerToggle___WpW0b",chevron:"styles-module__chevron___ZZJlR",expanded:"styles-module__expanded___2Hxgv",stylesWrapper:"styles-module__stylesWrapper___pnHgy",stylesInner:"styles-module__stylesInner___YYZe2",stylesBlock:"styles-module__stylesBlock___VfQKn",styleLine:"styles-module__styleLine___1YQiD",styleProperty:"styles-module__styleProperty___84L1i",styleValue:"styles-module__styleValue___q51-h",timestamp:"styles-module__timestamp___Dtpsv",quote:"styles-module__quote___mcMmQ",textarea:"styles-module__textarea___jrSae",actions:"styles-module__actions___D6x3f",cancel:"styles-module__cancel___hRjnL",submit:"styles-module__submit___K-mIR",deleteWrapper:"styles-module__deleteWrapper___oSjdo",deleteButton:"styles-module__deleteButton___4VuAE",light:"styles-module__light___6AaSQ"};if(typeof document<"u"){let n=document.getElementById("feedback-tool-styles-annotation-popup-css-styles");n||(n=document.createElement("style"),n.id="feedback-tool-styles-annotation-popup-css-styles",n.textContent=g5,document.head.appendChild(n))}var Ce=y5,v5=({size:n=24})=>R.jsx("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:R.jsx("path",{d:"M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4383 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z",fill:"currentColor"})}),Aa="__agentation_freeze";function x5(){if(typeof window>"u")return{frozen:!1,installed:!0,origSetTimeout:setTimeout,origSetInterval:setInterval,origRAF:r=>0,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]};const n=window;return n[Aa]||(n[Aa]={frozen:!1,installed:!1,origSetTimeout:null,origSetInterval:null,origRAF:null,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]}),n[Aa]}var Je=x5();typeof window<"u"&&!Je.installed&&(Je.origSetTimeout=window.setTimeout.bind(window),Je.origSetInterval=window.setInterval.bind(window),Je.origRAF=window.requestAnimationFrame.bind(window),window.setTimeout=(n,r,...o)=>typeof n=="string"?Je.origSetTimeout(n,r):Je.origSetTimeout((...l)=>{Je.frozen?Je.frozenTimeoutQueue.push(()=>n(...l)):n(...l)},r,...o),window.setInterval=(n,r,...o)=>typeof n=="string"?Je.origSetInterval(n,r):Je.origSetInterval((...l)=>{Je.frozen||n(...l)},r,...o),window.requestAnimationFrame=n=>Je.origRAF(r=>{Je.frozen?Je.frozenRAFQueue.push(n):n(r)}),Je.installed=!0);var Er=Je.origSetTimeout;Je.origSetInterval;E.forwardRef(function({element:r,timestamp:o,selectedText:l,placeholder:u="What should change?",initialValue:d="",submitLabel:f="Add",onSubmit:p,onCancel:h,onDelete:g,style:_,accentColor:y="#3c82f7",isExiting:x=!1,lightMode:T=!1,computedStyles:S},I){const[D,z]=E.useState(d),[j,N]=E.useState(!1),[O,W]=E.useState("initial"),[Z,X]=E.useState(!1),[H,K]=E.useState(!1),J=E.useRef(null),ie=E.useRef(null),ue=E.useRef(null),ce=E.useRef(null);E.useEffect(()=>{x&&O!=="exit"&&W("exit")},[x,O]),E.useEffect(()=>{Er(()=>{W("enter")},0);const V=Er(()=>{W("entered")},200),Y=Er(()=>{const k=J.current;k&&(k.focus(),k.selectionStart=k.selectionEnd=k.value.length,k.scrollTop=k.scrollHeight)},50);return()=>{clearTimeout(V),clearTimeout(Y),ue.current&&clearTimeout(ue.current),ce.current&&clearTimeout(ce.current)}},[]);const me=E.useCallback(()=>{ce.current&&clearTimeout(ce.current),N(!0),ce.current=Er(()=>{var V;N(!1),(V=J.current)==null||V.focus()},250)},[]);E.useImperativeHandle(I,()=>({shake:me}),[me]);const fe=E.useCallback(()=>{W("exit"),ue.current=Er(()=>{h()},150)},[h]),he=E.useCallback(()=>{D.trim()&&p(D.trim())},[D,p]),re=E.useCallback(V=>{V.nativeEvent.isComposing||(V.key==="Enter"&&!V.shiftKey&&(V.preventDefault(),he()),V.key==="Escape"&&fe())},[he,fe]),L=[Ce.popup,T?Ce.light:"",O==="enter"?Ce.enter:"",O==="entered"?Ce.entered:"",O==="exit"?Ce.exit:"",j?Ce.shake:""].filter(Boolean).join(" ");return R.jsxs("div",{ref:ie,className:L,"data-annotation-popup":!0,style:_,onClick:V=>V.stopPropagation(),children:[R.jsxs("div",{className:Ce.header,children:[S&&Object.keys(S).length>0?R.jsxs("button",{className:Ce.headerToggle,onClick:()=>{const V=H;K(!H),V&&Er(()=>{var Y;return(Y=J.current)==null?void 0:Y.focus()},0)},type:"button",children:[R.jsx("svg",{className:`${Ce.chevron} ${H?Ce.expanded:""}`,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:R.jsx("path",{d:"M5.5 10.25L9 7.25L5.75 4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),R.jsx("span",{className:Ce.element,children:r})]}):R.jsx("span",{className:Ce.element,children:r}),o&&R.jsx("span",{className:Ce.timestamp,children:o})]}),S&&Object.keys(S).length>0&&R.jsx("div",{className:`${Ce.stylesWrapper} ${H?Ce.expanded:""}`,children:R.jsx("div",{className:Ce.stylesInner,children:R.jsx("div",{className:Ce.stylesBlock,children:Object.entries(S).map(([V,Y])=>R.jsxs("div",{className:Ce.styleLine,children:[R.jsx("span",{className:Ce.styleProperty,children:V.replace(/([A-Z])/g,"-$1").toLowerCase()}),": ",R.jsx("span",{className:Ce.styleValue,children:Y}),";"]},V))})})}),l&&R.jsxs("div",{className:Ce.quote,children:["“",l.slice(0,80),l.length>80?"...":"","”"]}),R.jsx("textarea",{ref:J,className:Ce.textarea,style:{borderColor:Z?y:void 0},placeholder:u,value:D,onChange:V=>z(V.target.value),onFocus:()=>X(!0),onBlur:()=>X(!1),rows:2,onKeyDown:re}),R.jsxs("div",{className:Ce.actions,children:[g&&R.jsx("div",{className:Ce.deleteWrapper,children:R.jsx("button",{className:Ce.deleteButton,onClick:g,type:"button",children:R.jsx(v5,{size:22})})}),R.jsx("button",{className:Ce.cancel,onClick:fe,children:"Cancel"}),R.jsx("button",{className:Ce.submit,style:{backgroundColor:y,opacity:D.trim()?1:.4},onClick:he,disabled:!D.trim(),children:f})]})]})});var w5=`svg[fill=none] {
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
}`;if(typeof document<"u"){let n=document.getElementById("feedback-tool-styles-page-toolbar-css-styles");n||(n=document.createElement("style"),n.id="feedback-tool-styles-page-toolbar-css-styles",n.textContent=w5,document.head.appendChild(n))}const S5="#5A54F2";function ja(n,r){const o=parseInt(n.slice(1,3),16),l=parseInt(n.slice(3,5),16),u=parseInt(n.slice(5,7),16),d=h=>r>1?Math.round(h+(255-h)*(r-1)):Math.round(h*r),f=h=>Math.max(0,Math.min(255,h)),p=h=>f(h).toString(16).padStart(2,"0");return`#${p(d(o))}${p(d(l))}${p(d(u))}`}function k5(n,r,o){const l=Math.max(0,Math.min(1,o)),u=parseInt(n.slice(1,3),16),d=parseInt(n.slice(3,5),16),f=parseInt(n.slice(5,7),16),p=parseInt(r.slice(1,3),16),h=parseInt(r.slice(3,5),16),g=parseInt(r.slice(5,7),16),_=y=>Math.round(y).toString(16).padStart(2,"0");return`#${_(u+(p-u)*l)}${_(d+(h-d)*l)}${_(f+(g-f)*l)}`}function b5(){const[n,r]=E.useState(null),[o,l]=E.useState(0),[u,d]=E.useState("mood"),[f,p]=E.useState(null),[h,g]=E.useState(null),[_,y]=E.useState(!1),[x,T]=E.useState(!1),S={bgTransitionDuration:.5,bgBrightnessOffset:.22,screenFadeDuration:.6},I={startRadius:999,endRadius:32,spring:{type:"spring",stiffness:120,damping:24,mass:1}},D=E.useCallback(re=>{r(re)},[]),z=n&&Jp[n]?Jp[n]:{from:S5},j=1.2-o/3*.2,N=ja(z.from,j),O=ja(z.from,j),W=ja(z.from,j+S.bgBrightnessOffset),Z=k5(O,W,.5),X=n??"indie",H=X?`songrec — ${X}`:"songrec",K=X?`songrec picks a ${X} track for you based on your mood and popularity slider.`:"songrec — mood-based music recommendations tailored to your vibe.";E.useEffect(()=>{if(typeof document>"u")return;const re=document.documentElement;re.style.setProperty("--app-bg-from",O),re.style.setProperty("--app-bg-to",W);const L=document.querySelector("meta[name='theme-color']");L&&L.setAttribute("content",Z),document.title=H;const V=document.querySelector("meta[name='description']");V&&V.setAttribute("content",K);const Y=`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><rect width='64' height='64' rx='16' ry='16' fill='${O}'/><circle cx='32' cy='32' r='18' fill='rgba(255,255,255,0.9)'/><circle cx='26' cy='28' r='3' fill='#2a2a2a'/><circle cx='38' cy='28' r='3' fill='#2a2a2a'/><path d='M22 38 Q32 45 42 38' stroke='#2a2a2a' stroke-width='3.5' fill='none' stroke-linecap='round'/></svg>`,k=`data:image/svg+xml;utf8,${encodeURIComponent(Y)}`,A=document.querySelector("link[rel='icon']");A&&A.setAttribute("href",k);const ae=document.querySelector("link[rel='apple-touch-icon']");ae&&ae.setAttribute("href",k)},[O,W,Z]);const J=n??"__default__",ie=E.useRef(new Map),[ue,ce]=E.useState([]),me=E.useRef(null);E.useEffect(()=>{u5(80).then(re=>{ie.current=re,n&&re.has(n)&&(ce(re.get(n)),g(n))}).catch(()=>{})},[]),E.useEffect(()=>{if(!n||me.current===n)return;const re=ie.current.get(n);re&&re.length>0&&(ce(re),g(n),tm(re,20),me.current=n)},[n]);const fe=E.useCallback(async()=>{if(!n)return;const re=n,L=Math.round(o/3*100);p(null),d("loading");const V=3e3,Y=new Promise(A=>setTimeout(A,V));if(h!==re||ue.length===0){const A=ie.current.get(re);A&&A.length>0&&(ce(A),g(re),tm(A,20))}const k=await l5(re,L);p(k),await Y,d("result")},[n,o,h,ue.length]),he=()=>{d("mood"),p(null)};return R.jsxs("div",{className:"relative overflow-hidden flex flex-col items-center justify-between font-['Inter',sans-serif]",style:{minHeight:"100svh",height:"100dvh"},children:[null,R.jsx(su,{children:R.jsx(ge.div,{className:"absolute inset-0",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:S.bgTransitionDuration,ease:"easeInOut"}},J)}),R.jsx(ge.div,{className:"absolute inset-0",animate:{background:`linear-gradient(to bottom, ${O}, ${W})`},transition:{duration:S.bgTransitionDuration,ease:"easeInOut"}}),R.jsxs("main",{className:"relative z-10 w-full flex flex-col items-center justify-between px-[24px] pt-[calc(16px+env(safe-area-inset-top))] pb-[calc(16px+env(safe-area-inset-bottom))] overflow-hidden",style:{minHeight:"100svh",height:"100dvh",gap:"clamp(8px, 1.5svh, 24px)"},children:[R.jsxs(ge.header,{className:"w-full flex justify-between items-center text-white font-['Spectral',serif] tracking-wide shrink-0",style:{fontSize:"clamp(15px, 2.4svh, 18px)"},...Nr(0),children:[R.jsx("span",{children:"songrec"}),R.jsx("span",{children:"curated by tanuj"})]}),R.jsx(Wv,{children:R.jsx("div",{className:"relative flex-1 w-full",children:R.jsxs(su,{mode:"sync",children:[u==="mood"&&R.jsx(ge.div,{className:"absolute inset-0 flex flex-col items-center justify-between w-full",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:S.screenFadeDuration,ease:"easeInOut"},children:R.jsxs("div",{className:"w-full max-w-[400px] mx-auto flex flex-col items-center justify-between flex-1",children:[R.jsx("div",{className:"flex-1 flex flex-col items-center justify-center w-full mx-[0px] mt-[16px] mb-[0px]",children:R.jsx(s5,{onMoodConfirmed:D,accentColor:N,selectedMood:n,nudge:_,entranceDelay:.08})}),R.jsxs("div",{className:"w-full flex flex-col items-center",style:{gap:"clamp(12px, 2svh, 16px)",marginTop:"clamp(12px, 2svh, 16px)",marginBottom:"clamp(4px, 0.8svh, 8px)"},children:[R.jsx(ge.div,{className:"w-full",...Nr(.38),children:R.jsx(o5,{accentColor:N,onValueChange:l})}),R.jsx(ge.div,{className:"w-full",...Nr(.48),children:R.jsx(ge.button,{className:"w-full text-white font-medium rounded-full transition-shadow duration-300 active:scale-[0.98] cursor-pointer",style:{fontSize:"clamp(15px, 2.6svh, 18px)",padding:"clamp(10px, 1.8svh, 14px) 0",opacity:n?1:.55,cursor:n?"pointer":"not-allowed"},animate:{backgroundColor:N,boxShadow:`0 4px 12px ${N}4D`,x:x?[0,-8,8,-6,6,-3,3,0]:0},transition:{duration:.8,ease:"easeInOut",x:{duration:.5,ease:"easeInOut"}},onClick:()=>{if(!n){T(!0),y(!0),setTimeout(()=>{T(!1),y(!1)},800);return}fe()},"aria-disabled":!n,children:"Recommend"})})]})]})},"mood-screen"),u==="loading"&&R.jsx(ge.div,{className:"absolute inset-0 flex flex-col items-center w-full",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0,transition:{duration:.3,ease:"easeOut"}},transition:{duration:S.screenFadeDuration,ease:"easeIn"},children:R.jsx(m5,{mood:n||"indie",popularity:String(o),images:ue,highlightImageUrl:(f==null?void 0:f.album_image)??null,morph:I})},"loading-screen"),u==="result"&&R.jsx(ge.div,{className:"absolute inset-0 flex flex-col items-center w-full",initial:{opacity:1},animate:{opacity:1},exit:{opacity:0},transition:{duration:S.screenFadeDuration,ease:"easeOut"},children:R.jsx("div",{className:"w-full max-w-[400px] mx-auto flex flex-col items-center flex-1",children:R.jsx(_5,{mood:n||"indie",popularity:o,accentColor:N,onStartOver:he,song:f,morph:I})})},"result-screen")]})})})]})]})}G0.createRoot(document.getElementById("root")).render(R.jsx(b5,{}));
