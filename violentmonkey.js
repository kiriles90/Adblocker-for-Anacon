// ==UserScript==
// @name            Adblocker for Anacon
// @namespace       github.com/kiriles90
// @version         1.6
// @date            2021-01-04
// @author          github.com/kiriles90
// @updateURL       https://raw.githubusercontent.com/kiriles90/Adblocker-for-Anacon/master/violentmonkey.js
// @downloadURL     https://raw.githubusercontent.com/kiriles90/Adblocker-for-Anacon/master/violentmonkey.js
// @match           *://www.anacon.org/*
// @grant           none
// @run-at          document-end
// ==/UserScript==
const exo = document.querySelector("[src*='exo.jpg']"),
      submit = document.querySelector("[name='submit']"),
      submitall = document.querySelectorAll("[name='submit']")[0],
      cmd = document.querySelector("[name='cmd']"),
      hosted = document.querySelector("[name='hosted_button_id']");
exo ? (exo.style.opacity = 0, setTimeout(function(){ exo.click(); }, 1000)) : null;
submit ? submitall.remove() : null;
cmd ? cmd.remove() : null;
hosted ? hosted.remove() : null;
var observer = new MutationObserver(function (mutations, me) {
    var retries = document.querySelectorAll(".adsbygoogle").length !== 0 ? document.querySelectorAll(".adsbygoogle").length : document.querySelectorAll("[name^='bdvifrmloc']").length;
    const canvas = document.querySelector(".adsbygoogle"),
          canvas2 = document.querySelectorAll("[name^='bdvifrmloc']")[0],
          fpplayer = document.querySelector(".fp-player");
    canvas ? canvas.remove() : null;
    canvas2 ? canvas2.remove() : null;
    fpplayer ? fpplayer.style.backgroundColor = "#000" : null;
    retries < 1 ? me.disconnect() : retries = retries - 1;
    return;
});
observer.observe(document, {
    childList: true,
    subtree: true
});
