
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  sendResponse({url: window.location.href,title:request})
})
    



