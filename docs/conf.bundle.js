!function(e){function t(t){for(var a,o,s=t[0],c=t[1],l=t[2],d=0,m=[];d<s.length;d++)o=s[d],n[o]&&m.push(n[o][0]),n[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);for(u&&u(t);m.length;)m.shift()();return i.push.apply(i,l||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],a=!0,s=1;s<r.length;s++){var c=r[s];0!==n[c]&&(a=!1)}a&&(i.splice(t--,1),e=o(o.s=r[0]))}return e}var a={},n={2:0},i=[];function o(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=a,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},o.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var s=window.webpackJsonp=window.webpackJsonp||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=c;i.push([30,0]),r()}([,,,function(e,t,r){"use strict";t.a={setMuteVideoTracks:function(e,t){e.getVideoTracks().forEach(e=>e.enabled=!t)},setMuteAudioTracks:function(e,t){e.getAudioTracks().forEach(e=>e.enabled=!t)},setMuteTrack:function(e,t){e.enabled=!t},stopStream:function(e){e.getTracks().forEach(e=>e.stop())},getUserDevices:async function(){const e={video:[],audio:[]},t=await navigator.mediaDevices.enumerateDevices();for(const r of t)"videoinput"===r.kind&&e.video.push(r),"audioinput"===r.kind&&e.audio.push(r);return e},getUserMedia:function({videoDeviceId:e,audioDeviceId:t},r){const a={video:{deviceId:e},audio:{deviceId:t}};return""===e&&(a.video=!1),""===t&&(a.audio=!1),["user","environment"].includes(r)&&(a.video.facingMode=r),navigator.mediaDevices.getUserMedia(a)},snapVideoStream:function(e,t="image/jpeg",r=1){return new Promise(a=>{let n=document.createElement("video");n.addEventListener("loadeddata",()=>{let e=document.createElement("canvas");e.width=n.videoWidth,e.height=n.videoHeight,e.getContext("2d").drawImage(n,0,0),e.toBlob(t=>{n.pause(),n.srcObject=null,n=e=null,a(t)},t,r)},{once:!0}),n.autoplay=n.muted=n.playsInline=!0,n.srcObject=e})},getFakeStream:function(e){const{stream:t}=e.createMediaStreamDestination();return t}}},function(e,t,r){"use strict";let a=null;t.a={getOsName:function(e){switch(!0){case/Android/.test(e):return"Android";case/iPhone|iPad|iPod/.test(e):return"iOS";case/Windows/.test(e):return"Windows";case/Mac OS X/.test(e):return"Mac";case/CrOS/.test(e):return"CromeOS";case/Firefox/.test(e):return"FirefoxOS";default:return""}},getBrowserName:function(e){switch(!0){case/CriOS/.test(e):return"iOSChrome";case/Edge/.test(e):return"Edge";case/Chrome/.test(e):return"Chrome";case/Firefox/.test(e):return"Firefox";case/MSIE|Trident/.test(e):return"IE";case/Safari\//.test(e):return"Safari";case/AppleWebKit/.test(e):return"Webkit";default:return""}},getAudioCtx:function(e){if(null!==a)return a;const t=new(e.webkitAudioContext||e.AudioContext);return a=t},setLocationHref:function(e){location.href=e}}},function(e,t,r){"use strict";var a=r(0),n=r.n(a);t.a=(({isMuted:e=!1})=>e?n.a.createElement("i",{className:"material-icons"},"mic_off"):n.a.createElement("i",{className:"material-icons"},"mic"))},function(e,t,r){"use strict";var a=r(0),n=r.n(a);t.a=(({isMuted:e=!1})=>e?n.a.createElement("i",{className:"material-icons"},"videocam_off"):n.a.createElement("i",{className:"material-icons"},"videocam"))},,function(e,t,r){"use strict";t.a={isValidRoomType:function(e){return"sfu"===e||"mesh"===e},isValidRoomName:function(e){return/^[0-9a-z_-]{4,32}$/.test(e)}}},function(e,t,r){"use strict";var a=r(0),n=r.n(a);t.a=(({isSpeaking:e=!1})=>n.a.createElement("i",{className:`material-icons ${e?"-speaking":"-not_speaking"}`},"equalizer"))},function(e,t,r){"use strict";t.a=class{constructor(e){this.store=e}$update(e,t){const[r,a]=e.split(".");if(!(r&&a&&r in this.store&&a in this.store[r]))throw new Error(`${r}.${a} is not defined!`);this.store[r][a]=t}}},function(e,t,r){"use strict";const a=window.Peer,n=window.ScreenShare;t.a={initPeer:function(){return new Promise((e,t)=>{const r=new a({key:"03ff6219-b58f-4310-9484-e9108e859cdd",debug:2});r.once("open",()=>{e(r),r.removeListener("error",t)}),r.once("error",t)})},isScreenShareAvailable:function(){return n.create().isScreenShareAvailable()},getScreenStreamTrack:function(e){return new Promise((t,r)=>{n.create().start(e).then(e=>t(e.getTracks()[0])).catch(r)})}}},function(e,t,r){"use strict";e.exports=function(e){var t=(e?e.ownerDocument||e:document).defaultView||window;return!(!e||!("function"==typeof t.Node?e instanceof t.Node:"object"==typeof e&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName))}},function(e,t,r){"use strict";var a=r(12);e.exports=function(e){return a(e)&&3==e.nodeType}},function(e,t,r){"use strict";var a=r(20);e.exports=function(e,t,r){r=r||{};var n={fftSize:1024,bufferLen:1024,smoothingTimeConstant:.2,minCaptureFreq:85,maxCaptureFreq:255,noiseCaptureDuration:1e3,minNoiseLevel:.3,maxNoiseLevel:.7,avgNoiseMultiplier:1.2,onVoiceStart:function(){},onVoiceStop:function(){},onUpdate:function(e){}},i={};for(var o in n)i[o]=r.hasOwnProperty(o)?r[o]:n[o];var s=0,c=1,l=0,u=0,d=60,m=5,h=[],p=!0,f=void 0,v=!1,S=null,g=e.createMediaStreamSource(t),b=e.createAnalyser();b.smoothingTimeConstant=i.smoothingTimeConstant,b.fftSize=i.fftSize;var E=e.createScriptProcessor(i.bufferLen,1,1);function y(){g.connect(b),b.connect(E),E.connect(e.destination)}function k(){E.disconnect(),b.disconnect(),g.disconnect()}return y(),E.onaudioprocess=function(){var e=new Uint8Array(b.frequencyBinCount);b.getByteFrequencyData(e);var t=a(b,e,i.minCaptureFreq,i.maxCaptureFreq);if(p)return void h.push(t);t>=s&&l<d?l++:t<s&&l>u&&l--;f!==(v=l>m)&&(v?i.onVoiceStart():i.onVoiceStop(),f=v);i.onUpdate(Math.max(0,t-s)/c)},p&&(S=setTimeout(function(){p=!1;var e=(h=h.filter(function(e){return e}).sort()).length?h.reduce(function(e,t){return Math.min(e,t)},1):i.minNoiseLevel||.1;s=e*i.avgNoiseMultiplier,i.minNoiseLevel&&s<i.minNoiseLevel&&(s=i.minNoiseLevel);i.maxNoiseLevel&&s>i.maxNoiseLevel&&(s=i.maxNoiseLevel);c=1-s},i.noiseCaptureDuration)),{connect:y,disconnect:k,destroy:function(){S&&clearTimeout(S),k(),E.onaudioprocess=null}}}},function(e,t,r){"use strict";function a(e){return function(){return e}}var n=function(){};n.thatReturns=a,n.thatReturnsFalse=a(!1),n.thatReturnsTrue=a(!0),n.thatReturnsNull=a(null),n.thatReturnsThis=function(){return this},n.thatReturnsArgument=function(e){return e},e.exports=n},function(e,t,r){"use strict";e.exports={}},function(e,t,r){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var a=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var a={};return"abcdefghijklmnopqrst".split("").forEach(function(e){a[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},a)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var r,o,s=function(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),c=1;c<arguments.length;c++){for(var l in r=Object(arguments[c]))n.call(r,l)&&(s[l]=r[l]);if(a){o=a(r);for(var u=0;u<o.length;u++)i.call(r,o[u])&&(s[o[u]]=r[o[u]])}}return s}},function(e,t){e.exports=function(e,t,r){return t<r?e<t?t:e>r?r:e:e<r?r:e>t?t:e}},function(e,t,r){var a=r(18);e.exports=function(e,t,r){var n=t/2,i=Math.round(e/n*r);return a(i,0,r)}},function(e,t,r){var a=r(19);function n(e,t,r,n,i){for(var o=t.context.sampleRate,s=t.frequencyBinCount,c=a(n,o,s),l=a(i,o,s),u=l-c,d=0;c<l;c++)d+=r[c]/e;return 0===u?0:d/u}e.exports=n.bind(null,255),e.exports.floatData=n.bind(null,1)},function(e,t){var r;r=function(){return this}();try{r=r||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(r=window)}e.exports=r},function(e,t){var r,a,n=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function s(e){if(r===setTimeout)return setTimeout(e,0);if((r===i||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:i}catch(e){r=i}try{a="function"==typeof clearTimeout?clearTimeout:o}catch(e){a=o}}();var c,l=[],u=!1,d=-1;function m(){u&&c&&(u=!1,c.length?l=c.concat(l):d=-1,l.length&&h())}function h(){if(!u){var e=s(m);u=!0;for(var t=l.length;t;){for(c=l,l=[];++d<t;)c&&c[d].run();d=-1,t=l.length}c=null,u=!1,function(e){if(a===clearTimeout)return clearTimeout(e);if((a===o||!a)&&clearTimeout)return a=clearTimeout,clearTimeout(e);try{a(e)}catch(t){try{return a.call(null,e)}catch(t){return a.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function f(){}n.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];l.push(new p(e,t)),1!==l.length||u||s(h)},p.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.versions={},n.on=f,n.addListener=f,n.once=f,n.off=f,n.removeListener=f,n.removeAllListeners=f,n.emit=f,n.prependListener=f,n.prependOnceListener=f,n.listeners=function(e){return[]},n.binding=function(e){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(e){throw new Error("process.chdir is not supported")},n.umask=function(){return 0}},function(e,t,r){"use strict";var a=r(13);e.exports=function e(t,r){return!(!t||!r)&&(t===r||!a(t)&&(a(r)?e(t,r.parentNode):"contains"in t?t.contains(r):!!t.compareDocumentPosition&&!!(16&t.compareDocumentPosition(r))))}},function(e,t,r){"use strict";var a=Object.prototype.hasOwnProperty;function n(e,t){return e===t?0!==e||0!==t||1/e==1/t:e!=e&&t!=t}e.exports=function(e,t){if(n(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var r=Object.keys(e),i=Object.keys(t);if(r.length!==i.length)return!1;for(var o=0;o<r.length;o++)if(!a.call(t,r[o])||!n(e[r[o]],t[r[o]]))return!1;return!0}},function(e,t,r){"use strict";e.exports=function(e){if(void 0===(e=e||("undefined"!=typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}},function(e,t,r){"use strict";var a=!("undefined"==typeof window||!window.document||!window.document.createElement),n={canUseDOM:a,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:a&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:a&&!!window.screen,isInWorker:!a};e.exports=n},function(e,t,r){var a;!function(n,i,o){if(n){for(var s,c={8:"backspace",9:"tab",13:"enter",16:"shift",17:"ctrl",18:"alt",20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"ins",46:"del",91:"meta",93:"meta",224:"meta"},l={106:"*",107:"+",109:"-",110:".",111:"/",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"},u={"~":"`","!":"1","@":"2","#":"3",$:"4","%":"5","^":"6","&":"7","*":"8","(":"9",")":"0",_:"-","+":"=",":":";",'"':"'","<":",",">":".","?":"/","|":"\\"},d={option:"alt",command:"meta",return:"enter",escape:"esc",plus:"+",mod:/Mac|iPod|iPhone|iPad/.test(navigator.platform)?"meta":"ctrl"},m=1;m<20;++m)c[111+m]="f"+m;for(m=0;m<=9;++m)c[m+96]=m.toString();g.prototype.bind=function(e,t,r){return e=e instanceof Array?e:[e],this._bindMultiple.call(this,e,t,r),this},g.prototype.unbind=function(e,t){return this.bind.call(this,e,function(){},t)},g.prototype.trigger=function(e,t){return this._directMap[e+":"+t]&&this._directMap[e+":"+t]({},e),this},g.prototype.reset=function(){return this._callbacks={},this._directMap={},this},g.prototype.stopCallback=function(e,t){return!((" "+t.className+" ").indexOf(" mousetrap ")>-1)&&(!function e(t,r){return null!==t&&t!==i&&(t===r||e(t.parentNode,r))}(t,this.target)&&("INPUT"==t.tagName||"SELECT"==t.tagName||"TEXTAREA"==t.tagName||t.isContentEditable))},g.prototype.handleKey=function(){return this._handleKey.apply(this,arguments)},g.addKeycodes=function(e){for(var t in e)e.hasOwnProperty(t)&&(c[t]=e[t]);s=null},g.init=function(){var e=g(i);for(var t in e)"_"!==t.charAt(0)&&(g[t]=function(t){return function(){return e[t].apply(e,arguments)}}(t))},g.init(),n.Mousetrap=g,void 0!==e&&e.exports&&(e.exports=g),void 0===(a=function(){return g}.call(t,r,t,e))||(e.exports=a)}function h(e,t,r){e.addEventListener?e.addEventListener(t,r,!1):e.attachEvent("on"+t,r)}function p(e){if("keypress"==e.type){var t=String.fromCharCode(e.which);return e.shiftKey||(t=t.toLowerCase()),t}return c[e.which]?c[e.which]:l[e.which]?l[e.which]:String.fromCharCode(e.which).toLowerCase()}function f(e){return"shift"==e||"ctrl"==e||"alt"==e||"meta"==e}function v(e,t,r){return r||(r=function(){if(!s)for(var e in s={},c)e>95&&e<112||c.hasOwnProperty(e)&&(s[c[e]]=e);return s}()[e]?"keydown":"keypress"),"keypress"==r&&t.length&&(r="keydown"),r}function S(e,t){var r,a,n,i=[];for(r=function(e){return"+"===e?["+"]:(e=e.replace(/\+{2}/g,"+plus")).split("+")}(e),n=0;n<r.length;++n)a=r[n],d[a]&&(a=d[a]),t&&"keypress"!=t&&u[a]&&(a=u[a],i.push("shift")),f(a)&&i.push(a);return{key:a,modifiers:i,action:t=v(a,i,t)}}function g(e){var t=this;if(e=e||i,!(t instanceof g))return new g(e);t.target=e,t._callbacks={},t._directMap={};var r,a={},n=!1,o=!1,s=!1;function c(e){e=e||{};var t,r=!1;for(t in a)e[t]?r=!0:a[t]=0;r||(s=!1)}function l(e,r,n,i,o,s){var c,l,u,d,m=[],h=n.type;if(!t._callbacks[e])return[];for("keyup"==h&&f(e)&&(r=[e]),c=0;c<t._callbacks[e].length;++c)if(l=t._callbacks[e][c],(i||!l.seq||a[l.seq]==l.level)&&h==l.action&&("keypress"==h&&!n.metaKey&&!n.ctrlKey||(u=r,d=l.modifiers,u.sort().join(",")===d.sort().join(",")))){var p=!i&&l.combo==o,v=i&&l.seq==i&&l.level==s;(p||v)&&t._callbacks[e].splice(c,1),m.push(l)}return m}function u(e,r,a,n){t.stopCallback(r,r.target||r.srcElement,a,n)||!1===e(r,a)&&(function(e){e.preventDefault?e.preventDefault():e.returnValue=!1}(r),function(e){e.stopPropagation?e.stopPropagation():e.cancelBubble=!0}(r))}function d(e){"number"!=typeof e.which&&(e.which=e.keyCode);var r=p(e);r&&("keyup"!=e.type||n!==r?t.handleKey(r,function(e){var t=[];return e.shiftKey&&t.push("shift"),e.altKey&&t.push("alt"),e.ctrlKey&&t.push("ctrl"),e.metaKey&&t.push("meta"),t}(e),e):n=!1)}function m(e,t,i,o){function l(t){return function(){s=t,++a[e],clearTimeout(r),r=setTimeout(c,1e3)}}function d(t){u(i,t,e),"keyup"!==o&&(n=p(t)),setTimeout(c,10)}a[e]=0;for(var m=0;m<t.length;++m){var h=m+1===t.length?d:l(o||S(t[m+1]).action);v(t[m],h,o,e,m)}}function v(e,r,a,n,i){t._directMap[e+":"+a]=r;var o,s=(e=e.replace(/\s+/g," ")).split(" ");s.length>1?m(e,s,r,a):(o=S(e,a),t._callbacks[o.key]=t._callbacks[o.key]||[],l(o.key,o.modifiers,{type:o.action},n,e,i),t._callbacks[o.key][n?"unshift":"push"]({callback:r,modifiers:o.modifiers,action:o.action,seq:n,level:i,combo:e}))}t._handleKey=function(e,t,r){var a,n=l(e,t,r),i={},d=0,m=!1;for(a=0;a<n.length;++a)n[a].seq&&(d=Math.max(d,n[a].level));for(a=0;a<n.length;++a)if(n[a].seq){if(n[a].level!=d)continue;m=!0,i[n[a].seq]=1,u(n[a].callback,r,n[a].combo,n[a].seq)}else m||u(n[a].callback,r,n[a].combo);var h="keypress"==r.type&&o;r.type!=s||f(e)||h||c(i),o=m&&"keydown"==r.type},t._bindMultiple=function(e,t,r){for(var a=0;a<e.length;++a)v(e[a],t,r)},h(e,"keypress",d),h(e,"keydown",d),h(e,"keyup",d)}}("undefined"!=typeof window?window:null,"undefined"!=typeof window?document:null)},,,function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),i=r(7),o=r.n(i),s=r(2),c=r(1),l=r(8);class u{constructor(){this.roomType="",this.roomName="",this.browser="",this.isAppReady=!1,this.isSettingOpen=!0,this.isInviteOpen=!1,this.isChatOpen=!1,this.isChatSending=!1,this.isRoomJoin=!1,this.isScreenSharing=!1,this.isScreenShareIntroOpen=!1,this.isScreenShareTriggerOpen=!1,this.isUserError=!1,this.isAppError=!1}get confUrl(){const e=`#!/${this.roomType}/${this.roomName}`;return`${location.origin}${location.pathname}${e}`}get isError(){return this.isUserError||this.isAppError}setRoom({roomType:e,roomName:t,browser:r}){l.a.isValidRoomName(t)&&l.a.isValidRoomType(e)?(this.roomType=e,this.roomName=t,this.browser=r):this.isUserError=!0}handleGetUserMediaError(e){switch(e.name){case"OverconstrainedError":case"NotFoundError":this.isAppError=!0;break;default:this.isUserError=!0}console.error(e)}handleAppError(e){this.isAppError=!0,console.error(e)}handleUserError(e){this.isUserError=!0,console.error(e)}}Object(c.f)(u,{roomType:c.k,roomName:c.k,browser:c.k,isAppReady:c.k,isSettingOpen:c.k,isInviteOpen:c.k,isChatOpen:c.k,isChatSending:c.k,isRoomJoin:c.k,isScreenSharing:c.k,isScreenShareIntroOpen:c.k,isScreenShareTriggerOpen:c.k,isUserError:c.k,isAppError:c.k,confUrl:c.c,isError:c.c});var d=u;class m{constructor(){this.peerId="YOUR_PEER_ID",this.dispName="YOUR_NAME",this.isVideoMuted=!1,this.isAudioMuted=!1,this.isSpeaking=!1,this.videoDeviceId="",this.audioDeviceId="",this.videoDevices=[],this.audioDevices=[]}get syncState(){return{peerId:this.peerId,dispName:this.dispName,isVideoMuted:this.isVideoMuted,isAudioMuted:this.isAudioMuted,isSpeaking:this.isSpeaking}}get isNoVideoDevices(){return 0===this.videoDevices.length}get isNoAudioDevices(){return 0===this.audioDevices.length}updateDevices({video:e,audio:t}){Object(c.m)(()=>{this.videoDevices=e,this.audioDevices=t,this._setDefaultDeviceIfNeeded()})}_setDefaultDeviceIfNeeded(){const e=this.videoDevices.find(e=>e.deviceId===this.videoDeviceId),t=this.audioDevices.find(e=>e.deviceId===this.audioDeviceId);Object(c.m)(()=>{!1===this.isNoVideoDevices&&(e||(this.videoDeviceId=this.videoDevices[0].deviceId)),!1===this.isNoAudioDevices&&(t||(this.audioDeviceId=this.audioDevices[0].deviceId))})}}Object(c.f)(m,{peerId:c.k,dispName:c.k,isVideoMuted:c.k,isAudioMuted:c.k,isSpeaking:c.k,videoDeviceId:c.k,audioDeviceId:c.k,videoDevices:c.k.ref,audioDevices:c.k.ref,syncState:c.c,isNoVideoDevices:c.c,isNoAudioDevices:c.c});var h=m;class p{constructor(){this.syncState=new Map,this.pinnedPeerId="",this.localVideoStreamTrack={},this.localScreenStreamTrack={},this.localAudioStreamTrack={},this.remoteStreams=[]}get localStream(){const e=new MediaStream;return this.localAudioStreamTrack instanceof MediaStreamTrack&&e.addTrack(this.localAudioStreamTrack),this.localScreenStreamTrack instanceof MediaStreamTrack?e.addTrack(this.localScreenStreamTrack):this.localVideoStreamTrack instanceof MediaStreamTrack&&e.addTrack(this.localVideoStreamTrack),e}get pinnedPeerIdDisp(){return 0!==this.pinnedPeerId.length?this.pinnedPeerId:0!==this.remoteStreams.length?this.remoteStreams[0].peerId:""}get pinnedStream(){const e=this.remoteStreams.find(e=>e.peerId===this.pinnedPeerIdDisp);return e||(0!==this.remoteStreams.length?this.remoteStreams[0]:null)}setLocalStream(e){const[t]=e.getVideoTracks(),[r]=e.getAudioTracks();Object(c.m)(()=>{this.localVideoStreamTrack=t,this.localAudioStreamTrack=r})}setScreenStreamTrack(e){e instanceof MediaStreamTrack?this.localScreenStreamTrack=e:(this.localScreenStreamTrack.stop(),this.localScreenStreamTrack={})}addRemoteStream(e){Object(c.m)(()=>{const t=this.remoteStreams.find(t=>t.peerId===e.peerId);this.removeRemoteStream(t),this.remoteStreams.push(e)})}removeRemoteStreamByPeerId(e){Object(c.m)(()=>{const t=this.remoteStreams.find(t=>t.peerId===e);this.removeRemoteStream(t),this.syncState.delete(e),this.pinnedPeerId===e&&(this.pinnedPeerId="")})}removeRemoteStream(e){e&&this.remoteStreams.remove(e)}}Object(c.f)(p,{syncState:c.k,pinnedPeerId:c.k,localVideoStreamTrack:c.k.ref,localScreenStreamTrack:c.k.ref,localAudioStreamTrack:c.k.ref,remoteStreams:c.k.shallow,localStream:c.c,pinnedPeerIdDisp:c.c,pinnedStream:c.c});var f=p;class v{constructor(){this.bufferText="",this.lastMessage={},this.messages=[]}addMessage({text:e,timestamp:t,peerId:r},a,n){this.messages.push({id:`${r}-${t}`,text:e,dispDate:new Date(t).toLocaleTimeString().slice(0,5),thumb:a,dispName:n})}updateBuffer(e){Object(c.m)(()=>{this.lastMessage=e,this.bufferText=""})}}Object(c.f)(v,{bufferText:c.k,lastMessage:c.k.ref,messages:c.k.shallow});var S=v;class g{constructor(){this.items=[]}showChat(e){this._show(`${e.dispName} sent a chat`)}showJoin(e){this._show(`${e.dispName} joined`)}showLeave(e){this._show(`${e.dispName} left`)}_show(e){const t={id:Date.now(),text:e};this.items.push(t),setTimeout(()=>this.items.remove(t),1e3)}}Object(c.f)(g,{items:c.k.shallow});var b=g;var E=class{constructor(){this.ui=new d,this.user=new h,this.room=new f,this.chat=new S,this.notification=new b}},y=r(27),k=r.n(y),w=r(14),N=r.n(w),_=r(10),O=r(3),M=r(11),T=r(4);var C=class extends _.a{constructor(e){super(e),this._destroyVad=null;const{user:t,room:r,ui:a}=this.store;Object(c.l)(()=>[t.videoDeviceId,t.audioDeviceId],async([e,n])=>{const i=await O.a.getUserMedia({videoDeviceId:e,audioDeviceId:n}).catch(e=>a.handleGetUserMediaError(e));a.isError||(r.localStream instanceof MediaStream&&O.a.stopStream(r.localStream),a.isAppReady=!0,t.isVideoMuted&&O.a.setMuteVideoTracks(i,!0),t.isAudioMuted&&O.a.setMuteAudioTracks(i,!0),r.setLocalStream(i))}),Object(c.l)(()=>t.isVideoMuted,e=>O.a.setMuteVideoTracks(r.localStream,e)),Object(c.l)(()=>t.isAudioMuted,e=>O.a.setMuteAudioTracks(r.localStream,e)),Object(c.l)(()=>t.dispName,e=>localStorage.setItem("SkyWayConf.dispName",e)),Object(c.l)(()=>r.localStream,e=>{this._destroyVad&&this._destroyVad();const{destroy:r}=N()(T.a.getAudioCtx(window),e,{onUpdate(e){t.isSpeaking=0!==e}});this._destroyVad=r}),Object(c.p)(()=>a.isAppReady,async()=>{const e=await O.a.getUserDevices().catch(e=>a.handleUserError(e));a.isError||t.updateDevices(e)})}async onLoad({roomType:e,roomName:t,browser:r}){const{user:a,ui:n,room:i}=this.store;n.setRoom({roomType:e,roomName:t,browser:r});const o=localStorage.getItem("SkyWayConf.dispName");o&&(a.dispName=o);const s=await O.a.getUserDevices().catch(e=>n.handleUserError(e));if(!n.isError){if(a.updateDevices(s),a.isNoVideoDevices&&a.isNoAudioDevices){n.isAppReady=!0;const e=O.a.getFakeStream(T.a.getAudioCtx(window));i.setLocalStream(e)}navigator.mediaDevices.ondevicechange=async function(){const e=await O.a.getUserDevices().catch(e=>n.handleUserError(e));n.isError||a.updateDevices(e)},k.a.bind(["command+e","ctrl+e"],()=>(a.isVideoMuted=!a.isVideoMuted,!1)),k.a.bind(["command+d","ctrl+d"],()=>(a.isAudioMuted=!a.isAudioMuted,!1))}}async onClickJoinRoom(){const{ui:e,room:t,user:r}=this.store,a=await M.a.initPeer().catch(t=>e.handleAppError(t));if(e.isError)return;a.on("error",t=>e.handleSkyWayPeerError(t)),r.peerId=a.id;const n=a.joinRoom(`${e.roomType}/${e.roomName}`,{mode:e.roomType,stream:t.localStream});this._onRoomJoin(n),e.isSettingOpen=!1}async onChatEnterKeyDown(){const{chat:e,user:t,room:r,ui:a}=this.store;if(a.isChatSending)return;if(0===e.bufferText.length)return;a.isChatSending=!0;const n=await O.a.snapVideoStream(r.localStream,"image/jpeg",.5).catch(e=>a.handleAppError(e));if(a.isError)return;const i={peerId:t.peerId,text:e.bufferText,blob:n,timestamp:Date.now()},o=URL.createObjectURL(n);e.addMessage(i,o,t.dispName),e.updateBuffer(i),a.isChatSending=!1}async startScreenShare(e){const{ui:t,room:r,user:a}=this.store;if(!1===M.a.isScreenShareAvailable())return void(t.isScreenShareIntroOpen=!0);let n;try{n=await M.a.getScreenStreamTrack({mediaSource:e})}catch(e){return e instanceof DOMException==0&&(t.isScreenShareIntroOpen=!0),void console.error(e)}n.addEventListener("ended",()=>this.stopScreenShare(),{once:!0}),a.isVideoMuted&&O.a.setMuteTrack(n,!0),r.setScreenStreamTrack(n),t.isScreenSharing=!0,t.isScreenShareTriggerOpen=!1}stopScreenShare(){const{ui:e,room:t}=this.store;t.setScreenStreamTrack(null),e.isScreenSharing=!1}_onRoomJoin(e){const{ui:t,user:r,room:a,chat:n}=this.store;t.isRoomJoin=!0,e.on("stream",t=>this._onRoomAddStream(t,e)),e.on("removeStream",e=>this._onRoomRemoveStream(e)),e.on("peerLeave",e=>this._onRoomPeerLeave(e)),e.on("data",e=>this._onRoomData(e)),Object(c.l)(()=>a.localStream,()=>e.replaceStream(a.localStream)),Object(c.l)(()=>r.syncState,t=>e.send({type:"sync",payload:t})),Object(c.l)(()=>n.lastMessage,t=>e.send({type:"chat",payload:t}))}_onRoomAddStream(e,t){const{room:r,user:a,notification:n}=this.store;r.addRemoteStream(e),t.send({type:"sync",payload:a.syncState}),Object(c.p)(()=>void 0!==r.syncState.get(e.peerId),()=>n.showJoin(r.syncState.get(e.peerId)))}_onRoomRemoveStream(e){const{room:t}=this.store;t.removeRemoteStream(e)}_onRoomPeerLeave(e){const{room:t,notification:r}=this.store,a=t.syncState.get(e);r.showLeave(a),t.removeRemoteStreamByPeerId(e)}_onRoomData({_src:e,data:t}){const{room:r,chat:a,ui:n,notification:i}=this.store,{type:o,payload:s}=t;switch(o){case"sync":r.syncState.set(s.peerId,s);break;case"chat":{const e=r.syncState.get(s.peerId),t=new Blob([new Uint8Array(s.blob)]),o=URL.createObjectURL(t);a.addMessage(s,o,e.dispName),n.isChatOpen||i.showChat(e);break}default:throw new Error(`${o} is not defined as message type`)}}};var I=()=>n.a.createElement("div",{className:"Loader"},n.a.createElement("img",{className:"Loader_Image",src:"./images/conf/icon-loading.svg",alt:"Loading"}));var D=Object(s.c)(({ui:e})=>n.a.createElement("div",{className:"Error"},n.a.createElement("div",{className:"Error_Title"},n.a.createElement("i",{className:"material-icons"},"error"),n.a.createElement("span",null,"Error")),e.isUserError&&n.a.createElement("div",{className:"Error_Desc"},n.a.createElement("p",null,"Please check your.."),n.a.createElement("ul",null,n.a.createElement("li",null,"current url(and hash)"),n.a.createElement("li",null,"camera or microphone settings"),n.a.createElement("li",null,"network conditions"),n.a.createElement("li",null,"browser updates"))),e.isAppError&&n.a.createElement("div",{className:"Error_Desc"},n.a.createElement("p",null,"Sorry, currently our service is not available. Please try it later."))));var j=Object(s.b)("ui","action")(Object(s.c)(class extends n.a.Component{render(){const{ui:e,children:t}=this.props;return e.isError?n.a.createElement(D,{ui:e}):e.isAppReady?t:n.a.createElement(I,null)}componentDidCatch(e){this.props.action.$update("ui.isAppError",!0),console.error(e)}}));var L=Object(s.c)(class extends n.a.Component{constructor(){super(),this._ref=null}render(){const{muted:e,isMirror:t,stream:r}=this.props;return n.a.createElement("video",{className:`Video ${t?"-reverse":""}`,ref:e=>{this._ref=e},muted:e,autoPlay:!0})}componentDidMount(){this._ref&&this.props.stream instanceof MediaStream&&(this._ref.srcObject=this.props.stream)}componentWillReact(){this._ref&&this.props.stream instanceof MediaStream&&(this._ref.srcObject=this.props.stream)}});var A=Object(s.c)(({room:e})=>n.a.createElement("div",{className:"ScreenVideo"},e.pinnedStream?n.a.createElement(L,{stream:e.pinnedStream,muted:!0}):null));var x=Object(s.b)("room")(Object(s.c)(({room:e})=>n.a.createElement(A,{room:e})));var V=class extends n.a.Component{constructor(){super(),this._ref=null,this._disposer=null,this._checkListWidth=this._checkListWidth.bind(this)}render(){return n.a.createElement("div",{className:"MemberList"},n.a.createElement("div",{className:"MemberList_Arrow -left"},n.a.createElement("i",{className:"material-icons"},"chevron_left")),n.a.createElement("div",{ref:e=>this._ref=e,className:"MemberList_Scroller"},this.props.children),n.a.createElement("div",{className:"MemberList_Arrow -right"},n.a.createElement("i",{className:"material-icons"},"chevron_right")))}componentDidMount(){const{room:e}=this.props;this._disposer=Object(c.l)(()=>e.remoteStreams.length,()=>this._checkListWidth(),{fireImmediately:!0,delay:500}),window.addEventListener("resize",this._checkListWidth)}componentWillUnmount(){this._disposer(),window.removeEventListener("resize",this._checkListWidth)}_checkListWidth(){parseInt(getComputedStyle(this._ref).width)<Array.from(this._ref.children).reduce((e,t)=>e+parseInt(getComputedStyle(t).width),0)?this._ref.parentElement.classList.add("-scrollable"):this._ref.parentElement.classList.remove("-scrollable")}},R=r(6),P=r(5);var U=Object(s.c)(({ui:e,room:t,user:r,action:a})=>n.a.createElement("div",{className:"MemberVideo"},n.a.createElement("div",{className:"MemberVideo_Name"},r.dispName),n.a.createElement("div",{className:"MemberVideo_Media"},n.a.createElement("button",{onClick:()=>a.$update("user.isVideoMuted",!r.isVideoMuted),title:r.isVideoMuted?"Unmute":"Mute"},n.a.createElement(R.a,{isMuted:r.isVideoMuted})),n.a.createElement("button",{onClick:()=>a.$update("user.isAudioMuted",!r.isAudioMuted),title:r.isAudioMuted?"Unmute":"Mute"},n.a.createElement(P.a,{isMuted:r.isAudioMuted}))),n.a.createElement("div",{className:"MemberVideo_Settings"},n.a.createElement("button",{onClick:()=>a.$update("ui.isSettingOpen",!0),title:"Open settings"},n.a.createElement("i",{className:"material-icons"},"settings"))),n.a.createElement(L,{stream:t.localStream,muted:!0,isMirror:!1===e.isScreenSharing}))),$=r(9);var F=Object(s.c)(({room:e,action:t})=>n.a.createElement(n.a.Fragment,null,e.remoteStreams.map(r=>{const a=e.syncState.get(r.peerId);return n.a.createElement("div",{key:r.id,className:"MemberVideo",onClick:()=>t.$update("room.pinnedPeerId",r.peerId)},e.pinnedPeerIdDisp===r.peerId&&n.a.createElement("div",{className:"MemberVideo_Pinned"}),a?n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"MemberVideo_Name"},a.dispName),n.a.createElement("div",{className:"MemberVideo_Media"},a.isVideoMuted&&n.a.createElement(R.a,{isMuted:!0}),a.isAudioMuted&&n.a.createElement(P.a,{isMuted:!0}),a.isSpeaking&&n.a.createElement($.a,{isSpeaking:!0}))):null,n.a.createElement(L,{stream:r}))})));var W=Object(s.c)(({action:e})=>n.a.createElement("div",{className:"MemberVideo"},n.a.createElement("a",{className:"MemberVideo_Invite",onClick:()=>e.$update("ui.isInviteOpen",!0)},n.a.createElement("i",{className:"material-icons -x15"},"person_add"))));var q=Object(s.b)("ui","room","user","action")(Object(s.c)(({ui:e,room:t,user:r,action:a})=>n.a.createElement(V,{room:t},n.a.createElement(U,{ui:e,room:t,user:r,action:a}),n.a.createElement(F,{room:t,action:a}),n.a.createElement(W,{action:a}))));var B=Object(s.c)(({isVisible:e,children:t})=>e?n.a.createElement("div",{className:"Popup"},t):null);var K=Object(s.c)(({ui:e,room:t})=>n.a.createElement(L,{stream:t.localStream,muted:!0,isMirror:!1===e.isScreenSharing}));var J=Object(s.c)(({ui:e,user:t,action:r})=>n.a.createElement("div",{className:"DeviceSelector"},n.a.createElement("div",{className:"DeviceSelector_Row"},n.a.createElement("div",{className:"DeviceSelector_Label"},"Cam"),n.a.createElement("select",{className:"DeviceSelector_Select",value:t.videoDeviceId,onChange:e=>r.$update("user.videoDeviceId",e.target.value),disabled:e.isScreenSharing||t.isNoVideoDevices},t.isNoVideoDevices&&n.a.createElement("option",{value:""},"Cam not found"),t.videoDevices.map((e,t)=>n.a.createElement("option",{key:e.deviceId,value:e.deviceId},e.label||`Cam ${t+1}`))),n.a.createElement("button",{onClick:()=>r.$update("user.isVideoMuted",!t.isVideoMuted),title:t.isVideoMuted?"Unmute":"Mute"},n.a.createElement(R.a,{isMuted:t.isVideoMuted}))),n.a.createElement("div",{className:"DeviceSelector_Row"},n.a.createElement("div",{className:"DeviceSelector_Label"},"Mic"),n.a.createElement("select",{className:"DeviceSelector_Select",value:t.audioDeviceId,onChange:e=>r.$update("user.audioDeviceId",e.target.value),disabled:e.isScreenSharing||t.isNoAudioDevices},t.isNoAudioDevices&&n.a.createElement("option",{value:""},"Mic not found"),t.audioDevices.map((e,t)=>n.a.createElement("option",{key:e.deviceId,value:e.deviceId},e.label||`Mic ${t+1}`))),n.a.createElement("button",{onClick:()=>r.$update("user.isAudioMuted",!t.isAudioMuted),title:t.isAudioMuted?"Unmute":"Mute"},n.a.createElement(P.a,{isMuted:t.isAudioMuted})),n.a.createElement("div",{className:"DeviceSelector_Va"},n.a.createElement($.a,{isSpeaking:t.isSpeaking}))),e.isScreenSharing&&n.a.createElement("p",{className:"DeviceSelector_Notice"},"You can not change devices during screen sharing.")));var z=Object(s.c)(({user:e,action:t})=>n.a.createElement("div",{className:"NameEdit"},n.a.createElement("div",{className:"NameEdit_Label"},"Name"),n.a.createElement("input",{className:"NameEdit_Input",type:"text",maxLength:10,value:e.dispName,onChange:e=>t.$update("user.dispName",e.target.value)})));var H=Object(s.b)("room","ui","user","action")(Object(s.c)(({room:e,ui:t,user:r,action:a})=>n.a.createElement(B,{isVisible:t.isSettingOpen},n.a.createElement("div",{className:"L-Setting"},n.a.createElement("div",{className:"L-Setting_Video"},n.a.createElement(K,{ui:t,room:e})),n.a.createElement(J,{ui:t,user:r,action:a}),n.a.createElement(z,{user:r,action:a}),n.a.createElement("div",{className:"L-Setting_Finish"},n.a.createElement("button",{onClick:e=>{t.isRoomJoin?a.$update("ui.isSettingOpen",!1):(e.target.disabled=!0)&&a.onClickJoinRoom()}},"OK"))))));var Y=Object(s.b)("ui","action")(Object(s.c)(({ui:e,action:t})=>n.a.createElement(B,{isVisible:e.isInviteOpen},n.a.createElement("div",{className:"L-Invite"},n.a.createElement("h3",{className:"L-Invite_Title"},"Share the link"),n.a.createElement("input",{type:"text",className:"L-Invite_Input",readOnly:!0,defaultValue:e.confUrl,onClick:e=>e.target.select(0,-1)}),n.a.createElement("div",{className:"L-Invite_Finish"},n.a.createElement("button",{onClick:()=>t.$update("ui.isInviteOpen",!1)},"Close"))))));var G=Object(s.b)("ui","action")(Object(s.c)(({ui:e,action:t})=>!e.isChatOpen&&n.a.createElement("button",{onClick:()=>t.$update("ui.isChatOpen",!0),title:"Open chat"},n.a.createElement("i",{className:"material-icons"},"chat"))));var X=Object(s.c)(class extends n.a.Component{constructor(){super(),this._ref=null}render(){const{chat:e}=this.props;return n.a.createElement("ul",{className:"ChatMessageList",ref:e=>this._ref=e},e.messages.map(e=>n.a.createElement("li",{key:e.id},n.a.createElement("div",{className:"ChatMessageList_Item"},n.a.createElement("div",{className:"ChatMessageList_Item_Thumb"},n.a.createElement("img",{className:"ChatMessageList_Item_Thumb_Image",src:e.thumb})),n.a.createElement("div",{className:"ChatMessageList_Item_Content"},n.a.createElement("div",{className:"ChatMessageList_Item_Content_Head"},n.a.createElement("span",{className:"ChatMessageList_Item_Content_HeadName"},e.dispName),n.a.createElement("span",{className:"ChatMessageList_Item_Content_HeadDate"},"at ",e.dispDate)),n.a.createElement("p",{className:"ChatMessageList_Item_Content_Body"},e.text))))))}componentWillReact(){this._ref&&requestAnimationFrame(()=>this._ref.scrollTop=this._ref.scrollHeight)}});var Q=Object(s.c)(({chat:e,action:t})=>n.a.createElement("div",{className:"ChatBox"},n.a.createElement("a",{className:"ChatBox_Closer",onClick:()=>t.$update("ui.isChatOpen",!1)},n.a.createElement("i",{className:"material-icons -x05"},"keyboard_arrow_right")),n.a.createElement(X,{chat:e}),n.a.createElement("input",{className:"ChatBox_Input",type:"text",placeholder:"Type messages here...",value:e.bufferText,onChange:e=>t.$update("chat.bufferText",e.target.value),onKeyDown:e=>13===e.keyCode&&t.onChatEnterKeyDown()})));var Z=Object(s.b)("ui","chat","action")(Object(s.c)(({ui:e,chat:t,action:r})=>n.a.createElement("div",{className:"L-ChatBox"},e.isChatOpen&&n.a.createElement(Q,{ui:e,chat:t,action:r}))));var ee=Object(s.c)(({ui:e,action:t})=>"Firefox"!==e.browser?n.a.createElement("button",{onClick:()=>t.startScreenShare(),title:"Start screen share"},n.a.createElement("i",{className:"material-icons"},"screen_share")):n.a.createElement(n.a.Fragment,null,n.a.createElement("button",{onClick:()=>t.$update("ui.isScreenShareTriggerOpen",!e.isScreenShareTriggerOpen),title:"Choose screen share media source"},n.a.createElement("i",{className:"material-icons"},"screen_share")),e.isScreenShareTriggerOpen&&n.a.createElement("div",{className:"ScreenShareTrigger_Items"},n.a.createElement("p",{className:"ScreenShareTrigger_Items_Desc"},"Share your..."),["window","screen","application"].map(e=>n.a.createElement("button",{key:e,onClick:()=>t.startScreenShare(e),title:`Share ${e}`},e)))));var te=Object(s.b)("ui","action")(Object(s.c)(({ui:e,action:t})=>e.isScreenSharing?n.a.createElement("button",{onClick:()=>t.stopScreenShare(),title:"Stop screen share"},n.a.createElement("i",{className:"material-icons"},"stop_screen_share")):n.a.createElement(ee,{ui:e,action:t})));var re=Object(s.b)("ui","action")(Object(s.c)(({ui:e,action:t})=>n.a.createElement(B,{isVisible:e.isScreenShareIntroOpen},n.a.createElement("div",{className:"L-ScreenShareIntro"},n.a.createElement("h3",{className:"L-ScreenShareIntro_Title"},"ScreenShare is not available"),n.a.createElement("p",{className:"L-ScreenShareIntro_Desc"},"Screen share is not supported on your browser. If you are using Chrome, please install"," ",n.a.createElement("a",{href:"https://chrome.google.com/webstore/detail/conf3-screenshare/ooeacgahemnciocfilnkchjjiakipakp",target:"_blank",rel:"noopener noreferrer"},"Chrome extension"),"."),n.a.createElement("div",{className:"L-ScreenShareIntro_Finish"},n.a.createElement("button",{onClick:()=>t.$update("ui.isScreenShareIntroOpen",!1)},"Close"))))));var ae=Object(s.c)(({notification:e})=>n.a.createElement(n.a.Fragment,null,e.items.map(e=>n.a.createElement("div",{className:"Toast",key:e.id},e.text))));var ne=Object(s.b)("notification")(Object(s.c)(({notification:e})=>n.a.createElement("div",{className:"L-Notification"},n.a.createElement(ae,{notification:e}))));var ie=()=>n.a.createElement(j,null,n.a.createElement("main",{className:"L-Main"},n.a.createElement(x,null),n.a.createElement(q,null)),n.a.createElement(H,null),n.a.createElement(Y,null),n.a.createElement("div",{className:"L-RightSide"},n.a.createElement(te,null),n.a.createElement(G,null)),n.a.createElement(Z,null),n.a.createElement(re,null),n.a.createElement(ne,null)),oe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e};!function(){const[,e,t]=location.hash.split("/"),r=T.a.getOsName(navigator.userAgent),a=T.a.getBrowserName(navigator.userAgent);if(!1===(["Windows","Mac","iOS","Android"].includes(r)&&["Chrome","Firefox","Safari"].includes(a))||"Safari"===a&&"mesh"!==e)return void(location.href="./not_supported.html");if(["iOS","Android"].includes(r))return void(location.href=`./conf_mobile.html${location.hash}`);const i=new E,c=new C(i);c.onLoad({roomType:e,roomName:t,browser:a}),o.a.render(n.a.createElement(s.a,oe({action:c},i),n.a.createElement(ie,null)),document.getElementById("app-root")),window.addEventListener("hashchange",()=>location.reload(!0))}()}]);