fetch('https://api.web3forms.com/submit')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Błąd:', error));
