// ==UserScript==
// @name            Adblocker for Anacon
// @namespace       github.com/kiriles90
// @version         1.1
// @date            2020-01-23
// @author          github.com/kiriles90
// @updateURL       https://raw.githubusercontent.com/kiriles90/Adblocker-for-Anacon/master/violentmonkey.js
// @downloadURL     https://raw.githubusercontent.com/kiriles90/Adblocker-for-Anacon/master/violentmonkey.js
// @match           *://www.anacon.org/*
// @grant           none
// @run-at          document-idle
// ==/UserScript==
//if (document.querySelector('#form_id')) {
//    setTimeout(function(){ document.querySelector('#form_id').submit(); }, 1000);
//}
//if (document.querySelector("[src*='exo.jpg']")) {
//    document.querySelector("[src*='exo.jpg']").style.opacity = 0;
//}
if (document.querySelector("[name='submit']")) {
    document.querySelectorAll("[name='submit']")[0].remove();
}
if (document.querySelector("[name='cmd']")) {
    document.querySelector("[name='cmd']").remove();
}
if (document.querySelector("[name='hosted_button_id']")) {
    document.querySelector("[name='hosted_button_id']").remove();
}
if (document.querySelector(".adsbygoogle")) {
    var c = document.querySelectorAll(".adsbygoogle");
    const keys = Object.keys(c)
    for (const key of keys) {
        c[key].remove();
    }
}
