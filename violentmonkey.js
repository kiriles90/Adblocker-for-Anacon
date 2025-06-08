// ==UserScript==
// @name        Adblocker for Anacon
// @namespace   github.com/kiriles90
// @version     3.2
// @date        2025-06-12
// @author      github.com/kiriles90
// @updateURL   https://raw.githubusercontent.com/kiriles90/Adblocker-for-Anacon/master/violentmonkey.js
// @downloadURL https://raw.githubusercontent.com/kiriles90/Adblocker-for-Anacon/master/violentmonkey.js
// @match       *://*anacon.org/*
// @run-at      document-end
// @grant       none
// ==/UserScript==
(() => {
    const ads = 'center,.adsbygoogle,.donate-button,.fc-message-root,.ft-container.ft-left-pos,.ipr-container';
    const clean = () => {
        const adEls = document.querySelectorAll(ads);
        adEls.forEach(el => el.remove());
        const content = document.querySelector('.content');
        if (content?.parentElement) {
            Object.assign(content.parentElement.style, {
                height: '100vh', width: '100%', display: 'table'
            });
            Object.assign(content.style, {
                height: '100%', display: 'table-cell', verticalAlign: 'middle'
            });
        }
        const player = document.querySelector('.fp-player');
        if (player) player.style.backgroundColor = '#000';
        const exoImg = document.querySelector("[src*='exo.jpg']");
        if (exoImg) exoImg.style.opacity = '0';
        requestAnimationFrame(() => {
            document.querySelector("[src*='exo.jpg']")?.click();
            document.querySelector('.fp-play.fp-visible')?.click();
        });
    };
    const schedule = [0, 2000, 4000, 20000];
    schedule.forEach(delay => setTimeout(() => requestAnimationFrame(clean), delay));
})();
