function sendEmail() {
  event.preventDefault()

  let templateParams = {
    message: document.getElementById('fname').value
  }

  console.log(templateParams)

  emailjs.send('yahoo', 'portfolio', templateParams)
    .then(function (response) {
      console.log('SUCCESS!', response.status, response.text);
    }, function (error) {
      console.log('FAILED...', error);
    });
}