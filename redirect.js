var form = document.querySelector('.pageclip-form');

Pageclip.form(form, {
  onSubmit: function (event) {
    // You can perform any actions before the form is submitted
  },
  onResponse: function (error, response) {
    if (error) {
      console.error('Error submitting form:', error);
    } else {
      window.location.href = 'https://sankalp-happy.github.io/WebProjects/success.html';
    }
  },
  successTemplate: '<span>Thank you!</span>'
});
