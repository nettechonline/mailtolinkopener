document.addEventListener('DOMContentLoaded', function() {
  // Load saved settings
  chrome.storage.sync.get('emailProvider', function(data) {
    if (data.emailProvider) {
      document.getElementById('emailProvider').value = data.emailProvider;
    }
  });

  // Save settings
  document.getElementById('save').addEventListener('click', function() {
    const provider = document.getElementById('emailProvider').value;
    chrome.storage.sync.set({emailProvider: provider}, function() {
      const status = document.getElementById('status');
      status.textContent = 'Settings saved';
      setTimeout(function() {
        status.textContent = '';
      }, 1500);
    });
  });
});