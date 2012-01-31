// ==UserScript==
// @name           Toggle Google results page language
// @version        1.1
// @namespace      http://blog.kaihatsubu.com
// @description    Japanese <-> English
// @include        http://www.google.co.jp/*
// @include        http://www.google.com/*
// @include        https://www.google.co.jp/*
// @include        https://www.google.com/*
// ==/UserScript==
(function() {
  document.addEventListener('dblclick', function(e) {
    var next;
    //new interface
    if (location.href.match(/#hl=(ja|en)/)) {
      next = RegExp.$1 === "ja" ? "en" : "ja";
    //old interface
    } else if (location.pathname.match(/^\/search/)) {
      if (location.href.match(/hl=ja/)) {
        next = "en";
      } else if (location.href.match(/hl=en/)) {
        next = "ja";
      } else if (location.href.match(/google\.co\.jp\//)) {
        next = "en";
      } else {
        next = "ja";
      }
    }

    var nextURL;
    if (next === "ja") {
      nextURL = location.href.replace(/google\.com\//, "google.co.jp/").replace(/hl=en/g, "hl=ja");
      if (!nextURL.match(/hl=ja/)) {
        nextURL += "&hl=ja";
      }
    } else {
      nextURL = location.href.replace(/google\.co\.jp\//, "google.com/").replace(/hl=ja/g, "hl=en");
      if (!nextURL.match(/hl=en/)) {
        nextURL += "&hl=en";
      }
    }
    location.href = nextURL;
  }, false);
})();

