document.getElementById('close').addEventListener('click', function() {
  window.close();
});

chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  chrome.tabs.sendMessage(tabs[0].id, {action: 'getSummary'}, function(response) {
    document.getElementById('summary').textContent = response.summary;
  });
});
