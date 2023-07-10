// Add any JavaScript functionality here
// You can use JavaScript to enhance user interactions, handle form submissions, or perform other dynamic tasks on your webpage.
// Example: Form submission using AJAX

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent the default form submission

  // Get the form data
  const formData = new FormData(form);

  // Perform AJAX request to submit the form data
  fetch('submit_form.php', {
	method: 'POST',
	body: formData
  })
  .then(response => {
	// Handle the response from the server
	if (response.ok) {
	  // Form submission successful
	  alert('Thank you for your message! We will get back to you soon.');
	  form.reset(); // Reset the form
	} else {
	  // Form submission failed
	  alert('Oops! Something went wrong. Please try again later.');
	}
  })
  .catch(error => {
	console.error('Error:', error);
	alert('Oops! Something went wrong. Please try again later.');
  });
});