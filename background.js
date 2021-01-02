// runs in the background
window.bears = {}
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
window.bears[request.url] = request.count
})

chrome.browserAction.onClicked.addListener(function(tab){
    // open a new tab w the count
    chrome.tabs.create({url: 'popup.html'})
})

