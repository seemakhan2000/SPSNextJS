/**
 * Mobile delivery optimizations only (max-width: 768px).
 * Desktop: returns immediately — zero impact on rendering or network.
 */
(function () {
    'use strict';

    var BP = window.SPS_MOBILE_BP || 768;
    var mq = window.matchMedia('(max-width: ' + BP + 'px)');
    if (!mq.matches) return;

    var appPath = document.documentElement.getAttribute('data-app-path') || '';

    /** Defer hero video byte download until desktop swiper promotes sources (videos stay in DOM). */
    function deferHiddenVideoSources() {
        document.querySelectorAll('.video-bg video source[src]').forEach(function (source) {
            var video = source.closest('video');
            if (!video) return;
            if (window.getComputedStyle(video).display === 'none') {
                source.dataset.spsSrc = source.getAttribute('src');
                source.removeAttribute('src');
            }
        });
    }

    /** Non-critical stylesheets: non-blocking paint on mobile. */
    function deferNonCriticalCss() {
        var deferPatterns = [
            'fontawesome-subset',
            'flaticon-subset',
            'swiper-core',
            'swiper-navigation'
        ];
        document.querySelectorAll('link[rel="stylesheet"], link[rel="preload"][as="style"]').forEach(function (link) {
            var href = link.getAttribute('href') || '';
            var isMain = href.indexOf('assets/css/style.css') !== -1;
            if (isMain) return;
            var shouldDefer = deferPatterns.some(function (p) { return href.indexOf(p) !== -1; });
            if (!shouldDefer || link.dataset.spsDeferred) return;
            link.dataset.spsDeferred = '1';
            if (link.rel === 'stylesheet') {
                link.media = 'print';
                link.onload = function () { this.media = 'all'; this.onload = null; };
            }
        });
    }

    /** Below-fold images: lazy decode without altering desktop markup. */
    function enhanceImageDelivery() {
        var images = document.querySelectorAll('main img');
        var vh = window.innerHeight || 800;
        images.forEach(function (img) {
            if (img.getAttribute('fetchpriority') === 'high') return;
            var rect = img.getBoundingClientRect();
            if (rect.top > vh * 1.25) {
                if (!img.getAttribute('loading')) img.loading = 'lazy';
                if (!img.getAttribute('decoding')) img.decoding = 'async';
            }
        });
    }

    /** Reduce main-thread layout cost for off-screen sections. */
    function optimizeOffscreenSections() {
        var sections = document.querySelectorAll('main section');
        for (var i = 1; i < sections.length; i++) {
            sections[i].style.contentVisibility = 'auto';
            sections[i].style.containIntrinsicSize = 'auto 500px';
        }
    }

    /** Mobile: only preload primary font (others load when needed). */
    function trimFontPreloads() {
        document.querySelectorAll('link[rel="preload"][as="font"]').forEach(function (link, index) {
            if (index > 0) link.remove();
        });
    }

    deferHiddenVideoSources();
    deferNonCriticalCss();
    trimFontPreloads();

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function () {
            enhanceImageDelivery();
            optimizeOffscreenSections();
        });
    } else {
        enhanceImageDelivery();
        optimizeOffscreenSections();
    }
})();
