document.getElementById('save').addEventListener('click', function() {
  const provider = document.getElementById('emailProvider').value;
  chrome.storage.sync.set({emailProvider: provider}, function() {
    alert('Settings saved');
  });
});

// Load saved settings
chrome.storage.sync.get('emailProvider', function(data) {
  if (data.emailProvider) {
    document.getElementById('emailProvider').value = data.emailProvider;
  }
});