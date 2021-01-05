// ==UserScript==
// @name            Adblocker for Anacon
// @namespace       github.com/kiriles90
// @version         2.3
// @date            2021-01-06
// @author          github.com/kiriles90
// @updateURL       https://raw.githubusercontent.com/kiriles90/Adblocker-for-Anacon/master/violentmonkey.js
// @downloadURL     https://raw.githubusercontent.com/kiriles90/Adblocker-for-Anacon/master/violentmonkey.js
// @match           *://www.anacon.org/*
// @grant           none
// @run-at          document-end
// ==/UserScript==
const submit = document.querySelector("[name='submit']"),
      exo = document.querySelector("[src*='exo.jpg']");
submit ? submit.remove() : null;
exo ? (exo.style.opacity = 0, setTimeout(function(){ exo.click(); }, 1000)) : null;
var observer = new MutationObserver(function (mutations, me) {
    const cmd = document.querySelector("[name='cmd']"),
          hosted = document.querySelector("[name='hosted_button_id']"),
          fpplayer = document.querySelector(".fp-player"),
          ads = [
              document.querySelectorAll(".adsbygoogle"), 
              document.querySelectorAll("[name^='bdvifrmloc']"), 
              document.querySelectorAll("[href^='https://ellinus']")
          ];
    cmd ? cmd.remove() : null;
    hosted ? hosted.remove() : null;
    fpplayer ? fpplayer.style.backgroundColor = "#000" : null;
    Array.from(ads).forEach(ad => Array.from(ad).forEach(adoc => adoc.remove()));
    ads[0].length + ads[1].length + ads[2].length === 0 ? me.disconnect() : null;
    return;
});
observer.observe(document, {
    childList: true,
    subtree: true
});
