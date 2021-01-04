// ==UserScript==
// @name            Adblocker for Anacon
// @namespace       github.com/kiriles90
// @version         1.8
// @date            2021-01-05
// @author          github.com/kiriles90
// @updateURL       https://raw.githubusercontent.com/kiriles90/Adblocker-for-Anacon/master/violentmonkey.js
// @downloadURL     https://raw.githubusercontent.com/kiriles90/Adblocker-for-Anacon/master/violentmonkey.js
// @match           *://www.anacon.org/*
// @grant           none
// @run-at          document-end
// ==/UserScript==
const exo = document.querySelector("[src*='exo.jpg']");
exo ? (exo.style.opacity = 0, setTimeout(function(){ exo.click(); }, 1000)) : null;
var observer = new MutationObserver(function (mutations, me) {
    const submit = document.querySelector("[name='submit']"),
          cmd = document.querySelector("[name='cmd']"),
          hosted = document.querySelector("[name='hosted_button_id']"),
          canvas = document.querySelectorAll(".adsbygoogle"),
          canvas2 = document.querySelectorAll("[name^='bdvifrmloc']"),
          fpplayer = document.querySelector(".fp-player");
    var retries = canvas.length !== 0 ? canvas.length : canvas2.length;
    submit ? submit.remove() : null;
    cmd ? cmd.remove() : null;
    hosted ? hosted.remove() : null;
    canvas[0] ? canvas[0].remove() : null;
    canvas2[0] ? canvas2[0].remove() : null;
    fpplayer ? fpplayer.style.backgroundColor = "#000" : null;
    retries < 1 ? me.disconnect() : retries = retries - 1;
    return;
});
observer.observe(document, {
    childList: true,
    subtree: true
});
