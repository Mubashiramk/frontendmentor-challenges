const form = document.querySelector(".container form");
const email = document.querySelector(".container form input[type=email]");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let emailValue = email.value;

  if (ValidateEmail(emailValue)) {
    form.classList.remove("errorn");
  } else {
    form.classList.add("errorn");
  }
});
function ValidateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
