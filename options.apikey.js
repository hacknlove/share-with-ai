const apiKeyForm = document.getElementById('apiKeyForm');
const apiKeyInput = document.getElementById('apiKeyInput');

chrome.storage.sync.get(['apiKey'], (result) => {
  apiKeyInput.value = result.apiKey ?? '';
});

apiKeyForm.addEventListener('submit', () => {
  chrome.storage.sync.set({ apiKey: apiKeyInput.value }, () => {
    alert('API Key guardada correctamente.');
  });
});
