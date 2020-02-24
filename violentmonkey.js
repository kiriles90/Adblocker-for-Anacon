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
// @run-at          document-end
// ==/UserScript==
if (document.querySelector("[src*='exo.jpg']")) {
    document.querySelector("[src*='exo.jpg']").style.opacity = 0;
    setTimeout(function(){ document.querySelector("[src*='exo.jpg']").click(); }, 1000);
}
if (document.querySelector("[name='submit']")) {
    document.querySelectorAll("[name='submit']")[0].remove();
}
if (document.querySelector("[name='cmd']")) {
    document.querySelector("[name='cmd']").remove();
}
if (document.querySelector("[name='hosted_button_id']")) {
    document.querySelector("[name='hosted_button_id']").remove();
}
var retries = document.querySelectorAll(".adsbygoogle").length;
var observer = new MutationObserver(function (mutations, me) {
    var canvas = document.querySelector(".adsbygoogle");
    if (canvas) {
        document.querySelector(".adsbygoogle").remove();
        retries = retries - 1;
        if (retries <= 0) {
            me.disconnect();
        }
        return;
    }
});
observer.observe(document, {
    childList: true,
    subtree: true
});
