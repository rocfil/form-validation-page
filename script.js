const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

// obtendo os valores dos inputs

function checkInputs() {
  //   usando o método trim() para remover espaços
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  usernameValue === ""
    ? setErrorFor(username, "Please insert username")
    : setSuccessFor(username);

  if (emailValue === "") {
    setErrorFor(email, "Email cannot be blank");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "This email is not valid");
  } else {
    setSuccessFor(email);
  }

  passwordValue === ""
    ? setErrorFor(password, "Please insert password")
    : setSuccessFor(password);

  if (password2Value === "") {
    setErrorFor(password2, "Password cannot be blank");
  } else if (password2Value !== passwordValue) {
    setErrorFor(password2, "Password does not match");
  } else {
    setSuccessFor(password2);
  }
}

// creating function that shows error message
function setErrorFor(input, message) {
  // atribuindo a mensagem de erro à variável small para ser exibida na tag small
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  small.innerText = message;

  //   adicionando a classe error
  formControl.className = "form-control error";
}

// shows success message
function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

// para a validação de email, usamos regular expressions para filtragem de caracteres
function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
