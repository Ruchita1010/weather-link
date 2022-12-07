(()=>{var e={413:(e,r,t)=>{"use strict";t.d(r,{Z:()=>i});var n=t(81),a=t.n(n),o=t(645),s=t.n(o)()(a());s.push([e.id,"#daily-forecast {\r\n  margin-top: 3vmax;\r\n}\r\n\r\n#weekdays-forecast {\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));\r\n  gap: 0.6vmax;\r\n}\r\n\r\n.weekday-forecast {\r\n  display: grid;\r\n  place-items: center;\r\n  padding: 0.8vmax;\r\n  -webkit-backdrop-filter: blur(10px);\r\n  backdrop-filter: blur(10px);\r\n  border: 1px solid var(--color-cultured);\r\n  border-radius: 5px;\r\n}\r\n\r\n.weekday {\r\n  font-size: clamp(1rem, 1.5vmax, 1.6rem);\r\n}\r\n\r\n.forecast-weather-icon {\r\n  width: 60%;\r\n}\r\n\r\n.daily-temp {\r\n  font-size: clamp(0.8rem, 1.4vmax, 1.4rem);\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  #daily-forecast {\r\n    margin: 6vmax 0;\r\n  }\r\n\r\n  #daily-forecast-title {\r\n    margin-bottom: 2vmax;\r\n  }\r\n}\r\n",""]);const i=s},756:(e,r,t)=>{"use strict";t.d(r,{Z:()=>u});var n=t(81),a=t.n(n),o=t(645),s=t.n(o),i=t(667),c=t.n(i),d=new URL(t(740),t.b),l=s()(a()),p=c()(d);l.push([e.id,"* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n:root {\r\n  --color-cultured: hsl(0, 0%, 96%);\r\n  --color-chineseSilver: hsl(0, 0%, 78%);\r\n  --color-darkGunmetal-transparent: hsla(210, 8%, 14%, 0.543);\r\n}\r\n\r\nbody {\r\n  background: url("+p+") no-repeat center center/cover;\r\n  background-attachment: fixed;\r\n}\r\n\r\n.container {\r\n  max-width: 100vw;\r\n  min-height: 100vh;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  flex-wrap: wrap;\r\n  color: var(--color-cultured);\r\n  background: var(--color-darkGunmetal-transparent);\r\n}\r\n\r\n.material-symbols-outlined {\r\n  display: grid;\r\n  place-content: center;\r\n  font-variation-settings: 'FILL' 1, 'wght' 200, 'GRAD' 200, 'opsz' 48;\r\n}\r\n\r\n.input-field {\r\n  height: 100%;\r\n  padding: 8px;\r\n  background-color: transparent;\r\n  font-size: clamp(1rem, 1.4vmax, 2rem);\r\n  border: none;\r\n  outline: none;\r\n  border-bottom: 2px solid var(--color-cultured);\r\n  color: var(--color-cultured);\r\n}\r\n\r\n.input-field::placeholder {\r\n  color: var(--color-chineseSilver);\r\n}\r\n\r\n.btn {\r\n  border: none;\r\n  outline: none;\r\n}\r\n\r\n.btn:hover {\r\n  cursor: pointer;\r\n}\r\n\r\n.error-screen {\r\n  width: 100%;\r\n  height: 100vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 4vmax;\r\n}\r\n\r\n.error-message {\r\n  font-size: 5vmax;\r\n}\r\n\r\n@media (max-width: 480px) {\r\n  .container {\r\n    display: block;\r\n  }\r\n}\r\n",""]);const u=l},602:(e,r,t)=>{"use strict";t.d(r,{Z:()=>i});var n=t(81),a=t.n(n),o=t(645),s=t.n(o)()(a());s.push([e.id,".watched-cities-wrapper {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  height: 100vh;\r\n  padding: 2vmax 2.4vmax;\r\n  -webkit-backdrop-filter: blur(10px);\r\n  backdrop-filter: blur(10px);\r\n  overflow-y: auto;\r\n}\r\n\r\n#watched-cities-title {\r\n  margin-bottom: 2vmax;\r\n  font-size: clamp(1.2rem, 2vmax, 2rem);\r\n}\r\n\r\n#watched-cities-form {\r\n  height: clamp(1.8rem, 2.4vmax, 4rem);\r\n  display: flex;\r\n  place-items: center;\r\n}\r\n\r\n#btn-add-city {\r\n  height: 100%;\r\n  padding: 4px;\r\n  background-color: var(--color-cultured);\r\n  border: 1px solid var(--color-cultured);\r\n}\r\n\r\n.add-icon {\r\n  color: var(--primary);\r\n  font-size: clamp(1.4rem, 2vmax, 5rem);\r\n  font-variation-settings: 'FILL' 1, 'wght' 800, 'GRAD' 200, 'opsz' 48;\r\n}\r\n\r\n#watched-cities {\r\n  width: 100%;\r\n  margin-top: 2vmax;\r\n}\r\n\r\n.watched-city {\r\n  margin-bottom: 1vmax;\r\n  padding: 10px 10px 0px 10px;\r\n  background-color: transparent;\r\n  border-bottom: 1px solid var(--color-cultured);\r\n}\r\n\r\n.watched-city .header {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n\r\n.watched-city-name {\r\n  font-size: clamp(1rem, 1.8vmax, 2rem);\r\n  overflow-wrap: anywhere;\r\n}\r\n\r\n.delete-watched-city-btn {\r\n  padding: 2px 6px;\r\n  font-size: clamp(0.4rem, 1.2vmax, 1.2rem);\r\n  background-color: var(--color-cultured);\r\n  text-align: center;\r\n  border-radius: 50%;\r\n}\r\n\r\n.watched-city-weather {\r\n  display: flex;\r\n  align-items: center;\r\n  font-size: clamp(0.4rem, 1.6vmax, 1.6rem);\r\n}\r\n\r\n.watched-city-weather-icon {\r\n  width: 4rem;\r\n  height: 4rem;\r\n}\r\n",""]);const i=s},653:(e,r,t)=>{"use strict";t.d(r,{Z:()=>i});var n=t(81),a=t.n(n),o=t(645),s=t.n(o)()(a());s.push([e.id,".weather {\r\n  flex: 2 0 400px;\r\n  padding: 2vmax 2.4vmax 0.5vmax 2.4vmax;\r\n}\r\n\r\n#date {\r\n  font-size: clamp(1rem, 1.4vmax, 1.8rem);\r\n  margin-bottom: 1vmax;\r\n}\r\n\r\n#city {\r\n  font-size: clamp(1.4rem, 2vmax, 3rem);\r\n}\r\n\r\n#temp-wrapper {\r\n  font-size: clamp(3rem, 6vmax, 8rem);\r\n}\r\n\r\n#toggle-unit-btn {\r\n  padding: 6px;\r\n  font-size: clamp(0.8rem, 1.6vmax, 1.6rem);\r\n  color: var(--color-cultured);\r\n  background-color: transparent;\r\n  border: 2px solid var(--color-cultured);\r\n  border-radius: 4px;\r\n}\r\n\r\n#description {\r\n  font-size: clamp(1.8rem, 2.2vmax, 4rem);\r\n}\r\n\r\n.weather-details {\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));\r\n  gap: 2vmax;\r\n  margin: 2.2vmax 0;\r\n}\r\n\r\n.weather-detail {\r\n  display: flex;\r\n  -webkit-backdrop-filter: blur(10px);\r\n  backdrop-filter: blur(10px);\r\n  border-radius: 6px;\r\n}\r\n\r\n.weather-detail-icon {\r\n  padding: 4px;\r\n  color: var(--color-cultured);\r\n  font-size: clamp(2rem, 3vmax, 5rem);\r\n}\r\n\r\n.weather-data {\r\n  padding: 6px;\r\n}\r\n\r\n.label {\r\n  font-size: clamp(0.8rem, 1.4vmax, 2rem);\r\n  white-space: nowrap;\r\n}\r\n\r\n.value {\r\n  font-size: clamp(1.4rem, 2.2vmax, 4rem);\r\n  word-break: break-all;\r\n}\r\n\r\n#city-weather-search {\r\n  height: clamp(1.8rem, 2.4vmax, 4rem);\r\n  display: flex;\r\n  place-items: center start;\r\n  margin-top: 4vmax;\r\n}\r\n\r\n#btn-search-city {\r\n  height: 100%;\r\n  background: transparent;\r\n  border-bottom: 2px solid var(--color-cultured);\r\n}\r\n\r\n.search-icon {\r\n  font-size: clamp(1.4rem, 2vmax, 5rem);\r\n  color: var(--color-cultured);\r\n  font-variation-settings: 'FILL' 1, 'wght' 800, 'GRAD' 200, 'opsz' 48;\r\n}\r\n\r\n/* For Tablet and below */\r\n@media (max-width: 768px) {\r\n  #date {\r\n    margin-bottom: 1.8vmax;\r\n  }\r\n\r\n  .weather-details {\r\n    margin: 4vmax 0;\r\n  }\r\n\r\n  #city-weather-search {\r\n    margin-top: 6vmax;\r\n  }\r\n}\r\n",""]);const i=s},645:e=>{"use strict";e.exports=function(e){var r=[];return r.toString=function(){return this.map((function(r){var t="",n=void 0!==r[5];return r[4]&&(t+="@supports (".concat(r[4],") {")),r[2]&&(t+="@media ".concat(r[2]," {")),n&&(t+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),t+=e(r),n&&(t+="}"),r[2]&&(t+="}"),r[4]&&(t+="}"),t})).join("")},r.i=function(e,t,n,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(n)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(s[c]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);n&&s[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),r.push(l))}},r}},667:e=>{"use strict";e.exports=function(e,r){return r||(r={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),r.hash&&(e+=r.hash),/["'() \t\n]|(%20)/.test(e)||r.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{"use strict";e.exports=function(e){return e[1]}},379:e=>{"use strict";var r=[];function t(e){for(var t=-1,n=0;n<r.length;n++)if(r[n].identifier===e){t=n;break}return t}function n(e,n){for(var o={},s=[],i=0;i<e.length;i++){var c=e[i],d=n.base?c[0]+n.base:c[0],l=o[d]||0,p="".concat(d," ").concat(l);o[d]=l+1;var u=t(p),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)r[u].references++,r[u].updater(m);else{var g=a(m,n);n.byIndex=i,r.splice(i,0,{identifier:p,updater:g,references:1})}s.push(p)}return s}function a(e,r){var t=r.domAPI(r);return t.update(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap&&r.supports===e.supports&&r.layer===e.layer)return;t.update(e=r)}else t.remove()}}e.exports=function(e,a){var o=n(e=e||[],a=a||{});return function(e){e=e||[];for(var s=0;s<o.length;s++){var i=t(o[s]);r[i].references--}for(var c=n(e,a),d=0;d<o.length;d++){var l=t(o[d]);0===r[l].references&&(r[l].updater(),r.splice(l,1))}o=c}}},569:e=>{"use strict";var r={};e.exports=function(e,t){var n=function(e){if(void 0===r[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}r[e]=t}return r[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(t)}},216:e=>{"use strict";e.exports=function(e){var r=document.createElement("style");return e.setAttributes(r,e.attributes),e.insert(r,e.options),r}},565:(e,r,t)=>{"use strict";e.exports=function(e){var r=t.nc;r&&e.setAttribute("nonce",r)}},795:e=>{"use strict";e.exports=function(e){var r=e.insertStyleElement(e);return{update:function(t){!function(e,r,t){var n="";t.supports&&(n+="@supports (".concat(t.supports,") {")),t.media&&(n+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(n+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),n+=t.css,a&&(n+="}"),t.media&&(n+="}"),t.supports&&(n+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),r.styleTagTransform(n,e,r.options)}(r,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)}}}},589:e=>{"use strict";e.exports=function(e,r){if(r.styleSheet)r.styleSheet.cssText=e;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(e))}}},159:(e,r,t)=>{var n={"./Atmosphere.jpg":253,"./Clear.jpg":794,"./Clouds.jpg":536,"./Default.jpg":740,"./Drizzle.jpg":464,"./Rain.jpg":400,"./Snow.jpg":153,"./Thunderstorm.jpg":570};function a(e){var r=o(e);return t(r)}function o(e){if(!t.o(n,e)){var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=o,e.exports=a,a.id=159},433:(e,r,t)=>{var n={"./01d.svg":306,"./01n.svg":398,"./02d.svg":526,"./02n.svg":691,"./03d.svg":732,"./03n.svg":887,"./04d.svg":438,"./04n.svg":555,"./09d.svg":370,"./09n.svg":560,"./10d.svg":98,"./10n.svg":339,"./11d.svg":805,"./11n.svg":963,"./13d.svg":199,"./13n.svg":50,"./50d.svg":313,"./50n.svg":233};function a(e){var r=o(e);return t(r)}function o(e){if(!t.o(n,e)){var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=o,e.exports=a,a.id=433},253:(e,r,t)=>{"use strict";e.exports=t.p+"Atmosphere.jpg"},794:(e,r,t)=>{"use strict";e.exports=t.p+"Clear.jpg"},536:(e,r,t)=>{"use strict";e.exports=t.p+"Clouds.jpg"},740:(e,r,t)=>{"use strict";e.exports=t.p+"Default.jpg"},464:(e,r,t)=>{"use strict";e.exports=t.p+"Drizzle.jpg"},400:(e,r,t)=>{"use strict";e.exports=t.p+"Rain.jpg"},153:(e,r,t)=>{"use strict";e.exports=t.p+"Snow.jpg"},570:(e,r,t)=>{"use strict";e.exports=t.p+"Thunderstorm.jpg"},306:(e,r,t)=>{"use strict";e.exports=t.p+"01d.svg"},398:(e,r,t)=>{"use strict";e.exports=t.p+"01n.svg"},526:(e,r,t)=>{"use strict";e.exports=t.p+"02d.svg"},691:(e,r,t)=>{"use strict";e.exports=t.p+"02n.svg"},732:(e,r,t)=>{"use strict";e.exports=t.p+"03d.svg"},887:(e,r,t)=>{"use strict";e.exports=t.p+"03n.svg"},438:(e,r,t)=>{"use strict";e.exports=t.p+"04d.svg"},555:(e,r,t)=>{"use strict";e.exports=t.p+"04n.svg"},370:(e,r,t)=>{"use strict";e.exports=t.p+"09d.svg"},560:(e,r,t)=>{"use strict";e.exports=t.p+"09n.svg"},98:(e,r,t)=>{"use strict";e.exports=t.p+"10d.svg"},339:(e,r,t)=>{"use strict";e.exports=t.p+"10n.svg"},805:(e,r,t)=>{"use strict";e.exports=t.p+"11d.svg"},963:(e,r,t)=>{"use strict";e.exports=t.p+"11n.svg"},199:(e,r,t)=>{"use strict";e.exports=t.p+"13d.svg"},50:(e,r,t)=>{"use strict";e.exports=t.p+"13n.svg"},313:(e,r,t)=>{"use strict";e.exports=t.p+"50d.svg"},233:(e,r,t)=>{"use strict";e.exports=t.p+"50n.svg"}},r={};function t(n){var a=r[n];if(void 0!==a)return a.exports;var o=r[n]={id:n,exports:{}};return e[n](o,o.exports,t),o.exports}t.m=e,t.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var r=t.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var n=r.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{"use strict";const e=async e=>{const r=await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${e}&appid=43177022892ea041c10d42fb7db78476`),t=await r.json();return[t[0].lat,t[0].lon,t[0].name]},r=async(e,r,t="metric")=>{const n=await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${e}&lon=${r}&exclude=hourly,minutely&units=${t}&appid=43177022892ea041c10d42fb7db78476`);return await n.json()},n=(e,r)=>{const t=new Date(1e3*(e+r));return[`${["January","February","March","April","May","June","July","August","September","October","November","December"][t.getUTCMonth()]} ${t.getUTCDate()}`,`${["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][t.getUTCDay()]}`]};var a=t(740);const o=()=>{const e=document.querySelector("#toggle-unit-btn");"℉ | mph"!==e.textContent?e.textContent="℉ | mph":e.textContent="℃ | m/s"},s=()=>"℃ | m/s"===document.querySelector("#toggle-unit-btn").textContent?"metric":"imperial",i=e=>{document.querySelector(`#${e}`).value=""},c=e=>document.querySelector(`#${e}`).value.trim(),d=(e,r)=>{const n=document.querySelector("#watched-cities"),a=document.createElement("div");a.classList.add("watched-city");const o=t(433);a.innerHTML=`\n  <div class="header">\n    <span class="watched-city-name">${r}</span>\n    <button class="btn delete-watched-city-btn">x</button>\n  </div>\n  <div class="watched-city-weather">\n    <p>\n      ${parseFloat(e.current.temp).toFixed(1)}℃\n       | ${e.current.weather[0].main}\n    </p>\n    <img \n    src="${o(`./${e.current.weather[0].icon}.svg`)}" \n    class="watched-city-weather-icon" />\n  </div>\n  `,n.appendChild(a)},l=e=>{document.querySelector(".container").innerHTML=`\n  <div class="error-screen">\n    <div>\n    <p class="error-message">Oops! Something went worong.</p>\n    <p class="error-message" >We mean wrong ;)</p>\n    </div>\n    <div>\n      <p>In case you're a curious, here's the error:</p>\n      </p>${e}</p>\n    </div>\n  </div>`,document.body.style.backgroundImage=`url(${a})`},p=(e,r)=>{((e="Tokyo",r,t)=>{const a=document.querySelector("#date"),o=document.querySelector("#city"),s=document.querySelector("#temp"),i=document.querySelector("#description"),c=document.querySelector("#feels-like"),d=document.querySelector("#cloudiness"),l=document.querySelector("#humidity"),p=document.querySelector("#wind-speed"),[u,m]=n(r.dt,t);a.textContent=`${m}, ${u}`,o.textContent=`In ${e}`,s.textContent=`${parseFloat(r.temp).toFixed(1)} ℃`,i.textContent=r.weather[0].description,c.textContent=`${parseFloat(r.feels_like).toFixed(1)}℃`,d.textContent=`${parseFloat(r.clouds).toFixed(0)}%`,l.textContent=`${parseFloat(r.humidity).toFixed(0)}%`,p.textContent=`${parseFloat(r.wind_speed).toFixed(2)}m/s`})(r,e.current,e.timezone_offset),(e=>{let r=e.main;const n=t(159);/^7\d{2}$/.test(e.id)&&(r="Atmosphere"),document.body.style.backgroundImage=`\n    url(${n(`./${r}.jpg`)})`})(e.current.weather[0]),((e,r)=>{const a=document.querySelector("#weekdays-forecast");a.textContent="",e.shift(),e.forEach((e=>{const o=document.createElement("div");o.classList.add("weekday-forecast");let[,s]=n(e.dt,r);s=s.slice(0,3);const i=t(433);o.innerHTML=`\n      <div class="weekday">${s}</div>\n      <img src="${i(`./${e.weather[0].icon}.svg`)}" \n      class="forecast-weather-icon">\n      </img>\n      <div class="daily-temp">\n      ${parseFloat(e.temp.min).toFixed(0)}℃ \n      ~ ${parseFloat(e.temp.max).toFixed(0)}℃ \n      </div>\n    `,a.appendChild(o)}))})(e.daily,e.timezone_offset)},u=async t=>{t.preventDefault();const n=c("watched-city-inputfield");if(i("watched-city-inputfield"),a=n,[...document.querySelectorAll(".watched-city-name")].map((e=>e.innerText.toLowerCase())).includes(a.toLowerCase()))return(()=>{const e=document.querySelector(".watched-cities-wrapper"),r=document.querySelector("#watched-cities"),t=document.createElement("p");t.id="alert-msg",t.innerText="The city is already in the list!",e.insertBefore(t,r)})(),void setTimeout((()=>{(()=>{const e=document.querySelector(".watched-cities-wrapper"),r=document.querySelector("#alert-msg");e.removeChild(r)})()}),2e3);var a;try{const[t,a,o]=await e(n),s=await r(t,a);d(s,o),(e=>{const r=JSON.parse(localStorage.getItem("watchedCities"));r.push(e),localStorage.setItem("watchedCities",JSON.stringify(r))})(o)}catch(e){l(e.message)}},m=e=>{e.target.classList.contains("delete-watched-city-btn")&&((e=>{const r=e.parentElement.parentElement;document.querySelector("#watched-cities").removeChild(r)})(e.target),(e=>{const r=JSON.parse(localStorage.getItem("watchedCities")).filter((r=>r!==e));localStorage.setItem("watchedCities",JSON.stringify(r))})(e.target.previousElementSibling.textContent))};let g={set coords([e,r]){this.latitude=e,this.longitude=r},get coords(){return[this.latitude,this.longitude]}};const v=async t=>{t.preventDefault();const n=c("search-city-inputfield");i("search-city-inputfield");try{const[t,a,i]=await e(n),c=await r(t,a);"metric"===s()&&o(),p(c,i),g.coords=[t,a]}catch(e){l(e.message)}},h=async()=>{const[e,t]=g.coords,n=s();try{const a=await r(e,t,n),[s,i]=(e=>{let r="℃",t="m/s";return"imperial"===e&&(r="℉",t="mph"),[r,t]})(n);o(),((e,r,t)=>{const n=document.querySelector("#temp"),a=document.querySelector("#feels-like"),o=document.querySelector("#wind-speed");n.textContent=`\n  ${parseFloat(e.current.temp).toFixed(1)}${r}`,a.textContent=`\n  ${parseFloat(e.current.feels_like).toFixed(1)}${r}`,o.textContent=`\n  ${parseFloat(e.current.wind_speed).toFixed(2)}${t}`;const s=document.querySelectorAll(".daily-temp"),i=e.daily;s.forEach(((e,t)=>{e.textContent=`\n    ${parseFloat(i[t].temp.min).toFixed(0)}${r}\n    ~ ${parseFloat(i[t].temp.max).toFixed(0)}${r}\n    `}))})(a,s,i)}catch(e){l(e.message)}};var f=t(379),x=t.n(f),y=t(795),w=t.n(y),b=t(569),S=t.n(b),C=t(565),$=t.n(C),k=t(216),F=t.n(k),T=t(589),j=t.n(T),q=t(756),z={};z.styleTagTransform=j(),z.setAttributes=$(),z.insert=S().bind(null,"head"),z.domAPI=w(),z.insertStyleElement=F(),x()(q.Z,z),q.Z&&q.Z.locals&&q.Z.locals;var E=t(653),L={};L.styleTagTransform=j(),L.setAttributes=$(),L.insert=S().bind(null,"head"),L.domAPI=w(),L.insertStyleElement=F(),x()(E.Z,L),E.Z&&E.Z.locals&&E.Z.locals;var I=t(413),A={};A.styleTagTransform=j(),A.setAttributes=$(),A.insert=S().bind(null,"head"),A.domAPI=w(),A.insertStyleElement=F(),x()(I.Z,A),I.Z&&I.Z.locals&&I.Z.locals;var O=t(602),Z={};Z.styleTagTransform=j(),Z.setAttributes=$(),Z.insert=S().bind(null,"head"),Z.domAPI=w(),Z.insertStyleElement=F(),x()(O.Z,Z),O.Z&&O.Z.locals&&O.Z.locals;const D=e=>{(async(e,t)=>{try{const n=await(async(e,r)=>{const t=await fetch(`http://api.openweathermap.org/geo/1.0/reverse?lat=${e}&lon=${r}&appid=43177022892ea041c10d42fb7db78476`);return(await t.json())[0].name})(e,t),a=await r(e,t);p(a,n),g.coords=[e,t]}catch(e){l(e.message)}})(e.coords.latitude,e.coords.longitude)},M=e=>{console.log(e.message)};window.onload=()=>{navigator.geolocation?navigator.geolocation.getCurrentPosition(D,M):console.log("Your browser does not support geolocation!"),void 0===localStorage.watchedCities?localStorage.setItem("watchedCities",JSON.stringify([])):JSON.parse(localStorage.getItem("watchedCities")).forEach((async t=>{try{const[n,a,o]=await e(t),s=await r(n,a);d(s,o)}catch(e){l(e.message)}})),document.querySelector("#city-weather-search").addEventListener("submit",v),document.querySelector("#toggle-unit-btn").addEventListener("click",h),document.querySelector("#watched-cities-form").addEventListener("submit",u),document.querySelector("#watched-cities").addEventListener("click",m)}})()})();