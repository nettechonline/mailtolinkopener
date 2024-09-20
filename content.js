function getEmailUrl(provider, email) {
  switch (provider) {
    case 'gmail':
      return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`;
    case 'yahoo':
      return `https://compose.mail.yahoo.com/?to=${encodeURIComponent(email)}`;
    case 'outlook':
      return `https://outlook.live.com/mail/0/deeplink/compose?to=${encodeURIComponent(email)}`;
    case 'proton':
      return `https://mail.proton.me/compose?to=${encodeURIComponent(email)}`;
    default:
      return `mailto:${email}`;
  }
}

document.addEventListener('click', function(e) {
  const target = e.target.closest('a');
  if (target && target.href && target.href.startsWith('mailto:')) {
    e.preventDefault();
    const email = target.href.replace('mailto:', '');
    
    chrome.storage.sync.get('emailProvider', function(data) {
      const provider = data.emailProvider || 'gmail'; // Default to Gmail if not set
      const emailUrl = getEmailUrl(provider, email);
      window.open(emailUrl, '_blank');
    });
  }
});