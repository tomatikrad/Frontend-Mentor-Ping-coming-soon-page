const form = document.querySelector("form"),
  emailField = document.querySelector("#email");

let emailPattern =
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

form.addEventListener(
  "submit",
  (event) => {
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }

    checkField(form.elements.email, emailPattern);

    form.classList.add("was-validated");
  },
  false
);

emailField.addEventListener("input", (event) => {
  checkField(event.target, emailPattern);

  form.classList.add("was-validated");
});

function checkField(target, pattern) {
  if (!target.value.match(pattern)) {
    target.setCustomValidity("Invalid field.");
  } else {
    target.setCustomValidity("");
  }
}
