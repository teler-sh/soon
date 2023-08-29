document.querySelector('#sign-up').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission behavior
  
  const form = event.target;
  const formData = new FormData(form);
  
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://getform.io/f/afdbf736-4e24-477e-84ad-cfaf7e5772ff', true);
  
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) { // Request completed
      if (xhr.status === 200) { // Success response
        window.location.href = '/thanks'; // Redirect to "/thanks"
      } else {
        console.log('Request failed with status:', xhr.status);
      }
    }
  };
  
  xhr.send(formData);
});
