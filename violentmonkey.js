// ==UserScript==
// @name        Adblocker for Anacon
// @namespace   github.com/kiriles90
// @version     2.0
// @date        2025-06-10
// @author      github.com/kiriles90
// @updateURL   https://raw.githubusercontent.com/kiriles90/Adblocker-for-Anacon/master/violentmonkey.js
// @downloadURL https://raw.githubusercontent.com/kiriles90/Adblocker-for-Anacon/master/violentmonkey.js
// @match       *://*anacon.org/*
// @grant       none
// @run-at      document-end
// ==/UserScript==
(() => {
    const ads = [
        'center',
        '.adsbygoogle',
        '.donate-button',
        '.fc-message-root',
        '.ft-container ft-left-pos',
        '.ipr-container'
    ].join(',');
    const clean = () => {
        document.querySelectorAll(ads).forEach(el => el.remove());
        const content = document.querySelector('.content');
        if (content) {
            Object.assign(content.parentElement.style, {
                height: '100vh',
                width: '100%',
                display: 'table'
            });
            Object.assign(content.style, {
                height: '100%',
                display: 'table-cell',
                verticalAlign: 'middle'
            });
        }
        const player = document.querySelector('.fp-player');
        if (player && player.style.backgroundColor !== '#000') {
            player.style.backgroundColor = '#000';
        }
        const exoImg = document.querySelector("[src*='exo.jpg']");
        if (exoImg && exoImg.style.opacity !== '0') {
            exoImg.style.opacity = '0';
        }
        setTimeout(() => {
            document.querySelector("[src*='exo.jpg']")?.click();
            const playBtn = document.querySelector('.fp-play');
            if (playBtn?.classList.contains('fp-visible')) {
                playBtn.click();
            }
        }, 1000);
    };
    [0, 2000, 4000, 20000].forEach(delay => setTimeout(clean, delay));
})();
