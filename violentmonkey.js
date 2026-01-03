// ==UserScript==
// @name        Adblocker for Anacon
// @namespace   github.com/kiriles90
// @version     4.8
// @date        2026-01-04
// @author      github.com/kiriles90
// @updateURL   https://raw.githubusercontent.com/kiriles90/Adblocker-for-Anacon/master/violentmonkey.js
// @downloadURL https://raw.githubusercontent.com/kiriles90/Adblocker-for-Anacon/master/violentmonkey.js
// @match       *://*anacon.org/*
// @run-at      document-end
// @grant       none
// ==/UserScript==
(() => {
    const m3u8 = document.querySelector('#live-stream source') ? document.querySelector('#live-stream source').src : null;
    if (m3u8 && m3u8.includes('.m3u8')) {
        window.location.href = m3u8;
        return;
    }
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
        const exoImg = document.querySelector("[src*='play.webp']");
        if (exoImg) exoImg.style.opacity = '0';
        requestAnimationFrame(() => {
            document.querySelector("[src*='play.webp']")?.click();
            document.querySelector('.vjs-big-play-button')?.click();
        });
    }
    [0, 1000, 2000, 4000, 8000, 16000].forEach(delay =>
        setTimeout(() => requestAnimationFrame(cleanPage), delay)
    );
})();
