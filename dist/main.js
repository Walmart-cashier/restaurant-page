!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);!function(){const e=document.querySelector("#main"),t=document.createElement("section");t.classList.add("contactInfo");const n=document.createElement("p");n.innerHTML="home delivery : 600 - Crimsons (600-564-669) <span>Crimson deals</span>",t.appendChild(n),e.appendChild(t);const o=document.createElement("nav"),r=document.createElement("section"),c=document.createElement("i");c.classList.add("fas","fa-hamburger","fa-6x"),r.appendChild(c),o.appendChild(r);const d=document.createElement("ul");["menu","visit","read","order online"].forEach(e=>{let t=document.createElement("li");t.textContent=e,t.classList.add("hvr-underline-from-center"),d.appendChild(t)}),o.appendChild(d),e.appendChild(o);const a=document.createElement("section");a.classList.add("jumbotron");["Our Passion","Your Burger"].forEach(e=>{let t=document.createElement("h3");t.textContent=e,a.appendChild(t)});const i=document.createElement("button");i.textContent="Order Now",a.appendChild(i),e.appendChild(a);const l=document.createElement("section");l.classList.add("miniJumbotron");const s=document.createElement("h2");s.textContent="FIND YOUR CRIMSON BURGERS";const u=document.createElement("p");u.textContent="ORDER ONLINE AT SELECT LOCATIONS",l.appendChild(s),l.appendChild(u),e.appendChild(l);const p=document.createElement("footer"),m={section1:["FYI","News & Press"],section2:["WHATS'S UP","eClub Sign-Up","Crimson Deals"],section3:["PLAY HARD","Work With Us","Locations"]};for(let e in m){let t=document.createElement("section"),n=document.createElement("h6"),[o,...r]=m[e];n.textContent=o,t.appendChild(n),r.forEach(e=>{let n=document.createElement("p");n.textContent=e,t.appendChild(n)}),p.appendChild(t)}e.appendChild(p);const f=document.createElement("div");f.classList.add("copyright"),f.textContent="Crimson Burgers &copy; 2020",e.appendChild(f)}()}]);