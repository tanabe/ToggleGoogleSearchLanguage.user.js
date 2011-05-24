// ==UserScript==
// @name           Toggle Google results page language
// @version        1.1
// @namespace      http://blog.kaihatsubu.com
// @description    Japanese <-> English
// @include        http://www.google.co.jp/*
// @include        http://www.google.com/*
// ==/UserScript==
(function() {
  document.addEventListener('dblclick', function(event) {
    var next;
    if (location.href.match(/#hl=(ja|en)/)) {
      next = RegExp.$1 === "ja" ? "en" : "ja";
    } else if (location.pathname.match(/^\/search/)) {
      next = location.search.match(/hl=ja/) ? "en" : "ja";
    }

    if (next === "ja") {
      location.href = location.href.replace(/google\.com\//, "google.co.jp/").replace(/hl=en/g, "hl=ja");
    } else {
      location.href = location.href.replace(/google\.co\.jp\//, "google.com/").replace(/hl=ja/g, "hl=en");
    }
  }, false);
})();
