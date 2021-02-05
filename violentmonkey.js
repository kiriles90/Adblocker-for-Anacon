// ==UserScript==
// @name            Adblocker for Anacon
// @namespace       github.com/kiriles90
// @version         2.8
// @date            2021-02-05
// @author          github.com/kiriles90
// @updateURL       https://raw.githubusercontent.com/kiriles90/Adblocker-for-Anacon/master/violentmonkey.js
// @downloadURL     https://raw.githubusercontent.com/kiriles90/Adblocker-for-Anacon/master/violentmonkey.js
// @match           *://www.anacon.org/*
// @grant           none
// @run-at          document-end
// ==/UserScript==
const ads = document.querySelectorAll("center"),
      ads2 = document.querySelectorAll(".google-center-div"),
      ads3 = document.querySelectorAll(".google-auto-placed"),
      ads4 = document.querySelectorAll(".mys-wrapper"),
      ads5 = document.querySelectorAll("root_template_div"),
      ads6 = document.querySelectorAll("#banner"),
      content = document.querySelector(".content"),
      fpplayer = document.querySelector(".fp-player"),
      exo = document.querySelector("[src*='exo.jpg']");
ads ? Array.from(ads).forEach(ad => ad.remove()) : null;
ads2 ? Array.from(ads2).forEach(ad => ad.remove()) : null;
ads3 ? Array.from(ads3).forEach(ad => ad.remove()) : null;
ads4 ? Array.from(ads4).forEach(ad => ad.remove()) : null;
ads5 ? Array.from(ads5).forEach(ad => ad.remove()) : null;
ads6 ? Array.from(ads6).forEach(ad => ad.remove()) : null;
content ? (content.parentElement.style = 'height:100vh;width:100%;display:table;', content.style = 'height:100%;display:table-cell;vertical-align:middle;') : null;
fpplayer ? fpplayer.style.backgroundColor = "#000" : null;
exo ? (exo.style.opacity = 0, setTimeout(function(){ exo.click(); }, 1000)) : null;
