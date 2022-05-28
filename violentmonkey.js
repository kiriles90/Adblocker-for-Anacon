// ==UserScript==
// @name        Adblocker for Anacon
// @namespace   github.com/kiriles90
// @version     1.5
// @date        2022-05-28
// @author      github.com/kiriles90
// @updateURL   https://raw.githubusercontent.com/kiriles90/Adblocker-for-Anacon/master/violentmonkey.js
// @downloadURL https://raw.githubusercontent.com/kiriles90/Adblocker-for-Anacon/master/violentmonkey.js
// @match       *://www.anacon.org/*
// @grant       none
// @run-at      document-end
// ==/UserScript==
const ads = document.querySelectorAll("center, .google-center-div, .google-auto-placed, .mys-wrapper, root_template_div, .adsbygoogle, #banner"),
      content = document.querySelector(".content"),
      fpplayer = document.querySelector(".fp-player"),
      exo = document.querySelector("[src*='exo.jpg']");
      exo2 = document.querySelector(".fp-play");
ads ? Array.from(ads).forEach(ad => ad.remove()) : null;
content ? (content.parentElement.style = 'height:100vh;width:100%;display:table;', content.style = 'height:100%;display:table-cell;vertical-align:middle;') : null;
fpplayer ? fpplayer.style.backgroundColor = "#000" : null;
exo ? (exo.style.opacity = 0, setTimeout(function(){ exo.click(); exo2.click(); ads ? Array.from(ads).forEach(ad => ad.remove()) : null;}, 1000), setTimeout(function(){ exo2.click(); }, 5000)) : null;
