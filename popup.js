document.getElementById('summarize').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      let url = tabs[0].url;
      fetch('https://your-backend-api-url/summarize', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ url })
      })
      .then(response => response.json())
      .then(data => {
        document.getElementById('summary').innerText = data.summary;
      })
      .catch(error => console.error('Error:', error));
    });
  });
  