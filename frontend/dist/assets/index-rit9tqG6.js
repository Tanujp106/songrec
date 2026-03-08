(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))l(u);new MutationObserver(u=>{for(const f of u)if(f.type==="childList")for(const d of f.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&l(d)}).observe(document,{childList:!0,subtree:!0});function o(u){const f={};return u.integrity&&(f.integrity=u.integrity),u.referrerPolicy&&(f.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?f.credentials="include":u.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function l(u){if(u.ep)return;u.ep=!0;const f=o(u);fetch(u.href,f)}})();function z0(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var oa={exports:{}},xs={},ia={exports:{}},ce={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bf;function B0(){if(bf)return ce;bf=1;var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),f=Symbol.for("react.provider"),d=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),y=Symbol.iterator;function x(k){return k===null||typeof k!="object"?null:(k=y&&k[y]||k["@@iterator"],typeof k=="function"?k:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,L={};function E(k,N,ie){this.props=k,this.context=N,this.refs=L,this.updater=ie||b}E.prototype.isReactComponent={},E.prototype.setState=function(k,N){if(typeof k!="object"&&typeof k!="function"&&k!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,k,N,"setState")},E.prototype.forceUpdate=function(k){this.updater.enqueueForceUpdate(this,k,"forceUpdate")};function j(){}j.prototype=E.prototype;function A(k,N,ie){this.props=k,this.context=N,this.refs=L,this.updater=ie||b}var I=A.prototype=new j;I.constructor=A,T(I,E.prototype),I.isPureReactComponent=!0;var O=Array.isArray,F=Object.prototype.hasOwnProperty,K={current:null},te={key:!0,ref:!0,__self:!0,__source:!0};function Q(k,N,ie){var ue,de={},pe=null,Se=null;if(N!=null)for(ue in N.ref!==void 0&&(Se=N.ref),N.key!==void 0&&(pe=""+N.key),N)F.call(N,ue)&&!te.hasOwnProperty(ue)&&(de[ue]=N[ue]);var he=arguments.length-2;if(he===1)de.children=ie;else if(1<he){for(var xe=Array(he),Je=0;Je<he;Je++)xe[Je]=arguments[Je+2];de.children=xe}if(k&&k.defaultProps)for(ue in he=k.defaultProps,he)de[ue]===void 0&&(de[ue]=he[ue]);return{$$typeof:n,type:k,key:pe,ref:Se,props:de,_owner:K.current}}function $(k,N){return{$$typeof:n,type:k.type,key:N,ref:k.ref,props:k.props,_owner:k._owner}}function oe(k){return typeof k=="object"&&k!==null&&k.$$typeof===n}function ae(k){var N={"=":"=0",":":"=2"};return"$"+k.replace(/[=:]/g,function(ie){return N[ie]})}var fe=/\/+/g;function ye(k,N){return typeof k=="object"&&k!==null&&k.key!=null?ae(""+k.key):N.toString(36)}function ke(k,N,ie,ue,de){var pe=typeof k;(pe==="undefined"||pe==="boolean")&&(k=null);var Se=!1;if(k===null)Se=!0;else switch(pe){case"string":case"number":Se=!0;break;case"object":switch(k.$$typeof){case n:case r:Se=!0}}if(Se)return Se=k,de=de(Se),k=ue===""?"."+ye(Se,0):ue,O(de)?(ie="",k!=null&&(ie=k.replace(fe,"$&/")+"/"),ke(de,N,ie,"",function(Je){return Je})):de!=null&&(oe(de)&&(de=$(de,ie+(!de.key||Se&&Se.key===de.key?"":(""+de.key).replace(fe,"$&/")+"/")+k)),N.push(de)),1;if(Se=0,ue=ue===""?".":ue+":",O(k))for(var he=0;he<k.length;he++){pe=k[he];var xe=ue+ye(pe,he);Se+=ke(pe,N,ie,xe,de)}else if(xe=x(k),typeof xe=="function")for(k=xe.call(k),he=0;!(pe=k.next()).done;)pe=pe.value,xe=ue+ye(pe,he++),Se+=ke(pe,N,ie,xe,de);else if(pe==="object")throw N=String(k),Error("Objects are not valid as a React child (found: "+(N==="[object Object]"?"object with keys {"+Object.keys(k).join(", ")+"}":N)+"). If you meant to render a collection of children, use an array instead.");return Se}function le(k,N,ie){if(k==null)return k;var ue=[],de=0;return ke(k,ue,"","",function(pe){return N.call(ie,pe,de++)}),ue}function Te(k){if(k._status===-1){var N=k._result;N=N(),N.then(function(ie){(k._status===0||k._status===-1)&&(k._status=1,k._result=ie)},function(ie){(k._status===0||k._status===-1)&&(k._status=2,k._result=ie)}),k._status===-1&&(k._status=0,k._result=N)}if(k._status===1)return k._result.default;throw k._result}var me={current:null},B={transition:null},H={ReactCurrentDispatcher:me,ReactCurrentBatchConfig:B,ReactCurrentOwner:K};function Y(){throw Error("act(...) is not supported in production builds of React.")}return ce.Children={map:le,forEach:function(k,N,ie){le(k,function(){N.apply(this,arguments)},ie)},count:function(k){var N=0;return le(k,function(){N++}),N},toArray:function(k){return le(k,function(N){return N})||[]},only:function(k){if(!oe(k))throw Error("React.Children.only expected to receive a single React element child.");return k}},ce.Component=E,ce.Fragment=o,ce.Profiler=u,ce.PureComponent=A,ce.StrictMode=l,ce.Suspense=m,ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=H,ce.act=Y,ce.cloneElement=function(k,N,ie){if(k==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+k+".");var ue=T({},k.props),de=k.key,pe=k.ref,Se=k._owner;if(N!=null){if(N.ref!==void 0&&(pe=N.ref,Se=K.current),N.key!==void 0&&(de=""+N.key),k.type&&k.type.defaultProps)var he=k.type.defaultProps;for(xe in N)F.call(N,xe)&&!te.hasOwnProperty(xe)&&(ue[xe]=N[xe]===void 0&&he!==void 0?he[xe]:N[xe])}var xe=arguments.length-2;if(xe===1)ue.children=ie;else if(1<xe){he=Array(xe);for(var Je=0;Je<xe;Je++)he[Je]=arguments[Je+2];ue.children=he}return{$$typeof:n,type:k.type,key:de,ref:pe,props:ue,_owner:Se}},ce.createContext=function(k){return k={$$typeof:d,_currentValue:k,_currentValue2:k,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},k.Provider={$$typeof:f,_context:k},k.Consumer=k},ce.createElement=Q,ce.createFactory=function(k){var N=Q.bind(null,k);return N.type=k,N},ce.createRef=function(){return{current:null}},ce.forwardRef=function(k){return{$$typeof:p,render:k}},ce.isValidElement=oe,ce.lazy=function(k){return{$$typeof:g,_payload:{_status:-1,_result:k},_init:Te}},ce.memo=function(k,N){return{$$typeof:_,type:k,compare:N===void 0?null:N}},ce.startTransition=function(k){var N=B.transition;B.transition={};try{k()}finally{B.transition=N}},ce.unstable_act=Y,ce.useCallback=function(k,N){return me.current.useCallback(k,N)},ce.useContext=function(k){return me.current.useContext(k)},ce.useDebugValue=function(){},ce.useDeferredValue=function(k){return me.current.useDeferredValue(k)},ce.useEffect=function(k,N){return me.current.useEffect(k,N)},ce.useId=function(){return me.current.useId()},ce.useImperativeHandle=function(k,N,ie){return me.current.useImperativeHandle(k,N,ie)},ce.useInsertionEffect=function(k,N){return me.current.useInsertionEffect(k,N)},ce.useLayoutEffect=function(k,N){return me.current.useLayoutEffect(k,N)},ce.useMemo=function(k,N){return me.current.useMemo(k,N)},ce.useReducer=function(k,N,ie){return me.current.useReducer(k,N,ie)},ce.useRef=function(k){return me.current.useRef(k)},ce.useState=function(k){return me.current.useState(k)},ce.useSyncExternalStore=function(k,N,ie){return me.current.useSyncExternalStore(k,N,ie)},ce.useTransition=function(){return me.current.useTransition()},ce.version="18.3.1",ce}var Cf;function tu(){return Cf||(Cf=1,ia.exports=B0()),ia.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pf;function F0(){if(Pf)return xs;Pf=1;var n=tu(),r=Symbol.for("react.element"),o=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,u=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,f={key:!0,ref:!0,__self:!0,__source:!0};function d(p,m,_){var g,y={},x=null,b=null;_!==void 0&&(x=""+_),m.key!==void 0&&(x=""+m.key),m.ref!==void 0&&(b=m.ref);for(g in m)l.call(m,g)&&!f.hasOwnProperty(g)&&(y[g]=m[g]);if(p&&p.defaultProps)for(g in m=p.defaultProps,m)y[g]===void 0&&(y[g]=m[g]);return{$$typeof:r,type:p,key:x,ref:b,props:y,_owner:u.current}}return xs.Fragment=o,xs.jsx=d,xs.jsxs=d,xs}var Tf;function U0(){return Tf||(Tf=1,oa.exports=F0()),oa.exports}var D=U0(),Qo={},la={exports:{}},mt={},aa={exports:{}},ua={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ef;function Y0(){return Ef||(Ef=1,(function(n){function r(B,H){var Y=B.length;B.push(H);e:for(;0<Y;){var k=Y-1>>>1,N=B[k];if(0<u(N,H))B[k]=H,B[Y]=N,Y=k;else break e}}function o(B){return B.length===0?null:B[0]}function l(B){if(B.length===0)return null;var H=B[0],Y=B.pop();if(Y!==H){B[0]=Y;e:for(var k=0,N=B.length,ie=N>>>1;k<ie;){var ue=2*(k+1)-1,de=B[ue],pe=ue+1,Se=B[pe];if(0>u(de,Y))pe<N&&0>u(Se,de)?(B[k]=Se,B[pe]=Y,k=pe):(B[k]=de,B[ue]=Y,k=ue);else if(pe<N&&0>u(Se,Y))B[k]=Se,B[pe]=Y,k=pe;else break e}}return H}function u(B,H){var Y=B.sortIndex-H.sortIndex;return Y!==0?Y:B.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var f=performance;n.unstable_now=function(){return f.now()}}else{var d=Date,p=d.now();n.unstable_now=function(){return d.now()-p}}var m=[],_=[],g=1,y=null,x=3,b=!1,T=!1,L=!1,E=typeof setTimeout=="function"?setTimeout:null,j=typeof clearTimeout=="function"?clearTimeout:null,A=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function I(B){for(var H=o(_);H!==null;){if(H.callback===null)l(_);else if(H.startTime<=B)l(_),H.sortIndex=H.expirationTime,r(m,H);else break;H=o(_)}}function O(B){if(L=!1,I(B),!T)if(o(m)!==null)T=!0,Te(F);else{var H=o(_);H!==null&&me(O,H.startTime-B)}}function F(B,H){T=!1,L&&(L=!1,j(Q),Q=-1),b=!0;var Y=x;try{for(I(H),y=o(m);y!==null&&(!(y.expirationTime>H)||B&&!ae());){var k=y.callback;if(typeof k=="function"){y.callback=null,x=y.priorityLevel;var N=k(y.expirationTime<=H);H=n.unstable_now(),typeof N=="function"?y.callback=N:y===o(m)&&l(m),I(H)}else l(m);y=o(m)}if(y!==null)var ie=!0;else{var ue=o(_);ue!==null&&me(O,ue.startTime-H),ie=!1}return ie}finally{y=null,x=Y,b=!1}}var K=!1,te=null,Q=-1,$=5,oe=-1;function ae(){return!(n.unstable_now()-oe<$)}function fe(){if(te!==null){var B=n.unstable_now();oe=B;var H=!0;try{H=te(!0,B)}finally{H?ye():(K=!1,te=null)}}else K=!1}var ye;if(typeof A=="function")ye=function(){A(fe)};else if(typeof MessageChannel<"u"){var ke=new MessageChannel,le=ke.port2;ke.port1.onmessage=fe,ye=function(){le.postMessage(null)}}else ye=function(){E(fe,0)};function Te(B){te=B,K||(K=!0,ye())}function me(B,H){Q=E(function(){B(n.unstable_now())},H)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(B){B.callback=null},n.unstable_continueExecution=function(){T||b||(T=!0,Te(F))},n.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<B?Math.floor(1e3/B):5},n.unstable_getCurrentPriorityLevel=function(){return x},n.unstable_getFirstCallbackNode=function(){return o(m)},n.unstable_next=function(B){switch(x){case 1:case 2:case 3:var H=3;break;default:H=x}var Y=x;x=H;try{return B()}finally{x=Y}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(B,H){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var Y=x;x=B;try{return H()}finally{x=Y}},n.unstable_scheduleCallback=function(B,H,Y){var k=n.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?k+Y:k):Y=k,B){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=Y+N,B={id:g++,callback:H,priorityLevel:B,startTime:Y,expirationTime:N,sortIndex:-1},Y>k?(B.sortIndex=Y,r(_,B),o(m)===null&&B===o(_)&&(L?(j(Q),Q=-1):L=!0,me(O,Y-k))):(B.sortIndex=N,r(m,B),T||b||(T=!0,Te(F))),B},n.unstable_shouldYield=ae,n.unstable_wrapCallback=function(B){var H=x;return function(){var Y=x;x=H;try{return B.apply(this,arguments)}finally{x=Y}}}})(ua)),ua}var Mf;function W0(){return Mf||(Mf=1,aa.exports=Y0()),aa.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rf;function H0(){if(Rf)return mt;Rf=1;var n=tu(),r=W0();function o(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,s=1;s<arguments.length;s++)t+="&args[]="+encodeURIComponent(arguments[s]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var l=new Set,u={};function f(e,t){d(e,t),d(e+"Capture",t)}function d(e,t){for(u[e]=t,e=0;e<t.length;e++)l.add(t[e])}var p=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),m=Object.prototype.hasOwnProperty,_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},y={};function x(e){return m.call(y,e)?!0:m.call(g,e)?!1:_.test(e)?y[e]=!0:(g[e]=!0,!1)}function b(e,t,s,i){if(s!==null&&s.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return i?!1:s!==null?!s.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function T(e,t,s,i){if(t===null||typeof t>"u"||b(e,t,s,i))return!0;if(i)return!1;if(s!==null)switch(s.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function L(e,t,s,i,a,c,h){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=i,this.attributeNamespace=a,this.mustUseProperty=s,this.propertyName=e,this.type=t,this.sanitizeURL=c,this.removeEmptyString=h}var E={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){E[e]=new L(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];E[t]=new L(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){E[e]=new L(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){E[e]=new L(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){E[e]=new L(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){E[e]=new L(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){E[e]=new L(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){E[e]=new L(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){E[e]=new L(e,5,!1,e.toLowerCase(),null,!1,!1)});var j=/[\-:]([a-z])/g;function A(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(j,A);E[t]=new L(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(j,A);E[t]=new L(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(j,A);E[t]=new L(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){E[e]=new L(e,1,!1,e.toLowerCase(),null,!1,!1)}),E.xlinkHref=new L("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){E[e]=new L(e,1,!1,e.toLowerCase(),null,!0,!0)});function I(e,t,s,i){var a=E.hasOwnProperty(t)?E[t]:null;(a!==null?a.type!==0:i||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(T(t,s,a,i)&&(s=null),i||a===null?x(t)&&(s===null?e.removeAttribute(t):e.setAttribute(t,""+s)):a.mustUseProperty?e[a.propertyName]=s===null?a.type===3?!1:"":s:(t=a.attributeName,i=a.attributeNamespace,s===null?e.removeAttribute(t):(a=a.type,s=a===3||a===4&&s===!0?"":""+s,i?e.setAttributeNS(i,t,s):e.setAttribute(t,s))))}var O=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,F=Symbol.for("react.element"),K=Symbol.for("react.portal"),te=Symbol.for("react.fragment"),Q=Symbol.for("react.strict_mode"),$=Symbol.for("react.profiler"),oe=Symbol.for("react.provider"),ae=Symbol.for("react.context"),fe=Symbol.for("react.forward_ref"),ye=Symbol.for("react.suspense"),ke=Symbol.for("react.suspense_list"),le=Symbol.for("react.memo"),Te=Symbol.for("react.lazy"),me=Symbol.for("react.offscreen"),B=Symbol.iterator;function H(e){return e===null||typeof e!="object"?null:(e=B&&e[B]||e["@@iterator"],typeof e=="function"?e:null)}var Y=Object.assign,k;function N(e){if(k===void 0)try{throw Error()}catch(s){var t=s.stack.trim().match(/\n( *(at )?)/);k=t&&t[1]||""}return`
`+k+e}var ie=!1;function ue(e,t){if(!e||ie)return"";ie=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(M){var i=M}Reflect.construct(e,[],t)}else{try{t.call()}catch(M){i=M}e.call(t.prototype)}else{try{throw Error()}catch(M){i=M}e()}}catch(M){if(M&&i&&typeof M.stack=="string"){for(var a=M.stack.split(`
`),c=i.stack.split(`
`),h=a.length-1,v=c.length-1;1<=h&&0<=v&&a[h]!==c[v];)v--;for(;1<=h&&0<=v;h--,v--)if(a[h]!==c[v]){if(h!==1||v!==1)do if(h--,v--,0>v||a[h]!==c[v]){var w=`
`+a[h].replace(" at new "," at ");return e.displayName&&w.includes("<anonymous>")&&(w=w.replace("<anonymous>",e.displayName)),w}while(1<=h&&0<=v);break}}}finally{ie=!1,Error.prepareStackTrace=s}return(e=e?e.displayName||e.name:"")?N(e):""}function de(e){switch(e.tag){case 5:return N(e.type);case 16:return N("Lazy");case 13:return N("Suspense");case 19:return N("SuspenseList");case 0:case 2:case 15:return e=ue(e.type,!1),e;case 11:return e=ue(e.type.render,!1),e;case 1:return e=ue(e.type,!0),e;default:return""}}function pe(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case te:return"Fragment";case K:return"Portal";case $:return"Profiler";case Q:return"StrictMode";case ye:return"Suspense";case ke:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ae:return(e.displayName||"Context")+".Consumer";case oe:return(e._context.displayName||"Context")+".Provider";case fe:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case le:return t=e.displayName||null,t!==null?t:pe(e.type)||"Memo";case Te:t=e._payload,e=e._init;try{return pe(e(t))}catch{}}return null}function Se(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return pe(t);case 8:return t===Q?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function he(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function xe(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Je(e){var t=xe(e)?"checked":"value",s=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),i=""+e[t];if(!e.hasOwnProperty(t)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var a=s.get,c=s.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(h){i=""+h,c.call(this,h)}}),Object.defineProperty(e,t,{enumerable:s.enumerable}),{getValue:function(){return i},setValue:function(h){i=""+h},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Zn(e){e._valueTracker||(e._valueTracker=Je(e))}function Ee(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var s=t.getValue(),i="";return e&&(i=xe(e)?e.checked?"true":"false":e.value),e=i,e!==s?(t.setValue(e),!0):!1}function De(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function qe(e,t){var s=t.checked;return Y({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:s??e._wrapperState.initialChecked})}function _t(e,t){var s=t.defaultValue==null?"":t.defaultValue,i=t.checked!=null?t.checked:t.defaultChecked;s=he(t.value!=null?t.value:s),e._wrapperState={initialChecked:i,initialValue:s,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ut(e,t){t=t.checked,t!=null&&I(e,"checked",t,!1)}function gt(e,t){ut(e,t);var s=he(t.value),i=t.type;if(s!=null)i==="number"?(s===0&&e.value===""||e.value!=s)&&(e.value=""+s):e.value!==""+s&&(e.value=""+s);else if(i==="submit"||i==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Gt(e,t.type,s):t.hasOwnProperty("defaultValue")&&Gt(e,t.type,he(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Rt(e,t,s){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var i=t.type;if(!(i!=="submit"&&i!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,s||t===e.value||(e.value=t),e.defaultValue=t}s=e.name,s!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,s!==""&&(e.name=s)}function Gt(e,t,s){(t!=="number"||De(e.ownerDocument)!==e)&&(s==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+s&&(e.defaultValue=""+s))}var jr=Array.isArray;function Jn(e,t,s,i){if(e=e.options,t){t={};for(var a=0;a<s.length;a++)t["$"+s[a]]=!0;for(s=0;s<e.length;s++)a=t.hasOwnProperty("$"+e[s].value),e[s].selected!==a&&(e[s].selected=a),a&&i&&(e[s].defaultSelected=!0)}else{for(s=""+he(s),t=null,a=0;a<e.length;a++){if(e[a].value===s){e[a].selected=!0,i&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function mi(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(o(91));return Y({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Iu(e,t){var s=t.value;if(s==null){if(s=t.children,t=t.defaultValue,s!=null){if(t!=null)throw Error(o(92));if(jr(s)){if(1<s.length)throw Error(o(93));s=s[0]}t=s}t==null&&(t=""),s=t}e._wrapperState={initialValue:he(s)}}function Au(e,t){var s=he(t.value),i=he(t.defaultValue);s!=null&&(s=""+s,s!==e.value&&(e.value=s),t.defaultValue==null&&e.defaultValue!==s&&(e.defaultValue=s)),i!=null&&(e.defaultValue=""+i)}function ju(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Nu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function _i(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Nu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Vs,Vu=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,s,i,a){MSApp.execUnsafeLocalFunction(function(){return e(t,s,i,a)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Vs=Vs||document.createElement("div"),Vs.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Vs.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Nr(e,t){if(t){var s=e.firstChild;if(s&&s===e.lastChild&&s.nodeType===3){s.nodeValue=t;return}}e.textContent=t}var Vr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ym=["Webkit","ms","Moz","O"];Object.keys(Vr).forEach(function(e){Ym.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Vr[t]=Vr[e]})});function Ou(e,t,s){return t==null||typeof t=="boolean"||t===""?"":s||typeof t!="number"||t===0||Vr.hasOwnProperty(e)&&Vr[e]?(""+t).trim():t+"px"}function zu(e,t){e=e.style;for(var s in t)if(t.hasOwnProperty(s)){var i=s.indexOf("--")===0,a=Ou(s,t[s],i);s==="float"&&(s="cssFloat"),i?e.setProperty(s,a):e[s]=a}}var Wm=Y({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function gi(e,t){if(t){if(Wm[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(o(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(o(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(o(61))}if(t.style!=null&&typeof t.style!="object")throw Error(o(62))}}function yi(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var vi=null;function xi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var wi=null,qn=null,er=null;function Bu(e){if(e=os(e)){if(typeof wi!="function")throw Error(o(280));var t=e.stateNode;t&&(t=io(t),wi(e.stateNode,e.type,t))}}function Fu(e){qn?er?er.push(e):er=[e]:qn=e}function Uu(){if(qn){var e=qn,t=er;if(er=qn=null,Bu(e),t)for(e=0;e<t.length;e++)Bu(t[e])}}function Yu(e,t){return e(t)}function Wu(){}var Si=!1;function Hu(e,t,s){if(Si)return e(t,s);Si=!0;try{return Yu(e,t,s)}finally{Si=!1,(qn!==null||er!==null)&&(Wu(),Uu())}}function Or(e,t){var s=e.stateNode;if(s===null)return null;var i=io(s);if(i===null)return null;s=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(s&&typeof s!="function")throw Error(o(231,t,typeof s));return s}var ki=!1;if(p)try{var zr={};Object.defineProperty(zr,"passive",{get:function(){ki=!0}}),window.addEventListener("test",zr,zr),window.removeEventListener("test",zr,zr)}catch{ki=!1}function Hm(e,t,s,i,a,c,h,v,w){var M=Array.prototype.slice.call(arguments,3);try{t.apply(s,M)}catch(z){this.onError(z)}}var Br=!1,Os=null,zs=!1,bi=null,Qm={onError:function(e){Br=!0,Os=e}};function Xm(e,t,s,i,a,c,h,v,w){Br=!1,Os=null,Hm.apply(Qm,arguments)}function $m(e,t,s,i,a,c,h,v,w){if(Xm.apply(this,arguments),Br){if(Br){var M=Os;Br=!1,Os=null}else throw Error(o(198));zs||(zs=!0,bi=M)}}function Ln(e){var t=e,s=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(s=t.return),e=t.return;while(e)}return t.tag===3?s:null}function Qu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Xu(e){if(Ln(e)!==e)throw Error(o(188))}function Km(e){var t=e.alternate;if(!t){if(t=Ln(e),t===null)throw Error(o(188));return t!==e?null:e}for(var s=e,i=t;;){var a=s.return;if(a===null)break;var c=a.alternate;if(c===null){if(i=a.return,i!==null){s=i;continue}break}if(a.child===c.child){for(c=a.child;c;){if(c===s)return Xu(a),e;if(c===i)return Xu(a),t;c=c.sibling}throw Error(o(188))}if(s.return!==i.return)s=a,i=c;else{for(var h=!1,v=a.child;v;){if(v===s){h=!0,s=a,i=c;break}if(v===i){h=!0,i=a,s=c;break}v=v.sibling}if(!h){for(v=c.child;v;){if(v===s){h=!0,s=c,i=a;break}if(v===i){h=!0,i=c,s=a;break}v=v.sibling}if(!h)throw Error(o(189))}}if(s.alternate!==i)throw Error(o(190))}if(s.tag!==3)throw Error(o(188));return s.stateNode.current===s?e:t}function $u(e){return e=Km(e),e!==null?Ku(e):null}function Ku(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ku(e);if(t!==null)return t;e=e.sibling}return null}var Gu=r.unstable_scheduleCallback,Zu=r.unstable_cancelCallback,Gm=r.unstable_shouldYield,Zm=r.unstable_requestPaint,Oe=r.unstable_now,Jm=r.unstable_getCurrentPriorityLevel,Ci=r.unstable_ImmediatePriority,Ju=r.unstable_UserBlockingPriority,Bs=r.unstable_NormalPriority,qm=r.unstable_LowPriority,qu=r.unstable_IdlePriority,Fs=null,Ut=null;function e_(e){if(Ut&&typeof Ut.onCommitFiberRoot=="function")try{Ut.onCommitFiberRoot(Fs,e,void 0,(e.current.flags&128)===128)}catch{}}var Dt=Math.clz32?Math.clz32:r_,t_=Math.log,n_=Math.LN2;function r_(e){return e>>>=0,e===0?32:31-(t_(e)/n_|0)|0}var Us=64,Ys=4194304;function Fr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ws(e,t){var s=e.pendingLanes;if(s===0)return 0;var i=0,a=e.suspendedLanes,c=e.pingedLanes,h=s&268435455;if(h!==0){var v=h&~a;v!==0?i=Fr(v):(c&=h,c!==0&&(i=Fr(c)))}else h=s&~a,h!==0?i=Fr(h):c!==0&&(i=Fr(c));if(i===0)return 0;if(t!==0&&t!==i&&(t&a)===0&&(a=i&-i,c=t&-t,a>=c||a===16&&(c&4194240)!==0))return t;if((i&4)!==0&&(i|=s&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=i;0<t;)s=31-Dt(t),a=1<<s,i|=e[s],t&=~a;return i}function s_(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function o_(e,t){for(var s=e.suspendedLanes,i=e.pingedLanes,a=e.expirationTimes,c=e.pendingLanes;0<c;){var h=31-Dt(c),v=1<<h,w=a[h];w===-1?((v&s)===0||(v&i)!==0)&&(a[h]=s_(v,t)):w<=t&&(e.expiredLanes|=v),c&=~v}}function Pi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ec(){var e=Us;return Us<<=1,(Us&4194240)===0&&(Us=64),e}function Ti(e){for(var t=[],s=0;31>s;s++)t.push(e);return t}function Ur(e,t,s){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Dt(t),e[t]=s}function i_(e,t){var s=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var i=e.eventTimes;for(e=e.expirationTimes;0<s;){var a=31-Dt(s),c=1<<a;t[a]=0,i[a]=-1,e[a]=-1,s&=~c}}function Ei(e,t){var s=e.entangledLanes|=t;for(e=e.entanglements;s;){var i=31-Dt(s),a=1<<i;a&t|e[i]&t&&(e[i]|=t),s&=~a}}var we=0;function tc(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var nc,Mi,rc,sc,oc,Ri=!1,Hs=[],ln=null,an=null,un=null,Yr=new Map,Wr=new Map,cn=[],l_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ic(e,t){switch(e){case"focusin":case"focusout":ln=null;break;case"dragenter":case"dragleave":an=null;break;case"mouseover":case"mouseout":un=null;break;case"pointerover":case"pointerout":Yr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wr.delete(t.pointerId)}}function Hr(e,t,s,i,a,c){return e===null||e.nativeEvent!==c?(e={blockedOn:t,domEventName:s,eventSystemFlags:i,nativeEvent:c,targetContainers:[a]},t!==null&&(t=os(t),t!==null&&Mi(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function a_(e,t,s,i,a){switch(t){case"focusin":return ln=Hr(ln,e,t,s,i,a),!0;case"dragenter":return an=Hr(an,e,t,s,i,a),!0;case"mouseover":return un=Hr(un,e,t,s,i,a),!0;case"pointerover":var c=a.pointerId;return Yr.set(c,Hr(Yr.get(c)||null,e,t,s,i,a)),!0;case"gotpointercapture":return c=a.pointerId,Wr.set(c,Hr(Wr.get(c)||null,e,t,s,i,a)),!0}return!1}function lc(e){var t=In(e.target);if(t!==null){var s=Ln(t);if(s!==null){if(t=s.tag,t===13){if(t=Qu(s),t!==null){e.blockedOn=t,oc(e.priority,function(){rc(s)});return}}else if(t===3&&s.stateNode.current.memoizedState.isDehydrated){e.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Qs(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var s=Li(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(s===null){s=e.nativeEvent;var i=new s.constructor(s.type,s);vi=i,s.target.dispatchEvent(i),vi=null}else return t=os(s),t!==null&&Mi(t),e.blockedOn=s,!1;t.shift()}return!0}function ac(e,t,s){Qs(e)&&s.delete(t)}function u_(){Ri=!1,ln!==null&&Qs(ln)&&(ln=null),an!==null&&Qs(an)&&(an=null),un!==null&&Qs(un)&&(un=null),Yr.forEach(ac),Wr.forEach(ac)}function Qr(e,t){e.blockedOn===t&&(e.blockedOn=null,Ri||(Ri=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,u_)))}function Xr(e){function t(a){return Qr(a,e)}if(0<Hs.length){Qr(Hs[0],e);for(var s=1;s<Hs.length;s++){var i=Hs[s];i.blockedOn===e&&(i.blockedOn=null)}}for(ln!==null&&Qr(ln,e),an!==null&&Qr(an,e),un!==null&&Qr(un,e),Yr.forEach(t),Wr.forEach(t),s=0;s<cn.length;s++)i=cn[s],i.blockedOn===e&&(i.blockedOn=null);for(;0<cn.length&&(s=cn[0],s.blockedOn===null);)lc(s),s.blockedOn===null&&cn.shift()}var tr=O.ReactCurrentBatchConfig,Xs=!0;function c_(e,t,s,i){var a=we,c=tr.transition;tr.transition=null;try{we=1,Di(e,t,s,i)}finally{we=a,tr.transition=c}}function d_(e,t,s,i){var a=we,c=tr.transition;tr.transition=null;try{we=4,Di(e,t,s,i)}finally{we=a,tr.transition=c}}function Di(e,t,s,i){if(Xs){var a=Li(e,t,s,i);if(a===null)Ki(e,t,i,$s,s),ic(e,i);else if(a_(a,e,t,s,i))i.stopPropagation();else if(ic(e,i),t&4&&-1<l_.indexOf(e)){for(;a!==null;){var c=os(a);if(c!==null&&nc(c),c=Li(e,t,s,i),c===null&&Ki(e,t,i,$s,s),c===a)break;a=c}a!==null&&i.stopPropagation()}else Ki(e,t,i,null,s)}}var $s=null;function Li(e,t,s,i){if($s=null,e=xi(i),e=In(e),e!==null)if(t=Ln(e),t===null)e=null;else if(s=t.tag,s===13){if(e=Qu(t),e!==null)return e;e=null}else if(s===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return $s=e,null}function uc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Jm()){case Ci:return 1;case Ju:return 4;case Bs:case qm:return 16;case qu:return 536870912;default:return 16}default:return 16}}var dn=null,Ii=null,Ks=null;function cc(){if(Ks)return Ks;var e,t=Ii,s=t.length,i,a="value"in dn?dn.value:dn.textContent,c=a.length;for(e=0;e<s&&t[e]===a[e];e++);var h=s-e;for(i=1;i<=h&&t[s-i]===a[c-i];i++);return Ks=a.slice(e,1<i?1-i:void 0)}function Gs(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Zs(){return!0}function dc(){return!1}function yt(e){function t(s,i,a,c,h){this._reactName=s,this._targetInst=a,this.type=i,this.nativeEvent=c,this.target=h,this.currentTarget=null;for(var v in e)e.hasOwnProperty(v)&&(s=e[v],this[v]=s?s(c):c[v]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?Zs:dc,this.isPropagationStopped=dc,this}return Y(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Zs)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Zs)},persist:function(){},isPersistent:Zs}),t}var nr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ai=yt(nr),$r=Y({},nr,{view:0,detail:0}),f_=yt($r),ji,Ni,Kr,Js=Y({},$r,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Oi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Kr&&(Kr&&e.type==="mousemove"?(ji=e.screenX-Kr.screenX,Ni=e.screenY-Kr.screenY):Ni=ji=0,Kr=e),ji)},movementY:function(e){return"movementY"in e?e.movementY:Ni}}),fc=yt(Js),p_=Y({},Js,{dataTransfer:0}),h_=yt(p_),m_=Y({},$r,{relatedTarget:0}),Vi=yt(m_),__=Y({},nr,{animationName:0,elapsedTime:0,pseudoElement:0}),g_=yt(__),y_=Y({},nr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),v_=yt(y_),x_=Y({},nr,{data:0}),pc=yt(x_),w_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},S_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},k_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function b_(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=k_[e])?!!t[e]:!1}function Oi(){return b_}var C_=Y({},$r,{key:function(e){if(e.key){var t=w_[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Gs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?S_[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Oi,charCode:function(e){return e.type==="keypress"?Gs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Gs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),P_=yt(C_),T_=Y({},Js,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),hc=yt(T_),E_=Y({},$r,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Oi}),M_=yt(E_),R_=Y({},nr,{propertyName:0,elapsedTime:0,pseudoElement:0}),D_=yt(R_),L_=Y({},Js,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),I_=yt(L_),A_=[9,13,27,32],zi=p&&"CompositionEvent"in window,Gr=null;p&&"documentMode"in document&&(Gr=document.documentMode);var j_=p&&"TextEvent"in window&&!Gr,mc=p&&(!zi||Gr&&8<Gr&&11>=Gr),_c=" ",gc=!1;function yc(e,t){switch(e){case"keyup":return A_.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function vc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var rr=!1;function N_(e,t){switch(e){case"compositionend":return vc(t);case"keypress":return t.which!==32?null:(gc=!0,_c);case"textInput":return e=t.data,e===_c&&gc?null:e;default:return null}}function V_(e,t){if(rr)return e==="compositionend"||!zi&&yc(e,t)?(e=cc(),Ks=Ii=dn=null,rr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return mc&&t.locale!=="ko"?null:t.data;default:return null}}var O_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!O_[e.type]:t==="textarea"}function wc(e,t,s,i){Fu(i),t=ro(t,"onChange"),0<t.length&&(s=new Ai("onChange","change",null,s,i),e.push({event:s,listeners:t}))}var Zr=null,Jr=null;function z_(e){zc(e,0)}function qs(e){var t=ar(e);if(Ee(t))return e}function B_(e,t){if(e==="change")return t}var Sc=!1;if(p){var Bi;if(p){var Fi="oninput"in document;if(!Fi){var kc=document.createElement("div");kc.setAttribute("oninput","return;"),Fi=typeof kc.oninput=="function"}Bi=Fi}else Bi=!1;Sc=Bi&&(!document.documentMode||9<document.documentMode)}function bc(){Zr&&(Zr.detachEvent("onpropertychange",Cc),Jr=Zr=null)}function Cc(e){if(e.propertyName==="value"&&qs(Jr)){var t=[];wc(t,Jr,e,xi(e)),Hu(z_,t)}}function F_(e,t,s){e==="focusin"?(bc(),Zr=t,Jr=s,Zr.attachEvent("onpropertychange",Cc)):e==="focusout"&&bc()}function U_(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return qs(Jr)}function Y_(e,t){if(e==="click")return qs(t)}function W_(e,t){if(e==="input"||e==="change")return qs(t)}function H_(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Lt=typeof Object.is=="function"?Object.is:H_;function qr(e,t){if(Lt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var s=Object.keys(e),i=Object.keys(t);if(s.length!==i.length)return!1;for(i=0;i<s.length;i++){var a=s[i];if(!m.call(t,a)||!Lt(e[a],t[a]))return!1}return!0}function Pc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Tc(e,t){var s=Pc(e);e=0;for(var i;s;){if(s.nodeType===3){if(i=e+s.textContent.length,e<=t&&i>=t)return{node:s,offset:t-e};e=i}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=Pc(s)}}function Ec(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ec(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Mc(){for(var e=window,t=De();t instanceof e.HTMLIFrameElement;){try{var s=typeof t.contentWindow.location.href=="string"}catch{s=!1}if(s)e=t.contentWindow;else break;t=De(e.document)}return t}function Ui(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Q_(e){var t=Mc(),s=e.focusedElem,i=e.selectionRange;if(t!==s&&s&&s.ownerDocument&&Ec(s.ownerDocument.documentElement,s)){if(i!==null&&Ui(s)){if(t=i.start,e=i.end,e===void 0&&(e=t),"selectionStart"in s)s.selectionStart=t,s.selectionEnd=Math.min(e,s.value.length);else if(e=(t=s.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=s.textContent.length,c=Math.min(i.start,a);i=i.end===void 0?c:Math.min(i.end,a),!e.extend&&c>i&&(a=i,i=c,c=a),a=Tc(s,c);var h=Tc(s,i);a&&h&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==h.node||e.focusOffset!==h.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),c>i?(e.addRange(t),e.extend(h.node,h.offset)):(t.setEnd(h.node,h.offset),e.addRange(t)))}}for(t=[],e=s;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<t.length;s++)e=t[s],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var X_=p&&"documentMode"in document&&11>=document.documentMode,sr=null,Yi=null,es=null,Wi=!1;function Rc(e,t,s){var i=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Wi||sr==null||sr!==De(i)||(i=sr,"selectionStart"in i&&Ui(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),es&&qr(es,i)||(es=i,i=ro(Yi,"onSelect"),0<i.length&&(t=new Ai("onSelect","select",null,t,s),e.push({event:t,listeners:i}),t.target=sr)))}function eo(e,t){var s={};return s[e.toLowerCase()]=t.toLowerCase(),s["Webkit"+e]="webkit"+t,s["Moz"+e]="moz"+t,s}var or={animationend:eo("Animation","AnimationEnd"),animationiteration:eo("Animation","AnimationIteration"),animationstart:eo("Animation","AnimationStart"),transitionend:eo("Transition","TransitionEnd")},Hi={},Dc={};p&&(Dc=document.createElement("div").style,"AnimationEvent"in window||(delete or.animationend.animation,delete or.animationiteration.animation,delete or.animationstart.animation),"TransitionEvent"in window||delete or.transitionend.transition);function to(e){if(Hi[e])return Hi[e];if(!or[e])return e;var t=or[e],s;for(s in t)if(t.hasOwnProperty(s)&&s in Dc)return Hi[e]=t[s];return e}var Lc=to("animationend"),Ic=to("animationiteration"),Ac=to("animationstart"),jc=to("transitionend"),Nc=new Map,Vc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function fn(e,t){Nc.set(e,t),f(t,[e])}for(var Qi=0;Qi<Vc.length;Qi++){var Xi=Vc[Qi],$_=Xi.toLowerCase(),K_=Xi[0].toUpperCase()+Xi.slice(1);fn($_,"on"+K_)}fn(Lc,"onAnimationEnd"),fn(Ic,"onAnimationIteration"),fn(Ac,"onAnimationStart"),fn("dblclick","onDoubleClick"),fn("focusin","onFocus"),fn("focusout","onBlur"),fn(jc,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),f("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),f("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),f("onBeforeInput",["compositionend","keypress","textInput","paste"]),f("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),f("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),f("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ts="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),G_=new Set("cancel close invalid load scroll toggle".split(" ").concat(ts));function Oc(e,t,s){var i=e.type||"unknown-event";e.currentTarget=s,$m(i,t,void 0,e),e.currentTarget=null}function zc(e,t){t=(t&4)!==0;for(var s=0;s<e.length;s++){var i=e[s],a=i.event;i=i.listeners;e:{var c=void 0;if(t)for(var h=i.length-1;0<=h;h--){var v=i[h],w=v.instance,M=v.currentTarget;if(v=v.listener,w!==c&&a.isPropagationStopped())break e;Oc(a,v,M),c=w}else for(h=0;h<i.length;h++){if(v=i[h],w=v.instance,M=v.currentTarget,v=v.listener,w!==c&&a.isPropagationStopped())break e;Oc(a,v,M),c=w}}}if(zs)throw e=bi,zs=!1,bi=null,e}function Me(e,t){var s=t[tl];s===void 0&&(s=t[tl]=new Set);var i=e+"__bubble";s.has(i)||(Bc(t,e,2,!1),s.add(i))}function $i(e,t,s){var i=0;t&&(i|=4),Bc(s,e,i,t)}var no="_reactListening"+Math.random().toString(36).slice(2);function ns(e){if(!e[no]){e[no]=!0,l.forEach(function(s){s!=="selectionchange"&&(G_.has(s)||$i(s,!1,e),$i(s,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[no]||(t[no]=!0,$i("selectionchange",!1,t))}}function Bc(e,t,s,i){switch(uc(t)){case 1:var a=c_;break;case 4:a=d_;break;default:a=Di}s=a.bind(null,t,s,e),a=void 0,!ki||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),i?a!==void 0?e.addEventListener(t,s,{capture:!0,passive:a}):e.addEventListener(t,s,!0):a!==void 0?e.addEventListener(t,s,{passive:a}):e.addEventListener(t,s,!1)}function Ki(e,t,s,i,a){var c=i;if((t&1)===0&&(t&2)===0&&i!==null)e:for(;;){if(i===null)return;var h=i.tag;if(h===3||h===4){var v=i.stateNode.containerInfo;if(v===a||v.nodeType===8&&v.parentNode===a)break;if(h===4)for(h=i.return;h!==null;){var w=h.tag;if((w===3||w===4)&&(w=h.stateNode.containerInfo,w===a||w.nodeType===8&&w.parentNode===a))return;h=h.return}for(;v!==null;){if(h=In(v),h===null)return;if(w=h.tag,w===5||w===6){i=c=h;continue e}v=v.parentNode}}i=i.return}Hu(function(){var M=c,z=xi(s),U=[];e:{var V=Nc.get(e);if(V!==void 0){var X=Ai,Z=e;switch(e){case"keypress":if(Gs(s)===0)break e;case"keydown":case"keyup":X=P_;break;case"focusin":Z="focus",X=Vi;break;case"focusout":Z="blur",X=Vi;break;case"beforeblur":case"afterblur":X=Vi;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":X=fc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":X=h_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":X=M_;break;case Lc:case Ic:case Ac:X=g_;break;case jc:X=D_;break;case"scroll":X=f_;break;case"wheel":X=I_;break;case"copy":case"cut":case"paste":X=v_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":X=hc}var q=(t&4)!==0,ze=!q&&e==="scroll",C=q?V!==null?V+"Capture":null:V;q=[];for(var S=M,P;S!==null;){P=S;var W=P.stateNode;if(P.tag===5&&W!==null&&(P=W,C!==null&&(W=Or(S,C),W!=null&&q.push(rs(S,W,P)))),ze)break;S=S.return}0<q.length&&(V=new X(V,Z,null,s,z),U.push({event:V,listeners:q}))}}if((t&7)===0){e:{if(V=e==="mouseover"||e==="pointerover",X=e==="mouseout"||e==="pointerout",V&&s!==vi&&(Z=s.relatedTarget||s.fromElement)&&(In(Z)||Z[Zt]))break e;if((X||V)&&(V=z.window===z?z:(V=z.ownerDocument)?V.defaultView||V.parentWindow:window,X?(Z=s.relatedTarget||s.toElement,X=M,Z=Z?In(Z):null,Z!==null&&(ze=Ln(Z),Z!==ze||Z.tag!==5&&Z.tag!==6)&&(Z=null)):(X=null,Z=M),X!==Z)){if(q=fc,W="onMouseLeave",C="onMouseEnter",S="mouse",(e==="pointerout"||e==="pointerover")&&(q=hc,W="onPointerLeave",C="onPointerEnter",S="pointer"),ze=X==null?V:ar(X),P=Z==null?V:ar(Z),V=new q(W,S+"leave",X,s,z),V.target=ze,V.relatedTarget=P,W=null,In(z)===M&&(q=new q(C,S+"enter",Z,s,z),q.target=P,q.relatedTarget=ze,W=q),ze=W,X&&Z)t:{for(q=X,C=Z,S=0,P=q;P;P=ir(P))S++;for(P=0,W=C;W;W=ir(W))P++;for(;0<S-P;)q=ir(q),S--;for(;0<P-S;)C=ir(C),P--;for(;S--;){if(q===C||C!==null&&q===C.alternate)break t;q=ir(q),C=ir(C)}q=null}else q=null;X!==null&&Fc(U,V,X,q,!1),Z!==null&&ze!==null&&Fc(U,ze,Z,q,!0)}}e:{if(V=M?ar(M):window,X=V.nodeName&&V.nodeName.toLowerCase(),X==="select"||X==="input"&&V.type==="file")var ee=B_;else if(xc(V))if(Sc)ee=W_;else{ee=U_;var ne=F_}else(X=V.nodeName)&&X.toLowerCase()==="input"&&(V.type==="checkbox"||V.type==="radio")&&(ee=Y_);if(ee&&(ee=ee(e,M))){wc(U,ee,s,z);break e}ne&&ne(e,V,M),e==="focusout"&&(ne=V._wrapperState)&&ne.controlled&&V.type==="number"&&Gt(V,"number",V.value)}switch(ne=M?ar(M):window,e){case"focusin":(xc(ne)||ne.contentEditable==="true")&&(sr=ne,Yi=M,es=null);break;case"focusout":es=Yi=sr=null;break;case"mousedown":Wi=!0;break;case"contextmenu":case"mouseup":case"dragend":Wi=!1,Rc(U,s,z);break;case"selectionchange":if(X_)break;case"keydown":case"keyup":Rc(U,s,z)}var re;if(zi)e:{switch(e){case"compositionstart":var se="onCompositionStart";break e;case"compositionend":se="onCompositionEnd";break e;case"compositionupdate":se="onCompositionUpdate";break e}se=void 0}else rr?yc(e,s)&&(se="onCompositionEnd"):e==="keydown"&&s.keyCode===229&&(se="onCompositionStart");se&&(mc&&s.locale!=="ko"&&(rr||se!=="onCompositionStart"?se==="onCompositionEnd"&&rr&&(re=cc()):(dn=z,Ii="value"in dn?dn.value:dn.textContent,rr=!0)),ne=ro(M,se),0<ne.length&&(se=new pc(se,e,null,s,z),U.push({event:se,listeners:ne}),re?se.data=re:(re=vc(s),re!==null&&(se.data=re)))),(re=j_?N_(e,s):V_(e,s))&&(M=ro(M,"onBeforeInput"),0<M.length&&(z=new pc("onBeforeInput","beforeinput",null,s,z),U.push({event:z,listeners:M}),z.data=re))}zc(U,t)})}function rs(e,t,s){return{instance:e,listener:t,currentTarget:s}}function ro(e,t){for(var s=t+"Capture",i=[];e!==null;){var a=e,c=a.stateNode;a.tag===5&&c!==null&&(a=c,c=Or(e,s),c!=null&&i.unshift(rs(e,c,a)),c=Or(e,t),c!=null&&i.push(rs(e,c,a))),e=e.return}return i}function ir(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Fc(e,t,s,i,a){for(var c=t._reactName,h=[];s!==null&&s!==i;){var v=s,w=v.alternate,M=v.stateNode;if(w!==null&&w===i)break;v.tag===5&&M!==null&&(v=M,a?(w=Or(s,c),w!=null&&h.unshift(rs(s,w,v))):a||(w=Or(s,c),w!=null&&h.push(rs(s,w,v)))),s=s.return}h.length!==0&&e.push({event:t,listeners:h})}var Z_=/\r\n?/g,J_=/\u0000|\uFFFD/g;function Uc(e){return(typeof e=="string"?e:""+e).replace(Z_,`
`).replace(J_,"")}function so(e,t,s){if(t=Uc(t),Uc(e)!==t&&s)throw Error(o(425))}function oo(){}var Gi=null,Zi=null;function Ji(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var qi=typeof setTimeout=="function"?setTimeout:void 0,q_=typeof clearTimeout=="function"?clearTimeout:void 0,Yc=typeof Promise=="function"?Promise:void 0,e0=typeof queueMicrotask=="function"?queueMicrotask:typeof Yc<"u"?function(e){return Yc.resolve(null).then(e).catch(t0)}:qi;function t0(e){setTimeout(function(){throw e})}function el(e,t){var s=t,i=0;do{var a=s.nextSibling;if(e.removeChild(s),a&&a.nodeType===8)if(s=a.data,s==="/$"){if(i===0){e.removeChild(a),Xr(t);return}i--}else s!=="$"&&s!=="$?"&&s!=="$!"||i++;s=a}while(s);Xr(t)}function pn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Wc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var s=e.data;if(s==="$"||s==="$!"||s==="$?"){if(t===0)return e;t--}else s==="/$"&&t++}e=e.previousSibling}return null}var lr=Math.random().toString(36).slice(2),Yt="__reactFiber$"+lr,ss="__reactProps$"+lr,Zt="__reactContainer$"+lr,tl="__reactEvents$"+lr,n0="__reactListeners$"+lr,r0="__reactHandles$"+lr;function In(e){var t=e[Yt];if(t)return t;for(var s=e.parentNode;s;){if(t=s[Zt]||s[Yt]){if(s=t.alternate,t.child!==null||s!==null&&s.child!==null)for(e=Wc(e);e!==null;){if(s=e[Yt])return s;e=Wc(e)}return t}e=s,s=e.parentNode}return null}function os(e){return e=e[Yt]||e[Zt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ar(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(o(33))}function io(e){return e[ss]||null}var nl=[],ur=-1;function hn(e){return{current:e}}function Re(e){0>ur||(e.current=nl[ur],nl[ur]=null,ur--)}function Pe(e,t){ur++,nl[ur]=e.current,e.current=t}var mn={},et=hn(mn),ct=hn(!1),An=mn;function cr(e,t){var s=e.type.contextTypes;if(!s)return mn;var i=e.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===t)return i.__reactInternalMemoizedMaskedChildContext;var a={},c;for(c in s)a[c]=t[c];return i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function dt(e){return e=e.childContextTypes,e!=null}function lo(){Re(ct),Re(et)}function Hc(e,t,s){if(et.current!==mn)throw Error(o(168));Pe(et,t),Pe(ct,s)}function Qc(e,t,s){var i=e.stateNode;if(t=t.childContextTypes,typeof i.getChildContext!="function")return s;i=i.getChildContext();for(var a in i)if(!(a in t))throw Error(o(108,Se(e)||"Unknown",a));return Y({},s,i)}function ao(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||mn,An=et.current,Pe(et,e),Pe(ct,ct.current),!0}function Xc(e,t,s){var i=e.stateNode;if(!i)throw Error(o(169));s?(e=Qc(e,t,An),i.__reactInternalMemoizedMergedChildContext=e,Re(ct),Re(et),Pe(et,e)):Re(ct),Pe(ct,s)}var Jt=null,uo=!1,rl=!1;function $c(e){Jt===null?Jt=[e]:Jt.push(e)}function s0(e){uo=!0,$c(e)}function _n(){if(!rl&&Jt!==null){rl=!0;var e=0,t=we;try{var s=Jt;for(we=1;e<s.length;e++){var i=s[e];do i=i(!0);while(i!==null)}Jt=null,uo=!1}catch(a){throw Jt!==null&&(Jt=Jt.slice(e+1)),Gu(Ci,_n),a}finally{we=t,rl=!1}}return null}var dr=[],fr=0,co=null,fo=0,St=[],kt=0,jn=null,qt=1,en="";function Nn(e,t){dr[fr++]=fo,dr[fr++]=co,co=e,fo=t}function Kc(e,t,s){St[kt++]=qt,St[kt++]=en,St[kt++]=jn,jn=e;var i=qt;e=en;var a=32-Dt(i)-1;i&=~(1<<a),s+=1;var c=32-Dt(t)+a;if(30<c){var h=a-a%5;c=(i&(1<<h)-1).toString(32),i>>=h,a-=h,qt=1<<32-Dt(t)+a|s<<a|i,en=c+e}else qt=1<<c|s<<a|i,en=e}function sl(e){e.return!==null&&(Nn(e,1),Kc(e,1,0))}function ol(e){for(;e===co;)co=dr[--fr],dr[fr]=null,fo=dr[--fr],dr[fr]=null;for(;e===jn;)jn=St[--kt],St[kt]=null,en=St[--kt],St[kt]=null,qt=St[--kt],St[kt]=null}var vt=null,xt=null,Le=!1,It=null;function Gc(e,t){var s=Tt(5,null,null,0);s.elementType="DELETED",s.stateNode=t,s.return=e,t=e.deletions,t===null?(e.deletions=[s],e.flags|=16):t.push(s)}function Zc(e,t){switch(e.tag){case 5:var s=e.type;return t=t.nodeType!==1||s.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,vt=e,xt=pn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,vt=e,xt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(s=jn!==null?{id:qt,overflow:en}:null,e.memoizedState={dehydrated:t,treeContext:s,retryLane:1073741824},s=Tt(18,null,null,0),s.stateNode=t,s.return=e,e.child=s,vt=e,xt=null,!0):!1;default:return!1}}function il(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ll(e){if(Le){var t=xt;if(t){var s=t;if(!Zc(e,t)){if(il(e))throw Error(o(418));t=pn(s.nextSibling);var i=vt;t&&Zc(e,t)?Gc(i,s):(e.flags=e.flags&-4097|2,Le=!1,vt=e)}}else{if(il(e))throw Error(o(418));e.flags=e.flags&-4097|2,Le=!1,vt=e}}}function Jc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;vt=e}function po(e){if(e!==vt)return!1;if(!Le)return Jc(e),Le=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ji(e.type,e.memoizedProps)),t&&(t=xt)){if(il(e))throw qc(),Error(o(418));for(;t;)Gc(e,t),t=pn(t.nextSibling)}if(Jc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var s=e.data;if(s==="/$"){if(t===0){xt=pn(e.nextSibling);break e}t--}else s!=="$"&&s!=="$!"&&s!=="$?"||t++}e=e.nextSibling}xt=null}}else xt=vt?pn(e.stateNode.nextSibling):null;return!0}function qc(){for(var e=xt;e;)e=pn(e.nextSibling)}function pr(){xt=vt=null,Le=!1}function al(e){It===null?It=[e]:It.push(e)}var o0=O.ReactCurrentBatchConfig;function is(e,t,s){if(e=s.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(s._owner){if(s=s._owner,s){if(s.tag!==1)throw Error(o(309));var i=s.stateNode}if(!i)throw Error(o(147,e));var a=i,c=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===c?t.ref:(t=function(h){var v=a.refs;h===null?delete v[c]:v[c]=h},t._stringRef=c,t)}if(typeof e!="string")throw Error(o(284));if(!s._owner)throw Error(o(290,e))}return e}function ho(e,t){throw e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ed(e){var t=e._init;return t(e._payload)}function td(e){function t(C,S){if(e){var P=C.deletions;P===null?(C.deletions=[S],C.flags|=16):P.push(S)}}function s(C,S){if(!e)return null;for(;S!==null;)t(C,S),S=S.sibling;return null}function i(C,S){for(C=new Map;S!==null;)S.key!==null?C.set(S.key,S):C.set(S.index,S),S=S.sibling;return C}function a(C,S){return C=bn(C,S),C.index=0,C.sibling=null,C}function c(C,S,P){return C.index=P,e?(P=C.alternate,P!==null?(P=P.index,P<S?(C.flags|=2,S):P):(C.flags|=2,S)):(C.flags|=1048576,S)}function h(C){return e&&C.alternate===null&&(C.flags|=2),C}function v(C,S,P,W){return S===null||S.tag!==6?(S=ql(P,C.mode,W),S.return=C,S):(S=a(S,P),S.return=C,S)}function w(C,S,P,W){var ee=P.type;return ee===te?z(C,S,P.props.children,W,P.key):S!==null&&(S.elementType===ee||typeof ee=="object"&&ee!==null&&ee.$$typeof===Te&&ed(ee)===S.type)?(W=a(S,P.props),W.ref=is(C,S,P),W.return=C,W):(W=Oo(P.type,P.key,P.props,null,C.mode,W),W.ref=is(C,S,P),W.return=C,W)}function M(C,S,P,W){return S===null||S.tag!==4||S.stateNode.containerInfo!==P.containerInfo||S.stateNode.implementation!==P.implementation?(S=ea(P,C.mode,W),S.return=C,S):(S=a(S,P.children||[]),S.return=C,S)}function z(C,S,P,W,ee){return S===null||S.tag!==7?(S=Wn(P,C.mode,W,ee),S.return=C,S):(S=a(S,P),S.return=C,S)}function U(C,S,P){if(typeof S=="string"&&S!==""||typeof S=="number")return S=ql(""+S,C.mode,P),S.return=C,S;if(typeof S=="object"&&S!==null){switch(S.$$typeof){case F:return P=Oo(S.type,S.key,S.props,null,C.mode,P),P.ref=is(C,null,S),P.return=C,P;case K:return S=ea(S,C.mode,P),S.return=C,S;case Te:var W=S._init;return U(C,W(S._payload),P)}if(jr(S)||H(S))return S=Wn(S,C.mode,P,null),S.return=C,S;ho(C,S)}return null}function V(C,S,P,W){var ee=S!==null?S.key:null;if(typeof P=="string"&&P!==""||typeof P=="number")return ee!==null?null:v(C,S,""+P,W);if(typeof P=="object"&&P!==null){switch(P.$$typeof){case F:return P.key===ee?w(C,S,P,W):null;case K:return P.key===ee?M(C,S,P,W):null;case Te:return ee=P._init,V(C,S,ee(P._payload),W)}if(jr(P)||H(P))return ee!==null?null:z(C,S,P,W,null);ho(C,P)}return null}function X(C,S,P,W,ee){if(typeof W=="string"&&W!==""||typeof W=="number")return C=C.get(P)||null,v(S,C,""+W,ee);if(typeof W=="object"&&W!==null){switch(W.$$typeof){case F:return C=C.get(W.key===null?P:W.key)||null,w(S,C,W,ee);case K:return C=C.get(W.key===null?P:W.key)||null,M(S,C,W,ee);case Te:var ne=W._init;return X(C,S,P,ne(W._payload),ee)}if(jr(W)||H(W))return C=C.get(P)||null,z(S,C,W,ee,null);ho(S,W)}return null}function Z(C,S,P,W){for(var ee=null,ne=null,re=S,se=S=0,Xe=null;re!==null&&se<P.length;se++){re.index>se?(Xe=re,re=null):Xe=re.sibling;var ge=V(C,re,P[se],W);if(ge===null){re===null&&(re=Xe);break}e&&re&&ge.alternate===null&&t(C,re),S=c(ge,S,se),ne===null?ee=ge:ne.sibling=ge,ne=ge,re=Xe}if(se===P.length)return s(C,re),Le&&Nn(C,se),ee;if(re===null){for(;se<P.length;se++)re=U(C,P[se],W),re!==null&&(S=c(re,S,se),ne===null?ee=re:ne.sibling=re,ne=re);return Le&&Nn(C,se),ee}for(re=i(C,re);se<P.length;se++)Xe=X(re,C,se,P[se],W),Xe!==null&&(e&&Xe.alternate!==null&&re.delete(Xe.key===null?se:Xe.key),S=c(Xe,S,se),ne===null?ee=Xe:ne.sibling=Xe,ne=Xe);return e&&re.forEach(function(Cn){return t(C,Cn)}),Le&&Nn(C,se),ee}function q(C,S,P,W){var ee=H(P);if(typeof ee!="function")throw Error(o(150));if(P=ee.call(P),P==null)throw Error(o(151));for(var ne=ee=null,re=S,se=S=0,Xe=null,ge=P.next();re!==null&&!ge.done;se++,ge=P.next()){re.index>se?(Xe=re,re=null):Xe=re.sibling;var Cn=V(C,re,ge.value,W);if(Cn===null){re===null&&(re=Xe);break}e&&re&&Cn.alternate===null&&t(C,re),S=c(Cn,S,se),ne===null?ee=Cn:ne.sibling=Cn,ne=Cn,re=Xe}if(ge.done)return s(C,re),Le&&Nn(C,se),ee;if(re===null){for(;!ge.done;se++,ge=P.next())ge=U(C,ge.value,W),ge!==null&&(S=c(ge,S,se),ne===null?ee=ge:ne.sibling=ge,ne=ge);return Le&&Nn(C,se),ee}for(re=i(C,re);!ge.done;se++,ge=P.next())ge=X(re,C,se,ge.value,W),ge!==null&&(e&&ge.alternate!==null&&re.delete(ge.key===null?se:ge.key),S=c(ge,S,se),ne===null?ee=ge:ne.sibling=ge,ne=ge);return e&&re.forEach(function(O0){return t(C,O0)}),Le&&Nn(C,se),ee}function ze(C,S,P,W){if(typeof P=="object"&&P!==null&&P.type===te&&P.key===null&&(P=P.props.children),typeof P=="object"&&P!==null){switch(P.$$typeof){case F:e:{for(var ee=P.key,ne=S;ne!==null;){if(ne.key===ee){if(ee=P.type,ee===te){if(ne.tag===7){s(C,ne.sibling),S=a(ne,P.props.children),S.return=C,C=S;break e}}else if(ne.elementType===ee||typeof ee=="object"&&ee!==null&&ee.$$typeof===Te&&ed(ee)===ne.type){s(C,ne.sibling),S=a(ne,P.props),S.ref=is(C,ne,P),S.return=C,C=S;break e}s(C,ne);break}else t(C,ne);ne=ne.sibling}P.type===te?(S=Wn(P.props.children,C.mode,W,P.key),S.return=C,C=S):(W=Oo(P.type,P.key,P.props,null,C.mode,W),W.ref=is(C,S,P),W.return=C,C=W)}return h(C);case K:e:{for(ne=P.key;S!==null;){if(S.key===ne)if(S.tag===4&&S.stateNode.containerInfo===P.containerInfo&&S.stateNode.implementation===P.implementation){s(C,S.sibling),S=a(S,P.children||[]),S.return=C,C=S;break e}else{s(C,S);break}else t(C,S);S=S.sibling}S=ea(P,C.mode,W),S.return=C,C=S}return h(C);case Te:return ne=P._init,ze(C,S,ne(P._payload),W)}if(jr(P))return Z(C,S,P,W);if(H(P))return q(C,S,P,W);ho(C,P)}return typeof P=="string"&&P!==""||typeof P=="number"?(P=""+P,S!==null&&S.tag===6?(s(C,S.sibling),S=a(S,P),S.return=C,C=S):(s(C,S),S=ql(P,C.mode,W),S.return=C,C=S),h(C)):s(C,S)}return ze}var hr=td(!0),nd=td(!1),mo=hn(null),_o=null,mr=null,ul=null;function cl(){ul=mr=_o=null}function dl(e){var t=mo.current;Re(mo),e._currentValue=t}function fl(e,t,s){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===s)break;e=e.return}}function _r(e,t){_o=e,ul=mr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(ft=!0),e.firstContext=null)}function bt(e){var t=e._currentValue;if(ul!==e)if(e={context:e,memoizedValue:t,next:null},mr===null){if(_o===null)throw Error(o(308));mr=e,_o.dependencies={lanes:0,firstContext:e}}else mr=mr.next=e;return t}var Vn=null;function pl(e){Vn===null?Vn=[e]:Vn.push(e)}function rd(e,t,s,i){var a=t.interleaved;return a===null?(s.next=s,pl(t)):(s.next=a.next,a.next=s),t.interleaved=s,tn(e,i)}function tn(e,t){e.lanes|=t;var s=e.alternate;for(s!==null&&(s.lanes|=t),s=e,e=e.return;e!==null;)e.childLanes|=t,s=e.alternate,s!==null&&(s.childLanes|=t),s=e,e=e.return;return s.tag===3?s.stateNode:null}var gn=!1;function hl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function sd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function nn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function yn(e,t,s){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(_e&2)!==0){var a=i.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),i.pending=t,tn(e,s)}return a=i.interleaved,a===null?(t.next=t,pl(i)):(t.next=a.next,a.next=t),i.interleaved=t,tn(e,s)}function go(e,t,s){if(t=t.updateQueue,t!==null&&(t=t.shared,(s&4194240)!==0)){var i=t.lanes;i&=e.pendingLanes,s|=i,t.lanes=s,Ei(e,s)}}function od(e,t){var s=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,s===i)){var a=null,c=null;if(s=s.firstBaseUpdate,s!==null){do{var h={eventTime:s.eventTime,lane:s.lane,tag:s.tag,payload:s.payload,callback:s.callback,next:null};c===null?a=c=h:c=c.next=h,s=s.next}while(s!==null);c===null?a=c=t:c=c.next=t}else a=c=t;s={baseState:i.baseState,firstBaseUpdate:a,lastBaseUpdate:c,shared:i.shared,effects:i.effects},e.updateQueue=s;return}e=s.lastBaseUpdate,e===null?s.firstBaseUpdate=t:e.next=t,s.lastBaseUpdate=t}function yo(e,t,s,i){var a=e.updateQueue;gn=!1;var c=a.firstBaseUpdate,h=a.lastBaseUpdate,v=a.shared.pending;if(v!==null){a.shared.pending=null;var w=v,M=w.next;w.next=null,h===null?c=M:h.next=M,h=w;var z=e.alternate;z!==null&&(z=z.updateQueue,v=z.lastBaseUpdate,v!==h&&(v===null?z.firstBaseUpdate=M:v.next=M,z.lastBaseUpdate=w))}if(c!==null){var U=a.baseState;h=0,z=M=w=null,v=c;do{var V=v.lane,X=v.eventTime;if((i&V)===V){z!==null&&(z=z.next={eventTime:X,lane:0,tag:v.tag,payload:v.payload,callback:v.callback,next:null});e:{var Z=e,q=v;switch(V=t,X=s,q.tag){case 1:if(Z=q.payload,typeof Z=="function"){U=Z.call(X,U,V);break e}U=Z;break e;case 3:Z.flags=Z.flags&-65537|128;case 0:if(Z=q.payload,V=typeof Z=="function"?Z.call(X,U,V):Z,V==null)break e;U=Y({},U,V);break e;case 2:gn=!0}}v.callback!==null&&v.lane!==0&&(e.flags|=64,V=a.effects,V===null?a.effects=[v]:V.push(v))}else X={eventTime:X,lane:V,tag:v.tag,payload:v.payload,callback:v.callback,next:null},z===null?(M=z=X,w=U):z=z.next=X,h|=V;if(v=v.next,v===null){if(v=a.shared.pending,v===null)break;V=v,v=V.next,V.next=null,a.lastBaseUpdate=V,a.shared.pending=null}}while(!0);if(z===null&&(w=U),a.baseState=w,a.firstBaseUpdate=M,a.lastBaseUpdate=z,t=a.shared.interleaved,t!==null){a=t;do h|=a.lane,a=a.next;while(a!==t)}else c===null&&(a.shared.lanes=0);Bn|=h,e.lanes=h,e.memoizedState=U}}function id(e,t,s){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var i=e[t],a=i.callback;if(a!==null){if(i.callback=null,i=s,typeof a!="function")throw Error(o(191,a));a.call(i)}}}var ls={},Wt=hn(ls),as=hn(ls),us=hn(ls);function On(e){if(e===ls)throw Error(o(174));return e}function ml(e,t){switch(Pe(us,t),Pe(as,e),Pe(Wt,ls),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:_i(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=_i(t,e)}Re(Wt),Pe(Wt,t)}function gr(){Re(Wt),Re(as),Re(us)}function ld(e){On(us.current);var t=On(Wt.current),s=_i(t,e.type);t!==s&&(Pe(as,e),Pe(Wt,s))}function _l(e){as.current===e&&(Re(Wt),Re(as))}var Ie=hn(0);function vo(e){for(var t=e;t!==null;){if(t.tag===13){var s=t.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||s.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var gl=[];function yl(){for(var e=0;e<gl.length;e++)gl[e]._workInProgressVersionPrimary=null;gl.length=0}var xo=O.ReactCurrentDispatcher,vl=O.ReactCurrentBatchConfig,zn=0,Ae=null,Ue=null,He=null,wo=!1,cs=!1,ds=0,i0=0;function tt(){throw Error(o(321))}function xl(e,t){if(t===null)return!1;for(var s=0;s<t.length&&s<e.length;s++)if(!Lt(e[s],t[s]))return!1;return!0}function wl(e,t,s,i,a,c){if(zn=c,Ae=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,xo.current=e===null||e.memoizedState===null?c0:d0,e=s(i,a),cs){c=0;do{if(cs=!1,ds=0,25<=c)throw Error(o(301));c+=1,He=Ue=null,t.updateQueue=null,xo.current=f0,e=s(i,a)}while(cs)}if(xo.current=bo,t=Ue!==null&&Ue.next!==null,zn=0,He=Ue=Ae=null,wo=!1,t)throw Error(o(300));return e}function Sl(){var e=ds!==0;return ds=0,e}function Ht(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return He===null?Ae.memoizedState=He=e:He=He.next=e,He}function Ct(){if(Ue===null){var e=Ae.alternate;e=e!==null?e.memoizedState:null}else e=Ue.next;var t=He===null?Ae.memoizedState:He.next;if(t!==null)He=t,Ue=e;else{if(e===null)throw Error(o(310));Ue=e,e={memoizedState:Ue.memoizedState,baseState:Ue.baseState,baseQueue:Ue.baseQueue,queue:Ue.queue,next:null},He===null?Ae.memoizedState=He=e:He=He.next=e}return He}function fs(e,t){return typeof t=="function"?t(e):t}function kl(e){var t=Ct(),s=t.queue;if(s===null)throw Error(o(311));s.lastRenderedReducer=e;var i=Ue,a=i.baseQueue,c=s.pending;if(c!==null){if(a!==null){var h=a.next;a.next=c.next,c.next=h}i.baseQueue=a=c,s.pending=null}if(a!==null){c=a.next,i=i.baseState;var v=h=null,w=null,M=c;do{var z=M.lane;if((zn&z)===z)w!==null&&(w=w.next={lane:0,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null}),i=M.hasEagerState?M.eagerState:e(i,M.action);else{var U={lane:z,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null};w===null?(v=w=U,h=i):w=w.next=U,Ae.lanes|=z,Bn|=z}M=M.next}while(M!==null&&M!==c);w===null?h=i:w.next=v,Lt(i,t.memoizedState)||(ft=!0),t.memoizedState=i,t.baseState=h,t.baseQueue=w,s.lastRenderedState=i}if(e=s.interleaved,e!==null){a=e;do c=a.lane,Ae.lanes|=c,Bn|=c,a=a.next;while(a!==e)}else a===null&&(s.lanes=0);return[t.memoizedState,s.dispatch]}function bl(e){var t=Ct(),s=t.queue;if(s===null)throw Error(o(311));s.lastRenderedReducer=e;var i=s.dispatch,a=s.pending,c=t.memoizedState;if(a!==null){s.pending=null;var h=a=a.next;do c=e(c,h.action),h=h.next;while(h!==a);Lt(c,t.memoizedState)||(ft=!0),t.memoizedState=c,t.baseQueue===null&&(t.baseState=c),s.lastRenderedState=c}return[c,i]}function ad(){}function ud(e,t){var s=Ae,i=Ct(),a=t(),c=!Lt(i.memoizedState,a);if(c&&(i.memoizedState=a,ft=!0),i=i.queue,Cl(fd.bind(null,s,i,e),[e]),i.getSnapshot!==t||c||He!==null&&He.memoizedState.tag&1){if(s.flags|=2048,ps(9,dd.bind(null,s,i,a,t),void 0,null),Qe===null)throw Error(o(349));(zn&30)!==0||cd(s,t,a)}return a}function cd(e,t,s){e.flags|=16384,e={getSnapshot:t,value:s},t=Ae.updateQueue,t===null?(t={lastEffect:null,stores:null},Ae.updateQueue=t,t.stores=[e]):(s=t.stores,s===null?t.stores=[e]:s.push(e))}function dd(e,t,s,i){t.value=s,t.getSnapshot=i,pd(t)&&hd(e)}function fd(e,t,s){return s(function(){pd(t)&&hd(e)})}function pd(e){var t=e.getSnapshot;e=e.value;try{var s=t();return!Lt(e,s)}catch{return!0}}function hd(e){var t=tn(e,1);t!==null&&Vt(t,e,1,-1)}function md(e){var t=Ht();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:fs,lastRenderedState:e},t.queue=e,e=e.dispatch=u0.bind(null,Ae,e),[t.memoizedState,e]}function ps(e,t,s,i){return e={tag:e,create:t,destroy:s,deps:i,next:null},t=Ae.updateQueue,t===null?(t={lastEffect:null,stores:null},Ae.updateQueue=t,t.lastEffect=e.next=e):(s=t.lastEffect,s===null?t.lastEffect=e.next=e:(i=s.next,s.next=e,e.next=i,t.lastEffect=e)),e}function _d(){return Ct().memoizedState}function So(e,t,s,i){var a=Ht();Ae.flags|=e,a.memoizedState=ps(1|t,s,void 0,i===void 0?null:i)}function ko(e,t,s,i){var a=Ct();i=i===void 0?null:i;var c=void 0;if(Ue!==null){var h=Ue.memoizedState;if(c=h.destroy,i!==null&&xl(i,h.deps)){a.memoizedState=ps(t,s,c,i);return}}Ae.flags|=e,a.memoizedState=ps(1|t,s,c,i)}function gd(e,t){return So(8390656,8,e,t)}function Cl(e,t){return ko(2048,8,e,t)}function yd(e,t){return ko(4,2,e,t)}function vd(e,t){return ko(4,4,e,t)}function xd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function wd(e,t,s){return s=s!=null?s.concat([e]):null,ko(4,4,xd.bind(null,t,e),s)}function Pl(){}function Sd(e,t){var s=Ct();t=t===void 0?null:t;var i=s.memoizedState;return i!==null&&t!==null&&xl(t,i[1])?i[0]:(s.memoizedState=[e,t],e)}function kd(e,t){var s=Ct();t=t===void 0?null:t;var i=s.memoizedState;return i!==null&&t!==null&&xl(t,i[1])?i[0]:(e=e(),s.memoizedState=[e,t],e)}function bd(e,t,s){return(zn&21)===0?(e.baseState&&(e.baseState=!1,ft=!0),e.memoizedState=s):(Lt(s,t)||(s=ec(),Ae.lanes|=s,Bn|=s,e.baseState=!0),t)}function l0(e,t){var s=we;we=s!==0&&4>s?s:4,e(!0);var i=vl.transition;vl.transition={};try{e(!1),t()}finally{we=s,vl.transition=i}}function Cd(){return Ct().memoizedState}function a0(e,t,s){var i=Sn(e);if(s={lane:i,action:s,hasEagerState:!1,eagerState:null,next:null},Pd(e))Td(t,s);else if(s=rd(e,t,s,i),s!==null){var a=it();Vt(s,e,i,a),Ed(s,t,i)}}function u0(e,t,s){var i=Sn(e),a={lane:i,action:s,hasEagerState:!1,eagerState:null,next:null};if(Pd(e))Td(t,a);else{var c=e.alternate;if(e.lanes===0&&(c===null||c.lanes===0)&&(c=t.lastRenderedReducer,c!==null))try{var h=t.lastRenderedState,v=c(h,s);if(a.hasEagerState=!0,a.eagerState=v,Lt(v,h)){var w=t.interleaved;w===null?(a.next=a,pl(t)):(a.next=w.next,w.next=a),t.interleaved=a;return}}catch{}finally{}s=rd(e,t,a,i),s!==null&&(a=it(),Vt(s,e,i,a),Ed(s,t,i))}}function Pd(e){var t=e.alternate;return e===Ae||t!==null&&t===Ae}function Td(e,t){cs=wo=!0;var s=e.pending;s===null?t.next=t:(t.next=s.next,s.next=t),e.pending=t}function Ed(e,t,s){if((s&4194240)!==0){var i=t.lanes;i&=e.pendingLanes,s|=i,t.lanes=s,Ei(e,s)}}var bo={readContext:bt,useCallback:tt,useContext:tt,useEffect:tt,useImperativeHandle:tt,useInsertionEffect:tt,useLayoutEffect:tt,useMemo:tt,useReducer:tt,useRef:tt,useState:tt,useDebugValue:tt,useDeferredValue:tt,useTransition:tt,useMutableSource:tt,useSyncExternalStore:tt,useId:tt,unstable_isNewReconciler:!1},c0={readContext:bt,useCallback:function(e,t){return Ht().memoizedState=[e,t===void 0?null:t],e},useContext:bt,useEffect:gd,useImperativeHandle:function(e,t,s){return s=s!=null?s.concat([e]):null,So(4194308,4,xd.bind(null,t,e),s)},useLayoutEffect:function(e,t){return So(4194308,4,e,t)},useInsertionEffect:function(e,t){return So(4,2,e,t)},useMemo:function(e,t){var s=Ht();return t=t===void 0?null:t,e=e(),s.memoizedState=[e,t],e},useReducer:function(e,t,s){var i=Ht();return t=s!==void 0?s(t):t,i.memoizedState=i.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},i.queue=e,e=e.dispatch=a0.bind(null,Ae,e),[i.memoizedState,e]},useRef:function(e){var t=Ht();return e={current:e},t.memoizedState=e},useState:md,useDebugValue:Pl,useDeferredValue:function(e){return Ht().memoizedState=e},useTransition:function(){var e=md(!1),t=e[0];return e=l0.bind(null,e[1]),Ht().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,s){var i=Ae,a=Ht();if(Le){if(s===void 0)throw Error(o(407));s=s()}else{if(s=t(),Qe===null)throw Error(o(349));(zn&30)!==0||cd(i,t,s)}a.memoizedState=s;var c={value:s,getSnapshot:t};return a.queue=c,gd(fd.bind(null,i,c,e),[e]),i.flags|=2048,ps(9,dd.bind(null,i,c,s,t),void 0,null),s},useId:function(){var e=Ht(),t=Qe.identifierPrefix;if(Le){var s=en,i=qt;s=(i&~(1<<32-Dt(i)-1)).toString(32)+s,t=":"+t+"R"+s,s=ds++,0<s&&(t+="H"+s.toString(32)),t+=":"}else s=i0++,t=":"+t+"r"+s.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},d0={readContext:bt,useCallback:Sd,useContext:bt,useEffect:Cl,useImperativeHandle:wd,useInsertionEffect:yd,useLayoutEffect:vd,useMemo:kd,useReducer:kl,useRef:_d,useState:function(){return kl(fs)},useDebugValue:Pl,useDeferredValue:function(e){var t=Ct();return bd(t,Ue.memoizedState,e)},useTransition:function(){var e=kl(fs)[0],t=Ct().memoizedState;return[e,t]},useMutableSource:ad,useSyncExternalStore:ud,useId:Cd,unstable_isNewReconciler:!1},f0={readContext:bt,useCallback:Sd,useContext:bt,useEffect:Cl,useImperativeHandle:wd,useInsertionEffect:yd,useLayoutEffect:vd,useMemo:kd,useReducer:bl,useRef:_d,useState:function(){return bl(fs)},useDebugValue:Pl,useDeferredValue:function(e){var t=Ct();return Ue===null?t.memoizedState=e:bd(t,Ue.memoizedState,e)},useTransition:function(){var e=bl(fs)[0],t=Ct().memoizedState;return[e,t]},useMutableSource:ad,useSyncExternalStore:ud,useId:Cd,unstable_isNewReconciler:!1};function At(e,t){if(e&&e.defaultProps){t=Y({},t),e=e.defaultProps;for(var s in e)t[s]===void 0&&(t[s]=e[s]);return t}return t}function Tl(e,t,s,i){t=e.memoizedState,s=s(i,t),s=s==null?t:Y({},t,s),e.memoizedState=s,e.lanes===0&&(e.updateQueue.baseState=s)}var Co={isMounted:function(e){return(e=e._reactInternals)?Ln(e)===e:!1},enqueueSetState:function(e,t,s){e=e._reactInternals;var i=it(),a=Sn(e),c=nn(i,a);c.payload=t,s!=null&&(c.callback=s),t=yn(e,c,a),t!==null&&(Vt(t,e,a,i),go(t,e,a))},enqueueReplaceState:function(e,t,s){e=e._reactInternals;var i=it(),a=Sn(e),c=nn(i,a);c.tag=1,c.payload=t,s!=null&&(c.callback=s),t=yn(e,c,a),t!==null&&(Vt(t,e,a,i),go(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var s=it(),i=Sn(e),a=nn(s,i);a.tag=2,t!=null&&(a.callback=t),t=yn(e,a,i),t!==null&&(Vt(t,e,i,s),go(t,e,i))}};function Md(e,t,s,i,a,c,h){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,c,h):t.prototype&&t.prototype.isPureReactComponent?!qr(s,i)||!qr(a,c):!0}function Rd(e,t,s){var i=!1,a=mn,c=t.contextType;return typeof c=="object"&&c!==null?c=bt(c):(a=dt(t)?An:et.current,i=t.contextTypes,c=(i=i!=null)?cr(e,a):mn),t=new t(s,c),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Co,e.stateNode=t,t._reactInternals=e,i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=c),t}function Dd(e,t,s,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(s,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(s,i),t.state!==e&&Co.enqueueReplaceState(t,t.state,null)}function El(e,t,s,i){var a=e.stateNode;a.props=s,a.state=e.memoizedState,a.refs={},hl(e);var c=t.contextType;typeof c=="object"&&c!==null?a.context=bt(c):(c=dt(t)?An:et.current,a.context=cr(e,c)),a.state=e.memoizedState,c=t.getDerivedStateFromProps,typeof c=="function"&&(Tl(e,t,c,s),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&Co.enqueueReplaceState(a,a.state,null),yo(e,s,a,i),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function yr(e,t){try{var s="",i=t;do s+=de(i),i=i.return;while(i);var a=s}catch(c){a=`
Error generating stack: `+c.message+`
`+c.stack}return{value:e,source:t,stack:a,digest:null}}function Ml(e,t,s){return{value:e,source:null,stack:s??null,digest:t??null}}function Rl(e,t){try{console.error(t.value)}catch(s){setTimeout(function(){throw s})}}var p0=typeof WeakMap=="function"?WeakMap:Map;function Ld(e,t,s){s=nn(-1,s),s.tag=3,s.payload={element:null};var i=t.value;return s.callback=function(){Lo||(Lo=!0,Hl=i),Rl(e,t)},s}function Id(e,t,s){s=nn(-1,s),s.tag=3;var i=e.type.getDerivedStateFromError;if(typeof i=="function"){var a=t.value;s.payload=function(){return i(a)},s.callback=function(){Rl(e,t)}}var c=e.stateNode;return c!==null&&typeof c.componentDidCatch=="function"&&(s.callback=function(){Rl(e,t),typeof i!="function"&&(xn===null?xn=new Set([this]):xn.add(this));var h=t.stack;this.componentDidCatch(t.value,{componentStack:h!==null?h:""})}),s}function Ad(e,t,s){var i=e.pingCache;if(i===null){i=e.pingCache=new p0;var a=new Set;i.set(t,a)}else a=i.get(t),a===void 0&&(a=new Set,i.set(t,a));a.has(s)||(a.add(s),e=T0.bind(null,e,t,s),t.then(e,e))}function jd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Nd(e,t,s,i,a){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,s.flags|=131072,s.flags&=-52805,s.tag===1&&(s.alternate===null?s.tag=17:(t=nn(-1,1),t.tag=2,yn(s,t,1))),s.lanes|=1),e):(e.flags|=65536,e.lanes=a,e)}var h0=O.ReactCurrentOwner,ft=!1;function ot(e,t,s,i){t.child=e===null?nd(t,null,s,i):hr(t,e.child,s,i)}function Vd(e,t,s,i,a){s=s.render;var c=t.ref;return _r(t,a),i=wl(e,t,s,i,c,a),s=Sl(),e!==null&&!ft?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,rn(e,t,a)):(Le&&s&&sl(t),t.flags|=1,ot(e,t,i,a),t.child)}function Od(e,t,s,i,a){if(e===null){var c=s.type;return typeof c=="function"&&!Jl(c)&&c.defaultProps===void 0&&s.compare===null&&s.defaultProps===void 0?(t.tag=15,t.type=c,zd(e,t,c,i,a)):(e=Oo(s.type,null,i,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(c=e.child,(e.lanes&a)===0){var h=c.memoizedProps;if(s=s.compare,s=s!==null?s:qr,s(h,i)&&e.ref===t.ref)return rn(e,t,a)}return t.flags|=1,e=bn(c,i),e.ref=t.ref,e.return=t,t.child=e}function zd(e,t,s,i,a){if(e!==null){var c=e.memoizedProps;if(qr(c,i)&&e.ref===t.ref)if(ft=!1,t.pendingProps=i=c,(e.lanes&a)!==0)(e.flags&131072)!==0&&(ft=!0);else return t.lanes=e.lanes,rn(e,t,a)}return Dl(e,t,s,i,a)}function Bd(e,t,s){var i=t.pendingProps,a=i.children,c=e!==null?e.memoizedState:null;if(i.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Pe(xr,wt),wt|=s;else{if((s&1073741824)===0)return e=c!==null?c.baseLanes|s:s,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Pe(xr,wt),wt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=c!==null?c.baseLanes:s,Pe(xr,wt),wt|=i}else c!==null?(i=c.baseLanes|s,t.memoizedState=null):i=s,Pe(xr,wt),wt|=i;return ot(e,t,a,s),t.child}function Fd(e,t){var s=t.ref;(e===null&&s!==null||e!==null&&e.ref!==s)&&(t.flags|=512,t.flags|=2097152)}function Dl(e,t,s,i,a){var c=dt(s)?An:et.current;return c=cr(t,c),_r(t,a),s=wl(e,t,s,i,c,a),i=Sl(),e!==null&&!ft?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,rn(e,t,a)):(Le&&i&&sl(t),t.flags|=1,ot(e,t,s,a),t.child)}function Ud(e,t,s,i,a){if(dt(s)){var c=!0;ao(t)}else c=!1;if(_r(t,a),t.stateNode===null)To(e,t),Rd(t,s,i),El(t,s,i,a),i=!0;else if(e===null){var h=t.stateNode,v=t.memoizedProps;h.props=v;var w=h.context,M=s.contextType;typeof M=="object"&&M!==null?M=bt(M):(M=dt(s)?An:et.current,M=cr(t,M));var z=s.getDerivedStateFromProps,U=typeof z=="function"||typeof h.getSnapshotBeforeUpdate=="function";U||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(v!==i||w!==M)&&Dd(t,h,i,M),gn=!1;var V=t.memoizedState;h.state=V,yo(t,i,h,a),w=t.memoizedState,v!==i||V!==w||ct.current||gn?(typeof z=="function"&&(Tl(t,s,z,i),w=t.memoizedState),(v=gn||Md(t,s,v,i,V,w,M))?(U||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(t.flags|=4194308)):(typeof h.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=w),h.props=i,h.state=w,h.context=M,i=v):(typeof h.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{h=t.stateNode,sd(e,t),v=t.memoizedProps,M=t.type===t.elementType?v:At(t.type,v),h.props=M,U=t.pendingProps,V=h.context,w=s.contextType,typeof w=="object"&&w!==null?w=bt(w):(w=dt(s)?An:et.current,w=cr(t,w));var X=s.getDerivedStateFromProps;(z=typeof X=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(v!==U||V!==w)&&Dd(t,h,i,w),gn=!1,V=t.memoizedState,h.state=V,yo(t,i,h,a);var Z=t.memoizedState;v!==U||V!==Z||ct.current||gn?(typeof X=="function"&&(Tl(t,s,X,i),Z=t.memoizedState),(M=gn||Md(t,s,M,i,V,Z,w)||!1)?(z||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(i,Z,w),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(i,Z,w)),typeof h.componentDidUpdate=="function"&&(t.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof h.componentDidUpdate!="function"||v===e.memoizedProps&&V===e.memoizedState||(t.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&V===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=Z),h.props=i,h.state=Z,h.context=w,i=M):(typeof h.componentDidUpdate!="function"||v===e.memoizedProps&&V===e.memoizedState||(t.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&V===e.memoizedState||(t.flags|=1024),i=!1)}return Ll(e,t,s,i,c,a)}function Ll(e,t,s,i,a,c){Fd(e,t);var h=(t.flags&128)!==0;if(!i&&!h)return a&&Xc(t,s,!1),rn(e,t,c);i=t.stateNode,h0.current=t;var v=h&&typeof s.getDerivedStateFromError!="function"?null:i.render();return t.flags|=1,e!==null&&h?(t.child=hr(t,e.child,null,c),t.child=hr(t,null,v,c)):ot(e,t,v,c),t.memoizedState=i.state,a&&Xc(t,s,!0),t.child}function Yd(e){var t=e.stateNode;t.pendingContext?Hc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Hc(e,t.context,!1),ml(e,t.containerInfo)}function Wd(e,t,s,i,a){return pr(),al(a),t.flags|=256,ot(e,t,s,i),t.child}var Il={dehydrated:null,treeContext:null,retryLane:0};function Al(e){return{baseLanes:e,cachePool:null,transitions:null}}function Hd(e,t,s){var i=t.pendingProps,a=Ie.current,c=!1,h=(t.flags&128)!==0,v;if((v=h)||(v=e!==null&&e.memoizedState===null?!1:(a&2)!==0),v?(c=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),Pe(Ie,a&1),e===null)return ll(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(h=i.children,e=i.fallback,c?(i=t.mode,c=t.child,h={mode:"hidden",children:h},(i&1)===0&&c!==null?(c.childLanes=0,c.pendingProps=h):c=zo(h,i,0,null),e=Wn(e,i,s,null),c.return=t,e.return=t,c.sibling=e,t.child=c,t.child.memoizedState=Al(s),t.memoizedState=Il,e):jl(t,h));if(a=e.memoizedState,a!==null&&(v=a.dehydrated,v!==null))return m0(e,t,h,i,v,a,s);if(c){c=i.fallback,h=t.mode,a=e.child,v=a.sibling;var w={mode:"hidden",children:i.children};return(h&1)===0&&t.child!==a?(i=t.child,i.childLanes=0,i.pendingProps=w,t.deletions=null):(i=bn(a,w),i.subtreeFlags=a.subtreeFlags&14680064),v!==null?c=bn(v,c):(c=Wn(c,h,s,null),c.flags|=2),c.return=t,i.return=t,i.sibling=c,t.child=i,i=c,c=t.child,h=e.child.memoizedState,h=h===null?Al(s):{baseLanes:h.baseLanes|s,cachePool:null,transitions:h.transitions},c.memoizedState=h,c.childLanes=e.childLanes&~s,t.memoizedState=Il,i}return c=e.child,e=c.sibling,i=bn(c,{mode:"visible",children:i.children}),(t.mode&1)===0&&(i.lanes=s),i.return=t,i.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=i,t.memoizedState=null,i}function jl(e,t){return t=zo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Po(e,t,s,i){return i!==null&&al(i),hr(t,e.child,null,s),e=jl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function m0(e,t,s,i,a,c,h){if(s)return t.flags&256?(t.flags&=-257,i=Ml(Error(o(422))),Po(e,t,h,i)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(c=i.fallback,a=t.mode,i=zo({mode:"visible",children:i.children},a,0,null),c=Wn(c,a,h,null),c.flags|=2,i.return=t,c.return=t,i.sibling=c,t.child=i,(t.mode&1)!==0&&hr(t,e.child,null,h),t.child.memoizedState=Al(h),t.memoizedState=Il,c);if((t.mode&1)===0)return Po(e,t,h,null);if(a.data==="$!"){if(i=a.nextSibling&&a.nextSibling.dataset,i)var v=i.dgst;return i=v,c=Error(o(419)),i=Ml(c,i,void 0),Po(e,t,h,i)}if(v=(h&e.childLanes)!==0,ft||v){if(i=Qe,i!==null){switch(h&-h){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=(a&(i.suspendedLanes|h))!==0?0:a,a!==0&&a!==c.retryLane&&(c.retryLane=a,tn(e,a),Vt(i,e,a,-1))}return Zl(),i=Ml(Error(o(421))),Po(e,t,h,i)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=E0.bind(null,e),a._reactRetry=t,null):(e=c.treeContext,xt=pn(a.nextSibling),vt=t,Le=!0,It=null,e!==null&&(St[kt++]=qt,St[kt++]=en,St[kt++]=jn,qt=e.id,en=e.overflow,jn=t),t=jl(t,i.children),t.flags|=4096,t)}function Qd(e,t,s){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),fl(e.return,t,s)}function Nl(e,t,s,i,a){var c=e.memoizedState;c===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:s,tailMode:a}:(c.isBackwards=t,c.rendering=null,c.renderingStartTime=0,c.last=i,c.tail=s,c.tailMode=a)}function Xd(e,t,s){var i=t.pendingProps,a=i.revealOrder,c=i.tail;if(ot(e,t,i.children,s),i=Ie.current,(i&2)!==0)i=i&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Qd(e,s,t);else if(e.tag===19)Qd(e,s,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}if(Pe(Ie,i),(t.mode&1)===0)t.memoizedState=null;else switch(a){case"forwards":for(s=t.child,a=null;s!==null;)e=s.alternate,e!==null&&vo(e)===null&&(a=s),s=s.sibling;s=a,s===null?(a=t.child,t.child=null):(a=s.sibling,s.sibling=null),Nl(t,!1,a,s,c);break;case"backwards":for(s=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&vo(e)===null){t.child=a;break}e=a.sibling,a.sibling=s,s=a,a=e}Nl(t,!0,s,null,c);break;case"together":Nl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function To(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function rn(e,t,s){if(e!==null&&(t.dependencies=e.dependencies),Bn|=t.lanes,(s&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,s=bn(e,e.pendingProps),t.child=s,s.return=t;e.sibling!==null;)e=e.sibling,s=s.sibling=bn(e,e.pendingProps),s.return=t;s.sibling=null}return t.child}function _0(e,t,s){switch(t.tag){case 3:Yd(t),pr();break;case 5:ld(t);break;case 1:dt(t.type)&&ao(t);break;case 4:ml(t,t.stateNode.containerInfo);break;case 10:var i=t.type._context,a=t.memoizedProps.value;Pe(mo,i._currentValue),i._currentValue=a;break;case 13:if(i=t.memoizedState,i!==null)return i.dehydrated!==null?(Pe(Ie,Ie.current&1),t.flags|=128,null):(s&t.child.childLanes)!==0?Hd(e,t,s):(Pe(Ie,Ie.current&1),e=rn(e,t,s),e!==null?e.sibling:null);Pe(Ie,Ie.current&1);break;case 19:if(i=(s&t.childLanes)!==0,(e.flags&128)!==0){if(i)return Xd(e,t,s);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),Pe(Ie,Ie.current),i)break;return null;case 22:case 23:return t.lanes=0,Bd(e,t,s)}return rn(e,t,s)}var $d,Vl,Kd,Gd;$d=function(e,t){for(var s=t.child;s!==null;){if(s.tag===5||s.tag===6)e.appendChild(s.stateNode);else if(s.tag!==4&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break;for(;s.sibling===null;){if(s.return===null||s.return===t)return;s=s.return}s.sibling.return=s.return,s=s.sibling}},Vl=function(){},Kd=function(e,t,s,i){var a=e.memoizedProps;if(a!==i){e=t.stateNode,On(Wt.current);var c=null;switch(s){case"input":a=qe(e,a),i=qe(e,i),c=[];break;case"select":a=Y({},a,{value:void 0}),i=Y({},i,{value:void 0}),c=[];break;case"textarea":a=mi(e,a),i=mi(e,i),c=[];break;default:typeof a.onClick!="function"&&typeof i.onClick=="function"&&(e.onclick=oo)}gi(s,i);var h;s=null;for(M in a)if(!i.hasOwnProperty(M)&&a.hasOwnProperty(M)&&a[M]!=null)if(M==="style"){var v=a[M];for(h in v)v.hasOwnProperty(h)&&(s||(s={}),s[h]="")}else M!=="dangerouslySetInnerHTML"&&M!=="children"&&M!=="suppressContentEditableWarning"&&M!=="suppressHydrationWarning"&&M!=="autoFocus"&&(u.hasOwnProperty(M)?c||(c=[]):(c=c||[]).push(M,null));for(M in i){var w=i[M];if(v=a!=null?a[M]:void 0,i.hasOwnProperty(M)&&w!==v&&(w!=null||v!=null))if(M==="style")if(v){for(h in v)!v.hasOwnProperty(h)||w&&w.hasOwnProperty(h)||(s||(s={}),s[h]="");for(h in w)w.hasOwnProperty(h)&&v[h]!==w[h]&&(s||(s={}),s[h]=w[h])}else s||(c||(c=[]),c.push(M,s)),s=w;else M==="dangerouslySetInnerHTML"?(w=w?w.__html:void 0,v=v?v.__html:void 0,w!=null&&v!==w&&(c=c||[]).push(M,w)):M==="children"?typeof w!="string"&&typeof w!="number"||(c=c||[]).push(M,""+w):M!=="suppressContentEditableWarning"&&M!=="suppressHydrationWarning"&&(u.hasOwnProperty(M)?(w!=null&&M==="onScroll"&&Me("scroll",e),c||v===w||(c=[])):(c=c||[]).push(M,w))}s&&(c=c||[]).push("style",s);var M=c;(t.updateQueue=M)&&(t.flags|=4)}},Gd=function(e,t,s,i){s!==i&&(t.flags|=4)};function hs(e,t){if(!Le)switch(e.tailMode){case"hidden":t=e.tail;for(var s=null;t!==null;)t.alternate!==null&&(s=t),t=t.sibling;s===null?e.tail=null:s.sibling=null;break;case"collapsed":s=e.tail;for(var i=null;s!==null;)s.alternate!==null&&(i=s),s=s.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function nt(e){var t=e.alternate!==null&&e.alternate.child===e.child,s=0,i=0;if(t)for(var a=e.child;a!==null;)s|=a.lanes|a.childLanes,i|=a.subtreeFlags&14680064,i|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)s|=a.lanes|a.childLanes,i|=a.subtreeFlags,i|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=i,e.childLanes=s,t}function g0(e,t,s){var i=t.pendingProps;switch(ol(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return nt(t),null;case 1:return dt(t.type)&&lo(),nt(t),null;case 3:return i=t.stateNode,gr(),Re(ct),Re(et),yl(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(po(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,It!==null&&($l(It),It=null))),Vl(e,t),nt(t),null;case 5:_l(t);var a=On(us.current);if(s=t.type,e!==null&&t.stateNode!=null)Kd(e,t,s,i,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!i){if(t.stateNode===null)throw Error(o(166));return nt(t),null}if(e=On(Wt.current),po(t)){i=t.stateNode,s=t.type;var c=t.memoizedProps;switch(i[Yt]=t,i[ss]=c,e=(t.mode&1)!==0,s){case"dialog":Me("cancel",i),Me("close",i);break;case"iframe":case"object":case"embed":Me("load",i);break;case"video":case"audio":for(a=0;a<ts.length;a++)Me(ts[a],i);break;case"source":Me("error",i);break;case"img":case"image":case"link":Me("error",i),Me("load",i);break;case"details":Me("toggle",i);break;case"input":_t(i,c),Me("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!c.multiple},Me("invalid",i);break;case"textarea":Iu(i,c),Me("invalid",i)}gi(s,c),a=null;for(var h in c)if(c.hasOwnProperty(h)){var v=c[h];h==="children"?typeof v=="string"?i.textContent!==v&&(c.suppressHydrationWarning!==!0&&so(i.textContent,v,e),a=["children",v]):typeof v=="number"&&i.textContent!==""+v&&(c.suppressHydrationWarning!==!0&&so(i.textContent,v,e),a=["children",""+v]):u.hasOwnProperty(h)&&v!=null&&h==="onScroll"&&Me("scroll",i)}switch(s){case"input":Zn(i),Rt(i,c,!0);break;case"textarea":Zn(i),ju(i);break;case"select":case"option":break;default:typeof c.onClick=="function"&&(i.onclick=oo)}i=a,t.updateQueue=i,i!==null&&(t.flags|=4)}else{h=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Nu(s)),e==="http://www.w3.org/1999/xhtml"?s==="script"?(e=h.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof i.is=="string"?e=h.createElement(s,{is:i.is}):(e=h.createElement(s),s==="select"&&(h=e,i.multiple?h.multiple=!0:i.size&&(h.size=i.size))):e=h.createElementNS(e,s),e[Yt]=t,e[ss]=i,$d(e,t,!1,!1),t.stateNode=e;e:{switch(h=yi(s,i),s){case"dialog":Me("cancel",e),Me("close",e),a=i;break;case"iframe":case"object":case"embed":Me("load",e),a=i;break;case"video":case"audio":for(a=0;a<ts.length;a++)Me(ts[a],e);a=i;break;case"source":Me("error",e),a=i;break;case"img":case"image":case"link":Me("error",e),Me("load",e),a=i;break;case"details":Me("toggle",e),a=i;break;case"input":_t(e,i),a=qe(e,i),Me("invalid",e);break;case"option":a=i;break;case"select":e._wrapperState={wasMultiple:!!i.multiple},a=Y({},i,{value:void 0}),Me("invalid",e);break;case"textarea":Iu(e,i),a=mi(e,i),Me("invalid",e);break;default:a=i}gi(s,a),v=a;for(c in v)if(v.hasOwnProperty(c)){var w=v[c];c==="style"?zu(e,w):c==="dangerouslySetInnerHTML"?(w=w?w.__html:void 0,w!=null&&Vu(e,w)):c==="children"?typeof w=="string"?(s!=="textarea"||w!=="")&&Nr(e,w):typeof w=="number"&&Nr(e,""+w):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(u.hasOwnProperty(c)?w!=null&&c==="onScroll"&&Me("scroll",e):w!=null&&I(e,c,w,h))}switch(s){case"input":Zn(e),Rt(e,i,!1);break;case"textarea":Zn(e),ju(e);break;case"option":i.value!=null&&e.setAttribute("value",""+he(i.value));break;case"select":e.multiple=!!i.multiple,c=i.value,c!=null?Jn(e,!!i.multiple,c,!1):i.defaultValue!=null&&Jn(e,!!i.multiple,i.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=oo)}switch(s){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return nt(t),null;case 6:if(e&&t.stateNode!=null)Gd(e,t,e.memoizedProps,i);else{if(typeof i!="string"&&t.stateNode===null)throw Error(o(166));if(s=On(us.current),On(Wt.current),po(t)){if(i=t.stateNode,s=t.memoizedProps,i[Yt]=t,(c=i.nodeValue!==s)&&(e=vt,e!==null))switch(e.tag){case 3:so(i.nodeValue,s,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&so(i.nodeValue,s,(e.mode&1)!==0)}c&&(t.flags|=4)}else i=(s.nodeType===9?s:s.ownerDocument).createTextNode(i),i[Yt]=t,t.stateNode=i}return nt(t),null;case 13:if(Re(Ie),i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Le&&xt!==null&&(t.mode&1)!==0&&(t.flags&128)===0)qc(),pr(),t.flags|=98560,c=!1;else if(c=po(t),i!==null&&i.dehydrated!==null){if(e===null){if(!c)throw Error(o(318));if(c=t.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(o(317));c[Yt]=t}else pr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;nt(t),c=!1}else It!==null&&($l(It),It=null),c=!0;if(!c)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=s,t):(i=i!==null,i!==(e!==null&&e.memoizedState!==null)&&i&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Ie.current&1)!==0?Ye===0&&(Ye=3):Zl())),t.updateQueue!==null&&(t.flags|=4),nt(t),null);case 4:return gr(),Vl(e,t),e===null&&ns(t.stateNode.containerInfo),nt(t),null;case 10:return dl(t.type._context),nt(t),null;case 17:return dt(t.type)&&lo(),nt(t),null;case 19:if(Re(Ie),c=t.memoizedState,c===null)return nt(t),null;if(i=(t.flags&128)!==0,h=c.rendering,h===null)if(i)hs(c,!1);else{if(Ye!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(h=vo(e),h!==null){for(t.flags|=128,hs(c,!1),i=h.updateQueue,i!==null&&(t.updateQueue=i,t.flags|=4),t.subtreeFlags=0,i=s,s=t.child;s!==null;)c=s,e=i,c.flags&=14680066,h=c.alternate,h===null?(c.childLanes=0,c.lanes=e,c.child=null,c.subtreeFlags=0,c.memoizedProps=null,c.memoizedState=null,c.updateQueue=null,c.dependencies=null,c.stateNode=null):(c.childLanes=h.childLanes,c.lanes=h.lanes,c.child=h.child,c.subtreeFlags=0,c.deletions=null,c.memoizedProps=h.memoizedProps,c.memoizedState=h.memoizedState,c.updateQueue=h.updateQueue,c.type=h.type,e=h.dependencies,c.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),s=s.sibling;return Pe(Ie,Ie.current&1|2),t.child}e=e.sibling}c.tail!==null&&Oe()>wr&&(t.flags|=128,i=!0,hs(c,!1),t.lanes=4194304)}else{if(!i)if(e=vo(h),e!==null){if(t.flags|=128,i=!0,s=e.updateQueue,s!==null&&(t.updateQueue=s,t.flags|=4),hs(c,!0),c.tail===null&&c.tailMode==="hidden"&&!h.alternate&&!Le)return nt(t),null}else 2*Oe()-c.renderingStartTime>wr&&s!==1073741824&&(t.flags|=128,i=!0,hs(c,!1),t.lanes=4194304);c.isBackwards?(h.sibling=t.child,t.child=h):(s=c.last,s!==null?s.sibling=h:t.child=h,c.last=h)}return c.tail!==null?(t=c.tail,c.rendering=t,c.tail=t.sibling,c.renderingStartTime=Oe(),t.sibling=null,s=Ie.current,Pe(Ie,i?s&1|2:s&1),t):(nt(t),null);case 22:case 23:return Gl(),i=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==i&&(t.flags|=8192),i&&(t.mode&1)!==0?(wt&1073741824)!==0&&(nt(t),t.subtreeFlags&6&&(t.flags|=8192)):nt(t),null;case 24:return null;case 25:return null}throw Error(o(156,t.tag))}function y0(e,t){switch(ol(t),t.tag){case 1:return dt(t.type)&&lo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return gr(),Re(ct),Re(et),yl(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return _l(t),null;case 13:if(Re(Ie),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));pr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Re(Ie),null;case 4:return gr(),null;case 10:return dl(t.type._context),null;case 22:case 23:return Gl(),null;case 24:return null;default:return null}}var Eo=!1,rt=!1,v0=typeof WeakSet=="function"?WeakSet:Set,G=null;function vr(e,t){var s=e.ref;if(s!==null)if(typeof s=="function")try{s(null)}catch(i){Ne(e,t,i)}else s.current=null}function Ol(e,t,s){try{s()}catch(i){Ne(e,t,i)}}var Zd=!1;function x0(e,t){if(Gi=Xs,e=Mc(),Ui(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else e:{s=(s=e.ownerDocument)&&s.defaultView||window;var i=s.getSelection&&s.getSelection();if(i&&i.rangeCount!==0){s=i.anchorNode;var a=i.anchorOffset,c=i.focusNode;i=i.focusOffset;try{s.nodeType,c.nodeType}catch{s=null;break e}var h=0,v=-1,w=-1,M=0,z=0,U=e,V=null;t:for(;;){for(var X;U!==s||a!==0&&U.nodeType!==3||(v=h+a),U!==c||i!==0&&U.nodeType!==3||(w=h+i),U.nodeType===3&&(h+=U.nodeValue.length),(X=U.firstChild)!==null;)V=U,U=X;for(;;){if(U===e)break t;if(V===s&&++M===a&&(v=h),V===c&&++z===i&&(w=h),(X=U.nextSibling)!==null)break;U=V,V=U.parentNode}U=X}s=v===-1||w===-1?null:{start:v,end:w}}else s=null}s=s||{start:0,end:0}}else s=null;for(Zi={focusedElem:e,selectionRange:s},Xs=!1,G=t;G!==null;)if(t=G,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,G=e;else for(;G!==null;){t=G;try{var Z=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(Z!==null){var q=Z.memoizedProps,ze=Z.memoizedState,C=t.stateNode,S=C.getSnapshotBeforeUpdate(t.elementType===t.type?q:At(t.type,q),ze);C.__reactInternalSnapshotBeforeUpdate=S}break;case 3:var P=t.stateNode.containerInfo;P.nodeType===1?P.textContent="":P.nodeType===9&&P.documentElement&&P.removeChild(P.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(o(163))}}catch(W){Ne(t,t.return,W)}if(e=t.sibling,e!==null){e.return=t.return,G=e;break}G=t.return}return Z=Zd,Zd=!1,Z}function ms(e,t,s){var i=t.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&e)===e){var c=a.destroy;a.destroy=void 0,c!==void 0&&Ol(t,s,c)}a=a.next}while(a!==i)}}function Mo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var s=t=t.next;do{if((s.tag&e)===e){var i=s.create;s.destroy=i()}s=s.next}while(s!==t)}}function zl(e){var t=e.ref;if(t!==null){var s=e.stateNode;switch(e.tag){case 5:e=s;break;default:e=s}typeof t=="function"?t(e):t.current=e}}function Jd(e){var t=e.alternate;t!==null&&(e.alternate=null,Jd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Yt],delete t[ss],delete t[tl],delete t[n0],delete t[r0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function qd(e){return e.tag===5||e.tag===3||e.tag===4}function ef(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||qd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Bl(e,t,s){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?s.nodeType===8?s.parentNode.insertBefore(e,t):s.insertBefore(e,t):(s.nodeType===8?(t=s.parentNode,t.insertBefore(e,s)):(t=s,t.appendChild(e)),s=s._reactRootContainer,s!=null||t.onclick!==null||(t.onclick=oo));else if(i!==4&&(e=e.child,e!==null))for(Bl(e,t,s),e=e.sibling;e!==null;)Bl(e,t,s),e=e.sibling}function Fl(e,t,s){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?s.insertBefore(e,t):s.appendChild(e);else if(i!==4&&(e=e.child,e!==null))for(Fl(e,t,s),e=e.sibling;e!==null;)Fl(e,t,s),e=e.sibling}var $e=null,jt=!1;function vn(e,t,s){for(s=s.child;s!==null;)tf(e,t,s),s=s.sibling}function tf(e,t,s){if(Ut&&typeof Ut.onCommitFiberUnmount=="function")try{Ut.onCommitFiberUnmount(Fs,s)}catch{}switch(s.tag){case 5:rt||vr(s,t);case 6:var i=$e,a=jt;$e=null,vn(e,t,s),$e=i,jt=a,$e!==null&&(jt?(e=$e,s=s.stateNode,e.nodeType===8?e.parentNode.removeChild(s):e.removeChild(s)):$e.removeChild(s.stateNode));break;case 18:$e!==null&&(jt?(e=$e,s=s.stateNode,e.nodeType===8?el(e.parentNode,s):e.nodeType===1&&el(e,s),Xr(e)):el($e,s.stateNode));break;case 4:i=$e,a=jt,$e=s.stateNode.containerInfo,jt=!0,vn(e,t,s),$e=i,jt=a;break;case 0:case 11:case 14:case 15:if(!rt&&(i=s.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){a=i=i.next;do{var c=a,h=c.destroy;c=c.tag,h!==void 0&&((c&2)!==0||(c&4)!==0)&&Ol(s,t,h),a=a.next}while(a!==i)}vn(e,t,s);break;case 1:if(!rt&&(vr(s,t),i=s.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=s.memoizedProps,i.state=s.memoizedState,i.componentWillUnmount()}catch(v){Ne(s,t,v)}vn(e,t,s);break;case 21:vn(e,t,s);break;case 22:s.mode&1?(rt=(i=rt)||s.memoizedState!==null,vn(e,t,s),rt=i):vn(e,t,s);break;default:vn(e,t,s)}}function nf(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var s=e.stateNode;s===null&&(s=e.stateNode=new v0),t.forEach(function(i){var a=M0.bind(null,e,i);s.has(i)||(s.add(i),i.then(a,a))})}}function Nt(e,t){var s=t.deletions;if(s!==null)for(var i=0;i<s.length;i++){var a=s[i];try{var c=e,h=t,v=h;e:for(;v!==null;){switch(v.tag){case 5:$e=v.stateNode,jt=!1;break e;case 3:$e=v.stateNode.containerInfo,jt=!0;break e;case 4:$e=v.stateNode.containerInfo,jt=!0;break e}v=v.return}if($e===null)throw Error(o(160));tf(c,h,a),$e=null,jt=!1;var w=a.alternate;w!==null&&(w.return=null),a.return=null}catch(M){Ne(a,t,M)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)rf(t,e),t=t.sibling}function rf(e,t){var s=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Nt(t,e),Qt(e),i&4){try{ms(3,e,e.return),Mo(3,e)}catch(q){Ne(e,e.return,q)}try{ms(5,e,e.return)}catch(q){Ne(e,e.return,q)}}break;case 1:Nt(t,e),Qt(e),i&512&&s!==null&&vr(s,s.return);break;case 5:if(Nt(t,e),Qt(e),i&512&&s!==null&&vr(s,s.return),e.flags&32){var a=e.stateNode;try{Nr(a,"")}catch(q){Ne(e,e.return,q)}}if(i&4&&(a=e.stateNode,a!=null)){var c=e.memoizedProps,h=s!==null?s.memoizedProps:c,v=e.type,w=e.updateQueue;if(e.updateQueue=null,w!==null)try{v==="input"&&c.type==="radio"&&c.name!=null&&ut(a,c),yi(v,h);var M=yi(v,c);for(h=0;h<w.length;h+=2){var z=w[h],U=w[h+1];z==="style"?zu(a,U):z==="dangerouslySetInnerHTML"?Vu(a,U):z==="children"?Nr(a,U):I(a,z,U,M)}switch(v){case"input":gt(a,c);break;case"textarea":Au(a,c);break;case"select":var V=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!c.multiple;var X=c.value;X!=null?Jn(a,!!c.multiple,X,!1):V!==!!c.multiple&&(c.defaultValue!=null?Jn(a,!!c.multiple,c.defaultValue,!0):Jn(a,!!c.multiple,c.multiple?[]:"",!1))}a[ss]=c}catch(q){Ne(e,e.return,q)}}break;case 6:if(Nt(t,e),Qt(e),i&4){if(e.stateNode===null)throw Error(o(162));a=e.stateNode,c=e.memoizedProps;try{a.nodeValue=c}catch(q){Ne(e,e.return,q)}}break;case 3:if(Nt(t,e),Qt(e),i&4&&s!==null&&s.memoizedState.isDehydrated)try{Xr(t.containerInfo)}catch(q){Ne(e,e.return,q)}break;case 4:Nt(t,e),Qt(e);break;case 13:Nt(t,e),Qt(e),a=e.child,a.flags&8192&&(c=a.memoizedState!==null,a.stateNode.isHidden=c,!c||a.alternate!==null&&a.alternate.memoizedState!==null||(Wl=Oe())),i&4&&nf(e);break;case 22:if(z=s!==null&&s.memoizedState!==null,e.mode&1?(rt=(M=rt)||z,Nt(t,e),rt=M):Nt(t,e),Qt(e),i&8192){if(M=e.memoizedState!==null,(e.stateNode.isHidden=M)&&!z&&(e.mode&1)!==0)for(G=e,z=e.child;z!==null;){for(U=G=z;G!==null;){switch(V=G,X=V.child,V.tag){case 0:case 11:case 14:case 15:ms(4,V,V.return);break;case 1:vr(V,V.return);var Z=V.stateNode;if(typeof Z.componentWillUnmount=="function"){i=V,s=V.return;try{t=i,Z.props=t.memoizedProps,Z.state=t.memoizedState,Z.componentWillUnmount()}catch(q){Ne(i,s,q)}}break;case 5:vr(V,V.return);break;case 22:if(V.memoizedState!==null){lf(U);continue}}X!==null?(X.return=V,G=X):lf(U)}z=z.sibling}e:for(z=null,U=e;;){if(U.tag===5){if(z===null){z=U;try{a=U.stateNode,M?(c=a.style,typeof c.setProperty=="function"?c.setProperty("display","none","important"):c.display="none"):(v=U.stateNode,w=U.memoizedProps.style,h=w!=null&&w.hasOwnProperty("display")?w.display:null,v.style.display=Ou("display",h))}catch(q){Ne(e,e.return,q)}}}else if(U.tag===6){if(z===null)try{U.stateNode.nodeValue=M?"":U.memoizedProps}catch(q){Ne(e,e.return,q)}}else if((U.tag!==22&&U.tag!==23||U.memoizedState===null||U===e)&&U.child!==null){U.child.return=U,U=U.child;continue}if(U===e)break e;for(;U.sibling===null;){if(U.return===null||U.return===e)break e;z===U&&(z=null),U=U.return}z===U&&(z=null),U.sibling.return=U.return,U=U.sibling}}break;case 19:Nt(t,e),Qt(e),i&4&&nf(e);break;case 21:break;default:Nt(t,e),Qt(e)}}function Qt(e){var t=e.flags;if(t&2){try{e:{for(var s=e.return;s!==null;){if(qd(s)){var i=s;break e}s=s.return}throw Error(o(160))}switch(i.tag){case 5:var a=i.stateNode;i.flags&32&&(Nr(a,""),i.flags&=-33);var c=ef(e);Fl(e,c,a);break;case 3:case 4:var h=i.stateNode.containerInfo,v=ef(e);Bl(e,v,h);break;default:throw Error(o(161))}}catch(w){Ne(e,e.return,w)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function w0(e,t,s){G=e,sf(e)}function sf(e,t,s){for(var i=(e.mode&1)!==0;G!==null;){var a=G,c=a.child;if(a.tag===22&&i){var h=a.memoizedState!==null||Eo;if(!h){var v=a.alternate,w=v!==null&&v.memoizedState!==null||rt;v=Eo;var M=rt;if(Eo=h,(rt=w)&&!M)for(G=a;G!==null;)h=G,w=h.child,h.tag===22&&h.memoizedState!==null?af(a):w!==null?(w.return=h,G=w):af(a);for(;c!==null;)G=c,sf(c),c=c.sibling;G=a,Eo=v,rt=M}of(e)}else(a.subtreeFlags&8772)!==0&&c!==null?(c.return=a,G=c):of(e)}}function of(e){for(;G!==null;){var t=G;if((t.flags&8772)!==0){var s=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:rt||Mo(5,t);break;case 1:var i=t.stateNode;if(t.flags&4&&!rt)if(s===null)i.componentDidMount();else{var a=t.elementType===t.type?s.memoizedProps:At(t.type,s.memoizedProps);i.componentDidUpdate(a,s.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var c=t.updateQueue;c!==null&&id(t,c,i);break;case 3:var h=t.updateQueue;if(h!==null){if(s=null,t.child!==null)switch(t.child.tag){case 5:s=t.child.stateNode;break;case 1:s=t.child.stateNode}id(t,h,s)}break;case 5:var v=t.stateNode;if(s===null&&t.flags&4){s=v;var w=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":w.autoFocus&&s.focus();break;case"img":w.src&&(s.src=w.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var M=t.alternate;if(M!==null){var z=M.memoizedState;if(z!==null){var U=z.dehydrated;U!==null&&Xr(U)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(o(163))}rt||t.flags&512&&zl(t)}catch(V){Ne(t,t.return,V)}}if(t===e){G=null;break}if(s=t.sibling,s!==null){s.return=t.return,G=s;break}G=t.return}}function lf(e){for(;G!==null;){var t=G;if(t===e){G=null;break}var s=t.sibling;if(s!==null){s.return=t.return,G=s;break}G=t.return}}function af(e){for(;G!==null;){var t=G;try{switch(t.tag){case 0:case 11:case 15:var s=t.return;try{Mo(4,t)}catch(w){Ne(t,s,w)}break;case 1:var i=t.stateNode;if(typeof i.componentDidMount=="function"){var a=t.return;try{i.componentDidMount()}catch(w){Ne(t,a,w)}}var c=t.return;try{zl(t)}catch(w){Ne(t,c,w)}break;case 5:var h=t.return;try{zl(t)}catch(w){Ne(t,h,w)}}}catch(w){Ne(t,t.return,w)}if(t===e){G=null;break}var v=t.sibling;if(v!==null){v.return=t.return,G=v;break}G=t.return}}var S0=Math.ceil,Ro=O.ReactCurrentDispatcher,Ul=O.ReactCurrentOwner,Pt=O.ReactCurrentBatchConfig,_e=0,Qe=null,Be=null,Ke=0,wt=0,xr=hn(0),Ye=0,_s=null,Bn=0,Do=0,Yl=0,gs=null,pt=null,Wl=0,wr=1/0,sn=null,Lo=!1,Hl=null,xn=null,Io=!1,wn=null,Ao=0,ys=0,Ql=null,jo=-1,No=0;function it(){return(_e&6)!==0?Oe():jo!==-1?jo:jo=Oe()}function Sn(e){return(e.mode&1)===0?1:(_e&2)!==0&&Ke!==0?Ke&-Ke:o0.transition!==null?(No===0&&(No=ec()),No):(e=we,e!==0||(e=window.event,e=e===void 0?16:uc(e.type)),e)}function Vt(e,t,s,i){if(50<ys)throw ys=0,Ql=null,Error(o(185));Ur(e,s,i),((_e&2)===0||e!==Qe)&&(e===Qe&&((_e&2)===0&&(Do|=s),Ye===4&&kn(e,Ke)),ht(e,i),s===1&&_e===0&&(t.mode&1)===0&&(wr=Oe()+500,uo&&_n()))}function ht(e,t){var s=e.callbackNode;o_(e,t);var i=Ws(e,e===Qe?Ke:0);if(i===0)s!==null&&Zu(s),e.callbackNode=null,e.callbackPriority=0;else if(t=i&-i,e.callbackPriority!==t){if(s!=null&&Zu(s),t===1)e.tag===0?s0(cf.bind(null,e)):$c(cf.bind(null,e)),e0(function(){(_e&6)===0&&_n()}),s=null;else{switch(tc(i)){case 1:s=Ci;break;case 4:s=Ju;break;case 16:s=Bs;break;case 536870912:s=qu;break;default:s=Bs}s=yf(s,uf.bind(null,e))}e.callbackPriority=t,e.callbackNode=s}}function uf(e,t){if(jo=-1,No=0,(_e&6)!==0)throw Error(o(327));var s=e.callbackNode;if(Sr()&&e.callbackNode!==s)return null;var i=Ws(e,e===Qe?Ke:0);if(i===0)return null;if((i&30)!==0||(i&e.expiredLanes)!==0||t)t=Vo(e,i);else{t=i;var a=_e;_e|=2;var c=ff();(Qe!==e||Ke!==t)&&(sn=null,wr=Oe()+500,Un(e,t));do try{C0();break}catch(v){df(e,v)}while(!0);cl(),Ro.current=c,_e=a,Be!==null?t=0:(Qe=null,Ke=0,t=Ye)}if(t!==0){if(t===2&&(a=Pi(e),a!==0&&(i=a,t=Xl(e,a))),t===1)throw s=_s,Un(e,0),kn(e,i),ht(e,Oe()),s;if(t===6)kn(e,i);else{if(a=e.current.alternate,(i&30)===0&&!k0(a)&&(t=Vo(e,i),t===2&&(c=Pi(e),c!==0&&(i=c,t=Xl(e,c))),t===1))throw s=_s,Un(e,0),kn(e,i),ht(e,Oe()),s;switch(e.finishedWork=a,e.finishedLanes=i,t){case 0:case 1:throw Error(o(345));case 2:Yn(e,pt,sn);break;case 3:if(kn(e,i),(i&130023424)===i&&(t=Wl+500-Oe(),10<t)){if(Ws(e,0)!==0)break;if(a=e.suspendedLanes,(a&i)!==i){it(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=qi(Yn.bind(null,e,pt,sn),t);break}Yn(e,pt,sn);break;case 4:if(kn(e,i),(i&4194240)===i)break;for(t=e.eventTimes,a=-1;0<i;){var h=31-Dt(i);c=1<<h,h=t[h],h>a&&(a=h),i&=~c}if(i=a,i=Oe()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*S0(i/1960))-i,10<i){e.timeoutHandle=qi(Yn.bind(null,e,pt,sn),i);break}Yn(e,pt,sn);break;case 5:Yn(e,pt,sn);break;default:throw Error(o(329))}}}return ht(e,Oe()),e.callbackNode===s?uf.bind(null,e):null}function Xl(e,t){var s=gs;return e.current.memoizedState.isDehydrated&&(Un(e,t).flags|=256),e=Vo(e,t),e!==2&&(t=pt,pt=s,t!==null&&$l(t)),e}function $l(e){pt===null?pt=e:pt.push.apply(pt,e)}function k0(e){for(var t=e;;){if(t.flags&16384){var s=t.updateQueue;if(s!==null&&(s=s.stores,s!==null))for(var i=0;i<s.length;i++){var a=s[i],c=a.getSnapshot;a=a.value;try{if(!Lt(c(),a))return!1}catch{return!1}}}if(s=t.child,t.subtreeFlags&16384&&s!==null)s.return=t,t=s;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function kn(e,t){for(t&=~Yl,t&=~Do,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var s=31-Dt(t),i=1<<s;e[s]=-1,t&=~i}}function cf(e){if((_e&6)!==0)throw Error(o(327));Sr();var t=Ws(e,0);if((t&1)===0)return ht(e,Oe()),null;var s=Vo(e,t);if(e.tag!==0&&s===2){var i=Pi(e);i!==0&&(t=i,s=Xl(e,i))}if(s===1)throw s=_s,Un(e,0),kn(e,t),ht(e,Oe()),s;if(s===6)throw Error(o(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Yn(e,pt,sn),ht(e,Oe()),null}function Kl(e,t){var s=_e;_e|=1;try{return e(t)}finally{_e=s,_e===0&&(wr=Oe()+500,uo&&_n())}}function Fn(e){wn!==null&&wn.tag===0&&(_e&6)===0&&Sr();var t=_e;_e|=1;var s=Pt.transition,i=we;try{if(Pt.transition=null,we=1,e)return e()}finally{we=i,Pt.transition=s,_e=t,(_e&6)===0&&_n()}}function Gl(){wt=xr.current,Re(xr)}function Un(e,t){e.finishedWork=null,e.finishedLanes=0;var s=e.timeoutHandle;if(s!==-1&&(e.timeoutHandle=-1,q_(s)),Be!==null)for(s=Be.return;s!==null;){var i=s;switch(ol(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&lo();break;case 3:gr(),Re(ct),Re(et),yl();break;case 5:_l(i);break;case 4:gr();break;case 13:Re(Ie);break;case 19:Re(Ie);break;case 10:dl(i.type._context);break;case 22:case 23:Gl()}s=s.return}if(Qe=e,Be=e=bn(e.current,null),Ke=wt=t,Ye=0,_s=null,Yl=Do=Bn=0,pt=gs=null,Vn!==null){for(t=0;t<Vn.length;t++)if(s=Vn[t],i=s.interleaved,i!==null){s.interleaved=null;var a=i.next,c=s.pending;if(c!==null){var h=c.next;c.next=a,i.next=h}s.pending=i}Vn=null}return e}function df(e,t){do{var s=Be;try{if(cl(),xo.current=bo,wo){for(var i=Ae.memoizedState;i!==null;){var a=i.queue;a!==null&&(a.pending=null),i=i.next}wo=!1}if(zn=0,He=Ue=Ae=null,cs=!1,ds=0,Ul.current=null,s===null||s.return===null){Ye=1,_s=t,Be=null;break}e:{var c=e,h=s.return,v=s,w=t;if(t=Ke,v.flags|=32768,w!==null&&typeof w=="object"&&typeof w.then=="function"){var M=w,z=v,U=z.tag;if((z.mode&1)===0&&(U===0||U===11||U===15)){var V=z.alternate;V?(z.updateQueue=V.updateQueue,z.memoizedState=V.memoizedState,z.lanes=V.lanes):(z.updateQueue=null,z.memoizedState=null)}var X=jd(h);if(X!==null){X.flags&=-257,Nd(X,h,v,c,t),X.mode&1&&Ad(c,M,t),t=X,w=M;var Z=t.updateQueue;if(Z===null){var q=new Set;q.add(w),t.updateQueue=q}else Z.add(w);break e}else{if((t&1)===0){Ad(c,M,t),Zl();break e}w=Error(o(426))}}else if(Le&&v.mode&1){var ze=jd(h);if(ze!==null){(ze.flags&65536)===0&&(ze.flags|=256),Nd(ze,h,v,c,t),al(yr(w,v));break e}}c=w=yr(w,v),Ye!==4&&(Ye=2),gs===null?gs=[c]:gs.push(c),c=h;do{switch(c.tag){case 3:c.flags|=65536,t&=-t,c.lanes|=t;var C=Ld(c,w,t);od(c,C);break e;case 1:v=w;var S=c.type,P=c.stateNode;if((c.flags&128)===0&&(typeof S.getDerivedStateFromError=="function"||P!==null&&typeof P.componentDidCatch=="function"&&(xn===null||!xn.has(P)))){c.flags|=65536,t&=-t,c.lanes|=t;var W=Id(c,v,t);od(c,W);break e}}c=c.return}while(c!==null)}hf(s)}catch(ee){t=ee,Be===s&&s!==null&&(Be=s=s.return);continue}break}while(!0)}function ff(){var e=Ro.current;return Ro.current=bo,e===null?bo:e}function Zl(){(Ye===0||Ye===3||Ye===2)&&(Ye=4),Qe===null||(Bn&268435455)===0&&(Do&268435455)===0||kn(Qe,Ke)}function Vo(e,t){var s=_e;_e|=2;var i=ff();(Qe!==e||Ke!==t)&&(sn=null,Un(e,t));do try{b0();break}catch(a){df(e,a)}while(!0);if(cl(),_e=s,Ro.current=i,Be!==null)throw Error(o(261));return Qe=null,Ke=0,Ye}function b0(){for(;Be!==null;)pf(Be)}function C0(){for(;Be!==null&&!Gm();)pf(Be)}function pf(e){var t=gf(e.alternate,e,wt);e.memoizedProps=e.pendingProps,t===null?hf(e):Be=t,Ul.current=null}function hf(e){var t=e;do{var s=t.alternate;if(e=t.return,(t.flags&32768)===0){if(s=g0(s,t,wt),s!==null){Be=s;return}}else{if(s=y0(s,t),s!==null){s.flags&=32767,Be=s;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ye=6,Be=null;return}}if(t=t.sibling,t!==null){Be=t;return}Be=t=e}while(t!==null);Ye===0&&(Ye=5)}function Yn(e,t,s){var i=we,a=Pt.transition;try{Pt.transition=null,we=1,P0(e,t,s,i)}finally{Pt.transition=a,we=i}return null}function P0(e,t,s,i){do Sr();while(wn!==null);if((_e&6)!==0)throw Error(o(327));s=e.finishedWork;var a=e.finishedLanes;if(s===null)return null;if(e.finishedWork=null,e.finishedLanes=0,s===e.current)throw Error(o(177));e.callbackNode=null,e.callbackPriority=0;var c=s.lanes|s.childLanes;if(i_(e,c),e===Qe&&(Be=Qe=null,Ke=0),(s.subtreeFlags&2064)===0&&(s.flags&2064)===0||Io||(Io=!0,yf(Bs,function(){return Sr(),null})),c=(s.flags&15990)!==0,(s.subtreeFlags&15990)!==0||c){c=Pt.transition,Pt.transition=null;var h=we;we=1;var v=_e;_e|=4,Ul.current=null,x0(e,s),rf(s,e),Q_(Zi),Xs=!!Gi,Zi=Gi=null,e.current=s,w0(s),Zm(),_e=v,we=h,Pt.transition=c}else e.current=s;if(Io&&(Io=!1,wn=e,Ao=a),c=e.pendingLanes,c===0&&(xn=null),e_(s.stateNode),ht(e,Oe()),t!==null)for(i=e.onRecoverableError,s=0;s<t.length;s++)a=t[s],i(a.value,{componentStack:a.stack,digest:a.digest});if(Lo)throw Lo=!1,e=Hl,Hl=null,e;return(Ao&1)!==0&&e.tag!==0&&Sr(),c=e.pendingLanes,(c&1)!==0?e===Ql?ys++:(ys=0,Ql=e):ys=0,_n(),null}function Sr(){if(wn!==null){var e=tc(Ao),t=Pt.transition,s=we;try{if(Pt.transition=null,we=16>e?16:e,wn===null)var i=!1;else{if(e=wn,wn=null,Ao=0,(_e&6)!==0)throw Error(o(331));var a=_e;for(_e|=4,G=e.current;G!==null;){var c=G,h=c.child;if((G.flags&16)!==0){var v=c.deletions;if(v!==null){for(var w=0;w<v.length;w++){var M=v[w];for(G=M;G!==null;){var z=G;switch(z.tag){case 0:case 11:case 15:ms(8,z,c)}var U=z.child;if(U!==null)U.return=z,G=U;else for(;G!==null;){z=G;var V=z.sibling,X=z.return;if(Jd(z),z===M){G=null;break}if(V!==null){V.return=X,G=V;break}G=X}}}var Z=c.alternate;if(Z!==null){var q=Z.child;if(q!==null){Z.child=null;do{var ze=q.sibling;q.sibling=null,q=ze}while(q!==null)}}G=c}}if((c.subtreeFlags&2064)!==0&&h!==null)h.return=c,G=h;else e:for(;G!==null;){if(c=G,(c.flags&2048)!==0)switch(c.tag){case 0:case 11:case 15:ms(9,c,c.return)}var C=c.sibling;if(C!==null){C.return=c.return,G=C;break e}G=c.return}}var S=e.current;for(G=S;G!==null;){h=G;var P=h.child;if((h.subtreeFlags&2064)!==0&&P!==null)P.return=h,G=P;else e:for(h=S;G!==null;){if(v=G,(v.flags&2048)!==0)try{switch(v.tag){case 0:case 11:case 15:Mo(9,v)}}catch(ee){Ne(v,v.return,ee)}if(v===h){G=null;break e}var W=v.sibling;if(W!==null){W.return=v.return,G=W;break e}G=v.return}}if(_e=a,_n(),Ut&&typeof Ut.onPostCommitFiberRoot=="function")try{Ut.onPostCommitFiberRoot(Fs,e)}catch{}i=!0}return i}finally{we=s,Pt.transition=t}}return!1}function mf(e,t,s){t=yr(s,t),t=Ld(e,t,1),e=yn(e,t,1),t=it(),e!==null&&(Ur(e,1,t),ht(e,t))}function Ne(e,t,s){if(e.tag===3)mf(e,e,s);else for(;t!==null;){if(t.tag===3){mf(t,e,s);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(xn===null||!xn.has(i))){e=yr(s,e),e=Id(t,e,1),t=yn(t,e,1),e=it(),t!==null&&(Ur(t,1,e),ht(t,e));break}}t=t.return}}function T0(e,t,s){var i=e.pingCache;i!==null&&i.delete(t),t=it(),e.pingedLanes|=e.suspendedLanes&s,Qe===e&&(Ke&s)===s&&(Ye===4||Ye===3&&(Ke&130023424)===Ke&&500>Oe()-Wl?Un(e,0):Yl|=s),ht(e,t)}function _f(e,t){t===0&&((e.mode&1)===0?t=1:(t=Ys,Ys<<=1,(Ys&130023424)===0&&(Ys=4194304)));var s=it();e=tn(e,t),e!==null&&(Ur(e,t,s),ht(e,s))}function E0(e){var t=e.memoizedState,s=0;t!==null&&(s=t.retryLane),_f(e,s)}function M0(e,t){var s=0;switch(e.tag){case 13:var i=e.stateNode,a=e.memoizedState;a!==null&&(s=a.retryLane);break;case 19:i=e.stateNode;break;default:throw Error(o(314))}i!==null&&i.delete(t),_f(e,s)}var gf;gf=function(e,t,s){if(e!==null)if(e.memoizedProps!==t.pendingProps||ct.current)ft=!0;else{if((e.lanes&s)===0&&(t.flags&128)===0)return ft=!1,_0(e,t,s);ft=(e.flags&131072)!==0}else ft=!1,Le&&(t.flags&1048576)!==0&&Kc(t,fo,t.index);switch(t.lanes=0,t.tag){case 2:var i=t.type;To(e,t),e=t.pendingProps;var a=cr(t,et.current);_r(t,s),a=wl(null,t,i,e,a,s);var c=Sl();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,dt(i)?(c=!0,ao(t)):c=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,hl(t),a.updater=Co,t.stateNode=a,a._reactInternals=t,El(t,i,e,s),t=Ll(null,t,i,!0,c,s)):(t.tag=0,Le&&c&&sl(t),ot(null,t,a,s),t=t.child),t;case 16:i=t.elementType;e:{switch(To(e,t),e=t.pendingProps,a=i._init,i=a(i._payload),t.type=i,a=t.tag=D0(i),e=At(i,e),a){case 0:t=Dl(null,t,i,e,s);break e;case 1:t=Ud(null,t,i,e,s);break e;case 11:t=Vd(null,t,i,e,s);break e;case 14:t=Od(null,t,i,At(i.type,e),s);break e}throw Error(o(306,i,""))}return t;case 0:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:At(i,a),Dl(e,t,i,a,s);case 1:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:At(i,a),Ud(e,t,i,a,s);case 3:e:{if(Yd(t),e===null)throw Error(o(387));i=t.pendingProps,c=t.memoizedState,a=c.element,sd(e,t),yo(t,i,null,s);var h=t.memoizedState;if(i=h.element,c.isDehydrated)if(c={element:i,isDehydrated:!1,cache:h.cache,pendingSuspenseBoundaries:h.pendingSuspenseBoundaries,transitions:h.transitions},t.updateQueue.baseState=c,t.memoizedState=c,t.flags&256){a=yr(Error(o(423)),t),t=Wd(e,t,i,s,a);break e}else if(i!==a){a=yr(Error(o(424)),t),t=Wd(e,t,i,s,a);break e}else for(xt=pn(t.stateNode.containerInfo.firstChild),vt=t,Le=!0,It=null,s=nd(t,null,i,s),t.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(pr(),i===a){t=rn(e,t,s);break e}ot(e,t,i,s)}t=t.child}return t;case 5:return ld(t),e===null&&ll(t),i=t.type,a=t.pendingProps,c=e!==null?e.memoizedProps:null,h=a.children,Ji(i,a)?h=null:c!==null&&Ji(i,c)&&(t.flags|=32),Fd(e,t),ot(e,t,h,s),t.child;case 6:return e===null&&ll(t),null;case 13:return Hd(e,t,s);case 4:return ml(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=hr(t,null,i,s):ot(e,t,i,s),t.child;case 11:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:At(i,a),Vd(e,t,i,a,s);case 7:return ot(e,t,t.pendingProps,s),t.child;case 8:return ot(e,t,t.pendingProps.children,s),t.child;case 12:return ot(e,t,t.pendingProps.children,s),t.child;case 10:e:{if(i=t.type._context,a=t.pendingProps,c=t.memoizedProps,h=a.value,Pe(mo,i._currentValue),i._currentValue=h,c!==null)if(Lt(c.value,h)){if(c.children===a.children&&!ct.current){t=rn(e,t,s);break e}}else for(c=t.child,c!==null&&(c.return=t);c!==null;){var v=c.dependencies;if(v!==null){h=c.child;for(var w=v.firstContext;w!==null;){if(w.context===i){if(c.tag===1){w=nn(-1,s&-s),w.tag=2;var M=c.updateQueue;if(M!==null){M=M.shared;var z=M.pending;z===null?w.next=w:(w.next=z.next,z.next=w),M.pending=w}}c.lanes|=s,w=c.alternate,w!==null&&(w.lanes|=s),fl(c.return,s,t),v.lanes|=s;break}w=w.next}}else if(c.tag===10)h=c.type===t.type?null:c.child;else if(c.tag===18){if(h=c.return,h===null)throw Error(o(341));h.lanes|=s,v=h.alternate,v!==null&&(v.lanes|=s),fl(h,s,t),h=c.sibling}else h=c.child;if(h!==null)h.return=c;else for(h=c;h!==null;){if(h===t){h=null;break}if(c=h.sibling,c!==null){c.return=h.return,h=c;break}h=h.return}c=h}ot(e,t,a.children,s),t=t.child}return t;case 9:return a=t.type,i=t.pendingProps.children,_r(t,s),a=bt(a),i=i(a),t.flags|=1,ot(e,t,i,s),t.child;case 14:return i=t.type,a=At(i,t.pendingProps),a=At(i.type,a),Od(e,t,i,a,s);case 15:return zd(e,t,t.type,t.pendingProps,s);case 17:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:At(i,a),To(e,t),t.tag=1,dt(i)?(e=!0,ao(t)):e=!1,_r(t,s),Rd(t,i,a),El(t,i,a,s),Ll(null,t,i,!0,e,s);case 19:return Xd(e,t,s);case 22:return Bd(e,t,s)}throw Error(o(156,t.tag))};function yf(e,t){return Gu(e,t)}function R0(e,t,s,i){this.tag=e,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tt(e,t,s,i){return new R0(e,t,s,i)}function Jl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function D0(e){if(typeof e=="function")return Jl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===fe)return 11;if(e===le)return 14}return 2}function bn(e,t){var s=e.alternate;return s===null?(s=Tt(e.tag,t,e.key,e.mode),s.elementType=e.elementType,s.type=e.type,s.stateNode=e.stateNode,s.alternate=e,e.alternate=s):(s.pendingProps=t,s.type=e.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=e.flags&14680064,s.childLanes=e.childLanes,s.lanes=e.lanes,s.child=e.child,s.memoizedProps=e.memoizedProps,s.memoizedState=e.memoizedState,s.updateQueue=e.updateQueue,t=e.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},s.sibling=e.sibling,s.index=e.index,s.ref=e.ref,s}function Oo(e,t,s,i,a,c){var h=2;if(i=e,typeof e=="function")Jl(e)&&(h=1);else if(typeof e=="string")h=5;else e:switch(e){case te:return Wn(s.children,a,c,t);case Q:h=8,a|=8;break;case $:return e=Tt(12,s,t,a|2),e.elementType=$,e.lanes=c,e;case ye:return e=Tt(13,s,t,a),e.elementType=ye,e.lanes=c,e;case ke:return e=Tt(19,s,t,a),e.elementType=ke,e.lanes=c,e;case me:return zo(s,a,c,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case oe:h=10;break e;case ae:h=9;break e;case fe:h=11;break e;case le:h=14;break e;case Te:h=16,i=null;break e}throw Error(o(130,e==null?e:typeof e,""))}return t=Tt(h,s,t,a),t.elementType=e,t.type=i,t.lanes=c,t}function Wn(e,t,s,i){return e=Tt(7,e,i,t),e.lanes=s,e}function zo(e,t,s,i){return e=Tt(22,e,i,t),e.elementType=me,e.lanes=s,e.stateNode={isHidden:!1},e}function ql(e,t,s){return e=Tt(6,e,null,t),e.lanes=s,e}function ea(e,t,s){return t=Tt(4,e.children!==null?e.children:[],e.key,t),t.lanes=s,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function L0(e,t,s,i,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ti(0),this.expirationTimes=Ti(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ti(0),this.identifierPrefix=i,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function ta(e,t,s,i,a,c,h,v,w){return e=new L0(e,t,s,v,w),t===1?(t=1,c===!0&&(t|=8)):t=0,c=Tt(3,null,null,t),e.current=c,c.stateNode=e,c.memoizedState={element:i,isDehydrated:s,cache:null,transitions:null,pendingSuspenseBoundaries:null},hl(c),e}function I0(e,t,s){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:K,key:i==null?null:""+i,children:e,containerInfo:t,implementation:s}}function vf(e){if(!e)return mn;e=e._reactInternals;e:{if(Ln(e)!==e||e.tag!==1)throw Error(o(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(dt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(o(171))}if(e.tag===1){var s=e.type;if(dt(s))return Qc(e,s,t)}return t}function xf(e,t,s,i,a,c,h,v,w){return e=ta(s,i,!0,e,a,c,h,v,w),e.context=vf(null),s=e.current,i=it(),a=Sn(s),c=nn(i,a),c.callback=t??null,yn(s,c,a),e.current.lanes=a,Ur(e,a,i),ht(e,i),e}function Bo(e,t,s,i){var a=t.current,c=it(),h=Sn(a);return s=vf(s),t.context===null?t.context=s:t.pendingContext=s,t=nn(c,h),t.payload={element:e},i=i===void 0?null:i,i!==null&&(t.callback=i),e=yn(a,t,h),e!==null&&(Vt(e,a,h,c),go(e,a,h)),h}function Fo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function wf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var s=e.retryLane;e.retryLane=s!==0&&s<t?s:t}}function na(e,t){wf(e,t),(e=e.alternate)&&wf(e,t)}function A0(){return null}var Sf=typeof reportError=="function"?reportError:function(e){console.error(e)};function ra(e){this._internalRoot=e}Uo.prototype.render=ra.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));Bo(e,t,null,null)},Uo.prototype.unmount=ra.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Fn(function(){Bo(null,e,null,null)}),t[Zt]=null}};function Uo(e){this._internalRoot=e}Uo.prototype.unstable_scheduleHydration=function(e){if(e){var t=sc();e={blockedOn:null,target:e,priority:t};for(var s=0;s<cn.length&&t!==0&&t<cn[s].priority;s++);cn.splice(s,0,e),s===0&&lc(e)}};function sa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Yo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function kf(){}function j0(e,t,s,i,a){if(a){if(typeof i=="function"){var c=i;i=function(){var M=Fo(h);c.call(M)}}var h=xf(t,i,e,0,null,!1,!1,"",kf);return e._reactRootContainer=h,e[Zt]=h.current,ns(e.nodeType===8?e.parentNode:e),Fn(),h}for(;a=e.lastChild;)e.removeChild(a);if(typeof i=="function"){var v=i;i=function(){var M=Fo(w);v.call(M)}}var w=ta(e,0,!1,null,null,!1,!1,"",kf);return e._reactRootContainer=w,e[Zt]=w.current,ns(e.nodeType===8?e.parentNode:e),Fn(function(){Bo(t,w,s,i)}),w}function Wo(e,t,s,i,a){var c=s._reactRootContainer;if(c){var h=c;if(typeof a=="function"){var v=a;a=function(){var w=Fo(h);v.call(w)}}Bo(t,h,e,a)}else h=j0(s,t,e,a,i);return Fo(h)}nc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var s=Fr(t.pendingLanes);s!==0&&(Ei(t,s|1),ht(t,Oe()),(_e&6)===0&&(wr=Oe()+500,_n()))}break;case 13:Fn(function(){var i=tn(e,1);if(i!==null){var a=it();Vt(i,e,1,a)}}),na(e,1)}},Mi=function(e){if(e.tag===13){var t=tn(e,134217728);if(t!==null){var s=it();Vt(t,e,134217728,s)}na(e,134217728)}},rc=function(e){if(e.tag===13){var t=Sn(e),s=tn(e,t);if(s!==null){var i=it();Vt(s,e,t,i)}na(e,t)}},sc=function(){return we},oc=function(e,t){var s=we;try{return we=e,t()}finally{we=s}},wi=function(e,t,s){switch(t){case"input":if(gt(e,s),t=s.name,s.type==="radio"&&t!=null){for(s=e;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<s.length;t++){var i=s[t];if(i!==e&&i.form===e.form){var a=io(i);if(!a)throw Error(o(90));Ee(i),gt(i,a)}}}break;case"textarea":Au(e,s);break;case"select":t=s.value,t!=null&&Jn(e,!!s.multiple,t,!1)}},Yu=Kl,Wu=Fn;var N0={usingClientEntryPoint:!1,Events:[os,ar,io,Fu,Uu,Kl]},vs={findFiberByHostInstance:In,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},V0={bundleType:vs.bundleType,version:vs.version,rendererPackageName:vs.rendererPackageName,rendererConfig:vs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:O.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=$u(e),e===null?null:e.stateNode},findFiberByHostInstance:vs.findFiberByHostInstance||A0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ho=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ho.isDisabled&&Ho.supportsFiber)try{Fs=Ho.inject(V0),Ut=Ho}catch{}}return mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=N0,mt.createPortal=function(e,t){var s=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!sa(t))throw Error(o(200));return I0(e,t,null,s)},mt.createRoot=function(e,t){if(!sa(e))throw Error(o(299));var s=!1,i="",a=Sf;return t!=null&&(t.unstable_strictMode===!0&&(s=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=ta(e,1,!1,null,null,s,!1,i,a),e[Zt]=t.current,ns(e.nodeType===8?e.parentNode:e),new ra(t)},mt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=$u(t),e=e===null?null:e.stateNode,e},mt.flushSync=function(e){return Fn(e)},mt.hydrate=function(e,t,s){if(!Yo(t))throw Error(o(200));return Wo(null,e,t,!0,s)},mt.hydrateRoot=function(e,t,s){if(!sa(e))throw Error(o(405));var i=s!=null&&s.hydratedSources||null,a=!1,c="",h=Sf;if(s!=null&&(s.unstable_strictMode===!0&&(a=!0),s.identifierPrefix!==void 0&&(c=s.identifierPrefix),s.onRecoverableError!==void 0&&(h=s.onRecoverableError)),t=xf(t,null,e,1,s??null,a,!1,c,h),e[Zt]=t.current,ns(e),i)for(e=0;e<i.length;e++)s=i[e],a=s._getVersion,a=a(s._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[s,a]:t.mutableSourceEagerHydrationData.push(s,a);return new Uo(t)},mt.render=function(e,t,s){if(!Yo(t))throw Error(o(200));return Wo(null,e,t,!1,s)},mt.unmountComponentAtNode=function(e){if(!Yo(e))throw Error(o(40));return e._reactRootContainer?(Fn(function(){Wo(null,null,e,!1,function(){e._reactRootContainer=null,e[Zt]=null})}),!0):!1},mt.unstable_batchedUpdates=Kl,mt.unstable_renderSubtreeIntoContainer=function(e,t,s,i){if(!Yo(s))throw Error(o(200));if(e==null||e._reactInternals===void 0)throw Error(o(38));return Wo(e,t,s,!1,i)},mt.version="18.3.1-next-f1338f8080-20240426",mt}var Df;function th(){if(Df)return la.exports;Df=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(r){console.error(r)}}return n(),la.exports=H0(),la.exports}var Lf;function Q0(){if(Lf)return Qo;Lf=1;var n=th();return Qo.createRoot=n.createRoot,Qo.hydrateRoot=n.hydrateRoot,Qo}var X0=Q0(),R=tu();const $0=z0(R),Ts=R.createContext({});function nu(n){const r=R.useRef(null);return r.current===null&&(r.current=n()),r.current}const K0=typeof window<"u",ru=K0?R.useLayoutEffect:R.useEffect,di=R.createContext(null);function su(n,r){n.indexOf(r)===-1&&n.push(r)}function ri(n,r){const o=n.indexOf(r);o>-1&&n.splice(o,1)}const Kt=(n,r,o)=>o>r?r:o<n?n:o;let ou=()=>{};const on={},nh=n=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n);function rh(n){return typeof n=="object"&&n!==null}const sh=n=>/^0[^.\s]+$/u.test(n);function oh(n){let r;return()=>(r===void 0&&(r=n()),r)}const Mt=n=>n,G0=(n,r)=>o=>r(n(o)),Is=(...n)=>n.reduce(G0),Es=(n,r,o)=>{const l=r-n;return l===0?1:(o-n)/l};class iu{constructor(){this.subscriptions=[]}add(r){return su(this.subscriptions,r),()=>ri(this.subscriptions,r)}notify(r,o,l){const u=this.subscriptions.length;if(u)if(u===1)this.subscriptions[0](r,o,l);else for(let f=0;f<u;f++){const d=this.subscriptions[f];d&&d(r,o,l)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Bt=n=>n*1e3,Et=n=>n/1e3;function ih(n,r){return r?n*(1e3/r):0}const lh=(n,r,o)=>(((1-3*o+3*r)*n+(3*o-6*r))*n+3*r)*n,Z0=1e-7,J0=12;function q0(n,r,o,l,u){let f,d,p=0;do d=r+(o-r)/2,f=lh(d,l,u)-n,f>0?o=d:r=d;while(Math.abs(f)>Z0&&++p<J0);return d}function As(n,r,o,l){if(n===r&&o===l)return Mt;const u=f=>q0(f,0,1,n,o);return f=>f===0||f===1?f:lh(u(f),r,l)}const ah=n=>r=>r<=.5?n(2*r)/2:(2-n(2*(1-r)))/2,uh=n=>r=>1-n(1-r),ch=As(.33,1.53,.69,.99),lu=uh(ch),dh=ah(lu),fh=n=>(n*=2)<1?.5*lu(n):.5*(2-Math.pow(2,-10*(n-1))),au=n=>1-Math.sin(Math.acos(n)),ph=uh(au),hh=ah(au),eg=As(.42,0,1,1),tg=As(0,0,.58,1),mh=As(.42,0,.58,1),ng=n=>Array.isArray(n)&&typeof n[0]!="number",_h=n=>Array.isArray(n)&&typeof n[0]=="number",rg={linear:Mt,easeIn:eg,easeInOut:mh,easeOut:tg,circIn:au,circInOut:hh,circOut:ph,backIn:lu,backInOut:dh,backOut:ch,anticipate:fh},sg=n=>typeof n=="string",If=n=>{if(_h(n)){ou(n.length===4);const[r,o,l,u]=n;return As(r,o,l,u)}else if(sg(n))return rg[n];return n},Xo=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function og(n,r){let o=new Set,l=new Set,u=!1,f=!1;const d=new WeakSet;let p={delta:0,timestamp:0,isProcessing:!1};function m(g){d.has(g)&&(_.schedule(g),n()),g(p)}const _={schedule:(g,y=!1,x=!1)=>{const T=x&&u?o:l;return y&&d.add(g),T.has(g)||T.add(g),g},cancel:g=>{l.delete(g),d.delete(g)},process:g=>{if(p=g,u){f=!0;return}u=!0,[o,l]=[l,o],o.forEach(m),o.clear(),u=!1,f&&(f=!1,_.process(g))}};return _}const ig=40;function gh(n,r){let o=!1,l=!0;const u={delta:0,timestamp:0,isProcessing:!1},f=()=>o=!0,d=Xo.reduce((I,O)=>(I[O]=og(f),I),{}),{setup:p,read:m,resolveKeyframes:_,preUpdate:g,update:y,preRender:x,render:b,postRender:T}=d,L=()=>{const I=on.useManualTiming?u.timestamp:performance.now();o=!1,on.useManualTiming||(u.delta=l?1e3/60:Math.max(Math.min(I-u.timestamp,ig),1)),u.timestamp=I,u.isProcessing=!0,p.process(u),m.process(u),_.process(u),g.process(u),y.process(u),x.process(u),b.process(u),T.process(u),u.isProcessing=!1,o&&r&&(l=!1,n(L))},E=()=>{o=!0,l=!0,u.isProcessing||n(L)};return{schedule:Xo.reduce((I,O)=>{const F=d[O];return I[O]=(K,te=!1,Q=!1)=>(o||E(),F.schedule(K,te,Q)),I},{}),cancel:I=>{for(let O=0;O<Xo.length;O++)d[Xo[O]].cancel(I)},state:u,steps:d}}const{schedule:Ce,cancel:Rn,state:Ze,steps:ca}=gh(typeof requestAnimationFrame<"u"?requestAnimationFrame:Mt,!0);let Zo;function lg(){Zo=void 0}const lt={now:()=>(Zo===void 0&&lt.set(Ze.isProcessing||on.useManualTiming?Ze.timestamp:performance.now()),Zo),set:n=>{Zo=n,queueMicrotask(lg)}},yh=n=>r=>typeof r=="string"&&r.startsWith(n),vh=yh("--"),ag=yh("var(--"),uu=n=>ag(n)?ug.test(n.split("/*")[0].trim()):!1,ug=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function Af(n){return typeof n!="string"?!1:n.split("/*")[0].includes("var(--")}const Lr={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},Ms={...Lr,transform:n=>Kt(0,1,n)},$o={...Lr,default:1},ks=n=>Math.round(n*1e5)/1e5,cu=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function cg(n){return n==null}const dg=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,du=(n,r)=>o=>!!(typeof o=="string"&&dg.test(o)&&o.startsWith(n)||r&&!cg(o)&&Object.prototype.hasOwnProperty.call(o,r)),xh=(n,r,o)=>l=>{if(typeof l!="string")return l;const[u,f,d,p]=l.match(cu);return{[n]:parseFloat(u),[r]:parseFloat(f),[o]:parseFloat(d),alpha:p!==void 0?parseFloat(p):1}},fg=n=>Kt(0,255,n),da={...Lr,transform:n=>Math.round(fg(n))},$n={test:du("rgb","red"),parse:xh("red","green","blue"),transform:({red:n,green:r,blue:o,alpha:l=1})=>"rgba("+da.transform(n)+", "+da.transform(r)+", "+da.transform(o)+", "+ks(Ms.transform(l))+")"};function pg(n){let r="",o="",l="",u="";return n.length>5?(r=n.substring(1,3),o=n.substring(3,5),l=n.substring(5,7),u=n.substring(7,9)):(r=n.substring(1,2),o=n.substring(2,3),l=n.substring(3,4),u=n.substring(4,5),r+=r,o+=o,l+=l,u+=u),{red:parseInt(r,16),green:parseInt(o,16),blue:parseInt(l,16),alpha:u?parseInt(u,16)/255:1}}const Ra={test:du("#"),parse:pg,transform:$n.transform},js=n=>({test:r=>typeof r=="string"&&r.endsWith(n)&&r.split(" ").length===1,parse:parseFloat,transform:r=>`${r}${n}`}),Pn=js("deg"),$t=js("%"),J=js("px"),hg=js("vh"),mg=js("vw"),jf={...$t,parse:n=>$t.parse(n)/100,transform:n=>$t.transform(n*100)},Cr={test:du("hsl","hue"),parse:xh("hue","saturation","lightness"),transform:({hue:n,saturation:r,lightness:o,alpha:l=1})=>"hsla("+Math.round(n)+", "+$t.transform(ks(r))+", "+$t.transform(ks(o))+", "+ks(Ms.transform(l))+")"},Fe={test:n=>$n.test(n)||Ra.test(n)||Cr.test(n),parse:n=>$n.test(n)?$n.parse(n):Cr.test(n)?Cr.parse(n):Ra.parse(n),transform:n=>typeof n=="string"?n:n.hasOwnProperty("red")?$n.transform(n):Cr.transform(n),getAnimatableNone:n=>{const r=Fe.parse(n);return r.alpha=0,Fe.transform(r)}},_g=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function gg(n){var r,o;return isNaN(n)&&typeof n=="string"&&(((r=n.match(cu))==null?void 0:r.length)||0)+(((o=n.match(_g))==null?void 0:o.length)||0)>0}const wh="number",Sh="color",yg="var",vg="var(",Nf="${}",xg=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Rs(n){const r=n.toString(),o=[],l={color:[],number:[],var:[]},u=[];let f=0;const p=r.replace(xg,m=>(Fe.test(m)?(l.color.push(f),u.push(Sh),o.push(Fe.parse(m))):m.startsWith(vg)?(l.var.push(f),u.push(yg),o.push(m)):(l.number.push(f),u.push(wh),o.push(parseFloat(m))),++f,Nf)).split(Nf);return{values:o,split:p,indexes:l,types:u}}function kh(n){return Rs(n).values}function bh(n){const{split:r,types:o}=Rs(n),l=r.length;return u=>{let f="";for(let d=0;d<l;d++)if(f+=r[d],u[d]!==void 0){const p=o[d];p===wh?f+=ks(u[d]):p===Sh?f+=Fe.transform(u[d]):f+=u[d]}return f}}const wg=n=>typeof n=="number"?0:Fe.test(n)?Fe.getAnimatableNone(n):n;function Sg(n){const r=kh(n);return bh(n)(r.map(wg))}const Ft={test:gg,parse:kh,createTransformer:bh,getAnimatableNone:Sg};function fa(n,r,o){return o<0&&(o+=1),o>1&&(o-=1),o<1/6?n+(r-n)*6*o:o<1/2?r:o<2/3?n+(r-n)*(2/3-o)*6:n}function kg({hue:n,saturation:r,lightness:o,alpha:l}){n/=360,r/=100,o/=100;let u=0,f=0,d=0;if(!r)u=f=d=o;else{const p=o<.5?o*(1+r):o+r-o*r,m=2*o-p;u=fa(m,p,n+1/3),f=fa(m,p,n),d=fa(m,p,n-1/3)}return{red:Math.round(u*255),green:Math.round(f*255),blue:Math.round(d*255),alpha:l}}function si(n,r){return o=>o>0?r:n}const je=(n,r,o)=>n+(r-n)*o,pa=(n,r,o)=>{const l=n*n,u=o*(r*r-l)+l;return u<0?0:Math.sqrt(u)},bg=[Ra,$n,Cr],Cg=n=>bg.find(r=>r.test(n));function Vf(n){const r=Cg(n);if(!r)return!1;let o=r.parse(n);return r===Cr&&(o=kg(o)),o}const Of=(n,r)=>{const o=Vf(n),l=Vf(r);if(!o||!l)return si(n,r);const u={...o};return f=>(u.red=pa(o.red,l.red,f),u.green=pa(o.green,l.green,f),u.blue=pa(o.blue,l.blue,f),u.alpha=je(o.alpha,l.alpha,f),$n.transform(u))},Da=new Set(["none","hidden"]);function Pg(n,r){return Da.has(n)?o=>o<=0?n:r:o=>o>=1?r:n}function Tg(n,r){return o=>je(n,r,o)}function fu(n){return typeof n=="number"?Tg:typeof n=="string"?uu(n)?si:Fe.test(n)?Of:Rg:Array.isArray(n)?Ch:typeof n=="object"?Fe.test(n)?Of:Eg:si}function Ch(n,r){const o=[...n],l=o.length,u=n.map((f,d)=>fu(f)(f,r[d]));return f=>{for(let d=0;d<l;d++)o[d]=u[d](f);return o}}function Eg(n,r){const o={...n,...r},l={};for(const u in o)n[u]!==void 0&&r[u]!==void 0&&(l[u]=fu(n[u])(n[u],r[u]));return u=>{for(const f in l)o[f]=l[f](u);return o}}function Mg(n,r){const o=[],l={color:0,var:0,number:0};for(let u=0;u<r.values.length;u++){const f=r.types[u],d=n.indexes[f][l[f]],p=n.values[d]??0;o[u]=p,l[f]++}return o}const Rg=(n,r)=>{const o=Ft.createTransformer(r),l=Rs(n),u=Rs(r);return l.indexes.var.length===u.indexes.var.length&&l.indexes.color.length===u.indexes.color.length&&l.indexes.number.length>=u.indexes.number.length?Da.has(n)&&!u.values.length||Da.has(r)&&!l.values.length?Pg(n,r):Is(Ch(Mg(l,u),u.values),o):si(n,r)};function Ph(n,r,o){return typeof n=="number"&&typeof r=="number"&&typeof o=="number"?je(n,r,o):fu(n)(n,r)}const Dg=n=>{const r=({timestamp:o})=>n(o);return{start:(o=!0)=>Ce.update(r,o),stop:()=>Rn(r),now:()=>Ze.isProcessing?Ze.timestamp:lt.now()}},Th=(n,r,o=10)=>{let l="";const u=Math.max(Math.round(r/o),2);for(let f=0;f<u;f++)l+=Math.round(n(f/(u-1))*1e4)/1e4+", ";return`linear(${l.substring(0,l.length-2)})`},oi=2e4;function pu(n){let r=0;const o=50;let l=n.next(r);for(;!l.done&&r<oi;)r+=o,l=n.next(r);return r>=oi?1/0:r}function Lg(n,r=100,o){const l=o({...n,keyframes:[0,r]}),u=Math.min(pu(l),oi);return{type:"keyframes",ease:f=>l.next(u*f).value/r,duration:Et(u)}}const Ig=5;function Eh(n,r,o){const l=Math.max(r-Ig,0);return ih(o-n(l),r-l)}const Ve={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},ha=.001;function Ag({duration:n=Ve.duration,bounce:r=Ve.bounce,velocity:o=Ve.velocity,mass:l=Ve.mass}){let u,f,d=1-r;d=Kt(Ve.minDamping,Ve.maxDamping,d),n=Kt(Ve.minDuration,Ve.maxDuration,Et(n)),d<1?(u=_=>{const g=_*d,y=g*n,x=g-o,b=La(_,d),T=Math.exp(-y);return ha-x/b*T},f=_=>{const y=_*d*n,x=y*o+o,b=Math.pow(d,2)*Math.pow(_,2)*n,T=Math.exp(-y),L=La(Math.pow(_,2),d);return(-u(_)+ha>0?-1:1)*((x-b)*T)/L}):(u=_=>{const g=Math.exp(-_*n),y=(_-o)*n+1;return-ha+g*y},f=_=>{const g=Math.exp(-_*n),y=(o-_)*(n*n);return g*y});const p=5/n,m=Ng(u,f,p);if(n=Bt(n),isNaN(m))return{stiffness:Ve.stiffness,damping:Ve.damping,duration:n};{const _=Math.pow(m,2)*l;return{stiffness:_,damping:d*2*Math.sqrt(l*_),duration:n}}}const jg=12;function Ng(n,r,o){let l=o;for(let u=1;u<jg;u++)l=l-n(l)/r(l);return l}function La(n,r){return n*Math.sqrt(1-r*r)}const Vg=["duration","bounce"],Og=["stiffness","damping","mass"];function zf(n,r){return r.some(o=>n[o]!==void 0)}function zg(n){let r={velocity:Ve.velocity,stiffness:Ve.stiffness,damping:Ve.damping,mass:Ve.mass,isResolvedFromDuration:!1,...n};if(!zf(n,Og)&&zf(n,Vg))if(r.velocity=0,n.visualDuration){const o=n.visualDuration,l=2*Math.PI/(o*1.2),u=l*l,f=2*Kt(.05,1,1-(n.bounce||0))*Math.sqrt(u);r={...r,mass:Ve.mass,stiffness:u,damping:f}}else{const o=Ag({...n,velocity:0});r={...r,...o,mass:Ve.mass},r.isResolvedFromDuration=!0}return r}function ii(n=Ve.visualDuration,r=Ve.bounce){const o=typeof n!="object"?{visualDuration:n,keyframes:[0,1],bounce:r}:n;let{restSpeed:l,restDelta:u}=o;const f=o.keyframes[0],d=o.keyframes[o.keyframes.length-1],p={done:!1,value:f},{stiffness:m,damping:_,mass:g,duration:y,velocity:x,isResolvedFromDuration:b}=zg({...o,velocity:-Et(o.velocity||0)}),T=x||0,L=_/(2*Math.sqrt(m*g)),E=d-f,j=Et(Math.sqrt(m/g)),A=Math.abs(E)<5;l||(l=A?Ve.restSpeed.granular:Ve.restSpeed.default),u||(u=A?Ve.restDelta.granular:Ve.restDelta.default);let I;if(L<1){const F=La(j,L);I=K=>{const te=Math.exp(-L*j*K);return d-te*((T+L*j*E)/F*Math.sin(F*K)+E*Math.cos(F*K))}}else if(L===1)I=F=>d-Math.exp(-j*F)*(E+(T+j*E)*F);else{const F=j*Math.sqrt(L*L-1);I=K=>{const te=Math.exp(-L*j*K),Q=Math.min(F*K,300);return d-te*((T+L*j*E)*Math.sinh(Q)+F*E*Math.cosh(Q))/F}}const O={calculatedDuration:b&&y||null,next:F=>{const K=I(F);if(b)p.done=F>=y;else{let te=F===0?T:0;L<1&&(te=F===0?Bt(T):Eh(I,F,K));const Q=Math.abs(te)<=l,$=Math.abs(d-K)<=u;p.done=Q&&$}return p.value=p.done?d:K,p},toString:()=>{const F=Math.min(pu(O),oi),K=Th(te=>O.next(F*te).value,F,30);return F+"ms "+K},toTransition:()=>{}};return O}ii.applyToOptions=n=>{const r=Lg(n,100,ii);return n.ease=r.ease,n.duration=Bt(r.duration),n.type="keyframes",n};function Ia({keyframes:n,velocity:r=0,power:o=.8,timeConstant:l=325,bounceDamping:u=10,bounceStiffness:f=500,modifyTarget:d,min:p,max:m,restDelta:_=.5,restSpeed:g}){const y=n[0],x={done:!1,value:y},b=Q=>p!==void 0&&Q<p||m!==void 0&&Q>m,T=Q=>p===void 0?m:m===void 0||Math.abs(p-Q)<Math.abs(m-Q)?p:m;let L=o*r;const E=y+L,j=d===void 0?E:d(E);j!==E&&(L=j-y);const A=Q=>-L*Math.exp(-Q/l),I=Q=>j+A(Q),O=Q=>{const $=A(Q),oe=I(Q);x.done=Math.abs($)<=_,x.value=x.done?j:oe};let F,K;const te=Q=>{b(x.value)&&(F=Q,K=ii({keyframes:[x.value,T(x.value)],velocity:Eh(I,Q,x.value),damping:u,stiffness:f,restDelta:_,restSpeed:g}))};return te(0),{calculatedDuration:null,next:Q=>{let $=!1;return!K&&F===void 0&&($=!0,O(Q),te(Q)),F!==void 0&&Q>=F?K.next(Q-F):(!$&&O(Q),x)}}}function Bg(n,r,o){const l=[],u=o||on.mix||Ph,f=n.length-1;for(let d=0;d<f;d++){let p=u(n[d],n[d+1]);if(r){const m=Array.isArray(r)?r[d]||Mt:r;p=Is(m,p)}l.push(p)}return l}function Fg(n,r,{clamp:o=!0,ease:l,mixer:u}={}){const f=n.length;if(ou(f===r.length),f===1)return()=>r[0];if(f===2&&r[0]===r[1])return()=>r[1];const d=n[0]===n[1];n[0]>n[f-1]&&(n=[...n].reverse(),r=[...r].reverse());const p=Bg(r,l,u),m=p.length,_=g=>{if(d&&g<n[0])return r[0];let y=0;if(m>1)for(;y<n.length-2&&!(g<n[y+1]);y++);const x=Es(n[y],n[y+1],g);return p[y](x)};return o?g=>_(Kt(n[0],n[f-1],g)):_}function Ug(n,r){const o=n[n.length-1];for(let l=1;l<=r;l++){const u=Es(0,r,l);n.push(je(o,1,u))}}function Yg(n){const r=[0];return Ug(r,n.length-1),r}function Wg(n,r){return n.map(o=>o*r)}function Hg(n,r){return n.map(()=>r||mh).splice(0,n.length-1)}function bs({duration:n=300,keyframes:r,times:o,ease:l="easeInOut"}){const u=ng(l)?l.map(If):If(l),f={done:!1,value:r[0]},d=Wg(o&&o.length===r.length?o:Yg(r),n),p=Fg(d,r,{ease:Array.isArray(u)?u:Hg(r,u)});return{calculatedDuration:n,next:m=>(f.value=p(m),f.done=m>=n,f)}}const Qg=n=>n!==null;function hu(n,{repeat:r,repeatType:o="loop"},l,u=1){const f=n.filter(Qg),p=u<0||r&&o!=="loop"&&r%2===1?0:f.length-1;return!p||l===void 0?f[p]:l}const Xg={decay:Ia,inertia:Ia,tween:bs,keyframes:bs,spring:ii};function Mh(n){typeof n.type=="string"&&(n.type=Xg[n.type])}class mu{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(r=>{this.resolve=r})}notifyFinished(){this.resolve()}then(r,o){return this.finished.then(r,o)}}const $g=n=>n/100;class _u extends mu{constructor(r){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{var l,u;const{motionValue:o}=this.options;o&&o.updatedAt!==lt.now()&&this.tick(lt.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(u=(l=this.options).onStop)==null||u.call(l))},this.options=r,this.initAnimation(),this.play(),r.autoplay===!1&&this.pause()}initAnimation(){const{options:r}=this;Mh(r);const{type:o=bs,repeat:l=0,repeatDelay:u=0,repeatType:f,velocity:d=0}=r;let{keyframes:p}=r;const m=o||bs;m!==bs&&typeof p[0]!="number"&&(this.mixKeyframes=Is($g,Ph(p[0],p[1])),p=[0,100]);const _=m({...r,keyframes:p});f==="mirror"&&(this.mirroredGenerator=m({...r,keyframes:[...p].reverse(),velocity:-d})),_.calculatedDuration===null&&(_.calculatedDuration=pu(_));const{calculatedDuration:g}=_;this.calculatedDuration=g,this.resolvedDuration=g+u,this.totalDuration=this.resolvedDuration*(l+1)-u,this.generator=_}updateTime(r){const o=Math.round(r-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=o}tick(r,o=!1){const{generator:l,totalDuration:u,mixKeyframes:f,mirroredGenerator:d,resolvedDuration:p,calculatedDuration:m}=this;if(this.startTime===null)return l.next(0);const{delay:_=0,keyframes:g,repeat:y,repeatType:x,repeatDelay:b,type:T,onUpdate:L,finalKeyframe:E}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,r):this.speed<0&&(this.startTime=Math.min(r-u/this.speed,this.startTime)),o?this.currentTime=r:this.updateTime(r);const j=this.currentTime-_*(this.playbackSpeed>=0?1:-1),A=this.playbackSpeed>=0?j<0:j>u;this.currentTime=Math.max(j,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=u);let I=this.currentTime,O=l;if(y){const Q=Math.min(this.currentTime,u)/p;let $=Math.floor(Q),oe=Q%1;!oe&&Q>=1&&(oe=1),oe===1&&$--,$=Math.min($,y+1),!!($%2)&&(x==="reverse"?(oe=1-oe,b&&(oe-=b/p)):x==="mirror"&&(O=d)),I=Kt(0,1,oe)*p}const F=A?{done:!1,value:g[0]}:O.next(I);f&&(F.value=f(F.value));let{done:K}=F;!A&&m!==null&&(K=this.playbackSpeed>=0?this.currentTime>=u:this.currentTime<=0);const te=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&K);return te&&T!==Ia&&(F.value=hu(g,this.options,E,this.speed)),L&&L(F.value),te&&this.finish(),F}then(r,o){return this.finished.then(r,o)}get duration(){return Et(this.calculatedDuration)}get iterationDuration(){const{delay:r=0}=this.options||{};return this.duration+Et(r)}get time(){return Et(this.currentTime)}set time(r){var o;r=Bt(r),this.currentTime=r,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=r:this.driver&&(this.startTime=this.driver.now()-r/this.playbackSpeed),(o=this.driver)==null||o.start(!1)}get speed(){return this.playbackSpeed}set speed(r){this.updateTime(lt.now());const o=this.playbackSpeed!==r;this.playbackSpeed=r,o&&(this.time=Et(this.currentTime))}play(){var u,f;if(this.isStopped)return;const{driver:r=Dg,startTime:o}=this.options;this.driver||(this.driver=r(d=>this.tick(d))),(f=(u=this.options).onPlay)==null||f.call(u);const l=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=l):this.holdTime!==null?this.startTime=l-this.holdTime:this.startTime||(this.startTime=o??l),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(lt.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var r,o;this.notifyFinished(),this.teardown(),this.state="finished",(o=(r=this.options).onComplete)==null||o.call(r)}cancel(){var r,o;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(o=(r=this.options).onCancel)==null||o.call(r)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(r){return this.startTime=0,this.tick(r,!0)}attachTimeline(r){var o;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(o=this.driver)==null||o.stop(),r.observe(this)}}function Kg(n){for(let r=1;r<n.length;r++)n[r]??(n[r]=n[r-1])}const Kn=n=>n*180/Math.PI,Aa=n=>{const r=Kn(Math.atan2(n[1],n[0]));return ja(r)},Gg={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:n=>(Math.abs(n[0])+Math.abs(n[3]))/2,rotate:Aa,rotateZ:Aa,skewX:n=>Kn(Math.atan(n[1])),skewY:n=>Kn(Math.atan(n[2])),skew:n=>(Math.abs(n[1])+Math.abs(n[2]))/2},ja=n=>(n=n%360,n<0&&(n+=360),n),Bf=Aa,Ff=n=>Math.sqrt(n[0]*n[0]+n[1]*n[1]),Uf=n=>Math.sqrt(n[4]*n[4]+n[5]*n[5]),Zg={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Ff,scaleY:Uf,scale:n=>(Ff(n)+Uf(n))/2,rotateX:n=>ja(Kn(Math.atan2(n[6],n[5]))),rotateY:n=>ja(Kn(Math.atan2(-n[2],n[0]))),rotateZ:Bf,rotate:Bf,skewX:n=>Kn(Math.atan(n[4])),skewY:n=>Kn(Math.atan(n[1])),skew:n=>(Math.abs(n[1])+Math.abs(n[4]))/2};function Na(n){return n.includes("scale")?1:0}function Va(n,r){if(!n||n==="none")return Na(r);const o=n.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let l,u;if(o)l=Zg,u=o;else{const p=n.match(/^matrix\(([-\d.e\s,]+)\)$/u);l=Gg,u=p}if(!u)return Na(r);const f=l[r],d=u[1].split(",").map(qg);return typeof f=="function"?f(d):d[f]}const Jg=(n,r)=>{const{transform:o="none"}=getComputedStyle(n);return Va(o,r)};function qg(n){return parseFloat(n.trim())}const Ir=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Ar=new Set(Ir),Yf=n=>n===Lr||n===J,ey=new Set(["x","y","z"]),ty=Ir.filter(n=>!ey.has(n));function ny(n){const r=[];return ty.forEach(o=>{const l=n.getValue(o);l!==void 0&&(r.push([o,l.get()]),l.set(o.startsWith("scale")?1:0))}),r}const Mn={width:({x:n},{paddingLeft:r="0",paddingRight:o="0"})=>n.max-n.min-parseFloat(r)-parseFloat(o),height:({y:n},{paddingTop:r="0",paddingBottom:o="0"})=>n.max-n.min-parseFloat(r)-parseFloat(o),top:(n,{top:r})=>parseFloat(r),left:(n,{left:r})=>parseFloat(r),bottom:({y:n},{top:r})=>parseFloat(r)+(n.max-n.min),right:({x:n},{left:r})=>parseFloat(r)+(n.max-n.min),x:(n,{transform:r})=>Va(r,"x"),y:(n,{transform:r})=>Va(r,"y")};Mn.translateX=Mn.x;Mn.translateY=Mn.y;const Gn=new Set;let Oa=!1,za=!1,Ba=!1;function Rh(){if(za){const n=Array.from(Gn).filter(l=>l.needsMeasurement),r=new Set(n.map(l=>l.element)),o=new Map;r.forEach(l=>{const u=ny(l);u.length&&(o.set(l,u),l.render())}),n.forEach(l=>l.measureInitialState()),r.forEach(l=>{l.render();const u=o.get(l);u&&u.forEach(([f,d])=>{var p;(p=l.getValue(f))==null||p.set(d)})}),n.forEach(l=>l.measureEndState()),n.forEach(l=>{l.suspendedScrollY!==void 0&&window.scrollTo(0,l.suspendedScrollY)})}za=!1,Oa=!1,Gn.forEach(n=>n.complete(Ba)),Gn.clear()}function Dh(){Gn.forEach(n=>{n.readKeyframes(),n.needsMeasurement&&(za=!0)})}function ry(){Ba=!0,Dh(),Rh(),Ba=!1}class gu{constructor(r,o,l,u,f,d=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...r],this.onComplete=o,this.name=l,this.motionValue=u,this.element=f,this.isAsync=d}scheduleResolve(){this.state="scheduled",this.isAsync?(Gn.add(this),Oa||(Oa=!0,Ce.read(Dh),Ce.resolveKeyframes(Rh))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:r,name:o,element:l,motionValue:u}=this;if(r[0]===null){const f=u==null?void 0:u.get(),d=r[r.length-1];if(f!==void 0)r[0]=f;else if(l&&o){const p=l.readValue(o,d);p!=null&&(r[0]=p)}r[0]===void 0&&(r[0]=d),u&&f===void 0&&u.set(r[0])}Kg(r)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(r=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,r),Gn.delete(this)}cancel(){this.state==="scheduled"&&(Gn.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const sy=n=>n.startsWith("--");function oy(n,r,o){sy(r)?n.style.setProperty(r,o):n.style[r]=o}const iy={};function Lh(n,r){const o=oh(n);return()=>iy[r]??o()}const ly=Lh(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),Ih=Lh(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Ss=([n,r,o,l])=>`cubic-bezier(${n}, ${r}, ${o}, ${l})`,Wf={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Ss([0,.65,.55,1]),circOut:Ss([.55,0,1,.45]),backIn:Ss([.31,.01,.66,-.59]),backOut:Ss([.33,1.53,.69,.99])};function Ah(n,r){if(n)return typeof n=="function"?Ih()?Th(n,r):"ease-out":_h(n)?Ss(n):Array.isArray(n)?n.map(o=>Ah(o,r)||Wf.easeOut):Wf[n]}function ay(n,r,o,{delay:l=0,duration:u=300,repeat:f=0,repeatType:d="loop",ease:p="easeOut",times:m}={},_=void 0){const g={[r]:o};m&&(g.offset=m);const y=Ah(p,u);Array.isArray(y)&&(g.easing=y);const x={delay:l,duration:u,easing:Array.isArray(y)?"linear":y,fill:"both",iterations:f+1,direction:d==="reverse"?"alternate":"normal"};return _&&(x.pseudoElement=_),n.animate(g,x)}function jh(n){return typeof n=="function"&&"applyToOptions"in n}function uy({type:n,...r}){return jh(n)&&Ih()?n.applyToOptions(r):(r.duration??(r.duration=300),r.ease??(r.ease="easeOut"),r)}class Nh extends mu{constructor(r){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!r)return;const{element:o,name:l,keyframes:u,pseudoElement:f,allowFlatten:d=!1,finalKeyframe:p,onComplete:m}=r;this.isPseudoElement=!!f,this.allowFlatten=d,this.options=r,ou(typeof r.type!="string");const _=uy(r);this.animation=ay(o,l,u,_,f),_.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!f){const g=hu(u,this.options,p,this.speed);this.updateMotionValue&&this.updateMotionValue(g),oy(o,l,g),this.animation.cancel()}m==null||m(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var r,o;(o=(r=this.animation).finish)==null||o.call(r)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:r}=this;r==="idle"||r==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var o,l,u;const r=(o=this.options)==null?void 0:o.element;!this.isPseudoElement&&(r!=null&&r.isConnected)&&((u=(l=this.animation).commitStyles)==null||u.call(l))}get duration(){var o,l;const r=((l=(o=this.animation.effect)==null?void 0:o.getComputedTiming)==null?void 0:l.call(o).duration)||0;return Et(Number(r))}get iterationDuration(){const{delay:r=0}=this.options||{};return this.duration+Et(r)}get time(){return Et(Number(this.animation.currentTime)||0)}set time(r){this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=Bt(r)}get speed(){return this.animation.playbackRate}set speed(r){r<0&&(this.finishedTime=null),this.animation.playbackRate=r}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(r){this.manualStartTime=this.animation.startTime=r}attachTimeline({timeline:r,rangeStart:o,rangeEnd:l,observe:u}){var f;return this.allowFlatten&&((f=this.animation.effect)==null||f.updateTiming({easing:"linear"})),this.animation.onfinish=null,r&&ly()?(this.animation.timeline=r,o&&(this.animation.rangeStart=o),l&&(this.animation.rangeEnd=l),Mt):u(this)}}const Vh={anticipate:fh,backInOut:dh,circInOut:hh};function cy(n){return n in Vh}function dy(n){typeof n.ease=="string"&&cy(n.ease)&&(n.ease=Vh[n.ease])}const ma=10;class fy extends Nh{constructor(r){dy(r),Mh(r),super(r),r.startTime!==void 0&&(this.startTime=r.startTime),this.options=r}updateMotionValue(r){const{motionValue:o,onUpdate:l,onComplete:u,element:f,...d}=this.options;if(!o)return;if(r!==void 0){o.set(r);return}const p=new _u({...d,autoplay:!1}),m=Math.max(ma,lt.now()-this.startTime),_=Kt(0,ma,m-ma);o.setWithVelocity(p.sample(Math.max(0,m-_)).value,p.sample(m).value,_),p.stop()}}const Hf=(n,r)=>r==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&(Ft.test(n)||n==="0")&&!n.startsWith("url("));function py(n){const r=n[0];if(n.length===1)return!0;for(let o=0;o<n.length;o++)if(n[o]!==r)return!0}function hy(n,r,o,l){const u=n[0];if(u===null)return!1;if(r==="display"||r==="visibility")return!0;const f=n[n.length-1],d=Hf(u,r),p=Hf(f,r);return!d||!p?!1:py(n)||(o==="spring"||jh(o))&&l}function Fa(n){n.duration=0,n.type="keyframes"}const my=new Set(["opacity","clipPath","filter","transform"]),_y=oh(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function gy(n){var g;const{motionValue:r,name:o,repeatDelay:l,repeatType:u,damping:f,type:d}=n;if(!(((g=r==null?void 0:r.owner)==null?void 0:g.current)instanceof HTMLElement))return!1;const{onUpdate:m,transformTemplate:_}=r.owner.getProps();return _y()&&o&&my.has(o)&&(o!=="transform"||!_)&&!m&&!l&&u!=="mirror"&&f!==0&&d!=="inertia"}const yy=40;class vy extends mu{constructor({autoplay:r=!0,delay:o=0,type:l="keyframes",repeat:u=0,repeatDelay:f=0,repeatType:d="loop",keyframes:p,name:m,motionValue:_,element:g,...y}){var T;super(),this.stop=()=>{var L,E;this._animation&&(this._animation.stop(),(L=this.stopTimeline)==null||L.call(this)),(E=this.keyframeResolver)==null||E.cancel()},this.createdAt=lt.now();const x={autoplay:r,delay:o,type:l,repeat:u,repeatDelay:f,repeatType:d,name:m,motionValue:_,element:g,...y},b=(g==null?void 0:g.KeyframeResolver)||gu;this.keyframeResolver=new b(p,(L,E,j)=>this.onKeyframesResolved(L,E,x,!j),m,_,g),(T=this.keyframeResolver)==null||T.scheduleResolve()}onKeyframesResolved(r,o,l,u){var E,j;this.keyframeResolver=void 0;const{name:f,type:d,velocity:p,delay:m,isHandoff:_,onUpdate:g}=l;this.resolvedAt=lt.now(),hy(r,f,d,p)||((on.instantAnimations||!m)&&(g==null||g(hu(r,l,o))),r[0]=r[r.length-1],Fa(l),l.repeat=0);const x={startTime:u?this.resolvedAt?this.resolvedAt-this.createdAt>yy?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:o,...l,keyframes:r},b=!_&&gy(x),T=(j=(E=x.motionValue)==null?void 0:E.owner)==null?void 0:j.current,L=b?new fy({...x,element:T}):new _u(x);L.finished.then(()=>{this.notifyFinished()}).catch(Mt),this.pendingTimeline&&(this.stopTimeline=L.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=L}get finished(){return this._animation?this.animation.finished:this._finished}then(r,o){return this.finished.finally(r).then(()=>{})}get animation(){var r;return this._animation||((r=this.keyframeResolver)==null||r.resume(),ry()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(r){this.animation.time=r}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(r){this.animation.speed=r}get startTime(){return this.animation.startTime}attachTimeline(r){return this._animation?this.stopTimeline=this.animation.attachTimeline(r):this.pendingTimeline=r,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var r;this._animation&&this.animation.cancel(),(r=this.keyframeResolver)==null||r.cancel()}}function Oh(n,r,o,l=0,u=1){const f=Array.from(n).sort((_,g)=>_.sortNodePosition(g)).indexOf(r),d=n.size,p=(d-1)*l;return typeof o=="function"?o(f,d):u===1?f*l:p-f*l}const xy=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function wy(n){const r=xy.exec(n);if(!r)return[,];const[,o,l,u]=r;return[`--${o??l}`,u]}function zh(n,r,o=1){const[l,u]=wy(n);if(!l)return;const f=window.getComputedStyle(r).getPropertyValue(l);if(f){const d=f.trim();return nh(d)?parseFloat(d):d}return uu(u)?zh(u,r,o+1):u}const Sy={type:"spring",stiffness:500,damping:25,restSpeed:10},ky=n=>({type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restSpeed:10}),by={type:"keyframes",duration:.8},Cy={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},Py=(n,{keyframes:r})=>r.length>2?by:Ar.has(n)?n.startsWith("scale")?ky(r[1]):Sy:Cy,Ty=n=>n!==null;function Ey(n,{repeat:r,repeatType:o="loop"},l){const u=n.filter(Ty),f=r&&o!=="loop"&&r%2===1?0:u.length-1;return u[f]}function Bh(n,r){if(n!=null&&n.inherit&&r){const{inherit:o,...l}=n;return{...r,...l}}return n}function yu(n,r){const o=(n==null?void 0:n[r])??(n==null?void 0:n.default)??n;return o!==n?Bh(o,n):o}function My({when:n,delay:r,delayChildren:o,staggerChildren:l,staggerDirection:u,repeat:f,repeatType:d,repeatDelay:p,from:m,elapsed:_,...g}){return!!Object.keys(g).length}const vu=(n,r,o,l={},u,f)=>d=>{const p=yu(l,n)||{},m=p.delay||l.delay||0;let{elapsed:_=0}=l;_=_-Bt(m);const g={keyframes:Array.isArray(o)?o:[null,o],ease:"easeOut",velocity:r.getVelocity(),...p,delay:-_,onUpdate:x=>{r.set(x),p.onUpdate&&p.onUpdate(x)},onComplete:()=>{d(),p.onComplete&&p.onComplete()},name:n,motionValue:r,element:f?void 0:u};My(p)||Object.assign(g,Py(n,g)),g.duration&&(g.duration=Bt(g.duration)),g.repeatDelay&&(g.repeatDelay=Bt(g.repeatDelay)),g.from!==void 0&&(g.keyframes[0]=g.from);let y=!1;if((g.type===!1||g.duration===0&&!g.repeatDelay)&&(Fa(g),g.delay===0&&(y=!0)),(on.instantAnimations||on.skipAnimations||u!=null&&u.shouldSkipAnimations)&&(y=!0,Fa(g),g.delay=0),g.allowFlatten=!p.type&&!p.ease,y&&!f&&r.get()!==void 0){const x=Ey(g.keyframes,p);if(x!==void 0){Ce.update(()=>{g.onUpdate(x),g.onComplete()});return}}return p.isSync?new _u(g):new vy(g)};function Qf(n){const r=[{},{}];return n==null||n.values.forEach((o,l)=>{r[0][l]=o.get(),r[1][l]=o.getVelocity()}),r}function xu(n,r,o,l){if(typeof r=="function"){const[u,f]=Qf(l);r=r(o!==void 0?o:n.custom,u,f)}if(typeof r=="string"&&(r=n.variants&&n.variants[r]),typeof r=="function"){const[u,f]=Qf(l);r=r(o!==void 0?o:n.custom,u,f)}return r}function Rr(n,r,o){const l=n.getProps();return xu(l,r,o!==void 0?o:l.custom,n)}const Fh=new Set(["width","height","top","left","right","bottom",...Ir]),Xf=30,Ry=n=>!isNaN(parseFloat(n));class Dy{constructor(r,o={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=l=>{var f;const u=lt.now();if(this.updatedAt!==u&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(l),this.current!==this.prev&&((f=this.events.change)==null||f.notify(this.current),this.dependents))for(const d of this.dependents)d.dirty()},this.hasAnimated=!1,this.setCurrent(r),this.owner=o.owner}setCurrent(r){this.current=r,this.updatedAt=lt.now(),this.canTrackVelocity===null&&r!==void 0&&(this.canTrackVelocity=Ry(this.current))}setPrevFrameValue(r=this.current){this.prevFrameValue=r,this.prevUpdatedAt=this.updatedAt}onChange(r){return this.on("change",r)}on(r,o){this.events[r]||(this.events[r]=new iu);const l=this.events[r].add(o);return r==="change"?()=>{l(),Ce.read(()=>{this.events.change.getSize()||this.stop()})}:l}clearListeners(){for(const r in this.events)this.events[r].clear()}attach(r,o){this.passiveEffect=r,this.stopPassiveEffect=o}set(r){this.passiveEffect?this.passiveEffect(r,this.updateAndNotify):this.updateAndNotify(r)}setWithVelocity(r,o,l){this.set(o),this.prev=void 0,this.prevFrameValue=r,this.prevUpdatedAt=this.updatedAt-l}jump(r,o=!0){this.updateAndNotify(r),this.prev=r,this.prevUpdatedAt=this.prevFrameValue=void 0,o&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var r;(r=this.events.change)==null||r.notify(this.current)}addDependent(r){this.dependents||(this.dependents=new Set),this.dependents.add(r)}removeDependent(r){this.dependents&&this.dependents.delete(r)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const r=lt.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||r-this.updatedAt>Xf)return 0;const o=Math.min(this.updatedAt-this.prevUpdatedAt,Xf);return ih(parseFloat(this.current)-parseFloat(this.prevFrameValue),o)}start(r){return this.stop(),new Promise(o=>{this.hasAnimated=!0,this.animation=r(o),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var r,o;(r=this.dependents)==null||r.clear(),(o=this.events.destroy)==null||o.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Dr(n,r){return new Dy(n,r)}const Ua=n=>Array.isArray(n);function Ly(n,r,o){n.hasValue(r)?n.getValue(r).set(o):n.addValue(r,Dr(o))}function Iy(n){return Ua(n)?n[n.length-1]||0:n}function Ay(n,r){const o=Rr(n,r);let{transitionEnd:l={},transition:u={},...f}=o||{};f={...f,...l};for(const d in f){const p=Iy(f[d]);Ly(n,d,p)}}const st=n=>!!(n&&n.getVelocity);function jy(n){return!!(st(n)&&n.add)}function Ya(n,r){const o=n.getValue("willChange");if(jy(o))return o.add(r);if(!o&&on.WillChange){const l=new on.WillChange("auto");n.addValue("willChange",l),l.add(r)}}function wu(n){return n.replace(/([A-Z])/g,r=>`-${r.toLowerCase()}`)}const Ny="framerAppearId",Uh="data-"+wu(Ny);function Yh(n){return n.props[Uh]}function Vy({protectedKeys:n,needsAnimating:r},o){const l=n.hasOwnProperty(o)&&r[o]!==!0;return r[o]=!1,l}function Wh(n,r,{delay:o=0,transitionOverride:l,type:u}={}){let{transition:f,transitionEnd:d,...p}=r;const m=n.getDefaultTransition();f=f?Bh(f,m):m;const _=f==null?void 0:f.reduceMotion;l&&(f=l);const g=[],y=u&&n.animationState&&n.animationState.getState()[u];for(const x in p){const b=n.getValue(x,n.latestValues[x]??null),T=p[x];if(T===void 0||y&&Vy(y,x))continue;const L={delay:o,...yu(f||{},x)},E=b.get();if(E!==void 0&&!b.isAnimating&&!Array.isArray(T)&&T===E&&!L.velocity)continue;let j=!1;if(window.MotionHandoffAnimation){const O=Yh(n);if(O){const F=window.MotionHandoffAnimation(O,x,Ce);F!==null&&(L.startTime=F,j=!0)}}Ya(n,x);const A=_??n.shouldReduceMotion;b.start(vu(x,b,T,A&&Fh.has(x)?{type:!1}:L,n,j));const I=b.animation;I&&g.push(I)}if(d){const x=()=>Ce.update(()=>{d&&Ay(n,d)});g.length?Promise.all(g).then(x):x()}return g}function Wa(n,r,o={}){var m;const l=Rr(n,r,o.type==="exit"?(m=n.presenceContext)==null?void 0:m.custom:void 0);let{transition:u=n.getDefaultTransition()||{}}=l||{};o.transitionOverride&&(u=o.transitionOverride);const f=l?()=>Promise.all(Wh(n,l,o)):()=>Promise.resolve(),d=n.variantChildren&&n.variantChildren.size?(_=0)=>{const{delayChildren:g=0,staggerChildren:y,staggerDirection:x}=u;return Oy(n,r,_,g,y,x,o)}:()=>Promise.resolve(),{when:p}=u;if(p){const[_,g]=p==="beforeChildren"?[f,d]:[d,f];return _().then(()=>g())}else return Promise.all([f(),d(o.delay)])}function Oy(n,r,o=0,l=0,u=0,f=1,d){const p=[];for(const m of n.variantChildren)m.notify("AnimationStart",r),p.push(Wa(m,r,{...d,delay:o+(typeof l=="function"?0:l)+Oh(n.variantChildren,m,l,u,f)}).then(()=>m.notify("AnimationComplete",r)));return Promise.all(p)}function zy(n,r,o={}){n.notify("AnimationStart",r);let l;if(Array.isArray(r)){const u=r.map(f=>Wa(n,f,o));l=Promise.all(u)}else if(typeof r=="string")l=Wa(n,r,o);else{const u=typeof r=="function"?Rr(n,r,o.custom):r;l=Promise.all(Wh(n,u,o))}return l.then(()=>{n.notify("AnimationComplete",r)})}const By={test:n=>n==="auto",parse:n=>n},Hh=n=>r=>r.test(n),Qh=[Lr,J,$t,Pn,mg,hg,By],$f=n=>Qh.find(Hh(n));function Fy(n){return typeof n=="number"?n===0:n!==null?n==="none"||n==="0"||sh(n):!0}const Uy=new Set(["brightness","contrast","saturate","opacity"]);function Yy(n){const[r,o]=n.slice(0,-1).split("(");if(r==="drop-shadow")return n;const[l]=o.match(cu)||[];if(!l)return n;const u=o.replace(l,"");let f=Uy.has(r)?1:0;return l!==o&&(f*=100),r+"("+f+u+")"}const Wy=/\b([a-z-]*)\(.*?\)/gu,Ha={...Ft,getAnimatableNone:n=>{const r=n.match(Wy);return r?r.map(Yy).join(" "):n}},Qa={...Ft,getAnimatableNone:n=>{const r=Ft.parse(n);return Ft.createTransformer(n)(r.map(l=>typeof l=="number"?0:typeof l=="object"?{...l,alpha:1}:l))}},Kf={...Lr,transform:Math.round},Hy={rotate:Pn,rotateX:Pn,rotateY:Pn,rotateZ:Pn,scale:$o,scaleX:$o,scaleY:$o,scaleZ:$o,skew:Pn,skewX:Pn,skewY:Pn,distance:J,translateX:J,translateY:J,translateZ:J,x:J,y:J,z:J,perspective:J,transformPerspective:J,opacity:Ms,originX:jf,originY:jf,originZ:J},Su={borderWidth:J,borderTopWidth:J,borderRightWidth:J,borderBottomWidth:J,borderLeftWidth:J,borderRadius:J,borderTopLeftRadius:J,borderTopRightRadius:J,borderBottomRightRadius:J,borderBottomLeftRadius:J,width:J,maxWidth:J,height:J,maxHeight:J,top:J,right:J,bottom:J,left:J,inset:J,insetBlock:J,insetBlockStart:J,insetBlockEnd:J,insetInline:J,insetInlineStart:J,insetInlineEnd:J,padding:J,paddingTop:J,paddingRight:J,paddingBottom:J,paddingLeft:J,paddingBlock:J,paddingBlockStart:J,paddingBlockEnd:J,paddingInline:J,paddingInlineStart:J,paddingInlineEnd:J,margin:J,marginTop:J,marginRight:J,marginBottom:J,marginLeft:J,marginBlock:J,marginBlockStart:J,marginBlockEnd:J,marginInline:J,marginInlineStart:J,marginInlineEnd:J,fontSize:J,backgroundPositionX:J,backgroundPositionY:J,...Hy,zIndex:Kf,fillOpacity:Ms,strokeOpacity:Ms,numOctaves:Kf},Qy={...Su,color:Fe,backgroundColor:Fe,outlineColor:Fe,fill:Fe,stroke:Fe,borderColor:Fe,borderTopColor:Fe,borderRightColor:Fe,borderBottomColor:Fe,borderLeftColor:Fe,filter:Ha,WebkitFilter:Ha,mask:Qa,WebkitMask:Qa},Xh=n=>Qy[n],Xy=new Set([Ha,Qa]);function $h(n,r){let o=Xh(n);return Xy.has(o)||(o=Ft),o.getAnimatableNone?o.getAnimatableNone(r):void 0}const $y=new Set(["auto","none","0"]);function Ky(n,r,o){let l=0,u;for(;l<n.length&&!u;){const f=n[l];typeof f=="string"&&!$y.has(f)&&Rs(f).values.length&&(u=n[l]),l++}if(u&&o)for(const f of r)n[f]=$h(o,u)}class Gy extends gu{constructor(r,o,l,u,f){super(r,o,l,u,f,!0)}readKeyframes(){const{unresolvedKeyframes:r,element:o,name:l}=this;if(!o||!o.current)return;super.readKeyframes();for(let g=0;g<r.length;g++){let y=r[g];if(typeof y=="string"&&(y=y.trim(),uu(y))){const x=zh(y,o.current);x!==void 0&&(r[g]=x),g===r.length-1&&(this.finalKeyframe=y)}}if(this.resolveNoneKeyframes(),!Fh.has(l)||r.length!==2)return;const[u,f]=r,d=$f(u),p=$f(f),m=Af(u),_=Af(f);if(m!==_&&Mn[l]){this.needsMeasurement=!0;return}if(d!==p)if(Yf(d)&&Yf(p))for(let g=0;g<r.length;g++){const y=r[g];typeof y=="string"&&(r[g]=parseFloat(y))}else Mn[l]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:r,name:o}=this,l=[];for(let u=0;u<r.length;u++)(r[u]===null||Fy(r[u]))&&l.push(u);l.length&&Ky(r,l,o)}measureInitialState(){const{element:r,unresolvedKeyframes:o,name:l}=this;if(!r||!r.current)return;l==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Mn[l](r.measureViewportBox(),window.getComputedStyle(r.current)),o[0]=this.measuredOrigin;const u=o[o.length-1];u!==void 0&&r.getValue(l,u).jump(u,!1)}measureEndState(){var p;const{element:r,name:o,unresolvedKeyframes:l}=this;if(!r||!r.current)return;const u=r.getValue(o);u&&u.jump(this.measuredOrigin,!1);const f=l.length-1,d=l[f];l[f]=Mn[o](r.measureViewportBox(),window.getComputedStyle(r.current)),d!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=d),(p=this.removedTransforms)!=null&&p.length&&this.removedTransforms.forEach(([m,_])=>{r.getValue(m).set(_)}),this.resolveNoneKeyframes()}}const Zy=new Set(["opacity","clipPath","filter","transform"]);function Kh(n,r,o){if(n==null)return[];if(n instanceof EventTarget)return[n];if(typeof n=="string"){let l=document;const u=(o==null?void 0:o[n])??l.querySelectorAll(n);return u?Array.from(u):[]}return Array.from(n).filter(l=>l!=null)}const Gh=(n,r)=>r&&typeof n=="number"?r.transform(n):n;function Xa(n){return rh(n)&&"offsetHeight"in n}const{schedule:ku}=gh(queueMicrotask,!1),zt={x:!1,y:!1};function Zh(){return zt.x||zt.y}function Jy(n){return n==="x"||n==="y"?zt[n]?null:(zt[n]=!0,()=>{zt[n]=!1}):zt.x||zt.y?null:(zt.x=zt.y=!0,()=>{zt.x=zt.y=!1})}function Jh(n,r){const o=Kh(n),l=new AbortController,u={passive:!0,...r,signal:l.signal};return[o,u,()=>l.abort()]}function qy(n){return!(n.pointerType==="touch"||Zh())}function e1(n,r,o={}){const[l,u,f]=Jh(n,o);return l.forEach(d=>{let p=!1,m=!1,_;const g=()=>{d.removeEventListener("pointerleave",T)},y=E=>{_&&(_(E),_=void 0),g()},x=E=>{p=!1,window.removeEventListener("pointerup",x),window.removeEventListener("pointercancel",x),m&&(m=!1,y(E))},b=()=>{p=!0,window.addEventListener("pointerup",x,u),window.addEventListener("pointercancel",x,u)},T=E=>{if(E.pointerType!=="touch"){if(p){m=!0;return}y(E)}},L=E=>{if(!qy(E))return;m=!1;const j=r(d,E);typeof j=="function"&&(_=j,d.addEventListener("pointerleave",T,u))};d.addEventListener("pointerenter",L,u),d.addEventListener("pointerdown",b,u)}),f}const qh=(n,r)=>r?n===r?!0:qh(n,r.parentElement):!1,bu=n=>n.pointerType==="mouse"?typeof n.button!="number"||n.button<=0:n.isPrimary!==!1,t1=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function n1(n){return t1.has(n.tagName)||n.isContentEditable===!0}const r1=new Set(["INPUT","SELECT","TEXTAREA"]);function s1(n){return r1.has(n.tagName)||n.isContentEditable===!0}const Jo=new WeakSet;function Gf(n){return r=>{r.key==="Enter"&&n(r)}}function _a(n,r){n.dispatchEvent(new PointerEvent("pointer"+r,{isPrimary:!0,bubbles:!0}))}const o1=(n,r)=>{const o=n.currentTarget;if(!o)return;const l=Gf(()=>{if(Jo.has(o))return;_a(o,"down");const u=Gf(()=>{_a(o,"up")}),f=()=>_a(o,"cancel");o.addEventListener("keyup",u,r),o.addEventListener("blur",f,r)});o.addEventListener("keydown",l,r),o.addEventListener("blur",()=>o.removeEventListener("keydown",l),r)};function Zf(n){return bu(n)&&!Zh()}const Jf=new WeakSet;function i1(n,r,o={}){const[l,u,f]=Jh(n,o),d=p=>{const m=p.currentTarget;if(!Zf(p)||Jf.has(p))return;Jo.add(m),o.stopPropagation&&Jf.add(p);const _=r(m,p),g=(b,T)=>{window.removeEventListener("pointerup",y),window.removeEventListener("pointercancel",x),Jo.has(m)&&Jo.delete(m),Zf(b)&&typeof _=="function"&&_(b,{success:T})},y=b=>{g(b,m===window||m===document||o.useGlobalTarget||qh(m,b.target))},x=b=>{g(b,!1)};window.addEventListener("pointerup",y,u),window.addEventListener("pointercancel",x,u)};return l.forEach(p=>{(o.useGlobalTarget?window:p).addEventListener("pointerdown",d,u),Xa(p)&&(p.addEventListener("focus",_=>o1(_,u)),!n1(p)&&!p.hasAttribute("tabindex")&&(p.tabIndex=0))}),f}function Cu(n){return rh(n)&&"ownerSVGElement"in n}const qo=new WeakMap;let Tn;const em=(n,r,o)=>(l,u)=>u&&u[0]?u[0][n+"Size"]:Cu(l)&&"getBBox"in l?l.getBBox()[r]:l[o],l1=em("inline","width","offsetWidth"),a1=em("block","height","offsetHeight");function u1({target:n,borderBoxSize:r}){var o;(o=qo.get(n))==null||o.forEach(l=>{l(n,{get width(){return l1(n,r)},get height(){return a1(n,r)}})})}function c1(n){n.forEach(u1)}function d1(){typeof ResizeObserver>"u"||(Tn=new ResizeObserver(c1))}function f1(n,r){Tn||d1();const o=Kh(n);return o.forEach(l=>{let u=qo.get(l);u||(u=new Set,qo.set(l,u)),u.add(r),Tn==null||Tn.observe(l)}),()=>{o.forEach(l=>{const u=qo.get(l);u==null||u.delete(r),u!=null&&u.size||Tn==null||Tn.unobserve(l)})}}const ei=new Set;let Pr;function p1(){Pr=()=>{const n={get width(){return window.innerWidth},get height(){return window.innerHeight}};ei.forEach(r=>r(n))},window.addEventListener("resize",Pr)}function h1(n){return ei.add(n),Pr||p1(),()=>{ei.delete(n),!ei.size&&typeof Pr=="function"&&(window.removeEventListener("resize",Pr),Pr=void 0)}}function qf(n,r){return typeof n=="function"?h1(n):f1(n,r)}function m1(n){return Cu(n)&&n.tagName==="svg"}const _1=[...Qh,Fe,Ft],g1=n=>_1.find(Hh(n)),ep=()=>({translate:0,scale:1,origin:0,originPoint:0}),Tr=()=>({x:ep(),y:ep()}),tp=()=>({min:0,max:0}),We=()=>({x:tp(),y:tp()}),y1=new WeakMap;function fi(n){return n!==null&&typeof n=="object"&&typeof n.start=="function"}function Ds(n){return typeof n=="string"||Array.isArray(n)}const Pu=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Tu=["initial",...Pu];function pi(n){return fi(n.animate)||Tu.some(r=>Ds(n[r]))}function tm(n){return!!(pi(n)||n.variants)}function v1(n,r,o){for(const l in r){const u=r[l],f=o[l];if(st(u))n.addValue(l,u);else if(st(f))n.addValue(l,Dr(u,{owner:n}));else if(f!==u)if(n.hasValue(l)){const d=n.getValue(l);d.liveStyle===!0?d.jump(u):d.hasAnimated||d.set(u)}else{const d=n.getStaticValue(l);n.addValue(l,Dr(d!==void 0?d:u,{owner:n}))}}for(const l in o)r[l]===void 0&&n.removeValue(l);return r}const $a={current:null},nm={current:!1},x1=typeof window<"u";function w1(){if(nm.current=!0,!!x1)if(window.matchMedia){const n=window.matchMedia("(prefers-reduced-motion)"),r=()=>$a.current=n.matches;n.addEventListener("change",r),r()}else $a.current=!1}const np=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let li={};function rm(n){li=n}function S1(){return li}class k1{scrapeMotionValuesFromProps(r,o,l){return{}}constructor({parent:r,props:o,presenceContext:l,reducedMotionConfig:u,skipAnimations:f,blockInitialAnimation:d,visualState:p},m={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=gu,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const b=lt.now();this.renderScheduledAt<b&&(this.renderScheduledAt=b,Ce.render(this.render,!1,!0))};const{latestValues:_,renderState:g}=p;this.latestValues=_,this.baseTarget={..._},this.initialValues=o.initial?{..._}:{},this.renderState=g,this.parent=r,this.props=o,this.presenceContext=l,this.depth=r?r.depth+1:0,this.reducedMotionConfig=u,this.skipAnimationsConfig=f,this.options=m,this.blockInitialAnimation=!!d,this.isControllingVariants=pi(o),this.isVariantNode=tm(o),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(r&&r.current);const{willChange:y,...x}=this.scrapeMotionValuesFromProps(o,{},this);for(const b in x){const T=x[b];_[b]!==void 0&&st(T)&&T.set(_[b])}}mount(r){var o,l;if(this.hasBeenMounted)for(const u in this.initialValues)(o=this.values.get(u))==null||o.jump(this.initialValues[u]),this.latestValues[u]=this.initialValues[u];this.current=r,y1.set(r,this),this.projection&&!this.projection.instance&&this.projection.mount(r),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((u,f)=>this.bindToMotionValue(f,u)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(nm.current||w1(),this.shouldReduceMotion=$a.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,(l=this.parent)==null||l.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){var r;this.projection&&this.projection.unmount(),Rn(this.notifyUpdate),Rn(this.render),this.valueSubscriptions.forEach(o=>o()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(r=this.parent)==null||r.removeChild(this);for(const o in this.events)this.events[o].clear();for(const o in this.features){const l=this.features[o];l&&(l.unmount(),l.isMounted=!1)}this.current=null}addChild(r){this.children.add(r),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(r)}removeChild(r){this.children.delete(r),this.enteringChildren&&this.enteringChildren.delete(r)}bindToMotionValue(r,o){if(this.valueSubscriptions.has(r)&&this.valueSubscriptions.get(r)(),o.accelerate&&Zy.has(r)&&this.current instanceof HTMLElement){const{factory:d,keyframes:p,times:m,ease:_,duration:g}=o.accelerate,y=new Nh({element:this.current,name:r,keyframes:p,times:m,ease:_,duration:Bt(g)}),x=d(y);this.valueSubscriptions.set(r,()=>{x(),y.cancel()});return}const l=Ar.has(r);l&&this.onBindTransform&&this.onBindTransform();const u=o.on("change",d=>{this.latestValues[r]=d,this.props.onUpdate&&Ce.preRender(this.notifyUpdate),l&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let f;typeof window<"u"&&window.MotionCheckAppearSync&&(f=window.MotionCheckAppearSync(this,r,o)),this.valueSubscriptions.set(r,()=>{u(),f&&f(),o.owner&&o.stop()})}sortNodePosition(r){return!this.current||!this.sortInstanceNodePosition||this.type!==r.type?0:this.sortInstanceNodePosition(this.current,r.current)}updateFeatures(){let r="animation";for(r in li){const o=li[r];if(!o)continue;const{isEnabled:l,Feature:u}=o;if(!this.features[r]&&u&&l(this.props)&&(this.features[r]=new u(this)),this.features[r]){const f=this.features[r];f.isMounted?f.update():(f.mount(),f.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):We()}getStaticValue(r){return this.latestValues[r]}setStaticValue(r,o){this.latestValues[r]=o}update(r,o){(r.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=r,this.prevPresenceContext=this.presenceContext,this.presenceContext=o;for(let l=0;l<np.length;l++){const u=np[l];this.propEventSubscriptions[u]&&(this.propEventSubscriptions[u](),delete this.propEventSubscriptions[u]);const f="on"+u,d=r[f];d&&(this.propEventSubscriptions[u]=this.on(u,d))}this.prevMotionValues=v1(this,this.scrapeMotionValuesFromProps(r,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(r){return this.props.variants?this.props.variants[r]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(r){const o=this.getClosestVariantNode();if(o)return o.variantChildren&&o.variantChildren.add(r),()=>o.variantChildren.delete(r)}addValue(r,o){const l=this.values.get(r);o!==l&&(l&&this.removeValue(r),this.bindToMotionValue(r,o),this.values.set(r,o),this.latestValues[r]=o.get())}removeValue(r){this.values.delete(r);const o=this.valueSubscriptions.get(r);o&&(o(),this.valueSubscriptions.delete(r)),delete this.latestValues[r],this.removeValueFromRenderState(r,this.renderState)}hasValue(r){return this.values.has(r)}getValue(r,o){if(this.props.values&&this.props.values[r])return this.props.values[r];let l=this.values.get(r);return l===void 0&&o!==void 0&&(l=Dr(o===null?void 0:o,{owner:this}),this.addValue(r,l)),l}readValue(r,o){let l=this.latestValues[r]!==void 0||!this.current?this.latestValues[r]:this.getBaseTargetFromProps(this.props,r)??this.readValueFromInstance(this.current,r,this.options);return l!=null&&(typeof l=="string"&&(nh(l)||sh(l))?l=parseFloat(l):!g1(l)&&Ft.test(o)&&(l=$h(r,o)),this.setBaseTarget(r,st(l)?l.get():l)),st(l)?l.get():l}setBaseTarget(r,o){this.baseTarget[r]=o}getBaseTarget(r){var f;const{initial:o}=this.props;let l;if(typeof o=="string"||typeof o=="object"){const d=xu(this.props,o,(f=this.presenceContext)==null?void 0:f.custom);d&&(l=d[r])}if(o&&l!==void 0)return l;const u=this.getBaseTargetFromProps(this.props,r);return u!==void 0&&!st(u)?u:this.initialValues[r]!==void 0&&l===void 0?void 0:this.baseTarget[r]}on(r,o){return this.events[r]||(this.events[r]=new iu),this.events[r].add(o)}notify(r,...o){this.events[r]&&this.events[r].notify(...o)}scheduleRenderMicrotask(){ku.render(this.render)}}class sm extends k1{constructor(){super(...arguments),this.KeyframeResolver=Gy}sortInstanceNodePosition(r,o){return r.compareDocumentPosition(o)&2?1:-1}getBaseTargetFromProps(r,o){const l=r.style;return l?l[o]:void 0}removeValueFromRenderState(r,{vars:o,style:l}){delete o[r],delete l[r]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:r}=this.props;st(r)&&(this.childSubscription=r.on("change",o=>{this.current&&(this.current.textContent=`${o}`)}))}}class Dn{constructor(r){this.isMounted=!1,this.node=r}update(){}}function om({top:n,left:r,right:o,bottom:l}){return{x:{min:r,max:o},y:{min:n,max:l}}}function b1({x:n,y:r}){return{top:r.min,right:n.max,bottom:r.max,left:n.min}}function C1(n,r){if(!r)return n;const o=r({x:n.left,y:n.top}),l=r({x:n.right,y:n.bottom});return{top:o.y,left:o.x,bottom:l.y,right:l.x}}function ga(n){return n===void 0||n===1}function Ka({scale:n,scaleX:r,scaleY:o}){return!ga(n)||!ga(r)||!ga(o)}function Xn(n){return Ka(n)||im(n)||n.z||n.rotate||n.rotateX||n.rotateY||n.skewX||n.skewY}function im(n){return rp(n.x)||rp(n.y)}function rp(n){return n&&n!=="0%"}function ai(n,r,o){const l=n-o,u=r*l;return o+u}function sp(n,r,o,l,u){return u!==void 0&&(n=ai(n,u,l)),ai(n,o,l)+r}function Ga(n,r=0,o=1,l,u){n.min=sp(n.min,r,o,l,u),n.max=sp(n.max,r,o,l,u)}function lm(n,{x:r,y:o}){Ga(n.x,r.translate,r.scale,r.originPoint),Ga(n.y,o.translate,o.scale,o.originPoint)}const op=.999999999999,ip=1.0000000000001;function P1(n,r,o,l=!1){const u=o.length;if(!u)return;r.x=r.y=1;let f,d;for(let p=0;p<u;p++){f=o[p],d=f.projectionDelta;const{visualElement:m}=f.options;m&&m.props.style&&m.props.style.display==="contents"||(l&&f.options.layoutScroll&&f.scroll&&f!==f.root&&Mr(n,{x:-f.scroll.offset.x,y:-f.scroll.offset.y}),d&&(r.x*=d.x.scale,r.y*=d.y.scale,lm(n,d)),l&&Xn(f.latestValues)&&Mr(n,f.latestValues))}r.x<ip&&r.x>op&&(r.x=1),r.y<ip&&r.y>op&&(r.y=1)}function Er(n,r){n.min=n.min+r,n.max=n.max+r}function lp(n,r,o,l,u=.5){const f=je(n.min,n.max,u);Ga(n,r,o,f,l)}function ap(n,r){return typeof n=="string"?parseFloat(n)/100*(r.max-r.min):n}function Mr(n,r){lp(n.x,ap(r.x,n.x),r.scaleX,r.scale,r.originX),lp(n.y,ap(r.y,n.y),r.scaleY,r.scale,r.originY)}function am(n,r){return om(C1(n.getBoundingClientRect(),r))}function T1(n,r,o){const l=am(n,o),{scroll:u}=r;return u&&(Er(l.x,u.offset.x),Er(l.y,u.offset.y)),l}const E1={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},M1=Ir.length;function R1(n,r,o){let l="",u=!0;for(let f=0;f<M1;f++){const d=Ir[f],p=n[d];if(p===void 0)continue;let m=!0;if(typeof p=="number")m=p===(d.startsWith("scale")?1:0);else{const _=parseFloat(p);m=d.startsWith("scale")?_===1:_===0}if(!m||o){const _=Gh(p,Su[d]);if(!m){u=!1;const g=E1[d]||d;l+=`${g}(${_}) `}o&&(r[d]=_)}}return l=l.trim(),o?l=o(r,u?"":l):u&&(l="none"),l}function Eu(n,r,o){const{style:l,vars:u,transformOrigin:f}=n;let d=!1,p=!1;for(const m in r){const _=r[m];if(Ar.has(m)){d=!0;continue}else if(vh(m)){u[m]=_;continue}else{const g=Gh(_,Su[m]);m.startsWith("origin")?(p=!0,f[m]=g):l[m]=g}}if(r.transform||(d||o?l.transform=R1(r,n.transform,o):l.transform&&(l.transform="none")),p){const{originX:m="50%",originY:_="50%",originZ:g=0}=f;l.transformOrigin=`${m} ${_} ${g}`}}function um(n,{style:r,vars:o},l,u){const f=n.style;let d;for(d in r)f[d]=r[d];u==null||u.applyProjectionStyles(f,l);for(d in o)f.setProperty(d,o[d])}function up(n,r){return r.max===r.min?0:n/(r.max-r.min)*100}const ws={correct:(n,r)=>{if(!r.target)return n;if(typeof n=="string")if(J.test(n))n=parseFloat(n);else return n;const o=up(n,r.target.x),l=up(n,r.target.y);return`${o}% ${l}%`}},D1={correct:(n,{treeScale:r,projectionDelta:o})=>{const l=n,u=Ft.parse(n);if(u.length>5)return l;const f=Ft.createTransformer(n),d=typeof u[0]!="number"?1:0,p=o.x.scale*r.x,m=o.y.scale*r.y;u[0+d]/=p,u[1+d]/=m;const _=je(p,m,.5);return typeof u[2+d]=="number"&&(u[2+d]/=_),typeof u[3+d]=="number"&&(u[3+d]/=_),f(u)}},Za={borderRadius:{...ws,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:ws,borderTopRightRadius:ws,borderBottomLeftRadius:ws,borderBottomRightRadius:ws,boxShadow:D1};function cm(n,{layout:r,layoutId:o}){return Ar.has(n)||n.startsWith("origin")||(r||o!==void 0)&&(!!Za[n]||n==="opacity")}function Mu(n,r,o){var d;const l=n.style,u=r==null?void 0:r.style,f={};if(!l)return f;for(const p in l)(st(l[p])||u&&st(u[p])||cm(p,n)||((d=o==null?void 0:o.getValue(p))==null?void 0:d.liveStyle)!==void 0)&&(f[p]=l[p]);return f}function L1(n){return window.getComputedStyle(n)}class I1 extends sm{constructor(){super(...arguments),this.type="html",this.renderInstance=um}readValueFromInstance(r,o){var l;if(Ar.has(o))return(l=this.projection)!=null&&l.isProjecting?Na(o):Jg(r,o);{const u=L1(r),f=(vh(o)?u.getPropertyValue(o):u[o])||0;return typeof f=="string"?f.trim():f}}measureInstanceViewportBox(r,{transformPagePoint:o}){return am(r,o)}build(r,o,l){Eu(r,o,l.transformTemplate)}scrapeMotionValuesFromProps(r,o,l){return Mu(r,o,l)}}const A1={offset:"stroke-dashoffset",array:"stroke-dasharray"},j1={offset:"strokeDashoffset",array:"strokeDasharray"};function N1(n,r,o=1,l=0,u=!0){n.pathLength=1;const f=u?A1:j1;n[f.offset]=`${-l}`,n[f.array]=`${r} ${o}`}const V1=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function dm(n,{attrX:r,attrY:o,attrScale:l,pathLength:u,pathSpacing:f=1,pathOffset:d=0,...p},m,_,g){if(Eu(n,p,_),m){n.style.viewBox&&(n.attrs.viewBox=n.style.viewBox);return}n.attrs=n.style,n.style={};const{attrs:y,style:x}=n;y.transform&&(x.transform=y.transform,delete y.transform),(x.transform||y.transformOrigin)&&(x.transformOrigin=y.transformOrigin??"50% 50%",delete y.transformOrigin),x.transform&&(x.transformBox=(g==null?void 0:g.transformBox)??"fill-box",delete y.transformBox);for(const b of V1)y[b]!==void 0&&(x[b]=y[b],delete y[b]);r!==void 0&&(y.x=r),o!==void 0&&(y.y=o),l!==void 0&&(y.scale=l),u!==void 0&&N1(y,u,f,d,!1)}const fm=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),pm=n=>typeof n=="string"&&n.toLowerCase()==="svg";function O1(n,r,o,l){um(n,r,void 0,l);for(const u in r.attrs)n.setAttribute(fm.has(u)?u:wu(u),r.attrs[u])}function hm(n,r,o){const l=Mu(n,r,o);for(const u in n)if(st(n[u])||st(r[u])){const f=Ir.indexOf(u)!==-1?"attr"+u.charAt(0).toUpperCase()+u.substring(1):u;l[f]=n[u]}return l}class z1 extends sm{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=We}getBaseTargetFromProps(r,o){return r[o]}readValueFromInstance(r,o){if(Ar.has(o)){const l=Xh(o);return l&&l.default||0}return o=fm.has(o)?o:wu(o),r.getAttribute(o)}scrapeMotionValuesFromProps(r,o,l){return hm(r,o,l)}build(r,o,l){dm(r,o,this.isSVGTag,l.transformTemplate,l.style)}renderInstance(r,o,l,u){O1(r,o,l,u)}mount(r){this.isSVGTag=pm(r.tagName),super.mount(r)}}const B1=Tu.length;function mm(n){if(!n)return;if(!n.isControllingVariants){const o=n.parent?mm(n.parent)||{}:{};return n.props.initial!==void 0&&(o.initial=n.props.initial),o}const r={};for(let o=0;o<B1;o++){const l=Tu[o],u=n.props[l];(Ds(u)||u===!1)&&(r[l]=u)}return r}function _m(n,r){if(!Array.isArray(r))return!1;const o=r.length;if(o!==n.length)return!1;for(let l=0;l<o;l++)if(r[l]!==n[l])return!1;return!0}const F1=[...Pu].reverse(),U1=Pu.length;function Y1(n){return r=>Promise.all(r.map(({animation:o,options:l})=>zy(n,o,l)))}function W1(n){let r=Y1(n),o=cp(),l=!0,u=!1;const f=_=>(g,y)=>{var b;const x=Rr(n,y,_==="exit"?(b=n.presenceContext)==null?void 0:b.custom:void 0);if(x){const{transition:T,transitionEnd:L,...E}=x;g={...g,...E,...L}}return g};function d(_){r=_(n)}function p(_){const{props:g}=n,y=mm(n.parent)||{},x=[],b=new Set;let T={},L=1/0;for(let j=0;j<U1;j++){const A=F1[j],I=o[A],O=g[A]!==void 0?g[A]:y[A],F=Ds(O),K=A===_?I.isActive:null;K===!1&&(L=j);let te=O===y[A]&&O!==g[A]&&F;if(te&&(l||u)&&n.manuallyAnimateOnMount&&(te=!1),I.protectedKeys={...T},!I.isActive&&K===null||!O&&!I.prevProp||fi(O)||typeof O=="boolean")continue;if(A==="exit"&&I.isActive&&K!==!0){I.prevResolvedValues&&(T={...T,...I.prevResolvedValues});continue}const Q=H1(I.prevProp,O);let $=Q||A===_&&I.isActive&&!te&&F||j>L&&F,oe=!1;const ae=Array.isArray(O)?O:[O];let fe=ae.reduce(f(A),{});K===!1&&(fe={});const{prevResolvedValues:ye={}}=I,ke={...ye,...fe},le=B=>{$=!0,b.has(B)&&(oe=!0,b.delete(B)),I.needsAnimating[B]=!0;const H=n.getValue(B);H&&(H.liveStyle=!1)};for(const B in ke){const H=fe[B],Y=ye[B];if(T.hasOwnProperty(B))continue;let k=!1;Ua(H)&&Ua(Y)?k=!_m(H,Y):k=H!==Y,k?H!=null?le(B):b.add(B):H!==void 0&&b.has(B)?le(B):I.protectedKeys[B]=!0}I.prevProp=O,I.prevResolvedValues=fe,I.isActive&&(T={...T,...fe}),(l||u)&&n.blockInitialAnimation&&($=!1);const Te=te&&Q;$&&(!Te||oe)&&x.push(...ae.map(B=>{const H={type:A};if(typeof B=="string"&&(l||u)&&!Te&&n.manuallyAnimateOnMount&&n.parent){const{parent:Y}=n,k=Rr(Y,B);if(Y.enteringChildren&&k){const{delayChildren:N}=k.transition||{};H.delay=Oh(Y.enteringChildren,n,N)}}return{animation:B,options:H}}))}if(b.size){const j={};if(typeof g.initial!="boolean"){const A=Rr(n,Array.isArray(g.initial)?g.initial[0]:g.initial);A&&A.transition&&(j.transition=A.transition)}b.forEach(A=>{const I=n.getBaseTarget(A),O=n.getValue(A);O&&(O.liveStyle=!0),j[A]=I??null}),x.push({animation:j})}let E=!!x.length;return l&&(g.initial===!1||g.initial===g.animate)&&!n.manuallyAnimateOnMount&&(E=!1),l=!1,u=!1,E?r(x):Promise.resolve()}function m(_,g){var x;if(o[_].isActive===g)return Promise.resolve();(x=n.variantChildren)==null||x.forEach(b=>{var T;return(T=b.animationState)==null?void 0:T.setActive(_,g)}),o[_].isActive=g;const y=p(_);for(const b in o)o[b].protectedKeys={};return y}return{animateChanges:p,setActive:m,setAnimateFunction:d,getState:()=>o,reset:()=>{o=cp(),u=!0}}}function H1(n,r){return typeof r=="string"?r!==n:Array.isArray(r)?!_m(r,n):!1}function Hn(n=!1){return{isActive:n,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function cp(){return{animate:Hn(!0),whileInView:Hn(),whileHover:Hn(),whileTap:Hn(),whileDrag:Hn(),whileFocus:Hn(),exit:Hn()}}function dp(n,r){n.min=r.min,n.max=r.max}function Ot(n,r){dp(n.x,r.x),dp(n.y,r.y)}function fp(n,r){n.translate=r.translate,n.scale=r.scale,n.originPoint=r.originPoint,n.origin=r.origin}const gm=1e-4,Q1=1-gm,X1=1+gm,ym=.01,$1=0-ym,K1=0+ym;function at(n){return n.max-n.min}function G1(n,r,o){return Math.abs(n-r)<=o}function pp(n,r,o,l=.5){n.origin=l,n.originPoint=je(r.min,r.max,n.origin),n.scale=at(o)/at(r),n.translate=je(o.min,o.max,n.origin)-n.originPoint,(n.scale>=Q1&&n.scale<=X1||isNaN(n.scale))&&(n.scale=1),(n.translate>=$1&&n.translate<=K1||isNaN(n.translate))&&(n.translate=0)}function Cs(n,r,o,l){pp(n.x,r.x,o.x,l?l.originX:void 0),pp(n.y,r.y,o.y,l?l.originY:void 0)}function hp(n,r,o){n.min=o.min+r.min,n.max=n.min+at(r)}function Z1(n,r,o){hp(n.x,r.x,o.x),hp(n.y,r.y,o.y)}function mp(n,r,o){n.min=r.min-o.min,n.max=n.min+at(r)}function ui(n,r,o){mp(n.x,r.x,o.x),mp(n.y,r.y,o.y)}function _p(n,r,o,l,u){return n-=r,n=ai(n,1/o,l),u!==void 0&&(n=ai(n,1/u,l)),n}function J1(n,r=0,o=1,l=.5,u,f=n,d=n){if($t.test(r)&&(r=parseFloat(r),r=je(d.min,d.max,r/100)-d.min),typeof r!="number")return;let p=je(f.min,f.max,l);n===f&&(p-=r),n.min=_p(n.min,r,o,p,u),n.max=_p(n.max,r,o,p,u)}function gp(n,r,[o,l,u],f,d){J1(n,r[o],r[l],r[u],r.scale,f,d)}const q1=["x","scaleX","originX"],ev=["y","scaleY","originY"];function yp(n,r,o,l){gp(n.x,r,q1,o?o.x:void 0,l?l.x:void 0),gp(n.y,r,ev,o?o.y:void 0,l?l.y:void 0)}function vp(n){return n.translate===0&&n.scale===1}function vm(n){return vp(n.x)&&vp(n.y)}function xp(n,r){return n.min===r.min&&n.max===r.max}function tv(n,r){return xp(n.x,r.x)&&xp(n.y,r.y)}function wp(n,r){return Math.round(n.min)===Math.round(r.min)&&Math.round(n.max)===Math.round(r.max)}function xm(n,r){return wp(n.x,r.x)&&wp(n.y,r.y)}function Sp(n){return at(n.x)/at(n.y)}function kp(n,r){return n.translate===r.translate&&n.scale===r.scale&&n.originPoint===r.originPoint}function Xt(n){return[n("x"),n("y")]}function nv(n,r,o){let l="";const u=n.x.translate/r.x,f=n.y.translate/r.y,d=(o==null?void 0:o.z)||0;if((u||f||d)&&(l=`translate3d(${u}px, ${f}px, ${d}px) `),(r.x!==1||r.y!==1)&&(l+=`scale(${1/r.x}, ${1/r.y}) `),o){const{transformPerspective:_,rotate:g,rotateX:y,rotateY:x,skewX:b,skewY:T}=o;_&&(l=`perspective(${_}px) ${l}`),g&&(l+=`rotate(${g}deg) `),y&&(l+=`rotateX(${y}deg) `),x&&(l+=`rotateY(${x}deg) `),b&&(l+=`skewX(${b}deg) `),T&&(l+=`skewY(${T}deg) `)}const p=n.x.scale*r.x,m=n.y.scale*r.y;return(p!==1||m!==1)&&(l+=`scale(${p}, ${m})`),l||"none"}const wm=["TopLeft","TopRight","BottomLeft","BottomRight"],rv=wm.length,bp=n=>typeof n=="string"?parseFloat(n):n,Cp=n=>typeof n=="number"||J.test(n);function sv(n,r,o,l,u,f){u?(n.opacity=je(0,o.opacity??1,ov(l)),n.opacityExit=je(r.opacity??1,0,iv(l))):f&&(n.opacity=je(r.opacity??1,o.opacity??1,l));for(let d=0;d<rv;d++){const p=`border${wm[d]}Radius`;let m=Pp(r,p),_=Pp(o,p);if(m===void 0&&_===void 0)continue;m||(m=0),_||(_=0),m===0||_===0||Cp(m)===Cp(_)?(n[p]=Math.max(je(bp(m),bp(_),l),0),($t.test(_)||$t.test(m))&&(n[p]+="%")):n[p]=_}(r.rotate||o.rotate)&&(n.rotate=je(r.rotate||0,o.rotate||0,l))}function Pp(n,r){return n[r]!==void 0?n[r]:n.borderRadius}const ov=Sm(0,.5,ph),iv=Sm(.5,.95,Mt);function Sm(n,r,o){return l=>l<n?0:l>r?1:o(Es(n,r,l))}function lv(n,r,o){const l=st(n)?n:Dr(n);return l.start(vu("",l,r,o)),l.animation}function Ls(n,r,o,l={passive:!0}){return n.addEventListener(r,o,l),()=>n.removeEventListener(r,o)}const av=(n,r)=>n.depth-r.depth;class uv{constructor(){this.children=[],this.isDirty=!1}add(r){su(this.children,r),this.isDirty=!0}remove(r){ri(this.children,r),this.isDirty=!0}forEach(r){this.isDirty&&this.children.sort(av),this.isDirty=!1,this.children.forEach(r)}}function cv(n,r){const o=lt.now(),l=({timestamp:u})=>{const f=u-o;f>=r&&(Rn(l),n(f-r))};return Ce.setup(l,!0),()=>Rn(l)}function ti(n){return st(n)?n.get():n}class dv{constructor(){this.members=[]}add(r){su(this.members,r);for(let o=this.members.length-1;o>=0;o--){const l=this.members[o];if(l===r||l===this.lead||l===this.prevLead)continue;const u=l.instance;(!u||u.isConnected===!1)&&!l.snapshot&&(ri(this.members,l),l.unmount())}r.scheduleRender()}remove(r){if(ri(this.members,r),r===this.prevLead&&(this.prevLead=void 0),r===this.lead){const o=this.members[this.members.length-1];o&&this.promote(o)}}relegate(r){var o;for(let l=this.members.indexOf(r)-1;l>=0;l--){const u=this.members[l];if(u.isPresent!==!1&&((o=u.instance)==null?void 0:o.isConnected)!==!1)return this.promote(u),!0}return!1}promote(r,o){var u;const l=this.lead;if(r!==l&&(this.prevLead=l,this.lead=r,r.show(),l)){l.updateSnapshot(),r.scheduleRender();const{layoutDependency:f}=l.options,{layoutDependency:d}=r.options;(f===void 0||f!==d)&&(r.resumeFrom=l,o&&(l.preserveOpacity=!0),l.snapshot&&(r.snapshot=l.snapshot,r.snapshot.latestValues=l.animationValues||l.latestValues),(u=r.root)!=null&&u.isUpdating&&(r.isLayoutDirty=!0)),r.options.crossfade===!1&&l.hide()}}exitAnimationComplete(){this.members.forEach(r=>{var o,l,u,f,d;(l=(o=r.options).onExitComplete)==null||l.call(o),(d=(u=r.resumingFrom)==null?void 0:(f=u.options).onExitComplete)==null||d.call(f)})}scheduleRender(){this.members.forEach(r=>r.instance&&r.scheduleRender(!1))}removeLeadSnapshot(){var r;(r=this.lead)!=null&&r.snapshot&&(this.lead.snapshot=void 0)}}const ni={hasAnimatedSinceResize:!0,hasEverUpdated:!1},ya=["","X","Y","Z"],fv=1e3;let pv=0;function va(n,r,o,l){const{latestValues:u}=r;u[n]&&(o[n]=u[n],r.setStaticValue(n,0),l&&(l[n]=0))}function km(n){if(n.hasCheckedOptimisedAppear=!0,n.root===n)return;const{visualElement:r}=n.options;if(!r)return;const o=Yh(r);if(window.MotionHasOptimisedAnimation(o,"transform")){const{layout:u,layoutId:f}=n.options;window.MotionCancelOptimisedAnimation(o,"transform",Ce,!(u||f))}const{parent:l}=n;l&&!l.hasCheckedOptimisedAppear&&km(l)}function bm({attachResizeListener:n,defaultParent:r,measureScroll:o,checkIsScrollRoot:l,resetTransform:u}){return class{constructor(d={},p=r==null?void 0:r()){this.id=pv++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(_v),this.nodes.forEach(xv),this.nodes.forEach(wv),this.nodes.forEach(gv)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=d,this.root=p?p.root||p:this,this.path=p?[...p.path,p]:[],this.parent=p,this.depth=p?p.depth+1:0;for(let m=0;m<this.path.length;m++)this.path[m].shouldResetTransform=!0;this.root===this&&(this.nodes=new uv)}addEventListener(d,p){return this.eventHandlers.has(d)||this.eventHandlers.set(d,new iu),this.eventHandlers.get(d).add(p)}notifyListeners(d,...p){const m=this.eventHandlers.get(d);m&&m.notify(...p)}hasListeners(d){return this.eventHandlers.has(d)}mount(d){if(this.instance)return;this.isSVG=Cu(d)&&!m1(d),this.instance=d;const{layoutId:p,layout:m,visualElement:_}=this.options;if(_&&!_.current&&_.mount(d),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(m||p)&&(this.isLayoutDirty=!0),n){let g,y=0;const x=()=>this.root.updateBlockedByResize=!1;Ce.read(()=>{y=window.innerWidth}),n(d,()=>{const b=window.innerWidth;b!==y&&(y=b,this.root.updateBlockedByResize=!0,g&&g(),g=cv(x,250),ni.hasAnimatedSinceResize&&(ni.hasAnimatedSinceResize=!1,this.nodes.forEach(Mp)))})}p&&this.root.registerSharedNode(p,this),this.options.animate!==!1&&_&&(p||m)&&this.addEventListener("didUpdate",({delta:g,hasLayoutChanged:y,hasRelativeLayoutChanged:x,layout:b})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const T=this.options.transition||_.getDefaultTransition()||Pv,{onLayoutAnimationStart:L,onLayoutAnimationComplete:E}=_.getProps(),j=!this.targetLayout||!xm(this.targetLayout,b),A=!y&&x;if(this.options.layoutRoot||this.resumeFrom||A||y&&(j||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const I={...yu(T,"layout"),onPlay:L,onComplete:E};(_.shouldReduceMotion||this.options.layoutRoot)&&(I.delay=0,I.type=!1),this.startAnimation(I),this.setAnimationOrigin(g,A)}else y||Mp(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=b})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const d=this.getStack();d&&d.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Rn(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(Sv),this.animationId++)}getTransformTemplate(){const{visualElement:d}=this.options;return d&&d.getProps().transformTemplate}willUpdate(d=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&km(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let g=0;g<this.path.length;g++){const y=this.path[g];y.shouldResetTransform=!0,y.updateScroll("snapshot"),y.options.layoutRoot&&y.willUpdate(!1)}const{layoutId:p,layout:m}=this.options;if(p===void 0&&!m)return;const _=this.getTransformTemplate();this.prevTransformTemplateValue=_?_(this.latestValues,""):void 0,this.updateSnapshot(),d&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Tp);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(Ep);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(vv),this.nodes.forEach(hv),this.nodes.forEach(mv)):this.nodes.forEach(Ep),this.clearAllSnapshots();const p=lt.now();Ze.delta=Kt(0,1e3/60,p-Ze.timestamp),Ze.timestamp=p,Ze.isProcessing=!0,ca.update.process(Ze),ca.preRender.process(Ze),ca.render.process(Ze),Ze.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,ku.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(yv),this.sharedNodes.forEach(kv)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Ce.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Ce.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!at(this.snapshot.measuredBox.x)&&!at(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let m=0;m<this.path.length;m++)this.path[m].updateScroll();const d=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected=We(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:p}=this.options;p&&p.notify("LayoutMeasure",this.layout.layoutBox,d?d.layoutBox:void 0)}updateScroll(d="measure"){let p=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===d&&(p=!1),p&&this.instance){const m=l(this.instance);this.scroll={animationId:this.root.animationId,phase:d,isRoot:m,offset:o(this.instance),wasRoot:this.scroll?this.scroll.isRoot:m}}}resetTransform(){if(!u)return;const d=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,p=this.projectionDelta&&!vm(this.projectionDelta),m=this.getTransformTemplate(),_=m?m(this.latestValues,""):void 0,g=_!==this.prevTransformTemplateValue;d&&this.instance&&(p||Xn(this.latestValues)||g)&&(u(this.instance,_),this.shouldResetTransform=!1,this.scheduleRender())}measure(d=!0){const p=this.measurePageBox();let m=this.removeElementScroll(p);return d&&(m=this.removeTransform(m)),Tv(m),{animationId:this.root.animationId,measuredBox:p,layoutBox:m,latestValues:{},source:this.id}}measurePageBox(){var _;const{visualElement:d}=this.options;if(!d)return We();const p=d.measureViewportBox();if(!(((_=this.scroll)==null?void 0:_.wasRoot)||this.path.some(Ev))){const{scroll:g}=this.root;g&&(Er(p.x,g.offset.x),Er(p.y,g.offset.y))}return p}removeElementScroll(d){var m;const p=We();if(Ot(p,d),(m=this.scroll)!=null&&m.wasRoot)return p;for(let _=0;_<this.path.length;_++){const g=this.path[_],{scroll:y,options:x}=g;g!==this.root&&y&&x.layoutScroll&&(y.wasRoot&&Ot(p,d),Er(p.x,y.offset.x),Er(p.y,y.offset.y))}return p}applyTransform(d,p=!1){const m=We();Ot(m,d);for(let _=0;_<this.path.length;_++){const g=this.path[_];!p&&g.options.layoutScroll&&g.scroll&&g!==g.root&&Mr(m,{x:-g.scroll.offset.x,y:-g.scroll.offset.y}),Xn(g.latestValues)&&Mr(m,g.latestValues)}return Xn(this.latestValues)&&Mr(m,this.latestValues),m}removeTransform(d){const p=We();Ot(p,d);for(let m=0;m<this.path.length;m++){const _=this.path[m];if(!_.instance||!Xn(_.latestValues))continue;Ka(_.latestValues)&&_.updateSnapshot();const g=We(),y=_.measurePageBox();Ot(g,y),yp(p,_.latestValues,_.snapshot?_.snapshot.layoutBox:void 0,g)}return Xn(this.latestValues)&&yp(p,this.latestValues),p}setTargetDelta(d){this.targetDelta=d,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(d){this.options={...this.options,...d,crossfade:d.crossfade!==void 0?d.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Ze.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(d=!1){var b;const p=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=p.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=p.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=p.isSharedProjectionDirty);const m=!!this.resumingFrom||this!==p;if(!(d||m&&this.isSharedProjectionDirty||this.isProjectionDirty||(b=this.parent)!=null&&b.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:g,layoutId:y}=this.options;if(!this.layout||!(g||y))return;this.resolvedRelativeTargetAt=Ze.timestamp;const x=this.getClosestProjectingParent();x&&this.linkedParentVersion!==x.layoutVersion&&!x.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(x&&x.layout?this.createRelativeTarget(x,this.layout.layoutBox,x.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=We(),this.targetWithTransforms=We()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),Z1(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Ot(this.target,this.layout.layoutBox),lm(this.target,this.targetDelta)):Ot(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,x&&!!x.resumingFrom==!!this.resumingFrom&&!x.options.layoutScroll&&x.target&&this.animationProgress!==1?this.createRelativeTarget(x,this.target,x.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||Ka(this.parent.latestValues)||im(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(d,p,m){this.relativeParent=d,this.linkedParentVersion=d.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=We(),this.relativeTargetOrigin=We(),ui(this.relativeTargetOrigin,p,m),Ot(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var T;const d=this.getLead(),p=!!this.resumingFrom||this!==d;let m=!0;if((this.isProjectionDirty||(T=this.parent)!=null&&T.isProjectionDirty)&&(m=!1),p&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(m=!1),this.resolvedRelativeTargetAt===Ze.timestamp&&(m=!1),m)return;const{layout:_,layoutId:g}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(_||g))return;Ot(this.layoutCorrected,this.layout.layoutBox);const y=this.treeScale.x,x=this.treeScale.y;P1(this.layoutCorrected,this.treeScale,this.path,p),d.layout&&!d.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(d.target=d.layout.layoutBox,d.targetWithTransforms=We());const{target:b}=d;if(!b){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(fp(this.prevProjectionDelta.x,this.projectionDelta.x),fp(this.prevProjectionDelta.y,this.projectionDelta.y)),Cs(this.projectionDelta,this.layoutCorrected,b,this.latestValues),(this.treeScale.x!==y||this.treeScale.y!==x||!kp(this.projectionDelta.x,this.prevProjectionDelta.x)||!kp(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",b))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(d=!0){var p;if((p=this.options.visualElement)==null||p.scheduleRender(),d){const m=this.getStack();m&&m.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Tr(),this.projectionDelta=Tr(),this.projectionDeltaWithTransform=Tr()}setAnimationOrigin(d,p=!1){const m=this.snapshot,_=m?m.latestValues:{},g={...this.latestValues},y=Tr();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!p;const x=We(),b=m?m.source:void 0,T=this.layout?this.layout.source:void 0,L=b!==T,E=this.getStack(),j=!E||E.members.length<=1,A=!!(L&&!j&&this.options.crossfade===!0&&!this.path.some(Cv));this.animationProgress=0;let I;this.mixTargetDelta=O=>{const F=O/1e3;Rp(y.x,d.x,F),Rp(y.y,d.y,F),this.setTargetDelta(y),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(ui(x,this.layout.layoutBox,this.relativeParent.layout.layoutBox),bv(this.relativeTarget,this.relativeTargetOrigin,x,F),I&&tv(this.relativeTarget,I)&&(this.isProjectionDirty=!1),I||(I=We()),Ot(I,this.relativeTarget)),L&&(this.animationValues=g,sv(g,_,this.latestValues,F,A,j)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=F},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(d){var p,m,_;this.notifyListeners("animationStart"),(p=this.currentAnimation)==null||p.stop(),(_=(m=this.resumingFrom)==null?void 0:m.currentAnimation)==null||_.stop(),this.pendingAnimation&&(Rn(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Ce.update(()=>{ni.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=Dr(0)),this.motionValue.jump(0,!1),this.currentAnimation=lv(this.motionValue,[0,1e3],{...d,velocity:0,isSync:!0,onUpdate:g=>{this.mixTargetDelta(g),d.onUpdate&&d.onUpdate(g)},onStop:()=>{},onComplete:()=>{d.onComplete&&d.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const d=this.getStack();d&&d.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(fv),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const d=this.getLead();let{targetWithTransforms:p,target:m,layout:_,latestValues:g}=d;if(!(!p||!m||!_)){if(this!==d&&this.layout&&_&&Cm(this.options.animationType,this.layout.layoutBox,_.layoutBox)){m=this.target||We();const y=at(this.layout.layoutBox.x);m.x.min=d.target.x.min,m.x.max=m.x.min+y;const x=at(this.layout.layoutBox.y);m.y.min=d.target.y.min,m.y.max=m.y.min+x}Ot(p,m),Mr(p,g),Cs(this.projectionDeltaWithTransform,this.layoutCorrected,p,g)}}registerSharedNode(d,p){this.sharedNodes.has(d)||this.sharedNodes.set(d,new dv),this.sharedNodes.get(d).add(p);const _=p.options.initialPromotionConfig;p.promote({transition:_?_.transition:void 0,preserveFollowOpacity:_&&_.shouldPreserveFollowOpacity?_.shouldPreserveFollowOpacity(p):void 0})}isLead(){const d=this.getStack();return d?d.lead===this:!0}getLead(){var p;const{layoutId:d}=this.options;return d?((p=this.getStack())==null?void 0:p.lead)||this:this}getPrevLead(){var p;const{layoutId:d}=this.options;return d?(p=this.getStack())==null?void 0:p.prevLead:void 0}getStack(){const{layoutId:d}=this.options;if(d)return this.root.sharedNodes.get(d)}promote({needsReset:d,transition:p,preserveFollowOpacity:m}={}){const _=this.getStack();_&&_.promote(this,m),d&&(this.projectionDelta=void 0,this.needsReset=!0),p&&this.setOptions({transition:p})}relegate(){const d=this.getStack();return d?d.relegate(this):!1}resetSkewAndRotation(){const{visualElement:d}=this.options;if(!d)return;let p=!1;const{latestValues:m}=d;if((m.z||m.rotate||m.rotateX||m.rotateY||m.rotateZ||m.skewX||m.skewY)&&(p=!0),!p)return;const _={};m.z&&va("z",d,_,this.animationValues);for(let g=0;g<ya.length;g++)va(`rotate${ya[g]}`,d,_,this.animationValues),va(`skew${ya[g]}`,d,_,this.animationValues);d.render();for(const g in _)d.setStaticValue(g,_[g]),this.animationValues&&(this.animationValues[g]=_[g]);d.scheduleRender()}applyProjectionStyles(d,p){if(!this.instance||this.isSVG)return;if(!this.isVisible){d.visibility="hidden";return}const m=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,d.visibility="",d.opacity="",d.pointerEvents=ti(p==null?void 0:p.pointerEvents)||"",d.transform=m?m(this.latestValues,""):"none";return}const _=this.getLead();if(!this.projectionDelta||!this.layout||!_.target){this.options.layoutId&&(d.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,d.pointerEvents=ti(p==null?void 0:p.pointerEvents)||""),this.hasProjected&&!Xn(this.latestValues)&&(d.transform=m?m({},""):"none",this.hasProjected=!1);return}d.visibility="";const g=_.animationValues||_.latestValues;this.applyTransformsToTarget();let y=nv(this.projectionDeltaWithTransform,this.treeScale,g);m&&(y=m(g,y)),d.transform=y;const{x,y:b}=this.projectionDelta;d.transformOrigin=`${x.origin*100}% ${b.origin*100}% 0`,_.animationValues?d.opacity=_===this?g.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:g.opacityExit:d.opacity=_===this?g.opacity!==void 0?g.opacity:"":g.opacityExit!==void 0?g.opacityExit:0;for(const T in Za){if(g[T]===void 0)continue;const{correct:L,applyTo:E,isCSSVariable:j}=Za[T],A=y==="none"?g[T]:L(g[T],_);if(E){const I=E.length;for(let O=0;O<I;O++)d[E[O]]=A}else j?this.options.visualElement.renderState.vars[T]=A:d[T]=A}this.options.layoutId&&(d.pointerEvents=_===this?ti(p==null?void 0:p.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(d=>{var p;return(p=d.currentAnimation)==null?void 0:p.stop()}),this.root.nodes.forEach(Tp),this.root.sharedNodes.clear()}}}function hv(n){n.updateLayout()}function mv(n){var o;const r=((o=n.resumeFrom)==null?void 0:o.snapshot)||n.snapshot;if(n.isLead()&&n.layout&&r&&n.hasListeners("didUpdate")){const{layoutBox:l,measuredBox:u}=n.layout,{animationType:f}=n.options,d=r.source!==n.layout.source;f==="size"?Xt(y=>{const x=d?r.measuredBox[y]:r.layoutBox[y],b=at(x);x.min=l[y].min,x.max=x.min+b}):Cm(f,r.layoutBox,l)&&Xt(y=>{const x=d?r.measuredBox[y]:r.layoutBox[y],b=at(l[y]);x.max=x.min+b,n.relativeTarget&&!n.currentAnimation&&(n.isProjectionDirty=!0,n.relativeTarget[y].max=n.relativeTarget[y].min+b)});const p=Tr();Cs(p,l,r.layoutBox);const m=Tr();d?Cs(m,n.applyTransform(u,!0),r.measuredBox):Cs(m,l,r.layoutBox);const _=!vm(p);let g=!1;if(!n.resumeFrom){const y=n.getClosestProjectingParent();if(y&&!y.resumeFrom){const{snapshot:x,layout:b}=y;if(x&&b){const T=We();ui(T,r.layoutBox,x.layoutBox);const L=We();ui(L,l,b.layoutBox),xm(T,L)||(g=!0),y.options.layoutRoot&&(n.relativeTarget=L,n.relativeTargetOrigin=T,n.relativeParent=y)}}}n.notifyListeners("didUpdate",{layout:l,snapshot:r,delta:m,layoutDelta:p,hasLayoutChanged:_,hasRelativeLayoutChanged:g})}else if(n.isLead()){const{onExitComplete:l}=n.options;l&&l()}n.options.transition=void 0}function _v(n){n.parent&&(n.isProjecting()||(n.isProjectionDirty=n.parent.isProjectionDirty),n.isSharedProjectionDirty||(n.isSharedProjectionDirty=!!(n.isProjectionDirty||n.parent.isProjectionDirty||n.parent.isSharedProjectionDirty)),n.isTransformDirty||(n.isTransformDirty=n.parent.isTransformDirty))}function gv(n){n.isProjectionDirty=n.isSharedProjectionDirty=n.isTransformDirty=!1}function yv(n){n.clearSnapshot()}function Tp(n){n.clearMeasurements()}function Ep(n){n.isLayoutDirty=!1}function vv(n){const{visualElement:r}=n.options;r&&r.getProps().onBeforeLayoutMeasure&&r.notify("BeforeLayoutMeasure"),n.resetTransform()}function Mp(n){n.finishAnimation(),n.targetDelta=n.relativeTarget=n.target=void 0,n.isProjectionDirty=!0}function xv(n){n.resolveTargetDelta()}function wv(n){n.calcProjection()}function Sv(n){n.resetSkewAndRotation()}function kv(n){n.removeLeadSnapshot()}function Rp(n,r,o){n.translate=je(r.translate,0,o),n.scale=je(r.scale,1,o),n.origin=r.origin,n.originPoint=r.originPoint}function Dp(n,r,o,l){n.min=je(r.min,o.min,l),n.max=je(r.max,o.max,l)}function bv(n,r,o,l){Dp(n.x,r.x,o.x,l),Dp(n.y,r.y,o.y,l)}function Cv(n){return n.animationValues&&n.animationValues.opacityExit!==void 0}const Pv={duration:.45,ease:[.4,0,.1,1]},Lp=n=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(n),Ip=Lp("applewebkit/")&&!Lp("chrome/")?Math.round:Mt;function Ap(n){n.min=Ip(n.min),n.max=Ip(n.max)}function Tv(n){Ap(n.x),Ap(n.y)}function Cm(n,r,o){return n==="position"||n==="preserve-aspect"&&!G1(Sp(r),Sp(o),.2)}function Ev(n){var r;return n!==n.root&&((r=n.scroll)==null?void 0:r.wasRoot)}const Mv=bm({attachResizeListener:(n,r)=>Ls(n,"resize",r),measureScroll:()=>{var n,r;return{x:document.documentElement.scrollLeft||((n=document.body)==null?void 0:n.scrollLeft)||0,y:document.documentElement.scrollTop||((r=document.body)==null?void 0:r.scrollTop)||0}},checkIsScrollRoot:()=>!0}),Rv=n=>!n.isLayoutDirty&&n.willUpdate(!1);function jp(){const n=new Set,r=new WeakMap,o=()=>n.forEach(Rv);return{add:l=>{n.add(l),r.set(l,l.addEventListener("willUpdate",o))},remove:l=>{n.delete(l);const u=r.get(l);u&&(u(),r.delete(l)),o()},dirty:o}}const xa={current:void 0},Pm=bm({measureScroll:n=>({x:n.scrollLeft,y:n.scrollTop}),defaultParent:()=>{if(!xa.current){const n=new Mv({});n.mount(window),n.setOptions({layoutScroll:!0}),xa.current=n}return xa.current},resetTransform:(n,r)=>{n.style.transform=r!==void 0?r:"none"},checkIsScrollRoot:n=>window.getComputedStyle(n).position==="fixed"}),Ru=R.createContext({transformPagePoint:n=>n,isStatic:!1,reducedMotion:"never"});function Np(n,r){if(typeof n=="function")return n(r);n!=null&&(n.current=r)}function Dv(...n){return r=>{let o=!1;const l=n.map(u=>{const f=Np(u,r);return!o&&typeof f=="function"&&(o=!0),f});if(o)return()=>{for(let u=0;u<l.length;u++){const f=l[u];typeof f=="function"?f():Np(n[u],null)}}}}function Lv(...n){return R.useCallback(Dv(...n),n)}class Iv extends R.Component{getSnapshotBeforeUpdate(r){const o=this.props.childRef.current;if(o&&r.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const l=o.offsetParent,u=Xa(l)&&l.offsetWidth||0,f=Xa(l)&&l.offsetHeight||0,d=this.props.sizeRef.current;d.height=o.offsetHeight||0,d.width=o.offsetWidth||0,d.top=o.offsetTop,d.left=o.offsetLeft,d.right=u-d.width-d.left,d.bottom=f-d.height-d.top}return null}componentDidUpdate(){}render(){return this.props.children}}function Av({children:n,isPresent:r,anchorX:o,anchorY:l,root:u,pop:f}){var x;const d=R.useId(),p=R.useRef(null),m=R.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0}),{nonce:_}=R.useContext(Ru),g=((x=n.props)==null?void 0:x.ref)??(n==null?void 0:n.ref),y=Lv(p,g);return R.useInsertionEffect(()=>{const{width:b,height:T,top:L,left:E,right:j,bottom:A}=m.current;if(r||f===!1||!p.current||!b||!T)return;const I=o==="left"?`left: ${E}`:`right: ${j}`,O=l==="bottom"?`bottom: ${A}`:`top: ${L}`;p.current.dataset.motionPopId=d;const F=document.createElement("style");_&&(F.nonce=_);const K=u??document.head;return K.appendChild(F),F.sheet&&F.sheet.insertRule(`
          [data-motion-pop-id="${d}"] {
            position: absolute !important;
            width: ${b}px !important;
            height: ${T}px !important;
            ${I}px !important;
            ${O}px !important;
          }
        `),()=>{K.contains(F)&&K.removeChild(F)}},[r]),D.jsx(Iv,{isPresent:r,childRef:p,sizeRef:m,pop:f,children:f===!1?n:R.cloneElement(n,{ref:y})})}const jv=({children:n,initial:r,isPresent:o,onExitComplete:l,custom:u,presenceAffectsLayout:f,mode:d,anchorX:p,anchorY:m,root:_})=>{const g=nu(Nv),y=R.useId();let x=!0,b=R.useMemo(()=>(x=!1,{id:y,initial:r,isPresent:o,custom:u,onExitComplete:T=>{g.set(T,!0);for(const L of g.values())if(!L)return;l&&l()},register:T=>(g.set(T,!1),()=>g.delete(T))}),[o,g,l]);return f&&x&&(b={...b}),R.useMemo(()=>{g.forEach((T,L)=>g.set(L,!1))},[o]),R.useEffect(()=>{!o&&!g.size&&l&&l()},[o]),n=D.jsx(Av,{pop:d==="popLayout",isPresent:o,anchorX:p,anchorY:m,root:_,children:n}),D.jsx(di.Provider,{value:b,children:n})};function Nv(){return new Map}function Tm(n=!0){const r=R.useContext(di);if(r===null)return[!0,null];const{isPresent:o,onExitComplete:l,register:u}=r,f=R.useId();R.useEffect(()=>{if(n)return u(f)},[n]);const d=R.useCallback(()=>n&&l&&l(f),[f,l,n]);return!o&&l?[!1,d]:[!0]}const Ko=n=>n.key||"";function Vp(n){const r=[];return R.Children.forEach(n,o=>{R.isValidElement(o)&&r.push(o)}),r}const Ja=({children:n,custom:r,initial:o=!0,onExitComplete:l,presenceAffectsLayout:u=!0,mode:f="sync",propagate:d=!1,anchorX:p="left",anchorY:m="top",root:_})=>{const[g,y]=Tm(d),x=R.useMemo(()=>Vp(n),[n]),b=d&&!g?[]:x.map(Ko),T=R.useRef(!0),L=R.useRef(x),E=nu(()=>new Map),j=R.useRef(new Set),[A,I]=R.useState(x),[O,F]=R.useState(x);ru(()=>{T.current=!1,L.current=x;for(let Q=0;Q<O.length;Q++){const $=Ko(O[Q]);b.includes($)?(E.delete($),j.current.delete($)):E.get($)!==!0&&E.set($,!1)}},[O,b.length,b.join("-")]);const K=[];if(x!==A){let Q=[...x];for(let $=0;$<O.length;$++){const oe=O[$],ae=Ko(oe);b.includes(ae)||(Q.splice($,0,oe),K.push(oe))}return f==="wait"&&K.length&&(Q=K),F(Vp(Q)),I(x),null}const{forceRender:te}=R.useContext(Ts);return D.jsx(D.Fragment,{children:O.map(Q=>{const $=Ko(Q),oe=d&&!g?!1:x===O||b.includes($),ae=()=>{if(j.current.has($))return;if(j.current.add($),E.has($))E.set($,!0);else return;let fe=!0;E.forEach(ye=>{ye||(fe=!1)}),fe&&(te==null||te(),F(L.current),d&&(y==null||y()),l&&l())};return D.jsx(jv,{isPresent:oe,initial:!T.current||o?void 0:!1,custom:r,presenceAffectsLayout:u,mode:f,root:_,onExitComplete:oe?void 0:ae,anchorX:p,anchorY:m,children:Q},$)})})},Vv=R.createContext(null);function Ov(){const n=R.useRef(!1);return ru(()=>(n.current=!0,()=>{n.current=!1}),[]),n}function zv(){const n=Ov(),[r,o]=R.useState(0),l=R.useCallback(()=>{n.current&&o(r+1)},[r]);return[R.useCallback(()=>Ce.postRender(l),[l]),r]}const Em=n=>n===!0,Bv=n=>Em(n===!0)||n==="id",Fv=({children:n,id:r,inherit:o=!0})=>{const l=R.useContext(Ts),u=R.useContext(Vv),[f,d]=zv(),p=R.useRef(null),m=l.id||u;p.current===null&&(Bv(o)&&m&&(r=r?m+"-"+r:m),p.current={id:r,group:Em(o)&&l.group||jp()});const _=R.useMemo(()=>({...p.current,forceRender:f}),[d]);return D.jsx(Ts.Provider,{value:_,children:n})},Mm=R.createContext({strict:!1}),Op={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let zp=!1;function Uv(){if(zp)return;const n={};for(const r in Op)n[r]={isEnabled:o=>Op[r].some(l=>!!o[l])};rm(n),zp=!0}function Rm(){return Uv(),S1()}function Yv(n){const r=Rm();for(const o in n)r[o]={...r[o],...n[o]};rm(r)}const Wv=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function ci(n){return n.startsWith("while")||n.startsWith("drag")&&n!=="draggable"||n.startsWith("layout")||n.startsWith("onTap")||n.startsWith("onPan")||n.startsWith("onLayout")||Wv.has(n)}let Dm=n=>!ci(n);function Hv(n){typeof n=="function"&&(Dm=r=>r.startsWith("on")?!ci(r):n(r))}try{Hv(require("@emotion/is-prop-valid").default)}catch{}function Qv(n,r,o){const l={};for(const u in n)u==="values"&&typeof n.values=="object"||(Dm(u)||o===!0&&ci(u)||!r&&!ci(u)||n.draggable&&u.startsWith("onDrag"))&&(l[u]=n[u]);return l}const hi=R.createContext({});function Xv(n,r){if(pi(n)){const{initial:o,animate:l}=n;return{initial:o===!1||Ds(o)?o:void 0,animate:Ds(l)?l:void 0}}return n.inherit!==!1?r:{}}function $v(n){const{initial:r,animate:o}=Xv(n,R.useContext(hi));return R.useMemo(()=>({initial:r,animate:o}),[Bp(r),Bp(o)])}function Bp(n){return Array.isArray(n)?n.join(" "):n}const Du=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Lm(n,r,o){for(const l in r)!st(r[l])&&!cm(l,o)&&(n[l]=r[l])}function Kv({transformTemplate:n},r){return R.useMemo(()=>{const o=Du();return Eu(o,r,n),Object.assign({},o.vars,o.style)},[r])}function Gv(n,r){const o=n.style||{},l={};return Lm(l,o,n),Object.assign(l,Kv(n,r)),l}function Zv(n,r){const o={},l=Gv(n,r);return n.drag&&n.dragListener!==!1&&(o.draggable=!1,l.userSelect=l.WebkitUserSelect=l.WebkitTouchCallout="none",l.touchAction=n.drag===!0?"none":`pan-${n.drag==="x"?"y":"x"}`),n.tabIndex===void 0&&(n.onTap||n.onTapStart||n.whileTap)&&(o.tabIndex=0),o.style=l,o}const Im=()=>({...Du(),attrs:{}});function Jv(n,r,o,l){const u=R.useMemo(()=>{const f=Im();return dm(f,r,pm(l),n.transformTemplate,n.style),{...f.attrs,style:{...f.style}}},[r]);if(n.style){const f={};Lm(f,n.style,n),u.style={...f,...u.style}}return u}const qv=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Lu(n){return typeof n!="string"||n.includes("-")?!1:!!(qv.indexOf(n)>-1||/[A-Z]/u.test(n))}function ex(n,r,o,{latestValues:l},u,f=!1,d){const m=(d??Lu(n)?Jv:Zv)(r,l,u,n),_=Qv(r,typeof n=="string",f),g=n!==R.Fragment?{..._,...m,ref:o}:{},{children:y}=r,x=R.useMemo(()=>st(y)?y.get():y,[y]);return R.createElement(n,{...g,children:x})}function tx({scrapeMotionValuesFromProps:n,createRenderState:r},o,l,u){return{latestValues:nx(o,l,u,n),renderState:r()}}function nx(n,r,o,l){const u={},f=l(n,{});for(const x in f)u[x]=ti(f[x]);let{initial:d,animate:p}=n;const m=pi(n),_=tm(n);r&&_&&!m&&n.inherit!==!1&&(d===void 0&&(d=r.initial),p===void 0&&(p=r.animate));let g=o?o.initial===!1:!1;g=g||d===!1;const y=g?p:d;if(y&&typeof y!="boolean"&&!fi(y)){const x=Array.isArray(y)?y:[y];for(let b=0;b<x.length;b++){const T=xu(n,x[b]);if(T){const{transitionEnd:L,transition:E,...j}=T;for(const A in j){let I=j[A];if(Array.isArray(I)){const O=g?I.length-1:0;I=I[O]}I!==null&&(u[A]=I)}for(const A in L)u[A]=L[A]}}}return u}const Am=n=>(r,o)=>{const l=R.useContext(hi),u=R.useContext(di),f=()=>tx(n,r,l,u);return o?f():nu(f)},rx=Am({scrapeMotionValuesFromProps:Mu,createRenderState:Du}),sx=Am({scrapeMotionValuesFromProps:hm,createRenderState:Im}),ox=Symbol.for("motionComponentSymbol");function ix(n,r,o){const l=R.useRef(o);R.useInsertionEffect(()=>{l.current=o});const u=R.useRef(null);return R.useCallback(f=>{var p;f&&((p=n.onMount)==null||p.call(n,f));const d=l.current;if(typeof d=="function")if(f){const m=d(f);typeof m=="function"&&(u.current=m)}else u.current?(u.current(),u.current=null):d(f);else d&&(d.current=f);r&&(f?r.mount(f):r.unmount())},[r])}const jm=R.createContext({});function br(n){return n&&typeof n=="object"&&Object.prototype.hasOwnProperty.call(n,"current")}function lx(n,r,o,l,u,f){var I,O;const{visualElement:d}=R.useContext(hi),p=R.useContext(Mm),m=R.useContext(di),_=R.useContext(Ru),g=_.reducedMotion,y=_.skipAnimations,x=R.useRef(null),b=R.useRef(!1);l=l||p.renderer,!x.current&&l&&(x.current=l(n,{visualState:r,parent:d,props:o,presenceContext:m,blockInitialAnimation:m?m.initial===!1:!1,reducedMotionConfig:g,skipAnimations:y,isSVG:f}),b.current&&x.current&&(x.current.manuallyAnimateOnMount=!0));const T=x.current,L=R.useContext(jm);T&&!T.projection&&u&&(T.type==="html"||T.type==="svg")&&ax(x.current,o,u,L);const E=R.useRef(!1);R.useInsertionEffect(()=>{T&&E.current&&T.update(o,m)});const j=o[Uh],A=R.useRef(!!j&&typeof window<"u"&&!((I=window.MotionHandoffIsComplete)!=null&&I.call(window,j))&&((O=window.MotionHasOptimisedAnimation)==null?void 0:O.call(window,j)));return ru(()=>{b.current=!0,T&&(E.current=!0,window.MotionIsMounted=!0,T.updateFeatures(),T.scheduleRenderMicrotask(),A.current&&T.animationState&&T.animationState.animateChanges())}),R.useEffect(()=>{T&&(!A.current&&T.animationState&&T.animationState.animateChanges(),A.current&&(queueMicrotask(()=>{var F;(F=window.MotionHandoffMarkAsComplete)==null||F.call(window,j)}),A.current=!1),T.enteringChildren=void 0)}),T}function ax(n,r,o,l){const{layoutId:u,layout:f,drag:d,dragConstraints:p,layoutScroll:m,layoutRoot:_,layoutCrossfade:g}=r;n.projection=new o(n.latestValues,r["data-framer-portal-id"]?void 0:Nm(n.parent)),n.projection.setOptions({layoutId:u,layout:f,alwaysMeasureLayout:!!d||p&&br(p),visualElement:n,animationType:typeof f=="string"?f:"both",initialPromotionConfig:l,crossfade:g,layoutScroll:m,layoutRoot:_})}function Nm(n){if(n)return n.options.allowProjection!==!1?n.projection:Nm(n.parent)}function wa(n,{forwardMotionProps:r=!1,type:o}={},l,u){l&&Yv(l);const f=o?o==="svg":Lu(n),d=f?sx:rx;function p(_,g){let y;const x={...R.useContext(Ru),..._,layoutId:ux(_)},{isStatic:b}=x,T=$v(_),L=d(_,b);if(!b&&typeof window<"u"){cx();const E=dx(x);y=E.MeasureLayout,T.visualElement=lx(n,L,x,u,E.ProjectionNode,f)}return D.jsxs(hi.Provider,{value:T,children:[y&&T.visualElement?D.jsx(y,{visualElement:T.visualElement,...x}):null,ex(n,_,ix(L,T.visualElement,g),L,b,r,f)]})}p.displayName=`motion.${typeof n=="string"?n:`create(${n.displayName??n.name??""})`}`;const m=R.forwardRef(p);return m[ox]=n,m}function ux({layoutId:n}){const r=R.useContext(Ts).id;return r&&n!==void 0?r+"-"+n:n}function cx(n,r){R.useContext(Mm).strict}function dx(n){const r=Rm(),{drag:o,layout:l}=r;if(!o&&!l)return{};const u={...o,...l};return{MeasureLayout:o!=null&&o.isEnabled(n)||l!=null&&l.isEnabled(n)?u.MeasureLayout:void 0,ProjectionNode:u.ProjectionNode}}function fx(n,r){if(typeof Proxy>"u")return wa;const o=new Map,l=(f,d)=>wa(f,d,n,r),u=(f,d)=>l(f,d);return new Proxy(u,{get:(f,d)=>d==="create"?l:(o.has(d)||o.set(d,wa(d,void 0,n,r)),o.get(d))})}const px=(n,r)=>r.isSVG??Lu(n)?new z1(r):new I1(r,{allowProjection:n!==R.Fragment});class hx extends Dn{constructor(r){super(r),r.animationState||(r.animationState=W1(r))}updateAnimationControlsSubscription(){const{animate:r}=this.node.getProps();fi(r)&&(this.unmountControls=r.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:r}=this.node.getProps(),{animate:o}=this.node.prevProps||{};r!==o&&this.updateAnimationControlsSubscription()}unmount(){var r;this.node.animationState.reset(),(r=this.unmountControls)==null||r.call(this)}}let mx=0;class _x extends Dn{constructor(){super(...arguments),this.id=mx++}update(){if(!this.node.presenceContext)return;const{isPresent:r,onExitComplete:o}=this.node.presenceContext,{isPresent:l}=this.node.prevPresenceContext||{};if(!this.node.animationState||r===l)return;const u=this.node.animationState.setActive("exit",!r);o&&!r&&u.then(()=>{o(this.id)})}mount(){const{register:r,onExitComplete:o}=this.node.presenceContext||{};o&&o(this.id),r&&(this.unmount=r(this.id))}unmount(){}}const gx={animation:{Feature:hx},exit:{Feature:_x}};function Ns(n){return{point:{x:n.pageX,y:n.pageY}}}const yx=n=>r=>bu(r)&&n(r,Ns(r));function Ps(n,r,o,l){return Ls(n,r,yx(o),l)}const Vm=({current:n})=>n?n.ownerDocument.defaultView:null,Fp=(n,r)=>Math.abs(n-r);function vx(n,r){const o=Fp(n.x,r.x),l=Fp(n.y,r.y);return Math.sqrt(o**2+l**2)}const Up=new Set(["auto","scroll"]);class Om{constructor(r,o,{transformPagePoint:l,contextWindow:u=window,dragSnapToOrigin:f=!1,distanceThreshold:d=3,element:p}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=b=>{this.handleScroll(b.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const b=ka(this.lastMoveEventInfo,this.history),T=this.startEvent!==null,L=vx(b.offset,{x:0,y:0})>=this.distanceThreshold;if(!T&&!L)return;const{point:E}=b,{timestamp:j}=Ze;this.history.push({...E,timestamp:j});const{onStart:A,onMove:I}=this.handlers;T||(A&&A(this.lastMoveEvent,b),this.startEvent=this.lastMoveEvent),I&&I(this.lastMoveEvent,b)},this.handlePointerMove=(b,T)=>{this.lastMoveEvent=b,this.lastMoveEventInfo=Sa(T,this.transformPagePoint),Ce.update(this.updatePoint,!0)},this.handlePointerUp=(b,T)=>{this.end();const{onEnd:L,onSessionEnd:E,resumeAnimation:j}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&j&&j(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const A=ka(b.type==="pointercancel"?this.lastMoveEventInfo:Sa(T,this.transformPagePoint),this.history);this.startEvent&&L&&L(b,A),E&&E(b,A)},!bu(r))return;this.dragSnapToOrigin=f,this.handlers=o,this.transformPagePoint=l,this.distanceThreshold=d,this.contextWindow=u||window;const m=Ns(r),_=Sa(m,this.transformPagePoint),{point:g}=_,{timestamp:y}=Ze;this.history=[{...g,timestamp:y}];const{onSessionStart:x}=o;x&&x(r,ka(_,this.history)),this.removeListeners=Is(Ps(this.contextWindow,"pointermove",this.handlePointerMove),Ps(this.contextWindow,"pointerup",this.handlePointerUp),Ps(this.contextWindow,"pointercancel",this.handlePointerUp)),p&&this.startScrollTracking(p)}startScrollTracking(r){let o=r.parentElement;for(;o;){const l=getComputedStyle(o);(Up.has(l.overflowX)||Up.has(l.overflowY))&&this.scrollPositions.set(o,{x:o.scrollLeft,y:o.scrollTop}),o=o.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(r){const o=this.scrollPositions.get(r);if(!o)return;const l=r===window,u=l?{x:window.scrollX,y:window.scrollY}:{x:r.scrollLeft,y:r.scrollTop},f={x:u.x-o.x,y:u.y-o.y};f.x===0&&f.y===0||(l?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=f.x,this.lastMoveEventInfo.point.y+=f.y):this.history.length>0&&(this.history[0].x-=f.x,this.history[0].y-=f.y),this.scrollPositions.set(r,u),Ce.update(this.updatePoint,!0))}updateHandlers(r){this.handlers=r}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),Rn(this.updatePoint)}}function Sa(n,r){return r?{point:r(n.point)}:n}function Yp(n,r){return{x:n.x-r.x,y:n.y-r.y}}function ka({point:n},r){return{point:n,delta:Yp(n,zm(r)),offset:Yp(n,xx(r)),velocity:wx(r,.1)}}function xx(n){return n[0]}function zm(n){return n[n.length-1]}function wx(n,r){if(n.length<2)return{x:0,y:0};let o=n.length-1,l=null;const u=zm(n);for(;o>=0&&(l=n[o],!(u.timestamp-l.timestamp>Bt(r)));)o--;if(!l)return{x:0,y:0};l===n[0]&&n.length>2&&u.timestamp-l.timestamp>Bt(r)*2&&(l=n[1]);const f=Et(u.timestamp-l.timestamp);if(f===0)return{x:0,y:0};const d={x:(u.x-l.x)/f,y:(u.y-l.y)/f};return d.x===1/0&&(d.x=0),d.y===1/0&&(d.y=0),d}function Sx(n,{min:r,max:o},l){return r!==void 0&&n<r?n=l?je(r,n,l.min):Math.max(n,r):o!==void 0&&n>o&&(n=l?je(o,n,l.max):Math.min(n,o)),n}function Wp(n,r,o){return{min:r!==void 0?n.min+r:void 0,max:o!==void 0?n.max+o-(n.max-n.min):void 0}}function kx(n,{top:r,left:o,bottom:l,right:u}){return{x:Wp(n.x,o,u),y:Wp(n.y,r,l)}}function Hp(n,r){let o=r.min-n.min,l=r.max-n.max;return r.max-r.min<n.max-n.min&&([o,l]=[l,o]),{min:o,max:l}}function bx(n,r){return{x:Hp(n.x,r.x),y:Hp(n.y,r.y)}}function Cx(n,r){let o=.5;const l=at(n),u=at(r);return u>l?o=Es(r.min,r.max-l,n.min):l>u&&(o=Es(n.min,n.max-u,r.min)),Kt(0,1,o)}function Px(n,r){const o={};return r.min!==void 0&&(o.min=r.min-n.min),r.max!==void 0&&(o.max=r.max-n.min),o}const qa=.35;function Tx(n=qa){return n===!1?n=0:n===!0&&(n=qa),{x:Qp(n,"left","right"),y:Qp(n,"top","bottom")}}function Qp(n,r,o){return{min:Xp(n,r),max:Xp(n,o)}}function Xp(n,r){return typeof n=="number"?n:n[r]||0}const Ex=new WeakMap;class Mx{constructor(r){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=We(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=r}start(r,{snapToCursor:o=!1,distanceThreshold:l}={}){const{presenceContext:u}=this.visualElement;if(u&&u.isPresent===!1)return;const f=y=>{o&&this.snapToCursor(Ns(y).point),this.stopAnimation()},d=(y,x)=>{const{drag:b,dragPropagation:T,onDragStart:L}=this.getProps();if(b&&!T&&(this.openDragLock&&this.openDragLock(),this.openDragLock=Jy(b),!this.openDragLock))return;this.latestPointerEvent=y,this.latestPanInfo=x,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Xt(j=>{let A=this.getAxisMotionValue(j).get()||0;if($t.test(A)){const{projection:I}=this.visualElement;if(I&&I.layout){const O=I.layout.layoutBox[j];O&&(A=at(O)*(parseFloat(A)/100))}}this.originPoint[j]=A}),L&&Ce.update(()=>L(y,x),!1,!0),Ya(this.visualElement,"transform");const{animationState:E}=this.visualElement;E&&E.setActive("whileDrag",!0)},p=(y,x)=>{this.latestPointerEvent=y,this.latestPanInfo=x;const{dragPropagation:b,dragDirectionLock:T,onDirectionLock:L,onDrag:E}=this.getProps();if(!b&&!this.openDragLock)return;const{offset:j}=x;if(T&&this.currentDirection===null){this.currentDirection=Dx(j),this.currentDirection!==null&&L&&L(this.currentDirection);return}this.updateAxis("x",x.point,j),this.updateAxis("y",x.point,j),this.visualElement.render(),E&&Ce.update(()=>E(y,x),!1,!0)},m=(y,x)=>{this.latestPointerEvent=y,this.latestPanInfo=x,this.stop(y,x),this.latestPointerEvent=null,this.latestPanInfo=null},_=()=>{const{dragSnapToOrigin:y}=this.getProps();(y||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:g}=this.getProps();this.panSession=new Om(r,{onSessionStart:f,onStart:d,onMove:p,onSessionEnd:m,resumeAnimation:_},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:g,distanceThreshold:l,contextWindow:Vm(this.visualElement),element:this.visualElement.current})}stop(r,o){const l=r||this.latestPointerEvent,u=o||this.latestPanInfo,f=this.isDragging;if(this.cancel(),!f||!u||!l)return;const{velocity:d}=u;this.startAnimation(d);const{onDragEnd:p}=this.getProps();p&&Ce.postRender(()=>p(l,u))}cancel(){this.isDragging=!1;const{projection:r,animationState:o}=this.visualElement;r&&(r.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:l}=this.getProps();!l&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),o&&o.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(r,o,l){const{drag:u}=this.getProps();if(!l||!Go(r,u,this.currentDirection))return;const f=this.getAxisMotionValue(r);let d=this.originPoint[r]+l[r];this.constraints&&this.constraints[r]&&(d=Sx(d,this.constraints[r],this.elastic[r])),f.set(d)}resolveConstraints(){var f;const{dragConstraints:r,dragElastic:o}=this.getProps(),l=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(f=this.visualElement.projection)==null?void 0:f.layout,u=this.constraints;r&&br(r)?this.constraints||(this.constraints=this.resolveRefConstraints()):r&&l?this.constraints=kx(l.layoutBox,r):this.constraints=!1,this.elastic=Tx(o),u!==this.constraints&&!br(r)&&l&&this.constraints&&!this.hasMutatedConstraints&&Xt(d=>{this.constraints!==!1&&this.getAxisMotionValue(d)&&(this.constraints[d]=Px(l.layoutBox[d],this.constraints[d]))})}resolveRefConstraints(){const{dragConstraints:r,onMeasureDragConstraints:o}=this.getProps();if(!r||!br(r))return!1;const l=r.current,{projection:u}=this.visualElement;if(!u||!u.layout)return!1;const f=T1(l,u.root,this.visualElement.getTransformPagePoint());let d=bx(u.layout.layoutBox,f);if(o){const p=o(b1(d));this.hasMutatedConstraints=!!p,p&&(d=om(p))}return d}startAnimation(r){const{drag:o,dragMomentum:l,dragElastic:u,dragTransition:f,dragSnapToOrigin:d,onDragTransitionEnd:p}=this.getProps(),m=this.constraints||{},_=Xt(g=>{if(!Go(g,o,this.currentDirection))return;let y=m&&m[g]||{};d&&(y={min:0,max:0});const x=u?200:1e6,b=u?40:1e7,T={type:"inertia",velocity:l?r[g]:0,bounceStiffness:x,bounceDamping:b,timeConstant:750,restDelta:1,restSpeed:10,...f,...y};return this.startAxisValueAnimation(g,T)});return Promise.all(_).then(p)}startAxisValueAnimation(r,o){const l=this.getAxisMotionValue(r);return Ya(this.visualElement,r),l.start(vu(r,l,0,o,this.visualElement,!1))}stopAnimation(){Xt(r=>this.getAxisMotionValue(r).stop())}getAxisMotionValue(r){const o=`_drag${r.toUpperCase()}`,l=this.visualElement.getProps(),u=l[o];return u||this.visualElement.getValue(r,(l.initial?l.initial[r]:void 0)||0)}snapToCursor(r){Xt(o=>{const{drag:l}=this.getProps();if(!Go(o,l,this.currentDirection))return;const{projection:u}=this.visualElement,f=this.getAxisMotionValue(o);if(u&&u.layout){const{min:d,max:p}=u.layout.layoutBox[o],m=f.get()||0;f.set(r[o]-je(d,p,.5)+m)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:r,dragConstraints:o}=this.getProps(),{projection:l}=this.visualElement;if(!br(o)||!l||!this.constraints)return;this.stopAnimation();const u={x:0,y:0};Xt(d=>{const p=this.getAxisMotionValue(d);if(p&&this.constraints!==!1){const m=p.get();u[d]=Cx({min:m,max:m},this.constraints[d])}});const{transformTemplate:f}=this.visualElement.getProps();this.visualElement.current.style.transform=f?f({},""):"none",l.root&&l.root.updateScroll(),l.updateLayout(),this.constraints=!1,this.resolveConstraints(),Xt(d=>{if(!Go(d,r,null))return;const p=this.getAxisMotionValue(d),{min:m,max:_}=this.constraints[d];p.set(je(m,_,u[d]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;Ex.set(this.visualElement,this);const r=this.visualElement.current,o=Ps(r,"pointerdown",_=>{const{drag:g,dragListener:y=!0}=this.getProps(),x=_.target,b=x!==r&&s1(x);g&&y&&!b&&this.start(_)});let l;const u=()=>{const{dragConstraints:_}=this.getProps();br(_)&&_.current&&(this.constraints=this.resolveRefConstraints(),l||(l=Rx(r,_.current,()=>this.scalePositionWithinConstraints())))},{projection:f}=this.visualElement,d=f.addEventListener("measure",u);f&&!f.layout&&(f.root&&f.root.updateScroll(),f.updateLayout()),Ce.read(u);const p=Ls(window,"resize",()=>this.scalePositionWithinConstraints()),m=f.addEventListener("didUpdate",(({delta:_,hasLayoutChanged:g})=>{this.isDragging&&g&&(Xt(y=>{const x=this.getAxisMotionValue(y);x&&(this.originPoint[y]+=_[y].translate,x.set(x.get()+_[y].translate))}),this.visualElement.render())}));return()=>{p(),o(),d(),m&&m(),l&&l()}}getProps(){const r=this.visualElement.getProps(),{drag:o=!1,dragDirectionLock:l=!1,dragPropagation:u=!1,dragConstraints:f=!1,dragElastic:d=qa,dragMomentum:p=!0}=r;return{...r,drag:o,dragDirectionLock:l,dragPropagation:u,dragConstraints:f,dragElastic:d,dragMomentum:p}}}function $p(n){let r=!0;return()=>{if(r){r=!1;return}n()}}function Rx(n,r,o){const l=qf(n,$p(o)),u=qf(r,$p(o));return()=>{l(),u()}}function Go(n,r,o){return(r===!0||r===n)&&(o===null||o===n)}function Dx(n,r=10){let o=null;return Math.abs(n.y)>r?o="y":Math.abs(n.x)>r&&(o="x"),o}class Lx extends Dn{constructor(r){super(r),this.removeGroupControls=Mt,this.removeListeners=Mt,this.controls=new Mx(r)}mount(){const{dragControls:r}=this.node.getProps();r&&(this.removeGroupControls=r.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Mt}update(){const{dragControls:r}=this.node.getProps(),{dragControls:o}=this.node.prevProps||{};r!==o&&(this.removeGroupControls(),r&&(this.removeGroupControls=r.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const ba=n=>(r,o)=>{n&&Ce.update(()=>n(r,o),!1,!0)};class Ix extends Dn{constructor(){super(...arguments),this.removePointerDownListener=Mt}onPointerDown(r){this.session=new Om(r,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Vm(this.node)})}createPanHandlers(){const{onPanSessionStart:r,onPanStart:o,onPan:l,onPanEnd:u}=this.node.getProps();return{onSessionStart:ba(r),onStart:ba(o),onMove:ba(l),onEnd:(f,d)=>{delete this.session,u&&Ce.postRender(()=>u(f,d))}}}mount(){this.removePointerDownListener=Ps(this.node.current,"pointerdown",r=>this.onPointerDown(r))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let Ca=!1;class Ax extends R.Component{componentDidMount(){const{visualElement:r,layoutGroup:o,switchLayoutGroup:l,layoutId:u}=this.props,{projection:f}=r;f&&(o.group&&o.group.add(f),l&&l.register&&u&&l.register(f),Ca&&f.root.didUpdate(),f.addEventListener("animationComplete",()=>{this.safeToRemove()}),f.setOptions({...f.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),ni.hasEverUpdated=!0}getSnapshotBeforeUpdate(r){const{layoutDependency:o,visualElement:l,drag:u,isPresent:f}=this.props,{projection:d}=l;return d&&(d.isPresent=f,r.layoutDependency!==o&&d.setOptions({...d.options,layoutDependency:o}),Ca=!0,u||r.layoutDependency!==o||o===void 0||r.isPresent!==f?d.willUpdate():this.safeToRemove(),r.isPresent!==f&&(f?d.promote():d.relegate()||Ce.postRender(()=>{const p=d.getStack();(!p||!p.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:r}=this.props.visualElement;r&&(r.root.didUpdate(),ku.postRender(()=>{!r.currentAnimation&&r.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:r,layoutGroup:o,switchLayoutGroup:l}=this.props,{projection:u}=r;Ca=!0,u&&(u.scheduleCheckAfterUnmount(),o&&o.group&&o.group.remove(u),l&&l.deregister&&l.deregister(u))}safeToRemove(){const{safeToRemove:r}=this.props;r&&r()}render(){return null}}function Bm(n){const[r,o]=Tm(),l=R.useContext(Ts);return D.jsx(Ax,{...n,layoutGroup:l,switchLayoutGroup:R.useContext(jm),isPresent:r,safeToRemove:o})}const jx={pan:{Feature:Ix},drag:{Feature:Lx,ProjectionNode:Pm,MeasureLayout:Bm}};function Kp(n,r,o){const{props:l}=n;n.animationState&&l.whileHover&&n.animationState.setActive("whileHover",o==="Start");const u="onHover"+o,f=l[u];f&&Ce.postRender(()=>f(r,Ns(r)))}class Nx extends Dn{mount(){const{current:r}=this.node;r&&(this.unmount=e1(r,(o,l)=>(Kp(this.node,l,"Start"),u=>Kp(this.node,u,"End"))))}unmount(){}}class Vx extends Dn{constructor(){super(...arguments),this.isActive=!1}onFocus(){let r=!1;try{r=this.node.current.matches(":focus-visible")}catch{r=!0}!r||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Is(Ls(this.node.current,"focus",()=>this.onFocus()),Ls(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function Gp(n,r,o){const{props:l}=n;if(n.current instanceof HTMLButtonElement&&n.current.disabled)return;n.animationState&&l.whileTap&&n.animationState.setActive("whileTap",o==="Start");const u="onTap"+(o==="End"?"":o),f=l[u];f&&Ce.postRender(()=>f(r,Ns(r)))}class Ox extends Dn{mount(){const{current:r}=this.node;if(!r)return;const{globalTapTarget:o,propagate:l}=this.node.props;this.unmount=i1(r,(u,f)=>(Gp(this.node,f,"Start"),(d,{success:p})=>Gp(this.node,d,p?"End":"Cancel")),{useGlobalTarget:o,stopPropagation:(l==null?void 0:l.tap)===!1})}unmount(){}}const eu=new WeakMap,Pa=new WeakMap,zx=n=>{const r=eu.get(n.target);r&&r(n)},Bx=n=>{n.forEach(zx)};function Fx({root:n,...r}){const o=n||document;Pa.has(o)||Pa.set(o,{});const l=Pa.get(o),u=JSON.stringify(r);return l[u]||(l[u]=new IntersectionObserver(Bx,{root:n,...r})),l[u]}function Ux(n,r,o){const l=Fx(r);return eu.set(n,o),l.observe(n),()=>{eu.delete(n),l.unobserve(n)}}const Yx={some:0,all:1};class Wx extends Dn{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:r={}}=this.node.getProps(),{root:o,margin:l,amount:u="some",once:f}=r,d={root:o?o.current:void 0,rootMargin:l,threshold:typeof u=="number"?u:Yx[u]},p=m=>{const{isIntersecting:_}=m;if(this.isInView===_||(this.isInView=_,f&&!_&&this.hasEnteredView))return;_&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",_);const{onViewportEnter:g,onViewportLeave:y}=this.node.getProps(),x=_?g:y;x&&x(m)};return Ux(this.node.current,d,p)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:r,prevProps:o}=this.node;["amount","margin","root"].some(Hx(r,o))&&this.startObserver()}unmount(){}}function Hx({viewport:n={}},{viewport:r={}}={}){return o=>n[o]!==r[o]}const Qx={inView:{Feature:Wx},tap:{Feature:Ox},focus:{Feature:Vx},hover:{Feature:Nx}},Xx={layout:{ProjectionNode:Pm,MeasureLayout:Bm}},$x={...gx,...Qx,...jx,...Xx},ve=fx($x,px);function Kx(n,r,o,l,u){const f=(_,g,y,x)=>{const b=(x-90)*Math.PI/180;return{x:_+y*Math.cos(b),y:g+y*Math.sin(b)}},d=f(n,r,o,u),p=f(n,r,o,l),m=u-l<=180?"0":"1";return`M ${d.x} ${d.y} A ${o} ${o} 0 ${m} 0 ${p.x} ${p.y}`}const Zp={party:{from:"#2BD94D",to:"#ffffff"},"feel-good":{from:"#D4A017",to:"#ffffff"},soft:{from:"#C06090",to:"#ffffff"},indie:{from:"#1A8A7A",to:"#ffffff"},nostalgic:{from:"#9A6030",to:"#ffffff"},sad:{from:"#2A3580",to:"#ffffff"},love:{from:"#C02040",to:"#ffffff"},hiphop:{from:"#351850",to:"#ffffff"}},Qn=[{name:"party",paths:{lEye:"M 60 75 Q 75 55 90 75",rEye:"M 110 75 Q 125 55 140 75",mouth:"M 65 110 Q 100 160 135 110"}},{name:"feel-good",paths:{lEye:"M 60 85 Q 75 70 90 85",rEye:"M 110 85 Q 125 70 140 85",mouth:"M 70 115 Q 100 145 130 115"}},{name:"soft",paths:{lEye:"M 60 85 Q 75 90 90 85",rEye:"M 110 85 Q 125 90 140 85",mouth:"M 85 125 Q 100 130 115 125"}},{name:"indie",paths:{lEye:"M 60 82 Q 75 78 90 86",rEye:"M 110 86 Q 125 78 140 82",mouth:"M 75 128 Q 100 133 125 126"}},{name:"nostalgic",paths:{lEye:"M 60 82 Q 75 70 90 78",rEye:"M 110 78 Q 125 70 140 82",mouth:"M 78 128 Q 100 136 122 130"}},{name:"sad",paths:{lEye:"M 60 90 Q 75 75 90 90",rEye:"M 110 90 Q 125 75 140 90",mouth:"M 70 135 Q 100 115 130 135"}},{name:"love",paths:{lEye:"M 60 80 Q 75 55 90 80",rEye:"M 110 80 Q 125 55 140 80",mouth:"M 85 125 Q 100 140 115 125"}},{name:"hiphop",paths:{lEye:"M 60 75 Q 75 85 90 90",rEye:"M 110 90 Q 125 85 140 75",mouth:"M 70 130 Q 100 140 130 125"}}];function Gx({onMoodConfirmed:n,accentColor:r="#4A30F0",selectedMood:o=null,nudge:l=!1}){const u={dragMaxOffset:28,dragScale:.88,pullScale:.95,nudgeScale:1.1,hoverScale:1.02,pullOffsetX:20,pullOffsetY:20,pullTweenDuration:.6,pullEase:{x1:.7,y1:1,x2:.7,y2:1},_snapStiffness:220,_snapDamping:14,_snapMass:1,_pullStiffness:230,_pullDamping:14,_pullMass:1,_innerShadowStiffness:210,_innerShadowDamping:12,dragEase:{x1:.5,y1:.6,x2:.6,y2:.8},tabStrokeDuration:.5,shadowTransitionDuration:.3,scaleTransitionDuration:.4,shadowBlurIntensity:12,shadowDirectionalStrength:.4,glowInitialScale:.85,glowPeakScale:1.15,glowFinalScale:1.1,glowDuration:1.2,glowFadeDuration:1.5,tabPathStrokeWidth:4,tabPathStrokeWidthActive:6,tabPathStrokeWidthRubberBand:5.5,tabGlowStrokeWidth:5},[f,d]=R.useState(3),[p,m]=R.useState(!1),[_,g]=R.useState(!1),[y,x]=R.useState(!1),[b,T]=R.useState({x:0,y:0}),[L,E]=R.useState(!0),[j,A]=R.useState([]),[I,O]=R.useState(!0),[F,K]=R.useState(!1),[te,Q]=R.useState(null),$=R.useRef([]),oe=R.useRef(null),ae=R.useRef(!1),fe=R.useRef({x:0,y:0}),ye=R.useRef(!1),ke=Qn[f],le=te!==null,Te=p||!y||F,me=R.useMemo(()=>[{x:-20,y:0,moodIndex:0},{x:0,y:-20,moodIndex:2},{x:u.pullOffsetX,y:0,moodIndex:4},{x:0,y:u.pullOffsetY,moodIndex:6}],[u.pullOffsetX,u.pullOffsetY]);R.useEffect(()=>{if(!o){x(!1);return}const Ee=Qn.findIndex(De=>De.name===o);Ee>=0&&(d(Ee),x(!0))},[o]),R.useEffect(()=>{const Ee=[];return Qn.forEach((De,qe)=>{Ee.push(setTimeout(()=>{A(_t=>[..._t,qe])},qe*120))}),Ee.push(setTimeout(()=>O(!1),Qn.length*120+600)),Ee.push(setTimeout(()=>E(!1),2200)),Ee.push(setTimeout(()=>K(!0),Qn.length*120+1e3)),()=>Ee.forEach(clearTimeout)},[]);const B=R.useCallback(()=>{$.current.forEach(clearTimeout),$.current=[];const Ee=_t=>{for(let ut=0;ut<me.length;ut++){const gt=me[ut],Rt=_t+ut*2800;$.current.push(setTimeout(()=>{Q(gt),d(gt.moodIndex)},Rt)),$.current.push(setTimeout(()=>{Q(null),d(3)},Rt+900))}return me.length*2800},De=Ee(0),qe=setInterval(()=>{$.current.forEach(clearTimeout),$.current=[],Ee(0)},De);$.current.push(qe)},[me]);R.useEffect(()=>{if(!F||y||p){$.current.forEach(clearTimeout),$.current=[],Q(null);return}return B(),()=>{$.current.forEach(clearTimeout),$.current=[]}},[F,y,p,B]);const H=Ee=>{if(Ee.currentTarget.setPointerCapture(Ee.pointerId),ae.current=!0,ye.current=!1,m(!0),K(!1),oe.current){const De=oe.current.getBoundingClientRect();fe.current={x:De.left+De.width/2,y:De.top+De.height/2}}},Y=Ee=>{if(!ae.current)return;const De=Ee.clientX-fe.current.x,qe=Ee.clientY-fe.current.y,_t=Math.sqrt(De*De+qe*qe);if(_t>5){ye.current=!0;const ut=u.dragMaxOffset,gt=Math.min(_t,100)/100;T({x:De/_t*ut*gt,y:qe/_t*ut*gt});const Rt=(Math.atan2(qe,De)*(180/Math.PI)+180+360)%360,Gt=Math.round(Rt/45)%8;d(Gt),x(!0)}},k=Ee=>{Ee.currentTarget.releasePointerCapture(Ee.pointerId),ae.current=!1,m(!1),T({x:0,y:0}),ye.current&&y&&(n==null||n(Qn[f].name))},N=le?te.x:b.x,ie=le?te.y:b.y,ue="0px 10px 30px rgba(0,0,0,0.15)",de=u.shadowDirectionalStrength,pe=u.shadowBlurIntensity,Se=p||le?`inset ${-N*de}px ${-ie*de}px ${pe}px rgba(255,255,255,0.4), inset ${N*de*.5}px ${ie*de*.5}px ${pe*.8}px rgba(0,0,0,0.08)`:"inset 0 8px 16px rgba(0,0,0,0.06)",he={type:"spring",stiffness:u._pullStiffness,damping:u._pullDamping,mass:u._pullMass},xe={type:"spring",stiffness:u._snapStiffness,damping:u._snapDamping,mass:u._snapMass},Je=le?{x:{type:"tween",duration:u.pullTweenDuration,ease:[u.pullEase.x1,u.pullEase.y1,u.pullEase.x2,u.pullEase.y2]},y:{type:"tween",duration:u.pullTweenDuration,ease:[u.pullEase.x1,u.pullEase.y1,u.pullEase.x2,u.pullEase.y2]},scale:he,boxShadow:{...he,duration:u.shadowTransitionDuration}}:p?{x:{type:"tween",duration:.12,ease:[u.dragEase.x1,u.dragEase.y1,u.dragEase.x2,u.dragEase.y2]},y:{type:"tween",duration:.12,ease:[u.dragEase.x1,u.dragEase.y1,u.dragEase.x2,u.dragEase.y2]},scale:xe,boxShadow:xe}:{x:xe,y:xe,scale:{...he,duration:u.scaleTransitionDuration},boxShadow:{...he,duration:u.shadowTransitionDuration}},Zn={"--dial-size":"clamp(220px, 64vw, 280px)","--face-size":"clamp(150px, 44vw, 190px)","--glow-size":"clamp(180px, 52vw, 220px)"};return D.jsxs("div",{className:"flex flex-col gap-8 items-center relative w-full mt-2",style:Zn,children:[D.jsx("p",{className:"font-['Spectral',serif] text-[24px] sm:text-[26px] text-center text-white w-72 leading-[1.2]",children:"What would you want to listen twin?"}),D.jsxs("div",{ref:oe,className:"relative flex items-center justify-center mt-0 touch-none cursor-pointer",style:{width:"var(--dial-size)",height:"var(--dial-size)"},onPointerDown:H,onPointerMove:Y,onPointerUp:k,onPointerCancel:k,onPointerEnter:()=>g(!0),onPointerLeave:()=>g(!1),children:[D.jsx("svg",{className:"absolute",width:"0",height:"0",children:D.jsxs("defs",{children:[D.jsxs("filter",{id:"tab-glow",x:"-50%",y:"-50%",width:"200%",height:"200%",children:[D.jsx("feGaussianBlur",{stdDeviation:"3",result:"blur"}),D.jsxs("feMerge",{children:[D.jsx("feMergeNode",{in:"blur"}),D.jsx("feMergeNode",{in:"SourceGraphic"})]})]}),D.jsxs("filter",{id:"tab-glow-active",x:"-50%",y:"-50%",width:"200%",height:"200%",children:[D.jsx("feGaussianBlur",{stdDeviation:"4",result:"blur"}),D.jsxs("feMerge",{children:[D.jsx("feMergeNode",{in:"blur"}),D.jsx("feMergeNode",{in:"blur"}),D.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]})}),D.jsx(ve.svg,{className:"absolute inset-0 w-full h-full pointer-events-none",viewBox:"0 0 280 280",animate:{opacity:Te?1:0},transition:{duration:u.tabStrokeDuration,ease:"easeInOut"},children:Qn.map((Ee,De)=>{const qe=De*45-90,_t=Kx(140,140,130,qe-20,qe+20),ut=y&&De===f,gt=j.includes(De),Rt=I&&gt,Gt=le&&De===te.moodIndex;return D.jsx(ve.path,{d:_t,fill:"none",strokeLinecap:"round",initial:{pathLength:0,opacity:0,strokeWidth:u.tabPathStrokeWidth,stroke:"rgba(255,255,255,0.3)"},animate:{pathLength:gt?1:0,opacity:gt?1:0,stroke:ut?"rgba(255,255,255,1)":Gt?"rgba(255,255,255,0.9)":Rt?"rgba(255,255,255,0.7)":"rgba(255,255,255,0.3)",strokeWidth:ut?u.tabPathStrokeWidthActive:Gt?u.tabPathStrokeWidthRubberBand:Rt?u.tabGlowStrokeWidth:u.tabPathStrokeWidth},transition:{pathLength:{duration:.4,ease:"easeOut"},opacity:{duration:.2},stroke:{duration:u.tabStrokeDuration,ease:"easeInOut"},strokeWidth:{duration:u.tabStrokeDuration,ease:"easeInOut"}},style:{filter:ut?"url(#tab-glow-active)":Rt||Gt?"url(#tab-glow)":"none"}},Ee.name)})}),D.jsx(ve.div,{className:"absolute rounded-full pointer-events-none",style:{width:"var(--glow-size)",height:"var(--glow-size)",background:"radial-gradient(circle, rgba(255,255,255,0.6) 0%, rgba(200,180,255,0.4) 40%, transparent 70%)"},initial:{opacity:0,scale:u.glowInitialScale},animate:{opacity:L?[0,1,.8]:0,scale:L?[u.glowInitialScale,u.glowPeakScale,u.glowFinalScale]:1.3,filter:L?"blur(0px)":"blur(20px)"},transition:{duration:L?u.glowDuration:u.glowFadeDuration,ease:"easeOut"}}),D.jsxs(ve.div,{animate:{x:N,y:ie,scale:p?u.dragScale:le?u.pullScale:l?u.nudgeScale:_?u.hoverScale:1,boxShadow:l?"0px 0px 40px 8px rgba(255,255,255,0.5), 0px 10px 30px rgba(0,0,0,0.15)":ue},transition:{...Je,scale:{...Je.scale,duration:u.scaleTransitionDuration}},className:"relative rounded-full flex items-center justify-center border-[5px] border-white overflow-hidden pointer-events-none",style:{width:"var(--face-size)",height:"var(--face-size)",backgroundColor:p?"#DFDCFF":"#EBE9FF",transition:"background-color 0.2s ease"},children:[D.jsx(ve.div,{className:"absolute inset-0 rounded-full pointer-events-none",animate:{boxShadow:Se},transition:{type:"spring",stiffness:u._innerShadowStiffness,damping:u._innerShadowDamping}}),D.jsxs("svg",{className:"w-full h-full",viewBox:"0 0 200 200",children:[D.jsx(ve.path,{d:ke.paths.lEye,stroke:"#2A2A2A",strokeWidth:"9",strokeLinecap:"round",fill:"none",initial:!1,animate:{d:ke.paths.lEye},transition:{type:"spring",stiffness:300,damping:25}}),D.jsx(ve.path,{d:ke.paths.rEye,stroke:"#2A2A2A",strokeWidth:"9",strokeLinecap:"round",fill:"none",initial:!1,animate:{d:ke.paths.rEye},transition:{type:"spring",stiffness:300,damping:25}}),D.jsx(ve.path,{d:ke.paths.mouth,stroke:"#2A2A2A",strokeWidth:"9",strokeLinecap:"round",fill:"none",initial:!1,animate:{d:ke.paths.mouth},transition:{type:"spring",stiffness:300,damping:25}})]})]})]}),D.jsx(ve.div,{className:"border border-white/50 backdrop-blur-sm py-[4px] rounded-[130px] mt-1 sm:mt-2 relative overflow-hidden h-[36px] sm:h-[40px] flex items-center justify-center",style:{width:y?160:"auto",paddingLeft:y?0:40,paddingRight:y?0:40},animate:{backgroundColor:`${r}1A`,boxShadow:`inset 4px 4px 4px ${r}59, 2px 2px 3px ${r}CC`},transition:{duration:.8,ease:"easeInOut"},children:D.jsx(Ja,{mode:"wait",children:y?D.jsx(ve.span,{className:"font-['Spectral',serif] text-[24px] text-white tracking-[0.24px]",initial:{opacity:0,filter:"blur(6px)"},animate:{opacity:1,filter:"blur(0px)"},exit:{opacity:0,filter:"blur(6px)"},transition:{duration:.12,ease:"easeOut"},children:ke.name},ke.name):D.jsx(ve.span,{className:"font-['Spectral',serif] text-[18px] text-white/40 tracking-[0.24px]",initial:{opacity:0,filter:"blur(6px)"},animate:{opacity:1,filter:"blur(0px)"},exit:{opacity:0,filter:"blur(6px)"},transition:{duration:.12,ease:"easeOut"},children:"Hold & drag to pick a mood"},"__initial__")})})]})}const Ta=7;function Zx({accentColor:n="#4A30F0",onValueChange:r}){const o={thumbSize:20,thumbPressedSize:26,springVisualDuration:.3,springBounce:.2,shadowIdleBlur:12,shadowPressedBlur:12,shadowPressedGlow:4,shadowIdleOpacity:.25,shadowPressedOpacity:.3,trackHeight:36,trackBorderRadius:30,trackBackdropBlur:2.2,dotSize:4.1,colorTransitionDuration:.4,gradientStartOpacity:.66,gradientMidOpacity:.6,gradientEndOpacity:.44},[l,u]=R.useState(0),[f,d]=R.useState(!1),p=R.useRef(null),m=A=>{u(A),r==null||r(A)},_=A=>{A.currentTarget.setPointerCapture(A.pointerId),d(!0),y(A)},g=A=>{A.currentTarget.hasPointerCapture(A.pointerId)&&y(A)},y=A=>{if(!p.current)return;const I=p.current.getBoundingClientRect(),F=Math.max(0,Math.min(A.clientX-I.left,I.width))/I.width,K=Ta/100,te=(F-K)/(1-2*K),Q=Math.max(0,Math.min(1,te)),$=Math.round(Q*3);m($)},x=A=>{A.currentTarget.releasePointerCapture(A.pointerId),d(!1)},b=A=>Ta+A/3*(100-2*Ta),T=A=>Math.round(A*255).toString(16).padStart(2,"0"),L=n+T(o.gradientStartOpacity),E=n+T(o.gradientMidOpacity),j=n+T(o.gradientEndOpacity);return D.jsxs("div",{className:"flex flex-col gap-1.5 sm:gap-2 w-full max-w-[360px] px-1 mb-1 sm:mb-2 mt-2 sm:mt-4",children:[D.jsxs("div",{ref:p,className:"relative h-12 w-full flex items-center cursor-pointer select-none touch-none",onPointerDown:_,onPointerMove:g,onPointerUp:x,onPointerCancel:()=>d(!1),children:[D.jsx(ve.div,{className:"absolute inset-x-0 top-1/2 -translate-y-1/2",animate:{background:`linear-gradient(135deg, ${L}, ${E}, ${j})`},transition:{duration:o.colorTransitionDuration,ease:[.4,0,.2,1]},style:{height:`${o.trackHeight}px`,borderRadius:`${o.trackBorderRadius}px`,padding:1},children:D.jsx("div",{className:"w-full h-full bg-white/20",style:{borderRadius:`${o.trackBorderRadius}px`,backdropFilter:`blur(${o.trackBackdropBlur}px)`}})}),[0,1,2,3].map(A=>D.jsx(ve.div,{className:"absolute top-1/2 rounded-full z-10",animate:{backgroundColor:n,x:"-50%",y:"-50%"},transition:{backgroundColor:{duration:o.colorTransitionDuration,ease:[.4,0,.2,1]}},style:{width:`${o.dotSize}px`,height:`${o.dotSize}px`,left:`${b(A)}%`}},A)),D.jsx(ve.div,{className:"absolute top-1/2 z-20 flex items-center justify-center rounded-full",initial:!1,animate:{left:`${b(l)}%`,x:"-50%",y:"-50%",backgroundColor:n,width:f?o.thumbPressedSize:o.thumbSize,height:f?o.thumbPressedSize:o.thumbSize,boxShadow:f?`0 0 ${o.shadowPressedBlur}px ${o.shadowPressedGlow}px ${n}${T(o.shadowPressedOpacity)}, 0 2px 8px rgba(0,0,0,0.3)`:`0 2px ${o.shadowIdleBlur}px rgba(0,0,0,${o.shadowIdleOpacity})`},transition:{left:{type:"spring",visualDuration:o.springVisualDuration,bounce:o.springBounce},x:{type:"spring",visualDuration:o.springVisualDuration,bounce:o.springBounce},width:{type:"spring",visualDuration:o.springVisualDuration,bounce:o.springBounce},height:{type:"spring",visualDuration:o.springVisualDuration,bounce:o.springBounce},backgroundColor:{duration:o.colorTransitionDuration,ease:[.4,0,.2,1]},boxShadow:{duration:o.colorTransitionDuration,ease:[.4,0,.2,1]}}})]}),D.jsxs("div",{className:"flex justify-between items-center text-white text-[14px] font-medium px-4 tracking-[0.14px]",children:[D.jsx("span",{children:"Underrated"}),D.jsx("span",{children:"Popular"})]})]})}const Fm="",Jx=["party","feel-good","soft","indie","nostalgic","sad","love","hiphop"];function Um(n){return n.includes("ab67616d0000b273")?n.replace("ab67616d0000b273","ab67616d00004851"):n}async function qx(n,r){const o=`${Fm}/api/get-song?mood=${encodeURIComponent(n)}&sliderValue=${encodeURIComponent(String(r))}`;let l;try{l=await fetch(o,{headers:{Accept:"application/json"},cache:"no-store"})}catch(d){const p=d instanceof Error?d.message:"Network error";throw new Error(`Failed to reach API at (same origin): ${p}`)}const u=l.headers.get("content-type")??"";let f=null;if(u.includes("application/json")?f=await l.json().catch(()=>null):f=await l.text().catch(()=>null),!l.ok){let d=typeof(f==null?void 0:f.error)=="string"?f.error:typeof f=="string"&&f.length>0?f:"Failed to fetch song.";throw typeof f=="string"&&/<html|<!doctype/i.test(f)&&(d=`Server error (${l.status}). Check API logs.`),new Error(d)}return f}async function e5(n,r=80){const o=`${Fm}/api/get-album-images?mood=${encodeURIComponent(n)}&limit=${encodeURIComponent(String(r))}`;let l;try{l=await fetch(o,{headers:{Accept:"application/json"}})}catch{return[]}const f=(l.headers.get("content-type")??"").includes("application/json")?await l.json().catch(()=>({})):{};return l.ok?(Array.isArray(f==null?void 0:f.images)?f.images:[]).filter(p=>typeof p=="string").map(p=>Um(p)):[]}async function t5(n=80){const r=await Promise.allSettled(Jx.map(async l=>{const u=await e5(l,n);return{mood:l,images:u}})),o=new Map;for(const l of r)l.status==="fulfilled"&&o.set(l.value.mood,l.value.images);return o}function Jp(n,r=20){const o=n.slice(0,r);return n.slice(r).forEach(u=>{const f=new Image;f.src=u}),Promise.all(o.map(u=>new Promise(f=>{const d=new Image;d.onload=()=>f(),d.onerror=()=>f(),d.src=u}))).then(()=>{})}const En="/assets/256b80c8e3feddbc7d9121f96f8a5007c5f523ae-FvoqZGWd.png",n5={cols:7,rows:9,tileSize:56,tileGap:14,rowGap:10,titleDelay:.15,titleDuration:.5,gridIntroDuration:.5,gridIntroBlur:2,enableCycling:!0,cycleMs:2200,cycleBuckets:4,heroSize:58},r5={cols:5,rows:7,tileSize:46,tileGap:10,rowGap:8,titleDelay:.08,titleDuration:.35,gridIntroDuration:.28,gridIntroBlur:0,enableCycling:!1,cycleMs:0,cycleBuckets:1,heroSize:50};function s5(n){let r=0;for(let o=0;o<n.length;o+=1)r=r*31+n.charCodeAt(o)|0;return Math.abs(r)}const qp=$0.memo(function({src:r,alt:o,className:l,loading:u="eager",style:f}){const[d,p]=R.useState(!1),[m,_]=R.useState(r),g=R.useRef(null);return R.useEffect(()=>{var y;(y=g.current)!=null&&y.complete&&g.current.naturalWidth>0&&p(!0)},[r]),R.useEffect(()=>{p(!1),_(r)},[r]),D.jsxs(D.Fragment,{children:[!d&&D.jsx("div",{className:"absolute inset-0 rounded-full",style:{background:"rgba(255,255,255,0.08)",animation:"pulse 1.6s ease-in-out infinite"}}),D.jsx("img",{ref:g,alt:o,className:l,src:m,loading:u,decoding:"async",onLoad:()=>p(!0),onError:()=>{m!==En&&_(En)},style:{...f,opacity:d?1:0,transition:"opacity 0.22s ease"}})]})});function o5({mood:n,popularity:r,images:o=[],highlightImageUrl:l,morph:u}){const[f,d]=R.useState(!1),[p,m]=R.useState(0);R.useEffect(()=>{var F;const E=navigator,j=window.matchMedia("(prefers-reduced-motion: reduce)").matches,A=((F=E.connection)==null?void 0:F.saveData)===!0,I=typeof E.deviceMemory=="number"&&E.deviceMemory<=4,O=typeof E.hardwareConcurrency=="number"&&E.hardwareConcurrency<=4;d(j||A||I||O)},[]);const _=f?r5:n5,g=_.cols*_.rows,{rows:y,hero:x,imagePool:b}=R.useMemo(()=>{const E=o.filter(Boolean),j=Array.from(new Set(E)),A=l??null,I=A?Um(A):null,O=j.filter(ae=>ae!==I),K=[...O.length>0?O:[En]].sort(()=>Math.random()-.5),te=[];for(let ae=0;ae<g;ae+=1)te.push(K[ae%K.length]);const Q=[];for(let ae=0;ae<te.length;ae+=_.cols){const fe=te.slice(ae,ae+_.cols);if(fe.length===0||(Q.push(fe),Q.length>=_.rows))break}Q.length===0&&Q.push([En]);let $=0,oe=0;if(I){const ae=s5(I);$=ae%Q.length,oe=Math.min(Math.floor(ae/Math.max(1,Q.length))%_.cols,Math.max(0,_.cols-1));const fe=Q[$]??[];fe[oe]=I,Q[$]=fe}return{rows:Q,hero:I?{rowIndex:$,colIndex:oe}:null,imagePool:K}},[o,l,g,_.cols,_.rows]);R.useEffect(()=>{m(0)},[b]),R.useEffect(()=>{if(!_.enableCycling||b.length<2)return;const E=window.setInterval(()=>{m(j=>j+1)},_.cycleMs);return()=>window.clearInterval(E)},[b.length,_.cycleMs,_.enableCycling]);const T=E=>{if(b.length===0)return En;if(!_.enableCycling||b.length<2)return b[E%b.length];const j=E%_.cycleBuckets,A=Math.floor((p+j)/_.cycleBuckets),I=(E+A)%b.length;return b[I]??En},L=_.enableCycling?p%_.cycleBuckets:-1;return D.jsxs("div",{className:"w-screen flex flex-col items-center flex-1 pt-[16px] sm:pt-[24px]",children:[D.jsx("style",{children:`
        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
      `}),D.jsx(ve.p,{className:"font-['Spectral',serif] text-[24px] text-center text-white leading-[28px] w-full px-6",initial:{opacity:0,y:8},animate:{opacity:1,y:0},transition:{duration:_.titleDuration,delay:_.titleDelay},children:"Recommending the perfect one from our hand picked collection"}),D.jsx(ve.div,{className:"flex-1 w-screen flex flex-col justify-center pointer-events-none mt-[24px] sm:mt-[42px] pb-4 sm:pb-6",style:{marginLeft:"calc(50% - 50vw)",marginRight:"calc(50% - 50vw)",gap:_.rowGap},initial:{opacity:.92,filter:`blur(${_.gridIntroBlur}px)`},animate:{opacity:1,filter:"blur(0px)"},transition:{duration:_.gridIntroDuration,ease:"easeOut"},children:y.map((E,j)=>D.jsx("div",{className:"relative w-screen flex justify-center items-center",children:D.jsx("div",{className:"flex justify-center",style:{gap:_.tileGap},children:E.map((A,I)=>{const O=j*_.cols+I;if(x&&j===x.rowIndex&&I===x.colIndex)return D.jsx("div",{className:"relative rounded-full shrink-0 overflow-visible",style:{width:_.heroSize,height:_.heroSize},children:D.jsx(ve.div,{className:"absolute inset-0 overflow-hidden",layoutId:"song-album",initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},style:{borderRadius:u.startRadius},transition:{layout:{...u.spring},opacity:{duration:.28,delay:.08},scale:{duration:.28,delay:.08}},children:D.jsx(qp,{src:A??En,alt:"Featured album cover",className:"absolute inset-0 max-w-none object-cover size-full",loading:"eager"})})},`hero-${j}-${I}`);const K=T(O),te=O%_.cycleBuckets,Q=_.enableCycling&&te===L;return D.jsx(ve.div,{className:"relative rounded-full shrink-0 overflow-hidden",style:{width:_.tileSize,height:_.tileSize,willChange:"transform, opacity"},animate:Q?{opacity:[.78,1],scale:[.985,1]}:{opacity:1,scale:1},transition:{duration:.22,ease:"easeOut"},children:D.jsx(qp,{src:K,alt:"Album cover art",className:"absolute inset-0 max-w-none object-cover size-full",loading:"lazy"})},`tile-${j}-${I}`)})})},`row-${j}`))})]})}const eh={p2d573100:"M15.6754 10.9669C12.5006 12.8523 7.26372 13.0257 4.23295 12.1058C3.74624 11.9581 3.23154 12.233 3.08411 12.7196C2.93659 13.2066 3.21105 13.7209 3.69813 13.8689C7.17725 14.9249 12.9608 14.721 16.6157 12.5514C17.0535 12.2914 17.1971 11.7261 16.9376 11.2891C16.6779 10.8513 16.1121 10.707 15.6754 10.9669ZM15.5714 8.1743C15.3487 7.81286 14.8761 7.69949 14.5151 7.92143C11.8683 9.54844 7.83221 10.0198 4.70078 9.06921C4.2947 8.94649 3.86578 9.17547 3.74243 9.58078C3.62007 9.98686 3.84915 10.415 4.2545 10.5385C7.8317 11.624 12.2787 11.0982 15.3188 9.23001C15.6797 9.00769 15.7934 8.5349 15.5714 8.1743ZM14.3662 5.49237C14.1892 5.2021 13.8113 5.11118 13.5221 5.2881C11.2093 6.70166 8.29811 7.02087 4.86971 6.23782C4.53933 6.16207 4.21006 6.36909 4.13472 6.69945C4.05905 7.02969 4.26529 7.35901 4.5964 7.4344C8.34819 8.29209 11.5665 7.92295 14.1625 6.3366C14.452 6.15982 14.5431 5.78171 14.3662 5.49237ZM9.84926 19.6984C4.40974 19.6984 0 15.2888 0 9.84936C0 4.40928 4.40974 0 9.84926 0C15.2889 0 19.6984 4.40928 19.6984 9.84936C19.6984 15.2888 15.2889 19.6984 9.84926 19.6984Z",p3810fe00:"M7.23729 17.3588C6.37826 16.987 5.62931 16.4817 4.99042 15.8428C4.35153 15.2039 3.84618 14.455 3.47438 13.5959C3.10257 12.737 2.91667 11.8161 2.91667 10.8332H4.16667C4.16667 12.4582 4.73264 13.8367 5.86458 14.9686C6.99653 16.1006 8.375 16.6666 10 16.6666C11.625 16.6666 13.0035 16.1006 14.1354 14.9686C15.2674 13.8367 15.8333 12.4582 15.8333 10.8332C15.8333 9.20822 15.2674 7.82975 14.1354 6.69781C13.0035 5.56586 11.625 4.99989 10 4.99989H9.77875L11.1025 6.32364L10.2244 7.22739L7.37188 4.36697L10.2404 1.50635L11.1185 2.4101L9.77875 3.74989H10C10.9829 3.74989 11.9038 3.93579 12.7627 4.3076C13.6217 4.6794 14.3707 5.18475 15.0096 5.82364C15.6485 6.46253 16.1538 7.21149 16.5256 8.07052C16.8974 8.9294 17.0833 9.85031 17.0833 10.8332C17.0833 11.8161 16.8974 12.737 16.5256 13.5959C16.1538 14.455 15.6485 15.2039 15.0096 15.8428C14.3707 16.4817 13.6217 16.987 12.7627 17.3588C11.9038 17.7307 10.9829 17.9166 10 17.9166C9.01708 17.9166 8.09618 17.7307 7.23729 17.3588Z"},i5=["underrated","moderate","well-known","popular"];function l5({mood:n,popularity:r,accentColor:o,onStartOver:l,song:u,error:f,morph:d}){var A;const p=i5[r]||"popular",m=(u==null?void 0:u.song_name)??"No song found",_=(A=u==null?void 0:u.artist)!=null&&A.length?u.artist.join(", "):"Unknown Artist",g=(u==null?void 0:u.album_name)??"Unknown album",y=(u==null?void 0:u.album_image)??En,x=(u==null?void 0:u.spotify_url)??null,b=!!f,T=R.useRef(null),L=R.useRef(null),[E,j]=R.useState(0);return R.useEffect(()=>{const I=T.current,O=L.current;if(I&&O){const F=I.scrollWidth-O.clientWidth;j(F>0?F:0)}},[_]),D.jsxs("div",{className:"w-full flex flex-col items-center justify-between flex-1",children:[D.jsxs("div",{className:"flex flex-col items-center gap-[20px] sm:gap-[32px] w-full mt-auto",children:[D.jsxs(ve.div,{className:"flex flex-col items-center w-full",initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{duration:.5,delay:.15},children:[D.jsx("p",{className:"font-['Spectral',serif] text-[24px] text-center text-white leading-[28px] w-full",children:b?"We couldn't fetch a song right now":D.jsxs(D.Fragment,{children:[`Here's a perfect ${p} `,D.jsx("br",{}),`${n} song for you`]})}),b&&D.jsx("p",{className:"text-[14px] text-white/70 text-center mt-2",children:f})]}),D.jsx("div",{className:"w-full",children:D.jsx("div",{className:"relative w-full aspect-square mx-auto overflow-hidden shadow-[0px_9px_14px_0px_rgba(19,15,41,0.5)]",style:{maxWidth:"min(100%, 76vw)",maxHeight:"min(320px, 36vh)",borderRadius:d.endRadius},children:D.jsx(ve.div,{className:"absolute inset-0 overflow-hidden",layoutId:"song-album",style:{borderRadius:d.endRadius},transition:{layout:{...d.spring}},children:D.jsx("img",{alt:g,className:"absolute inset-0 max-w-none object-cover size-full",src:y})})})}),D.jsxs(ve.div,{className:"flex flex-col items-center gap-[4px] w-full px-[24px]",initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{duration:.5,delay:.4},children:[D.jsx("p",{className:"font-['Spectral',serif] text-[24px] text-white tracking-[-0.96px] text-center overflow-hidden text-ellipsis whitespace-nowrap w-full leading-[28px]",children:m}),D.jsxs("div",{className:"flex flex-col items-center text-[16px] text-white/80 tracking-[-0.48px] w-full",children:[D.jsx("div",{ref:L,className:"overflow-hidden whitespace-nowrap w-full relative",style:{maskImage:E>0?"linear-gradient(to right, transparent, black 8%, black 92%, transparent)":void 0,WebkitMaskImage:E>0?"linear-gradient(to right, transparent, black 8%, black 92%, transparent)":void 0},children:D.jsxs(ve.span,{ref:T,className:"inline-block text-center w-full",style:{width:E>0?"auto":"100%"},animate:E>0?{x:[0,-E,0]}:{x:0},transition:E>0?{duration:Math.max(10,E/12),repeat:1/0,ease:"easeInOut",repeatDelay:2.5}:void 0,children:["by ",_]})}),D.jsxs("p",{className:"overflow-hidden text-center w-full whitespace-nowrap text-ellipsis",children:["From ",g]})]})]})]}),D.jsxs(ve.div,{className:"flex flex-col gap-[8px] items-center w-full mt-auto",initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{duration:.5,delay:.55},children:[D.jsxs(ve.a,{className:"w-full flex gap-[8px] items-center justify-center py-[12px] sm:py-[16px] rounded-[1000px] text-white cursor-pointer",animate:{backgroundColor:o},transition:{duration:.8,ease:"easeInOut"},whileTap:{scale:.98},href:x??void 0,target:x?"_blank":void 0,rel:x?"noopener noreferrer":void 0,"aria-disabled":!x,"aria-label":`Open ${m} on Spotify`,style:{opacity:x?1:.6,pointerEvents:x?"auto":"none"},children:[D.jsx("div",{className:"overflow-clip relative shrink-0 size-[20px]","aria-hidden":"true",children:D.jsx("svg",{className:"absolute block size-full",fill:"none",preserveAspectRatio:"none",viewBox:"0 0 19.6984 19.6984",role:"img","aria-label":"Spotify logo",style:{transform:"scaleY(-1)"},children:D.jsx("path",{d:eh.p2d573100,fill:"white"})})}),D.jsx("span",{className:"font-['Switzer',sans-serif] text-[16px] tracking-[-0.16px] whitespace-nowrap font-medium",children:"Add to Spotify"})]}),D.jsxs("button",{className:"w-full flex gap-[8px] items-center justify-center py-[12px] sm:py-[16px] rounded-[1000px] relative cursor-pointer bg-transparent",onClick:l,children:[D.jsx("div",{"aria-hidden":"true",className:"absolute border border-white/80 border-solid inset-0 pointer-events-none rounded-[1000px]"}),D.jsx("div",{className:"relative shrink-0 size-[20px]","aria-hidden":"true",children:D.jsxs("svg",{className:"absolute block size-full",fill:"none",preserveAspectRatio:"none",viewBox:"0 0 20 20",role:"img","aria-label":"Replay icon",children:[D.jsx("mask",{height:"20",id:"mask_replay",maskUnits:"userSpaceOnUse",style:{maskType:"alpha"},width:"20",x:"0",y:"0",children:D.jsx("rect",{fill:"#D9D9D9",height:"20",width:"20"})}),D.jsx("g",{mask:"url(#mask_replay)",children:D.jsx("path",{d:eh.p3810fe00,fill:"white",fillOpacity:"0.8"})})]})}),D.jsx("span",{className:"font-['Switzer',sans-serif] text-[16px] text-white/80 tracking-[-0.16px] whitespace-nowrap font-medium",children:"Start over"})]})]})]})}th();var a5=`svg[fill=none] {
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
}`,u5={popup:"styles-module__popup___IhzrD",enter:"styles-module__enter___L7U7N",entered:"styles-module__entered___COX-w",exit:"styles-module__exit___5eGjE",shake:"styles-module__shake___jdbWe",header:"styles-module__header___wWsSi",element:"styles-module__element___fTV2z",headerToggle:"styles-module__headerToggle___WpW0b",chevron:"styles-module__chevron___ZZJlR",expanded:"styles-module__expanded___2Hxgv",stylesWrapper:"styles-module__stylesWrapper___pnHgy",stylesInner:"styles-module__stylesInner___YYZe2",stylesBlock:"styles-module__stylesBlock___VfQKn",styleLine:"styles-module__styleLine___1YQiD",styleProperty:"styles-module__styleProperty___84L1i",styleValue:"styles-module__styleValue___q51-h",timestamp:"styles-module__timestamp___Dtpsv",quote:"styles-module__quote___mcMmQ",textarea:"styles-module__textarea___jrSae",actions:"styles-module__actions___D6x3f",cancel:"styles-module__cancel___hRjnL",submit:"styles-module__submit___K-mIR",deleteWrapper:"styles-module__deleteWrapper___oSjdo",deleteButton:"styles-module__deleteButton___4VuAE",light:"styles-module__light___6AaSQ"};if(typeof document<"u"){let n=document.getElementById("feedback-tool-styles-annotation-popup-css-styles");n||(n=document.createElement("style"),n.id="feedback-tool-styles-annotation-popup-css-styles",n.textContent=a5,document.head.appendChild(n))}var be=u5,c5=({size:n=24})=>D.jsx("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:D.jsx("path",{d:"M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4383 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z",fill:"currentColor"})}),Ea="__agentation_freeze";function d5(){if(typeof window>"u")return{frozen:!1,installed:!0,origSetTimeout:setTimeout,origSetInterval:setInterval,origRAF:r=>0,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]};const n=window;return n[Ea]||(n[Ea]={frozen:!1,installed:!1,origSetTimeout:null,origSetInterval:null,origRAF:null,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]}),n[Ea]}var Ge=d5();typeof window<"u"&&!Ge.installed&&(Ge.origSetTimeout=window.setTimeout.bind(window),Ge.origSetInterval=window.setInterval.bind(window),Ge.origRAF=window.requestAnimationFrame.bind(window),window.setTimeout=(n,r,...o)=>typeof n=="string"?Ge.origSetTimeout(n,r):Ge.origSetTimeout((...l)=>{Ge.frozen?Ge.frozenTimeoutQueue.push(()=>n(...l)):n(...l)},r,...o),window.setInterval=(n,r,...o)=>typeof n=="string"?Ge.origSetInterval(n,r):Ge.origSetInterval((...l)=>{Ge.frozen||n(...l)},r,...o),window.requestAnimationFrame=n=>Ge.origRAF(r=>{Ge.frozen?Ge.frozenRAFQueue.push(n):n(r)}),Ge.installed=!0);var kr=Ge.origSetTimeout;Ge.origSetInterval;R.forwardRef(function({element:r,timestamp:o,selectedText:l,placeholder:u="What should change?",initialValue:f="",submitLabel:d="Add",onSubmit:p,onCancel:m,onDelete:_,style:g,accentColor:y="#3c82f7",isExiting:x=!1,lightMode:b=!1,computedStyles:T},L){const[E,j]=R.useState(f),[A,I]=R.useState(!1),[O,F]=R.useState("initial"),[K,te]=R.useState(!1),[Q,$]=R.useState(!1),oe=R.useRef(null),ae=R.useRef(null),fe=R.useRef(null),ye=R.useRef(null);R.useEffect(()=>{x&&O!=="exit"&&F("exit")},[x,O]),R.useEffect(()=>{kr(()=>{F("enter")},0);const H=kr(()=>{F("entered")},200),Y=kr(()=>{const k=oe.current;k&&(k.focus(),k.selectionStart=k.selectionEnd=k.value.length,k.scrollTop=k.scrollHeight)},50);return()=>{clearTimeout(H),clearTimeout(Y),fe.current&&clearTimeout(fe.current),ye.current&&clearTimeout(ye.current)}},[]);const ke=R.useCallback(()=>{ye.current&&clearTimeout(ye.current),I(!0),ye.current=kr(()=>{var H;I(!1),(H=oe.current)==null||H.focus()},250)},[]);R.useImperativeHandle(L,()=>({shake:ke}),[ke]);const le=R.useCallback(()=>{F("exit"),fe.current=kr(()=>{m()},150)},[m]),Te=R.useCallback(()=>{E.trim()&&p(E.trim())},[E,p]),me=R.useCallback(H=>{H.nativeEvent.isComposing||(H.key==="Enter"&&!H.shiftKey&&(H.preventDefault(),Te()),H.key==="Escape"&&le())},[Te,le]),B=[be.popup,b?be.light:"",O==="enter"?be.enter:"",O==="entered"?be.entered:"",O==="exit"?be.exit:"",A?be.shake:""].filter(Boolean).join(" ");return D.jsxs("div",{ref:ae,className:B,"data-annotation-popup":!0,style:g,onClick:H=>H.stopPropagation(),children:[D.jsxs("div",{className:be.header,children:[T&&Object.keys(T).length>0?D.jsxs("button",{className:be.headerToggle,onClick:()=>{const H=Q;$(!Q),H&&kr(()=>{var Y;return(Y=oe.current)==null?void 0:Y.focus()},0)},type:"button",children:[D.jsx("svg",{className:`${be.chevron} ${Q?be.expanded:""}`,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:D.jsx("path",{d:"M5.5 10.25L9 7.25L5.75 4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),D.jsx("span",{className:be.element,children:r})]}):D.jsx("span",{className:be.element,children:r}),o&&D.jsx("span",{className:be.timestamp,children:o})]}),T&&Object.keys(T).length>0&&D.jsx("div",{className:`${be.stylesWrapper} ${Q?be.expanded:""}`,children:D.jsx("div",{className:be.stylesInner,children:D.jsx("div",{className:be.stylesBlock,children:Object.entries(T).map(([H,Y])=>D.jsxs("div",{className:be.styleLine,children:[D.jsx("span",{className:be.styleProperty,children:H.replace(/([A-Z])/g,"-$1").toLowerCase()}),": ",D.jsx("span",{className:be.styleValue,children:Y}),";"]},H))})})}),l&&D.jsxs("div",{className:be.quote,children:["“",l.slice(0,80),l.length>80?"...":"","”"]}),D.jsx("textarea",{ref:oe,className:be.textarea,style:{borderColor:K?y:void 0},placeholder:u,value:E,onChange:H=>j(H.target.value),onFocus:()=>te(!0),onBlur:()=>te(!1),rows:2,onKeyDown:me}),D.jsxs("div",{className:be.actions,children:[_&&D.jsx("div",{className:be.deleteWrapper,children:D.jsx("button",{className:be.deleteButton,onClick:_,type:"button",children:D.jsx(c5,{size:22})})}),D.jsx("button",{className:be.cancel,onClick:le,children:"Cancel"}),D.jsx("button",{className:be.submit,style:{backgroundColor:y,opacity:E.trim()?1:.4},onClick:Te,disabled:!E.trim(),children:d})]})]})});var f5=`svg[fill=none] {
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
}`;if(typeof document<"u"){let n=document.getElementById("feedback-tool-styles-page-toolbar-css-styles");n||(n=document.createElement("style"),n.id="feedback-tool-styles-page-toolbar-css-styles",n.textContent=f5,document.head.appendChild(n))}const p5="#5A54F2";function Ma(n,r){const o=parseInt(n.slice(1,3),16),l=parseInt(n.slice(3,5),16),u=parseInt(n.slice(5,7),16),f=m=>r>1?Math.round(m+(255-m)*(r-1)):Math.round(m*r),d=m=>Math.max(0,Math.min(255,m)),p=m=>d(m).toString(16).padStart(2,"0");return`#${p(f(o))}${p(f(l))}${p(f(u))}`}function h5(){const[n,r]=R.useState(null),[o,l]=R.useState(0),[u,f]=R.useState("mood"),[d,p]=R.useState(null),[m,_]=R.useState(null),[g,y]=R.useState(null),[x,b]=R.useState(!1),[T,L]=R.useState(!1),E={bgTransitionDuration:.5,bgBrightnessOffset:.22,screenFadeDuration:.6},j={startRadius:999,endRadius:32,spring:{type:"spring",stiffness:120,damping:24,mass:1}},A=R.useCallback(le=>{r(le)},[]),I=n&&Zp[n]?Zp[n]:{from:p5},O=1.2-o/3*.2,F=Ma(I.from,O),K=Ma(I.from,O),te=Ma(I.from,O+E.bgBrightnessOffset),Q=n??"__default__",$=R.useRef(new Map),[oe,ae]=R.useState([]),fe=R.useRef(null);R.useEffect(()=>{t5(80).then(le=>{$.current=le,n&&le.has(n)&&(ae(le.get(n)),y(n))}).catch(()=>{})},[]),R.useEffect(()=>{if(!n||fe.current===n)return;const le=$.current.get(n);le&&le.length>0&&(ae(le),y(n),Jp(le,20),fe.current=n)},[n]);const ye=R.useCallback(async()=>{if(!n)return;const le=n,Te=Math.round(o/3*100);_(null),p(null),f("loading");const me=3500;try{const B=new Promise(Y=>setTimeout(Y,me));if(g!==le||oe.length===0){const Y=$.current.get(le);Y&&Y.length>0&&(ae(Y),y(le),Jp(Y,20))}const H=await qx(le,Te);p(H),await B,f("result")}catch(B){const H=B instanceof Error?B.message:"Failed to fetch song.";_(H),await new Promise(Y=>setTimeout(Y,me)),f("result")}},[n,o,g,oe.length]),ke=()=>{f("mood"),p(null),_(null)};return D.jsxs("div",{className:"relative min-h-[100svh] overflow-hidden flex flex-col items-center justify-between font-['Inter',sans-serif]",style:{minHeight:"100dvh"},children:[null,D.jsx(Ja,{children:D.jsx(ve.div,{className:"absolute inset-0",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:E.bgTransitionDuration,ease:"easeInOut"}},Q)}),D.jsx(ve.div,{className:"absolute inset-0",animate:{background:`linear-gradient(to bottom, ${K}, ${te})`},transition:{duration:E.bgTransitionDuration,ease:"easeInOut"}}),D.jsxs("main",{className:"relative z-10 w-full min-h-[100svh] flex flex-col items-center justify-between px-[24px] pt-[calc(24px+env(safe-area-inset-top))] pb-[calc(24px+env(safe-area-inset-bottom))] overflow-hidden gap-6",style:{minHeight:"100dvh"},children:[D.jsxs("header",{className:"w-full flex justify-between items-center text-white/90 font-['Spectral',serif] text-[18px] tracking-wide shrink-0",children:[D.jsx("span",{className:"text-[#ffffff] text-[18px]",children:"songrec"}),D.jsx("span",{className:"text-white/90 text-[18px] text-[#ffffff]",children:"curated by tanuj"})]}),D.jsx(Fv,{children:D.jsx("div",{className:"relative flex-1 w-full",children:D.jsxs(Ja,{mode:"sync",children:[u==="mood"&&D.jsx(ve.div,{className:"absolute inset-0 flex flex-col items-center justify-between w-full",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:E.screenFadeDuration,ease:"easeInOut"},children:D.jsxs("div",{className:"w-full max-w-[400px] mx-auto flex flex-col items-center justify-between flex-1",children:[D.jsx("div",{className:"flex-1 flex flex-col items-center justify-center w-full mx-[0px] mt-[16px] mb-[0px]",children:D.jsx(Gx,{onMoodConfirmed:A,accentColor:F,selectedMood:n,nudge:x})}),D.jsxs("div",{className:"w-full flex flex-col items-center gap-4 mt-4 mb-2",children:[D.jsx(Zx,{accentColor:F,onValueChange:l}),D.jsx(ve.button,{className:"w-full text-white text-[18px] font-medium py-[14px] rounded-full transition-shadow duration-300 active:scale-[0.98] cursor-pointer",animate:{backgroundColor:F,boxShadow:`0 4px 12px ${F}4D`,x:T?[0,-8,8,-6,6,-3,3,0]:0},transition:{duration:.8,ease:"easeInOut",x:{duration:.5,ease:"easeInOut"}},onClick:()=>{if(!n){L(!0),b(!0),setTimeout(()=>{L(!1),b(!1)},800);return}ye()},"aria-disabled":!n,style:{opacity:n?1:.55,cursor:n?"pointer":"not-allowed"},children:"Recommend"})]})]})},"mood-screen"),u==="loading"&&D.jsx(ve.div,{className:"absolute inset-0 flex flex-col items-center w-full",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0,transition:{duration:.3,ease:"easeOut"}},transition:{duration:E.screenFadeDuration,ease:"easeIn"},children:D.jsx(o5,{mood:n||"indie",popularity:String(o),images:oe,highlightImageUrl:(d==null?void 0:d.album_image)??null,morph:j})},"loading-screen"),u==="result"&&D.jsx(ve.div,{className:"absolute inset-0 flex flex-col items-center w-full",initial:{opacity:1},animate:{opacity:1},exit:{opacity:0},transition:{duration:E.screenFadeDuration,ease:"easeOut"},children:D.jsx("div",{className:"w-full max-w-[400px] mx-auto flex flex-col items-center flex-1",children:D.jsx(l5,{mood:n||"indie",popularity:o,accentColor:F,onStartOver:ke,song:d,error:m,morph:j})})},"result-screen")]})})})]})]})}X0.createRoot(document.getElementById("root")).render(D.jsx(h5,{}));
