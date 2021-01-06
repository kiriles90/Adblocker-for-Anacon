// ==UserScript==
// @name            Adblocker for Anacon
// @namespace       github.com/kiriles90
// @version         2.6
// @date            2021-01-07
// @author          github.com/kiriles90
// @updateURL       https://raw.githubusercontent.com/kiriles90/Adblocker-for-Anacon/master/violentmonkey.js
// @downloadURL     https://raw.githubusercontent.com/kiriles90/Adblocker-for-Anacon/master/violentmonkey.js
// @match           *://www.anacon.org/*
// @grant           none
// @run-at          document-end
// ==/UserScript==
const ads = document.querySelectorAll("center"),
      content = document.querySelector(".content"),
      fpplayer = document.querySelector(".fp-player"),
      exo = document.querySelector("[src*='exo.jpg']");
Array.from(ads).forEach(ad => ad.remove());
content ? (content.parentElement.style = 'height:100vh;width:100%;display:table;', content.style = 'height:100%;display:table-cell;vertical-align:middle;') : null;
fpplayer ? fpplayer.style.backgroundColor = "#000" : null;
exo ? (exo.style.opacity = 0, setTimeout(function(){ exo.click(); }, 1000)) : null;
