const firstName = document.querySelector('[name="first"]');
const lastName = document.querySelector('[name="last"]');
const email = document.querySelector('[name="email"]');
const password = document.querySelector('[type="password"]');
const confirmPassword = document.querySelector('[type="confirm-password"]');

const signUpBtn = document.getElementById("btn");

window.addEventListener("load", (e) => {
  e.preventDefault();
  if (
    firstName.value != "" &&
    lastName.value != "" &&
    email.value != "" &&
    password.value != ""
  ) {
    signUpBtn.setAttribute("enabled");
  }
});
signUpBtn.addEventListener("click", () => {
  console.log("Hello!");
});
