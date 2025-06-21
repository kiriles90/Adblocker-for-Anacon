// ==UserScript==
// @name        Adblocker for Anacon
// @namespace   github.com/kiriles90
// @version     3.6
// @date        2025-06-21
// @author      github.com/kiriles90
// @updateURL   https://raw.githubusercontent.com/kiriles90/Adblocker-for-Anacon/master/violentmonkey.js
// @downloadURL https://raw.githubusercontent.com/kiriles90/Adblocker-for-Anacon/master/violentmonkey.js
// @match       *://*anacon.org/*
// @run-at      document-end
// @grant       none
// ==/UserScript==
(() => {
    const adsSelector = 'center,.adsbygoogle,.donate-button,.fc-message-root,.ft-container.ft-left-pos,.ipr-container';
    function cleanPage() {
        document.querySelectorAll(adsSelector).forEach(el => el.remove());
        const content = document.querySelector('.content');
        if (content && content.parentElement) {
            const parentStyle = content.parentElement.style;
            parentStyle.height = '100vh';
            parentStyle.width = '100%';
            parentStyle.display = 'table';
            const contentStyle = content.style;
            contentStyle.height = '100%';
            contentStyle.display = 'table-cell';
            contentStyle.verticalAlign = 'middle';
        }
        const player = document.querySelector('.fp-player');
        if (player) player.style.backgroundColor = '#000';
        const exoImg = document.querySelector("[src*='exo.jpg']");
        if (exoImg) exoImg.style.opacity = '0';
        requestAnimationFrame(() => {
            document.querySelector("[src*='exo.jpg']")?.click();
            document.querySelector('.fp-play.fp-visible')?.click();
        });
    }
    [0, 2000, 4000, 20000].forEach(delay =>
        setTimeout(() => requestAnimationFrame(cleanPage), delay)
    );
})();
