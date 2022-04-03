// ==UserScript==
// @name         Place Auto-Refresh
// @version      1
// @description  This script will automatically refresh the /r/place page every 5 minutes.
// @author       im1k2
// @match        https://www.reddit.com/r/place/*
// @match        https://new.reddit.com/r/place/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=reddit.com
// ==/UserScript==

setTimeout(() => {
  window.location.reload()
}, 300000)