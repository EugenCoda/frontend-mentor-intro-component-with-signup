function validateForm(event) {
  // Prevent the form submit
  event.preventDefault();

  // REGEX taken from this article: https://www.w3resource.com/javascript/form/email-validation.php
  let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  let errorIcon = document.querySelectorAll(".error-icon");
  let errorText = document.querySelectorAll(".error-text");

  //   Grabbing the email provided by the user
  let inputFirstName = event.target.elements.first.value;
  let inputLastName = event.target.elements.last.value;
  let inputEmail = event.target.elements.email.value;
  let inputPassword = event.target.elements.password.value;

  if (inputFirstName === "") {
    errorIcon[0].classList.add("active");
    errorText[0].classList.add("active");
  } else {
    errorIcon[0].classList.remove("active");
    errorText[0].classList.remove("active");
  }

  if (inputLastName === "") {
    errorIcon[1].classList.add("active");
    errorText[1].classList.add("active");
  } else {
    errorIcon[1].classList.remove("active");
    errorText[1].classList.remove("active");
  }

  if (inputEmail.match(mailformat)) {
    errorIcon[2].classList.remove("active");
    errorText[2].classList.remove("active");
  } else {
    errorIcon[2].classList.add("active");
    errorText[2].classList.add("active");
  }

  if (inputPassword === "") {
    errorIcon[3].classList.add("active");
    errorText[3].classList.add("active");
  } else {
    errorIcon[3].classList.remove("active");
    errorText[3].classList.remove("active");
  }
}

let form = document.getElementById("form1");

// attach event listener
form.addEventListener("submit", validateForm, true);
