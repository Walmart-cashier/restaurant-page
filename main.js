!function(e){var t={};function n(o){if(t[o])return t[o].exports;var c=t[o]={i:o,l:!1,exports:{}};return e[o].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)n.d(o,c,function(t){return e[t]}.bind(null,c));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const o=document.querySelector("#main"),c=function(){o.innerHTML="",l();const e=document.createElement("section");e.classList.add("menu");["shakes","burgers","starters","salads","kidsmeal","desserts"].forEach(t=>{let n=document.createElement("section");n.classList.add("menu_"+t);let o=document.createElement("h3");o.textContent=t;let c=document.createElement("button");c.textContent="explore",n.appendChild(o),n.appendChild(c),e.appendChild(n)}),o.appendChild(e),u(),m()},d=function(){i.innerHTML="",c()},a=document.querySelector("#main"),r=function(){console.log("im loadread function"),a.innerHTML="",l();const e=document.createElement("section");e.classList.add("read");const t=document.createElement("section");t.classList.add("read_fixedbackground");const n=document.createElement("div");n.classList.add("read_mission");const o=document.createElement("h5");o.textContent="MISSION",n.appendChild(o);const c=document.createElement("p");c.textContent="To establish Crimson Burger as the leading global restaurant chain providing a classic all-american experience",n.appendChild(c),t.appendChild(n);const d=document.createElement("div");d.classList.add("read_title");const r=document.createElement("p");r.textContent="the original";const i=document.createElement("p");i.textContent="hamburger",d.appendChild(r),d.appendChild(i),t.appendChild(d),e.appendChild(t);const s=document.createElement("section");s.classList.add("read_founded");const p=document.createElement("h5");p.textContent="FOUNDED";const h=document.createElement("p");h.textContent="Crimson Burgers was launched on april 5,1992, in Texas on the belief that everyone deserves a place where they can escape from today’s complicated world and experience the uncomplicated goodness of classic Americana. ",s.appendChild(p),s.appendChild(h),e.appendChild(s),a.appendChild(e),u(),m()},i=document.querySelector("#main"),l=function(){const e=document.createElement("section");e.classList.add("contactInfo");const t=document.createElement("p");t.innerHTML="home delivery : 600 - Crimsons (600-564-669) <span>Crimson deals</span>",e.appendChild(t),i.appendChild(e);const n=document.createElement("nav"),o=document.createElement("section"),c=document.createElement("i");c.classList.add("fas","fa-hamburger","fa-6x"),o.appendChild(c),n.appendChild(o);const d=document.createElement("ul");["menu","visit","read","orderOnline"].forEach(e=>{let t=document.createElement("li");t.textContent=e,t.id="nav_"+e,t.classList.add("hvr-underline-from-center"),d.appendChild(t)}),n.appendChild(d),i.appendChild(n)},s=function(){const e=document.createElement("section");e.classList.add("jumbotron");["Our Passion","Your Burger"].forEach(t=>{let n=document.createElement("h3");n.textContent=t,e.appendChild(n)});const t=document.createElement("button");t.textContent="Order Now",e.appendChild(t),i.appendChild(e);const n=document.createElement("section");n.classList.add("miniJumbotron");const o=document.createElement("h2");o.textContent="FIND YOUR CRIMSON BURGERS";const c=document.createElement("p");c.textContent="ORDER ONLINE AT SELECT LOCATIONS",n.appendChild(o),n.appendChild(c),i.appendChild(n)},u=function(){const e=document.createElement("footer"),t={section1:["FYI","News & Press"],section2:["WHATS'S UP","eClub Sign-Up","Crimson Deals"],section3:["PLAY HARD","Work With Us","Locations"]};for(let n in t){let o=document.createElement("section"),c=document.createElement("h6"),[d,...a]=t[n];c.textContent=d,o.appendChild(c),a.forEach(e=>{let t=document.createElement("p");t.textContent=e,o.appendChild(t)}),e.appendChild(o)}i.appendChild(e);const n=document.createElement("div");n.classList.add("copyright"),n.textContent="Crimson Burgers © 2020",i.appendChild(n)},m=function(){document.querySelector("#nav_menu").addEventListener("click",c),document.querySelector("#nav_visit").addEventListener("click",()=>{i.textContent="",l(),s(),u(),m()}),document.querySelector("#nav_orderOnline").addEventListener("click",d),document.querySelector("#nav_read").addEventListener("click",r)};l(),s(),u(),m()}]);