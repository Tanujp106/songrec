(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const d of a)if(d.type==="childList")for(const c of d.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function i(a){const d={};return a.integrity&&(d.integrity=a.integrity),a.referrerPolicy&&(d.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?d.credentials="include":a.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function o(a){if(a.ep)return;a.ep=!0;const d=i(a);fetch(a.href,d)}})();var Ta={exports:{}},Rs={},Ea={exports:{}},ye={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wf;function bg(){if(Wf)return ye;Wf=1;var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),d=Symbol.for("react.provider"),c=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),y=Symbol.iterator;function x(T){return T===null||typeof T!="object"?null:(T=y&&T[y]||T["@@iterator"],typeof T=="function"?T:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j=Object.assign,k={};function P(T,O,oe){this.props=T,this.context=O,this.refs=k,this.updater=oe||S}P.prototype.isReactComponent={},P.prototype.setState=function(T,O){if(typeof T!="object"&&typeof T!="function"&&T!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,T,O,"setState")},P.prototype.forceUpdate=function(T){this.updater.enqueueForceUpdate(this,T,"forceUpdate")};function A(){}A.prototype=P.prototype;function R(T,O,oe){this.props=T,this.context=O,this.refs=k,this.updater=oe||S}var N=R.prototype=new A;N.constructor=R,j(N,P.prototype),N.isPureReactComponent=!0;var I=Array.isArray,z=Object.prototype.hasOwnProperty,Q={current:null},q={key:!0,ref:!0,__self:!0,__source:!0};function X(T,O,oe){var ae,de={},he=null,ve=null;if(O!=null)for(ae in O.ref!==void 0&&(ve=O.ref),O.key!==void 0&&(he=""+O.key),O)z.call(O,ae)&&!q.hasOwnProperty(ae)&&(de[ae]=O[ae]);var ge=arguments.length-2;if(ge===1)de.children=oe;else if(1<ge){for(var ke=Array(ge),tt=0;tt<ge;tt++)ke[tt]=arguments[tt+2];de.children=ke}if(T&&T.defaultProps)for(ae in ge=T.defaultProps,ge)de[ae]===void 0&&(de[ae]=ge[ae]);return{$$typeof:n,type:T,key:he,ref:ve,props:de,_owner:Q.current}}function $(T,O){return{$$typeof:n,type:T.type,key:O,ref:T.ref,props:T.props,_owner:T._owner}}function ne(T){return typeof T=="object"&&T!==null&&T.$$typeof===n}function me(T){var O={"=":"=0",":":"=2"};return"$"+T.replace(/[=:]/g,function(oe){return O[oe]})}var _e=/\/+/g;function pe(T,O){return typeof T=="object"&&T!==null&&T.key!=null?me(""+T.key):O.toString(36)}function we(T,O,oe,ae,de){var he=typeof T;(he==="undefined"||he==="boolean")&&(T=null);var ve=!1;if(T===null)ve=!0;else switch(he){case"string":case"number":ve=!0;break;case"object":switch(T.$$typeof){case n:case r:ve=!0}}if(ve)return ve=T,de=de(ve),T=ae===""?"."+pe(ve,0):ae,I(de)?(oe="",T!=null&&(oe=T.replace(_e,"$&/")+"/"),we(de,O,oe,"",function(tt){return tt})):de!=null&&(ne(de)&&(de=$(de,oe+(!de.key||ve&&ve.key===de.key?"":(""+de.key).replace(_e,"$&/")+"/")+T)),O.push(de)),1;if(ve=0,ae=ae===""?".":ae+":",I(T))for(var ge=0;ge<T.length;ge++){he=T[ge];var ke=ae+pe(he,ge);ve+=we(he,O,oe,ke,de)}else if(ke=x(T),typeof ke=="function")for(T=ke.call(T),ge=0;!(he=T.next()).done;)he=he.value,ke=ae+pe(he,ge++),ve+=we(he,O,oe,ke,de);else if(he==="object")throw O=String(T),Error("Objects are not valid as a React child (found: "+(O==="[object Object]"?"object with keys {"+Object.keys(T).join(", ")+"}":O)+"). If you meant to render a collection of children, use an array instead.");return ve}function ce(T,O,oe){if(T==null)return T;var ae=[],de=0;return we(T,ae,"","",function(he){return O.call(oe,he,de++)}),ae}function Se(T){if(T._status===-1){var O=T._result;O=O(),O.then(function(oe){(T._status===0||T._status===-1)&&(T._status=1,T._result=oe)},function(oe){(T._status===0||T._status===-1)&&(T._status=2,T._result=oe)}),T._status===-1&&(T._status=0,T._result=O)}if(T._status===1)return T._result.default;throw T._result}var le={current:null},V={transition:null},U={ReactCurrentDispatcher:le,ReactCurrentBatchConfig:V,ReactCurrentOwner:Q};function H(){throw Error("act(...) is not supported in production builds of React.")}return ye.Children={map:ce,forEach:function(T,O,oe){ce(T,function(){O.apply(this,arguments)},oe)},count:function(T){var O=0;return ce(T,function(){O++}),O},toArray:function(T){return ce(T,function(O){return O})||[]},only:function(T){if(!ne(T))throw Error("React.Children.only expected to receive a single React element child.");return T}},ye.Component=P,ye.Fragment=i,ye.Profiler=a,ye.PureComponent=R,ye.StrictMode=o,ye.Suspense=h,ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=U,ye.act=H,ye.cloneElement=function(T,O,oe){if(T==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+T+".");var ae=j({},T.props),de=T.key,he=T.ref,ve=T._owner;if(O!=null){if(O.ref!==void 0&&(he=O.ref,ve=Q.current),O.key!==void 0&&(de=""+O.key),T.type&&T.type.defaultProps)var ge=T.type.defaultProps;for(ke in O)z.call(O,ke)&&!q.hasOwnProperty(ke)&&(ae[ke]=O[ke]===void 0&&ge!==void 0?ge[ke]:O[ke])}var ke=arguments.length-2;if(ke===1)ae.children=oe;else if(1<ke){ge=Array(ke);for(var tt=0;tt<ke;tt++)ge[tt]=arguments[tt+2];ae.children=ge}return{$$typeof:n,type:T.type,key:de,ref:he,props:ae,_owner:ve}},ye.createContext=function(T){return T={$$typeof:c,_currentValue:T,_currentValue2:T,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},T.Provider={$$typeof:d,_context:T},T.Consumer=T},ye.createElement=X,ye.createFactory=function(T){var O=X.bind(null,T);return O.type=T,O},ye.createRef=function(){return{current:null}},ye.forwardRef=function(T){return{$$typeof:p,render:T}},ye.isValidElement=ne,ye.lazy=function(T){return{$$typeof:g,_payload:{_status:-1,_result:T},_init:Se}},ye.memo=function(T,O){return{$$typeof:m,type:T,compare:O===void 0?null:O}},ye.startTransition=function(T){var O=V.transition;V.transition={};try{T()}finally{V.transition=O}},ye.unstable_act=H,ye.useCallback=function(T,O){return le.current.useCallback(T,O)},ye.useContext=function(T){return le.current.useContext(T)},ye.useDebugValue=function(){},ye.useDeferredValue=function(T){return le.current.useDeferredValue(T)},ye.useEffect=function(T,O){return le.current.useEffect(T,O)},ye.useId=function(){return le.current.useId()},ye.useImperativeHandle=function(T,O,oe){return le.current.useImperativeHandle(T,O,oe)},ye.useInsertionEffect=function(T,O){return le.current.useInsertionEffect(T,O)},ye.useLayoutEffect=function(T,O){return le.current.useLayoutEffect(T,O)},ye.useMemo=function(T,O){return le.current.useMemo(T,O)},ye.useReducer=function(T,O,oe){return le.current.useReducer(T,O,oe)},ye.useRef=function(T){return le.current.useRef(T)},ye.useState=function(T){return le.current.useState(T)},ye.useSyncExternalStore=function(T,O,oe){return le.current.useSyncExternalStore(T,O,oe)},ye.useTransition=function(){return le.current.useTransition()},ye.version="18.3.1",ye}var Yf;function Cu(){return Yf||(Yf=1,Ea.exports=bg()),Ea.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hf;function Cg(){if(Hf)return Rs;Hf=1;var n=Cu(),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(p,h,m){var g,y={},x=null,S=null;m!==void 0&&(x=""+m),h.key!==void 0&&(x=""+h.key),h.ref!==void 0&&(S=h.ref);for(g in h)o.call(h,g)&&!d.hasOwnProperty(g)&&(y[g]=h[g]);if(p&&p.defaultProps)for(g in h=p.defaultProps,h)y[g]===void 0&&(y[g]=h[g]);return{$$typeof:r,type:p,key:x,ref:S,props:y,_owner:a.current}}return Rs.Fragment=i,Rs.jsx=c,Rs.jsxs=c,Rs}var $f;function Pg(){return $f||($f=1,Ta.exports=Cg()),Ta.exports}var v=Pg(),po={},ja={exports:{}},Ct={},Ma={exports:{}},Da={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xf;function Tg(){return Xf||(Xf=1,(function(n){function r(V,U){var H=V.length;V.push(U);e:for(;0<H;){var T=H-1>>>1,O=V[T];if(0<a(O,U))V[T]=U,V[H]=O,H=T;else break e}}function i(V){return V.length===0?null:V[0]}function o(V){if(V.length===0)return null;var U=V[0],H=V.pop();if(H!==U){V[0]=H;e:for(var T=0,O=V.length,oe=O>>>1;T<oe;){var ae=2*(T+1)-1,de=V[ae],he=ae+1,ve=V[he];if(0>a(de,H))he<O&&0>a(ve,de)?(V[T]=ve,V[he]=H,T=he):(V[T]=de,V[ae]=H,T=ae);else if(he<O&&0>a(ve,H))V[T]=ve,V[he]=H,T=he;else break e}}return U}function a(V,U){var H=V.sortIndex-U.sortIndex;return H!==0?H:V.id-U.id}if(typeof performance=="object"&&typeof performance.now=="function"){var d=performance;n.unstable_now=function(){return d.now()}}else{var c=Date,p=c.now();n.unstable_now=function(){return c.now()-p}}var h=[],m=[],g=1,y=null,x=3,S=!1,j=!1,k=!1,P=typeof setTimeout=="function"?setTimeout:null,A=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function N(V){for(var U=i(m);U!==null;){if(U.callback===null)o(m);else if(U.startTime<=V)o(m),U.sortIndex=U.expirationTime,r(h,U);else break;U=i(m)}}function I(V){if(k=!1,N(V),!j)if(i(h)!==null)j=!0,Se(z);else{var U=i(m);U!==null&&le(I,U.startTime-V)}}function z(V,U){j=!1,k&&(k=!1,A(X),X=-1),S=!0;var H=x;try{for(N(U),y=i(h);y!==null&&(!(y.expirationTime>U)||V&&!me());){var T=y.callback;if(typeof T=="function"){y.callback=null,x=y.priorityLevel;var O=T(y.expirationTime<=U);U=n.unstable_now(),typeof O=="function"?y.callback=O:y===i(h)&&o(h),N(U)}else o(h);y=i(h)}if(y!==null)var oe=!0;else{var ae=i(m);ae!==null&&le(I,ae.startTime-U),oe=!1}return oe}finally{y=null,x=H,S=!1}}var Q=!1,q=null,X=-1,$=5,ne=-1;function me(){return!(n.unstable_now()-ne<$)}function _e(){if(q!==null){var V=n.unstable_now();ne=V;var U=!0;try{U=q(!0,V)}finally{U?pe():(Q=!1,q=null)}}else Q=!1}var pe;if(typeof R=="function")pe=function(){R(_e)};else if(typeof MessageChannel<"u"){var we=new MessageChannel,ce=we.port2;we.port1.onmessage=_e,pe=function(){ce.postMessage(null)}}else pe=function(){P(_e,0)};function Se(V){q=V,Q||(Q=!0,pe())}function le(V,U){X=P(function(){V(n.unstable_now())},U)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(V){V.callback=null},n.unstable_continueExecution=function(){j||S||(j=!0,Se(z))},n.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<V?Math.floor(1e3/V):5},n.unstable_getCurrentPriorityLevel=function(){return x},n.unstable_getFirstCallbackNode=function(){return i(h)},n.unstable_next=function(V){switch(x){case 1:case 2:case 3:var U=3;break;default:U=x}var H=x;x=U;try{return V()}finally{x=H}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(V,U){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var H=x;x=V;try{return U()}finally{x=H}},n.unstable_scheduleCallback=function(V,U,H){var T=n.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?T+H:T):H=T,V){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=H+O,V={id:g++,callback:U,priorityLevel:V,startTime:H,expirationTime:O,sortIndex:-1},H>T?(V.sortIndex=H,r(m,V),i(h)===null&&V===i(m)&&(k?(A(X),X=-1):k=!0,le(I,H-T))):(V.sortIndex=O,r(h,V),j||S||(j=!0,Se(z))),V},n.unstable_shouldYield=me,n.unstable_wrapCallback=function(V){var U=x;return function(){var H=x;x=U;try{return V.apply(this,arguments)}finally{x=H}}}})(Da)),Da}var Qf;function Eg(){return Qf||(Qf=1,Ma.exports=Tg()),Ma.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kf;function jg(){if(Kf)return Ct;Kf=1;var n=Cu(),r=Eg();function i(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,s=1;s<arguments.length;s++)t+="&args[]="+encodeURIComponent(arguments[s]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var o=new Set,a={};function d(e,t){c(e,t),c(e+"Capture",t)}function c(e,t){for(a[e]=t,e=0;e<t.length;e++)o.add(t[e])}var p=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},y={};function x(e){return h.call(y,e)?!0:h.call(g,e)?!1:m.test(e)?y[e]=!0:(g[e]=!0,!1)}function S(e,t,s,l){if(s!==null&&s.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return l?!1:s!==null?!s.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function j(e,t,s,l){if(t===null||typeof t>"u"||S(e,t,s,l))return!0;if(l)return!1;if(s!==null)switch(s.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function k(e,t,s,l,u,f,_){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=l,this.attributeNamespace=u,this.mustUseProperty=s,this.propertyName=e,this.type=t,this.sanitizeURL=f,this.removeEmptyString=_}var P={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){P[e]=new k(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];P[t]=new k(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){P[e]=new k(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){P[e]=new k(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){P[e]=new k(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){P[e]=new k(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){P[e]=new k(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){P[e]=new k(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){P[e]=new k(e,5,!1,e.toLowerCase(),null,!1,!1)});var A=/[\-:]([a-z])/g;function R(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(A,R);P[t]=new k(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(A,R);P[t]=new k(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(A,R);P[t]=new k(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){P[e]=new k(e,1,!1,e.toLowerCase(),null,!1,!1)}),P.xlinkHref=new k("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){P[e]=new k(e,1,!1,e.toLowerCase(),null,!0,!0)});function N(e,t,s,l){var u=P.hasOwnProperty(t)?P[t]:null;(u!==null?u.type!==0:l||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(j(t,s,u,l)&&(s=null),l||u===null?x(t)&&(s===null?e.removeAttribute(t):e.setAttribute(t,""+s)):u.mustUseProperty?e[u.propertyName]=s===null?u.type===3?!1:"":s:(t=u.attributeName,l=u.attributeNamespace,s===null?e.removeAttribute(t):(u=u.type,s=u===3||u===4&&s===!0?"":""+s,l?e.setAttributeNS(l,t,s):e.setAttribute(t,s))))}var I=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,z=Symbol.for("react.element"),Q=Symbol.for("react.portal"),q=Symbol.for("react.fragment"),X=Symbol.for("react.strict_mode"),$=Symbol.for("react.profiler"),ne=Symbol.for("react.provider"),me=Symbol.for("react.context"),_e=Symbol.for("react.forward_ref"),pe=Symbol.for("react.suspense"),we=Symbol.for("react.suspense_list"),ce=Symbol.for("react.memo"),Se=Symbol.for("react.lazy"),le=Symbol.for("react.offscreen"),V=Symbol.iterator;function U(e){return e===null||typeof e!="object"?null:(e=V&&e[V]||e["@@iterator"],typeof e=="function"?e:null)}var H=Object.assign,T;function O(e){if(T===void 0)try{throw Error()}catch(s){var t=s.stack.trim().match(/\n( *(at )?)/);T=t&&t[1]||""}return`
`+T+e}var oe=!1;function ae(e,t){if(!e||oe)return"";oe=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(L){var l=L}Reflect.construct(e,[],t)}else{try{t.call()}catch(L){l=L}e.call(t.prototype)}else{try{throw Error()}catch(L){l=L}e()}}catch(L){if(L&&l&&typeof L.stack=="string"){for(var u=L.stack.split(`
`),f=l.stack.split(`
`),_=u.length-1,w=f.length-1;1<=_&&0<=w&&u[_]!==f[w];)w--;for(;1<=_&&0<=w;_--,w--)if(u[_]!==f[w]){if(_!==1||w!==1)do if(_--,w--,0>w||u[_]!==f[w]){var C=`
`+u[_].replace(" at new "," at ");return e.displayName&&C.includes("<anonymous>")&&(C=C.replace("<anonymous>",e.displayName)),C}while(1<=_&&0<=w);break}}}finally{oe=!1,Error.prepareStackTrace=s}return(e=e?e.displayName||e.name:"")?O(e):""}function de(e){switch(e.tag){case 5:return O(e.type);case 16:return O("Lazy");case 13:return O("Suspense");case 19:return O("SuspenseList");case 0:case 2:case 15:return e=ae(e.type,!1),e;case 11:return e=ae(e.type.render,!1),e;case 1:return e=ae(e.type,!0),e;default:return""}}function he(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case q:return"Fragment";case Q:return"Portal";case $:return"Profiler";case X:return"StrictMode";case pe:return"Suspense";case we:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case me:return(e.displayName||"Context")+".Consumer";case ne:return(e._context.displayName||"Context")+".Provider";case _e:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ce:return t=e.displayName||null,t!==null?t:he(e.type)||"Memo";case Se:t=e._payload,e=e._init;try{return he(e(t))}catch{}}return null}function ve(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return he(t);case 8:return t===X?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ge(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ke(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function tt(e){var t=ke(e)?"checked":"value",s=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),l=""+e[t];if(!e.hasOwnProperty(t)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var u=s.get,f=s.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return u.call(this)},set:function(_){l=""+_,f.call(this,_)}}),Object.defineProperty(e,t,{enumerable:s.enumerable}),{getValue:function(){return l},setValue:function(_){l=""+_},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Mt(e){e._valueTracker||(e._valueTracker=tt(e))}function Un(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var s=t.getValue(),l="";return e&&(l=ke(e)?e.checked?"true":"false":e.value),e=l,e!==s?(t.setValue(e),!0):!1}function _n(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Te(e,t){var s=t.checked;return H({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:s??e._wrapperState.initialChecked})}function Re(e,t){var s=t.defaultValue==null?"":t.defaultValue,l=t.checked!=null?t.checked:t.defaultChecked;s=ge(t.value!=null?t.value:s),e._wrapperState={initialChecked:l,initialValue:s,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Qe(e,t){t=t.checked,t!=null&&N(e,"checked",t,!1)}function lt(e,t){Qe(e,t);var s=ge(t.value),l=t.type;if(s!=null)l==="number"?(s===0&&e.value===""||e.value!=s)&&(e.value=""+s):e.value!==""+s&&(e.value=""+s);else if(l==="submit"||l==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ut(e,t.type,s):t.hasOwnProperty("defaultValue")&&ut(e,t.type,ge(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function at(e,t,s){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var l=t.type;if(!(l!=="submit"&&l!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,s||t===e.value||(e.value=t),e.defaultValue=t}s=e.name,s!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,s!==""&&(e.name=s)}function ut(e,t,s){(t!=="number"||_n(e.ownerDocument)!==e)&&(s==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+s&&(e.defaultValue=""+s))}var nt=Array.isArray;function Ke(e,t,s,l){if(e=e.options,t){t={};for(var u=0;u<s.length;u++)t["$"+s[u]]=!0;for(s=0;s<e.length;s++)u=t.hasOwnProperty("$"+e[s].value),e[s].selected!==u&&(e[s].selected=u),u&&l&&(e[s].defaultSelected=!0)}else{for(s=""+ge(s),t=null,u=0;u<e.length;u++){if(e[u].value===s){e[u].selected=!0,l&&(e[u].defaultSelected=!0);return}t!==null||e[u].disabled||(t=e[u])}t!==null&&(t.selected=!0)}}function cr(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(i(91));return H({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ni(e,t){var s=t.value;if(s==null){if(s=t.children,t=t.defaultValue,s!=null){if(t!=null)throw Error(i(92));if(nt(s)){if(1<s.length)throw Error(i(93));s=s[0]}t=s}t==null&&(t=""),s=t}e._wrapperState={initialValue:ge(s)}}function ri(e,t){var s=ge(t.value),l=ge(t.defaultValue);s!=null&&(s=""+s,s!==e.value&&(e.value=s),t.defaultValue==null&&e.defaultValue!==s&&(e.defaultValue=s)),l!=null&&(e.defaultValue=""+l)}function Zr(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function si(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function dr(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?si(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var re,De=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,s,l,u){MSApp.execUnsafeLocalFunction(function(){return e(t,s,l,u)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(re=re||document.createElement("div"),re.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=re.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ge(e,t){if(t){var s=e.firstChild;if(s&&s===e.lastChild&&s.nodeType===3){s.nodeValue=t;return}}e.textContent=t}var vt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ft=["Webkit","ms","Moz","O"];Object.keys(vt).forEach(function(e){Ft.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),vt[t]=vt[e]})});function Wn(e,t,s){return t==null||typeof t=="boolean"||t===""?"":s||typeof t!="number"||t===0||vt.hasOwnProperty(e)&&vt[e]?(""+t).trim():t+"px"}function fr(e,t){e=e.style;for(var s in t)if(t.hasOwnProperty(s)){var l=s.indexOf("--")===0,u=Wn(s,t[s],l);s==="float"&&(s="cssFloat"),l?e.setProperty(s,u):e[s]=u}}var j0=H({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function zo(e,t){if(t){if(j0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(i(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(i(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(i(61))}if(t.style!=null&&typeof t.style!="object")throw Error(i(62))}}function Fo(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Bo=null;function Uo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Wo=null,pr=null,hr=null;function ic(e){if(e=vs(e)){if(typeof Wo!="function")throw Error(i(280));var t=e.stateNode;t&&(t=Ti(t),Wo(e.stateNode,e.type,t))}}function oc(e){pr?hr?hr.push(e):hr=[e]:pr=e}function lc(){if(pr){var e=pr,t=hr;if(hr=pr=null,ic(e),t)for(e=0;e<t.length;e++)ic(t[e])}}function ac(e,t){return e(t)}function uc(){}var Yo=!1;function cc(e,t,s){if(Yo)return e(t,s);Yo=!0;try{return ac(e,t,s)}finally{Yo=!1,(pr!==null||hr!==null)&&(uc(),lc())}}function Jr(e,t){var s=e.stateNode;if(s===null)return null;var l=Ti(s);if(l===null)return null;s=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(s&&typeof s!="function")throw Error(i(231,t,typeof s));return s}var Ho=!1;if(p)try{var qr={};Object.defineProperty(qr,"passive",{get:function(){Ho=!0}}),window.addEventListener("test",qr,qr),window.removeEventListener("test",qr,qr)}catch{Ho=!1}function M0(e,t,s,l,u,f,_,w,C){var L=Array.prototype.slice.call(arguments,3);try{t.apply(s,L)}catch(B){this.onError(B)}}var es=!1,ii=null,oi=!1,$o=null,D0={onError:function(e){es=!0,ii=e}};function A0(e,t,s,l,u,f,_,w,C){es=!1,ii=null,M0.apply(D0,arguments)}function L0(e,t,s,l,u,f,_,w,C){if(A0.apply(this,arguments),es){if(es){var L=ii;es=!1,ii=null}else throw Error(i(198));oi||(oi=!0,$o=L)}}function Yn(e){var t=e,s=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(s=t.return),e=t.return;while(e)}return t.tag===3?s:null}function dc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function fc(e){if(Yn(e)!==e)throw Error(i(188))}function R0(e){var t=e.alternate;if(!t){if(t=Yn(e),t===null)throw Error(i(188));return t!==e?null:e}for(var s=e,l=t;;){var u=s.return;if(u===null)break;var f=u.alternate;if(f===null){if(l=u.return,l!==null){s=l;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===s)return fc(u),e;if(f===l)return fc(u),t;f=f.sibling}throw Error(i(188))}if(s.return!==l.return)s=u,l=f;else{for(var _=!1,w=u.child;w;){if(w===s){_=!0,s=u,l=f;break}if(w===l){_=!0,l=u,s=f;break}w=w.sibling}if(!_){for(w=f.child;w;){if(w===s){_=!0,s=f,l=u;break}if(w===l){_=!0,l=f,s=u;break}w=w.sibling}if(!_)throw Error(i(189))}}if(s.alternate!==l)throw Error(i(190))}if(s.tag!==3)throw Error(i(188));return s.stateNode.current===s?e:t}function pc(e){return e=R0(e),e!==null?hc(e):null}function hc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=hc(e);if(t!==null)return t;e=e.sibling}return null}var mc=r.unstable_scheduleCallback,_c=r.unstable_cancelCallback,N0=r.unstable_shouldYield,I0=r.unstable_requestPaint,Be=r.unstable_now,V0=r.unstable_getCurrentPriorityLevel,Xo=r.unstable_ImmediatePriority,gc=r.unstable_UserBlockingPriority,li=r.unstable_NormalPriority,O0=r.unstable_LowPriority,yc=r.unstable_IdlePriority,ai=null,Zt=null;function z0(e){if(Zt&&typeof Zt.onCommitFiberRoot=="function")try{Zt.onCommitFiberRoot(ai,e,void 0,(e.current.flags&128)===128)}catch{}}var Bt=Math.clz32?Math.clz32:U0,F0=Math.log,B0=Math.LN2;function U0(e){return e>>>=0,e===0?32:31-(F0(e)/B0|0)|0}var ui=64,ci=4194304;function ts(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function di(e,t){var s=e.pendingLanes;if(s===0)return 0;var l=0,u=e.suspendedLanes,f=e.pingedLanes,_=s&268435455;if(_!==0){var w=_&~u;w!==0?l=ts(w):(f&=_,f!==0&&(l=ts(f)))}else _=s&~u,_!==0?l=ts(_):f!==0&&(l=ts(f));if(l===0)return 0;if(t!==0&&t!==l&&(t&u)===0&&(u=l&-l,f=t&-t,u>=f||u===16&&(f&4194240)!==0))return t;if((l&4)!==0&&(l|=s&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=l;0<t;)s=31-Bt(t),u=1<<s,l|=e[s],t&=~u;return l}function W0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Y0(e,t){for(var s=e.suspendedLanes,l=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes;0<f;){var _=31-Bt(f),w=1<<_,C=u[_];C===-1?((w&s)===0||(w&l)!==0)&&(u[_]=W0(w,t)):C<=t&&(e.expiredLanes|=w),f&=~w}}function Qo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function vc(){var e=ui;return ui<<=1,(ui&4194240)===0&&(ui=64),e}function Ko(e){for(var t=[],s=0;31>s;s++)t.push(e);return t}function ns(e,t,s){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Bt(t),e[t]=s}function H0(e,t){var s=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var l=e.eventTimes;for(e=e.expirationTimes;0<s;){var u=31-Bt(s),f=1<<u;t[u]=0,l[u]=-1,e[u]=-1,s&=~f}}function Go(e,t){var s=e.entangledLanes|=t;for(e=e.entanglements;s;){var l=31-Bt(s),u=1<<l;u&t|e[l]&t&&(e[l]|=t),s&=~u}}var Pe=0;function xc(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var wc,Zo,kc,Sc,bc,Jo=!1,fi=[],gn=null,yn=null,vn=null,rs=new Map,ss=new Map,xn=[],$0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Cc(e,t){switch(e){case"focusin":case"focusout":gn=null;break;case"dragenter":case"dragleave":yn=null;break;case"mouseover":case"mouseout":vn=null;break;case"pointerover":case"pointerout":rs.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ss.delete(t.pointerId)}}function is(e,t,s,l,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:t,domEventName:s,eventSystemFlags:l,nativeEvent:f,targetContainers:[u]},t!==null&&(t=vs(t),t!==null&&Zo(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,u!==null&&t.indexOf(u)===-1&&t.push(u),e)}function X0(e,t,s,l,u){switch(t){case"focusin":return gn=is(gn,e,t,s,l,u),!0;case"dragenter":return yn=is(yn,e,t,s,l,u),!0;case"mouseover":return vn=is(vn,e,t,s,l,u),!0;case"pointerover":var f=u.pointerId;return rs.set(f,is(rs.get(f)||null,e,t,s,l,u)),!0;case"gotpointercapture":return f=u.pointerId,ss.set(f,is(ss.get(f)||null,e,t,s,l,u)),!0}return!1}function Pc(e){var t=Hn(e.target);if(t!==null){var s=Yn(t);if(s!==null){if(t=s.tag,t===13){if(t=dc(s),t!==null){e.blockedOn=t,bc(e.priority,function(){kc(s)});return}}else if(t===3&&s.stateNode.current.memoizedState.isDehydrated){e.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}e.blockedOn=null}function pi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var s=el(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(s===null){s=e.nativeEvent;var l=new s.constructor(s.type,s);Bo=l,s.target.dispatchEvent(l),Bo=null}else return t=vs(s),t!==null&&Zo(t),e.blockedOn=s,!1;t.shift()}return!0}function Tc(e,t,s){pi(e)&&s.delete(t)}function Q0(){Jo=!1,gn!==null&&pi(gn)&&(gn=null),yn!==null&&pi(yn)&&(yn=null),vn!==null&&pi(vn)&&(vn=null),rs.forEach(Tc),ss.forEach(Tc)}function os(e,t){e.blockedOn===t&&(e.blockedOn=null,Jo||(Jo=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Q0)))}function ls(e){function t(u){return os(u,e)}if(0<fi.length){os(fi[0],e);for(var s=1;s<fi.length;s++){var l=fi[s];l.blockedOn===e&&(l.blockedOn=null)}}for(gn!==null&&os(gn,e),yn!==null&&os(yn,e),vn!==null&&os(vn,e),rs.forEach(t),ss.forEach(t),s=0;s<xn.length;s++)l=xn[s],l.blockedOn===e&&(l.blockedOn=null);for(;0<xn.length&&(s=xn[0],s.blockedOn===null);)Pc(s),s.blockedOn===null&&xn.shift()}var mr=I.ReactCurrentBatchConfig,hi=!0;function K0(e,t,s,l){var u=Pe,f=mr.transition;mr.transition=null;try{Pe=1,qo(e,t,s,l)}finally{Pe=u,mr.transition=f}}function G0(e,t,s,l){var u=Pe,f=mr.transition;mr.transition=null;try{Pe=4,qo(e,t,s,l)}finally{Pe=u,mr.transition=f}}function qo(e,t,s,l){if(hi){var u=el(e,t,s,l);if(u===null)gl(e,t,l,mi,s),Cc(e,l);else if(X0(u,e,t,s,l))l.stopPropagation();else if(Cc(e,l),t&4&&-1<$0.indexOf(e)){for(;u!==null;){var f=vs(u);if(f!==null&&wc(f),f=el(e,t,s,l),f===null&&gl(e,t,l,mi,s),f===u)break;u=f}u!==null&&l.stopPropagation()}else gl(e,t,l,null,s)}}var mi=null;function el(e,t,s,l){if(mi=null,e=Uo(l),e=Hn(e),e!==null)if(t=Yn(e),t===null)e=null;else if(s=t.tag,s===13){if(e=dc(t),e!==null)return e;e=null}else if(s===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return mi=e,null}function Ec(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(V0()){case Xo:return 1;case gc:return 4;case li:case O0:return 16;case yc:return 536870912;default:return 16}default:return 16}}var wn=null,tl=null,_i=null;function jc(){if(_i)return _i;var e,t=tl,s=t.length,l,u="value"in wn?wn.value:wn.textContent,f=u.length;for(e=0;e<s&&t[e]===u[e];e++);var _=s-e;for(l=1;l<=_&&t[s-l]===u[f-l];l++);return _i=u.slice(e,1<l?1-l:void 0)}function gi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function yi(){return!0}function Mc(){return!1}function Pt(e){function t(s,l,u,f,_){this._reactName=s,this._targetInst=u,this.type=l,this.nativeEvent=f,this.target=_,this.currentTarget=null;for(var w in e)e.hasOwnProperty(w)&&(s=e[w],this[w]=s?s(f):f[w]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?yi:Mc,this.isPropagationStopped=Mc,this}return H(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=yi)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=yi)},persist:function(){},isPersistent:yi}),t}var _r={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},nl=Pt(_r),as=H({},_r,{view:0,detail:0}),Z0=Pt(as),rl,sl,us,vi=H({},as,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ol,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==us&&(us&&e.type==="mousemove"?(rl=e.screenX-us.screenX,sl=e.screenY-us.screenY):sl=rl=0,us=e),rl)},movementY:function(e){return"movementY"in e?e.movementY:sl}}),Dc=Pt(vi),J0=H({},vi,{dataTransfer:0}),q0=Pt(J0),e_=H({},as,{relatedTarget:0}),il=Pt(e_),t_=H({},_r,{animationName:0,elapsedTime:0,pseudoElement:0}),n_=Pt(t_),r_=H({},_r,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),s_=Pt(r_),i_=H({},_r,{data:0}),Ac=Pt(i_),o_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},l_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},a_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function u_(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=a_[e])?!!t[e]:!1}function ol(){return u_}var c_=H({},as,{key:function(e){if(e.key){var t=o_[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=gi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?l_[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ol,charCode:function(e){return e.type==="keypress"?gi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?gi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),d_=Pt(c_),f_=H({},vi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Lc=Pt(f_),p_=H({},as,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ol}),h_=Pt(p_),m_=H({},_r,{propertyName:0,elapsedTime:0,pseudoElement:0}),__=Pt(m_),g_=H({},vi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),y_=Pt(g_),v_=[9,13,27,32],ll=p&&"CompositionEvent"in window,cs=null;p&&"documentMode"in document&&(cs=document.documentMode);var x_=p&&"TextEvent"in window&&!cs,Rc=p&&(!ll||cs&&8<cs&&11>=cs),Nc=" ",Ic=!1;function Vc(e,t){switch(e){case"keyup":return v_.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Oc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var gr=!1;function w_(e,t){switch(e){case"compositionend":return Oc(t);case"keypress":return t.which!==32?null:(Ic=!0,Nc);case"textInput":return e=t.data,e===Nc&&Ic?null:e;default:return null}}function k_(e,t){if(gr)return e==="compositionend"||!ll&&Vc(e,t)?(e=jc(),_i=tl=wn=null,gr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Rc&&t.locale!=="ko"?null:t.data;default:return null}}var S_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!S_[e.type]:t==="textarea"}function Fc(e,t,s,l){oc(l),t=bi(t,"onChange"),0<t.length&&(s=new nl("onChange","change",null,s,l),e.push({event:s,listeners:t}))}var ds=null,fs=null;function b_(e){sd(e,0)}function xi(e){var t=kr(e);if(Un(t))return e}function C_(e,t){if(e==="change")return t}var Bc=!1;if(p){var al;if(p){var ul="oninput"in document;if(!ul){var Uc=document.createElement("div");Uc.setAttribute("oninput","return;"),ul=typeof Uc.oninput=="function"}al=ul}else al=!1;Bc=al&&(!document.documentMode||9<document.documentMode)}function Wc(){ds&&(ds.detachEvent("onpropertychange",Yc),fs=ds=null)}function Yc(e){if(e.propertyName==="value"&&xi(fs)){var t=[];Fc(t,fs,e,Uo(e)),cc(b_,t)}}function P_(e,t,s){e==="focusin"?(Wc(),ds=t,fs=s,ds.attachEvent("onpropertychange",Yc)):e==="focusout"&&Wc()}function T_(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return xi(fs)}function E_(e,t){if(e==="click")return xi(t)}function j_(e,t){if(e==="input"||e==="change")return xi(t)}function M_(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ut=typeof Object.is=="function"?Object.is:M_;function ps(e,t){if(Ut(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var s=Object.keys(e),l=Object.keys(t);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var u=s[l];if(!h.call(t,u)||!Ut(e[u],t[u]))return!1}return!0}function Hc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function $c(e,t){var s=Hc(e);e=0;for(var l;s;){if(s.nodeType===3){if(l=e+s.textContent.length,e<=t&&l>=t)return{node:s,offset:t-e};e=l}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=Hc(s)}}function Xc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Xc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Qc(){for(var e=window,t=_n();t instanceof e.HTMLIFrameElement;){try{var s=typeof t.contentWindow.location.href=="string"}catch{s=!1}if(s)e=t.contentWindow;else break;t=_n(e.document)}return t}function cl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function D_(e){var t=Qc(),s=e.focusedElem,l=e.selectionRange;if(t!==s&&s&&s.ownerDocument&&Xc(s.ownerDocument.documentElement,s)){if(l!==null&&cl(s)){if(t=l.start,e=l.end,e===void 0&&(e=t),"selectionStart"in s)s.selectionStart=t,s.selectionEnd=Math.min(e,s.value.length);else if(e=(t=s.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var u=s.textContent.length,f=Math.min(l.start,u);l=l.end===void 0?f:Math.min(l.end,u),!e.extend&&f>l&&(u=l,l=f,f=u),u=$c(s,f);var _=$c(s,l);u&&_&&(e.rangeCount!==1||e.anchorNode!==u.node||e.anchorOffset!==u.offset||e.focusNode!==_.node||e.focusOffset!==_.offset)&&(t=t.createRange(),t.setStart(u.node,u.offset),e.removeAllRanges(),f>l?(e.addRange(t),e.extend(_.node,_.offset)):(t.setEnd(_.node,_.offset),e.addRange(t)))}}for(t=[],e=s;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<t.length;s++)e=t[s],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var A_=p&&"documentMode"in document&&11>=document.documentMode,yr=null,dl=null,hs=null,fl=!1;function Kc(e,t,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;fl||yr==null||yr!==_n(l)||(l=yr,"selectionStart"in l&&cl(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),hs&&ps(hs,l)||(hs=l,l=bi(dl,"onSelect"),0<l.length&&(t=new nl("onSelect","select",null,t,s),e.push({event:t,listeners:l}),t.target=yr)))}function wi(e,t){var s={};return s[e.toLowerCase()]=t.toLowerCase(),s["Webkit"+e]="webkit"+t,s["Moz"+e]="moz"+t,s}var vr={animationend:wi("Animation","AnimationEnd"),animationiteration:wi("Animation","AnimationIteration"),animationstart:wi("Animation","AnimationStart"),transitionend:wi("Transition","TransitionEnd")},pl={},Gc={};p&&(Gc=document.createElement("div").style,"AnimationEvent"in window||(delete vr.animationend.animation,delete vr.animationiteration.animation,delete vr.animationstart.animation),"TransitionEvent"in window||delete vr.transitionend.transition);function ki(e){if(pl[e])return pl[e];if(!vr[e])return e;var t=vr[e],s;for(s in t)if(t.hasOwnProperty(s)&&s in Gc)return pl[e]=t[s];return e}var Zc=ki("animationend"),Jc=ki("animationiteration"),qc=ki("animationstart"),ed=ki("transitionend"),td=new Map,nd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function kn(e,t){td.set(e,t),d(t,[e])}for(var hl=0;hl<nd.length;hl++){var ml=nd[hl],L_=ml.toLowerCase(),R_=ml[0].toUpperCase()+ml.slice(1);kn(L_,"on"+R_)}kn(Zc,"onAnimationEnd"),kn(Jc,"onAnimationIteration"),kn(qc,"onAnimationStart"),kn("dblclick","onDoubleClick"),kn("focusin","onFocus"),kn("focusout","onBlur"),kn(ed,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),d("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),d("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),d("onBeforeInput",["compositionend","keypress","textInput","paste"]),d("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),d("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),d("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ms="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),N_=new Set("cancel close invalid load scroll toggle".split(" ").concat(ms));function rd(e,t,s){var l=e.type||"unknown-event";e.currentTarget=s,L0(l,t,void 0,e),e.currentTarget=null}function sd(e,t){t=(t&4)!==0;for(var s=0;s<e.length;s++){var l=e[s],u=l.event;l=l.listeners;e:{var f=void 0;if(t)for(var _=l.length-1;0<=_;_--){var w=l[_],C=w.instance,L=w.currentTarget;if(w=w.listener,C!==f&&u.isPropagationStopped())break e;rd(u,w,L),f=C}else for(_=0;_<l.length;_++){if(w=l[_],C=w.instance,L=w.currentTarget,w=w.listener,C!==f&&u.isPropagationStopped())break e;rd(u,w,L),f=C}}}if(oi)throw e=$o,oi=!1,$o=null,e}function Ae(e,t){var s=t[Sl];s===void 0&&(s=t[Sl]=new Set);var l=e+"__bubble";s.has(l)||(id(t,e,2,!1),s.add(l))}function _l(e,t,s){var l=0;t&&(l|=4),id(s,e,l,t)}var Si="_reactListening"+Math.random().toString(36).slice(2);function _s(e){if(!e[Si]){e[Si]=!0,o.forEach(function(s){s!=="selectionchange"&&(N_.has(s)||_l(s,!1,e),_l(s,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Si]||(t[Si]=!0,_l("selectionchange",!1,t))}}function id(e,t,s,l){switch(Ec(t)){case 1:var u=K0;break;case 4:u=G0;break;default:u=qo}s=u.bind(null,t,s,e),u=void 0,!Ho||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(u=!0),l?u!==void 0?e.addEventListener(t,s,{capture:!0,passive:u}):e.addEventListener(t,s,!0):u!==void 0?e.addEventListener(t,s,{passive:u}):e.addEventListener(t,s,!1)}function gl(e,t,s,l,u){var f=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var _=l.tag;if(_===3||_===4){var w=l.stateNode.containerInfo;if(w===u||w.nodeType===8&&w.parentNode===u)break;if(_===4)for(_=l.return;_!==null;){var C=_.tag;if((C===3||C===4)&&(C=_.stateNode.containerInfo,C===u||C.nodeType===8&&C.parentNode===u))return;_=_.return}for(;w!==null;){if(_=Hn(w),_===null)return;if(C=_.tag,C===5||C===6){l=f=_;continue e}w=w.parentNode}}l=l.return}cc(function(){var L=f,B=Uo(s),W=[];e:{var F=td.get(e);if(F!==void 0){var K=nl,Z=e;switch(e){case"keypress":if(gi(s)===0)break e;case"keydown":case"keyup":K=d_;break;case"focusin":Z="focus",K=il;break;case"focusout":Z="blur",K=il;break;case"beforeblur":case"afterblur":K=il;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":K=Dc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":K=q0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":K=h_;break;case Zc:case Jc:case qc:K=n_;break;case ed:K=__;break;case"scroll":K=Z0;break;case"wheel":K=y_;break;case"copy":case"cut":case"paste":K=s_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":K=Lc}var ee=(t&4)!==0,Ue=!ee&&e==="scroll",M=ee?F!==null?F+"Capture":null:F;ee=[];for(var E=L,D;E!==null;){D=E;var Y=D.stateNode;if(D.tag===5&&Y!==null&&(D=Y,M!==null&&(Y=Jr(E,M),Y!=null&&ee.push(gs(E,Y,D)))),Ue)break;E=E.return}0<ee.length&&(F=new K(F,Z,null,s,B),W.push({event:F,listeners:ee}))}}if((t&7)===0){e:{if(F=e==="mouseover"||e==="pointerover",K=e==="mouseout"||e==="pointerout",F&&s!==Bo&&(Z=s.relatedTarget||s.fromElement)&&(Hn(Z)||Z[on]))break e;if((K||F)&&(F=B.window===B?B:(F=B.ownerDocument)?F.defaultView||F.parentWindow:window,K?(Z=s.relatedTarget||s.toElement,K=L,Z=Z?Hn(Z):null,Z!==null&&(Ue=Yn(Z),Z!==Ue||Z.tag!==5&&Z.tag!==6)&&(Z=null)):(K=null,Z=L),K!==Z)){if(ee=Dc,Y="onMouseLeave",M="onMouseEnter",E="mouse",(e==="pointerout"||e==="pointerover")&&(ee=Lc,Y="onPointerLeave",M="onPointerEnter",E="pointer"),Ue=K==null?F:kr(K),D=Z==null?F:kr(Z),F=new ee(Y,E+"leave",K,s,B),F.target=Ue,F.relatedTarget=D,Y=null,Hn(B)===L&&(ee=new ee(M,E+"enter",Z,s,B),ee.target=D,ee.relatedTarget=Ue,Y=ee),Ue=Y,K&&Z)t:{for(ee=K,M=Z,E=0,D=ee;D;D=xr(D))E++;for(D=0,Y=M;Y;Y=xr(Y))D++;for(;0<E-D;)ee=xr(ee),E--;for(;0<D-E;)M=xr(M),D--;for(;E--;){if(ee===M||M!==null&&ee===M.alternate)break t;ee=xr(ee),M=xr(M)}ee=null}else ee=null;K!==null&&od(W,F,K,ee,!1),Z!==null&&Ue!==null&&od(W,Ue,Z,ee,!0)}}e:{if(F=L?kr(L):window,K=F.nodeName&&F.nodeName.toLowerCase(),K==="select"||K==="input"&&F.type==="file")var te=C_;else if(zc(F))if(Bc)te=j_;else{te=T_;var se=P_}else(K=F.nodeName)&&K.toLowerCase()==="input"&&(F.type==="checkbox"||F.type==="radio")&&(te=E_);if(te&&(te=te(e,L))){Fc(W,te,s,B);break e}se&&se(e,F,L),e==="focusout"&&(se=F._wrapperState)&&se.controlled&&F.type==="number"&&ut(F,"number",F.value)}switch(se=L?kr(L):window,e){case"focusin":(zc(se)||se.contentEditable==="true")&&(yr=se,dl=L,hs=null);break;case"focusout":hs=dl=yr=null;break;case"mousedown":fl=!0;break;case"contextmenu":case"mouseup":case"dragend":fl=!1,Kc(W,s,B);break;case"selectionchange":if(A_)break;case"keydown":case"keyup":Kc(W,s,B)}var ie;if(ll)e:{switch(e){case"compositionstart":var ue="onCompositionStart";break e;case"compositionend":ue="onCompositionEnd";break e;case"compositionupdate":ue="onCompositionUpdate";break e}ue=void 0}else gr?Vc(e,s)&&(ue="onCompositionEnd"):e==="keydown"&&s.keyCode===229&&(ue="onCompositionStart");ue&&(Rc&&s.locale!=="ko"&&(gr||ue!=="onCompositionStart"?ue==="onCompositionEnd"&&gr&&(ie=jc()):(wn=B,tl="value"in wn?wn.value:wn.textContent,gr=!0)),se=bi(L,ue),0<se.length&&(ue=new Ac(ue,e,null,s,B),W.push({event:ue,listeners:se}),ie?ue.data=ie:(ie=Oc(s),ie!==null&&(ue.data=ie)))),(ie=x_?w_(e,s):k_(e,s))&&(L=bi(L,"onBeforeInput"),0<L.length&&(B=new Ac("onBeforeInput","beforeinput",null,s,B),W.push({event:B,listeners:L}),B.data=ie))}sd(W,t)})}function gs(e,t,s){return{instance:e,listener:t,currentTarget:s}}function bi(e,t){for(var s=t+"Capture",l=[];e!==null;){var u=e,f=u.stateNode;u.tag===5&&f!==null&&(u=f,f=Jr(e,s),f!=null&&l.unshift(gs(e,f,u)),f=Jr(e,t),f!=null&&l.push(gs(e,f,u))),e=e.return}return l}function xr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function od(e,t,s,l,u){for(var f=t._reactName,_=[];s!==null&&s!==l;){var w=s,C=w.alternate,L=w.stateNode;if(C!==null&&C===l)break;w.tag===5&&L!==null&&(w=L,u?(C=Jr(s,f),C!=null&&_.unshift(gs(s,C,w))):u||(C=Jr(s,f),C!=null&&_.push(gs(s,C,w)))),s=s.return}_.length!==0&&e.push({event:t,listeners:_})}var I_=/\r\n?/g,V_=/\u0000|\uFFFD/g;function ld(e){return(typeof e=="string"?e:""+e).replace(I_,`
`).replace(V_,"")}function Ci(e,t,s){if(t=ld(t),ld(e)!==t&&s)throw Error(i(425))}function Pi(){}var yl=null,vl=null;function xl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var wl=typeof setTimeout=="function"?setTimeout:void 0,O_=typeof clearTimeout=="function"?clearTimeout:void 0,ad=typeof Promise=="function"?Promise:void 0,z_=typeof queueMicrotask=="function"?queueMicrotask:typeof ad<"u"?function(e){return ad.resolve(null).then(e).catch(F_)}:wl;function F_(e){setTimeout(function(){throw e})}function kl(e,t){var s=t,l=0;do{var u=s.nextSibling;if(e.removeChild(s),u&&u.nodeType===8)if(s=u.data,s==="/$"){if(l===0){e.removeChild(u),ls(t);return}l--}else s!=="$"&&s!=="$?"&&s!=="$!"||l++;s=u}while(s);ls(t)}function Sn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ud(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var s=e.data;if(s==="$"||s==="$!"||s==="$?"){if(t===0)return e;t--}else s==="/$"&&t++}e=e.previousSibling}return null}var wr=Math.random().toString(36).slice(2),Jt="__reactFiber$"+wr,ys="__reactProps$"+wr,on="__reactContainer$"+wr,Sl="__reactEvents$"+wr,B_="__reactListeners$"+wr,U_="__reactHandles$"+wr;function Hn(e){var t=e[Jt];if(t)return t;for(var s=e.parentNode;s;){if(t=s[on]||s[Jt]){if(s=t.alternate,t.child!==null||s!==null&&s.child!==null)for(e=ud(e);e!==null;){if(s=e[Jt])return s;e=ud(e)}return t}e=s,s=e.parentNode}return null}function vs(e){return e=e[Jt]||e[on],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function kr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(i(33))}function Ti(e){return e[ys]||null}var bl=[],Sr=-1;function bn(e){return{current:e}}function Le(e){0>Sr||(e.current=bl[Sr],bl[Sr]=null,Sr--)}function Me(e,t){Sr++,bl[Sr]=e.current,e.current=t}var Cn={},ct=bn(Cn),xt=bn(!1),$n=Cn;function br(e,t){var s=e.type.contextTypes;if(!s)return Cn;var l=e.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===t)return l.__reactInternalMemoizedMaskedChildContext;var u={},f;for(f in s)u[f]=t[f];return l&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=u),u}function wt(e){return e=e.childContextTypes,e!=null}function Ei(){Le(xt),Le(ct)}function cd(e,t,s){if(ct.current!==Cn)throw Error(i(168));Me(ct,t),Me(xt,s)}function dd(e,t,s){var l=e.stateNode;if(t=t.childContextTypes,typeof l.getChildContext!="function")return s;l=l.getChildContext();for(var u in l)if(!(u in t))throw Error(i(108,ve(e)||"Unknown",u));return H({},s,l)}function ji(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Cn,$n=ct.current,Me(ct,e),Me(xt,xt.current),!0}function fd(e,t,s){var l=e.stateNode;if(!l)throw Error(i(169));s?(e=dd(e,t,$n),l.__reactInternalMemoizedMergedChildContext=e,Le(xt),Le(ct),Me(ct,e)):Le(xt),Me(xt,s)}var ln=null,Mi=!1,Cl=!1;function pd(e){ln===null?ln=[e]:ln.push(e)}function W_(e){Mi=!0,pd(e)}function Pn(){if(!Cl&&ln!==null){Cl=!0;var e=0,t=Pe;try{var s=ln;for(Pe=1;e<s.length;e++){var l=s[e];do l=l(!0);while(l!==null)}ln=null,Mi=!1}catch(u){throw ln!==null&&(ln=ln.slice(e+1)),mc(Xo,Pn),u}finally{Pe=t,Cl=!1}}return null}var Cr=[],Pr=0,Di=null,Ai=0,Dt=[],At=0,Xn=null,an=1,un="";function Qn(e,t){Cr[Pr++]=Ai,Cr[Pr++]=Di,Di=e,Ai=t}function hd(e,t,s){Dt[At++]=an,Dt[At++]=un,Dt[At++]=Xn,Xn=e;var l=an;e=un;var u=32-Bt(l)-1;l&=~(1<<u),s+=1;var f=32-Bt(t)+u;if(30<f){var _=u-u%5;f=(l&(1<<_)-1).toString(32),l>>=_,u-=_,an=1<<32-Bt(t)+u|s<<u|l,un=f+e}else an=1<<f|s<<u|l,un=e}function Pl(e){e.return!==null&&(Qn(e,1),hd(e,1,0))}function Tl(e){for(;e===Di;)Di=Cr[--Pr],Cr[Pr]=null,Ai=Cr[--Pr],Cr[Pr]=null;for(;e===Xn;)Xn=Dt[--At],Dt[At]=null,un=Dt[--At],Dt[At]=null,an=Dt[--At],Dt[At]=null}var Tt=null,Et=null,Ne=!1,Wt=null;function md(e,t){var s=It(5,null,null,0);s.elementType="DELETED",s.stateNode=t,s.return=e,t=e.deletions,t===null?(e.deletions=[s],e.flags|=16):t.push(s)}function _d(e,t){switch(e.tag){case 5:var s=e.type;return t=t.nodeType!==1||s.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Tt=e,Et=Sn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Tt=e,Et=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(s=Xn!==null?{id:an,overflow:un}:null,e.memoizedState={dehydrated:t,treeContext:s,retryLane:1073741824},s=It(18,null,null,0),s.stateNode=t,s.return=e,e.child=s,Tt=e,Et=null,!0):!1;default:return!1}}function El(e){return(e.mode&1)!==0&&(e.flags&128)===0}function jl(e){if(Ne){var t=Et;if(t){var s=t;if(!_d(e,t)){if(El(e))throw Error(i(418));t=Sn(s.nextSibling);var l=Tt;t&&_d(e,t)?md(l,s):(e.flags=e.flags&-4097|2,Ne=!1,Tt=e)}}else{if(El(e))throw Error(i(418));e.flags=e.flags&-4097|2,Ne=!1,Tt=e}}}function gd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Tt=e}function Li(e){if(e!==Tt)return!1;if(!Ne)return gd(e),Ne=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!xl(e.type,e.memoizedProps)),t&&(t=Et)){if(El(e))throw yd(),Error(i(418));for(;t;)md(e,t),t=Sn(t.nextSibling)}if(gd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(i(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var s=e.data;if(s==="/$"){if(t===0){Et=Sn(e.nextSibling);break e}t--}else s!=="$"&&s!=="$!"&&s!=="$?"||t++}e=e.nextSibling}Et=null}}else Et=Tt?Sn(e.stateNode.nextSibling):null;return!0}function yd(){for(var e=Et;e;)e=Sn(e.nextSibling)}function Tr(){Et=Tt=null,Ne=!1}function Ml(e){Wt===null?Wt=[e]:Wt.push(e)}var Y_=I.ReactCurrentBatchConfig;function xs(e,t,s){if(e=s.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(s._owner){if(s=s._owner,s){if(s.tag!==1)throw Error(i(309));var l=s.stateNode}if(!l)throw Error(i(147,e));var u=l,f=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===f?t.ref:(t=function(_){var w=u.refs;_===null?delete w[f]:w[f]=_},t._stringRef=f,t)}if(typeof e!="string")throw Error(i(284));if(!s._owner)throw Error(i(290,e))}return e}function Ri(e,t){throw e=Object.prototype.toString.call(t),Error(i(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function vd(e){var t=e._init;return t(e._payload)}function xd(e){function t(M,E){if(e){var D=M.deletions;D===null?(M.deletions=[E],M.flags|=16):D.push(E)}}function s(M,E){if(!e)return null;for(;E!==null;)t(M,E),E=E.sibling;return null}function l(M,E){for(M=new Map;E!==null;)E.key!==null?M.set(E.key,E):M.set(E.index,E),E=E.sibling;return M}function u(M,E){return M=Rn(M,E),M.index=0,M.sibling=null,M}function f(M,E,D){return M.index=D,e?(D=M.alternate,D!==null?(D=D.index,D<E?(M.flags|=2,E):D):(M.flags|=2,E)):(M.flags|=1048576,E)}function _(M){return e&&M.alternate===null&&(M.flags|=2),M}function w(M,E,D,Y){return E===null||E.tag!==6?(E=wa(D,M.mode,Y),E.return=M,E):(E=u(E,D),E.return=M,E)}function C(M,E,D,Y){var te=D.type;return te===q?B(M,E,D.props.children,Y,D.key):E!==null&&(E.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===Se&&vd(te)===E.type)?(Y=u(E,D.props),Y.ref=xs(M,E,D),Y.return=M,Y):(Y=so(D.type,D.key,D.props,null,M.mode,Y),Y.ref=xs(M,E,D),Y.return=M,Y)}function L(M,E,D,Y){return E===null||E.tag!==4||E.stateNode.containerInfo!==D.containerInfo||E.stateNode.implementation!==D.implementation?(E=ka(D,M.mode,Y),E.return=M,E):(E=u(E,D.children||[]),E.return=M,E)}function B(M,E,D,Y,te){return E===null||E.tag!==7?(E=nr(D,M.mode,Y,te),E.return=M,E):(E=u(E,D),E.return=M,E)}function W(M,E,D){if(typeof E=="string"&&E!==""||typeof E=="number")return E=wa(""+E,M.mode,D),E.return=M,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case z:return D=so(E.type,E.key,E.props,null,M.mode,D),D.ref=xs(M,null,E),D.return=M,D;case Q:return E=ka(E,M.mode,D),E.return=M,E;case Se:var Y=E._init;return W(M,Y(E._payload),D)}if(nt(E)||U(E))return E=nr(E,M.mode,D,null),E.return=M,E;Ri(M,E)}return null}function F(M,E,D,Y){var te=E!==null?E.key:null;if(typeof D=="string"&&D!==""||typeof D=="number")return te!==null?null:w(M,E,""+D,Y);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case z:return D.key===te?C(M,E,D,Y):null;case Q:return D.key===te?L(M,E,D,Y):null;case Se:return te=D._init,F(M,E,te(D._payload),Y)}if(nt(D)||U(D))return te!==null?null:B(M,E,D,Y,null);Ri(M,D)}return null}function K(M,E,D,Y,te){if(typeof Y=="string"&&Y!==""||typeof Y=="number")return M=M.get(D)||null,w(E,M,""+Y,te);if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case z:return M=M.get(Y.key===null?D:Y.key)||null,C(E,M,Y,te);case Q:return M=M.get(Y.key===null?D:Y.key)||null,L(E,M,Y,te);case Se:var se=Y._init;return K(M,E,D,se(Y._payload),te)}if(nt(Y)||U(Y))return M=M.get(D)||null,B(E,M,Y,te,null);Ri(E,Y)}return null}function Z(M,E,D,Y){for(var te=null,se=null,ie=E,ue=E=0,qe=null;ie!==null&&ue<D.length;ue++){ie.index>ue?(qe=ie,ie=null):qe=ie.sibling;var Ce=F(M,ie,D[ue],Y);if(Ce===null){ie===null&&(ie=qe);break}e&&ie&&Ce.alternate===null&&t(M,ie),E=f(Ce,E,ue),se===null?te=Ce:se.sibling=Ce,se=Ce,ie=qe}if(ue===D.length)return s(M,ie),Ne&&Qn(M,ue),te;if(ie===null){for(;ue<D.length;ue++)ie=W(M,D[ue],Y),ie!==null&&(E=f(ie,E,ue),se===null?te=ie:se.sibling=ie,se=ie);return Ne&&Qn(M,ue),te}for(ie=l(M,ie);ue<D.length;ue++)qe=K(ie,M,ue,D[ue],Y),qe!==null&&(e&&qe.alternate!==null&&ie.delete(qe.key===null?ue:qe.key),E=f(qe,E,ue),se===null?te=qe:se.sibling=qe,se=qe);return e&&ie.forEach(function(Nn){return t(M,Nn)}),Ne&&Qn(M,ue),te}function ee(M,E,D,Y){var te=U(D);if(typeof te!="function")throw Error(i(150));if(D=te.call(D),D==null)throw Error(i(151));for(var se=te=null,ie=E,ue=E=0,qe=null,Ce=D.next();ie!==null&&!Ce.done;ue++,Ce=D.next()){ie.index>ue?(qe=ie,ie=null):qe=ie.sibling;var Nn=F(M,ie,Ce.value,Y);if(Nn===null){ie===null&&(ie=qe);break}e&&ie&&Nn.alternate===null&&t(M,ie),E=f(Nn,E,ue),se===null?te=Nn:se.sibling=Nn,se=Nn,ie=qe}if(Ce.done)return s(M,ie),Ne&&Qn(M,ue),te;if(ie===null){for(;!Ce.done;ue++,Ce=D.next())Ce=W(M,Ce.value,Y),Ce!==null&&(E=f(Ce,E,ue),se===null?te=Ce:se.sibling=Ce,se=Ce);return Ne&&Qn(M,ue),te}for(ie=l(M,ie);!Ce.done;ue++,Ce=D.next())Ce=K(ie,M,ue,Ce.value,Y),Ce!==null&&(e&&Ce.alternate!==null&&ie.delete(Ce.key===null?ue:Ce.key),E=f(Ce,E,ue),se===null?te=Ce:se.sibling=Ce,se=Ce);return e&&ie.forEach(function(Sg){return t(M,Sg)}),Ne&&Qn(M,ue),te}function Ue(M,E,D,Y){if(typeof D=="object"&&D!==null&&D.type===q&&D.key===null&&(D=D.props.children),typeof D=="object"&&D!==null){switch(D.$$typeof){case z:e:{for(var te=D.key,se=E;se!==null;){if(se.key===te){if(te=D.type,te===q){if(se.tag===7){s(M,se.sibling),E=u(se,D.props.children),E.return=M,M=E;break e}}else if(se.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===Se&&vd(te)===se.type){s(M,se.sibling),E=u(se,D.props),E.ref=xs(M,se,D),E.return=M,M=E;break e}s(M,se);break}else t(M,se);se=se.sibling}D.type===q?(E=nr(D.props.children,M.mode,Y,D.key),E.return=M,M=E):(Y=so(D.type,D.key,D.props,null,M.mode,Y),Y.ref=xs(M,E,D),Y.return=M,M=Y)}return _(M);case Q:e:{for(se=D.key;E!==null;){if(E.key===se)if(E.tag===4&&E.stateNode.containerInfo===D.containerInfo&&E.stateNode.implementation===D.implementation){s(M,E.sibling),E=u(E,D.children||[]),E.return=M,M=E;break e}else{s(M,E);break}else t(M,E);E=E.sibling}E=ka(D,M.mode,Y),E.return=M,M=E}return _(M);case Se:return se=D._init,Ue(M,E,se(D._payload),Y)}if(nt(D))return Z(M,E,D,Y);if(U(D))return ee(M,E,D,Y);Ri(M,D)}return typeof D=="string"&&D!==""||typeof D=="number"?(D=""+D,E!==null&&E.tag===6?(s(M,E.sibling),E=u(E,D),E.return=M,M=E):(s(M,E),E=wa(D,M.mode,Y),E.return=M,M=E),_(M)):s(M,E)}return Ue}var Er=xd(!0),wd=xd(!1),Ni=bn(null),Ii=null,jr=null,Dl=null;function Al(){Dl=jr=Ii=null}function Ll(e){var t=Ni.current;Le(Ni),e._currentValue=t}function Rl(e,t,s){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===s)break;e=e.return}}function Mr(e,t){Ii=e,Dl=jr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(kt=!0),e.firstContext=null)}function Lt(e){var t=e._currentValue;if(Dl!==e)if(e={context:e,memoizedValue:t,next:null},jr===null){if(Ii===null)throw Error(i(308));jr=e,Ii.dependencies={lanes:0,firstContext:e}}else jr=jr.next=e;return t}var Kn=null;function Nl(e){Kn===null?Kn=[e]:Kn.push(e)}function kd(e,t,s,l){var u=t.interleaved;return u===null?(s.next=s,Nl(t)):(s.next=u.next,u.next=s),t.interleaved=s,cn(e,l)}function cn(e,t){e.lanes|=t;var s=e.alternate;for(s!==null&&(s.lanes|=t),s=e,e=e.return;e!==null;)e.childLanes|=t,s=e.alternate,s!==null&&(s.childLanes|=t),s=e,e=e.return;return s.tag===3?s.stateNode:null}var Tn=!1;function Il(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Sd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function dn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function En(e,t,s){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(be&2)!==0){var u=l.pending;return u===null?t.next=t:(t.next=u.next,u.next=t),l.pending=t,cn(e,s)}return u=l.interleaved,u===null?(t.next=t,Nl(l)):(t.next=u.next,u.next=t),l.interleaved=t,cn(e,s)}function Vi(e,t,s){if(t=t.updateQueue,t!==null&&(t=t.shared,(s&4194240)!==0)){var l=t.lanes;l&=e.pendingLanes,s|=l,t.lanes=s,Go(e,s)}}function bd(e,t){var s=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var u=null,f=null;if(s=s.firstBaseUpdate,s!==null){do{var _={eventTime:s.eventTime,lane:s.lane,tag:s.tag,payload:s.payload,callback:s.callback,next:null};f===null?u=f=_:f=f.next=_,s=s.next}while(s!==null);f===null?u=f=t:f=f.next=t}else u=f=t;s={baseState:l.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:l.shared,effects:l.effects},e.updateQueue=s;return}e=s.lastBaseUpdate,e===null?s.firstBaseUpdate=t:e.next=t,s.lastBaseUpdate=t}function Oi(e,t,s,l){var u=e.updateQueue;Tn=!1;var f=u.firstBaseUpdate,_=u.lastBaseUpdate,w=u.shared.pending;if(w!==null){u.shared.pending=null;var C=w,L=C.next;C.next=null,_===null?f=L:_.next=L,_=C;var B=e.alternate;B!==null&&(B=B.updateQueue,w=B.lastBaseUpdate,w!==_&&(w===null?B.firstBaseUpdate=L:w.next=L,B.lastBaseUpdate=C))}if(f!==null){var W=u.baseState;_=0,B=L=C=null,w=f;do{var F=w.lane,K=w.eventTime;if((l&F)===F){B!==null&&(B=B.next={eventTime:K,lane:0,tag:w.tag,payload:w.payload,callback:w.callback,next:null});e:{var Z=e,ee=w;switch(F=t,K=s,ee.tag){case 1:if(Z=ee.payload,typeof Z=="function"){W=Z.call(K,W,F);break e}W=Z;break e;case 3:Z.flags=Z.flags&-65537|128;case 0:if(Z=ee.payload,F=typeof Z=="function"?Z.call(K,W,F):Z,F==null)break e;W=H({},W,F);break e;case 2:Tn=!0}}w.callback!==null&&w.lane!==0&&(e.flags|=64,F=u.effects,F===null?u.effects=[w]:F.push(w))}else K={eventTime:K,lane:F,tag:w.tag,payload:w.payload,callback:w.callback,next:null},B===null?(L=B=K,C=W):B=B.next=K,_|=F;if(w=w.next,w===null){if(w=u.shared.pending,w===null)break;F=w,w=F.next,F.next=null,u.lastBaseUpdate=F,u.shared.pending=null}}while(!0);if(B===null&&(C=W),u.baseState=C,u.firstBaseUpdate=L,u.lastBaseUpdate=B,t=u.shared.interleaved,t!==null){u=t;do _|=u.lane,u=u.next;while(u!==t)}else f===null&&(u.shared.lanes=0);Jn|=_,e.lanes=_,e.memoizedState=W}}function Cd(e,t,s){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var l=e[t],u=l.callback;if(u!==null){if(l.callback=null,l=s,typeof u!="function")throw Error(i(191,u));u.call(l)}}}var ws={},qt=bn(ws),ks=bn(ws),Ss=bn(ws);function Gn(e){if(e===ws)throw Error(i(174));return e}function Vl(e,t){switch(Me(Ss,t),Me(ks,e),Me(qt,ws),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:dr(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=dr(t,e)}Le(qt),Me(qt,t)}function Dr(){Le(qt),Le(ks),Le(Ss)}function Pd(e){Gn(Ss.current);var t=Gn(qt.current),s=dr(t,e.type);t!==s&&(Me(ks,e),Me(qt,s))}function Ol(e){ks.current===e&&(Le(qt),Le(ks))}var Ve=bn(0);function zi(e){for(var t=e;t!==null;){if(t.tag===13){var s=t.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||s.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var zl=[];function Fl(){for(var e=0;e<zl.length;e++)zl[e]._workInProgressVersionPrimary=null;zl.length=0}var Fi=I.ReactCurrentDispatcher,Bl=I.ReactCurrentBatchConfig,Zn=0,Oe=null,$e=null,Ze=null,Bi=!1,bs=!1,Cs=0,H_=0;function dt(){throw Error(i(321))}function Ul(e,t){if(t===null)return!1;for(var s=0;s<t.length&&s<e.length;s++)if(!Ut(e[s],t[s]))return!1;return!0}function Wl(e,t,s,l,u,f){if(Zn=f,Oe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Fi.current=e===null||e.memoizedState===null?K_:G_,e=s(l,u),bs){f=0;do{if(bs=!1,Cs=0,25<=f)throw Error(i(301));f+=1,Ze=$e=null,t.updateQueue=null,Fi.current=Z_,e=s(l,u)}while(bs)}if(Fi.current=Yi,t=$e!==null&&$e.next!==null,Zn=0,Ze=$e=Oe=null,Bi=!1,t)throw Error(i(300));return e}function Yl(){var e=Cs!==0;return Cs=0,e}function en(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ze===null?Oe.memoizedState=Ze=e:Ze=Ze.next=e,Ze}function Rt(){if($e===null){var e=Oe.alternate;e=e!==null?e.memoizedState:null}else e=$e.next;var t=Ze===null?Oe.memoizedState:Ze.next;if(t!==null)Ze=t,$e=e;else{if(e===null)throw Error(i(310));$e=e,e={memoizedState:$e.memoizedState,baseState:$e.baseState,baseQueue:$e.baseQueue,queue:$e.queue,next:null},Ze===null?Oe.memoizedState=Ze=e:Ze=Ze.next=e}return Ze}function Ps(e,t){return typeof t=="function"?t(e):t}function Hl(e){var t=Rt(),s=t.queue;if(s===null)throw Error(i(311));s.lastRenderedReducer=e;var l=$e,u=l.baseQueue,f=s.pending;if(f!==null){if(u!==null){var _=u.next;u.next=f.next,f.next=_}l.baseQueue=u=f,s.pending=null}if(u!==null){f=u.next,l=l.baseState;var w=_=null,C=null,L=f;do{var B=L.lane;if((Zn&B)===B)C!==null&&(C=C.next={lane:0,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null}),l=L.hasEagerState?L.eagerState:e(l,L.action);else{var W={lane:B,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null};C===null?(w=C=W,_=l):C=C.next=W,Oe.lanes|=B,Jn|=B}L=L.next}while(L!==null&&L!==f);C===null?_=l:C.next=w,Ut(l,t.memoizedState)||(kt=!0),t.memoizedState=l,t.baseState=_,t.baseQueue=C,s.lastRenderedState=l}if(e=s.interleaved,e!==null){u=e;do f=u.lane,Oe.lanes|=f,Jn|=f,u=u.next;while(u!==e)}else u===null&&(s.lanes=0);return[t.memoizedState,s.dispatch]}function $l(e){var t=Rt(),s=t.queue;if(s===null)throw Error(i(311));s.lastRenderedReducer=e;var l=s.dispatch,u=s.pending,f=t.memoizedState;if(u!==null){s.pending=null;var _=u=u.next;do f=e(f,_.action),_=_.next;while(_!==u);Ut(f,t.memoizedState)||(kt=!0),t.memoizedState=f,t.baseQueue===null&&(t.baseState=f),s.lastRenderedState=f}return[f,l]}function Td(){}function Ed(e,t){var s=Oe,l=Rt(),u=t(),f=!Ut(l.memoizedState,u);if(f&&(l.memoizedState=u,kt=!0),l=l.queue,Xl(Dd.bind(null,s,l,e),[e]),l.getSnapshot!==t||f||Ze!==null&&Ze.memoizedState.tag&1){if(s.flags|=2048,Ts(9,Md.bind(null,s,l,u,t),void 0,null),Je===null)throw Error(i(349));(Zn&30)!==0||jd(s,t,u)}return u}function jd(e,t,s){e.flags|=16384,e={getSnapshot:t,value:s},t=Oe.updateQueue,t===null?(t={lastEffect:null,stores:null},Oe.updateQueue=t,t.stores=[e]):(s=t.stores,s===null?t.stores=[e]:s.push(e))}function Md(e,t,s,l){t.value=s,t.getSnapshot=l,Ad(t)&&Ld(e)}function Dd(e,t,s){return s(function(){Ad(t)&&Ld(e)})}function Ad(e){var t=e.getSnapshot;e=e.value;try{var s=t();return!Ut(e,s)}catch{return!0}}function Ld(e){var t=cn(e,1);t!==null&&Xt(t,e,1,-1)}function Rd(e){var t=en();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ps,lastRenderedState:e},t.queue=e,e=e.dispatch=Q_.bind(null,Oe,e),[t.memoizedState,e]}function Ts(e,t,s,l){return e={tag:e,create:t,destroy:s,deps:l,next:null},t=Oe.updateQueue,t===null?(t={lastEffect:null,stores:null},Oe.updateQueue=t,t.lastEffect=e.next=e):(s=t.lastEffect,s===null?t.lastEffect=e.next=e:(l=s.next,s.next=e,e.next=l,t.lastEffect=e)),e}function Nd(){return Rt().memoizedState}function Ui(e,t,s,l){var u=en();Oe.flags|=e,u.memoizedState=Ts(1|t,s,void 0,l===void 0?null:l)}function Wi(e,t,s,l){var u=Rt();l=l===void 0?null:l;var f=void 0;if($e!==null){var _=$e.memoizedState;if(f=_.destroy,l!==null&&Ul(l,_.deps)){u.memoizedState=Ts(t,s,f,l);return}}Oe.flags|=e,u.memoizedState=Ts(1|t,s,f,l)}function Id(e,t){return Ui(8390656,8,e,t)}function Xl(e,t){return Wi(2048,8,e,t)}function Vd(e,t){return Wi(4,2,e,t)}function Od(e,t){return Wi(4,4,e,t)}function zd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Fd(e,t,s){return s=s!=null?s.concat([e]):null,Wi(4,4,zd.bind(null,t,e),s)}function Ql(){}function Bd(e,t){var s=Rt();t=t===void 0?null:t;var l=s.memoizedState;return l!==null&&t!==null&&Ul(t,l[1])?l[0]:(s.memoizedState=[e,t],e)}function Ud(e,t){var s=Rt();t=t===void 0?null:t;var l=s.memoizedState;return l!==null&&t!==null&&Ul(t,l[1])?l[0]:(e=e(),s.memoizedState=[e,t],e)}function Wd(e,t,s){return(Zn&21)===0?(e.baseState&&(e.baseState=!1,kt=!0),e.memoizedState=s):(Ut(s,t)||(s=vc(),Oe.lanes|=s,Jn|=s,e.baseState=!0),t)}function $_(e,t){var s=Pe;Pe=s!==0&&4>s?s:4,e(!0);var l=Bl.transition;Bl.transition={};try{e(!1),t()}finally{Pe=s,Bl.transition=l}}function Yd(){return Rt().memoizedState}function X_(e,t,s){var l=An(e);if(s={lane:l,action:s,hasEagerState:!1,eagerState:null,next:null},Hd(e))$d(t,s);else if(s=kd(e,t,s,l),s!==null){var u=_t();Xt(s,e,l,u),Xd(s,t,l)}}function Q_(e,t,s){var l=An(e),u={lane:l,action:s,hasEagerState:!1,eagerState:null,next:null};if(Hd(e))$d(t,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=t.lastRenderedReducer,f!==null))try{var _=t.lastRenderedState,w=f(_,s);if(u.hasEagerState=!0,u.eagerState=w,Ut(w,_)){var C=t.interleaved;C===null?(u.next=u,Nl(t)):(u.next=C.next,C.next=u),t.interleaved=u;return}}catch{}finally{}s=kd(e,t,u,l),s!==null&&(u=_t(),Xt(s,e,l,u),Xd(s,t,l))}}function Hd(e){var t=e.alternate;return e===Oe||t!==null&&t===Oe}function $d(e,t){bs=Bi=!0;var s=e.pending;s===null?t.next=t:(t.next=s.next,s.next=t),e.pending=t}function Xd(e,t,s){if((s&4194240)!==0){var l=t.lanes;l&=e.pendingLanes,s|=l,t.lanes=s,Go(e,s)}}var Yi={readContext:Lt,useCallback:dt,useContext:dt,useEffect:dt,useImperativeHandle:dt,useInsertionEffect:dt,useLayoutEffect:dt,useMemo:dt,useReducer:dt,useRef:dt,useState:dt,useDebugValue:dt,useDeferredValue:dt,useTransition:dt,useMutableSource:dt,useSyncExternalStore:dt,useId:dt,unstable_isNewReconciler:!1},K_={readContext:Lt,useCallback:function(e,t){return en().memoizedState=[e,t===void 0?null:t],e},useContext:Lt,useEffect:Id,useImperativeHandle:function(e,t,s){return s=s!=null?s.concat([e]):null,Ui(4194308,4,zd.bind(null,t,e),s)},useLayoutEffect:function(e,t){return Ui(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ui(4,2,e,t)},useMemo:function(e,t){var s=en();return t=t===void 0?null:t,e=e(),s.memoizedState=[e,t],e},useReducer:function(e,t,s){var l=en();return t=s!==void 0?s(t):t,l.memoizedState=l.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},l.queue=e,e=e.dispatch=X_.bind(null,Oe,e),[l.memoizedState,e]},useRef:function(e){var t=en();return e={current:e},t.memoizedState=e},useState:Rd,useDebugValue:Ql,useDeferredValue:function(e){return en().memoizedState=e},useTransition:function(){var e=Rd(!1),t=e[0];return e=$_.bind(null,e[1]),en().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,s){var l=Oe,u=en();if(Ne){if(s===void 0)throw Error(i(407));s=s()}else{if(s=t(),Je===null)throw Error(i(349));(Zn&30)!==0||jd(l,t,s)}u.memoizedState=s;var f={value:s,getSnapshot:t};return u.queue=f,Id(Dd.bind(null,l,f,e),[e]),l.flags|=2048,Ts(9,Md.bind(null,l,f,s,t),void 0,null),s},useId:function(){var e=en(),t=Je.identifierPrefix;if(Ne){var s=un,l=an;s=(l&~(1<<32-Bt(l)-1)).toString(32)+s,t=":"+t+"R"+s,s=Cs++,0<s&&(t+="H"+s.toString(32)),t+=":"}else s=H_++,t=":"+t+"r"+s.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},G_={readContext:Lt,useCallback:Bd,useContext:Lt,useEffect:Xl,useImperativeHandle:Fd,useInsertionEffect:Vd,useLayoutEffect:Od,useMemo:Ud,useReducer:Hl,useRef:Nd,useState:function(){return Hl(Ps)},useDebugValue:Ql,useDeferredValue:function(e){var t=Rt();return Wd(t,$e.memoizedState,e)},useTransition:function(){var e=Hl(Ps)[0],t=Rt().memoizedState;return[e,t]},useMutableSource:Td,useSyncExternalStore:Ed,useId:Yd,unstable_isNewReconciler:!1},Z_={readContext:Lt,useCallback:Bd,useContext:Lt,useEffect:Xl,useImperativeHandle:Fd,useInsertionEffect:Vd,useLayoutEffect:Od,useMemo:Ud,useReducer:$l,useRef:Nd,useState:function(){return $l(Ps)},useDebugValue:Ql,useDeferredValue:function(e){var t=Rt();return $e===null?t.memoizedState=e:Wd(t,$e.memoizedState,e)},useTransition:function(){var e=$l(Ps)[0],t=Rt().memoizedState;return[e,t]},useMutableSource:Td,useSyncExternalStore:Ed,useId:Yd,unstable_isNewReconciler:!1};function Yt(e,t){if(e&&e.defaultProps){t=H({},t),e=e.defaultProps;for(var s in e)t[s]===void 0&&(t[s]=e[s]);return t}return t}function Kl(e,t,s,l){t=e.memoizedState,s=s(l,t),s=s==null?t:H({},t,s),e.memoizedState=s,e.lanes===0&&(e.updateQueue.baseState=s)}var Hi={isMounted:function(e){return(e=e._reactInternals)?Yn(e)===e:!1},enqueueSetState:function(e,t,s){e=e._reactInternals;var l=_t(),u=An(e),f=dn(l,u);f.payload=t,s!=null&&(f.callback=s),t=En(e,f,u),t!==null&&(Xt(t,e,u,l),Vi(t,e,u))},enqueueReplaceState:function(e,t,s){e=e._reactInternals;var l=_t(),u=An(e),f=dn(l,u);f.tag=1,f.payload=t,s!=null&&(f.callback=s),t=En(e,f,u),t!==null&&(Xt(t,e,u,l),Vi(t,e,u))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var s=_t(),l=An(e),u=dn(s,l);u.tag=2,t!=null&&(u.callback=t),t=En(e,u,l),t!==null&&(Xt(t,e,l,s),Vi(t,e,l))}};function Qd(e,t,s,l,u,f,_){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,f,_):t.prototype&&t.prototype.isPureReactComponent?!ps(s,l)||!ps(u,f):!0}function Kd(e,t,s){var l=!1,u=Cn,f=t.contextType;return typeof f=="object"&&f!==null?f=Lt(f):(u=wt(t)?$n:ct.current,l=t.contextTypes,f=(l=l!=null)?br(e,u):Cn),t=new t(s,f),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Hi,e.stateNode=t,t._reactInternals=e,l&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=u,e.__reactInternalMemoizedMaskedChildContext=f),t}function Gd(e,t,s,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(s,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(s,l),t.state!==e&&Hi.enqueueReplaceState(t,t.state,null)}function Gl(e,t,s,l){var u=e.stateNode;u.props=s,u.state=e.memoizedState,u.refs={},Il(e);var f=t.contextType;typeof f=="object"&&f!==null?u.context=Lt(f):(f=wt(t)?$n:ct.current,u.context=br(e,f)),u.state=e.memoizedState,f=t.getDerivedStateFromProps,typeof f=="function"&&(Kl(e,t,f,s),u.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(t=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),t!==u.state&&Hi.enqueueReplaceState(u,u.state,null),Oi(e,s,u,l),u.state=e.memoizedState),typeof u.componentDidMount=="function"&&(e.flags|=4194308)}function Ar(e,t){try{var s="",l=t;do s+=de(l),l=l.return;while(l);var u=s}catch(f){u=`
Error generating stack: `+f.message+`
`+f.stack}return{value:e,source:t,stack:u,digest:null}}function Zl(e,t,s){return{value:e,source:null,stack:s??null,digest:t??null}}function Jl(e,t){try{console.error(t.value)}catch(s){setTimeout(function(){throw s})}}var J_=typeof WeakMap=="function"?WeakMap:Map;function Zd(e,t,s){s=dn(-1,s),s.tag=3,s.payload={element:null};var l=t.value;return s.callback=function(){Ji||(Ji=!0,pa=l),Jl(e,t)},s}function Jd(e,t,s){s=dn(-1,s),s.tag=3;var l=e.type.getDerivedStateFromError;if(typeof l=="function"){var u=t.value;s.payload=function(){return l(u)},s.callback=function(){Jl(e,t)}}var f=e.stateNode;return f!==null&&typeof f.componentDidCatch=="function"&&(s.callback=function(){Jl(e,t),typeof l!="function"&&(Mn===null?Mn=new Set([this]):Mn.add(this));var _=t.stack;this.componentDidCatch(t.value,{componentStack:_!==null?_:""})}),s}function qd(e,t,s){var l=e.pingCache;if(l===null){l=e.pingCache=new J_;var u=new Set;l.set(t,u)}else u=l.get(t),u===void 0&&(u=new Set,l.set(t,u));u.has(s)||(u.add(s),e=fg.bind(null,e,t,s),t.then(e,e))}function ef(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function tf(e,t,s,l,u){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,s.flags|=131072,s.flags&=-52805,s.tag===1&&(s.alternate===null?s.tag=17:(t=dn(-1,1),t.tag=2,En(s,t,1))),s.lanes|=1),e):(e.flags|=65536,e.lanes=u,e)}var q_=I.ReactCurrentOwner,kt=!1;function mt(e,t,s,l){t.child=e===null?wd(t,null,s,l):Er(t,e.child,s,l)}function nf(e,t,s,l,u){s=s.render;var f=t.ref;return Mr(t,u),l=Wl(e,t,s,l,f,u),s=Yl(),e!==null&&!kt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~u,fn(e,t,u)):(Ne&&s&&Pl(t),t.flags|=1,mt(e,t,l,u),t.child)}function rf(e,t,s,l,u){if(e===null){var f=s.type;return typeof f=="function"&&!xa(f)&&f.defaultProps===void 0&&s.compare===null&&s.defaultProps===void 0?(t.tag=15,t.type=f,sf(e,t,f,l,u)):(e=so(s.type,null,l,t,t.mode,u),e.ref=t.ref,e.return=t,t.child=e)}if(f=e.child,(e.lanes&u)===0){var _=f.memoizedProps;if(s=s.compare,s=s!==null?s:ps,s(_,l)&&e.ref===t.ref)return fn(e,t,u)}return t.flags|=1,e=Rn(f,l),e.ref=t.ref,e.return=t,t.child=e}function sf(e,t,s,l,u){if(e!==null){var f=e.memoizedProps;if(ps(f,l)&&e.ref===t.ref)if(kt=!1,t.pendingProps=l=f,(e.lanes&u)!==0)(e.flags&131072)!==0&&(kt=!0);else return t.lanes=e.lanes,fn(e,t,u)}return ql(e,t,s,l,u)}function of(e,t,s){var l=t.pendingProps,u=l.children,f=e!==null?e.memoizedState:null;if(l.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Me(Rr,jt),jt|=s;else{if((s&1073741824)===0)return e=f!==null?f.baseLanes|s:s,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Me(Rr,jt),jt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=f!==null?f.baseLanes:s,Me(Rr,jt),jt|=l}else f!==null?(l=f.baseLanes|s,t.memoizedState=null):l=s,Me(Rr,jt),jt|=l;return mt(e,t,u,s),t.child}function lf(e,t){var s=t.ref;(e===null&&s!==null||e!==null&&e.ref!==s)&&(t.flags|=512,t.flags|=2097152)}function ql(e,t,s,l,u){var f=wt(s)?$n:ct.current;return f=br(t,f),Mr(t,u),s=Wl(e,t,s,l,f,u),l=Yl(),e!==null&&!kt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~u,fn(e,t,u)):(Ne&&l&&Pl(t),t.flags|=1,mt(e,t,s,u),t.child)}function af(e,t,s,l,u){if(wt(s)){var f=!0;ji(t)}else f=!1;if(Mr(t,u),t.stateNode===null)Xi(e,t),Kd(t,s,l),Gl(t,s,l,u),l=!0;else if(e===null){var _=t.stateNode,w=t.memoizedProps;_.props=w;var C=_.context,L=s.contextType;typeof L=="object"&&L!==null?L=Lt(L):(L=wt(s)?$n:ct.current,L=br(t,L));var B=s.getDerivedStateFromProps,W=typeof B=="function"||typeof _.getSnapshotBeforeUpdate=="function";W||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(w!==l||C!==L)&&Gd(t,_,l,L),Tn=!1;var F=t.memoizedState;_.state=F,Oi(t,l,_,u),C=t.memoizedState,w!==l||F!==C||xt.current||Tn?(typeof B=="function"&&(Kl(t,s,B,l),C=t.memoizedState),(w=Tn||Qd(t,s,w,l,F,C,L))?(W||typeof _.UNSAFE_componentWillMount!="function"&&typeof _.componentWillMount!="function"||(typeof _.componentWillMount=="function"&&_.componentWillMount(),typeof _.UNSAFE_componentWillMount=="function"&&_.UNSAFE_componentWillMount()),typeof _.componentDidMount=="function"&&(t.flags|=4194308)):(typeof _.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=C),_.props=l,_.state=C,_.context=L,l=w):(typeof _.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{_=t.stateNode,Sd(e,t),w=t.memoizedProps,L=t.type===t.elementType?w:Yt(t.type,w),_.props=L,W=t.pendingProps,F=_.context,C=s.contextType,typeof C=="object"&&C!==null?C=Lt(C):(C=wt(s)?$n:ct.current,C=br(t,C));var K=s.getDerivedStateFromProps;(B=typeof K=="function"||typeof _.getSnapshotBeforeUpdate=="function")||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(w!==W||F!==C)&&Gd(t,_,l,C),Tn=!1,F=t.memoizedState,_.state=F,Oi(t,l,_,u);var Z=t.memoizedState;w!==W||F!==Z||xt.current||Tn?(typeof K=="function"&&(Kl(t,s,K,l),Z=t.memoizedState),(L=Tn||Qd(t,s,L,l,F,Z,C)||!1)?(B||typeof _.UNSAFE_componentWillUpdate!="function"&&typeof _.componentWillUpdate!="function"||(typeof _.componentWillUpdate=="function"&&_.componentWillUpdate(l,Z,C),typeof _.UNSAFE_componentWillUpdate=="function"&&_.UNSAFE_componentWillUpdate(l,Z,C)),typeof _.componentDidUpdate=="function"&&(t.flags|=4),typeof _.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof _.componentDidUpdate!="function"||w===e.memoizedProps&&F===e.memoizedState||(t.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||w===e.memoizedProps&&F===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=Z),_.props=l,_.state=Z,_.context=C,l=L):(typeof _.componentDidUpdate!="function"||w===e.memoizedProps&&F===e.memoizedState||(t.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||w===e.memoizedProps&&F===e.memoizedState||(t.flags|=1024),l=!1)}return ea(e,t,s,l,f,u)}function ea(e,t,s,l,u,f){lf(e,t);var _=(t.flags&128)!==0;if(!l&&!_)return u&&fd(t,s,!1),fn(e,t,f);l=t.stateNode,q_.current=t;var w=_&&typeof s.getDerivedStateFromError!="function"?null:l.render();return t.flags|=1,e!==null&&_?(t.child=Er(t,e.child,null,f),t.child=Er(t,null,w,f)):mt(e,t,w,f),t.memoizedState=l.state,u&&fd(t,s,!0),t.child}function uf(e){var t=e.stateNode;t.pendingContext?cd(e,t.pendingContext,t.pendingContext!==t.context):t.context&&cd(e,t.context,!1),Vl(e,t.containerInfo)}function cf(e,t,s,l,u){return Tr(),Ml(u),t.flags|=256,mt(e,t,s,l),t.child}var ta={dehydrated:null,treeContext:null,retryLane:0};function na(e){return{baseLanes:e,cachePool:null,transitions:null}}function df(e,t,s){var l=t.pendingProps,u=Ve.current,f=!1,_=(t.flags&128)!==0,w;if((w=_)||(w=e!==null&&e.memoizedState===null?!1:(u&2)!==0),w?(f=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(u|=1),Me(Ve,u&1),e===null)return jl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(_=l.children,e=l.fallback,f?(l=t.mode,f=t.child,_={mode:"hidden",children:_},(l&1)===0&&f!==null?(f.childLanes=0,f.pendingProps=_):f=io(_,l,0,null),e=nr(e,l,s,null),f.return=t,e.return=t,f.sibling=e,t.child=f,t.child.memoizedState=na(s),t.memoizedState=ta,e):ra(t,_));if(u=e.memoizedState,u!==null&&(w=u.dehydrated,w!==null))return eg(e,t,_,l,w,u,s);if(f){f=l.fallback,_=t.mode,u=e.child,w=u.sibling;var C={mode:"hidden",children:l.children};return(_&1)===0&&t.child!==u?(l=t.child,l.childLanes=0,l.pendingProps=C,t.deletions=null):(l=Rn(u,C),l.subtreeFlags=u.subtreeFlags&14680064),w!==null?f=Rn(w,f):(f=nr(f,_,s,null),f.flags|=2),f.return=t,l.return=t,l.sibling=f,t.child=l,l=f,f=t.child,_=e.child.memoizedState,_=_===null?na(s):{baseLanes:_.baseLanes|s,cachePool:null,transitions:_.transitions},f.memoizedState=_,f.childLanes=e.childLanes&~s,t.memoizedState=ta,l}return f=e.child,e=f.sibling,l=Rn(f,{mode:"visible",children:l.children}),(t.mode&1)===0&&(l.lanes=s),l.return=t,l.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=l,t.memoizedState=null,l}function ra(e,t){return t=io({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function $i(e,t,s,l){return l!==null&&Ml(l),Er(t,e.child,null,s),e=ra(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function eg(e,t,s,l,u,f,_){if(s)return t.flags&256?(t.flags&=-257,l=Zl(Error(i(422))),$i(e,t,_,l)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(f=l.fallback,u=t.mode,l=io({mode:"visible",children:l.children},u,0,null),f=nr(f,u,_,null),f.flags|=2,l.return=t,f.return=t,l.sibling=f,t.child=l,(t.mode&1)!==0&&Er(t,e.child,null,_),t.child.memoizedState=na(_),t.memoizedState=ta,f);if((t.mode&1)===0)return $i(e,t,_,null);if(u.data==="$!"){if(l=u.nextSibling&&u.nextSibling.dataset,l)var w=l.dgst;return l=w,f=Error(i(419)),l=Zl(f,l,void 0),$i(e,t,_,l)}if(w=(_&e.childLanes)!==0,kt||w){if(l=Je,l!==null){switch(_&-_){case 4:u=2;break;case 16:u=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:u=32;break;case 536870912:u=268435456;break;default:u=0}u=(u&(l.suspendedLanes|_))!==0?0:u,u!==0&&u!==f.retryLane&&(f.retryLane=u,cn(e,u),Xt(l,e,u,-1))}return va(),l=Zl(Error(i(421))),$i(e,t,_,l)}return u.data==="$?"?(t.flags|=128,t.child=e.child,t=pg.bind(null,e),u._reactRetry=t,null):(e=f.treeContext,Et=Sn(u.nextSibling),Tt=t,Ne=!0,Wt=null,e!==null&&(Dt[At++]=an,Dt[At++]=un,Dt[At++]=Xn,an=e.id,un=e.overflow,Xn=t),t=ra(t,l.children),t.flags|=4096,t)}function ff(e,t,s){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),Rl(e.return,t,s)}function sa(e,t,s,l,u){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:u}:(f.isBackwards=t,f.rendering=null,f.renderingStartTime=0,f.last=l,f.tail=s,f.tailMode=u)}function pf(e,t,s){var l=t.pendingProps,u=l.revealOrder,f=l.tail;if(mt(e,t,l.children,s),l=Ve.current,(l&2)!==0)l=l&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ff(e,s,t);else if(e.tag===19)ff(e,s,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}if(Me(Ve,l),(t.mode&1)===0)t.memoizedState=null;else switch(u){case"forwards":for(s=t.child,u=null;s!==null;)e=s.alternate,e!==null&&zi(e)===null&&(u=s),s=s.sibling;s=u,s===null?(u=t.child,t.child=null):(u=s.sibling,s.sibling=null),sa(t,!1,u,s,f);break;case"backwards":for(s=null,u=t.child,t.child=null;u!==null;){if(e=u.alternate,e!==null&&zi(e)===null){t.child=u;break}e=u.sibling,u.sibling=s,s=u,u=e}sa(t,!0,s,null,f);break;case"together":sa(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Xi(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function fn(e,t,s){if(e!==null&&(t.dependencies=e.dependencies),Jn|=t.lanes,(s&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,s=Rn(e,e.pendingProps),t.child=s,s.return=t;e.sibling!==null;)e=e.sibling,s=s.sibling=Rn(e,e.pendingProps),s.return=t;s.sibling=null}return t.child}function tg(e,t,s){switch(t.tag){case 3:uf(t),Tr();break;case 5:Pd(t);break;case 1:wt(t.type)&&ji(t);break;case 4:Vl(t,t.stateNode.containerInfo);break;case 10:var l=t.type._context,u=t.memoizedProps.value;Me(Ni,l._currentValue),l._currentValue=u;break;case 13:if(l=t.memoizedState,l!==null)return l.dehydrated!==null?(Me(Ve,Ve.current&1),t.flags|=128,null):(s&t.child.childLanes)!==0?df(e,t,s):(Me(Ve,Ve.current&1),e=fn(e,t,s),e!==null?e.sibling:null);Me(Ve,Ve.current&1);break;case 19:if(l=(s&t.childLanes)!==0,(e.flags&128)!==0){if(l)return pf(e,t,s);t.flags|=128}if(u=t.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Me(Ve,Ve.current),l)break;return null;case 22:case 23:return t.lanes=0,of(e,t,s)}return fn(e,t,s)}var hf,ia,mf,_f;hf=function(e,t){for(var s=t.child;s!==null;){if(s.tag===5||s.tag===6)e.appendChild(s.stateNode);else if(s.tag!==4&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break;for(;s.sibling===null;){if(s.return===null||s.return===t)return;s=s.return}s.sibling.return=s.return,s=s.sibling}},ia=function(){},mf=function(e,t,s,l){var u=e.memoizedProps;if(u!==l){e=t.stateNode,Gn(qt.current);var f=null;switch(s){case"input":u=Te(e,u),l=Te(e,l),f=[];break;case"select":u=H({},u,{value:void 0}),l=H({},l,{value:void 0}),f=[];break;case"textarea":u=cr(e,u),l=cr(e,l),f=[];break;default:typeof u.onClick!="function"&&typeof l.onClick=="function"&&(e.onclick=Pi)}zo(s,l);var _;s=null;for(L in u)if(!l.hasOwnProperty(L)&&u.hasOwnProperty(L)&&u[L]!=null)if(L==="style"){var w=u[L];for(_ in w)w.hasOwnProperty(_)&&(s||(s={}),s[_]="")}else L!=="dangerouslySetInnerHTML"&&L!=="children"&&L!=="suppressContentEditableWarning"&&L!=="suppressHydrationWarning"&&L!=="autoFocus"&&(a.hasOwnProperty(L)?f||(f=[]):(f=f||[]).push(L,null));for(L in l){var C=l[L];if(w=u!=null?u[L]:void 0,l.hasOwnProperty(L)&&C!==w&&(C!=null||w!=null))if(L==="style")if(w){for(_ in w)!w.hasOwnProperty(_)||C&&C.hasOwnProperty(_)||(s||(s={}),s[_]="");for(_ in C)C.hasOwnProperty(_)&&w[_]!==C[_]&&(s||(s={}),s[_]=C[_])}else s||(f||(f=[]),f.push(L,s)),s=C;else L==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,w=w?w.__html:void 0,C!=null&&w!==C&&(f=f||[]).push(L,C)):L==="children"?typeof C!="string"&&typeof C!="number"||(f=f||[]).push(L,""+C):L!=="suppressContentEditableWarning"&&L!=="suppressHydrationWarning"&&(a.hasOwnProperty(L)?(C!=null&&L==="onScroll"&&Ae("scroll",e),f||w===C||(f=[])):(f=f||[]).push(L,C))}s&&(f=f||[]).push("style",s);var L=f;(t.updateQueue=L)&&(t.flags|=4)}},_f=function(e,t,s,l){s!==l&&(t.flags|=4)};function Es(e,t){if(!Ne)switch(e.tailMode){case"hidden":t=e.tail;for(var s=null;t!==null;)t.alternate!==null&&(s=t),t=t.sibling;s===null?e.tail=null:s.sibling=null;break;case"collapsed":s=e.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function ft(e){var t=e.alternate!==null&&e.alternate.child===e.child,s=0,l=0;if(t)for(var u=e.child;u!==null;)s|=u.lanes|u.childLanes,l|=u.subtreeFlags&14680064,l|=u.flags&14680064,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)s|=u.lanes|u.childLanes,l|=u.subtreeFlags,l|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=l,e.childLanes=s,t}function ng(e,t,s){var l=t.pendingProps;switch(Tl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ft(t),null;case 1:return wt(t.type)&&Ei(),ft(t),null;case 3:return l=t.stateNode,Dr(),Le(xt),Le(ct),Fl(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(e===null||e.child===null)&&(Li(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Wt!==null&&(_a(Wt),Wt=null))),ia(e,t),ft(t),null;case 5:Ol(t);var u=Gn(Ss.current);if(s=t.type,e!==null&&t.stateNode!=null)mf(e,t,s,l,u),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!l){if(t.stateNode===null)throw Error(i(166));return ft(t),null}if(e=Gn(qt.current),Li(t)){l=t.stateNode,s=t.type;var f=t.memoizedProps;switch(l[Jt]=t,l[ys]=f,e=(t.mode&1)!==0,s){case"dialog":Ae("cancel",l),Ae("close",l);break;case"iframe":case"object":case"embed":Ae("load",l);break;case"video":case"audio":for(u=0;u<ms.length;u++)Ae(ms[u],l);break;case"source":Ae("error",l);break;case"img":case"image":case"link":Ae("error",l),Ae("load",l);break;case"details":Ae("toggle",l);break;case"input":Re(l,f),Ae("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!f.multiple},Ae("invalid",l);break;case"textarea":ni(l,f),Ae("invalid",l)}zo(s,f),u=null;for(var _ in f)if(f.hasOwnProperty(_)){var w=f[_];_==="children"?typeof w=="string"?l.textContent!==w&&(f.suppressHydrationWarning!==!0&&Ci(l.textContent,w,e),u=["children",w]):typeof w=="number"&&l.textContent!==""+w&&(f.suppressHydrationWarning!==!0&&Ci(l.textContent,w,e),u=["children",""+w]):a.hasOwnProperty(_)&&w!=null&&_==="onScroll"&&Ae("scroll",l)}switch(s){case"input":Mt(l),at(l,f,!0);break;case"textarea":Mt(l),Zr(l);break;case"select":case"option":break;default:typeof f.onClick=="function"&&(l.onclick=Pi)}l=u,t.updateQueue=l,l!==null&&(t.flags|=4)}else{_=u.nodeType===9?u:u.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=si(s)),e==="http://www.w3.org/1999/xhtml"?s==="script"?(e=_.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof l.is=="string"?e=_.createElement(s,{is:l.is}):(e=_.createElement(s),s==="select"&&(_=e,l.multiple?_.multiple=!0:l.size&&(_.size=l.size))):e=_.createElementNS(e,s),e[Jt]=t,e[ys]=l,hf(e,t,!1,!1),t.stateNode=e;e:{switch(_=Fo(s,l),s){case"dialog":Ae("cancel",e),Ae("close",e),u=l;break;case"iframe":case"object":case"embed":Ae("load",e),u=l;break;case"video":case"audio":for(u=0;u<ms.length;u++)Ae(ms[u],e);u=l;break;case"source":Ae("error",e),u=l;break;case"img":case"image":case"link":Ae("error",e),Ae("load",e),u=l;break;case"details":Ae("toggle",e),u=l;break;case"input":Re(e,l),u=Te(e,l),Ae("invalid",e);break;case"option":u=l;break;case"select":e._wrapperState={wasMultiple:!!l.multiple},u=H({},l,{value:void 0}),Ae("invalid",e);break;case"textarea":ni(e,l),u=cr(e,l),Ae("invalid",e);break;default:u=l}zo(s,u),w=u;for(f in w)if(w.hasOwnProperty(f)){var C=w[f];f==="style"?fr(e,C):f==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,C!=null&&De(e,C)):f==="children"?typeof C=="string"?(s!=="textarea"||C!=="")&&Ge(e,C):typeof C=="number"&&Ge(e,""+C):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(a.hasOwnProperty(f)?C!=null&&f==="onScroll"&&Ae("scroll",e):C!=null&&N(e,f,C,_))}switch(s){case"input":Mt(e),at(e,l,!1);break;case"textarea":Mt(e),Zr(e);break;case"option":l.value!=null&&e.setAttribute("value",""+ge(l.value));break;case"select":e.multiple=!!l.multiple,f=l.value,f!=null?Ke(e,!!l.multiple,f,!1):l.defaultValue!=null&&Ke(e,!!l.multiple,l.defaultValue,!0);break;default:typeof u.onClick=="function"&&(e.onclick=Pi)}switch(s){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ft(t),null;case 6:if(e&&t.stateNode!=null)_f(e,t,e.memoizedProps,l);else{if(typeof l!="string"&&t.stateNode===null)throw Error(i(166));if(s=Gn(Ss.current),Gn(qt.current),Li(t)){if(l=t.stateNode,s=t.memoizedProps,l[Jt]=t,(f=l.nodeValue!==s)&&(e=Tt,e!==null))switch(e.tag){case 3:Ci(l.nodeValue,s,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ci(l.nodeValue,s,(e.mode&1)!==0)}f&&(t.flags|=4)}else l=(s.nodeType===9?s:s.ownerDocument).createTextNode(l),l[Jt]=t,t.stateNode=l}return ft(t),null;case 13:if(Le(Ve),l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ne&&Et!==null&&(t.mode&1)!==0&&(t.flags&128)===0)yd(),Tr(),t.flags|=98560,f=!1;else if(f=Li(t),l!==null&&l.dehydrated!==null){if(e===null){if(!f)throw Error(i(318));if(f=t.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(i(317));f[Jt]=t}else Tr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ft(t),f=!1}else Wt!==null&&(_a(Wt),Wt=null),f=!0;if(!f)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=s,t):(l=l!==null,l!==(e!==null&&e.memoizedState!==null)&&l&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Ve.current&1)!==0?Xe===0&&(Xe=3):va())),t.updateQueue!==null&&(t.flags|=4),ft(t),null);case 4:return Dr(),ia(e,t),e===null&&_s(t.stateNode.containerInfo),ft(t),null;case 10:return Ll(t.type._context),ft(t),null;case 17:return wt(t.type)&&Ei(),ft(t),null;case 19:if(Le(Ve),f=t.memoizedState,f===null)return ft(t),null;if(l=(t.flags&128)!==0,_=f.rendering,_===null)if(l)Es(f,!1);else{if(Xe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(_=zi(e),_!==null){for(t.flags|=128,Es(f,!1),l=_.updateQueue,l!==null&&(t.updateQueue=l,t.flags|=4),t.subtreeFlags=0,l=s,s=t.child;s!==null;)f=s,e=l,f.flags&=14680066,_=f.alternate,_===null?(f.childLanes=0,f.lanes=e,f.child=null,f.subtreeFlags=0,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null,f.stateNode=null):(f.childLanes=_.childLanes,f.lanes=_.lanes,f.child=_.child,f.subtreeFlags=0,f.deletions=null,f.memoizedProps=_.memoizedProps,f.memoizedState=_.memoizedState,f.updateQueue=_.updateQueue,f.type=_.type,e=_.dependencies,f.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),s=s.sibling;return Me(Ve,Ve.current&1|2),t.child}e=e.sibling}f.tail!==null&&Be()>Nr&&(t.flags|=128,l=!0,Es(f,!1),t.lanes=4194304)}else{if(!l)if(e=zi(_),e!==null){if(t.flags|=128,l=!0,s=e.updateQueue,s!==null&&(t.updateQueue=s,t.flags|=4),Es(f,!0),f.tail===null&&f.tailMode==="hidden"&&!_.alternate&&!Ne)return ft(t),null}else 2*Be()-f.renderingStartTime>Nr&&s!==1073741824&&(t.flags|=128,l=!0,Es(f,!1),t.lanes=4194304);f.isBackwards?(_.sibling=t.child,t.child=_):(s=f.last,s!==null?s.sibling=_:t.child=_,f.last=_)}return f.tail!==null?(t=f.tail,f.rendering=t,f.tail=t.sibling,f.renderingStartTime=Be(),t.sibling=null,s=Ve.current,Me(Ve,l?s&1|2:s&1),t):(ft(t),null);case 22:case 23:return ya(),l=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==l&&(t.flags|=8192),l&&(t.mode&1)!==0?(jt&1073741824)!==0&&(ft(t),t.subtreeFlags&6&&(t.flags|=8192)):ft(t),null;case 24:return null;case 25:return null}throw Error(i(156,t.tag))}function rg(e,t){switch(Tl(t),t.tag){case 1:return wt(t.type)&&Ei(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Dr(),Le(xt),Le(ct),Fl(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Ol(t),null;case 13:if(Le(Ve),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Tr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Le(Ve),null;case 4:return Dr(),null;case 10:return Ll(t.type._context),null;case 22:case 23:return ya(),null;case 24:return null;default:return null}}var Qi=!1,pt=!1,sg=typeof WeakSet=="function"?WeakSet:Set,G=null;function Lr(e,t){var s=e.ref;if(s!==null)if(typeof s=="function")try{s(null)}catch(l){ze(e,t,l)}else s.current=null}function oa(e,t,s){try{s()}catch(l){ze(e,t,l)}}var gf=!1;function ig(e,t){if(yl=hi,e=Qc(),cl(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else e:{s=(s=e.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var u=l.anchorOffset,f=l.focusNode;l=l.focusOffset;try{s.nodeType,f.nodeType}catch{s=null;break e}var _=0,w=-1,C=-1,L=0,B=0,W=e,F=null;t:for(;;){for(var K;W!==s||u!==0&&W.nodeType!==3||(w=_+u),W!==f||l!==0&&W.nodeType!==3||(C=_+l),W.nodeType===3&&(_+=W.nodeValue.length),(K=W.firstChild)!==null;)F=W,W=K;for(;;){if(W===e)break t;if(F===s&&++L===u&&(w=_),F===f&&++B===l&&(C=_),(K=W.nextSibling)!==null)break;W=F,F=W.parentNode}W=K}s=w===-1||C===-1?null:{start:w,end:C}}else s=null}s=s||{start:0,end:0}}else s=null;for(vl={focusedElem:e,selectionRange:s},hi=!1,G=t;G!==null;)if(t=G,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,G=e;else for(;G!==null;){t=G;try{var Z=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(Z!==null){var ee=Z.memoizedProps,Ue=Z.memoizedState,M=t.stateNode,E=M.getSnapshotBeforeUpdate(t.elementType===t.type?ee:Yt(t.type,ee),Ue);M.__reactInternalSnapshotBeforeUpdate=E}break;case 3:var D=t.stateNode.containerInfo;D.nodeType===1?D.textContent="":D.nodeType===9&&D.documentElement&&D.removeChild(D.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(i(163))}}catch(Y){ze(t,t.return,Y)}if(e=t.sibling,e!==null){e.return=t.return,G=e;break}G=t.return}return Z=gf,gf=!1,Z}function js(e,t,s){var l=t.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var u=l=l.next;do{if((u.tag&e)===e){var f=u.destroy;u.destroy=void 0,f!==void 0&&oa(t,s,f)}u=u.next}while(u!==l)}}function Ki(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var s=t=t.next;do{if((s.tag&e)===e){var l=s.create;s.destroy=l()}s=s.next}while(s!==t)}}function la(e){var t=e.ref;if(t!==null){var s=e.stateNode;switch(e.tag){case 5:e=s;break;default:e=s}typeof t=="function"?t(e):t.current=e}}function yf(e){var t=e.alternate;t!==null&&(e.alternate=null,yf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Jt],delete t[ys],delete t[Sl],delete t[B_],delete t[U_])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function vf(e){return e.tag===5||e.tag===3||e.tag===4}function xf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||vf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function aa(e,t,s){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?s.nodeType===8?s.parentNode.insertBefore(e,t):s.insertBefore(e,t):(s.nodeType===8?(t=s.parentNode,t.insertBefore(e,s)):(t=s,t.appendChild(e)),s=s._reactRootContainer,s!=null||t.onclick!==null||(t.onclick=Pi));else if(l!==4&&(e=e.child,e!==null))for(aa(e,t,s),e=e.sibling;e!==null;)aa(e,t,s),e=e.sibling}function ua(e,t,s){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?s.insertBefore(e,t):s.appendChild(e);else if(l!==4&&(e=e.child,e!==null))for(ua(e,t,s),e=e.sibling;e!==null;)ua(e,t,s),e=e.sibling}var rt=null,Ht=!1;function jn(e,t,s){for(s=s.child;s!==null;)wf(e,t,s),s=s.sibling}function wf(e,t,s){if(Zt&&typeof Zt.onCommitFiberUnmount=="function")try{Zt.onCommitFiberUnmount(ai,s)}catch{}switch(s.tag){case 5:pt||Lr(s,t);case 6:var l=rt,u=Ht;rt=null,jn(e,t,s),rt=l,Ht=u,rt!==null&&(Ht?(e=rt,s=s.stateNode,e.nodeType===8?e.parentNode.removeChild(s):e.removeChild(s)):rt.removeChild(s.stateNode));break;case 18:rt!==null&&(Ht?(e=rt,s=s.stateNode,e.nodeType===8?kl(e.parentNode,s):e.nodeType===1&&kl(e,s),ls(e)):kl(rt,s.stateNode));break;case 4:l=rt,u=Ht,rt=s.stateNode.containerInfo,Ht=!0,jn(e,t,s),rt=l,Ht=u;break;case 0:case 11:case 14:case 15:if(!pt&&(l=s.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){u=l=l.next;do{var f=u,_=f.destroy;f=f.tag,_!==void 0&&((f&2)!==0||(f&4)!==0)&&oa(s,t,_),u=u.next}while(u!==l)}jn(e,t,s);break;case 1:if(!pt&&(Lr(s,t),l=s.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=s.memoizedProps,l.state=s.memoizedState,l.componentWillUnmount()}catch(w){ze(s,t,w)}jn(e,t,s);break;case 21:jn(e,t,s);break;case 22:s.mode&1?(pt=(l=pt)||s.memoizedState!==null,jn(e,t,s),pt=l):jn(e,t,s);break;default:jn(e,t,s)}}function kf(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var s=e.stateNode;s===null&&(s=e.stateNode=new sg),t.forEach(function(l){var u=hg.bind(null,e,l);s.has(l)||(s.add(l),l.then(u,u))})}}function $t(e,t){var s=t.deletions;if(s!==null)for(var l=0;l<s.length;l++){var u=s[l];try{var f=e,_=t,w=_;e:for(;w!==null;){switch(w.tag){case 5:rt=w.stateNode,Ht=!1;break e;case 3:rt=w.stateNode.containerInfo,Ht=!0;break e;case 4:rt=w.stateNode.containerInfo,Ht=!0;break e}w=w.return}if(rt===null)throw Error(i(160));wf(f,_,u),rt=null,Ht=!1;var C=u.alternate;C!==null&&(C.return=null),u.return=null}catch(L){ze(u,t,L)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Sf(t,e),t=t.sibling}function Sf(e,t){var s=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if($t(t,e),tn(e),l&4){try{js(3,e,e.return),Ki(3,e)}catch(ee){ze(e,e.return,ee)}try{js(5,e,e.return)}catch(ee){ze(e,e.return,ee)}}break;case 1:$t(t,e),tn(e),l&512&&s!==null&&Lr(s,s.return);break;case 5:if($t(t,e),tn(e),l&512&&s!==null&&Lr(s,s.return),e.flags&32){var u=e.stateNode;try{Ge(u,"")}catch(ee){ze(e,e.return,ee)}}if(l&4&&(u=e.stateNode,u!=null)){var f=e.memoizedProps,_=s!==null?s.memoizedProps:f,w=e.type,C=e.updateQueue;if(e.updateQueue=null,C!==null)try{w==="input"&&f.type==="radio"&&f.name!=null&&Qe(u,f),Fo(w,_);var L=Fo(w,f);for(_=0;_<C.length;_+=2){var B=C[_],W=C[_+1];B==="style"?fr(u,W):B==="dangerouslySetInnerHTML"?De(u,W):B==="children"?Ge(u,W):N(u,B,W,L)}switch(w){case"input":lt(u,f);break;case"textarea":ri(u,f);break;case"select":var F=u._wrapperState.wasMultiple;u._wrapperState.wasMultiple=!!f.multiple;var K=f.value;K!=null?Ke(u,!!f.multiple,K,!1):F!==!!f.multiple&&(f.defaultValue!=null?Ke(u,!!f.multiple,f.defaultValue,!0):Ke(u,!!f.multiple,f.multiple?[]:"",!1))}u[ys]=f}catch(ee){ze(e,e.return,ee)}}break;case 6:if($t(t,e),tn(e),l&4){if(e.stateNode===null)throw Error(i(162));u=e.stateNode,f=e.memoizedProps;try{u.nodeValue=f}catch(ee){ze(e,e.return,ee)}}break;case 3:if($t(t,e),tn(e),l&4&&s!==null&&s.memoizedState.isDehydrated)try{ls(t.containerInfo)}catch(ee){ze(e,e.return,ee)}break;case 4:$t(t,e),tn(e);break;case 13:$t(t,e),tn(e),u=e.child,u.flags&8192&&(f=u.memoizedState!==null,u.stateNode.isHidden=f,!f||u.alternate!==null&&u.alternate.memoizedState!==null||(fa=Be())),l&4&&kf(e);break;case 22:if(B=s!==null&&s.memoizedState!==null,e.mode&1?(pt=(L=pt)||B,$t(t,e),pt=L):$t(t,e),tn(e),l&8192){if(L=e.memoizedState!==null,(e.stateNode.isHidden=L)&&!B&&(e.mode&1)!==0)for(G=e,B=e.child;B!==null;){for(W=G=B;G!==null;){switch(F=G,K=F.child,F.tag){case 0:case 11:case 14:case 15:js(4,F,F.return);break;case 1:Lr(F,F.return);var Z=F.stateNode;if(typeof Z.componentWillUnmount=="function"){l=F,s=F.return;try{t=l,Z.props=t.memoizedProps,Z.state=t.memoizedState,Z.componentWillUnmount()}catch(ee){ze(l,s,ee)}}break;case 5:Lr(F,F.return);break;case 22:if(F.memoizedState!==null){Pf(W);continue}}K!==null?(K.return=F,G=K):Pf(W)}B=B.sibling}e:for(B=null,W=e;;){if(W.tag===5){if(B===null){B=W;try{u=W.stateNode,L?(f=u.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none"):(w=W.stateNode,C=W.memoizedProps.style,_=C!=null&&C.hasOwnProperty("display")?C.display:null,w.style.display=Wn("display",_))}catch(ee){ze(e,e.return,ee)}}}else if(W.tag===6){if(B===null)try{W.stateNode.nodeValue=L?"":W.memoizedProps}catch(ee){ze(e,e.return,ee)}}else if((W.tag!==22&&W.tag!==23||W.memoizedState===null||W===e)&&W.child!==null){W.child.return=W,W=W.child;continue}if(W===e)break e;for(;W.sibling===null;){if(W.return===null||W.return===e)break e;B===W&&(B=null),W=W.return}B===W&&(B=null),W.sibling.return=W.return,W=W.sibling}}break;case 19:$t(t,e),tn(e),l&4&&kf(e);break;case 21:break;default:$t(t,e),tn(e)}}function tn(e){var t=e.flags;if(t&2){try{e:{for(var s=e.return;s!==null;){if(vf(s)){var l=s;break e}s=s.return}throw Error(i(160))}switch(l.tag){case 5:var u=l.stateNode;l.flags&32&&(Ge(u,""),l.flags&=-33);var f=xf(e);ua(e,f,u);break;case 3:case 4:var _=l.stateNode.containerInfo,w=xf(e);aa(e,w,_);break;default:throw Error(i(161))}}catch(C){ze(e,e.return,C)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function og(e,t,s){G=e,bf(e)}function bf(e,t,s){for(var l=(e.mode&1)!==0;G!==null;){var u=G,f=u.child;if(u.tag===22&&l){var _=u.memoizedState!==null||Qi;if(!_){var w=u.alternate,C=w!==null&&w.memoizedState!==null||pt;w=Qi;var L=pt;if(Qi=_,(pt=C)&&!L)for(G=u;G!==null;)_=G,C=_.child,_.tag===22&&_.memoizedState!==null?Tf(u):C!==null?(C.return=_,G=C):Tf(u);for(;f!==null;)G=f,bf(f),f=f.sibling;G=u,Qi=w,pt=L}Cf(e)}else(u.subtreeFlags&8772)!==0&&f!==null?(f.return=u,G=f):Cf(e)}}function Cf(e){for(;G!==null;){var t=G;if((t.flags&8772)!==0){var s=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:pt||Ki(5,t);break;case 1:var l=t.stateNode;if(t.flags&4&&!pt)if(s===null)l.componentDidMount();else{var u=t.elementType===t.type?s.memoizedProps:Yt(t.type,s.memoizedProps);l.componentDidUpdate(u,s.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var f=t.updateQueue;f!==null&&Cd(t,f,l);break;case 3:var _=t.updateQueue;if(_!==null){if(s=null,t.child!==null)switch(t.child.tag){case 5:s=t.child.stateNode;break;case 1:s=t.child.stateNode}Cd(t,_,s)}break;case 5:var w=t.stateNode;if(s===null&&t.flags&4){s=w;var C=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":C.autoFocus&&s.focus();break;case"img":C.src&&(s.src=C.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var L=t.alternate;if(L!==null){var B=L.memoizedState;if(B!==null){var W=B.dehydrated;W!==null&&ls(W)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(i(163))}pt||t.flags&512&&la(t)}catch(F){ze(t,t.return,F)}}if(t===e){G=null;break}if(s=t.sibling,s!==null){s.return=t.return,G=s;break}G=t.return}}function Pf(e){for(;G!==null;){var t=G;if(t===e){G=null;break}var s=t.sibling;if(s!==null){s.return=t.return,G=s;break}G=t.return}}function Tf(e){for(;G!==null;){var t=G;try{switch(t.tag){case 0:case 11:case 15:var s=t.return;try{Ki(4,t)}catch(C){ze(t,s,C)}break;case 1:var l=t.stateNode;if(typeof l.componentDidMount=="function"){var u=t.return;try{l.componentDidMount()}catch(C){ze(t,u,C)}}var f=t.return;try{la(t)}catch(C){ze(t,f,C)}break;case 5:var _=t.return;try{la(t)}catch(C){ze(t,_,C)}}}catch(C){ze(t,t.return,C)}if(t===e){G=null;break}var w=t.sibling;if(w!==null){w.return=t.return,G=w;break}G=t.return}}var lg=Math.ceil,Gi=I.ReactCurrentDispatcher,ca=I.ReactCurrentOwner,Nt=I.ReactCurrentBatchConfig,be=0,Je=null,We=null,st=0,jt=0,Rr=bn(0),Xe=0,Ms=null,Jn=0,Zi=0,da=0,Ds=null,St=null,fa=0,Nr=1/0,pn=null,Ji=!1,pa=null,Mn=null,qi=!1,Dn=null,eo=0,As=0,ha=null,to=-1,no=0;function _t(){return(be&6)!==0?Be():to!==-1?to:to=Be()}function An(e){return(e.mode&1)===0?1:(be&2)!==0&&st!==0?st&-st:Y_.transition!==null?(no===0&&(no=vc()),no):(e=Pe,e!==0||(e=window.event,e=e===void 0?16:Ec(e.type)),e)}function Xt(e,t,s,l){if(50<As)throw As=0,ha=null,Error(i(185));ns(e,s,l),((be&2)===0||e!==Je)&&(e===Je&&((be&2)===0&&(Zi|=s),Xe===4&&Ln(e,st)),bt(e,l),s===1&&be===0&&(t.mode&1)===0&&(Nr=Be()+500,Mi&&Pn()))}function bt(e,t){var s=e.callbackNode;Y0(e,t);var l=di(e,e===Je?st:0);if(l===0)s!==null&&_c(s),e.callbackNode=null,e.callbackPriority=0;else if(t=l&-l,e.callbackPriority!==t){if(s!=null&&_c(s),t===1)e.tag===0?W_(jf.bind(null,e)):pd(jf.bind(null,e)),z_(function(){(be&6)===0&&Pn()}),s=null;else{switch(xc(l)){case 1:s=Xo;break;case 4:s=gc;break;case 16:s=li;break;case 536870912:s=yc;break;default:s=li}s=Vf(s,Ef.bind(null,e))}e.callbackPriority=t,e.callbackNode=s}}function Ef(e,t){if(to=-1,no=0,(be&6)!==0)throw Error(i(327));var s=e.callbackNode;if(Ir()&&e.callbackNode!==s)return null;var l=di(e,e===Je?st:0);if(l===0)return null;if((l&30)!==0||(l&e.expiredLanes)!==0||t)t=ro(e,l);else{t=l;var u=be;be|=2;var f=Df();(Je!==e||st!==t)&&(pn=null,Nr=Be()+500,er(e,t));do try{cg();break}catch(w){Mf(e,w)}while(!0);Al(),Gi.current=f,be=u,We!==null?t=0:(Je=null,st=0,t=Xe)}if(t!==0){if(t===2&&(u=Qo(e),u!==0&&(l=u,t=ma(e,u))),t===1)throw s=Ms,er(e,0),Ln(e,l),bt(e,Be()),s;if(t===6)Ln(e,l);else{if(u=e.current.alternate,(l&30)===0&&!ag(u)&&(t=ro(e,l),t===2&&(f=Qo(e),f!==0&&(l=f,t=ma(e,f))),t===1))throw s=Ms,er(e,0),Ln(e,l),bt(e,Be()),s;switch(e.finishedWork=u,e.finishedLanes=l,t){case 0:case 1:throw Error(i(345));case 2:tr(e,St,pn);break;case 3:if(Ln(e,l),(l&130023424)===l&&(t=fa+500-Be(),10<t)){if(di(e,0)!==0)break;if(u=e.suspendedLanes,(u&l)!==l){_t(),e.pingedLanes|=e.suspendedLanes&u;break}e.timeoutHandle=wl(tr.bind(null,e,St,pn),t);break}tr(e,St,pn);break;case 4:if(Ln(e,l),(l&4194240)===l)break;for(t=e.eventTimes,u=-1;0<l;){var _=31-Bt(l);f=1<<_,_=t[_],_>u&&(u=_),l&=~f}if(l=u,l=Be()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*lg(l/1960))-l,10<l){e.timeoutHandle=wl(tr.bind(null,e,St,pn),l);break}tr(e,St,pn);break;case 5:tr(e,St,pn);break;default:throw Error(i(329))}}}return bt(e,Be()),e.callbackNode===s?Ef.bind(null,e):null}function ma(e,t){var s=Ds;return e.current.memoizedState.isDehydrated&&(er(e,t).flags|=256),e=ro(e,t),e!==2&&(t=St,St=s,t!==null&&_a(t)),e}function _a(e){St===null?St=e:St.push.apply(St,e)}function ag(e){for(var t=e;;){if(t.flags&16384){var s=t.updateQueue;if(s!==null&&(s=s.stores,s!==null))for(var l=0;l<s.length;l++){var u=s[l],f=u.getSnapshot;u=u.value;try{if(!Ut(f(),u))return!1}catch{return!1}}}if(s=t.child,t.subtreeFlags&16384&&s!==null)s.return=t,t=s;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ln(e,t){for(t&=~da,t&=~Zi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var s=31-Bt(t),l=1<<s;e[s]=-1,t&=~l}}function jf(e){if((be&6)!==0)throw Error(i(327));Ir();var t=di(e,0);if((t&1)===0)return bt(e,Be()),null;var s=ro(e,t);if(e.tag!==0&&s===2){var l=Qo(e);l!==0&&(t=l,s=ma(e,l))}if(s===1)throw s=Ms,er(e,0),Ln(e,t),bt(e,Be()),s;if(s===6)throw Error(i(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,tr(e,St,pn),bt(e,Be()),null}function ga(e,t){var s=be;be|=1;try{return e(t)}finally{be=s,be===0&&(Nr=Be()+500,Mi&&Pn())}}function qn(e){Dn!==null&&Dn.tag===0&&(be&6)===0&&Ir();var t=be;be|=1;var s=Nt.transition,l=Pe;try{if(Nt.transition=null,Pe=1,e)return e()}finally{Pe=l,Nt.transition=s,be=t,(be&6)===0&&Pn()}}function ya(){jt=Rr.current,Le(Rr)}function er(e,t){e.finishedWork=null,e.finishedLanes=0;var s=e.timeoutHandle;if(s!==-1&&(e.timeoutHandle=-1,O_(s)),We!==null)for(s=We.return;s!==null;){var l=s;switch(Tl(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&Ei();break;case 3:Dr(),Le(xt),Le(ct),Fl();break;case 5:Ol(l);break;case 4:Dr();break;case 13:Le(Ve);break;case 19:Le(Ve);break;case 10:Ll(l.type._context);break;case 22:case 23:ya()}s=s.return}if(Je=e,We=e=Rn(e.current,null),st=jt=t,Xe=0,Ms=null,da=Zi=Jn=0,St=Ds=null,Kn!==null){for(t=0;t<Kn.length;t++)if(s=Kn[t],l=s.interleaved,l!==null){s.interleaved=null;var u=l.next,f=s.pending;if(f!==null){var _=f.next;f.next=u,l.next=_}s.pending=l}Kn=null}return e}function Mf(e,t){do{var s=We;try{if(Al(),Fi.current=Yi,Bi){for(var l=Oe.memoizedState;l!==null;){var u=l.queue;u!==null&&(u.pending=null),l=l.next}Bi=!1}if(Zn=0,Ze=$e=Oe=null,bs=!1,Cs=0,ca.current=null,s===null||s.return===null){Xe=1,Ms=t,We=null;break}e:{var f=e,_=s.return,w=s,C=t;if(t=st,w.flags|=32768,C!==null&&typeof C=="object"&&typeof C.then=="function"){var L=C,B=w,W=B.tag;if((B.mode&1)===0&&(W===0||W===11||W===15)){var F=B.alternate;F?(B.updateQueue=F.updateQueue,B.memoizedState=F.memoizedState,B.lanes=F.lanes):(B.updateQueue=null,B.memoizedState=null)}var K=ef(_);if(K!==null){K.flags&=-257,tf(K,_,w,f,t),K.mode&1&&qd(f,L,t),t=K,C=L;var Z=t.updateQueue;if(Z===null){var ee=new Set;ee.add(C),t.updateQueue=ee}else Z.add(C);break e}else{if((t&1)===0){qd(f,L,t),va();break e}C=Error(i(426))}}else if(Ne&&w.mode&1){var Ue=ef(_);if(Ue!==null){(Ue.flags&65536)===0&&(Ue.flags|=256),tf(Ue,_,w,f,t),Ml(Ar(C,w));break e}}f=C=Ar(C,w),Xe!==4&&(Xe=2),Ds===null?Ds=[f]:Ds.push(f),f=_;do{switch(f.tag){case 3:f.flags|=65536,t&=-t,f.lanes|=t;var M=Zd(f,C,t);bd(f,M);break e;case 1:w=C;var E=f.type,D=f.stateNode;if((f.flags&128)===0&&(typeof E.getDerivedStateFromError=="function"||D!==null&&typeof D.componentDidCatch=="function"&&(Mn===null||!Mn.has(D)))){f.flags|=65536,t&=-t,f.lanes|=t;var Y=Jd(f,w,t);bd(f,Y);break e}}f=f.return}while(f!==null)}Lf(s)}catch(te){t=te,We===s&&s!==null&&(We=s=s.return);continue}break}while(!0)}function Df(){var e=Gi.current;return Gi.current=Yi,e===null?Yi:e}function va(){(Xe===0||Xe===3||Xe===2)&&(Xe=4),Je===null||(Jn&268435455)===0&&(Zi&268435455)===0||Ln(Je,st)}function ro(e,t){var s=be;be|=2;var l=Df();(Je!==e||st!==t)&&(pn=null,er(e,t));do try{ug();break}catch(u){Mf(e,u)}while(!0);if(Al(),be=s,Gi.current=l,We!==null)throw Error(i(261));return Je=null,st=0,Xe}function ug(){for(;We!==null;)Af(We)}function cg(){for(;We!==null&&!N0();)Af(We)}function Af(e){var t=If(e.alternate,e,jt);e.memoizedProps=e.pendingProps,t===null?Lf(e):We=t,ca.current=null}function Lf(e){var t=e;do{var s=t.alternate;if(e=t.return,(t.flags&32768)===0){if(s=ng(s,t,jt),s!==null){We=s;return}}else{if(s=rg(s,t),s!==null){s.flags&=32767,We=s;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Xe=6,We=null;return}}if(t=t.sibling,t!==null){We=t;return}We=t=e}while(t!==null);Xe===0&&(Xe=5)}function tr(e,t,s){var l=Pe,u=Nt.transition;try{Nt.transition=null,Pe=1,dg(e,t,s,l)}finally{Nt.transition=u,Pe=l}return null}function dg(e,t,s,l){do Ir();while(Dn!==null);if((be&6)!==0)throw Error(i(327));s=e.finishedWork;var u=e.finishedLanes;if(s===null)return null;if(e.finishedWork=null,e.finishedLanes=0,s===e.current)throw Error(i(177));e.callbackNode=null,e.callbackPriority=0;var f=s.lanes|s.childLanes;if(H0(e,f),e===Je&&(We=Je=null,st=0),(s.subtreeFlags&2064)===0&&(s.flags&2064)===0||qi||(qi=!0,Vf(li,function(){return Ir(),null})),f=(s.flags&15990)!==0,(s.subtreeFlags&15990)!==0||f){f=Nt.transition,Nt.transition=null;var _=Pe;Pe=1;var w=be;be|=4,ca.current=null,ig(e,s),Sf(s,e),D_(vl),hi=!!yl,vl=yl=null,e.current=s,og(s),I0(),be=w,Pe=_,Nt.transition=f}else e.current=s;if(qi&&(qi=!1,Dn=e,eo=u),f=e.pendingLanes,f===0&&(Mn=null),z0(s.stateNode),bt(e,Be()),t!==null)for(l=e.onRecoverableError,s=0;s<t.length;s++)u=t[s],l(u.value,{componentStack:u.stack,digest:u.digest});if(Ji)throw Ji=!1,e=pa,pa=null,e;return(eo&1)!==0&&e.tag!==0&&Ir(),f=e.pendingLanes,(f&1)!==0?e===ha?As++:(As=0,ha=e):As=0,Pn(),null}function Ir(){if(Dn!==null){var e=xc(eo),t=Nt.transition,s=Pe;try{if(Nt.transition=null,Pe=16>e?16:e,Dn===null)var l=!1;else{if(e=Dn,Dn=null,eo=0,(be&6)!==0)throw Error(i(331));var u=be;for(be|=4,G=e.current;G!==null;){var f=G,_=f.child;if((G.flags&16)!==0){var w=f.deletions;if(w!==null){for(var C=0;C<w.length;C++){var L=w[C];for(G=L;G!==null;){var B=G;switch(B.tag){case 0:case 11:case 15:js(8,B,f)}var W=B.child;if(W!==null)W.return=B,G=W;else for(;G!==null;){B=G;var F=B.sibling,K=B.return;if(yf(B),B===L){G=null;break}if(F!==null){F.return=K,G=F;break}G=K}}}var Z=f.alternate;if(Z!==null){var ee=Z.child;if(ee!==null){Z.child=null;do{var Ue=ee.sibling;ee.sibling=null,ee=Ue}while(ee!==null)}}G=f}}if((f.subtreeFlags&2064)!==0&&_!==null)_.return=f,G=_;else e:for(;G!==null;){if(f=G,(f.flags&2048)!==0)switch(f.tag){case 0:case 11:case 15:js(9,f,f.return)}var M=f.sibling;if(M!==null){M.return=f.return,G=M;break e}G=f.return}}var E=e.current;for(G=E;G!==null;){_=G;var D=_.child;if((_.subtreeFlags&2064)!==0&&D!==null)D.return=_,G=D;else e:for(_=E;G!==null;){if(w=G,(w.flags&2048)!==0)try{switch(w.tag){case 0:case 11:case 15:Ki(9,w)}}catch(te){ze(w,w.return,te)}if(w===_){G=null;break e}var Y=w.sibling;if(Y!==null){Y.return=w.return,G=Y;break e}G=w.return}}if(be=u,Pn(),Zt&&typeof Zt.onPostCommitFiberRoot=="function")try{Zt.onPostCommitFiberRoot(ai,e)}catch{}l=!0}return l}finally{Pe=s,Nt.transition=t}}return!1}function Rf(e,t,s){t=Ar(s,t),t=Zd(e,t,1),e=En(e,t,1),t=_t(),e!==null&&(ns(e,1,t),bt(e,t))}function ze(e,t,s){if(e.tag===3)Rf(e,e,s);else for(;t!==null;){if(t.tag===3){Rf(t,e,s);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Mn===null||!Mn.has(l))){e=Ar(s,e),e=Jd(t,e,1),t=En(t,e,1),e=_t(),t!==null&&(ns(t,1,e),bt(t,e));break}}t=t.return}}function fg(e,t,s){var l=e.pingCache;l!==null&&l.delete(t),t=_t(),e.pingedLanes|=e.suspendedLanes&s,Je===e&&(st&s)===s&&(Xe===4||Xe===3&&(st&130023424)===st&&500>Be()-fa?er(e,0):da|=s),bt(e,t)}function Nf(e,t){t===0&&((e.mode&1)===0?t=1:(t=ci,ci<<=1,(ci&130023424)===0&&(ci=4194304)));var s=_t();e=cn(e,t),e!==null&&(ns(e,t,s),bt(e,s))}function pg(e){var t=e.memoizedState,s=0;t!==null&&(s=t.retryLane),Nf(e,s)}function hg(e,t){var s=0;switch(e.tag){case 13:var l=e.stateNode,u=e.memoizedState;u!==null&&(s=u.retryLane);break;case 19:l=e.stateNode;break;default:throw Error(i(314))}l!==null&&l.delete(t),Nf(e,s)}var If;If=function(e,t,s){if(e!==null)if(e.memoizedProps!==t.pendingProps||xt.current)kt=!0;else{if((e.lanes&s)===0&&(t.flags&128)===0)return kt=!1,tg(e,t,s);kt=(e.flags&131072)!==0}else kt=!1,Ne&&(t.flags&1048576)!==0&&hd(t,Ai,t.index);switch(t.lanes=0,t.tag){case 2:var l=t.type;Xi(e,t),e=t.pendingProps;var u=br(t,ct.current);Mr(t,s),u=Wl(null,t,l,e,u,s);var f=Yl();return t.flags|=1,typeof u=="object"&&u!==null&&typeof u.render=="function"&&u.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,wt(l)?(f=!0,ji(t)):f=!1,t.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,Il(t),u.updater=Hi,t.stateNode=u,u._reactInternals=t,Gl(t,l,e,s),t=ea(null,t,l,!0,f,s)):(t.tag=0,Ne&&f&&Pl(t),mt(null,t,u,s),t=t.child),t;case 16:l=t.elementType;e:{switch(Xi(e,t),e=t.pendingProps,u=l._init,l=u(l._payload),t.type=l,u=t.tag=_g(l),e=Yt(l,e),u){case 0:t=ql(null,t,l,e,s);break e;case 1:t=af(null,t,l,e,s);break e;case 11:t=nf(null,t,l,e,s);break e;case 14:t=rf(null,t,l,Yt(l.type,e),s);break e}throw Error(i(306,l,""))}return t;case 0:return l=t.type,u=t.pendingProps,u=t.elementType===l?u:Yt(l,u),ql(e,t,l,u,s);case 1:return l=t.type,u=t.pendingProps,u=t.elementType===l?u:Yt(l,u),af(e,t,l,u,s);case 3:e:{if(uf(t),e===null)throw Error(i(387));l=t.pendingProps,f=t.memoizedState,u=f.element,Sd(e,t),Oi(t,l,null,s);var _=t.memoizedState;if(l=_.element,f.isDehydrated)if(f={element:l,isDehydrated:!1,cache:_.cache,pendingSuspenseBoundaries:_.pendingSuspenseBoundaries,transitions:_.transitions},t.updateQueue.baseState=f,t.memoizedState=f,t.flags&256){u=Ar(Error(i(423)),t),t=cf(e,t,l,s,u);break e}else if(l!==u){u=Ar(Error(i(424)),t),t=cf(e,t,l,s,u);break e}else for(Et=Sn(t.stateNode.containerInfo.firstChild),Tt=t,Ne=!0,Wt=null,s=wd(t,null,l,s),t.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(Tr(),l===u){t=fn(e,t,s);break e}mt(e,t,l,s)}t=t.child}return t;case 5:return Pd(t),e===null&&jl(t),l=t.type,u=t.pendingProps,f=e!==null?e.memoizedProps:null,_=u.children,xl(l,u)?_=null:f!==null&&xl(l,f)&&(t.flags|=32),lf(e,t),mt(e,t,_,s),t.child;case 6:return e===null&&jl(t),null;case 13:return df(e,t,s);case 4:return Vl(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=Er(t,null,l,s):mt(e,t,l,s),t.child;case 11:return l=t.type,u=t.pendingProps,u=t.elementType===l?u:Yt(l,u),nf(e,t,l,u,s);case 7:return mt(e,t,t.pendingProps,s),t.child;case 8:return mt(e,t,t.pendingProps.children,s),t.child;case 12:return mt(e,t,t.pendingProps.children,s),t.child;case 10:e:{if(l=t.type._context,u=t.pendingProps,f=t.memoizedProps,_=u.value,Me(Ni,l._currentValue),l._currentValue=_,f!==null)if(Ut(f.value,_)){if(f.children===u.children&&!xt.current){t=fn(e,t,s);break e}}else for(f=t.child,f!==null&&(f.return=t);f!==null;){var w=f.dependencies;if(w!==null){_=f.child;for(var C=w.firstContext;C!==null;){if(C.context===l){if(f.tag===1){C=dn(-1,s&-s),C.tag=2;var L=f.updateQueue;if(L!==null){L=L.shared;var B=L.pending;B===null?C.next=C:(C.next=B.next,B.next=C),L.pending=C}}f.lanes|=s,C=f.alternate,C!==null&&(C.lanes|=s),Rl(f.return,s,t),w.lanes|=s;break}C=C.next}}else if(f.tag===10)_=f.type===t.type?null:f.child;else if(f.tag===18){if(_=f.return,_===null)throw Error(i(341));_.lanes|=s,w=_.alternate,w!==null&&(w.lanes|=s),Rl(_,s,t),_=f.sibling}else _=f.child;if(_!==null)_.return=f;else for(_=f;_!==null;){if(_===t){_=null;break}if(f=_.sibling,f!==null){f.return=_.return,_=f;break}_=_.return}f=_}mt(e,t,u.children,s),t=t.child}return t;case 9:return u=t.type,l=t.pendingProps.children,Mr(t,s),u=Lt(u),l=l(u),t.flags|=1,mt(e,t,l,s),t.child;case 14:return l=t.type,u=Yt(l,t.pendingProps),u=Yt(l.type,u),rf(e,t,l,u,s);case 15:return sf(e,t,t.type,t.pendingProps,s);case 17:return l=t.type,u=t.pendingProps,u=t.elementType===l?u:Yt(l,u),Xi(e,t),t.tag=1,wt(l)?(e=!0,ji(t)):e=!1,Mr(t,s),Kd(t,l,u),Gl(t,l,u,s),ea(null,t,l,!0,e,s);case 19:return pf(e,t,s);case 22:return of(e,t,s)}throw Error(i(156,t.tag))};function Vf(e,t){return mc(e,t)}function mg(e,t,s,l){this.tag=e,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function It(e,t,s,l){return new mg(e,t,s,l)}function xa(e){return e=e.prototype,!(!e||!e.isReactComponent)}function _g(e){if(typeof e=="function")return xa(e)?1:0;if(e!=null){if(e=e.$$typeof,e===_e)return 11;if(e===ce)return 14}return 2}function Rn(e,t){var s=e.alternate;return s===null?(s=It(e.tag,t,e.key,e.mode),s.elementType=e.elementType,s.type=e.type,s.stateNode=e.stateNode,s.alternate=e,e.alternate=s):(s.pendingProps=t,s.type=e.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=e.flags&14680064,s.childLanes=e.childLanes,s.lanes=e.lanes,s.child=e.child,s.memoizedProps=e.memoizedProps,s.memoizedState=e.memoizedState,s.updateQueue=e.updateQueue,t=e.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},s.sibling=e.sibling,s.index=e.index,s.ref=e.ref,s}function so(e,t,s,l,u,f){var _=2;if(l=e,typeof e=="function")xa(e)&&(_=1);else if(typeof e=="string")_=5;else e:switch(e){case q:return nr(s.children,u,f,t);case X:_=8,u|=8;break;case $:return e=It(12,s,t,u|2),e.elementType=$,e.lanes=f,e;case pe:return e=It(13,s,t,u),e.elementType=pe,e.lanes=f,e;case we:return e=It(19,s,t,u),e.elementType=we,e.lanes=f,e;case le:return io(s,u,f,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ne:_=10;break e;case me:_=9;break e;case _e:_=11;break e;case ce:_=14;break e;case Se:_=16,l=null;break e}throw Error(i(130,e==null?e:typeof e,""))}return t=It(_,s,t,u),t.elementType=e,t.type=l,t.lanes=f,t}function nr(e,t,s,l){return e=It(7,e,l,t),e.lanes=s,e}function io(e,t,s,l){return e=It(22,e,l,t),e.elementType=le,e.lanes=s,e.stateNode={isHidden:!1},e}function wa(e,t,s){return e=It(6,e,null,t),e.lanes=s,e}function ka(e,t,s){return t=It(4,e.children!==null?e.children:[],e.key,t),t.lanes=s,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function gg(e,t,s,l,u){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ko(0),this.expirationTimes=Ko(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ko(0),this.identifierPrefix=l,this.onRecoverableError=u,this.mutableSourceEagerHydrationData=null}function Sa(e,t,s,l,u,f,_,w,C){return e=new gg(e,t,s,w,C),t===1?(t=1,f===!0&&(t|=8)):t=0,f=It(3,null,null,t),e.current=f,f.stateNode=e,f.memoizedState={element:l,isDehydrated:s,cache:null,transitions:null,pendingSuspenseBoundaries:null},Il(f),e}function yg(e,t,s){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Q,key:l==null?null:""+l,children:e,containerInfo:t,implementation:s}}function Of(e){if(!e)return Cn;e=e._reactInternals;e:{if(Yn(e)!==e||e.tag!==1)throw Error(i(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(wt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(i(171))}if(e.tag===1){var s=e.type;if(wt(s))return dd(e,s,t)}return t}function zf(e,t,s,l,u,f,_,w,C){return e=Sa(s,l,!0,e,u,f,_,w,C),e.context=Of(null),s=e.current,l=_t(),u=An(s),f=dn(l,u),f.callback=t??null,En(s,f,u),e.current.lanes=u,ns(e,u,l),bt(e,l),e}function oo(e,t,s,l){var u=t.current,f=_t(),_=An(u);return s=Of(s),t.context===null?t.context=s:t.pendingContext=s,t=dn(f,_),t.payload={element:e},l=l===void 0?null:l,l!==null&&(t.callback=l),e=En(u,t,_),e!==null&&(Xt(e,u,_,f),Vi(e,u,_)),_}function lo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ff(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var s=e.retryLane;e.retryLane=s!==0&&s<t?s:t}}function ba(e,t){Ff(e,t),(e=e.alternate)&&Ff(e,t)}function vg(){return null}var Bf=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ca(e){this._internalRoot=e}ao.prototype.render=Ca.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));oo(e,t,null,null)},ao.prototype.unmount=Ca.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;qn(function(){oo(null,e,null,null)}),t[on]=null}};function ao(e){this._internalRoot=e}ao.prototype.unstable_scheduleHydration=function(e){if(e){var t=Sc();e={blockedOn:null,target:e,priority:t};for(var s=0;s<xn.length&&t!==0&&t<xn[s].priority;s++);xn.splice(s,0,e),s===0&&Pc(e)}};function Pa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function uo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Uf(){}function xg(e,t,s,l,u){if(u){if(typeof l=="function"){var f=l;l=function(){var L=lo(_);f.call(L)}}var _=zf(t,l,e,0,null,!1,!1,"",Uf);return e._reactRootContainer=_,e[on]=_.current,_s(e.nodeType===8?e.parentNode:e),qn(),_}for(;u=e.lastChild;)e.removeChild(u);if(typeof l=="function"){var w=l;l=function(){var L=lo(C);w.call(L)}}var C=Sa(e,0,!1,null,null,!1,!1,"",Uf);return e._reactRootContainer=C,e[on]=C.current,_s(e.nodeType===8?e.parentNode:e),qn(function(){oo(t,C,s,l)}),C}function co(e,t,s,l,u){var f=s._reactRootContainer;if(f){var _=f;if(typeof u=="function"){var w=u;u=function(){var C=lo(_);w.call(C)}}oo(t,_,e,u)}else _=xg(s,t,e,u,l);return lo(_)}wc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var s=ts(t.pendingLanes);s!==0&&(Go(t,s|1),bt(t,Be()),(be&6)===0&&(Nr=Be()+500,Pn()))}break;case 13:qn(function(){var l=cn(e,1);if(l!==null){var u=_t();Xt(l,e,1,u)}}),ba(e,1)}},Zo=function(e){if(e.tag===13){var t=cn(e,134217728);if(t!==null){var s=_t();Xt(t,e,134217728,s)}ba(e,134217728)}},kc=function(e){if(e.tag===13){var t=An(e),s=cn(e,t);if(s!==null){var l=_t();Xt(s,e,t,l)}ba(e,t)}},Sc=function(){return Pe},bc=function(e,t){var s=Pe;try{return Pe=e,t()}finally{Pe=s}},Wo=function(e,t,s){switch(t){case"input":if(lt(e,s),t=s.name,s.type==="radio"&&t!=null){for(s=e;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<s.length;t++){var l=s[t];if(l!==e&&l.form===e.form){var u=Ti(l);if(!u)throw Error(i(90));Un(l),lt(l,u)}}}break;case"textarea":ri(e,s);break;case"select":t=s.value,t!=null&&Ke(e,!!s.multiple,t,!1)}},ac=ga,uc=qn;var wg={usingClientEntryPoint:!1,Events:[vs,kr,Ti,oc,lc,ga]},Ls={findFiberByHostInstance:Hn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},kg={bundleType:Ls.bundleType,version:Ls.version,rendererPackageName:Ls.rendererPackageName,rendererConfig:Ls.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:I.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=pc(e),e===null?null:e.stateNode},findFiberByHostInstance:Ls.findFiberByHostInstance||vg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fo.isDisabled&&fo.supportsFiber)try{ai=fo.inject(kg),Zt=fo}catch{}}return Ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=wg,Ct.createPortal=function(e,t){var s=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Pa(t))throw Error(i(200));return yg(e,t,null,s)},Ct.createRoot=function(e,t){if(!Pa(e))throw Error(i(299));var s=!1,l="",u=Bf;return t!=null&&(t.unstable_strictMode===!0&&(s=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onRecoverableError!==void 0&&(u=t.onRecoverableError)),t=Sa(e,1,!1,null,null,s,!1,l,u),e[on]=t.current,_s(e.nodeType===8?e.parentNode:e),new Ca(t)},Ct.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(i(188)):(e=Object.keys(e).join(","),Error(i(268,e)));return e=pc(t),e=e===null?null:e.stateNode,e},Ct.flushSync=function(e){return qn(e)},Ct.hydrate=function(e,t,s){if(!uo(t))throw Error(i(200));return co(null,e,t,!0,s)},Ct.hydrateRoot=function(e,t,s){if(!Pa(e))throw Error(i(405));var l=s!=null&&s.hydratedSources||null,u=!1,f="",_=Bf;if(s!=null&&(s.unstable_strictMode===!0&&(u=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onRecoverableError!==void 0&&(_=s.onRecoverableError)),t=zf(t,null,e,1,s??null,u,!1,f,_),e[on]=t.current,_s(e),l)for(e=0;e<l.length;e++)s=l[e],u=s._getVersion,u=u(s._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[s,u]:t.mutableSourceEagerHydrationData.push(s,u);return new ao(t)},Ct.render=function(e,t,s){if(!uo(t))throw Error(i(200));return co(null,e,t,!1,s)},Ct.unmountComponentAtNode=function(e){if(!uo(e))throw Error(i(40));return e._reactRootContainer?(qn(function(){co(null,null,e,!1,function(){e._reactRootContainer=null,e[on]=null})}),!0):!1},Ct.unstable_batchedUpdates=ga,Ct.unstable_renderSubtreeIntoContainer=function(e,t,s,l){if(!uo(s))throw Error(i(200));if(e==null||e._reactInternals===void 0)throw Error(i(38));return co(e,t,s,!1,l)},Ct.version="18.3.1-next-f1338f8080-20240426",Ct}var Gf;function Ph(){if(Gf)return ja.exports;Gf=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(r){console.error(r)}}return n(),ja.exports=jg(),ja.exports}var Zf;function Mg(){if(Zf)return po;Zf=1;var n=Ph();return po.createRoot=n.createRoot,po.hydrateRoot=n.hydrateRoot,po}var Dg=Mg(),b=Cu(),Pu=Ph();const Ws=b.createContext({});function Zs(n){const r=b.useRef(null);return r.current===null&&(r.current=n()),r.current}const Ag=typeof window<"u",Ao=Ag?b.useLayoutEffect:b.useEffect,Lo=b.createContext(null);function Tu(n,r){n.indexOf(r)===-1&&n.push(r)}function Hr(n,r){const i=n.indexOf(r);i>-1&&n.splice(i,1)}const sn=(n,r,i)=>i>r?r:i<n?n:i;let Eu=()=>{};const hn={},Th=n=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n);function Eh(n){return typeof n=="object"&&n!==null}const jh=n=>/^0[^.\s]+$/u.test(n);function Mh(n){let r;return()=>(r===void 0&&(r=n()),r)}const Ot=n=>n,Lg=(n,r)=>i=>r(n(i)),Js=(...n)=>n.reduce(Lg),$r=(n,r,i)=>{const o=r-n;return o===0?1:(i-n)/o};class ju{constructor(){this.subscriptions=[]}add(r){return Tu(this.subscriptions,r),()=>Hr(this.subscriptions,r)}notify(r,i,o){const a=this.subscriptions.length;if(a)if(a===1)this.subscriptions[0](r,i,o);else for(let d=0;d<a;d++){const c=this.subscriptions[d];c&&c(r,i,o)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const zt=n=>n*1e3,Vt=n=>n/1e3;function Dh(n,r){return r?n*(1e3/r):0}const Rg=(n,r,i)=>{const o=r-n;return((i-n)%o+o)%o+n},Ah=(n,r,i)=>(((1-3*i+3*r)*n+(3*i-6*r))*n+3*r)*n,Ng=1e-7,Ig=12;function Vg(n,r,i,o,a){let d,c,p=0;do c=r+(i-r)/2,d=Ah(c,o,a)-n,d>0?i=c:r=c;while(Math.abs(d)>Ng&&++p<Ig);return c}function qs(n,r,i,o){if(n===r&&i===o)return Ot;const a=d=>Vg(d,0,1,n,i);return d=>d===0||d===1?d:Ah(a(d),r,o)}const Lh=n=>r=>r<=.5?n(2*r)/2:(2-n(2*(1-r)))/2,Rh=n=>r=>1-n(1-r),Nh=qs(.33,1.53,.69,.99),Mu=Rh(Nh),Ih=Lh(Mu),Vh=n=>(n*=2)<1?.5*Mu(n):.5*(2-Math.pow(2,-10*(n-1))),Du=n=>1-Math.sin(Math.acos(n)),Oh=Rh(Du),zh=Lh(Du),Og=qs(.42,0,1,1),zg=qs(0,0,.58,1),Fh=qs(.42,0,.58,1),Bh=n=>Array.isArray(n)&&typeof n[0]!="number";function Uh(n,r){return Bh(n)?n[Rg(0,n.length,r)]:n}const Wh=n=>Array.isArray(n)&&typeof n[0]=="number",Fg={linear:Ot,easeIn:Og,easeInOut:Fh,easeOut:zg,circIn:Du,circInOut:zh,circOut:Oh,backIn:Mu,backInOut:Ih,backOut:Nh,anticipate:Vh},Bg=n=>typeof n=="string",Jf=n=>{if(Wh(n)){Eu(n.length===4);const[r,i,o,a]=n;return qs(r,i,o,a)}else if(Bg(n))return Fg[n];return n},ho=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function Ug(n,r){let i=new Set,o=new Set,a=!1,d=!1;const c=new WeakSet;let p={delta:0,timestamp:0,isProcessing:!1};function h(g){c.has(g)&&(m.schedule(g),n()),g(p)}const m={schedule:(g,y=!1,x=!1)=>{const j=x&&a?i:o;return y&&c.add(g),j.has(g)||j.add(g),g},cancel:g=>{o.delete(g),c.delete(g)},process:g=>{if(p=g,a){d=!0;return}a=!0,[i,o]=[o,i],i.forEach(h),i.clear(),a=!1,d&&(d=!1,m.process(g))}};return m}const Wg=40;function Yh(n,r){let i=!1,o=!0;const a={delta:0,timestamp:0,isProcessing:!1},d=()=>i=!0,c=ho.reduce((N,I)=>(N[I]=Ug(d),N),{}),{setup:p,read:h,resolveKeyframes:m,preUpdate:g,update:y,preRender:x,render:S,postRender:j}=c,k=()=>{const N=hn.useManualTiming?a.timestamp:performance.now();i=!1,hn.useManualTiming||(a.delta=o?1e3/60:Math.max(Math.min(N-a.timestamp,Wg),1)),a.timestamp=N,a.isProcessing=!0,p.process(a),h.process(a),m.process(a),g.process(a),y.process(a),x.process(a),S.process(a),j.process(a),a.isProcessing=!1,i&&r&&(o=!1,n(k))},P=()=>{i=!0,o=!0,a.isProcessing||n(k)};return{schedule:ho.reduce((N,I)=>{const z=c[I];return N[I]=(Q,q=!1,X=!1)=>(i||P(),z.schedule(Q,q,X)),N},{}),cancel:N=>{for(let I=0;I<ho.length;I++)c[ho[I]].cancel(N)},state:a,steps:c}}const{schedule:Ee,cancel:mn,state:ot,steps:Aa}=Yh(typeof requestAnimationFrame<"u"?requestAnimationFrame:Ot,!0);let vo;function Yg(){vo=void 0}const gt={now:()=>(vo===void 0&&gt.set(ot.isProcessing||hn.useManualTiming?ot.timestamp:performance.now()),vo),set:n=>{vo=n,queueMicrotask(Yg)}},Hh=n=>r=>typeof r=="string"&&r.startsWith(n),$h=Hh("--"),Hg=Hh("var(--"),Au=n=>Hg(n)?$g.test(n.split("/*")[0].trim()):!1,$g=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function qf(n){return typeof n!="string"?!1:n.split("/*")[0].includes("var(--")}const Xr={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},Ys={...Xr,transform:n=>sn(0,1,n)},mo={...Xr,default:1},Os=n=>Math.round(n*1e5)/1e5,Lu=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function Xg(n){return n==null}const Qg=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Ru=(n,r)=>i=>!!(typeof i=="string"&&Qg.test(i)&&i.startsWith(n)||r&&!Xg(i)&&Object.prototype.hasOwnProperty.call(i,r)),Xh=(n,r,i)=>o=>{if(typeof o!="string")return o;const[a,d,c,p]=o.match(Lu);return{[n]:parseFloat(a),[r]:parseFloat(d),[i]:parseFloat(c),alpha:p!==void 0?parseFloat(p):1}},Kg=n=>sn(0,255,n),La={...Xr,transform:n=>Math.round(Kg(n))},or={test:Ru("rgb","red"),parse:Xh("red","green","blue"),transform:({red:n,green:r,blue:i,alpha:o=1})=>"rgba("+La.transform(n)+", "+La.transform(r)+", "+La.transform(i)+", "+Os(Ys.transform(o))+")"};function Gg(n){let r="",i="",o="",a="";return n.length>5?(r=n.substring(1,3),i=n.substring(3,5),o=n.substring(5,7),a=n.substring(7,9)):(r=n.substring(1,2),i=n.substring(2,3),o=n.substring(3,4),a=n.substring(4,5),r+=r,i+=i,o+=o,a+=a),{red:parseInt(r,16),green:parseInt(i,16),blue:parseInt(o,16),alpha:a?parseInt(a,16)/255:1}}const qa={test:Ru("#"),parse:Gg,transform:or.transform},ei=n=>({test:r=>typeof r=="string"&&r.endsWith(n)&&r.split(" ").length===1,parse:parseFloat,transform:r=>`${r}${n}`}),In=ei("deg"),rn=ei("%"),J=ei("px"),Zg=ei("vh"),Jg=ei("vw"),ep={...rn,parse:n=>rn.parse(n)/100,transform:n=>rn.transform(n*100)},zr={test:Ru("hsl","hue"),parse:Xh("hue","saturation","lightness"),transform:({hue:n,saturation:r,lightness:i,alpha:o=1})=>"hsla("+Math.round(n)+", "+rn.transform(Os(r))+", "+rn.transform(Os(i))+", "+Os(Ys.transform(o))+")"},He={test:n=>or.test(n)||qa.test(n)||zr.test(n),parse:n=>or.test(n)?or.parse(n):zr.test(n)?zr.parse(n):qa.parse(n),transform:n=>typeof n=="string"?n:n.hasOwnProperty("red")?or.transform(n):zr.transform(n),getAnimatableNone:n=>{const r=He.parse(n);return r.alpha=0,He.transform(r)}},qg=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function ey(n){var r,i;return isNaN(n)&&typeof n=="string"&&(((r=n.match(Lu))==null?void 0:r.length)||0)+(((i=n.match(qg))==null?void 0:i.length)||0)>0}const Qh="number",Kh="color",ty="var",ny="var(",tp="${}",ry=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Hs(n){const r=n.toString(),i=[],o={color:[],number:[],var:[]},a=[];let d=0;const p=r.replace(ry,h=>(He.test(h)?(o.color.push(d),a.push(Kh),i.push(He.parse(h))):h.startsWith(ny)?(o.var.push(d),a.push(ty),i.push(h)):(o.number.push(d),a.push(Qh),i.push(parseFloat(h))),++d,tp)).split(tp);return{values:i,split:p,indexes:o,types:a}}function Gh(n){return Hs(n).values}function Zh(n){const{split:r,types:i}=Hs(n),o=r.length;return a=>{let d="";for(let c=0;c<o;c++)if(d+=r[c],a[c]!==void 0){const p=i[c];p===Qh?d+=Os(a[c]):p===Kh?d+=He.transform(a[c]):d+=a[c]}return d}}const sy=n=>typeof n=="number"?0:He.test(n)?He.getAnimatableNone(n):n;function iy(n){const r=Gh(n);return Zh(n)(r.map(sy))}const Gt={test:ey,parse:Gh,createTransformer:Zh,getAnimatableNone:iy};function Ra(n,r,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?n+(r-n)*6*i:i<1/2?r:i<2/3?n+(r-n)*(2/3-i)*6:n}function oy({hue:n,saturation:r,lightness:i,alpha:o}){n/=360,r/=100,i/=100;let a=0,d=0,c=0;if(!r)a=d=c=i;else{const p=i<.5?i*(1+r):i+r-i*r,h=2*i-p;a=Ra(h,p,n+1/3),d=Ra(h,p,n),c=Ra(h,p,n-1/3)}return{red:Math.round(a*255),green:Math.round(d*255),blue:Math.round(c*255),alpha:o}}function Co(n,r){return i=>i>0?r:n}const Ie=(n,r,i)=>n+(r-n)*i,Na=(n,r,i)=>{const o=n*n,a=i*(r*r-o)+o;return a<0?0:Math.sqrt(a)},ly=[qa,or,zr],ay=n=>ly.find(r=>r.test(n));function np(n){const r=ay(n);if(!r)return!1;let i=r.parse(n);return r===zr&&(i=oy(i)),i}const rp=(n,r)=>{const i=np(n),o=np(r);if(!i||!o)return Co(n,r);const a={...i};return d=>(a.red=Na(i.red,o.red,d),a.green=Na(i.green,o.green,d),a.blue=Na(i.blue,o.blue,d),a.alpha=Ie(i.alpha,o.alpha,d),or.transform(a))},eu=new Set(["none","hidden"]);function uy(n,r){return eu.has(n)?i=>i<=0?n:r:i=>i>=1?r:n}function cy(n,r){return i=>Ie(n,r,i)}function Nu(n){return typeof n=="number"?cy:typeof n=="string"?Au(n)?Co:He.test(n)?rp:py:Array.isArray(n)?Jh:typeof n=="object"?He.test(n)?rp:dy:Co}function Jh(n,r){const i=[...n],o=i.length,a=n.map((d,c)=>Nu(d)(d,r[c]));return d=>{for(let c=0;c<o;c++)i[c]=a[c](d);return i}}function dy(n,r){const i={...n,...r},o={};for(const a in i)n[a]!==void 0&&r[a]!==void 0&&(o[a]=Nu(n[a])(n[a],r[a]));return a=>{for(const d in o)i[d]=o[d](a);return i}}function fy(n,r){const i=[],o={color:0,var:0,number:0};for(let a=0;a<r.values.length;a++){const d=r.types[a],c=n.indexes[d][o[d]],p=n.values[c]??0;i[a]=p,o[d]++}return i}const py=(n,r)=>{const i=Gt.createTransformer(r),o=Hs(n),a=Hs(r);return o.indexes.var.length===a.indexes.var.length&&o.indexes.color.length===a.indexes.color.length&&o.indexes.number.length>=a.indexes.number.length?eu.has(n)&&!a.values.length||eu.has(r)&&!o.values.length?uy(n,r):Js(Jh(fy(o,a),a.values),i):Co(n,r)};function qh(n,r,i){return typeof n=="number"&&typeof r=="number"&&typeof i=="number"?Ie(n,r,i):Nu(n)(n,r)}const hy=n=>{const r=({timestamp:i})=>n(i);return{start:(i=!0)=>Ee.update(r,i),stop:()=>mn(r),now:()=>ot.isProcessing?ot.timestamp:gt.now()}},em=(n,r,i=10)=>{let o="";const a=Math.max(Math.round(r/i),2);for(let d=0;d<a;d++)o+=Math.round(n(d/(a-1))*1e4)/1e4+", ";return`linear(${o.substring(0,o.length-2)})`},Po=2e4;function Iu(n){let r=0;const i=50;let o=n.next(r);for(;!o.done&&r<Po;)r+=i,o=n.next(r);return r>=Po?1/0:r}function tm(n,r=100,i){const o=i({...n,keyframes:[0,r]}),a=Math.min(Iu(o),Po);return{type:"keyframes",ease:d=>o.next(a*d).value/r,duration:Vt(a)}}const my=5;function nm(n,r,i){const o=Math.max(r-my,0);return Dh(i-n(o),r-o)}const Fe={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Ia=.001;function _y({duration:n=Fe.duration,bounce:r=Fe.bounce,velocity:i=Fe.velocity,mass:o=Fe.mass}){let a,d,c=1-r;c=sn(Fe.minDamping,Fe.maxDamping,c),n=sn(Fe.minDuration,Fe.maxDuration,Vt(n)),c<1?(a=m=>{const g=m*c,y=g*n,x=g-i,S=tu(m,c),j=Math.exp(-y);return Ia-x/S*j},d=m=>{const y=m*c*n,x=y*i+i,S=Math.pow(c,2)*Math.pow(m,2)*n,j=Math.exp(-y),k=tu(Math.pow(m,2),c);return(-a(m)+Ia>0?-1:1)*((x-S)*j)/k}):(a=m=>{const g=Math.exp(-m*n),y=(m-i)*n+1;return-Ia+g*y},d=m=>{const g=Math.exp(-m*n),y=(i-m)*(n*n);return g*y});const p=5/n,h=yy(a,d,p);if(n=zt(n),isNaN(h))return{stiffness:Fe.stiffness,damping:Fe.damping,duration:n};{const m=Math.pow(h,2)*o;return{stiffness:m,damping:c*2*Math.sqrt(o*m),duration:n}}}const gy=12;function yy(n,r,i){let o=i;for(let a=1;a<gy;a++)o=o-n(o)/r(o);return o}function tu(n,r){return n*Math.sqrt(1-r*r)}const vy=["duration","bounce"],xy=["stiffness","damping","mass"];function sp(n,r){return r.some(i=>n[i]!==void 0)}function wy(n){let r={velocity:Fe.velocity,stiffness:Fe.stiffness,damping:Fe.damping,mass:Fe.mass,isResolvedFromDuration:!1,...n};if(!sp(n,xy)&&sp(n,vy))if(r.velocity=0,n.visualDuration){const i=n.visualDuration,o=2*Math.PI/(i*1.2),a=o*o,d=2*sn(.05,1,1-(n.bounce||0))*Math.sqrt(a);r={...r,mass:Fe.mass,stiffness:a,damping:d}}else{const i=_y({...n,velocity:0});r={...r,...i,mass:Fe.mass},r.isResolvedFromDuration=!0}return r}function $s(n=Fe.visualDuration,r=Fe.bounce){const i=typeof n!="object"?{visualDuration:n,keyframes:[0,1],bounce:r}:n;let{restSpeed:o,restDelta:a}=i;const d=i.keyframes[0],c=i.keyframes[i.keyframes.length-1],p={done:!1,value:d},{stiffness:h,damping:m,mass:g,duration:y,velocity:x,isResolvedFromDuration:S}=wy({...i,velocity:-Vt(i.velocity||0)}),j=x||0,k=m/(2*Math.sqrt(h*g)),P=c-d,A=Vt(Math.sqrt(h/g)),R=Math.abs(P)<5;o||(o=R?Fe.restSpeed.granular:Fe.restSpeed.default),a||(a=R?Fe.restDelta.granular:Fe.restDelta.default);let N;if(k<1){const z=tu(A,k);N=Q=>{const q=Math.exp(-k*A*Q);return c-q*((j+k*A*P)/z*Math.sin(z*Q)+P*Math.cos(z*Q))}}else if(k===1)N=z=>c-Math.exp(-A*z)*(P+(j+A*P)*z);else{const z=A*Math.sqrt(k*k-1);N=Q=>{const q=Math.exp(-k*A*Q),X=Math.min(z*Q,300);return c-q*((j+k*A*P)*Math.sinh(X)+z*P*Math.cosh(X))/z}}const I={calculatedDuration:S&&y||null,next:z=>{const Q=N(z);if(S)p.done=z>=y;else{let q=z===0?j:0;k<1&&(q=z===0?zt(j):nm(N,z,Q));const X=Math.abs(q)<=o,$=Math.abs(c-Q)<=a;p.done=X&&$}return p.value=p.done?c:Q,p},toString:()=>{const z=Math.min(Iu(I),Po),Q=em(q=>I.next(z*q).value,z,30);return z+"ms "+Q},toTransition:()=>{}};return I}$s.applyToOptions=n=>{const r=tm(n,100,$s);return n.ease=r.ease,n.duration=zt(r.duration),n.type="keyframes",n};function nu({keyframes:n,velocity:r=0,power:i=.8,timeConstant:o=325,bounceDamping:a=10,bounceStiffness:d=500,modifyTarget:c,min:p,max:h,restDelta:m=.5,restSpeed:g}){const y=n[0],x={done:!1,value:y},S=X=>p!==void 0&&X<p||h!==void 0&&X>h,j=X=>p===void 0?h:h===void 0||Math.abs(p-X)<Math.abs(h-X)?p:h;let k=i*r;const P=y+k,A=c===void 0?P:c(P);A!==P&&(k=A-y);const R=X=>-k*Math.exp(-X/o),N=X=>A+R(X),I=X=>{const $=R(X),ne=N(X);x.done=Math.abs($)<=m,x.value=x.done?A:ne};let z,Q;const q=X=>{S(x.value)&&(z=X,Q=$s({keyframes:[x.value,j(x.value)],velocity:nm(N,X,x.value),damping:a,stiffness:d,restDelta:m,restSpeed:g}))};return q(0),{calculatedDuration:null,next:X=>{let $=!1;return!Q&&z===void 0&&($=!0,I(X),q(X)),z!==void 0&&X>=z?Q.next(X-z):(!$&&I(X),x)}}}function ky(n,r,i){const o=[],a=i||hn.mix||qh,d=n.length-1;for(let c=0;c<d;c++){let p=a(n[c],n[c+1]);if(r){const h=Array.isArray(r)?r[c]||Ot:r;p=Js(h,p)}o.push(p)}return o}function rm(n,r,{clamp:i=!0,ease:o,mixer:a}={}){const d=n.length;if(Eu(d===r.length),d===1)return()=>r[0];if(d===2&&r[0]===r[1])return()=>r[1];const c=n[0]===n[1];n[0]>n[d-1]&&(n=[...n].reverse(),r=[...r].reverse());const p=ky(r,o,a),h=p.length,m=g=>{if(c&&g<n[0])return r[0];let y=0;if(h>1)for(;y<n.length-2&&!(g<n[y+1]);y++);const x=$r(n[y],n[y+1],g);return p[y](x)};return i?g=>m(sn(n[0],n[d-1],g)):m}function sm(n,r){const i=n[n.length-1];for(let o=1;o<=r;o++){const a=$r(0,r,o);n.push(Ie(i,1,a))}}function im(n){const r=[0];return sm(r,n.length-1),r}function Sy(n,r){return n.map(i=>i*r)}function by(n,r){return n.map(()=>r||Fh).splice(0,n.length-1)}function zs({duration:n=300,keyframes:r,times:i,ease:o="easeInOut"}){const a=Bh(o)?o.map(Jf):Jf(o),d={done:!1,value:r[0]},c=Sy(i&&i.length===r.length?i:im(r),n),p=rm(c,r,{ease:Array.isArray(a)?a:by(r,a)});return{calculatedDuration:n,next:h=>(d.value=p(h),d.done=h>=n,d)}}const Cy=n=>n!==null;function Vu(n,{repeat:r,repeatType:i="loop"},o,a=1){const d=n.filter(Cy),p=a<0||r&&i!=="loop"&&r%2===1?0:d.length-1;return!p||o===void 0?d[p]:o}const Py={decay:nu,inertia:nu,tween:zs,keyframes:zs,spring:$s};function om(n){typeof n.type=="string"&&(n.type=Py[n.type])}class Ou{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(r=>{this.resolve=r})}notifyFinished(){this.resolve()}then(r,i){return this.finished.then(r,i)}}const Ty=n=>n/100;class zu extends Ou{constructor(r){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{var o,a;const{motionValue:i}=this.options;i&&i.updatedAt!==gt.now()&&this.tick(gt.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(a=(o=this.options).onStop)==null||a.call(o))},this.options=r,this.initAnimation(),this.play(),r.autoplay===!1&&this.pause()}initAnimation(){const{options:r}=this;om(r);const{type:i=zs,repeat:o=0,repeatDelay:a=0,repeatType:d,velocity:c=0}=r;let{keyframes:p}=r;const h=i||zs;h!==zs&&typeof p[0]!="number"&&(this.mixKeyframes=Js(Ty,qh(p[0],p[1])),p=[0,100]);const m=h({...r,keyframes:p});d==="mirror"&&(this.mirroredGenerator=h({...r,keyframes:[...p].reverse(),velocity:-c})),m.calculatedDuration===null&&(m.calculatedDuration=Iu(m));const{calculatedDuration:g}=m;this.calculatedDuration=g,this.resolvedDuration=g+a,this.totalDuration=this.resolvedDuration*(o+1)-a,this.generator=m}updateTime(r){const i=Math.round(r-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=i}tick(r,i=!1){const{generator:o,totalDuration:a,mixKeyframes:d,mirroredGenerator:c,resolvedDuration:p,calculatedDuration:h}=this;if(this.startTime===null)return o.next(0);const{delay:m=0,keyframes:g,repeat:y,repeatType:x,repeatDelay:S,type:j,onUpdate:k,finalKeyframe:P}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,r):this.speed<0&&(this.startTime=Math.min(r-a/this.speed,this.startTime)),i?this.currentTime=r:this.updateTime(r);const A=this.currentTime-m*(this.playbackSpeed>=0?1:-1),R=this.playbackSpeed>=0?A<0:A>a;this.currentTime=Math.max(A,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=a);let N=this.currentTime,I=o;if(y){const X=Math.min(this.currentTime,a)/p;let $=Math.floor(X),ne=X%1;!ne&&X>=1&&(ne=1),ne===1&&$--,$=Math.min($,y+1),!!($%2)&&(x==="reverse"?(ne=1-ne,S&&(ne-=S/p)):x==="mirror"&&(I=c)),N=sn(0,1,ne)*p}const z=R?{done:!1,value:g[0]}:I.next(N);d&&(z.value=d(z.value));let{done:Q}=z;!R&&h!==null&&(Q=this.playbackSpeed>=0?this.currentTime>=a:this.currentTime<=0);const q=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&Q);return q&&j!==nu&&(z.value=Vu(g,this.options,P,this.speed)),k&&k(z.value),q&&this.finish(),z}then(r,i){return this.finished.then(r,i)}get duration(){return Vt(this.calculatedDuration)}get iterationDuration(){const{delay:r=0}=this.options||{};return this.duration+Vt(r)}get time(){return Vt(this.currentTime)}set time(r){var i;r=zt(r),this.currentTime=r,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=r:this.driver&&(this.startTime=this.driver.now()-r/this.playbackSpeed),(i=this.driver)==null||i.start(!1)}get speed(){return this.playbackSpeed}set speed(r){this.updateTime(gt.now());const i=this.playbackSpeed!==r;this.playbackSpeed=r,i&&(this.time=Vt(this.currentTime))}play(){var a,d;if(this.isStopped)return;const{driver:r=hy,startTime:i}=this.options;this.driver||(this.driver=r(c=>this.tick(c))),(d=(a=this.options).onPlay)==null||d.call(a);const o=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=o):this.holdTime!==null?this.startTime=o-this.holdTime:this.startTime||(this.startTime=i??o),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(gt.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var r,i;this.notifyFinished(),this.teardown(),this.state="finished",(i=(r=this.options).onComplete)==null||i.call(r)}cancel(){var r,i;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(i=(r=this.options).onCancel)==null||i.call(r)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(r){return this.startTime=0,this.tick(r,!0)}attachTimeline(r){var i;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(i=this.driver)==null||i.stop(),r.observe(this)}}function Ey(n){for(let r=1;r<n.length;r++)n[r]??(n[r]=n[r-1])}const lr=n=>n*180/Math.PI,ru=n=>{const r=lr(Math.atan2(n[1],n[0]));return su(r)},jy={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:n=>(Math.abs(n[0])+Math.abs(n[3]))/2,rotate:ru,rotateZ:ru,skewX:n=>lr(Math.atan(n[1])),skewY:n=>lr(Math.atan(n[2])),skew:n=>(Math.abs(n[1])+Math.abs(n[2]))/2},su=n=>(n=n%360,n<0&&(n+=360),n),ip=ru,op=n=>Math.sqrt(n[0]*n[0]+n[1]*n[1]),lp=n=>Math.sqrt(n[4]*n[4]+n[5]*n[5]),My={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:op,scaleY:lp,scale:n=>(op(n)+lp(n))/2,rotateX:n=>su(lr(Math.atan2(n[6],n[5]))),rotateY:n=>su(lr(Math.atan2(-n[2],n[0]))),rotateZ:ip,rotate:ip,skewX:n=>lr(Math.atan(n[4])),skewY:n=>lr(Math.atan(n[1])),skew:n=>(Math.abs(n[1])+Math.abs(n[4]))/2};function iu(n){return n.includes("scale")?1:0}function ou(n,r){if(!n||n==="none")return iu(r);const i=n.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let o,a;if(i)o=My,a=i;else{const p=n.match(/^matrix\(([-\d.e\s,]+)\)$/u);o=jy,a=p}if(!a)return iu(r);const d=o[r],c=a[1].split(",").map(Ay);return typeof d=="function"?d(c):c[d]}const Dy=(n,r)=>{const{transform:i="none"}=getComputedStyle(n);return ou(i,r)};function Ay(n){return parseFloat(n.trim())}const Qr=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Kr=new Set(Qr),ap=n=>n===Xr||n===J,Ly=new Set(["x","y","z"]),Ry=Qr.filter(n=>!Ly.has(n));function Ny(n){const r=[];return Ry.forEach(i=>{const o=n.getValue(i);o!==void 0&&(r.push([i,o.get()]),o.set(i.startsWith("scale")?1:0))}),r}const On={width:({x:n},{paddingLeft:r="0",paddingRight:i="0"})=>n.max-n.min-parseFloat(r)-parseFloat(i),height:({y:n},{paddingTop:r="0",paddingBottom:i="0"})=>n.max-n.min-parseFloat(r)-parseFloat(i),top:(n,{top:r})=>parseFloat(r),left:(n,{left:r})=>parseFloat(r),bottom:({y:n},{top:r})=>parseFloat(r)+(n.max-n.min),right:({x:n},{left:r})=>parseFloat(r)+(n.max-n.min),x:(n,{transform:r})=>ou(r,"x"),y:(n,{transform:r})=>ou(r,"y")};On.translateX=On.x;On.translateY=On.y;const ar=new Set;let lu=!1,au=!1,uu=!1;function lm(){if(au){const n=Array.from(ar).filter(o=>o.needsMeasurement),r=new Set(n.map(o=>o.element)),i=new Map;r.forEach(o=>{const a=Ny(o);a.length&&(i.set(o,a),o.render())}),n.forEach(o=>o.measureInitialState()),r.forEach(o=>{o.render();const a=i.get(o);a&&a.forEach(([d,c])=>{var p;(p=o.getValue(d))==null||p.set(c)})}),n.forEach(o=>o.measureEndState()),n.forEach(o=>{o.suspendedScrollY!==void 0&&window.scrollTo(0,o.suspendedScrollY)})}au=!1,lu=!1,ar.forEach(n=>n.complete(uu)),ar.clear()}function am(){ar.forEach(n=>{n.readKeyframes(),n.needsMeasurement&&(au=!0)})}function Iy(){uu=!0,am(),lm(),uu=!1}class Fu{constructor(r,i,o,a,d,c=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...r],this.onComplete=i,this.name=o,this.motionValue=a,this.element=d,this.isAsync=c}scheduleResolve(){this.state="scheduled",this.isAsync?(ar.add(this),lu||(lu=!0,Ee.read(am),Ee.resolveKeyframes(lm))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:r,name:i,element:o,motionValue:a}=this;if(r[0]===null){const d=a==null?void 0:a.get(),c=r[r.length-1];if(d!==void 0)r[0]=d;else if(o&&i){const p=o.readValue(i,c);p!=null&&(r[0]=p)}r[0]===void 0&&(r[0]=c),a&&d===void 0&&a.set(r[0])}Ey(r)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(r=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,r),ar.delete(this)}cancel(){this.state==="scheduled"&&(ar.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const Vy=n=>n.startsWith("--");function Oy(n,r,i){Vy(r)?n.style.setProperty(r,i):n.style[r]=i}const zy={};function um(n,r){const i=Mh(n);return()=>zy[r]??i()}const Fy=um(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),cm=um(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Is=([n,r,i,o])=>`cubic-bezier(${n}, ${r}, ${i}, ${o})`,up={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Is([0,.65,.55,1]),circOut:Is([.55,0,1,.45]),backIn:Is([.31,.01,.66,-.59]),backOut:Is([.33,1.53,.69,.99])};function dm(n,r){if(n)return typeof n=="function"?cm()?em(n,r):"ease-out":Wh(n)?Is(n):Array.isArray(n)?n.map(i=>dm(i,r)||up.easeOut):up[n]}function By(n,r,i,{delay:o=0,duration:a=300,repeat:d=0,repeatType:c="loop",ease:p="easeOut",times:h}={},m=void 0){const g={[r]:i};h&&(g.offset=h);const y=dm(p,a);Array.isArray(y)&&(g.easing=y);const x={delay:o,duration:a,easing:Array.isArray(y)?"linear":y,fill:"both",iterations:d+1,direction:c==="reverse"?"alternate":"normal"};return m&&(x.pseudoElement=m),n.animate(g,x)}function Bu(n){return typeof n=="function"&&"applyToOptions"in n}function Uy({type:n,...r}){return Bu(n)&&cm()?n.applyToOptions(r):(r.duration??(r.duration=300),r.ease??(r.ease="easeOut"),r)}class fm extends Ou{constructor(r){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!r)return;const{element:i,name:o,keyframes:a,pseudoElement:d,allowFlatten:c=!1,finalKeyframe:p,onComplete:h}=r;this.isPseudoElement=!!d,this.allowFlatten=c,this.options=r,Eu(typeof r.type!="string");const m=Uy(r);this.animation=By(i,o,a,m,d),m.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!d){const g=Vu(a,this.options,p,this.speed);this.updateMotionValue&&this.updateMotionValue(g),Oy(i,o,g),this.animation.cancel()}h==null||h(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var r,i;(i=(r=this.animation).finish)==null||i.call(r)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:r}=this;r==="idle"||r==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var i,o,a;const r=(i=this.options)==null?void 0:i.element;!this.isPseudoElement&&(r!=null&&r.isConnected)&&((a=(o=this.animation).commitStyles)==null||a.call(o))}get duration(){var i,o;const r=((o=(i=this.animation.effect)==null?void 0:i.getComputedTiming)==null?void 0:o.call(i).duration)||0;return Vt(Number(r))}get iterationDuration(){const{delay:r=0}=this.options||{};return this.duration+Vt(r)}get time(){return Vt(Number(this.animation.currentTime)||0)}set time(r){this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=zt(r)}get speed(){return this.animation.playbackRate}set speed(r){r<0&&(this.finishedTime=null),this.animation.playbackRate=r}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(r){this.manualStartTime=this.animation.startTime=r}attachTimeline({timeline:r,rangeStart:i,rangeEnd:o,observe:a}){var d;return this.allowFlatten&&((d=this.animation.effect)==null||d.updateTiming({easing:"linear"})),this.animation.onfinish=null,r&&Fy()?(this.animation.timeline=r,i&&(this.animation.rangeStart=i),o&&(this.animation.rangeEnd=o),Ot):a(this)}}const pm={anticipate:Vh,backInOut:Ih,circInOut:zh};function Wy(n){return n in pm}function Yy(n){typeof n.ease=="string"&&Wy(n.ease)&&(n.ease=pm[n.ease])}const Va=10;class Hy extends fm{constructor(r){Yy(r),om(r),super(r),r.startTime!==void 0&&(this.startTime=r.startTime),this.options=r}updateMotionValue(r){const{motionValue:i,onUpdate:o,onComplete:a,element:d,...c}=this.options;if(!i)return;if(r!==void 0){i.set(r);return}const p=new zu({...c,autoplay:!1}),h=Math.max(Va,gt.now()-this.startTime),m=sn(0,Va,h-Va);i.setWithVelocity(p.sample(Math.max(0,h-m)).value,p.sample(h).value,m),p.stop()}}const cp=(n,r)=>r==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&(Gt.test(n)||n==="0")&&!n.startsWith("url("));function $y(n){const r=n[0];if(n.length===1)return!0;for(let i=0;i<n.length;i++)if(n[i]!==r)return!0}function Xy(n,r,i,o){const a=n[0];if(a===null)return!1;if(r==="display"||r==="visibility")return!0;const d=n[n.length-1],c=cp(a,r),p=cp(d,r);return!c||!p?!1:$y(n)||(i==="spring"||Bu(i))&&o}function cu(n){n.duration=0,n.type="keyframes"}const Qy=new Set(["opacity","clipPath","filter","transform"]),Ky=Mh(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function Gy(n){var g;const{motionValue:r,name:i,repeatDelay:o,repeatType:a,damping:d,type:c}=n;if(!(((g=r==null?void 0:r.owner)==null?void 0:g.current)instanceof HTMLElement))return!1;const{onUpdate:h,transformTemplate:m}=r.owner.getProps();return Ky()&&i&&Qy.has(i)&&(i!=="transform"||!m)&&!h&&!o&&a!=="mirror"&&d!==0&&c!=="inertia"}const Zy=40;class Jy extends Ou{constructor({autoplay:r=!0,delay:i=0,type:o="keyframes",repeat:a=0,repeatDelay:d=0,repeatType:c="loop",keyframes:p,name:h,motionValue:m,element:g,...y}){var j;super(),this.stop=()=>{var k,P;this._animation&&(this._animation.stop(),(k=this.stopTimeline)==null||k.call(this)),(P=this.keyframeResolver)==null||P.cancel()},this.createdAt=gt.now();const x={autoplay:r,delay:i,type:o,repeat:a,repeatDelay:d,repeatType:c,name:h,motionValue:m,element:g,...y},S=(g==null?void 0:g.KeyframeResolver)||Fu;this.keyframeResolver=new S(p,(k,P,A)=>this.onKeyframesResolved(k,P,x,!A),h,m,g),(j=this.keyframeResolver)==null||j.scheduleResolve()}onKeyframesResolved(r,i,o,a){var P,A;this.keyframeResolver=void 0;const{name:d,type:c,velocity:p,delay:h,isHandoff:m,onUpdate:g}=o;this.resolvedAt=gt.now(),Xy(r,d,c,p)||((hn.instantAnimations||!h)&&(g==null||g(Vu(r,o,i))),r[0]=r[r.length-1],cu(o),o.repeat=0);const x={startTime:a?this.resolvedAt?this.resolvedAt-this.createdAt>Zy?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:i,...o,keyframes:r},S=!m&&Gy(x),j=(A=(P=x.motionValue)==null?void 0:P.owner)==null?void 0:A.current,k=S?new Hy({...x,element:j}):new zu(x);k.finished.then(()=>{this.notifyFinished()}).catch(Ot),this.pendingTimeline&&(this.stopTimeline=k.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=k}get finished(){return this._animation?this.animation.finished:this._finished}then(r,i){return this.finished.finally(r).then(()=>{})}get animation(){var r;return this._animation||((r=this.keyframeResolver)==null||r.resume(),Iy()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(r){this.animation.time=r}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(r){this.animation.speed=r}get startTime(){return this.animation.startTime}attachTimeline(r){return this._animation?this.stopTimeline=this.animation.attachTimeline(r):this.pendingTimeline=r,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var r;this._animation&&this.animation.cancel(),(r=this.keyframeResolver)==null||r.cancel()}}class qy{constructor(r){this.stop=()=>this.runAll("stop"),this.animations=r.filter(Boolean)}get finished(){return Promise.all(this.animations.map(r=>r.finished))}getAll(r){return this.animations[0][r]}setAll(r,i){for(let o=0;o<this.animations.length;o++)this.animations[o][r]=i}attachTimeline(r){const i=this.animations.map(o=>o.attachTimeline(r));return()=>{i.forEach((o,a)=>{o&&o(),this.animations[a].stop()})}}get time(){return this.getAll("time")}set time(r){this.setAll("time",r)}get speed(){return this.getAll("speed")}set speed(r){this.setAll("speed",r)}get state(){return this.getAll("state")}get startTime(){return this.getAll("startTime")}get duration(){return dp(this.animations,"duration")}get iterationDuration(){return dp(this.animations,"iterationDuration")}runAll(r){this.animations.forEach(i=>i[r]())}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}function dp(n,r){let i=0;for(let o=0;o<n.length;o++){const a=n[o][r];a!==null&&a>i&&(i=a)}return i}class e1 extends qy{then(r,i){return this.finished.finally(r).then(()=>{})}}function hm(n,r,i,o=0,a=1){const d=Array.from(n).sort((m,g)=>m.sortNodePosition(g)).indexOf(r),c=n.size,p=(c-1)*o;return typeof i=="function"?i(d,c):a===1?d*o:p-d*o}const t1=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function n1(n){const r=t1.exec(n);if(!r)return[,];const[,i,o,a]=r;return[`--${i??o}`,a]}function mm(n,r,i=1){const[o,a]=n1(n);if(!o)return;const d=window.getComputedStyle(r).getPropertyValue(o);if(d){const c=d.trim();return Th(c)?parseFloat(c):c}return Au(a)?mm(a,r,i+1):a}const r1={type:"spring",stiffness:500,damping:25,restSpeed:10},s1=n=>({type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restSpeed:10}),i1={type:"keyframes",duration:.8},o1={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},l1=(n,{keyframes:r})=>r.length>2?i1:Kr.has(n)?n.startsWith("scale")?s1(r[1]):r1:o1,a1=n=>n!==null;function u1(n,{repeat:r,repeatType:i="loop"},o){const a=n.filter(a1),d=r&&i!=="loop"&&r%2===1?0:a.length-1;return a[d]}function _m(n,r){if(n!=null&&n.inherit&&r){const{inherit:i,...o}=n;return{...r,...o}}return n}function Uu(n,r){const i=(n==null?void 0:n[r])??(n==null?void 0:n.default)??n;return i!==n?_m(i,n):i}function c1({when:n,delay:r,delayChildren:i,staggerChildren:o,staggerDirection:a,repeat:d,repeatType:c,repeatDelay:p,from:h,elapsed:m,...g}){return!!Object.keys(g).length}const Wu=(n,r,i,o={},a,d)=>c=>{const p=Uu(o,n)||{},h=p.delay||o.delay||0;let{elapsed:m=0}=o;m=m-zt(h);const g={keyframes:Array.isArray(i)?i:[null,i],ease:"easeOut",velocity:r.getVelocity(),...p,delay:-m,onUpdate:x=>{r.set(x),p.onUpdate&&p.onUpdate(x)},onComplete:()=>{c(),p.onComplete&&p.onComplete()},name:n,motionValue:r,element:d?void 0:a};c1(p)||Object.assign(g,l1(n,g)),g.duration&&(g.duration=zt(g.duration)),g.repeatDelay&&(g.repeatDelay=zt(g.repeatDelay)),g.from!==void 0&&(g.keyframes[0]=g.from);let y=!1;if((g.type===!1||g.duration===0&&!g.repeatDelay)&&(cu(g),g.delay===0&&(y=!0)),(hn.instantAnimations||hn.skipAnimations||a!=null&&a.shouldSkipAnimations)&&(y=!0,cu(g),g.delay=0),g.allowFlatten=!p.type&&!p.ease,y&&!d&&r.get()!==void 0){const x=u1(g.keyframes,p);if(x!==void 0){Ee.update(()=>{g.onUpdate(x),g.onComplete()});return}}return p.isSync?new zu(g):new Jy(g)};function fp(n){const r=[{},{}];return n==null||n.values.forEach((i,o)=>{r[0][o]=i.get(),r[1][o]=i.getVelocity()}),r}function Yu(n,r,i,o){if(typeof r=="function"){const[a,d]=fp(o);r=r(i!==void 0?i:n.custom,a,d)}if(typeof r=="string"&&(r=n.variants&&n.variants[r]),typeof r=="function"){const[a,d]=fp(o);r=r(i!==void 0?i:n.custom,a,d)}return r}function Yr(n,r,i){const o=n.getProps();return Yu(o,r,i!==void 0?i:o.custom,n)}const gm=new Set(["width","height","top","left","right","bottom",...Qr]),pp=30,d1=n=>!isNaN(parseFloat(n)),Fs={current:void 0};class f1{constructor(r,i={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=o=>{var d;const a=gt.now();if(this.updatedAt!==a&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(o),this.current!==this.prev&&((d=this.events.change)==null||d.notify(this.current),this.dependents))for(const c of this.dependents)c.dirty()},this.hasAnimated=!1,this.setCurrent(r),this.owner=i.owner}setCurrent(r){this.current=r,this.updatedAt=gt.now(),this.canTrackVelocity===null&&r!==void 0&&(this.canTrackVelocity=d1(this.current))}setPrevFrameValue(r=this.current){this.prevFrameValue=r,this.prevUpdatedAt=this.updatedAt}onChange(r){return this.on("change",r)}on(r,i){this.events[r]||(this.events[r]=new ju);const o=this.events[r].add(i);return r==="change"?()=>{o(),Ee.read(()=>{this.events.change.getSize()||this.stop()})}:o}clearListeners(){for(const r in this.events)this.events[r].clear()}attach(r,i){this.passiveEffect=r,this.stopPassiveEffect=i}set(r){this.passiveEffect?this.passiveEffect(r,this.updateAndNotify):this.updateAndNotify(r)}setWithVelocity(r,i,o){this.set(i),this.prev=void 0,this.prevFrameValue=r,this.prevUpdatedAt=this.updatedAt-o}jump(r,i=!0){this.updateAndNotify(r),this.prev=r,this.prevUpdatedAt=this.prevFrameValue=void 0,i&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var r;(r=this.events.change)==null||r.notify(this.current)}addDependent(r){this.dependents||(this.dependents=new Set),this.dependents.add(r)}removeDependent(r){this.dependents&&this.dependents.delete(r)}get(){return Fs.current&&Fs.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const r=gt.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||r-this.updatedAt>pp)return 0;const i=Math.min(this.updatedAt-this.prevUpdatedAt,pp);return Dh(parseFloat(this.current)-parseFloat(this.prevFrameValue),i)}start(r){return this.stop(),new Promise(i=>{this.hasAnimated=!0,this.animation=r(i),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var r,i;(r=this.dependents)==null||r.clear(),(i=this.events.destroy)==null||i.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Fn(n,r){return new f1(n,r)}const du=n=>Array.isArray(n);function p1(n,r,i){n.hasValue(r)?n.getValue(r).set(i):n.addValue(r,Fn(i))}function h1(n){return du(n)?n[n.length-1]||0:n}function m1(n,r){const i=Yr(n,r);let{transitionEnd:o={},transition:a={},...d}=i||{};d={...d,...o};for(const c in d){const p=h1(d[c]);p1(n,c,p)}}const et=n=>!!(n&&n.getVelocity);function _1(n){return!!(et(n)&&n.add)}function fu(n,r){const i=n.getValue("willChange");if(_1(i))return i.add(r);if(!i&&hn.WillChange){const o=new hn.WillChange("auto");n.addValue("willChange",o),o.add(r)}}function Hu(n){return n.replace(/([A-Z])/g,r=>`-${r.toLowerCase()}`)}const g1="framerAppearId",ym="data-"+Hu(g1);function vm(n){return n.props[ym]}function y1({protectedKeys:n,needsAnimating:r},i){const o=n.hasOwnProperty(i)&&r[i]!==!0;return r[i]=!1,o}function $u(n,r,{delay:i=0,transitionOverride:o,type:a}={}){let{transition:d,transitionEnd:c,...p}=r;const h=n.getDefaultTransition();d=d?_m(d,h):h;const m=d==null?void 0:d.reduceMotion;o&&(d=o);const g=[],y=a&&n.animationState&&n.animationState.getState()[a];for(const x in p){const S=n.getValue(x,n.latestValues[x]??null),j=p[x];if(j===void 0||y&&y1(y,x))continue;const k={delay:i,...Uu(d||{},x)},P=S.get();if(P!==void 0&&!S.isAnimating&&!Array.isArray(j)&&j===P&&!k.velocity)continue;let A=!1;if(window.MotionHandoffAnimation){const I=vm(n);if(I){const z=window.MotionHandoffAnimation(I,x,Ee);z!==null&&(k.startTime=z,A=!0)}}fu(n,x);const R=m??n.shouldReduceMotion;S.start(Wu(x,S,j,R&&gm.has(x)?{type:!1}:k,n,A));const N=S.animation;N&&g.push(N)}if(c){const x=()=>Ee.update(()=>{c&&m1(n,c)});g.length?Promise.all(g).then(x):x()}return g}function pu(n,r,i={}){var h;const o=Yr(n,r,i.type==="exit"?(h=n.presenceContext)==null?void 0:h.custom:void 0);let{transition:a=n.getDefaultTransition()||{}}=o||{};i.transitionOverride&&(a=i.transitionOverride);const d=o?()=>Promise.all($u(n,o,i)):()=>Promise.resolve(),c=n.variantChildren&&n.variantChildren.size?(m=0)=>{const{delayChildren:g=0,staggerChildren:y,staggerDirection:x}=a;return v1(n,r,m,g,y,x,i)}:()=>Promise.resolve(),{when:p}=a;if(p){const[m,g]=p==="beforeChildren"?[d,c]:[c,d];return m().then(()=>g())}else return Promise.all([d(),c(i.delay)])}function v1(n,r,i=0,o=0,a=0,d=1,c){const p=[];for(const h of n.variantChildren)h.notify("AnimationStart",r),p.push(pu(h,r,{...c,delay:i+(typeof o=="function"?0:o)+hm(n.variantChildren,h,o,a,d)}).then(()=>h.notify("AnimationComplete",r)));return Promise.all(p)}function x1(n,r,i={}){n.notify("AnimationStart",r);let o;if(Array.isArray(r)){const a=r.map(d=>pu(n,d,i));o=Promise.all(a)}else if(typeof r=="string")o=pu(n,r,i);else{const a=typeof r=="function"?Yr(n,r,i.custom):r;o=Promise.all($u(n,a,i))}return o.then(()=>{n.notify("AnimationComplete",r)})}const w1={test:n=>n==="auto",parse:n=>n},xm=n=>r=>r.test(n),wm=[Xr,J,rn,In,Jg,Zg,w1],hp=n=>wm.find(xm(n));function k1(n){return typeof n=="number"?n===0:n!==null?n==="none"||n==="0"||jh(n):!0}const S1=new Set(["brightness","contrast","saturate","opacity"]);function b1(n){const[r,i]=n.slice(0,-1).split("(");if(r==="drop-shadow")return n;const[o]=i.match(Lu)||[];if(!o)return n;const a=i.replace(o,"");let d=S1.has(r)?1:0;return o!==i&&(d*=100),r+"("+d+a+")"}const C1=/\b([a-z-]*)\(.*?\)/gu,hu={...Gt,getAnimatableNone:n=>{const r=n.match(C1);return r?r.map(b1).join(" "):n}},mu={...Gt,getAnimatableNone:n=>{const r=Gt.parse(n);return Gt.createTransformer(n)(r.map(o=>typeof o=="number"?0:typeof o=="object"?{...o,alpha:1}:o))}},mp={...Xr,transform:Math.round},P1={rotate:In,rotateX:In,rotateY:In,rotateZ:In,scale:mo,scaleX:mo,scaleY:mo,scaleZ:mo,skew:In,skewX:In,skewY:In,distance:J,translateX:J,translateY:J,translateZ:J,x:J,y:J,z:J,perspective:J,transformPerspective:J,opacity:Ys,originX:ep,originY:ep,originZ:J},Xu={borderWidth:J,borderTopWidth:J,borderRightWidth:J,borderBottomWidth:J,borderLeftWidth:J,borderRadius:J,borderTopLeftRadius:J,borderTopRightRadius:J,borderBottomRightRadius:J,borderBottomLeftRadius:J,width:J,maxWidth:J,height:J,maxHeight:J,top:J,right:J,bottom:J,left:J,inset:J,insetBlock:J,insetBlockStart:J,insetBlockEnd:J,insetInline:J,insetInlineStart:J,insetInlineEnd:J,padding:J,paddingTop:J,paddingRight:J,paddingBottom:J,paddingLeft:J,paddingBlock:J,paddingBlockStart:J,paddingBlockEnd:J,paddingInline:J,paddingInlineStart:J,paddingInlineEnd:J,margin:J,marginTop:J,marginRight:J,marginBottom:J,marginLeft:J,marginBlock:J,marginBlockStart:J,marginBlockEnd:J,marginInline:J,marginInlineStart:J,marginInlineEnd:J,fontSize:J,backgroundPositionX:J,backgroundPositionY:J,...P1,zIndex:mp,fillOpacity:Ys,strokeOpacity:Ys,numOctaves:mp},T1={...Xu,color:He,backgroundColor:He,outlineColor:He,fill:He,stroke:He,borderColor:He,borderTopColor:He,borderRightColor:He,borderBottomColor:He,borderLeftColor:He,filter:hu,WebkitFilter:hu,mask:mu,WebkitMask:mu},km=n=>T1[n],E1=new Set([hu,mu]);function Sm(n,r){let i=km(n);return E1.has(i)||(i=Gt),i.getAnimatableNone?i.getAnimatableNone(r):void 0}const j1=new Set(["auto","none","0"]);function M1(n,r,i){let o=0,a;for(;o<n.length&&!a;){const d=n[o];typeof d=="string"&&!j1.has(d)&&Hs(d).values.length&&(a=n[o]),o++}if(a&&i)for(const d of r)n[d]=Sm(i,a)}class D1 extends Fu{constructor(r,i,o,a,d){super(r,i,o,a,d,!0)}readKeyframes(){const{unresolvedKeyframes:r,element:i,name:o}=this;if(!i||!i.current)return;super.readKeyframes();for(let g=0;g<r.length;g++){let y=r[g];if(typeof y=="string"&&(y=y.trim(),Au(y))){const x=mm(y,i.current);x!==void 0&&(r[g]=x),g===r.length-1&&(this.finalKeyframe=y)}}if(this.resolveNoneKeyframes(),!gm.has(o)||r.length!==2)return;const[a,d]=r,c=hp(a),p=hp(d),h=qf(a),m=qf(d);if(h!==m&&On[o]){this.needsMeasurement=!0;return}if(c!==p)if(ap(c)&&ap(p))for(let g=0;g<r.length;g++){const y=r[g];typeof y=="string"&&(r[g]=parseFloat(y))}else On[o]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:r,name:i}=this,o=[];for(let a=0;a<r.length;a++)(r[a]===null||k1(r[a]))&&o.push(a);o.length&&M1(r,o,i)}measureInitialState(){const{element:r,unresolvedKeyframes:i,name:o}=this;if(!r||!r.current)return;o==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=On[o](r.measureViewportBox(),window.getComputedStyle(r.current)),i[0]=this.measuredOrigin;const a=i[i.length-1];a!==void 0&&r.getValue(o,a).jump(a,!1)}measureEndState(){var p;const{element:r,name:i,unresolvedKeyframes:o}=this;if(!r||!r.current)return;const a=r.getValue(i);a&&a.jump(this.measuredOrigin,!1);const d=o.length-1,c=o[d];o[d]=On[i](r.measureViewportBox(),window.getComputedStyle(r.current)),c!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=c),(p=this.removedTransforms)!=null&&p.length&&this.removedTransforms.forEach(([h,m])=>{r.getValue(h).set(m)}),this.resolveNoneKeyframes()}}const A1=new Set(["opacity","clipPath","filter","transform"]);function Qu(n,r,i){if(n==null)return[];if(n instanceof EventTarget)return[n];if(typeof n=="string"){let o=document;r&&(o=r.current);const a=(i==null?void 0:i[n])??o.querySelectorAll(n);return a?Array.from(a):[]}return Array.from(n).filter(o=>o!=null)}const bm=(n,r)=>r&&typeof n=="number"?r.transform(n):n;function _u(n){return Eh(n)&&"offsetHeight"in n}const{schedule:Ku}=Yh(queueMicrotask,!1),Kt={x:!1,y:!1};function Cm(){return Kt.x||Kt.y}function L1(n){return n==="x"||n==="y"?Kt[n]?null:(Kt[n]=!0,()=>{Kt[n]=!1}):Kt.x||Kt.y?null:(Kt.x=Kt.y=!0,()=>{Kt.x=Kt.y=!1})}function Pm(n,r){const i=Qu(n),o=new AbortController,a={passive:!0,...r,signal:o.signal};return[i,a,()=>o.abort()]}function R1(n){return!(n.pointerType==="touch"||Cm())}function N1(n,r,i={}){const[o,a,d]=Pm(n,i);return o.forEach(c=>{let p=!1,h=!1,m;const g=()=>{c.removeEventListener("pointerleave",j)},y=P=>{m&&(m(P),m=void 0),g()},x=P=>{p=!1,window.removeEventListener("pointerup",x),window.removeEventListener("pointercancel",x),h&&(h=!1,y(P))},S=()=>{p=!0,window.addEventListener("pointerup",x,a),window.addEventListener("pointercancel",x,a)},j=P=>{if(P.pointerType!=="touch"){if(p){h=!0;return}y(P)}},k=P=>{if(!R1(P))return;h=!1;const A=r(c,P);typeof A=="function"&&(m=A,c.addEventListener("pointerleave",j,a))};c.addEventListener("pointerenter",k,a),c.addEventListener("pointerdown",S,a)}),d}const Tm=(n,r)=>r?n===r?!0:Tm(n,r.parentElement):!1,Gu=n=>n.pointerType==="mouse"?typeof n.button!="number"||n.button<=0:n.isPrimary!==!1,I1=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function V1(n){return I1.has(n.tagName)||n.isContentEditable===!0}const O1=new Set(["INPUT","SELECT","TEXTAREA"]);function z1(n){return O1.has(n.tagName)||n.isContentEditable===!0}const xo=new WeakSet;function _p(n){return r=>{r.key==="Enter"&&n(r)}}function Oa(n,r){n.dispatchEvent(new PointerEvent("pointer"+r,{isPrimary:!0,bubbles:!0}))}const F1=(n,r)=>{const i=n.currentTarget;if(!i)return;const o=_p(()=>{if(xo.has(i))return;Oa(i,"down");const a=_p(()=>{Oa(i,"up")}),d=()=>Oa(i,"cancel");i.addEventListener("keyup",a,r),i.addEventListener("blur",d,r)});i.addEventListener("keydown",o,r),i.addEventListener("blur",()=>i.removeEventListener("keydown",o),r)};function gp(n){return Gu(n)&&!Cm()}const yp=new WeakSet;function B1(n,r,i={}){const[o,a,d]=Pm(n,i),c=p=>{const h=p.currentTarget;if(!gp(p)||yp.has(p))return;xo.add(h),i.stopPropagation&&yp.add(p);const m=r(h,p),g=(S,j)=>{window.removeEventListener("pointerup",y),window.removeEventListener("pointercancel",x),xo.has(h)&&xo.delete(h),gp(S)&&typeof m=="function"&&m(S,{success:j})},y=S=>{g(S,h===window||h===document||i.useGlobalTarget||Tm(h,S.target))},x=S=>{g(S,!1)};window.addEventListener("pointerup",y,a),window.addEventListener("pointercancel",x,a)};return o.forEach(p=>{(i.useGlobalTarget?window:p).addEventListener("pointerdown",c,a),_u(p)&&(p.addEventListener("focus",m=>F1(m,a)),!V1(p)&&!p.hasAttribute("tabindex")&&(p.tabIndex=0))}),d}function Ro(n){return Eh(n)&&"ownerSVGElement"in n}const wo=new WeakMap;let Vn;const Em=(n,r,i)=>(o,a)=>a&&a[0]?a[0][n+"Size"]:Ro(o)&&"getBBox"in o?o.getBBox()[r]:o[i],U1=Em("inline","width","offsetWidth"),W1=Em("block","height","offsetHeight");function Y1({target:n,borderBoxSize:r}){var i;(i=wo.get(n))==null||i.forEach(o=>{o(n,{get width(){return U1(n,r)},get height(){return W1(n,r)}})})}function H1(n){n.forEach(Y1)}function $1(){typeof ResizeObserver>"u"||(Vn=new ResizeObserver(H1))}function X1(n,r){Vn||$1();const i=Qu(n);return i.forEach(o=>{let a=wo.get(o);a||(a=new Set,wo.set(o,a)),a.add(r),Vn==null||Vn.observe(o)}),()=>{i.forEach(o=>{const a=wo.get(o);a==null||a.delete(r),a!=null&&a.size||Vn==null||Vn.unobserve(o)})}}const ko=new Set;let Fr;function Q1(){Fr=()=>{const n={get width(){return window.innerWidth},get height(){return window.innerHeight}};ko.forEach(r=>r(n))},window.addEventListener("resize",Fr)}function K1(n){return ko.add(n),Fr||Q1(),()=>{ko.delete(n),!ko.size&&typeof Fr=="function"&&(window.removeEventListener("resize",Fr),Fr=void 0)}}function vp(n,r){return typeof n=="function"?K1(n):X1(n,r)}function jm(n){return Ro(n)&&n.tagName==="svg"}function G1(...n){const r=!Array.isArray(n[0]),i=r?0:-1,o=n[0+i],a=n[1+i],d=n[2+i],c=n[3+i],p=rm(a,d,c);return r?p(o):p}const Z1=[...wm,He,Gt],J1=n=>Z1.find(xm(n)),xp=()=>({translate:0,scale:1,origin:0,originPoint:0}),Br=()=>({x:xp(),y:xp()}),wp=()=>({min:0,max:0}),Ye=()=>({x:wp(),y:wp()}),Xs=new WeakMap;function No(n){return n!==null&&typeof n=="object"&&typeof n.start=="function"}function Qs(n){return typeof n=="string"||Array.isArray(n)}const Zu=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Ju=["initial",...Zu];function Io(n){return No(n.animate)||Ju.some(r=>Qs(n[r]))}function Mm(n){return!!(Io(n)||n.variants)}function q1(n,r,i){for(const o in r){const a=r[o],d=i[o];if(et(a))n.addValue(o,a);else if(et(d))n.addValue(o,Fn(a,{owner:n}));else if(d!==a)if(n.hasValue(o)){const c=n.getValue(o);c.liveStyle===!0?c.jump(a):c.hasAnimated||c.set(a)}else{const c=n.getStaticValue(o);n.addValue(o,Fn(c!==void 0?c:a,{owner:n}))}}for(const o in i)r[o]===void 0&&n.removeValue(o);return r}const gu={current:null},Dm={current:!1},ev=typeof window<"u";function tv(){if(Dm.current=!0,!!ev)if(window.matchMedia){const n=window.matchMedia("(prefers-reduced-motion)"),r=()=>gu.current=n.matches;n.addEventListener("change",r),r()}else gu.current=!1}const kp=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let To={};function Am(n){To=n}function nv(){return To}class Lm{scrapeMotionValuesFromProps(r,i,o){return{}}constructor({parent:r,props:i,presenceContext:o,reducedMotionConfig:a,skipAnimations:d,blockInitialAnimation:c,visualState:p},h={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=Fu,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const S=gt.now();this.renderScheduledAt<S&&(this.renderScheduledAt=S,Ee.render(this.render,!1,!0))};const{latestValues:m,renderState:g}=p;this.latestValues=m,this.baseTarget={...m},this.initialValues=i.initial?{...m}:{},this.renderState=g,this.parent=r,this.props=i,this.presenceContext=o,this.depth=r?r.depth+1:0,this.reducedMotionConfig=a,this.skipAnimationsConfig=d,this.options=h,this.blockInitialAnimation=!!c,this.isControllingVariants=Io(i),this.isVariantNode=Mm(i),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(r&&r.current);const{willChange:y,...x}=this.scrapeMotionValuesFromProps(i,{},this);for(const S in x){const j=x[S];m[S]!==void 0&&et(j)&&j.set(m[S])}}mount(r){var i,o;if(this.hasBeenMounted)for(const a in this.initialValues)(i=this.values.get(a))==null||i.jump(this.initialValues[a]),this.latestValues[a]=this.initialValues[a];this.current=r,Xs.set(r,this),this.projection&&!this.projection.instance&&this.projection.mount(r),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((a,d)=>this.bindToMotionValue(d,a)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(Dm.current||tv(),this.shouldReduceMotion=gu.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,(o=this.parent)==null||o.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){var r;this.projection&&this.projection.unmount(),mn(this.notifyUpdate),mn(this.render),this.valueSubscriptions.forEach(i=>i()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(r=this.parent)==null||r.removeChild(this);for(const i in this.events)this.events[i].clear();for(const i in this.features){const o=this.features[i];o&&(o.unmount(),o.isMounted=!1)}this.current=null}addChild(r){this.children.add(r),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(r)}removeChild(r){this.children.delete(r),this.enteringChildren&&this.enteringChildren.delete(r)}bindToMotionValue(r,i){if(this.valueSubscriptions.has(r)&&this.valueSubscriptions.get(r)(),i.accelerate&&A1.has(r)&&this.current instanceof HTMLElement){const{factory:c,keyframes:p,times:h,ease:m,duration:g}=i.accelerate,y=new fm({element:this.current,name:r,keyframes:p,times:h,ease:m,duration:zt(g)}),x=c(y);this.valueSubscriptions.set(r,()=>{x(),y.cancel()});return}const o=Kr.has(r);o&&this.onBindTransform&&this.onBindTransform();const a=i.on("change",c=>{this.latestValues[r]=c,this.props.onUpdate&&Ee.preRender(this.notifyUpdate),o&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let d;typeof window<"u"&&window.MotionCheckAppearSync&&(d=window.MotionCheckAppearSync(this,r,i)),this.valueSubscriptions.set(r,()=>{a(),d&&d(),i.owner&&i.stop()})}sortNodePosition(r){return!this.current||!this.sortInstanceNodePosition||this.type!==r.type?0:this.sortInstanceNodePosition(this.current,r.current)}updateFeatures(){let r="animation";for(r in To){const i=To[r];if(!i)continue;const{isEnabled:o,Feature:a}=i;if(!this.features[r]&&a&&o(this.props)&&(this.features[r]=new a(this)),this.features[r]){const d=this.features[r];d.isMounted?d.update():(d.mount(),d.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Ye()}getStaticValue(r){return this.latestValues[r]}setStaticValue(r,i){this.latestValues[r]=i}update(r,i){(r.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=r,this.prevPresenceContext=this.presenceContext,this.presenceContext=i;for(let o=0;o<kp.length;o++){const a=kp[o];this.propEventSubscriptions[a]&&(this.propEventSubscriptions[a](),delete this.propEventSubscriptions[a]);const d="on"+a,c=r[d];c&&(this.propEventSubscriptions[a]=this.on(a,c))}this.prevMotionValues=q1(this,this.scrapeMotionValuesFromProps(r,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(r){return this.props.variants?this.props.variants[r]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(r){const i=this.getClosestVariantNode();if(i)return i.variantChildren&&i.variantChildren.add(r),()=>i.variantChildren.delete(r)}addValue(r,i){const o=this.values.get(r);i!==o&&(o&&this.removeValue(r),this.bindToMotionValue(r,i),this.values.set(r,i),this.latestValues[r]=i.get())}removeValue(r){this.values.delete(r);const i=this.valueSubscriptions.get(r);i&&(i(),this.valueSubscriptions.delete(r)),delete this.latestValues[r],this.removeValueFromRenderState(r,this.renderState)}hasValue(r){return this.values.has(r)}getValue(r,i){if(this.props.values&&this.props.values[r])return this.props.values[r];let o=this.values.get(r);return o===void 0&&i!==void 0&&(o=Fn(i===null?void 0:i,{owner:this}),this.addValue(r,o)),o}readValue(r,i){let o=this.latestValues[r]!==void 0||!this.current?this.latestValues[r]:this.getBaseTargetFromProps(this.props,r)??this.readValueFromInstance(this.current,r,this.options);return o!=null&&(typeof o=="string"&&(Th(o)||jh(o))?o=parseFloat(o):!J1(o)&&Gt.test(i)&&(o=Sm(r,i)),this.setBaseTarget(r,et(o)?o.get():o)),et(o)?o.get():o}setBaseTarget(r,i){this.baseTarget[r]=i}getBaseTarget(r){var d;const{initial:i}=this.props;let o;if(typeof i=="string"||typeof i=="object"){const c=Yu(this.props,i,(d=this.presenceContext)==null?void 0:d.custom);c&&(o=c[r])}if(i&&o!==void 0)return o;const a=this.getBaseTargetFromProps(this.props,r);return a!==void 0&&!et(a)?a:this.initialValues[r]!==void 0&&o===void 0?void 0:this.baseTarget[r]}on(r,i){return this.events[r]||(this.events[r]=new ju),this.events[r].add(i)}notify(r,...i){this.events[r]&&this.events[r].notify(...i)}scheduleRenderMicrotask(){Ku.render(this.render)}}class Rm extends Lm{constructor(){super(...arguments),this.KeyframeResolver=D1}sortInstanceNodePosition(r,i){return r.compareDocumentPosition(i)&2?1:-1}getBaseTargetFromProps(r,i){const o=r.style;return o?o[i]:void 0}removeValueFromRenderState(r,{vars:i,style:o}){delete i[r],delete o[r]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:r}=this.props;et(r)&&(this.childSubscription=r.on("change",i=>{this.current&&(this.current.textContent=`${i}`)}))}}class Bn{constructor(r){this.isMounted=!1,this.node=r}update(){}}function Nm({top:n,left:r,right:i,bottom:o}){return{x:{min:r,max:i},y:{min:n,max:o}}}function rv({x:n,y:r}){return{top:r.min,right:n.max,bottom:r.max,left:n.min}}function sv(n,r){if(!r)return n;const i=r({x:n.left,y:n.top}),o=r({x:n.right,y:n.bottom});return{top:i.y,left:i.x,bottom:o.y,right:o.x}}function za(n){return n===void 0||n===1}function yu({scale:n,scaleX:r,scaleY:i}){return!za(n)||!za(r)||!za(i)}function ir(n){return yu(n)||Im(n)||n.z||n.rotate||n.rotateX||n.rotateY||n.skewX||n.skewY}function Im(n){return Sp(n.x)||Sp(n.y)}function Sp(n){return n&&n!=="0%"}function Eo(n,r,i){const o=n-i,a=r*o;return i+a}function bp(n,r,i,o,a){return a!==void 0&&(n=Eo(n,a,o)),Eo(n,i,o)+r}function vu(n,r=0,i=1,o,a){n.min=bp(n.min,r,i,o,a),n.max=bp(n.max,r,i,o,a)}function Vm(n,{x:r,y:i}){vu(n.x,r.translate,r.scale,r.originPoint),vu(n.y,i.translate,i.scale,i.originPoint)}const Cp=.999999999999,Pp=1.0000000000001;function iv(n,r,i,o=!1){const a=i.length;if(!a)return;r.x=r.y=1;let d,c;for(let p=0;p<a;p++){d=i[p],c=d.projectionDelta;const{visualElement:h}=d.options;h&&h.props.style&&h.props.style.display==="contents"||(o&&d.options.layoutScroll&&d.scroll&&d!==d.root&&Wr(n,{x:-d.scroll.offset.x,y:-d.scroll.offset.y}),c&&(r.x*=c.x.scale,r.y*=c.y.scale,Vm(n,c)),o&&ir(d.latestValues)&&Wr(n,d.latestValues))}r.x<Pp&&r.x>Cp&&(r.x=1),r.y<Pp&&r.y>Cp&&(r.y=1)}function Ur(n,r){n.min=n.min+r,n.max=n.max+r}function Tp(n,r,i,o,a=.5){const d=Ie(n.min,n.max,a);vu(n,r,i,d,o)}function Ep(n,r){return typeof n=="string"?parseFloat(n)/100*(r.max-r.min):n}function Wr(n,r){Tp(n.x,Ep(r.x,n.x),r.scaleX,r.scale,r.originX),Tp(n.y,Ep(r.y,n.y),r.scaleY,r.scale,r.originY)}function Om(n,r){return Nm(sv(n.getBoundingClientRect(),r))}function ov(n,r,i){const o=Om(n,i),{scroll:a}=r;return a&&(Ur(o.x,a.offset.x),Ur(o.y,a.offset.y)),o}const lv={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},av=Qr.length;function uv(n,r,i){let o="",a=!0;for(let d=0;d<av;d++){const c=Qr[d],p=n[c];if(p===void 0)continue;let h=!0;if(typeof p=="number")h=p===(c.startsWith("scale")?1:0);else{const m=parseFloat(p);h=c.startsWith("scale")?m===1:m===0}if(!h||i){const m=bm(p,Xu[c]);if(!h){a=!1;const g=lv[c]||c;o+=`${g}(${m}) `}i&&(r[c]=m)}}return o=o.trim(),i?o=i(r,a?"":o):a&&(o="none"),o}function qu(n,r,i){const{style:o,vars:a,transformOrigin:d}=n;let c=!1,p=!1;for(const h in r){const m=r[h];if(Kr.has(h)){c=!0;continue}else if($h(h)){a[h]=m;continue}else{const g=bm(m,Xu[h]);h.startsWith("origin")?(p=!0,d[h]=g):o[h]=g}}if(r.transform||(c||i?o.transform=uv(r,n.transform,i):o.transform&&(o.transform="none")),p){const{originX:h="50%",originY:m="50%",originZ:g=0}=d;o.transformOrigin=`${h} ${m} ${g}`}}function zm(n,{style:r,vars:i},o,a){const d=n.style;let c;for(c in r)d[c]=r[c];a==null||a.applyProjectionStyles(d,o);for(c in i)d.setProperty(c,i[c])}function jp(n,r){return r.max===r.min?0:n/(r.max-r.min)*100}const Ns={correct:(n,r)=>{if(!r.target)return n;if(typeof n=="string")if(J.test(n))n=parseFloat(n);else return n;const i=jp(n,r.target.x),o=jp(n,r.target.y);return`${i}% ${o}%`}},cv={correct:(n,{treeScale:r,projectionDelta:i})=>{const o=n,a=Gt.parse(n);if(a.length>5)return o;const d=Gt.createTransformer(n),c=typeof a[0]!="number"?1:0,p=i.x.scale*r.x,h=i.y.scale*r.y;a[0+c]/=p,a[1+c]/=h;const m=Ie(p,h,.5);return typeof a[2+c]=="number"&&(a[2+c]/=m),typeof a[3+c]=="number"&&(a[3+c]/=m),d(a)}},xu={borderRadius:{...Ns,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Ns,borderTopRightRadius:Ns,borderBottomLeftRadius:Ns,borderBottomRightRadius:Ns,boxShadow:cv};function Fm(n,{layout:r,layoutId:i}){return Kr.has(n)||n.startsWith("origin")||(r||i!==void 0)&&(!!xu[n]||n==="opacity")}function ec(n,r,i){var c;const o=n.style,a=r==null?void 0:r.style,d={};if(!o)return d;for(const p in o)(et(o[p])||a&&et(a[p])||Fm(p,n)||((c=i==null?void 0:i.getValue(p))==null?void 0:c.liveStyle)!==void 0)&&(d[p]=o[p]);return d}function dv(n){return window.getComputedStyle(n)}class Bm extends Rm{constructor(){super(...arguments),this.type="html",this.renderInstance=zm}readValueFromInstance(r,i){var o;if(Kr.has(i))return(o=this.projection)!=null&&o.isProjecting?iu(i):Dy(r,i);{const a=dv(r),d=($h(i)?a.getPropertyValue(i):a[i])||0;return typeof d=="string"?d.trim():d}}measureInstanceViewportBox(r,{transformPagePoint:i}){return Om(r,i)}build(r,i,o){qu(r,i,o.transformTemplate)}scrapeMotionValuesFromProps(r,i,o){return ec(r,i,o)}}function fv(n,r){return n in r}class pv extends Lm{constructor(){super(...arguments),this.type="object"}readValueFromInstance(r,i){if(fv(i,r)){const o=r[i];if(typeof o=="string"||typeof o=="number")return o}}getBaseTargetFromProps(){}removeValueFromRenderState(r,i){delete i.output[r]}measureInstanceViewportBox(){return Ye()}build(r,i){Object.assign(r.output,i)}renderInstance(r,{output:i}){Object.assign(r,i)}sortInstanceNodePosition(){return 0}}const hv={offset:"stroke-dashoffset",array:"stroke-dasharray"},mv={offset:"strokeDashoffset",array:"strokeDasharray"};function _v(n,r,i=1,o=0,a=!0){n.pathLength=1;const d=a?hv:mv;n[d.offset]=`${-o}`,n[d.array]=`${r} ${i}`}const gv=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function Um(n,{attrX:r,attrY:i,attrScale:o,pathLength:a,pathSpacing:d=1,pathOffset:c=0,...p},h,m,g){if(qu(n,p,m),h){n.style.viewBox&&(n.attrs.viewBox=n.style.viewBox);return}n.attrs=n.style,n.style={};const{attrs:y,style:x}=n;y.transform&&(x.transform=y.transform,delete y.transform),(x.transform||y.transformOrigin)&&(x.transformOrigin=y.transformOrigin??"50% 50%",delete y.transformOrigin),x.transform&&(x.transformBox=(g==null?void 0:g.transformBox)??"fill-box",delete y.transformBox);for(const S of gv)y[S]!==void 0&&(x[S]=y[S],delete y[S]);r!==void 0&&(y.x=r),i!==void 0&&(y.y=i),o!==void 0&&(y.scale=o),a!==void 0&&_v(y,a,d,c,!1)}const Wm=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),Ym=n=>typeof n=="string"&&n.toLowerCase()==="svg";function yv(n,r,i,o){zm(n,r,void 0,o);for(const a in r.attrs)n.setAttribute(Wm.has(a)?a:Hu(a),r.attrs[a])}function Hm(n,r,i){const o=ec(n,r,i);for(const a in n)if(et(n[a])||et(r[a])){const d=Qr.indexOf(a)!==-1?"attr"+a.charAt(0).toUpperCase()+a.substring(1):a;o[d]=n[a]}return o}class $m extends Rm{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Ye}getBaseTargetFromProps(r,i){return r[i]}readValueFromInstance(r,i){if(Kr.has(i)){const o=km(i);return o&&o.default||0}return i=Wm.has(i)?i:Hu(i),r.getAttribute(i)}scrapeMotionValuesFromProps(r,i,o){return Hm(r,i,o)}build(r,i,o){Um(r,i,this.isSVGTag,o.transformTemplate,o.style)}renderInstance(r,i,o,a){yv(r,i,o,a)}mount(r){this.isSVGTag=Ym(r.tagName),super.mount(r)}}const vv=Ju.length;function Xm(n){if(!n)return;if(!n.isControllingVariants){const i=n.parent?Xm(n.parent)||{}:{};return n.props.initial!==void 0&&(i.initial=n.props.initial),i}const r={};for(let i=0;i<vv;i++){const o=Ju[i],a=n.props[o];(Qs(a)||a===!1)&&(r[o]=a)}return r}function Qm(n,r){if(!Array.isArray(r))return!1;const i=r.length;if(i!==n.length)return!1;for(let o=0;o<i;o++)if(r[o]!==n[o])return!1;return!0}const xv=[...Zu].reverse(),wv=Zu.length;function kv(n){return r=>Promise.all(r.map(({animation:i,options:o})=>x1(n,i,o)))}function Sv(n){let r=kv(n),i=Mp(),o=!0,a=!1;const d=m=>(g,y)=>{var S;const x=Yr(n,y,m==="exit"?(S=n.presenceContext)==null?void 0:S.custom:void 0);if(x){const{transition:j,transitionEnd:k,...P}=x;g={...g,...P,...k}}return g};function c(m){r=m(n)}function p(m){const{props:g}=n,y=Xm(n.parent)||{},x=[],S=new Set;let j={},k=1/0;for(let A=0;A<wv;A++){const R=xv[A],N=i[R],I=g[R]!==void 0?g[R]:y[R],z=Qs(I),Q=R===m?N.isActive:null;Q===!1&&(k=A);let q=I===y[R]&&I!==g[R]&&z;if(q&&(o||a)&&n.manuallyAnimateOnMount&&(q=!1),N.protectedKeys={...j},!N.isActive&&Q===null||!I&&!N.prevProp||No(I)||typeof I=="boolean")continue;if(R==="exit"&&N.isActive&&Q!==!0){N.prevResolvedValues&&(j={...j,...N.prevResolvedValues});continue}const X=bv(N.prevProp,I);let $=X||R===m&&N.isActive&&!q&&z||A>k&&z,ne=!1;const me=Array.isArray(I)?I:[I];let _e=me.reduce(d(R),{});Q===!1&&(_e={});const{prevResolvedValues:pe={}}=N,we={...pe,..._e},ce=V=>{$=!0,S.has(V)&&(ne=!0,S.delete(V)),N.needsAnimating[V]=!0;const U=n.getValue(V);U&&(U.liveStyle=!1)};for(const V in we){const U=_e[V],H=pe[V];if(j.hasOwnProperty(V))continue;let T=!1;du(U)&&du(H)?T=!Qm(U,H):T=U!==H,T?U!=null?ce(V):S.add(V):U!==void 0&&S.has(V)?ce(V):N.protectedKeys[V]=!0}N.prevProp=I,N.prevResolvedValues=_e,N.isActive&&(j={...j,..._e}),(o||a)&&n.blockInitialAnimation&&($=!1);const Se=q&&X;$&&(!Se||ne)&&x.push(...me.map(V=>{const U={type:R};if(typeof V=="string"&&(o||a)&&!Se&&n.manuallyAnimateOnMount&&n.parent){const{parent:H}=n,T=Yr(H,V);if(H.enteringChildren&&T){const{delayChildren:O}=T.transition||{};U.delay=hm(H.enteringChildren,n,O)}}return{animation:V,options:U}}))}if(S.size){const A={};if(typeof g.initial!="boolean"){const R=Yr(n,Array.isArray(g.initial)?g.initial[0]:g.initial);R&&R.transition&&(A.transition=R.transition)}S.forEach(R=>{const N=n.getBaseTarget(R),I=n.getValue(R);I&&(I.liveStyle=!0),A[R]=N??null}),x.push({animation:A})}let P=!!x.length;return o&&(g.initial===!1||g.initial===g.animate)&&!n.manuallyAnimateOnMount&&(P=!1),o=!1,a=!1,P?r(x):Promise.resolve()}function h(m,g){var x;if(i[m].isActive===g)return Promise.resolve();(x=n.variantChildren)==null||x.forEach(S=>{var j;return(j=S.animationState)==null?void 0:j.setActive(m,g)}),i[m].isActive=g;const y=p(m);for(const S in i)i[S].protectedKeys={};return y}return{animateChanges:p,setActive:h,setAnimateFunction:c,getState:()=>i,reset:()=>{i=Mp(),a=!0}}}function bv(n,r){return typeof r=="string"?r!==n:Array.isArray(r)?!Qm(r,n):!1}function rr(n=!1){return{isActive:n,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Mp(){return{animate:rr(!0),whileInView:rr(),whileHover:rr(),whileTap:rr(),whileDrag:rr(),whileFocus:rr(),exit:rr()}}function Dp(n,r){n.min=r.min,n.max=r.max}function Qt(n,r){Dp(n.x,r.x),Dp(n.y,r.y)}function Ap(n,r){n.translate=r.translate,n.scale=r.scale,n.originPoint=r.originPoint,n.origin=r.origin}const Km=1e-4,Cv=1-Km,Pv=1+Km,Gm=.01,Tv=0-Gm,Ev=0+Gm;function yt(n){return n.max-n.min}function jv(n,r,i){return Math.abs(n-r)<=i}function Lp(n,r,i,o=.5){n.origin=o,n.originPoint=Ie(r.min,r.max,n.origin),n.scale=yt(i)/yt(r),n.translate=Ie(i.min,i.max,n.origin)-n.originPoint,(n.scale>=Cv&&n.scale<=Pv||isNaN(n.scale))&&(n.scale=1),(n.translate>=Tv&&n.translate<=Ev||isNaN(n.translate))&&(n.translate=0)}function Bs(n,r,i,o){Lp(n.x,r.x,i.x,o?o.originX:void 0),Lp(n.y,r.y,i.y,o?o.originY:void 0)}function Rp(n,r,i){n.min=i.min+r.min,n.max=n.min+yt(r)}function Mv(n,r,i){Rp(n.x,r.x,i.x),Rp(n.y,r.y,i.y)}function Np(n,r,i){n.min=r.min-i.min,n.max=n.min+yt(r)}function jo(n,r,i){Np(n.x,r.x,i.x),Np(n.y,r.y,i.y)}function Ip(n,r,i,o,a){return n-=r,n=Eo(n,1/i,o),a!==void 0&&(n=Eo(n,1/a,o)),n}function Dv(n,r=0,i=1,o=.5,a,d=n,c=n){if(rn.test(r)&&(r=parseFloat(r),r=Ie(c.min,c.max,r/100)-c.min),typeof r!="number")return;let p=Ie(d.min,d.max,o);n===d&&(p-=r),n.min=Ip(n.min,r,i,p,a),n.max=Ip(n.max,r,i,p,a)}function Vp(n,r,[i,o,a],d,c){Dv(n,r[i],r[o],r[a],r.scale,d,c)}const Av=["x","scaleX","originX"],Lv=["y","scaleY","originY"];function Op(n,r,i,o){Vp(n.x,r,Av,i?i.x:void 0,o?o.x:void 0),Vp(n.y,r,Lv,i?i.y:void 0,o?o.y:void 0)}function zp(n){return n.translate===0&&n.scale===1}function Zm(n){return zp(n.x)&&zp(n.y)}function Fp(n,r){return n.min===r.min&&n.max===r.max}function Rv(n,r){return Fp(n.x,r.x)&&Fp(n.y,r.y)}function Bp(n,r){return Math.round(n.min)===Math.round(r.min)&&Math.round(n.max)===Math.round(r.max)}function Jm(n,r){return Bp(n.x,r.x)&&Bp(n.y,r.y)}function Up(n){return yt(n.x)/yt(n.y)}function Wp(n,r){return n.translate===r.translate&&n.scale===r.scale&&n.originPoint===r.originPoint}function nn(n){return[n("x"),n("y")]}function Nv(n,r,i){let o="";const a=n.x.translate/r.x,d=n.y.translate/r.y,c=(i==null?void 0:i.z)||0;if((a||d||c)&&(o=`translate3d(${a}px, ${d}px, ${c}px) `),(r.x!==1||r.y!==1)&&(o+=`scale(${1/r.x}, ${1/r.y}) `),i){const{transformPerspective:m,rotate:g,rotateX:y,rotateY:x,skewX:S,skewY:j}=i;m&&(o=`perspective(${m}px) ${o}`),g&&(o+=`rotate(${g}deg) `),y&&(o+=`rotateX(${y}deg) `),x&&(o+=`rotateY(${x}deg) `),S&&(o+=`skewX(${S}deg) `),j&&(o+=`skewY(${j}deg) `)}const p=n.x.scale*r.x,h=n.y.scale*r.y;return(p!==1||h!==1)&&(o+=`scale(${p}, ${h})`),o||"none"}const qm=["TopLeft","TopRight","BottomLeft","BottomRight"],Iv=qm.length,Yp=n=>typeof n=="string"?parseFloat(n):n,Hp=n=>typeof n=="number"||J.test(n);function Vv(n,r,i,o,a,d){a?(n.opacity=Ie(0,i.opacity??1,Ov(o)),n.opacityExit=Ie(r.opacity??1,0,zv(o))):d&&(n.opacity=Ie(r.opacity??1,i.opacity??1,o));for(let c=0;c<Iv;c++){const p=`border${qm[c]}Radius`;let h=$p(r,p),m=$p(i,p);if(h===void 0&&m===void 0)continue;h||(h=0),m||(m=0),h===0||m===0||Hp(h)===Hp(m)?(n[p]=Math.max(Ie(Yp(h),Yp(m),o),0),(rn.test(m)||rn.test(h))&&(n[p]+="%")):n[p]=m}(r.rotate||i.rotate)&&(n.rotate=Ie(r.rotate||0,i.rotate||0,o))}function $p(n,r){return n[r]!==void 0?n[r]:n.borderRadius}const Ov=e0(0,.5,Oh),zv=e0(.5,.95,Ot);function e0(n,r,i){return o=>o<n?0:o>r?1:i($r(n,r,o))}function t0(n,r,i){const o=et(n)?n:Fn(n);return o.start(Wu("",o,r,i)),o.animation}function Ks(n,r,i,o={passive:!0}){return n.addEventListener(r,i,o),()=>n.removeEventListener(r,i)}const Fv=(n,r)=>n.depth-r.depth;class Bv{constructor(){this.children=[],this.isDirty=!1}add(r){Tu(this.children,r),this.isDirty=!0}remove(r){Hr(this.children,r),this.isDirty=!0}forEach(r){this.isDirty&&this.children.sort(Fv),this.isDirty=!1,this.children.forEach(r)}}function Uv(n,r){const i=gt.now(),o=({timestamp:a})=>{const d=a-i;d>=r&&(mn(o),n(d-r))};return Ee.setup(o,!0),()=>mn(o)}function So(n){return et(n)?n.get():n}class Wv{constructor(){this.members=[]}add(r){Tu(this.members,r);for(let i=this.members.length-1;i>=0;i--){const o=this.members[i];if(o===r||o===this.lead||o===this.prevLead)continue;const a=o.instance;(!a||a.isConnected===!1)&&!o.snapshot&&(Hr(this.members,o),o.unmount())}r.scheduleRender()}remove(r){if(Hr(this.members,r),r===this.prevLead&&(this.prevLead=void 0),r===this.lead){const i=this.members[this.members.length-1];i&&this.promote(i)}}relegate(r){var i;for(let o=this.members.indexOf(r)-1;o>=0;o--){const a=this.members[o];if(a.isPresent!==!1&&((i=a.instance)==null?void 0:i.isConnected)!==!1)return this.promote(a),!0}return!1}promote(r,i){var a;const o=this.lead;if(r!==o&&(this.prevLead=o,this.lead=r,r.show(),o)){o.updateSnapshot(),r.scheduleRender();const{layoutDependency:d}=o.options,{layoutDependency:c}=r.options;(d===void 0||d!==c)&&(r.resumeFrom=o,i&&(o.preserveOpacity=!0),o.snapshot&&(r.snapshot=o.snapshot,r.snapshot.latestValues=o.animationValues||o.latestValues),(a=r.root)!=null&&a.isUpdating&&(r.isLayoutDirty=!0)),r.options.crossfade===!1&&o.hide()}}exitAnimationComplete(){this.members.forEach(r=>{var i,o,a,d,c;(o=(i=r.options).onExitComplete)==null||o.call(i),(c=(a=r.resumingFrom)==null?void 0:(d=a.options).onExitComplete)==null||c.call(d)})}scheduleRender(){this.members.forEach(r=>r.instance&&r.scheduleRender(!1))}removeLeadSnapshot(){var r;(r=this.lead)!=null&&r.snapshot&&(this.lead.snapshot=void 0)}}const bo={hasAnimatedSinceResize:!0,hasEverUpdated:!1},Fa=["","X","Y","Z"],Yv=1e3;let Hv=0;function Ba(n,r,i,o){const{latestValues:a}=r;a[n]&&(i[n]=a[n],r.setStaticValue(n,0),o&&(o[n]=0))}function n0(n){if(n.hasCheckedOptimisedAppear=!0,n.root===n)return;const{visualElement:r}=n.options;if(!r)return;const i=vm(r);if(window.MotionHasOptimisedAnimation(i,"transform")){const{layout:a,layoutId:d}=n.options;window.MotionCancelOptimisedAnimation(i,"transform",Ee,!(a||d))}const{parent:o}=n;o&&!o.hasCheckedOptimisedAppear&&n0(o)}function r0({attachResizeListener:n,defaultParent:r,measureScroll:i,checkIsScrollRoot:o,resetTransform:a}){return class{constructor(c={},p=r==null?void 0:r()){this.id=Hv++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(Qv),this.nodes.forEach(Jv),this.nodes.forEach(qv),this.nodes.forEach(Kv)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=c,this.root=p?p.root||p:this,this.path=p?[...p.path,p]:[],this.parent=p,this.depth=p?p.depth+1:0;for(let h=0;h<this.path.length;h++)this.path[h].shouldResetTransform=!0;this.root===this&&(this.nodes=new Bv)}addEventListener(c,p){return this.eventHandlers.has(c)||this.eventHandlers.set(c,new ju),this.eventHandlers.get(c).add(p)}notifyListeners(c,...p){const h=this.eventHandlers.get(c);h&&h.notify(...p)}hasListeners(c){return this.eventHandlers.has(c)}mount(c){if(this.instance)return;this.isSVG=Ro(c)&&!jm(c),this.instance=c;const{layoutId:p,layout:h,visualElement:m}=this.options;if(m&&!m.current&&m.mount(c),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(h||p)&&(this.isLayoutDirty=!0),n){let g,y=0;const x=()=>this.root.updateBlockedByResize=!1;Ee.read(()=>{y=window.innerWidth}),n(c,()=>{const S=window.innerWidth;S!==y&&(y=S,this.root.updateBlockedByResize=!0,g&&g(),g=Uv(x,250),bo.hasAnimatedSinceResize&&(bo.hasAnimatedSinceResize=!1,this.nodes.forEach(Kp)))})}p&&this.root.registerSharedNode(p,this),this.options.animate!==!1&&m&&(p||h)&&this.addEventListener("didUpdate",({delta:g,hasLayoutChanged:y,hasRelativeLayoutChanged:x,layout:S})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const j=this.options.transition||m.getDefaultTransition()||sx,{onLayoutAnimationStart:k,onLayoutAnimationComplete:P}=m.getProps(),A=!this.targetLayout||!Jm(this.targetLayout,S),R=!y&&x;if(this.options.layoutRoot||this.resumeFrom||R||y&&(A||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const N={...Uu(j,"layout"),onPlay:k,onComplete:P};(m.shouldReduceMotion||this.options.layoutRoot)&&(N.delay=0,N.type=!1),this.startAnimation(N),this.setAnimationOrigin(g,R)}else y||Kp(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=S})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const c=this.getStack();c&&c.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),mn(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(ex),this.animationId++)}getTransformTemplate(){const{visualElement:c}=this.options;return c&&c.getProps().transformTemplate}willUpdate(c=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&n0(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let g=0;g<this.path.length;g++){const y=this.path[g];y.shouldResetTransform=!0,y.updateScroll("snapshot"),y.options.layoutRoot&&y.willUpdate(!1)}const{layoutId:p,layout:h}=this.options;if(p===void 0&&!h)return;const m=this.getTransformTemplate();this.prevTransformTemplateValue=m?m(this.latestValues,""):void 0,this.updateSnapshot(),c&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Xp);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(Qp);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(Zv),this.nodes.forEach($v),this.nodes.forEach(Xv)):this.nodes.forEach(Qp),this.clearAllSnapshots();const p=gt.now();ot.delta=sn(0,1e3/60,p-ot.timestamp),ot.timestamp=p,ot.isProcessing=!0,Aa.update.process(ot),Aa.preRender.process(ot),Aa.render.process(ot),ot.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Ku.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(Gv),this.sharedNodes.forEach(tx)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Ee.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Ee.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!yt(this.snapshot.measuredBox.x)&&!yt(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let h=0;h<this.path.length;h++)this.path[h].updateScroll();const c=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected=Ye(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:p}=this.options;p&&p.notify("LayoutMeasure",this.layout.layoutBox,c?c.layoutBox:void 0)}updateScroll(c="measure"){let p=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===c&&(p=!1),p&&this.instance){const h=o(this.instance);this.scroll={animationId:this.root.animationId,phase:c,isRoot:h,offset:i(this.instance),wasRoot:this.scroll?this.scroll.isRoot:h}}}resetTransform(){if(!a)return;const c=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,p=this.projectionDelta&&!Zm(this.projectionDelta),h=this.getTransformTemplate(),m=h?h(this.latestValues,""):void 0,g=m!==this.prevTransformTemplateValue;c&&this.instance&&(p||ir(this.latestValues)||g)&&(a(this.instance,m),this.shouldResetTransform=!1,this.scheduleRender())}measure(c=!0){const p=this.measurePageBox();let h=this.removeElementScroll(p);return c&&(h=this.removeTransform(h)),ix(h),{animationId:this.root.animationId,measuredBox:p,layoutBox:h,latestValues:{},source:this.id}}measurePageBox(){var m;const{visualElement:c}=this.options;if(!c)return Ye();const p=c.measureViewportBox();if(!(((m=this.scroll)==null?void 0:m.wasRoot)||this.path.some(ox))){const{scroll:g}=this.root;g&&(Ur(p.x,g.offset.x),Ur(p.y,g.offset.y))}return p}removeElementScroll(c){var h;const p=Ye();if(Qt(p,c),(h=this.scroll)!=null&&h.wasRoot)return p;for(let m=0;m<this.path.length;m++){const g=this.path[m],{scroll:y,options:x}=g;g!==this.root&&y&&x.layoutScroll&&(y.wasRoot&&Qt(p,c),Ur(p.x,y.offset.x),Ur(p.y,y.offset.y))}return p}applyTransform(c,p=!1){const h=Ye();Qt(h,c);for(let m=0;m<this.path.length;m++){const g=this.path[m];!p&&g.options.layoutScroll&&g.scroll&&g!==g.root&&Wr(h,{x:-g.scroll.offset.x,y:-g.scroll.offset.y}),ir(g.latestValues)&&Wr(h,g.latestValues)}return ir(this.latestValues)&&Wr(h,this.latestValues),h}removeTransform(c){const p=Ye();Qt(p,c);for(let h=0;h<this.path.length;h++){const m=this.path[h];if(!m.instance||!ir(m.latestValues))continue;yu(m.latestValues)&&m.updateSnapshot();const g=Ye(),y=m.measurePageBox();Qt(g,y),Op(p,m.latestValues,m.snapshot?m.snapshot.layoutBox:void 0,g)}return ir(this.latestValues)&&Op(p,this.latestValues),p}setTargetDelta(c){this.targetDelta=c,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(c){this.options={...this.options,...c,crossfade:c.crossfade!==void 0?c.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==ot.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(c=!1){var S;const p=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=p.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=p.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=p.isSharedProjectionDirty);const h=!!this.resumingFrom||this!==p;if(!(c||h&&this.isSharedProjectionDirty||this.isProjectionDirty||(S=this.parent)!=null&&S.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:g,layoutId:y}=this.options;if(!this.layout||!(g||y))return;this.resolvedRelativeTargetAt=ot.timestamp;const x=this.getClosestProjectingParent();x&&this.linkedParentVersion!==x.layoutVersion&&!x.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(x&&x.layout?this.createRelativeTarget(x,this.layout.layoutBox,x.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=Ye(),this.targetWithTransforms=Ye()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),Mv(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Qt(this.target,this.layout.layoutBox),Vm(this.target,this.targetDelta)):Qt(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,x&&!!x.resumingFrom==!!this.resumingFrom&&!x.options.layoutScroll&&x.target&&this.animationProgress!==1?this.createRelativeTarget(x,this.target,x.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||yu(this.parent.latestValues)||Im(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(c,p,h){this.relativeParent=c,this.linkedParentVersion=c.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Ye(),this.relativeTargetOrigin=Ye(),jo(this.relativeTargetOrigin,p,h),Qt(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var j;const c=this.getLead(),p=!!this.resumingFrom||this!==c;let h=!0;if((this.isProjectionDirty||(j=this.parent)!=null&&j.isProjectionDirty)&&(h=!1),p&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(h=!1),this.resolvedRelativeTargetAt===ot.timestamp&&(h=!1),h)return;const{layout:m,layoutId:g}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(m||g))return;Qt(this.layoutCorrected,this.layout.layoutBox);const y=this.treeScale.x,x=this.treeScale.y;iv(this.layoutCorrected,this.treeScale,this.path,p),c.layout&&!c.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(c.target=c.layout.layoutBox,c.targetWithTransforms=Ye());const{target:S}=c;if(!S){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Ap(this.prevProjectionDelta.x,this.projectionDelta.x),Ap(this.prevProjectionDelta.y,this.projectionDelta.y)),Bs(this.projectionDelta,this.layoutCorrected,S,this.latestValues),(this.treeScale.x!==y||this.treeScale.y!==x||!Wp(this.projectionDelta.x,this.prevProjectionDelta.x)||!Wp(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",S))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(c=!0){var p;if((p=this.options.visualElement)==null||p.scheduleRender(),c){const h=this.getStack();h&&h.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Br(),this.projectionDelta=Br(),this.projectionDeltaWithTransform=Br()}setAnimationOrigin(c,p=!1){const h=this.snapshot,m=h?h.latestValues:{},g={...this.latestValues},y=Br();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!p;const x=Ye(),S=h?h.source:void 0,j=this.layout?this.layout.source:void 0,k=S!==j,P=this.getStack(),A=!P||P.members.length<=1,R=!!(k&&!A&&this.options.crossfade===!0&&!this.path.some(rx));this.animationProgress=0;let N;this.mixTargetDelta=I=>{const z=I/1e3;Gp(y.x,c.x,z),Gp(y.y,c.y,z),this.setTargetDelta(y),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(jo(x,this.layout.layoutBox,this.relativeParent.layout.layoutBox),nx(this.relativeTarget,this.relativeTargetOrigin,x,z),N&&Rv(this.relativeTarget,N)&&(this.isProjectionDirty=!1),N||(N=Ye()),Qt(N,this.relativeTarget)),k&&(this.animationValues=g,Vv(g,m,this.latestValues,z,R,A)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=z},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(c){var p,h,m;this.notifyListeners("animationStart"),(p=this.currentAnimation)==null||p.stop(),(m=(h=this.resumingFrom)==null?void 0:h.currentAnimation)==null||m.stop(),this.pendingAnimation&&(mn(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Ee.update(()=>{bo.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=Fn(0)),this.motionValue.jump(0,!1),this.currentAnimation=t0(this.motionValue,[0,1e3],{...c,velocity:0,isSync:!0,onUpdate:g=>{this.mixTargetDelta(g),c.onUpdate&&c.onUpdate(g)},onStop:()=>{},onComplete:()=>{c.onComplete&&c.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const c=this.getStack();c&&c.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Yv),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const c=this.getLead();let{targetWithTransforms:p,target:h,layout:m,latestValues:g}=c;if(!(!p||!h||!m)){if(this!==c&&this.layout&&m&&s0(this.options.animationType,this.layout.layoutBox,m.layoutBox)){h=this.target||Ye();const y=yt(this.layout.layoutBox.x);h.x.min=c.target.x.min,h.x.max=h.x.min+y;const x=yt(this.layout.layoutBox.y);h.y.min=c.target.y.min,h.y.max=h.y.min+x}Qt(p,h),Wr(p,g),Bs(this.projectionDeltaWithTransform,this.layoutCorrected,p,g)}}registerSharedNode(c,p){this.sharedNodes.has(c)||this.sharedNodes.set(c,new Wv),this.sharedNodes.get(c).add(p);const m=p.options.initialPromotionConfig;p.promote({transition:m?m.transition:void 0,preserveFollowOpacity:m&&m.shouldPreserveFollowOpacity?m.shouldPreserveFollowOpacity(p):void 0})}isLead(){const c=this.getStack();return c?c.lead===this:!0}getLead(){var p;const{layoutId:c}=this.options;return c?((p=this.getStack())==null?void 0:p.lead)||this:this}getPrevLead(){var p;const{layoutId:c}=this.options;return c?(p=this.getStack())==null?void 0:p.prevLead:void 0}getStack(){const{layoutId:c}=this.options;if(c)return this.root.sharedNodes.get(c)}promote({needsReset:c,transition:p,preserveFollowOpacity:h}={}){const m=this.getStack();m&&m.promote(this,h),c&&(this.projectionDelta=void 0,this.needsReset=!0),p&&this.setOptions({transition:p})}relegate(){const c=this.getStack();return c?c.relegate(this):!1}resetSkewAndRotation(){const{visualElement:c}=this.options;if(!c)return;let p=!1;const{latestValues:h}=c;if((h.z||h.rotate||h.rotateX||h.rotateY||h.rotateZ||h.skewX||h.skewY)&&(p=!0),!p)return;const m={};h.z&&Ba("z",c,m,this.animationValues);for(let g=0;g<Fa.length;g++)Ba(`rotate${Fa[g]}`,c,m,this.animationValues),Ba(`skew${Fa[g]}`,c,m,this.animationValues);c.render();for(const g in m)c.setStaticValue(g,m[g]),this.animationValues&&(this.animationValues[g]=m[g]);c.scheduleRender()}applyProjectionStyles(c,p){if(!this.instance||this.isSVG)return;if(!this.isVisible){c.visibility="hidden";return}const h=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,c.visibility="",c.opacity="",c.pointerEvents=So(p==null?void 0:p.pointerEvents)||"",c.transform=h?h(this.latestValues,""):"none";return}const m=this.getLead();if(!this.projectionDelta||!this.layout||!m.target){this.options.layoutId&&(c.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,c.pointerEvents=So(p==null?void 0:p.pointerEvents)||""),this.hasProjected&&!ir(this.latestValues)&&(c.transform=h?h({},""):"none",this.hasProjected=!1);return}c.visibility="";const g=m.animationValues||m.latestValues;this.applyTransformsToTarget();let y=Nv(this.projectionDeltaWithTransform,this.treeScale,g);h&&(y=h(g,y)),c.transform=y;const{x,y:S}=this.projectionDelta;c.transformOrigin=`${x.origin*100}% ${S.origin*100}% 0`,m.animationValues?c.opacity=m===this?g.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:g.opacityExit:c.opacity=m===this?g.opacity!==void 0?g.opacity:"":g.opacityExit!==void 0?g.opacityExit:0;for(const j in xu){if(g[j]===void 0)continue;const{correct:k,applyTo:P,isCSSVariable:A}=xu[j],R=y==="none"?g[j]:k(g[j],m);if(P){const N=P.length;for(let I=0;I<N;I++)c[P[I]]=R}else A?this.options.visualElement.renderState.vars[j]=R:c[j]=R}this.options.layoutId&&(c.pointerEvents=m===this?So(p==null?void 0:p.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(c=>{var p;return(p=c.currentAnimation)==null?void 0:p.stop()}),this.root.nodes.forEach(Xp),this.root.sharedNodes.clear()}}}function $v(n){n.updateLayout()}function Xv(n){var i;const r=((i=n.resumeFrom)==null?void 0:i.snapshot)||n.snapshot;if(n.isLead()&&n.layout&&r&&n.hasListeners("didUpdate")){const{layoutBox:o,measuredBox:a}=n.layout,{animationType:d}=n.options,c=r.source!==n.layout.source;d==="size"?nn(y=>{const x=c?r.measuredBox[y]:r.layoutBox[y],S=yt(x);x.min=o[y].min,x.max=x.min+S}):s0(d,r.layoutBox,o)&&nn(y=>{const x=c?r.measuredBox[y]:r.layoutBox[y],S=yt(o[y]);x.max=x.min+S,n.relativeTarget&&!n.currentAnimation&&(n.isProjectionDirty=!0,n.relativeTarget[y].max=n.relativeTarget[y].min+S)});const p=Br();Bs(p,o,r.layoutBox);const h=Br();c?Bs(h,n.applyTransform(a,!0),r.measuredBox):Bs(h,o,r.layoutBox);const m=!Zm(p);let g=!1;if(!n.resumeFrom){const y=n.getClosestProjectingParent();if(y&&!y.resumeFrom){const{snapshot:x,layout:S}=y;if(x&&S){const j=Ye();jo(j,r.layoutBox,x.layoutBox);const k=Ye();jo(k,o,S.layoutBox),Jm(j,k)||(g=!0),y.options.layoutRoot&&(n.relativeTarget=k,n.relativeTargetOrigin=j,n.relativeParent=y)}}}n.notifyListeners("didUpdate",{layout:o,snapshot:r,delta:h,layoutDelta:p,hasLayoutChanged:m,hasRelativeLayoutChanged:g})}else if(n.isLead()){const{onExitComplete:o}=n.options;o&&o()}n.options.transition=void 0}function Qv(n){n.parent&&(n.isProjecting()||(n.isProjectionDirty=n.parent.isProjectionDirty),n.isSharedProjectionDirty||(n.isSharedProjectionDirty=!!(n.isProjectionDirty||n.parent.isProjectionDirty||n.parent.isSharedProjectionDirty)),n.isTransformDirty||(n.isTransformDirty=n.parent.isTransformDirty))}function Kv(n){n.isProjectionDirty=n.isSharedProjectionDirty=n.isTransformDirty=!1}function Gv(n){n.clearSnapshot()}function Xp(n){n.clearMeasurements()}function Qp(n){n.isLayoutDirty=!1}function Zv(n){const{visualElement:r}=n.options;r&&r.getProps().onBeforeLayoutMeasure&&r.notify("BeforeLayoutMeasure"),n.resetTransform()}function Kp(n){n.finishAnimation(),n.targetDelta=n.relativeTarget=n.target=void 0,n.isProjectionDirty=!0}function Jv(n){n.resolveTargetDelta()}function qv(n){n.calcProjection()}function ex(n){n.resetSkewAndRotation()}function tx(n){n.removeLeadSnapshot()}function Gp(n,r,i){n.translate=Ie(r.translate,0,i),n.scale=Ie(r.scale,1,i),n.origin=r.origin,n.originPoint=r.originPoint}function Zp(n,r,i,o){n.min=Ie(r.min,i.min,o),n.max=Ie(r.max,i.max,o)}function nx(n,r,i,o){Zp(n.x,r.x,i.x,o),Zp(n.y,r.y,i.y,o)}function rx(n){return n.animationValues&&n.animationValues.opacityExit!==void 0}const sx={duration:.45,ease:[.4,0,.1,1]},Jp=n=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(n),qp=Jp("applewebkit/")&&!Jp("chrome/")?Math.round:Ot;function eh(n){n.min=qp(n.min),n.max=qp(n.max)}function ix(n){eh(n.x),eh(n.y)}function s0(n,r,i){return n==="position"||n==="preserve-aspect"&&!jv(Up(r),Up(i),.2)}function ox(n){var r;return n!==n.root&&((r=n.scroll)==null?void 0:r.wasRoot)}const lx=r0({attachResizeListener:(n,r)=>Ks(n,"resize",r),measureScroll:()=>{var n,r;return{x:document.documentElement.scrollLeft||((n=document.body)==null?void 0:n.scrollLeft)||0,y:document.documentElement.scrollTop||((r=document.body)==null?void 0:r.scrollTop)||0}},checkIsScrollRoot:()=>!0}),ax=n=>!n.isLayoutDirty&&n.willUpdate(!1);function th(){const n=new Set,r=new WeakMap,i=()=>n.forEach(ax);return{add:o=>{n.add(o),r.set(o,o.addEventListener("willUpdate",i))},remove:o=>{n.delete(o);const a=r.get(o);a&&(a(),r.delete(o)),i()},dirty:i}}const Ua={current:void 0},i0=r0({measureScroll:n=>({x:n.scrollLeft,y:n.scrollTop}),defaultParent:()=>{if(!Ua.current){const n=new lx({});n.mount(window),n.setOptions({layoutScroll:!0}),Ua.current=n}return Ua.current},resetTransform:(n,r)=>{n.style.transform=r!==void 0?r:"none"},checkIsScrollRoot:n=>window.getComputedStyle(n).position==="fixed"}),Vo=b.createContext({transformPagePoint:n=>n,isStatic:!1,reducedMotion:"never"});function nh(n,r){if(typeof n=="function")return n(r);n!=null&&(n.current=r)}function ux(...n){return r=>{let i=!1;const o=n.map(a=>{const d=nh(a,r);return!i&&typeof d=="function"&&(i=!0),d});if(i)return()=>{for(let a=0;a<o.length;a++){const d=o[a];typeof d=="function"?d():nh(n[a],null)}}}}function cx(...n){return b.useCallback(ux(...n),n)}class dx extends b.Component{getSnapshotBeforeUpdate(r){const i=this.props.childRef.current;if(i&&r.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const o=i.offsetParent,a=_u(o)&&o.offsetWidth||0,d=_u(o)&&o.offsetHeight||0,c=this.props.sizeRef.current;c.height=i.offsetHeight||0,c.width=i.offsetWidth||0,c.top=i.offsetTop,c.left=i.offsetLeft,c.right=a-c.width-c.left,c.bottom=d-c.height-c.top}return null}componentDidUpdate(){}render(){return this.props.children}}function fx({children:n,isPresent:r,anchorX:i,anchorY:o,root:a,pop:d}){var x;const c=b.useId(),p=b.useRef(null),h=b.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0}),{nonce:m}=b.useContext(Vo),g=((x=n.props)==null?void 0:x.ref)??(n==null?void 0:n.ref),y=cx(p,g);return b.useInsertionEffect(()=>{const{width:S,height:j,top:k,left:P,right:A,bottom:R}=h.current;if(r||d===!1||!p.current||!S||!j)return;const N=i==="left"?`left: ${P}`:`right: ${A}`,I=o==="bottom"?`bottom: ${R}`:`top: ${k}`;p.current.dataset.motionPopId=c;const z=document.createElement("style");m&&(z.nonce=m);const Q=a??document.head;return Q.appendChild(z),z.sheet&&z.sheet.insertRule(`
          [data-motion-pop-id="${c}"] {
            position: absolute !important;
            width: ${S}px !important;
            height: ${j}px !important;
            ${N}px !important;
            ${I}px !important;
          }
        `),()=>{Q.contains(z)&&Q.removeChild(z)}},[r]),v.jsx(dx,{isPresent:r,childRef:p,sizeRef:h,pop:d,children:d===!1?n:b.cloneElement(n,{ref:y})})}const px=({children:n,initial:r,isPresent:i,onExitComplete:o,custom:a,presenceAffectsLayout:d,mode:c,anchorX:p,anchorY:h,root:m})=>{const g=Zs(hx),y=b.useId();let x=!0,S=b.useMemo(()=>(x=!1,{id:y,initial:r,isPresent:i,custom:a,onExitComplete:j=>{g.set(j,!0);for(const k of g.values())if(!k)return;o&&o()},register:j=>(g.set(j,!1),()=>g.delete(j))}),[i,g,o]);return d&&x&&(S={...S}),b.useMemo(()=>{g.forEach((j,k)=>g.set(k,!1))},[i]),b.useEffect(()=>{!i&&!g.size&&o&&o()},[i]),n=v.jsx(fx,{pop:c==="popLayout",isPresent:i,anchorX:p,anchorY:h,root:m,children:n}),v.jsx(Lo.Provider,{value:S,children:n})};function hx(){return new Map}function o0(n=!0){const r=b.useContext(Lo);if(r===null)return[!0,null];const{isPresent:i,onExitComplete:o,register:a}=r,d=b.useId();b.useEffect(()=>{if(n)return a(d)},[n]);const c=b.useCallback(()=>n&&o&&o(d),[d,o,n]);return!i&&o?[!1,c]:[!0]}const _o=n=>n.key||"";function rh(n){const r=[];return b.Children.forEach(n,i=>{b.isValidElement(i)&&r.push(i)}),r}const ur=({children:n,custom:r,initial:i=!0,onExitComplete:o,presenceAffectsLayout:a=!0,mode:d="sync",propagate:c=!1,anchorX:p="left",anchorY:h="top",root:m})=>{const[g,y]=o0(c),x=b.useMemo(()=>rh(n),[n]),S=c&&!g?[]:x.map(_o),j=b.useRef(!0),k=b.useRef(x),P=Zs(()=>new Map),A=b.useRef(new Set),[R,N]=b.useState(x),[I,z]=b.useState(x);Ao(()=>{j.current=!1,k.current=x;for(let X=0;X<I.length;X++){const $=_o(I[X]);S.includes($)?(P.delete($),A.current.delete($)):P.get($)!==!0&&P.set($,!1)}},[I,S.length,S.join("-")]);const Q=[];if(x!==R){let X=[...x];for(let $=0;$<I.length;$++){const ne=I[$],me=_o(ne);S.includes(me)||(X.splice($,0,ne),Q.push(ne))}return d==="wait"&&Q.length&&(X=Q),z(rh(X)),N(x),null}const{forceRender:q}=b.useContext(Ws);return v.jsx(v.Fragment,{children:I.map(X=>{const $=_o(X),ne=c&&!g?!1:x===I||S.includes($),me=()=>{if(A.current.has($))return;if(A.current.add($),P.has($))P.set($,!0);else return;let _e=!0;P.forEach(pe=>{pe||(_e=!1)}),_e&&(q==null||q(),z(k.current),c&&(y==null||y()),o&&o())};return v.jsx(px,{isPresent:ne,initial:!j.current||i?void 0:!1,custom:r,presenceAffectsLayout:a,mode:d,root:m,onExitComplete:ne?void 0:me,anchorX:p,anchorY:h,children:X},$)})})},mx=b.createContext(null);function _x(){const n=b.useRef(!1);return Ao(()=>(n.current=!0,()=>{n.current=!1}),[]),n}function gx(){const n=_x(),[r,i]=b.useState(0),o=b.useCallback(()=>{n.current&&i(r+1)},[r]);return[b.useCallback(()=>Ee.postRender(o),[o]),r]}const l0=n=>n===!0,yx=n=>l0(n===!0)||n==="id",vx=({children:n,id:r,inherit:i=!0})=>{const o=b.useContext(Ws),a=b.useContext(mx),[d,c]=gx(),p=b.useRef(null),h=o.id||a;p.current===null&&(yx(i)&&h&&(r=r?h+"-"+r:h),p.current={id:r,group:l0(i)&&o.group||th()});const m=b.useMemo(()=>({...p.current,forceRender:d}),[c]);return v.jsx(Ws.Provider,{value:m,children:n})},a0=b.createContext({strict:!1}),sh={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let ih=!1;function xx(){if(ih)return;const n={};for(const r in sh)n[r]={isEnabled:i=>sh[r].some(o=>!!i[o])};Am(n),ih=!0}function u0(){return xx(),nv()}function wx(n){const r=u0();for(const i in n)r[i]={...r[i],...n[i]};Am(r)}const kx=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function Mo(n){return n.startsWith("while")||n.startsWith("drag")&&n!=="draggable"||n.startsWith("layout")||n.startsWith("onTap")||n.startsWith("onPan")||n.startsWith("onLayout")||kx.has(n)}let c0=n=>!Mo(n);function Sx(n){typeof n=="function"&&(c0=r=>r.startsWith("on")?!Mo(r):n(r))}try{Sx(require("@emotion/is-prop-valid").default)}catch{}function bx(n,r,i){const o={};for(const a in n)a==="values"&&typeof n.values=="object"||(c0(a)||i===!0&&Mo(a)||!r&&!Mo(a)||n.draggable&&a.startsWith("onDrag"))&&(o[a]=n[a]);return o}const Oo=b.createContext({});function Cx(n,r){if(Io(n)){const{initial:i,animate:o}=n;return{initial:i===!1||Qs(i)?i:void 0,animate:Qs(o)?o:void 0}}return n.inherit!==!1?r:{}}function Px(n){const{initial:r,animate:i}=Cx(n,b.useContext(Oo));return b.useMemo(()=>({initial:r,animate:i}),[oh(r),oh(i)])}function oh(n){return Array.isArray(n)?n.join(" "):n}const tc=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function d0(n,r,i){for(const o in r)!et(r[o])&&!Fm(o,i)&&(n[o]=r[o])}function Tx({transformTemplate:n},r){return b.useMemo(()=>{const i=tc();return qu(i,r,n),Object.assign({},i.vars,i.style)},[r])}function Ex(n,r){const i=n.style||{},o={};return d0(o,i,n),Object.assign(o,Tx(n,r)),o}function jx(n,r){const i={},o=Ex(n,r);return n.drag&&n.dragListener!==!1&&(i.draggable=!1,o.userSelect=o.WebkitUserSelect=o.WebkitTouchCallout="none",o.touchAction=n.drag===!0?"none":`pan-${n.drag==="x"?"y":"x"}`),n.tabIndex===void 0&&(n.onTap||n.onTapStart||n.whileTap)&&(i.tabIndex=0),i.style=o,i}const f0=()=>({...tc(),attrs:{}});function Mx(n,r,i,o){const a=b.useMemo(()=>{const d=f0();return Um(d,r,Ym(o),n.transformTemplate,n.style),{...d.attrs,style:{...d.style}}},[r]);if(n.style){const d={};d0(d,n.style,n),a.style={...d,...a.style}}return a}const Dx=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function nc(n){return typeof n!="string"||n.includes("-")?!1:!!(Dx.indexOf(n)>-1||/[A-Z]/u.test(n))}function Ax(n,r,i,{latestValues:o},a,d=!1,c){const h=(c??nc(n)?Mx:jx)(r,o,a,n),m=bx(r,typeof n=="string",d),g=n!==b.Fragment?{...m,...h,ref:i}:{},{children:y}=r,x=b.useMemo(()=>et(y)?y.get():y,[y]);return b.createElement(n,{...g,children:x})}function Lx({scrapeMotionValuesFromProps:n,createRenderState:r},i,o,a){return{latestValues:Rx(i,o,a,n),renderState:r()}}function Rx(n,r,i,o){const a={},d=o(n,{});for(const x in d)a[x]=So(d[x]);let{initial:c,animate:p}=n;const h=Io(n),m=Mm(n);r&&m&&!h&&n.inherit!==!1&&(c===void 0&&(c=r.initial),p===void 0&&(p=r.animate));let g=i?i.initial===!1:!1;g=g||c===!1;const y=g?p:c;if(y&&typeof y!="boolean"&&!No(y)){const x=Array.isArray(y)?y:[y];for(let S=0;S<x.length;S++){const j=Yu(n,x[S]);if(j){const{transitionEnd:k,transition:P,...A}=j;for(const R in A){let N=A[R];if(Array.isArray(N)){const I=g?N.length-1:0;N=N[I]}N!==null&&(a[R]=N)}for(const R in k)a[R]=k[R]}}}return a}const p0=n=>(r,i)=>{const o=b.useContext(Oo),a=b.useContext(Lo),d=()=>Lx(n,r,o,a);return i?d():Zs(d)},Nx=p0({scrapeMotionValuesFromProps:ec,createRenderState:tc}),Ix=p0({scrapeMotionValuesFromProps:Hm,createRenderState:f0}),Vx=Symbol.for("motionComponentSymbol");function Ox(n,r,i){const o=b.useRef(i);b.useInsertionEffect(()=>{o.current=i});const a=b.useRef(null);return b.useCallback(d=>{var p;d&&((p=n.onMount)==null||p.call(n,d));const c=o.current;if(typeof c=="function")if(d){const h=c(d);typeof h=="function"&&(a.current=h)}else a.current?(a.current(),a.current=null):c(d);else c&&(c.current=d);r&&(d?r.mount(d):r.unmount())},[r])}const h0=b.createContext({});function Or(n){return n&&typeof n=="object"&&Object.prototype.hasOwnProperty.call(n,"current")}function zx(n,r,i,o,a,d){var N,I;const{visualElement:c}=b.useContext(Oo),p=b.useContext(a0),h=b.useContext(Lo),m=b.useContext(Vo),g=m.reducedMotion,y=m.skipAnimations,x=b.useRef(null),S=b.useRef(!1);o=o||p.renderer,!x.current&&o&&(x.current=o(n,{visualState:r,parent:c,props:i,presenceContext:h,blockInitialAnimation:h?h.initial===!1:!1,reducedMotionConfig:g,skipAnimations:y,isSVG:d}),S.current&&x.current&&(x.current.manuallyAnimateOnMount=!0));const j=x.current,k=b.useContext(h0);j&&!j.projection&&a&&(j.type==="html"||j.type==="svg")&&Fx(x.current,i,a,k);const P=b.useRef(!1);b.useInsertionEffect(()=>{j&&P.current&&j.update(i,h)});const A=i[ym],R=b.useRef(!!A&&typeof window<"u"&&!((N=window.MotionHandoffIsComplete)!=null&&N.call(window,A))&&((I=window.MotionHasOptimisedAnimation)==null?void 0:I.call(window,A)));return Ao(()=>{S.current=!0,j&&(P.current=!0,window.MotionIsMounted=!0,j.updateFeatures(),j.scheduleRenderMicrotask(),R.current&&j.animationState&&j.animationState.animateChanges())}),b.useEffect(()=>{j&&(!R.current&&j.animationState&&j.animationState.animateChanges(),R.current&&(queueMicrotask(()=>{var z;(z=window.MotionHandoffMarkAsComplete)==null||z.call(window,A)}),R.current=!1),j.enteringChildren=void 0)}),j}function Fx(n,r,i,o){const{layoutId:a,layout:d,drag:c,dragConstraints:p,layoutScroll:h,layoutRoot:m,layoutCrossfade:g}=r;n.projection=new i(n.latestValues,r["data-framer-portal-id"]?void 0:m0(n.parent)),n.projection.setOptions({layoutId:a,layout:d,alwaysMeasureLayout:!!c||p&&Or(p),visualElement:n,animationType:typeof d=="string"?d:"both",initialPromotionConfig:o,crossfade:g,layoutScroll:h,layoutRoot:m})}function m0(n){if(n)return n.options.allowProjection!==!1?n.projection:m0(n.parent)}function Wa(n,{forwardMotionProps:r=!1,type:i}={},o,a){o&&wx(o);const d=i?i==="svg":nc(n),c=d?Ix:Nx;function p(m,g){let y;const x={...b.useContext(Vo),...m,layoutId:Bx(m)},{isStatic:S}=x,j=Px(m),k=c(m,S);if(!S&&typeof window<"u"){Ux();const P=Wx(x);y=P.MeasureLayout,j.visualElement=zx(n,k,x,a,P.ProjectionNode,d)}return v.jsxs(Oo.Provider,{value:j,children:[y&&j.visualElement?v.jsx(y,{visualElement:j.visualElement,...x}):null,Ax(n,m,Ox(k,j.visualElement,g),k,S,r,d)]})}p.displayName=`motion.${typeof n=="string"?n:`create(${n.displayName??n.name??""})`}`;const h=b.forwardRef(p);return h[Vx]=n,h}function Bx({layoutId:n}){const r=b.useContext(Ws).id;return r&&n!==void 0?r+"-"+n:n}function Ux(n,r){b.useContext(a0).strict}function Wx(n){const r=u0(),{drag:i,layout:o}=r;if(!i&&!o)return{};const a={...i,...o};return{MeasureLayout:i!=null&&i.isEnabled(n)||o!=null&&o.isEnabled(n)?a.MeasureLayout:void 0,ProjectionNode:a.ProjectionNode}}function Yx(n,r){if(typeof Proxy>"u")return Wa;const i=new Map,o=(d,c)=>Wa(d,c,n,r),a=(d,c)=>o(d,c);return new Proxy(a,{get:(d,c)=>c==="create"?o:(i.has(c)||i.set(c,Wa(c,void 0,n,r)),i.get(c))})}const Hx=(n,r)=>r.isSVG??nc(n)?new $m(r):new Bm(r,{allowProjection:n!==b.Fragment});class $x extends Bn{constructor(r){super(r),r.animationState||(r.animationState=Sv(r))}updateAnimationControlsSubscription(){const{animate:r}=this.node.getProps();No(r)&&(this.unmountControls=r.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:r}=this.node.getProps(),{animate:i}=this.node.prevProps||{};r!==i&&this.updateAnimationControlsSubscription()}unmount(){var r;this.node.animationState.reset(),(r=this.unmountControls)==null||r.call(this)}}let Xx=0;class Qx extends Bn{constructor(){super(...arguments),this.id=Xx++}update(){if(!this.node.presenceContext)return;const{isPresent:r,onExitComplete:i}=this.node.presenceContext,{isPresent:o}=this.node.prevPresenceContext||{};if(!this.node.animationState||r===o)return;const a=this.node.animationState.setActive("exit",!r);i&&!r&&a.then(()=>{i(this.id)})}mount(){const{register:r,onExitComplete:i}=this.node.presenceContext||{};i&&i(this.id),r&&(this.unmount=r(this.id))}unmount(){}}const Kx={animation:{Feature:$x},exit:{Feature:Qx}};function ti(n){return{point:{x:n.pageX,y:n.pageY}}}const Gx=n=>r=>Gu(r)&&n(r,ti(r));function Us(n,r,i,o){return Ks(n,r,Gx(i),o)}const _0=({current:n})=>n?n.ownerDocument.defaultView:null,lh=(n,r)=>Math.abs(n-r);function Zx(n,r){const i=lh(n.x,r.x),o=lh(n.y,r.y);return Math.sqrt(i**2+o**2)}const ah=new Set(["auto","scroll"]);class g0{constructor(r,i,{transformPagePoint:o,contextWindow:a=window,dragSnapToOrigin:d=!1,distanceThreshold:c=3,element:p}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=S=>{this.handleScroll(S.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const S=Ha(this.lastMoveEventInfo,this.history),j=this.startEvent!==null,k=Zx(S.offset,{x:0,y:0})>=this.distanceThreshold;if(!j&&!k)return;const{point:P}=S,{timestamp:A}=ot;this.history.push({...P,timestamp:A});const{onStart:R,onMove:N}=this.handlers;j||(R&&R(this.lastMoveEvent,S),this.startEvent=this.lastMoveEvent),N&&N(this.lastMoveEvent,S)},this.handlePointerMove=(S,j)=>{this.lastMoveEvent=S,this.lastMoveEventInfo=Ya(j,this.transformPagePoint),Ee.update(this.updatePoint,!0)},this.handlePointerUp=(S,j)=>{this.end();const{onEnd:k,onSessionEnd:P,resumeAnimation:A}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&A&&A(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const R=Ha(S.type==="pointercancel"?this.lastMoveEventInfo:Ya(j,this.transformPagePoint),this.history);this.startEvent&&k&&k(S,R),P&&P(S,R)},!Gu(r))return;this.dragSnapToOrigin=d,this.handlers=i,this.transformPagePoint=o,this.distanceThreshold=c,this.contextWindow=a||window;const h=ti(r),m=Ya(h,this.transformPagePoint),{point:g}=m,{timestamp:y}=ot;this.history=[{...g,timestamp:y}];const{onSessionStart:x}=i;x&&x(r,Ha(m,this.history)),this.removeListeners=Js(Us(this.contextWindow,"pointermove",this.handlePointerMove),Us(this.contextWindow,"pointerup",this.handlePointerUp),Us(this.contextWindow,"pointercancel",this.handlePointerUp)),p&&this.startScrollTracking(p)}startScrollTracking(r){let i=r.parentElement;for(;i;){const o=getComputedStyle(i);(ah.has(o.overflowX)||ah.has(o.overflowY))&&this.scrollPositions.set(i,{x:i.scrollLeft,y:i.scrollTop}),i=i.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(r){const i=this.scrollPositions.get(r);if(!i)return;const o=r===window,a=o?{x:window.scrollX,y:window.scrollY}:{x:r.scrollLeft,y:r.scrollTop},d={x:a.x-i.x,y:a.y-i.y};d.x===0&&d.y===0||(o?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=d.x,this.lastMoveEventInfo.point.y+=d.y):this.history.length>0&&(this.history[0].x-=d.x,this.history[0].y-=d.y),this.scrollPositions.set(r,a),Ee.update(this.updatePoint,!0))}updateHandlers(r){this.handlers=r}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),mn(this.updatePoint)}}function Ya(n,r){return r?{point:r(n.point)}:n}function uh(n,r){return{x:n.x-r.x,y:n.y-r.y}}function Ha({point:n},r){return{point:n,delta:uh(n,y0(r)),offset:uh(n,Jx(r)),velocity:qx(r,.1)}}function Jx(n){return n[0]}function y0(n){return n[n.length-1]}function qx(n,r){if(n.length<2)return{x:0,y:0};let i=n.length-1,o=null;const a=y0(n);for(;i>=0&&(o=n[i],!(a.timestamp-o.timestamp>zt(r)));)i--;if(!o)return{x:0,y:0};o===n[0]&&n.length>2&&a.timestamp-o.timestamp>zt(r)*2&&(o=n[1]);const d=Vt(a.timestamp-o.timestamp);if(d===0)return{x:0,y:0};const c={x:(a.x-o.x)/d,y:(a.y-o.y)/d};return c.x===1/0&&(c.x=0),c.y===1/0&&(c.y=0),c}function e5(n,{min:r,max:i},o){return r!==void 0&&n<r?n=o?Ie(r,n,o.min):Math.max(n,r):i!==void 0&&n>i&&(n=o?Ie(i,n,o.max):Math.min(n,i)),n}function ch(n,r,i){return{min:r!==void 0?n.min+r:void 0,max:i!==void 0?n.max+i-(n.max-n.min):void 0}}function t5(n,{top:r,left:i,bottom:o,right:a}){return{x:ch(n.x,i,a),y:ch(n.y,r,o)}}function dh(n,r){let i=r.min-n.min,o=r.max-n.max;return r.max-r.min<n.max-n.min&&([i,o]=[o,i]),{min:i,max:o}}function n5(n,r){return{x:dh(n.x,r.x),y:dh(n.y,r.y)}}function r5(n,r){let i=.5;const o=yt(n),a=yt(r);return a>o?i=$r(r.min,r.max-o,n.min):o>a&&(i=$r(n.min,n.max-a,r.min)),sn(0,1,i)}function s5(n,r){const i={};return r.min!==void 0&&(i.min=r.min-n.min),r.max!==void 0&&(i.max=r.max-n.min),i}const wu=.35;function i5(n=wu){return n===!1?n=0:n===!0&&(n=wu),{x:fh(n,"left","right"),y:fh(n,"top","bottom")}}function fh(n,r,i){return{min:ph(n,r),max:ph(n,i)}}function ph(n,r){return typeof n=="number"?n:n[r]||0}const o5=new WeakMap;class l5{constructor(r){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Ye(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=r}start(r,{snapToCursor:i=!1,distanceThreshold:o}={}){const{presenceContext:a}=this.visualElement;if(a&&a.isPresent===!1)return;const d=y=>{i&&this.snapToCursor(ti(y).point),this.stopAnimation()},c=(y,x)=>{const{drag:S,dragPropagation:j,onDragStart:k}=this.getProps();if(S&&!j&&(this.openDragLock&&this.openDragLock(),this.openDragLock=L1(S),!this.openDragLock))return;this.latestPointerEvent=y,this.latestPanInfo=x,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),nn(A=>{let R=this.getAxisMotionValue(A).get()||0;if(rn.test(R)){const{projection:N}=this.visualElement;if(N&&N.layout){const I=N.layout.layoutBox[A];I&&(R=yt(I)*(parseFloat(R)/100))}}this.originPoint[A]=R}),k&&Ee.update(()=>k(y,x),!1,!0),fu(this.visualElement,"transform");const{animationState:P}=this.visualElement;P&&P.setActive("whileDrag",!0)},p=(y,x)=>{this.latestPointerEvent=y,this.latestPanInfo=x;const{dragPropagation:S,dragDirectionLock:j,onDirectionLock:k,onDrag:P}=this.getProps();if(!S&&!this.openDragLock)return;const{offset:A}=x;if(j&&this.currentDirection===null){this.currentDirection=u5(A),this.currentDirection!==null&&k&&k(this.currentDirection);return}this.updateAxis("x",x.point,A),this.updateAxis("y",x.point,A),this.visualElement.render(),P&&Ee.update(()=>P(y,x),!1,!0)},h=(y,x)=>{this.latestPointerEvent=y,this.latestPanInfo=x,this.stop(y,x),this.latestPointerEvent=null,this.latestPanInfo=null},m=()=>{const{dragSnapToOrigin:y}=this.getProps();(y||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:g}=this.getProps();this.panSession=new g0(r,{onSessionStart:d,onStart:c,onMove:p,onSessionEnd:h,resumeAnimation:m},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:g,distanceThreshold:o,contextWindow:_0(this.visualElement),element:this.visualElement.current})}stop(r,i){const o=r||this.latestPointerEvent,a=i||this.latestPanInfo,d=this.isDragging;if(this.cancel(),!d||!a||!o)return;const{velocity:c}=a;this.startAnimation(c);const{onDragEnd:p}=this.getProps();p&&Ee.postRender(()=>p(o,a))}cancel(){this.isDragging=!1;const{projection:r,animationState:i}=this.visualElement;r&&(r.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:o}=this.getProps();!o&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),i&&i.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(r,i,o){const{drag:a}=this.getProps();if(!o||!go(r,a,this.currentDirection))return;const d=this.getAxisMotionValue(r);let c=this.originPoint[r]+o[r];this.constraints&&this.constraints[r]&&(c=e5(c,this.constraints[r],this.elastic[r])),d.set(c)}resolveConstraints(){var d;const{dragConstraints:r,dragElastic:i}=this.getProps(),o=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(d=this.visualElement.projection)==null?void 0:d.layout,a=this.constraints;r&&Or(r)?this.constraints||(this.constraints=this.resolveRefConstraints()):r&&o?this.constraints=t5(o.layoutBox,r):this.constraints=!1,this.elastic=i5(i),a!==this.constraints&&!Or(r)&&o&&this.constraints&&!this.hasMutatedConstraints&&nn(c=>{this.constraints!==!1&&this.getAxisMotionValue(c)&&(this.constraints[c]=s5(o.layoutBox[c],this.constraints[c]))})}resolveRefConstraints(){const{dragConstraints:r,onMeasureDragConstraints:i}=this.getProps();if(!r||!Or(r))return!1;const o=r.current,{projection:a}=this.visualElement;if(!a||!a.layout)return!1;const d=ov(o,a.root,this.visualElement.getTransformPagePoint());let c=n5(a.layout.layoutBox,d);if(i){const p=i(rv(c));this.hasMutatedConstraints=!!p,p&&(c=Nm(p))}return c}startAnimation(r){const{drag:i,dragMomentum:o,dragElastic:a,dragTransition:d,dragSnapToOrigin:c,onDragTransitionEnd:p}=this.getProps(),h=this.constraints||{},m=nn(g=>{if(!go(g,i,this.currentDirection))return;let y=h&&h[g]||{};c&&(y={min:0,max:0});const x=a?200:1e6,S=a?40:1e7,j={type:"inertia",velocity:o?r[g]:0,bounceStiffness:x,bounceDamping:S,timeConstant:750,restDelta:1,restSpeed:10,...d,...y};return this.startAxisValueAnimation(g,j)});return Promise.all(m).then(p)}startAxisValueAnimation(r,i){const o=this.getAxisMotionValue(r);return fu(this.visualElement,r),o.start(Wu(r,o,0,i,this.visualElement,!1))}stopAnimation(){nn(r=>this.getAxisMotionValue(r).stop())}getAxisMotionValue(r){const i=`_drag${r.toUpperCase()}`,o=this.visualElement.getProps(),a=o[i];return a||this.visualElement.getValue(r,(o.initial?o.initial[r]:void 0)||0)}snapToCursor(r){nn(i=>{const{drag:o}=this.getProps();if(!go(i,o,this.currentDirection))return;const{projection:a}=this.visualElement,d=this.getAxisMotionValue(i);if(a&&a.layout){const{min:c,max:p}=a.layout.layoutBox[i],h=d.get()||0;d.set(r[i]-Ie(c,p,.5)+h)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:r,dragConstraints:i}=this.getProps(),{projection:o}=this.visualElement;if(!Or(i)||!o||!this.constraints)return;this.stopAnimation();const a={x:0,y:0};nn(c=>{const p=this.getAxisMotionValue(c);if(p&&this.constraints!==!1){const h=p.get();a[c]=r5({min:h,max:h},this.constraints[c])}});const{transformTemplate:d}=this.visualElement.getProps();this.visualElement.current.style.transform=d?d({},""):"none",o.root&&o.root.updateScroll(),o.updateLayout(),this.constraints=!1,this.resolveConstraints(),nn(c=>{if(!go(c,r,null))return;const p=this.getAxisMotionValue(c),{min:h,max:m}=this.constraints[c];p.set(Ie(h,m,a[c]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;o5.set(this.visualElement,this);const r=this.visualElement.current,i=Us(r,"pointerdown",m=>{const{drag:g,dragListener:y=!0}=this.getProps(),x=m.target,S=x!==r&&z1(x);g&&y&&!S&&this.start(m)});let o;const a=()=>{const{dragConstraints:m}=this.getProps();Or(m)&&m.current&&(this.constraints=this.resolveRefConstraints(),o||(o=a5(r,m.current,()=>this.scalePositionWithinConstraints())))},{projection:d}=this.visualElement,c=d.addEventListener("measure",a);d&&!d.layout&&(d.root&&d.root.updateScroll(),d.updateLayout()),Ee.read(a);const p=Ks(window,"resize",()=>this.scalePositionWithinConstraints()),h=d.addEventListener("didUpdate",(({delta:m,hasLayoutChanged:g})=>{this.isDragging&&g&&(nn(y=>{const x=this.getAxisMotionValue(y);x&&(this.originPoint[y]+=m[y].translate,x.set(x.get()+m[y].translate))}),this.visualElement.render())}));return()=>{p(),i(),c(),h&&h(),o&&o()}}getProps(){const r=this.visualElement.getProps(),{drag:i=!1,dragDirectionLock:o=!1,dragPropagation:a=!1,dragConstraints:d=!1,dragElastic:c=wu,dragMomentum:p=!0}=r;return{...r,drag:i,dragDirectionLock:o,dragPropagation:a,dragConstraints:d,dragElastic:c,dragMomentum:p}}}function hh(n){let r=!0;return()=>{if(r){r=!1;return}n()}}function a5(n,r,i){const o=vp(n,hh(i)),a=vp(r,hh(i));return()=>{o(),a()}}function go(n,r,i){return(r===!0||r===n)&&(i===null||i===n)}function u5(n,r=10){let i=null;return Math.abs(n.y)>r?i="y":Math.abs(n.x)>r&&(i="x"),i}class c5 extends Bn{constructor(r){super(r),this.removeGroupControls=Ot,this.removeListeners=Ot,this.controls=new l5(r)}mount(){const{dragControls:r}=this.node.getProps();r&&(this.removeGroupControls=r.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Ot}update(){const{dragControls:r}=this.node.getProps(),{dragControls:i}=this.node.prevProps||{};r!==i&&(this.removeGroupControls(),r&&(this.removeGroupControls=r.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const $a=n=>(r,i)=>{n&&Ee.update(()=>n(r,i),!1,!0)};class d5 extends Bn{constructor(){super(...arguments),this.removePointerDownListener=Ot}onPointerDown(r){this.session=new g0(r,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:_0(this.node)})}createPanHandlers(){const{onPanSessionStart:r,onPanStart:i,onPan:o,onPanEnd:a}=this.node.getProps();return{onSessionStart:$a(r),onStart:$a(i),onMove:$a(o),onEnd:(d,c)=>{delete this.session,a&&Ee.postRender(()=>a(d,c))}}}mount(){this.removePointerDownListener=Us(this.node.current,"pointerdown",r=>this.onPointerDown(r))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let Xa=!1;class f5 extends b.Component{componentDidMount(){const{visualElement:r,layoutGroup:i,switchLayoutGroup:o,layoutId:a}=this.props,{projection:d}=r;d&&(i.group&&i.group.add(d),o&&o.register&&a&&o.register(d),Xa&&d.root.didUpdate(),d.addEventListener("animationComplete",()=>{this.safeToRemove()}),d.setOptions({...d.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),bo.hasEverUpdated=!0}getSnapshotBeforeUpdate(r){const{layoutDependency:i,visualElement:o,drag:a,isPresent:d}=this.props,{projection:c}=o;return c&&(c.isPresent=d,r.layoutDependency!==i&&c.setOptions({...c.options,layoutDependency:i}),Xa=!0,a||r.layoutDependency!==i||i===void 0||r.isPresent!==d?c.willUpdate():this.safeToRemove(),r.isPresent!==d&&(d?c.promote():c.relegate()||Ee.postRender(()=>{const p=c.getStack();(!p||!p.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:r}=this.props.visualElement;r&&(r.root.didUpdate(),Ku.postRender(()=>{!r.currentAnimation&&r.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:r,layoutGroup:i,switchLayoutGroup:o}=this.props,{projection:a}=r;Xa=!0,a&&(a.scheduleCheckAfterUnmount(),i&&i.group&&i.group.remove(a),o&&o.deregister&&o.deregister(a))}safeToRemove(){const{safeToRemove:r}=this.props;r&&r()}render(){return null}}function v0(n){const[r,i]=o0(),o=b.useContext(Ws);return v.jsx(f5,{...n,layoutGroup:o,switchLayoutGroup:b.useContext(h0),isPresent:r,safeToRemove:i})}const p5={pan:{Feature:d5},drag:{Feature:c5,ProjectionNode:i0,MeasureLayout:v0}};function mh(n,r,i){const{props:o}=n;n.animationState&&o.whileHover&&n.animationState.setActive("whileHover",i==="Start");const a="onHover"+i,d=o[a];d&&Ee.postRender(()=>d(r,ti(r)))}class h5 extends Bn{mount(){const{current:r}=this.node;r&&(this.unmount=N1(r,(i,o)=>(mh(this.node,o,"Start"),a=>mh(this.node,a,"End"))))}unmount(){}}class m5 extends Bn{constructor(){super(...arguments),this.isActive=!1}onFocus(){let r=!1;try{r=this.node.current.matches(":focus-visible")}catch{r=!0}!r||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Js(Ks(this.node.current,"focus",()=>this.onFocus()),Ks(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function _h(n,r,i){const{props:o}=n;if(n.current instanceof HTMLButtonElement&&n.current.disabled)return;n.animationState&&o.whileTap&&n.animationState.setActive("whileTap",i==="Start");const a="onTap"+(i==="End"?"":i),d=o[a];d&&Ee.postRender(()=>d(r,ti(r)))}class _5 extends Bn{mount(){const{current:r}=this.node;if(!r)return;const{globalTapTarget:i,propagate:o}=this.node.props;this.unmount=B1(r,(a,d)=>(_h(this.node,d,"Start"),(c,{success:p})=>_h(this.node,c,p?"End":"Cancel")),{useGlobalTarget:i,stopPropagation:(o==null?void 0:o.tap)===!1})}unmount(){}}const ku=new WeakMap,Qa=new WeakMap,g5=n=>{const r=ku.get(n.target);r&&r(n)},y5=n=>{n.forEach(g5)};function v5({root:n,...r}){const i=n||document;Qa.has(i)||Qa.set(i,{});const o=Qa.get(i),a=JSON.stringify(r);return o[a]||(o[a]=new IntersectionObserver(y5,{root:n,...r})),o[a]}function x5(n,r,i){const o=v5(r);return ku.set(n,i),o.observe(n),()=>{ku.delete(n),o.unobserve(n)}}const w5={some:0,all:1};class k5 extends Bn{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:r={}}=this.node.getProps(),{root:i,margin:o,amount:a="some",once:d}=r,c={root:i?i.current:void 0,rootMargin:o,threshold:typeof a=="number"?a:w5[a]},p=h=>{const{isIntersecting:m}=h;if(this.isInView===m||(this.isInView=m,d&&!m&&this.hasEnteredView))return;m&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",m);const{onViewportEnter:g,onViewportLeave:y}=this.node.getProps(),x=m?g:y;x&&x(h)};return x5(this.node.current,c,p)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:r,prevProps:i}=this.node;["amount","margin","root"].some(S5(r,i))&&this.startObserver()}unmount(){}}function S5({viewport:n={}},{viewport:r={}}={}){return i=>n[i]!==r[i]}const b5={inView:{Feature:k5},tap:{Feature:_5},focus:{Feature:m5},hover:{Feature:h5}},C5={layout:{ProjectionNode:i0,MeasureLayout:v0}},P5={...Kx,...b5,...p5,...C5},fe=Yx(P5,Hx);function Su(n){const r=Zs(()=>Fn(n)),{isStatic:i}=b.useContext(Vo);if(i){const[,o]=b.useState(n);b.useEffect(()=>r.on("change",o),[])}return r}function x0(n,r){const i=Su(r()),o=()=>i.set(r());return o(),Ao(()=>{const a=()=>Ee.preRender(o,!1,!0),d=n.map(c=>c.on("change",a));return()=>{d.forEach(c=>c()),mn(o)}}),i}function T5(n){Fs.current=[],n();const r=x0(Fs.current,n);return Fs.current=void 0,r}function yo(n,r,i,o){if(typeof n=="function")return T5(n);const d=typeof r=="function"?r:G1(r,i,o),c=Array.isArray(n)?gh(n,d):gh([n],([h])=>d(h)),p=Array.isArray(n)?void 0:n.accelerate;return p&&!p.isTransformed&&typeof r!="function"&&Array.isArray(i)&&(o==null?void 0:o.clamp)!==!1&&(c.accelerate={...p,times:r,keyframes:i,isTransformed:!0}),c}function gh(n,r){const i=Zs(()=>[]);return x0(n,()=>{i.length=0;const o=n.length;for(let a=0;a<o;a++)i[a]=n[a].get();return r(i)})}function rc(n){return typeof n=="object"&&!Array.isArray(n)}function w0(n,r,i,o){return n==null?[]:typeof n=="string"&&rc(r)?Qu(n,i,o):n instanceof NodeList?Array.from(n):Array.isArray(n)?n.filter(a=>a!=null):[n]}function E5(n,r,i){return n*(r+1)}function yh(n,r,i,o){return typeof r=="number"?r:r.startsWith("-")||r.startsWith("+")?Math.max(0,n+parseFloat(r)):r==="<"?i:r.startsWith("<")?Math.max(0,i+parseFloat(r.slice(1))):o.get(r)??n}function j5(n,r,i){for(let o=0;o<n.length;o++){const a=n[o];a.at>r&&a.at<i&&(Hr(n,a),o--)}}function M5(n,r,i,o,a,d){j5(n,a,d);for(let c=0;c<r.length;c++)n.push({value:r[c],at:Ie(a,d,o[c]),easing:Uh(i,c)})}function D5(n,r){for(let i=0;i<n.length;i++)n[i]=n[i]/(r+1)}function A5(n,r){return n.at===r.at?n.value===null?1:r.value===null?-1:0:n.at-r.at}const L5="easeInOut";function R5(n,{defaultTransition:r={},...i}={},o,a){const d=r.duration||.3,c=new Map,p=new Map,h={},m=new Map;let g=0,y=0,x=0;for(let S=0;S<n.length;S++){const j=n[S];if(typeof j=="string"){m.set(j,y);continue}else if(!Array.isArray(j)){m.set(j.name,yh(y,j.at,g,m));continue}let[k,P,A={}]=j;A.at!==void 0&&(y=yh(y,A.at,g,m));let R=0;const N=(I,z,Q,q=0,X=0)=>{const $=N5(I),{delay:ne=0,times:me=im($),type:_e=r.type||"keyframes",repeat:pe,repeatType:we,repeatDelay:ce=0,...Se}=z;let{ease:le=r.ease||"easeOut",duration:V}=z;const U=typeof ne=="function"?ne(q,X):ne,H=$.length,T=Bu(_e)?_e:a==null?void 0:a[_e||"keyframes"];if(H<=2&&T){let de=100;if(H===2&&O5($)){const ge=$[1]-$[0];de=Math.abs(ge)}const he={...r,...Se};V!==void 0&&(he.duration=zt(V));const ve=tm(he,de,T);le=ve.ease,V=ve.duration}V??(V=d);const O=y+U;me.length===1&&me[0]===0&&(me[1]=1);const oe=me.length-$.length;if(oe>0&&sm(me,oe),$.length===1&&$.unshift(null),pe){V=E5(V,pe);const de=[...$],he=[...me];le=Array.isArray(le)?[...le]:[le];const ve=[...le];for(let ge=0;ge<pe;ge++){$.push(...de);for(let ke=0;ke<de.length;ke++)me.push(he[ke]+(ge+1)),le.push(ke===0?"linear":Uh(ve,ke-1))}D5(me,pe)}const ae=O+V;M5(Q,$,le,me,O,ae),R=Math.max(U+V,R),x=Math.max(ae,x)};if(et(k)){const I=vh(k,p);N(P,A,xh("default",I))}else{const I=w0(k,P,o,h),z=I.length;for(let Q=0;Q<z;Q++){P=P,A=A;const q=I[Q],X=vh(q,p);for(const $ in P)N(P[$],I5(A,$),xh($,X),Q,z)}}g=y,y+=R}return p.forEach((S,j)=>{for(const k in S){const P=S[k];P.sort(A5);const A=[],R=[],N=[];for(let q=0;q<P.length;q++){const{at:X,value:$,easing:ne}=P[q];A.push($),R.push($r(0,x,X)),N.push(ne||"easeOut")}R[0]!==0&&(R.unshift(0),A.unshift(A[0]),N.unshift(L5)),R[R.length-1]!==1&&(R.push(1),A.push(null)),c.has(j)||c.set(j,{keyframes:{},transition:{}});const I=c.get(j);I.keyframes[k]=A;const{type:z,...Q}=r;I.transition[k]={...Q,duration:x,ease:N,times:R,...i}}}),c}function vh(n,r){return!r.has(n)&&r.set(n,{}),r.get(n)}function xh(n,r){return r[n]||(r[n]=[]),r[n]}function N5(n){return Array.isArray(n)?n:[n]}function I5(n,r){return n&&n[r]?{...n,...n[r]}:{...n}}const V5=n=>typeof n=="number",O5=n=>n.every(V5);function z5(n){const r={presenceContext:null,props:{},visualState:{renderState:{transform:{},transformOrigin:{},style:{},vars:{},attrs:{}},latestValues:{}}},i=Ro(n)&&!jm(n)?new $m(r):new Bm(r);i.mount(n),Xs.set(n,i)}function F5(n){const r={presenceContext:null,props:{},visualState:{renderState:{output:{}},latestValues:{}}},i=new pv(r);i.mount(n),Xs.set(n,i)}function B5(n,r){return et(n)||typeof n=="number"||typeof n=="string"&&!rc(r)}function k0(n,r,i,o){const a=[];if(B5(n,r))a.push(t0(n,rc(r)&&r.default||r,i&&(i.default||i)));else{if(n==null)return a;const d=w0(n,r,o),c=d.length;for(let p=0;p<c;p++){const h=d[p],m=h instanceof Element?z5:F5;Xs.has(h)||m(h);const g=Xs.get(h),y={...i};"delay"in y&&typeof y.delay=="function"&&(y.delay=y.delay(p,c)),a.push(...$u(g,{...r,transition:y},{}))}}return a}function U5(n,r,i){const o=[],a=n.map(c=>{if(Array.isArray(c)&&typeof c[0]=="function"){const p=c[0],h=Fn(0);return h.on("change",p),c.length===1?[h,[0,1]]:c.length===2?[h,[0,1],c[1]]:[h,c[1],c[2]]}return c});return R5(a,r,i,{spring:$s}).forEach(({keyframes:c,transition:p},h)=>{o.push(...k0(h,c,p))}),o}function W5(n){return Array.isArray(n)&&n.some(Array.isArray)}function Y5(n={}){const{scope:r,reduceMotion:i}=n;function o(a,d,c){let p=[],h;if(W5(a)){const{onComplete:g,...y}=d||{};typeof g=="function"&&(h=g),p=U5(a,i!==void 0?{reduceMotion:i,...y}:y,r)}else{const{onComplete:g,...y}=c||{};typeof g=="function"&&(h=g),p=k0(a,d,i!==void 0?{reduceMotion:i,...y}:y,r)}const m=new e1(p);return h&&m.finished.then(h),r&&(r.animations.push(m),m.finished.then(()=>{Hr(r.animations,m)})),m}return o}const wh=Y5();var H5=Object.freeze({}),$5=class{constructor(){this.panels=new Map,this.listeners=new Map,this.globalListeners=new Set,this.snapshots=new Map,this.actionListeners=new Map,this.presets=new Map,this.activePreset=new Map,this.baseValues=new Map}registerPanel(n,r,i){const o=this.parseConfig(i,""),a=this.flattenValues(i,"");this.initTransitionModes(i,"",a),this.panels.set(n,{id:n,name:r,controls:o,values:a}),this.snapshots.set(n,{...a}),this.baseValues.set(n,{...a}),this.notifyGlobal()}updatePanel(n,r,i){const o=this.panels.get(n);if(!o){this.registerPanel(n,r,i);return}const a=this.parseConfig(i,""),d=this.mapControlsByPath(a),c=this.flattenValues(i,""),p={};for(const[y,x]of Object.entries(c))p[y]=this.normalizePreservedValue(o.values[y],x,d.get(y));this.initTransitionModes(i,"",p);for(const[y,x]of Object.entries(o.values)){if(!y.endsWith(".__mode"))continue;const S=y.slice(0,-7),j=d.get(S);(j==null?void 0:j.type)==="transition"&&(p[y]=x)}const h={id:n,name:r,controls:a,values:p};this.panels.set(n,h),this.snapshots.set(n,{...p});const m=this.baseValues.get(n)??{},g={};for(const[y,x]of Object.entries(c))g[y]=this.normalizePreservedValue(m[y],x,d.get(y));for(const[y,x]of Object.entries(p))y.endsWith(".__mode")&&(g[y]=x);this.baseValues.set(n,g),this.notify(n),this.notifyGlobal()}unregisterPanel(n){this.panels.delete(n),this.listeners.delete(n),this.snapshots.delete(n),this.actionListeners.delete(n),this.baseValues.delete(n),this.notifyGlobal()}updateValue(n,r,i){const o=this.panels.get(n);if(!o)return;o.values[r]=i;const a=this.activePreset.get(n);if(a){const c=(this.presets.get(n)??[]).find(p=>p.id===a);c&&(c.values[r]=i)}else{const d=this.baseValues.get(n);d&&(d[r]=i)}this.snapshots.set(n,{...o.values}),this.notify(n)}updateSpringMode(n,r,i){this.updateTransitionMode(n,r,i)}getSpringMode(n,r){const i=this.getTransitionMode(n,r);return i==="easing"?"simple":i}updateTransitionMode(n,r,i){const o=this.panels.get(n);o&&(o.values[`${r}.__mode`]=i,this.snapshots.set(n,{...o.values}),this.notify(n))}getTransitionMode(n,r){const i=this.panels.get(n);return i&&i.values[`${r}.__mode`]||"simple"}getValue(n,r){const i=this.panels.get(n);return i==null?void 0:i.values[r]}getValues(n){return this.snapshots.get(n)??H5}getPanels(){return Array.from(this.panels.values())}getPanel(n){return this.panels.get(n)}subscribe(n,r){return this.listeners.has(n)||this.listeners.set(n,new Set),this.listeners.get(n).add(r),()=>{var i;(i=this.listeners.get(n))==null||i.delete(r)}}subscribeGlobal(n){return this.globalListeners.add(n),()=>this.globalListeners.delete(n)}subscribeActions(n,r){return this.actionListeners.has(n)||this.actionListeners.set(n,new Set),this.actionListeners.get(n).add(r),()=>{var i;(i=this.actionListeners.get(n))==null||i.delete(r)}}triggerAction(n,r){var i;(i=this.actionListeners.get(n))==null||i.forEach(o=>o(r))}savePreset(n,r){const i=this.panels.get(n);if(!i)throw new Error(`Panel ${n} not found`);const o=`preset-${Date.now()}-${Math.random().toString(36).slice(2,9)}`,a={id:o,name:r,values:{...i.values}},d=this.presets.get(n)??[];return this.presets.set(n,[...d,a]),this.activePreset.set(n,o),this.snapshots.set(n,{...i.values}),this.notify(n),o}loadPreset(n,r){const i=this.panels.get(n);if(!i)return;const a=(this.presets.get(n)??[]).find(d=>d.id===r);a&&(i.values={...a.values},this.snapshots.set(n,{...i.values}),this.activePreset.set(n,r),this.notify(n))}deletePreset(n,r){const i=this.presets.get(n)??[];this.presets.set(n,i.filter(a=>a.id!==r)),this.activePreset.get(n)===r&&this.activePreset.set(n,null);const o=this.panels.get(n);o&&this.snapshots.set(n,{...o.values}),this.notify(n)}getPresets(n){return this.presets.get(n)??[]}getActivePresetId(n){return this.activePreset.get(n)??null}clearActivePreset(n){const r=this.panels.get(n),i=this.baseValues.get(n);r&&i&&(r.values={...i},this.snapshots.set(n,{...r.values})),this.activePreset.set(n,null),this.notify(n)}notify(n){var r;(r=this.listeners.get(n))==null||r.forEach(i=>i())}notifyGlobal(){this.globalListeners.forEach(n=>n())}initTransitionModes(n,r,i){for(const[o,a]of Object.entries(n)){if(o==="_collapsed")continue;const d=r?`${r}.${o}`:o;if(this.isEasingConfig(a))i[`${d}.__mode`]="easing";else if(this.isSpringConfig(a)){const c=a.stiffness!==void 0||a.damping!==void 0||a.mass!==void 0,p=a.visualDuration!==void 0||a.bounce!==void 0;i[`${d}.__mode`]=c&&!p?"advanced":"simple"}else typeof a=="object"&&a!==null&&!Array.isArray(a)&&!this.isActionConfig(a)&&!this.isSelectConfig(a)&&!this.isColorConfig(a)&&!this.isTextConfig(a)&&this.initTransitionModes(a,d,i)}}parseConfig(n,r){const i=[];for(const[o,a]of Object.entries(n)){if(o==="_collapsed")continue;const d=r?`${r}.${o}`:o,c=this.formatLabel(o);if(Array.isArray(a)&&a.length<=4&&typeof a[0]=="number")i.push({type:"slider",path:d,label:c,min:a[1],max:a[2],step:a[3]??this.inferStep(a[1],a[2])});else if(typeof a=="number"){const{min:p,max:h,step:m}=this.inferRange(a);i.push({type:"slider",path:d,label:c,min:p,max:h,step:m})}else if(typeof a=="boolean")i.push({type:"toggle",path:d,label:c});else if(this.isSpringConfig(a)||this.isEasingConfig(a))i.push({type:"transition",path:d,label:c});else if(this.isActionConfig(a))i.push({type:"action",path:d,label:a.label||c});else if(this.isSelectConfig(a))i.push({type:"select",path:d,label:c,options:a.options});else if(this.isColorConfig(a))i.push({type:"color",path:d,label:c});else if(this.isTextConfig(a))i.push({type:"text",path:d,label:c,placeholder:a.placeholder});else if(typeof a=="string")this.isHexColor(a)?i.push({type:"color",path:d,label:c}):i.push({type:"text",path:d,label:c});else if(typeof a=="object"&&a!==null){const p=a,h="_collapsed"in p?!p._collapsed:!0;i.push({type:"folder",path:d,label:c,defaultOpen:h,children:this.parseConfig(p,d)})}}return i}flattenValues(n,r){const i={};for(const[o,a]of Object.entries(n)){if(o==="_collapsed")continue;const d=r?`${r}.${o}`:o;if(Array.isArray(a)&&a.length<=4&&typeof a[0]=="number")i[d]=a[0];else if(typeof a=="number"||typeof a=="boolean"||typeof a=="string")i[d]=a;else if(this.isSpringConfig(a)||this.isEasingConfig(a))i[d]=a;else if(this.isActionConfig(a))i[d]=a;else if(this.isSelectConfig(a)){const c=a.options[0],p=typeof c=="string"?c:c.value;i[d]=a.default??p}else this.isColorConfig(a)?i[d]=a.default??"#000000":this.isTextConfig(a)?i[d]=a.default??"":typeof a=="object"&&a!==null&&Object.assign(i,this.flattenValues(a,d))}return i}isSpringConfig(n){return typeof n=="object"&&n!==null&&"type"in n&&n.type==="spring"}isEasingConfig(n){return typeof n=="object"&&n!==null&&"type"in n&&n.type==="easing"}isActionConfig(n){return typeof n=="object"&&n!==null&&"type"in n&&n.type==="action"}isSelectConfig(n){return typeof n=="object"&&n!==null&&"type"in n&&n.type==="select"&&"options"in n&&Array.isArray(n.options)}isColorConfig(n){return typeof n=="object"&&n!==null&&"type"in n&&n.type==="color"}isTextConfig(n){return typeof n=="object"&&n!==null&&"type"in n&&n.type==="text"}isHexColor(n){return/^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/.test(n)}formatLabel(n){return n.replace(/([A-Z])/g," $1").replace(/^./,r=>r.toUpperCase()).trim()}inferRange(n){return n>=0&&n<=1?{min:0,max:1,step:.01}:n>=0&&n<=10?{min:0,max:n*3||10,step:.1}:n>=0&&n<=100?{min:0,max:n*3||100,step:1}:n>=0?{min:0,max:n*3||1e3,step:10}:{min:n*3,max:-n*3,step:1}}inferStep(n,r){const i=r-n;return i<=1?.01:i<=10?.1:i<=100?1:10}normalizePreservedValue(n,r,i){if(n===void 0||!i)return r;switch(i.type){case"slider":{if(typeof n!="number"||typeof r!="number")return r;const o=i.min??Number.NEGATIVE_INFINITY,a=i.max??Number.POSITIVE_INFINITY,d=Math.min(a,Math.max(o,n));return typeof i.step!="number"||i.step<=0?d:this.roundToStep(d,o,a,i.step)}case"toggle":return typeof n=="boolean"?n:r;case"select":{if(typeof n!="string")return r;const o=i.options??[];return new Set(o.map(d=>typeof d=="string"?d:d.value)).has(n)?n:r}case"color":case"text":return typeof n=="string"?n:r;case"transition":return this.isSpringConfig(r)?this.isSpringConfig(n)?n:r:this.isEasingConfig(r)&&this.isEasingConfig(n)?n:r;case"action":return r;default:return r}}roundToStep(n,r,i,o){const a=r+Math.round((n-r)/o)*o,d=Math.min(i,Math.max(r,a)),c=this.stepPrecision(o);return Number(d.toFixed(c))}stepPrecision(n){const r=String(n),i=r.indexOf(".");return i===-1?0:r.length-i-1}mapControlsByPath(n){const r=new Map,i=o=>{for(const a of o){if(a.type==="folder"&&a.children){i(a.children);continue}r.set(a.path,a)}};return i(n),r}},xe=new $5;function Gs(n,r,i){const o=b.useId(),a=`${n}-${o}`,d=b.useRef(r),c=JSON.stringify(r);d.current=r;const p=b.useRef(i==null?void 0:i.onAction);p.current=i==null?void 0:i.onAction,b.useEffect(()=>(xe.registerPanel(a,n,d.current),()=>xe.unregisterPanel(a)),[a,n]);const h=b.useRef(!1);b.useEffect(()=>{if(!h.current){h.current=!0;return}xe.updatePanel(a,n,d.current)},[a,n,c]),b.useEffect(()=>xe.subscribeActions(a,g=>{var y;(y=p.current)==null||y.call(p,g)}),[a]);const m=b.useSyncExternalStore(g=>xe.subscribe(a,g),()=>xe.getValues(a),()=>xe.getValues(a));return S0(r,m,"")}function S0(n,r,i){const o={};for(const[a,d]of Object.entries(n)){if(a==="_collapsed")continue;const c=i?`${i}.${a}`:a;if(Array.isArray(d)&&d.length<=4&&typeof d[0]=="number")o[a]=r[c]??d[0];else if(typeof d=="number"||typeof d=="boolean"||typeof d=="string")o[a]=r[c]??d;else if(X5(d)||Q5(d))o[a]=r[c]??d;else if(K5(d))o[a]=r[c]??d;else if(G5(d)){const p=d.default??q5(d.options);o[a]=r[c]??p}else Z5(d)?o[a]=r[c]??d.default??"#000000":J5(d)?o[a]=r[c]??d.default??"":typeof d=="object"&&d!==null&&(o[a]=S0(d,r,c))}return o}function Gr(n,r){return typeof n=="object"&&n!==null&&"type"in n&&n.type===r}function X5(n){return Gr(n,"spring")}function Q5(n){return Gr(n,"easing")}function K5(n){return Gr(n,"action")}function G5(n){return Gr(n,"select")&&"options"in n&&Array.isArray(n.options)}function Z5(n){return Gr(n,"color")}function J5(n){return Gr(n,"text")}function q5(n){const r=n[0];return typeof r=="string"?r:r.value}function Do({title:n,children:r,defaultOpen:i=!0,isRoot:o=!1,inline:a=!1,onOpenChange:d,toolbar:c}){const[p,h]=b.useState(i),[m,g]=b.useState(!i),y=b.useRef(null),[x,S]=b.useState(void 0);b.useEffect(()=>{const P=y.current;if(!P)return;const A=new ResizeObserver(()=>{if(p){const R=P.offsetHeight;S(N=>N===R?N:R)}});return A.observe(P),()=>A.disconnect()},[p]);const j=()=>{if(a&&o)return;const P=!p;h(P),g(!P),d==null||d(P)},k=v.jsxs("div",{ref:o?y:void 0,className:`dialkit-folder ${o?"dialkit-folder-root":""}`,children:[v.jsxs("div",{className:`dialkit-folder-header ${o?"dialkit-panel-header":""}`,onClick:j,children:[v.jsxs("div",{className:"dialkit-folder-header-top",children:[o?p&&v.jsx("div",{className:"dialkit-folder-title-row",children:v.jsx("span",{className:"dialkit-folder-title dialkit-folder-title-root",children:n})}):v.jsx("div",{className:"dialkit-folder-title-row",children:v.jsx("span",{className:"dialkit-folder-title",children:n})}),o&&!a&&v.jsxs("svg",{className:"dialkit-panel-icon",viewBox:"0 0 16 16",fill:"none",children:[v.jsx("path",{opacity:"0.5",d:"M6.84766 11.75C6.78583 11.9899 6.75 12.2408 6.75 12.5C6.75 12.7592 6.78583 13.0101 6.84766 13.25H2C1.58579 13.25 1.25 12.9142 1.25 12.5C1.25 12.0858 1.58579 11.75 2 11.75H6.84766ZM14 11.75C14.4142 11.75 14.75 12.0858 14.75 12.5C14.75 12.9142 14.4142 13.25 14 13.25H12.6523C12.7142 13.0101 12.75 12.7592 12.75 12.5C12.75 12.2408 12.7142 11.9899 12.6523 11.75H14ZM3.09766 7.25C3.03583 7.48994 3 7.74075 3 8C3 8.25925 3.03583 8.51006 3.09766 8.75H2C1.58579 8.75 1.25 8.41421 1.25 8C1.25 7.58579 1.58579 7.25 2 7.25H3.09766ZM14 7.25C14.4142 7.25 14.75 7.58579 14.75 8C14.75 8.41421 14.4142 8.75 14 8.75H8.90234C8.96417 8.51006 9 8.25925 9 8C9 7.74075 8.96417 7.48994 8.90234 7.25H14ZM7.59766 2.75C7.53583 2.98994 7.5 3.24075 7.5 3.5C7.5 3.75925 7.53583 4.01006 7.59766 4.25H2C1.58579 4.25 1.25 3.91421 1.25 3.5C1.25 3.08579 1.58579 2.75 2 2.75H7.59766ZM14 2.75C14.4142 2.75 14.75 3.08579 14.75 3.5C14.75 3.91421 14.4142 4.25 14 4.25H13.4023C13.4642 4.01006 13.5 3.75925 13.5 3.5C13.5 3.24075 13.4642 2.98994 13.4023 2.75H14Z",fill:"currentColor"}),v.jsx("circle",{cx:"6",cy:"8",r:"0.998596",fill:"currentColor",stroke:"currentColor",strokeWidth:"1.25"}),v.jsx("circle",{cx:"10.4999",cy:"3.5",r:"0.998657",fill:"currentColor",stroke:"currentColor",strokeWidth:"1.25"}),v.jsx("circle",{cx:"9.75015",cy:"12.5",r:"0.997986",fill:"currentColor",stroke:"currentColor",strokeWidth:"1.25"})]}),!o&&v.jsx(fe.svg,{className:"dialkit-folder-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",initial:!1,animate:{rotate:p?0:180},transition:{type:"spring",visualDuration:.35,bounce:.15},children:v.jsx("path",{d:"M6 9.5L12 15.5L18 9.5"})})]}),o&&c&&p&&v.jsx("div",{className:"dialkit-panel-toolbar",onClick:P=>P.stopPropagation(),children:c})]}),v.jsx(ur,{initial:!1,children:p&&v.jsx(fe.div,{className:"dialkit-folder-content",initial:o?void 0:{height:0,opacity:0},animate:o?void 0:{height:"auto",opacity:1},exit:o?void 0:{height:0,opacity:0},transition:o?void 0:{type:"spring",visualDuration:.35,bounce:.1},style:o?void 0:{clipPath:"inset(0 -20px)"},children:v.jsx("div",{className:"dialkit-folder-inner",children:r})})})]});if(o){if(a)return v.jsx("div",{className:"dialkit-panel-inner dialkit-panel-inline",children:k});const P=p?{width:280,height:x!==void 0?x+24:"auto",borderRadius:14,boxShadow:"0 8px 32px rgba(0, 0, 0, 0.5)",cursor:void 0}:{width:42,height:42,borderRadius:21,boxShadow:"0 4px 16px rgba(0, 0, 0, 0.25)",overflow:"hidden",cursor:"pointer"};return v.jsx(fe.div,{className:"dialkit-panel-inner",style:P,onClick:p?void 0:j,"data-collapsed":m,whileTap:p?void 0:{scale:.9},transition:{type:"spring",visualDuration:.15,bounce:.3},children:k})}return k}var e2=3,t2=32,n2=200,r2=8;function bu(n){const r=n.toString(),i=r.indexOf(".");return i===-1?0:r.length-i-1}function Ka(n,r){const i=Math.round(n/r)*r;return parseFloat(i.toFixed(bu(r)))}function s2(n,r,i){const o=(n-r)/(i-r),a=Math.round(o*10)/10;return Math.abs(o-a)<=.03125?r+a*(i-r):n}function ht({label:n,value:r,onChange:i,min:o=0,max:a=1,step:d=.01,unit:c}){var dr;const p=b.useRef(null),h=b.useRef(null),m=b.useRef(null),g=b.useRef(null),y=b.useRef(null),[x,S]=b.useState(!1),[j,k]=b.useState(!1),[P,A]=b.useState(!1),[R,N]=b.useState(!1),[I,z]=b.useState(!1),[Q,q]=b.useState(!1),[X,$]=b.useState(""),ne=b.useRef(null),me=b.useRef(null),_e=b.useRef(!0),pe=b.useRef(null),we=b.useRef(null),ce=b.useRef(1),Se=(r-o)/(a-o)*100,le=x||P,V=Su(Se),U=yo(V,re=>`${re}%`),H=yo(V,re=>`max(5px, calc(${re}% - 9px))`),T=Su(0),O=yo(T,re=>`calc(100% + ${Math.abs(re)}px)`),oe=yo(T,re=>re<0?re:0);b.useEffect(()=>{!x&&!pe.current&&V.jump(Se)},[Se,x,V]);const ae=b.useCallback(re=>{const De=we.current;if(!De)return r;const vt=(re-De.left)/ce.current,Ft=p.current?p.current.offsetWidth:De.width,Wn=Math.max(0,Math.min(1,vt/Ft)),fr=o+Wn*(a-o);return Math.max(o,Math.min(a,fr))},[o,a,r]),de=b.useCallback(re=>(re-o)/(a-o)*100,[o,a]),he=b.useCallback((re,De)=>{const Ge=we.current;if(!Ge)return 0;const vt=De<0?Ge.left-re:re-Ge.right,Ft=Math.max(0,vt-t2);return De*r2*Math.sqrt(Math.min(Ft/n2,1))},[]),ve=b.useCallback(re=>{if(!Q&&(re.preventDefault(),re.target.setPointerCapture(re.pointerId),me.current={x:re.clientX,y:re.clientY},_e.current=!0,S(!0),p.current)){we.current=p.current.getBoundingClientRect();const De=p.current.offsetWidth;ce.current=we.current.width/De}},[Q]),ge=b.useCallback(re=>{if(!x||!me.current)return;const De=re.clientX-me.current.x,Ge=re.clientY-me.current.y,vt=Math.sqrt(De*De+Ge*Ge);if(_e.current&&vt>e2&&(_e.current=!1,k(!0)),!_e.current){const Ft=we.current;Ft&&(re.clientX<Ft.left?T.jump(he(re.clientX,-1)):re.clientX>Ft.right?T.jump(he(re.clientX,1)):T.jump(0));const Wn=ae(re.clientX),fr=de(Wn);pe.current&&(pe.current.stop(),pe.current=null),V.jump(fr),i(Ka(Wn,d))}},[x,ae,de,i,V,T,he]),ke=b.useCallback(re=>{if(x){if(_e.current){const De=ae(re.clientX),vt=(a-o)/d<=10?Math.max(o,Math.min(a,o+Math.round((De-o)/d)*d)):s2(De,o,a),Ft=de(vt);pe.current&&pe.current.stop(),pe.current=wh(V,Ft,{type:"spring",stiffness:300,damping:25,mass:.8,onComplete:()=>{pe.current=null}}),i(Ka(vt,d))}T.get()!==0&&wh(T,0,{type:"spring",visualDuration:.35,bounce:.15}),S(!1),k(!1),me.current=null}},[x,ae,de,i,o,a,V,T]);b.useEffect(()=>(R&&!Q&&!I?ne.current=setTimeout(()=>{z(!0)},800):!R&&!Q&&(ne.current&&(clearTimeout(ne.current),ne.current=null),z(!1)),()=>{ne.current&&clearTimeout(ne.current)}),[R,Q,I]),b.useEffect(()=>{Q&&m.current&&(m.current.focus(),m.current.select())},[Q]);const tt=re=>{$(re.target.value)},Mt=()=>{const re=parseFloat(X);if(!isNaN(re)){const De=Math.max(o,Math.min(a,re));i(Ka(De,d))}q(!1),N(!1),z(!1)},Un=re=>{I&&(re.stopPropagation(),re.preventDefault(),q(!0),$(r.toFixed(bu(d))))},_n=re=>{re.key==="Enter"?Mt():re.key==="Escape"&&(q(!1),N(!1))},Te=()=>{Mt()},Re=r.toFixed(bu(d)),Qe=8,lt=10,at=10;let ut=30,nt=78;const Ke=(dr=p.current)==null?void 0:dr.offsetWidth;Ke&&Ke>0&&(g.current&&(ut=(lt+g.current.offsetWidth+Qe)/Ke*100),y.current&&(nt=(Ke-at-y.current.offsetWidth-Qe)/Ke*100));const cr=Se<ut||Se>nt,ni=le?cr?.1:j?.9:.5:0,ri=le?"rgba(255, 255, 255, 0.15)":"rgba(255, 255, 255, 0.11)",Zr=(a-o)/d,si=Zr<=10?Array.from({length:Zr-1},(re,De)=>{const Ge=(De+1)*d/(a-o)*100;return v.jsx("div",{className:"dialkit-slider-hashmark",style:{left:`${Ge}%`}},De)}):Array.from({length:9},(re,De)=>{const Ge=(De+1)*10;return v.jsx("div",{className:"dialkit-slider-hashmark",style:{left:`${Ge}%`}},De)});return v.jsx("div",{ref:p,className:"dialkit-slider-wrapper",children:v.jsxs(fe.div,{ref:h,className:`dialkit-slider ${le?"dialkit-slider-active":""}`,onPointerDown:ve,onPointerMove:ge,onPointerUp:ke,onMouseEnter:()=>A(!0),onMouseLeave:()=>A(!1),style:{width:O,x:oe},children:[v.jsx("div",{className:"dialkit-slider-hashmarks",children:si}),v.jsx(fe.div,{className:"dialkit-slider-fill",style:{background:ri,width:U,transition:"background 0.15s"}}),v.jsx(fe.div,{className:"dialkit-slider-handle",style:{left:H,y:"-50%",background:"rgba(255, 255, 255, 0.9)"},animate:{opacity:ni,scaleX:le?1:.25,scaleY:le&&cr?.75:1},transition:{scaleX:{type:"spring",visualDuration:.25,bounce:.15},scaleY:{type:"spring",visualDuration:.2,bounce:.1},opacity:{duration:.15}}}),v.jsx("span",{ref:g,className:"dialkit-slider-label",children:n}),Q?v.jsx("input",{ref:m,type:"text",className:"dialkit-slider-input",value:X,onChange:tt,onKeyDown:_n,onBlur:Te,onClick:re=>re.stopPropagation(),onMouseDown:re=>re.stopPropagation()}):v.jsx("span",{ref:y,className:`dialkit-slider-value ${I?"dialkit-slider-value-editable":""}`,onMouseEnter:()=>N(!0),onMouseLeave:()=>N(!1),onClick:Un,onMouseDown:re=>I&&re.stopPropagation(),style:{cursor:I?"text":"default"},children:Re})]})})}function sc({options:n,value:r,onChange:i}){const o=b.useRef(null),a=b.useRef(new Map),[d,c]=b.useState(null),p=b.useRef(!1);return b.useLayoutEffect(()=>{const h=a.current.get(r),m=o.current;if(h&&m){const g=m.getBoundingClientRect(),y=h.getBoundingClientRect();c({left:y.left-g.left,width:y.width})}},[r]),v.jsxs("div",{ref:o,className:"dialkit-segmented",children:[d&&v.jsx(fe.div,{className:"dialkit-segmented-pill",style:{left:d.left,width:d.width},animate:{left:d.left,width:d.width},transition:p.current?{type:"spring",visualDuration:.2,bounce:.15}:{duration:0},onAnimationComplete:()=>{p.current=!0}}),n.map(h=>{const m=r===h.value;return v.jsx("button",{ref:g=>{g&&a.current.set(h.value,g)},onClick:()=>i(h.value),className:"dialkit-segmented-button","data-active":String(m),children:h.label},h.value)})]})}function i2({label:n,checked:r,onChange:i}){return v.jsxs("div",{className:"dialkit-labeled-control",children:[v.jsx("span",{className:"dialkit-labeled-control-label",children:n}),v.jsx(sc,{options:[{value:"off",label:"Off"},{value:"on",label:"On"}],value:r?"on":"off",onChange:o=>i(o==="on")})]})}function o2(n,r,i,o){const a=[],c=o/100;let p=0,h=0;const m=1;for(let g=0;g<=100;g++){const y=g*c;a.push([y,p]);const x=-n*(p-m),S=-r*h,j=(x+S)/i;h+=j*c,p+=h*c}return a}function b0({spring:n,isSimpleMode:r}){let a,d,c;if(r){const k=n.visualDuration??.3,P=n.bounce??.2;c=1,a=2*Math.PI/k,a=Math.pow(a,2),d=2*(1-P)*Math.sqrt(a*c)}else a=n.stiffness??400,d=n.damping??17,c=n.mass??1;const p=2,h=o2(a,d,c,p),m=h.map(([,k])=>k),g=Math.min(...m),x=Math.max(...m)-g,S=h.map(([k,P],A)=>{const R=k/p*256,I=140-((P-g)/(x||1)*140*.6+140*.2);return`${A===0?"M":"L"} ${R} ${I}`}).join(" "),j=[];for(let k=1;k<4;k++){const P=64*k,A=140/4*k;j.push(v.jsx("line",{x1:P,y1:0,x2:P,y2:140,stroke:"rgba(255, 255, 255, 0.08)",strokeWidth:"1"},`v-${k}`),v.jsx("line",{x1:0,y1:A,x2:256,y2:A,stroke:"rgba(255, 255, 255, 0.08)",strokeWidth:"1"},`h-${k}`))}return v.jsxs("svg",{viewBox:"0 0 256 140",className:"dialkit-spring-viz",children:[j,v.jsx("line",{x1:0,y1:140/2,x2:256,y2:140/2,stroke:"rgba(255, 255, 255, 0.15)",strokeWidth:"1",strokeDasharray:"4,4"}),v.jsx("path",{d:S,fill:"none",stroke:"rgba(255, 255, 255, 0.6)",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})}function l2({panelId:n,path:r,label:i,spring:o,onChange:a}){const d=b.useSyncExternalStore(m=>xe.subscribe(n,m),()=>xe.getSpringMode(n,r),()=>xe.getSpringMode(n,r)),c=d==="simple",p=m=>{if(xe.updateSpringMode(n,r,m),m==="simple"){const{stiffness:g,damping:y,mass:x,...S}=o;a({...S,type:"spring",visualDuration:o.visualDuration??.3,bounce:o.bounce??.2})}else{const{visualDuration:g,bounce:y,...x}=o;a({...x,type:"spring",stiffness:o.stiffness??200,damping:o.damping??25,mass:o.mass??1})}},h=(m,g)=>{if(c){const{stiffness:y,damping:x,mass:S,...j}=o;a({...j,[m]:g})}else{const{visualDuration:y,bounce:x,...S}=o;a({...S,[m]:g})}};return v.jsx(Do,{title:i,defaultOpen:!0,children:v.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6},children:[v.jsx(b0,{spring:o,isSimpleMode:c}),v.jsxs("div",{className:"dialkit-labeled-control",children:[v.jsx("span",{className:"dialkit-labeled-control-label",children:"Type"}),v.jsx(sc,{options:[{value:"simple",label:"Time"},{value:"advanced",label:"Physics"}],value:d,onChange:p})]}),c?v.jsxs(v.Fragment,{children:[v.jsx(ht,{label:"Duration",value:o.visualDuration??.3,onChange:m=>h("visualDuration",m),min:.1,max:1,step:.05,unit:"s"}),v.jsx(ht,{label:"Bounce",value:o.bounce??.2,onChange:m=>h("bounce",m),min:0,max:1,step:.05})]}):v.jsxs(v.Fragment,{children:[v.jsx(ht,{label:"Stiffness",value:o.stiffness??400,onChange:m=>h("stiffness",m),min:1,max:1e3,step:10}),v.jsx(ht,{label:"Damping",value:o.damping??17,onChange:m=>h("damping",m),min:1,max:100,step:1}),v.jsx(ht,{label:"Mass",value:o.mass??1,onChange:m=>h("mass",m),min:.1,max:10,step:.1})]})]})})}function a2({easing:n}){const r=n.ease,i=200,o=10,d=(i-o*2)/2,c=(x,S)=>({x:o+(x+.5)*d,y:o+(1.5-S)*d}),p=c(0,0),h=c(1,1),m=c(r[0],r[1]),g=c(r[2],r[3]),y=`M ${p.x} ${p.y} C ${m.x} ${m.y}, ${g.x} ${g.y}, ${h.x} ${h.y}`;return v.jsxs("svg",{viewBox:`0 0 ${i} ${i}`,preserveAspectRatio:"xMidYMid slice",className:"dialkit-spring-viz dialkit-easing-viz",children:[v.jsx("line",{x1:p.x,y1:p.y,x2:h.x,y2:h.y,stroke:"rgba(255, 255, 255, 0.15)",strokeWidth:"1",strokeDasharray:"4,4"}),v.jsx("path",{d:y,fill:"none",stroke:"rgba(255, 255, 255, 0.6)",strokeWidth:"2",strokeLinecap:"round"})]})}function u2({panelId:n,path:r,label:i,value:o,onChange:a}){const d=b.useSyncExternalStore(S=>xe.subscribe(n,S),()=>xe.getTransitionMode(n,r),()=>xe.getTransitionMode(n,r)),c=d==="easing",p=d==="simple",h=o.type==="spring"?o:{type:"spring",visualDuration:.3,bounce:.2},m=o.type==="easing"?o:{type:"easing",duration:.3,ease:[1,-.4,.5,1]},g=S=>{if(xe.updateTransitionMode(n,r,S),S==="easing"){const j=o.type==="spring"?o.visualDuration??.3:o.duration;a({type:"easing",duration:j,ease:m.ease})}else a(S==="simple"?{type:"spring",visualDuration:h.visualDuration??(o.type==="easing"?o.duration:.3),bounce:h.bounce??.2}:{type:"spring",stiffness:h.stiffness??200,damping:h.damping??25,mass:h.mass??1})},y=(S,j)=>{if(p){const{stiffness:k,damping:P,mass:A,...R}=h;a({...R,[S]:j})}else{const{visualDuration:k,bounce:P,...A}=h;a({...A,[S]:j})}},x=(S,j)=>{const k=[...m.ease];k[S]=j,a({...m,ease:k})};return v.jsx(Do,{title:i,defaultOpen:!0,children:v.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6},children:[c?v.jsx(a2,{easing:m}):v.jsx(b0,{spring:h,isSimpleMode:p}),v.jsxs("div",{className:"dialkit-labeled-control",children:[v.jsx("span",{className:"dialkit-labeled-control-label",children:"Type"}),v.jsx(sc,{options:[{value:"easing",label:"Easing"},{value:"simple",label:"Time"},{value:"advanced",label:"Physics"}],value:d,onChange:g})]}),c?v.jsxs(v.Fragment,{children:[v.jsx(ht,{label:"x1",value:m.ease[0],onChange:S=>x(0,S),min:0,max:1,step:.01}),v.jsx(ht,{label:"y1",value:m.ease[1],onChange:S=>x(1,S),min:-1,max:2,step:.01}),v.jsx(ht,{label:"x2",value:m.ease[2],onChange:S=>x(2,S),min:0,max:1,step:.01}),v.jsx(ht,{label:"y2",value:m.ease[3],onChange:S=>x(3,S),min:-1,max:2,step:.01}),v.jsx(ht,{label:"Duration",value:m.duration,onChange:S=>a({...m,duration:S}),min:.1,max:2,step:.05,unit:"s"}),v.jsx(d2,{ease:m.ease,onChange:S=>a({...m,ease:S})})]}):p?v.jsxs(v.Fragment,{children:[v.jsx(ht,{label:"Duration",value:h.visualDuration??.3,onChange:S=>y("visualDuration",S),min:.1,max:1,step:.05,unit:"s"}),v.jsx(ht,{label:"Bounce",value:h.bounce??.2,onChange:S=>y("bounce",S),min:0,max:1,step:.05})]}):v.jsxs(v.Fragment,{children:[v.jsx(ht,{label:"Stiffness",value:h.stiffness??400,onChange:S=>y("stiffness",S),min:1,max:1e3,step:10}),v.jsx(ht,{label:"Damping",value:h.damping??17,onChange:S=>y("damping",S),min:1,max:100,step:1}),v.jsx(ht,{label:"Mass",value:h.mass??1,onChange:S=>y("mass",S),min:.1,max:10,step:.1})]})]})})}function kh(n){return n.map(r=>parseFloat(r.toFixed(2))).join(", ")}function c2(n){const r=n.split(",").map(i=>parseFloat(i.trim()));return r.length===4&&r.every(i=>!isNaN(i))?r:null}function d2({ease:n,onChange:r}){const[i,o]=b.useState(!1),[a,d]=b.useState(""),c=()=>{d(kh(n)),o(!0)},p=()=>{const m=c2(a);m&&r(m),o(!1)},h=m=>{m.key==="Enter"&&m.target.blur()};return v.jsxs("div",{className:"dialkit-labeled-control",children:[v.jsx("span",{className:"dialkit-labeled-control-label",children:"Ease"}),v.jsx("input",{type:"text",className:"dialkit-text-input",value:i?a:kh(n),onChange:m=>d(m.target.value),onFocus:c,onBlur:p,onKeyDown:h,spellCheck:!1})]})}function f2({label:n,value:r,onChange:i,placeholder:o}){return v.jsxs("div",{className:"dialkit-text-control",children:[v.jsx("label",{className:"dialkit-text-label",children:n}),v.jsx("input",{type:"text",className:"dialkit-text-input",value:r,onChange:a=>i(a.target.value),placeholder:o})]})}function p2(n){return n.replace(/\b\w/g,r=>r.toUpperCase())}function h2(n){return n.map(r=>typeof r=="string"?{value:r,label:p2(r)}:r)}function m2({label:n,value:r,options:i,onChange:o}){const[a,d]=b.useState(!1),c=b.useRef(null),p=b.useRef(null),[h,m]=b.useState(null),[g,y]=b.useState(null),x=h2(i),S=x.find(k=>k.value===r),j=b.useCallback(()=>{const k=c.current;if(!k)return;const P=k.getBoundingClientRect(),A=8+x.length*36,R=window.innerHeight-P.bottom-4,N=R<A&&P.top>R;y({top:N?P.top-4:P.bottom+4,left:P.left,width:P.width,above:N})},[x.length]);return b.useEffect(()=>{var P;const k=(P=c.current)==null?void 0:P.closest(".dialkit-root");m(k??document.body)},[]),b.useEffect(()=>{a&&j()},[a,j]),b.useEffect(()=>{if(!a)return;const k=P=>{const A=P.target;c.current&&!c.current.contains(A)&&p.current&&!p.current.contains(A)&&d(!1)};return document.addEventListener("mousedown",k),()=>document.removeEventListener("mousedown",k)},[a]),v.jsxs("div",{className:"dialkit-select-row",children:[v.jsxs("button",{ref:c,className:"dialkit-select-trigger",onClick:()=>d(!a),"data-open":String(a),children:[v.jsx("span",{className:"dialkit-select-label",children:n}),v.jsxs("div",{className:"dialkit-select-right",children:[v.jsx("span",{className:"dialkit-select-value",children:(S==null?void 0:S.label)??r}),v.jsx(fe.svg,{className:"dialkit-select-chevron",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",animate:{rotate:a?180:0},transition:{type:"spring",visualDuration:.2,bounce:.15},children:v.jsx("path",{d:"M6 9.5L12 15.5L18 9.5"})})]})]}),h&&Pu.createPortal(v.jsx(ur,{children:a&&g&&v.jsx(fe.div,{ref:p,className:"dialkit-select-dropdown",initial:{opacity:0,y:g.above?8:-8,scale:.95},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:g.above?8:-8,scale:.95},transition:{type:"spring",visualDuration:.15,bounce:0},style:{position:"fixed",left:g.left,width:g.width,...g.above?{bottom:window.innerHeight-g.top,transformOrigin:"bottom"}:{top:g.top,transformOrigin:"top"}},children:x.map(k=>v.jsx("button",{className:"dialkit-select-option","data-selected":String(k.value===r),onClick:()=>{o(k.value),d(!1)},children:k.label},k.value))})}),h)]})}var _2=/^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/;function g2({label:n,value:r,onChange:i}){const[o,a]=b.useState(!1),[d,c]=b.useState(r),p=b.useRef(null);b.useEffect(()=>{o||c(r)},[r,o]);function h(){a(!1),_2.test(d)?i(d):c(r)}function m(g){g.key==="Enter"?h():g.key==="Escape"&&(a(!1),c(r))}return v.jsxs("div",{className:"dialkit-color-control",children:[v.jsx("span",{className:"dialkit-color-label",children:n}),v.jsxs("div",{className:"dialkit-color-inputs",children:[o?v.jsx("input",{type:"text",className:"dialkit-color-hex-input",value:d,onChange:g=>c(g.target.value),onBlur:h,onKeyDown:m,autoFocus:!0}):v.jsx("span",{className:"dialkit-color-hex",onClick:()=>a(!0),children:(r??"").toUpperCase()}),v.jsx("button",{className:"dialkit-color-swatch",style:{backgroundColor:r},onClick:()=>{var g;return(g=p.current)==null?void 0:g.click()},title:"Pick color"}),v.jsx("input",{ref:p,type:"color",className:"dialkit-color-picker-native",value:r.length===4?y2(r):r.slice(0,7),onChange:g=>i(g.target.value)})]})]})}function y2(n){return n.length!==4?n:`#${n[1]}${n[1]}${n[2]}${n[2]}${n[3]}${n[3]}`}function v2({panelId:n,presets:r,activePresetId:i,onAdd:o}){const[a,d]=b.useState(!1),c=b.useRef(null),p=b.useRef(null),[h,m]=b.useState({top:0,left:0,width:0}),g=r.length>0,y=r.find(A=>A.id===i),x=b.useCallback(()=>{var R;if(!g)return;const A=(R=c.current)==null?void 0:R.getBoundingClientRect();A&&m({top:A.bottom+4,left:A.left,width:A.width}),d(!0)},[g]),S=b.useCallback(()=>d(!1),[]),j=b.useCallback(()=>{a?S():x()},[a,x,S]);b.useEffect(()=>{if(!a)return;const A=R=>{var I,z;const N=R.target;(I=c.current)!=null&&I.contains(N)||(z=p.current)!=null&&z.contains(N)||S()};return document.addEventListener("mousedown",A),()=>document.removeEventListener("mousedown",A)},[a,S]);const k=A=>{A?xe.loadPreset(n,A):xe.clearActivePreset(n),S()},P=(A,R)=>{A.stopPropagation(),xe.deletePreset(n,R)};return v.jsxs("div",{className:"dialkit-preset-manager",children:[v.jsxs("button",{ref:c,className:"dialkit-preset-trigger",onClick:j,"data-open":String(a),"data-has-preset":String(!!y),"data-disabled":String(!g),children:[v.jsx("span",{className:"dialkit-preset-label",children:y?y.name:"Version 1"}),v.jsx(fe.svg,{className:"dialkit-select-chevron",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",animate:{rotate:a?180:0,opacity:g?.6:.25},transition:{type:"spring",visualDuration:.2,bounce:.15},children:v.jsx("path",{d:"M6 9.5L12 15.5L18 9.5"})})]}),Pu.createPortal(v.jsx(ur,{children:a&&v.jsxs(fe.div,{ref:p,className:"dialkit-root dialkit-preset-dropdown",style:{position:"fixed",top:h.top,left:h.left,minWidth:h.width},initial:{opacity:0,y:4,scale:.97},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:4,scale:.97,pointerEvents:"none"},transition:{type:"spring",visualDuration:.15,bounce:0},children:[v.jsx("div",{className:"dialkit-preset-item","data-active":String(!i),onClick:()=>k(null),children:v.jsx("span",{className:"dialkit-preset-name",children:"Version 1"})}),r.map(A=>v.jsxs("div",{className:"dialkit-preset-item","data-active":String(A.id===i),onClick:()=>k(A.id),children:[v.jsx("span",{className:"dialkit-preset-name",children:A.name}),v.jsx("button",{className:"dialkit-preset-delete",onClick:R=>P(R,A.id),title:"Delete preset",children:v.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[v.jsx("path",{d:"M5 6.5L5.80734 18.2064C5.91582 19.7794 7.22348 21 8.80023 21H15.1998C16.7765 21 18.0842 19.7794 18.1927 18.2064L19 6.5"}),v.jsx("path",{d:"M10 11V16"}),v.jsx("path",{d:"M14 11V16"}),v.jsx("path",{d:"M3.5 6H20.5"}),v.jsx("path",{d:"M8.07092 5.74621C8.42348 3.89745 10.0485 2.5 12 2.5C13.9515 2.5 15.5765 3.89745 15.9291 5.74621"})]})})]},A.id))]})}),document.body)]})}function x2({panel:n,defaultOpen:r=!0,inline:i=!1}){const[o,a]=b.useState(!1),[d,c]=b.useState(r),p=b.useSyncExternalStore(k=>xe.subscribe(n.id,k),()=>xe.getValues(n.id),()=>xe.getValues(n.id)),h=xe.getPresets(n.id),m=xe.getActivePresetId(n.id),g=()=>{const k=h.length+2;xe.savePreset(n.id,`Version ${k}`)},y=()=>{const k=JSON.stringify(p,null,2),P=`Update the useDialKit configuration for "${n.name}" with these values:

\`\`\`json
${k}
\`\`\`

Apply these values as the new defaults in the useDialKit call.`;navigator.clipboard.writeText(P),a(!0),setTimeout(()=>a(!1),1500)},x=k=>{var A;const P=p[k.path];switch(k.type){case"slider":return v.jsx(ht,{label:k.label,value:P,onChange:R=>xe.updateValue(n.id,k.path,R),min:k.min,max:k.max,step:k.step},k.path);case"toggle":return v.jsx(i2,{label:k.label,checked:P,onChange:R=>xe.updateValue(n.id,k.path,R)},k.path);case"spring":return v.jsx(l2,{panelId:n.id,path:k.path,label:k.label,spring:P,onChange:R=>xe.updateValue(n.id,k.path,R)},k.path);case"transition":return v.jsx(u2,{panelId:n.id,path:k.path,label:k.label,value:P,onChange:R=>xe.updateValue(n.id,k.path,R)},k.path);case"folder":return v.jsx(Do,{title:k.label,defaultOpen:k.defaultOpen??!0,children:(A=k.children)==null?void 0:A.map(x)},k.path);case"text":return v.jsx(f2,{label:k.label,value:P,onChange:R=>xe.updateValue(n.id,k.path,R),placeholder:k.placeholder},k.path);case"select":return v.jsx(m2,{label:k.label,value:P,options:k.options??[],onChange:R=>xe.updateValue(n.id,k.path,R)},k.path);case"color":return v.jsx(g2,{label:k.label,value:P,onChange:R=>xe.updateValue(n.id,k.path,R)},k.path);case"action":return v.jsx("button",{className:"dialkit-button",onClick:()=>xe.triggerAction(n.id,k.path),children:k.label},k.path);default:return null}},S=()=>n.controls.map(x),j=v.jsxs(v.Fragment,{children:[v.jsx(fe.button,{className:"dialkit-toolbar-add",onClick:g,title:"Add preset",whileTap:{scale:.9},transition:{type:"spring",visualDuration:.15,bounce:.3},children:v.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[v.jsx("path",{d:"M4 6H20"}),v.jsx("path",{d:"M4 12H10"}),v.jsx("path",{d:"M15 15L21 15"}),v.jsx("path",{d:"M18 12V18"}),v.jsx("path",{d:"M4 18H10"})]})}),v.jsx(v2,{panelId:n.id,presets:h,activePresetId:m,onAdd:g}),v.jsxs(fe.button,{className:"dialkit-toolbar-copy",onClick:y,title:"Copy parameters",whileTap:{scale:.95},transition:{type:"spring",visualDuration:.15,bounce:.3},children:[v.jsx("span",{className:"dialkit-toolbar-copy-icon-wrap",children:v.jsx(ur,{initial:!1,mode:"popLayout",children:o?v.jsx(fe.svg,{className:"dialkit-toolbar-copy-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",initial:{scale:.5,opacity:0,filter:"blur(4px)"},animate:{scale:1,opacity:1,filter:"blur(0px)"},exit:{scale:.5,opacity:0,filter:"blur(4px)"},transition:{type:"spring",visualDuration:.3,bounce:.2},children:v.jsx("path",{d:"M5 12.75L10 19L19 5"})},"check"):v.jsxs(fe.svg,{className:"dialkit-toolbar-copy-icon",viewBox:"0 0 24 24",fill:"none",initial:{scale:.5,opacity:0,filter:"blur(4px)"},animate:{scale:1,opacity:1,filter:"blur(0px)"},exit:{scale:.5,opacity:0,filter:"blur(4px)"},transition:{type:"spring",visualDuration:.3,bounce:.2},children:[v.jsx("path",{d:"M8 6C8 4.34315 9.34315 3 11 3H13C14.6569 3 16 4.34315 16 6V7H8V6Z",stroke:"currentColor",strokeWidth:"2",strokeLinejoin:"round"}),v.jsx("path",{d:"M19.2405 16.1852L18.5436 14.3733C18.4571 14.1484 18.241 14 18 14C17.759 14 17.5429 14.1484 17.4564 14.3733L16.7595 16.1852C16.658 16.4493 16.4493 16.658 16.1852 16.7595L14.3733 17.4564C14.1484 17.5429 14 17.759 14 18C14 18.241 14.1484 18.4571 14.3733 18.5436L16.1852 19.2405C16.4493 19.342 16.658 19.5507 16.7595 19.8148L17.4564 21.6267C17.5429 21.8516 17.759 22 18 22C18.241 22 18.4571 21.8516 18.5436 21.6267L19.2405 19.8148C19.342 19.5507 19.5507 19.342 19.8148 19.2405L21.6267 18.5436C21.8516 18.4571 22 18.241 22 18C22 17.759 21.8516 17.5429 21.6267 17.4564L19.8148 16.7595C19.5507 16.658 19.342 16.4493 19.2405 16.1852Z",fill:"currentColor"}),v.jsx("path",{d:"M16 5H17C18.6569 5 20 6.34315 20 8V11M8 5H7C5.34315 5 4 6.34315 4 8V18C4 19.6569 5.34315 21 7 21H12",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]},"clipboard")})}),"Copy"]})]});return v.jsx("div",{className:"dialkit-panel-wrapper",children:v.jsx(Do,{title:n.name,defaultOpen:r,isRoot:!0,inline:i,onOpenChange:c,toolbar:j,children:S()})})}function w2({position:n="top-right",defaultOpen:r=!0,mode:i="popover"}){const[o,a]=b.useState([]),[d,c]=b.useState(!1),p=i==="inline";if(b.useEffect(()=>(c(!0),a(xe.getPanels()),xe.subscribeGlobal(()=>{a(xe.getPanels())})),[]),!d||typeof window>"u"||o.length===0)return null;const h=v.jsx("div",{className:"dialkit-root","data-mode":i,children:v.jsx("div",{className:"dialkit-panel","data-position":p?void 0:n,"data-mode":i,children:o.map(m=>v.jsx(x2,{panel:m,defaultOpen:p||r,inline:p},m.id))})});return p?h:Pu.createPortal(h,document.body)}function k2(n,r,i,o,a){const d=(m,g,y,x)=>{const S=(x-90)*Math.PI/180;return{x:m+y*Math.cos(S),y:g+y*Math.sin(S)}},c=d(n,r,i,a),p=d(n,r,i,o),h=a-o<=180?"0":"1";return`M ${c.x} ${c.y} A ${i} ${i} 0 ${h} 0 ${p.x} ${p.y}`}const Sh={party:{from:"#2BD94D",to:"#ffffff"},"feel-good":{from:"#D4A017",to:"#ffffff"},soft:{from:"#C06090",to:"#ffffff"},indie:{from:"#1A8A7A",to:"#ffffff"},nostalgic:{from:"#9A6030",to:"#ffffff"},sad:{from:"#2A3580",to:"#ffffff"},love:{from:"#C02040",to:"#ffffff"},hiphop:{from:"#351850",to:"#ffffff"}},sr=[{name:"party",paths:{lEye:"M 60 75 Q 75 55 90 75",rEye:"M 110 75 Q 125 55 140 75",mouth:"M 65 110 Q 100 160 135 110"}},{name:"feel-good",paths:{lEye:"M 60 85 Q 75 70 90 85",rEye:"M 110 85 Q 125 70 140 85",mouth:"M 70 115 Q 100 145 130 115"}},{name:"soft",paths:{lEye:"M 60 85 Q 75 90 90 85",rEye:"M 110 85 Q 125 90 140 85",mouth:"M 85 125 Q 100 130 115 125"}},{name:"indie",paths:{lEye:"M 60 82 Q 75 78 90 86",rEye:"M 110 86 Q 125 78 140 82",mouth:"M 75 128 Q 100 133 125 126"}},{name:"nostalgic",paths:{lEye:"M 60 82 Q 75 70 90 78",rEye:"M 110 78 Q 125 70 140 82",mouth:"M 78 128 Q 100 136 122 130"}},{name:"sad",paths:{lEye:"M 60 90 Q 75 75 90 90",rEye:"M 110 90 Q 125 75 140 90",mouth:"M 70 135 Q 100 115 130 135"}},{name:"love",paths:{lEye:"M 60 80 Q 75 55 90 80",rEye:"M 110 80 Q 125 55 140 80",mouth:"M 85 125 Q 100 140 115 125"}},{name:"hiphop",paths:{lEye:"M 60 75 Q 75 85 90 90",rEye:"M 110 90 Q 125 85 140 75",mouth:"M 70 130 Q 100 140 130 125"}}];function S2({onMoodConfirmed:n,accentColor:r="#4A30F0",selectedMood:i=null,nudge:o=!1}){const a=Gs("Mood Dial",{dragMaxOffset:[22,8,40],dragScale:[.82,.6,1.2],pullScale:[.95,.7,1.2],nudgeScale:[1.06,.9,1.3],hoverScale:[1.02,.9,1.2],pullOffsetX:[22,8,40],pullOffsetY:[20,8,40],pullTweenDuration:[.85,.2,2],pullEase:{x1:[.22,0,1],y1:[1,0,1],x2:[.36,0,1],y2:[1,0,1]},_snapStiffness:[220,50,500],_snapDamping:[11,5,40],_snapMass:[.75,.3,2],_pullStiffness:[300,50,600],_pullDamping:[20,5,40],_pullMass:[.7,.3,2],_innerShadowStiffness:[200,50,500],_innerShadowDamping:[20,5,40],shadow:{blurBase:[20,8,40],blurScale:[.6,.2,2],spreadBase:[2,0,10],spreadScale:[.15,.05,.6],opacity:[.2,.05,.5]}}),[d,c]=b.useState(3),[p,h]=b.useState(!1),[m,g]=b.useState(!1),[y,x]=b.useState(!1),[S,j]=b.useState({x:0,y:0}),[k,P]=b.useState(!0),[A,R]=b.useState([]),[N,I]=b.useState(!0),[z,Q]=b.useState(!1),[q,X]=b.useState(null),$=b.useRef([]),ne=b.useRef(null),me=b.useRef(!1),_e=b.useRef({x:0,y:0}),pe=b.useRef(!1),we=sr[d],ce=q!==null,Se=p||!y||z,le=b.useMemo(()=>[{x:-a.pullOffsetX,y:0,moodIndex:0},{x:0,y:-a.pullOffsetY,moodIndex:2},{x:a.pullOffsetX,y:0,moodIndex:4},{x:0,y:a.pullOffsetY,moodIndex:6}],[a.pullOffsetX,a.pullOffsetY]);b.useEffect(()=>{if(!i){x(!1);return}const Te=sr.findIndex(Re=>Re.name===i);Te>=0&&(c(Te),x(!0))},[i]),b.useEffect(()=>{const Te=[];return sr.forEach((Re,Qe)=>{Te.push(setTimeout(()=>{R(lt=>[...lt,Qe])},Qe*120))}),Te.push(setTimeout(()=>I(!1),sr.length*120+600)),Te.push(setTimeout(()=>P(!1),2200)),Te.push(setTimeout(()=>Q(!0),sr.length*120+1e3)),()=>Te.forEach(clearTimeout)},[]);const V=b.useCallback(()=>{$.current.forEach(clearTimeout),$.current=[];const Te=lt=>{for(let at=0;at<le.length;at++){const ut=le[at],nt=lt+at*2800;$.current.push(setTimeout(()=>{X(ut),c(ut.moodIndex)},nt)),$.current.push(setTimeout(()=>{X(null),c(3)},nt+900))}return le.length*2800},Re=Te(0),Qe=setInterval(()=>{$.current.forEach(clearTimeout),$.current=[],Te(0)},Re);$.current.push(Qe)},[le]);b.useEffect(()=>{if(!z||y||p){$.current.forEach(clearTimeout),$.current=[],X(null);return}return V(),()=>{$.current.forEach(clearTimeout),$.current=[]}},[z,y,p,V]);const U=Te=>{if(Te.currentTarget.setPointerCapture(Te.pointerId),me.current=!0,pe.current=!1,h(!0),Q(!1),ne.current){const Re=ne.current.getBoundingClientRect();_e.current={x:Re.left+Re.width/2,y:Re.top+Re.height/2}}},H=Te=>{if(!me.current)return;const Re=Te.clientX-_e.current.x,Qe=Te.clientY-_e.current.y,lt=Math.sqrt(Re*Re+Qe*Qe);if(lt>5){pe.current=!0;const at=a.dragMaxOffset,ut=Math.min(lt,100)/100;j({x:Re/lt*at*ut,y:Qe/lt*at*ut});const nt=(Math.atan2(Qe,Re)*(180/Math.PI)+180+360)%360,Ke=Math.round(nt/45)%8;c(Ke),x(!0)}},T=Te=>{Te.currentTarget.releasePointerCapture(Te.pointerId),me.current=!1,h(!1),j({x:0,y:0}),pe.current&&y&&(n==null||n(sr[d].name))},O=ce?q.x:S.x,oe=ce?q.y:S.y,ae=-O*.8,de=-oe*.8,he=Math.sqrt(O*O+oe*oe),ve=a.shadow.blurBase+he*a.shadow.blurScale,ge=a.shadow.spreadBase+he*a.shadow.spreadScale,ke=p||ce?`${ae}px ${de}px ${ve}px ${ge}px rgba(0,0,0,${a.shadow.opacity})`:"0px 10px 30px rgba(0,0,0,0.15)",tt=p||ce?`inset ${O*.4}px ${oe*.4}px 16px rgba(255,255,255,0.12), inset ${-O*.3}px ${-oe*.3}px 12px rgba(0,0,0,0.1)`:"inset 0 8px 16px rgba(0,0,0,0.06)",Mt={type:"spring",stiffness:a._pullStiffness,damping:a._pullDamping,mass:a._pullMass},Un={type:"spring",stiffness:a._snapStiffness,damping:a._snapDamping,mass:a._snapMass},_n=ce?{x:{type:"tween",duration:a.pullTweenDuration,ease:[a.pullEase.x1,a.pullEase.y1,a.pullEase.x2,a.pullEase.y2]},y:{type:"tween",duration:a.pullTweenDuration,ease:[a.pullEase.x1,a.pullEase.y1,a.pullEase.x2,a.pullEase.y2]},scale:Mt,boxShadow:Mt}:{x:Un,y:Un,scale:Mt,boxShadow:Mt};return v.jsxs("div",{className:"flex flex-col gap-4 items-center relative w-full mt-2",children:[v.jsx("p",{className:"font-['Spectral',serif] text-[26px] text-center text-white w-72 leading-[1.2]",children:"What would you want to listen twin?"}),v.jsxs("div",{ref:ne,className:"relative w-[280px] h-[280px] flex items-center justify-center mt-0 touch-none cursor-pointer",onPointerDown:U,onPointerMove:H,onPointerUp:T,onPointerCancel:T,onPointerEnter:()=>g(!0),onPointerLeave:()=>g(!1),children:[v.jsx("svg",{className:"absolute",width:"0",height:"0",children:v.jsxs("defs",{children:[v.jsxs("filter",{id:"tab-glow",x:"-50%",y:"-50%",width:"200%",height:"200%",children:[v.jsx("feGaussianBlur",{stdDeviation:"3",result:"blur"}),v.jsxs("feMerge",{children:[v.jsx("feMergeNode",{in:"blur"}),v.jsx("feMergeNode",{in:"SourceGraphic"})]})]}),v.jsxs("filter",{id:"tab-glow-active",x:"-50%",y:"-50%",width:"200%",height:"200%",children:[v.jsx("feGaussianBlur",{stdDeviation:"4",result:"blur"}),v.jsxs("feMerge",{children:[v.jsx("feMergeNode",{in:"blur"}),v.jsx("feMergeNode",{in:"blur"}),v.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]})}),v.jsx(fe.svg,{className:"absolute inset-0 w-full h-full pointer-events-none",viewBox:"0 0 280 280",animate:{opacity:Se?1:0},transition:{duration:.35,ease:"easeInOut"},children:sr.map((Te,Re)=>{const Qe=Re*45-90,lt=k2(140,140,130,Qe-20,Qe+20),at=y&&Re===d,ut=A.includes(Re),nt=N&&ut,Ke=ce&&Re===q.moodIndex;return v.jsx(fe.path,{d:lt,fill:"none",strokeLinecap:"round",initial:{pathLength:0,opacity:0,strokeWidth:4,stroke:"rgba(255,255,255,0.3)"},animate:{pathLength:ut?1:0,opacity:ut?1:0,stroke:at?"rgba(255,255,255,1)":Ke?"rgba(255,255,255,0.9)":nt?"rgba(255,255,255,0.7)":"rgba(255,255,255,0.3)",strokeWidth:at?6:Ke?5.5:nt?5:4},transition:{pathLength:{duration:.4,ease:"easeOut"},opacity:{duration:.2},stroke:{duration:.5,ease:"easeInOut"},strokeWidth:{duration:.5,ease:"easeInOut"}},style:{filter:at?"url(#tab-glow-active)":nt||Ke?"url(#tab-glow)":"none"}},Te.name)})}),v.jsx(fe.div,{className:"absolute rounded-full pointer-events-none",style:{width:220,height:220,background:"radial-gradient(circle, rgba(255,255,255,0.6) 0%, rgba(200,180,255,0.4) 40%, transparent 70%)"},initial:{opacity:0,scale:.8},animate:{opacity:k?[0,1,.8]:0,scale:k?[.8,1.15,1.1]:1.3,filter:k?"blur(0px)":"blur(20px)"},transition:{duration:k?1.2:1.5,ease:"easeOut"}}),v.jsxs(fe.div,{animate:{x:O,y:oe,scale:p?a.dragScale:ce?a.pullScale:o?a.nudgeScale:m?a.hoverScale:1,boxShadow:o?"0px 0px 40px 8px rgba(255,255,255,0.5), 0px 10px 30px rgba(0,0,0,0.15)":ke},transition:_n,className:"relative w-[190px] h-[190px] rounded-full flex items-center justify-center border-[5px] border-white overflow-hidden pointer-events-none",style:{backgroundColor:p?"#DFDCFF":"#EBE9FF",transition:"background-color 0.2s ease"},children:[v.jsx(fe.div,{className:"absolute inset-0 rounded-full pointer-events-none",animate:{boxShadow:tt},transition:{type:"spring",stiffness:a._innerShadowStiffness,damping:a._innerShadowDamping}}),v.jsxs("svg",{className:"w-full h-full",viewBox:"0 0 200 200",children:[v.jsx(fe.path,{d:we.paths.lEye,stroke:"#2A2A2A",strokeWidth:"9",strokeLinecap:"round",fill:"none",initial:!1,animate:{d:we.paths.lEye},transition:{type:"spring",stiffness:300,damping:25}}),v.jsx(fe.path,{d:we.paths.rEye,stroke:"#2A2A2A",strokeWidth:"9",strokeLinecap:"round",fill:"none",initial:!1,animate:{d:we.paths.rEye},transition:{type:"spring",stiffness:300,damping:25}}),v.jsx(fe.path,{d:we.paths.mouth,stroke:"#2A2A2A",strokeWidth:"9",strokeLinecap:"round",fill:"none",initial:!1,animate:{d:we.paths.mouth},transition:{type:"spring",stiffness:300,damping:25}})]})]})]}),v.jsx(fe.div,{className:"border border-white/50 backdrop-blur-sm py-[4px] rounded-[130px] mt-2 relative overflow-hidden h-[40px] flex items-center justify-center",style:{width:y?160:"auto",paddingLeft:y?0:40,paddingRight:y?0:40},animate:{backgroundColor:`${r}1A`,boxShadow:`inset 4px 4px 4px ${r}59, 2px 2px 3px ${r}CC`},transition:{duration:.8,ease:"easeInOut"},children:v.jsx(ur,{mode:"wait",children:y?v.jsx(fe.span,{className:"font-['Spectral',serif] text-[24px] text-white tracking-[0.24px]",initial:{opacity:0,filter:"blur(6px)"},animate:{opacity:1,filter:"blur(0px)"},exit:{opacity:0,filter:"blur(6px)"},transition:{duration:.12,ease:"easeOut"},children:we.name},we.name):v.jsx(fe.span,{className:"font-['Spectral',serif] text-[18px] text-white/40 tracking-[0.24px]",initial:{opacity:0,filter:"blur(6px)"},animate:{opacity:1,filter:"blur(0px)"},exit:{opacity:0,filter:"blur(6px)"},transition:{duration:.12,ease:"easeOut"},children:"Hold & drag to pick a mood"},"__initial__")})})]})}function b2({accentColor:n="#4A30F0",onValueChange:r}){const i=Gs("Popularity Slider",{padPct:[7,0,20],thumbSize:[22,14,40],thumbPressedSize:[28,18,50],thumbSpring:{type:"spring",visualDuration:.22,bounce:.35},shadow:{idleBlur:[8,0,24],pressedBlur:[16,0,40],pressedGlow:[4,0,12]}}),[o,a]=b.useState(0),[d,c]=b.useState(!1),p=b.useRef(null),h=k=>{a(k),r==null||r(k)},m=k=>{k.currentTarget.setPointerCapture(k.pointerId),c(!0),y(k)},g=k=>{k.currentTarget.hasPointerCapture(k.pointerId)&&y(k)},y=k=>{if(!p.current)return;const P=p.current.getBoundingClientRect(),R=Math.max(0,Math.min(k.clientX-P.left,P.width))/P.width,N=i.padPct/100,I=(R-N)/(1-2*N),z=Math.max(0,Math.min(1,I)),Q=Math.round(z*3);h(Q)},x=k=>{k.currentTarget.releasePointerCapture(k.pointerId),c(!1)},S=k=>i.padPct+k/3*(100-2*i.padPct),j=n+"99";return v.jsxs("div",{className:"flex flex-col gap-2 w-full max-w-[360px] px-1 mb-2 mt-4",children:[v.jsxs("div",{ref:p,className:"relative h-12 w-full flex items-center cursor-pointer select-none touch-none",onPointerDown:m,onPointerMove:g,onPointerUp:x,onPointerCancel:()=>c(!1),children:[v.jsx("div",{className:"absolute inset-x-0 top-1/2 -translate-y-1/2 h-[36px] rounded-[18px]",style:{background:`linear-gradient(135deg, ${n}66, ${j}, ${n}44)`,padding:1},children:v.jsx("div",{className:"w-full h-full rounded-[18px] bg-white/20 backdrop-blur-sm"})}),[0,1,2,3].map(k=>v.jsx(fe.div,{className:"absolute top-1/2 -translate-y-1/2 w-[4px] h-[4px] rounded-full z-10",animate:{backgroundColor:n},transition:{duration:.8,ease:"easeInOut"},style:{left:`${S(k)}%`,transform:"translateX(-50%)"}},k)),v.jsx(fe.div,{className:"absolute top-1/2 z-20 flex items-center justify-center",initial:!1,animate:{left:`${S(o)}%`,backgroundColor:n,width:d?i.thumbPressedSize:i.thumbSize,height:d?i.thumbPressedSize:i.thumbSize,y:"-50%",boxShadow:d?`0 0 ${i.shadow.pressedBlur}px ${i.shadow.pressedGlow}px ${n}80, 0 2px 8px rgba(0,0,0,0.3)`:`0 2px ${i.shadow.idleBlur}px rgba(0,0,0,0.25)`},style:{transform:"translateX(-50%)",borderRadius:"50%"},transition:{...i.thumbSpring}})]}),v.jsxs("div",{className:"flex justify-between items-center text-white text-[14px] font-medium px-4 tracking-[0.14px]",children:[v.jsx("span",{children:"Underrated"}),v.jsx("span",{children:"Popular"})]})]})}const C0="",C2=["party","feel-good","soft","indie","nostalgic","sad","love","hiphop"];function P0(n){return n.includes("ab67616d0000b273")?n.replace("ab67616d0000b273","ab67616d00004851"):n}async function P2(n,r){const i=`${C0}/api/get-song?mood=${encodeURIComponent(n)}&sliderValue=${encodeURIComponent(String(r))}`;let o;try{o=await fetch(i,{headers:{Accept:"application/json"},cache:"no-store"})}catch(c){const p=c instanceof Error?c.message:"Network error";throw new Error(`Failed to reach API at (same origin): ${p}`)}const a=o.headers.get("content-type")??"";let d=null;if(a.includes("application/json")?d=await o.json().catch(()=>null):d=await o.text().catch(()=>null),!o.ok){let c=typeof(d==null?void 0:d.error)=="string"?d.error:typeof d=="string"&&d.length>0?d:"Failed to fetch song.";throw typeof d=="string"&&/<html|<!doctype/i.test(d)&&(c=`Server error (${o.status}). Check API logs.`),new Error(c)}return d}async function T2(n,r=80){const i=`${C0}/api/get-album-images?mood=${encodeURIComponent(n)}&limit=${encodeURIComponent(String(r))}`;let o;try{o=await fetch(i,{headers:{Accept:"application/json"}})}catch{return[]}const d=(o.headers.get("content-type")??"").includes("application/json")?await o.json().catch(()=>({})):{};return o.ok?(Array.isArray(d==null?void 0:d.images)?d.images:[]).filter(p=>typeof p=="string").map(p=>P0(p)):[]}async function E2(n=80){const r=await Promise.allSettled(C2.map(async o=>{const a=await T2(o,n);return{mood:o,images:a}})),i=new Map;for(const o of r)o.status==="fulfilled"&&i.set(o.value.mood,o.value.images);return i}function bh(n,r=20){const i=n.slice(0,r);return n.slice(r).forEach(a=>{const d=new Image;d.src=a}),Promise.all(i.map(a=>new Promise(d=>{const c=new Image;c.onload=()=>d(),c.onerror=()=>d(),c.src=a}))).then(()=>{})}const zn="/assets/256b80c8e3feddbc7d9121f96f8a5007c5f523ae-FvoqZGWd.png",Vs=7,T0=11,Ga=Vs*T0;function j2(n){let r=0;for(let i=0;i<n.length;i+=1)r=r*31+n.charCodeAt(i)|0;return Math.abs(r)}function E0({src:n,alt:r="",className:i,style:o}){const[a,d]=b.useState(!1),[c,p]=b.useState(n),h=b.useRef(null);return b.useEffect(()=>{var m;(m=h.current)!=null&&m.complete&&h.current.naturalWidth>0&&d(!0)},[n]),b.useEffect(()=>{d(!1),p(n)},[n]),v.jsxs(v.Fragment,{children:[!a&&v.jsx("div",{className:"absolute inset-0 rounded-full",style:{background:"rgba(255,255,255,0.08)",animation:"pulse 1.5s ease-in-out infinite"}}),v.jsx("img",{ref:h,alt:r,className:i,src:c,loading:"eager",decoding:"async",onLoad:()=>d(!0),onError:()=>{c!==zn&&p(zn)},style:{...o,opacity:a?1:0,transition:"opacity 0.3s ease"}})]})}function M2({initialSrc:n,imagePool:r,startDelay:i,config:o}){const[a,d]=b.useState(n),[c,p]=b.useState("visible"),h=b.useRef(),m=b.useRef(),g=b.useCallback(()=>{const y=o.cycleMin+Math.random()*o.cycleJitter;h.current=setTimeout(()=>{p("hiding"),m.current=setTimeout(()=>{const x=r.length>0?r[Math.floor(Math.random()*r.length)]:n??zn;d(x),p("showing"),m.current=setTimeout(()=>{p("visible"),g()},o.settleDelay)},o.swapDelay)},y)},[r,o]);return b.useEffect(()=>{const y=setTimeout(()=>{g()},i);return()=>{clearTimeout(y),clearTimeout(h.current),clearTimeout(m.current)}},[i,g]),v.jsx(fe.div,{className:"relative rounded-full shrink-0 size-[60px] overflow-hidden",animate:{scale:c==="hiding"?o.hideScale:c==="showing"?o.showScale:1,opacity:c==="hiding"?o.hideOpacity:1,filter:c==="hiding"?`blur(${o.hideBlur}px)`:c==="showing"?`blur(${o.showBlur}px)`:"blur(0px)"},transition:{duration:c==="hiding"?o.hideDuration:o.showDuration,ease:[.4,0,.2,1]},children:v.jsx(E0,{src:a??zn,className:"absolute inset-0 max-w-none object-cover size-full",style:{filter:"drop-shadow(0px 8px 14px rgba(19,15,41,0.35))"}})})}function D2({mood:n,popularity:r,images:i=[],highlightImageUrl:o,morph:a}){const d=Gs("Loading Screen",{grid:{introBlur:[16,0,40],introScale:[.92,.7,1.1],introDuration:[1.4,.4,3],introOpacity:[1,0,1]},tile:{cycleMin:[800,200,2e3],cycleJitter:[400,0,1200],hideDuration:[.45,.1,1.2],showDuration:[.45,.1,1.2],hideScale:[.7,.4,1],showScale:[1.08,.9,1.4],hideOpacity:[.2,0,1],hideBlur:[8,0,24],showBlur:[1,0,12],swapDelay:[500,100,1200],settleDelay:[500,100,1200]},hero:{size:[60,40,90],spring:{type:"spring",stiffness:120,damping:24,mass:1}},copy:{titleDelay:[.2,0,1],titleDuration:[.6,.2,1.5]}}),{rows:c,hero:p,imagePool:h}=b.useMemo(()=>{const m=i.filter(Boolean),g=Array.from(new Set(m)),y=o??null,x=y?P0(y):null;let k=[...g.filter(N=>N!==x)].sort(()=>Math.random()-.5).slice(0,Ga);if(k.length===0&&(k=[zn]),k.length<Ga){const N=[...k];let I=0;for(;k.length<Ga;)k.push(N[I%N.length]),I+=1}const P=[];for(let N=0;N<k.length;N+=Vs){const I=k.slice(N,N+Vs);if(I.length===0||(P.push(I),P.length>=T0))break}P.length===0&&P.push([zn]);let A=0,R=0;if(x){const N=j2(x);A=N%P.length,R=Math.min(Math.floor(N/P.length)%Vs,Vs-1);const I=P[A]??[];I.includes(x)||(I[R]=x),P[A]=I}return{rows:P,hero:x?{rowIndex:A,colIndex:R,url:x}:null,imagePool:k}},[i,o]);return v.jsxs("div",{className:"w-screen flex flex-col items-center flex-1 pt-[24px]",children:[v.jsx("style",{children:`
        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
      `}),v.jsx(fe.p,{className:"font-['Spectral',serif] text-[24px] text-center text-white leading-[28px] w-full px-6",initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{duration:d.copy.titleDuration,delay:d.copy.titleDelay},children:"Recommending the perfect one from our hand picked collection"}),v.jsx(fe.div,{className:"flex-1 w-screen flex flex-col justify-evenly gap-[12px] mt-[48px] pb-6 pointer-events-none",style:{marginLeft:"calc(50% - 50vw)",marginRight:"calc(50% - 50vw)"},initial:{filter:`blur(${d.grid.introBlur}px)`,opacity:0,scale:d.grid.introScale},animate:{filter:"blur(0px)",opacity:d.grid.introOpacity,scale:1},transition:{duration:d.grid.introDuration,ease:[.25,.1,.25,1]},children:c.map((m,g)=>v.jsx("div",{className:"relative w-screen flex justify-center h-[72px]",children:v.jsx("div",{className:"flex gap-[18px] justify-center",children:m.map((y,x)=>{if(p&&g===p.rowIndex&&x===p.colIndex)return v.jsx("div",{className:"relative rounded-full shrink-0 overflow-visible",style:{width:d.hero.size,height:d.hero.size},children:v.jsx(fe.div,{className:"absolute inset-0 overflow-hidden",layoutId:"song-album",style:{borderRadius:a.startRadius},transition:{layout:{...a.spring}},children:v.jsx(E0,{src:y??zn,className:"absolute inset-0 max-w-none object-cover size-full",style:{filter:"drop-shadow(0px 8px 14px rgba(19,15,41,0.35))"}})})},`${g}-${x}`);const j=800+Math.random()*600;return v.jsx(M2,{initialSrc:y,imagePool:h,startDelay:j,config:d.tile},`${g}-${x}`)})})},`row-${g}`))})]})}const Ch={p2d573100:"M15.6754 10.9669C12.5006 12.8523 7.26372 13.0257 4.23295 12.1058C3.74624 11.9581 3.23154 12.233 3.08411 12.7196C2.93659 13.2066 3.21105 13.7209 3.69813 13.8689C7.17725 14.9249 12.9608 14.721 16.6157 12.5514C17.0535 12.2914 17.1971 11.7261 16.9376 11.2891C16.6779 10.8513 16.1121 10.707 15.6754 10.9669ZM15.5714 8.1743C15.3487 7.81286 14.8761 7.69949 14.5151 7.92143C11.8683 9.54844 7.83221 10.0198 4.70078 9.06921C4.2947 8.94649 3.86578 9.17547 3.74243 9.58078C3.62007 9.98686 3.84915 10.415 4.2545 10.5385C7.8317 11.624 12.2787 11.0982 15.3188 9.23001C15.6797 9.00769 15.7934 8.5349 15.5714 8.1743ZM14.3662 5.49237C14.1892 5.2021 13.8113 5.11118 13.5221 5.2881C11.2093 6.70166 8.29811 7.02087 4.86971 6.23782C4.53933 6.16207 4.21006 6.36909 4.13472 6.69945C4.05905 7.02969 4.26529 7.35901 4.5964 7.4344C8.34819 8.29209 11.5665 7.92295 14.1625 6.3366C14.452 6.15982 14.5431 5.78171 14.3662 5.49237ZM9.84926 19.6984C4.40974 19.6984 0 15.2888 0 9.84936C0 4.40928 4.40974 0 9.84926 0C15.2889 0 19.6984 4.40928 19.6984 9.84936C19.6984 15.2888 15.2889 19.6984 9.84926 19.6984Z",p3810fe00:"M7.23729 17.3588C6.37826 16.987 5.62931 16.4817 4.99042 15.8428C4.35153 15.2039 3.84618 14.455 3.47438 13.5959C3.10257 12.737 2.91667 11.8161 2.91667 10.8332H4.16667C4.16667 12.4582 4.73264 13.8367 5.86458 14.9686C6.99653 16.1006 8.375 16.6666 10 16.6666C11.625 16.6666 13.0035 16.1006 14.1354 14.9686C15.2674 13.8367 15.8333 12.4582 15.8333 10.8332C15.8333 9.20822 15.2674 7.82975 14.1354 6.69781C13.0035 5.56586 11.625 4.99989 10 4.99989H9.77875L11.1025 6.32364L10.2244 7.22739L7.37188 4.36697L10.2404 1.50635L11.1185 2.4101L9.77875 3.74989H10C10.9829 3.74989 11.9038 3.93579 12.7627 4.3076C13.6217 4.6794 14.3707 5.18475 15.0096 5.82364C15.6485 6.46253 16.1538 7.21149 16.5256 8.07052C16.8974 8.9294 17.0833 9.85031 17.0833 10.8332C17.0833 11.8161 16.8974 12.737 16.5256 13.5959C16.1538 14.455 15.6485 15.2039 15.0096 15.8428C14.3707 16.4817 13.6217 16.987 12.7627 17.3588C11.9038 17.7307 10.9829 17.9166 10 17.9166C9.01708 17.9166 8.09618 17.7307 7.23729 17.3588Z"},A2=["underrated","moderate","well-known","popular"];function L2({mood:n,popularity:r,accentColor:i,onStartOver:o,song:a,error:d,morph:c}){var R;const p=A2[r]||"popular",h=(a==null?void 0:a.song_name)??"No song found",m=(R=a==null?void 0:a.artist)!=null&&R.length?a.artist.join(", "):"Unknown Artist",g=(a==null?void 0:a.album_name)??"Unknown album",y=(a==null?void 0:a.album_image)??zn,x=(a==null?void 0:a.spotify_url)??null,S=!!d,j=b.useRef(null),k=b.useRef(null),[P,A]=b.useState(0);return b.useEffect(()=>{const N=j.current,I=k.current;if(N&&I){const z=N.scrollWidth-I.clientWidth;A(z>0?z:0)}},[m]),v.jsxs("div",{className:"w-full flex flex-col items-center justify-between flex-1",children:[v.jsxs("div",{className:"flex flex-col items-center gap-[32px] w-full mt-auto",children:[v.jsxs(fe.div,{className:"flex flex-col items-center w-full",initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{duration:.5,delay:.15},children:[v.jsx("p",{className:"font-['Spectral',serif] text-[24px] text-center text-white leading-[28px] w-full",children:S?"We couldn't fetch a song right now":v.jsxs(v.Fragment,{children:[`Here's a perfect ${p} `,v.jsx("br",{}),`${n} song for you`]})}),S&&v.jsx("p",{className:"text-[14px] text-white/70 text-center mt-2",children:d})]}),v.jsx("div",{className:"w-full",children:v.jsxs("div",{className:"relative w-full aspect-square max-h-[354px] shadow-[0px_9px_14px_0px_rgba(19,15,41,0.5)] overflow-hidden",style:{borderRadius:c.endRadius},children:[v.jsx(fe.div,{className:"absolute inset-0 overflow-hidden",layoutId:"song-album",style:{borderRadius:c.endRadius},transition:{layout:{...c.spring}},children:v.jsx("img",{alt:g,className:"absolute inset-0 max-w-none object-cover size-full",src:y})}),v.jsx(fe.div,{className:"absolute inset-0 rounded-[inherit] shadow-[inset_0px_12px_8px_0px_rgba(0,0,0,0.25)]",initial:{opacity:0},animate:{opacity:1},transition:{duration:.5,delay:.3}})]})}),v.jsxs(fe.div,{className:"flex flex-col items-center gap-[4px] w-full px-[24px]",initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{duration:.5,delay:.4},children:[v.jsx("p",{className:"font-['Spectral',serif] text-[24px] text-white tracking-[-0.96px] text-center overflow-hidden text-ellipsis whitespace-nowrap w-full leading-[28px]",children:h}),v.jsxs("div",{className:"flex flex-col items-center text-[16px] text-white/80 tracking-[-0.48px] w-full",children:[v.jsx("div",{ref:k,className:"overflow-hidden whitespace-nowrap w-full relative",style:{maskImage:P>0?"linear-gradient(to right, transparent, black 8%, black 92%, transparent)":void 0,WebkitMaskImage:P>0?"linear-gradient(to right, transparent, black 8%, black 92%, transparent)":void 0},children:v.jsxs(fe.span,{ref:j,className:"inline-block text-center w-full",style:{width:P>0?"auto":"100%"},animate:P>0?{x:[0,-P,0]}:{x:0},transition:P>0?{duration:Math.max(10,P/12),repeat:1/0,ease:"easeInOut",repeatDelay:2.5}:void 0,children:["by ",m]})}),v.jsxs("p",{className:"overflow-hidden text-center w-full whitespace-nowrap text-ellipsis",children:["From ",g]})]})]})]}),v.jsxs(fe.div,{className:"flex flex-col gap-[8px] items-center w-full mt-auto",initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{duration:.5,delay:.55},children:[v.jsxs(fe.a,{className:"w-full flex gap-[8px] items-center justify-center py-[16px] rounded-[1000px] text-white cursor-pointer",animate:{backgroundColor:i},transition:{duration:.8,ease:"easeInOut"},whileTap:{scale:.98},href:x??void 0,target:x?"_blank":void 0,rel:x?"noopener noreferrer":void 0,"aria-disabled":!x,style:{opacity:x?1:.6,pointerEvents:x?"auto":"none"},children:[v.jsx("div",{className:"overflow-clip relative shrink-0 size-[20px]",children:v.jsx("svg",{className:"absolute block size-full",fill:"none",preserveAspectRatio:"none",viewBox:"0 0 19.6984 19.6984",style:{transform:"scaleY(-1)"},children:v.jsx("path",{d:Ch.p2d573100,fill:"white"})})}),v.jsx("span",{className:"font-['Switzer',sans-serif] text-[16px] tracking-[-0.16px] whitespace-nowrap font-medium",children:"Add to Spotify"})]}),v.jsxs("button",{className:"w-full flex gap-[8px] items-center justify-center py-[16px] rounded-[1000px] relative cursor-pointer bg-transparent",onClick:o,children:[v.jsx("div",{"aria-hidden":"true",className:"absolute border border-white/80 border-solid inset-0 pointer-events-none rounded-[1000px]"}),v.jsx("div",{className:"relative shrink-0 size-[20px]",children:v.jsxs("svg",{className:"absolute block size-full",fill:"none",preserveAspectRatio:"none",viewBox:"0 0 20 20",children:[v.jsx("mask",{height:"20",id:"mask_replay",maskUnits:"userSpaceOnUse",style:{maskType:"alpha"},width:"20",x:"0",y:"0",children:v.jsx("rect",{fill:"#D9D9D9",height:"20",width:"20"})}),v.jsx("g",{mask:"url(#mask_replay)",children:v.jsx("path",{d:Ch.p3810fe00,fill:"white",fillOpacity:"0.8"})})]})}),v.jsx("span",{className:"font-['Switzer',sans-serif] text-[16px] text-white/80 tracking-[-0.16px] whitespace-nowrap font-medium",children:"Start over"})]})]})]})}var R2=`svg[fill=none] {
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
}`,N2={popup:"styles-module__popup___IhzrD",enter:"styles-module__enter___L7U7N",entered:"styles-module__entered___COX-w",exit:"styles-module__exit___5eGjE",shake:"styles-module__shake___jdbWe",header:"styles-module__header___wWsSi",element:"styles-module__element___fTV2z",headerToggle:"styles-module__headerToggle___WpW0b",chevron:"styles-module__chevron___ZZJlR",expanded:"styles-module__expanded___2Hxgv",stylesWrapper:"styles-module__stylesWrapper___pnHgy",stylesInner:"styles-module__stylesInner___YYZe2",stylesBlock:"styles-module__stylesBlock___VfQKn",styleLine:"styles-module__styleLine___1YQiD",styleProperty:"styles-module__styleProperty___84L1i",styleValue:"styles-module__styleValue___q51-h",timestamp:"styles-module__timestamp___Dtpsv",quote:"styles-module__quote___mcMmQ",textarea:"styles-module__textarea___jrSae",actions:"styles-module__actions___D6x3f",cancel:"styles-module__cancel___hRjnL",submit:"styles-module__submit___K-mIR",deleteWrapper:"styles-module__deleteWrapper___oSjdo",deleteButton:"styles-module__deleteButton___4VuAE",light:"styles-module__light___6AaSQ"};if(typeof document<"u"){let n=document.getElementById("feedback-tool-styles-annotation-popup-css-styles");n||(n=document.createElement("style"),n.id="feedback-tool-styles-annotation-popup-css-styles",n.textContent=R2,document.head.appendChild(n))}var je=N2,I2=({size:n=24})=>v.jsx("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:v.jsx("path",{d:"M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4383 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z",fill:"currentColor"})}),Za="__agentation_freeze";function V2(){if(typeof window>"u")return{frozen:!1,installed:!0,origSetTimeout:setTimeout,origSetInterval:setInterval,origRAF:r=>0,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]};const n=window;return n[Za]||(n[Za]={frozen:!1,installed:!1,origSetTimeout:null,origSetInterval:null,origRAF:null,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]}),n[Za]}var it=V2();typeof window<"u"&&!it.installed&&(it.origSetTimeout=window.setTimeout.bind(window),it.origSetInterval=window.setInterval.bind(window),it.origRAF=window.requestAnimationFrame.bind(window),window.setTimeout=(n,r,...i)=>typeof n=="string"?it.origSetTimeout(n,r):it.origSetTimeout((...o)=>{it.frozen?it.frozenTimeoutQueue.push(()=>n(...o)):n(...o)},r,...i),window.setInterval=(n,r,...i)=>typeof n=="string"?it.origSetInterval(n,r):it.origSetInterval((...o)=>{it.frozen||n(...o)},r,...i),window.requestAnimationFrame=n=>it.origRAF(r=>{it.frozen?it.frozenRAFQueue.push(n):n(r)}),it.installed=!0);var Vr=it.origSetTimeout;it.origSetInterval;b.forwardRef(function({element:r,timestamp:i,selectedText:o,placeholder:a="What should change?",initialValue:d="",submitLabel:c="Add",onSubmit:p,onCancel:h,onDelete:m,style:g,accentColor:y="#3c82f7",isExiting:x=!1,lightMode:S=!1,computedStyles:j},k){const[P,A]=b.useState(d),[R,N]=b.useState(!1),[I,z]=b.useState("initial"),[Q,q]=b.useState(!1),[X,$]=b.useState(!1),ne=b.useRef(null),me=b.useRef(null),_e=b.useRef(null),pe=b.useRef(null);b.useEffect(()=>{x&&I!=="exit"&&z("exit")},[x,I]),b.useEffect(()=>{Vr(()=>{z("enter")},0);const U=Vr(()=>{z("entered")},200),H=Vr(()=>{const T=ne.current;T&&(T.focus(),T.selectionStart=T.selectionEnd=T.value.length,T.scrollTop=T.scrollHeight)},50);return()=>{clearTimeout(U),clearTimeout(H),_e.current&&clearTimeout(_e.current),pe.current&&clearTimeout(pe.current)}},[]);const we=b.useCallback(()=>{pe.current&&clearTimeout(pe.current),N(!0),pe.current=Vr(()=>{var U;N(!1),(U=ne.current)==null||U.focus()},250)},[]);b.useImperativeHandle(k,()=>({shake:we}),[we]);const ce=b.useCallback(()=>{z("exit"),_e.current=Vr(()=>{h()},150)},[h]),Se=b.useCallback(()=>{P.trim()&&p(P.trim())},[P,p]),le=b.useCallback(U=>{U.nativeEvent.isComposing||(U.key==="Enter"&&!U.shiftKey&&(U.preventDefault(),Se()),U.key==="Escape"&&ce())},[Se,ce]),V=[je.popup,S?je.light:"",I==="enter"?je.enter:"",I==="entered"?je.entered:"",I==="exit"?je.exit:"",R?je.shake:""].filter(Boolean).join(" ");return v.jsxs("div",{ref:me,className:V,"data-annotation-popup":!0,style:g,onClick:U=>U.stopPropagation(),children:[v.jsxs("div",{className:je.header,children:[j&&Object.keys(j).length>0?v.jsxs("button",{className:je.headerToggle,onClick:()=>{const U=X;$(!X),U&&Vr(()=>{var H;return(H=ne.current)==null?void 0:H.focus()},0)},type:"button",children:[v.jsx("svg",{className:`${je.chevron} ${X?je.expanded:""}`,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:v.jsx("path",{d:"M5.5 10.25L9 7.25L5.75 4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),v.jsx("span",{className:je.element,children:r})]}):v.jsx("span",{className:je.element,children:r}),i&&v.jsx("span",{className:je.timestamp,children:i})]}),j&&Object.keys(j).length>0&&v.jsx("div",{className:`${je.stylesWrapper} ${X?je.expanded:""}`,children:v.jsx("div",{className:je.stylesInner,children:v.jsx("div",{className:je.stylesBlock,children:Object.entries(j).map(([U,H])=>v.jsxs("div",{className:je.styleLine,children:[v.jsx("span",{className:je.styleProperty,children:U.replace(/([A-Z])/g,"-$1").toLowerCase()}),": ",v.jsx("span",{className:je.styleValue,children:H}),";"]},U))})})}),o&&v.jsxs("div",{className:je.quote,children:["“",o.slice(0,80),o.length>80?"...":"","”"]}),v.jsx("textarea",{ref:ne,className:je.textarea,style:{borderColor:Q?y:void 0},placeholder:a,value:P,onChange:U=>A(U.target.value),onFocus:()=>q(!0),onBlur:()=>q(!1),rows:2,onKeyDown:le}),v.jsxs("div",{className:je.actions,children:[m&&v.jsx("div",{className:je.deleteWrapper,children:v.jsx("button",{className:je.deleteButton,onClick:m,type:"button",children:v.jsx(I2,{size:22})})}),v.jsx("button",{className:je.cancel,onClick:ce,children:"Cancel"}),v.jsx("button",{className:je.submit,style:{backgroundColor:y,opacity:P.trim()?1:.4},onClick:Se,disabled:!P.trim(),children:c})]})]})});var O2=`svg[fill=none] {
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
}`;if(typeof document<"u"){let n=document.getElementById("feedback-tool-styles-page-toolbar-css-styles");n||(n=document.createElement("style"),n.id="feedback-tool-styles-page-toolbar-css-styles",n.textContent=O2,document.head.appendChild(n))}const z2="#5A54F2";function Ja(n,r){const i=parseInt(n.slice(1,3),16),o=parseInt(n.slice(3,5),16),a=parseInt(n.slice(5,7),16),d=h=>r>1?Math.round(h+(255-h)*(r-1)):Math.round(h*r),c=h=>Math.max(0,Math.min(255,h)),p=h=>c(h).toString(16).padStart(2,"0");return`#${p(d(i))}${p(d(o))}${p(d(a))}`}function F2(){const[n,r]=b.useState(null),[i,o]=b.useState(0),[a,d]=b.useState("mood"),[c,p]=b.useState(null),[h,m]=b.useState(null),[g,y]=b.useState(null),[x,S]=b.useState(!1),[j,k]=b.useState(!1),P=Gs("App",{bgTransitionDuration:[.5,.1,2],bgBrightnessOffset:[.22,0,.5],screenFadeDuration:[.6,.1,2]}),A=Gs("Morph Transition",{startRadius:[999,80,999],endRadius:[32,0,80],spring:{type:"spring",stiffness:120,damping:24,mass:1}}),R=b.useCallback(ce=>{r(ce)},[]),N=n&&Sh[n]?Sh[n]:{from:z2},I=1.2-i/3*.2,z=Ja(N.from,I),Q=Ja(N.from,I),q=Ja(N.from,I+P.bgBrightnessOffset),X=n??"__default__",$=b.useRef(new Map),[ne,me]=b.useState([]),_e=b.useRef(null);b.useEffect(()=>{E2(80).then(ce=>{$.current=ce,n&&ce.has(n)&&(me(ce.get(n)),y(n))}).catch(()=>{})},[]),b.useEffect(()=>{if(!n||_e.current===n)return;const ce=$.current.get(n);ce&&ce.length>0&&(me(ce),y(n),bh(ce,20),_e.current=n)},[n]);const pe=b.useCallback(async()=>{if(!n)return;const ce=n,Se=Math.round(i/3*100);m(null),p(null),d("loading");try{const le=new Promise(U=>setTimeout(U,3500));if(g!==ce||ne.length===0){const U=$.current.get(ce);U&&U.length>0&&(me(U),y(ce),bh(U,20))}const V=await P2(ce,Se);p(V),await le,d("result")}catch(le){const V=le instanceof Error?le.message:"Failed to fetch song.";m(V),await new Promise(U=>setTimeout(U,3200)),d("result")}},[n,i,g,ne.length]),we=()=>{d("mood"),p(null),m(null)};return v.jsxs("div",{className:"relative h-[100svh] max-h-[100svh] overflow-hidden flex flex-col items-center justify-between font-['Inter',sans-serif]",children:[null,v.jsx(ur,{children:v.jsx(fe.div,{className:"absolute inset-0",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:P.bgTransitionDuration,ease:"easeInOut"}},X)}),v.jsx(fe.div,{className:"absolute inset-0",animate:{background:`linear-gradient(to bottom, ${Q}, ${q})`},transition:{duration:P.bgTransitionDuration,ease:"easeInOut"}}),v.jsxs("main",{className:"relative z-10 w-full h-[100svh] max-h-[100svh] flex flex-col items-center justify-between px-[24px] py-[40px] overflow-hidden gap-6",children:[v.jsxs("header",{className:"w-full flex justify-between items-center text-white/90 font-['Spectral',serif] text-[18px] tracking-wide shrink-0",children:[v.jsx("span",{className:"text-[#ffffff] text-[18px]",children:"songrec"}),v.jsx("span",{className:"text-white/90 text-[18px] text-[#ffffff]",children:"curated by tanuj"})]}),v.jsx(vx,{children:v.jsx("div",{className:"relative flex-1 w-full",children:v.jsxs(ur,{mode:"sync",children:[a==="mood"&&v.jsx(fe.div,{className:"absolute inset-0 flex flex-col items-center justify-between w-full",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:P.screenFadeDuration,ease:"easeInOut"},children:v.jsxs("div",{className:"w-full max-w-[400px] mx-auto flex flex-col items-center justify-between flex-1",children:[v.jsx("div",{className:"flex-1 flex flex-col items-center justify-center w-full mx-[0px] mt-[16px] mb-[0px]",children:v.jsx(S2,{onMoodConfirmed:R,accentColor:z,selectedMood:n,nudge:x})}),v.jsxs("div",{className:"w-full flex flex-col items-center gap-4 mt-4 mb-2",children:[v.jsx(b2,{accentColor:z,onValueChange:o}),v.jsx(fe.button,{className:"w-full text-white text-[18px] font-medium py-[14px] rounded-full transition-shadow duration-300 active:scale-[0.98] cursor-pointer",animate:{backgroundColor:z,boxShadow:`0 4px 12px ${z}4D`,x:j?[0,-8,8,-6,6,-3,3,0]:0},transition:{duration:.8,ease:"easeInOut",x:{duration:.5,ease:"easeInOut"}},onClick:()=>{if(!n){k(!0),S(!0),setTimeout(()=>{k(!1),S(!1)},800);return}pe()},"aria-disabled":!n,style:{opacity:n?1:.55,cursor:n?"pointer":"not-allowed"},children:"Recommend"})]})]})},"mood-screen"),a==="loading"&&v.jsx(fe.div,{className:"absolute inset-0 flex flex-col items-center w-full",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:P.screenFadeDuration,ease:"easeIn"},children:v.jsx(D2,{mood:n||"indie",popularity:String(i),images:ne,highlightImageUrl:(c==null?void 0:c.album_image)??null,morph:A})},"loading-screen"),a==="result"&&v.jsx(fe.div,{className:"absolute inset-0 flex flex-col items-center w-full",initial:{opacity:1},animate:{opacity:1},exit:{opacity:0},transition:{duration:P.screenFadeDuration,ease:"easeOut"},children:v.jsx("div",{className:"w-full max-w-[400px] mx-auto flex flex-col items-center flex-1",children:v.jsx(L2,{mood:n||"indie",popularity:i,accentColor:z,onStartOver:we,song:c,error:h,morph:A})})},"result-screen")]})})})]})]})}Dg.createRoot(document.getElementById("root")).render(v.jsxs(v.Fragment,{children:[v.jsx(w2,{position:"top-right"}),v.jsx(F2,{})]}));
