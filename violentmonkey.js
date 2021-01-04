// ==UserScript==
// @name            Adblocker for Anacon
// @namespace       github.com/kiriles90
// @version         1.2
// @date            2020-02-27
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
var retries = document.querySelectorAll(".adsbygoogle").length || document.querySelectorAll("[name^='bdvifrmloc']").length;
var observer = new MutationObserver(function (mutations, me) {
    var canvas = document.querySelector(".adsbygoogle") || document.querySelectorAll("[name^='bdvifrmloc']")[0];
    if (canvas) {
        document.querySelectorAll("[name^='bdvifrmloc']")[0].remove();
        document.querySelector(".adsbygoogle").remove();
        if (document.querySelector(".fp-player")) {
            document.querySelector(".fp-player").style.backgroundColor = "#000";
        }
        retries = retries - 1;
        if (retries < 0) {
            me.disconnect();
        }
        return;
    }
});
observer.observe(document, {
    childList: true,
    subtree: true
});
