chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'getSummary') {
    const text = document.body.innerText;
    chrome.runtime.sendMessage({action: 'summarize', text: text}, function(response) {
      sendResponse({summary: response.summary});
    });
  }
  return true;  // Will respond asynchronously.
});
