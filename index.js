const nameField = document.querySelector("#name");
const userName = document.querySelector("#username");
const passWord = document.querySelector("#password");
const email = document.querySelector("#email");
const confirmPass = document.querySelector("#confirmPass");
const submit = document.querySelector("#submit");

const nameLabel = document.querySelector("#nameLabel");
const userNameLabel = document.querySelector("#usernameLabel");
const passWordLabel = document.querySelector("#passwordLabel");
const emailLabel = document.querySelector("#emailLabel");
const confirmPassLabel = document.querySelector("#confirmPassLabel");
const submitLabel = document.querySelector("#submitLabel");

nameLabel.addEventListener("click", () => {
  nameField.focus();
});
userNameLabel.addEventListener("click", () => {
  userName.focus();
});
passWordLabel.addEventListener("click", () => {
  passWord.focus();
});
emailLabel.addEventListener("click", () => {
  email.focus();
});
confirmPassLabel.addEventListener("click", () => {
  confirmPass.focus();
});
submitLabel.addEventListener("click", () => {
  submit.focus();
});
submit.addEventListener("submit", function (e) {
  e.preventDefault();
  const passWordLength = passWord.length;
  const confirmPassLength = confirmPassWord.length;
  if (passWordLength <= 8 && confirmPassLength.length <= 8) {
    window.alert("You must enter a password longer than 8 characters.");
    if (passWord !== confirmPass) {
      window.alert("Passwords are not identical. Try again.");
    }
  }
});
