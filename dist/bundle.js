/*!
 * Trigger.js v1.0.5
 * Copyright (c) 2021 Steven Lei
 * Released under the MIT License.
*/(()=>{"use strict";var t={991:(t,e,r)=>{r.r(e),r.d(e,{get:()=>n});function n(t){return t&&["cover","inset"].includes(t)||(t="cover"),t}},796:(t,e,r)=>{function n(t){var e={mode:"retain",values:[]};return"string"==typeof t&&""!==t.trim()&&("!"===t.substring(t.length-1)&&(e.mode="exact",t=t.substring(0,t.length-1)),t=t.replace(/!/g,""),e.values=t.split(",").map((function(t){return Number(t.trim())}))),e}r.r(e),r.d(e,{get:()=>n})},381:(t,e,r)=>{r.r(e),r.d(e,{get:()=>o});var n=r(507);function o(t){if(!t)return null;var e=document.querySelector("[".concat((0,n.G)(),'ref="').concat(t,'"]'));return!e||e.hasAttribute("".concat((0,n.G)(),"follow"))?null:e}},566:(t,e,r)=>{r.r(e),r.d(e,{get:()=>n});function n(t){return t?Number(t):0}},641:(t,e,r)=>{function n(t){var e={};return"string"==typeof t&&""!==t.trim()&&t.split(";").forEach((function(t){var r=t.split(":");2===r.length&&(r[0].indexOf(",")>-1?r[0].split(",").forEach((function(t){e[t.trim()]=r[1].trim()})):e[r[0].trim()]=r[1].trim())})),e}r.r(e),r.d(e,{get:()=>n})},329:(t,e,r)=>{r.r(e),r.d(e,{get:()=>o});var n=r(507);function o(t){return t||console.warn("".concat((0,n.G)(),"name is not set")),"--"===t.substring(0,2)?t:"--".concat(t)}},631:(t,e,r)=>{function n(t){return t||null}r.r(e),r.d(e,{get:()=>n})},716:(t,e,r)=>{r.r(e),r.d(e,{get:()=>n});function n(t){return t?Number(t):0}},418:(t,e,r)=>{r.r(e),r.d(e,{get:()=>n});function n(t){var e=t?Number(t):100;return 0===e&&(e=100),e}},473:(t,e,r)=>{r.r(e),r.d(e,{get:()=>n});function n(t){return t?Number(t):1}},507:(t,e,r)=>{r.d(e,{P:()=>o,G:()=>i});var n="tg";function o(){void 0!==document.body&&document.body.hasAttribute("data-trigger-prefix")&&function(t){if("string"!=typeof t||""===t.trim())return;t=t.trim(),n=t}(document.body.getAttribute("data-trigger-prefix"))}function i(){return"".concat(n,"-")}}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var i=e[n]={exports:{}};return t[n](i,i.exports,r),i.exports}r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var n={};(()=>{r.r(n);var t=r(507),e={root:null,rootMargin:"0px",threshold:0};function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function i(e,r){"object"===o(r)&&"function"==typeof before&&before(),document.querySelectorAll("[".concat((0,t.G)(),"name]")).forEach((function(t){var r=t.getBoundingClientRect(),n=r.top,o=r.height;t.style.setProperty("--tg-top",n+window.scrollY),t.style.setProperty("--tg-height",o),e.observe(t)})),"object"===o(r)&&"function"==typeof after&&after()}var u=["tg-follow","tg-ref"],a={"tg-name":r(329),"tg-from":r(566),"tg-to":r(473),"tg-steps":r(418),"tg-step":r(716),"tg-map":r(641),"tg-filter":r(796),"tg-edge":r(991),"tg-follow":r(381),"tg-ref":r(631)};function c(e,r){var n=r;if("tg-"!==n.substring(0,3)){var o=(0,t.G)();n=n.replace(o,""),n="tg-".concat(n)}if(void 0===a[n])return null;var i=function(t,e,r){if(t.hasAttribute(e)||u.includes(r))return t;var n=t;for(;(n=n.parentElement)!==document.body;)if(n.hasAttribute(e))return n;return t}(e,r,n),c=i.hasAttribute(r)?i.getAttribute(r):null;return a[n].get(c)}function l(e){var r=c(e,"".concat((0,t.G)(),"follow")),n=e;null!==r&&(n=r);var o,i=getComputedStyle(n),u=Number(i.getPropertyValue("--tg-top")),a=Number(i.getPropertyValue("--tg-height")),l=c(e,"".concat((0,t.G)(),"name")),f=c(n,"".concat((0,t.G)(),"from")),s=c(n,"".concat((0,t.G)(),"to")),m=c(n,"".concat((0,t.G)(),"steps")),d=c(n,"".concat((0,t.G)(),"step")),g=c(e,"".concat((0,t.G)(),"map")),p=c(e,"".concat((0,t.G)(),"filter")),y=c(n,"".concat((0,t.G)(),"edge")),b=Math.abs(s-f),v=0===d?b/m:d;return{el:e,top:u,height:a,name:l,from:f,to:s,steps:m,step:d,mapping:g,filter:p,edge:y,range:b,increment:v,segments:b/v,decimals:(o=v,Math.floor(o.valueOf())===o.valueOf()?0:o.toString().split(".")[1].length||0),multiplier:f>s?-1:1,lastValue:null}}function f(t){var e=document.documentElement.scrollTop,r=document.documentElement.clientHeight;t.forEach((function(t){var n=t.el,o=t.top,i=t.height,u=t.increment,a=t.segments,c=t.decimals,l=t.multiplier,f=t.name,s=t.from,m=t.to,d=t.mapping,g=t.filter,p=t.edge,y=t.lastValue;if("--_"!==f){var b,v=(e-o+r)/(r+i);"inset"===p&&(v=(e-o+r-i)/(r-i));var h=(s+Math.floor((a+1)*v)*u*l).toFixed(c);b=1===l?Math.min(Math.max(h,s),m):Math.min(Math.max(h,m),s),g.values.length>0&&!g.values.includes(b)?"exact"===g.mode&&(t.lastValue=null,n.style.removeProperty(f)):(void 0!==d[b]&&(b=d[b]),y!=b&&(n.style.setProperty(f,b),n.dispatchEvent(new CustomEvent("tg",{target:n,detail:{value:b}})),t.lastValue=b))}}))}function s(t){return function(t){if(Array.isArray(t))return m(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return m(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return m(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var d,g=[];function p(){var t;t=function(t){t.forEach((function(t){var e=t.target;t.isIntersecting?g.push(l(e)):g=g.filter((function(t){return t.el!==e}))}))},d="undefined"==typeof IntersectionObserver?(console.warn("IntersectionObserver is not supported in this browser"),null):new IntersectionObserver(t,e)}(0,t.P)();({start:function(){document.body?(p(),window.addEventListener("DOMContentLoaded",(function(){i(d),setTimeout((function(){f(s(document.querySelectorAll("[".concat((0,t.G)(),"name]"))).map((function(t){return l(t)})))}))})),window.addEventListener("resize",(function(){i(d,{before:function(){g.forEach((function(t){d.unobserve(t.el)}))}})})),window.addEventListener("scroll",(function(t){f(g)}))):console.warn("Unable to initialise, document.body does not exist.")}}).start()})(),window.Trigger=n})();