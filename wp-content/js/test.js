(()=>{var e,t,n,r,i,o,s={6209:(e,t,n)=>{"use strict";n.d(t,{Z:()=>k});var r=function(){if("undefined"!=typeof Map)return Map;function e(e,t){var n=-1;return e.some((function(e,r){return e[0]===t&&(n=r,!0)})),n}return function(){function t(){this.__entries__=[]}return Object.defineProperty(t.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(t){var n=e(this.__entries__,t),r=this.__entries__[n];return r&&r[1]},t.prototype.set=function(t,n){var r=e(this.__entries__,t);~r?this.__entries__[r][1]=n:this.__entries__.push([t,n])},t.prototype.delete=function(t){var n=this.__entries__,r=e(n,t);~r&&n.splice(r,1)},t.prototype.has=function(t){return!!~e(this.__entries__,t)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(e,t){void 0===t&&(t=null);for(var n=0,r=this.__entries__;n<r.length;n++){var i=r[n];e.call(t,i[1],i[0])}},t}()}(),i="undefined"!=typeof window&&"undefined"!=typeof document&&window.document===document,o="undefined"!=typeof window&&window.Math===Math?window:"undefined"!=typeof self&&self.Math===Math?self:"undefined"!=typeof window&&window.Math===Math?window:Function("return this")(),s="function"==typeof requestAnimationFrame?requestAnimationFrame.bind(o):function(e){return setTimeout((function(){return e(Date.now())}),1e3/60)};var a=["top","right","bottom","left","width","height","size","weight"],c="undefined"!=typeof MutationObserver,u=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(e,t){var n=!1,r=!1,i=0;function o(){n&&(n=!1,e()),r&&c()}function a(){s(o)}function c(){var e=Date.now();if(n){if(e-i<2)return;r=!0}else n=!0,r=!1,setTimeout(a,t);i=e}return c}(this.refresh.bind(this),20)}return e.prototype.addObserver=function(e){~this.observers_.indexOf(e)||this.observers_.push(e),this.connected_||this.connect_()},e.prototype.removeObserver=function(e){var t=this.observers_,n=t.indexOf(e);~n&&t.splice(n,1),!t.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},e.prototype.updateObservers_=function(){var e=this.observers_.filter((function(e){return e.gatherActive(),e.hasActive()}));return e.forEach((function(e){return e.broadcastActive()})),e.length>0},e.prototype.connect_=function(){i&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),c?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){i&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(e){var t=e.propertyName,n=void 0===t?"":t;a.some((function(e){return!!~n.indexOf(e)}))&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e}(),l=function(e,t){for(var n=0,r=Object.keys(t);n<r.length;n++){var i=r[n];Object.defineProperty(e,i,{value:t[i],enumerable:!1,writable:!1,configurable:!0})}return e},d=function(e){return e&&e.ownerDocument&&e.ownerDocument.defaultView||o},h=w(0,0,0,0);function f(e){return parseFloat(e)||0}function p(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return t.reduce((function(t,n){return t+f(e["border-"+n+"-width"])}),0)}function b(e){var t=e.clientWidth,n=e.clientHeight;if(!t&&!n)return h;var r=d(e).getComputedStyle(e),i=function(e){for(var t={},n=0,r=["top","right","bottom","left"];n<r.length;n++){var i=r[n],o=e["padding-"+i];t[i]=f(o)}return t}(r),o=i.left+i.right,s=i.top+i.bottom,a=f(r.width),c=f(r.height);if("border-box"===r.boxSizing&&(Math.round(a+o)!==t&&(a-=p(r,"left","right")+o),Math.round(c+s)!==n&&(c-=p(r,"top","bottom")+s)),!function(e){return e===d(e).document.documentElement}(e)){var u=Math.round(a+o)-t,l=Math.round(c+s)-n;1!==Math.abs(u)&&(a-=u),1!==Math.abs(l)&&(c-=l)}return w(i.left,i.top,a,c)}var v="undefined"!=typeof SVGGraphicsElement?function(e){return e instanceof d(e).SVGGraphicsElement}:function(e){return e instanceof d(e).SVGElement&&"function"==typeof e.getBBox};function m(e){return i?v(e)?function(e){var t=e.getBBox();return w(0,0,t.width,t.height)}(e):b(e):h}function w(e,t,n,r){return{x:e,y:t,width:n,height:r}}var y=function(){function e(e){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=w(0,0,0,0),this.target=e}return e.prototype.isActive=function(){var e=m(this.target);return this.contentRect_=e,e.width!==this.broadcastWidth||e.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var e=this.contentRect_;return this.broadcastWidth=e.width,this.broadcastHeight=e.height,e},e}(),_=function(e,t){var n,r,i,o,s,a,c,u=(r=(n=t).x,i=n.y,o=n.width,s=n.height,a="undefined"!=typeof DOMRectReadOnly?DOMRectReadOnly:Object,c=Object.create(a.prototype),l(c,{x:r,y:i,width:o,height:s,top:i,right:r+o,bottom:s+i,left:r}),c);l(this,{target:e,contentRect:u})},g=function(){function e(e,t,n){if(this.activeObservations_=[],this.observations_=new r,"function"!=typeof e)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=e,this.controller_=t,this.callbackCtx_=n}return e.prototype.observe=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(e instanceof d(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(e)||(t.set(e,new y(e)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(e instanceof d(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(e)&&(t.delete(e),t.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var e=this;this.clearActive(),this.observations_.forEach((function(t){t.isActive()&&e.activeObservations_.push(t)}))},e.prototype.broadcastActive=function(){if(this.hasActive()){var e=this.callbackCtx_,t=this.activeObservations_.map((function(e){return new _(e.target,e.broadcastRect())}));this.callback_.call(e,t,e),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),E="undefined"!=typeof WeakMap?new WeakMap:new r,O=function e(t){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=u.getInstance(),r=new g(t,n,this);E.set(this,r)};["observe","unobserve","disconnect"].forEach((function(e){O.prototype[e]=function(){var t;return(t=E.get(this))[e].apply(t,arguments)}}));const k=void 0!==o.ResizeObserver?o.ResizeObserver:O},30847:(e,t,n)=>{"use strict";async function r(e=".swiper-container",t={},r={}){const i={effect:"slide",grabCursor:!0,init:!0,initialSlide:0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{bulletElement:"button",clickable:!0,el:".swiper-pagination",type:"bullets"},preventClicks:!1,preventClicksPropagation:!1,releaseFormElements:!1,setWrapperSize:!0,threshold:5,touchStartPreventDefault:!1,on:Object.fromEntries(Object.entries(r||{}).map((([e,t])=>[e,function(){t(this)}])))},[{default:o}]=await Promise.all([Promise.all([n.e(958),n.e(390)]).then(n.t.bind(n,59101,23)),Promise.all([n.e(958),n.e(390)]).then(n.bind(n,89701))]);return new o(e,{...i,...t})}n.d(t,{Z:()=>r})},85575:(e,t,n)=>{"use strict";n.d(t,{D:()=>i});var r=n(65736);const __=r.__;function i(e,t,n){let i="";if(n<=5)for(let e=1;e<=n;e++){i+='<button class="'+`swiper-pagination-bullet${e===t?" swiper-pagination-bullet-active":""}`+'" tab-index="0" role="button" aria-label="'+(0,r.sprintf)(/* translators: placeholder is the the video number to navigate to */
__("Go to slide %s","jetpack"),e)+'"></button>'}else i+=`<div class="swiper-pagination-simple">${t} / ${n}</div>`;return i}},17766:(e,t,n)=>{"use strict";n.d(t,{$m:()=>u,HV:()=>l,UA:()=>c,Wj:()=>d});var r=n(81975);const i=16/9,o=.8,s=600,a="wp-block-jetpack-slideshow_autoplay-paused";function c(e){u(e),l(e),e.el.querySelector(".wp-block-jetpack-slideshow_button-pause").addEventListener("click",(function(){e.el&&(e.el.classList.contains(a)?(e.el.classList.remove(a),e.autoplay.start(),this.setAttribute("aria-label","Pause Slideshow")):(e.el.classList.add(a),e.autoplay.stop(),this.setAttribute("aria-label","Play Slideshow")))}))}function u(e){if(!e||!e.el)return;const t=e.el.querySelector('.swiper-slide[data-swiper-slide-index="0"] img');if(!t)return;const n=t.clientWidth/t.clientHeight,r=Math.max(Math.min(n,i),1),a="undefined"!=typeof window?window.innerHeight*o:s,c=Math.min(e.width/r,a),u=`${Math.floor(c)}px`,l=`${Math.floor(c/2)}px`;e.el.classList.add("wp-swiper-initialized"),e.wrapperEl.style.height=u,e.el.querySelector(".wp-block-jetpack-slideshow_button-prev").style.top=l,e.el.querySelector(".wp-block-jetpack-slideshow_button-next").style.top=l}function l(e){(e.slides||[]).forEach(((t,n)=>{t.setAttribute("aria-hidden",n===e.activeIndex?"false":"true"),n===e.activeIndex?t.setAttribute("tabindex","-1"):t.removeAttribute("tabindex")})),function(e){const t=e.slides[e.activeIndex];if(!t)return;const n=t.getElementsByTagName("FIGCAPTION")[0],i=t.getElementsByTagName("IMG")[0];e.a11y.liveRegion&&(e.a11y.liveRegion[0].innerHTML=n?n.innerHTML:(0,r.escapeHTML)(i.alt))}(e)}function d(e){(e.pagination.bullets||[]).forEach((t=>{t.addEventListener("click",(()=>{const t=e.slides[e.realIndex];setTimeout((()=>{t.focus()}),500)}))}))}},80425:(e,t,n)=>{"object"==typeof window&&window.Jetpack_Block_Assets_Base_Url&&(n.p=window.Jetpack_Block_Assets_Base_Url)},47701:e=>{"use strict";e.exports=window.wp.domReady},81975:e=>{"use strict";e.exports=window.wp.escapeHtml},65736:e=>{"use strict";e.exports=window.wp.i18n}},a={};function c(e){var t=a[e];if(void 0!==t)return t.exports;var n=a[e]={exports:{}};return s[e].call(n.exports,n,n.exports,c),n.exports}c.m=s,c.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return c.d(t,{a:t}),t},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,c.t=function(n,r){if(1&r&&(n=this(n)),8&r)return n;if("object"==typeof n&&n){if(4&r&&n.__esModule)return n;if(16&r&&"function"==typeof n.then)return n}var i=Object.create(null);c.r(i);var o={};e=e||[null,t({}),t([]),t(t)];for(var s=2&r&&n;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((e=>o[e]=()=>n[e]));return o.default=()=>n,c.d(i,o),i},c.d=(e,t)=>{for(var n in t)c.o(t,n)&&!c.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},c.f={},c.e=e=>Promise.all(Object.keys(c.f).reduce(((t,n)=>(c.f[n](e,t),t)),[])),c.u=e=>(390===e?"swiper":e)+".js?minify=false&ver="+{390:"db8f219deea56cfc144d",958:"81b24742f2e6fdfd299c"}[e],c.miniCssF=e=>"swiper.css?minify=false&ver=ec8bb6b572560ea05dfb",(()=>{if(!c.miniCssF)throw new Error("MiniCSSWithRTLPlugin was loaded before MiniCSSExtractPlugin");var e;c.miniCssF=(e=c.miniCssF,t=>{var n="rtl"===document.dir,r=e(t);return n?r.replace(/\.css(?:$|\?)/,".rtl$&"):r})})(),c.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),c.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n={},r="Jetpack:",c.l=(e,t,i,o)=>{if(n[e])n[e].push(t);else{var s,a;if(void 0!==i)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var d=u[l];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")==r+i){s=d;break}}s||(a=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.setAttribute("data-webpack",r+i),s.src=e),n[e]=[t];var h=(t,r)=>{s.onerror=s.onload=null,clearTimeout(f);var i=n[e];if(delete n[e],s.parentNode&&s.parentNode.removeChild(s),i&&i.forEach((e=>e(r))),t)return t(r)},f=setTimeout(h.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=h.bind(null,s.onerror),s.onload=h.bind(null,s.onload),a&&document.head.appendChild(s)}},c.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;c.g.importScripts&&(e=c.g.location+"");var t=c.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),c.p=e+"../"})(),i=e=>new Promise(((t,n)=>{var r=c.miniCssF(e),i=c.p+r;if(((e,t)=>{for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var i=(s=n[r]).getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(i===e||i===t))return s}var o=document.getElementsByTagName("style");for(r=0;r<o.length;r++){var s;if((i=(s=o[r]).getAttribute("data-href"))===e||i===t)return s}})(r,i))return t();((e,t,n,r)=>{var i=document.createElement("link");i.rel="stylesheet",i.type="text/css",i.onerror=i.onload=o=>{if(i.onerror=i.onload=null,"load"===o.type)n();else{var s=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=s,c.request=a,i.parentNode.removeChild(i),r(c)}},i.href=t,document.head.appendChild(i)})(e,i,t,n)})),o={72:0},c.f.miniCss=(e,t)=>{o[e]?t.push(o[e]):0!==o[e]&&{390:1}[e]&&t.push(o[e]=i(e).then((()=>{o[e]=0}),(t=>{throw delete o[e],t})))},(()=>{var e={72:0};c.f.j=(t,n)=>{var r=c.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else if(390!=t){var i=new Promise(((n,i)=>r=e[t]=[n,i]));n.push(r[2]=i);var o=c.p+c.u(t),s=new Error;c.l(o,(n=>{if(c.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var i=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;s.message="Loading chunk "+t+" failed.\n("+i+": "+o+")",s.name="ChunkLoadError",s.type=i,s.request=o,r[1](s)}}),"chunk-"+t,t)}else e[t]=0};var t=(t,n)=>{var r,i,[o,s,a]=n,u=0;if(o.some((t=>0!==e[t]))){for(r in s)c.o(s,r)&&(c.m[r]=s[r]);if(a)a(c)}for(t&&t(n);u<o.length;u++)i=o[u],c.o(e,i)&&e[i]&&e[i][0](),e[i]=0},n=globalThis.webpackChunkJetpack=globalThis.webpackChunkJetpack||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),(()=>{"use strict";c(80425)})(),(()=>{"use strict";var e=c(47701),t=c.n(e),n=c(6209),r=c(30847),i=c(85575),o=c(17766);"undefined"!=typeof window&&t()((function(){const e=document.getElementsByClassName("wp-block-jetpack-slideshow");Array.from(e).forEach((e=>{if("true"===e.getAttribute("data-jetpack-block-initialized"))return;const{autoplay:t,delay:s,effect:a}=e.dataset,c=window.matchMedia("(prefers-reduced-motion: reduce)").matches,u=t&&!c,l=e.getElementsByClassName("swiper-container")[0];let d=null;(0,r.Z)(l,{autoplay:!!u&&{delay:1e3*s,disableOnInteraction:!1},effect:a,init:!0,initialSlide:0,loop:!0,keyboard:{enabled:!0,onlyInViewport:!0},pagination:{el:".swiper-pagination",clickable:!0,type:"custom",renderCustom:i.D}},{init:o.UA,imagesReady:o.$m,paginationRender:o.Wj,transitionEnd:o.HV}).then((e=>{new n.Z((()=>{d&&(cancelAnimationFrame(d),d=null),d=requestAnimationFrame((()=>{(0,o.$m)(e),e.update()}))})).observe(e.el)})).catch((()=>{e.querySelector(".wp-block-jetpack-slideshow_container").classList.add("wp-swiper-initialized")})),e.setAttribute("data-jetpack-block-initialized","true")}))}))})()})();;
(()=>{var t={90055:(t,i,e)=>{"use strict";function o(t,i){return{default:{details:"mapbox://styles/automattic/cjolkhmez0qdd2ro82dwog1in",no_details:"mapbox://styles/automattic/cjolkci3905d82soef4zlmkdo"},black_and_white:{details:"mapbox://styles/automattic/cjolkixvv0ty42spgt2k4j434",no_details:"mapbox://styles/automattic/cjolkgc540tvj2spgzzoq37k4"},satellite:{details:"mapbox://styles/mapbox/satellite-streets-v10",no_details:"mapbox://styles/mapbox/satellite-v9"},terrain:{details:"mapbox://styles/automattic/cjolkf8p405fh2soet2rdt96b",no_details:"mapbox://styles/automattic/cjolke6fz12ys2rpbpvgl12ha"}}[t][i?"details":"no_details"]}e.d(i,{h:()=>o})},84634:(t,i,e)=>{"use strict";e.d(i,{YB:()=>n,b2:()=>o,k:()=>s,xt:()=>r,zb:()=>a});const o=t=>t.hasOwnProperty("lat")&&t.hasOwnProperty("lng")?t:{lat:t.latitude||0,lng:t.longitude||0};function n(t,i){const e=new t.LngLatBounds;return i.forEach((t=>{e.extend([t.coordinates.longitude,t.coordinates.latitude])})),e}function s(t,i){t.fitBounds(i,{padding:{top:80,bottom:80,left:40,right:40}})}function a(t,i){t.innerHTML=`\n\t\t<?xml version="1.0" encoding="UTF-8"?>\n\t\t<svg version="1.1" viewBox="0 0 32 38" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n\t\t\t<g fill-rule="evenodd">\n\t\t\t\t<path id="d" d="m16 38s16-11.308 16-22-7.1634-16-16-16-16 5.3076-16 16 16 22 16 22z" fill="${i}"/>\n\t\t\t</g>\n\t\t</svg>\n\t`}function r(t){return new t.Popup({closeButton:!0,closeOnClick:!1,offset:{left:[0,0],top:[0,5],right:[0,0],bottom:[0,-40]}})}},96442:(t,i,e)=>{"use strict";e.d(i,{E0:()=>l,ot:()=>a,rZ:()=>r});var o=e(85007);const n=6371e3;function s(t){return Math.abs(n*Math.cos(t*Math.PI/180)*2*Math.PI/256)}function a(t,i){return 512/Math.pow(2,t)*.5*s(i)}function r(t,i){return new Promise((e=>{if(i.mapkitScriptIsLoading)(0,o.Dz)(i,"mapkit").then((t=>{e(t)}));else{i.mapkitScriptIsLoading=!0;const n=t.createElement("script");n.addEventListener("load",(async()=>{const t=await(0,o.Dz)(i,"mapkit");i.mapkitScriptIsLoading=!1,e(t)}),{once:!0}),n.src="https://cdn.apple-mapkit.com/mk/5.x.x/mapkit.js",n.crossOrigin="anonymous",t.head.appendChild(n)}}))}function l(t,i,e){return new Promise(((i,o)=>{e.mapkitIsInitialized?i():e.mapkitIsInitializing?function(t){return new Promise(((i,e)=>{const o=()=>{void 0===t.mapkitIsInitializing?e():!1===t.mapkitIsInitializing?i():t.requestAnimationFrame(o)};o()}))}(e).then((()=>{i()})):(e.mapkitIsInitializing=!0,e.mapkitIsInitialized=!1,t.init({authorizationCallback:async t=>{try{const n=await fetch("https://public-api.wordpress.com/wpcom/v2/mapkit");if(200===n.status){t((await n.json()).wpcom_mapkit_access_token)}else o();e.mapkitIsInitializing=!1,e.mapkitIsInitialized=!0,i()}catch(t){o()}}}))}))}},51321:(t,i,e)=>{"use strict";e.d(i,{Z:()=>o});const o=(t,i=null)=>{if(i)t.style.height=i+"px";else{const i=t.offsetWidth,e=window.location.search.indexOf("map-block-counter")>-1?window.innerHeight:.8*window.innerHeight,o=Math.min(i*(3/4),e);t.style.height=o+"px"}}},24795:(t,i,e)=>{"use strict";e.d(i,{G:()=>o.Z,k:()=>n.Z});var o=e(49735),n=e(75867)},49735:(t,i,e)=>{"use strict";e.d(i,{Z:()=>c});var o=e(85007),n=e(24393),s=e(45388),a=e(90055),r=e(84634),l=e(51321);const c=class{constructor(t,i=(()=>{})){this.root=t;const{currentDoc:e,currentWindow:n}=(0,o.bL)(this.root);this.document=e,this.window=n,this.onError=i,this.mapStyle=this.root.getAttribute("data-map-style")||"default",this.mapDetails="true"===this.root.getAttribute("data-map-details"),this.apiKey=this.root.getAttribute("data-api-key")||null,this.scrollToZoom="true"===this.root.getAttribute("data-scroll-to-zoom"),this.showFullscreenButton="true"===this.root.getAttribute("data-show-fullscreen-button"),this.points=JSON.parse(this.root.getAttribute("data-points")||"[]"),this.mapCenter=JSON.parse(this.root.getAttribute("data-map-center")||"{}"),this.mapHeight=this.root.getAttribute("data-map-height")||null,this.markerColor=this.root.getAttribute("data-marker-color")||"red";const s=this.root.getAttribute("data-zoom");this.zoom=s&&s.length?parseInt(this.root.getAttribute("data-zoom"),10):13,this.activeMarker=null;const a=this.root.querySelector("ul");if(a&&(a.style.display="none"),!this.apiKey||!this.apiKey.length)throw new Error("API key missing")}initDOM(){this.root.innerHTML='<div class="wp-block-jetpack-map__gm-container"></div>',this.container=this.root.querySelector(".wp-block-jetpack-map__gm-container")}loadMapLibraries(){return new Promise((t=>{const i={"mapbox-gl-js":()=>{(0,o.Dz)(this.window,"mapboxgl").then((i=>{this.mapboxgl=i,i.accessToken=this.apiKey,t(i)}))}};(0,o.Pp)(s,i,this.root)}))}initMap(){try{this.map=new this.mapboxgl.Map({container:this.container,style:(0,a.h)(this.mapStyle,this.mapDetails),center:(0,r.b2)(this.mapCenter),zoom:this.zoom,pitchWithRotate:!1,attributionControl:!1,dragRotate:!1})}catch(t){return void this.onError("mapbox_error",t.message)}this.scrollToZoom||this.map.scrollZoom.disable(),this.showFullscreenButton&&this.map.addControl(new this.mapboxgl.FullscreenControl),this.map.on("error",(t=>{this.onError("mapbox_error",t.error.message)})),this.zoomControl=new this.mapboxgl.NavigationControl({showCompass:!1,showZoom:!0})}initInfoWindow(){this.infoWindowContent=this.document.createElement("div"),this.infoWindow=(0,r.xt)(this.mapboxgl),this.infoWindow.setDOMContent(this.infoWindowContent)}setBoundsByMarkers(){if(!this.map)return;if(this.map.dragPan.enable(),!this.points.length)return;if(this.activeMarker)return;const t=(0,r.YB)(this.mapboxgl,this.points);this.points.length>1?(0,r.k)(this.map,t):(this.map.setCenter(t.getCenter()),this.map.addControl(this.zoomControl))}sizeMap=()=>{(0,l.Z)(this.container,this.mapHeight),this.map.resize(),this.setBoundsByMarkers()};initMapSize(){this.setBoundsByMarkers(),this.debouncedSizeMap=(0,n.D)(this.sizeMap,250),this.debouncedSizeMap()}closeInfoWindow=()=>{this.activeMarker=null,this.infoWindow.remove()};initHandlers(){this.map.getCanvas().addEventListener("click",this.closeInfoWindow),window.addEventListener("resize",this.debouncedSizeMap)}showInfoWindow(t,i){const e=[i.coordinates.longitude,i.coordinates.latitude];this.activeMarker=t,this.infoWindowContent.innerHTML="<h3></h3><p></p>",this.infoWindowContent.querySelector("h3").textContent=i.title,this.infoWindowContent.querySelector("p").textContent=i.caption,this.infoWindow.setLngLat(e).addTo(this.map)}initMarkers(){this.points.forEach((t=>{const i=[t.coordinates.longitude,t.coordinates.latitude],e=this.document.createElement("div");e.className="wp-block-jetpack-map-marker";const o=new this.mapboxgl.Marker(e).setLngLat(i).setOffset([0,-19]).addTo(this.map);o.getElement().addEventListener("click",(()=>this.showInfoWindow(o,t))),(0,r.zb)(e,this.markerColor)}))}async init(){this.initDOM(),await this.loadMapLibraries(),this.initMap(),this.initInfoWindow(),this.initMapSize(),this.initHandlers(),this.initMarkers()}}},75867:(t,i,e)=>{"use strict";e.d(i,{Z:()=>a});var o=e(24393),n=e(96442),s=e(51321);const a=class{constructor(t){this.root=t,this.blog_id=this.root.getAttribute("data-blog-id"),this.center=JSON.parse(this.root.getAttribute("data-map-center")),this.points=JSON.parse(this.root.getAttribute("data-points")||"[]"),this.color=this.root.getAttribute("data-marker-color")||"red",this.zoom=parseFloat(this.root.getAttribute("data-zoom"))||10,this.scrollToZoom="true"===this.root.getAttribute("data-scroll-to-zoom"),this.mapStyle=this.root.getAttribute("data-map-style")||"default",this.mapHeight=this.root.getAttribute("data-map-height")||null,this.onError=()=>{}}async init(){this.initDOM(),await this.loadLibrary(),await this.fetchKey(),this.initMapSize(),this.initMap(),this.addPoints(),this.initHandlers()}initDOM(){this.root.innerHTML='<div class="wp-block-jetpack-map__mb-container"></div>',this.container=this.root.querySelector(".wp-block-jetpack-map__mb-container")}sizeMap=()=>{(0,s.Z)(this.container,this.mapHeight)};initMapSize(){this.debouncedSizeMap=(0,o.D)(this.sizeMap,250),this.sizeMap()}initHandlers(){window.addEventListener("resize",this.debouncedSizeMap)}loadLibrary(){return new Promise((t=>{(0,n.rZ)(document,window).then((i=>{this.mapkit=i,this.mapkit.addEventListener("error",(t=>{this.onError(t)})),t()}))}))}fetchKey(){return(0,n.E0)(this.mapkit,this.blog_id,window)}initMap(){const t=new this.mapkit.Coordinate(this.center.lat,this.center.lng),i=(()=>{switch(this.mapStyle){case"satellite":return this.mapkit.Map.MapTypes.Satellite;case"black_and_white":return this.mapkit.Map.MapTypes.MutedStandard;case"hybrid":return this.mapkit.Map.MapTypes.Hybrid;default:return this.mapkit.Map.MapTypes.Standard}})();this.map=new this.mapkit.Map(this.container,{center:t,mapType:i,showsMapTypeControl:!1}),this.points.length<2&&this.zoom&&this.setZoom(),this.scrollToZoom&&(this.map._allowWheelToZoom=!0)}setZoom(){this.map.cameraDistance=(0,n.ot)(this.zoom,this.center.lat)}addPoints(){const t=this.points.map((t=>{const i=new this.mapkit.Coordinate(t.coordinates.latitude,t.coordinates.longitude);return new this.mapkit.MarkerAnnotation(i,{color:this.color,title:t.title,callout:{calloutContentForAnnotation:function(t){const i=document.createElement("div");i.style.width=t.element.parentElement.offsetWidth/2+"px";const e=i.appendChild(document.createElement("div"));e.style.fontSize="17px",e.style.fontWeight="600",e.style.lineHeight="19px",e.style.marginTop="8px",e.textContent=t.title;const o=i.appendChild(document.createElement("p"));return o.style.fontSize="14px",o.style.margin="0px 0px 4px 0px",o.textContent=t.data?.caption,i}},calloutEnabled:!0,data:{caption:t.caption}})}));this.map.showItems(t)}}},85007:(t,i,e)=>{"use strict";function o(t){const i=t.ownerDocument;return{currentDoc:i,currentWindow:i.defaultView||i.parentWindow}}function n(t,i,n){let s;try{s=new URL("editor-assets",e.p)}catch(t){}if(!s)return;const a=s.href,{currentDoc:r}=o(n),l=r.getElementsByTagName("head")[0];t.forEach((t=>{const[e,o]=t.file.split("/").pop().split(".");if("css"===o){if(r.getElementById(t.id))return;const i=r.createElement("link");i.id=t.id,i.rel="stylesheet",i.href=`${a}/${e}-${t.version}.${o}`,l.appendChild(i)}if("js"===o){const n=i[t.id]?i[t.id]:null;if(r.getElementById(t.id))return n();const s=r.createElement("script");s.id=t.id,s.type="text/javascript",s.src=`${a}/${e}-${t.version}.${o}`,s.onload=n,l.appendChild(s)}}))}function s(t,i){return new Promise((e=>{const o=()=>{t[i]?e(t[i]):t.requestAnimationFrame(o)};o()}))}e.d(i,{Dz:()=>s,Pp:()=>n,bL:()=>o})},24393:(t,i,e)=>{"use strict";function o(t,i){let e;return function(...o){clearTimeout(e),e=setTimeout((()=>t.apply(this,o)),i)}}e.d(i,{D:()=>o})},80425:(t,i,e)=>{"object"==typeof window&&window.Jetpack_Block_Assets_Base_Url&&(e.p=window.Jetpack_Block_Assets_Base_Url)},47701:t=>{"use strict";t.exports=window.wp.domReady},45388:t=>{"use strict";t.exports=JSON.parse('[{"id":"mapbox-gl-js","file":"node_modules/mapbox-gl/dist/mapbox-gl.js","version":"1.13.0"},{"id":"mapbox-gl-css","file":"node_modules/mapbox-gl/dist/mapbox-gl.css","version":"1.13.0"}]')}},i={};function e(o){var n=i[o];if(void 0!==n)return n.exports;var s=i[o]={exports:{}};return t[o](s,s.exports,e),s.exports}e.n=t=>{var i=t&&t.__esModule?()=>t.default:()=>t;return e.d(i,{a:i}),i},e.d=(t,i)=>{for(var o in i)e.o(i,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:i[o]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),e.o=(t,i)=>Object.prototype.hasOwnProperty.call(t,i),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var i=e.g.document;if(!t&&i&&(i.currentScript&&(t=i.currentScript.src),!t)){var o=i.getElementsByTagName("script");o.length&&(t=o[o.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t+"../"})(),(()=>{"use strict";e(80425)})(),(()=>{"use strict";var t=e(47701),i=e.n(t),o=e(24795);i()((function(){Array.from(document.querySelectorAll(".wp-block-jetpack-map")).forEach((async t=>{try{if("mapkit"===t.getAttribute("data-map-provider")){const i=new o.k(t);i.onError=()=>{t.innerHtml="";new o.G(t).init()},i.init()}else{new o.G(t).init()}}catch(t){}}))}))})()})();;
(()=>{document.addEventListener("DOMContentLoaded",(()=>{t()}));const{__:__,_n:_n}=wp.i18n,e={
/* translators: text read by a screen reader when a warning icon is displayed in front of an error message. */
warning:__("Warning.","jetpack-forms"),
/* translators: error message shown when one or more fields of the form are invalid. */
invalidForm:__("Những thông tin này là bắt buộc.","jetpack-forms"),
/* translators: error message shown when a multiple choice field requires at least one option to be selected. */
checkboxMissingValue:__("Vui lòng chọn một lựa chọn.","jetpack-forms"),
/* translators: error message shown when a user enters an invalid date */
invalidDate:__("The date is not valid.","jetpack-forms"),
/* translators: text read by a screen reader when a form is being submitted */
submittingForm:__("Submitting form","jetpack-forms"),
/* translators: generic error message */
genericError:__("Please correct this field","jetpack-forms"),
/* translators: message displayed when errors need to be fixed. %d is the number of errors. */
errorCount:e=>_n("Bạn cần chỉnh sửa %d lỗi.","Bạn cần chỉnh sửa %d lỗi.",e,"jetpack-forms")},t=()=>{document.querySelectorAll(".wp-block-jetpack-contact-form-container form.contact-form").forEach(r)},r=e=>{e.hasAttribute("novalidate")||e.setAttribute("novalidate",!0);const t={hasInsetLabel:m(e)};let r={};const o=i=>{i.preventDefault(),a(e)||(L(e,r,t),n(e)?(r={},e.removeEventListener("submit",o),x(e)):r=j(e,t))};e.addEventListener("submit",o)},n=e=>{let t=e.checkValidity();if(!t)return!1;const r=f(e);for(const e of r)if(s(e)&&!d(e))return!1;const n=h(e);for(const e of n)if(!u(e))return!1;return t},a=e=>!0===e.getAttribute("data-submitting"),o=e=>"fieldset"===e.tagName.toLowerCase()&&e.classList.contains("grunion-checkbox-multiple-options"),i=e=>"fieldset"===e.tagName.toLowerCase()&&e.classList.contains("grunion-radio-options"),s=e=>e.hasAttribute("data-required"),c=e=>{return"input"===(t=e).tagName.toLowerCase()&&t.classList.contains("jp-contact-form-date")&&e.value?u(e):e.validity.valid;var t},l=e=>{const t=Array.from(e.querySelectorAll('input[type="radio"]'));return t.length>0&&t.every((e=>e.validity.valid))},d=e=>{if(!s(e))return!0;const t=Array.from(e.querySelectorAll('input[type="checkbox"]'));return t.length>0&&t.some((e=>e.checked))},u=t=>{const r=t.getAttribute("data-format"),n=t.value,a=window.jQuery;if(n&&r&&void 0!==a)try{a.datepicker.parseDate(r,n)}catch(r){return t.setCustomValidity(e.invalidDate),!1}return!0},m=e=>{const t=e.querySelector(".wp-block-jetpack-contact-form");if(!t)return!1;const r=t.classList;return r.contains("is-style-outlined")||r.contains("is-style-animated")},p=e=>e.querySelector('[type="submit"]')||e.querySelector('button:not([type="reset"])'),f=e=>Array.from(e.querySelectorAll(".grunion-checkbox-multiple-options")),h=e=>Array.from(e.querySelectorAll("input.jp-contact-form-date")),b=e=>{const t=C((e=>Array.from(e.elements).filter((e=>!["hidden","submit"].includes(e.type)&&null!==e.offsetParent)))(e)),r={simple:t.default,singleChoice:[],multipleChoice:[]},n=t.radios.reduce(((e,t)=>e.includes(t.name)?e:[...e,t.name]),[]);for(const t of n){const n=e.querySelector(`input[type="radio"][name="${t}"]`);if(n){const e=n.closest("fieldset");e&&r.singleChoice.push(e)}}const a=t.checkboxes.reduce(((e,t)=>e.includes(t.name)?e:[...e,t.name]),[]);for(const t of a){const n=e.querySelector(`input[type="checkbox"][name="${t}"]`);if(n){const e=n.closest("fieldset");e&&r.multipleChoice.push(e)}}return r},v=e=>e.querySelector(".contact-form__error"),y=e=>e.querySelectorAll("[aria-invalid]"),g=t=>{const r=document.createDocumentFragment();return r.appendChild((()=>{const t=document.createElement("span"),r=document.createElement("span"),n=document.createElement("i");return r.textContent=e.warning,r.classList.add("visually-hidden"),n.setAttribute("aria-hidden",!0),t.classList.add("contact-form__warning-icon"),t.appendChild(r),t.appendChild(n),t})()),r.appendChild((e=>{const t=document.createElement("span");return t.textContent=e,t})(t)),r},A=e=>{const t=document.createElement("div");return t.id=e,t.classList.add("contact-form__input-error"),t},C=e=>e.reduce(((e,t)=>{switch(t.type){case"radio":e.radios.push(t);break;case"checkbox":t.name.indexOf("[]")===t.name.length-2?e.checkboxes.push(t):e.default.push(t);break;default:e.default.push(t)}return e}),{default:[],radios:[],checkboxes:[]}),L=(e,t,r)=>{k(e,r);for(const r in t)e.querySelectorAll(`[name="${r}"]`).forEach((e=>e.removeEventListener(t[r][0],t[r][1])))},k=(e,t)=>{q(e),E(e,t)},q=e=>{const t=v(e);t&&t.replaceChildren()},E=(e,t)=>{for(const r of y(e))i(r)||o(r)?S(r):w(r,t)},S=e=>{e.removeAttribute("aria-invalid"),e.removeAttribute("aria-describedby");const t=e.querySelector(".contact-form__input-error");t&&t.replaceChildren()},w=(e,t)=>{e.removeAttribute("aria-invalid"),e.removeAttribute("aria-describedby");const r=e.closest(t.hasInsetLabel?".contact-form__inset-label-wrap":".grunion-field-wrap");if(!r)return;const n=r.querySelector(".contact-form__input-error");n&&n.replaceChildren()},x=e=>{_(e),e.setAttribute("data-submitting",!0),e.submit()},_=t=>{const r=p(t);r&&(r.setAttribute("aria-disabled",!0),r.appendChild((()=>{const t=document.createElement("span"),r=document.createElement("span"),n=document.createElement("span");return r.setAttribute("aria-hidden",!0),r.innerHTML='<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" opacity=".25"/><path d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z"><animateTransform attributeName="transform" type="rotate" dur="0.75s" values="0 12 12;360 12 12" repeatCount="indefinite"/></path></svg>',n.classList.add("visually-hidden"),n.textContent=e.submittingForm,t.classList.add("contact-form__spinner"),t.appendChild(r),t.appendChild(n),t})()))},j=(e,t)=>(N(e,t),M(e,t)),M=(e,t)=>{let r={};const n=()=>T(e);for(const c of y(e)){let l;l=i(c)&&(a=c,Array.from(a.querySelectorAll('input[type="radio"]')).some((e=>e.hasAttribute("required")||e.hasAttribute("aria-required"))))?$(c,n,e,t):o(c)&&s(c)?D(c,n,e,t):F(c,n,e,t),r={...r,...l}}var a;return r},$=(e,t,r,n)=>{const a={},o=()=>{l(e)?S(e):Z(e,r,n),t()},i=e.querySelectorAll('input[type="radio"]');for(const e of i)e.addEventListener("blur",o),e.addEventListener("change",o),a[e.name]=["blur",o],a[e.name]=["change",o];return a},D=(e,t,r,n)=>{const a={},o=()=>{d(e)?S(e):B(e,r,n),t()},i=e.querySelectorAll('input[type="checkbox"]');for(const e of i)e.addEventListener("blur",o),e.addEventListener("change",o),a[e.name]=["blur",o],a[e.name]=["change",o];return a},F=(e,t,r,n)=>{const a=e.validity.valueMissing,o={},i=()=>{c(e)?w(e,n):I(e,r,n),t()},s=()=>{e.validity.valueMissing?I(e,r,n):w(e,n),t()};return e.addEventListener("blur",i),o[e.name]=["blur",i],a&&(e.addEventListener("input",s),o[e.name]=["input",s]),o},N=(e,t)=>{const r=V(e,t);P(e,r)},P=(t,r,n={})=>{let a=v(t);if(!a){a=(()=>{const e=document.createElement("div");return e.classList.add("contact-form__error"),e})();const e=p(t);e?e.parentNode.insertBefore(a,e):t.appendChild(a)}const{disableLiveRegion:s}=n;s?(a.removeAttribute("aria-live"),a.removeAttribute("role")):(a.setAttribute("aria-live","assertive"),a.setAttribute("role","alert"));const c=r.length,l=[e.invalidForm];c>0&&l.push(e.errorCount(c).replace("%d",c)),a.appendChild(g(l.join(" "))),c>0&&a.appendChild(((e,t)=>{const r=document.createElement("ul");for(const n of t){const t=n.id;if(!t)continue;let a;if(a=o(n)||i(n)?n.querySelector("legend"):e.querySelector(`label[for="${t}"]`),!a)continue;const s=document.createElement("li"),c=document.createElement("a");c.textContent=a.innerText,c.setAttribute("href",`#${t}`),s.appendChild(c),r.appendChild(s)}return r})(t,r))},T=e=>{q(e),n(e)||P(e,y(e),{disableLiveRegion:!0})},V=(e,t)=>{const r=[],{simple:n,singleChoice:a,multipleChoice:o}=b(e);for(const a of n)c(a)||(I(a,e,t),r.push(a));for(const n of a)l(n)||(Z(n,e,t),r.push(n));for(const n of o)d(n)||(B(n,e,t),r.push(n));return r},I=(e,t,r)=>{const n=`${e.id}-error`;let a=t.querySelector(`#${n}`);if(!a){a=A(n);const t=e.closest(r.hasInsetLabel?".contact-form__inset-label-wrap":".grunion-field-wrap");t&&t.appendChild(a)}a.replaceChildren(g(e.validationMessage)),e.setAttribute("aria-invalid","true"),e.setAttribute("aria-describedby",n)},Z=(e,t,r)=>{O(e,t,r)},B=(t,r,n)=>{O(t,r,{...n,message:e.checkboxMissingValue})},O=(t,r,n)=>{const a=t.querySelector("input");if(!a)return;const o=`${a.name.replace("[]","")}-error`;let i=r.querySelector(`#${o}`);i||(i=A(o)),i.replaceChildren(g(a.validationMessage||n.message||e.genericError)),t.appendChild(i),t.setAttribute("aria-invalid","true"),t.setAttribute("aria-describedby",o)}})();;
// listen for rlt authentication events and pass them to children of this document.
( function() {
	var currentToken;
	var parentOrigin;
	var iframeOrigins;
	var initializationListeners = [];
	var hasBeenInitialized = false;
	var RLT_KEY = 'jetpack:wpcomRLT';

	// IE11 compat version that doesn't require on `new URL( src )`
	function getOriginFromUrl( url ) {
		var parser = document.createElement('a');
		parser.href = url;
		return parser.origin;
	}

	// run on `load` for suitable iframes, this injects the current token if available
	function rltIframeInjector( event ) {
		if ( ! currentToken ) {
			return;
		}
		rltInjectToken( currentToken, event.target.contentWindow, getOriginFromUrl( event.target.src ) );
	}

	// run on DOMContentLoaded or later
	function rltMonitorIframes() {
		// wait until suitable iframes are loaded before trying to inject the RLT
		var iframes = document.querySelectorAll( "iframe" );
		for( var i=0; i<iframes.length; i++ ) {
			var iframe = iframes[i];
			if ( rltShouldAuthorizeIframe( iframe ) ) {
				iframe.addEventListener('load', rltIframeInjector);
			}
		}

		// listen for newly-created iframes, since some are injected dynamically
		var observer = new MutationObserver(function( mutationsList, observer ) {
			for(var i=0; i<mutationsList.length; i++) {
				var mutation = mutationsList[i];
				if (mutation.type === 'childList') {
					for(var j=0; j<mutation.addedNodes.length; j++) {
						var node = mutation.addedNodes[j];
						if (node instanceof HTMLElement && node.nodeName === 'IFRAME' && rltShouldAuthorizeIframe(node)) {
							node.addEventListener('load', rltIframeInjector);
						}
					}
				}
			}
		});

		observer.observe(document.body, { subtree: true, childList: true });
	}

	// should we inject RLT into this iframe?
	function rltShouldAuthorizeIframe( iframe ) {
		if ( ! Array.isArray( iframeOrigins ) ) {
			return;
		}
		return iframeOrigins.indexOf( getOriginFromUrl( iframe.src ) ) >= 0;
	}

	function rltInvalidateWindowToken( token, target, origin ) {
		if ( target && typeof target.postMessage === 'function' ) {
			try {
				target.postMessage( JSON.stringify( {
					type: 'rltMessage',
					data: {
						event: 'invalidate',
						token: token,
						sourceOrigin: window.location.origin,
					},
				} ), origin );
			} catch ( err ) {
				return;
			}
		}
	}

	/**
	 * PUBLIC METHODS
	 */
	window.rltInvalidateToken = function( token, sourceOrigin ) {
		// invalidate in current context
		if ( token === currentToken ) {
			currentToken = null;
		}

		// remove from localstorage, but only if in a top level window, not iframe
		try {
			if ( window.location === window.parent.location && window.localStorage ) {
				if ( window.localStorage.getItem(RLT_KEY) === token ) {
					window.localStorage.removeItem(RLT_KEY);
				}
			}
		} catch( e ) {
			console.info("localstorage access for invalidate denied - probably blocked third-party access", window.location.href);
		}

		// invalidate in iframes
		var iframes = document.querySelectorAll("iframe");
		for( var i=0; i<iframes.length; i++ ) {
			var iframe = iframes[i];
			var iframeOrigin = getOriginFromUrl( iframe.src );
			if ( iframeOrigin !== sourceOrigin && rltShouldAuthorizeIframe( iframe ) ) {
				rltInvalidateWindowToken( token, iframe.contentWindow, iframeOrigin );
			}
		}

		// invalidate in parent
		if ( parentOrigin && parentOrigin !== sourceOrigin && window.parent ) {
			rltInvalidateWindowToken( token, window.parent, parentOrigin );
		}
	}

	window.rltInjectToken = function( token, target, origin ) {
		if ( target && typeof target.postMessage === 'function' ) {
			try {
				target.postMessage( JSON.stringify( {
					type: 'loginMessage',
					data: {
						event: 'login',
						success: true,
						type: 'rlt',
						token: token,
						sourceOrigin: window.location.origin,
					},
				} ), origin );
			} catch ( err ) {
				return;
			}
		}
	};

	window.rltIsAuthenticated = function() {
		return !! currentToken;
	};

	window.rltGetToken = function() {
		return currentToken;
	};

	window.rltAddInitializationListener = function( listener ) {
		// if RLT is already initialized, call the listener immediately
		if ( hasBeenInitialized ) {
			listener( currentToken );
		} else {
			initializationListeners.push( listener );
		}
	};

	// store the token in localStorage
	window.rltStoreToken = function( token ) {
		currentToken = token;
		try {
			if ( window.location === window.parent.location && window.localStorage ) {
				window.localStorage.setItem( RLT_KEY, token );
			}
		} catch( e ) {
			console.info("localstorage access denied - probably blocked third-party access", window.location.href);
		}
	}

	window.rltInitialize = function( config ) {
		if ( ! config || typeof window.postMessage !== 'function' ) {
			return;
		}

		currentToken  = config.token;
		iframeOrigins = config.iframeOrigins;
		parentOrigin  = config.parentOrigin; // needed?

		// load token from localStorage if possible, but only in top level window
		try {
			if ( ! currentToken && window.location === window.parent.location && window.localStorage ) {
				currentToken = window.localStorage.getItem(RLT_KEY);
			}
		} catch( e ) {
			console.info("localstorage access denied - probably blocked third-party access", window.location.href);
		}

		// listen for RLT events from approved origins
		window.addEventListener( 'message', function( e ) {
			var message = e && e.data;
			if ( typeof message === 'string' ) {
				try {
					message = JSON.parse( message );
				} catch ( err ) {
					return;
				}
			}

			var type = message && message.type;
			var data = message && message.data;

			if ( type !== 'loginMessage' ) {
				return;
			}

			if ( data && data.type === 'rlt' && data.token !== currentToken ) {

				// put into localStorage if running in top-level window (not iframe)
				rltStoreToken( data.token );

				// send to allowlisted iframes
				var iframes = document.querySelectorAll("iframe");
				for( var i=0; i<iframes.length; i++ ) {
					var iframe = iframes[i];
					if ( rltShouldAuthorizeIframe( iframe ) ) {
						rltInjectToken( currentToken, iframe.contentWindow, getOriginFromUrl( iframe.src ) );
					}
				}

				// send to the parent, unless the event was sent _by_ the parent
				if ( parentOrigin && parentOrigin !== data.sourceOrigin && window.parent ) {
					rltInjectToken( currentToken, window.parent, parentOrigin );
				}
			}
		} );

		// listen for RLT events from approved origins
		window.addEventListener( 'message', function( e ) {
			var message = e && e.data;
			if ( typeof message === 'string' ) {
				try {
					message = JSON.parse( message );
				} catch ( err ) {
					return;
				}
			}

			var type = message && message.type;
			var data = message && message.data;

			if ( type !== 'rltMessage' ) {
				return;
			}

			if ( data && data.event === 'invalidate' && data.token === currentToken ) {
				rltInvalidateToken( data.token );
			}
		} );

		if ( iframeOrigins ) {
			if ( document.readyState !== 'loading' ) {
				rltMonitorIframes();
			} else {
				window.addEventListener( 'DOMContentLoaded', rltMonitorIframes );
			}
		}

		initializationListeners.forEach( function( listener ) {
			listener( currentToken );
		} );

		initializationListeners = [];

		hasBeenInitialized = true;
	};
} )();
;
(()=>{var e={951:(e,t,n)=>{t.formatArgs=function(t){if(t[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+t[0]+(this.useColors?"%c ":" ")+"+"+e.exports.humanize(this.diff),!this.useColors)return;const n="color: "+this.color;t.splice(1,0,n,"color: inherit");let r=0,o=0;t[0].replace(/%[a-zA-Z%]/g,(e=>{"%%"!==e&&(r++,"%c"===e&&(o=r))})),t.splice(o,0,n)},t.save=function(e){try{e?t.storage.setItem("debug",e):t.storage.removeItem("debug")}catch(e){}},t.load=function(){let e;try{e=t.storage.getItem("debug")}catch(e){}!e&&"undefined"!=typeof process&&"env"in process&&(e=process.env.DEBUG);return e},t.useColors=function(){if("undefined"!=typeof window&&window.process&&("renderer"===window.process.type||window.process.__nwjs))return!0;if("undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))return!1;return"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},t.storage=function(){try{return localStorage}catch(e){}}(),t.destroy=(()=>{let e=!1;return()=>{e||(e=!0,console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))}})(),t.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"],t.log=console.debug||console.log||(()=>{}),e.exports=n(1741)(t);const{formatters:r}=e.exports;r.j=function(e){try{return JSON.stringify(e)}catch(e){return"[UnexpectedJSONParseError]: "+e.message}}},1741:(e,t,n)=>{e.exports=function(e){function t(e){let n,o,s,a=null;function i(...e){if(!i.enabled)return;const r=i,o=Number(new Date),s=o-(n||o);r.diff=s,r.prev=n,r.curr=o,n=o,e[0]=t.coerce(e[0]),"string"!=typeof e[0]&&e.unshift("%O");let a=0;e[0]=e[0].replace(/%([a-zA-Z%])/g,((n,o)=>{if("%%"===n)return"%";a++;const s=t.formatters[o];if("function"==typeof s){const t=e[a];n=s.call(r,t),e.splice(a,1),a--}return n})),t.formatArgs.call(r,e);(r.log||t.log).apply(r,e)}return i.namespace=e,i.useColors=t.useColors(),i.color=t.selectColor(e),i.extend=r,i.destroy=t.destroy,Object.defineProperty(i,"enabled",{enumerable:!0,configurable:!1,get:()=>null!==a?a:(o!==t.namespaces&&(o=t.namespaces,s=t.enabled(e)),s),set:e=>{a=e}}),"function"==typeof t.init&&t.init(i),i}function r(e,n){const r=t(this.namespace+(void 0===n?":":n)+e);return r.log=this.log,r}function o(e){return e.toString().substring(2,e.toString().length-2).replace(/\.\*\?$/,"*")}return t.debug=t,t.default=t,t.coerce=function(e){if(e instanceof Error)return e.stack||e.message;return e},t.disable=function(){const e=[...t.names.map(o),...t.skips.map(o).map((e=>"-"+e))].join(",");return t.enable(""),e},t.enable=function(e){let n;t.save(e),t.namespaces=e,t.names=[],t.skips=[];const r=("string"==typeof e?e:"").split(/[\s,]+/),o=r.length;for(n=0;n<o;n++)r[n]&&("-"===(e=r[n].replace(/\*/g,".*?"))[0]?t.skips.push(new RegExp("^"+e.slice(1)+"$")):t.names.push(new RegExp("^"+e+"$")))},t.enabled=function(e){if("*"===e[e.length-1])return!0;let n,r;for(n=0,r=t.skips.length;n<r;n++)if(t.skips[n].test(e))return!1;for(n=0,r=t.names.length;n<r;n++)if(t.names[n].test(e))return!0;return!1},t.humanize=n(3171),t.destroy=function(){console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")},Object.keys(e).forEach((n=>{t[n]=e[n]})),t.names=[],t.skips=[],t.formatters={},t.selectColor=function(e){let n=0;for(let t=0;t<e.length;t++)n=(n<<5)-n+e.charCodeAt(t),n|=0;return t.colors[Math.abs(n)%t.colors.length]},t.enable(t.load()),t}},3171:e=>{var t=1e3,n=60*t,r=60*n,o=24*r,s=7*o,a=365.25*o;function i(e,t,n,r){var o=t>=1.5*n;return Math.round(e/n)+" "+r+(o?"s":"")}e.exports=function(e,c){c=c||{};var d=typeof e;if("string"===d&&e.length>0)return function(e){if((e=String(e)).length>100)return;var i=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);if(!i)return;var c=parseFloat(i[1]);switch((i[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return c*a;case"weeks":case"week":case"w":return c*s;case"days":case"day":case"d":return c*o;case"hours":case"hour":case"hrs":case"hr":case"h":return c*r;case"minutes":case"minute":case"mins":case"min":case"m":return c*n;case"seconds":case"second":case"secs":case"sec":case"s":return c*t;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return c;default:return}}(e);if("number"===d&&isFinite(e))return c.long?function(e){var s=Math.abs(e);if(s>=o)return i(e,s,o,"day");if(s>=r)return i(e,s,r,"hour");if(s>=n)return i(e,s,n,"minute");if(s>=t)return i(e,s,t,"second");return e+" ms"}(e):function(e){var s=Math.abs(e);if(s>=o)return Math.round(e/o)+"d";if(s>=r)return Math.round(e/r)+"h";if(s>=n)return Math.round(e/n)+"m";if(s>=t)return Math.round(e/t)+"s";return e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},6998:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(951),o=n.n(r),s=n(5368);const a=o()("videopress:get-media-token");const i=async function(e,t={}){const{id:n=0,guid:r=0,flushToken:o}=t,i=`vpc-${e}-${n}-${r}`,c=window?.videopressAjax?.context||"main";let d;const u=localStorage.getItem(i);if(o)a("(%s) Flushing %o token",c,i),localStorage.removeItem(i);else try{if(u){if(d=await JSON.parse(u),d&&d.expire>Date.now())return a("(%s) Providing %o token from the store",c,i),d.data;a("(%s) Token %o expired. Clean.",c,i),localStorage.removeItem(i)}}catch(e){a("Invalid token in the localStore")}const l=await function(e,t={}){const{id:n=0,guid:r,subscriptionPlanId:o=0,adminAjaxAPI:a,filename:i}=t;return new Promise((function(t,c){const d=a||window.videopressAjax?.ajaxUrl||window?.ajaxurl||"/wp-admin/admin-ajax.php";if(!s.M.includes(e))return c("Invalid scope");const u={action:"videopress-get-playback-jwt"};switch(e){case"upload":u.action="videopress-get-upload-token",i&&(u.filename=i);break;case"upload-jwt":u.action="videopress-get-upload-jwt";break;case"playback":u.action="videopress-get-playback-jwt",u.guid=r,u.post_id=String(n),u.subscription_plan_id=o}fetch(d,{method:"POST",credentials:"same-origin",body:new URLSearchParams(u)}).then((e=>{if(!e.ok)throw new Error("Network response was not ok");return e.json()})).then((n=>{if(!n.success)throw new Error("Token is not achievable");switch(e){case"upload":case"upload-jwt":t({token:n.data.upload_token,blogId:n.data.upload_blog_id,url:n.data.upload_action_url});break;case"playback":t({token:n.data.jwt})}})).catch((()=>{console.warn("Token is not achievable"),t({token:null})}))}))}(e,t);return"playback"===e&&l?.token&&(a("(%s) Storing %o token",c,i),localStorage.setItem(i,JSON.stringify({data:l,expire:Date.now()+864e5}))),a("(%s) Providing %o token from request/response",c,i),l}},5368:(e,t,n)=>{"use strict";n.d(t,{M:()=>r});const r=["upload","playback","upload-jwt"]}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var s=t[r]={exports:{}};return e[r](s,s.exports,n),s.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";var e=n(951),t=n.n(e),r=n(6998);const o=t()("videopress:token-bridge"),{videopressAjax:s}=window;async function a(e){if(await new Promise((function(e){if("loading"!==document.readyState)return e();document.addEventListener("DOMContentLoaded",(function(){e()}))})),!window.__guidsToPlanIds)return 0;return window.__guidsToPlanIds[e]||0}async function i(e){if("videopress_token_request"!==e.data?.event)return;if(!s)return void o("(%s) videopressAjax is not accesible");const{context:t="main"}=s,{guid:n,requestId:i,isRetry:c}=e.data;if(!n||!i)return void o("(%s) Invalid request",t);const d=window?.videopressAjax.post_id||0,u=await a(n);if(-1===["https://videopress.com","https://video.wordpress.com"].indexOf(e.origin))return void o("(%s) Invalid origin",t);const{source:l}=e;if(l instanceof MessagePort||"undefined"!=typeof ServiceWorker&&l instanceof ServiceWorker)return void o("(%s) Invalid source",t);o("(%s) Token request accepted: %o | %o | %o",t,n,d,i),o("(%s) Send acknowledge receipt requested",t),l.postMessage({event:"videopress_token_request_ack",guid:n,requestId:i},{targetOrigin:"*"}),c&&o("(%s) client retrying request. Flush the token.",t);const p=await(0,r.Z)("playback",{id:Number(d),guid:n,subscriptionPlanId:u,adminAjaxAPI:s.ajaxUrl,flushToken:c});if(!p?.token)return o("(%s) Error getting token",t),void l.postMessage({event:"videopress_token_error",guid:e.data.guid,requestId:i},{targetOrigin:"*"});o("(%s) sending token",t),l.postMessage({event:"videopress_token_received",guid:n,jwt:p.token,requestId:i},{targetOrigin:"*"})}s?(o("(%s) 👂 Listen token requester",s?.context||"main"),window.addEventListener("message",i)):o("(%s) videopressAjax is not accesible")})()})();;
