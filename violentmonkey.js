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
var wth = (function() {
    let ads = document.querySelectorAll("center, .adsbygoogle"),
        content = document.querySelector(".content"),
        fpplayer = document.querySelector(".fp-player"),
        exo = document.querySelector("[src*='exo.jpg']");
    ads ? Array.from(ads).forEach(ad => ad.remove()) : null;
    content ? (content.parentElement.style = 'height:100vh;width:100%;display:table;', content.style = 'height:100%;display:table-cell;vertical-align:middle;') : null;
    fpplayer && fpplayer.style.backgroundColor !== "#000" ? fpplayer.style.backgroundColor = "#000" : null;
    exo && exo.style.opacity !== 0 ? exo.style.opacity = 0 : null;
    setTimeout(function(){
        let exo = document.querySelector("[src*='exo.jpg']"),
            exo2 = document.querySelector(".fp-play");
        exo ? exo.click() : null;
        exo2 && exo2.classList.contains("fp-visible") ? exo2.click() : null;
    }, 1000);
});
wth();
setTimeout(function(){ wth(); }, 2000);
setTimeout(function(){ wth(); }, 4000);
