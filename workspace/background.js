chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'summarize') {
    fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + YOUR_OPENAI_API_KEY
      },
      body: JSON.stringify({
        prompt: request.text,
        max_tokens: 100
      })
    })
    .then(response => response.json())
    .then(data => sendResponse({summary: data.choices[0].text}))
    .catch(error => console.error('Error:', error));
  }
  return true;  // Will respond asynchronously.
});
