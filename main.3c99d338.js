parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var e=document.body,t=e.querySelector(".burger-menu"),i=e.querySelector(".header__select"),r=i.querySelector(".select__current-leng"),s=i.querySelector(".select__list"),l=e.querySelector(".subscribe__form"),n=l.elements.email,c=l.querySelector(".subscribe__button"),o=e.querySelectorAll('a[href^="#"'),a=e.querySelectorAll(".anim");function u(){var t=e.querySelectorAll(".burger-menu__line"),r=e.querySelector(".menu");t.forEach(function(e){e.classList.toggle("burger-menu__line--active")}),r.classList.toggle("menu--visible"),i.classList.toggle("header__select--visible"),r.className.includes("menu--visible")?e.style.overflow="hidden":e.style.overflow="visible"}r.addEventListener("click",function(){s.classList.toggle("select__list--visible")}),s.addEventListener("click",function(e){var t=e.target.closest(".select__leng");t&&(r.textContent=t.textContent)}),e.addEventListener("click",function(e){e.target!==r&&s.classList.remove("select__list--visible")}),t.addEventListener("click",u),n.addEventListener("input",function(e){var t=e.target.value.toLowerCase(),i=l.querySelector(".subscribe__error");/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(t)?(i.classList.remove("subscribe__error--visible"),c.disabled=!1):(i.classList.add("subscribe__error--visible"),c.disabled=!0)}),l.addEventListener("submit",function(e){e.preventDefault(),n.value="",c.disabled=!0,window.scrollTo({top:0,behavior:"smooth"})}),o.forEach(function(t){t.addEventListener("click",function(i){i.preventDefault();var r=this.getAttribute("href").slice(1),s=document.getElementById(r),l=e.querySelector(".header").clientHeight,n=s.getBoundingClientRect().top-l;window.scrollBy({top:n,behavior:"smooth"}),t.className.includes("menu")&&u()})}),a.length>0&&window.addEventListener("scroll",function(){a.forEach(function(e){var t=window.pageYOffset,i=e.offsetHeight,r=Math.round(e.getBoundingClientRect().top+t),s=window.innerHeight,l=s-i/4;i>s&&(l=s-s/4),t>r-l&&t<r+i&&e.classList.add("anim--active")})});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.3c99d338.js.map